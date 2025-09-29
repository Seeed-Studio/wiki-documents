---
title: Grove BLE v1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-BLE_v1/
slug: /cn/Grove-BLE_v1
last_update:
  date: 01/06/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_front.png)![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_Back.png)

Grove - BLE v1 (Grove - 低功耗蓝牙 v1) 使用低功耗蓝牙模块 -- **HM-11**，基于 TI CC2540 芯片，支持 AT 命令。作为 Grove 产品，通过 Base Shield 可以方便地将 Grove - BLE 与 Arduino 开发板配合使用。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-BLE-p-1929.html)

参数
----------

| 规格参数            | 名称                                                             |
|---------------------|------------------------------------------------------------------|
| 蓝牙版本            | 蓝牙规范 V4.0 BLE                                                 |
| 工作频率            | 2.4GHz ISM 频段                                                  |
| 调制方式            | GFSK(高斯频移键控)                                                |
| 射频功率            | -23dbm, -6dbm, 0dbm, 6dbm, 可通过 AT 命令 AT+POWE 修改           |
| 速度                | 异步: 6K 字节, 同步: 6K 字节                                      |
| 灵敏度              | ≤-84dBm at 0.1% BER                                              |
| 安全性              | 认证和加密                                                        |
| 服务                | 中心和外围设备 UUID FFE0,FFE1                                     |
| 供电电源            | 3.3v - 5v                                                        |
| 工作温度            | –5 ~ +65 摄氏度                                                   |
| 尺寸                | 40cm x 20cm                                                      |
| 工作电流            | &lt; 10 mA                                                       |
| 输出电流            | &lt; 20 mA                                                       |
| 休眠电流            | &lt; 1 mA                                                        |

:::note
HM-11 的供电电源是 3.3v，但 Grove - BLE 支持 3.3V 到 5V。
:::

:::tip
    更多关于 Grove 模块的详细信息请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。我们在大多数情况下只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

### 引脚定义

Grove 连接器有四根线：GND、VCC、RX、TX。

### 设计特点

我们使用了 TD6810 芯片作为电压调节器，因此供电电源的范围可以是 3.3v 到 5v。此外，还有一个电平转换电路，确保数据传输的准确性。

### AT 命令

**1）查询模块地址**

发送： AT+ADDR?

接收：OK+LADD:address

**2） 查询波特率**

发送：AT+BAUD?

接收：OK+Get:[para1]

范围： 0~8; 0--9600，1--19200，2--38400，3--57600，4--115200，5--4800，6--2400，7--1200，8--230400

默认: 0--9600。

**设置波特率**

发送：AT+BAUD[para1]

接收：OK+Set:[para1]

例如：发送 ：AT+BAUD1 ，接收：OK+Set:1。波特率已设置为 19200

:::note
如果设置为值 7，下次上电后，模块将不支持任何 AT 命令，直到按下 PIO0，模块将波特率更改为 9600。
:::

**3） 尝试连接一个地址**

发送：AT+CON[para1]

接收：OK+CONN[para2]

范围 ：A,E,F

例如：尝试连接 MAC 地址为 00:17:EA:09:09:09 的设备

发送: AT+CON0017EA090909

可能收到回复: OK+CONNA --> 接受请求，正在连接 ; OK+CONNE --> 连接错误 ; OK+CONN --> 已连接 , 如果设置了 AT+NOTI1 ; OK+CONNF --> 连接失败 , 10 秒后

:::note
仅使用中心角色。如果远程设备已连接到其他设备或关闭，大约 10 秒后将收到 "OK+CONNF"。
:::

**4） 清除上次连接的设备地址**

发送：AT+CLEAR

接收：OK+CLEAR

**5） 查询模块工作模式**

发送：AT+MODE?

接收：OK+Get:[para]

范围： 0~2;

0--传输模式，1--PIO采集模式 + 模式0，2--远程控制模式 + 模式0。

默认值：0

**设置模块工作模式**

发送：AT+MODE[]

接收：OK+Set:[para]

**6） 查询模块名称**

发送：AT+NAME?

接收：OK+NAME[para1]

**设置模块名称**

发送：AT+NAME[para1]

接收：OK+Set:[para1]

例如：发送：AT+NAMESeeed，接收：OK+Set:Seeed

<!-- <div class="admonition note">
<p class="admonition-title">Note</p> -->
:::note
名称将在下次上电后更改。
:::
<!-- </div> -->

**7） 查询PIN码**

发送：AT+PASS?

接收：OK+PASS:[para1]

范围：000000~999999。

默认值：000000。

**设置PIN码**

发送：AT+PASS[para1]

接收：OK+Set:[para1]

**8） 恢复所有设置值到出厂设置**

发送：AT+RENEW

接收：OK+RENEW

**9） 重启模块**

发送：AT+RESET

接收：OK+RESET

**10）查询主从角色**

发送：AT+ROLE[para1]

接收：OK+Set:[para1]

范围：0~1；

0--从设备：1--主设备：默认值：0。

更多AT命令请参考BLE模块的数据手册。

软件串口通信
----------------------------

![](https://files.seeedstudio.com/wiki/Grove-BLE_v1/img/Grove-BLE_connection1.png)

Grove - BLE可以用作主设备或从设备，您可以通过不同的演示来使用它。**如果您要使用以下软件串口程序，请参考上图中的连接方式。TX-->D2，RX-->D3。**

打开Arduino IDE，复制以下程序并将其上传到Arduino/Seeeduino板上。然后两个BLE模块就可以相互通信了。

**演示：BLE从设备**

```
    #include <SoftwareSerial.h>   //Software Serial Port
    #define RxD 2
    #define TxD 3

    #define DEBUG_ENABLED  1

    SoftwareSerial BLE(RxD,TxD);

    void setup()
    {
      Serial.begin(9600);
      pinMode(RxD, INPUT);
      pinMode(TxD, OUTPUT);
      setupBleConnection();

    }

    void loop()
    {
      char recvChar;
      while(1){
        if(BLE.available()){//检查是否有来自远程BLE的数据
          recvChar = BLE.read();
          Serial.print(recvChar);
        }
        if(Serial.available()){//检查是否有来自本地串口终端的数据，您可以在此处添加其他应用程序
          recvChar  = Serial.read();
          BLE.print(recvChar);
        }
      }
    }

    void setupBleConnection()
    {
      BLE.begin(9600); //将BLE波特率设置为默认波特率9600
      BLE.print("AT+CLEAR"); //清除所有先前设置
      BLE.print("AT+ROLE0"); //将蓝牙名称设置为从设备
      BLE.print("AT+SAVE1");  //不保存连接信息
    }
```

**演示：BLE主设备**

```
    #include <SoftwareSerial.h>   //Software Serial Port
    #define RxD 2
    #define TxD 3

    #define DEBUG_ENABLED  1

    SoftwareSerial BLE(RxD,TxD);

    void setup()
    {
      Serial.begin(9600);
      pinMode(RxD, INPUT);
      pinMode(TxD, OUTPUT);
      setupBleConnection();

    }

    void loop()
    {
      char recvChar;
      while(1){
        if(BLE.available()){//检查是否有来自远程BLE的数据
          recvChar = BLE.read();
          Serial.print(recvChar);
        }
        if(Serial.available()){//检查是否有来自本地串口终端的数据，您可以在此处添加其他应用程序
          recvChar  = Serial.read();
          BLE.print(recvChar);
        }
      }
    }

    void setupBleConnection()
    {
      BLE.begin(9600); //将BLE波特率设置为默认波特率9600
      BLE.print("AT+CLEAR"); //清除所有先前设置
      BLE.print("AT+ROLE1"); //将蓝牙名称设置为主设备
      BLE.print("AT+SAVE1");  //不保存连接信息
    }
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Android版BLE应用程序](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/HMBLEComAssistant.rar)
- [BLE模块数据手册](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Bluetooth4_en.pdf)
- [原理图](https://files.seeedstudio.com/wiki/Grove-BLE_v1/res/Grove-BLE_v1.0.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_BLE_v1 -->

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