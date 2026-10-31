---
description: 用现有出入口摄像头加一台边缘主机做车牌识别与白名单自动抬杆：需要哪些设备、怎么部署、有哪些接口，以及 Jetson 与 RK 主机上的实测数据
title: 边缘车牌识别方案：选型、部署与实测数据
sidebar_label: '边缘车牌识别'
keywords:
  - 车牌识别
  - 停车场车牌识别
  - 道闸白名单
  - 自动抬杆
  - ANPR
  - license plate recognition
  - Jetson Orin Nano
  - Jetson Orin NX
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg
slug: /solutions/edge-license-plate-recognition
sidebar_position: 20
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/cn/solutions/edge-license-plate-recognition/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[使用须知]
支持中国大陆单行蓝牌（7 位）和新能源绿牌（8 位）；双行车牌、特种车牌和海外车牌不支持。车牌检测与识别权重的许可尚未确认，商用分发前需单独确认。
:::

## 这套方案是干什么的

保留出入口已经装好的网络摄像头，旁边加一台识别主机在现场读车牌。白名单里的车到了，道闸控制器给道闸发一次开闸信号；每辆车留下车牌号、可信度和截图记录。用在小区、园区、企业停车场的出入口，也可以不接道闸，只做进出记录。

- 部署包（Docker Compose 与配置）：[github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_plate_recognition)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/edge-anpr-plate-recognition)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>车牌和画面留在现场</h3>
                <p>识别在现场主机上完成，截图默认在主机上保留 7 天，只有按链接取图时才传出。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>1080p 每秒 30 帧</h3>
                <p>reComputer J30 系列与 RK3576 系列处理 1080p 画面均达到每秒 29–30 帧，见「性能与实测数据」。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>不换摄像头</h3>
                <p>现有 1080p 网络摄像头经 RTSP 接入，识别主机通过局域网拉流。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>每辆车一条记录</h3>
                <p>一辆车只上报一次：车牌号、车牌类型、可信度和截图链接，停车场系统订阅一个 MQTT 主题即可。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示

识别主机自带的浏览器预览页：画面上框出车牌并标出号码与可信度，右侧列出最近 5 次读牌。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg" alt="reComputer J30 系列上的车牌识别预览页：蓝牌 皖A62599，可信度 0.98，右侧为最近 5 次读牌"/>
</div>

输入画面是 CCPD 公开数据集测试集的静图（MIT 许可），经 RTSP 循环播放，不是现场录像。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-2-jetson-green-front-20261009-a3ab0b16.jpg" alt="reComputer J30 系列读取车头新能源绿牌 皖AF10528，可信度 0.87"/>
</div>

## 需要哪些硬件

现场需要三样东西：出入口摄像头、一台识别主机，需要自动抬杆时再加一台道闸控制器和一个中间继电器。

**① 出入口摄像头**：用现有的网络摄像头，1080p 及以上，支持 RTSP 视频流。

**② 识别主机**：四选一，一台接一路出入口摄像头。

| | 识别主机 | 实测（1080p 输入） | 什么时候选它 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>Jetson Orin Nano，JetPack 6.2 | 每秒 30 帧 | 默认选择 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>Jetson Orin NX，JetPack 6.2 | 与 J30 同一应用包 | 这台主机还要跑别的模型 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 系列](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>板载 NPU | 部署与输出已实测 | 现场统一用瑞芯微平台 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 系列](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>板载 NPU | 每秒 29–30 帧 | 成本优先 |

**③ 道闸控制器（可选）**：[reComputer R1100 系列（R1124-10）](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html)。它运行 MQTT 服务器、保存白名单，用数字输出经导轨式中间继电器给道闸发开闸信号。关闸仍由道闸自己的地感或雷达负责。

摄像头、识别主机、道闸控制器在同一局域网，建议有线连接。

## 现场怎么部署

### 一、装摄像头

:::tip[车牌在画面里要清晰可读]
摄像头装在距车道 3–8 米处，固定机位，对准车辆经过时车牌所在的位置。识别只在画面中设定的区域内进行（默认画面中下部），机位变了要重新检查这块区域。
:::

### 二、装软件：三步

逐设备的操作步骤在可部署方案页，这里只讲轮廓。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/edge-anpr-plate-recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并部署 🖱️</font></span></strong>
    </a>
</div><br />

1. **道闸控制器（可选）**：在 R1124-10 上装 MQTT 服务器和开闸服务，上传白名单 CSV，用测试开闸接口确认道闸动作。
2. **识别主机**：填摄像头 RTSP 地址和 MQTT 服务器地址后部署。首次部署需要联网下载运行程序和识别模型，之后可断网运行。
3. **验证**：浏览器打开识别主机 8080 端口的预览页，车辆经过时能看到框出的车牌；订阅车牌主题，能收到每辆车一条记录。

上线前用你自己出入口的白天和夜间画面，对照实际车牌核对识别结果。

## 有哪些接口

识别结果经 MQTT 发到你在部署时填写的服务器（通常是 R1124-10），截图与状态走 HTTP。

- **停车场系统 / 计费系统**：订阅车牌主题，每辆车一条记录，用 `plate_normalized` 字段对账。
- **道闸**：R1124-10 收到车牌记录后比对白名单，开闸结果发到开闸主题。同一车牌在冷却时间内再次到达时记为 `suppressed`，不重复开闸。
- **自建系统**：按记录里的截图链接取图，或用健康检查接口监控识别服务。

| 主题 / 端口 | 内容 |
|---|---|
| MQTT `<site>/parking/<camera>/plate` | 车牌号、车牌类型（`cn_blue` / `cn_green`）、可信度、投票帧数、画面位置、截图链接 |
| MQTT `<site>/parking/<camera>/gate` | 开闸记录：`open_pulse`（已开闸）或 `suppressed`，附对应车牌记录与白名单标签 |
| MQTT `<root>/status` | 识别服务状态，定时发布；主机离线时服务器上保留最后一条 |
| HTTP 8080 `/snapshots/{seq}.jpg` | 车牌记录里链接的截图，默认保留 7 天 |
| HTTP 8081 `/whitelist`（R1124-10） | GET 取当前白名单 CSV，PUT 整体替换（格式错误返回 400 并指出行号）；`POST /gate/test` 触发一次测试开闸 |
| HTTP 8099 `/healthz` | 识别服务状态，含处理速度 |

截图不嵌在记录里，记录只带链接和截图的 sha256。

## 性能与实测数据

### 处理速度

| 设备 | 处理速度 | 单帧车牌检测 | 条件 |
|---|---:|---:|---|
| reComputer J30 系列（Orin Nano） | 29.9 fps（实测） | p50 5.6 ms（实测） | 1080p RTSP，30 fps 输入 |
| reComputer RK3576 系列 | 29–30 fps（实测） | p50 23.1 ms，识别 1.8 ms（实测） | 同上 |

复现：`sensecraft-solutions/solutions/edge_plate_recognition`（部署包）+ 输入视频 `plate-labeled40-1080p-120s.mp4`

### 读牌结果

输入为 CCPD 测试集车牌静图，每张静止若干秒后切换，经 RTSP 以 1080p 播放。真值取自 CCPD 文件名。

| 设备 | 输入 | 结果 |
|---|---|---|
| reComputer J30 系列 | 40 张静图 | 发出 56 条车牌记录，其中 50 条与真值一致（实测） |
| reComputer RK3576 系列 | 40 张静图 | 发出 57 条车牌记录，其中 51 条与真值一致（实测） |
| reComputer J30 系列 | 8 张静图 | 5 张读对，3 张未发出记录，错误车牌 0（实测） |
| reComputer RK3588 系列 | 8 张静图 | 5 张读对，3 张未发出记录，错误车牌 0（实测） |

一张静图停留期间可能产生多条记录，所以记录数多于静图数。读不出时宁可不发：两台设备 8 张静图里都没有发出错误车牌。

复现：`sensecraft-solutions/solutions/edge_plate_recognition/gallery/ATTRIBUTION.md`（8 张静图的文件名与真值）

### 模型与运行时

| 设备 | 检测 | 识别 | 运行时 |
|---|---|---|---|
| reComputer J30 / J40 系列 | YOLOX-Tiny，640×640，FP16 | 自研 PlateRecNet，96×32，FP16 | TensorRT，硬件解码 |
| reComputer RK3588 / RK3576 系列 | YOLOX-Tiny，640×640，INT8 | PlateRecNet，96×32，INT8（输出层 FP16） | RKNN 运行时 2.3.2，MPP 硬件解码 |

影响部署效果的参数（部署包 `config/plate.json`）：

- `plate.roi`：识别区域，默认画面中下部。机位变化后要重新框。
- `plate.vote`：同一辆车最多取 7 帧投票，至少 3 帧一致且可信度不低于 0.6 才发出记录。
- `plate.dedup_s`：同一车牌 30 秒内只发一次。

### 已知退化

- **特殊车牌不识别**：仅支持单行蓝牌（7 位）与新能源绿牌（8 位）；双行黄牌、教练车、挂车、警车及港澳/海外车牌不在此模型支持范围内。
- **机位与进车角度**：车辆需正向或小角度驶入（偏角 ≤ 30°），车牌在画面中宽度需大于 96 像素；大角度侧向驶入或车速高于 30 km/h 时检出率会下降。
- **逆光与强光反光**：车牌表面反光或夜间远光灯直射可能导致局部过曝与字符笔画丢失；无环境光的场地需加装 5000K 均匀补光灯。

## 数据与素材出处

- CCPD（Xu, Z. et al., ECCV 2018）：[github.com/detectRecog/CCPD](https://github.com/detectRecog/CCPD)，MIT License，Copyright (c) 2017 CCPD。上方截图的输入画面来自其测试集，图中为公开数据集里的真实车牌。
- 检测模型代码 YOLOX：Apache-2.0。识别模型结构为自写代码。两者的训练权重许可尚未确认，商用分发前需确认。
