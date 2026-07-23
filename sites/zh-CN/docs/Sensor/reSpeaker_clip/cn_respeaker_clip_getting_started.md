---
description: reSpeaker Clip 是一款开放式可穿戴 AI 录音设备，具备 360 度拾音、OLED 状态显示、振动反馈、BLE 与 Wi-Fi 连接，并提供开放固件和 SDK 支持，可用于转写、AI 笔记、会议摘要以及企业语音 AI 应用。
title: reSpeaker Clip 入门指南
keywords:
  - reSpeaker
  - AI 录音设备
  - SenseCraft Voice
  - 可穿戴 AI 录音设备
  - 语音转文本
  - LLM 摘要
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /respeaker_clip
sku: 100020126
last_update:
  date: 6/30/2026
  author: Ray
createdAt: '2026-06-30'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/cn/respeaker_clip/
---

# reSpeaker Clip 入门指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

reSpeaker Clip 是一款开放式可穿戴 AI 录音设备，适用于零售、会议、访谈、课堂、服务培训等需要高质量语音录制和后续内容整理的场景。它集成了双 PDM 麦克风，可实现 360 度全向、最远 3 米拾音，并支持独立录音、移动端文件管理、AI 转写和 AI 总结，帮助用户完成从现场录音到结构化内容的完整工作流程。

reSpeaker Clip 也被设计为开放硬件且对开发者友好的产品。它提供开源固件、演示应用和 SDK 支持，允许开发者自定义设备行为和应用工作流。企业也可以将其与内部办公系统、私有部署的 LLM 或语音分析流水线集成，构建满足数据安全要求的语音 AI 应用。

reSpeaker Clip 可搭配 SenseCraft Voice App 和云服务使用，也可以集成本地或云端 AI 模型。通过 App，用户可以完成设备配对、录音管理、文件导出、音频转写、生成 AI 摘要、自定义模板以及问答检索等操作。

:::note
本文档是 reSpeaker Clip 的初始 Wiki 草稿。一些 SDK URL、协议文档和资源包链接将在产品资料确认后补充。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
    </a>
</div>

## 产品概览

reSpeaker Clip 被定位为一款开放式可穿戴 AI 录音设备。它不仅可以作为便携录音工具使用，还可以作为企业服务培训、访谈记录、会议纪要和现场沟通复盘的语音数据入口。

设备采用小巧的可穿戴形态，内置 2GB 存储空间，可在无需依赖手机的情况下独立录音。同时配备可编程的 0.5 英寸 OLED 显示屏和振动反馈，帮助用户通过屏幕、按键和触感反馈快速查看录音状态、标记重点片段，并在不同录音工作流之间切换。

### 主要特性

- **360 度拾音，最远 3 米**：双高性能 PDM 麦克风支持全向拾音，适用于会议、访谈、零售对话等多说话人场景。
- **双录音工作流**：可根据环境选择合适的录音行为，从日常可穿戴笔记到多人会议均可覆盖。
- **独立录音与本地存储**：内置 2GB 存储空间，即使手机不在身边，设备也可作为独立录音笔使用。
- **OLED 显示与振动反馈**：0.5 英寸 OLED 显示屏用于展示设备状态，振动反馈让录音控制更加直观。
- **开放固件与 SDK**：开发者可以自定义设备行为、按键逻辑、显示内容以及应用端工作流。
- **AI 转写与总结**：可使用云端或本地 AI 模型进行语音转文本、AI 笔记、会议纪要和语音问答。
- **面向企业集成**：可连接企业内部系统或私有部署的 LLM，支持对数据安全和定制化有要求的工作流。

### 规格参数

本节汇总了 reSpeaker Clip 的硬件、音频、物理和电池相关规格。

#### 硬件规格

| 规格 | 详情 |
| --- | --- |
| 主控 | nRF5340+nRF7002 |
| 显示屏 | 0.5 英寸 88*48 OLED |
| 麦克风 | 双 PDM，最高 16 kHz 采样率 |
| 音频输出 | 降噪音频 |
| 连接方式 | Bluetooth (BLE 5.3),<br />Wi-Fi（用于高速音频导出） |
| 内部存储 | 2GB（可存储约 250+ 小时<br />压缩音频） |
| 续航时间 | 持续录音 14-18 小时 |
| 交互方式 | Action Button、振动马达 |
| 充电接口 | 4 针磁吸接口 |

#### 音频参数

| 项目 | 参数 |
| --- | --- |
| 麦克风 | 双 PDM 麦克风 |
| 采样率 | 最高 16 kHz |
| 拾音方向 | 360 度全向拾音 |
| 拾音范围 | 最远 3 米 |
| 音频输出 | 降噪单声道音频 |
| 压缩音频格式 | Opus 单声道，32 kbps |
| 音频存储 | 2GB 可存储约 250+ 小时压缩音频 |
| 持续录音时间 | 14-18 小时 |

#### 物理参数

| 项目 | 参数 |
| --- | --- |
| 显示屏 | 0.5 英寸 88*48 OLED |
| 内部存储 | 2GB |
| 交互方式 | Action Button、振动马达 |
| 充电方式 | 磁吸充电底座 |
| 充电接口 | 4 针磁吸接口 |
| 充电底座电源输入 | USB-C |
| 佩戴方式 | 磁吸固定、领夹夹持、挂绳佩戴 |
| 温度说明 | 避免在 -20°C 至 60°C 的极端温度环境中使用 |

### 目标场景

- 零售服务录音与培训复盘
- 会议、访谈、课堂等长时音频录制
- 客户沟通、销售拜访、服务质量巡检等业务场景
- 需要将语音内容转为结构化文本和摘要的工作流

### 核心能力

- 双 PDM 麦克风，支持 360 度拾音
- 独立录音
- 2GB 内部存储
- 0.5 英寸 OLED 状态显示
- 振动反馈
- BLE 与 Wi-Fi 连接
- AI 音频转写
- AI 总结与结构化提取
- 多种佩戴方式
- 移动端文件管理
- SenseCraft Voice App 与云服务支持
- 开源固件、演示应用和 SDK 支持

### 硬件总览

reSpeaker Clip 采用便携式夹扣形态。顶部集成了 OLED 显示屏、双麦克风和 Action Button。底部和充电底座均带有磁吸充电触点。充电底座通过 USB-C 供电，方便在桌面充电与可穿戴录音之间切换。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_hardware_cropped.jpg" alt="reSpeaker Clip hardware overview" width={680} height="auto" /></p>

### 包装清单

<div style={{width: '100%', overflowX: 'auto'}}>
  <table style={{display: 'table', width: '680px', maxWidth: '100%', margin: '0 auto'}}>
    <thead>
      <tr>
        <th>物品</th>
        <th style={{textAlign: 'center'}}>数量</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>reSpeaker Clip 设备</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>便携录音设备</td>
      </tr>
      <tr>
        <td>磁吸领夹</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>用于将设备固定在衣物上</td>
      </tr>
      <tr>
        <td>磁吸贴片</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>用于磁吸固定</td>
      </tr>
      <tr>
        <td>充电底座</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>用于给设备充电</td>
      </tr>
      <tr>
        <td>0.5 m Type-C 线缆</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>用于为充电底座供电</td>
      </tr>
      <tr>
        <td>挂绳</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>用于挂脖佩戴</td>
      </tr>
    </tbody>
  </table>
</div>

## 快速上手

本节介绍从设备准备、App 连接到录音与 AI 总结的基础流程。首次使用时，请按步骤依次完成。

### 设备准备

1. 将 reSpeaker Clip 放入充电底座。
2. 使用 Type-C 线缆将充电底座连接到电源适配器或电脑 USB 接口。
3. 等待设备充电。
4. 长按电源键开启设备。
5. 根据使用场景选择合适的佩戴方式。

### 佩戴方式

reSpeaker Clip 支持三种佩戴方式：磁吸固定、领夹夹持和挂绳佩戴。可根据会议、访谈、服务培训或移动录音等场景选择最合适的方式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_wearing_methods.jpg" alt="reSpeaker Clip wearing methods" width={640} height="auto" /></p>

### SenseCraft Voice App

#### 下载 App

使用手机扫描下方二维码，或打开 [SenseCraft Voice App 下载页面](https://sensecraft-voice-download.seeed.cc/) 下载并安装 App。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_download_qr.png" alt="SenseCraft Voice App download QR code" width={360} height="auto" /></p>

#### 连接设备

1. 打开 SenseCraft Voice App 并登录账号。
2. 长按设备侧边按键开机，等待设备进入可连接状态。
3. 在 App 首页点击 **Add Device**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_add_device.jpg" alt="Tap Add Device" width={320} height="auto" /></p>

4. App 会自动搜索附近设备。对比设备上显示的标识与 App 中显示的设备名称，例如 `Clip EAE0`。确认名称一致后，点击对应设备的 **Connect** 进行连接。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_scan_device.jpg" alt="Select and connect to the matching reSpeaker Clip device" width={320} height="auto" /></p>

5. 当手机上出现蓝牙配对请求时，再次确认名称并点击 **Pair**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_pair_device.jpg" alt="确认蓝牙配对请求" width={320} height="auto" /></p>

6. 配对完成后，按照应用内的指引完成剩余的设置。

:::tip
如果应用无法找到设备，请先确认设备已开机且电量充足。如果电量较低，请先为设备充电后再进行配对。同时确保设备处于蓝牙配对状态，将手机靠近设备后重新扫描。
:::

### 录音操作

reSpeaker Clip 可以通过侧边按键快速控制录音。

- 长按按键开始或停止录音。
- 录音过程中，短按一次按键可将当前片段标记为重要。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_recording_operation.png" alt="reSpeaker Clip 录音操作" width={640} height="auto" /></p>

录音过程中，设备会通过屏幕显示和振动反馈来指示当前状态。

### 文件管理

录音完成后，你可以在 SenseCraft Voice App 中管理音频文件。

- 回放录音
- 裁剪音频
- 通过 Wi-Fi 或 BLE 传输文件
- 导出音频或文本结果
- 查看已标记的重要片段

### AI 功能

reSpeaker Clip 可以配合 SenseCraft Voice App 和云端服务进行智能音频处理。

#### 确认 STT / LLM 服务配置

在使用音频转写、AI 总结或问答检索前，打开应用底部的 **AI CONFIG** 页面，确认 **STT Service** 和 **LLM Service** 都已配置。STT 服务用于音频转写，LLM 服务用于生成摘要和处理问答。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_ai_config_stt.jpg" alt="确认 STT 服务配置" width={320} height="auto" /></p>

如果 **STT Service** 显示 `Not configured`，点击 STT Service 右侧的配置入口进入 STT Providers 页面。根据你使用的转写服务填写 Provider、Base URL、API Key 和 Language。点击 **Test Connection**，测试通过后点击 **Save Configuration**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_stt_provider_form.png" alt="填写并保存 STT 服务配置" width={320} height="auto" /></p>

如果 **LLM Service** 显示 `Not configured`，继续进入 LLM Providers 页面，点击 **Add New Configuration** 或右上角的 `+` 按钮添加新的服务配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_add.jpg" alt="添加 LLM 服务配置" width={320} height="auto" /></p>

填写 API Key、Base URL 和 Model Name 后，点击 **Test Connection**。测试通过后点击 **Save Configuration**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_form.png" alt="填写并保存 LLM 服务配置" width={320} height="auto" /></p>

#### 音频转写

上传或同步录音后，在文件列表中点击你想处理的录音进入录音详情页。如果该录音尚未生成转写文本，页面会显示 **Transcribe & Summarize** 按钮。点击该按钮进入转写和总结设置页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_entry.png" alt="打开录音并点击 Transcribe & Summarize" width={320} height="auto" /></p>

#### AI 总结

在 **Transcribe & Summarize** 页面，你可以选择一个总结模板，并确认音频语言、STT Model 和 LLM Model。模板控制摘要输出的结构，例如会议总结、课堂总结或日常对话总结。确认配置后，点击 **Generate Now** 开始转写和总结。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_summary_options.png" alt="选择模板并开始转写和总结" width={320} height="auto" /></p>

#### AI 问答检索

用户可以基于录音转写文本进行问答检索，例如查询会议中提到的任务、时间点、产品问题或客户反馈等内容。

### 设备管理

在应用中，你可以查看和管理设备状态。

- 电量监控
- 固件版本检查
- OTA 升级
- 设备解绑
- 恢复出厂设置

### 固件更新指南

reSpeaker Clip 支持两种无需调试探针的固件更新方式：

1. **Bluetooth OTA**：通过 BLE 将固件包发送到设备。适用于日常更新。
2. **恢复模式烧录**：将设备置于 USB 串口恢复模式，通过 USB 串口传输固件包。

这两种方式都使用 MCUboot 的 mcumgr Simple Management Protocol (SMP)。Bluetooth OTA 使用 BLE 传输，而恢复模式烧录使用 USB CDC-ACM 串口传输。reSpeaker Clip 不使用 `dfu-util` 等原生 USB DFU 流程。

#### 固件文件类型

固件发布包中可能包含以下文件：

| 文件类型 | 描述 | 用途 |
| --- | --- | --- |
| `clip-<version>-*-single.*` | 单应用分区更新包，适用于仅更新 Clip SDK / app 分区 | USB 串口 DFU |
| `clip-<version>-*-signed.bin` | 已签名的应用固件镜像 | USB 串口 DFU、BLE OTA |
| `clip-<version>-*-ota.zip` | 多镜像更新包，通常包含 app 和网络核 | USB 串口 DFU、BLE OTA |
| `clip-<version>-*-merged.hex` | 包含 MCUboot、app 和网络核的完整镜像 | 需要 J-Link 等调试器 |
| `clip-<version>-*-merged_CPUNET.hex` | 仅网络核镜像 | 需要 J-Link 等调试器 |

对于常规的 Bluetooth OTA 更新，优先使用 `-ota.zip`。对于通过恢复模式进行的开发者烧录，优先选择带有 `single` 后缀的固件包。典型的 Clip SDK 变更通常只影响应用分区，无需更新网络核。`-merged.hex` 和 `-merged_CPUNET.hex` 主要用于开发、生产或基于调试器的烧录。

#### 方法一：Bluetooth OTA

当设备可以正常启动并能通过 BLE 被手机发现时，适合使用 Bluetooth OTA。推荐使用手机端 nRF Connect 应用进行 OTA。桌面端 nRF Connect 中的 BLE 工具通常需要额外的 Nordic BLE 适配器。

基本流程：

1. 准备 `clip-<version>-*-ota.zip` 固件包。
2. 将固件包发送到手机。
3. 在手机上打开 nRF Connect。
4. 通过 BLE 搜索并连接 reSpeaker Clip。
5. 连接后，确认可以看到 **SMP Service**。
6. 点击右上角的 **DFU** 图标，并选择 `-ota.zip` 或 `-signed.bin` 固件包。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_dfu_button.png" alt="在手机 nRF Connect 中点击 DFU 按钮" width={320} height="auto" /></p>

7. 保持默认的 **Test and Confirm** 模式，并点击 **OK** 开始更新。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_mode.png" alt="为 Bluetooth OTA 选择 Test and Confirm 模式" width={320} height="auto" /></p>

8. 等待传输、验证和设备自动重启完成。
9. 重新连接设备并检查固件版本。

:::tip
OTA 过程中，请保持手机靠近设备，不要将 nRF Connect 置于后台，并确保设备没有同时连接 SenseCraft Voice App。
:::

#### 方法二：恢复模式烧录

恢复模式是一种面向开发者的 USB 烧录模式。它通过 USB CDC-ACM 串口，使用 MCUboot / mcumgr SMP 协议传输固件。推荐使用 `nrfutil mcu-manager` 命令行流程。

##### 进入恢复模式

恢复模式通过 MCUboot USB 串口恢复提供烧录能力。进入该模式的步骤如下：

1. 确认 USB 线缆支持数据传输。
2. 将 USB 线缆插入充电底座。
3. 将 reSpeaker Clip 放到充电底座上，并轻轻旋转设备，使充电触点牢固接触。
4. 当屏幕显示 USB / 充电图标后，长按 **Action Button**，直到屏幕显示 **Recovery Mode**。
5. 当屏幕显示 **Recovery Mode** 时，设备已成功进入 USB 串口恢复模式，并应枚举为一个串口：
   - Windows：`COMx`
   - macOS：`/dev/cu.usbmodem*`
   - Linux：`/dev/ttyACM0`

在 Windows 上，设备可能会枚举出多个虚拟串口，例如：

```text
Product         reSpeaker Clip DFU
Ports           COM10, vcom: 0
                COM11, vcom: 1
Traits          serialPorts, usb
```

进行烧录时，优先尝试对应 `vcom: 1` 的串口，例如上例中的 `COM11`。如果连接或上传失败，再尝试另一个串口。

:::note
恢复模式需要 USB/VBUS 检测。在进入该模式前，请确保充电底座触点连接牢固。如果屏幕没有显示 USB / 充电图标，设备可能只是物理上放在底座上，但实际上并未连接到 USB。
:::

##### 使用 nrfutil mcu-manager 烧录

nrfutil 是 Nordic 的命令行工具。请使用 8.x 或更高版本，并安装 `mcu-manager` 插件。

较新的 nrfutil 版本使用子命令插件机制。首次使用时，请安装 `device` 和 `mcu-manager` 子命令：

```bash
nrfutil install device
nrfutil install mcu-manager
```

如果 `nrfutil device list` 报告 `nrfutil command device not found`，说明尚未安装 `device` 子命令。请先运行 `nrfutil install device`。

列出当前串口设备：

```bash
nrfutil device list
```

上传应用分区固件。优先选择带有 `single` 后缀的固件包：

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-single.zip \
    --serial-port COMx
```

如果发布包提供了已签名的应用镜像，你也可以上传 `-signed.bin`：

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-signed.bin \
    --serial-port COMx
```

如需完整的应用 + 网络核更新，请上传 `-ota.zip`：

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-ota.zip \
    --serial-port COMx
```

上传完成后，重启设备以应用新固件：

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

将 `COMx` 替换为 Windows 设备管理器或 `nrfutil device list` 中显示的实际串口号。如果设备显示多个 `vcom` 端口，优先尝试对应 `vcom: 1` 的端口。如果连接或上传失败，请切换到另一个端口再试。在 macOS / Linux 上，请使用 `/dev/cu.usbmodem*` 或 `/dev/ttyACM0`。

:::tip
如果烧录进度停留在 100% 且工具没有自动退出，请不要反复拔插设备电源。运行：

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

然后在设备重启后检查固件版本。
:::

#### 更多固件更新方式

关于基于调试器的烧录方式或更多恢复模式故障排查方法，请参考 reSpeaker Clip 高级固件更新指南（即将推出）。

## 开发指南

对于开发者和企业集成场景，reSpeaker Clip 可以通过固件 SDK、应用 SDK 和通信协议进行扩展。

### 固件 SDK

reSpeaker Clip 固件基于 nRF Connect SDK / Zephyr RTOS 构建，运行在 nRF5340 + nRF7002 平台上。它不是单一的驱动示例，而是围绕音频采集、状态机、BLE / Wi-Fi 通信、文件管理、固件更新和低功耗管理组织的设备端框架。

固件系统架构：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_system_architecture.png" alt="reSpeaker Clip firmware system architecture" width={900} height="auto" /></p>

从开发视角来看，固件主要分为以下几层：

- **应用层**：处理事件分发、AT Server、按键处理和用户交互状态。
- **服务层**：处理 BLE / UDP 传输抽象、文件传输、配置管理和 NVS 存储。
- **处理层**：处理音频采集、SpeexDSP 降噪 / 动态范围处理以及 Opus 编码。
- **硬件抽象层**：封装 PDM 麦克风、SD FAT32、BLE、Wi-Fi、PMIC 等硬件能力。
- **Zephyr RTOS 内核**：提供 `k_msgq`、`k_sem`、`k_mutex`、`k_thread` 和 `k_mem_slab` 等内核原语。

一个典型的开发流程是：搭建 Zephyr / nRF Connect SDK 环境，获取 reSpeaker Clip 固件工程，确认板级目标和配置文件，构建并烧录固件，查看串口日志，最后通过 SenseCraft Voice App 或 BLE / Wi-Fi 协议验证录音、文件同步和固件更新。

关于更多固件架构、环境搭建、构建、烧录和二次开发细节，请参考 reSpeaker Clip 固件开发指南（即将推出）。

### 应用 SDK

应用 SDK 可用于移动应用或主机端应用集成。

| 平台 | 语言 | 状态 |
| --- | --- | --- |
| iOS | Swift | 即将推出 |
| Android | Kotlin | 即将推出 |
| Desktop / Server | Python | [可用](/cn/respeaker_clip_basic_sdk_guide) |

## 应用场景

reSpeaker Clip 可用于 To B 商业场景，并与企业工具链集成，形成从音频采集、转写到智能总结和业务系统归档的完整工作流。

### 零售服务培训

零售销售和服务人员可以佩戴 reSpeaker Clip 记录与客户的对话。对话结束后，AI 可以从录音中生成客户需求总结和可执行待办事项，帮助团队提升服务质量、跟进效率和转化率。

### 会议纪要

在会议场景中，reSpeaker Clip 的 360 度全向拾音可以覆盖多人讨论。用户可以在录音过程中通过按键标记关键时刻，会后自动生成结构化会议纪要、重点和行动项。

### 访谈与调研

在用户访谈、市场调研和客户走访中，reSpeaker Clip 帮助采集原始语音数据，并将录音整理为可检索、可回顾的文字资料。

### 企业定制

企业可以利用开放 SDK 将 reSpeaker Clip 与内部办公系统、CRM、知识库、项目管理工具或私有部署的 LLM 集成。对于有数据合规要求的组织，也可以构建专属的 AI 语音助手和私有语音分析工作流。

## 常见问答

### 无法开机 / 充电

如果设备无法开机或充电，请检查以下内容：

- 确认设备已正确放入充电底座，磁吸触点没有错位。
- 检查 USB-C 线缆和电源适配器是否工作正常。
- 清洁设备底部和充电底座上的磁吸充电触点，避免灰尘或异物影响接触。
- 先充电 10 分钟，然后再次长按电源键。
- 如果设备仍无响应，请记录设备状态并联系技术支持。

### 蓝牙配对失败

如果手机无法与 reSpeaker Clip 配对，请尝试以下操作：

- 确认设备已开机，且未连接到其他手机。
- 在手机上开启蓝牙权限，并允许 SenseCraft Voice App 使用蓝牙。
- 将手机靠近设备后重新扫描。
- 在手机系统蓝牙列表中删除旧的 reSpeaker Clip 配对记录，然后重新配对。
- 重启设备和应用后再尝试。

### 录音文件传输中断

如果录音文件传输过程中中断，请检查以下内容：

- 保持手机和设备之间的距离足够近。
- 确认设备电量充足。
- 检查 Wi-Fi 或 BLE 连接是否稳定。
- 保持应用在前台运行。
- 重新连接设备并再次传输文件。对于大文件，请使用稳定的 Wi-Fi 环境。

### Wi-Fi 配网失败

如果设备无法完成 Wi-Fi 配网，请确认以下内容：

- Wi-Fi 名称和密码是否正确。
- 路由器是否阻止了新设备接入。
- 手机和设备是否靠近路由器。
- 当前网络是否可以正常访问互联网。
- 如果你使用的是需要网页认证的企业网络或公共网络，请切换到普通家庭网络或手机热点进行测试。

### App 无法发现设备

如果 SenseCraft Voice App 无法发现设备，请尝试以下操作：

- 确认设备已开机并处于可连接状态。
- 确认已为应用授予蓝牙、定位或附近设备权限。
- 将手机靠近设备后重新扫描。
- 退出并重新打开应用。
- 重启 reSpeaker Clip 并重新添加设备。

### 固件更新失败

如果 OTA 或固件更新失败，请尝试以下操作：

- 确保设备电量充足，并在更新过程中不要断电。
- 保持手机、设备和网络连接稳定。
- 更新过程中不要关闭应用或切换网络。
- 如果失败后设备仍能正常启动，请打开应用重新发起更新。
- 如果设备无法正常启动，请按照后续的恢复模式或固件烧录文档操作，并联系技术支持。

## 资源

| 资源 | 链接 |
| --- | --- |
| 产品页面 | [reSpeaker Clip 可穿戴 AI 录音笔](https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html) |
| SenseCraft Voice App 下载 | [下载页面](https://sensecraft-voice-download.seeed.cc/) |
| 固件下载 | 即将推出 |
| SDK 仓库 | 即将推出 |
| 用户手册 | <a href="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_user_manual.pdf" target="_blank" rel="noopener noreferrer">reSpeaker Clip 用户手册</a> |
| 数据手册 | 即将推出 |
| 机械图纸 | 即将推出 |

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
