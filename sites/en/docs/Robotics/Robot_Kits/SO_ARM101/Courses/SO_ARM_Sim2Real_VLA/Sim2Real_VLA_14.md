---
description: "Chapter 14 of the SO-ARM101 Sim-to-Real VLA Course — setup your Jetson edge device: select the target, install SDK Manager, enter force recovery, flash JetPack 7.2, and verify the board."
title: Chapter 14 - Setup Your Jetson Edge Device
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - AGX Orin
  - AGX Thor
  - JetPack
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_14
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_14/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 4 · Chapter 14 · Deploy on Jetson</span>
    <h2>14. Setup Your Jetson Edge Device</h2>
    <p>
      Prepare the Jetson platform for GR00T N1.7 TensorRT deployment:
      select the target, flash JetPack 7.2, and verify the board before
      connecting the robot.
    </p>
    <div className="hero-actions">
      <a href="#targets">Targets</a>
      <a href="#host">Host PC</a>
      <a href="#recovery">Force recovery</a>
      <a href="#flash">Flash</a>
      <a href="#verify">Verify</a>
    </div>
  </div>
</section>

## 14.1 Supported Targets

<section id="targets" className="section-card">
  <div className="section-title">
    <span>Orin or Thor</span>
    <h2>14.1 Supported Targets</h2>
  </div>

The validated deployment targets for the SO-ARM101 pipeline are:

| Target | Validated software path | Runtime environment used later |
|---|---|---|
| Jetson AGX Orin | JetPack 7.2 / L4T R39.2 | `.venv-jp72` with `scripts/deployment/orin_jp72/run_full_trt.sh` |
| Jetson AGX Thor | JetPack 7.2 / L4T R39.2 | `.venv` with `scripts/activate_thor.sh` |

:::caution Engines are target-specific
TensorRT engines depend on the GPU architecture. Orin and Thor may share
the same compatible checkpoint and dataset, but each target must build its
own engine bundle (Chapter 17).
:::

</section>

## 14.2 Prepare the Host Computer

<section id="host" className="section-card">
  <div className="section-title">
    <span>Ubuntu host</span>
    <h2>14.2 Prepare the Host Computer</h2>
  </div>

Prepare an Ubuntu host with:

- at least 25 GB of free space for SDK Manager and JetPack packages;
- a reliable USB Type-C data cable;
- a stable network connection;
- administrator access.

Install NVIDIA SDK Manager from the official download page:
[https://developer.nvidia.com/sdk-manager](https://developer.nvidia.com/sdk-manager).

</section>

## 14.3 Enter Force Recovery Mode

<section id="recovery" className="section-card">
  <div className="section-title">
    <span>Button dance</span>
    <h2>14.3 Enter Force Recovery Mode</h2>
  </div>

### Jetson AGX Thor Developer Kit

1. Power off the Jetson.
2. Connect its recovery USB Type-C port to the host computer.
3. Hold the Force Recovery button.
4. Press and release Reset while continuing to hold Force Recovery.
5. Release Force Recovery.
6. Confirm that SDK Manager detects the target.

| Mark | Button |
|---|---|
| 11 | Power |
| 12 | Force Recovery |
| 13 | Reset |

### Jetson AGX Orin Developer Kit

The Orin developer kit must be **powered on** before this procedure; use
button 2 (Force Recovery) and button 3 (Reset):

1. Connect USB Type-C port 10 — next to the 40-pin header — to the Ubuntu
   host.
2. Connect the power supply and make sure the kit is powered on.
3. Press and hold button 2 (Force Recovery).
4. While holding Force Recovery, press and hold button 3 (Reset).
5. Release both buttons.
6. Confirm that SDK Manager detects the Jetson AGX Orin target.

| Mark | Button or port |
|---|---|
| 1 | Power button |
| 2 | Force Recovery button |
| 3 | Reset button |
| 10 | USB Type-C port used for flashing |

### Alternative: Enter Recovery Mode While Powered Off

1. Make sure the developer kit is powered off.
2. Press and hold button 2 (Force Recovery).
3. Connect the power supply. If the power LED does not turn on, press and
   release button 1 (Power).
4. Release Force Recovery.
5. Confirm that SDK Manager detects the target.

Reference: [NVIDIA Jetson AGX Orin Developer Kit User Guide — Force Recovery Mode](https://docs.nvidia.com/jetson/agx-orin-devkit/user-guide/latest/setup_bsp.html#hardware-setup).

</section>

## 14.4 Install JetPack

<section id="flash" className="section-card">
  <div className="section-title">
    <span>SDK Manager</span>
    <h2>14.4 Install JetPack</h2>
  </div>

In SDK Manager:

1. Select **Jetson AGX Thor / Jetson AGX Orin** as the target hardware.
2. Select **JetPack 7.2**.
3. Use **Direct Flash** unless your deployment requires an ISO workflow.
4. Complete the target installation and initial Ubuntu setup.

Follow the SDK Manager wizard through **Installation completed
successfully** before disconnecting the recovery cable.

</section>

## 14.5 Verify the Jetson

<section id="verify" className="section-card">
  <div className="section-title">
    <span>On the device</span>
    <h2>14.5 Verify the Jetson</h2>
  </div>

Run these commands on the target:

```bash
tr -d '\0' < /proc/device-tree/model
cat /etc/nv_tegra_release
df -h /
free -h
```

Confirm that:

- the detected model matches the intended Orin or Thor target;
- the system reports the expected JetPack/L4T release;
- the NVMe or root filesystem has enough space for the checkpoint,
  backbone, ONNX files, and TensorRT engines;
- the system boots normally after a restart.

Reserve approximately 45–50 GB for a complete local TensorRT workflow.

Next: [Chapter 15 — Connect the Robot Hardware](Sim2Real_VLA_15.md).

</section>

</div>