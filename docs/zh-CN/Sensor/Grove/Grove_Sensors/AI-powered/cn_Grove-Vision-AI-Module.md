---
description: Grove - 视觉 AI 模块
title: Grove 视觉 AI 模块
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Vision-AI-Module
last_update:
  date: 3/22/2023
  author: Citric
---

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

Grove 视觉 AI 模块传感器是一款拇指大小的 AI 摄像头，定制传感器已预装用于人员检测的机器学习算法以及其他定制模型。它可以在几分钟内轻松部署和显示，工作于超低功耗模式，并提供两种信号传输方式和多个板载模块，使其成为入门 AI 驱动摄像头的完美选择。

在本维基中，我们将向您展示如何利用 Grove 视觉 AI 模块传感器连接 Seeed Studio XIAO 系列和 Arduino，检测人员、熊猫，并将其显示在网站上。

### 规格

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style> -->
<table class="tg">
<thead>
  <tr>
    <th class="tg-c3ow">参数</th>
    <th class="tg-c3ow">描述</th>
    <th class="tg-c3ow">备注</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow" rowspan="3">连接器</td>
    <td class="tg-0pky">Grove（Grove Arduino 基座）</td>
    <td class="tg-0pky">5V 充电和数据传输</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>双排 7 针插座（Seeed Duino XIAO）</span></td>
    <td class="tg-0pky">5V 充电和数据传输</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>USB Type-C</span></td>
    <td class="tg-0pky">5V 充电和固件烧录</td>
  </tr>
  <tr>
    <td class="tg-0pky">通信模式</td>
    <td class="tg-0pky">IIC</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">处理器</td>
    <td class="tg-0pky">Himax HX6537-A</td>
    <td class="tg-0pky"><span>400MHz DSP（超低功耗）</span></td>
  </tr>
  <tr>
    <td class="tg-0pky">摄像头传感器</td>
    <td class="tg-0pky">OV2640 芯片</td>
    <td class="tg-0pky">分辨率 1600*1200</td>
  </tr>
  <tr>
    <td class="tg-0pky">麦克风</td>
    <td class="tg-0pky">MSM261D3526H1CPM 芯片</td>
    <td class="tg-0pky">-26dBFs 灵敏度</td>
  </tr>
  <tr>
    <td class="tg-0pky">加速度传感器</td>
    <td class="tg-0pky">STLSM6DS3TR-C 传感器</td>
    <td class="tg-0pky">3D 加速度计和 3D 陀螺仪</td>
  </tr>
</tbody>
</table>

### 特性

- 易于使用的 AI 摄像头：在摄像头传感器中应用边缘机器学习算法，完美用于检测物体
- 即插即用：无需费力即可在几分钟内完成所有功能并显示
- 超低功耗：在检测到物体移动时激活以节省电力
- 紧凑型 AI 驱动摄像头传感器：设备本身拇指大小，基于视觉，适用于边缘智能
- 定制传感器设计：支持用户定义的自定义机器学习模型
- 支持两种信号传输：参考 Seeed Studio XIAO 优雅连接和 Grove Arduino 基座简单连接
- 板载摄像头传感器：集成 OV2640 芯片，分辨率为 1600*1200
- 板载麦克风：集成 MSM261D3526H1CPM 芯片，灵敏度为 -26dBFs
- 板载加速度传感器：集成 STLSM6DS3TR-C 传感器，用于检测 3D 加速度计和 3D 陀螺仪
- 板载 32 MB SPI 超低功耗闪存
- 单线数据输出：代表 Grove 家族简化连接，仅需一根 Grove 电缆即可连接传感器和单板

## 硬件概览

我们假设您可能希望了解该产品的一些基本参数。以下表格提供了 Grove Vision AI 模块传感器的特性和引脚信息。

| 特性                                   | 值       | 单位      |
| :-------:                              | :-------: | :-------: |
| 工作电压                              |   5       |     V     |
| 速率                                   | 115200    |           |
| I2C 接口                              | seeed studio XIAO & Arduino | -         |
| 电源供应                              | 双 7 针连接器 & Type-C       | -         |
| 下载与固件烧录接口                    | Type-C    | -         |
| 尺寸                                   | 40*20*13  | mm        |

### 引脚概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout1.png" style={{width:800, height:'auto'}}/></div>

- 2 —— BL702
- 3 —— MIC MSM261D3526H1CPM
- 4 —— 6轴 LSM6DS3TR-C
- 5 —— SPI 闪存
- 9 —— USB Type-C
- 10 —— 双 7 针母插座
- 11 —— **复位按钮**
- 12 —— **BOOT 按钮**
- 13 —— **用户按钮**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout2.png" style={{width:800, height:'auto'}}/></div>

- 1 —— HX6537-A
- 6 —— 摄像头连接器
- 7 —— DC-DC 芯片
- 8 —— Grove 连接器
- 14 —— 电源指示灯
- 15 —— 烧录指示灯

## 入门指南

我们将向您展示该模块的基本功能，然后介绍如何自定义构建您自己的机器学习模型。但在我们将模块完全应用到项目之前，需要经过几个步骤来使模块准备就绪。

### 准备工作

**硬件**

- Grove Vision AI 模块传感器
- **Windows 主机** PC（已测试 Win10）
- Type-C 数据线

### Arduino 库概览

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

我们在此使用的代码提供了多种分类方法和可选模型，包括自定义模型。默认选择的是目标检测方法和预训练模型。

*Seeed Studio 将在未来开发更多方法和模型，敬请关注。*

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### 功能

在开始开发代码之前，让我们先了解一下库的可用功能。

1. `if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1))` - 这是选择分类方法和模型的地方。

   您可以将 `ALGO_OBJECT_DETECTION` 更改为 `ALGO_OBJECT_COUNT` 或 `ALGO_IMAGE_CLASSIFICATION`。

   同时，如果您将自定义模型（固件）烧录到模块中，可以将 `MODEL_EXT_INDEX_1` 更改为 `MODEL_EXT_INDEX_2` 或 3、4，具体取决于您命名的方式。

2. `object_detection_t data` - 这是结果输出的结构化数据集。

   如果您更改了分类方法，需要将 `object_detection_t` 相应更改为 `image_classification_t` 或 `object_count_t`。

3. `uint8_t len = ai.get_result_len()` - 这里的 "len" 表示检测到的人脸数量。

4. `object_detection_t data` - 这里的数据表示一个 **结构体** 格式，类型为预定义的 "object_detection_t"。

   同时，如果您选择其他分类方法，需要将其更改为 `image_classification_t data` 或 `object_count_t data`。

5. `Serial.print(data.confidence)` - **结构体** 格式不能直接打印，必须指向头文件中定义的具体类型。

```cpp
typedef struct
{
    uint16_t x;
    uint16_t y;
    uint16_t w;
    uint16_t h;
    uint8_t confidence;
    uint8_t target;
} object_detection_t;
```

:::tip
这里打印的 "confidence" 表示摄像头检测目标的置信度。
:::

### 库安装

下载库文件后，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这表示库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

### 库升级

在可预见的未来，我们将优化和升级产品库以实现更多有趣的功能。根据上述提供的库安装方法，我们在此介绍升级方法。

当库优化后，我们将更新链接。您可以**删除电脑中原有的库文件夹**，然后下载最新版本，解压后放入 Arduino IDE 的库目录中。（路径为 **...\Arduino\libraries. ....**，具体取决于您设置的 Arduino 路径）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" style={{width:600, height:'auto'}}/></div>

## Seeed Studio XIAO / Seeeduino / Arduino 示例

现在我们已经安装了库并烧录了固件，可以在 Seeed Studio XIAO nRF52840 和 Seeeduino V4.2 上运行一些示例，使用 Grove AI 模块传感器来观察其表现。

**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE。

- 如果您希望在后续操作中使用 **Seeeduino**，请参考[本教程](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)完成添加。

- 如果您希望在后续操作中使用 **Seeed Studio XIAO SAMD21**，请参考[本教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)完成添加。

- 如果您希望在后续操作中使用 **Seeed Studio XIAO RP2040**，请参考[本教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)完成添加。

- 如果您希望在后续操作中使用 **Seeed Studio XIAO nRF52840**，请参考[本教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)完成添加。

### 示例 1 使用 Seeed Studio XIAO nRF52840 / Seeeduino / Arduino 进行人体检测

在此示例中，我们将检测人脸并统计模块检测到的人数，分别在 <a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><span>Seeed Studio XIAO nRF52840 Sense</span></a> 和 Seeeduino V4.2 (Arduino UNO) 上运行。同时，Seeed Studio 提供了一个[网站](https://vision-ai-demo.seeed.cn/)来显示模块所看到的内容。

#### 所需材料

- **对于 Seeed Studio XIAO BLE Sense**

|    Seeed Studio XIAO nRF52840 Sense          | Grove AI 摄像头  |
|--------------|--------------|
| <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a></div> |

- **对于 Seeeduino V4.2**

| Seeeduino V4.2 | 基础扩展板 | Grove AI 摄像头|
|--------------|-------------|-----------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" style={{width:210, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a></div> |

#### 操作步骤

- **步骤 3 (Seeed Studio XIAO).** 准备一根 Type-C 数据线并将其连接到一个 Seeed Studio XIAO 系列开发板。逐针插入 Grove AI 模块，并使用另一根 Type-C 数据线连接模块。

  两根 Type-C 数据线都应连接到 PC。最后，模块上的 Type-C 接口方向应与 Seeed Studio XIAO SAMD21 上的 Type-C 接口方向一致。例如：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI11.JPG" style={{width:600, height:'auto'}}/></div>

- **步骤 3 (Arduino).** 准备一根 Grove 数据线并将其连接到一个 Arduino 开发板。使用另一根 Type-C 数据线连接模块。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI13.png" style={{width:400, height:'auto'}}/></div>

- **步骤 4.** 上传程序。

```c
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;
void setup()
{
  Wire.begin();
  Serial.begin(115200);

   Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11)) // 物体检测和预训练模型 1
  {
    Serial.print("Version: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("Algo: ");
    Serial.println( ai.algo());
    Serial.print("Model: ");
    Serial.println(ai.model());
    Serial.print("Confidence: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }
}

void loop()
{
  if (state == 1)
  {
    uint32_t tick = millis();
    if (ai.invoke()) // 开始调用
    {
      while (1) // 等待调用完成
      {
        CMD_STATE_T ret = ai.state();
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }

     uint8_t len = ai.get_result_len(); // 接收检测到的人数
     if(len)
     {
       int time1 = millis() - tick;
       Serial.print("Time consuming: ");
       Serial.println(time1);
       Serial.print("Number of people: ");
       Serial.println(len);
       object_detection_t data;       // 获取数据

       for (int i = 0; i < len; i++)
       {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); // 获取结果

          Serial.print("confidence:");
          Serial.print(data.confidence);
          Serial.println();
        }
     }
     else
     {
       Serial.println("No identification");
     }
    }
    else
    {
      delay(1000);
      Serial.println("Invoke Failed.");
    }
  }
  else
  {
    state == 0;
  }
}
```

打开串口监视器并将波特率设置为 115200，人员检测的结果将会连续显示。同时，模块捕获的图像也会显示在 [网站](https://vision-ai-demo.seeed.cn/) 上。成功的持续输出应如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI12.png" style={{width:400, height:'auto'}}/></div>

在显示 [网站](https://vision-ai-demo.seeed.cn/) 上，您可以看到两个面部被框住，并标注了两个数字。数字 0 表示模块检测到的人脸，另一个数字表示置信度。

:::note
并非所有浏览器都支持 Vision AI 结果的显示。请参考下表了解各主流浏览器的支持情况。

| Chrome | Edge | Firefox | Opera | Safari |
|--------|------|---------|-------|--------|
| 支持   | 支持 | 不支持  | 支持  | 不支持 |
:::


## 关于模型

Seeed Studio 提供了预训练的人员检测模型，并将在未来提供更多模型。您可以直接使用这些模型快速了解 AI 摄像头。

您可以在以下位置找到 Grove Vision AI 的固件和模型。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载模型</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 默认固件：人员检测模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI20.png" style={{width:800, height:'auto'}}/></div>

### 更多模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/2.png" style={{width:800, height:'auto'}}/></div>

我们正在持续维护和更新更多有用的模型，您可以关注此仓库。

:::tip
通常，模型文件为 **UF2** 格式，并具有 **pre_num** 格式的后缀。
:::

### 自定义模型

如果您想定制自己的模型，可以参考 <a href="https://github.com/Seeed-Studio/yolov5-swift" target="_blank"><span>这里</span></a>，该项目基于 YOLOV5。

或者参考 [此处教程](https://wiki.seeedstudio.com/cn/Train-Deploy-AI-Model-Grove-Vision-AI/) 来训练自己的模型以满足您的需求。

## 替换新模型

训练模型均以“.uf2”文件形式表示，这是我们所需要的格式。

:::提示
通常，模型文件为 **UF2** 格式，后缀格式为 **pre_num**。
:::

- **步骤 1**. 使用 Type-C 数据线将模块连接到主机 PC，并在模块上 **双击** BOOT 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

  会弹出一个名为 "GROVEAI" 的磁盘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **步骤 2**. 请将模型 `.uf2` 文件复制到 GROVEAI 磁盘以完成固件烧录。

我们可以看到模块上的工作 LED 快速闪烁，这表示烧录过程正在进行中。当磁盘消失时，固件烧录过程完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI10.png" style={{width:600, height:'auto'}}/></div>

- **步骤 3**. 请根据您使用的模型修改程序。

在我们提供的示例中，`setup()` 函数内通过调用 `ai.begin()` 初始化模型。

```cpp
if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11))
```

`ai.begin()` 有两个参数，分别是模型类型和模型编号。编号通常因模型不同而有所区别。也就是说，示例程序中的模型编号仅适用于 **人员检测模型**，如果您使用其他模型，则编号不再是 `0x11`。

:::注意
如果在使用示例时遇到错误信息 "Algo begin failed."，您应该首先检查模型编号是否错误。
:::

那么如何确定模型编号呢？我们的研发工程师提供了一份详细的介绍文档供开发者阅读。

- [协议文档](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/Protocol.md)

但如果您不想阅读如此长的文章，有一个简单的方法可以确定模型编号：注意模型文件名中的最后一个数字，这就是我们需要的编号。

例如，对于模型 **pfld_meter_pre_5.uf2**，最后一位数字是 **5**，这意味着模型编号是 **5**。您可以直接使用：

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)5)
```

或者将其重写为十六进制：

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x05)
```


## 异常处理

如果您在实际使用中遇到意外情况，或者使用不当导致结果异常，请参考以下步骤进行故障排查并尝试修复模块。

### 第 1 部分. 检查 BootLoader 版本

您可能需要检测 BootLoader 版本是否需要更新，以决定是否进行更新。检查版本号的方法如下：

通过 USB-C 端口将 Grove Vision AI 连接到您的电脑。然后双击 Boot 按钮，直到电脑弹出一个名为 GROVEAI 的 USB 闪存驱动器。

打开该磁盘驱动器并打开 **INFO_UF2.TXT** 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/3.png" style={{width:1000, height:'auto'}}/></div>

如图所示，您可以在第一行看到 BootLoader 版本号。截至 2023 年 9 月，最新的 BootLoader 版本号应为 **v2.0.1**。如果您检查到相同的版本号，则原则上无需进行下一步。

### 第 2 部分. 更新 BootLoader

如果您的 Grove Vision AI 无法被电脑识别，并且没有显示端口号，则可能需要更新 BootLoader。

- **步骤 1**. 在 Windows PC 上下载 BootLoader `.bin` 文件。

请通过以下链接下载最新版本的 BootLoader 文件。BootLoader 的名称通常为 `tinyuf2-grove_vision_ai_vx.x.x.bin`。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/tinyuf2-grove_vision_ai_v2.0.1.bin" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 BootLoader</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

这是控制 BL702 芯片的固件，该芯片负责建立电脑与 Himax 芯片之间的连接。最新版本的 BootLoader 已修复 Vision AI 无法被 Mac 和 Linux 识别的问题。

- **步骤 2**. 下载并打开 [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar) 软件，选择 **BL702/704/706**，然后点击 **Finish**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **步骤 3**. 点击 **View**，首先选择 **MCU**。然后移动到 **Image file**，点击 **Browse** 并选择您刚刚下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **步骤 4**. 确保没有其他设备连接到电脑。然后按住模块上的 Boot 按钮，将其连接到电脑。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI05.png" style={{width:600, height:'auto'}}/></div>

  我们可以看到模块背面的 5V 灯和 3.3V LED 灯亮起，然后松开 Boot 按钮。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI06.png" style={{width:600, height:'auto'}}/></div>

- **步骤 5**. 回到电脑上的 BLDevCube 软件，点击 **Refresh** 并选择合适的端口。然后点击 **Open UART**，将 **Chip Erase** 设置为 **True**，接着点击 **Create&Program**，等待过程完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

- **步骤 6**. 建议再次检查 Vision AI 的版本号，以确保使用的是最新的 BootLoader。

### 第三部分：恢复出厂固件

:::提示
如果在最新版本的 Windows 11 上上传固件导致设备无法使用，您可能需要参考 [更新 BootLoader](#step-2-update-bootloader) 部分。
:::

- **步骤 1**. 擦除固件

:::注意
您可以尝试跳过此步骤，直接将固件复制到 Vision AI。如果成功，则无需擦除原始固件。如果失败，则可能需要擦除固件。
:::

请使用您拥有的 Arduino 主板，推荐使用 Seeed Studio XIAO 系列、Wio Terminal 或 Seeeduino。通过 IIC 接口将 Grove Vision AI 连接到主板。

打开 Arduino IDE 并上传以下程序以擦除固件。

```c
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>
WEI wei(Wire);

void setup()
{
    Wire.begin();
    Serial.begin(115200);
    while (!Serial)
    {
        /* code */
    }
    delay(1000);
    Serial.println("Press any key to start erase");
}

void loop()
{
    if (Serial.available())
    {
        while (Serial.available())
        {
            Serial.read();
        }
        uint32_t id = wei.ID();
        Serial.print("ID: 0x");
        Serial.println(id, HEX);
        wei.enter_bootloader();
        Serial.println("Erase");
        wei.erase();
        Serial.println("Erase done");
    }
}
```

打开串口监视器，输入一些随机字符，例如 "a"，点击发送，然后擦除操作将开始执行。如果您看到以下消息，则证明固件擦除成功。我们可以进入下一步。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI23.png" style={{width:800, height:'auto'}}/></div>

- **步骤 2**. 使用 Type-C 数据线将模块连接到主机电脑，并 **双击** 模块上的 BOOT 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

会弹出一个名为 "GROVEAI" 的磁盘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **步骤 3**. 下载出厂固件。

请通过以下链接下载最新版本的出厂固件。出厂固件的名称通常为 `grove_ai_without_crc_vxx.uf2` 或 `grove_ai_vxx.uf2`。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::提示
截至 2023 年 9 月，最新固件版本为 **grove_ai_v02-00.uf2**。
:::

- **步骤 4**. 刷写出厂固件。

将 `grove_ai_without_crc_vxx.uf2` 或 `grove_ai_vxx.uf2` 文件复制到 GROVEAI 磁盘中以完成固件刷写。

以上三个部分需要依次判断并执行。当上述步骤完成后，您可以再次进行操作。如果仍然存在问题，请联系我们的技术支持团队。

## 故障排查

### Q1: 主要的连接方法是什么？

- a. 首先连接微控制器和模块。
- b. 其次连接微控制器与主机电脑。
- c. 最后连接模块与主机电脑。

### Q2: 为什么我在网站上看不到图像显示？也无法检测？

- a. 模块是否过热？仅连接模块可能会导致过热问题，使模块暂时无法正常工作。
- b. 是否按照正确的方法连接？

### Q3: 为什么《Grove》Vision AI 在使用过程中突然出现“Algo begin failed.”错误？

在我们提供的示例中，`setup()`函数通过调用 `ai.begin()` 来初始化模型。

```cpp
if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11))
```

`ai.begin()` 有两个参数，分别是模型类型和模型编号。不同模型的编号通常不同。也就是说，示例程序中的模型编号仅适用于 **人员检测模型**，如果使用其他模型，则编号不再是 `0x11`。

:::caution
如果在使用示例时遇到错误信息“Algo begin failed.”，首先应该检查模型编号是否错误。
:::

那么如何确定模型编号呢？我们的研发工程师提供了一份详细的介绍文档供开发者阅读。

- [协议文档](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/Protocol.md)

但如果您不想阅读这么长的文章，有一个简单的方法可以确定模型编号：注意发布版本中模型名称的最后一个数字，这就是我们需要的编号。

例如，对于模型 **pfld_meter_pre_5.uf2**，最后一位数字是 **5**，这意味着模型编号是 **5**。您可以直接使用：

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)5)
```

或者将其重写为十六进制：

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x05)
```

## 资源
- **[PDF]** [电路图](https://files.seeedstudio.com/wiki/Grove_AI_Module/Grove_Vision_AI_NORF_v1.1.pdf)
- **[Zip]** [布局图](https://files.seeedstudio.com/wiki/Grove_AI_Module/Grove_Vision_AI_NORF_v1.1.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>