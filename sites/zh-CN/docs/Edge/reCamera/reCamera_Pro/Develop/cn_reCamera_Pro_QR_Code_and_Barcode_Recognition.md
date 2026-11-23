---
description: 使用 reCamera Pro 识别二维码和条形码，并直接查看实时视频或通过 Windows/Linux 代理查看。
title: reCamera Pro 二维码和条形码识别
keywords:
  - 边缘 AI
  - reCamera Pro
  - 二维码
  - 条形码识别
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_qr_code_barcode
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/16/2026
  author: yylin
createdAt: 2026-10-16
updatedAt: 2026-10-16
url: https://wiki.seeedstudio.com/cn/recamera_pro_qr_code_barcode/
---

# reCamera Pro 二维码和条形码识别

本指南说明如何获取源码、构建并在 reCamera Pro 上安装二维码和条形码识别应用，以及如何选择查看实时视频的方式：直接从设备访问，或通过 Windows/Linux 代理访问。本文遵循 Seeed reCamera Pro Wiki 中使用的任务导向结构。参考文档：[reCamera Pro 快速入门指南](https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/) 和 [SDK 与最小应用](https://wiki.seeedstudio.com/cn/recamera_pro_sdk_setup/)。

## 开始之前

- 将 reCamera Pro 连接到你的电脑可以访问的网络。如有需要，请参考 [Wi-Fi 访问指南](https://wiki.seeedstudio.com/cn/recamera_pro_wifi_access/)，并记录设备的 IP 地址。
- 使用 Linux 电脑或在 64 位 Linux 主机上使用 WSL 进行交叉编译。SDK 设置会下载数 GB 的目标构建文件，因此需要互联网连接和足够的可用磁盘空间。
- 直接视频访问需要浏览器能够通过网络连接到设备。
- 对于 Windows 或 Linux 代理，请在代理电脑上安装 Nginx 和 FFmpeg。Linux 代理还需要包含 `libx264` 编码器的 FFmpeg 构建。Windows 的 go2rtc 可执行文件已包含在此仓库中。
- 在 Web UI 中完成设备的首次设置。在使用下面的部署命令之前，在 **Device Info → Connection Settings** 中启用 SSH。Seeed 的 [快速入门指南](https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/) 涵盖了初次登录和网络设置。

## 将应用部署到 reCamera Pro

在打开网页之前，先在 reCamera Pro 上安装并运行识别应用。该项目面向 RV1126B/aarch64；为 Windows 或 Linux 电脑构建的普通 x86 程序无法在设备上运行。

### 1. 获取源码并安装交叉编译 SDK

应用源码托管在 [yyling0101-a11y/recamera_pro_qr_code](https://github.com/yyling0101-a11y/recamera_pro_qr_code)。先安装主机工具，然后克隆应用源码以及 Seeed 单独提供的 [reCamera Pro 交叉编译 SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain)，该 SDK 提供 RV1126B 编译器和目标 sysroot。

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

`setup.sh` 会从 Seeed 的发布版本中下载 SDK 工具链和 sysroot。在使用 WSL 时，请将 SDK 保存在 Linux 文件系统中；不要将其解压到 `/mnt/c` 下。

### 2. 构建应用

该应用会链接目标端的 GStreamer、OpenCV、ZBar 和 Mosquitto 库。请使用 SDK 的 sysroot；主机上的 x86 库不能用于设备二进制文件。

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

最后一条命令应报告 `ARM aarch64`。如果 CMake 或链接器报告缺少 GStreamer、OpenCV、ZBar 或 Mosquitto 的头文件/库，请检查 SDK 设置是否完成，以及这些目标库是否存在于其 sysroot 中。不要通过安装 x86 主机版本来解决交叉编译错误。

### 3. 准备设备并复制应用

使用 USB 数据线将设备连接到主机并上电，或将其与主机置于同一局域网中。默认 USB 地址为 `192.168.42.1`；如果不同，请使用你的网络显示的地址。通过 SSH 使用首次设置时配置的设备密码，以 `root` 身份登录。首次 SSH 连接时，请验证主机指纹。创建应用目录并复制可执行文件、网页、设备端 go2rtc 配置和启动脚本：

```bash
ssh root@192.168.42.1 'mkdir -p /userdata/qr_rec'
scp cpp/build/qr_pro web/index.html web/go2rtc-recamerapro.yaml \
  scripts/S97qr_go2rtc scripts/S98qr_pro root@192.168.42.1:/userdata/qr_rec/
```

### 4. 安装并启动服务

登录到设备并运行：

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

`S97qr_go2rtc` 使用设备上已安装的 go2rtc 可执行文件读取由 `rkipc` 生成的 H.264 主码流。`S98qr_pro` 启动二维码应用。`/etc/init.d/` 中的启动脚本会在设备启动时自动运行。如果在 `/userdata/qr_mqtt.env` 中配置了 MQTT 凭据，应用启动脚本会加载它们。即使尚未配置 MQTT，视频和 WebSocket 结果仍然可用。

### 5. 验证设备服务

在浏览器中打开 `http://192.168.42.1:8766/`。确认页面能够加载，状态变为“Results connected”，并且出现实时视频。你也可以在设备上检查进程和日志：

```bash
ldd /userdata/qr_rec/qr_pro
ps | grep -E 'qr_pro|go2rtc'
tail -n 50 /userdata/qr_rec/qr_pro.log
tail -n 50 /userdata/qr_rec/qr_go2rtc.log
```

检查 `ldd` 不要报告 `not found`。设备镜像必须提供该二进制文件所使用的 GStreamer、OpenCV、ZBar 和 Mosquitto 运行时库。

直接视频访问要求浏览器所在网络能够访问 TCP 1986 和 TCP/UDP 8557 端口。如果页面无法加载，请先检查 `/userdata/qr_rec/qr_pro.log`。如果页面和扫描结果正常但视频为黑屏，请检查 go2rtc 日志以及这些端口。

### 6. 更新现有安装

重新构建后，重复复制步骤，然后在设备上重启服务：

```bash
/etc/init.d/S97qr_go2rtc restart
/etc/init.d/S98qr_pro restart
```

部署完成后，应用即可在直连模式下使用。Windows/Linux Nginx 代理是一种可选的视频转发方式；请参阅下文中的章节获取设置说明。完成设备端命令后，输入 `exit` 返回到 Linux/WSL 主机。下面的主机代理说明假定当前目录为已克隆的应用仓库。

> 下列示例使用 `192.168.42.1` 作为 reCamera Pro 的地址，`192.168.3.151` 作为代理电脑的地址。请将这些地址替换为你自己网络中的地址。

## 选择视频连接方式

| 方式 | URL | 适用场景 |
| --- | --- | --- |
| 直接从设备访问（默认） | `http://DEVICE_IP:8766/` | 电脑可以访问 reCamera Pro 上的 TCP 1986 和 UDP 8557 端口 |
| Windows 代理 | `http://WINDOWS_HOST_IP:18888/?video=proxy` | 你希望通过 Windows Nginx 和 go2rtc 转发视频 |
| Linux 代理 | `http://LINUX_HOST_IP:18888/?video=proxy` | 你希望通过 Linux Nginx 和 go2rtc 转发视频 |

扫描结果显示在页面右侧。Nginx 会将 WebSocket 结果转发到设备。在代理模式下，代理电脑上的 FFmpeg 读取设备的 MJPEG 码流，并将其转换为浏览器可用的 WebRTC 视频。

## 选项 1：直接连接到设备

1. 确认应用和设备端 go2rtc 服务正在运行。
2. 在浏览器中打开 `http://DEVICE_IP:8766/`。
3. 等待右上角状态显示为“Results connected”，并确认实时视频出现。

直接访问使用 TCP 8766 提供网页和扫描结果 WebSocket，使用 TCP 1986 进行 go2rtc 信令，使用 TCP/UDP 8557 传输 WebRTC 媒体。如果页面和结果正常但视频为黑屏，请检查浏览器与设备之间对 1986 和 8557 端口的连通性。

## 选项 2：使用 Windows 电脑作为代理

1. 安装 Windows Nginx 和 FFmpeg。将 FFmpeg 的 `bin` 目录添加到 `PATH`。go2rtc 可执行文件位于 `web/bin/windows/go2rtc.exe`。
2. 在 `web/go2rtc-windows.yaml` 中，将 `webrtc.candidates` 设置为 Windows 电脑的局域网 IP 地址，并确认流 URL 使用设备 IP。
3. 在 `web/nginx.conf` 中，将 `D:/path/to/recamera_pro_qr_code/web` 替换为此仓库 `web` 目录的绝对路径。确认 `/ws` 代理目标使用设备 IP。
4. 在仓库根目录下，在 PowerShell 中启动 go2rtc，并保持终端打开：

   ```powershell
   .\web\bin\windows\go2rtc.exe -config .\web\go2rtc-windows.yaml
   ```

5. 使用其解压目录路径和仓库配置启动 Nginx。例如，如果 Nginx 安装在 `C:\nginx`，仓库位于 `D:\recamera_pro_qr_code`：

   ```powershell
   cd C:\nginx
   .\nginx.exe -p C:/nginx/ -c D:/recamera_pro_qr_code/web/nginx.conf
   ```

   Windows 防火墙必须允许入站 TCP 18888、TCP 8557 和 UDP 8557。Nginx 配置会相对于 `-p` 前缀使用其 `mime.types` 和 `logs` 目录。

6. 在浏览器中打开 `http://WINDOWS_HOST_IP:18888/?video=proxy`。

go2rtc API 仅监听在 `127.0.0.1:1986`；Nginx 会将信令请求转发给它。不要将该 API 端口直接暴露到局域网。

## 选项 3：使用 Linux 电脑作为代理

以下步骤以 Debian/Ubuntu 为例。在其他发行版上，请使用相应的软件包管理器安装 Nginx 和 FFmpeg。

1. 在已克隆项目的根目录下，安装 Nginx 和包含 `libx264` 的 FFmpeg 构建：

   ```bash
   sudo apt update
   sudo apt install nginx ffmpeg
   ffmpeg -hide_banner -encoders | grep libx264
   ```

   `grep` 命令应列出 `libx264`。如果没有，请从你的发行版安装完整的 FFmpeg 软件包，或在启用 x264 的情况下自行构建 FFmpeg。

2. 下载适用于 Linux 的 go2rtc 可执行文件并将其放入 PATH 中，例如 `/usr/local/bin/go2rtc`。从 [go2rtc Releases](https://github.com/AlexxIT/go2rtc/releases) 中选择与 Linux 主机 CPU 架构匹配的发行版。
3. 安装网页：

   ```bash
   sudo install -d /var/www/qr-pro
   sudo install -m 644 web/index.html /var/www/qr-pro/index.html
   ```

4. 编辑 `web/go2rtc-linux.yaml`：将 `webrtc.candidates` 设置为 Linux 代理计算机的局域网 IP，并将 `streams.qr` 中的设备 IP 替换为 reCamera Pro 地址。此配置会读取设备的 MJPEG 流，并在代理计算机的 CPU 上使用 `libx264` 对其进行编码。
5. 在终端中启动 go2rtc：

   ```bash
   go2rtc -config web/go2rtc-linux.yaml
   ```

   保持终端打开并确认没有配置或 FFmpeg 错误。若需长期使用，请将相同命令配置为 systemd 服务。

6. 将 `web/nginx-site.conf` 安装为一个 Nginx 站点。确认 `root` 指向 `/var/www/qr-pro`，并且 `/ws` 代理目标使用设备 IP，然后启用该站点并重新加载 Nginx。例如：

   ```bash
   sudo cp web/nginx-site.conf /etc/nginx/sites-available/qr-pro
   sudo ln -s /etc/nginx/sites-available/qr-pro /etc/nginx/sites-enabled/qr-pro
   sudo nginx -t
   sudo systemctl reload nginx
   ```

   如果已经存在同名站点链接，请检查并复用现有配置。

7. 在代理计算机上允许入站 TCP 端口 18888、TCP 端口 8557 和 UDP 端口 8557。在浏览器中打开 `http://LINUX_HOST_IP:18888/?video=proxy`。

Windows 和 Linux 代理模式使用相同的网页和 Nginx 反向代理流程。它们的 go2rtc 配置在 FFmpeg 可执行文件路径和 Nginx Web 根目录上有所不同。代理编码会使用主机的 CPU 资源；如果主机 CPU 性能不足，请使用直连模式。

## 使用扫描结果

- 扫描结果显示在页面右侧。当浏览器重新连接时，它可以接收当前去重窗口中的结果。
- 设备使用 QoS 1 将结果发布到 MQTT 主题 `recamera/qr/result`。MQTT 要求在设备上配置凭据并连接到 MQTT 代理。
- 保持在视野中的条码只会被报告一次。当其离开视野超过 60 秒后，可以再次被报告。

## 故障排除

| 现象 | 检查内容 |
| --- | --- |
| 页面无法打开 | 检查 Nginx、入站 TCP 端口 18888，以及代理计算机的 IP 地址 |
| 页面可以打开，但扫描结果无法连接 | 检查 Nginx 中 `/ws` 目标的设备 IP，并确认应用程序在 TCP 8766 上监听 |
| 代理模式下视频为黑屏 | 确认 go2rtc 正在运行，FFmpeg 能读取 `http://DEVICE_IP:8766/video.mjpg`，并且候选 IP 为代理计算机的地址 |
| 直连模式下视频为黑屏 | 检查设备端 go2rtc 服务以及到 TCP 1986 和 TCP/UDP 8557 的连通性 |
| `qr_pro` 立即退出 | 运行 `ldd /userdata/qr_rec/qr_pro` 并检查是否有 `not found`；基于 reCamera Pro SDK sysroot 重新构建，并确保其运行时库与已安装固件匹配 |
| Nginx 找不到页面 | 检查 Windows/Linux 的 `root` 路径，并确认其中存在 `index.html` |
| Linux FFmpeg 报告编码器不可用 | 运行 `ffmpeg -hide_banner -encoders` 并检查是否列出了 `libx264` |

## 了解更多

- [reCamera Pro 快速入门指南](https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/)
- [reCamera Pro SDK 和最小应用](https://wiki.seeedstudio.com/cn/recamera_pro_sdk_setup/)
- [go2rtc WebRTC 文档](https://github.com/AlexxIT/go2rtc/blob/master/internal/webrtc/README.md)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
