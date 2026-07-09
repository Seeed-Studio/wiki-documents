---
description: 探索 Seeed 的 SenseCraft Cloud 服务——一款功能强大、工业级的平台，专为高效数据管理、实时运行和可扩展的 IoT 应用而设计。了解更多 SenseCraft 如何支持您的工业 IoT 云端部署。
title: Cloud
keywords:
  - SenseCraft Matrix
  - SenseCraft
  - SenseCraft AI
  - SenseCraft Cloud
  - 工业 IoT 云
  - 数据管理
  - 设备管理
  - 实时运行
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Cloud
last_update:
  date: 06/06/2025
  author: Jancee
createdAt: '2023-01-05'
updatedAt: '2026-03-23'
url: https://wiki.seeedstudio.com/cn/Cloud/
---


云服务是关键组成部分，用于承载来自计算板的处理后数据管理，并为用户提供实时操作能力。本页将介绍 Seeed 的工业级 SenseCraft 云服务，以及其他面向多样化工业 IoT 需求的云服务应用。通过强大的云基础设施，Seeed 使用户能够安全地存储、分析和利用处理后的数据，促进数据驱动的决策制定，并在各个领域提升运营效率。

## SenseCraft 云服务

<strong><font color={'8DC215'} size={"4"}>本节重点介绍 Seeed Studio 提供的不同云服务，这些服务针对多种工业 IoT 应用进行了定制。您可以在以下几个方面进一步探索：</font></strong>

- SenseCraft 生态系统与云服务目录。
- 各云产品的数据与设备管理使用说明
- 各类连接用途的 API
- 云服务简介

### SenseCraft 数据平台 / 区块链仪表盘

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>SenseCraft 数据平台</font></div>
            <p class="start_card_title" style={{textAlign: 'center'}}><font color={'FFFFFF'} size={"3"}>SenseCraft 数据平台为 SenseCAP 传感器节点和网关提供数据监控。</font></p>
    </div>
</div>

<div class="intro_container">
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>SenseCAP MX 仪表盘</font></div>
            <a href="/cn/sensecraft-blockchain/blockchain-dashboard/dashboard-basics" target="_blank"><span><font color={'FFFFFF'} size={"2"}>仪表盘基础</font></span></a>
            <br/>
            <a href="/cn/sensecraft-blockchain/blockchain-dashboard/dashboard-registration" target="_blank"><span><font color={'FFFFFF'} size={"2"}>仪表盘注册</font></span></a>
            <br/>
            <a href="/cn/sensecraft-blockchain/blockchain-dashboard/hotspot-registration" target="_blank"><span><font color={'FFFFFF'} size={"2"}>热点注册</font></span></a>
            <br/>
    </div>
    <div class="intro_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>SenseCraft 数据管理</font></div>
            <a href="/cn/sensecraft-data-platform/tutorials/data-management#table" target="_blank"><span><font color={'FFFFFF'} size={"2"}>表格视图中的详细数据</font></span></a>
            <br/>
            <a href="/cn/sensecraft-data-platform/tutorials/data-management#graph" target="_blank"><span><font color={'FFFFFF'} size={"2"}>图形视图中的图形化数据</font></span></a>
            <br/>
            <a href="/cn/sensecraft-data-platform/tutorials/data-management#check-account-info" target="_blank"><span><font color={'FFFFFF'} size={"2"}>账户信息</font></span></a>
            <br/>
    </div>
</div>

<div class="independent_container">
    <div class="independent_item" style={{textAlign: 'left'}}>
            <div class="independent_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"5"}>SenseCraft 设备管理</font></div>
            <a href="/cn/sensecraft-data-platform/tutorials/device-management#gateway" target="_blank"><span><font color={'FFFFFF'} size={"2"}><strong>SenseCAP 网关</strong> - 查看 EUI、名称、状态等信息。</font></span></a>
            <br/>
            <a href="/cn/sensecraft-data-platform/tutorials/device-management#node-group-management" target="_blank"><span><font color={'FFFFFF'} size={"2"}><strong>SenseCAP 节点分组</strong> - 通过分组便捷管理设备。</font></span></a>
            <br/>
            <a href="/cn/sensecraft-data-platform/tutorials/device-management#sensor-node-management" target="_blank"><span><font color={'FFFFFF'} size={"2"}><strong>SenseCAP 传感器节点</strong> - 查看 EUI、名称、状态、数据类型等信息。</font></span></a>
            <br/>
            <a href="/cn/sensecraft-data-platform/tutorials/device-management#general-information" target="_blank"><span><font color={'FFFFFF'} size={"2"}><strong>通用设备信息</strong> - 电池状态、最近在线记录等。</font></span></a>
            <br/>
            <a href="/cn/sensecraft-data-platform/tutorials/device-management#settings" target="_blank"><span><font color={'FFFFFF'} size={"2"}><strong>设置</strong> - 调整数据采集频率和其他设置。</font></span></a>
            <br/>
            <a href="/cn/sensecraft-data-platform/tutorials/device-management#location" target="_blank"><span><font color={'FFFFFF'} size={"2"}><strong>设备位置</strong></font></span></a>
            /
            <a href="/cn/sensecraft-data-platform/tutorials/device-management#bind-device" target="_blank"><span><font color={'FFFFFF'} size={"2"}><strong>设备绑定</strong></font></span></a>
            /
            <a href="/cn/sensecraft-data-platform/tutorials/device-management#channel" target="_blank"><span><font color={'FFFFFF'} size={"2"}><strong>设备通道</strong></font></span></a>
            /
            <a href="/cn/sensecraft-data-platform/tutorials/device-management#data" target="_blank"><span><font color={'FFFFFF'} size={"2"}><strong>设备数据</strong></font></span></a>
    </div>
</div>

### SenseCAP HotSpot APP

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>SenseCAP MX 区块链应用</font></div>
            <p>SenseCAP HotSpot App 用于在手机上管理 LoRaWAN 热点。</p>
            <br/>
            > <a href="/cn/sensecraft-blockchain/sensecraft-hotspot-app/download-app" target="_blank"><span><font color={'FFFFFF'} size={"3"}>下载</font></span></a> / <a href="/cn/sensecraft-blockchain/sensecraft-hotspot-app/hotspot-management" target="_blank"><span><font color={'FFFFFF'} size={"3"}>热点管理</font></span></a> / <a href="/cn/sensecraft-blockchain/sensecraft-hotspot-app/remote-reboot" target="_blank"><span><font color={'FFFFFF'} size={"3"}>远程重启</font></span></a> / <a href="/cn/sensecraft-blockchain/sensecraft-hotspot-app/hotspot-onboarding" target="_blank"><span><font color={'FFFFFF'} size={"3"}>热点接入</font></span></a>
    </div>
</div>

<br />
<br />

### SenseCraft APP

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>SenseCraft App</font></div>
            <p>SenseCraft App 用于在手机上配置、构建和管理传感器，并展示来自 SenseCraft 数据平台的数据。</p>
            <br/>
            > <a href="/cn/sensecraft-app/overview#download" target="_blank"><span><font color={'FFFFFF'} size={"3"}>下载</font></span></a> / <a href="/cn/sensecraft-app/overview#config" target="_blank"><span><font color={'FFFFFF'} size={"3"}>绑定设备</font></span></a> / <a href="/cn/sensecraft-app/overview#account" target="_blank"><span><font color={'FFFFFF'} size={"3"}>账户</font></span></a> / <a href="/cn/sensecraft-app/overview#user" target="_blank"><span><font color={'FFFFFF'} size={"3"}>用户</font></span></a>
    </div>
</div>

<br />
<br />

### SenseCraft AI

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>SenseCraft AI</font></div>
            <p>可以在 SenseCraft 数据平台和 SenseCraft App 中访问 SenseCraft AI。</p>
            <br/>
            > <a href="/cn/sensecraft-data-platform/applications/ai-advisor" target="_blank"><span><font color={'FFFFFF'} size={"3"}>入门指南</font></span></a>
            > <a href="/cn/sensecraft-data-platform/applications/planting-advice" target="_blank"><span><font color={'FFFFFF'} size={"3"}>连接 XIAO ESP32-C3</font></span></a>
    </div>
</div>

<br />
<br />

### SenseCAP 数据平台 - API

<div class="title_container">
    <div class="title_item" style={{textAlign: 'center'}}>
            <div class="start_card_title" style={{textAlign: 'center'}}><font color={'8DC215'} size={"6"}>SenseCraft 数据平台 - API</font></div>
            <p>SenseCraft 数据平台 API 支持设备和数据管理。</p>
            <br/>
            > <a href="https://sensecap-docs.seeed.cc/pdf/sensecap_opanapi_document_en.pdf" target="_blank"><span><font color={'FFFFFF'} size={"3"}>下载 PDF</font></span></a> / <a href="/cn/sensecraft-data-platform/sensecraft-data-platform-api/sensecraft-data-platform-api" target="_blank"><span><font color={'FFFFFF'} size={"3"}>API 介绍</font></span></a> / <a href="/cn/sensecraft-fee/sensecraft-data-platform-api-pricing" target="_blank"><span><font color={'FFFFFF'} size={"3"}>API 价格</font></span></a>
    </div>
</div>

<br />
