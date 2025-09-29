---
description: Seeeduino Stalker
title: Seeeduino Stalker
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Stalker
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**Seeeduino Stalker** は、**データロガー機能**を備えた、機能豊富な Arduino 互換の **ワイヤレスセンサーネットワークノード** です。そのモジュール構造とオンボード周辺機器により、定期的にタイムスタンプ付きセンサーデータを記録するのに便利です。**Seeeduino Stalker** には、_温度センサー、バックアップ電源付き RTC、SD カードソケット、Bee ソケット、ソーラーリチウムポリマーイオンバッテリーチャージャー_ が搭載されています。**Seeeduino Stalker** は、追跡、監視、制御プロジェクトに最適な候補です。

現在（および最新）のバージョンは Seeeduino-Stalker v3 です。

以下の画像をクリックすると、対応するバージョンのドキュメントにアクセスできます。

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeeduino-stalker-168.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Stalkerv21.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.1.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.2.jpg)   | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.2.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeed_Stalker_v3-6.png)|
|---|---|---|---|---|---|
| Seeeduino Stalker v1.0  |Seeeduino Stalker v2.0   |Seeeduino Stalker v2.1   |Seeeduino Stalker v2.2   | Seeeduino Stalker v2.3  | Seeeduino-Stalker v3  |

### Seeeduino Stalker の各バージョンの比較  

<table>
<tr>
<th> パラメータ </th>
<th> v1.0 </th>
<th> v2.0 </th>
<th> v2.1 </th>
<th> v2.2 </th>
<th> v2.3 </th>
<th> v3 </th>
<th> 備考 </th>
</tr>
<tr>
<td> <strong><font>製品リリース日</font></strong> </td>
<td> <strong><font>2009年12月23日</font></strong> </td>
<td> <strong><font>2010年12月17日</font></strong> </td>
<td> <strong><font>2011年10月3日</font></strong> </td>
<td> <strong><font>2011年12月27日</font></strong> </td>
<td> <strong><font>2011年12月29日</font></strong> </td>
<td> <strong><font>2014年6月6日</font></strong> </td>
<td> </td>
</tr>
<tr>
<td> <strong>生産状況</strong> </td>
<td> <strong><font>生産終了</font></strong> </td>
<td> <strong><font>生産終了</font></strong> </td>
<td> <strong><font>生産終了</font></strong> </td>
<td> <strong><font>生産終了</font></strong> </td>
<td> <strong><font>生産中</font></strong> </td>
<td> <strong><font>生産中</font></strong> </td>
<td> </td>
</tr>
<tr>
<td> <strong>ユーザー LED &amp; スイッチ</strong> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> ユーザー LED </td>
<td> PB5 (Arduino ピン 13) </td>
<td> PB0 (Arduino ピン 8) </td>
<td> PB0 (Arduino ピン 8) </td>
<td> PB5 (Arduino ピン 13) </td>
<td> PB5 (Arduino ピン 13) </td>
<td> PB0 (Arduino ピン 13) </td>
<td> </td>
</tr>
<tr>
<td> ユーザースイッチ </td>
<td> PB4 (Arduino ピン 12) </td>
<td> なし </td>
<td> なし </td>
<td> なし </td>
<td> なし </td>
<td> なし </td>
<td> </td>
</tr>
<tr>
<td> <strong>Arduino 互換性</strong> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> Arduino ピン配置と物理的に互換 </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> Diecimila/Duemilanove/UNO と互換 </td>
</tr>
<tr>
<td> Arduino ソフトウェアと互換 </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> ブートローダーがプリロード済み </td>
</tr>
<tr>
<td> Atmega168 バリアント利用可能 </td>
<td> はい </td>
<td> いいえ </td>
<td> いいえ </td>
<td> いいえ </td>
<td> いいえ </td>
<td> いいえ </td>
<td> </td>
</tr>
<tr>
<td> Atmega328 バリアント利用可能 </td>
<td> いいえ </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> </td>
</tr>
<tr>
<td> AVRISP 6 ピンヘッダーあり </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> </td>
</tr>
<tr>
<td> FT232RL &amp; USB コネクタあり </td>
<td> いいえ </td>
<td> いいえ </td>
<td> いいえ </td>
<td> いいえ </td>
<td> いいえ </td>
<td> いいえ </td>
<td> 両バージョンで「UartSBee V3.1」または<strong>V4.0</strong>を別途購入し、Arduino IDE を使用してプログラムをダウンロードする必要があります。UartSBee に接続するためのコネクタが両バージョンに存在します。マイクロコントローラーのリセットは DTR によって自動的に制御されます。 </td>
</tr>
<tr>
<td> スタンドアロン動作 </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> </td>
</tr>
<tr>
<td> Arduino/Seeeduino のシールドとして動作 </td>
<td> はい </td>
<td> いいえ </td>
<td> いいえ </td>
<td> いいえ </td>
<td> いいえ </td>
<td> いいえ </td>
<td> </td>
</tr>
<tr>
<td> シールドモードでさらにスタック可能？ </td>
<td> はい </td>
<td> 該当なし </td>
<td> 該当なし </td>
<td> 該当なし </td>
<td> 該当なし </td>
<td> 該当なし </td>
<td> I<sup>2</sup>C インターフェースを使用 </td>
</tr>
<tr>
<td> <strong>リアルタイムクロック</strong> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> チップ </td>
<td> DS1307 </td>
<td> RX8025 </td>
<td> DS3231 </td>
<td> DS3231 </td>
<td> DS3231 </td>
<td> DS1337 </td>
<td> </td>
</tr>
<tr>
<td> オンボードバックアップ電源 </td>
<td> CR2032 コインセル </td>
<td> スーパーキャパシタ </td>
<td> CR2032 コインセル </td>
<td> CR2032 コインセル </td>
<td> CR2032 コインセル </td>
<td> CR1220 コインセル </td>
<td> </td>
</tr>
<tr>
<td> インターフェース </td>
<td> I<sup>2</sup>C </td>
<td> I<sup>2</sup>C </td>
<td> I<sup>2</sup>C </td>
<td> I<sup>2</sup>C </td>
<td> I<sup>2</sup>C </td>
<td> I<sup>2</sup>C </td>
<td> </td>
</tr>
<tr>
<td> <strong>I<sup>2</sup>C インターフェース</strong> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> マイクロコントローラーの PC4 および PC5（つまり SCL および SDA）に直接接続するためのコネクタ </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> はい </td>
<td> </td>
</tr>
<tr>
<td> マイクロコントローラーが 3.3V モードで動作している間に 5.0V デバイスに接続するためのオンボードレベル変換 </td>
<td> はい（PCA9306 を使用） </td>
<td> はい（N チャネルエンハンスメント MOSFET を使用） </td>
<td> はい（N チャネルエンハンスメント MOSFET を使用） </td>
<td> はい（N チャネルエンハンスメント MOSFET を使用） </td>
<td> はい（N チャネルエンハンスメント MOSFET を使用） </td>
<td> はい（N チャネルエンハンスメント MOSFET を使用） </td>
<td> </td>
</tr>
<tr>
<td> <strong>電源</strong> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td> DC 電源から </td>
<td> はい（5-12V DC） </td>
<td> はい（ソーラセルコネクタに接続、ただし 5.0V のみ適用） </td>
<td> はい（ソーラセルコネクタに接続、ただし 5.0V のみ適用） </td>
<td> はい（ソーラセルコネクタに接続、ただし 5.0V のみ適用） </td>
<td> はい（ソーラセルコネクタに接続、ただし 5.0V のみ適用） </td>
<td> はい（ソーラセルコネクタに接続、ただし 5.0V のみ適用） </td>
<td> </td>
</tr>
<tr>
<td> USB から </td>
<td> はい（UartSBee V3.1 使用時） </td>
<td> はい（UartSBee V3.1 使用時） </td>
<td> はい（UartSBee V4.0 または FTDI ケーブル使用時） </td>
<td> はい（UartSBee V4.0 または FTDI ケーブル使用時） </td>
<td> はい（UartSBee V4.0 または FTDI ケーブル使用時） </td>
<td> はい（UartSBee V4.0 または FTDI ケーブル使用時） </td>
<td> </td>
</tr>
<tr>
<td> ソーラーパネルから </td>
<td> いいえ </td>
<td> はい（別コネクタあり） </td>
<td> はい（別コネクタあり） </td>
<td> はい（別コネクタあり） </td>
<td> はい（別コネクタあり） </td>
<td> はい（別コネクタあり） </td>
<td> </td>
</tr>
<tr>
<td> リチウムポリマーバッテリーから </td>
<td> いいえ </td>
<td> はい（別コネクタあり） </td>
<td> はい（別コネクタあり） </td>
<td> はい（別コネクタあり） </td>
<td> はい（別コネクタあり） </td>
<td> はい（別コネクタあり） </td>
<td> </td>
</tr>
<tr>
<td> バッテリー電圧測定 </td>
<td> いいえ </td>
<td> はい（ADC7 に接続するためのジャンパー） </td>
<td> はい（ADC7 に接続するためのジャンパー） </td>
<td> はい（ADC7 に接続するためのジャンパー） </td>
<td> はい（ADC7 に接続するためのジャンパー） </td>
<td> はい（バッテリー電圧が ADC7 に接続） </td>
<td> </td>
</tr>
<tr>
<td> バッテリー充電？ </td>
<td> いいえ </td>
<td> はい（ソーラセル経由、CN3063 チップで管理） </td>
<td> はい（ソーラセル経由、CN3063 チップで管理） </td>
<td> はい（ソーラセル経由、CN3063 チップで管理） </td>
<td> はい（ソーラセル経由、CN3063 チップで管理） </td>
<td> はい（ソーラセル経由、CN3065 チップで管理） </td>
<td> </td>
</tr>
<tr>
<td> バッテリー充電ステータスの読み取り？ </td>
<td> いいえ </td>
<td> はい（デジタルピン 6&amp;7） </td>
<td> はい（デジタルピン 6&amp;7） </td>
<td> はい（ADC6） </td>
<td> はい（ADC6） </td>
<td> はい（ADC6） </td>
<td> </td>
</tr>
</table>

## 技術サポートと製品ディスカッション

<br />
私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>