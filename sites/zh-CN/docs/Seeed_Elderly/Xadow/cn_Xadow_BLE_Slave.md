---
description: Xadow - BLE 从机
title: Xadow - BLE 从机
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_BLE_Slave
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Xadow_ble_01.jpg)

这是一个蓝牙 4.0 模块（蓝牙 4.0 从机模块）。与蓝牙 2.0 和 3.0 版本相比，它更先进，具有更低的功耗。通过使用此模块，您可以轻松地将自己的项目连接到蓝牙 4.0 的主设备。例如，它可以将检测到的关于您身体信息的数据传输到手机进行显示或分析，从而帮助您更好地管理身体状况。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-BLE-Slave-p-1546.html)

## 规格
---
- 蓝牙 4.0 模块
- PIN:0000
- 默认波特率：38400
- 尺寸：25.43mm x 20.35mm

## 演示
---
此演示将向您展示如何使用 Xadow BLE 从机连接蓝牙设备并进行通信。您可以使用它与支持蓝牙 4.0 的手机进行通信。现在让我们进行测试：
- 将 Xadow BLE 从机连接到 Xadow 主板，并使用 USB 数据线将主板连接到 PC。在正常模式下，蓝色 LED 会每次闪烁一次。如果蓝色 LED 未亮，请点击 Xadow 主板上的“重置”按钮。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/XadowBLE.jpg)

:::note
    当将 Xadow BLE 从机连接到 Xadow 主板时，您需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::
- 将测试代码上传到您的 Xadow 主板。

```
int error=0;
int n;
void setup()
{
    Serial.begin(38400);
    delay(100);
    PORTB|=0x04;
    TESTIO();
    if(error==0)
    {
        DDRB|=0x81;
        for(n=0;n<40;n++)
        {
            PORTB&=~0x81;
            delay(50);
            PORTB|=0x81;
        }
    }

    Serial1.begin(38400);
}
void loop()
{
    boot();
}
void TESTIO(void)
{
    DDRB|=0x0e;
    PORTB&=~0x0e;
    DDRF|=0x01;
    PORTF&=~0x01;
    DDRD&=~0x0f;

    PORTB|=0x04;
    PORTF|=0x01;
    delay(30);
    if(!(PIND&0x01))
    {
        error=1;
    }
    if(PIND&0x02)
    {
        error=1;
    }
    if(!(PIND&0x04))
    {
        error=1;
    }
    if(PIND&0x08)
    {
        error=1;
    }
    PORTB&=~0x04;
    PORTB|=0x0a;
    PORTF&=~0x01;
    delay(30);
    if(PIND&0x01)
    {
        error=1;
    }
    if(!(PIND&0x02))
    {
        error=1;
    }
    if(PIND&0x04)
    {
        error=1;
    }
    if(!(PIND&0x08))
    {
        error=1;
    }
    Serial.println(error);
}
void boot(void)
{
    for(;;)
    {
        if(Serial.available())
        {
            Serial1.write(Serial.read());
        }
        if(Serial1.available())
        {
            Serial.write(Serial1.read());
        }
    }
}
```

- 选择一个串口工具发送和接收数据。这里我们使用 [Sscom32E](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/Sscom32E.zip)。波特率应设置为 38400。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Open_serial_tool.jpg)

- 准备好您的手机设备，安装 [“BlueSPP” APP](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/BlueSPP_V4.0.zip) 并启动 BlueSPP。请记住，您的设备应支持蓝牙 4.0。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Open_Bluetooth.jpg)

- 点击“搜索”以查找设备。找到 Xadow BLE 从机设备并按下以开始连接蓝牙设备。

:::tip
    如果 'BlueSPP' 无法找到 BLE 模块，您需要先在手机的设备管理器中将手机与 BLE 模块配对。
:::
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Search_device.jpg)

- 连接后，设备屏幕如下所示。您可以输入文本并发送数据，数据将显示在您 PC 的串口工具上。当然，您也可以通过 PC 的串口工具向手机发送数据。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Send_and_Receive_Data.jpg)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/BLE_Slave_send_data.jpg)

## 资源
---
- [Xadow BLE 从机](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/Xadow_BLE_Slave.zip)
- [“BlueSPP” APP](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/BlueSPP_V4.0.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>