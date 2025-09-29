---
description: Grove 手势传感器 PAJ7660 的入门指南。
title: Grove 智能红外手势传感器 (PAJ7660)
keywords:
- gesture
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_gesture_paj7660
last_update:
  date: 06/28/2023
  author: Citric
---

# Grove 智能红外手势传感器 (PAJ7660)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


## 简介

Grove 智能红外手势传感器是一款智能手势识别模块，配备红外摄像头传感器并应用 AI 算法。它可以检测超过 15 种手势，具有广泛的检测范围，同时支持 IIC 和 SPI 通信。该模块还支持 Grove、Type-C 和 Seeed Studio XIAO 直接连接。

### 特性

- **紧凑型 AI 手势传感器**：配备红外摄像头传感器并应用 AI 算法实现手势检测，尺寸紧凑，仅为 4.3cm x 2.1cm
- **超过 15 种手势，检测范围广**：支持多种手势，如 N 指推、捏合、点击、抓取、旋转、大拇指上下、静态等，检测范围为 5-40cm
- **高兼容性**：通过 I2C 通信兼容 XIAO 系列接口和 Grove 连接器，同时支持通过 SPI 通信在 PC 上显示图像
- **灵活的电压选择**：Grove 接口兼容 3.3V 和 5V 系统

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/hardware.png" style={{width:1000, height:'auto'}}/></div>

## 入门指南

### 操作平面

手势操作距离为 15 至 30 cm，最远不能超过 35 cm。基于传感器 FOV 78.3°（水平）和 62.9°（垂直），操作区域在 30 cm 处为 48 x 36 cm²。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/1.png" style={{width:700, height:'auto'}}/></div>

除了传感器的距离外，还需要注意传感器的放置位置。在传感器的正面左上角有一个小人形标志。如果看到人形直立，则表示放置正确。如果是倒置的，则可能无法获得准确的识别结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/13.png" style={{width:400, height:'auto'}}/></div>

### 背景干扰

由于背景噪声可能影响手势识别的准确性，建议避免手掌后方存在反射较高的背景物体。在正常手势识别条件下，建议手掌与背景之间至少保持 35cm 的距离。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/2.png" style={{width:600, height:'auto'}}/></div>


### 手势类型

以下部分描述了所有支持的手势类型。

#### 手势定义

<div class="table-center">
	<table align="center">
		<tr>
			<th>手势</th>
			<th>描述</th>
            <th>备注</th>
		</tr>
		<tr>
			<td>N 指 (N=0~5)</td>
			<td>拳头顶部的 0 ~ 5 根手指 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/3.png" style={{width:250, height:'auto'}}/></div></td>
            <td>操作距离 15 至 30 cm <br /> 静态</td>
		</tr>
		<tr>
			<td>N 指推 (N=1~5)</td>
			<td>N 根手指向传感器方向移动 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/4.png" style={{width:250, height:'auto'}}/></div></td>
            <td>操作距离 15 至 30 cm <br /> 可编程阈值</td>
		</tr>
        <tr>
            <td>捏合</td>
            <td>两指靠近捏合，打开释放 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/5.png" style={{width:100, height:'auto'}}/></div></td>
            <td>操作距离 15 至 30 cm <br /> 可使用手掌中心坐标作为光标并报告捏合结果</td>
        </tr>
        <tr>
            <td>顺时针/逆时针旋转</td>
            <td>手腕以圆形模式移动 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/6.png" style={{width:150, height:'auto'}}/></div></td>
            <td>操作距离 15 至 30 cm <br /> 可设置手势检测角度，可报告角度值</td>
        </tr>
        <tr>
            <td>手向右或向左滑动</td>
            <td>双手向相反方向滑动一段距离 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/7.png" style={{width:300, height:'auto'}}/></div></td>
            <td>操作距离 15 至 30 cm <br /> 可编程阈值</td>
        </tr>
        <tr>
            <td>点击</td>
            <td>单指点击（手指消失） <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/8.png" style={{width:200, height:'auto'}}/></div></td>
            <td>操作距离 15 至 30 cm <br /> 可使用手掌中心坐标作为光标</td>
        </tr>
        <tr>
            <td>抓取</td>
            <td>5 指变为 0 指 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/9.png" style={{width:200, height:'auto'}}/></div></td>
            <td>操作距离 15 至 30 cm <br /> 可使用手掌中心坐标作为光标 <br /> 报告抓取结果</td>
        </tr>
        <tr>
            <td>大拇指向上</td>
            <td>拳头顶部的大拇指 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/10.png" style={{width:180, height:'auto'}}/></div></td>
            <td>操作距离 15 至 25cm</td>
        </tr>
        <tr>
            <td>大拇指向下</td>
            <td>拳头底部的大拇指 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/11.png" style={{width:180, height:'auto'}}/></div></td>
            <td>操作距离 15 至 25cm</td>
        </tr>
	</table>
</div>

#### 手势操作模式

共有 3 种手势模式：拇指模式、光标模式和手势模式。每种模式定义了特定的手势类型，以适应某些用户场景或应用。默认的组合模式包含除拇指手势外的所有手势。

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
            <td>拇指向上/向下</td>
		</tr>
		<tr>
			<td>4</td>
			<td>光标模式</td>
            <td>静态手指 <br /> 推动 <br /> 旋转 <br /> 点击 <br /> 捏合 <br /> 抓取</td>
		</tr>
        <tr>
			<td>5</td>
			<td>手势模式（默认）</td>
            <td>静态手指 <br /> 推动 <br /> 滑动 <br /> 旋转 <br /> 点击（IS_SELECT 标志 = 1） <br /> 捏合（IS_SELECT 标志 = 1） <br /> 抓取（IS_SELECT 标志 = 1）</td>
		</tr>
	</table>
</div>

### 硬件类型

Grove 智能红外手势传感器支持多种通信协议，包括 IIC、SPI 和 USB。不同模式可通过背面的 4 位 DIP 开关直接选择。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/back.png" style={{width:400, height:'auto'}}/></div>

<br />

下图和表格将展示如何使用 4 位 DIP 开关选择您希望使用的模式。

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

:::note
使用不同模式时，接线和代码可能会略有不同。我们将在后续示例中详细说明。
:::

## 使用上位机软件

如果您希望通过 USB 数据线将 Grove 手势传感器连接到计算机，并实时查看识别结果，那么使用上位机软件是您的最佳选择。

### 步骤 1. 下载并打开软件

您可以通过点击 **[这里](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/GestureDemo_220620_Customer.zip)** 下载软件的 zip 文件。然后，请解压下载的 zip 文件，打开解压后的 **GestureDemo_220620_Customer** 文件夹，并双击运行 **GestureDemo_220620_Customer.exe** 文件。

:::tip
此时可能会弹出一个错误窗口，提示未找到手势传感器。我们可以直接关闭错误消息。
:::

### 步骤 2. 将 Grove 手势传感器连接到 PC

接下来，请确保 Grove 手势传感器处于 USB 模式，将 4 位 DIP 开关全部调至 OFF。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/14.png" style={{width:150, height:'auto'}}/></div>

然后使用高质量的数据线，将 Grove 手势传感器的 USB-C 接口连接到计算机的 USB 接口。

### 步骤 3. 在软件中查看结果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/16.png" style={{width:1000, height:'auto'}}/></div>

连接到计算机后，我们点击软件左上角的 **Run** 按钮，然后选择 **Gesture** 模式以实时查看结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/17.png" style={{width:1000, height:'auto'}}/></div>

手势类型及其介绍可以在 **[前面的部分](#gesture-types)** 中找到。

## Arduino 库概述

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### 功能

在开始开发代码之前，让我们先了解一下该库的可用功能。

1. `bool init()` —— 此函数用于初始化 Grove 手势传感器。如果初始化成功，返回 **True**；如果失败，返回 **False**。

2. `bool getResult(paj7620_gesture_t& res)` —— 此函数用于获取传感器识别手势的结果。

### 安装

下载 ZIP 库文件后，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚刚下载的 ZIP 文件，如果库安装成功，您会在通知窗口中看到 **Library added to your libraries**，这表示库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## 示例 1：通过 IIC 连接传感器到 MCU

### 第 1 步：将 4 位 DIP 开关拨到 IIC 位置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style={{width:100, height:'auto'}}/></div>

从左到右的第二个开关需要设置为 OFF，其他开关设置为 ON。

### 第 2 步：通过 Grove 电缆将 MCU 连接到 Grove 手势传感器

IIC 接口兼容 XIAO 系列和 Arduino/Seeeduino 系列。如果您使用的是 Arduino/Seeeduino，则可能需要使用 Grove 电缆连接到它们的 IIC 接口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/18.jpg" style={{width:600, height:'auto'}}/></div>

如果您使用的是 XIAO，那么操作非常简单，您只需直接将其插入 Grove 手势传感器的母接口即可使用。请注意，USB-C 接口始终朝外。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### 第 3 步：上传程序

将以下程序复制到 Arduino IDE 中，选择您使用的 XIAO 开发板，编译并上传程序。

#### 代码 1：手势模式（默认）

```cpp
#include "Gesture.h"

pag7660 Gesture; // 默认使用组合模式

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 测试示例：手势组合模式。");
    
    if(Gesture.init()) {
        Serial.println("PAG7660 初始化成功");
    } else {
        Serial.println("PAG7660 初始化失败");
    }
    Serial.println("请输入您的手势：\n");
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
        "点击",
        "抓取",
        "捏合",
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
        Serial.println("-指");
        break;
    case 6:
        Serial.print("右旋 ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("左旋 ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("左滑");
        break;
    case 9:
        Serial.println("右滑");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-指推");
        break;
    default:
        break;
    }
}
```

如果一切正常，直接对着 Grove 手势传感器做手势，它将在串口监视器中输出结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/20.png" style={{width:800, height:'auto'}}/></div>

#### 代码 2：拇指模式

```cpp
#include "Gesture.h"

pag7660 Gesture(GESTURE_THUMB_MODE); // 使用拇指模式

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 测试示例：手势拇指模式。");

    // 使用 SPI 初始化时需提供芯片选择引脚号
    if(Gesture.init()) {
        Serial.println("PAG7660 初始化成功");
    } else {
        Serial.println("PAG7660 初始化失败");
    }
    Serial.println("请输入您的手势：\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("拇指向上");
        else if (result.thumb.down)
            Serial.println("拇指向下");
        }
    delay(100);
}
```

如果一切正常，直接对着 Grove 手势传感器做手势，它将在串行监视器中输出结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/21.png" style={{width:800, height:'auto'}}/></div>

:::提示
Grove 手势传感器有三种不同的模式。我们已经完成了两种独立模式的程序开发，并在此提供，请参考 [手势操作模式](#gesture-operation-mode) 了解不同模式之间的差异。
:::

## 演示 2：通过 SPI 将传感器连接到 XIAO

如果您希望使用 SPI 方法而不是 IIC，可以参考以下步骤完成您的项目。

### 步骤 1. 将 4 位 DIP 开关切换到 SPI 位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/SPI.png" style={{width:100, height:'auto'}}/></div>

所有开关都需要切换到 ON 位置。

### 步骤 2. 将 XIAO 连接到 Grove 手势传感器。

将 XIAO 直接插入 Grove 手势传感器的母连接器并使用它。请注意，USB-C 端口始终面向外侧。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### 步骤 3. 上传程序

将以下程序复制到 Arduino IDE 中，选择您正在使用的 XIAO 开发板，编译并上传程序。

#### 代码 1：手势模式（默认）

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture; // 默认使用组合模式

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 测试演示：手势组合模式。");
    
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 初始化成功");
    } else {
        Serial.println("PAG7660 初始化失败");
    }
    Serial.println("请输入您的手势：\n");
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
        "点击",
        "抓取",
        "捏合",
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
        Serial.println("-指");
        break;
    case 6:
        Serial.print("向右旋转 ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("向左旋转 ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("向左滑动");
        break;
    case 9:
        Serial.println("向右滑动");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-指推");
        break;
    default:
        break;
    }
}
```

如果一切正常，直接对着 Grove 手势传感器做手势，它将在串行监视器中输出结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/22.png" style={{width:800, height:'auto'}}/></div>

#### 代码 2：拇指模式

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture(GESTURE_THUMB_MODE); // 使用拇指模式

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 测试演示：手势拇指模式。");

    // 使用 SPI 初始化，传入芯片选择引脚号
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 初始化成功");
    } else {
        Serial.println("PAG7660 初始化失败");
    }
    Serial.println("请输入您的手势：\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("拇指向上");
        else if (result.thumb.down)
            Serial.println("拇指向下");
        }
    delay(100);
}
```

如果一切正常，直接对着 Grove 手势传感器做手势，它将在串行监视器中输出结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/23.png" style={{width:800, height:'auto'}}/></div>

:::提示
Grove 手势传感器有三种不同的模式。我们已经完成了两种独立模式的程序开发，并在此提供，请参考 [手势操作模式](#gesture-operation-mode) 了解不同模式之间的差异。
:::

## 资源

- **[ZIP]** [Grove 手势传感器原理图和PCB](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH&PCB.zip)
- **[PDF]** [Grove 手势传感器原理图](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH_PDF.pdf)
- **[Datasheet]** [PAG7661QN_FW-DS_V0.8_05072022_Confidential.pdf](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/PAG7661QN_FW-DS_V0.8_05072022_Confidential.pdf)

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