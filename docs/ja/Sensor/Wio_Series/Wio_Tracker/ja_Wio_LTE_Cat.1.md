---
title: Wio LTE Cat.1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio_LTE_Cat.1/
slug: /ja/Wio_LTE_Cat.1
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_lte_v1.3.jpg)

Wio Tracker（Wireless Input Output）は、より高速なIoT GPSソリューションを可能にするオープンソースゲートウェイです。これはArduinoとGrove互換の開発ボードで、地球上のほぼすべての移動物体を追跡し、そのデータをワイヤレスでアップロードすることができます。Wio LTEはWio TrackerのLTE版であり、現在Wio Trackerには2つのバージョンがあり、LTE（4G）版はいくつかの違いをもたらします。

Wio LTEと2G版を比較すると、3つの主要なアップデートがあります。まず、その名前からわかるように、Wio LTEは2Gよりもはるかに高速で普及しているLTE（4G）通信をサポートしています。次に、Wio LTEは合計4つの異なるGNSS（GPS、Beidou、GLONASS、Galileo）をサポートし、QZSSもボーナスとしてサポートされています。より多くのGNSSサポートにより、測位がより正確になります。第三に、Wio LTEのMCUはCortex-M4ベースのSTM32にアップグレードされ、Wio LTEを2G版より5倍高速にしています。さらに、フラッシュとRAMも1MバイトとRAM 192+4kバイトに増加しています。

3つの主要なアップデート以外では、LTE版は2G版とほぼ同じです。**プロジェクトで2G版を使用している場合、移植可能で拡張可能なATコマンドライブラリを準備しているため、LTE版への更新は非常に簡単です。** ArduinoとGrove互換性により、多数のライブラリとサポートコミュニティを通じてより迅速な開発が可能になります。ボードで利用可能になるGPSライブラリは、Arduinoに限定されません。C/C++での開発を選択した場合でも同様に機能します。オンボードの6つのGrove接続により、開発者は180以上のセンサーとアクチュエーターの任意の組み合わせを作成して、プロジェクトを構築し、あらゆる問題を解決できます。プロトタイピングと開発フェーズの簡素化が私たちの目標です。

Wio LTEは、デバイスがGPS衛星に接続し、取り付けられたアイテムのリアルタイム位置を提供できる屋外プロジェクトに適しています。LTEは広い帯域幅を提供し、ユーザーとデバイス間のはるかに高速なインタラクションを可能にします。自転車シェアリングサービス、ペットや家畜の追跡、車両の位置特定、さらには子供の追跡などのプロジェクトを構築する場合、Wio LTEが最適なソリューションです。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/D6DX5P9ncrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

:::caution
    USB電源供給が不十分な場合に備えて、常に3.7V Lipoバッテリーを接続してください。
:::

|製品名 | 購入方法|
|----------------|-----------|
|Wio LTE JP Version|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-JP-Version-v1-3-4G-Cat-1-p-3044.html)|
|Wio LTE AU Version|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-AU-Version-v1-3-4G-Cat-1-GNSS-p-2947.html)|
|Wio LTE EU Version|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-EU-Version-v1-3-4G-Cat-1-GNSS-p-3212.html)|
|Wio LTE US Version|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-US-Version-v1-3-4G-Cat-1-p-4523.html)|

## バージョン

| 製品バージョン | 変更点                                  | リリース日 |
|-----------------|------------------------------------------|---------------|
| Wio Lte v1.0    | 初期版                                  | 2017年7月24日  |
| Wio Lte v1.1    | 生産方法の最適化            | 2017年10月18日  |
| Wio Lte v1.3    | より良い電源供給のためのハードウェア変更 | 2018年3月9日 |
| Wio Lte v1.3b   | レイアウトの調整                        | 2018年3月29日|

**Wio Lte v1.3 リリースノート**

この製品の発売以来、多くのユーザーフィードバックと提案を受け取りました。ユーザーフィードバックに基づいてこの製品をさらに改善することを決定し、ここでWio Lte v1.3が登場しました。

電源回路にいくつかの変更を加えました：

- PMIC（電源管理IC）をより安定したMP2617に変更。
- LTEモジュールに電源を供給するDC-DCモジュールを削除し、このバージョンではメイン回路またはLipoバッテリーからLTEモジュールに電源を供給。
- 電源をより安定させるために2つの100ufコンデンサを追加。

以下の写真でご確認いただけます。

                      v1.3                                  v1.0

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_ver1.jpg)
![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_ver2.jpg)

電源回路の変更に伴い、電源インジケーターのロジックも変更されました。

LED状態 | バッテリー状態
-----|----
LED点灯| 充電中
LED消灯 | 充電完了
LED点滅 | バッテリーエラー（バッテリーなし状態を含む）

さらに、**リセットキー**のロジックも変更されました。

操作 | リセット範囲
---|---
リセットボタンを短時間（2秒以内）押し続ける | MCUリセット/ LTEモジュールはリセットされません
リセットボタンを長時間（10秒以上）押し続ける| ボード全体がリセットされます

## 特徴

- ブロードバンドIoTアプリケーション向けに最適化された低コスト、低電力LTE接続
- 世界規模のLTEおよびUMTS/HSPA+
- 超低ディープスリープ電流消費を特徴とする組み込み電源管理ユニット（PMU）
- GPS/BeiDou/GLONASS/GalileoおよびQZSS
- Wio Tracker用の移植可能で拡張可能なATコマンドライブラリ
- Arduino IDE互換
- 6つのGroveコネクタ
- Nano SIMとTFカード2 in 1ソケット

## 仕様

| 項目            | 機能               | 値                                                                           |
| --------------- | ---------------------- | ------------------------------------------------------------------------------- |
| マイクロコントローラ | プロセッサ              | STM32F405RG, ARM 32-bit Cortex-M4, 168MHZ                                       |
|                 | フラッシュメモリ           | 1MB                                                                             |
|                 | SRAM                   | 192+4KB                                                                         |
|                 | 動作電圧      | 3.3V                                                                            |
|                 | I/Oピンあたりの直流電流 | 7 mA                                                                            |
| LTE             | LTE Cat.1              | ATコマンド: 3GPP TS27.007および拡張ATコマンド                              |
|                 | データ                   | LTE-FDD 最大10Mbps(DL) 最大5Mbps (UL)                                           |
|                 |                        | プロトコル: TCP/UDP/PPP/FTP/HTTP/NTP/PING/QMI/HTTPS*/SMTP*/MMS*/FTPS*/SMTPS*/SSL* |
|                 | SMS                    | ピアツーピアメッセージ、SMS放送、テキストおよびPDUモード                          |
|                 | オーディオ                  | エコーキャンセレーション、ノイズ除去                                            |
| GNSS            | システム                 | GPS/BeiDou/GLONASS/Galileo/QZSS                                                 |
|                 | 精度              | &lt;2.5 m CEP                                                                      |
| 周辺機器      | Grove                  | 2 x デジタルポート                                                                |
|                 |                        | 2 x アナログポート                                                                 |
|                 |                        | 1 x UART                                                                        |
|                 |                        | 1 x I2C                                                                         |
|                 | アンテナ                | 2 x LTEアンテナ                                                                 |
|                 |                        | 1 x GPSアンテナ                                                                 |
|                 | その他                 | USB: 電源供給とプログラムアップロード                                            |
|                 |                        | バッテリー用JST 1.0コネクタ                                                   |
|                 |                        | 3.5mmオーディオジャック                                                                |
|                 |                        | MCUリセットボタン、MCUブート（DFU）ボタン、EC21電源ボタン                       |
|                 |                        | 1 x ユーザーRGB LED SK6812                                                         |
|                 |                        | Nano SIMとTFカード2 in 1ソケット                                              |
| サイズ            | 長さ                 | 54.7mm                                                                          |
|                 | 幅                  | 48.2mm                                                                          |
| 重量                  |                 | 18g                                                                                |  |

## 消費電力

| 状態                                                                                 | 電流                          |電圧                         |
| -------------------------------------------------------------------------------------- | -------------------------------- |--------------------------------|
| 通常起動（起動時）                                                               | 700mA                            |5V                              |
| 起動後（アイドルモード）                                                                  | 300mA                            |5V                              |  
| 起動後、通常通信状態（ネットワーク送信機能）        | 約600mA、ピーク時2Aに達する |5V                              |  
| 通話とSMS（信号良好時）                                                            | 100-300mA                        |5V                              |  
| ディープスリープモード、すべての機能をオフ、外部ウェイクアップが必要（リセットでのみウェイクアップ） | 300uA                            |4.2V                            |  
| MCUディープスリープモード、ウェイクアップピンがモジュールに接続、モジュール経由でウェイクアップ               | 300uA以上（テストが必要）    |4.2V                            |


:::note
    2つの動作条件があります。1つは5V USB電源からの電力供給、もう1つは4.2Vバッテリー電源からの電力供給です。   
:::

## アプリケーションアイデア

- 歩数計
- スマートスキー
- スマート二輪車
- シェア自転車
- ペット追跡機
- 子供用位置情報ウォッチ
- スマートウォッチ
- 交通位置情報システム
- 車両位置情報システム
- 財産セキュリティ

:::tip
    Groveモジュールを使用してアプリケーションを拡張してください。ボード上に6つのGrove接続があります。Groveについて初めて聞く場合は、詳細について[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご覧ください。簡単に言うと、Grovesはセンサー、アクチュエーター、ディスプレイ、通信機能で構成された標準スタイルの数百のセンサーです。
:::

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Wio_Tracker_LTE/img/wio_tracker_lte_v1._top.png)

![](https://files.seeedstudio.com/wiki/Wio_Tracker_LTE/img/wio_tracker_lte_v1_buttom.png)

:::tip
    オンボードGroveコネクタを使用する場合は、digitalWrite(B10, HIGH)を使用して3V3_Bを開いてください。D38はデフォルトで電源が入っています。そうしないとGroveモジュールに電力を供給できません。
:::
**EC21モジュール**

EC21には9つのバリアント（EC21-E、EC21-A、EC21-V、EC21-AUT、EC21-AUV、EC21-AU、EC21-KL、EC21-J、EC21-CEL）があります。これにより、既存のEDGEおよびGSM/GPRSネットワークとの下位互換性が確保され、LTEから2Gまたは3Gネットワークへの移行が容易になります。

そして**EC21-A**は、WIO Tracker - LTEで使用しているもので、AT&TとT-mobile SIMカードをサポートしています。他の地域向けにEC21モジュールをカスタマイズしたい場合は、お気軽にメールでお問い合わせください：fae@seeed.cc

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg .tg-yw4l{vertical-align:top}\n" }} />
  <table className="tg">
    <tbody><tr>
        <th className="tg-031e" colSpan={2}>周波数</th>
        <th className="tg-yw4l">EC21-E</th>
        <th className="tg-yw4l">EC21-A</th>
        <th className="tg-yw4l">EC21-V</th>
        <th className="tg-yw4l">EC21-AUT</th>
      </tr>
      <tr>
        <td className="tg-031e" rowSpan={2}>LTE</td>
        <td className="tg-031e">FDD-LTE</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B8／B20</td>
        <td className="tg-yw4l">B2／B4／B12</td>
        <td className="tg-yw4l">B4／B13</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B28</td>
      </tr>
      <tr>
        <td className="tg-031e">TDD-LTE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e">3G</td>
        <td className="tg-031e">WCDMA</td>
        <td className="tg-yw4l">B1／B5／B8</td>
        <td className="tg-yw4l">B2／B4／B5</td>
        <td className="tg-yw4l" />
        <td className="tg-yw4l">B1／B5</td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GSM/EDGE</td>
        <td className="tg-yw4l">B3／B8</td>
        <td className="tg-yw4l" />
        <td className="tg-yw4l" />
        <td className="tg-yw4l" />
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>内蔵GNSS</td>
        <td className="tg-yw4l">オプション</td>
        <td className="tg-yw4l">オプション</td>
        <td className="tg-yw4l">オプション</td>
        <td className="tg-yw4l">オプション</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Wi-Fiインターフェース</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>地域</td>
        <td className="tg-yw4l">EMEA、韓国、タイ、インド</td>
        <td className="tg-yw4l">北米</td>
        <td className="tg-yw4l">北米</td>
        <td className="tg-yw4l">オーストラリア</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>認証</td>
        <td className="tg-yw4l">CE/ GCF/ Vodafone</td>
        <td className="tg-yw4l">FCC/ PTCRB/ AT&amp;T/ IC/ ROGERS</td>
        <td className="tg-yw4l">FCC/ GCF/ Verizon</td>
        <td className="tg-yw4l">RCM/ Telstra</td>
      </tr>
    </tbody></table>
  <br />
</div>

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg .tg-yw4l{vertical-align:top}\n" }} />
  <table className="tg">
    <tbody><tr>
        <th className="tg-031e" colSpan={2}>周波数</th>
        <th className="tg-yw4l">EC21-AUV</th>
        <th className="tg-yw4l">EC21-AU</th>
        <th className="tg-yw4l">EC21-KL</th>
        <th className="tg-yw4l">EC21-J</th>
        <th className="tg-yw4l">EC20-CEL</th>
      </tr>
      <tr>
        <td className="tg-031e" rowSpan={2}>LTE</td>
        <td className="tg-031e">FDD-LTE</td>
        <td className="tg-yw4l">B1／B3／B5／B8／B28</td>
        <td className="tg-yw4l">B1／B2①／B3／B4／B5／B7／B8／B28</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B8</td>
        <td className="tg-yw4l">B1／B3／B8／B18／B19／B26</td>
        <td className="tg-yw4l">B1／B3／B5</td>
      </tr>
      <tr>
        <td className="tg-031e">TDD-LTE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">B40</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e">3G</td>
        <td className="tg-031e">WCDMA</td>
        <td className="tg-yw4l">B1／B5／B8</td>
        <td className="tg-yw4l">B1／B2／B5／B8</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GSM/EDGE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">Quad-band</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>内蔵GNSS</td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">オプション<br></br>   </td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">N</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Wi-Fiインターフェース</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>地域</td>
        <td className="tg-yw4l">Vodafone Australia</td>
        <td className="tg-yw4l">南米、ANZ、台湾</td>
        <td className="tg-yw4l">韓国</td>
        <td className="tg-yw4l">日本</td>
        <td className="tg-yw4l">China Telecom</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>認証</td>
        <td className="tg-yw4l">RCM</td>
        <td className="tg-yw4l">RCM/ Anatel/ NCC</td>
        <td className="tg-yw4l">KC/ SKT/KT＊/ LGU+＊</td>
        <td className="tg-yw4l">JATE/ TELEC/ DOCOMO＊</td>
        <td className="tg-yw4l">CCC/ SRRC/ NAL</td>
      </tr>
    </tbody></table>
</div>

## 入門ガイド

### USBドライバーのインストール

- **Windowsユーザー**: ほとんどのバージョンのWindowsでは、USB COMポート用の内蔵ドライバーが自動的に読み込まれません。STのUSBドライバー[STM32 Virtual COM Port Driver](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software)をダウンロードする必要があります。

- **Mac OS XおよびChromebookユーザー**: ボードはドライバーなしで接続するだけで動作します！

### DFUドライバーの変更

**Windowsユーザー向け**:

- ステップ1. BOOTボタンを押し続けながらコンピューターに接続すると、以下のようにデバイスマネージャーで**STM32 Device in DFU Mode**が表示されます。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/before_driver_installation.png)

- ステップ2. これは、[zadig_xx.exe](https://files.seeedstudio.com/wiki/Wio_LTE/res/zadig_2.1.2.exe)を使用してDFUドライバーを**STTub30**から**WinUSB**に変更する必要があることを示しています。Zadigに何も情報が表示されない場合は、Options--> List All Devicesをクリックし、STM32 Virtual COM Portsを選択してください。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/zadig.png)

- ステップ3. 以下のようにデバイスマネージャーで「STMicroelectronics Virtual COM Port」が表示されます。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/after_driver_installation.png)

### Arduinoで遊ぶ

**1. ソフトウェア設定**

- ステップ1. Arduino IDEをインストールします。IDEバージョン1.8.0以上を推奨します。
- ステップ2. [SeeedボードをArduino IDEに追加する方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)に従って、Wio_LTEをArduinoボードマネージャーに追加します。

JSON URLをコピーしてArduino設定に貼り付けます

```
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_seeeduino_boards_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio_LTE/img/boardManager_stm32.png" style={{width:800, height:'auto'}}/></div>


- ステップ3. GithubからWio_LTE Library](https://github.com/Seeed-Studio/Wio_LTE_Arduino_Library)をダウンロードします。
- ステップ4. [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用ライブラリをインストールします。

**2. SMS送信で遊ぶ**

- ステップ1. Nano SIMカードをPCBボード側のNano SIMスロットに挿入します。

- ステップ 2. File--> Examples-->Wio_LTE_Arduino_Library-->SMSSend スケッチを選択します。
- ステップ 3. 電話番号と情報を変更します。
- ステップ 4. Wio LTE の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 5. デバイスマネージャーで **STM BOOTLARDER** が表示されます。
- ステップ 6. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 7. COM Port は空白のままにします。
- ステップ 8. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。
- ステップ 9. **RST** ボタンを押して COM ポートを有効にします。

```cpp
#include "wio_tracker.h"

char message[128] = "Hello from Wio Traker!";

WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");

  if(!wio.waitForNetworkRegister())
  {
    SerialUSB.println("Network error!");
    return;
  } else {
    SerialUSB.println("Network ready!");
  }

  // Change xxxxxxxxxxx to your test phone number
  if(wio.sendSMS("185XXX26402", message))
  {
    SerialUSB.println("Send OK!");
  }
  else
  {
    SerialUSB.println("Send Error!");
  }

}

void loop() {
  AT_bypass();
}
```

- ステップ 10. COM モニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再度開くことでその問題を回復できます**。
- ステップ 11. 電話番号の所有者がメッセージを受信します。

```cpp
Power On!


Network ready!


Send OK!
```

**3. SMS 読み取りで遊ぶ**

- ステップ 1. Nano SIM カードを PCB ボード側の近くにある Nano SIM スロットに挿入します。
- ステップ 2. File--> Examples-->Wio_LTE_Arduino_Library-->SMSRead スケッチを選択します。
- ステップ 3. Wio LTE の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 4. デバイスマネージャーで **STM BOOTLARDER** が表示されます。
- ステップ 5. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 6. COM Port は空白のままにします。
- ステップ 7. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。
- ステップ 8. **RST** ボタンを押して COM ポートを有効にします。

```cpp
#include "wio_tracker.h"

uint16_t newSMSNumber = -1;
char message[128];
char phone[32];
char dateTime[32];


WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");
  SerialUSB.println("Wait for network registered...");

  if(!wio.waitForNetworkRegister())
  {
    SerialUSB.println("Network error!");
    return;
  } else {
    SerialUSB.println("Network ready!");
  }
  wio.readAllRecUnreadSMS();  // Set all "REC UNREAD SMS" to "REC READ SMS"
}

void loop() {
  int id = wio.detectRecUnreadSMS();
  if(-1 != id){
    newSMSNumber = id;
    wio.readSMS(newSMSNumber, message, 128, phone, dateTime);
    SerialUSB.println("++++++++++++++ Start +++++++++++++++++");
    SerialUSB.print("From: ");
    SerialUSB.println(phone);
    SerialUSB.print("Date: ");
    SerialUSB.println(dateTime);
    SerialUSB.println(message);
    SerialUSB.println("++++++++++++++++ End +++++++++++++++");
  } else {
    SerialUSB.println("Waiting for new SMS!");
  }

  delay(1000);
}

```

- ステップ 9. COM モニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再度開くことでその問題を回復できます**。
- ステップ 10. シリアルモニターを開き、**Waitting for new SMS!** が表示されたら、ボードにメッセージを送信すると、新しいメッセージが電話番号、時刻、内容と共にすぐに表示されます。

```cpp
Power On!
Wait for network registered...


Network ready!


Waiting for new SMS!
Waiting for new SMS!
Waiting for new SMS!

++++++++++++++ Start +++++++++++++++++
From: 1375002xxxx
Date: 17/12/20,17:40:38+32
Hello tracker
++++++++++++++++ End +++++++++++++++
Waiting for new SMS!
Waiting for new SMS!
```

**4. GPS で遊ぶ**

- ステップ 1. Nano SIM カードを PCB ボード側の近くにある Nano SIM スロットに挿入します。
- ステップ 2. File--> Examples-->Wio_LTE_Arduino_Library-->GNNS-->GNSS_Show_Coordinate スケッチを選択します。
- ステップ 3. Wio LTE の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 4. デバイスマネージャーで **STM BOOTLARDER** が表示されます。
- ステップ 5. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 6. COM Port は空白のままにします。
- ステップ 7. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。
- ステップ 8. **RST** ボタンを押して COM ポートを有効にします。

```cpp
#include "gnss.h"


GNSS gnss = GNSS();

void setup() {
  gnss.Power_On();
  while(false == gnss.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }
  SerialUSB.println("\n\rPower On!");

  if(!(gnss.open_GNSS())){
    SerialUSB.println("\n\rGNSS init failed!");
    return;
  }

  SerialUSB.println("Open GNSS OK.");
  delay(2000);
}

void loop() {
  if(gnss.getCoordinate()){
    SerialUSB.println();
    SerialUSB.print("GNSS: \r\n");

    // Output double type
    SerialUSB.print("Data type in double: ");
    SerialUSB.print(gnss.longitude, 6);
    SerialUSB.print(",");
    SerialUSB.println(gnss.latitude, 6);

    // Output char* type
    SerialUSB.print("Data type in string: ");
    SerialUSB.print(gnss.str_longitude);
    SerialUSB.print(",");
    SerialUSB.println(gnss.str_latitude);
  } else{
    SerialUSB.print("...");
  }
}

```

- ステップ 9. COM モニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再度開くことでその問題を回復できます**。
- ステップ 10. 画面に緯度、経度の情報が印刷されるのを確認します。

```cpp
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...

RDY
AT

OK


Power On!


Open GNSS OK.
.................................
GNSS:
Data type in double: 113.966255,22.583820
Data type in string: 113.966255,22.583819

GNSS:
Data type in double: 113.966248,22.583818
Data type in string: 113.966248,22.583818

GNSS:
Data type in double: 113.966248,22.583817
Data type in string: 113.966248,22.583816

GNSS:
Data type in double: 113.966248,22.583820
Data type in string: 113.966248,22.583819
```

**5. NMEA モードで GPS で遊ぶ**

- ステップ 1. Nano SIM カードを PCB ボード側の近くにある Nano SIM スロットに挿入します。
- ステップ 2. File--> Examples-->Wio_LTE_Arduino_Library-->GNNS-->GNSS_NMEA スケッチを選択します。
- ステップ 3. Wio LTE の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 4. デバイスマネージャーで **STM BOOTLARDER** が表示されます。
- ステップ 5. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 6. COM Port は空白のままにします。
- ステップ 7. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。
- ステップ 8. **RST** ボタンを押して COM ポートを有効にします。

```cpp
#include "gnss.h"


char nmea_sentence[192];
char nmea_GSV_sentence[512];
GNSS gnss = GNSS();

void setup() {
  gnss.Power_On();
  while(false == gnss.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }
  SerialUSB.println("\n\rPower On!");

  if(!(gnss.open_GNSS())){
    SerialUSB.println("\n\rGNSS init failed!");
    return;
  }
  SerialUSB.println("Open GNSS OK.");
  gnss.enable_NMEA_mode();  // Set output sentence in NMEA mode
}

void loop() {  
  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(GGA, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(RMC, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(GSA, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(VTG, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_GSV_sentence, 512);
  gnss.read_NMEA_GSV(nmea_sentence);
  SerialUSB.print(nmea_sentence);

  SerialUSB.println("\r\n");

  delay(1000);
}

```

- ステップ 9. COM モニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再度開くことでその問題を回復できます**。
- ステップ 10. 以下のログが表示されます。

```cpp
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...


Power On!


Open GNSS OK.

$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,3,1,12,16,60,324,40,27,54,171,40,03,19,253,,08,21,198,*7B
$GPGSV,3,2,12,09,02,322,,14,32,147,,21,04,080,,22,17,233,*7E
$GPGSV,3,3,12,23,32,314,,26,45,018,,31,35,073,,32,10,149,*7C


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,3,1,12,03,19,253,38,08,21,198,34,14,32,147,37,16,60,324,42*70
$GPGSV,3,2,12,22,17,233,37,23,32,314,38,26,45,018,40,27,54,171,44*7D
$GPGSV,3,3,12,31,35,073,40,09,02,322,,21,04,080,,32,10,149,*75


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,4,1,13,03,19,253,40,04,,,37,08,21,198,36,09,02,322,33*43
$GPGSV,4,2,13,14,32,147,37,16,60,324,41,22,17,233,40,23,32,314,39*72
$GPGSV,4,3,13,26,45,018,41,27,54,171,41,31,35,073,40,21,04,080,*78
$GPGSV,4,4,13,32,10,149,*47


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,4,1,14,03,19,253,39,04,,,37,08,21,198,36,09,02,322,34*4D
$GPGSV,4,2,14,14,32,147,36,16,60,324,41,22,17,233,37,23,32,314,39*74
$GPGSV,4,3,14,26,45,018,41,27,54,171,41,31,35,073,41,21,04,080,*7E
$GPGSV,4,4,14,32,10,149,,33,,,34*47
$GPVTG,,T,,M,,N,,K,N*2C


$GPGGA,110917.30,2235.028403,N,11357.974736,E,1,10,0.9,52.2,M,-1.0,M,,*43
$GPRMC,110917.30,A,2235.028403,N,11357.974736,E,0.0,,050118,2.3,W,A*0B
$GPGSA,A,3,03,08,09,14,16,22,23,26,27,31,,,1.8,0.9,1.6*37
$GPVTG,,T,2.3,M,0.0,N,0.0,K,A*0C
$GPGSV,4,1,15,03,19,253,38,04,,,36,08,21,198,34,09,02,322,33*49
$GPGSV,4,2,15,14,32,147,36,16,60,324,40,22,17,233,36,23,32,314,38*74
$GPGSV,4,3,15,26,45,018,40,27,54,171,40,31,35,073,40,21,04,080,*7E
$GPGSV,4,4,15,32,10,149,,33,,,34,46,,,34*43
$GPVTG,,T,2.3,M,0.0,N,0.0,K,A*0C

```

**6. 発信で遊ぶ**

- ステップ 1. Nano SIM カードを PCB ボード側の近くにある Nano SIM スロットに挿入します。
- ステップ 2. File--> Examples-->Wio_LTE_Arduino_Library-->Callup スケッチを選択します。
- ステップ 3. 電話番号を変更します。
- ステップ 4. Wio LTE の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 5. デバイスマネージャーで **STM BOOTLARDER** が表示されます。
- ステップ 6. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 7. COM Port は空白のままにします。
- ステップ 8. Sketch-->Upload を選択して、コードを Wio_LTE にアップロードします。
- ステップ 9. **RST** ボタンを押して COM ポートを有効にします。
- ステップ 10. COM モニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再度開くことでその問題を回復できます**。
- ステップ 11. 電話番号の所有者が通話を受信します。


```cpp
#include "wio_tracker.h"

WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");

  while(!wio.init()){
    delay(1000);
    SerialUSB.println("Accessing network...");
  }
  SerialUSB.println("Initialize done...");

  bool ret = wio.waitForNetworkRegister();
  if(true == ret){
      SerialUSB.println("Network accessed!");
  }else {
      SerialUSB.println("Network failed!");
      return;
  }

  // Make a phone call
  wio.callUp("185XXX26402");
  SerialUSB.println("Calling...");

}

void loop() {
  /* Debug */
  AT_bypass();
}

```

**7. Socket TCP/UDP クライアントで遊ぶ**

- ステップ 1. Nano SIM カードを PCB ボード側の Nano SIM スロットに挿入します。
- ステップ 2. File--> Examples-->Wio_LTE_Arduino_Library-->TCPConnect を選択します。
- ステップ 3. 電話番号を変更します。
- ステップ 4. Wio LTE の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 5. デバイスマネージャーに **STM BOOTLARDER** が表示されます。
- ステップ 6. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 7. COM Port は空白のままにします。
- ステップ 8. Sketch-->Upload を選択してコードを Wio_LTE にアップロードします。

```cpp
#include "ethernet.h"

Ethernet eth = Ethernet();


// const char apn[10] = "CMNET";
const char apn[10] = "UNINET";
const char URL[100] = "mbed.org";
char http_cmd[100] = "GET /media/uploads/mbed_official/hello.txt HTTP/1.0\n\r\n\r";
int port = 80;

int ret = 0;


void setup() {
  SerialUSB.println("Begin...");
  eth.Power_On();
  while(false == eth.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }

  while(!eth.init()){
    delay(1000);
    SerialUSB.println("Accessing network...");
  }
  SerialUSB.println("Initialize done...");

  eth.join(apn);
  SerialUSB.print("\n\rIP: ");
  SerialUSB.print(eth.ip_string);

  if(eth.connect(URL, port, TCP))
  {
    eth.write(http_cmd);
    while(MODULE_PORT.available()){
        serialDebug.write(MODULE_PORT.read());
    }    
    eth.close(1);
  }
  else {
    SerialUSB.println("Connect Error!");
  }

}

void loop() {
  /* Debug */
  AT_bypass();
}
```

- ステップ 9. **RST** ボタンを押して COM ポートを有効にします。
- ステップ 10. COM モニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再起動すればその問題は回復できます**。

```
Begin...
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...


Initialize done...


IP: 10.229.226.108


+QIURC: "recv",0,389
HTTP/1.1 200 OK
Server: nginx/1.11.12
Date: Mon, 25 Dec 2017 04:45:01 GMT
Content-Type: text/plain
Content-Length: 14
Connection: close
Last-Modified: Fri, 27 Jul 2012 13:30:34 GMT
Accept-Ranges: bytes
Cache-Control: max-age=36000
Expires: Mon, 25 Dec 2017 14:44:58 GMT
X-Upstream-L1-next-hop: 217.140.101.22:8080
X-Upstream-L1: developer-sjc-cyan-border-nginx

Hello world!


+QIURC: "closed",0
```

**8. SD カードで遊ぶ**

:::note
    Epruino ファームウェア v1.94 は SD カードドライブをサポートしていません。v1.96 以降を使用してください。最新バージョンは v1.99 です。
:::

- ステップ 1. micro SD カードを SD カードスロットに挿入します。
- ステップ 2. File--> Examples-->Wio_LTE_Arduino_Library-->SDCard->CardInfo を選択します。
- ステップ 3. 電話番号を変更します。
- ステップ 4. Wio LTE の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 5. デバイスマネージャーに **STM BOOTLARDER** が表示されます。
- ステップ 6. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 7. COM Port は空白のままにします。
- ステップ 8. Sketch-->Upload を選択してコードを Wio_LTE にアップロードします。

```cpp
 // include the SD library:
#include <SD.h>

// set up variables using the SD utility library functions:
Sd2Card card;
SdVolume volume;
SdFile root;

const int chipSelect = 43;

void setup()
{

  SerialUSB.print("\nInitializing SD card...");
  pinMode(SS, OUTPUT);


  // we'll use the initialization code from the utility libraries
  // since we're just testing if the card is working!
  while (!card.init(SPI_HALF_SPEED, chipSelect)) {
    SerialUSB.println("initialization failed. Things to check:");
    SerialUSB.println("* is a card is inserted?");
    SerialUSB.println("* Is your wiring correct?");
    SerialUSB.println("* did you change the chipSelect pin to match your shield or module?");
  }

  // print the type of card
  SerialUSB.print("\nCard type: ");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      SerialUSB.println("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      SerialUSB.println("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      SerialUSB.println("SDHC");
      break;
    default:
      SerialUSB.println("Unknown");
  }

  // Now we will try to open the 'volume'/'partition' - it should be FAT16 or FAT32
  if (!volume.init(card)) {
    SerialUSB.println("Could not find FAT16/FAT32 partition.\nMake sure you've formatted the card");
    return;
  }


  // print the type and size of the first FAT-type volume
  uint32_t volumesize;
  SerialUSB.print("\nVolume type is FAT");
  SerialUSB.println(volume.fatType(), DEC);
  SerialUSB.println();

  volumesize = volume.blocksPerCluster();    // clusters are collections of blocks
  volumesize *= volume.clusterCount();       // we'll have a lot of clusters
  volumesize *= 512;                            // SD card blocks are always 512 bytes
  SerialUSB.print("Volume size (bytes): ");
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Kbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Mbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);


  SerialUSB.println("\nFiles found on the card (name, date and size in bytes): ");
  root.openRoot(volume);

  // list all files in the card with date and size
  root.ls(LS_R | LS_DATE | LS_SIZE);
}


void loop(void) {

}
```

- ステップ 9. **RST** ボタンを押して COM ポートを有効にします。
- ステップ 10. COM モニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再起動すればその問題は回復できます**。

```cpp

Initializing SD card...
Card type: SDHC

Volume type is FAT32

Volume size (bytes): 2689048576
Volume size (Kbytes): 2626024
Volume size (Mbytes): 2564

Files found on the card (name, date and size in bytes):

```

**9. Grove モジュールで遊ぶ**

**9.1 Grove デジタルモジュールで遊ぶ**  

[Grove-TemperatureAndHumidity_Sensor](https://wiki.seeedstudio.com/ja/Grove-TemperatureAndHumidity_Sensor/) をデジタル入力として使用し、Wio LTE の D20 に接続します。

- ステップ 1. Wio LTE の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 2. デバイスマネージャーに **STM BOOTLARDER** が表示されます。
- ステップ 3. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 4. COM Port は空白のままにします。
- ステップ 5. Github から [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) と [Grove-TemperatureAndHumidity_Sensor Library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor/archive/master.zip) をダウンロードします。Arduino 用ライブラリのインストール方法については、[How to install library](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照してください。
- ステップ 6. 以下のコードをスケッチにコピーします。
- ステップ 7. Upload をクリックしてコードを Wio_LTE にアップロードします。

```c
#include <WioLTEforArduino.h>
#include "DHT.h"
#define DHTPIN  (WIOLTE_D20)
#define INTERVAL    (100)

// Uncomment whatever type you're using!
#define DHTTYPE DHT11   // DHT 11 
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

WioLTE Wio;
DHT dht(DHTPIN, DHTTYPE);

void setup()
{
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init();
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("### Initial temperature and humidity sensor.");
  dht.begin();
}

void loop()
{
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
    float h = dht.readHumidity();
    float t = dht.readTemperature();

    // check if returns are valid, if they are NaN (not a number) then something went wrong!
    if (isnan(t) || isnan(h)) 
    {
        SerialUSB.println("Failed to read from DHT");
    } 
    else 
    {
        SerialUSB.print("Humidity: "); 
        SerialUSB.print(h);
        SerialUSB.print(" %\t");
        SerialUSB.print("Temperature: "); 
        SerialUSB.print(t);
        SerialUSB.println(" *C");
    }
}
```

- ステップ 8. **RST** ボタンを押して COM ポートを有効にします。
- ステップ 9. COM モニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再起動すればその問題は回復できます**。

```
### I/O Initialize.
### Power supply ON.
### Initial temperature and humidity sensor.
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 39.00 % Temperature: 27.00 *C
```

**9.2 Grove アナログモジュールで遊ぶ**  

[Grove-Light Sensor](https://wiki.seeedstudio.com/ja/Grove-Light_Sensor/) をアナログ入力として使用し、Wio LTE の A4（12bit ADC）に接続します。

- ステップ 1. Wio LTE の背面にある BOOT ボタンを押し続けながら、USB を PC に接続します。
- ステップ 2. デバイスマネージャーに **STM BOOTLARDER** が表示されます。
- ステップ 3. Tools-->Boards-->Wio_Tracker_LTE を選択します。
- ステップ 4. COM Port は空白のままにします。
- ステップ 5. Github から [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) をダウンロードします。Arduino 用ライブラリのインストール方法については、[How to install library](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照してください。
- ステップ 6. 以下のコードをスケッチにコピーします。
- ステップ 7. Upload をクリックしてコードを Wio_LTE にアップロードします。

```c
#include <WioLTEforArduino.h>
#define LIGHT_PIN  (WIOLTE_A4)
WioLTE Wio;

void setup() {
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init();
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("### Setup pin mode.");
  pinMode(LIGHT_PIN, INPUT_ANALOG);
}

void loop() {
  int light = analogRead(LIGHT_PIN);
  SerialUSB.println(light);
  delay(1000);
}

```

- ステップ 8. **RST** ボタンを押して COM ポートを有効にします。
- ステップ 9. COM モニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE の COM モニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDE を再起動すればその問題は回復できます**。


```
### I/O Initialize.
### Power supply ON.
### Setup pin mode.
2531
2530
2530
2530
2531
2533
2532
2531
```

**9.3 Grove I2Cモジュールで遊ぶ**  

I2Cデバイスとして[Grove - 3軸デジタル加速度センサー(±16g)](https://wiki.seeedstudio.com/ja/Grove-3-Axis_Digital_Accelerometer-16g/)を使用し、Wio LTEのI2Cポートに接続します。

- ステップ1. Wio LTEの背面にあるBOOTボタンを押し続けながら、USBをPCに接続します。
- ステップ2. デバイスマネージャーで**STM BOOTLARDER**が表示されます。
- ステップ3. Tools-->Boards-->Wio_Tracker_LTEを選択します。
- ステップ4. COMポートは空白のままにします。
- ステップ5. GithubからWioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip)と[ADXL345](https://github.com/Seeed-Studio/Accelerometer_ADXL345/archive/master.zip)をダウンロードします。Arduino用ライブラリのインストール方法については、[ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してください。
- ステップ6. 以下のコードをスケッチにコピーします。
- ステップ7. アップロードをクリックしてコードをWio_LTEにアップロードします。

```c
#include <WioLTEforArduino.h>
#include <ADXL345.h>       

#define INTERVAL    (100)

WioLTE Wio;
ADXL345 Accel;

void setup()
{ 
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init(); 
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  Accel.powerOn();
  SerialUSB.println("### Setup completed.");
}

void loop()
{
  int x;
  int y;
  int z;
  Accel.readXYZ(&x, &y, &z);
  SerialUSB.print(x);
  SerialUSB.print(' ');
  SerialUSB.print(y);
  SerialUSB.print(' ');
  SerialUSB.println(z); 
  delay(INTERVAL);
}
```

- ステップ8. **RST**ボタンを押してCOMポートを有効にします。
- ステップ9. COMモニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE COMモニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動することでその問題を回復できます**。

```
### I/O Initialize.
### Power supply ON.
### Setup completed.
-224 -51 -82
-227 -40 -90
-231 -37 -91
-229 -37 -90
-227 -38 -90
-229 -39 -90
```

**9.4 Grove UARTモジュールで遊ぶ**  

UARTデバイスとして[Grove-CO2](https://wiki.seeedstudio.com/ja/Grove-CO2_Sensor/)を使用し、Wio LTEのUARTポートに接続します。

- ステップ1. Wio LTEの背面にあるBOOTボタンを押し続けながら、USBをPCに接続します。
- ステップ2. デバイスマネージャーで**STM BOOTLARDER**が表示されます。
- ステップ3. Tools-->Boards-->Wio_Tracker_LTEを選択します。
- ステップ4. COMポートは空白のままにします。
- ステップ5. Githubから[WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip)をダウンロードします。Arduino用ライブラリのインストール方法については、[ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してください。
- ステップ6. 以下のコードをスケッチにコピーします。
- ステップ7. アップロードをクリックしてコードをWio_LTEにアップロードします。

```c
#include <WioLTEforArduino.h>
#include <ADXL345.h>       
#define INTERVAL    (100)

const unsigned char cmd_get_sensor[] =
{
    0xff, 0x01, 0x86, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x79
};

unsigned char dataRevice[9];
int temperature;
int CO2PPM;

WioLTE Wio;

void setup()
{ 
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init(); 
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("Initial UART.");
  Serial.begin(9600);
}

void loop() {
    if(dataRecieve())
    { 
        SerialUSB.print("Temperature: ");
        SerialUSB.print(temperature);
        SerialUSB.print("  CO2: ");
        SerialUSB.print(CO2PPM);
        SerialUSB.println("");
    }
    delay(1000); 
}


bool dataRecieve(void)
{
    byte data[9];
    int i = 0;

    //transmit command data
    for(i=0; i<sizeof(cmd_get_sensor); i++)
    {
        Serial.write(cmd_get_sensor[i]);
    }
    delay(10);
    //begin reveiceing data
    if(Serial.available())
    {
        while(Serial.available())
        {
            for(int i=0;i<9; i++)
            {
                data[i] = Serial.read();
            }
        }
    }

    for(int j=0; j<9; j++)
    {
        Serial.print(data[j]);
        Serial.print(" ");
    }
    Serial.println("");

    if((i != 9) || (1 + (0xFF ^ (byte)(data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7]))) != data[8])
    {
        return false;
    }

    CO2PPM = (int)data[2] * 256 + (int)data[3];
    temperature = (int)data[4] - 40;

    return true;
}
```

- ステップ8. **RST**ボタンを押してCOMポートを有効にします。
- ステップ9. COMモニターツールを使用してシリアルメッセージを印刷します。**Arduino IDE COMモニターは使用しないでください！次回のダウンロードが失敗する可能性がありますが、Arduino IDEを再起動することでその問題を回復できます**。

```
### I/O Initialize.
### Power supply ON.
### Initial UART.
Temperature: 22  CO2: 410
Temperature: 22  CO2: 1031
Temperature: 22  CO2: 2699
Temperature: 22  CO2: 2579
Temperature: 22  CO2: 2972
```

## FAQ

**Q1: Arduino IDEを使用してプログラムをダウンロードできず、Arduino IDEの下部に以下のエラー情報が表示されます。**

A3: これはバグです。Arduinoシリアルポートを使用して情報を印刷する際、Arduino IDEがシリアルポート番号を記憶します。そのため、新しいプログラムをダウンロードするために利用可能なシリアルポートがありません。一時的な解決策として、Arduino IDEを再起動することで問題を解決できます。予防的な解決策として、SSCOMなどの他のCOMモニターソフトウェアを使用してください。プログラムダウンロード中に処理バーが表示されることを確認してください。そうでなければ、以下の情報が表示され、プログラムはダウンロードされません。

```
Sketch uses 23068 bytes (2%) of program storage space. Maximum is 1048576 bytes.
Global variables use 13864 bytes of dynamic memory.
DFU begin
dfu-util 0.8

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2014 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to dfu-util@lists.gnumonks.org

Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release!!!
No DFU capable USB device available
DFU end
```

**Q2: dfuドライバーを変更した後、デバイスマネージャーでCOMポートが表示されません。**

A5: RSTボタンを押すと、デバイスマネージャーでCOMポートが表示されます。

**Q3: Zadigソフトウェアで何も情報が表示されません。**

A6: Options--> List All Devicesをクリックし、STM32 Virtual COM Portsを選択してください。

## Wio LTE AUバージョン v1.3b 回路図オンラインビューアー

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20AU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Wio LTE EUバージョン v1.3b 回路図オンラインビューアー

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20EU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Wio LTE JPバージョン v1.3b 回路図オンラインビューアー

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20JP%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Wio LTE USバージョン v1.3b 回路図オンラインビューアー

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20US%20Version%20v1.3b%20-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [Wio LTE AUバージョン v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20AU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE EUバージョン v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20EU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE JPバージョン v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20JP%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE USバージョン v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20US%20Version%20v1.3b%20-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[ライブラリ]** [Wio_LTE_Arduino_Library](https://github.com/Seeed-Studio/Wio_LTE_Arduino_Library)

- **[データシート]** [ATコマンド](https://files.seeedstudio.com/wiki/Wio_LTE/res/AT_Command.zip)

## プロジェクト

**Google Mapを使用した交通データの可視化**：Wio LTE cat.1を使用して交通GPSやその他の情報を監視します。コールドチェーンでは、GPS位置を温度や湿度と一緒に監視できます。自転車では、GPS位置を心拍数と一緒に監視できます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/transportation-data-visualization-with-google-map-517ce4/embed' width='350'></iframe>

**大気汚染の可視化**：大気汚染問題はますます注目を集めています。今回、Wio LTEと新しいレーザーPM2.5センサーを使用してPM2.5を監視してみました。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

 技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。
私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>


<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
