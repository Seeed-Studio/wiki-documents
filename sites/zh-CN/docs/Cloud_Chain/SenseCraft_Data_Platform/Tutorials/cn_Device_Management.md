---
sidebar_position: 3
description: SenseCAP Portal Device Management
title: 设备管理
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /cn/sensecraft-data-platform/tutorials/device-management
aliases:
  - /cn/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management
last_update:
  date: 02/14/2023
  author: Matthew
---


这里为您提供了几种管理 SenseCAP 设备的方法，包括网关管理、节点组管理和传感器节点管理。

## 网关

① 根据 EUI、频率、状态和注册时间筛选网关。
② 网关列表，显示 EUI、名称、状态等信息。
③ 点击 EUI 进入设备详情页面，查看基本信息、位置、绑定等。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-1.jpg)

## 节点组管理

您可以通过分组方便地管理设备。您可以创建新组、删除组或将设备移动到某个组。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-2.jpg)

## 传感器节点管理

在传感器节点页面，您可以看到绑定到您账户的所有传感器节点。
① 设备包含"LoRa"和"NB-IoT"等类型，可以按类别查看。
② 筛选条件，根据 EUI、频率、组、状态和注册时间筛选节点。
③ 传感器节点列表，显示 EUI、名称、状态、数据类型等信息。
④ 点击 EUI 进入设备详情页面。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-3.jpg)

## 常规信息

在常规信息页面，您可以设置设备名称，并检查设备状态、电池状态、最近在线记录等。

- 电池状态：如果显示"电池不足"，表示电池电量低于 10%。
- 最近在线记录：网关将在几分钟内离线，其他设备将稍后离线（通常是三个上传间隔）。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-4.jpg)

## 通道

单通道设备：只有一个通道，这意味着节点只能连接一个探头，如 LoRaWAN 传感器节点。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-5.jpg)
多通道设备：具有多个通道，可以连接多个传感器探头，如传感器集线器。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-6.jpg)

## 数据

您可以查看每个通道的周期数据，以及设备状态数据。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-7.jpg)

## 设置

只读密钥/完全访问密钥：这与 API 一起使用。
设备设置：调整设备的数据采集频率，范围从 5 到 43,200 分钟。新的采集频率将在设备下次上传数据时生效。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-8.jpg)

## 位置

如果设备具有 GPS 功能，位置信息将在此处自动更新。
如果设备没有 GPS，您可以手动设置 GPS："搜索位置" - "地图标点" - "设为地址"。

:::note
使用设备的 GPS 时，请尽量将设备放置在室外，上方无遮挡。
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-9.jpg)

## 绑定设备

如果您想将设备更改到另一个账户或删除设备，可以在此页面进行操作。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-10.jpg)