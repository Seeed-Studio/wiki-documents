---
title: Micro:bit Wiki Page
category: 
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 
tags:
---


## Micro:bit Introduction

Hello, here is the Micro:bit feature page, welcome. We are here to prepare a generous resource for Micro:bit. Includes Micro:bit accessories, Miro:bit kits, matching sensors, actuators. There are also a large variety of rich tutorials to help you with Micro:bit.

## Product List

1. [Micro:bit](https://www.seeedstudio.com/micro-bit-Telec-version-p-2946.html)
2. [Grove Shield for micro:bit v2.0](https://www.seeedstudio.com/Grove-Shield-for-micro-bit-v2-0-p-3083.html)
3. [Grove Inventor Kit for micro:bit](http://wiki.seeedstudio.com/Grove_Inventor_Kit_for_microbit/)

## Makk Code tutorial

### Play with OledDisplay

This is Makecode Grove - Oled Display(SH1107) package for micro:bit.

![image](https://user-images.githubusercontent.com/18615354/47497569-1b9c0c00-d88d-11e8-98fb-06a9d1d6b7a3.png)

#### Demo 1: Display numbers and strings

Let's start with a very simple program:

![](https://user-images.githubusercontent.com/18615354/47498729-b21dfc80-d890-11e8-8801-a08ebe25e58b.png)

- In this program, the second line `set oled to Create Oled Display` means we will create an object to use Oled Display, this step is important and nessary.
- Line `oled Clear display` means the display will be clear. This step is recommanded at the begin of a program.
- Line `oled Set display position at row 0 and column 0` is very useful. We can use this before `Display string` or `Dispaly integer number`, to set our display position. Note that there are 16 row and 128 column in Grove Oled Display, and `row 0, column 0` is at the upper left corner.

    ![image](https://user-images.githubusercontent.com/18615354/47498459-ec3ace80-d88f-11e8-96e3-3d4ccea0635e.png)

- Line `oled Display string "Hello!"` is to display a string "Hello!"

Try to download the program to your Microbit! Then you will find "Hello!" on the display. Now let's try a big program like this, and guess what will happen:

![image](https://user-images.githubusercontent.com/18615354/47500303-062ae000-d895-11e8-81d5-8d92c8e09509.png)


### Demo 2: Draw lines and rectangle

Let's draw 2 lines first:

![image](https://user-images.githubusercontent.com/18615354/47500608-d29c8580-d895-11e8-92be-66545c881f84.png)

- `oled Draw horizontal line start at x 0 and y 0, length 128` means draw a horizontal line. Please check the second picture of Demo 1, it also indicates the XY axis.


And draw a rectange by giving 2 XY coordinates.

![](https://user-images.githubusercontent.com/18615354/47501286-b4d02000-d897-11e8-9a52-a1eb826ba81a.png)


## Micro Python tutorial

### Play with Grove - ThumbJoystick

This is Makecode Grove - ThumbJoystick package for micro:bit.

![8](https://user-images.githubusercontent.com/18615354/47488634-54c98180-d877-11e8-861f-667e8b720334.jpg)


**Prepare**

Connecting a Grove - ThumbJoystick to Microbit is a bit tricky, but it is worth doing. So let's go!!

Firstly, we need to prepare a [Micro:bit](https://microbit.org/), a [Grove shield](https://www.seeedstudio.com/Grove-Inventor-Kit-for-micro-bit-p-2891.html), a tweezers(or needle), a scissors, a [Grove - Thumb Joystick](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html), and a [Grove - Branch Cable](https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pac-p-847.html).

**It is very very important to pay attention when using scissors and tweezers!**

![1](https://user-images.githubusercontent.com/18615354/47488623-52ffbe00-d877-11e8-824d-6f2254cb648c.jpg)


- **Step1**

As the pictures shown, the Grove - Branch Cable has 3 connectors. We name them `Conector#1`, `Conector#2` and `Conector#3`. Note that `Conector#2` and `Conector#3` have no differences at first. 

Then carefully pick the **white cable** out of `Conector#2` with a tweezers(or needle). 

![2](https://user-images.githubusercontent.com/18615354/47488624-53985480-d877-11e8-8cf9-d99b62482caa.jpg)


- **Step2**

Carefully pick the **yellow cable** and **white cable** out of `Conector#3` with a tweezers(or needle). 

![3](https://user-images.githubusercontent.com/18615354/47488628-53985480-d877-11e8-988c-32ed3ffe098f.jpg)


- **Step3**

**Be careful not to cut the wrong cable!!!**

Cut the **white cable** of `Conector#2` and the **yellow cable** of `Conector#3`. 

![4](https://user-images.githubusercontent.com/18615354/47488629-5430eb00-d877-11e8-9bb2-22f211ee23d5.jpg)


- **Step4**

Insert the **white cable** to the **first slot** of `Conector#3` as the picture shown.

![5](https://user-images.githubusercontent.com/18615354/47488630-5430eb00-d877-11e8-92a5-93d5df4be469.jpg)


- **Step5**

Almost done!

Now we connect `Conector#2` to `P0/P14` port  and `Conector#3` to `P1/P15` port of Grove shield.

![6](https://user-images.githubusercontent.com/18615354/47488631-5430eb00-d877-11e8-9782-2f8a0c326a6b.jpg)


- **Step6**

The last step! We connect `Conector#1` to Grove - Thumb Joystick and finish!

![7](https://user-images.githubusercontent.com/18615354/47488634-54c98180-d877-11e8-861f-667e8b720334.jpg)


#### Demo: 

Please refer the [ThumbJoystick python demo](https://github.com/Microbit-Grove-Library/mpy-ThumbJoystick) for the code part.



## Grove compatible with Micro:bit


|Name and link |SKU|
|---|---|
|[Grove - Speaker](https://www.seeedstudio.com/Grove-Speaker-p-1445.html)|107020001|
|[Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html)|103020005|
|[Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|104030005|
|[Grove - Button](https://www.seeedstudio.com/Grove-Button-p-766.html)|101020003|
|[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|107020000|
|[Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|101020010|
|[Grove - Button](https://www.seeedstudio.com/Grove-Button--p-1243.html)|111020000|
|[Grove - PIR Motion Sensor](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|101020020|
|[Grove - Green LED](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|104030007|
|[Grove - White LED](https://www.seeedstudio.com/Grove-White-LED-p-1140.html)|104030009|
|[Grove - Switch(P)](https://www.seeedstudio.com/Grove-Switch--p-1252.html)|101020004|
|[Grove - Water Sensor](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|101020018|
|[Grove - Blue LED](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|104030010|
|[Grove - Vibration Motor](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)|105020003|
|[Grove - Touch Sensor](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|101020037|
|[Grove - Magnetic Switch](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)|101020038|
|[Grove - 4-Digit Display](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html)|104030003|
|[Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)|101020025|
|[Grove - Multi Color Flash LED(5mm)](https://www.seeedstudio.com/Grove-Multi-Color-Flash-LED-5m-p-1141.html)|104030014|
|[Grove - Line Finder v1.1](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)|101020172|
|[Grove - Dry-Reed Relay](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html)|103020014|
|[Grove - Collision Sensor](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html)|101020005|
|[Grove - Variable Color LED](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html)|101020005|
|[Grove - Purple LED(3mm)](https://www.seeedstudio.com/Grove-Purple-LED-3m-p-1143.html)|104020002|
|[Grove - LED String Light](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)|104020005|
|[Grove - FM Receiver](https://www.seeedstudio.com/Grove-FM-Receiver-p-1841.html)|107020005|
|[Grove - EL Driver](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html)|105020005|
|[Grove - Solid State Relay](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html)|103020004|
|[Grove - Recorder v3.0](https://www.seeedstudio.com/Grove-Recorder-v3-0-p-2709.html)|107020029|
|[Grove - IR Distance Interrupter v1.2](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-v1-2-p-2767.html)|101020175|
|[Grove - IR Distance Interrupter](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|101020040|
|[Grove - Recorder](https://www.seeedstudio.com/Grove-Recorder-p-1825.html)|103020018|
|[Grove - Temperature Sensor](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|101020015|
|[Grove - Moisture Sensor](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html)|101020008|
|[Grove - Loudness Sensor](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html)|101020063|
|[Grove - Sound Sensor](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|101020023|
|[Grove - Rotary Angle Sensor(P)](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)|101020048|
|[Grove - Piezo Vibration Sensor](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|101020031|
|[Grove - Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)|101020132|
|[Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|101020017|
|[Grove - Slide Potentiometer](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)|101020036|
|[Grove - Luminance Sensor](https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html)|101020076|
|[Grove - Electricity Sensor](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html)|101020027|
||[Grove - Light Sensor (P) v1.1](https://www.seeedstudio.com/Grove-Light-Sensor-P-v1-1-p-2693.html)|101020173|
|[Grove - 80cm Infrared Proximity Sensor](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html)|101020042|
|[Grove - Mini Fan v1.1](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1-p-2685.html)|108020021|
|[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html)|101020014|
|[Grove - Mini Fan](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)|105020004|
|[Grove - Gesture](https://www.seeedstudio.com/Grove-Gesture-PAJ7620U-p-2463.html)|101020083|
|[Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121)](https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V2-MPR12-p-3141.html)|101020534|
|[Grove - Optical Rotary Encoder(TCUT1600X01)](https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder-TCUT1600X0-p-3142.html)|101020587|
|[Grove - 5-Way Switch](https://www.seeedstudio.com/Grove-5-Way-Switch-p-3136.html)|111020048|
|[Grove - 6-Position DIP Switch](https://www.seeedstudio.com/Grove-6-Position-DIP-Switch-p-3137.html)|111020043|
|[Grove - Mech Keycap](https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html)|111020049|
|[Grove - 8-Channel Solid State Relay](https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html)|103020136|
|[Grove - 4-Channel Solid State Relay](https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html)|103020135|
|[Grove - 2-Channel Solid State Relay](https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html)|103020134|
|[Grove - Solid State Relay V2](https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html)|103020137|
|[Grove - 4-Channel SPDT Relay](https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html)|103020133|
|[Grove - 2-Channel SPDT Relay](https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html)|103020132|
|[Grove - Round Force Sensor (FSR402)](https://www.seeedstudio.com/Grove-Round-Force-Sensor-FSR40-p-3110.html)|101020553|
|[Grove - Temperature, Humidity, Pressure and Gas Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-BME68-p-3109.html)|101020513|
|[Grove - I2C High Accuracy Temperature Sensor(MCP9808)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP980-p-3108.html)|101020556|
|[Grove - Blue LED Button](https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html)|111020046|
|[Grove - Yellow LED Button](https://www.seeedstudio.com/Grove-Yellow-LED-Button-p-3101.html)|111020045|
|[Grove - Red LED Button](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)|111020044|
|[Grove - Time of Flight Distance Sensor(VL53L0X)](https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0-p-3086.html)|101020532|
|[Grove - Digital Distance Interrupter 0.5 to 5cm(GP2Y0D805Z0F)(P)](https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0-5-to-5cm-GP2Y0D805Z0F--p-3085.html)|101020578|
|[Grove - Digital Distance Interrupter 0.5 to 5cm(GP2Y0D805Z0F)](https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0-5-to-5cm-GP2Y0D805Z0-p-3084.html)|101020533|
|[Grove - I2C FM Receiver v1.1](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-v1-1-p-3076.html)|107020049|
|[Grove - VOC and eCO2 Gas Sensor (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-SGP3-p-3071.html|)|101020512|
|[Grove - UART WiFi V2 (ESP8285)](https://www.seeedstudio.com/Grove-UART-WiFi-V2-ESP828-p-3054.html)|113020011|


## Resource

- **[PPT]** [Use microbit to control WS2812 LEDs](https://github.com/SeeedDocument/Micro-bit_start/raw/master/Use%20microbit%20to%20control%20WS2812%20LEDs.pptx)