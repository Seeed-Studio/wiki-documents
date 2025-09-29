---
description: Grove - 胸带心率传感器
title: Grove - 胸带心率传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Chest_Strap_Heart_Rate_Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Heart_rate_chest_belt_kit.jpg" /></div>

这个心率胸带套件包含一个胸带和一个5.3 KHz AM接收器模块。心率测量套件可用于监测患者和运动员的心率，同时结果可以通过串口显示在屏幕上并保存用于分析。整个系统具有许多优点，例如高灵敏度、低功耗和便携性。由于模块之间通过AM进行通信，因此非常方便您的移动（注意有效距离为30cm）。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Chest-Strap-Heart-Rate-Sensor-p-1115.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

特性
--------

- 低功耗
- 无线
- 使用方便
- 内置铁氧体天线
- 高灵敏度
- 完全符合RoHS标准

:::tip
有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格参数
--------------

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
5.5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
胸围范围
</th>
<td>
65
</td>
<td>
-
</td>
<td>
145
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
调制模式
</th>
<td colspan="3">
5.3KHz AM调制
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
电池寿命
</th>
<td colspan="3">
超过半年（取决于您的使用情况）
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
有效接收距离
</th>
<td colspan="3">
30
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
接收模块
</th>
<td colspan="3">
48 X 25 X 10
</td>
<td>
mm
</td>
</tr>
</table>

应用创意
-----------------

- 心率监测器。

:::caution
**1**. 胸带由CR2032纽扣电池供电。用硬币打开后盖来更换电池。

**2**. 如果长时间不使用，请取出电池。
:::

使用方法
-----

以下示例演示了使用胸带心率传感器测量心率的简单应用。

- 将此模块连接到您的[底板](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132)上的数字端口D2。并将Grove-LED连接到数字端口4。
- 将底板插入Arduino/Seeeduino。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Grove-Chest_Strap_Heart_Rate_Sensor.jpg" /></div>

- 复制并粘贴下面的代码到新的Arduino草图中。

```
    #define LED 4//指示器，Grove - LED连接到Arduino的D4端口
    boolean led_state = LOW;//LED状态，每次外部中断
                                    //将改变LED的状态
    unsigned char counter;
    unsigned long temp[21];
    unsigned long sub;
    bool data_effect=true;
    unsigned int heart_rate;//心率的测量结果

    const int max_heartpluse_duty = 2000;//您可以根据系统要求更改它。
                            //2000表示2秒。如果占空比超过2秒，
                            //系统返回错误。
    void setup()
    {
        pinMode(LED, OUTPUT);
        Serial.begin(9600);
        Serial.println("Please ready your chest belt.");
        delay(5000);
        arrayInit();
        Serial.println("Heart rate test begin.");
        attachInterrupt(0, interrupt, RISING);//设置中断0，数字端口2
    }
    void loop()
    {
        digitalWrite(LED, led_state);//更新指示器的状态
    }
    /*函数：计算心率*/
    void sum()
    {
     if(data_effect)
        {
          heart_rate=1200000/(temp[20]-temp[0]);//60*20*1000/20_total_time 
          Serial.print("Heart_rate_is:\t");
          Serial.println(heart_rate);
        }
       data_effect=1;//标志位
    }
    /*函数：中断服务程序。从外部中断获取信号*/
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
        if(sub>max_heartpluse_duty)//设置2秒作为最大心跳占空比
        {
            data_effect=0;//标志位
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
    /*函数：数组(temp)的初始化*/
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
- 这是我们测量心率时的信号：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/GROVE_heart_rate_chest_belt.bmp" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Grove-heart_rate_serial.jpg" /></div>

在第一个图中，这是检测到的心跳波形图，当心脏跳动时会出现高脉冲。

:::note
**1**. 胸带的翼片必须与您的皮肤接触才能获得高精度。

**2**. 胸带和接收模块之间的最大距离必须小于30厘米。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Grove - 胸带心率传感器 EAGLE 文件](https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip)
- [胸带心率传感器演示代码](https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/MeasureHeartRate.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Chest_Strap_Heart_Rate_Sensor -->

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