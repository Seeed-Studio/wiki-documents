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
  date: 04/07/2026
  author: Spencer
tags:
  - mcp
  - agents
createdAt: '2025-12-01'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/mcp_external_system_integration/
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
      <a class="get_one_now_item" href="https://www.seeed.cc/solutions/smart-spatial-interaction-zh-hans" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Solution Bundle 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeed.cc/solutions/voicecollectionanalysis-zh-hans" target="_blank">Smart Spatial Interaction</a></h2>
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

- Build and start the warehouse application server (port 2125)
- Create a persistent volume for your database

**3. Verify the deployment**:

Wait about 30 seconds for the container to start, then check:

```bash
docker-compose -f docker-compose.prod.yml ps
```

You should see the `warehouse-prod` container running.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="API Documentation"/>
</div>

- **Web UI:** Open `http://localhost:2125` in your browser
- **API Documentation:** Open `http://localhost:2125/docs` to view the Swagger UI

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

Obtain your **MCP Endpoint Address** (`wss://...`) by accessing the Watcher Agent control panel via **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP Watcher`** > **`Watcher Agent`** > **`Configuration`** (or use the [direct link to the workspace](https://sensecraft.seeed.cc/ai/device/local/37) and then click **`Watcher Agent`** in the left sidebar).

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

:::caution
The default `api_base_url` in `config.yml.example` is `http://localhost:2124/api` (the local development port). Since we deployed with `docker-compose.prod.yml` which uses port **2125**, you must update it accordingly.
:::

```yaml
# Backend API address (change from default 2124 to 2125 for Docker deployment)
api_base_url: "http://localhost:2125/api"

# API key authentication (from User Management -> API Key Management)
auth:
  type: api_key
  key: "wh_your-api-key-here"
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

If successful, you will see: `MCP 服务启动成功！` (MCP Service Started Successfully)

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
| "Query the stock of Xiaozhi Standard Version"          | Calls `query_stock` tool                              |
| "How many Xiaozhi Professional Version do we have?"    | Calls `query_stock` with professional version         |
| "Stock in 5 units of Watcher Xiaozhi Standard Version" | Calls `stock_in` tool with quantity=5                 |
| "Stock out 3 Xiaozhi units for sales"                  | Calls `stock_out` tool with quantity=3                |
| "What's today's inventory summary?"                    | Calls `get_today_statistics` tool                     |
| "List all Xiaozhi products"                            | Calls `search` tool with entity_type="material"       |

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

The warehouse demo is just a starting point. The MCP bridge uses a **Provider plugin architecture** — you don't need to modify any existing code. Instead, you create a new Provider to adapt the bridge to your own backend system.

### How It Works

The bridge has a clean separation of concerns:

- **`warehouse_mcp.py`** — Defines 6 fixed MCP tools (`query_stock`, `stock_in`, `stock_out`, `search`, `resolve_name`, `get_today_statistics`). **You don't need to modify this file.**
- **`providers/base.py`** — Abstract base class defining the interface (6 methods).
- **`providers/default.py`** — Default implementation for the demo warehouse backend.
- **Your custom provider** — A new `.py` file in `providers/` that adapts the 6 methods to your system's API.

### 1. Create a Custom Provider

Create a new file `mcp/providers/my_erp.py`:

```python
from .base import BaseProvider

class MyERPProvider(BaseProvider):
    """Adapter for My ERP System."""

    PROVIDER_NAME = "my_erp"

    def query_stock(self, product_name, show_batches=False):
        # Call your ERP's inventory API
        return self.http_get(f"/inventory/query", params={"sku": product_name})

    def stock_in(self, product_name, quantity, reason, operator, fuzzy,
                 location=None, contact_id=None, variant=None):
        return self.http_post("/inventory/receive", {
            "sku": product_name, "qty": quantity, "note": reason
        })

    def stock_out(self, product_name, quantity, reason, operator, fuzzy,
                  variant=None):
        return self.http_post("/inventory/ship", {
            "sku": product_name, "qty": quantity, "note": reason
        })

    def search(self, query, entity_type, category, status, contact_type,
               fuzzy, include_batches=False, max_results=0):
        return self.http_get("/search", params={"q": query, "type": entity_type})

    def resolve_name(self, text, entity_type="all"):
        return self.http_get("/fuzzy-match", params={"q": text})

    def get_today_statistics(self):
        return self.http_get("/dashboard/today")
```

The base class (`BaseProvider`) provides built-in `http_get()` and `http_post()` helpers with automatic auth header injection and error handling — so your provider code stays minimal.

:::tip Auto-Discovery
Just drop the `.py` file into `mcp/providers/`. The bridge automatically discovers and registers all `BaseProvider` subclasses — no manual registration needed.
:::

### 2. Configure via `config.yml`

If you haven't already, create `config.yml` from the template first:

```bash
cd mcp
cp config.yml.example config.yml
```

Then switch to your provider and point to your real server — **no code changes required**:

```yaml
# Switch to your custom provider
provider: "my_erp"

# Your production API address
api_base_url: "http://192.168.50.10:8080/api/v1"

# Authentication (supports api_key, bearer, basic)
auth:
  type: api_key
  key: "your-production-api-key"
```

You can also override settings using environment variables: `WAREHOUSE_API_URL`, `WAREHOUSE_API_KEY`, and `WAREHOUSE_PROVIDER`.

<details>

<summary>Supported Authentication Methods</summary>

The base class supports multiple auth types out of the box via `config.yml`:

```yaml
# API Key (default)
auth:
  type: api_key
  header: X-API-Key    # optional, defaults to X-API-Key
  key: "your-key"

# Bearer Token
auth:
  type: bearer
  token: "your-bearer-token"

# Basic Auth
auth:
  type: basic
  username: "admin"
  password: "secret"
```

For custom authentication (e.g., HMAC signing), override the `get_auth_headers()` method in your provider.

</details>

<details>

<summary>Best Practices for Provider Development</summary>

### Return Value Format

The return value is read by the AI to generate a spoken response. Keep it concise (typically under 1024 bytes).

```Python
# Good — concise
return {
    "success": True,
    "quantity": 150,
    "message": "Stock query successful"
}

# Bad — too verbose
return {
    "success": True,
    "full_product_details": {...},
    "complete_history": [...]
}
```

### Error Handling

The base class `http_get()` / `http_post()` already handle connection errors and HTTP status codes. For additional business logic errors, return a structured error dict:

```Python
return {
    "success": False,
    "error": "Product not found",
    "message": "No matching product in the ERP system."
}
```

### Logging

:::danger Never use print()
MCP uses standard I/O (stdio) for communication. Using `print()` will corrupt the protocol data stream. Always use a logger:
:::

```Python
import logging
logger = logging.getLogger("WarehouseMCP")
logger.info(f"Querying stock for: {product_name}")
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
  3. Ensure port 2125 is not in use
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
  1. Check the container is running: `docker-compose -f docker-compose.prod.yml ps`
  2. Verify backend health: `curl http://localhost:2125/api/dashboard/stats`
  3. Check logs: `docker-compose -f docker-compose.prod.yml logs`

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
- [Warehouse System Repository](https://github.com/suharvest/warehouse_system) - Full source code, including Provider examples.
- [FastMCP Documentation](https://github.com/PrefectHQ/fastmcp) - Dive deeper into advanced tool definitions.

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
