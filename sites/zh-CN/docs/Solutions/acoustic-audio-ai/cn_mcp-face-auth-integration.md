---
description: 在您自有的仓储或业务平台上为语音控制操作添加人脸验证，让每一条指令都归因于摄像头识别到的操作员本人，而不是被说出的名字。
title: 通过人脸验证将语音 AI 引入您的业务系统
keywords:
  - MCP
  - Face Recognition
  - SenseCAP Watcher
  - Integration
  - ERP
  - WMS
  - Voice Control
  - Edge AI
  - Authentication
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /solutions/mcp-face-auth-integration
sidebar_position: 7
last_update:
  date: 07/31/2026
  author: Spencer
tags:
  - mcp
  - agents
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/solutions/mcp-face-auth-integration/
---

:::note[注意]
人脸识别会处理生物特征数据，而这类数据在许多地区受到特别监管——例如欧盟和英国的 GDPR、伊利诺伊州的 BIPA 等。在为真实人员建档前，请先让您的部署通过合规审查；关于您需要承担的部分，请参见 [Biometric Data](#5-生物特征数据)。
:::

## 概览

我们提供的是一个小型机器人，它站在您客户的现场，能与人对话，并知道自己正在和谁说话。操作员双手被占用走上前，说一句“出库 M16 轴承四十件”，这笔交易就会进入您的系统，并归因于摄像头识别到的那个人——而不是被说出的那个名字。

麦克风阵列、唤醒词、语音、语言模型和人脸识别作为一个调优好的整体产品交付，对于音频不能离场的客户，我们提供完全本地部署版本。剩下的就是只有您能做的部分：把它接入您的平台。这个连接是**位于您自有系统前面的 MCP 服务器**——您不需要采用我们的平台。构建它的参考实现是我们的仓储平台，MIT 许可、开源：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://github.com/suharvest/warehouse_system" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 在 GitHub 上查看 🖱️</font></span></strong></a>
</div>

人脸识别是这里承载责任的关键部分，因为语音指令本身不携带身份：语言模型写入记录的名字完全取决于说话人声称是谁，而只要说出别人的名字就足以伪造。识别可以运行在两个位置，而在它们之间做选择，是本页要帮您做出的主要决策。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/mcp-face-architecture.png" alt="Watcher 采集语音和人脸，SenseCraft 路由 MCP 调用，您的 MCP 服务器在到达后端前应用人脸门控"/>
</div>

:::info 该图中的三个名称
**MCP** 是 [Model Context Protocol](https://github.com/modelcontextprotocol)，即语言模型调用您函数的开放标准。**XiaoZhi** 是 Watcher 运行的开源语音助手栈——唤醒词、语音，以及决定调用您哪一个工具。**SenseCraft** 是您注册设备并获取将其连接到您服务器的 MCP 端点的地方。
:::

## 特性

没有身份的语音控制会留下审计缺口。以下这些属性可以弥补它。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>无法被说出口的身份</h3>
                <p>操作员姓名由人脸匹配产生，而不是由语言模型生成。即便说话人声称自己是别人，写入记录的仍然是他自己的已验证身份，因为这两个值在不同字段中传递。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <div class="info-content">
                <h3>可用的参考实现，而非黑盒</h3>
                <p>整个平台都是开源的——工具层、验证门、向量存储以及管理界面。您不是在对接一个无法审查的规范，而是在复制一套已经在运行的代码。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v13.5m-3.75-13.5v13.5m-3.75-13.5v13.5m11.25-13.5v13.5m3.75-13.5v13.5m-1.5-13.5H9.75v13.5h9.75V5.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>可带或不带算力盒运行</h3>
                <p>先在设备自带的 NPU 上启动，无需额外硬件；当需要更大规模的人员名单或反欺骗能力时，再把识别迁移到局域网推理服务器。切换只是一项配置变更；您的 MCP 工具和数据库无需改动。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>按操作粒度的强制执行</h3>
                <p>规则按操作和仓库分别设置。可以要求出库必须有人脸，而库存查询则不需要；可以把某个操作限制在一个具名允许列表内；也可以为高价值流转提高匹配阈值——这一切都无需改动集成代码。</p>
            </div>
        </li>
    </ul>
</div>

## 系统架构

将验证门放在**MCP 工具层**，位于您的业务逻辑之上。每一个被门控的工具都会先调用验证门，然后才接触您的数据。把它放在这里——而不是塞进每个业务方法内部——才能让这项保证在全局统一生效。

- **SenseCAP Watcher** 采集语音指令，并根据您选择的路径，要么在自身 NPU 上执行人脸匹配，要么在需要时提供一帧摄像头画面。
- **您的 MCP 服务器** 将您的业务操作暴露为工具。在执行受门控的工具前，它会询问您的验证端点并遵从其裁决。策略必须是**失败即关闭（fail-closed）**：除明确允许外的任何结果都应阻止该操作。
- **您的后端** 管理已登记人员、他们的向量、规则和审计日志，并在验证调用中返回裁决以及匹配到的人员姓名。
- **您现有的业务 API** 保持不变。MCP 服务器是一个新的前门，而不是一次重写。

在参考实现中，这些分别是 `mcp/warehouse_mcp.py`（工具层加 `_enforce_face()` 门）、`mcp/mcp_pipe.py`（传输层），以及后端的 `/api/face/verify-mcp`，其后是编排器和匹配器。

### 硬件

两部分。**SenseCAP Watcher** 是人们对话的设备，也是识别他们的人脸摄像头——始终必需。位于同一局域网内的**算力盒（compute box）** 运行识别服务，当您从试点走向规模化时，就需要加上它。

|SenseCAP Watcher for XiaoZhi<br/>*现场的终端设备*|A compute box<br/>*识别服务*|
|:---:|:---:|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-100051523-sensecap-watcher-xiaozhi-en.jpg" alt="SenseCAP Watcher for XiaoZhi" width={280} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-_r235.jpeg" alt="reComputer AI Industrial R2135-12" width={280} height="auto" />|
|ESP32-S3 搭配 Himax WiseEye2 视觉协处理器<br/>摄像头、麦克风和扬声器 · 1.45 英寸触摸屏<br/>2.4 GHz Wi-Fi 和 BLE 5 · Grove I2C 扩展|运行您的建档与匹配所使用的人脸模型<br/>突破 20 人上限并增加反欺骗能力<br/>选择适合的档位——[选项见下文](#选择算力盒)|
|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html)</p>|<p style={{textAlign: 'center'}}>[See the options](#选择算力盒)</p>|

严格来说，算力盒是可选的：Watcher 可以在自身 NPU 上进行人脸匹配，这足以支撑试点。但在实践中，该模式会将每台设备的人数上限限制在 20 人，且无法区分真人和照片，因此生产部署几乎都会加上算力盒。[第 2 部分](#第-2-部分--选择您的验证路径)会完整讨论这项权衡。

关于让 Watcher 上网并与代理配对，请参见 [SenseCAP Watcher for Xiaozhi AI](/cn/sensecap_watcher_for_xiaozhi_ai)。

## 在构建前先试用

您无需读代码就能判断这是否适合您的产品。有三种方式可以上手，按投入成本从低到高排列。

**使用托管实例——体验语音部分。** 在 [warehouse.seeed.cn](https://warehouse.seeed.cn/) 注册账号，您就能直接与一套正在运行的部署对话。将 Watcher 与其配对后，您可以在无需安装任何组件的情况下体验语音到库存的完整流程。请注意，共享部署上**人脸验证是关闭的**，因此它展示的是语音体验，而不是身份体验。

**部署参考设计——体验人脸部分。** 智能仓储参考设计将同一套系统打包为一键部署。由于这是私有实例，可以开启人脸验证，因此这是看到本页真正主题实际运行的最短路径。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_warehouse" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 参考设计 🖱️</font></span></strong></a>
</div>

**自己运行它。** 当你准备好查看内部并开始改造时：

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
docker-compose -f docker-compose.prod.yml up -d
```

:::note 人脸验证需要私有部署
云端和托管构建中默认关闭人脸识别，并按部署单独启用。如果你专门在评估人脸流程，请规划使用参考设计或自托管实例，而不是共享实例。
:::

## 第 1 部分 — 构建你的 MCP 服务器

在你看到它运行之后，再决定要复用多少内容。有两种坦诚的选择。

### 选项 A — 复用桥接层，更换数据源

如果你的领域是仓储，最快的路径是保留参考工具层，只编写一个适配器类。你继承工具定义、语音提示工程——消歧、候选回读、数量确认——以及人脸闸门，只改变数据来源。

```python
from .base import BaseProvider


class MyWmsProvider(BaseProvider):
    PROVIDER_NAME = "my_wms"

    def __init__(self, config: dict):
        super().__init__(config)
        # Point the HTTP helpers at your own system.
        self.base_url = config.get("wms_base_url", "").rstrip("/")
        self._token = config.get("wms_token", "")

    def get_auth_headers(self) -> dict:
        return {"Authorization": f"Bearer {self._token}"}
```

实现六个必需方法——`resolve_name`、`query_stock`、`stock_in`、`stock_out`、`search`、`get_today_statistics`——外加两个可选方法，`query_batch` 和 `move_batch_location`。

:::caution 从 `mcp/providers/base.py` 获取函数签名
工具层以**位置参数**方式传递这些参数，因此请从代码中复制每个函数签名，而不是从任何文字描述中复制。不匹配的签名会在第一次调用时抛出 `TypeError`。
:::

:::danger 在发布前修改错误行为
参考工具层在你的 Provider 加载失败或抛出异常时——网络抖动、缺失文件、错误配置——会回退到其内置的默认 Provider，并记录一个警告，而不是直接失败。在参考实现中，这是一种便利。在你的产品中，这就是数据误路由：一次瞬时错误会把你客户的库存写入发送到错误的数据库，而且是静默发生的。

让适配器失败时高调失败并拒绝该操作。这是你不应该复制的唯一一处参考行为。
:::

### 选项 B — 编写你自己的 MCP 服务器

如果你的领域不是仓储，这六个方法就不合适。使用 FastMCP 定义你自己的工具，只保留 `mcp_pipe.py` 作为传输层。然后你自己实现人脸闸门——参见[第 3 部分](#part-3--what-you-implement)。

```python
@mcp.tool()
def check_order_status(order_id: str) -> dict:
    """
    Check the status of a customer order.
    Use this when the user asks about order tracking or delivery status.

    Args:
        order_id: The unique order identifier (e.g., "ORD-2024-001")
    """
    return api_get(f"/orders/{order_id}/status")
```

来自语音上下文的约束，全部是用惨痛教训换来的：

- **绝不要调用 `print()`。** stdio 是协议通道；写入 stdout 的任何内容都会破坏 JSON-RPC 帧。请使用 `logging`，它会写入 stderr。
- **保持返回值小。** 语言模型会把它们读出来。尽量控制在 1 KB 附近；过大的负载会触及 WebSocket 帧大小限制并导致连接断开。
- **文档字符串就是工具的用户界面。** 模型根据这段文本决定何时调用工具以及如何填充其参数。描述意图，而不仅仅是类型。
- **每次修改后都要重启。** 工具列表只在握手时上报一次。

完整的桥接演练——从 SenseCraft 获取 MCP 端点、创建 API 密钥、启动桥接并用语音测试——在配套页面中：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/mcp_external_system_integration/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> MCP 设置指南 🖱️</font></span></strong></a>
</div>

## 第 2 部分 — 选择你的验证路径

对你的 MCP 工具来说，两条路径看起来完全相同——相同的验证调用，相同的裁决。它们的区别在于人脸匹配发生在哪里，因此在名单规模、鲁棒性和硬件成本上不同。

有两个设置控制这一点，它们彼此独立：

- **`mode`** —— 推理*在哪里*运行：`local`（在设备上）或 `lan`（在你运行的服务上）。
- **`verify_frequency`** —— 验证*发生的频率*：`always`，或每次会话一次（`session`）。

任何组合都是有效的。

| | 路径 1 — 设备端 | 路径 2 — 外部计算盒 |
| :--- | :--- | :--- |
| `mode` 值 | `local` | `lan` |
| 匹配运行位置 | SenseCAP Watcher 内部的 Himax WE2 NPU | 你的局域网推理服务 |
| 额外硬件 | 无 | 每个站点一个计算盒 |
| 已登记人员 | **每台设备 20 人**，受设备端存储的硬性限制 | 无固定上限 |
| 人脸模型 | MobileFaceNet，128 维，INT8——固定 | 由你选择 |
| 防伪 / 活体检测 | **不可用** | 若你的服务上报，则受支持 |
| 匹配阈值 | 全局 | 全局，可按规则覆盖 |
| 最适合 | 试点和小型单班团队 | 生产环境、更大名单、多站点 |

:::caution 路径 1 没有活体检测，而这决定了大多数部署
设备端匹配器只比较人脸；它无法分辨一张脸和这张脸的照片。任何人举着授权操作员的打印照片都能通过。这对试点或低威胁环境是可以接受的，但它不是反欺诈控制——而阻止蓄意的身份错配通常正是这个功能获得预算的原因。

再加上 20 人上限，这意味着**大多数生产部署最终都会走路径 2**。把路径 1 当作验证工作流的方式，而不是成品系统的廉价版本。
:::

:::tip 先本地，之后再迁到 LAN
两条路径使用相同的登记记录、规则和审计日志，当你切换时 MCP 工具完全不用改。但迁移并非零成本：不同的模型意味着不同的 `model_tag`，因此每个已登记的嵌入都必须重新计算。把源图像和每个嵌入一起保存，这样它就变成一个后台任务，而不是重新为所有人登记。
:::

### 路径 1 — 设备端验证

Watcher 自己进行人脸匹配。后端通过局域网向设备推送一个紧凑的人脸库，设备将其存储在闪存中，在验证时后端向设备询问它当前在看谁。

#### 你仍然需要一个嵌入来源

匹配发生在设备上，但*登记*不会。必须有某个东西把每张照片转换成嵌入，而且它必须来自**与设备运行的模型相同的模型**——来自任何其他人脸模型的嵌入会落在不同的向量空间中，无论那个模型多好，都永远不会匹配。所以这条路径不是“你这边完全没有推理”；而是“只在登记时推理，并且必须与固件按位兼容”。

参考实现附带了一个与设备流水线镜像的主机端实现，它与设备端 NPU 在比特级完全一致，以模型标签 `we2-mfnr6-128-v1` 发布。你可以在登记期间将其作为进程内调用，或作为一个小型 HTTP 服务——设置 `FACE_WE2_SIMULATOR_ENABLED=1` 后，它会使用与外部计算盒*相同*的 `/infer` 协议，这样你的登记代码在两条路径上都保持一致。

:::caution 两个部署坑点
模拟器路由**没有任何认证**——绝不要把该端口暴露到你的后端之外。而且 INT8 运行时没有 musl 的 wheel，因此容器需要基于 glibc 的基础镜像；Alpine 将无法安装它。
:::

#### 你要构建的流程

**1. 为每位操作员登记。** 为每个人拍摄一张或多张照片，使用上述 WE2 兼容模型将每张照片转换为嵌入，并将其存储在该人员名下。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-enroll.png" alt="参考实现中的登记对话框：照片上传和仓库范围"/>
</div>

**2. 注册每台物理设备**及其局域网 IP，然后向其推送人脸库。你的系统需要有地方记录设备地址，并为每台设备提供一次推送操作。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/mcp-devices-push.png" alt="在代理连接下注册的物理设备，带有推送人脸的操作"/>
</div>

**3. 在验证时向设备发起请求**，使用 `GET /api/face/current-speaker`——参见 [设备线缆协议](#2-the-device-wire-protocol)。

:::caution 设备必须能从你的后端访问到
验证会直接询问设备。如果你的后端无法访问它，正确的结果是拒绝，而不是绕过。在注册设备时拒绝公共、回环和链路本地地址——一个可以被指向攻击者控制主机的人脸闸门根本称不上闸门。
:::

### 路径 2 — 外部计算盒

识别被移到你网络中的一个 HTTP 服务上。后端获取一张图像——由调用方提供，或从设备摄像头抓取——将其发送到你的服务进行嵌入，然后自己对已登记名单执行余弦匹配。

这消除了 20 人限制，让你可以运行更大、更准确的模型，并启用活体检测。

#### 你的服务要实现的契约

两个端点。两者在配置了令牌时都接受 `Authorization: Bearer <token>`，并且都必须在**10 秒**内响应。

```http
POST {endpoint}/infer
Content-Type: application/json

{"image_b64": "<base64-encoded image>"}
```

```jsonc
// Response
{
  "faces": [
    {
      "embedding": "<base64 float32 little-endian>",
      "det_score": 0.93,
      "live": true,
      "liveness_score": 0.9
    }
  ],
  "face_count": 1,
  "model_tag": "your-model-v1",
  "processing_time_ms": 12.3
}
```

```http
GET {endpoint}/health
```

```jsonc
// Response
{"status": "ok", "backend": "...", "model_tag": "your-model-v1",
 "capabilities": ["detect", "embed"], "embedding_dim": 512,
 "embedding_dtype": "float32"}
```

需要注意的行为：

- 当返回多个人脸时，将使用 `det_score` 最高的那一个。
- 返回 `"live": false` 会将该操作视为伪造尝试并予以阻止。
- 嵌入向量的维度由你自行选择，但对于给定的 `model_tag` 必须保持不变。匹配是按 tag 作用域划分的，因此更换模型意味着发布一个新的 tag。
- 为每条注册记录保留源图像。当 tag 发生变化时，这能让你在后台重新计算整个名册，而不是让所有人重新注册。

#### 你要构建的流程

你的后端获取一张图像，将其发送到 `/infer`，并将返回的嵌入向量与已注册名册进行余弦匹配，匹配范围限定在对应的 `model_tag` 内。将端点 URL 及其令牌作为配置保存下来，并为运维人员提供一个连接测试，它会调用 `/health` 并报告发现的模型 tag —— 参见 [配置界面](#3-配置界面)。

:::caution 将阈值与模型匹配
参考默认值是 `0.45` 的余弦阈值，这是为其自带的 128 维模型选择的。在不同的嵌入空间中，这个数值没有意义。在选择阈值之前，先测量你自己的模型在真实样本对和冒名顶替样本对上的得分分布，并允许按规则覆盖阈值，这样高价值操作就可以要求更严格的匹配。
:::

#### 选择算力盒子

推理服务是一个普通的 HTTP 服务，因此局域网中任何能运行你模型的机器都可以胜任。以下是可直接部署的系统，按价格从低到高排列。

|reComputer RK3576-30|reComputer RK3588-30|reComputer AI Industrial R2135-12|
|------------------|--------------------------|-----------------------|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-rk3576.jpg" alt="reComputer RK3576-30" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-_r235.jpeg" alt="reComputer AI Industrial R2135-12" width={300} height="auto" />|
|Rockchip RK3576<br/>6 TOPS NPU · 8GB LPDDR5<br/>2x GbE — 入门级|Rockchip RK3588<br/>6 TOPS NPU · 8GB LPDDR5<br/>2x 2.5GbE，更快的核心|Raspberry Pi CM5 + Hailo-8<br/>26 TOPS · 8GB · 32GB eMMC<br/>IP40，-20 至 65 °C，导轨安装|
|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)</p>|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)</p>|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html)</p>|

人脸识别是一个轻量级负载，因此入门级盒子对于单个站点来说已经足够 —— 两款 Rockchip 型号都配备相同的 6 TOPS NPU，而 RK3588 带来的是更快的 CPU 核心和 2.5GbE，而不是更高的推理吞吐量。如果需要在导轨工业机箱中使用专用的 Hailo 加速器，则选择 R2135。

:::note 下单时注意产品名称
在这个产品家族中，名称包含 **AI Industrial** 的型号是主动散热，而普通的 **Industrial** 系列是无风扇的。它们只差一个单词，其余几乎完全相同。上表中的盒子带风扇；如果部署需要被动散热，请改为订购 [reComputer Industrial R2135-12](https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html)，它同样搭载 Hailo-8，但采用无风扇机箱。
:::

#### 完全本地部署

上面的盒子覆盖了人脸识别。默认情况下，*语音* 部分 —— 语音识别、选择工具的语言模型、语音合成 —— 运行在云端。对于那些必须对“音频是否会离开我们的网络？”给出否定答案的客户，我们也提供整条语音处理流水线在本地运行的方案，运行在一台更大的盒子上，与人脸模型一起托管。决定规格的是内存容量，而不是 TOPS。

|reComputer Robotics J4012|reComputer Mini J5012 with GMSL|NVIDIA Jetson AGX Thor Developer Kit|
|------------------|--------------------------|-----------------------|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110310-recomputer-robotics_2.jpg" alt="reComputer Robotics J4012" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg" alt="reComputer Mini J5012 with GMSL" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-kit-3.png" alt="NVIDIA Jetson AGX Thor Developer Kit" width={300} height="auto" />|
|Jetson Orin NX 16GB<br/>最高 100 TOPS · 16GB LPDDR5<br/>**一次只支持一段对话**|Jetson AGX Orin 64GB<br/>64GB LPDDR5 · 64GB eMMC<br/>19-48V 输入，10GbE，GMSL 和 CAN|Jetson AGX Thor，Blackwell GPU<br/>128GB LPDDR5X，带宽 273GB/s<br/>最大模型，最长上下文|
|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)</p>|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html)</p>|<p style={{textAlign: 'center'}}>[立即获取!](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)</p>|

:::caution J4012 能运行整套栈，但一次只能处理一个会话
16 GB 足以容纳整条流水线，因此单个 Watcher 运行良好。但它不能同时服务多段对话 —— 第二位操作员在同一时刻与第二台设备对话，就是它无法做到的。按“同时在用的设备数量”而不是“安装的设备数量”来规划容量。
:::

单站点部署选 J4012；当盒子还需要使用车辆或工厂电源并与工业总线通信时，选 Mini J5012；当你需要并发和单机可服务的最大模型时，选 Thor。无论哪种方案，这都是软硬件一体的整体提供 —— 关于本地部署方案，请[联系我们](mailto:solution@seeed.cc)，而不是自行拼装。

## 第 3 部分 — 你要实现的内容

有五个组件运行在你这边。参考实现覆盖了前四个，因此本节可视为你需要阅读并复现内容的导图。

### 1. 验证端点

你的 MCP 服务器在每个受控工具前调用一个端点，由你的后端进行响应。保持下面的结构不变，这样参考工具层就能在无需修改的情况下对接你的系统。

请求：

```jsonc
POST /api/face/verify-mcp
{
  "operation": "stock_out",        // required — the rule key
  "warehouse_id": 1,
  "request_id": "…",               // for audit correlation
  "image_b64": "…",                // server-inference path
  "embedding_b64": "…",            // or a precomputed embedding
  "embedding_model_tag": "…",
  "device_id": "…"                 // from the transport, never from the model
}
```

响应 —— 始终包含以下五个键：

```jsonc
{
  "status": "pass" | "deny" | "skipped",
  "failure_reason": "…",           // null when it passed cleanly
  "confidence": 0.87,
  "matched_subject_id": 12,
  "matched_subject_name": "Zhang San"
}
```

`pass` 和 `skipped` 允许该操作；`deny` 阻止该操作。

:::caution 失败时一律拒绝，并注意时间预算
将每一种错误 —— 404、超时、请求体格式错误 —— 都视为 `deny`，绝不要视为允许。同时让你的处理逻辑远低于 **18 秒** 的客户端超时；超过这个时间，调用方会记录一次传输失败并无条件拒绝。为设备往返时间预留预算：读取当前说话人约 6.5 秒，抓取一帧约 8 秒，访问局域网推理服务约 10 秒。
:::

有两个对落地采用很重要的 `status` 值：当功能关闭或没有规则要求该操作必须有人脸时，返回 `skipped`。这样闸门就是透明的，你可以先上线 MCP 服务器，之后再开启验证，而无需改动工具代码。

### 2. 设备线协议

这一部分你无法从自己的系统中推导出来，因为它由设备固件使用。共有三个端点，全部通过局域网上的普通 HTTP 提供。

**推送人脸库**（仅路径 1）—— `POST http://<device-ip>:80/api/face/batch-update`。注意端口固定为 80。

```jsonc
{
  "model_tag": "we2-mfnr6-128-v1",
  "embedding_format": "fp16",
  "faces": [{"name": "Zhang San", "subject_id": 12, "embedding_b64": "…"}],
  "match_threshold": 45,              // int, 0-100
  "identify_mode": "local",           // or "lan"
  "identify_endpoint": "…",
  "identify_token": "…",
  "pull_token": "…"                   // per-device, you generate it
}
```

嵌入向量在传输时使用 `fp16` —— 128 维对应 256 字节 —— 而你的数据库中保留权威的 `float32`。`model_tag` 不匹配会导致整批数据被拒绝。

**读取当前说话人** —— `GET http://<device-ip>/api/face/current-speaker?fresh=0`，请求头 `X-Face-Token: <pull_token>`，返回 `{valid, name, subject_id, similarity, mode, age_ms}`。要求 `valid` 严格为 true。

**拉取摄像头帧** —— `GET http://<device-ip>/api/face/capture`，同样的请求头，返回 `image/jpeg`。

:::caution 推送端点未做认证
设备端的 `batch-update` 没有任何认证。同一网络中的任何人都可以覆盖人脸库。请将这些设备放在可信或隔离的网络段中。
:::

### 3. 配置界面

总得有人来选择模式、阈值以及哪些操作需要人脸。你需要为此提供界面。参考实现中的界面在这里展示，仅用于**说明你自己的 UI 必须暴露哪些决策点** —— 你不会登录到我们的系统中来配置。

识别模式、验证频率、置信度阈值以及远程端点：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-config-verify-mode.png" alt="recognition mode, verification frequency, confidence threshold and remote endpoint"/>
</div>

按操作划分、以仓库为作用域的规则，带有允许列表以及可选的阈值覆盖：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-rules.png" alt="per-operation face rules with warehouse scope, allow-list and threshold override"/>
</div>

一组值得复制的规则集：

| 规则键 | 覆盖范围 |
| :--- | :--- |
| `stock_in` | 入库 |
| `stock_out` | 出库 |
| `move_batch_location` | 批次搬移 |
| `query` | 所有读操作——库存查询、批次查询、搜索、统计 |

空的允许列表意味着所有已登记且处于激活状态的人员都被接受。非空的允许列表会将操作限制为这些人员，因此即使对其他任何人的匹配非常自信，也仍然会被拒绝。

### 4. 审计追踪

记录每一次决策，而不仅仅是失败——通过的记录才是证明某次操作已被授权的依据。记录匹配到的人员、置信度、裁决结果以及原因。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-audit-log.png" alt="face authentication audit log showing matched person, confidence and verdict per operation"/>
</div>

在你的交易表中，将已验证的姓名保存在单独的一列中：

```sql
-- Snapshot of the operator name resolved by face recognition.
ALTER TABLE <your_inventory_transactions>
  ADD COLUMN actual_operator VARCHAR(255) NULL;
```

三个约束条件，而第三个才是关键所在：

1. **它必须允许为 NULL。** 当验证被禁用，或者没有任何规则要求验证时，该值为 `NULL`。
2. **存储姓名，而不是外键**——这是一个快照，这样即使该人员被删除，记录仍然能被正确阅读。
3. **绝不要把它和模型填充的操作员字段合并。** 那个字段反映的是说话人*说*自己是谁，可能是假的。而这个字段反映的是摄像头*看到*的是谁。把它们合并，会把一个可信的值折叠进一个不可信的值里，并丢掉了让人脸验证值得构建的唯一区分。

### 5. 生物特征数据

因为这一侧由你构建和托管，**你就是数据控制者**。有四个决策需要你主动做出，而不是被动继承：

- 每位登记人员的**合法依据和同意**。在工作场所使用员工生物特征数据，在某些司法辖区还可能触及劳动法以及职工代表委员会协商。
- **保留与删除。** 删除一个人员时必须移除其向量嵌入，而不仅仅是将一行记录设为停用。
- **是否保留登记照片。** 本页建议保留源图像，以便在模型变更时可以重新计算人脸库。这是一种在隐私代价之上的运维便利——取舍由你决定，并且值得明确地做出这个决定。
- **将向量嵌入视为个人数据。** 它们是数值，但可以识别个人，在大多数司法辖区都按个人数据进行监管。

## 一个值得了解的陷阱

在参考实现中，人脸闸门和数据 Provider 读取的是**同一个** `api_base_url` 配置字段。

将 `api_base_url` 指向你自己的系统，但又没有在其中实现 `/api/face/verify-mcp`，闸门就会收到 404。由于策略是失败即关闭，**所有工具都会停止工作，包括只读查询**——这是一种令人困惑的失败，因为从症状上看不出任何与人脸识别相关的线索。

| `api_base_url` 指向 | 闸门结果 | 后果 |
| :--- | :--- | :--- |
| 你的系统，但没有 `/face/verify-mcp` | `deny` · `http_404` | 所有工具被阻断 |
| 一个不可达的地址 | `deny` · `transport_error` | 所有工具被阻断 |
| 空字符串 | `skipped` · `no_api_base` | 工具仍可运行，但 Provider 也会失去其基础 URL |
| 一个实现了该端点的后端 | 由你的规则决定 | 正常 |

有两种出路。在你自己的后端中实现该端点，反正最终也要指向那里——如果你还没准备好做验证，可以先返回一个常量 `skipped` 的桩实现：

```python
@app.post("/api/face/verify-mcp")
def verify_mcp():
    return {"status": "skipped", "failure_reason": "feature_disabled",
            "confidence": None, "matched_subject_id": None,
            "matched_subject_name": None}
```

或者拆分字段，保留 `api_base_url` 给闸门使用，并从一个自定义键中读取你自己的地址：

```yaml
provider: "my_wms"
api_base_url: "http://your-backend:2124/api"           # serves the face gate
auth:
  type: api_key
  key: "wh_xxx"
wms_base_url: "https://your-wms.example.com/api/v1"    # your business API
wms_token: "your-token"
```

然后在你的 Provider 构造函数中重写 `base_url`，如[第 1 部分](#option-a--reuse-the-bridge-swap-the-data-source)所示。两套凭据保持相互独立。

## 常见问题

### 1. 推送报告发送的人脸数量为零

人脸库会按模型标签进行过滤。只有带有 `we2-mfnr6-128-v1` 标签的登记记录才有资格进行设备端推送，因此针对带有不同标签的远程端点创建的登记会被静默排除——请重新登记，或等待后台重新计算完成。

### 2. `actual_operator` 在我们的记录中总是空的

如果没有任何规则要求该操作必须有人脸，或者验证被关闭，这是预期行为。为该操作创建一条规则即可开始记录。

### 3. 我们换成了自己的数据源，但写入仍然落在参考数据库中

参考工具层在出现任何错误时会回退到其默认 Provider，并记录一条警告，而不是直接失败。检查 MCP 日志中的该警告——并参见[选项 A](#option-a--reuse-the-bridge-swap-the-data-source)，在上线前修改这一行为。

### 4. 验证很慢或间歇性被拒绝

有三个超时限制了整个链路：从 MCP 客户端到后端 18 秒，从后端到远程推理服务 10 秒，以及从后端到设备大约 6.5 到 8 秒。这些是上限，而不是典型延迟——请测量你自己的延迟，因为此时有人正站在终端前等待。如果你的推理服务接近 10 秒，请减小模型大小或图像分辨率。

### 5. 我们能否按会话而不是按操作进行一次性验证？

可以。将验证频率设置为 `session`，第一次成功的检查会在该会话中被缓存，最长 10 分钟。

要理解你在做怎样的权衡：在这 10 分钟内，会话中的每一次操作都会被归因于一开始那次匹配到的人。任何继续该会话的人都会继承这个身份。在需要避免在长时间拣货过程中反复提示的场景下使用 `session`，而在每个单独操作都必须被独立证明的场景下使用 `always`。

## 资源

- [GitHub 上的 warehouse_system](https://github.com/suharvest/warehouse_system)——参考实现。从 `mcp/README.md` 开始了解集成层，从 `mcp/providers/base.py` 了解适配器约定，再查看后端的人脸编排器以了解验证逻辑
- [将语音 AI 引入你的业务系统（MCP）](/cn/mcp_external_system_integration)——本页所基于的 MCP 网桥搭建
- [使用 MCP 的人脸识别](/cn/face_regonition_with_mcp)——设备级操作指南：烧录固件、搭建基于 Hailo 加速的人脸识别服务，以及管理人脸数据库
- [MCP 端点搭建指南](/cn/mcp_endpoint)——创建和管理 MCP 端点
- [Model Context Protocol](https://github.com/modelcontextprotocol)——协议规范

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
