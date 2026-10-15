---
sidebar_position: 3
description: SenseCAP Portal 设备管理
title: 设备管理
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/tutorials/device-management
aliases:
  - /Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/cn/sensecraft-data-platform/tutorials/device-management/
---


这里为你提供多种管理 SenseCAP 设备的方法，包括网关管理、节点分组管理和传感器节点管理。

## 网关

- ① 根据 EUI、频率、状态和注册时间筛选网关。
- ② 网关列表，显示 EUI、名称、状态等信息。
- ③ 点击 EUI 进入设备详情页面，查看基本信息、位置、绑定情况等。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-1.jpg)

## 节点分组管理

你可以通过分组来方便地管理设备。你可以创建新分组、删除分组或将设备移动到某个分组。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-2.jpg)

## 传感器节点管理

在传感器节点页面，你可以看到所有绑定到你账号的传感器节点。
- ① 设备包含 “LoRa” 和 “NB-IoT” 等类型，可以按类别查看。
- ② 筛选条件，可根据 EUI、频率、分组、状态和注册时间筛选节点。
- ③ 传感器节点列表，显示 EUI、名称、状态、数据类型等信息。
- ④ 点击 EUI 进入设备详情页面。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-3.jpg)

## 常规信息

在常规信息页面，你可以设置设备名称，并查看设备状态、电池状态、最近上线记录等信息。

- 电池状态：如果显示 “Insufficient Battery”，表示电量低于 10%。
- 最近上线记录：网关会在几分钟内离线，其他设备会在之后离线（通常为三个上传周期）。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-4.jpg)

## 通道

单通道设备：只有一个通道，这意味着节点只能连接一个探头，例如 LoRaWAN 传感器节点。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-5.jpg)
多通道设备：具有多个通道，可以连接多个传感器探头，例如 Sensor Hub。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-6.jpg)

## 数据

你可以查看每个通道的周期数据，以及设备状态数据。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-7.jpg)

## 设置

只读密钥 / 完全访问密钥：与 API 搭配使用。
设备设置：调整设备的数据采集频率，范围为 5 到 43,200 分钟。新的采集频率将在设备下次上传数据时生效。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-8.jpg)

## 位置

如果设备具有 GPS 功能，位置信息会在此处自动更新。
如果设备没有 GPS，你可以手动设置 GPS：“Search location” - “Map punctuation” - “Set as address”。

:::note
使用设备自带 GPS 时，请尽量将设备放置在户外且上方无遮挡的位置。
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-9.jpg)

## 绑定设备
如果你想绑定新设备，请进入 **Dashboard** 页面并点击 **Bind Device**。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview2.png" /></div>

输入设备 EUI 和 KEY 即可完成绑定。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview3.png" /></div>

如果你想将设备更换到另一个账号或删除设备，可以在此页面进行操作。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-10.jpg)
