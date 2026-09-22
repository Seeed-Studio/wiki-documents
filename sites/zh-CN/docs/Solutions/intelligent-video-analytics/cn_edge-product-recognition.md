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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[先看这里]
这是一套仍在建设中的可部署方案，不是成品。管理端——注册、商品库版本管理、管理界面、broker——已经实现，检测器也在两块板上完成了转换与实测。**把检测、嵌入、库检索与 MQTT 上报串成一个服务的设备侧进程在上游还不存在**，因此本页没有端到端的计数准确率、货位准确率与长稳数据。没有任何一档 preset 带 `verified: [hardware]`。它不是法定计量器具，也不对法律意义上的计数或价格作任何主张。
:::

## 这套方案是干什么的

一台摄像头看着收银台传送带或货架正面。画面里的每一件商品被框出来、裁下来、变成 512 维向量，再到已注册 SKU 的商品库里检索。收银台侧的产物是一份清单——SKU→数量，按 track id 聚合，同一件商品经过相机只计一次；货架侧的产物是货位状态——ok、empty、wrong_sku、unknown，按 planogram 位置聚合。一帧一条 MQTT 消息把这些一起带出去。

有意思的地方在门店上新品时会发生什么：**什么都不用重训。** 给新 SKU 拍三到八张照片，发到管理端，商品库多出一个不可变版本。检测器从不认识具体商品——它是单类的，只回答「这里有一件商品」——嵌入器也不更新。

- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/edge_retail_recognition)
- 开源地址：暂无。本包没有 `intro.links.github`，打包时代码在内部仓库。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-content">
                <h3>新增一个 SKU 的成本是 3–8 张照片，不是一轮训练</h3>
                <p>注册会生成一个新的不可变商品库版本。从 1 张注册图加到 8 张，top-1 差 28 个百分点（见附录）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>检测段能干净地转到 NPU 上</h3>
                <p>RK3588 上 RKNN fp16 与 CPU 参考的框一致率 99.85%、p50 56.7 ms；Hailo-8 的 INT8 HEF 是 p50 9.04 ms、一致率 94.77%。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>嵌入是每个裁剪约 92 ms 的 CPU 开销</h3>
                <p>在 reComputer R2000 系列 上四线程实测，动态量化 INT8 的 DINOv2-small，检索准确率与同模型 fp32 相差 0.65pp 以内。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>没有数据离开现场</h3>
                <p>摄像头、识别主机、管理端主机都在本地，broker 也跑在管理端这套容器里。随包 broker 是匿名明文的——离开实验台前先加账号与 TLS。</p>
            </div>
        </li>
    </ul>
</div>

### 管理界面长什么样

上游包里有四张管理界面截图——事件列表、单事件逐框详情、商品库、收银台与货架看板。**四张都是上游 `web_demo` 工具对着合成夹具产生的**：里面的 SKU、相似度与事件都是测试数据，不是现场结果。它们说明界面的形态，不说明识别质量。

### 货架看板上的三种状态

2026-09-07 在 RK3588 与 reComputer R2000 系列 + Hailo-8 上各跑了一轮货架判定。看板对每个货位给出三种状态之一：摆放正确、缺货、错放。

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

收银台那条链给的是逐人逐商品的轨迹，而不是货位状态：

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="收银台画面上的商品跟踪轨迹与逐件识别结果"/>
</div>

以上画面来自 `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*` 两轮真机运行，商品为项目自购实物，不来自任何数据集。

## 需要哪些硬件

每个站点四样：摄像头、识别主机、管理端主机，以及一台每个模型用一次的 x86_64 转换机。

**① 摄像头** — 任意一台架在收银台上方或正对货架的 RTSP / USB 摄像头，上面不跑任何东西。真正要紧的尺寸是编译进产物的那个：收银台 640²，货架 1280²。

**② 识别主机** — 三个套餐的差别在这里，实测的地基也在这里：

| | 主机 | 这套硬件上测过什么 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" alt="reComputer R2000 系列 8GB" width="110" /> | [reComputer R2000 系列 8GB](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) + [Raspberry Pi AI HAT+（Hailo-8，26 TOPS）](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html)<br/>检测上 NPU，嵌入跑在四个 A76 核上 | 两段都测了：检测 9.04 ms，嵌入每裁剪 91.95 ms | 想让两段都在自己手上这块板上有数字 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>检测上 Rockchip NPU，嵌入留在它的 CPU | 只有检测段，在一块 RK3588（reComputer RK3588 系列 reComputer RK3588 系列）上：框一致率 99.85%，56.7 ms | 已经在用 Rockchip 板卡。RK3576 工具链相同，但没有任何实测 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012（Orin NX 16GB）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>TensorRT 路线 | 无 | 已经在用 Jetson，并接受后端要先写出来 |

延迟都是该行硬件上的单段实测。本设计没有任何吞吐或路数数字——目前还没有任何进程在设备上把两段接起来跑过。

**③ 管理端主机** — 你自己的 amd64 或 arm64 Linux 机器，装 Docker、不需要 GPU、每台识别设备都能访问到。它跑三个容器：注册/查询服务、管理界面、MQTT broker。**两个容器镜像都没有推送到任何 registry**，都在这台主机上从上游仓库构建，且要先构建 SPA（`npm --prefix web/ui ci && npm --prefix web/ui run build`）——镜像里不跑 npm。

**④ 一台 x86_64 转换机** — rknn-toolkit2 与 Hailo Dataflow Compiler 都不在目标板上运行。这是每个模型一次的事，不是每次部署都要做。

## 现场怎么部署

分两部分：物理安装决定每帧要付多少次嵌入；软件部分每个套餐四步。

### 一、装硬件：先定产物，再定机位

:::tip[产物选在转换时，不在启动时]
输入尺寸编译进产物、运行时不改。用 640² 的产物去看货架会丢掉远端商品；换到 1280² 把 SKU-110K test 上的小目标 mAP50-95 从 17.49 抬到 26.88。先定收银台还是货架，再按这个把机位装到商品在画面里占比合适的位置。
:::

第二条约束是算术，不是光学。嵌入是每个框一次 CPU 推理。按 reComputer R2000 系列 上实测的每裁剪 91.95 ms 算，五件商品的篮子约半秒，货架一帧按实测密度 157.6 个框算约 14 秒。**货架部署必须抽帧或按货位采样——这是设计决定，不是调参。**

### 二、装软件：四步

逐设备的操作步骤在可部署方案页，这里只讲轮廓。三个套餐做的都是同样四件事：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并部署 🖱️</font></span></strong>
    </a>
</div><br />

1. **拉起管理端** — 注册服务、界面与 broker 跑在管理端主机上，部署时写入角色 token 表。没有默认 token、没有匿名读，表为空时服务拒绝启动。
2. **放好嵌入模型** — 把 DINOv2 ONNX 放到管理端挂载的位置，并把 `RETAIL_EMBEDDER` 从占位实现切走。上游默认是 `fake`，它把图片字节哈希成向量；`GET /api/health` 不报告这件事，所以「注册正常但每次检索都返回错误的 SKU」是唯一的症状。
3. **注册 SKU** — 每个 3 到 8 张照片，至少正面、背面、侧面，两种光照。少于三张会被拒绝；同一个 sku_id 返回 409，除非显式 `replace=true`。
4. **在板上转换并核对检测器** — 在 x86_64 主机上转换，把产物拷到板上，再与 CPU 参考跑一遍一致性核对。**每个套餐目前都停在这一步**：后面没有可以启动的设备侧服务。

这四步按每个套餐约 90 分钟预算，另加管理端主机上的容器构建时间。

**怎么确认这一步做对了。** 一次识别会在事件流里留下一条完整记录：货位、匹配到的 SKU、相似度与逐框坐标。用它来判断嵌入模型是否真的接上了——`fake` 实现下相似度分布会明显异常。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="一条识别事件的完整字段：货位、匹配 SKU、相似度与逐框坐标"/>
</div>

<!-- TODO 图：货架与摄像头的现场安装照——需现场拍 -->

## 怎么接入自有系统

出口全在管理端主机上：1883 的 MQTT，以及 8089 与 8080 两个 HTTP 面，都在本地网络内，除 broker 外都走同一个 token 闸门。

- **收银机 / POS** 订阅 `retail/v1/events`，读 `summary.items`——这一帧的 SKU→数量映射，不需要解析逐框数组。
- **补货或货架稽核系统** 从同一条消息里读 `summary.empty_slots` 与 `summary.wrong_slots`。
- **需要解释某个判断的系统** 读 `detections[]`：每个框带 `track_id`、归一化 `bbox`、`sku_id`、`similarity`、`top2_margin`、`ocr` 块与 `fallback` 标志。

### 完整的主题与 payload

| 接口 / 端口 | 内容 | 说明 |
|---|---|---|
| MQTT `retail/v1/events`，1883 | `event_id`、`scene`、`timestamp`、`gallery.{version,sha256}`、`detections[]`、`summary.{items,empty_slots,wrong_slots}`、`models.{detector_sha256,embedder_sha256}` | 一帧一条，不逐框发 |
| HTTP `/v1/gallery/skus`，8089 | `POST` 提交 sku_id、显示名、别名、许可字段与 3–8 张图 → 生成一个新的不可变版本 | 同 sku_id 返回 409，除非 `replace=true` |
| HTTP `/v1/gallery`、`/v1/gallery/{version}`、`/v1/gallery/current/download`、`/v1/gallery/rollback/{version}`，8089 | 版本列表、单版本 manifest、带 SHA256SUMS 的 tar.gz，以及切换前重校目标 SHA 的回滚 | 回滚不产生新版本 |
| HTTP `/api/events`、`/api/events/{id}`、`/api/summary`，8080 | 按场景/SKU/设备/时间过滤的事件列表、逐框详情、看板汇总 | 只读 API，同一个 token 闸门 |

**最容易被误读的字段是 `similarity`。** 它只有连同同一条消息里的 `gallery.version`、`gallery.sha256` 与模型哈希一起看才有意义：两个不同嵌入器产生的向量不可比，混用的症状是「什么都认不出来」。每条消息把这四样一起带上，就是为了这件事。

鉴权是 `Bearer <token>`，角色 viewer < operator < admin。broker 相反，随包配置是匿名明文的——任何能访问 1883 端口的人都能灌伪造的识别事件。

## 给工程师：实现细节

### 两个模型，以及为什么要这么拆

分类器每上一个新品都得重训。这套设计把问题拆成没有任何一段去学商品身份：

| 环节 | 模型 | 输出 | 加一个 SKU 时会变吗 |
|---|---|---|---|
| 检测 | YOLOX-Tiny，单类，640² 或 1280² | 框，不带类别 | 不变 |
| 嵌入 | 在电商商品图上用 ArcFace 微调的 DINOv2——base（348 MB fp32）或 small（23.5 MB INT8） | 每个裁剪一个 512 维向量 | 不变 |
| 身份 | 版本化商品库里的 FAISS 余弦检索 | SKU + 相似度 + top-2 间距 | **变——生成一个新的不可变版本** |
| 聚合 | track id（收银台）或 planogram 货位（货架） | 清单，或 ok / empty / wrong_sku / unknown | 不变 |

### 运行时对照

| 主机 | 检测器 | 嵌入器 | 交付方式 |
|---|---|---|---|
| RK3588 / RK3576 | NPU 上的 `.rknn`，fp16 或 INT8 | CPU 上的 onnxruntime，没有 RKNN 转换 | 在 x86_64 主机上用 rknn-toolkit2 2.3.2 转换，onnx 钉在 1.16.1，setuptools 低于 81；toolkit 版本必须与板上 `librknnrt.so` 匹配 |
| reComputer R2000 系列 + Hailo-8 | NPU 上的 INT8 `.hef` | CPU 上动态量化 INT8 的 DINOv2-small | 在 x86_64 主机上用 Hailo Dataflow Compiler 编译后拷到 Pi 上 |
| Jetson Orin | 未实现 | 未实现 | 上游 `platforms/` 下只有 console、hailo、rknn；README 里的 jetson 条目继承自捐赠项目，指向的文件从未拷过来 |

rknn-toolkit2 与 `librknnrt.so` 版本不匹配时**不一定会明确报错**——它可能加载成功并给出错误的数值。与 CPU 参考的一致性核对正是为这件事存在的，不是可选步骤。

### 商品库的版本协议

商品库是唯一的可变状态，而改它的唯一方式是生成新版本：

| 属性 | 行为 |
|---|---|
| 版本目录 | 不可变：向量、SKU 表、FAISS 索引、manifest、SHA256SUMS |
| manifest | 记录是哪个嵌入模型、哪套预处理产生的向量 |
| 切换 | 原子切换，单写锁 |
| 回滚 | 切换前重校目标版本的 SHA，且不产生新版本 |
| 下载 | `current/download` 提供带 SHA256SUMS 的 tar.gz |

**这套协议的管理端一半已实现，设备端那一半没有。** 拉取版本、校验校验和、原子切换的运行时还不存在，所以今天新注册的 SKU 到不了设备上。

### 写在设计里、没有实现的部分

- **OCR 重排。** 消息结构里已经有 `top2_margin` 与 `ocr` 块，但在 top-1 与 top-2 相似度接近时用它们重排的那段代码没有写。
- **VLM 兜底。** `fallback` 块同理。
- **设备侧主链**，对所有平台。
- **TensorRT 后端**，对 Jetson 套餐。

## 附录：实测数据

不需要复核数字的话，跳过这节不影响部署。下面每个数字都在同行标明的硬件上取得，没有一条是从相近板卡推算的；上游评测树里每个 boundary 文件都是 `reproduced_by: null`。

### 检测，真机实测

| 主机 | 产物 | p50 / p95 | 与 CPU 参考的框一致率 | 来源 |
|---|---|---:|---:|---|
| reComputer R2000 系列 + Hailo-8 | INT8 HEF，640² | 9.04 / 9.10 ms | 94.77%（200 张），94.68%（300 张） | `evaluation/runs/2026-09-06-det-hef/` |
| RK3588（reComputer RK3588 series reComputer RK3588 series） | RKNN fp16，640² | 56.7 / 89.5 ms | 99.85% | `evaluation/runs/2026-09-06-det-rk3588-radxa/` |
| RK3588（reComputer RK3588 系列 reComputer RK3588 系列） | RKNN INT8，640² | 26.0 / 33.2 ms | 98.35% | 同一次运行 |

一致率的口径是 IoU ≥ 0.5、与 CPU 参考比对。Hailo 单流吞吐 110.4 fps，用 `hailortcli benchmark` 独立交叉验证为 110.64 fps、纯硬件时间 8.21 ms——多出来的 0.8 ms 是 Python vstream 往返。**Pi 上端到端（含 letterbox、输出拼接、解码与 NMS）是 p50 18.74 ms / p95 24.25 ms**：对约 160 个框做纯 numpy 逐类 NMS，比推理本身还贵。全程未观察到降频；Hailo die 温度与功耗在这个平台上读不到，记为 unavailable，没有估算。

### 嵌入，真机实测

| 变体 | 单裁剪 p50 / p95 | 相对 fp32 的检索代价 |
|---|---:|---|
| DINOv2-small，动态量化 INT8，4 线程 | 91.95 / 105.98 ms | 全部 7 个实测档位上均在 0.65pp 以内 |
| DINOv2-small，fp32，4 线程 | 180.75 / 233.41 ms | 基线 |
| DINOv2-small，静态 QDQ INT8（激活也量化） | — | **掉 3.78–9.96 个百分点，不能用** |

在 reComputer R2000 系列 CPU 上实测，`evaluation/runs/2026-09-06-embed-small/` §8。只量化权重在这里几乎不花成本，连激活一起量化则不然。

### 检索与检测准确率，非设备端

| 配置 | 结果 | 数据集 |
|---|---:|---|
| DINOv2-base，每 SKU 8 张注册图 | top-1 84.67% / top-5 96.66% | Grocery Store Dataset，81 类，fp32 |
| DINOv2-small，每 SKU 8 张注册图 | top-1 79.11% | 同上 |
| DINOv2-small，每 SKU 1 张注册图 | top-1 51.11% | 同上 |
| DINOv2-base，每 SKU 8 张，留出 SKU | top-1 78.92% | Products-10K 留出集，类别多得多 |
| 检测器，640² | mAP50-95 52.84，mAP50 88.26 | SKU-110K test |
| 检测器，1280² | mAP50-95 56.32 | SKU-110K test |

两条检测边界都落在本项目自己的 failure 档，该档的门槛是 mAP50-95 60。这个 60 是本项目对每个 metric 统一套用的通用值，不是按 SKU-110K 设定的；SKU-110K 的公开成绩是 58.0（DenseDet，Cascade R-CNN + ResNeXt-101）到 58.7（arXiv 2007.11946）。640² 的 mAP50 是 88.26：框找得到，框不准。小目标 mAP50-95 从 640² 的 17.49 升到 1280² 的 26.88，这就是货架 preset 作为独立产物存在的理由。

本页最大的一个杠杆是每个 SKU 注册了几个视角：同一个模型、同一个数据集上，1 张时 51.11%，8 张时 79.11%。

## 数据与素材出处

**本包不含任何模型权重与数据集图片。** 下面这些限制会被基于这些数据训练出来的东西继承，所以商用部署是一件重训的事，不是一件谈许可的事。

| 资产 | 许可 / 使用范围 | 说明 |
|---|---|---|
| 检测器权重（训练于 [SKU-110K](https://github.com/eg4000/SKU110K_CVPR19)） | Trax 许可：学术与非商用；第 (iii) 条禁止衍生作品 | `use_scope: academic-only`、`redistributable: false` |
| 嵌入器权重（微调于京东 Products-10K） | 非商用研究与教育 | `use_scope: non-commercial`、`redistributable: false` |
| `facebook/dinov2-base`、`facebook/dinov2-small` 骨干 | Apache-2.0 | 限制来自训练数据，不是骨干 |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | 只用于检索评测；这一组里唯一可商用的数据集 |
| RPC、Unitail-OCR、GroZi-120 | CC BY-NC-SA 4.0 / 仅学术 / 许可需向数据集方确认 | 出现在上游评测计划里，属非商用范围 |
| 项目自身代码 | Apache-2.0 | |

逐产物字段——`license_id`、`use_scope`、`redistributable`、`source_revision`、`sha256`——在上游的 model card 里；摘要在包内 `gallery/ATTRIBUTION.md`。可部署方案页上的架构图取自本包的设备清单，是我们自绘的素材。
