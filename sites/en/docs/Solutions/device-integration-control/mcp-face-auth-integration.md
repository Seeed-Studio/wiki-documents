---
description: Connect your own WMS, ERP or SaaS platform to Seeed voice AI devices through MCP, and use the device's built-in face recognition to record who actually performed each operation.
title: Add Face-Verified Operations to Your Platform via MCP
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
url: https://wiki.seeedstudio.com/solutions/mcp-face-auth-integration/
---

:::note[Notice]
Face recognition processes biometric data. Before deploying this in production, confirm that your use case complies with local privacy regulations, and obtain consent from the people you enroll. Face templates are stored as numeric embeddings, but they remain personal data in most jurisdictions.
:::

## Overview

This guide is for solution providers and software vendors who already have a working platform — a WMS, ERP, CRM or a custom backend — and want to add voice operation on Seeed devices without rebuilding their product.

Two problems have to be solved separately, and this page treats them separately:

1. **Reach.** Your platform needs to expose its business logic to the device. That is the [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol) layer, and it is covered in depth by the companion page [Bring Voice AI to Your Business System (MCP)](/mcp_external_system_integration).
2. **Trust.** Once an operator can change your inventory by speaking, you need to know *who spoke*. A voice command carries no identity. The name the language model writes into a record is whatever the speaker claimed — it can be faked by simply saying a different name.

The device solves the second problem. SenseCAP Watcher carries a vision co-processor that recognizes the person in front of it, and the platform turns that recognition into a verified operator name attached to every gated operation. Your platform receives that name as a single string.

There are two ways to run the recognition, and choosing between them is the main decision this page helps you make.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/excalidraw-architecture.png" alt="MCP integration architecture"/>
</div>

## Features

Voice control without identity is an audit gap. These are the properties that close it.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Identity That Cannot Be Spoken</h3>
                <p>The operator name is produced by face matching, not by the language model. A speaker who claims someone else's name still writes their own verified identity into the record, because the two values travel in separate fields.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <div class="info-content">
                <h3>One Column of Schema Change</h3>
                <p>All biometric tables — subjects, embeddings and audit logs — stay on the Seeed side. Only a verified name crosses into your database, so adopting face verification costs you a single nullable column, or nothing at all if you choose not to store it.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v13.5m-3.75-13.5v13.5m-3.75-13.5v13.5m11.25-13.5v13.5m3.75-13.5v13.5m-1.5-13.5H9.75v13.5h9.75V5.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Runs With or Without a Compute Box</h3>
                <p>Start on the device's own NPU with no extra hardware, then move recognition to a LAN inference server when you need a larger roster or anti-spoofing. The switch is a configuration change; your MCP tools and your database are untouched.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Per-Operation Enforcement</h3>
                <p>Rules are set per operation and per warehouse. Require a face for stock-out but not for stock queries, restrict an operation to a named allow-list, or raise the match threshold for high-value moves — without touching integration code.</p>
            </div>
        </li>
    </ul>
</div>

## System Architecture

The verification gate sits in the **MCP tool layer**, above your Provider. Every gated tool calls the gate first and only then calls your code. This is what makes the guarantee hold regardless of what your Provider does.

- **SenseCAP Watcher** captures the voice command and, depending on the path you choose, either performs face matching on its own NPU or supplies a camera frame on request.
- **The MCP tool layer** (`warehouse_mcp.py`) exposes the business tools. Before executing any gated tool, it posts to `/api/face/verify-mcp` and honours the verdict. The policy is **fail-closed**: anything other than an explicit allow blocks the operation.
- **The Seeed backend** owns the enrolled people, their embeddings, the rules, and the audit log. It returns a verdict and, on success, the matched person's name.
- **Your Provider** is a small Python class that maps six business methods onto your existing REST API. It receives the verified name as an ordinary argument.

:::info Two axes that are easy to confuse
`mode` selects **where inference runs** — `local` (on the device) or `lan` (on an external service). `verify_frequency` selects **how often** verification happens — `always` or once per conversation (`session`).

An older column named `verify_mode` (`session` / `interface`) still exists in the database for rollback purposes, but the verification path no longer reads it. Ignore it, and disregard any older document that presents it as the live switch.
:::

## Part 1 — Connect Your Platform

Face verification is layered on top of a working MCP connection, so set that up first. The short version: you write one Python class, and the bridge, the tool definitions and the voice prompt engineering are reused as-is.

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

Your class implements six required methods — `resolve_name`, `query_stock`, `stock_in`, `stock_out`, `search`, `get_today_statistics` — plus two optional ones, `query_batch` and `move_batch_location`.

:::caution Take the signatures from the code, not from the prose
The tool layer passes these arguments **positionally**. Copy each signature from `mcp/providers/base.py` in the repository. Several older documents still show `stock_in` and `stock_out` with a single `reason` parameter; it has since been split into `reason_category` and `reason_note`, and further parameters were added. A signature that does not match raises `TypeError` at the first call.
:::

The full walkthrough — obtaining an MCP endpoint from SenseCraft, deploying the backend, creating an API key, starting the bridge and testing with voice — is on the companion page:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/mcp_external_system_integration/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Bring Voice AI to Your Business System</font></span></strong></a>
</div>

## Part 2 — Choose Your Verification Path

Both paths present the same interface to your Provider. They differ in where the face matching happens, and therefore in roster size, robustness and hardware cost.

| | Path 1 — On-Device | Path 2 — External Compute Box |
| :--- | :--- | :--- |
| `mode` value | `local` | `lan` |
| Where matching runs | Himax WE2 NPU inside SenseCAP Watcher | Your LAN inference service |
| Extra hardware | None | One compute box per site |
| Enrolled people per device | **20 maximum** | No fixed limit |
| Face model | MobileFaceNet, 128-D, INT8 | Your choice |
| Anti-spoofing / liveness | Not available | Supported, if your service reports it |
| Works without LAN access to the device | No | Yes, when the device supplies the frame |
| Match threshold | Tenant-wide | Tenant-wide, with per-rule override |
| Best for | Small teams, one shift, fast pilots | Larger rosters, stricter checks, multiple sites |

:::tip Start local, move to LAN later
The two paths share the same enrollment records, rules and audit log. Switching is a configuration change in the admin UI — the platform re-computes existing enrollments against the new model in the background. Nothing in your MCP tools or your database changes.
:::

### Path 1 — On-Device Verification

The Watcher matches faces itself. The backend pushes a compact face library to the device over the LAN, the device stores it in flash, and at verification time the backend asks the device who it is currently looking at.

#### How It Behaves

- Enrolled embeddings are quantized to `fp16` and pushed to the device, 256 bytes per person. The database keeps the canonical `float32` copy.
- The model tag is fixed at `we2-mfnr6-128-v1` on both sides. Enrollments carrying any other tag are filtered out of the push, which produces an empty library rather than an error — so if a push reports zero faces, check the tag first.
- The device holds at most **20 people**. This is a hard limit of the on-device store, not a licensing choice.
- The push targets **port 80** on the device address regardless of the port recorded for it, and the receiving endpoint is unauthenticated. Treat the device network as trusted, or isolate it.

#### Setting It Up

**1. Enroll each operator.** Upload one or more photos per person. In `local` mode the embeddings are computed in-process, so no external service is required.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-enroll.png" alt="enrolling a face from the admin UI"/>
</div>

**2. Register the physical device** under your MCP connection with its LAN IP address, then push the face library to it. The device list sits under each agent connection, and the push button is on the device row.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/mcp-devices-push.png" alt="physical device registered under an MCP connection, with the push-faces action"/>
</div>

**3. Create a rule** for each operation you want gated. See [Which Operations Can Be Gated](#which-operations-can-be-gated) below.

:::caution The device must be reachable from the backend
Verification asks the device directly. If the backend cannot reach it, the result is a denial, not a bypass. Private IP addresses are required — loopback, link-local and reserved ranges are rejected when registering a device.
:::

### Path 2 — External Compute Box

Recognition moves to an HTTP service on your network. The backend obtains an image — supplied by the caller, or pulled from the device's camera — sends it to your service for embedding, and performs the cosine match itself against the enrolled roster.

This removes the 20-person limit, lets you run a larger and more accurate model, and enables liveness detection.

#### The Contract Your Service Implements

Two endpoints. Both accept `Authorization: Bearer <token>` when a token is configured, and both must answer within **10 seconds**.

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

Behaviour to be aware of:

- When several faces are returned, the one with the highest `det_score` is used.
- Returning `"live": false` blocks the operation as a spoof attempt.
- The embedding dimension is not fixed by the platform, but it must stay constant for a given `model_tag`. Matching is scoped by tag, so changing your model means publishing a new tag.
- Change the model tag and existing enrollments are automatically re-computed from their stored source images in the background.

#### Configuring It

In the admin UI, set the recognition mode to the LAN device option, enter the base URL of your service, and use the connection test — it calls `/health` and reports the model tag it found. The threshold and verification frequency sit alongside it.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-config-verify-mode.png" alt="recognition mode, verification frequency, confidence threshold and remote endpoint"/>
</div>

The endpoint field and its connection test are hidden when the mode is set to on-device, since no external service is involved in that path.

:::caution Match the threshold to your model
The default cosine threshold is `0.45`. That value was chosen for the bundled 128-D model and is not meaningful for a different embedding space. Measure the score distribution of your own model on genuine and impostor pairs before trusting the default, and set a per-rule override for high-value operations.
:::

#### Recommended Compute Boxes

The inference service is a plain HTTP service, so any machine on the LAN that can run your model will do. These are the complete, ready-to-deploy systems we recommend for it.

|reComputer Robotics J4012|reComputer Industrial R2135-12|reComputer AI Industrial R2135-12|
|------------------|--------------------------|-----------------------|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110310-recomputer-robotics_2.jpg" alt="reComputer Robotics J4012" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image_6.jpg" alt="reComputer Industrial R2135-12" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-_r235.jpeg" alt="reComputer AI Industrial R2135-12" width={300} height="auto" />|
|NVIDIA Jetson Orin NX<br/>Up to 100 TOPS · 16GB LPDDR5<br/>Highest headroom, largest models|Raspberry Pi CM5 + Hailo-8<br/>26 TOPS · 8GB · 32GB eMMC<br/>Fanless, -20 to 65 °C|Raspberry Pi CM5 + Hailo-8<br/>26 TOPS · 8GB · 32GB eMMC<br/>Fanless, IP40, most affordable|
|<p style={{textAlign: 'center'}}>[Get One Now!](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)</p>|<p style={{textAlign: 'center'}}>[Get One Now!](https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html)</p>|<p style={{textAlign: 'center'}}>[Get One Now!](https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html)</p>|

Choose the Jetson system when you want to run a large embedding model or serve several sites from one box. Choose either R2135 when the box sits in a plant room or on a wall in a warehouse — both are fanless and rated for industrial temperatures.

## Part 3 — What Reaches Your System

This is the part that decides how much work the integration is for you, and the answer is: very little.

### You Build No Biometric Tables

People, embeddings, rules and the audit trail all live on the Seeed side. Exactly one value crosses the boundary into your Provider — the verified operator's name, as a string:

```text
face matches "Zhang San"  →  actual_operator="Zhang San"  →  your Provider.stock_in(...)
```

You have three options:

| Option | What you do | Result |
| :--- | :--- | :--- |
| **Ignore it** | Accept the `actual_operator` argument and discard it | Zero schema change. Operations are still blocked when a rule requires a face; the full audit trail remains queryable in the Seeed admin UI |
| **Store it** (recommended) | Add one column to your transaction table | Verified identity lands in your own records |
| **Map it** | Write it into an existing "handled by" column | Acceptable, but see the warning below |

Even if you store nothing, every decision is recorded on the Seeed side with the matched person, the confidence score, the verdict and the reason — so the audit trail exists whether or not your database participates.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-audit-log.png" alt="face authentication audit log showing matched person, confidence and verdict per operation"/>
</div>

To store the name yourself, add one column:

```sql
-- Snapshot of the operator name resolved by face recognition.
ALTER TABLE <your_inventory_transactions>
  ADD COLUMN actual_operator VARCHAR(255) NULL;
```

Three constraints:

1. **It must be nullable.** When face verification is disabled, or a rule does not require it, the value is `NULL`.
2. **Store the name, not a foreign key.** Your database has no copy of the subject table, so an ID would be meaningless to you.
3. **Never merge it with `operator`.** `operator` is written by the language model and reflects what the speaker said — it can be wrong or deliberately false. `actual_operator` is the result of face matching. Merging them destroys the only distinction that makes the feature worth having.

### Which Operations Can Be Gated

Rules are keyed by operation name, scoped per warehouse, and carry an optional allow-list and threshold override. They are evaluated on the server and take effect as soon as they are saved — nothing needs to be pushed to the device.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-rules.png" alt="per-operation face rules with warehouse scope, allow-list and threshold override"/>
</div>

| Rule key | Covers |
| :--- | :--- |
| `stock_in` | Stock-in |
| `stock_out` | Stock-out |
| `move_batch_location` | Batch relocation |
| `query` | All read tools — stock query, batch query, search, daily statistics |

An empty allow-list means every enrolled and active person is accepted. A non-empty one restricts the operation to those subjects; anyone else is denied even on a confident match.

:::caution Two rule keys in the admin UI do nothing
The rule editor currently offers `transfer` and `adjust`. No MCP tool emits either name, so rules created for them never fire. Conversely `move_batch_location`, which **is** enforced, cannot be selected in the UI — create that rule through `POST /api/face/rules` directly.
:::

### REST Endpoints You Can Drive

If you want to manage enrollment from your own admin UI instead of ours, these are available. Authenticate with `X-API-Key`.

| Purpose | Endpoint | Required scope |
| :--- | :--- | :--- |
| Create / list / update / delete a person | `POST GET PUT DELETE /api/face/subjects` | `FACE:ADMIN` |
| Enroll photos or precomputed embeddings | `POST /api/face/enrollments` | `FACE:ADMIN` |
| List / delete enrollments | `GET DELETE /api/face/enrollments` | `FACE:ADMIN` |
| Manage rules | `GET POST PUT DELETE /api/face/rules` | `FACE:ADMIN` |
| Read / write face configuration | `GET PUT /api/face/config` | `FACE:ADMIN` |
| Test a remote inference endpoint | `POST /api/face/test-connection` | `FACE:ADMIN` |
| Read the audit log | `GET /api/face/logs` | `FACE:ADMIN` |
| Verify a face for an operation | `POST /api/face/verify-mcp` | `FACE:WRITE` |

The verification call returns a fixed shape:

```jsonc
{
  "status": "pass" | "deny" | "skipped",
  "failure_reason": "…" ,          // null when it passed cleanly
  "confidence": 0.87,
  "matched_subject_id": 12,
  "matched_subject_name": "Zhang San"
}
```

`pass` and `skipped` allow the operation; `deny` blocks it.

## The One Mistake Everyone Makes

The face gate and your Provider read the **same** `api_base_url` configuration field.

Point `api_base_url` at your own WMS — which looks like the obvious thing to do — and the gate starts looking for `/api/face/verify-mcp` on your server. It is not there, the 404 is treated as a denial, and because the policy is fail-closed **every tool stops working, including read-only queries**.

| `api_base_url` points at | Gate result | Consequence |
| :--- | :--- | :--- |
| Your WMS, no `/face/verify-mcp` | `deny` · `http_404` | All tools blocked |
| An unreachable address | `deny` · `transport_error` | All tools blocked |
| Empty string | `skipped` · `no_api_base` | Tools run, but your Provider also loses its base URL |
| The Seeed backend | Decided by your rules | Correct |

**The fix: give each one its own field.** Leave `api_base_url` pointing at the Seeed backend and read your own address from a custom key.

```yaml
provider: "my_wms"
api_base_url: "http://localhost:2124/api"              # reserved for the face gate
auth:
  type: api_key
  key: "wh_xxx"                                        # Seeed API key
wms_base_url: "https://your-wms.example.com/api/v1"    # your system
wms_token: "your-token"
```

Then override `base_url` in your Provider's constructor, exactly as shown in [Part 1](#part-1--connect-your-platform). The two credential sets stay independent and no core code changes.

:::tip If you do not want face verification at all
Connect to the Seeed backend and simply create no rules. The gate returns `skipped` and becomes transparent. You do not need to disable anything.
:::

Two further options exist for deployments that do not use the Seeed backend at all: implement `/api/face/verify-mcp` yourself and return a constant `skipped` stub, or leave `api_base_url` empty and use the split-field pattern above. Keep any implementation of your own well under the **18-second** client timeout, or it will be treated as a transport failure and denied.

## FAQ

### 1. Every tool returns `face_auth_denied:http_404`, including queries

`api_base_url` is pointing at a backend that has no `/api/face/verify-mcp`. Apply the split-field configuration above. This is by far the most common integration failure.

### 2. A push reports zero faces sent

The face library is filtered by model tag. Enrollments must carry `we2-mfnr6-128-v1` to be eligible for an on-device push. Enrollments created against a remote endpoint with a different tag are excluded — re-enroll, or let the background re-computation finish.

### 3. `actual_operator` is always empty in our records

Expected when no rule requires a face for that operation, or when the feature is disabled for the tenant. Create a rule for the operation to start recording it.

### 4. We switched to our ERP but data still lands in the local database

The MCP layer falls back to the default provider on any error — network failure, missing file, load exception — and logs a warning. Check the MCP log for that warning first.

### 5. Verification is slow or intermittently denied

Three separate timeouts apply: 18 seconds from the MCP client to the backend, 10 seconds from the backend to a remote inference endpoint, and roughly 6.5 to 8 seconds from the backend to the device. The slowest link governs. If your inference service is close to 10 seconds, reduce the model size or the image resolution.

### 6. Can we verify once per conversation instead of per operation?

Yes. Set the verification frequency to `session`. The first successful check is cached for the conversation, up to a 10-minute ceiling. Use `always` when every individual operation must be independently proven.

### 7. Which face model does the device use?

MobileFaceNet, 128 dimensions, INT8, running on the Himax WE2 co-processor, published as `we2-mfnr6-128-v1`. The tag is hard-coded on both the backend and the firmware; a mismatch rejects the whole batch.

## Resources

- [Bring Voice AI to Your Business System (MCP)](/mcp_external_system_integration) — the MCP bridge setup this page builds on
- [MCP Endpoint Setup Guide](/mcp_endpoint) — creating and managing MCP endpoints
- [Warehouse System Repository](https://github.com/suharvest/warehouse_system) — source, Provider base class and examples
- [Model Context Protocol](https://github.com/modelcontextprotocol) — protocol specification

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## CHANGELOG

- **07/31/2026** — Initial release.
