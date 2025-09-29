---
description: 项目七 - 温度传感器
title: 项目七 - 温度传感器
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Project_Seven-Temperature
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Seven - Temperature
category: Tutorial
oldwikiname:  Project Seven - TemperatureProject Seven - Temperature
prodimagename:
surveyurl: https://www.research.net/r/Project_Seven-Temperature
--- -->

在我们的 Grove 之旅中，下一个要介绍的是温度传感器。它是一种模拟输入形式，如前所述，它会根据环境温度返回一个相对的电压值。我们使用模拟引脚测量这个电压，并将其转换为温度。

将温度传感器连接到模拟 A0/A1 输入插座。
Grove 单元在其 D1 输出上产生模拟电压，该输出连接到 A0/A1 输入插座上的 Arduino A0 模拟输入。

![](https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Conn-seven.jpg)

_**现在上传以下 Arduino 代码：**_

```cpp
// Project Seven - temperature
//

int a;
int del=1000; // duration between temperature readings
float ctemperature;
float ftemperature;
int B=3975;
float resistance;

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  a=analogRead(0);
  resistance=(float)(1023-a)*10000/a;
  ctemperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
  ftemperature=ctemperature*9/5+32;
  Serial.print(ctemperature);
  Serial.print("C ");
  Serial.print(ftemperature);
  Serial.println("F");
  delay(del);
}
```

您可以复制并粘贴上面的代码行，以便为您自己的代码添加温度功能。

上传代码后，在 Arduino IDE 中打开串口监视器窗口，您应该会看到类似这样的界面：

![](https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Aq0PYQjuq.png)

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