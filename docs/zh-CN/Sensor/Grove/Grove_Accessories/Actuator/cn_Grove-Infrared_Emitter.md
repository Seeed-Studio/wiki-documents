---
title: Grove - 红外发射器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Infrared_Emitter/
slug: /cn/Grove-Infrared_Emitter
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/main.jpg)

红外发射器通过红外 LED 传输红外信号，同时另一端有一个 **红外接收器** 用于接收信号。红外 LED 类似于其他 LED，其波长中心约为 940nm。我们不仅可以使用发射器传输数据或命令，还可以模拟遥控器，通过 Arduino 控制家用电器。红外发射器可以可靠地传输信号，最远可达 10 米。超过 10 米时，接收器可能无法接收到信号。我们通常将两个 Grove 模块——[红外接收器](https://wiki.seeedstudio.com/cn/Grove-Infrared_Receiver) 和 Grove - 红外发射器一起使用。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## 版本

产品版本 | 变更 | 发布日期
--|--|--
Grove - 红外发射器 v1.0 | 初始版本 | 2015年11月1日
Grove - 红外发射器 v1.1 | 更改红外发射管位置 | 2016年7月24日
Grove - 红外发射器 v1.2 | 更改 C1 的值以使功率更稳定 | 2016年12月14日

## 应用

- 高功率需求的红外遥控单元
- 自由空间传输系统
- 光学计数器和卡片读取器的红外光源

## 规格

| 参数                     | 值/范围       |
|-------------------------|---------------|
| 工作电压                | 3.3/5V        |
| 峰值波长                | 940nm         |
| 半强度角                | ϕ = ± 17°     |
| 辐射强度                | 72 mW/sr      |
| 距离                    | 10米（最大）  |
| 工作温度                | -40℃ 至 +80℃ |
| 尺寸                    | 20mmX20mm     |

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

Grove - 红外发射器可以发送数据，而 Grove - 红外接收器可以接收数据。

### 使用 Arduino

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove - 红外发射器 | Grove - 红外接收器 |
|----------------|-------------|-------------------------|-------------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduinoX2.png)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/baseshiledX2.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/little.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)|[立即购买](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)|

- **步骤 2.** 将 Grove - 红外发射器连接到一个 Grove Base Shield 的端口 **D3**。

- **步骤 3.** 将 Grove - 红外接收器连接到另一个 Grove Base Shield 的端口 **D2**。

- **步骤 4.** 将 Grove Base Shield 插入 Seeeduino。

- **步骤 5.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/connect.jpg)

:::note
 如果没有 Grove Base Shield，我们也可以直接将模块连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 红外发射器 |
|-----------------|-------------------------|
| 5V              | 红色                   |
| GND             | 黑色                   |
| 未连接          | 白色                   |
| D3              | 黄色                   |

| Seeeduino       | Grove - 红外接收器 |
|-----------------|-------------------------|
| 5V              | 红色                   |
| GND             | 黑色                   |
| 未连接          | 白色                   |
| D2              | 黄色                   |

#### 软件

- **步骤 1.** 从 Github 下载 [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR)。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

将以下 **发送示例代码** 复制到 Arduino IDE：

**发送示例代码：**

```cpp
/* send.ino 示例代码用于 IRLib2
 *  演示如何发送代码。
 */
#include <IRLibSendBase.h>    // 首先包含发送基础库
//现在仅包含您实际使用的协议。
//编号最低的协议应首先包含，其他顺序可以随意。
#include <IRLib_P01_NEC.h>    
#include <IRLib_P02_Sony.h>   
#include <IRLibCombo.h>     // 在所有协议之后，包含此文件
// 上述所有内容自动创建一个通用发送类 "IRsend"，仅包含您需要的协议。
// 现在声明一个发送器实例。

IRsend mySender;

#define IR_SEND_PWM_PIN D3

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //为 Leonardo 延迟
  Serial.println(F("每次您在串行监视器中按下一个键，我们都会发送信号。"));
}

void loop() {
  if (Serial.read() != -1) {
    //每次从串行端口接收到字符时发送代码。
    //您可以修改此代码以在按下连接到数字输入引脚的按钮时发送信号。
    //在以下语句中替换设备可用的值和协议。
    mySender.send(SONY,0xa8bca, 20);//Sony DVD 电源 A8BCA, 20 位
    //mySender.send(NEC,0x61a0f00f,0);//NEC TV 电源按钮=0x61a0f00f
    Serial.println(F("发送信号。"));
  }
}
```

将以下 **接收示例代码** 复制到 Arduino IDE：

**接收示例代码：**

```cpp
/* rawR&cv.ino 示例代码用于 IRLib2
 *  演示如何捕获未知协议的原始时间值。
 *  您将使用此代码捕获信号。它将在串行监视器中输出数据，
 *  您可以将其剪切并粘贴到 "rawSend.ino" 示例代码中。
 */
// 推荐仅使用 IRLibRecvPCI 或 IRLibRecvLoop 以获得最佳效果
#include <IRLibRecvPCI.h> 

IRrecvPCI myReceiver(2);//接收器的引脚号

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //为 Leonardo 延迟
  myReceiver.enableIRIn(); // 启动接收器
  Serial.println(F("准备接收红外信号"));
}

void loop() {
  //持续循环直到接收到完整信号
  if (myReceiver.getResults()) { 
    Serial.println(F("将以下行剪切并粘贴到 rawSend.ino 的指定位置"));
    Serial.print(F("\n#define RAW_DATA_LEN "));
    Serial.println(recvGlobal.recvLength,DEC);
    Serial.print(F("uint16_t rawData[RAW_DATA_LEN]={\n\t"));
    for(bufIndex_t i=1;i<recvGlobal.recvLength;i++) {
      Serial.print(recvGlobal.recvBuffer[i],DEC);
      Serial.print(F(", "));
      if( (i % 8)==0) Serial.print(F("\n\t"));
    }
    Serial.println(F("1000};"));//添加任意尾随空格
    myReceiver.enableIRIn();      //重新启动接收器
  }
}
```

- **步骤 7.** 点击 **工具->串行监视器** 或同时按下 ++ctrl+shift+m++ 键，打开 Arduino IDE 的 **串行监视器**。

对于 **发送示例代码**，串行监视器应如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/send.png" /></div>

对于 **接收示例代码**，串行监视器应如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/recv.png" /></div>

> 有关库的更多高级用法，请查看 [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR)。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]**  [Grove-红外发射器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip)
- **[Lib]**  [红外发送和接收库](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev)
- **[Pdf]**  [TSAL6200 数据手册](http://www.vishay.com/docs/81010/tsal6200.pdf)

## 项目

**IR LaunchPad 到 LaunchPad 通信**：使用 Grove 红外发射器和接收器从一个 LaunchPad 向另一个 LaunchPad 发送文本！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>