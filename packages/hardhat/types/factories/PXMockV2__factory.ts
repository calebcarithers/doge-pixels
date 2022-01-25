/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PXMockV2, PXMockV2Interface } from "../PXMockV2";

const _abi = [
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
    inputs: [],
    name: "BASE_URI",
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
    name: "DOG20",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    inputs: [],
    name: "SHIBA_HEIGHT",
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
    name: "SHIBA_WIDTH",
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
      {
        internalType: "string",
        name: "ipfsUri_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "width_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "height_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "DOG20_FEES_ADDRESS_DEV_",
        type: "address",
      },
      {
        internalType: "address",
        name: "DOG20_FEES_ADDRESS_PLEASR_",
        type: "address",
      },
    ],
    name: "__PXMock_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
      {
        internalType: "string",
        name: "ipfsUri_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "width_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "height_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "DOG20_FEES_ADDRESS_DEV_",
        type: "address",
      },
      {
        internalType: "address",
        name: "DOG20_FEES_ADDRESS_PLEASR_",
        type: "address",
      },
    ],
    name: "__PX_init",
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
        internalType: "uint256[]",
        name: "puppers",
        type: "uint256[]",
      },
    ],
    name: "burnPuppers",
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
        name: "width",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "height",
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
    inputs: [],
    name: "v2Test",
    outputs: [
      {
        internalType: "uint256",
        name: "ret",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600054610100900460ff168061002a575060005460ff16155b6100915760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff161580156100b3576000805461ffff19166101011790555b80156100c5576000805461ff00191690555b5061294480620000d66000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806397a4dd281161010f578063b807f857116100a2578063dbddb26a11610071578063dbddb26a146103ee578063e4e4dc42146103f6578063e985e9c514610409578063fc784d4914610445576101f0565b8063b807f857146103ad578063b88d4fde146103c0578063bcb00f29146103d3578063c87b56dd146103db576101f0565b8063a6053eb5116100de578063a6053eb51461036b578063a739d6441461037e578063b43ff0f014610391578063b78a7d721461039a576101f0565b806397a4dd281461033e57806397b874f714610346578063a035386d1461034f578063a22cb46514610358576101f0565b806323b872dd11610187578063690c9f4311610156578063690c9f43146102fa57806370a082311461030357806379d90b171461031657806395d89b4114610336576101f0565b806323b872dd146102b857806342842e0e146102cb5780635d29904e146102de5780636352211e146102e7576101f0565b8063095ea7b3116101c3578063095ea7b314610274578063109429901461028957806318160ddd1461029c578063199f90a6146102a5576101f0565b806301ffc9a7146101f5578063055fa0d51461021d57806306fdde0314610234578063081812fc14610249575b600080fd5b6102086102033660046124b1565b610458565b60405190151581526020015b60405180910390f35b61022660985481565b604051908152602001610214565b61023c6104f7565b604051610214919061276c565b61025c6102573660046125b3565b610589565b6040516001600160a01b039091168152602001610214565b6102876102823660046123c4565b610623565b005b6102876102973660046123ed565b610755565b61022660995481565b6102876102b33660046124e9565b61080d565b6102876102c63660046122da565b610992565b6102876102d93660046122da565b610a19565b61022660a05481565b61025c6102f53660046125b3565b610a34565b610226609f5481565b61022661031136600461228e565b610abf565b6103296103243660046125b3565b610b59565b604051610214919061273b565b61023c610ba8565b609854610226565b610226609e5481565b610226609c5481565b61028761036636600461238e565b610bb7565b6102876103793660046125b3565b610bc6565b61028761038c3660046124e9565b610dfc565b610226609d5481565b60975461025c906001600160a01b031681565b6102876103bb3660046125b3565b609c55565b6102876103ce366004612315565b610ec6565b610226610f54565b61023c6103e93660046125b3565b61105f565b61023c61117d565b6102266104043660046125b3565b61120b565b6102086104173660046122a8565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b6102876104533660046125cb565b61121b565b60006001600160e01b031982167f80ac58cd0000000000000000000000000000000000000000000000000000000014806104bb57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806104ef57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b90505b919050565b6060606580546105069061283e565b80601f01602080910402602001604051908101604052809291908181526020018280546105329061283e565b801561057f5780601f106105545761010080835404028352916020019161057f565b820191906000526020600020905b81548152906001019060200180831161056257829003601f168201915b5050505050905090565b6000818152606760205260408120546001600160a01b03166106075760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b600061062e82610a34565b9050806001600160a01b0316836001600160a01b031614156106b85760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016105fe565b336001600160a01b03821614806106d457506106d48133610417565b6107465760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105fe565b610750838361123b565b505050565b60008151116107a65760405162461bcd60e51b815260206004820152600d60248201527f456d70747920707570706572730000000000000000000000000000000000000060448201526064016105fe565b60005b81518110156107f2576107e28282815181106107d557634e487b7160e01b600052603260045260246000fd5b60200260200101516112a9565b6107eb81612879565b90506107a9565b5061080a609c54825161080591906127dc565b6113df565b50565b600054610100900460ff1680610826575060005460ff16155b6108895760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105fe565b600054610100900460ff161580156108ab576000805461ffff19166101011790555b6108b589896115f5565b6001600160a01b0387166108c857600080fd5b609780546001600160a01b0319166001600160a01b038916179055690bb28f98c1e0715ce000609c55620f4240609d556000609e55609f85905560a084905561091184866127dc565b60995560a054609f5461092491906127dc565b609855855161093a9060a1906020890190612142565b5060a280546001600160a01b038086166001600160a01b03199283161790925560a3805492851692909116919091179055602860a455603c60a5558015610987576000805461ff00191690555b505050505050505050565b61099c33826116c3565b610a0e5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016105fe565b6107508383836117b6565b61075083838360405180602001604052806000815250610ec6565b6000818152606760205260408120546001600160a01b0316806104ef5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016105fe565b60006001600160a01b038216610b3d5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016105fe565b506001600160a01b031660009081526068602052604090205490565b610b616121c6565b6000609d5483610b7191906127fb565b90506040518060400160405280609f5483610b8c9190612894565b8152602001609f5483610b9f91906127c8565b90529392505050565b6060606680546105069061283e565b610bc2338383611983565b5050565b60008111610c165760405162461bcd60e51b815260206004820152601560248201527f4e6f6e20706f736974697665207175616e74697479000000000000000000000060448201526064016105fe565b609854811115610c685760405162461bcd60e51b815260206004820152601460248201527f4e6f20707570706572732072656d61696e696e6700000000000000000000000060448201526064016105fe565b60005b81811015610d53576000610c80609854611a52565b609d54610c8d91906127b0565b609e546000828152609a60205260409020549192501415610cba576000818152609a602052604090208190555b60006001609854609d54610cce91906127b0565b610cd891906127fb565b609e546000828152609a60205260409020549192501415610d05576000818152609a602052604090208190555b6000828152609a602090815260408083208054858552828520805490925590819055808452609b909252909120829055610d3f3382611a67565b50505080610d4c90612879565b9050610c6b565b506097546001600160a01b03166323b872dd3330609c5485610d7591906127dc565b6040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401602060405180830381600087803b158015610dc457600080fd5b505af1158015610dd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc29190612495565b600054610100900460ff1680610e15575060005460ff16155b610e785760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105fe565b600054610100900460ff16158015610e9a576000805461ffff19166101011790555b610eaa898989898989898961080d565b8015610987576000805461ff0019169055505050505050505050565b610ed033836116c3565b610f425760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016105fe565b610f4e84848484611a8d565b50505050565b6000806098544342610f633390565b604051602001610f8b919060609190911b6bffffffffffffffffffffffff1916815260140190565b6040516020818303038152906040528051906020012060001c610fae91906127c8565b6040516bffffffffffffffffffffffff194160601b166020820152459042906034016040516020818303038152906040528051906020012060001c610ff391906127c8565b610ffd44426127b0565b61100791906127b0565b61101191906127b0565b61101b91906127b0565b61102591906127b0565b61102f91906127b0565b60405160200161104191815260200190565b60408051601f19818403018152919052805160209091012092915050565b6000818152606760205260409020546060906001600160a01b03166110ec5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016105fe565b60006110f6611b16565b90506000611388609d548561110b91906127fb565b61111591906127c8565b6111209060016127b0565b905060008251116111405760405180602001604052806000815250611175565b8161114a82611b25565b61115386611b25565b60405160200161116593929190612618565b6040516020818303038152906040525b949350505050565b60a1805461118a9061283e565b80601f01602080910402602001604051908101604052809291908181526020018280546111b69061283e565b80156112035780601f106111d857610100808354040283529160200191611203565b820191906000526020600020905b8154815290600101906020018083116111e657829003601f168201915b505050505081565b6000609d54826104ef91906127fb565b600061122782846127dc565b609881905560995550609f9190915560a055565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061127082610a34565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b609e548114156112fb5760405162461bcd60e51b815260206004820152600f60248201527f507570706572206973206d61676963000000000000000000000000000000000060448201526064016105fe565b3361130582610a34565b6001600160a01b03161461135b5760405162461bcd60e51b815260206004820152601360248201527f507570706572206973206e6f7420796f7572730000000000000000000000000060448201526064016105fe565b6000818152609b6020526040812054609854609d5491929161137d91906127b0565b6000818152609a602081815260408084208054898652609b8452828620879055808652828620899055888652939092528320829055838352869055609880549394509092600192906113d09084906127b0565b90915550610f4e905084611c74565b600060648060a454846113f291906127dc565b6113fc91906127c8565b61140691906127c8565b9050600060648060a5548561141b91906127dc565b61142591906127c8565b61142f91906127c8565b905060008161143e84866127fb565b61144891906127fb565b60975460a25460405163a9059cbb60e01b81526001600160a01b03918216600482015260248101879052929350169063a9059cbb90604401602060405180830381600087803b15801561149a57600080fd5b505af11580156114ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d29190612495565b5060975460a35460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810185905291169063a9059cbb90604401602060405180830381600087803b15801561152357600080fd5b505af1158015611537573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155b9190612495565b506097546001600160a01b031663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381600087803b1580156115b657600080fd5b505af11580156115ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ee9190612495565b5050505050565b600054610100900460ff168061160e575060005460ff16155b6116715760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105fe565b600054610100900460ff16158015611693576000805461ffff19166101011790555b61169b611d0f565b6116a3611d0f565b6116ad8383611dc1565b8015610750576000805461ff0019169055505050565b6000818152606760205260408120546001600160a01b031661173c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105fe565b600061174783610a34565b9050806001600160a01b0316846001600160a01b031614806117825750836001600160a01b031661177784610589565b6001600160a01b0316145b8061117557506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff16611175565b826001600160a01b03166117c982610a34565b6001600160a01b0316146118455760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e000000000000000000000000000000000000000000000060648201526084016105fe565b6001600160a01b0382166118c05760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105fe565b6118cb60008261123b565b6001600160a01b03831660009081526068602052604081208054600192906118f49084906127fb565b90915550506001600160a01b03821660009081526068602052604081208054600192906119229084906127b0565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031614156119e55760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105fe565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b600081611a5d610f54565b6104ef9190612894565b611a718282611e9d565b600160986000828254611a8491906127fb565b90915550505050565b611a988484846117b6565b611aa484848484611fdf565b610f4e5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016105fe565b606060a180546105069061283e565b606081611b66575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526104f2565b8160005b8115611b905780611b7a81612879565b9150611b899050600a836127c8565b9150611b6a565b60008167ffffffffffffffff811115611bb957634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611be3576020820181803683370190505b5090505b841561117557611bf86001836127fb565b9150611c05600a86612894565b611c109060306127b0565b60f81b818381518110611c3357634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611c6d600a866127c8565b9450611be7565b6000611c7f82610a34565b9050611c8c60008361123b565b6001600160a01b0381166000908152606860205260408120805460019290611cb59084906127fb565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600054610100900460ff1680611d28575060005460ff16155b611d8b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105fe565b600054610100900460ff16158015611dad576000805461ffff19166101011790555b801561080a576000805461ff001916905550565b600054610100900460ff1680611dda575060005460ff16155b611e3d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105fe565b600054610100900460ff16158015611e5f576000805461ffff19166101011790555b8251611e72906065906020860190612142565b508151611e86906066906020850190612142565b508015610750576000805461ff0019169055505050565b6001600160a01b038216611ef35760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105fe565b6000818152606760205260409020546001600160a01b031615611f585760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105fe565b6001600160a01b0382166000908152606860205260408120805460019290611f819084906127b0565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b1561213757604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906120239033908990889088906004016126ff565b602060405180830381600087803b15801561203d57600080fd5b505af192505050801561206d575060408051601f3d908101601f1916820190925261206a918101906124cd565b60015b61211d573d80801561209b576040519150601f19603f3d011682016040523d82523d6000602084013e6120a0565b606091505b5080516121155760405162461bcd60e51b815260206004820152603860248201527f455243373231437573746f6d3a207472616e7366657220746f206e6f6e20455260448201527f43373231526563656976657220696d706c656d656e746572000000000000000060648201526084016105fe565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611175565b506001949350505050565b82805461214e9061283e565b90600052602060002090601f01602090048101928261217057600085556121b6565b82601f1061218957805160ff19168380011785556121b6565b828001600101855582156121b6579182015b828111156121b657825182559160200191906001019061219b565b506121c29291506121e4565b5090565b60405180604001604052806002906020820280368337509192915050565b5b808211156121c257600081556001016121e5565b600067ffffffffffffffff831115612213576122136128d4565b612226601f8401601f191660200161277f565b905082815283838301111561223a57600080fd5b828260208301376000602084830101529392505050565b80356001600160a01b03811681146104f257600080fd5b600082601f830112612278578081fd5b612287838335602085016121f9565b9392505050565b60006020828403121561229f578081fd5b61228782612251565b600080604083850312156122ba578081fd5b6122c383612251565b91506122d160208401612251565b90509250929050565b6000806000606084860312156122ee578081fd5b6122f784612251565b925061230560208501612251565b9150604084013590509250925092565b6000806000806080858703121561232a578081fd5b61233385612251565b935061234160208601612251565b925060408501359150606085013567ffffffffffffffff811115612363578182fd5b8501601f81018713612373578182fd5b612382878235602084016121f9565b91505092959194509250565b600080604083850312156123a0578182fd5b6123a983612251565b915060208301356123b9816128ea565b809150509250929050565b600080604083850312156123d6578182fd5b6123df83612251565b946020939093013593505050565b600060208083850312156123ff578182fd5b823567ffffffffffffffff80821115612416578384fd5b818501915085601f830112612429578384fd5b81358181111561243b5761243b6128d4565b8060051b915061244c84830161277f565b8181528481019084860184860187018a1015612466578788fd5b8795505b8386101561248857803583526001959095019491860191860161246a565b5098975050505050505050565b6000602082840312156124a6578081fd5b8151612287816128ea565b6000602082840312156124c2578081fd5b8135612287816128f8565b6000602082840312156124de578081fd5b8151612287816128f8565b600080600080600080600080610100898b031215612505578384fd5b883567ffffffffffffffff8082111561251c578586fd5b6125288c838d01612268565b995060208b013591508082111561253d578586fd5b6125498c838d01612268565b985061255760408c01612251565b975060608b013591508082111561256c578586fd5b506125798b828c01612268565b9550506080890135935060a0890135925061259660c08a01612251565b91506125a460e08a01612251565b90509295985092959890939650565b6000602082840312156125c4578081fd5b5035919050565b600080604083850312156125dd578182fd5b50508035926020909101359150565b60008151808452612604816020860160208601612812565b601f01601f19169290920160200192915050565b6000845161262a818460208901612812565b7f6d657461646174612d7368000000000000000000000000000000000000000000908301908152845161266481600b840160208901612812565b7f2f00000000000000000000000000000000000000000000000000000000000000600b92909101918201527f6d657461646174612d0000000000000000000000000000000000000000000000600c82015283516126c8816015840160208801612812565b7f2e6a736f6e00000000000000000000000000000000000000000000000000000060159290910191820152601a0195945050505050565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261273160808301846125ec565b9695505050505050565b60408101818360005b6002811015612763578151835260209283019290910190600101612744565b50505092915050565b60006020825261228760208301846125ec565b604051601f8201601f1916810167ffffffffffffffff811182821017156127a8576127a86128d4565b604052919050565b600082198211156127c3576127c36128a8565b500190565b6000826127d7576127d76128be565b500490565b60008160001904831182151516156127f6576127f66128a8565b500290565b60008282101561280d5761280d6128a8565b500390565b60005b8381101561282d578181015183820152602001612815565b83811115610f4e5750506000910152565b600181811c9082168061285257607f821691505b6020821081141561287357634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561288d5761288d6128a8565b5060010190565b6000826128a3576128a36128be565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b801515811461080a57600080fd5b6001600160e01b03198116811461080a57600080fdfea26469706673582212209ac546264ad95f96c94c4ceb6ed47529c09338778f9e227884385ea61265067464736f6c63430008030033";

type PXMockV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PXMockV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PXMockV2__factory extends ContractFactory {
  constructor(...args: PXMockV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PXMockV2> {
    return super.deploy(overrides || {}) as Promise<PXMockV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PXMockV2 {
    return super.attach(address) as PXMockV2;
  }
  connect(signer: Signer): PXMockV2__factory {
    return super.connect(signer) as PXMockV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PXMockV2Interface {
    return new utils.Interface(_abi) as PXMockV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PXMockV2 {
    return new Contract(address, _abi, signerOrProvider) as PXMockV2;
  }
}
