---
title: Neural Networks from Scratch
summary: Building an autograd engine and character-level language models by hand, following Karpathy's micrograd and makemore.
domain: Learning
stack: [Python, Jupyter, Graphviz]
status: learning
year: 2026
featured: false
order: 11
repo: https://github.com/AllanKariuki/learning-neural-networks-micrograd
---

## Problem

It's easy to use deep-learning frameworks without really knowing what happens inside them. I'm going back to fundamentals and building the pieces myself.

## What I built

- **micrograd:** a scalar-valued autograd engine with a forward pass, backpropagation over a topologically sorted graph, and Graphviz visualisations of the computation graph.
- **makemore:** character-level language models trained on a names dataset, from a bigram model to a multilayer perceptron, in [a separate repo](https://github.com/AllanKariuki/language-modelling-makemorefile-lesson).

## Stack & architecture

Python and Jupyter notebooks, with Graphviz for visualising graphs.

## Status / What's next

Ongoing: working through the rest of the series.
