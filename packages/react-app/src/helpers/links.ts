import {isDevModeEnabled} from "../environment/helpers";
import AppStore from "../store/App.store";

export const openToEtherscanAddress = (address: string) => {
  let link = `https://etherscan.io/address/${address}`
  if (isDevModeEnabled()) {
    link = `https://${AppStore.web3.network?.name}.etherscan.io/address/${address}`
  }
  return window.open(link, "_blank")
}