/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PXMockV3, PXMockV3Interface } from "../PXMockV3";

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
    inputs: [],
    name: "V3",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600054610100900460ff168061002a575060005460ff16155b6100915760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff161580156100b3576000805461ffff19166101011790555b80156100c5576000805461ff00191690555b5061263580620000d66000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806395d89b411161010f578063b807f857116100a2578063dbddb26a11610071578063dbddb26a1461041f578063e4e4dc4214610427578063e985e9c51461043a578063fc784d4914610476576101f0565b8063b807f857146103de578063b88d4fde146103f1578063bcb00f2914610404578063c87b56dd1461040c576101f0565b8063a6053eb5116100de578063a6053eb51461039c578063a739d644146103af578063b43ff0f0146103c2578063b78a7d72146103cb576101f0565b806395d89b411461036f57806397b874f714610377578063a035386d14610380578063a22cb46514610389576101f0565b806323b872dd116101875780636352211e116101565780636352211e14610320578063690c9f431461033357806370a082311461033c57806379d90b171461034f576101f0565b806323b872dd146102b85780632fb42d70146102cb57806342842e0e146103045780635d29904e14610317576101f0565b8063095ea7b3116101c3578063095ea7b314610274578063109429901461028957806318160ddd1461029c578063199f90a6146102a5576101f0565b806301ffc9a7146101f5578063055fa0d51461021d57806306fdde0314610234578063081812fc14610249575b600080fd5b6102086102033660046121a2565b610489565b60405190151581526020015b60405180910390f35b61022660985481565b604051908152602001610214565b61023c610528565b604051610214919061245d565b61025c6102573660046122a4565b6105ba565b6040516001600160a01b039091168152602001610214565b6102876102823660046120b5565b610654565b005b6102876102973660046120de565b610786565b61022660995481565b6102876102b33660046121da565b61083e565b6102876102c6366004611fcb565b6109c3565b60408051808201909152600981527f48656c6c6f205633210000000000000000000000000000000000000000000000602082015261023c565b610287610312366004611fcb565b610a4a565b61022660a05481565b61025c61032e3660046122a4565b610a65565b610226609f5481565b61022661034a366004611f7f565b610af0565b61036261035d3660046122a4565b610b8a565b604051610214919061242c565b61023c610bd9565b610226609e5481565b610226609c5481565b61028761039736600461207f565b610be8565b6102876103aa3660046122a4565b610bf7565b6102876103bd3660046121da565b610c47565b610226609d5481565b60975461025c906001600160a01b031681565b6102876103ec3660046122a4565b609c55565b6102876103ff366004612006565b610d11565b610226610d9f565b61023c61041a3660046122a4565b610eaa565b61023c610ffa565b6102266104353660046122a4565b611088565b610208610448366004611f99565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b6102876104843660046122bc565b611098565b60006001600160e01b031982167f80ac58cd0000000000000000000000000000000000000000000000000000000014806104ec57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061052057507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b90505b919050565b6060606580546105379061252f565b80601f01602080910402602001604051908101604052809291908181526020018280546105639061252f565b80156105b05780601f10610585576101008083540402835291602001916105b0565b820191906000526020600020905b81548152906001019060200180831161059357829003601f168201915b5050505050905090565b6000818152606760205260408120546001600160a01b03166106385760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b600061065f82610a65565b9050806001600160a01b0316836001600160a01b031614156106e95760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161062f565b336001600160a01b038216148061070557506107058133610448565b6107775760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161062f565b61078183836110b8565b505050565b60008151116107d75760405162461bcd60e51b815260206004820152600d60248201527f456d707479207075707065727300000000000000000000000000000000000000604482015260640161062f565b60005b81518110156108235761081382828151811061080657634e487b7160e01b600052603260045260246000fd5b6020026020010151611126565b61081c8161256a565b90506107da565b5061083b609c54825161083691906124cd565b61125c565b50565b600054610100900460ff1680610857575060005460ff16155b6108ba5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161062f565b600054610100900460ff161580156108dc576000805461ffff19166101011790555b6108e68989611472565b6001600160a01b0387166108f957600080fd5b609780546001600160a01b0319166001600160a01b038916179055690bb28f98c1e0715ce000609c55620f4240609d556000609e55609f85905560a084905561094284866124cd565b60995560a054609f5461095591906124cd565b609855855161096b9060a1906020890190611e33565b5060a280546001600160a01b038086166001600160a01b03199283161790925560a3805492851692909116919091179055602860a455603c60a55580156109b8576000805461ff00191690555b505050505050505050565b6109cd3382611540565b610a3f5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161062f565b610781838383611633565b61078183838360405180602001604052806000815250610d11565b6000818152606760205260408120546001600160a01b0316806105205760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161062f565b60006001600160a01b038216610b6e5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161062f565b506001600160a01b031660009081526068602052604090205490565b610b92611eb7565b6000609d5483610ba291906124ec565b90506040518060400160405280609f5483610bbd9190612585565b8152602001609f5483610bd091906124b9565b90529392505050565b6060606680546105379061252f565b610bf3338383611800565b5050565b60ff811161083b5760405162461bcd60e51b815260206004820152600e60248201527f5633206d696e7450757070657273000000000000000000000000000000000000604482015260640161062f565b600054610100900460ff1680610c60575060005460ff16155b610cc35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161062f565b600054610100900460ff16158015610ce5576000805461ffff19166101011790555b610cf5898989898989898961083e565b80156109b8576000805461ff0019169055505050505050505050565b610d1b3383611540565b610d8d5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161062f565b610d99848484846118cf565b50505050565b6000806098544342610dae3390565b604051602001610dd6919060609190911b6bffffffffffffffffffffffff1916815260140190565b6040516020818303038152906040528051906020012060001c610df991906124b9565b6040516bffffffffffffffffffffffff194160601b166020820152459042906034016040516020818303038152906040528051906020012060001c610e3e91906124b9565b610e4844426124a1565b610e5291906124a1565b610e5c91906124a1565b610e6691906124a1565b610e7091906124a1565b610e7a91906124a1565b604051602001610e8c91815260200190565b60408051601f19818403018152919052805160209091012092915050565b6000818152606760205260409020546060906001600160a01b0316610f375760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161062f565b6000610f7360408051808201909152601981527f68747470733a2f2f746573742d76332d626173652d7572692f00000000000000602082015290565b90506000611388609d5485610f8891906124ec565b610f9291906124b9565b610f9d9060016124a1565b90506000825111610fbd5760405180602001604052806000815250610ff2565b81610fc782611958565b610fd086611958565b604051602001610fe293929190612309565b6040516020818303038152906040525b949350505050565b60a180546110079061252f565b80601f01602080910402602001604051908101604052809291908181526020018280546110339061252f565b80156110805780601f1061105557610100808354040283529160200191611080565b820191906000526020600020905b81548152906001019060200180831161106357829003601f168201915b505050505081565b6000609d548261052091906124ec565b60006110a482846124cd565b609881905560995550609f9190915560a055565b600081815260696020526040902080546001600160a01b0319166001600160a01b03841690811790915581906110ed82610a65565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b609e548114156111785760405162461bcd60e51b815260206004820152600f60248201527f507570706572206973206d616769630000000000000000000000000000000000604482015260640161062f565b3361118282610a65565b6001600160a01b0316146111d85760405162461bcd60e51b815260206004820152601360248201527f507570706572206973206e6f7420796f75727300000000000000000000000000604482015260640161062f565b6000818152609b6020526040812054609854609d549192916111fa91906124a1565b6000818152609a602081815260408084208054898652609b84528286208790558086528286208990558886529390925283208290558383528690556098805493945090926001929061124d9084906124a1565b90915550610d99905084611aa7565b600060648060a4548461126f91906124cd565b61127991906124b9565b61128391906124b9565b9050600060648060a5548561129891906124cd565b6112a291906124b9565b6112ac91906124b9565b90506000816112bb84866124ec565b6112c591906124ec565b60975460a25460405163a9059cbb60e01b81526001600160a01b03918216600482015260248101879052929350169063a9059cbb90604401602060405180830381600087803b15801561131757600080fd5b505af115801561132b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134f9190612186565b5060975460a35460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810185905291169063a9059cbb90604401602060405180830381600087803b1580156113a057600080fd5b505af11580156113b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d89190612186565b506097546001600160a01b031663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381600087803b15801561143357600080fd5b505af1158015611447573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146b9190612186565b5050505050565b600054610100900460ff168061148b575060005460ff16155b6114ee5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161062f565b600054610100900460ff16158015611510576000805461ffff19166101011790555b611518611b42565b611520611b42565b61152a8383611bf4565b8015610781576000805461ff0019169055505050565b6000818152606760205260408120546001600160a01b03166115b95760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161062f565b60006115c483610a65565b9050806001600160a01b0316846001600160a01b031614806115ff5750836001600160a01b03166115f4846105ba565b6001600160a01b0316145b80610ff257506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff16610ff2565b826001600160a01b031661164682610a65565b6001600160a01b0316146116c25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606482015260840161062f565b6001600160a01b03821661173d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161062f565b6117486000826110b8565b6001600160a01b03831660009081526068602052604081208054600192906117719084906124ec565b90915550506001600160a01b038216600090815260686020526040812080546001929061179f9084906124a1565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031614156118625760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161062f565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6118da848484611633565b6118e684848484611cd0565b610d995760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161062f565b606081611999575060408051808201909152600181527f30000000000000000000000000000000000000000000000000000000000000006020820152610523565b8160005b81156119c357806119ad8161256a565b91506119bc9050600a836124b9565b915061199d565b60008167ffffffffffffffff8111156119ec57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611a16576020820181803683370190505b5090505b8415610ff257611a2b6001836124ec565b9150611a38600a86612585565b611a439060306124a1565b60f81b818381518110611a6657634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611aa0600a866124b9565b9450611a1a565b6000611ab282610a65565b9050611abf6000836110b8565b6001600160a01b0381166000908152606860205260408120805460019290611ae89084906124ec565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600054610100900460ff1680611b5b575060005460ff16155b611bbe5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161062f565b600054610100900460ff16158015611be0576000805461ffff19166101011790555b801561083b576000805461ff001916905550565b600054610100900460ff1680611c0d575060005460ff16155b611c705760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161062f565b600054610100900460ff16158015611c92576000805461ffff19166101011790555b8251611ca5906065906020860190611e33565b508151611cb9906066906020850190611e33565b508015610781576000805461ff0019169055505050565b60006001600160a01b0384163b15611e2857604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611d149033908990889088906004016123f0565b602060405180830381600087803b158015611d2e57600080fd5b505af1925050508015611d5e575060408051601f3d908101601f19168201909252611d5b918101906121be565b60015b611e0e573d808015611d8c576040519150601f19603f3d011682016040523d82523d6000602084013e611d91565b606091505b508051611e065760405162461bcd60e51b815260206004820152603860248201527f455243373231437573746f6d3a207472616e7366657220746f206e6f6e20455260448201527f43373231526563656976657220696d706c656d656e7465720000000000000000606482015260840161062f565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610ff2565b506001949350505050565b828054611e3f9061252f565b90600052602060002090601f016020900481019282611e615760008555611ea7565b82601f10611e7a57805160ff1916838001178555611ea7565b82800160010185558215611ea7579182015b82811115611ea7578251825591602001919060010190611e8c565b50611eb3929150611ed5565b5090565b60405180604001604052806002906020820280368337509192915050565b5b80821115611eb35760008155600101611ed6565b600067ffffffffffffffff831115611f0457611f046125c5565b611f17601f8401601f1916602001612470565b9050828152838383011115611f2b57600080fd5b828260208301376000602084830101529392505050565b80356001600160a01b038116811461052357600080fd5b600082601f830112611f69578081fd5b611f7883833560208501611eea565b9392505050565b600060208284031215611f90578081fd5b611f7882611f42565b60008060408385031215611fab578081fd5b611fb483611f42565b9150611fc260208401611f42565b90509250929050565b600080600060608486031215611fdf578081fd5b611fe884611f42565b9250611ff660208501611f42565b9150604084013590509250925092565b6000806000806080858703121561201b578081fd5b61202485611f42565b935061203260208601611f42565b925060408501359150606085013567ffffffffffffffff811115612054578182fd5b8501601f81018713612064578182fd5b61207387823560208401611eea565b91505092959194509250565b60008060408385031215612091578182fd5b61209a83611f42565b915060208301356120aa816125db565b809150509250929050565b600080604083850312156120c7578182fd5b6120d083611f42565b946020939093013593505050565b600060208083850312156120f0578182fd5b823567ffffffffffffffff80821115612107578384fd5b818501915085601f83011261211a578384fd5b81358181111561212c5761212c6125c5565b8060051b915061213d848301612470565b8181528481019084860184860187018a1015612157578788fd5b8795505b8386101561217957803583526001959095019491860191860161215b565b5098975050505050505050565b600060208284031215612197578081fd5b8151611f78816125db565b6000602082840312156121b3578081fd5b8135611f78816125e9565b6000602082840312156121cf578081fd5b8151611f78816125e9565b600080600080600080600080610100898b0312156121f6578384fd5b883567ffffffffffffffff8082111561220d578586fd5b6122198c838d01611f59565b995060208b013591508082111561222e578586fd5b61223a8c838d01611f59565b985061224860408c01611f42565b975060608b013591508082111561225d578586fd5b5061226a8b828c01611f59565b9550506080890135935060a0890135925061228760c08a01611f42565b915061229560e08a01611f42565b90509295985092959890939650565b6000602082840312156122b5578081fd5b5035919050565b600080604083850312156122ce578182fd5b50508035926020909101359150565b600081518084526122f5816020860160208601612503565b601f01601f19169290920160200192915050565b6000845161231b818460208901612503565b7f746573742d6e65772d7572692d76332d736800000000000000000000000000009083019081528451612355816012840160208901612503565b7f2f00000000000000000000000000000000000000000000000000000000000000601292909101918201527f6d657461646174612d0000000000000000000000000000000000000000000000601382015283516123b981601c840160208801612503565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000601c929091019182015260210195945050505050565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261242260808301846122dd565b9695505050505050565b60408101818360005b6002811015612454578151835260209283019290910190600101612435565b50505092915050565b600060208252611f7860208301846122dd565b604051601f8201601f1916810167ffffffffffffffff81118282101715612499576124996125c5565b604052919050565b600082198211156124b4576124b4612599565b500190565b6000826124c8576124c86125af565b500490565b60008160001904831182151516156124e7576124e7612599565b500290565b6000828210156124fe576124fe612599565b500390565b60005b8381101561251e578181015183820152602001612506565b83811115610d995750506000910152565b600181811c9082168061254357607f821691505b6020821081141561256457634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561257e5761257e612599565b5060010190565b600082612594576125946125af565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b801515811461083b57600080fd5b6001600160e01b03198116811461083b57600080fdfea2646970667358221220d5d574a34617d7823c20df4a314c9f089cbc51c54349265db37fca8e9495f6f064736f6c63430008030033";

type PXMockV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PXMockV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PXMockV3__factory extends ContractFactory {
  constructor(...args: PXMockV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PXMockV3> {
    return super.deploy(overrides || {}) as Promise<PXMockV3>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PXMockV3 {
    return super.attach(address) as PXMockV3;
  }
  connect(signer: Signer): PXMockV3__factory {
    return super.connect(signer) as PXMockV3__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PXMockV3Interface {
    return new utils.Interface(_abi) as PXMockV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PXMockV3 {
    return new Contract(address, _abi, signerOrProvider) as PXMockV3;
  }
}
