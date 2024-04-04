---
title: Grove - PS/2适配器
description: Grove - PS/2适配器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-PS_2_Adapter/
slug: /cn/Grove-PS_2_Adapter
last_update:
  date: 03/23/2024
  author: WuFeifei
---
 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/PS221_sensor.jpg)

PS/2适配器使您能够将PS2设备连接到Arduino/Seeeduino主板上。借助PS2Keyboard/PS2Mouse库，您可以在这些PS2设备和Arduino/Seeeduino之间建立桥梁。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PS%262-Adapter-p-966.html)

## 功能特点

---

* 标准的Grove接口

* 标准的PS/2接口

## 规格参数

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> 项目
</th>
<th scope="col"> 最小值
</th>
<th scope="col"> 典型值
</th>
<th scope="col"> 最大值
</th>
<th scope="col"> 单位
</th></tr>
<tr>
<th scope="row"> 电压
</th>
<td> 4.75
</td>
<td> 5.0
</td>
<td> 5.25
</td>
<td> V
</td></tr>
<tr>
<th scope="row"> 电流
</th>
<td colspan="3"> 100
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> 通信模式
</th>
<td colspan="3">  PS/2通信协议
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> 时钟频率
</th>
<td> 10
</td>
<td> 15
</td>
<td> 33
</td>
<td> KHZ
</td></tr></table>

## 应用思路

---

* PS/2鼠标和键盘输入

## 使用方法

---
PS/2连接器是一个6针的Mini-DIN连接器，用于将键盘和鼠标连接到兼容PC的计算机系统上。键盘和鼠标接口的PS/2设计在电气特性上相似，并采用相同的通信协议。如今，这种连接器已被USB取代，但对于Arduino/Seeeduino来说，使用PS/2连接器仍然是一个不错的选择，因为当你需要鼠标或键盘时，它更方便、更便宜。

从下面的图示中可以看到，PS/2连接器有6个针脚。针脚1和针脚6未连接。针脚3是接地线，针脚4是电源线。其余两个针脚分别用于时钟和数据传输。

 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/MiniDIN-6_Connector.svg.png)

<table  cellspacing="0" width="702">
<tr>
<th scope="col"> 针脚编号
</th>
<th scope="col"> 名称	
</th>
<th scope="col"> 功能
</th>
<th scope="col"> 对应Grove接口
</th></tr>
<tr>
<th scope="row"> 1
</th>
<td> +DATA
</td>
<td> 数据线
</td>
<td> DATA
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td> NC
</td>
<td> 预留（未使用）
</td>
<td> -
</td></tr>
<tr>
<th scope="row"> 3
</th>
<td> GND
</td>
<td> 电源地线
</td>
<td> GND
</td></tr>
<tr>
<th scope="row"> 4
</th>
<td> Vcc
</td>
<td> +5V直流电源	
</td>
<td> VCC
</td></tr>
<tr>
<th scope="row"> 5
</th>
<td> +CLK</td>
<td> 时钟频率
</td>
<td> CLK
</td></tr>
<tr>
<th scope="row"> 6
</th>
<td> NC
</td>
<td> 预留（未使用）	
</td>
<td> -
</td></tr></table>

1.将PS/2鼠标或键盘连接到Grove-PS/2适配器，然后将Grove接口连接到[Grove - Base Shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134)的D5/D6端口。您可以根据需要更改数字端口。但是，别忘了同时在演示代码的定义中更改端口号。

:::注意
     引脚5是鼠标数据引脚，引脚6是时钟引脚。
:::
 2.将Base Shield插入Arduino/Seeeduino，并通过USB电缆将Arduino/Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/PS2_sensorss.jpg)

3.下载[PS2适配器库](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/PS2_Adapter_Library.zip)，解压文件，并将其放入Arduino IDE的库文件夹中，路径为：..\arduino-1.0\libraries。

4.重启Arduino IDE，打开示例代码之一，例如通过路径：文件 -> 示例 -> PS2_Adapter -> ps2_kbd 直接打开ps2_kbd（键盘）示例代码。

```
/*
 * an Arduino sketch to interface with a ps/2 keyboard.
 * Also uses serial protocol to talk back to the host
 * and report what it finds. Used the ps2 library.
 */

#include &lt;ps2.h&gt;

/*
 * Pin 5 is the ps2 data pin, pin 6 is the clock pin
 * Feel free to use whatever pins are convenient.
 */

PS2 kbd(6, 5);

void kbd_init()
{
    char ack;

    kbd.write(0xff);  // send reset code
    ack = kbd.read();  // byte, kbd does self test
    ack = kbd.read();  // another ack when self test is done
}

void setup()
{
    Serial.begin(9600);
    kbd_init();
}

/*
 * get a keycode from the kbd and report it back to the
 * host via the serial line.
 */
void loop()
{
    unsigned char code;

    for (;;) { /* ever */
    /* read a keycode */
        code = kbd.read();
    /* send the data back up */
        Serial.println(code, HEX);
        // delay(20);  /* twiddle */
    }
}
```

如果您不知道如何上传代码，请点击[这里](https://www.seeedstudio.com/wiki/Upload_Code)。

将固件上传到MCU后，您可以通过串行监视器（波特率为9600）来检查状态：

 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/Result.jpg)

当鼠标移动时，X和Y的输出值会相应地发生变化。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/Grove-PS2_Adapter_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

---

* [Grove - PS/2 适配器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/Grove-PS2_Adapter_eagle_file.zip)

* [PS2 适配器库](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/PS2_Adapter_Library.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同形式的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
