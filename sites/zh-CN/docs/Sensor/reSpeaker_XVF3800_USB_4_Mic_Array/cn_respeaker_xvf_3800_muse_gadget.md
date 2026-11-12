---
description: 在 reSpeaker XVF3800 + XIAO ESP32-S3 上构建 Muse Gadget——烧录 XMOS I2S 固件、使用 ESP-IDF 构建、通过 BLE 配对，并将语音笔记流式传输到你的 Muse 虚拟机。
title: 在 reSpeaker XVF3800 上使用 Muse Gadget
keywords:
  - reSpeaker
  - XIAO ESP32-S3
  - Muse
  - 语音助手
  - BLE
  - ESP-IDF
  - TTS
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_muse_gadget
last_update:
  date: 11/09/2026
  author: Kasun Thushara
createdAt: '2026-11-09'
updatedAt: '2026-11-09'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf3800_muse_gadget/
---

## 介绍

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/WEcYu1k428E"
          title="Muse Gadget on reSpeaker XVF3800"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

本项目将 **reSpeaker XVF3800** 四麦阵列和 **XIAO ESP32-S3** 打造成一个 **Muse Gadget**。该设备通过 BLE 与 Muse 手机应用配对，加入你的 Wi-Fi 网络，并与云端的 Muse 虚拟机建立加密的 Noise 会话。

- **长按** 按钮：录制语音笔记。Muse 会将其转写并回复；回复会在应用中显示，并通过 TTS 在扬声器上播放。
- **轻触**（少于 1 秒）：发起实时语音通话（如果开启 `MUSE_REALTIME_VOICE`）。
- 再次 **轻触**：挂断。

整体数据路径大致如下：

```text
XIAO ESP32-S3 ──BLE──> Muse app (pairing)
      │
      └──Wi-Fi──> encrypted Noise session ──> Muse VM
                        │
                        ├── /link-control : device.health, voice.configure, …
                        └── /chat/stream  : voice note → transcript → reply
```

XIAO 是 **I2S 主机**；XVF3800 运行 **I2S 从机 16 kHz** 固件，并控制其 12 灯 LED 环和功放。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="reSpeaker XVF3800 with XIAO ESP32-S3" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>



## 所需准备

- [ ] Muse **SDK 令牌**（`mgst_…`）
- [ ] 可选的 **AssemblyAI** 密钥，用于语音回复
- [ ] 手机上安装 **Muse 应用**，并开启开发者模式
- [ ] 已安装 **ESP-IDF v6.0.3**
- [ ] XVF3800 已刷入 **I2S 从机 16 kHz** 固件
- [ ] JST **5 W** 扬声器（或 3.5 mm 耳机）
- [ ] 2.4 GHz Wi-Fi 账号和密码
- [ ] USB-C **数据**线

## 账号与 API 密钥

| 密钥 / 凭据 | 是否必需？ | 获取途径 | 配置位置 |
|---|---|---|---|
| **Muse SDK 令牌**（`mgst_…`，48 个字符） | **是** | [gadgets.muse.ai](https://gadgets.muse.ai/settings/sdk-tokens) | 构建时的 `sdkconfig` 中 `CONFIG_GADGET_SDK_TOKEN` |
| **AssemblyAI 密钥**（32 个字符） | 可选——语音回复 | [assemblyai.com](https://www.assemblyai.com/dashboard) | 构建时的 `sdkconfig` 中 `CONFIG_MUSE_TTS_API_KEY` |
| **Groq 密钥**（`gsk_…`） | 备用 TTS | [console.groq.com](https://console.groq.com/keys) | 同上，但使用 Groq 的 URL/模型 |
| **Wi-Fi SSID 和密码** | 是 | 你的 2.4 GHz 网络/热点 | 配对时在 Muse 应用中填写 |




### TTS 提供商设置

默认提供商是 AssemblyAI：

```ini
CONFIG_MUSE_TTS_ENABLE=y
CONFIG_MUSE_TTS_URL="https://tts.us.assemblyai.com/v1/openai/audio/speech"
CONFIG_MUSE_TTS_MODEL="assemblyai-tts-en"
CONFIG_MUSE_TTS_VOICE="alloy"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="mp3"
CONFIG_MUSE_TTS_MAX_CHARS=800
CONFIG_MUSE_TTS_TIMEOUT_MS=15000
CONFIG_MUSE_TTS_API_KEY="YOUR_ASSEMBLYAI_KEY"
```

Groq（Orpheus，输入限制 200 字符）是一个替代选项：

```ini
CONFIG_MUSE_TTS_URL="https://api.groq.com/openai/v1/audio/speech"
CONFIG_MUSE_TTS_MODEL="canopylabs/orpheus-v1-english"
CONFIG_MUSE_TTS_VOICE="hannah"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="wav"
CONFIG_MUSE_TTS_MAX_CHARS=200
CONFIG_MUSE_TTS_API_KEY="gsk_..."
```

手机应用 **没有 TTS 提供商设置**；TTS 完全在固件端处理。

## 手机应用设置

- 在 Android 或 iOS 上安装 **Muse** 应用（Meta）。
- 使用你的 Muse 账号登录。
- 打开 **Settings → Devices → Developer mode**。
- Muse 首发于 **美国和加拿大**；账号/应用是配对以及显示回复文本所必需的。
- 应用以 **文本** 形式显示回复；如果配置了 TTS，设备会将其朗读出来。


### 可选外接按钮（Grove Button）

你可以添加一个 [Grove Button](https://www.seeedstudio.com/Grove-Button.html) 作为按键说话：**VCC → D3，SIG → D0，GND → GND**。

| Grove Button | XIAO | GPIO |
|---|---|---|
| GND | GND | — |
| VCC | **D3** | 4（拉高供电） |
| SIG | **D0** | 1（输入，有效高电平） |
| NC | — | — |

固件设置已经在 overlay 中配置好：

```ini
CONFIG_HOMEHUB_BUTTON_GPIO=1
CONFIG_HOMEHUB_BUTTON_POWER_GPIO=4
CONFIG_HOMEHUB_BUTTON_ACTIVE_HIGH=y
CONFIG_HOMEHUB_BUTTON_LABEL="TALK"
```

Grove Button 为 **高电平有效**；固件将 GPIO4 拉高为其供电，并通过下拉读取 GPIO1。

## 烧录 XMOS I2S 固件

由于 XIAO 是 **I2S 主机**，XVF3800 必须运行 **I2S 从机 16 kHz** 固件。USB 固件 **不能** 与 XIAO 一起使用。

按照官方固件升级指南烧录 `respeaker_xvf3800_i2s_slave_v1.0.9_16k.bin` 镜像：

- [reSpeaker XVF3800 固件升级](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#usb-firmware)

> 请选择 **`respeaker_xvf3800_i2s_slave_v1.0.9_16k.bin`**（I2S 从机，16 kHz）——不要选择默认的 USB 固件。

### 验证

Muse 固件日志中会显示：

```text
link.xvf3800: XVF3800 firmware 1.0.9; 16 kHz I2S slave, ESP32 is master
```

或者运行：

```sh
xvf_host VERSION
```

## 克隆项目

克隆维护中的 fork。它基于上游 SDK，已经包含 XVF3800 移植和 TTS 集成：

```sh
git clone https://github.com/KasunThushara/muse-gadget-sdk.git
cd muse-gadget-sdk
```

> `seeed-respeaker-xvf3800` 移植 **尚未合入上游** `facebookincubator/muse-gadget-sdk`。如果你改用上游仓库，需要自行应用下面的改动。

该 fork 新增的文件：

```text
esp32/devices/sdkconfig.seeed-respeaker-xvf3800
esp32/main/voice_board_xvf3800.c
esp32/main/xvf3800.c
esp32/main/xvf3800.h
```

该 fork 修改的文件：

```text
esp32/main/Kconfig.projbuild      (HOMEHUB_LED_BACKEND_XVF3800, button options)
esp32/main/CMakeLists.txt         (xvf3800.c, voice_board_xvf3800.c)
esp32/main/led_status.c           (XVF3800 ring over I2C)
esp32/main/button.c               (active-high button, optional power GPIO)
esp32/main/voice.c                (tap-vs-hold measurement)
esp32/tools/board.sh              (seeed-respeaker-xvf3800 case)
esp32/components/muse/Kconfig     (MUSE_TTS_*)
esp32/components/muse/muse_chat_session.cpp  (start_tts / WAV / MP3)
```

## 构建固件

### 安装 ESP-IDF v6.0.3

`esp32/cmake/validate_config.cmake` 需要 **ESP-IDF v6.0.3**：

```sh
git clone -b v6.0.3 --recursive https://github.com/espressif/esp-idf.git ~/esp/esp-idf-v6.0.3
~/esp/esp-idf-v6.0.3/install.sh esp32s3
. ~/esp/esp-idf-v6.0.3/export.sh
```

你还需要 **Git**、**Python 3** 和一根 **USB-C 数据线**。在 Windows 上，XIAO 控制台是原生 USB（`303a:1001`），会显示为 `COMx`。`tools/board.sh` 是 bash 脚本，因此请在 **Git Bash** 中运行它，或者直接调用 `idf.py`。

### 设置密钥

```sh
cd esp32
idf.py -B build-seeed-respeaker-xvf3800 menuconfig
```

在 **ESP32 Device SDK** 下进行设置：

- **Muse Gadgets SDK 令牌** → `mgst_…`
- TTS 选项（在 **Muse** 菜单下）→ 提供商、URL、模型、音色、API 密钥

或者直接编辑 `build-seeed-respeaker-xvf3800/sdkconfig`：

```ini
CONFIG_GADGET_SDK_TOKEN="mgst_…"
CONFIG_MUSE_TTS_ENABLE=y
CONFIG_MUSE_TTS_URL="https://tts.us.assemblyai.com/v1/openai/audio/speech"
CONFIG_MUSE_TTS_MODEL="assemblyai-tts-en"
CONFIG_MUSE_TTS_VOICE="alloy"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="mp3"
CONFIG_MUSE_TTS_MAX_CHARS=800
CONFIG_MUSE_TTS_API_KEY="YOUR_ASSEMBLYAI_KEY"
```

> 生成的 `build-*/sdkconfig` 会覆盖 overlay。修改 `devices/sdkconfig.seeed-respeaker-xvf3800` 后，请更新或删除生成的 `sdkconfig`。

### 编译

```sh
tools/board.sh seeed-respeaker-xvf3800 build
```

或者直接运行：

```sh
idf.py -B build-seeed-respeaker-xvf3800 \
  -DIDF_TARGET=esp32s3 \
  -DSDKCONFIG=build-seeed-respeaker-xvf3800/sdkconfig \
  -DSDKCONFIG_DEFAULTS="sdkconfig.defaults;devices/sdkconfig.seeed-respeaker-xvf3800" \
  build
```

生成的镜像位置：

```text
esp32/build-seeed-respeaker-xvf3800/muse-gadget.bin
```

## 烧录固件

```sh
tools/board.sh seeed-respeaker-xvf3800 flash COM10
```

或者直接运行：

```sh
idf.py -B build-seeed-respeaker-xvf3800 \
  -DIDF_TARGET=esp32s3 \
  -DSDKCONFIG=build-seeed-respeaker-xvf3800/sdkconfig \
  -DSDKCONFIG_DEFAULTS="sdkconfig.defaults;devices/sdkconfig.seeed-respeaker-xvf3800" \
  -p COM10 flash
```

- 将 `COM10` 替换为 XIAO 的端口（macOS 上为 `ls /dev/cu.usbmodem*`，Linux 上为 `/dev/ttyACM*`）。
- 如果烧录无法连接：按住 **BOOT**，点按 **RESET**，松开 **BOOT**，然后重试。
- 关闭任何占用该串口的串口监视器。
- 重新烧录会保留配对/Wi-Fi 信息。`erase-flash` 会清除所有内容，包括 NVS 和配对信息。

## 配对与测试

1. Muse 应用 → **Settings → Devices → Developer mode ON**。
2. **Add Device (+)** → `MuseGadget-respeaker-XXXXXX`。
3. **按下** 按钮（或 Grove Button）进行确认。
4. 选择 **2.4 GHz** Wi-Fi 并输入密码。
5. 等待出现 **绿色灯环**。
6. **长按** 按钮，说话，然后松开：
   - `link.voice: recorded X.Xs`
   - `muse_chat_session: TTS: N chars`
   - `link.voice: reply: X.Xs of speech`
   - 回复会通过扬声器播放，并在应用中显示。
7. **音量：** 让 Muse 调整（“Set volume to 80”），或使用 `voice.configure`。
8. **静音：** 使用 XVF3800 的 Mute 按钮；静音时，该按钮仍保留其配对/设置功能。
9. **重置设置：** 长按按钮 **5 秒** 以清除配对/Wi-Fi 信息。



有用的日志行：

```text
link.xvf3800: AIC3104 outputs powered (DAC 0 dB, HP + line out)
link.xvf3800: XVF3800 firmware 1.0.9; 16 kHz I2S slave, ESP32 is master
link.xvf3800: reSpeaker XVF3800 audio ready
link.voice:   ready
link.ble:     advertising as MuseGadget-respeaker-XXXXXX
muse_chat_session: connected to VM …
muse_chat_session: TTS: N chars
muse_chat_session: reply audio: 16000 Hz, 1 ch, 64 kbps
link.xvf3800: amp on: X0D30=0 X0D31=0 X0D33=1
```

## 安全注意事项

- SDK 令牌随固件（或 NVS）一起提供。将其视为标识符而非密码；如果泄露，请在 `gadgets.muse.ai` 上吊销/轮换。
- TTS 密钥位于 `esp32/build-*/sdkconfig` 中，该文件已被 gitignore。请不要提交它。
- 社区配对没有厂商认证，无法阻止正在进行的 MITM 攻击；请在受信任的网络上进行设置。
- Secure Boot 和闪存加密保持**关闭**；应用使用已提交的开发密钥签名，因此你可以自由重新烧录。
- 建议启用 NVS 加密（`CONFIG_HOMEHUB_NVS_ENCRYPTION`），其密钥会自动从 eFuse HMAC 密钥派生；在存储凭据之前做出决定。
- 除非已启用 Secure Boot，否则不要启用 `CONFIG_HOMEHUB_PAIRING_EFUSE_AUTH`。

## 资源

- 本项目（带有 XVF3800 移植的 fork）：[KasunThushara/muse-gadget-sdk](https://github.com/KasunThushara/muse-gadget-sdk)
- Muse Gadget SDK（上游）：[facebookincubator/muse-gadget-sdk](https://github.com/facebookincubator/muse-gadget-sdk)
- Seeed reSpeaker XVF3800 + XIAO：[入门指南](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_xiao_getting_started/)
- XMOS 固件更新：[固件更新指南](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)
- I2S 播放/录音：[录音与播放](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_xiao_record_playback/)
- I2C 命令列表：[I2C 命令列表](https://wiki.seeedstudio.com/cn/respeaker_xvf_3800_i2c_list/)
- GPIO/GPI 控制：[GPIO 控制](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_xiao_gpio/)
- 厂商固件仓库：[reSpeaker_XVF3800_USB_4MIC_ARRAY](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)
- AssemblyAI TTS：[AssemblyAI TTS API](https://www.assemblyai.com/docs/tts/api-reference/http-api/create-speech-openai)
- Groq TTS：[Groq text-to-speech](https://console.groq.com/docs/text-to-speech)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
