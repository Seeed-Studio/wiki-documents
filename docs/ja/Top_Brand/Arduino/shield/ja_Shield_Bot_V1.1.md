---
description: Shield Bot V1.1
title: Shield Bot V1.1
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Shield_Bot_V1.1
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Shield Bot V1.1
category: Arduino
bzurl: https://www.seeedstudio.com/Shield-Bot-p-1380.html
oldwikiname: Shield Bot V1.1
prodimagename: 4WD_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG
surveyurl: https://www.research.net/r/Shield_Bot_V1-1
sku: 110060010
--- -->
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/shield%20bot.jpg)

前バージョンと比較して、Shield Bot V1.1はPCのUSBポートを使用してバッテリーを充電することができます。また、回路を最適化したことで充電効率が大幅に向上しました。さらに、Arduino/SeeeduinoのVinピンを使用して高速充電が可能です。

注意: 互換性のあるArduinoボードは含まれていません。[Seeeduino](/ja/Seeeduino "Seeeduino")を試してください。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Shield-Bot-p-1380.html)

## 特徴

---

* **簡単に始められる** - Shieldbotはプラグアンドプレイで、数分で動作可能です。

* **想像力を広げる拡張性** - はんだ付け不要のGrove拡張ポートにより、センサーやアクチュエータを簡単に追加でき、シールドヘッダーを使用して追加のArduinoシールドを利用可能です。

* **オープンソース** - 改造、適応、変形が可能で、自由にカスタマイズできます。

* **Arduinoベース** - ShieldbotはArduinoシールドであり、広範なArduinoコミュニティとシールドエコシステムを活用して無限の拡張が可能です。

* **充電効率** - 高速で完全充電が可能で、効率が高いです。

:::note
新バージョンでは出力高電圧が約4.0V以上から約4.5V以上に変更されました。
:::

## 仕様

---

<table>
<tr>
<th>項目</th>
<th>パラメータ</th>
</tr>
<tr>
<td width="200">センサー</td>
<td width="300">ラインおよびエッジ追従用の5つのIR反射センサー</td>
</tr>
<tr>
<td>リチウムイオン充電式バッテリー</td>
<td>900 mAh</td>
</tr>
<tr>
<td>ギアモーター</td>
<td>耐久性のある160:1マイクロメタルギアモーター2個</td>
</tr>
<tr>
<td>Groveポート</td>
<td>6つのGrove拡張ポート</td>
</tr>
<tr>
<td>シールドヘッダー</td>
<td>Arduinoシールド拡張ヘッダー</td>
</tr>
</table>

## 充電仕様

---

<font color="red">充電モードと充電効率は以下の表の通りです:</font>

<table>
<tr>
<th>モード</th>
<th>充電電流(A)</th>
<th>入力電力(W)</th>
<th>充電電力(W)</th>
<th>充電効率(%)</th>
<th>充電時間(h)</th>
</tr>
<tr>
<td width="200">USB充電</td>
<td width="200">0.396</td>
<td width="200">3.94</td>
<td width="200">3.56</td>
<td width="200">90.36</td>
<td width="200">2.50</td>
</tr>
<tr>
<td>Vin充電</td>
<td>0.7</td>
<td>6.78</td>
<td>6.30</td>
<td>92.92</td>
<td>1.41</td>
</tr>
</table>

## インターフェース機能

---

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_Bot_V1.2_Foto_1.JPG)

* **電源スイッチ**: ShieldBotがオフの場合、Shield Botは動作しません。ただし、**USB充電ポート**を使用してバッテリーを充電することは可能です。

* **USB充電ポート**: USB mini-B、バッテリー充電用。

* **Groveポート**: GroveポートはピンD0、D1、D2、D3、D4、D5、A4、A5にアクセス可能で、これらのGroveポートにGroveモジュールを接続できます。

* **IRラインファインダーポテンショメータ**: ラインファインダーの感度を調整するために使用します。時計回りに調整すると感度が上がり、反時計回りに調整すると感度が下がります。

* **IRラインファインダー**: S1からS5。反射しない表面（例: 黒いテープライン）が検出されると青色になります。

* **イネーブルスイッチ**: スイッチを「ON」にすると、ラインファインダーがArduinoのI/Oピン（占有ピンはA0、A1、A2、A3、D4）に接続されます。ライブラリ内のLineFollowingSimpleデモは、ラインファインダーの出力信号を使用してShield Botを制御します。スイッチが「OFF」の場合、Seeeduino/Arduinoはラインファインダーの出力信号を通じてShield Botを制御できません。

* **Arduinoシールド拡張ヘッダー**: Shield Botは他のシールドを積み重ねることができます。

:::note

* 1) S5が有効化されている場合、Groveポートj14とj13を使用することはできません。
* 2) Arduinoのシリアルライン、UART Groveポート、またはj11のいずれか1つのみ使用可能です。これらはすべてD1/TXラインを共有しています。
:::


## ステータスライト

---
Shield Botには、現在の状態を示す多くのLEDがあります！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_bot_1.2_LEDs.JPG)

<table>
<tr>
<th> ライト番号 </th>
<th> 機能 </th>
<th> ステータス </th>
</tr>
<tr>
<td width="200"> D22 </td>
<td> 電源 </td>
<td> ShieldBotがオンの場合は緑色。ShieldBotがオフの場合、バッテリーの充電のみ可能です。</td>
</tr>
<tr>
<td> D23 および D24 </td>
<td> 充電ステータス </td>
<td> 赤は充電中、緑は充電完了を示します。</td>
</tr>
<tr>
<td> D18 </td>
<td> リセット </td>
<td> リセットボタンが押されると赤色になります。</td>
</tr>
<tr>
<td> D11 および D12 </td>
<td> 右モーターインジケーター </td>
<td> 緑は前進、赤は後退、両方点灯は停止を示します。</td>
</tr>
<tr>
<td> D13 および D15 </td>
<td> 左モーターインジケーター </td>
<td> 緑は前進、赤は後退、両方点灯は停止を示します。</td>
</tr>
<tr>
<td> D5 D10 D14 D17 D19 </td>
<td> ライトセンサーインジケーター </td>
<td> 非反射面（例：黒いテープライン）が検出されると青色になります。</td>
</tr>
</table>

## 構造

---
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Position_for_seeeduino.jpg)

パーツ1、パーツ2、パーツ3は3Dプリンターで作成されています。2つのハブは同じものです。以下のようにプリント図を参照してください。とても魔法のようです！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Print_diagram_1.JPG) ![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/P1018898.JPG)

## はじめに

---
Shield Botのセットアップは簡単で迅速です！以下の手順に従って、ロボットの仲間を稼働させましょう。

### 準備作業

* まず、ArduinoをShield Botの底部に差し込み、USBケーブルを使用してPCに接続します。

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/ShieldBot_Programming2.JPG)

* コードをアップロードする前に、Enableスイッチを_OFF_にすることをお勧めします。そうしないと、注意していない間に動作して驚かされるかもしれません。

Shield Botを制御するための便利な機能を備えたライブラリと、すぐに動作させるためのいくつかの例を用意しました！

* [こちら](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Library.zip)からライブラリをダウンロードして解凍してください。ライブラリを使用する前にNote.txtファイルを開いてください。
* ShieldBotファイルをArduino IDEのライブラリフォルダに配置します。パスは次の通りです：..\arduino-1.0.1\libraries。

### バッテリーの取り付け

Shield Botを地面で動作させるにはバッテリーが必要です。
:::note

* 1) バッテリーを取り付けたら、mini-b USBケーブルでバッテリーを充電できます。充電中は赤色のLEDが点灯し、充電が完了すると緑色のLEDが点灯します。
* 2) コードをアップロードする際は、SeeeduinoのUSBポートをPCに接続する必要があります。Shield BotのUSBポートはバッテリーの充電専用です。
:::

:::note
Shield Bot v1.1用にドライバーピンを変更したため、Shieldbotライブラリファイルを使用する前に.cppファイルを変更してShield Botのバージョンに合わせる必要があります。変更手順はNote.txtに記載されています。
:::

### デモ1：モーターを動かす

* Arduino環境を開き、File-&gt;Examples-&gt;Shieldbot-&gt;driveに移動して最初のShield Botの例をロードします。正しいArduinoボードとシリアルポートを選択してください。
* 次に、コードをArduinoにアップロードします。アップロードが完了すると、コンソールに「Done Uploading」と表示されます。
* アップロードが完了したら、USBケーブルを取り外します。
* その後、Shield Botを広い場所に置き、電源スイッチを「**ON**」にします。
* これで、Shield Botは一定の速度で動作します。

### デモ2：黒いラインに沿って走行

Shield Botは、ラインファインダーセンサー（s1, s2, s3, s4, s5）を使用して反射面を検出できます。非反射面（例：黒いテープライン）が検出されると、青色のインジケーターが点灯します。これを使用して、黒いラインに沿って走行させてみましょう。<br />
**<font color="red">注意：ディップスイッチがONになっていることを確認し、A0, A1, A2, A3またはD4ピンを使用しているシールドがないことを確認してください。</font>**

* USBケーブルを使用してSeeeduinoをPCに接続した後、新しいデモ「LineFollowingSimple」を再アップロードします。

* アップロードが完了したら、Shield Botを事前に準備された黒い滑走路に置きます。その後、以下のような画面が表示されます：

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_Bot_Line_Finder.jpg)

* IRラインファインダーポテンショメーターを調整して、ラインファインダーの感度を変更できます。時計回りに調整すると感度が上がり、反時計回りに調整すると感度が下がります。試してみてください！

### 応用例

**1. 時計**

これは非常にシンプルで動作する時計です。車輪が一方は前進し、もう一方は後退して反射センサーを回転させ、分を示します。1時間ごとにボットが前進し、リニアスライドを進めて時間を示します。レーザーカットのスクラップとセロハンテープで作られた無料のリニアレールは特に素晴らしいです！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team1_2.jpg)

**2. Shot.Bot**

これは非常に美しいデバイスで、イベントで多くの人々が購入したいと述べていました。ライン追従ロボットは注文を受け、トラックを走行してディスペンサーに到達し、サーボを使用して3種類の飲料のいずれかを注ぎ、再び顧客の元に戻ります。

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team7_2.jpg)

**3. Simon**

これは美しく設計された、まだ完成していない2人用の対戦型サイモンクローンです。ボットはライトとともにメロディーを再生し、レーザーカットされたパック（視覚障害者でも遊べるように点字付き）を使用してホワイトボード上で音をマークします。その後、Shield Botが前進し、センサーを使用して正しくマークされているかを確認します。相手より多く正解を得ることで、ボットが相手のゴールに向かって進みます！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team6_2.jpg)

**4. HackPHX-Plotter**

デバイスは、Der Kritzler 2D描画マシンをほぼ打ち負かすほどの性能を持っています。このマシンは、Makerslideを使用した垂直のX,Yテーブルであり、Shield Botのタイヤを固定して、逆回転させることでペンを描画面から持ち上げるという独創的なアイデアを採用しています :) さらに、設計者と協力してPC側のユーザーインターフェースを開発しました！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team8.jpg)

## 参考

---
Shield Botライブラリを使用するには、Shield Botライブラリを追加し、Arduinoコードの`void setup()`の前にShieldbotオブジェクトを宣言してください。

```
#include <Shieldbot.h> // Shield Botライブラリをインクルード
Shieldbot shieldbot = Shieldbot(); // Shieldbotオブジェクトを宣言
```

**<u>setMaxSpeed(int both)</u>**

_説明_: 2つのモーターの最大速度を設定します。

_both_: 0（ほぼ停止）から255（全速力）の間

**<u>setMaxSpeed(int left, int right)</u>**

_説明_: 左右のモーターに最大速度を設定します。

_left, right_: 左は左モーターの速度、右は右モーターの速度。0（ほぼ停止）から255（全速力）の間

**<u>rightMotor(char mag)</u>**

_説明_: 右モーターを有効にします。負の値で後退、正の値で前進します。片方のモーターを遅くするとその方向に曲がります。モーターを逆方向に回転させるとスピンします。

_mag_: 右モーターの回転方向; -128: 完全後退, 0: 動かない, 127: 完全前進

**<u>leftMotor(char mag)</u>**

_説明_: 左モーターを有効にします。負の値で後退、正の値で前進します。

_mag_: 左モーターの回転方向; -128: 完全後退, 0: 動かない, 127: 完全前進

**<u>forward()</u>**

_説明_: モーターを有効にして、設定された速度でボットを直進させます。

**<u>backward()</u>**

_説明_: モーターを有効にして、設定された速度でボットを後退させます。

**<u>drive(char left, char right)</u>**

_説明_: 汎用的なドライブコール。leftMotorとrightMotorを直接呼び出します。

_left_: -128（左モーター後退、最大速度）、0（停止）、127（左モーター前進、最大速度）の間

_right_: -128（右モーター後退、最大速度）、0（停止）、127（右モーター前進、最大速度）の間

**<u>stop()</u>**

_説明_: モーターを無効にします。drive(0,0)も使用可能です。

**<u>stopLeft()</u>**

_説明_: 左モーターを無効にします。drive(0,X)も使用可能です。

**<u>stopRight()</u>**

_説明_: 右モーターを無効にします。drive(X,0)も使用可能です。

**<u>fastStop()</u>**

_説明_: 右モーターを無効にします。drive(X,0)も使用可能です。

**<u>fastStopLeft()</u>**

_説明_: 左モーターをより速く無効にします。これはモーターチップに悪影響を及ぼす可能性があるため、慎重に使用してください。

**<u>fastStopRight()</u>**

_説明_: 右モーターをより速く無効にします。これはモーターチップに悪影響を及ぼす可能性があるため、慎重に使用してください。

**<u>readS1(), readS2(), readS3(), readS4(), readS5()</u>**

_説明_: ボード上の5つの光センサーのいずれかを読み取ります。注意：センサーをArduinoポートに接続するには、ディップスイッチブロックを使用する必要があります（スイッチを番号と「ON」テキストの方向に向ける）。これらのスイッチは、光センサーを使用しない場合に他の用途でピンを使用できるようにします。

_戻り値_: 表面が反射する場合（例：白）はLOW、表面が何も反射しない場合（例：黒）はHIGH

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/ShieldBot_driveLibrary.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Shield Bot ライブラリ](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Library.zip)

* [Shield Bot Eagle ファイル](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Eagle_Files.zip)

* [ShieldBot 回路図](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/ShieldBotv0.9b_Schematic.pdf)

* [RPR-220 データシート](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/RPR-220.pdf) 赤外線反射センサー

* [ISL97516 データシート](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/ISL97516.pdf) 昇圧レギュレーター

* [BQ2057 データシート](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/BQ2057.pdf) リチウムイオン充電器

* [L298 データシート](https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/L298.pdf) Hブリッジモータードライバー

* [358 データシート](http://www.ti.com/product/lmv358) 反射センサー用コンパレータとしてのオペアンプ

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なるニーズや好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>