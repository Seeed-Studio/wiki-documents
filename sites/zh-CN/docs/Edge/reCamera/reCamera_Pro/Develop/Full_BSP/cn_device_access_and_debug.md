---
description: 使用串口控制台、SSH、日志和网络工具维护设备并调试自定义固件。
title: 设备访问与调试
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
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_device_debug/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 设备访问与调试

本页汇总了固件中**实际包含**的调试通道。信息来自 `project/cfg/BoardConfig_Recamera2/overlay/` 下的板级 overlay 配置。可以通过 `RK_POST_OVERLAY` 选项添加或移除通道；参见 [系统定制（DTS / Kernel / Buildroot / Overlay）](/cn/recamera_pro_bsp_system_customization/)。

## 通道概览

| 通道 | 端口 | 启用方式 | 目的 |
| --- | --- | --- | --- |
| 串口控制台 | `ttyFIQ0`，**1500000** 8N1 | U-Boot `CONFIG_BAUDRATE` | 启动日志、U-Boot 交互、恢复 |
| SSH | 22 | `overlay-buildroot-sshd` (`S50sshd`) | 主要开发通道 |
| Web 终端 ttyd | **7681** | `overlay-buildroot-ttyd` (`S50ttyd`) | 在浏览器中打开 shell |
| WebSocket 日志 | **8765**（仅回环） | `overlay-buildroot-log` (`S10log`) | 在 Web UI 中查看实时日志 |
| go2rtc API | **1984**（仅 127.0.0.1） | `overlay-buildroot-go2rtc` (`S50go2rtc`) | 流管理 API |
| go2rtc WebRTC | **8555** | 同上 | 接收 WebRTC 流 |
| go2rtc RTSP | **554**（按需启用） | 同上 | 外部 RTSP |
| 内部 rkipc RTSP | **5554**（127.0.0.1） | `recamera_ipc` | go2rtc 的上游源 |
| vsftpd | 21 | `overlay-buildroot-vsftpd` (`S70vsftpd`) | 文件传输 |

## 串口控制台

U-Boot 设置 `CONFIG_BAUDRATE=1500000`（`sysdrv/source/uboot/u-boot/configs/rv1126b_recamera2_defconfig:162`）。内核命令行使用 `console=ttyFIQ0` 和 `earlycon=uart8250,mmio32,0x20810000`。

```bash
# On the host (USB-to-serial adapter)
picocom -b 1500000 /dev/ttyUSB0
# Or
minicom -D /dev/ttyUSB0 -b 1500000
```

波特率为 **1500000**，而不是常见的 115200。波特率不匹配会产生乱码输出。

当系统无法启动时，串口控制台是唯一可用的通道。使用它来调试启动问题，例如内核崩溃、rootfs 挂载失败和 DDR 初始化。

## SSH

`overlay-buildroot-sshd/etc/ssh/sshd_config` 中的关键设置：

```text
PermitRootLogin yes
PasswordAuthentication yes
AuthorizedKeysFile  .ssh/authorized_keys
UsePAM yes
UseDNS no
Subsystem sftp /usr/libexec/sftp-server
```

默认情况下，**root 密码登录是启用的**，同时也支持公钥认证。SFTP 可用于文件传输。

```bash
ssh root@<device-IP>
scp my_app root@<device-IP>:/userdata/
sftp root@<device-IP>
```

### 登录失败锁定（PAM）

`overlay-buildroot-sshd/usr/libexec/ssh-login-lock.py` 使用 PAM 防护暴力破解尝试：

- 在**连续失败 5 次**后（`MAX_ATTEMPTS = 5`），账号会被锁定 **300 秒**（`LOCKOUT_SECONDS = 300`）。
- 尝试次数按客户端 IP（`PAM_RHOST`）计数，使用 `/proc/uptime` 作为时间基准，因此**重启会清除计数器**。
- 状态文件：`/userdata/config/system/login_lock.json`；关联的锁文件为 `login_lock.json.lock`。

如果被锁定，可以等待 300 秒、重启，或通过串口控制台登录并删除 `/userdata/config/system/login_lock.json`。

## Web 终端（`ttyd`）

`overlay-buildroot-ttyd/oem/usr/etc/init.d/S50ttyd` 启动：

```text
ttyd -p 7681 /oem/usr/bin/ssh-login-whitelist.sh
```

在浏览器中打开 `http://<device-IP>:7681`；它会提示输入用户名。包装脚本 `ssh-login-whitelist.sh` 只允许其允许列表中的用户，然后运行 `exec ssh <user>@localhost`：

```bash
ALLOWED_USERS=("root" "admin")
```

换句话说，**ttyd 实际上是浏览器中的 SSH 客户端**。认证仍然使用 SSH（包括上面的 PAM 锁定策略）；不在允许列表中的用户会被拒绝。要添加用户，请编辑 `ALLOWED_USERS` 数组并重新构建 rootfs，或直接在设备上编辑脚本（如果 `/oem` 为只读，可能需要重新挂载）。

## 日志系统

固件有三层日志系统。理解它们的角色可以节省调试时间。

### 1. syslog-ng（`overlay-buildroot-syslog-ng/etc/syslog-ng.conf`，@version 3.38）

| 输出 | 路径 / 目的地 | 格式 |
| --- | --- | --- |
| `d_Recamera2` | `/var/log/Recamera2.log` | JSON：`{"sTimestamp","sLevel","sData"}` |
| `d_Recamera2_developer` | `/var/log/Recamera2_developer.log` | 文本：`ISODATE HOST PROGRAM[PID]: [LEVEL] MESSAGE` |
| `d_python_udp` | UDP `127.0.0.1:5140` | 转发到 WebSocket 日志服务 |

日志文件的属主为 `root:adm`，权限为 `0640`。调试时，先从 `Recamera2_developer.log`（可读性好）开始；`Recamera2.log`（JSON）用于程序化解析。

```bash
# tail -f /var/log/Recamera2_developer.log
# tail -n 200 /var/log/Recamera2.log
```

### 2. WebSocket 日志服务（`overlay-buildroot-log/oem/usr/bin/websocket_log.py`）

`S10log` 使用 python3 启动该服务：

- 监听 UDP `127.0.0.1:5140`，接收由 syslog-ng 转发的消息。
- 在端口 **8765** 提供 WebSocket 服务，绑定到 `127.0.0.1`（`SERVER_IP = "127.0.0.1"`）。
- 在内存中保留最近 **2000** 条消息（`MAX_LOG_SIZE = 2000`）。

由于它绑定在回环接口上，要从主机访问，需要通过 SSH 转发端口：

```bash
ssh -L 8765:127.0.0.1:8765 root@<device-IP>
# Then connect a browser or script to ws://localhost:8765
```

Web UI 的实时日志面板使用的就是这一路径。

### 3. 串口控制台 / `dmesg`

内核消息会发送到 `console=ttyFIQ0`。在设备上使用 `dmesg` 查看内核环形缓冲区。

## 视频流（go2rtc）

`overlay-buildroot-go2rtc/oem/usr/etc/go2rtc/go2rtc.yaml` 中的默认配置：

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

架构为：**`recamera_ipc`（rkipc）在 127.0.0.1:5554 提供内部 RTSP 源 → go2rtc 拉取该流并通过 WebRTC/HLS 等协议对外暴露**。`main` 是主码流，`sub` 是子码流。

### 外部 RTSP 端口是动态配置的

当 `S50go2rtc` 启动时，它会读取 `/userdata/config/rkipc.ini` 并决定是否在 `:554` 上暴露 RTSP，优先级顺序如下：

1. 检查 `[video.0.rtsp]` 下的 `enable=1`。
2. 否则，检查 `[video.0.onvif]` 下的 `enable=1`。
3. 否则，检查 `[video.1.rtsp]` 下的 `enable=1`。
4. 如果都未启用，则不打开 RTSP 端口；仅使用默认配置。

当启用 RTSP 时，它会将默认 YAML **复制**到 `/tmp/go2rtc/go2rtc.yaml` 并添加 `rtsp: listen: ":554"`。如果 `authtype=1`，还会从 INI 文件中加入 `username` 和 `password`。这样可以避免修改只读 `/oem` 目录下的默认配置。

有用的调试命令：

```bash
# cat /userdata/config/rkipc.ini | grep -A5 '\[video.0.rtsp\]'
# cat /tmp/go2rtc/go2rtc.yaml          # Active configuration
# cat /var/run/go2rtc.pid
# /oem/usr/etc/init.d/S50go2rtc restart
```

在更改 `rkipc.ini` 中的 RTSP / ONVIF 开关后，重启 go2rtc 以便重新生成配置。

流 URL（启用 RTSP 时）：

```text
rtsp://<user>:<pass>@<device-IP>:554/...
http://<device-IP>:8555/            # WebRTC
```

URL 路径取决于 go2rtc 流名称（`main` / `sub`）。在设备上验证后再补充一个完整示例。

## FTP（`vsftpd`）

`overlay-buildroot-vsftpd/etc/vsftpd.conf` 配置了端口 21、`local_enable=YES`、`write_enable=YES`、`chroot_local_user=YES` 和 `ssl_enable=NO`。用户列表为 `root` 和 `admin`。

配置目录被隐藏且拒绝访问：

```text
hide_file={config,*/config,config_tar,*/config_tar}
deny_file={config,*/config,config_tar,*/config_tar}
```

因此，`/userdata/config` 在 FTP 中不可见。这是有意的产品设计；配置应通过 Web UI 或 API 修改。调试时请使用 SSH/SFTP 而不是 FTP。

## 环境变量与目录约定

`overlay-buildroot-rkenv/etc/profile.d/RkEnv.sh` 为登录 shell 设置了这些变量：

```bash
export OEM_HOME=/oem
export PATH=$PATH:/oem:/oem/bin:/oem/usr/bin:/oem/sbin:/oem/usr/sbin
export LD_LIBRARY_PATH=/oem/usr/lib:/oem/lib:$LD_LIBRARY_PATH
export HOME=/userdata
```

这意味着：

- **`/oem`** 包含 Seeed / Rockchip 的应用和库（包括 `go2rtc`、`ttyd` 包装脚本、`websocket_log.py` 和 `librknnrt.so`）。
- **`/userdata`** 可写并存储配置（`/userdata/config/`）和用户数据。它也是默认的 `HOME`。
- 你交叉编译的程序可以通过 `LD_LIBRARY_PATH` 加载 `/oem/usr/lib` 下的库。如果它由 init 脚本启动，请确保在该处也设置好环境。

## 其他内置服务

| 脚本 | 目的 |
| --- | --- |
| `overlay-buildroot-board-id/etc/init.d/S00board-id` | 在启动早期运行并读取 ADC（`/sys/bus/iio/devices/iio:device0`）以识别底板和扩展板型号；将结果写入 `/run/board_id.env`。它对三个样本取平均，容差为 440。电压等级为 0.0/0.3/0.6/0.9/1.2/1.5/1.8 V，并映射到 `V0.9`–`V1.5` 和 `TYPE0`–`TYPE6`。 |
| `overlay-buildroot-hwclock/etc/init.d/S20hwclock` | 启动时运行 `hwclock --hctosys --utc` 从 RTC 同步时间，并在关机时写回时间。 |
| `overlay-buildroot-watchdog/etc/init.d/S15watchdog` | 使用 `watchdog -T 30 -t 15 /dev/watchdog` 启动硬件看门狗（30 秒超时，15 秒保活间隔）；停止时向 `/dev/watchdog` 写入 `V` 以禁用它。 |
| `overlay-buildroot-udhcpc/usr/share/udhcpc/default.script` | 自定义 DHCP 脚本，为每个接口写入 `/tmp/resolv.conf.<iface>` 并将它们合并到 `/etc/resolv.conf` 中，**eth0 优先**；支持在 `/userdata/config/system/eth0_dns_mode` 中设置手动 DNS 模式标记。 |
| `overlay-buildroot-banner` | `/etc/motd` 中的 reCamera ASCII logo；`/etc/profile.d/banner.sh` 仅在交互式非 SSH 会话中打印它。 |

> `S20hwclock` 中的注释说 RTC 存储的是本地时间，但命令使用了 `--utc`；这表示不同的时间约定。如果时钟偏移与时区偏移相同，请首先调查这一点。**请在设备上验证。**

看门狗注意事项：`-T 30` 意味着**任何阻止看门狗进程在超过 30 秒内刷新它的阻塞操作都可能导致硬复位**。如果你在调试时需要长时间断点，请先停止 `S15watchdog`。

## 在不重新刷机的情况下向设备推送文件

这是日常开发中最常见的操作之一。有三种方式：

```bash
# 1. scp (simplest)
scp output/out/app_out/bin/hello_world root@<device-IP>:/userdata/

# 2. Batch transfer with sftp
sftp root@<device-IP> <<< $'put output/out/app_out/bin/hello_world /userdata/'

# 3. adb (only if adbd is enabled in the firmware) — verify on a device
adb push output/out/app_out/bin/hello_world /userdata/
```

将文件复制到 `/userdata` 而不是 `/oem`：`/oem` 通常来自只读镜像，而 `/userdata` 是可写的。

```bash
# ssh root@<device-IP>
# chmod +x /userdata/hello_world && /userdata/hello_world
```

如果程序找不到共享库，首先检查 `LD_LIBRARY_PATH` 是否包含 `/oem/usr/lib`，或者运行 `ldd /userdata/hello_world` 来定位缺失的库。参见 [Choose a Development Path](/cn/recamera_pro_dev_path/)。

## 诊断网络配置

```bash
# ip addr                          # Check whether eth0 / wlan0 received an address
# cat /etc/resolv.conf             # Generated by udhcpc; eth0 takes priority when merging
# cat /tmp/resolv.conf.eth0        # Per-interface file
# cat /userdata/config/system/eth0_dns_mode   # Check for manual DNS mode
# netstat -tlnp                    # Check whether ports such as 22/7681/21/8555 are listening
```

Wi-Fi 由 `RK_ENABLE_WIFI=y` + `RK_ENABLE_WIFI_CHIP=AP6XXX` 启用；应用位于 `project/app/wifi_app`。

## 新板卡五分钟检查清单

1. 以 1500000 连接串口控制台，并确认启动日志和 reCamera 横幅出现。
2. 运行 `ip addr` 获取 IP 地址，然后确认 `ssh root@<IP>` 可用。
3. 使用 `cat /proc/version` 检查内核版本为 6.1.157，并用 `uname -m` 检查为 `aarch64`。
4. 运行 `ls /oem/usr/lib | head`，确认存在 `librknnrt.so` 等应用程序库。
5. 运行 `netstat -tlnp`，确认 go2rtc（8555）、ttyd（7681）和 sshd（22）处于监听状态。
6. 运行 `tail -f /var/log/Recamera2_developer.log` 查看应用日志。
7. 检查 `cat /run/board_id.env`，确认底板和扩展板 ID 被正确检测到。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>