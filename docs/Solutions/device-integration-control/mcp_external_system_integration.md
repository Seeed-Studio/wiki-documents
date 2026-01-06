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
- AI Enabled Devices
- Qwen
- OA
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /mcp_external_system_integration
last_update:
  date: 12/23/2025
  author: Spencer
tags:
  - mcp
  - agents
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

This guide demonstrates how to use the Model Context Protocol ([MCP](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh/00-Introduction/README.md)) to bridge Voice AI with your existing software ecosystem. By wrapping your REST APIs as MCP tools, you enable ***SenseCAP Watcher*** to interact directly with your business logic —- whether it's a Warehouse Management System (WMS), CRM, ERP, or a custom IT dashboard.

<table class="table-center">
  <tr>
      <th>Smart Spatial Interaction</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/wms-watcher-scenario.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/smart-spatial-interaction-zh-hans" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Solution Bundle 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com.cn/solutions/voicecollectionanalysis-zh-hans" target="_blank">Smart Spatial Interaction</a></h2>
      <p>Voice to API: Transform Intent into Action. Don't build a new app from scratch. Simply expose your existing WMS endpoints to the Watcher to enable immediate voice control for your workforce.</p>
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
                <h3>True Hands-Free Productivity</h3>
                <p>Operators can query stock or log shipments while wearing gloves or driving forklifts. Keep eyes on the task and hands on the wheel for maximum safety and efficiency.</p>
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
                <h3>Zero-Latency Data Synchronization</h3>
                <p>Eliminate the lag of paper records. Voice commands trigger direct API calls to your ERP, ensuring inventory data is synchronized the instant an item moves.</p>
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
                <h3>Universal System Interoperability</h3>
                <p>Whether you run SAP, Oracle, or a custom SQL backend, if your system has an API, Watcher controls it. No need to migrate legacy systems to adopt AI.</p>
            </div>
        </li>
    </ul>
</div>

## Architecture

Understanding the data flow is essential before writing code. The integration follows a bridge pattern where the **MCP Server** acts as a secure gateway between the AI and your internal network.

<div align="center">
  <img class='img-responsive' width={480} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/excalidraw-architecture.png" alt="excalidraw-architecture"/>
</div>

**Key Components:**

1. **Watcher Device:** Captures natural language intent (e.g., "Check stock") and sends it to the cloud.
2. **MCP Endpoint (Cloud):** A secure tunnel provided by SenseCraft that forwards the intent to your local environment.
3. **MCP Server (Local Bridge):** A lightweight Python script running on your machine. It translates the AI intent into specific code functions.
4. **Backend API:** Your existing business application (FastAPI, Flask, etc.) that executes the actual logic.
5. **Infrastructure:** Database or other services your backend relies on.

**Universal Integration Scenarios**:

While this guide uses a **Warehouse System** as a reference implementation, the architecture applies universally:

| **Industry**    | **Voice Command**                 | **Underlying System Action** |
| --------------- | --------------------------------- | ---------------------------- |
| **Logistics**   | *"Stock in 50 units."*            | `POST /api/inventory/add`    |
| **Sales (CRM)** | *"Update deal status to Closed."* | `PUT /api/deals/{id}/status` |
| **IT Ops**      | *"Restart the staging server."*   | `POST /api/servers/restart`  |

## Demo 1: Voice-Controlled Warehouse

We will simulate a business environment by running a mock **Warehouse Backend** and an **MCP Bridge** on your local machine. This demo enables:

- 🗣️ **Inventory Check:** "How many Xiaozhi Standard units do we have?"
- 🗣️ **Data Entry:** "Stock in 5 units of Watcher Xiaozhi."
- 🗣️ **Business Insight:** "What's today's inventory summary?"

### Prerequisites

- **Hardware:** SenseCAP Watcher, Computer with Docker support
- **Software:** Docker or [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose), Git
- **Account:** [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home) account

:::note Watcher Setup
Ensure your SenseCAP Watcher is configured with **Xiaozhi AI** via [SenseCraft AI Device Center](https://sensecraft.seeed.cc/ai/device/local/37).

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/sensecap-setup.png" alt="sensecap-setup"/>
</div>
:::

### Step 1: Deploy the Warehouse System

We use Docker for deployment to ensure a consistent environment across all platforms (Windows, macOS, Linux).

**1. Clone the repository**:

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

**2. Start with Docker Compose**:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

This single command will:

- Build and start the backend API server (port 2124)
- Build and start the frontend web interface (port 2125)
- Create a persistent volume for your database

**3. Verify the deployment**:

Wait about 30 seconds for containers to start, then check:

```bash
docker-compose -f docker-compose.prod.yml ps
```

You should see both `warehouse-backend-prod` and `warehouse-frontend-prod` containers running.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="API Documentation"/>
</div>

- **Frontend UI:** Open `http://localhost:2125` in your browser
- **API Documentation:** Open `http://localhost:2124/docs` to see the Swagger UI

### Step 2: Initial System Setup

The warehouse system includes user authentication and API key management for security. You need to set this up before connecting MCP.

**1. Create Admin Account**:

Open `http://localhost:2125` in your browser. On first visit, you'll see a registration form:

- Enter your desired **username** (e.g., `admin`)
- Enter a **password** (e.g., `admin123`)
- Click **Register**

:::tip First User is Admin
The first registered user automatically becomes the administrator.
:::

**2. Login and Navigate to User Management**:

After registration, log in with your credentials. Click on the **User Management** tab in the navigation.

**3. Create an API Key**:

In the User Management section, find the **API Key Management** area:

1. Enter a descriptive name for the key (e.g., `MCP Bridge`)
2. Click **Create API Key**
3. **Important:** Copy the generated API key immediately! It will only be shown once.

The API key looks like: `wh_xxxxxxxxxxxxxxxxxxxx`

:::warning Save Your API Key
The API key is only displayed once when created. Store it securely - you'll need it in the next step.
:::

### Step 3: Configure MCP Bridge

Now, we connect the backend to the AI. The bridge code resides in the `mcp/` directory.

:::tip Install uv
The MCP bridge uses `uv` as its Python environment manager. Install it with:

<Tabs>
<TabItem value="mac" label="Linux/macOS" default>

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

</TabItem>
<TabItem value="win" label="Windows (PowerShell)">

```powershell
irm https://astral.sh/uv/install.ps1 | iex
```

</TabItem>
</Tabs>

:::

**1. Get MCP Endpoint**:

Obtain your **MCP Endpoint Address** (`wss://...`) from the [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home) -> Watcher Agent -> Configuration.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="MCP_EndPoint"/>
</div>

**2. Configure API Key**:

Open a terminal and navigate to the `mcp` folder:

```bash
cd mcp

# Copy the example config file
cp config.yml.example config.yml
```

Edit `config.yml` with your API key from Step 2:

```yaml
# Backend API address
api_base_url: "http://localhost:2124/api"

# API key (from User Management -> API Key Management)
api_key: "wh_your-api-key-here"
```

**3. Start the MCP Bridge**:

<Tabs>

<TabItem value="mac" label="Linux/macOS" default>

```bash
# Set the MCP Endpoint (replace with your actual address)
export MCP_ENDPOINT="wss://your-endpoint-address"

# Start the Bridge
./start_mcp.sh
```

</TabItem>

<TabItem value="win" label="Windows (PowerShell)">

```powershell
# Set the MCP Endpoint (replace with your actual address)
$env:MCP_ENDPOINT="wss://your-endpoint-address"

# Start the Bridge
./start_mcp.ps1
```

</TabItem>

</Tabs>

If successful, you will see: `MCP Service Started Successfully!`

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/mcp-bridge-start-successfully.png" alt="mcp-bridge-start-successfully"/>
</div>

### Step 4: Verification

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
| **System**     | Executes `GET /materials/product-stats` with API key authentication. |
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

Or better, use the `config.yml` file:

```yaml
api_base_url: "http://192.168.50.10:8080/api/v1"
api_key: "your-production-api-key"
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
<summary>❌ Docker Containers Not Starting</summary>

- **Symptom:** `docker-compose ps` shows containers in "Exited" state.
- **Solution:**
  1. Check Docker Desktop is running
  2. View logs: `docker-compose -f docker-compose.prod.yml logs`
  3. Ensure ports 2124 and 2125 are not in use
  4. Try rebuilding: `docker-compose -f docker-compose.prod.yml up -d --build`

</details>

<details>
<summary>❌ API Key Invalid (401 Unauthorized)</summary>

- **Symptom:** MCP bridge logs show `401 Unauthorized` or "Invalid API Key".
- **Solution:**
  1. Verify the API key in `mcp/config.yml` is correct
  2. Check the API key is still active in User Management
  3. Ensure there are no extra spaces or quotes around the key
  4. Try creating a new API key

</details>

<details>
<summary>❌ Backend Service Not Running</summary>

- **Symptom:** AI responds with "Cannot connect to backend service".
- **Solution:**
  1. Check Docker containers are running: `docker-compose -f docker-compose.prod.yml ps`
  2. Verify backend health: `curl http://localhost:2124/api/dashboard/stats`
  3. Check backend logs: `docker-compose -f docker-compose.prod.yml logs backend`

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
