---
title: USD-X Stablecoin Bridge
summary: A fiat-backed stablecoin issued natively on Ethereum and Solana, moved between chains by burn-and-mint over a double-entry ledger.
domain: Fintech
stack: [Go, Fiber, gRPC, Solidity, Foundry, Rust, Anchor, PostgreSQL, Kubernetes, Keycloak]
status: active
year: 2026
featured: true
order: 2
repo: https://github.com/AllanKariuki/stablecoin-usdx-bridge
---

## Problem

USD-X is issued 1:1 against fiat held in segregated trust-bank accounts and lives natively on two chains: Ethereum for institutional, high-value settlement and Solana for fast, low-fee retail payments. Moving it between them must never create or lose supply, and total cross-chain supply must always reconcile to the bank reserves.

## What I built

A working subset of **DAMP** (a Digital Assets Management Platform):

- **Contracts:** a UUPS-upgradeable ERC-20 on Ethereum (Foundry) and an SPL mint owned by a program PDA on Solana (Anchor).
- **core-ledger (Go, Fiber):** a double-entry ledger first, bridge orchestrator second. Nothing moves value except a balanced journal entry. The journal is append-only (enforced by a database trigger), corrections are contra-entry reversals, running balances live on each entry row, and transactions balance per currency, with FX exposure surfaced in dedicated position accounts.
- **Bridge saga:** burn on the source chain, mint on the destination, with the ledger leg always posted before the chain leg it represents, so a crash leaves value visibly parked in suspense instead of doubled or lost. A failed mint re-mints on the source with a compensating entry.
- Issuance, redemption, FX and reserve-reconciliation flows; shared ABI and gRPC contracts; Kubernetes manifests and a Keycloak realm.

## Stack & architecture

Go (Fiber, gRPC), PostgreSQL, Solidity with Foundry, Rust with Anchor and SPL, Kubernetes and Keycloak, with gitleaks in CI. Apache Fineract was evaluated and rejected as the engine for a P95 ≤ 100 ms latency target, but its accounting model is the reference the ledger follows.

## Status / What's next

Active development of the core ledger and bridge orchestration.
