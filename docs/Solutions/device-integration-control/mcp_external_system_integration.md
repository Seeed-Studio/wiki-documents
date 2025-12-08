---
description: Guide for integrating external business systems with SenseCAP Watcher via MCP
title: Bring Voice AI to Your Business System (MCP)
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
- AI Enabled Devices
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /mcp_external_system_integration-1
last_update:
  date: 12/06/2025
  author: Spencer
tags:
  - mcp
  - agents
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

## Overview

This guide demonstrates how to use the Model Context Protocol ([MCP](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh/00-Introduction/README.md)) to bridge Voice AI with your existing software ecosystem. By wrapping your REST APIs as MCP tools, you enable ***SenseCAP Watcher*** to interact directly with your business logic —- whether it's a Warehouse Management System (WMS), CRM, ERP, or a custom IT dashboard.

[Voice Controlled Warehouse Scenario.png]

:::tip Voice to API
**Transform Intent into Action.**
Instead of building a voice application from scratch, you simply expose your existing APIs to the Watcher.

- **Hands-Free Operation:** Execute tasks like inventory checks or status updates without screens.
- **Real-Time Sync:** Voice commands trigger immediate API calls, keeping data synchronized.
- **Universal Compatibility:** If your system has an API, Watcher can control it.
:::

**Universal Integration Scenarios**:

While this guide uses a **Warehouse System** as a reference implementation, the architecture applies universally:

| **Industry**    | **Voice Command**                 | **Underlying System Action** |
| --------------- | --------------------------------- | ---------------------------- |
| **Logistics**   | *"Stock in 50 units."*            | `POST /api/inventory/add`    |
| **Sales (CRM)** | *"Update deal status to Closed."* | `PUT /api/deals/{id}/status` |
| **IT Ops**      | *"Restart the staging server."*   | `POST /api/servers/restart`  |

## Architecture

Understanding the data flow is essential before writing code. The integration follows a bridge pattern where the **MCP Server** acts as a secure gateway between the AI and your internal network.

### Architecture

<div align="center">
  <img class='img-responsive' width={480} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/excalidraw-architecture.png" alt="excalidraw-architecture"/>
</div>

**Key Components:**

1. **Watcher Device:** Captures natural language intent (e.g., "Check stock") and sends it to the cloud.
2. **MCP Endpoint (Cloud):** A secure tunnel provided by SenseCraft that forwards the intent to your local environment.
3. **MCP Server (Local Bridge):** A lightweight Python script running on your machine. It translates the AI intent into specific code functions.
4. **Backend API:** Your existing business application (FastAPI, Flask, etc.) that executes the actual logic.
5. **Infrastructure:** Database or other services your backend relies on.

## Demo 1: Voice-Controlled Warehouse

We will simulate a business environment by running a mock **Warehouse Backend** and an **MCP Bridge** on your local machine. This demo enables:

- 🗣️ **Inventory Check:** "How many Xiaozhi Standard units do we have?"
- 🗣️ **Data Entry:** "Stock in 5 units of Watcher Xiaozhi."
- 🗣️ **Business Insight:** "What's today's inventory summary?"

### Prerequisites

- **Hardware:** SenseCAP Watcher, Computer (Windows/macOS/Linux).
- **Software:** Python 3.10+, Git.
- **Account:** [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home) account.

[Device Setup Check.png]

:::note Setup
Ensure your SenseCAP Watcher is configured with **Xiaozhi AI** via [SenseCraft AI Device Center](https://sensecraft.seeed.cc/ai/device/local/37).
:::

### Step 1: Deploy Target System

First, we need to start the mock business backend. We provide automated scripts to handle dependencies (using `uv`) and service startup.

:::tip install uv
Use the following command to install uv, a lightweight Python environment manager:

```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```

:::

**1. Clone the repository**:

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

**2. Start the Service**:

Choose your operating system to install dependencies and start the backend automatically.

<Tabs>

<TabItem value="mac" label="Linux/macOS" default>

Run the shell script to start the backend and frontend:

```shell
# Navigate to the project directory warehouse_system
chmod +x start.sh
./start.sh # which runs the run_backend and frontend/app.py
```

</TabItem>

<TabItem value="win" label="Windows">

Run the PowerShell script to start the backend and frontend:

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

- **Verify:** Open your browser and visit `http://localhost:2124/docs`. If you see the API documentation page (as shown above), your "Business System" is running.

### Step 2: Configure MCP Bridge

Now, we connect the backend to the AI. The bridge code resides in the `mcp/` directory.

**1. Get MCP Endpoint**:

Obtain your **MCP Endpoint Address** (`wss://...`) from the [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home) -> Watcher Agent -> Configuration.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="MCP_EndPoint"/>
</div>

**2. Configure & Run**:

Open a **new terminal window** (keep the previous backend terminal running) and navigate to the `mcp` folder.

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

If successful, you will see a message: `MCP Service Started Successfully!`.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/mcp-bridge-start-successfully.png" alt="mcp-bridge-start-successfully"/>
</div>

### Step 3: Verification

Everything is connected. Now, use the SenseCAP Watcher to interact with your local system.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_connected.png" alt="MCP_connected"/>
</div>

Now we can test the integration using your Watcher device!

### Example Voice Commands

| Voice Command                                          | Expected Action                                       |
| ------------------------------------------------------ | ----------------------------------------------------- |
| "Query the stock of Xiaozhi Standard Version"          | Calls `query_xiaozhi_stock` tool                      |
| "How many Xiaozhi Professional Version do we have?"    | Calls `query_xiaozhi_stock` with professional version |
| "Stock in 5 units of Watcher Xiaozhi Standard Version" | Calls `stock_in` tool with quantity=5                 |
| "Stock out 3 Xiaozhi units for sales"                  | Calls `stock_out` tool with quantity=3                |
| "What's today's inventory summary?"                    | Calls `get_today_statistics` tool                     |
| "List all Xiaozhi products"                            | Calls `list_xiaozhi_products` tool                    |

**What happens behind the scenes?**

| **Component**  | **Action**                                         |
| -------------- | -------------------------------------------------- |
| **Watcher**    | Sends voice audio to cloud.                        |
| **MCP Bridge** | Receives intent, determines tool is `query_stock`. |
| **System**     | Executes `GET /materials/product-stats`.           |
| **Result**     | Watcher speaks: *"Current stock is 150 units."*    |

### Expected Responses

**Query Stock:**

> "The stock query was successful. Watcher Xiaozhi Standard Version currently has 150 units in stock at location A-01-01. Stock status is normal."

**Stock In:**

> "Successfully added 5 units of Watcher Xiaozhi Standard Version. Previous quantity was 150, new quantity is 155."

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## Customizing for Your System

The warehouse demo is just a template. To integrate your own **Order Management System**, **CRM**, or **IT Dashboard**, follow these steps to modify the bridge code.

### 1. Point to Your Real Server

Open `mcp/warehouse_mcp.py`. The first step is to tell the bridge where your actual API lives.

```python
# Change this line to point to your actual production server IP/Domain
# API_BASE_URL = "http://localhost:2124/api" 
API_BASE_URL = "http://192.168.50.10:8080/api/v1" 
```

### 2. Define Custom Tools

To add a new voice command, you don't need to train a model. You just need to write a Python function.

Use the `@mcp.tool()` decorator to wrap your API calls.

**Workflow:**

1. **Identify Operations:** What actions do you want to control via voice? (e.g., "Check Order", "Restart Server").
2. **Document API:** Ensure you know the endpoint URL and parameters (e.g., `GET /orders/{id}`).
3. **Write the Wrapper:** Create the Python function using the pattern below.

**Example: Adapting for an Order Management System**:

:::tip The "Docstring" is the Magic
The AI reads the Python **docstring** (the text inside `""" ... """`) to decide **when** to call your function. Be descriptive\!
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

<summary>Best Practices for Defining Custom Tools</summary>

Writing good MCP tools is different from writing standard Python functions. The AI relies heavily on your code structure to understand what to do.

### 1. Naming Matters

Tool names and parameters must be descriptive. The AI reads these to "guess" which tool to pick.

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

### 2. The Docstring is the UI

The docstring is **not** just a comment; it is the **User Interface** for the AI model. It guides the AI on *when* and *how* to use the tool.

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

### 3. Logger vs. Print (Crucial!)

:::danger Never use print()

MCP uses standard I/O (stdio) for communication between the bridge and the AI agent. Using print() will corrupt the protocol data stream and cause the connection to break.

:::

Always use a logger for debugging:

```Python
import logging
logger = logging.getLogger(__name__)

# ✅ Good - Logs to file/stderr, safe for MCP
logger.info(f"Processing stock in: {product_name}")

# ❌ Bad - Breaks MCP communication
print(f"Processing stock in: {product_name}")
```

### 4. Optimize Return Values

The return value is read by the AI to generate a spoken response. Keep it concise to reduce latency and token usage (typically under 1024 bytes).

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

### 5. Error Handling

Your API might be offline or return 404. Handle these gracefully so the AI can explain the issue to the user instead of crashing.

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

### 3. Deploy for Production

The demo runs in your local terminal. For long-term 24/7 operation:

- **Dockerize:** Package the `mcp/` folder into a Docker container to ensure environment stability.
- **Background Service:** Instead of running `./start_mcp.sh` in an open terminal, use `systemd` (Linux) or `NSSM` (Windows) to run the script as a background service.
- **Network:** Ensure the machine running the MCP Bridge has stable internet access to connect to the SenseCraft Cloud (`wss://...`).

## Troubleshooting

<details>
<summary>❌ Backend Service Not Running</summary>

- **Symptom:** AI responds with "Cannot connect to backend service".
- **Solution:**
  1. Ensure the backend is running: `uv run python run_backend.py`.
  2. Check port availability: `curl http://localhost:2124/api/dashboard/stats`.

</details>

<details>
<summary>❌ MCP Connection Timeout</summary>

- **Symptom:** The script hangs at "Connecting to WebSocket server..." indefinitely.
- **Solution:**
  1. Verify your `MCP_ENDPOINT` is correct (check for typos).
  2. Ensure the URL starts with `wss://` (Secure WebSocket).
  3. Check your internet connection (outbound traffic to SenseCraft Cloud).

</details>

<details>
<summary>❌ Tool Not Recognized</summary>

- **Symptom:** You speak a command, but the AI says "I don't know how to do that" or doesn't trigger the tool.
- **Solution:**
  1. **Check Naming:** Use clear, English descriptive names for functions.
  2. **Check Docstrings:** Make sure the docstring explicitly describes the *intent* (e.g., "Use this to check stock").
  3. **Restart:** You must restart the MCP server script after any code change.

</details>

<details>
<summary>❌ Connection Limit Exceeded</summary>

- **Symptom:** Error log shows "Maximum connections reached".
- **Solution:**
  1. Each Endpoint has a connection limit. Ensure you don't have multiple terminals running the script simultaneously.
  2. Close other connections and wait a few minutes before retrying.

</details>

<details>
<summary>❌ Connection Refused / WebSocket 443 Blocked</summary>

**Symptom:**  
You see `[WinError 1225] Connection refused` or the script hangs at `Connecting to WebSocket server...`, even with the correct Endpoint URL.

**Cause:**  
**Corporate Firewall Blocking.** Many office networks (or VPNs) strictly block **WebSocket (wss://)** traffic or non-standard protocols, even on port 443.

**Quick Solutions:**

1. **📱 The "Hotspot Test" (Recommended)**  
   Disconnect from the office network/VPN and connect your computer to a **Mobile Hotspot (4G/5G)**.  
   - *If it works:* Your office network is blocking the connection.

2. **🔧 Configure Proxy**  
   If your company requires a proxy, set it before running:
   - **Windows:** `$env:HTTPS_PROXY="http://your-proxy:port"`
   - **Mac/Linux:** `export HTTPS_PROXY="http://your-proxy:port"`

3. **🛡️ Whitelist**  
   Ask IT to allow **WebSocket (WSS)** traffic for: `*.seeed.cc`.

</details>

## Resources

- [MCP Endpoint Setup Guide](/mcp_endpoint) - Learn how to create and manage MCP endpoints.
- [FastMCP Documentation](https://github.com/jlowin/fastmcp) - Dive deeper into advanced tool definitions.

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
