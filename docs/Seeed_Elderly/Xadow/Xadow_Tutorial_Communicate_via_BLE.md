---
description: Xadow Tutorial - Communicate via BLE
title: Xadow Tutorial - Communicate via BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Tutorial_Communicate_via_BLE
last_update:
  date: 1/13/2023
  author: shuxu hu
---
Have you ever thought this scene: Open phone, I can see the current barometric pressure or motion acceleration. the Xadow module can help you achieve this.

For this demo, you need to use the

*   Xadow Main Board

*   Xadow OLED

*   Xadow Accelerometer

*   Xadow BLE Slave

If you have learned to achieve Demo 1 and Demo 2, you just need to connect the Xadow Main Board, Xadow OLED, Xadow Accelerometer and Xadow BLE Slave modules and download [the code:BLE_Slave](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip).

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/BLEUsage.jpg)

Now you can open BLE_Slave INO file, compile and upload.

<!-- If you are just starting to use, please install Xadow driver referring to [here](/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board). And ready to download the library:[DigitalAccelerometer_ADX345](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/DigitalAccelerometer_ADXL345.zip) and [sleep_FromArduino](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/Sleep_FromArduino.zip) and put them on the libraries file of Arduino IDE by the path: ..\arduino-1.0.1\libraries after unzip._ -->
<!-- Now you can open your phone's bluetooth for observing data. When the accelerometer value is changed, then the bluetooth serial  will display real-time data. Note that your phone's bluetooth should be bluetooth 4.0 (iphone4S or above)and you need to download bluetooth serial tools. For more information, please refer to [the usage of Xadow BLE Slave](/Xadow_BLE_Slave#Usage). -->

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/Phone_and_BLE_Slave_Communicate.jpg)

You can see there are two commands(ledon and ledoff) in the phone screen. They are used to control the GREEN indicator state. Have a try!

##  Resources

[Demo3 BLESlave Code](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
