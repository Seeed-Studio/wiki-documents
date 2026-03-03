---
description: Adding more Grove modules into the Builder
title: Adding more Grove modules into the Builder
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /list_of_supported_grove_n_adding_more
last_update:
  date: 11/24/2023
  author: Matthew
---

# Overview

In this wiki, we are introducing how to add more Grove modules in to SenseCAP S2110 Sensor Builder and list all the supported ones.

## Add Grove - ±5A DC/AC Current Sensor (ACS70331) to the builder and applying

### 1. Build new libraries using GitHub source code

The contents here are on the [GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_S2110) where we maintain the code.

- **Step 1:** Add a `sensorNew.hpp` file to the `src\sensor` folder for the new sensor.

- **Step 2:** Define the sensor class and implement the `init()` and `sample()` functions.

 The sensor class should inherits from the `sensorClass` class, and implement the `init()` and `sample()` functions. 
   The `init()` function is used to initialize the sensor, and than returns a register offset value for Modbus communication.
   The `sample()` function is used to read the sensor data, returns true when the data is valid, and returns false when the data is invalid.

- **Step 3:** Include the `sensorNEW.hpp` file and call it.

 Add line `#include "sensorNew.hpp"` to the `src\sensor\sensorBuilder.hpp` file.
 In the `setup()` function of the `sensorBuilder.ino` file, create the new sensor class object and call the `SensorBuilder.addSensor()` function with it as an argument. 

Refer to the following code :

```cpp
void setup()
{
  Serial.begin(9600);
  SensorBuilder.check_grove();
 
  /* sensor list */
  sensorUltrasonic *ultrasonic = new sensorUltrasonic();
  SensorBuilder.addSensor(ultrasonic);
  
  // add new sensor to sensor list
  sensorNew *newSensor = new sensorNew();
  SensorBuilder.addSensor(newSensor);

  SensorBuilder.begin();
}
```

:::note
The Modbus register address for the new sensor will start from `0x0034`, the register bit width for each measurement value is 32, so the register address offset between two adjacent measurement values is 2.
:::

### 2. Knowledge of Modbus Register Table

Modbus register addresses 0x0000 to 0x0003 are reserved for storing module system information, where 0x0000 is the modbus address with a default value of 1 and a maximum value of 247, 0x0001 is the serial port baud rate with a default value of 96 (corresponding to 9600), and 0x0002 to 0x0003 are for software version.

<table>
  <thead>
    <tr>
      <th>Grove Sensor Name</th>
      <th>Register Name</th>
      <th>Register Address<br />(Hexadecimal)</th>
      <th>Register Address<br />(Decimal)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={3}>Grove - CO2 &amp; Temperature &amp; Humidity Sensor (SCD41)</td>
      <td>Temperature</td>
      <td>0x0004</td>
      <td>04</td>
    </tr>
    <tr>
      <td>Humidity</td>
      <td>0x0006</td>
      <td>06</td>
    </tr>
    <tr>
      <td>CO2</td>
      <td>0x0008</td>
      <td>08</td>
    </tr>
    <tr>
      <td>Grove - Light Sensor v1.2</td>
      <td>Light</td>
      <td>0x000A</td>
      <td>10</td>
    </tr><tr>
      <td>Grove - Flame Sensor</td>
      <td>Flame</td>
      <td>0x000C</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Grove - Oxygen Sensor (MIX8410)</td>
      <td>Oxygen</td>
      <td>0x000E</td>
      <td>14</td>
    </tr>
    <tr>
      <td rowSpan={3}>Grove - Sunlight sensor (SI1151)</td>
      <td>Light Intensity</td>
      <td>0x0010</td>
      <td>16</td>
    </tr>
    <tr>
      <td>Visible Light</td>
      <td>0x0012</td>
      <td>18</td>
    </tr>
    <tr>
      <td>UV</td>
      <td>0x0014</td>
      <td>20</td>
    </tr>
    <tr>
      <td rowSpan={3}>Grove Temperature and Barometer Sensor (BMP280)</td>
      <td>Barometric Temperature</td>
      <td>0x0016</td>
      <td>22</td>
    </tr>
    <tr>
      <td>Atmospheric Pressure</td>
      <td>0x0018</td>
      <td>24</td>
    </tr>
    <tr>
      <td>Height</td>
      <td>0x001A</td>
      <td>26</td>
    </tr>
    <tr>
      <td rowSpan={4}>Grove - Temperature Humidity Pressure Gas Sensor(BME680)</td>
      <td>Temperature</td>
      <td>0x001C</td>
      <td>28</td>
    </tr>
    <tr>
      <td>Atmospheric Pressure</td>
      <td>0x001E</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Humidity</td>
      <td>0x0020</td>
      <td>32</td>
    </tr>
    <tr>
      <td>Air Quality(VOC)</td>
      <td>0x0022</td>
      <td>34</td>
    </tr>
    <tr>
      <td rowSpan={4}>Grove - Gas Sensor V2(Multichannel)</td>
      <td>N02</td>
      <td>0x0024</td>
      <td>36</td>
    </tr>
    <tr>
      <td>C2H50H</td>
      <td>0x0026</td>
      <td>38</td>
    </tr>
    <tr>
      <td>VOC</td>
      <td>0x0028</td>
      <td>40</td>
    </tr>
    <tr>
      <td>CO</td>
      <td>0x002A</td>
      <td>42</td>
    </tr><tr>
      <td>Grove - UV Sensor</td>
      <td>UV Intensity</td>
      <td>0x002C</td>
      <td>44</td>
    </tr>
    <tr>
      <td>Grove - Turbidity Sensor Meter V1.0</td>
      <td>Turbidity</td>
      <td>0x002E</td>
      <td>46</td>
    </tr>
    <tr>
      <td>Grove - TDS Sensor</td>
      <td>TDS</td>
      <td>0x0030</td>
      <td>48</td>
    </tr>
    <tr>
      <td>Grove - Ultrasonic Ranger</td>
      <td>Distance</td>
      <td>0x0032</td>
      <td>50</td>
    </tr>
  </tbody>
</table>

### 3. Knowledge of Hardware Connection

Connect the SIG (signal) pin of the sensor to one of the analog pins of the any microcontroller, supply 5V-3.3V to VCC and GND to Ground of the microcontroller.  

The Grove sensor comes with a potentiometer mounted on it, that allows the user to fine tune with the gain, making adjustable to fit different input voltages. Its helps change sensor's sensitivity.

<div align="center"><img width={600} src="https://media-cdn.seeedstudio.com/media/wysiwyg/__16696942484712.png"/></div>


### 4. From steps above, we can have the library for Grove AC sensor:

Stick to the steps above, we have the library for applying Grove AC sensor.

```cpp
#ifndef _SENSOR_AC_H
#define _SENSOR_AC_H

#include "sensorClass.hpp"

#define AC_ADC_PIN A2
#define ADC_BITS 12
#define ADC_COUNTS (1<<ADC_BITS)

class sensorAC : public sensorClass
{
  public:
  sensorAC(): sensorClass("AC"){};
  ~sensorAC(){};

  uint16_t init(uint16_t reg, bool i2c_available);
  bool connected();
  bool sample();

  enum
  {
    AC = 0,
    MAX
  };
  private:
  	double voltCal = 523.56;
  	double phaseCal = 1.7;
  	unsigned int cycles = 20;
  	unsigned int timeout = 2000;
  	int SupplyVoltage = 3300;
  	int sampleV;
  	double lastFilteredV,filteredV;
  	double offsetV = ADC_COUNTS >> 1;
  	double phaseShiftedV;
  	double sqV,sumV;
  	int startV;
  	boolean lastVCross,checkVCross;
};

uint16_t sensorAC::init(uint16_t reg, bool i2c_available){
  uint16_t t_reg = reg; 

  for (uint16_t i = 0; i < sensorAC::MAX; i++)
    {
        sensorClass::reg_t value;
        value.addr = t_reg;
        value.type = sensorClass::regType_t::REG_TYPE_S32_ABCD;
        value.value.s32 = 0;
        t_reg += sensorClass::valueLength(value.type);
        m_valueVector.emplace_back(value);
    }

    _connected = i2c_available ? false : true;
    //_connected = true;
    return t_reg - reg;
}

bool sensorAC::sample()
{
	
  GROVE_SWITCH_ADC;
  pinMode(AC_ADC_PIN, INPUT);
  
  unsigned int crossCount = 0;
  unsigned int numberOfSamples = 0;
  
  unsigned long start = millis();
  
  while(1){
	int startV = analogRead(AC_ADC_PIN);
	if((startV<(ADC_COUNTS*0.51)) && (startV>(ADC_COUNTS*0.49)))
		break;
	if((millis()-start)>timeout)	
		break;
  }
  
  start = millis();
  
  while((crossCount<cycles) && ((millis()-start)<timeout))
  {
  	numberOfSamples++;
  	lastFilteredV = filteredV;
  	
  	sampleV = analogRead(AC_ADC_PIN);
  	offsetV = offsetV + ((sampleV - offsetV)/ADC_COUNTS);
  	filteredV = sampleV - offsetV;
  	
  	sqV = filteredV * filteredV;
  	sumV += sqV;
  	
  	phaseShiftedV = lastFilteredV + phaseCal * (filteredV - lastFilteredV);
  	
  	lastVCross = checkVCross;
  	if(sampleV>startV)
  		checkVCross = true;
  	else 
  		checkVCross = false;
  	if(numberOfSamples == 1)
  		lastVCross = checkVCross;
  	if(lastVCross !=checkVCross)
  		crossCount++;
  }
  
  double V_RATIO = voltCal * ((SupplyVoltage/1000.0)/(ADC_COUNTS));
  float value = V_RATIO * sqrt(sumV/numberOfSamples);
  m_valueVector[AC].value.s32 = value * SCALE;
  //Serial.println(value);
  sumV = 0; 
  
  return true;
}

bool sensorAC::connected()
{
  return _connected;
}

#endif
```

### 5. Using Arduino to program to test first

The program takes a few parameters, that need to be initialized before running the program. This ensure that the program is running correctly with the sensor and to get accurate values.

First flash the program into the microcontroller, then calibrate the parameters to fit the readings.

```cpp
#define AC_ADC_PIN A2				//here pin A2 is used
#define ADC_BITS 12					//depends on microcontroller to microcontroller
#define Calibration_Value 523.56	//depends on the calibration result
#define Phase_Shift 1.7 			//depends on the calibration result

void setup() {
  Serial.begin(115200);
  pinMode(AC_ADC_PIN, INPUT);
}

int ADC_COUNTS = (1<<ADC_BITS);
double voltCal = Calibration_Value;
double phaseCal = Phase_Shift;
unsigned int cycles = 10;			//Number of AC Cycles you want to measure
unsigned int timeout = 500;			//Timeout 
int SupplyVoltage = 3300;
int sampleV;
double lastFilteredV,filteredV;
double offsetV = ADC_COUNTS >> 1;
double phaseShiftedV;
double sqV,sumV;
int startV;
boolean lastVCross,checkVCross;

void loop() {
  unsigned int crossCount = 0;
  unsigned int numberOfSamples = 0;
  
  unsigned long start = millis();
  
  while(1){
  int startV = analogRead(AC_ADC_PIN);
  if((startV<(ADC_COUNTS*0.51)) && (startV>(ADC_COUNTS*0.49)))
    break;
  if((millis()-start)>timeout)  
    break;
  }
  
  start = millis();
  
  while((crossCount<cycles) && ((millis()-start)<timeout))
  {
    numberOfSamples++;
    lastFilteredV = filteredV;
    
    sampleV = analogRead(AC_ADC_PIN);
    offsetV = offsetV + ((sampleV - offsetV)/ADC_COUNTS);
    filteredV = sampleV - offsetV;
    
    sqV = filteredV * filteredV;
    sumV += sqV;
    
    phaseShiftedV = lastFilteredV + phaseCal * (filteredV - lastFilteredV);
    
    lastVCross = checkVCross;
    if(sampleV>startV)
      checkVCross = true;
    else 
      checkVCross = false;
    if(numberOfSamples == 1)
      lastVCross = checkVCross;
    if(lastVCross !=checkVCross)
      crossCount++;
  }
  
  double V_RATIO = voltCal * ((SupplyVoltage/1000.0)/(ADC_COUNTS));
  float value = V_RATIO * sqrt(sumV/numberOfSamples);
  Serial.println(value);
  sumV = 0; 

}
```

### 6. Get Calibration value

Initially the Analog pin is set to the A2 pin, could be changed according to your requirement, using AC_ADC_PIN parameter.
Calibration_Value and Phase_Shift value, need to be changed every time you change the voltage source as the AC voltage varies from country to country or sometimes even socket to socket.

The program outputs the sensor value onto the serial monitor. One can also open the serial plotter to view the voltage vs time graph.

- Step 1: Take the multimeter and measure the AC voltage and note it down.
- Step 2: Similarly note the voltage shown in the serial monitor.

Here in my case, the reading from the multimeter is 220V RMS voltage, while the sensor shows 718.87V on the serial monitor, in order to get an accurate calibration value, we need to do simple math, using the following formula.

![Mains Voltage / x = Sensor voltage / Initial Calibration](https://s0.wp.com/latex.php?latex=+%5Cdfrac%7BMains+Voltage%7D%7Bx%7D+%3D+%5Cdfrac%7BSensor+voltage%7D%7BInitail+Calibration%7D&bg=ffffff&fg=000&s=0&201002)

- Step 3: Find the value of x and replace it with Calibration_Value in the program and flash the program to the microcontroller.

![x = (mains voltage × initial calibration) / Sensor voltage](https://s0.wp.com/latex.php?latex=+x+%3D+%5Cdfrac%7Bmains+voltage+%5Ctimes+initial+calibration%7D%7BSensor+voltage%7D&bg=ffffff&fg=000&s=0&c=20201002)
You can change the other parameters like Phase_Shift, Number of AC cycles and timeout according to your configuration or keep it default.

### Reference

- You can refer the [Grove AC-Voltage Sensor Library](https://github.com/mcmchris/mcm-grove-voltage-sensor) for more information.
- More details on the calculation can be found [here](https://bestengineeringprojects.com/how-to-ac-voltage-measurement-using-arduino-without-transformer/)

## The list of supported Grove modules for SenseCAP S2110 Sensor Builder

Currently, SenseCAP S2110 Sensor Builder supports the following Grove modules out-of-the-box to communicate with SenseCAP Data Logger and send the sensor data to the SenseCAP platform via LoRa.

- [Grove - Temperature and Barometer Sensor (BMP280)](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)
- [Grove - Oxygen Sensor (MIX8410)](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)
- [Grove - CO2 & Temperature & Humidity Sensor - SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)
- [Grove - Sunlight Sensor - SI1151](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)
- [Grove - Light Sensor v1.2 - LS06-S phototransistor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - Flame Sensor](https://www.seeedstudio.com/Grove-Flame-Sensor.html)
- [Grove - Gas Sensor(BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove - Multichannel Gas Sensor v2](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html?queryID=e92bca5d79e17a6d5bf1447be36e2ee2&objectID=4569&indexName=bazaar_retailer_products)
- [Grove - TDS Sensor/Meter For Water Quality (Total Dissolved Solids)](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html?queryID=9f138cfc508f141092493577c1ca83bb&objectID=4400&indexName=bazaar_retailer_products)
- [Grove - UV Sensor](https://www.seeedstudio.com/Grove-UV-Sensor.html?queryID=07ecb93f63b4035df7dfa9aea8b1e498&objectID=1345&indexName=bazaar_retailer_products)
- [Grove - Ultrasonic Distance Sensor](https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html?queryID=ebe18a5e13611be3b60f176e7bfabde7&objectID=2281&indexName=bazaar_retailer_products)
- [Grove - Turbidity Sensor](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html?queryID=42f9c89339bce9fbff617e5c8a0328eb&objectID=4399&indexName=bazaar_retailer_products)
- [Grove - Lightning Sensor](https://www.hackster.io/jojang2u/use-the-as3935-to-detect-lightning-to-predict-the-weather-9170e7)
- [Grove - ±5A DC/AC Current Sensor (ACS70331)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- Thanks [Mohammed Adnan Khan's efforts](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904) and your work will be [exhibited](https://wiki.seeedstudio.com/Honorary-Contributors/).


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
