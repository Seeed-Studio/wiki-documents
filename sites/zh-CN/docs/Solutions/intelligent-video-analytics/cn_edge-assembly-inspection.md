---
description: 端侧装配质检——按模板期望件清单做缺件比对、用 ArUco 标定物量尺寸，合并成一个 OK/NG 判定，经 Modbus TCP 给 PLC、经 MQTT 给 MES。含硬件构成、部署轮廓、输出契约与实测数据。
title: 端侧装配质检方案：缺件、尺寸判定与 Modbus / MQTT 输出
sidebar_label: '端侧装配质检'
keywords:
  - 装配质检
  - 缺件检测
  - 机器视觉 尺寸测量
  - ArUco 标定
  - Modbus TCP 质检
  - MQTT MES 质检事件
  - 端侧 AI 质检
  - reComputer
  - Jetson Orin
  - Hailo-8
  - YOLOX
  - TensorRT
image: https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-1-13424b53.jpg
slug: /solutions/edge-assembly-inspection
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/cn/solutions/edge-assembly-inspection/
generated_from: sensecraft-solutions@edge_inspection_assembly
---

:::caution[使用须知]
尺寸结果按标定物换算像素得到，不能替代验收环节里经过校准的量具；随包检测器训练在裸板缺陷数据集 DeepPCB 上，它的六类缺陷不是装配缺件，用于自己的产品前要换成自己的期望件清单并用自己的数据实测。
:::

## 这套方案是干什么的

一台固定相机对着一个检测工位。每一帧先过检测器，再做缺件比对和尺寸测量，合并成一个 OK/NG 判定，按产线节拍输出。

- **缺件比对**——模板期望件清单（`class` + ROI + 匹配距离）与检测结果比对。清单里有、画面里没有的记为 `missing`；清单外找到的可选报为 `extra`。
- **尺寸测量**——与被测面共面的标定物给出 `mm_per_pixel`；测量 ROI 内目标的最小外接矩形换算成毫米，与名义尺寸 ± 公差比较。
- **判定合并**——`defect`、`missing`、`extra`、`dimension_out_of_tolerance` 任一成立即判 NG，四条可以逐条关闭。

判定同时写到两处：给 PLC 的 Modbus TCP 保持寄存器与线圈，以及给 MES 或历史库的每帧一条 MQTT JSON 事件。寄存器先于线圈写入，按线圈动作的 PLC 读到的寄存器就是同一次判定的数据。

- 打包源与部署指南：[sensecraft-solutions / solutions/edge_inspection_assembly](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_assembly)
- 选配置与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/edge_inspection_assembly)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>设备开箱即用</h3>
                <p>reComputer J30 / J40 系列或 R2000 系列装好应用包即可运行，首次安装约 60 分钟；在 J40 系列上实测取图到线圈 P50 10.92 ms。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>代码开源</h3>
                <p>运行时代码 Apache-2.0；检测器用 YOLOX-Tiny（Apache-2.0），不含 Ultralytics 代码与权重，没有 AGPL 义务。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>自有相机、PLC、MES 直接接入</h3>
                <p>RTSP / ONVIF / USB 相机均可；判定走 Modbus TCP 与 MQTT。HR 0–7 与表面质检方案的寄存器布局相同，已有 PLC 程序不用改。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>全程本地运行</h3>
                <p>取图、推理、判定、输出都在质检主机上完成，主链路不需要外网。</p>
            </div>
        </li>
    </ul>
</div>

### 真机演示画面

下面几张图是这条流水线的实际输出：

- 检测器在一张 DeepPCB 验证图（`12300060_test.jpg`）上的输出，每个框都是 ONNX 模型的检测结果。随包示例配置里六条的期望件清单就是用这一帧的真值框生成的。
- 名义尺寸下的合成 ArUco 场景：左侧标定物给出 mm/px，右侧目标按它换算（60 × 40 mm，判定 OK）。
- 同一场景下的超差件：名义 60 mm、公差 1 mm，量到 62.25 mm，判定 NG，Modbus HR 10 = 6225、HR 11 = 2。

检测器在 DeepPCB 验证图上的输出：

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-1-13424b53.jpg" alt="检测器在 DeepPCB 验证图 12300060_test.jpg 上的输出，框为模型真实检测结果"/>
</div>

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-2-13779bda.jpg" alt="同一模型在另一张 DeepPCB 验证图上的输出"/>
</div>

尺寸链路：左侧标定物给出 mm/px，右侧目标按它换算。名义尺寸下判 OK：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-nominal-be46361b.png" alt="名义尺寸下的合成标定场景：左侧标定物给出 mm/px，右侧目标量到 60 × 40 mm，判定 OK"/>
</div>

同一场景放一个超差件，量到 62.25 mm，判 NG，Modbus HR 10 = 6225、HR 11 = 2：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-oversize-384a1faf.png" alt="超差件：名义 60 mm、公差 1 mm，量到 62.25 mm，判定 NG"/>
</div>

目标旋转 25° 时，最小外接矩形给出同一个尺寸：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-rotated-1ad0cd88.png" alt="目标旋转 25° 后，最小外接矩形换算出的尺寸不变"/>
</div>

尺寸场景由 `evaluation/make_dimension_fixture.py` 按已知 mm/px 合成，真值来自生成参数，不是真实工位照片。

## 需要哪些硬件

一个工位三样东西：相机、质检主机、接收判定的系统。

**① 相机**——任意 RTSP 或 ONVIF 摄像头，USB 摄像头或录制文件也可以。型号不限，要求整块板或整件装配体在画面内，并且建模板后取景不再变。

**② 质检主机**——决定一台主机能接几个工位。

| | 质检主机 | 加速器 | 当前下发的检测器 | 实测路数 | 什么时候选它 |
|---|---|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011（Orin Nano 8GB）](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>单工位质检主机 | Orin GPU | YOLOX-Tiny 640²，TensorRT FP16 | 单路，67 h 长稳 | 单个工位 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012（Orin NX 16GB）](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>多工位聚合质检主机 | Orin GPU | YOLOX-Tiny 640²，TensorRT FP16 | 8 路稳定 / 12 路下降 / 24 路失败 | 一台主机接多个工位；精度与速度数据都在这个模组上实测 |

多路容量：每路 640² / 10 fps，每级跑 5 分钟，整轮跑两遍，测试期间 MQTT 与 Modbus 关闭。两个出口都开时，可带路数低于 8。

两款 reComputer 都有无风扇工业形态（reComputer Industrial J3011 / J4012），模组与运行时相同，可装进控制柜。

**③ 其余条件**——做尺寸判定需要一个与被测面共面的标定物（ArUco 标记，默认 `DICT_4X4_50`，或任意已知宽度的参考物）；相机与主机之间走以太网；再加一个 Modbus TCP 主站（PLC）和/或 MQTT 消费方。主链路不需要外网。

### 选型排他边界

- **单工位 vs 多工位**：J3011 面向单工位单相机质检；若单台主机需要同时承载多个检测工位（>2 路并发）或高帧率拍摄，建议选配 J4012。
- **模型动态下发与在线调优**：Hailo-8 方案需在设备外编译固化模型文件，若现场需要高频直接在线微调或直接加载 PyTorch/ONNX 动态模型，应优先选择 Jetson 系列。

## 现场怎么部署

先固定相机和光学，再装软件。

### 一、装硬件：先固定相机

:::tip[相机装好后不要再动]
期望件 ROI 按画面坐标保存。相机移动、重新安装或重新对焦后，整份 `assembly.expected[]` 模板都要重建。产线上动过相机，就给这个工位重建模板。
:::

整块板或整件装配体要在画面内。做尺寸判定时，标定物放在与被测面相同的平面上；工作距离不同会直接变成测量误差，系统不会报错。没有标定物时，尺寸段报 `uncalibrated`、Modbus HR 11 = 4，不输出数值。

### 二、装软件

逐设备的操作步骤在可部署方案页，按现场条件选完配置后可以直接下载对应的应用包。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/edge_inspection_assembly" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

两条路径流程相同：

1. **选套餐与主机。** `摄像头 + reComputer J30 / J40（Orin）` 或 `摄像头 + reComputer R2000 系列（Hailo-8）`。难度为**高级**，首次安装预留约 **60 分钟**。
2. **部署质检运行时**（必需）。Orin 路径首次部署时在设备上构建 TensorRT engine，约 5 分钟，engine 与这台设备、这个 TensorRT 版本绑定。Hailo 路径的 INT8 HEF 在设备外编译、部署时下载，板上不用构建，但要满足三个前提：Python 次版本匹配；HailoRT 4.21.x 的驱动、用户态库、Python 绑定三处版本一致；内核参数 `hailo_pci force_desc_page_size=4096`。
3. **配置尺寸标定**（可选）。不配置时缺件链路照常运行，尺寸段报 `enabled: false` 或 `uncalibrated`。
4. **看判定结果**（可选）。8080 端口的本地 Web 面板显示健康计数、最近事件，以及带检测框与缺件 ROI 的 MJPEG 预览。接 PLC 之前先在这里确认相机拍到了该拍的区域。
5. **用 SAM2 标注工具生成期望件清单**（可选）。工具跑在离线工作站上，不在边缘设备上，也不进帧循环；人工画框，SAM 2.1 Hiera-Small 生成像素 mask，再扩成装配 ROI。另有不需要 GPU 的 Otsu-flood 后端。

上线前把 `assembly.expected[]` 换成你自己的装配位。随包的期望件清单是用一张 DeepPCB 图生成的，只用于跑通链路。

## 有哪些接口

数据从质检主机上三个接口输出，全部由主机本地提供。

- **已经按 OK/NG 线圈动作的 PLC**——读 Modbus TCP，端口 502、unit 1。HR 0–7 与表面质检方案 v1 的布局相同，已有程序不用改；新增信息在 HR 8–11。
- **MES 或历史库**——订阅 1883 端口上的 `<设备名>/inspection/<流编号>/results`。每处理一帧一条 JSON 事件，schema `2.0.0`，发布前做契约校验。
- **操作工或调试工程师**——8080 端口的 HTTP 面板。

`<设备名>` 在部署时填写，是主题的第一段，按产线、工段或工位命名，同一 broker 上的多台主机互不覆盖。流编号同时写在 payload 里，下游不必解析主题就能判断来源。

### 完整接口表

| 类型 | 位置 | 内容 | 备注 |
|---|---|---|---|
| `mqtt` | 1883，`<设备名>/inspection/<流编号>/results` | `verdict`、`verdict_reasons`、`defect_count`、`detections[]`、`assembly`（`enabled`、`expected_count`、`matched_count`、`missing_count`、`extra_count`，以及逐条缺失项的标签与 ROI）、`dimension`（`enabled`、`calibrated`、`mm_per_pixel`、`out_of_tolerance_count`、带逐项状态的 `measurements[]`） | schema `2.0.0`；两段始终存在，模块在该路关闭时为 `enabled: false` |
| `modbus_tcp` | 502，unit 1，Coil 0/1 + HR 0–11 | Coil 0 = NG、Coil 1 = OK（互斥）。HR 0–7 同契约 v1：主缺陷类别、缺陷数、bbox ×10000、心跳。HR 8 = 缺件数，HR 9 = 多余件数，HR 10 = 测量 mm ×100，HR 11 = 公差判定码 | 寄存器在同一把锁内先于线圈写入 |
| `http` | 8080，`/healthz` `/events` `/preview.mjpg` | 帧率、推理耗时、缺件与尺寸失败计数；最近事件；带框与 ROI 的 MJPEG 预览 | 本地面板，无鉴权 |

**HR 11 公差判定码**：`0` ok、`1` undersize、`2` oversize、`3` not_found、`4` uncalibrated。

`verdict_reasons` 是列表，四条原因（`defect`、`missing`、`extra`、`dimension_out_of_tolerance`）可同时出现。ROI 按路配置（`sources[].assembly` 与 `sources[].dimension`）。用标注工具生成的 `assembly` 段带 `roi_profile_sha256`，标明现场跑的是哪一份 ROI profile；手写 ROI 时省略或为 `null`。

```json
{
  "schema": "2.0.0",
  "device": "assembly-station-01",
  "stream": "cam_pcb_top",
  "timestamp": 1729000000.456,
  "verdict": "NG",
  "verdict_reasons": ["missing"],
  "defect_count": 0,
  "detections": [],
  "assembly": {
    "enabled": true,
    "expected_count": 6,
    "matched_count": 5,
    "missing_count": 1,
    "extra_count": 0,
    "missing_items": [
      {"label": "capacitor_c12", "roi": [120, 240, 160, 280]}
    ]
  },
  "dimension": {
    "enabled": true,
    "calibrated": true,
    "mm_per_pixel": 0.125,
    "out_of_tolerance_count": 0,
    "measurements": [
      {"name": "pcb_width", "value_mm": 60.05, "status": "ok"}
    ]
  }
}
```

读字段时注意三点：

- **`HR 10 = 0` 时先读 HR 11。** `3` 和 `4` 表示没有可读的测量值，不是量到 0 mm。
- **v2 里 `verdict = NG` 时 `defect_count` 可以是 0。** 有缺件或尺寸超差都会判 NG。
- **线圈与寄存器只在写入侧是同一次采样。** 线圈和寄存器分两个 Modbus 请求读时，在高判定率下可能读到两次判定的数据，约 20 次判定/秒时实测出现过。在意这一点就先轮询寄存器，把线圈当触发信号。

一台主机接多路时，Modbus 寄存器里是最近一次判定，可能来自任一路；逐路结果从 MQTT 取。包里的 MQTT broker 是本地匿名的，正式部署改为指向带凭据的 broker。

## 性能与实测数据 {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_assembly" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_inspection_assembly</font></span></strong>
    </a>
</div><br />

### 速度与时延

「检测器吞吐」只含检测调用；「全链路」含判定合并、Modbus、MQTT 与契约校验，不节流；「端到端」是节流到 10 fps 产线节拍时，从采集到写 Modbus 线圈。

| 设备 | 模型 / 精度 | 检测器吞吐 | 全链路 | 端到端 capture → Modbus 线圈 |
|---|---|---:|---:|---|
| reComputer J40 系列（J4012，Orin NX 16GB） | YOLOX-Tiny 640²，TensorRT FP16 | 95.06 FPS（`detect()` P50 10.52 ms） | 89 FPS（P50 42.9 ms） | P50 10.92 ms / P99 11.18 ms；3000 个样本，丢帧 0。整机从零部署（engine 在设备上构建）后：P50 9.81 ms / P95 10.18 ms，n=300 |
| reComputer R2000 系列 + Hailo-8 | YOLOX-Tiny 640²，HailoRT INT8 HEF | 硬件 106.75 FPS（`hailortcli run`）；应用层 94.02 FPS（P50 10.64 ms） | 43.92 FPS | P50 11.89 ms / P99 16.08 ms |

条件：Orin 检测器数字在 60 帧预解码画面上计时 500 次，其中 engine execute 约 6.3 ms，其余是 letterbox 加 CPU NMS。多路容量在 reComputer J40 系列（J4012）上实测：8 路稳定 / 12 路下降 / 24 路失败；每路 640² / 10 fps，每级跑 5 分钟，整轮跑两遍，MQTT 与 Modbus 关闭。reComputer J30 系列（J3011）单路 10 fps 连续运行 67 h，端到端 P50 11.45 ms。

复现：`solutions/edge_inspection_assembly/evaluation/`（Hailo-8：`evaluation/runs/2026-09-06-rpi-hailo/results.md`）

### 检测精度

| 指标 | 数值 | 条件 |
|---|---:|---|
| mAP50，reComputer J40 系列，TensorRT FP16 | **0.9876** | DeepPCB6 val，205 图 / 1158 框 / 6 类；阈值 0.35 下 P 0.9284 / R 0.9741，FP 87 / FN 30，整帧漏检 0 |
| mAP50-95，reComputer J40 系列（整机从零部署） | 0.8207 | 同一 val 集；CPU 参考 0.8213 |
| mAP50，reComputer R2000 系列 + Hailo-8，INT8 HEF | **0.9858** | 同一 val 集；与 CPU 参考相比 −0.0018 |
| mAP50，Hailo Dataflow Compiler 模拟器，INT8 | 0.9924 | 20 张 val 图 / 118 框，不与 205 图两行直接比较；CPU、native、quantized 三者 mAP50 / P / R 相同，逐框 CPU ↔ quantized 119/120 匹配 |

数据集 [DeepPCB](https://github.com/tangsanli5201/DeepPCB)（MIT），六类（open / short / mousebite / spur / copper / pin-hole），不随包分发。

复现：`solutions/edge_inspection_assembly/evaluation/`（模拟器：`evaluation/runs/2026-09-05-m3-hef/`）

### 缺件与尺寸

| 项目 | 结果 | 条件 |
|---|---|---|
| 缺件真值闭环 | 模板帧 6 / 6 匹配；换板后 6 / 6 报缺失 | 期望件清单由一张 val 图的真值框生成（ROI = GT 框 × 1.6，6 条）；换板后 `verdict_reasons` 里 `missing` 与 `defect` 并列出现 |
| 尺寸误差（ArUco 标定） | 最差相对误差 **0.65%**，预算 1% | 合成 ArUco 场景，不含镜头与照明误差；长边 60 → 60.241 mm（+0.40%），短边 40 → 40.261 mm（+0.65%）；公差 ±1.0 mm，判 `ok`；未压缩 PNG 与 mp4v 编码后数值一致 |
| 单路长稳 | 67 h 连续运行，0 丢帧 | reComputer J30 系列（J3011），单路 10 fps；起跑基线 RSS 256–259 MiB，结温 61–62 °C，重启 0 |

复现：`evaluation/make_dimension_fixture.py`、`evaluation/smoke_cpu_dimension.py`；长稳档位 `boundary.soak.yaml`

### 运行时与关键参数

| 设备 | 模型 | 精度 | 运行时 | 模型怎么到设备上 |
|---|---|---|---|---|
| reComputer J30 / J40 系列 | YOLOX-Tiny 640² | FP16 | TensorRT | 首次部署在设备上构建 engine（约 5 分钟），与该设备、该 TensorRT 版本绑定 |
| reComputer R2000 系列 + Hailo-8 | YOLOX-Tiny 640² | INT8 | HailoRT 4.21.x | HEF 在设备外用 Hailo Dataflow Compiler 编译（optimization level 1 + Bias Correction），部署时下载 |

- 检测阈值：`0.35`（评测配置）
- 标定物：ArUco `DICT_4X4_50`（默认），或任意已知宽度的参考物
- 判定原因：`defect` / `missing` / `extra` / `dimension_out_of_tolerance` 可逐条关闭；`extra` 需开启多余件上报

### 已知退化

- 相机移动、重新安装或重新对焦后，ROI 模板失效，要重建期望件清单。
- 标定物与被测面工作距离不同、零件倾斜、边缘对比度低，会产生尺寸误差、`not_found` 或 `uncalibrated`，系统不报错。
- 精度来自 DeepPCB 裸板缺陷，人造缺陷边界清晰，六类也不是装配缺件；真实装配场景更难。
- reComputer R2000 系列的瓶颈在主机 CPU：全链路 43.92 FPS，相对检测器吞吐掉得比 Orin 多。
- 多路数字在 MQTT 与 Modbus 关闭时测得，两个出口都开时可带路数低于 8。

## 数据与素材出处

- **DeepPCB**——[github.com/tangsanli5201/DeepPCB](https://github.com/tangsanli5201/DeepPCB)，MIT 许可。用于训练随包检测器，也是上文所有精度数字的 val 集。MIT 许可允许再分发与商用，要求版权声明随副本与衍生作品一起传递，署名随包内 `gallery/ATTRIBUTION.md` 一起分发。图像是裸板铜箔层的二值化灰度扫描件，不含人物，也不含可识别客户的内容。**数据集不随包分发。**
- **YOLOX**——[github.com/Megvii-BaseDetection/YOLOX](https://github.com/Megvii-BaseDetection/YOLOX)，Apache-2.0。检测器主干。不含 Ultralytics 的代码与权重，没有 AGPL 义务。
- **SAM 2.1 Hiera-Small**——[github.com/facebookresearch/sam2](https://github.com/facebookresearch/sam2)，代码与权重均为 Apache-2.0。只被离线标注工具使用。
- **尺寸样例图**——合成图像，由本项目的 `evaluation/make_dimension_fixture.py` 生成。不涉及第三方素材，无需署名。
- **架构图**——按设备目录与输出接口绘制。

运行时代码是 Apache-2.0。随包模型训练在 DeepPCB 上，适用范围见页首说明。
