---
description: 使用 Seeed Studio XIAO RA4M1 构建一个简单的鼠标。
title: XIAO RA4M1 鼠标
keywords:
  - ra4m1
  - xiao
  - mouse
image: https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/3.png
side_position: 2
slug: /xiao_ra4m1_mouse
last_update:
  date: 09/05/2024
  author: Allen
createdAt: '2024-09-06'
updatedAt: '2025-09-17'
url: https://wiki.seeedstudio.com/cn/xiao_ra4m1_mouse/
---

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/xiao_mouse.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 所需材料

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove 拇指摇杆</th>
      <th>Grove 连接线</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductmalejumper.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Thumb-Joystick.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-4-pin-Male-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-Pack.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 查看更多 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

## 初步准备

### 点亮 XIAO RA4M1 的内置 LED

如果您之前从未使用过 XIAO RA4M1，[请点击这里](https://wiki.seeedstudio.com/cn/getting_started_xiao_ra4m1/)学习如何点亮内置 LED，这可以确保您的开发环境正常工作。

### 读取 Grove 摇杆的 X 和 Y 轴数据

#### 步骤 1. 连接设备

首先，您需要按照下表通过引脚将 XIAO RA4M1 和摇杆连接在一起。

| XIAO RA4M1      | Grove - 拇指摇杆 |
|-----------------|-------------------------|
| 3.3V            | 红色                     |
| GND             | 黑色                   |
| A0              | 白色                   |
| A1              | 黄色                  |

现在使用 Grove 线缆按照下图连接它们。

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/4.png" style={{width:600, height:'auto'}}/></div>

#### 步骤 2. 上传测试程序

复制以下代码，粘贴到 Arduino IDE 中，然后上传到 XIAO RA4M1

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("The X and Y coordinate is:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/2.png" style={{width:1000, height:'auto'}}/></div>

现在你移动摇杆，轴数据会同时改变。这意味着 XIAO RA4M1 和摇杆工作完美。

## 使用 XIAO RA4M1 制作鼠标

### 步骤 3. 上传鼠标控制器程序

```cpp
#include <Mouse.h>

const int xaxis = A0;
const int yaxis = A1;
const int sensitivity = 5;//adjust the mouse sensetive

void setup()
{
    Mouse.begin();
    delay(1000);//at least 1000ms to initilize
    Serial.begin(9600);
}

void loop()
{
  int xValue = analogRead(xaxis);
  int yValue = analogRead(yaxis);

  /*
  when you click the central button of Grove joystick, xValue will equal to 1023,
  so when xValue < 1000, we move the mouse; when xValue>1000, we click the mouse
  */
  if(xValue<1000){
  
    //define mouse move distance
    int xDistance;
    int yDistance;

    /*
    The joystick reads the x and y values with 500 as the center of the coordinate axis, 
    so we need to process the data by subtracting 500, while also eliminating some minor vibrations.
    */
    //Eliminate X minor vibrations.
    if(abs(xValue-500)<10){
      xDistance = 0;
    }else{
      xDistance = (xValue - 500);
    }
    //Eliminate X minor vibrations.
    if(abs(yValue-500)<10){
      yDistance = 0;
    }else{
      yDistance = (yValue - 500);
    }
    //read value from joystick
    Serial.print("value: ");
    Serial.print(xValue);
    Serial.print(",");
    Serial.println(yValue);
    Serial.println(" ");
    //read distance the mouse will move
    Serial.print("distance: ");
    Serial.print(xDistance);
    Serial.print(",");
    Serial.println(yDistance);
    Serial.println(" ");

    //make the mouse not so sensetive
    Mouse.move(xDistance/sensitivity,-yDistance/sensitivity,0);
  }else{
    //when xValue>1000, mouse click
    Mouse.click();
  }
    delay(100);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/1.png" style={{width:1000, height:'auto'}}/></div>

现在当你控制摇杆时，你会看到光标在移动～

恭喜！你成功构建了这个简单的小鼠标。还有更多有趣的HID（人机接口设备）功能等待你通过XIAO RA4M1来探索。[想了解更多？请点击这里跳转～](https://docs.arduino.cc/tutorials/uno-r4-minima/usb-hid/)

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
