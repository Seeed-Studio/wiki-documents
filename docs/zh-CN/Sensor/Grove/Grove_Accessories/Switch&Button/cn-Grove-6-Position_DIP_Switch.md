---
description: Grove - 6位拨码开关
title: Grove - 6位拨码开关
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-6-Position_DIP_Switch
last_update:
  date: 03/23/2024
  author: WuFeifei
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/main.jpg" /></div>

Grove - 6位DIP开关有6个单独的开关位置，使用I2C传输数据。它非常适合用作多通道控制开关。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本           | 变更内容 | 发布日期  |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 6位DIP开关 | 初始版本 | 2018年6月 |

## 特性

- 6个单独的开关
- 良好的耐热性
- 长使用寿命
- Grove兼容

## 规格

| 项目        | 值                       |
|---|---|
| 工作电压    | 3.3V / 5V                |
| 接口        | I2C                      |
| 默认I2C地址 | 0x03                     |
| 尺寸        | L: 40mm W: 20mm H: 13mm  |
| 重量        | 5g                       |
| 包装尺寸    | L: 140mm W: 90mm H: 10mm |
| 总重量      | 11g                      |

## 应用

- 多功能控制

## 硬件概述

### 引脚映射

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/pin_map_back.jpg" /></div>

## 支持平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div> |

:::警告
上述提及的支持平台只是表明模块的软件或理论上的兼容性。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/示例代码。因此，用户需要自己编写软件库。
:::

## 入门指南

### 与Arduino配合使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | 基础扩展板 | Grove - 6位DIP开关 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html" target="_blank">立即获取</a>|

:::提示
**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的电缆无法传输数据。如果您不确定您手中的线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

**2** 您购买每个Grove模块时都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-(5-PCs-pack)-p-936.html)购买。
:::

- **步骤 1.** 将Grove - 6位DIP开关连接到Base Shield的**I2C**端口。

- **步骤 2.** 将Grove - Base Shield插入Seeeduino。
- **步骤 3.** 通过USB电缆将Seeeduino连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/img/connect.jpg" /></div>

:::注意
如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino | Grove - 6位DIP开关 |
| --------- | ------------------ |
| 5V        | 红色               |
| GND       | 黑色               |
| SDA       | 白色               |
| SCL       | 黄色               |

#### 软件

:::警告
如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从Github下载[Grove Multi Switch](https://github.com/Seeed-Studio/Grove_Multi_Switch)库。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)为Arduino安装库。
- **步骤 3.** 重启Arduino IDE。通过以下路径打开示例：**文件 --> 示例 --> Grove Multi Switch库 --> Grove_Switch_Events**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/path.jpg" /></div>

或者，您只需点击代码块右上角的 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 图标，即可将以下代码复制到Arduino IDE中的新草图中。

```cpp
#include "Grove_Multi_Switch.h"

GroveMultiSwitch mswitch[1];
const char* grove_5way_tactile_keys[] = {
 "KEY A",
 "KEY B",
 "KEY C",
 "KEY D",
 "KEY E",
};
const char* grove_6pos_dip_switch_keys[] = {
 "POS 1",
 "POS 2",
 "POS 3",
 "POS 4",
 "POS 5",
 "POS 6",
};

const char** key_names;

int deviceDetect(void) {
 if (!mswitch->begin()) {
  Serial.println("***** Device probe failed *****");
  return -1;
 }

 Serial.println("***** Device probe OK *****");
 if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
  Serial.println("Grove 5-Way Tactile Switch Inserted!");
  key_names = grove_5way_tactile_keys;
 } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
  Serial.println("Grove 6-Position DIP Switch Inserted!");
  key_names = grove_6pos_dip_switch_keys;
 }

 // enable event detection
 mswitch->setEventMode(true);

 // report device model
 Serial.print("A ");
 Serial.print(mswitch->getSwitchCount());
 Serial.print(" Button/Switch Device ");
 Serial.println(mswitch->getDevVer());
 return 0;
}

void setup()
{
 Serial.begin(115200);
 Serial.println("Grove Multi Switch");

 // Initial device probe
 if (deviceDetect() < 0) {
  Serial.println("Insert Grove 5-Way Tactile");
  Serial.println("or Grove 6-Position DIP Switch");
  for (;;);
 }

 return;
}

void loop()
{
 GroveMultiSwitch::ButtonEvent_t* evt;

 delay(1);

 evt = mswitch->getEvent();
 if (!evt) {
  // dynamic device probe
  deviceDetect();
  delay(1000);
  return;
 }

 if (!(evt->event & GroveMultiSwitch::BTN_EV_HAS_EVENT)) {
  #if 0
  Serial.print("No event, errno = ");
  Serial.println(mswitch->errno);
  #endif
  return;
 }

 for (int i = 0; i < mswitch->getSwitchCount(); i++) {
  Serial.print(key_names[i]);
  Serial.print(": RAW - ");
  Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
               "HIGH ": "LOW ");
  if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
   Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
                "RELEASED ": "PRESSED ");
  } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
   Serial.print((evt->button[i] & GroveMultiSwitch::BTN_EV_RAW_STATUS)?
                "OFF ": "ON ");
  }
  Serial.println("");
 }

 for (int i = 0; i < mswitch->getSwitchCount(); i++) {
  if (evt->button[i] & ~GroveMultiSwitch::BTN_EV_RAW_STATUS) {
   Serial.println("");
   Serial.print(key_names[i]);
   Serial.print(": EVENT - ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_SINGLE_CLICK) {
   Serial.print("SINGLE-CLICK ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_DOUBLE_CLICK) {
   Serial.print("DOUBLE-CLICK ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LONG_PRESS) {
   Serial.print("LONG-PRESS ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LEVEL_CHANGED) {
   Serial.print("LEVEL-CHANGED ");
  }
 }
 Serial.println("");
}

```

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 5.** 通过点击**工具->串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下`ctrl`+`shift`+`m`键。将波特率设置为**115200**。

:::成功提示
如果一切顺利，您将得到结果。例如，默认开关是关闭-高电平，当您将**Switch6**切换到**ON**时，输出将是**POS 6: RAW - LOW ON**。
:::

```cpp
Grove Multi Switch
***** Device probe OK *****
Grove 6-Position DIP Switch Inserted!
A 6 Button/Switch Device BN-6--0.1
POS 1: RAW - HIGH OFF 
POS 2: RAW - HIGH OFF 
POS 3: RAW - HIGH OFF 
POS 4: RAW - HIGH OFF 
POS 5: RAW - HIGH OFF 
POS 6: RAW - LOW ON 

POS 6: EVENT - LEVEL-CHANGED 
POS 1: RAW - LOW ON 
POS 2: RAW - HIGH OFF 
POS 3: RAW - HIGH OFF 
POS 4: RAW - HIGH OFF 
POS 5: RAW - HIGH OFF 
POS 6: RAW - LOW ON 
```

## 在线电路图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 6位DIP开关 Eagle文件](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip)
- **[Zip]** [Grove Multi Switch库](https://files.seeedstudio.com/wiki/Grove-6-Position_DIP_Switch/res/Grove-6-Position_DIP_Switch.zip)

## 项目

这是此产品的介绍视频，里面有一些简单的演示，您可以尝试一下。

<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
