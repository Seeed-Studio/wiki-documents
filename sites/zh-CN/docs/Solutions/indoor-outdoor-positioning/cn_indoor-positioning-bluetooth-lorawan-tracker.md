---
title: 基于 LoRaWAN 的蓝牙室内定位系统
description: 一种使用 SenseCAP Tracker 的可靠室内定位解决方案。它将蓝牙用于精确位置跟踪，并结合 LoRaWAN 进行远距离数据传输，实现轻松部署。
keywords:
  - Bluetooth
  - LoRaWAN
  - SenseCAP Tracker
  - Indoor Positioning
  - Asset Tracking
  - SOS
  - Campus Safety
slug: /solutions/indoor-positioning-bluetooth-lorawan-tracker
sidebar_position: 1
last_update:
  date: 05/31/2026
  author: Spencer
createdAt: '2025-09-10'
updatedAt: '2026-05-31'
url: https://wiki.seeedstudio.com/cn/solutions/indoor-positioning-bluetooth-lorawan-tracker/
---

## 介绍

### 概述

室内定位是许多行业的常见挑战。虽然像 UWB 这样的高精度系统已经存在，但它们往往成本高且部署复杂。本方案通过结合两种强大的无线技术，提供了一种灵活且具性价比的替代方案：使用 **Bluetooth Low Energy (BLE)** 进行位置感知，使用 **LoRaWAN** 实现远距离、低功耗数据传输。

该系统基于 [SenseCAP T1000 Tracker](/cn/SenseCAP_T1000_tracker/Introduction) 构建，支持两种不同的定位模式，可根据需求在精度和电池寿命之间进行平衡：

1. **高精度跟踪（三角定位）：** 当追踪器检测到来自**三个或更多** BLE Beacon 的信号时，它可以在地图上计算出自身精确的 (x, y) 坐标。此模式非常适合用于资产或人员移动轨迹跟踪，可定期或在发生移动时提供精确位置更新。

2. **基于区域的定位（接近）：** 当追踪器仅在一个或两个 Beacon 的覆盖范围内时，它会根据距离最近的 Beacon 来判断自身位置。此模式非常适合更简单的场景，例如自动签到、确认资产是否在指定房间内，或通过降低上报频率来节省电量。

通过同时支持这两种方式，本方案为各种室内跟踪应用提供了一个多功能且易于部署的系统，从简单的在场检测到更精细的基于坐标的监控都能胜任。

:::tip 使用 SenseCraft Solution 数分钟内完成部署

让该系统最快运行起来的方式，是在 **SenseCraft Solution** 平台上使用 **[校园级 BLE Beacon 定位系统](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)**。

点击 **Deploy**，选择套件规模（**Starter / Standard / Enterprise**），SenseCraft Solution 会引导你完成每一步——为你安装定位应用（无需手动输入 Docker 命令），并指导完成 Beacon、网关和追踪器的配置。

👉 **[部署此解决方案 →](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)**

:::

:::tip 前往我们的套装页面

访问我们的 [室内与室外一体化定位](https://www.seeedstudio.com/Indoor-Outdoor-Integrated-Positioning.html) 套装页面，获取实现本方案所需的全部产品。

:::

### 关键特性与优势

- **高性价比且可扩展**：利用价格亲民的 BLE Beacon，无需在每个房间都部署昂贵的网关。
- **远距离数据传输**：单个 LoRaWAN 网关即可覆盖整栋建筑或整个校园，大幅降低基础设施成本。
- **即时 SOS 告警**：追踪器内置一键求救按钮，按下后会立即通过 LoRaWAN 发送 SOS 告警，实现快速应急响应。
- **智能电源管理**：通过内置加速度计，追踪器可以仅在检测到移动时上报位置，其余时间只发送周期性的“心跳”信号。这样可显著延长电池寿命，在许多资产跟踪应用中，优化配置后电池续航可长达 6 个月。
- **部署简单**：部署 BLE Beacon 和 LoRaWAN 网关的过程十分简单，可快速让你的定位系统上线运行。
- **开箱即用**：几分钟内即可让整个系统运行起来——在 [SenseCraft Solution](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan) 平台上一键部署，或在自建环境中通过一条 Docker 命令完成。该应用也完全[开源](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)，方便你进行自定义开发。

### 应用场景

<div class="info-section">
    <div class="section-header">
        <h2>应用场景</h2>
        <p>本方案非常适合各类基于区域的跟踪与安全应用：</p>
    </div>
    <ul class="info-list">
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div><div class="info-content"><h3>校园与学校安全</h3><p>为学生和教职员工配备可穿戴追踪器。内置的 SOS 按钮可让他们在校园任意位置一键发送紧急告警及其最后已知位置，带来安心保障并实现更快速的应急响应。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg></div><div class="info-content"><h3>资产管理</h3><p>跟踪贵重资产的位置，包括室内和室外（例如停车场中的车辆）。可以将追踪器配置为仅在发生移动时上报，从而节省电量，同时在出现未经授权的移动时及时告警。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" /></svg></div><div class="info-content"><h3>自动签到与人员管理</h3><p>通过调节 BLE Beacon 的信号强度，你可以为办公室或养老院创建一个“签到”区域。当佩戴追踪器的人进入该区域时，其在场信息会被自动记录。</p></div></li>
    </ul>
</div>

### 系统架构

该系统基于一个简单而强大的原理运行：移动追踪器监听固定 Beacon 发出的信号，并将其“听到”的信息上报到中央服务器。

![系统架构示意图](https://media-cdn.seeedstudio.com/media/wysiwyg/IoT_Device/_163.png)

### 前置条件

主要组件包括：

1. **BLE Beacon**：这些是安装在已知位置（例如房间入口、关键区域）的微型固定发射器，它们会持续广播一个唯一 ID。
2. **SenseCAP T1000 Tracker**：这是安装在你希望跟踪的资产或人员上的移动设备。它会扫描附近的 BLE Beacon，并识别信号最强的那个。
3. **LoRaWAN 网关**：追踪器通过 LoRaWAN 向网关发送包含最近 BLE Beacon ID 的数据包。
4. **网络与应用服务器**：网关将数据转发到 LoRaWAN 网络服务器（[SenseCraft Data](https://sensecap.seeed.cc/portal)），然后再由其路由到应用服务器。应用服务器保存 Beacon ID 与其真实物理位置的映射，从而可以确定追踪器的位置（例如：“追踪器 #58 靠近 Beacon #12，位于 3 号会议室”）。

在开始之前，请确保你具备以下条件：

- 一台 SenseCAP T1000 Tracker
- 一个或多个 BLE Beacon
- 一台已连接互联网的 LoRaWAN 网关
- 一台已安装 Docker 的服务器或电脑

<div class="seeed-features-container">
    <div class="seeed-features-grid">

  <!-- Card 1: SenseCAP T1000 Tracker -->
  <div class="seeed-feature-card">
      <div class="card-header">
          <h2><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html">SenseCAP T1000 Tracker</a></h2>
          <p>具备 BLE 扫描能力的 LoRaWAN® 移动追踪器</p>
      </div>
      <div class="card-body">
          <ul class="features-list">
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <p><span class="highlight">BLE Beacon 检测：</span>支持 BLE 5.1，实现精确的室内与室外定位。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" />
                      </svg>
                  </div>
                  <p><span class="highlight">广域网络：</span>支持 LoRaWAN® Class A(v1.0.4) 连接，实现远距离、低功耗通信。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  </div>
                  <p><span class="highlight">运动检测：</span>内置加速度计，可实时感知运动与静止状态。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                  </div>
                  <p><span class="highlight">紧急按钮：</span>独立 SOS 按钮，一键触发紧急警报。</p>
              </li>
          </ul>
      </div>
  </div>

  <!-- Card 2: BLE Beacons -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/BC01-Indoor-Bluetooth-Beacon-p-5791.html">BLE Beacons</a></h2>
        <p>常规蓝牙广播</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </div>
                <p><span class="highlight">协议兼容：</span>Bluetooth® LE 5.0 | 完全支持 iBeacon 和 Eddystone 格式。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                </div>
                <p><span class="highlight">灵活部署：</span>可配置发射功率，以调整覆盖半径。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-2">
                    <path d="M4 7.75A.75.75 0 0 1 4.75 7h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 8.25v-.5Z" />
                    <path fill-rule="evenodd" d="M3.25 4A2.25 2.25 0 0 0 1 6.25v3.5A2.25 2.25 0 0 0 3.25 12h8.5A2.25 2.25 0 0 0 14 9.75v-.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V6.25A2.25 2.25 0 0 0 11.75 4h-8.5ZM2.5 6.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-3.5Z" clip-rule="evenodd" />
                </svg>
                </div>
                <p><span class="highlight">持久续航：</span>在标准设置下电池寿命最长可达 <span class="highlight">2 年</span>。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.938a3.375 3.375 0 002.456 2.456L21 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                </div>
                <p><span class="highlight">安装便捷：</span>自带背胶，可轻松安装在墙面或其他表面。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <p><span class="highlight">广播范围：</span>室外最远 75 米，室内开阔区域最远 120 米。</p>
            </li>
        </ul>
    </div>
</div>

  <!-- Card 3: SenseCAP M2 Multi-Platform Gateway -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html">SenseCAP M2 Multi-Platform Gateway</a></h2>
        <p>LoRaWAN® 网络基础设施</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <p><span class="highlight">广覆盖：</span>室内覆盖半径最长可达 <span class="highlight">2 km</span>，确保信号稳定。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <p><span class="highlight">海量连接：</span>支持超过 <span class="highlight">200</span> 台设备同时接入，性能优异。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                </div>
                <p><span class="highlight">多种回传：</span>提供包括以太网、Wi-Fi 和 4G 在内的多种网络回传选项。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                    </svg>
                </div>
                <p><span class="highlight">一体化方案：</span>内置本地 LoRaWAN 服务器能力，简化网络部署与管理。</p>
            </li>
        </ul>
    </div>
  </div>
</div>
</div>

## 入门指南

<div align="center">
<img class='img-responsive' width="1280" src="https://mermaid.ink/img/pako:eNo9jk9vwjAMxb9K5HOp2tE_JIdJQDcuO41phzUcotYtFW0SpYkYVHz3BSrmk9_Pz_aboFI1AoOmV-fqKIwlH59cEl_rcm-9PpDF4pVsygJ1ry5kg6JScpzpttyjdZrshMWzuMyweFrXWs_krdwq2XStM0i-jKhOaObBe_ndjU703RVnsPPOQfdo8cAlBNCargZmjcMABjSDuEuY7gE52CMOyIH5thbmxIHLm9_RQv4oNTzXjHLtEVgj-tErp2uftehEa8TwTw3KGs1WOWmB0Sh9HAE2wS-wLA6XeULzlyyL0piuaBLABVgc0ZBmeZymyTJa0SjJbgFcH3-jcJWntz-sxGvR?type=png" alt="Indoor positioning 2d map"/>
</div>

部署该系统有两种方式 —— 为 **步骤 2** 选择其中一种：

- **推荐 —— SenseCraft 方案（引导式）：** 打开[解决方案页面](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)，点击 **Deploy**，并选择套件规模。SenseCraft 方案会为你安装定位应用，并从头到尾引导硬件搭建。
- **手动 —— 使用 Docker 自建部署：** 更倾向于自行运行？请使用 [步骤 2](#step-2-install-the-positioning-application) 中描述的 Docker 手动部署路径。

无论采用哪种方式，每次部署都遵循相同的五个阶段：

1. **部署 Beacon**：在整个设施的关键位置放置 BLE Beacon。创建一份地图或列表，记录每个 Beacon 的唯一 ID 及其物理位置（例如，`Beacon_ID_01: "Main Entrance"`，`Beacon_ID_02: "Warehouse Zone A"`）。
2. **设置网关**：将 LoRaWAN 网关连接到互联网，并将其配置为把数据包转发到你选择的 LoRaWAN 网络服务器。
3. **部署应用程序**：安装现成的 SenseCraft 室内定位应用程序——可以通过 SenseCraft Solution 一键部署，或使用 Docker 自建部署（参见 [Step 2](#step-2-install-the-positioning-application)）。无需自定义后端代码。
4. **配置追踪器**：激活 SenseCAP T1000，并将其接入你的 LoRaWAN 网络服务器。确保其被配置为 BLE 扫描模式。
5. **可视化**：当追踪器在设施中移动时，它会上报最近的 Beacon，你的应用程序可以在仪表盘或地图上显示其位置。

### 步骤 1：设置你的硬件

首先，你需要在场地中部署物理设备。

#### **1a. 部署 Beacon**

:::info
如需完整技术规格，请参考 **[BC01 室内蓝牙 Beacon 文档](/cn/bluetooth_beacon_for_SenseCAP_Traker/)**。
:::

首先在场地内的关键位置放置 **BLE（Bluetooth Low Energy，低功耗蓝牙）Beacon**——例如**主入口、仓库和办公区域**。
<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/10.5.png" alt="Indoor positioning 2d map"/>
</div>

请参考下方视频，获取将 Beacon 信息添加到系统中的分步指南。
你也可以查看 [Tips 部分](#tips)以获得更多帮助。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

<details>
<summary>BC01 Beacon 参数快速查看</summary>

| 参数           | 默认值                                |
| -------------- | ------------------------------------ |
| UUID           | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major          | 10001                                |
| Minor          | 19641                                |
| Measured power | -59dBm                               |
| Tx Power       | -30 - +4dBm，默认 0dBm               |
| Adv Interval   | 100ms~10s，默认 500ms                |
| Password       | seeed123（字母和数字）               |
| Device Name    | BC01（1-7 个字符）                   |
| Soft Reboot    | seeed123（与密码相同）               |

</details>

#### 1b. 设置网关

启动你的 **LoRaWAN 网关** 并将其连接到互联网。  
接下来，根据你所使用的**网络服务器**，按照下方说明进行操作。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="sensecap-portal" label="SenseCraft Data" default>

默认情况下，LoRaWAN 网关会将数据转发到 [**SenseCraft Data**](https://sensecap.seeed.cc/portal/) 平台（原 **SenseCAP Portal**）。

1. 按照[官方用户手册](/cn/quick_start_with_M2_MP)操作，确保你的网关已**在线**并**关联到你的账号**。  
2. 一旦连接验证通过，你就可以**继续下一步（步骤 2）**。

</TabItem>

<TabItem value="chirpstack" label="ChirpStack（本地 LoRaWAN 服务器）">

如果你使用的是与网关集成的**自建 ChirpStack** 服务器，你需要**重定向网关数据**并**准备解码脚本**。

1. **配置网关：** 按照本指南[将网关的上行数据重定向到 ChirpStack](/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/)。  
2. **下载解码脚本：** ChirpStack 需要解码器来解析来自 T1000 追踪器的数据。请下载下方脚本，以便在后续配置步骤中使用。
    - [**下载 T1000 解码脚本**](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)
    **注意：** 此脚本应添加到 **ChirpStack Application Settings** 中，而不是添加到网关设备本身。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-for-chripstack.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

</TabItem>
</Tabs>

### 步骤 2：安装定位应用程序

定位应用程序是一个轻量级 Web 服务（单个 Docker 容器），通过 MQTT 接收追踪器数据并渲染实时地图。它有两种安装方式——选择适合你的方式即可。

如果你想先体验界面，可以查看[在线演示](https://indoorpositioning-demo.seeed.cc/)。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png" alt="Indoor positioning application preview"/>
</div>

<Tabs>
<TabItem value="sensecraft-solution" label="SenseCraft Solution（推荐）" default>

最简单的方式——无需终端，无需手动输入命令。

1. 打开 **[园区级 BLE Beacon 定位系统](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)** 解决方案页面。
2. 点击 **Deploy** 并选择你的套件规格（**Starter / Standard / Enterprise**）。
3. SenseCraft Solution 会为你安装定位应用程序——可以安装在本地电脑，或通过 SSH 安装到远程服务器——并在服务就绪后自动打开仪表盘。

当仪表盘打开后，继续前往 [Step 3](#step-3-configure-the-application) 以连接你的 LoRaWAN 数据源。

</TabItem>

<TabItem value="manual-docker" label="手动（Docker）">

更倾向于自建？在你的服务器上打开终端并运行以下命令：

```shell
docker run -p 5173:5173 \
--name indoor-positioning \
--restart unless-stopped \
-v ./db:/app/db/ \
-v ./config:/app/server/config/json \
-v ./uploads:/app/uploads \
-d seeedcloud/sensecraft-indoor-positioning
```

> 💡 注意：如果在 Windows 上运行该命令，请使用 PowerShell 而不是 CMD 终端。
> 中国大陆用户可以使用 [chsrc](https://chsrc.run/) 切换 Docker 镜像源以加快拉取速度。

**该命令的作用：**

- 下载并启动 SenseCraft 室内定位应用程序容器。
- `-p 5173:5173` 使 Web 仪表盘可以通过端口 `5173` 访问。
- 挂载本地目录：
  - `/app/db/` → 存储数据库和地图。
  - `/app/server/config/json` → 存储配置文件。
  - `/app/uploads` → 存储上传的文件。
- `-d` 以后台方式运行应用程序。

</TabItem>
</Tabs>

---

当应用程序运行后，在浏览器中访问：

👉 `http://<your_server_ip>:5173`

此时你应该能看到运行在服务器上的 SenseCraft 室内定位仪表盘。

:::info 登录凭据

- **Username:** `admin`
- **Password:** `83EtWJUbGrPnQjdCqyKq`
:::

### 步骤 3：配置应用程序

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="app-configuration-management"/>
</div>

#### 3a. 运行时配置（连接到 LoRaWAN）

使用此设置将应用程序连接到你的 LoRaWAN 网络服务器并接收追踪器数据。
应用程序可以同时连接到 **SenseCraft Data** 和 **本地 ChirpStack 服务器**。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-server-runtime-configuration.png" alt="app-server-runtime-configuration"/>
</div>

在仪表盘中启用一个或两个 MQTT 数据源：

##### 连接到 SenseCraft Data

1. 打开 **SenseCAP OpenStream MQTT**。
2. 输入你的 **Username** 和 **API Key**——从 [Data OpenStream API 快速入门指南](/cn/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/)中获取。

##### 连接到 ChirpStack

1. 打开 **ChirpStack MQTT**。
2. 输入**服务器地址**和**Application ID**——MQTT 主题会自动填充。你可以在 ChirpStack 应用页面找到 Application ID。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/chirpstack-application-id.png" alt="chirpstack-application-id"/>
</div>

> **注意：** `{clientID}` 字段是自动生成的，请不要编辑。  
> **重要：** 每次修改后，请重启 Docker 容器以使更新生效。

##### 其他设置

这些选项可以随时更改（无需重启）：

- **Authentication** – 更新仪表盘登录凭据。
- **Area Positioning** – 当 Beacon 信号较弱或稀疏时，估算追踪器的大致位置。
- **Tracker Access Control** – 限制哪些设备可以被定位（对所有设备开放或基于白名单）。
- **Webhook** – 通过 HTTP POST 将位置信息推送到你的服务。

#### 3b. 地图和 Beacon 配置

点击 `Create` 创建你的第一张地图。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="Application Configuration Management"/>
</div>

在此面板中上传你的**地图数据**。
目前，演示版本仅支持导入包含**折线实体**的 **类 GeoJSON 格式** 文件。
下面是一个示例 JSON 模板供参考：

```json
{
  "map": {
    "width": 29.53000000000094,
    "height": 22.212853765822828,
    "entities": [
      {
        "type": "polyline",
        "points": [
          [12.894968342021272, 17.07477114091087],
          [12.894968342021272, 17.114771140910868]
        ],
        "closed": false
      },
      {
        "type": "polyline",
        "points": [
          [12.944968342021284, 17.114771140910868],
          [12.894968342021272, 17.07477114091087]
        ],
        "closed": false
      }
    ]
  },
  "beacons": {}
}
```

此 JSON 使用基于坐标的**折线（polyline）**定义了一个**二维楼层布局**，用于表示墙体或边界等地图元素。
当前演示版本不支持其他几何类型。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/import-map-geo-json.png" alt="import-map-geo-json"/>
</div>

2. **添加 Beacon**

在 Beacons 部分，添加每个 Beacon 的 MAC 地址、ID 和位置。
你可以使用在[步骤 1a](#1a-部署-beacons)中创建的列表，直接将它们放置在已上传的地图上。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/maps-add-beacons.png" alt="maps-add-beacons"/>
</div>

3. **调整环境因子（可选）**

通过调整信号强度（**RSSI**）转换为距离的方式，微调定位精度。

- 默认值（约 2.0）在开阔区域表现良好。
- 对于复杂的室内环境，可尝试 **1.8 到 4.0** 之间的数值。
- 先使用默认设置，如有需要再进行调整。

### 步骤 4：激活并可视化你的 Tracker

最后一步是打开你的 Tracker，并在地图上查看它。

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/tracker-visualize-on-map.png" alt="tracker-visualize-on-map"/>
</div>

1. **激活 SenseCAP T1000 Tracker** 并将其接入你的 LoRaWAN 网络服务器。确保网关在线，并且 Tracker 设备已在 LNS 服务器上“注册”。详情请查看[步骤 1b](#1b-设置网关)。
2. **确保其设置为 BLE 扫描模式**，以便能够检测到 Beacon。可参考下方视频获取帮助。
3. **可视化：** 当 Tracker 在你的场地中移动时，它会检测最近的 Beacon 并上报其位置。你将在仪表盘的地图上看到其图标在移动。

<div style={{ textAlign: 'center' }}>
<video width="480" height="640" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-tracker-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<p><em>在使用 ChirpStack 时，选择 `Other Platform`。</em></p>
<p><em>在使用 SenseCraft Data 时，保留默认平台设置（The Things Network 使用 SenseCAP）。</em></p>
</div>

## 应用功能概览

### 功能 1：数据推送（Webhook & WebSocket）

你可以通过两种方式从系统获取实时数据：

- **Webhook：** 如配置中所述，它会将数据推送到你提供的 URL。
- **WebSocket：** 对于实时应用，你可以使用 Basic HTTP Authentication 连接到 `/ws` 端点。`sos`、`tracker_update`（三角定位）和 `tracker_location_approximate`（区域定位）的数据格式在原始文档提供的 JSON 示例中有详细说明。

#### **数据格式**

<Tabs>
<TabItem value="sos" label="SOS 告警" default>

```json
{
    "type": "tracker_sos",
    "data": {
        "2CF7F1C0530004AD": {
            "timestamp": 1756967508000,
            "sos": 0
        }
    }
}
```

</TabItem>
<TabItem value="trilateration" label="三角定位/多边定位">

```json
{
    "type": "tracker_update",
    "data": {
        "2CF7F1C0530003BD": {
            "trackerId": "2CF7F1C0530003BD",
            "timestamp": 1756967455550,
            "position": {
                "x": 11.1,
                "y": 12.3
            },
            "last_detected_beacons": [
                {
                    "macAddress": "C3:00:00:56:4B:5D",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -79,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:3E:7D:AA",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:13:3C:99",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                }
            ],
            "position_history": [],
            "map": "10 Floor",
            "sos": 2
        }
    }
}
```

</TabItem>
<TabItem value="area" label="区域定位">

```json
{
    "type": "tracker_location_approximate",
    "data": {
        "2CF7F1C0530004AD": {
            "trackerId": "2CF7F1C0530004AD",
            "timestamp": 1756967098851,
            "radius": 5.248074602497725,
            "last_detected_beacons": [
                {
                    "txPower": -59,
                    "rssi": -77,
                    "name": "corner",
                    "configured_x": 32.41,
                    "configured_y": 21.26,
                    "macAddress": "C3:00:00:56:4B:59"
                }
            ],
            "map": "10.5 Floor",
            "sos": 0
        }
    }
}
```

</TabItem>
</Tabs>

### 功能 2：两种定位模式

系统支持两种定位方式：

1. **三角定位：** 当 Tracker 检测到**三个或更多** Beacon 时，会计算出精确的 (x, y) 坐标。这是默认且最精确的模式。
2. **邻近（区域定位）：** 如果你启用了该功能，而 Tracker 只能检测到**一个** Beacon，它会将自身位置上报为在计算半径内“接近”该 Beacon。此模式有助于确保所有区域都有覆盖。

*三角定位*

<table align="center">
<tr>
    <th>三角定位</th>
    <th>三角定位（SOS）</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/三角定位-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/三角定位-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

*区域定位*

<table align="center">
<tr>
    <th>区域定位</th>
    <th>区域定位（SOS）</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

### 功能 3：查看告警历史

你可以通过点击地图上的 Tracker 图标，查看其告警历史（例如 SOS 按钮触发记录）。系统会记录每一次新的告警，并在告警未解除前持续推送通知。

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/alert-history-records.png" alt="alert-history-records"/>
</div>

### 功能 4：按 Beacon UUID 过滤

你可以根据 Tracker 关联的 Beacon UUID，在地图上过滤显示的 Tracker。这可以更有针对性地监控特定区域或资产，并且其取值设计为不易被篡改。

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/sensecraft-ble-filter.png" alt="sensecraft-ble-filter"/>
</div>

## 参考与资源

- **使用 SenseCraft 方案部署**：[校园级 BLE Beacon 定位系统](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan) — 一键引导式部署
- **Docker 镜像**：[seeedcloud/sensecraft-indoor-positioning - Docker Hub](https://hub.docker.com/r/seeedcloud/sensecraft-indoor-positioning)
- **源代码**：[Solution_IndoorPositioning_H5 - GitHub](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)
- **在线演示站点**：[IndoorPositioning](https://indoorpositioning-demo.seeed.cc/)

## 提示

以下是一些有用的提示，可帮助你更高效地部署和配置 Beacon：

### 1. 记录 Beacon 信息

**强烈建议**将每个 Beacon 的**唯一 MAC 地址**与其**安装位置**一并记录下来。  
这在[软件配置步骤](#3b-地图和-beacon-配置)中将**至关重要**，并帮助你在映射或排障时**轻松识别和选择**正确的 Beacon。

| **MAC 地址** | **位置**         | **Beacon ID** |
| --------------- | ---------------- | ------------- |
| c30000564b31    | 主入口           | 01            |
| c30000564b32    | 仓库 A 区        | 02            |
| c30000564b33    | 角落办公室       | 03            |

### 2. 为所有 Beacon 使用统一的 UUID

为了便于管理，你可以使用 **SenseCraft app** 为所有 Beacon 分配统一的 **UUID**。  
这样可以确保你的 Tracker 只监听**你自己的设备**，并**忽略附近的其他 Beacon**。  
更多详情请查看[功能 4：按 Beacon UUID 过滤](#功能-4：按-beacon-uuid-过滤)。

### 3. 选择稳定的安装位置

将 Beacon 安装在**固定、开阔且无遮挡**的区域，以确保稳定的蓝牙信号。  
避免将其放置在可能造成干扰的**金属表面**、**配电箱**或 **Wi-Fi 路由器**附近。

### 4. 标记并固定每个 Beacon

贴上与记录表一致的**可见标签**（例如，Beacon-01、Beacon-02），以避免在维护过程中产生混淆。  
确保设备被**牢固安装**，以防止意外移位。

### 5. 验证信号覆盖范围

在最终确定安装位置之前，使用 BLE 扫描应用或配置工具测试**信号覆盖范围**，以确保在目标区域内能够被**持续检测**。

### 6. 快速添加或调整 Beacon 数据

如果你使用的是 *类 GeoJSON* 的配置文件，你也可以直接编辑导出的地图文件，以快速添加或调整 Beacon 数据，然后重新导入到应用中。

```json
{
  "map": {
    "width": 29.53000000000094,
    "height": 22.212853765822828,
    "entities": [
      {
        "type": "polyline",
        "points": [
          [12.894968342021272, 17.07477114091087],
          [12.894968342021272, 17.114771140910868]
        ],
        "closed": false
      },
      {
        "type": "polyline",
        "points": [
          [12.944968342021284, 17.114771140910868],
          [12.894968342021272, 17.07477114091087]
        ],
        "closed": false
      }
    ]
  },
  "beacons": {
    "beacon-01": {
      "uuid": "FDA50693-A4E2-4FB1-AFCF-C6EB07647825",
      "major": 10001,
      "minor": 19641,
      "x": 26.38,
      "y": 4.4,
      "txPower": -59,
      "displayName": "Corner",
      "macAddress": "C3:00:00:58:4B:38",
    }
  }
}
```

> 提示：当你需要一次性添加多个 Beacon，或在控制台之外精细调整其坐标时，直接编辑 JSON 会非常有用。

## 常见问题

<details>
<summary>为什么我的追踪器没有上报位置信息？</summary>

- **可能原因：** LoRaWAN 连接可能存在问题。
- **解决方案：** 检查 LoRaWAN 网关的状态，确保其在线并已连接。同时，确认追踪器的 Device EUI 已在网络服务器上正确注册。

</details>

<details>
<summary>为什么追踪器的位置不准确？</summary>

- **可能原因：** 你的 BLE Beacon 的放置方式可能导致干扰或信号覆盖较弱。
- **解决方案：** 尝试调整 Beacon 的发射功率。你也可能需要重新安放它们，以减少来自墙体或机械设备的信号遮挡。

</details>

<details>
<summary>为什么追踪器的电池耗电这么快？</summary>

- **可能原因：** 上报频率设置过高，导致设备比实际需要更频繁地发送数据。
- **解决方案：** 优化运动检测设置，仅在追踪器移动时上报。你也可以增加上报间隔（位置更新之间的时间）以节省电量。

</details>

<details>
<summary>为什么位置信息缺失或没有显示？</summary>

- **可能原因：** 数据库或 API 可能存在问题，通常与数据载荷的解析方式有关。
- **解决方案：** 首先确认应用服务器上的载荷解码器是否正确且工作正常。如果解码器无误，请检查应用服务器日志中是否存在错误或连接问题。

</details>

<details>
<summary>为什么 SOS 警报没有被及时接收？</summary>

- **可能原因：** LoRaWAN 网络可能拥塞，或者设备类别不适合用于紧急消息。
- **解决方案：** 对于 SOS 警报这类对时间敏感的应用，请确保你的追踪器被配置为使用 **Class C 模式**。这会让设备的接收机持续开启，从而可以立即接收来自服务器的消息。

</details>

<details>
<summary>如何调整 BC01 Beacon 的广播间隔和发射功率？</summary>

你可以使用 **SenseCraft 应用**来配置 BC01 Beacon。

1. 从 [Google Play Store](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate) 或 [Apple App Store](https://apps.apple.com/us/app/sensecraft/id1619944834) 安装 SenseCraft 应用。
2. 打开应用，并在手机上启用蓝牙。
3. 扫描附近的 Beacon，并选择你希望配置的那一个。
4. 输入默认密码“**seeed123**”以访问设置。
5. 根据需要调整广播间隔（100ms 到 10s）和发射功率（-30dBm 到 +4dBm）。
6. 保存更改。

</details>

## 更新日志

**2026-05-29：**

- 重构部署指南，使其以 **SenseCraft Solution** 一键引导式部署（入门版 / 标准版 / 企业版套件）为主，将手动 Docker 自建部署保留为备选路径。
- 新增部署行动引导，并刷新“参考与资源”链接，使其指向 [校园级 BLE Beacon 定位系统](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)解决方案页面；新增 GitHub 源码链接。

**2025-11-10：**

- 重新编写 Beacon 部署和网关设置指南，以澄清放置最佳实践、参考资料，以及针对 SenseCraft Data 和 ChirpStack 的网络服务器特定说明。
- 扩展运行时配置以及地图 / Beacon 设置章节，加入更清晰的界面指引、GeoJSON 导入示例，以及针对环境因素的可选调优建议。
- 新增专门的提示章节，涵盖 Beacon 记录管理、UUID 管理、安装固定、验证以及批量编辑，使部署更易于扩展和排障。
