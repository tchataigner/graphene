# Welcome to graphene 👋
[![Version](https://img.shields.io/npm/v/graphene.svg)](https://www.npmjs.com/package/graphene)

> Graphene project developed during the NFTHack hackathon 

The Graphene project works around decentralized management of deals for decentralized storage.

It lets stakeholders to specify storage parameters to try and find the best deals for their data over
decentralized storage networks while aggregating costs, saving money for everyone involved.

## Make it work

First you will need to up the docker images for the ganache chain and the ipfs node

```bash
docker-compose up
```

Then install the client dependencies and start the service

```bash
cd client && yarn && yarn start
```

## Workflow

There are 3 stakeholders in the demo: the NFT issuer, the NFT owner and the NFT consumer. They all 
have different kinds of storage needs.

- NFT Issuer: It's the address minting the NFT. He will need cold replicas of his NFT to make sure the 
metadata will always be available.
- NFT Owner: It's the address owning the NFT. He will need cold replicas to ensure the his NFT always
keep its value but also a hot replica to be able to show it off in the virtual world.
- NFT Consumer: A stakeholder that developed a dApp (video conference for example) that will need to 
make sure that the metadata is available at great speed for all users of his application.

1) The Issuer mints the NFT and deploy the Storage contract
2) The Issuer rent cold replicas
3) The Owner rent cold replicas and a single hot replicas. Outcome should be that the renting price
drops by half for the Issuer.
4) The Consumer rent hot replicas to ensure that the NFT is available everywhere, sharing cost with the owner.

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
