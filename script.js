// Sepolia Testnet
const { ethers } = require("ethers");

const INFURA_ID = '4d4628a86a0246c39f4d0151765ac867'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const address = '0x61DE0932AD49E9cd964d278b1D7790C42533B89F'

const main = async () => {
    const balance = await provider.getBalance(address);
    const nonce = await provider.getTransactionCount(address);
    const blockNumber = await provider.getBlockNumber(address);
    console.log(ethers.utils.formatEther(balance));
    console.log(nonce);
    console.log(blockNumber);
}

main();
