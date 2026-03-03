---
description: Xadow - BLE
title: Xadow - BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_BLE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/813004001xadow_ble.jpg)

Xadow - BLE 是一款支持蓝牙智能的 Xadow 形态模块，基于 HM-11 模块。Xadow - BLE 可用于通常使用 Xadow 模块的硬件设置。使用 Xadow - BLE，支持 Xadow 的嵌入式系统可以与台式电脑、智能手机、平板电脑甚至其他嵌入式系统进行通信，提供蓝牙智能（又称蓝牙低功耗，BLE）。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-BLE-p-1727.html)

## 特性
---
- 兼容 XBee 外形
- 蓝牙协议：蓝牙规范 V4.0 BLE
- 工作频率：2.4 GHz ISM 频段
- 接口方式：串口
- 在开放环境下，模块间可实现 30 米内通信
- 模块间发送和接收无字节限制
- 调制方式：GFSK（高斯频移键控）
- 传输功率：- DBM、23-6 DBM、0 DBM、6 DBM，可通过 AT 指令修改
- 使用 TI CC2540 芯片，配置空间为 256 KB，支持 AT 指令，用户可根据需要更改角色（主模式、从模式）、串口波特率、设备名称、匹配参数（如密码），使用灵活。
- 电源供应：+ 3.3 VDC 50 mA
- 工作温度：-5 ~ +65 摄氏度

## 规格
---

|规格|值|
|---|---|
|微处理器|CC2540|
|资源|支持 AT 指令，用户可根据需要更改角色（主模式、从模式）、串口波特率、设备名称、匹配参数（如密码），使用灵活。|
|PCB 尺寸|24.5mmx30.5mmx0.8mm|
|外形尺寸|24.5mmx30.5mmx9.77mm|
|电源供应|3.3V|
|通信协议|Uart(TTL)|
|IO 数量|2|
|按键输入 IO|1|
|LED 指示 IO|1|
|连接性|与 Xadow 插座兼容|

## 电气特性
---
|规格|最小值|典型值|最大值|单位|
|---|---|---|---|---|
|最大输入电压|-0.3|-|3.6|V|
|工作输入电压|2.0|3.3|3.6|V|
|发射电流|-|15|-|mA|
|接收电流|-|8.5|-|mA|
|深度睡眠电流|-|600|-|uA|
|工作温度|-40|-|125|°C|

## 引脚定义
---
![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Xadow_ble_pin.jpg)

:::note
    仅列出重要的备用功能，可能还有更多，请参考数据手册。
:::

## 使用方法
---
**AT 指令与配置**

**1）查询本机 MAC 地址**

发送：AT+ADDR?

成功发送后返回：OK + LADD: MAC 地址（地址为 12 字符串）

**2）查询波特率**

发送：AT+BAUD?

成功发送后返回：OK + Get: [para1]

para1 范围：0 ~ 8。参数对应：0 表示 9600，1 表示 19200，2 表示 38400，3 表示 57600，4 表示 115200，5 表示 4800，6 表示 1200，7 表示 2400。默认波特率为 9600。

**3）设置波特率**

发送：AT+BAUD[para1]

成功发送后返回：OK + Set:[para1]

示例：发送 AT+BAUD1，返回：OK + Set: 2。波特率设置为 19200。

:::note
    切换到 1200 后，模块将不再支持 AT 指令配置，且在待机状态下按下 PIO0，模块可恢复出厂设置。不建议使用该波特率。设置波特率后，模块需重新上电，参数设置才能生效。
:::

**4）连接到指定的蓝牙地址**

发送：AT+CON[para1]

成功发送后返回：OK + CONN[para2]

para2 范围：A、E、F

示例：蓝牙地址为 0017EA0943AE，发送 AT+CON0017EA0943AE，模块返回：OK + CONNA 或 OK + CONNF 或 OK + CONNE。

**5）清除设备匹配信息**

发送：AT+CLEAR

成功发送后返回：OK + CLEAR

清除已连接设备的地址码信息。

**6）查询模块工作模式**

发送：AT+MODE?

成功发送后返回：OK + Get: [para]

para 范围：0 ~ 2。0 表示透传模式，1 表示 PIO 采集 + 透传模式，2 表示透传 + 遥控模式。默认值为 0。

**7）设置模块工作模式**

发送：AT+MODE[para1]

成功发送后返回：OK + Set: [para]

**8）查询设备名称**

发送：AT+NAME?

成功发送后返回：OK + NAME [para1]

**9）设置设备名称**

发送：AT+NAME[para1]

成功发送后返回：OK + Set: [para1]

示例：将设备名称设置为 Seeed，发送 AT+NAMESeeed，返回 OK + Set: Seeed。此时蓝牙模块的名称已更改为 Seeed。注意：指令执行后需重新上电，设置参数才能生效。

**10）查询匹配密码**

发送：AT+PASS?

成功发送后返回：OK + PASS: [para1]

para1 范围为 000000 ~ 999999，默认值为 000000。

**11）设置匹配密码**

发送：AT+PASS[para1]

成功发送后返回：OK + Set: [para1]

**12）恢复出厂设置**

发送：AT+RENEW

成功发送后返回：OK + RENEW

恢复模块的默认出厂设置，模块设置将被重置为出厂状态，延迟 500 毫秒后模块重启。如无必要，请谨慎操作。

**13）模块重置**

发送：AT+RESET

成功发送后返回：OK + RESET

指令执行后模块将延迟 500 毫秒后重启。

**14）设置主从模式**

发送：AT+ROLE[para1]

成功发送后返回：OK + Set: [para1]

## HelloWorld
---
:::note
当将 Xadow-BLE 连接到 Xadow 主板时，您需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::
**//将 Xadow BLE 设置为 BLE 主设备**

```
#define SerialBaud   9600
#define Serial1Baud  9600

void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
    while(!Serial.available());
    // 设置为主设备
    Serial1.print("AT+ROLE1");
    delay(1000);
}

void loop()
{
    while(Serial.available()){
      Serial1.write(Serial.read());
    }
    while(Serial1.available()){
      Serial.write(Serial1.read());
    }
}
```

**//将 Xadow BLE 设置为 BLE 从设备**

```
#define SerialBaud   9600
#define Serial1Baud  9600
void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
    while(!Serial.available());
    // 设置为从设备
    Serial1.print("AT+ROLE0");
    delay(1000);
}

void loop()
{
    while(Serial.available()){
      Serial1.write(Serial.read());
    }
    while(Serial1.available()){
      Serial.write(Serial1.read());
    }
}
```

## Android BLE 通信
---
这里我们向您展示如何让 Xadow-BLE 与您的 Android 手机进行通信（注意：您的 Android 系统版本应高于 4.3）。
1. 下载 Android APP [这里](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMBLEComAssistant.rar)，并将其安装到您的 Android 手机。
2. 将 Xadow BLE 与 Xadow 主板连接，然后复制上面的 Xadow BLE 从设备示例代码，编译并上传到 Xadow 主板。
3. 打开一个串口工具（例如 SSCOM32），并打开 Xadow 主板的串口。
4. 打开您在第一步中安装的 BLE 示例 APK，界面如下：

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_start.png)

5. 点击界面中心的开始按钮，它将开始扫描 BLE 从设备。扫描结果将显示在对话框列表中。

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_scanResult.png)

6. 选择 Seeed BLE，它将尝试自动连接 Xadow BLE。
7. 成功连接 BLE 从设备后，您会发现 UUID 为 null，您需要从 Characteristics UUID 列表中选择一个。这里我们选择 UUID:0000ffe1-0000-1000-8000-00805f9b34fb。

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_UUIDSelected.png)

8. 好了，激动人心的时刻来了！在文本框中输入命令（数据），然后点击发送按钮，消息将发送到指定的 BLE 设备。接收文本框将显示来自从设备的消息，如下所示。玩得开心！

![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_sendData.png)![](https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_recvData.png)

## 在线原理图查看器
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_BLE/res/Xadow-BLE_v1.0_20131224.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow-BLE_v1.0 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_BLE/res/Xadow-BLE_v1.0_20131224.zip)
- [适用于 Android 的 BLE 应用程序](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMBLEComAssistant.rar)
- [BLE 模块数据手册](https://files.seeedstudio.com/wiki/Xadow_BLE/res/Bluetooth4_en.pdf)
- [GitHub 上的 BLE Android 源代码](https://github.com/Seeed-Studio/BLE_Example)
- [4.0 BLE IOS6 源代码](https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMSoft_ios6.zip)
- [4.0 BLE IOS7 源代码](https://files.seeedstudio.com/wiki/Xadow_BLE/res/File-HMSoft_ios7.zip)
- [4.0 BLE Android 源代码](https://files.seeedstudio.com/wiki/Xadow_BLE/res/File-BluetoothLeGatt.rar)
- [更多文档链接](http://www.huamaosoft.com/index_en.asp?page=2&ID=1)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时拥有流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>