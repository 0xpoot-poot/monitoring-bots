import { Block, createPublicClient, webSocket } from 'viem'
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
  transport: webSocket(rpc), 
}) 

// Monitor Pending Transactions
const monitorMempool = async () => {
  
    client.watchPendingTransactions({
      onTransactions: async (txs) => {
        for (const tx of txs) {
          console.log(`New Pending Transaction: ${tx}`);
        }
      },
      onError: (err) => {
        console.error('Subscription Error:', err);
      },
    });
};

// Start Monitoring
monitorMempool();