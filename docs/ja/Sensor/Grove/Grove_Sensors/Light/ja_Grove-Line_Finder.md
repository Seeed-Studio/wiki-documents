---
description: Grove - ラインファインダー
title: Grove - ラインファインダー V1.1
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Line_Finder
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/Grovelinefinder1.jpg" /></div>

Grove - ラインファインダーは、ライン追従ロボット用に設計されています。このモジュールには、赤外線（IR）発光LEDと赤外線感知フォトトランジスタが搭載されています。これにより、マイクロコントローラーにデジタル信号を出力し、ロボットが白い背景上の黒い線、またはその逆を追従することが可能です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/300px-Get_One_Now_Banner.png" /></a></p>

## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日       |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| Grove-Line Finder V1.0| 初期リリース                                                                                                                                                                                    | 2010年1月29日    |
| Grove-Line Finder V1.1 | テストポイントを追加                                                                                                                                                                                 | 2015年12月28日   |

## 仕様

| パラメータ                | 値/範囲                                                     |
|--------------------------|-----------------------------------------------------------|
| 電源供給                 | 5V                                                        |
| デジタル出力モード       | TTL（黒を検出した場合はHigh、白を検出した場合はLow）       |
| コネクタ                 | 4ピンバックル付きGroveインターフェース                     |
| 寸法                     | 20mm×20mm                                                 |
| ROHS                     | 対応                                                      |
| フォトリフレクティブダイオード | RS-06WD                                                  |
| コンパレータ             | MV358                                                     |

!!!Tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記に記載されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

- ステップ1. 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove - Button |
|----------------|-------------|----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- ステップ2. Grove-Line FinderをGrove-Base ShieldのポートD3に接続します。
- ステップ3. Grove - Base ShieldをSeeeduinoに差し込みます。
- ステップ4. USBケーブルを使ってSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/seeeduino_line_finder.jpg" /></div>

:::note
Grove Base Shieldがない場合は、以下のようにGrove-Line FinderをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove-Line Finder |
|-----------------|-------------------|
| 5V             | 赤               |
| GND            | 黒               |
| 接続なし       | 白               |
| D3             | 黄色             |

#### ソフトウェア

- ステップ1. 以下のコードをArduino IDEにコピーしてアップロードしてください。

```c
//------------------------------------------------------------
//名前: ラインファインダー デジタルモード
//機能: 黒線または白線を検出
//パラメータ: デジタル信号がHIGHの場合、黒線
//             デジタル信号がLOWの場合、白線
//-------------------------------------------------------------
int signalPin =  3;    // デジタルピン3に接続
void setup()   {
  pinMode(signalPin, INPUT); // デジタルピンを出力として初期化
  Serial.begin(9600);  // シリアル通信を9600bpsで初期化
}
// loop()メソッドはArduinoが電源を持つ限り繰り返し実行されます
void loop()
{
  if(HIGH == digitalRead(signalPin))
    Serial.println("黒");
  else  Serial.println("白");  // 色を表示
  delay(1000);                  // 1秒待機
}
```

- ステップ2. シリアルポートを開き、センサーを黒線の上に置くと「黒」、白いエリアの上に置くと「白」と表示されます。

```
白
白
白
黒
黒
黒
黒
黒
```

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - Line FinderをBase ShieldのポートD3に接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ3.** USBケーブルを使ってSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[Arduinoを使用したCodecraftガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/cc_Line_Finder.png" /></div>

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
コードのアップロードが完了すると、シリアルモニターでラインが検出されたかどうかが表示されます。
:::

### Raspberry Piで遊ぶ

#### ハードウェア

- ステップ1. 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove - Line Finder |
|--------------|--------------|---------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- ステップ2. GrovePi_PlusをRaspberryに差し込みます。
- ステップ3. Grove-Line FinderをGrovePi_PlusのポートD7に接続します。
- ステップ4. USBケーブルを使ってRaspberryをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/rasp_line_finder.jpg" /></div>

#### ソフトウェア

- ステップ1. [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構成します。
- ステップ2. GitHubリポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- ステップ3. 以下のコマンドを実行します。

```
cd ~/GrovePi/Software/Python
python grove_line_finder.py
```

以下はgrove_line_finder.pyのコードです。

```python
import time
import grovepi

# Grove Line FinderをデジタルポートD7に接続
# SIG,NC,VCC,GND
line_finder = 7

grovepi.pinMode(line_finder,"INPUT")

while True:
    try:
        # 黒線が検出されるとHIGHを返し、白線が検出されるとLOWを返します
        if grovepi.digitalRead(line_finder) == 1:
            print ("黒線が検出されました")
        else:
            print ("白線が検出されました")

        time.sleep(.5)

    except IOError:
        print ("エラー")
```

- ステップ4. センサーが黒線の上にあるときに「黒線が検出されました」と表示されます。

```
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_line_finder.py 
黒線が検出されました
黒線が検出されました
白線が検出されました
白線が検出されました
```

# Grove-Line Finder 回路図 V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000970_Grove%20-%20Line%20Finder%EF%BC%88CN%EF%BC%89%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-Line Finder 回路図 V1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000932_Grove%20-%20Line%20Finder%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [Grove-Line Finder 回路図 V1.0](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000970_Grove%20-%20Line%20Finder%EF%BC%88CN%EF%BC%89%20v1.0.zip)
- **[Eagle&PDF]** [Grove-Line Finder 回路図 V1.1](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/202000932_Grove%20-%20Line%20Finder%20v1.1.zip)
- **[データシート]** [LMV358.PDF](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/Lmv358.pdf)
- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove_Line_Finder/res/Grove_Line_Finder_CDC_File.zip)

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトに向けて、最新の SenseCAP S210x をお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>