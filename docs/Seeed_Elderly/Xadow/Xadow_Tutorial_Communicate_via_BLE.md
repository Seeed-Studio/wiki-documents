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
