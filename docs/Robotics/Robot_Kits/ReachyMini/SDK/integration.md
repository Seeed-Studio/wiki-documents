---
description: Guide to building and publishing Reachy Mini apps, integrating LLMs, using JavaScript web apps, and accessing the HTTP/WebSocket API.
title: Integrations & Apps
slug: /reachymini_sdk_integration
keywords:
- integration
- apps
- llm
- hugging face
- web apps
- rest api
- websocket
- ai
- publishing
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Integrations & Apps

Reachy Mini is designed for AI Builders. Here is how to integrate LLMs and share your work.

## Building an App
We provide a CLI tool to generate, check and publish a standard App structure (compatible with Hugging Face Spaces).

*See our blog post tutorial: [Make and Publish Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)*

## JavaScript Web Apps
Want a zero-install, cross-platform app that runs in the browser? Check out the [JavaScript SDK & Web Apps](javascript-sdk.md) guide — build static Hugging Face Spaces that control your robot over WebRTC from any device, including your phone.

## HTTP & WebSocket API
Building a dashboard or a non-Python controller? The Daemon exposes full control via REST.

* **Docs:** `http://localhost:8000/docs`
* **Get State:** `GET /api/state/full`
* **WebSocket:** `ws://localhost:8000/api/state/ws/full`

## AI Experimentation Tips

* **Conversation Demo:** Check out our reference implementation combining VAD (Voice Activity Detection), LLMs, and TTS: [reachy_mini_conversation_demo](https://github.com/pollen-robotics/reachy_mini_conversation_demo).
