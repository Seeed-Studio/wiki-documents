---
description: Xadow IO ピンマッピング
title: Xadow IO ピンマッピング
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_IO_pin_mapping
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Xadow IO ピンマッピング
category: チュートリアル
bzurl:
oldwikiname:  Xadow IO ピンマッピング
prodimagename:
surveyurl: https://www.research.net/r/Xadow_IO_pin_mapping
sku:
--- -->

すべてのピン情報を網羅した単一のリファレンスページ：

* Arduino コードで各ピンを使用する方法

* Xadow FFC と Atmega32u4 のピンマッピング

* 割り込みやタイマーを持つピン

* 2つのシリアルポート、IIC、ISP
* ハック可能な追加のオンボード IO

これらの表はデータの異なる視点を提供し、どのモジュールを使用するか、どの IO ピンを直接使用するかを計画する際に特に役立ちます！

## Xadow FFC IO バスと対応する Arduino および Atmega 情報、例の Arduino コード

<table>
<tr>
<td colspan="4"> <strong>Xadow FFC ピン</strong></td>
<td colspan="2"> <strong>Arduino</strong></td>
<td colspan="2"> <strong>Atmega32u4 ピン</strong></td>
<td></td>
</tr>
<tr>
<td> <strong>名前</strong></td>
<td> <strong>IO 機能</strong></td>
<td> <strong>代替用途</strong></td>
<td> <strong>#</strong></td>
<td> <strong>IO ピン</strong></td>
<td> <strong>コード例</strong></td>
<td> <strong>名前 (<strong>割り込みは赤字</strong>)</strong></td>
<td> <strong>#</strong></td>
<td> <strong>備考</strong></td>
</tr>
<tr>
<td> P1</td>
<td> デジタルピン</td>
<td> ISP SCK</td>
<td> 1</td>
<td> <strong>15</strong></td>
<td> PinMode(15, OUTPUT); digitalWrite(15, HIGH);</td>
<td> PB1<strong>(PCINT1</strong>/SCLK)</td>
<td> 9</td>
<td> ISP SMD ヘッダーパッドは Xadow メインボードの背面にもあります</td>
</tr>
<tr>
<td> P2</td>
<td> デジタルピン</td>
<td> ISP MOSI</td>
<td> 2</td>
<td> <strong>16</strong></td>
<td> PinMode(16, OUTPUT); digitalWrite(16, HIGH);</td>
<td> PB2(PDI/<strong>PCINT2</strong>/MOSI)</td>
<td> 10</td>
<td></td>
</tr>
<tr>
<td> P3</td>
<td> デジタルピン</td>
<td> ISP MISO</td>
<td> 3</td>
<td> <strong>14</strong></td>
<td> PinMode(14, OUTPUT); digitalWrite(14, HIGH);</td>
<td> PB3(PDO/<strong>PCINT3</strong>/MISO)</td>
<td> 11</td>
<td></td>
</tr>
<tr>
<td> P4</td>
<td> アナログピン</td>
<td> デジタルピン！</td>
<td> 4</td>
<td> <strong>A5</strong></td>
<td> analogWrite(A5, 128); pinMode(A5, OUTPUT); digitalWrite(A5, HIGH);</td>
<td> PF0(ADC0)</td>
<td> 41</td>
<td> Arduino のアナログピンはデジタルピンとしても使用可能です！</td>
</tr>
<tr>
<td> P5</td>
<td> デジタルピン</td>
<td> IIC SCL</td>
<td> 9</td>
<td> <strong>3</strong></td>
<td> PinMode(3, OUTPUT); digitalWrite(3, HIGH);</td>
<td> PD0(OC0B/SCL/<strong>INT0</strong>)</td>
<td> 18</td>
<td></td>
</tr>
<tr>
<td> P6</td>
<td> デジタルピン</td>
<td> IIC SDA</td>
<td> 10</td>
<td> <strong>2</strong></td>
<td> PinMode(2, OUTPUT); digitalWrite(2, HIGH);</td>
<td> PD1 (SDA/<strong>INT1</strong>)</td>
<td> 19</td>
<td></td>
</tr>
<tr>
<td> P7</td>
<td> デジタルピン</td>
<td> シリアル Rxd</td>
<td> 11</td>
<td> <strong>0</strong></td>
<td> PinMode(0, OUTPUT); digitalWrite(0, HIGH);</td>
<td> PD2(RXD/<strong>INT2</strong>)</td>
<td> 20</td>
<td>Xadow BLE/GPS の例を参照して、これらのシリアルピンの使用情報を確認してください。コードのアップロードに使用するシリアルポートとは異なります–以下の赤/緑 LED を参照してください。</td>
</tr>
<tr>
<td> P8</td>
<td> デジタルピン</td>
<td> シリアル Txd</td>
<td> 12</td>
<td> <strong>1</strong></td>
<td> PinMode(1, OUTPUT); digitalWrite(1, HIGH);</td>
<td> PD3(TXD/<strong>INT3</strong>)</td>
<td> 21</td>
<td></td>
</tr></table>

## いくつかの追加 Xadow IO ピン - メインモジュールのみ、FFC バスには非対応

<table>
<tr>
<td colspan="4"> <strong>Xadow ピン</strong></td>
<td colspan="2"> <strong>Arduino</strong></td>
<td colspan="2"> <strong>Atmega32u4 ピン</strong></td>
<td></td>
</tr>
<tr>
<td> <strong>名前</strong></td>
<td> <strong>IO 機能</strong></td>
<td> <strong>代替使用</strong></td>
<td> <strong>#</strong></td>
<td> <strong>IO ピン</strong></td>
<td> <strong>コード例</strong></td>
<td> <strong>名前 (<strong>割り込みは赤字</strong>)</strong></td>
<td> <strong>#</strong></td>
<td> <strong>備考</strong></td>
</tr>
<tr>
<td> 赤色 LED</td>
<td> Rx</td>
<td></td>
<td> -</td>
<td> <strong>17</strong></td>
<td> PinMode(17, OUTPUT); digitalWrite(17, HIGH);</td>
<td> PB0(SS/<strong>PCINT0</strong>)</td>
<td> 8</td>
<td> シリアルポートでコードをアップロード</td>
</tr>
<tr>
<td> 緑色 LED</td>
<td> Tx</td>
<td></td>
<td> -</td>
<td> <strong>11</strong></td>
<td> PinMode(11, OUTPUT); digitalWrite(11, HIGH);</td>
<td> PB7(<strong>PCINT7</strong>/OC0A/OC1C/!RTS)</td>
<td> 12</td>
<td></td>
</tr>
<tr>
<td> Wake</td>
<td></td>
<td></td>
<td> -</td>
<td> <strong>10</strong></td>
<td> まだ接続して検証していません！</td>
<td> PB^/A10/D10</td>
<td> 30</td>
<td> オンボードスイッチ – アクセスするには高度なハンダ付けスキルが必要です！</td>
</tr>
</table>

注意: リセットスイッチは Atmega32u4 のリセットピン 13 にダイオードを介して接続されています。そのため、リセットスイッチでは 32u4 IO ピンにアクセスできません！

## Xadow モジュールと各モジュールの IO バスピン使用の大きな表

なぜこんなに大きく複雑な表が必要なのか？それはすべての IO 情報を一箇所にまとめるだけでなく、複数の Xadow モジュールを選択した後にどの IO ピンがまだ利用可能かを確認できるからです！また、回路図では他の wiki ドキュメントとは異なる FFC ピン番号が使用されています！

注意事項:

1. IIC デバイスはデイジーチェーン接続されます。つまり、複数の IIC デバイスを同じピンに並列接続することができます！

2. もっと IO ピンが必要ですか？振動モーターとブザーが1つのピンを共有しているように、1つのピンを複数の用途に使用できる場合があります。また、状況によっては異なるタイミングで同じピンを異なる目的に使用することも可能です。例えば、超音波センサーをトリガーするためにピンを出力として設定し、その後信号を受信するために入力に変更することができます！

3. ほとんどの IIC モジュール（メインボードモジュール、LED、RTC を除く）は IIC ブレークアウトピンも備えています。

そのため、IIC SCL &amp; IIC SDA 列の紫色の項目はブレークアウトピンを持っていません！

4. 表の中央に黄色で強調表示された追加の詳細は、各 Xadow モジュールの**追加**ブレークアウトピンを文書化しています！

5. ? = 不明、またはまだ検証されていません！

<table>
<tr><td></td><td></td><td><strong>SCK</strong></td><td><strong>MOSI</strong></td><td><strong>MISO</strong></td><td><strong>A5</strong></td><td><strong>3</strong></td><td><strong>2</strong></td><td><strong>1</strong></td><td><strong>0</strong></td><td><strong>Arduino ピン名</strong></td></tr>
<tr><td></td><td><strong>割り込みは赤字--------&gt;</strong></td><td>PB1(PCINT1/SCLK)</td><td>PB2(PDI/<strong>PCINT2</strong>/MOSI)</td><td>PB3(PDO/<strong>PCINT3</strong>/MISO)</td><td>PF0(ADC0)</td><td>PD0(OC0B/SCL/INT0)</td><td>PD1(SDA/<strong>INT1</strong>)</td><td>PD2(RXD/<strong>INT2</strong>)</td><td>PD3(TXD/<strong>INT3</strong>)</td><td><strong>Atmega32u4 ピン名</strong></td></tr>
<tr><td><strong>IIC = I2C</strong></td><td></td><td>9</td><td>10</td><td>11</td><td>41</td><td>18</td><td>19</td><td>20</td><td>21</td><td><strong>Atmega32u4 ピン#</strong></td></tr>
<tr><td></td><td></td><td>P1, 1</td><td>P2, 2</td><td>P3, 3</td><td>P4, 4</td><td>P5, 9</td><td>P6, 10</td><td>P7, 11</td><td>P8,12</td><td><strong>FFC ピン名, #</strong></td></tr>
<tr><td><strong>Xadow モジュール</strong></td><td><strong>モジュール制御モード &amp; アドレス</strong></td><td><center>デジタルピン</center></td><td><center>デジタルピン</center></td><td><center>デジタルピン</center></td><td><center><strong>アナログまたは</strong>デジタルピン</center></td><td><center><strong>IIC SCL</strong></center></td><td><center><strong>IIC SDA</strong></center></td><td><center><strong>シリアル Rxd</strong></center></td><td><center><strong>シリアル Txd</strong></center></td><td><strong>Xadow ピン機能</strong></td></tr>
<tr><td><center>3軸加速度センサー</center></td><td><center>IIC 0x53</center></td><td>SCK</td><td>MOSI</td><td>MISO</td><td><center>A5</center></td><td><center>SCL</center></td><td><center>SDA</center></td><td>Rxd</td><td>TxD</td><td></td></tr>
<tr><td><center>気圧計</center></td><td><center>IIC 0x77</center></td><td>SCK</td><td>MOSI</td><td>MISO</td><td><center>A5</center></td><td><center>SCL</center></td><td><center>SDA</center></td><td>Rxd</td><td>TxD</td><td></td></tr>
<tr><td><center>BLE スレーブ</center></td><td><center>シリアル</center></td><td></td><td></td><td></td><td></td><td></td><td></td><td colspan="2"><center>RX/TX</center></td><td>BLE 特有のパッドが背面にあります</td></tr>
<tr><td><center>ブレークアウト</center></td><td><center>なし！</center></td><td>SCK</td><td>MOSI</td><td>MISO</td><td><center>A5</center></td><td><center>SCL</center></td><td><center>SDA</center></td><td>Rxd</td><td>TxD</td><td>+ Grove I2C &amp; シリアルソケット</td></tr>
<tr><td><center>LED コントローラー</center></td><td><center>IIC 0x04</center></td><td></td><td></td><td></td><td></td><td><center>SCL</center></td><td><center>SDA</center></td><td></td><td></td><td></td></tr>
<tr><td><center>OLED</center></td><td><center>IIC 0x3C</center></td><td></td><td></td><td></td><td></td><td><center>SCL</center></td><td><center>SDA</center></td><td></td><td></td><td></td></tr>
<tr><td><center>振動モーター</center></td><td><center>デジタル信号</center></td><td></td><td><center>H</center></td><td></td><td><center>H</center></td><td></td><td></td><td></td><td></td><td><em><strong>ISP を使用する前にモジュールを切断してください</strong></em></td></tr>
<tr><td><center>RTC</center></td><td><center>IIC 0x68</center></td><td></td><td></td><td></td><td></td><td><center>SCL</center></td><td><center>SDA</center></td><td></td><td></td><td>背面パッド接続 INTB – Int0???</td></tr>
<tr><td><center>ブザー</center></td><td><center>デジタル信号</center></td><td><center>H</center></td><td><center>?</center></td><td><center>?</center></td><td><center>H</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><em><strong>ISP を使用する前にモジュールを切断してください</strong></em></td></tr>
<tr><td><center>デジタルコンパス</center></td><td><center>IIC 0x1E</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td></td></tr>
<tr><td><center>モーター</center></td><td><center>TBD</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td></td></tr>
<tr><td><center>GPS</center></td><td><center>シリアル</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td colspan="2"><center>RX/TX</center></td><td></td></tr>
<tr><td><center>ストレージ</center></td><td><center>IIC 0x50 &amp; 0x51</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td><center>?</center></td><td></td></tr>
<tr><td><center><strong>メインボード</strong></center></td><td><center>?IIC マスター =0x00?</center></td><td>ISP – SCK</td><td>ISP MOSI</td><td>ISP MISO</td><td></td><td><center>SCL</center></td><td><center>SDA</center></td><td></td><td></td><td>すべて背面の SMD パッド経由。</td></tr>
</table>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるご要望やお好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>