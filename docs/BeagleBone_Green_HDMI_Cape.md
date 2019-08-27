---
name: BeagleBone Green HDMI Cape
category: BeagleBone
bzurl: https://seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html
oldwikiname: BeagleBone_Green_HDMI_Cape
prodimagename: BeagleBone_Green_HDMI_Cape.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/103030034 1.jpg
surveyurl: https://www.research.net/r/BeagleBone_Green_HDMI_Cape
tags: plat_bbg
sku: 103030034
---

![](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green_HDMI_Cape/master/img/BeagleBone_Green_HDMI_Cape.jpg)

**BeagleBone Green HDMI Cape** is a general integrated HDMI connector for expanding your BeagleBone to a rich variety of peripherals such as computer monitor, video projector, digital television, or digital audio device. This board features a standard HDMI receptacle that can be connected to a monitor with a standard HDMI-to-HDMI cable. All HD signals are supported, and the output resolution is 1280×720. It also can be used to transmit audio information. This product will make your applications based on BeagleBone board more versatile for different circumstances.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/BeagleBone-Green-HDMI-Cape-p-2570.html)

Features
--------

-   Plug and play.
-   Adapter to different input signal.
-   720P(1280×720) output resolution.

Specifications
-------------

| Parameter                | Value                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| Input voltage            | 5V/3.3V                                                                                                |
| Maxium operating current | 80 mA                                                                                                  |
| HDMI version             | Version 1.2                                                                                            |
| Maxium Output resolution | 1280x720 @60Hz                                                                                         |
| Audio transmission       | Available                                                                                              |
| Chip                     | IT66121 HDMI Framer([Datasheet](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green_HDMI_Cape/master/res/IT66121FN_Datasheet_v1.02.pdf)) |

Platforms Supported
-------------------

Application ideas
-----------------

You can expand your BeagleBone to more multimedia peripherals such computer monitor, video projector, digital television, or digital audio device.

Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green_HDMI_Cape/master/img/BeagleBone_Green_HDMI_Cape_Componentss.jpg)


**IT66121 HDMI Framer**

   - HDMI Transmitter

**Cape I2C address Switch**

   - To switch between different cape address identifier.

**Cape EEPROM**

   - EEPROM memory for this cape.

**HDMI Connector**

### Parts list

|                            |          |
|----------------------------|----------|
| **Parts name**             | Quantity |
| BeagleBone Green HDMI Cape | 1        |

Getting Started
-----------

***This part will show you how to start with this product in a few steps.***

### Preparations

-   BeagleBone Green board × 1.
-   USB cable (type A to micro type B) × 1.
-   Standard HDMI cable(type A to type A) × 1.

### Hardware Connection

- Step 1. Please follow below picture to connect the hardware.
![](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green_HDMI_Cape/master/img/BeagleBone_Green_HDMI_Cape_Connection_1200_s.jpg)

- Step 2. Plug USB cable(type C end) to your PC.

### Software

- Step 1. Please download [Debian 8.10 2018-02-01 4GB SD SeeedStudio IoT](https://debian.beagleboard.org/images/bone-debian-8.10-seeed-iot-armhf-2018-02-01-4gb.img.xz) image from beaglebone.org.
- Step 2. Please use the [Etcher](https://etcher.io/) to burn images to SD cards. 
- Step 3. We can see the linux command line on the screen.
- Step 4. If we want to use the graphic UI. Please follow below instructions to install lxde.

```
sudo apt-get update 
sudo apt-get install lxde lxde-core lxde-icon-theme
```


#### Trouble shooting

1. No BeagleBone desktop operation system is shown on the computer monitor? Try one of following steps.

    - Power down the monitor and restart it.
    - Press RESET button on BeagleBone Green board.
    - Press POWER button on BeagleBone Green board and then press it again.


    ![](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green_HDMI_Cape/master/img/Beaglebone-Green_s.jpg)

2. The computer mouse does not work(not powered)?
    -   Press RESET button on BeagleBone Green board and wait it to launch.

3. How disassemble BeagleBone Green HDMI Cape quickly?
    -   Pull(with your hand) the end with HDMI receptacle out first, then pull the other end out. Repeat previous two steps again if it is necessary.


4. If the lxde Graphic keeps asking the wicd password, please follow below instructions. 

    - Step 1. Please ingore it.
    - Step 2. Open the terminal, run below commands.

    ```
    rm /etc/resolv.conf
    ln -s /run/resolvconf/resolv.conf
    rm /var/lib/wicd/resolv.conf.orig
    ln -s /run/resolvconf/resolv.conf /var/lib/wicd/resolv.conf.orig
    sudo service wicd start
    sudo reboot
    ``` 

    - Step 3. Please use the wicd graphic tool to connect to wifi.
    - Step 4. We can use wifi, SSH tools. 


Demo
----

This [video](https://www.youtube.com/watch?v=-xvbXSd_9TY&feature=youtu.be) shows how to use BeagleBone Green HDMI Cape to surfing Internet and play audio.

Resources
---------

- [Schematic files](https://raw.githubusercontent.com/SeeedDocument/BeagleBone_Green_HDMI_Cape/master/res/Schematic_Files.zip)
- [HDMI Cape Beaglebone Image](https://drive.google.com/open?id=15wXOtG4pZMifNoldoSvdOX9sBrev733L)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>