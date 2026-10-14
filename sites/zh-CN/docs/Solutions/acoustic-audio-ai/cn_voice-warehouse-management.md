---
description: 在边缘硬件上用语音操作仓库管理系统——需要哪些设备、MCP 怎么把语音接到库存、五个套餐分别怎么部署，以及在 reComputer R2000 系列上的设备实测压测数据
title: 边缘硬件上的语音仓库管理方案：搭建、部署与实测数据
keywords:
  - 语音仓库管理系统
  - 边缘 WMS
  - MCP 库存管理
  - 免手持 出入库
  - 离线语音助手
  - SenseCAP Watcher
  - reComputer
  - Jetson
  - EdgeLLM
  - Qwen3
  - Model Context Protocol
  - ERP WMS 对接
image: https://files.seeedstudio.com/Solution/landpage_asset/smart-warehouse-management/og-v1.jpg
slug: /solutions/voice-warehouse-management
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/solutions/voice-warehouse-management/
generated_from: sensecraft-solutions@smart_warehouse
---

:::caution[使用须知]
这是作业辅助工具，不是认证的库存记账系统；REST 接口没有离线队列，网络或服务中断期间的请求直接失败，恢复后不补发。
:::

## 这套方案是干什么的

作业员站在收货口说一句"入库 10 箱苹果"，货架上的 SenseCAP Watcher 听到后，一条入库单写入同一栋楼里 reComputer 网关上的仓管数据库。问"苹果还剩多少"，设备直接语音播报。不用打字、不用翻菜单，手不离开货物。

适用于流水发生在离键盘很远的地方：收货口、货架通道、叉车驾驶位，以及因为培训成本太高一直没上 WMS 的小仓库。

- 开源实现：[github.com/suharvest/warehouse_system](https://github.com/suharvest/warehouse_system)
- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/smart_warehouse)

语音和数据库之间用 **MCP（Model Context Protocol）** 连接。仓管系统把每个库存操作发布成一个 MCP 工具，Watcher 上的语音 agent 作为 MCP 客户端连上这个端点。新增一个语音动作只需加一个工具，不用重训语音模型；对接已有的 ERP/WMS，就是把对方的数据接口映射到同一套工具上。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/Solution/landpage_asset/smart-warehouse-management/hero-banner-v4.png" alt="作业员对着装在货架上的 SenseCAP Watcher 说话完成出入库"/>
</div>

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Watcher 装上就能用</h3>
                <p>SenseCAP Watcher 自带语音 agent 和人脸识别固件，烧录后装在工位即可语音出入库，并核验作业员身份。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>数据留在现场</h3>
                <p>仓管数据库跑在现场的 reComputer 网关上。套餐三把识别、大模型和合成也放在厂区，部署后不调用任何外部服务。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>开源，可接已有 ERP/WMS</h3>
                <p>仓管系统代码开源。对接已有系统是把对方的数据接口映射到同一套 MCP 工具，量级是几十行映射代码。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>加指令不用重训模型</h3>
                <p>新增一个语音动作就是注册一个 MCP 工具，Watcher 固件不用改。</p>
            </div>
        </li>
    </ul>
</div>

### 看板上能看到什么

一句话说完，结果出现在网关的看板上。库存页列出每个品类的当前数量与最近一次变动：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/dashboard-657fc403.png" alt="仓管看板：各品类当前库存、最近变动时间与状态"/>
</div>

流水页是逐条的出入库记录，带批次号、操作者与来源（语音或 REST）：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/records-944f9e33.png" alt="出入库流水：逐条记录的批次号、数量、操作者与来源"/>
</div>

作业员名单在用户页维护，人脸核验以这份名单为准：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/users-8e30f2d0.png" alt="用户页：作业员名单与权限，人脸核验以此为准"/>
</div>

## 需要哪些硬件

三类设备。买哪几样，取决于数据和语音 AI 允许放在哪里。

**① 语音终端：SenseCAP Watcher。** 所有套餐必选，一个作业工位一台。它有两颗处理器：ESP32 跑小智语音 agent（唤醒词、录音、推流、MCP 客户端），Himax WE2 跑人脸识别固件做作业员核验。

**② 边缘网关。** 跑仓管系统，自建套餐里还跑 MCP 端点。它决定人脸识别能否放在网关侧、一台主机能带几个点位。

**③ 本地 AI 主机。** 只有识别、大模型、合成都必须留在厂区时才需要。

| | 型号 | 在本方案里的角色 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991275-sensecap-watcher-w1-b_1.jpg" alt="SenseCAP Watcher" width="110" /> | [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-B-p-5980.html) | 语音终端、MCP 客户端、端侧人脸识别 | 必选，一个工位一台 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html) | 跑仓管系统的边缘网关 | 库存数据留在本地、20 人以内、人脸识别由 Watcher 端侧完成 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image_6.jpg" alt="reComputer Industrial R2135-12" width="110" /> | [reComputer Industrial R2135-12](https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html) | 带 Hailo-8 加速卡的边缘网关 | 超过 20 人，或者需要活体检测 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) | 一台机器同时跑仓管系统、人脸识别和自建语音服务 | 2–3 个点位共用一台主机 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-100032662--recomputer-robotics-j5012-with-gmsl_1__1.jpg" alt="reComputer Robotics J5011" width="110" /> | [reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html) | 本地大模型与语音，不调用任何外部服务 | 厂区必须离线 |

Watcher 端侧最多存 **20** 张人脸模板。超过 20 人，识别要放到网关侧，所以 20 人以内选 R1125，超过 20 人选带 Hailo-8 的 R2135。

其他前置条件：Watcher **只连 2.4 GHz Wi-Fi**（只开 5 GHz 的 SSID 在配网扫描里不出现），网关要在同一局域网内。套餐三的部署步骤会预检 NVIDIA container runtime，以及约 **10 GB** 空闲磁盘（语音模型 + LLM engine 文件）。

### 选型排他边界

- **全离线端侧大模型环境**：若涉密仓库或无外网环境下需要使用语音大模型，请勿选择试用版或仅带网关的 Tier 1/2A 套餐，必须选配带 reComputer J4012（Orin NX 16GB）的 Tier 3 纯局域网套餐。
- **弱网环境无写入队列**：仓管 REST 接口当前未设服务端离线队列，网络中断期间客户端发出的出入库写入不会自动补发，客户端需自行做离线事务缓存。

## 现场怎么部署

三步：装 Watcher 并烧录固件、在网关上启动容器、接通语音链路。

### 一、装 Watcher：装在流水发生的地方

:::tip[装在作业点]
Watcher 装在收货口、货架通道、叉车驾驶位这些作业员实际办理出入库的位置。装在办公室，作业员就要记住数量再走过去补录。
:::

烧录走 USB-C，设备枚举为 WCH USB-UART 桥（`0x1a86:0x55d2`）。两份固件各烧一颗处理器：小智语音 agent 烧进 ESP32，人脸识别固件烧进 Himax WE2。

### 二、把网关跑起来

仓管系统是一个 Docker 服务。部署步骤按套餐区分，在可部署方案页选完配置后可以直接下载对应的应用包。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/smart_warehouse" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

部署可以通过 SSH 连到网关执行，也可以直接在网关本机执行。现有库存可以在首次启动时用提供的 Excel 模板导入。

部署完成后看板在 `http://GATEWAY_IP:2125`，容器健康检查是同端口的 `GET /health`。

### 三、接通语音链路

套餐 0、一、二A 用 SenseCraft 下发的 MCP 端点地址。套餐二B、三自建 MCP 端点在 `18004`，语音服务在 `18000`（管理控制台 `18003`）。套餐三再加 EdgeLLM（`8000`）与 OpenVoiceStream（`8621`），部署完成后不调用任何外部服务。

## 有哪些接口

两个对接面：

**MCP 端点（`18004`）：给语音侧用。** agent 能做的每件事都是这个端点上的一个工具。扩展指令就是再注册一个工具，Watcher 固件不动。对接已有 ERP/WMS，就是按同一套工具实现你系统的数据接口，量级是几十行映射代码。说法上的偏差由模糊匹配归到最接近的已注册指令，不直接拒绝。

**REST API（`2125`）：给其余系统用。** 库存清单、出入库流水、agent 状态都走 HTTP。

| 接口 | 端点 / 端口 | 内容 |
|---|---|---|
| 看板 + REST API | `http://GATEWAY_IP:2125` | 库存清单、出入库流水、agent 连接状态 |
| 健康检查 | `http://GATEWAY_IP:2125/health` | 仓管服务就绪后返回 `200` |
| MCP 端点 | `18004` | 库存操作以 MCP 工具形式发布 |
| 库存数据库 | `warehouse_data` 卷内的 SQLite，`/data/warehouse.db` | 挂载或导出，供外部 BI / ERP 任务读取 |
| 语音服务 | WebSocket `18000`，管理控制台 `18003` | Watcher 音频流（套餐二B、三） |
| 本地 AI | `8000` EdgeLLM（OpenAI 兼容）、`8621` OpenVoiceStream | 对话补全；识别、合成与声纹（套餐三） |

访问按 API key 角色与租户隔离。VIEW key 调写接口返回 `403`，跨租户读写都返回 `403`，两项均已实测，见「性能与实测数据」。

## 性能与实测数据

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/warehouse_system" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>warehouse_system</font></span></strong>
    </a>
</div><br />

### 运行时与关键参数

| 部署位置 | 大模型 | TTS / ASR | 网络 |
|---|---|---|---|
| SenseCraft 云 | Seeed 托管 | Seeed 托管 | 需要外网 |
| 自选 API | 任意 OpenAI 兼容端点（如 DeepSeek） | OpenAI · Azure Speech · 火山引擎 · 阿里云 · Edge TTS | 需要外网 |
| 本地 Jetson | EdgeLLM：Qwen3.5-4B，profile `qwen35-4b-gdn-mtp`，8k engine | OpenVoiceStream（识别 + 合成 + 声纹） | 纯局域网 |

本地镜像面向 JetPack 6.2 / TensorRT 10.3 构建。

- `BUSINESS_RATE_LIMIT`：出库等业务接口的限流阈值，默认 600 次/分钟，按已认证身份（API key / 会话）计数，取不到身份时按来源 IP。注册、找回密码、设备校验的防枚举限速按 IP 计数。
- 批次号 `batch_no`：格式 `YYYYMMDD-NNN`，原子取号，并发入库时写入串行化。

### 仓管 REST 接口实测

设备：reComputer R2000 系列（arm64），跑仓管容器。条件：每档 60 s，1 个仓库、50 个种子物料、SQLite 后端；请求经 Tailscale 广域网链路。

| 操作 | 档位 | 结果 |
|---|---|---|
| `GET /api/materials/list` | 并发 10 | p95 404 ms，p99 2.7 s，错误率 0% |
| `GET /api/materials/list` | 并发 20 | p95 824 ms，p99 5.3 s，错误率 0% |
| `GET /api/materials/list` | 并发 50 | p95 5.5 s，p99 8.7 s，错误率 0% |
| `POST /api/materials/stock-in` | 并发 5 / 10 / 20 | 错误率均为 0%；共 1481 个批次，批次号 0 重复；p95 634 ms – 4.96 s |
| `POST /api/materials/stock-out` | 并发 10 / 20 / 50，两个 API Key 共用一个出口 IP | 默认 600 次/分钟阈值内 0 次 HTTP 429；单身份约 5–6 次/秒 |
| 服务中断 | 约 10 req/s 查询流量，容器重启中断 34 s | 中断期间 100% 请求失败，无排队无补发；恢复后约 1 s 内完全恢复，无积压、无脏数据 |
| 角色与租户隔离 | 4 次单发探针 | 4/4 符合预期：VIEW key 写 `403`、读 `200`，跨租户写 `403`、读 `403` |

复现：`runs/2026-09-05-load/`、`evaluation/runs/2026-09-06-a2-retest/results.md`

### 本地大模型吞吐

| 设备 | 模型 | 吞吐 | 条件 |
|---|---|---|---|
| reComputer Robotics J5011 | EdgeLLM Qwen3.5-4B | 约 16 tokens/s | 上游数字，未附运行日志 |

### 已知退化

- **库存查询延迟从并发 20 开始变差。** p95 从并发 10 的 404 ms 升到并发 20 的 824 ms，并发 50 时 5.5 s，已无法用于交互。
- **REST 接口没有离线队列。** 网络或服务中断期间的请求直接失败，恢复后不补发；重连与退避只覆盖 MCP 语音 WebSocket 通道。缓解方式：网关侧保证网络可用（有线优先、UPS 供电、服务与客户端在同一局域网），把不可用窗口压到设备重启时间；或在客户端做写入队列，联通后按顺序补发、按批次号去重（客户端队列未实现）。

### 下一步

- 在 reComputer R1125-10 网关上补跑仓管 REST 接口负载实测。

## 数据与素材出处

- 压测数字、测试条件与已知限制：上游 `sensecraft-solutions@smart_warehouse` `description_zh.md` 的"实测边界"与"已知限制"两节。
- 本地大模型吞吐（约 16 tokens/s，reComputer Robotics J5011）：上游 `guide.md`「Preset: Tier 3 · Premium」一节。
- 设备角色、套餐构成与加速卡要求：上游 `solution.yaml` 的 `intro.device_catalog` 与 `intro.presets`。
- 仓管系统源码：[github.com/suharvest/warehouse_system](https://github.com/suharvest/warehouse_system)。
- 产品图：Seeed Studio 产品库（media-cdn.seeedstudio.com）。
- 场景图：Seeed Studio 方案素材（files.seeedstudio.com）。
