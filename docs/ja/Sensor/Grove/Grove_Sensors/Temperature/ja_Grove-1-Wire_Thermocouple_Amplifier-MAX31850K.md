---
description: Grove - 1-Wire Thermocouple Amplifier(MAX31850K)
title: Grove - 1-Wire Thermocouple Amplifier(MAX31850K)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/main.JPG" /></div>

Grove - 1-Wire Thermocouple Amplifier (MAX31850K) は、14ビットの解像度と冷接点補償を備えた熱電対からデジタルへのコンバーターです。このモジュールは、K型熱電対と組み合わせて使用するように設計されています。熱電対はサーミスタよりもはるかに広い測定範囲を持っています。例えば、当社ウェブサイトで販売しているこの[K型熱電対](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html)は、-50℃から+600℃までの測定範囲を持っています。

このモジュールは、アンプ、ADC、および64ビットROMを統合したMAX31850Kをベースにしています。64ビットROMのおかげで、各デバイスにはユニークな64ビットシリアルコードがあり、複数のユニットが同じ1-Wireバス上で動作することが可能です。そのため、1つのマイクロコントローラー（マスターデバイス）を使用して広い範囲に分散した多くの熱電対の温度を監視するのが簡単です。

再度強調しますが、このモジュールは単独では動作できません。K型熱電対と組み合わせて使用する必要があります。もしお持ちでない場合は、当社のバザールで販売している[Thermocouple Temperature Sensor K Type-1M](https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html)を検討してください。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-%28MAX31850K%29-p-3159.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 1-Wire Thermocouple Amplifier (MAX31850K) | 初版                                                                                               | 2018年8月      |

## 特徴

- 冷接点補償を統合
- 広い変換範囲：-270℃から+1768℃までの読み取りが可能
- 14ビット、0.25℃の解像度
- K型以外の熱電対では動作しない
- 熱電対のショートをGNDまたはVDDに検出
- 開放熱電対を検出

:::caution
このモジュールは-270℃から+1768℃まで変換可能ですが、使用する熱電対によって温度測定範囲が制限されることがあります。
:::

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V/5V |
|温度解像度|14ビット|
|温度精度|± 2℃ |
|動作温度範囲|-40℃から+125℃|
|読み取り可能範囲|-270℃から+1768℃|
|保管温度範囲|-65℃から+150℃ |
|入力ジャック|DIP Female Blue-2Pin|
|出力インターフェース|1-Wireバス|
|サイズ|長さ: 40mm 幅: 20mm 高さ: 18mm|
|重量|4.8g|
|パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 20mm|
|総重量|11g|

## アプリケーション

- 医療
- 家電
- 産業用
- HVAC（暖房、換気、空調）

## ハードウェア概要

### ピンマップ

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/pin_map_back.jpg" /></div>

### 回路図

**入力ジャック**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/schematic_1.jpg" /></div>

小信号レベルが関与しているため、ノイズをフィルタリングするために多くの対策を講じています。

- **1--L1, L2**  
  熱電対は最大1メートルの長さまで使用します。このような長いワイヤはアンテナと見なされ、空間電場干渉を受けて高周波ノイズを生成します。そのため、高周波ノイズをフィルタリングするために2つのインダクタンスを使用します。

- **2--C1**  
  チップメーカーによって強く推奨されているのは、熱電対ラインのノイズをフィルタリングするために、T+とT-ピン間に10nFのセラミック表面実装型差動コンデンサを追加することです。

- **3--D1**  
  このモジュールを静電気放電（ESD）から保護するために、SZNUP2105LT3Gデュアル双方向電圧サプレッサを使用しています。

**双方向レベルシフター回路**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/schematic_2.jpg" /></div>

これは、異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。左側の**DQ**ピンはMAX31850Kが3.3Vを使用しますが、Arduinoが5Vを使用する場合、この回路が必要になります。上記の回路図では、**Q6**はNチャネルMOSFET [2N7002](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)で、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照してください。

:::note
このセクションでは回路図の一部のみを表示しています。完全なドキュメントについては、[リソース](https://wiki.seeedstudio.com/ja/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)を参照してください。
:::

### 組み立て図

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/Assembling.jpg" /></div>

:::tip
熱電対の<font style={{fontWeight: 'bold', color: '#AE0000'}}>赤</font>いワイヤをGrove - 1-Wire Thermocouple Amplifier (MAX31850K) の**T+**ポートに挿入し、<font style={{fontWeight: 'bold', color: '#FFFFFF'}}>白</font>いワイヤを**T-**ポートに挿入してください。当社のバザールから購入したK型熱電対を使用しない場合、色が異なる場合がありますので、販売者に確認して**+ -**を確実にしてください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - 1-Wire Thermocouple Amplifier x 2 |
|----------------|-------------|------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-%28MAX31850K%29-p-3159.html" target="_blank">今すぐ購入</a>|

| k型熱電対 x 2 | Grove - I2C Hub |
|---------------|----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/thermocouple.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/12C%20hub.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html" target="_blank">今すぐ購入</a>|

:::note
**1-** 私たちは2つのソフトウェア例、**simple**と**multiple**を提供しています。上記の材料要件は**multiple**例用です。**simple**例をテストしたい場合は、Grove - I2C Hubは必要なく、Grove - 1-Wire Thermocouple Amplifierが1つあれば十分です。

**2-** ここではI2C HubをI2Cインターフェースとしてではなく、通常の1対2の転送インターフェースとして使用しています。
:::

- **ステップ 1.** k型熱電対の赤いワイヤーを**T+**に挿入し、薄い白いワイヤーを**T-**に挿入します。

- **ステップ 2.** Grove - I2C HubをBase Shieldの**D3**ポートに接続します。

- **ステップ 3.** Grove - 1-Wire Thermocouple Amplifier AとBをGrove - I2C Hubに接続します。

- **ステップ 4.** Grove - Base ShieldをSeeeduinoに接続します。

- **ステップ 5.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/connect.jpg" /></div>

:::note
Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Groveケーブル | Grove - I2C Hub | Grove - 1-Wire Thermocouple Amplifier |
|---------------|----------------|----------------|---------------------------------------|
| GND           | 黒             | G              | GND                                   |
| 5V            | 赤             | V              | VCC                                   |
| NC            | 白             | SDA            | NC                                    |
| D3            | 黄             | SCL            | DQOUT                                 |

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [Seeed_MAX31850K](https://github.com/Seeed-Studio/Seeed_MAX31850K)ライブラリをGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用のライブラリをインストールします。

- **ステップ 3.** ライブラリフォルダを解凍し、指定されたパスをたどって**Multiple.ino**を開きます ---> **xxxx\Arduino\libraries\Seeed_MAX31850K-master\examples\Multiple**。xxxxはArduinoをインストールしたパスです。

このフォルダ**\Arduino\libraries\Seeed_MAX31850K-master\examples**には2つの例が含まれています：**Multiple.ino**と**Simple.ino**。
>Simple.ino--シングルモード（1つのホストと1つのスレーブ）

>Multiple.ino--マルチモード（1つのホストと複数のスレーブ、ROMアドレス指定に基づく1-Wire検索アルゴリズム）

または、コードブロックの右上隅にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp
#include <OneWire.h>
#include <DallasTemperature.h>

// データ線はArduinoのポート2に接続されています
#define ONE_WIRE_BUS 3
#define TEMP_RESOLUTION 9

#define MAX_NUM_OF_DEVICE  10

// OneWireインスタンスをセットアップして、Maxim/Dallas温度IC以外のOneWireデバイスとも通信します
OneWire oneWire(ONE_WIRE_BUS);

// Dallas TemperatureにOneWire参照を渡します
DallasTemperature sensors(&oneWire);

// デバイスアドレスを保持する配列
DeviceAddress Device_add[MAX_NUM_OF_DEVICE];
DeviceAddress insideThermometer, outsideThermometer;

void setup(void)
{
  // シリアルポートを開始
  Serial.begin(115200);
  Serial.println("Dallas Temperature IC Control Library Demo");

  // ライブラリを起動
  sensors.begin();

  // バス上のデバイスを検出
  Serial.print("Locating devices...");
  Serial.print("Found ");
  Serial.print(sensors.getDeviceCount(), DEC);
  Serial.println(" devices.");

  Serial.print("Parasite power is: "); 
  if (sensors.isParasitePowerMode()) Serial.println("ON");
  else Serial.println("OFF");

  for(int i=0;i<sensors.getDeviceCount();i++)
  {
    if(!sensors.getAddress(Device_add[i],i))
    {
      Serial.println("Find device error!!");
    }
    else
    {
      Serial.print("Device [");
      Serial.print(i);
      Serial.print("] addr =");
      printAddress(Device_add[i]);
    }
    Serial.println(" ");
  }

}

// デバイスアドレスを出力する関数
void printAddress(DeviceAddress deviceAddress)
{
  for (uint8_t i = 0; i < 8; i++)
  {
    // 必要に応じてアドレスをゼロ埋め
    if (deviceAddress[i] < 16) Serial.print("0");
    Serial.print(deviceAddress[i], HEX);
  }
}

// デバイスの温度を出力する関数
void printTemperature(DeviceAddress deviceAddress)
{
  float tempC = sensors.getTempC(deviceAddress);
  Serial.print("Temp C: ");
  Serial.print(tempC);
  Serial.print(" Temp F: ");
  Serial.print(DallasTemperature::toFahrenheit(tempC));
}

// デバイスの解像度を出力する関数
void printResolution(DeviceAddress deviceAddress)
{
  Serial.print("Resolution: ");
  Serial.print(sensors.getResolution(deviceAddress));
  Serial.println();    
}

// デバイスに関する情報を出力するメイン関数
void printData(DeviceAddress deviceAddress)
{
  Serial.print("Device Address: ");
  printAddress(deviceAddress);
  Serial.print(" ");
  printTemperature(deviceAddress);
  Serial.println();
}

void loop(void)
{ 
  // sensors.requestTemperatures()を呼び出して、バス上のすべてのデバイスに対してグローバル温度リクエストを発行
  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures();
  Serial.println("DONE");

  for(int i=0;i<sensors.getDeviceCount();i++)
  {
     printData(Device_add[i]);
  }

}

```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

- **ステップ 5.** Arduino IDEの**シリアルモニタ**を開きます。**ツール->シリアルモニタ**をクリックするか、++ctrl+shift+m++キーを同時に押します。その後、ボーレートを**115200**に設定します。

:::tip
     すべてが正常に動作すれば、結果が得られます。
:::

```cpp
DONE
デバイスアドレス: 3B23211800ing temperatures... 77.00
温度をリクエスト中...DONE
デバイスアドレス: 3B2321180000005C 温度 (摂氏): 25.00 温度 (華氏): 77.00
温度をリクエスト中...Dallas Temperature IC Control Library Demo
デバイスを検索中...2つのデバイスが見つかりました。
寄生電力は: OFF
デバイス [0] アドレス =3B4C965D06D80C98 
デバイス [1] アドレス =3B2321180000005C 
温度をリクエスト中...DONE
デバイスアドレス: 3B4C965D06D80C98 温度 (摂氏): 26.25 温度 (華氏): 79.25
デバイスアドレス: 3B2321180000005C 温度 (摂氏): 25.25 温度 (華氏): 77.45
温度をリクエスト中...DONE
デバイスアドレス: 3B4C965D06D80C98 温度 (摂氏): 26.25 温度 (華氏): 79.25
デバイスアドレス: 3B2321180000005C 温度 (摂氏): 25.00 温度 (華氏): 77.00
温度をリクエスト中...DONE
デバイスアドレス: 3B4C965D06D80C98 温度 (摂氏): 26.25 温度 (華氏): 79.25
デバイスアドレス: 3B2321180000005C 温度 (摂氏): 25.25 温度 (華氏): 77.45
温度をリクエスト中...DONE
デバイスアドレス: 3B4C965D06D80C98 温度 (摂氏): 26.00 温度 (華氏): 78.80
デバイスアドレス: 3B2321180000005C 温度 (摂氏): 25.25 温度 (華氏): 77.45
温度をリクエスト中...DONE
デバイスアドレス: 3B4C965D06D80C98 温度 (摂氏): 26.00 温度 (華氏): 78.80
デバイスアドレス: 3B2321180000005C 温度 (摂氏): 25.25 温度 (華氏): 77.45
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - 1-Wire Thermocouple Amplifier eagleファイル](https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip)
- **[Zip]** [Seeed_MAX31850Kライブラリ](https://github.com/Seeed-Studio/Seeed_MAX31850K/archive/master.zip)
- **[PDF]** [MAX31850のデータシート](https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Max31850.pdf)

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
