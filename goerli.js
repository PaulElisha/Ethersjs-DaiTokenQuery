//Goerli Testnet 
const { ethers } = require("ethers");

const INFURA_ID = '4d4628a86a0246c39f4d0151765ac867'
const provider = new ethers.getDefaultProvider('goerli');

const address = '0xdE449A556Db775CCBB09477ba81F95FFA4683759'

const main = async () => {
    const balance = await provider.getBalance(address);
    const nonce = await provider.getTransactionCount(address);
    const blockNumber = await provider.getBlockNumber(address);
    console.log(ethers.formatEther(balance));
    console.log(ethers.formatEther(nonce));
    console.log(ethers.formatEther(blockNumber));
}

main();
