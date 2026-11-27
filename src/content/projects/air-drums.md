---
title: Augmented Reality Air Drums
summary: Play drums in the air. A webcam tracks your hand movements and plays stored drum sounds.
domain: Computer Vision
stack: [Python, MediaPipe, OpenCV]
status: prototype
year: 2026
featured: false
order: 8
repo: https://github.com/AllanKariuki/air-drums
---

## Problem

A fun computer-vision experiment: can a plain laptop webcam turn hand movements into a playable instrument?

## What I built

- Real-time tracking of **both hands** from the webcam, using MediaPipe's 21-point hand landmarks.
- **Fingertip positions mapped to virtual drum zones**, so striking the air over a zone plays that drum's sound.
- Gesture detection experiments, including a thumbs-up gesture.

## Stack & architecture

Python with OpenCV for the webcam loop and MediaPipe for hand landmarks.

## Status / What's next

A prototype that runs locally. Porting it to the browser would let anyone play it straight from this page.
