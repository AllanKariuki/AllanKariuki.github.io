---
title: NFT Collection with Merkle Allowlist
summary: An ERC-721 collection on Ethereum Sepolia with IPFS-hosted metadata and a Merkle-proof allowlist mint.
domain: Web3
stack: [Solidity, Foundry, JavaScript, IPFS, Pinata, Sepolia]
status: shipped
year: 2026
featured: false
order: 7
repo: https://github.com/AllanKariuki/nft-creation-tinkering
---

## Problem

The NFT standard itself is small; the off-chain plumbing around it (IPFS pinning, metadata generation, allowlists) is what trips people up the first time. I built the whole pipeline end to end to learn it properly.

## What I built

1. Pin images to IPFS through Pinata and get an images CID.
2. Generate per-token metadata JSON that points at those images.
3. Pin the metadata; its CID becomes the contract's base URI.
4. Build a **Merkle tree** of allowlisted addresses and set its root on the contract.
5. Allowlisted wallets mint with `allowlistMint(proof)`; once the owner opens it, anyone can `publicMint()`.

The contract (`MyNFT` / `MNFT`) is deployed on Sepolia at [`0x1776…4B6E`](https://sepolia.etherscan.io/address/0x17765800316585dd5905799d0cA6544Ba6724B6E).

## Stack & architecture

Solidity with Foundry (contract, tests and deploy script), Node.js scripts for metadata and the Merkle allowlist, IPFS via Pinata.

## Status / What's next

Deployed on testnet as a learning build. A small mint frontend is the natural next step.
