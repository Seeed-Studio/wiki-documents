---
title: PIR运动传感器模块
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/PIR_Motion_Sensor_Large_Lens_version/
slug: /cn/PIR_Motion_Sensor_Large_Lens_version
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/Pir_motion_sensor_v1.0.jpg)

PIR（被动红外检测）用于检测人体运动。本版本配备了大镜头，可支持远距离和广角检测。2.54mm标准连接器使其易于固定在任何地方。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/pir-motion-sensor-module-p-74.html?cPath=84_88&zenid=020999c566d2f31841dc54602b7d02ef)

##   特性
---
*   远距离检测

*   广角检测

*   低功耗

*   DC 3.0-5.5V电源供电

##   规格
---
*   输入电压：DC3.0-5.5V

*   电流：100uA（最大）

*   检测距离：9米（最大）

*   输出信号：0,3 VCC（检测到运动时输出高电平）

*   哨兵角度：120°

*   连接器：3针 2.54mm间距
*   尺寸：长36*宽26*高21（毫米）

##   使用方法
---
以下代码演示了一个简单的运动检测应用。当有人进入其检测范围时，它会通过SIG引脚输出高电平，LED会亮起。否则，它会输出低电平。您可以使用它来检测人的运动。

![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/PIR_motion_sensor_module_connection.JPG)

###   编程

以下是重要代码片段。
示例代码如下：
```
/*******************************************************************************/
/*PIR运动传感器引脚和LED引脚的宏定义*/
#define PIR_MOTION_SENSOR 8//使用引脚8接收模块的信号
#define LED    4//Grove - LED连接到Arduino的D4引脚

void setup()
{
    pinsInit();
}

void loop()
{
    if(isPeopleDetected())//是否检测到有人移动？
    turnOnLED();
    else
    turnOffLED();
}
void pinsInit()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
/***************************************************************/
/*功能：检测是否有人在其检测范围内移动*/
/*返回值：布尔值，true表示检测到有人移动。*/
boolean isPeopleDetected()
{
    int sensorValue = digitalRead(PIR_MOTION_SENSOR);
    if(sensorValue == HIGH)//如果传感器值为高电平？
    {
        return true;//是的，返回true
    }
    else
    {
        return false;//没有，返回false
    }
}
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

##   资源
---
- [PIR运动传感器Eagle文件](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>