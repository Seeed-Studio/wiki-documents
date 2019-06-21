---
name: Xadow Tutorial - Communicate via BLE
category: RePhone
oldwikiname: Xadow tutorial-Communicate via BLE
surveyurl: https://www.research.net/r/Xadow_Tutorial_Communicate_via_BLE
---

Have you ever thought this scene: Open phone, I can see the current barometric pressure or motion acceleration. the Xadow module can help you achieve this.

For this demo, you need to use the

*   Xadow Main Board

*   Xadow OLED

*   Xadow Accelerometer

*   Xadow BLE Slave

If you have learned to achieve Demo 1 and Demo 2, you just need to connect the Xadow Main Board, Xadow OLED, Xadow Accelerometer and Xadow BLE Slave modules and download [the code:BLE_Slave](https://github.com/SeeedDocument/Xadow_Tutorial_Communicate_via_BLE/raw/master/res/BLE_Slave.zip).

![](https://github.com/SeeedDocument/Xadow_Tutorial_Communicate_via_BLE/raw/master/img/BLEUsage.jpg)

Now you can open BLE_Slave INO file, compile and upload.

If you are just starting to use, please install Xadow driver referring to [here](/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board). And ready to download the library:[DigitalAccelerometer_ADX345](https://github.com/SeeedDocument/Xadow_Tutorial_Communicate_via_BLE/raw/master/res/DigitalAccelerometer_ADXL345.zip) and [sleep_FromArduino](https://github.com/SeeedDocument/Xadow_Tutorial_Communicate_via_BLE/raw/master/res/Sleep_FromArduino.zip) and put them on the libraries file of Arduino IDE by the path: ..\arduino-1.0.1\libraries after unzip._
Now you can open your phone's bluetooth for observing data. When the accelerometer value is changed, then the bluetooth serial  will display real-time data. Note that your phone's bluetooth should be bluetooth 4.0 (iphone4S or above)and you need to download bluetooth serial tools. For more information, please refer to [the usage of Xadow BLE Slave](/Xadow_BLE_Slave#Usage).

![](https://github.com/SeeedDocument/Xadow_Tutorial_Communicate_via_BLE/raw/master/img/Phone_and_BLE_Slave_Communicate.jpg)

You can see there are two commands(ledon and ledoff) in the phone screen. They are used to control the GREEN indicator state. Have a try!

##  Resources

[Demo3 BLESlave Code](https://github.com/SeeedDocument/Xadow_Tutorial_Communicate_via_BLE/raw/master/res/BLE_Slave.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>