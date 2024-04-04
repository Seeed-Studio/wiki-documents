---
title: Grove - 红外发射器
description: Grove - 红外发射器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Infrared_Emitter/
slug: /cn/Grove-Infrared_Emitter
last_update:
  date: 03/20/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/main.jpg)

红外线发射器用于通过红外线LED传输红外线信号，而**红外线接收器**则用于在另一侧接收信号。红外线LED与其他任何LED一样，其颜色以940nm为中心。我们不仅可以使用发射器传输数据或命令，还可以使用Arduino模拟遥控器来控制家用电器。红外线发射器可以可靠地传输最远达10米的信号。超过10米，接收器可能无法接收到信号。我们经常将两个Grove模块——[红外线接收器](https://wiki.seeedstudio.com/Grove-Infrared_Receiver)和Grove - 红外线发射器一起使用。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## 版本

产品版本 | 更改内容 | 发布日期 
--|--|--
Grove - 红外线发射器 v1.0 | 初始版本 | 2015年11月01日 
Grove - 红外线发射器 v1.1 | 更改红外线发射管的位置 | 2016年07月24日 
Grove - 红外线发射器 v1.2 | 更改C1的值以使电源更稳定 | 2016年12月14日 

## 应用

- 高功率要求的红外遥控器
- 自由空气传输系统
- 光学计数器和读卡器的红外光源

## 规格

| 参数     | 值/范围      |
| -------- | ------------ |
| 工作电压 | 3.3/5V       |
| 峰值波长 | 940nm        |
| 半强度角 | ϕ = ± 17°    |
| 辐射强度 | 72 mW/sr     |
| 距离     | 10 米(最大)  |
| 工作温度 | -40℃ 至 +80℃ |
| 尺寸     | 20mmX20mm    |

:::提示
    有关Grove模块的更多详细信息，请参阅[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::注意
    上面提到的支持的平台是该模块软件或理论兼容性的一个指标。在大多数情况下，我们只提供Arduino平台的软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。

## 入门指南

Grove - 红外线发射器可以发送数据，而Grove - 红外线接收器将接收这些数据。

### 玩转 Arduino

:::注意
    如果你第一次使用Arduino，我们强烈建议你在开始前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | 基础底板 | Grove - 红外发射器 | Grove - 红外接收器 |
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduinoX2.png)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/baseshiledX2.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/little.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)|[立即获取](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)|

- **步骤 2.** 将Grove - 红外发射器连接到一块Grove基础底板的**D3**端口。

- **步骤 3.**  将Grove - 红外接收器连接到另一块Grove基础底板的**D2**端口。

- **步骤 4.** 将Grove基础底板插入Seeeduino。

- **步骤 5.** 通过USB电缆将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/connect.jpg)

:::注意
如果我们没有Grove基础底板，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 红外发射器 |
|---------------|-------------------------|
| 5V           | 红色                   |
| GND           | 黑色                 |
| 未连接 | 白色                 |
| D3            | 黄色                |

| Seeeduino       | Grove - 红外接收器 |
|---------------|-------------------------|
| 5V           | 红色                   |
| GND           | 黑色                 |
| Not Conencted | 白色                 |
| D2            | 黄色                |

#### 软件

- **步骤 1.** 从Github下载 [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR)。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)来为Arduino安装库。

将以下**发送示例代码**复制到Arduino IDE中：

**发送示例代码:**

```c++
/* send.ino Example sketch for IRLib2
 *  Illustrates how to send a code.
 */
#include <IRLibSendBase.h>    // First include the send base
//Now include only the protocols you wish to actually use.
//The lowest numbered protocol should be first but remainder 
//can be any order.
#include <IRLib_P01_NEC.h>    
#include <IRLib_P02_Sony.h>   
#include <IRLibCombo.h>     // After all protocols, include this
// All of the above automatically creates a universal sending
// class called "IRsend" containing only the protocols you want.
// Now declare an instance of that sender.

IRsend mySender;

#define IR_SEND_PWM_PIN D3

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //delay for Leonardo
  Serial.println(F("Every time you press a key is a serial monitor we will send."));
}

void loop() {
  if (Serial.read() != -1) {
    //send a code every time a character is received from the 
    // serial port. You could modify this sketch to send when you
    // push a button connected to an digital input pin.
    //Substitute values and protocols in the following statement
    // for device you have available.
    mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits
    //mySender.send(NEC,0x61a0f00f,0);//NEC TV power button=0x61a0f00f
    Serial.println(F("Sent signal."));
  }
}

```

将以下**接收示例代码**复制到Arduino IDE中：

**接收示例代码:**

```cpp
/* rawR&cv.ino Example sketch for IRLib2
 *  Illustrate how to capture raw timing values for an unknow protocol.
 *  You will capture a signal using this sketch. It will output data the 
 *  serial monitor that you can cut and paste into the "rawSend.ino"
 *  sketch.
 */
// Recommend only use IRLibRecvPCI or IRLibRecvLoop for best results
#include <IRLibRecvPCI.h> 

IRrecvPCI myReceiver(2);//pin number for the receiver

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //delay for Leonardo
  myReceiver.enableIRIn(); // Start the receiver
  Serial.println(F("Ready to receive IR signals"));
}

void loop() {
  //Continue looping until you get a complete signal received
  if (myReceiver.getResults()) { 
    Serial.println(F("Do a cut-and-paste of the following lines into the "));
    Serial.println(F("designated location in rawSend.ino"));
    Serial.print(F("\n#define RAW_DATA_LEN "));
    Serial.println(recvGlobal.recvLength,DEC);
    Serial.print(F("uint16_t rawData[RAW_DATA_LEN]={\n\t"));
    for(bufIndex_t i=1;i<recvGlobal.recvLength;i++) {
      Serial.print(recvGlobal.recvBuffer[i],DEC);
      Serial.print(F(", "));
      if( (i % 8)==0) Serial.print(F("\n\t"));
    }
    Serial.println(F("1000};"));//Add arbitrary trailing space
    myReceiver.enableIRIn();      //Restart receiver
  }
}
```

- **步骤 7.** 打开Arduino IDE的**串行监视器**，点击**工具-> 串行监视器**。 或者同时按下++ctrl+shift+m++键。

对于**发送示例**，串行应该如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/send.png" /></div>

对于**接收示例**，串行监视器应该如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/recv.png" /></div>

> 对于库的更高级用法，请参阅 [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR)。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]**  [Grove-红外线发射器 eagle 文件](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip)
- **[Lib]**  [红外发送和接收库](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev)
- **[Pdf]**  [TSAL6200 数据手册](http://www.vishay.com/docs/81010/tsal6200.pdf)

## 项目

**IR LaunchPad 到 LaunchPad 通信**：使用 Grove 红外发射器和接收器从一个 LaunchPad 向另一个发送文本！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们的产品时尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
