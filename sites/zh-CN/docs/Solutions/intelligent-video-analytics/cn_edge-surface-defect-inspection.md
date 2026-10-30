---
description: 端侧钢材表面缺陷质检——识别六类缺陷，OK/NG 判定经 Modbus TCP 给 PLC、经 MQTT 给 MES，可跑在 Jetson Orin 或装了 Hailo-8 的 reComputer R2000 系列上。含硬件构成、部署轮廓、输出契约与实测数据。
title: 端侧表面缺陷质检方案：六类缺陷、Modbus 与 MQTT 输出
sidebar_label: '端侧表面缺陷质检'
keywords:
  - 表面缺陷质检
  - 钢带缺陷检测
  - Modbus TCP 质检
  - MQTT MES 质检事件
  - 端侧 AI 质检
  - reComputer
  - Jetson Orin
  - Hailo-8
  - YOLOX
  - D-FINE
  - RT-DETRv2
  - EfficientAD 异常检测
  - TensorRT
image: https://files.seeedstudio.com/wiki/reference-design/edge_inspection_surface/defect-overlay-pair-1cfaeb5a.jpg
slug: /solutions/edge-surface-defect-inspection
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/cn/solutions/edge-surface-defect-inspection/
generated_from: sensecraft-solutions@edge_inspection_surface
---

:::caution[使用须知]
随包预置的 NEU-DET 权重（ONNX / HEF）为参考设计验证基准，供方案评估与端到端质检流程跑通使用；实际商业投产建议基于产线自有缺陷图像重新标定或训练模型。本方案不是经过认证的质量或安全仪器。
:::

## 这套方案是干什么的

固定相机对着钢带或工件。设备逐帧判断表面有没有缺陷，把 OK/NG 判定同时交给两条通路：PLC 可以锁存的 Modbus TCP 线圈，以及每帧一条、带该帧全部检测框的 MQTT JSON 消息。

- **六类缺陷**——crazing（龟裂）、inclusion（夹杂）、patches（斑块）、pitted surface（麻点）、rolled-in scale（压入氧化皮）、scratches（划痕）。
- **检测、OK/NG 规则与两个出口都在设备上运行。** 图像不出设备。MQTT broker、Modbus TCP 服务端与只读调试页面也在同一台主机上。
- **可选检测器与加速器。** Jetson 上可选 YOLOX-Tiny（默认）、D-FINE-S、RT-DETRv2-S；reComputer R2000 系列（Hailo-8）上运行 YOLOX-Tiny INT8。

- 打包源码与部署指南：[sensecraft-solutions / solutions/edge_inspection_surface](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_surface)
- 选配置与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/edge_inspection_surface)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>设备开箱即用</h3>
                <p>reComputer J30 / J40 系列装好应用包即可运行，首次部署约 40 分钟；在 Orin NX 16GB 上实测取帧到写线圈 P50 9.3 ms，3000 个样本无一超过 20 ms。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>代码开源</h3>
                <p>运行时代码 Apache-2.0；默认检测器 YOLOX（Apache-2.0），全方案不使用 Ultralytics 代码或权重。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>自有相机、PLC、MES 直接接入</h3>
                <p>任意 RTSP 摄像头；PLC 直接读 Modbus TCP unit 1 的线圈与寄存器，MES 订阅 MQTT，不需要中间件。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>全程本地运行</h3>
                <p>图像不出设备，主链路不需要外网。</p>
            </div>
        </li>
    </ul>
</div>

### 演示画面

随包不含任何由数据集派生的画面。唯一的素材是为本方案绘制的示意图（数据通路、设备名、协议名与端口号），没有照片和检测器输出。

要看检测器的输出，在自己的画面上打开随包调试页面：8080 端口的 `/preview.mjpg` 把检测框画在实时 MJPEG 流上，`/events` 列出最近的判定。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_surface/defect-overlay-pair-1cfaeb5a.jpg" alt="钢材表面缺陷实时检测推理画面与标注对比"/>
</div>

## 需要哪些硬件

现场两样东西：一台相机和一台主机。

**① 一台 RTSP 摄像头** —— 固定对着钢带或工件，缺陷要在画面里占到足够比例。实测数据都取自 640×640、10 FPS 的画面。光照要稳定：模型只在一个数据集的光照条件下训练过。

**② 质检主机** —— 决定能接几路相机、能选哪些检测器：

| | 主机 | 实测路数 | 什么时候选它 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)（Jetson Orin Nano 8GB）<br/>单路相机的入门主机 | 1~2 路稳定 | 单路、对成本敏感。实测 capture→coil P50 10.56 ms |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)（Jetson Orin NX 16GB）<br/>实测所用的主机 | 8 路稳定 | 接一路以上相机；下文数据都在这款上测得 |

第三种主机是**装了 Hailo-8 的 reComputer R2000 系列**，有部署步骤，配置器里暂时没有它的报价。

多路容量在 Orin NX 16GB 上实测，每路 640² / 10 FPS：**8 路稳定、12 路下降、24 路失败**。从 12 路起总吞吐停在 110–112 FPS：加速器上下文不是线程安全的，推理串行执行，再加算力也不会增加路数。

另外需要：一台与设备同网段、能做 Modbus TCP 主站的 PLC 或产线控制器（可选，寄存器表固定在 unit 1），以及产线旁或柜内的市电。主链路不需要外网。

### 选型排他边界

- **并发路数与显存上限**：单台主机若需接入 2 路以上工业相机，或需级联复杂大尺寸缺陷分类模型，请勿选择 8GB 显存的 J3011，应选择 16GB 显存的 J4012，以防多路图像缓冲区导致显存溢出（OOM）。
- **算子兼容性**：选用选配 Hailo-8 的 reComputer R2000 系列时，模型中若含有未受 Hailo 编译器支持的自定义非标准算子，将自动回退到 CPU 执行并大幅增加时延。

## 现场怎么部署

先固定相机和照明，再装软件。

### 一、装硬件：先固定相机和照明

:::tip[相机和照明装好后不要再变]
训练数据来自单一数据集、单一照明条件。换灯、换角度、换表面处理后，模型精度没有评测过，调阈值补不回来。相机和光源装好后保持不变。
:::

取景要求：

1. **缺陷在 640×640 画面里要占到足够比例。** 大视场下一道划痕只有几个像素宽，下文的精度数据不适用。
2. **机位固定。** 重新对准或重新对焦会改变实测时的尺度。
3. **产线节拍按 10 FPS 配置。** 运行时能跑更快，精度与时延数据都在 10 FPS 下测得。

### 二、装软件

逐设备的操作步骤在可部署方案页，这里只列流程。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/edge_inspection_surface" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

1. **选配置** —— 一台主机接几路相机，主机放在产线旁还是控制柜里。这两项决定模组与机箱。
2. **装应用包** —— 容器镜像、模型与冻结的分数阈值（0.35）都在包里。Jetson 首次部署时在设备上构建 TensorRT engine，Orin NX 16GB + TensorRT 10.3 实测 **291 s**；engine 与 GPU 架构和 TensorRT 版本绑定，不单独分发。reComputer R2000 系列下载 INT8 HEF，板上不用构建。
3. **填配置** —— RTSP 地址、`device_name` 与 `stream_id`（多条产线共用一个 broker、一台主机接多台相机时用来区分来源）、源帧率、Modbus unit id，以及 Jetson 上的 **Detector Track**：YOLOX-Tiny（默认，有实测数据）、D-FINE-S 或 RT-DETRv2-S。分数阈值有 0.25 / 0.35 / 0.45 三档，0.35 是按 YOLOX 标定的部署值。
4. **验证** —— 打开 8080 端口的 `/preview.mjpg`，确认自己的画面上有检测框，再看 `/healthz` 里的推理耗时、capture→coil 时延与 MQTT / Modbus 计数。

首次部署预留 **40 分钟**。Orin 路径主要耗时在构建 engine；Hailo 路径要满足三个前提：Python 次版本匹配；HailoRT 4.21.x 的驱动、库、Python 绑定三处版本一致；内核参数 `hailo_pci force_desc_page_size=4096`。部署步骤会逐项检查。

## 有哪些接口

数据全部由质检主机提供：Modbus TCP 502、MQTT 1883、HTTP 8080。主链路里没有云端环节。

- **PLC 或产线控制器** —— 直接读 Modbus TCP unit 1。线圈 0 是 NG、线圈 1 是 OK，二者互斥。寄存器在写线圈**之前**原子更新，PLC 看到线圈翻转时，HR 0–7 已是同一帧的类别、缺陷数、主缺陷框与心跳。建议先轮询寄存器，把线圈当触发信号。
- **MES 或历史库** —— 订阅 `<设备名>/inspection/<流编号>/results`。每帧一条 JSON，判定、原因、缺陷数与该帧全部检测框在同一条 payload 里。一台主机接多路时，逐路结果只能从这里取：Modbus 上只有最后写入的那次判定。
- **调试笔记本或车间看板** —— 8080 端口提供 `/preview.mjpg`（带框的 MJPEG）、`/healthz`（推理耗时、capture→coil 时延、MQTT 与 Modbus 计数）与 `/events`（最近的判定），只读。

`<设备名>` 与 `<流编号>` 在部署步骤里填写；`stream_id` 也写在 payload 里，下游不必解析主题。

### 完整接口表

| 主题 / 端口 | 内容 | retained |
|---|---|---|
| Modbus TCP 502，unit 1，线圈 0–1 | 线圈 0 = NG、线圈 1 = OK，互斥，在寄存器之后写 | 不适用（寄存器状态） |
| Modbus TCP 502，unit 1，HR 0–7 | HR 0 主缺陷类别 ID；HR 1 缺陷数；HR 2–5 主缺陷框 cx/cy/w/h 归一化 ×10000；HR 6–7 心跳 Unix 秒的 uint32 高字与低字 | 不适用 |
| `<设备名>/inspection/<流编号>/results` | `type`、`version`、`device`、`stream_id`、`frame_id`、`verdict`、`verdict_reason`、`defect_count`、`primary_class_id`、`coordinate_space`、`inference_time_ms`、`pipeline_ms`、`detections[]`（`slot`、`class_id`、`class_name`、`score`、`bbox`） | 否 |
| HTTP 8080 `/preview.mjpg` `/healthz` `/events` `/snapshot.jpg` | 带框的 MJPEG 预览、健康计数、最近判定、单帧抓图 | 不适用 |

两个字段注意：**`slot` 是帧内按分数降序的下标**，流水线不做跟踪，相邻两帧的 `slot 0` 未必是同一处缺陷。开启可选异常模块时，**`anomaly_score` 是单独的附加字段**，不参与顶层 `verdict`。

每条 MQTT 消息在发布路径上做契约 schema 校验，不合格的计数后丢弃。包里的 broker 配置为 `allow_anonymous true`；正式产线改为指向带凭据的 broker。

## 性能与实测数据 {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_surface" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_inspection_surface</font></span></strong>
    </a>
</div><br />

### 速度与时延

| 设备 | 模型 / 精度 | 检测器吞吐 | 全链路 | 端到端 capture → Modbus 线圈 |
|---|---|---:|---:|---|
| reComputer J40 系列（J4012，Orin NX 16GB） | YOLOX-Tiny 640²，TensorRT 10.3 FP16 | 113.7 FPS（`detect()` P50 8.797 ms，P95 9.097，P99 9.223） | 节流到 10 FPS 时 9.999 FPS、丢帧 0；不节流 76.5–104.3 FPS | P50 9.298 / P95 9.441 / P99 9.549 ms；3000 个样本，最大 9.926 ms |
| reComputer J30 系列（J3011，Orin Nano 8GB） | YOLOX-Tiny 640²，TensorRT 10.3 FP16 | 105.2 FPS（纯算力 198.5 FPS，GPU 5.03 ms） | 节流到 10 FPS 时 9.999 FPS、丢帧 0；不节流 75.3 FPS | P50 10.56 / P95 10.82 / P99 11.10 ms；稳定节拍，整机 18.2 W |
| reComputer R2000 系列 + Hailo-8 | YOLOX-Tiny 640²，HailoRT INT8 HEF | 硬件 106.75 FPS（`hailortcli run`，硬件时延 8.47 ms）；应用层 91.49 FPS（P50 10.93 ms，P95 13.19 ms） | 不节流 46.14 FPS | P50 11.61 / P95 14.99 / P99 16.63 ms |

条件：输入是 290 张验证图按 640×640 / 10 FPS 拼成的合成视频，帧间没有时间连续性。Orin 检测器数字是 60 张预解码帧上 500 次 `detect()` 调用，含 letterbox、execute 与 CPU NMS，其中 engine 执行约 5.0~5.6 ms（约 178~198 FPS）。不节流时 capture→coil P50 升到 35.90 ms（J4012）/ 41.3 ms（J3011），多出的约 26~30 ms 是深度为 2 的队列排队。Hailo 应用层数字在裸机上测得，未走容器，RSS 约 126 MB。

| 多路档位 | 路数 | 每路 FPS | 丢帧 | P95 时延 |
|---|---:|---:|---:|---:|
| 稳定 | 8 | 9.989 | 0.02% | 72.3 ms |
| 下降 | 12 | 9.306 | 6.83% | 104.0 ms |

多路：reComputer J40 系列，每路 640² / 10 FPS，每档跑 5 分钟。24 路为失败档：每路 4.593 FPS、丢帧 53.95%，进程不崩溃，但一半以上的输入被静默丢弃，对应的工件不会被检测。

复现：`solutions/edge_inspection_surface/evaluation/runs/2026-09-05-m2-orin/results.md`（Orin）、`evaluation/runs/2026-09-06-rpi-hailo/results.md`（Hailo-8）

### 检测精度

| 指标 | 数值 | 条件 |
|---|---:|---|
| mAP50，reComputer J40 系列，TensorRT FP16 | **0.7577** | 290 张验证图 / 706 个框，score 0.01 单次推理 |
| 部署阈值 0.35 下的精确率 / 召回 | **P 0.7652 / R 0.6969** | 同一次推理后置过滤。TP 492 / FP 151 / FN 214；290 帧里有 7 帧完全没有输出 |
| 阈值 0.6 下的召回 | 0.5807 | FN 214 → 296，整帧漏检 7 → 39（13.4%）；精确率升到 0.865 |
| 阈值 0.9 下的召回 | 0.0241 | 290 帧里有 273 帧什么都不输出（94%）；crazing 与 rolled-in scale 召回为 0 |
| TensorRT FP16 与 CPU onnxruntime 逐框比对 | mAP50 差 0.0003 | 643 对匹配，平均 IoU 0.9972（最低 0.8311），平均分数差 0.0011；没有一帧的判定改变 |
| mAP50，reComputer R2000 系列 + Hailo-8，INT8 HEF | **0.7091** | 同一批 290 张图；CPU 参考 0.7574，差 −0.0483 |
| Hailo 与 CPU 参考的框匹配率 | 86.66% | IoU ≥ 0.5 时 684 个框匹配上 523 个 |
| mAP50，Hailo Dataflow Compiler 模拟器，INT8 level-1（下发版本） | 0.7266 | 20 张验证图 / 45 个框，同子集 CPU 0.7228；不与 290 张图的行直接比较 |

数据集：NEU6（NEU-DET 转存副本，许可见文末），按来源分组 70/15/15 划分，同一条钢带的相邻帧不跨划分。阈值行是同一次推理的后置过滤，不是独立测试。

同一次推理的逐类 AP50：

| 类别 | 标注框数 | AP50 | 0.35 下的召回 |
|---|---:|---:|---:|
| scratches | 95 | 0.9685 | 0.9263 |
| pitted_surface | 70 | 0.9301 | 0.8857 |
| patches | 122 | 0.9065 | 0.8689 |
| inclusion | 184 | 0.7658 | 0.6902 |
| rolled-in_scale | 104 | 0.6149 | 0.5481 |
| crazing | 131 | 0.3603 | 0.3969 |

复现：`solutions/edge_inspection_surface/evaluation/runs/`

### 检测器路线对比

| 检测器 | mAP50 | 冻结 0.35 下的 P / R | 整帧漏检 |
|---|---:|---|---:|
| YOLOX-Tiny（默认） | 0.7574 | 0.7632 / 0.6983 | 7/290 |
| D-FINE-S | 0.7499 | 0.4956 / 0.8017 | **0/290** |
| RT-DETRv2-S | 0.7317 | 0.4575 / 0.7847 | 1/290 |

条件：CPU onnxruntime 参考，不是设备指标；同一批 290 张验证图、640×640 静态 batch-1 输入、每条路线一个种子。0.35 按 YOLOX 的 `obj × cls` 分数分布标定，DETR 分数分布不同，所以 P/R 失衡；按精确率对齐（P ≈ 0.81–0.87）后，D-FINE 召回比 YOLOX 高 2–7 个点，整帧漏检从 38 降到 20。

复现：`solutions/edge_inspection_surface/evaluation/runs/`

### 可选异常模块（EfficientAD-S）

| 指标 | 数值 | 条件 |
|---|---:|---|
| 像素级 AUROC | **0.8752** | DeepPCB `pcb` 的 OK/异常划分：205 张 OK val + 213 张 OK test + 213 张缺陷 test |
| 像素级 AUPRO（FPR ≤ 0.30） | 0.6494 | 同一次运行，1177 个连通缺陷区域 |
| 图像级 AUROC | **0.5201** | 同一次运行，0.5 即随机 |
| 未见缺陷类别的召回（留一类，像素/区域级） | 0.225 – 0.955 | 逐类差异很大（open 0.955，spur 0.225） |
| 双路时延开销（检测器 + EfficientAD，CPU 参考） | 每帧 P95 +139 ms | queue=2、500 ms 超时（随包默认值）；120/120 帧成功合流 |

像素/区域级打分可用，图像级不可用：十二种把热图压成单一分数的做法，图像 AUROC 都在 0.495–0.530。上表的 OK 集（扫描模板）与缺陷集（实物照片）不同源。

复现：`solutions/edge_inspection_surface/evaluation/runs/`

### 部署占用

| 项目 | 数值 | 条件 |
|---|---|---|
| 设备上构建 TensorRT engine | 291 s | reComputer J40 系列，JetPack 6.2，TensorRT 10.3，YOLOX-Tiny 640² FP16，静态形状 |
| Jetson 镜像 | 375 MB | 主机的 TensorRT 与 CUDA 挂载进容器，不打进镜像 |
| reComputer R2000 系列新增占用 | 约 452 MB | 443 MB 运行时镜像 + 8.9 MB HEF + 配置 |

### 运行时与关键参数

| 设备 | 模型 | 精度 | 运行时 | 模型怎么到设备上 |
|---|---|---|---|---|
| reComputer J30 / J40 系列 | YOLOX-Tiny 640²（可选 D-FINE-S、RT-DETRv2-S） | FP16 | TensorRT 10.3 | 首次部署在设备上构建 engine（实测 291 s），与 GPU 架构、TensorRT 版本绑定，不单独分发 |
| reComputer R2000 系列 + Hailo-8 | YOLOX-Tiny 640² | INT8 | HailoRT 4.21.0 | HEF 用 Dataflow Compiler 3.31.0 在设备外按 `optimization_level=1` 编译，部署时下载 |

D-FINE-S 与 RT-DETRv2-S 只在 Jetson 上可用：Hailo Dataflow Compiler 3.31.0 不支持它们的可变形注意力算子（`GridSample`、`GatherElements`、`TopK`）。

- `min_score`：部署值 **0.35**，部署步骤给 0.25 / 0.35 / 0.45 三档
- `min_defects`：默认 1，检测数达到它即判 NG
- `anomaly.enabled`：默认 `false`；`anomaly_score` 是单独的 MQTT 字段，不并进顶层 `verdict`

### 已知退化

- 换了光照，上面的数据不适用：模型只在一个数据集的光照下训练和评测过。
- crazing 在三种结构上 AP50 都是 0.30–0.36（YOLOX 0.360、D-FINE 0.302、RT-DETRv2 0.310），调阈值和换检测头都不改变；主要缺陷是 crazing 的产线要用自己的图像重训。
- INT8 在 reComputer R2000 系列上 mAP50 掉 0.0483，损失最大的也是最弱的两类（crazing AP50 0.3873，rolled-in_scale 0.4483）。
- 路数上限在推理循环：从 12 路起总吞吐停在 110–112 FPS，加速器上下文不是线程安全的，推理串行执行，再加算力也不增加路数。
- 多路共用一块 Modbus 寄存器区，接多路时最后一次判定生效；逐路结果从 MQTT 取。
- 异常模块的图像级分数接近随机；启用 `anomaly.enabled` 之前，用实际质检相机采集自己的 OK 样本图，并在其上重新标定 `anomaly.threshold`。

### 下一步

- 检测器路线对比补到每条路线三个种子，确认按精确率对齐后 D-FINE-S 的召回优势。

## 数据与素材出处 {#data-and-asset-sources}

- **NEU-DET（东北大学表面缺陷数据库），经 Roboflow 转存副本** —— 随包基准检测器的训练与验证数据，也是上文所有精度数字的来源。预置模型权重托管于官方 CDN，供参考设计评估与流程跑通使用。实际商业投产建议基于产线自有缺陷图像重新标定或训练模型，以保证目标工件与光照环境下的识别可靠性。
- **DeepPCB** —— [github.com/tangsanli5201/DeepPCB](https://github.com/tangsanli5201/DeepPCB)，MIT 许可。只被可选的无监督异常路线使用，与 NEU-DET 无关。MIT 允许再分发与商用，要求版权声明随副本与衍生作品一起传递。
- **YOLOX** —— [github.com/Megvii-BaseDetection/YOLOX](https://github.com/Megvii-BaseDetection/YOLOX)，Apache-2.0。默认检测骨干，选它而不选 Ultralytics 是为了避开 AGPL 条款。本方案任何位置都不使用 Ultralytics 的代码或权重。
- **D-FINE** —— [github.com/Peterande/D-FINE](https://github.com/Peterande/D-FINE)，Apache-2.0；**RT-DETRv2** —— [github.com/lyuwenyu/RT-DETR](https://github.com/lyuwenyu/RT-DETR)，Apache-2.0。两条可选检测器路线，只从各自的 COCO 许可检查点微调；不下载也不分发 Objects365 训练的权重，上游自己声明那部分许可未确认。许可与 commit 锁定见 `tracks/detector/PROVENANCE.md`。
- **anomalib EfficientAD-S** —— Apache-2.0，含其预训练 teacher 权重（`tracks/anomaly/PROVENANCE.md`，anomalib `lib/v2.6.0`）。
- **架构示意图** —— 依据本包的设备目录与输出接口绘制，不含任何数据集内容。

运行时代码是 Apache-2.0。基准权重用于评估与流程验证，投产建议以实际产线数据训练。
