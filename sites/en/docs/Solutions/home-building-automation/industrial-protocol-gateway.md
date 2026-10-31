---
description: Multi-protocol industrial data hub on an edge gateway — OPC UA, Modbus TCP/RTU, BACnet/IP and MQTT sources unified into one point model, read and controlled through one versioned MQTT contract, with northbound store-and-forward
title: 'Industrial Multi-Protocol Data Hub: Hardware, Deployment, and Measured Results'
sidebar_label: 'Industrial Multi-Protocol Hub'
keywords:
  - industrial protocol gateway
  - multi-protocol data hub
  - OPC UA
  - Modbus TCP
  - Modbus RTU
  - BACnet/IP
  - MQTT broker
  - unified point model
  - store and forward
  - northbound publishing
  - reComputer R1000
  - reComputer R1100
  - reTerminal DM
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg
slug: /solutions/industrial-protocol-gateway
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/solutions/industrial-protocol-gateway/
generated_from: sensecraft-solutions@multi_protocol_gateway
---

:::caution[Usage notice]
This is a **protocol integration and data-hub layer**, not a certified control or metering system.
:::

## What this solution does

A building, energy or equipment-management integrator arrives on site and finds the data already exists —
behind an OPC UA controller, a Modbus meter, a BACnet/IP air handler and an MQTT sensor gateway, four
different addressing schemes and four different failure modes. This solution puts all four into **one point
registry on one edge host**, and gives the system above a single MQTT read/write contract. On a new site you
connect the controllers and map the points; the protocol layer stays as it is.

Deploy the container, add a source, let discovery propose candidates, confirm the points you want, verify
their quality, then publish them — locally on port 1883, northbound to a cloud broker on 8883, or both.

- Selection and deployment: [reference design page](https://www.seeed.cc/solutions/reference-designs/multi_protocol_gateway)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Existing devices connect as they are</h3>
                <p>Devices that already speak OPC UA, Modbus, BACnet/IP or MQTT are not replaced. They land in one point registry on one edge host, and the layer above gets one MQTT read/write contract.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Discover, then confirm</h3>
                <p>OPC UA browsing, Modbus unit scanning, BACnet Who-Is and MQTT topic observation propose candidate points; a point becomes managed once you confirm it. Where discovery is incomplete, enter points by hand.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>2,000 points at 349.99 events/s</h3>
                <p>Four sources of 500 points each at 5/10 s poll intervals, measured in one 180 s loopback run on a reComputer R2000 series.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Northbound backfills after an outage</h3>
                <p>Events are spooled locally through a 300 s cloud broker outage; on reconnect the backfill is complete (1.000) against a persistent broker and 0.9839 against an in-memory one.</p>
            </div>
        </li>
    </ul>
</div>

### What the console shows

The Access page lists each configured source with its live runtime state — after the first controller is
wired, this is the page that says whether it really connected:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/access-list-en-9837244f.png" alt="Access page: protocol, address and live runtime state for each source"/>
</div>

The Points page is one table for every managed point, with per-point quality, filtering and control:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/points-en-477df2ca.png" alt="Points page: current value, unit, quality and last update for each managed point"/>
</div>

The Data Service page configures the embedded broker and shows the topic contract it publishes:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/dataservice-en-2d03bdb5.png" alt="Data Service page: embedded broker configuration and the topic contract it publishes"/>
</div>

These captures show the console running against simulated and bench controllers. On site, managed points and live telemetry populate directly from the configured controller register maps.

The gateway comes in a rugged industrial DIN-rail enclosure that clips directly onto a standard 35mm rail inside electrical risers or plant cabinets, powered by 24V DC.

## What hardware you need

Two things: the field devices that are already installed, and one host that can reach each of their
networks.

**① Field devices** — whatever already speaks OPC UA, Modbus (TCP or RTU), BACnet/IP or MQTT. Nothing on
the plant side is replaced. What you must have per source: the OPC UA endpoint and credentials; the Modbus
unit id, register map, byte and word order; a network interface on the BACnet subnet with broadcasts
reaching it; and, for MQTT, an explicit topic-to-point mapping. Modbus RTU additionally needs a
USB-to-RS-485 adapter unless the host carries RS-485 on board.

**② The data-hub host** — a plain Docker host, x86-64 or arm64, that decides which field interfaces you get
without an adapter and whether anyone can operate the system without a laptop on site:

| | Host | On-board field I/O | When to choose it |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/113991294-2_1.jpeg" alt="reComputer R1000" width="110" /> | [reComputer R1000 Series](https://www.seeedstudio.com/reComputer-R1024-10-p-5923.html)<br/>CM4-based IoT gateway | RS-485, RJ45 Ethernet | Everything is on Ethernet, with at most one RS-485 run |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1100" width="110" /> | [reComputer R1100 Series](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>CM4-based IoT gateway and controller | RS-485, RS-232, DI/DO, Gigabit Ethernet, CAN | The site has RS-232 devices or DI/DO dry contacts as well |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image1.jpeg" alt="reTerminal DM" width="110" /> | [reTerminal DM Series](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)<br/>10.1-inch HMI with the same services | RS-485, CAN, Ethernet (CM4104032 variant adds RS-232, DI/DO, terminal block) | No permanent computer in the plant room; setup and daily checks happen on the device |

The software point ceiling is the same on all three: **2,000 points, 50 of them writable**, enforced in code.
A 2,000-point workload did not pass the capacity test on the R1000's CM4-class platform (2 GB configuration,
tested on a development board), so pick the R1100 or reTerminal DM at that scale; for smaller R1000
deployments there is no measured point count yet. eMMC size decides how much northbound
outage spool and command-receipt history stays on the box; the service itself needs about 4 GB free.

Other prerequisites: Docker Engine 20.10 or newer, ports 8280 and 1883 free (or pick unused ones before
deploying), and network reachability from the host to every protocol network.

### Negative Selection Boundaries

- **Interfaces and Point Count**: If the site requires RS-232, DI/DO signals, or exceeds 1,000 points, avoid R1000 (single RS-485); choose R1100 or reTerminal DM.
- **Headless vs On-Device UI**: If the plant room lacks a PC and operators need on-site configuration, avoid headless gateways and select the 10.1-inch reTerminal DM.

## How to deploy on site

### One: install hardware — cabinet mounting, power, and bus wiring

1. **DIN-Rail Mounting and Power Supply**:
   - Secure the gateway onto a standard 35mm DIN rail inside the control cabinet or riser box using its built-in mounting bracket.
   - Power supply: industrial regulated DC 12V/24V (wide input range DC 9–36V supported).
   - **Surge Grounding**: Connect the protective earth (PE) terminal of the gateway chassis to the cabinet equipotential ground bus using a grounding wire (≥2.5mm²) to suppress electromagnetic noise from motors and VFDs.

2. **Network and BACnet/IP Subnet**:
   :::tip[The host needs an interface on the BACnet subnet]
   BACnet/IP discovery is broadcast-based. The host needs an interface on the BACnet subnet, and the broadcasts must not be filtered by network switches. Remote Linux deployments should use host networking (`network_mode: host`). Docker Desktop bridged setups may drop UDP broadcasts; in that case, specify target device IPs manually.
   :::

3. **Modbus RTU / RS-485 Wiring and Serial Port Passthrough**:
   - **Bus Wiring**: Use shielded twisted pair (STP) cables. Connect A+ and B- to the corresponding controller terminals. Ground the shielding foil on the gateway side only. Maintain a daisy-chain topology without star branches; terminate both bus ends with 120Ω resistors.
   - **Docker Serial Passthrough**: The default Docker configuration does not mount host serial devices. When using a USB-to-RS-485 adapter or on-board serial port, explicitly map the device node in `docker-compose.yml`:
     ```yaml
     services:
       gateway:
         devices:
           - "/dev/ttyUSB0:/dev/ttyUSB0"  # Or /dev/ttyAMA0 for on-board port
         group_add:
           - "20"  # dialout GID to allow non-root container serial access
     ```
   Before enabling production writes, verify readback with actual slave IDs and register addresses on the local console.

### Two: install the software and bring the first source in

The per-device steps and application packages are on the reference design page; pick a configuration for
your site and download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/multi_protocol_gateway" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download 🖱️</font></span></strong>
    </a>
</div><br />

1. **Deploy** — the local target installs onto the machine running SenseCraft Solution; the remote target
   installs over SSH onto a reComputer R2000 series or reTerminal DM on the controller network.
2. **Create the first administrator** — no registration token is required on first run.
3. **Add a source** — OPC UA, Modbus, BACnet/IP or MQTT, then run discovery where it is available: OPC UA
   browsing, Modbus TCP unit scanning, BACnet Who-Is, MQTT topic observation. Each produces **candidates**.
   The wizard asks for address and poll interval per protocol:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/access-wizard-step1-en-7a3d57a8.png" alt="Access wizard step one: choose the protocol, fill in the address and poll interval"/>
</div>

4. **Confirm points** — only confirmed candidates become managed points. Where discovery is incomplete or
   unavailable, enter points by hand.
5. **Verify quality before granting write access** — check live values and per-point quality on the Points
   page first.
6. **Configure the data service** — the embedded broker, and optionally the northbound publisher.

Difficulty **intermediate**, about **15 minutes** to a running console; bringing in the first controller and
checking its data quality takes longer.

## Available interfaces

Data leaves the host through three interfaces:

- **Operators** — the browser console on HTTP **8280**: source management, the point table, command
  receipts, plugin management.
- **On-site systems (SCADA, energy platform, your own service)** — subscribe to the embedded broker on
  **1883**. Point telemetry arrives under `missionpack/v1/{gateway}/points/{point_id}`, with presence,
  command and receipt topics on the same contract.
- **Cloud or central systems** — enable northbound publishing to an external broker on **8883**. Telemetry
  is batched at QoS 1, per-source health and last-will status are retained, and a QoS 0 heartbeat runs
  alongside. **The currently published image has no northbound publisher.**

`{gateway}` is the gateway id you set at deploy time, so several hubs can publish to one broker without
colliding.

### The topic contract

| Topic / port | Payload | Retained |
|---|---|---|
| HTTP `8280` `/` | Browser console | — |
| `missionpack/v1/{gateway}/points/{point_id}` (1883) | Versioned point telemetry — value, quality, timestamps, revisions | No |
| presence / command / receipt topics on the same prefix (1883) | Source and gateway presence, commands issued, and the receipt for each | Presence retained |
| `missionpack/v1/{gateway}/telemetry` (8883) | Northbound batched telemetry envelope, QoS 1 | No |
| per-source health and last-will topics (8883) | Source health and gateway status | Yes |

The northbound envelope is `missionpack.northbound.v1`:

```json
{
  "schema_version": "missionpack.northbound.v1",
  "message_id": "0f3a...",
  "gateway_id": "gw-01",
  "created_at": "2026-09-05T05:01:19.045514Z",
  "samples": [
    {
      "source_id": "ahu-bacnet",
      "point_id": "analog-value:12",
      "ts": "2026-09-05T05:01:18.900000Z",
      "quality": "good",
      "value": 23.5,
      "source_revision": 4,
      "point_revision": 7
    }
  ]
}
```

**`source_revision` and `point_revision`**: the revision changes when a point is re-mapped, which tells a
configuration change apart from a field value change. A consumer that does not check them joins data from
before and after a configuration change into one series.

Two limits of the contract:

- **The protocol is MissionPack v1; this release is not Sparkplug B compatible**, so a Sparkplug host
  application needs a translation step.
- **Plain MQTT is telemetry-only.** Enable TLS and an authorised control identity before allowing remote
  commands.

### Southbound protocol scope

| Protocol | Discovery | Read | Write | Not implemented |
|---|---|---|---|---|
| OPC UA | Address-space browsing | Yes | Yes | — |
| Modbus TCP | Unit scanning | Yes | Yes | — |
| BACnet/IP | Who-Is | ReadProperty | WriteProperty with priority, release with `Null` | COV subscription, BBMD / Foreign-Device registration, BACnet MS-TP |
| MQTT (as a source) | Topic observation | Yes, via explicit topic-to-point mapping | — | Implicit mapping; topics must be mapped by hand |

## Performance and measured data {#measured-data}

Load was generated by a **four-protocol simulator** and measured over loopback on one device per tier; there is no site deployment data.

### Refresh cycle at 2,000 points

Conditions for all three tiers: 2,000 points across 4 sources (500 each), run length as noted, loopback only, on a reComputer R2000 series (arm64).

| Tier | Sampling intervals | Result |
|---|---|---|
| Stable | OPC UA/Modbus 5 s, BACnet 10 s, 180 s run | **349.99 events/s** against a 350.0 target (99.99%), prediction 0.939 cycle/s, peak process-group RSS 217.3 MiB, 1-minute CPU peak 22.1%, 0 failed-sample deltas |
| Degrading | OPC UA/Modbus 2 s, BACnet 4 s | Ran the full 900 s at **718.9 events/s** (99.1%), but prediction fell to 0.872 cycle/s and the gate failed with `PREDICTION_CYCLE_RATE_LOW` |
| Failure | OPC UA/Modbus 1 s, BACnet 2 s | `PREDICTION_WRITE_CHAIN_TIMEOUT` at **148.2 s** against a 900 s target; 2 Modbus input points were already missing in the first warm-up cycle |

Reproduce: upstream commit `b5fe4cc` with the four-protocol simulator; raw run records are cited in the upstream package's `description.md`

### Northbound outage recovery

Conditions: a 300 s cloud-broker outage (a killed broker process or container, not a degraded link) at about 350 events/s, spool limits 512 MB / 86,400 s, 1,800 s run, on an arm64 host.

| Metric | Value | Conditions |
|---|---|---|
| Spool growth during the outage | 60.1 KB/s queued bytes; 18.33 MB / 325 batches at peak | Drained to zero after reconnect |
| Broker restart to first replayed message | 1.2–2.2 s | Measured restart-to-first-replay, an upper bound on CONNACK-to-first-replay |
| Replay completeness, persistent broker | 1.000 | Durable subscriber session, message-id set intersection |
| Replay completeness, in-memory broker | 0.9839 ▲ | Same 300 s outage |

▲ All 58 missing messages arrived 0.496–1.058 s after broker restart, before the test subscriber's SUBACK at 1.069 s — a blind window before the subscription existed; the gateway did not drop them.

Reproduce: upstream commit `f831bae`; raw run records are cited in the upstream package's `description.md`

### Runtime and key parameters

The runtime is distributed as a container image (x86-64 and arm64) from `sensecraft-missionpack.seeed.cn`; there is no public source repository yet.

- **Point ceiling**: 2,000 managed points, 50 of them writable, enforced in code.
- **Sampling interval**: decides whether 2,000 points run stably, see the table above: OPC UA/Modbus 5 s with BACnet 10 s passes, while 2 s / 4 s already fails.
- **Northbound spool**: the size and age limits (512 MB / 86,400 s in the measured runs) set how long an outage the host can absorb; batch size and the QoS 0 heartbeat are also configurable.

### Known degradation

- **Each tighter sampling step** moves the result from pass to degraded to aborted; the failing metrics all come from the prediction plugin (`PREDICTION_*`).
- **The prediction plugin has a structural rate ceiling (not fixed)**: the loop sleeps a fixed interval after each cycle, so its rate is `1/(1.0 + t_cycle)`. At 2,000 points `t_cycle` is about 0.119 s, putting the ceiling near 0.894 cycle/s, below the 0.90 gate the soak test requires.

### Next steps

- Read/write with independent readback against real OPC UA, Modbus TCP, Modbus RTU (USB-to-RS-485) and BACnet/IP devices on a reComputer R10 series or reTerminal DM.
- A 72-hour unattended run on the same target hosts, with network, broker, process and device recovery drills during the run.

## Data and asset sources

- **Measured results** — load from the four-protocol simulator, on a reComputer R2000 series (arm64) and a Linux x86_64 workstation, upstream commits `b5fe4cc` and `f831bae`. Reproduced from the upstream package's own
  `description.md`; the raw run records live with the upstream project.
- **Product images and links** — Seeed product catalogue (`media-cdn.seeedstudio.com`), SKUs matching the
  bundles on the reference design page.
- **Architecture diagram** — drawn from the upstream `solution.yaml` topology; it is a
  schematic of device composition, not a screenshot.
- The runtime container image is distributed from `sensecraft-missionpack.seeed.cn`, not from this wiki.
