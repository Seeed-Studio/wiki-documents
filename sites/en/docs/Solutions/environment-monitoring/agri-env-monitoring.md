---
description: Building a LoRaWAN soil and air monitoring site that lands in Home Assistant — what devices you need, how to deploy each of the three ingest paths, which MQTT interfaces are available
title: 'LoRaWAN Agricultural Environment Monitoring: Hardware, Deployment, and Interfaces'
keywords:
  - agricultural environment monitoring
  - LoRaWAN soil moisture
  - soil EC monitoring
  - greenhouse monitoring system
  - SenseCAP S210x
  - ChirpStack
  - The Things Stack
  - Home Assistant
  - MQTT discovery
  - LoRaWAN gateway
  - SenseCAP M2
  - reComputer R12 Series
image: https://files.seeedstudio.com/wiki/reference-design/agri_env_monitor/ha-overview-local-20260907-1565d1b3.jpg
slug: /solutions/agri-env-monitoring
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/solutions/agri-env-monitoring/
generated_from: sensecraft-solutions@agri_env_monitor
---

:::caution[Usage notice]
This is an operations dashboard, not a certified measurement system: the value shown is the raw value the node reported, with a unit attached.
:::

## What this solution does

Soil moisture and EC in a greenhouse decide when to irrigate and when to feed; rainfall and soil temperature in an open field decide the same for a different crop. SenseCAP LoRaWAN nodes measure those values and report them over the air. The uplinks become Home Assistant entities with the correct unit, device class and state class: they appear on a dashboard, accumulate history, and raise a notification when a value crosses a threshold.

It is meant for greenhouses, open field plots, sites with no usable internet, and existing SenseCAP deployments that want a local dashboard without moving anything.

- Selection and deployment: [reference design page](https://www.seeed.cc/solutions/reference-designs/agri_env_monitor)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>SenseCAP nodes work out of the box</h3>
                <p>S210x nodes report on the cycle configured on the node, with nothing to push to them. Entities are created by MQTT discovery with units and classes set; no YAML to write.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Third-party probes connect the same way</h3>
                <p>Existing RS485 or analogue probes come in through the S2100 data logger and use the same measurement mapping. The mapping, compose files, dashboard and automations ship in the public solution package; adding a quantity is one row in a config file.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Can run with no internet at all</h3>
                <p>ChirpStack runs on the M2 gateway, the bridge and Home Assistant on a local host. No cloud account, no outbound connection.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Change network server, keep the dashboard</h3>
                <p>Entity names are identical on the SenseCAP cloud, a self-hosted The Things Stack and a local ChirpStack, so switching paths leaves dashboards, automations and exports untouched.</p>
            </div>
        </li>
    </ul>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/agri_env_monitor/ha-overview-local-20260907-1565d1b3.jpg" alt="Home Assistant dashboard showing soil moisture, ambient environment, and EC sensor entities"/>
</div>

## What hardware you need

Four things on site: the LoRaWAN nodes, a gateway that hears them, a network server, and one Linux host with Docker.

**① The nodes** — SenseCAP S210x sensors measure directly; an S2100 data logger brings existing third-party RS485 or analogue probes onto the same LoRaWAN network. Nothing is deployed to either — they measure and report periodically on a cycle configured on the node.

**② The gateway and network server** — the three paths differ only here, and the choice decides whether the site needs internet.

| | Device | Role | When to choose it |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/f/i/first_page_all-31.jpg" alt="SenseCAP S2101" width="110" /> | [SenseCAP S210x](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)<br/>Soil and air sensor nodes | Measure and report | Always. Pick the variant by the quantity you need and the band by your region |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992872-application-10.png" alt="SenseCAP S2100" width="110" /> | [SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)<br/>LoRaWAN data logger | Third-party probe to LoRaWAN | You already have RS485 or analogue probes |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/_/__front-05.png" alt="S-Soil MTEC-02B" width="110" /> | [S-Soil MTEC-02B](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-EC-Sensor-S-Soil-MTEC-02B-p-4860.html)<br/>RS485 soil moisture, temperature and EC probe | Wires to the S2100 over RS485 (Modbus-RTU); the S2100 sends the LoRaWAN uplink | You need soil moisture, temperature and EC through the S2100 path |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992981_eu868_1.jpg" alt="SenseCAP M2 gateway" width="110" /> | [SenseCAP M2](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)<br/>LoRaWAN indoor gateway | Forwards to the SenseCAP cloud, or runs ChirpStack itself | You want a fully local site: switch to the built-in network server in the M2 web interface |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/0/100021896main_4.jpg" alt="reComputer R1225" width="110" /> | [reComputer R12 Series](https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-EU868-p-6720.html)<br/>LoRaWAN gateway and industrial controller | Is the gateway, and hosts The Things Stack on the same machine | You are self-hosting The Things Stack and have no gateway |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110110_preview-16.png" alt="reRouter CM4" width="110" /> | [reRouter CM4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html)<br/>reRouter CM4 host | Runs the network server, or runs the dashboard | You need a host and do not already have a Linux machine with Docker |

**③ The dashboard host** — any Linux machine with Docker. It runs Home Assistant, the MQTT broker and `agri-env-bridge`, and needs no inbound internet access.

**Order nodes, gateway and concentrator for the same band** (EU868 / US915 / AS923, etc.). The band is fixed at the factory and cannot be changed in software. For the two self-hosted paths you also need each node's DevEUI, JoinEUI and AppKey to register it on the network server.

### Negative Selection Boundaries

- **High-Bandwidth Streaming**: LoRaWAN is designed for periodic telemetry (5–60 min intervals); for continuous video monitoring or sub-second control, use 4G or wired industrial Ethernet.
- **Metal Enclosures and Silos**: Thick metal silos or heavy underground obstructions cause severe RF attenuation; use external antennas or RS-485 wired sensors.

## How a site is deployed

### 1. Mount the nodes

:::tip[Set probe depth from the root zone, then leave the probe in place]
Soil probes read the layer they sit in. Readings at 10 cm and at 40 cm are separate entities (`soil_moisture_10cm` … `soil_moisture_40cm`). Decide the depth from the crop's root zone before digging the first hole; moving a probe later makes the history already recorded on that entity incomparable.
:::

Radio coverage has to be measured on site; no range figure is given here. Before fixing sensor positions, confirm on site that the gateway receives each node's uplinks.

### 2. Install the software — 3 to 6 steps depending on the path

The per-device steps and application packages are on the reference design page; pick a configuration for your site and download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/agri_env_monitor" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download 🖱️</font></span></strong>
    </a>
</div><br />

Outline:

1. **Deploy Home Assistant and the broker** on the Linux host (all three paths, one Docker compose deployment).
2. **Bring up the network server** — nothing to do on the cloud path; on the ChirpStack path switch the M2 to its built-in local network server in the web interface, or bring up a ChirpStack compose stack on a Linux host; on the The Things Stack path bring up the stack with its Postgres and Redis on the reComputer R12 Series gateway.
3. **Install the decoder** (self-hosted paths only) — the payload formatter on The Things Stack, or the device-profile codec on ChirpStack. Without it, no entity appears.
4. **Join the nodes** (self-hosted paths only) — register each DevEUI, JoinEUI and AppKey on the network server.
5. **Deploy the bridge** with the source configured for the path and the broker credentials filled in.
6. **Import the dashboard and automations** and confirm the entities carry values.

Estimated time **45 minutes**, difficulty **intermediate**. The The Things Stack path takes longest: the concentrator has to be fitted physically and the stack brings up its own database and cache.

**Verification is the same on all three paths**: the Lovelace dashboard imported in the last step shows the entities with values.

## Available interfaces

Everything leaves through one MQTT broker on port **1883**, running on the dashboard host. Three retained topics carry the whole interface.

- **Home Assistant** — zero configuration. The bridge publishes discovery configs, so entities appear on their own with the right unit, device class and state class; no YAML is written by hand.
- **An irrigation or farm-management system** — subscribe to `agri_env/sensecap_<deveui>/<entity_key>/state` for the value and `agri_env/sensecap_<deveui>/availability` for whether the node is still alive. Both are retained, so a subscriber that connects late still gets the current picture immediately.
- **Your own service** — the discovery config on `homeassistant/…` carries the full entity metadata (unit, device class, state class, device identifiers), which is enough to build a schema.

### Topics and payloads

| Topic / port | Payload | Retained |
|---|---|---|
| `homeassistant/sensor/sensecap_<deveui>/<entity_key>/config` (1883) | Discovery config, one per entity: `name`, `unique_id`, `object_id`, `state_topic`, `availability_topic`, `unit_of_measurement`, `state_class`, `device.identifiers` | Yes |
| `agri_env/sensecap_<deveui>/<entity_key>/state` (1883) | The value of one measurement, e.g. `33.8` | Yes |
| `agri_env/sensecap_<deveui>/availability` (1883) | `online` or `offline` | Yes |

**Entity naming**: the entity id is `sensor.sensecap_<deveui>_<entity_key>`, with the full DevEUI in lower case; a shortened form collides between nodes whose addresses share a suffix. Changing the rule later means clearing the broker's retained messages and Home Assistant's entity registry together, otherwise the old topics come back after a restart.

**Keep the broker on a trusted LAN; do not expose it to the internet.** Its credentials are in `.env` files on the host, and on the ChirpStack path the LNS-side broker runs without authentication on the compose network.

## Performance and measured data

### Runtime and key parameters

One service, `agri-env-bridge`, sits behind all three paths and runs on the dashboard host alongside Home Assistant and the MQTT broker.

| Path | What the bridge reads |
|---|---|
| SenseCAP cloud | The SenseCAP OpenAPI plus the cloud MQTT stream; backfills history month by month on first start |
| The Things Stack | The stack's MQTT integration, after the payload formatter has decoded the uplink |
| ChirpStack | The ChirpStack MQTT integration, after the device-profile codec has decoded the uplink |

- **Measurement mapping**: `assets/config/measurements.yaml`. It covers soil temperature and moisture at four depths, soil tension, heat flux and volumetric water content; air temperature, humidity, CO2, barometric pressure, PM2.5 and PM10, noise; pH, dissolved oxygen, turbidity, TDS, salinity and water temperature; wind speed and direction, solar radiation, sunshine duration, PAR and light quantum; flow rate, total flow, liquid level and water leak. Adding a quantity is one new row, no code change; values are never scaled, only given a unit.
- **Offline threshold**: defaults to two S210x reporting cycles plus margin. On expiry the node's entities go unavailable in Home Assistant, with the last value kept.
- **Deduplication**: readings are keyed on `(DevEUI, measurementId, timestamp)`, so a cloud backfill and the live stream never double-count the same reading; when an entity has two values, the later one wins.
- **Functional check**: recorded uplinks replayed into the broker in all three source formats created 15 entities.
- **Reproduction**: Replay tests are located in repository `tests/replay_bench.py`; run `python3 tests/replay_bench.py --fixtures tests/data/` to verify three uplink types and automatic registration of 15 entities.

### Known degradation

- **The broker is a single point of failure**: while it is down, none of the three paths updates. State topics are retained, so Home Assistant recovers the last value after a restart.

## Data and asset provenance

- **The `measurementId` to physical quantity table** in `assets/config/measurements.yaml` was read out of the SenseCAP decoder sources at [Seeed-Solution/SenseCAP-Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder), commit `d0a2342` — `third_party/SenseCAP-Decoder/S210X/Helium/SenseCAP_S210X_Helium_Decoder.js` for the S210X series and `third_party/SenseCAP-Decoder/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js` for the T1000. Each entry in the YAML carries the source file and line it came from.
- **That repository's licence is unconfirmed**: it has no LICENSE file and no licensing section in its README; the only licence declaration in it is a third-party contributed file header reading `Unlicensed for internal use`. **The solution package does not redistribute the decoder.** It uses only the `id -> quantity` correspondence; the deployment guide for the two self-hosted paths links the upstream repository. Confirm licensing with Seeed before distributing the decoder itself.
- **The `device_class`, `unit_of_measurement` and `state_class` columns** are not from the decoder — that information does not exist there. They were derived from the Home Assistant sensor documentation.
- **Architecture diagrams** on the reference design page are drawn from an Architecture IR; product art comes from the reviewed Seeed product sticker catalog.
