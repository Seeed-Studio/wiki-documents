---
description: 在养老、照护与居家场景里搭一套本地跌倒告警：需要哪些设备、怎么部署、有哪些接口，以及七台设备上的实测数据
title: 端侧 AI 跌倒检测方案：搭建、部署与实测数据
keywords:
  - 跌倒检测
  - 摔倒检测
  - 养老院跌倒告警
  - 端侧 AI
  - 姿态估计
  - fall detection
  - edge AI
  - reCamera
  - reComputer
  - Jetson
  - Hailo-8
  - MQTT
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png
slug: /solutions/edge-fall-detection
sidebar_position: 2
last_update:
  date: 09/01/2026
  author: seeed-solutions-hub
createdAt: '2026-09-01'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/cn/solutions/edge-fall-detection/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[使用须知]
辅助告警，不是医疗或人身安全认证设备，不能替代人工巡视。
:::

## 这套方案是干什么的

房间里装一个摄像头，有人摔倒了，几秒内把消息推给该收到的人——护理站、家属的 Home Assistant、值班室的 NVR，或者你自己的系统。用在养老院、康复中心、居家照护、单人宿舍这类固定房间的场景。公开数据集上实测跌倒召回 95.8%，从摔倒到发出消息平均 1.4 秒，数据见下文「性能与实测数据」。

- 开源实现：[github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>本地运行，视频不上云</h3>
                <p>识别、判定、发消息都在现场设备上完成，网络上只传几百字节的文字消息。断网照常告警，没有按摄像头计费的云端订阅。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>设备开箱即用</h3>
                <p>装上对应设备的应用包就能出告警。模型、运行时和判定阈值随包冻结，不需要自己训练或调参。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>已有摄像头和系统直接接入</h3>
                <p>已有 IP 摄像头走 RTSP，摄像头端不用改。告警走 MQTT：Home Assistant 自动发现，NVR 和护理呼叫系统订阅一个主题即可。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>代码开源</h3>
                <p>各平台的模型转换、Docker 编排和判定权重训练脚本都在仓库里，可以用自己现场的录像重训判定权重。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示

设备实际输出的画面：人身上叠着骨架，框上标着这个人的编号和当前状态，右上角是判定用到的三项特征命中了几项。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png" alt="reComputer J30 / J40 上确认的一次跌倒——骨架、跟踪状态和证据计数来自实时 MQTT 消息"/>
</div>

`#12 FALLEN` 是这个人的轨迹编号和当前状态，左上角的 `Evidence: 2/3` 是判定用的三项特征命中了两项。完整的状态跃迁动画在[下面的部署步骤](#二装软件四步)里。

### 告警面板（可选组件）

告警面板在 reComputer J30 / J40、RK、R2000 三个套餐里随 compose 一起部署，在两个 reCamera 套餐里是另装一台主机的可选组件。

跌倒检测器发布事件之后，告警面板负责后面的处理：每个房间是一个区域、各有自己的规则，告警开出来后由值班人在单页控制台上确认或驳回，确认后的告警带着操作者的名字，以 webhook 或 MQTT 消息发出去。用于养老机构、居家照护，以及告警事后需要追溯到人的现场。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>三类告警，逐区域判定</h3>
                <p>检测器送来的跌倒事件；区域持续无人超过 <code>no_person_timeout</code>；区域里有人但 bbox 中心持续不动超过 <code>no_motion_timeout</code>。卫生间和卧室给不同的超时。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>人工确认后再通知</h3>
                <p>取证窗口 5 秒，随后留给人工 60 秒。确认和驳回都记在按下按钮的那个人名下。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>投递可审计</h3>
                <p>确认后的告警若 5 秒内未通知，转入 escalated 并每 30 秒重试。本机回放实测：4 秒断网后 3 条入队告警全部补投成功，重复投递 0。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>通知里没有视频</h3>
                <p>只有告警 id、类型、区域、流编号、时间戳、操作者、幂等键。抓帧是一个默认关闭的开关。</p>
            </div>
        </li>
    </ul>
</div>

#### 控制台上能看到什么

值班人只用确认控制台这一个界面：告警列表与每条告警的当前状态、启用语音确认时的判定结论，以及把操作者名字写进审计记录的「确认 / 驳回」按钮。控制台由告警服务在 HTTP 8080 上提供。

下面的控制台截图用的是**回放数据**：合成的 bbox 与跟踪数据，画面里没有摄像头影像和人像。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-dashboard-zh-646c0057.png" alt="确认控制台首页：左侧房间列表，右侧告警流，每条告警带类型、区域与当前状态"/>
</div>

一条告警展开后是它的完整经过——事件时间、状态转换、以及是谁按的确认。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/room-detail-zh-4a4fbd49.png" alt="单个房间详情页：区域配置、当前在室状态与该房间的告警历史"/>
</div>

## 需要哪些硬件

两样东西在现场：出画面的摄像头，和跑识别的主机。

**① 摄像头** — 已经有 IP 摄像头就直接用，接 RTSP 流，摄像头那边一个字不用改。没有的话，reCamera 2002 / Pro 把摄像头和算力做在一台里，通电就能用。

**② 检测主机** — 跑识别和判断的那台，也决定你能接几路、花多少钱。已有摄像头时它是单独一台；用 reCamera 时它就是摄像头自己。

| | 检测主机 | 一台接几路 | 什么时候选它 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera 2002 / Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>摄像头与算力一体 | 1 | 一个房间，最快跑通一条告警 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3576 / RK3588](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html) | 1 | 已经在用瑞芯微板卡 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12（Hailo-8）](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | 16 | 需要一台管很多路 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Orin Nano / Orin NX | 7 / 8 | 多个房间，并想留升级余量 |

路数由加速器实测吞吐折算（见下文「路数折算」）。

除此之外只需要网络：设备与接收端在同一个局域网即可，不需要外网。

### 告警面板的主机

三样东西：产生检测事件的那一端、决定什么算告警的那台主机、接通知的系统。第三样是你自己的系统，所以真正要选的是前两样。

**① 事件来源** —— 要么是你已有的 RTSP 摄像头，此时检测器会部署到告警主机上并指向你的流；要么是已经自己在跑检测器的 reCamera 摄像头，此时检测本身一点不变。

**② 告警主机** —— 这台跑区域、超时、状态机、SQLite 审计存储、确认页面和投递队列。三个套餐里有两个还让它同时跑检测器。

| | 告警主机 | 检测器跑在哪 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011（Orin Nano 8GB）](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>检测器、告警服务、broker 与控制台都在一台 Jetson 上 | 同机，首次部署时构建 TensorRT 引擎 | 摄像头已经有了、现场还没有网关。三档里单机可带路数最多 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012（Orin NX 16GB）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>同一套栈，更大的姿态模型 | 同机，用 YOLO11m 而非 YOLO11s | 房间数超过一台 J3011 能看的，或者想要更大的姿态模型。同一个套餐，部署表单里的另一个选项 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12（Hailo-8）](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>无风扇工业机箱 | 同机，HEF 已编译下发 | 主机要装进机柜或弱电井：无风扇、宽温、DIN 导轨或壁挂 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>一体化 AI 摄像头；告警服务放到你已有的机器上 | 摄像头上 | 现场还没有摄像头，或者摄像头已经在做检测。告警服务由人工拉起——部署表单里没有「自备网关」这个设备类别 |

其它前置条件：1883 端口上要有可达的 MQTT broker（Orin 与 Hailo 套餐会自己拉起一个，reCamera 套餐可以用摄像头已经在发布的那个）；Orin 与 Hailo 套餐需要固定的室内机位；另外要有一个接收通知的 webhook 端点或 MQTT 订阅方。

#### 语音确认（可选，默认关闭）

启用后，一条跌倒告警会让服务向房间里播报提示语并听几秒，与取证窗口并行。呼救、无应答、听不懂的回答都会立即确认告警；「我没事」默认不关闭告警，只把它标记为待复核。

需要的硬件：局域网内算力盒子上的 USB 麦克风与扬声器，加一个提供 TTS 与流式 ASR 的 OpenVoiceStream 实例。音频不走摄像头：两款 reCamera 都没有确认可用的麦克风，SG2002 跑不了本地 ASR。音频不落盘，持久化的只有判定结论、置信度、时延与转写文本；设 `store_transcript: false` 连文本也不留。

## 现场怎么部署

分两步：先把摄像头装对位置，再把软件装上去。

### 一、装摄像头

:::tip[机位要求]
固定机位，离人 2–3 米，侧向或斜角，肩部和髋部要看得见。摔倒的过程必须发生在画面里：启动时人已经躺着，只报告姿态，不发告警。垂直往下拍、长走廊远景、家具挡住大半个人，准确率会明显下降。
:::

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/camera-placement-be3fb598.svg" alt="机位示意：2–3 m 的侧向或斜角机位可用；垂直俯拍、远景和被遮挡的机位不可用"/>
</div>

### 二、装软件：四步

具体到每台设备的操作步骤在可部署方案页，那里按你的现场条件选完配置后可以直接下载对应的应用包。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

1. **选配置** — 在可部署方案页回答三个问题（有没有摄像头、离摔倒区域多远、要接几路），它会给出对应的设备组合。
2. **装应用包** — 下载该设备的应用包装上去。模型、运行时和判定阈值都已经随包冻结好了，就是下面实测数据里评过分的那几组，不需要自己训练或调参。
3. **填两项配置** — 视频源地址（用 reCamera 可跳过）和设备名。设备名是消息主题的第一段，按房间或床位命名，同一个接收端上多台设备就不会互相覆盖。下图是部署平台的设备管理页：选「嵌入式」，填设备 IP 与 ADB 端口。

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/recamera-pro-firmware-update-a9539b3d.gif" alt="设备管理 → 嵌入式 → reCamera Pro，展开后可填写地址与 ADB 端口"/>
</div>

4. **看预览确认机位** — 装完能在应用里看到实时画面，人身上叠着骨架和状态。先在这里确认摄像头确实看得到该看的地方，再往下接通知。下图是 reCamera Pro 的预览页，**状态标签来自回放，不是实测记录**，实测数字见「性能与实测数据」。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/live-fall-demo-f4ef5180.gif" alt="从正常到跌倒的状态跃迁，画面为 reCamera Pro App Center 预览页"/>
</div>

装完到跑通，reCamera 大约半小时；Jetson 因为首次要在设备上构建推理引擎会更久（实测 461 秒起）。

### 告警面板：区域与安装

分两部分：先把摄像头装到区域能成立的位置，再安装与配置。

#### 一、摄像头与区域

:::tip[区域是画面上的归一化矩形]
移动或重新对准摄像头会让区域划分失效，**且没有报错**：矩形还在，但盖住的是房间里的另一块地方。摄像头有任何物理变动之后，逐个复核区域。
:::

Orin 与 Hailo 套餐另外需要一个固定的室内机位，可能发生跌倒的路径上人体保持可见。检测器同样是 EdgeFallKit，机位要求与上文相同（2–3 m 的侧向或斜角机位，肩部和髋部可见）。

划区域时注意两点，否则会多出无效告警：

- **人在睡觉时 `no_motion` 会触发**，除非区域把床排除在外，或者把超时设得比一次正常小睡更长。这里的「运动」是被跟踪者 bbox 中心的位移超过 `motion_threshold`，不是光流也不是关键点速度，被子下的小幅动作不算数。
- **遮挡会产生假的 `no_person`。** 区域要等人再次被看到才重新布防，所以一次遮挡只产生一条告警。

#### 二、装软件：四步

逐设备的操作步骤同样在上面的可部署方案页，选完配置后可以直接下载对应的应用包。

1. **选配置** —— 配置器问现场装着什么、主机装在哪，回答完落到三个套餐中的一个。
2. **装应用包** —— Orin 与 Hailo 套餐把检测器与告警服务一起部署；reCamera 套餐不为检测装任何东西，告警服务在你自备的网关上人工拉起。
3. **填配置** —— 区域及其 `no_person_timeout` / `no_motion_timeout`、状态机各段窗口、webhook 地址，以及构成主题第一段的设备名。区域直接在画面上拖出来，保存后立即生效：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-draw-zone-d715c416.gif" alt="在实时画面上拖出一个区域，保存后重新加载仍在原位"/>
</div>

配置页左侧是该房间的实时画面，右侧是这个区域的两个超时值。摄像头离线时画面位置显示为快照回落，配置照样能改。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/config-live-view-zh-1eca9bd3.png" alt="区域配置页：左侧实时画面，右侧无人超时与静止超时"/>
</div>
4. **验证** —— 造一条测试告警并看它走完：告警出现在控制台里、有一次操作者动作记在它名下、webhook 端点收到一条带幂等键的 POST。下图是一次注入告警在控制台上从出现到被确认的全过程：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/alarm-trigger-c29807f5.gif" alt="一条注入的跌倒告警在控制台上出现、进入人工窗口、被确认后转为 notified"/>
</div>

设备侧的日志与服务状态在设备控制台上看：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/device-console-zh-c6590327.jpg" alt="告警主机上的设备控制台：检测器与告警服务的运行状态"/>
</div>

<!-- TODO 图：现场安装实景照（摄像头装在房间里的机位照）——需现场拍 -->

预计耗时 **45 分钟**，难度 **intermediate**。Orin 套餐最慢，因为首次部署要在设备上构建 TensorRT 引擎。

## 有哪些接口

设备把事件发到自己身上的 MQTT broker（1883），你的系统订阅就行。三种接法：

- **Home Assistant** — 不用配置。设备按自动发现协议广播，HA 里会直接出现跌倒传感器、当前状态、事件编号和在室状态四个实体，拿去接自动化即可。
- **NVR / 护理呼叫系统** — 订阅 `<设备名>/fall-detection/results`。只关心「有没有人摔倒」的话，看 payload 里的 `fall_event`——它只在进入跌倒态那一刻置位一次，所以一次跌倒只会触发一次，人躺着的整段时间不会反复触发。
- **自建系统 / API** — 同上订阅，payload 里还带 `person_count`、`fallen_count` 和每个人的 `track_id` / `state` / `bbox`，够画自己的面板。reCamera 另外提供 RTSP 8554 `/live0` 取实时画面。

`<设备名>` 就是上一步填的那个，按房间或床位命名，同一个 broker 上多台设备互不覆盖。

### 完整的主题与 payload

| 主题 / 端口 | 内容 | retained |
|---|---|---|
| `<设备名>/fall-detection/results`（多路为 `.../results/{stream_id}`） | 每帧一条 JSON：`state`、`fall_detected`、`fall_event`、`event_id`、`person_count`、`fallen_count`，以及 `persons[]` 里的 `track_id` / `state` / `bbox` | 否 |
| `<设备名>/fall-detection/status` | `online` / `offline`，通过 MQTT 遗嘱消息发布 | 是 |
| `homeassistant/` | 自动发现配置——跌倒传感器、状态、事件编号、有人存在 | 是 |
| RTSP 8554 `/live0`（reCamera） | 实时视频，供预览和 NVR 使用 | — |

流编号同时写在 payload 里，下游不必解析主题判断来源。

broker 也在检测主机上：reCamera 用自带的，reComputer 各配置随检测器一起拉起 `eclipse-mosquitto:2`，1883 端口由主机提供，不需要外部 broker，整条链路不需要外网。

### 告警面板的接口

要对接的只有告警服务这一个东西，它跑在告警主机上。按你手上已有的系统分三条：

- **护理呼叫系统或寻呼服务** —— 用 webhook。每条确认后的告警一次 POST，带告警 id、类型、区域、流编号、时间戳与操作者。去重请用幂等键，不要用时间戳。
- **以 MQTT 为主的现场** —— 打开告警总线，订阅 `eldercare/alarm/<zone-id>`，负载与 webhook 相同。默认是关闭的。
- **自建看板或记录系统** —— 轮询或读取 HTTP 8080 上的 `GET /api/alarms`，拿到完整告警记录，含状态历史与每条上的操作者。

幂等键的构成是 `zone:kind:event_timestamp:global_event_id`。`stream_id` 从消息负载里读、不从主题里解析，因此 broker 改写或桥接前缀不会把某个区域接错。告警记录（事件、状态转换、操作者与送达回执）留存 90 天。

#### 完整的主题与 payload

| 主题 / 端口 | 内容 | 默认 |
|---|---|---|
| HTTP 8080 `GET /api/alarms`、`/` 页面 | 告警记录：`id`、`kind`、`zone_id`、`stream_id`、`state`、`event_timestamp`、`operator`。确认与驳回也在这一页 | 开 |
| HTTP POST 到你的 webhook 地址 | `{"id":"a-17","kind":"fall","zone_id":"bedroom","stream_id":"cam-01","state":"notified","event_timestamp":1788581337237,"operator":"nurse-a"}`，另带幂等键请求头。没有快照，没有视频 | 填了地址即开 |
| MQTT 1883 `eldercare/alarm/<zone-id>` | 与 webhook 相同的负载 | 关 |
| MQTT 1883 `<设备名>/fall-detection/results/<流编号>` | 本服务消费的 `fall_result_v1` 流：`stream_id`、`person_count`、`fall_event`、每人 bbox | 输入，由检测器发布 |

**`state` 字段**：`escalated` 表示错过了通知期限，之后重试成功也不会回到 `notified`。看板不要把 `escalated` 显示成投递失败，它只说明超过了期限。

Orin 与 Hailo 套餐里 broker 跑在告警主机上，reCamera 套餐里跑在摄像头或网关上，链路不需要外网。随包的 broker 允许匿名连接，只适合可信局域网；设备要从局域网以外访问时，先加上凭据与 TLS。

## 性能与实测数据 {#附录实测数据}

以下是公开数据集上的设备实测数据，逐段原始报告与校验和在仓库 [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation) 下。源码含各平台的模型转换、Docker 编排与判定权重训练脚本。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 准确率

**六组已冻结配置的平均：准确率 85.8%，跌倒召回 95.8%，特异度 77.8%，F1 85.7%，平均告警延迟 1.4 秒。** 单组准确率落在 81.5%–88.9% 之间。

这六组是 Jetson YOLO11s、Jetson YOLO11m、reCamera Pro、RK3576、RK3588、Hailo-8 各自冻结的配置；reCamera 2002 的 v0.2 基线（准确率 74.1%）不在平均里，它用的是更早一版时序权重。逐组明细见仓库的[统一准确性表](https://github.com/suharvest/edgefallkit/blob/main/evaluation/RESULTS.md#统一准确性表)。

条件：数据集 [GMDCSA-24 v2.1](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos)（MIT）按人划分，留出的 Subject 4 只评一次，共 27 段（12 段跌倒 / 15 段日常动作）；视频统一 15 FPS；比标注跌倒起点早 0.5 秒以上的报警计为误报；每个平台用自己的姿态输出重训并冻结判定权重，不跨平台借用。

复现：`platforms/jetson/tools/evaluate_videos.py`（数据集不随仓库分发，需自行获取）。

**各设备之间的准确率没有拉开差距**：27 段测试集里一段就是 3.7 个百分点，RK3576、RK3588、Hailo 三组成绩相同（88.9%），模型大小与成绩也不相关。选设备按路数、现有硬件和视频来源定。

### 实测设备

七台设备，四种加速器。「端到端」指从取流到发出告警的完整链路跑通并在测试集上评过分；「推理基准」指只测了识别速度。

| 设备 | 加速器 | 下发的模型 | 端到端 | 推理基准 |
|---|---|---|:-:|:-:|
| reCamera 2002 | 自带 NPU | YOLO11n-Pose INT8 | ✅ | ✅ |
| reCamera Pro | 自带 NPU（RK） | YOLO11n-Pose INT8 | ✅ | ✅ |
| reComputer RK3576 | RK3576 NPU | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer RK3588 | RK3588 NPU | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer R2000 Series | Hailo-8 | YOLOv8s-Pose INT8 | ✅ | ✅ |
| reComputer J30 | Orin Nano GPU | YOLO11s-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer J40 | Orin NX GPU | YOLO11m-Pose FP16 | ✅ | ✅ FP16 / INT8 |

各设备的单帧延迟、多路吞吐与测量条件在下面的[性能实测详表](#性能实测详表)。

### 性能实测详表 {#性能实测详表}

#### 单帧延迟与吞吐

同一个模型（YOLO11n-Pose，640² 输入）在不同设备上的实测。单帧是加速器识别一帧的耗时，聚合吞吐取 1–6 个并发上下文中实测的最大总帧率。FP16 与 INT8 分两张表。Hailo-8 各行在 reComputer R2000 系列 + Hailo-8 M.2 加速卡（26 TOPS）上实测。

FP16：

| 运行平台 | 姿态模型 | 单帧推理 | 聚合吞吐 | 推理上限路数 | 建议路数 |
|---|---|---:|---:|---:|---:|
| reComputer RK3576 | YOLO11n | 56.1 ms | 29.2 FPS | 1 | 1 |
| reComputer RK3588 | YOLO11n | 51.4 ms | 51.4 FPS | 3 | 1 |
| reComputer J30 系列（J3011） | YOLO11n | 3.7 ms | 270.7 FPS | 18 | 7 |
| reComputer J40 系列（J4012） | YOLO11n | 3.3 ms | 306.2 FPS | 20 | 8 |

INT8：

| 运行平台 | 姿态模型 | 单帧推理 | 聚合吞吐 | 推理上限路数 | 建议路数 |
|---|---|---:|---:|---:|---:|
| reCamera 2002 | YOLO11n | 53.0 ms | 10.0 FPS | 1 | 1 |
| reCamera Pro | YOLO11n | 35.9 ms | 18.1 FPS | 1 | 1 |
| reComputer RK3576 | YOLO11n | 36.2 ms | 42.1 FPS | 2 | 1 |
| reComputer RK3588 | YOLO11n | 29.8 ms | 90.4 FPS | 6 | 2 |
| reComputer R2000 系列（R2035-12，Hailo-8） | YOLOv8s ▲ | 6.9 ms | 393.9 FPS | 26 | 16 |

**▲ Hailo 这一行用 s 尺寸：n 尺寸在这块加速器上更慢。** 官方 Model Zoo v2.15 的 hailo8 目录只提供 `yolov8s_pose` 和 `yolov8m_pose`，没有任何 n 尺寸姿态模型。我们用 Hailo Dataflow Compiler 3.31.0 自行编译了一份 YOLO11n-Pose（640²、INT8、64 帧 GMDCSA 标定），在同一块板子上实测 **9.01 ms / 92.2 FPS**，对比 s 尺寸的 6.87 ms / 393.9 FPS：单帧延迟同量级（+31%），差 4.3 倍的是吞吐。原因是编译器把 11n 切成了 **3 个 context**，每帧要换一次权重；Model Zoo 的 s 尺寸是 single context，权重常驻。按单路 15 FPS 的需求，n 的 92.2 FPS 仍有约 6 倍余量，差距只影响多路密度。这个结果对应这一份 HEF 的编译分配。

**Jetson 的 INT8 用标定引擎，单独列。** 上表 INT8 各行都是 YOLO11n；Jetson 的标定 INT8 引擎目前只做了 YOLOv8s / YOLOv8m-Pose（GMDCSA 帧熵标定，s 用 64 张、m 用 494 张，没有 INT8 实现的层回退 FP16），和其它平台不是同一个模型：

| 运行平台 | 姿态模型 | 精度 | 单帧推理 | 聚合吞吐 |
|---|---|---|---:|---:|
| reComputer J30（Orin Nano Super） | YOLOv8s-Pose | INT8 | 3.75 ms | 266 FPS |
| reComputer J40（Orin NX Super） | YOLOv8s-Pose | INT8 | 3.34 ms | 300 FPS |
| reComputer J30（Orin Nano Super） | YOLOv8m-Pose | 混合精度（neck + head FP16） | 8.11 ms | 123 FPS |
| reComputer J40（Orin NX Super） | YOLOv8m-Pose | 混合精度（neck + head FP16） | 7.18 ms | 139 FPS |

条件：640²、batch 1、3 轮 120 s 取中位数、纯 GPU 计算时间。YOLOv8s INT8 比同机 FP16 快 1.57×。YOLOv8m 全 INT8 会丢跌倒输出，所以 m 用混合精度。部署评测（GMDCSA-24 Subject 4，27 段）：YOLOv8s INT8 F1 66.7%，YOLOv8m 混合精度 87.0%。套餐默认仍是 YOLO11s / YOLO11m FP16。

复现：`tools/build_calibrated_int8.py`。

RK 的 INT8 用 240 帧 GMDCSA 标定过，在未参与标定的帧上每帧检测数与 FP16 完全一致，可以部署。

#### 真实画面 pipeline 延迟

上面两张表的输入是合成的空白画面，只测识别本身。真实画面里有人，就要多做一轮解码和后处理：

| 平台 | 姿态模型 | 加速器推理 | 真实画面 pipeline | 前后处理增量 |
|---|---|---:|---:|---:|
| reCamera 2002 | YOLO11n INT8 | 52.74 ms ◇ | 53.23 ms | 0.012 ms |
| reCamera Pro | YOLO11n INT8 | 35.2 ms ✦ | 36.6 ms | 1.4 ms |
| reComputer RK3576 | YOLO11n FP16 | 69.6 ms | 70.8 ms | 1.2 ms |
| reComputer RK3588 | YOLO11n FP16 | 54.4 ms | 54.8 ms | 0.4 ms |
| reComputer R2000 系列（R2035-12，Hailo-8） | YOLOv8s INT8 | 6.9 ms | 8.77 ms | 1.9 ms |
| reComputer J30 系列（J3011） | YOLO11n FP16 | 3.7 ms ◆ | 5.57 ms | 1.9 ms |
| reComputer J40 系列（J4012） | YOLO11n FP16 | 3.3 ms ◆ | 5.18 ms | 1.9 ms |

「pipeline」= 推理 + 预处理 + raw-head 解码/DFL/关键点/NMS，**不含** RTSP 解码、跟踪、时序 MLP 与 MQTT。Orin NX 的 5.18 ms 取自 400 帧实测、Orin Nano 的 5.57 ms 取自 1359 帧、Hailo 的 8.77 ms 取自 1951 帧（其中硬件推理 6.87 ms，解码与 NMS 只占 0.052 ms）。

- **◇ reCamera 2002 分不出「纯加速器」这一列**：它只暴露一个计时器，范围恰好等于本表的 pipeline 定义，52.74 ms 已经含前后处理（250 帧实测，有人与无人几乎无差别）。
- **✦ reCamera Pro 这一行是锁频后的数字**（NPU 950 MHz、CPU performance）。默认 `rknpu_ondemand` 档实测停在 800 MHz、推理 43.1 ms——同一块板仅因频率档位就差 23%。RK3576/RK3588 实测始终跑在各自最高档，不受此影响。
- **◆ Jetson 这一列是 `trtexec` 纯 GPU 计算**（无主机拷贝），RK 那一列是 `rknnlite.inference()`，两者计时范围不同，横向比较看 pipeline 列。按 pipeline 列，Jetson 比 RK3588 快约 11 倍、比 RK3576 快约 14 倍。

复现：[`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation)。

#### 路数折算

「推理上限路数」= 聚合吞吐 ÷ 15 FPS，只算加速器，是理论天花板。「建议路数」在此基础上打了折——RK 上实测的端到端吞吐只有推理上限的 28%–44%，因为 RTSP 解码、跟踪、状态机和 MQTT 也要占用 CPU 与内存带宽。在板上其他业务未停的情况下，实测端到端吞吐 RK3588 约 8.6 FPS、RK3576 约 4.9 FPS。

### 运行时与关键参数

所有平台跑同一族 640² 姿态模型，区别在运行时和模型怎么送到设备上：

| 检测主机 | 姿态模型 | 精度 | 运行时 | 模型交付方式 |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n-Pose | INT8 | 摄像头 NPU | 从 console 当作摄像头 app 安装 |
| reComputer J30 / J40 | YOLO11s（Orin Nano）/ YOLO11m（Orin NX） | FP16 | TensorRT | 引擎在**设备上现场构建**——与该 GPU 架构和 TensorRT 版本绑定，无法预编译下发。Orin Nano 实测：YOLO11s 461 秒 |
| reComputer RK3576 / RK3588 | YOLO11n-Pose | FP16 | RKNN Lite | `.rknn` 按板卡下发；为 RK3588 编译的模型在 RK3576 上跑不了 |
| reComputer R2000 系列（R2035-12，Hailo-8） | YOLOv8s-Pose | INT8 | GStreamer + `hailonet` | 官方预编译 HEF，按固定摘要校验 |

Hailo 部署锁定 **HailoRT 4.21**：GStreamer 插件、用户库和内核驱动三者必须同版本，加速器不能被其他进程占用。

影响部署效果的参数（括号内为出厂默认值）：

- `max_fps`（15）— 每路处理帧率，上面的路数按它折算。
- `fall.temporal_confirmation_required`（true）— 进入「已跌倒」必须有时序模型确认，这是压低误报的主要机制；设为 false 后几何特征可以单独确认跌倒。
- `cooldown_sec`（3.00）— 一次跌倒只算一次，`fall_event` 只在进入跌倒态的那一刻置位。

告警面板：

- `statemachine.evidence_sec`（5.0）/ `statemachine.confirm_window_sec`（60.0）— 取证窗口与人工窗口，告警到通知的时延主要由这两段决定。
- `statemachine.confirm_timeout_action`（按成立处理并通知）— 人工窗口内无人应答时怎么处理。
- `publish_empty_frames`（Orin 套餐为 true）— Jetson 检测器在画面无人时也发空帧，否则 `no_person` 超时收不到输入。用设备自己的配置替换随包的检测器配置时要再设一次；Hailo 运行时没有这个开关，也不需要。

### 告警面板的实测数据 {#告警链路实测}

告警服务本身不做检测，检测准确率见上文「准确率」；告警时延叠加在检测时延（各平台平均 1.22–1.75 s）之上。

| 指标 | 数值 | 条件 |
|---|---:|---|
| 告警时延，事件时间戳到通知发出 | P50 2061 ms / P95 2093 ms | 本机回放，回放器代替摄像头，不含推理与跨机网络；5 次跌倒回放，各 15 FPS × 12 s；取证 1 s + 自动确认 1 s；单区域单流，回环 webhook |
| 无人判定相对配置超时的偏晚量 | P50 65 ms / P95 77 ms | 本机回放，3 次，10 FPS × 11 s，超时 5 s，tick 0.1 s，无 broker |
| 断网恢复，唯一成功送达数 / 入队数 | 3/3，重复投递 0，恢复后首条 96 ms 送达 | 本机回放，webhook 端返回 503 持续 4 s，3 条告警入队，重试间隔 2 s |
| 误报 | 0 / 0.02 摄像头小时 | 72 s 静默回放，时长不足以算比率 |
| 跌倒到 webhook 收到 | P50 2487 ms / P95 2751 ms | reCamera One（USB-RNDIS），真实 `fall-detection` 帧 + 注入跌倒告警，经设备自带 broker；10 次注入中的前 5 次（其余被通知限速拦下，见已知退化）；另有一条真实触发的 60 s 无活动告警送达 |
| 跌倒到 webhook 收到，含 Hailo-8 推理 | P50 2830 ms / P95 3061 ms（最小 2102 ms） | reComputer R2000 系列 + Hailo-8 M.2 加速卡，官方 YOLOv8s-Pose HEF、HailoRT 4.21.0；GMDCSA-24 跌倒片段 RTSP 回放（640×640，15 FPS）；10 次告警，取证 1 s + 自动确认 1 s + 重新布防 2 s；单区域单路；10 次都在 5 s 通知期限内 |

告警时延约等于两段窗口之和加约 60 ms 派发耗时。上表窗口都调短过；用出厂默认值（取证 5 s、人工 60 s）时同一路径约 65 s 起（折算）。

复现：`eldercare-alarm/evaluation/runs/` 下 2026-09-05、2026-09-06、2026-09-08 三次运行目录；时延定义见 `evaluation/measure_alert_latency.py`。

### 已知退化

- **机位。** 上面的数字来自固定机位、近中景、肩部和髋部可见的室内画面。2–3 m 的侧向或斜角机位可用；垂直俯拍、长走廊远景或家具严重遮挡时准确率下降。
- **换数据集会掉。** 在外部数据集 RealBiomFall（34 段全部为跌倒）上，reCamera 实测召回 58.8%，reComputer J30 / J40 上的部署版 YOLO11m 为 52.9%，漏检主要来自没识别到人。换到新场地，用现场录像重新抽取轨迹、重训并冻结判定权重。
- **共存业务占用 GPU 时吞吐下降。** 上表 Jetson 数字是停掉共存业务后测的；Orin NX 上自身推理业务未停时聚合吞吐只有 264.9 FPS（停掉后 306.2 FPS），低于 Orin Nano。Orin Nano 停与不停一致（270.5 / 270.7 FPS），它上面的业务不用 GPU。
- **告警通知有限速。** 600 s 内最多 5 条，超出的告警不发通知也不报错（reCamera One 上第 6 次注入起）。

### 下一步

- 在 RK 与 Hailo 路线上补做外部数据集 RealBiomFall 评测。
- 在 reCamera 上保存现场视频与姿态轨迹，用带标注的回放评估判定阈值并重训时序判定。

## 数据与素材出处

- **GMDCSA-24 v2.1** — 准确率评测与演示画面的底图均来自该数据集，[ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos)，MIT License。演示图中人物面部已做像素化与高斯模糊处理：该许可覆盖作者的著作权，不涉及被摄者的肖像权。
- **RealBiomFall** — 外部泛化测试所用的 testing subset，34 段全部为跌倒，因此只能报告召回与延迟。
- 两个数据集都不随 `edgefallkit` 仓库分发，复现评测需自行获取。
- 机位示意图为自绘。
