---
title: 传感器 - 声音（介绍）
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Sensor_sound/
slug: /cn/Sensor_sound
last_update:
  date: 01/06/2022
  author: gunengyu
---

# Seeed 声音传感器选择指南

我们在近年来发布了各种类型的声音传感器。您可能会发现很难在它们之间做出选择。我们理解您的困扰，让我们仔细看看它们，找出哪一个最适合您！

要查看我们商城中的所有声音传感器，请点击[商城声音标签](https://www.seeedstudio.com/tag/Sound.html)进行查看。

## 什么是声音传感器

声音广泛存在于我们的日常生活中，我们可以使用声音来进行大量的交互控制，比如走廊中的声控灯。通过声音传感器，在黑色检测头（麦克风）前拍手或大声说话，您就能够通过声音来控制灯光。声音传感器相当于一个麦克风。它可以感知声音并将感知到的声音转换为相应的模拟信号输出。它广泛应用于手机、录音机、声控照明、医疗设备、深海测量、交通噪音监测、工业企业噪音检测等领域。

随着声音传感器的发展，出现了越来越多具有声音传感器的创新和有前景的产品。例如，您可能听说过可以拍摄人眼看不见的光的相机，或者热成像相机，但您听说过可以拍摄声音的相机吗？没错：韩国科学家已经开发出了这样一种相机，能够感知照片区域并用颜色标记，是不是很有趣？

这种独特的"声音相机"被称为SeeSV-S205，中间有一个普通相机，但周围环绕着精密的声音传感器，它可以让拍摄声音变得像拍摄光线一样简单。您只需要拿着它面向声源，就可以在最终图像中看到声源的位置。

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_sound/IMG/sound sensor.jpg" />
  <figcaption><b>图 1</b>. <i>SeeSV-S205 声音相机（图片来源：新浪科技，2013）</i></figcaption>
</div>

### 声音传感器如何工作

声音传感器内置了一个对声音敏感的驻极体电容麦克风。声波使麦克风中的驻极体薄膜振动，导致电容发生变化，产生与变化相对应的小电压。然后这个电压被转换成0-5V电压，经过A/D转换后被数据采集器接受并传输到计算机。

#### 声光互动蛋糕

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/Sensor_sound/IMG/birthday cake.png" />
  <figcaption><b>图 2</b>. <i>声光互动蛋糕的工作原理（图片来源：DFRobot，2019）</i></figcaption>
</div>

声音传感器上有一个黑色的拾音头（MIC）。当生日歌在黑色拾音头前大声播放时，声音传感器可以感受到声音的振动，产生电信号，点亮蛋糕上的灯光。

## 应用领域

这些声音传感器有着众多的用途。特别是，使用这些类型的传感器，人类可以在不同条件下得到监测、受益甚至获得拯救。因此，声音传感器在各个领域发挥着重要作用，包括日常生活、工业、医疗、军事等。

| 应用领域                                          | 内容 |
|--------------------------------|-----------------------------------------|
| 日常生活  | 传感器对声音信号进行采样，并将其应用于麦克风、录音机、手机等设备。声控灯配备了音频传感器。只要有人发出1秒钟的摩擦声，壁灯就会自动点亮约十秒钟；声控电视可以存储两个人的声音。|
| 工业 | 声波传感器利用锆钛酸铅PZT压电陶瓷电能与机械能转换的正逆压电效应来测量距离。在压电陶瓷上加上电信号，它产生机械振动并发出超声波。当在途中遇到障碍物时，超声波会立即反射回来，当它作用在其陶瓷上时会有电信号输出。因此通过测量时间差来计算并显示汽车与障碍物之间的距离。  |
| 医疗| 传统助听器的工作原理是：麦克风（话筒）将接收到的声音信号转换为电信号并发送给放大器。放大器将电信号放大后发送给接收器（耳机），接收器将电信号转换为声音信号。此时的声音信号比麦克风接收到的信号强得多，从而可以不同程度地补偿聋人的听力损失。|
| 军事 | 声音传感器使用声波来确定密闭容器中材料的化学成分，以加强港口的安全；声音传感器系统可以定位和分类狙击火力，并提供方位角、仰角、距离、口径和误差距离。|

## Seeed的声音传感器

### 您的偏好是哪一个

|名称|缩略图|工作电压|测量范围|灵敏度|输出|信号频率|点击购买|
|----|-----|-----|------|------|------|-----|------|
|[Grove - 声音传感器](https://wiki.seeedstudio.com/cn/Grove-Sound_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small.jpg"/>|5V|/|48dB-52dB|/|16kHz-20 kHz|[立即购买](https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM386-amplifier-Arduino-Compatible.html)|
|[Grove - 语音识别器](https://wiki.seeedstudio.com/cn/Grove-Speech_Recognizer/)|<img src="https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/stuff1.jpg" />|3V-5V|/|-43dB-(-37dB)|/|32.768MHz-50MHz|[立即购买](https://www.seeedstudio.com/Grove-Speech-Recognizer.html)|
|[Grove - 响度传感器](https://wiki.seeedstudio.com/cn/Grove-Loudness_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg" />|3.5V-10VDC|/|-48dB~66 dB|模拟信号|50Hz~2000 Hz|[立即购买](https://www.seeedstudio.com/Grove-Loudness-Sensor.html)|
|[Grove - Heelight传感器](https://wiki.seeedstudio.com/cn/Grove-Heelight_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight sensor.png" />|3.3V-5V|0.1m-10m|/|TTL逻辑电平|/|[立即购买](https://www.seeedstudio.com/Grove-Heelight-Sensor.html)|
|[Grove - 录音机](https://wiki.seeedstudio.com/cn/Grove-Sound_Recorder/)|<img src="https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Sound recorder.png" />|3V-5.5V|±1.5g|/|/|/|[立即购买](https://www.seeedstudio.com/Grove-Sound-Recorder-p-904.html)|

### 温馨提示

上面的图表显示了每个声音传感器的各种属性，包括不同的测量范围、灵敏度和信号频率，您可以选择最适合您的那一个。

如需了解各个产品的更详细信息，请通过产品图片旁边的链接访问它们各自的页面。

## 资源

- 参考资料
  - [魔音相机：由相机声音传感器组成](http://tech.sina.com.cn/digi/dc/2013-05-14/00188334966.shtml)
  - [Boson:声音传感器](http://wiki.dfrobot.com.cn/index.php?title=%E5%A3%B0%E9%9F%B3%E4%BC%A0%E6%84%9F%E5%99%A8)

## 项目

**改造 Seeed 新办公室的楼梯**：将办公室的楼梯改造成互动装置，甚至是向访客传达"仅限员工"信息的酷炫方式。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

**达芬奇密码**：这个作品结合了艺术和电子技术。艺术部分构成了骨架，由 11 层中密度纤维板组成。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed' width='350'></iframe>

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