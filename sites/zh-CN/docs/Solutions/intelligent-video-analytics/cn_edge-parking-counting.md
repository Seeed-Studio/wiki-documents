---
description: 用出入口现有摄像头统计停车场车辆进出并实时发布剩余车位：需要哪些设备、怎么部署、有哪些接口，以及 Jetson 与 RK 主机上的实测数据
title: 停车场车辆进出计数方案：选型、部署与实测数据
keywords:
  - 停车场车辆计数
  - 车辆进出计数
  - 剩余车位
  - 余位屏
  - 越线计数
  - vehicle counting
  - Jetson Orin Nano
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg
slug: /solutions/edge-parking-counting
sidebar_position: 21
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/solutions/edge-parking-counting/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[使用须知]
一套设备接一路摄像头，对应一个出入口。计数靠车辆越过画面上的计数线，被遮挡、未越线的车辆不计入。
:::

## 这套方案是干什么的

停车场想知道场内还剩几个车位，不用在每个车道埋地感线圈或装道闸计数器。部署后在网页画面上拖出一条计数线，车辆越线时记一次进或出，场内车辆数和剩余车位实时发到你的 MQTT 服务器，可直接驱动余位屏或停车系统。用在商场、写字楼停车场和园区、工厂大门。

- 部署包（Docker Compose 与配置）：[github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_parking_counting)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/parking-entry-exit-counting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>视频不出场地</h3>
                <p>画面在出入口旁的主机上分析，对外只发计数结果。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>越线即时计数</h3>
                <p>reComputer J30 系列实测 41 次越线全部计入、方向全部正确，见「性能与实测数据」。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>用现有摄像头</h3>
                <p>出入口已有的 RTSP 网络摄像头直接接入，不埋线圈、不改道闸。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>进出分开、区分车型</h3>
                <p>每条进出记录带方向和车型（轿车、摩托车、公交车、卡车）。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示

计数主机自带的浏览器预览页：黄色竖线是计数线，车辆带跟踪编号和置信度，右侧是在场车辆、剩余车位和今日进出总数。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-1-before-20261009-e25d0080.jpg" alt="reComputer J30 系列上的出入口计数：车辆 #48 越线前，在场 1/120，今日驶入 24、驶出 23"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg" alt="同一车辆越线后，今日驶出变为 24，在场 0/120"/>
</div>

两张截图相隔 3 秒。输入是合成测试视频（一辆车的图像在灰色背景上往返），不是现场录像。

## 需要哪些硬件

现场需要三样东西：出入口摄像头、一台计数主机、一台 MQTT 服务器（现场已有的，或自行安装 Mosquitto）。

**① 出入口摄像头**：现有网络摄像头，RTSP 输出 H.264 或 H.265，固定拍摄车道。

**② 计数主机**：四选一，一台接一路摄像头。

| | 计数主机 | 实测处理速度 | 什么时候选它 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J30 系列（J3011）](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Jetson Orin Nano，JetPack 6.2 | 每秒 30 帧 | 车辆正常行驶通过的出入口 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 系列（J4012）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Jetson Orin NX，JetPack 6.2 | 与 J30 同一应用包 | 这台主机还要跑别的模型 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 系列](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>板载 NPU | 每秒 30 帧 | 车辆正常行驶通过，成本优先 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 系列](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>板载 NPU | 每秒约 3 帧 | 车辆减速或停车抬杆后通过的道闸出入口 |

J30 与 RK3576 的速度是 640×360、30 帧/秒输入下测得；RK3588 是 1280×720、5 帧/秒输入下测得。

计数主机、摄像头和 MQTT 服务器在同一局域网或彼此可达。首次部署需联网下载应用（约 0.5–0.7 GB）和识别模型，之后可断网运行。

## 现场怎么部署

### 一、装摄像头

:::tip[车辆要完整穿过计数线]
摄像头固定拍摄车道，车辆从画面一侧进、另一侧出。用 RK3588 主机时，车辆经过计数线需在画面中停留约 1 秒以上才能被稳定计数，适合有道闸的出入口。
:::

### 二、装软件：三步

逐设备的操作步骤在可部署方案页，这里只讲轮廓。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/parking-entry-exit-counting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并部署 🖱️</font></span></strong>
    </a>
</div><br />

1. **部署计数主机**：填摄像头 RTSP 地址、MQTT 服务器、车位总数，部署时自动检查板上的运行库。
2. **画计数线**：在预览页上拖出计数线，选定哪一侧是「驶入」，保存即生效。
3. **验证**：车辆越线后，预览页的驶入或驶出数加 1，MQTT 上收到一条进出记录。

## 有哪些接口

计数结果经 MQTT 发到你的服务器，状态走 HTTP。

- **余位屏 / 停车系统**：订阅场内概况主题，读剩余车位；降到 0 时切换「车位已满」。
- **流量统计**：订阅进出记录主题，按方向和车型统计。
- **多出入口汇总**：每个出入口各部署一套，上层系统按停车场编号汇总。

| 主题 / 端口 | 内容 |
|---|---|
| MQTT `<site>/parking/<entrance>/crossing` | 每辆车越线一条：方向（驶入 / 驶出）、车型、置信度、越线后的场内车辆数和剩余车位 |
| MQTT `<site>/parking/<entrance>/occupancy` | 场内车辆数、车位总数、剩余车位、今日驶入数、今日驶出数，每次越线后发送 |
| HTTP 8080 `/preview` | 浏览器预览页：画面、计数线、在场与余位 |
| HTTP 8099 `/healthz` | 是否收到摄像头画面、每秒处理多少帧 |

## 性能与实测数据

### 计数结果与处理速度

| 设备 | 输入 | 处理速度 | 计数结果 |
|---|---|---|---|
| reComputer J30 系列（Orin Nano） | 640×360，30 fps | 29.98 fps，单帧分析 p50 3.6 ms（实测） | 41 次越线全部计入，方向全部正确（实测） |
| reComputer RK3576 系列 | 640×360，30 fps | 30.0 fps，容器 CPU 14.9%、内存 95 MiB（实测） | 越线事件 19 条：驶入 9、驶出 10（实测） |
| reComputer RK3588 系列 | 1280×720，5 fps | 3.0 fps，单帧分析 p50 17.8 ms（实测） | 越线事件 107 条（实测） |

输入均为合成测试视频：一辆车的图像在灰色背景上往返越线。RK3588 每秒处理约 3 帧，低于 5 帧/秒的输入，车辆需在计数线附近停留约 1 秒以上。

复现：`sensecraft-solutions/solutions/edge_parking_counting`（部署包）+ 合成视频 `count-synthetic-120s.mp4`

### 模型与运行时

| 设备 | 车辆检测 | 运行时 |
|---|---|---|
| reComputer J30 / J40 系列 | YOLOX，416×416，FP16 | TensorRT |
| reComputer RK3588 / RK3576 系列 | YOLOX，416×416，INT8（w8a8） | RKNN，MPP 硬件解码 |

影响计数效果的参数（部署包 `config/counting*.json`）：

- `counting.line` / `in_side`：计数线位置与哪一侧算驶入，部署后在预览页上改。
- `counting.min_track_frames`：车辆至少连续跟踪 3 帧才计数，帧率低时需车辆在画面中停留更久。
- `counting.capacity`：车位总数，剩余车位 = 总数 − 场内车辆数。

### 已知退化

- **并排与跟车遮挡**：前后跟车间距小于 1 米或双向车辆同时并排压线时，目标跟踪框容易粘连或被前车遮挡，可能导致漏计或方向误判；建议车道加装物理隔离或限宽隔离柱。
- **行人与非机动车干扰**：模型主要识别机动车轮廓；若行人密集横穿计数线或电动车紧贴机动车通过，可能影响轨迹连续性。
- **车速与采样率匹配**：车辆经过虚拟计数线需至少连续跟踪 3 帧。出入口车道建议限速 ≤ 15 km/h；车速过快可能导致跨线帧数不足而漏计。

## 数据与素材出处

- 截图与计数结果的输入为合成测试视频，车辆图像的原始来源待确认。
- 检测模型代码 YOLOX：Apache-2.0。
