---
description:  Grove - Line Finder
title:  Grove - Line Finder V1.1
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Line_Finder
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/Grovelinefinder1.jpg" /></div>

Grove-Line finder is designed for line-following robot. It has an IR emitting LED and an IR sensitive phototransistor. It can output digital signal to a microcontroller so that the robot can follow a black line on white background, or vice versa.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/300px-Get_One_Now_Banner.png" /></a></p>

## Version

| Product Version              | Changes                                                                                                                                                                                    | Released Date |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Line Finder V1.0| Initial                                                                                                                                                                                    | Jan 29 2010      |
| Grove-Line Finder V1.1 | Add test points                                                                                                                                                                                 | Dec 28 2015      |

## Specification

| Parameter              | Value/Range                                                   |
|------------------------|---------------------------------------------------------------|
| Power supply           | 5                                                             |
| Digital output mode    | TTL (High when black is detected, Low when white is detected) |
| Connector              | 4 pin Buckled Grove interface                                 |
| Dimension              | 20mm*20mm                                                     |
| ROHS                   | Yes                                                           |
| Photo reflective diode | RS-06WD                                                       |
| Comparator             | MV358                                                         |

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)

## Platform Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

- Step 1. Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Button |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- Step 2. Connect Grove-line finder to port D3 of Grove-Base Shield.
- Step 3. Plug Grove - Base Shield into Seeeduino.
- Step 4. Connect Seeeduino to PC through a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/seeeduino_line_finder.jpg" /></div>

:::note
If we don't have Grove Base Shield, We also can directly connect Grove-Line finder to Seeeduino as below.
:::

| Seeeduino       | Grove-Line finder |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D3            | Yellow                  |

#### Software

- Step 1. Copy the code into Arduino IDE and upload.

```c
//------------------------------------------------------------
//Name: Line finder digital mode
//Function: detect black line or white line
//Parameter:   When digital signal is HIGH, black line
//             When digital signal is LOW, white line
//-------------------------------------------------------------
int signalPin =  3;    // connected to digital pin 3
void setup()   {
  pinMode(signalPin, INPUT); // initialize the digital pin as an output:
  Serial.begin(9600);  // initialize serial communications at 9600 bps:
}
// the loop() method runs over and over again,
// as long as the Arduino has power
void loop()
{
  if(HIGH == digitalRead(signalPin))
    Serial.println("black");
  else  Serial.println("white");  // display the color
  delay(1000);                  // wait for a second
}
```

- Step 2. Open the serial port and we will see "black" when put the sensor on top of black lines and "white" when on white area.

```
white
white
white
black
black
black
black
black
```

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Line Finder to port D3 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/cc_Line_Finder.png" /></div>

Upload the program to your Arduino/Seeeduino.

:::tipsuccess
When the code finishes uploaded, you will see line found or not in Serial Monitor.
:::

### Play With Raspberry Pi

#### Hardware

- Step 1. Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - Line Finder |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- Step 2. Plug the GrovePi_Plus into Raspberry.
- Step 3. Connect Grove-Line Finder to D7 port of GrovePi_Plus.
- Step 4. Connect the Raspberry to PC through USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/rasp_line_finder.jpg" /></div>

#### Software

- Step 1. Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- Step 2. Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- Step 3. Excute below commands.

```
cd ~/GrovePi/Software/Python
python grove_line_finder.py
```

Here is the grove_line_finder.py code.

```python
import time
import grovepi

# Connect the Grove Line Finder to digital port D7
# SIG,NC,VCC,GND
line_finder = 7

grovepi.pinMode(line_finder,"INPUT")

while True:
    try:
        # Return HIGH when black line is detected, and LOW when white line is detected
        if grovepi.digitalRead(line_finder) == 1:
            print ("black line detected")
        else:
            print ("white line detected")

        time.sleep(.5)

    except IOError:
        print ("Error")
```

- Step 4. We will see black line detected when the sensor is on top of black line.

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_line_finder.py 
black line detected
black line detected
white line detected
white line detected

```

# Grove-Line Finder Schematic V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000970_Grove%20-%20Line%20Finder%EF%BC%88CN%EF%BC%89%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-Line Finder Schematic V1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000932_Grove%20-%20Line%20Finder%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle&PDF]** [Grove-Line Finder Schematic V1.0](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000970_Grove%20-%20Line%20Finder%EF%BC%88CN%EF%BC%89%20v1.0.zip)
- **[Eagle&PDF]** [Grove-Line Finder Schematic V1.1](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000932_Grove%20-%20Line%20Finder%20v1.1.zip)
- **[Datasheet]** [LMV358.PDF](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/Lmv358.pdf)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/Grove_Line_Finder_CDC_File.zip)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
