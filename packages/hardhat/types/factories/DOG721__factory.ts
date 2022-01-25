/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DOG721, DOG721Interface } from "../DOG721";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "holders",
        type: "address[]",
      },
    ],
    name: "initMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006006553480156200001657600080fd5b506040805180820182526006815265444f4737323160d01b6020808301918252835180850190945260048452634437323160e01b908401528151919291620000619160009162000080565b5080516200007790600190602084019062000080565b50505062000163565b8280546200008e9062000126565b90600052602060002090601f016020900481019282620000b25760008555620000fd565b82601f10620000cd57805160ff1916838001178555620000fd565b82800160010185558215620000fd579182015b82811115620000fd578251825591602001919060010190620000e0565b506200010b9291506200010f565b5090565b5b808211156200010b576000815560010162000110565b600181811c908216806200013b57607f821691505b602082108114156200015d57634e487b7160e01b600052602260045260246000fd5b50919050565b61153d80620001736000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101e1578063b88d4fde146101f4578063c87b56dd14610207578063e985e9c51461021a576100ea565b80636352211e146101a557806370a08231146101b857806395d89b41146101d9576100ea565b8063095ea7b3116100c8578063095ea7b3146101575780630b4a66e11461016c57806323b872dd1461017f57806342842e0e14610192576100ea565b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004611204565b610256565b60405190151581526020015b60405180910390f35b61011f6102aa565b60405161010e91906112ec565b61013f61013a36600461123c565b61033c565b6040516001600160a01b03909116815260200161010e565b61016a61016536600461112c565b6103d6565b005b61016a61017a366004611155565b6104ec565b61016a61018d366004610fff565b610574565b61016a6101a0366004610fff565b6105a5565b61013f6101b336600461123c565b6105c0565b6101cb6101c6366004610fb3565b610637565b60405190815260200161010e565b61011f6106be565b61016a6101ef3660046110f2565b6106cd565b61016a61020236600461103a565b6106d8565b61011f61021536600461123c565b610710565b610102610228366004610fcd565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061028757506001600160e01b03198216635b5e139f60e01b145b806102a257506301ffc9a760e01b6001600160e01b03198316145b90505b919050565b6060600080546102b990611442565b80601f01602080910402602001604051908101604052809291908181526020018280546102e590611442565b80156103325780601f1061030757610100808354040283529160200191610332565b820191906000526020600020905b81548152906001019060200180831161031557829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166103ba5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006103e1826105c0565b9050806001600160a01b0316836001600160a01b0316141561044f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016103b1565b336001600160a01b038216148061046b575061046b8133610228565b6104dd5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016103b1565b6104e783836107f8565b505050565b60005b8151811015610570576006600081546105079061147d565b9190508190555061055e82828151811061053157634e487b7160e01b600052603260045260246000fd5b602002602001015160065460405180604001604052806004815260200163183c1a1960e11b815250610866565b806105688161147d565b9150506104ef565b5050565b61057e3382610899565b61059a5760405162461bcd60e51b81526004016103b190611351565b6104e7838383610990565b6104e7838383604051806020016040528060008152506106d8565b6000818152600260205260408120546001600160a01b0316806102a25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016103b1565b60006001600160a01b0382166106a25760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016103b1565b506001600160a01b031660009081526003602052604090205490565b6060600180546102b990611442565b610570338383610b30565b6106e23383610899565b6106fe5760405162461bcd60e51b81526004016103b190611351565b61070a84848484610bff565b50505050565b6000818152600260205260409020546060906001600160a01b031661078f5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016103b1565b60006107a660408051602081019091526000815290565b905060008151116107c657604051806020016040528060008152506107f1565b806107d084610c32565b6040516020016107e1929190611280565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061082d826105c0565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6108708383610d4d565b61087d6000848484610e8f565b6104e75760405162461bcd60e51b81526004016103b1906112ff565b6000818152600260205260408120546001600160a01b03166109125760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103b1565b600061091d836105c0565b9050806001600160a01b0316846001600160a01b031614806109585750836001600160a01b031661094d8461033c565b6001600160a01b0316145b8061098857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166109a3826105c0565b6001600160a01b031614610a0b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016103b1565b6001600160a01b038216610a6d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103b1565b610a786000826107f8565b6001600160a01b0383166000908152600360205260408120805460019290610aa19084906113ff565b90915550506001600160a01b0382166000908152600360205260408120805460019290610acf9084906113d3565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610b925760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103b1565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610c0a848484610990565b610c1684848484610e8f565b61070a5760405162461bcd60e51b81526004016103b1906112ff565b606081610c5757506040805180820190915260018152600360fc1b60208201526102a5565b8160005b8115610c815780610c6b8161147d565b9150610c7a9050600a836113eb565b9150610c5b565b60008167ffffffffffffffff811115610caa57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610cd4576020820181803683370190505b5090505b841561098857610ce96001836113ff565b9150610cf6600a86611498565b610d019060306113d3565b60f81b818381518110610d2457634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610d46600a866113eb565b9450610cd8565b6001600160a01b038216610da35760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103b1565b6000818152600260205260409020546001600160a01b031615610e085760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103b1565b6001600160a01b0382166000908152600360205260408120805460019290610e319084906113d3565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b15610f9157604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610ed39033908990889088906004016112af565b602060405180830381600087803b158015610eed57600080fd5b505af1925050508015610f1d575060408051601f3d908101601f19168201909252610f1a91810190611220565b60015b610f77573d808015610f4b576040519150601f19603f3d011682016040523d82523d6000602084013e610f50565b606091505b508051610f6f5760405162461bcd60e51b81526004016103b1906112ff565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610988565b506001949350505050565b80356001600160a01b03811681146102a557600080fd5b600060208284031215610fc4578081fd5b6107f182610f9c565b60008060408385031215610fdf578081fd5b610fe883610f9c565b9150610ff660208401610f9c565b90509250929050565b600080600060608486031215611013578081fd5b61101c84610f9c565b925061102a60208501610f9c565b9150604084013590509250925092565b6000806000806080858703121561104f578081fd5b61105885610f9c565b93506020611067818701610f9c565b935060408601359250606086013567ffffffffffffffff8082111561108a578384fd5b818801915088601f83011261109d578384fd5b8135818111156110af576110af6114d8565b6110c1601f8201601f191685016113a2565b915080825289848285010111156110d6578485fd5b8084840185840137810190920192909252939692955090935050565b60008060408385031215611104578182fd5b61110d83610f9c565b915060208301358015158114611121578182fd5b809150509250929050565b6000806040838503121561113e578182fd5b61114783610f9c565b946020939093013593505050565b60006020808385031215611167578182fd5b823567ffffffffffffffff8082111561117e578384fd5b818501915085601f830112611191578384fd5b8135818111156111a3576111a36114d8565b8060051b91506111b48483016113a2565b8181528481019084860184860187018a10156111ce578788fd5b8795505b838610156111f7576111e381610f9c565b8352600195909501949186019186016111d2565b5098975050505050505050565b600060208284031215611215578081fd5b81356107f1816114ee565b600060208284031215611231578081fd5b81516107f1816114ee565b60006020828403121561124d578081fd5b5035919050565b6000815180845261126c816020860160208601611416565b601f01601f19169290920160200192915050565b60008351611292818460208801611416565b8351908301906112a6818360208801611416565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906112e290830184611254565b9695505050505050565b6000602082526107f16020830184611254565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b604051601f8201601f1916810167ffffffffffffffff811182821017156113cb576113cb6114d8565b604052919050565b600082198211156113e6576113e66114ac565b500190565b6000826113fa576113fa6114c2565b500490565b600082821015611411576114116114ac565b500390565b60005b83811015611431578181015183820152602001611419565b8381111561070a5750506000910152565b600181811c9082168061145657607f821691505b6020821081141561147757634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611491576114916114ac565b5060010190565b6000826114a7576114a76114c2565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461150457600080fd5b5056fea264697066735822122048c7cff2434ed37ce105c79619ff08b6e52a345bf1bce0cdedbe9d68925b196364736f6c63430008030033";

type DOG721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DOG721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DOG721__factory extends ContractFactory {
  constructor(...args: DOG721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DOG721> {
    return super.deploy(overrides || {}) as Promise<DOG721>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DOG721 {
    return super.attach(address) as DOG721;
  }
  connect(signer: Signer): DOG721__factory {
    return super.connect(signer) as DOG721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DOG721Interface {
    return new utils.Interface(_abi) as DOG721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DOG721 {
    return new Contract(address, _abi, signerOrProvider) as DOG721;
  }
}
