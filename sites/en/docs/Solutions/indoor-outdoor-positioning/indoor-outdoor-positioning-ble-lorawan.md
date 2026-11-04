---
description: Tracking people and assets indoors and outdoors on one map with BLE beacons, GNSS and LoRaWAN — what devices you need, how a site is laid out, how to integrate the WebSocket feed, and measured server-side data
title: 'BLE + LoRaWAN Indoor and Outdoor Positioning: Build, Deploy, and Measured Results'
keywords:
  - indoor positioning system
  - indoor outdoor positioning
  - BLE beacon positioning
  - LoRaWAN asset tracking
  - geofence alarm
  - floor plan georeferencing
  - offline basemap
  - PMTiles
  - SenseCAP T1000
  - SenseCAP BC03
  - SenseCAP M2 gateway
  - ChirpStack
  - WebSocket
image: https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-indoor-22a6ee12.png
slug: /solutions/indoor-outdoor-positioning-ble-lorawan
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/solutions/indoor-outdoor-positioning-ble-lorawan/
generated_from: sensecraft-solutions@indoor_positioning_ble_lorawan
---

:::caution[Usage notice]
This is **not a safety-certified system**: LoRaWAN uplinks can be lost, GNSS does not work indoors and BLE positioning degrades around metal, so a position can be late, wrong or missing. Do not use it as the only safeguard for people's safety.
:::

## What this solution does

A site usually has both a building and an outdoor area, and the question is the same in both: where is that forklift, that instrument, that person, right now. Battery-powered BLE beacons mark positions inside; the tracker's own GNSS takes over outside; both come back over LoRaWAN, and a web dashboard draws them on one map. A floor plan can be georeferenced onto the outdoor map, so a trail that starts in a building and continues in the yard stays on one screen.

- Open-source implementation: [github.com/Seeed-Solution/Solution_IndoorPositioning_H5](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)
- Picking a configuration and deploying: [reference design page](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>No cabling on the sensing side</h3>
                <p>Beacons are battery powered and stick to a wall; a tracker reports for months on one charge. What needs mains power and a network drop is the gateway and the host.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Indoor and outdoor are one map, switched automatically</h3>
                <p>When a tracker enters or leaves a building, a server-side state machine switches the layer; nothing to toggle by hand, and a tracker standing by a window does not flip back and forth.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Open source, data stays on your host</h3>
                <p>The application source is on GitHub and runs as a Docker image on your own host. The only thing that reaches the internet is the basemap, which can be replaced by an offline PMTiles archive.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Measured server capacity</h3>
                <p>200 concurrent tags at end-to-end P95 828 ms with 0% loss; 500 tags at P95 2.35 s. Tested with replayed uplinks, no tracker or gateway connected.</p>
            </div>
        </li>
    </ul>
</div>

### Live output

The indoor layer draws trackers on the registered floor plan:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-indoor-22a6ee12.png" alt="Dashboard indoor layer: trackers on the registered floor plan, tag list on the left"/>
</div>

The outdoor layer is the same page on the same WebSocket, with map tiles as the base:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-outdoor-8b31ec6e.png" alt="Dashboard outdoor layer: the same trackers on map tiles"/>
</div>

One tracker moving between the two:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/web-example-fdbff3c1.gif" alt="The dashboard switching layers on its own as a tracker moves between indoors and outdoors"/>
</div>

The phone client shows the same data:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/miniprogram-example-34c773a6.gif" alt="The same position data in the mini-program client"/>
</div>


The dashboard is a single page at `/web/map` with an explicit layer switch between **Indoor** and **Outdoor**; `/web/map?layer=outdoor` is a direct link suitable for a wall display and subscribes to the same WebSocket. A tracker is drawn on exactly one of the two views at a time. Which one is decided by the state machine, and the decision is carried in the message as `position.coordSystem` — `metric` for a floor-plan `{x, y}`, `wgs84` for a `{lat, lon}`.

## What hardware you need

Three kinds of device on site; the number of beacons and trackers scales with the deployment.

**① BLE beacons** — the indoor position reference. Battery powered, wall mounted, no wiring. Areas covered by GNSS only (yards, roads, parking) need none at all.

**② The tracker** — carried by the person or attached to the asset. It scans BLE indoors and uses its own GNSS outdoors, and has an SOS button.

**③ The LoRaWAN gateway** — collects the uplinks and forwards them to a network server. Order gateway and tracker for the same regional band.

| | Device | Nominal capacity | When to pick it |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-bc03-bluetooth-beacon.jpg" alt="SenseCAP BC03" width="110" /> | [SenseCAP BC03 Indoor Bluetooth Beacon](https://www.seeedstudio.com/Indoor-Bluetooth-Beacon-BC03-p-6732.html)<br/>Indoor position reference, Bluetooth LE 5.0 | 2–3 m with 3+ per zone; room level with 1 | Any indoor area that needs to be resolved better than "in the building" |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114993073-sensecap-card-tracker-t1000-a.jpg" alt="SenseCAP T1000-A" width="110" /> | [SenseCAP LoRaWAN Card Tracker T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)<br/>BLE scan, GNSS, motion detection, SOS | One per tracked person or asset | The badge or asset tag; the same unit covers indoors and outdoors |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992981_eu868_1.jpg" alt="SenseCAP M2 Gateway" width="110" /> | [SenseCAP M2 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)<br/>SX1302, regional frequency variants | Up to 2 km line of sight; 100–200 trackers | One or two per site; skip it if you already run LoRaWAN |

All capacity figures in the table are **nominal**, from the device datasheets and deployment practice with this hardware. Beacon accuracy depends on the installation described below.

Besides the devices you need a host for the application (any machine that runs Docker; the server-side measurements used a reComputer J30 series unit as a plain arm64 host), a network server — **SenseCAP OpenStream** or your own **ChirpStack** — and, unless you build the offline basemap, internet access on the host for OpenStreetMap raster tiles.

### Negative Selection Boundaries

- **Sub-Meter Continuous Tracking**: BLE beacon accuracy is 2–3 meters. For high-speed AGV navigation or automated machinery requiring sub-meter continuous tracking, choose UWB instead of BLE.
- **Real-Time Safety Interlocks**: LoRaWAN communication involves latency and duty-cycle constraints with a 15-minute offline threshold; do not use for sub-second safety interlocks.

## Deploying on site

### 1. Install the hardware

:::tip[Beacon layout decides indoor accuracy]
Mount beacons at **2.5–3 m** height with **5–10 m** spacing (BC03's recommended spacing), and add beacons where there is metal shelving. **Three or more beacons per zone** is what the nominal 2–3 m figure assumes; a single beacon per zone resolves to room level. Record every beacon's **MAC address and location** — indoor positions are computed from the beacon-to-zone mapping, so update the mapping whenever a beacon is moved, or every position derived from it shifts.
:::

Size gateways by coverage: nominal line-of-sight range is 2 km, so one or two cover a typical site; whether to add a second depends on walls and distance, not tag count. The gateway comes in per-band SKUs (US915 / EU868 / AS923, etc.); confirm the **frequency band** for the country before ordering and match the tracker to it.

### 2. Install the software: 7 steps

Per-device steps and application packages are on the reference design page. Outline:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download the package 🖱️</font></span></strong>
    </a>
</div><br />

1. **Deploy the BLE beacons** — place, mount, and record MAC addresses.
2. **Set up the LoRaWAN gateway** — bring it online against SenseCAP OpenStream or your ChirpStack.
3. **Deploy the positioning application** — a Docker deployment, targeting either the machine you are on or a remote host over SSH.
4. **Configure and activate the tracker** — join it to the network and set the uplink interval.
5. **Georeference the floor plan** — upload the plan, then set origin, rotation and scale so it lands in the right place on the outdoor map. Georeferencing and geofences are both on the configuration page:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/config-7ff6962d.png" alt="Configuration page: floor plan upload, origin and rotation, and the geofence list"/>
</div>

6. **Set up a geofence alarm** — draw the fence in WGS84 and attach an alarm rule.
7. **Open the dashboard** — verify a tracker appears, moves, and raises the alarms you configured.

Difficulty **intermediate**, about **60 minutes**. Steps 5 and 6 are software configuration only and need no extra hardware.

:::caution[Default login]
The image is available for linux/arm64 and linux/amd64. The dashboard's default login is `admin` / `12345678`; change it under Configuration → Authentication after the first login.
:::

## Available interfaces

Everything the application exposes is served on port **5173** of the host you deployed it to. Three ways in, depending on who is integrating.

- **A wall display or a second screen** — open `/web/map?layer=outdoor` (or `?layer=indoor`). It is the same page and the same WebSocket, so nothing extra has to be configured.
- **An existing security, dispatch or attendance system** — subscribe to the WebSocket and act on two message types: `tracker_sos` for the emergency button, and `tracker_checkin` / `tracker_position_detection` when they carry a `geofence` block with `transition: enter` or `exit`. Those are the events; the rest is telemetry.
- **Your own service** — take the full payload. Each update carries either a metric position on a floor plan or a WGS84 position, tagged by `coordSystem`, and the REST endpoints let you create fences and read or write the georeferencing parameters programmatically.

### Full interface and payload

| Interface | Endpoint | Payload |
|---|---|---|
| WebSocket | `ws://<host>:5173/ws` | `tracker_update` with `position` = `{x, y, coordSystem: "metric"}` or `{lat, lon, accuracy, coordSystem: "wgs84"}`; `tracker_checkin` / `tracker_position_detection` carry an extra `geofence` block on enter/exit; also `tracker_sos` and `tracker_offline` |
| REST | `GET/PUT /api/configuration/dashboard/maps/{mapName}/registration` | `{origin_lat, origin_lon, rotation_deg, scale}`. Rejects `\|lat\|` > 85° and `scale` ≤ 0. Admin session required; a guest session gets **403** |
| REST | `POST /api/geofences`, `POST /api/events` | Fence geometry (GeoJSON polygon, or a point plus `radius_m`) and the alarm rule that references it |
| LoRaWAN uplink in | SenseCAP OpenStream, or a ChirpStack MQTT topic | Field mapping is in the deployment guide |

A geofence alarm rides on the same message as a check-in rather than on a channel of its own:

```json
{"type": "tracker_checkin", "data": {"2CF7F1C0530004AD": {
  "timestamp": 1788582647214, "map": "Plant A",
  "geofence": {"id": 1, "name": "Plant A", "transition": "enter"},
  "position": {"lat": 22.5362, "lon": 113.9432, "accuracy": null, "coordSystem": "wgs84"},
  "last_detected_beacons": []}}}
```

**Two fields to handle carefully**: branch on `coordSystem`, not on whether `lat` is present, because the same message type can carry either coordinate form. `accuracy` is **always `null`** on this hardware (neither the SenseCAP nor the ChirpStack uplink carries a GNSS accuracy measurement); treat it as unknown.

## Performance and measured data {#appendix}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Solution_IndoorPositioning_H5</font></span></strong>
    </a>
</div><br />

Everything below was measured on the server side: synthetic uplinks were published to a local MQTT broker and results captured from the dashboard WebSocket, with no T1000 tracker and no gateway in the loop. The application ran on a reComputer J30 series unit (as a plain arm64 host, GPU unused), 2–4 minutes per tier.

### Capacity and latency

| Metric | Measured | Conditions |
|---|---|---|
| Capacity, stable | 200 concurrent tags, P95 end-to-end 828 ms, 0% uplink loss | 1 uplink per tag per 30 s, 800 uplinks, 2 min |
| Capacity, degrading | 500 tags, P95 2.35 s, 0% loss | Same, 2000 uplinks, 2 min; only the 2 s latency budget is missed |
| Capacity, at 1000 tags | P95 4.1 s, 0% loss, process still serving | Same; still serving normally, load was not pushed further |
| Update rate | 50 tags at a 2 s uplink interval, P95 220 ms, 0% loss over 4500 uplinks | 3 min; 30 / 10 / 5 s intervals also stable at P95 89 / 163 / 146 ms |
| SOS alarm latency | P50 24 ms, P95 29 ms, max 29 ms, n=20 | Single tag, no concurrent load; uplink timestamp to WebSocket broadcast |
| Offline detection | 903 s and 950 s | 2 repetitions; expected window [900 s, 960 s] from the 15 min threshold and 60 s poll |

Capacity and update rate cover the server only; how fast a tracker can report depends on uplink interval and LoRaWAN duty cycle.

Reproduce: `runs/2026-09-05-orin-nano/boundary.capacity.yaml`, `boundary.update_frequency.yaml`, `boundary.sos_latency.yaml`, `boundary.offline_latency.yaml` in upstream `indoor_positioning_ble_lorawan` (application code `feature/outdoor` @ `443bce6`)

### Geofence and georeferencing

| Metric | Measured | Conditions |
|---|---|---|
| Geofence alarm latency | P50 14 ms, max 14 ms, 2 alarms | Replay tool and server on the same host over loopback, single tag, 17 uplinks |
| Geofence hysteresis | 6 in-and-out flips at the fence line produced **0 alarms**; enter and exit each fired on the third consecutive point | Same |
| Georeferencing error | ≤ 0.21 m anywhere within 2 km of the origin, `\|lat\|` ≤ 60° | Worst case of an azimuth sweep, every 15°, radii 500 / 1000 / 2000 m, lat0 ∈ {0, 22.5, 45, 60}; **budget was 0.7 m**; projection math only, no field survey |

Reproduce: `runs/2026-09-05-geofence-smoke/results.md`, `runs/2026-09-05-georef/results.md`

### Runtime and key parameters

The tracker only reports what it observed (the configured beacons it saw, or a GNSS fix); the server resolves that into a position. These three server-side parameters set the pace of indoor/outdoor switching and alarms:

- **Indoor ↔ outdoor switching**: going outdoor needs 3 GNSS fixes within 20 s and no configured beacon seen for 15 s; coming back indoor needs two consecutive scans, each seeing 2 or more configured beacons. A tracker next to a window does not flip back and forth.
- **Geofence transition**: `enter` / `exit` fires only after 3 consecutive points within 10 s. In geo mode an alarm rule's `time_range` field has no effect; this confirmation replaces a time range set in the UI.
- **Offline detection**: no uplink for 15 min, 60 s poll, **hard-coded**.
- **Offline basemap**: a site without internet builds a local PMTiles archive with `go-pmtiles extract` (it pulls only the tiles inside the bounding box); build the archive and load it once before delivery.

### Known degradation

- **Indoor accuracy follows the beacon layout.** The 2–3 m figure is nominal (BC03 wiki) and assumes 3 or more beacons per zone at 2.5–3 m height and 5–10 m spacing. One beacon per zone gives room level. Metal shelving degrades trilateration; add beacons there.
- **Latency grows with tag count**: end-to-end P95 is 2.35 s at 500 tags and 4.1 s at 1000.
- **Georeferencing error grows with radius and latitude**: the useful range is about 2 km, and the API refuses `\|lat\|` above 85°.
- **`accuracy` and `alt` carry no data**: logic that branches on accuracy always takes the null path on this hardware, and the geofence engine treats a missing `accuracy` as passing.

## Data and asset provenance

- **Measured data** — all figures under Performance and measured data come from `description.md` of `indoor_positioning_ble_lorawan` in the upstream `sensecraft-solutions` repository, which cites per-run report files by path. Data are synthetic replay traces generated for the runs; no customer site data is involved.
- **Device EUIs** shown in the screenshots and traces are the synthetic ones used by the replay tool.
- **Basemap tiles** in any outdoor screenshot are © OpenStreetMap contributors, licensed under the [ODbL](https://www.openstreetmap.org/copyright). This attribution travels with the page.
- **Floor plans** in the georeferencing screenshots are synthetic test images (a 1000×800 px plan on a 50 m × 40 m demo map), created for the evaluation run and deleted afterwards.
- **Application source** is at [Seeed-Solution/Solution_IndoorPositioning_H5](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5); check the repository for its licence terms before shipping a derived product.
- **Dashboard captures and demo GIFs** — taken from the application's own UI (`docs/ui/` and `assets/` in `solution-indoor-positioning`). The outdoor layer's basemap is OpenStreetMap tiles, attributed under ODbL; provenance is in the upstream package's `gallery/ATTRIBUTION.md`.
