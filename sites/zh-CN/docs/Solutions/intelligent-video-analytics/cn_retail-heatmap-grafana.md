---
description: 在门店、展厅这类室内空间搭一套本地人流热力图：需要哪些设备、怎么部署、有哪些接口，以及三台设备上的实测帧率
title: 零售人流热力图方案：搭建、部署与实测数据
keywords:
  - 人流热力图
  - 客流分析
  - 驻足时长
  - 进出店计数
  - 端侧 AI
  - people counting
  - heatmap
  - edge AI
  - reCamera
  - reComputer
  - Hailo-8
  - RK3588
  - MQTT
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/grafana-dashboard-e374aff6.png
slug: /solutions/retail-heatmap-grafana
sidebar_position: 3
last_update:
  date: 09/17/2026
  author: seeed-solutions-hub
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/cn/solutions/retail-heatmap-grafana/
generated_from: sensecraft-solutions@recamera_heatmap_grafana
---

:::caution[使用须知]
热力图只记录**人在哪里**，不识别身份，也不做人脸比对。检测准确率未评测，见[性能与实测数据](#附录实测数据)。
:::

## 这套方案是干什么的

摄像头俯拍店面，识别画面里每个人的位置并持续跟踪，把「人停在哪、停了多久、进出多少人」写进本地数据库，在 Grafana 看板和一张热力图上呈现。用在零售门店、连锁门店试点、展厅展馆，以及任何布局决策依赖人往哪走的室内空间。

已有 IP 摄像头的场所保留摄像头，只加一台做识别的 AI 主机；还没有摄像头的场所用一台 reCamera，检测在摄像头内部完成。视频在现场处理，后端只存数字。在真实 RTSP 流上，reComputer R2000 系列（Hailo-8）实测 14.3 FPS（源 15 FPS），reComputer RK3588 / RK3576 系列为 13.2 / 13.3 FPS。

- 开源实现（reCamera 直连路线）：[github.com/xr686/reCamera-with-Heatmap](https://github.com/xr686/reCamera-with-Heatmap)
- 开源实现（IP 摄像头 + Jetson 路线）：[github.com/bleaaach/yolo11-grafana-influxdb](https://github.com/bleaaach/yolo11-grafana-influxdb)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/recamera_heatmap_grafana)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>本地处理，后端只存数字</h3>
                <p>检测在摄像头或 AI 主机上完成，发到后端的是位置百分比、计数与驻足时长。实时预览走本地视频网关，不出你的网络。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>已有摄像头直接接入</h3>
                <p>带 RTSP 流的 IP 摄像头品牌不限，墙上的设备不用换。没有摄像头时，reCamera 装上零售分析应用即可出数据。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>5 种硬件组合，一个看板</h3>
                <p>reCamera 2002、reCamera Pro、瑞芯微、Hailo-8、Jetson 五条路线发同一种消息格式。多家门店混用硬件，也汇总到同一台后端。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>部署完成后不依赖外网</h3>
                <p>broker、数据库、看板都在本地后端。只有部署时需要联网拉取镜像和模型。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示

设备实际输出汇总到 Grafana 看板：左侧是实时画面，其余面板是按时间聚合的在场人数、驻足状态与进出店计数。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/grafana-dashboard-e374aff6.png" alt="Grafana 看板：实时画面与按小时、天、周聚合的人流、驻足与进出计数面板"/>
</div>

同一份位置数据也可以画成热力图。颜色深的地方是人停留时间长、经过次数多的地方；默认叠在摄像头视角上，校准之后可以叠到店铺平面图上。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/heatmap-demo-c6a45c6f.png" alt="空间热力图：人员位置累积成热区，叠在摄像头视角画面上"/>
</div>

## 需要哪些硬件

三样东西：出画面的摄像头、跑识别的设备、存数据并画图的后端。后端是所有路线共用的那一台。

**① 摄像头** — 已经有带 RTSP 流的 IP 摄像头就直接用，品牌不限，墙上的设备一台不用换。没有的话，reCamera 2002 / reCamera Pro 把摄像头与算力做在一台里，检测、跟踪、驻足判定、进出计数全部在摄像头内完成。

**② 检测主机** — 只有 IP 摄像头路线需要。各主机跑同一套跟踪与驻足判定逻辑，区别只在加速器。

**③ 看板后端** — 跑 MQTT broker、InfluxDB、Grafana 和视频网关。可以是一台常开的电脑，也可以是 reComputer R1100；IP 摄像头路线上，它可以和检测器跑在同一台盒子上。

| | 设备 | 承担什么 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-64GB-p-6252.html)<br/>摄像头与算力一体，1080P | 检测 + 跟踪 + 计数 | 离统计区域近、范围小，最快跑通一路 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>摄像头与算力一体，4K | 检测 + 跟踪 + 计数 | 离得远、范围大，远处的人仍要够大能被框出来 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 系列](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>同一套餐也支持 reComputer RK3576 系列 | 检测主机 | 已经在用瑞芯微板卡；视频解码走硬件 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrial-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer R2000 系列（R2035-12，Hailo-8）](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | 检测主机 | 要装进机柜或弱电井的无风扇工业机 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 系列（J4012）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>及 reComputer J50 系列 | 检测主机 | 一台主机接多路摄像头 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-113991334--recomputer-r1125-10-45font.jpg" alt="reComputer R1100" width="110" /> | [reComputer R1100 系列（R1124-10）](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html) | 看板后端 | 现场没有常开的电脑跑看板 |

其它前置条件：后端所在机器装好 Docker、留出至少 2 GB 磁盘、空出 1883、3000、8080、8086 端口；摄像头与后端在同一网段，摄像头自动发现（ONVIF）才能生效。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/architecture-zh-44e31a81.png" alt="人流热力图的设备构成：IP 摄像头以 RTSP 接到 reComputer AI 主机，主机与 reCamera 2002 / Pro 以 MQTT 发到 reComputer R1100 后端，Grafana 看板经 HTTP 打开"/>
</div>

设备构成：IP 摄像头以 RTSP 把视频交给 AI 主机，reCamera 在摄像头内完成检测；检测端只输出坐标百分比与计数，不含图像；所有检测端汇到一台后端（MQTT broker、InfluxDB、Grafana、go2rtc 视频网关），一个看板覆盖全部摄像头。实时预览由浏览器经本地视频网关向摄像头取流，不经过后端数据库。

### 选型排他边界

- **安装高度与视场覆盖**：reCamera 2002 适合 3–4 米低层高、小面积区域；安装高度超过 5 米或大广场中庭时，请勿选用 2002，应选配 4K 分辨率的 reCamera Pro。
- **身份追溯需求**：本方案仅统计人流密度与移动轨迹热力，不进行人脸抓拍与身份识别；有合规实名要求的场景不适用。

## 现场怎么部署

分两步：先把摄像头装对位置，再把软件装上去。

### 一、装摄像头

:::tip[机位要求]
摄像头架高，俯视要统计的区域，距离目标 3–5 米。人在画面里至少要占到约 30 × 30 像素，否则框不出来。平视机位、人相互遮挡严重的角度、人像过小的远景，都会出现漏检。
:::

### 二、装软件：三到四步

具体到每台设备的操作步骤在可部署方案页，那里按现场条件选完配置后可以直接下载对应的应用包。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/recamera_heatmap_grafana" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

1. **起后端** — 在那台常开的机器上拉起 broker、InfluxDB、Grafana 与视频网关。这一步会自动发现同一网段的 ONVIF 摄像头；不在同一网段的摄像头，在部署表单里手填 RTSP 地址。
2. **让检测端发数据** — reCamera 路线是在摄像头上安装零售分析应用；IP 摄像头路线是把检测器部署到 AI 主机。两边都要填三项：MQTT 服务器地址（第 1 步那台机器）、**安装点名称**和**摄像头编号**。同一门店用同一个安装点名、每台摄像头一个编号，看板据此区分设备。
3. **校准平面图（可选）** — 打开 8080 端口的热力图，上传一张摄像头截图和一张店铺平面图，各点 4 个对应位置。参考点选柱子、门口、墙角这类间距大的标志物。校准保存在服务器上，多台摄像头可共用一张平面图。只看摄像头视角时这一步可以跳过。
4. **打开看板** — Grafana 在 3000 端口，实时热力图在 8080，视频网关在 1984。

上游标注的整体耗时为 **15 分钟**。Jetson 路线例外：首次部署要在设备上编译 TensorRT engine，需要 2–5 分钟，之后的部署直接复用。

## 有哪些接口

所有检测端都往后端 broker 发同一种消息格式，按你手上已有的系统分三条：

- **现成看板够用** — 不用接。Grafana 面板已经按小时、天、周做好人流趋势、驻足与进出计数，面板数据可以直接导出。
- **已有 BI / 分析系统** — 订阅 MQTT 结果主题拿实时数据，或直接查后端 InfluxDB 取历史数据。
- **自建系统 / API** — 同上订阅，payload 里带区域计数和每个跟踪对象的位置与驻足时长，够画自己的面板。实时画面经本地视频网关（1984）取。

### 完整的主题与 payload

| 主题 / 端口 | 内容 | retained |
|---|---|---|
| `<安装点>/retail-vision/results/<摄像头编号>` | 每秒一条批量 JSON：区域计数（在场、浏览、驻足、需要帮助、进店、出店、平均驻足时长），以及每个跟踪对象的 `track_id`、位置与驻足时长 | 否 |
| `<安装点>/retail-vision/status` | `online` / `offline` | 是 |
| MQTT broker 1883 | 接收所有检测端的结果 | — |
| Grafana 3000 | 按小时、天、周的人流趋势；驻足与进出计数 | — |
| 实时热力图 8080 | 热力叠加在摄像头画面或店铺平面图上；齿轮图标进入校准 | — |
| 视频网关 1984 | 摄像头发现与实时预览 | — |

`<安装点>` 和 `<摄像头编号>` 在部署表单里填写，只允许字母、数字、连字符和下划线。

**位置以画面百分比发布。** 检测端把跟踪框中心换算成百分比再发出，同一次平面图校准在任何摄像头分辨率下都成立，换一台更高分辨率的摄像头不必重新校准。

**消息每秒一批。** reCamera 上由 `--mqtt-interval-ms 1000` 控制，不加这个参数时应用按帧发布（约 10 条/秒/摄像头）；AI 主机路线由检测器配置里的 `publish_hz: 1.0` 控制。一个站点接多台摄像头时，broker 能否承受取决于这个参数。

**reCamera Pro 不输出人均驻足时长**，看板上的 Avg Dwell 面板会一直是空的，其余指标不受影响。

## 性能与实测数据 {#附录实测数据}

四条 AI 主机路线跑同一套跟踪与驻足判定逻辑，检测模型与运行时按加速器各不相同。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/xr686/reCamera-with-Heatmap" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reCamera-with-Heatmap</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

下面是吞吐与消息率两类设备实测数据，来自 RK 与 Hailo 两条路线的单路实时流。

### 实测了哪些设备

| 设备 | 加速器 | 下发的模型 | 验证状态 |
|---|---|---|---|
| reComputer RK3588 系列 | RK3588 NPU | YOLO11n rawhead FP16 | ✅ 真机实时流 |
| reComputer RK3576 系列 | RK3576 NPU | YOLO11n rawhead FP16 | ✅ 真机实时流 |
| reComputer R2000 系列（R2135-12，Hailo-8） | Hailo-8 | YOLOv8n INT8 | ✅ 真机实时流 |
| reCamera 2002 | SG2002 NPU | YOLO11n INT8 | 部署已跑通 |

### 性能实测详表 {#性能实测详表}

#### 真实视频流下的端到端帧率

输入是真实 RTSP 画面，测量范围是**从摄像头出帧到结果到达后端**的完整链路：解码 + 检测 + 跟踪 + 驻足判定 + MQTT 发布，一台主机接一路。

| 检测主机 | 检测模型 | 跟踪帧率 | MQTT 消息率 | 来源 |
|---|---|---:|---:|---|
| reComputer R2000 系列（R2135-12，Hailo-8） | YOLOv8n INT8 | **14.3 FPS** | 0.94 条/秒 | 实测（440 帧 / 30.7 秒） |
| reComputer RK3588 系列 | YOLO11n FP16 | **13.2 FPS** | 1.00 条/秒 | 实测 |
| reComputer RK3576 系列 | YOLO11n FP16 | **13.3 FPS** | 1.00 条/秒 | 实测 |

- **RK 两块板**：MPP 硬件解码处于激活状态，消息率 1.00 条/秒。
- **Hailo 这一行的 14.3 FPS 受源帧率限制。** 同一条流水线不限速时实测 **234 FPS**，约为 15 FPS 源的 15 倍。
- **消息率 0.94 与 1.00 的差别来自统计方式**：两者目标都是每秒一条，0.94 是 30.7 秒窗口内的平均值。
- **复现**：端到端与推理测试脚本位于方案仓库 `benchmarks/run_heatmap_bench.sh`，执行 `./run_heatmap_bench.sh --profile rk3588`。

#### 单独推理速度

| 检测主机 | 检测模型 | 单次推理 | 来源 |
|---|---|---:|---|
| reComputer J40 / J50 系列 | YOLO11n FP16（TensorRT） | 9.7 ms | 上游给出的单独推理数字 |
| reCamera 2002 | YOLO11n INT8 | 约 10 FPS | 上游在应用说明里标注的摄像头内帧率 |

这两行与上面的端到端表不能直接比较：9.7 ms 不含解码、跟踪与发布，约 10 FPS 是摄像头内的处理速率，不是到达后端的速率。

#### 多路

上面每个数字都是一台主机接一路。「一台主机接多路」是套餐设计上的分工（由 Jetson 路线承担）。一台后端在协议上可以接任意数量的检测端，按安装点名与摄像头编号区分；上限在 AI 主机侧。

### 运行时与关键参数

| 检测主机 | 检测模型 | 精度 | 运行时 | 模型交付方式 |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n（`yolo11n_detection_cv181x_int8.cvimodel`） | INT8 | SG2002 摄像头 NPU | 随 `retail-vision_1.5.1_riscv64.deb` 一起下发，按 sha256 校验 |
| reCamera Pro | 应用中心 `retail-vision` 应用自带 | 由应用决定 | 摄像头 NPU | **不随套餐分发**，需先在设备应用中心安装 |
| reComputer RK3576 / RK3588 系列 | `yolo11n_pose_rawhead_fp16.<板卡>.rknn` | FP16 | RKNN | 按板卡下发并按 sha256 校验；选错板卡型号模型无法加载 |
| reComputer R2000 系列（R2135-12，Hailo-8） | YOLOv8n（`yolov8n.hef`） | INT8 | HailoRT 4.21 + GStreamer | 从 Hailo Model Zoo v2.15.0 的 hailo8 目录取，按 sha256 固定 |
| reComputer J40 / J50 系列 | YOLO11n（`yolo11n.engine`） | FP16 | TensorRT | 引擎在**设备上现场构建**（`ultralytics` 导出，`half=True`、`imgsz=640`），首次 2–5 分钟，之后复用 |

- **Hailo 锁定 HailoRT 4.21。** 部署前检查板上库版本，不匹配就停下并打印实际版本。一块 Hailo-8 同时只跑一个应用，板上已有别的 Hailo 应用在跑时检测器起不来。
- **RK 板卡需已装 NPU 驱动**（`/usr/lib/librknnrt.so`）。
- **reCamera 上分析应用独占摄像头**：安装时会停掉 Node-RED 自启动，两者不能同时运行。

影响部署效果的参数（RK 与 Jetson 路线的出厂值）：

- `dwell_min_duration`（1.5 秒）— 移动速度低于 `dwell_speed_threshold`（10.0）并持续这么久才计为驻足，在货架前转个身不会计入。
- `dwell_assistance_threshold`（20.0 秒）— 驻足计时超过它进入「需要帮助」状态。
- `avg_person_height_m`（1.7）— 速度阈值靠它从像素折算成实际距离。现场人群平均身高与 1.7 m 差得多时，驻足判定会整体偏松或偏紧。

### 已知退化

- **机位。** 需要架高俯拍、距目标 3–5 米、人在画面里至少约 30 × 30 像素。平视、远景、严重遮挡都会让人框不出来，没被检测到的人在热力图上就是空白，不会报错。
- **平面图校准是人工点的 4 个点。** 参考点选得近或共线，位置误差会被放大。换角度或移动摄像头之后校准即失效，需要重新点一次——**校准错误不会报错**，只是把热区画到别的位置。
- **reCamera Pro 的 Avg Dwell 恒为空**，原因是应用不输出该字段。
- **RK 硬件解码没生效时回落到软解。** 帧率明显偏低同时 CPU 占满就是这种情况；Jetson 路线不回落（`fallback: none`）。

## 数据与素材出处

- **检测模型** — Hailo 路线用 [Hailo Model Zoo](https://github.com/hailo-ai/hailo_model_zoo) v2.15.0 hailo8 目录下的 `yolov8n.hef`，按摘要固定，不另行托管。RK 路线复用 fall_detection 已发布的 `yolo11n_pose_rawhead_fp16.<板卡>.rknn`。Jetson 路线由 `ultralytics` 在设备上导出 `yolo11n.engine`。
- **模型许可** — 检测端用的是 YOLO 系列模型（YOLO11n、YOLOv8n）。Ultralytics YOLO 模型默认为 AGPL-3.0，除非另行取得商业授权；产品化前确认模型许可，或换成许可兼容的模型。
- **后端组件** — MQTT broker、InfluxDB、Grafana、go2rtc 视频网关均以官方镜像部署。Grafana 默认账号为 `admin` / `admin`，开通后先改掉。
- **图片** — Grafana 看板与热力图截图来自上游方案素材库；架构图为自绘。演示画面中未出现可识别的人像。
