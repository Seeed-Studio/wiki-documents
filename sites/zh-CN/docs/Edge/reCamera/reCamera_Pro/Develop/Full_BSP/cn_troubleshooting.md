---
description: 基于构建、烧录、启动和运行时症状诊断完整源码包问题。
title: BSP 故障排查
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_troubleshooting
sku: 10003420
sidebar_position: 8
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_troubleshooting/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# BSP 故障排查

总体原则是**先确定出错的层级**。这个 SDK 分为五层，每一层都有不同的调试方法：

```text
1. Host environment     → setup_build_env.sh --check / ./build.sh check
2. Build                → build.sh logs, make info, help <component>
3. Images and flashing  → output/image/, upgrade_tool, serial console
4. System boot          → serial console at 1500000, init scripts, /var/log
5. Application/runtime  → /var/log/Recamera2_developer.log, processes, ports, configuration
```

## 1. 通用诊断工具

| 命令 | 目的 |
| --- | --- |
| `./build.sh check` | 检查主机构建依赖 |
| `./build.sh info` | 打印当前 BoardConfig、所有非空的 `RK_*` 变量、三个组件 SDK 的 `make info` 以及电源域检查结果 |
| `./build.sh help <component>` | 打印某个组件实际使用的 `make` 命令和参数，便于手动复现 |
| `make -C project/app/<app> V=1` | 为应用构建启用详细输出 |
| `make V=1 -C media/samples` | 为媒体构建启用详细输出（非空的 `V` 会关闭 `CMD_DBG=@` 静默模式） |
| `./build.sh DEBUG app` | 使用 `-O0 -g` 重新构建，并在打包时跳过 strip |
| `./build.sh ASAN app` | 使用 AddressSanitizer 重新构建以排查内存问题 |
| 在设备上运行 `/bin/sdkinfo` | 确认设备上运行的构建版本和 BoardConfig |
| 在设备上运行 `cat /etc/ota_version` | 检查固件版本 |

`build.sh` 设置了 `trap 'err_handler' ERR`；失败时会打印出错的函数和行号。可在日志中搜索 `err_handler` 或 `Error:` 以快速定位问题。

## 2. 主机环境与构建问题

| 症状 | 原因 | 解决方案 |
| --- | --- | --- |
| 运行 `./build.sh --help` 时打开了板卡选择菜单 | 尚未运行 `lunch`；脚本会在解析参数前检查 `.BoardConfig.mk` | 先运行 `./build.sh lunch`，之后 `help` / `--help` 才会生效 |
| `Not found tool aarch64-rockchip1240-linux-gnu-gcc, please install first !!!` | 工具链目录缺失或不可执行 | 确认 `tools/linux/toolchain/aarch64-rockchip1240-linux-gnu/bin/` 存在；如有需要，执行 `tools/linux/toolchain/<tc>/env_install_toolchain.sh` |
| `*** error: Please Check Configure !!!` / `build app depend on media libs and header files` | 在 media 构建完成前就开始构建应用 | 先运行 `./build.sh media`，并确认 `output/out/media_out/{include,lib}` 存在 |
| `Build rootfs is not yet complete, packaging cannot proceed!` | 未生成 rootfs tar 归档 | 运行 `./build.sh rootfs` 并检查 `output/out/sysdrv_out/rootfs_glibc_rv1126b.tar` |
| 不清楚是哪个应用构建失败 | `project/app/Makefile` 使用 `$(foreach)` 串行构建应用，并在第一个失败处退出 | 使用 `make -C project/app/<app> V=1` 复现该应用的构建 |
| Rust 应用（`recamera_services`）生成了 armv7 二进制 | 应用的 Makefile 默认使用 `armv7-unknown-linux-gnueabihf` | 运行 `make SERVICE_TARGET=aarch64-unknown-linux-gnu` |
| `cross` 报错或卡住 | Docker 已停止，或当前用户不在 docker 组中 | 运行 `sudo systemctl start docker`；注销并重新登录 |
| Node 前端构建失败 | Node.js 版本低于 18 | 运行 `nvm use 18` 或使用 `setup_build_env.sh` 安装的版本 |
| CMake 版本过旧 | `recamera_ipc` 需要 CMake ≥3.21 | 使用 `setup_build_env.sh` 安装的 CMake，并检查 PATH 顺序 |
| 与 protobuf 相关的构建错误 | 缺少 `libprotobuf-dev` / `protobuf-compiler` | 运行 `sudo apt install libprotobuf-dev protobuf-compiler` |
| 切换板卡后出现意外错误 | 旧配置与新配置的输出混在一起 | 运行 `./build.sh clean`，然后重新构建 |
| 磁盘已满 | Buildroot、内核和 media 输出体积较大 | 保持至少 20 GB 可用空间（推荐 100 GB）；使用 `du -sh output sysdrv/source/buildroot` 定位占用 |
| 以 root 构建一次后出现权限问题 | 构建输出归 root 所有 | 运行 `sudo chown -R $USER:$USER .` 然后重新构建 |
| 由于符号链接缺失导致脚本行为异常 | 通过 Windows 传输了文件 | 重新解压原始 tar 归档；参见 [下载与解压](/cn/recamera_pro_bsp_download/) |

## 3. 烧录问题

| 症状 | 原因 | 解决方案 |
| --- | --- | --- |
| `upgrade_tool ld` 未列出设备 | 未进入 Maskrom / Loader 模式；缺少 udev 规则；未使用 sudo 运行 | 安装 `88-rockusb.rules`，然后运行 `udevadm control --reload-rules && udevadm trigger`；确认 `lsusb` 中出现 `2207:` 设备；使用 `sudo` |
| 运行 `upgrade_tool` 时提示 `Permission denied` | 解压时丢失了执行权限 | 运行 `chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool` |
| `./rkflash.sh update` 没有任何动作 | 脚本中对应分支被注释掉了 | 运行 `sudo upgrade_tool uf output/image/update.img` |
| 执行 `./rkflash.sh all` 后分区行为异常 | `all` 不会烧录 `env.img` | 手动运行 `upgrade_tool di -p output/image/env.img`（或使用 `parameter.txt`） |
| `./build.sh sdcard_upgrade` 没有输出 | Recamera2 板卡配置未定义 `RK_SDCARD_UPGRADE_UBOOT_DEFCONFIG`；`check_config` 静默返回 | 在板卡配置中添加所需变量；参见 [系统定制（DTS / 内核 / Buildroot / Overlay）](/cn/recamera_pro_bsp_system_customization/) |
| 烧录中断后设备变砖 | Loader 未完全写入 | 强制进入 Maskrom 模式，运行 `upgrade_tool ul download.bin`，然后重新烧录 |
| `Writing 'xxx' failed` | 镜像大小与分区大小不匹配 | 检查 `boot.img` 是否小于 11 M、`rootfs.img` 是否小于 3 G |

## 4. 启动问题

**串口控制台是唯一可靠的通道：** 1500000 8N1，`console=ttyFIQ0`。

| 串口控制台症状 | 诊断 | 解决方案 |
| --- | --- | --- |
| 完全没有输出 | Loader / DDR 未启动，或串口连接 / 波特率错误 | 确认波特率为 1500000；重新烧录 `idblock.img` + `download.bin`；测量串口 TX 信号 |
| 出现 U-Boot 后停止 | 内核镜像或 DTB 有问题 | 重新烧录 `boot.img`；检查 `RK_KERNEL_DTS` |
| `Kernel panic - not syncing: VFS: Unable to mount root fs` | rootfs 与 boot 不匹配，或 PARTUUID 发生变化 | 使用同一次构建生成的 `boot` 和 `rootfs`；分区变更后重新烧录 env |
| 串口上出现 watchdog 信息并反复重启 | 某个阻塞的进程阻止了 watchdog 刷新（`-T 30`） | 停止 `S15watchdog` 并排查；检查是否有卡死的进程 |
| 系统能启动但没有网络 | udhcpc 脚本或 DNS 优先级问题 | 参见 [设备访问与调试](/cn/recamera_pro_bsp_device_debug/) 中的网络故障排查章节 |
| 时间相差整数小时 | `S20hwclock` 使用了 `--hctosys --utc`，但注释中写 RTC 存储的是本地时间 | 确认 RTC 存储的是 UTC 还是本地时间，并按需调整脚本 |
| 无法进入 Linux 但 U-Boot 正常 | rootfs 损坏 | 使用 `sudo ./rkflash.sh rootfs` 仅重新烧录 rootfs |

通过以下方式检查启动顺序：

```bash
# ls /etc/init.d/ /oem/usr/etc/init.d/          # Available startup scripts
# dmesg | head -50                               # Early kernel logs
# cat /var/log/Recamera2_developer.log | head    # Application logs
# ps w                                             # Processes that actually started
```

## 5. 运行时与应用问题

### 找不到共享库

```bash
# ldd /userdata/my_app
```

- 缺少 `librockit.so`、`librknnrt.so` 等 → `LD_LIBRARY_PATH` 未包含 `/oem/usr/lib`。登录 shell 会通过 `/etc/profile.d/RkEnv.sh` 设置该变量；对于非登录环境（init 脚本、cron），需要 source 该文件或显式导出变量。
- 缺少第三方库 → 该库未包含在 rootfs 中。启用其 Buildroot 包；参见 [系统定制（DTS / 内核 / Buildroot / Overlay）](/cn/recamera_pro_bsp_system_customization/)。
- 在链接阶段，你可能还需要 `-Wl,-rpath,/oem/usr/lib`；参见 [选择开发路径](/cn/recamera_pro_dev_path/)。

### 架构 / ABI 不匹配

```bash
# file /userdata/my_app        # Must be ARM aarch64
```

`Exec format error` 表示该二进制是为 x86-64 构建的。`GLIBC_2.xx not found` 表示主机工具链比目标设备的运行时更新。

### 视频问题

| 症状 | 原因 | 解决方案 |
| --- | --- | --- |
| 示例程序无法打开 VI / 设备节点忙 | `rkipc` 已经占用了该设备 | 运行 `sh /oem/usr/bin/RkLunch-stop.sh` 后重试；完成后恢复该服务 |
| 图像全黑或全绿 | 未检测到传感器或缺少 IQ 文件 | 运行 `dmesg | grep -i [sensor]` 并检查 `/oem/usr/share/iqfiles/` |
| 颜色错误或噪声很大 | IQ 文件与传感器不匹配 | 对比 `RK_CAMERA_SENSOR_IQFILES` 与实际安装的传感器 |
| 无法接收 RTSP 码流 | go2rtc 未启用外部 554 端口 | 检查 `/userdata/config/rkipc.ini` 中 `[video.0.rtsp] enable`，然后重启 `S50go2rtc` |
| Web UI 有视频但外部播放器没有 | go2rtc API 仅绑定到 127.0.0.1 | 使用 `:8555` 上的 WebRTC，或通过 SSH 转发 `1984` 端口 |
| `/dev/videoN` 编号发生变化 | 不同固件版本的设备枚举方式不同 | 在设备上使用 `v4l2-ctl --list-devices` 检查；不要将编号写死 |

Rockchip 的视频故障排查指南见 `docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf`。

### NPU / AI 问题

| 症状 | 原因 | 解决方案 |
| --- | --- | --- |
| `rknn_init` 失败 | 模型未针对 rv1126b 转换，或 Toolkit 与 Runtime 版本不匹配 | 使用 `target_platform='rv1126b'` 重新转换；检查板卡上的 `librknnrt.so` 版本（内部基线 2.3.2） |
| 推理输出完全错误 | 预处理不匹配（mean/std、RGB/BGR、NCHW/NHWC、resize 策略） | 检查导出脚本参数，而不是凭猜测 |
| 结果不够准确 | INT8 校准集不具代表性 | 先建立 FP16 基线，然后使用更好的校准集重新量化 |
| OOM / 进程被杀死 | LLM / VLM 占用内存过多 | 使用 `rkllm_benchmark_demo` 检查 `memory_usage`；尝试更小的量化方案 |
| 推理速度慢 | 只使用了一个 NPU 核心 | 设置 `rknn_set_core_mask(ctx, RKNN_NPU_CORE_0_1)` |
| 长时间运行后性能下降 | 热降频 | 检查热状态；参见 `docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf` |
| VLM 输出乱码或异常 | 视觉特殊 token 不匹配 | 在运行时传入 `img_start` / `img_end` / `img_content` |

### 音频问题

请参阅[音频开发](/cn/recamera_pro_audio_development/)中的问题表。最常见的问题是直接打开 `hw:0,0` 而不是使用 dsnoop，导致出现 `Device or resource busy`。

### 服务与端口

```bash
# netstat -tlnp        # 22 / 7681 / 21 / 8555 / 1984 / 8765 / 554 / 5554
# ps w | grep -E 'rkipc|gmgr|skt2ws|tmir|rcisd|go2rtc|ttyd|notify'
# /etc/init.d/S49notify start|stop
# /oem/usr/etc/init.d/S50go2rtc restart
```

如果 SSH 拒绝正确的密码，可能是触发了 PAM 锁定（5 次失败 / 300 秒）。状态文件为 `/userdata/config/system/login_lock.json`；重启即可清除。

如果 ttyd 页面提示用户不被允许，则 `ssh-login-whitelist.sh` 中的允许列表仅包含 `root` 和 `admin`。

如果 FTP 未显示 config 目录，则 `vsftpd.conf` 中的 `hide_file` / `deny_file` 是有意将其隐藏。请改用 SFTP。

### 日志

```bash
# tail -f /var/log/Recamera2_developer.log    # Human-readable
# tail -n 100 /var/log/Recamera2.log          # JSON for programmatic parsing
# dmesg                                        # Kernel logs
```

端口 8765 上的 WebSocket 实时日志绑定到 127.0.0.1。从主机访问时，请使用 `ssh -L 8765:127.0.0.1:8765 root@<IP>`。

### 内存与性能

内核启用了调试节点；可通过以下命令查看：

```bash
# cat /proc/rk_cma/*        2>/dev/null      # CONFIG_RK_CMA_PROCFS
# cat /proc/rk_dmabuf/*     2>/dev/null      # CONFIG_RK_DMABUF_PROCFS
# cat /proc/rk_memblock/*   2>/dev/null      # CONFIG_RK_MEMBLOCK_PROCFS
# cat /proc/rk_rga/*        2>/dev/null      # CONFIG_ROCKCHIP_RGA_PROC_FS
# ls /sys/kernel/debug/                       # CONFIG_DEBUG_FS
```

具体节点名称取决于设备，仍需硬件验证。注意 `RK_BOOTARGS_CMA_SIZE="8M"` 会设置一个较小的 CMA 区域；如果大块连续内存分配失败，请先检查这一点。

通过 `CONFIG_ELF_CORE=y` 启用了 coredump。`build.sh` 中的 `__BUILD_ENABLE_COREDUMP_SCRIPT()` 可以生成启用脚本。将其与 `IMAGE/.../DEBUG_FILES/kernel/vmlinux.tar.bz2` 以及交叉 gdb 一起使用来分析 dump。

## 6. 缺陷报告中应包含的信息

对于内部报告或 Rockchip 问题（参见 `docs/en/Rockchip_User_Guide_Bug_System_EN.pdf`），请一次性收集以下信息：

```bash
# On the host
./build.sh info > info.txt 2>&1
cat IMAGE/*/build_info.txt

# On the device
/bin/sdkinfo
cat /etc/ota_version
uname -a && cat /proc/cmdline
dmesg > dmesg.txt
cat /var/log/Recamera2_developer.log > app.log
cat /run/board_id.env
netstat -tlnp
ps w
```

还请附上完整的串口启动日志（1500000 波特率）、复现步骤，以及 `IMAGE/..._RELEASE_TEST/` 压缩包的路径。

静态源码发现的问题、其证据、影响和验证状态被收集在[源码审查与已知问题](/cn/recamera_pro_sdk_source_notes/)中，以将维护审计与运行流程分开。如果你遇到相关行为，请先根据当前 SDK 文件和版本进行核实。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>