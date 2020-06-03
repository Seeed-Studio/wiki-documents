---
name: Grove - Multichannel Gas Sensor V2
category: Grove sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020820
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png)



<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 

!!!Tip
      We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.

Grove - Multichannel Gas Sensor V2 has 4 measuring units, each of them is sensitive to various kinds of gases, which means you are able to get four sets of data at the same time. And different sorts of gases can also be judged by these four sets of data. The gas sensor used in this module is based on MEMS technology and has the advantage of being in a small size with considerable measurement stability and is more suitable for qualitative than quantitative measurement.

## Features

- Four fully independent sensor elements on one package.
- The ability to detect a variety of gases, besides Carbon monoxide (CO), Nitrogen dioxide (NO2), Ethyl alcohol(C2H5CH), Volatile Organic Compounds (VOC) and etc.
- Qualitative detecting, rather than quantitative.
- Compact size for easy deployment.   

## Specification

|Item|Value|
|---|---|
|MCU|STM32F030|
|Interface|Grove I2C|
|I2C address|0x55|
|Output voltage|3.3V~5V|
|Sensors|GM-102B; GM-302B; GM-502B; GM-702B|

GM-102B

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-102B%E5%8F%82%E6%95%B0.png)


GM-302B

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B%E5%8F%82%E6%95%B0.png)


GM-502B

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B%E5%8F%82%E6%95%B0.png)


GM-702B

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B%E5%8F%82%E6%95%B0.png)

## Sample test outcomes

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/sample+test+outcomes.jpg)


## Characteristic descriptions

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B.png)

Rs in the figure represents the resistance value of the sensorin different concentrations of gas; R0 represents the resistance value of the sensor in clean air. All tests in the picture are completed under standard test conditions. Yellow line is Toluene, blue line is Ethanol, red line is Acetone and purple line is Formaldehyde, which is the same as the ones in charts below.

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B+2.png)

The output voltage in Chart 3 is the voltage across the load resistance (RL) of the sensor in series. The test in the figure is completed under standard test conditions, with a test gas of 50 ppm ethanol. The output voltage in Chart 4 is the voltage across the load resistance (RL) of the sensor in series. All tests in the figure are completed under standard test conditions.

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B.png)

Rs in Chart 5 represents the resistance value of the sensorin different concentrations of gas; R0 represents the resistance value of the sensor in clean air. All tests in the picture are completed under standard test conditions. Yellow line is Toluene, blue line is Ethanol, red line is Acetone and purple line is Formaldehyde, which is the same as the ones in charts below. In Chart 6, Rs represents the resistance value under 50ppm ethanol and various temperatures / humidities; Rs0 represents the resistance value under 50ppm ethanol, 20 ℃ and 55% RH.

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B+2.png)

The output voltage in Chart 7 is the voltage across the load resistance (RL) of the sensor in series. The test in the figure is completed under standard test conditions, with a test gas of 50 ppm ethanol. The output voltage in Chart 8 is the voltage across the load resistance (RL) of the sensor in series. All tests in the figure are completed under standard test conditions.

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B.png)

In Chart 9, Rs represents the resistance of the sensor in different concentrations of gas Value; R0 represents the resistance value of the sensor in clean air. All tests in the picture are completed under standard test conditions. The black line is for CO, red one is CH4, Purple is for H2 and pink one is Air.In Chart 10 , Rs represents the temperature at 150ppmCO and various temperatures / humidities. Resistance value; Rs0 means resistance value under 150ppmCO, 20 ℃, 55% RH. 

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B+2.png)

The voltage in Chart 11 is the voltage across the load resistance (RL) of the sensor in series. The test in the picture is completed under standard test conditions, test gas 150ppmCO.
The output voltage in Chart 12 is the voltage across the load resistance (RL) of the sensor in series. All tests in the picture are completed under standard test conditions.

## Platform Supported
| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


## Getting Started

#### Materials Requied

| Wio Terminal | Grove-Multichannel Gas Sensor V2 | 
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V2.png)|
|[Get ONE Now](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)|

#### Hardware Overview

![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/Hardware+Connection+Image.jpg) ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/Hardware+Diagram.png)

!!!Notice
      The module in the image of Hardware Connection has the same arrangement as the one in the image of Hardware Diagram above. As you can see in the Hardware Diagram, the outlined area in the left is the Grove Interface. And there are four squares with tiny holes refer to the gas sensors. When the board with sensors is connected with Wio Terminal, the information of the gases will display on the screen.

- **Step 1.** Connect Grove - Multichannel Gas Sensor V2 to port I2C of Grove-Base Shield. Plug Grove - Base Shield into Wio Terminal. And connect Wio Terminal to PC via a USB cable.

- **Step 2.** Download the  [ Grove_Multichannel_Gas_Sensor_v2 Library](https://github.com/Seeed-Studio/Seeed_Multichannel_Gas_Sensor/archive/master.zip) from Github. And refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Copy the code into Wio Terminal and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

- **Step 4.** Refer [How to TFT LCD Library](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) to install TFT LCD Library. Lastly, upload code from the Software Code below and the data has to be displayed successfully.

#### Software Code
```C++
#include <TFT_eSPI.h>
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>
GAS_GMXXX<TwoWire> gas;

TFT_eSPI tft; 
// Stock font and GFXFF reference handle
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

void setup() {
  // put your setup code here, to run once:
  tft.begin();
  tft.setRotation(3);
  spr.createSprite(tft.width(),tft.height()); 
  gas.begin(Wire, 0x08); // use the hardware I2C
}

void loop() {
  // put your main code here, to run repeatedly:
  int val;
  spr.fillSprite(TFT_BLACK);
  spr.setFreeFont(&FreeSansBoldOblique18pt7b); 
  spr.setTextColor(TFT_BLUE);
  spr.drawString("Gas Terminal", 60 - 15, 10 , 1);// Print the test text in the custom font
  for(int8_t line_index = 0;line_index < 5 ; line_index++)
  {
    spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
  }
  
  spr.setFreeFont(&FreeSansBoldOblique9pt7b);                 // Select the font
  // GM102B NO2 sensor
  val = gas.getGM102B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("NO2:", 60 - 24, 100 -24 , 1);// Print the test text in the custom font
  spr.drawRoundRect(60 - 24,100,80,40,5,TFT_WHITE); 
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,60 - 20,100+10,1);
  spr.setTextColor(TFT_GREEN);
  spr.drawString("ppm", 60 + 12, 100+8, 1);
  // GM302B C2H5CH sensor
  val = gas.getGM302B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("C2H5CH:", 230 -24 , 100 - 24 , 1);// Print the test text in the custom font
  spr.drawRoundRect(230 - 24,100,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,230 - 20,100+10,1);
  spr.setTextColor(TFT_GREEN);
  spr.drawString("ppm", 230 + 12, 100+8, 1);
  // GM502B VOC sensor
  val = gas.getGM502B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("VOC:", 60 - 24, 180 -24 , 1);// Print the test text in the custom font
  spr.drawRoundRect(60 - 24,180,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,60 - 20,180+10,1);
  spr.setTextColor(TFT_GREEN);
  spr.drawString("ppm", 60 + 12, 180+8, 1);
  // GM702B CO sensor
  val = gas.getGM702B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("CO:", 230 -24 , 180 - 24, 1);// Print the test text in the custom font
  spr.drawRoundRect(230 - 24 ,180,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val ,230 - 20 ,180+10,1);
  spr.setTextColor(TFT_GREEN);
  spr.drawString("ppm", 230 + 12, 180+8, 1);
  
  spr.pushSprite(0, 0);
  delay(100);

}
```

!!!Cautions

      - The module should avoid being placed in the volatile silicon compound steam, or it will cause the sensitivity to be reduced and irrecoverable.
      - The module should avoid being exposured to high concentrations of corrosive gases (such as H2S, SOX, Cl2, HCl, etc.), otherwise it will be irreversibly damaged.
      - The module should not be placed in water or ice.
      - After the module is powered on, the sensor will heat up to a certain degree during the process, which is a normal phenomena.
      - Users MUST preheat the module before starting measuring gases. 


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/101020820/Grove+-+Multichannel+Gas+Sensor+V2.0_SCH%26PCB.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove_Multichannel_Gas_Sensor_v2 Library](https://github.com/Seeed-Studio/Seeed_Multichannel_Gas_Sensor/archive/master.zip)
- **[PDF]** [GM-102B Technical Parameter.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-102B+Technical+Parameter.pdf)
- **[PDF]** [GM-302B MEMS Technical Parameterv2.1.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-302B+MEMS+Technical+Parameterv2.1.pdf)
- **[PDF]** [GM-502B MEMS VOC Technical Parameter v2.1.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-502B+MEMS+VOC+Technical+Parameter+v2.1.pdf)
- **[PDF]** [GM-702B Technical Parameter(Ver1.1).pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-702B+Technical+Parameter(Ver1.1).pdf)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>