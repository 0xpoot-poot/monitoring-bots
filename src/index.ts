import { Block, createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import dotenv from 'dotenv'

// In case you don't know what dotenv is, it is a library that allows you to load environment
// variables from a .env file into your environment. Privacy reasons.
dotenv.config()

// RPC allows your application to communicate with a blockchain node to 
// query data or send transactions.
const rpc = process.env.RPC_URL

// Set up a public client to connect to the blockchain (allow for use of public actions)
const client = createPublicClient({ 
  chain: mainnet, 
  transport: http(rpc), 
}) 

// Example function to show that blocks can be passed in as a parameter to other functions
const exampleFunction = async (block: Block) => {
    console.log(block.number)
}

const main = async () => {
    // Monitor for the latest block number
    client.watchBlocks({
        // On each block, log the block number
        onBlock: (block) => exampleFunction(block),

        // Poll every second
        pollingInterval: 1000,
    })
}

main()