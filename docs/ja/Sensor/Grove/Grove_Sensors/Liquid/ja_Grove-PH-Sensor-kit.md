---
description: Grove - PHセンサーキット (E-201C-Blue)
title: Grove - PHセンサーキット (E-201C-Blue)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-PH-Sensor-kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/04.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/04.png" alt="pir" width={600} height="auto" /></p>



<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html)

使いやすく、コストパフォーマンスの高いPHセンサー/メーターをお探しですか？ArduinoやRaspberry Piで使用できるPHセンサー/メーターをお探しですか？この新しいGrove - PHセンサーは、すべてのニーズを満たします。このPHセンサーは、水溶液中の水素イオン活性を測定します。通常、液体のPHを測定するために使用されます。化学産業、製薬産業、染料産業、科学研究など、酸性度とアルカリ性のテストが必要な場面で広く使用されています。このキットのドライブボードは3.3Vと5Vの両方のシステムをサポートしています。また、標準的なBNCプローブインターフェースとGroveコネクタを備えているため、ArduinoやRaspberry Piとの連携が非常に便利です。

:::note
    この製品はRoHS認証を受けていません。
:::
## 特徴

- コンパクトサイズで簡単に展開可能  
- ArduinoおよびRaspberry Piに対応  
- コストパフォーマンスが高い  

## 仕様
|項目|値|
|---|---|
|動作電圧	|3.3V/5V|
|測定範囲	|0-14PH|
|分解能	|±0.15PH（STP）|
|応答時間	|＜1分|
|プローブインターフェース|	BNC|
|測定温度	|0-60℃|
|内部抵抗|	≤250MΩ（25℃）|
|アルカリ誤差	|0.2PH（1mol/L）Na+，PH14)（25℃）|

## 対応プラットフォーム
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

#### 必要な材料

| Seeeduino Lotus | Grove-PH センサーキット | 
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>| <p><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/thumb.png" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-PH-Sensor-Kit-E-201C-Blue-p-4577.html)|

#### ハードウェア接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/PH_Connection.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    USBケーブルやGrove-PHセンサーインターフェースをSeeeduino Lotusボードのインターフェースに慎重に接続してください。そうしないとポートが損傷する可能性があります。
:::
- **ステップ 1.** Grove-PHセンサーをGroveケーブルを使用してSeeeduino Lotusボードのインターフェース **A2** に接続します。

- **ステップ 2.** USBケーブルを使用してSeeeduino LotusをPCに接続します。

- **ステップ 3.** コードをダウンロードします。ソフトウェア部分を参照してください。

- **ステップ 4.** コードを実行すると、結果がArduino IDEの**シリアルモニター**画面に表示されます。

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [デモコード](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Grove-PH_Sensor_kit.zip)をダウンロードします。

- **ステップ 2.** **Grove-PH_Sensor_kit**ファイル全体をコピーしてArduino IDEのライブラリファイルに貼り付けます。

- **ステップ 3.** Arduino IDEで**pH_meter_V1_1**ファイルを開きます。

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

#### ソフトウェアコード
```cpp
/*
  # このサンプルコードはpHメーターV1.1をテストするために使用されます。
  # 編集者 : YouYou
  # 日付   : 2014.06.23
  # バージョン : 1.1
  # 製品: アナログpHメーター
  # SKU    : SEN0161
*/
#define SensorPin A2            //pHメーターのアナログ出力をArduinoのアナログ入力0に接続
#define Offset 41.02740741      //偏差補正
#define LED 13
#define samplingInterval 20
#define printInterval 800
#define ArrayLenth  40    //収集回数
#define uart  Serial
int pHArray[ArrayLenth];   //センサーのフィードバックの平均値を格納
int pHArrayIndex = 0;
void setup(void)
{
  pinMode(LED, OUTPUT);
  uart.begin(9600);
  uart.println("pHメーター実験!");    //UARTモニターをテスト
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
    pHValue = -19.18518519 * voltage + Offset;
    samplingTime = millis();
  }
  if (millis() - printTime > printInterval)  //800ミリ秒ごとに数値を印刷し、LEDインジケーターの状態を変換
  {
    uart.print("電圧:");
    uart.print(voltage, 2);
    uart.print("    pH値: ");
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
    uart.println("配列の平均化に対するエラー数!/n");
    return 0;
  }
  if (number < 5) { //5未満の場合、直接統計を計算
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

:::note

     - 対象の溶液を検出する前に、センサーは指定された校正液で校正される必要があり、また新しい種類の溶液を検出する前に指定されたバッファ(PH=7)または清水に浸して拭く必要があります。

     - 測定前に、電極は既知のPH値を持つ標準バッファ溶液で校正される必要があります。より正確な結果を得るためには、既知のPH値が信頼できるものであり、測定対象に近いものである必要があります。

     - 測定が完了したら、電極保護スリーブを装着する必要があります。保護スリーブには少量の3.3mol/L塩化カリウム溶液を入れて電極球を湿らせておく必要があります。

     - 電極の先端は清潔で乾燥した状態を保ち、出力の両端で短絡を絶対に防ぐ必要があります。そうしないと、測定結果が不正確または無効になります。

     - 長期間使用した後、電極の勾配がわずかに不正確である場合は、電極の下端を4% HF(フッ化水素酸)に3〜5秒間浸し、蒸留水で洗浄した後、塩化カリウム溶液に浸して新しい状態に戻すことができます。
     
     - センサーを検出液に長時間浸してはいけません。
:::

- **ステップ 5.** センサーを指定された校正液(PH=9.18)に浸すと、電圧とPH値が表示されます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** 同様に、センサーを指定された校正液(PH=4)に浸すと、電圧とPH値が表示されます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/IMG/calibration2.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** PH 検出の線形特性に基づいて k 値とオフセット値を計算できます。以下の計算式を使用して得られたオフセット値と k 値（pHValue と同じ値）を、ソフトウェアコードの **10 行目** と **34 行目** に挿入してください。

:::tip
		
    k = (PH2-PH1)/(V2-V1)

    Offset = [(PH2+PH1)-k*(V1+V2)]/2
    
    キャリブレーションをさらに助けるための [計算チャート](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Calibration_for_k&offset.xlsx) があります。
:::
- **ステップ 8.** 最後に、液体の検出を自由に行うことができます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/202002811_Grove-PH_Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース

- **[ZIP]** [デモコードライブラリ](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Grove-PH_Sensor_kit.zip)
- **[XLSX]** [k 値とオフセットのキャリブレーション](https://files.seeedstudio.com/wiki/Grove-PH_Sensor_kit/Calibration_for_k&offset.xlsx)

## 技術サポートと製品ディスカッション
技術的な問題は [フォーラム](http://forum.seeedstudio.com/) に投稿してください。

## 産業用センサーへのアップグレード
SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして APP からの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x を試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>