---
description: Grove - 五向开关
title: Grove - 五向开关
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-5-Way_Switch
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/main.jpg)

Grove - 五向开关可用于检测开关位置和事件，例如单击/双击/长按等。它可以检测左/右/上/下/中五个方向。
五向开关是多功能控制的绝佳选择。

仅需一个小开关即可满足您对开关控制的所有需求！

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本           | 变更                                                                                               | 发布日期       |
|--------------------|----------------------------------------------------------------------------------------------------|---------------|
| Grove - 五向开关 | 初始版本                                                                                          | 2018年6月     |

## 特性

- 五向独立开关
- 良好的耐热性
- 长使用寿命
- Grove 兼容

## 规格

|项目|参数|
|---|---|
|工作电压|3.3V / 5V|
|接口|I^2^C|
|默认 I^2^C 地址|0x03|
|尺寸|长: 40mm 宽: 20mm 高: 10mm|
|重量|4.1g|
|包装尺寸|长: 140mm 宽: 90mm 高: 10mm|
|毛重|10g|

## 应用

- 游戏控制
- 多功能控制

## 硬件概览

### 引脚图

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/pin_map.jpg)
![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/pin_map_back.jpg)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 五向开关 |
|----------------|-------------|---------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - 五向开关连接到 Base Shield 的 **I^2^C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/connect.jpg)

:::note
如果没有 Grove Base Shield，我们也可以直接将模块连接到 Seeeduino，如下所示。
:::

| Seeeduino     | Grove - 五向开关              |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                   |

#### 软件

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove Multi Switch](https://github.com/Seeed-Studio/Grove_Multi_Switch) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。通过以下路径打开示例：**File --> Examples --> Grove Multi Switch Library --> Grove_Switch_Events**。

![](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/img/path.jpg)

或者，您可以直接点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)，将以下代码复制到 Arduino IDE 的新草图中。

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
  Serial.println("***** 设备探测失败 *****");
  return -1;
 }

 Serial.println("***** 设备探测成功 *****");
 if (PID_VAL(mswitch->getDevID()) == PID_5_WAY_TACTILE_SWITCH) {
  Serial.println("Grove 五向触觉开关已插入！");
  key_names = grove_5way_tactile_keys;
 } else if (PID_VAL(mswitch->getDevID()) == PID_6_POS_DIP_SWITCH) {
  Serial.println("Grove 六位 DIP 开关已插入！");
  key_names = grove_6pos_dip_switch_keys;
 }

 // 启用事件检测
 mswitch->setEventMode(true);

 // 报告设备型号
 Serial.print("一个 ");
 Serial.print(mswitch->getSwitchCount());
 Serial.print(" 按钮/开关设备 ");
 Serial.println(mswitch->getDevVer());
 return 0;
}

void setup()
{
 Serial.begin(115200);
 Serial.println("Grove Multi Switch");

 // 初始设备探测
 if (deviceDetect() < 0) {
  Serial.println("插入 Grove 五向触觉开关");
  Serial.println("或 Grove 六位 DIP 开关");
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
  // 动态设备探测
  deviceDetect();
  delay(1000);
  return;
 }

 if (!(evt->event & GroveMultiSwitch::BTN_EV_HAS_EVENT)) {
  #if 0
  Serial.print("无事件，错误码 = ");
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
   Serial.print("单击 ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_DOUBLE_CLICK) {
   Serial.print("双击 ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LONG_PRESS) {
   Serial.print("长按 ");
  }
  if (evt->button[i] & GroveMultiSwitch::BTN_EV_LEVEL_CHANGED) {
   Serial.print("电平变化 ");
  }
 }
 Serial.println("");
}

```

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 点击 **工具 -> 串口监视器** 或同时按下 ++ctrl+shift+m++ 键，打开 Arduino IDE 的 **串口监视器**。将波特率设置为 **115200**。

:::tip
如果一切正常，您将看到结果。当您按下 **KEY E** 时，它将触发 **KEY E: RAW - LOW PRESSED**。
:::

```cpp
Grove 多功能开关
***** 设备探测 设备 BN-5E-0.1
Grove 多功能开关
***** 设备探测成功 *****
Grove 5向触控开关已插入！
一个5按钮/开关设备 BN-5E-0.1
按键 A: 原始状态 - 高电平 已释放 
按键 B: 原始状态 - 高电平 已释放 
按键 C: 原始状态 - 高电平 已释放 
按键 D: 原始状态 - 高电平 已释放 
按键 E: 原始状态 - 低电平 已按下 

按键 E: 事件 - 电平变化 
按键 A: 原始状态 - 高电平 已释放 
按键 B: 原始状态 - 高电平 已释放 
按键 C: 原始状态 - 高电平 已释放 
按键 D: 原始状态 - 高电平 已释放 
按键 E: 原始状态 - 高电平 已释放 

按键 E: 事件 - 单击 电平变化 
按键 A: 原始状态 - 低电平 已按下 
按键 B: 原始状态 - 高电平 已释放 
按键 C: 原始状态 - 高电平 已释放 
按键 D: 原始状态 - 高电平 已释放 
按键 E: 原始状态 - 高电平 已释放 

按键 A: 事件 - 电平变化 
按键 A: 原始状态 - 高电平 已释放 
按键 B: 原始状态 - 高电平 已释放 
按键 C: 原始状态 - 高电平 已释放 
按键 D: 原始状态 - 高电平 已释放 
按键 E: 原始状态 - 高电平 已释放 
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 5向开关 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-5-Way_Switch/res/Grove-5-Way_Switch.zip)
- **[Zip]** [Grove 多功能开关库](https://github.com/Seeed-Studio/Grove_Multi_Switch/archive/master.zip)

## 项目

这是该产品的介绍视频，包含简单演示，您可以尝试观看。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

<br />
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>