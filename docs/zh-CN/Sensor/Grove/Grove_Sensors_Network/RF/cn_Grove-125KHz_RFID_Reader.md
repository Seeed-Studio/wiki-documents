---
title: Grove - 125KHz RFID 读卡器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-125KHz_RFID_Reader/
slug: /cn/Grove-125KHz_RFID_Reader
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/Grove-125KHz_RFID_Reader.jpg)

这款 Grove-125KHz RFID 读卡器是一个用于读取 uem4100 RFID 卡信息的模块，具有两种输出格式：Uart 和 Wiegand。它具有高灵敏度，最大感应距离为 7cm。还有[此模块的电子积木版本](https://www.seeedstudio.com/depot/electronic-brick-125khz-rfid-card-reader-p-702.html?cPath=52)。它可以帮助您实现物联网和门禁控制系统等项目。

在使用 RFID 读卡器时，您应该使用以下模块：

- [RFID 标签组合 (125khz)](https://www.seeedstudio.com/depot/rfid-tag-combo-125khz-5-pcs-p-700.html?cPath=19_24)

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html)

## 版本

| 产品版本 | 变更 | 发布日期 |
|-----------------|---------|---------------|
| Grove - 125KHz RFID 读卡器 V1.0 | 初始版本 | 2015年10月      |

## 规格参数

|参数| 数值/范围|
|:------|:------------------|
|电压| 4.75-5.25V|
|工作频率| 125 KHz|
|感应距离(最大)|70mm|
|TTL 输出| 9600 波特率，8 数据位，1 停止位，无校验位|
|Wiegand 输出|26 位 Wiegand 格式，1 偶校验位，24 数据位，1 奇校验位|

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与 Arduino 配合使用

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove - 125KHz RFID Reader |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/gr125k_01.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html)|

- **步骤 2.** 将 Grove - 125KHz RFID Reader 连接到 Grove-Base Shield 的 **D2** 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 通过 USB 线将 Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/RFID_reader.jpg)

:::note
 如果我们没有 Grove Base Shield，我们也可以直接将 Grove_Ultrasonic_Ranger 连接到 Seeeduino，如下所示。
:::
| Seeeduino     | Grove - 125KHz RFID Reader |
|---------------|----------------------------|
| 5V            | Red                        |
| GND           | Black                      |
| D3            | White                      |
| D2            | Yellow                     |

#### 软件

- **步骤 1.** 将代码复制到 Arduino IDE 中并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
/*
  link between the computer and the SoftSerial Shield
  at 9600 bps 8-N-1
  Computer is connected to Hardware UART
  SoftSerial Shield is connected to the Software UART:D2&D3
*/
 
#include <SoftwareSerial.h>
 
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];       // buffer array for data receive over serial port
int count = 0;                    // counter for buffer array
 
void setup()
{
    SoftSerial.begin(9600);     // the SoftSerial baud rate
    Serial.begin(9600);         // the Serial port of Arduino baud rate.
}
 
void loop()
{
    // if date is coming from software serial port ==> data is coming from SoftSerial shield
    if (SoftSerial.available())              
    {
        while(SoftSerial.available())               // reading data into char array
        {
            buffer[count++] = SoftSerial.read();      // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer, count);     // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();             // call clearBufferArray function to clear the stored data from the array
        count = 0;                      // set counter of while loop to zero
    }
    if (Serial.available())             // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());    // write it to the SoftSerial shield
}
void clearBufferArray()                 // function to clear buffer array
{
    // clear all index of array with command NULL
    for (int i=0; i<count; i++)
    {
        buffer[i]=NULL;
    }                  
}
```

- **步骤 2.** 打开串口监视器，卡片信息可以显示如下：

![](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/Read_Data_.jpg)

## Wiegand 模式

（跳线设置到右边两个引脚）
您需要将跳线选择到"W"来进入此模式。
适用于 Seeeduino 的 [Wiegand 演示代码](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/RFID_Wiegand_INT.zip) 设计用于在中断模式下读取 Wiegand 数据。

在 Wiegand 模式下，输出数据格式为 26 位，包括 24 位卡片信息和 2 位奇偶校验位。

<table border={1}>
  <tbody><tr style={{fontWeight: 'bold'}}>
      <td width={20}>
        位
      </td>
      <td width={20}>
        0
      </td>
      <td width={20}>
        1
      </td>
      <td width={20}>
        2
      </td>
      <td width={20}>
        3
      </td>
      <td width={20}>
        4
      </td>
      <td width={20}>
        5
      </td>
      <td width={20}>
        6
      </td>
      <td width={20}>
        7
      </td>
      <td width={20}>
        8
      </td>
      <td width={20}>
        9
      </td>
      <td width={20}>
        10
      </td>
      <td width={20}>
        11
      </td>
      <td width={20}>
        12
      </td>
      <td width={20}>
        13
      </td>
      <td width={20}>
        14
      </td>
      <td width={20}>
        15
      </td>
      <td width={20}>
        16
      </td>
      <td width={20}>
        17
      </td>
      <td width={20}>
        18
      </td>
      <td width={20}>
        19
      </td>
      <td width={20}>
        20
      </td>
      <td width={20}>
        21
      </td>
      <td width={20}>
        22
      </td>
      <td width={20}>
        23
      </td>
      <td width={20}>
        24
      </td>
      <td width={20}>
        25
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        PE
      </td>
      <td colSpan={24} rowSpan={1}>
        D
      </td>
      <td>
        P0
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        -
      </td>
      <td colSpan={12} rowSpan={1}>
        E
      </td>
      <td colSpan={12} rowSpan={1}>
        0
      </td>
      <td>
        -
      </td>
    </tr>
    <tr style={{fontSize: '90%'}} align="center">
      <td>
        -
      </td>
      <td>
        -
      </td>
      <td colSpan={8} rowSpan={1}>
        D2[7..0]
      </td>
      <td colSpan={8} rowSpan={1}>
        D1[7..0]
      </td>
      <td colSpan={8} rowSpan={1}>
        D0[7..0]
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody></table>

- PE 是偶校验位，PO 是奇校验位；
- E 是参与偶校验的数据位，O 是参与奇校验的数据位；
- DX\[7..0\] 是对应 Mifare@ Standard & Light 卡只读 ID 的数据位；

## 常见问题

**Q1：如何将输出转换为卡号？**

A1：请按照以下步骤操作。

- 以 ID：0009776930 为例：
- 卡号 ID：0009776930 ------- 十进制 [起始位(00) + 卡号(8位数字)]
- 输出：0700952F229F ------------- 十六进制 [[起始位(07h) + 卡号(8位数字) + 校验和]
- 十进制和十六进制数字的计算器可在线获取。

**Q2：如何连续读取标签？**

A2：RFID 读取器可以连续读取标签而无需任何设置。将标签保持在距离天线 2.5-4 厘米的位置，读取器可以连续读取数据。如果距离小于 2.5 厘米，读取器只会读取一次数据，除非移开标签。

## 资源

- **[演示]** [Grove - 125KHz RFID Reader 演示](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/RFID_Wiegand_INT.zip)
- **[PDF]** [符合性声明](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/CSTR140821808_Declaration%20of%20conformity.pdf)
- **[PDF]** [测试报告](https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/CSTR140821808_test%20report.pdf)

## 项目

**基于 Arduino 的安全项目使用 Cayenne**：基于 Arduino 的家庭安全项目。检测到入侵者时发送短信/邮件警报。为授权人员提供个性化消息。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

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