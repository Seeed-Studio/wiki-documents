---
description: 在厂区、仓库与机房门口搭一套本地的禁区入侵、越线与滞留告警：需要哪些设备、怎么部署、有哪些接口，以及三台主机上的实测时序与吞吐
title: 边缘安防告警方案：禁区入侵、越线与滞留的搭建、部署与实测数据
sidebar_label: '边缘安防告警'
keywords:
  - 边缘安防
  - 周界入侵检测
  - 越线检测
  - 滞留检测
  - 人员检测
  - 端侧 AI
  - edge security
  - intrusion detection
  - line crossing
  - loitering
  - reComputer
  - Jetson
  - RK3588
  - Hailo-8
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-4up-en-25c00317.png
slug: /solutions/edge-security
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/cn/solutions/edge-security/
generated_from: sensecraft-solutions@edge_security
---

:::caution[使用须知]
辅助告警，不是安防认证产品，不能替代人工巡查与门禁系统。
:::

## 这套方案是干什么的

在摄像头画面上画一个禁区、一条越线，有人进去或越过就告警；在禁区里待得太久，再叠一条滞留告警。检测、判定、存证、告警分发全部在现场那台边缘主机上完成，视频不出场地，断网也能用；规则编辑器和视频墙的画面也从现场设备取，浏览器直接连本地主机。

![走廊尽头的红色禁区里站着三个人，另一人正越过琥珀色的越线，箭头指向规则判为通过的方向](https://files.seeedstudio.com/wiki/reference-design/edge_security/corridor-overlay-63abe979.jpg)

三条规则的判定条件：

| 规则 | 触发条件 |
|---|---|
| 禁区入侵 | 被跟踪的人，中心点进入你画的多边形 |
| 滞留 | 该人进入后停留超过你设的时长，**叠加**在入侵告警之上，不替换它 |
| 越线 | 该人的轨迹越过你画的线段，可以只算一个方向，反向通过不报 |

规则以归一化坐标存储，所以换分辨率不用重画；但摄像头一动就必须重画，因为规则是画在那个视角上的。

系统拆成两个进程：**检测器**只做人员检测与逐人跟踪，把结果按一份公开的报文格式经 MQTT 发出；**hub** 订阅这些结果，判定规则、存告警、提供工作台。换一块新板卡只要写一个新检测器，判定这一侧不用动。

边界：只认人，车辆、包裹、工具这类目标要换检测模型并重新验证；每条告警存一张截图，不存视频片段，不做证据级录像。

- 开源实现：[github.com/suharvest/edge-security-kit](https://github.com/suharvest/edge-security-kit)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/edge_security)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>本地实时判定，视频不上云</h3>
                <p>人员检测、跟踪与多边形规则判定全部在现场主机完成，断网照常报警，网络仅传输几十字节的告警与抓图。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>现有 RTSP 摄像头直接复用</h3>
                <p>走标准 RTSP 取流与 H.264 解码，已有安防监控摄像头无需更换机位或重新布线。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>开箱即用，免云端服务器</h3>
                <p>Broker、规则引擎与 Web 管理工作台单机内置，浏览器直接打开管理，无需额外部署服务器或购买云端订阅。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>多平台硬件支持与代码开源</h3>
                <p>支持 Jetson（TensorRT）、RK3588（RKNN）与 Hailo-8（HailoRT），Docker 编排与模型部署代码完全开源。</p>
            </div>
        </li>
    </ul>
</div>

### 工作台

**视频墙**：每一路的实时画面平铺成网格，画面上叠着检测框（带跟踪编号与分数）、禁区多边形和越线箭头；下方汇总在线路数、待处理与已确认的告警计数。

![四路视频墙：每格叠着检测框与规则形状，右下角是每路的置信度滑块，一路离线的格子蒙着遮罩](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-4up-zh-5eb18ed2.png)

*演示画面：视频源是仓库自带的彩条测试源，用于展示界面、叠框与数值。*

网格随路数自适应，五路以上排成 3×3。

![九路视频墙](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-9up-zh-0b724776.png)

*演示画面。*

按 `F` 进入全屏模式，顶栏收起、格子铺满整屏，用于值班室的 HDMI 上墙显示。

![全屏模式：顶栏消失，九个格子铺满屏幕，右上角是「退出全屏 F」](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-fullscreen-zh-2509b6e9.png)

*演示画面。*

**画规则**：规则页的底图是这台摄像头自己的画面，由 hub 从检测器的预览接口代理过来，画的边界和检测器看到的是同一个坐标系。点击多次围出多边形（禁区），或点两次拉一条线段；线段方向可设双向、只算 forward 或只算 backward。滞留在禁区属性里设停留秒数。「模拟」按钮走一遍完整链路（入库、推送）自测，模拟告警带标记，不占冷却。

![规则编辑器：在实时画面上围出禁区多边形并拉出一条带方向的越线](https://files.seeedstudio.com/wiki/reference-design/edge_security/rules-editor-4c1e3847.jpg)

**调置信度**：每一路的置信度阈值在墙上直接调，不用改配置文件重启。返回 200 表示检测器已经在用新阈值；设备明确拒绝返回 409；没等到回执返回 504，界面不按成功刷新。

![置信度滑块调整中，四路各自读数不同](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-confidence-zh-67e547eb.png)

*演示画面。*

**加一路摄像头**：「添加摄像头」对话框在运行时挂一路新流，不用重新部署。重名的流编号在下发前就被 hub 拦下；单流运行的设备回执 `ok:false`，界面得到 409 和拒绝原因；没等到回执时对话框保持打开并提示结果未知。

![添加摄像头对话框，回显行里 RTSP 密码被打码](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-add-camera-zh-bf5316d8.png)

*演示画面。*

![添加摄像头超时：检测器没有回执，对话框保持打开并说明结果未知](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-add-camera-timeout-zh-99ae7cc2.png)

*演示画面。*

**处理告警**：告警列表按时间倒序，每条带触发时的现场截图、设备、流、规则名、跟踪编号和分数。确认后记下处置人和时间；列表可以按设备、流、规则名、时间段筛选，筛出来的结果可整份导出 CSV。

![告警工作台：告警列表与处置操作，底部是撤销条](https://files.seeedstudio.com/wiki/reference-design/edge_security/workbench-alerts-9a0d30e9.jpg)

![告警详情：放大的现场截图与该条的全部字段](https://files.seeedstudio.com/wiki/reference-design/edge_security/alert-detail-bd474e60.jpg)

## 需要哪些硬件

### 摄像头

一路固定机位的 IP 摄像头，**必须输出 H.264**——三条路线的解码路径都是按 H.264 建的。走标准 RTSP，现有摄像头不用换。

### 主机

一台就够，检测、判定、工作台都在上面。

| | 主机 | 加速方式 | 视频解码 | 端口占用 | 空闲磁盘 |
|---|---|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011 / Super J4012](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>Jetson Orin 模组 | Jetson GPU（TensorRT） | NVDEC 硬解 | 8090 / 1883 / 8099 | 约 10 GB（含引擎构建） |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 系列](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>瑞芯微 NPU | 瑞芯微 NPU（RKNN） | 板载 MPP 硬解 | 8090 / 1883 / 8099 | 约 6 GB |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>无风扇工业机箱 | Hailo-8（HailoRT） | CPU 软解 | 8090 / 1883 / 8099 | 约 6 GB |

各路线的额外前置条件：

- **Jetson**：检测器加载的是在目标设备上构建的 TensorRT 引擎，首次部署会在设备上构建，实测 361 秒。解码走 NVDEC，非 Jetson 主机在预检阶段就会失败，不会退到软解运行。
- **RK3588**：板卡上要有 `/usr/lib/librknnrt.so`，`python3` 能 import `rknn_toolkit_lite2`，并存在硬解节点 `/dev/mpp_service`。三者缺一，部署步骤会提前失败。
- **Hailo-8**：HailoRT 版本要与驱动一致（实测 4.21.0）。加速器上下文是独占的，`/dev/hailo0` 不能被别的进程占着。

**多个点位合成一份告警列表**：装共享 Hub 套餐，在一台常开机器上跑 broker、规则引擎和工作台，本机不带检测器，再把各检测器的 `mqtt_host` 指过去。接进来的检测器不必同型。

hub 不需要单独的服务器：在一块同时跑着检测器的 RK3588 板卡上实测占单核 3.7%、RSS 52.8 MB。

### 选型排他边界

- **通道数与分析深度**：单台主机若需承载 8 路以上 1080p 或 16 路以上 720p 视频的全帧率复杂周界跟踪，请勿选择入门级 J3011，应选配 J4012 或带独立硬件硬解的 RK3588 系列。
- **非有线网络接入**：周界视频分析对 RTSP 取流丢包敏感，不建议使用单频 Wi-Fi 作为主回传链路，现场应保障千兆有线网络接入。

## 现场怎么部署

机位要求：要防的门、通道或区域完整在画面里，人走过时不被货架、机柜或立柱长时间挡住。装好之后不能再动。

四个套餐（Jetson 单机、RK3588 单机、Hailo 单机、共享 Hub）都是两步：部署服务栈，然后打开工作台。具体到每台设备的操作步骤在可部署方案页：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/edge_security" target="_blank">
        <strong>在可部署方案页查看完整选型与部署步骤</strong>
    </a>
</div>

### 步骤 1：部署服务栈

填入主机地址和摄像头 RTSP 地址，部署三个容器：`mosquitto`（broker）、`hub`（规则引擎 + 工作台）、`detector`（检测器）。

部署完成后这一步会打印 hub 的健康检查返回，以及首次启动生成的管理员密码——**没有固定默认密码**，随机生成的那一条也写在 hub 容器里的 `/data/initial-password.txt`。随后打印检测器实际协商到的解码方式，期望是硬解：RK3588 上是 `mppvideodec`，Jetson 上是 `nvv4l2decoder`。

### 步骤 2：打开工作台

浏览器打开 `http://<主机地址>:8090`，用 `admin` 加打印出来的密码登录，按提示改密码。

![设备页：每台检测器一行，带在线状态、实际解码方式与模型版本](https://files.seeedstudio.com/wiki/reference-design/edge_security/devices-table-a04ae23a.jpg)

在**设备**页确认这台主机在线，解码列显示 `hw`。这个值由检测器从实时管线协商到的 GStreamer caps 读出，不取自配置文件。

## 有哪些接口

三种接法：

- **直接用工作台** — 值班室看视频墙、处置告警；告警列表按条件筛选后导出 CSV（`/api/alerts/export.csv`）。
- **业务系统拉告警** — 调 hub 的 REST 接口 `GET /api/alerts`，按状态、设备、流、规则名与时间段筛选；带 `after_id` 可以增量补齐。
- **接自有检测器或订阅检测结果** — 检测器经 MQTT 发 `sensecraft.detection/1`，运行时控制走 `cmd/control` / `cmd/ack`。

单机套餐的 broker 绑在回环地址上。要让别的机器订阅，需要开放端口并加密码文件，两步都要做。

### 检测结果上行

每个检测器发 `sensecraft.detection/1`：坐标是 `frame_norm`（归一化到原始画面）；`track_id` 从 1 开始，停留和越线都是逐轨迹的状态，不带跟踪的检测器喂不了 hub 侧的规则；`session_id` 每次进程启动都变，hub 据此区分重启过的设备并重置规则状态。

```json
{
  "version": "1.0",
  "device_id": "edge-sec-j4012-01",
  "stream_id": "camera_gate_north",
  "session_id": "sess_8f2a9c10",
  "timestamp": 1729000000.123,
  "detections": [
    {
      "track_id": 14,
      "class": "person",
      "confidence": 0.92,
      "bbox_norm": [0.42, 0.35, 0.58, 0.82]
    }
  ]
}
```

### 运行时控制下行

置信度和挂载的摄像头可以在运行时修改，不用重启：走 `cmd/control` 下发 `sensecraft.command/1`，用 `cmd/ack` 上的 `sensecraft.ack/1` 应答。

| `command` | 必需 `params` | 效果 |
|---|---|---|
| `set_conf_threshold` | `stream_id`、`conf_threshold`（0–1） | 该路检测器从下一帧起用新阈值 |
| `add_stream` | `stream_id`、`source`；可选 `name`、`rtsp_transport` | 新流启动，并出现在下一条状态消息里 |
| `remove_stream` | `stream_id` | 该流停止，并从状态消息里消失 |

应答语义：

- **`ok: true` 表示已生效**；只有重启才生效的改动 ack `ok: false` 并给出原因。
- **用 `request_id` 匹配请求和应答**；重复的 `request_id` 只执行一次、应答两次，QoS 1 的重投不会把一路流加两遍。
- **以 `applied` 为准**：检测器报它实际做了什么；`persisted` 说明改动是否写回配置、重启后是否保留。
- **没有应答按失败处理**：hub 的 REST 层返回 504。`cmd/control` 是可选的，没实现控制通道的检测器也能接入；只实现了部分命令的检测器对其余命令 ack `ok: false` 并点名缺哪个能力。

### hub 的 REST 接口

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/api/alerts` | 按 `state`、`device_id`、`stream_id`、`event_type`、`rule_name`、时间段筛选，默认 50 条，按时间倒序；带 `after_id` 时按 id 升序返回更大的行，供 WebSocket 重连补齐 |
| GET | `/api/alerts/export.csv` | 与上面同一份参数解析，UTF-8 BOM 的 CSV |
| PUT | `/api/rules/{device_id}/{stream_id}` | 保存规则，rev 自增 |
| POST | `/api/rules/{device_id}/{stream_id}/simulate` | 构造一条标记为模拟的告警走完整链路，绕过冷却，不请求截图 |
| PUT | `/api/devices/{device_id}/streams/{stream_id}/conf` | 调阈值，200 / 409 / 504 语义如上 |
| POST | `/api/devices/{device_id}/streams` | 运行时挂一路新流，成功 201 |
| DELETE | `/api/devices/{device_id}/streams/{stream_id}` | 摘掉一路流 |
| GET | `/api/devices/{device_id}/streams/{stream_id}/preview.jpg` | 单帧预览代理，缓存 1.5 秒。设备不可达或返回体不是 JPEG 一律 502，不返回灰底图 |

除 `/api/health` 和登录路由外全部走 cookie 会话鉴权。会话表持久化，hub 重启后未过期的会话继续有效。

## 性能与实测数据

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edge-security-kit" target="_blank">
        <strong>在 GitHub 查看源代码与部署 Compose</strong>
    </a>
</div>

### 判定时序

| 检测主机 | 越线误差 | 禁区误差 | 滞留误差 | 方向判定 | 截图 |
|---|---|---|---|---|---|
| reComputer J40 系列（J4012，Orin NX 16GB） | 0.109–0.268 s | 0.090 s | 0.090–0.290 s | 8/8 正确 | 8/8 可解码 |
| reComputer RK3588 系列 | 0.085–0.248 s | 0.056–0.057 s | 0.080–0.233 s | 8/8 正确 | 8/8 可解码 |
| reComputer R2000 系列（R2135-12，Hailo-8） | 0.006–0.189 s | 0.001 s | 0.004–0.200 s | 8/8 正确 | 8/8 可解码 |

条件：三台主机用同一段 1280×720 H.264 真值素材，5 fps，130 秒观测窗；误差是告警时刻与真值时刻之差，容差 ±0.5 秒。三台都没有出现反向误报。

复现：[edge-security-kit](https://github.com/suharvest/edge-security-kit)。

| 指标 | 数值 | 条件 |
|---|---|---|
| 被判定帧到告警落库 | p50 **23.8 ms** / p95 206.2 ms | reComputer R2000 系列 |
| 被判定帧到告警落库 | p50 **117.4 ms** / p95 297.0 ms | reComputer J40 系列 |
| 轨迹对齐（归一化框与真值轨迹之差） | 平均 0.00115、最大 0.00298 | reComputer J40 系列 |
| 轨迹对齐（归一化框与真值轨迹之差） | 平均 0.00204、p95 0.00322、最大 0.00463 | reComputer RK3588 系列 |

### 单路吞吐

| 检测主机 | 单帧推理 p50 | p95 | 全管线 p50 | 检测器 CPU | RSS | 解码 |
|---|---:|---:|---:|---:|---:|---|
| reComputer J40 系列（J4012，Orin NX 16GB） | 4.16 ms | 4.19 ms | 6.99 ms | 单核 5.5% | 310 MB | NVDEC，内核层确认 |
| reComputer RK3588 系列 | 36.2–44.5 ms | 55.8–56.2 ms | 38.1–46.3 ms | 单核 16.4–17.9% | 214 MB | 瑞芯微 MPP，内核层确认 |
| reComputer R2000 系列（R2135-12，Hailo-8） | 7.7 ms | 8.4 ms | 9.5 ms | 单核 8.7–13.0% | 127–131 MB | CPU 软解 |

条件：30 秒预热后采样 120 秒，`inference_time_ms` 与 `pipeline_ms` 读报文字段，各平台同一套定义；CPU 按 5 秒窗口折算成单核百分比。reComputer R2000 系列没有 H.264 硬解，全管线与 CPU 占用里都含 CPU 软解：单帧推理列可以与另两台比较，全管线列不能，且差距随分辨率增大。满负荷跑分循环测出的延迟偏乐观：Jetson 上循环比实际管线快 8%，RK3588 上快 6%–66%。

复现：[edge-security-kit](https://github.com/suharvest/edge-security-kit)。

### 多路

reComputer RK3588 系列实测到 32 路：

| 路数（720p @ 5 fps） | 结果 |
|---|---|
| 16 | **跑满源速率**，最差 p95 46.9 ms，NPU 占三核容量的 41%，CPU 用掉 8 核中的 1.4 核，剩余内存 7.3 GB |
| 24 | 119.9 次推理/秒，四路各丢 1–3 帧；三个 NPU 核心读数 79.5 / 61.3 / 42.6% |
| 32 | 交付 160 中的 157，十四路丢帧，推理 p50 从 33 ms 升到 99 ms |

- **RGA 比 NPU 先到瓶颈。** 32 路的丢帧来自解码期缩放器报 `RGA_BLIT fail`，每路的失败计数与丢帧的路对应；硬解本身没有回退，32 路全程走 `mppvideodec`。
- **多路部署受内存限制。** 新进程占 173–226 MB，但 rknnlite 的引用循环会让进程持续变大，跑了两天的检测器实测 1839 MB，16 个这样的进程装不进 16 GB。多路部署要用 ctypes 后端或定期 `gc.collect()`。
- 共享 Hub 上实测过的最大规模是两路并发。

### 运行时与关键参数

各主机的运行时与解码方式见「需要哪些硬件」的主机表。影响部署效果的参数：

- `require_hw_decode`（默认开）— 检测器拒绝 CPU 解码。设备页解码列显示 `sw` 说明它被关掉了。
- 每路 `conf_threshold`（0–1，可在视频墙上运行时调）— int8 模型多出低置信度框时先调高阈值，仍不行再换回 fp16。
- `preview_advertise_host` — 要填主机的局域网地址，hub 才能从 8099 端口代理到画面，否则规则页底图是灰的。

### 已知退化

- reComputer RK3588 系列的单帧推理 p50 在多次运行间会浮动约 8 ms，p95 可复现。
- 检测器跟不上视频流时，跟踪器会不断发新的跟踪编号，一个人站着不动也会重复报警。用设备页的检测速率与摄像头帧率对照。

## 数据与素材出处

- 判定时序的真值素材由脚本按秒级轨迹合成，越线与入区的真实时刻在跑之前就已知。
- 工作台截图的视频源是仓库自带的彩条测试源。
- 运行时代码可以直接用于商业产品，人员检测模型各自保留自己的条款。出货前确认所用检测权重的授权是否适合你的产品，或替换成授权兼容的模型。
