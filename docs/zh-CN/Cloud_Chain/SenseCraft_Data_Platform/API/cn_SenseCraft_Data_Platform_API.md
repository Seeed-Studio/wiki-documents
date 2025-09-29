---
sidebar_position: 1
description: SenseCAP API Introduction
title: SenseCraft 数据平台 API 介绍
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecraft-data-platform/sensecraft-data-platform-api/sensecraft-data-platform-api
aliases:
  - /cn/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction
last_update:
  date: 02/14/2023
  author: Matthew
---

# SenseCraft 数据平台 API 介绍


=============================

![](https://sensecap-docs.seeed.cc/images/open_api/introduction.png)

SenseCAP API 供用户管理物联网设备和数据。它结合了三种类型的 API 方法：HTTP 协议、MQTT 协议和 Websocket 协议。

*   通过 HTTP API，用户可以管理 LoRa 和 NB-IoT 设备，获取原始数据或历史数据。
*   通过 MQTT API，用户可以通过 MQTT 协议订阅传感器的实时测量数据。
*   通过 Websocket API，用户可以通过 Websocket 协议获取传感器的实时测量数据。