---
description: "从一台干净环境的电脑到一块能够启动、录音并可通过主机 SDK 控制的 reSpeaker Clip 的端到端路径——在进行任何自定义或 AI 辅助固件工作之前的基线，以及如何判断固件开发是否是适合你任务的正确路径。"
title: 使用 reSpeaker Clip Firmware SDK 入门
keywords:
  - reSpeaker clip
  - firmware
  - sdk
  - getting started
  - nRF5340
  - Zephyr
  - NCS
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_firmware_quick_start
sku: 100020126
last_update:
  date: 07/28/2026
  author: Ray
createdAt: '2026-07-28'
updatedAt: '2026-07-28'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_firmware_quick_start/
---

# 使用 reSpeaker Clip Firmware SDK 入门

从一台干净环境的电脑到一块能够启动、录音并可通过主机 SDK 控制的 reSpeaker Clip 的端到端路径——在进行任何自定义或 AI 辅助固件工作之前的基线。本页也会告诉你，对于你的任务来说，固件开发是否真的是正确的路径。

> **封闭设备。** Clip 采用密封外壳出厂——不打开外壳就无法接触到 SWD/J-Link 焊盘。**终端用户只通过 USB 或 BLE 升级**，绝不会使用探针。下面的 SWD 烧录是*开发*路径（拆壳的台式样机或带调试引出的版本）。

## 介绍

**Firmware SDK** 是运行在 Nordic nRF5340 上的设备端 Zephyr RTOS 固件（双核：应用核 + 网络核）。它面向需要**修改设备端行为**的开发者——包括音频处理链、AT 命令接口或 BLE GATT 服务、按键 / OLED / 震动交互模型、电源或产品化策略，或自定义硬件的点亮与适配。

检出的固件源码是权威来源；文档只是对其进行总结。当两者不一致时，以源码为准。

## 选择正确的开发路径

并不是所有任务都需要做固件开发。请选择与你目标匹配的路径：

| 你想要… | 使用这个 | 会涉及固件吗？ |
|---|---|---|
| 从主机或手机控制录音并下载文件 | **Basic SDK**（[sdk/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/sdk/)）或 **移动端 SDK**（[mobile/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/mobile/)） | 否 |
| 修改音频处理链、AT/GATT、按键/OLED/震动、电源或硬件 | **Firmware SDK**（本指南 + [固件开发指南](./respeaker_clip_firmware_development_guide.md)） | 是 |
| 让一个 AI agent 在固件真实约束内修改仓库 | [`skills/clip-dev/`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) skill | 是 |

Basic 和移动端 SDK 通过 BLE 和设备的 Wi-Fi AP 与 Clip 通信，不需要固件源码。它们是应用集成的推荐路径。

**不在设备固件范围内的内容**（不要期待具备这些能力）：

- **云端转写 / AI 摘要**——Clip 将 Opus 录音保存到 SD 卡；转写在设备外运行。没有任何在设备上的语音转文本路径。
- **BLE 实时音频流**——BLE 链路只承载 AT 命令、文件传输帧以及音频*能量级*可视化通知。它不会传输实时音频流。

## 固件能力与可定制边界

| 能力 | 已实现？ | 可由 Basic/移动端 SDK 控制？ | 可通过固件自定义？ |
|---|---|---|---|
| 录音开始/停止/暂停/恢复/打标 | 是（`AT+START/STOP/PAUSE/RESUME/MARK`） | 是 | 是（`clip_event.c`、`button.c`） |
| Normal/Enhanced 模式 | 是（`AT+MODE=normal\|enhanced`，可持久化） | 是 | 是（`audio.c` + 每种模式的 Kconfig） |
| Opus 码率/复杂度 | 是（按模式的 Kconfig） | 否——仅构建时可设定 | 是（Kconfig） |
| 噪声抑制（SpeexDSP NS） | 部分——仅 Enhanced 模式、启动时默认，**无运行时 AT**（旧的 `AT+NOISE` 已移除） | 否 | 是（Kconfig + `config.c`；可添加 AT 处理器在运行时暴露） |
| 去混响 | 部分——仅 Enhanced 模式、启动时默认，**无运行时 AT** | 否 | 是（Kconfig + `config.c`） |
| AGC | 是——手写整数实现，始终开启 | 否——不可配置 | 否——需编辑 `audio.c` |
| 震动马达 | 是（`haptic.c`），默认禁用（`CONFIG_CLIP_HAPTIC_MOTOR_ENABLED=n`，但 `prj.conf` 为本应用设置为 `=y`） | 否 | 是 |
| 文件传输（BLE + Wi-Fi UDP） | 是（`AT+DOWNLOAD/CANCEL`） | 是 | 是（`transport.c`、`transfer.c`） |
| BLE 实时音频流 | 否（仅能量级通知） | 不适用 | 不在范围内 |

完整的已注册 AT 命令列表、协议帧、架构、验证矩阵以及量产/发布细节，请参见 [固件开发指南](./respeaker_clip_firmware_development_guide.md)——本页只总结你入门所需的内容。

## 录音模式与音频处理链要点

> 旧文档将 `MODE_NORMAL` 描述为**立体声**。这是错误的。两种模式都录制为**单声道**。

- **两种模式**都通过 L+R 混合录制**单声道**。`clip_event.c` 始终调用 `audio_start_recording(AUDIO_MODE_MERGE)`。`MODE_NORMAL` 并**不是**立体声——这个名字只是历史遗留。
- **`MODE_NORMAL`**（默认）= 混合 + 仅使用手写 DSP 路径（延时对齐混合、100 Hz 高通、整数 AGC、软限幅）。**不使用 SpeexDSP。**
- **`MODE_ENHANCED`** = 混合 + SpeexDSP 噪声抑制和去混响，受 `mode == ENHANCED && noise_suppress > 0`（`audio.c:506`）控制。当 `noise == 0` 时，Enhanced 的行为与 Normal 相同。
- Opus 码率和复杂度是**按模式的 Kconfig 常量**（`CLIP_NORMAL_*`/`CLIP_ENHANCED_*`），不能在运行时设置。
- 使用 `AT+MODE=normal|enhanced` 设置模式（可持久化），或使用 `AT+START mode=enhanced`（仅本次会话有效，不会持久化）。

## 前置条件

| 工具 | 用途 | 安装方式 |
|------|-----|---------|
| [NCS **v3.3.0**](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/index.html) 源码 | Zephyr + nRF + nrfxlib + mcuboot 源码树。**v3.2.1 已不再支持**——`main` 需要仅在 v3.3.0 中存在的 Kconfig，无法在其上构建。 | `west`（见 [设置 NCS](#set-up-ncs-v330)） |
| Zephyr SDK **0.16.4** 工具链 | 用于 nRF5340 的 `arm-zephyr-eabi-gcc` 编译器/调试器 | 单独安装（见 [设置 NCS](#set-up-ncs-v330)） |
| `west` | Zephyr 的元工具（构建/烧录） | `pip install west` |
| [`nrfutil`](https://www.nordicsemi.com/Products/Development-tools/nrf-util)（≥ 8.x，带 `device` + `mcu-manager`） | 烧录后复位；USB 串口 DFU | Nordic 官网 |
| Python **3.10+** | 主机测试/SDK 工具（`clip-cli`、`udp_sync`、`decode_opus`） | python.org |
| J-Link（可选，仅开发） | 台式样机上的 SWD 烧录 | SEGGER |

首次安装 Python 工具依赖：

```sh
pip install -r applications/clip/tests/requirements.txt
```

## 获取源码

该仓库是一个 **Zephyr 模块**（通过 `zephyr/module.yml` 携带自己的板级、驱动和库）。可以将其克隆到任意位置，然后让 NCS 环境指向它。

> **已验证基线。** 本指南针对固件标签 **`v0.0.9`**、NCS **v3.3.0**、板级 **`clip/nrf5340/cpuapp`**，运行在 Ubuntu 24.04 上。为获得可复现的构建，请固定到相同标签，而不是克隆不断变化的 `main` 分支：

```sh
git clone --branch v0.0.9 https://github.com/Seeed-Studio/reSpeaker_Clip.git
cd reSpeaker_Clip
git describe --tags    # confirm: v0.0.9
```

**支持的硬件：** reSpeaker Clip（nRF5340 + nRF7002 + NPM1300 PMIC）。本指南不涵盖其他板卡版本。

## 设置 NCS v3.3.0

NCS v3.3.0 以 **west 工作区** 的形式安装——包括 NCS 源码树以及单独的 **Zephyr SDK 工具链**。参考配置就是这样安装的。

> **不要使用 `nrfutil toolchain-manager`。** `nrfutil` v6.1.7 二进制实际上并不包含 `toolchain-manager`/`self-upgrade` 命令，因此固件 CI 中安装 NCS 的步骤目前是坏的（[`firmware.yml`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/.github/workflows/firmware.yml) 的运行都在失败）。请改用下面的 west 步骤。如果你已经有 NCS v3.3.0（例如通过 nRF Connect for Desktop 安装），请直接跳到[进入 NCS 环境](#enter-the-ncs-environment--register-this-repo-as-a-module)。

### 1. 安装构建依赖和 `west`

```sh
sudo apt install -y cmake ninja-build g++ make device-tree-compiler \
    python3 python3-pip git curl ca-certificates
sudo pip3 install --break-system-packages west
west --version          # expect west 1.x
```

### 2. 安装 NCS v3.3.0 源码（west manifest）

这会在 `~/ncs/v3.3.0` 创建工作区，并获取 NCS 模块（zephyr、nrf、nrfxlib、mcuboot、HAL、crypto 等）——大约 2 GB 的 GitHub 数据。

```sh
west init -m https://github.com/nrfconnect/sdk-nrf --mr v3.3.0 ~/ncs/v3.3.0
cd ~/ncs/v3.3.0
west update
```

### 3. 安装 Zephyr SDK 工具链（单独）

west 工作区提供的是**源码**；**编译器**来自 Zephyr SDK。请从 [Zephyr SDK 发布页](https://github.com/zephyrproject-rtos/sdk/releases)下载 **0.16.4** 版本（`*_linux-x86_64.tar.xz` 资源），解压后运行一次其安装脚本：

```sh
cd ~
tar xf zephyr-sdk-0.16.4_linux-x86_64.tar.xz     # you downloaded this
cd zephyr-sdk-0.16.4
./setup.sh                                        # registers toolchains + udev rules
# → compiler at ~/zephyr-sdk-0.16.4/arm-zephyr-eabi/bin/arm-zephyr-eabi-gcc
```

> **Linux 设备访问——`nrf-udev` + J-Link udev 规则。** 若要在不使用 root 的情况下通过 USB/J-Link 烧录或复位，请安装 `nrf-udev`（Nordic 的 `.deb`）以及 SEGGER 的 udev 规则——否则 `/dev/ttyACMx` 和 J-Link 探针只能由 root 访问。参见 [nRF Util 前置条件](https://docs.nordicsemi.com/r/bundle/nrfutil/page/guides/installing.html/prerequisites)。

### 进入 NCS 环境并将本仓库注册为模块

```sh
source ~/ncs/v3.3.0/zephyr/zephyr-env.sh
export ZEPHYR_EXTRA_MODULES=$PWD     # the reSpeaker_Clip checkout
```

> **为什么 `ZEPHYR_EXTRA_MODULES` 要用环境变量，而不是 `-D` CMake 变量。** Kconfig 模块发现发生在 CMake 配置*之前*。`-D` 传入得太晚，Kconfig 将永远看不到本仓库的板级（`clip`）、驱动或库。请在你进行构建的同一个 shell 中设置它——或者在 shell 配置文件中导出。

**检查点——当以下命令全部成功时，说明你的环境已就绪：**

```sh
west --version                   # west 1.x
arm-zephyr-eabi-gcc --version    # (Zephyr SDK 0.16.4) gcc 12.x
python3 --version                # Python 3.10+
echo $ZEPHYR_BASE                # .../ncs/v3.3.0/zephyr
```

## 构建原厂固件

```sh
west build --build-dir build-clip --board clip/nrf5340/cpuapp applications/clip
```

若要进行完全干净的重建（在 MCUboot 补丁变更之后或构建目录陈旧时需要），请添加 `--pristine`：

```sh
west build --build-dir build-clip --pristine --board clip/nrf5340/cpuapp applications/clip
```

这是一个**默认的 sysbuild**——一条命令即可生成自定义签名的 MCUboot 引导加载程序 + 应用核 + 网络核 BLE 控制器镜像。开发板提供了所有 sysbuild 粘合配置；不需要为每个应用单独提供 `sysbuild.conf`。

> **开发板标识符**：`clip/nrf5340/cpuapp` —— **不是** `respeaker/...`。

> **可复现性——虚拟机 vs. 真实设备。** 安装路径面向具有真实网络访问的 Ubuntu 24.04（多 GB 的 NCS 拉取需要可靠的 GitHub 连接——QEMU/VM 的用户态网络对此会比较吃力）。QEMU/VM 可以执行*安装和构建步骤*，但**不能**替代真实设备——QEMU 无法仿真 nRF5340 双核、nRF7002、PDM 麦克风、SD、OLED、PMIC 或真实的 USB/BLE 行为。Flash、传输、音频和恢复必须在真实的 Clip 上验证。

## 构建量产配置

低功耗变体：关闭 UART 控制台以及 FS/UART 日志后端，空闲电流约为 170 µA（对比调试构建，控制台会泄漏约 570 µA）。在电池/量产构建中，当控制台电流很重要时使用此配置。

```sh
west build --build-dir build-clip-prod --board clip/nrf5340/cpuapp applications/clip \
  -- -DSNIPPET_ROOT=$(pwd)/applications/clip -DSNIPPET=production
```

`SNIPPET_ROOT` 必须是绝对路径。`production` 代码片段位于 `applications/clip/snippets/production/`。

## 烧录并复位

```sh
west flash --build-dir build-clip          # flash both cores
nrfutil device reset --serial-number <JLINK-SN>
```

> **`--serial-number` 用于指定目标 J-Link。** 只有在只连接了一个设备时才可以省略它——当存在多个探针时，裸用 `nrfutil device reset` 是不明确的。使用 `nrfutil device list` 或 J-Link 外壳上打印的 SN 来查找序列号。

此开发板特有的两个注意事项：

- 这里**`west flash --reset` 无法工作**。务必始终使用 `nrfutil device reset` 单独复位。
- **`--recover` 会擦除两个内核**（它会清除网络核访问端口锁）。仅在网络核 AP 被 `b0n` 锁定时使用它（例如在之前启用安全启动之后）——不要把它当作常规参数使用。

终端用户（外壳装好、无探针）完全跳过这一步，使用 USB 串口 DFU——见下文的 [通过 USB 串口 DFU 恢复](#通过-USB-串口-DFU-恢复)。

## 打开调试控制台

```sh
minicom -D /dev/ttyACM0 -b 921600
```

当同时连接了 J-Link 探针时，J-Link 会占用 `ttyACM0`，Clip 的 UART0 桥会移动到 `ttyACM1`——使用其中那个标记为 “USB Single Serial”（非 J-Link）的端口。

## 运行冒烟测试

成功标准：设备能够启动，通过 BLE 响应 AT 命令，录制一个有效的 Opus 文件，并通过 Wi-Fi 将其拉回。所有 AT 响应都是 JSON——成功为 `{"ok":true,"data":{...}}`，失败为 `{"ok":false,"msg":"..."}`。

### 启动与状态

OLED 点亮，设备进入 IDLE。通过任意 AT 通道确认：

```
AT+GSTAT        →  {"ok":true,"data":{"state":"IDLE","battery":..,"mode":..,...}}
AT+VERSION      →  {"ok":true,"data":{"version":"0.0.6",...}}
```

### 录制 → 列表 → 下载（通过 BLE）

`clip-cli.py` 是统一的主机 CLI（默认 BLE，也支持 Wi-Fi）。在设备正在广播时：

```sh
# status over BLE
python applications/clip/tests/tools/clip-cli.py status

# record ~5s, stop, list sessions
python applications/clip/tests/tools/clip-cli.py record --duration 5
python applications/clip/tests/tools/clip-cli.py list
```

`AT+LIST` 应该显示新的会话（按最新优先排序）。通过 BLE 将 Opus 文件拉回，并解码其中一个为 WAV，以确认它是有效音频：

```sh
python applications/clip/tests/tools/clip-cli.py sync --session <session_id>
python applications/clip/tests/tools/decode_opus.py recordings/<session_id>/0001.opus out.wav   # plays
```

### Wi-Fi 拉取（UDP 同步，CRC32 校验）

启用后，设备会暴露一个 Wi-Fi AP。首先通过 BLE：

```
AT+WIFI=on     →  {"ok":true,"data":{"ssid":"ClipAP_XXXX",...}}
```

然后在主机上加入该 AP 并同步会话：

```sh
# SSID ClipAP_XXXX (last 4 hex of chip ID) · password 12345678 (default;
# becomes random after the first BLE pairing) · IP 192.168.4.1 · UDP 8089
python applications/clip/tests/tools/udp_sync.py --session <session_id>
```

如果这四项都通过——状态、录制、带可解码 Opus 文件的列表/下载，以及 Wi-Fi 拉取——则说明出厂固件基线是良好的。

## 导出构建产物

目前还没有单一压缩包导出——基于 tag 触发的 `scripts/build_release.sh`
+ `.github/workflows/release.yml` 尚未实现。现在需要先构建两个变体，然后手动复制各自的四个产物：

```sh
VERSION=$(grep APP_VERSION_STRING build-clip/clip/zephyr/include/generated/zephyr/app_version.h | cut -d'"' -f2)
mkdir -p output/$VERSION

# Debug
cp build-clip/merged.hex            output/$VERSION/clip-$VERSION-debug-merged.hex
cp build-clip/merged_CPUNET.hex     output/$VERSION/clip-$VERSION-debug-merged_CPUNET.hex
cp build-clip/dfu_application.zip   output/$VERSION/clip-$VERSION-debug-ota.zip
cp build-clip/clip/zephyr/zephyr.signed.bin output/$VERSION/clip-$VERSION-debug-signed.bin
# Production
cp build-clip-prod/merged.hex            output/$VERSION/clip-$VERSION-production-merged.hex
cp build-clip-prod/merged_CPUNET.hex     output/$VERSION/clip-$VERSION-production-merged_CPUNET.hex
cp build-clip-prod/dfu_application.zip   output/$VERSION/clip-$VERSION-production-ota.zip
cp build-clip-prod/clip/zephyr/zephyr.signed.bin output/$VERSION/clip-$VERSION-production-signed.bin
```

每个版本：`*-merged.hex` / `*-merged_CPUNET.hex`（用于编程器），`*-signed.bin`（USB 串口 DFU），`*-ota.zip`（BLE/USB mcumgr 多镜像包）。

## 通过 USB 串口 DFU 恢复

如果台架构建让设备进入了异常状态，使用**1200 波特 USB 触发**——无需探针，无需打开外壳。每个 clip 应用都内置了它（板级，`lib/clip_usb_dfu`）。

> **开发恢复 vs. 官方发布。** 这会恢复到你上面导出的*自构建* `*-signed.bin`。已发布、可下载的发布包（GitHub Releases + `scripts/build_release.sh`）**尚不可用**——“回到官方发布版本”依赖于该流水线。 在此之前，将此视为开发阶段的恢复路径；它不能证明存在一个公共发布版本。

1. clip 应用默认保持 USB 关闭——先通过 BLE 发送 `AT+USB=on`（示例和自定义应用在默认 CDC 自动启用 USB 的情况下可以跳过这一步）。然后通过以 1200 波特打开 CDC-ACM 端口来触发恢复：

   ```sh
   python3 -c "import serial; s=serial.Serial('/dev/ttyACMx',1200); s.close()"
   ```

   （在插入 USB 的同时按住用户按键也会进入恢复模式。）

2. 会出现一个新的 CDC-ACM 端口——**PID `0x8069`**（运行中的应用为 `0x0069`；`0x8000` 位标记引导加载程序模式；两者的 Seeed VID 均为 `0x2886`）。上传签名的发布应用并复位：

   ```sh
   nrfutil mcu-manager serial image-upload --firmware clip-<version>-signed.bin --serial-port /dev/ttyACMx
   nrfutil mcu-manager serial reset     --serial-port /dev/ttyACMx
   ```

MCUboot 会验证 RSA 签名并启动新应用；引导加载程序分区不会被触及。完整指南（BLE OTA、按键路径、`mcumgr`、nRF Connect、故障排查）见 [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md)。

## 接下来去做什么

- **系统架构、协议、更新/恢复、验证、量产** → [固件开发指南](./respeaker_clip_firmware_development_guide.md)（完整参考）。
- **构建 / 烧录 / 功耗 / 踩坑（完整参考）** → [CLAUDE.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/CLAUDE.md)。
- **可供拷贝的示例应用** → [samples/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/samples/)。
- **AI 辅助开发** → [`skills/clip-dev/`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) ——在你的 AI agent 中加载此 skill。它的 `SKILL.md` 加上九个参考文档已经编码了该项目的真实约束条件，其中包括：**不存在用于比特率、编码复杂度、AGC、噪声抑制和去混响的运行时命令**——音频模式只有 `normal` 或 `enhanced`。

一个能够启动、录音，并可从 Basic SDK（`clip-cli` / SenseCraft Voice 应用）控制的出厂构建，是在此仓库上进行任何 AI 辅助或自定义固件工作的前提。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
