---
description: Grove - 耳夹式心率传感器
title: Grove - 耳夹式心率传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Ear-clip_Heart_Rate_Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/Heart_rate_ear_clip_kit.jpg" /></div>

心率耳夹套件包含一个耳夹和一个接收器模块。该心率测量套件可用于监测患者和运动员的心率。结果可以通过串口显示在屏幕上，并可保存用于分析。整个系统具有高灵敏度、低功耗和便携性的特点。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Ear-clip-Heart-Rate-Sensor-p-1116.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

特性
--------

- 低功耗
- 使用方便
- 高灵敏度
- 完全符合RoHS标准

:::tip
更多关于Grove模块的详细信息请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格参数
-------------

<table border="1" cellspacing="0" width="60%">
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
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
电压
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
工作电流
</th>
<td colspan="3">
6.5
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
耳夹线长度
</th>
<td colspan="3">
120
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
测量范围
</th>
<td colspan="3">
≥30/min
</td>
<td>
-
</td>
</tr>
</table>

应用场景
-----------------

- 心率监测器。

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

使用方法
-----

以下示例演示了使用耳夹式心率传感器测量心率的简单应用。

- 将此模块连接到[Grove-Base shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132)的数字端口D2。并将Grove-LED连接到数字端口4。
- 将Base Shield插入Arduino/Seeeduino。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/with_ardu.jpg" /></div>

- 复制并粘贴以下代码到新的Arduino草图中。

```
    // Function: This program can be used to measure heart rate, the lowest pulse in the program be set to 30.
    //         Use an external interrupt to measure it.
    // Hardware: Grove - Ear-clip Heart Rate Sensor, Grove - Base Shield, Grove - LED
    // Arduino IDE: Arduino-1.0
    // Author: FrankieChu       
    // Date: Jan 22, 2013
    // Version: v1.0
    // by www.seeedstudio.com
    #define LED 4//indicator, Grove - LED is connected with D4 of Arduino
    boolean led_state = LOW;//state of LED, each time an external interrupt 
                                    //will change the state of LED
    unsigned char counter;
    unsigned long temp[21];
    unsigned long sub;
    bool data_effect=true;
    unsigned int heart_rate;//the measurement result of heart rate

    const int max_heartpluse_duty = 2000;//you can change it follow your system's request.
                            //2000 meams 2 seconds. System return error 
                            //if the duty overtrip 2 second.
    void setup()
    {
        pinMode(LED, OUTPUT);
        Serial.begin(9600);
        Serial.println("Please ready your chest belt.");
        delay(5000);
        arrayInit();
        Serial.println("Heart rate test begin.");
        attachInterrupt(0, interrupt, RISING);//set interrupt 0,digital port 2
    }
    void loop()
    {
        digitalWrite(LED, led_state);//Update the state of the indicator
    }
    /*Function: calculate the heart rate*/
    void sum()
    {
     if(data_effect)
        {
          heart_rate=1200000/(temp[20]-temp[0]);//60*20*1000/20_total_time 
          Serial.print("Heart_rate_is:\t");
          Serial.println(heart_rate);
        }
       data_effect=1;//sign bit
    }
    /*Function: Interrupt service routine.Get the sigal from the external interrupt*/
    void interrupt()
    {
        temp[counter]=millis();
        Serial.println(counter,DEC);
        Serial.println(temp[counter]);
        switch(counter)
        {
            case 0:
                sub=temp[counter]-temp[20];
                Serial.println(sub);
                break;
            default:
                sub=temp[counter]-temp[counter-1];
                Serial.println(sub);
                break;
        }
        if(sub>max_heartpluse_duty)//set 2 seconds as max heart pluse duty
        {
            data_effect=0;//sign bit
            counter=0;
            Serial.println("Heart rate measure error,test will restart!" );
            arrayInit();
        }
        if (counter==20&&data_effect)
        {
            counter=0;
            sum();
        }
        else if(counter!=20&&data_effect)
        counter++;
        else 
        {
            counter=0;
            data_effect=1;
        }
        
    }
    /*Function: Initialization for the array(temp)*/
    void arrayInit()
    {
        for(unsigned char i=0;i < 20;i ++)
        {
            temp[i]=0;
        }
        temp[20]=millis();
    }
```

- 上传代码。
- 确保传感器接触到您的耳朵皮肤。这是我们测量心率时的信号：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/ardu_serial1.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/ardu_serial2.jpg" /></div>

在第一个图中，这是检测到的心跳波形图，当心跳时会出现高脉冲。

:::note
如果串口监视器返回错误信息，请更改传感器的位置。
:::

资源
---------

- [Grove - 耳夹式心率传感器演示代码](https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0.zip)
- [PPG 传感器系统](https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/res/PPG%20Sensor%20System.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Ear-clip_Heart_Rate_Sensor -->

## 项目

**使用 Google Map 进行交通数据可视化**：我们使用 Wio LTE cat.1 来监控交通 GPS 和其他信息。对于冷链，我们可以监控 GPS 位置以及温度和湿度。对于骑行，我们可以监控 GPS 位置以及心率。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/atmospheric-pollution-visualization-1940f4/' width='350'></iframe>

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