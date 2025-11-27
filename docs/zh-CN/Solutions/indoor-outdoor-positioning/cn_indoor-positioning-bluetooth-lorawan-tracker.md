---
title: "基于蓝牙的 LoRaWAN 室内定位系统"
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

## 简介

### 概述

室内定位是许多行业面临的共同挑战。虽然像 UWB 这样的高精度系统存在，但它们可能成本高昂且复杂。此解决方案通过结合两种强大的无线技术提供了一个灵活且经济高效的替代方案：**低功耗蓝牙 (BLE)** 用于位置感知，**LoRaWAN** 用于长距离、低功耗数据传输。

该系统围绕 [SenseCAP T1000 Tracker](/cn/SenseCAP_T1000_tracker/Introduction) 构建，支持两种不同的定位模式，让您可以根据需要在精度和电池寿命之间取得平衡：

1. **高精度跟踪（三角定位）：** 当跟踪器检测到来自**三个或更多** BLE 信标的信号时，它可以计算出其在地图上的精确 (x, y) 坐标。此模式非常适合跟踪资产或人员的移动，定期或在发生移动时提供准确的位置更新。

2. **基于区域的定位（邻近性）：** 当跟踪器仅在一个或两个信标的范围内时，它根据与最近信标的邻近性来识别其位置。此模式非常适合更简单的用例，如自动签到、确认资产在指定房间内，或通过较少频率的位置报告来节省电池寿命。

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
- **开源软件**：该项目完全开源，允许您使用我们的 [GitHub 仓库](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5) 构建和定制自己的后端服务器。

### 使用案例

<div class="info-section">
    <div class="section-header">
        <h2>使用案例</h2>
        <p>此解决方案非常适合广泛的基于区域的跟踪和安全应用：</p>
    </div>
    <ul class="info-list">
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div><div class="info-content"><h3>校园和学校安全</h3><p>为学生和教职员工提供可穿戴跟踪器。内置的 SOS 按钮允许他们从校园任何地方立即发送带有最后已知位置的紧急警报，提供安心感并实现更快的响应时间。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg></div><div class="info-content"><h3>资产管理</h3><p>跟踪贵重资产的位置，无论是室内还是室外（例如，停车场中的车辆）。配置跟踪器仅在移动时报告，节省电池的同时确保您收到未经授权移动的警报。</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" /></svg></div><div class="info-content"><h3>自动签到和人员管理</h3><p>通过调整 BLE 信标的信号强度，您可以为办公室或养老院创建"签到"区域。当佩戴跟踪器的人进入该区域时，他们的存在会自动记录。</p></div></li>
    </ul>
</div>

### 系统架构

该系统基于一个简单而强大的原理运行。移动跟踪器监听来自固定信标的信号，并将它们听到的内容报告给中央服务器。

![System Architecture Diagram](https://media-cdn.seeedstudio.com/media/wysiwyg/IoT_Device/_163.png)

### 先决条件

主要组件包括：

1. **BLE 信标**：这些是放置在已知位置（例如，房间入口、关键区域）的小型固定发射器。它们持续广播唯一 ID。
2. **SenseCAP T1000 Tracker**：这是连接到您想要跟踪的资产或人员的移动设备。它扫描附近的 BLE 信标并识别信号最强的那个。
3. **LoRaWAN 网关**：跟踪器通过 LoRaWAN 将包含最近 BLE 信标 ID 的数据包发送到网关。
4. **网络和应用服务器**：网关将数据转发到 LoRaWAN 网络服务器（[SenseCraft Data](https://sensecap.seeed.cc/portal)），然后将其路由到应用服务器。应用服务器保存信标 ID 及其真实世界位置的地图，使其能够确定跟踪器的位置（例如，"跟踪器 #58 靠近信标 #12，该信标位于会议室 3"）。

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
          <p>具有 BLE 扫描功能的 LoRaWAN® 移动跟踪器</p>
      </div>
      <div class="card-body">
          <ul class="features-list">
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <p><span class="highlight">BLE 信标检测：</span> 支持 BLE 5.1，实现精确的室内外定位。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" />
                      </svg>
                  </div>
                  <p><span class="highlight">广域网络：</span> LoRaWAN® Class A(v1.0.4) 连接，实现长距离、低功耗通信。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  </div>
                  <p><span class="highlight">运动检测：</span> 内置加速度计，实现实时运动和静止状态感知。</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                  </div>
                  <p><span class="highlight">紧急按钮：</span> 独立的 SOS 按钮，一键触发紧急警报。</p>
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
                <p><span class="highlight">持久耐用：</span> 在标准设置下电池寿命长达 <span class="highlight">2 年</span>。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.938a3.375 3.375 0 002.456 2.456L21 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                </div>
                <p><span class="highlight">易于安装：</span> 配有背胶，便于安装在墙壁或其他表面。</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <p><span class="highlight">广播范围：</span> 室外最远 75 米，室内开阔区域最远 120 米。</p>
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
                <p><span class="highlight">大规模连接：</span> 支持超过 <span class="highlight">200</span> 台并发设备，性能卓越。</p>
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

1. **部署信标**：在设施的战略位置放置 BLE 信标。创建一个地图或列表，记录每个信标的唯一 ID 及其物理位置（例如，`Beacon_ID_01: "主入口"`，`Beacon_ID_02: "仓库 A 区"`）。
2. **设置网关**：将 LoRaWAN 网关连接到互联网，并配置其将数据包转发到您选择的 LoRaWAN 网络服务器。
3. **部署应用程序**：在应用服务器上，创建逻辑将报告的信标 ID 映射回您在第 3 步中记录的物理位置。
4. **配置追踪器**：激活 SenseCAP T1000 并将其加入到您的 LoRaWAN 网络服务器。确保其配置为 BLE 扫描模式。
5. **可视化**：当追踪器在设施中移动时，它将报告最近的信标，您的应用程序可以在仪表板或地图上显示其位置。

### 步骤 1：设置硬件

首先，您需要在设施中设置物理设备。

#### **1a. 部署信标**

:::info
有关完整的技术规格，请参阅 **[BC01 室内蓝牙信标文档](/cn/bluetooth_beacon_for_SenseCAP_Traker/)**。
:::

首先在设施内的战略位置放置 **BLE（低功耗蓝牙）信标**——例如**主入口、仓库和办公区域**。
<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/10.5.png" alt="Indoor positioning 2d map"/>
</div>


请参考下面的视频，了解如何将信标信息添加到系统中的分步指南。
您也可以查看[提示部分](#tips)获取额外帮助。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-configuration.mp4" type="video/mp4" />
  您的浏览器不支持视频标签。
</video>
</div>

<details>
<summary>BC01 信标参数快速查看</summary>

| 参数           | 默认值                               |
| -------------- | ------------------------------------ |
| UUID           | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major          | 10001                                |
| Minor          | 19641                                |
| 测量功率       | -59dBm                               |
| 发射功率       | -30 - +4dBm，默认 0dBm               |
| 广播间隔       | 100ms~10s，默认 500ms                |
| 密码           | seeed123（字母和数字）               |
| 设备名称       | BC01（1-7 个字符）                   |
| 软重启         | seeed123（与密码相同）               |

</details>

#### 1b. 设置网关

打开您的 **LoRaWAN 网关**并将其连接到互联网。  
接下来，根据您使用的**网络服务器**按照以下说明操作。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="sensecap-portal" label="SenseCraft Data" default>

默认情况下，LoRaWAN 网关将数据转发到 [**SenseCraft Data**](https://sensecap.seeed.cc/portal/) 平台（原 **SenseCAP Portal**）。

1. 按照[官方用户手册](/cn/quick_start_with_M2_MP)确保您的网关**在线**并**链接到您的账户**。  
2. 连接验证后，您可以**继续下一步（步骤 2）**。

  </TabItem>

  <TabItem value="chirpstack" label="ChirpStack（本地 LoRaWAN 服务器）">

如果您使用与网关集成的**自托管 ChirpStack** 服务器，您需要**重定向网关数据**并**准备解码器脚本**。

1. **配置网关：** 按照此指南[将网关的上行数据重定向到 ChirpStack](/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/)。  
2. **下载解码器脚本：** ChirpStack 需要解码器来解释来自 T1000 追踪器的数据。下载下面的脚本，以便在后续配置步骤中使用。
    - [**下载 T1000 解码器脚本**](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)
    **注意：** 此脚本应添加到您的 **ChirpStack Application Settings** 中，而不是在网关设备本身上。

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-for-chripstack.mp4" type="video/mp4" />
  您的浏览器不支持视频标签。
</video>
</div>

  </TabItem>
</Tabs>

### 步骤 2：安装定位应用程序

使用 Docker 在您的服务器上安装 SenseCraft 室内定位应用程序。
如果您想先探索界面，可以查看[在线演示](https://indoorpositioning-demo.seeed.cc/)。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png" alt="室内定位应用程序预览"/>
</div>

#### 运行安装命令

在您的服务器上打开终端并运行以下命令：


<Tabs>
  <TabItem value="global" label="全球" default>

```shell
docker run -p 5173:5173 -p 8022:8022 \
--name indoor-positioning \
--restart unless-stopped \
-v $PWD/db:/app/db/ \
-v $PWD/config:/app/server/config/json \
-d seeedcloud/sensecraft-indoor-positioning
```

  </TabItem>

  <TabItem value="mirror" label="镜像">
  对于中国大陆用户，您可以使用 [chsrc](https://chsrc.run/) 更改源以获得更好的加速效果。
  </TabItem>
</Tabs>

> 💡 注意：如果您在 Windows 上运行命令，请使用 PowerShell 而不是 CMD 终端。

**此命令的作用：**

- 下载并启动 SenseCraft 室内定位应用程序容器。
- `-p 5173:5173` 使 Web 仪表板可在端口 `5173` 上访问。
- 挂载本地目录：
  - `/app/db/` → 存储数据库和地图。
  - `/app/server/config/json` → 存储配置文件。
- `-d` 在后台运行应用程序。

---

容器成功启动后，打开您的 Web 浏览器并导航到：

👉 `http://<your_server_ip>:5173`

您现在应该看到 SenseCraft 室内定位仪表板在您的服务器上运行。

### 步骤 3：配置应用程序

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="应用配置管理"/>
</div>

#### 3a. 运行时配置（连接到 LoRaWAN）

使用此设置将应用程序连接到您的 LoRaWAN 网络服务器并接收追踪器数据。
应用程序可以同时连接到 **SenseCraft Data** 和**本地 ChirpStack 服务器**。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-server-runtime-configuration.png" alt="应用服务器运行时配置"/>
</div>

在仪表板中启用一个或两个 MQTT 源：

##### 连接到 SenseCraft Data

1. 打开 **SenseCAP OpenStream MQTT**。
2. 输入您的**用户名**和 **API 密钥** - 从 [Data OpenStream API 快速入门指南](/cn/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/)获取这些信息。

##### 连接到 ChirpStack

1. 打开 **ChirpStack MQTT**。
2. 输入**服务器地址**和**应用程序 ID** - MQTT 主题将自动填充。您可以在 ChirpStack 应用程序页面上找到应用程序 ID。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/chirpstack-application-id.png" alt="chirpstack 应用程序 ID"/>
</div>

> **注意：** `{clientID}` 字段是自动生成的；请勿编辑。  
> **重要：** 任何更改后，重启 Docker 容器以使更新生效。

##### 其他设置

这些选项可以随时更改（无需重启）：

- **身份验证** – 更新仪表板登录凭据。
- **区域定位** – 当信标信号较弱或稀疏时估算追踪器的大致位置。
- **追踪器访问控制** – 限制哪些设备可以被定位（对所有开放或通过白名单）。
- **Webhook** – 通过 HTTP POST 将位置数据推送到您的服务。
#### 3b. 地图和信标配置

点击 `Create` 创建您的第一个地图。

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="应用程序配置管理"/>
</div>

在此面板中上传您的**地图数据**。
目前，演示版本仅支持导入包含**折线实体**的 **GeoJSON 类格式**文件。
以下是供参考的示例 JSON 模板：

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

此 JSON 使用基于坐标的**折线**定义 **2D 楼层布局**，这些折线代表地图元素，如墙壁或边界。
当前演示版本不支持其他几何类型。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/import-map-geo-json.png" alt="导入地图 geo-json"/>
</div>

2. **添加信标**

在信标部分，添加每个信标的 MAC 地址、ID 和位置。
您可以使用在[步骤 1a](#1a-部署信标)中创建的列表直接将它们放置在上传的地图上。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/maps-add-beacons.png" alt="地图添加信标"/>
</div>

3. **调整环境因子（可选）**

通过调整信号强度（**RSSI**）转换为距离的方式来微调位置精度。

- 默认值（~2.0）适用于开放区域。
- 对于复杂的室内环境，尝试 **1.8 到 4.0** 之间的值。
- 从默认设置开始，如果需要可以稍后调整。

### 步骤 4：激活并可视化您的追踪器

最后一步是打开您的追踪器并在地图上查看它。

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/tracker-visualize-on-map.png" alt="追踪器在地图上可视化"/>
</div>

1. **激活 SenseCAP T1000 追踪器**并将其加入到您的 LoRaWAN 网络服务器。确保您的网关在线且追踪器设备在 LNS 服务器上"已注册"。详情请查看[步骤 1b](#1b-设置网关)。
2. **确保它设置为 BLE 扫描模式**，以便它可以检测信标。请查看下面的视频获取帮助。
3. **可视化：** 当追踪器在您的设施中移动时，它将检测最近的信标并报告其位置。您将在仪表板上看到其图标在地图上移动。

<div style={{ textAlign: 'center' }}>
<video width="480" height="640" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-tracker-configuration.mp4" type="video/mp4" />
  您的浏览器不支持视频标签。
</video>
<p><em>使用 ChirpStack 时，选择 `Other Platform`。</em></p>
<p><em>使用 SenseCraft Data 时，保留默认平台设置（SenseCAP for The Things Network）。</em></p>
</div>

## 应用功能概述

### 功能 1：数据推送（Webhook 和 WebSocket）

您可以通过两种方式从系统获取实时数据：

- **Webhook：** 如配置中所述，这会将数据推送到您提供的 URL。
- **WebSocket：** 对于实时应用，您可以使用基本 HTTP 身份验证连接到 `/ws` 端点。原始文档中提供的 JSON 示例详细说明了 `sos`、`tracker_update`（三角定位）和 `tracker_location_approximate`（邻近）的数据格式。

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

系统支持两种定位方法：

1. **三角定位：** 当跟踪器检测到**三个或更多**信标时，它会计算精确的 (x, y) 坐标。这是默认且最准确的模式。
2. **邻近（区域定位）：** 如果您启用此功能且跟踪器只能检测到**一个**信标，它将报告其位置为在计算半径内"靠近"该信标。这对于确保所有区域的覆盖很有用。

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

### 功能 3：查看警报历史

您可以通过点击地图上的跟踪器图标来查看任何跟踪器的警报历史（例如，SOS 按钮按下）。系统会记录每个新警报，并将继续推送活动警报的通知，直到问题得到解决。

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/alert-history-records.png" alt="alert-history-records"/>
</div>

### 功能 4：按信标 UUID 过滤

您可以根据关联的信标 UUID 过滤地图上显示的跟踪器。这允许对特定区域或资产进行更集中的监控。它的价值在于不被黑客攻击。

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/sensecraft-ble-filter.png" alt="sensecraft-ble-filter"/>
</div>

## 参考资料与资源

- **产品页面**：[SenseCraft 室内定位解决方案](https://www.seeed.cc/solutions/campus-safety-management)
- **Docker 镜像**：[seeedcloud/sensecraft-indoor-positioning - Docker Hub](https://hub.docker.com/r/seeedcloud/sensecraft-indoor-positioning)
- **在线演示站点**：[IndoorPositioning](https://indoorpositioning-demo.seeed.cc/)

## 提示

以下是一些有用的提示，帮助您更高效地部署和配置信标：

### 1. 记录信标信息
**强烈建议**记录每个信标的**唯一 MAC 地址**及其**安装位置**。  
这在[软件配置步骤](#3b-map-and-beacon-configuration)中将**至关重要**，并将帮助您在映射或故障排除期间**轻松识别和选择**正确的信标。

| **MAC 地址** | **位置**     | **信标 ID** |
| --------------- | ---------------- | ------------- |
| c30000564b31    | 主入口    | 01            |
| c30000564b32    | 仓库 A 区 | 02            |
| c30000564b33    | 角落办公室    | 03            |

### 2. 为所有信标使用一致的 UUID
为了便于管理，您可以使用 **SenseCraft 应用**为所有信标分配一致的 **UUID**。  
这确保您的跟踪器只监听**您自己的设备**并**忽略其他附近的信标**。  
查看[功能 4：按信标 UUID 过滤](#功能-4按信标-UUID-过滤)了解更多详情。

### 3. 选择稳定的安装位置
将信标安装在**固定、开放且无障碍**的区域，以确保稳定的蓝牙信号。  
避免将它们放置在可能造成干扰的**金属表面**、**电气面板**或 **Wi-Fi 路由器**附近。

### 4. 标记并固定每个信标
贴上与记录表匹配的**可见标签**（例如，Beacon-01、Beacon-02），以避免维护期间的混乱。  
确保设备**牢固安装**，以防止意外移位。

### 5. 验证信号范围
在最终确定放置位置之前，使用 BLE 扫描器应用或配置工具测试**信号覆盖**，以确保在目标区域内**一致检测**。

### 6. 快速添加或调整信标数据

如果您使用的是 *GeoJSON 类似*的配置文件，您也可以直接编辑导出的地图文件来快速添加或调整信标数据，然后将其重新导入到应用程序中。

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

> 提示：当一次添加多个信标或在仪表板外微调其坐标时，直接编辑 JSON 很有用。

## 常见问题

<details>
<summary>为什么我的跟踪器没有报告其位置？</summary>

- **可能原因：** LoRaWAN 连接可能存在问题。
- **解决方案：** 检查您的 LoRaWAN 网关状态，确保其在线并已连接。同时，验证跟踪器的设备 EUI 是否在您的网络服务器上正确注册。

</details>

<details>
<summary>为什么追踪器的位置不准确？</summary>

- **可能原因：** 您的 BLE 信标的放置位置可能导致干扰或信号覆盖较弱。
- **解决方案：** 尝试调整信标的传输功率。您可能还需要重新放置它们以减少墙壁或机械设备对信号的阻挡。

</details>

<details>
<summary>为什么追踪器的电池消耗如此之快？</summary>

- **可能原因：** 报告频率设置过高，导致设备传输数据的频率超过必要水平。
- **解决方案：** 优化运动检测设置，仅在追踪器移动时才报告。您还可以增加报告间隔（位置更新之间的时间）以节省电力。

</details>

<details>
<summary>为什么位置数据丢失或不显示？</summary>

- **可能原因：** 数据库或 API 可能存在问题，通常与数据载荷的解释方式有关。
- **解决方案：** 首先，验证应用服务器上的载荷解码器是否正确且正常工作。如果解码器正确，请检查应用服务器日志是否有任何错误或连接问题。

</details>

<details>
<summary>为什么 SOS 警报没有及时收到？</summary>

- **可能原因：** LoRaWAN 网络可能拥塞，或者设备类别不适合紧急消息。
- **解决方案：** 对于像 SOS 警报这样的时间关键应用，请确保您的追踪器配置为使用 **Class C 模式**。这会保持设备的接收器持续开启，允许立即接收来自服务器的消息。

</details>

<details>
<summary>如何调整 BC01 信标的广播间隔和传输功率？</summary>

您可以使用 **SenseCraft 应用** 来配置 BC01 信标。

1. 从 [Google Play Store](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate) 或 [Apple App Store](https://apps.apple.com/us/app/sensecraft/id1619944834) 安装 SenseCraft 应用。
2. 打开应用并在手机上启用蓝牙。
3. 扫描附近的信标并选择您希望配置的信标。
4. 输入默认密码 "**seeed123**" 以访问设置。
5. 根据需要调整广播间隔（100ms 到 10s）和传输功率（-30dBm 到 +4dBm）。
6. 保存更改。

</details>

## 更新日志

**2025-11-10：**

- 重新设计了信标部署和网关设置指导，以阐明放置最佳实践、参考材料以及针对 SenseCraft Data 和 ChirpStack 的网络服务器特定说明。
- 扩展了运行时配置以及地图/信标设置部分，提供了更清晰的 UI 指导、GeoJSON 导入示例和环境因素的可选调优提示。
- 添加了专门的提示部分，涵盖信标记录保存、UUID 管理、安装、验证和批量编辑，使部署更容易扩展和故障排除。
