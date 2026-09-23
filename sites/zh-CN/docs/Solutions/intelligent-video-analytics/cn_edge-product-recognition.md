---
description: 端侧超市商品图像识别——单类检测器加嵌入商品库，新 SKU 拍几张照片就能注册而不用重训；需要哪些设备、怎么部署、各板卡实测数据，以及给工程师的实现细节
title: 端侧商品图像识别方案：搭建、部署与实测数据
keywords:
  - 端侧商品识别
  - 收银台商品识别 免扫码
  - 货架缺货 错放 识别
  - SKU 注册 不重训
  - FAISS 商品库
  - 图像检索 ArcFace
  - YOLOX 单类检测
  - DINOv2 嵌入 INT8
  - RKNN fp16 一致率
  - Hailo-8 HEF
  - MQTT
  - RK3588
  - reComputer R2000 series
image: https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png
slug: /solutions/edge-product-recognition
sidebar_position: 6
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/cn/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[先看这里]
打包版本（cbbfa60）的上游还没有把检测、嵌入、库检索与 MQTT 上报串成一个设备侧服务，这里没有端到端的计数准确率、货位准确率与长稳数据；识别结果不是法定计量，不能作为计价或法定计数的依据。
:::

## 这套方案是干什么的

一台摄像头对着收银台传送带或货架正面。画面里的每件商品被框出、裁下、变成 512 维向量，再到已注册 SKU 的商品库里检索。收银台侧输出一份清单（SKU→数量，按 track id 聚合，同一件商品经过相机只计一次）；货架侧输出货位状态（ok、empty、wrong_sku、unknown，按 planogram 位置聚合）。每帧一条 MQTT 消息带出这些结果。

门店上新品不用重训：给新 SKU 拍三到八张照片，发到管理端，商品库生成一个新的不可变版本。检测器是单类的，只回答「这里有一件商品」，不认识具体商品；嵌入器也不更新。

- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/edge_retail_recognition)
- 开源地址：暂无。本包没有 `intro.links.github`，打包时代码在内部仓库。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-content">
                <h3>新增 SKU 拍 3–8 张照片，不用重训</h3>
                <p>注册生成一个新的不可变商品库版本。注册图从 1 张加到 8 张，top-1 提高 28 个百分点（见性能与实测数据）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>检测在 NPU 上运行</h3>
                <p>RK3588 上 RKNN fp16 与 CPU 参考的框一致率 99.85%、p50 56.7 ms；Hailo-8 的 INT8 HEF p50 9.04 ms、一致率 94.77%。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>自有摄像头与门店系统直接接入</h3>
                <p>任意 RTSP / USB 摄像头；收银机从 MQTT 读 SKU→数量，补货系统读缺货与错放货位，HTTP API 提供事件查询与商品库管理。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>数据不出现场</h3>
                <p>摄像头、识别主机、管理端主机都在本地，broker 也跑在管理端容器里。随包 broker 是匿名明文的，上线前加账号与 TLS。</p>
            </div>
        </li>
    </ul>
</div>

### 管理界面

上游包里有四张管理界面截图：事件列表、单事件逐框详情、商品库、收银台与货架看板。四张都由上游 `web_demo` 工具用合成夹具生成，里面的 SKU、相似度与事件是测试数据，只展示界面布局。

### 货架看板上的三种状态

货架判定在 reComputer RK3588 系列与 reComputer R2000 系列 + Hailo-8 上实测过。看板对每个货位给出三种状态之一：摆放正确、缺货、错放。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png" alt="货架看板：所有货位与商品库一致，标记为摆放正确"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-empty-e969556c.png" alt="同一货架取走一件后，该货位转为缺货"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-wrong-sku-27b3ca7e.png" alt="放了一件不属于这个货位的商品，该货位标记为错放并给出实际匹配到的 SKU"/>
</div>

三种状态连续切换的过程：

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-states-c62596bb.gif" alt="同一货架依次经过摆放正确、缺货、错放三种状态"/>
</div>

收银台链路输出逐件商品的轨迹：

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="收银台画面上的商品跟踪轨迹与逐件识别结果"/>
</div>

以上画面来自 `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*` 两轮真机运行，商品为项目自购实物，不来自任何数据集。

## 需要哪些硬件

每个站点四样：摄像头、识别主机、管理端主机，以及一台 x86_64 转换机（每个模型用一次）。

**① 摄像头** — 任意一台装在收银台上方或正对货架的 RTSP / USB 摄像头，上面不跑任何程序。输入尺寸编译进产物：收银台 640²，货架 1280²。

**② 识别主机** — 三个套餐的区别在这里：

| | 主机 | 这套硬件上测过什么 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12（Hailo-8，26 TOPS）](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>检测上 NPU，嵌入跑在四个 A76 核上 | 两段都测了：检测 9.04 ms，嵌入每裁剪 91.95 ms | 检测与嵌入都要有实测数据 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>检测上 Rockchip NPU，嵌入留在 CPU | 只有检测段，在 reComputer RK3588 系列上：框一致率 99.85%，56.7 ms | 已经在用 Rockchip 板卡。RK3576 工具链相同 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012（Orin NX 16GB）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>TensorRT 路线 | 收银回放 | 已经在用 Jetson |

延迟都是该行硬件上的单段实测。

**③ 管理端主机** — 你自己的 amd64 或 arm64 Linux 机器，装 Docker，不需要 GPU，每台识别设备都能访问到。它跑三个容器：注册/查询服务、管理界面、MQTT broker。**两个容器镜像都在这台主机上从上游仓库构建**，不从 registry 拉取。

**④ 一台 x86_64 转换机** — rknn-toolkit2 与 Hailo Dataflow Compiler 都不在目标板上运行。每个模型转换一次，部署时不用重复。

## 现场怎么部署

先定产物与机位，再装软件，软件部分每个套餐四步。

### 一、装硬件：先定产物，再定机位

:::tip[输入尺寸在转换时确定]
输入尺寸编译进产物，运行时不能改。用 640² 的产物看货架会漏掉远端商品；换到 1280² 后 SKU-110K test 上的小目标 mAP50-95 从 17.49 升到 26.88。先确定是收银台还是货架，再把机位装到商品在画面里占比合适的位置。
:::

嵌入是每个框一次 CPU 推理。按 reComputer R2000 系列上实测的每裁剪 91.95 ms 算，五件商品的篮子约半秒；货架一帧按实测密度 157.6 个框算约 14 秒。**货架部署要抽帧或按货位采样。**

### 二、装软件：四步

逐设备的操作步骤在可部署方案页，这里只列流程。三个套餐都是同样四步：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并部署 🖱️</font></span></strong>
    </a>
</div><br />

1. **拉起管理端** — 注册服务、界面与 broker 跑在管理端主机上，部署时写入角色 token 表。没有默认 token，不允许匿名读，表为空时服务拒绝启动。
2. **放好嵌入模型** — 把 DINOv2 ONNX 放到管理端挂载的位置，并把 `RETAIL_EMBEDDER` 从占位实现切走。上游默认是 `fake`，它把图片字节哈希成向量；`GET /api/health` 不报告这一点，唯一的症状是注册正常但每次检索都返回错误的 SKU。
3. **注册 SKU** — 每个 3 到 8 张照片，至少正面、背面、侧面，两种光照。少于三张会被拒绝；同一个 sku_id 返回 409，除非显式 `replace=true`。
4. **在板上转换并核对检测器** — 在 x86_64 主机上转换，把产物拷到板上，再与 CPU 参考做一次一致性核对。

每个套餐四步预留约 90 分钟，另加管理端主机上的容器构建时间。

**确认嵌入模型已接上。** 一次识别会在事件流里留下一条完整记录：货位、匹配到的 SKU、相似度与逐框坐标。`fake` 实现下相似度分布会明显异常。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="一条识别事件的完整字段：货位、匹配 SKU、相似度与逐框坐标"/>
</div>

<!-- TODO 图：货架与摄像头的现场安装照——需现场拍 -->

## 有哪些接口

出口全在管理端主机上：1883 的 MQTT，以及 8089 与 8080 两个 HTTP 接口，都在本地网络内，除 broker 外都走同一个 token 校验。

- **收银机 / POS** 订阅 `retail/v1/events`，读 `summary.items`：这一帧的 SKU→数量映射，不需要解析逐框数组。
- **补货或货架稽核系统** 从同一条消息里读 `summary.empty_slots` 与 `summary.wrong_slots`。
- **需要追溯某次判断的系统** 读 `detections[]`：每个框带 `track_id`、归一化 `bbox`、`sku_id`、`similarity`、`top2_margin`、`ocr` 块与 `fallback` 标志。

### 完整的主题与 payload

| 接口 / 端口 | 内容 | 说明 |
|---|---|---|
| MQTT `retail/v1/events`，1883 | `event_id`、`scene`、`timestamp`、`gallery.{version,sha256}`、`detections[]`、`summary.{items,empty_slots,wrong_slots}`、`models.{detector_sha256,embedder_sha256}` | 一帧一条，不逐框发 |
| HTTP `/v1/gallery/skus`，8089 | `POST` 提交 sku_id、显示名、别名、许可字段与 3–8 张图 → 生成一个新的不可变版本 | 同 sku_id 返回 409，除非 `replace=true` |
| HTTP `/v1/gallery`、`/v1/gallery/{version}`、`/v1/gallery/current/download`、`/v1/gallery/rollback/{version}`，8089 | 版本列表、单版本 manifest、带 SHA256SUMS 的 tar.gz，以及切换前重校目标 SHA 的回滚 | 回滚不产生新版本 |
| HTTP `/api/events`、`/api/events/{id}`、`/api/summary`，8080 | 按场景/SKU/设备/时间过滤的事件列表、逐框详情、看板汇总 | 只读 API，同一个 token 校验 |

**`similarity` 要连同同一条消息里的 `gallery.version`、`gallery.sha256` 与模型哈希一起看。** 两个不同嵌入器产生的向量不可比，混用时表现为什么都识别不出来；每条消息都带上这四项。

鉴权是 `Bearer <token>`，角色 viewer < operator < admin。broker 随包配置为匿名明文，任何能访问 1883 端口的人都能写入伪造的识别事件。

## 性能与实测数据

### 检测，设备实测

| 设备 | 产物 | p50 / p95 | 与 CPU 参考的框一致率 |
|---|---|---:|---:|
| reComputer R2000 系列 + Hailo-8 | INT8 HEF，640² | 9.04 / 9.10 ms | 94.77%（200 张），94.68%（300 张） |
| reComputer RK3588 系列 | RKNN fp16，640² | 56.7 / 89.5 ms | 99.85% |
| reComputer RK3588 系列 | RKNN INT8，640² | 26.0 / 33.2 ms | 98.35% |

条件：一致率按 IoU ≥ 0.5 与 CPU 参考比对。Hailo 单流吞吐 110.4 fps（`hailortcli benchmark` 110.64 fps，纯硬件时间 8.21 ms，多出的 0.8 ms 是 Python vstream 往返）。**reComputer R2000 系列上端到端（含 letterbox、输出拼接、解码与 NMS）p50 18.74 ms / p95 24.25 ms**：对约 160 个框做纯 numpy 逐类 NMS，耗时超过推理本身。

复现：`evaluation/runs/2026-09-06-det-hef/`、`evaluation/runs/2026-09-06-det-rk3588-radxa/`

### 嵌入，设备实测

| 变体 | 单裁剪 p50 / p95 | 相对 fp32 的检索代价 |
|---|---:|---|
| DINOv2-small，动态量化 INT8，4 线程 | 91.95 / 105.98 ms | 全部 7 个实测档位上均在 0.65pp 以内 |
| DINOv2-small，fp32，4 线程 | 180.75 / 233.41 ms | 基线 |

条件：reComputer R2000 系列 CPU。只量化权重几乎不损失检索精度，激活一起量化则损失明显。

复现：`evaluation/runs/2026-09-06-embed-small/` §8

### 检索与检测准确率（非设备端）

| 配置 | 结果 | 数据集 |
|---|---:|---|
| DINOv2-base，每 SKU 8 张注册图 | top-1 84.67% / top-5 96.66% | Grocery Store Dataset，81 类，fp32 |
| DINOv2-small，每 SKU 8 张注册图 | top-1 79.11% | 同上 |
| DINOv2-small，每 SKU 1 张注册图 | top-1 51.11% | 同上 |
| DINOv2-base，每 SKU 8 张，留出 SKU | top-1 78.92% | Products-10K 留出集，类别多得多 |
| 检测器，640² | mAP50-95 52.84，mAP50 88.26 | SKU-110K test |
| 检测器，1280² | mAP50-95 56.32 | SKU-110K test |

SKU-110K 的公开成绩是 mAP50-95 58.0（DenseDet，Cascade R-CNN + ResNeXt-101）到 58.7（arXiv 2007.11946）。640² 的 mAP50 为 88.26 而 mAP50-95 为 52.84：框能找到，定位精度不足。注册视角数对检索影响最大：同一模型、同一数据集上，每 SKU 1 张 51.11%，8 张 79.11%。

复现：`evaluation/runs/`（嵌入评测 `evaluation/eval_embedder.py`）

### 运行时与关键参数

| 设备 | 检测器 | 嵌入器 | 模型怎么到设备上 |
|---|---|---|---|
| reComputer RK3588 / RK3576 系列 | NPU 上的 `.rknn`，fp16 或 INT8 | CPU 上的 onnxruntime，没有 RKNN 转换 | 在 x86_64 主机上用 rknn-toolkit2 2.3.2 转换；toolkit 版本必须与板上 `librknnrt.so` 匹配 |
| reComputer R2000 系列 + Hailo-8 | NPU 上的 INT8 `.hef` | CPU 上动态量化 INT8 的 DINOv2-small | 在 x86_64 主机上用 Hailo Dataflow Compiler 编译后拷到板上 |
| reComputer J40 系列（Jetson Orin） | TensorRT fp16（GPU） | TensorRT fp16（GPU） | 检测 + 嵌入 + 检索 + 上报的整机回放在 J4012 与 J3011 上跑通 |

检测器是单类 YOLOX-Tiny（640² 或 1280²）；嵌入器是在电商商品图上用 ArcFace 微调的 DINOv2，base（348 MB fp32）或 small（23.5 MB INT8），每个裁剪输出一个 512 维向量；SKU 身份只在版本化商品库的 FAISS 余弦检索里。

- 输入尺寸：收银台 **640²**，货架 **1280²**，编译进产物，运行时不能改
- 注册图：每个 SKU **3–8 张**，少于三张拒绝
- `RETAIL_EMBEDDER`：上游默认 `fake`（把图片字节哈希成向量），部署时必须切到 DINOv2 ONNX

### 已知退化

- 嵌入是每个框一次 CPU 推理：按每裁剪 91.95 ms，五件商品的篮子约半秒，货架一帧（157.6 个框）约 14 秒，货架部署要抽帧或按货位采样。
- 静态 QDQ INT8（激活也量化）检索掉 3.78–9.96 个百分点，不可用。
- rknn-toolkit2 与 `librknnrt.so` 版本不匹配时可能照常加载并给出错误数值；每次转换后与 CPU 参考做一致性核对。
- 用 640² 产物看货架会漏掉远端商品；SKU-110K 小目标 mAP50-95 在 640² 为 17.49，1280² 为 26.88。
- 两个不同嵌入器的向量不可比，混用时什么都识别不出来。
- 设备端拉取商品库版本、校验、原子切换的运行时未实现，新注册的 SKU 不会自动下发到设备。
- OCR 重排与 VLM 兜底未实现：消息结构里已有 `top2_margin`、`ocr`、`fallback` 块，代码未实现。

### 下一步

- 把 reComputer J40 系列（J4012 / J3011）TensorRT 后端的检测、嵌入与收银回放实测并入「性能与实测数据」和运行时表。
- 测收银台计数准确率与货架货位准确率，作为验收指标。
- 实现设备端拉取商品库版本、校验、原子切换的运行时，让新注册的 SKU 自动下发到设备。

## 数据与素材出处

**本包不含任何模型权重与数据集图片。** 下面的限制会被基于这些数据训练出来的模型继承，商用部署需要用可商用数据重训检测器与嵌入器。

| 资产 | 许可 / 使用范围 | 说明 |
|---|---|---|
| 检测器权重（训练于 [SKU-110K](https://github.com/eg4000/SKU110K_CVPR19)） | Trax 许可：学术与非商用；第 (iii) 条禁止衍生作品 | `use_scope: academic-only`、`redistributable: false` |
| 嵌入器权重（微调于京东 Products-10K） | 非商用研究与教育 | `use_scope: non-commercial`、`redistributable: false` |
| `facebook/dinov2-base`、`facebook/dinov2-small` 骨干 | Apache-2.0 | 骨干可商用，限制来自训练数据 |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | 只用于检索评测；这一组里唯一可商用的数据集 |
| RPC、Unitail-OCR、GroZi-120 | CC BY-NC-SA 4.0 / 仅学术 / 许可需向数据集方确认 | 出现在上游评测计划里，属非商用范围 |
| 项目自身代码 | Apache-2.0 | |

逐产物字段（`license_id`、`use_scope`、`redistributable`、`source_revision`、`sha256`）在上游的 model card 里；摘要在包内 `gallery/ATTRIBUTION.md`。可部署方案页上的架构图按本包的设备清单自绘。
