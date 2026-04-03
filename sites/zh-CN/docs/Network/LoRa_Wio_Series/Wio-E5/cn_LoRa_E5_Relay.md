---
description: Wio-E5 LoRaWAN 中继功能使用说明。
title: Wio-E5 中继功能
keywords:
  - wio
  - docusaurus
slug: /lora-e5_relay
sku: 317990687,317990829
last_update:
  date: 03/28/2026
  author: David Du
createdAt: '2026-03-28'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/cn/lora-e5_relay/
---
# Wio-E5 LoRaWAN 中继功能指南

<!-- ![Wio E5](https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-Wireless-Module-Tape-Reel-p-5302.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

> LoRaWAN® 是在 LoRa Alliance® 许可下使用的标志。
LoRa® 标志是 Semtech Corporation 或其子公司的商标。

**适用硬件**：Wio-E5 LoRa® 模组

**固件**：自定义固件（下单前请先咨询）

**文档版本**：V1.0

**服务器支持**：ChirpStack / The Things Network (TTN) 

> 点击[此处](https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/src/rhf0m055-v5.1.2-20250319.ebin.bin)下载 Wio-E5 LoRaWAN 中继功能固件。

## 1. 概述

Wio-E5 中继功能基于 [LoRaWAN Relay Specification](https://resources.lora-alliance.org/technical-specifications/ts011-1-0-0-relay)，允许处于无网关直连覆盖区域的设备，通过一个**中继主机（Relay Master）**接入 LoRaWAN 网络。

### 核心概念

| 角色 | 描述 | 网络连接方式 |
|:---:|:---|:---|
| **Relay Master** | 作为桥接设备，监听并转发来自 `Slave` 的数据包到实际网关 | 与 LoRaWAN 网络直接连接（OTAA） |
| **Relay Slave** | 位于信号盲区，通过 `Master` 间接接入网络 | 通过 `Master` 间接连接 |
| **WOR** <br /> (Wake-on-Radio) | `Slave` 周期性发送唤醒帧，`Master` 监听并响应 | - |

### 工作流程要点
- **CAD 侦测**：Master 每 1 秒开启一次信道活动检测（CAD）窗口，用于监听 Slave
- **时间同步**：初次通讯后，Slave 与 Master 进行时间同步，将前导码符号数从 **259 减少到 15**，显著降低功耗和信道占用
- **RXR 接收窗口**：Slave 使用第三个接收窗口（RX Window 3）接收下行数据

---

## 2. 前置条件

### 2.1 硬件清单
- **Wio-E5 模组** × 2（一个作为 Master，一个作为 Slave）
- **LoRaWAN 网关**（例如 SenseCAP M2 Multi-Platform）
- **USB 转串口工具**（波特率：**9600**）
- 安装了串口调试工具的**电脑**（如 XCOM、Putty）

### 2.2 服务器环境选择

| 阶段 | 推荐平台 | 说明 |
|:---|:---|:---|
| **测试** | **ChirpStack** | 原生支持 Relay，提供 Web UI 进行设备绑定 |
| **量产** | **TTN** | 需要使用 TTN CLI 工具进行配置。TTN 目前可接收中继消息，但尚未提供完整的中继管理 UI |

---

## 3. 设备配置（AT 指令）

:::note 
所有 AT 指令必须通过串口工具输入，波特率设置为 **9600**，并以回车换行（`<CR><LF>`）结尾。
:::

### 3.1 Relay Slave 配置

```bash
# 1. Set to OTAA mode
AT+MODE=OTAA

# 2. Set frequency band (EU868 example)
AT+DR=EU868

# 3. Set channels (0-2)
AT+CH=NUM,0-2

# 4. Enable Slave mode (Critical)
AT+STDRELAY=MODE,SLAVE

# 5. Get device ID information (record DevEUI and AppEUI)
AT+ID

# 6. Set AppKey (generated on server side)
AT+KEY=APPKEY,"your_app_key_here"
```

### 3.2 Relay Master 配置

```bash
# 1. Basic network settings (same as Slave)
AT+MODE=OTAA
AT+DR=EU868
AT+CH=NUM,0-2

# 2. Initially disable Relay mode (enabled via server downlink)
AT+STDRELAY=MODE,OFF

# 3. Set AppKey
AT+KEY=APPKEY,"your_app_key_here"

# 4. Enable debug logs (to observe forwarding process)
AT+LOG=DEBUG
```

## 4. 服务器配置（ChirpStack）

### 4.1 注册网关和应用

1. 注册网关：Gateways → Add gateway → 输入 Gateway EUI
2. 创建应用：Applications → Add application → 输入名称（例如：relay-app）

### 4.2 创建设备配置文件（Device Profiles）

#### Slave 配置文件
- General：选择区域（EU868），LoRaWAN 1.0.4
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-slave-1.png" alt="pir" width={600} height="auto" /></p>


- Relay 选项卡：
    - Device is a Relay ❌
    - Device is a Relay capable end-device ✅
    - Only use Relay ✅


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-slave-2.png" alt="pir" width={600} height="auto" /></p>


#### Master 配置文件

- General：与上述相同
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-master-1.png" alt="pir" width={600} height="auto" /></p>


- Relay 选项卡：
    - Device is a Relay ✅
    - Relay enabled ✅
    - Device is a Relay capable end-device ❌

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-master-2.png" alt="pir" width={600} height="auto" /></p>

### 4.3 注册设备并绑定

**步骤 1：注册 Slave 设备**
- 进入 relay-app → Devices → Add
- 填写：Device EUI、Join EUI，并选择 Slave 设备配置文件
- 在 OTAA Keys 中输入 AppKey

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-relay-tx-1.png" alt="pir" width={600} height="auto" /></p>

**步骤 2：注册 Master 设备**
- 与上述相同，选择 Master 设备配置文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-relay-rx-1.png" alt="pir" width={600} height="auto" /></p>

**步骤 3：绑定关系（关键）**
1. 进入 relay-app 的设备列表
2. 选择 Slave 设备 → 点击 Selected devices → Add to relay
3. 在弹出窗口中选择对应的 Master 设备作为中继主机
4. 校验：进入 Relays 选项卡，应能看到 Slave 列在对应 Master 之下

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-2.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-3.png" alt="pir" width={600} height="auto" /></p>

## 5. 服务器配置（TTN）

:::note
TTN 需要使用 **命令行界面（CLI）** 进行中继配置。Web UI 仅支持基础设备注册。
:::

### 5.1 基础注册
1. 注册网关：`Gateways` → `Register gateway` → 输入 EUI 和频率计划（Frequency Plan）
2.  创建应用：`Applications` → `Add application` → 设置 ID（**relay-app**）
3. 注册设备：
    - Slave：设置 ID（**relay-tx**），输入 `DevEUI`/`JoinEUI`/`AppKey`
    - Master：设置 ID（**relay-rx**），输入 `DevEUI`/`JoinEUI`/`AppKey`

### 5.2 CLI 配置（Windows 示例）

```bash
# 1. Download and configure CLI (version 3.32.2+)
ttn-lw-cli.exe use "eu1.cloud.thethings.network"

# 2. Login to TTN (opens browser for authorization)
ttn-lw-cli.exe login

# 3. Enable Relay Master (serving mode)
ttn-lw-cli.exe relays create relay-app relay-rx --mode.serving

# 4. Enable Relay Slave and associate with Master (always via Master)
ttn-lw-cli.exe relays create relay-app relay-tx \
  --mode.served.mode.always \
  --mode.served.serving-device-id relay-rx

# 5. Create uplink forwarding rule (index 0)
ttn-lw-cli.exe relays uplink-forwarding-rules create relay-app relay-rx 0 --device-id relay-tx
```

> 更多信息请参考 [TTN 官方文档](https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/)。


## 6. 验证测试

### 6.1 启动 Relay Master

打开串口工具，选择对应的串口并将波特率设置为 **9600**，用于监控日志（Log）。

```bash
# 1. Turn on log output:
AT+LOG=DEBUG

# 2. Reset device
AT+RESET

# 3. The Relay Master is turned on and off by the server downlink control, turn off the Relay mode first 
AT+STDRELAY=MODE,OFF

# 4. Join network (observe logs until +JOIN:Done)
AT+JOIN

# 5. Trigger uplink to receive Relay Config MAC command from server
AT+MSG

# Logs should show:
# +LOG: DEBUG ... MACCMD, RX, 0219010350FF00010640002000000042400043007F07
# Then CAD window opens every 1 second: 
# +LOG: DEBUG 211708 LORA   CAD, 865100000, SF9, 125KHz
```

此时，`Relay Master` 已准备好通过 Relay Slave 进行唤醒和转发。

### 6.2 启动 Relay Slave

```bash
# 1. Ensure Slave mode is set
AT+STDRELAY=MODE,SLAVE

# 2. Reset and enable logs
AT+RESET
AT+LOG=DEBUG

# 3. Attempt network join (via Master forwarding)
AT+MODE=OTAA
AT+JOIN

# Logs should show:
# +JOIN: Network joined
# +JOIN: NetID 000000 DevAddr 00:C9:F4:5F
# +JOIN: Done
```
### 6.3 时间同步与优化验证

```bash
# Set retry count to 1
AT+RETRY=1

# Send confirmed packet (first time)
AT+CMSGHEX=AA

# +LOG: DEBUG 872489 LORA   TX, 865100000, SF9, 125KHz, 259, 22
# +LOG: DEBUG 872490 LORA   TX, 015FF4C90054066CFF01006A3A2EA8
# Observe: WOR_ACK received, preamble length ~259

# At this point, WOR_ACK will be received and time synchronization will be performed, and the number of subsequent preamble derived from the calculation will be greatly reduced.

# Send again (synchronized)
AT+CMSGHEX=AA

# +LOG: DEBUG 141852 LORA   TX, 865100000, SF9, 125KHz, 15, 22
# Observe: Preamble reduced to ~15, latency decreased
```

### 7. 重要说明

1. 服务器选择：目前 TTN 仅支持通过 CLI 进行中继配置；ChirpStack 提供完整的 Web UI 支持。建议在测试阶段使用 ChirpStack。

2. 功耗优化：时间同步后，从机 WOR 帧前导码从 259 减少到 15，显著降低功耗。推荐用于稳定部署场景。

3. 固件要求：请确保 Wio-E5 固件支持 AT+STDRELAY 指令集。

4. 测试距离：在测试过程中保持从机与主机之间的距离（如 50-500 米），以验证中继转发效果。

## 资源

- **📄[PDF]** [Wio-E5 LoRaWAN 中继功能使用说明书](http://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/src/E5%20relay%20function%20Instruction%20v1.0%20.pdf)