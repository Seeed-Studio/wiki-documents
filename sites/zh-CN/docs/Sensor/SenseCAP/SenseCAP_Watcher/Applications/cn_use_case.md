---
description: 深入了解 Watcher 的各种应用和用例，展示其在不同监控场景中的多功能性和潜力。
title: 用例
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /cn/use_case
sidebar_position: 1
last_update:
  date: 07/08/2024
  author: Citric
---

# SenseCAP Watcher 能做什么

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg" style={{width:800, height:'auto'}}/></div>

准备踏上一段将重新定义您对智能空间认知的旅程。Watcher，一个突破性的物理AI代理，无缝集成到您的环境中，改变您与周围世界互动和体验的方式。通过利用面部识别、物体检测和多场景感知等先进技术的力量，Watcher创造了更智能、更直观、高度适应性的空间。

在这个wiki中，我们将探索三个变革性应用，展示Watcher作为物理AI代理的巨大潜力。这些应用不仅将展示Watcher的能力，还将激发您构想和开发自己创新解决方案的灵感。

- **Watcher应用#1：为访客指路**：见证Watcher如何通过充当智能向导来革命性地改变访客体验。凭借其面部识别能力，Watcher可以识别访客并为他们提供个性化的方向指引和协助，提高您空间的效率和可访问性。

- **Watcher应用#2：花店的虚拟收银员**：发现Watcher如何通过在无人花店中充当虚拟收银员来改变零售格局。通过检测客户何时准备购买，Watcher可以及时显示二维码以实现无缝自助结账，确保流畅安全的交易过程，同时优化店铺运营。

- **Watcher应用#3：您的一体化传感器 - 跌倒检测、宠物监控和丢失物品警报**：释放Watcher作为一体化传感器解决方案的多功能性。从检测跌倒到监控宠物和提醒您丢失的物品，Watcher适应各种长尾场景，创造更安全、更可靠、高度响应的环境。

当您深入了解这些应用时，您将更深入地理解Watcher作为物理AI代理如何重塑和优化我们居住的空间。无论您是创新者、企业主，还是对技术未来充满热情的人，这个wiki都将为您提供利用Watcher能力和创造更智能、更适应性空间所需的知识和灵感。

加入我们这个变革性的旅程，让我们用Watcher重新定义智能环境的边界！


## 演示1. 为访客指路

在这个应用中，我们将探索如何利用Watcher来增强访客体验，特别是在别墅环境中指导快递人员的情境下。通过战略性地放置两个Watcher设备并配置特定命令，我们可以为指导访客和确保准确包裹投递创建一个无缝高效的流程。

### 步骤1. 第一个Watcher的放置

第一个Watcher应该安装在别墅入口处，位于快递人员容易看到的位置。这个Watcher将作为初始接触点，识别携带包裹的访客的存在，并为他们提供关于在哪里放置包裹的清晰指示。

### 步骤2. 第二个Watcher的放置

第二个Watcher应该位于别墅内指定的包裹存储区域。这个Watcher将负责确认包裹的准确放置，并向快递人员表达感谢。

### 步骤3. 为第一个Watcher配置命令

使用SenseCraft APP，向第一个Watcher发出以下命令：

**如果有人拿着包裹，请说："您好，快递包裹请拿到右边的桌子上，直走3米，谢谢。"**

这个命令确保Watcher为快递人员提供清晰简洁的指示，引导他们到适当的包裹存储区域。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/51.png" style={{width:600, height:'auto'}}/></div>

### 步骤4. 为第二个Watcher配置命令

使用SenseCraft APP，向第二个Watcher发出以下命令：

**如果有人把包裹放在桌子上，说"谢谢"。**

这个命令使第二个Watcher能够确认包裹的成功放置，并向快递人员表达对其努力的感谢。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/52.png" style={{width:600, height:'auto'}}/></div>

Watcher应用#1展示了Watcher设备的战略部署，结合精心制作的命令，如何显著增强访客体验并简化别墅环境中的包裹投递流程。

这个应用证明了Watcher作为物理AI代理的多功能性和潜力，展示了其改变和优化我们日常生活各个方面以及在智能空间中互动的能力。

## 演示 2. 花店的虚拟收银员

在这个应用中，我们将探索 Watcher 如何通过充当虚拟收银员来彻底改变花店的购物体验。通过利用 Watcher 的物体检测功能和 SenseCraft APP，我们可以创建一个无缝高效的自助结账流程，提升客户体验并简化店铺运营。

### 步骤 1. 生成支付二维码

首先使用 PayPal 或其他首选支付提供商等平台生成支付二维码。这个二维码将作为自助结账流程中的关键元素，让客户能够轻松为他们的花卉购买付款。

### 步骤 2. 通过 SenseCraft APP 将二维码上传到 Watcher

访问 SenseCraft APP 并导航到 **Animation** 部分。找到 **Watching Space** 并用生成的支付二维码替换现有的动画。这一步确保 Watcher 在被触发时会显示二维码，实现流畅的自助结账流程。

### 步骤 3. 将 Watcher 安装在三脚架上

为确保最佳性能和稳定性，使用 1/4 螺纹三脚架支架将 Watcher 安装在三脚架上。这种设置允许轻松调整 Watcher 的位置和角度，确保结账区域的清晰可见性。

### 步骤 4. 将 Watcher 放置在结账柜台

将安装在三脚架上的 Watcher 放置在结账柜台，面向客户预期接近付款的区域。确保 Watcher 对柜台有清晰的视野，并能轻松检测到手持花卉的客户。

### 步骤 5. 通过 SenseCraft APP 配置 Watcher 的任务

使用 SenseCraft APP，向 Watcher 发出以下命令：

**当你检测到一个人手持花卉并面向你时，说"请扫描二维码完成您的购买。"**

这个命令指示 Watcher 监控手持花卉的客户，显示上传的支付二维码，并提示他们通过扫描代码启动自助结账流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/53.png" style={{width:600, height:'auto'}}/></div>

### 步骤 6. 实施自助结账流程

在检测到手持花卉的客户后，Watcher 将自动显示支付二维码并触发预配置的语音提示，引导客户扫描代码进行付款。

客户扫描二维码后，将被引导到移动支付界面，在那里他们可以使用首选的支付方式完成交易。


Watcher 应用 #2 展示了 Watcher 作为花店虚拟收银员的变革潜力。通过将 Watcher 的物体检测功能与 SenseCraft APP 相结合，花店老板可以创建无缝高效的自助结账体验，提升客户满意度并优化店铺运营。

这个应用展示了 Watcher 的多功能性和适应性，突出了其在各种零售环境中的革命性潜力。作为物理 AI 代理，Watcher 可以根据不同企业的特定需求进行定制和配置，推动创新并改善整体购物体验。

## 演示 3. 您的全能传感器 -- 跌倒检测、宠物监控和遗失物品警报

在这个应用中，我们将探索 Watcher 作为全能传感器解决方案的多功能性和适应性，能够处理各种长尾场景。通过在不同位置策略性地放置多个 Watcher 设备并配置它们来应对特定情况，我们可以展示 Watcher 在各种环境中增强安全性、保障性和便利性的潜力。

### 场景 1：会议室遗失物品警报

步骤 1：使用 360° 旋转支架将第一个 Watcher 安装在会议室墙上，确保对整个房间的最佳覆盖。

步骤 2：使用 SenseCraft APP，向 Watcher 发出以下指令：

**当您检测到会议室空无一人但桌上有电脑时，向应用发送通知。**

此任务使 Watcher 能够监控会议室，如果有任何贵重物品（如电脑）无人看管，则通过应用向用户发出警报。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/54.png" style={{width:600, height:'auto'}}/></div>

### 场景 2：宠物监控和威慑

步骤 1：使用 1/4 螺纹三脚架支架将第二个 Watcher 安装在三脚架上，并将其放置在花瓶附近或猫咪容易造成损坏的任何区域。

步骤 2：使用 SenseCraft APP 配置以下任务：

**如果您检测到猫，播放音频消息"危险，请远离"**

以阻止猫咪接近。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/55.png" style={{width:600, height:'auto'}}/></div>

步骤 3：将 Watcher 的音量调至最高设置，以有效地惊吓并阻止猫咪进入限制区域。

### 场景 3：父母家中的跌倒检测

步骤 1：将第三个 Watcher 安装在父母家的墙上，确保它能清楚地看到主要生活区域。

步骤 2：通过 SenseCraft APP 分配以下任务：

**如果您检测到有人躺在地上，请立即通知我。**

此设置允许 Watcher 监控潜在的跌倒或事故，并及时警报用户，确保在需要时快速响应和协助。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/56.png" style={{width:600, height:'auto'}}/></div>

Watcher 应用 #3 展示了 Watcher 作为全能传感器解决方案的令人难以置信的多功能性和适应性。通过解决各种长尾场景，如跌倒检测、宠物监控和遗失物品警报，Watcher 展示了其在各种环境中革新安全性、保障性和便利性的潜力。

此应用突出了 Watcher 能够定制和配置以满足特定需求的能力，使其成为个人、家庭和企业的宝贵工具。作为物理 AI 代理，Watcher 无缝集成到不同环境中，为用户提供主动监控、实时警报和安心保障。

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

