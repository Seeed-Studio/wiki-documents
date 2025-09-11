---
title: "基于蓝牙和 LoRaWAN 的室内定位系统"
description: "使用 SenseCAP Tracker 的可靠室内定位解决方案。它结合蓝牙进行精确位置跟踪和 LoRaWAN 进行长距离数据传输，实现简单部署。"
keywords:
  - Bluetooth
  - LoRaWAN
  - SenseCAP Tracker
  - Indoor Positioning
  - Asset Tracking
  - SOS
  - Campus Safety
slug: /cn/solutions/indoor-positioning-bluetooth-lorawan-tracker
sidebar_position: 1
last_update:
  date: 09/10/2025
  author: Spencer
---

## 介绍

### 概述

室内定位是许多行业面临的共同挑战。虽然像 UWB 这样的高精度系统存在，但它们可能成本高昂且复杂。此解决方案通过结合两种强大的无线技术提供了一个灵活且经济高效的替代方案：**低功耗蓝牙（BLE）**用于位置感知，**LoRaWAN**用于长距离、低功耗数据传输。

该系统围绕[SenseCAP T1000 Tracker](/cn/SenseCAP_T1000_tracker/Introduction)构建，支持两种不同的定位模式，让您可以根据需要在精度和电池寿命之间取得平衡：

1.  **高精度跟踪（三角测量）：** 当跟踪器检测到来自**三个或更多**BLE 信标的信号时，它可以计算出其在地图上的精确（x，y）坐标。此模式非常适合跟踪资产或人员的移动，定期或在发生移动时提供准确的位置更新。

2.  **基于区域的定位（邻近性）：** 当跟踪器仅在一个或两个信标的范围内时，它根据与最近信标的邻近性来识别其位置。此模式非常适合更简单的用例，如自动签到、确认资产在指定房间内，或通过较少频率的位置报告来节省电池寿命。

通过支持这两种方法，此解决方案为广泛的室内跟踪应用提供了一个多功能且易于部署的系统，从简单的存在检测到更详细的基于坐标的监控。

:::tip 导航到我们的套装页面

查看我们的[室内外集成定位](https://www.seeedstudio.com/Indoor-Outdoor-Integrated-Positioning.html)套装页面，获取实施此解决方案所需的所有产品。

:::

### 主要特性和优势

- **经济高效且可扩展**：利用经济实惠的 BLE 信标，避免在每个房间安装昂贵网关的需要。
- **长距离数据传输**：单个 LoRaWAN 网关可以覆盖整栋建筑或校园，大幅降低基础设施成本。
- **即时 SOS 警报**：跟踪器包含紧急按钮，按下时立即通过 LoRaWAN 发送 SOS 警报，实现快速应急响应。
- **智能电源管理**：通过使用内置加速度计，跟踪器可以仅在检测到移动时报告，否则发送定期"心跳"信号。这大大延长了电池寿命，在许多资产跟踪应用的最佳设置下可达 6 个月。
- **简单部署**：设置 BLE 信标和 LoRaWAN 网关非常简单，让您的定位系统快速上线。
- **开源软件**：该项目完全开源，允许您使用我们的[GitHub 仓库](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)构建和定制自己的后端服务器。

### 使用案例

<div class="info-section">
    <div class="section-header">
        <h2>使用案例</h2>
        <p>此解决方案非常适合广泛的基于区域的跟踪和安全应用：</p>
    </div>
    <ul class="info-list">
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div><div class="info-content"><h3>校园和学校安全</h3><p>为学生和教职员工提供可穿戴跟踪器。内置 SOS 按钮允许他们从校园任何地方立即发送带有最后已知位置的紧急警报，提供安心感并实现更快的响应时间。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg></div><div class="info-content"><h3>资产管理</h3><p>跟踪有价值资产的位置，包括室内和室外（例如停车场中的车辆）。配置跟踪器仅在移动时报告，节省电池同时确保您收到未经授权移动的警报。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" /></svg></div><div class="info-content"><h3>自动签到和人员管理</h3><p>通过调整 BLE 信标的信号强度，您可以为办公室或养老院创建"签到"区域。当佩戴跟踪器的人进入该区域时，他们的存在会自动记录。</p></div></li>
    </ul>
</div>

### 系统架构

该系统基于一个简单而强大的原理运行。移动跟踪器监听来自固定信标的信号，并将它们听到的内容报告给中央服务器。

![系统架构图](https://media-cdn.seeedstudio.com/media/wysiwyg/IoT_Device/_163.png)

### 先决条件

主要组件包括：

1. **BLE 信标**：这些是放置在已知位置（例如房间入口、关键区域）的小型固定发射器。它们持续广播唯一 ID。
2. **SenseCAP T1000 Tracker**：这是附加到您想要跟踪的资产或人员的移动设备。它扫描附近的 BLE 信标并识别信号最强的那个。
3. **LoRaWAN 网关**：跟踪器通过 LoRaWAN 向网关发送包含最近 BLE 信标 ID 的数据包。
4. **网络和应用服务器**：网关将数据转发到 LoRaWAN 网络服务器（[SenseCraft Data](https://sensecap.seeed.cc/portal)），然后将其路由到应用服务器。应用服务器保存信标 ID 及其真实世界位置的地图，使其能够确定跟踪器的位置（例如，"跟踪器#58 在信标#12 附近，该信标位于会议室 3"）。

开始之前，请确保您具备以下条件：

- 一个 SenseCAP T1000 Tracker
- 一个或多个 BLE 信标
- 一个连接到互联网的 LoRaWAN 网关
- 一台安装了 Docker 的服务器或计算机

<div class="seeed-features-container">
    <div class="seeed-features-grid">

  <!-- Card 1: SenseCAP T1000 Tracker -->
  <div class="seeed-feature-card">
      <div class="card-header">
          <h2><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html">SenseCAP T1000 Tracker</a></h2>
          <p>具有 BLE 扫描功能的 LoRaWAN®移动跟踪器</p>
      </div>
      <div class="card-body">
          <ul class="features-list">
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <p><span class="highlight">BLE 信标检测：</span>支持 BLE 5.1，实现精确的室内外定位。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" />
                      </svg>
                  </div>
                  <p><span class="highlight">广域网络：</span>LoRaWAN® Class A（v1.0.4）连接，实现长距离、低功耗通信。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  </div>
                  <p><span class="highlight">运动检测：</span>内置加速度计，实现实时运动和静止状态感知。</p>
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
        <h2><a href="https://www.seeedstudio.com/BC01-Indoor-Bluetooth-Beacon-p-5791.html">BLE 信标</a></h2>
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
                <p><span class="highlight">协议兼容：</span> Bluetooth® LE 5.0 | 完全支持 iBeacon 和 Eddystone 格式。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                </div>
                <p><span class="highlight">灵活部署：</span> 可配置传输功率以调整覆盖半径。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-2">
                    <path d="M4 7.75A.75.75 0 0 1 4.75 7h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 8.25v-.5Z" />
                    <path fill-rule="evenodd" d="M3.25 4A2.25 2.25 0 0 0 1 6.25v3.5A2.25 2.25 0 0 0 3.25 12h8.5A2.25 2.25 0 0 0 14 9.75v-.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V6.25A2.25 2.25 0 0 0 11.75 4h-8.5ZM2.5 6.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-3.5Z" clip-rule="evenodd" />
                </svg>
                </div>
                <p><span class="highlight">持久耐用：</span> 标准设置下电池寿命长达 <span class="highlight">2 年</span>。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.938a3.375 3.375 0 002.456 2.456L21 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                </div>
                <p><span class="highlight">安装简便：</span> 配备背胶，可轻松安装在墙壁或其他表面。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <p><span class="highlight">广播范围：</span> 室外最远 75 米，开阔室内区域最远 120 米。</p>
            </li>
        </ul>
    </div>
</div>

  <!-- Card 3: SenseCAP M2 Multi-Platform Gateway -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html">SenseCAP M2 多平台网关</a></h2>
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
                <p><span class="highlight">广域覆盖：</span> 室内覆盖半径高达 <span class="highlight">2 公里</span>，确保信号稳定。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <p><span class="highlight">大规模连接：</span> 支持超过 <span class="highlight">200</span> 台设备同时连接，性能卓越。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                </div>
                <p><span class="highlight">多种回传方式：</span> 提供多种网络回传选项，包括以太网、Wi-Fi 和 4G。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                    </svg>
                </div>
                <p><span class="highlight">集成解决方案：</span> 内置本地 LoRaWAN 服务器功能，简化网络部署和管理。</p>
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

1. **部署信标**：在设施的关键位置放置 BLE 信标。创建地图或列表，记录每个信标的唯一 ID 及其物理位置（例如，`Beacon_ID_01: "主入口"`，`Beacon_ID_02: "仓库 A 区"`）。
2. **设置网关**：将 LoRaWAN 网关连接到互联网，并配置其将数据包转发到您选择的 LoRaWAN 网络服务器。
3. **部署应用程序**：在应用服务器上，创建逻辑将报告的信标 ID 映射回您在第 3 步中记录的物理位置。
4. **配置追踪器**：激活 SenseCAP T1000 并将其接入您的 LoRaWAN 网络服务器。确保其配置为 BLE 扫描模式。
5. **可视化**：当追踪器在设施中移动时，它将报告最近的信标，您的应用程序可以在仪表板或地图上显示其位置。

### 步骤 1：设置硬件

首先，您需要在设施中设置物理设备。

#### **1a. 部署信标**

:::info
有关完整的技术详细信息，请参阅 **[BC01 室内蓝牙信标文档](/cn/bluetooth_beacon_for_SenseCAP_Traker/)**。
:::

首先，将您的 **BLE 信标** 放置在设施的关键位置，例如主入口、仓库和办公室。

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/10.5.png" alt="Indoor positioning 2d map"/>
</div>

接下来，为自己创建一个列表（模板）来记录每个信标的 **唯一 MAC 地址** 及其物理位置。此记录对于软件配置步骤是 **必需的**。

**示例记录：**

```csv
MAC Address,Location,Beacon ID
c30000564b31,"Main Entrance",01
c30000564b32,"Warehouse Zone A",02
c30000564b33,"Corner Office",03
```

下面的视频展示了您稍后如何使用此列表将信标添加到应用程序地图中。现在创建准确的记录将使软件设置变得更加容易。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

**专业提示：** 为了更容易管理，您可以使用 **SenseCraft 应用程序** 为所有信标设置一致的 **UUID**。这有助于确保跟踪器只监听您的设备并忽略其他设备。查看 [功能 4：按信标 UUID 过滤](https://www.google.com/search?q=%23feature-4-filter-by-beacon-uuid) 了解更多详情。

<details>
<summary>BC01 信标参数快速查看</summary>

| 参数 | 默认值 |
|------------|---------------|
| UUID | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major | 10001 |
| Minor | 19641 |
| 测量功率 | -59dBm |
| 发射功率 | -30 - +4dBm，默认 0dBm |
| 广播间隔 | 100ms~10s，默认 500ms |
| 密码 | seeed123（字母和数字） |
| 设备名称 | BC01（1-7 个字符） |
| 软重启 | seeed123（与密码相同） |

</details>

#### 1b. 设置网关

首先，打开您的 **LoRaWAN 网关** 并将其连接到互联网。从这里开始，步骤取决于您使用的网络服务器。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="sensecap-portal" label="SenseCraft Data" default>

如果您使用默认的 [SenseCraft Data](https://sensecap.seeed.cc/portal/)（原 SenseCAP Portal）平台，您的网关已经预配置好了。

1. 按照 [官方用户手册](/cn/quick_start_with_M2_MP) 确保网关在线并连接到您的账户。
2. 完成后，您可以 **继续进行步骤 2**。

  </TabItem>
  <TabItem value="chirpstack" label="ChirpStack（本地 LoRaWAN 服务器）">

如果您使用自托管的 **ChirpStack** 服务器，您需要重新指向网关并准备解码器脚本。

1. **配置网关：** 按照此指南 [将网关数据重定向到 ChirpStack](/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/)。
2. **下载解码器：** ChirpStack 需要解码器来理解 T1000 跟踪器发送的数据。现在下载脚本，以便在后续步骤中使用。

    - [**下载 T1000 解码器脚本**](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)

    **注意：** 您需要在 **ChirpStack 应用程序设置** 中添加此脚本，而不是在网关本身上。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-for-chripstack.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

  </TabItem>
</Tabs>

### 步骤 2：安装定位应用程序

接下来，您将使用 Docker 在服务器上安装主应用程序。或者您可以先查看 [演示](https://indoorpositioning-demo.seeed.cc/)。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png" alt="Indoor positioning application preview"/>
</div>

#### 运行安装命令

在服务器上打开终端并运行以下命令：

```bash
docker run -p 5173:5173 -p 8022:8022 --name indoor-positioning --restart unless-stopped -v /data/indoor-positioning/db/:/app/db/ -d seeedcloud/sensecraft-indoor-positioning
```

**此命令的作用：**

- 它下载并启动 SenseCraft 室内定位应用程序。
- `-p 5173:5173` 使 Web 仪表板可在端口 `5173` 上访问。
- `-v /data/indoor-positioning/db/:/app/db/` 告诉应用程序将其数据库和地图存储在您机器上的 `/data/indoor-positioning/db/` 文件夹中。
- `-d` 在后台运行应用程序。

运行命令后，您可以通过打开 Web 浏览器并访问 `http://<your_server_ip>:5173` 来访问仪表板。

### 步骤 3：配置应用程序

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="app-configuration-management"/>
</div>

现在，在浏览器中打开应用程序仪表板来配置系统设置。

#### 3a. 运行时配置（连接到 LoRaWAN）

此设置将应用程序连接到您的 LoRaWAN 网络服务器以接收跟踪器数据。一个关键功能是 **应用程序支持同时连接到 SenseCraft Data 平台和 ChirpStack 服务器。**

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-server-runtime-configuration.png" alt="app-server-runtime-configuration"/>
</div>

在仪表板中，您可以启用以下一个或两个 MQTT 源来连接到您的网络服务器。

##### 连接到 SenseCraft Data

1. 启用 **SenseCAP OpenStream MQTT** 开关。
2. 输入您的 **用户名** 和 **API 密钥**。
      - 您可以按照 [Data OpenStream API 快速入门指南](https://www.google.com/search?q=/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/) 生成这些凭据。

##### 连接到 ChirpStack

1. 启用 **ChirpStack MQTT** 开关。
2. 输入您的 ChirpStack **服务器地址** 和 **应用程序 ID**。
      - MQTT 主题字段将自动更新。您可以在 ChirpStack 中应用程序的主页面找到 **应用程序 ID**。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/chirpstack-application-id.png" alt="chirpstack-application-id"/>
</div>

---

**注意：** `{clientID}` 字段由系统使用，将在启动时替换为随机 ID。您无需更改它。

**重要：** 启用或更改任何这些设置后，您必须 **重启应用程序**（Docker 容器）才能使其生效。

##### 其他设置

以下设置可以随时更改，无需重启应用程序：

- **身份验证：** 更新用于登录应用程序仪表板的用户名和密码。
- **区域定位：** 当可用的信标信号太少无法进行精确的多点定位时，启用此选项来估算跟踪器的位置。
- **跟踪器访问控制：** 配置允许哪些设备向应用程序发送数据。您可以允许来自任何设备的数据，或创建授权跟踪器的特定列表。
- **Webhook：** 启用此功能可使用 HTTP POST 请求将位置结果推送到您自己的服务。

#### 3b. 地图和信标配置

在此步骤中，您将使用应用程序的仪表板上传您的平面图并添加您之前物理部署的信标。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="Application Configuration Management"/>
</div>

1. 上传您的地图
首先，进入配置菜单并上传您的平面图图像。建议使用 PNG 或 JPG 等标准图像格式。
2. 添加您的信标
进入"信标"部分。使用您在 [步骤 1a](#1a-部署信标) 中创建的列表，添加每个信标的信息（如其 MAC 地址）。最简单的方法是直接点击您刚上传的地图上信标的位置。
3. 调整环境因子（可选）
这是一个高级设置，用于微调位置精度。它通过考虑您的特定环境来帮助系统将信号强度（RSSI）转换为更准确的距离。
    - 对于开放空间，默认值 ~2.0 通常就足够了。
    - 对于有许多墙壁和障碍物的复杂室内区域，您可能需要将值调整在 1.8 到 4.0 之间。
    - **建议：** 最好从默认设置开始。如果需要提高定位精度，您可以稍后回来调整它。

### 步骤 4：激活并可视化您的跟踪器

最后一步是打开您的跟踪器并在地图上查看它。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/tracker-visualize-on-map.png" alt="tracker-visualize-on-map"/>
</div>

1. **激活 SenseCAP T1000 跟踪器** 并将其加入到您的 LoRaWAN 网络服务器。确保您的网关在线且跟踪器设备已在 LNS 服务器上"注册"。详情请查看 [步骤 1b](#1b-设置网关)。
2. **确保它设置为 BLE 扫描模式** 以便它可以检测信标。查看下面的视频获取帮助。
3. **可视化：** 当跟踪器在您的设施中移动时，它将检测最近的信标并报告其位置。您将在仪表板上看到其图标在地图上移动。

<div style={{ textAlign: 'center' }}>
<video width="480" height="640" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-tracker-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<p><em>使用 ChirpStack 时，选择 `Other Platform`。</em></p>
<p><em>使用 SenseCraft Data 时，保留默认平台设置（SenseCAP for The Things Network）。</em></p>
</div>

## 应用功能概述

### 功能 1：数据推送（Webhook 和 WebSocket）

您可以通过两种方式从系统获取实时数据：

- **Webhook：** 如配置中所述，这会将数据推送到您提供的 URL。
- **WebSocket：** 对于实时应用，您可以使用基本 HTTP 身份验证连接到 `/ws` 端点。原始文档中提供的 JSON 示例详细说明了 `sos`、`tracker_update`（三边测量）和 `tracker_location_approximate`（邻近）的数据格式。

#### **数据格式**

<Tabs>
<TabItem value="sos" label="SOS 警报" default>

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
<TabItem value="trilateration" label="三边测量/多边测量">

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

系统支持两种定位方法：

1. **三边测量（Trilateration）：** 当追踪器检测到**三个或更多**信标时，它会计算出精确的 (x, y) 坐标。这是默认且最准确的模式。
2. **邻近定位（区域定位）：** 如果启用此功能并且追踪器只能检测到**一个**信标，它将报告自己的位置为“接近”该信标，并给出计算半径。这对于确保所有区域的覆盖非常有用。

*三边测量*

<table align="center">
<tr>
    <th>三边测量</th>
    <th>三边测量 (SOS)</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

*区域定位*

<table align="center">
<tr>
    <th>区域定位</th>
    <th>区域定位 (SOS)</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

### 功能 3：查看告警历史

你可以通过点击地图上任意追踪器的图标来查看其告警历史（例如 SOS 按钮的按下记录）。系统会记录每次新的告警，并会持续推送该告警的通知，直到其被解决。

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/alert-history-records.png" alt="alert-history-records"/>
</div>

### 功能 4：按 Beacon UUID 筛选

你可以通过 Beacon UUID 筛选地图上显示的追踪器。这允许对特定区域或资产进行更有针对性的监控，并且能提高安全性防止被攻击。

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/sensecraft-ble-filter.png" alt="sensecraft-ble-filter"/>
</div>

## 参考与资源

- **落地页**: [SenseCraft 室内定位解决方案](https://cc.seeedstudio.com/solutions/campus-safety-management)
- **Docker 镜像**: [seeedcloud/sensecraft-indoor-positioning - Docker Hub](https://hub.docker.com/r/seeedcloud/sensecraft-indoor-positioning)
- **在线演示站点**: [IndoorPositioning](https://indoorpositioning-demo.seeed.cc/)

## 常见问题 FAQ

<details>
<summary>为什么我的追踪器没有报告位置？</summary>

- **可能原因：** LoRaWAN 连接可能存在问题。
- **解决方案：** 检查 LoRaWAN 网关状态，确保其在线并已连接。同时确认追踪器的 Device EUI 已正确注册到你的网络服务器。

</details>

<details>
<summary>为什么追踪器的位置不准确？</summary>

- **可能原因：** 你的 BLE 信标的放置可能导致干扰或信号覆盖不足。
- **解决方案：** 尝试调整信标的发射功率。也可以重新安置信标以减少墙壁或机器造成的信号阻挡。

</details>

<details>
<summary>为什么追踪器的电池耗电这么快？</summary>

- **可能原因：** 报告频率设置过高，导致设备过于频繁地传输数据。
- **解决方案：** 优化运动检测设置，仅在追踪器移动时报告。也可以增加报告间隔（位置更新之间的时间）以节省电量。

</details>

<details>
<summary>为什么位置数据缺失或没有显示？</summary>

- **可能原因：** 数据库或 API 可能存在问题，通常与数据负载的解析方式有关。
- **解决方案：** 首先检查应用服务器上的负载解码器是否正确工作。如果解码器没问题，再检查应用服务器日志是否有错误或连接问题。

</details>

<details>
<summary>为什么 SOS 告警没有及时接收到？</summary>

- **可能原因：** LoRaWAN 网络可能拥塞，或设备类别不适用于紧急消息。
- **解决方案：** 对于像 SOS 告警这样的时效性强的应用，确保追踪器配置为 **Class C 模式**。该模式会让设备的接收器持续开启，可以立即接收来自服务器的消息。

</details>

<details>
<summary>如何调整 BC01 信标的广播间隔和发射功率？</summary>

你可以使用 **SenseCraft 应用** 来配置 BC01 信标。

1. 从 [Google Play 商店](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate) 或 [苹果应用商店](https://apps.apple.com/us/app/sensecraft/id1619944834) 安装 SenseCraft 应用。
2. 打开应用并开启手机蓝牙。
3. 扫描附近的信标并选择要配置的信标。
4. 输入默认密码“**seeed123**”进入设置。
5. 根据需求调整广播间隔（100ms 到 10s）和发射功率（-30dBm 到 +4dBm）。
6. 保存更改。

</details>
