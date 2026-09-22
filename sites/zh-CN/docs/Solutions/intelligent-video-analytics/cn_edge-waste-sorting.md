---
description: 端侧投放点垃圾分类——一次触发拍一张图，给出八个物料类别与中国生活垃圾四分类，经 MQTT 发出，并用 GPIO 回调驱动翻盖。含硬件构成、部署轮廓、输出契约与完整实测边界。
title: 端侧垃圾分类方案：物料类别、中国四分类与 MQTT 输出
keywords:
  - 垃圾分类
  - 端侧 AI 垃圾识别
  - 物料识别 MQTT
  - 生活垃圾四分类
  - 智能垃圾桶
  - EfficientNet-Lite0
  - SigLIP2 开放词汇
  - reComputer
  - Jetson Orin
  - Hailo-8
  - RK3588
  - INT8 量化
image: https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg
slug: /solutions/edge-waste-sorting
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[使用须知]
这是一个 **demo 包，也不是合规或监管用的分类系统**。中国四分类映射是本项目维护的一张表，不是主管部门的认定结果，各城市口径本就有差异——这里的任何输出都不应作为收费、处罚或合规判定的唯一依据。**本包在目标硬件上还没有跑过**：所有精度数字来自 Apple M4 CPU 上的 onnxruntime；Hailo-8 的数字来自 Dataflow Compiler emulator，不是 Hailo-8 芯片；唯一的真机实测是一块 RK3588 开发板上的运行时一致性，而这块板在本包里没有部署套餐。**没有任何套餐带 `verified: [hardware]`。**
:::

## 这套方案是干什么的

一次触发——按钮、HTTP 调用，或画面里的移动——让设备拍**一张图**，把图里的物品分到**八个物料类别**之一，由这个类别查表得到**中国生活垃圾四分类**，然后发一条 MQTT 消息。同时一个异步回调收到四分类结果，翻盖、继电器或分道指示灯可以据此动作。

- **一个头出两层答案。** 模型预测 paper、cardboard、glass、metal、plastic、textile、organic、residual 八类。四分类（可回收物 / 厨余垃圾 / 有害垃圾 / 其他垃圾）是**建在八类 argmax 上面的一张查表，不是第二个头**，所以适配某地口径是改表而不是重训。
- **触发即拍，不是视频流。** 按钮、HTTP 或移动侦测，800 ms 去抖；前一次还没完成时到达的触发会被合并而不是排队。也有连续模式，限速运行，且要连续三帧 top-1 相同才发布。
- **契约是被检查的，不只是写在文档里。** 每条 payload 发布前都过一遍事件 schema 校验，包括 JSON Schema 表达不了的两条：`category` 必须等于 `top3[0]`，`confidence` 必须等于 `top3[0].confidence`。不合格的计数并丢弃。
- **一条可选的开放词汇 track。** SigLIP 2 视觉塔对常量文本原型打分，部署时用 `model.track: open_vocab` 选择。它不重训就能加类别，同一份图像嵌入既能用中文也能用英文回答，还能给出"这不在我的词表里"的分数。
- **不绑引脚的执行机构接口。** 运行时回调时带上一个类别；这个类别送到哪里是集成工作，正因如此同一份构建才能跑在排针不同的板子上。

图片字节不出设备——payload 里只有路径或对象存储 URI。

- 打包源与部署指南：[sensecraft-solutions / solutions/edge_waste_sorting](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting)
- 选配置与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/edge_waste_sorting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>八类 top-1 0.8877，四分类 top-1 0.9500</h3>
                <p>口径是去重后的 7417 张验证集，Apple M4 CPU 上的 onnxruntime。逐项拆解见附录。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>基线是 EfficientNet-Lite0，不是 MobileNetV3-Small</h3>
                <p>原基线在三条试过的边缘链路上 INT8 全部塌缩；Lite0 不塌缩，而且在同一份 split 上精度还略高。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>一图一件</h3>
                <p>这条链上没有检测器。一帧里两件物品只会得到一个答案，且它描述的是哪一件未定义。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>本页数字来自 RK3588 与台架 Hailo-8 模块</h3>
                <p>Jetson 套餐是唯一有模型文件的，但没有在任何一台 Jetson 上构建过 engine；Hailo 套餐的模型标记为待编译。</p>
            </div>
        </li>
    </ul>
</div>

### 设备上跑起来是什么样

下面是 reCamera PoE 上装完 `waste-sorting` 应用包之后，摄像头看到的投放区取景。这一轮相机前没有放任何物品——它给的是取景参考，不是分类结果。

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="reCamera PoE 俯视投放区的取景，本轮相机前未放物品"/>
</div>

分类结果不进画面，直接进 MQTT。下面是订阅 `waste/recamera-cvi/results` 抓到的连续事件：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="订阅 waste/recamera-cvi/results 抓到的连续分类事件，每条含八类结果、四分类映射与推理耗时"/>
</div>

<!-- TODO 图：投放口实景照（相机装在投放区上方的现场安装照）——需现场拍 -->
<!-- TODO 图：本地面板 8080 的 MJPEG 预览与 top3 列表截图——需在已部署设备上截 -->

### 随包演示素材是什么

本包 gallery 里唯一的素材是为本方案绘制的数据通路示意图。**包里任何位置都没有提交数据集派生的图像**——两个数据集都允许再分发，但上游仓库把所有数据集派生图像排除在版本控制之外，本包沿用同一条规则。`assets/models/` 只放校验和清单；`SHA256SUMS.hef` 是刻意留空的，因为包里不随附 HEF。

## 需要哪些硬件

投放点上就三样东西：发出触发的东西、一台相机、一台主机。

**① 触发** —— 接在主机上的按钮、8080 端口上的 `POST /trigger`，或画面里的移动。三者共用同一个 800 ms 去抖，产生同样的事件，靠 payload 里的 `trigger` 字段区分。

**② 相机** —— 任意俯视投放区的 USB、RTSP 或文件源。这套设计约束的是取景而不是相机型号：单件物品要在画面里占到有意义的比例，而且画面里只能有一件。物品在画面里太小会拉低分类效果，本页所有数字都不是在这种取景下测的。

**③ 分类主机** —— 它决定你能用哪几条模型路径，也决定大部分成本。

| 分类主机 | 加速器 | 当前下发的分类器 | 开放词汇 track | 什么时候选它 |
|---|---|---|---|---|
| reComputer J3011（Jetson Orin Nano 8GB） | Orin GPU | EfficientNet-Lite0 224²，TensorRT FP16 | 没有为这个模组估过资源 | 单个投放点、只跑基线分类器，有模型文件里最省的 Seeed 主机 |
| reComputer J4012（Jetson Orin NX 16GB） | Orin GPU | EfficientNet-Lite0 224²，TensorRT FP16 | 提供——唯一提供它的设备类别 | 预计以后要在不重训的前提下加物品类别 |
| reComputer R2000 系列（Hailo-8） | Hailo-8 | EfficientNet-Lite0 224²，INT8 HEF | 无 | 手上要把 Hailo-8 硬件准备成能跑这个负载；该套餐标记为 `HEF pending` |

两款 reComputer 都有无风扇工业机箱版本（reComputer Industrial J3011 / J4012），模组与运行时相同，可装控制柜或户外机箱。

**本页没有任何一个数字取自上述任何一块板。** Jetson 两行描述的是随包交付了什么，不是实测了什么。开放词汇那一列出自本包设备目录里的资源说明：SigLIP 2 视觉塔是 371 MB 的 ONNX，CPU 上单图 p50 66.93 ms，必须有加速器，而 Orin Nano 8GB 模组没有为它估过资源。

**④ 其余** —— 一个 MQTT 消费方（包里自带本地 broker 监听 1883）；如果方案里有翻盖或分道指示灯，还需要驱动硬件加上 GPIO 回调的集成代码——它出厂时不绑任何引脚。主链路上没有任何一步需要外网。

## 现场怎么部署

分两步：先把取景与触发方式定下来，再装软件。难度标为 **intermediate**，首次部署约 **35 分钟**。

### 一、定取景与触发方式

:::tip[一图一件，而且要够大]
这条链上没有检测器。一帧里两件物品只会得到一个答案，且它描述的是哪一件未定义；物品在画面里占比太小时分类会变差——本页所有实测都不是在这种取景下做的。相机俯视投放区安装，让单件物品在画面里占到有意义的比例，并在部署前确定触发方式是按钮、HTTP 还是移动侦测。
:::

### 二、装软件

逐设备的步骤在可部署方案页，那里按现场条件选完配置后可以直接下载对应的应用包。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

两个套餐的轮廓相同：

1. **选套餐与主机。** `摄像头 + reComputer J30 / J40（Orin）` 或 `摄像头 + reComputer R2000 系列（Hailo-8）`。
2. **部署垃圾分类运行时**（必需）。Orin 这条路会在部署过程中于设备上构建 TensorRT engine——engine 绑定具体 GPU 架构与 TensorRT 版本，无法预编分发。Hailo 这条路的部署步骤会检查三道 Hailo ABI 关卡，然后**停在缺失的模型文件上**：这个套餐是把板子准备好，不是今天就交付一个能跑的分类器。
3. **看实时分类**（可选）。8080 端口上的本地面板有 MJPEG 预览、健康计数与最近结果的 top3——在接任何东西之前，先在这里确认取景。
4. **接触发并确认一次分类**（必需）。一次按钮、HTTP 调用或移动事件必须在 `waste/<流编号>/results` 上恰好产生一条 MQTT 消息，且它的 `category` 与 `confidence` 与 `top3[0]` 一致。
5. **切换到开放词汇 track**（可选，仅 Orin）——下文另有说明。

## 怎么接入自有系统

数据从分类主机出来的通道有两个接口加一个进程内回调，另有一条可选的 MQTT 旁路。全部由主机自己提供。

- **运营或记录系统** —— 订阅 1883 端口上的 `waste/<流编号>/results`。一次分类一条 JSON，不逐类别发。
- **自助终端界面、PLC 网关或测试脚本** —— 8080 端口上的 `POST /trigger` 触发一次拍照分类；`/events` 返回最近结果与它们的 top3。
- **翻盖、继电器或分道指示灯** —— 异步 GPIO 回调带上四分类结果。它不绑引脚，绑定代码属于集成工作。

### 完整的接口与 payload

| 类型 | 位置 | 内容 | 备注 |
|---|---|---|---|
| `mqtt` | 1883，`waste/<流编号>/results` | `type`、`version`、`taxonomy_version`、`device`、`stream_id`、`frame_id`、`timestamp`、`trigger`、`inference_time_ms`、`pipeline_ms`、`category`（`class_id`、`class_name`、`china_category`、`china_category_zh`）、`confidence`、`top3[]`、`image_ref`、`model`（名称、backbone、输入、`onnx_sha256`、加速器） | 一次分类一条。发布前过事件 schema 校验 |
| `http` | 8080，`/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` 触发一次拍照分类（触发源记为 `http`）；MJPEG 实时画面；带推理耗时、触发与去抖计数以及 MQTT 计数的健康接口；最近结果与 top3 | 本地面板，无鉴权 |
| GPIO 回调 | 进程内 | 异步给出四分类结果 | `actuator.enabled` 默认 false。不绑引脚 |

有三处字段语义容易用错：

- **图片永远不在 payload 里。** `image_ref.kind` 只有 `none`、`local`、`object_store`。payload 里出现 base64 图片字节属于违反契约，发布前会被拒。
- **`category` 恒等于 `top3[0]`，`confidence` 恒等于 `top3[0].confidence`。** 两条都在发布前检查，不合契约的 payload 计数并丢弃，所以消费方永远不需要自己去调和这两者。

随包的 MQTT broker 允许匿名连接，那是给本地调试用的。离开工作台的部署需要换成带凭据的 broker。

## 给工程师：实现细节

### 两条 track，一套分类口径

| Track | 模型 | 输入 | 大小 | 跑在哪 |
|---|---|---|---|---|
| 基线（出货） | EfficientNet-Lite0（`m1c`），8 类头 | 224² | 13,477,056 B ONNX | 两个套餐；Orin 上 TensorRT FP16，Hailo-8 上 INT8 HEF |
| 基线（已取代） | MobileNetV3-Small（`m1b`） | 224² | 6,118,606 B ONNX | 仅作为 INT8 塌缩对照保留 |
| 开放词汇（可选） | SigLIP 2 ViT-B/16 视觉塔 + 常量文本原型 | 224² | 371,695,898 B ONNX | 仅 Orin NX 16GB，`model.track: open_vocab` |

原型库加校准报告合计约 155 KB。八类头的输出喂给四分类查表；扩展点是那张表，不是那个头。

### 基线为什么换掉，以及还没证明的部分

MobileNetV3-Small 的 INT8 图在**每一条**试过的边缘链路上都塌缩——Hailo DFC emulator 一致率 0.115、RK3576 0.10、RK3588 0.22，而同样链路的 fp16 是 0.98–1.00。ORT 训练后量化独立复现了同一塌缩，排除了某个编译器的专属 bug：这是全网络退化，不是某个算子的局部问题。

训练配方里确实存在一个具体缺陷：`AdamW(model.parameters(), weight_decay=1e-4)` 把权重衰减也施加到了 BatchNorm 的 gamma 与 bias 上，m1b checkpoint 里 34 个 `BatchNorm2d` 中有 4 个的 `running_var` / `|gamma|` 退化到 float32 非规格化数的量级，位置正是 INT8 精度悬崖出现的那几层。**但这不是已证明的根因。** EfficientNet-Lite0 用的是同样的权重衰减设置、也有同类权重离群值（max `|w|` 35.70，m1b 是 52.35，只低 32%），却不塌缩——这么小的降幅本身解释不了一致率从 0.115 到 0.89+ 的摆动。更可能的读法是：SE 门控与 hard-swish 在结构上对 INT8 更敏感，权重衰减缺陷是放大这一敏感性的背景因素，而不是直接成因。两种读法都还没有做消融实验去确认。

换基线的代价只在 CPU 上：推理时间从 1.886 ms 涨到 16.796 ms，约 9 倍，因为 Lite0 的 FLOPs 比 MobileNetV3-Small 高。**在真正测过的 NPU 上这个代价不成立**——见下面的 RK3588 表，Lite0 INT8 是 3.803 ms p50，m1b 是 4.70 ms。

### 触发、去抖与连续模式

一次触发一次分类。800 ms 去抖会把前一次还在执行时到达的触发合并而不是排队，所以快速按两下得到的是一个答案而不是两个。连续模式限速运行，且要**连续三帧 top-1 相同**才发布；触发模式没有这层平滑，一次拍摄就是一个答案。

### 开放词汇 track：两个决定用法的发现

- **走分层路径，不要直接预测四分类。** 英文八类预测再映射到四分类是 0.9393；中文 prompt 直接预测四分类只有 0.8478。"可回收物"不是一个视觉概念，"玻璃瓶"才是。
- **`residual` 是这套设置里最弱的一环。** 它的留一法 AUROC 是 0.5795，接近随机：把"其他垃圾"从词表里去掉，总有某个材质词以高置信度接住这些物品。它是一个兜底定义，不是视觉概念。

### 上面这些数字的适用范围

- **基线与开放词汇的精度与 CPU 时延**——onnxruntime 1.25.1，Apple M4 CPU，batch 1。
- **面向 Hailo-8 的基线 INT8**——用 DFC 3.31.0 / HailoRT 4.21.0、`--hw-arch hailo8` 构建。出货的 `efficientnet_lite0_waste8_u8.hef` 以 `optimization_level=2` 量化（量化感知蒸馏微调 8 轮，保留 bias correction），用 2048 张类别均衡的 uint8 训练裁剪，编译需要 DFC 容器内可见 GPU；它在一块 Hailo-8 上、7417 张验证全集上实测。同一张图在 `optimization_level=1` 下比 fp32 低 2.40 个百分点，不出货。200 张验证图上的模拟器对比（一致率 0.890）来自更早的 `efficientnet_lite0_waste8.hef` 打包版本。
- **开放词汇 SigLIP 2 视觉塔**——`hailo parser` 能完整跑通，但 `hailo optimize`（INT8 PTQ，256 张校准图，`optimization_level=1`）在 `ne_activation_mul_and_add78` 层失败，因此它没有 HEF。
- **RK3588 上的基线 fp16 与 INT8**——一块 RK3588 开发板，librknnrt 2.3.2，50 张验证图。该板没有部署包。
- **RK3576 上的基线**——一块 RK3576 开发板，仅 m1b；Lite0 没有为 RK3576 转换过。
- **现场精度**——两个数据集都是单件物品照片（TrashNet 白色背板，GC3 物体偏心且常被遮挡），请采一批自己投放点的数据重测。

## 附录：实测数据 {#measured-data}

只想部署可以跳过这一节。**这里大多数数字是 Apple M4 CPU 上的 onnxruntime**，每张表都写明数字的来源。两个分类器是在**同一份 split**、同一批图片、同样 224² 输入、同样后处理、同一台机器上测的。

### 基线分类器——EfficientNet-Lite0（m1c，出货）

| 指标 | 数值 | 口径 |
|---|---:|---|
| 物料 top-1（8 类） | **0.8877** | val，7417 张；onnxruntime 1.25.1 CPU；ONNX `e9f9e847…`，13,477,056 B |
| 物料 top-5 | 0.9833 | 同上 |
| 中国四分类 top-1 | **0.9500** | 同上；在八类 argmax 上查表 |
| macro-F1（7 个有样本的类） | 0.8511 | 排除 `textile`——零样本 |
| 物料 top-1，留出 test | 0.8802 | test，7290 张，与 m1b 同一份 split |
| 单图推理时延，CPU | mean 16.796 ms / p50 14.724 ms / p95 28.718 ms | 仅 `session.run`，Apple M4 CPU，batch 1 |
| 置信度低于 0.5 的图 | 318 张（4.3%） | val |
| ORT PTQ INT8 与 fp32 一致率 | 0.965 | 200 张 val 图，per-channel + MinMax——不是塌缩 |

运行记录：`evaluation/runs/2026-09-06-m1c-cpu`、`evaluation/runs/2026-09-06-m1c-int8-diag-quick`。

**两个 top-1 要一起报。** 四分类（0.9500）比物料（0.8877）高很多，是因为 glass↔metal↔plastic 之间的混淆被吸收了——三者都映射到可回收物。只报四分类会高估模型对材质的判别力。

### MobileNetV3-Small（m1b）——已取代，保留作 INT8 塌缩对照

同一份 split、同一批图、同一台 CPU。

| 指标 | 数值 | 口径 |
|---|---:|---|
| 物料 top-1（8 类） | 0.8792 | val，7417 张；ONNX `51c7c0ed…` |
| 物料 top-5 | 0.9854 | 同上 |
| 中国四分类 top-1 | 0.9519 | 同上 |
| macro-F1（7 个有样本的类） | 0.8292 | 排除 `textile` |
| 物料 top-1，留出 test | 0.8807 | test，7290 张 |
| 单图推理时延，CPU | mean 1.886 ms / p50 1.769 ms / p95 2.276 ms | 仅 `session.run`，Apple M4 CPU，batch 1 |
| 置信度低于 0.5 的图 | 335 张（4.5%） | val |
| **INT8 塌缩——Hailo-8 emulator** | top-1 0.15，一致率 0.115 | 200 张 val 图；同一批图的 fp16 一致率是 1.000 |
| **INT8 塌缩——RK3576（真机）** | 与 CPU golden 一致率 0.10 | 同一设备上 fp16 一致率 0.98 |
| **INT8 塌缩——RK3588（真机）** | 与 CPU golden 一致率 0.22 | 同一设备上 fp16 一致率 0.98 |

运行记录：`evaluation/runs/2026-09-06-m1b-cpu`、`2026-09-06-m1b-hef`、`2026-09-06-rk3576-cat`、`2026-09-06-rk3588-radxa`。

### 开放词汇 track——SigLIP 2 ViT-B/16

同一份 split、同一批图、同样后处理、同一台机器。

| 指标 | 数值 | 口径 |
|---|---:|---|
| 物料 top-1（8 类） | 0.8501 | val，7417 张；英文 prompt 集 `waste8-en/v1`，模板 `t02`，16-shot α=0.8，temperature 0.0075 |
| 物料 top-5 | 0.9987 | 同上 |
| 中国四分类 top-1 | 0.9393 | 同上；分层路径（先八类再映射） |
| macro-F1（7 类） | 0.7460 | 同上 |
| ECE（15 bins） | 0.0221 | 同上 |
| 开集 AUROC | 0.7538 | 7 个有样本类别的均值，留一类法，score = `1 - max softmax` |
| 中英一致率（同一张图） | 物料 0.8698 / 四分类 0.9143 | 一份视觉嵌入、三套原型库——这个数里没有预处理或采样噪声 |
| 物料 top-1，留出 test | 0.8620 | test，7290 张；模板 / α / temperature 从未在它上面搜过 |
| 单图推理时延 | p50 66.93 ms / p95 91.62 ms | Apple M4 CPU，batch 1，仅视觉塔 |

运行记录：`evaluation/runs/2026-09-05-w1-cpu`。

### 基线 vs 开放词汇，同一份 split

这张对比里的"基线"一列是 **MobileNetV3-Small**，即做这次对比时的基线，不是今天出货的 EfficientNet-Lite0。Lite0 在这份 split 上略高（val 0.8877 对 0.8792），所以精度差距不会缩小；缩小的是时延倍数——对 MobileNetV3-Small 的 CPU p50 是 40 倍，对 Lite0 自己约 14.7 ms 的 CPU p50 则是 4–5 倍。**基线换掉之后，两条 track 没有再互相复测过。**

| 指标 | 基线（MobileNetV3-Small） | 开放词汇（SigLIP2-B/16） |
|---|---:|---:|
| 物料 top-1，val | **0.8792** | 0.8501 |
| 物料 top-1，test | **0.8807** | 0.8620 |
| 中国四分类 top-1，val | **0.9519** | 0.9393 |
| macro-F1，val | **0.8292** | 0.7460 |
| ECE（15 bins），val | 0.0308 | **0.0221** |
| 开集 AUROC | 做不到——闭集头不重训就无法去掉一个类 | **0.7538** |
| 中英一致率 | 没有文本侧 | **0.8698 / 0.9143** |
| 零样本新类别 | 需要重训 | **改 prompt** |
| CPU p50 时延 | **1.57 ms** | 66.93 ms |

两列取自同一批 val/test 文件、同样的 224² 输入、同一条 softmax / top-k / 映射代码路径。基线一列是为这次对比在这份 split 上重算的，它的 val top-1 与独立的 m1b 报告逐位一致。

### Hailo-8——在 DFC emulator 上编译并核实 INT8，**没有 Hailo-8 真机**

| 路径 | 状态 |
|---|---|
| 基线 EfficientNet-Lite0（m1c） → HEF | **一次编译成功，不需要任何修复。** `hailo optimize` 与 `compiler` 第一次尝试就都 exit 0——Lite0 没有 SE 分支，从架构上就不会撞上 m1b 需要 model-script 修复的 `avgpool` shift 问题。200 张 val 图上（DFC 3.31.0 / HailoRT 4.21.0 emulator）：INT8 与 CPU/native 的 top-1 一致率 **0.890**，对真值准确率 **0.755**（native/CPU 同批图是 0.795）——掉 4 个百分点，不是塌缩。与 CPU 余弦相似度 mean 0.948、min 0.441。**全部来自编译机上的 x86 emulator，没有用过 Hailo-8 PCIe 卡。** `evaluation/runs/2026-09-06-m1c-hef` |
| 基线 MobileNetV3-Small（m1b） → HEF | 编译成功，但 INT8 塌缩：emulator 一致率 0.115，准确率 0.150——接近 7 类随机基线。因此被取代 |
| SigLIP 2 视觉塔 → HEF | `hailo parser` 端到端通过，无 unsupported op。`hailo optimize`（INT8 PTQ，256 张校准图，optimization_level=1）**失败**，在 `ne_activation_mul_and_add78` 层报 `NegativeSlopeExponentNonFixable`——"Desired shift is 16.0, but op has only 8 data bits"。没有 optimized HAR，没跑 compiler，没有 HEF |

**「0.89 一致率」支持什么、不支持什么。** 支持：EfficientNet-Lite0 在同一条编译链路、同一份校准集上，INT8 量化没有出现 MobileNetV3-Small 那种模式塌缩，且 `hailo optimize` 不需要任何 SE 分支绕过修复。**不支持**：这份 HEF 能在真实 Hailo-8 上正确分类垃圾——板级时延、发热与精度请在自己的设备上实测。校准集只有 256 张，低于 DFC 文档通常建议的约 1024 张门槛，且是原样复用 m1b 轮次的抽样，没有为 Lite0 重新采样。

解析阶段的数值核对确实通过了——DFC native emulator 与 CPU onnxruntime 的余弦相似度是 1.0，20 张对比图的 top-1 完全一致——所以 ONNX→HAR 的转换没有引入误差。这是没有 Hailo-8 也能回答的那一半问题；INT8 那一半回答不了。同样地，这些结果也不支持"SigLIP2 跑不了 Hailo-8"这个结论：只在一个 optimization level、一份校准集上尝试过一次，错误信息本身给出了三种可能成因，其中只有一种（校准集归一化）被检查并排除。

### RK3588 开发板——真机实测，基线 INT8 可用

设备侧实测，不是 emulator。在 `wsl2-local` 上用 rknn-toolkit2 2.3.2 转换，在一块 RK3588 开发板上跑，librknnrt **2.3.2**（软链名字写的是 2.3.0，以库内版本为准），50 张 val 图，`core_mask=AUTO`，per-channel 量化。

| 模型 / 精度 | 时延 p50 / p95（mean） | 与 CPU golden 一致率 | 对真值准确率 | 口径 |
|---|---|---|---|---|
| **EfficientNet-Lite0（m1c），fp16** | 7.906 ms / 8.129 ms（7.041 ms） | 1.00 | 0.78 | ONNX sha `e9f9e847…`，50 张 val 图 |
| EfficientNet-Lite0（m1c），int8 calib64+normal | 3.780 ms / 3.984 ms（3.807 ms） | 0.90 | 0.72 | 63 张校准，`normal` 算法 |
| EfficientNet-Lite0（m1c），int8 calib64+mmse | 3.785 ms / 3.981 ms（3.808 ms） | 0.98 | 0.78 | 63 张校准，`mmse` 算法 |
| EfficientNet-Lite0（m1c），int8 calib256+normal | 3.766 ms / 3.920 ms（3.500 ms） | 0.90 | 0.72 | 252 张校准，`normal` 算法 |
| **EfficientNet-Lite0（m1c），int8 calib256+mmse**——推荐 | 3.803 ms / 4.003 ms（3.834 ms） | **1.00** | **0.78** | 252 张校准，`mmse`；一致率与准确率都与 fp16 持平，且**快 52%** |
| MobileNetV3-Small（m1b，已取代），fp16 | 4.44 ms / 6.32 ms | 0.98 | — | ONNX sha `aa181dd5…`，仅作对照 |
| MobileNetV3-Small（m1b，已取代），int8 | 4.70 ms / 11.04 ms | **0.22——塌缩** | — | 64 张校准，仅作对照 |

**m1b 那两行只能当运行时一致性看，不能当精度看。** 那一轮用的 MobileNetV3 ONNX sha256 是 `aa181dd5…`，**不是**本页所有 m1b 精度数字所指的那个文件（`51c7c0ed…`）。两者不能合并成一个精度结论。

**推荐配置：`calib256+mmse`。** 四个 Lite0 INT8 变体全部落在 0.90–1.00 的一致率带里，没有一个塌缩。`mmse` 的转换耗时是 `normal` 的 40–90 倍（256 张校准时 17.3 分钟对 11.5 秒）——一次性的转换成本，不是运行时成本。m1b 的 int8 比它自己的 fp16 还慢（4.70 ms 对 4.44 ms），说明它的执行从未进入 INT8 快路径。运行记录：`evaluation/runs/2026-09-06-m1c-rk3588-radxa`、`2026-09-06-rk3588-radxa`。

同一设备上的 SigLIP 2 视觉塔，不受 m1c 改动影响：

| 模型 / 精度 | 时延 p50 / p95 | 与 CPU golden 一致性 | 口径 |
|---|---|---|---|
| SigLIP 2 视觉塔，fp16 | 169.4 ms / 170.5 ms | 嵌入余弦 mean **0.999617**，min 0.998841 | ONNX sha `6f664af0…`，191 MB `.rknn` |

### RK3576 开发板——真机实测，只有 m1b

| 模型 / 精度 | 时延 p50 / p95 | 与 CPU golden 一致率 | 口径 |
|---|---|---|---|
| MobileNetV3-Small（m1b），fp16 | 9.49 ms / 12.49 ms | top-1 **98%**（49/50） | `evaluation/runs/2026-09-06-rk3576-cat` |
| MobileNetV3-Small（m1b），int8 | 4.62 ms / 6.68 ms | top-1 **10%**（5/50）——不可用，比随机还差 | 64 张校准图取自 train |
| SigLIP 2 视觉塔，fp16 | 152.51 ms / 176.59 ms | 嵌入余弦 mean **0.99965**，min 0.99900 | 同一轮 |

**EfficientNet-Lite0 没有在 RK3576 上转换或运行过。** 不要假设 RK3588 的 INT8 结果可以照搬：RK3576 与 RK3588 是不同代的 NPU，在同一个 MobileNetV3-Small 图上的表现就不同（10% 对 22% 一致率），任何一个方向的断言都是猜测。

### 平台支持

| 平台 | 状态 |
|---|---|
| Jetson Orin（TensorRT） | 部署包已交付，基线已换成 EfficientNet-Lite0 ONNX；**从未在任何 Jetson 上构建过 engine** |
| reComputer R2000 系列 | 部署包已交付；基线 HEF 只在 DFC emulator 上编译并核实 INT8（一致率 0.890）——**没有 Hailo-8 真机跑过**。SigLIP2 视觉塔的 INT8 量化仍然失败 |
| RK3588 | **真机上验证了 fp16 与 INT8 的推理一致性（m1c）；没有部署包**——没有 compose 文件、没有镜像、没有套餐。转换与运行时都能跑，打包不存在 |
| RK3576 | 真机上验证了 fp16 与 INT8 的推理一致性——**只有 m1b，没有用当前基线复测**；没有部署包 |
| CPU（onnxruntime） | 本页所有精度数字 |

### 部署占用

| 项目 | 大小 |
|---|---|
| 基线 ONNX（`efficientnet_lite0_waste8.onnx`，m1c，当前） | 13,477,056 B |
| 基线 ONNX（`mobilenetv3s_waste8.onnx`，m1b，已取代） | 6,118,606 B |
| SigLIP 2 视觉塔 ONNX（`siglip2_vision_224.onnx`） | 371,695,898 B |
| 原型库 + 校准报告 | 合计约 155 KB |

### 什么条件下会退化，以及这些数字没覆盖什么

- **`textile` 的训练与评测样本都是零。** 两个源数据集里都没有布料 / 纺织品类别——GC3 导出包里没有这个标签，与一种广为流传的二手描述相反。第八个 logit 仍然存在、ONNX 输出仍是 `1×8`（输出形状是契约的一部分），但没有任何东西训练或测试过它，所有表在这一类上报 `n/a` 而不是 0，模型也一次都没有预测出过它。
- **`hazardous`（有害垃圾）没有任何物料类别映射过去。** 它留在枚举里是为了 schema 稳定；本次构建永远不会发出它。
- **域偏移没有测过。** 两个数据集都是单件物品的照片：TrashNet 是白色卡纸板上、日光或室内光下拍的，GC3 是检测数据集、目标偏心且常被遮挡。两者都不是真实垃圾桶——评测里没有潮湿、压扁、堆叠、逆光或部分装袋的垃圾。**没有采集过现场数据集，因此没有"真实桶里精度掉多少"这个数字。** 预期会掉，掉多少未知。
- **`organic` 在数据里占绝对多数。** 训练集 48.9%、val 47.1%，因为仅 GC3 的 `BIODEGRADABLE` 一类就占了 74090 个原始框中的 45407 个。它的召回（0.9791）远高于其他所有类（0.70–0.88），混淆矩阵显示模型把不确定的物品往它那边推。
- **`residual` 只有 20 张 val 样本。** 不应单独引用这一类的精确率——开放词汇 track 在它上面的 0.2754 精确率，既是模型的问题也是样本数的产物。
- **去重是这些数字算精度而不是泄漏的前提。** GC3 复用了 TrashNet 的原始照片。分组依据是来源批次 + 原始图像 + 感知哈希（dhash 8×8，Hamming ≤ 3），并合并成连通分量：430 组近重复合并，其中 **183 组跨两个数据集**。同组图像整体移动到同一个 split，切分时断言没有任何一组、也没有任何相同 dhash 跨越两个 split。

## 数据与素材出处

- **TrashNet** —— [github.com/garythung/trashnet](https://github.com/garythung/trashnet)，**MIT License，Copyright (c) 2017 Gary Thung**。经两处一手来源核实：仓库自身在 commit `6fa2b87` 上的 `LICENSE` 文件，以及官方 HuggingFace 数据集卡片的 `license` 字段。**记录在案的更正：** 上游项目自己的 SPEC 与调研报告都把它记成 CC BY 4.0，那是错的，没有任何一手来源标 CC BY 4.0。MIT 更宽松——它要求保留版权与许可声明，但没有相同方式共享条款。
- **Garbage Classification 3 — Material Identification（Roboflow Universe）** —— **CC BY 4.0**，导出包自带的 `README.dataset.txt` 里逐字写明。Roboflow Universe 上的项目路径是 `material-identification/garbage-classification-3`。
- **SigLIP 2** —— [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224)，revision `75de2d55…`，Apache-2.0。仅供可选的开放词汇 track 使用。
- **MobileNetV3-Small 的 ImageNet 起始权重**（torchvision）—— BSD-3-Clause。
- **上游运行时代码** —— Apache-2.0。
- **架构图** —— 依据本包自己的设备目录与输出接口为本页绘制，不含任何数据集图像。

由这些数据集派生的对外材料，须逐字使用以下署名字符串：

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**本包不提交任何数据集派生的图像。** 两个许可都允许再分发，但上游仓库把所有数据集派生图像排除在版本控制之外——`data/raw`、`data/cls`、`data/crops` 与评测叠加图都在 gitignore 里——本包沿用同一条规则。`assets/models/` 只放校验和清单。
