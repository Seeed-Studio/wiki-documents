---
title: Grove - Mini Camera
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Mini_Camera/
slug: /cn/Grove-Mini_Camera
last_update:
  date: 03/23/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Grove_camera.jpg)

如果你正在寻找一款小型尺寸的摄像头，那么Grove-Mini Camera或许会是你的最佳选择。这是一款迷你摄像头，可以通过Arduino进行控制。它集成了图像处理功能，可以生成1280*720分辨率的JPEG图像。捕获的图片会存储在SD卡中，你可以通过Mini 8Pin USB接口读取SD卡的信息。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Mini-Camera-p-1578.html)

## 特性

- 标准USB接口和Grove接口
- 高分辨率
- 尺寸小巧，重量轻

:::提示
    更多关于Grove模块的详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格参数

| 项目         | 性能参数              |
| ------------ | --------------------- |
| CPU          | ARM9                  |
| 视频解码     | H.263加速             |
| 视频格式     | AVI                   |
| 视频编码     | MPEG4                 |
| 视频分辨率   | 640*480               |
| 视频帧率     | 30FPS                 |
| 支持的软件   | 支持AVI播放器         |
| 照片格式     | JPEG                  |
| 图像分辨率   | 1280*720              |
| 充电模式     | DC5V                  |
| 数据通信接口 | Mini 8Pin USB         |
| 存储介质     | Micro SD卡（最大32G） |

## 演示

与一般的摄像头不同，Grove - Mini Camera可以通过Arduino/Seeeduino进行控制。

现在，让我们使用Grove - Mini Camera来实现这个功能：每当有人靠近时，就拍摄一张照片。

要实现这个功能，我们需要一个**Grove - PIR人体感应传感器**，它可以在一定范围内探测到任何运动。

让我们开始制作吧：

- 将SD卡插入SD卡槽，这个Grove产品中不包含SD卡，并且其大小不能超过32G。
- 将Grove - Mini Camera连接到**Grove - Base Shield**的D2端口，将Grove - PIR人体感应传感器连接到D5端口。
- 将Grove - Base Shield插入Arduino/Seeeduino，然后使用USB线将Arduino/Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Connecting_Picture.JPG)

- 打开Arduino IDE，将下面的代码复制并粘贴到一个新的草图（Sketch）中：

```
    /*Using digital 2 to control Camera*/
    /*Using digital 5 to receive sensor signal*/
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
        if(sensorValue == HIGH)  //when the sensor value is HIGH, someone is in here
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
      //set the key pin as high level for 2s,enter the standby state  
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
    void makeVideo(long int videoTime)
    {
      //set the key pin as high level for 2s again, from the standby state to video state
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(videoTime); //make a  video for videoTime.Its unit is ms.  
     // stop the video
      digitalWrite(KEY,HIGH);
      delay(1000);
      digitalWrite(KEY,LOW);
      delay(1000);
    }
    void PoweroffMode(void)
    {
      //set the key pin as high level for 5s,enter the poweroff state  
      digitalWrite(KEY,HIGH);
      delay(5000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
```

- 上传代码。
- 现在SD卡中应该有一个视频文件，因为我们在Setup()函数中调用了一次该函数。要播放视频，你可以直接将摄像头通过USB线连接到电脑，或者使用读卡器来读取它。如果在工作时有人靠近，你也应该在SD卡中找到一些照片。

## 参考资料

以下是这款迷你摄像头的状态描述。它有五种工作状态。

**1. 待机状态：**在关机状态下，将按键设为高电平持续2秒，红色LED灯会亮起。迷你摄像头进入待机状态。

**2. 关机状态：**将按键设为高电平持续5秒，摄像头进入关机状态，红色LED灯会逐渐熄灭。

**3. 拍照状态：**在开机状态下，将按键设为高电平持续约1000毫秒，摄像头可以拍摄一张照片。红色LED灯会闪烁一次，表示已拍摄一张照片。之后，它会自动进入待机状态。

**4. 录像状态：**在待机状态下，将按键设为高电平持续2秒，摄像头会进入录像状态，红色LED灯会持续闪烁。要停止录像，将按键设为高电平持续约1000毫秒，摄像头会进入待机状态。

**5. 文件存储：**使用USB线将摄像头连接到电脑，你可以打开图片文件和视频文件。你也可以使用SD卡读卡器来访问SD卡中的文件。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

- [Mini Camera Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mini_Camera -->

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
