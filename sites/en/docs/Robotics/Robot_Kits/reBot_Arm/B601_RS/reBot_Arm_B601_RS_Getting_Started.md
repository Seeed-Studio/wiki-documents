---
description: This guide will help you get started with the reBot Arm B601-RS, including purchasing options, assembly, calibration, and software configuration.
title: reBot Arm B601-RS Quick Start
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/
---

# Getting Started with reBot Arm B601-RS

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6-DOF Robotic Arm · Multi-Motor Support · Kinematics Solver · Trajectory Planning · Fully Open Source</strong>
</p>

The reBot Arm project has been open-sourced on [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). This guide will take you through the quick start of B601-RS, from assembly to operation.

The content of this guide is racing towards you at the speed of light — stay tuned!

:::

## Purchasing Options


## Step 1: Assembly Guide

Before Assembly:

- Please read the following instructions carefully to ensure a smooth assembly process.
  1. This kit includes various screws and parts with similar appearances. Verify specifications and orientation before fastening.
  2. The video was recorded in early April. Minor updates may exist, but assembly remains the same. Refer to shipped parts as final.
  3. Shipped screws have thread-lock applied. Use proper tools or an electric screwdriver (recommended). Set torque to (3–6 kgf·cm) to avoid stripping. If stripping occurs, stop immediately and replace or realign the screw. Stripped thread-lock screws are difficult to remove and may damage parts.
  4. Ensure safety during assembly. Avoid pinching or injury. Children must be supervised.

## Step 2: Reset Motors ID

### Before Reset Motors:

Before motor parameter configuration, note the following preparations and safety rules:

- Buy 2 tooling clamps (≥3 inches) and a 48V XT30-output switching power supply (use regular brand, no inferior products).
- Keep ≥1m distance during debugging/operation.
- No motor hot-plugging; cut off power before plugging/unplugging XT30 2+2 interface.
- Do not overload/overspeed; check wiring and fasteners before startup; avoid humid/high-temperature/dusty environments.
- Set reasonable program parameters and emergency stop to prevent out-of-control.
- **Strictly follow these rules. Seller is not liable for risks/liabilities from illegal operation or personal mistakes.**

### Preparation List

#### Hardware

#### Computer Requirement

- Dual-boot personal computer (Windows + Ubuntu / macOS)

#### Software
