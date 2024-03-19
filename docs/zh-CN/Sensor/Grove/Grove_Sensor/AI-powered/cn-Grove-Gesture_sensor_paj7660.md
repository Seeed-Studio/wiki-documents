---
description: Getting started for the Grove Gesture sensor PAJ7660.
title: Grove Smart IR Gesture Sensor (PAJ7660)
keywords:
- gesture
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_gesture_paj7660
last_update:
  date: 3/14/2024
  author: DuKaiyin
---

# Grove智能红外手势传感器（PAJ7660）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取一个🖱️</font></span></strong>
    </a>
</div>



## 介绍

Grove智能红外手势传感器是一款智能手势识别模块，配备红外摄像头传感器和应用AI算法。它可以检测超过15种手势，支持广泛的检测，并且支持IIC和SPI通信。此模块还允许Grove、Type-C和Seeed Studio XIAO直接连接。

### 特点

- **紧凑型AI手势传感器**：配备红外摄像头传感器，并应用AI算法实现手势检测，在4.3cm x 2.1cm的紧凑尺寸板上。
- **超过15种手势的广泛检测**：支持各种手势，如N指推动、捏、点击、抓取、旋转、竖起大拇指/放下大拇指、静态等，检测范围为5-40cm。
- 通过I2C通信与XIAO系列接口和Grove连接器兼容，同时支持通过SPI通信在PC上显示图像。
- **灵活的电压选择**：Grove接口兼容3.3V和5V系统

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/hardware.png" style={{width:1000, height:'auto'}}/></div>

## 入门指南

### 操作平面

手势操作距离为15到30厘米，最远不能超过35厘米。基于传感器FOV 78.3°（水平）和62.9°（垂直），在30厘米处的操作区域为48 x 36 平方厘米。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/1.png" style={{width:700, height:'auto'}}/></div>

除了与传感器的距离外，您还需要注意传感器的放置位置。在传感器的正面，左上角有一个小人形图案。如果看到人形图案直立，则说明您已将其放置在正确的位置。如果它是倒置的，那么很可能您将无法获得准确的识别结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/13.png" style={{width:400, height:'auto'}}/></div>

### 背景干扰

由于背景噪声可能会影响手势识别的准确性，建议避免手掌后面相对较高反射的背景物体。在正常的手势识别条件下，建议手掌与背景之间至少保持35厘米的距离。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/2.png" style={{width:600, height:'auto'}}/></div>

### 手势类型

所有支持的手势类型在以下各节中描述。

#### 手势定义

<div class="table-center">
	<table align="center">
		<tr>
			<th>手势</th>
			<th>描述</th>
            <th>注意</th>
		</tr>
		<tr>
			<td>N手指（N=0〜5）</td>
			<td>0 ~ 5个手指在拳头顶部 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/3.png" style={{width:250, height:'auto'}}/></div></td>
            <td>操作距离15到30厘米<br /> 静态</td>
		</tr>
		<tr>
			<td>N指（N=1〜5）</td>
			<td>N个手指向传感器前进 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/4.png" style={{width:250, height:'auto'}}/></div></td>
            <td>操作距离15到30厘米 <br /> 编程阈值</td>
		</tr>
        <tr>
            <td>捏</td>
            <td>两个手指靠近捏，打开释放<br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/5.png" style={{width:100, height:'auto'}}/></div></td>
            <td>操作距离15到30厘米 <br /> 可以使用手掌中心坐标作为光标，并报告捏结果</td>
        </tr>
        <tr>
            <td>旋转CW/CCW</td>
            <td>手腕呈圆形运动 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/6.png" style={{width:150, height:'auto'}}/></div></td>
            <td>操作距离15到30厘米 <br /> 可以设置手势检测角度，可以报告角度值</td>
        </tr>
        <tr>
            <td>向右或向左手划</td>
            <td>将双手向各自的方向划动一段距离 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/7.png" style={{width:300, height:'auto'}}/></div></td>
            <td>操作距离15到30厘米<br /> 可编程阈值</td>
        </tr>
        <tr>
            <td>点击</td>
            <td>一个手指点击（手指消失）<br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/8.png" style={{width:200, height:'auto'}}/></div></td>
            <td>操作距离15到30厘米<br />可以使用手掌中心坐标作为光标</td>
        </tr>
        <tr>
            <td>抓取</td>
            <td>从5个手指到0个手指 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/9.png" style={{width:200, height:'auto'}}/></div></td>
            <td>操作距离15到30厘米<br /> 可以使用手掌中心坐标作为光标<br />报告抓取结果</td>
        </tr>
        <tr>
            <td>竖起大拇指</td>
            <td>大拇指在拳头顶部 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/10.png" style={{width:180, height:'auto'}}/></div></td>
            <td>操作距离15到25厘米</td>
        </tr>
        <tr>
            <td>竖下大拇指</td>
            <td>大拇指在拳头底部 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/11.png" style={{width:180, height:'auto'}}/></div></td>
            <td>操作距离15到25厘米</td>
        </tr>
	</table>
</div>


#### 手势操作模式

有3种手势模式：拇指模式、光标模式和手势模式。每种模式定义了特定的手势类型，适用于某些用户场景或应用程序。默认的组合模式包括除了拇指以外的所有手势。

<div class="table-center">
	<table align="center">
		<tr>
			<th>模式</th>
			<th>默认连接</th>
            <th>手势类型</th>
		</tr>
		<tr>
			<td>2</td>
			<td>拇指模式</td>
            <td>拇指上/下</td>
		</tr>
		<tr>
			<td>4</td>
			<td>光标模式</td>
            <td>静态手指 <br /> 推 <br />旋转 <br /> 点击 <br /> 捏 <br /> 抓取</td>
		</tr>
        <tr>
			<td>5</td>
			<td>手势模式（默认）</td>
            <td>静态手指 <br /> 推 <br /> 滑动 <br /> 旋转 <br /> 点击（IS_SELECT标志=1） <br /> 捏（IS_SELECT标志=1） <br /> 抓取（IS_SELECT标志=1）</td>
		</tr>
	</table>
</div>

### 硬件类型

Grove智能红外手势传感器支持多种通信协议，可选择IIC、SPI和USB。通过背面的4位DIP开关直接选择不同的模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/back.png" style={{width:400, height:'auto'}}/></div>

<br />

下面的图表将向您展示如何使用4位DIP开关选择您希望使用的模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/12.png" style={{width:300, height:'auto'}}/></div>

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
			<th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
		</tr>
		<tr>
			<th>I2C 模式</th>
			<td>ON</td>
            <td>OFF</td>
            <td>ON</td>
            <td>ON</td>
		</tr>
		<tr>
			<th>SPI 模式</th>
			<td>ON</td>
            <td>ON</td>
            <td>ON</td>
            <td>ON</td>
		</tr>
        <tr>
			<th>USB 模式</th>
			<td>OFF</td>
            <td>OFF</td>
            <td>OFF</td>
            <td>OFF</td>
		</tr>
	</table>
</div>

::: 注意
在使用不同模式时，接线和代码可能会略有不同。我们将在以下示例中更详细地告诉您有关此事。
:::

## 使用上位机软件

如果您想通过USB电缆将Grove手势传感器连接到计算机，并实时查看识别结果，则最好使用上位机软件。

### 步骤1. 下载并打开软件

您可以先通过点击**[这里](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/GestureDemo_220620_Customer.zip)**下载软件的zip文件。然后，请解压下载的zip文件，打开解压后的**GestureDemo_220620_Customer**文件夹，并双击运行**GestureDemo_220620_Customer.exe**文件。

:::tip

 此时可能会弹出错误窗口，告诉我们找不到手势传感器，我们只需关闭错误消息即可。
:::

### 步骤2. 将Grove手势传感器连接到PC

接下来，请确保将Grove手势传感器设置为USB模式，方法是将4位DIP开关全部调至OFF位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/14.png" style={{width:150, height:'auto'}}/></div>

使用高质量的数据线，将Grove手势传感器的USB-C端口连接到计算机的USB端口。

### 步骤3. 在软件中查看结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/16.png" style={{width:1000, height:'auto'}}/></div>

连接到计算机后，我们点击软件左上角的**运行**按钮，然后选择**手势**模式，以实时查看结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/17.png" style={{width:1000, height:'auto'}}/></div>

手势类型及其介绍可以在**[前面的章节](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#gesture-types)**中找到。

## Arduino库概述

:::tip
如果您是第一次使用Arduino，我们强烈建议您参考[Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture/tree/dev">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载资料库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### 功能

在我们开始开发代码之前，让我们先看看库中提供的可用函数。

1. `bool init()` —— 此函数初始化Grove手势传感器，如果初始化成功，则返回**True**，否则返回**False**。

2. `bool getResult(paj7620_gesture_t& res)` —— 此函数用于获取传感器对手势的识别结果。

### 安装

由于您已经下载了zip库，打开Arduino IDE，点击**Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的zip文件，如果库正确安装，您将在通知窗口中看到**Library added to your libraries**。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## 演示1：通过IIC连接传感器到MCU

### 步骤1. 将4位DIP开关调至IIC位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style={{width:100, height:'auto'}}/></div>

从左到右的第二档位需要设置为OFF，其他都设置为ON。

### 步骤2. 使用Grove电缆将MCU连接到Grove手势传感器。

IIC接口与XIAO系列和Arduino/Seeeduino系列兼容。如果您使用的是Arduino/Seeeduino，则可能需要使用Grove电缆连接到它们的IIC接口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/18.jpg" style={{width:600, height:'auto'}}/></div>

如果您使用的是XIAO，那么一切都很简单，您只需要将其直接插入到Grove手势传感器的母接口中并使用它。请注意，USB-C端口始终朝外。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### 步骤3. 上传程序

将以下程序复制到Arduino IDE中，选择您正在使用的XIAO开发板，编译并上传程序。

#### 代码1：手势模式（默认）

```cpp
#include "Gesture.h"

pag7660 Gesture; // Combined mode is used by default

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture combined mode.");
    
    if(Gesture.init()) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        printResultCombinedMode(result);
    }
    delay(100);
}

void printResultCombinedMode(const pag7660_gesture_t& result) {
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
    };
    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                Serial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        Serial.print(result.type);
        Serial.println("-finger");
        break;
    case 6:
        Serial.print("Rotate Right ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("Rotate Left ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("Swipe Left");
        break;
    case 9:
        Serial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-finger push");
        break;
    default:
        break;
    }
}
```

如果一切顺利，直接对准Grove手势传感器做手势动作，它将在串行监视器中输出结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/20.png" style={{width:800, height:'auto'}}/></div>

#### 代码2：拇指模式

```cpp
#include "Gesture.h"

pag7660 Gesture(GESTURE_THUMB_MODE); // Thumb mode is used

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture thumb mode.");

    // initialize with a SPI chip select pin number to use SPI
    if(Gesture.init()) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("Thumb Up");
        else if (result.thumb.down)
            Serial.println("Thumb Down");
        }
    delay(100);
}
```

如果一切顺利，直接对准Grove手势传感器做手势动作，它将在串行监视器中输出结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/21.png" style={{width:800, height:'auto'}}/></div>

:::提示 Grove手势传感器有三种不同的模式。我们已经完成了两种独立模式的程序开发，并在这里提供了它们，请参考[手势操作模式](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#手势操作模式)以了解不同模式之间的区别。
:::

## 演示2：通过SPI连接传感器到XIAO

如果您希望使用SPI方法而不是IIC方法，则可以参考这里的步骤来完成您的项目。

### 步骤1. 将4位DIP开关调至SPI位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/SPI.png" style={{width:100, height:'auto'}}/></div>

所有开关都需要切换到ON位置。

### 步骤2. 连接XIAO到Grove手势传感器。

将XIAO直接插入Grove手势传感器的母接口并使用它。请注意，USB-C端口始终朝外。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### 步骤3. 上传程序

将以下程序复制到Arduino IDE中，选择您正在使用的XIAO开发板，编译并上传程序。

#### 代码1：手势模式（默认）

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture; // Combined mode is used by default

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture combined mode.");
    
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        printResultCombinedMode(result);
    }
    delay(100);
}

void printResultCombinedMode(const pag7660_gesture_t& result) {
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
    };
    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                Serial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        Serial.print(result.type);
        Serial.println("-finger");
        break;
    case 6:
        Serial.print("Rotate Right ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("Rotate Left ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("Swipe Left");
        break;
    case 9:
        Serial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-finger push");
        break;
    default:
        break;
    }
}
```

如果一切顺利，直接对准Grove手势传感器做手势动作，它将在串行监视器中输出结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/22.png" style={{width:800, height:'auto'}}/></div>

#### 代码2：拇指模式

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture(GESTURE_THUMB_MODE); // Thumb mode is used

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture thumb mode.");

    // initialize with a SPI chip select pin number to use SPI
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("Thumb Up");
        else if (result.thumb.down)
            Serial.println("Thumb Down");
        }
    delay(100);
}
```

如果一切顺利，直接对准Grove手势传感器做手势动作，它将在串行监视器中输出结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/23.png" style={{width:800, height:'auto'}}/></div>

:::提示 Grove手势传感器有三种不同的模式。我们已经完成了两种独立模式的程序开发，并在这里提供了它们，请参考[手势操作模式](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#手势操作模式)以了解不同模式之间的区别。
:::

## 资源

- **[ZIP]** [Grove 手势 传感器 SCH&PCB](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH&PCB.zip)
- **[PDF]** [Grove 手势 传感器SCH](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH_PDF.pdf)



## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供了几种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
















