---
description: Atom Node
title: Atom Node
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Atom_Node
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg)

庭の土壌湿度を監視するアラームシステムを自作したいと思ったことはありませんか？早朝、ベッドで快適に横になっている間に、犬小屋を自動で開けて愛犬が暖かい日差しを楽しめるようにするデバイスが必要かもしれません。しかし、複雑なソフトウェアやハードウェアが障害となることがあります。そこで登場するのが Atom です。Atom は、これらの素晴らしい自作プロジェクトを実現するために、困難な道を切り開いてくれます。

Atom は、モノのインターネット（IoT）のノードです。単独で動作するだけでなく、他のデバイスと連携することもできます。Atom は拡張性が高く、使いやすい設計になっています。標準的な Grove インターフェースにより、さまざまなセンサーとの接続が可能です。Atom は、収集した豊富なデータをワイヤレスでアクチュエータに送信し、タスクをインテリジェントに実行します。さらに魅力的なのは、Android スマートフォンを使って簡単にすべてのタスクを設定できる点です。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg)

Atom は、ワイヤレスデータ伝送とモバイル監視を特徴としています。標準的な Bee インターフェースを備えており、XBee、RFBee、Bluetooth Bee に接続してワイヤレス通信ネットワークを形成し、データを自動的に収集・管理します。また、Atom はさまざまなセンサーのデータをクラウドにアップロードすることができ、Web ブラウザを通じていつでもどこでもデータを簡単に分析することが可能です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html)


## 特徴
---
*   モバイルデバイス/アプリ中心の設定
*   オープンソース
*   アドホックからメッシュまで柔軟なワイヤレスネットワークトポロジー
*   内蔵バッテリー
*   多様なインジケーターで動作状態を簡単に識別
*   Skin-Skeleton-Gut（スキン-スケルトン-ガット）哲学

## 仕様
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col">項目</th>
<th scope="col">典型値</th>
<th scope="col">単位</th>
</tr>
<tr>
<th scope="row">USB供給電圧</th>
<td>4.75-5.25</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">待機電流（RF Bee接続時）</th>
<td>25~40</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">GPIO電圧</th>
<td>3.3</td>
<td>V</td>
</tr>
<tr>
<th scope="row">バッテリー容量</th>
<td>300</td>
<td>mAH</td>
</tr>
<tr>
<th scope="row">充電電流</th>
<td>300-500</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">USBインターフェース</th>
<td>MICRO USB</td>
<td>/</td>
</tr>
<tr>
<th scope="row">動作周波数</th>
<td>16</td>
<td>MHz</td>
</tr>
<tr>
<th scope="row">Grove供給電圧</th>
<td>3.3</td>
<td>V</td>
</tr>
<tr>
<th scope="row">出力電流（最大）</th>
<td>500</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">連続動作時間（最大）</th>
<td>22</td>
<td>h</td>
</tr>
<tr>
<th scope="row">光センサー応答周波数</th>
<td>100</td>
<td>Hz</td>
</tr>
<tr>
<th scope="row">低バッテリー表示</th>
<td>3.71</td>
<td>V</td>
</tr>
<tr>
<th scope="row">光センサー応答周波数</th>
<td>100</td>
<td>Hz</td>
</tr>
<tr>
<th scope="row">RF BEE（seeed）通信距離（最大）屋外</th>
<td>200</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Xbee（Xbee）通信距離（最大）屋外</th>
<td>30</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Bluetooth Bee（seeed）通信距離（最大）屋外</th>
<td>20</td>
<td>m</td>
</tr>
<tr>
<th scope="row">Groveコネクタ</th>
<td>3（IIC;UART;PWM）</td>
<td>/</td>
</tr>
<tr>
<th scope="row">20ピンBeeソケット</th>
<td>Rfbee、Xbee、Bluetooth Bee互換</td>
<td>/</td>
</tr>
<tr>
<th scope="row">二色充電インジケーター</th>
<td>緑/赤</td>
<td>/</td>
</tr>
<tr>
<th scope="row">二色ユーザーインジケーター</th>
<td>緑/赤</td>
<td>/</td>
</tr>
<tr>
<th scope="row">ブザー周波数</th>
<td>2.7±0.3</td>
<td>K</td>
</tr></table>

## トポロジー

Atom Nodeは、単独で使用するためのセンサー/アクチュエータコネクタを備えています。また、XBeeやその他のオープンなRF通信モジュールを使用することで、複数のノードを用いた多様なネットワークトポロジーでの通信にも対応しています。例えば以下のようなモードがあります：

**1. 第1モード:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg)

このモードでは、センサーとアクチュエータが1つのAtom Nodeに接続されています。Atom Nodeはセンサーデータを読み取り、アクチュエータを駆動して関連するアクションを実行するかどうかを判断します。使用例のデモ1はこのモードで動作します。

**2. 第2モード:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg)

このモードでは、センサーとアクチュエータが2つのAtom Nodeに接続されています。Atom Nodeは、別のAtom NodeからRFBeeを介して送信されたセンサーデータを受信し、自身のアクチュエータを駆動して関連するアクションを実行するかどうかを判断します。使用例のデモ2はこのモードで動作します。

**3. 第3モード:**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg)

このモードでは、センサーが1つのAtom Node（ここではAtomSensorと呼びます）に接続されています。他のAtom Nodeは、AtomSensorからRFBeeを介して送信されたセンサーデータを受信し、自身のアクチュエータを駆動して関連するアクションを実行するかどうかを判断します。

## 構造

Nodeソリューションは、SSG（Skin Skeleton Gut）哲学に基づいて設計されています。
- **Gut:** 内部の電子部品
- **Skeleton:** 最小限のアルミフレームワークで、保護と固定を提供し、さまざまなセンサー/アクチュエータに対応するための十分な開口部を確保

**製品サイズ:** 82mm × 63.5mm × 17mm  
**素材:** アルミニウム 5052  
**仕上げ:** ブラック/シルバー アノダイズ加工  
**ハイライト機能:** ヒンジ構造  
**部品の清潔さ:** すべてのバリや鋭い角を除去。油分、汚れ、その他の汚染物質をすべて清掃。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg)

これらのプロトタイプに期待しましょう...

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg)![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg)

## ハードウェア
---
このシステムは、Atmel 32U4をメインチップとして採用しています。また、無線通信用の標準Beeインターフェースソケットを装備しています。3.3Vの電源を採用しており、外部電源インターフェースはMicro USBです。外部電源に接続すると、DC‐DC電圧調整回路（TD6810チップをベース）を通じて3.3Vに変換され、システム全体に電力を供給します。同時に、5V電源はCN3065充電管理ICを介してリチウムバッテリーを充電します。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg)

**U1:** Atmel 32U4 IC、8ビットAVRマイクロコントローラ  
**U3:** TD6810-ADJ IC、1.5MHz 800mA同期降圧レギュレータ  
**U4:** CN3065 IC、充電管理チップ  

**Micro USB:** リチウムバッテリーの充電およびプログラミング用  
**充電インジケータ:** 充電中は赤色、充電完了時は緑色に点灯。外部電源に接続されていない場合やバッテリーが正常な状態の場合は点灯しません。低バッテリー状態（外部電源未接続時）では赤色に点灯します。  
**ユーザーインジケータ:** 緑色の点滅はデータ送信を示し、赤色の点滅は初期化を示します。赤色の点灯は設定モードを示します。  
**光センサー:** Androidデバイスが送信するエンコードされたパラメータを受信します。  
**ADCコネクタ:** センサーを接続可能（IICコネクタではありません）。  
**PWMコネクタ:** アクチュエータを接続可能（IICコネクタではありません）。  
**IICコネクタ:** センサーまたはアクチュエータを接続可能（IICコネクタ）。  

**<font color="red">注意:</font>** 1つのAtom Nodeに同時に2つ以上のセンサー（またはアクチュエータ）を接続することはできません。

**主な特徴**

- Arduino互換MCU  
- LiPoバッテリーと充電回路  
- パラメータ設定用LED/LDR  
- センサー/アクチュエータコネクタ  
- XBee互換ソケット  
- プログラミングおよび電源供給用Micro USBケーブル  
- 低消費電力設計  

**ブロック図**

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Beacon_ATOM_hardware.jpg)

**ハードウェア設計説明**

[https://www.seeedstudio.com/wiki/images/1/1b/Beacon_Atom_Hardware_Design_Analysis_.pdf](https://files.seeedstudio.com/wiki/Atom_Node/res/Beacon_Atom_Hardware_Design_Analysis_.pdf)

**Atom Nodeの概要**

では、Atom Nodeの外観を見てみましょう。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Hardware_View.jpg)

## ファームウェアとソフトウェア
---
### ファームウェア

Atom Nodeにアップロードされたファームウェアは、センサーやアクチュエータを駆動することができます。
Atom Nodeで利用可能なセンサー：

<table cellspacing="0" width="40%">
<tr>
<th scope="col">ID</th>
<th scope="col">名前</th>
<th scope="col">種類</th>
<th scope="col">制御モード</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Grove - ボタン</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Grove - チルトスイッチ</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Grove - ラインファインダー</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Grove - PIRモーションセンサー</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Grove - 赤外線反射センサー</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Grove - 磁気スイッチ</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Grove - タッチセンサー</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Grove - 赤外線距離インタラプター</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Grove - ホールセンサー</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Grove - 衝突センサー</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Grove - 湿度センサー</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Grove - 光センサー</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Grove - 回転角センサー</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">44</th>
<td>Grove - 温度センサー</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">45</th>
<td>Grove - 水センサー</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">46</th>
<td>Grove - 80cm赤外線近接センサー</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">47</th>
<td>Grove - 赤外線温度センサー</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">48</th>
<td>Grove - スライドポテンショメータ</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">59</th>
<td>Grove - 空気品質センサー1.0</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">50</th>
<td>Grove - 電気センサー</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">51</th>
<td>Grove - アルコールセンサー</td>
<td>センサー</td>
<td>アナログ</td>
</tr>
<tr>
<th scope="row">53</th>
<td>Grove - 音センサー</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">54</th>
<td>Grove - 超音波レンジャー</td>
<td>センサー</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">81</th>
<td>Grove - デジタル光センサー</td>
<td>センサー</td>
<td>IIC</td>
</tr>
<tr>
<th scope="row">82</th>
<td>Grove - 気圧センサー</td>
<td>センサー</td>
<td>IIC</td>
</tr>
<tr>
<th scope="row">102</th>
<td>Grove - 温度＆湿度センサーPro –T</td>
<td>センサー</td>
<td>ONE-Wire</td>
</tr>
<tr>
<th scope="row">103</th>
<td>Grove - 温度＆湿度センサーPro –H</td>
<td>センサー</td>
<td>ONE-Wire</td>
</tr>
<tr>
<th scope="row">110</th>
<td>Grove - 赤外線受信機</td>
<td>センサー</td>
<td>IR</td>
</tr></table>

現在、ほぼすべてのセンサーを駆動することができます。このことから、ファームウェアが非常に強力であることがわかります。
Atom Nodeで利用可能なアクチュエータ：

<table cellspacing="0" width="40%">
<tr>
<th scope="col">ID</th>
<th scope="col">名前</th>
<th scope="col">種類</th>
<th scope="col">制御モード</th>
</tr>
<tr>
<th scope="row">128</th>
<td>Grove - リレー</td>
<td>アクチュエータ</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">129</th>
<td>Grove - LED</td>
<td>アクチュエータ</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">135</th>
<td>Grove - マルチカラー点滅LED (5mm)</td>
<td>アクチュエータ</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">136</th>
<td>Grove - 可変カラーLED</td>
<td>アクチュエータ</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">137</th>
<td>Grove - ブザー</td>
<td>アクチュエータ</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">138</th>
<td>Grove - バイブレーター</td>
<td>アクチュエータ</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">201</th>
<td>Grove - OLEDディスプレイ128*64</td>
<td>アクチュエータ</td>
<td>IIC</td>
</tr>
<tr>
<th scope="row">202</th>
<td>Grove - OLED 96x96</td>
<td>アクチュエータ</td>
<td>IIC</td>
</tr>
<tr>
<th scope="row">223</th>
<td>Grove - LEDバー</td>
<td>アクチュエータ</td>
<td>IO</td>
</tr>
<tr>
<th scope="row">224</th>
<td>Grove - 赤外線エミッター</td>
<td>アクチュエータ</td>
<td>IR</td>
</tr></table>

### ソフトウェア

Atom Nodeモジュールを構成するためのアプリケーションプログラムがあります。このプログラムはAndroidデバイス上で動作します。構成プロセス中、Androidデバイスの画面領域が点滅し、光感知トランジスタを介してAtom Nodeにエンコードされたパラメータを送信します。構成インターフェースは以下の通りです：

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Configuration_Interface_.png)

## 使用方法
---
Atom Node は、複数の Grove センサーやアクチュエータをサポートし、物理データを収集したり特定のアクションを実行したりすることができる、オープンソースの IoT ハードウェアソリューションです。Atom Node を使用する前に設定が必要です。設定後、複数のモジュールが RFBee を介してデータを無線で収集および送信できます。

ここでは、温度センサーを例にとり、Atom Node の使用方法を説明します。次のような動作を実現してみましょう：温度が 28 ℃ を超えると、ブザーが鳴るようにします。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Effect_diagram.jpg)

**準備作業:**
デバイスを使用するには、少なくとも RFBee/Xbee（Atom Node を 1 台だけ使用する場合は不要）と Android デバイス（Atom Node には含まれていません）が必要です。Atom Node を動作させるにはこれらが必須です。また、RFBee/XBee のボーレートが 57,600 に設定されていることを確認してください。そうでない場合は、独自の方法で設定を変更するか、[ライブラリファイル: RFBee](https://files.seeedstudio.com/wiki/Atom_Node/res/RFBee.zip) のデモを RFBee にアップロードしてください。その後、[アプリケーションプログラムパッケージ: BeaconUI](https://files.seeedstudio.com/wiki/Atom_Node/res/BeaconUI.zip) をダウンロードして Android デバイスにインストールしてください。

### デモ 1: Atom Node を 1 台使用する

IFTTT モードで動作する Atom Node を使用して、以下の手順に従ってください:

<!-- *   Grove - Temperature を ADC ポートに接続し、Grove - Buzzer を PWM ポートに [Grove - Universal 4 Pin ケーブル](/ja/Grove_System/#grove-cables) を使用して接続します。 -->

*   RFBee を Bee ソケットに差し込みます。
*   Atom Node の片側にあるボタンを押して電源を入れます。反対側の LED が点灯します。その後、もう一度ボタンを押して Atom Node を設定モードにします。同時に、ユーザーインジケータが赤色に点灯します。

*   Atom Node アプリを開き、以下のインターフェースが表示されます:

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Interface1.jpg)

*   右上隅のプラス記号をクリックしてデバイスを追加すると、選択パネルがポップアップします。
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface2.jpg)

ここで、インターフェースについて簡単に説明します。

1) デバイス名: 任意の単語を入力できます。例: "Sensor-temperature" または好きな名前。

2) センサー: 使用するセンサーを選択します。

3) 残りの設定はアクチュエータ用です。アクチュエータが不要な場合は "NULL" を選択すると、残りのオプションは自動的に無視されます。

では、設定を行い、デバイス名を "temp" に設定しましょう。

*   以下の画像を参考にして、デバイス名に "temp" を入力します。"Sensor" で "Grove - Temperature" を選択し、"Actuator" で "Grove - Buzzer" を選択します。"Sensor Radio Frequency" で "Null" 以外のオプションを選択し、"if" 値を入力して "then" をオンにします:
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface9.png)

<font color="red">インディーモードでは、トリガーソースとしてデバイス自体を選択する必要があるため、"Trigger from" のドロップダウンボックスで "temp" を選択する必要があります。ただし、現在は "Null" オプションしかありません。この問題は無視してください。デバイス名がデバイスリストに表示された後、"Trigger from" にデバイス名が表示されたら再設定できます。</font>

*   Android デバイスの画面に配置します。このとき、光センサーが画面に向いていることを確認してください。画面の明るさは約 35% に設定するのが望ましいです。
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface3.jpg)

<!-- *   "Submit" をクリックすると、設定が開始されます。<font color="red">設定が成功すると、ユーザーインジケータが緑色に点灯して点滅します。</font>設定に失敗した場合は、"Again" をクリックしてください。それでも失敗する場合は、[FAQ](/ja/Atom_Node) を参照してください。 -->

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface4.jpg)

*   設定が完了すると、デバイスリストに表示されます。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface5.jpg)

<font color="red">先ほどトリガーソースを "Null" に設定したことを忘れないでください。再設定が必要です。</font>

*   温度センサーが 28 ℃ を超える値を読み取ると、ブザーが鳴ります。

### デモ 2: Atom Node を 2 台使用する

IFTTT モードで動作する 2 台の Atom Node を使用する場合、以下の手順に従ってください:

*   Atom Node の ADC ポートに Grove - Temperature を接続し、RFBee（ボーレート 57,600）を Bee ソケットに差し込みます。

*   別の Atom Node の PWM ポートに Grove - Buzzer を接続し、RFBee を Bee ソケットに差し込みます。

*   Atom Node アプリを開き、右上隅のプラス記号をクリックします。デバイス名を "temp" に設定し、以下のように "sensor" で Grove - Temperature を選択します:
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface6.jpg)

*   Atom Node の電源を入れ、ボタンを押して設定モードにします。その後、Android 画面に配置します。"Submit" をクリックすると、設定が開始されます。

*   1 台目の Atom Node の設定が完了すると、デバイスリストに表示されます。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface5.jpg)

*   次に、もう 1 台の Atom Node を設定し、同様に Grove - Buzzer を接続します。
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface7.jpg)

アクチュエータを設定する際、アクチュエータの名前を設定します。その後、アクチュエータのトリガーソースを "Trigger from" で選択します。ここでは、先ほど設定したデバイス "temp" をアクチュエータのトリガーとして使用したいので、"Trigger from" のドロップダウンボックスで "temp" を選択します。他にも "If" や "then" などのトリガー条件やアクションがあり、特定の条件と対応するアクションをリンクさせることができます。なお、"If" 値は使用するセンサーのデータ型に従う必要があります。

*   2 台の Node の設定が完了すると、動作を開始します。その後、ユーザー LED が緑色に点灯しているのが確認できます。
![](https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface8.jpg)

## 作業状態の説明
---
<table cellspacing="0">
<tr>
<th scope="col">**操作**</th>
<th scope="col">**状態**</th>
<th scope="col">**機能**</th>
</tr>
<tr>
<th>電源ボタンを押す</th>
<td>電源LEDが点灯（青色）</td>
<td>Atom Nodeを起動する</td>
</tr>
<tr>
<th>Atom Nodeを起動した後に電源ボタンを押す</th>
<td>電源LEDが点灯（青色）、ユーザーLEDが点灯（未ペアリングの場合は赤色、ペアリング成功後は緑色で点滅）</td>
<td>設定モードに入る</td>
</tr>
<tr>
<th>設定モード中に電源ボタンを押す</th>
<td>電源LEDが点灯（青色）、ユーザーLEDが消灯</td>
<td>設定モードを終了する</td>
</tr>
<tr>
<th>電源ボタンを長押しする</th>
<td>すべてのLEDが消灯し、ブザーが鳴る</td>
<td>Atom Nodeをシャットダウンする</td>
</tr>
<tr>
<th>電源ボタンをダブルクリックする</th>
<td>ユーザーインジケーターがオンまたはオフになる</td>
<td>ユーザーインジケーターをオン/オフする</td>
</tr>
<tr>
<th>電源ボタンを4回クリックする</th>
<td>すべてのインジケーターが状態を保持</td>
<td>データをクリアする</td>
</tr>
<tr>
<th>Atom NodeをUSBケーブルでPCに接続する</th>
<td>充電LEDが点灯（充電中は赤色、充電完了後は緑色）、電源LEDが点灯</td>
<td>バッテリーを充電する、またはファームウェアを更新する</td>
</tr></table>

## ファームウェアのアップグレード
---
### デバイスを接続し、ドライバーをインストールする

* [Atom Node Driver File](https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Driver.zip) をダウンロードして保存します。
* Micro-USBケーブルをAtom Nodeに接続し、もう一方のMicro-USBコネクタをコンピュータのUSBポートに接続します。
* 新しいハードウェアのプロンプトを待ちます。インストーラーが自動的に起動しない場合は、Windowsデバイスマネージャーに移動し、Seeeduino Liteのリストを見つけます。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/A_Unknow_Device.jpg)

* 右クリックして「ドライバーの更新」を選択します。自動インストールまたは特定の場所からインストールするかを尋ねられたら、「コンピュータ上のドライバーソフトウェアを参照」を選択します。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Update_Driver.jpg)

* 「これらの場所で最適なドライバーを検索する」を選択し、「検索にこの場所を含める」チェックボックスをオンにします。「参照」ボタンをクリックして、ダウンロードしたドライバーの場所に移動します。ドライバーフォルダーを選択し、**OK**をクリックします。

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Browse_the_Driver.jpg)

![](https://files.seeedstudio.com/wiki/Atom_Node/img/Update_the_Driver.jpg)

### ファイルの修正: boards.txt と USBCore.cpp

* Arduino-1.0.1/hardware/arduino/ディレクトリを開き、[新しいUSBCore.cpp](https://files.seeedstudio.com/wiki/Atom_Node/res/USBCore.zip) でUSBCore.cppファイルを置き換えます。

* また、Arduino-1.0.1/hardware/arduinoパス内のboards.txtファイルを[新しいboards.txt](https://files.seeedstudio.com/wiki/Atom_Node/res/Boards-Atom_Node-.txt)で置き換えます。

### 必要なライブラリファイルとAtom.Nodeファームウェアをダウンロードする

* 最新のAtom.Nodeファームウェア: [https://github.com/reeedstudio/Atom_Node](https://github.com/reeedstudio/Atom_Node)

* 最新のAtom.Nodeライブラリ: [https://github.com/reeedstudio/Atom_Node_Libraries](https://github.com/reeedstudio/Atom_Node_Libraries)

### Arduino IDEを使用してプログラムをアップロードする

* Atom.NodeファームウェアファイルのAtom_Node.inoを開きます。

* Arduino環境のツール | ボードメニューからSeeeduino Nodeを選択します。そして正しいポートを選択します。
* コードをコンパイルしてアップロードします。

これでファームウェアのアップグレードが完了しました。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
- [Atom_Node_Eagle_File.zip](https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Eagle_File.zip)

- [Atom Node ライブラリ](https://github.com/reeedstudio/Atom_Node_Libraries)

- [Atom Node ファームウェア](https://github.com/reeedstudio/Atom_Node)

- [アプリケーションプログラム: BeaconUI](https://files.seeedstudio.com/wiki/Atom_Node/res/BeaconUI.zip)

- [ハードウェア設計説明書](https://files.seeedstudio.com/wiki/Atom_Node/res/Beacon_Atom_Hardware_Design_Analysis_.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズに進むよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>