---
title: RF送信機および受信機リンクキット - 315MHz/433MHz
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz/
slug: /ja/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz
last_update:
  date: 05/15/2025
  author: gunengyu
---


# RF送信機および受信機リンクキット - 315MHz/433MHz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Front-05.png" alt="pir" width={600} height="auto" /></p>

これは超長距離の315MHzまたは433MHzの無線周波数リンクセットで、VCOおよびPLL技術を採用しており、周波数が安定しており、強力な耐干渉性を備えています。無線データ伝送やリモートコントロールなどのプロジェクトに直接使用できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz-p-5077.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 低消費電力：5Vで約6.0mA / 3.3Vで約5mA
- 高い受信感度：-110dBm@10kbps
- 長い送信距離：2km（干渉のない開けた場所）
- 広い温度範囲：-20~75℃
- 柔軟な応用：ブレッドボードおよびPCBに対応
- 強力な放射抑制能力：相互干渉なし、受信距離への影響なし

## 仕様

| パラメータ             | 値/範囲  |
|-----------------------|--------------|
| 動作電圧             | 送信機(3-9V)、受信機(3-5V) |
| 動作電流             | 50mA(9VDC)   |
| 動作原理             | スーパーへテロダイン（VCO、PLL）|
| 変調方式             | OOK/ASK     |
| 動作周波数帯         | 315MHz ; 433.92MHz（カスタマイズ可能）|
| 動作温度範囲         | -20℃ ～ +75℃ |
| 帯域幅               | 200KHZ       |
| 感度                 | -110dBm (50Ω) |
| 変調速度             | ＜10Kbps      |
| デコード形式         | PT2272       |
| アンテナ長さ         | 18cm(送信機)、24cm (受信機) |
| 送信距離             | 2KM（干渉のない開けた場所）|
| 動作出力モード       | アンロック、インターロック、セルフロック|

## 応用アイデア

- 自動車のリモートコントロールドアスイッチ
- リモートコントロールドアオープナー
- ワイヤレスセキュリティアラーム
- リモートコントロールカーテンマシン
- ワイヤレス産業用コントローラー
- ワイヤレスデータ伝送
- ワイヤレスリモートコントロールモデル
- ワイヤレス玩具のコントロール

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Preview-07.png" alt="pir" width={1000} height="auto" /></p>

1. 送信機 - ピンインターフェース：7ピン（ピッチ：2.54mm）  
2. 受信機 - ピンインターフェース：7ピン（ピッチ：2.54mm）  
3. 送信アンテナ（使用中はアンテナをまっすぐにする必要があります）  
4. スプリング受信アンテナ  

## はじめに

ここでは、RFトランシーバーキット、LED、スイッチボタン、電源供給用の開発ボード、およびいくつかのワイヤを使用して、LEDのオン/オフをワイヤレスで制御する簡単なデモを実現します。

- **ステップ1.** RFトランシーバーキット、ワイヤ、ブレッドボードまたは開発ボード、および実現したい機能に関連する他のコンポーネントを準備します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Component list diagram.png" alt="pir" width={1000} height="auto" /></p>

簡単なワイヤレス照明制御デモを例にとると、以下を使用します：

| 名前                | 数量 |
|--------------------|------|
| RFトランシーバーキット |	*1 |
| ブレッドボード	       |  *1 |
| LED	               |  *1 |
| キースイッチ         |	*1 |
| Seeeduino XIAO     |	*1 |
| ワイヤ	             | 数本 |

- **ステップ2.** 以下の指示に従って回路システムを接続します。

**注意:** 以下の図ではすべての信号ポートが使用されていますが、実際の回路接続では1つのポートのみを使用します。

### 接続図

<p style={{textAlign: 'left'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Tx).png" alt="pir" width={390} height="auto" /></p>
<div>
  RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Rx).png" alt="pir" width="360" height="auto"&gt;<p />
</div>

### 実際の回路接続図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Actual_circuit_connection_diagram.png" alt="pir" width={1000} height="auto" /></p>

**注意:** このRFワイヤレス照明制御デモでは、開発ボードSeeeduino XIAO（3.3V出力）を共通電源システムとして使用し、送信モジュールと受信モジュールを同じボード上に構築しています。実際には、リモートトランシーバーモジュールは通常独自の電源で動作します。たとえば、バッテリーパック電源を直接使用することができます。

- **ステップ3.** システムに電源を供給し、ボタンスイッチを押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Result.png" alt="pir" width={1000} height="auto" /></p>

**注意:** RFワイヤレス照明制御デモでは、LEDライトを制御したいオブジェクトに変更し、複数の信号ポートを使用してさまざまな信号システムをワイヤレスで制御することができます。

また、デモで使用したSeeeduino XIAOを使用して、さらに多くの機能を実現することも可能です。たとえば、光センサーを接続して、光の強度に応じてライトのオン/オフや明るさをワイヤレスで制御することができます。このプロセスでは手動操作なしで信号を送信できます。

## リソース

- **[データシート]** [PT2272およびPT2262のデータシート](https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/res/Datasheet_for_PT2272_and_PT2262.pdf)


## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験がスムーズになるよう、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>