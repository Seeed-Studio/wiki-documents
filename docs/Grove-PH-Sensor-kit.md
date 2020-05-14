---
name: Grove-PH Sensor kit
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 110020291
tags:
---

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/04.png)



<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 


Are you trying to find an easy to use and cost-effect PH sensor/meter? Do you want to use a PH sensor/meter with Arduino or Raspberry Pi? Well, this new Grove - PH Sensor will meet all your needs. The PH sensor measures the hydrogen-ion activity in water-based solutions, we usually use it to measure the PH of a liquid. It is widely used in the chemical industry, the pharmaceutical industry, the dye industry, and scientific research where acidity and alkalinity testing is required. The drive board in this kit support both 3.3V and 5V system. And with the stander BNC probe interface and Grove connector, it is very convenient to work with Arduino and Raspberry Pi.

!!!Note
    This product is non-RoHS certified.

## Feature

- Compact size for easy deployment.  
- Support with both Arduino and Rasberry Pi .
- Cost-effective.

## Specification
|Items|Values|
|---|---|
|Operating voltage	|3.3V/5V|
|Range	|0-14PH|
|Resolution	|±0.15PH（STP）|
|Response time	|＜1min|
|Probe Interface|	BNC|
|Measure temperature	|0-60℃|
|Internal resistance|	≤250MΩ（25℃）|
|Alkali error	|0.2PH（1mol/L）Na+，PH14)（25℃）|

## Platform Supported
| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


## Getting Started

#### Materials Requied

| Seeeduino Lotus | Grove-PH Sensor kit | 
|--------------|--------------|
| ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/thumbnail.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/thumb.png)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html)|

#### Hardware Connection

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/PH_Connection.jpg)

!!!Tip
    Please plug the USB cable, Grove-PH Sensor Interface into Seeeduino Lotus board Interface gently, otherwise you may damage the port.

- **Step 1.** Plug Grove-PH Sensor into Interface **A2** of Seeeduino Lotus board with a Grove Cable.

- **Step 2.** Connect Seeeduino Lotus to PC via a USB cable.

- **Step 3.** Download the code, please refer to the software part.

- **Step 4.** Run the code and the outcome will display on the screen of **Serial Monitor** in your Arduino IDE .


#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.




- **Step 1.** Download the [Demo code](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Grove-PH_Sensor_kit.zip).

- **Step 2.** Copy the whole **Grove-PH_Sensor_kit** file and paste it into your Arduino IDE library file.

- **Step 3.** Open the **pH_meter_V1_1** file with your Arduino IDE.

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

#### Software Code
```C++
/*
  # This sample code is used to test the pH meter V1.1.
  # Editor : YouYou
  # Date   : 2014.06.23
  # Ver    : 1.1
  # Product: analog pH meter
  # SKU    : SEN0161
*/
#define SensorPin A2            //pH meter Analog output to Arduino Analog Input 0
#define Offset 41.02740741
           //deviation compensate
#define LED 13
#define samplingInterval 20
#define printInterval 800
#define ArrayLenth  40    //times of collection
#define uart  Serial
int pHArray[ArrayLenth];   //Store the average value of the sensor feedback
int pHArrayIndex = 0;
void setup(void)
{
  pinMode(LED, OUTPUT);
  uart.begin(9600);
  uart.println("pH meter experiment!");    //Test the uart monitor
}
void loop(void)
{
  static unsigned long samplingTime = millis();
  static unsigned long printTime = millis();
  static float pHValue, voltage;
  if (millis() - samplingTime > samplingInterval)
  {
    pHArray[pHArrayIndex++] = analogRead(SensorPin);
    if (pHArrayIndex == ArrayLenth)pHArrayIndex = 0;
    voltage = avergearray(pHArray, ArrayLenth) * 5.0 / 1024;
    pHValue = -19.18518519
* voltage + Offset;
    samplingTime = millis();
  }
  if (millis() - printTime > printInterval)  //Every 800 milliseconds, print a numerical, convert the state of the LED indicator
  {
    uart.print("Voltage:");
    uart.print(voltage, 2);
    uart.print("    pH value: ");
    uart.println(pHValue, 2);
    digitalWrite(LED, digitalRead(LED) ^ 1);
    printTime = millis();
  }
}
double avergearray(int* arr, int number) {
  int i;
  int max, min;
  double avg;
  long amount = 0;
  if (number <= 0) {
    uart.println("Error number for the array to avraging!/n");
    return 0;
  }
  if (number < 5) { //less than 5, calculated directly statistics
    for (i = 0; i < number; i++) {
      amount += arr[i];
    }
    avg = amount / number;
    return avg;
  } else {
    if (arr[0] < arr[1]) {
      min = arr[0]; max = arr[1];
    }
    else {
      min = arr[1]; max = arr[0];
    }
    for (i = 2; i < number; i++) {
      if (arr[i] < min) {
        amount += min;      //arr<min
        min = arr[i];
      } else {
        if (arr[i] > max) {
          amount += max;  //arr>max
          max = arr[i];
        } else {
          amount += arr[i]; //min<=arr<=max
        }
      }//if
    }//for
    avg = (double)amount / (number - 2);
  }//if
  return avg;
}
```
!!!Attention
   - There are several cautious reminders as following:
     - Before detecting the target solution, the sensor **MUST** be calibrated by pointed calibration fluid, and it also **MUST** be put into pointed buffer(PH=7) or clean water before detecting a new kind of solution and swiped.
     - Before being measured, the electrode must be calibrated with a standard buffer solution of known PH value. In order to obtain more accurate results, the known PH value should be reliable, and closer to the measured one.
     - When the measurement is completed, the electrode protective sleeve should be put on. A small amount of 3.3mol / L potassium chloride solution should be placed in the protective sleeve to keep the electrode bulb wet.
     - The leading end of the electrode must be kept clean and dry to absolutely prevent short circuits at both ends of the output, otherwise it will lead to inaccurate or invalid measurement results.
     - After long-term use of the electrode, if you find that the gradient is slightly inaccurate, you can soak the lower end of the electrode in 4% HF (hydrofluoric acid) for 3-5 seconds, wash it with distilled water, and then soak in potassium chloride solution to make it new.
     - The sensor **MUST NOT** put into the detecting liquid for a long time.


- **Step 5.** When the sensor is put into a pointed calibration fluid (PH=9.18), there'll be a voltage and a PH value:

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration.png)

- **Step 6.** Similarily, when the sensor is put into a pointed calibration fluid (PH=4), there'll be a voltage and a PH value.

![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration2.png)

- **Step 7.** A k value and Offset value can be calculated because of the linear characteristic of PH detecting, and following please insert Offset value and k value (the same as pHValue) into **Line 10** and **Line 35** in the Software Code:

!!!Tip
		k= (PH2-PH1)/(V2-V1); Offset=((PH2+PH1)-k*(V1+V2))/2;
    There's a [Calculation Chart](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Calibration_for_k&offset.xlsx) for furthur help with calibration.

- **Step 4.** Finally, you are free to detect your liquid.

## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/202002811_Grove-PH_Sensor_v1.0_SCH&PCB.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[ZIP]** [Demo Code library](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Grove-PH_Sensor_kit.zip)
- **[XLSX]** [Calibration for k&offset](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Calibration_for_k&offset.xlsx)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>