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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/cn/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[使用须知]
中国四分类映射是本项目维护的一张表，不是主管部门的认定，各城市标准也不同；输出不能作为收费、处罚或合规判定的唯一依据。
:::

## 这套方案是干什么的

一次触发（按钮、HTTP 调用或画面里的移动）让设备拍**一张图**，把图里的物品分到**八个物料类别**之一，由类别查表得到**中国生活垃圾四分类**，然后发一条 MQTT 消息。同时一个异步回调收到四分类结果，翻盖、继电器或分道指示灯可以据此动作。

- **一个头出两层答案。** 模型预测 paper、cardboard、glass、metal、plastic、textile、organic、residual 八类。四分类（可回收物 / 厨余垃圾 / 有害垃圾 / 其他垃圾）是在八类 argmax 上查表得到的，适配某地标准只需改表，不用重训。
- **触发即拍。** 按钮、HTTP 或移动侦测，800 ms 去抖；前一次未完成时到达的触发会被合并，不排队。另有连续模式，限速运行，连续三帧 top-1 相同才发布。
- **发布前校验 payload。** 每条 payload 发布前过一遍事件 schema 校验，另加 JSON Schema 表达不了的两条：`category` 必须等于 `top3[0]`，`confidence` 必须等于 `top3[0].confidence`。不合格的计数并丢弃。
- **可选的开放词汇 track。** SigLIP 2 视觉塔对常量文本原型打分，部署时用 `model.track: open_vocab` 选择。不重训就能加类别，同一份图像嵌入可以用中文或英文回答，并能给出「不在词表里」的分数。
- **执行机构接口不绑引脚。** 运行时回调带上一个类别，送到哪个引脚由集成代码决定，所以同一份构建能跑在排针不同的板子上。

图片字节不出设备，payload 里只有路径或对象存储 URI。

- 打包源与部署指南：[sensecraft-solutions / solutions/edge_waste_sorting](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting)
- 选配置与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/edge_waste_sorting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>设备开箱即用</h3>
                <p>装好应用包即可运行，首次部署约 35 分钟。八类 top-1 0.8877、四分类 top-1 0.9500（7417 张验证图，CPU onnxruntime 离线基准，见性能与实测数据）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>代码开源</h3>
                <p>运行时代码 Apache-2.0；训练数据 TrashNet（MIT）与 GC3（CC BY 4.0）都允许再分发。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>自有相机、系统与执行机构直接接入</h3>
                <p>USB / RTSP 相机或文件源；结果走 MQTT，`POST /trigger` 可由终端或 PLC 网关触发，GPIO 回调驱动翻盖或指示灯。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>全程本地运行</h3>
                <p>拍照、分类、查表与 MQTT broker 都在主机上，图片不出设备，主链路不需要外网。</p>
            </div>
        </li>
    </ul>
</div>

### 设备上跑起来是什么样

下面是 reCamera PoE 装完 `waste-sorting` 应用包后，摄像头看到的投放区取景。图中相机前没有放物品，只作取景参考。

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="reCamera PoE 俯视投放区的取景，相机前未放物品"/>
</div>

分类结果直接进 MQTT。下面是订阅 `waste/recamera-cvi/results` 抓到的连续事件：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="订阅 waste/recamera-cvi/results 抓到的连续分类事件，每条含八类结果、四分类映射与推理耗时"/>
</div>

<!-- TODO 图：投放口实景照（相机装在投放区上方的现场安装照）——需现场拍 -->
<!-- TODO 图：本地面板 8080 的 MJPEG 预览与 top3 列表截图——需在已部署设备上截 -->

## 需要哪些硬件

投放点上三样东西：触发源、相机、主机。

**① 触发** —— 接在主机上的按钮、8080 端口上的 `POST /trigger`，或画面里的移动。三者共用同一个 800 ms 去抖，产生同样的事件，用 payload 里的 `trigger` 字段区分。

**② 相机** —— 任意俯视投放区的 USB、RTSP 或文件源，型号不限。要求单件物品在画面里占到足够比例，且画面里只有一件。物品太小会降低分类效果，性能与实测数据里的数字都不是在这种取景下测的。

**③ 分类主机** —— 决定能用哪几条模型路径。

| 分类主机 | 加速器 | 当前下发的分类器 | 开放词汇 track | 什么时候选它 |
|---|---|---|---|---|
| reComputer J3011（Jetson Orin Nano 8GB） | Orin GPU | EfficientNet-Lite0 224²，TensorRT FP16 | 不提供 | 单个投放点、只跑基线分类器 |
| reComputer J4012（Jetson Orin NX 16GB） | Orin GPU | EfficientNet-Lite0 224²，TensorRT FP16 | 提供（唯一提供它的设备类别） | 以后要在不重训的前提下加物品类别 |
| reComputer R2000 系列（Hailo-8） | Hailo-8 | EfficientNet-Lite0 224²，INT8 HEF | 无 | 已有或要用 Hailo-8 硬件；HEF 在设备外编译，部署时下载 |

两款 reComputer 都有无风扇工业机箱版本（reComputer Industrial J3011 / J4012），模组与运行时相同，可装控制柜或户外机箱。

开放词汇一列来自设备目录里的资源说明：SigLIP 2 视觉塔是 371 MB 的 ONNX，CPU onnxruntime 离线基准单图 p50 66.93 ms，需要加速器。

**④ 其余** —— 一个 MQTT 消费方（包里自带本地 broker，监听 1883）；方案里有翻盖或分道指示灯时，还需要驱动硬件和 GPIO 回调的集成代码，出厂不绑任何引脚。主链路不需要外网。

## 现场怎么部署

先定取景与触发方式，再装软件。难度为 **intermediate**，首次部署约 **35 分钟**。

### 一、装硬件：定取景与触发方式

:::tip[一图一件，物品要够大]
这条链上没有检测器。一帧里有两件物品只会得到一个答案，对应哪一件不确定；物品在画面里占比太小时分类会变差。相机俯视投放区安装，让单件物品占到足够比例，部署前确定触发方式用按钮、HTTP 还是移动侦测。
:::

### 二、装软件

逐设备的步骤在可部署方案页，按现场条件选完配置后可以直接下载对应的应用包。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

两个套餐流程相同：

1. **选套餐与主机。** `摄像头 + reComputer J30 / J40（Orin）` 或 `摄像头 + reComputer R2000 系列（Hailo-8）`。
2. **部署垃圾分类运行时**（必需）。Orin 路径在部署时于设备上构建 TensorRT engine，engine 绑定具体 GPU 架构与 TensorRT 版本，不能预编分发。Hailo 路径的部署步骤先检查三道 Hailo ABI 关卡，再下载 HEF。
3. **看实时分类**（可选）。8080 端口的本地面板有 MJPEG 预览、健康计数与最近结果的 top3。接任何设备之前，先在这里确认取景。
4. **接触发并确认一次分类**（必需）。一次按钮、HTTP 调用或移动事件应在 `waste/<流编号>/results` 上恰好产生一条 MQTT 消息，且 `category` 与 `confidence` 与 `top3[0]` 一致。
5. **切换到开放词汇 track**（可选，仅 Orin）。部署时设 `model.track: open_vocab`。

## 有哪些接口

分类主机对外有两个接口、一个进程内回调，全部由主机自己提供。

- **运营或记录系统** —— 订阅 1883 端口上的 `waste/<流编号>/results`。一次分类一条 JSON。
- **自助终端界面、PLC 网关或测试脚本** —— 8080 端口上的 `POST /trigger` 触发一次拍照分类；`/events` 返回最近结果与 top3。
- **翻盖、继电器或分道指示灯** —— 异步 GPIO 回调带上四分类结果。不绑引脚，绑定代码属于集成工作。

### 完整的接口与 payload

| 类型 | 位置 | 内容 | 备注 |
|---|---|---|---|
| `mqtt` | 1883，`waste/<流编号>/results` | `type`、`version`、`taxonomy_version`、`device`、`stream_id`、`frame_id`、`timestamp`、`trigger`、`inference_time_ms`、`pipeline_ms`、`category`（`class_id`、`class_name`、`china_category`、`china_category_zh`）、`confidence`、`top3[]`、`image_ref`、`model`（名称、backbone、输入、`onnx_sha256`、加速器） | 一次分类一条。发布前过事件 schema 校验 |
| `http` | 8080，`/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` 触发一次拍照分类（触发源记为 `http`）；MJPEG 实时画面；带推理耗时、触发与去抖计数以及 MQTT 计数的健康接口；最近结果与 top3 | 本地面板，无鉴权 |
| GPIO 回调 | 进程内 | 异步给出四分类结果 | `actuator.enabled` 默认 false。不绑引脚 |

读字段时注意两点：

- **图片不在 payload 里。** `image_ref.kind` 只有 `none`、`local`、`object_store`。payload 里出现 base64 图片字节违反契约，发布前会被拒。
- **`category` 恒等于 `top3[0]`，`confidence` 恒等于 `top3[0].confidence`。** 两条都在发布前检查，不合格的 payload 计数并丢弃，消费方不需要自己核对。

随包的 MQTT broker 允许匿名连接，用于本地调试；正式部署换成带凭据的 broker。

## 性能与实测数据 {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_waste_sorting</font></span></strong>
    </a>
</div><br />

### 设备实测：reComputer RK3588 系列

| 模型 / 精度 | 时延 p50 / p95（mean） | 与 CPU 参考一致率 | 对真值准确率 | 条件 |
|---|---|---|---|---|
| **EfficientNet-Lite0（m1c），fp16** | 7.906 ms / 8.129 ms（7.041 ms） | 1.00 | 0.78 | 50 张 val 图 |
| EfficientNet-Lite0（m1c），int8 calib64+normal | 3.780 ms / 3.984 ms（3.807 ms） | 0.90 | 0.72 | 63 张校准，`normal` 算法 |
| EfficientNet-Lite0（m1c），int8 calib64+mmse | 3.785 ms / 3.981 ms（3.808 ms） | 0.98 | 0.78 | 63 张校准，`mmse` 算法 |
| EfficientNet-Lite0（m1c），int8 calib256+normal | 3.766 ms / 3.920 ms（3.500 ms） | 0.90 | 0.72 | 252 张校准，`normal` 算法 |
| **EfficientNet-Lite0（m1c），int8 calib256+mmse**——推荐 | 3.803 ms / 4.003 ms（3.834 ms） | **1.00** | **0.78** | 252 张校准，`mmse`；一致率与准确率都与 fp16 持平，且**快 52%** |
| SigLIP 2 视觉塔，fp16 | 169.4 ms / 170.5 ms | 嵌入余弦 mean **0.999617**，min 0.998841 | — | 191 MB `.rknn` |

条件：rknn-toolkit2 2.3.2 转换，librknnrt 2.3.2，`core_mask=AUTO`，per-channel 量化。`mmse` 的转换耗时是 `normal` 的 40–90 倍（256 张校准时 17.3 分钟对 11.5 秒），只在转换时付出一次，不影响运行时。

复现：`solutions/edge_waste_sorting/evaluation/runs/2026-09-06-m1c-rk3588-radxa`

reComputer RK3576 系列上只跑过 SigLIP 2 视觉塔与已取代的 MobileNetV3-Small：SigLIP 2 视觉塔 fp16 p50 152.51 ms / p95 176.59 ms，嵌入余弦 mean **0.99965**，min 0.99900。

复现：`evaluation/runs/2026-09-06-rk3576-cat`

### 基线分类器精度：EfficientNet-Lite0（m1c，出货）

| 指标 | 数值 | 条件 |
|---|---:|---|
| 物料 top-1（8 类） | **0.8877** | val，7417 张；onnxruntime 1.25.1 CPU；ONNX `e9f9e847…`，13,477,056 B |
| 物料 top-5 | 0.9833 | 同上 |
| 中国四分类 top-1 | **0.9500** | 同上；在八类 argmax 上查表 |
| macro-F1（7 个有样本的类） | 0.8511 | 排除 `textile`——零样本 |
| 物料 top-1，留出 test | 0.8802 | test，7290 张 |
| 单图推理时延，CPU | mean 16.796 ms / p50 14.724 ms / p95 28.718 ms | 仅 `session.run`，CPU 离线基准，batch 1，不是设备指标 |
| 置信度低于 0.5 的图 | 318 张（4.3%） | val |
| ORT PTQ INT8 与 fp32 一致率 | 0.965 | 200 张 val 图，per-channel + MinMax，未塌缩 |
| Hailo DFC 模拟器 INT8 与 CPU 的 top-1 一致率 | 0.890 | 200 张 val 图；对真值准确率 0.755（CPU 同批图 0.795）；来自早于出货 HEF 的版本，不含板级时延 |

四分类 top-1（0.9500）比物料 top-1（0.8877）高，因为 glass、metal、plastic 之间的混淆都落在可回收物里；只看四分类会高估对材质的判别力。

复现：`evaluation/runs/2026-09-06-m1c-cpu`、`evaluation/runs/2026-09-06-m1c-hef`

### 开放词汇 track：SigLIP 2 ViT-B/16

| 指标 | 数值 | 条件 |
|---|---:|---|
| 物料 top-1（8 类） | 0.8501 | val，7417 张；英文 prompt 集 `waste8-en/v1`，模板 `t02`，16-shot α=0.8，temperature 0.0075 |
| 物料 top-5 | 0.9987 | 同上 |
| 中国四分类 top-1 | 0.9393 | 同上；分层路径（先八类再映射） |
| macro-F1（7 类） | 0.7460 | 同上 |
| ECE（15 bins） | 0.0221 | 同上 |
| 开集 AUROC | 0.7538 | 7 个有样本类别的均值，留一类法，score = `1 - max softmax` |
| 中英一致率（同一张图） | 物料 0.8698 / 四分类 0.9143 | 一份视觉嵌入、三套原型库 |
| 物料 top-1，留出 test | 0.8620 | test，7290 张 |
| 单图推理时延 | p50 66.93 ms / p95 91.62 ms | CPU 离线基准，batch 1，仅视觉塔，不是设备指标 |

与基线的对比（同一份 split）：

| 指标 | 基线（MobileNetV3-Small） | 开放词汇（SigLIP2-B/16） |
|---|---:|---:|
| 物料 top-1，val | **0.8792** | 0.8501 |
| 物料 top-1，test | **0.8807** | 0.8620 |
| 中国四分类 top-1，val | **0.9519** | 0.9393 |
| macro-F1，val | **0.8292** | 0.7460 |
| ECE（15 bins），val | 0.0308 | **0.0221** |
| 开集 AUROC | 无（闭集头不重训就无法去掉一个类） | **0.7538** |
| 中英一致率 | 没有文本侧 | **0.8698 / 0.9143** |
| 零样本新类别 | 需要重训 | **改 prompt** |
| CPU p50 时延 | **1.57 ms** | 66.93 ms |

对比里的基线是已取代的 MobileNetV3-Small。出货的 EfficientNet-Lite0 在这份 split 上 val top-1 0.8877，CPU p50 约 14.7 ms，时延倍数从 40 倍缩到 4–5 倍。

复现：`evaluation/runs/2026-09-05-w1-cpu`

### 部署占用

| 项目 | 大小 |
|---|---|
| 基线 ONNX（`efficientnet_lite0_waste8.onnx`） | 13,477,056 B |
| SigLIP 2 视觉塔 ONNX（`siglip2_vision_224.onnx`） | 371,695,898 B |
| 原型库 + 校准报告 | 合计约 155 KB |

### 运行时与关键参数

| 设备 | 模型 | 精度 | 运行时 | 模型怎么到设备上 |
|---|---|---|---|---|
| reComputer J30 / J40 系列 | EfficientNet-Lite0 224² | FP16 | TensorRT | 部署时在设备上构建 engine，绑定 GPU 架构与 TensorRT 版本，不能预编分发 |
| reComputer J40 系列（可选开放词汇 track） | SigLIP 2 ViT-B/16 视觉塔 + 常量文本原型 | — | — | `model.track: open_vocab` |
| reComputer R2000 系列 + Hailo-8 | EfficientNet-Lite0 224² | INT8（uint8 HEF，`optimization_level=2`） | HailoRT 4.21.0 | HEF 在设备外用 DFC 3.31.0 编译，部署时下载 |
| reComputer RK3588 系列 | EfficientNet-Lite0 224² | INT8（calib256+mmse） | librknnrt 2.3.2 | rknn-toolkit2 2.3.2 在设备外转换 |

- 触发去抖：**800 ms**，前一次未完成时到达的触发合并，不排队
- 连续模式：连续 **3 帧** top-1 相同才发布；触发模式一次拍摄一个答案
- `actuator.enabled`：默认 `false`，GPIO 回调不绑引脚

### 已知退化

- `textile` 的训练与评测样本都是零：两个源数据集都没有布料类别，第八个 logit 保留（ONNX 输出仍是 `1×8`），但模型从未预测出这一类，所有表在这一类上报 `n/a`。
- 没有物料类别映射到 `hazardous`（有害垃圾）；它留在枚举里是为了 schema 稳定，当前构建不会输出它。
- `organic` 占训练集 48.9%、val 47.1%，召回 0.9791，远高于其他类（0.70–0.88）；模型把不确定的物品判向这一类。
- `residual` 只有 20 张 val 样本；开放词汇 track 在它上面的精确率 0.2754、留一法 AUROC 0.5795，接近随机。
- 开放词汇 track 用中文 prompt 直接预测四分类只有 0.8478，分层路径（先八类再映射）是 0.9393。
- MobileNetV3-Small（已取代）的 INT8 在三条边缘链路上都塌缩：Hailo DFC 模拟器一致率 0.115、reComputer RK3576 系列 0.10、reComputer RK3588 系列 0.22（fp16 0.98–1.00），所以基线换成 EfficientNet-Lite0。RK3588 的 INT8 结果不能直接套用到 RK3576。
- SigLIP 2 视觉塔在 Hailo-8 上 INT8 量化失败（`hailo optimize` 在 `ne_activation_mul_and_add78` 层报错），没有 HEF；开放词汇 track 不能在 reComputer R2000 系列上跑。
- 两个数据集都是单件物品照片（TrashNet 白色背板，GC3 物体偏心且常被遮挡），不含潮湿、压扁、堆叠、逆光或部分装袋的垃圾；投放点现场的精度会低于表中数字。

### 下一步

- 把 reComputer R2000 系列（R2035-12，Hailo-8）在全部 7417 张验证图上的物料与四分类实测，以及 reComputer J40 系列（J4012）上的触发到出结果时延与 engine 构建时间并入「性能与实测数据」。

## 数据与素材出处

- **TrashNet** —— [github.com/garythung/trashnet](https://github.com/garythung/trashnet)，**MIT License，Copyright (c) 2017 Gary Thung**。依据两处一手来源：仓库在 commit `6fa2b87` 上的 `LICENSE` 文件，以及官方 HuggingFace 数据集卡片的 `license` 字段。MIT 要求保留版权与许可声明，没有相同方式共享条款。
- **Garbage Classification 3 — Material Identification（Roboflow Universe）** —— **CC BY 4.0**，导出包自带的 `README.dataset.txt` 里逐字写明。Roboflow Universe 上的项目路径是 `material-identification/garbage-classification-3`。
- **SigLIP 2** —— [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224)，revision `75de2d55…`，Apache-2.0。仅供可选的开放词汇 track 使用。
- **MobileNetV3-Small 的 ImageNet 起始权重**（torchvision）—— BSD-3-Clause。
- **上游运行时代码** —— Apache-2.0。
- **架构图** —— 依据本包的设备目录与输出接口绘制，不含任何数据集图像。

由这些数据集派生的对外材料，须逐字使用以下署名字符串：

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**本包不提交任何数据集派生的图像。** 两个许可都允许再分发。
