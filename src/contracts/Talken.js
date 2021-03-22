export default {
  "contractName": "Talken",
  "abi": [
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
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
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
          "name": "burned",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "Freeze",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "due",
          "type": "uint256"
        }
      ],
      "name": "Lock",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "currentOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Paused",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "Unfreeze",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Unlock",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpaused",
      "type": "event"
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
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "remaining",
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
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "burned",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "finishMint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "freeze",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isFinished",
      "outputs": [
        {
          "internalType": "bool",
          "name": "finished",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "isFrozen",
      "outputs": [
        {
          "internalType": "bool",
          "name": "frozen",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "locked",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "lockInfo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "due",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "ownerAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        }
      ],
      "name": "releaseLock",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "locked",
          "type": "address"
        }
      ],
      "name": "totalLocked",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "length",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "total",
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "due",
          "type": "uint256"
        }
      ],
      "name": "transferWithLockUp",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "unFreeze",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unPause",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
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
          "internalType": "uint256",
          "name": "idx",
          "type": "uint256"
        }
      ],
      "name": "unlock",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        }
      ],
      "name": "unlockAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
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
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "tokenName",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "tokenSymbol",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "tokenDecimals",
          "type": "uint8"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.7.1+commit.f4a555be\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"burned\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Freeze\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"due\",\"type\":\"uint256\"}],\"name\":\"Lock\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"MintFinished\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"currentOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Unfreeze\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Unlock\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"remaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"burned\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"tokenDecimals\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"finishMint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"freeze\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isFinished\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"finished\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"isFrozen\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"frozen\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"locked\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"lockInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"due\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"tokenName\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"ownerAddress\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"}],\"name\":\"releaseLock\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"tokenSymbol\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"locked\",\"type\":\"address\"}],\"name\":\"totalLocked\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"total\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"due\",\"type\":\"uint256\"}],\"name\":\"transferWithLockUp\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"unFreeze\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unPause\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"idx\",\"type\":\"uint256\"}],\"name\":\"unlock\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"}],\"name\":\"unlockAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"finishMint()\":{\"details\":\"only owner can call this function\"},\"mint(address,uint256)\":{\"details\":\"only owner can call this function\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"finishMint()\":{\"notice\":\"finish minting, cannot mint after calling this function\"},\"mint(address,uint256)\":{\"notice\":\"mint token\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/peter/devel/IDO/TALKEN/contracts/Talken.sol\":\"Talken\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/peter/devel/IDO/TALKEN/contracts/Talken.sol\":{\"keccak256\":\"0x5faca494cbd753e566d72f20f4cfeeca605e9173c14d8fe5cc52da80d9e63988\",\"urls\":[\"bzz-raw://f63d2361dc8925d2073d7e151ae262e9134a2f644d495555c2ac5438e98a4931\",\"dweb:/ipfs/QmW7vvAZFHBYv9EHy4qjsE2dEuphqRa8FiM97Dc2oQBWnG\"]},\"/Users/peter/devel/IDO/TALKEN/contracts/erc20/ERC20.sol\":{\"keccak256\":\"0x1fb4053b18fc8785fdb7732e7de4b8a05d1368daf8a655035c9331678ba7634f\",\"urls\":[\"bzz-raw://e2f2c5ab278c2c57981d8295cb9cc913c10c268878c8cfc3147f84980a97ee26\",\"dweb:/ipfs/QmRQfrSXhWeGoy2FxQWkaZV2b7QcbCrGfAp1uGSEZNUNBn\"]},\"/Users/peter/devel/IDO/TALKEN/contracts/erc20/ERC20Burnable.sol\":{\"keccak256\":\"0x6955131051bae5f76be844a5885dc0a5413085a83600003af866508da392c66e\",\"urls\":[\"bzz-raw://c27c81ef71f789c08a9ec815cd97e3501c8cddb9c2e11c7eccbf97b74a8f16e0\",\"dweb:/ipfs/QmT6YKzdLbZgJDnkfuwTSB2YVSn38QC1iSVGYvo9fvGzqr\"]},\"/Users/peter/devel/IDO/TALKEN/contracts/erc20/ERC20Lockable.sol\":{\"keccak256\":\"0x9f51f3096a6549c361d6b06c1271b7b1e4e782ec48e3ddc36b7b105de1b78963\",\"urls\":[\"bzz-raw://a8793b03a669ae9842ab920f61ea58e5dd8fbb1c28aecbfc290bbc0a8eafe184\",\"dweb:/ipfs/Qmetujqz8DAqFLBRKmQYdA4nNixc1fe2JyR5sjUFDEnbVG\"]},\"/Users/peter/devel/IDO/TALKEN/contracts/erc20/ERC20Mintable.sol\":{\"keccak256\":\"0x881bcec362c25312d23eb8f53a2b6ba0e1a8164a47ecdfe7feb815435566641c\",\"urls\":[\"bzz-raw://9dde39b268b9fa4c123c596ae61e2a6a889c002cb987e507d0111d769cd2ff40\",\"dweb:/ipfs/QmTSA3oNtNcitNHeyMj5zuiGytEvxEQuFSLWL7ffrMETnz\"]},\"/Users/peter/devel/IDO/TALKEN/contracts/library/Freezable.sol\":{\"keccak256\":\"0x66b69cafc41b1edc13534d87e127f6f1099244858b24ef42e803573f88ca1f33\",\"urls\":[\"bzz-raw://26fdb0f89110a7c9b70a4225e0c7382a3f5fc4604a9da47b195ad51c61be0ba3\",\"dweb:/ipfs/QmbuzLreY9WUkpoPzkmehNzsEutBrefFtQQk8u5swBEAwY\"]},\"/Users/peter/devel/IDO/TALKEN/contracts/library/Ownable.sol\":{\"keccak256\":\"0xd18056031c82a361289c24abf1a2d27e33c8b783acc50339c45e4ad3033a0001\",\"urls\":[\"bzz-raw://835d457ace7c36d041e827a2f363b31121384244c2eedc751c0f35038ed80091\",\"dweb:/ipfs/QmeX8jZSJuZ9CAZytXJ6PmXKK2uddUAWr1JWGo8zu14Qvb\"]},\"/Users/peter/devel/IDO/TALKEN/contracts/library/Pausable.sol\":{\"keccak256\":\"0x93d45c7c1dfa2d8143598916730f931cf49dfda453bf1a8f2e8a7a5a9c33bcc7\",\"urls\":[\"bzz-raw://d438ab05c759ec65f22bf7f2e629f3b21af66c5644bd628e1cd50907062e1c41\",\"dweb:/ipfs/QmRhLbVoRS545YmRYTfdBVDudkPtQY3rSf1bs3F6mz7J1z\"]},\"/Users/peter/devel/IDO/TALKEN/contracts/library/SafeMath.sol\":{\"keccak256\":\"0xafcdd26b5e35bfeaa825845a833cef969fc69bd0505b9c55cf166077c7bfbfa2\",\"urls\":[\"bzz-raw://3f5990ede0baf803b0d8910bd7c36efea0bb7a3be8a394ff9ac4b32106555130\",\"dweb:/ipfs/Qmeekho5PTrfhp51hEfLqUyR5GZJZyjhFzi1u5gbhLjBcV\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b50600380546001600160a01b031916339081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3612108806100606000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806383cfab4211610104578063c4f3a853116100a2578063e4cc18be11610071578063e4cc18be146105a1578063e5839836146105a9578063f2fde38b146105cf578063f7b188a5146105f5576101cf565b8063c4f3a85314610501578063d1c4691614610527578063d8fb93371461054d578063dd62ed3e14610573576101cf565b80638da5cb5b116100de5780638da5cb5b1461046457806395d89b4114610488578063a9059cbb14610490578063b2520a7c146104bc576101cf565b806383cfab42146104105780638456cb59146104365780638d1fdf2f1461043e576101cf565b806342966c6811610171578063715018a61161014b578063715018a6146103a857806379cc6790146103b05780637b352962146103dc5780637eee288d146103e4576101cf565b806342966c681461035d5780635c975abb1461037a57806370a0823114610382576101cf565b806323b872dd116101ad57806323b872dd146102ab578063313ce567146102e157806338b82092146102ff57806340c10f1914610331576101cf565b806306fdde03146101d4578063095ea7b31461025157806318160ddd14610291575b600080fd5b6101dc6105fd565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102165781810151838201526020016101fe565b50505050905090810190601f1680156102435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61027d6004803603604081101561026757600080fd5b506001600160a01b03813516906020013561061d565b604080519115158252519081900360200190f35b610299610679565b60408051918252519081900360200190f35b61027d600480360360608110156102c157600080fd5b506001600160a01b0381358116916020810135909116906040013561067f565b6102e961085f565b6040805160ff9092168252519081900360200190f35b61027d6004803603606081101561031557600080fd5b506001600160a01b038135169060208101359060400135610864565b61027d6004803603604081101561034757600080fd5b506001600160a01b038135169060200135610917565b61027d6004803603602081101561037357600080fd5b5035610adc565b61027d610b6b565b6102996004803603602081101561039857600080fd5b50356001600160a01b0316610b74565b61027d610b8f565b61027d600480360360408110156103c657600080fd5b506001600160a01b038135169060200135610bea565b61027d610ccd565b61027d600480360360408110156103fa57600080fd5b506001600160a01b038135169060200135610cdb565b61027d6004803603602081101561042657600080fd5b50356001600160a01b0316610d61565b61027d610dfb565b61027d6004803603602081101561045457600080fd5b50356001600160a01b0316610ec5565b61046c610f62565b604080516001600160a01b039092168252519081900360200190f35b6101dc610f71565b61027d600480360360408110156104a657600080fd5b506001600160a01b038135169060200135610f8f565b6104e8600480360360408110156104d257600080fd5b506001600160a01b038135169060200135611108565b6040805192835260208301919091528051918290030190f35b61027d6004803603602081101561051757600080fd5b50356001600160a01b0316611170565b61027d6004803603602081101561053d57600080fd5b50356001600160a01b03166111f8565b6104e86004803603602081101561056357600080fd5b50356001600160a01b0316611283565b6102996004803603604081101561058957600080fd5b506001600160a01b03813581169160200135166112ab565b61027d6112d6565b61027d600480360360208110156105bf57600080fd5b50356001600160a01b03166113a7565b61027d600480360360208110156105e557600080fd5b50356001600160a01b03166113c5565b61027d611465565b6040805180820190915260068152652a30b635b2b760d11b602082015290565b60006001600160a01b0383166106645760405162461bcd60e51b815260040180806020018281038252602d815260200180611ffd602d913960400191505060405180910390fd5b61066f33848461152b565b5060019392505050565b60005490565b6001600160a01b038316600090815260076020526040812054849060ff16156106ef576040805162461bcd60e51b815260206004820152601c60248201527f467265657a61626c65203a207461726765742069732066726f7a656e00000000604482015290519081900360640190fd5b60065460ff16156107315760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b6001600160a01b038516600090815260056020526040902054859084906107589082611596565b6001600160a01b03831660009081526001602052604090205410156107ae5760405162461bcd60e51b8152600401808060200182810382526033815260200180611fca6033913960400191505060405180910390fd5b6001600160a01b0386166107f35760405162461bcd60e51b8152600401808060200182810382526033815260200180611c806033913960400191505060405180910390fd5b6107fe8787876115f0565b50610851873361084c88604051806060016040528060338152602001611f97603391396001600160a01b038d16600090815260026020908152604080832033845290915290205491906116bf565b61152b565b506001979650505050505050565b601290565b6003546000906001600160a01b031633146108b05760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b6001600160a01b0384166108f55760405162461bcd60e51b815260040180806020018281038252603e815260200180611cb3603e913960400191505060405180910390fd5b6109003385856115f0565b5061090c848484611756565b506001949350505050565b6003546000906001600160a01b031633146109635760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b60065460ff16156109a55760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b6001600160a01b0383166109ea5760405162461bcd60e51b8152600401808060200182810382526034815260200180611df06034913960400191505060405180910390fd5b600654610100900460ff1615610a315760405162461bcd60e51b815260040180806020018281038252602f815260200180611e9b602f913960400191505060405180910390fd5b6000546b033b2e3c9fd0803ce800000090610a4c9084611596565b1115610a895760405162461bcd60e51b815260040180806020018281038252602f81526020018061202a602f913960400191505060405180910390fd5b610a9383836118cf565b506040805183815290516001600160a01b038516917f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885919081900360200190a250600192915050565b60065460009060ff1615610b215760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b610b2b338361195f565b60408051848152905191925033917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca59181900360200190a2506001919050565b60065460ff1690565b6001600160a01b031660009081526001602052604090205490565b6003546000906001600160a01b03163314610bdb5760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b610be56000611a3b565b905090565b60065460009060ff1615610c2f5760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b610c39838361195f565b506040805183815290516001600160a01b038516917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a2610cc6833361084c85604051806060016040528060388152602001611db8603891396001600160a01b038916600090815260026020908152604080832033845290915290205491906116bf565b9392505050565b600654610100900460ff1690565b6001600160a01b0382166000908152600460205260408120805442919084908110610d0257fe5b90600052602060002090600202016001015410610d505760405162461bcd60e51b815260040180806020018281038252602e815260200180611d8a602e913960400191505060405180910390fd5b610d5a8383611a9e565b5092915050565b6003546000906001600160a01b03163314610dad5760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b6001600160a01b038216600081815260076020526040808220805460ff19169055517fca5069937e68fd197927055037f59d7c90bf75ac104e6e375539ef480c3ad6ee9190a2506001919050565b6003546000906001600160a01b03163314610e475760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b60065460ff1615610e895760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b6006805460ff191660011790556040517f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75290600090a150600190565b6003546000906001600160a01b03163314610f115760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b6001600160a01b038216600081815260076020526040808220805460ff19166001179055517faf85b60d26151edd11443b704d424da6c43d0468f2235ebae3d1904dbc3230499190a2506001919050565b6003546001600160a01b031690565b60408051808201909152600481526354414c4b60e01b602082015290565b3360008181526007602052604081205490919060ff1615610ff7576040805162461bcd60e51b815260206004820152601c60248201527f467265657a61626c65203a207461726765742069732066726f7a656e00000000604482015290519081900360640190fd5b60065460ff16156110395760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b3360008181526005602052604090205484906110559082611596565b6001600160a01b03831660009081526001602052604090205410156110ab5760405162461bcd60e51b8152600401808060200182810382526033815260200180611fca6033913960400191505060405180910390fd5b6001600160a01b0386166110f05760405162461bcd60e51b815260040180806020018281038252602f815260200180611ef9602f913960400191505060405180910390fd5b6110fb3387876115f0565b5060019695505050505050565b600080611113611c65565b6001600160a01b038516600090815260046020526040902080548590811061113757fe5b60009182526020918290206040805180820190915260029092020180548083526001909101549190920181905290969095509350505050565b6000805b6001600160a01b0383166000908152600460205260409020548110156111ef576001600160a01b03831660009081526004602052604090208054429190839081106111bb57fe5b90600052602060002090600202016001015410156111e7576111dd8382611a9e565b156111e757600019015b600101611174565b50600192915050565b6003546000906001600160a01b031633146112445760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b60005b6001600160a01b0383166000908152600460205260409020548110156111ef576112718382611a9e565b1561127b57600019015b600101611247565b6001600160a01b03166000908152600560209081526040808320546004909252909120549091565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6003546000906001600160a01b031633146113225760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b600654610100900460ff16156113695760405162461bcd60e51b815260040180806020018281038252602e815260200180611cf1602e913960400191505060405180910390fd5b6006805461ff0019166101001790556040517fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0890600090a150600190565b6001600160a01b031660009081526007602052604090205460ff1690565b6003546000906001600160a01b031633146114115760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b6001600160a01b0382166114565760405162461bcd60e51b815260040180806020018281038252604581526020018061208e6045913960600191505060405180910390fd5b61145f82611a3b565b92915050565b6003546000906001600160a01b031633146114b15760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b60065460ff166114f25760405162461bcd60e51b81526004018080602001828103825260358152602001806120596035913960400191505060405180910390fd5b6006805460ff191690556040517fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693390600090a150600190565b6001600160a01b03808416600081815260026020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600082820183811015610cc6576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061162f826040518060600160405280603e8152602001611e5d603e91396001600160a01b03871660009081526001602052604090205491906116bf565b6001600160a01b03808616600090815260016020526040808220939093559085168152205461165e9083611596565b6001600160a01b0380851660008181526001602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060019392505050565b6000818484111561174e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117135781810151838201526020016116fb565b50505050905090810190601f1680156117405780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60004282116117965760405162461bcd60e51b815260040180806020018281038252602b815260200180611d5f602b913960400191505060405180910390fd5b6001600160a01b0384166000908152600560205260409020546117ba908490611596565b6001600160a01b03851660009081526001602052604090205410156118105760405162461bcd60e51b8152600401808060200182810382526040815260200180611d1f6040913960400191505060405180910390fd5b6001600160a01b0384166000908152600560205260409020546118339084611596565b6001600160a01b03851660008181526005602090815260408083209490945560048152838220845180860186528881528083018881528254600181810185559386529484902091516002909502909101938455519201919091558251868152908101859052825191927f49eaf4942f1237055eb4cfa5f31c9dfe50d5b4ade01e021f7de8be2fbbde557b92918290030190a25060019392505050565b600080546118dd9083611596565b60009081556001600160a01b0384168152600160205260409020546119029083611596565b6001600160a01b03841660008181526001602090815260408083209490945583518681529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b600061199e82604051806060016040528060398152602001611f28603991396001600160a01b03861660009081526001602052604090205491906116bf565b60016000856001600160a01b03166001600160a01b03168152602001908152602001600020819055506119ee82604051806060016040528060368152602001611f616036913960005491906116bf565b60009081556040805184815290516001600160a01b038616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a350600192915050565b6003546040516000916001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908490a350600380546001600160a01b0319166001600160a01b0392909216919091179055600190565b6001600160a01b0382166000908152600460205260408120805482919084908110611ac557fe5b60009182526020808320600290920290910180546001600160a01b03881684526005909252604090922054919250611afd9190611c23565b6001600160a01b0385166000818152600560209081526040918290209390935583548151908152905191927f6381d9813cabeb57471b5a7e05078e64845ccdb563146a6911d536f24ce960f192918290030190a26001600160a01b038416600090815260046020526040902080546000198101908110611b7957fe5b906000526020600020906002020160046000866001600160a01b03166001600160a01b031681526020019081526020016000208481548110611bb757fe5b60009182526020808320845460029093020191825560019384015493909101929092556001600160a01b0386168152600490915260409020805480611bf857fe5b6000828152602081206002600019909301928302018181556001908101919091559155949350505050565b6000610cc683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506116bf565b60405180604001604052806000815260200160008152509056fe54414c4b2f7472616e7366657246726f6d203a2053686f756c64206e6f742073656e6420746f207a65726f206164647265737345524332304c6f636b61626c652f7472616e73666572576974684c6f636b5570203a2043616e6e6f742073656e6420746f207a65726f206164647265737345524332304d696e7461626c652f66696e6973684d696e74696e67203a20416c72656164792066696e697368656445524332304c6f636b61626c652f6c6f636b203a206c6f636b656420746f74616c2073686f756c6420626520736d616c6c6572207468616e2062616c616e636545524332304c6f636b61626c652f6c6f636b203a2043616e6e6f74207365742064756520746f207061737445524332304c6f636b61626c652f756e6c6f636b3a2063616e6e6f7420756e6c6f636b206265666f72652064756545524332304275726e61626c652f6275726e46726f6d203a2043616e6e6f74206275726e206d6f7265207468616e20616c6c6f77616e636545524332304d696e7461626c652f6d696e74203a2053686f756c64206e6f74206d696e7420746f207a65726f2061646472657373506175736564203a20546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c6564207768656e206e6f742070617573656445524332302f7472616e73666572203a2063616e6e6f74207472616e73666572206d6f7265207468616e20746f6b656e206f776e65722062616c616e636545524332304d696e7461626c652f6d696e74203a2043616e6e6f74206d696e742061667465722066696e69736865644f776e61626c65203a2046756e6374696f6e2063616c6c656420627920756e617574686f72697a656420757365722e54414c4b2f7472616e73666572203a2053686f756c64206e6f742073656e6420746f207a65726f206164647265737345524332304275726e61626c652f6275726e203a2043616e6e6f74206275726e206d6f7265207468616e207573657227732062616c616e636545524332304275726e61626c652f6275726e203a2043616e6e6f74206275726e206d6f7265207468616e20746f74616c537570706c7954414c4b2f7472616e7366657246726f6d203a2043616e6e6f742073656e64206d6f7265207468616e20616c6c6f77616e636545524332304c6f636b61626c652f43616e6e6f742073656e64206d6f7265207468616e20756e6c6f636b656420616d6f756e7453414d2f617070726f7665203a2053686f756c64206e6f7420617070726f7665207a65726f206164647265737345524332304d696e7461626c652f6d696e7420203a2043616e6e6f74206d696e74206d6f7265207468616e20636170506175736564203a20546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c6564207768656e207061757365644f776e61626c652f7472616e736665724f776e657273686970203a2063616e6e6f74207472616e73666572206f776e65727368697020746f207a65726f2061646472657373a264697066735822122027a6fee406d9200d4930e8cec8046c7ca0e2232c4db617fbeae7d8f674b22ab664736f6c63430007010033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101cf5760003560e01c806383cfab4211610104578063c4f3a853116100a2578063e4cc18be11610071578063e4cc18be146105a1578063e5839836146105a9578063f2fde38b146105cf578063f7b188a5146105f5576101cf565b8063c4f3a85314610501578063d1c4691614610527578063d8fb93371461054d578063dd62ed3e14610573576101cf565b80638da5cb5b116100de5780638da5cb5b1461046457806395d89b4114610488578063a9059cbb14610490578063b2520a7c146104bc576101cf565b806383cfab42146104105780638456cb59146104365780638d1fdf2f1461043e576101cf565b806342966c6811610171578063715018a61161014b578063715018a6146103a857806379cc6790146103b05780637b352962146103dc5780637eee288d146103e4576101cf565b806342966c681461035d5780635c975abb1461037a57806370a0823114610382576101cf565b806323b872dd116101ad57806323b872dd146102ab578063313ce567146102e157806338b82092146102ff57806340c10f1914610331576101cf565b806306fdde03146101d4578063095ea7b31461025157806318160ddd14610291575b600080fd5b6101dc6105fd565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102165781810151838201526020016101fe565b50505050905090810190601f1680156102435780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61027d6004803603604081101561026757600080fd5b506001600160a01b03813516906020013561061d565b604080519115158252519081900360200190f35b610299610679565b60408051918252519081900360200190f35b61027d600480360360608110156102c157600080fd5b506001600160a01b0381358116916020810135909116906040013561067f565b6102e961085f565b6040805160ff9092168252519081900360200190f35b61027d6004803603606081101561031557600080fd5b506001600160a01b038135169060208101359060400135610864565b61027d6004803603604081101561034757600080fd5b506001600160a01b038135169060200135610917565b61027d6004803603602081101561037357600080fd5b5035610adc565b61027d610b6b565b6102996004803603602081101561039857600080fd5b50356001600160a01b0316610b74565b61027d610b8f565b61027d600480360360408110156103c657600080fd5b506001600160a01b038135169060200135610bea565b61027d610ccd565b61027d600480360360408110156103fa57600080fd5b506001600160a01b038135169060200135610cdb565b61027d6004803603602081101561042657600080fd5b50356001600160a01b0316610d61565b61027d610dfb565b61027d6004803603602081101561045457600080fd5b50356001600160a01b0316610ec5565b61046c610f62565b604080516001600160a01b039092168252519081900360200190f35b6101dc610f71565b61027d600480360360408110156104a657600080fd5b506001600160a01b038135169060200135610f8f565b6104e8600480360360408110156104d257600080fd5b506001600160a01b038135169060200135611108565b6040805192835260208301919091528051918290030190f35b61027d6004803603602081101561051757600080fd5b50356001600160a01b0316611170565b61027d6004803603602081101561053d57600080fd5b50356001600160a01b03166111f8565b6104e86004803603602081101561056357600080fd5b50356001600160a01b0316611283565b6102996004803603604081101561058957600080fd5b506001600160a01b03813581169160200135166112ab565b61027d6112d6565b61027d600480360360208110156105bf57600080fd5b50356001600160a01b03166113a7565b61027d600480360360208110156105e557600080fd5b50356001600160a01b03166113c5565b61027d611465565b6040805180820190915260068152652a30b635b2b760d11b602082015290565b60006001600160a01b0383166106645760405162461bcd60e51b815260040180806020018281038252602d815260200180611ffd602d913960400191505060405180910390fd5b61066f33848461152b565b5060019392505050565b60005490565b6001600160a01b038316600090815260076020526040812054849060ff16156106ef576040805162461bcd60e51b815260206004820152601c60248201527f467265657a61626c65203a207461726765742069732066726f7a656e00000000604482015290519081900360640190fd5b60065460ff16156107315760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b6001600160a01b038516600090815260056020526040902054859084906107589082611596565b6001600160a01b03831660009081526001602052604090205410156107ae5760405162461bcd60e51b8152600401808060200182810382526033815260200180611fca6033913960400191505060405180910390fd5b6001600160a01b0386166107f35760405162461bcd60e51b8152600401808060200182810382526033815260200180611c806033913960400191505060405180910390fd5b6107fe8787876115f0565b50610851873361084c88604051806060016040528060338152602001611f97603391396001600160a01b038d16600090815260026020908152604080832033845290915290205491906116bf565b61152b565b506001979650505050505050565b601290565b6003546000906001600160a01b031633146108b05760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b6001600160a01b0384166108f55760405162461bcd60e51b815260040180806020018281038252603e815260200180611cb3603e913960400191505060405180910390fd5b6109003385856115f0565b5061090c848484611756565b506001949350505050565b6003546000906001600160a01b031633146109635760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b60065460ff16156109a55760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b6001600160a01b0383166109ea5760405162461bcd60e51b8152600401808060200182810382526034815260200180611df06034913960400191505060405180910390fd5b600654610100900460ff1615610a315760405162461bcd60e51b815260040180806020018281038252602f815260200180611e9b602f913960400191505060405180910390fd5b6000546b033b2e3c9fd0803ce800000090610a4c9084611596565b1115610a895760405162461bcd60e51b815260040180806020018281038252602f81526020018061202a602f913960400191505060405180910390fd5b610a9383836118cf565b506040805183815290516001600160a01b038516917f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885919081900360200190a250600192915050565b60065460009060ff1615610b215760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b610b2b338361195f565b60408051848152905191925033917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca59181900360200190a2506001919050565b60065460ff1690565b6001600160a01b031660009081526001602052604090205490565b6003546000906001600160a01b03163314610bdb5760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b610be56000611a3b565b905090565b60065460009060ff1615610c2f5760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b610c39838361195f565b506040805183815290516001600160a01b038516917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a2610cc6833361084c85604051806060016040528060388152602001611db8603891396001600160a01b038916600090815260026020908152604080832033845290915290205491906116bf565b9392505050565b600654610100900460ff1690565b6001600160a01b0382166000908152600460205260408120805442919084908110610d0257fe5b90600052602060002090600202016001015410610d505760405162461bcd60e51b815260040180806020018281038252602e815260200180611d8a602e913960400191505060405180910390fd5b610d5a8383611a9e565b5092915050565b6003546000906001600160a01b03163314610dad5760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b6001600160a01b038216600081815260076020526040808220805460ff19169055517fca5069937e68fd197927055037f59d7c90bf75ac104e6e375539ef480c3ad6ee9190a2506001919050565b6003546000906001600160a01b03163314610e475760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b60065460ff1615610e895760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b6006805460ff191660011790556040517f9e87fac88ff661f02d44f95383c817fece4bce600a3dab7a54406878b965e75290600090a150600190565b6003546000906001600160a01b03163314610f115760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b6001600160a01b038216600081815260076020526040808220805460ff19166001179055517faf85b60d26151edd11443b704d424da6c43d0468f2235ebae3d1904dbc3230499190a2506001919050565b6003546001600160a01b031690565b60408051808201909152600481526354414c4b60e01b602082015290565b3360008181526007602052604081205490919060ff1615610ff7576040805162461bcd60e51b815260206004820152601c60248201527f467265657a61626c65203a207461726765742069732066726f7a656e00000000604482015290519081900360640190fd5b60065460ff16156110395760405162461bcd60e51b8152600401808060200182810382526039815260200180611e246039913960400191505060405180910390fd5b3360008181526005602052604090205484906110559082611596565b6001600160a01b03831660009081526001602052604090205410156110ab5760405162461bcd60e51b8152600401808060200182810382526033815260200180611fca6033913960400191505060405180910390fd5b6001600160a01b0386166110f05760405162461bcd60e51b815260040180806020018281038252602f815260200180611ef9602f913960400191505060405180910390fd5b6110fb3387876115f0565b5060019695505050505050565b600080611113611c65565b6001600160a01b038516600090815260046020526040902080548590811061113757fe5b60009182526020918290206040805180820190915260029092020180548083526001909101549190920181905290969095509350505050565b6000805b6001600160a01b0383166000908152600460205260409020548110156111ef576001600160a01b03831660009081526004602052604090208054429190839081106111bb57fe5b90600052602060002090600202016001015410156111e7576111dd8382611a9e565b156111e757600019015b600101611174565b50600192915050565b6003546000906001600160a01b031633146112445760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b60005b6001600160a01b0383166000908152600460205260409020548110156111ef576112718382611a9e565b1561127b57600019015b600101611247565b6001600160a01b03166000908152600560209081526040808320546004909252909120549091565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6003546000906001600160a01b031633146113225760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b600654610100900460ff16156113695760405162461bcd60e51b815260040180806020018281038252602e815260200180611cf1602e913960400191505060405180910390fd5b6006805461ff0019166101001790556040517fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0890600090a150600190565b6001600160a01b031660009081526007602052604090205460ff1690565b6003546000906001600160a01b031633146114115760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b6001600160a01b0382166114565760405162461bcd60e51b815260040180806020018281038252604581526020018061208e6045913960600191505060405180910390fd5b61145f82611a3b565b92915050565b6003546000906001600160a01b031633146114b15760405162461bcd60e51b815260040180806020018281038252602f815260200180611eca602f913960400191505060405180910390fd5b60065460ff166114f25760405162461bcd60e51b81526004018080602001828103825260358152602001806120596035913960400191505060405180910390fd5b6006805460ff191690556040517fa45f47fdea8a1efdd9029a5691c7f759c32b7c698632b563573e155625d1693390600090a150600190565b6001600160a01b03808416600081815260026020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600082820183811015610cc6576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600061162f826040518060600160405280603e8152602001611e5d603e91396001600160a01b03871660009081526001602052604090205491906116bf565b6001600160a01b03808616600090815260016020526040808220939093559085168152205461165e9083611596565b6001600160a01b0380851660008181526001602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060019392505050565b6000818484111561174e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117135781810151838201526020016116fb565b50505050905090810190601f1680156117405780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60004282116117965760405162461bcd60e51b815260040180806020018281038252602b815260200180611d5f602b913960400191505060405180910390fd5b6001600160a01b0384166000908152600560205260409020546117ba908490611596565b6001600160a01b03851660009081526001602052604090205410156118105760405162461bcd60e51b8152600401808060200182810382526040815260200180611d1f6040913960400191505060405180910390fd5b6001600160a01b0384166000908152600560205260409020546118339084611596565b6001600160a01b03851660008181526005602090815260408083209490945560048152838220845180860186528881528083018881528254600181810185559386529484902091516002909502909101938455519201919091558251868152908101859052825191927f49eaf4942f1237055eb4cfa5f31c9dfe50d5b4ade01e021f7de8be2fbbde557b92918290030190a25060019392505050565b600080546118dd9083611596565b60009081556001600160a01b0384168152600160205260409020546119029083611596565b6001600160a01b03841660008181526001602090815260408083209490945583518681529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b600061199e82604051806060016040528060398152602001611f28603991396001600160a01b03861660009081526001602052604090205491906116bf565b60016000856001600160a01b03166001600160a01b03168152602001908152602001600020819055506119ee82604051806060016040528060368152602001611f616036913960005491906116bf565b60009081556040805184815290516001600160a01b038616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a350600192915050565b6003546040516000916001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908490a350600380546001600160a01b0319166001600160a01b0392909216919091179055600190565b6001600160a01b0382166000908152600460205260408120805482919084908110611ac557fe5b60009182526020808320600290920290910180546001600160a01b03881684526005909252604090922054919250611afd9190611c23565b6001600160a01b0385166000818152600560209081526040918290209390935583548151908152905191927f6381d9813cabeb57471b5a7e05078e64845ccdb563146a6911d536f24ce960f192918290030190a26001600160a01b038416600090815260046020526040902080546000198101908110611b7957fe5b906000526020600020906002020160046000866001600160a01b03166001600160a01b031681526020019081526020016000208481548110611bb757fe5b60009182526020808320845460029093020191825560019384015493909101929092556001600160a01b0386168152600490915260409020805480611bf857fe5b6000828152602081206002600019909301928302018181556001908101919091559155949350505050565b6000610cc683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506116bf565b60405180604001604052806000815260200160008152509056fe54414c4b2f7472616e7366657246726f6d203a2053686f756c64206e6f742073656e6420746f207a65726f206164647265737345524332304c6f636b61626c652f7472616e73666572576974684c6f636b5570203a2043616e6e6f742073656e6420746f207a65726f206164647265737345524332304d696e7461626c652f66696e6973684d696e74696e67203a20416c72656164792066696e697368656445524332304c6f636b61626c652f6c6f636b203a206c6f636b656420746f74616c2073686f756c6420626520736d616c6c6572207468616e2062616c616e636545524332304c6f636b61626c652f6c6f636b203a2043616e6e6f74207365742064756520746f207061737445524332304c6f636b61626c652f756e6c6f636b3a2063616e6e6f7420756e6c6f636b206265666f72652064756545524332304275726e61626c652f6275726e46726f6d203a2043616e6e6f74206275726e206d6f7265207468616e20616c6c6f77616e636545524332304d696e7461626c652f6d696e74203a2053686f756c64206e6f74206d696e7420746f207a65726f2061646472657373506175736564203a20546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c6564207768656e206e6f742070617573656445524332302f7472616e73666572203a2063616e6e6f74207472616e73666572206d6f7265207468616e20746f6b656e206f776e65722062616c616e636545524332304d696e7461626c652f6d696e74203a2043616e6e6f74206d696e742061667465722066696e69736865644f776e61626c65203a2046756e6374696f6e2063616c6c656420627920756e617574686f72697a656420757365722e54414c4b2f7472616e73666572203a2053686f756c64206e6f742073656e6420746f207a65726f206164647265737345524332304275726e61626c652f6275726e203a2043616e6e6f74206275726e206d6f7265207468616e207573657227732062616c616e636545524332304275726e61626c652f6275726e203a2043616e6e6f74206275726e206d6f7265207468616e20746f74616c537570706c7954414c4b2f7472616e7366657246726f6d203a2043616e6e6f742073656e64206d6f7265207468616e20616c6c6f77616e636545524332304c6f636b61626c652f43616e6e6f742073656e64206d6f7265207468616e20756e6c6f636b656420616d6f756e7453414d2f617070726f7665203a2053686f756c64206e6f7420617070726f7665207a65726f206164647265737345524332304d696e7461626c652f6d696e7420203a2043616e6e6f74206d696e74206d6f7265207468616e20636170506175736564203a20546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c6564207768656e207061757365644f776e61626c652f7472616e736665724f776e657273686970203a2063616e6e6f74207472616e73666572206f776e65727368697020746f207a65726f2061646472657373a264697066735822122027a6fee406d9200d4930e8cec8046c7ca0e2232c4db617fbeae7d8f674b22ab664736f6c63430007010033",
  "immutableReferences": {},
  "sourceMap": "200:2761:1:-:0;;;514:31;;;;;;;;;-1:-1:-1;221:6:9;:19;;-1:-1:-1;;;;;;221:19:9;230:10;221:19;;;;;;255:44;;221:6;;255:44;;221:6;;255:44;200:2761:1;;;;;;",
  "deployedSourceMap": "200:2761:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2610:107;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2284:320;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2284:320:1;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;2036:98:4;;;:::i;:::-;;;;;;;;;;;;;;;;1645:633:1;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1645:633:1;;;;;;;;;;;;;;;;;:::i;2844:115::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2395:396:6;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2395:396:6;;;;;;;;;;;;;:::i;551:680:1:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;551:680:1;;;;;;;;:::i;228:219:5:-;;;;;;;;;;;;;;;;-1:-1:-1;228:219:5;;:::i;737:78:10:-;;;:::i;2139:117:4:-;;;;;;;;;;;;;;;;-1:-1:-1;2139:117:4;-1:-1:-1;;;;;2139:117:4;;:::i;875:128:9:-;;;:::i;453:442:5:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;453:442:5;;;;;;;;:::i;874:103:7:-;;;:::i;1587:215:6:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1587:215:6;;;;;;;;:::i;521:199:8:-;;;;;;;;;;;;;;;;-1:-1:-1;521:199:8;-1:-1:-1;;;;;521:199:8;;:::i;421:151:10:-;;;:::i;349:166:8:-;;;;;;;;;;;;;;;;-1:-1:-1;349:166:8;-1:-1:-1;;;;;349:166:8;;:::i;481:100:9:-;;;:::i;:::-;;;;-1:-1:-1;;;;;481:100:9;;;;;;;;;;;;;;2723:115:1;;;:::i;1237:402::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1237:402:1;;;;;;;;:::i;2797:232:6:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2797:232:6;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1808:314;;;;;;;;;;;;;;;;-1:-1:-1;1808:314:6;-1:-1:-1;;;;;1808:314:6;;:::i;2128:261::-;;;;;;;;;;;;;;;;-1:-1:-1;2128:261:6;-1:-1:-1;;;;;2128:261:6;;:::i;3035:176::-;;;;;;;;;;;;;;;;-1:-1:-1;3035:176:6;-1:-1:-1;;;;;3035:176:6;;:::i;2262:177:4:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2262:177:4;;;;;;;;;;:::i;566:302:7:-;;;:::i;726:137:8:-;;;;;;;;;;;;;;;;-1:-1:-1;726:137:8;-1:-1:-1;;;;;726:137:8;;:::i;587:282:9:-;;;;;;;;;;;;;;;;-1:-1:-1;587:282:9;-1:-1:-1;;;;;587:282:9;;:::i;578:153:10:-;;;:::i;2610:107:1:-;2705:5;;;;;;;;;;;;-1:-1:-1;;;2705:5:1;;;;;2610:107::o;2284:320::-;2385:12;-1:-1:-1;;;;;2434:21:1;;2413:113;;;;-1:-1:-1;;;2413:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2536:37;2545:10;2557:7;2566:6;2536:8;:37::i;:::-;-1:-1:-1;2593:4:1;;2284:320;-1:-1:-1;;;2284:320:1:o;2036:98:4:-;2082:13;2115:12;;2036:98::o;1645:633:1:-;-1:-1:-1;;;;;277:15:8;;1842:12:1;277:15:8;;;:7;:15;;;;;;1765:4:1;;277:15:8;;276:16;268:57;;;;;-1:-1:-1;;;268:57:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;328:7:10::1;::::0;::::1;;327:8;319:78;;;;-1:-1:-1::0;;;319:78:10::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1::0;;;;;561:18:6;::::2;;::::0;;;:12:::2;:18;::::0;;;;;1811:4:1;;1817:6;;561:30:6::2;::::0;1817:6:1;561:22:6::2;:30::i;:::-;-1:-1:-1::0;;;;;542:15:6;::::2;;::::0;;;:9:::2;:15;::::0;;;;;:49:::2;;534:113;;;;-1:-1:-1::0;;;534:113:6::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1::0;;;;;1891:16:1;::::3;1870:114;;;;-1:-1:-1::0;;;1870:114:1::3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1994:27;2004:4;2010:2;2014:6;1994:9;:27::i;:::-;;2031:216;2053:4;2071:10;2095:142;2146:6;2095:142;;;;;;;;;;;;;;;;;-1:-1:-1::0;;;;;2095:17:1;::::3;;::::0;;;:11:::3;:17;::::0;;;;;;;2113:10:::3;2095:29:::0;;;;;;;;;:142;:33:::3;:142::i;:::-;2031:8;:216::i;:::-;-1:-1:-1::0;2267:4:1::3;::::0;1645:633;-1:-1:-1;;;;;;;1645:633:1:o;2844:115::-;455:2;;2844:115::o;2395:396:6:-;378:6:9;;2511:12:6;;-1:-1:-1;;;;;378:6:9;364:10;:20;343:114;;;;-1:-1:-1;;;343:114:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2560:23:6;::::1;2539:132;;;;-1:-1:-1::0;;;2539:132:6::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2681:40;2691:10;2703:9;2714:6;2681:9;:40::i;:::-;;2731:29;2737:9;2748:6;2756:3;2731:5;:29::i;:::-;-1:-1:-1::0;2780:4:6::1;::::0;2395:396;-1:-1:-1;;;;2395:396:6:o;551:680:1:-;378:6:9;;690:12:1;;-1:-1:-1;;;;;378:6:9;364:10;:20;343:114;;;;-1:-1:-1;;;343:114:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;328:7:10::1;::::0;::::1;;327:8;319:78;;;;-1:-1:-1::0;;;319:78:10::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1::0;;;;;739:22:1;::::2;718:121;;;;-1:-1:-1::0;;;718:121:1::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;871:16;::::0;::::2;::::0;::::2;;;870:17;849:111;;;;-1:-1:-1::0;;;849:111:1::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;991:12;::::0;1020:35;;991:24:::2;::::0;1008:6;991:16:::2;:24::i;:::-;:65;;970:160;;;;-1:-1:-1::0;;;970:160:1::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1140:23;1146:8;1156:6;1140:5;:23::i;:::-;-1:-1:-1::0;1178:22:1::2;::::0;;;;;;;-1:-1:-1;;;;;1178:22:1;::::2;::::0;::::2;::::0;;;;;::::2;::::0;;::::2;-1:-1:-1::0;1220:4:1::2;::::0;551:680;-1:-1:-1;;551:680:1:o;228:219:5:-;328:7:10;;314:12:5;;328:7:10;;327:8;319:78;;;;-1:-1:-1;;;319:78:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;352:25:5::1;358:10;370:6;352:5;:25::i;:::-;392:24;::::0;;;;;;;342:35;;-1:-1:-1;397:10:5::1;::::0;392:24:::1;::::0;;;;::::1;::::0;;::::1;-1:-1:-1::0;436:4:5::1;::::0;228:219;-1:-1:-1;228:219:5:o;737:78:10:-;801:7;;;;737:78;:::o;2139:117:4:-;-1:-1:-1;;;;;2233:16:4;2196:15;2233:16;;;:9;:16;;;;;;;2139:117::o;875:128:9:-;378:6;;932:12;;-1:-1:-1;;;;;378:6:9;364:10;:20;343:114;;;;-1:-1:-1;;;343:114:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;966:30:::1;993:1;966:18;:30::i;:::-;956:40;;875:128:::0;:::o;453:442:5:-;328:7:10;;559:12:5;;328:7:10;;327:8;319:78;;;;-1:-1:-1;;;319:78:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;587:21:5::1;593:6;601;587:5;:21::i;:::-;-1:-1:-1::0;623:20:5::1;::::0;;;;;;;-1:-1:-1;;;;;623:20:5;::::1;::::0;::::1;::::0;;;;;::::1;::::0;;::::1;663:225;685:6;705:10;729:149;782:6;729:149;;;;;;;;;;;;;;;;;-1:-1:-1::0;;;;;729:19:5;::::1;;::::0;;;:11:::1;:19;::::0;;;;;;;749:10:::1;729:31:::0;;;;;;;;;:149;:35:::1;:149::i;663:225::-;653:235:::0;453:442;-1:-1:-1;;;453:442:5:o;874:103:7:-;954:16;;;;;;;;874:103::o;1587:215:6:-;-1:-1:-1;;;;;1678:12:6;;1647;1678;;;:6;:12;;;;;:17;;1702:15;;1678:12;1691:3;;1678:17;;;;;;;;;;;;;;;;:21;;;:39;1670:97;;;;-1:-1:-1;;;1670:97:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1777:18;1785:4;1791:3;1777:7;:18::i;:::-;;1587:215;;;;:::o;521:199:8:-;378:6:9;;607:12:8;;-1:-1:-1;;;;;378:6:9;364:10;:20;343:114;;;;-1:-1:-1;;;343:114:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;635:15:8;::::1;653:5;635:15:::0;;;:7:::1;:15;::::0;;;;;:23;;-1:-1:-1;;635:23:8::1;::::0;;673:16;::::1;::::0;653:5;673:16:::1;-1:-1:-1::0;709:4:8::1;::::0;521:199;-1:-1:-1;521:199:8:o;421:151:10:-;378:6:9;;480:12:10;;-1:-1:-1;;;;;378:6:9;364:10;:20;343:114;;;;-1:-1:-1;;;343:114:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;328:7:10::1;::::0;::::1;;327:8;319:78;;;;-1:-1:-1::0;;;319:78:10::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;504:7:::2;:14:::0;;-1:-1:-1;;504:14:10::2;514:4;504:14;::::0;;533:8:::2;::::0;::::2;::::0;504:7:::2;::::0;533:8:::2;-1:-1:-1::0;561:4:10::2;::::0;421:151::o;349:166:8:-;378:6:9;;409:12:8;;-1:-1:-1;;;;;378:6:9;364:10;:20;343:114;;;;-1:-1:-1;;;343:114:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;433:15:8;::::1;;::::0;;;:7:::1;:15;::::0;;;;;:22;;-1:-1:-1;;433:22:8::1;451:4;433:22;::::0;;470:14;::::1;::::0;433:15;470:14:::1;-1:-1:-1::0;504:4:8::1;::::0;349:166;-1:-1:-1;349:166:8:o;481:100:9:-;568:6;;-1:-1:-1;;;;;568:6:9;;481:100::o;2723:115:1:-;2824:7;;;;;;;;;;;;-1:-1:-1;;;2824:7:1;;;;;2723:115::o;1237:402::-;1339:10;1428:12;277:15:8;;;:7;:15;;;;;;1428:12:1;;1339:10;277:15:8;;276:16;268:57;;;;;-1:-1:-1;;;268:57:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;328:7:10::1;::::0;::::1;;327:8;319:78;;;;-1:-1:-1::0;;;319:78:10::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1391:10:1::2;561:18:6;::::0;;;:12:::2;:18;::::0;;;;;1403:6:1;;561:30:6::2;::::0;1403:6:1;561:22:6::2;:30::i;:::-;-1:-1:-1::0;;;;;542:15:6;::::2;;::::0;;;:9:::2;:15;::::0;;;;;:49:::2;;534:113;;;;-1:-1:-1::0;;;534:113:6::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1::0;;;;;1476:16:1;::::3;1455:110;;;;-1:-1:-1::0;;;1455:110:1::3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1575:33;1585:10;1597:2;1601:6;1575:9;:33::i;:::-;-1:-1:-1::0;1628:4:1::3;::::0;1237:402;-1:-1:-1;;;;;;1237:402:1:o;2797:232:6:-;2881:14;2897:11;2924:20;;:::i;:::-;-1:-1:-1;;;;;2947:14:6;;;;;;:6;:14;;;;;:21;;2962:5;;2947:21;;;;;;;;;;;;;;;2924:44;;;;;;;;;2947:21;;;;;2924:44;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2797:232:6;-1:-1:-1;;;;2797:232:6:o;1808:314::-;1859:12;;1883:209;-1:-1:-1;;;;;1906:12:6;;;;;;:6;:12;;;;;:19;1902:23;;1883:209;;;-1:-1:-1;;;;;1948:12:6;;;;;;:6;:12;;;;;:15;;1970;;1948:12;1961:1;;1948:15;;;;;;;;;;;;;;;;:19;;;:37;1945:137;;;2007:16;2015:4;2021:1;2007:7;:16::i;:::-;2004:64;;;-1:-1:-1;;2046:3:6;2004:64;1927:3;;1883:209;;;-1:-1:-1;2111:4:6;;1808:314;-1:-1:-1;;1808:314:6:o;2128:261::-;378:6:9;;2203:12:6;;-1:-1:-1;;;;;378:6:9;364:10;:20;343:114;;;;-1:-1:-1;;;343:114:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2235:9:6::1;2231:128;-1:-1:-1::0;;;;;2254:12:6;::::1;;::::0;;;:6:::1;:12;::::0;;;;:19;2250:23;::::1;2231:128;;;2296:16;2304:4;2310:1;2296:7;:16::i;:::-;2293:56;;;-1:-1:-1::0;;2331:3:6;2293:56:::1;2275:3;;2231:128;;3035:176:::0;-1:-1:-1;;;;;3144:20:6;3094:14;3144:20;;;:12;:20;;;;;;;;;3183:6;:14;;;;;;:21;3144:20;;3035:176::o;2262:177:4:-;-1:-1:-1;;;;;2405:18:4;;;2360:17;2405:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;2262:177::o;566:302:7:-;378:6:9;;640:12:7;;-1:-1:-1;;;;;378:6:9;364:10;:20;343:114;;;;-1:-1:-1;;;343:114:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;690:16:7::1;::::0;::::1;::::0;::::1;;;689:17;668:110;;;;-1:-1:-1::0;;;668:110:7::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;788:16;:23:::0;;-1:-1:-1;;788:23:7::1;;;::::0;;826:14:::1;::::0;::::1;::::0;788:23;;826:14:::1;-1:-1:-1::0;857:4:7::1;566:302:::0;:::o;726:137:8:-;-1:-1:-1;;;;;841:15:8;807:11;841:15;;;:7;:15;;;;;;;;;726:137::o;587:282:9:-;378:6;;682:12;;-1:-1:-1;;;;;378:6:9;364:10;:20;343:114;;;;-1:-1:-1;;;343:114:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;718:22:9;::::1;710:104;;;;-1:-1:-1::0;;;710:104:9::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;834:28;853:8;834:18;:28::i;:::-;824:38:::0;587:282;-1:-1:-1;;587:282:9:o;578:153:10:-;378:6:9;;636:12:10;;-1:-1:-1;;;;;378:6:9;364:10;:20;343:114;;;;-1:-1:-1;;;343:114:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;195:7:10::1;::::0;::::1;;187:73;;;;-1:-1:-1::0;;;187:73:10::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;660:7:::2;:15:::0;;-1:-1:-1;;660:15:10::2;::::0;;690:10:::2;::::0;::::2;::::0;670:5:::2;::::0;690:10:::2;-1:-1:-1::0;720:4:10::2;::::0;578:153::o;938:242:4:-;-1:-1:-1;;;;;1066:18:4;;;1038:12;1066:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;:36;;;1117:32;;;;;;;1038:12;;1066:27;:18;1117:32;;;;;;;;;;;-1:-1:-1;1169:4:4;;938:242;-1:-1:-1;;;938:242:4:o;833:176:11:-;891:7;922:5;;;945:6;;;;937:46;;;;;-1:-1:-1;;;937:46:11;;;;;;;;;;;;;;;;;;;;;;;;;;;541:391:4;636:12;682:127;715:6;682:127;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;682:15:4;;;;;;:9;:15;;;;;;;:127;:19;:127::i;:::-;-1:-1:-1;;;;;664:15:4;;;;;;;:9;:15;;;;;;:145;;;;835:13;;;;;;;:25;;853:6;835:17;:25::i;:::-;-1:-1:-1;;;;;819:13:4;;;;;;;:9;:13;;;;;;;;;:41;;;;875:26;;;;;;;819:13;;875:26;;;;;;;;;;;;;-1:-1:-1;921:4:4;;541:391;-1:-1:-1;;;541:391:4:o;1731:215:11:-;1841:7;1880:12;1872:6;;;;1864:29;;;;-1:-1:-1;;;1864:29:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1915:5:11;;;1731:215::o;671:539:6:-;755:12;797:15;791:3;:21;783:77;;;;-1:-1:-1;;;783:77:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;921:18:6;;;;;;:12;:18;;;;;;910:30;;:6;;:10;:30::i;:::-;-1:-1:-1;;;;;891:15:6;;;;;;:9;:15;;;;;;:49;;870:160;;;;-1:-1:-1;;;870:160:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1061:18:6;;;;;;:12;:18;;;;;;:30;;1084:6;1061:22;:30::i;:::-;-1:-1:-1;;;;;1040:18:6;;;;;;:12;:18;;;;;;;;:51;;;;1101:6;:12;;;;;1119:21;;;;;;;;;;;;;;;;1101:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1156:23;;;;;;;;;;;;;1040:18;;1156:23;;;;;;;;;-1:-1:-1;1199:4:6;;671:539;-1:-1:-1;;;671:539:6:o;1186:301:4:-;1270:12;1313;;:24;;1330:6;1313:16;:24::i;:::-;1298:12;:39;;;-1:-1:-1;;;;;1370:20:4;;;;:9;:20;;;;;;:32;;1395:6;1370:24;:32::i;:::-;-1:-1:-1;;;;;1347:20:4;;;;;;:9;:20;;;;;;;;:55;;;;1417:39;;;;;;;1347:20;;;;1417:39;;;;;;;;;;-1:-1:-1;1476:4:4;;1186:301;-1:-1:-1;;1186:301:4:o;1493:476::-;1574:12;1622:124;1657:6;1622:124;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1622:17:4;;;;;;:9;:17;;;;;;;:124;:21;:124::i;:::-;1602:9;:17;1612:6;-1:-1:-1;;;;;1602:17:4;-1:-1:-1;;;;;1602:17:4;;;;;;;;;;;;:144;;;;1771:116;1801:6;1771:116;;;;;;;;;;;;;;;;;:12;;;:116;:16;:116::i;:::-;1756:12;:131;;;1902:36;;;;;;;;-1:-1:-1;;;;;1902:36:4;;;;;;;;;;;;;-1:-1:-1;1958:4:4;;1493:476;-1:-1:-1;;1493:476:4:o;1009:189:9:-;1123:6;;1102:38;;1073:12;;-1:-1:-1;;;;;1102:38:9;;;;1123:6;;;1102:38;;1073:12;;1102:38;-1:-1:-1;1150:6:9;:17;;-1:-1:-1;;;;;;1150:17:9;-1:-1:-1;;;;;1150:17:9;;;;;;;;;;-1:-1:-1;;1009:189:9:o;1216:365:6:-;-1:-1:-1;;;;;1328:12:6;;1280;1328;;;:6;:12;;;;;:19;;1280:12;;1328;1341:5;;1328:19;;;;;;;;;;;;;;;;;;;;;1401:11;;-1:-1:-1;;;;;1378:18:6;;;;:12;:18;;;;;;;;1328:19;;-1:-1:-1;1378:35:6;;:18;:22;:35::i;:::-;-1:-1:-1;;;;;1357:18:6;;;;;;:12;:18;;;;;;;;;:56;;;;1441:11;;1428:25;;;;;;;1357:18;;1428:25;;;;;;;;;-1:-1:-1;;;;;1485:12:6;;;;;;:6;:12;;;;;1498:19;;-1:-1:-1;;1498:23:6;;;1485:37;;;;;;;;;;;;;;;;1463:6;:12;1470:4;-1:-1:-1;;;;;1463:12:6;-1:-1:-1;;;;;1463:12:6;;;;;;;;;;;;1476:5;1463:19;;;;;;;;;;;;;;;;:59;;:19;;;;;:59;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1532:12:6;;;;:6;:12;;;;;;:18;;;;;;;;;;;;;;;-1:-1:-1;;1532:18:6;;;;;;;;;;;;;;;;;;;;;1216:365;-1:-1:-1;;;;1216:365:6:o;1273:134:11:-;1331:7;1357:43;1361:1;1364;1357:43;;;;;;;;;;;;;;;;;:3;:43::i;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.7.1;\n\nimport \"./erc20/ERC20Lockable.sol\";\nimport \"./erc20/ERC20Burnable.sol\";\nimport \"./erc20/ERC20Mintable.sol\";\nimport \"./library/Pausable.sol\";\nimport \"./library/Freezable.sol\";\n\ncontract Talken is\n    ERC20Lockable,\n    ERC20Burnable,\n    ERC20Mintable,\n    Freezable\n{\n    using SafeMath for uint256;\n    string constant private _name = \"Talken\";\n    string constant private _symbol = \"TALK\";\n    uint8 constant private _decimals = 18;\n    uint256 constant private _initial_supply = 0;\n\n    constructor() Ownable() {\n    }\n\n    function mint(address receiver, uint256 amount)\n        override\n        external\n        onlyOwner\n        whenNotPaused\n        returns (bool success)\n    {\n        require(\n            receiver != address(0),\n            \"ERC20Mintable/mint : Should not mint to zero address\"\n        );\n        require(\n            !_mintingFinished,\n            \"ERC20Mintable/mint : Cannot mint after finished\"\n        );\n        require(\n            _totalSupply.add(amount) <= (1_000_000_000 * (10 ** uint256(18))),\n            \"ERC20Mintable/mint  : Cannot mint more than cap\" \n        );\n        _mint(receiver, amount);\n        emit Mint(receiver, amount);\n        success = true;\n    }\n\n    function transfer(address to, uint256 amount)\n        override\n        external\n        whenNotFrozen(msg.sender)\n        whenNotPaused\n        checkLock(msg.sender, amount)\n        returns (bool success) {\n           require(\n            to != address(0),\n            \"TALK/transfer : Should not send to zero address\"\n        );\n        _transfer(msg.sender, to, amount);\n        success = true;\n    }\n\n    function transferFrom(address from, address to, uint256 amount)\n        override\n        external\n        whenNotFrozen(from)\n        whenNotPaused\n        checkLock(from, amount)\n        returns (bool success)\n    {\n        require(\n            to != address(0),\n            \"TALK/transferFrom : Should not send to zero address\"\n        );\n        _transfer(from, to, amount);\n        _approve(\n            from,\n            msg.sender,\n            _allowances[from][msg.sender].sub(\n                amount,\n                \"TALK/transferFrom : Cannot send more than allowance\"\n            )\n        );\n        success = true;\n    }\n\n    function approve(address spender, uint256 amount)\n        override\n        external\n        returns (bool success)\n    {\n        require(\n            spender != address(0),\n            \"SAM/approve : Should not approve zero address\"\n        );\n        _approve(msg.sender, spender, amount);\n        success = true;\n    }\n\n    function name() override external pure returns (string memory tokenName) {\n        tokenName = _name;\n    }\n\n    function symbol() override external pure returns (string memory tokenSymbol) {\n        tokenSymbol = _symbol;\n    }\n\n    function decimals() override external pure returns (uint8 tokenDecimals) {\n        tokenDecimals = _decimals;\n    }\n}\n",
  "sourcePath": "/Users/peter/devel/IDO/TALKEN/contracts/Talken.sol",
  "ast": {
    "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/Talken.sol",
    "exportedSymbols": {
      "Talken": [
        323
      ]
    },
    "id": 324,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "0.7",
          ".1"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:1"
      },
      {
        "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/erc20/ERC20Lockable.sol",
        "file": "./erc20/ERC20Lockable.sol",
        "id": 59,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 1091,
        "src": "24:35:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/erc20/ERC20Burnable.sol",
        "file": "./erc20/ERC20Burnable.sol",
        "id": 60,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 694,
        "src": "60:35:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/erc20/ERC20Mintable.sol",
        "file": "./erc20/ERC20Mintable.sol",
        "id": 61,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 1154,
        "src": "96:35:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/library/Pausable.sol",
        "file": "./library/Pausable.sol",
        "id": 62,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 1442,
        "src": "132:32:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/library/Freezable.sol",
        "file": "./library/Freezable.sol",
        "id": 63,
        "nodeType": "ImportDirective",
        "scope": 324,
        "sourceUnit": 1246,
        "src": "165:33:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 64,
              "name": "ERC20Lockable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1090,
              "src": "223:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Lockable_$1090",
                "typeString": "contract ERC20Lockable"
              }
            },
            "id": 65,
            "nodeType": "InheritanceSpecifier",
            "src": "223:13:1"
          },
          {
            "baseName": {
              "id": 66,
              "name": "ERC20Burnable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 693,
              "src": "242:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Burnable_$693",
                "typeString": "contract ERC20Burnable"
              }
            },
            "id": 67,
            "nodeType": "InheritanceSpecifier",
            "src": "242:13:1"
          },
          {
            "baseName": {
              "id": 68,
              "name": "ERC20Mintable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1153,
              "src": "261:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Mintable_$1153",
                "typeString": "contract ERC20Mintable"
              }
            },
            "id": 69,
            "nodeType": "InheritanceSpecifier",
            "src": "261:13:1"
          },
          {
            "baseName": {
              "id": 70,
              "name": "Freezable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1245,
              "src": "280:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Freezable_$1245",
                "typeString": "contract Freezable"
              }
            },
            "id": 71,
            "nodeType": "InheritanceSpecifier",
            "src": "280:9:1"
          }
        ],
        "contractDependencies": [
          607,
          693,
          1090,
          1153,
          1245,
          1360,
          1441
        ],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 323,
        "linearizedBaseContracts": [
          323,
          1245,
          1153,
          693,
          1441,
          1090,
          1360,
          607
        ],
        "name": "Talken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 74,
            "libraryName": {
              "id": 72,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1637,
              "src": "302:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$1637",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "296:27:1",
            "typeName": {
              "id": 73,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "315:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": true,
            "id": 77,
            "mutability": "constant",
            "name": "_name",
            "nodeType": "VariableDeclaration",
            "scope": 323,
            "src": "328:40:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 75,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "328:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "54616c6b656e",
              "id": 76,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "360:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_7be5b3492fd6c83643d9ff85cbfa57d9f59d51b237567a34ebb9d546620ab87b",
                "typeString": "literal_string \"Talken\""
              },
              "value": "Talken"
            },
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 80,
            "mutability": "constant",
            "name": "_symbol",
            "nodeType": "VariableDeclaration",
            "scope": 323,
            "src": "374:40:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory_ptr",
              "typeString": "string"
            },
            "typeName": {
              "id": 78,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "374:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "hexValue": "54414c4b",
              "id": 79,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "408:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_788424101d2f5cf1822a1f1cb7c9f281b4128fa1096ba867ad115f8c62e304fc",
                "typeString": "literal_string \"TALK\""
              },
              "value": "TALK"
            },
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 83,
            "mutability": "constant",
            "name": "_decimals",
            "nodeType": "VariableDeclaration",
            "scope": 323,
            "src": "420:37:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 81,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "420:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "hexValue": "3138",
              "id": 82,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "455:2:1",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18_by_1",
                "typeString": "int_const 18"
              },
              "value": "18"
            },
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 86,
            "mutability": "constant",
            "name": "_initial_supply",
            "nodeType": "VariableDeclaration",
            "scope": 323,
            "src": "463:44:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 84,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "463:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 85,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "506:1:1",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 91,
              "nodeType": "Block",
              "src": "538:7:1",
              "statements": []
            },
            "id": 92,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [],
                "id": 89,
                "modifierName": {
                  "id": 88,
                  "name": "Ownable",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1360,
                  "src": "528:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_Ownable_$1360_$",
                    "typeString": "type(contract Ownable)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "528:9:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 87,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "525:2:1"
            },
            "returnParameters": {
              "id": 90,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:0:1"
            },
            "scope": 323,
            "src": "514:31:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1118
            ],
            "body": {
              "id": 155,
              "nodeType": "Block",
              "src": "708:523:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 107,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 94,
                          "src": "739:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 110,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "759:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 109,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "751:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 108,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "751:7:1",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 111,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "751:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "739:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "45524332304d696e7461626c652f6d696e74203a2053686f756c64206e6f74206d696e7420746f207a65726f2061646472657373",
                        "id": 113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "775:54:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_37d2361fc89e3004a213bf19455371c569f3056b81def8c4b5e29b9d36e4de16",
                          "typeString": "literal_string \"ERC20Mintable/mint : Should not mint to zero address\""
                        },
                        "value": "ERC20Mintable/mint : Should not mint to zero address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_37d2361fc89e3004a213bf19455371c569f3056b81def8c4b5e29b9d36e4de16",
                          "typeString": "literal_string \"ERC20Mintable/mint : Should not mint to zero address\""
                        }
                      ],
                      "id": 106,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "718:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "718:121:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 115,
                  "nodeType": "ExpressionStatement",
                  "src": "718:121:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 118,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "870:17:1",
                        "subExpression": {
                          "id": 117,
                          "name": "_mintingFinished",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1108,
                          "src": "871:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "45524332304d696e7461626c652f6d696e74203a2043616e6e6f74206d696e742061667465722066696e6973686564",
                        "id": 119,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "901:49:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_55672fdca809e334e657e684080f2a336e589f7a247b3942fa607c665de62d90",
                          "typeString": "literal_string \"ERC20Mintable/mint : Cannot mint after finished\""
                        },
                        "value": "ERC20Mintable/mint : Cannot mint after finished"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_55672fdca809e334e657e684080f2a336e589f7a247b3942fa607c665de62d90",
                          "typeString": "literal_string \"ERC20Mintable/mint : Cannot mint after finished\""
                        }
                      ],
                      "id": 116,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "849:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 120,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "849:111:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 121,
                  "nodeType": "ExpressionStatement",
                  "src": "849:111:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 137,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 125,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 96,
                              "src": "1008:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 123,
                              "name": "_totalSupply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 335,
                              "src": "991:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 124,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1470,
                            "src": "991:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 126,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "991:24:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 135,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "315f3030305f3030305f303030",
                                "id": 127,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1020:13:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1000000000_by_1",
                                  "typeString": "int_const 1000000000"
                                },
                                "value": "1_000_000_000"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 133,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "3130",
                                      "id": 128,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1037:2:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_10_by_1",
                                        "typeString": "int_const 10"
                                      },
                                      "value": "10"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "**",
                                    "rightExpression": {
                                      "arguments": [
                                        {
                                          "hexValue": "3138",
                                          "id": 131,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "1051:2:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_rational_18_by_1",
                                            "typeString": "int_const 18"
                                          },
                                          "value": "18"
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_rational_18_by_1",
                                            "typeString": "int_const 18"
                                          }
                                        ],
                                        "id": 130,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "1043:7:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint256_$",
                                          "typeString": "type(uint256)"
                                        },
                                        "typeName": {
                                          "id": 129,
                                          "name": "uint256",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "1043:7:1",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 132,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "1043:11:1",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "1037:17:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 134,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "1036:19:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1020:35:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 136,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1019:37:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "991:65:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "45524332304d696e7461626c652f6d696e7420203a2043616e6e6f74206d696e74206d6f7265207468616e20636170",
                        "id": 138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1070:49:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e5f9696183c1495786d0ecbd4aaf9baea811eb55a24762e041c08404228b4712",
                          "typeString": "literal_string \"ERC20Mintable/mint  : Cannot mint more than cap\""
                        },
                        "value": "ERC20Mintable/mint  : Cannot mint more than cap"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e5f9696183c1495786d0ecbd4aaf9baea811eb55a24762e041c08404228b4712",
                          "typeString": "literal_string \"ERC20Mintable/mint  : Cannot mint more than cap\""
                        }
                      ],
                      "id": 122,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "970:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "970:160:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 140,
                  "nodeType": "ExpressionStatement",
                  "src": "970:160:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 142,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 94,
                        "src": "1146:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 143,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 96,
                        "src": "1156:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 141,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 477,
                      "src": "1140:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1140:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 145,
                  "nodeType": "ExpressionStatement",
                  "src": "1140:23:1"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 147,
                        "name": "receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 94,
                        "src": "1183:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 148,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 96,
                        "src": "1193:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 146,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1104,
                      "src": "1178:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1178:22:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 150,
                  "nodeType": "EmitStatement",
                  "src": "1173:27:1"
                },
                {
                  "expression": {
                    "id": 153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 151,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 104,
                      "src": "1210:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 152,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1220:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1210:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 154,
                  "nodeType": "ExpressionStatement",
                  "src": "1210:14:1"
                }
              ]
            },
            "functionSelector": "40c10f19",
            "id": 156,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 100,
                "modifierName": {
                  "id": 99,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1285,
                  "src": "641:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "641:9:1"
              },
              {
                "id": 102,
                "modifierName": {
                  "id": 101,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1390,
                  "src": "659:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "659:13:1"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 98,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "607:8:1"
            },
            "parameters": {
              "id": 97,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 94,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "565:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "565:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 96,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "583:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 95,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "583:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "564:34:1"
            },
            "returnParameters": {
              "id": 105,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 104,
                  "mutability": "mutable",
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 156,
                  "src": "690:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 103,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "690:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "689:14:1"
            },
            "scope": 323,
            "src": "551:680:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              586
            ],
            "body": {
              "id": 198,
              "nodeType": "Block",
              "src": "1442:197:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 183,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 178,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 158,
                          "src": "1476:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 181,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1490:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 180,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1482:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 179,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1482:7:1",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1482:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1476:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54414c4b2f7472616e73666572203a2053686f756c64206e6f742073656e6420746f207a65726f2061646472657373",
                        "id": 184,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1506:49:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_90e453e3715aa0252216100960d5e36e7354f408114d4c119142be726fbee4a5",
                          "typeString": "literal_string \"TALK/transfer : Should not send to zero address\""
                        },
                        "value": "TALK/transfer : Should not send to zero address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_90e453e3715aa0252216100960d5e36e7354f408114d4c119142be726fbee4a5",
                          "typeString": "literal_string \"TALK/transfer : Should not send to zero address\""
                        }
                      ],
                      "id": 177,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1455:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 185,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1455:110:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 186,
                  "nodeType": "ExpressionStatement",
                  "src": "1455:110:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 188,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1585:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 189,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1585:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "id": 190,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 158,
                        "src": "1597:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 191,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 160,
                        "src": "1601:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 187,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 406,
                      "src": "1575:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1575:33:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 193,
                  "nodeType": "ExpressionStatement",
                  "src": "1575:33:1"
                },
                {
                  "expression": {
                    "id": 196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 194,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 175,
                      "src": "1618:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1628:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1618:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 197,
                  "nodeType": "ExpressionStatement",
                  "src": "1618:14:1"
                }
              ]
            },
            "functionSelector": "a9059cbb",
            "id": 199,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 164,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1339:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "1339:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 166,
                "modifierName": {
                  "id": 163,
                  "name": "whenNotFrozen",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1184,
                  "src": "1325:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1325:25:1"
              },
              {
                "id": 168,
                "modifierName": {
                  "id": 167,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1390,
                  "src": "1359:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1359:13:1"
              },
              {
                "arguments": [
                  {
                    "expression": {
                      "id": 170,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1391:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 171,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "1391:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  {
                    "id": 172,
                    "name": "amount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 160,
                    "src": "1403:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 173,
                "modifierName": {
                  "id": 169,
                  "name": "checkLock",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 754,
                  "src": "1381:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$_t_uint256_$",
                    "typeString": "modifier (address,uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1381:29:1"
              }
            ],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 162,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1291:8:1"
            },
            "parameters": {
              "id": 161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 158,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 199,
                  "src": "1255:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 157,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1255:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 160,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 199,
                  "src": "1267:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 159,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1267:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1254:28:1"
            },
            "returnParameters": {
              "id": 176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 175,
                  "mutability": "mutable",
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 199,
                  "src": "1428:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 174,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1428:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1427:14:1"
            },
            "scope": 323,
            "src": "1237:402:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              597
            ],
            "body": {
              "id": 256,
              "nodeType": "Block",
              "src": "1860:418:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 226,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 221,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 203,
                          "src": "1891:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 224,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1905:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 223,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1897:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 222,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1897:7:1",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1897:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1891:16:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "54414c4b2f7472616e7366657246726f6d203a2053686f756c64206e6f742073656e6420746f207a65726f2061646472657373",
                        "id": 227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1921:53:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_01f1a719573c7fafec1337eeab360a9ce9fc9ca073c6377af97ffe77f0c4aefc",
                          "typeString": "literal_string \"TALK/transferFrom : Should not send to zero address\""
                        },
                        "value": "TALK/transferFrom : Should not send to zero address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_01f1a719573c7fafec1337eeab360a9ce9fc9ca073c6377af97ffe77f0c4aefc",
                          "typeString": "literal_string \"TALK/transferFrom : Should not send to zero address\""
                        }
                      ],
                      "id": 220,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1870:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1870:114:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 229,
                  "nodeType": "ExpressionStatement",
                  "src": "1870:114:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 231,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 201,
                        "src": "2004:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 232,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 203,
                        "src": "2010:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 233,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 205,
                        "src": "2014:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 230,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 406,
                      "src": "1994:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 234,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1994:27:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 235,
                  "nodeType": "ExpressionStatement",
                  "src": "1994:27:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 237,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 201,
                        "src": "2053:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 238,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2071:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2071:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 247,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 205,
                            "src": "2146:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "54414c4b2f7472616e7366657246726f6d203a2043616e6e6f742073656e64206d6f7265207468616e20616c6c6f77616e6365",
                            "id": 248,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2170:53:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_a645e40bceebddb1cb38c2bcfabd7af9247754c2f3ebbca73dc90a6607cdd426",
                              "typeString": "literal_string \"TALK/transferFrom : Cannot send more than allowance\""
                            },
                            "value": "TALK/transferFrom : Cannot send more than allowance"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_a645e40bceebddb1cb38c2bcfabd7af9247754c2f3ebbca73dc90a6607cdd426",
                              "typeString": "literal_string \"TALK/transferFrom : Cannot send more than allowance\""
                            }
                          ],
                          "expression": {
                            "baseExpression": {
                              "baseExpression": {
                                "id": 240,
                                "name": "_allowances",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 345,
                                "src": "2095:11:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 242,
                              "indexExpression": {
                                "id": 241,
                                "name": "from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 201,
                                "src": "2107:4:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2095:17:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 245,
                            "indexExpression": {
                              "expression": {
                                "id": 243,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "2113:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 244,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2113:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2095:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 246,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sub",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1515,
                          "src": "2095:33:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$bound_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256,string memory) pure returns (uint256)"
                          }
                        },
                        "id": 249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2095:142:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 236,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 436,
                      "src": "2031:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 250,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2031:216:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 251,
                  "nodeType": "ExpressionStatement",
                  "src": "2031:216:1"
                },
                {
                  "expression": {
                    "id": 254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 252,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 218,
                      "src": "2257:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 253,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2267:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2257:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 255,
                  "nodeType": "ExpressionStatement",
                  "src": "2257:14:1"
                }
              ]
            },
            "functionSelector": "23b872dd",
            "id": 257,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 209,
                    "name": "from",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 201,
                    "src": "1765:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 210,
                "modifierName": {
                  "id": 208,
                  "name": "whenNotFrozen",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1184,
                  "src": "1751:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1751:19:1"
              },
              {
                "id": 212,
                "modifierName": {
                  "id": 211,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1390,
                  "src": "1779:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1779:13:1"
              },
              {
                "arguments": [
                  {
                    "id": 214,
                    "name": "from",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 201,
                    "src": "1811:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "id": 215,
                    "name": "amount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 205,
                    "src": "1817:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 216,
                "modifierName": {
                  "id": 213,
                  "name": "checkLock",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 754,
                  "src": "1801:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$_t_uint256_$",
                    "typeString": "modifier (address,uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1801:23:1"
              }
            ],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 207,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1717:8:1"
            },
            "parameters": {
              "id": 206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 201,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 257,
                  "src": "1667:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 200,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1667:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 203,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 257,
                  "src": "1681:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 202,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1681:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 205,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 257,
                  "src": "1693:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 204,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1693:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1666:42:1"
            },
            "returnParameters": {
              "id": 219,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 218,
                  "mutability": "mutable",
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 257,
                  "src": "1842:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 217,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1842:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1841:14:1"
            },
            "scope": 323,
            "src": "1645:633:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              606
            ],
            "body": {
              "id": 288,
              "nodeType": "Block",
              "src": "2403:201:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 273,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 268,
                          "name": "spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 259,
                          "src": "2434:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 271,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2453:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 270,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2445:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 269,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2445:7:1",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 272,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2445:10:1",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "2434:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "53414d2f617070726f7665203a2053686f756c64206e6f7420617070726f7665207a65726f2061646472657373",
                        "id": 274,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2469:47:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c2d65f2981c913277a9672666bea0e2c08674583aa533950f9629773e86707b8",
                          "typeString": "literal_string \"SAM/approve : Should not approve zero address\""
                        },
                        "value": "SAM/approve : Should not approve zero address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c2d65f2981c913277a9672666bea0e2c08674583aa533950f9629773e86707b8",
                          "typeString": "literal_string \"SAM/approve : Should not approve zero address\""
                        }
                      ],
                      "id": 267,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2413:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2413:113:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 276,
                  "nodeType": "ExpressionStatement",
                  "src": "2413:113:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 278,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2545:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2545:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "id": 280,
                        "name": "spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 259,
                        "src": "2557:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 281,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 261,
                        "src": "2566:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 277,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 436,
                      "src": "2536:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) returns (bool)"
                      }
                    },
                    "id": 282,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2536:37:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 283,
                  "nodeType": "ExpressionStatement",
                  "src": "2536:37:1"
                },
                {
                  "expression": {
                    "id": 286,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 284,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 265,
                      "src": "2583:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 285,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2593:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2583:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 287,
                  "nodeType": "ExpressionStatement",
                  "src": "2583:14:1"
                }
              ]
            },
            "functionSelector": "095ea7b3",
            "id": 289,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 263,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2342:8:1"
            },
            "parameters": {
              "id": 262,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 259,
                  "mutability": "mutable",
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 289,
                  "src": "2301:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 258,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2301:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 261,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 289,
                  "src": "2318:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 260,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2318:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2300:33:1"
            },
            "returnParameters": {
              "id": 266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 265,
                  "mutability": "mutable",
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 289,
                  "src": "2385:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 264,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2385:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2384:14:1"
            },
            "scope": 323,
            "src": "2284:320:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              567
            ],
            "body": {
              "id": 299,
              "nodeType": "Block",
              "src": "2683:34:1",
              "statements": [
                {
                  "expression": {
                    "id": 297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 295,
                      "name": "tokenName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 293,
                      "src": "2693:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 296,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 77,
                      "src": "2705:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2693:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 298,
                  "nodeType": "ExpressionStatement",
                  "src": "2693:17:1"
                }
              ]
            },
            "functionSelector": "06fdde03",
            "id": 300,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 291,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2626:8:1"
            },
            "parameters": {
              "id": 290,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2623:2:1"
            },
            "returnParameters": {
              "id": 294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 293,
                  "mutability": "mutable",
                  "name": "tokenName",
                  "nodeType": "VariableDeclaration",
                  "scope": 300,
                  "src": "2658:23:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 292,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2658:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2657:25:1"
            },
            "scope": 323,
            "src": "2610:107:1",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              572
            ],
            "body": {
              "id": 310,
              "nodeType": "Block",
              "src": "2800:38:1",
              "statements": [
                {
                  "expression": {
                    "id": 308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 306,
                      "name": "tokenSymbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 304,
                      "src": "2810:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 307,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 80,
                      "src": "2824:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2810:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "id": 309,
                  "nodeType": "ExpressionStatement",
                  "src": "2810:21:1"
                }
              ]
            },
            "functionSelector": "95d89b41",
            "id": 311,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 302,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2741:8:1"
            },
            "parameters": {
              "id": 301,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2738:2:1"
            },
            "returnParameters": {
              "id": 305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 304,
                  "mutability": "mutable",
                  "name": "tokenSymbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 311,
                  "src": "2773:25:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 303,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2773:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2772:27:1"
            },
            "scope": 323,
            "src": "2723:115:1",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "baseFunctions": [
              577
            ],
            "body": {
              "id": 321,
              "nodeType": "Block",
              "src": "2917:42:1",
              "statements": [
                {
                  "expression": {
                    "id": 319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 317,
                      "name": "tokenDecimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 315,
                      "src": "2927:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 318,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 83,
                      "src": "2943:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2927:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 320,
                  "nodeType": "ExpressionStatement",
                  "src": "2927:25:1"
                }
              ]
            },
            "functionSelector": "313ce567",
            "id": 322,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decimals",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 313,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2864:8:1"
            },
            "parameters": {
              "id": 312,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2861:2:1"
            },
            "returnParameters": {
              "id": 316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 315,
                  "mutability": "mutable",
                  "name": "tokenDecimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 322,
                  "src": "2896:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 314,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2896:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2895:21:1"
            },
            "scope": 323,
            "src": "2844:115:1",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 324,
        "src": "200:2761:1"
      }
    ],
    "src": "0:2962:1"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/Talken.sol",
      "exportedSymbols": {
        "Talken": [
          323
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.7",
            ".1"
          ]
        },
        "id": 58,
        "name": "PragmaDirective",
        "src": "0:22:1"
      },
      {
        "attributes": {
          "SourceUnit": 1091,
          "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/erc20/ERC20Lockable.sol",
          "file": "./erc20/ERC20Lockable.sol",
          "scope": 324,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 59,
        "name": "ImportDirective",
        "src": "24:35:1"
      },
      {
        "attributes": {
          "SourceUnit": 694,
          "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/erc20/ERC20Burnable.sol",
          "file": "./erc20/ERC20Burnable.sol",
          "scope": 324,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 60,
        "name": "ImportDirective",
        "src": "60:35:1"
      },
      {
        "attributes": {
          "SourceUnit": 1154,
          "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/erc20/ERC20Mintable.sol",
          "file": "./erc20/ERC20Mintable.sol",
          "scope": 324,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 61,
        "name": "ImportDirective",
        "src": "96:35:1"
      },
      {
        "attributes": {
          "SourceUnit": 1442,
          "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/library/Pausable.sol",
          "file": "./library/Pausable.sol",
          "scope": 324,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 62,
        "name": "ImportDirective",
        "src": "132:32:1"
      },
      {
        "attributes": {
          "SourceUnit": 1246,
          "absolutePath": "/Users/peter/devel/IDO/TALKEN/contracts/library/Freezable.sol",
          "file": "./library/Freezable.sol",
          "scope": 324,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 63,
        "name": "ImportDirective",
        "src": "165:33:1"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            607,
            693,
            1090,
            1153,
            1245,
            1360,
            1441
          ],
          "contractKind": "contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            323,
            1245,
            1153,
            693,
            1441,
            1090,
            1360,
            607
          ],
          "name": "Talken",
          "scope": 324
        },
        "children": [
          {
            "attributes": {},
            "children": [
              {
                "attributes": {
                  "name": "ERC20Lockable",
                  "referencedDeclaration": 1090,
                  "type": "contract ERC20Lockable"
                },
                "id": 64,
                "name": "UserDefinedTypeName",
                "src": "223:13:1"
              }
            ],
            "id": 65,
            "name": "InheritanceSpecifier",
            "src": "223:13:1"
          },
          {
            "attributes": {},
            "children": [
              {
                "attributes": {
                  "name": "ERC20Burnable",
                  "referencedDeclaration": 693,
                  "type": "contract ERC20Burnable"
                },
                "id": 66,
                "name": "UserDefinedTypeName",
                "src": "242:13:1"
              }
            ],
            "id": 67,
            "name": "InheritanceSpecifier",
            "src": "242:13:1"
          },
          {
            "attributes": {},
            "children": [
              {
                "attributes": {
                  "name": "ERC20Mintable",
                  "referencedDeclaration": 1153,
                  "type": "contract ERC20Mintable"
                },
                "id": 68,
                "name": "UserDefinedTypeName",
                "src": "261:13:1"
              }
            ],
            "id": 69,
            "name": "InheritanceSpecifier",
            "src": "261:13:1"
          },
          {
            "attributes": {},
            "children": [
              {
                "attributes": {
                  "name": "Freezable",
                  "referencedDeclaration": 1245,
                  "type": "contract Freezable"
                },
                "id": 70,
                "name": "UserDefinedTypeName",
                "src": "280:9:1"
              }
            ],
            "id": 71,
            "name": "InheritanceSpecifier",
            "src": "280:9:1"
          },
          {
            "children": [
              {
                "attributes": {
                  "name": "SafeMath",
                  "referencedDeclaration": 1637,
                  "type": "library SafeMath"
                },
                "id": 72,
                "name": "UserDefinedTypeName",
                "src": "302:8:1"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 73,
                "name": "ElementaryTypeName",
                "src": "315:7:1"
              }
            ],
            "id": 74,
            "name": "UsingForDirective",
            "src": "296:27:1"
          },
          {
            "attributes": {
              "constant": true,
              "mutability": "constant",
              "name": "_name",
              "scope": 323,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 75,
                "name": "ElementaryTypeName",
                "src": "328:6:1"
              },
              {
                "attributes": {
                  "hexvalue": "54616c6b656e",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "token": "string",
                  "type": "literal_string \"Talken\"",
                  "value": "Talken"
                },
                "id": 76,
                "name": "Literal",
                "src": "360:8:1"
              }
            ],
            "id": 77,
            "name": "VariableDeclaration",
            "src": "328:40:1"
          },
          {
            "attributes": {
              "constant": true,
              "mutability": "constant",
              "name": "_symbol",
              "scope": 323,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 78,
                "name": "ElementaryTypeName",
                "src": "374:6:1"
              },
              {
                "attributes": {
                  "hexvalue": "54414c4b",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "token": "string",
                  "type": "literal_string \"TALK\"",
                  "value": "TALK"
                },
                "id": 79,
                "name": "Literal",
                "src": "408:6:1"
              }
            ],
            "id": 80,
            "name": "VariableDeclaration",
            "src": "374:40:1"
          },
          {
            "attributes": {
              "constant": true,
              "mutability": "constant",
              "name": "_decimals",
              "scope": 323,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 81,
                "name": "ElementaryTypeName",
                "src": "420:5:1"
              },
              {
                "attributes": {
                  "hexvalue": "3138",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "token": "number",
                  "type": "int_const 18",
                  "value": "18"
                },
                "id": 82,
                "name": "Literal",
                "src": "455:2:1"
              }
            ],
            "id": 83,
            "name": "VariableDeclaration",
            "src": "420:37:1"
          },
          {
            "attributes": {
              "constant": true,
              "mutability": "constant",
              "name": "_initial_supply",
              "scope": 323,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 84,
                "name": "ElementaryTypeName",
                "src": "463:7:1"
              },
              {
                "attributes": {
                  "hexvalue": "30",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "token": "number",
                  "type": "int_const 0",
                  "value": "0"
                },
                "id": 85,
                "name": "Literal",
                "src": "506:1:1"
              }
            ],
            "id": 86,
            "name": "VariableDeclaration",
            "src": "463:44:1"
          },
          {
            "attributes": {
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "scope": 323,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 87,
                "name": "ParameterList",
                "src": "525:2:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 90,
                "name": "ParameterList",
                "src": "538:0:1"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1360,
                      "type": "type(contract Ownable)",
                      "value": "Ownable"
                    },
                    "id": 88,
                    "name": "Identifier",
                    "src": "528:7:1"
                  }
                ],
                "id": 89,
                "name": "ModifierInvocation",
                "src": "528:9:1"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 91,
                "name": "Block",
                "src": "538:7:1"
              }
            ],
            "id": 92,
            "name": "FunctionDefinition",
            "src": "514:31:1"
          },
          {
            "attributes": {
              "baseFunctions": [
                1118
              ],
              "functionSelector": "40c10f19",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "mint",
              "scope": 323,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "overrides": [
                    null
                  ]
                },
                "id": 98,
                "name": "OverrideSpecifier",
                "src": "607:8:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "receiver",
                      "scope": 156,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 93,
                        "name": "ElementaryTypeName",
                        "src": "565:7:1"
                      }
                    ],
                    "id": 94,
                    "name": "VariableDeclaration",
                    "src": "565:16:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "scope": 156,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 95,
                        "name": "ElementaryTypeName",
                        "src": "583:7:1"
                      }
                    ],
                    "id": 96,
                    "name": "VariableDeclaration",
                    "src": "583:14:1"
                  }
                ],
                "id": 97,
                "name": "ParameterList",
                "src": "564:34:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "success",
                      "scope": 156,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 103,
                        "name": "ElementaryTypeName",
                        "src": "690:4:1"
                      }
                    ],
                    "id": 104,
                    "name": "VariableDeclaration",
                    "src": "690:12:1"
                  }
                ],
                "id": 105,
                "name": "ParameterList",
                "src": "689:14:1"
              },
              {
                "attributes": {},
                "children": [
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1285,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 99,
                    "name": "Identifier",
                    "src": "641:9:1"
                  }
                ],
                "id": 100,
                "name": "ModifierInvocation",
                "src": "641:9:1"
              },
              {
                "attributes": {},
                "children": [
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1390,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 101,
                    "name": "Identifier",
                    "src": "659:13:1"
                  }
                ],
                "id": 102,
                "name": "ModifierInvocation",
                "src": "659:13:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_37d2361fc89e3004a213bf19455371c569f3056b81def8c4b5e29b9d36e4de16",
                                  "typeString": "literal_string \"ERC20Mintable/mint : Should not mint to zero address\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 106,
                            "name": "Identifier",
                            "src": "718:7:1"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 94,
                                  "type": "address",
                                  "value": "receiver"
                                },
                                "id": 107,
                                "name": "Identifier",
                                "src": "739:8:1"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "address payable",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "address"
                                        },
                                        "id": 108,
                                        "name": "ElementaryTypeName",
                                        "src": "751:7:1"
                                      }
                                    ],
                                    "id": 109,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "751:7:1"
                                  },
                                  {
                                    "attributes": {
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 110,
                                    "name": "Literal",
                                    "src": "759:1:1"
                                  }
                                ],
                                "id": 111,
                                "name": "FunctionCall",
                                "src": "751:10:1"
                              }
                            ],
                            "id": 112,
                            "name": "BinaryOperation",
                            "src": "739:22:1"
                          },
                          {
                            "attributes": {
                              "hexvalue": "45524332304d696e7461626c652f6d696e74203a2053686f756c64206e6f74206d696e7420746f207a65726f2061646472657373",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"ERC20Mintable/mint : Should not mint to zero address\"",
                              "value": "ERC20Mintable/mint : Should not mint to zero address"
                            },
                            "id": 113,
                            "name": "Literal",
                            "src": "775:54:1"
                          }
                        ],
                        "id": 114,
                        "name": "FunctionCall",
                        "src": "718:121:1"
                      }
                    ],
                    "id": 115,
                    "name": "ExpressionStatement",
                    "src": "718:121:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_55672fdca809e334e657e684080f2a336e589f7a247b3942fa607c665de62d90",
                                  "typeString": "literal_string \"ERC20Mintable/mint : Cannot mint after finished\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 116,
                            "name": "Identifier",
                            "src": "849:7:1"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1108,
                                  "type": "bool",
                                  "value": "_mintingFinished"
                                },
                                "id": 117,
                                "name": "Identifier",
                                "src": "871:16:1"
                              }
                            ],
                            "id": 118,
                            "name": "UnaryOperation",
                            "src": "870:17:1"
                          },
                          {
                            "attributes": {
                              "hexvalue": "45524332304d696e7461626c652f6d696e74203a2043616e6e6f74206d696e742061667465722066696e6973686564",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"ERC20Mintable/mint : Cannot mint after finished\"",
                              "value": "ERC20Mintable/mint : Cannot mint after finished"
                            },
                            "id": 119,
                            "name": "Literal",
                            "src": "901:49:1"
                          }
                        ],
                        "id": 120,
                        "name": "FunctionCall",
                        "src": "849:111:1"
                      }
                    ],
                    "id": 121,
                    "name": "ExpressionStatement",
                    "src": "849:111:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_e5f9696183c1495786d0ecbd4aaf9baea811eb55a24762e041c08404228b4712",
                                  "typeString": "literal_string \"ERC20Mintable/mint  : Cannot mint more than cap\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 122,
                            "name": "Identifier",
                            "src": "970:7:1"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "add",
                                      "referencedDeclaration": 1470,
                                      "type": "function (uint256,uint256) pure returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 335,
                                          "type": "uint256",
                                          "value": "_totalSupply"
                                        },
                                        "id": 123,
                                        "name": "Identifier",
                                        "src": "991:12:1"
                                      }
                                    ],
                                    "id": 124,
                                    "name": "MemberAccess",
                                    "src": "991:16:1"
                                  },
                                  {
                                    "attributes": {
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 96,
                                      "type": "uint256",
                                      "value": "amount"
                                    },
                                    "id": 125,
                                    "name": "Identifier",
                                    "src": "1008:6:1"
                                  }
                                ],
                                "id": 126,
                                "name": "FunctionCall",
                                "src": "991:24:1"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "operator": "*",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "hexvalue": "315f3030305f3030305f303030",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "token": "number",
                                          "type": "int_const 1000000000",
                                          "value": "1_000_000_000"
                                        },
                                        "id": 127,
                                        "name": "Literal",
                                        "src": "1020:13:1"
                                      },
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isInlineArray": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                              },
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "operator": "**",
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "hexvalue": "3130",
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "token": "number",
                                                  "type": "int_const 10",
                                                  "value": "10"
                                                },
                                                "id": 128,
                                                "name": "Literal",
                                                "src": "1037:2:1"
                                              },
                                              {
                                                "attributes": {
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "isStructConstructorCall": false,
                                                  "lValueRequested": false,
                                                  "names": [
                                                    null
                                                  ],
                                                  "tryCall": false,
                                                  "type": "uint256",
                                                  "type_conversion": true
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": [
                                                        {
                                                          "typeIdentifier": "t_rational_18_by_1",
                                                          "typeString": "int_const 18"
                                                        }
                                                      ],
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "type": "type(uint256)"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "name": "uint256"
                                                        },
                                                        "id": 129,
                                                        "name": "ElementaryTypeName",
                                                        "src": "1043:7:1"
                                                      }
                                                    ],
                                                    "id": 130,
                                                    "name": "ElementaryTypeNameExpression",
                                                    "src": "1043:7:1"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "hexvalue": "3138",
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": true,
                                                      "lValueRequested": false,
                                                      "token": "number",
                                                      "type": "int_const 18",
                                                      "value": "18"
                                                    },
                                                    "id": 131,
                                                    "name": "Literal",
                                                    "src": "1051:2:1"
                                                  }
                                                ],
                                                "id": 132,
                                                "name": "FunctionCall",
                                                "src": "1043:11:1"
                                              }
                                            ],
                                            "id": 133,
                                            "name": "BinaryOperation",
                                            "src": "1037:17:1"
                                          }
                                        ],
                                        "id": 134,
                                        "name": "TupleExpression",
                                        "src": "1036:19:1"
                                      }
                                    ],
                                    "id": 135,
                                    "name": "BinaryOperation",
                                    "src": "1020:35:1"
                                  }
                                ],
                                "id": 136,
                                "name": "TupleExpression",
                                "src": "1019:37:1"
                              }
                            ],
                            "id": 137,
                            "name": "BinaryOperation",
                            "src": "991:65:1"
                          },
                          {
                            "attributes": {
                              "hexvalue": "45524332304d696e7461626c652f6d696e7420203a2043616e6e6f74206d696e74206d6f7265207468616e20636170",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"ERC20Mintable/mint  : Cannot mint more than cap\"",
                              "value": "ERC20Mintable/mint  : Cannot mint more than cap"
                            },
                            "id": 138,
                            "name": "Literal",
                            "src": "1070:49:1"
                          }
                        ],
                        "id": 139,
                        "name": "FunctionCall",
                        "src": "970:160:1"
                      }
                    ],
                    "id": 140,
                    "name": "ExpressionStatement",
                    "src": "970:160:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 477,
                              "type": "function (address,uint256) returns (bool)",
                              "value": "_mint"
                            },
                            "id": 141,
                            "name": "Identifier",
                            "src": "1140:5:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 94,
                              "type": "address",
                              "value": "receiver"
                            },
                            "id": 142,
                            "name": "Identifier",
                            "src": "1146:8:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 96,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 143,
                            "name": "Identifier",
                            "src": "1156:6:1"
                          }
                        ],
                        "id": 144,
                        "name": "FunctionCall",
                        "src": "1140:23:1"
                      }
                    ],
                    "id": 145,
                    "name": "ExpressionStatement",
                    "src": "1140:23:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1104,
                              "type": "function (address,uint256)",
                              "value": "Mint"
                            },
                            "id": 146,
                            "name": "Identifier",
                            "src": "1178:4:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 94,
                              "type": "address",
                              "value": "receiver"
                            },
                            "id": 147,
                            "name": "Identifier",
                            "src": "1183:8:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 96,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 148,
                            "name": "Identifier",
                            "src": "1193:6:1"
                          }
                        ],
                        "id": 149,
                        "name": "FunctionCall",
                        "src": "1178:22:1"
                      }
                    ],
                    "id": 150,
                    "name": "EmitStatement",
                    "src": "1173:27:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 104,
                              "type": "bool",
                              "value": "success"
                            },
                            "id": 151,
                            "name": "Identifier",
                            "src": "1210:7:1"
                          },
                          {
                            "attributes": {
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 152,
                            "name": "Literal",
                            "src": "1220:4:1"
                          }
                        ],
                        "id": 153,
                        "name": "Assignment",
                        "src": "1210:14:1"
                      }
                    ],
                    "id": 154,
                    "name": "ExpressionStatement",
                    "src": "1210:14:1"
                  }
                ],
                "id": 155,
                "name": "Block",
                "src": "708:523:1"
              }
            ],
            "id": 156,
            "name": "FunctionDefinition",
            "src": "551:680:1"
          },
          {
            "attributes": {
              "baseFunctions": [
                586
              ],
              "functionSelector": "a9059cbb",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "transfer",
              "scope": 323,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "overrides": [
                    null
                  ]
                },
                "id": 162,
                "name": "OverrideSpecifier",
                "src": "1291:8:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "to",
                      "scope": 199,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 157,
                        "name": "ElementaryTypeName",
                        "src": "1255:7:1"
                      }
                    ],
                    "id": 158,
                    "name": "VariableDeclaration",
                    "src": "1255:10:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "scope": 199,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 159,
                        "name": "ElementaryTypeName",
                        "src": "1267:7:1"
                      }
                    ],
                    "id": 160,
                    "name": "VariableDeclaration",
                    "src": "1267:14:1"
                  }
                ],
                "id": 161,
                "name": "ParameterList",
                "src": "1254:28:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "success",
                      "scope": 199,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 174,
                        "name": "ElementaryTypeName",
                        "src": "1428:4:1"
                      }
                    ],
                    "id": 175,
                    "name": "VariableDeclaration",
                    "src": "1428:12:1"
                  }
                ],
                "id": 176,
                "name": "ParameterList",
                "src": "1427:14:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1184,
                      "type": "modifier (address)",
                      "value": "whenNotFrozen"
                    },
                    "id": 163,
                    "name": "Identifier",
                    "src": "1325:13:1"
                  },
                  {
                    "attributes": {
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "member_name": "sender",
                      "type": "address payable"
                    },
                    "children": [
                      {
                        "attributes": {
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": -15,
                          "type": "msg",
                          "value": "msg"
                        },
                        "id": 164,
                        "name": "Identifier",
                        "src": "1339:3:1"
                      }
                    ],
                    "id": 165,
                    "name": "MemberAccess",
                    "src": "1339:10:1"
                  }
                ],
                "id": 166,
                "name": "ModifierInvocation",
                "src": "1325:25:1"
              },
              {
                "attributes": {},
                "children": [
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1390,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 167,
                    "name": "Identifier",
                    "src": "1359:13:1"
                  }
                ],
                "id": 168,
                "name": "ModifierInvocation",
                "src": "1359:13:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 754,
                      "type": "modifier (address,uint256)",
                      "value": "checkLock"
                    },
                    "id": 169,
                    "name": "Identifier",
                    "src": "1381:9:1"
                  },
                  {
                    "attributes": {
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "member_name": "sender",
                      "type": "address payable"
                    },
                    "children": [
                      {
                        "attributes": {
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": -15,
                          "type": "msg",
                          "value": "msg"
                        },
                        "id": 170,
                        "name": "Identifier",
                        "src": "1391:3:1"
                      }
                    ],
                    "id": 171,
                    "name": "MemberAccess",
                    "src": "1391:10:1"
                  },
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 160,
                      "type": "uint256",
                      "value": "amount"
                    },
                    "id": 172,
                    "name": "Identifier",
                    "src": "1403:6:1"
                  }
                ],
                "id": 173,
                "name": "ModifierInvocation",
                "src": "1381:29:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_90e453e3715aa0252216100960d5e36e7354f408114d4c119142be726fbee4a5",
                                  "typeString": "literal_string \"TALK/transfer : Should not send to zero address\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 177,
                            "name": "Identifier",
                            "src": "1455:7:1"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 158,
                                  "type": "address",
                                  "value": "to"
                                },
                                "id": 178,
                                "name": "Identifier",
                                "src": "1476:2:1"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "address payable",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "address"
                                        },
                                        "id": 179,
                                        "name": "ElementaryTypeName",
                                        "src": "1482:7:1"
                                      }
                                    ],
                                    "id": 180,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1482:7:1"
                                  },
                                  {
                                    "attributes": {
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 181,
                                    "name": "Literal",
                                    "src": "1490:1:1"
                                  }
                                ],
                                "id": 182,
                                "name": "FunctionCall",
                                "src": "1482:10:1"
                              }
                            ],
                            "id": 183,
                            "name": "BinaryOperation",
                            "src": "1476:16:1"
                          },
                          {
                            "attributes": {
                              "hexvalue": "54414c4b2f7472616e73666572203a2053686f756c64206e6f742073656e6420746f207a65726f2061646472657373",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"TALK/transfer : Should not send to zero address\"",
                              "value": "TALK/transfer : Should not send to zero address"
                            },
                            "id": 184,
                            "name": "Literal",
                            "src": "1506:49:1"
                          }
                        ],
                        "id": 185,
                        "name": "FunctionCall",
                        "src": "1455:110:1"
                      }
                    ],
                    "id": 186,
                    "name": "ExpressionStatement",
                    "src": "1455:110:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 406,
                              "type": "function (address,address,uint256) returns (bool)",
                              "value": "_transfer"
                            },
                            "id": 187,
                            "name": "Identifier",
                            "src": "1575:9:1"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 188,
                                "name": "Identifier",
                                "src": "1585:3:1"
                              }
                            ],
                            "id": 189,
                            "name": "MemberAccess",
                            "src": "1585:10:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 158,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 190,
                            "name": "Identifier",
                            "src": "1597:2:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 160,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 191,
                            "name": "Identifier",
                            "src": "1601:6:1"
                          }
                        ],
                        "id": 192,
                        "name": "FunctionCall",
                        "src": "1575:33:1"
                      }
                    ],
                    "id": 193,
                    "name": "ExpressionStatement",
                    "src": "1575:33:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 175,
                              "type": "bool",
                              "value": "success"
                            },
                            "id": 194,
                            "name": "Identifier",
                            "src": "1618:7:1"
                          },
                          {
                            "attributes": {
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 195,
                            "name": "Literal",
                            "src": "1628:4:1"
                          }
                        ],
                        "id": 196,
                        "name": "Assignment",
                        "src": "1618:14:1"
                      }
                    ],
                    "id": 197,
                    "name": "ExpressionStatement",
                    "src": "1618:14:1"
                  }
                ],
                "id": 198,
                "name": "Block",
                "src": "1442:197:1"
              }
            ],
            "id": 199,
            "name": "FunctionDefinition",
            "src": "1237:402:1"
          },
          {
            "attributes": {
              "baseFunctions": [
                597
              ],
              "functionSelector": "23b872dd",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "transferFrom",
              "scope": 323,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "overrides": [
                    null
                  ]
                },
                "id": 207,
                "name": "OverrideSpecifier",
                "src": "1717:8:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "from",
                      "scope": 257,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 200,
                        "name": "ElementaryTypeName",
                        "src": "1667:7:1"
                      }
                    ],
                    "id": 201,
                    "name": "VariableDeclaration",
                    "src": "1667:12:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "to",
                      "scope": 257,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 202,
                        "name": "ElementaryTypeName",
                        "src": "1681:7:1"
                      }
                    ],
                    "id": 203,
                    "name": "VariableDeclaration",
                    "src": "1681:10:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "scope": 257,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 204,
                        "name": "ElementaryTypeName",
                        "src": "1693:7:1"
                      }
                    ],
                    "id": 205,
                    "name": "VariableDeclaration",
                    "src": "1693:14:1"
                  }
                ],
                "id": 206,
                "name": "ParameterList",
                "src": "1666:42:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "success",
                      "scope": 257,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 217,
                        "name": "ElementaryTypeName",
                        "src": "1842:4:1"
                      }
                    ],
                    "id": 218,
                    "name": "VariableDeclaration",
                    "src": "1842:12:1"
                  }
                ],
                "id": 219,
                "name": "ParameterList",
                "src": "1841:14:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1184,
                      "type": "modifier (address)",
                      "value": "whenNotFrozen"
                    },
                    "id": 208,
                    "name": "Identifier",
                    "src": "1751:13:1"
                  },
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 201,
                      "type": "address",
                      "value": "from"
                    },
                    "id": 209,
                    "name": "Identifier",
                    "src": "1765:4:1"
                  }
                ],
                "id": 210,
                "name": "ModifierInvocation",
                "src": "1751:19:1"
              },
              {
                "attributes": {},
                "children": [
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1390,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 211,
                    "name": "Identifier",
                    "src": "1779:13:1"
                  }
                ],
                "id": 212,
                "name": "ModifierInvocation",
                "src": "1779:13:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 754,
                      "type": "modifier (address,uint256)",
                      "value": "checkLock"
                    },
                    "id": 213,
                    "name": "Identifier",
                    "src": "1801:9:1"
                  },
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 201,
                      "type": "address",
                      "value": "from"
                    },
                    "id": 214,
                    "name": "Identifier",
                    "src": "1811:4:1"
                  },
                  {
                    "attributes": {
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 205,
                      "type": "uint256",
                      "value": "amount"
                    },
                    "id": 215,
                    "name": "Identifier",
                    "src": "1817:6:1"
                  }
                ],
                "id": 216,
                "name": "ModifierInvocation",
                "src": "1801:23:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_01f1a719573c7fafec1337eeab360a9ce9fc9ca073c6377af97ffe77f0c4aefc",
                                  "typeString": "literal_string \"TALK/transferFrom : Should not send to zero address\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 220,
                            "name": "Identifier",
                            "src": "1870:7:1"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 203,
                                  "type": "address",
                                  "value": "to"
                                },
                                "id": 221,
                                "name": "Identifier",
                                "src": "1891:2:1"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "address payable",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "address"
                                        },
                                        "id": 222,
                                        "name": "ElementaryTypeName",
                                        "src": "1897:7:1"
                                      }
                                    ],
                                    "id": 223,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1897:7:1"
                                  },
                                  {
                                    "attributes": {
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 224,
                                    "name": "Literal",
                                    "src": "1905:1:1"
                                  }
                                ],
                                "id": 225,
                                "name": "FunctionCall",
                                "src": "1897:10:1"
                              }
                            ],
                            "id": 226,
                            "name": "BinaryOperation",
                            "src": "1891:16:1"
                          },
                          {
                            "attributes": {
                              "hexvalue": "54414c4b2f7472616e7366657246726f6d203a2053686f756c64206e6f742073656e6420746f207a65726f2061646472657373",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"TALK/transferFrom : Should not send to zero address\"",
                              "value": "TALK/transferFrom : Should not send to zero address"
                            },
                            "id": 227,
                            "name": "Literal",
                            "src": "1921:53:1"
                          }
                        ],
                        "id": 228,
                        "name": "FunctionCall",
                        "src": "1870:114:1"
                      }
                    ],
                    "id": 229,
                    "name": "ExpressionStatement",
                    "src": "1870:114:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 406,
                              "type": "function (address,address,uint256) returns (bool)",
                              "value": "_transfer"
                            },
                            "id": 230,
                            "name": "Identifier",
                            "src": "1994:9:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 201,
                              "type": "address",
                              "value": "from"
                            },
                            "id": 231,
                            "name": "Identifier",
                            "src": "2004:4:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 203,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 232,
                            "name": "Identifier",
                            "src": "2010:2:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 205,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 233,
                            "name": "Identifier",
                            "src": "2014:6:1"
                          }
                        ],
                        "id": 234,
                        "name": "FunctionCall",
                        "src": "1994:27:1"
                      }
                    ],
                    "id": 235,
                    "name": "ExpressionStatement",
                    "src": "1994:27:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 436,
                              "type": "function (address,address,uint256) returns (bool)",
                              "value": "_approve"
                            },
                            "id": 236,
                            "name": "Identifier",
                            "src": "2031:8:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 201,
                              "type": "address",
                              "value": "from"
                            },
                            "id": 237,
                            "name": "Identifier",
                            "src": "2053:4:1"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 238,
                                "name": "Identifier",
                                "src": "2071:3:1"
                              }
                            ],
                            "id": 239,
                            "name": "MemberAccess",
                            "src": "2071:10:1"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_a645e40bceebddb1cb38c2bcfabd7af9247754c2f3ebbca73dc90a6607cdd426",
                                      "typeString": "literal_string \"TALK/transferFrom : Cannot send more than allowance\""
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sub",
                                  "referencedDeclaration": 1515,
                                  "type": "function (uint256,uint256,string memory) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 345,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "_allowances"
                                            },
                                            "id": 240,
                                            "name": "Identifier",
                                            "src": "2095:11:1"
                                          },
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 201,
                                              "type": "address",
                                              "value": "from"
                                            },
                                            "id": 241,
                                            "name": "Identifier",
                                            "src": "2107:4:1"
                                          }
                                        ],
                                        "id": 242,
                                        "name": "IndexAccess",
                                        "src": "2095:17:1"
                                      },
                                      {
                                        "attributes": {
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "sender",
                                          "type": "address payable"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": -15,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 243,
                                            "name": "Identifier",
                                            "src": "2113:3:1"
                                          }
                                        ],
                                        "id": 244,
                                        "name": "MemberAccess",
                                        "src": "2113:10:1"
                                      }
                                    ],
                                    "id": 245,
                                    "name": "IndexAccess",
                                    "src": "2095:29:1"
                                  }
                                ],
                                "id": 246,
                                "name": "MemberAccess",
                                "src": "2095:33:1"
                              },
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 205,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 247,
                                "name": "Identifier",
                                "src": "2146:6:1"
                              },
                              {
                                "attributes": {
                                  "hexvalue": "54414c4b2f7472616e7366657246726f6d203a2043616e6e6f742073656e64206d6f7265207468616e20616c6c6f77616e6365",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "token": "string",
                                  "type": "literal_string \"TALK/transferFrom : Cannot send more than allowance\"",
                                  "value": "TALK/transferFrom : Cannot send more than allowance"
                                },
                                "id": 248,
                                "name": "Literal",
                                "src": "2170:53:1"
                              }
                            ],
                            "id": 249,
                            "name": "FunctionCall",
                            "src": "2095:142:1"
                          }
                        ],
                        "id": 250,
                        "name": "FunctionCall",
                        "src": "2031:216:1"
                      }
                    ],
                    "id": 251,
                    "name": "ExpressionStatement",
                    "src": "2031:216:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 218,
                              "type": "bool",
                              "value": "success"
                            },
                            "id": 252,
                            "name": "Identifier",
                            "src": "2257:7:1"
                          },
                          {
                            "attributes": {
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 253,
                            "name": "Literal",
                            "src": "2267:4:1"
                          }
                        ],
                        "id": 254,
                        "name": "Assignment",
                        "src": "2257:14:1"
                      }
                    ],
                    "id": 255,
                    "name": "ExpressionStatement",
                    "src": "2257:14:1"
                  }
                ],
                "id": 256,
                "name": "Block",
                "src": "1860:418:1"
              }
            ],
            "id": 257,
            "name": "FunctionDefinition",
            "src": "1645:633:1"
          },
          {
            "attributes": {
              "baseFunctions": [
                606
              ],
              "functionSelector": "095ea7b3",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "approve",
              "scope": 323,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "overrides": [
                    null
                  ]
                },
                "id": 263,
                "name": "OverrideSpecifier",
                "src": "2342:8:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "spender",
                      "scope": 289,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 258,
                        "name": "ElementaryTypeName",
                        "src": "2301:7:1"
                      }
                    ],
                    "id": 259,
                    "name": "VariableDeclaration",
                    "src": "2301:15:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "scope": 289,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 260,
                        "name": "ElementaryTypeName",
                        "src": "2318:7:1"
                      }
                    ],
                    "id": 261,
                    "name": "VariableDeclaration",
                    "src": "2318:14:1"
                  }
                ],
                "id": 262,
                "name": "ParameterList",
                "src": "2300:33:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "success",
                      "scope": 289,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 264,
                        "name": "ElementaryTypeName",
                        "src": "2385:4:1"
                      }
                    ],
                    "id": 265,
                    "name": "VariableDeclaration",
                    "src": "2385:12:1"
                  }
                ],
                "id": 266,
                "name": "ParameterList",
                "src": "2384:14:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_c2d65f2981c913277a9672666bea0e2c08674583aa533950f9629773e86707b8",
                                  "typeString": "literal_string \"SAM/approve : Should not approve zero address\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 267,
                            "name": "Identifier",
                            "src": "2413:7:1"
                          },
                          {
                            "attributes": {
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 259,
                                  "type": "address",
                                  "value": "spender"
                                },
                                "id": 268,
                                "name": "Identifier",
                                "src": "2434:7:1"
                              },
                              {
                                "attributes": {
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "address payable",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "address"
                                        },
                                        "id": 269,
                                        "name": "ElementaryTypeName",
                                        "src": "2445:7:1"
                                      }
                                    ],
                                    "id": 270,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2445:7:1"
                                  },
                                  {
                                    "attributes": {
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 271,
                                    "name": "Literal",
                                    "src": "2453:1:1"
                                  }
                                ],
                                "id": 272,
                                "name": "FunctionCall",
                                "src": "2445:10:1"
                              }
                            ],
                            "id": 273,
                            "name": "BinaryOperation",
                            "src": "2434:21:1"
                          },
                          {
                            "attributes": {
                              "hexvalue": "53414d2f617070726f7665203a2053686f756c64206e6f7420617070726f7665207a65726f2061646472657373",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "string",
                              "type": "literal_string \"SAM/approve : Should not approve zero address\"",
                              "value": "SAM/approve : Should not approve zero address"
                            },
                            "id": 274,
                            "name": "Literal",
                            "src": "2469:47:1"
                          }
                        ],
                        "id": 275,
                        "name": "FunctionCall",
                        "src": "2413:113:1"
                      }
                    ],
                    "id": 276,
                    "name": "ExpressionStatement",
                    "src": "2413:113:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 436,
                              "type": "function (address,address,uint256) returns (bool)",
                              "value": "_approve"
                            },
                            "id": 277,
                            "name": "Identifier",
                            "src": "2536:8:1"
                          },
                          {
                            "attributes": {
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 278,
                                "name": "Identifier",
                                "src": "2545:3:1"
                              }
                            ],
                            "id": 279,
                            "name": "MemberAccess",
                            "src": "2545:10:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 259,
                              "type": "address",
                              "value": "spender"
                            },
                            "id": 280,
                            "name": "Identifier",
                            "src": "2557:7:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 261,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 281,
                            "name": "Identifier",
                            "src": "2566:6:1"
                          }
                        ],
                        "id": 282,
                        "name": "FunctionCall",
                        "src": "2536:37:1"
                      }
                    ],
                    "id": 283,
                    "name": "ExpressionStatement",
                    "src": "2536:37:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 265,
                              "type": "bool",
                              "value": "success"
                            },
                            "id": 284,
                            "name": "Identifier",
                            "src": "2583:7:1"
                          },
                          {
                            "attributes": {
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 285,
                            "name": "Literal",
                            "src": "2593:4:1"
                          }
                        ],
                        "id": 286,
                        "name": "Assignment",
                        "src": "2583:14:1"
                      }
                    ],
                    "id": 287,
                    "name": "ExpressionStatement",
                    "src": "2583:14:1"
                  }
                ],
                "id": 288,
                "name": "Block",
                "src": "2403:201:1"
              }
            ],
            "id": 289,
            "name": "FunctionDefinition",
            "src": "2284:320:1"
          },
          {
            "attributes": {
              "baseFunctions": [
                567
              ],
              "functionSelector": "06fdde03",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "name",
              "scope": 323,
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "overrides": [
                    null
                  ]
                },
                "id": 291,
                "name": "OverrideSpecifier",
                "src": "2626:8:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 290,
                "name": "ParameterList",
                "src": "2623:2:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "tokenName",
                      "scope": 300,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 292,
                        "name": "ElementaryTypeName",
                        "src": "2658:6:1"
                      }
                    ],
                    "id": 293,
                    "name": "VariableDeclaration",
                    "src": "2658:23:1"
                  }
                ],
                "id": 294,
                "name": "ParameterList",
                "src": "2657:25:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string memory"
                        },
                        "children": [
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 293,
                              "type": "string memory",
                              "value": "tokenName"
                            },
                            "id": 295,
                            "name": "Identifier",
                            "src": "2693:9:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 77,
                              "type": "string memory",
                              "value": "_name"
                            },
                            "id": 296,
                            "name": "Identifier",
                            "src": "2705:5:1"
                          }
                        ],
                        "id": 297,
                        "name": "Assignment",
                        "src": "2693:17:1"
                      }
                    ],
                    "id": 298,
                    "name": "ExpressionStatement",
                    "src": "2693:17:1"
                  }
                ],
                "id": 299,
                "name": "Block",
                "src": "2683:34:1"
              }
            ],
            "id": 300,
            "name": "FunctionDefinition",
            "src": "2610:107:1"
          },
          {
            "attributes": {
              "baseFunctions": [
                572
              ],
              "functionSelector": "95d89b41",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "symbol",
              "scope": 323,
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "overrides": [
                    null
                  ]
                },
                "id": 302,
                "name": "OverrideSpecifier",
                "src": "2741:8:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 301,
                "name": "ParameterList",
                "src": "2738:2:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "tokenSymbol",
                      "scope": 311,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 303,
                        "name": "ElementaryTypeName",
                        "src": "2773:6:1"
                      }
                    ],
                    "id": 304,
                    "name": "VariableDeclaration",
                    "src": "2773:25:1"
                  }
                ],
                "id": 305,
                "name": "ParameterList",
                "src": "2772:27:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string memory"
                        },
                        "children": [
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 304,
                              "type": "string memory",
                              "value": "tokenSymbol"
                            },
                            "id": 306,
                            "name": "Identifier",
                            "src": "2810:11:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 80,
                              "type": "string memory",
                              "value": "_symbol"
                            },
                            "id": 307,
                            "name": "Identifier",
                            "src": "2824:7:1"
                          }
                        ],
                        "id": 308,
                        "name": "Assignment",
                        "src": "2810:21:1"
                      }
                    ],
                    "id": 309,
                    "name": "ExpressionStatement",
                    "src": "2810:21:1"
                  }
                ],
                "id": 310,
                "name": "Block",
                "src": "2800:38:1"
              }
            ],
            "id": 311,
            "name": "FunctionDefinition",
            "src": "2723:115:1"
          },
          {
            "attributes": {
              "baseFunctions": [
                577
              ],
              "functionSelector": "313ce567",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "decimals",
              "scope": 323,
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "external"
            },
            "children": [
              {
                "attributes": {
                  "overrides": [
                    null
                  ]
                },
                "id": 313,
                "name": "OverrideSpecifier",
                "src": "2864:8:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 312,
                "name": "ParameterList",
                "src": "2861:2:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "tokenDecimals",
                      "scope": 322,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 314,
                        "name": "ElementaryTypeName",
                        "src": "2896:5:1"
                      }
                    ],
                    "id": 315,
                    "name": "VariableDeclaration",
                    "src": "2896:19:1"
                  }
                ],
                "id": 316,
                "name": "ParameterList",
                "src": "2895:21:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint8"
                        },
                        "children": [
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 315,
                              "type": "uint8",
                              "value": "tokenDecimals"
                            },
                            "id": 317,
                            "name": "Identifier",
                            "src": "2927:13:1"
                          },
                          {
                            "attributes": {
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 83,
                              "type": "uint8",
                              "value": "_decimals"
                            },
                            "id": 318,
                            "name": "Identifier",
                            "src": "2943:9:1"
                          }
                        ],
                        "id": 319,
                        "name": "Assignment",
                        "src": "2927:25:1"
                      }
                    ],
                    "id": 320,
                    "name": "ExpressionStatement",
                    "src": "2927:25:1"
                  }
                ],
                "id": 321,
                "name": "Block",
                "src": "2917:42:1"
              }
            ],
            "id": 322,
            "name": "FunctionDefinition",
            "src": "2844:115:1"
          }
        ],
        "id": 323,
        "name": "ContractDefinition",
        "src": "200:2761:1"
      }
    ],
    "id": 324,
    "name": "SourceUnit",
    "src": "0:2962:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.7.1+commit.f4a555be.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-03-12T01:32:19.891Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "finishMint()": {
        "details": "only owner can call this function"
      },
      "mint(address,uint256)": {
        "details": "only owner can call this function"
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "finishMint()": {
        "notice": "finish minting, cannot mint after calling this function"
      },
      "mint(address,uint256)": {
        "notice": "mint token"
      }
    },
    "version": 1
  }
}
