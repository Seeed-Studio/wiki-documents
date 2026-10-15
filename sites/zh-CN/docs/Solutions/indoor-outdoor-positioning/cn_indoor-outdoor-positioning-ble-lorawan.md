---
description: 用蓝牙信标、GNSS 与 LoRaWAN 在同一张地图上追踪人员与资产：需要哪些设备、现场怎么布、WebSocket 怎么接，以及服务端实测数据
title: 蓝牙 + LoRaWAN 室内外一体定位方案：搭建、部署与实测数据
keywords:
  - 室内定位方案
  - 室内外一体定位
  - 蓝牙信标 定位
  - LoRaWAN 资产定位
  - 地理围栏 告警
  - 平面图 配准
  - 离线底图
  - PMTiles
  - SenseCAP T1000
  - SenseCAP BC03
  - SenseCAP M2 网关
  - ChirpStack
  - WebSocket
image: https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-indoor-22a6ee12.png
slug: /solutions/indoor-outdoor-positioning-ble-lorawan
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/solutions/indoor-outdoor-positioning-ble-lorawan/
generated_from: sensecraft-solutions@indoor_positioning_ble_lorawan
---

:::caution[使用须知]
这**不是安全认证系统**：LoRaWAN 允许丢包、GNSS 在室内不工作、BLE 定位在金属环境下会退化，位置可能迟到、出错或缺失，不能作为保障人身安全的唯一手段。
:::

## 这套方案是干什么的

一个场地通常既有楼、又有室外区域，而两边要回答的是同一个问题：那台叉车、那台仪器、那个人，现在在哪。楼里用电池供电的蓝牙信标标出位置，出了楼由追踪器自带的 GNSS 接手，两者都经 LoRaWAN 回传，由网页看板画在同一张地图上。平面图可以配准到室外地图上，因此一条从楼里走到院子里的轨迹不用切页面。

- 开源实现：[github.com/Seeed-Solution/Solution_IndoorPositioning_H5](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/indoor_positioning_ble_lorawan)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>感知侧不用布线</h3>
                <p>信标电池供电、贴墙即可；追踪器充一次电可用数月。需要市电和网口的只有网关和主机。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>室内室外同一张地图，自动切换</h3>
                <p>追踪器进出楼时由服务端状态机切换图层，不用手动切；站在窗边的追踪器不会来回翻转。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>代码开源，数据留在自己主机上</h3>
                <p>应用源码在 GitHub 开源，以 Docker 镜像跑在你自己的主机上。唯一会出外网的是底图，可改用离线 PMTiles 归档。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>服务端容量实测</h3>
                <p>200 个并发标签端到端 P95 828 ms、丢失 0%；500 标签 P95 2.35 s。测试用回放上行，没有接追踪器和网关。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示

室内图层把追踪器画在配准过的平面图上：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-indoor-22a6ee12.png" alt="看板室内图层：追踪器画在配准过的平面图上，左侧是标签列表"/>
</div>

室外图层是同一个页面、同一个 WebSocket，底图换成地图瓦片：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-outdoor-8b31ec6e.png" alt="看板室外图层：同一批追踪器画在地图瓦片上"/>
</div>

一个追踪器在两个图层之间来回移动的过程：

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/web-example-fdbff3c1.gif" alt="追踪器在室内外之间移动时，看板自动在两个图层之间切换"/>
</div>

手机端看到的是同一份数据：

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/miniprogram-example-34c773a6.gif" alt="小程序端的同一份位置数据"/>
</div>


看板是 `/web/map` 这一个页面，上面有明确的**室内 / 室外**图层切换；`/web/map?layer=outdoor` 是直达链接，适合做大屏，订阅的是同一个 WebSocket。一个追踪器同一时刻只画在两个视图中的一个。画在哪个由状态机决定，决定结果写在消息的 `position.coordSystem` 字段里——平面图 `{x, y}` 是 `metric`，经纬度 `{lat, lon}` 是 `wgs84`。

## 需要哪些硬件

现场三类设备，信标和追踪器的数量随部署规模变化。

**① BLE 信标**——室内的位置参考。电池供电、贴墙安装、不用布线。只靠 GNSS 覆盖的区域（院区、道路、停车场）一个都不用装。

**② 追踪器**——人带着或贴在资产上。室内扫 BLE、室外用自带 GNSS，带 SOS 按钮。

**③ LoRaWAN 网关**——收上行并转给网络服务器。网关与追踪器按所在地区的同一频段选购。

| | 设备 | 标称容量 | 什么时候选它 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-bc03-bluetooth-beacon.jpg" alt="SenseCAP BC03" width="110" /> | [SenseCAP BC03 室内蓝牙信标](https://www.seeedstudio.com/Indoor-Bluetooth-Beacon-BC03-p-6732.html)<br/>室内位置参考，Bluetooth LE 5.0 | 每区域 3 个以上 2–3 m；1 个到房间级 | 任何需要比「在楼里」更细的室内区域 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114993073-sensecap-card-tracker-t1000-a.jpg" alt="SenseCAP T1000-A" width="110" /> | [SenseCAP LoRaWAN 胸卡追踪器 T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)<br/>BLE 扫描、GNSS、运动检测、SOS | 每个追踪目标一个 | 胸卡或资产标签；同一台设备兼顾室内与室外 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992981_eu868_1.jpg" alt="SenseCAP M2 网关" width="110" /> | [SenseCAP M2 LoRaWAN 室内网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)<br/>SX1302，分地区频段版本 | 视距最远 2 km；100–200 个追踪器 | 一个场地一到两台；现场已有 LoRaWAN 则可省 |

表中容量都是**标称值**，来自器件手册与这套硬件的部署经验。信标那一行的精度取决于下面的安装方式。

设备之外还需要：一台跑应用的主机（任何能跑 Docker 的机器；服务端实测用的是 reComputer J30 系列，当作普通 arm64 主机）、一个网络服务器（**SenseCAP OpenStream** 或自建 **ChirpStack**），以及——除非构建离线底图——主机要能联网拉 OpenStreetMap 栅格瓦片。

### 选型排他边界

- **亚米级连续轨迹追踪**：BLE 信标定位精度为 2–3 米级；若有高速 AGV 自动导航或高精机器人对接需求（要求厘米级/亚米级连续轨迹），请勿选 BLE，应选 UWB 定位方案。
- **秒级实时控制闭环**：LoRaWAN 链路具有占空比与时延波动，标签离线判定阈值为 15 分钟，不适用于秒级以下人员碰撞预警等硬实时安全互锁。

## 现场怎么部署

### 一、装硬件

:::tip[室内精度由信标布置决定]
信标安装高度 **2.5–3 m**、间距 **5–10 m**（BC03 建议间距），金属货架附近加密。标称的 2–3 m 精度对应的是**每个区域 3 个以上信标**；每区域一个信标只到房间级。把每个信标的 **MAC 地址与安装位置**记录下来——室内位置按这张信标-区域对照表计算；挪动信标后要同步更新对照表，否则经它算出的位置都会偏移。
:::

网关台数按覆盖定：标称视距 2 km，一般场地一到两台；是否加第二台看墙体和距离，与标签数量无关。网关按地区**频段**分 SKU（US915 / EU868 / AS923 等），下单前确认所在国家的频段，追踪器与之一致。

### 二、装软件：7 步

逐设备步骤和应用包在可部署方案页，下面是步骤轮廓。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/indoor_positioning_ble_lorawan" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

1. **部署 BLE 信标**——安装、固定、记录 MAC 地址。
2. **配置 LoRaWAN 网关**——在 SenseCAP OpenStream 或自建 ChirpStack 上让它上线。
3. **部署定位应用**——Docker 部署，可以装在当前这台机器，也可以经 SSH 装到远端主机。
4. **配置并激活追踪器**——入网并设置上报周期。
5. **配准平面图**——上传平面图，设定原点、旋转角与缩放，让它落到室外地图的正确位置上。配准与围栏都在配置页完成：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/config-7ff6962d.png" alt="配置页：平面图上传、原点与旋转角设定，以及围栏列表"/>
</div>

6. **配置地理围栏告警**——用 WGS84 画围栏，挂一条告警规则。
7. **打开看板**——确认追踪器出现、会动，并且能触发你配的告警。

难度 **intermediate**，预计约 **60 分钟**。第 5、6 步只是软件配置，不需要额外硬件。

:::caution[默认登录]
镜像支持 linux/arm64 与 linux/amd64。看板默认登录 `admin` / `12345678`，首次登录后在「配置 → 认证」修改。
:::

## 有哪些接口

应用暴露的所有东西都在你部署的那台主机的 **5173** 端口上。按接入方分三条：

- **大屏或第二块屏**——直接开 `/web/map?layer=outdoor`（或 `?layer=indoor`）。同一个页面、同一个 WebSocket，不需要额外配置。
- **已有的安防、调度或考勤系统**——订阅 WebSocket，只处理两类消息：SOS 按钮对应的 `tracker_sos`，以及带 `geofence` 段且 `transition` 为 `enter` / `exit` 的 `tracker_checkin` / `tracker_position_detection`。这两类是事件，其余是遥测。
- **自建系统**——拿完整 payload。每条更新带的要么是平面图上的米制位置、要么是 WGS84 位置，由 `coordSystem` 区分；REST 接口可以用程序创建围栏、读写配准参数。

### 完整的接口与 payload

| 接口 | 地址 | 载荷 |
|---|---|---|
| WebSocket | `ws://<host>:5173/ws` | `tracker_update` 的 `position` 为 `{x, y, coordSystem: "metric"}` 或 `{lat, lon, accuracy, coordSystem: "wgs84"}`；`tracker_checkin` / `tracker_position_detection` 在围栏进出时额外带一个 `geofence` 段；另有 `tracker_sos`、`tracker_offline` |
| REST | `GET/PUT /api/configuration/dashboard/maps/{mapName}/registration` | `{origin_lat, origin_lon, rotation_deg, scale}`。`\|纬度\|` > 85° 与 `scale` ≤ 0 会被拒绝。需要 admin 会话，guest 会话返回 **403** |
| REST | `POST /api/geofences`、`POST /api/events` | 围栏几何（GeoJSON 多边形，或点加 `radius_m`）与引用它的告警规则 |
| LoRaWAN 上行入口 | SenseCAP OpenStream，或 ChirpStack 的 MQTT 主题 | 字段映射见部署指南 |

围栏告警不走独立通道，而是复用打卡消息：

```json
{"type": "tracker_checkin", "data": {"2CF7F1C0530004AD": {
  "timestamp": 1788582647214, "map": "Plant A",
  "geofence": {"id": 1, "name": "Plant A", "transition": "enter"},
  "position": {"lat": 22.5362, "lon": 113.9432, "accuracy": null, "coordSystem": "wgs84"},
  "last_detected_beacons": []}}}
```

**两个字段的用法**：判断室内外看 `coordSystem`，不看有没有 `lat`，同一种消息类型两种坐标都可能带。这套硬件上 `accuracy` **恒为 `null`**（SenseCAP 与 ChirpStack 上行都不带 GNSS 精度测点），按「未知」处理。

## 性能与实测数据 {#appendix}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Solution_IndoorPositioning_H5</font></span></strong>
    </a>
</div><br />

以下是服务端实测：合成上行发到本地 MQTT broker，从看板 WebSocket 侧抓结果，链路里没有 T1000 和网关。应用跑在 reComputer J30 系列上（当作普通 arm64 主机，未用 GPU），每档 2–4 min。

### 容量与时延

| 指标 | 实测 | 条件 |
|---|---|---|
| 容量，稳定档 | 200 个并发标签，端到端 P95 828 ms，上行丢失 0% | 每标签每 30 s 一条上行，800 条，2 min |
| 容量，下降档 | 500 标签，P95 2.35 s，丢失 0% | 同上，2000 条上行，2 min；只有 2 s 时延这一条不满足 |
| 容量，1000 标签时 | P95 4.1 s，丢失 0%，进程仍在服务 | 同上；这一档仍在正常服务，未继续加压 |
| 更新频率 | 50 标签、2 s 上行间隔，P95 220 ms，4500 条上行丢失 0% | 3 min；30 / 10 / 5 s 三档同样稳定，P95 分别 89 / 163 / 146 ms |
| SOS 告警时延 | P50 24 ms，P95 29 ms，max 29 ms，n=20 | 单标签、无并发负载；上行时间戳到 WebSocket 广播 |
| 离线判定 | 903 s 与 950 s | 复现 2 次；设计值域 [900 s, 960 s]，来自 15 min 阈值与 60 s 轮询 |

容量与更新频率只反映服务端；追踪器能多快上报由上行周期与 LoRaWAN 占空比决定。

复现：上游 `indoor_positioning_ble_lorawan` 的 `runs/2026-09-05-orin-nano/boundary.capacity.yaml`、`boundary.update_frequency.yaml`、`boundary.sos_latency.yaml`、`boundary.offline_latency.yaml`（应用代码 `feature/outdoor` @ `443bce6`）

### 围栏与配准

| 指标 | 实测 | 条件 |
|---|---|---|
| 围栏告警时延 | P50 14 ms，max 14 ms，2 条告警 | 回放器与服务同机 loopback，单标签，17 条上行 |
| 围栏迟滞 | 门口来回翻转 6 次产生 **0 条告警**；enter 与 exit 各在第 3 个连续点触发 | 同上 |
| 配准误差 | 原点 2 km 内、`\|纬度\|` ≤ 60° 时 ≤ 0.21 m | 方位角扫描的最差值：每 15°，半径 500 / 1000 / 2000 m，lat0 取 0 / 22.5 / 45 / 60；**预算为 0.7 m**；只测投影计算，未实地测绘 |

复现：`runs/2026-09-05-geofence-smoke/results.md`、`runs/2026-09-05-georef/results.md`

### 运行时与关键参数

追踪器只上报观测结果（看到了哪些已配置的信标，或一个 GNSS fix），位置由服务端解算。下面三个参数都在服务端，决定室内外切换和告警的节奏：

- **室内 ↔ 室外切换**：20 s 内 3 个 GNSS fix，并且 15 s 内没看到任何已配置信标，才转室外；连续两次扫描、每次看到 2 个以上已配置信标，才转回室内。站在窗边的追踪器不会来回翻转。
- **围栏跃迁**：10 s 内连续 3 点才触发 `enter` / `exit`。geo 模式下告警规则的 `time_range` 字段不生效，界面上设置的时段被这条确认取代。
- **离线判定**：15 min 没有上行即判离线，60 s 轮询，**硬编码**。
- **离线底图**：无外网场地用 `go-pmtiles extract` 构建本地 PMTiles 归档（只拉 bbox 内的瓦片），交付前先构建归档并加载一次。

### 已知退化

- **室内精度跟着信标布置走。** 2–3 m 是标称值（BC03 wiki），前提是每区域 3 个以上信标、2.5–3 m 高度、5–10 m 间距。每区域一个信标只到房间级。金属货架会让三边定位退化，那里要加密。
- **标签数上去后时延变长**：500 标签时端到端 P95 2.35 s，1000 标签时 4.1 s。
- **配准误差随半径与纬度增长**：可用范围约 2 km，API 拒绝 `\|纬度\|` 超过 85°。
- **`accuracy` 与 `alt` 没有数据**：按精度分支的逻辑在这套硬件上始终走 null 分支，围栏引擎把缺失的 `accuracy` 当作通过。

## 数据与素材出处

- **实测数据**——「性能与实测数据」里的全部数字来自上游 `sensecraft-solutions` 中 `indoor_positioning_ble_lorawan` 的 `description.md`，该文件按路径引用了逐次运行报告。数据是为这些运行生成的合成回放轨迹，不涉及任何客户现场数据。
- **设备 EUI**——截图与轨迹里出现的 EUI 都是回放工具使用的合成值。
- **底图瓦片**——室外截图中的底图 © OpenStreetMap 贡献者，按 [ODbL](https://www.openstreetmap.org/copyright) 授权。该署名随页面一起分发。
- **平面图**——配准截图里的平面图是合成测试图（50 m × 40 m 演示地图上的 1000×800 px 平面图），为评测运行创建，事后已删除。
- **应用源码**——见 [Seeed-Solution/Solution_IndoorPositioning_H5](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)；做衍生产品出货前请先确认该仓库的许可条款。
- **看板截图与演示 GIF** —— 取自上游应用自身的界面（`solution-indoor-positioning` 的 `docs/ui/` 与 `assets/`）。室外图层的底图为 OpenStreetMap 瓦片，按 ODbL 署名，出处见上游包的 `gallery/ATTRIBUTION.md`。
