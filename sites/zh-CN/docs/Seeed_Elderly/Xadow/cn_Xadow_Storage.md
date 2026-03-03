---
description: Xadow - 存储模块
title: Xadow - 存储模块
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Storage
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Storage/img/X_Storage_01.jpg)

大多数 AVR 芯片都有一个小型 EEPROM，可以用于保存变量、配置设置等。例如，Xadow 主板使用的 Atmega32u4 芯片具有 1K 字节的内部 EEPROM。如果您需要为 Xadow 项目提供更多存储空间，这个模块就是为您设计的！该模块为您的项目提供额外的 32K 字节存储空间。Xadow 存储模块可以通过 3.3V 供电，并且与 Xadow 系统兼容。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Storage-p-1625.html)

##  规格
---
*   工作电压：3.3V

*   控制模式：I2C

*   EEPROM：AT24C256C

*   I2C 地址可转换

*   尺寸：25.43mm x 20.35mm

##  I2C 地址设置
---
Xadow 存储模块的两个 AT24C256 共享一个公共的双线总线。每个 AT24C256 都有一个八位硬件地址，称为从地址。通过 A2、A1 和 A0 地址选择输入来配置从地址。A2、A1 和 A0 引脚是设备地址输入，可以直接连接到 GND 或 VCC。如果这些引脚悬空，A2、A1 和 A0 引脚将被内部拉到 GND。

<center>
<table  cellspacing="0" width="50%">
<tr>
<th rowspan="2" scope="col">  从地址[A6 - A0]</th>
<th colspan="3" scope="col"> A2、A1 和 A0 输入状态</th>
</tr>
<tr>
<td scope="col"> A2</td>
<td scope="col"> A1</td>
<td scope="col"> A0</td>
</tr>
<tr>
<td scope="row"> 1010000(0x50)</td>
<td>GND/悬空</td>
<td>GND/悬空</td>
<td>GND/悬空</td>
</tr>
<tr>
<td scope="row"> 1010001(0x51)</td>
<td> GND/悬空</td>
<td> GND/悬空</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010010(0x52)</td>
<td> GND/悬空</td>
<td> VCC</td>
<td> GND/悬空</td>
</tr>
<tr>
<td scope="row"> 1010011(0x53)</td>
<td> GND/悬空</td>
<td> VCC</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010100(0x54)</td>
<td> VCC</td>
<td> GND/悬空</td>
<td> GND/悬空</td>
</tr>
<tr>
<td scope="row"> 1010101(默认 0x55)</td>
<td> VCC</td>
<td> GND/悬空</td>
<td> VCC</td>
</tr>
<tr>
<td scope="row"> 1010110(0x56)</td>
<td> VCC</td>
<td> VCC</td>
<td> GND/悬空</td>
</tr>
<tr>
<td scope="row"> 1010111(0x57)</td>
<td> VCC</td>
<td> VCC</td>
<td> VCC</td>
</tr>
</table>
</center>

在默认模式下，一个 AT24C256(U1) 的 I2C 地址为 0x50，另一个 AT24C256(U2) 的 I2C 地址为 0x51（参见 Xadow 存储模块）。

##  演示
---
使用 Xadow 存储模块，即使断电也可以永久存储数据。现在我们展示一个演示：向存储模块写入数据并读取数据。

**硬件安装：**

![](https://files.seeedstudio.com/wiki/Xadow_Storage/img/XadowStorage.jpg)

注意：将 Xadow 存储模块连接到 Xadow 主板时，需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。

**演示代码：**

```
#include <Wire.h> //I2C 库
void setup()
{
    char somedata[] = "this is data from the eeprom"; // 要写入的数据
    Wire.begin(); // 初始化连接
    Serial.begin(9600);
    i2c_eeprom_write_page(0x51, 0, (byte *)somedata, sizeof(somedata)); // 写入 EEPROM

    delay(10); // 添加一个小延迟

    Serial.println("Memory written");
}
void loop()
{
    int addr=0; // 首地址
    byte b = i2c_eeprom_read_byte(0x51, 0); // 从内存访问首地址

    while (b!=0)
    {
        Serial.print((char)b); // 将内容打印到串口
        addr++; // 增加地址
        b = i2c_eeprom_read_byte(0x51, addr); // 从内存访问一个地址
    }
    Serial.println(" ");
    delay(2000);
}
void i2c_eeprom_write_byte( int deviceaddress, unsigned int eeaddress, byte data ) {
    int rdata = data;
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress >> 8)); // MSB
    Wire.write((int)(eeaddress & 0xFF)); // LSB
    Wire.write(rdata);
    Wire.endTransmission();
}

// 警告：地址是页地址，6 位末端将环绕
// 此外，数据最多约为 30 字节，因为 Wire 库有一个 32 字节的缓冲区
void i2c_eeprom_write_page( int deviceaddress, unsigned int eeaddresspage, byte* data, byte length ) {
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddresspage >> 8)); // MSB
    Wire.write((int)(eeaddresspage & 0xFF)); // LSB
    byte c;
    for ( c = 0; c < length; c++)
    Wire.write(data[c]);
    Wire.endTransmission();
}
byte i2c_eeprom_read_byte( int deviceaddress, unsigned int eeaddress ) {
    byte rdata = 0xFF;
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress >> 8)); // MSB
    Wire.write((int)(eeaddress & 0xFF)); // LSB
    Wire.endTransmission();
    Wire.requestFrom(deviceaddress,1);
    if (Wire.available()) rdata = Wire.read();
    return rdata;
}
// 最好不要一次读取超过 30 或 32 字节！
void i2c_eeprom_read_buffer( int deviceaddress, unsigned int eeaddress, byte *buffer, int length ) {
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress >> 8)); // MSB
    Wire.write((int)(eeaddress & 0xFF)); // LSB
    Wire.endTransmission();
    Wire.requestFrom(deviceaddress,length);
    int c = 0;
    for ( c = 0; c < length; c++ )
    if (Wire.available()) buffer[c] = Wire.read();
}
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
- [Xadow Storage Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip)

- [串行 EEPROM AT24C256C 数据手册](https://files.seeedstudio.com/wiki/Xadow_Storage/res/AT24C256C-SSHL-T.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>