---
description: 本指南将帮助您快速设置 Seeed Studio XIAO RS485 扩展板并开始使用 RS485 通信。
title: XIAO 的 RS485 扩展板
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /cn/XIAO-RS485-Expansion-Board
last_update:
  date: 11/20/2024
  author: Jason
---


# Seeed Studio XIAO-RS485-扩展板入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>


## 硬件概述

### 准备材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO RS485-扩展板</th>
			<th>Seeed Studio XIAO ESP32-C3</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


### 引脚图

<div class="table-center">
  <table align="center">
    <tr>
        <th>XIAO RS485 扩展板指示图</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/pinlist.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- 5V OUT/IN SWITCH：一个是 5V 端口的输入和输出，当从机设置为 IN 档时，作为输入，当主机设置为 OUT 档时，此端口向外放电，可以连接到传感器为传感器供电。

- 120R SWITCH：120R 开关用于确定 120 欧姆电阻是否可访问。485 需要在长布线环境的开始和结束处添加 120 欧姆电阻来进行匹配并确保通信。

- INT：保留的中断端口。

:::tip
当用作输入模式时，您需要将开关转到 IN，如果用作输出模式，您需要将开关转到 OUT 以防止烧毁。
:::

### 连接示意图
<div class="table-center">
  <table align="center">
    <tr>
        <th>两个 RS485 扩展板连接</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/connect1.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## 软件概述

### 发送端代码

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); 


#define enable_pin D2 // 将使能引脚定义为D2

void setup() {
  Serial.begin(115200); // 以115200波特率初始化硬件串口
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO6), TX=D5(GPIO7)

  
  // 等待硬件串口准备就绪
  while(!mySerial);
  // 等待硬件串口准备就绪
  while(!Serial);

  pinMode(enable_pin, OUTPUT); // 将使能引脚设置为输出
  digitalWrite(enable_pin, HIGH); // 将使能引脚设置为高电平
}

void loop() {
if (Serial.available()) {
    String receivedData = Serial.readStringUntil('\n'); // 从硬件串口读取数据直到换行符

    // 如果接收到的数据不为空
    if (receivedData.length() > 0) {
        Serial.println("Send successfully"); // 打印成功消息
        mySerial.print("Master send information is: "); // 向硬件串口发送提示消息
        mySerial.println(receivedData); // 将接收到的数据发送到硬件串口
    }
  }
}

```
- **HardwareSerial库：** 允许在ESP32上创建额外的串口，通常用于与设备（如传感器或模块）通信。
- `HardwareSerial mySerial(1); `：定义一个名为mySerial的HardwareSerial对象，使用D5和D4作为接收和发送引脚。
- `#define enable_pin D2`：定义一个使能引脚，用于控制RS485模块的发送和接收状态。

- `setup()`:
  - `Serial.begin(115200`：以115200波特率初始化硬件串口。
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`：RX=D4(GPIO4), TX=D5(GPIO5)。
  - `while(!mySerial)`：等待直到硬件串口准备好进行通信。
  - `while(!Serial)`：等待直到硬件串口准备好进行通信。
  - `pinMode(enable_pin, OUTPUT)`：将enable_pin配置为输出引脚以控制RS485模块。
  - `digitalWrite(enable_pin, HIGH)`：将enable_pin设置为HIGH，配置RS485模块为发送模式。

- `loop():`
  - `if (receivedData.length() > 0)`：检查是否有可从硬件串口读取的数据。
  -  `String receivedData = Serial.readStringUntil('\n');`：从硬件串口读取数据直到换行符
  - `Serial.println("Send successfully")`：打印成功消息。
  - `mySerial.print("Master send information is: ")`：向硬件串口发送提示消息。
  - `mySerial.println(receivedData)`：将您需要的数据发送到RS485扩展板。


### 接收端代码

```cpp
#include <HardwareSerial.h>

HardwareSerial mySerial(1); // 使用UART2
#define enable_pin D2 // 将使能引脚定义为D2

void setup() {
  Serial.begin(115200); // 以115200波特率初始化硬件串口
  mySerial.begin(115200, SERIAL_8N1, 7, 6); // RX=D4(GPIO4), TX=D5(GPIO5)
  
  // 等待硬件串口准备就绪
  while(!Serial);
  // 等待硬件串口准备就绪
  while(!mySerial);
  
  pinMode(enable_pin, OUTPUT); // 将使能引脚设置为输出
  digitalWrite(enable_pin, LOW); // 将使能引脚设置为低电平
}

void loop() {
  // 检查硬件串口是否有可用数据
  if (mySerial.available()) {
      String receivedData = mySerial.readStringUntil('\n'); // 基于换行符读取字符串
      Serial.print("Received data: ");
      Serial.println(receivedData); // 直接打印接收到的数据
  }
}

```

- **HardwareSerial库：** 允许在ESP32上创建额外的串口，通常用于与设备（如传感器或模块）通信。
- `HardwareSerial mySerial(1);`：定义一个名为mySerial的HardwareSerial对象，使用D5作为RX，D4作为TX。
- `define enable_pin D2`：定义一个使能引脚，用于控制RS485模块的发送和接收状态。

- `setup()`:
  - `Serial.begin(115200`：以115200波特率初始化硬件串口。
  - `mySerial.begin(115200, SERIAL_8N1, 7, 6);`RX=D4(GPIO4), TX=D5(GPIO5)。
  - `while(!Serial)`：等待直到硬件串口准备好进行通信。
  - `while(!mySerial)`：等待直到硬件串口准备好进行通信。
  - `pinMode(enable_pin, OUTPUT)`：将enable_pin配置为输出引脚以控制RS485模块。
  - `digitalWrite(enable_pin, LOW)`：将enable_pin设置为低电平，配置RS485模块为接收模式。

- `loop()`:
  - `if (mySerial.available())`：检查是否有可从硬件串口读取的数据。
  - `String receivedData = mySerial.readStringUntil('\n');`：基于换行符读取字符串
  - `Serial.print("Received data: ");`：向硬件串口打印一条消息，表示已接收到数据。
  - `Serial.println(receivedData);`：打印发送到接收端RS485的数据。

## RS485 传输结果


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/rs485_result.png" style={{width:1000, height:'auto'}}/></div>


## 资源

- **[SCH]** [Seeed Studio XIAO-RS485-扩展板原理图](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)
- **[PDF]** [Seeed Studio XIAO-RS485-扩展板原理图](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)

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