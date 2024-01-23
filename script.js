// Sepolia Testnet
const { ethers } = require("ethers");

const INFURA_ID = '4d4628a86a0246c39f4d0151765ac867'
const provider = new ethers.getDefaultProvider('sepolia');

const address = '0x9D3de545F58C696946b4Cf2c884fcF4f7914cB53'

const main = async () => {
    const balance = await provider.getBalance(address);
    const nonce = await provider.getTransactionCount(address);
    const blockNumber = await provider.getBlockNumber(address);
    console.log(ethers.formatEther(balance));
    console.log(nonce);
    console.log(blockNumber);
}

main();
