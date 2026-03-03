---
description: Grove-单轴模拟陀螺仪
title: Grove-单轴模拟陀螺仪
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Single_Axis_Analog_Gyro
last_update:
  date: 1/29/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Axis_Analog_Gyro_01.jpg)

Grove – 单轴模拟陀螺仪基于角速度传感器（Murata-ENC-03R），利用科里奥利力现象工作。它只能测量 X 轴的角速度，与其他三轴陀螺仪不同，但速度更快。它可用于位置控制和姿态控制，例如自平衡的两轮驱动。

型号：[SEN05091P](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip)

## 特性

- 输入电压：3.3V/5V

- 标准 Grove 接口

- 轻量化

- 高速

- 测量 X 轴角速度

## 演示

### 使用 [Arduino](https://www.arduino.cc/)

该模块通过模拟信号检测单轴旋转。
高通滤波器和低通滤波器电路用于减少温度漂移并抑制输出噪声。
在测量角速度之前，需要一个参考值（角速度为 0 时传感器的输出）。
默认情况下，该值为 1.35V。但为了获得更准确的参考值，在测量之前需要进行校准。
在校准过程中，角速度为 0 时的输出电压会被采样 200 次，然后将这些数据的平均值作为参考值。

1. 将模块连接到 [Grove - Base Shield](https://seeeddoc.github.io/Grove-Base_Shield/) 的 A0 端口，当然任何模拟引脚都可以。

2. 将 Grove - Base Shield 插入 Arduino/Seeeduino，并使用 USB 数据线将其连接到 PC。

3. 上传以下代码。如果您不知道如何上传代码，请点击 [这里](https://seeeddoc.github.io/Upload_Code/)。

``` c++
    int sensorPin = A0; // 选择传感器的输入引脚

    float reference_Value=0;

    int sensorValue = 0; // 用于存储传感器值的变量

    void setup()
    {

        int i;
        float sum=0;
        pinMode(sensorPin, INPUT);
        Serial.begin(9600);
        Serial.println("请在校准前不要旋转传感器！");
        Serial.println("获取参考值：");

    for(i=0;i<1000;i++)
    {
        // 从传感器读取值：
        sensorValue = analogRead(sensorPin);
        sum += sensorValue;
        delay(5);
    }
    reference_Value = sum/1000.0;
    Serial.println(reference_Value);
    Serial.println("现在可以开始测试了！");
    }

    void loop()
    {
        double angularVelocity;
        sensorValue = analogRead(sensorPin);
        angularVelocity =((double)(sensorValue-reference_Value)*4930.0)/1023.0/0.67; // 获取角速度
        Serial.print(angularVelocity);
        Serial.println("度/秒");
        Serial.println(" ");
        delay(10);
    }
```

4. 现在是校准时间。<font color="#DC143C" face>将传感器水平放置在桌面上</font>，然后按下 Seeeduino 的复位按钮，并打开串口工具：

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Gyro_Result.jpg)

5. 当您看到“现在可以开始测试了”时，表示校准完成。您现在可以使用传感器。旋转方向可以参考下图：

![](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/img/Rotate_direction.jpg)

### 使用 [Raspberry Pi](https://seeeddoc.github.io/GrovePiPlus/)

1. 您需要准备一个 Raspberry Pi 和一个 GrovePi 或 GrovePi+。

2. 您需要完成开发环境的配置，否则请按照 [这里](https://seeeddoc.github.io/GrovePiPlus/#Introducing_the_GrovePi.2B) 的说明进行操作。

3. 连接

- 使用 Grove 电缆将传感器连接到 GrovePi 的 A0 插座。

4. 导航到演示目录：

  `cd yourpath/GrovePi/Software/Python/
`

- 查看代码

```
    nano grovesingleaxisanaloggyro.py # 按 "Ctrl+x" 退出 #

    import time
    import grovepi

    # 将 Grove 单轴模拟陀螺仪连接到模拟端口 A0
    # SIG,NC,VCC,GND
    sensor = 0

    grovepi.pinMode(sensor,"INPUT")

    # 校准
    print "校准中..."

    sum = 0

    errors = 0

    for x in range(0, 100):

      try:
          # 获取传感器值
          v = grovepi.analogRead(sensor)
          sum += v
          #time.sleep(.05)
      except IOError:
          print "错误"
          errors += 1

    if errors == 100:

       print "无法校准"

       raise SystemExit

    reference_value = sum / (100 - errors)

    print "校准完成"
    print "参考值 =", reference_value

    # 准备就绪

    while True:
        try:
            # 获取传感器值
            sensor_value = grovepi.analogRead(sensor)

            # 计算角速度（度/秒）
            velocity = ((float)(sensor_value - reference_value) * 4930.0) / 1023.0 / 0.67

            print "传感器值 =", sensor_value, " 速度 =", velocity
            time.sleep(.5)

        except IOError:
        print "错误"
```

5. 运行演示。

` sudo python grovesingleaxisanaloggyro.py
`

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

**[Eagle]**  [Grove - 单轴模拟陀螺仪 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove-Signal_Axis_Analog_Gyro_Eagle_File.zip)

**[PDF]**  [Grove - 单轴模拟陀螺仪原理图](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20Sch.pdf)

**[PDF]**  [Grove - 单轴模拟陀螺仪 PCB](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Grove%20-%20Single%20Axis%20Analog%20Gyro%20v1.0%20PCB.pdf)

**[Datasheet]** [单轴模拟陀螺仪数据手册](https://files.seeedstudio.com/wiki/Grove-Single_Axis_Analog_Gyro/res/Analog_Gyro_datasheet.pdf)

**[Code]** [GitHub 上的演示代码](https://github.com/Seeed-Studio/Grove_Single_Axis_Analog_Gyro)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您在使用我们的产品时拥有顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>