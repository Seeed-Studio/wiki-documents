---
description: Build a simple mouse with Seeed Studio XIAO RA4M1.
title: XIAO RA4M1 Mouse
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
---

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/xiao_mouse.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Materials Required

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove Thumb Joystick</th>
      <th>Grove Cable</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductmalejumper.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Thumb-Joystick.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-4-pin-Male-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-Pack.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Check More 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

## Preliminary Preparation

### light the Built-in LED of XIAO RA4M1

If you have never use XIAO RA4M1 before, [please click here](https://wiki.seeedstudio.com/getting_started_xiao_ra4m1/) to learn how to light the built-in LED, which make sure that your development enviroment is good.

### Read X and Y axis data of Grove Joystick

#### Step 1.Connect device

First of all, you need to connect XIAO RA4M1 and Joystick together via pin as following table.

| XIAO RA4M1      | Grove - Thumb Joystick |
|-----------------|-------------------------|
| 3.3V            | Red                     |
| GND             | Black                   |
| A0              | White                   |
| A1              | Yellow                  |

Now use Grove cable connect them as following image.

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/4.png" style={{width:600, height:'auto'}}/></div>

#### Step 2.Upload test program

Copy the follwing code, past to Arduino IDE and then upload to XIAO RA4M1

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

Now you move the Joystick, the axis data will change as the same time. It means XIAO RA4M1 and Joystick work perfectly.

## Build mouse with XIAO RA4M1

### Step 3.Upload mouse controller program

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

Now you will see the cursor is moving when you control the Joystick ~

Congratulations! You build this little simple mouse successfully. There are more instresting HID(Human Interface Device) functions waiting for you to explore via XIAO RA4M1. [Want to learn more? Please click here to jump~](https://docs.arduino.cc/tutorials/uno-r4-minima/usb-hid/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
