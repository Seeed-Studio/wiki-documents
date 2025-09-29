---
title:  Grove - 80cm 红外接近传感器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-80cm_Infrared_Proximity_Sensor/
slug: /cn/Grove-80cm_Infrared_Proximity_Sensor
last_update:
  date: 12/30/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Image_of_PSD.jpg)

80cm 红外接近传感器是一款通用型距离测量传感器。该传感器采用 SharpGP2Y0A21YK，具有小封装和极低功耗的特点，可连续进行距离读取并返回相应的模拟电压，测量范围为 10cm (4") 到 80cm (30")。可用于电视、个人电脑、汽车等设备中。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html)

特性
--------

- 易于使用
- 宽供电电压范围：2.5V–7V
- Grove 接口

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用场景
-----------------

- 节水装置
- 玩具
- 机器人技术

规格参数
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
</tr>
<tr align="center">
<th scope="row">
工作电压
</th>
<td>
2.5V
</td>
<td>
5V
</td>
<td>
7V
</td>
</tr>
<tr align="center">
<th scope="row">
模拟输出电压(80cm)
</th>
<td>
0.25V
</td>
<td>
0.4V
</td>
<td>
0.5V
</td>
</tr>
<tr align="center">
<th scope="row">
平均电流消耗
</th>
<td>
-
</td>
<td>
33mA
</td>
<td>
50mA
</td>
</tr>
</table>

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

使用方法
-----

### 与 Arduino 配合使用

红外接近传感器易于使用。电压读数与距离之间的关系如下所示。当我们读取电压时，它表示前方物体到该传感器的距离。

- 将 3 针连接器连接到传感器，并将 4 针连接器连接到 **Grove-Base Shield** 的 A1 端口。

<div class="admonition note">
<p class="admonition-title">注意</p>
该传感器非常小，使用一种称为日本免焊端子 (JST) 连接器的微型连接器。这些连接器有三根线：地线、Vcc 和输出信号。由于该传感器连续发射且不需要任何时钟来启动读取周期，因此很容易与任何微控制器接口。对于 Arduino 和 Seeeduino，我们准备了一根 4 针到 3 针的线缆，将传感器上的 3 针连接器转换为 Grove Base Shield 上的 4 针连接器，以兼容 Seeeduino Grove 接口。
</div>

- 通过 USB 线缆连接 Arduino/Seeeduino。

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/80cm_Infrared.jpg)

- 复制并粘贴下面的代码到新的 Arduino 草图中。

```
    #define IR_PROXIMITY_SENSOR A1 // 连接到传感器的模拟输入引脚
    #define ADC_REF 5//ADC 的参考电压为 5v。如果 Seeeduino
                     //板上的 Vcc 开关切换到 3V3，ADC_REF 应该是 3.3
    float voltage;//传感器电压，您可以根据 GP2Y0A21YK 数据手册
                    //第 4 页或第 5 页上的图表计算或找到到
                    //反射物体的距离。

    void setup()
    {
        // 以 9600 bps 初始化串行通信：
        Serial.begin(9600);
    }

    void loop()
    {
        voltage = getVoltage();
        Serial.print("sensor voltage  = " );                       
        Serial.print(voltage);
        // 在下一个循环之前等待 500 毫秒
        delay(500);
    }
    /****************************************************************************/
    /*函数：从连接到模拟引脚的传感器引脚获取电压                                    */
    /*参数：-void                                                               */
    /*返回：-float，模拟引脚的电压                                              */
    float getVoltage()
    {
        int sensor_value;
        int sum;  
        // 读取模拟输入值：
        for (int i = 0;i < 20;i ++)//连续采样 20 次
        {
            sensor_value = analogRead(IR_PROXIMITY_SENSOR);
            sum += sensor_value;
        }
        sensor_value = sum / 20;
        float voltage;
        voltage = (float)sensor_value*ADC_REF/1024;
        return voltage;
    }
```

- 上传代码。
- 打开串口监视器，你可以获得电压值。你可以根据下面的图表计算或找到到反射物体的距离。

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Infrared_Proximity.jpg)

<div class="admonition note">
<p class="admonition-title">注意</p>
由于从发射器到反射点再到接收器的三角形内存在一些基本的三角几何关系，检测器的输出相对于被测距离是非线性的。
</div>

### 与 Raspberry Pi 配合使用

1.你应该有一个树莓派和一个grovepi或grovepi+。

2.你应该已经完成了开发环境的配置。
否则请参考[这里](/cn/GrovePi_Plus/)。

3.连接

- 使用grove线缆将传感器插入grovepi的D4接口。

4.导航到演示目录：

       cd yourpath/GrovePi/Software/Python/

- 查看代码

```
    nano grove_infrared_distance_interrupt.py    # "Ctrl+x" 退出 #
```

```
    import time
    import grovepi

    # 将Grove红外距离中断传感器连接到数字端口D4
    # SIG,NC,VCC,GND
    sensor = 4

    grovepi.pinMode(sensor,"INPUT")

    while True:
        try:
            # 当接收到的红外光强度超过校准水平时，传感器返回LOW并且板载LED亮起
            if grovepi.digitalRead(sensor) == 0:
                print "found something"
            else:
                print "nothing"

            time.sleep(.5)

        except IOError:
            print "Error"
```

5.运行演示。

```
    sudo python grove_infrared_distance_interrupt.py
```

参考资料
---------

这些新的测距仪使用三角测量法和一个小型线性CCD阵列来计算视野中物体的距离和/或存在。基本原理是这样的：发射器发出一个红外光脉冲。这束光在视野中传播，要么击中物体，要么继续传播。在没有物体的情况下，光永远不会被反射，读数显示没有物体。如果光从物体上反射，它会返回到检测器，在反射点、发射器和检测器之间形成一个三角形。

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Theory_of_PSD.jpg)

这个三角形中的角度根据到物体的距离而变化。这些新检测器的接收器部分实际上是一个精密透镜，它根据上述三角形的角度将反射光传输到封闭线性CCD阵列的各个部分。然后CCD阵列可以确定反射光返回的角度，因此，它可以计算到物体的距离。

这种新的测距方法几乎不受环境光干扰的影响，并且对被检测物体的颜色具有惊人的无差别性。现在可以在充足的阳光下检测黑墙。

资源
---------

- [GP2Y0A21YK 数据手册](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/res/GP2Y0A21YK.pdf)

## 项目

**Arduino101 BLE 自主漫游车** 为 Arduino101 BLE 漫游车增加传感器以实现自主驾驶。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/31926/arduino101-ble-autonomous-rover-2cb19f/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_80cm_Infrared_Proximity_Sensor -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>