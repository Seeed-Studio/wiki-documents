---
description: 使用 Grove Vision AI V2 和 XIAO ESP32 系列的一些示例。
title: Grove Vision AI V2 和 XIAO ESP32 示例
keywords:
- xiao
- vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_vision_ai_v2_demo
last_update:
  date: 04/16/2024
  author: Citric
---

# Grove Vision AI V2 和 XIAO ESP32 示例

释放边缘计算的潜力，探索 AI 视觉的迷人世界，体验 Grove Vision AI V2 和 XIAO ESP32 系列 MCU 的强大组合。在本教程中，我们将带您完成 2~3 个引人入胜的演示，展示这些尖端技术的无缝集成。

无论您是经验丰富的开发者还是好奇的爱好者，这些演示都将为您提供实践经验，帮助您掌握 Grove Vision AI V2 和 XIAO ESP32 的强大功能。从对象检测和识别到智能场景分析，您将发现如何创建突破性的应用程序，挑战可能性的边界。

准备好踏上激动人心的旅程吧！我们将揭开 AI 视觉的秘密，赋予您构建自己开创性项目的能力。让我们一起深入探索，释放 Grove Vision AI V2 和 XIAO ESP32 的魔力！

这段开场描述旨在吸引读者的注意力，突出关键组件（Grove Vision AI V2 和 XIAO ESP32），并简要介绍教程内容。它强调了结合这些技术的激动人心的可能性，并鼓励读者充满热情地探索这些演示。您可以根据教程的风格和语气自由调整和修改这段文字。

## 入门

### 硬件准备

本文中的教程和步骤适用于 XIAO ESP32 系列产品（XIAO ESP32S3、XIAO ESP32C3、XIAO ESP32C6 等），您可以选择任意一款 XIAO ESP32 系列产品完成本教程的内容。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32S3</th>
			<th>XIAO ESP32C3</th>
            <th>XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

除了主控 MCU，我们还需要准备 Grove Vision AI V2 和支持的摄像头，以完成本项目的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
    </a>
</div>

如果您想使用其他摄像头，可以阅读[支持摄像头列表](https://wiki.seeedstudio.com/cn/Grove-vision-ai-v2-camera-supported/)以获取更多信息。

### 软件准备

如果这是您第一次使用 Grove Vision AI V2 产品，我们建议您阅读以下 Wiki，学习如何使用 SenseCraft AI 并了解如何上传模型。同时学习如何安装 Grove Vision AI V2 的 Arduino 库。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/grove_vision_ai_v2_software_support/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>前往 Wiki</font></span></strong>
    </a>
</div>

## 项目 I：制作一个面部追踪风扇

在这个令人兴奋的演示中，我们将向您展示如何制作一个面部追踪风扇，它会自动跟随您的每一个动作，确保清爽的微风始终吹向您。

使用 Grove Vision AI V2，我们将利用面部识别的魔力实时检测并追踪您的面部。Vision AI V2 将持续输出您的面部坐标，为风扇的精确定位提供必要的数据。

### 第一步：将面部识别模型上传到 Grove Vision AI V2

在这个项目中，我们将制作一个跟随面部的风扇，因此我们需要为 Grove Vision AI V2 使用一个面部识别模型。您可以使用 SenseCraft AI 上传此模型，并在预览窗口中观看检测效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/1.png" style={{width:1000, height:'auto'}}/></div>

### 第二步：准备风扇和旋转结构

由于风扇结构不易修改，对于风扇的转向结构，我们计划制作一个由舵机控制的水平转向底座。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/2.jpg" style={{width:400, height:'auto'}}/></div>

然后，使用亚克力板和热熔胶，我们将风扇粘贴到底座舵机上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/3.jpg" style={{width:400, height:'auto'}}/></div>

舵机的线连接到 XIAO ESP32 的 D6 引脚，并通过 5V 供电。Grove Vision AI V2 通过 Grove 接口简单地连接到 XIAO 的 IIC 接口。这里我们还使用了 [XIAO 扩展板底座](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 以便于布线。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/4.jpg" style={{width:400, height:'auto'}}/></div>

最后，不要忘记将 Grove Vision AI V2 的摄像头粘贴到风扇的中间位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/5.jpg" style={{width:400, height:'auto'}}/></div>

### 第三步：为 XIAO 上传程序

以下是该项目的完整程序，请编译并将此程序上传到 XIAO ESP32 系列。

```cpp
#include <Seeed_Arduino_SSCMA.h>
SSCMA Infer;

void stop_rotate(void)
{
    digitalWrite(D6, HIGH);
    delayMicroseconds(1500);
    digitalWrite(D6, LOW);
}

void servo_rotate(int rtime, bool revers = false)
{
    uint32_t sleep;
    if (revers)
    {
        sleep = 2500;
    }
    else
    {
        sleep = 500;
    }
    digitalWrite(D6, HIGH);

    delayMicroseconds(sleep);
    digitalWrite(D6, LOW);
    delay(30 * rtime);
    stop_rotate();
}

void setup()
{
    Infer.begin();
    Serial.begin(9600);
    pinMode(D6, OUTPUT);
}

void loop()
{
    if (!Infer.invoke())
    {
        if (Infer.boxes().size() > 0)
        {
            if (Infer.boxes()[0].x < 80)
            {
                servo_rotate(1, true);
            }
            else if (Infer.boxes()[0].x > 140)
            {
                servo_rotate(1, false);
            }
            Serial.print("X==>>");
            Serial.print(Infer.boxes()[0].x);
            Serial.print("Y==>>");
            Serial.println(Infer.boxes()[0].y);
        }
    }
}
```

如果程序运行顺利，您应该会看到如下效果。

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project1.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
舵机的旋转和角度可能因舵机的不同而有所变化，因此请根据您使用的舵机进行适当调整，这可能需要进行微调。
:::

### 程序注释

代码结构如下：

1. **库引入**：
   - `Seeed_Arduino_SSCMA.h`：用于启用 Grove Vision AI V2 的推理功能。

2. **对象声明**：
   - `SSCMA Infer`：创建 SSCMA 类的实例以进行推理。

3. **stop_rotate 函数**：
   - 通过发送特定的脉宽停止舵机的旋转。

4. **servo_rotate 函数**：
   - 控制舵机按指定的时间和方向旋转。
   - `rtime`：以 30 毫秒为单位确定旋转时间。
   - `revers`：指定旋转方向（true 为反向，false 为正向）。

5. **setup 函数**：
   - 初始化 Grove Vision AI V2、串行通信，并将舵机引脚（D0）配置为输出。

6. **loop 函数**：
   - 持续调用推理过程。
   - 如果检测到对象：
     - 如果对象的 x 坐标小于 80，舵机短时间反向旋转。
     - 如果对象的 x 坐标大于 140，舵机短时间正向旋转。
   - 将检测到的对象的 x 和 y 坐标打印到串行监视器。

要修改代码并自定义对象追踪系统，您可以：

1. 调整 loop 函数中的阈值（80 和 140），以改变舵机保持静止的范围。

2. 修改 `servo_rotate` 函数以调整舵机的旋转时间和速度。

3. 根据对象的位置自定义系统行为。例如，您可以根据检测到的对象的 x 和 y 坐标添加额外的条件或动作。

4. 扩展代码以控制额外的舵机或根据对象的位置执行其他操作。

## 项目二：自动锁定/解锁电脑

通过使用 Grove Vision AI V2 和 XIAO ESP32，增强您的电脑安全性和便利性。本项目通过自动屏幕锁定/解锁功能，确保当您离开时屏幕自动锁定，而当您返回时快速解锁，为您提供无缝且安全的用户体验。

### 第一步：将人脸识别模型上传到 Grove Vision AI V2

在本项目中，我们将根据电脑前是否有人来锁定或解锁屏幕，因此我们需要为 Grove Vision AI V2 使用人脸识别模型。您可以使用 SenseCraft AI 上传此模型，并在预览窗口中查看检测效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/1.png" style={{width:1000, height:'auto'}}/></div>

### 第二步：XIAO 连接到电脑并上传程序到 XIAO

以下是本项目的完整程序，请编译并上传到 XIAO ESP32 系列。

```cpp
#include "USB.h"
#include <USBHIDKeyboard.h>
#include <Seeed_Arduino_SSCMA.h>

#define KEY_DEBOUNCE 100
#define KEY_WAIT 500
// 设置无人时屏幕暂停时间，单位：毫秒
#define SCREEN_TIME 10000

SSCMA Infer;
USBHIDKeyboard Keyboard;

extern char password[] = "YOUR_COMPUTER_PASSWORD";
extern uint pass_size = 6;
unsigned long times;

bool locked = false; 

void lockPC() {
  Keyboard.press(KEY_LEFT_CTRL);
  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press(KEY_DELETE);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  delay(KEY_WAIT);
  
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  locked = true;
}

void unlockPC (){
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  delay(KEY_WAIT);
  for(int i = 0; i < pass_size; i++){
    Keyboard.press(password[i]);
    delay(KEY_DEBOUNCE);
    Keyboard.releaseAll();
  }
  delay(KEY_WAIT);
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  locked = false;
}

void setup() {
  // 在此处放置初始化代码，仅运行一次：
  Serial.begin(115200);
  Serial.println("Scanning...");

  // 启动 HID
  Keyboard.begin();
  USB.begin();
  Infer.begin();

  times = millis();
}

void loop() {
  // 在此处放置主代码，循环运行：
  if (!Infer.invoke()) {
    if (Infer.boxes().size() > 0) {
      if (locked) {
        unlockPC();
        Serial.println("Unlock");
      }
      times = millis();
    } else {
      if ((millis() - times) > SCREEN_TIME && !locked) {
        lockPC();
        Serial.println("Lock");
      }
    }
  } else {
    if ((millis() - times) > SCREEN_TIME && !locked) {
      lockPC();
      Serial.println("Lock");
    }
  }
}
```

如果程序运行顺利，您应该看到如下效果。

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project2.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::提示
1. 此程序仅适用于 Windows 电脑，如果您的电脑使用其他系统，您可能需要更改屏幕关闭的命令。

2. 如果您的 Windows 电脑设置了指纹解锁或其他非密码解锁方式，解锁代码可能无法正常工作。
:::

### 程序注释

代码结构如下：

1. 引入必要的库：
   - `USB.h`：处理 USB 通信。
   - `USBHIDKeyboard.h`：启用 USB HID 键盘功能。
   - `Seeed_Arduino_SSCMA.h`：提供人员检测的推理能力。

2. 定义常量：
   - `KEY_DEBOUNCE`：键盘输入的去抖时间。
   - `KEY_WAIT`：键盘输入之间的等待时间。
   - `SCREEN_TIME`：无人时屏幕锁定的时间间隔。

3. 创建 SSCMA (Infer) 和 USBHIDKeyboard (Keyboard) 类的实例。

4. 声明变量：
   - `password[]`：存储用于解锁电脑的密码。
   - `pass_size`：存储密码的长度。
   - `times`：存储最后一次检测到人员的时间戳。
   - `locked`：跟踪电脑当前的锁定状态。

5. lockPC 函数：
   - 模拟键盘快捷键 (Win+L) 来锁定电脑。
   - 等待 `KEY_DEBOUNCE` 和 `KEY_WAIT` 时间。
   - 按下回车键确认锁定操作。
   - 更新 `locked` 变量以指示锁定状态。

6. unlockPC 函数：
   - 按下回车键启动解锁过程。
   - 等待 `KEY_DEBOUNCE` 和 `KEY_WAIT` 时间。
   - 模拟逐字符输入密码。
   - 按下回车键确认密码输入。
   - 更新 `locked` 变量以指示解锁状态。

7. setup 函数：
   - 初始化串口通信。
   - 启动 USB 键盘 (Keyboard) 和推理引擎 (Infer)。
   - 设置初始人员检测时间戳。

8. loop 函数：
   - 调用推理引擎 (Infer)。
   - 如果检测到人员：
     - 如果电脑处于锁定状态，调用 `unlockPC` 函数解锁。
     - 更新最后一次检测到人员的时间戳。
   - 如果未检测到人员：
     - 如果距离最后一次检测到人员的时间超过 `SCREEN_TIME` 且电脑未锁定，调用 `lockPC` 函数锁定。
   - 如果推理失败：
     - 如果距离最后一次检测到人员的时间超过 `SCREEN_TIME` 且电脑未锁定，调用 `lockPC` 函数锁定。

您可以根据需求自定义代码，以下是可修改的部分：

1. 更新密码：
   - 将 `YOUR_COMPUTER_PASSWORD` 替换为您的实际电脑密码。
   - 修改 `pass_size` 以匹配密码的长度。

2. 调整常量：
   - 修改 `KEY_DEBOUNCE` 和 `KEY_WAIT` 以更改键盘输入的时间。
   - 修改 `SCREEN_TIME` 以更改无人时屏幕锁定的时间间隔。

3. 自定义锁定和解锁过程：
   - 在 `lockPC` 和 `unlockPC` 函数中，您可以修改键盘快捷键或输入序列以匹配您的操作系统或安全设置。

4. 集成额外功能：
   - 您可以扩展代码以在计算机锁定或解锁时执行额外的操作或通知。
   - 例如，您可以发送电子邮件、触发警报或记录事件。

## 项目 III：手势控制鼠标

通过这个突破性的手势控制鼠标项目，使用 Grove Vision AI V2 和 XIAO ESP32，改变您的人机交互体验。告别传统的鼠标输入，拥抱更直观、更自然的计算机导航方式。

Grove Vision AI V2 是该项目的核心，它利用其先进的计算机视觉能力检测并跟踪用户的手势。通过采用复杂的算法，它可以识别特定的手部动作并将其转换为相应的鼠标操作。

### 第一步：将手势识别模型上传到 Grove Vision AI V2

在这个项目中，我们将基于手势操作鼠标，因此我们需要为 Grove Vision AI V2 使用手势识别模型。您可以使用 SenseCraft AI 上传此模型，并在预览窗口中观看检测效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/6.png" style={{width:1000, height:'auto'}}/></div>

### 第二步：XIAO 连接到计算机并上传程序到 XIAO

以下是该项目的完整程序，请编译并上传此程序到 XIAO ESP32 系列。

```cpp
#include <Seeed_Arduino_SSCMA.h>
#include "USBHIDMouse.h"
#include "USB.h"

#define KEY_DEBOUNCE 100
#define KEY_WAIT 500
#define RESET_NUM 3
#define LEFT_CLICK_TARGET 0
#define MOVE_TARGET 1
#define RIGHT_CLICK_TARGET 2

SSCMA Infer;
USBHIDMouse Mouse;

int X = 0, Y = 0;
int8_t mx, my;
bool clicked = false;
int reset_mouse = RESET_NUM;

void setup() {
  // 在此处放置您的初始化代码，仅运行一次：
  Serial.begin(115200);
  Infer.begin();
  
  // 初始化鼠标控制：
  Mouse.begin();
  USB.begin();
}

void move_mouse(int mx, int my) {
  Mouse.move(mx, my);
}

void loop() {
  if (!Infer.invoke()) {
    Serial.println("调用成功:");
    if (Infer.boxes().size() == 0) {
      if (reset_mouse <= 0) {
        X = 0;
        Y = 0;
      } else {
        reset_mouse -= 1;
      }
    }

    for (int i = 0; i < Infer.boxes().size() && i < 1; i++) {
      reset_mouse = RESET_NUM;
      if (Infer.boxes()[i].target == MOVE_TARGET) {
//        Mouse.press(MOUSE_RIGHT);
        if (X == 0 && Y == 0) {
          X = Infer.boxes()[i].x;
          Y = Infer.boxes()[i].y;
        } else {
          mx = Infer.boxes()[i].x - X;
          my = Infer.boxes()[i].y - Y;
          X = Infer.boxes()[i].x;
          Y = Infer.boxes()[i].y;
          move_mouse(-mx * 2, my * 2);
          clicked = false;
        }
      } else if (Infer.boxes()[i].target == LEFT_CLICK_TARGET && !clicked) {
        Mouse.press(MOUSE_LEFT);
        delay(KEY_DEBOUNCE);
        Mouse.release(MOUSE_LEFT);
        delay(KEY_WAIT);
        clicked = true;
      } else if (Infer.boxes()[i].target == RIGHT_CLICK_TARGET && !clicked) {
        Mouse.press(MOUSE_RIGHT);
        delay(KEY_DEBOUNCE);
        Mouse.release(MOUSE_RIGHT);
        delay(KEY_WAIT);
        clicked = false;
      }
    }

  } else {
    Serial.println("调用失败!");
  }
}
```

如果程序运行顺利，您应该看到如下效果。

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project3.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 程序注释

代码结构如下：

1. 引入必要的库：
   - `Seeed_Arduino_SSCMA.h`：提供目标检测的推理功能。
   - `USBHIDMouse.h`：启用 USB HID 鼠标功能。
   - `USB.h`：处理 USB 通信。

2. 定义常量：
   - `KEY_DEBOUNCE`：鼠标点击的去抖时间。
   - `KEY_WAIT`：鼠标点击之间的等待时间。
   - `RESET_NUM`：在未检测到目标的帧数后重置鼠标位置的计数。
   - `LEFT_CLICK_TARGET`、`MOVE_TARGET`、`RIGHT_CLICK_TARGET`：不同操作的目标 ID。

3. 创建 SSCMA (Infer) 和 USBHIDMouse (Mouse) 类的实例。

4. 声明变量：
   - `X`、`Y`：存储当前鼠标位置。
   - `mx`、`my`：存储鼠标移动的增量。
   - `clicked`：跟踪点击状态。
   - `reset_mouse`：用于重置鼠标位置的计数器。

5. `setup` 函数：
   - 初始化串行通信。
   - 启动推理引擎 (Infer) 和 USB 鼠标 (Mouse)。

6. `move_mouse` 函数：
   - 根据指定的增量 (`mx`、`my`) 移动鼠标。

7. `loop` 函数：
   - 调用推理引擎 (Infer)。
   - 如果推理成功且未检测到目标，在 `RESET_NUM` 帧后重置鼠标位置。
   - 遍历检测到的目标（此代码限制为 1 个目标）：
     - 如果目标是 `MOVE_TARGET`：
       - 根据目标的坐标更新鼠标位置。
       - 计算鼠标移动的增量 (`mx`、`my`)。
       - 相应地移动鼠标。
     - 如果目标是 `LEFT_CLICK_TARGET` 且尚未点击：
       - 执行左键单击。
       - 等待 `KEY_DEBOUNCE` 和 `KEY_WAIT` 的时间。
     - 如果目标是 `RIGHT_CLICK_TARGET` 且尚未点击：
       - 执行右键单击。
       - 等待 `KEY_DEBOUNCE` 和 `KEY_WAIT` 的时间。
   - 如果推理失败，打印错误信息。

要根据您的需求自定义代码，可以进行以下更改：

1. 调整常量：
   - 修改 `KEY_DEBOUNCE` 和 `KEY_WAIT` 以更改鼠标点击的时间。
   - 修改 `RESET_NUM` 以更改未检测到目标的帧数后重置鼠标位置的计数。
   - 更新 `LEFT_CLICK_TARGET`、`MOVE_TARGET` 和 `RIGHT_CLICK_TARGET` 以匹配您的特定目标 ID。

2. 修改目标处理逻辑：
   - 在 `loop` 函数中，您可以根据检测到的目标添加、删除或修改条件和操作。
   - 例如，您可以添加额外的鼠标按钮、实现双击或根据特定目标 ID 触发不同的操作。

3. 自定义鼠标移动：
   - 在 `move_mouse` 函数中，您可以通过调整乘法因子（如 `-mx * 2`，`my * 2`）或添加额外的逻辑来修改鼠标移动行为。

4. 集成其他功能：
   - 您可以通过使用适当的库和函数扩展代码，以包含键盘控制、媒体控制或任何其他所需的功能。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>