---
description: 4A电机扩展板
title: 4A电机扩展板

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/4A_Motor_Shield
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4A_Motor_Shield_top.jpg" alt="pir" width={600} height="auto" /></p>

4A电机扩展板基于飞思卡尔MC33932双H桥功率IC，可以控制每个单桥峰值电流高达5.0A的感性负载。它让您可以用Arduino/Seeeduino开发板驱动两个直流电机，独立控制每个电机的速度和方向。您还可以测量每个电机的电流消耗等功能。  
板载DC/DC转换器支持非常宽的输入电压范围，可以为微控制器开发板提供5V电源，最大电流100mA。因此，您只需要一个电源就可以驱动电机并为逻辑电路供电。  

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/4A-Motor-Shield-p-1954.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 规格参数

- 工作电压：6V ~ 28V  
- DC/DC输出：5V 100mA @ "5V"引脚  
- 输出电流（每个通道）：2A（连续工作）/ 5A（峰值）  
- 输出占空比范围：0%~100%  
- 输出短路保护（短路到VPWR或GND）  
- 通过内部恒定关断时间PWM进行过流限制（调节）  
- 温度相关的电流限制阈值降低  

## 接口说明

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4a_motor_shield_top_view.jpeg" alt="pir" width={600} height="auto" /></p>

**①：J1:**直流输入连接器。  
**②：J2:**电机驱动输出连接器。  
**③：EN,FT:**EN控制和故障标志检测跳线。如果短接EN跳线，EN信号将映射到D4引脚，您可以通过D4引脚控制H桥禁用输出或复位故障标志。如果短接FT跳线，故障标志信号将映射到D3引脚，您也可以从D3引脚读取故障标志。  
**④: IO:**逻辑电压电平选择跳线。您可以通过此跳线选择控制逻辑电压电平。  
**⑤：IA,IB:**电流传感器跳线。如果您需要检测电机电流，必须短接这些跳线。电机电流将转换为电压信号，可以从A0、A1引脚读取。  

**电源供电：**您必须从J1（直流输入连接器）为扩展板供电。输入电压范围可设置为6Vdc ~ 28Vdc。板载DC/DC转换器可以将直流输入电压转换为5Vdc输出电压来供应逻辑电路。DC/DC转换器还可以通过"5V"引脚为微控制器开发板（Arduino/Seeeduino）供电，最大电流100mA。  
**电机接口：**Out 1和Out 2（Out 3和Out 4）连接电机A（B）用于直流电机。  

## 注意事项

<span style={{color: 'red'}}>工作期间请勿触摸H桥IC或PCB板。在满负载工作情况下，其温度可达100度。</span>

## 演示

### 驱动直流电机

将直流电机连接到电机扩展板输出引脚OUT1和OUT2（OUT3和OUT4）。并将驱动电压连接到电源端子。电机驱动板可以为seeeduino产生5V供电电压。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/Drive_DC_Motor.png" alt="pir" width={600} height="auto" /></p>

将我们在资源部分提供的库安装到Arduino库文件中，并通过路径找到示例"DCMotorDemo"：文件->示例->MotorDrive->DCMotorDemo。  

此演示使电机在一个方向旋转2秒，暂停1秒，然后在相反方向旋转2秒。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/DC_Motor_Code.jpg" alt="pir" width={600} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- [原理图pdf](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.pdf)  
- [Eagle文件](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip)  
- [电机扩展板库](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MotorDriver20121210.zip)
- [MC33932数据手册](https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MC33932.pdf)  

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