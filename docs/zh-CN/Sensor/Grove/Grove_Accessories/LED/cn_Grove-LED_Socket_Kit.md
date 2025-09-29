---
description: Grove - LED 插座套件
title: Grove - LED 插座套件
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-LED_Socket_Kit
last_update:
  date: 1/7/2023
  author: shuxu hu
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-White-LED-p-2016.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-White-LED-p-2016.jpeg" alt="pir" width={600} height="auto" /></p>

Grove - LED 是为 Arduino/Seeeduino 初学者设计的，用于通过数字端口监控控制。它可以轻松安装到您的盒子或桌面表面，并用作电源或信号的指示灯。其亮度可以通过电位器调节。

## 特性
---
*   Grove 兼容接口

*   3.3V/5V 兼容

*   可调节 LED 方向

*   可调节 LED 亮度

## 规格
---
<table>
  <tbody><tr>
      <td width={400}> **项目**</td>
      <td width={400}> **描述**</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> LED 控制模式</td>
      <td> Arduino 的数字引脚</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> 工作电压</td>
      <td> 5V</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> 供电模式</td>
      <td> Grove 接口</td>
    </tr>
  </tbody>
</table>

## 使用 Arduino 入门
---
以下是使用 Arduino 控制 LED 状态的步骤。

1. 使用 4pin Grove 电缆将 LED 连接到 Base Shield 的 **数字端口 2**。当然，如果需要，您可以更改为其他有效的数字端口，并相应地更改端口定义。

2. 将其插入 Arduino/Seeeduino。使用 USB 电缆将板子连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-LED.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/img/Grove-LED.jpg" alt="pir" width={600} height="auto" /></p>

3. 将示例代码复制到您的草图中，然后上传到 Arduino 或 Seeeduino 板。如果您不知道如何上传，请点击 [这里](https://www.seeedstudio.com/wiki/Upload_Code)。

您将看到 LED 每秒闪烁一次。
```
/*************************************************************************
* 文件名          : GroveLEDDemoCode.ino
* 作者            : Seeedteam
* 版本            : V1.1
* 日期            : 18/2/2012
* 描述            : Grove - LED 的示例代码
*************************************************************************/

#define LED 2 //将 LED 连接到数字引脚2
void setup() {
    // 初始化数字引脚2为输出。
    pinMode(LED, OUTPUT);
}

void loop() {
    digitalWrite(LED, HIGH);   // 打开 LED
    delay(500);               // 持续 500ms
    digitalWrite(LED, LOW);   // 关闭 LED
    delay(500);
}
```

## 使用 Raspberry Pi 入门
---
将 **LED 连接到端口 D4** 并为 Raspberry Pi 供电，使用 Grove 线连接器。这是一个测试 LED 闪烁的示例。您可以将其连接到 GrovePi+，如下图所示。
```
# GrovePi LED 闪烁示例

import time
from grovepi import *

# 将 Grove LED 连接到数字端口 D4
led = 4

pinMode(led,"OUTPUT")
time.sleep(1)

while True:
    try:
        # 使 LED 闪烁
        digitalWrite(led,1)		# 发送 HIGH 打开 LED
        time.sleep(1)

        digitalWrite(led,0)		# 发送 LOW 关闭 LED
        time.sleep(1)

    except KeyboardInterrupt:	# 停止前关闭 LED
        digitalWrite(led,0)
        break
    except IOError:				# 如果遇到通信错误，打印 "Error"
        print "Error"
```

### 运行程序

*   找到文件路径（根据您的实际路径）
```
cd GrovePi/Software/Python/
```

*   运行程序
```
sudo python grove_led_blink.py
```

# Grove - LED
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - LED v1.3
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.3_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
*   [Grove - LED V1.3 源文件 (Eagle 和 pdf)](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.3_Schematics.zip)

*   [Grove - LED 源文件 (Eagle 和 pdf)](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_v1.0_Source_File.zip)

*   [GroveLEDDemoCode](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/GroveLEDDemoCode.zip)

*   [Grove-LED 插座套件](https://files.seeedstudio.com/wiki/Grove-LED_Socket_Kit/res/Grove-LED_Socket_Eagle_File.zip)

## 技术支持与产品讨论
感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>