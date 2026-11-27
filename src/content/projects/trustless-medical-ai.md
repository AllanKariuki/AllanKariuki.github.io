---
title: Trustless Medical AI
summary: A hackathon platform on the Internet Computer that signs every chest X-ray diagnosis with threshold ECDSA and keeps an immutable audit trail.
domain: HealthTech
stack: [Rust, ICP, React, TypeScript, Tailwind CSS, Internet Identity]
status: prototype
year: 2024
featured: true
order: 6
repo: https://github.com/AllanKariuki/trustless-medical-ai
---

## Problem

If an AI gives a diagnosis, how does anyone later prove which result was produced, when, and that it wasn't altered? Centralised AI providers ask you to trust them.

## What I built

Built for the ICP Hackathon 2024:

- A **Rust canister** on the Internet Computer that analyses an uploaded chest X-ray (pneumonia detection with a confidence score) and **cryptographically signs each result with threshold ECDSA**.
- Stable storage for results, an **audit trail** with timestamps, and compliance reporting views.
- A **React + TypeScript** frontend with Internet Identity sign-in.

## Stack & architecture

Rust (ICP canister with stable structures), DFX, threshold ECDSA, Internet Identity, React, TypeScript and Tailwind CSS.

## Status / What's next

A hackathon build. The diagnostic engine uses a realistic simulation rather than a clinically validated model; the point was the trust layer: signing, verification and auditability.
