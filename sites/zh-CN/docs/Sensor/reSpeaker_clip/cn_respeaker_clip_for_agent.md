---
# 文档类型: project
description: "将 reSpeaker Clip 与 DeepSeek Harness (DSH) 搭配使用进行语音输入。连接设备并准备本地 SenseVoice 识别，将 RTC 实时音频或 SD 录音转换为可编辑的聊天草稿。"
title: "在 DSH 中使用 reSpeaker Clip 进行语音输入"
keywords:
  - reSpeaker Clip
  - DeepSeek Harness
  - DSH
  - SenseVoice
  - 语音转文本
  - RTC
  - BLE
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /respeaker_clip_for_agent
sku: 100020126
last_update:
  date: 11/20/2026
  author: Wang Kunpeng
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_for_agent/
---

# 在 DSH 中使用 reSpeaker Clip 进行语音输入

将 reSpeaker Clip 与 DeepSeek Harness (DSH) 搭配使用进行语音输入。连接设备并准备本地 SenseVoice 识别，将 RTC 实时音频或 SD 录音转换为可编辑的聊天草稿。


## 1. 准备 Clip 设备

在本指南中，RTC 指的是 Clip 通过 BLE 进行的实时音频传输。SD 模式会将录音保存在 Clip 上，并在录音结束后通过蓝牙进行同步。

要使用设备按键进行 RTC 输入，请按照[固件烧录指南](/cn/respeaker_clip_firmware_quick_start)从 `clip_agent` 分支烧录固件。对于此处描述的工作流程，非 RTC（SD）模式不需要进行这一步额外的固件更新。

[固件仓库，clip_agent 分支](https://github.com/Ant-wkp/reSpeaker_Clip/tree/clip_agent)



## 2. 安装插件并连接设备

1. **安装插件**

   在 DSH 中打开 **Plugins → Add plugin**，输入 `dsh-clip-for-agent`，安装并启用插件。如果出现提示，请在继续之前重启 DSH。

   [npm 包](https://www.npmjs.com/package/dsh-clip-for-agent) · [GitHub 仓库](https://github.com/Ant-wkp/dsh-clip-for-agent)

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-1.jpg" alt="pir" width={1080} height="auto" /></p>

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-2.jpg" alt="pir" width={1080} height="auto" /></p>

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-3.jpg" alt="pir" width={1080} height="auto" /></p>
2. **连接设备**

   打开电脑的蓝牙和 Clip。在左侧边栏中打开 **Clip**，点击 **Scan for devices**。找到你的设备并点击 **Pair and connect**。完成操作系统显示的所有蓝牙配对提示。
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-4.jpg" alt="pir" width={1080} height="auto" /></p>

3. **准备语音识别**

   在 **Clip → Speech recognition** 下，按照提示安装官方语音识别组件和 SenseVoice 模型。如果出现 **Install official speech recognition**，请直接在 Clip 面板中点击它。如果 DSH 提示你重启，请重启后返回此面板完成模型准备。

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-5.jpg" alt="pir" width={1080} height="auto" /></p>

## 3. 通过语音输入文本

在 **Clip → Recording results → Recording mode** 下，选择 **RTC live audio** 或 **SD recording (sync on stop)**。然后打开你希望输入文本的聊天窗口。

1. **RTC 模式**

   此模式具有更低的输入延迟，并需要上文所述的 `clip_agent` 固件。双击设备按键开始语音输入，再次双击停止。插件会在录音过程中接收音频，并在录音结束后进行解码和转写。

2. **非 RTC（SD）模式**

   长按设备按键开始录音，再次长按停止。音频会先保存在 Clip 上，然后通过蓝牙传输并转写，因此在停止后需要等待更长时间。

你也可以使用聊天输入框中的 Clip 麦克风按钮或 Clip 面板中的录音按钮开始录音。使用屏幕上的停止按钮结束录音。


## 故障排查

- **扫描中未出现设备。** 确认蓝牙和 Clip 已打开，将 Clip 靠近电脑，然后重新扫描。
- **模型尚未就绪。** 打开 **Clip → Speech recognition** 检查下载进度或按提示重试。请等待模型就绪后再开始录音。
- **SD 同步或转写失败。** 在 **Clip → Recording results** 下重试。重新连接设备后，你也可以选择 **Sync latest SD recording**。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
