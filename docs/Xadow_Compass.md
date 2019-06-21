---
name: Xadow - Compass
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Compass-p-1669.html
oldwikiname: Xadow - Compass
prodimagename: X_compass_01.jpg
surveyurl: https://www.research.net/r/xadow_compass
sku: 103040000
---
![](https://github.com/SeeedDocument/Xadow_Compass/raw/master/img/X_compass_01.jpg)

Xadow Compass is a 3-Axis Digital Compass which is a member of Xadow family. The module is based on a low field magnetic sensor HMC5883. It features 1° to 2° compass heading accuracy, and it is using I2C serial bus to communicate with your microcontroller. Xadow Compass is a useful tool for helping you to get the direction information.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Compass-p-1669.html)

## Specification
---
- Working voltage: 3.3V
- Linearity: 0.1(Max) ±% FS
- Resolution: 10 milli-gauss
- Mag Dynamic Range: ±1 ~ ±8 gauss
- IIC Address:
  - 7-bit address: 0x1E
  - 8-bit read address: 0x3D
  - 8-bit write address: 0x3C
- Operating Temperature: -30 ~ +85 °C
- Dimensions: 25.43mm x 20.35mm

## Demonstration
---
This demo is going to show you how to read raw data, how to calibrate the data with your local magnetic declination angle and how to get heading angle.

**Get the local magnetic declination**

Firstly, before any action you are going to take, you need to prepare a parameter you are going to use in your demo. That's your local magnetic declination.
- You can find it out in degree via the [magnetic declination webpage](http://www.magnetic-declination.com/). For example, mine is -2°37’, which is -2.617 degree.
- Then transfer it from degree to radians, and there you get the "declinationAngle". For example, in my case, declinationAngle = -2.617 / （2*π）= -0.0456752665 rad. Three significant figures are enough. So I would shorten it into -0.0456 rad. And this is the parameter you are going to replace the value of "declinationAngle" in the demo code with.

**Download code**
- Complete the hardware installation:
!!!Note
    When connect Xadow Compass to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module (see four corners of each Xadow module).
- Download the library file: [Digital Compass Library](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Compass), and install it to your Arduino Library. See [How to install Arduino Library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to learn the install method.
- Open the demo by the path:File -> Example -> Digital Compass -> HMC5883L_Example. Replace the value of variable "declinationAngle" with the one you've figured out already.

![](https://github.com/SeeedDocument/Xadow_Compass/raw/master/img/Xadow_Compass_Code.jpg)

- Upload the Code. Check the output result by opening the serial monitor.

![](https://github.com/SeeedDocument/Xadow_Compass/raw/master/img/Digital_Compass2.jpg)

## Resources
---
- [3-Axis Digital Compass HMC5883 Datasheet](https://github.com/SeeedDocument/Xadow_Compass/raw/master/res/HMC5883.pdf)
- [Xadow Compass Eagle File](https://github.com/SeeedDocument/Xadow_Compass/raw/master/res/Xadow_Compass_Eagle_File.zip)
- [Xadow Compass Library File](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Compass)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>