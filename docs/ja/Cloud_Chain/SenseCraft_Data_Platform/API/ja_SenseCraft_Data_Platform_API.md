---
sidebar_position: 1
description: SenseCAP API Introduction
title: SenseCraft Data Platform API Introduction
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecraft-data-platform/sensecraft-data-platform-api/sensecraft-data-platform-api
aliases:
  - /ja/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction
last_update:
  date: 02/14/2023
  author: Matthew
---

# SenseCraft データプラットフォーム API 概要


=============================

![](https://sensecap-docs.seeed.cc/images/open_api/introduction.png)

SenseCAP APIは、ユーザーがIoTデバイスとデータを管理するためのものです。HTTPプロトコル、MQTTプロトコル、Websocketプロトコルの3種類のAPIメソッドを組み合わせています。

*   HTTP APIを使用すると、ユーザーはLoRaおよびNB-IoTデバイスを管理し、RAWデータや履歴データを取得できます。
*   MQTT APIを使用すると、ユーザーはMQTTプロトコルを通じてセンサーのリアルタイム測定データを購読できます。
*   Websocket APIを使用すると、ユーザーはWebsocketプロトコルを通じてセンサーのリアルタイム測定データを取得できます。