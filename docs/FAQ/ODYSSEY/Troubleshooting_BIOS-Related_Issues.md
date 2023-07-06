---
description: ODYSSEY-FAQ
title: Troubleshooting BIOS-Related Issues(WiFi/Bluetooth/Fan/Auto Power-On/Boot Guard/GPIO)
#keywords:
slug: /Troubleshooting_BIOS-Related_Issues
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 6/26/2023
  author: Seraphina
---

# Troubleshooting BIOS-Related Issues

Some issues with Odyssey can be resolved by configuring BIOS settings. Below are some problems that can be addressed using BIOS settings. First, we will describe how to access the BIOS setup.

### How to access the BIOS setup

Press the Power Button and keep pressing `DEL` key until you see the BIOS Setup.

### How to solve the problem of being unable to connect to Wi-Fi and Bluetooth

Check BIOS settings and enable Wi-Fi and Bluetooth from BIOS.

### Is the built-in fan controllable

Currently the fan is controlled by BIOS, and not controlled by user. The fan speed is set according to the CPU temperature. Check `Chipset` -> `FAN Contorl` in the BIOS setup screen for more information.

### How to set the ODYSSEY - X86J41x5 to auto power on when power plugged in

This also need to be configured in the BIOS. Enter BIOS settings by pressing `DEL` key. Navigate to `Chipset` -> `Restore on AC Power Loss` and change settings to `Last State`.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png" alt="pir" width={600} height="auto" /></p>

### Does ODYSSEY board have Boot Guard for Secure Boot

Yes, you can enable the `Security Boot` option in the BIOS. When this is enabled, the BIOS will disable booting from unauthenticated devices.

### Why is GPIO still working after Odyssey is Shut down

To set this up, you need to update to the latest BIOS we provide. In the latest BIOS, you can change enable to disable here to turn off both GPIO and ODYSSEY.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/OdysseyFAQ1.png" alt="pir" width={600} height="auto" /></p>
