---
description: ReSpeaker Core V2 & Wio Link
title: ReSpeaker Core V2 & Wio Link
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_Core_V2_&_Wio_Link
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

这里是关于如何使用 ReSpeaker Core V2 通过 [IFTTT](https://ifttt.com/) 控制 [Wio Link](https://wiki.seeedstudio.com/cn/Wio_Link/) 的教程。

## 1. 设置 ReSpeaker Core v2.0

按照 ReSpeaker Core v2.0 [开箱演示](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/#out-of-box-demo) 来设置 respeaker core 并使用用户名密码登录 alexa。

## 2. 通过 Wio APP 设置 Wio Link

按照 [Wio Link 入门指南](https://wiki.seeedstudio.com/cn/Wio_Link/#get-started) 在 D0 端口连接一个 LED 并设置 Wio APP。

## 3. 设置 IFTTT

- 步骤 1. 注册一个 [IFTTT 账户](https://ifttt.com/join)。
- 步骤 2. 选择 **My Applets**
- 步骤 3. 选择 **New Applet**
- 步骤 4. 点击 **+this**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/this.png)

- 步骤 5. 选择 **amazon alexa** 并使用与 ReSpeaker Core v2.0 相同的亚马逊账户登录。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/alexa.png)

- 步骤 6. 选择 **Say a specific phrase**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/say_a_specific_phase.png)

- 步骤 7. 输入小写字符关键词 **on** 然后点击 **Create Trigger**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/key_word.png)

- 步骤 8. 点击 **+that**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/that.png)

- 步骤 9. 选择 **Seeed Wio** 作为动作服务。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/wio.png)

- 步骤 10. 选择 **on, off or trigger Grove**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/choose_action.png)

- 步骤 11. 选择正确的在线 Grove 模块并选择 **on** 作为 **do**。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/on.png)

- 步骤 12. 按照步骤 3 ~ 步骤 11 添加 **off** 功能。

## 4. 与 Alexa 一起享受乐趣

让我们说 "Alexa trigger on"，我们可以看到 Grove-LED 点亮，当我们说 "Alexa trigger off" 时 LED 熄灭。我们也可以使用 Wio Link 上的其他功能，比如 LED 灯带等等。

:::note
    我们也可以使用 google assistant 与 Wio Link 配合工作。
:::

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>