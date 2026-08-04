---
sidebar_position: 1
description: 选择 SenseCraft Data Platform API 以进行设备管理、历史数据访问或实时设备消息订阅。
title: SenseCraft Data Platform API 简介
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
url: https://wiki.seeedstudio.com/cn/sensecraft-data-platform/sensecraft-data-platform-api/sensecraft-data-platform-api/
---

# SenseCraft Data Platform API 简介

![SenseCraft Data Platform API overview](https://sensecap-docs.seeed.cc/images/open_api/introduction.png)

SenseCraft Data Platform API 之前在文档中称为 SenseCAP API，它使应用能够管理受支持的物联网设备并访问其数据。

## 选择一个 API

| 目标 | API | 从这里开始 |
| --- | --- | --- |
| 管理设备和分组，或获取当前和历史数据 | HTTP API | [HTTP API 快速入门](/cn/sensecraft-data-platform/api/http-api/quick-start/) |
| 查看 HTTP 请求、响应和认证的详细信息 | HTTP API | [HTTP API 访问指南](/cn/sensecraft-data-platform/api/http-api/http-api-access-guide/) |
| 订阅实时设备消息 | Data OpenStream API | [Data OpenStream API 快速入门](/cn/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/) |
| 查看连接详情、主题以及发布-订阅模型 | Data OpenStream API | [Data OpenStream API 参考](/cn/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_reference/) |

Data OpenStream API 支持 MQTT 和基于 WebSocket 的 MQTT，用于实时消息订阅。请使用 Data OpenStream API 参考以获取当前主机、端口、认证和主题的详细信息。

有关计费规则和示例，请参阅 [SenseCraft Data Platform 的 API 计费](/cn/sensecraft-fee/sensecraft-data-platform-api-pricing/)。
