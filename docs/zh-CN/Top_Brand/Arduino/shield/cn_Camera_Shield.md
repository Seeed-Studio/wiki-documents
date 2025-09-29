---
description: Camera_Shield
title: Camera Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Camera_Shield
last_update:
  date: 01/10/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield.jpg" alt="pir" width={600} height="auto" /></p>

Camera Shield 是第一款支持拍照的扩展板，它基于 **VC0706 + OV7725** 的解决方案，前者是一个具有增强图像处理功能的高性能摄像头处理器，内嵌硬件 JPEG 编解码器，后者是一个高性能的 1/4 英寸单芯片 VGA 摄像头和图像处理器，采用小尺寸封装。我们编写了库来通过 UART/SPI 控制 Camera Shield，这使得用 Arduino 板轻松拍照成为可能。快来使用它拍照吧！

## 规格参数

---

* 完全兼容 Arduino 或 Seeeduino

* 静态图片分辨率：(640x480) JPEG 输出

* 高速串行总线控制：UART/SPI

* 集成 MicroSD 卡接口

* 电源供应：5 V

## 硬件接口

---
Camera Shield 可以通过 SPI 或 UART 接口进行控制。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield_Interface.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Camera_Shield/img/CameraShield_Interface2.png" alt="pir" width={600} height="auto" /></p>

## 入门指南

---
这里是使用 Camera Shield 的简要介绍。

1. 从 gitHub 下载 [Camera Shield 库](https://github.com/Seeed-Studio/Camera_Shield_VC0706) 文件，然后将库文件解压到你的 Arduino 库文件夹中。

2. 打开 libraries/Camera_Shield_VC0706 中的 example 文件夹，你会找到 snapshot 示例程序，双击 snapshot.ino 文件用 arduino IDE 打开它。

3. 我们安排了库使其可以通过软件串口/硬件串口/SPI 控制 Camera Shield，你可以通过修改代码来进行选择。

```cpp
#include "SoftwareSerial.h"
#include <VC0706_UART.h>
#include <SD.h>
#include <SPI.h>
#define SS_SD  10

//使用软件串口
SoftwareSerial cameraconnection(2,3);//Rx, Tx
VC0706 cam = VC0706(&cameraconnection);
//使用硬件串口
//VC0706 cam = VC0706(&Serial1);

void setup()
{
    Serial.begin(9600);
    Serial.println("VC0706 摄像头快照测试...");

    if (!SD.begin(SS_SD)) {
        Serial.println("SD卡初始化失败...");
        return;
    }
    if(true == cameraInit()){
        snapShot();
    }else{
        Serial.println("摄像头初始化错误...");
    }
}

void loop()
{
    //无需执行任何操作
}

bool cameraInit()
{
    cam.begin(BaudRate_19200);
    char *reply = cam.getVersion();
    if (reply == 0) {
        Serial.println("获取版本失败");
        return false;
    } else {
        Serial.println("版本:");
        Serial.println("-----------------");
        Serial.println(reply);
        Serial.println("-----------------");
        return true;
    }
}

void snapShot()
{
    Serial.println("3秒后拍照...");
    delay(3000);
    if (! cam.takePicture()){
        Serial.println("拍照失败!");
    }else {
        Serial.println("照片已拍摄!");
    }
    // 创建一个名为IMAGExx.JPG的图像
    char filename[13];
    strcpy(filename, "IMAGE00.JPG");
    for (int i = 0; i < 100; i++) {
        filename[5] = '0' + i/10;
        filename[6] = '0' + i%10;
        // 如果不存在则创建，不打开现有文件，写入，写入后同步
        if (! SD.exists(filename)) {
            break;
        }
    }
    // 打开文件进行写入
    File imgFile = SD.open(filename, FILE_WRITE);
    Serial.print("创建 ");
    Serial.println(filename);
    uint16_t jpglen = cam.getFrameLength();
    Serial.print("等待获取 ");
    Serial.print(jpglen, DEC);
    Serial.println(" 字节图像...");
    int32_t time = millis();
    cam.getPicture(jpglen);
    uint8_t *buffer;
    while(jpglen != 0){
        uint8_t bytesToRead = min(32, jpglen);
        buffer = cam.readPicture(bytesToRead);
        imgFile.write(buffer, bytesToRead);
        //Serial.print("读取 ");  Serial.print(bytesToRead, DEC); Serial.println(" 字节");
        jpglen -= bytesToRead;
    }
    imgFile.close();
    time = millis() - time;
    Serial.println("完成!");
    Serial.print("耗时 "); Serial.print(time); Serial.println(" 毫秒");
    cam.resumeVideo();
}
```

**使用硬件串口或软件串口进行通信**

我们使用串口（软件串口或硬件串口）与摄像头扩展板通信，您可以像下面这样生成您的应用程序：

```cpp
//使用软件串口
SoftwareSerial cameraconnection(2,3);//Rx, Tx
VC0706 cam = VC0706(&cameraconnection);
```

或者如果你想使用硬件串口，可以像下面这样做：

```cpp
//使用硬件串口
VC0706 cam = VC0706(&Serial1);
```

我们默认使用软件串口。如果您选择硬件串口，需要修改 VC0706_UART 头文件中的代码。更改

```cpp
#define USE_SOFTWARE_SERIAL         1
```

到

```cpp
#define USE_SOFTWARE_SERIAL         0
```

**使用 UART 或 SPI 进行数据传输**

通常，您可以通过以下步骤拍照：

```cpp
cam.takePicture();
uint16_t jpglen = cam.getFrameLength();
cam.getPicture(jpglen);
buffer = cam.readPicture(bytesToRead);
```

我们允许您通过两种模式读取数据：

* 1. UART —— 较慢模式。软件串口仅支持 9600/19200 波特率。硬件串口可以是 115200/38400/19200/9600。如果您选择 uart 模式并使用 19200 波特率，获取一张图片大约需要 30 秒。
* 2. SPI —— 较快模式。获取整张图片只需要大约 1 秒或 2 秒。

您可以在 VC0706_UART 头文件中选择您的模式。我们默认使用 SPI 模式。

```cpp
#define TRANSFER_BY_SPI             1
```

将其改为

```cpp
#define TRANSFER_BY_SPI             0
```

以使用 UART 模式。

4. 将摄像头扩展板堆叠到 Arduino 上并插入 micro-SD 卡到摄像头扩展板，你应该注意代码中定义的串口跳线。

5. 编译草图并上传到你的 arduino 板。打开 Arduino IDE 的串口，你可以看到从串口显示的调试信息。在数据传输期间，SD 卡状态 LED 会快速闪烁。

6. 程序完成后，拔出 SD 卡并插入到你的电脑，你可以看到你的照片。玩得开心

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Camera_Shield/res/CameraShield-Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [GitHub 上的摄像头扩展板库](https://github.com/Seeed-Studio/Camera_Shield_VC0706)

* [摄像头扩展板原理图](https://files.seeedstudio.com/wiki/Camera_Shield/res/CameraShield-Schematic.zip)

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