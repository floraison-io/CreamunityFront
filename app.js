function abbreviateAddress(address) {
    if (!address || address.length !== 42 || !address.startsWith('0x')) {
        return address; // 如果地址无效，返回原样 
    }
    const prefix = address.substring(0, 6); // 截取前6位 (包括 0x) 
    const suffix = address.substring(address.length - 4); // 截取后4位 
    return `${prefix}....${suffix}`;
}

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

    let signer = null;
    let creamCoinContract = null;
    let creamunityContract = null;

    const loginView = document.getElementById('loginView');
    const createWalletBtn = document.getElementById('createWalletBtn');
    const privateKeyInput = document.getElementById('privateKeyInput');
    const loginBtn = document.getElementById('loginBtn');
    const walletInfo = document.getElementById('walletInfo');
    const walletDisplay = document.getElementById('walletDisplay');
    const userAddress = document.getElementById('userAddress');
    const creamBalance = document.getElementById('creamBalance');
    const walletDropdown = document.getElementById('walletDropdown');
    const transferAction = document.getElementById('transferAction');
    const creamMachineAction = document.getElementById('creamMachineAction');
    const logoutBtn = document.getElementById('logoutBtn');
    const profileAction = document.getElementById('profileAction'); 
    const postSection = document.getElementById('postSection');
    const messageInput = document.getElementById('messageInput');
    const charCounter = document.getElementById('charCounter');
    const postBtn = document.getElementById('postBtn');
    const messagesContainer = document.getElementById('messagesContainer');
    const transferModal = document.getElementById('transferModal');
    const closeTransferModal = document.getElementById('closeTransferModal');
    const recipientAddressInput = document.getElementById('recipientAddressInput');
    const amountInput = document.getElementById('amountInput');
    const transferBtn = document.getElementById('transferBtn');
    

    async function init() {
        const pk = localStorage.getItem('creamPrivateKey');
        if (pk) {
            await login(pk);
        }
        await loadMessages();
    }

    
/**
 * 设置应用的繁忙状态，禁用或启用所有交互式按钮
 * @param {boolean} isBusy - 应用是否正在处理交易
 */
function setAppBusy(isBusy) {
    // 获取所有需要被禁用的按钮
    const allActionButtons = document.querySelectorAll('.btn, .tip-btn, .dropdown-item, .copy-btn');
    
    allActionButtons.forEach(button => {
        if (button.id !== 'logoutBtn') {
            button.disabled = isBusy;
        }
    });

}

    async function login(privateKey) {
        try {
            signer = new ethers.Wallet(privateKey, provider);
            creamCoinContract = new ethers.Contract(creamCoinAddress, creamCoinABI, signer);
            creamunityContract = new ethers.Contract(creamunityAddress, creamunityABI, signer);
            
            loginView.style.display = 'none';
            walletInfo.style.display = 'block';
            postSection.style.display = 'block';
            
            userAddress.innerText = abbreviateAddress(signer.address);
            profileAction.href = `../profile.html?address=${signer.address}`;
            localStorage.setItem('creamPrivateKey', privateKey);
            await updateBalance();
            await loadMessages(); 

        } catch (error) {
          //登录失败，无效的私钥。
            alert("哼！私钥不对啦(＞д＜)");
            console.error("登录时出错:", error);
            logout();
        }
    }

    function logout() {
        signer = null;
        creamCoinContract = null;
        creamunityContract = null;
        localStorage.removeItem('creamPrivateKey');

        walletInfo.style.display = 'none';
        postSection.style.display = 'none';
        loginView.style.display = 'flex';
        // 为什么?
        loginView.style.gap = '10px'
    }

    async function updateBalance() {
        if (!signer) return;
        try {
            const balance = await creamCoinContract.balanceOf(signer.address);
            const balanceInEther = ethers.utils.formatEther(balance);
            const formattedBalance = parseFloat(balanceInEther).toFixed(2);
            creamBalance.innerText = formattedBalance;
            
            const threshold = ethers.utils.parseUnits("10", 18); 
            if (balance.lt(threshold)) {
                creamMachineAction.disabled = false;
            } else {
                creamMachineAction.disabled = true;
            }
        } catch (error) {
            console.error("更新余额失败:", error);
            creamMachineAction.disabled = true;
        }
    }
    
    async function getCreamFromMachine() {
    if (!signer) {
        alert("请先登录 (＞﹏＜)");
        return;
    }

    const creamMachineButton = document.getElementById('creamMachineAction');

    creamMachineButton.disabled = true;

    creamMachineButton.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i> 
        <span>正在出币...</span>
    `;

    creamBalance.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i> 
        <span>正在出币...</span>
    `;

    walletDropdown.classList.remove('active');

    try {
        const response = await fetch('https://gas.floraison.io/request-cream', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userAddress: signer.address }),
        });
        
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || '领币失败！');
        }
        
        alert(data.message);
        await updateBalance();

    } catch (error) {
        alert(error.message); 
        console.error("领币失败:", error);
    } finally {
        creamMachineButton.innerHTML = `
            <i class="fa-solid fa-cookie-bite"></i>
            <span>奶油机</span>
        `;
        await updateBalance();
    }
  }

    async function requestGasSubsidy(actionType) {
        console.log(`正在请求Gas支援 (类型: ${actionType})...`);
        const response = await fetch('https://gas.floraison.io/request-gas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userAddress: signer.address,
                actionType: actionType
            }),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || '请求Gas支援失败！(＞﹏＜)');
        }
        
        
        await provider.waitForTransaction(data.txHash);
        console.log("Gas支援交易已确认！");
    }

    async function postMessage() {
        if (!signer) { alert("请先登录 (＞﹏＜)"); return; }
        const content = messageInput.value;
        if (!content.trim()) { alert("留言内容不能为空！(＞﹏＜)"); return; }
        if (content.length > 150) { alert("留言内容不能超过150个字！(＞﹏＜)"); return; }

        postBtn.disabled = true;
        postBtn.innerText = "检查余额...";

        try {
            const postFee = await creamunityContract.postFee();
            const balance = await creamCoinContract.balanceOf(signer.address);
            if (balance.lt(postFee)) {
                alert(`余额不足欸，发帖需要1枚奶油币。去奶油机领币(≧▽≦)`);
                return;
            }

            postBtn.innerText = "1/3 请求Gas...";
            await requestGasSubsidy('post');

            postBtn.innerText = "2/3 授权中...";
            const approveTx = await creamCoinContract.approve(creamunityAddress, postFee);
            await approveTx.wait();
            
            postBtn.innerText = "3/3 正在发帖...";
            const postTx = await creamunityContract.postMessage(content);
            await postTx.wait();

            alert("发帖成功！");
            messageInput.value = '';
            await updateBalance();
            await loadMessages();
        } catch (error) {
            alert("操作失败！对不起咩 ::>_<::");
            console.error("操作失败:", error);
        } finally {
            postBtn.disabled = false;
            postBtn.innerText = "发布留言";
        }
    }

    async function tipMessage(messageId) {
        if (!signer) { alert("请先登录,,Ծ‸Ծ,,"); return; }

        setAppBusy(true);
        
        const tipButton = document.querySelector(`.tip-btn[data-id="${messageId}"]`);
        if (tipButton) { tipButton.disabled = true; tipButton.innerText = '检查...'; }

        try {
            const tipAmount = await creamunityContract.tipAmount();
            const balance = await creamCoinContract.balanceOf(signer.address);
            if (balance.lt(tipAmount)) {
                alert(`余额不足欸，需要1枚奶油币。去奶油机领币(≧▽≦)`);
                throw new Error("Insufficient balance for tipping");
            }

            if (tipButton) tipButton.innerText = '请求Gas...';
            await requestGasSubsidy('tip');
            
            if (tipButton) tipButton.innerText = '授权中...';
            const approveTx = await creamCoinContract.approve(creamunityAddress, tipAmount);
            await approveTx.wait();

            if (tipButton) tipButton.innerText = '投喂中...';
            const tipTx = await creamunityContract.tipMessage(messageId);
            await tipTx.wait();

            alert("谢谢投喂！(〃∀〃)");
            await updateBalance();
            await loadMessages();
        } catch (error) {
            if (error.code === 'UNPREDICTABLE_GAS_LIMIT' || error.message.includes("execution reverted")) {
                alert("操作失败！对不起咩 ::>_<::");
            } else if (error.message !== "Insufficient balance for tipping") {
                alert("打赏失败！对不起咩 ::>_<::");
            }
            console.error(`打赏留言 #${messageId} 失败:`, error);
        } finally {
          setAppBusy(false);
            if (tipButton) {
                tipButton.disabled = false;
                tipButton.innerText = '🍰';
            }
        }
    }

    async function transferCreamCoin() {
        if (!signer) { alert("请先登录 (＞﹏＜)"); return; }

        const recipientAddress = recipientAddressInput.value;
        const amount = amountInput.value;
        if (!ethers.utils.isAddress(recipientAddress)) { alert("收款人地址格式不正确 (＞﹏＜)"); return; }
        if (!(parseFloat(amount) > 0)) { alert("请输入有效的金额 (＞﹏＜)"); return; }

        transferBtn.disabled = true;
        transferBtn.innerText = "检查余额...";

        try {
            const amountInWei = ethers.utils.parseUnits(amount, 18);
            const balance = await creamCoinContract.balanceOf(signer.address);
            if (balance.lt(amountInWei)) {
                alert("你的奶油币不足欸 (＞﹏＜)");
                throw new Error("Insufficient balance");
            }
            
            transferBtn.innerText = "1/2 请求Gas...";
            await requestGasSubsidy('transfer');

            transferBtn.innerText = "2/2 转账中...";
            const transferTx = await creamCoinContract.transfer(recipientAddress, amountInWei);
            await transferTx.wait();

            alert(`成功向 ${recipientAddress} 转账 ${amount} CRM！`);
            recipientAddressInput.value = '';
            amountInput.value = '';
            await updateBalance();
        } catch (error) {
            alert("转账失败！对不起咩 ::>_<::");
            console.error("转账失败:", error);
        } finally {
            transferBtn.disabled = false;
            transferBtn.innerText = "确认转账";
            transferModal.style.display = 'none';
        }
    }
    
    async function loadMessages() {
      try {
          const readOnlyCreamunityContract = new ethers.Contract(creamunityAddress, creamunityABI, provider);
          const messages = await readOnlyCreamunityContract.getAllMessages();
          messagesContainer.innerHTML = '';

          for(let i = messages.length - 1; i >= 0; i--) {
              const msg = messages[i];
              const messageEl = document.createElement('div');
              messageEl.className = 'message-item';

              const tipButtonHtml = (!signer || msg.author.toLowerCase() === signer.address.toLowerCase()) 
                  ? '' 
                  : `<button class="tip-btn btn-tip" data-id="${msg.id}">🍰</button>`;
              
              const authorLink = `<a href="../profile.html?address=${msg.author}" class="author-link">${abbreviateAddress(msg.author)}</a>`;

              messageEl.innerHTML = `
                  <p class="message-content"><strong>${msg.content}</strong></p>
                  <div class="message-meta">
                      <span>作者: ${authorLink}</span>
                      <span>时间: ${new Date(Number(msg.timestamp) * 1000).toLocaleString()}</span>
                      <span>投喂: ${ethers.utils.formatEther(msg.totalTips)} CRM</span>
                      ${tipButtonHtml}
                  </div>
              `;
              messagesContainer.appendChild(messageEl);
          }
      } catch (error) {
          console.error("加载留言失败:", error);
          messagesContainer.innerHTML = '<p>加载留言失败，请检查网络连接。(＞﹏＜)</p>';
      }
    }



    walletDisplay.addEventListener('click', (event) => {
        event.stopPropagation();
        walletDropdown.classList.toggle('active');
    });
    window.addEventListener('click', () => {
        if (walletDropdown.classList.contains('active')) {
            walletDropdown.classList.remove('active');
        }
    });
    transferAction.addEventListener('click', () => {
        walletDropdown.classList.remove('active'); 
        transferModal.style.display = 'flex'; 
    });
    closeTransferModal.addEventListener('click', () => transferModal.style.display = 'none');
    transferModal.addEventListener('click', (event) => { 
        if (event.target === transferModal) {
            transferModal.style.display = 'none';
        }
    });
    messageInput.addEventListener('input', () => {
        const currentLength = messageInput.value.length;
        charCounter.textContent = `${currentLength}/150`;
    });

    loginBtn.addEventListener('click', () => login(privateKeyInput.value));
    createWalletBtn.addEventListener('click', () => {
        const newWallet = ethers.Wallet.createRandom();
        navigator.clipboard.writeText(newWallet.privateKey)
        //alert(`已为你创建新钱包！\n\n地址: ${newWallet.address}\n\n**请务必备份好你的私钥！这是唯一凭证！**\n\n${newWallet.privateKey}`);
        alert(`请务必备份好你的私钥，不可以给别人看！不然会丢掉奶油币的 ::>_<::\n\n${newWallet.privateKey}\n\n私钥已复制到剪贴板，快收好~`);
        privateKeyInput.value = newWallet.privateKey;
    });
    logoutBtn.addEventListener('click', logout);
    postBtn.addEventListener('click', postMessage);
    transferBtn.addEventListener('click', transferCreamCoin);
    creamMachineAction.addEventListener('click', getCreamFromMachine);

    messagesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('tip-btn')) {
            const messageId = event.target.dataset.id;
            tipMessage(messageId);
        }
    });

    init();
});