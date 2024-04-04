---
description: Grove - 五向开关
title: Grove - 五向开关
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-5-Way_Switch
last_update:
  date: 03/23/2024
  author: WuFeifei
---
<!-- ---
name: Grove - 5-Way Switch
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020048
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/main.jpg)

Grove - 5向开关可用于检测开关位置以及诸如单击/双击/长按等事件。它能够检测左/右/上/下/中心五个方向。
5向开关将是多功能控制的一个很好的选择。

只需一个小开关，即可满足您所有的开关控制需求！

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本        | 变更内容 | 发布日期  |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 5向开关 | 初始版   | 2018年6月 |

## 功能特性

- 5路独立开关
- 良好的耐热性
- 长使用寿命
- 兼容Grove接口

## 规格参数

| 项目          | 数值                        |
|---|---|
| 工作电压      | 3.3V / 5V                   |
| 接口          | I^2^C                       |
| 默认I^2^C地址 | 0x03                        |
| 尺寸          | 长：40mm 宽：20mm 高：10mm  |
| 重量          | 4.1g                        |
| 包装尺寸      | 长：140mm 宽：90mm 高：10mm |
| 毛重          | 10g                         |

## 应用领域

- 游戏控制
- 多功能控制

## 硬件概览

### 引脚图

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/pin_map.jpg)
![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/pin_map_back.jpg)

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
上述提到的受支持平台是对模块软件或理论兼容性的指示。在大多数情况下，我们仅针对Arduino平台提供软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

## 入门指南

### 玩转Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 5向开关 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html" target="_blank">立即获取</a>|

:::注意
**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有四根导线的USB线，两根导线的线不能传输数据。如果您不确定您手中的线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

**2**购买每个Grove模块时，都会附带一根Grove线。如果您丢失了Grove线，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-(5-PCs-pack)-p-936.html)购买。
:::

- **步骤 1.** 将Grove - 5向开关连接到Base Shield的**I^2^C**端口。

- **步骤 2.** 将Grove - Base Shield插入Seeeduino。
- **步骤 3.** 通过USB线将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/connect.jpg)

:::注意
如果没有Grove Base Shield，我们也可以直接将这个模块连接到Seeeduino，如下所示。
:::

| Seeeduino | Grove - 5向开关 |
|---------------|-------------------------|
| 5V        | 红色线          |
| GND       | 黑色线          |
| SDA       | 白色线          |
| SCL       | 黄色线          |

#### 软件

:::警告
如果您是第一次使用Arduino，强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从Github下载[Grove Multi Switch](https://github.com/Seeed-Studio/Grove_Multi_Switch)库。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)为Arduino安装库。
- **步骤 3.** 重启Arduino IDE。通过以下路径打开示例：**文件 --> 示例 --> Grove Multi Switch库 --> Grove_Switch_Events**。

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/path.jpg)

或者，您只需点击代码块右上角的<img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg">图标，即可将以下代码复制到Arduino IDE中的新草图里。

```C++
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

- **步骤 4.** 上传示例程序。如果您不知道如何上传代码，请查阅[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 5.** 通过点击**工具->串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。将波特率设置为**115200**。

:::提示成功
如果一切顺利，您将得到相应的结果。当您按下**KEY E**时，它会触发**KEY E: RAW - LOW PRESSED**。
:::

```C++
Grove Multi Switch
***** Device probe  Device BN-5E-0.1
Grove Multi Switch
***** Device probe OK *****
Grove 5-Way Tactile Switch Inserted!
A 5 Button/Switch Device BN-5E-0.1
KEY A: RAW - HIGH RELEASED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - LOW PRESSED 

KEY E: EVENT - LEVEL-CHANGED 
KEY A: RAW - HIGH RELEASED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - HIGH RELEASED 

KEY E: EVENT - SINGLE-CLICK LEVEL-CHANGED 
KEY A: RAW - LOW PRESSED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - HIGH RELEASED 

KEY A: EVENT - LEVEL-CHANGED 
KEY A: RAW - HIGH RELEASED 
KEY B: RAW - HIGH RELEASED 
KEY C: RAW - HIGH RELEASED 
KEY D: RAW - HIGH RELEASED 
KEY E: RAW - HIGH RELEASED 
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 5向开关 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip)
- **[Zip]** [Grove Multi Switch 库](https://github.com/Seeed-Studio/Grove_Multi_Switch/archive/master.zip)

## 项目

这是本产品的介绍视频和简单的演示，您可以尝试一下。

<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

<br /> 感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够获得尽可能流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
