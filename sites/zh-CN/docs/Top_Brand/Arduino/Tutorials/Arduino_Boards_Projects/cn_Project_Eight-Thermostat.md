---
description: 项目八 - 恒温器
title: 项目八 - 恒温器
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Project_Eight-Thermostat
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Project Eight - Thermostat
category: Tutorial
oldwikiname:  Project Eight - Thermostat
prodimagename:  
surveyurl: https://www.research.net/r/Project_Eight-Thermostat
--- -->

我们系列中的最后一个项目可能看起来很复杂，但实际上非常简单。我们使用电位器允许用户输入温度值，并使用温度传感器——如果环境温度超过通过电位器设置的值，继电器就会被激活。

1. 将温度传感器连接到模拟 A0/A1 输入插座，就像在项目 7 中一样。
2. Grove 在其 D1 输出上产生模拟电压，该电压连接到 A0/A1 输入插座上的 Arduino A0 模拟输入。

3. 将电位器连接到模拟 A4/A5 输入插座。

4. 电位器在其 D1 输出上产生模拟电压，该电压连接到 A4/A5 输入插座上的 Arduino A4 模拟输入。
 将继电器连接到 D2/D3 输入插座。

5. Arduino 的 D2 引脚通过 D1 连接器向继电器发送信号。继电器的红灯指示继电器是开启还是关闭，继电器在切换时会发出咔嗒声。

 ![](https://files.seeedstudio.com/wiki/Project_Eight-Thermostat/img/Conn-eight.jpg)

 _**现在上传以下 Arduino 代码：**_

```cpp
// Project Eight - Thermostat
//

int a,c,d;
int z=3975;
int relaypin=2;
float b, q, resistance, temperature;

void setup()
{
  pinMode(relaypin, OUTPUT);
}

void loop()
{
  a=analogRead(4);
  b=0.0488*a;
  c=int(b);
  q=analogRead(0);
  resistance=(float)(1023-q)*10000/q;
  temperature=1/(log(resistance/10000)/z+1/298.15)-273.15;
  d=int(temperature);
  if (d>=c)
  {
    digitalWrite(relaypin, HIGH);
    delay(500);
  }
  if (d<c)
  {
    digitalWrite(relaypin, LOW);
    delay(500);
  }
}
```

尝试向右和向左转动电位器，看看继电器是否会开启或关闭。

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