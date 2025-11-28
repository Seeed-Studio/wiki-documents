---
description: 使用体感功能来控制《Subway Surfers》。
title: 使用体感传感器来玩《Subway Surfers》
keywords:
  - reCamera
  - Sensory control
  - Game
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_title.gif
slug: /cn/use_the_motion-sensing_function_of_recamera_to_play_games
sidebar_position: 9
last_update:
  date: 11/27/2025
  author: Xinrui Wu
---

# 使用体感传感器来玩《Subway Surfers》

## 简介

reCamera 是一款配备强大边缘计算能力的 AI 摄像头。这个演示展示了它在设备级别实时运行 YOLO11n-Pose 模型的能力——无需依赖云端，它就能准确识别人体的关键点和姿态。通过 reCamera 捕捉玩家的动作，我们将身体转化为控制器，让我们能够用自然的体感操作"地铁跑酷"：跳跃、蹲下、左右闪避，一气呵成！

完成本示例后，效果如下所示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_text.gif" /></div>

## 硬件准备

一台 reCamera
一台电脑

<table align="center">
 <tr>
  <th>reCamera 2002 系列</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. 打开 SenseCraft 并找到名为"GAME"的应用程序

### 1.1 打开 Wiki

SenseCraft 入口位于 Wiki 界面的右上角，点击进入 SenseCraft

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_1.png" /></div>

### 1.2 进入 reCamera 工作区

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_2.png" /></div>

### 1.3 找到名为 GAME 的应用程序并点击进入

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_3.png" /></div>

### 1.4 在 reCamera 上部署此应用程序

滑动到页面底部，点击 Open Application，然后点击 Visit Workspace Via USB（此时您应该将 reCamera 连接到您的电脑）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_4.png" /></div>

然后您将进入工作区，Node-RED 节点将加载一段时间，请耐心等待加载完成

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_5.png" /></div>

加载完成后，您将看到以下界面，点击 No 并退出

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_6.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_7.png" /></div>

点击右上角的 Deploy 按钮

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_8.png" /></div>

部署成功后，会有弹窗提示，然后部署按钮会变成灰色。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_9.png" /></div>

然后打开 Dashboard 查看效果

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_10.png" /></div>

此时您应该能够成功看到如下检测画面

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_11.png" /></div>

### 1.5 测试上、下、左、右四个动作的触发

#### 1.5.1 初始状态

这是初始动作，即回到中间状态。当您固定好 reCamera，调整角度，站在 reCamera 前方，双臂自然放在两侧，控制球在中心线上且在紫线和绿色区域之间。此时，您可以执行其他动作进行测试。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_12.png" /></div>

#### 1.5.1 左

左臂向左，保持右臂不动，控制球到中心线左侧，它会显示为蓝色，此时判定为左

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_13.png" /></div>

#### 1.5.2 右

右臂向右，保持左臂不动，控制球到中心线右侧，它会显示为黄色，此时判定为右

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_14.png" /></div>

#### 1.5.3 上

双臂应该向上举起。当您看到紫线超过黄线时，判定为向上，球将保持白色。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_15.png" /></div>

#### 1.5.4 下

保持手臂回到中间，然后自然蹲下。控制球到蹲下区域。球会变成红色。此时判定为向下。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_16.png" /></div>

:::note
如果您想连续触发某一组动作，比如连续向左两次，或者先向左再向上，那么当您做第一个左动作时，应该先让球回到中间，然后再做第二个动作。
:::

## 2. 下载相应的 python 控制程序并运行

点击这个 [GitHub 链接](https://github.com/xr686/Receive-the-information-from-the-reCamera-to-control-the-computer-through-body-sensing..git)

进入后，将此项目的压缩包下载到本地

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_17.png" /></div>

解压后，打开 scket_udp.py，然后先下载一个控制键盘的依赖项。

```bash
pip install pynput
```

然后您可以运行这个 python 程序。此时您应该保持 reCamera 检测画面有效，您将看到动作判定结果的输出。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_18.png" /></div>

## 3. 打开游戏（以地铁跑酷网页版为例）

在确保您的 reCamera 检测和 python 程序正在运行且测试动作的输出没有问题后，打开[地铁跑酷网页](https://subway-surfers.gg/)，然后点击 "Start Game"，您就可以开始游戏了！

:::note
画面中只能出现一个人。当其他人闯入时，会导致动作判断错误！
:::

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
