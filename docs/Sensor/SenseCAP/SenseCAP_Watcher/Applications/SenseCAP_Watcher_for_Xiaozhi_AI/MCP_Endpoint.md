---
description: Guide for using mcp endpoint
title: MCP Endpoint
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
slug: /mcp_endpoint
last_update:
  date: 10/30/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# MCP Endpoint

## Overview

Special thanks to [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) for their open-source contributions that made this project possible.

**MCP (Model Context Protocol)** is a powerful framework that extends the capabilities of AI by enabling remote control, computation, email operations, knowledge searches, and more.

MCP allows servers to expose callable tools to language models through a well-defined protocol. These tools enable the model to interact with external systems, such as querying databases, invoking APIs, or performing complex calculations. Each tool is uniquely identified by a name and described by metadata that defines its functionality.

**MCP Endpoint** serves as the bridge between your local MCP service and the Xiaozhi AI model. It provides an interface for voice-enabled devices and other terminals to leverage these external capabilities seamlessly.

## Get MCP Endpoint

1. Enter the [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

2. To access the Control Panel, click Watcher Agent in the upper-right corner of the page.

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>

3. Open the agent configuration

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

4. Click `MCP Setting` and `Get MCP Endpoint`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI14.png" style={{width:800, height:'auto'}}/></div>

5. Get Endpoint adddress and Connection Status

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI15.png" style={{width:400, height:'auto'}}/></div>

## MCP Example

Special thanks to [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) for their open-source contributions that made this project possible.

You can get following code from [MCP Example Code Github](https://github.com/78/mcp-calculator)

### MCP server code example

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

### Code Explanation

Below is a detailed explanation of some key parts of the MCP server example:

- `@mcp.tool()` : Registers the following function as an MCP tool that can be called remotely by the AI model.

- `def calculator(python_expression: str) -> dict`: Defines a tool that receives a mathematical expression from the model.

- `result = eval(python_expression)` : Uses Python’s eval() to evaluate the expression. Libraries like math and random can be used because they were imported above.

- `mcp.run(transport="stdio")` : Starts the server. The stdio transport allows it to communicate with the Watcher Agent or your MCP client.

### Quick Start

- Requirements
  - [MCP Example Code Github](https://github.com/78/mcp-calculator)
  - Python 3.7+
  - websockets>=11.0.3
  - python-dotenv>=1.0.0
  - mcp>=1.8.1
  - pydantic>=2.11.4
  - mcp-proxy>=0.8.2

- Step1. Clone the repository and navigate to the project folder

  ```bash
  git clone https://github.com/78/mcp-calculator.git
  cd mcp-calculator
  ```

- Step2. Install dependencies

  ```bash
  pip install -r requirements.txt
  ```

- Step3. Set up environment variables
  - For Linux/macOS
    ```bash
    export MCP_ENDPOINT=<your_mcp_endpoint>
    ```
  - For windows(PowerShell)
    ```bash
    $env:MCP_ENDPOINT="<your_mcp_endpoint>"
    ```
  - For windows(CMD)
    ```bash
    set MCP_ENDPOINT=<your_mcp_endpoint>
    ```

- Step4. Run the calculator example
  ```bash
  python mcp_pipe.py calculator.py
  ```

- Or run all configured servers
  ```bash
  python mcp_pipe.py
  ```

  :::note
  This requires an mcp_config.json configuration file defining the server settings.
  :::

### Execution Result

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

### MCP Endpoint Status

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP1.png" style={{width:400, height:'auto'}}/></div>

- Connection Status: Shows whether your MCP connection is working correctly.
- Refresh icon: Refresh your mcp connection status.
- Enabled Services: Lists all the mcp services your watcher can use.
- Endpoint Address: Your mcp_endpoint_address(Do not share this with anyone unless required by official technical support)

### Conversation Log

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP3.png" style={{width:800, height:'auto'}}/></div>

### Precautions
#### 1. Tool and parameter naming in MCP

The names of tools and their parameters must be clear so that the large model understands their purpose. 
Avoid using abbreviations whenever possible, and provide a comment explaining the tool’s function and when it should be used. 

For example, a tool named calculator lets the model know it is a calculator, and the parameter python_expression indicates that the model should input a Python expression.

If you are writing a bing_search tool, the parameter name should be keywords.

#### 2. Function docstring guidance

The docstring (using """...""") guides the model on when to use the tool.

It can also mention that functions from the math and random libraries can be used in the expression.

These two libraries have already been imported in the example code.

#### 3. Logging instead of printing

Since standard input/output in this MCP Server example is used for data transmission, you cannot use print to output information. 

Use logger for debugging and logging instead.

#### 4. Return values

MCP return values are usually a string or JSON. In the example, the calculation result is returned in a JSON field named result.

The length of return values is usually limited, similar to IoT device commands, typically within 1024 bytes.

#### 5. Tool list limit

The MCP tool list has an upper limit. 

Later it will be displayed in the configuration page, calculated based on token count.

Note: Having too many tools may affect the device’s scheduling efficiency.

#### 6. Connection limit

Each MCP endpoint has a maximum number of concurrent connections.

Note: Exceeding this limit or having too many simultaneous connections may reduce device performance.

## Select Pre-provide mcp services

The following four MCP services are available for you to choose from MCP Setting mentioned before.

After you save the configuration and restart the device, the selected services will take effect automatically.

You can remove the service by click `×`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI16.png" style={{width:800, height:'auto'}}/></div>

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
