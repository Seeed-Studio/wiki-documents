---
sidebar_position: 1
description: デバイス管理、履歴データへのアクセス、またはリアルタイムのデバイスメッセージ購読には、SenseCraft Data Platform API をお選びください。
title: SenseCraft Data Platform API 概要
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/sensecraft-data-platform-api/sensecraft-data-platform-api
aliases:
  - /Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2025-07-04'
url: https://wiki.seeedstudio.com/ja/sensecraft-data-platform/sensecraft-data-platform-api/sensecraft-data-platform-api/
---

# SenseCraft Data Platform API 概要

![SenseCraft Data Platform API overview](https://sensecap-docs.seeed.cc/images/open_api/introduction.png)

以前は SenseCAP API として文書化されていた SenseCraft Data Platform API は、対応する IoT デバイスの管理と、そのデータへのアクセスをアプリケーションから行えるようにします。

## API を選択する

| 目的 | API | スタートガイド |
| --- | --- | --- |
| デバイスおよびグループを管理する、または現在および履歴データを取得する | HTTP API | [HTTP API クイックスタート](/ja/sensecraft-data-platform/api/http-api/quick-start/) |
| HTTP リクエスト、レスポンス、および認証の詳細を確認する | HTTP API | [HTTP API アクセスガイド](/ja/sensecraft-data-platform/api/http-api/http-api-access-guide/) |
| リアルタイムのデバイスメッセージを購読する | Data OpenStream API | [Data OpenStream API クイックスタート](/ja/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/) |
| 接続の詳細、トピック、および publish-subscribe モデルを確認する | Data OpenStream API | [Data OpenStream API リファレンス](/ja/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_reference/) |

Data OpenStream API は、リアルタイムメッセージ購読のために MQTT および WebSocket 上の MQTT をサポートします。最新のホスト、ポート、認証、トピックの詳細については Data OpenStream API リファレンスを参照してください。

課金ルールと例については、[SenseCraft Data Platform の API 料金](/ja/sensecraft-fee/sensecraft-data-platform-api-pricing/)を参照してください。
