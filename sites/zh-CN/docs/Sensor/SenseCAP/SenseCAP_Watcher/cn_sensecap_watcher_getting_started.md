---
description: SenseCAP Watcher 是一个 AI 监控器，帮助您监控空间内的异常情况并采取行动。只需对 Watcher 说话来发出命令，当事件发生时它将执行您所需的任务。
title: 快速入门指南
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg
slug: /cn/getting_started_with_watcher
sidebar_position: 2
last_update:
  date: 10/17/2024
  author: Citric
---

# SenseCAP Watcher 快速入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>

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
</div>

## 快速入门指南视频

这是 SenseCAP Watcher 快速入门指南，将帮助您开箱并首次上手使用设备。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yufEUFEB0Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 简介

SenseCAP Watcher 是一个 AI 监控器，帮助您监控空间内的异常情况并采取行动。只需对 Watcher 说话来发出命令，当事件发生时它将执行您所需的任务。

作为智能建筑/智能家居系统的新成员，SenseCAP Watcher 与当前的传感器和执行器相比更加智能。它能理解空间内发生的情况，然后相应地采取行动。

## 必须完成的步骤

在使用 Watcher 作为空间助手之前，我们必须确保成功执行以下三个步骤，这是所有后续步骤的基础。

### 步骤 1. 安装包装

Watcher 配有独特的包装，可兼作时尚的日历式支架。通过将 Watcher 放置在此支架内，您可以为家中创造一个有吸引力的装饰。请按照下面的分步说明操作，并参考随附的视频，了解如何将 Watcher 安装在其支架中的可视化指南。

<div class="table-center">
<iframe width="760" height="415" src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher-packaging.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 步骤 2. 开机

:::caution
请使用与 Watcher 兼容的电源插头；Watcher 必须由 5V 电源供电，如果您使用不合规的电源适配器或电压大于 5V 的电源，可能会烧坏设备！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上图显示了推荐的适配器规格。如果您不知道在哪里可以购买合适的适配器，您可以选择通过下面的链接直接购买。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>
:::

要开启您的 Watcher 设备，请按住位于右上角的滚轮按钮约 3 秒钟，直到屏幕上出现 Seeed Studio 标志。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

一旦显示标志，松开按钮并让设备完成其初始化过程。几分钟后，Watcher 将显示其主菜单，表明它已准备好使用。

:::tip
如果设备长按后无法开机，设备可能电量不足，您可能需要连接电缆为其供电，然后才能唤醒 Watcher。
:::

### 步骤 3. 设备绑定

:::caution
[SenseCraft Pro](https://wiki.seeedstudio.com/cn/watcher_price/) 将在您的设备绑定到 SenseCraft APP 时自动激活试用服务。
:::

开启 Watcher 后，如果它之前没有绑定到设备，它会提示您连接到 SenseCraft 应用。或者，您可以在设置菜单中找到 "Connect to APP" 选项。然后 Watcher 将显示一个二维码来下载 SenseCraft 应用。

您可以扫描二维码或使用提供的链接下载应用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 下载 APP 🖱️</font></span></strong>
    </a>
</div>

<br />

要继续将您的 Watcher 绑定到 SenseCraft 应用，请按照以下步骤操作：

**1.** 在您的 Watcher 上，顺时针旋转滚轮按钮进入设备绑定的二维码界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/1.svg" style={{width:550, height:'auto'}}/></div>

**2.** 在您的移动设备上打开 SenseCraft 应用，点击右上角的加号 (+) 通过扫描二维码添加您的 Watcher。

:::tip
确保您的移动设备的蓝牙权限已启用，因为绑定过程需要蓝牙连接。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/2.svg" style={{width:550, height:'auto'}}/></div>

**3.** 成功扫描二维码后，应用将导航到网络配置页面。选择一个 2.4GHz Wi-Fi 网络来将您的 Watcher 连接到互联网。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/3.svg" style={{width:550, height:'auto'}}/></div>

点击 "Next" 按钮继续。

**4.** 为您的 Watcher 选择一个名称并为其选择合适的组。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/4.svg" style={{width:550, height:'auto'}}/></div>

点击 "Finish" 按钮完成设置过程。

**5.** SenseCraft 应用将显示教程页面，提供如何使用您的 Watcher 的指导。花一点时间熟悉这些说明。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/5.svg" style={{width:550, height:'auto'}}/></div>

设置完成后，应用将打开一个聊天窗口与您的 Watcher 通信，而 Watcher 将返回到其主菜单。

绑定过程完成后，您的 Watcher 现在已连接到 SenseCraft 应用，您可以开始探索其功能和能力。该应用是与您的 Watcher 交互、调整设置和远程接收通知的便捷方式。

## 为 Watcher 安排任务

接下来，选择您想要用来为 Watcher 安排可执行任务的方法。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Built-in task templates" label="内置任务模板">

要在您的 Watcher 上运行任务模板中的任务，请按照以下步骤操作：

**1.** 从主菜单，使用滚轮按钮导航到 **Task Templates** 选项。

**2.** 按下滚轮按钮进入任务模板子菜单。

**3.** 使用滚轮按钮滚动浏览可用的任务模板，直到找到所需的模型任务。

**4.** 按下滚轮按钮选择并开始运行所选任务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/run_template.gif" style={{width:650, height:'auto'}}/></div>

<br />

任务开始后，Watcher 将在屏幕上显示一个动画表情符号。这个表情符号表示设备正在积极监控所选任务模板指定的目标对象。

当 Watcher 检测到目标对象时，显示将从表情符号动画切换到检测到的对象的实时视图。这让您可以看到 Watcher 识别到的内容。

如果目标对象移出 Watcher 的视野或不再被检测到，显示将自动返回到动画表情符号，表示设备仍在监控目标。

任务模板：

- 人体检测：
  - 此任务模板旨在检测人类的存在。
  - 当 Watcher 识别到**人**时，它将触发警报通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-people-detected.png" style={{width:210, height:'auto'}}/></div><br />

- 宠物检测：
  - 宠物检测任务模板专注于识别猫或狗。
  - 如果 Watcher 检测到**猫**，它将触发警报通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-pet.png" style={{width:210, height:'auto'}}/></div><br />

- 手势检测：
  - 此任务模板配置为识别"布"手势。
  - 当 Watcher 识别到**布手势**时，它将触发警报通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-gesture.png" style={{width:210, height:'auto'}}/></div><br />

每个任务模板都有基于检测各自目标的特定报警触发条件：人类、猫或纸质手势。通过使用这些模板，您可以快速设置 Watcher 来监控所需的对象，无需进行大量配置。

</TabItem>

<TabItem value="Through the APP" label="通过 APP">

:::danger
使用 SenseCraft AI 的某些服务可能需要付费，详情请参考以下文档：

**[SenseCraft AI for Watcher 计划和权益](https://wiki.seeedstudio.com/cn/watcher_price/)**
:::

SenseCraft APP 允许您向 Watcher 设备发送任务。在此示例中，我们将演示使用 Watcher 提供的示例任务之一发送任务的过程。让我们使用命令 *If you see a candles, please notify me*。

**1.** 打开 SenseCraft APP 并导航到已连接的 Watcher 设备的聊天窗口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/6.svg" style={{width:550, height:'auto'}}/></div><br />

**2.** 在聊天窗口中，从可用选项中选择所需的任务，或手动输入命令 *If you see a candles, please notify me*。通过点击发送按钮或按回车键将命令发送到您的 Watcher。

**3.** 收到命令后，Watcher 将解释它并将其分解为由 **When**、**Do** 和 **Capture Frequency** 组件组成的任务流。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/7.svg" style={{width:550, height:'auto'}}/></div>

<br />

查看解析的任务流以确保 Watcher 正确理解了您的命令。应用程序将显示解释的任务详细信息供您验证。如果任务流的任何部分与您的预期命令不符，您可以通过访问应用程序内的 **Detail Config** 部分来修改任务详细信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/8.svg" style={{width:550, height:'auto'}}/></div>

<br />

**4.** 确认或调整任务详细信息后，点击 **Run** 按钮将最终任务发送到您的 Watcher。

Watcher 将下载任务指令，下载完成后，它将转变为一个警觉的监控系统，准备检测任何蜡烛的实例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/9.svg" style={{width:700, height:'auto'}}/></div>

<br />

**5.** 如果 Watcher 识别到蜡烛，它将根据预定义设置发送警报，可能包括闪烁灯光、声音警报和通过 SenseCraft APP 的通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/10.svg" style={{width:550, height:'auto'}}/></div>

:::note
请注意，由于任务流的时间限制，**连续警报之间将有最小间隔以避免过多通知**。
:::

通过遵循这些步骤，您可以有效地使用 SenseCraft APP 向 Watcher 发送命令，使其能够执行特定的监控任务并在满足指定条件时通知您。

记住定期查看和调整您的 Watcher 设置和任务流，以确保最佳性能并与您的监控要求保持一致。有关 APP 任务和选项的更详细描述和解释，以及间隔的详细描述，请阅读 **[Watcher 任务分配指南](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)** 了解更多。

</TabItem>

<TabItem value="By Voice" label="通过语音">

:::danger
使用 SenseCraft AI 的某些服务可能需要付费，详情请参考以下文档：

**[SenseCraft AI for Watcher 计划和权益](https://wiki.seeedstudio.com/cn/watcher_price/)**
:::

Watcher 提供了一种便捷直观的方式，通过语音命令发送任务或进行对话，这要归功于其"Push to Talk"功能。此功能可从设备上的任何屏幕或界面访问，使您能够轻松与 Watcher 交互而无需浏览菜单。以下是如何使用此功能的分步指南：

1. 激活 Push to Talk：

   - 找到 Watcher 右上角的滚轮按钮。
   - 按住滚轮按钮进入语音输入界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. 说出您的命令或消息：

   - 按住滚轮按钮时，清楚地向 Watcher 说出您的任务或消息。
   - 您可以分配任务，例如"Tell me if the baby is crying"或"If the dog is stealing food, say stop Copper"。（Copper 是我的狗的名字。）

3. 释放滚轮按钮：

   - 说完后，释放滚轮按钮。
   - Watcher 将处理您的语音输入并确定它是否是任务分配。

4. 任务分配：

   - 如果 Watcher 识别您的语音输入为任务分配，它将自动将您的任务分解为相关组件。
   - Watcher 将在其屏幕上显示卡片，显示 **Object**（要监控的内容）、**Behavior**（要寻找的动作）、**Notification**（如何警报您）、**Time Range**（何时监控）和 **Frequency**（监控频率）。
   - 查看显示的信息以确保它准确代表您的预期任务。
   - 如果详细信息正确，确认任务，Watcher 将根据指定参数开始执行。
   - 如果 Watcher 误解了您的任务，长按滚轮按钮，您可以继续通过对话尝试纠正 Watcher 对任务的理解。如果经过几次尝试仍无法正确理解，我们建议您使用 SenseCraft APP 来下达任务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

最佳使用技巧：

- 清楚地说话并保持适中的语速以确保准确的语音识别。
- 说话时，请尽可能靠近 Watcher，大约 **3 ~ 10cm** 距离的说话识别准确度最佳。
- 最小化背景噪音以提高 Watcher 理解您语音命令的能力。
- 在分配任务时要具体简洁，以帮助 Watcher 准确解释您的意图。

通过利用 Push to Talk 功能，您可以轻松地发送任务并与 Watcher 进行对话，使您与设备的交互更加自然高效。

:::note
如果您遇到 **0x7002** 错误，这意味着当前 Watcher 的网络状态不佳，音频服务调用失败，请更换网络或位置后重试。
:::

</TabItem>

</Tabs>

## 结束正在运行的任务

1. 点击屏幕一次或按滚轮按钮。

2. 将出现一个确认弹窗，有两个选项：**Main Menu** 和 **End Task**。要终止任务，在屏幕上点击 **End Task** 或使用滚轮导航到"End Task"并按滚轮按钮确认。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end_task.png" style={{width:210, height:'auto'}}/></div><br />

3. 或者，您可以通过移动设备上的 SenseCraft APP 按任务卡上的 **End** 按钮来结束任务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end-task-phone.png" style={{width:250, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
