---
description: Configure how reCamera Pro behaves on your network in daily operation — system time, SSH/HTTP access, serial baud rate, and the admin password.
title: Network, Time and Access Control
keywords:
  - reCamera
  - reCamera Pro
  - network settings
  - SSH
  - time settings
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_device_info
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_device_info/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Network, Time and Access Control

The **Device Info** area of the Web UI covers the settings that decide how a deployed reCamera Pro behaves on your network: its clock, which remote-access services are open, and who can log in. First-time Wi-Fi connection lives in [Access the device over Wi-Fi](/recamera_pro_wifi_access/); this page is about **long-term configuration** after the device is on your network.

Device Info also reports hardware/software versions and resource usage — see [Basic information](#basic-information) at the bottom, and [Back up and restore](/recamera_pro_backup_restore/) and [Firmware update and recovery](/recamera_pro_firmware_update/) for the remaining System Settings items.

## Time settings

The system time drives recording schedules, file timestamps, and log entries. Set it in **Device Info → Time Settings**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_F3jLNlVu0W.png" />

- Verify the clock after every reboot and after moving the device to a network without Internet access.
- If schedules or recording directories land at the wrong hours, check time first — a wrong clock is the most common cause.

{/* TODO(verify): document whether the device syncs time via NTP automatically when connected to the Internet, which NTP servers/regions are used, and how time behaves after reboot without network. */}

## Network settings (long-term)

**Device Info → Network Settings** shows the Wi-Fi module state, connected network, and detailed network information (click the exclamation mark next to the connected network for IP/MAC details).

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_GJspvgAFdl.png" />
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_vq4u1biblp.png" />

For a permanent installation:

- Reserve a fixed IP for the device's MAC address on your router (DHCP reservation), or record the assigned address in your asset list.
- Keep the device on a network segment where only intended clients can reach the Web UI and open services.

## Connection settings: SSH, HTTP, serial

**Device Info → Connection Settings** controls how you connect to the device:

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZH9JMcsCen.png" />

| Setting | Effect | Deployment guidance |
| --- | --- | --- |
| SSH remote connection | Enables/disables SSH access to the system | Enable for development and maintenance; disable on production devices you do not need shell access to |
| HTTP settings | Configures the device's HTTP service | Restrict exposure to trusted networks |
| Serial port baud rate | Sets the baud rate of the serial port | Must match the external controller/MCU you integrate with |

:::caution Access changes take effect immediately
Disabling SSH or changing HTTP settings can lock out your current remote session. Keep the Web UI (or the USB direct connection at `192.168.42.1`) available as a fallback path while changing connection settings.
:::

{/* TODO(verify): confirm exact HTTP settings fields exposed in Connection Settings on current firmware (port, enable switch, TLS) and document them here. */}

## Password management

The admin password is changed in **Device Info → System Settings**. The Web UI login uses username `admin`; the initial password on a fresh device is `recamera` (you are asked to set a new one at first login).

- **Change the default password before deployment** — anyone knowing the default can otherwise reach the Web UI, and the [web terminal](/recamera_pro_terminal/) / SSH root login (`root` / `recamera` by default) share the device's credential state.
- Changing the password affects Web UI login; record where the new password is stored.

{/* TODO(verify): confirm the exact relationship between the Web UI admin password, the root SSH/terminal password, and whether changing one changes the other, on current firmware. */}

## Basic information

**Device Info → Basic Information** shows hardware and software versions and live system resource usage — the first thing support will ask for.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_aWZqM1cZvA.png" />

Quote the firmware version from this page when [updating firmware](/recamera_pro_firmware_update/) or [collecting logs for support](/recamera_pro_collect_logs/).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
