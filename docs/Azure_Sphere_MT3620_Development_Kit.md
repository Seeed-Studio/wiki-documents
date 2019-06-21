---
name: Azure Sphere MT3620 Development Kit
category: Azure
bzurl:
oldwikiname: 
prodimagename: 
surveyurl:  
sku: 
---

![enter image description here](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/azure.jpg)

Azure Sphere MT3620 Development Kit is specially designed to support rapid prototyping and to enable developers to experience Azure Sphere technology. MT3620 is the first Azure Sphere certified MCU. Azure Sphere certified MCUs are a new class of secured, connected crossover microcontrollers. MT3620 features three user-accessible microcontroller cores: one ARM Cortex-A7 core and two general purpose ARM Cortex-M4F cores. The MT3620 is designed to support real-time requirements when interfacing with a variety of on-chip peripherals including GPIO, UART, I2C, SPI, I2S, PWM and ADC. It has a built-in security subsystem with its own dedicated CM4F core for secure boot and secure system operation, along with dual-band 802.11 b/g/n Wi-Fi.

Please note that the current Azure Sphere software release does not support all features of the MT3620 hardware, including the two general purpose ARM Cortex-M4F cores, some peripheral interfaces (ADC, I2C, I2S, PWM and SPI), Wi-Fi 802.11a, and RTC with clock selection and battery backup. For ADC and I2C, customers can use [MT3620 Grove Shield board](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html), which has a UART to I2C chip and a I2C12-bit ADC chip.

The MT3620 Development Kit has expanded most MT3620 hardware resources on the expansion pin headers, by wiring to breadboard or adding a shield board , user can easily connect to other hardware accessories.

The Azure Sphere operating system is pre-installed on the MT3620 and is designed to work with the Azure Sphere Security Service to create a secured IoT platform. Their features are：

- Certificate-based device authentication to any web service
- Software attestation and secure boot
- Threat detection via failure reporting
- Ongoing security updates
- An integrated, secured end-to-end IoT solution

MT3620 software development is supported using the powerful Microsoft Visual Studio IDE:
- Install [Visual Studio](https://visualstudio.microsoft.com/) (Support Community, Enterprise or Professional) and the Azure Sphere extension, plug the development board into a PC over USB, and start developing IoT applications with unprecedented levels of security.
- To use the MT3620 Dev Board for Azure Sphere, you’ll need a Windows 10 PC with the latest Windows Updates, along with [Azure Sphere software development kit](http://aka.ms/AzureSphereSDK) SDK. 

<iframe width="800" height="450" src="https://www.youtube.com/embed/iiDF26HNh-Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


|Product Name | How to Buy|
|----------------|-----------|
|Azure Sphere MT3620 Development Kit US Version|[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html)|
|Azure Sphere MT3620 Development Kit JP Version|[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-JP-Version-p-3135.html)|
|Azure Sphere MT3620 Development Kit EU Version|[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-EU-Version-p-3134.html)|

 
!!!Warning
    If you need help on version selection, please check the [Countries or regions available list](https://view.officeapps.live.com/op/view.aspx?src=https://statics3.seeedstudio.com/document/Available_country.docx) for more details.

## Features

- Azure Sphere: End-to-end security for IoT devices
- Dual-band 802.11 b/g/n with antenna diversity
- Tri-core microcontroller with on-chip RAM & flash
- Microsoft Visual Studio development environment
- Online authentication & updates for device lifetime

## Specification

**Hardware**

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-amwm{font-weight:bold;:center;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-baqh"><span style="font-weight:bold">Description</span></th>
    <th class="tg-baqh"><span style="font-weight:bold">Value</span></th>
  </tr>
  <tr>
    <td class="tg-amwm" rowspan="2"><br>MCU</td>
    <td class="tg-0lax">1 * ARM Cortex A7 core @500MHz , 4MB RAM</td>
  </tr>
  <tr>
    <td class="tg-0lax">2 * ARM Cortex M4 core @200MHz, 64KB RAM</td>
  </tr>
  <tr>
    <td class="tg-amwm" rowspan="5"><br><br><br><br>ISU</td>
    <td class="tg-0lax">4 * “ISU” serial interface which can be configured as:</td>
  </tr>
  <tr>
    <td class="tg-0lax">&nbsp;&nbsp;- I2C runs at up to 1MHz</td>
  </tr>
  <tr>
    <td class="tg-0lax">&nbsp;&nbsp;- SPI runs at up to 40MHz</td>
  </tr>
  <tr>
    <td class="tg-0lax">&nbsp;&nbsp;- UART runs at up to 3Mbps</td>
  </tr>
  <tr>
    <td class="tg-0lax">ISU is Serial Communication Interface</td>
  </tr>
  <tr>
    <td class="tg-amwm">Connectivity</td>
    <td class="tg-0lax">2.4/5GHz dual-band 802.11 b/g/n Wi-Fi</td>
  </tr>
  <tr>
    <td class="tg-amwm">I2S</td>
    <td class="tg-0lax">1 * I2S support slave and TDM slave mode</td>
  </tr>
  <tr>
    <td class="tg-amwm">ADC</td>
    <td class="tg-0lax">4 * 12-bit ADC input I/O</td>
  </tr>
  <tr>
    <td class="tg-amwm">RTC</td>
    <td class="tg-0lax">1 * RTC with CR2032 3V battery holder</td>
  </tr>
  <tr>
    <td class="tg-amwm">USB</td>
    <td class="tg-0lax">1 * Micro USB port for power supply and debugging, 5V/1A</td>
  </tr>
  <tr>
    <td class="tg-amwm">DC Jack</td>
    <td class="tg-0lax">1* 5V/1A DC power jack</td>
  </tr>
  <tr>
    <td class="tg-amwm">Operating Temperature</td>
    <td class="tg-0lax">-40~85°C</td>
  </tr>
  <tr>
    <td class="tg-amwm">Dimensions</td>
    <td class="tg-0lax">L:85mm*W:50mm*H:16mm</td>
  </tr>
  <tr>
    <td class="tg-amwm">Certification</td>
    <td class="tg-0lax">CE / FCC / MIC / RoHS</td>
  </tr>
</table>

**Software**

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <td class="tg-0pky">IDE</td>
    <td class="tg-0pky">Visual Studio</td>
  </tr>
  <tr>
    <td class="tg-0lax">System</td>
    <td class="tg-0lax">Windows10</td>
  </tr>
  <tr>
    <td class="tg-0lax">Programming Language</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>


## Hardware Overview

**Board Diagram**

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/Diagram.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/Diagram.png"/></a>

- **J1**: ADC Reference Voltage, On: using internal 2.5v; Off: Connect External 1.8v to Pin 1. Off by default. 
- **J2**: 3.3V Isolation, On: Enable system 3.3v power; Off: Cut off the system 3.3v power. On by default.
- **J3**: RTC Power Selection: Left 2 pins: Using RTC Battery(Model:CR2032) at backside.
- **4 User RGB LED**: LED model is LTST-C19HE1WT.
- **USB Port**: Power supply(5V/1A) and debug, connected to FT4232HQ chip at backside. 
- **4 System LED**: Led1(Near USB port): Green, FTDI Activity LED. Led2: RED, Power Indicator. Led3: RGB, Wifi Status. Led4: RGB, App Status.
- **DC Power**: 5V/1A
- **3 System Button**: Button A&B(White) are user botton. Button Reset(Blue) is System Reset.
- **MT3620**：The [MT3620](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf) is a highly integrated, high performance IoT MCU with the high level of security necessary for modern, robust internet-connected devices. The MT3620 targets a wide range of IoT applications including smart home, commercial, industrial and many other domains thanks to its extensive I/O peripheral subsystem that allows device design flexibility and freedom.
- **FT4232HQ**: The [FT4232H](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/datasheet/DS_FT4232H.pdf) is a USB 2.0 High Speed (480Mb/s) to UART/MPSSE ICs.

**Board Pinmap**

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/PinMap.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/PinMap.png"/></a>

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/H1_2.png)

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/H3_4.png)

**Dimensions**

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/dimension.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/dimension.png"/></a>

**Power**

Power to the Azure Sphere MT3620 Development Kit is supplied via the on-board USB Micro B connector or directly via the DC connector. 

- GPIO voltage is 3.3v, has a limited overhead of only 100mA available.
- 5v_out on H3 connector has a limited overhead of only 500mA available.
- 3.3v on H3 connector has a limited overhead of only 400mA available. 
- Typical average current consumption is 150mA with 5V Wi-Fi on. Wifi scan current is typically 330ma.

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/power.png)


**Hardware Design and Manufacture**

The current Azure Sphere software release does not support all features of the [MT3620](https://www.mediatek.com/products/azureSphere/mt3620) hardware. For example, the following are **not yet supported** in software:

- 2 x ARM Cortex-M4 with FPU
- ADC, I2C, I2S, PWM and SPI peripheral interfaces (GPIO and UART are supported)
- Wi-Fi 802.11a (b/g/n are supported)
- RTC with clock selection and battery backup

!!!Tip
    For more info, please refer to [Information and tools for hardware design and manufacture](https://docs.microsoft.com/en-us/azure-sphere/manufacturers/hardware-manufacturing).

## Product Handling

**Packaging**

The Azure Sphere MT3620 Development Kit packaging contains Azure Sphere MT3620 Development Kit and Micro B USB cable.

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/box.JPG)

**ESD Precautions**

The Azure Sphere MT3620 Development Kit contains highly sensitive electronic circuitry and is an Electrostatic Sensitive Device (ESD). Handling The Azure Sphere MT3620 Development Kit without proper ESD protection may destroy or damage it permanently. Proper ESD handling and packaging procedures must be applied throughout the processing, handling and operation of any application that incorporates Azure Sphere MT3620 Development Kit.

## Applications

- Home/Building/Facilities
- Automation
- Security
- Equipment Management
- Utilities
- Public Safety

!!!Tip
    To understand how Azure Sphere works in a real-world setting, consider [Contoso, Ltds cenario](https://docs.microsoft.com/en-us/azure-sphere/product-overview/scenario).

## Qualification and approvals


<div class="method1" style="width:16%">

<p style=":center"><a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/FCC.jpg"/></a></p>

</div>



<div class="method1" style="width:16%">

<p style=":center"><a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/CE.jpg" /></a></p>

</div>



<div class="method1" style="width:16%">

<p style=":center"><a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/mic.jpg" /></a></p>

</div>


<div class="method1" style="width:16%">

<p style=":center"><a href="" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/RoHS.jpg" /></a></p>

</div>


<style>
.method1{
  :center;
  float:left;
}
.title{
font-size:1px;
text-indent:1px;
line-height:3px
}
</style>



<div class="title" style="width:39%">
.
</div>


- FCC ID: [Z4T-MT3620DEVB](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip) 
- CE ID: [18/0331/SZ](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- MIC ID: [CSRT18207](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)

## Install Azure Sphere

If you have an Azure Sphere development kit that has not yet been used, complete [these steps](https://docs.microsoft.com/en-us/azure-sphere/install/overview) first to get up and running.

## Azure Sphere Demo

We build two demoes which combine Sphere dev kit and [Seeed Grove system](http://wiki.seeedstudio.com/Grove_System/). 

**Demo1**: MT3620 Dev Board performs as an MCU, which connects with temperature sensor(SHT31), relay, fan, display, analog device. Demo simulates a fan with IoT connectivity, people can measure the ambient temperature and setup a threshold value to turn on/off the fan from Azure Cloud. The temperature will display on the LED display. User can swap the resistor to change the fan’s speed level from 0,1,2,3(0 means switch off the fan).

**Demo2**: MT3620 Dev Board works as an IoT safety connectivity device, which will be connect to an already made appliance, the appliance has its own MCU , which in this demo, we use an Arduino to simulate a fan’s control board, the board can get the status of the fan’s motor data , by analyzing the data , people can get the failure status and send maintainer to fix it. By pressing the button, this simulates the health status of the fan device , when button being pressed, that means the device need maintenance.

### Hardware

**Part List**


| MT3620 development kits | Grove-Temperature&Humidity|  Grove - Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/azure_s.jpg)|![enter image description here](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/SHT3_s.jpg)|![enter image description here](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/relay.jpg)|
|[Get One Now](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|[Get One Now](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

| Grove - Slide Potentiometer | Grove - 4-Digit Display |   Grove - Blue LED Button  |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/Slide_Potentiometer_s.jpg)|![enter image description here](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/4_digital_s.jpg)|![enter image description here](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/Grov-Blue_led_button.jpg)|
|[Get One Now](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)|[Get One Now](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html)|[Get One Now](https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html)|


| MT3620 Grove Shield |Seeeduino V4.2  | Base Shield  |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|
|[Get One Now](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

**System Diagram**

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/demo1.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/demo1.png"/></a>

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/demo2.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/demo2.png"/></a>

**MT3620 Grove Shield**

Since [Azure Sphere SDK](http://aka.ms/AzureSphereSDK) has not yet supported ADC and I2C on MT3620. This shield serves as an interface between MT3620 UART port and external I2C devices, like the I2C temperature sensor. The basic function of the shield is to help to connect to I2C external device. By using an I2C compatible ADC chip, developer can also read the analog data from analog port.

[MT3620 Grove Shield](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) includes 2 chips, AD7992(Anlog to I2C) and SC18IM700(I2C to UART) to enable the ADC and I2C function from hardware side. So the analog sensors' signal go through AD7992 and then SC18IM700 to UART of develop board. The I2C sensors go through SC18IM700 to UART of develop board as well.

The [AD7992](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/datasheet/AD7992.pdf) is a 12-bit, low power, successive approximation ADC with an I2C-compatible interface. It transforms the anlog signal A0, A1 to I2C data.

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/ADC_2_I2C.png)

The [SC18IM700](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/datasheet/SC18IM700.pdf) is designed to serve as an interface between the standard UART port of a microcontroller or microprocessor and the serial I2C-bus; this allows the microcontroller or microprocessor to communicate directly with other I2C-bus devices. It transforms SDA/SCL signals to GPIO26_TXD0 and GPIO28_RXD0. 

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/I2C_2_UART.png)

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/MT3620_Grove_Shield-2018-09-11.png)

<div style=":center">MT3620 Grove Shield Hardware Overview</div>


**Hardware Connection**

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/MT3620_demo_Front.jpg)

<div style=":center">Front View of hardware setup</div>

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/MT3620_demo_backside.jpg)

<div style=":center">Top View of hardware setup</div>

- Step 1. Connect Grove-Blue LED Button to port 2 of Grove base shield.
- Step 2. Connect Fan PWM signal to port 5 of Grove base shield.
- Step 3. Connect port 7(Software Serial Port) of Grove base shield to UART3 of MT3620 Grove Shield. Cut the Vcc(Red cable) and leave the TX/RX/GND for the serial communication.
- Step 4. Plug Grove-Base shield to Seeeduino/Arduino.
- Step 5. Connect Grove-4 Digital Display to GPIO4 port of MT3620 Grove Shield.
- Step 6. Connect Grove-Temperature&Humidity Sensor(SHT31) to I2C port of MT3620 Grove Shield.
- Step 7. Connect Grove-Relay to GPIO0 port of MT3620 Grove Shield and Grove-Relay output terminal to control Fan on/off.
- Step 8. Connect Grove-Slide Potentiometer to Analog port of MT3620 Grove Shield.
- Step 9. Plug the MT3620 base shield to Azure Sphere MT3620 Development board.
- Step 10. Plug the USB cable to Azure Sphere MT3620 Development board and PC.
- Step 11. Plug the USB cable to Ardunio/Seeeduino and PC.
- Step 12. Plug the power supply to Fan. 

!!!Warning
    Please make sure the voltage switch on Grove base shield is turned to **3.3v**. 

### Software

The software include the smart fan simulation system and Azure Sphere MT3620 Development system. 

- For the smart fan simulation system, use the arduino board to read Grove-Blue LED button press/release input signal, output the PWM to control the fan speed and control the Grove-Blue LED button LED status as well. Then use the port 7 to communicate with Azure Sphere MT3620 Development system through UART. 

- For Azure Sphere MT3620 Development system, Grove-4 Digital LED displays the temperature from Grove-Temperature&Humidity Sensor(SHT31) sensor, which demonstrates the UART-I2C shield function and MT3620 GPIO output function. Slide the Grove-Slide Potentiometer to change the fan speed, which demonstrates the MT3620 I/O input function. Configure a threshold temperature value from Azure Cloud, when value > threshold, Grove-relay turns fan on, otherwise turns fan off. User also can adjust Grove-Slide Potentiometer,  when the fan working status goes wrong, the fan's MCU will post the failure to Azure Sphere by UART, then failure report goes to the Azure Cloud and wait for maintance. 

**Smart Fan Simulation System**

- Step 1. Open the Arduino IDE.
- Step 2. Copy [Arduino Smart Fan Simulation code](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan/blob/master/Arduino_code/Arduino_code.ino) and paste to Arduino IDE. 
- Step 3. Select Arduino/Seeeduino v4 as board from Tools menu. 
- Step 4. Select related COM port from Tools menu. 
- Step 5. Click upload to upload code the Arduino/Seeeduino. 

!!!Note
    If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

**Azure Sphere MT3620 Development System**

- Step 1. Download [Azure Sphere Code](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan). 
- Step 2. Follow Quickstarts for Azure Sphere to open the **AzureSphereDemo2.vcxproj** project.
- Step 3. Open the main.c under Source Files. 
- Step 4. Modify wifiSsid and wifiPsk @line21 and 22.
- Step 5. Connect the demo to Azure IoT.
- Step 6. Click Build -> Rebuild Solution directly to the device.
- Step 7. Use the Remote Debug Tool to access the device.  
- Step 8. See the stream back temperature data from console.
- Step 9. Configure the device explorer and link the physical deivces and the devices on the cloud.
- Step 10. Press the temperature sensor and see the trigger message on console.
- Step 11. Press the button to simulate the fan error and see the status on the console. 

For detail operation, please refer to the video. 

<iframe width="1189" height="669" src="https://www.youtube.com/embed/KXThR9RUNvw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Resource

- **[Product]** [Azure Sphere MT3620 Development Kit Product Brief](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[Product]** [Welcome to Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Certification]** [Azure Sphere MT3620 Development Kit-CE](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- **[Certification]** [Azure Sphere MT3620 Development Kit-FCC](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- **[Certification]** [Azure Sphere MT3620 Development Kit-MIC](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)
- **[Library]** [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Wiki]** [MT3620 Grove Shield](http://wiki.seeedstudio.com/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/) 
- **[DataSheet]]** [MediaTek MT3620 Product Brief](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[DataSheet]** [DS_FT4232H](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/datasheet/DS_FT4232H.pdf)
- **[Mechanical]** [Azure Sphere MT3620 Development Board-2D-Drawing](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[FAQ Web]** [Azure Sphere Forum](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Azure Sphere Github issues](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>