---
description: Edison_4WD_Auto_Robotic_Platform
title: Edison_4WD_Auto_Robotic_Platform 
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edison_4WD_Auto_Robotic_Platform
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform12.jpg)

The 4WD Auto Robotic Platform is a powerful mobile unit with the Intel Edison Arduino kit, to control this platform you have to use a smart phone or a computer with wifi capable to connect to its wifi accessible piont, open a web browser input the address [http://192.168.42.1:8000](http://192.168.42.1:8000) than a operation dashboard comes up. This is a primary project if you are a maker and ability to hack this platform welcome to do a stronger remake.

##  Getting Started

###  Part List

|Parts|Specification|Material|Quantity|
|-----|----|-----|-----|
|Bracket 1|200 * 35 * 20mm * 3.0mm|Aluminum|2|
|Bracket 2|135 * 35 * 20mm * 3.0mm|Aluminum|2|
|Angle Joint Structure|29 * 12 * 10mm * 2.0mm|Metal|4|
|Top Plate|200 * 132 * 1.5mm|Aluminum|1|
|Bottom Board|199 * 129 * 2.0mm|Acrylic|1|
|Battery Fixer|67 * 15 * 2.0mm|Acrylic|2|
|Upper Board|184 * 132 * 2.0mm|Acrylic|1|
|Wheel|Ф85mm * W31mm|Plastic &amp; Rubber|4|
|Shaft Coupler|for Ф4mm shaft|Metal|4|
|DC Motor|[Spec](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_Spec.pdf)|/|2|
|DC Motor (Encoder Included)|[Spec](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_with_Encoder_Spec.pdf)|/|2|
|Distance Holder|M3.0 * H45+6.0mm|Metal|4|
|Distance Holder|M3 × 10mm|Metal|4|
|Distance Holder|M2 * 10mm|Metal|3|
|Hexagon socket Countersunk Head Screw|M4.0 * H8.0mm|Metal|16|
|Cross Recessed Pan Head Screw|M4.0 * H8.0mm|Metal|4|
|Cross Recessed Pan Head Screw|M3 * 35mm|Metal|4|
|Cross Recessed Pan Head Screw|M3 * 8mm|Metal|30|
|Cross Recessed Pan Head Screw with Washer|M3.0 * H6.0mm|Metal|8|
|Screw, Spring Lock Washer and Plain Washer assemblies|M2 * 8mm|Metal|6|
|Hexagon Nut|M3|Metal|8|
|Spring Lock Washer|M4|Metal|4|
|Plain Washer|M3 * 7 * 0.5|Metal|4|
|Screw Driver|/|Metal &amp; Plastic|1|
|Hexagonal Head Wrench|/|Metal|1|
|[Grove - I2C Motor Driver](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)|/|PCB|1|
|[Base Shield V2](https://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=132_134)|/|PCB|1|
|[Grove - Universal 4 Pin Buckled 20cm Cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)|/|Cable|1|
|Dean Parallel Adapter|Plug|/|1|
|Male of Dean Power Cable|/|Cable|1|
|Dean to DC Power Cable|/|Cable|1|
|TRX to Dean Power Cable|/|Cable|1|
|Cable Tie|3 * 60mm|Plastic|3|
|Assembly Instruction|A4|Copy Paper|1|
  
###  How to Assemble It

[Assembly Instruction.pdf](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Assembly_Instruction_02.pdf)

**1.Assemble the main body.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_01.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_02.PNG)

**2.Connect the cables**

1) Below are the parts with cables to be connected, you need a 2.5mm Slotted head screwdriver to srew the motor driver.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble01.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble17.JPG)

2) Stick the aluminum heatsinks to the chips on the motor driver, and assemble the middle board.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble12.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble18.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble19.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble14.JPG)

3) Connect the motor driver，the motor group's black cables connect to "M1-" "M2-" and the red ones connect to "M1+" "M2+", connect the power cable,the black cable to "GND", the red one to "VS".

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble04.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble16.png)

4) Assemble the motor group into the main body, the motor in the same group must assemble to the same side. Use a nylon cable to tie up the wires,then plug the grove cable.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble05.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_03.PNG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble06.jpg)

5) Put on the middle board, the power cable and the grove cable were to across the right hole.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble07.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble08.jpg)

6) Plug the 1-to-2 power connector the battery adapter cable and the arduino board power cable, the grove cable connect to A0 pin of the Base Shield.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble09.jpg)

7) Carefully plug the battery connector to get power up, test if it was right done now, if no led light up you must check the problem.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble10.JPG)

8) Plug the USB cables to test the software.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble11.JPG)

**3.Continue assembling**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_03.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_04.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_05.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_06.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_07.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_08.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_09.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_10.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_11.PNG)

###  Development Environment

Although the Edsion Arduino can be programed by arduino IDE but for stronger development we got into the linux system to do some low level development. The most important resource is the mraa library which provided by Intel, things aren’t that idealized that there are difficulties in our early development, in order to build a convenient development Environment we copy the partition of rootfs out of the linux file system in which we have already configured all the needed resource and built the 4WD platform project. The only thing you should do to have this platform work is to flash a new firmware into Edison. If you want to know what we have done in the linux system and how to do your own project see the github repository:

[https://github.com/Seeed-Studio/Edison_WiFi_Car](https://github.com/Seeed-Studio/Edison_WiFi_Car)

####  For windows user

#####  Install tools

Follow the **Edison official web site getting started** to install required drivers and the terminal emulator PuTTy.

Download [dfu-util - Device Firmware Upgrade Utilities](http://dfu-util.sourceforge.net/releases/dfu-util-0.8-binaries.tar.xz) and extract the xz file to “C:\” or any other directory.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform22.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform21.png)

**Add Environment Variables**

Right click This PC  &gt;  Advanced system setting  &gt;  Environment Variables  &gt; copy the path of dfu-util.exe to catch the “Path” environment variable.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform22.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform23.png)

#####  Flash new firmware

**1.Download and unzip**

[Download customized firmware from seeed wiki](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip)

[Download customized firmware from onedrive](https://onedrive.live.com/?cid=b24d52d93861663f&amp;id=B24D52D93861663F%212178&amp;ithint=file,7z&amp;authkey=!AIH0ajk2jCZzTFE)


**2.Use the PuTTy**

Follow the official Edison Getting Started Guide to log in edison with PuTTy.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform25.png)

**3.Flash firmware**

Follow the below steps.

**Step 1. Double click flashall.bat**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform26.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform27.png)

**Step 2. Go to PuTTy input command line reboot or press the RESET button on the Edison Arduino board.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform28.png)

**Step 3. Flashing firmware**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform29.png)

**Step 4. Edison reboot and Wi-Fi Car service started.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform30.png)

**Step 5: Restart the power**

Disconnect and reconnect the battery.

####  For Mac user

See [Intel Edison official web site](https://communities.intel.com/docs/DOC-23193)  "Alternate Flashing Method".

####  For Linux user

**1.Download customized image**

<pre>
&gt;&gt;wget https://www.seeedstudio.com/wiki/images/a/a6/Edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip
&gt;&gt;unzip edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip
&gt;&gt;7z x edison-image-rel1-maint-rel1-ww42-14-for-wificar.7z
</pre>

**2.Flash image**

1)Intall dfu-util

<pre>
sudo apt-get install dfu-util
</pre>

2)Check which device is for edison:

<pre>
&gt;&gt;ls /dev/ttyUSB*
</pre>

3)Open serial terminal

<pre>
&gt;&gt;sudo screen /dev/ttyUSB0 115200
</pre>

4)Run flashall.sh

<pre>
&gt;&gt;cd edison-image-rel1-maint-rel1-ww42-14-for-car
&gt;&gt;sudo ./flashall.sh
</pre>

5)Goto edison type in reboot

<pre>
&gt;&gt;reboot
</pre>

###  Application

Now use a smart phone or computer to search the WiFi accessible point, the SSID was named in a unique serier numbers by the S/N id on every edison main board like EDIOSN-FZED445001UCV501, and the passphrase is 12345678.
After connected to the WiFi, open any web browser visit **http://192.168.42.1:8000** you’ll see a dashboard with which to controll the 4WD Platform.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform15.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform13.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform14.png)

[Wi-Fi car Android apk](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/WiFiCarcn.xiongyihui.wificar2.apk.zip)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform33.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform34.png)

###  How to program it

Navigate to /usr/share/car you’ll see the project, these files are:

<pre>
&gt;&gt;cd /usr/share/wificar
&gt;&gt;ls
</pre>

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform31.png)

<table  cellspacing="0">
<tr>
<th scope="col"> car.py
</th>
<td> Car action class
</td></tr>
<tr>
<th> car_httpd.py
</th>
<td> Webserver process
</td></tr>
<tr>
<th> i2c_motor.py
</th>
<td> The i2c Motor driver
</td></tr>
<tr>
<th> softi2c.py
</th>
<td> The softi2c driver for Edison
</td></tr>
<tr>
<th> www
</th>
<td> Webserver source file
</td></tr></table>

###   Enhancement - two Motor Driver

**1. The wiring.**

Here you'll need a wire stripper a soldering iron and scissors to cut down the motors' extension wires, and use one of them to make a new one-to-two motor power cable.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring09.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring02.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring10.JPG)

**2. Assemble**

**Step 1. Connect the motors.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring01.JPG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble16.png)

**Step 2.Assemble the motor and the motor driver，pay attention to the yellow arrows, two motor drivers are screwed with only two screw.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring13.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring11.png)

**Step 3.Connect the power wire and two grove cables.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring06.JPG)

**Step 4. Put on the middle board.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring07.JPG)

**Step 5. Plug the grove cables to D4(D4,D5)  D8(D8,D9) with no special definition, test the connection by plug the battery.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring08.JPG)

**3. Software modification**

Goto the virtual terminal open car.py do the below change.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring14.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring15.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring16.png)

##  FAQ

1.If you have connected the Edison’s WiFi and the dashboard was shown but can’t controll the rover.

A:Try to restart the power.

2.The two USB ports on Edison Arduino board were blocked by a wheel what to do to connect USB cables?

A:You have to take down the wheel when you want to connect USB cables. If you want only to visit the linux system you can connect its WiFi AP and visit via SSH tools, the PuTTy is capable of SSH .

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform33.jpg)

3.Have run the Wi-Fi car server and smart phone received the dashboard but can’t controll the rover. Why?

A:The i2c Motor Driver has a bug that if a complete byte of orders sending was interrupted the motor driver will lose controll. You have to reset the driver board by pressing the reset button on it.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform32.png)

##  Support

*   [github-Edison_WiFi_Car](https://github.com/Seeed-Studio/Edison_WiFi_Car)

*   [The Intel Edsion official web site](https://www.intel.com/content/www/us/en/do-it-yourself/edison.html)

*   [Edison - Software Downloads](https://communities.intel.com/docs/DOC-23242)

*   [Intel official Forum](https://communities.intel.com/community/makers/edison/forums)

*   [intel-iot-devkit/mraa](https://github.com/intel-iot-devkit/mraa)

*   [Intel Edison Getting Start](https://communities.intel.com/docs/DOC-23147)

*   [Flashing Edison(wired) - Windows(Mac, Linux)](https://communities.intel.com/docs/DOC-23192)

*   [Edison 4WD Auto Robotic Platform DC Motor Spec](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_Spec.pdf)

*   [Edison 4WD Auto Robotic Platform DC Motor with Encoder Spec](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_with_Encoder_Spec.pdf)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
