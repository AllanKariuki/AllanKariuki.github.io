---
title: DawaTrace
summary: Phone-camera computer vision plus serialized track-and-trace to catch counterfeit medicines in Kenya and East Africa.
domain: HealthTech
stack: [Go, Python, PyTorch, anomalib, PostgreSQL, PostGIS, TimescaleDB, Kotlin, ONNX]
status: active
year: 2026
featured: true
order: 1
repo: https://github.com/AllanKariuki/dawatrace
---

## Problem

Scratch-code schemes verify a *code*, not a *product*. One genuine code can be cloned onto thousands of fakes, codes leak from insiders, and genuine packaging gets refilled with fake contents. DawaTrace starts from that threat model: every check has to look at something physically bound to the pack, not just the serial printed on it.

## What I built

- A computer-vision spike that trains **PatchCore anomaly detection on genuine packaging only**, then calibrates a threshold at a false-positive rate of 1% or less, with score histograms, heatmaps and an ONNX export checked with ONNX Runtime.
- A **Go backend skeleton** for the serialization service: config, HTTP server, serial and scan packages, sqlc-generated queries over PostgreSQL and versioned migrations, with table-driven tests for the scan verdict logic.
- Scripts for preparing evaluation data and synthesising counterfeit-style perturbations, so the detector is measured, not assumed.

## Stack & architecture

Four planes: **enrollment** (GS1 SGTIN serials in a DataMatrix plus reference images), **provenance** (signed EPCIS 2.0 events), **verification** (an Android app combining a serial lookup with an on-device CV check into a green / amber / red verdict, never "fake" in consumer mode) and **intelligence** (scan events as time series for duplicate-scan and geo-anomaly detection). Go with chi, pgx and sqlc on the backend; PostgreSQL with TimescaleDB and PostGIS; PyTorch and anomalib for ML; Kotlin, CameraX and ML Kit on the phone.

## Status / What's next

Early: the CV spike and the Go backend skeleton exist; the serialization MVP, pharmacist-mode CV and the provenance network are planned phases, not built yet.
