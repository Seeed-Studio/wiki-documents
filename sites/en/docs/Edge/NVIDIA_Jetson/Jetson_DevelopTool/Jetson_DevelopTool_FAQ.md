---
description: Frequently asked questions and troubleshooting tips for Seeed Jetson DevelopTool — covering flashing, SSH, VNC, network sharing, and more.
title: FAQ
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - FAQ
  - troubleshooting
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_faq
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/jetson_developtool_faq/
---

## Flashing

**Q: "Detect Device" shows nothing after entering Recovery mode.**

- Check that the USB-C cable supports data transfer (not a charge-only cable).
- On Linux, verify with `lsusb | grep NVIDIA`. The device should appear as `NVIDIA Corp. APX`.
- On Windows, USB passthrough via WSL2 requires `usbipd`. Run `usbipd list` to check if the device appears, then `usbipd attach --wsl --busid <ID>` to pass it through.
- Try a different USB port, preferably USB 3.0 directly on the motherboard (avoid hubs).

**Q: Flashing fails partway through with an error.**

- Ensure the Ethernet cable between PC and Jetson is connected (some BSP flash scripts require it even when flashing over USB).
- Verify you have at least 20 GB of free disk space.
- Re-enter Recovery mode and retry. A single failure does not brick the device.

**Q: Flash takes more than 15 minutes.**

- This is uncommon. Check that the USB cable is plugged into a USB 3.0 port. USB 2.0 will be significantly slower.

---

## SSH / Connection

**Q: Cannot connect to Jetson over SSH.**

- Verify the Jetson and PC are on the same network, or that [PC Network Sharing](./Jetson_DevelopTool_PC_Network_Sharing) is enabled.
- Confirm the SSH service is running on Jetson: `sudo systemctl status ssh`
- Check the IP address — use the Jetson Init serial wizard or check your router's DHCP table.

**Q: SSH connects but then immediately disconnects.**

- The Jetson may have run out of memory. Check with `free -h` and consider enabling swap via the [Skills](./Jetson_DevelopTool_Skills) module.

---

## VNC / Remote Desktop

**Q: VNC screen is black after connecting.**

- The Jetson's display server may not be running. Try: `sudo systemctl restart gdm3`
- If no physical display is attached, you may need to configure a virtual display in `/etc/X11/xorg.conf`.

**Q: noVNC in the browser shows "Disconnected".**

- Confirm the VNC server is running on the Jetson: `ps aux | grep vncserver`
- Check that port 5900 (or the configured VNC port) is not blocked by a firewall.

---

## App Market

**Q: App installation fails with "Docker not found".**

- Use the [Skills](./Jetson_DevelopTool_Skills) module to install Docker first, or run: `curl -fsSL https://get.docker.com | sh`

**Q: A Docker image fails to pull.**

- This is usually a network issue. Ensure the Jetson has internet access — use [PC Network Sharing](./Jetson_DevelopTool_PC_Network_Sharing) if needed.
- If you are behind a proxy, enable **Auto Proxy Forward** in the PC Network Sharing tab.

---

## Skills

**Q: A skill fails with a permission error.**

- Most skills require `sudo` privileges. Make sure the SSH user has passwordless sudo configured, or enter your password when prompted in the skill log.

**Q: My custom OpenClaw skill is not showing up.**

- Restart the DevelopTool after placing the skill file in `skills/openclaw/`. The tool loads custom skills on startup.

---

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
