---
description: Builderにより多くのGroveモジュールを追加する
title: Builderにより多くのGroveモジュールを追加する
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/list_of_supported_grove_n_adding_more
last_update:
  date: 11/24/2023
  author: Matthew
---

# 概要

このwikiでは、SenseCAP S2110 Sensor Builderにより多くのGroveモジュールを追加する方法を紹介し、サポートされているすべてのモジュールをリストアップします。

## Grove - ±5A DC/AC電流センサー（ACS70331）をビルダーに追加して適用する

### 1. GitHubソースコードを使用して新しいライブラリを構築する

ここでの内容は、コードを維持している[GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_S2110)にあります。

- **ステップ1:** 新しいセンサー用の`sensorNew.hpp`ファイルを`src\sensor`フォルダに追加します。

- **ステップ2:** センサークラスを定義し、`init()`と`sample()`関数を実装します。

 センサークラスは`sensorClass`クラスから継承し、`init()`と`sample()`関数を実装する必要があります。
   `init()`関数はセンサーを初期化するために使用され、Modbus通信用のレジスタオフセット値を返します。
   `sample()`関数はセンサーデータを読み取るために使用され、データが有効な場合はtrueを返し、データが無効な場合はfalseを返します。

- **ステップ3:** `sensorNEW.hpp`ファイルをインクルードして呼び出します。

 `src\sensor\sensorBuilder.hpp`ファイルに`#include "sensorNew.hpp"`の行を追加します。
 `sensorBuilder.ino`ファイルの`setup()`関数で、新しいセンサークラスオブジェクトを作成し、それを引数として`SensorBuilder.addSensor()`関数を呼び出します。

以下のコードを参照してください：

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
新しいセンサーのModbusレジスタアドレスは`0x0034`から開始され、各測定値のレジスタビット幅は32であるため、隣接する2つの測定値間のレジスタアドレスオフセットは2です。
:::

### 2. Modbusレジスタテーブルの知識

Modbusレジスタアドレス0x0000から0x0003は、モジュールシステム情報の保存用に予約されています。0x0000はmodbusアドレスでデフォルト値は1、最大値は247です。0x0001はシリアルポートボーレートでデフォルト値は96（9600に対応）です。0x0002から0x0003はソフトウェアバージョン用です。

<table>
  <thead>
    <tr>
      <th>Groveセンサー名</th>
      <th>レジスタ名</th>
      <th>レジスタアドレス<br />(16進数)</th>
      <th>レジスタアドレス<br />(10進数)</th>
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

### 3. ハードウェア接続の知識

センサーのSIG（信号）ピンを任意のマイクロコントローラーのアナログピンの1つに接続し、VCCに5V-3.3Vを供給し、マイクロコントローラーのGNDにGroundを接続します。

Groveセンサーには、ユーザーがゲインを微調整できるポテンショメーターが搭載されており、異なる入力電圧に合わせて調整可能です。これによりセンサーの感度を変更できます。

<div align="center"><img width={600} src="https://media-cdn.seeedstudio.com/media/wysiwyg/__16696942484712.png"/></div>


### 4. 上記の手順から、Grove ACセンサー用のライブラリを取得できます：

上記の手順に従って、Grove ACセンサーを適用するためのライブラリを取得しました。

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

### 5. Arduinoを使用してプログラムで最初にテストする

プログラムはいくつかのパラメータを必要とし、プログラムを実行する前に初期化する必要があります。これにより、プログラムがセンサーと正しく動作し、正確な値を取得できることが保証されます。

まず、プログラムをマイクロコントローラーにフラッシュし、次に読み取り値に合わせてパラメータを校正します。

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

### 6. キャリブレーション値の取得

初期状態では、アナログピンはA2ピンに設定されていますが、AC_ADC_PINパラメータを使用して要件に応じて変更できます。
Calibration_ValueとPhase_Shift値は、電圧源を変更するたびに変更する必要があります。AC電圧は国によって、時にはコンセントによっても異なるためです。

プログラムはセンサー値をシリアルモニターに出力します。シリアルプロッターを開いて電圧対時間のグラフを表示することもできます。

- ステップ1：マルチメーターを使用してAC電圧を測定し、記録します。
- ステップ2：同様に、シリアルモニターに表示される電圧を記録します。

私の場合、マルチメーターからの読み取り値は220V RMS電圧ですが、センサーはシリアルモニターで718.87Vを示しています。正確なキャリブレーション値を得るために、以下の式を使用して簡単な計算を行う必要があります。

![Mains Voltage / x = Sensor voltage / Initial Calibration](https://s0.wp.com/latex.php?latex=+%5Cdfrac%7BMains+Voltage%7D%7Bx%7D+%3D+%5Cdfrac%7BSensor+voltage%7D%7BInitail+Calibration%7D&bg=ffffff&fg=000&s=0&201002)

- ステップ3：xの値を求め、プログラムのCalibration_Valueと置き換えて、プログラムをマイクロコントローラーにフラッシュします。

![x = (mains voltage × initial calibration) / Sensor voltage](https://s0.wp.com/latex.php?latex=+x+%3D+%5Cdfrac%7Bmains+voltage+%5Ctimes+initial+calibration%7D%7BSensor+voltage%7D&bg=ffffff&fg=000&s=0&c=20201002)
Phase_Shift、ACサイクル数、タイムアウトなどの他のパラメータは、設定に応じて変更するか、デフォルトのままにしておくことができます。

### リファレンス

- 詳細については、[Grove AC-Voltage Sensor Library](https://github.com/mcmchris/mcm-grove-voltage-sensor)を参照してください。
- 計算の詳細は[こちら](https://bestengineeringprojects.com/how-to-ac-voltage-measurement-using-arduino-without-transformer/)で確認できます。

## SenseCAP S2110 Sensor BuilderでサポートされているGroveモジュールのリスト

現在、SenseCAP S2110 Sensor Builderは、SenseCAP Data Loggerと通信し、LoRa経由でSenseCAPプラットフォームにセンサーデータを送信するために、以下のGroveモジュールをすぐに使用できるようサポートしています。

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

## ✨ コントリビュータープロジェクト

- このプロジェクトは、Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Mohammed Adnan Khanの貢献](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904)に感謝し、あなたの作業は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。


## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
