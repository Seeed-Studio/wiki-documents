---
description: 24GHz ドップラー レーダー
title: 24GHz ドップラー レーダー
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/MW2401TR11/img/102110464_Preview-07.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11-p-4690.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

**MW2401TR11** は、高い統合性と高度なインテリジェントアルゴリズムを備えた **24GHz** 人体動作マイクロ波センサーモジュール製品であり、高性能トランシーバーを搭載しています。このアンテナは優れた指向性を持つだけでなく、異なるアプリケーションシナリオに応じてソフトウェア設定を通じてカバーエリアを調整でき、スマートアルゴリズムを通じて干渉を除去することができます。また、物体の微細な動きを効果的に識別することが可能です。

## 特徴

- 人の微細な動きを敏感に認識
- **24GHz** マイクロ波モジュールは物体の状態を高効率で認識可能
- 元の信号およびデジタル高レベルまたは低レベル信号出力をサポート
- 距離感知と感度は調整可能（最大: 20メートル）
- **170°** 方位角検出機能を備えた小型アンテナ
- 予備I/Oポートがあり、UARTポート通信をサポート
- FCC/CE/RS 認証試験基準に準拠

## 仕様  

<table className="tg">
  <thead>
    <tr>
      <th className="tg-llyw"><span style={{fontWeight: 'bold'}}>項目</span></th>
      <th className="tg-llyw"><span style={{fontWeight: 'bold'}}>値</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-0pky">電源供給</td>
      <td className="tg-0pky"> 5 - 12 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">消費電流</td>
      <td className="tg-0pky"> 50-56 mA（必要な距離に応じて電流を削減可能）</td>
    </tr>
    <tr>
      <td className="tg-0pky">動作温度</td>
      <td className="tg-0pky"> -30 - 85 °C</td>
    </tr>
    <tr>
      <td className="tg-0pky">動作周波数</td>
      <td className="tg-0pky"> 50HZ - 60HZ</td>
    </tr>
    <tr>
      <td className="tg-0pky">出力遅延</td>
      <td className="tg-0pky"> 2秒 - 無限（ソフトウェアで調整可能）</td>
    </tr>
    <tr>
      <td className="tg-0pky">送信周波数</td>
      <td className="tg-0pky"> 24 - 24.25 GHz</td>
    </tr>
    <tr>
      <td className="tg-0pky">デジタル高レベル信号</td>
      <td className="tg-0pky"> 3.2 - 3.3 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">デジタル低レベル信号</td>
      <td className="tg-0pky"> 0 - 0.2 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">吊り下げ高さ</td>
      <td className="tg-0pky"> 3 - 10 メートル（ソフトウェアで調整可能）</td>
    </tr>
    <tr>
      <td className="tg-0pky">反応半径</td>
      <td className="tg-0pky">2 - 5 メートル（ソフトウェアで調整可能）</td>
    </tr>
    <tr>
      <td className="tg-0pky">微細検出半径</td>
      <td className="tg-0pky">0.5 - 3 メートル（ソフトウェアで調整可能）</td>
    </tr>
    <tr>
      <td className="tg-0pky">検出角度</td>
      <td className="tg-0pky">150 - 170°</td>
    </tr>
  </tbody>
</table>

## 寸法

- 20mm x 20mm x 2.54mm

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11.png)

ip  
R2は予約されたI/Oインターフェースです。

## 技術詳細

<table class="tg">
<thead>
  <tr>
    <th class="tg-6qw1" colspan="3">インターフェースの定義</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh">番号</td>
    <td class="tg-baqh">ピン</td>
    <td class="tg-baqh">機能</td>
  </tr>
  <tr>
    <td class="tg-baqh">1</td>
    <td class="tg-baqh">TX</td>
    <td class="tg-baqh">TXポートはADC機能を持つI/Oとして使用可能（電圧: 3.3 V）</td>
  </tr>
  <tr>
    <td class="tg-baqh">2</td>
    <td class="tg-baqh">GND</td>
    <td class="tg-baqh">グランド接続</td>
  </tr>
  <tr>
    <td class="tg-baqh">3</td>
    <td class="tg-baqh">OUT</td>
    <td class="tg-baqh">センス出力I/Oポート（電圧: 3.3 V &amp; ユーザー定義の出力波形）</td>
  </tr>
  <tr>
    <td class="tg-baqh">4</td>
    <td class="tg-baqh">VIN</td>
    <td class="tg-baqh">5 - 12 V</td>
  </tr>
  <tr>
    <td class="tg-baqh">5</td>
    <td class="tg-baqh">RX</td>
    <td class="tg-baqh">RXポートはADC機能を持つI/Oとして使用可能（電圧: 3.3 V）</td>
  </tr>
</tbody>
</table>

## 対応プラットフォーム

| Arduino                                                                                             |                                                                                              |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) |

## はじめに

### 必要な材料

| Seeeduino Cortex-M0+ | MW2401TR11 |
|-----------------------|------------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/MW2401TR11/img/clearseeedriono%20pic.png)| ![画像をここに挿入](https://files.seeedstudio.com/wiki/MW2401TR11/img/clearnMWpic6.png)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)|[今すぐ購入](https://www.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11-p-4690.html)|

:::tip
これは単なる例です。他のRXおよびTXポートを持つデバイスを使用することも、ソフトウェアシリアルポートを設定してTXおよびRXポートをシミュレートすることもできます。また、RXおよびTXを使用せずにOUTポートを使用して高レベル信号または低レベル信号を出力することも可能です。
:::

## ハードウェア

![MW2401TR11とSeeeduino Cortex-M0+の接続](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW_Seeeduino.png)

- **ステップ1. 上記の図に従って配線を接続します**。
- **ステップ2. Seeeduino Cortex-M0+にタイプC電源ケーブルを接続します**。

## ソフトウェア

- **ステップ1.** [Arduino IDE](https://www.arduino.cc/en/main/software) **をダウンロードします**。
- **ステップ2. Seeeduino Cortex-M0+をセットアップします。以下の手順に従ってください：** [Seeeduino Cortex-M0+の説明](https://wiki.seeedstudio.com/ja/Seeeduino-Cortex-M0/)。
- **ステップ3. 以下のコードをArduino IDEにコピーしてアップロードします。** [コードアップロードガイド](https://wiki.seeedstudio.com/ja/Upload_Code/)

```cpp
int MW_out = 2;   
// ピン2をOUTポートとして設定
void setup() {
  Serial.begin(9600);
  Serial1.begin(115200);
  pinMode(MW_out, INPUT);
}

void loop() {
  Serial.println(analogRead(MW_out));
  delay(2000);
  if (Serial1.available()){
    //Serial.println("データが準備完了");
    uint8_t begin_code = Serial1.read();
    delay(10);
    uint8_t state_code = Serial1.read();
    delay(10);
    uint8_t gear_code = Serial1.read();
    delay(10);
    uint8_t delay_code = Serial1.read();
    delay(10);
    uint8_t check_code = Serial1.read();

    if(begin_code == 170){  // ヘッダーが常に0xaaであることを確認
      check_code = begin_code + state_code + gear_code + delay_code;
      if(check_code == 175) Serial.println("オブジェクトの状態: 停止");
      if(check_code == 176) Serial.println("オブジェクトの状態: 接近中_5");
      if(check_code == 177) Serial.println("オブジェクトの状態: 離脱中");
      if(check_code == 172) Serial.println("オブジェクトの状態: 接近中_1");
    }
    else Serial.println("データが受信されていません");   
    }
    while(Serial1.read()>=0);    // バッファをクリア
}
```

- **ステップ4. シリアルモニターを開くと、データが表示されます**。

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/monitor2.png)

**1018と1019は高レベル信号を意味し、4と5は低レベル信号を意味します。通常、低レベル信号が表示される場合、アクションデータは表示されません。**

**手を離したときの簡単な例を示します。モニターには「オブジェクトの状態: 離脱中」と表示されています。**
![手を離したとき](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11_gGIF.gif)

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11_GIF.gif)

## リソース

- **[PDF]** [マイクロ波センサー - 24GHzドップラー・レーダー・モーションセンサー - MW2401TR11](https://wiki.seeedstudio.com/ja/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11/MW2401TR11_datasheet.zip)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>