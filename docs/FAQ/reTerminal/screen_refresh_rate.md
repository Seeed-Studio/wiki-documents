---
description: reTerminal && reTerminal DM-FAQ
title: How to solve screen refresh rate is too low
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /screen_refresh_rate_low
last_update:
  date: 7/2/2024
  author: Parker
---

<!-- ### Q17: How to solve screen refresh rate is too low -->

## Problem description

Screen has noticeable refresh stutter stripes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/DM_bug.gif" alt="pir" width={600} height="auto" /></p>

## Problem solving

- **Step 1.** Enter the following command in the terminal.

```sh
sudo raspi-config
```

- **Step 2.** Select `6 Advanced Options` and press Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/01.png" alt="pir" width={600} height="auto" /></p>

- **Step 3.** Select `A9 Wayland` and press Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/02.png" alt="pir" width={600} height="auto" /></p>

- **Step 4.** Select `Yes` and press Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/03.png" alt="pir" width={600} height="auto" /></p>

- **Step 5.** Select `Ok` and press Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/04.png" alt="pir" width={600} height="auto" /></p>

- **Step 6.** Select `Finish` and press Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/05.png" alt="pir" width={600} height="auto" /></p>

- **Step 7.** Select reboot now, select `Yes` and press Enter

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FAQ/06.png" alt="pir" width={600} height="auto" /></p>

:::note
If you are using a bullseye system, switching wayland mode may disable your remote login software VNC.
If you are using a bookworm system, you will not have this problem.
:::