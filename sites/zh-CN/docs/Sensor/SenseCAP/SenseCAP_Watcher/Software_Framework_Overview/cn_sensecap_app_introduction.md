---
description: 深入探讨 Watcher 外观的自定义选项，并探索 SenseCraft 平台提供的各种工具。
title: SenseCraft APP 介绍
image: https://files.seeedstudio.com/wiki/watcher_getting_started/sensecraft_app.webp
slug: /cn/sensecap_app_introduction
sidebar_position: 1
last_update:
  date: 10/18/2024
  author: Citric
---

# SenseCraft APP 指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/30.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher 视频</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github 仓库</font></span></strong>
    </a>
</div><br />

欢迎来到 Watcher 自定义和 SenseCraft 工具的世界！在本文中，我们将深入探讨个性化 Watcher 设备的激动人心的可能性，并探索 SenseCraft APP 提供的强大功能。无论您是希望为 Watcher 打造独特外观的新用户，还是寻求释放设备全部潜力的经验丰富的爱好者，本指南都将为您提供知识和灵感，让您的 Watcher 真正属于您自己。准备好踏上创意之旅，让我们一起揭开 Watcher 表达设计和 SenseCraft APP 设置的秘密。

## 基于蓝牙的 Watcher 设置

这部分设置必须在设备和手机都启用蓝牙的情况下才能使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/31.png" style={{width:250, height:'auto'}}/></div>

### Wi-Fi

Watcher 设备上的 Wi-Fi 设置允许您连接到可用的无线网络，从而访问在线服务。当您需要更新 Watcher 的固件、与 SenseCraft APP 同步数据或将实时监控数据流式传输到云端时，这特别有用。

要在 Watcher 上设置 Wi-Fi，只需导航到 Wi-Fi 设置菜单并扫描可用网络。选择所需的网络，并在提示时输入相应的凭据（SSID 和密码）。连接后，您的 Watcher 将在信号范围内时自动重新连接到已保存的网络，确保稳定可靠的连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/32.png" style={{width:700, height:'auto'}}/></div>

:::note
请注意，Watcher 仅支持连接到 2.4GHz 网络，不支持 5GHz。
:::

### 基本设置

Watcher 设备上的基本设置菜单提供了一系列选项来自定义您的用户体验。其中一个关键功能是控制 Watcher 上的 RGB LED 的能力。您可以根据您的偏好或所处的环境轻松打开或关闭 RGB LED。当您想要节省电池寿命或减少视觉干扰时，这会很有用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/33.png" style={{width:250, height:'auto'}}/></div>

声音设置也可以在基本设置菜单中访问。在这里，您可以调整 Watcher 音频输出的音量以满足您的需求。无论您喜欢响亮清晰的通知还是更微妙的音频体验，您都可以根据自己的喜好微调声音设置。

显示亮度是 Watcher 用户体验的另一个关键方面。基本设置菜单允许您调整 Watcher 显示屏的亮度，确保在各种照明条件下的最佳可见性。通过自定义显示亮度，您可以让 Watcher 在明亮的阳光下更容易阅读，或在低光照情况下更暗，同时在需要时节省电池寿命。

最后，基本设置菜单使您能够设置和管理 Watcher 的日期、时间和时区。准确的计时对于正确的数据记录和与其他设备和服务的同步至关重要。通过设置正确的日期、时间和时区，您可以确保 Watcher 的监控数据准确地加上时间戳并与您的本地时间对齐。

要访问和修改这些设置，只需导航到 Watcher 设备上的基本设置菜单，并使用直观的界面进行所需的更改。

### SenseCraft 远程控制

SenseCraft 远程控制功能是一个关键设置，它决定了您的 Watcher 设备如何与 SenseCraft 云服务通信。启用后，此功能在您的 Watcher 和 SenseCraft 云之间建立连接通道，允许您访问广泛的高级功能和服务，例如基于云的大型语言模型（LLM）和远程通知功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/34.png" style={{width:250, height:'auto'}}/></div>

但是，如果您选择禁用 SenseCraft 远程控制功能，您的 Watcher 将仅通过蓝牙与您的移动设备通信。虽然这对于本地控制和配置很有用，但这也意味着您将失去对强大的基于云的服务和远程通知功能的访问。此外，如果您的 Watcher 移出您移动设备的蓝牙范围，您就有完全失去对 Watcher 控制的风险。

要管理 SenseCraft 远程控制设置，只需导航到您的 Watcher 设备上的相应菜单，并根据需要打开或关闭该功能。通过仔细考虑您的需求并权衡云连接的好处，您可以就如何配置 Watcher 的这一重要设置做出明智的决定。

### HTTP 消息块

Watcher 中的 HTTP 消息块功能是一个本地化的报警服务，与其他报警方法（如 RGB 报警、APP 报警和 UART 报警）一起运行。其主要目的是为用户提供完全本地化的消息推送服务，旨在保护用户隐私。与可能依赖外部平台或服务器的其他报警服务不同，HTTP 消息块专门设计为仅与用户自己的 HTTP 端点配合使用，确保所有数据和通知都保留在用户的本地环境中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/83.png" style={{width:250, height:'auto'}}/></div><br />

要设置 HTTP 消息块，用户需要配置两个重要信息：**HTTP URL** 和 **HTTP Token**。这些详细信息由您自己的 HTTP 服务器或本地部署的软件（如 [Watcher APP](https://wiki.seeedstudio.com/cn/watcher_local_deploy/#software-preparation)）提供。如果您选择使用自己的 HTTP 服务器，请确保正确设置并提供必要的 URL 和令牌。或者，如果您选择 Watcher APP，该软件将为您生成和管理这些配置详细信息。通过将配置数据保留在您自己的服务器上或 Watcher APP 本地，Watcher 为其用户维护了高水平的隐私和安全性，确保敏感信息保持在您的控制之下。

:::caution
如果您想使用完全本地的通知服务而不通过 SenseCraft，那么在配置消息通知时，请**不要**勾选 **APP 推送通知**，否则您的通知仍将通过 SenseCraft 然后推送到您的应用程序。并记住**勾选 HTTP 推送通知选项**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/84.jpg" style={{width:300, height:'auto'}}/></div>
:::

### 设备 AI 服务器

Watcher 中的设备 AI 服务是一个强大的功能，允许用户直接在其本地设备（如 PC 或 Jetson 等高性能机器）上部署 AI 功能。要设置设备 AI 服务，用户需要提供 URL 和 Watcher 服务令牌，这些信息显示在配套的设备 AI 服务软件的用户界面中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/82.png" style={{width:250, height:'auto'}}/></div>

配置完成后，设备 AI 服务使 Watcher 能够利用用户的本地计算资源进行各种 AI 驱动的功能，包括语音交互、任务分解、图像分析和聊天机器人服务。

对于重视在本地运行 AI 服务的灵活性和控制权的用户，Watcher 中的设备 AI 服务提供了一个全面且可定制的解决方案。有关设置和配置设备 AI 服务的详细信息，以及每个 AI 功能的深入说明，可以在**[在本地部署 Watcher 的 AI 功能](https://wiki.seeedstudio.com/cn/watcher_local_deploy/)**中找到。

:::caution
如果您之前点击了私有 Watcher 服务，那么您将无法使用 SenseCraft 的云服务。当您突然发现无法从云服务获取消息时，请检查是否未选择 **SenseCraft**。
:::

### 恢复设备设置

恢复设备设置功能允许您将 Watcher 重置为默认出厂设置，这在遇到无法通过其他方式解决的问题时或当您想要重新开始使用全新状态时非常有用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/35.png" style={{width:250, height:'auto'}}/></div>

但是，使用此功能时必须谨慎，因为您 Watcher 的所有设置，包括自定义设置、历史警报记录和自定义表达式，都将永久丢失。没有内置的备份功能，因此一旦启动恢复过程，您之前的设置和数据就无法恢复。

要访问恢复设备设置功能，请导航到 Watcher 设备上的相应菜单。在确认恢复过程之前，请仔细考虑是否绝对有必要将 Watcher 重置为出厂默认设置。如果您继续操作，您的 Watcher 将恢复到原始状态，准备好让您根据需要重新配置和自定义。

:::tip
恢复设备后，您需要在应用程序中手动删除相应的设备，然后重新添加。
:::

## 其他设置

以下设置不依赖于与手机的蓝牙连接，只需确保 Watcher 和手机都连接到互联网，并且 SenseCraft 远程控制功能已开启。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription2.png" style={{width:250, height:'auto'}}/></div>

### 设备名称和设备组

设备名称和设备组设置允许您个性化您的 Watcher 并组织多个设备以便于管理。通过为您的 Watcher 分配唯一名称，您可以在通过蓝牙连接或通过 SenseCraft APP 管理时快速识别它。如果您拥有多个 Watcher 设备，这特别有用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/37.png" style={{width:250, height:'auto'}}/></div>

此外，您可以将您的 Watcher 分配到特定的设备组，这在管理大量用于不同目的或位置的设备时很有用。例如，您可能为家庭、办公室或户外监控创建单独的设备组。通过逻辑分组您的 Watcher 设备，您可以根据其指定的目的或位置轻松定位、配置和控制它们。

### 订阅

通过订阅，您可以访问我们的高级语言模型功能。无论您想要分析图像还是进行智能对话，我们的平台都能满足您的需求。探索全部功能范围，看看我们的技术如何增强您的体验。点击了解更多！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price.png" style={{width:250, height:'auto'}}/></div>

### 检查更新

检查更新功能确保您的 Watcher 始终运行最新的固件和软件版本。通过定期检查更新，您可以在新功能、性能改进、错误修复和安全增强可用时立即访问它们。

要检查更新，只需导航到您的 Watcher 设备上的检查更新菜单或 SenseCraft APP 内。如果有可用更新，系统将提示您下载并安装它。建议保持您的 Watcher 更新以确保最佳性能、稳定性和安全性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/57.png" style={{width:250, height:'auto'}}/></div>

:::tip
某些 OTA 版本可能需要 Watcher 用户强制更新才能继续使用。这可能是由于修复重大软件错误或后台服务升级。
:::

### 删除检测历史

删除检测历史功能允许您清除存储在 SenseCraft APP 内的历史警报数据。当您想要整理警报历史或保持对最近事件的更集中视图时，这可能很有用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/38.png" style={{width:250, height:'auto'}}/></div>

要删除检测历史，请访问 SenseCraft APP 内的删除检测历史菜单。在确认删除之前，请仔细审查其影响，因为此操作是不可逆的，所有历史警报数据将从 APP 中永久删除。

### 删除设备

删除设备功能用于当您想要从 SenseCraft 账户或蓝牙连接中移除 Watcher 设备时。当您不再需要使用特定的 Watcher、想要转移设备所有权或遇到需要重新开始的持续问题时，这可能是必要的。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/39.png" style={{width:250, height:'auto'}}/></div>

要删除设备，请在 Watcher 的设置或 SenseCraft APP 内找到删除设备选项。在确认删除之前，请确保您已知道此过程是不可逆的。一旦您删除设备，它将不再与您的账户关联，如果您希望将来再次使用它，您需要重新添加它。

:::note
在应用删除设备后，如果您想要重新绑定设备，您还需要在设备设置中执行恢复出厂设置。
:::

## Watcher 动画

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/44.png" style={{width:650, height:'auto'}}/></div>

Watcher 设备提供了一种独特且引人入胜的方式，通过自定义动画来个性化您的监控体验。通过上传您自己的图像，您可以创建定制的表情，反映您的风格、传达特定信息，或者只是为您的 Watcher 状态指示器增添一些乐趣。

### 创建自定义动画

根据您的技能和偏好，有几种方式可以为您的 Watcher 创建自定义动画：

- **使用动画软件**：如果您熟悉 Adobe After Effects 或 Lottie 等动画软件，您可以从头开始创建自己的动画。设计最多 5 帧的动画，请记住每帧将显示大约 500 毫秒。创建动画后，选择最多 5 个关键帧，截取屏幕截图，并使用 SenseCraft APP 上传它们。

- **使用图形设计软件**：如果您更喜欢使用 Figma 或 Adobe Illustrator 等图形设计软件，您可以创建一系列静态图像来形成动画。设计最多 5 帧，请记住每帧将显示大约 500 毫秒。将您的设计导出为单独的 PNG 图像，并使用 SenseCraft APP 上传它们。

- **使用现有的 GIF**：如果您在网上找到了想要用于 Watcher 自定义动画的 GIF，您可以轻松将其转换为一系列 PNG 图像。使用免费的在线工具如 [EZGif](https://www.ezgif.com/split) 将您的 GIF 分割成单独的帧。选择最多 5 帧来最好地表现您想要实现的动画，然后使用 SenseCraft APP 上传这些 PNG 图像。

无论您选择哪种方法，每个图像都应该是 **PNG** 格式，分辨率为 **412x412** 像素，以确保在 Watcher 屏幕上的最佳显示质量。上传后，这些图像将被组合形成无缝动画，用您的个性化表情让您的 Watcher 栩栩如生。

### 转换和调整图像大小

如果您想要的图像还不是 PNG 格式或不符合所需的 412x412 分辨率，您可以使用各种工具轻松转换和调整它们的大小：

- **Adobe Photoshop**：在 Photoshop 中打开您的图像，转到"图像" > "图像大小"，将宽度和高度设置为 412 像素（保持纵横比），并将图像保存为 PNG 文件。

- **GIMP**：在 GIMP 中打开您的图像，导航到"图像" > "缩放图像"，在宽度和高度字段中都输入 412（保持纵横比），并将图像导出为 PNG 文件。

- **在线工具**：使用 [Resize Image](https://www.resizeimage.net) 或 [CloudConvert](https://www.cloudconvert.com) 等网站将您的图像调整为 412x412 像素并转换为 PNG 格式。

### 上传您的自定义动画

一旦您准备好了一系列 PNG 图像，就是时候在您的 Watcher 上让您的自定义动画栩栩如生了。将您的 Watcher 连接到 SenseCraft APP 并导航到"动画"页面。在这里，您会发现几个允许动画自定义的 Watcher 状态，包括**待机**、**聆听**、**说话**、**观察空间**和**问候**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/43.png" style={{width:250, height:'auto'}}/></div>

要替换观察空间或问候状态的动画，只需选择所需的状态并按照提示上传您的 PNG 图像。确保**上传与每个状态示例中显示的相同数量的图像**，以确保无缝的动画体验。

:::caution
上传自定义动画时，请记住每个图像都应该是 **PNG** 格式，分辨率为 **412x412** 像素，以在 Watcher 屏幕上获得最佳显示质量。您上传的图像将替换所选 Watcher 状态的默认动画，让您可以个性化设备的表情，为您的监控体验增添独特的触感。
:::

## 致设计师的呼吁：让您的创意闪耀

在 SenseCraft，我们相信创意和协作的力量能够带来令人难以置信的创新。这就是为什么我们邀请来自各个背景的设计师贡献他们独特的视角和技能，帮助扩展 Watcher 的动画可能性。

如果您是一位对创建引人入胜和富有表现力的动画充满热情的设计师，我们鼓励您参与这个激动人心的机会。通过分享您的创意想法和设计，您可以帮助塑造 Watcher 动画功能的未来，并为更加生动和个性化的用户体验做出贡献。

无论您专精于角色动画、动态图形还是任何其他风格，您的专业知识和想象力都能产生重大影响。我们欢迎传达各种情感的动画，从喜悦和兴奋到平静和沉思，以及展示 Watcher 独特功能和潜力的设计。

要参与其中，只需按照上述指南创建您的自定义动画，并与 SenseCraft 社区分享。您可以直接通过 SenseCraft APP 上传您的设计，或在社交媒体上使用标签 `#WatcherAnimations` 分享。我们迫不及待地想看到我们才华横溢的设计师社区将带来的令人难以置信的想法和设计！

通过共同努力和利用协作的力量，我们可以突破 Watcher 动画功能的可能性边界。所以让您的创意自由驰骋，分享您独特的愿景，加入我们塑造 Watcher 动画未来的行列。我们可以一起为全世界的 Watcher 用户创造更具表现力、更引人入胜和更个性化的监控体验。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/42.png" style={{width:250, height:'auto'}}/></div>

### 展示与灵感

在我们的 Watcher 动画展示中发现创意和灵感的世界！这里是我们庆祝设计师社区令人难以置信的才华和想象力的地方，展示了一些为 Watcher 创建的最令人惊叹和最具创新性的自定义动画。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/45.png" style={{width:1000, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
