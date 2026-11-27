---
title: Language Translator (English ⇄ Kiswahili)
summary: Fine-tuned NLLB-200 for English⇄Kiswahili translation, served through a Gradio demo and a FastAPI service.
domain: AI/ML
stack: [Python, PyTorch, Hugging Face, NLLB-200, CTranslate2, FastAPI, Gradio, pytest]
status: active
year: 2026
featured: true
order: 3
repo: https://github.com/AllanKariuki/language-translator
---

## Problem

Good machine translation for East African languages is still scarce. I wanted a translator for English⇄Kiswahili that I could train and run myself, and that extends to other local languages later.

## What I built

- A data pipeline that cleans an English–Swahili parallel corpus (~210k sentence pairs) and splits it 96/2/2 into train, validation and a held-out test set.
- Fine-tuning of **NLLB-200 (distilled, 600M)**, small enough to train on an Apple Silicon Mac (MPS).
- Evaluation with BLEU and chrF on the held-out split, against the base model as a baseline.
- Conversion to **CTranslate2 int8** for much faster CPU inference.
- A live translation REPL, a self-contained **Gradio** web demo, and a **FastAPI** service with `/translate` and a `/feedback` endpoint for thumbs-up/down ratings.

## Stack & architecture

Python, PyTorch and Hugging Face Transformers for training; CTranslate2 for inference; Gradio and FastAPI for serving; pytest for tests.

## Status / What's next

NLLB-200 already covers Kikuyu, Luo, Kamba, Luganda, Somali and Amharic, so adding a new local language is mostly a data problem, not a modelling one. Expanding beyond Kiswahili is next.
