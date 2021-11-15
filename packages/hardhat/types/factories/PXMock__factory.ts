/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PXMock, PXMockInterface } from "../PXMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "address",
        name: "DOG20Address",
        type: "address",
      },
    ],
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    inputs: [],
    name: "DOG_TO_PIXEL_SATOSHIS",
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
    inputs: [],
    name: "INDEX_OFFSET",
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
    inputs: [],
    name: "MAGIC_NULL",
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
    inputs: [],
    name: "baseURI",
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
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pupper",
        type: "uint256",
      },
    ],
    name: "burnPupper",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "exists",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "fuelPuppyDispenser",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintPupper",
    outputs: [
      {
        internalType: "uint256",
        name: "pupper",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "qty",
        type: "uint256",
      },
    ],
    name: "mintPuppers",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "owner",
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
        internalType: "uint256",
        name: "pupper",
        type: "uint256",
      },
    ],
    name: "pupperToPixel",
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
        name: "pupper",
        type: "uint256",
      },
    ],
    name: "pupperToPixelCoords",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "puppersRemaining",
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
    inputs: [],
    name: "randYish",
    outputs: [
      {
        internalType: "uint256",
        name: "ret",
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
        name: "maxRand",
        type: "uint256",
      },
    ],
    name: "randYishInRange",
    outputs: [
      {
        internalType: "uint256",
        name: "ret",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    name: "safeMint",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDOG_TO_PIXEL_SATOSHIS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setSupply",
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
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405264014941658b600b55620f4240600c556000600d553480156200002657600080fd5b50604051620024fe380380620024fe83398101604081905262000049916200029e565b828282828281600090805190602001906200006692919062000145565b5080516200007c90600190602084019062000145565b5050506200009962000093620000ef60201b60201c565b620000f3565b6001600160a01b038116620000ad57600080fd5b6001600160601b0319606082901b16608052600a80620000ce818062000327565b600855620000dd818362000327565b60075550620003a69650505050505050565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001539062000353565b90600052602060002090601f016020900481019282620001775760008555620001c2565b82601f106200019257805160ff1916838001178555620001c2565b82800160010185558215620001c2579182015b82811115620001c2578251825591602001919060010190620001a5565b50620001d0929150620001d4565b5090565b5b80821115620001d05760008155600101620001d5565b600082601f830112620001fc578081fd5b81516001600160401b038082111562000219576200021962000390565b604051601f8301601f19908116603f0116810190828211818310171562000244576200024462000390565b8160405283815260209250868385880101111562000260578485fd5b8491505b8382101562000283578582018301518183018401529082019062000264565b838211156200029457848385830101525b9695505050505050565b600080600060608486031215620002b3578283fd5b83516001600160401b0380821115620002ca578485fd5b620002d887838801620001eb565b94506020860151915080821115620002ee578384fd5b50620002fd86828701620001eb565b604086015190935090506001600160a01b03811681146200031c578182fd5b809150509250925092565b60008160001904831182151516156200034e57634e487b7160e01b81526011600452602481fd5b500290565b600181811c908216806200036857607f821691505b602082108114156200038a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160601c61212b620003d3600039600081816109e001528181610f480152611022015261212b6000f3fe608060405234801561001057600080fd5b50600436106102275760003560e01c806379d90b1711610130578063b43ff0f0116100b8578063d85d95ef1161007c578063d85d95ef1461047d578063e25aee2f14610485578063e4e4dc4214610498578063e985e9c5146104ab578063f2fde38b146104e757600080fd5b8063b43ff0f014610433578063b807f8571461043c578063b88d4fde1461044f578063bcb00f2914610462578063c87b56dd1461046a57600080fd5b806395d89b41116100ff57806395d89b41146103f357806397b874f7146103fb578063a035386d14610404578063a14481941461040d578063a22cb4651461042057600080fd5b806379d90b171461039c5780637e5c067f146103bc5780638832e6e3146103cf5780638da5cb5b146103e257600080fd5b806340c10f19116101b35780636352211e116101825780636352211e146103535780636c0360eb146103665780636d677a741461036e57806370a0823114610381578063715018a61461039457600080fd5b806340c10f191461030757806342842e0e1461031a57806342966c681461032d5780634f558e791461034057600080fd5b8063095ea7b3116101fa578063095ea7b3146102ab57806318160ddd146102c057806323b872dd146102c95780632d99e94f146102dc5780633b4c4b25146102ef57600080fd5b806301ffc9a71461022c578063055fa0d51461025457806306fdde031461026b578063081812fc14610280575b600080fd5b61023f61023a366004611d93565b6104fa565b60405190151581526020015b60405180910390f35b61025d60075481565b60405190815260200161024b565b61027361054c565b60405161024b9190611eac565b61029361028e366004611dcb565b6105de565b6040516001600160a01b03909116815260200161024b565b6102be6102b9366004611cf9565b610678565b005b61025d60085481565b6102be6102d7366004611c22565b61078e565b61025d6102ea366004611dcb565b6107bf565b6102be6102fd366004611dcb565b6007819055600855565b6102be610315366004611cf9565b6107d4565b6102be610328366004611c22565b6107e2565b6102be61033b366004611dcb565b6107fd565b61023f61034e366004611dcb565b610809565b610293610361366004611dcb565b610828565b61027361089f565b6102be61037c366004611dcb565b6108bb565b61025d61038f366004611bd6565b610a6b565b6102be610af2565b6103af6103aa366004611dcb565b610b28565b60405161024b9190611e7b565b6102be6103ca366004611cf9565b610b75565b6102be6103dd366004611d22565b610b99565b6006546001600160a01b0316610293565b610273610ba4565b61025d600d5481565b61025d600b5481565b6102be61041b366004611cf9565b610bb3565b6102be61042e366004611cc3565b610bbd565b61025d600c5481565b6102be61044a366004611dcb565b600b55565b6102be61045d366004611c5d565b610bc8565b61025d610c00565b610273610478366004611dcb565b610d22565b61025d610e0a565b6102be610493366004611dcb565b610fd2565b61025d6104a6366004611dcb565b6110a6565b61023f6104b9366004611bf0565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6102be6104f5366004611bd6565b6110b6565b60006001600160e01b031982166380ac58cd60e01b148061052b57506001600160e01b03198216635b5e139f60e01b145b8061054657506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461055b90612025565b80601f016020809104026020016040519081016040528092919081815260200182805461058790612025565b80156105d45780601f106105a9576101008083540402835291602001916105d4565b820191906000526020600020905b8154815290600101906020018083116105b757829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661065c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061068382610828565b9050806001600160a01b0316836001600160a01b031614156106f15760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610653565b336001600160a01b038216148061070d575061070d81336104b9565b61077f5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610653565b610789838361114e565b505050565b61079833826111bc565b6107b45760405162461bcd60e51b815260040161065390611f46565b6107898383836112b3565b6000816107ca610c00565b610546919061207b565b6107de8282611453565b5050565b61078983838360405180602001604052806000815250610bc8565b610806816115b7565b50565b6000818152600260205260408120546001600160a01b03161515610546565b6000818152600260205260408120546001600160a01b0316806105465760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610653565b60606108b660408051602081019091526000815290565b905090565b600d548114156108ff5760405162461bcd60e51b815260206004820152600f60248201526e507570706572206973206d6167696360881b6044820152606401610653565b3361090982610828565b6001600160a01b0316146109555760405162461bcd60e51b8152602060048201526013602482015272507570706572206973206e6f7420796f75727360681b6044820152606401610653565b6000818152600a6020526040812054600754600c549192916109779190611f97565b60008181526009602081815260408084208054898652600a845282862087905580865282862089905588865293909252832082905591839052908590559091506109c0846115b7565b600b5460405163a9059cbb60e01b815233600482015260248101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b158015610a2c57600080fd5b505af1158015610a40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a649190611d77565b5050505050565b60006001600160a01b038216610ad65760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610653565b506001600160a01b031660009081526003602052604090205490565b6006546001600160a01b03163314610b1c5760405162461bcd60e51b815260040161065390611f11565b610b2660006116a4565b565b610b30611b15565b6000600c5483610b409190611fe2565b9050604051806040016040528061020083610b5b919061207b565b8152602001610b6c61020084611faf565b90529392505050565b60005b8181101561078957610b88610e0a565b50610b9281612060565b9050610b78565b6107898383836116f6565b60606001805461055b90612025565b6107de8282611729565b6107de338383611743565b610bd233836111bc565b610bee5760405162461bcd60e51b815260040161065390611f46565b610bfa84848484611812565b50505050565b6007546040516bffffffffffffffffffffffff193360601b1660208201526000918291439042906034016040516020818303038152906040528051906020012060001c610c4d9190611faf565b6040516bffffffffffffffffffffffff194160601b166020820152459042906034016040516020818303038152906040528051906020012060001c610c929190611faf565b610c9c4442611f97565b610ca69190611f97565b610cb09190611f97565b610cba9190611f97565b610cc49190611f97565b610cce9190611f97565b604051602001610ce091815260200190565b60408051601f1981840301815291905280516020909101209050610d066103e882611faf565b610d12906103e8611fc3565b610d1c9082611fe2565b91505090565b6000818152600260205260409020546060906001600160a01b0316610da15760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610653565b6000610db860408051602081019091526000815290565b90506000815111610dd85760405180602001604052806000815250610e03565b80610de284611845565b604051602001610df3929190611e0f565b6040516020818303038152906040525b9392505050565b60008060075411610e545760405162461bcd60e51b81526020600482015260146024820152734e6f20707570706572732072656d61696e696e6760601b6044820152606401610653565b6000610e616007546107bf565b600c54610e6e9190611f97565b600d546000828152600960205260409020549192501415610e9b5760008181526009602052604090208190555b60006001600754600c54610eaf9190611f97565b610eb99190611fe2565b600d546000828152600960205260409020549192501415610ee65760008181526009602052604090208190555b60008281526009602090815260408083208054858552828520805490925590819055808452600a9092529091208290559250610f223384611453565b600b546040516323b872dd60e01b815233600482015230602482015260448101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b158015610f9457600080fd5b505af1158015610fa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcc9190611d77565b50505090565b6006546001600160a01b03163314610ffc5760405162461bcd60e51b815260040161065390611f11565b600b546040516323b872dd60e01b815233600482015230602482015260448101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561106e57600080fd5b505af1158015611082573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107de9190611d77565b6000600c54826105469190611fe2565b6006546001600160a01b031633146110e05760405162461bcd60e51b815260040161065390611f11565b6001600160a01b0381166111455760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610653565b610806816116a4565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061118382610828565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166112355760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610653565b600061124083610828565b9050806001600160a01b0316846001600160a01b0316148061127b5750836001600160a01b0316611270846105de565b6001600160a01b0316145b806112ab57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166112c682610828565b6001600160a01b03161461132e5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610653565b6001600160a01b0382166113905760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610653565b61139b60008261114e565b6001600160a01b03831660009081526003602052604081208054600192906113c4908490611fe2565b90915550506001600160a01b03821660009081526003602052604081208054600192906113f2908490611f97565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b0382166114a95760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610653565b6000818152600260205260409020546001600160a01b03161561150e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610653565b6001600160a01b0382166000908152600360205260408120805460019290611537908490611f97565b9091555050600081815260026020526040812080546001600160a01b0319166001600160a01b0385161790556007805460019290611576908490611fe2565b909155505060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006115c282610828565b90506115cf60008361114e565b6115fe6040518060400160405280600e81526020016d313ab93734b73390383ab83832b960911b81525061195f565b611607826119a2565b6001600160a01b0381166000908152600360205260408120805460019290611630908490611fe2565b9250508190555060016007600082825461164a9190611f97565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6117008383611453565b61170d60008484846119e7565b6107895760405162461bcd60e51b815260040161065390611ebf565b6107de8282604051806020016040528060008152506116f6565b816001600160a01b0316836001600160a01b031614156117a55760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610653565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61181d8484846112b3565b611829848484846119e7565b610bfa5760405162461bcd60e51b815260040161065390611ebf565b6060816118695750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611893578061187d81612060565b915061188c9050600a83611faf565b915061186d565b60008167ffffffffffffffff8111156118bc57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156118e6576020820181803683370190505b5090505b84156112ab576118fb600183611fe2565b9150611908600a8661207b565b611913906030611f97565b60f81b81838151811061193657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611958600a86611faf565b94506118ea565b610806816040516024016119739190611eac565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052611af4565b610806816040516024016119b891815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f5b1bba960e01b179052611af4565b60006001600160a01b0384163b15611ae957604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611a2b903390899088908890600401611e3e565b602060405180830381600087803b158015611a4557600080fd5b505af1925050508015611a75575060408051601f3d908101601f19168201909252611a7291810190611daf565b60015b611acf573d808015611aa3576040519150601f19603f3d011682016040523d82523d6000602084013e611aa8565b606091505b508051611ac75760405162461bcd60e51b815260040161065390611ebf565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506112ab565b506001949350505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60405180604001604052806002906020820280368337509192915050565b80356001600160a01b0381168114611b4a57600080fd5b919050565b600082601f830112611b5f578081fd5b813567ffffffffffffffff80821115611b7a57611b7a6120bb565b604051601f8301601f19908116603f01168101908282118183101715611ba257611ba26120bb565b81604052838152866020858801011115611bba578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215611be7578081fd5b610e0382611b33565b60008060408385031215611c02578081fd5b611c0b83611b33565b9150611c1960208401611b33565b90509250929050565b600080600060608486031215611c36578081fd5b611c3f84611b33565b9250611c4d60208501611b33565b9150604084013590509250925092565b60008060008060808587031215611c72578081fd5b611c7b85611b33565b9350611c8960208601611b33565b925060408501359150606085013567ffffffffffffffff811115611cab578182fd5b611cb787828801611b4f565b91505092959194509250565b60008060408385031215611cd5578182fd5b611cde83611b33565b91506020830135611cee816120d1565b809150509250929050565b60008060408385031215611d0b578182fd5b611d1483611b33565b946020939093013593505050565b600080600060608486031215611d36578283fd5b611d3f84611b33565b925060208401359150604084013567ffffffffffffffff811115611d61578182fd5b611d6d86828701611b4f565b9150509250925092565b600060208284031215611d88578081fd5b8151610e03816120d1565b600060208284031215611da4578081fd5b8135610e03816120df565b600060208284031215611dc0578081fd5b8151610e03816120df565b600060208284031215611ddc578081fd5b5035919050565b60008151808452611dfb816020860160208601611ff9565b601f01601f19169290920160200192915050565b60008351611e21818460208801611ff9565b835190830190611e35818360208801611ff9565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611e7190830184611de3565b9695505050505050565b60408101818360005b6002811015611ea3578151835260209283019290910190600101611e84565b50505092915050565b602081526000610e036020830184611de3565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611faa57611faa61208f565b500190565b600082611fbe57611fbe6120a5565b500490565b6000816000190483118215151615611fdd57611fdd61208f565b500290565b600082821015611ff457611ff461208f565b500390565b60005b83811015612014578181015183820152602001611ffc565b83811115610bfa5750506000910152565b600181811c9082168061203957607f821691505b6020821081141561205a57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156120745761207461208f565b5060010190565b60008261208a5761208a6120a5565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b801515811461080657600080fd5b6001600160e01b03198116811461080657600080fdfea2646970667358221220346b1d7bb6cbf0926ee65283603a4fd0cfe47397b80e5c63d4d44269d20f776764736f6c63430008040033";

type PXMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PXMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PXMock__factory extends ContractFactory {
  constructor(...args: PXMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    DOG20Address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PXMock> {
    return super.deploy(
      name_,
      symbol_,
      DOG20Address,
      overrides || {}
    ) as Promise<PXMock>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    DOG20Address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      DOG20Address,
      overrides || {}
    );
  }
  attach(address: string): PXMock {
    return super.attach(address) as PXMock;
  }
  connect(signer: Signer): PXMock__factory {
    return super.connect(signer) as PXMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PXMockInterface {
    return new utils.Interface(_abi) as PXMockInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PXMock {
    return new Contract(address, _abi, signerOrProvider) as PXMock;
  }
}
