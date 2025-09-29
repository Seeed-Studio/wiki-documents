---
description: Grove - EC センサーキット
title: Grove - EC センサーキット
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-EC-Sensor-kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png" alt="pir" width={600} height="auto" /></p>


<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html)
技術の進歩に伴い、私たちの環境は大きな課題に直面しています。水質が基準を満たしているかどうかを予備的にテストするためのツールが必要です。Grove EC センサーはアナログ電気伝導率計です。電気伝導率センサー（EC センサー）は、溶液中の電気伝導率を測定するもので、通常、水産養殖や水質検査に使用されます。Grove - 電気伝導率センサーは、比較的高い精度を持ちながら低コストのシステム向けに特別に設計されており、ほとんどの用途をカバーできます。Grove コネクタと BNC プローブインターフェースにより、使いやすく、Arduino や Raspberry Pi プロジェクトに非常に適しています。このキットには EC プローブとドライバーボードが含まれており、ドライバーボードは 3.3V と 5V の両方のシステムをサポートしています。



:::note
    この製品は RoHS 認証を受けていません。
:::
## 特徴

- 水産養殖や水質検査のほとんどの用途に広く使用可能  
- コンパクトサイズで簡単に展開可能  
- Arduino と Raspberry Pi の両方に対応  
- コストパフォーマンスに優れる

## 仕様
|項目|値|
|---|---|
|動作電圧	|3.3V/5V|
|EC 範囲	|0-2000us/cm|
|分解能	|±5%（STP）|
|応答時間	|＜10秒|
|プローブインターフェース|	BNC|
|動作温度	|5-80℃|

## 対応プラットフォーム
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## はじめに

#### 必要な材料

| Arduino uno | Grove-EC センサーキット | ベースシールド |
|:--------------:|:--------------:|:--------------:|
|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/arduinouno.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.09.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.06.png" alt="pir" width={600} height="auto" /></p>
|[今すぐ購入](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-694.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2.html)|

#### ハードウェア接続

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg" alt="pir" width={600} height="auto" /></p>
:::tip
    USBケーブルやGrove-ECセンサーインターフェースをArduino Unoボードのインターフェースに慎重に接続してください。そうしないと、ポートが損傷する可能性があります。
:::
- **ステップ 1.** Groveケーブルを使用して、Grove-ECセンサーをベースシールドのインターフェース **A1** に接続します。

- **ステップ 2.** ベースシールドをArduino Unoに接続します。
- **ステップ 3.** USBケーブルを使用してArduino UnoをPCに接続します。
- **ステップ 4.** コードをダウンロードします。ソフトウェアのセクションを参照してください。

- **ステップ 5.** コードを実行すると、結果がArduino IDEの**シリアルモニター**画面に表示されます。

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** [デモコード](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip)をダウンロードします。

- **ステップ 2.** **DFRobot_EC_master.zip** ファイル全体をArduino IDEのライブラリフォルダに追加します。[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。

- **ステップ 3.** Arduino IDEで**DFRobot_EC_Test**のサンプルファイルを開きます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

#### ソフトウェアコード
```cpp
#include "DFRobot_EC.h"
#include <EEPROM.h>

#define EC_PIN A1
float voltage,ecValue,temperature = 25;
DFRobot_EC ec;

void setup()
{
  Serial.begin(115200);  
  
  ec.begin();
}

void loop()
{
    static unsigned long timepoint = millis();
    if(millis()-timepoint>1000U)  //時間間隔: 1秒
    {
      timepoint = millis();
      voltage = analogRead(EC_PIN)/1024.0*5000;   // 電圧を読み取る
      //temperature = readTemperature();          // 温度センサーを読み取り、温度補正を実行
      ecValue =  ec.readEC(voltage,temperature);  // 電圧を温度補正付きでECに変換
      Serial.print("temperature:");
      Serial.print(temperature,1);
      Serial.print("^C  EC:");
      Serial.print(ecValue,2);
      Serial.println("ms/cm");
    }
    ec.calibration(voltage,temperature);          // シリアルコマンドによるキャリブレーションプロセス
}

float readTemperature()
{
  //温度センサーから温度を取得するコードをここに追加
}
```

:::note

     - 対象溶液を検出する前に、センサーは**必ず**導電率溶液でキャリブレーションを行い、新しい種類の溶液を検出する前に清水に浸して洗浄する必要があります。

     - 測定前に、電極は標準バッファ溶液でキャリブレーションする必要があります。より正確な結果を得るためには、既知の導電率溶液の値が信頼でき、測定対象に近いものである必要があります。

     - 液体に長時間浸さないでください。そうしないと、プローブの寿命が短くなります。プローブ内の金属板表面に付着しているプラチナブラック層は、物理的な接触を避ける必要があります。蒸留水でのみ洗浄してください。そうしないと、プラチナブラック層が損傷し、測定が不正確になります。

     - センサーを検出液に長時間浸さないでください。
:::

精度を確保するために、プローブは初回使用時および長期間使用していない後にキャリブレーションが必要です。以下の手順では2点キャリブレーションを使用するため、1413us/cmおよび12.88ms/cmの標準バッファ溶液が必要です。以下の手順で2点キャリブレーションの操作方法を示します。

- **ステップ 5.** コードをArduinoにアップロードした後、シリアルモニターを開くと、以下の画像のように温度と電気伝導率が表示されます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png" alt="pir" width={600} height="auto" /></p>
- **ステップ 6.** プローブを蒸留水で洗浄し、ペーパーで残留水滴を吸収します。その後、プローブを1413us/cmの標準バッファ溶液に挿入し、値が安定するまで軽くかき混ぜます。シリアルモニターで`enterec`コマンドを入力してキャリブレーションモードに入ります。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png" alt="pir" width={600} height="auto" /></p>
- **ステップ 7.** `calec`コマンドを入力してキャリブレーションを開始します。プログラムは2つの標準バッファ溶液（1413us/cmまたは12.88ms/cm）のどちらが存在するかを自動的に識別します。このステップでは、標準バッファ溶液は1413us/cmです。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** キャリブレーションが成功したら、`exitec` コマンドを入力して関連するパラメータを保存し、キャリブレーションモードを終了します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png" alt="pir" width={600} height="auto" /></p>
上記の手順を完了すると、1点目のキャリブレーションが完了します。2点目のキャリブレーションも同じ手順で行います。ここでは 12.88ms/cm の標準バッファ溶液を使用します。キャリブレーションプロセスの詳細はここでは繰り返しません。

これらの手順を完了すると、2点キャリブレーションが完了し、実際の測定に使用できるようになります。キャリブレーションプロセス中の関連パラメータは、メインコントロールボードの EEPROM に保存されています。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/Grove-EC_Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [デモコードライブラリ](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip)
- **[PDF]** [CD4060BM 材料仕様書](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/CD4060BM_Material_specification.pdf)
- **[PDF]** [DIP TDS センサー仕様書](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DIP_TDS_Sensor_specification.pdf)
- **[PDF]** [LMV324 材料仕様書](https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/LMV324_Material_specification.pdf)

## 技術サポート & 製品ディスカッション
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>