---
description: BLE Bee
title: BLE Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BLE_Bee
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Ble_bee.jpg)

BLE Bee 是一款支持蓝牙智能的 XBEE 形状模块，基于 HM-11 模块。BLE Bee 可用于通常使用 XBEE 模块的硬件设置。使用 BLE Bee，支持 XBee 插座的嵌入式系统可以与台式电脑、智能手机、平板电脑甚至其他嵌入式系统进行通信，提供蓝牙智能（又称蓝牙低功耗，BLE）。

##     特性   ##

- 兼容 XBee 外形

- 蓝牙协议：蓝牙规范 V4.0 BLE

- 工作频率：2.4 GHz ISM 频段

- 接口方式：串口

- 在开放环境下，模块间可实现 30 米内通信

- 模块间发送和接收无字节限制

- 调制方式：GFSK（高斯频移键控）

- 传输功率：- DBM、23-6 DBM、0 DBM、6 DBM，可通过 AT 指令修改

- 使用 TI CC2540 芯片，配置空间为 256 KB，支持 AT 指令，用户可根据需要更改角色（主从模式）、串口波特率、设备名称、匹配参数（如密码），使用灵活。

- 电源：+ 3.3 VDC 50 mA

- 工作温度：- 5 ~ + 65 摄氏度

##   规格参数   ##

 |规格|值
 |--|--|
 |微处理器|CC2540|
 |资源|支持 AT 指令，用户可根据需要更改角色（主从模式）、串口波特率、设备名称、匹配参数（如密码），使用灵活。|
 |PCB 尺寸|24.5mmx30.5mmx0.8mm|
 |外形尺寸|24.5mmx30.5mmx9.77mm|
 |电源|3.3V|
 |通信协议|Uart(TTL)|
 |IO 数量|2|
 |按键输入 IO|1|
 |LED 指示灯 IO|1|
 |连接性|与 XBee 插座兼容|

##     电气特性  ##

| 规格|最小值|典型值|最大值|单位
|--|--|--|--|--|
 |最大输入电压|-0.3||3.6|V|
 |工作输入电压|2.0|3.3|3.6|V|
 |发送电流||15|| mA|
 |接收电流||8.5||mA|
 |深度睡眠电流||600||uA|
 |工作温度|-40||125|°C|

##     引脚定义  ##

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/BLE_BEE11.jpg)

注意：仅列出了重要的备用功能，可能还有更多，请参考数据手册。

##     使用方法  ##

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Ble_bee_user.jpg)

-   将 Seeed BLE Shield 直接插入 Arduino/Seeeduino。**请注意 XBee Shield 上跳线的位置。**

-   硬件或软件串口：您可以选择七个数字引脚中的两个作为通信通道。只需将跳线插入接头即可。

-   信号灯：如果没有设备连接 BLE，灯会闪烁；但连接 BLE 后，灯会保持常亮。

##    AT 指令与配置  ##

**1）	查询本机 MAC 地址**

发送：AT + ADDR?

发送后成功返回：OK + LADD: MAC 地址（地址为 12 字符串）

**2）	查询波特率**

发送：AT+BAUD?

发送后成功返回：OK + Get: [para1]

para1 范围：0 ~ 8。参数对应：0 表示 9600，1 表示 19200，2 表示 38400，3 表示 57600，4 表示 115200，5 表示 4800，6 表示 1200，7 表示 2400。默认波特率为 9600。

**3）	设置波特率**

发送：AT+BAUD[para1]

发送后成功返回：OK+Set:[para1]

示例：发送：AT + BAUD1，返回：OK + Set: 2。波特率设置为 19200。

注意：切换到 1200 后，模块将不再支持 AT 指令配置，按下 PIO0 进入待机状态，模块可恢复出厂设置。不建议使用 1200 波特率。设置波特率后，模块需重新上电，参数设置才能生效。

**4）	连接到指定的蓝牙地址**

发送：AT+CON[para1]

发送后成功返回：OK+CONN[para2]

para2 范围：A、E、F

示例：蓝牙地址为：0017EA0943AE，发送 AT + CON0017EA0943AE，模块返回：OK + CONNA 或 OK + + CONNF 或 OK + CONNE。

**5）	清除设备匹配信息**

发送：AT + CLEAR

发送后成功返回：OK + CLEAR

成功清除已连接设备的地址码信息。

**6）	查询模块工作模式**

发送：AT + MODE?

发送后成功返回：OK + Get: [para]

para 范围：0 ~ 2。0 表示透传模式，1 表示 PIO 采集 + 透传，2 表示透传 + 遥控模式。默认值为 0。

**7）	设置模块工作模式**

发送：AT + MODE []

发送后成功返回：OK + Set: [para]

**8）	查询设备名称**

发送：AT + NAME?

发送后成功返回：OK + NAME [para1]

**9）	设置设备名称**

发送：AT + NAME [para1]

发送后成功返回：OK + Set: [para1]

示例：将设备名称设置为 Seeed，发送 AT + NAMESeeed，返回 OK + Set: Seeed。此时，蓝牙模块的名称已更改为 Seeed。
注意：指令执行后需重新上电，设置参数才能生效。

**10）	查询匹配密码**

发送：AT + PASS?

发送后成功返回：OK + PASS: [para1]

para1 范围为 000000 ~ 999999，默认值为 000000。

**11）	设置匹配密码**

发送：AT + PASS [para1]

发送后成功返回：OK + Set: [para1]

**12）	恢复出厂设置**

发送：AT + RENEW

发送后成功返回：OK + RENEW

恢复模块的默认出厂设置，模块设置将被重置为出厂状态，延迟 500 毫秒后模块重新启动。如无必要，请谨慎操作。

**13）	模块重置**

发送：AT + RESET

发送后成功返回：OK + RESET

指令执行后模块将延迟 500 毫秒后重新启动。

**14）	设置主从模式**

发送：AT + ROLE [para1]

发送后成功返回：OK + Set: [para1]

有关 AT 指令的更多信息，请参考 BLE 模块的数据手册。您可以从资源空间下载。

## 软件串口通信 ##

BLE Bee 可以作为主设备或从设备使用，您可以通过不同的示例来使用它。**如果您打算使用以下软件串口程序，请参考前面图片中的连接方式：BLE_TX-->D2，BLE_RX-->D3。**

打开 Arduino IDE，复制以下程序并上传到 Arduino/Seeeduino 板上。然后两个 BLE Shields 就可以相互通信。

**示例：BLE 从设备**

```

#include <SoftwareSerial.h>   //软件串口
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
    if(BLE.available()){//检查是否有远程 BLE Shield 发送的数据
      recvChar = BLE.read();
      Serial.print(recvChar);
    }
    if(Serial.available()){//检查是否有本地串口终端发送的数据，您可以在这里添加其他应用程序
      recvChar  = Serial.read();
      BLE.print(recvChar);
    }
  }
}

void setupBleConnection()
{
  BLE.begin(9600); //将 BLE 波特率设置为默认波特率 9600
  BLE.print("AT+CLEAR"); //清除所有之前的设置
  BLE.print("AT+ROLE0"); //将蓝牙名称设置为从设备
  BLE.print("AT+SAVE1");  //不保存连接信息
}

```

**示例：BLE 主设备**

```

#include <SoftwareSerial.h>   //软件串口
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
    if(BLE.available()){//检查是否有远程 BLE Shield 发送的数据
      recvChar = BLE.read();
      Serial.print(recvChar);
    }
    if(Serial.available()){//检查是否有本地串口终端发送的数据，您可以在这里添加其他应用程序
      recvChar  = Serial.read();
      BLE.print(recvChar);
    }
  }
}

void setupBleConnection()
{
  BLE.begin(9600); //将 BLE 波特率设置为默认波特率 9600
  BLE.print("AT+CLEAR"); //清除所有之前的设置
  BLE.print("AT+ROLE1"); //将蓝牙名称设置为主设备
  BLE.print("AT+SAVE1");  //不保存连接信息
}

```

### 硬件串口通信 ###

此外，您可以通过 AT 指令直接使用 BLE Shield，而无需任何程序，**但您需要更改两个跳线的位置：BLE_TX-->D1，BLE_RX-->D0。**

然后打开一个串口工具，例如 CoolTerm 或其他工具。以下是一些设置：波特率：9600（默认），数据位：8，校验位：无，停止位：1。

首先，您可以向 BLE Shield 发送一个或多个 "AT" 指令进行测试。如果返回 "OK"，那么您可以执行以下步骤。**如果没有响应，您可以上传一个空程序到 Arduino/Seeeduino**，然后通过之前的操作查看是否能从串口工具获得响应。

```

void setup()
{                
}

void loop()
{
}

```

然后，向 BLE Shield 发送 "AT+ROLE0" 指令；它会返回 "OK+Set:0"，这意味着现在 BLE Shield 已准备好作为从设备。

![](https://files.seeedstudio.com/wiki/BLE_Bee/img/Seeed_BLE-3.png)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE_Bee_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   资源  ##

 - **[原理图]**[BLE_Bee_v1.0 的原理图](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE_Bee_v1.0.zip)

 - **[PDF]**[BLE Bee v1.0 PCB](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE%20Bee%20v1.0%20PCB.pdf)

 - **[PDF]**[BLE Bee v1.0 原理图](https://files.seeedstudio.com/wiki/BLE_Bee/res/BLE%20Bee%20v1.0%20sch.pdf)

 - **[APK]**[适用于 Android 的 BLE 应用程序](https://files.seeedstudio.com/wiki/BLE_Bee/res/HMBLEComAssistant.rar)

- **[数据手册]**[BLE 模块数据手册](https://files.seeedstudio.com/wiki/BLE_Bee/res/Bluetooth40_en.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>