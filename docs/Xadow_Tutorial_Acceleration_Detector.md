---
name: Xadow Tutorial - Acceleration Detector
category: RePhone
oldwikiname: Xadow tutorial-Acceleration detector
surveyurl: https://www.research.net/r/Xadow_Tutorial_Acceleration_Detector
---

We have made an acceleration detector, it detects the acceleration and reminds users by vibrating. When the acceleration changes, the Xadow Vibration will vibrate and the Oled will display the accelerometer value. You can also see the current battery voltage on the OLED display.

This demo required:


*   [Xadow Main Board](/Xadow_Main_Board/)

*   [Xadow OLED](/Xado_OLED_128multiply64)

*   [Xadow Vibrator Motor](http://wiki.seeedstudio.com/Xadow_Vibrator_Motor/)

*   [Xadow Accelerometer](/Xadow_3_Aixs_Accelerometer/)


![](https://github.com/SeeedDocument/Xadow_Tutorial_Acceleration_Detector/raw/master/img/Untitled2.jpg)

To complete the demo, you need to:

*   Connect Xadow Main Board,Xadow OLED, Xadow Vibrator and Xadow Accelerometer at the same direction with FFC cables.

*   Connect Xadow Main Board to PC with a Micro USB cable. Before uploading code, you need to install Xadow driver. Please click [here](/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board) to learn the specific operation.

*   When you see "Now, you can program and use the Xadow as you use other Arduino boards", it means you have finished the preparations.

*   Downloading [the file: acceleDetector Library](https://github.com/SeeedDocument/Xadow_Tutorial_Acceleration_Detector/raw/master/res/AccelerationDetector.zip) and directly open acceleDetector INO file.

!!!Note
    Before compiling, you should make sure that there are [the library:OLED_Display12864](https://github.com/SeeedDocument/Xadow_Tutorial_Acceleration_Detector/raw/master/res/OLED_Display12864.zip) and [sleep_FromArduino](https://github.com/SeeedDocument/Xadow_Tutorial_Acceleration_Detector/raw/master/res/Sleep_FromArduino.zip) in Arduino Library. If not, please download them and put them on the libraries file of Arduino IDE in the path: ..\arduino-1.0.1\libraries after unzip._

*   Compile code and upload it to xadow board. You need to select Seeed Xadow from the Tools | Board menu of the Arduino environment.
*   Then you can see the following picture:

![](https://github.com/SeeedDocument/Xadow_Tutorial_Acceleration_Detector/raw/master/img/Demo_1_effect_picture.jpg)

Change the acceleration value by shaking the sensor,you will see the sensor value on the OLED module

##  Resources

[Demo1 acceleDetectoe Code](https://github.com/SeeedDocument/Xadow_Tutorial_Acceleration_Detector/raw/master/res/AccelerationDetector.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>