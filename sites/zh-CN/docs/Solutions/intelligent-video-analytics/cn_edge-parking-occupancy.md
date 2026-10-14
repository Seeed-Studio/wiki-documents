---
description: 用停车场现有 IP 摄像头逐个车位判断占用或空闲：需要哪些设备、怎么部署、有哪些接口，以及 Jetson 与 RK 主机上的多路实测数据
title: 视频车位占用检测方案：选型、部署与实测数据
keywords:
  - 车位占用检测
  - 视频车位检测
  - 车位引导
  - 余位屏
  - parking occupancy detection
  - Jetson Orin Nano
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_parking_occupancy/panel-occupancy-1-mixed-20261009-5635c9d1.jpg
slug: /solutions/edge-parking-occupancy
sidebar_position: 22
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/solutions/edge-parking-occupancy/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[使用须知]
车位要在摄像头画面里看得见：被相邻车辆完全挡住的车位、画面里很远很小的车位判不准。
:::

## 这套方案是干什么的

不在每个车位装地磁或超声波检测器，直接用场内已有的 IP 摄像头：一路摄像头看得到几个车位，就同时检测几个。你在网页上给每个车位画框、命名，边缘主机持续判断框里有没有车，把每个车位「占用 / 空闲 / 未知」发到你的系统，用于余位屏、车位引导或专用车位管理。

- 部署包（Docker Compose 与配置）：[github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_parking_occupancy)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/parking-space-occupancy-detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>视频不出场地</h3>
                <p>画面在现场的边缘主机上分析，对外只发车位状态。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>一台主机多路</h3>
                <p>reComputer J30 系列实测 6 路同时运行 620 秒，每路无丢帧，见「性能与实测数据」。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>车位自己画</h3>
                <p>网页上对着实时画面画框、命名，保存后立刻生效，重启后保留。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>断流能看出来</h3>
                <p>某路摄像头断流约 10 秒后，它下面的车位标为「未知」，不继续报旧状态。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示

边缘主机自带的车位编辑页：画面上的框就是车位，红色占用、绿色空闲，右侧是合计和车位列表。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_occupancy/panel-occupancy-1-mixed-20261009-5635c9d1.jpg" alt="reComputer J30 系列上的车位编辑页：6 个车位，4 个占用、2 个空闲"/>
</div>

截图里 P01、P02、P04、P06 占用，P03、P05 空闲。输入是一张地面停车场静图循环播放，不是现场录像。

## 需要哪些硬件

现场需要三样东西：场内 IP 摄像头、一台边缘主机、一台 MQTT 服务器（例如现场已有的 Mosquitto）。

**① IP 摄像头**：现有摄像头即可，输出 H.264 编码的 RTSP 视频流，用子码流就够。

**② 边缘主机**：四选一，一台接多路摄像头，每路每秒分析 1 帧。

| | 边缘主机 | 实测 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J30 系列（J3011）](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Jetson Orin Nano，JetPack 6.2 | 6 路无丢帧，单帧 p50 6.5 ms | 一台接多路，默认选择 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 系列（J4012）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Jetson Orin NX，JetPack 6.2 | 与 J30 同一应用包 | 这台主机还要跑别的模型 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 系列](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>板载 NPU | 单路，单帧 p50 36.6 ms | 现场统一用瑞芯微平台 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 系列](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>板载 NPU | 单路，每秒 1 帧，无丢帧 | 路数少、成本优先 |

RK 主机接多路时逐路增加，确认每路都在更新状态。

边缘主机、摄像头和 MQTT 服务器在同一局域网，主机能访问摄像头的 RTSP 地址（通常是 554 端口）。部署时需要联网下载运行程序和模型，之后可断网运行。

## 现场怎么部署

### 一、确认摄像头视角

:::tip[从高处斜向下拍]
每个车位在画面里能看清，不被相邻车辆完全挡住。一个框只框一个车位：车停进去后车身要占到框面积的约三分之一才判为占用，框住好几个车位的大框不会判为占用。
:::

### 二、装软件：三步

逐设备的操作步骤在可部署方案页，这里只讲轮廓。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/parking-space-occupancy-detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并部署 🖱️</font></span></strong>
    </a>
</div><br />

1. **部署边缘主机**：填各路摄像头的 RTSP 地址和 MQTT 服务器后部署。
2. **画车位**：浏览器打开 8080 端口的车位编辑页，选择摄像头，空白处拖出矩形新建车位、拖角点贴合，填车位编号（如 B1-023）后保存。
3. **验证**：车位状态变化时，编辑页颜色随之变化，MQTT 上收到该路摄像头的状态消息。

## 有哪些接口

车位状态经 MQTT 发到你的服务器，每路摄像头一个主题。

- **余位屏 / 车位引导**：订阅各路车位主题，用消息里的占用、空闲、未知数汇总。
- **专用车位管理**：给充电桩、访客车位单独画框，按车位编号判断。
- **Home Assistant 或自建系统**：同一主题，按车位编号取状态。

| 主题 / 端口 | 内容 |
|---|---|
| MQTT `<site>/parking/<camera>/slots` | 这路摄像头下每个车位的状态（`occupied` / `free` / `unknown`）及三类数量；任何车位变化时发送 |
| HTTP 8080 `/slots/editor` | 车位编辑页：画框、命名、查看实时状态 |
| HTTP 8099 `/healthz` | 服务运行状态 |

状态有保持时间，不随单帧抖动：车停稳约 3 秒后标为占用，车离开约 5 秒后标为空闲；摄像头断流约 10 秒后标为未知。

## 性能与实测数据

### 多路与单路运行

| 设备 | 输入 | 结果 |
|---|---|---|
| reComputer J30 系列（Orin Nano） | 6 路，每路每秒 1 帧，620 秒 | 每路丢帧 0，约每秒 1.0 帧（实测） |
| reComputer J30 系列（Orin Nano） | 单路 | 0.988 fps，单帧 p50 6.5 ms，每个车位上报 15 次状态切换（实测） |
| reComputer RK3588 系列 | 单路 | 单帧 p50 36.6 ms，上报 17 次状态切换（实测） |
| reComputer RK3576 系列 | 单路 | 1.0 fps，收到车位状态消息 21 条，丢帧 0（实测） |

单路输入为地面停车场静图与暗帧交替循环，用来制造占用与空闲切换。

复现：`sensecraft-solutions/solutions/edge_parking_occupancy`（部署包）+ 输入视频 `slots-occ20-empty20-400s.mp4`

### 摄像头断流

| 设备 | 结果 |
|---|---|
| reComputer RK3576 系列 | 推流停止后 9.98 秒车位变为 `unknown`，最后一帧之后约 11 秒（实测） |

### 模型与运行时

| 设备 | 车辆检测 | 运行时 |
|---|---|---|
| reComputer J30 / J40 系列 | YOLOX，640×640，FP16 | TensorRT |
| reComputer RK3588 / RK3576 系列 | YOLOX，640×640，INT8（w8a8） | RKNN，MPP 硬件解码 |

影响判定的参数（部署包 `config/slots*.json`）：

- `slot_coverage.occupied_ratio` / `free_ratio`：车身占框面积 0.3 以上判占用，低于 0.2 判空闲。
- `slot_coverage.hold_s` / `free_hold_s`：状态保持 3 秒 / 5 秒才切换。
- `unknown_after_s`：断流 10 秒后标为未知。

### 已知退化

- **广角边缘畸变与相邻遮挡**：广角相机画面边缘的车位存在透视拉伸，高大车辆（如大型 SUV、厢式货车）停在前景时容易遮挡相邻后排车位，建议单路相机划定车位不超过 30 个。
- **跨线停放与临界比例**：车辆严重压线或斜停跨越两个车位时，若两边车位覆盖率均在 0.2–0.3 的过渡区间，可能触发短时间状态抖动；可通过调大 `hold_s` 平抑。
- **地面强反光与阴影**：雨后积水反光、立柱或树木的强烈动态阴影可能干扰边缘检测置信度；夜间需确保停车场具备基础功能照明（地表照度 ≥ 30 Lux）。

## 数据与素材出处

- 截图与单路结果的输入为地面停车场静图，图片原始来源待确认。
- 检测模型代码 YOLOX：Apache-2.0。
