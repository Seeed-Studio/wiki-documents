---
description: reSpeaker Clip 是一款开放式可穿戴 AI 录音设备，支持 360 度拾音、OLED 状态显示、振动反馈、BLE 和 Wi-Fi 连接，并提供开放固件与 SDK，适合语音转写、AI 笔记、会议总结和企业定制语音应用。
title: reSpeaker Clip 入门指南
keywords:
  - reSpeaker
  - AI Recorder
  - SenseCraft Voice
  - Wearable AI Recorder
  - Voice to Text
  - LLM Summary
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /respeaker_clip_getting_started
sku: 100020126
last_update:
  date: 6/30/2026
  author: Ray
createdAt: '2026-06-30'
updatedAt: '2026-07-06'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_getting_started/
---

# reSpeaker Clip 入门指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

reSpeaker Clip 是一款开放式可穿戴 AI 录音设备，面向零售、会议、采访、课堂、服务培训等需要高质量语音记录与后续整理的场景。它内置双 PDM 麦克风，可实现最高 3 米范围内的 360 度全向拾音，并结合独立录音、移动端管理、AI 转写与总结能力，帮助用户快速完成从现场录音到内容沉淀的完整流程。

reSpeaker Clip 同时具备开放硬件和开发者友好的产品定位。它提供开源固件、Demo App 和 SDK 支持，开发者可以深度自定义设备行为和应用逻辑；企业也可以将它接入自有办公系统、私有化部署的大语言模型或语音分析流程中，构建符合自身数据安全要求的 AI 语音应用。

reSpeaker Clip 可配合 SenseCraft Voice App 和云端服务使用，也可面向本地或云端 AI 模型进行集成。用户可以通过 App 完成设备配对、Wi-Fi 配网、录音文件管理、音频转写、AI 总结、自定义模板和问答检索等操作。

:::note
本文档为 reSpeaker Clip Wiki 初稿框架。部分 SDK 地址、协议文档和资源包链接需要在产品资料确认后补充。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 即刻购买 </font></span></strong>
    </a>
</div>

## 产品概述

reSpeaker Clip 的核心定位是开放式可穿戴 AI 录音设备。它不仅可以作为随身录音工具，也可以作为企业服务培训、访谈记录、会议纪要和现场沟通复盘的语音数据入口。

设备采用紧凑型可穿戴形态，内置 2GB 存储空间，可在不依赖手机的情况下独立录音。机身配备可编程 0.5 英寸 OLED 屏幕和振动反馈，用户可以通过屏幕、按键和触觉提示快速了解录音状态、标记重点片段，并在不同录音模式之间切换。

### 产品特点

- **360 度拾音，最远 3 米录音范围**：双高性能 PDM 麦克风支持全向拾音，适合会议、采访、门店沟通等多人对话场景。
- **双录音模式**：可根据环境选择不同录音模式，兼顾日常随身记录和多人会议记录。
- **独立录音与本地存储**：内置 2GB 存储空间，即使手机不在身边，也可以作为独立录音设备使用。
- **OLED 显示与振动反馈**：0.5 英寸 OLED 屏幕用于显示设备状态，振动反馈让录音控制更直观。
- **开放固件与完整 SDK**：支持开发者自定义设备行为、按键逻辑、显示内容和应用侧工作流。
- **AI 转写与总结**：可结合云端或本地 AI 模型，用于语音转文字、AI 笔记、会议纪要和语音问答。
- **面向企业集成**：可接入企业内部系统或私有化 LLM，适合对数据安全和流程定制有要求的业务场景。

### 规格参数

本章节用于汇总 reSpeaker Clip 的硬件规格、音频参数、物理尺寸和续航。以下内容需根据最终产品规格书补充。

#### 硬件规格

| 规格 | 详情 |
| --- | --- |
| 主控 | nRF5340+nRF7002 |
| 显示屏 | 0.5 英寸 88*48 OLED |
| 麦克风 | 双 PDM，最高 16Khz 采样率 |
| 音频输出 | 降噪音频 |
| 连接方式 | 蓝牙（BLE 5.3），<br />Wi-Fi（用于高速音频导出） |
| 内部存储 | 2GB（可存储约 250+ 小时<br />压缩音频） |
| 电池续航 | 14-18 小时连续录音 |
| 交互 | Action Button，振动马达 |
| 充电接口 | 4-pin Magnetic |

#### 音频参数

| 项目 | 参数 |
| --- | --- |
| 麦克风 | 双 PDM 麦克风 |
| 采样率 | 最高 16Khz |
| 拾音方向 | 360 度全向拾音 |
| 拾音范围 | 最高 3 米 |
| 音频输出 | 降噪单声道音频 |
| 压缩音频格式 | Opus mono，32kbps |
| 音频存储 | 2GB 可存储约 250+ 小时压缩音频 |
| 连续录音时间 | 14-18 小时 |

#### 物理参数

| 项目 | 参数 |
| --- | --- |
| 显示屏 | 0.5 英寸 88*48 OLED |
| 内部存储 | 2GB |
| 交互 | Action Button，振动马达 |
| 充电方式 | 磁吸充电底座 |
| 充电接口 | 4-pin Magnetic |
| 充电底座供电接口 | USB-C |
| 佩戴方式 | 磁吸、领夹、挂绳 |
| 使用温度提示 | 避免在 -20°C 至 60°C 极端温度下使用 |

### 目标场景

- 零售门店服务记录与培训复盘
- 会议、访谈、课堂等长音频记录
- 客户沟通、销售拜访、服务质检等业务场景
- 需要将语音内容转换为结构化文本和总结的工作流

### 核心能力

- 双 PDM 麦克风 360 度拾音
- 独立录音
- 2GB 机身存储
- 0.5 英寸 OLED 状态显示
- 振动反馈
- BLE 与 Wi-Fi 连接
- AI 音频转写
- AI 总结与结构化提炼
- 多种佩戴方式
- 移动端文件管理
- SenseCraft Voice App 与云端服务支持
- 开源固件、Demo App 与 SDK 支持

### 硬件概览

reSpeaker Clip 采用便携式夹扣形态，顶部集成 OLED 显示屏、双麦克风和 Action Button，底部与充电底座均配备磁吸充电触点，充电底座通过 USB-C 接口供电，便于设备在桌面充电和随身录音之间快速切换。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_hardware_cropped.jpg" alt="reSpeaker Clip 硬件示意图" width={680} height="auto" /></p>

### 开箱清单

<div style={{width: '100%', overflowX: 'auto'}}>
  <table style={{display: 'table', width: '680px', maxWidth: '100%', margin: '0 auto'}}>
    <thead>
      <tr>
        <th>项目</th>
        <th style={{textAlign: 'center'}}>数量</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>reSpeaker Clip 主机</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>便携式录音设备</td>
      </tr>
      <tr>
        <td>磁吸领夹</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>用于衣物夹持佩戴</td>
      </tr>
      <tr>
        <td>磁吸贴片</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>用于磁吸固定</td>
      </tr>
      <tr>
        <td>充电底座</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>用于设备充电</td>
      </tr>
      <tr>
        <td>0.5m Type-C 线</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>用于充电底座供电</td>
      </tr>
      <tr>
        <td>挂绳</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>用于挂绳佩戴</td>
      </tr>
    </tbody>
  </table>
</div>

## 快速入门

本章节介绍从设备准备、App 连接、开始录音到 AI 总结的基本流程。首次使用时，建议按顺序完成以下步骤。

### 设备准备

1. 将 reSpeaker Clip 放入充电底座。
2. 使用 Type-C 线连接电源适配器或电脑 USB 接口。
3. 等待设备完成充电。
4. 长按电源键开机。
5. 根据使用场景选择佩戴方式。

### 佩戴方式

reSpeaker Clip 支持磁吸固定、领夹佩戴和挂绳佩戴三种方式，可根据会议、采访、服务培训或移动记录等场景灵活选择。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_wearing_methods.jpg" alt="reSpeaker Clip 佩戴方式" width={640} height="auto" /></p>

### SenseCraft Voice App

#### 下载 App

使用手机扫描下方二维码，或打开 [SenseCraft Voice App 下载页面](https://sensecraft-voice-download.seeed.cc/) 下载并安装 App。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_download_qr.png" alt="SenseCraft Voice App 下载二维码" width={360} height="auto" /></p>

#### 连接设备

1. 打开 SenseCraft Voice App 并登录账号。
2. 长按设备侧边按键开机，等待设备进入可连接状态。
3. 在 App 首页点击 **Add Device**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_add_device.jpg" alt="点击 Add Device 添加设备" width={320} height="auto" /></p>

4. App 会自动搜索附近设备。请根据设备上显示的标识符，与 App 扫描结果中的设备名称进行匹配，例如 `Clip EAE0`。确认一致后，点击对应设备右侧的 **Connect**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_scan_device.jpg" alt="选择匹配的 reSpeaker Clip 设备并连接" width={320} height="auto" /></p>

5. 手机弹出蓝牙配对请求后，再次确认名称一致，然后点击 **Pair** 完成配对。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_pair_device.jpg" alt="确认蓝牙配对请求" width={320} height="auto" /></p>

6. 配对完成后，按照 App 页面指引完成后续设置。

:::tip
如果 App 无法发现设备，请先确认设备已经开机且电量充足；如果设备电量过低，请先充电后再尝试配对。同时确认设备处于蓝牙可配对状态，并将手机靠近设备后重新搜索。
:::

### 录制操作

reSpeaker Clip 可通过侧边按键快速控制录音。
- 长按按键可开始或停止录音
- 录音过程中短按按键，可标记当前内容为重点片段。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_recording_operation.png" alt="reSpeaker Clip 录制操作" width={640} height="auto" /></p>

录音过程中，设备会通过屏幕显示和震动反馈提示当前状态。

### 文件管理

录音完成后，可以在 SenseCraft Voice App 中管理音频文件。

- 回放录音
- 剪辑音频
- 通过 Wi-Fi 或 BLE 传输文件
- 导出音频或文本结果
- 查看重点标注片段

### AI 功能

reSpeaker Clip 可结合 SenseCraft Voice App 和云端服务完成音频智能处理。

#### 确认 STT / LLM 服务配置

在使用音频转写、AI 总结或问答检索前，请先进入 App 底部的 **AI CONFIG** 页面，确认 **STT Service** 和 **LLM Service** 均已完成配置。STT 服务用于音频转写，LLM 服务用于摘要生成和问答处理。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_ai_config_stt.jpg" alt="确认 STT Service 配置" width={320} height="auto" /></p>

如果 **STT Service** 显示 `Not configured`，请点击 STT Service 右侧配置入口，进入 STT Providers 页面。根据所使用的转写服务填写 Provider、Base URL、API Key 和 Language，点击 **Test Connection** 测试通过后，再点击 **Save Configuration** 保存配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_stt_provider_form.png" alt="填写并保存 STT 服务配置" width={320} height="auto" /></p>

如果 **LLM Service** 显示 `Not configured`，请继续进入 LLM Providers 页面，点击 **Add New Configuration** 或右上角 `+` 新增服务配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_add.jpg" alt="新增 LLM 服务配置" width={320} height="auto" /></p>

填写 API Key、Base URL 和 Model Name 后，点击 **Test Connection** 测试连接，测试通过后点击 **Save Configuration** 保存配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_form.png" alt="填写并保存 LLM 服务配置" width={320} height="auto" /></p>

#### 音频转写

上传或同步录音后，在文件列表中点击需要处理的录音，进入录音详情页。如果当前录音还没有转写结果，页面会显示 **Transcribe & Summarize** 按钮。点击该按钮即可进入转写与总结设置页。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_entry.png" alt="进入录音详情页并点击 Transcribe & Summarize" width={320} height="auto" /></p>

#### AI 总结

在 **Transcribe & Summarize** 页面中，可以选择总结模板，并确认 Audio Language、STT Model 和 LLM Model。模板用于控制总结输出的结构，例如会议总结、课堂总结或日常对话总结。确认配置后，点击 **Generate Now** 开始转写和总结。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_summary_options.png" alt="选择模板并开始转写和总结" width={320} height="auto" /></p>

#### AI 问答检索

用户可以基于录音转写内容进行问答检索，例如查询会议中提到的任务、时间、产品问题或客户反馈。

### 设备管理

在 App 中可以查看和管理设备状态。

- 电量监控
- 固件版本查看
- OTA 升级
- 设备解绑
- 恢复出厂设置

### 固件更新指南

reSpeaker Clip 支持两种无需调试器的固件更新方式：

1. **蓝牙 OTA**：通过 BLE 将固件包发送到设备，适合日常升级。
2. **Recovery 模式线刷**：让设备进入 USB serial recovery 模式，通过 USB 串口传输固件包并完成更新。

两种方式底层都使用 MCUboot 的 mcumgr Simple Management Protocol（SMP）。其中蓝牙 OTA 通过 BLE 传输，Recovery 线刷通过 USB CDC-ACM 串口传输。reSpeaker Clip 不使用 `dfu-util` 这类原生 USB DFU 流程。

#### 固件文件说明

固件发布包中可能包含以下文件：

| 文件类型 | 说明 | 适用方式 |
| --- | --- | --- |
| `clip-<version>-*-single.*` | 单应用分区升级包，适合只更新 Clip SDK / app 分区 | USB serial DFU |
| `clip-<version>-*-signed.bin` | 已签名的应用固件镜像 | USB serial DFU、BLE OTA |
| `clip-<version>-*-ota.zip` | 多镜像升级包，通常包含 app 和 network core | USB serial DFU、BLE OTA |
| `clip-<version>-*-merged.hex` | 完整镜像，包含 MCUboot、app 和 network core | 需要 J-Link 等调试器烧录 |
| `clip-<version>-*-merged_CPUNET.hex` | network core 单独镜像 | 需要 J-Link 等调试器烧录 |

一般用户通过蓝牙 OTA 升级时优先使用 `-ota.zip`。开发者通过 Recovery 模式线刷时，推荐优先使用带 `single` 后缀的固件包；Clip SDK 的常规改动通常只涉及应用分区，不需要同时更新 network core。`-merged.hex` 和 `-merged_CPUNET.hex` 主要用于开发、生产或调试器烧录场景。

#### 方式一：蓝牙 OTA

蓝牙 OTA 适合设备可以正常开机并且可以通过 BLE 被手机发现的情况。推荐使用手机端 nRF Connect 执行 OTA，电脑端 nRF Connect Desktop 的 BLE 工具通常需要额外的 Nordic BLE adapter。

基本流程如下：

1. 准备 `clip-<version>-*-ota.zip` 固件包。
2. 将固件包发送到手机。
3. 打开手机端 nRF Connect。
4. 通过 BLE 搜索并连接 reSpeaker Clip。
5. 连接成功后，确认页面中可以看到 **SMP Service**。
6. 点击右上角 **DFU** 图标，选择 `-ota.zip` `-signed.bin` 固件包。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_dfu_button.png" alt="手机端 nRF Connect 点击 DFU 按钮" width={320} height="auto" /></p>

7. 在模式选择中保持默认的 **Test and Confirm**，点击 **OK** 开始升级。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_mode.png" alt="蓝牙 OTA 选择 Test and Confirm 模式" width={320} height="auto" /></p>

8. 等待传输、校验和设备自动重启完成。
9. 升级后重新连接设备，并检查固件版本。


:::tip
OTA 过程中请保持手机靠近设备，不要让 nRF Connect 进入后台，也不要让设备被 SenseCraft Voice App 同时连接。
:::

#### 方式二：Recovery 模式线刷

Recovery 模式是面向开发者使用的 USB 线刷模式。该模式通过 USB CDC-ACM 串口使用 MCUboot / mcumgr SMP 协议传输固件，推荐优先使用 `nrfutil mcu-manager` 命令行完成更新。

##### 进入 Recovery 模式

Recovery 模式通过 MCUboot 的 USB serial recovery 提供刷机能力。进入方式如下：

1. 确认 USB 数据线支持数据传输。
2. 将 USB 插入充电底座。
3. 将 reSpeaker Clip 放到底座上，轻微扭动设备，使底座触点与设备触点稳定接触。
4. 当屏幕上出现 USB / 充电相关图标后，长按 **Action Button** 直到屏幕显示 **Recovery Mode**。
5. 看到 **Recovery Mode** 后，表示设备已成功进入 USB serial recovery 模式，并应枚举为一个串口设备：
   - Windows：`COMx`
   - macOS：`/dev/cu.usbmodem*`
   - Linux：`/dev/ttyACM0`

在 Windows 上，设备可能会同时枚举出多个虚拟串口，例如：

```text
Product         reSpeaker Clip DFU
Ports           COM10, vcom: 0
                COM11, vcom: 1
Traits          serialPorts, usb
```

线刷时建议优先尝试 `vcom: 1` 对应的串口，例如上例中的 `COM11`；如果无法连接或上传失败，再切换到另一个串口重试。

:::note
Recovery 模式需要检测到 USB/VBUS。进入该模式前，请先确认底座触点已经稳定接触；如果屏幕没有显示 USB / 充电相关图标，设备可能只有物理放置但没有真正接入 USB。
:::

##### 使用 nrfutil mcu-manager 线刷

nrfutil 是 Nordic 提供的命令行工具。请使用 8.x 及以上版本，并安装 `mcu-manager` 插件。

新版 nrfutil 采用子命令插件机制。首次使用时，请先安装 `device` 和 `mcu-manager` 子命令：

```bash
nrfutil install device
nrfutil install mcu-manager
```

如果执行 `nrfutil device list` 时提示 `nrfutil command device not found`，说明 `device` 子命令尚未安装，请先执行 `nrfutil install device`。

先列出当前串口设备：

```bash
nrfutil device list
```

上传应用分区固件，推荐优先选择带 `single` 后缀的固件包：

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-single.zip \
    --serial-port COMx
```

如果发布包中提供的是已签名应用镜像，也可以上传 `-signed.bin`：

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-signed.bin \
    --serial-port COMx
```

如需完整更新 app + network core，可上传 `-ota.zip`：

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-ota.zip \
    --serial-port COMx
```

上传完成后，执行 reset 让设备应用新固件：

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

其中 `COMx` 需要替换为 Windows 设备管理器或 `nrfutil device list` 中显示的实际串口号。若设备显示多个 `vcom`，建议优先尝试 `vcom: 1` 对应的串口；如果无法连接或上传失败，再切换到另一个串口重试。macOS / Linux 请替换为对应的 `/dev/cu.usbmodem*` 或 `/dev/ttyACM0`。

:::tip
如果刷写进度停在 100% 但工具没有自动退出，请不要反复重新插拔设备。可以先执行：

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

设备重启后再检查固件版本。
:::

#### 更多固件更新方式

如果需要调试器烧录或更多 Recovery 模式排查方式，请参考 reSpeaker Clip 固件更新进阶指南（暂未开放）。

## 开发指南

reSpeaker Clip 面向开发者和企业集成场景时，可通过固件层 SDK、应用层 SDK 和通信协议进行二次开发。

### 固件层 SDK

reSpeaker Clip 固件层基于 nRF Connect SDK / Zephyr RTOS 构建，运行在 nRF5340 + nRF7002 平台上。固件不是单一驱动示例，而是一套围绕录音采集、状态机、BLE / Wi-Fi 通信、文件管理、固件更新和低功耗管理组织起来的设备端框架。

固件层系统框架如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_system_architecture.png" alt="reSpeaker Clip 固件系统框架" width={900} height="auto" /></p>

从开发视角看，固件主要分为以下几层：

- **Application Layer**：负责事件分发、AT Server、按键处理和用户交互状态。
- **Service Layer**：负责 BLE / UDP 传输抽象、文件传输、配置管理和 NVS 存储。
- **Processing Layer**：负责音频采集、SpeexDSP 降噪 / 动态范围处理和 Opus 编码。
- **Hardware Abstraction Layer**：负责 PDM 麦克风、SD FAT32、BLE、Wi-Fi、PMIC 等硬件能力封装。
- **Zephyr RTOS Kernel**：提供 `k_msgq`、`k_sem`、`k_mutex`、`k_thread`、`k_mem_slab` 等内核能力。

典型开发流程是：先部署 Zephyr / nRF Connect SDK 开发环境，再获取 reSpeaker Clip 固件工程，确认 board target 和配置文件，完成编译、烧录、串口日志检查，最后通过 SenseCraft Voice App 或 BLE / Wi-Fi 协议验证录音、文件同步和固件更新功能。

更多固件架构、环境部署、编译烧录和二次开发说明，请参考 reSpeaker Clip 固件层开发指南（暂未开放）。

### 应用层 SDK

应用层 SDK 可用于移动端或上位机应用集成。

| 平台 | 语言 | 状态 |
| --- | --- | --- |
| iOS | Swift | 暂未开放 |
| Android | Kotlin | 暂未开放 |
| Desktop / Server | Python | 暂未开放 |

## 应用

reSpeaker Clip 可用于 To B 业务场景，也可以与企业工具链打通，形成从录音采集、内容转写、智能总结到业务系统沉淀的完整流程。

### 零售服务培训

门店销售和服务人员可以佩戴 reSpeaker Clip 记录客户沟通过程。对话结束后，AI 可根据录音内容生成客户需求摘要和可执行的 To-Do 列表，帮助团队提升服务质量、跟进效率和转化率。

### 会议纪要

在会议场景中，reSpeaker Clip 的 360 度全向拾音可以覆盖多人讨论。用户可以在录音过程中通过按键打点标记重要时间点，会议结束后自动生成结构化纪要、重点内容和行动项。

### 采访与调研

在用户访谈、市场调研和客户拜访中，reSpeaker Clip 可帮助记录原始语音，并将录音整理为可检索、可复盘的文本资料。

### 企业定制

企业可以基于开放 SDK 将 reSpeaker Clip 接入内部办公系统、CRM、知识库、项目管理工具或私有化部署的大语言模型。对于有数据合规要求的组织，也可以构建专属 AI 语音助手和私有语音分析流程。

## Q&A

### 无法开机 / 充电

如果设备无法开机或无法充电，请按以下步骤检查：

- 确认设备已正确放入充电底座，磁吸触点没有偏移。
- 检查 USB-C 线缆和电源适配器是否正常工作。
- 清洁设备底部和充电底座上的磁吸充电触点，避免灰尘或异物影响接触。
- 充电 10 分钟后再尝试长按电源键开机。
- 如果设备仍无响应，请记录设备状态并联系技术支持。

### 蓝牙配对失败

如果手机无法与 reSpeaker Clip 完成蓝牙配对，请尝试：

- 确认设备处于开机状态，并且没有连接到其他手机。
- 打开手机蓝牙权限，并允许 SenseCraft Voice App 使用蓝牙。
- 将手机靠近设备后重新搜索。
- 在手机系统蓝牙列表中删除旧的 reSpeaker Clip 配对记录，然后重新配对。
- 重启设备和 App 后再次尝试。

### 录音文件传输中断

如果录音文件在传输过程中中断，请检查：

- 手机和设备是否保持在较近距离。
- 设备电量是否充足。
- Wi-Fi 或 BLE 连接是否稳定。
- App 是否仍在前台运行。
- 重新连接设备后再次传输文件。若文件较大，建议使用稳定的 Wi-Fi 环境传输。

### Wi-Fi 配网失败

如果设备无法完成 Wi-Fi 配网，请确认：

- Wi-Fi 名称和密码输入正确。
- 路由器未限制新设备接入。
- 手机和设备靠近路由器。
- 当前网络可以正常访问互联网。
- 如果使用企业网络或需要网页认证的公共网络，建议切换到普通家庭或手机热点网络测试。

### App 无法识别设备

如果 SenseCraft Voice App 无法发现设备，请尝试：

- 确认设备已开机并处于可连接状态。
- 确认手机蓝牙、定位或附近设备权限已授权给 App。
- 将手机靠近设备后重新扫描。
- 退出并重新打开 App。
- 重启 reSpeaker Clip 后再次添加设备。

### 固件升级失败处理

如果 OTA 或固件升级失败，请按以下方式处理：

- 确保设备电量充足，升级过程中不要断电。
- 保持手机、设备和网络连接稳定。
- 不要在升级过程中关闭 App 或切换网络。
- 如果升级失败后设备仍可正常启动，请重新进入 App 发起升级。
- 如果设备无法正常启动，请根据后续恢复模式或固件刷写文档进行处理，并联系技术支持。

## 资源

| 资源 | 链接 |
| --- | --- |
| 产品页面 | [reSpeaker Clip Wearable AI Recorder](https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html) |
| SenseCraft Voice App 下载 | [下载页面](https://sensecraft-voice-download.seeed.cc/) |
| 固件下载 | 暂未开放 |
| SDK 仓库 | 暂未开放 |
| 用户手册 | <a href="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_user_manual.pdf" target="_blank" rel="noopener noreferrer">reSpeaker Clip User Manual</a> |
| 规格书 | 暂未开放 |
| 机械图 | 暂未开放 |

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供不同的支持渠道，以确保您使用我们的产品时获得顺畅体验。您可以根据自己的偏好和需求选择以下沟通渠道。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
