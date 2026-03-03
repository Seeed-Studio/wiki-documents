---
description: Shield Bot V1.2
title: Shield Bot V1.2
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Shield_Bot_V1.2
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Shield Bot V1.2
category: Arduino
bzurl: https://www.seeedstudio.com/Shield-Bot-p-1380.html
oldwikiname: Shield_Bot_V1.2
prodimagename: Shield_Bot_Kit_Product_Image.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/shield bot.jpg
surveyurl: https://www.research.net/r/Shield_Bot_V1_2
sku: 110060010
--- -->

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_Kit_Product_Image.jpg)

Shield Botは、ロボティクスへの第一歩をサポートする使いやすいエントリーレベルのロボットプラットフォームです。提供されるライブラリとスケッチを使用することで、数分でラインフォローロボットを構築することができます。

前バージョンと比較して、Shield Bot V1.2には大きな変更はありません。
:::note
互換性のあるArduinoボードは含まれていません。SeeeduinoまたはArduinoを別途ご用意ください。
:::

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Shield-Bot-p-1380.html)

特徴
--------

- **簡単に始められる** - Shieldbotはプラグ＆プレイ対応で、数分で動作可能です。
- **拡張性** - はんだ付け不要のGrove拡張ポートにより、センサーやアクチュエーターを簡単に追加できます。また、シールドヘッダーを使用して他のArduinoシールドを利用可能です。
- **オープンソース** - 改造、適応、変形が可能で、自由にカスタマイズできます。
- **Arduinoベース** - ShieldbotはArduinoシールドであり、広範なArduinoコミュニティとシールドエコシステムを活用して無限の拡張が可能です。
- **充電効率** - 高効率で迅速に充電が可能です。

仕様
--------------

### 一般仕様

| 項目                        | パラメータ                                             |
|-----------------------------|-------------------------------------------------------|
| センサー                    | ラインおよびエッジフォロー用の5つのIR反射センサー       |
| リチウムイオン充電池        | 900 mAh                                               |
| ギアモーター                | 耐久性のある160:1マイクロメタルギアモーター2個         |
| Groveポート                 | 6つのGrove拡張ポート                                   |
| シールドヘッダー            | Arduinoシールド拡張ヘッダー                            |

### 充電仕様

**充電モードと充電効率は以下の表の通りです：**

| モード       | 充電電流(A) | 入力電力(W) | 充電電力(W) | 充電効率(%) | 充電時間(h) |
|--------------|-------------|-------------|-------------|-------------|-------------|
| USB充電      | 0.396       | 3.94        | 3.56        | 90.36       | 2.50        |
| Vin充電      | 0.7         | 6.78        | 6.30        | 92.92       | 1.41        |

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_V1.2_Foto_1.JPG)

- **電源スイッチ**: ShieldBotがオフの場合、動作しません。ただし、**USB充電ポート**を使用してバッテリーを充電できます。
- **USB充電ポート**: USB mini-B、バッテリー充電用。
- **Groveポート**: D0, D1, D2, D3, D4, D5, A4, A5ピンにアクセス可能で、これらのGroveポートにGroveモジュールを接続できます。
- **IRラインファインダーポテンショメーター**: ラインファインダーの感度を調整するために使用します。時計回りに調整すると感度が上がり、反時計回りに調整すると感度が下がります。
- **IRラインファインダー**: S1からS5。非反射面（例：黒いテープライン）が検出されると青色に点灯します。
- **ラインファインダースイッチ**: スイッチを「ON」にすると、ラインファインダーがArduinoのI/Oピン（A0, A1, A2, A3, D4）に接続されます。ライブラリのLineFollowingSimpleデモは、ラインファインダーの出力信号を使用してShield Botを制御します。スイッチが「OFF」の場合、Seeeduino/Arduinoはラインファインダーの出力信号を通じてShield Botを制御できません。
- **Arduinoシールド拡張ヘッダー**: Shield Botは他のシールドを積み重ねることが可能です。

:::note
<ol><li>S5が有効になっている場合、Groveポートj14およびj13は使用できません。</li>
<li>Arduinoのシリアルライン、UART Groveポート、またはj11のいずれか1つのみ使用可能です（すべてD1/TXラインを共有しています）。</li></ol>
:::

ステータスライト
-------------

Shield Botには、動作状況を示す多くのLEDがあります！
![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_bot_1.2_LEDs.JPG)

| ライト番号          | 機能                   | ステータス                                                                                   |
|---------------------|------------------------|---------------------------------------------------------------------------------------------|
| D22                | 電源                   | Shieldbotがオンの場合は緑色。オフの場合はバッテリーの充電のみ可能。                          |
| D23およびD24        | 充電ステータス         | 赤色は充電中、緑色は充電完了を示します。                                                    |
| D18                | リセット               | リセットボタンが押されると赤色に点灯します。                                                |
| D11およびD12        | 右モーターインジケーター | 緑色は前進、赤色は後退、両方点灯は停止を示します。                                          |
| D13およびD15        | 左モーターインジケーター | 緑色は前進、赤色は後退、両方点灯は停止を示します。                                          |
| D5 D10 D14 D17 D19 | ライトセンサーインジケーター | 非反射面（例：黒いテープライン）が検出されると青色に点灯します。                             |

構造
---------

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Position_for_seeeduino.jpg)
パート1、パート2、パート3は3Dプリンターで作成されています。また、Seeeduinoボードの取り付け位置も確認できます。

始め方
---------------

Shieldbotのセットアップは簡単で迅速です！以下の手順に従って、ロボットコンパニオンを稼働させましょう。

### 準備作業

- まず、Arduino を Shield Bot の底部に接続し、USB ケーブルを使用して PC に接続します。

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/ShieldBot_Programming2.JPG)

- コードをアップロードする前に、電源スイッチを *OFF* にすることをお勧めします。そうしないと、注意していない間に動作を開始し、驚かされる可能性があります。

Shield Bot を制御するための便利な機能を備えたライブラリと、すぐに動作させるためのいくつかの例を用意しました！

- [こちら](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_Library.zip)からライブラリをダウンロードして解凍します。
- ShieldBot フォルダを Arduino IDE のライブラリフォルダに配置します。パスは次の通りです：..\arduino-1.0.1\libraries。

### バッテリーの取り付け

Shield Bot を地面で動作させるにはバッテリーが必要です。

:::note
1. バッテリーを取り付けた後、mini-b USB ケーブルを使用してバッテリーを充電できます。充電中は赤色の LED が点灯し、充電が完了すると緑色の LED が点灯します。
2. コードをアップロードする際は、Seeeduino の USB ポートを PC に接続する必要があります。Shield Bot の USB ポートはバッテリーの充電専用です。
:::

### デモ 1: モーターを駆動して動作させる

- Arduino 環境を開き、File->Examples->Shieldbot->drive に移動して、最初の Shield Bot の例をロードします。正しい Arduino ボードとシリアルポートを選択してください。
- 次に、コードを Arduino にアップロードします。アップロードが完了すると、コンソールに「Done Uploading」と表示されます。
- アップロードが完了したら、USB ケーブルを取り外します。
- その後、Shield Bot を広い場所に置き、電源スイッチを '**ON'** にします。
- これで Shield Bot は一定の速度で動作します。

### デモ 2: 黒い線に沿って走行

Shield Bot は、ラインファインダーセンサー（s1, s2, s3, s4, s5）を使用して反射面を検出できます。非反射面（例：黒いテープの線）が検出されると、青色のインジケーターが点灯します。これを使用して、黒い線に沿って走行させましょう。

:::caution
ディップスイッチが ON に設定されていることを確認し、A0, A1, A2, A3 または D4 ピンを使用しているシールドがないことを確認してください。
:::

- USB ケーブルを使用して Seeeduino を PC に接続した後、新しいデモ「LineFollowingSimple」を再アップロードします。
- アップロードが完了したら、Shield Bot を事前に準備された黒い滑走路に置きます。

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_Line_Finder.jpg)

- IR ラインファインダーポテンショメーターを調整して、ラインファインダーの感度を変更できます。時計回りに調整すると感度が上がり、反時計回りに調整すると感度が下がります。試してみてください！

### 応用例

**1. 時計**

これは非常にシンプルで動作する時計です。車輪が一方は前進し、もう一方は後退して反射センサーを回転させ、分を示します。1時間ごとにボットが前進し、リニアスライドを進めて時間を示します。レーザーカットのスクラップとセロハンテープで作られた無料のリニアレールは特に素晴らしいです！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team1_2.jpg)

**2. Shot.Bot**

これは非常に美しいデバイスで、イベントで多くの人が購入したいと述べていました。ライン追従ロボットは注文を受け、トラックを走行してディスペンサーに到達し、サーボを使用して3種類の飲料のいずれかを分配し、その後顧客の元に戻ります。

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team7_2.jpg)

**3. Simon**

これは美しく設計された、まだ完成していない2人用の対戦型サイモンクローンです。ボットはライトとともにメロディーを再生し、レーザーカットされたパック（点字付きで視覚障害者もプレイ可能）を使用してホワイトボード上で音をマークします。その後、Shield Bot が前進し、センサーを使用して正しくマークされたかを確認します。相手より多く正解を得ると、ボットが相手のゴールに向かって進みます！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team6_2.jpg)

**4. HackPHX-Plotter**

このデバイスは、Der Kritzler 2D 描画マシン（垂直 x,y テーブル）に非常に近いです。Shield Bot のタイヤを固定し、逆回転させることでペンを描画面から持ち上げるという独創的なアイデアを採用しました。さらに、設計者と協力して PC 側のユーザーインターフェースを作成しました！

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team8.jpg)

参考
---------

Shield Bot ライブラリを使用するには、Shield Bot ライブラリを追加し、Arduino コードの void setup() の前に Shieldbot オブジェクトを宣言します。

```
#include <Shieldbot.h>  // Shield Bot ライブラリをインクルード
 
Shieldbot shieldbot = Shieldbot(); // Shieldbot オブジェクトを宣言
```

**<u> setMaxSpeed(int both) </u>**

*説明*: 2つのモーターの最大速度を設定します。

*both*: 0（ほぼ停止）から 255（全速力）の範囲

**<u> setMaxSpeed(int left, int right)</u>**

*説明*: 左右のモーターに最大速度を設定します。

*left, right*: 左は左モーターの速度、右は右モーターの速度を示します。範囲は 0（ほぼ停止）から 255（全速力）

**<u> rightMotor(char mag)</u>**

*説明*: 右モーターを有効にします。負の値で後退、正の値で前進します。一方のモーターを遅くすると、その方向に曲がります。モーターを逆方向に回転させるとスピンします。

*mag*: 右モーターの回転方向；-128: 完全後退、0: 動かない、127: 完全前進

**<u> leftMotor(char mag)</u>**

*説明*: 左モーターを有効にします。負の値で後退、正の値で前進します。

*mag*: 左モーターの回転方向；-128: 完全後退、0: 動かない、127: 完全前進

**<u> forward()</u>**

*説明*: モーターを有効にして、設定された速度でボットを直進させます。

**<u> backward()</u>**

*説明*: モーターを有効にして、設定された速度でボットを後退させます。

**<u> drive(char left, char right)</u>**

*説明*: 汎用的なドライブコール。leftMotor と rightMotor を直接呼び出します。

*left*: -128（左モーターが最大速度で後退）、0（停止）、127（左モーターが最大速度で前進）の範囲で指定します。

*right*: -128（右モーターが最大速度で後退）、0（停止）、127（右モーターが最大速度で前進）の範囲で指定します。

**<u> stop()</u>**

*説明*: モーターを無効化します。`drive(0,0)`を使用することも可能です。

**<u> stopLeft()</u>**

*説明*: 左モーターを無効化します。`drive(0,X)`を使用することも可能です。

**<u> stopRight()</u>**

*説明*: 右モーターを無効化します。`drive(X,0)`を使用することも可能です。

**<u> fastStop()</u>**

*説明*: モーターを迅速に停止します。`drive(X,0)`を使用することも可能です。

**<u> fastStopLeft()</u>**

*説明*: 左モーターをより迅速に停止します。ただし、これはモーターチップに悪影響を及ぼす可能性があるため、使用は慎重に行ってください。

**<u> fastStopRight()</u>**

*説明*: 右モーターをより迅速に停止します。ただし、これはモーターチップに悪影響を及ぼす可能性があるため、使用は慎重に行ってください。

**<u> readS1(), readS2(), readS3(), readS4(), readS5()</u>**

*説明*: ボード上の5つの光センサーのいずれかを読み取ります。  
注意: センサーをArduinoポートに接続するには、DIPスイッチブロックを使用する必要があります（スイッチを番号と「ON」テキストの方向に向けます）。これらのスイッチを使用しない場合、これらのピンを他の用途に使用することが可能です。

*戻り値*: 表面が反射する場合（例: 白）はLOW、表面が何も反射しない場合（例: 黒）はHIGHを返します。

![](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/ShieldBot_driveLibrary.png)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Shield Bot 1.2 ライブラリ](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_Library.zip)
- [Shield Bot 1.2 Eagle ファイル](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_eagle_files.zip)
- [ShieldBot 1.2 回路図](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_v1.2.pdf)
- [IR 反射センサー RPR-220 データシート](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/RPR-220.pdf)
- [昇圧レギュレーター ISL97516 データシート](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/ISL97516.pdf)
- [リチウムイオン充電器 BQ2057 データシート](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/BQ2057.pdf)
- [Hブリッジモータードライバー L298 データシート](https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/L298.pdf)
- [オペアンプ LMV358 データシート](http://www.ti.com/product/lmv358)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Shield_Bot_V1.2 から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>