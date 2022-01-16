const CapAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentTokenId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "ipfsHash",
        "type": "string"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const CapAddress = "0x055cBfeD6df4AFE2452b18fd3D2592D1795592b4";

const GrapheneAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "nftContract_",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId_",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "COLD_PRICE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "HOT_PRICE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "coldReplicas",
        "type": "bool"
      },
      {
        "internalType": "uint8",
        "name": "nbrHotReplicas",
        "type": "uint8"
      }
    ],
    "name": "estimatePricing",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "stakeholder",
        "type": "address"
      }
    ],
    "name": "currentPricing",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "coldReplicas",
        "type": "bool"
      },
      {
        "internalType": "uint8",
        "name": "nbrHotReplicas",
        "type": "uint8"
      }
    ],
    "name": "rentStorage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const GrapheneBytecode = "0x608060405234801561001057600080fd5b5060405161088e38038061088e83398181016040528101906100329190610119565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806001819055505050610159565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100b082610085565b9050919050565b6100c0816100a5565b81146100cb57600080fd5b50565b6000815190506100dd816100b7565b92915050565b6000819050919050565b6100f6816100e3565b811461010157600080fd5b50565b600081519050610113816100ed565b92915050565b600080604083850312156101305761012f610080565b5b600061013e858286016100ce565b925050602061014f85828601610104565b9150509250929050565b610726806101686000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063598ab1ac1461005c578063651d832c1461007a578063ae4b311d146100aa578063c6eb3acd146100c6578063e7451ccd146100e4575b600080fd5b610064610114565b6040516100719190610466565b60405180910390f35b610094600480360381019061008f91906104f7565b610120565b6040516100a19190610466565b60405180910390f35b6100c460048036038101906100bf91906104f7565b6101c4565b005b6100ce61032e565b6040516100db9190610466565b60405180910390f35b6100fe60048036038101906100f99190610595565b61033a565b60405161010b9190610466565b60405180910390f35b671bc16d674ec8000081565b60008060009050831561015557600160028054905061013f91906105f1565b670de0b6b3a76400006101529190610676565b90505b6000600190505b8360ff1681116101b9576001600660008381526020019081526020016000205461018691906105f1565b671bc16d674ec800006101999190610676565b826101a491906105f1565b915080806101b1906106a7565b91505061015c565b508091505092915050565b8115610286576002339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b60008160ff16111561032a578060ff16600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600190505b8160ff16811161032857600160066000838152602001908152602001600020600082825461030e91906105f1565b925050819055508080610320906106a7565b9150506102e0565b505b5050565b670de0b6b3a764000081565b60008060009050600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156103af57600280549050670de0b6b3a76400006103ac9190610676565b90505b6000600190505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548111610443576006600082815260200190815260200160002054671bc16d674ec800006104239190610676565b8261042e91906105f1565b9150808061043b906106a7565b9150506103b6565b5080915050919050565b6000819050919050565b6104608161044d565b82525050565b600060208201905061047b6000830184610457565b92915050565b600080fd5b60008115159050919050565b61049b81610486565b81146104a657600080fd5b50565b6000813590506104b881610492565b92915050565b600060ff82169050919050565b6104d4816104be565b81146104df57600080fd5b50565b6000813590506104f1816104cb565b92915050565b6000806040838503121561050e5761050d610481565b5b600061051c858286016104a9565b925050602061052d858286016104e2565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061056282610537565b9050919050565b61057281610557565b811461057d57600080fd5b50565b60008135905061058f81610569565b92915050565b6000602082840312156105ab576105aa610481565b5b60006105b984828501610580565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006105fc8261044d565b91506106078361044d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561063c5761063b6105c2565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006106818261044d565b915061068c8361044d565b92508261069c5761069b610647565b5b828204905092915050565b60006106b28261044d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156106e5576106e46105c2565b5b60018201905091905056fea2646970667358221220eda8a177f7bcf8594f5fb08015ebfdd3131365081bc152a63b1cd640e8c4c87464736f6c634300080b0033";

const Issuer = {pk: "0x873c254263b17925b686f971d7724267710895f1585bb0533db8e693a2af32ff", address: "0x08302CF8648A961c607e3e7Bd7B7Ec3230c2A6c5" };
const Owner = {pk: "0x8c0ba8fece2e596a9acfc56c6c1bf57b6892df2cf136256dfcb49f6188d67940", address: "0x434BE6240f6dC213EbE695EB55a3f07f6C5148E3"};
const Consumer = {pk: "0x31c354f57fc542eba2c56699286723e94f7bd02a4891a0a7f68566c2a2df6795", address: "0x95eDA452256C1190947f9ba1fD19422f0120858a" };

export { CapAbi, CapAddress, GrapheneAbi, GrapheneBytecode, Issuer, Owner, Consumer };
