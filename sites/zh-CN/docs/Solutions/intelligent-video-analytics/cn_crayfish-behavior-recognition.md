---
description: 水产养殖高密度水槽螯虾打斗与行为识别工程文档：4 级漏斗流水线、8 帧时序拼图网络、公母多帧投票分类、solution-cli 自动化部署、模型与运行时矩阵、MQTT/WS 输出协议及现场实测数据
title: '水产小龙虾争斗识别：4 级漏斗流水线与端侧实测性能'
sidebar_label: '水产小龙虾争斗识别'
keywords:
  - 螯虾打斗识别
  - 水产养殖 AI
  - 澳洲淡水龙虾
  - solution-cli
  - reCamera Pro
  - SG2002 cvimodel
  - 时序行为分类
  - YOLO11
  - 残食预警
  - MQTT
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover_zh-ea0536ca.png
slug: /solutions/crayfish-behavior-recognition
sidebar_position: 2
last_update:
  date: 10/30/2026
  author: seeed-solutions-hub
createdAt: '2026-10-30'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/cn/solutions/crayfish-behavior-recognition/
generated_from: sensecraft-solutions@crayfish_behavior_recognition
---

:::caution[使用须知]
辅助养殖监测与预警系统，不是全封闭工业自动化保护设备。建议与现有水质溶氧监控、自动投饲设备联动配合使用。
:::

## 这套方案是干什么的

### 系统架构与设备拓扑

![智能水产小龙虾争斗识别系统架构图](https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/architecture-zh-c066342f.png)

要跑起来只需要两样东西：出画面的智能边缘相机、接事件的养殖监控系统。摄像头与看板通过标准网络协议互联，无需复杂的集中式算力服务器。


在工厂化高密度循环水养殖（RAS）或繁育水槽中，澳洲淡水龙虾（红螯螯虾）在蜕壳期极易因同伴打斗造成大螯残缺甚至互相残食。**部署在水槽上方的智能边缘相机在本地实时跟踪每只螯虾**，当两只虾靠近并发生肢体攻击搏斗时，**系统在 8 帧时序内完成确认并通过 MQTT 上报养殖中控大屏**，提醒工人及时分池或投喂诱饵，显著降低断肢率与死淘率。

- 开源实现：[github.com/suharvest/crayfish-fight](https://github.com/suharvest/crayfish-fight)
- 选型与部署：[可部署方案页（现场设备选型与部署指南）](https://www.seeedstudio.com.cn/solutions/reference-designs/crayfish_behavior_recognition/deploy)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <div class="info-content">
                <h3>4 级漏斗分级计算</h3>
                <p>目标检测 → 靠近触发 → 单帧粗筛 → 8 帧时序拼图确认，逐级剔除 90% 以上无效计算，确保嵌入式端侧算力充裕。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>时序拼图消解 2D 假交叠</h3>
                <p>将 8 帧连续交互区域拼成时空大图送入轻量卷积网，彻底消除水下侧拍视角下的视觉假接触与假误报。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.199l-.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>公母性别多帧投票统计</h3>
                <p>单只个体进入视野前 10 帧自动截取大螯形态进行性别判定投票，Top-1 准确率 82.0%，自动统计水槽性别比例。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>端侧离网运行与 IP67 防水</h3>
                <p>相机自带 NPU/TPU 运算，支持单根网线 PoE 供电；断网状态下仍能维持本地录像与打斗事件缓存。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示

水槽顶部相机实际输出画面：对视野内所有个体进行 ByteTrack 编号与性别判定标记（如 `#3 male 91%`），当 `#2` 与 `#5` 靠近缠斗时，打斗区域亮起红色追踪高亮框并标记 `FIGHT (temporal confirmed)`。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover_zh-ea0536ca.png" alt="水产养殖水槽打斗识别真机演示：多目标跟踪、公母识别与打斗区域高亮"/>
</div>

---

## 需要哪些硬件

现场仅需选配一体化防水智能相机并接入水产基地局域网：

| | 设备选型 | 算力与配置 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>4K 大底 + 3 TOPS NPU | 瑞芯微 RV1126B · 3 TOPS NPU<br/>2GB 内存 · Linux 5.10 | **推荐首选**。大型宽水槽、养殖池；需要运行完整 4 级漏斗与 8 帧时序拼图网络 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/1/_1_5_5.png" alt="reCamera 2002" width="110" /> | [reCamera 2002 (8GB)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>1/2.8" 传感器 + 1 TOPS TPU | 算能 SG2002 · 1 TOPS TPU<br/>512MB 内存 · 原生 C++ 运行时 | **经济批量档**。标准密集小水槽批量铺设；超低功耗单线 PoE 部署 |

---

## 现场怎么部署

### 一、机位与安装规范
- **安装高度与视角**：架设于水槽正上方 **0.8 ~ 1.5 米**，垂直俯拍（俯角 80°~90°）为佳；
- **水深与水体透明度**：适用水深 20~80 cm，水体透明度 ≥ 25 cm；避免气泡发生器正对摄像头造成反光；
- **补光条件**：水槽上方建议配备匀光柔光灯带（照度 ≥ 100 Lux），消除波光粼粼造成的高频反光噪点。

### 二、软件安装：使用官方推荐工具部署

本方案纳入 Seeed 方案自动化部署体系，官方首选使用 **`solution-cli`（或 AI 方案助手）** 执行自动化选型校验与端侧下发，同时兼容控制台 GUI 操作：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/crayfish_behavior_recognition/deploy" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>查看现场选型与部署指南 🖱️</font></span></strong>
    </a>
</div><br />

#### 推荐途径：使用 `solution-cli` 自动化部署与环境自检（CLI 最佳实践）
`solution-cli` 是官方面向工业方案与 AI 边缘设备的部署工具包（见[现场部署指南](https://www.seeedstudio.com.cn/solutions/reference-designs/crayfish_behavior_recognition/deploy)）。无需手动管理容器镜像，执行三步即可完成端侧自检与下发：

```bash
# 1. 检查并安装 solution-cli（已安装用户可跳过）
npm install -g @seeed-studio/solution-cli
# 或直接通过 npx 运行：npx @seeed-studio/solution-cli doctor

# 2. 环境诊断与设备连通性巡检（自动探测局域网内的 reCamera 设备）
solution-cli doctor
solution-cli device scan

# 3. 查看方案详情与硬件需求并一键完成端侧部署下发
solution-cli hub get crayfish_behavior_recognition --locale zh
solution-cli deploy --solution crayfish_behavior_recognition --target recamera --host 192.168.42.1
```
> **提示**：若你在使用 Claude Code、Codex、Antigravity 等开发工具，也可以直接让 AI 助手调用内置的 `solution-cli` 技能，输入：*“请使用 solution-cli 帮我部署方案 crayfish_behavior_recognition 到水槽上方的 reCamera Pro 上”*，AI 助手将自动执行环境预检并挂载开箱即用的推理引擎。

#### 备选途径：GUI 控制台可视化安装（SenseCraft Web / App Center）
1. 浏览器访问 `http://<camera_ip>` 登录设备后台；
2. 在 **App Center（应用中心）** 搜索 `crayfish_behavior_recognition`；
3. 点击 **Install**，应用自动部署检测器与时序分析流水线；
4. 进入设置页，填入养殖场 MQTT Broker 地址（如 `192.168.1.100:1883`）并开启服务。

---

## 算法原理：4 级漏斗与时序拼图

```
摄像头采集 (1080p @ 10-15fps)
   │
   ▼ [级 1] 目标检测   YOLO11n (640×640) → 螯虾 Bounding Box + ByteTrack 多目标跟踪
   │
   ▼ [级 2] 靠近触发   两虾中心距 < 1.1×体长 或 IoU > 0，持续 ≥ 3 帧
   │                    截取交互区域并外扩 20% margin 作为 ROI
   │
   ▼ [级 3] 单帧粗筛   YOLO11n-cls (224×224) 极速二分类，快速过滤普通游动
   │
   ▼ [级 4] 时序确认   YOLO11n-cls (448×448 拼图)，将 8 帧交互 ROI 拼图输入卷积网
   │                    彻底消除侧拍视角下的 2D 透视重叠伪接触
   │
   ▼ 事件输出         状态机仅在 start / change / end 状态切换时上报 MQTT 与 WebSocket
```

### 并行分支：性别分类器
在新生成的 Track ID 前 10 帧中，截取单只虾大螯与腹部形态，输入 YOLO11n-cls（128×128）进行多帧投票，输出 `male` / `female` / `unknown`，Top-1 准确率达 **82.0%**。

---

## 性能与实测数据

现场验证基于天津水产学院及养殖水槽现场 2,000+ 帧真实采集标注验证集（包含 15% 虚焦模糊与水面反光增广）：

### 1. 模型检测与分类准确度
| 模型名称 | 输入尺寸 | 目标任务 | 实测指标 | 部署运行时 |
|---|---|---|---|---|
| `det_v2_n` | 640×640×3 | 螯虾个体检测 | **mAP50: 0.950** (P: 0.914, R: 0.880) | RV1126B RKNN / SG2002 TPU |
| `behavior_temporal`| 448×448×3 | 8 帧时序打斗确认 | **Recall: 0.950** (Precision: 0.905) | RV1126B RKNN INT8 |
| `behavior_cls` | 224×224×3 | 单帧行为粗筛 | Recall: 0.775, Precision: 0.816 | RV1126B RKNN / SG2002 TPU |
| `sex_cls` | 128×128×3 | 公母性别判定 | **Top-1: 0.820** (10 帧多帧投票) | RV1126B RKNN / SG2002 TPU |

### 2. 硬件运行表现
- **reCamera Pro**：**10~15 FPS**（4 级漏斗全闭环，CPU ~18%）；
- **reCamera 2002**：**12~15 FPS**（检测 + 粗筛预警，CPU ~25%）。

---

## 数据接口与集成协议

### 1. 养殖中控大屏与自动化投饲联动 (MQTT)
- **Broker**：`mqtt://<camera_ip>:1883`
- **Topic**：`crayfish/tank/<tank_id>/event`
- **打斗告警报文示例**：
```json
{
  "timestamp": 1793339665200,
  "tank_id": "RAS_04",
  "event_type": "FIGHT_CONFIRMED",
  "severity": "CRITICAL",
  "actors": [
    {"track_id": 2, "sex": "male", "box": [210, 140, 320, 260]},
    {"track_id": 5, "sex": "unknown", "box": [260, 160, 370, 280]}
  ],
  "duration_sec": 4.5
}
```

### 2. 性别与存塘统计上报
- **Topic**：`crayfish/tank/<tank_id>/stats`
- **周期上报**：每小时汇总当前水槽总只数、公母比例与攻击事件频次，供养殖专家系统生成水质与投喂优化建议。
