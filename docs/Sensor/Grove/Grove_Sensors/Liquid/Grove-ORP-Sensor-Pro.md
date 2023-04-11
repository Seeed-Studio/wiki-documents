---
description: Grove - ORP Sensor Kit Pro
title: Grove - ORP Sensor Kit Pro
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-ORP-Sensor-Pro
last_update:
  date: 3/2/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - ORP Sensor Kit Pro
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 110020370
tags:
--- -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/sensor.jpg"/></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## Introduction

Grove - ORP Sensor Kit (HR-O) is a Grove sensor that measures the ORP value, detecting quality of the liquid. It works with a 5-meter IP68 ORP probe, offering a -2000mV to 2000mV sensing range, operating under 0-80℃, supporting Arduino programming. The sensor is environmentally friendly and RoHS certificated.

### Feature

- Grove ORP Sensor Upgrade: Assemble 5-meters IP68 ORP probe, offering -2000 mV to 2000 mV sensing range, operating under 0-80℃, member of simple-to-use Grove ecosystem
- Enhanced Measurement Performance: Maintain ±15mV sensing accuracy at 0-60°C
- Working Voltage: 3.3/5V
- Arduino Support
- RoHS Certification

### Application

- Monitor and control of oxidation-reduction reactions
- Disinfected water detection
- Health-friendly water detection
- Determine the types of microbial
- Dectct anaerobic microbial activity
- Wastewater treatment
- aquaculture
- Industrial sewage discharge monitoring

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of Grove - ORP Sensor Kit Pro.

| Parameters | Details |
|:----------:|:-------:|
| Range measurement | -2000mV to +2000mV |
| Resolution ratio | 1 mV |
| Accuracy | ±15mV |
| Aero potential point(pH) | 7.00±0.30 |
| Slope factor | >96% |
| Work voltage | 3.3V/5V |
| Work temperature | 0-80℃ |
| **Reference system** |
| Liquid junction boundary | Polyvinyl tetrachloride |
| Material of the housing | PPS |
| Membrane resistance | <500 MQ |
| Wire length | 5 meters |
| Method of installation | Drop |
| Level of protection | IP68 |
| Electrical connection | BNC |

## Getting Started

### About the product

The lid on the sensor probe is filled with a solution of potassium chloride which is used to protect the probe.

If you find white solid granular crystals around the probe shield after receiving the product, this is a normal phenomenon, please do not worry.

The white crystals are caused by the potassium chloride solution inside due to temperature changes, environmental changes or oxidation reduction in the normal storage or transportation environment. However, it will not affect the nature of the internal potassium chloride solution or the normal operation of the sensor.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/1.jpg"/></div>

If you find it, please use a wet paper towel to gently wipe off the crystals on it, please do not let it near your children to avoid accidental ingestion.

### Instructions for use of Grove ORP Sensor Kit Pro

An Oxidation Reduction Potential (ORP) Sensor measures the activity of oxidizers and reducers in an aqueous solution. It is a potentiometric measurement from a two-electrode system similar to a pH sensor. Sometimes it is also referred to as a redox measurement. Unlike a pH sensor, an ORP sensor measures the ratio of oxidized to reduced forms of all chemical species in solution.

The ORP sensor is made up of two electrochemical half cells where the reference electrode is generally Ag/AgCl and the measurement electrode is commonly Pt. The potential difference between the two electrodes represents the redox potential of the solution being measured and can be described by the Nernst equation.

`E = Eo – 2.3 (RT/nF) x (log [Ox] / [Red])`

Where:

- E = total potential developed between the measurement and reference electrodes
- Eo = a voltage specific to the system
- R = gas constant
- T = temperature in K
- n = the number of electrons involved in the equilibrium between the oxidized and reduced species
- F = Faraday constant
- [Ox] = concentration of the oxidized species
- [Red] = concentration of the reduced form of that species

The output of the ORP sensor is relative to the reference electrode. For example, a reading of +100 mV indicates the potential is 100 mV higher than the potential of the reference half cell and suggests an oxidizing environment. Likewise, a –100 mV reading indicates a potential 100 mV lower than the reference half cell and is a reducing environment. In some applications, redox potential may be reported as Eh which is the voltage reading with respect to the Standard Hydrogen Electrode (SHE). By taking into account the offset of the reference electrode used in the ORP sensor, the potential can be converted into Eh readings. Vernier ORP sensors use a Ag/AgCl saturated KCl reference electrode.

### Equipment Installation

Before using Grove ORP Sensor Pro, we need to mount the Grove board with the probe. On the Grove board, there will be two protruding round tips at the connection with the probe, align them with the two notches at the probe connection and insert them firmly. Then just rotate them along the notches to the limit.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/install.gif"/></div>

:::tip
If you want to disassemble it, then simply rotate it in the opposite direction along the groove and then forcefully separate the Grove plate from the probe. Please note that the hand force is on the metal part as much as possible to avoid breaking the plate with too much force.
<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/uninstall.gif"/></div>

A nut and a spacer are included with the product. If you are in need of frequent disassembly, we do not recommend that you install the spacer and nut, which will make your disassembly difficult.
:::

## Arduino / XIAO Example

Next, we will introduce the basic usage of Grove ORP Sensor with Seeed Studio's XIAO and Seeeduino products based on Arduino platform.

**Step 1.** Launch the Arduino application.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Step 2.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeeduino** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) to finish adding.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software) to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup) to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#software-setup) to finish adding.

### Using Grove ORP Sensor Pro on Seeed Studio XIAO SAMD21

A simple working definition for ORP is a solution's capacity for electron transfer known as oxidation or reduction, given in millivolts. The measurement of ORP is the reading of the voltage potential between the measuring electrode and a reference electrode. Depending on the solution being measuring, the ORP electrodes will serve as either an electron donor or an electron acceptor. ORP is similar to pH in that pH indicates how acidic or basic a solution is based on the hydrogen ion activity within the solution and ORP indicates the reduction- oxidation status of a solution based on the collective electron activity within the solution.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/3.jpg"/></div>

In this example, we use XIAO SAMD21 as the main control board to measure the ORP value of Coca-Cola using Grove ORP Sensor Pro.

#### Materials Required

| Seeed Studio XIAO SAMD21 |  Seeed Studio Expansion Base for XIAO | Grove ORP Sensor Pro |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/></div> | <div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/sensor.jpg"/></div> |
|[**Get ONE Now**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**Get ONE Now**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)| [**Get ONE Now**](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html) |

#### Operation Steps

**Step 1.** Connect Grove ORP Sensor Pro to XIAO Expansion Board.

In this example, we will use the **A6** and **A7** pins above the XIAO as the **CAL** and **SIG** pins of the sensor. Please connect the Grove ORP Sensor Pro to the UART port of the XIAO expansion board using the Grove cable.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/7.png"/></div>

**Step 2.** Put the Seeed Studio XIAO SAMD21 on the expansion board.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png"/></div>

:::note
Please plug the Seeed Studio XIAO on the expansion board first, then plug Type-C, Remember pluing Seeed Studio XIAO into the middle of the two female header connectors, otherwise you will damage the Seeed Studio XIAO and the expansion board.
:::

**Step 3.** Remove the protective case of the probe.

**This step requires special care!**

Please make the probe face down **vertically** before you remove the protective case to expose the probe, and then slowly rotate the case to remove the probe. Please do not tilt during this process, otherwise the potassium chloride inside will easily pour out!

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/2.jpg"/></div>

The probe is then fully inserted into the liquid to be measured. You can rest assured that the probe and sensor are waterproof, and we have specially prepared a 5m long cable for you. Please note, however, that the Grove board is not waterproof, so please do not put it into the liquid with it.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/5.jpg"/></div>

**Step 4.** Upload program.

The following is a sample program for the Grove ORP Sensor.

```c++
#define VOLTAGE 3.37   //vcc voltage(unit: V)
#define OFFSET 16      //UNUSED - zero drift voltage(unit: mV)
#define LED 13         //operating instructions
#define ArrayLenth  40 //times of collection
#define orpPin A7       //orp meter output,connect to Arduino controller ADC pin
#define calPin A6       //orp cal control pin, get a offset by set it to low

double orpValue; 
// double offset=0.0;
int offset=0;
bool is_calibrated = false;
int wait_count = 5;
int orpArray[ArrayLenth];
int orpArrayIndex=0;

double avergearray(int* arr, int number);

void setup(void) {  
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
  pinMode(calPin,OUTPUT);
  // digitalWrite(calPin, LOW);
  digitalWrite(calPin, HIGH);
}

void loop(void) {
  static unsigned long orpTimer=millis();   //analog sampling interval
  static unsigned long printTime=millis();
  if(millis() >= orpTimer)
  {
    orpTimer=millis()+20;
    orpArray[orpArrayIndex++]=analogRead(orpPin);    //read an analog value every 20ms
    if (orpArrayIndex==ArrayLenth) {
      orpArrayIndex=0;
    }   
    orpValue=((30*(double)VOLTAGE*1000)-(75*avergearray(orpArray, ArrayLenth)*VOLTAGE*1000/1024))/75-offset;
  }
  if(millis() >= printTime)   //Every 800 milliseconds, print a numerical
  {
    if(!is_calibrated) {
      if(wait_count==0){
        offset += (int)orpValue; 
        is_calibrated = true;
        digitalWrite(calPin, LOW);
        Serial.print("offset: ");
        Serial.print((int)offset);
        Serial.println(" mV");
      }
      wait_count--;
    }
    else {
      Serial.print("ORP: ");
      Serial.print((int)orpValue);
      Serial.println(" mV");
      digitalWrite(LED,1-digitalRead(LED)); // convert the state of the LED indicator      
    } 
    printTime=millis()+800;   
  }
}

double avergearray(int* arr, int number){
  int i;
  int max,min;
  double avg;
  long amount=0;
  if(number<=0){
    printf("Error number for the array to avraging!/n");
    return 0;
  }
  if(number<5){   //less than 5, calculated directly statistics
    for(i=0;i<number;i++){
      amount+=arr[i];
    }
    avg = amount/number;
    return avg;
  }else{
    if(arr[0]<arr[1]){
      min = arr[0];max=arr[1];
    }
    else{
      min=arr[1];max=arr[0];
    }
    for(i=2;i<number;i++){
      if(arr[i]<min){
        amount+=min;        //arr<min
        min=arr[i];
      }else {
        if(arr[i]>max){
          amount+=max;    //arr>max
          max=arr[i];
        }else{
          amount+=arr[i]; //min<=arr<=max
        }
      }//if
    }//for
    avg = (double)amount/(number-2);
  }//if
  return avg;
}
```

Before using the program, you need to correct some variables of the program according to the actual situation.

```c
#define VOLTAGE     3.37  //vcc voltage(unit: V)
#define LED         13    //operating instructions
#define ArrayLenth  40    //times of collection
#define orpPin      A7    //orp meter output,connect to Arduino controller ADC pin
#define calPin      A6    //orp cal control pin, get a offset by set it to low
```

- **VOLTAGE**: refers to the actual operating voltage of the sensor. It is recommended that you use a multimeter to measure the supply voltage of the pin, the more accurate the value, the more accurate the measurement. On my XIAO expansion board, the measured supply voltage is 3.37V.

- **LED**: The program adds the function of blinking LED as working indicators, which can be defined here as the LED pin numbers of the control board you are using.

- **ArrayLenth**: Number of samples per unit of time. The lower the value, the shorter the time to obtain ORP values, but it also makes the result values unstable. The default value is 40.

- **orpPin**: The orp pin of the sensor is connected to the pin number of the main control board.

- **calPin**: The cal pin of the sensor is connected to the pin number of the main control board.

After updating the program, select the development board model and port number of Seeed Studio XIAO SAMD21 and upload the program.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/6.png"/></div>

Turn on the serial monitor and set the baud rate to 9600, you will see the change of ORP value detected by the current sensor.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/4.png"/></div>

:::tip
If you are uploading the program after putting the sensor probe into the solution to be measured, with `ArrayLenth = 40`, it will take about **15min** of warm-up time until the ORP value stabilizes.
:::

#### Clean Grove ORP Sensor Pro probe

Several factors can lead to the blockage of ORP sensor’s diaphragms. In particular, junctions made of ceramic, or other porous material are prone to clogging. The most frequent reasons are listed here together with the respective cleaning procedures:

1. Blockage with silver sulfide (Ag2S): if the reference electrolyte contains silver ions and the sample being measured contains sulfides, the junction will get contaminated with a silver sulfide precipitate. To clear the junction of this contamination, clean it with 8% thiourea in 0.1 mol/L HCl solution for 5-60 minutes (Thiourea Cleaner is available from METTLER TOLEDO).

2. Blockage with silver chloride (AgCl): the silver ions from the reference electrolyte can also react with samples that contain chloride ions, resulting in an AgCl precipitate. This precipitate can be removed by soaking the electrode in a concentrated ammonia solution (35% NH3 aq.).

3. Blockage with proteins: junctions contaminated with proteins can often be cleaned by immersing the electrode in a pepsin/HCl (5 % pepsin in 0.1 mol/L HCl) solution for several hours (Pepsin-HCl Cleaner is available from METTLER TOLEDO).

4. Other junction blockages: if the junction is blocked with other contaminations, try cleaning the ORP sensor in an ultrasonic bath with water or with a 0.1 mol/L HCl solution.

:::caution
Please **DO NOT** leave the probe in a solution for a long time, as this can seriously shorten the life of the probe.
:::

#### Store Grove ORP Sensor Pro correctly

After use, rinse the electrode well with distilled water and tighten the protective case. ORP electrodes should be stored in the wetting cap filled with a reference electrolyte (often 3 mol/L KCl) or InLab storage solution. Store the half-cell dry. The electrode should be stored upright and at room temperature.

## Troubleshooting

- **Q1: Why is calibration not needed for Grove ORP Sensor Pro ?**

> A: Measuring redox means to measure the reduction potential of the solution. The raw value (mV reading) is the final result. If the redox electrode is verified by measuring in 220mV buffer solution and if it is not within 220 ± 20 mV, the sensor must be cleaned (and not calibrated).

- **What to do if Grove ORP Sensor Pro verification fails ?**

> A: The expected value for the Redox sensor is 220 ± 20 mV. If this condition is not met, it is suggested to clean the metallic ring or pin, using a wet tissue, followed by rinsing with distilled water and then re-measure mV value in redox buffer 220 mV. Another way to clean and remove deposits from the metal ring is to condition it with 0.1 mol/L HCI. Also in some cases, a change of reference electrolyte is recommended.

- **When are relative mV measurements done?**

> A: It might be that someone wants to correct the reading for any offset, for example, to know the potential against a hydrogen standard electrode instead of the Ag/AgCl reference. Therefore, relative mV measurements are performed, and one needs to enter the offset in the measurement parameters.

## Resources

- **[PDF]** [Grove ORP Sensor Kit Pro_v1.0 SCH](https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH_221019.pdf)

- **[ZIP]** [Grove ORP Sensor Kit Pro_v1.0 SCH&PCB](https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH&PCB_221019.zip)

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
