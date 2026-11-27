---
title: Hazina — Neo-banking App
summary: A Flutter consumer banking app for East Africa with OTP and PIN auth, send money, M-PESA top-up, transactions and savings goals.
domain: Mobile
stack: [Flutter, Dart, Riverpod, go_router, dio, Keycloak, Django]
status: prototype
year: 2026
featured: true
order: 5
repo: https://github.com/AllanKariuki/banking-mobile-app
---

## Problem

"Your money, simplified": a mobile-first banking experience shaped around how people in East Africa actually move money, including M-PESA.

## What I built

- **Auth:** phone OTP login, a custom 6-dot PIN pad (no system keyboard) and biometrics, against Keycloak-issued JWTs from a Django backend, with automatic access-token refresh.
- **Security UX:** a biometric gate after 5 minutes in the background, a 15-minute cooldown after 3 failed PIN attempts, and auto-logout after 30 minutes idle. Tokens and the PIN hash live in secure storage.
- **Flows:** onboarding, home dashboard, send money, M-PESA STK-push top-up, transactions list, savings overview with goal creation, and profile.

## Stack & architecture

Flutter and Dart, Riverpod for state, go_router with auth-aware redirects, and dio with a JWT refresh interceptor, organised by feature (auth, home, send, top-up, bills, withdraw, savings, card and so on).

## Status / What's next

The flows above are implemented. KYC document capture, business onboarding (KYB), per-biller bill forms, virtual card controls and some settings pages are scaffolded stubs still to be filled in.
