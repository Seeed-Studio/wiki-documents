---
description: Grove - 跟随器 V3.0
title: Grove-红外线跟随传感器 V3.0 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/top.jpg
slug: /cn/grove_line_follower
last_update:
  date: 10/12/2024
  author: Jason
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/top.jpg" /></div>


## 描述

它专为线跟随机器人设计。它有2个红外LED和2个红外敏感光电晶体管。板上看起来像眼睛的传感器实际上是红外LED和敏感光电晶体管。当光电晶体管检测到从红外LED反射的红外光时，它输出一个从高电平变为低电平的数字信号。


## 特性
- 快速响应时间
- 高分析性
- 截止可见光波长 λp=940nm
- 调节电位器和指示LED
- 双重检测

                                                                                                                                     
## 规格

| 参数                  | 值/范围                                                   |
|----------------------------|---------------------------------------------------------------|
| 供电电压              |  3.3V 到 5V                                                   |
| 接口                  | 数字                                                       |
| 电流消耗        |50mA                                                           |
| 工作温度范围| -40°C 到 +85°C                                                |


## 入门指南

### 指示图
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/111111.png"/></div>

### 硬件

**步骤1. 准备以下物品：**

- _与Arduino一起使用_

| Seeeduino V4.2 | Base Shield|  Grove - 跟随器 V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _连接Grove与Arduino_

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/8.png" /></div>

- _与XIAO ESP32系列一起使用_

| Seeed Studio Grove Base for XIAO| XIAO ESP32-S3|  Grove - 跟随器 V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[立即获取](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|[立即获取](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _连接Grove与XIAO ESP32S3_

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/7.png" /></div>

两种不同的组合，但使用相同的代码。

### 软件

- 步骤1. 将代码复制到Arduino IDE并上传。

```c
#define LEFT 3
#define RIGHT 2

void setup() {
  Serial.begin(9600);
  pinMode(LEFT, INPUT);
  pinMode(RIGHT, INPUT);
}
void loop() {
  int towar_left=digitalRead(LEFT);
  int towar_right=digitalRead(RIGHT);
  Serial.print("line follower : left ");
  Serial.print(towar_left);
  Serial.print("  right ");
  Serial.println(towar_right);
}
```
- 步骤2. 打开串口查看打印内容。

当我们将传感器放置在黑色区域时，串口将打印以下内容。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/2.png" /></div>

### 演示用法

当我们接近白色区域时，传感器板上的红灯会亮起，当我们接近黑色区域时，传感器板上的红灯会熄灭。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/5.gif" /></div>



## 资源

* **[SCH]** [Grove 红外线跟随传感器参考信息](https://files.seeedstudio.com/wiki/Grove_Line_Follower/SCH.pdf)
* **[数据手册]**  [ITR9909_Datasheet.PDF](https://files.seeedstudio.com/wiki/Grove_Line_Follower/datasheet.pdf)



## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a></div>