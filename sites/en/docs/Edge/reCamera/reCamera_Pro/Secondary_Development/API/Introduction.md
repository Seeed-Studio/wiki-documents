---
description: This page provides an overview of the API, informing you about the base address, protocol, and authentication method. Start by looking at this page to get a comprehensive understanding.
title: Introduction
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_introduction
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/recamera_pro_api_introduction/
---

# Introduction

reCamera RV1126B provides a set of HTTP-based Web APIs that allow you to retrieve device information, configure system parameters, manage networks, control audio and video, run AI inference, manage files, and perform firmware updates.

## Basic Information

| Item | Description |
|---|---|
| Device IP | Default `192.168.42.1`; actual address depends on your network |
| Protocol | HTTP or HTTPS |
| Base Path | `/cgi-bin/entry.cgi` |
| Content Type | `application/json` |
| Authentication | JWT Token via Cookie |

## URL Structure

All CGI API endpoints follow this structure:

```text
http://<DEVICE_IP>/cgi-bin/entry.cgi/<api_category>/<resource>/<sub_resource>
```

For example, to get device information:

```text
http://192.168.42.1/cgi-bin/entry.cgi/system/device-info
```

Some endpoints do not go through the CGI base path and are accessed directly, such as serial port and file APIs:

```text
http://<DEVICE_IP>/api/v1/device/serial-port
http://<DEVICE_IP>/api/v1/file?path=/mnt/sdcard/test.mp4
```

## Documentation Overview

| Document | Content |
|---|---|
| Quick Start | Log in and call your first API from scratch |
| Authentication | Login flow, Token usage, and password change |
| Common Conventions | Response format, field naming, error codes |
| API Reference | Detailed endpoint descriptions organized by function |
| Error Codes | Error code reference |
| FAQ | Frequently asked questions |


## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with various support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to meet different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
