---
description: Grove モジュールを Builder に追加する方法
title: Grove モジュールを Builder に追加する方法
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/list_of_supported_grove_n_adding_more
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# 概要

この Wiki では、SenseCAP S2110 Sensor Builder にさらに多くの Grove モジュールを追加する方法と、サポートされているモジュールの一覧を紹介します。

## Grove - ±5A DC/AC Current Sensor (ACS70331) を Builder に追加して適用する方法

### 1. GitHub ソースコードを使用して新しいライブラリを構築する

内容は [GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_S2110) にあります。ここでコードを管理しています。

- **ステップ 1:** 新しいセンサー用に `sensorNew.hpp` ファイルを `src\sensor` フォルダーに追加します。

- **ステップ 2:** センサークラスを定義し、`init()` および `sample()` 関数を実装します。

  センサークラスは `sensorClass` クラスを継承し、`init()` および `sample()` 関数を実装する必要があります。
  `init()` 関数はセンサーを初期化し、Modbus 通信のためのレジスターオフセット値を返します。
  `sample()` 関数はセンサーデータを読み取り、データが有効な場合は true を返し、無効な場合は false を返します。

- **ステップ 3:** `sensorNEW.hpp` ファイルをインクルードして呼び出します。

  `src\sensor\sensorBuilder.hpp` ファイルに `#include "sensorNew.hpp"` 行を追加します。
  `sensorBuilder.ino` ファイルの `setup()` 関数で、新しいセンサークラスオブジェクトを作成し、それを引数として `SensorBuilder.addSensor()` 関数を呼び出します。

以下のコードを参照してください：

```cpp
void setup()
{
  Serial.begin(9600);
  SensorBuilder.check_grove();
 
  /* センサーリスト */
  sensorUltrasonic *ultrasonic = new sensorUltrasonic();
  SensorBuilder.addSensor(ultrasonic);
  
  // 新しいセンサーをセンサーリストに追加
  sensorNew *newSensor = new sensorNew();
  SensorBuilder.addSensor(newSensor);

  SensorBuilder.begin();
}
```

:::note
新しいセンサーの Modbus レジスターアドレスは `0x0034` から始まります。各測定値のレジスタービット幅は 32 であるため、隣接する測定値間のレジスターアドレスオフセットは 2 です。
:::

### 2. Modbus レジスターテーブルの知識

Modbus レジスターアドレス `0x0000` から `0x0003` はモジュールシステム情報を格納するために予約されています。`0x0000` はデフォルト値が 1、最大値が 247 の Modbus アドレスであり、`0x0001` はデフォルト値が 96（9600 に対応）のシリアルポートボーレートです。`0x0002` から `0x0003` はソフトウェアバージョン用です。

<table>
  <thead>
    <tr>
      <th>Grove センサー名</th>
      <th>レジスター名</th>
      <th>レジスターアドレス<br />(16進数)</th>
      <th>レジスターアドレス<br />(10進数)</th>
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
      <td>光</td>
      <td>0x000A</td>
      <td>10</td>
    </tr><tr>
      <td>Grove - Flame Sensor</td>
      <td>炎</td>
      <td>0x000C</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Grove - Oxygen Sensor (MIX8410)</td>
      <td>酸素</td>
      <td>0x000E</td>
      <td>14</td>
    </tr>
    <tr>
      <td rowSpan={3}>Grove - Sunlight sensor (SI1151)</td>
      <td>光強度</td>
      <td>0x0010</td>
      <td>16</td>
    </tr>
    <tr>
      <td>可視光</td>
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
      <td>気圧温度</td>
      <td>0x0016</td>
      <td>22</td>
    </tr>
    <tr>
      <td>大気圧</td>
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
      <td>大気圧</td>
      <td>0x001E</td>
      <td>30</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td>0x0020</td>
      <td>32</td>
    </tr>
    <tr>
      <td>空気質(VOC)</td>
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
      <td>UV 強度</td>
      <td>0x002C</td>
      <td>44</td>
    </tr>
    <tr>
      <td>Grove - Turbidity Sensor Meter V1.0</td>
      <td>濁度</td>
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
      <td>距離</td>
      <td>0x0032</td>
      <td>50</td>
    </tr>
  </tbody>
</table>

### 3. ハードウェア接続の知識

センサーの SIG（信号）ピンを任意のマイクロコントローラーのアナログピンのいずれかに接続し、5V-3.3V を VCC に供給し、GND をマイクロコントローラーのグランドに接続します。

Grove センサーにはポテンショメーターが取り付けられており、ゲインを微調整することで異なる入力電圧に適応させることができます。これによりセンサーの感度を変更することができます。

<div align="center"><img width={600} src="https://media-cdn.seeedstudio.com/media/wysiwyg/__16696942484712.png"/></div>

### 4. 上記の手順に従って Grove AC センサー用のライブラリを作成する

上記の手順に従って、Grove AC センサーを適用するためのライブラリを作成します。

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

### 5. Arduinoを使用して最初のテストをプログラムする

このプログラムはいくつかのパラメータを受け取り、プログラムを実行する前に初期化する必要があります。これにより、センサーと正確な値を得るためにプログラムが正しく動作することが保証されます。

まず、プログラムをマイクロコントローラーにフラッシュし、その後、読み取り値に合わせてパラメータをキャリブレーションします。

```cpp
#define AC_ADC_PIN A2				//ここではピンA2を使用
#define ADC_BITS 12					//マイクロコントローラーによって異なる
#define Calibration_Value 523.56	//キャリブレーション結果に依存
#define Phase_Shift 1.7 			//キャリブレーション結果に依存

void setup() {
  Serial.begin(115200);
  pinMode(AC_ADC_PIN, INPUT);
}

int ADC_COUNTS = (1<<ADC_BITS);
double voltCal = Calibration_Value;
double phaseCal = Phase_Shift;
unsigned int cycles = 10;			//測定したいACサイクルの数
unsigned int timeout = 500;			//タイムアウト
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

### 6. キャリブレーション値を取得する

初期設定では、アナログピンはA2ピンに設定されていますが、必要に応じてAC_ADC_PINパラメータを使用して変更できます。  
キャリブレーション値（Calibration_Value）と位相シフト値（Phase_Shift）は、電圧源を変更するたびに変更する必要があります。これは、AC電圧が国や場合によってはコンセントごとに異なるためです。

プログラムはセンサー値をシリアルモニターに出力します。また、シリアルプロッターを開いて電圧と時間のグラフを表示することもできます。

- **ステップ1**: マルチメーターを使用してAC電圧を測定し、その値を記録します。
- **ステップ2**: 同様に、シリアルモニターに表示される電圧を記録します。

ここでは、マルチメーターの読み取り値が220V RMS電圧であり、センサーがシリアルモニターに718.87Vを表示している場合、正確なキャリブレーション値を得るために以下の式を使用して簡単な計算を行う必要があります。

![数式: (Mains Voltage)/x = (Sensor voltage)/(Initial Calibration)](https://s0.wp.com/latex.php?latex=+%5Cdfrac%7BMains+Voltage%7D%7Bx%7D+%3D+%5Cdfrac%7BSensor+voltage%7D%7BInitail+Calibration%7D&bg=ffffff&fg=000&s=0&201002)

- **ステップ3**: xの値を求め、プログラム内のCalibration_Valueに置き換え、プログラムをマイクロコントローラーにフラッシュします。

![数式: x = (mains voltage × initial calibration)/(Sensor voltage)](https://s0.wp.com/latex.php?latex=+x+%3D+%5Cdfrac%7Bmains+voltage+%5Ctimes+initial+calibration%7D%7BSensor+voltage%7D&bg=ffffff&fg=000&s=0&c=20201002)

Phase_Shift、ACサイクル数、タイムアウトなどの他のパラメータは、設定に応じて変更するか、デフォルトのままにしておくことができます。

### 参考文献

- 詳細については、[Grove AC-Voltage Sensor Library](https://github.com/mcmchris/mcm-grove-voltage-sensor)を参照してください。
- 計算に関する詳細は[こちら](https://bestengineeringprojects.com/how-to-ac-voltage-measurement-using-arduino-without-transformer/)をご覧ください。

## SenseCAP S2110 Sensor Builderで対応しているGroveモジュールの一覧

現在、SenseCAP S2110 Sensor Builderは以下のGroveモジュールを標準でサポートしており、SenseCAP Data Loggerと通信し、センサーデータをLoRa経由でSenseCAPプラットフォームに送信することができます。

- [Grove - 温度および気圧センサー (BMP280)](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)
- [Grove - 酸素センサー (MIX8410)](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)
- [Grove - CO2 & 温度 & 湿度センサー - SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)
- [Grove - 日光センサー - SI1151](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)
- [Grove - 光センサー v1.2 - LS06-S フォトトランジスタ](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)
- [Grove - 炎センサー](https://www.seeedstudio.com/Grove-Flame-Sensor.html)
- [Grove - ガスセンサー(BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove - マルチチャンネルガスセンサー v2](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html?queryID=e92bca5d79e17a6d5bf1447be36e2ee2&objectID=4569&indexName=bazaar_retailer_products)
- [Grove - TDSセンサー/水質メーター (総溶解固形分)](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html?queryID=9f138cfc508f141092493577c1ca83bb&objectID=4400&indexName=bazaar_retailer_products)
- [Grove - UVセンサー](https://www.seeedstudio.com/Grove-UV-Sensor.html?queryID=07ecb93f63b4035df7dfa9aea8b1e498&objectID=1345&indexName=bazaar_retailer_products)
- [Grove - 超音波距離センサー](https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html?queryID=ebe18a5e13611be3b60f176e7bfabde7&objectID=2281&indexName=bazaar_retailer_products)
- [Grove - 濁度センサー](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html?queryID=42f9c89339bce9fbff617e5c8a0328eb&objectID=4399&indexName=bazaar_retailer_products)
- [Grove - 雷センサー](https://www.hackster.io/jojang2u/use-the-as3935-to-detect-lightning-to-predict-the-weather-9170e7)
- [Grove - ±5A DC/AC電流センサー (ACS70331)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によって支援されています。
- [Mohammed Adnan Khanの貢献](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904)に感謝します。あなたの作業は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>