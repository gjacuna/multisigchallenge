# Multi-Signature Wallet Smart Contract (MultiSig Wallet for friends) starting from the Scaffold-eth master branch.

For more context, peer learning and more fun, [join the telegram channel](https://t.me/+zKllN8OlGuxmYzFh)!

Main inspiration is, like always, π° [BuidlGuidl](https://BuidlGuidl.com) and [Austin](https://twitter.com/austingriffith). Started from master and used this branch of [Scaffold-Eth](https://github.com/scaffold-eth/scaffold-eth-examples/tree/meta-multi-sig/) from where I snipped lots of things (almost everything).

## Things to look at

π The MultiSig smart contract `MultiSig.sol` in `packages/hardhat/contracts`. It's updated to solidity >0.8. Took out the streams to simplify a little.

π Most of the frontend is on `App.jsx` in `packages/react-app/src`, and the components and view folders right there.

πΌ Deployment script is the basic in `packages/hardhat/deploy`, just added the contract constructor arguments for my wallets. Make sure you change yours!

# Now with decentralized GUNDB to store transactions and signatures!

First time using this, so move with care!

π There's a GunDB connection now! It should work out of the box (ie, no need for a centralized peer), but I recommend rnning `yarn gun` to start a peer to coordinate the storage between browsers (Sometimes the connection might not work. It's all coordination, am I right?).

I just modified the existing code to store transactions and signatures in GUNDB. I had to avoid using arrays (not supported by GUNDB) and had to learn how to use sets and instances.

**Make sure you read the [GUNDB docs](https://gun.eco/) if you have doubts.**

πΌ When you're ready to deploy, go to [GunDB's GitHub, deploy section](https://github.com/amark/gun#deploy), and deploy a simple peer to Heroku, Zeet, or whatever. Just remember to add the link to the Gun initialization in App.jsx (check the comments in the code)

π± Open http://localhost:3000 to see the app or you can see a live version (on GoΓ«rli) here: http://gakmultisigch.surge.sh/ (If you wanna become a signer, look me up in the Telegram channels!)

# How does GUNDB work

Gundb stores your data in local storage and uses webrtc to find peers (browsers or computers) connected to the same frontend. If it finds peers, it syncs the data so all connected parties have the same information.

**What happens if users are not connected at the same time?** You're onto something. It requires peers to be connected all the time to sync. Enter: Coordinator peer! This is the reason to have a server running a peer of GUNDB, to have one trusted party coordinating data all the time! It's all coordination, it always was!


# π Scaffold-ETH

> everything you need to build on Ethereum! π

π§ͺ Quickly experiment with Solidity using a frontend that adapts to your smart contract:

![image](https://user-images.githubusercontent.com/2653167/124158108-c14ca380-da56-11eb-967e-69cde37ca8eb.png)


# πββοΈ Quick Start

Prerequisites: [Node (v16 LTS)](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> clone/fork π scaffold-eth:

```bash
git clone https://github.com/scaffold-eth/scaffold-eth.git
```

> install and start your π·β Hardhat chain:

```bash
cd scaffold-eth
yarn install
yarn chain
```

> in a second terminal window, start your π± frontend:

```bash
cd scaffold-eth
yarn start
```

> in a third terminal window, π° deploy your contract:

```bash
cd scaffold-eth
yarn deploy
```

# π Documentation

Documentation, tutorials, challenges, and many more resources, visit: [docs.scaffoldeth.io](https://docs.scaffoldeth.io)

# π­ Learning Solidity

π Read the docs: https://docs.soliditylang.org

π Go through each topic from [solidity by example](https://solidity-by-example.org) editing `YourContract.sol` in **π scaffold-eth**

- [Primitive Data Types](https://solidity-by-example.org/primitives/)
- [Mappings](https://solidity-by-example.org/mapping/)
- [Structs](https://solidity-by-example.org/structs/)
- [Modifiers](https://solidity-by-example.org/function-modifier/)
- [Events](https://solidity-by-example.org/events/)
- [Inheritance](https://solidity-by-example.org/inheritance/)
- [Payable](https://solidity-by-example.org/payable/)
- [Fallback](https://solidity-by-example.org/fallback/)

π§ Learn the [Solidity globals and units](https://solidity.readthedocs.io/en/v0.6.6/units-and-global-variables.html)

# π  Buidl

Check out all the [active branches](https://github.com/scaffold-eth/scaffold-eth/branches/active), [open issues](https://github.com/scaffold-eth/scaffold-eth/issues), and join/fund the π° [BuidlGuidl](https://BuidlGuidl.com)!

  
 - π€  [Follow the full Ethereum Speed Run](https://medium.com/@austin_48503/%EF%B8%8Fethereum-dev-speed-run-bd72bcba6a4c)


 - π  [Create your first NFT](https://github.com/scaffold-eth/scaffold-eth/tree/simple-nft-example)
 - π₯©  [Build a staking smart contract](https://github.com/scaffold-eth/scaffold-eth/tree/challenge-1-decentralized-staking)
 - π΅  [Deploy a token and vendor](https://github.com/scaffold-eth/scaffold-eth/tree/challenge-2-token-vendor)
 - π«  [Extend the NFT example to make a "buyer mints" marketplace](https://github.com/scaffold-eth/scaffold-eth/tree/buyer-mints-nft)
 - π²  [Learn about commit/reveal](https://github.com/scaffold-eth/scaffold-eth/tree/commit-reveal-with-frontend)
 - βοΈ  [Learn how ecrecover works](https://github.com/scaffold-eth/scaffold-eth/tree/signature-recover)
 - π©βπ©βπ§βπ§  [Build a multi-sig that uses off-chain signatures](https://github.com/scaffold-eth/scaffold-eth/tree/meta-multi-sig)
 - β³  [Extend the multi-sig to stream ETH](https://github.com/scaffold-eth/scaffold-eth/tree/streaming-meta-multi-sig)
 - βοΈ  [Learn how a simple DEX works](https://medium.com/@austin_48503/%EF%B8%8F-minimum-viable-exchange-d84f30bd0c90)
 - π¦  [Ape into learning!](https://github.com/scaffold-eth/scaffold-eth/tree/aave-ape)

# π P.S.

π You need an RPC key for testnets and production deployments, create an [Alchemy](https://www.alchemy.com/) account and replace the value of `ALCHEMY_KEY = xxx` in `packages/react-app/src/constants.js` with your new key.

π£ Make sure you update the `InfuraID` before you go to production. Huge thanks to [Infura](https://infura.io/) for our special account that fields 7m req/day!

# ππ¨ Speedrun Ethereum
Register as a builder [here](https://speedrunethereum.com) and start on some of the challenges and build a portfolio.

# π¬ Support Chat

Join the telegram [support chat π¬](https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA) to ask questions and find others building with π scaffold-eth!

---

π Please check out our [Gitcoin grant](https://gitcoin.co/grants/2851/scaffold-eth) too!

### Automated with Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/scaffold-eth/scaffold-eth)
