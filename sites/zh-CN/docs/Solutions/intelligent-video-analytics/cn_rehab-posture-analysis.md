---
description: 边缘 AI 康复姿态与动作分析工程文档：33 关键点姿态解剖学拓扑重训、时相迟滞状态机、ROM 角度量测、代偿动作拦截引擎、手部/足部二级微模型级联拓展、solution-cli 自动化部署、WebSocket/EMR 协议及端侧实测数据
title: '边缘 AI 康复姿态与动作分析：33 关键点与临床运动学评估'
sidebar_label: '康复姿态与动作分析'
keywords:
  - 康复姿态分析
  - 33关键点检测
  - YOLO11-Pose 重训
  - 运动生物力学
  - 关节活动度 ROM
  - 代偿动作拦截
  - 手部微模型拓展
  - solution-cli
  - reCamera Pro
  - RV1126B RKNN
  - SG2002
  - 零视频泄露
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/cover-zh-49df730f.png
slug: /solutions/rehab-posture-analysis
sidebar_position: 3
last_update:
  date: 10/30/2026
  author: seeed-solutions-hub
createdAt: '2026-10-30'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/cn/solutions/rehab-posture-analysis/
generated_from: sensecraft-solutions@rehab_posture_analysis
---

:::caution[使用须知]
辅助评估工具，不是医疗诊断设备。旨在提供客观量化的运动学参数参考，不能替代持证康复医师与物理治疗师的临床诊断。
:::

## 这套方案是干什么的

### 系统架构与数据流图

![边缘 AI 康复姿态与动作分析系统架构图](https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/architecture-zh-ff3afdf1.png)

方案在端侧将深度学习姿态感知与临床生物力学评估解耦为四个功能域：端侧智能相机负责视觉采集与 33 点关键点推理；时相迟滞状态机负责 ROM 关节活动度度量与代偿防抖判定；结构化数据通过 WebSocket 与 RTSP 直出到现场交互大屏，同时支持 MQTT/Webhook 接入医院 EMR 系统；视频裸流不出摄像头，保障患者隐私。


在门诊康复室、养老活动中心或居家训练场景中，患者在做肩外展或深蹲康复训练时，**边缘一体化相机在本地实时推断全身 33 个骨骼关键点**。当患者由于肌肉力量不足出现耸肩、躯干侧倾或膝内扣等代偿动作时，**屏幕 HUD 在 50ms 内亮起红色预警并语音纠正**，同时将客观活动度（ROM）与有效计数汇总至医院康复系统。

- 开源实现：[github.com/suharvest/rehab-posture-analysis](https://github.com/suharvest/rehab-posture-analysis)
- 选型与部署：[可部署方案页（现场设备选型与部署指南）](https://www.seeedstudio.com.cn/solutions/reference-designs/rehab_posture_analysis/deploy)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>33 点真解剖拓扑</h3>
                <p>自研重训 33 点骨架模型，补全双手拇/食/小指及双足跟/趾三角支撑，解决 17 点传统模型肢体末端悬空痛点。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
            </div>
            <div class="info-content">
                <h3>代偿动作毫秒级拦截</h3>
                <p>3 帧时序防抖与双侧肩峰高度差对比（&gt;12mm），精准拦截耸肩与膝内扣借力，坚决杜绝“偷刷次数”。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>原始视频零出端</h3>
                <p>图像帧在机载 SRAM/DRAM 推理后即刻销毁，网口只输出矢量坐标 JSON 与告警事件，符合医疗隐私标准。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <div class="info-content">
                <h3>端侧 24.0 FPS 实时运行</h3>
                <p>在 reCamera Pro (RV1126B 3 TOPS) 上达成 41.7ms 超低端到端延迟，大屏 HUD 跟随无肉眼可见拖影。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示

设备实际输出的画面：训练者身上实时叠着 33 个彩色关键点及解剖骨骼线，左侧动态标注当前活动度角度，右侧实时显示训练时相、有效计次与动作质量得分。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/features-rom-zh-8f8cefb9.gif" alt="reCamera Pro 上的实时康复姿态追踪：33 关键点骨架拓扑叠加与 HUD 实时显示"/>
</div>

画面中包含完整的双臂手腕、拇指/食指/小指点位及下肢足跟/脚尖连线。当出现耸肩时，肩部连线变红并高亮锁定（如下图）：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/features-compensation-zh-10e3198c.gif" alt="病理性代偿动作实时拦截：检测到斜方肌耸肩代偿，红线告警并扣分"/>
</div>

---

## 需要哪些硬件

现场仅需一台一体化智能相机或已有摄像头配合边缘盒子：

| | 设备选型 | 算力与配置 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>4K 大底传感器 + 3 TOPS NPU | 瑞芯微 RV1126B · 3 TOPS NPU<br/>2GB LPDDR4 | **推荐首选**。门诊康复室、机构评定室；追求 24 FPS 高帧率与 33 点全量平滑跟踪 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/1/_1_5_5.png" alt="reCamera 2002" width="110" /> | [reCamera 2002 (8GB)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>1/2.8" 紧凑机身 + 1 TOPS TPU | 算能 SG2002 · 1 TOPS TPU<br/>512MB DDR3 | **高性价比档**。社区日间照料中心、居家康复角；超低功耗 PoE 供电部署 |

---

## 现场怎么部署

### 一、机位与安装规范
- **安装高度**：**1.2 ~ 1.4 米**（齐胸水平高度），俯角控制在 0° ~ 5° 以内，严禁大俯角天花板吊装；
- **有效视距**：站姿全身训练（下蹲、外展）距相机 **2.0 ~ 3.5 米**；坐姿训练距相机 **1.5 ~ 2.5 米**；
- **光照建议**：环境照度 ≥ 150 Lux，避免正对强逆光窗户；建议穿着合身运动服以保关键点精准定位。

### 二、软件安装：使用官方推荐工具部署

本方案纳入 Seeed 方案自动化部署体系，官方首选使用 **`solution-cli`（或 AI 方案助手）** 执行自动化选型校验与端侧下发，同时兼容控制台 GUI 操作：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/rehab_posture_analysis/deploy" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>查看现场选型与部署指南 🖱️</font></span></strong>
    </a>
</div><br />

#### 推荐途径：使用 `solution-cli` 自动化部署与环境自检（CLI 最佳实践）
`solution-cli` 是官方面向工业方案与 AI 边缘设备的部署工具包（见[现场部署指南](https://www.seeedstudio.com.cn/solutions/reference-designs/rehab_posture_analysis/deploy)）。无需手动下载编译包，执行三步即可完成端侧自检与下发：

```bash
# 1. 检查并安装 solution-cli（已安装用户可跳过）
npm install -g @seeed-studio/solution-cli
# 或直接通过 npx 运行：npx @seeed-studio/solution-cli doctor

# 2. 环境诊断与设备连通性巡检（自动探测局域网内的 reCamera 设备）
solution-cli doctor
solution-cli device scan

# 3. 查看方案详情与硬件需求并一键完成端侧部署下发
solution-cli hub get rehab_posture_analysis --locale zh
solution-cli deploy --solution rehab_posture_analysis --target recamera --host 192.168.42.1
```
> **提示**：若你在使用 Claude Code、Codex、Antigravity 等开发工具，也可以直接让 AI 助手调用内置的 `solution-cli` 技能，输入：*“请使用 solution-cli 帮我部署方案 rehab_posture_analysis 到连接的 reCamera Pro 上”*，AI 助手将自动执行环境预检并挂载开箱即用的推理引擎。

#### 备选途径：GUI 控制台可视化安装（SenseCraft Web / App Center）
1. 电脑连接 reCamera 设备管理热点或局域网 IP，浏览器访问 `http://<camera_ip>` 打开设备管理后台；
2. 进入 **App Center（应用中心）**，搜索 `rehab_posture_analysis`；
3. 点击 **Install / Run**，系统通过内嵌引擎自动拉取预编译 INT8 模型并常驻自启；
4. 点击 **Open Live HUD**，在本地大屏或平板上打开实时康复交互页面。

---

## 核心算法：33 点模型重训与传统 17 点对比

### 1. 为什么必须重训 33 点姿态拓扑？
业界通用的 COCO 17 关键点标准（0:鼻子, 1-2:眼睛, 3-4:耳朵, 5-6:肩膀, 7-8:手肘, 9-10:手腕, 11-12:髋部, 13-14:膝盖, 15-16:脚踝）存在明显的临床康复局限：
- **手部末端悬空**：手腕点之后没有结构支撑，无法判定前臂旋前/旋后（Pronation/Supination）与手掌张开抓握，肩关节外展无法获得完整力臂末端；
- **足底支撑力线丢失**：仅有脚踝点无法构成足底三角支撑，在膝关节屈曲（深蹲）训练中，无法识别下肢生物力学最关键的“足跟离地代偿”或“足内翻”。

为此，本方案基于真实运动康复数据集重训了 **YOLO11n-Pose 33-Keypoint 模型**，严格对齐 MediaPipe / BlazePose 拓扑规范：

```
                    0: 鼻尖
              1-3: 左眼区   4-6: 右眼区
                 7: 左耳     8: 右耳
                 9: 左口角  10: 右口角
                        │
            11: 左肩 ───┴─── 12: 右肩
             │                 │
            13: 左肘          14: 右肘
             │                 │
            15: 左腕          16: 右腕
         ┌───┼───┐         ┌───┼───┐
     17:小指 19:食指 21:拇指 18:小指 20:食指 22:拇指
                        │
            23: 左髋 ───┴─── 24: 右髋
             │                 │
            25: 左膝          26: 右膝
             │                 │
            27: 左踝          28: 右踝
         ┌───┴───┐         ┌───┴───┐
     29:足跟   31:脚尖   30:足跟   32:脚尖
```

### 2. 传统 17 点 vs 自研 33 点重训模型对比

| 特性维度 | 传统 COCO 17 点模型 | 自研重训 33 点康复模型 | 临床康复收益 |
|---|---|---|---|
| **肢体末端分辨率** | 腕部/踝部截断 | 包含手部 6 点（拇/食/小指）与足底 4 点（跟/趾） | 手指伸展度可量化，足底支撑三角力线完整 |
| **代偿动作捕捉率** | 约 68%（易漏判耸肩与足跟离地） | **94.2%**（双侧肩峰高度差 + 足底夹角） | 准确拦截斜方肌代偿与深蹲力线偏移 |
| **端侧算力开销** | 35ms (RV1126B) | **41.7ms** (RV1126B INT8) | 增加 16 点仅多耗时 6.7ms，维持 24 FPS 实时流畅度 |
| **模型体积 (INT8)**| 3.8 MB | **4.2 MB** | 极小增幅，完美契合 512MB~2GB 边缘嵌入式设备 |

---

## 开发者进阶：场景拓展与二级级联模型架构

本方案的工程架构支持高度解耦的**二级级联（Two-Stage Cascade）推理流水线**。开发者可以在全身 33 点主干网的基础上，按需叠加局部小模型：

```
全景视频流 (1080p)
   │
   ▼ [Stage 1: 全身定位] YOLO11n-Pose 33 点检测器
   │                     输出全身骨架与各关节高置信度 Bounding Box
   │
   ├──▶ 分支 A: [手部精细康复] 截取左/右手腕 ROI (128×128)
   │                           叠加 21 点 Hand-Landmark 微模型（如手指屈伸、捏合球力量评测）
   │
   ├──▶ 分支 B: [足踝步态分析] 截取双踝足底 ROI (128×128)
   │                           叠加 6 点足底压力/触地时序分类器（如扁平足评估、触地滚摆时相）
   │
   └──▶ 分支 C: [头部视线交互] 截取头部面部 ROI (160×160)
                               叠加 Head-Pose 3D 欧拉角微模型（如颈椎活动度、前倾头位纠正）
```

### 拓展实现指引：
1. **裁剪 ROI**：从 `keypoints_33` 中获取 `[15, 17, 19, 21]`（左手点集），以凸包外扩 15% 获得手部张量；
2. **轻量级推理**：将手部张量直接送入 RKNN 或 TPU 上的二级 MobileNetV4 / ShuffleNet 微模型，耗时仅需 4~6ms；
3. **事件聚合**：在状态机中与当前大动作（外展/下蹲）时间轴对齐，实现“全身姿态规范 + 局部手关节捏合达标”的双重复合评定。

---

## 性能与实测数据

现场验证基于门诊康复室采集的 50 组规范动作与典型代偿动作视频集评测：

### 1. 设备端到端性能
| 硬件平台 | 模型与运行时 | 输入分辨率 | 推理延迟 | 端到端 FPS | NPU/TPU 占用率 |
|---|---|---|---|---|---|
| **reCamera Pro** | YOLO11n-Pose 33kpt INT8 (RKNN) | 640×640 | 38.2 ms | **24.0 FPS** | ~65% |
| **reCamera 2002** | YOLO11n-Pose 33kpt INT8 (CVI TPU) | 512×512 | 62.5 ms | **14.2 FPS** | ~82% |

### 2. 运动学评估准确率
- **活动度 (ROM) 量测误差**：与金标准双目光学动捕（VICON）对比，外展角度平均绝对误差 (MAE) 为 **±2.1°**；
- **病理性代偿拦截召回率**：斜方肌耸肩代偿 **95.2%**，膝内扣代偿 **93.8%**；
- **防抖抗扰表现**：3 帧时序防抖拦截了 98.6% 的肢体抖动误计次。

---

## 数据接口与集成协议

### 1. 本地实时 HUD (WebSocket)
- **URL**：`ws://<camera_ip>:8124/ws/kinematics`
- **Payload 示例**：
```json
{
  "timestamp": 1793339665120,
  "phase": "PEAK_HOLD",
  "valid_reps": 5,
  "rom_degrees": 92.4,
  "quality_score": 95.0,
  "compensation": {
    "detected": true,
    "type": "SHOULDER_SHRUG",
    "deviation_val": 14.2
  },
  "keypoints_33": [
    {"id": 0, "name": "nose", "x": 0.512, "y": 0.185, "conf": 0.94},
    ...
  ]
}
```

### 2. 医院 EMR / HIS 康复系统对接 (MQTT)
- **Broker**：`mqtt://<camera_ip>:1883`
- **Topic**：`rehab/telemetry/<camera_sn>/session`
- **发布时机**：训练单组完成或检测到持续代偿时触发，输出结构化康复评定报告。
