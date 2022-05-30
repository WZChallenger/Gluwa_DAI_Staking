/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YDAIToken,
  YDAITokenInterface,
} from "../../../contracts/tokens/YDAIToken";

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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "_toAdd",
        type: "address",
      },
    ],
    name: "addAuthorized",
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
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorized",
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
        name: "account",
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
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
        internalType: "address",
        name: "_toRemove",
        type: "address",
      },
    ],
    name: "removeAuthorized",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f7969656c642044414900000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f794441490000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009692919062000344565b508060049080519060200190620000af92919062000344565b505050620000d2620000c6620000f360201b60201c565b620000fb60201b60201c565b620000ed33683635c9adc5dea00000620001c160201b60201c565b620005a0565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000234576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200022b906200042c565b60405180910390fd5b62000248600083836200033a60201b60201c565b80600260008282546200025c91906200047c565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002b391906200047c565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200031a91906200044e565b60405180910390a362000336600083836200033f60201b60201c565b5050565b505050565b505050565b8280546200035290620004e3565b90600052602060002090601f016020900481019282620003765760008555620003c2565b82601f106200039157805160ff1916838001178555620003c2565b82800160010185558215620003c2579182015b82811115620003c1578251825591602001919060010190620003a4565b5b509050620003d19190620003d5565b5090565b5b80821115620003f0576000816000905550600101620003d6565b5090565b600062000403601f836200046b565b9150620004108262000577565b602082019050919050565b6200042681620004d9565b82525050565b600060208201905081810360008301526200044781620003f4565b9050919050565b60006020820190506200046560008301846200041b565b92915050565b600082825260208201905092915050565b60006200048982620004d9565b91506200049683620004d9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620004ce57620004cd62000519565b5b828201905092915050565b6000819050919050565b60006002820490506001821680620004fc57607f821691505b6020821081141562000513576200051262000548565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61206380620005b06000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad578063a9059cbb11610071578063a9059cbb1461030a578063b91816111461033a578063cf1c316a1461036a578063dd62ed3e14610386578063f2fde38b146103b657610121565b8063715018a6146102785780638da5cb5b1461028257806395d89b41146102a05780639dc29fac146102be578063a457c2d7146102da57610121565b8063313ce567116100f4578063313ce567146101c257806339509351146101e057806340c10f1914610210578063485d7d941461022c57806370a082311461024857610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461017457806323b872dd14610192575b600080fd5b61012e6103d2565b60405161013b91906118cd565b60405180910390f35b61015e6004803603810190610159919061161f565b610464565b60405161016b91906118b2565b60405180910390f35b61017c610487565b6040516101899190611a8f565b60405180910390f35b6101ac60048036038101906101a791906115d0565b610491565b6040516101b991906118b2565b60405180910390f35b6101ca6104c0565b6040516101d79190611aaa565b60405180910390f35b6101fa60048036038101906101f5919061161f565b6104c9565b60405161020791906118b2565b60405180910390f35b61022a6004803603810190610225919061161f565b610500565b005b6102466004803603810190610241919061156b565b6105d7565b005b610262600480360381019061025d919061156b565b6106e7565b60405161026f9190611a8f565b60405180910390f35b61028061072f565b005b61028a6107b7565b6040516102979190611897565b60405180910390f35b6102a86107e1565b6040516102b591906118cd565b60405180910390f35b6102d860048036038101906102d3919061161f565b610873565b005b6102f460048036038101906102ef919061161f565b61094a565b60405161030191906118b2565b60405180910390f35b610324600480360381019061031f919061161f565b6109c1565b60405161033191906118b2565b60405180910390f35b610354600480360381019061034f919061156b565b6109e4565b60405161036191906118b2565b60405180910390f35b610384600480360381019061037f919061156b565b610a04565b005b6103a0600480360381019061039b9190611594565b610adb565b6040516103ad9190611a8f565b60405180910390f35b6103d060048036038101906103cb919061156b565b610b62565b005b6060600380546103e190611bf3565b80601f016020809104026020016040519081016040528092919081815260200182805461040d90611bf3565b801561045a5780601f1061042f5761010080835404028352916020019161045a565b820191906000526020600020905b81548152906001019060200180831161043d57829003601f168201915b5050505050905090565b60008061046f610c5a565b905061047c818585610c62565b600191505092915050565b6000600254905090565b60008061049c610c5a565b90506104a9858285610e2d565b6104b4858585610eb9565b60019150509392505050565b60006012905090565b6000806104d4610c5a565b90506104f58185856104e68589610adb565b6104f09190611ae1565b610c62565b600191505092915050565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061058a57503373ffffffffffffffffffffffffffffffffffffffff166105726107b7565b73ffffffffffffffffffffffffffffffffffffffff16145b6105c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c0906119ef565b60405180910390fd5b6105d3828261113a565b5050565b6105df610c5a565b73ffffffffffffffffffffffffffffffffffffffff166105fd6107b7565b73ffffffffffffffffffffffffffffffffffffffff1614610653576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064a906119af565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561068c57600080fd5b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610737610c5a565b73ffffffffffffffffffffffffffffffffffffffff166107556107b7565b73ffffffffffffffffffffffffffffffffffffffff16146107ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a2906119af565b60405180910390fd5b6107b5600061129a565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546107f090611bf3565b80601f016020809104026020016040519081016040528092919081815260200182805461081c90611bf3565b80156108695780601f1061083e57610100808354040283529160200191610869565b820191906000526020600020905b81548152906001019060200180831161084c57829003601f168201915b5050505050905090565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806108fd57503373ffffffffffffffffffffffffffffffffffffffff166108e56107b7565b73ffffffffffffffffffffffffffffffffffffffff16145b61093c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610933906119ef565b60405180910390fd5b6109468282611360565b5050565b600080610955610c5a565b905060006109638286610adb565b9050838110156109a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099f90611a4f565b60405180910390fd5b6109b58286868403610c62565b60019250505092915050565b6000806109cc610c5a565b90506109d9818585610eb9565b600191505092915050565b60066020528060005260406000206000915054906101000a900460ff1681565b610a0c610c5a565b73ffffffffffffffffffffffffffffffffffffffff16610a2a6107b7565b73ffffffffffffffffffffffffffffffffffffffff1614610a80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a77906119af565b60405180910390fd5b6001600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610b6a610c5a565b73ffffffffffffffffffffffffffffffffffffffff16610b886107b7565b73ffffffffffffffffffffffffffffffffffffffff1614610bde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd5906119af565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c459061192f565b60405180910390fd5b610c578161129a565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc990611a2f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d399061194f565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e209190611a8f565b60405180910390a3505050565b6000610e398484610adb565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610eb35781811015610ea5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9c9061196f565b60405180910390fd5b610eb28484848403610c62565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2090611a0f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f90906118ef565b60405180910390fd5b610fa4838383611537565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561102a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110219061198f565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110bd9190611ae1565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111219190611a8f565b60405180910390a361113484848461153c565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a190611a6f565b60405180910390fd5b6111b660008383611537565b80600260008282546111c89190611ae1565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461121d9190611ae1565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516112829190611a8f565b60405180910390a36112966000838361153c565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c7906119cf565b60405180910390fd5b6113dc82600083611537565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611462576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114599061190f565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546114b99190611b37565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161151e9190611a8f565b60405180910390a36115328360008461153c565b505050565b505050565b505050565b60008135905061155081611fff565b92915050565b60008135905061156581612016565b92915050565b60006020828403121561157d57600080fd5b600061158b84828501611541565b91505092915050565b600080604083850312156115a757600080fd5b60006115b585828601611541565b92505060206115c685828601611541565b9150509250929050565b6000806000606084860312156115e557600080fd5b60006115f386828701611541565b935050602061160486828701611541565b925050604061161586828701611556565b9150509250925092565b6000806040838503121561163257600080fd5b600061164085828601611541565b925050602061165185828601611556565b9150509250929050565b61166481611b6b565b82525050565b61167381611b7d565b82525050565b600061168482611ac5565b61168e8185611ad0565b935061169e818560208601611bc0565b6116a781611c83565b840191505092915050565b60006116bf602383611ad0565b91506116ca82611c94565b604082019050919050565b60006116e2602283611ad0565b91506116ed82611ce3565b604082019050919050565b6000611705602683611ad0565b915061171082611d32565b604082019050919050565b6000611728602283611ad0565b915061173382611d81565b604082019050919050565b600061174b601d83611ad0565b915061175682611dd0565b602082019050919050565b600061176e602683611ad0565b915061177982611df9565b604082019050919050565b6000611791602083611ad0565b915061179c82611e48565b602082019050919050565b60006117b4602183611ad0565b91506117bf82611e71565b604082019050919050565b60006117d7601883611ad0565b91506117e282611ec0565b602082019050919050565b60006117fa602583611ad0565b915061180582611ee9565b604082019050919050565b600061181d602483611ad0565b915061182882611f38565b604082019050919050565b6000611840602583611ad0565b915061184b82611f87565b604082019050919050565b6000611863601f83611ad0565b915061186e82611fd6565b602082019050919050565b61188281611ba9565b82525050565b61189181611bb3565b82525050565b60006020820190506118ac600083018461165b565b92915050565b60006020820190506118c7600083018461166a565b92915050565b600060208201905081810360008301526118e78184611679565b905092915050565b60006020820190508181036000830152611908816116b2565b9050919050565b60006020820190508181036000830152611928816116d5565b9050919050565b60006020820190508181036000830152611948816116f8565b9050919050565b600060208201905081810360008301526119688161171b565b9050919050565b600060208201905081810360008301526119888161173e565b9050919050565b600060208201905081810360008301526119a881611761565b9050919050565b600060208201905081810360008301526119c881611784565b9050919050565b600060208201905081810360008301526119e8816117a7565b9050919050565b60006020820190508181036000830152611a08816117ca565b9050919050565b60006020820190508181036000830152611a28816117ed565b9050919050565b60006020820190508181036000830152611a4881611810565b9050919050565b60006020820190508181036000830152611a6881611833565b9050919050565b60006020820190508181036000830152611a8881611856565b9050919050565b6000602082019050611aa46000830184611879565b92915050565b6000602082019050611abf6000830184611888565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611aec82611ba9565b9150611af783611ba9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611b2c57611b2b611c25565b5b828201905092915050565b6000611b4282611ba9565b9150611b4d83611ba9565b925082821015611b6057611b5f611c25565b5b828203905092915050565b6000611b7682611b89565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611bde578082015181840152602081019050611bc3565b83811115611bed576000848401525b50505050565b60006002820490506001821680611c0b57607f821691505b60208210811415611c1f57611c1e611c54565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f63616c6c6572206973206e6f7420617574686f72697a65640000000000000000600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61200881611b6b565b811461201357600080fd5b50565b61201f81611ba9565b811461202a57600080fd5b5056fea2646970667358221220d95366b16712cc8bb0f945374bbac0f107649030ad0eb1b58bff5e5f3ff2628f64736f6c63430008040033";

type YDAITokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YDAITokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YDAIToken__factory extends ContractFactory {
  constructor(...args: YDAITokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YDAIToken> {
    return super.deploy(overrides || {}) as Promise<YDAIToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): YDAIToken {
    return super.attach(address) as YDAIToken;
  }
  override connect(signer: Signer): YDAIToken__factory {
    return super.connect(signer) as YDAIToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YDAITokenInterface {
    return new utils.Interface(_abi) as YDAITokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YDAIToken {
    return new Contract(address, _abi, signerOrProvider) as YDAIToken;
  }
}
