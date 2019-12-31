---
name:  Green LCD Cape with Resistive Touch
category: BeagleBone
bzurl: https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html
oldwikiname: BeagleBone_Green_HDMI_Cape
prodimagename: BeagleBone_Green_HDMI_Cape.jpg
wikiurl: http://wiki.seeedstudio.com/cn/BeagleBone_Green_HDMI_Cape
tags: plat_bbg
sku: 104990262
---

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08ddkssqrw2lfthpq0phlecp1r.jpg)


**Green LCD Cape with Resistive Touch** is designed for SeeedStudio Beagle bone® Green or Beagle bone Black with a compact 5-inch LCD which is smaller than a 7-inch one but provides a resolution of 800x480 using a layer of 4-wired resistive touchscreen for user interactions. It's easy to setup by just connecting 2x46 pin headers to SeeedStudioBeaglebone®Green/Beaglebone®Black, which provides everything the cape requires such power supply and display signals. In addition, the cape can be powered by the built-in micro USB on the back. Buttons below the screen, LEFT, RIGHT, UP, DOWN and ENTER, provide an alternative way to interact with your screen. Two LEDs are used for power and user status indication.


**5 Inch**

<p style="text-align:center"><a href="https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


**7 Inch**

<p style="text-align:center"><a href="https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

--------

- Resolution up to 800x480 (5 inch)  /   1024x600 (7 inch)
- Resistive touchscreen
- 5 buttons including LEFT, RIGHT, UP, DOWN and ENTER
- Debian supported
- ULP backlight
- 4 x 3mm mounting holes
- Built-in USB power supply

## Specifications

-------------

| Name                | Value                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| Dimension            | 200mm x130mm x50mm                                                                                              |
| Weight | G.W 120g                                  |
|Working Voltage|5V |
|Working Current|110mA |
|Power|0.55W |


## Application

-----------------

Use it with BeagleBone to display anything you want.

## Hardware
-----------------

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08za8h5rzwtbm1lq3n3oydkcxp.jpg)


**SN74HC245**

   - Large range of IO driving current

**Cape I2C address switch**

   - I2C address configuration switch

**CAT4139TD**

   - Backlight, constant current and voltage


### Part list

|                            |          |
|----------------------------|----------|
| **Name**             | Quantity |
|  Green LCD Cape with Resistive Touch | 1        |

## Getting Started
-----------

***It will be shown to you how to get started step by step in this section.***

### Preparation

- BeagleBone Green board or BeagleBone black board(with OS [installation](http://beagleboard.org/getting-started)) × 1.
- USB cables (type A to micro type B) × 2.

### Hardware Connection

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-086yqt2uwelst8w5mwuaklys12.jpg)

<div class="admonition note">
<p class="admonition-title">Note</p>

BeagleBone Green board and Green LCD Cape with Resistive Touch both need to be USB-connected for sufficient driving.

</div>

### Software Configuration

1. Check what COM port BeagleBone Green board is using in Device Manager

![](https://github.com/SeeedDocument/BBG-LCD-Cape-with-Resistive-Touch/raw/master/img/com-show.png)

2. Access BeagleBone Green board system using putty with the COM port.

![](https://github.com/SeeedDocument/BBG-LCD-Cape-with-Resistive-Touch/raw/master/img/putty-config.png)

account: debian, password: temppwd

![](https://github.com/SeeedDocument/BBG-LCD-Cape-with-Resistive-Touch/raw/master/img/BBG-start.png)

3. Modify configurations in `/boot/uEnv.txt `

```bash
sudo nano /boot/uEnv.txt
```

For 7-inch screen:

![](https://github.com/SeeedDocument/BBG-LCD-Cape-with-Resistive-Touch/raw/master/img/7-inch-config.png)

For 5-inch screen:

![](https://github.com/SeeedDocument/BBG-LCD-Cape-with-Resistive-Touch/raw/master/img/5-inch-config.png)

For display devices using beaglebone HDMI, uncomment `disable_uboot_overlay_video=1`

![](https://github.com/SeeedDocument/BBG-LCD-Cape-with-Resistive-Touch/raw/master/img/HDMI-config.png)

4. Reboot system. LED is blinking and you will see this window

![](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green_HDMI_Cape/master/img/Bbb_vnc.jpg)

## Resources
---------

- **[Schematic]** [Schematic files](http://statics3.seeedstudio.com/assets/file/bazaar/product/5INCH_BBG_00A2_SCH.pdf)

