---
title: Intelligent Parking Assistant
summary: Helps drivers find parking within a 1 km radius, using computer vision on parking-lot images to detect open spaces.
domain: Computer Vision
stack: [Python, Django, PostgreSQL, Computer Vision]
status: shipped
year: 2023
featured: false
order: 9
repo: https://github.com/Intelligent-Parking-Assistant/backend
---

## Problem

Finding parking in a busy city wastes time and fuel. The Intelligent Parking Assistant helps drivers find a free space within a 1 km radius and get there.

## What I built

- **Computer vision** analyses images of parking lots to detect open spaces.
- The app gives **directions to a free space**.
- **Payment rails** for parking-fee collection are built in, with rollout subject to discussions with the relevant authorities.

The Django backend exposes endpoints for:

- user registration and profiles;
- directions;
- search;
- recording visits.

## Stack & architecture

Python and Django with PostgreSQL, developed under the Intelligent-Parking-Assistant GitHub organisation.

## Status / What's next

Completed as a team project.
