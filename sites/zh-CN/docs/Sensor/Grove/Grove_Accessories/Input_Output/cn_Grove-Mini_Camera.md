---
title: Grove - 微型摄像头
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Mini_Camera/
slug: /cn/Grove-Mini_Camera
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Grove_camera.jpg)

如果您正在寻找一款小型摄像头，也许 Grove - 微型摄像头会是您的最佳选择。这是一款可以通过 Arduino 控制的微型摄像头。它集成了图像处理功能，可以生成 1280\*720 的 JPEG 图像。拍摄的照片存储在 SD 卡中，您可以通过 Mini 8Pin USB 接口读取 SD 卡信息。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Mini-Camera-p-1578.html)

特点
-------

- 标准 USB 接口和 Grove 接口
- 高分辨率
- 小巧轻便

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格参数
-------------

| 项目                         | 性能参数              |
|------------------------------|-----------------------|
| CPU                          | ARM9                  |
| 视频解码                     | H.263 加速            |
| 视频格式                     | AVI                   |
| 视频编码                     | MPEG4                 |
| 视频分辨率                   | 640\*480              |
| 视频帧率                     | 30FPS                 |
| 运行软件                     | 支持 AVI 播放器       |
| 照片格式                     | JPEG                  |
| 图像分辨率                   | 1280\*720             |
| 充电模式                     | DC5V                  |
| 数据通信接口                 | Mini 8Pin USB         |
| 存储介质                     | Micro SD (最大 32G)   |

演示
-------------

与普通摄像头不同，Grove - 微型摄像头可以通过 Arduino/Seeeduino 控制。

现在让我们使用 Grove - 微型摄像头实现以下功能：每次有人靠近时拍摄一张照片。

为实现此功能，我们需要一个 **Grove - PIR 动作传感器**，它可以检测一定范围内的动作。

让我们开始制作：

- 将 SD 卡插入 SD 卡插槽，SD 卡不包含在 Grove 中，其容量不能超过 32G。
- 将 Grove - 微型摄像头连接到 **Grove - 基础扩展板**的 D2 端口，并将 Grove - PIR 动作传感器连接到 D5 端口。
- 将 Grove - 基础扩展板插入 Arduino/Seeeduino，然后使用 USB 数据线将 Arduino/Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Connecting_Picture.JPG)

- 打开 Arduino IDE，将以下代码复制并粘贴到一个新草图中：

```
    /* 使用数字 2 控制摄像头 */
    /* 使用数字 5 接收传感器信号 */
    #define KEY 2
    #define PIR_MOTION_SENSOR 5  
     
    void setup()
    { 
      Serial.begin(9600);
      pinMode(KEY,OUTPUT);
      pinMode(PIR_MOTION_SENSOR,INPUT);
      delay(100);
      enterStandbyMode();
      makeVideo(5000);

    }
    void loop()
    {
        int sensorValue = digitalRead(PIR_MOTION_SENSOR);
        if(sensorValue == HIGH)  //当传感器值为 HIGH 时，表示有人靠近
        {
           takePicture();
               delay(5000);      
        }
    }
    void takePicture(void)
    {
       digitalWrite(KEY,HIGH);
       delay(1000);
       digitalWrite(KEY,LOW);
       delay(1000);
    }
    void enterStandbyMode(void)
    {
      //将 key 引脚设置为高电平 2 秒，进入待机状态  
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
    void makeVideo(long int videoTime)
    {
      //再次将 key 引脚设置为高电平 2 秒，从待机状态进入视频状态
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(videoTime); //录制视频，时长为 videoTime，单位为毫秒  
     //停止视频
      digitalWrite(KEY,HIGH);
      delay(1000);
      digitalWrite(KEY,LOW);
      delay(1000);
    }
    void PoweroffMode(void)
    {
      //将 key 引脚设置为高电平 5 秒，进入关机状态  
      digitalWrite(KEY,HIGH);
      delay(5000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
```

- 上传代码。
- 现在 SD 卡中应该有一个视频，因为我们在 Setup() 中调用了一次函数。要播放视频，您可以直接通过 USB 数据线将摄像头连接到 PC，或者使用读卡器读取视频文件。如果有人靠近摄像头工作时，您还应该在 SD 卡中找到一些照片。

参考
---------

以下是该微型摄像头的状态描述。它有 5 种工作状态。

**1. 待机：** 在关机状态下，将 key 设置为高电平 2 秒，红色 LED 会亮起。微型摄像头进入待机状态。

**2. 关机：** 将 key 设置为高电平 5 秒，摄像头进入关机状态，红色 LED 会熄灭。

**3. 拍照：** 在开机状态下，将 key 设置为高电平约 1000 毫秒，摄像头可以拍摄一张照片。红色 LED 会闪烁一次，表示已拍摄一张照片。随后，它会自动进入待机状态。

**4. 视频：** 在待机状态下，将 key 设置为高电平 2 秒，摄像头会进入视频状态，红色 LED 会持续闪烁。要停止录制，将 key 设置为高电平约 1000 毫秒，摄像头会进入待机状态。

**5. 文件存储：** 使用 USB 数据线将摄像头连接到 PC，您可以打开图像文件和视频文件。您也可以通过 SD 卡读卡器访问 SD 卡中的文件。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Mini Camera Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Mini_Camera -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>