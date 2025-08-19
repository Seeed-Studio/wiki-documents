---
description: 如何通过RS485传输 Vision AI V2 的识别数据
title: Vision AI V2 数据的RS485传输
keywords:
- RS485
- Vision AI
image: https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.webp
slug: /cn/grove_vision_ai_v2_rs485
last_update:
  date: 12/19/2024
  author: Jason
---



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connectv2.jpg" style={{width:500, height:'auto'}}/></div>


### 硬件准备


<table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Grove Vision AI V2</th>
        <th>OV5647-62 FOV 摄像头模块<br />适用于 Raspberry Pi 3B+4B</th>
        <th>Seeed Studio XIAO RS485 扩展板</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
        <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>


### 连接方法

首先，准备两个扩展板、两个 XIAO 系列开发板和一个 Vision AI V2，并根据图示连接对应的引脚。本示例使用 XIAO ESP32C3 作为演示。

**步骤 1. 准备两个 RS485 扩展板和两个 XIAO 系列开发板，并按照下图连接引脚**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/connect_modifg.png" style={{width:700, height:'auto'}}/></div>

**步骤 2. 准备 Vision AI V2，将其安装在两个 RS485 扩展板之一的背面，作为发送端**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/11.jpg" style={{width:500, height:'auto'}}/></div>




:::tip
如果您是第一次使用 RS485 扩展板并且不确定如何连接，请点击此链接(https://wiki.seeedstudio.com/cn/XIAO-RS485-Expansion-Board/)

如果您不知道如何烧录模型并添加模型输出代码，请点击此链接(https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_software_support/)，该链接将详细告诉您每一步操作。

为了更好地后续使用，请不要跳过这两个步骤！
:::





## 软件准备

### 发送端代码

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

HardwareSerial Serial3(1); 

// 定义两个映射到内部 UART 的 Serial 设备
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

#define enable_pin D2 // 定义使能引脚为 D2

SSCMA AI;

void setup()
{
    Serial3.begin(115200, SERIAL_8N1, 7, 6); // 使用 115200 波特率、8 数据位、无校验位、1 停止位初始化 Serial3
    Serial.begin(9600); // 初始化 Serial 用于调试输出
    AI.begin(&atSerial); // 使用 AT 串口初始化 AI 模块

    pinMode(enable_pin, OUTPUT); // 将使能引脚设置为输出
    digitalWrite(enable_pin, HIGH); // 将使能引脚设置为高电平以启用 AI 模块
}

void loop()
{
    if (!AI.invoke(1, false, true)) { // 调用 AI 开始处理

        Serial.println("调用成功"); // 打印成功消息

        // 打印性能指标
        Serial.print("性能: 预处理=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", 推理=");
        Serial.print(AI.perf().inference);
        Serial.print(", 后处理=");
        Serial.println(AI.perf().postprocess);

        // 遍历检测到的框
        for (int i = 0; i < AI.boxes().size(); i++) {
            Serial.print("框[");
            Serial.print(i);
            Serial.print("] 目标=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", 分数=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", 宽度=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", 高度=");
            Serial.println(AI.boxes()[i].h);
        }

        // 遍历检测到的类别
        for (int i = 0; i < AI.classes().size(); i++) {
            Serial.print("类别[");
            Serial.print(i);
            Serial.print("] 目标=");
            Serial.println(AI.classes()[i].target);

            // 检查目标类别并发送对应状态
            if (AI.classes()[i].target == 0) {
                String status_a = "未检测到人"; // 定义未检测到人的状态
                Serial3.println(status_a); // 将状态发送到 Serial3
                Serial.println(status_a); // 将状态打印到 Serial 监视器
            } else if (AI.classes()[i].target == 1) {
                String status_b = "检测到人"; // 定义检测到人的状态
                Serial3.println(status_b); // 将状态发送到 Serial3
                Serial.println(status_b); // 将状态打印到 Serial 监视器
            }
        }
        delay(1000); // 在下一次循环迭代前等待 1 秒
    }
}
```

### 代码详细功能

- **库包含**
    - 包含 `HardwareSerial` 库以使用硬件串口功能。
    - 包含 `Seeed_Arduino_SSCMA` 库以控制 AI 模块。

- **串口对象创建**
    ```cpp
    HardwareSerial Serial3(1); 
    HardwareSerial atSerial(0);
    ```
    创建 Serial3 和 atSerial 对象用于串口通信。

- **AI 对象创建**
    ```cpp
    SSCMA AI;
    ```
    创建 SSCMA 类的实例用于 AI 处理。

- **性能指标**
    ```cpp
    Serial.print("性能: 预处理=");
    Serial.print(AI.perf().prepocess);
    Serial.print(", 推理=");
    Serial.print(AI.perf().inference);
    Serial.print(", 后处理=");
    Serial.println(AI.perf().postprocess);
    ```
    打印 AI 处理阶段的性能指标：预处理、推理和后处理。

- **检测框循环**
    ```cpp
    for (int i = 0; i < AI.boxes().size(); i++) {
        Serial.print("框[");
        Serial.print(i);
        Serial.print("] 目标=");
        Serial.print(AI.boxes()[i].target);
        Serial.print(", 分数=");
        Serial.print(AI.boxes()[i].score);
        Serial.print(", x=");
        Serial.print(AI.boxes()[i].x);
        Serial.print(", y=");
        Serial.print(AI.boxes()[i].y);
        Serial.print(", 宽度=");
        Serial.print(AI.boxes()[i].w);
        Serial.print(", 高度=");
        Serial.println(AI.boxes()[i].h);
    }
    ```
    遍历检测到的框并打印其详细信息，包括目标、分数和边界框坐标。

- **检测类别循环**
    ```cpp
    for (int i = 0; i < AI.classes().size(); i++) {
       Serial.print("类别[");
       Serial.print(i);
       Serial.print("] 目标=");
       Serial.println(AI.classes()[i].target);
    ```
    遍历检测到的类别并打印其目标。

- **宏定义**
    ```cpp
    pinMode(enable_pin, OUTPUT); // 将使能引脚设置为输出
    digitalWrite(enable_pin, LOW);
    ```
    定义使能引脚为 D2。

- **发送消息**
    ```cpp
    // 检查目标类别并发送对应状态
    if (AI.classes()[i].target == 0) {
        String status_a = "未检测到人"; // 定义未检测到人的状态
        Serial3.println(status_a); // 将状态发送到 Serial3
        Serial.println(status_a); // 将状态打印到 Serial 监视器
    } else if (AI.classes()[i].target == 1) {
        String status_b = "检测到人"; // 定义检测到人的状态
        Serial3.println(status_b); // 将状态发送到 Serial3
        Serial.println(status_b); // 将状态打印到 Serial 监视器
    }
    ```

    判断是否检测到人，如果检测到人则发送 "检测到人" 到接收端；如果未检测到人则发送 "未检测到人" 到接收端。

### 接收端代码

```cpp
#include <HardwareSerial.h>

HardwareSerial Serial3(1); // 使用 UART2
#define enable_pin D2 // 定义使能引脚为 D2

void setup() {
  Serial.begin(115200); // 使用 115200 波特率初始化硬件串口
  Serial3.begin(115200, SERIAL_8N1, 7, 6); // 使用 115200 波特率、8 数据位、无校验位、1 停止位初始化 Serial3 (RX=D4(GPIO4), TX=D5(GPIO5))
  
  // 等待硬件串口准备好
  while(!Serial3);
  while(!Serial); // 此行通常不必要，因为 Serial.begin() 会立即准备好

  pinMode(enable_pin, OUTPUT); // 将使能引脚设置为输出
  digitalWrite(enable_pin, LOW); // 将使能引脚设置为低电平以启用设备
}

void loop() {
    delay(100); // 延迟 100 毫秒
    // 检查硬件串口是否有可用数据
    if (Serial3.available()) {
        String receivedData = Serial3.readStringUntil('\n'); // 读取直到换行符的字符串
        Serial.print("接收到的数据: "); // 打印接收到数据的标签
        Serial.println(receivedData); // 直接打印接收到的数据
    }
}
```

### 代码详细功能

- **库的引入**
    - 引入 `HardwareSerial` 库以使用硬件串口功能。

- **串口对象创建**
    - 使用 UART2 创建一个 `Serial3` 对象。

- **宏定义**
    ```cpp
    pinMode(enable_pin, OUTPUT); // 将使能引脚设置为输出
    digitalWrite(enable_pin, LOW);
    ```
    将使能引脚定义为 D2。

- **Setup 函数**
    ```cpp
    Serial3.begin(115200, SERIAL_8N1, 7, 6);
    ```
    初始化主串口和 Serial3，设置波特率、数据位等。这是与 Vision AI V2 通信以传输数据的串口。

    ```cpp
    while(!Serial3);
    while(!Serial); 
    ```
    等待所有串口准备就绪，将使能引脚设置为输出，并将其拉低以启用设备。

- **Loop 函数**
    - `if (Serial3.available());`：每 100 毫秒检查 Serial3 上是否有可用数据。
    - `String receivedData = Serial3.readStringUntil('\n');`：如果有数据可用，读取直到换行符，并将接收到的数据打印到主串口。

- **打印结果**
    ```cpp
    Serial.print("Received data: "); 
    Serial.println(receivedData); 
    ```
    打印发送方的消息。



### 结果图表

当摄像头识别到一个人时，它会发送 **“people detected”**，而当它未识别到人时，它会发送 **“no people detected”**。接收方将在串口上显示发送方的识别结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_V2AI/photo/result.png" style={{width:1000, height:'auto'}}/></div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>