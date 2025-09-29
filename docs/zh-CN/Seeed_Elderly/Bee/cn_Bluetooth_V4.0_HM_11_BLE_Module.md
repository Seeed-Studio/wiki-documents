---
description: 蓝牙 V4.0 HM-11 BLE 模块
title: 蓝牙 V4.0 HM-11 BLE 模块
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Bluetooth_V4.0_HM_11_BLE_Module
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/HM-11%20BLE%20Module.jpg)

这是一个用于 BLE Bee 和 Xadow BLE 的贴片式 BLE 模块。它基于 TI CC2541 芯片，可构建具有低总物料成本的可靠网络节点，非常适合超低功耗系统。该模块体积小巧且易于使用，配备制造商预编程的固件，您可以通过其 AT 命令快速建立 BLE 通信。支持与 iPhone、iPad 和 Android 4.3 的 BLE 通信。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-V4.0-HM-11-BLE-Module-p-1803.html)

## 特性
---
*   蓝牙协议：蓝牙规范 V4.0 BLE

*   工作频率：2.4 GHz ISM 频段

*   接口方式：串口

*   在开放环境中，模块间可实现 30 米内通信

*   模块间发送和接收无字节限制

*   调制方式：GFSK（高斯频移键控）

*   传输功率：- DBM、23-6 DBM、0 DBM、6 DBM，可通过 AT 命令修改

*   使用 TI CC2541 芯片，配置空间为 256 KB，支持 AT 命令，用户可根据需要更改角色（主机、从机模式）、串口波特率、设备名称、匹配参数（如密码），使用灵活。

*   电源供应：+ 3.3 VDC 50 mA

*   工作温度：-5 ~ +65 摄氏度

## 规格
---
<table>
<tr>
<th>规格</th>
<th>值</th>
</tr>
<tr>
<td>微处理器</td>
<td>CC2541</td>
</tr>
<tr>
<td>资源</td>
<td>支持 AT 命令，用户可根据需要更改角色（主机、从机模式）、串口波特率、设备名称、匹配参数（如密码），使用灵活。</td>
</tr>
<tr>
<td>外形尺寸</td>
<td>13.5mm x 18.5mm x 2.3mm</td>
</tr>
<tr>
<td>电源供应</td>
<td>3.3V</td>
</tr>
<tr>
<td>通信协议</td>
<td>Uart（3.3V LVTTL）</td>
</tr>
<tr>
<td>IO 数量</td>
<td>2</td>
</tr>
<tr>
<td>按键输入 IO</td>
<td>1</td>
</tr>
<tr>
<td>LED 指示 IO</td>
<td>1</td>
</tr>
<tr>
<td>连接性</td>
<td>与 XBee 插座兼容</td>
</tr>
</table>

## 电气特性
---
<table>
<tr>
<th>规格</th>
<th>最小值</th>
<th>典型值</th>
<th>最大值</th>
<th>单位</th>
</tr>
<tr>
<td>最大输入电压</td>
<td>-0.3</td>
<td></td>
<td>3.6</td>
<td>V</td>
</tr>
<tr>
<td>工作输入电压</td>
<td>2.0</td>
<td>3.3</td>
<td>3.6</td>
<td>V</td>
</tr>
<tr>
<td>发射电流</td>
<td></td>
<td>15</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>接收电流</td>
<td></td>
<td>8.5</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>深度睡眠电流</td>
<td></td>
<td>600</td>
<td></td>
<td>uA</td>
</tr>
<tr>
<td>工作温度</td>
<td>-40</td>
<td></td>
<td>+65</td>
<td>°C</td>
</tr>
</table>

## 引脚定义
---
![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/HM-11_Pinout.jpg)

<table>
<tr>
<th>引脚</th>
<th>名称</th>
<th>描述</th>
</tr>
<tr>
<td>1</td>
<td>UART_RTS</td>
<td>UART</td>
</tr>
<tr>
<td>2</td>
<td>UART_TX</td>
<td>UART</td>
</tr>
<tr>
<td>3</td>
<td>UART_CTS</td>
<td>UART</td>
</tr>
<tr>
<td>4</td>
<td>UART_RX</td>
<td>UART</td>
</tr>
<tr>
<td>5</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>NV</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>NV</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>VCC</td>
<td>电源供电 3.3V</td>
</tr>
<tr>
<td>10</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>RESETB</td>
<td>复位，低电平有效，至少保持 5ms</td>
</tr>
<tr>
<td>12</td>
<td>GND</td>
<td>地</td>
</tr>
<tr>
<td>13</td>
<td>PIO3</td>
<td>IO 端口，用于连接 DHT11/DS18B20</td>
</tr>
<tr>
<td>14</td>
<td>PIO2</td>
<td>数字输入/输出</td>
</tr>
<tr>
<td>15</td>
<td>PIO1</td>
<td>LED 指示灯</td>
</tr>
<tr>
<td>16</td>
<td>PIO0</td>
<td>按键引脚</td>
</tr>
</table>

## AT 指令与配置
---
**1）查询本机 MAC 地址**

发送：AT+ADDR?

成功返回后：OK+LADD: MAC 地址（12 字符的地址）

**2）查询波特率**

发送：AT+BAUD?

成功返回后：OK+Get: [para1]

参数 para1 范围：0 ~ 8。对应的参数列表如下：

0 -------- 9600

1 -------- 19200

2 -------- 38400

3 -------- 57600

4 -------- 115200

5 -------- 4800

6 -------- 2400

7 -------- 1200

8 -------- 230400

默认值：0（9600）

**3）设置波特率**

发送：AT+BAUD[para1]

成功返回后：OK+Set:[para1]

示例：发送 AT+BAUD1，返回 OK+Set: 2。波特率设置为 19200。

注意：切换到 1200 后，模块将不再支持 AT 指令配置，需在待机状态下按下 PIO0，模块可恢复出厂设置。不建议使用该波特率。设置波特率后，模块需重新上电，参数才能生效。

**4）连接到指定的蓝牙地址**

发送：AT+CON[para1]

成功返回后：OK+CONN[para2]

参数 para2 范围：A、E、F

示例：蓝牙地址为 0017EA0943AE，发送 AT+CON0017EA0943AE，模块返回：OK+CONNA 或 OK+CONNF 或 CONNE 或 OK。

**5）清除设备配对信息**

发送：AT+CLEAR

成功返回后：OK+CLEAR

清除已连接设备的地址码信息。

**6）查询模块工作模式**

发送：AT+MODE?

成功返回后：OK+Get: [para]

参数 para 范围：0 ~ 2。0 表示透传模式，1 表示 PIO 采集 + 远程控制 + 透传，2 表示透传 + 远程控制模式。默认值为 0。

**7）设置模块工作模式**

发送：AT+MODE [para]

成功返回后：OK+Set: [para]

**8）查询设备名称**

发送：AT+NAME?

成功返回后：OK+NAME [para1]

**9）设置设备名称**

发送：AT+NAME [para1]

成功返回后：OK+Set: [para1]

示例：将设备名称设置为 Seeed，发送 AT+NAMESeeed，返回 OK+Set: Seeed。此时蓝牙模块的名称已更改为 Seeed。

注意：指令执行后需重新上电，设置的参数才能生效。

**10）查询配对密码**

发送：AT+PASS?

成功返回后：OK+PASS: [para1]

参数 para1 范围：000000 ~ 999999，默认值为 000000。

**11）设置配对密码**

发送：AT+PASS [para1]

成功返回后：OK+Set: [para1]

**12）恢复出厂设置**

发送：AT+RENEW

成功返回后：OK+RENEW

恢复模块的默认出厂设置，模块设置将被重置为出厂状态，延迟 500ms 后模块重启。如无必要，请谨慎操作。

**13）模块重启**

发送：AT+RESET

成功返回后：OK+RESET

指令执行后模块将延迟 500ms 后重启。

**14）设置主从模式**

发送：AT+ROLE [para1]

成功返回后：OK+Set: [para1]

## 示例代码
---
// 主设备
```
/*

 此示例代码属于公共领域。

 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
    // 打开串行通信并等待端口打开：
    Serial.begin(9600);
    while (!Serial) {
        ; // 等待串口连接，仅适用于 Leonardo
    }

    Serial.println("晚安，月亮！");

    // 设置 SoftwareSerial 端口的数据速率
    mySerial.begin(9600);
    // 设置为主设备
    mySerial.print("AT+ROLE1");
    delay(10000);
}

void loop() // 不断重复运行
{
    // 设置 SoftwareSerial 端口的数据速率
    mySerial.print("测试，我是主设备");
    delay(10000);
    if (mySerial.available())
        Serial.write(mySerial.read());
    if (Serial.available())
        mySerial.write(Serial.read());
}
```
// 从设备
```
/*

 此示例代码属于公共领域。

 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
    // 打开串行通信并等待端口打开：
    Serial.begin(9600);
    while (!Serial) {
        ; // 等待串口连接，仅适用于 Leonardo
    }

    Serial.println("晚安，月亮！");

    // 设置 SoftwareSerial 端口的数据速率
    mySerial.begin(9600);
    // 设置为从设备
    mySerial.print("AT+ROLE0");
    delay(10000);
}

void loop() // 不断重复运行
{
    // 设置 SoftwareSerial 端口的数据速率
    mySerial.print("测试，我是从设备");
    delay(10000);
    if (mySerial.available())
        Serial.write(mySerial.read());
    if (Serial.available())
        mySerial.write(Serial.read());
}
```

## 相关项目
---
### 什么是 Grove-串口蓝牙

![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/7be197fcaee35992babbffd47462bbc0.image.530x397.jpg)

串口蓝牙旨在设置透明的无线串口连接。

串口蓝牙模块完全符合 Bluetooth V2.0+EDR（增强数据速率）标准，支持 3Mbps 调制，配备完整的 2.4GHz 无线电收发器和基带。

它使用 CSR Bluecore 04-External 单芯片蓝牙系统，采用 CMOS 技术，并具有 AFH（自适应频率跳跃功能）。

### 红外遥控

![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/Seeed-recipe-66-20140625115150.jpg)

此项目使用 Grove - 水传感器创建一个简单但有效的植物浇水解决方案。

通过此演示，我们可以：

* 将所有远程命令集成到一个 Android 设备中

* 通过蓝牙在 Seeeduino 和 Android 面板之间通信

* 通过红外进行远程控制

[**我想制作它。**](https://www.seeedstudio.com/recipe/66-ir-remote.html)

[**更多精彩的蓝牙项目**](https://www.seeedstudio.com/recipe/index.php?query=bluetooth)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>