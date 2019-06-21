---
name: Grove Starter Kit for IoT based on Raspberry Pi
category: Raspberry Pi
bzurl: https://www.seeedstudio.com/Microsoft-IoT-Grove-Kit-(Azure-Certified)-p-2694.html
prodimagename: cover.jpg
sku: 110060482
---

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/cover.jpg)

Building an IoT project on your Raspberry Pi has never been an easy task for many developers. This is due to the messy hardware connections involved, and complicated software programming. Seeed and Microsoft have worked together to alleviate some of these challenges by introducing the Microsoft IoT Grove Kit.

The GrovePi+ cape included in the kit is fully compatible with your Raspberry Pi 3 and Raspberry Pi 2 that both run Windows 10 IoT Core. With the easy-to-use Grove system, you are now able to connect up to 15 Grove modules to your Raspberry Pi simply through the Grove interfaces on the GrovePi+.

In addition to the high performance sensors and actuators, the kit contains a 5 inch HDMI Display and a RGB LCD with a backlight. The Microsoft IoT Grove Kit is a powerful platform on which to begin your exploration on the Internet of Things.

Please note this kit DOES NOT include the Raspberry Pi board. Please visit [here](https://www.seeedstudio.com/Boards-for-Raspberry-pi-c-25.html) to purchase separately.

!!!Note
    GrovePi+ and some of the code was designed by [Dexter Industry](http://www.dexterindustries.com/).  Click to get more information about Dexter.

[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](http://www.seeedstudio.com/Microsoft-IoT-Grove-Kit-(Azure-Certified)-p-2694.html)

## Features
* Easy-to-use GrovePi+ that is compatible with Raspberry Pi B/B+/A+/2/3
* Plug-n-play Grove Modules for rapid prototyping

## Part List

| SKU | Part Name | Qty | Link |
|------|--------------|------|-------|
|103010002 | GrovePi+ | 1 | [Get One Now](https://www.seeedstudio.com/item_detail.html?p_id=2241) |
|104990243| 5 Inch HDMI Display with USB TouchScreen | 1 | [Get One Now](https://www.seeedstudio.com/5-Inch-HDMI-Display-with-USB-TouchScreen-p-2638.html) |
|103020005| Grove - Relay | 1 | [Get One Now](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|101020011| Grove - Temp&Humi Sensor| 1 | [Get One Now](https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html) |
|101020010| Grove - Ultrasonic Ranger | 1 | [Get One Now](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|104020006| Grove LED Bar v2.0 | 1 | [Get One Now](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|101020048| Grove - Rotary Angle Sensor(P)| 1 | [Get One Now](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor%28P%29-p-1242.html) |
|107020000| Grove - Buzzer| 1 | [Get One Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|101020023| Grove - Sound Sensor| 1 | [Get One Now](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020014 | Grove - Light Sensor v1.2 | 1 | [Get One Now](http://www.seeedstudio.com/Grove-%E2%80%93-Light-Sensor-%28P%29-v1.1-p-2693.html) |
|101020003| Grove - Button| 1 | [Get One Now](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|104030001| Grove - LCD RGB Backlight| 1 | [Get One Now](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html) |
|109990056| HDMI Cable| 1 | [Get One Now](https://www.seeedstudio.com/Flat-HDMI-Male-to-Male-Cable-1M,Support-3D-For-HDTV-computer-&-tablets-cable-p-2142.html) |
|321010007| Micro USB Cable - 48cm| 1 | [Get One Now](https://www.seeedstudio.com/Micro-USB-Cable-1200px-p-1475.html) |


## Hardware connection for GrovePi+

**1.1	Connecting the GrovePi+ to the Raspberry Pi**

First, mount your GrovePi+ on the Raspberry Pi. The GrovePi+ slides over top of the
Raspberry Pi as shown in the picture below.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/1_1_1.png)

Ensure that the pins are properly aligned when stacking the GrovePi+.

**Powering up the Raspberry Pi**

To power the GrovePi+ and the Raspberry Pi, you can use the micro USB power port on the Raspberry Pi.
Remember to use a good power adapter capable of supplying 2A at 5V. If you want to run the GrovePi+ in a standalone configuration, then you might find a USB power bank.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/1_2_1.png)


## Install GrovePi C# library for Raspberry Pi

The GrovePi can be programed in C#, but first you should install the Windows 10 IoT C# driver library for GrovePi, There’re two ways to do this: install the NuGet package and use the GrovePi C# library code powered by Dexter .

**Install the NuGet package**

The GrovePi NuGet package for the current release is available.
To install GrovePi for Windows IoT follow the following steps.

**STEP1.**

From the Tools menu, select Library Package Manager and then click Package Manager Console.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/2_1_1.png)

The **Package Manager Console window** is displayed.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/2_1_2.png)

**STEP2.**

Run the following command in the Package Manager Console.

    PM> Install-Package GrovePi

More details at [https://www.nuget.org/packages/GrovePi/](https://www.nuget.org/packages/GrovePi/).


**Use the GrovePi C# library code**

If you’re a senior programmer or you can’t install the GrovePi NuGet package successfully, you can download the library code by click this [https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp](https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp).

**STEP1.**

Move the two C# library projects “GrovePi” and “Driver” to the folder where your project resides. And add them to your project in Solution Explorer.
For example, right click the Solution “GrovePiExamples ”, Add | Existing Project, as below shows.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/2_2_1.png)

Then add “GrovePi” and “Driver” to the Solution Explorer.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/2_2_2.png)


**STEP2.**

Set the C# library as the reference projects. Right click References and click Add References

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/2_2_3.png)

Click Projects | Solution, and check box as shown in the red box below. Then click OK.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/2_2_4.png)

Now, you have already install the GrovePi C# library successfully.

All supported sensors are available through the DeviceFactory class.

**Examples**

Below are some simple examples of how to use the library.

 * **Measure Distance**

Ultrasonic sensor plugged into digital pin 2 (D2)

    var distance = DeviceFactory.Build.UltraSonicSensor(Pin.DigitalPin2).MeasureInCentimeters();

* **Display Hello World**

       DeviceFactory.Build.RgbLcdDisplay().SetText("Hello World").SetBacklightRgb(0, 255, 255);


* **Sound the buzzer**

Sound the buzzer plugged into digital pin 2 (D2).

    DeviceFactory.Build.Buzzer(Pin.DigitalPin2).ChangeState(SensorStatus.On);


## Running Win10 IoT Examples on Rpi3

Here we have a list of example projects that show just how easy it is to start a project with the Raspberry Pi. These Raspberry Pi projects combine easy-to-use Grove sensors with the powerful Raspberry Pi.
You can click [here](https://github.com/Seeed-Studio/GrovePiExamples_win10) to download the GrovePi Example code for win10. You will need to press the green button “Clone or download” on the right and choose “Download ZIP”. Then you need to extract the ZIP in a location of your choice.
Open the GrovePiExamples(win10).sln with your Visual Studio 2015, you can see there’re 12 projects in the Solution Explorer as the picture below shows.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/3_0_1.png)

Before you get started, please build **GrovePi** project first. This is because the other projects depend on it.

**Hello World from RGB LCD**

This example is meant to be your first project with the GrovePi+. All the parts used in this project are available in the GrovePi+ Starter Kit. Once mastered, you can move on to more complicated projects like connecting a display or other sensors to the Raspberry Pi.

- **Step1:** Set the HelloWorld(LCD) project as StartUp Project.
- **Step2:** Hardware connection.

Connect the RGB LCD to Port I2C-1 and power on the Raspberry Pi using the Grove wire connector.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/3_1_1.png)

- **Step3:**  Deploy your app.

1)	With the application open in Visual Studio, set the architecture in the toolbar dropdown. Select ARM.

2)	Next, in the Visual Studio toolbar, click on the Local Machine dropdown and select Remote Machine.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/3_1_2.png)

3)	At this point, Visual Studio will present the Remote Connections dialog. If you previously used [PowerShell](http://ms-iot.github.io/content/en-US/win10/samples/PowerShell.htm) to set a unique name for your device, you can enter it here (in this example, we’re using my-device). Otherwise, use the IP address of your Windows IoT Core device. After entering the device name/IP select None for Windows Authentication, then click Select.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Microsoft_IoT_Grove_Kit/master/images/3_1_3.png)

4)	You can verify or modify these values by navigating to the project properties (select Properties in the Solution Explorer) and choosing the Debug tab on the left.

When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.
The HelloWorld app will deploy and start on the Windows IoT device, and you will see the HelloWorld form the Grove RGB LCD.


**Grove Rotary Angle Sensor**

This example can be set up the same way as HelloWorld(LCD).

* **Step1:** Set the GroveAngleSensor project as StartUp Project.
* **Step2:** Hardware connection.
Connect the Grove Angle Sensor to Port A0 and connect Raspberry Pi to LCD screen by HDMI cable.
* **Step3:** Deploy your app. Refer to the HelloWorld(LCD) example of Step3.

When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.
The GroveAngleSensor app will deploy and start on the Windows IoT device. You can see the Grove Angle Sensor value on the LCD Screen.


**Grove LED Bar**


This example can be set up the same way as HelloWorld(LCD).

* **Step1:** Set the GroveLedBar project as StartUp Project.
* **Step2:** Hardware connection.
Connect the Grove Led Bar to Port D5.
* **Step3:** Deploy your app. Refer to the HelloWorld(LCD) example of Step3.

When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.
The GroveLedBar app will deploy and start on the Windows IoT device. You can see the Grove Led Bar will be lighted up in cycle.

**Grove - Light Sensor**

This example is the same use as HelloWorld(LCD).

* **Step1**: Set the GroveLightSensor project as StartUp Project.
* **Step2**: Hardware connection.
Connect the Grove Light Sensor to Port A2 and connect Raspberry Pi to LCD screen by HDMI cable.
* **Step3**: Deploy your app. Refer to the HelloWorld(LCD) example of Step3.

When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.
The GroveLightSensor app will deploy and start on the Windows IoT device. You can see the Grove Light Sensor value on the LCD Screen.

**Grove - Relay**

This example is the same use as HelloWorld(LCD).

* **Step1**: Set the GroveRelay project as StartUp Project.
* **Step2**: Hardware connection.
Connect the Grove Relay to Port D2.
* **Step3**: Deploy your app. Refer to the HelloWorld(LCD) example of Step3.

When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.
The GroveRelay app will deploy and start on the Windows IoT device. You can see the Grove Relay will open and close every 1 second.

**Grove - Sound Sensor**

This example is the same use as HelloWorld(LCD).

* **Step1**: Set the GroveSoundSensor project as StartUp Project.
* **Step2**: Hardware connection.
Connect the Grove Sound Sensor to Port A1 and connect Raspberry Pi to LCD screen by HDMI cable.
* **Step3**: Deploy your app. Refer to the HelloWorld(LCD) example of Step3.

When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.
The GroveSoundSensor app will deploy and start on the Windows IoT device. You can see the Grove Sound Sensor value on the LCD Screen.


**Grove - Temperature and Humidity Sensor**

This example is the same use as HelloWorld(LCD).

* **Step1**: Set the GroveTempAndHumi project as StartUp Project.
* **Step2**: Hardware connection.
Connect the Grove Temp & Humi Sensor to Port D3 and connect Raspberry Pi to LCD screen by HDMI cable.
* **Step3**: Deploy your app. Refer to the HelloWorld(LCD) example of Step3.

When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.
The GroveTempAndHumi app will deploy and start on the Windows IoT device. You can see the Temperature and Humidity value on the LCD Screen.

**Grove - Ultrasonic Ranger**

This example is the same use as HelloWorld(LCD).

* **Step1**: Set the GroveUltrasonicSensor project as StartUp Project.
* **Step2**: Hardware connection.
Connect the Grove Ultrasonic Ranger to Port D4 and connect Raspberry Pi to LCD screen by HDMI cable.
* **Step3**: Deploy your app. Refer to the HelloWorld(LCD) example of Step3.

When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.
The GroveUltrasonicSensor app will deploy and start on the Windows IoT device. You can see the Distance value on the LCD Screen.

**Home Weather Display**

This example is the same use as HelloWorld(LCD).

* **Step1**: Set the HomeWeatherDisplay project as StartUp Project.
* **Step2**: Hardware connection.
Connect the Grove Temp and Humi Sensor to Port D3, RGB LCD to Port I2C using the Grove wire connector.
* **Step3**: Deploy your app. Refer to the Blink example of Step5.

When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.
The Home Weather Display app will deploy and start on the Windows IoT device, and you can see the temperature on the RGB LCD.


**All Modules in One Project**

This example is the same use as HelloWorld(LCD).

* **Step1**: Set the All_in_One project as StartUp Project.
* **Step2**: Hardware connection.
    * Grove - Relay > D2
    * Grove - Temp&Humi Sensor > D3
    * Grove - Ultrasonic Ranger > D4
    * Grove - LED Bar V2.0 > D5
    * Grove - Buzer > D6
    * Grove - Button > D7
    * Grove - Rotary Angle Sensor > A0
    * Grove - Sound Sensor > A1
    * Grove - Light Sensor > A2

Connect the Grove Modules to GrovePi+ as the table shows. And connect Raspberry Pi to LCD screen by HDMI cable.

* **Step3**: Deploy your app. Refer to the HelloWorld(LCD) example of Step3.

When everything is set up, you should be able to press F5 from Visual Studio. If there are any missing packages that you did not install during setup, Visual Studio may prompt you to acquire those now.
The All_in_One app will deploy and start on the Windows IoT device.
You can see the Distance Sound Light value and relay state on the LCD Screen. The angle sensor will be shown as the chart on the screen. The Led Bar indicates the value of angle sensor. Press the Button and hold it, the Grove Relay will open.


## See Also

* [Windows Dev Center](https://dev.windows.com/en-us/iot)
* [GrovePi C# Library Code](https://github.com/DexterInd/GrovePi/tree/master/Software/CSharp)
* [Example Code](https://github.com/Seeed-Studio/GrovePiExamples_win10)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>