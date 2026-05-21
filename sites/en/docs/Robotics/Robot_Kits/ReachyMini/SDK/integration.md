---
description: Integrations and apps guide for Reachy Mini covering app building, JavaScript SDK, HTTP/WebSocket API, and AI experimentation tips.
title: Integrations & Apps
slug: /reachymini_sdk_integration
keywords:
  - integrations
  - apps
  - LLM
  - javascript sdk
  - web apps
  - REST API
  - websocket
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_sdk_integration/
---

# Integrations & Apps

Reachy Mini is designed for AI Builders. Here is how to integrate LLMs and share your work.

## Building an App

We provide a CLI tool to generate, check and publish a standard App structure (compatible with Hugging Face Spaces). See the full guide: **[Building & Publishing Apps](/reachymini_sdk_apps)**.

## JavaScript Web Apps
Want a zero-install, cross-platform app that runs in the browser? Check out the [JavaScript SDK & Web Apps](/reachymini_sdk_javascript-sdk) guide — build static Hugging Face Spaces that control your robot over WebRTC from any device, including your phone.

## HTTP & WebSocket API
Building a dashboard or a non-Python controller? The Daemon exposes full control via REST.

* **Docs:** `http://localhost:8000/docs`
* **Get State:** `GET /api/state/full`
* **WebSocket:** `ws://localhost:8000/api/state/ws/full`

## AI Experimentation Tips

* **Conversation Demo:** Check out our reference implementation combining VAD (Voice Activity Detection), LLMs, and TTS: [reachy_mini_conversation_demo](https://github.com/pollen-robotics/reachy_mini_conversation_demo).
* **Custom vision/audio pipelines:** If your AI pipeline needs direct camera or microphone access (e.g. a custom OpenCV detector, Whisper with sounddevice), you can deactivate the built-in media manager with `media_backend="no_media"`. See [Disabling Media](/reachymini_sdk_media-architecture#disabling-media--direct-hardware-access) for details.