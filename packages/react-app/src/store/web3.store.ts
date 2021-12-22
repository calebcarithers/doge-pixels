import {computed, makeObservable, observable} from "mobx";
import {web3Modal} from "../services/web3Modal";
import {BigNumber, Contract, providers} from "ethers";
import {showDebugToast, showErrorToast} from "../DSL/Toast/Toast";
import {ExternalProvider, JsonRpcFetchFunc, Web3Provider} from "@ethersproject/providers/src.ts/web3-provider";
import deployedContracts from "../contracts/hardhat_contracts.json"
import {Signer} from "@ethersproject/abstract-signer";
import {Provider} from "@ethersproject/abstract-provider";
import {isDevModeEnabled, isProduction, isStaging} from "../environment/helpers";
import {Network} from "@ethersproject/networks";
import {DOG20, PX} from "../../../hardhat/types";
import { abbreviate } from "../helpers/strings";
import KobosuJson from "../images/kobosu.json"
import {Http} from "../services";
import Web3providerStore, {EthersContractError} from "./web3provider.store";

interface AddressToPuppers {
    [k: string]: {
        tokenIDs: number[],
        ens?: string
    }
}

class Web3Store extends Web3providerStore {
    D20_PRECISION = BigNumber.from("1000000000000000000")
    DOG_TO_PIXEL_SATOSHIS = BigNumber.from("55239898990000000000000")
    PIXEL_TO_ID_OFFSET = 1000000
    // WIDTH = 640
    // HEIGHT = 480

    // @TODO: getting width & height may be determined to be critical
    // data to be loaded before app mount. right now we sync here with the
    // current rinkeby deployment so PixelPanes by default render the correct color
    WIDTH = 32
    HEIGHT = 24

    @observable
    dogBalance: BigNumber | null = null

    @observable
    pupperBalance?: number

    @observable
    dogContract?: DOG20

    @observable
    pxContract?: PX

    @observable
    addressToPuppers?: AddressToPuppers

    @observable
    pxContractAddress: string

    @observable
    dogContractAddress: string

    constructor() {
        super()
        makeObservable(this)
        this.addressToPuppers = {}

        if (isDevModeEnabled()) {
            this.pxContractAddress = deployedContracts["4"]["rinkeby"]["contracts"]["PX"]["address"]
            this.dogContractAddress = deployedContracts["4"]["rinkeby"]["contracts"]["DOG20"]["address"]
        } else {
            // @TODO: prod deployment
            this.pxContractAddress = deployedContracts["4"]["rinkeby"]["contracts"]["PX"]["address"]
            this.dogContractAddress = deployedContracts["4"]["rinkeby"]["contracts"]["DOG20"]["address"]
        }
    }

    init() {
        if (web3Modal.cachedProvider && !this.web3Provider?.connection) {
            this.connect()
        }
    }

    async connect() {
        try {
            await super.connect()
            this.connectToContracts(this.signer!)
            await this.errorGuardContracts()
            this.afterConnectInit()
        } catch (e) {
            showErrorToast("Error connecting")
        }
    }

    afterConnectInit() {
        this.refreshDogBalance()
        this.refreshPupperBalance()
        this.getPupperOwnershipMap()
        this.getShibaDimensions()
    }

    connectToContracts(signerOrProvider?: Signer | Provider) {
        if (isProduction()) {
            throw Error("Should not be production yet")
        } else if (isStaging() || this.network?.name === "rinkeby") {
            //@ts-ignore
            this.pxContract = new Contract(
              this.pxContractAddress,
              deployedContracts["4"]["rinkeby"]["contracts"]["PX"].abi,
              signerOrProvider
            )
            //@ts-ignore
            this.dogContract = new Contract(
              this.dogContractAddress,
              deployedContracts["4"]["rinkeby"]["contracts"]["DOG20"].abi,
              signerOrProvider
            )
        } else {
            throw Error("Shouldn't hit")
        }
    }

    async errorGuardContracts() {
        const nonContractCode = "0x"
        const pxCode = await this.web3Provider!.getCode(this.pxContract!.address)
        if (pxCode === nonContractCode) {
            await this.disconnect()
            throw Error(`PX address is not a contract, please make sure it is deployed & you are on the correct network. Got ${pxCode} ${this.network?.name} ${this.pxContract?.address}`)
        }
        const dogCode = await this.web3Provider!.getCode(this.dogContract!.address)
        if (dogCode === nonContractCode) {
            await this.disconnect()
            throw Error("DOG20 address is not a contract, please make sure it is deployed & you are on the correct network.")
        }
    }

    getPupperOwnershipMap() {
        return Http.get("/v1/config").then(({ data }) => this.addressToPuppers = data)
    }

    refreshPupperOwnershipMap() {
        return Http.get("/v1/config/refresh").then(({ data }) => this.addressToPuppers = data)
    }

    getShibaDimensions() {
        return Http.get("/v1/px/dimensions").then(({data}) => {
            this.WIDTH = data.width;
            this.HEIGHT = data.height;
        })
    }

    @computed
    get puppersOwned() {
        let myPuppers: number[] = []
        if (this.address && this.address in this.addressToPuppers!) {
            myPuppers = this.addressToPuppers![this.address].tokenIDs
        }
        return myPuppers
    }

    async refreshDogBalance() {
        try {
            this.dogBalance = await this.getDogBalance()
        } catch (e) {
            const {message} = e as EthersContractError
            this.dogBalance = BigNumber.from(0)
            showErrorToast(message)
        }
    }

    async refreshPupperBalance() {
        try {
            this.pupperBalance = await this.getPupperBalance()
        } catch (e) {
            const {message} = e as EthersContractError
            this.pupperBalance = 0
            showErrorToast(message)
        }
    }

    async getDogBalance() {
        const balance = await this.dogContract!.balanceOf(this.address!)
        return balance
    }

    async getPupperBalance() {
        const res = await Http.get(`/v1/px/balance/${this.address}`)
        return res.data.balance
    }

    async getPxOwnerByTokenId(tokenID: number) {
        const res = await Http.get(`/v1/px/owner/${tokenID}`)
        return res.data.address
    }

    async approvePxSpendDog(amount: BigNumber) {
        return this.dogContract!.approve(this.pxContract!.address, amount)
    }

    async getPxDogSpendAllowance() {
        const allowance = await this.dogContract!.allowance(this.address!, this.pxContract!.address)
        return allowance
    }

    async getDogToAccount() {
        const freePixelsInDOG = 10
        //@ts-ignore
        return this.dogContract!.initMock([this.address!], this.DOG_TO_PIXEL_SATOSHIS.mul(freePixelsInDOG))
    }

    async getDogLocked() {
        const res = await Http.get("/v1/dog/locked")
        return res.data.balance
    }

    mintPuppers(pixel_amount: number, forcedGasLimit?: BigNumber) {
        let overrides: any = {}
        if (forcedGasLimit) {
            overrides = {gasLimit: forcedGasLimit}
        }
        return this.pxContract!.mintPuppers(pixel_amount, overrides)
    }

    pupperToPixelCoords(pupper: number) {
        return this.pxContract!.pupperToPixelCoords(pupper)
    }

    burnPupper(pupper: number) {
        return this.pxContract!.burnPupper(pupper)
    }

    burnPuppers(puppers: number[]) {
        return this.pxContract!.burnPuppers(puppers)
    }

    pupperToIndexLocal(pupper: number) {
        return pupper - this.PIXEL_TO_ID_OFFSET
    }

    pupperToPixelCoordsLocal(pupper: number) {
        const index = this.pupperToIndexLocal(pupper)
        return [index % this.WIDTH, Math.floor(index / this.WIDTH)]
    }

    pupperToHexLocal(pupper: number) {
        const [x, y] = this.pupperToPixelCoordsLocal(pupper)
        //@ts-ignore
        return KobosuJson[y][x]
    }

    coordinateToPupperLocal(x: number, y: number) {
        return ((this.WIDTH * y) + x) + this.PIXEL_TO_ID_OFFSET
    }
}


export default Web3Store