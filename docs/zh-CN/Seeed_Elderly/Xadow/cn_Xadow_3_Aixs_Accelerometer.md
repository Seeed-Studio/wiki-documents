---
description: Xadow - 三轴加速度计
title: Xadow - 三轴加速度计
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_3_Aixs_Accelerometer
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow_Accelerometer_01.jpg)

这是一款高分辨率数字加速度计，具有±16g的大测量范围，通过I2C接口适合监测运动状态。使用此模块，您可以轻松地在设计中添加运动监测功能，例如手臂或腿部的晃动。如果您想通过手臂晃动来切换iPhone歌曲，那么这个模块非常适合您。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-3-Axis-Accelerometer-p-1521.html)

## 规格
---
- 尺寸：25.43mm x 20.35mm
- 工作电压：3.3V
- 分辨率：3.9mg/LSB
- 测试范围：±16g
- 控制模式：I2C

## 演示
---
与其他 Xadow 模块类似，在上传测试代码到 Xadow 主板以获取加速度计信息之前，您需要将 Xadow 三轴加速度计连接到 Xadow 主板。

硬件安装：

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow3AxisAcce.jpg)

:::note
    当将 Xadow 三轴加速度计连接到 Xadow 主板时，您需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::

测试代码如下所示：

```
#include <Wire.h>

#define ADXL345_DEVICE 0x00
#define ADXL345_POWER_CTL 0x2D
#define ADXL345_DATAX0 0x32
#define ADXL345_DATAX1 0x33
#define ADXL345_DATAY0 0x34
#define ADXL345_DATAY1 0x35
#define ADXL345_DATAZ0 0x36
#define ADXL345_DATAZ1 0x37

#define ADXL345_ADDRESS  0x53
int X_Read,Y_Read,Z_Read;
double ax,ay,az;

 void setup()
{
  Wire.begin();
  Serial.begin(19200);
  delay(100);
  //开启 ADXL345
  Wire.beginTransmission(ADXL345_DEVICE); // 开始传输到设备
  Wire.write(ADXL345_POWER_CTL);
  Wire.write(8);                          //启用测量
  Wire.endTransmission();                 //结束传输

 }

void loop()
{

X_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAX0,ADXL345_DATAX1);
Y_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAY0,ADXL345_DATAY1);
Z_Read = readRegister(ADXL345_ADDRESS,ADXL345_DATAZ0,ADXL345_DATAZ1);


 /*Serial.print("X,Y,Z 的值为:");
 Serial.print(X_Read);
 Serial.print(" , ");
 Serial.print(Y_Read);
 Serial.print(" , ");
 Serial.println(Z_Read); */

  getAcceleration();
  Serial.print("X=");
  Serial.print(ax);
  Serial.println(" g");
  Serial.print("Y=");
  Serial.print(ay);
  Serial.println(" g");
  Serial.print("Z=");
  Serial.print(az);
  Serial.println(" g");
  Serial.println("**********************");
 delay(500);
}

int readRegister(int deviceAddress,int address1,int address2)
{
    long int value;
    int readValue1,readValue2;
    Wire.beginTransmission(deviceAddress);
     Wire.write(address1); // 要读取的寄存器
     Wire.write(address2); // 要读取的寄存器
     Wire.endTransmission();
     Wire.requestFrom(deviceAddress,2); // 读取两个字节
     if(Wire.available()<=2)
     {
       readValue1 = Wire.read();
       readValue2 = Wire.read();
     }
     //Wire.endTransmission();
     readValue2 = readValue2<<8;
     value= readValue1 + readValue2;
     delay(100);
     return value;
}

void getAcceleration()
{
  double gains;
  //加速度计相关计算
  gains = 0.00390625;
  ax=X_Read * gains;
  ay=Y_Read * gains;
  az=Z_Read * gains;

}
```

上传代码后，打开串口监视器观察测试结果。此传感器的输出是三轴加速度信息，已转换为重力单位“g”。

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Xadow_3-Axis_Accelemeter_Result.jpg)

## 参考
---
以下是两个图表，可以帮助您理解结果的物理意义。
第一个图表是关于每个轴的方向：

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/ADXL345_Axes_of_Acceleration_Sensivity.jpg)

第二个图表提供了一些示例：

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/img/Sensing_Diraction_2.jpg)

## 在线原理图查看器
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/3-Axis_Accelerometer_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [Xadow 三轴加速度计 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/3-Axis_Accelerometer_Eagle_File.zip)
- [ADXL345 数据手册](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Accelerometer/res/ADXL345_datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>