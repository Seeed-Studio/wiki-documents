---
title: ReSpeaker 2-Mics Pi HAT V2.0 FAQ
description: Frequently asked questions about the V2.0 codec I2C address and hardware use for the ReSpeaker 2-Mics Pi HAT.
slug: /respeaker_2_mics_pi_hat_faq
keywords:
  - ReSpeaker 2-Mics Pi HAT FAQ
  - 2-Mics Pi HAT V2.0
  - TLV320AIC3104
  - codec I2C address
---

# ReSpeaker 2-Mics Pi HAT V2.0 FAQ

This page contains verified answers for the ReSpeaker 2-Mics Pi HAT. Each answer states the product variant and firmware mode it applies to, together with the date it was last verified against current official sources.

## Before you begin

- Confirm the exact product variant and the firmware mode (USB or I2S) the device is running.
- Check the current firmware version before applying version-specific steps.
- Answers on this page were last verified on 2026-09-01; re-check the linked official sources if you are reading this later.

## Hardware Issues {#hardware-issues}

### What is the codec I2C address on ReSpeaker 2-Mics Pi HAT V2.0? {#v2-codec-i2c-address}

**Applies to:** ReSpeaker 2-Mics Pi HAT V2.0 only; V1.x uses different codec hardware

**Last verified:** 2026-09-01

ReSpeaker 2-Mics Pi HAT V2.0 uses a TLV320AIC3104 codec at the 7-bit I2C address `0x18`. The official V2.0 device-tree overlay declares `tlv320aic3104@18` with `reg = <0x18>`, and the public V2.0 schematic identifies the same codec.

**Prerequisites:**

- Confirm the board is V2.0 with the official hardware-revision guide
- Use the revision-specific V2.0 driver and device-tree overlay

1. Follow the official V2.0 Raspberry Pi guide to install `respeaker-2mic-v2_0-overlay.dtbo`.
2. Check that the V2.0 overlay declares the codec at 7-bit address `0x18`.
3. Reboot and use `arecord -l` or `aplay -l` to confirm that the `tlv320aic3x-hifi` sound device binds successfully.

**Success criteria:**

- The V2.0 overlay loads and the TLV320AIC3104-backed sound card appears in the ALSA device list

**Notes:**

- Do not copy this address to ReSpeaker 2-Mics Pi HAT V1.x, which uses different codec hardware.
- The address alone is not a complete or supported ESP32-S3 wiring and codec-initialization guide.

**References:**

- [ReSpeaker 2-Mics Pi HAT V2.0 Raspberry Pi guide](https://wiki.seeedstudio.com/respeaker_2_mics_pi_hat_raspberry_v2/)
- [Official V2.0 Raspberry Pi device-tree overlay](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/rpi/respeaker-2mic-v2_0-overlay.dts)
- [Official ReSpeaker 2-Mics Pi HAT V2.0 schematic](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/202004059_ReSpeaker-2-Mics-Pi-HAT-V2.0_SCH_PDF_241121.pdf)
