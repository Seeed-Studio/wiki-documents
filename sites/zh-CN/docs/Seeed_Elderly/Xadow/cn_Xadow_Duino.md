---
description: Xadow - Duino
title: Xadow - Duino
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Duino
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino.JPG)

Xadow Duino 专为使用最流行的 RGB LED WS2812B 构建出色的照明设备而设计。基于 MCU ATmega32u4 和内置 micro USB，Xadow Duino 允许您通过 "RePhone Kit Create" 软件直接控制 RGB LED，或者使用 Arduino IDE 编程板使其独立工作。与其他附加模块不同，该板具有自己的电池插座（JST1.0 类型），允许您通过多种方式为其供电：
- 通过 5V USB（如果连接了电池，它还会同时为电池充电）
- 通过 3.7V 锂电池
- 通过断路引脚
- 通过 Xadow GSM+BLE

[![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-Duino-p-2556.html)

## 特性
---
- 能够像 Arduino 一样工作
- 如果与 RePhone Kit Create 连接，即插即用
- 开源和模块化设计
- 纤薄小巧
- 专为 WS2812B 设计
- 内置 11PIN Xadow 连接器，可与其他 Xadow 模块灵活连接
- 可堆叠、可链式连接、可缝合到其他 Xadow 模块
- LED 爱好者的完美选择

## 规格
---
|项目|详情|
|---|---|
|**微控制器**|	ATmega32u4
|**电源供应**	|通过 USB 提供 5V，最大电流为 1.5A / 通过电池插座提供 3.3 ~ 4.2V，最大电流为 1.5A / 通过断路引脚提供 3.3 ~ 6V，最大电流为 500 mA / 通过 Xadow GSM+BLE 提供 3.3 ~ 4.2V，最大电流为 500 mA
|**充电电流**|	500 mA
|**闪存**|	32 KB（ATmega32u4），其中 4 KB 用于引导加载程序
|**SRAM**|	2.5 KB（ATmega32u4）
|**EEPROM**|	1 KB（ATmega32u4）
|**时钟速度**|	16 MHz
|**连接器**|	2 × 11 PIN Xadow 连接器 RGB LED WS2812b 焊接垫
|**接口**|	通过 I2C（7 位地址 0x23）与 Xadow GSM+BLE 接口
|**尺寸**|	25.37mm × 20.30mm / 1”× 0.8”

## 硬件概述
---
![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino.png)

下图展示了 Xadow Duino 上 11 Pin Xadow 连接器的引脚定义以及可焊接的断路引脚。

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Pin_definitions.png)

## 点亮灯光
---
**使用 'RePhone Kit Create' 控制 WS2812B**

控制 WS2812B 的最简单方法是使用 'RePhone Kit Create' 中的内置软件，该软件提供了一个 'Actuator Control' 应用程序，允许您以三种不同的方式点亮 WS2812B：

 1. 单色。
 2. 跑马灯。
 3. 彩虹。

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_WS2812B.png)

**设置 If This Then That**

在 'If This Then That' 中，您可以设置不同的条件以触发 Xadow Duino 以指定模式点亮 WS2812B。

**使用 Arduino IDE 编程**

您还可以通过使用 Arduino IDE 编写代码来自定义您的光源。

## 使用 Xadow Duino 与 Arduino IDE
---
要使用 Xadow Duino 与 Arduino IDE，需要按照以下几个简单步骤操作：
1. [下载驱动文件](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver)
2. 请参考“下载 Arduino 并安装 Arduino 驱动”页面以正确安装驱动程序。

在正确安装驱动程序后，点击 **开始** 按钮，打开 **控制面板**，点击 **系统和安全**，然后在 **系统** 下点击 **设备管理器** 打开 **设备管理器**。如果系统提示需要管理员密码或确认，请输入密码或提供确认。现在，您应该能够在 **设备管理器** 中看到 **COM 端口**，显示如下：
- **Xadow Clip(COM20)**（COM 端口号可能因您的电脑而异。）

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Com_PORT.png)

3. 现在下载 [Xadow 文件](https://github.com/freespace/Files_For_Seeed_Main_Board)，解压并定位到 ...**\Files_For_Seeed_Main_Board-master.7z\Files_For_Seeed_Main_Board-master\v1.6.3\seeeduino\**，将名为 **seeeduino** 的文件夹复制到您安装 Arduino IDE 的目录下 ...**\arduino-1.6.6\hardware\**。Arduino IDE 的版本可能不同，这里使用的是 Arduino IDE 1.6.6。

4. 现在让我们尝试点亮一些 LED，将 Xadow Duino 用 micro USB 连接到电脑，打开 Arduino IDE，选择 **工具** ==> **板子** ==> **Seeeduino Xadow**：

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Board.jpg)

然后选择 **端口** 为 **COM20(Seeeduino Xadow)**：

![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/Xadow_Duino_Port.jpg)

5. 复制以下代码，如果您没有 WS2812b 库，请在此下载：

```c
#include <Adafruit_NeoPixel.h>

#define PIN 5   // Xadow Duino 使用 DIN/D5/PC6 来控制 WS2812b

// 参数 1 = 灯条中的像素数量
// 参数 2 = 引脚号（大多数都有效）
// 参数 3 = 像素类型标志，根据需要组合使用：
//   NEO_RGB     像素按 RGB 位流连接
//   NEO_GRB     像素按 GRB 位流连接
//   NEO_KHZ400  400 KHz 位流（例如 FLORA 像素）
//   NEO_KHZ800  800 KHz 位流（例如高密度 LED 灯条）
Adafruit_NeoPixel strip = Adafruit_NeoPixel(60, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  strip.begin();
  strip.show(); // 初始化所有像素为“关闭”

  // 非常重要的是将 D13 设置为 OUTPUT 和 HIGH，因为我们希望它充当“GND”
  pinMode(13,OUTPUT);
  digitalWrite(13,HIGH);
}

void loop() {
// 一些示例过程，展示如何向像素显示：
  colorWipe(strip.Color(255, 0, 0), 50); // 红色
  colorWipe(strip.Color(0, 255, 0), 50); // 绿色
  colorWipe(strip.Color(0, 0, 255), 50); // 蓝色
  rainbow(20);
  rainbowCycle(20);
}

// 用一种颜色逐个填充点
void colorWipe(uint32_t c, uint8_t wait) {
  for(uint16_t i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, c);
      strip.show();
      delay(wait);
  }
}

void rainbow(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256; j++) {
    for(i=0; i<strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel((i+j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// 略有不同，这使得彩虹在整个灯条中均匀分布
void rainbowCycle(uint8_t wait) {
  uint16_t i, j;

  for(j=0; j<256*5; j++) { // 彩虹循环 5 次
    for(i=0; i< strip.numPixels(); i++) {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}

// 输入一个值 0 到 255 来获取颜色值。
// 颜色是 r - g - b - 返回到 r 的过渡。
uint32_t Wheel(byte WheelPos) {
  if(WheelPos < 85) {
   return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
  } else if(WheelPos < 170) {
   WheelPos -= 85;
   return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else {
   WheelPos -= 170;
   return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
}
```

## RePhone 社区
---
[![](https://files.seeedstudio.com/wiki/Xadow-Duino/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意和项目，并对未来模块的开发提供反馈。于是，我们创建了 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone)。

现在就加入 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone) 吧！让我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

**常见问题解答**

一些在 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone) 中经常被问到的问题已被收集并回答在主题“RePhone 常见问题解答 (FAQ)”中，该主题会随着新问题的出现不断更新。



## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/Xadow%20Duino%20v1.0_schemic_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
我们会持续在我们的 GitHub 页面更新源代码：

- [Xadow Duino 源代码](https://github.com/WayenWeng/Xadow_Duino/)

以下链接提供了 Xadow Duino 的原理图文件：

- [Xadow Duino 原理图文件](https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/Xadow%20Duino%20v1.0_schemic_file.zip)

了解更多关于迷人的 RGB LED WS2812B 的信息：

- [WS2812B](https://files.seeedstudio.com/wiki/Xadow-Duino/Resources/WS2812B%20Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>