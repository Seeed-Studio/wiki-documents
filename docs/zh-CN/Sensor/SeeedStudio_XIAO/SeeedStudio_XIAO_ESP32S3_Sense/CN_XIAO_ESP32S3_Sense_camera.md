---
description: This tutorial will explain how to properly use the camera on the XIAO ESP32S3 Sense.
title: 摄像头使用
keywords:
- xiao esp32s3
- esp32s3
- camera
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_camera_usage
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# XIAO ESP32S3 Sense 上的摄像头使用

:::note
本教程的内容仅适用于Seeed Studio XIAO ESP32S3 Sense。
:::

在本教程中，我们将引导您使用XIAO ESP32S3 Sense上的摄像头模块。本教程分为以下几个部分：首先，我们将解释ESP32提供的相机功能及其功能。其次，我们将在两个维度上为您带来如何使用相机：拍照和录制视频，最后，我们将围绕拍照和记录视频创建一些有趣的项目。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}>点击购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

##入门

本教程可能涉及microSD卡、相机、天线等的使用。请准备以下材料，并根据您的项目需求正确安装。

####天线的安装

在XIAO ESP32S3正面的左下角，有一个单独的“WiFi/BT天线连接器”。为了获得更好的WiFi/蓝牙信号，您需要取出包装内的天线并将其安装在连接器上。

天线的安装有一个小技巧，如果你直接用力按压，你会发现很难按压，你的手指会受伤！安装天线的正确方法是先将天线连接器的一侧放入连接器块中，然后在另一侧向下压一点，天线就安装好了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

###安装扩展板（用于Sense）

安装扩展板非常简单，只需将扩展板上的连接器与XIAO ESP32S3上的B2B连接器对齐，用力按压并听到“咔嗒”一声，即可完成安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

现在，我们的货架上有一款新的完全兼容XIAO ESP32S3 Sense的强大相机OV5640，如果您购买了它，您可以更换相机来使用它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/ov5640.gif" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5640-Camera-for-XIAO-ESP32S3-Sense-With-Heat-Sink-p-5739.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
				</a>
</div>

如果您需要了解ov5640的详细参数信息，可以参考下图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/datasheet.png" style={{width:1000, height:'auto'}}/></div>

:::提示
Wiki中所有关于相机的程序都与OV5640和OV2640相机兼容。
:::

### 准备microSD卡

XIAO ESP32S3 Sense支持高达**32GB**的microSD卡，因此，如果您准备为XIAO购买microSD卡时，请参阅本规范。在使用microSD卡之前，请将microSD卡格式化为**FAT32**格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

格式化后，您可以将microSD卡插入microSD卡插槽。请注意插入方向，金手指的一侧应朝内。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

###扩展板摄像头插槽电路设计

XIAO ESP32S3感应卡插槽占用了ESP32-S3的14个GPIO，占用的引脚细节如下表所示。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">Camera</th>
            <th align="center">ESP32-S3 GPIO</th>
            <th align="center">Camera</th>
        </tr>
        <tr>
            <td align="center">GPIO10</td>
            <td align="center">XMCLK</td>
            <td align="center">GPIO11</td>
            <td align="center">DVP_Y8</td>
        </tr>
        <tr>
            <td align="center">GPIO12</td>
            <td align="center">DVP_Y7</td>
            <td align="center">GPIO13</td>
            <td align="center">DVP_PCLK</td>
        </tr>
        <tr>
            <td align="center">GPIO14</td>
            <td align="center">DVP_Y6</td>
            <td align="center">GPIO15</td>
            <td align="center">DVP_Y2</td>
        </tr>
        <tr>
            <td align="center">GPIO16</td>
            <td align="center">DVP_Y5</td>
            <td align="center">GPIO17</td>
            <td align="center">DVP_Y3</td>
        </tr>
        <tr>
            <td align="center">GPIO18</td>
            <td align="center">DVP_Y4</td>
            <td align="center">GPIO38</td>
            <td align="center">DVP_VSYNC</td>
        </tr>
        <tr>
            <td align="center">GPIO39</td>
            <td align="center">CAM_SCL</td>
            <td align="center">GPIO40</td>
            <td align="center">CAM_SDA</td>
        </tr>
        <tr>
            <td align="center">GPIO47</td>
            <td align="center">DVP_HREF</td>
            <td align="center">GPIO48</td>
            <td align="center">DVP_Y9</td>
        </tr>
    </table>
</div>

###打开PSRAM选项

ESP32的PSRAM是指ESP32芯片上的外部PSRAM（伪静态随机存取存储器），它提供了额外的存储空间来增加ESP32系统的可用内存。在ESP32系统中，PSRAM有以下主要用途：

1.扩展可用RAM：ESP32的内置RAM是有限的，特别是对于一些需要大量内存的应用，如图像处理、音频处理等，内置RAM可能不够。通过使用PSRAM，可以扩展ESP32的可用RAM以满足这些应用的需要。

2.加速内存访问：由于PSRAM是外部内存，访问速度比内部RAM慢，但它可以用作缓存或临时内存，以加速内存访问和数据处理。

3.存储缓冲区：对于需要大缓冲区的应用程序，如网络缓冲区、音频缓冲区等，PSRAM可以提供足够的存储空间，以避免内存不足的情况。

对于本教程的内容，您**需要打开Arduino IDE的PSRAM功能**，以确保相机正常工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:700, height:'auto'}}/></div>


##相机库概述

在开始之前，我们建议您阅读本章，以了解常见的相机功能。这样你就可以使用这些函数来完成你自己的项目开发，或者更容易地阅读程序。

###第一部分：esp_camera.h

1.摄像机初始化的配置结构。

以下是配置示例，只需根据实际引脚情况填写即可。

```cpp
static camera_config_t camera_example_config = {
        .pin_pwdn       = PWDN_GPIO_NUM,
        .pin_reset      = RESET_GPIO_NUM,
        .pin_xclk       = XCLK_GPIO_NUM,
        .pin_sccb_sda   = SIOD_GPIO_NUM,
        .pin_sccb_scl   = SIOC_GPIO_NUM,
        .pin_d7         = Y9_GPIO_NUM,
        .pin_d6         = Y8_GPIO_NUM,
        .pin_d5         = Y7_GPIO_NUM,
        .pin_d4         = Y6_GPIO_NUM,
        .pin_d3         = Y5_GPIO_NUM,
        .pin_d2         = Y4_GPIO_NUM,
        .pin_d1         = Y3_GPIO_NUM,
        .pin_d0         = Y2_GPIO_NUM,
        .pin_vsync      = VSYNC_GPIO_NUM,
        .pin_href       = HREF_GPIO_NUM,
        .pin_pclk       = PCLK_GPIO_NUM,

        .xclk_freq_hz   = 20000000, // The clock frequency of the image sensor
        .fb_location = CAMERA_FB_IN_PSRAM; // Set the frame buffer storage location
        .pixel_format   = PIXFORMAT_JPEG, // The pixel format of the image: PIXFORMAT_ + YUV422|GRAYSCALE|RGB565|JPEG
        .frame_size     = FRAMESIZE_UXGA, // The resolution size of the image: FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
        .jpeg_quality   = 12, // The quality of the JPEG image, ranging from 0 to 63.
        .fb_count       = 2, // The number of frame buffers to use.
        .grab_mode      = CAMERA_GRAB_WHEN_EMPTY //  The image capture mode.
    };
```

2.初始化摄像头驱动程序。

按照上述格式配置“camera_example_config”后，我们需要使用此函数来初始化相机驱动程序。

```cpp
esp_err_t esp_camera_init(const camera_config_t* config);
```

- **输入参数**: 相机配置参数

- **输出**: 成功时ESP_OK 

:::注意
当前此函数只能调用一次，并且没有方法可以对此模块进行去初始化。
:::

3. 获取帧缓冲区的指针。

```cpp
camera_fb_t* esp_camera_fb_get();
```

相机帧缓冲区的数据结构。

```cpp
typedef struct {
    uint8_t * buf;              /*!< Pointer to the pixel data */
    size_t len;                 /*!< Length of the buffer in bytes */
    size_t width;               /*!< Width of the buffer in pixels */
    size_t height;              /*!< Height of the buffer in pixels */
    pixformat_t format;         /*!< Format of the pixel data */
    struct timeval timestamp;   /*!< Timestamp since boot of the first DMA buffer of the frame */
} camera_fb_t;
```

4.返回要重新使用的帧缓冲区。

```cpp
void esp_camera_fb_return(camera_fb_t * fb);
```

- **输入参数**：指向帧缓冲区的指针
5.获取指向图像传感器控制结构的指针。

```cpp
sensor_t * esp_camera_sensor_get();
```

- **输出**：指向传感器的指针
6.将摄像头设置保存到非易失性存储器（NVS）。

```cpp
esp_err_t esp_camera_save_to_nvs(const char *key);
```

- **输入参数**：相机设置的唯一nvs密钥名称

7.从非易失性存储器（NVS）加载相机设置。

```cpp
esp_err_t esp_camera_load_from_nvs(const char *key);
```

- **输入参数**：相机设置的唯一nvs密钥名称

###第二部分：img_converters.h

1.将图像缓冲区转换为JPEG。

```cpp
bool fmt2jpg_cb(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **输入参数**：

  - **src**：RGB565、RGB888、YUYV或GRAYSCALE格式的源缓冲区
  - **src_len**：源缓冲区的长度（以字节为单位）
  - **width**：源图像的宽度（以像素为单位）
  - **height**：源图像的高度（以像素为单位）
  - **format**：源图像的格式
  - **质量**：生成图像的JPEG质量
  - **cp**：调用回调以写入输出JPEG的字节数
  - **arg**：要传递给回调的指针
- **输出**：成功时为true

2.将相机帧缓冲区转换为JPEG。

```cpp
bool frame2jpg_cb(camera_fb_t * fb, uint8_t quality, jpg_out_cb cb, void * arg);
```

- **输入参数**：

  - **fb**：源摄像机帧缓冲区
  - **质量**：生成图像的JPEG质量
  - **cp**：调用回调以写入输出JPEG的字节数
  - **arg**：要传递给回调的指针
- **输出**：成功时为true

3.将图像缓冲区转换为JPEG缓冲区。

```cpp
bool fmt2jpg(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **输入参数**：

- **src**：RGB565、RGB888、YUYV或GRAYSCALE格式的源缓冲区
  - **src_len**：源缓冲区的长度（以字节为单位）
  - **width**：源图像的宽度（以像素为单位）
  - **height**：源图像的高度（以像素为单位）
  - **format**：源图像的格式
  - **质量**：生成图像的JPEG质量
  - **out**：要填充结果缓冲区地址的指针。完成指针操作后，必须释放指针。
  - **out_len**：要填充输出缓冲区长度的指针
- **输出**：成功时为true

4.将相机帧缓冲区转换为JPEG缓冲区。

```cpp
bool frame2jpg(camera_fb_t * fb, uint8_t quality, uint8_t ** out, size_t * out_len);
```

- **输入参数**：

  - **fb**：源摄像机帧缓冲区
  - **质量**：生成图像的JPEG质量
  - **out**：要填充结果缓冲区地址的指针
  - **out_len**：要填充输出缓冲区长度的指针
- **输出**：成功时为true

5.将图像缓冲区转换为BMP缓冲区。

```cpp
bool fmt2bmp(uint8_t *src, size_t src_len, uint16_t width, uint16_t height, pixformat_t format, uint8_t ** out, size_t * out_len);
```

- **输入参数**：

  - **src**：RGB565、RGB888、YUYV或GRAYSCALE格式的源缓冲区
  - **src_len**：源缓冲区的长度（以字节为单位）
  - **width**：源图像的宽度（以像素为单位）
  - **height**：源图像的高度（以像素为单位）
  - **format**：源图像的格式
  - **质量**：生成图像的JPEG质量
  - **out**：要填充结果缓冲区地址的指针。
  - **out_len**：要填充输出缓冲区长度的指针
- **输出**：成功时为true

6.将相机帧缓冲区转换为BMP缓冲区。

```cpp
bool frame2bmp(camera_fb_t * fb, uint8_t ** out, size_t * out_len);
```

- **输入参数**：

  - **fb**：源摄像机帧缓冲区
  - **质量**：生成图像的JPEG质量
  - **cp**：调用回调以写入输出JPEG的字节数
  - **arg**：要传递给回调的指针
- **输出**：成功时为true

###第三部分：app_httpd.cpp

:::笔记
图书馆介绍的这一部分是基于[创建视频保存终端--基于Web服务器]部分。该库主要用于为web服务器执行图像采集和人脸识别功能。它没有直接包含在ESP的车载包中。
:::

1. 人脸识别功能。

```cpp
static int run_face_recognition(fb_data_t *fb, std::list<dl::detect::result_t> *results)
```

- **输入参数**：
  - **fb**：指向表示包含图像数据的帧缓冲区的结构的指针。
  - **结果**：指向检测到的人脸结果列表的指针。

2.处理对BMP图像文件的HTTP请求。

```cpp
static esp_err_t bmp_handler(httpd_req_t *req)
```

- **输入参数**：指向表示HTTP请求的结构体的指针。

3.以流方式对JPEG图像数据进行编码。

```cpp
static size_t jpg_encode_stream(void *arg, size_t index, const void *data, size_t len)
```

- **输入参数**：
  - **arg**：指向传递给函数的用户定义参数的指针。
  - **index**：指示图像数据内的当前位置的索引值。
  - **数据**：指向包含要编码的图像数据的缓冲器的指针。
  - **len**：数据缓冲区的长度。

4.处理HTTP请求，以便从相机捕获和流式传输图像。

```cpp
static esp_err_t capture_handler(httpd_req_t *req)
```

- **输入参数**：指向表示HTTP请求的结构体的指针。

5.处理来自摄像机的流式视频的HTTP请求。
```cpp
static esp_err_t stream_handler(httpd_req_t *req)
```

- **输入参数**：指向表示HTTP请求的结构体的指针。

6.初始化并启动通过HTTP捕获和流式传输视频的摄像机服务器。
```cpp
void startCameraServer()
```

##用相机拍照

接下来我们从相机的最基本用法开始，例如，我们将首先使用相机来完成图像采集。第一个项目我们将使用microSD卡，这个程序的主要任务是获得每分钟的摄像机镜头，然后将镜头保存到microSD。

在开始之前，按照我的操作安装microSD卡和相机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/91.jpg" style={{width:300, height:'auto'}}/></div>

您可以在此链接下找到完整的程序代码和所需的依赖关系文件。
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/take_photos">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

这是这个项目的Arduino程序。

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

unsigned long lastCaptureTime = 0; // Last shooting time
int imageCount = 1;                // File Counter
bool camera_sign = false;          // Check camera status
bool sd_sign = false;              // Check sd status

// Save pictures to SD card
void photo_save(const char * fileName) {
  // Take a photo
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Failed to get camera frame buffer");
    return;
  }
  // Save photo to file
  writeFile(SD, fileName, fb->buf, fb->len);
  
  // Release image buffer
  esp_camera_fb_return(fb);

  Serial.println("Photo saved to file");
}

// SD card write file
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Writing file: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

void setup() {
  Serial.begin(115200);
  while(!Serial); // When the serial monitor is turned on, the program starts to execute

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
  
  camera_sign = true; // Camera initialization check passes

  // Initialize SD card
  if(!SD.begin(21)){
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
  if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true; // sd initialization check passes

  Serial.println("Photos will begin in one minute, please be ready.");
}

void loop() {
  // Camera & SD available, start taking pictures
  if(camera_sign && sd_sign){
    // Get the current time
    unsigned long now = millis();
  
    //If it has been more than 1 minute since the last shot, take a picture and save it to the SD card
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Saved picture：%s\n", filename);
      Serial.println("Photos will begin in one minute, please be ready.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
}
```

:::笔记
该程序的编译和上传需要另外两个依赖项，请访问GitHub并完整下载。
:::

请上传XIAO ESP32S3的程序，程序上传成功后，请打开串行监视器，调整相机以面对您想要拍摄的对象，等待一分钟，拍摄将保存到SD卡中。接下来，肖将每分钟拍一张照片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/89.png" style={{width:700, height:'auto'}}/></div>

取出microSD卡，在读卡器的帮助下，您可以看到卡中保存的照片。

###程序注释

该程序从我们需要使用的相机和SD卡库开始，并导入我们为XIAO ESP32S3定义的一些引脚依赖文件。

然后为了便于阅读，我们相继定义了两个函数，一个是将捕获的图像保存到SD卡的函数“photo_save（）”，另一个是写入文件的函数“writeFile（）”。

```cpp
// Save pictures to SD card
void photo_save(const char * fileName) {
  // Take a photo
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Failed to get camera frame buffer");
    return;
  }
  // Save photo to file
  writeFile(SD, fileName, fb->buf, fb->len);
  
  // Release image buffer
  esp_camera_fb_return(fb);

  Serial.println("Photo saved to file");
}
```

在将图像保存到microSD卡的功能中，完成了两项主要任务。第一个是获取图片，第二个是调用写入文件的函数。

获取图像可以用“esp_camera_fb_get（）”完成，图像信息将保存在指针“fb”中，然后我们可以将“fb’的“buf”写入SD卡。

在“Setup（）”函数中，程序的很大一部分是配置相机引脚和相机初始化，默认情况下我们可以直接应用它。如果您对相机的像素或质量有要求，可以根据[相机库概述]（#相机库概述）一章中描述的功能调整内部的值。

在“loop（）”函数中要做的最后一件事是控制每分钟拍摄的照片，并将增量数字作为拍摄照片的文件名后缀。

```cpp
if(camera_sign && sd_sign){
    // Get the current time
    unsigned long now = millis();
  
    //If it has been more than 1 minute since the last shot, take a picture and save it to the SD card
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      photo_save(filename);
      Serial.printf("Saved picture：%s\n", filename);
      Serial.println("Photos will begin in one minute, please be ready.");
      imageCount++;
      lastCaptureTime = now;
    }
  }
```

在执行`loop（）`之前，我们配置两个标志检查`camera_sign`和`sd_sign`。这样可以确保在“Setup（）”中成功执行相机和SD卡检查后，必须运行拍摄和保存图片的任务。

##项目一：制作手持相机

接下来，我们利用以上理论知识，制作出一款超小型的照片神器。该项目的最终结果是，XIAO的Seeed Studio圆形显示屏上显示了实时摄像头，当您锁定要拍摄的对象时，触摸屏幕并拍照记录在microSD卡上。

###前期准备

在开始此项目之前，您需要提前准备以下硬件。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}>点击购买🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

由于本项目将为XIAO使用圆形显示，请阅读 **[Wiki environment configuration of the display expansion board](https://wiki.seeedstudio.com/get_start_round_display#software-preparation)**的内容，安装必要的库并在运行此项目的例程之前配置TFT环境。

由于XIAO EPS32S3 Sense设计有三个上拉电阻R4~R6连接到SD卡插槽，并且圆形显示器也有上拉电阻，因此当两者同时使用时，无法读取SD卡。为了解决这个问题，我们需要切断XIAO ESP32S3 Sense扩展板上的J3。

:::提示
然而，**我们需要感谢工程师Mjrovai同时使用XIAO ESP32S3 Sense上的microSD卡插槽的新方法**，这在软件级别也是可能的。我们可以参考**[他的方法和程序](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

断开J3后，XIAO ESP32S3 Sense上的SD卡插槽将无法正常工作，因此您需要将microSD卡插入圆形显示屏上的SD卡槽中。

接下来，请按顺序安装microSD卡、XIAO ESP32S3感应和圆形显示屏。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

:::提示
我们建议您先卸下相机模块，以避免在用刀片切断J3连接时刮伤相机。
:::

### 具体操作

您可以在此链接下找到完整的程序代码和所需的依赖关系文件。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/round_display_take_picture">
    <strong><span><font color={'FFFFFF'} size={"4"}>  </font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

这是这个项目的Arduino程序。

```c
#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM
#define TOUCH_INT D7

#include "camera_pins.h"

// Width and height of round display
const int camera_width = 240;
const int camera_height = 240;

// File Counter
int imageCount = 1;
bool camera_sign = false;          // Check camera status
bool sd_sign = false;              // Check sd status

TFT_eSPI tft = TFT_eSPI();

// SD card write file
void writeFile(fs::FS &fs, const char * path, uint8_t * data, size_t len){
    Serial.printf("Writing file: %s\n", path);

    File file = fs.open(path, FILE_WRITE);
    if(!file){
        Serial.println("Failed to open file for writing");
        return;
    }
    if(file.write(data, len) == len){
        Serial.println("File written");
    } else {
        Serial.println("Write failed");
    }
    file.close();
}

bool display_is_pressed(void)
{
    if(digitalRead(TOUCH_INT) != LOW) {
        delay(3);
        if(digitalRead(TOUCH_INT) != LOW)
        return false;
    }
    return true;
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
//  while(!Serial);

  // Camera pinout
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
//  config.frame_size = FRAMESIZE_UXGA;
  config.frame_size = FRAMESIZE_240X240;
//  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  config.pixel_format = PIXFORMAT_RGB565;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
  Serial.println("Camera ready");
  camera_sign = true; // Camera initialization check passes

  // Display initialization
  tft.init();
  tft.setRotation(1);
  tft.fillScreen(TFT_WHITE);

  // Initialize SD card
  if(!SD.begin(D2)){
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
  if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }

  sd_sign = true; // sd initialization check passes

}

void loop() {
  if( sd_sign && camera_sign){

    // Take a photo
    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb) {
      Serial.println("Failed to get camera frame buffer");
      return;
    }
    
    if(display_is_pressed()){
      Serial.println("display is touched");
      char filename[32];
      sprintf(filename, "/image%d.jpg", imageCount);
      // Save photo to file
      writeFile(SD, filename, fb->buf, fb->len);
      Serial.printf("Saved picture：%s\n", filename);
      imageCount++;
    }
  
    // Decode JPEG images
    uint8_t* buf = fb->buf;
    uint32_t len = fb->len;
    tft.startWrite();
    tft.setAddrWindow(0, 0, camera_width, camera_height);
    tft.pushColors(buf, len);
    tft.endWrite();
      
    // Release image buffer
    esp_camera_fb_return(fb);

    delay(10);
  }
}
```

将程序上传到XIAO ESP32S3 Sense，如果上传成功后屏幕没有亮起，您可能需要点击XIAO上的重置按钮，然后您将实时看到圆形显示屏上显示的监控屏幕。单击屏幕上的任何位置，图像将被录制并保存在microSD卡中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/95.gif" style={{width:800, height:'auto'}}/></div>

### 程序注释

摄像头和microSD卡的配置是之前的内容，这里不再赘述。有关microSD卡的使用，请参阅[XIAO ESP32S3 Sense文件系统](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem) Wiki to learn how to use it.

```cpp
// Take a photo
camera_fb_t *fb = esp_camera_fb_get();
if (!fb) {
  Serial.println("Failed to get camera frame buffer");
  return;
}

...
  
// Release image buffer
esp_camera_fb_return(fb);

delay(10);
```

上述程序是调用相机的基本代码块，分为三个部分：屏幕捕获、异常退出和释放照片缓冲区。

```cpp
if(display_is_pressed()){
  Serial.println("display is touched");
  char filename[32];
  sprintf(filename, "/image%d.jpg", imageCount);
  // Save photo to file
  writeFile(SD, filename, fb->buf, fb->len);
  Serial.printf("Saved picture：%s\n", filename);
  imageCount++;
}
```

上述程序用于检查屏幕是否被触摸。如果是，代码将捕获的图像保存到microSD卡上的文件中。

```cpp
// Decode JPEG images
uint8_t* buf = fb->buf;
uint32_t len = fb->len;
tft.startWrite();
tft.setAddrWindow(0, 0, camera_width, camera_height);
tft.pushColors(buf, len);
tft.endWrite();
```

这部分代码在屏幕上显示捕获的图像。首先从 `camera_fb_t` camera_fb_t结构中检索图像缓冲区及其长度。然后，它设置屏幕以接收图像数据，并使用 `pushColors()` 函数在屏幕上显示图像。

##录制短视频并保存到microSD卡

：：：注释
我们不建议在MCU上导出视频编码，因为当前支持的编码库资源太小，操作非常复杂和乏味。
这个例子不涉及视频编码，并且导出的视频是每帧AVI的MJPG合成，因此视频记录可能不是特别好和令人满意。本教程的目的是为您提供录制短视频的简单方法和想法，我们欢迎有更好解决方案的合作伙伴向我们提交PR。
：：：

在前几章中，我们掌握了如何使用相机拍摄图像。我们知道，一张图像被拼接在一起，形成一张运动视频图片。基于这一理论，我们在本章中的项目将指导您如何编写程序，每1分钟录制一段10秒的视频，并将其保存在microSD卡中。
您可以在此链接下找到完整的程序代码和所需的依赖关系文件。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/record_video">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

这是这个项目的Arduino程序。

```cpp
#include "esp_camera.h"
#include "FS.h"
#include "SD.h"
#include "SPI.h"
#include "esp_timer.h"

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

const int SD_PIN_CS = 21;

File videoFile;
bool camera_sign = false;
bool sd_sign = false;
unsigned long lastCaptureTime = 0;
unsigned long captureDuration = 10000; // 10 seconds
int imageCount = 0;

void setup() {
  Serial.begin(115200);
  while(!Serial);
  
  // Initialize the camera
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  config.frame_size = FRAMESIZE_SVGA;
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
  
  camera_sign = true;
  
  // Initialize the SD card
  if (!SD.begin(SD_PIN_CS)) {
    Serial.println("SD card initialization failed!");
    return;
  }

  uint8_t cardType = SD.cardType();

  // Determine if the type of SD card is available
  if(cardType == CARD_NONE){
    Serial.println("No SD card attached");
    return;
  }

  Serial.print("SD Card Type: ");
  if(cardType == CARD_MMC){
    Serial.println("MMC");
  } else if(cardType == CARD_SD){
    Serial.println("SDSC");
  } else if(cardType == CARD_SDHC){
    Serial.println("SDHC");
  } else {
    Serial.println("UNKNOWN");
  }
  
  sd_sign = true;

  Serial.println("Video will begin in one minute, please be ready.");
}

void loop() {
  // Camera & SD available, start taking video
  if (camera_sign && sd_sign) {
    // Get the current time
    unsigned long now = millis();

    //If it has been more than 1 minute since the last video capture, start capturing a new video
    if ((now - lastCaptureTime) >= 60000) {
      char filename[32];
      sprintf(filename, "/video%d.avi", imageCount);
      videoFile = SD.open(filename, FILE_WRITE);
      if (!videoFile) {
        Serial.println("Error opening video file!");
        return;
      }
      Serial.printf("Recording video：%s\n", filename);
      lastCaptureTime = now;
      
      // Start capturing video frames
      while ((millis() - lastCaptureTime) < captureDuration) {
        camera_fb_t *fb = esp_camera_fb_get();
        if (!fb) {
          Serial.println("Error getting framebuffer!");
          break;
        }
        videoFile.write(fb->buf, fb->len);
        esp_camera_fb_return(fb);
      }
      
      // Close the video file
      videoFile.close();
      Serial.printf("Video saved: %s\n", filename);
      imageCount++;

      Serial.println("Video will begin in one minute, please be ready.");

      // Wait for the remaining time of the minute
      delay(60000 - (millis() - lastCaptureTime));
    }
  }
}
```

将代码上传到XIAO ESP32S3 Sense，打开串行监视器，此时请将相机位置调整到您想要录制的对象，一分钟后，XIAO上的橙色LED将开始闪烁，录制将开始并保存到microSD卡中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/96.png" style={{width:800, height:'auto'}}/></div>

:::笔记
由于该节目不涉及诸如编码和帧速率之类的设置，如果所记录的镜头的每一帧中没有变化，则视频可能只打开一秒钟。
:::


### 程序注释

录制视频过程的核心和关键是连续10秒获取照片流，并将其连续写入microSD卡。

```cpp
// Start capturing video frames
while ((millis() - lastCaptureTime) < captureDuration) {
  camera_fb_t *fb = esp_camera_fb_get();
  if (!fb) {
    Serial.println("Error getting framebuffer!");
    break;
  }
  videoFile.write(fb->buf, fb->len);
  esp_camera_fb_return(fb);
}
```

在此基础上，我们在外部嵌套了一层1分钟等待判断，以确保视频每1分钟启动一次。

```cpp
//If it has been more than 1 minute since the last video capture, start capturing a new video
if ((now - lastCaptureTime) >= 60000) {

  ...

  delay(60000 - (millis() - lastCaptureTime));
}
```

##项目二：视频流

在本教程的最后，让我们展示一个视频流项目。该项目允许您在XIAO ESP32S3 Sense创建的网页上查看实时视频流，您可以通过设置一些参数来更改屏幕显示。
您可以在此链接下找到完整的程序代码和所需的依赖文件。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-ESP32S3-Sense-camera/tree/main/CameraWebServer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

这是这个项目的Arduino项目。
```cpp
#include "esp_camera.h"
#include <WiFi.h>

#define CAMERA_MODEL_XIAO_ESP32S3 // Has PSRAM

#include "camera_pins.h"

// ===========================
// Enter your WiFi credentials
// ===========================
const char* ssid = "**********";
const char* password = "**********";

void startCameraServer();
void setupLedFlash(int pin);

void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.setDebugOutput(true);
  Serial.println();

  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG; // for streaming
  //config.pixel_format = PIXFORMAT_RGB565; // for face detection/recognition
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;
  
  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(config.pixel_format == PIXFORMAT_JPEG){
    if(psramFound()){
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      // Limit the frame size when PSRAM is not available
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    // Best option for face detection/recognition
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

  // camera init
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  sensor_t * s = esp_camera_sensor_get();
  // initial sensors are flipped vertically and colors are a bit saturated
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1); // flip it back
    s->set_brightness(s, 1); // up the brightness just a bit
    s->set_saturation(s, -2); // lower the saturation
  }
  // drop down frame size for higher initial frame rate
  if(config.pixel_format == PIXFORMAT_JPEG){
    s->set_framesize(s, FRAMESIZE_QVGA);
  }

// Setup LED FLash if LED pin is defined in camera_pins.h
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  WiFi.begin(ssid, password);
  WiFi.setSleep(false);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");

  startCameraServer();

  Serial.print("Camera Ready! Use 'http://");
  Serial.print(WiFi.localIP());
  Serial.println("' to connect");
}

void loop() {
  // Do nothing. Everything is done in another task by the web server
  delay(10000);
}
```
在上传程序之前，您需要将代码中的WiFi名称和密码更改为您自己的。上传程序后，如果XIAO ESP32C3成功连接到您的WiFi，将打印出其IP地址。

：：：注意
肖ESP32S3如果长时间执行此项目，请注意散热，肖会变得很烫，请小心烫伤！
：：：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/97.png" style={{width:800, height:'auto'}}/></div>

：：：提示
如上图所示，如果打开调试信息的输出，则可能会看到一些芯片内核的调试信息打印在串行监视器中。例如“[0；31mE（2947）MFN:Partition Not found[0m”，请不要担心，它不会影响程序的运行。
：：：

请打开您的浏览器，我们建议使用Edge或Google Chrome，然后输入该IP地址，您将看到视频的配置页面。

：：：注意
请注意，您使用浏览器的设备需要与XIAO位于同一LAN上。
：：：

配置好要设置的视频流规格后，点击左侧工具栏底部的**开始流**，可以看到摄像机的直播画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/98.png" style={{width:1000, height:'auto'}}/></div>

幸运的是，ESP32也正式增加了人脸识别的程序。您可以通过打开用于人脸识别的按钮开关来体验该功能，但图像质量会降低。

：：：提示
由于性能原因，屏幕质量不能高于**CIF**，否则打开人脸识别开关时会弹出错误网页。
：：：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/99.png" style={{width:400, height:'auto'}}/></div>

哦，我的大脸被圈起来了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/100.png" style={{width:600, height:'auto'}}/></div>


##故障排除

###Q1：当XIAO ESP32S3 Sense和圆形显示器一起使用时，我是否需要切割J3引脚？可以使用哪个SD卡插槽？

A： 原则上，当XIAO ESP32S3 Sense与圆形显示器配合使用microSD卡时，需要切断J3引脚。原因是在两块扩展板的电路设计中都有上拉电阻，所以从理论上讲，如果两个上拉电阻同时工作，那么SD卡插槽将不能正常工作。将出现SD卡装载失败的错误消息。由于圆形显示器上的上拉电阻不能被阻断，因此需要切断感测扩展板上的J3，以确保当两个上拉电阻一起使用时，只有一个上拉电阻工作。这也决定了当两者一起使用时，圆形显示屏上只有SD卡插槽处于活动状态。

但是，**我们需要感谢Mjrovai工程师的新方法，即同时使用XIAO ESP32S3 Sense上的microSD卡插槽**，这在软件级别也是可行的。我们可以参考**[他的方法和程序](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/camera_round_display_save_jpeg)**.



##技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您的体验与我们的产品是尽可能顺利。我们提供多种沟通渠道，以满足不同的喜好和需求。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>








