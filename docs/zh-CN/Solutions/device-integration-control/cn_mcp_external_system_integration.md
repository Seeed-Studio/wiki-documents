---
description: 通过 MCP 将外部业务系统与 SenseCAP Watcher 集成的指南
title: MCP 与外部系统集成
sidebar_position: 6
keywords:
- MCP
- API
- Integration
- Warehouse
- Voice Control
- Watcher
- External System
- Enterprise
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /cn/mcp_external_system_integration
last_update:
  date: 11/27/2025
  author: Harvest

---

# MCP 与外部系统集成

## 概述

本指南演示如何通过 **MCP（模型上下文协议）** 将您现有的业务系统与 **SenseCAP Watcher** 集成。与基础计算器示例不同，本教程专注于工业用例：**语音控制仓库管理**。

完成本教程后，您将能够：

- 了解企业系统集成的 MCP 架构
- 将现有的 REST API 包装为 MCP 工具
- 启用语音命令，如 *"查询小智标准版的库存"* 或 *"入库 5 台 Watcher 小智"*

### 用例：语音控制仓库管理

想象一个仓库操作员在双手忙碌时需要检查库存或记录库存变动。通过 MCP 集成，他们可以简单地对 Watcher 设备说话：

- **"我们有多少台小智标准版库存？"**
- **"入库 5 台 Watcher 小智标准版"**
- **"今天的库存汇总是什么？"**

Watcher 处理语音命令，调用相应的 MCP 工具，然后查询或更新您的仓库管理系统。

### 架构概述

```bash
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                  │     │                 │     │                 │
│  Watcher Device │────▶│   MCP Endpoint   │────▶│   MCP Server    │────▶│  Backend API    │
│  (Voice Input)  │     │  (Cloud Bridge)  │     │  (Your Code)    │     │  (Your System)  │
│                 │     │                  │     │                 │     │                 │
└─────────────────┘     └──────────────────┘     └─────────────────┘     └─────────────────┘
                                                                                  │
                                                                                  ▼
                                                                         ┌─────────────────┐
                                                                         │                 │
                                                                         │    Database     │
                                                                         │                 │
                                                                         └─────────────────┘
```

**关键组件：**

- **Watcher 设备**：捕获语音命令并发送给 AI 模型
- **MCP 端点**：连接本地 MCP 服务器与 AI 模型的云服务
- **MCP 服务器**：将业务逻辑包装为可调用工具的 Python 代码
- **后端 API**：您现有的 REST API（FastAPI、Flask 等）
- **数据库**：您的业务数据存储

## 前提条件

### 硬件

- SenseCAP Watcher 设备（已配置小智 AI）
- 一台计算机（Windows/macOS/Linux）来运行后端系统和 MCP 服务器

### 软件

- Python 3.10 或更高版本
- [uv](https://docs.astral.sh/uv/) 包管理器（推荐）或 pip
- Git

### 账户

- 具有 MCP 端点访问权限的 SenseCraft AI 平台账户
- 参考 [MCP 端点指南](/cn/mcp_endpoint) 获取您的 MCP 端点地址

### 部署说明

MCP 服务器可以与您的后端系统运行在同一台机器上，也可以运行在不同的机器上。只需在 `mcp/warehouse_mcp.py` 中配置 API 端点 URL：

```python
# Backend API address - change this to your actual backend URL
API_BASE_URL = "http://localhost:2124/api"  # Same machine
# API_BASE_URL = "http://192.168.1.100:2124/api"  # Different machine
```

## 第一部分：设置演示仓库系统

我们提供了一个完整的演示仓库管理系统，您可以将其作为参考。这包括：

- 带有 REST API 的 FastAPI 后端
- 基于 Web 的仪表板
- 预填充的示例数据（Watcher 小智产品）

### 步骤 1：克隆仓库

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

### 步骤 2：安装依赖

使用 uv（推荐）：

```bash
# Install uv if you haven't
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install project dependencies
uv sync
```

或使用 pip：

```bash
pip install fastapi uvicorn requests pydantic fastmcp websockets
```

### 步骤 3：启动后端服务

```bash
uv run python run_backend.py
```

您应该看到：

```bash
INFO:     Uvicorn running on http://0.0.0.0:2124
INFO:     Database initialized with sample data
```

### 步骤 4：验证 API

打开新终端并测试 API：

```bash
curl http://localhost:2124/api/materials/xiaozhi
```

预期响应：

```json
[
  {
    "id": 1,
    "name": "watcher-xiaozhi(标准版)",
    "sku": "WX-STD-001",
    "category": "mainboard",
    "quantity": 150,
    "unit": "个",
    "safe_stock": 50,
    "location": "A-01-01"
  },
  ...
]
```

您还可以在以下地址浏览交互式 API 文档：http://localhost:2124/docs

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="mcp-system-integration"/>
</div>

## 第二部分：将 API 包装为 MCP 工具

演示系统已经具有用于仓库操作的 REST API。现在让我们将它们包装为 MCP 工具以实现语音控制。

:::tip
运行后端服务器后，您可以通过 http://localhost:2124/docs（Swagger UI）的交互式文档浏览所有可用的 API。完整的 MCP 服务器代码位于仓库中的 `mcp/warehouse_mcp.py`。
:::

### 核心概念：API 到 MCP 工具

模式很简单：

1. **使用 `FastMCP` 创建 MCP 服务器**
2. **使用 `@mcp.tool()` 装饰器定义工具函数**
3. **在工具函数内调用现有 API**
4. **返回结构化结果**供 AI 解释

### 关键代码演练

#### 1. 初始化 MCP 服务器

```python
from fastmcp import FastMCP
import requests

mcp = FastMCP("Warehouse System")  # Server name shown in MCP Endpoint
API_BASE_URL = "http://localhost:2124/api"  # Your backend URL
```

#### 2. 使用 `@mcp.tool()` 定义工具

```python
@mcp.tool()
def query_xiaozhi_stock(product_name: str = "watcher-xiaozhi(标准版)") -> dict:
    """
    Query stock information for watcher-xiaozhi products.
    Use this tool when user asks about inventory levels or stock quantity.

    Args:
        product_name: Product name to query (e.g., "watcher-xiaozhi(标准版)")
    """
    # Call your existing API
    response = requests.get(f"{API_BASE_URL}/materials/product-stats",
                           params={"name": product_name})
    data = response.json()

    # Return structured result
    return {
        "success": True,
        "quantity": data["current_stock"],
        "message": f"{data['name']} has {data['current_stock']} {data['unit']} in stock"
    }
```

**关键要点：**

- **函数名**（`query_xiaozhi_stock`）→ AI 看到的工具名
- **文档字符串** → 指导 AI 何时使用此工具
- **参数** → AI 需要从语音命令中提取的内容
- **返回值** → AI 向用户读回的内容

#### 3. 启动服务器

```python
if __name__ == "__main__":
    mcp.run(transport="stdio")
```

### 此演示中的工具

`warehouse_mcp.py` 定义了 5 个工具：

| 工具名                  | 语音触发示例                      | 调用的 API                     |
| ----------------------- | --------------------------------- | ------------------------------ |
| `query_xiaozhi_stock`   | "查询小智标准版库存"              | GET `/materials/product-stats` |
| `stock_in`              | "入库 5 台小智"                   | POST `/materials/stock-in`     |
| `stock_out`             | "出库 3 台小智用于销售"           | POST `/materials/stock-out`    |
| `list_xiaozhi_products` | "列出所有小智产品"                | GET `/materials/xiaozhi`       |
| `get_today_statistics`  | "今天的库存汇总"                  | GET `/dashboard/stats`         |

### 启动服务器

```python
if __name__ == "__main__":
    mcp.run(transport="stdio")
```

## 第三部分：连接到 MCP 端点

### 步骤 1：获取您的 MCP 端点

1. 登录 [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai/home)
2. 点击右上角的 **Watcher Agent**
3. 打开 **Agent Configuration** → **MCP Setting**
4. 点击 **Get MCP Endpoint** 获取您的唯一端点地址

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="mcp-system-integration"/>
</div>

:::warning
请保持您的 MCP 端点地址私密。不要公开分享。
:::

### 步骤 2：配置环境变量

**对于 Linux/macOS：**

```bash
export MCP_ENDPOINT="wss://your-endpoint-address"
```

**对于 Windows（PowerShell）：**

```powershell
$env:MCP_ENDPOINT="wss://your-endpoint-address"
```

**对于 Windows（CMD）：**

```cmd
set MCP_ENDPOINT=wss://your-endpoint-address
```

### 步骤 3：启动 MCP 服务器

导航到 mcp 目录并运行启动脚本：

```bash
cd mcp
./start_mcp.sh
```

预期输出：

```shell
================================
  MCP Service Startup Script
================================

MCP Endpoint: wss://your-endpoint-address

Checking backend service...
Backend service running normally (port 2124)

Starting MCP service...

================================
  MCP Service Started Successfully!
================================

Press Ctrl+C to stop the service
```

### 步骤 4：验证连接状态

返回 SenseCraft AI 平台并检查 MCP 连接状态。您应该看到：

- **Connection Status**: Connected
- **Enabled Services**: Warehouse System

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_connected.png" alt="mcp-system-integration"/>
</div>

## 第四部分：测试语音命令

现在您可以使用 Watcher 设备测试集成！

### 示例语音命令

| 语音命令                                          | 预期操作                                       |
| ------------------------------------------------------ | ----------------------------------------------------- |
| "Query the stock of Xiaozhi Standard Version"          | 调用 `query_xiaozhi_stock` 工具                      |
| "How many Xiaozhi Professional Version do we have?"    | 调用 `query_xiaozhi_stock` 专业版 |
| "Stock in 5 units of Watcher Xiaozhi Standard Version" | 调用 `stock_in` 工具，数量=5                 |
| "Stock out 3 Xiaozhi units for sales"                  | 调用 `stock_out` 工具，数量=3                |
| "What's today's inventory summary?"                    | 调用 `get_today_statistics` 工具                     |
| "List all Xiaozhi products"                            | 调用 `list_xiaozhi_products` 工具                    |

### 预期响应

**查询库存：**

> "库存查询成功。Watcher Xiaozhi 标准版当前在位置 A-01-01 有 150 个单位的库存。库存状态正常。"

**入库：**

> "成功添加 5 个单位的 Watcher Xiaozhi 标准版。之前数量为 150，新数量为 155。"

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## 最佳实践

### 1. 工具和参数命名

工具名称和参数应该清晰且具有描述性，以便 AI 模型理解其用途：

```python
# Good - Clear and descriptive
@mcp.tool()
def query_xiaozhi_stock(product_name: str) -> dict:
    ...

# Bad - Unclear abbreviations
@mcp.tool()
def qry_stk(pn: str) -> dict:
    ...
```

### 2. 全面的文档字符串

文档字符串指导 AI 模型何时以及如何使用工具：

```python
@mcp.tool()
def stock_in(product_name: str, quantity: int) -> dict:
    """
    Record stock intake for watcher-xiaozhi products.
    Use this tool when the user wants to add inventory.

    Args:
        product_name: The exact product name (e.g., "watcher-xiaozhi(标准版)")
        quantity: Number of units to add (must be positive integer)

    Returns:
        Success status and updated inventory information
    """
```

### 3. 使用日志记录器而不是打印

由于 MCP 使用 stdio 进行通信，永远不要使用 `print()` 进行调试：

```python
# Good - Use logger
logger.info(f"Processing stock in: {product_name}")

# Bad - Will break MCP communication
print(f"Processing stock in: {product_name}")
```

### 4. 返回值限制

保持返回值简洁（通常少于 1024 字节）：

```python
# Good - Concise response
return {
    "success": True,
    "quantity": 150,
    "message": "Stock query successful"
}

# Bad - Too verbose
return {
    "success": True,
    "full_product_details": {...},  # Avoid large nested objects
    "complete_history": [...]  # Avoid long arrays
}
```

### 5. 错误处理

始终优雅地处理错误并返回有意义的消息：

```python
try:
    result = api_post("/materials/stock-in", data)
    return result
except Exception as e:
    logger.error(f"Stock in failed: {str(e)}")
    return {
        "success": False,
        "error": str(e),
        "message": "Failed to record stock intake. Please try again."
    }
```

## 故障排除

### 后端服务未运行

**症状：** MCP 工具返回"无法连接到后端服务"

**解决方案：**

1. 确保后端正在运行：`uv run python run_backend.py`
2. 检查端口 2124 是否可用：`curl http://localhost:2124/api/dashboard/stats`

### MCP 连接超时

**症状：** "Connecting to WebSocket server..." 无限期挂起

**解决方案：**

1. 验证您的 MCP_ENDPOINT 是否正确
2. 检查您的网络连接
3. 确保端点 URL 以 `wss://` 开头

### 工具未识别

**症状：** 语音命令未触发预期的工具

**解决方案：**

1. 检查工具命名 - 使用清晰、描述性的名称
2. 验证文档字符串描述何时使用该工具
3. 代码更改后重启 MCP 服务器

### 连接限制超出

**症状：** "达到最大连接数"错误

**解决方案：**

1. 关闭其他 MCP 连接
2. 等待几分钟后重试
3. 每个端点都有连接限制

## 适配您自己的系统

要集成您自己的业务系统：

1. **识别关键操作**：用户需要通过语音执行哪些操作？
2. **记录您的 API**：确保您的后端为这些操作提供 REST 端点
3. **创建 MCP 工具**：将每个 API 端点包装为 `@mcp.tool()` 函数
4. **编写清晰的文档字符串**：帮助 AI 理解何时使用每个工具
5. **彻底测试**：验证语音命令触发正确的工具

### 示例：适配不同的系统

如果您有订单管理系统：

```python
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
    return api_get(f"/orders/{order_id}/status")
```

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
