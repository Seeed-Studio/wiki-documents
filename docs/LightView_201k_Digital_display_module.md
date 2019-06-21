---
name: LightView 201k Digital display module
category: Tutorial
bzurl:
oldwikiname: LightView 201k Digital display module
prodimagename:
surveyurl: https://www.research.net/r/LightView_201k_Digital_display_module
sku:
---

Start Guide for LightView 201k Digital Display
This guide will show you how to connect the LightView 201k digital display with the camera shield to easily get started.

1. Materials

-Seeeduino V3.0
-Camera Shield
-LightView 201k Digital Display

2. Connection

![](https://github.com/SeeedDocument/LightView_201k_Digital_display_module/raw/master/img/Lightviewdisplay.png)

1 – Brightness+
2 – Brightness-
3 – GND
4 – AV-
5 – AV+
6 – GND
7 – VCC (3.9~5V)

You need to connect only 4 lines.

1.  4 AV- =&gt; V_OUT- of Camera Shield (need soldering a 2PIN header)

2.  5 AV+ =&gt;V_OUT+ of Camera Shield(need soldering a 2PIN header)

3.  6 GND =&gt; GND of Arduino

4.  7 VCC =&gt; 5V of Arduino

The final assembly looks like:

![](https://github.com/SeeedDocument/LightView_201k_Digital_display_module/raw/master/img/图片2.jpg)

3. How it works
The display only needs an AV input. The camera shield is used to generate the AV signal. You need not uploading any code into the Seeeduino. Seeeduino only did one thing: power the camera shield. Outputing AV signal is the build-in functionality of the VC0706 chipset used at Camera Shield. In another words, you may not need the Seeeduino+Camera Shield. What you need is an AV signal. You can connect the display to any kind of TV box which can output the AV signal. You can also connect the display to GoPro’s AV output. That’s it.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>