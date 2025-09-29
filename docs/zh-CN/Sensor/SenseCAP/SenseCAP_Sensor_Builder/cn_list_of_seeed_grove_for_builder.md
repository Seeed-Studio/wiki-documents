---
description: 向构建器中添加更多 Grove 模块
title: 向构建器中添加更多 Grove 模块
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/list_of_supported_grove_n_adding_more
last_update:
  date: 11/24/2023
  author: Matthew
---

# 概述

在本 wiki 中，我们将介绍如何向 SenseCAP S2110 传感器构建器中添加更多 Grove 模块，并列出所有支持的模块。

## 将 Grove - ±5A DC/AC 电流传感器 (ACS70331) 添加到构建器并应用

### 1. 使用 GitHub 源代码构建新库

这里的内容位于我们维护代码的 [GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_S2110) 上。

- **步骤 1：** 在 `src\sensor` 文件夹中为新传感器添加一个 `sensorNew.hpp` 文件。

- **步骤 2：** 定义传感器类并实现 `init()` 和 `sample()` 函数。

 传感器类应该继承自 `sensorClass` 类，并实现 `init()` 和 `sample()` 函数。
   `init()` 函数用于初始化传感器，然后返回用于 Modbus 通信的寄存器偏移值。
   `sample()` 函数用于读取传感器数据，当数据有效时返回 true，当数据无效时返回 false。

- **步骤 3：** 包含 `sensorNEW.hpp` 文件并调用它。

 在 `src\sensor\sensorBuilder.hpp` 文件中添加 `#include "sensorNew.hpp"` 行。
 在 `sensorBuilder.ino` 文件的 `setup()` 函数中，创建新的传感器类对象，并以它作为参数调用 `SensorBuilder.addSensor()` 函数。

参考以下代码：

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
新传感器的 Modbus 寄存器地址将从 `0x0034` 开始，每个测量值的寄存器位宽为 32，因此两个相邻测量值之间的寄存器地址偏移量为 2。
:::

### 2. Modbus 寄存器表知识

Modbus 寄存器地址 0x0000 到 0x0003 保留用于存储模块系统信息，其中 0x0000 是 modbus 地址，默认值为 1，最大值为 247，0x0001 是串口波特率，默认值为 96（对应 9600），0x0002 到 0x0003 用于软件版本。

<table>
  <thead>
    <tr>
      <th>Grove 传感器名称</th>
      <th>寄存器名称</th>
      <th>寄存器地址<br />（十六进制）</th>
      <th>寄存器地址<br />（十进制）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={3}>Grove - CO2 &amp; Temperature &amp; Humidity Sensor (SCD41)</td>
      <td>温度</td>
      <td>0x0004</td>
      <td>04</td>
    </tr>
    <tr>
      <td>湿度</td>
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
      <td>光照</td>
      <td>0x000A</td>
      <td>10</td>
    </tr><tr>
      <td>Grove - Flame Sensor</td>
      <td>火焰</td>
      <td>0x000C</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Grove - Oxygen Sensor (MIX8410)</td>
      <td>氧气</td>
      <td>0x000E</td>
      <td>14</td>
    </tr>
    <tr>
      <td rowSpan={3}>Grove - Sunlight sensor (SI1151)</td>
      <td>光照强度</td>
      <td>0x0010</td>
      <td>16</td>
    </tr>
    <tr>
      <td>可见光</td>
      <td>0x0012</td>
      <td>18</td>
    </tr>
    <tr>
      <td>紫外线</td>
      <td>0x0014</td>
      <td>20</td>
    </tr>
    <tr>
      <td rowSpan={3}>Grove Temperature and Barometer Sensor (BMP280)</td>
      <td>气压温度</td>
      <td>0x0016</td>
      <td>22</td>
    </tr>
    <tr>
      <td>大气压力</td>
      <td>0x0018</td>
      <td>24</td>
    </tr>
    <tr>
      <td>高度</td>
      <td>0x001A</td>
      <td>26</td>
    </tr>
    <tr>
      <td rowSpan={4}>Grove - Temperature Humidity Pressure Gas Sensor(BME680)</td>
      <td>温度</td>
      <td>0x001C</td>
      <td>28</td>
    </tr>
    <tr>
      <td>大气压力</td>
      <td>0x001E</td>
      <td>30</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td>0x0020</td>
      <td>32</td>
    </tr>
    <tr>
      <td>空气质量(VOC)</td>
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
      <td>紫外线强度</td>
      <td>0x002C</td>
      <td>44</td>
    </tr>
    <tr>
      <td>Grove - Turbidity Sensor Meter V1.0</td>
      <td>浊度</td>
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
      <td>距离</td>
      <td>0x0032</td>
      <td>50</td>
    </tr>
  </tbody>
</table>

### 3. 硬件连接知识

将传感器的 SIG（信号）引脚连接到任何微控制器的模拟引脚之一，为 VCC 提供 5V-3.3V 电源，并将 GND 连接到微控制器的地线。

Grove 传感器配有一个安装在其上的电位器，允许用户微调增益，使其可调节以适应不同的输入电压。它有助于改变传感器的灵敏度。

<div align="center"><img width={600} src="https://media-cdn.seeedstudio.com/media/wysiwyg/__16696942484712.png"/></div>


### 4. 从上述步骤中，我们可以获得 Grove 交流传感器的库：

按照上述步骤，我们有了应用 Grove 交流传感器的库。

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

### 5. 首先使用 Arduino 编程进行测试

该程序需要一些参数，这些参数需要在运行程序之前进行初始化。这确保程序与传感器正确运行并获得准确的数值。

首先将程序烧录到微控制器中，然后校准参数以适配读数。

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

### 6. 获取校准值

最初模拟引脚设置为 A2 引脚，可以根据您的需求使用 AC_ADC_PIN 参数进行更改。
每次更换电压源时都需要更改 Calibration_Value 和 Phase_Shift 值，因为交流电压在不同国家之间会有所不同，有时甚至在不同插座之间也会有所不同。

程序将传感器值输出到串行监视器。您也可以打开串行绘图仪来查看电压与时间的图表。

- 步骤 1：使用万用表测量交流电压并记录下来。
- 步骤 2：同样记录串行监视器中显示的电压。

在我的情况下，万用表的读数是 220V RMS 电压，而传感器在串行监视器上显示 718.87V，为了获得准确的校准值，我们需要进行简单的数学计算，使用以下公式。

![Mains Voltage / x = Sensor voltage / Initial Calibration](https://s0.wp.com/latex.php?latex=+%5Cdfrac%7BMains+Voltage%7D%7Bx%7D+%3D+%5Cdfrac%7BSensor+voltage%7D%7BInitail+Calibration%7D&bg=ffffff&fg=000&s=0&201002)

- 步骤 3：找到 x 的值，并在程序中用它替换 Calibration_Value，然后将程序刷写到微控制器。

![x = (mains voltage × initial calibration) / Sensor voltage](https://s0.wp.com/latex.php?latex=+x+%3D+%5Cdfrac%7Bmains+voltage+%5Ctimes+initial+calibration%7D%7BSensor+voltage%7D&bg=ffffff&fg=000&s=0&c=20201002)
您可以根据您的配置更改其他参数，如 Phase_Shift、交流周期数和超时，或保持默认设置。

### 参考

- 您可以参考 [Grove AC-Voltage Sensor Library](https://github.com/mcmchris/mcm-grove-voltage-sensor) 获取更多信息。
- 有关计算的更多详细信息可以在[这里](https://bestengineeringprojects.com/how-to-ac-voltage-measurement-using-arduino-without-transformer/)找到

## SenseCAP S2110 Sensor Builder 支持的 Grove 模块列表

目前，SenseCAP S2110 Sensor Builder 开箱即用地支持以下 Grove 模块，可与 SenseCAP Data Logger 通信并通过 LoRa 将传感器数据发送到 SenseCAP 平台。

- [Grove - 温度和气压传感器 (BMP280)](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)
- [Grove - 氧气传感器 (MIX8410)](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)
- [Grove - CO2 & 温度 & 湿度传感器 - SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)
- [Grove - 日光传感器 - SI1151](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)
- [Grove - 光线传感器 v1.2 - LS06-S 光电晶体管](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - 火焰传感器](https://www.seeedstudio.com/Grove-Flame-Sensor.html)
- [Grove - 气体传感器(BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove - 多通道气体传感器 v2](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html?queryID=e92bca5d79e17a6d5bf1447be36e2ee2&objectID=4569&indexName=bazaar_retailer_products)
- [Grove - TDS 传感器/仪表用于水质检测（总溶解固体）](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html?queryID=9f138cfc508f141092493577c1ca83bb&objectID=4400&indexName=bazaar_retailer_products)
- [Grove - UV 传感器](https://www.seeedstudio.com/Grove-UV-Sensor.html?queryID=07ecb93f63b4035df7dfa9aea8b1e498&objectID=1345&indexName=bazaar_retailer_products)
- [Grove - 超声波距离传感器](https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html?queryID=ebe18a5e13611be3b60f176e7bfabde7&objectID=2281&indexName=bazaar_retailer_products)
- [Grove - 浊度传感器](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html?queryID=42f9c89339bce9fbff617e5c8a0328eb&objectID=4399&indexName=bazaar_retailer_products)
- [Grove - 闪电传感器](https://www.hackster.io/jojang2u/use-the-as3935-to-detect-lightning-to-predict-the-weather-9170e7)
- [Grove - ±5A DC/AC 电流传感器 (ACS70331)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 感谢 [Mohammed Adnan Khan 的努力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904)，您的工作将会被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。


## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
