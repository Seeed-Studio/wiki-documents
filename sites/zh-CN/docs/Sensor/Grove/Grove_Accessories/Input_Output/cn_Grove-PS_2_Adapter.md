---
title: Grove - PS/2 适配器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-PS_2_Adapter/
slug: /cn/Grove-PS_2_Adapter
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/PS221_sensor.jpg)

PS/2 适配器使您能够将 PS2 设备连接到 Arduino/Seeeduino 主板。借助 PS2Keyboard/PS2Mouse 库，您可以在这些 PS2 设备与 Arduino/Seeeduino 之间创建桥梁。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PS%262-Adapter-p-966.html)

## 特性

---

* 标准 Grove 接口

* 标准 PS/2 接口

## 规格

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
<th scope="row"> 电压</th>
<td> 4.75</td>
<td> 5.0</td>
<td> 5.25</td>
<td> V</td>
</tr>
<tr>
<th scope="row"> 电流</th>
<td colspan="3"> 100</td>
<td> mA</td>
</tr>
<tr>
<th scope="row"> 通信模式</th>
<td colspan="3"> PS/2 通信协议</td>
<td> /</td>
</tr>
<tr>
<th scope="row"> 时钟频率</th>
<td> 10</td>
<td> 15</td>
<td> 33</td>
<td> KHZ</td>
</tr>
</table>

## 应用场景

---

* PS/2 鼠标和键盘输入

## 使用方法

---
PS/2 接口是一种 6 针 Mini-DIN 接口，用于将键盘和鼠标连接到 PC 兼容的计算机系统。PS/2 键盘和鼠标接口的设计在电气上相似，并采用相同的通信协议。如今，这种接口已被 USB 取代，但对于 Arduino/Seeeduino 来说，当您需要鼠标或键盘时，使用 PS/2 接口仍然是一个方便且经济的选择。

PS/2 接口有 6 个针脚，如下图所示。针脚 1 和针脚 6 未连接。针脚 3 用于接地，针脚 4 用于供电。其他两个针脚用于时钟和数据。

![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/MiniDIN-6_Connector.svg.png)

<table  cellspacing="0" width="702">
<tr>
<th scope="col"> 针脚</th>
<th scope="col"> 名称</th>
<th scope="col"> 功能</th>
<th scope="col"> 对应 Grove 接口</th>
</tr>
<tr>
<th scope="row"> 1</th>
<td> +DATA</td>
<td> 数据</td>
<td> DATA</td>
</tr>
<tr>
<th scope="row"> 2</th>
<td> NC</td>
<td> 保留</td>
<td> -</td>
</tr>
<tr>
<th scope="row"> 3</th>
<td> GND</td>
<td> 接地线</td>
<td> GND</td>
</tr>
<tr>
<th scope="row"> 4</th>
<td> Vcc</td>
<td> +5DCV</td>
<td> VCC</td>
</tr>
<tr>
<th scope="row"> 5</th>
<td> +CLK</td>
<td> 时钟频率</td>
<td> CLK</td>
</tr>
<tr>
<th scope="row"> 6</th>
<td> NC</td>
<td> 保留</td>
<td> -</td>
</tr>
</table>

1. 将 PS/2 鼠标或键盘插入 Grove-PS/2 适配器，然后将 Grove 接口连接到 [Grove - Base Shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134) 的 D5/D6。您可以根据需要更改数字端口，但不要忘记同时更改示例代码中的端口号定义。

:::note
针脚 5 是鼠标数据针脚，针脚 6 是时钟针脚。
:::

2. 将 Base Shield 插入 Arduino/Seeeduino，并通过 USB 数据线将 Arduino/Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/PS2_sensorss.jpg)

3. 下载 [PS2 Adapter 库](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/PS2_Adapter_Library.zip)，解压并将其放入 Arduino IDE 的库文件夹路径：..\arduino-1.0\libraries。

4. 重启 Arduino IDE，打开一个示例代码，例如通过路径直接打开 ps2_mouse：File -> Example -> PS2_Adapter -> ps2_kbd。

```
/*
 * 一个 Arduino 示例代码，用于与 PS/2 键盘交互。
 * 同时使用串行协议与主机通信并报告发现的内容。
 * 使用 PS2 库。
 */

#include <ps2.h>

/*
 * 针脚 5 是 PS2 数据针脚，针脚 6 是时钟针脚
 * 您可以根据需要使用方便的针脚。
 */

PS2 kbd(6, 5);

void kbd_init()
{
    char ack;

    kbd.write(0xff);  // 发送重置代码
    ack = kbd.read();  // 字节，键盘进行自检
    ack = kbd.read();  // 自检完成后另一个确认字节
}

void setup()
{
    Serial.begin(9600);
    kbd_init();
}

/*
 * 从键盘获取一个键码，并通过串行线将其报告给主机。
 */
void loop()
{
    unsigned char code;

    for (;;) { /* 无限循环 */
        /* 读取一个键码 */
        code = kbd.read();
        /* 将数据发送回主机 */
        Serial.println(code, HEX);
        // delay(20);  /* 调整 */
    }
}
```

如果您不知道如何上传代码，请点击 [这里](https://www.seeedstudio.com/wiki/Upload_Code)。

上传固件到 MCU 后，您可以通过串行监视器（9600 波特率）检查状态：

![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/Result.jpg)

当鼠标移动时，X 和 Y 输出值会相应变化。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/Grove-PS2_Adapter_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Grove - PS/2 适配器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/Grove-PS2_Adapter_eagle_file.zip)

* [PS2 适配器库](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/PS2_Adapter_Library.zip)

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