---
description:  Grove - Vision AI Module
title:  Grove Vision AI Module
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Vision-AI-Module
last_update:
  date: 3/15/2024
  author: DuKaiyin
---

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买一份 🖱️</font></span></strong>
    </a>
</div>

## 介绍

Grove Vision AI Module Sensor 代表拇指大小的 AI 摄像头、已安装用于人员检测的 ML 算法的定制传感器以及其他定制模型。几分钟内即可轻松部署和展示，工作在超低功耗模式下，并提供两种信号传输方式和多个板载模块，所有这些都使其非常适合人工智能摄像头的入门。

在这个wiki中，我们将向您展示如何利用Grove Vision AI模块Sensor连接seeed studio XIAO系列和Arduino，来检测人、熊猫，然后将其显示在网站上。

### Specification

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
    <th class="tg-c3ow">注意</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow" rowspan="3">连接器</td>
    <td class="tg-0pky">Grove（Arduino 的 Grove 底座）</td>
    <td class="tg-0pky">5V充电和数据传输</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>双排7针插座（seed duino XIAO</span></td>
    <td class="tg-0pky">5V充电和数据传输</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>USB Type-C</span></td>
    <td class="tg-0pky">5V Charge and Firmware burn</td>
  </tr>
  <tr>
    <td class="tg-0pky">通讯方式</td>
    <td class="tg-0pky">IIC</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">处理器</td>
    <td class="tg-0pky">Himax HX6537-A </td>
    <td class="tg-0pky"><span>	400Mhz DSP（超低功耗）</span></td>
  </tr>
  <tr>
    <td class="tg-0pky">相机传感器</td>
    <td class="tg-0pky">OV2640 芯片</td>
    <td class="tg-0pky">分辨率 1600*1200</td>
  </tr>
  <tr>
    <td class="tg-0pky">麦克风</td>
    <td class="tg-0pky">MSM261D3526H1CPM 芯片</td>
    <td class="tg-0pky">-26dBFs 灵敏度</td>
  </tr>
  <tr>
    <td class="tg-0pky">加速度计传感器</td>
    <td class="tg-0pky">STLSM6DS3TR-C 传感器</td>
    <td class="tg-0pky">3D加速度计和3D陀螺仪</td>
  </tr>
</tbody>
</table>

- ### 特征

  

  - 易于使用的人工智能相机：在相机传感器中应用边缘机器学习算法，完美检测物体
  - 即插即用：毫不费力地在几分钟内执行全部功能并显示
  - 超低功耗：检测到物体移动时激活，节省电量
  - 紧凑型人工智能摄像头传感器：设备本身只有拇指大小，基于视觉，适合边缘智能
  - 定制传感器设计：支持用户定义的定制ML模型
  - 支持两种信号传输：Arduino简单连接参考seeed studio XIAO优雅连接和Grove底座
  - 板载摄像头传感器：搭载OV2640芯片，分辨率1600*1200
  - 板载麦克风：搭载MSM261D3526H1CPM芯片，灵敏度-26dB
  - 板载加速计传感器：搭载STLSM6DS3TR-C传感器，用于检测3D加速度计和3D陀螺仪
  - 板载 32 MB SPI 超低功耗闪存
  - 一根电线用于所有数据输出：代表 Grove 系列简化连接，传感器和单板之间仅需要一根 Grove 电缆

##  硬件概述

我们假设您可能想了解产品的一些基本参数。以下表格提供了有关Grove Vision AI模块传感器的特性和引脚分配的信息。

| 特征                       | 值     | 单位    |
| :-------:                              | :-------: | :-------: |
| 工作电压                  |   5    |     V       |
| 波特率   |    115200     |          |
| I2C 接口                        | seeed studio XIAO & Arduino   | -         |
| 电源 | 双 7 针连接器和 Type-C | -         |
| 下载和固件烧录界面 | Type-C    | -         |
| 尺寸                           |   40*20*13        | mm        |

### 引脚排列概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout1.png" style={{width:800, height:'auto'}}/></div>

- 2 —— BL702
- 3 —— 麦克风 MSM261D3526H1CPM
- 4 —— 6轴 LSM6DS3TR-C
- 5 —— SPI I闪存
- 9 —— USB type C
- 10 ——  双7针母座
- 11 —— **复位按钮**
- 12 —— **开机键**
- 13 —— **用户按钮**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout2.png" style={{width:800, height:'auto'}}/></div>

- 1 —— HX6537-A
- 6 —— 相机接口
- 7 —— DC-DC  芯片
- 8 —— Grove 连接器
- 14 —— 电源指示灯
- 15 —— 运行状态灯

## 入门

我们将向您展示该模块的基本功能，然后介绍您构建自己的 ML 模型的定制方式。但在我们将该模块完全应用到我们的项目之前，我们需要执行几个步骤来准备好该模块。

### 准备

**硬件**

- Grove Vision AI 模块传感器
- **Windows主机**（Win10测试）
- Type-C 电缆

### Arduino 库概述

::::tip 如果这是您第一次使用 Arduino，我们强烈建议您参考[Arduino 入门](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。:::

我们这里使用的代码提供了多种分类方法和可选择的模型，包括定制模型。我们这里默认选择的是目标检测方法和预训练模型。

*Seeed Studio 将在可预见的未来开发更多方法和模型，敬请关注。*



<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

5. #### 功能

   在开始开发代码之前，让我们先了解一下库中可用的函数。

   1. `if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1))` - 这是我们可以选择分类方法和模型的地方。

      您可以将`ALGO_OBJECT_DETECTION`更改为`ALGO_OBJECT_COUNT`或`ALGO_IMAGE_CLASSIFICATION`。

      同时，如果您还将自定义模型（固件）烧录到模块中，您可以将`MODEL_EXT_INDEX_1`更改为`MODEL_EXT_INDEX_2`或3、4等，按照您命名的方式。

   2. `object_detection_t data` - 这是结果输出的结构数据集。

      如果更改了分类方法，需要相应地将`object_detection_t`更改为`image_classification_t`或`object_count_t`。

   3. `uint8_t len = ai.get_result_len()` - 这里的“len”表示检测到了多少个人脸。

   4. `object_detection_t data` - 这里的数据表示一个预定义的**struct**格式，类型为“object_detection_t”。

      同时，如果选择其他分类方法，需要将其更改为`image_classification_t data`或`object_count_t data`。

   5. `Serial.print(data.confidence)` - **struct**格式不能直接用于打印，它应该指向头文件中定义的特定类型。

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
我们想要打印的“confidence”显示了相机检测到对象的“信心”程度。
:::

###  库安装

由于我们已经下载了zip库文件，请打开您的Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的zip文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

### 库升级

在可预见的未来，我们将优化和升级产品库以提供更多有趣的功能。根据上面提供的库安装方法，我们在这里向您介绍升级的方法。

当库进行优化时，我们会更新链接。您可以在计算机文件夹中**删除原始库文件夹**，然后下载最新版本，解压缩并将其放入Arduino IDE库目录中。（**...\Arduino\libraries. ....** 是您设置的Arduino路径）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" style={{width:600, height:'auto'}}/></div>

## Seeed Studio XIAO / Seeeduino / Arduino 示例

现在我们已经安装了库并烧录了固件。我们可以在Seeed Studio XIAO nRF52840和Seeeduino V4.2上运行一些示例，以查看Grove AI模块传感器的行为。

**步骤 1.** 启动Arduino应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

- **步骤 2.** 选择您的开发板型号并将其添加到Arduino IDE中。

  - 如果您想在后续步骤中使用**Seeeduino**，请参考[此教程](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/)完成添加。
  - 如果您想在后续步骤中使用**Seeed Studio XIAO SAMD21**，请参考[此教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)完成添加。
  - 如果您想在后续步骤中使用**Seeed Studio XIAO RP2040**，请参考[此教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)完成添加。
  - 如果您想在后续步骤中使用**Seeed Studio XIAO nRF52840**，请参考[此教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)完成添加。

  ### 演示 1 使用 Seeed Studio XIAO nRF52840 / Seeeduino / Arduino 进行人体检测

  在此演示中，我们将在 Seeed Studio XIAO nRF52840 Sense 和 Seeeduino V4.2（Arduino UNO）上检测人脸，并统计模块检测到的人数。同时，Seeed Studio 提供了一个[网站](https://vision-ai-demo.seeed.cn/)，用于显示模块所见的内容。

  #### 所需材料

  - **对于 Seeed Studio XIAO BLE Sense**

|    Seeed Studio XIAO nRF52840 Sense          | Grove AI 相机  |
|--------------|--------------|
| <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a></div> |

- **For Seeeduino V4.2**

| Seeeduino V4.2 | Base Shield | Grove AI 相机 |
|--------------|-------------|-----------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" style={{width:210, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong></a></div> |

- #### 操作步骤

  - **步骤 3（Seeed Studio XIAO）。** 准备一根 Type-C 数据线，并将其连接到一个 Seeed Studio XIAO 系列开发板上。将其逐针插入 Grove AI 模块，并使用另一根 Type-C 数据线连接模块。
  
    两根 Type-C 数据线都应连接到计算机上。最后，模块上的 Type-C 连接器的方向应与 Seeed Studio XIAO samd21 上的 Type-C 连接器相同。例如：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI11.JPG" style={{width:600, height:'auto'}}/></div>

- **步骤 3（Arduino）。** 准备一根 Grove 连接线并将其连接到一个 Arduino 板上。使用另一根 Type-C 连接线连接模块。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI13.png" style={{width:400, height:'auto'}}/></div>

- **步骤 4。** 上传程序。

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
  if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11)) // Object detection and pre-trained model 1
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
    if (ai.invoke()) // begin invoke
    {
      while (1) // wait for invoking finished
      {
        CMD_STATE_T ret = ai.state();
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }

     uint8_t len = ai.get_result_len(); // receive how many people detect
     if(len)
     {
       int time1 = millis() - tick;
       Serial.print("Time consuming: ");
       Serial.println(time1);
       Serial.print("Number of people: ");
       Serial.println(len);
       object_detection_t data;       //get data

       for (int i = 0; i < len; i++)
       {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result

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

打开串行监视器，并将波特率设置为115200，人体检测结果将持续显示。同时，模块拍摄的图像也将显示在[网站](https://vision-ai-demo.seeed.cn/)上。成功的输出应该如下所示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI12.png" style={{width:400, height:'auto'}}/></div>


在显示的[网站](https://vision-ai-demo.seeed.cn/)上，您可以看到两张脸被双数字框定。数字0表示模块检测到的人脸，另一个数字表示置信度。

:::note 并非所有浏览器都支持显示Vision AI的结果。请参考下表，了解每个主要浏览器的支持情况。

| Chrome | Edge | Firefox | Opera | Safari |
|--------|------|---------|-------|--------|
| 支持 | 支持 | 不支持 |  Support | 不支持 |
|:::|||||


## About Models

The Seeed Studio has provided pre-trained people detected model and will provide more models in the foreseeable future. You can directly use them to quickly get to know AI camera.

You can find our firmware and models for Grove Vision AI at the following locations.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载模型</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


### 默认固件：人员检测模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI20.png" style={{width:800, height:'auto'}}/></div>

### 更多模型

- 我们会持续维护和更新更多有用的模型，因此您可以关注此存储库。

  :::提示 通常，模型文件以 **UF2** 格式存在，并且具有类似 **pre_num** 的后缀。 :::

  ### 自定义模型

  如果您想自定义自己的模型，可以参考 <a href="https://github.com/Seeed-Studio/yolov5-swift" target="_blank"><span>此处</span></a>，该模型基于 YOLOV5 提供支持。

  或者，您可以参考[此处的教程](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-Grove-Vision-AI/)并训练适合您需求的模型。

  ## 新模型的替换

  训练模型都以“.uf2”文件形式表示，这正是我们所需要的。

  :::提示 通常，模型文件以 **UF2** 格式存在，并且具有类似 **pre_num** 的后缀。 :::

  - **步骤 1**。使用 Type-C 电缆将模块连接到主机 PC，并**双击**模块上的 BOOT 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

会弹出一个名为“GROVEAI”的磁盘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **步骤 2**。请将模型的 `.uf2` 文件复制到 GROVEAI 磁盘上，以完成固件烧录。

我们可以看到模块上的工作 LED 以较快的速度闪烁，这意味着烧录过程正在进行中。在磁盘消失后，烧录固件的过程就完成了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI10.png" style={{width:600, height:'auto'}}/></div>

- **步骤 3**。根据您使用的模型修改程序。

在我们提供的演示中，`setup()` 函数内部通过调用 `ai.begin()` 来初始化模型

```cpp
if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11))
```

`ai.begin()` 有两个参数，模型类型和模型编号。不同的模型通常有不同的编号。也就是说，示例程序中的模型编号仅适用于**人体检测模型**，如果您使用其他模型，那么编号不再是 `0x11`。

:::caution 如果在使用演示时遇到“Algo begin failed.”的错误消息，您应该首先检查模型编号是否错误。 :::

那么如何确定模型编号呢？我们的研发工程师为开发者提供了一份详细的介绍文档。

- [Protocol](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/Protocol.md)

但如果您不想阅读这么长的文章，一个简单的确定方法是留意发布版本中模型的最后一个数字，这个数字就是我们需要的编号。

例如，对于模型 **pfld_meter_pre_5.uf2**，最后一位数字是 **5**，这意味着模型编号是 **5**。您可以直接使用

```

```

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)5)
```

或者将其重写为十六进制

```cpp
ai.begin(ALGO_ OBJECT_DETECTION, (MODEL_INDEX_T)0x05)
```

## 异常处理

如果在实际使用中遇到了意外情况，或者使用不当导致了不良后果。请参考以下步骤进行故障排除并尝试修复模块。

### 第 1 部分。检查 BootLoader 版本

您可能需要检测 BootLoader 版本是否需要更新，以决定是否进行更新。检查版本号的方法如下。

通过 USB-C 端口将 Grove Vision AI 连接到计算机。然后双击 Boot 按钮，直到计算机出现一个名为 GROVEAI 的 USB 闪存驱动器。

打开此磁盘驱动器，然后打开 **INFO_UF2.TXT** 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/3.png" style={{width:1000, height:'auto'}}/></div>

如图所示，您可以在第一行上看到 Bootloader 版本号。 截至2023年9月，最新的 BootLoader 版本号应为 **v2.0.1**。 如果您也检查到了相同的版本号，那么原则上您不需要进行下一步的第二步。

### 第 2 部分。更新 BootLoader

如果您的 Grove Vision AI 在计算机上未被识别，并表现为没有端口号，则您可能需要更新 BootLoader。

- **步骤 1**。在 Windows PC 上下载 BootLoader 的 `.bin` 文件。

请在下面的链接中下载 BootLoader 文件的最新版本。 BootLoader 的名称通常为 `tinyuf2-grove_vision_ai_vx.x.x.bin`。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/tinyuf2-grove_vision_ai_v2.0.1.bin">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载 BootLoader</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


这是控制 BL702 芯片的固件，用于在计算机和 Himax 芯片之间建立连接。最新版本的 BootLoader 现已修复了 Vision AI 无法被 Mac 和 Linux 认可的问题。

- **步骤 2**。下载并打开 [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar) 软件，选择 **BL702/704/706**，然后点击 **Finish**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **步骤 3**。点击 **View**，首先选择 **MCU**。移动到 **Image file**，点击 **Browse** 并选择您刚刚下载的固件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **步骤 4**。确保没有其他设备连接到电脑。然后按住模块上的 Boot 按钮，将其连接到电脑上。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI05.png" style={{width:600, height:'auto'}}/></div>

  我们可以看到模块背面的 5V 和 3.3V LED 灯亮起，然后松开 Boot 按钮。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI06.png" style={{width:600, height:'auto'}}/></div>

- **步骤 5**。返回 PC 上的 BLDevCube 软件，点击 **Refresh** 并选择一个适当的端口。然后点击 **Open UART** 并将 **Chip Erase** 设置为 **True**，然后点击 **Creat&Program**，等待进程完成。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

- *
- **步骤 6**。建议再次检查 Vision AI 的版本号，以确保正在使用最新的 BootLoader。

### 第 3 部分。恢复出厂固件

:::tip 如果在 Windows 11 的最新版本上上传固件导致设备无法使用，您可能需要参考[更新 BootLoader](https://chat.openai.com/c/2e9a15cc-539c-4f18-b5ca-97525b204e78#step-2-update-bootloader)一节。 :::

- **步骤 1**。擦除固件

:::caution 您可以尝试跳过此步骤，直接将固件复制到 Vision AI 上，如果成功，则无需擦除原始固件。如果失败，可能需要擦除固件。 :::

请使用您拥有的 Arduino 主板，推荐使用 Seeed Studio XIAO 系列、Wio Terminal 或 Seeeduino。通过 IIC 接口将 Grove Vision AI 连接到主板上。

打开 Arduino IDE 并上传擦除固件的程序。

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

打开串行监视器，输入一些随机字符，例如"a"，然后点击发送，擦除操作将开始执行。如果您看到以下消息，则证明固件已成功擦除。我们可以进行下一步操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI23.png" style={{width:800, height:'auto'}}/></div>

**步骤 2**。使用 Type-C 电缆将模块连接到主机 PC，并在模块上**双击** BOOT 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

会出现一个名为 "GROVEAI" 的磁盘弹出窗口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **步骤 3**。下载工厂固件。

请在下面的链接中下载最新版本的工厂固件。工厂固件的名称通常为 `grove_ai_without_crc_vxx.uf2` 或 `grove_ai_vxx.uf2`。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 故障排除

### Q1：连接的主要方法是什么？

- a. 首先连接微控制器和模块。
- b. 将微控制器与主机PC连接。
- c. 最后将模块与主机PC连接。

### Q2：为什么我无法在网站上看到图像显示？也没有检测到？

- a. 模块是否发热？仅连接模块会导致发热问题，让模块暂时无法正常工作。
- b. 是否按照正确的方法连接？

### Q3：为什么Grove Vision AI在使用过程中突然出现“Algo begin failed.”错误？

在我们提供的演示中，`setup()` 函数内部通过调用 `ai.begin()` 来初始化模型。

```
cpp
```

```cpp
if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11))
```

`ai.begin()` 有两个参数，模型类型和模型编号。不同的模型通常具有不同的编号。也就是说，示例程序中的模型编号仅适用于**People Detected Model**，如果使用其他模型，则编号不再是 `0x11`。

:::caution 如果在使用演示时遇到“Algo begin failed.”错误消息，请首先检查模型编号是否错误。 :::

那么如何确定模型编号呢？我们的研发工程师为开发人员提供了一份详细的入门文档。

- [协议](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/Protocol.md)

但如果您不想阅读这么长的文章，一个简单的方法是留意发布的模型的最后一个数字，这个数字就是我们需要的编号。

例如，对于模型 **pfld_meter_pre_5.uf2**，最后一位数字是 **5**，这意味着模型编号是 **5**。您可以直接使用：

```

```

```cpp
ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)5)
```

或者将其重写为十六进制形式：

```cpp
ai.begin(ALGO_ OBJECT_DETECTION, (MODEL_INDEX_T)0x05)
```

## 资源

- **[PDF]** [电路图](https://files.seeedstudio.com/wiki/Grove_AI_Module/Grove_Vision_AI_NORF_v1.1.pdf)
- **[Zip]** [布局图](https://files.seeedstudio.com/wiki/Grove_AI_Module/Grove_Vision_AI_NORF_v1.1.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种沟通渠道，以满足不同的偏好和需求，以确保您与我们的产品的体验尽可能顺利。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
