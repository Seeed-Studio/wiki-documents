---
description: 用于 RePhone 的 JavaScript
title: 用于 RePhone 的 JavaScript
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/JavaScript_for_RePhone
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone 可以作为一个学习工具，帮助您开始有趣的项目。目前，RePhone 支持多种开发环境和开发语言，您可以基于 Eclipse IDE 或 Arduino IDE 使用 C/C++ 构建应用程序，也可以使用 Lua 和 JavaScript。

本 Wiki 是一个用户指南，帮助您使用 JavaScript 开始您的 RePhone 项目。

安装驱动和更新固件
----------------------------------

- 要**安装驱动**，请参考 **<a href="/cn/JavaScript_for_RePhone" ><span><font color={'000000'} size={"3"}> Arduino IDE for RePhone Kit</font></span></a>** 的第 2 节。

- 要**更新固件**，请参考 **<a href="/cn/JavaScript_for_RePhone" ><span><font color={'000000'} size={"3"}> Arduino IDE for RePhone Kit</font></span></a>** 的第 3 节。

下载 JavaScript for RePhone 应用程序
-------------------------------------------

**步骤 1.** 前往 **JavaScript for RePhone** 项目的 GitHub 发布页面下载 ***js_for_rephone_xxx.zip***

[下载 JavaScript for RePhone](https://github.com/Seeed-Studio/JavaScript_for_RePhone/releases)

**步骤 2.** 将您的 RePhone 设置为存储模式：**插入电池**并使用 Micro USB 数据线连接到电脑。

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**步骤 3.** 解压 ***js_for_rephone_xxx.zip*** 文件到 RePhone 的 5MB 磁盘中，您还可以将一些音乐文件（mp3 格式）放入磁盘中。在这里，我放入了 'music1.mp3' 和 'music2.mp3'。

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Lua_1.png)

使用 JavaScript Shell
--------------------

**步骤 1.** 按住 RePhone（Xadow GSM+BLE，参见第 2 节第 3 步中的图示）的电源键 ***2 秒*** 以打开设备，然后在设备管理器中识别串口的 COM 号，该串口将显示为 ***MTK USB Modem Port***，请注意 *不同电脑上的 COM 号可能不同*。

通过点击 **开始** 按钮，点击 **控制面板**，点击 **系统和安全**，然后在 **系统** 下点击 **设备管理器** 打开设备管理器。如果系统提示输入管理员密码或确认，请输入密码或提供确认。参见下图：

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Check_ports.png)

**步骤 2.** 我们使用一个串口终端工具，例如 [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)，来访问运行在 RePhone 上的 Lua shell。

如果您使用 PuTTY，请记得启用 ***"implicit CR in every LF"*** 选项。否则，换行会出现问题。因为 RePhone 的 Lua shell 使用 LF ('\n') 作为行尾，而 PuTTY 默认使用 CR LF ("\r\n") 作为行尾。

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Putty_EOL.png)

**步骤 3.** 打开 MTK USB Modem Port（其波特率无关紧要，因为它是一个 USB 虚拟串口），然后输入 "print('hello, world')"，您将看到您的第一个 Lua 代码在 RePhone 上运行。

![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/RePhone_Lua_Shell.png)

如果您在 RePhone 中有一些音乐文件，可以输入 "audio.play('music.mp3')" 来播放它。如果插入了 SIM 卡，可以输入 "gsm.call('phone_number')" 给某人打电话，或者输入 "gsm.text('phone_number', 'message from rephone')" 发送短信。

示例
--------

1.重复播放音乐。

```
function aplay() { audio.play('music.mp3'); }
t = timer.create(10000, aplay)
```

2.自动回复消息。

```
function re(f, c) { print('message:', c, ' from:', f); gsm.text(f, 'Thanks for your message'); }
gsm.on_new_message(re)
```

RePhone 社区
-----------------

[![](https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享想法和项目，并对未来模块的开发提供反馈。于是，我们创建了 RePhone 社区。

现在加入我们 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone)！

我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

资源
---------

- [JavaScript for RePhone 的源代码](https://github.com/Seeed-Studio/JavaScript_for_RePhone)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/JavaScript_for_RePhone -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>