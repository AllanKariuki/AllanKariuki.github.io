---
title: Budget Tracker
summary: An Android app that reads M-PESA, bank and card SMS, records and auto-labels each transaction, and asks you each evening about anything it wasn't sure of.
domain: Fintech
stack: [Kotlin, Jetpack Compose, StateFlow, WorkManager, Gradle]
status: prototype
year: 2026
featured: true
order: 4
repo: https://github.com/AllanKariuki/budget-tracker-app
---

## Problem

In Kenya most spending leaves a trail of SMS confirmations from M-PESA and banks, but nobody wants to copy them into a spreadsheet. The data is already on the phone; it just needs reading.

## What I built

- **Live SMS capture** plus an inbox back-fill of the last 60 days, with a catch-up every time the app opens.
- A **parser** covering M-PESA send, paybill, till, withdraw, airtime, Fuliza, M-Shwari and reversals, plus generic bank, card and Airtel messages, backed by unit tests.
- **Auto-labelling** in layers: learned rules, then channel, then Kenyan merchant keywords, then a low-confidence fallback. Anything under 70% confidence is flagged for review.
- **It learns:** labelling a transaction once labels future (and pending) transactions from the same counterparty automatically.
- An **8 PM reconciliation notification** (WorkManager) that brings up whatever still needs a label.

## Stack & architecture

Kotlin and Jetpack Compose, with an in-memory `StateFlow` store persisted to a local JSON ledger. Storage sits behind a single seam so cloud sync can be added later. Everything stays on the device.

## Status / What's next

Works when sideloaded. Google Play restricts SMS permissions, so distribution will be a direct APK download.
