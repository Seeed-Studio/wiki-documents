---
title: センサー - 光（概要）
description: センサー - 光（概要）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor_light
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Seeed 光センサー選択ガイド

Seeedでは、さまざまな光センサーをリリースしており、どれを選べばよいのか、どれが自分のニーズに適しているのか分からないという問題が生じる場合があります。ここで解決策をご紹介します！このサイトの比較を参考にしてください。

Seeedのバザールにあるすべての光センサーについては、[Bazaar Lightタグ](https://www.seeedstudio.com/tag/light.html)をクリックして確認してください。

## 光センサーとは

光センサーは、検出された光エネルギー（光子）を電気エネルギー（電子）に変換する光電デバイスです。簡単そうに見えますか？実際には、光センサーにはその定義以上のものがあります。さまざまな種類があり、さまざまな用途で使用されます！

### 用語集

今日の光センサーガイドを始める前に、光に関連する以下の用語を理解しておく必要があります。分かりやすく簡略化しました：

### カンデラ（Candela）

- 「キャンドル」という言葉に由来し、カンデラは光度、つまり裸眼での光の強さを指します。
- 光度が高いほど、私たちの目に対する感度が高くなります。

### ルーメン（Lumen）

- 光源からの可視光の総量を、光度と光束が広がる角度との関係を通じて測定します。
- 一般的に電球の明るさを評価するために使用されます。
- 簡単に言えば、ルーメン = すべての方向に放射される光の総量です。

### ルクス（Lux）

- 照度を測定するために使用され、光束が広がる面積を考慮します。
- ルーメンに似ていますが、表面積を考慮します。
- 簡単に言えば、ルクス = 特定の表面に落ちる光の総量です。

:::note
ルーメンとルクスの違いがまだ分からない場合は、以下の図を参考にしてください：
:::

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/01/image-88.png"/></div>

*参考: [Lux vs Lumen](https://www.waveformlighting.com/home-residential/what-is-the-difference-between-lux-and-lumens)*

### 光センサーの種類とは

光センサーにはさまざまな種類があり、主にフォトレジスタ、フォトダイオード、フォトトランジスタがあります。技術的に聞こえますか？以下の説明で分かりやすく解説します！

**1. フォトレジスタ（LDR）**

<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Photoresistors_-_three_sizes_-_mm_scale.jpg"/></div>

光センサー回路で最も一般的に使用される光センサーの種類はフォトレジスタ、または光依存抵抗（LDR）として知られています。フォトレジスタは、単に光がオンかオフかを検出し、一日の中で相対的な光レベルを比較するために使用されます。

**フォトレジスタは何でできているのか？**

- 高抵抗の半導体材料である硫化カドミウムセルで構成され、可視光および近赤外光に非常に敏感です。

**フォトレジスタの動作原理**

<div align="center"><img src="https://www.edgefx.in/wp-content/uploads/2015/02/Light-Intensity-vs-LDR-Resistance.jpg"/></div>

その名前が示すように、フォトレジスタは通常の抵抗器と同様に動作しますが、抵抗の変化は光の量に依存します。

- 高い光強度は硫化カドミウムセル間の抵抗を低下させます。
- 低い光強度は硫化カドミウムセル間の抵抗を増加させます。

この動作原理は、街灯のような用途で見ることができます。昼間は光強度が高いため抵抗が低くなり、光が生成されません。

**2. フォトダイオード**

<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fotodio.jpg/220px-Fotodio.jpg"/></div>

フォトダイオードは、もう一つの種類の光センサーです。しかし、LDRのように抵抗の変化を利用するのではなく、光を電流の流れに簡単に変換する、より複雑な仕組みを持っています。

フォトダイオードは、フォトディテクタやフォトセンサーとも呼ばれます。

**フォトダイオードは何でできているのか？**

- フォトダイオードは主にシリコンやゲルマニウム材料で作られ、光学フィルター、内蔵レンズ、表面エリアを備えています。

**フォトダイオードの動作原理**

フォトダイオードは、内光電効果と呼ばれる動作原理に基づいて動作します。簡単に言えば、光のビームが当たると電子が緩み、電子ホールが発生し、それによって電流が流れるようになります。

- 光が明るいほど、電流が強くなります。

**フォトダイオード光センサーの用途**

フォトダイオードによって生成される電流は光の強度に直接比例するため、迅速な光応答変化が必要な光検出に適しています。

フォトダイオードは赤外線光にも反応するため、さらに多くの用途に適用可能です。

以下はフォトダイオードの用途の一部です：

- コンパクトディスクプレーヤーから煙探知器、リモコンデバイスに至るまでの民生用電子機器
- 測定および分析目的で使用される医療機器/装置
- ソーラーパネルなどの太陽エネルギーシステム

**3. フォトトランジスタ**

今日探る最後の光センサーの種類はフォトトランジスタです。フォトトランジスタ光センサーは、フォトダイオード + 増幅器として説明できます。増幅が追加されているため、光感度はフォトトランジスタの方がはるかに優れています。

ただし、低光レベルの検出においてはフォトダイオードほど優れていません。
両方の光センサータイプは類似した動作原理を共有しているため、前述の説明を参照してください！

## Seeed の光センサー

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Light-Sensor.png" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Light-Sensor.png" alt="Seeed 光センサー選択ガイド" title="Seeed 光センサー選択ガイド" />
  </a>
  <figcaption><b>図 2</b>. <i>Seeed の光センサー</i></figcaption>
</figure>
</div>

### あなたに最適なセンサーはどれ？

| 製品 | [Grove - Light Sensor v1.1](https://www.seeedstudio.com/Grove-Light-Sensor-P-v1-1.html) | [Grove - Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) | [Grove - Digital Light Sensor](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html) | [Grove - Sunlight Sensor](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html) | [Grove - I2C UV Sensor (VEML6070)](https://www.seeedstudio.com/Grove-I2C-UV-Sensor-VEML6070.html) | [Grove - Light&Color&Proximity Sensor](https://www.seeedstudio.com/Grove-Light-Color-Proximity-Sensor-TMG39931-p-2879.html) |
|-----------------------|---------------------------|---------------------------|------------------------------|-------------------------|----------------------------------|--------------------------------------|
| サムネイル | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>      | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>  |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg" /></div>                     |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Grove_sunlight_sensor_view.jpg" /></div>                                     | <div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div>                                       |<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/thumbnail.jpg" /></div> |
| インターフェース | アナログ | アナログ | デジタル | I2C | I2C | I2C |
| ピーク波長 | 540nm | 540nm | / | 280-950nm | 320-410 nm | / |
| 動作温度 | -40°C ～ 85°C | -40°C ～ 85°C | -40°C ～ 85°C | -40°C ～ 85°C | -40°C ～ 85°C | -30～85°C |
| 最大照度 [klx] | / | / | 0.1 - 40,000 LUX | / | / | / |
| UVA 感度 | / | / | / | / | 5 μW/cm2/ステップ（標準値） | 60|

### クイックインサイト

### 低コストオプション: [Grove – Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedimg2016-10po8b7qd0xnlnchgogziq9g3d.jpg" /></div>

Seeed で利用可能な光センサーのリストの最初に登場するのは、Grove – Light Sensor v1.2 です！低価格の $2.90 に加え、高感度で信頼性の高いフォトダイオードが光検出ニーズに応えます。

Grove のプラグアンドプレイシステムを使用して Arduino ボードと簡単に接続できるため、ジャンパーワイヤやはんだ付けの手間を省くことができます！

**特徴:**

- オンボードのデュアル OpAmp チップ LM358
- アナログモジュール
- 簡単にインターフェース可能なオンボード Grove ポート
- 電気信号出力の変換可能
- コントローラーボードの ADC に依存（例: 8 ビット ADC では 0-255 を出力可能）
- 小型フォームファクター
- 広いスペクトルを認識可能

### デジタル信号出力オプション: [Grove – Digital Light Sensor](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881092_3.jpg" /></div>

デジタル信号出力オプションと選択可能な光スペクトル範囲を探しているなら、Grove – Digital Light Sensor が最適です！

デジタル信号出力を行う I2C 光-デジタルコンバータ TSL2561 をベースにしたこの光センサーモジュールは、デュアル光感知ダイオードを備えており、3 つのモードを切り替えて測定を行うことができます。

これらの 3 つのモードは、赤外線モード、全スペクトルモード、人間の目に見えるモードです。
人間の目に見えるモードでは、目で感じる感覚に近い測定値を提供します。

**特徴:**

- 広いダイナミックレンジ: 0.1 – 40,000 LUX
- 広い動作温度範囲: -40°C ～ 85°C
- 400 kHz I2C 高速モードでの高解像度 16 ビットデジタル出力
- ユーザー定義の上限および下限閾値設定によるプログラム可能な割り込み機能
- 選択可能な検出モード

### 太陽光検出オプション: [Grove – Sunlight Sensor](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" /></div>

UV を含む直接的な太陽光検出用に設計されていますが、このデジタル光センサーは、可視光や赤外線を含むさまざまな光源にも適しています。

SiLabs の SI1145 センサーをベースにしたこのセンサーは、低消費電力で反射ベースの赤外線近接センサー、UV インデックスセンサー、環境光センサーを備え、I2C デジタルインターフェースとプログラム可能なイベント割り込み出力を提供します。

性能が重要であるため、この光センサーは広いダイナミックレンジとスペクトル検出範囲を提供します。

**特徴:**

- デジタル光センサー
- 広いスペクトル検出範囲
- プログラム可能な構成
- 3.3/5V 電源
- 直接太陽光を検出
- Grove 互換
- I2C インターフェース（7 ビット）

## アプリケーションのアイデア

- 光の測定
- 光検出器
- 光制御スイッチ
- スマートホームデバイス
- 周囲光センサー
- ディスプレイパネルのバックライト制御
- キーボードの照明制御

## 有用なプロジェクト

**Grove - 光センサーの紹介**:

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-light-sensor-a55efd/embed' width='350'></iframe>

**環境キューブ！Sigfoxを使用して地面を知る**: 必要なセンサーをすべて備えたキューブで、農業やモニタリングなど幅広い用途に適しています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed' width='350'></iframe>

**Seeed LoRa IoTea ソリューション**: 茶畑に適用される自動情報収集システム。これはインテリジェント農業情報収集の一部です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Intel Edison IoT 水耕栽培コントローラー**: ボストンIoTハッカソンでIntel Edisonを使用して作成されたIoT対応の水耕栽培コントローラー。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/bltrobotics/intel-edison-iot-hydroponic-controller-d7132d/embed' width='350'></iframe>

**COI - 光透過率計**: Grove Starter Kit Plusに含まれる光センサーを使用して光強度の変化を測定する完成品。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/DigitalFabber/coi-light-transmission-meter-8044fd/embed' width='350'></iframe>

**環境キューブ！地面を知る！** 必要なセンサーをすべて備えたキューブで、農業など幅広い用途に適しています。地面を知ることができます！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed' width='350'></iframe>

## リソース

### Grove - Light Sensor v1.1 のチュートリアル

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZvFswNYY2mU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

- [光センサーとは？種類、用途、Arduinoガイド](https://www.seeedstudio.com/blog/2020/01/08/what-is-a-light-sensor-types-uses-arduino-guide/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>