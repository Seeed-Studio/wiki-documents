---
description:  复古电话套件
title:  复古电话套件
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Retro Phone Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Retro%20Phone%20Kit.jpg)

复古电话套件是一款兼容 Arduino 的开源硬件电话。还记得 RePhone 吗？这是全球首款开源模块化手机，您可以通过蜂窝连接来改造周围的事物。复古电话可以被视为带有按键的 RePhone，它能让您回到手机仅仅是用来打电话的旧时代。该套件非常易于使用，您可以在几分钟内制作一部手机。

该套件的主板是 Xadow-Key Board，它包含一个屏幕和一个按键面板。最重要的部分是 RePhone Core 2G-Atmel32u4，这是刚刚推出市场的新款 RePhone 核心板。它使用 Atmel32u4 MCU，并支持四频段 850/900/1800/1900MHz，覆盖全球 GSM 网络。我们还保留了一个 3.5mm 耳机插孔，您可以使用耳机拨打电话。我们没有为手机提供任何外壳，因此您可以自由 DIY 您喜欢的任何外壳。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Retro-Phone-Kit-p-2797.html)

## 特性
---
- 兼容 Arduino

- 支持模拟音频

- 仅支持 2G Nano SIM 卡

- PTCRB 认证

- LCD 128*64

- 3.5mm 耳机插孔（带麦克风），支持 OMTP

- 电源供应：3.4-4.2V（电池） 5V（USB）

## 规格

**Rephone Core 2G-Atmel32u4**

有关此模块的更多信息，请查看 [Rephone Core 2G-Atmel32u4](https://wiki.seeedstudio.com/cn/RePhone_core_2G-Atmel32u4/)

|项目|	值|
|---|---|
|微控制器|	Atmega32U4|
|工作电压|	3.3V|
|每个 I/O 引脚的直流电流|	50|
|闪存|	32 KB，其中 4KB 用于引导加载程序|
|SRAM|	2.5 KB|
|EEPROM|	1KB|
|时钟速度|	16 MHz|
|长度|	68 mm|
|宽度|	30 mm|
|重量|	12 g|

## 模块连接
Rephone Core 2G-Atmel32u4 集成了一个 Xadow 36 针连接器和一个 Xadow 11 针连接器，与 Xadow - GSM＋BLE 类似。在这种情况下，模块连接非常简单：

1. 通过 36 针连接器将 Xadow Key Board 连接到 RePhone 核心板。请务必确保电缆插入牢固且平整，最重要的是保持“TOP”侧朝上。

2. 插入天线

3. 插入一张 Nano 2G SIM 卡

4. 通过电池接口将 Lipo 电池连接到 RePhone 核心板。

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/IMG_2275.JPG)

## 运行测试代码

**RePhone_Menu_GSM**

步骤1. 安装 RePhone Core 2G-Atmel32u4，请点击 [这里](https://wiki.seeedstudio.com/cn/RePhone_core_2G-Atmel32u4/#arduino-ide) 查看完整说明。

步骤2. 找到示例代码并上传到您的板子

安装 RePhone Core 2G-Atmel32u4 到 Arduino IDE 后，基本示例代码也会被包含，您可以在示例部分找到它们。

示例代码包括：
- Atmel32u4_gprs.h
- TimerOne.h
- Rephone_lcm.h
- Rephone_button.h
- Rephone_menu_gsm

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Example%20code.png)

步骤3. 给自己拨打电话

- 如果示例代码上传成功，屏幕将会亮起，您可以看到如下主菜单。

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Main%20Manu.JPG)

- 点击右侧按钮选择电话拨打界面

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Call.JPG)

- 输入您的号码，然后点击右侧按钮选择“Go”

![](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Del.JPG)

然后您将收到来自复古电话的来电。

## RePhone 社区
---
[![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意和项目，并对未来模块的开发提出反馈。于是，我们创建了 RePhone 社区。

现在就加入 [RePhone 社区](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)吧！让我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

## RePhone core 2G Atmel32u4 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Xadow - 键盘原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- [RePhone core 2G Atmel32u4 原理图 PDF](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0.pdf)
- [RePhone core 2G Atmel32u4 原理图 Eagle](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip)
- [Xadow - 键盘原理图 PDF](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/Xadow%20-%20Key%20Board%20v1.0.pdf)
- [Xadow - 键盘原理图 Eagle](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip)
- [RePhone core 2G Atmel32u4 驱动程序](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20driver.zip)
- [ETA6003 数据手册](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/ETA6003.pdf)
- [SIM800 AT 指令集](https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/SIM800_AT.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>