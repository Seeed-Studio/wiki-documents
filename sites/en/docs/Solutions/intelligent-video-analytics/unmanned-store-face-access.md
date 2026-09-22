---
description: Face access control for an unattended door — the hardware each wiring option needs, how the versioned face library is distributed and verified, the MQTT and HTTP contracts, and exactly which boundaries have been measured on hardware and which have not
title: 'Unmanned Store Face Access: Hardware, Face Library Distribution and Measured Boundaries'
keywords:
  - unmanned store face access control
  - face recognition door access
  - passive liveness anti-spoofing
  - versioned face library distribution
  - MQTT relay unlock
  - hash-chained audit log
  - reCamera Pro GPIO relay
  - XIAO ESP32-S3 MQTT relay node
  - InsightFace buffalo_l licensing
  - access control reference design
image: https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg
slug: /solutions/unmanned-store-face-access
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/solutions/unmanned-store-face-access/
generated_from: sensecraft-solutions@e1864ef
---

:::caution[Usage notice]
This is **not a certified security product and not a life-safety system**. Recognition
accuracy and liveness spoof rejection depend on the face model you deploy and on your own
enrolment images — measure them on site. The reference face weights (InsightFace `buffalo_l`)
are licensed for non-commercial research only. Treat this as an implementation to build
on and measure yourself, not as a product you can install and trust.
:::

## What this solution does

A camera at a door nobody is standing behind recognises a face, requires a passive
liveness check to pass, checks the person against the current face library, the schedule
and the blocklist, and — only if all of that holds — pulses a relay that switches a lock
running on its own 12/24 V supply. Every decision, allowed and denied alike, is published
on MQTT and appended to a hash-chained audit log the console can verify.

It fits an unmanned or partially staffed shop's staff entrance, stock room or back door;
a shared office where the roster changes weekly and enrolment has to be self-service; an
equipment room where the record of who went through matters more than throughput; and a
site that already has RTSP cameras at the door and does not want to replace them.

- Selection and deployment: [reference design page](https://www.seeed.cc/solutions/reference-designs/unmanned_store_access)
- Upstream repository: not published. The package carries no `intro.links.github`; the code lives in an internal repository at packaging time.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>The unlock stays off the network in three of the five presets</h3>
                <p>Recognition, liveness and the decision all happen at the door. A device that loses the cloud keeps opening on the last face library it loaded successfully. The two MQTT-relay presets make the opposite trade explicitly.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>The face library is versioned, pulled and verified, never pushed</h3>
                <p>Poll, chunked download, per-file SHA-256, a signature over the manifest, then an atomic switch. Any failure leaves the previous version in place. Measured activation on a standard reCamera: p50 491.6 ms.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>A deleted person stays deleted</h3>
                <p>Removing someone produces a new version without them and writes a deletion barrier. A rollback to any version that still contains that person is refused by name.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>One of seven boundary metrics has been measured</h3>
                <p>Face library activation latency has numbers on two devices. Recognition FAR/FRR, liveness spoof rejection, both unlock latencies, offline endurance and a 72-hour soak are all pending, each with a stated reason.</p>
            </div>
        </li>
    </ul>
</div>

### What the device at the door sees

Recognition on a reCamera Pro: the face box carries the matched person id and the decision for that frame. With nobody in front of it the view is just the framing.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg" alt="reCamera Pro application view: face box and the decision for that frame"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-no-person-5ee3d054.jpg" alt="The same mounting with nobody present, used to check framing and exposure"/>
</div>

Both frames come from the reCamera Pro lab session of 2026-09-07; the person in them is a project member who took the shot.


## What hardware you need

Three device roles plus one host, and one rule that does not bend.

**① The camera at the door.** Either the device's own sensor (reCamera Pro or standard
reCamera) or an existing RTSP camera feeding a separate host. Mount it at roughly face height, framed so one face fills a usable part of the frame
at the distance people actually stop. Backlit doorways and glass reflections are the usual
failure modes — check the mounting position against both.

**② The thing that recognises and decides.**

| Recognition host | Where recognition runs | Install form | Hardware state |
|---|---|---|---|
| reCamera Pro (RV1126B) | On the camera, beside its existing face-recognition app | A flat set of standard-library Python modules under `/userdata/f1-access`. Buildroot: no Docker, no dpkg, no systemd | Library path and a synthetic-event GPIO readback exercised |
| Standard reCamera (SG2002 / CV181x) | On the camera, in one native process — detection, embedding, two-head texture liveness with blink fusion, matching | A small standard-library daemon, copied manually. No container | Library path exercised over two probe runs |

**③ The relay, and this is the rule.** The lock is always behind a relay or dry contact,
always on its own 12/24 V supply, separate from the compute board's. A lock draws 300 mA
to 1 A; a GPIO pin and an opto-isolated digital output carry milliamps. Four settings —
`active_high`, `pulse_ms`, `relay_contact` and `fail_mode` — are configured per
installation and deliberately have no defaults, because a fail-safe magnetic lock wired
through the normally-open contact stands open permanently and looks like a working
installation until somebody tests it.

**④ The cloud or on-prem host.** Any amd64 or arm64 Linux box with Docker; no GPU. It runs
the face library service, the management console and the MQTT broker. It must be reachable
from every door device, and its clock must be right: devices with no RTC take their time
correction from its HTTP `Date` header. Neither container image has been pushed to a
registry yet — the compose files name the tags they will have and say so at the top.

## How to deploy on site

Two parts, and the order matters.

### One: wire the door — LED, then relay, then lock

Confirm polarity and pulse width on an LED. Confirm the contact clicks on the relay. Only
then put a lock on it. A fail-safe magnetic lock goes through COM and NC; a fail-secure
strike through COM and NO. Getting this backwards leaves the door open permanently, which
is why `relay_contact` has no default value.

**Do not assume a GPIO pin is free.** The surveyed reCamera Pro had `gpio131` already
exported and driven by another application. The actuator refuses to start on a pin whose
current state disagrees with the configured idle state, and will not take a pin over
unless told to explicitly. On the reCamera 2002 HQ PoE baseboard the 6-pin header carries
three IO lines — D1 = sysfs 490 (the only one not multiplexed), CLK = 487, SMD = 488 — but
the header's level polarity and available drive current are not in the vendor documentation,
so no lock may be wired there before a meter and an LED have confirmed them.
On the J20 the design spec puts DO1–DO4 at sysfs 463/464/465/462; whether the target image
exposes them that way or through `Jetson.GPIO` still needs confirming on hardware.

### Two: bring up the cloud side, then the device side

Full per-preset steps are on the reference design page, where answering a few questions about the site also gives you the matching application package to download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/unmanned_store_access" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download 🖱️</font></span></strong>
    </a>
</div><br />

The cloud side is the face library service, the console and a broker, from the compose
files in `assets/cloud/`. The console refuses to start with no token configured, and its
shared-token gate has three roles: viewer reads, operator issues `unlock` / `hold_open` /
`lock`, admin enrols, deletes and rolls back. **A shared token over plain HTTP is not
authentication** — terminate TLS in front of it. The bundled broker configuration is
anonymous plaintext and is for a bench; the design calls for TLS, per-device identities
and topic ACLs, and none of the three is in the bundled configuration.

The device side differs per preset — containers over SSH on the reComputer presets, a
manual copy of a daemon on both reCameras. The full per-preset steps are in the
deployment guide on the reference design page.

Once the cloud side is up, check on the console's device page that the door device is online, heartbeating, and on the expected face library version:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-devices-en-f978d0b3.png" alt="Console device page: online state, heartbeat, current face library version and actuator health"/>
</div>

Then enrol the people who may pass on the persons page. Enrolment mints a new face library version, which the device picks up on its next poll.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-persons-en-8c8db34d.png" alt="Console persons page: enrolled people and the enrolment entry point"/>
</div>

Below is one full pass: enrol a person, publish the version, the device pulls and switches, the door recognises them.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-flow-7a02b8a9.gif" alt="Enrolment through to the device pulling the new face library and recognising the person at the door"/>
</div>

Before a lock goes on, confirm on the PoE baseboard that the GPIO line can actually be driven:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/poe-activation-2de5d904.png" alt="Actuator start-up on a reCamera 2002 HQ PoE, claiming the D1 GPIO line"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/gpio-relay-check-ad22020d.png" alt="Level readback on the same line (sysfs 490) after one allow decision"/>
</div>

<!-- TODO image: the door itself (camera, relay and lock as installed) — needs a field shoot -->

A plaintext `http://` library URL is permitted on a LAN, but only with an HMAC-SHA256
signature over the manifest; without a key the device refuses to start. That signature
stops tampering on the wire. It does not stop someone who has opened a device: any leaked
device key can forge a library.

## How to connect it to your own system

The interface is five MQTT topics and two HTTP surfaces.

| Topic / endpoint | Payload | Retained |
|---|---|---|
| `access/v1/events` (MQTT 8883, QoS 1) | One JSON per decision — see below | No |
| `access/v1/status/{device_id}` | 30-second heartbeat: actuator health, library version and model tag, whether liveness is loaded | Last will only |
| `access/v1/commands/{door_id}` | `unlock`, `hold_open`, `lock` | **Never** |
| `access/v1/receipts/{command_id}` | The terminal state of one command | No |
| `access/v1/relay/{relay_id}/set` and `/state` | MQTT-relay presets only; `state` reports the physical contact, not whether the door is open | `set` no, `state` yes |
| `GET /v1/facedb/current`, `GET /v1/facedb/{version}` (HTTP 8080) | The entire library distribution surface. `Range` for chunked and resumable downloads | — |
| `/api/events`, `/api/devices`, `/api/persons`, `/api/audit/verify` (HTTP 8088) | Console API behind the three-role token gate. No anonymous read | — |

### The event payload

```json
{
  "schema": "access-event/v1",
  "event_id": "6f1a2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
  "time": "2026-09-06T03:20:11Z",
  "device_id": "door-front-01",
  "person_id": "p_alice",
  "anonymous_id": null,
  "score": 0.7412,
  "threshold": 0.62,
  "liveness": { "passed": true, "score": 0.958 },
  "decision": { "allow": true, "reason": "allowed" },
  "door_action": "pulse",
  "actuator_id": "door-front",
  "facedb_version": 3,
  "model_sha": "3a7f...",
  "clock": { "valid": true, "reason": null, "offset_ms": 12 }
}
```

Three fields decide most integrations. **`facedb_version` is `null` before the first
successful sync** — that is "no library at all", a different thing from version 0, and it
is reported as its own denial reason `no_facedb` rather than as a non-match. **`threshold`
is the value in force for that decision**, so a threshold change is visible in the event
stream rather than only in a config file. **`clock.valid`** says whether the corrected
timestamp can be trusted; devices never set their system clock, they only carry an offset.

### The command gate

A command must carry an exact field set, a UUIDv4 `command_id`, an RFC3339 `issued_at`
with a timezone, and a TTL within bounds, and it is checked against a per-identity replay
table. A redelivered command **does not open the door a second time** — it replays the
original receipt, so the caller still gets something to reconcile against. An expired one
comes back as `TTL_EXPIRED`. An anonymous identity is refused.

The `set` topic and the command topic are never retained. A retained unlock replays on
every reconnect, so the door would open by itself after a power cut.

## For engineers: implementation details

### Face library distribution: two endpoints, no push

Devices poll `current`, compare the version, and only then fetch files, with `Range` for
chunked and resumable downloads. Activation latency therefore equals the poll period —
30 s by default. That is the price paid for a device side that needs nothing but an HTTP
client, and for never having a "notification lost but library changed" state.

The full sequence: poll → compare → chunked download → per-file SHA-256 → manifest
signature → load the new matcher → **atomic switch** → gallery write → `op:reload` ack.
A failure at any step leaves the previous version in place. On both hardware units a
version with one byte changed in `gallery.json` and a manifest signed with the wrong key
were rejected on the device, which stayed on the previous version; an interrupted download
resumed.

Every version's manifest carries five licence fields — `license_id`, `use_scope`,
`redistributable`, `source_revision`, `sha256` — so the terms travel with the artefact
rather than living only in a document. A licence still being confirmed is recorded as
`license_id: unverified` with `use_scope: internal-only`; it is never written as
permissive and corrected later.

### Deletion barriers, and why a rollback is not enough

Removing a person mints a new version without them and writes a deletion barrier. Rolling
back to any version that still contains them is refused by name. Without the barrier, one
rollback quietly re-admits everyone who has ever been removed — which is the failure mode
that makes a versioned library dangerous rather than useful.

### Liveness cannot be silently switched off

The upstream recognition service degrades to "keep recognising, skip liveness" when the
model file is missing. For a door that degradation is an open door, so the adapter probes
`/health` at startup and refuses to run unless liveness reports as loaded. A `live` value
of `null` is treated as a **failure**, not a pass: it means the check did not run, and it
surfaces as the distinct reason `liveness_unknown`.

One coverage gap on the record. The RKNN backend's liveness is not implemented upstream,
so a preset running on RKNN cannot satisfy "liveness enforced" and its liveness boundary
must not be filled from that path.

### The audit log

Append-only NDJSON, each record carrying the previous record's hash. Changing one past
decision from denied to allowed breaks the chain, and `/api/audit/verify` reports it. In
the software loop a 13-record chain verified, and failed after one denial was edited into
an approval.

### Registration, and the model-space gap on reCamera Pro

`face_rec_api`'s `buffalo_l` is the wrong embedder for the Pro operationally, independent
of licence: the device's own recognizer runs `rv1126b:scrfd500m+mbf512@fp16`, and cosine
similarity between the two model spaces is approximately zero. No cloud-side embedder
today produces vectors in the device's model space, so **the packaged registration path
does not yet produce a face library usable in production on that device**. Fixing it needs
either a cloud embedder reconciled to the device's model space or a device-assisted
enrolment path. Upstream is moving to the second shape — sending images and recomputing
the embedding on the device — but the packaged version distributes cloud-computed vectors,
and that is what this page describes. The standard reCamera path is not affected: it
embeds on-device and does not enrol through this console.

## Appendix: measured data {#appendix-measured-data}

### What has been measured, and what has not

Seven boundary metrics are defined upstream. One is measured; six carry `status: pending`
with every tier empty, each with the reason recorded.

| Boundary metric | State | Why it is open |
|---|---|---|
| Face library activation | **measured** | Ran on a standard reCamera (two probe runs) and a reCamera Pro (one run) |
| Recognition FAR / FRR | pending | No real face model in the software loop; no positive/negative pairs; nobody in front of either lens |
| Liveness spoof rejection / live false-reject | pending | Needs real spoof samples — photographs, screens, masks — and Silent-Face actually running |
| Direct-path unlock latency p95 | pending | Needs the full camera-to-relay chain on hardware |
| MQTT-relay unlock latency p95 | pending | No relay has been wired at the gateway |
| Offline endurance | pending | Needs a device running disconnected for a long period |
| 72-hour soak: wrong opens / crashes | pending | Needs 72 hours of uninterrupted operation on hardware |

### Face library activation latency

**This is the time from a new library version being published to the device running on it.
It is not a door-opening latency.** Door-open time is measured separately below.

| Platform | Full activation | Conditions |
|---|---|---|
| Standard reCamera (SG2002 / CV181x riscv64, firmware 0.2.2) | **p50 491.6 ms, p95 507.8 ms** (n=20) | USB-RNDIS, 2 people, 16.5 KB library. `op:reload` round trip p50 100.0 ms (n=25) |
| reCamera Pro (RV1126B, Buildroot 2023.02.6) | 62.2 ms (v1), 45.4 ms (v2); up-to-date no-op round 6.2 ms | Ethernet, 1–2 people, under 20 KB library. Consistency gate `problems: []` |
| reCamera PoE | — | Pending hardware; the device-side code is self-tested only |
| macOS software loop | 11.6 ms slowest of three (v1/v2/v3: 11.6 / 3.7 / 3.5 ms) | Loopback HTTP, no TLS, no authentication, zero loss, 4 people × 3 embeddings of 128 dimensions, single run. **Not a device-side figure** |

**How it scales.** Two scale points on the standard reCamera, one run each: 402 people /
2.86 MB in 9 801.7 ms, and 1502 people / 10.66 MB in 22 278.7 ms. Activation tracks
library size, so a large library is a slow first sync — plan the first rollout accordingly
rather than assuming the 491.6 ms figure holds at scale.

### Recognition event to GPIO pin readback (reCamera Pro)

n=22, p50 1.448 ms, p95 2.709 ms. **Read this as an upper bound on one link, not as a door
number.** The input was injected synthetic recognition events rather than a person, the
readback is sysfs so the values are an upper bound on the software path only, and no
external circuit was connected. `gpio130`'s physical identity is confirmed by device tree
pinctrl evidence as one of the expansion port's UART4 M0 pins reconfigured as GPIO — the
3.3 V family, not one of the board's two native 12–21 V outputs — and its level and
available drive current are measured on your own unit; the thresholds carry
`calibration = pending`.

### Door-open time and rejections (reCamera Pro, replayed video)

**Door-open time** — from the first replay frame handed to the app to the GPIO pin being
driven to its active level, across capture, detection, liveness, matching, policy and the
pin write, by face-library size. p50, p95 in brackets, 12 runs per point — at n=12 read the
p95 column as an upper bound.

| Camera / host | 10 people | 1 000 people |
|---|---|---|
| reCamera Pro (RV1126B), f1-access 0.1.1 | **0.62 s** (0.67) | **0.66 s** (0.68) |

The pin was asserted in 24 of 24 runs. Conditions: reCamera Pro running the `f1-access`
0.1.1 app itself, 1280x720 frames replayed at 12.5 fps, liveness on, minimum face 40 px,
match threshold 0.40; the probe is a stock video clip replayed through the device's own
pipeline, not a live person. The 1 500 ms contact hold that follows the pin write is not
counted. No relay and no lock are connected, so these figures contain no mechanical
response. The measured p50 difference between the 10-person and 1 000-person library is
37 ms.

**Rejections** — 20 runs per row, same device and app. 40 runs are an unregistered person;
60 are a screen held in front of the lens.

| Run | Face library | Pin asserted |
|---|---|---|
| Unregistered person | 9 synthetic identities | 0 / 20 |
| Unregistered person | 999 synthetic identities | 0 / 20 |
| Phone screen replay, clip A | 10, template built from the attack clip | 0 / 20 |
| Phone screen replay, clip B | 10, template built from the attack clip | 0 / 20 |
| Still screen image | 10, template built from the attack clip | 0 / 20 |

In the two unregistered-person rows the library holds only synthetic vectors, so the person
in the clip is not enrolled. In the three screen rows the template is built from the attack
clip itself, so the face in the library and the face on the screen are the same person. The
still-screen row is one display frame held still; no printed photograph was tested.

**AI host recognition service (reComputer J40 Series).** On Orin NX 16 GB with JetPack 6 the
recognition service builds its TensorRT engines on the box in 61 s + 62 s + 73 s and answers
its health endpoint 214 s after start. One frame off a 1280x720 RTSP stream comes back with a
face box, a liveness verdict and a 512-d embedding in 24-26 ms of server time (30.3 ms p50
over HTTP, 12 requests). The standard reCamera and the AI host have no door-open figure: the
standard camera's recogniser is a closed native process with no way to feed it a frame, and
the AI-host test box has no second header pin to read the relay contact back.

### What the software loop established

On one macOS development machine, with a fake actuator, an in-memory broker and a fake
recogniser: 52 of 52 checks passing across three library versions built, published,
pulled, SHA-verified and atomically switched; the policy denying a photograph
(`liveness_failed`), a null liveness result (`liveness_unknown`), a blocklisted person, a
below-threshold stranger, an empty frame and a repeat within the debounce window; exactly
two unlock pulses across ten frames, both at the configured 1500 ms; a rollback to two
different versions refused by the deletion barrier with the current version unchanged; a
remote unlock accepted and executed, an expired one rejected with `TTL_EXPIRED`, a replay
returning the original receipt without a second pulse, and an anonymous identity refused;
a retained last will delivered after a drop; a 13-record audit chain verifying and failing
after one denial was edited into an approval; and the console's three roles behaving.

None of that measures how well the system recognises faces or rejects spoofs. It measures
whether the protocol and the state machine do what they claim.

### Licensing

The code in this package and in the upstream repository is Apache-2.0. **The model weights
are not.** Face detection and embedding use InsightFace's `buffalo_l`; InsightFace's own
statement is that the code is MIT with no limitation on commercial use, but that the
training data — and models trained with that data — are available for non-commercial
research purposes only. `buffalo_l` is such a model: `license_id: non-commercial`,
`use_scope: non-commercial`, `redistributable: false`. The weights are not shipped here.

Two consequences worth stating before they are discovered late. A commercial deployment
must replace the face backbone with a commercially licensed one. And replacing it means
**rebuilding every face library version**, because embeddings are not comparable across
models — a library built with one backbone scores approximately zero against another, so
old versions are dead rather than merely stale. The `model_tag` guard in the manifest is
what stops a device loading one by mistake.

The passive liveness model, MiniVision's Silent-Face-Anti-Spoofing, is Apache-2.0:
`use_scope: commercial`, redistributable, used unmodified.

### What this cannot tell you

- **Whether it will recognise the people at your door.** The shipped threshold is a starting point; sweep positive and negative pairs on the installed camera and set it from that.
- **Whether it will reject a photograph.** Liveness has never been exercised against real spoof samples.
- **How fast the door opens with a relay and lock wired.** The door-open figure above stops at the trigger pin; relay and lock response is not included.
- **Whether it survives a week.** Offline endurance and the 72-hour soak are both open.

## Data and asset sources

All paths below are in the upstream repository `unmanned-store-access`.

- Face library activation, standard reCamera: `evaluation/runs/2026-09-06-recamera-std-p3-r2/results.md` §2 and `boundary.facedb-activation.yaml` alongside it
- Face library activation and GPIO readback, reCamera Pro: `evaluation/runs/2026-09-07-recamera-pro-p1/results.md` and the two `boundary.*.yaml` alongside it
- Software loop and the six pending boundaries: `evaluation/runs/2026-09-06-c1-software/results.md` and `boundary.{recognition,liveness,latency-direct,latency-p3,offline,soak72h}.yaml`
- Registration model-space gap: upstream `docs/user-guide.md` §5.1 and `evaluation/runs/2026-09-07-recamera-pro-p1/results.md` §9.2
- Licence terms: `gallery/ATTRIBUTION.md` in the solution package, and the licensing section of the package description
- Console screenshots on the reference design page are **synthetic demo data** — the people, scores and events are fixtures, not field results
