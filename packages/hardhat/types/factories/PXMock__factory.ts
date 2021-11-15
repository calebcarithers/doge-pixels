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
  "0x60a060405264014941658b600b553480156200001a57600080fd5b50604051620023a4380380620023a48339810160408190526200003d9162000292565b828282828281600090805190602001906200005a92919062000139565b5080516200007090600190602084019062000139565b5050506200008d62000087620000e360201b60201c565b620000e7565b6001600160a01b038116620000a157600080fd5b6001600160601b0319606082901b16608052600a80620000c281806200031b565b600855620000d181836200031b565b600755506200039a9650505050505050565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001479062000347565b90600052602060002090601f0160209004810192826200016b5760008555620001b6565b82601f106200018657805160ff1916838001178555620001b6565b82800160010185558215620001b6579182015b82811115620001b657825182559160200191906001019062000199565b50620001c4929150620001c8565b5090565b5b80821115620001c45760008155600101620001c9565b600082601f830112620001f0578081fd5b81516001600160401b03808211156200020d576200020d62000384565b604051601f8301601f19908116603f0116810190828211818310171562000238576200023862000384565b8160405283815260209250868385880101111562000254578485fd5b8491505b8382101562000277578582018301518183018401529082019062000258565b838211156200028857848385830101525b9695505050505050565b600080600060608486031215620002a7578283fd5b83516001600160401b0380821115620002be578485fd5b620002cc87838801620001df565b94506020860151915080821115620002e2578384fd5b50620002f186828701620001df565b604086015190935090506001600160a01b038116811462000310578182fd5b809150509250925092565b60008160001904831182151516156200034257634e487b7160e01b81526011600452602481fd5b500290565b600181811c908216806200035c57607f821691505b602082108114156200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160601c611fdd620003c76000396000818161094301528181610e5a0152610f330152611fdd6000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c806370a082311161011a578063a22cb465116100ad578063c87b56dd1161007c578063c87b56dd14610407578063d85d95ef1461041a578063e25aee2f14610422578063e985e9c514610435578063f2fde38b1461047157600080fd5b8063a22cb465146103c6578063b807f857146103d9578063b88d4fde146103ec578063bcb00f29146103ff57600080fd5b80638da5cb5b116100e95780638da5cb5b1461039157806395d89b41146103a2578063a035386d146103aa578063a1448194146103b357600080fd5b806370a0823114610350578063715018a6146103635780637e5c067f1461036b5780638832e6e31461037e57600080fd5b80633b4c4b25116101925780634f558e79116101615780634f558e791461030f5780636352211e146103225780636c0360eb146103355780636d677a741461033d57600080fd5b80633b4c4b25146102c357806340c10f19146102d657806342842e0e146102e957806342966c68146102fc57600080fd5b8063095ea7b3116101ce578063095ea7b31461027f57806318160ddd1461029457806323b872dd1461029d5780632d99e94f146102b057600080fd5b806301ffc9a714610200578063055fa0d51461022857806306fdde031461023f578063081812fc14610254575b600080fd5b61021361020e366004611c76565b610484565b60405190151581526020015b60405180910390f35b61023160075481565b60405190815260200161021f565b6102476104d6565b60405161021f9190611d5e565b610267610262366004611cae565b610568565b6040516001600160a01b03909116815260200161021f565b61029261028d366004611bdc565b610602565b005b61023160085481565b6102926102ab366004611b05565b610718565b6102316102be366004611cae565b610749565b6102926102d1366004611cae565b61075e565b6102926102e4366004611bdc565b61079a565b6102926102f7366004611b05565b6107a4565b61029261030a366004611cae565b6107bf565b61021361031d366004611cae565b6107cb565b610267610330366004611cae565b6107ea565b610247610861565b61029261034b366004611cae565b61087d565b61023161035e366004611ab9565b6109cd565b610292610a54565b610292610379366004611bdc565b610a8a565b61029261038c366004611c05565b610ad8565b6006546001600160a01b0316610267565b610247610ae3565b610231600b5481565b6102926103c1366004611bdc565b610af2565b6102926103d4366004611ba6565b610afc565b6102926103e7366004611cae565b600b55565b6102926103fa366004611b40565b610b07565b610231610b39565b610247610415366004611cae565b610c5b565b610231610d43565b610292610430366004611cae565b610ee3565b610213610443366004611ad3565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61029261047f366004611ab9565b610fb7565b60006001600160e01b031982166380ac58cd60e01b14806104b557506001600160e01b03198216635b5e139f60e01b145b806104d057506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546104e590611ed7565b80601f016020809104026020016040519081016040528092919081815260200182805461051190611ed7565b801561055e5780601f106105335761010080835404028352916020019161055e565b820191906000526020600020905b81548152906001019060200180831161054157829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105e65760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061060d826107ea565b9050806001600160a01b0316836001600160a01b0316141561067b5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105dd565b336001600160a01b038216148061069757506106978133610443565b6107095760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105dd565b610713838361104f565b505050565b61072233826110bd565b61073e5760405162461bcd60e51b81526004016105dd90611df8565b6107138383836111b4565b600081610754610b39565b6104d09190611f2d565b6007819055600881905560005b60085481101561079657600081815260096020526040902081905561078f81611f12565b905061076b565b5050565b6107968282611354565b61071383838360405180602001604052806000815250610b07565b6107c8816114b8565b50565b6000818152600260205260408120546001600160a01b031615156104d0565b6000818152600260205260408120546001600160a01b0316806104d05760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016105dd565b606061087860408051602081019091526000815290565b905090565b33610887826107ea565b6001600160a01b0316146108d35760405162461bcd60e51b8152602060048201526013602482015272507570706572206973206e6f7420796f75727360681b60448201526064016105dd565b6000818152600a60208181526040808420805460078054808852600980875285892054978752935585875283872082905581875291909352818520849055548452909220839055610923836114b8565b600b5460405163a9059cbb60e01b815233600482015260248101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b15801561098f57600080fd5b505af11580156109a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c79190611c5a565b50505050565b60006001600160a01b038216610a385760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016105dd565b506001600160a01b031660009081526003602052604090205490565b6006546001600160a01b03163314610a7e5760405162461bcd60e51b81526004016105dd90611dc3565b610a8860006115a5565b565b6006546001600160a01b03163314610ab45760405162461bcd60e51b81526004016105dd90611dc3565b60005b8181101561071357610ac7610d43565b50610ad181611f12565b9050610ab7565b6107138383836115f7565b6060600180546104e590611ed7565b610796828261162a565b610796338383611644565b610b1133836110bd565b610b2d5760405162461bcd60e51b81526004016105dd90611df8565b6109c784848484611713565b6007546040516bffffffffffffffffffffffff193360601b1660208201526000918291439042906034016040516020818303038152906040528051906020012060001c610b869190611e61565b6040516bffffffffffffffffffffffff194160601b166020820152459042906034016040516020818303038152906040528051906020012060001c610bcb9190611e61565b610bd54442611e49565b610bdf9190611e49565b610be99190611e49565b610bf39190611e49565b610bfd9190611e49565b610c079190611e49565b604051602001610c1991815260200190565b60408051601f1981840301815291905280516020909101209050610c3f6103e882611e61565b610c4b906103e8611e75565b610c559082611e94565b91505090565b6000818152600260205260409020546060906001600160a01b0316610cda5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016105dd565b6000610cf160408051602081019091526000815290565b90506000815111610d115760405180602001604052806000815250610d3c565b80610d1b84611746565b604051602001610d2c929190611cf2565b6040516020818303038152906040525b9392505050565b60008060075411610d8d5760405162461bcd60e51b81526020600482015260146024820152734e6f20707570706572732072656d61696e696e6760601b60448201526064016105dd565b6000610d9a600754610749565b600081815260096020819052604082205460075490955092935091610dc190600190611e94565b815260200190815260200160002054600960008381526020019081526020016000208190555081600960006001600754610dfb9190611e94565b8152602081019190915260400160002055600754610e1b90600190611e94565b6000838152600a6020526040902055610e343383611354565b600b546040516323b872dd60e01b815233600482015230602482015260448101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b158015610ea657600080fd5b505af1158015610eba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ede9190611c5a565b505090565b6006546001600160a01b03163314610f0d5760405162461bcd60e51b81526004016105dd90611dc3565b600b546040516323b872dd60e01b815233600482015230602482015260448101919091527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b158015610f7f57600080fd5b505af1158015610f93573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107969190611c5a565b6006546001600160a01b03163314610fe15760405162461bcd60e51b81526004016105dd90611dc3565b6001600160a01b0381166110465760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105dd565b6107c8816115a5565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190611084826107ea565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166111365760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105dd565b6000611141836107ea565b9050806001600160a01b0316846001600160a01b0316148061117c5750836001600160a01b031661117184610568565b6001600160a01b0316145b806111ac57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166111c7826107ea565b6001600160a01b03161461122f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016105dd565b6001600160a01b0382166112915760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105dd565b61129c60008261104f565b6001600160a01b03831660009081526003602052604081208054600192906112c5908490611e94565b90915550506001600160a01b03821660009081526003602052604081208054600192906112f3908490611e49565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b0382166113aa5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105dd565b6000818152600260205260409020546001600160a01b03161561140f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105dd565b6001600160a01b0382166000908152600360205260408120805460019290611438908490611e49565b9091555050600081815260026020526040812080546001600160a01b0319166001600160a01b0385161790556007805460019290611477908490611e94565b909155505060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006114c3826107ea565b90506114d060008361104f565b6114ff6040518060400160405280600e81526020016d313ab93734b73390383ab83832b960911b815250611860565b611508826118a3565b6001600160a01b0381166000908152600360205260408120805460019290611531908490611e94565b9250508190555060016007600082825461154b9190611e49565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6116018383611354565b61160e60008484846118e8565b6107135760405162461bcd60e51b81526004016105dd90611d71565b6107968282604051806020016040528060008152506115f7565b816001600160a01b0316836001600160a01b031614156116a65760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105dd565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61171e8484846111b4565b61172a848484846118e8565b6109c75760405162461bcd60e51b81526004016105dd90611d71565b60608161176a5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611794578061177e81611f12565b915061178d9050600a83611e61565b915061176e565b60008167ffffffffffffffff8111156117bd57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156117e7576020820181803683370190505b5090505b84156111ac576117fc600183611e94565b9150611809600a86611f2d565b611814906030611e49565b60f81b81838151811061183757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611859600a86611e61565b94506117eb565b6107c8816040516024016118749190611d5e565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526119f5565b6107c8816040516024016118b991815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f5b1bba960e01b1790526119f5565b60006001600160a01b0384163b156119ea57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061192c903390899088908890600401611d21565b602060405180830381600087803b15801561194657600080fd5b505af1925050508015611976575060408051601f3d908101601f1916820190925261197391810190611c92565b60015b6119d0573d8080156119a4576040519150601f19603f3d011682016040523d82523d6000602084013e6119a9565b606091505b5080516119c85760405162461bcd60e51b81526004016105dd90611d71565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506111ac565b506001949350505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b80356001600160a01b0381168114611a2d57600080fd5b919050565b600082601f830112611a42578081fd5b813567ffffffffffffffff80821115611a5d57611a5d611f6d565b604051601f8301601f19908116603f01168101908282118183101715611a8557611a85611f6d565b81604052838152866020858801011115611a9d578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215611aca578081fd5b610d3c82611a16565b60008060408385031215611ae5578081fd5b611aee83611a16565b9150611afc60208401611a16565b90509250929050565b600080600060608486031215611b19578081fd5b611b2284611a16565b9250611b3060208501611a16565b9150604084013590509250925092565b60008060008060808587031215611b55578081fd5b611b5e85611a16565b9350611b6c60208601611a16565b925060408501359150606085013567ffffffffffffffff811115611b8e578182fd5b611b9a87828801611a32565b91505092959194509250565b60008060408385031215611bb8578182fd5b611bc183611a16565b91506020830135611bd181611f83565b809150509250929050565b60008060408385031215611bee578182fd5b611bf783611a16565b946020939093013593505050565b600080600060608486031215611c19578283fd5b611c2284611a16565b925060208401359150604084013567ffffffffffffffff811115611c44578182fd5b611c5086828701611a32565b9150509250925092565b600060208284031215611c6b578081fd5b8151610d3c81611f83565b600060208284031215611c87578081fd5b8135610d3c81611f91565b600060208284031215611ca3578081fd5b8151610d3c81611f91565b600060208284031215611cbf578081fd5b5035919050565b60008151808452611cde816020860160208601611eab565b601f01601f19169290920160200192915050565b60008351611d04818460208801611eab565b835190830190611d18818360208801611eab565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611d5490830184611cc6565b9695505050505050565b602081526000610d3c6020830184611cc6565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611e5c57611e5c611f41565b500190565b600082611e7057611e70611f57565b500490565b6000816000190483118215151615611e8f57611e8f611f41565b500290565b600082821015611ea657611ea6611f41565b500390565b60005b83811015611ec6578181015183820152602001611eae565b838111156109c75750506000910152565b600181811c90821680611eeb57607f821691505b60208210811415611f0c57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611f2657611f26611f41565b5060010190565b600082611f3c57611f3c611f57565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b80151581146107c857600080fd5b6001600160e01b0319811681146107c857600080fdfea26469706673582212200b8527804fcd46d501b8d4c56bb392be3b69a6a84ce0ec01e2433c1ecb0962a464736f6c63430008040033";

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