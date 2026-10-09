---
description: Maintain the device and debug custom firmware using the serial console, SSH, logs, and network tools.
title: Device Access and Debugging
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_device_debug
sku: 10003420
sidebar_position: 7
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/recamera_pro_bsp_device_debug/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Device Access and Debugging

This page summarizes the debug channels **actually included** in the firmware. The information comes from the board overlay configuration under `project/cfg/BoardConfig_Recamera2/overlay/`. Channels can be added or removed with the `RK_POST_OVERLAY` option; see [System Customization (DTS / Kernel / Buildroot / Overlay)](/recamera_pro_bsp_system_customization/).

## Channel Overview

| Channel | Port | Enabled by | Purpose |
| --- | --- | --- | --- |
| Serial console | `ttyFIQ0`, **1500000** 8N1 | U-Boot `CONFIG_BAUDRATE` | Boot logs, U-Boot interaction, recovery |
| SSH | 22 | `overlay-buildroot-sshd` (`S50sshd`) | Primary development channel |
| Web terminal ttyd | **7681** | `overlay-buildroot-ttyd` (`S50ttyd`) | Open a shell in a browser |
| WebSocket logs | **8765** (loopback only) | `overlay-buildroot-log` (`S10log`) | View live logs in the Web UI |
| go2rtc API | **1984** (127.0.0.1 only) | `overlay-buildroot-go2rtc` (`S50go2rtc`) | Stream-management API |
| go2rtc WebRTC | **8555** | Same as above | Receive WebRTC streams |
| go2rtc RTSP | **554** (enabled as needed) | Same as above | External RTSP |
| Internal rkipc RTSP | **5554** (127.0.0.1) | `recamera_ipc` | Upstream source for go2rtc |
| vsftpd | 21 | `overlay-buildroot-vsftpd` (`S70vsftpd`) | File transfer |

## Serial Console

U-Boot sets `CONFIG_BAUDRATE=1500000` (`sysdrv/source/uboot/u-boot/configs/rv1126b_recamera2_defconfig:162`). The kernel command line uses `console=ttyFIQ0` and `earlycon=uart8250,mmio32,0x20810000`.

```bash
# On the host (USB-to-serial adapter)
picocom -b 1500000 /dev/ttyUSB0
# Or
minicom -D /dev/ttyUSB0 -b 1500000
```

The baud rate is **1500000**, not the common 115200. A mismatched baud rate produces garbled output.

The serial console is the only channel available when the system cannot boot. Use it to debug startup problems such as kernel panics, rootfs mount failures, and DDR initialization.

## SSH

Key settings in `overlay-buildroot-sshd/etc/ssh/sshd_config`:

```text
PermitRootLogin yes
PasswordAuthentication yes
AuthorizedKeysFile  .ssh/authorized_keys
UsePAM yes
UseDNS no
Subsystem sftp /usr/libexec/sftp-server
```

By default, **root password login is enabled**, and public-key authentication is also supported. SFTP is available for file transfers.

```bash
ssh root@<device-IP>
scp my_app root@<device-IP>:/userdata/
sftp root@<device-IP>
```

### Failed-Login Lockout (PAM)

`overlay-buildroot-sshd/usr/libexec/ssh-login-lock.py` uses PAM to protect against brute-force attempts:

- After **5 consecutive failures** (`MAX_ATTEMPTS = 5`), the account is locked for **300 seconds** (`LOCKOUT_SECONDS = 300`).
- Attempts are counted by client IP (`PAM_RHOST`), using `/proc/uptime` as the time base, so **a reboot clears the counter**.
- State file: `/userdata/config/system/login_lock.json`; the associated lock file is `login_lock.json.lock`.

If locked out, wait 300 seconds, reboot, or log in over the serial console and remove `/userdata/config/system/login_lock.json`.

## Web Terminal (`ttyd`)

`overlay-buildroot-ttyd/oem/usr/etc/init.d/S50ttyd` starts:

```text
ttyd -p 7681 /oem/usr/bin/ssh-login-whitelist.sh
```

Open `http://<device-IP>:7681` in a browser; it prompts for a username. The wrapper script `ssh-login-whitelist.sh` allows only users in its allowlist, then runs `exec ssh <user>@localhost`:

```bash
ALLOWED_USERS=("root" "admin")
```

In other words, **ttyd is effectively an SSH client in the browser**. Authentication still uses SSH (including the PAM lockout policy above); users outside the allowlist are rejected. To add a user, edit the `ALLOWED_USERS` array and rebuild the rootfs, or edit the script directly on the device (`/oem` may need to be remounted if it is read-only).

## Logging System

The firmware has three logging layers. Understanding their roles can save debugging time.

### 1. syslog-ng (`overlay-buildroot-syslog-ng/etc/syslog-ng.conf`, @version 3.38)

| Output | Path / destination | Format |
| --- | --- | --- |
| `d_Recamera2` | `/var/log/Recamera2.log` | JSON: `{"sTimestamp","sLevel","sData"}` |
| `d_Recamera2_developer` | `/var/log/Recamera2_developer.log` | Text: `ISODATE HOST PROGRAM[PID]: [LEVEL] MESSAGE` |
| `d_python_udp` | UDP `127.0.0.1:5140` | Forwarded to the WebSocket log service |

Log files are owned by `root:adm` with permissions `0640`. For debugging, start with `Recamera2_developer.log` (human-readable); use `Recamera2.log` (JSON) for programmatic parsing.

```bash
# tail -f /var/log/Recamera2_developer.log
# tail -n 200 /var/log/Recamera2.log
```

### 2. WebSocket Log Service (`overlay-buildroot-log/oem/usr/bin/websocket_log.py`)

`S10log` launches the service with python3:

- Listens on UDP `127.0.0.1:5140` for messages forwarded by syslog-ng.
- Provides a WebSocket service on port **8765**, bound to `127.0.0.1` (`SERVER_IP = "127.0.0.1"`).
- Keeps the latest **2000** messages in memory (`MAX_LOG_SIZE = 2000`).

Because it binds to loopback, forward the port over SSH to access it from the host:

```bash
ssh -L 8765:127.0.0.1:8765 root@<device-IP>
# Then connect a browser or script to ws://localhost:8765
```

The Web UI's live log panel uses this path.

### 3. Serial Console / `dmesg`

Kernel messages are sent to `console=ttyFIQ0`. On the device, use `dmesg` to inspect the kernel ring buffer.

## Video Streams (go2rtc)

Default configuration in `overlay-buildroot-go2rtc/oem/usr/etc/go2rtc/go2rtc.yaml`:

```yaml
streams:
  main:
    - rtsp://127.0.0.1:5554/live/0
  sub:
    - rtsp://127.0.0.1:5554/live/1
api:
  listen: "127.0.0.1:1984"
webrtc:
  listen: ":8555"
rtsp:
  listen: ""        # Not listening by default
```

The architecture is: **`recamera_ipc` (rkipc) provides an internal RTSP source at 127.0.0.1:5554 → go2rtc pulls the stream and exposes it over protocols such as WebRTC/HLS**. `main` is the main stream and `sub` is the substream.

### The External RTSP Port Is Configured Dynamically

When `S50go2rtc` starts, it reads `/userdata/config/rkipc.ini` and decides whether to expose RTSP on `:554`, using this priority order:

1. Check `enable=1` under `[video.0.rtsp]`.
2. Otherwise, check `enable=1` under `[video.0.onvif]`.
3. Otherwise, check `enable=1` under `[video.1.rtsp]`.
4. If none are enabled, do not open the RTSP port; use the default configuration only.

When RTSP is enabled, it **copies** the default YAML to `/tmp/go2rtc/go2rtc.yaml` and adds `rtsp: listen: ":554"`. If `authtype=1`, it also includes the `username` and `password` from the INI file. This avoids modifying the default configuration under the read-only `/oem` directory.

Useful debugging commands:

```bash
# cat /userdata/config/rkipc.ini | grep -A5 '\[video.0.rtsp\]'
# cat /tmp/go2rtc/go2rtc.yaml          # Active configuration
# cat /var/run/go2rtc.pid
# /oem/usr/etc/init.d/S50go2rtc restart
```

After changing RTSP / ONVIF switches in `rkipc.ini`, restart go2rtc so it regenerates the configuration.

Stream URLs (when RTSP is enabled):

```text
rtsp://<user>:<pass>@<device-IP>:554/...
http://<device-IP>:8555/            # WebRTC
```

The URL path depends on the go2rtc stream name (`main` / `sub`). Add a complete example after verifying it on a device.

## FTP (`vsftpd`)

`overlay-buildroot-vsftpd/etc/vsftpd.conf` configures port 21, `local_enable=YES`, `write_enable=YES`, `chroot_local_user=YES`, and `ssl_enable=NO`. The user list is `root` and `admin`.

The configuration directory is hidden and access is denied:

```text
hide_file={config,*/config,config_tar,*/config_tar}
deny_file={config,*/config,config_tar,*/config_tar}
```

As a result, `/userdata/config` is not visible over FTP. This is an intentional product design; configuration should be changed through the Web UI or API. Use SSH/SFTP instead of FTP when debugging.

## Environment Variables and Directory Conventions

`overlay-buildroot-rkenv/etc/profile.d/RkEnv.sh` sets these variables for login shells:

```bash
export OEM_HOME=/oem
export PATH=$PATH:/oem:/oem/bin:/oem/usr/bin:/oem/sbin:/oem/usr/sbin
export LD_LIBRARY_PATH=/oem/usr/lib:/oem/lib:$LD_LIBRARY_PATH
export HOME=/userdata
```

This means:

- **`/oem`** contains Seeed / Rockchip applications and libraries (including `go2rtc`, the `ttyd` wrapper, `websocket_log.py`, and `librknnrt.so`).
- **`/userdata`** is writable and stores configuration (`/userdata/config/`) and user data. It is also the default `HOME`.
- Your cross-compiled program can load libraries under `/oem/usr/lib` through `LD_LIBRARY_PATH`. If it runs from an init script, make sure the environment is set there as well.

## Other Built-In Services

| Script | Purpose |
| --- | --- |
| `overlay-buildroot-board-id/etc/init.d/S00board-id` | Runs early during boot and reads the ADC (`/sys/bus/iio/devices/iio:device0`) to identify the baseboard and expansion-board model; writes the result to `/run/board_id.env`. It averages three samples with a tolerance of 440. Voltage levels are 0.0/0.3/0.6/0.9/1.2/1.5/1.8 V and map to `V0.9`–`V1.5` and `TYPE0`–`TYPE6`. |
| `overlay-buildroot-hwclock/etc/init.d/S20hwclock` | Runs `hwclock --hctosys --utc` at boot to sync from the RTC and writes the time back at shutdown. |
| `overlay-buildroot-watchdog/etc/init.d/S15watchdog` | Starts the hardware watchdog with `watchdog -T 30 -t 15 /dev/watchdog` (30 s timeout, 15 s keepalive interval); writes `V` to `/dev/watchdog` on stop to disable it. |
| `overlay-buildroot-udhcpc/usr/share/udhcpc/default.script` | Customized DHCP script that writes `/tmp/resolv.conf.<iface>` per interface and merges them into `/etc/resolv.conf` with **eth0 taking priority**; supports a manual-DNS mode marker at `/userdata/config/system/eth0_dns_mode`. |
| `overlay-buildroot-banner` | reCamera ASCII logo in `/etc/motd`; `/etc/profile.d/banner.sh` prints it only in interactive non-SSH sessions. |

> The comment in `S20hwclock` says the RTC stores local time, but the command uses `--utc`; these indicate different time conventions. If a clock offset matches the timezone offset, investigate this first. **Verify on a device.**

Watchdog note: `-T 30` means **any blocking operation that prevents the watchdog process from refreshing it for more than 30 seconds can cause a hard reset**. If you need a long breakpoint while debugging, stop `S15watchdog` first.

## Push Files to the Device Without Reflashing

This is one of the most common operations in day-to-day development. Three options:

```bash
# 1. scp (simplest)
scp output/out/app_out/bin/hello_world root@<device-IP>:/userdata/

# 2. Batch transfer with sftp
sftp root@<device-IP> <<< $'put output/out/app_out/bin/hello_world /userdata/'

# 3. adb (only if adbd is enabled in the firmware) — verify on a device
adb push output/out/app_out/bin/hello_world /userdata/
```

Copy files to `/userdata` rather than `/oem`: `/oem` usually comes from a read-only image, while `/userdata` is writable.

```bash
# ssh root@<device-IP>
# chmod +x /userdata/hello_world && /userdata/hello_world
```

If the program cannot find a shared library, first check that `LD_LIBRARY_PATH` includes `/oem/usr/lib`, or run `ldd /userdata/hello_world` to identify the missing library. See [Choose a Development Path](/recamera_pro_dev_path/).

## Diagnose Network Configuration

```bash
# ip addr                          # Check whether eth0 / wlan0 received an address
# cat /etc/resolv.conf             # Generated by udhcpc; eth0 takes priority when merging
# cat /tmp/resolv.conf.eth0        # Per-interface file
# cat /userdata/config/system/eth0_dns_mode   # Check for manual DNS mode
# netstat -tlnp                    # Check whether ports such as 22/7681/21/8555 are listening
```

Wi-Fi is enabled by `RK_ENABLE_WIFI=y` + `RK_ENABLE_WIFI_CHIP=AP6XXX`; the application is under `project/app/wifi_app`.

## Five-Minute Checklist for a New Board

1. Connect the serial console at 1500000 and confirm that boot logs and the reCamera banner appear.
2. Run `ip addr` to get the IP address, then confirm that `ssh root@<IP>` works.
3. Check `cat /proc/version` for kernel 6.1.157 and `uname -m` for `aarch64`.
4. Run `ls /oem/usr/lib | head` and confirm that application libraries such as `librknnrt.so` are present.
5. Run `netstat -tlnp` and confirm that go2rtc (8555), ttyd (7681), and sshd (22) are listening.
6. Run `tail -f /var/log/Recamera2_developer.log` to inspect application logs.
7. Check `cat /run/board_id.env` to confirm that the baseboard and expansion-board IDs were detected correctly.
