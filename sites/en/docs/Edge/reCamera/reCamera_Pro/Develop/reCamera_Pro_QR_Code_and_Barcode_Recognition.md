---
description: Use reCamera Pro to recognize QR codes and barcodes, and view live video directly or through a Windows/Linux proxy.
title: reCamera Pro QR Code and Barcode Recognition
keywords:
  - Edge AI
  - reCamera Pro
  - QR Code
  - Barcode Recognition
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_qr_code_barcode
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/16/2026
  author: yylin
createdAt: 2026-10-16
updatedAt: 2026-10-16
url: https://wiki.seeedstudio.com/recamera_pro_qr_code_barcode/
---

# reCamera Pro QR Code and Barcode Recognition

This guide explains how to get the source, build and install the QR code and barcode recognition application on reCamera Pro, and choose how to view live video: directly from the device or through a Windows/Linux proxy. It follows the task-oriented structure used in the Seeed reCamera Pro Wiki. References: [reCamera Pro Quick Start Guide](https://wiki.seeedstudio.com/recamera_pro_getting_started/) and [SDK and Minimal Application](https://wiki.seeedstudio.com/recamera_pro_sdk_setup/).

## Before You Begin

- Connect reCamera Pro to a network where your computer can reach it. Follow the [Wi-Fi access guide](https://wiki.seeedstudio.com/recamera_pro_wifi_access/) if needed, and note the device IP address.
- Use a Linux computer or WSL on a 64-bit Linux host for cross-compilation. The SDK setup downloads several gigabytes of target build files, so an Internet connection and enough free disk space are required.
- Direct video access requires a browser that can connect to the device over the network.
- For a Windows or Linux proxy, install Nginx and FFmpeg on the proxy computer. The Linux proxy also requires an FFmpeg build with the `libx264` encoder. The Windows go2rtc executable is included in this repository.
- Complete the device's first-time setup in the Web UI. Enable SSH under **Device Info → Connection Settings** before using the deployment commands below. Seeed's [Quick Start Guide](https://wiki.seeedstudio.com/recamera_pro_getting_started/) covers initial login and network setup.

## Deploy the Application to reCamera Pro

Install and run the recognition application on reCamera Pro before opening its web page. This project targets RV1126B/aarch64; an ordinary x86 program built for a Windows or Linux computer cannot run on the device.

### 1. Get the Source and Install the Cross-Compilation SDK

The application source is hosted at [yyling0101-a11y/recamera_pro_qr_code](https://github.com/yyling0101-a11y/recamera_pro_qr_code). Install the host tools, then clone the application source and Seeed's separate [reCamera Pro cross-compilation SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain), which provides the RV1126B compiler and target sysroot.

```bash
sudo apt update
sudo apt install -y git cmake ninja-build pkg-config
mkdir -p ~/recamera_pro_workspace
cd ~/recamera_pro_workspace
git clone https://github.com/yyling0101-a11y/recamera_pro_qr_code.git
git clone https://github.com/Seeed-Projects/recamera_pro_toolchain.git
cd recamera_pro_toolchain
./scripts/setup.sh
source scripts/env.sh
bash scripts/check-sdk.sh
```

`setup.sh` downloads the SDK toolchain and sysroot from Seeed's release. Keep the SDK in the Linux filesystem when using WSL; do not extract it under `/mnt/c`.

### 2. Build the Application

The application links target GStreamer, OpenCV, ZBar, and Mosquitto libraries. Use the SDK sysroot; host x86 libraries cannot be used for the device binary.

```bash
cd ~/recamera_pro_workspace/recamera_pro_qr_code
export RECAMERA_SDK_ROOT="$(cd ../recamera_pro_toolchain && pwd)"
source "$RECAMERA_SDK_ROOT/scripts/env.sh"
cmake -S cpp -B cpp/build -G Ninja \
  -DCMAKE_TOOLCHAIN_FILE="$RECAMERA_SDK_ROOT/cmake/recamera-pro-toolchain.cmake" \
  -DCMAKE_BUILD_TYPE=Release
cmake --build cpp/build -j4
file cpp/build/qr_pro
```

The last command should report `ARM aarch64`. If CMake or the linker reports that GStreamer, OpenCV, ZBar, or Mosquitto headers/libraries are missing, check that the SDK setup completed and that these target libraries are present in its sysroot. Do not install x86 host versions to resolve a cross-compilation error.

### 3. Prepare the Device and Copy the Application

Connect the device to the host with a USB data cable and power it on, or put it on the same LAN as the host. The default USB address is `192.168.42.1`; use the address shown by your network if it differs. Log in over SSH as `root` using the device password configured during first-time setup. On the first SSH connection, verify the host fingerprint. Create the application directory and copy the executable, web page, device-side go2rtc configuration, and startup scripts:

```bash
ssh root@192.168.42.1 'mkdir -p /userdata/qr_rec'
scp cpp/build/qr_pro web/index.html web/go2rtc-recamerapro.yaml \
  scripts/S97qr_go2rtc scripts/S98qr_pro root@192.168.42.1:/userdata/qr_rec/
```

### 4. Install and Start the Services

Log in to the device and run:

```bash
ssh root@192.168.42.1
cd /userdata/qr_rec
cp go2rtc-recamerapro.yaml go2rtc.yaml
mkdir -p www
mv index.html www/index.html
chmod 755 qr_pro S97qr_go2rtc S98qr_pro
cp S97qr_go2rtc S98qr_pro /etc/init.d/
/etc/init.d/S97qr_go2rtc start
/etc/init.d/S98qr_pro start
```

`S97qr_go2rtc` uses the go2rtc executable already installed on the device to read the H.264 main stream produced by `rkipc`. `S98qr_pro` starts the QR code application. The startup scripts in `/etc/init.d/` are launched automatically when the device boots. If MQTT credentials are configured in `/userdata/qr_mqtt.env`, the application startup script loads them. Video and WebSocket results remain available if MQTT has not been configured.

### 5. Verify the Device Services

Open `http://192.168.42.1:8766/` in a browser. Confirm that the page loads, the status changes to “Results connected,” and live video appears. You can also check the processes and logs on the device:

```bash
ldd /userdata/qr_rec/qr_pro
ps | grep -E 'qr_pro|go2rtc'
tail -n 50 /userdata/qr_rec/qr_pro.log
tail -n 50 /userdata/qr_rec/qr_go2rtc.log
```

Check that `ldd` does not report `not found`. The device image must provide the GStreamer, OpenCV, ZBar, and Mosquitto runtime libraries used by the binary.

Direct video access requires TCP port 1986 and TCP/UDP port 8557 to be reachable from the browser's network. If the page does not load, check `/userdata/qr_rec/qr_pro.log` first. If the page and scan results work but the video is black, check the go2rtc log and these ports.

### 6. Update an Existing Installation

After rebuilding, repeat the copy step, then restart the services on the device:

```bash
/etc/init.d/S97qr_go2rtc restart
/etc/init.d/S98qr_pro restart
```

The application is ready to use in direct mode after deployment. Windows/Linux Nginx proxying is an optional way to forward video; see the sections below for setup instructions. After finishing the device commands, type `exit` to return to the Linux/WSL host. The host proxy instructions below assume that the current directory is the cloned application repository.

> The examples below use `192.168.42.1` for reCamera Pro and `192.168.3.151` for the proxy computer. Replace these addresses with the addresses on your own network.

## Choose a Video Connection Method

| Method | URL | Use when |
| --- | --- | --- |
| Direct from the device (default) | `http://DEVICE_IP:8766/` | The computer can reach TCP 1986 and UDP 8557 on reCamera Pro |
| Windows proxy | `http://WINDOWS_HOST_IP:18888/?video=proxy` | You want Windows Nginx and go2rtc to forward the video |
| Linux proxy | `http://LINUX_HOST_IP:18888/?video=proxy` | You want Linux Nginx and go2rtc to forward the video |

Scan results appear on the right side of the page. Nginx forwards the WebSocket results to the device. In proxy mode, FFmpeg on the proxy computer reads the device's MJPEG stream and converts it to WebRTC video for the browser.

## Option 1: Connect Directly to the Device

1. Confirm that the application and device-side go2rtc service are running.
2. Open `http://DEVICE_IP:8766/` in a browser.
3. Wait for the status at the top right to show “Results connected,” and confirm that live video appears.

Direct access uses TCP 8766 for the web page and scan-result WebSocket, TCP 1986 for go2rtc signaling, and TCP/UDP 8557 for WebRTC media. If the page and results work but the video is black, check connectivity to ports 1986 and 8557 between the browser and the device.

## Option 2: Use a Windows Computer as the Proxy

1. Install Windows Nginx and FFmpeg. Add the FFmpeg `bin` directory to `PATH`. The go2rtc executable is included at `web/bin/windows/go2rtc.exe`.
2. In `web/go2rtc-windows.yaml`, set `webrtc.candidates` to the Windows computer's LAN IP address and confirm that the stream URL uses the device IP.
3. In `web/nginx.conf`, replace `D:/path/to/recamera_pro_qr_code/web` with the absolute path to this repository's `web` directory. Confirm that the `/ws` proxy target uses the device IP.
4. From the repository root, start go2rtc in PowerShell and keep the terminal open:

   ```powershell
   .\web\bin\windows\go2rtc.exe -config .\web\go2rtc-windows.yaml
   ```

5. Start Nginx with the path to its extracted directory and the repository configuration. For example, if Nginx is installed in `C:\nginx` and the repository is in `D:\recamera_pro_qr_code`:

   ```powershell
   cd C:\nginx
   .\nginx.exe -p C:/nginx/ -c D:/recamera_pro_qr_code/web/nginx.conf
   ```

   Inbound TCP 18888, TCP 8557, and UDP 8557 must be allowed by Windows Firewall. The Nginx configuration uses its `mime.types` and `logs` directories relative to the `-p` prefix.

6. Open `http://WINDOWS_HOST_IP:18888/?video=proxy` in a browser.

The go2rtc API listens only on `127.0.0.1:1986`; Nginx forwards signaling requests to it. Do not expose the API port directly to the LAN.

## Option 3: Use a Linux Computer as the Proxy

The following steps use Debian/Ubuntu as an example. On other distributions, install Nginx and FFmpeg with the appropriate package manager.

1. From the cloned project root, install Nginx and an FFmpeg build that includes `libx264`:

   ```bash
   sudo apt update
   sudo apt install nginx ffmpeg
   ffmpeg -hide_banner -encoders | grep libx264
   ```

   The `grep` command should list `libx264`. If it does not, install a full FFmpeg package from your distribution or build FFmpeg with x264 enabled.

2. Download the go2rtc executable for Linux and put it in your PATH, for example at `/usr/local/bin/go2rtc`. Choose a release that matches the Linux host's CPU architecture from [go2rtc Releases](https://github.com/AlexxIT/go2rtc/releases).
3. Install the web page:

   ```bash
   sudo install -d /var/www/qr-pro
   sudo install -m 644 web/index.html /var/www/qr-pro/index.html
   ```

4. Edit `web/go2rtc-linux.yaml`: set `webrtc.candidates` to the Linux proxy computer's LAN IP and replace the device IP in `streams.qr` with the reCamera Pro address. This configuration reads the device's MJPEG stream and encodes it with `libx264` on the proxy computer's CPU.
5. Start go2rtc in a terminal:

   ```bash
   go2rtc -config web/go2rtc-linux.yaml
   ```

   Keep the terminal open and confirm there are no configuration or FFmpeg errors. For long-term use, configure the same command as a systemd service.

6. Install `web/nginx-site.conf` as an Nginx site. Confirm that `root` points to `/var/www/qr-pro` and that the `/ws` proxy target uses the device IP, then enable the site and reload Nginx. For example:

   ```bash
   sudo cp web/nginx-site.conf /etc/nginx/sites-available/qr-pro
   sudo ln -s /etc/nginx/sites-available/qr-pro /etc/nginx/sites-enabled/qr-pro
   sudo nginx -t
   sudo systemctl reload nginx
   ```

   If a site link with the same name already exists, inspect and reuse the existing configuration.

7. Allow inbound TCP port 18888, TCP port 8557, and UDP port 8557 on the proxy computer. Open `http://LINUX_HOST_IP:18888/?video=proxy` in a browser.

Windows and Linux proxy modes use the same web page and Nginx reverse-proxy flow. Their go2rtc configurations differ in the FFmpeg executable path and the Nginx web root. Proxy encoding uses CPU resources on the host; use direct mode if the host does not have enough CPU capacity.

## Use the Scan Results

- Scan results appear on the right side of the page. When the browser reconnects, it can receive results from the current deduplication window.
- The device publishes results to the MQTT topic `recamera/qr/result` using QoS 1. MQTT requires credentials on the device and a connection to an MQTT broker.
- A barcode that remains in view is reported once. It can be reported again after it has been out of view for more than 60 seconds.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| The page does not open | Check Nginx, inbound TCP port 18888, and the proxy computer's IP address |
| The page opens, but scan results do not connect | Check the device IP in Nginx's `/ws` target and confirm that the application listens on TCP 8766 |
| The video is black in proxy mode | Confirm that go2rtc is running, FFmpeg can read `http://DEVICE_IP:8766/video.mjpg`, and the candidate IP is the proxy computer's address |
| The video is black in direct mode | Check the device-side go2rtc service and connectivity to TCP 1986 and TCP/UDP 8557 |
| `qr_pro` exits immediately | Run `ldd /userdata/qr_rec/qr_pro` and check for `not found`; rebuild against the reCamera Pro SDK sysroot and ensure its runtime libraries match the installed firmware |
| Nginx cannot find the page | Check the Windows/Linux `root` path and confirm that `index.html` exists there |
| Linux FFmpeg reports that the encoder is unavailable | Run `ffmpeg -hide_banner -encoders` and check whether `libx264` is listed |

## Learn More

- [reCamera Pro Quick Start Guide](https://wiki.seeedstudio.com/recamera_pro_getting_started/)
- [reCamera Pro SDK and Minimal Application](https://wiki.seeedstudio.com/recamera_pro_sdk_setup/)
- [go2rtc WebRTC documentation](https://github.com/AlexxIT/go2rtc/blob/master/internal/webrtc/README.md)

## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
