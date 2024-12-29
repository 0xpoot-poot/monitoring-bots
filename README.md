# monitoring-bot
Small-scale bots to monitor the blockchain and mempool. Basic monitoring.
One for monitoring the blockchain and one for monitoring the mempool.

These are small-scale bots, so it is not meant to be used in a production environment. It is written in TypeScript and uses the viem library to connect to the blockchain. I am planning on doing a more complex version of this bot in the future using the language Rust, or writing a more complex bot in TypeScript using this template.

I would recommend using the viem library to connect to the blockchain.
If you are not familiar with the viem library, I would recommend checking out the documentation here: https://viem.sh/docs/, specifically the "Getting Started" section. Familiarise yourself with what Client, Actions, RPC, Transport, and Chain are.

Step 1. Install dependencies into the project folder:
```
npm install viem
npm install -D tsx
npm install dotenv
```

Step 2. Pass in the `chain` you want to monitor into the client.

Step 3. Pass in the `transport` (RPC) you want to use into the client.

## Blockchain Monitoring

The potential with this implementations is that you can monitor for the latest block, and then pass in the block as a parameter to other functions to interact with the blockchain. As seen with exampleFunction(). Perhaps if you want to search through the block for a specific transaction.

The bot can be run by running `npm run blockchain` in the terminal.

## Mempool Monitoring

Ensure your RPC provider supports `eth_subscribe`. (Alchemy does, so does Infura)

Not all chains allow for the mempool to be monitored, such as Base. Ensure your RPC is linked to a chain that supports a public mempool.

This implementation uses websockets to monitor the mempool, due to the fact that websockets are more efficient than polling.

The bot can be run by running `npm run mempool` in the terminal.