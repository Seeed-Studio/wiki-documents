---
description: Supervisory setpoint control for central HVAC on an edge gateway — one point model over OPC UA, Modbus and BACnet/IP plus an SDM630 energy meter, KNN setpoint prediction, and a write path that verifies every write by reading the point back
title: 'HVAC Setpoint Control on an Edge Gateway: Build, Deploy, and Measured Results'
keywords:
  - HVAC setpoint control
  - building energy retrofit
  - supervisory control
  - BACnet/IP
  - Modbus TCP
  - Modbus RTU
  - OPC UA
  - Eastron SDM630
  - energy meter template
  - KNN prediction
  - write readback verification
  - control rollback
  - reComputer R1100
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg
slug: /solutions/hvac-setpoint-control
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/solutions/hvac-setpoint-control/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Usage notice]
This is a **supervisory setpoint recommender**, not a safety-certified control system. The plant's own
interlocks and safety controls stay in charge, and every write stays inside limits a named site engineer
approves. **No energy-saving figure is claimed anywhere in this package** — no baseline comparison, weather
or occupancy normalisation, or defined measurement period exists yet. The measured numbers below come from
protocol simulators on developer hardware, not from a building.
:::

## What this solution does

A central HVAC plant in an office, a mall or a factory usually runs to a fixed schedule: the same setpoint
whether the floor is full or empty. This solution puts a gateway beside the plant that reads the HVAC
controller and an energy meter into **one point model**, learns a setpoint recommendation from that
building's own historical data, and writes it back to the controller — but only counts the write as applied
after the value has been read back from the field and compared against what was sent.

It is used on central plant: chillers, air handlers, and the controllers in front of them. It is not for
split-unit air conditioners, and it is not on the safety loop.

- Selection and deployment: [reference design page](https://www.seeed.cc/solutions/reference-designs/smart_hvac_control)
- Upstream repository: not published. The package's `intro.links.github` points to `github.com/Seeed-Solution/Solution_HVAC_SmartControl`, which is not publicly accessible (HTTP 404 on 2026-09-22).

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>One point model, four protocols</h3>
                <p>OPC UA, Modbus TCP, Modbus RTU over RS-485 and BACnet/IP land in the same registry — 2,000 points, of which up to 50 may be writable.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>A write is not applied until it is read back</h3>
                <p>Last-known-good value, quality, timestamp and priority are frozen before the write; the point is re-read after a settle delay and compared within a tolerance. A readback whose quality is not good never verifies.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Rollback on five triggers, alarms keyed by cause</h3>
                <p>Readback mismatch, source offline, prediction disabled, operator abort, partially applied batch. Five alarm types, each identified by its cause, so a repeating fault re-uses the open alarm.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Measured capacity: 2,000 points at 349.99 events/s</h3>
                <p>Against a 350.0 target, one 180 s loopback run on a reComputer R2000 series. Conditions are itemised in the appendix.</p>
            </div>
        </li>
    </ul>
</div>

### What the console shows

The running console renders the point table with per-point quality, the access page with each source and
its registered point count, and a command-receipt ledger. The ledger is where the write path is visible:
each row carries the requested value, the effective value, the actor, the protocol acknowledgement and —
after the settle delay — the readback result. A write whose register was changed out of band reads
`mismatched, compensated` with the value that was found, and the compensation command issued by
`plugin:prediction:rollback` appears as the next row.

The access page lists every source with its registered point count; this is the first place wiring shows up as working:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-list-en-9837244f.png" alt="Access page: protocol, address, online state and registered point count for each source"/>
</div>

The point table carries per-point quality, so a point that is not reading `good` is visible here:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/points-en-477df2ca.png" alt="Point table: name, current value, unit, quality and last update"/>
</div>

The prediction runtime page shows this round's recommended setpoints, the history window behind them and the current control mode:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/prediction-runtime-en-9217f059.png" alt="Prediction runtime page: this round's recommended setpoints, history window and control mode"/>
</div>

The write path is visible in the command receipt ledger — requested value, effective value, actor, protocol acknowledgement and readback each get a column:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/control-step2-en-ae5581de.png" alt="Command dispatch step two: confirm the value to write, the target point and the safety limits"/>
</div>

In every capture above the field devices are the repository's own protocol simulators, not a physical meter or controller — the gateway logic behind them is real.

## What hardware you need

Three things: a controller you already have, a meter, and one Docker host.

**① The HVAC controller** — whatever is already in front of the plant, as long as it speaks OPC UA, Modbus
TCP/RTU or BACnet/IP. For a dry run with no plant attached, the package ships an OPC UA simulator on port
4841.

**② The energy meter** — an Eastron SDM630 on the Modbus V2 register map, over Modbus TCP, a Modbus TCP
gateway, or RS-485. Ten read-only points: three-phase voltage and current, total active power (kW), total
power factor, frequency, imported active energy (kWh).

**③ The gateway host** — this is the only purchase decision. The service is a Docker workload on x86-64 or
arm64, so a Linux machine already on the plant network is a supported target.

| | Gateway | Storage | When to choose it |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991374.jpg" alt="reComputer R1124-10" width="110" /> | [reComputer R1124-10](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html)<br/>4 GB RAM, RS-485 / RS-232 / DI / DO on board | 16 GB eMMC | The history lives on a server; the gateway keeps a short local window |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>same board, larger eMMC | 32 GB eMMC | Months of operating history stay on the gateway; the training set can be re-imported locally |

The R1100 series carries RS-485 on board, so a meter on RS-485 needs no USB adapter. The **service itself
needs about 1 GB of disk** — the storage column is about how far back you can look without a server, not
about whether the application fits.

Other prerequisites: Docker Engine 20.10 or newer, host ports 8280 and 4841 free, and at least one week of
historical operation as CSV or Excel with timestamp, setpoint, measured temperature and power consumption
columns.

## How to deploy on site

Three steps, and the third is the one that decides whether the deployment is trustworthy.

### 1. Wiring: what decides success

:::tip[Confirm the meter's byte and word order before believing any value]
The built-in SDM630 template defaults to big-endian bytes and words because that is the vendor's published
default — **not** because it has been verified against a physical meter. Read a register with a known
physical value and compare against the meter's own display. Voltage and frequency that look plausible but
wrong, and imported energy that jumps backwards, are both word-order symptoms, not wiring faults.
:::

Put the gateway on the same network as the controller and the meter (or its Modbus TCP gateway). For
Modbus RTU, match the baud rate, parity and unit id to what the meter is configured for — a mismatch reads
as a timeout, not as an error message — and use the **serial-device deployment profile**: the standard
Docker profile attaches no host serial device, so `/dev/ttyUSB0` will simply not exist inside the container.

### 2. Software: three steps

The per-step forms and their fields are on the reference design page, where answering a few questions about the site also gives you the matching application package to download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_hvac_control" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download 🖱️</font></span></strong>
    </a>
</div><br />

The outline is:

1. **Deploy the service** — Docker deployment, either on the machine running the deployment tool or over
   SSH to a device on the plant network. The form carries the meter transport, the OPC UA endpoint, the
   safety limits, the control mode and the alarm thresholds.
2. **Open the console** — create the first administrator and confirm both sources are online with their
   expected point counts. The access wizard asks for address and poll interval per protocol:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-wizard-step1-en-7a3d57a8.png" alt="Access wizard step one: choose the protocol, fill in the address and poll interval"/>
</div>

3. **Commission** — register the meter, run predictions in observe mode, inject faults on purpose, and only
   then enable writes. Before a batch goes out, confirm on the selection page exactly which points it covers:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/batch-select-en-9bd95ba4.png" alt="Batch dispatch selection: the points covered by this batch and their current values"/>
</div>

<!-- TODO image: gateway installed in the plant room next to the unit — needs a field shoot -->
<!-- TODO image: a physical meter and controller as wired (every capture here is behind a protocol simulator) — needs a field shoot -->

**Leave Control Mode at `observe` and leave Safety Baseline Approved By blank.** A blank approver field is
what keeps the baseline reporting as unapproved; filling it in is a signature, not a formality.

The estimate to a running console with points reading is about **60 minutes**. Commissioning takes longer,
because it includes a full occupancy cycle of observe-mode predictions reviewed by whoever operates the
plant.

:::caution[Check the image tag first]
`docker inspect -f '{{.Config.Image}}' missionpack_knn`. The published tag `missionpack-knn:v1.6.5`
**does not** carry the SDM630 template, the rollback coordinator or the alarm envelope. The image that does
has not been built or pushed and its immutable tag is still to be assigned. On v1.6.5 the observe-mode
substeps still apply; the meter, rollback and alarm substeps cannot be completed.
:::

## How to connect it to your own system

Everything the deployment exposes sits behind one HTTP port on the gateway host. Nothing leaves the plant
network unless northbound publishing is turned on.

- **Operators** — the browser console on `8280`: point table with per-point quality, meter registration,
  prediction runs, command receipts, alarm banner.
- **Monitoring** — `GET /system/runtime-metrics`. With northbound publishing enabled it carries
  `northbound.spool.queued` and `northbound.spool.dropped`; `queued` back to 0 with `dropped` unchanged is
  the check the commissioning step asks for.
- **Your own system** — the same console API surface behind `8280`, plus the health endpoint the deployment
  waits on at startup.

### Full endpoint list

| Port / endpoint | What it serves | Needs internet |
|---|---|---|
| `8280` `/` | Browser console | No |
| `8280` `/system/runtime-metrics` | Runtime counters, northbound spool counters | No |
| `8280` `/api/v1/health` | Health check; startup allows 30 s | No |
| `4841` | Built-in OPC UA simulator, for a dry run | No |

**The field most often misread is the readback result on a command receipt.** `protocol_acknowledged` means
the controller accepted the frame. It does not mean the plant moved. Only the readback column — `matched`,
or `mismatched, compensated` with the value found — reports what the field actually holds. A compensation
issued by the rollback coordinator appears as its own receipt immediately after the write it undid, so the
audit trail reads in order without joining two tables.

Container logs rotate at 10 MB with four backups (`docker logs missionpack_knn`). Export the command audit
trail, the rollback journal and the alarm history before they age away.

## For engineers: implementation details

### The point model

One registry holds every point regardless of how it arrived. The ceiling is **2,000 points**, of which at
most **50 may be writable**. The ten SDM630 meter points are read-only and count against the 2,000, not
against the 50.

| Transport | Role in this design | Constraints |
|---|---|---|
| OPC UA | HVAC controller read and write | Endpoint configured per deployment; built-in simulator on 4841 |
| Modbus TCP | Meter and controller | Unit id and port per source; direct or through a TCP gateway |
| Modbus RTU (RS-485) | Meter | Requires the serial-device deployment profile; the standard profile attaches no host serial device |
| BACnet/IP | Air handler read and write | Writes use a priority and release with `Null`. **COV subscription, BBMD registration and MS-TP are not implemented** |

Device templates — including the built-in SDM630 one — render a **strict CSV bounded at 256 rows**, and a
built-in template goes through the same parser as a hand-written one. A customised template that exceeds
the bound is refused by that same parser.

### The write path: freeze, write, read back, compare

The sequence for every write, in order:

1. Freeze the last-known-good value, quality, timestamp and BACnet priority for the point.
2. Issue the write through the authorised write path — subject to the write-enable flag and the write
   policy, both of which a compensation is also subject to.
3. Wait `settle_seconds` after the batch completes.
4. Re-read the point and compare within `readback tolerance`.
5. A readback whose **quality is not `good` never verifies**, whatever value it carries.

Readback and compensation run **after** the batch, not inside it, so they do not enter the cycle latency.
The next batch does wait for the previous one to reach a terminal state, which is what keeps at most one
write in flight per point.

**Only Modbus points are verified.** A BACnet output is skipped, because the production cycle supplies no
write priority for it and a compensation would not know which priority to relinquish.

### Rollback and alarms

Five rollback triggers: readback mismatch, source offline, prediction disabled, operator abort, and a
partially applied batch. BACnet points are released with `Null` at the priority they were written at;
Modbus points are restored in the reverse of the order they were applied.

Five alarm types, each **identified by its cause rather than by the event**, so a repeating fault re-uses
the open alarm instead of opening a second one:

| Alarm | Severity | Why |
|---|---|---|
| `source-offline` | warning | The plant keeps its previous setpoint |
| `stale-sample` | warning | Same |
| `write-failed` | warning | Same |
| `readback-mismatch` | warning | Same |
| `compensation-failed` | **critical** | The plant is left in an unknown state |

Acknowledging an alarm records that an operator saw it; **only a recovery clears it**, and the recovery
carries the id of the alarm it clears. If you see the same fault opening a new alarm each time, the cause
fields differ — compare the source and point ids.

### Parameters and their shipped values

Deployment form (`devices/deploy.yaml`):

| Parameter | Shipped default | Note |
|---|---|---|
| Control Mode | `observe` | Nothing is written until an operator changes this |
| Minimum / Maximum Setpoint | 18 / 30 °C | **Placeholder** |
| Maximum Change / Change Window | 1.0 °C / 300 s | **Placeholder** |
| Mode whitelist | off / fan / cool / heat / auto | **Placeholder** |
| Safety Baseline Approved By | *(blank)* | Blank is what keeps the baseline reporting as unapproved |
| Readback Delay | 10 s | |
| Readback Tolerance | 0.05 | |
| Stale Sample Threshold | 60 s | |
| Meter TCP Port / Unit ID | 502 / 1 | |
| Serial device / baud | `/dev/ttyUSB0` / 9600 | 19200 and 38400 also selectable |

Prediction-run configuration, created in the console rather than through a deployment variable:

```json
{
  "schema_version": "prediction-run.v3",
  "interval_seconds": 60,
  "rollback": { "enabled": true, "settle_seconds": 2.5 }
}
```

**Write-back verification is off unless the run configuration asks for it.** A configuration without a
`rollback` section migrates to `enabled: false` rather than silently gaining a new write path — set the
section explicitly when you start the run. `settle_seconds` (0–30, default 1.0) **must be longer than the
source's collection interval**, or the readback sees the value from before the write and reports a mismatch
that never happened.

The prediction model is KNN over the building's own historical operation data, imported as CSV or Excel
with timestamp, setpoint, measured temperature and power consumption columns. It learns from that building
rather than from a generic curve, and predictions are visible in the console before any of them is allowed
to reach the controller.

## Appendix: measured data {#measured-data}

This section is for readers checking the numbers; skipping it does not affect deployment. Everything here
was measured against **protocol simulators on developer hardware**, not on a building. Each figure is a
single sample unless stated, and none is independently reproduced.

### What was measured

| Item | Status |
|---|---|
| Sampling throughput at 2,000 points | **Measured**, one 180 s run |
| Prediction cycle latency | **Smoke measurement**, n = 4 cycles |
| Control admission latency | **Smoke measurement**, n = 2 cycles |
| 24 h continuous run | **Pending.** A soak ran 2026-09-05 to 2026-09-06 on the same host; the verdict is not in. No 7-day or 30-day run has been started |
| Rollback and alarms end to end | **Wired into the prediction cycle, exercised against protocol simulators only** |

### Capacity

| Metric | Value | Conditions |
|---|---:|---|
| Sampling throughput | 349.99 events/s (99.99% of a 350.0 target) | 2,000 points, four protocol sources |
| Prediction rate | 0.939 cycle/s | Same run |
| Peak process-group RSS | 217.3 MiB | Same run |

Conditions for all three rows: 2,000 points across four protocol sources, OPC UA and Modbus sampled at 5 s
and BACnet at 10 s, loopback only, **180 s**, on a reComputer R2000 series (arm64), capture `capacity-smoke` r14,
upstream `b5fe4cc`. A single run of that length is a capacity smoke test, not a stability result.

### Latency

| Metric | Value | Conditions |
|---|---:|---|
| Prediction cycle latency | 46.27 ms maximum | n = 4 cycles |
| Control admission latency | 1.41 ms maximum | n = 2 cycles |

Both are runtime metrics from the `northbound-smoke` rig baseline, upstream `f831bae`. **Two and four
samples describe nothing about a loaded system** — they bound the code path, not the deployment.

### One known-open defect

The prediction loop sleeps a fixed interval after each cycle, so its rate is `1/(1.0 + t_cycle)`. At 2,000
points `t_cycle` is about **0.119 s**, which puts the structural ceiling near **0.894 cycle/s** — below the
0.90 gate the soak harness enforces. This reproduced on every round-3 run including one with no fault
injected. Either the loop or the gate has to change; neither has.

### Where it will be worse than this

- **Real field devices, not simulators.** Every number above was taken against this repository's own
  protocol simulators over loopback. A real controller adds network latency, retries and timeouts.
- **Byte order.** Until a commissioning step confirms it against the meter's own display, the scaled meter
  points are only as trustworthy as the vendor's published default.
- **Rollback and alarms on your plant.** Both are wired into the prediction cycle upstream, but a
  simulator that always answers is not a plant that sometimes does not. Exercise source-offline,
  readback-mismatch and stale-sample deliberately before enabling writes.
- **Anything past 180 seconds.** The 24 h soak verdict is not in, and no longer run has been started.

## Data and asset sources

- **SDM630 register map** — Eastron's published Modbus protocol document (Modbus V2 register map, IEEE-754
  float32 input registers). Addresses follow that document; the big-endian byte and word order is the
  vendor default — confirm it against your own meter.
- **Historical operation data** — supplied by the deploying site. Nothing is distributed with the package,
  and no public dataset is used or required.
- **Console captures** — original screen captures of the packaged software running against this
  repository's own protocol simulators. The simulator configuration, capture host and checksums are
  recorded in the package's `gallery/ATTRIBUTION.md`. No third-party asset, brand mark or stock image is
  included.
- **Architecture diagram** — drawn for this reference design from a structured architecture IR; original
  work, no third-party art.
