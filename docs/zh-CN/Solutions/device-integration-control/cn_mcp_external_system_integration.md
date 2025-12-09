---
description: 通过 MCP 将外部业务系统与 SenseCAP Watcher 集成的指南
title: 为您的业务系统带来语音 AI（MCP）
sidebar_position: 6
keywords:
- MCP
- API
- Integration
- Warehouse
- Voice Control
- Watcher
- External System
- AI Enabled Devices
- Qwen
- OA
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /cn/mcp_external_system_integration
last_update:
  date: 12/06/2025
  author: Spencer
tags:
  - mcp
  - agents
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 概述

本指南演示如何使用模型上下文协议（[MCP](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh/00-Introduction/README.md)）将语音 AI 与您现有的软件生态系统连接起来。通过将您的 REST API 包装为 MCP 工具，您可以让 ***SenseCAP Watcher*** 直接与您的业务逻辑交互——无论是仓库管理系统（WMS）、CRM、ERP 还是自定义 IT 仪表板。

<table class="table-center">
  <tr>
      <th>智能空间交互</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/wms-watcher-scenario.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/smart-spatial-interaction-zh-hans" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> 解决方案套装 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com.cn/solutions/voicecollectionanalysis-zh-hans" target="_blank">智能空间交互</a></h2>
      <p>语音转 API：将意图转化为行动。无需从头构建新应用。只需将您现有的 WMS 端点暴露给 Watcher，即可为您的员工提供即时语音控制。</p>
  </div>
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
            </div>
            <div class="info-content">
                <h3>真正的解放双手生产力</h3>
                <p>操作员可以在戴手套或驾驶叉车时查询库存或记录发货。保持眼睛专注于任务，双手专注于操作，实现最大的安全性和效率。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                    <path d="M16 21h5v-5"></path>
                </svg>
            </div>
            <div class="info-content">
                <h3>零延迟数据同步</h3>
                <p>消除纸质记录的延迟。语音命令触发直接 API 调用到您的 ERP，确保库存数据在物品移动的瞬间就同步更新。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
            </div>
            <div class="info-content">
                <h3>通用系统互操作性</h3>
                <p>无论您运行的是 SAP、Oracle 还是自定义 SQL 后端，只要您的系统有 API，Watcher 就能控制它。无需迁移遗留系统即可采用 AI。</p>
            </div>
        </li>
    </ul>
</div>

## 架构

在编写代码之前，理解数据流是至关重要的。集成遵循桥接模式，其中 **MCP 服务器** 充当 AI 和您内部网络之间的安全网关。

<div align="center">
  <img class='img-responsive' width={480} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/excalidraw-architecture.png" alt="excalidraw-architecture"/>
</div>

**关键组件：**

1. **Watcher 设备：** 捕获自然语言意图（例如，"检查库存"）并将其发送到云端。
2. **MCP 端点（云端）：** 由 SenseCraft 提供的安全隧道，将意图转发到您的本地环境。
3. **MCP 服务器（本地桥接）：** 在您的机器上运行的轻量级 Python 脚本。它将 AI 意图转换为特定的代码函数。
4. **后端 API：** 您现有的业务应用程序（FastAPI、Flask 等），执行实际的逻辑。
5. **基础设施：** 您的后端依赖的数据库或其他服务。

**通用集成场景**：

虽然本指南使用 **仓库系统** 作为参考实现，但该架构具有通用性：

| **行业**    | **语音命令**                 | **底层系统操作** |
| --------------- | --------------------------------- | ---------------------------- |
| **物流**   | *"入库 50 个单位。"*            | `POST /api/inventory/add`    |
| **销售（CRM）** | *"将交易状态更新为已关闭。"* | `PUT /api/deals/{id}/status` |
| **IT 运维**      | *"重启测试服务器。"*   | `POST /api/servers/restart`  |

## 演示 1：语音控制仓库

我们将通过在您的本地机器上运行模拟的 **仓库后端** 和 **MCP 桥接** 来模拟业务环境。此演示支持：

- 🗣️ **库存检查：** "我们有多少个小智标准版单位？"
- 🗣️ **数据录入：** "入库 5 个 Watcher 小智单位。"
- 🗣️ **业务洞察：** "今天的库存摘要是什么？"

### 前提条件

- **硬件：** SenseCAP Watcher，计算机（Windows/macOS/Linux）。
- **软件：** Python 3.10+，Git。
- **账户：** [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai/home) 账户。

:::note 设置
确保您的 SenseCAP Watcher 已通过 [SenseCraft AI 设备中心](https://sensecraft.seeed.cc/ai/device/local/37) 配置了 **小智 AI**。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/sensecap-setup.png" alt="sensecap-setup"/>
</div>

:::

### 步骤 1：部署目标系统

首先，我们需要启动模拟业务后端。我们提供自动化脚本来处理依赖项（使用 `uv`）和服务启动。

:::tip 安装 uv
使用以下命令安装 uv，一个轻量级的 Python 环境管理器：

```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```

:::

**1. 克隆仓库**：

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

**2. 启动服务**：

选择您的操作系统来自动安装依赖项并启动后端。

<Tabs>

<TabItem value="mac" label="Linux/macOS" default>

运行 shell 脚本来启动后端和前端：

```shell
# Navigate to the project directory warehouse_system
chmod +x start.sh
./start.sh # which runs the run_backend and frontend/app.py
```

</TabItem>

<TabItem value="win" label="Windows">

运行 PowerShell 脚本来启动后端和前端：

```powershell
# Navigate to the project directory warehouse_system
.\start.ps1
```

</TabItem>

</Tabs>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/running-warehouse-demo-successfully.png" alt="running-warehouse-demo-successfully"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="specific-location-management"/>
</div>

- **验证：** 打开浏览器并访问 `http://localhost:2124/docs`。如果您看到 API 文档页面（如上所示），您的"业务系统"正在运行。

### 步骤 2：配置 MCP 桥接

现在，我们将后端连接到 AI。桥接代码位于 `mcp/` 目录中。

**1. 获取 MCP 端点**：

从 [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai/home) -> Watcher Agent -> Configuration 获取您的 **MCP 端点地址**（`wss://...`）。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="MCP_EndPoint"/>
</div>

**2. 配置并运行**：

打开一个 **新的终端窗口**（保持之前的后端终端运行）并导航到 `mcp` 文件夹。

<Tabs>

<TabItem value="mac" label="Linux/macOS" default>

```Bash
cd mcp

# 1. Set the Endpoint (Replace with your actual address)
export MCP_ENDPOINT="wss://your-endpoint-address"

# 2. Start the Bridge
./start_mcp.sh
```

</TabItem>

<TabItem value="win" label="Windows (PowerShell)">

```PowerShell
cd mcp

# 1. Set the Endpoint (Replace with your actual address)
$env:MCP_ENDPOINT="wss://your-endpoint-address"

# 2. Start the Bridge
./start_mcp.ps1
```

</TabItem>

</Tabs>

如果成功，您将看到消息：`MCP Service Started Successfully!`。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/mcp-bridge-start-successfully.png" alt="mcp-bridge-start-successfully"/>
</div>

### 步骤 3：验证

一切都已连接。现在，使用 SenseCAP Watcher 与您的本地系统进行交互。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_connected.png" alt="MCP_connected"/>
</div>

现在我们可以使用您的 Watcher 设备测试集成！

### 语音命令示例

| 语音命令                                          | 预期操作                                       |
| ------------------------------------------------------ | ----------------------------------------------------- |
| "查询小智标准版的库存"          | 调用 `query_xiaozhi_stock` 工具                      |
| "我们有多少小智专业版？"    | 调用 `query_xiaozhi_stock` 专业版 |
| "入库 5 台 Watcher 小智标准版" | 调用 `stock_in` 工具，数量=5                 |
| "出库 3 台小智用于销售"                  | 调用 `stock_out` 工具，数量=3                |
| "今天的库存汇总是什么？"                    | 调用 `get_today_statistics` 工具                     |
| "列出所有小智产品"                            | 调用 `list_xiaozhi_products` 工具                    |

**幕后发生了什么？**

| **组件**  | **操作**                                         |
| -------------- | -------------------------------------------------- |
| **Watcher**    | 将语音音频发送到云端。                        |
| **MCP Bridge** | 接收意图，确定工具为 `query_stock`。 |
| **系统**     | 执行 `GET /materials/product-stats`。           |
| **结果**     | Watcher 说话：*"当前库存为 150 台。"*    |

### 预期响应

**查询库存：**

> "库存查询成功。Watcher 小智标准版当前在 A-01-01 位置有 150 台库存。库存状态正常。"

**入库：**

> "成功添加 5 台 Watcher 小智标准版。之前数量为 150，新数量为 155。"

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## 为您的系统定制

仓库演示只是一个模板。要集成您自己的**订单管理系统**、**CRM** 或 **IT 仪表板**，请按照以下步骤修改桥接代码。

### 1. 指向您的真实服务器

打开 `mcp/warehouse_mcp.py`。第一步是告诉桥接器您的实际 API 位置。

```python
# Change this line to point to your actual production server IP/Domain
# API_BASE_URL = "http://localhost:2124/api" 
API_BASE_URL = "http://192.168.50.10:8080/api/v1" 
```

### 2. 定义自定义工具

要添加新的语音命令，您不需要训练模型。您只需要编写一个 Python 函数。

使用 `@mcp.tool()` 装饰器来包装您的 API 调用。

**工作流程：**

1. **识别操作：** 您想通过语音控制哪些操作？（例如，"检查订单"、"重启服务器"）。
2. **记录 API：** 确保您知道端点 URL 和参数（例如，`GET /orders/{id}`）。
3. **编写包装器：** 使用下面的模式创建 Python 函数。

**示例：适配订单管理系统**：

:::tip "文档字符串"是魔法
AI 读取 Python **文档字符串**（`""" ... """` 内的文本）来决定**何时**调用您的函数。要描述性！
:::

```Python
@mcp.tool()
def check_order_status(order_id: str) -> dict:
    """
    Check the status of a customer order.
    Use this when the user asks about order tracking or delivery status.

    Args:
        order_id: The unique order identifier (e.g., "ORD-2024-001")

    Returns:
        Order status, estimated delivery date, and tracking information
    """
    # Call your real API
    return api_get(f"/orders/{order_id}/status")
```

<details>

<summary>定义自定义工具的最佳实践</summary>

编写好的 MCP 工具与编写标准 Python 函数不同。AI 严重依赖您的代码结构来理解要做什么。

### 1. 命名很重要

工具名称和参数必须具有描述性。AI 读取这些来"猜测"选择哪个工具。

```Python
# ✅ Good - Clear and descriptive
@mcp.tool()
def query_xiaozhi_stock(product_name: str) -> dict:
    ...

# ❌ Bad - Unclear abbreviations
@mcp.tool()
def qry_stk(pn: str) -> dict:
    ...
```

### 2. 文档字符串是用户界面

文档字符串**不**只是注释；它是 AI 模型的**用户界面**。它指导 AI *何时*和*如何*使用工具。

```Python
@mcp.tool()
def stock_in(product_name: str, quantity: int) -> dict:
    """
    Record stock intake for watcher-xiaozhi products.
    Use this tool when the user wants to add inventory.  <-- Tells AI "When"

    Args:
        product_name: The exact product name             <-- Tells AI "How"
        quantity: Number of units (must be integer)
    """
```

### 3. Logger vs. Print（关键！）

:::danger 永远不要使用 print()

MCP 使用标准 I/O (stdio) 在桥接器和 AI 代理之间进行通信。使用 print() 会破坏协议数据流并导致连接中断。

:::

始终使用日志记录器进行调试：

```Python
import logging
logger = logging.getLogger(__name__)

# ✅ Good - Logs to file/stderr, safe for MCP
logger.info(f"Processing stock in: {product_name}")

# ❌ Bad - Breaks MCP communication
print(f"Processing stock in: {product_name}")
```

### 4. 优化返回值

返回值由 AI 读取以生成语音响应。保持简洁以减少延迟和令牌使用（通常少于 1024 字节）。

```Python
# ✅ Good - Concise
return {
    "success": True,
    "quantity": 150,
    "message": "Stock query successful"
}

# ❌ Bad - Too verbose (AI doesn't need the full database history)
return {
    "success": True,
    "full_product_details": {...}, 
    "complete_history": [...] 
}
```

### 5. 错误处理

您的 API 可能离线或返回 404。优雅地处理这些情况，以便 AI 可以向用户解释问题而不是崩溃。

```Python
try:
    result = api_post("/materials/stock-in", data)
    return result
except Exception as e:
    logger.error(f"Stock in failed: {str(e)}")
    return {
        "success": False,
        "error": str(e),
        "message": "Failed to record stock. Please try again."
    }
```

</details>

### 3. 部署到生产环境

演示在您的本地终端中运行。对于长期 24/7 运行：

- **Docker 化：** 将 `mcp/` 文件夹打包到 Docker 容器中以确保环境稳定性。
- **后台服务：** 不要在打开的终端中运行 `./start_mcp.sh`，而是使用 `systemd`（Linux）或 `NSSM`（Windows）将脚本作为后台服务运行。
- **网络：** 确保运行 MCP Bridge 的机器具有稳定的互联网访问以连接到 SenseCraft Cloud（`wss://...`）。

## 故障排除

<details>
<summary>❌ 后端服务未运行</summary>

- **症状：** AI 响应"无法连接到后端服务"。
- **解决方案：**
  1. 确保后端正在运行：`uv run python run_backend.py`。
  2. 检查端口可用性：`curl http://localhost:2124/api/dashboard/stats`。

</details>

<details>
<summary>❌ MCP 连接超时</summary>

- **症状：** 脚本在"Connecting to WebSocket server..."处无限期挂起。
- **解决方案：**
  1. 验证您的 `MCP_ENDPOINT` 是否正确（检查拼写错误）。
  2. 确保 URL 以 `wss://`（安全 WebSocket）开头。
  3. 检查您的互联网连接（到 SenseCraft Cloud 的出站流量）。

</details>

<details>
<summary>❌ 工具未被识别</summary>

- **症状：** 您说出命令，但 AI 说"我不知道如何做"或不触发工具。
- **解决方案：**
  1. **检查命名：** 为函数使用清晰的英文描述性名称。
  2. **检查文档字符串：** 确保文档字符串明确描述*意图*（例如，"用于检查库存"）。
  3. **重启：** 任何代码更改后必须重启 MCP 服务器脚本。

</details>

<details>
<summary>❌ 连接限制超出</summary>

- **症状：** 错误日志显示"达到最大连接数"。
- **解决方案：**
  1. 每个端点都有连接限制。确保您没有多个终端同时运行脚本。
  2. 关闭其他连接并等待几分钟后重试。

</details>

<details>
<summary>❌ 连接被拒绝 / WebSocket 443 被阻止</summary>

**症状：**  
您看到 `[WinError 1225] Connection refused` 或脚本在 `Connecting to WebSocket server...` 处挂起，即使使用正确的端点 URL。

**原因：**  
**企业防火墙阻止。** 许多办公网络（或 VPN）严格阻止 **WebSocket (wss://)** 流量或非标准协议，即使在端口 443 上。

**快速解决方案：**

1. **📱 "热点测试"（推荐）**  
   断开办公网络/VPN 连接，将您的计算机连接到**移动热点（4G/5G）**。  
   - *如果有效：* 您的办公网络正在阻止连接。

2. **🔧 配置代理**  
   如果您的公司需要代理，请在运行前设置：
   - **Windows：** `$env:HTTPS_PROXY="http://your-proxy:port"`
   - **Mac/Linux：** `export HTTPS_PROXY="http://your-proxy:port"`

3. **🛡️ 白名单**  
   要求 IT 允许 **WebSocket (WSS)** 流量：`*.seeed.cc`。

</details>

## 资源

- [MCP 端点设置指南](/cn/mcp_endpoint) - 了解如何创建和管理 MCP 端点。
- [FastMCP 文档](https://github.com/jlowin/fastmcp) - 深入了解高级工具定义。

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
