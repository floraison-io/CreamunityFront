window.addEventListener('DOMContentLoaded', () => {
    const creamCoinAddress = "0xeA6F6858a3057886A67150a890D96A8F3d6321dF";
    const creamunityAddress = "0x001be3045D3699C7883cc182C246c824cEcE3155";
    
    const creamCoinABI = [{
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
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
          "name": "value",
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
          "name": "previousOwner",
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
          "name": "value",
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
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
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
          "name": "account",
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
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
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
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "inputs": [],
      "name": "owner",
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
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "inputs": [],
      "name": "totalSupply",
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
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }];
    const creamunityABI = [ {
      "inputs": [
        {
          "internalType": "address",
          "name": "_creamCoinAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "author",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "content",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "NewMessage",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "messageId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tipper",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "author",
          "type": "address"
        }
      ],
      "name": "NewTip",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "burnAddress",
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
      "inputs": [],
      "name": "creamCoin",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllMessages",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "content",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "author",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalTips",
              "type": "uint256"
            }
          ],
          "internalType": "struct Creamunity.Message[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMessageCount",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "messages",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "content",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "author",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalTips",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "postFee",
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
          "internalType": "string",
          "name": "_content",
          "type": "string"
        }
      ],
      "name": "postMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tipAmount",
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
          "name": "_messageId",
          "type": "uint256"
        }
      ],
      "name": "tipMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }];
    
    const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/711458a57cdd45f8ad33809a10b68105");

    const params = new URLSearchParams(window.location.search);
    const profileAddress = params.get('address');

    const profileAddressEl = document.getElementById('profileAddress');
    const profileCreamBalanceEl = document.getElementById('profileCreamBalance');
    const firstPostTimeEl = document.getElementById('firstPostTime');
    const userMessagesContainer = document.getElementById('userMessagesContainer');
    const copyAddressBtn = document.getElementById('copyAddressBtn');
    
    const fullProfileAddress = params.get('address');

    /**
     * 缩写以太坊地址
     * @param {string} address - 完整的钱包地址
     * @returns {string} - 缩写后的地址，格式为 0x1234....5678
     */
    function abbreviateAddress(address) {
        if (!address || address.length !== 42 || !address.startsWith('0x')) {
            return address; // 如果地址无效，返回原样
        }
        const prefix = address.substring(0, 6); // 截取前6位 (包括 0x)
        const suffix = address.substring(address.length - 4); // 截取后4位
        return `${prefix}....${suffix}`;
    }


    async function loadProfileData() {
        if (!profileAddress || !ethers.utils.isAddress(profileAddress)) {
            document.querySelector('.container').innerHTML = '<h1>无效或未提供用户地址</h1>';
            return;
        }
        
        //profileAddressEl.textContent = profileAddress;
        profileAddressEl.textContent = abbreviateAddress(profileAddress);

        try {
            const creamCoinContract = new ethers.Contract(creamCoinAddress, creamCoinABI, provider);
            const creamunityContract = new ethers.Contract(creamunityAddress, creamunityABI, provider);

            const balance = await creamCoinContract.balanceOf(profileAddress);
            profileCreamBalanceEl.textContent = `${ethers.utils.formatEther(balance)} CRM`;

            const allMessages = await creamunityContract.getAllMessages();
            const userMessages = allMessages.filter(msg => msg.author.toLowerCase() === profileAddress.toLowerCase());

            if (userMessages.length === 0) {
                firstPostTimeEl.textContent = "该用户还未发过言";
                userMessagesContainer.innerHTML = '<p>空空如也...</p>';
            } else {
                const firstPost = userMessages.reduce((earliest, current) => {
                    return earliest.timestamp.lt(current.timestamp) ? earliest : current;
                });
                firstPostTimeEl.textContent = new Date(firstPost.timestamp * 1000).toLocaleString();

                userMessagesContainer.innerHTML = ''; // 清空加载中提示
                // 按时间倒序显示
                userMessages.sort((a, b) => b.timestamp - a.timestamp).forEach(msg => {
                    const messageEl = document.createElement('div');
                    messageEl.className = 'message-item';
                    messageEl.innerHTML = `
                        <p class="message-content"><strong>${msg.content}</strong></p>
                        <div class="message-meta">
                            <span>时间: ${new Date(msg.timestamp * 1000).toLocaleString()}</span>
                            <span>收到打赏: ${ethers.utils.formatEther(msg.totalTips)} CRM</span>
                        </div>
                    `;
                    userMessagesContainer.appendChild(messageEl);
                });
            }
        } catch (error) {
            console.error("加载个人主页数据失败:", error);
            document.querySelector('.container').innerHTML = '<h1>加载数据失败，请检查控制台</h1>';
        }
    }

    copyAddressBtn.addEventListener('click', () => {
        if (!fullProfileAddress) return;

        navigator.clipboard.writeText(fullProfileAddress).then(() => {
            copyAddressBtn.textContent = '已复制!';
            // 2秒后恢复按钮文本
            setTimeout(() => {
                copyAddressBtn.textContent = '复制';
            }, 2000);
        }).catch(err => {
            console.error('复制地址失败: ', err);
            alert('复制失败，请手动复制或检查浏览器权限。');
        });
    });
    loadProfileData();
});