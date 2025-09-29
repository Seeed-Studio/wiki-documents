---
title: Grove - Serial RF Pro
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Sensor_communication/
slug: /cn/Grove-Serial_RF_Pro
last_update:
  date: 01/06/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Twigrf.jpg)

Grove-Serial RF Pro 是一款低成本、高性能的透明 FSK 收发器，工作频率为 433/470/868/915 MHz，在 433M（默认）频率下性能最佳。它具有 UART 接口，只需提供 UART 数据即可轻松实现无线数据传输。用户可以灵活设置 UART 波特率、频率、输出功率、数据速率、频率偏差、接收带宽等参数。它是设计无线数据传输产品的理想选择，可广泛应用于无线数据传输领域。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html)

## 版本跟踪

<table>
<tr>
<th> 版本</th>
<th> 描述</th>
<th> 发布</th>
</tr>
<tr>
<td width="300px"> v0.9b</td>
<td width="500px"> 初始公开发布</td>
<td width="200px"> NA</td>
</tr>
</table>

## 特性

---

* Grove 兼容
* 高输出功率
* 高输出功率
* 小尺寸
* 更长的传输距离

## 应用场景

---

* 遥控、远程测量系统
* 无线仪表
* 门禁控制
* 识别系统
* 数据采集
* IT 家用电器
* 婴儿监护系统

## 规格参数

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> 项目</th>
<th scope="col"> 最小值</th>
<th scope="col"> 典型值</th>
<th scope="col"> 最大值</th>
<th scope="col"> 单位</th>
</tr>
<tr>
<td scope="row">工作电压</td>
<td> 4.75</td>
<td> 5.0</td>
<td> 5.25</td>
<td> VDC</td>
</tr>
<tr>
<td scope="row"> 睡眠模式电流</td>
<td colspan="3"> 1</td>
<td> uA</td>
</tr>
<tr>
<td scope="row"> 输出功率</td>
<td> 1</td>
<td> -</td>
<td> 20</td>
<td> dB</td>
</tr>
<tr>
<td scope="row"> 通信速度</td>
<td> 1.2</td>
<td>  -</td>
<td> 115.2</td>
<td> Kbps</td>
</tr>
<tr>
<td scope="row"> 传输距离（最大）</td>
<td colspan="3"> 1</td>
<td> Km</td>
</tr>
<tr>
<td scope="row"> 灵敏度</td>
<td colspan="3"> -117</td>
<td> dBm</td>
</tr>
<tr>
<td scope="row"> 通信协议</td>
<td colspan="3">  UART</td>
<td> /</td>
</tr>
<tr>
<td scope="row"> 工作温度</td>
<td> -40</td>
<td>  -</td>
<td> +85</td>
<td> ℃</td>
</tr>
</table>

## 接口功能

---
![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Serial_RF_Pro1.jpg)

<table >
<tr>
<th> 引脚类型（5V 逻辑电平）</th>
<th> 描述</th>
</tr>
<tr>
<td width="100px"> G(GND)</td>
<td width="450px"> 接地端口</td>
</tr>
<tr>
<td> EN(ENABLE)</td>
<td> 设置为低电平进入正常模式作为数据收发器（默认为低电平，通过 10k 电阻连接到 GND）。
设置为高电平进入睡眠模式。</td>
</tr>
<tr>
<td> CON(CONFIG)</td>
<td> 设置为低电平进入配置模式（连接到 GND）。
设置为高电平进行通信（默认为高电平）。</td>
</tr>
<tr>
<td> RX</td>
<td> UART 数据输入</td>
</tr>
<tr>
<td> TX</td>
<td> UART 数据输出</td>
</tr>
<tr>
<td> V(VCC)</td>
<td> 设计为 5V(+) 供电</td>
</tr>
<tr>
<td> AT</td>
<td> 天线引脚</td>
</tr>
</table>

## 入门指南

---
这里我们展示两个 RF Pro Grove 单元相互传输/接收数据。您需要两个 RF Pro Grove 单元和两个 Seeeduino 来进行演示。

* 将一个 Grove - Serial RF Pro 连接到 [Grove - Base Shield](https://wiki.seeedstudio.com/cn/Base_Shield_V2/) 的 UART 接口，并将 Grove - Base Shield 插入 Seeeduino。

![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Rfdemo.jpg)

* 使用相同方法将另一个 Grove - Serial RF Pro 连接到 Seeeduino。

### 配置和查询方法

如果 ENABLE 引脚为低电平，CONFIG 引脚为低电平，模块将准备进入配置状态。如果红色和绿色 LED 保持点亮，则表示处于配置状态。然后您可以对模块进行配置和查询。

* 将 CON 引脚连接到 LOW/GND 以进入配置模式。

* 发送命令来修改和查询模块的配置。配置和查询指令说明请参见[参考资料](https://wiki.seeedstudio.com/cn/Grove-Serial_RF_Pro/#reference)。

配置指令格式为 AA+FA+[指令]+[参数]。指令为 1 字节，参数为 0-4 字节的十六进制数据（采用大端序，高字节在前，低字节在后）。

**注意：**

1) 如果您进行了更改，请记住 UART 传输速度（默认为 9600，最好不要更改），否则您将无法控制模块。如果更改了 UART 的传输速度，指令的传输速度也会相应改变。指令传输速度的范围为 1.2Kbps – 115.2K bps。

2) LED 功能说明：

- 当有电源且模块工作时，红色和绿色 LED 会闪烁。
* 如果 EN（ENABLE）引脚为低电平（默认为低电平），CON（Config）引脚为低电平，模块将准备进入配置模式。在配置模式下，红色和绿色 LED 都会持续点亮。- 如果模块不在配置模式下，绿色和红色 LED 不会持续点亮。
* 模块传输时红色 LED 闪烁，传输完成时红色 LED 熄灭。
* 模块等待接收数据时绿色 LED 熄灭，模块接收到数据时绿色 LED 闪烁一次。

### 通信模式

将以下代码上传到 Seeeduino，如果您不知道如何上传，请点击[这里](https://wiki.seeedstudio.com/cn/Upload_Code)。

```
//send data routine

// link between the computer and the SoftSerial Shield
//at 9600 bps 8-N-1
//Computer is connected to Hardware UART
//SoftSerial Shield is connected to the Software UART:D2&D3

#include <SoftwareSerial.h>

SoftwareSerial SoftSerial(11, 10); // TX, RX
int buffer[64];
int count=0;
void setup()
{
    SoftSerial.begin(9600);               // the SoftSerial baud rate
    Serial.begin(9600);             // the Serial port of Arduino baud rate.

}

void loop()
{
    delay(1000);
    SoftSerial.write(0xAA);
    SoftSerial.write(0xFA);
    SoftSerial.write(0xE1);

    if (SoftSerial.available())              // if date is coming from software serial port ==> data is coming from SoftSerial shield
    {
        while(SoftSerial.available())          // reading data into char array
        {
            buffer[count++]=SoftSerial.read();     // writing data into array
            if(count == 64)break;
        }
        for (int i=0; i<count; i++) {
            Serial.print(buffer[i],HEX);            // if no data transmission ends, write buffer to hardware serial port
        }
        clearBufferArray();              // call clearBufferArray function to clear the stored data from the array
        count = 0;                       // set counter of while loop to zero
    }
    if (Serial.available())            // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());       // write it to the SoftSerial shield
    Serial.println("...");
}
void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // clear all index of array with command NULL
}
```

* 打开串口监视器后，您可以看到如下所示的结果。

![](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/Communication_result.jpg)

## 参考

---
下表列出了与 Serial RF Pro v0.9b 交互时涉及的命令和响应。

<table>
  <tbody><tr>
      <th>指令(HEX)</th>
      <th>描述</th>
      <th>配置指令(HEX)</th>
      <th>返回值</th>
      </tr>
    <tr>
      <td>F0</td>
      <td>重置为默认参数（除UART传输速度外），无参数跟随</td>
      <td width="400px">AA FA F0</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>E1</td>
      <td>读取当前配置参数，无参数跟随</td>
      <td>AA FA E1</td>
      <td>16字节：（**按以下顺序**） <pre>工作频率-4字节,{"\n"}无线数据速率-4字节,{"\n"}接收带宽-2字节,{"\n"}频率偏差-1字节,{"\n"}传输功率-1字节,{"\n"}UART传输速度-4字节{"\n"}</pre></td>
      </tr>
    <tr>
      <td>D2</td>
      <td>设置工作频率，[参数]4字节，[参数]单位：Hz。设置范围：*HM-TRP-433: 414000000-454000000Hz; *   HM-TRP-470: 450000000-490000000Hz; *HM-TRP-868: 849000000-889000000Hz; *   HM-TRP-915: 895000000-935000000Hz</td>
      <td>示例：*配置指令：AA FA D2 **36 89 CA C0**，设置频率为915000000Hz。（**0x36 89 CA C0=915000000**）*   配置指令：AA FA D2 **19 DE 50 80**，设置频率为434000000Hz。（**0x19 DE 50 80=434000000**）</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>C3</td>
      <td>设置无线数据速率，[参数]4字节，[参数]单位：bps。设置范围：1200-115200 bps</td>
      <td>示例：*配置指令：AA FA C3 **00 00 25 80**，设置传输速度为9600bps。（**0x00 00 25 80=9600**）*   配置指令：AA FA C3 **00 00 96 00**，设置传输速度为38400bps。（**0x00 00 96 00=38400**）</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>B4</td>
      <td>设置接收带宽，[参数]2字节，[参数]单位：KHz 设置范围：30-620KHz</td>
      <td>示例：*配置指令：AA FA B4 **00 69**，设置接收带宽为105KHz。（**0x00 69=105**）*   配置指令：AA FA B4 **01 2C**，设置接收带宽为300KHz。（**0x01 2C=300**）</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>A5</td>
      <td>设置频率偏差，[参数]1字节，[参数]单位：KHz 设置范围：10-160KHz</td>
      <td>示例：*配置指令：AA FA A5 **23**，设置调制频率为35KHz。（**0x23=35**）*   配置指令：AA FA A5 **32**，设置调制频率为50KHz。（**0x32=50**）</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>96</td>
      <td>设置传输功率，[参数]1字节，0~7级 设置范围：0-7级(1-20 dBm)</td>
      <td>示例：*配置指令：AA FA 96 **07**，设置传输功率为7级（+20 dBm）*   配置指令：AA FA 96 **03**，设置传输功率为3级（+8 dBm）<pre>传输功率级别{"     "}传输功率{"\n"}7{"                                 "}+20dBm{"\n"}6{"                                 "}+17dBm{"\n"}5{"                                 "}+14dBm{"\n"}4{"                                 "}+11dBm{"\n"}3{"                                 "}+8dBm{"\n"}2{"                                 "}+5dBm{"\n"}1{"                                 "}+2dBm{"\n"}0{"                                 "}+1dBm{"\n"}</pre></td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>1E</td>
      <td>设置UART传输速度，[参数]4字节，[参数]单位：bps 设置范围：1200-115200 bps</td>
      <td>示例：*配置指令：AA FA 1E **00 00 25 80**，设置速度为9600bps。（**0x00 00 25 80=9600**）*   配置指令：AA FA 1E **00 00 96 00**，设置速度为38400bps。（**0x00 00 96 00=38400**）</td>
      <td>4F 4B 0D 0A （OK /r/n)</td>
      </tr>
    <tr>
      <td>87</td>
      <td>接收有用数据时的无线信号强度，无[参数]跟随</td>
      <td>配置指令：AA FA 87<br /><img src="https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/img/WirelesssignalstrengthRSSI.jpg" /></td>
      <td>RSSI值为8位，范围：0-255</td>
      </tr>
    <tr>
      <td>78</td>
      <td>干扰无线信号强度，无[参数]跟随<br />注意：<br />*调制指数：h = Fd/Rb，范围为0.5 ~ 32。<br />*   如果h > 1，BW =Rb+2Fd；如果h < 1，BW =2Rb+ Fd。</td>
      <td>配置指令：AA FA 78</td>
      <td>RSSI值为8位，范围：0-255</td>
      </tr>
</tbody>
</table>

## 资源

* **[代码]** [Serial RF Pro 演示代码](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/res/Grove-Serial_RF_Pro_Demo_Code.zip)

* **[数据手册]** [HopeRF HM-TRP 系列 100mW 收发器模块 V1.0 数据手册](https://files.seeedstudio.com/wiki/Grove-Serial_RF_Pro/res/HM-TRP-RS232_enV1.0_20120604.pdf)

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