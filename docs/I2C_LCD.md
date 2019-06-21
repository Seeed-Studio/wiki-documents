---
name: I2C LCD
category: Display
bzurl: https://www.seeedstudio.com/I2C_LCD-%28With-universal-Grove-cable%29-p-2601.html
oldwikiname: I2C_LCD
prodimagename: I2C_LCD_WIKI_1.jpg
surveyurl: https://www.research.net/r/I2C_LCD
sku: 114990279
tags: grove_i2c, io_5v, plat_duino, plat_linkit
---

![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg)

I2C_LCD is an easy-to-use display module, It can make display easier. Using it can reduce the difficulty of make, so that makers can focus on the core of the work.

We developed the Arduino library for I2C_LCD, user just need a few lines of the code can achieve complex graphics and text display features. It can replace the serial monitor of Arduino in some place, you can get running informations without a computer.

More than that, we also develop the dedicated picture data convert software (bitmap converter)now is available to support PC platform of windows, Linux, Mac OS. Through the bitmap convert software you can get your favorite picture displayed on I2C_LCD, without the need for complex programming.

I2C_LCD can provide you with a very convenient way of make. Enjoy yourself!

###Product Version

| Version 	| How to buy	|
|-----------|---------------|
|I2C_LCD (With universal Grove cable)|[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|
|I2C_LCD (With conversion Grove cable)|[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|

##Features

* Only 2 Arduino pins are occupied (Use I2C interface).
* Supports standard I2C mode (100Kbit/s) and fast I2C mode (400Kbit/s).
* Compatible with multiple communication logic levels: 2.8~5VDC.
* Arduino library supported, use a line of code to complete the display.
* Integrate 7 sizes of ASCll fonts, 5 graphics functions.
* Provide dedicated picture data convert software (Bitmap Converter).
* Most of the complex operation is processed by I2C_LCD independent controller, saving user controller resources.
* Supports cursor function, can set up 16 cursor flicker frequency.
* Supports 128 level backlight lightness adjustment.
* Support 64 level screen contrast adjustment.
* Support device address modification.
* Supports 127 I2C_LCD work in parallel.
* When debugging code, it can take the place of the serial monitor to monitor the program running state.
* Two abnormal recovery methods are provided: reset and restore the factory settings.
* Compatible with Grove interface and 4Pin-100mil interface (under the Grove socket).
* 4 symmetrical fixed hole design for easy user installation.
* China style unique appearance.


##Platforms Supported


##Interface Function

![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg)

##Specification
|Parameter|Value|
|---------|-------------|
|Screen Type|Dual colour LCD|
|Screen Resolution|128*64 Pixels|
|Screen Active Area (L*W)| 47.1*26.5mm|
|Individual Pixel Size|0.33*0.33mm|
|Communication Mode|I2C(100Kbit/s and 400Kbit/s)|
|Controller|STM8S005KBT6|
|Operating Frequency|16 MHz|
|Weight|20g|

##Electrical Characteristics
|Parameter|Min.|Typical|MNax.|Unit|
|---------|------|------|------|------|
|Supply voltage（5V to GND）|4.5|5|5.5|V
|Logic Voltage（SCL/SDA）|2.8|5|5.5|V
|HBM ESD|-|5000|-|V
|Temperature|-20|25|70|℃


##Application Ideas

Here is some funny project for your reference.

|Display Picture|Clock With Calendar|Used As Debuger|
|-------|-------|-------|
|![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/BitmapDisplay_p1.png)|![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/ClockWithCalendar_p1.png)|![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/debugWithMe_p1.png)|
| [Make it Now](http://www.instructables.com/id/Display-Picture-Or-Icon-On-the-fancy-I2CLCD/) | [Make it Now](http://www.instructables.com/id/Beautiful-and-practical-clock-with-calendar/) | [Make it Now](http://www.instructables.com/id/Use-I2CLCD-to-Debug-Your-Project-1/ )|


|Automatic Humidifier|Snake Game|
|-------|-------|
|![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/AutomaticHumidifier.png)|![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/DIY_SnakeGame.png)|
| [Make it Now](http://www.instructables.com/id/DIY-a-Simple-Automatic-Humidifier/) | [Make it Now](https://community.seeedstudio.com/project_detail.html?id=1621)|



##Getting Started

**Step 1:** Install the latest version of Arduino IDE to your computer.

[![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_Stalker_V3_1/master/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Step 2:** Download and install the I2C_LCD library to Arduino IDE:

Open Arduino IDE, **click Sketch -> Include library -> Add .ZIP library**.

![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg)

Find and select the **I2C_LCD.zip** file you just downloaded.

![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg)

Restart the Arduino IDE.

**Step 3:** Chose the example project which you like. (Take "HelloWorld" project for example here.)

**Click File > Examples > I2C_LCD > HelloWorld**

![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg)

**Step 4:** Connect I2C_LCD to your Seeeduino Vx board with Grove cable. Then connect Seeeduino Vx board to your computer.

![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg)

**Step 5:** Select your board and serial port.

Select the board: **Click Tools > Board > "Arduino Duemilanove or Diecimila"(Seeeduino V3.0 Or early version), "Arduino Uno"(Seeeduino Lotus or Seeeduino V4.0)**.

![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg)

Select the COM: **Click Tools -> Serial Port -> COMX(which connected with your board.)**

![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg)

**Step 6:** Upload the program and **enjoy yourself!**

![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg)

**PS:**

1. For more details about library install please refer to http://www.arduino.cc/en/Guide/Liaries.
2. If you encounter other problems during the use, please refer to the User Manual for help. If you can't solve it, please contact us.

**Technical support:** Joney.s@foxmail.com

##Version Tracker
**I2C_LCD Hardware:**

| Revision 	| Release Note	| Release Date	|
|-----------|---------------|---------------|
|I2C_LCD_v1.2| 1. Add production test point. |Sep 18, 2015|
|I2C_LCD_v1.1| 1. Modify the logo position. 2. Modify the board shape. 3. Modify the button position. |May 8, 2014|
|I2C_LCD_v1.0| 1. Modify the power circuit wiring. |Mar 1, 2014|
|I2C_LCD_v0.9b| 1. Initial public release. |Feb 15, 2014|

**I2C_LCD Library:**

| Revision 	| Release Note	| Release Date	|
|-----------|---------------|---------------|
|I2C_LCD_v1.21| Support LinkIt boards. |Aug 21, 2016|
|I2C_LCD_v1.20| Reorganize I2C_LCD driver interface, make it easy to transplant to any other boards. |Apr 16, 2016|
|I2C_LCD_v1.12| Modify the bug that can't display bitmap when y coordinate is more than 16.|Sep 4, 2015|
|I2C_LCD_v1.11| Modify the bug that '\t' can't print.|Jun 27, 2015|
|I2C_LCD_v1.10| 1.Add LCD print function. 2.Edit DeviceAddressConfig example.|Jun 25, 2015|
|I2C_LCD_v1.0| Initial public release. |July 6, 2014|

##Resources

Keeping update the latest version.

The [repository of Arduino library hosted here](https://github.com/SparkingStudio/I2C_LCD_library), if you have any good idea of the code, you can pull to us.

* [I2C_LCD Library](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD_Library.zip)
* [I2C_LCD User Manual EN](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_EN.zip)
* [I2C_LCD User Manual 中文](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_CN.zip)
* [BitmapConverter(ForWindows)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.rar)
* [BitmapConverter(ForMacOS)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.dmg)
* [BitmapConverter(ForLinux)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.tar.gz)
* [I2C_LCD_SourceFile](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD12864_SourceFile.zip)
## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>