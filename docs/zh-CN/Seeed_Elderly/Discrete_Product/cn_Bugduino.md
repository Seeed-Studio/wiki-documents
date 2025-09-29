---
description: Bugduino
title: Bugduino
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Bugduino
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Bugduino/img/Bugduino-V2r0-Front.jpg)

Bugduino 是一个兼容 Arduino 的模块。

专为 [Buglabs BUG 平台](http://www.buglabs.net/)设计。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bugduino-V2.0-p-863.html)

## 特性
---
*   [Arduino](https://arduino.cc) 兼容，基于 Seeeduino
*   BUG 接口
*   USB 转 UART：FT232RL
*   ATmega328 微控制器
*   输入电压 - 7-12V
*   14 个数字 I/O 引脚（6 个 PWM 输出）
*   8 个模拟输入
*   32k 闪存
*   16Mhz 时钟频率

**

## 原理图

1.  [文件:BUGduinoSchematicPDF.pdf](https://files.seeedstudio.com/wiki/Bugduino/res/BUGduinoSchematicPDF.pdf)

## 规格

<table cellpadding="1" cellspacing="1">
<tr>
<th scope="row">微处理器</th>
<td>Atmega328</td>
</tr>
<tr>
<th scope="row">PCB 尺寸</th>
<td>60.2cm x 60.2cm</td>
</tr>
<tr>
<th scope="row">指示灯</th>
<td>POWER，绿色 LED。Txd、Rxd、Rst 的 LED</td>
</tr>
<tr>
<th scope="row">电源</th>
<td>5V DC</td>
</tr>
<tr>
<th scope="row">接口</th>
<td>Mini-B USB，2.54mm 间距针脚头</td>
</tr>
<tr>
<th scope="row">连接方式</th>
<td>USB</td>
</tr>
<tr>
<th scope="row">通信协议</th>
<td>UART，Bit Bang I/O，SPI，I2C</td>
</tr>
<tr>
<th scope="row">ROHS</th>
<td>是</td>
</tr>
</table>

## 机械尺寸

60.2mm * 60.2mm * 20.5mm

## 使用方法

### 硬件安装

1. 将串口开关切换到 USB 侧；

2. 插入 USB 数据线；

3. 在 Arduino IDE 中选择对应的 COM 端口；

4. 在 Arduino 板菜单中选择 "Arduino Duemilanove or Nano w/ ATmega328"；

5. 点击 Arduino IDE 中的上传按钮。

### 编程
```
#include <Wire.h>

//SLOTS: Vendor:  0x02
//SLOTS: Product  0x10
//SLOTS: Revision 0x20
//A0-->GND, A1-->GND, A2-->GND
#define AT24C02B_Addr  0b1010000

unsigned char bugduino_signature[]=
{
    0x00,0x00,0x02,0x00,0x10,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x0b,0x16,0x00,0x00,0x00,0x0f
};
unsigned char address_map[]=
{
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0x7f
};

void setup()
{
    Wire.begin();
    Serial.begin(38400);
}
void loop()
{
  /*
   */
    unsigned char i = 0;
    unsigned char eeprom = 0;
    for(i=0;i<20;i++)
    {
        Wire.beginTransmission(AT24C02B_Addr); //start
        Wire.send(address_map[i]);
        Wire.endTransmission();    //stop
        Wire.requestFrom(AT24C02B_Addr, 1);    // request
        delay(1);
        while(Wire.available())    // slave may send less than requested
        {
            unsigned char c = Wire.receive(); // receive a byte as character
            if(c != bugduino_signature[i])
            {
                eeprom =1;
            }
        }
    }
    delay(100);

    if(eeprom)
    {
        Serial.println("Write Signature");
        for(i=0;i<20;i++)
        {
            Wire.beginTransmission(AT24C02B_Addr); //start
            Wire.send(address_map[i]);
            Wire.send(bugduino_signature[i]);
            Wire.endTransmission();    //stop
            delay(10);
        }
    }
    else
    {
        Serial.println("Signature OK");
    }
    for(;;);
}
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>