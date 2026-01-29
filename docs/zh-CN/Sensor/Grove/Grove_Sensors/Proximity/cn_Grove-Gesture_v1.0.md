---
title: Grove - 手势传感器 V1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Gesture_v1.0/
slug: /cn/Grove-Gesture_v1.0
sku: 101020083
last_update:
  date: 09/23/2024
  author: gunengyu
---

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/400px-Gesture_sensor_3.png" 
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} 
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Gesture-p-2463.html" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
  </a>
</div><br></br>

Grove - 手势传感器上的传感器是 PAJ7620U2，它将手势识别功能与通用 I2C 接口集成到单个芯片中。它可以识别 9 种基本手势，这些手势信息可以通过 I2C 总线简单访问。

应用：您可以使用手势传感器作为输入设备，通过简单的手部挥动来控制其他 Grove 模块、计算机、手机、智能汽车、机器人等。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/i9hnRPuCx-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## 特性

- 内置接近检测
- 支持多种主板：Arduino UNO/Seeeduino/Arduino Mega2560
- 9 种基本手势
  - 上
  - 下
  - 左
  - 右
  - 前进
  - 后退
  - 顺时针
  - 逆时针
  - 挥手

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

|规格名称|值|
|---|---|
|传感器|PAJ7620U2|
|电源供应|5V|
|环境光抗干扰|< 100k Lux|
|普通模式下的手势速度|60°/s 到 600°/s|
|游戏模式下的手势速度|60°/s 到 1200°/s|
|接口类型 IIC 接口|高达 400 kbit/s|
|工作温度|-40°C 到 +85°C|
|尺寸|20 * 20mm|
|检测范围|5-10cm|
|I2C 地址|0x73|

:::note
    如果您想使用多个 I2C 设备，请参考 [软件 I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide/)。
:::

## 入门指南

### 与 Arduino 配合使用

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield| Grove-手势传感器 v1.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/45d_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Gesture-p-2463.html)|

- **步骤 2.** 将 Grove-手势传感器_v1.0 连接到 Grove-Base Shield 的 I2C 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 通过 USB 线将 Seeeduino 连接到 PC。

:::note
 如果我们没有 Grove Base Shield，我们也可以直接将 Grove-手势传感器 v1.0 连接到 Seeeduino，如下所示。
:::

| Seeeduino   |   Grove-手势传感器 v1.0     |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

INT：手势检测中断标志掩码。您可以使用跳线将 INT 焊盘连接到 Arduino 的数字引脚 2。

下图显示了如何将 Grove - 手势传感器插入 Base Shield 的 I2C 端口

![](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/700px-Gesture_install_1.png)

然后将 Base Shield 插入 Seeeduino

![](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/seeeduino_connection.jpg)

#### 软件

- **步骤 1.** 从 Github 下载[库文件](https://github.com/Seeed-Studio/Grove_Gesture)。
- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)来为 Arduino 安装库。
软件安装。
- **步骤 3.** 如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。
- **步骤 4.** 启动 Arduino IDE，让我们尝试上/下手势演示。
- **步骤 5.** 复制下面的代码并粘贴到 Arduino IDE。

```cpp showLineNumbers
/*
以下简单演示将向您展示一个非常简单的应用：当您向上移动时，红色 LED 将被点亮，否则红色 LED 将被关闭。
*/
#include <Wire.h>
#include "paj7620.h"

void setup()
{
  paj7620Init();
}

void loop()
{
 uint8_t data = 0;  // 读取 Bank_0_Reg_0x43/0x44 获取手势结果。

 paj7620ReadReg(0x43, 1, &data);  // 当检测到不同手势时，变量 'data' 将通过 paj7620ReadReg(0x43, 1, &data) 设置为不同的值。

 if (data == GES_UP_FLAG)      // 当检测到向上手势时，变量 'data' 将被设置为 GES_UP_FLAG。
  digitalWrite(4, HIGH);      // 点亮 LED（HIGH 是电压电平）
 if (data == GES_DOWN_FLAG)      // 当检测到向下手势时，变量 'data' 将被设置为 GES_DOWN_FLAG。
        digitalWrite(4, LOW);       // 通过设置电压为 LOW 来关闭 LED
}
```

- **步骤 6.** 在板管理器中选择 Seeeduino V4 和 COM 端口。
- **步骤 7.** 点击上传，将手放在手势传感器上方上下移动。您将看到 LED 如下所示开关。

![](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/IMG_0029.gif)

- **步骤 8.** 让我们通过选择 **文件->示例->Grove_Gesture->paj7620_9gestures** 来尝试 9 种手势，然后选择 Seeeduino v4 作为板管理器和正确的 COM 端口。

```cpp title="paj7620_9gestures" showLineNumbers
#include <Wire.h>
#include "paj7620.h"

/* 
注意：当您想要识别前进/后退手势时，您的手势反应时间必须小于 GES_ENTRY_TIME(0.8s)。
        您也可以根据实际情况调整反应时间。
*/
#define GES_REACTION_TIME  500    // 您可以根据实际情况调整反应时间。
#define GES_ENTRY_TIME   800    // 当您想要识别前进/后退手势时，您的手势反应时间必须小于 GES_ENTRY_TIME(0.8s)。
#define GES_QUIT_TIME   1000

void setup()
{
 uint8_t error = 0;

 Serial.begin(9600);
 Serial.println("\nPAJ7620U2 测试演示：识别 9 种手势。");

 error = paj7620Init();   // 初始化 Paj7620 寄存器
 if (error) 
 {
  Serial.print("初始化错误，代码：");
  Serial.println(error);
 }
 else
 {
  Serial.println("初始化成功");
 }
 Serial.println("请输入您的手势：\n");
}

void loop()
{
 uint8_t data = 0, data1 = 0, error;
 
 error = paj7620ReadReg(0x43, 1, &data);    // 读取 Bank_0_Reg_0x43/0x44 获取手势结果。
 if (!error) 
 {
  switch (data)          // 当检测到不同手势时，变量 'data' 将通过 paj7620ReadReg(0x43, 1, &data) 设置为不同的值。
  {
   case GES_RIGHT_FLAG:
    delay(GES_ENTRY_TIME);
    paj7620ReadReg(0x43, 1, &data);
    if(data == GES_FORWARD_FLAG) 
    {
     Serial.println("前进");
     delay(GES_QUIT_TIME);
    }
    else if(data == GES_BACKWARD_FLAG) 
    {
     Serial.println("后退");
     delay(GES_QUIT_TIME);
    }
    else
    {
     Serial.println("右");
    }          
    break;
   case GES_LEFT_FLAG: 
    delay(GES_ENTRY_TIME);
    paj7620ReadReg(0x43, 1, &data);
    if(data == GES_FORWARD_FLAG) 
    {
     Serial.println("前进");
     delay(GES_QUIT_TIME);
    }
    else if(data == GES_BACKWARD_FLAG) 
    {
     Serial.println("后退");
     delay(GES_QUIT_TIME);
    }
    else
    {
     Serial.println("左");
    }          
    break;
   case GES_UP_FLAG:
    delay(GES_ENTRY_TIME);
    paj7620ReadReg(0x43, 1, &data);
    if(data == GES_FORWARD_FLAG) 
    {
     Serial.println("前进");
     delay(GES_QUIT_TIME);
    }
    else if(data == GES_BACKWARD_FLAG) 
    {
     Serial.println("后退");
     delay(GES_QUIT_TIME);
    }
    else
    {
     Serial.println("上");
    }          
    break;
   case GES_DOWN_FLAG:
    delay(GES_ENTRY_TIME);
    paj7620ReadReg(0x43, 1, &data);
    if(data == GES_FORWARD_FLAG) 
    {
     Serial.println("前进");
     delay(GES_QUIT_TIME);
    }
    else if(data == GES_BACKWARD_FLAG) 
    {
     Serial.println("后退");
     delay(GES_QUIT_TIME);
    }
    else
    {
     Serial.println("下");
    }          
    break;
   case GES_FORWARD_FLAG:
    Serial.println("前进");
    delay(GES_QUIT_TIME);
    break;
   case GES_BACKWARD_FLAG:    
    Serial.println("后退");
    delay(GES_QUIT_TIME);
    break;
   case GES_CLOCKWISE_FLAG:
    Serial.println("顺时针");
    break;
   case GES_COUNT_CLOCKWISE_FLAG:
    Serial.println("逆时针");
    break;  
   default:
    paj7620ReadReg(0x44, 1, &data1);
    if (data1 == GES_WAVE_FLAG) 
    {
     Serial.println("挥手");
    }
    break;
  }
 }
 delay(100);
}
```

- **步骤 9.** 点击上传并打开串口监视器端口。
- **步骤 10.** 这个示例可以识别 9 种手势并输出结果，包括向上移动、向下移动、向左移动、向右移动、向前移动、向后移动、顺时针圆圈、逆时针圆圈和挥手。让我们试试看 COM 端口输出如下。

```shell
PAJ7620U2 TEST DEMO: Recognize 9 gestures.
INIT SENSOR...
Addr0 =20,  Addr1 =76
wake-up finish.
Set up gaming mode.
Paj7620 initialize register finished.
INIT OK
Please input your gestures:

Left
Left
Up
Right
Up
Up
Down
Up
Down
Down
Up
Right
Left
```

:::note
    当你想要识别前进/后退手势时，你的手势反应时间必须小于 GES_ENTRY_TIME(0.8s)。你也可以根据实际情况调整反应时间。
:::

### 使用 Codecraft 进行操作

#### 硬件

**步骤 1.** 将一个 Grove - 手势传感器连接到 I2C 端口，并将一个 Grove - 红色 LED 连接到 Base Shield 的 D4 端口。

**步骤 2.** 将 Base Shield 插入你的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到你的 PC。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并拖拽一个主程序到工作区域。

:::note
    如果这是你第一次使用 Codecraft，请参阅 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按照下图拖拽代码块或打开可在本页面末尾下载的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/cc_Gesture.png)

将程序上传到你的 Arduino/Seeeduino。

:::success
    当代码上传完成后，当你做向上手势时 LED 会亮起，当你做向下手势时它会熄灭。
:::

### 使用树莓派进行操作（配合树莓派 Grove 扩展板）

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| 树莓派 | 树莓派 Grove 扩展板| Grove - 手势传感器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/45d_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Gesture-p-2463.html)|

- **步骤 2**. 将 Grove 扩展板插入树莓派。
- **步骤 3**. 将手势传感器连接到扩展板的 **I^2^C** 端口。
- **步骤 4**. 通过 USB 线缆将树莓派连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/Gesture_Hat.jpg)

#### 软件

- **步骤 1**. 按照 [软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库下载源文件。

```shell
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3**. 执行以下命令运行代码。

```shell
cd grove.py/grove
python3 grove_gesture_sensor.py 
```

以下是 grove_gesture_sensor.py 代码。

```python title="grove_gesture_sensor.py" showLineNumbers
import time,sys
import RPi.GPIO as GPIO
from grove.i2c import Bus

# use the bus that matches your raspi version
rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
    bus = Bus(1)
else:
    bus = Bus(0)

class gesture:
 #Registers and variables for the gesture sensor
 GES_REACTION_TIME  =.500    # You can adjust the reaction time according to the actual circumstance.
 GES_ENTRY_TIME   =.800    # When you want to recognize the Forward/Backward gestures, your gestures' reaction time must less than GES_ENTRY_TIME(0.8s). 
 GES_QUIT_TIME   =1.000
 
 BANK0 = 0
 BANK1 = 1
 
 PAJ7620_ADDR_BASE =0x00

 #REGISTER BANK SELECT
 PAJ7620_REGITER_BANK_SEL  =(PAJ7620_ADDR_BASE + 0xEF) #W

 #DEVICE ID
 PAJ7620_ID  =0x73

 #REGISTER BANK 0
 PAJ7620_ADDR_SUSPEND_CMD  =(PAJ7620_ADDR_BASE + 0x3) #W
 PAJ7620_ADDR_GES_PS_DET_MASK_0 =(PAJ7620_ADDR_BASE + 0x41) #RW
 PAJ7620_ADDR_GES_PS_DET_MASK_1 =(PAJ7620_ADDR_BASE + 0x42) #RW
 PAJ7620_ADDR_GES_PS_DET_FLAG_0 =(PAJ7620_ADDR_BASE + 0x43) #R
 PAJ7620_ADDR_GES_PS_DET_FLAG_1 =(PAJ7620_ADDR_BASE + 0x44) #R
 PAJ7620_ADDR_STATE_INDICATOR =(PAJ7620_ADDR_BASE + 0x45) #R
 PAJ7620_ADDR_PS_HIGH_THRESHOLD =(PAJ7620_ADDR_BASE + 0x69) #RW
 PAJ7620_ADDR_PS_LOW_THRESHOLD =(PAJ7620_ADDR_BASE + 0x6A) #RW
 PAJ7620_ADDR_PS_APPROACH_STATE =(PAJ7620_ADDR_BASE + 0x6B) #R
 PAJ7620_ADDR_PS_RAW_DATA  =(PAJ7620_ADDR_BASE + 0x6C) #R
                                    
 #REGISTER BANK 1                
 PAJ7620_ADDR_PS_GAIN   =(PAJ7620_ADDR_BASE + 0x44) #RW
 PAJ7620_ADDR_IDLE_S1_STEP_0  =(PAJ7620_ADDR_BASE + 0x67) #RW
 PAJ7620_ADDR_IDLE_S1_STEP_1  =(PAJ7620_ADDR_BASE + 0x68) #RW
 PAJ7620_ADDR_IDLE_S2_STEP_0  =(PAJ7620_ADDR_BASE + 0x69) #RW
 PAJ7620_ADDR_IDLE_S2_STEP_1  =(PAJ7620_ADDR_BASE + 0x6A) #RW
 PAJ7620_ADDR_OP_TO_S1_STEP_0 =(PAJ7620_ADDR_BASE + 0x6B) #RW
 PAJ7620_ADDR_OP_TO_S1_STEP_1 =(PAJ7620_ADDR_BASE + 0x6C) #RW
 PAJ7620_ADDR_OP_TO_S2_STEP_0 =(PAJ7620_ADDR_BASE + 0x6D) #RW
 PAJ7620_ADDR_OP_TO_S2_STEP_1 =(PAJ7620_ADDR_BASE + 0x6E) #RW
 PAJ7620_ADDR_OPERATION_ENABLE =(PAJ7620_ADDR_BASE + 0x72) #RW

 #PAJ7620_REGITER_BANK_SEL
 PAJ7620_BANK0=0
 PAJ7620_BANK1=1
 
 #PAJ7620_ADDR_SUSPEND_CMD
 PAJ7620_I2C_WAKEUP =1
 PAJ7620_I2C_SUSPEND =0
 
 #PAJ7620_ADDR_OPERATION_ENABLE
 PAJ7620_ENABLE=1
 PAJ7620_DISABLE=0
 
 #ADC, delete
 REG_ADDR_RESULT = 0x00
 REG_ADDR_ALERT  = 0x01
 REG_ADDR_CONFIG = 0x02
 REG_ADDR_LIMITL = 0x03
 REG_ADDR_LIMITH = 0x04
 REG_ADDR_HYST   = 0x05
 REG_ADDR_CONVL  = 0x06
 REG_ADDR_CONVH  = 0x07

 GES_RIGHT_FLAG    =1<<0
 GES_LEFT_FLAG    =1<<1
 GES_UP_FLAG     =1<<2
 GES_DOWN_FLAG    =1<<3
 GES_FORWARD_FLAG   =1<<4
 GES_BACKWARD_FLAG   =1<<5
 GES_CLOCKWISE_FLAG   =1<<6
 GES_COUNT_CLOCKWISE_FLAG =1<<7
 GES_WAVE_FLAG    =1<<0
 
 #Gesture output
 FORWARD   = 1
 BACKWARD   = 2
 RIGHT   = 3
 LEFT   = 4
 UP    = 5
 DOWN   = 6
 CLOCKWISE  = 7
 ANTI_CLOCKWISE = 8
 WAVE   = 9
 
 #Initial register state
 initRegisterArray=( [0xEF,0x00],
      [0x32,0x29],
      [0x33,0x01],
      [0x34,0x00],
      [0x35,0x01],
      [0x36,0x00],
      [0x37,0x07],
      [0x38,0x17],
      [0x39,0x06],
      [0x3A,0x12],
      [0x3F,0x00],
      [0x40,0x02],
      [0x41,0xFF],
      [0x42,0x01],
      [0x46,0x2D],
      [0x47,0x0F],
      [0x48,0x3C],
      [0x49,0x00],
      [0x4A,0x1E],
      [0x4B,0x00],
      [0x4C,0x20],
      [0x4D,0x00],
      [0x4E,0x1A],
      [0x4F,0x14],
      [0x50,0x00],
      [0x51,0x10],
      [0x52,0x00],
      [0x5C,0x02],
      [0x5D,0x00],
      [0x5E,0x10],
      [0x5F,0x3F],
      [0x60,0x27],
      [0x61,0x28],
      [0x62,0x00],
      [0x63,0x03],
      [0x64,0xF7],
      [0x65,0x03],
      [0x66,0xD9],
      [0x67,0x03],
      [0x68,0x01],
      [0x69,0xC8],
      [0x6A,0x40],
      [0x6D,0x04],
      [0x6E,0x00],
      [0x6F,0x00],
      [0x70,0x80],
      [0x71,0x00],
      [0x72,0x00],
      [0x73,0x00],
      [0x74,0xF0],
      [0x75,0x00],
      [0x80,0x42],
      [0x81,0x44],
      [0x82,0x04],
      [0x83,0x20],
      [0x84,0x20],
      [0x85,0x00],
      [0x86,0x10],
      [0x87,0x00],
      [0x88,0x05],
      [0x89,0x18],
      [0x8A,0x10],
      [0x8B,0x01],
      [0x8C,0x37],
      [0x8D,0x00],
      [0x8E,0xF0],
      [0x8F,0x81],
      [0x90,0x06],
      [0x91,0x06],
      [0x92,0x1E],
      [0x93,0x0D],
      [0x94,0x0A],
      [0x95,0x0A],
      [0x96,0x0C],
      [0x97,0x05],
      [0x98,0x0A],
      [0x99,0x41],
      [0x9A,0x14],
      [0x9B,0x0A],
      [0x9C,0x3F],
      [0x9D,0x33],
      [0x9E,0xAE],
      [0x9F,0xF9],
      [0xA0,0x48],
      [0xA1,0x13],
      [0xA2,0x10],
      [0xA3,0x08],
      [0xA4,0x30],
      [0xA5,0x19],
      [0xA6,0x10],
      [0xA7,0x08],
      [0xA8,0x24],
      [0xA9,0x04],
      [0xAA,0x1E],
      [0xAB,0x1E],
      [0xCC,0x19],
      [0xCD,0x0B],
      [0xCE,0x13],
      [0xCF,0x64],
      [0xD0,0x21],
      [0xD1,0x0F],
      [0xD2,0x88],
      [0xE0,0x01],
      [0xE1,0x04],
      [0xE2,0x41],
      [0xE3,0xD6],
      [0xE4,0x00],
      [0xE5,0x0C],
      [0xE6,0x0A],
      [0xE7,0x00],
      [0xE8,0x00],
      [0xE9,0x00],
      [0xEE,0x07],
      [0xEF,0x01],
      [0x00,0x1E],
      [0x01,0x1E],
      [0x02,0x0F],
      [0x03,0x10],
      [0x04,0x02],
      [0x05,0x00],
      [0x06,0xB0],
      [0x07,0x04],
      [0x08,0x0D],
      [0x09,0x0E],
      [0x0A,0x9C],
      [0x0B,0x04],
      [0x0C,0x05],
      [0x0D,0x0F],
      [0x0E,0x02],
      [0x0F,0x12],
      [0x10,0x02],
      [0x11,0x02],
      [0x12,0x00],
      [0x13,0x01],
      [0x14,0x05],
      [0x15,0x07],
      [0x16,0x05],
      [0x17,0x07],
      [0x18,0x01],
      [0x19,0x04],
      [0x1A,0x05],
      [0x1B,0x0C],
      [0x1C,0x2A],
      [0x1D,0x01],
      [0x1E,0x00],
      [0x21,0x00],
      [0x22,0x00],
      [0x23,0x00],
      [0x25,0x01],
      [0x26,0x00],
      [0x27,0x39],
      [0x28,0x7F],
      [0x29,0x08],
      [0x30,0x03],
      [0x31,0x00],
      [0x32,0x1A],
      [0x33,0x1A],
      [0x34,0x07],
      [0x35,0x07],
      [0x36,0x01],
      [0x37,0xFF],
      [0x38,0x36],
      [0x39,0x07],
      [0x3A,0x00],
      [0x3E,0xFF],
      [0x3F,0x00],
      [0x40,0x77],
      [0x41,0x40],
      [0x42,0x00],
      [0x43,0x30],
      [0x44,0xA0],
      [0x45,0x5C],
      [0x46,0x00],
      [0x47,0x00],
      [0x48,0x58],
      [0x4A,0x1E],
      [0x4B,0x1E],
      [0x4C,0x00],
      [0x4D,0x00],
      [0x4E,0xA0],
      [0x4F,0x80],
      [0x50,0x00],
      [0x51,0x00],
      [0x52,0x00],
      [0x53,0x00],
      [0x54,0x00],
      [0x57,0x80],
      [0x59,0x10],
      [0x5A,0x08],
      [0x5B,0x94],
      [0x5C,0xE8],
      [0x5D,0x08],
      [0x5E,0x3D],
      [0x5F,0x99],
      [0x60,0x45],
      [0x61,0x40],
      [0x63,0x2D],
      [0x64,0x02],
      [0x65,0x96],
      [0x66,0x00],
      [0x67,0x97],
      [0x68,0x01],
      [0x69,0xCD],
      [0x6A,0x01],
      [0x6B,0xB0],
      [0x6C,0x04],
      [0x6D,0x2C],
      [0x6E,0x01],
      [0x6F,0x32],
      [0x71,0x00],
      [0x72,0x01],
      [0x73,0x35],
      [0x74,0x00],
      [0x75,0x33],
      [0x76,0x31],
      [0x77,0x01],
      [0x7C,0x84],
      [0x7D,0x03],
      [0x7E,0x01])

 #Enable debug message
 debug=0
 
 #Initialize the sensors
 def init(self):
  time.sleep(.001)
  self.paj7620SelectBank(self.BANK0)
  self.paj7620SelectBank(self.BANK0)
  
  data0 = self.paj7620ReadReg(0, 1)[0]
  data1 = self.paj7620ReadReg(1, 1)[0]
  if self.debug:
   print("data0:",data0,"data1:",data1)
  if data0 != 0x20  :#or data1 <> 0x76:
   print("Error with sensor")
   #return 0xff
  if data0 == 0x20:
   print("wake-up finish.")
   
  for i in range(len(self.initRegisterArray)):
   self.paj7620WriteReg(self.initRegisterArray[i][0],self.initRegisterArray[i][1])
  
  self.paj7620SelectBank(self.BANK0)
  
  print("Paj7620 initialize register finished.")
  
 #Write a byte to a register on the Gesture sensor
 def paj7620WriteReg(self,addr,cmd):
  bus.write_word_data(self.PAJ7620_ID, addr, cmd)
  
 #Select a register bank on the Gesture Sensor
 def paj7620SelectBank(self,bank):
  if bank==self.BANK0:
   self.paj7620WriteReg(self.PAJ7620_REGITER_BANK_SEL, self.PAJ7620_BANK0)
   
 #Read a block of bytes of length "qty" starting at address "addr" from the Gesture sensor
 def paj7620ReadReg(self,addr,qty):
  return bus.read_i2c_block_data(self.PAJ7620_ID, addr,qty)
 
 #Print the values from the gesture sensor
 def print_gesture(self):
  data=self.paj7620ReadReg(0x43,1)[0]
  if data==self.GES_RIGHT_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    print("Forward")
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    print("Backward")
    time.sleep(self.GES_QUIT_TIME)
   else:
    print("Right")
    
  elif data==self.GES_LEFT_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    print("Forward")
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    print("Backward")
    time.sleep(self.GES_QUIT_TIME)
   else:
    print("Left")  
  
  elif data==self.GES_UP_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    print("Forward")
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    print("Backward")
    time.sleep(self.GES_QUIT_TIME)
   else:
    print("Up")  
    
  elif data==self.GES_DOWN_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    print("Forward")
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    print("Backward")
    time.sleep(self.GES_QUIT_TIME)
   else:
    print("Down")
  
  elif data==self.GES_FORWARD_FLAG:
   print("Forward")
   time.sleep(self.GES_QUIT_TIME)
   
  elif data==self.GES_BACKWARD_FLAG:
   print("Backward")
   time.sleep(self.GES_QUIT_TIME)
   
  elif data==self.GES_CLOCKWISE_FLAG:
   print("Clockwise")
 
  elif data==self.GES_COUNT_CLOCKWISE_FLAG:
   print("anti-clockwise")
   
  else:
   data1=self.paj7620ReadReg(0x44, 1)[0]
   if (data1 == self.GES_WAVE_FLAG):
    print("wave")
 
 #Return a vlaue from the gestire sensor which can be used in a program
 #  0:nothing
 #  1:Forward
 #  2:Backward
 #  3:Right
 #  4:Left
 #  5:Up
 #  6:Down
 #  7:Clockwise
 #  8:anti-clockwise
 #  9:wave
 def return_gesture(self):

  data=self.paj7620ReadReg(0x43,1)[0]
  if data==self.GES_RIGHT_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    return 1
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    return 2
    time.sleep(self.GES_QUIT_TIME)
   else:
    return 3
    
  elif data==self.GES_LEFT_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    return 1
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    return 2
    time.sleep(self.GES_QUIT_TIME)
   else:
    return 4 
  
  elif data==self.GES_UP_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    return 1
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    return 2
    time.sleep(self.GES_QUIT_TIME)
   else:
    return 5  
    
  elif data==self.GES_DOWN_FLAG:
   time.sleep(self.GES_ENTRY_TIME)
   data=self.paj7620ReadReg(0x43, 1)[0]
   if data == self.GES_FORWARD_FLAG:
    return 1
    time.sleep(self.GES_QUIT_TIME)
   elif data == self.GES_BACKWARD_FLAG:
    return 2
    time.sleep(self.GES_QUIT_TIME)
   else:
    return 6
  
  elif data==self.GES_FORWARD_FLAG:
   return 1
   time.sleep(self.GES_QUIT_TIME)
   
  elif data==self.GES_BACKWARD_FLAG:
   return 2
   time.sleep(self.GES_QUIT_TIME)
   
  elif data==self.GES_CLOCKWISE_FLAG:
   return 7

  elif data==self.GES_COUNT_CLOCKWISE_FLAG:
   return 8
   
  else:
   data1=self.paj7620ReadReg(0x44, 1)[0]
   if (data1 == self.GES_WAVE_FLAG):
    return 9
  return 0
  
if __name__ == "__main__":
 g=gesture()
 g.init()
 while True:
  g.print_gesture()
  time.sleep(.1)
  # print g.return_gesture()
  # time.sleep(.1)

```

:::success
    如果一切顺利，您将能够看到以下结果
:::
 
```shell
pi@raspberrypi:~/grove.py/grove $ python3 grove_gesture_sensor.py 
wake-up finish.
Paj7620 initialize register finished.
Left
Forward
Left
Backward
Right
Up
Down
```

您可以通过简单地按 ++ctrl+c++ 来退出此程序。

:::note
        如果您使用 I2C 工具扫描 grove 模块的 I2C 地址，您可能会发现两个或更多地址。0x04 是 *Grove Base Hat for Raspberry Pi* 的地址。
:::

### 与 Raspberry Pi 一起使用（使用 GrovePi_Plus）

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus |Grove-Gesture_v1.0|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/45d_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Gesture-p-2463.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。
- **步骤 3.** 将 Grove-Gesture_v1.0 连接到 GrovePi_Plus 的 **I2C** 端口。
- **步骤 4.** 通过 USB 线缆将 Raspberry 连接到 PC。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/rasp_connection.jpg)

#### 软件

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **步骤 3.** 执行以下命令来使用此传感器

```bash
cd ~/GrovePi/Software/Python/grove_gesture_sensor
python3 gesture_value.py  
```

这是 gesture_value.py 的代码

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove - Gesture Sensor v1.0(https://www.seeedstudio.com/depot/Grove-Gesture-p-2463.html)
#  
# This example returns a value when a user does an action over the sensor
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## License
The MIT License (MIT)
GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''

import grove_gesture_sensor
import time

g=grove_gesture_sensor.gesture()
g.init()
while True:
 gest=g.return_gesture()
 #Match the gesture
 if gest==g.FORWARD:
  print("FORWARD")
 elif gest==g.BACKWARD:
  print("BACKWARD")
 elif gest==g.RIGHT:
  print("RIGHT")
 elif gest==g.LEFT:
  print("LEFT")
 elif gest==g.UP:
  print("UP")
 elif gest==g.DOWN:
  print("DOWN")
 elif gest==g.CLOCKWISE:
  print("CLOCKWISE")
 elif gest==g.ANTI_CLOCKWISE:
  print("ANTI_CLOCKWISE")
 elif gest==g.WAVE:
  print("WAVE")
 elif gest==0:
  print("-")
 else:
  print("Error")
 time.sleep(.1)
```

- **步骤 4.** 这是屏幕输出。

```cpp showLineNumbers
pi@raspberrypi:~/Dexter/GrovePi/Software/Python/grove_gesture_sensor $ python3 gesture_value.py 
wake-up finish.
Paj7620 initialize register finished.

-
-
DOWN
-
-
LEFT
-
-
-
-
UP
-
-
-
-
RIGHT
-
-
UP
-
-
CLOCKWISE
-
-
CLOCKWISE
```

## 参考资料

我们定义了一些手势的寄存器数据，请参考下表。

|手势| 寄存器数据| 寄存器地址| 如果是| 如果不是|
|----|---|---|---|---|
|向上 |data==GES_UP_FLAG| 0x43 |检测到手势 |未检测到手势|
|向下| data==GES_DOWN_FLAG|0x43 |检测到手势 |未检测到手势|
|向左| data==GES_LEFT_FLAG|0x43 |检测到手势 |未检测到手势|
|向右| data==GES_RIGHT_FLAG|0x43 |检测到手势 |未检测到手势|
|向前 |data==GES_FORWARD_FLAG|0x43 |检测到手势 |未检测到手势|
|向后| data==GES_BACKWARD_FLAG|0x43 |检测到手势 |未检测到手势|
|顺时针| data==GES_CLOCKWISE_FLAG|0x43 |检测到手势 |未检测到手势|
|逆时针 |data==GES_COUNT_CLOCKWISE_FLAG|0x43 |检测到手势 |未检测到手势|
|挥手| data==GES_WAVE_FLAG| 0x44|检测到手势 |未检测到手势|

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/Grove_-_Gesture_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - Gesture_v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/Grove_-_Gesture_v1.0_sch_pcb.zip)
- **[数据手册]** [PAJ7620U2_Datasheet_V0.8_20140611.pdf](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/PAJ7620U2_Datasheet_V0.8_20140611.pdf)
- **[数据手册]** [PAJ7620U2_DS_v1.5_05012022_Confidential.pdf](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/PAJ7620U2_DS_v1.5_05012022_Confidential.pdf)
- **[库文件]** [Library Grove - Guesture](https://github.com/Seeed-Studio/Grove_Gesture)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/res/Grove_Gesture_CDC_File.zip)

## 项目

**Seeed x.factory 升级改造工作坊 [第1集]**：上周末，我们在x.factory举办了一场精彩的升级改造黑客工作坊，来自社区的20名创客、设计师和工程师聚集在一起（我甚至将其列为我最喜欢的工作坊！）。

[![](https://files.seeedstudio.com/wiki/Grove_Gesture_V_1.0/img/hacker.io.gif)](https://blog.hackster.io/upcycling-workshop-at-seeed-x-factory-episode-1-4f2d5a61f5ad)

**Jesty - 用手势控制你的PC**：用手势传感器控制PC，将按键或鼠标点击与每个手势关联。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/Momy93/jesty-control-your-pc-with-gestures-5d4a3e/embed' width='350'></iframe>

**PHPoC - 通过手势控制云台**：控制机器人的有趣方式：通过手势

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/Homer/phpoc-control-pan-tilt-via-hand-gesture-1daacc/embed' width='350'></iframe>

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