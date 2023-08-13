//Goerli Testnet 
const { ethers } = require("ethers");

const INFURA_ID = '4d4628a86a0246c39f4d0151765ac867'
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

const address = '0xdE449A556Db775CCBB09477ba81F95FFA4683759'

const main = async () => {
    const balance = await provider.getBalance(address);
    const nonce = await provider.getTransactionCount(address);
    const blockNumber = await provider.getBlockNumber(address);
    console.log(ethers.utils.formatEther(balance));
    console.log(ethers.utils.formatEther(nonce));
    console.log(ethers.utils.formatEther(blockNumber));
}

main();
