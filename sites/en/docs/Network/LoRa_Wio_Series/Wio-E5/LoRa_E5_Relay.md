---
description: Instruction of Wio-E5 LoRaWAN Relay Function.
title: Wio-E5 Relay Function
keywords:
  - wio
  - docusaurus
slug: /LoRa-E5_Relay
sku: 317990687,317990829
last_update:
  date: 03/28/2026
  author: David Du
createdAt: '2026-03-28'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/LoRa-E5_Relay/
---
<!-- ![Wio E5](https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/product1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-Wireless-Module-Tape-Reel-p-5302.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

> LoRaWAN® is a mark used under license from the LoRa Alliance®.
The LoRa® Mark is a trademark of Semtech Corporation or its subsidiaries.

# Wio-E5 LoRaWAN Relay Function Guide

**Applicable Hardware**: Wio-E5 LoRa® Module

**Firmware**: Custom Firmware (Please inquiry before order)

**Document Version**: V1.0

**Server Support**: ChirpStack / The Things Network (TTN) 

> Click [Here](https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/src/rhf0m055-v5.1.2-20250319.ebin.bin) to download the Wio-E5 LoRaWAN Relay Function Firmware.

## 1. Overview

The Wio-E5 Relay function is based on the [LoRaWAN Relay Specification](https://resources.lora-alliance.org/technical-specifications/ts011-1-0-0-relay), allowing devices in areas without direct gateway coverage to access the LoRaWAN network through a **Relay Master** device.

### Core Concepts

| Role | Description | Network Connection |
|:---:|:---|:---|
| **Relay Master** | Acts as a bridge device, listening to and forwarding packets from the `Slave` to the actual gateway | Direct connection to LoRaWAN network (OTAA) |
| **Relay Slave** | Located in signal blind spots, accesses the network indirectly via the `Master` | Indirect connection via `Master` |
| **WOR** <br /> (Wake-on-Radio) | `Slave` periodically sends wake-up frames, `Master` listens and responds | - |

### Workflow Highlights
- **CAD Detection**: Master opens Channel Activity Detection window every 1 second to listen for the Slave
- **Time Synchronization**: After initial communication, the Slave synchronizes time with the Master, reducing preamble symbols from **259 to 15**, significantly lowering power consumption and channel occupancy
- **RXR Window**: Slave uses the third receive window (RX Window 3) to receive downstream data

---

## 2. Prerequisites

### 2.1 Hardware List
- **Wio-E5 Module** × 2 (one as Master, one as Slave)
- **LoRaWAN Gateway** (e.g., SenseCAP M2 Multi-Platform)
- **USB-to-Serial Tool** (Baud Rate: **9600**)
- **Computer** with serial debugging tool installed (e.g., XCOM, Putty)

### 2.2 Server Environment Selection

| Phase | Recommended Platform | Notes |
|:---|:---|:---|
| **Testing** | **ChirpStack** | Native Relay support, Web UI for device binding |
| **Production** | **TTN** | Requires TTN CLI tool configuration. TTN currently accepts relay messages but lacks complete Relay management UI |

---

## 3. Device Configuration (AT Commands)

:::note 
All AT commands must be entered via serial tool with baud rate set to **9600**, terminated by carriage return (`<CR><LF>`).
:::

### 3.1 Relay Slave Configuration

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

### 3.2 Relay Master Configuration

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

## 4. Server Configuration (ChirpStack)

### 4.1 Register Gateway and Application

1. Register Gateway: Gateways → Add gateway → Enter Gateway EUI
2. Create Application: Applications → Add application → Enter name (e.g., relay-app)

### 4.2 Create Device Profiles

#### Slave Profile
- General: Select Region (EU868), LoRaWAN 1.0.4
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-slave-1.png" alt="pir" width={600} height="auto" /></p>


- Relay Tab:
    - Device is a Relay ❌
    - Device is a Relay capable end-device ✅
    - Only use Relay ✅


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-slave-2.png" alt="pir" width={600} height="auto" /></p>


#### Master Profile

- General: Same as above
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-master-1.png" alt="pir" width={600} height="auto" /></p>


- Relay Tab:
    - Device is a Relay ✅
    - Relay enabled ✅
    - Device is a Relay capable end-device ❌

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-profile-relay-master-2.png" alt="pir" width={600} height="auto" /></p>

### 4.3 Register Devices and Bind

**Step 1: Register Slave Device**
- Go to relay-app → Devices → Add
- Fill in: Device EUI, Join EUI, select Slave Device Profile
- Enter AppKey in OTAA Keys

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-relay-tx-1.png" alt="pir" width={600} height="auto" /></p>

**Step 2: Register Master Device**
- Same as above, select Master Device Profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/device-relay-rx-1.png" alt="pir" width={600} height="auto" /></p>

**Step 3: Bind Relationship (Critical)**
1. Enter device list in relay-app
2. Select Slave device → Click Selected devices → Add to relay
3. Select corresponding Master device as relay host in popup
4. Verify: Go to Relays tab, should see Slave listed under Master

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-2.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/img/add-relay-tx-to-relay-3.png" alt="pir" width={600} height="auto" /></p>

## 5. Server Configuration (TTN)

:::note
TTN requires **Command Line Interface (CLI)** for Relay configuration. Web UI only supports basic device registration.
:::

### 5.1 Basic Registration
1. Register Gateway: `Gateways` → `Register gateway` → Enter EUI and Frequency Plan
2.  Application: `Applications` → `Add application` → Set ID (**relay-app**)
3. Register Devices:
    - Slave: Set ID (**relay-tx**), enter `DevEUI`/`JoinEUI`/`AppKey`
    - Master: Set ID (**relay-rx**), enter `DevEUI`/`JoinEUI`/`AppKey`

### 5.2 CLI Configuration (Windows Example)

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

> For more information, please refer to the [TTN Official Documentation](https://www.thethingsindustries.com/docs/concepts/features/cli/installing-cli/).


## 6. Validation Testing

### 6.1 Start Relay Master

Open the serial port tool and select the corresponding serial port with a baud rate of **9600** to monitor Log.

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

At this point, the `Relay Master` is ready to wake up and forward using the Relay Slave.

### 6.2 Start Relay Slave

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
### 6.3 Time Sync and Optimization Verification

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

### 7. Important Notes

1. Server Selection: Currently TTN only supports Relay configuration via CLI. ChirpStack offers complete Web UI support. Recommended to use ChirpStack for testing.

2. Power Optimization: After time sync, Slave WOR frame preamble reduces from 259 to 15, significantly lowering power consumption. Recommended for stable deployments.

3. Firmware Requirement: Ensure Wio-E5 firmware supports AT+STDRELAY command set.

4. Range Testing: Maintain distance between Slave and Master (e.g., 50-500 meters) during testing to verify relay forwarding effectiveness.

## Resources

- **📄[PDF]** [Wio-E5 LoRaWAN Relay Function Instruction Manual](http://files.seeedstudio.com/wiki/Wio-E5/LoRaWAN_Relay/src/E5%20relay%20function%20Instruction%20v1.0%20.pdf)