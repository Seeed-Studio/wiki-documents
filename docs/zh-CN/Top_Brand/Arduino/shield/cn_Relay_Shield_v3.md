---
description: Relay_Shield_v3
title: Relay Shield v3

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Relay_Shield_v3
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_L_v3.0.jpg" alt="pir" width={600} height="auto" /></p>

继电器扩展板为控制大电流设备提供了解决方案，这些设备由于电流和电压限制无法通过Arduino的数字I/O引脚进行控制。

继电器扩展板具有四个高质量继电器，提供NO/NC接口，四个动态LED指示灯显示每个继电器的开/关状态，以及标准化的扩展板外形，可与Arduino/Seeeduino板或其他Arduino兼容板顺畅连接。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Relay-Shield-v3.0-p-2440.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

---

- 兼容Arduino Uno/Leonardo/Seeeduino；通过跳线可连接其他开发板或微控制器
- 通过数字I/O引脚4、5、6和7进行接口连接
- 继电器螺丝端子
- 标准化扩展板形状和设计
- 每个继电器的LED工作状态指示灯
- 高质量继电器
- 每个继电器都有COM、NO（常开）和NC（常闭）继电器引脚
- 更新引脚SCL、SDA、IOREF、NC。

## 规格参数

<table align="center">
  <tbody>
  <tr>
    <td><h3>项目</h3></td>
    <td><h3>最小值</h3></td>
    <td><h3>典型值</h3></td>
    <td><h3>最大值</h3></td>
    <td><h3>单位</h3></td>
  </tr>
  <tr>
    <td><h4>供电电压</h4></td>
    <td><h4>4.75</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.25</h4></td>
    <td><h4>VDC</h4></td>
  </tr>
  <tr>
    <td><h4>工作电流</h4></td>
    <td><h4>8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>250</h4></td>
    <td><h4>mA</h4></td>
  </tr>  
  <tr>
    <td><h4>开关电压</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>30</h4></td>
    <td><h4>VDC</h4></td>
  </tr>
    <tr>
    <td><h4>开关电流</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>8</h4></td>
    <td><h4>A</h4></td>
  </tr>
    <tr>
    <td><h4>频率</h4></td>
    <td><h4>-</h4></td>
    <td><h4>1</h4></td>
    <td><h4>-</h4></td>
    <td><h4>HZ</h4></td>
  </tr>
    <tr>
    <td><h4>开关功率</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>70</h4></td>
    <td><h4>W</h4></td>
  </tr>
    <tr>
    <td><h4>继电器寿命</h4></td>
    <td><h4>100000</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>次</h4></td>
  </tr>
    <tr>
    <td><h4>ESD接触放电</h4></td>
    <td><h4>-</h4></td>
    <td><h4>±4</h4></td>
    <td><h4>-</h4></td>
    <td><h4>KV</h4></td>
  </tr>
    <tr>
    <td><h4>ESD空气放电</h4></td>
    <td><h4>-</h4></td>
    <td><h4>±8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>KV</h4></td>
  </tr>
    <tr>
    <td><h4>尺寸</h4></td>
    <td><h4>-</h4></td>
    <td><h4>68.7X53.5X30.8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>mm</h4></td>
  </tr>
    <tr>
    <td><h4>净重</h4></td>
    <td><h4>-</h4></td>
    <td><h4>55±2</h4></td>
    <td><h4>-</h4></td>
    <td><h4>g</h4></td>
  </tr>
  </tbody></table>

:::caution

1. 请在Arduino的USB连接器顶部放置2层电工胶带。这将防止继电器扩展板与其接触。
2. 请勿操作超过35V DC的电压。
:::

## 扩展板接口说明

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_v3.0.png" alt="pir" width={600} height="auto" /></p>

- Digital 4 – 控制 RELAY4 的 COM4 引脚（位于 J4）
- Digital 5 – 控制 RELAY3 的 COM3 引脚（位于 J3）
- Digital 6 – 控制 RELAY2 的 COM2 引脚（位于 J2）
- Digital 7 – 控制 RELAY1 的 COM1 引脚（位于 J1）

**J1 接口/端子引脚说明：**

- **COM1 (公共引脚)** : 由数字引脚控制的继电器引脚。

- **NC1 (常闭)**: 当 RELAY1 控制引脚（数字 7 I/O 引脚）设置为低电平时，此端子将连接到 COM1，当 RELAY1 控制引脚设置为高电平时断开连接。

- **NO1 (常开)**: 当 RELAY1 控制引脚（数字 7 I/O 引脚）设置为高电平时，此端子将连接到 COM1，当 RELAY1 控制引脚设置为低电平时断开连接。

**端子 J2-4 与 J1 类似，只是它们分别控制 RELAY2-RELAY4。**

:::note
只需要四个 Arduino 数字 I/O 引脚（引脚 4-7）来控制四个不同的继电器。此外，还需要 5V 和两个 GND Arduino 引脚来为继电器扩展板供电。
:::

## 继电器操作/教程

---
继电器基本上是电磁开关：当继电器被控制电路激励时（即当电压和电流施加到线圈上时），电流和线圈产生磁场，能够将 COM 端子吸引到 NO 端子，当控制电路移除施加的电压和电流时，COM 端子由于机械力（通常是弹簧）返回接触 NC 端子。

一些实际的继电器应用包括：使用低电压控制高电压、电机控制、遥控、防听报警、自动温度报警、孵化器等等。

下面显示了一个使用一个继电器和一个电机的电机控制应用：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Low_Level_Control4.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/High_Level_Control3.jpg" alt="pir" width={600} height="auto" /></p>

在继电器扩展板的情况下，四个继电器中每个继电器的两个"控制电路"端子仅由一个 Arduino 数字 I/O 引脚控制。引脚 4、5、6 和 7 分别控制继电器 4、3、2 和 1。

## 继电器扩展板示例/用法

现在您知道了继电器内部是如何工作的，让我们向您展示如何使用继电器扩展板。

**示例 #1：直流电机控制**

1.将继电器扩展板堆叠到 Arduino 开发板上。

2.使用 USB 电缆将 Arduino 连接到您的 PC。

3.我们将使用 RELAY3 来控制直流电机。按照下面的原理图和图示连接直流电机和继电器扩展板：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Motor-shield-schematic-drawing.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_Connector.jpg" alt="pir" width={600} height="auto" /></p>

:::note
上图中的外部电源可以是电池或电源。外部电源必须能够提供足够的电流并设置为电机的正确电压。在我们的测试中，我们使用锂电池作为电机的外部电源。
:::

4.启动 Arduino IDE 并将以下代码上传到 Arduino 板：

```cpp
int MotorControl = 5;    // Digital Arduino Pin used to control the motor

// the setup routine runs once when you press reset:
void setup()  {
  // declare pin 5 to be an output:
  pinMode(MotorControl, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop()  {
  digitalWrite(MotorControl,HIGH);// NO3 and COM3 Connected (the motor is running)
  delay(1000); // wait 1000 milliseconds (1 second)
  digitalWrite(MotorControl,LOW);// NO3 and COM3 Disconnected (the motor is not running)
  delay(1000); // wait 1000 milliseconds (1 second)
}
```

当您将代码上传到 Arduino/Seeeduino 板后，电机应该运行一秒钟，停止一秒钟，然后无限重复这个过程。当电机运行时（NO3 和 COM3 连接），NO3 LED 指示灯将点亮。

**示例 #2：如何在一个 Arduino/Seeeduino 板上使用多个继电器扩展板**

由于继电器扩展板使用 Arduino 上的数字引脚来控制每个继电器，因此可以在同一个 Arduino 板上使用多个继电器扩展板，只需按照以下步骤操作：

1.将其中一个继电器扩展板（我们称之为继电器扩展板 #1）堆叠到 Arduino 开发板上

2.使用跳线/导线将另一个继电器扩展板（我们称之为继电器扩展板 #2）连接到继电器扩展板 #1，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Two-relay-shields-one-arduino.png" alt="pir" width={600} height="auto" /></p>

- 继电器扩展板 #1 GND 引脚连接到继电器扩展板 #2 GND 引脚
- 继电器扩展板 #1 5V 引脚连接到继电器扩展板 #2 5V 引脚
- 继电器扩展板 #1 数字引脚 8、9、10 和 11 分别连接到继电器扩展板 #2 数字引脚 7、6、5 和 4。

3.现在您可以使用 Arduino 的 8、9、10 和 11 数字 I/O 引脚控制继电器扩展板 #2 中的继电器 1、2、3 和 4。请参阅下面的示例代码来控制继电器扩展板 #2 中的 RELAY1：

```cpp
int relay1inShield2 = 8;    // Digital Arduino Pin 8 is used to control relay 1 in Relay Shield #2

// the setup routine runs once when you press reset:
void setup()  {
  // declare pin 8 to be an output:
  pinMode(relay1inShield2, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop()  {
  digitalWrite(relay1inShield2,HIGH); // relay is energized (NO is connected to COM)
  delay(1000); // wait 1000 milliseconds (1 second)
  digitalWrite(relay1inShield2,LOW); // NO is disconnected from COM
  delay(1000); // wait 1000 milliseconds (1 second)
}
```

## 相关阅读

---

- [继电器扩展板常见问题](http://support.seeedstudio.com/knowledgebase/articles/462030-relay-shield-sku-sld01101p)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

- [继电器扩展板 v3.0](https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip)

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