---
description: MCP 端点使用指南
title: MCP 端点
sidebar_position: 5
keywords:
- AI
- SenseCAP
- Watcher
- Agent
- Endpoint
- Model
- Context
- protocol
- MCP
- Server
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /cn/mcp_endpoint
last_update:
  date: 10/22/2025
  author: Twelve
---

# MCP 端点

## 概述

特别感谢 [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) 的开源贡献，使这个项目成为可能。

**MCP（模型上下文协议）** 是一个强大的框架，通过启用远程控制、计算、邮件操作、知识搜索等功能来扩展 AI 的能力。

MCP 允许服务器通过定义良好的协议向语言模型公开可调用的工具。这些工具使模型能够与外部系统交互，例如查询数据库、调用 API 或执行复杂计算。每个工具都由名称唯一标识，并由定义其功能的元数据描述。

**MCP 端点** 作为您本地 MCP 服务与小智 AI 模型之间的桥梁。它为语音设备和其他终端提供接口，以无缝利用这些外部功能。

## 获取 MCP 端点

1. 进入 [SenseCraft AI 平台](https://sensecraft.seeed.cc/ai/home)

2. 要访问控制面板，请点击页面右上角的 Watcher Agent。

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>

3. 打开智能体配置

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

4. 点击 `MCP Setting` 和 `Get MCP Endpoint`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI14.png" style={{width:800, height:'auto'}}/></div>

5. 获取端点地址和连接状态

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI15.png" style={{width:400, height:'auto'}}/></div>

## 选择预提供的 MCP 服务

以下四个 MCP 服务可供您选择。

保存配置并重启设备后，所选服务将自动生效。

您可以通过点击 `×` 来移除服务

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI16.png" style={{width:800, height:'auto'}}/></div>


## MCP 示例

特别感谢 [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) 的开源贡献，使这个项目成为可能。

您可以从 [MCP 示例代码 Github](https://github.com/78/mcp-calculator) 获取以下代码

### MCP 服务器代码示例

```python
  # server.py
  from mcp.server.fastmcp import FastMCP
  import logging
  logger = logging.getLogger('test_mcp')

  import math
  import random

  # Create an MCP server
  mcp = FastMCP("Calculator")

  # Add an addition tool
  @mcp.tool()
  def calculator(python_expression: str) -> dict:
      """For mathamatical calculation, always use this tool to calculate the result of a python expression. `math` and `random` are available."""
      result = eval(python_expression)
      logger.info(f"Calculating formula: {python_expression}, result: {result}")
      return {"success": True, "result": result}

  # Start the server
  if __name__ == "__main__":
      mcp.run(transport="stdio")
```

### 代码解释

以下是 MCP 服务器示例中一些关键部分的详细解释：

- `@mcp.tool()` : 将以下函数注册为可由 AI 模型远程调用的 MCP 工具。

- `def calculator(python_expression: str) -> dict`: 定义一个从模型接收数学表达式的工具。

- `result = eval(python_expression)` : 使用 Python 的 eval() 来评估表达式。可以使用 math 和 random 等库，因为它们已在上面导入。

- `mcp.run(transport="stdio")` : 启动服务器。stdio 传输允许它与 Watcher Agent 或您的 MCP 客户端通信。

### 执行结果

```bash
export MCP_ENDPOINT=<mcp_endpoint_address_get_from_your_agent_configuration>
python mcp_pipe.py calculator.py
2025-05-16 09:07:09,009 - MCP_PIPE - INFO - Connecting to WebSocket server...
2025-05-16 09:07:09,096 - MCP_PIPE - INFO - Successfully connected to WebSocket server
2025-05-16 09:07:09,097 - MCP_PIPE - INFO - Started test.py process
Processing request of type ListToolsRequest
Processing request of type CallToolRequest
Calculating formula: 3.14159 * (8 / 2) ** 2, result: 50.26544
Processing request of type CallToolRequest
Calculating formula: math.comb(10, 3), result: 120
```

### MCP 端点状态

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP1.png" style={{width:400, height:'auto'}}/></div>

- Connection Status: 显示您的 MCP 连接是否正常工作。
- Refresh icon: 刷新您的 MCP 连接状态。
- Enabled Services: 列出您的 Watcher 可以使用的所有 MCP 服务。
- Endpoint Address: 您的 MCP 端点地址（除非官方技术支持需要，否则请勿与任何人分享）

### 对话日志

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP3.png" style={{width:800, height:'auto'}}/></div>

### 注意事项
#### 1. MCP 中的工具和参数命名

工具及其参数的名称必须清晰，以便大型模型理解其用途。
尽可能避免使用缩写，并提供注释解释工具的功能以及何时应该使用它。

例如，名为 calculator 的工具让模型知道它是一个计算器，参数 python_expression 表示模型应该输入一个 Python 表达式。

如果您正在编写 bing_search 工具，参数名称应该是 keywords。

#### 2. 函数文档字符串指导

文档字符串（使用 """..."""）指导模型何时使用该工具。

它还可以提到可以在表达式中使用 math 和 random 库中的函数。

这两个库已经在示例代码中导入。

#### 3. 使用日志记录而不是打印

由于此 MCP 服务器示例中的标准输入/输出用于数据传输，您不能使用 print 来输出信息。

请使用 logger 进行调试和日志记录。

#### 4. 返回值

MCP 返回值通常是字符串或 JSON。在示例中，计算结果在名为 result 的 JSON 字段中返回。

返回值的长度通常有限制，类似于 IoT 设备命令，通常在 1024 字节以内。

#### 5. 工具列表限制

MCP 工具列表有上限。

稍后它将显示在配置页面中，基于令牌数量计算。

注意：工具过多可能会影响设备的调度效率。

#### 6. 连接限制

每个 MCP 端点都有最大并发连接数。

注意：超过此限制或同时连接过多可能会降低设备性能。

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
