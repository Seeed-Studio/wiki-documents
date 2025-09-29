---
description: Raspberry Pi用4チャンネルSPDTリレーハット
title: Raspberry Pi用4チャンネルSPDTリレーハット
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Raspberry_Pi_Relay_Board_v1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/1.png" /></p>

Raspberry Pi用4チャンネルSPDTリレーハットは、高品質な4つのSPDT（単極双投）リレーを使用し、NO/NC（通常開/通常閉）インターフェースを提供して高電流負荷を制御できます。これにより、I2Cバスでは直接制御できないデバイスを制御するための優れたソリューションとなります。標準化されたシールド形状により、Raspberry Piとのスムーズな接続が可能で、各リレーのオン/オフ状態を示す4つのLEDインジケーターも備えています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-4-Channel-SPDT-Relay-Hat-p-4850.html)

## バージョン

| 製品バージョン | 変更点 | リリース日 |
|-|-|-|
| Raspberry Pi Relay Board v1.0 | 初版 | 2015-04-08 |
| Raspberry Pi用4チャンネルSPDTリレーハット | 1. 安定性向上のための部品交換<br />2. 電子部品のレイアウト変更 | 2021-02-08 |

## 特徴

--------

- 高品質なSPDT（単極双投）リレー
- Raspberry Pi 1、2、3、4に対応
- 固定I2Cバスアドレスを選択可能な3つのハードウェアSW1（1、2、3）を備えたI2Cインターフェース
- 簡単に接続できるリレー用スクリュー端子
- 標準化されたシールド形状とデザイン
- 各リレーの動作状態を示すLEDインジケーター
- 各リレーにCOM、NO（通常開）、NC（通常閉）ピンを装備

## 仕様

--------------

<table border="1" cellspacing="0" width="520">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小
</th>
<th scope="col">
標準
</th>
<th scope="col">
最大
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
供給電圧
</th>
<td>
4.75
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
動作電流
</th>
<td>
10
</td>
<td>
/
</td>
<td>
360
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
スイッチング電圧
</th>
<td>
/
</td>
<td>
/
</td>
<td>
30/250
</td>
<td>
VDC/VAC
</td>
</tr>
<tr align="center">
<th scope="row">
スイッチング電流
</th>
<td>
/
</td>
<td>
/
</td>
<td>
15
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
周波数
</th>
<td>
/
</td>
<td>
1
</td>
<td>
/
</td>
<td>
Hz
</td>
</tr>
<tr align="center">
<th scope="row">
スイッチング電力
</th>
<td>
/
</td>
<td>
/
</td>
<td>
2770VA/240
</td>
<td>
W
</td>
</tr>
<tr align="center">
<th scope="row">
リレー寿命
</th>
<td>
100,000
</td>
<td>
/
</td>
<td>
/
</td>
<td>
サイクル
</td>
</tr>
<tr align="center">
<th scope="row">
寸法
</th>
<td colspan="3">
91.20 * 56.15 * 32
</td>
<td>
mm
</td>
</tr>
</table>

## ハードウェア概要

-----------------

![](https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/2.png)

## 使用方法

-----
このセクションはJohn M. Wargoによって執筆されました。ここで、Johnの貢献に感謝の意を表します。元のテキストをSeeedのドキュメント全体に適合させるために少し修正しました。元のドキュメントは彼のウェブサイトで[こちら](http://johnwargo.com/microcontrollers-single-board-computers/using-the-seeed-studio-raspberry-pi-relay-board.html)からご覧いただけます。

ボードを取り付けて動作を確認する手順は以下の通りです：

- ステップ1. リレーボードをRaspberry Piに取り付ける
- ステップ2. RaspbianのI2Cソフトウェアインターフェースを有効にする
- ステップ3. Raspberry Piがボードを認識していることを確認する
- ステップ4. Pythonコードを実行してボードを操作する

### ステップ1. リレーボードの取り付け

ボードの取り付けは簡単です。必要なメスヘッダーが付属しており、オスヘッダーを備えた任意のRaspberry Piボードに取り付けることができます。注意：Raspberry Pi Zeroでボードを使用するには、オスヘッダーを追加する必要があります。

ボードを取り付ける前に、Raspberry Piのイーサネットポートの上に電気テープを貼ることをお勧めします。スタンドオフを使用せずにボードを取り付ける場合（以下の例の図のように）、ボードがイーサネットポートのハウジングに接触して問題を引き起こす可能性があります。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-01.png)
**図1**

製品プロジェクトの場合、2つのボードを固定するためにスタンドオフを使用することを強くお勧めします。

リレーボードは26ピンヘッダーを持つ古いRaspberry Pi用に構成されているため、40ピンヘッダーを持つRaspberry Piに接続する場合は、図のように端までシフトする必要があります。ピンを正しく揃えないと、後で問題が発生し、動作しなくなります。

### I2Cの有効化

リレーボードはRaspberry PiとI2Cインターフェース[https://en.wikipedia.org/wiki/I%C2%B2C](https://en.wikipedia.org/wiki/I%C2%B2C)を介して通信します。このインターフェースはPiのRaspbian OSではデフォルトで無効になっているため、ボードを使用する前に有効にする必要があります。Piの電源を入れ、グラフィカルインターフェースまで起動させます。起動後、Piメニューを開き、「Preferences」を選択し、「Raspberry Pi Configuration」を選択します（以下の図を参照）。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-02.png)
**図2**

開いたウィンドウで、「Interfaces」タブを選択し、以下の図のようにI2Cの横にあるオプションを有効にして、「OK」ボタンをクリックして続行します。PCを再起動すると、Piがリレーボードを認識するはずです。次のセクションでは、Piがリレーボードを認識していることを確認します。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-03.png)
**図3**

### Raspberry Piがリレーボードを認識していることの確認

I2Cインターフェースを有効にしたら、Raspberry Piがリレーボードを認識していることを確認します。Piでターミナルウィンドウを開き、以下のコマンドを実行します：

```
i2cdetect -y -r 1
```

アプリケーションは、認識された I2C デバイスのダンプを以下の図のように表示します。この例では、システム上にある I2C ボードは 1 つだけで、アドレス 20 に設定されたリレーボードです。この値が後ほどこの記事で重要になることがわかります。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-04.png)  
**図 4**

リレーボードのスイッチを使用して I2C アドレスを設定できるはずです。ボードには 4 つの DIP スイッチがあります。これらを変更するとどうなるか見てみましょう。

4 つのスイッチがあり、3 つは A0 から A2 とラベル付けされ、1 つは NC とラベル付けされています。NC は「接続なし」を意味します。各スイッチには高（High）と低（Low）の設定があり、以下の表でボードの I2C アドレスを設定する方法を示します。

|A0| A1 |A2 |アドレス|
|---|---|---|---|
|高|高|高|20|
|低|高|高|21|
|高|低|高|22|
|高|高|低|24|
|高|低|低|26|
|低|低|低|27|

### テストアプリケーションの実行

[GitHub リポジトリ](https://github.com/johnwargo/Seed-Studio-Relay-Board)からテストコードを使用してください。そこからコードを取得すれば、以下の手順を簡単に完了できます。

テストアプリケーションを実行するには、ターミナルウィンドウを開き、サンプルアプリケーションを展開した場所に移動して、以下のコマンドを使用してアプリケーションを実行します。

```
python ./seeed_relay_test.py
```

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-05.png)  
**図 5**

入力を求められたら、リレーをオンまたはオフにするコマンドを入力します。

- `1on`, `2on`, `3on`, または `4on` を入力して Enter を押すと、指定したリレーがオンになります。
- `1off`, `2off`, `3off`, または `4off` を入力して Enter を押すと、指定したリレーがオフになります。
- `allon` または `alloff` を入力すると、すべてのリレーがオンまたはオフになります。

### Python モジュールの使用

独自の Python アプリケーションでモジュールを使用するには、モジュール（relay_lib_seeed.py）をプロジェクトフォルダにコピーし、以下の行をアプリケーションの先頭に追加してモジュールをインポートします。

>from relay_lib_seeed import *

これにより、アプリケーションで以下の関数が使用可能になります。

- `relay_on(int_value)` - 単一のリレーをオンにします。オンにしたいリレーを指定するために 1 から 4（含む）の整数値を関数に渡します。例えば、`relay_on(1)` は最初のリレー（内部的にはリレー 0）をオンにします。
- `relay_off(int_value)` - 単一のリレーをオフにします。オフにしたいリレーを指定するために 1 から 4（含む）の整数値を関数に渡します。例えば、`relay_off(4)` は最後のリレー（内部的にはリレー 3）をオフにします。
- `relay_all_on()` - すべてのリレーを同時にオンにします。
- `relay_all_off()` - すべてのリレーを同時にオフにします。

モジュールは、ボードを操作する際に考慮すべき設定値を公開しています。

```
# 7 ビットアドレス（読み取り/書き込みビットを追加するために左シフトされます）
DEVICE_ADDRESS = 0x20
```

この値を覚えていますか？20です。ボードはデフォルトでこのアドレスに設定されています。ボード上のスイッチを変更した場合、この変数を適切に更新する必要があります。

モジュールの動作を確認するには、Raspberry Pi 上でターミナルウィンドウを開き、このリポジトリのファイルを展開したフォルダに移動し、以下のコマンドを実行します。

```
python ./relay_lib_seeed_test.py
```

アプリケーションは以下を実行します。

- すべてのリレーを 1 秒間オンにする
- すべてのリレーをオフにする
- 各リレー（1 から 4）を順番にオンにして 1 秒間オンにする

モジュールは各ステップを実行する際にコンソールにインジケータを表示します。以下の図のように表示されます。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-06.png)  
**図 6**

リレーボード上の LED（各リレーに 1 つ）がリレーがオンになると点灯します。私のボードでは順番通りではなかったので、順番通りに点灯することを期待しないでください。

以下のコードがこれを実現します。

```
# すべてのリレーをオンにする
relay_all_on()
# 1 秒待機
time.sleep(1)
# すべてのリレーをオフにする
relay_all_off()
# 1 秒待機
time.sleep(1)
# 各リレーを毎秒サイクルする無限ループ
while True:
    for i in range(1, 5):
        relay_on(i)
        time.sleep(1)
        relay_off(i)
```

以上です。それだけです。楽しんでください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/Raspberry_Pi_Relay_Board_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [回路図](https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/Raspberry-Pi-Relay-Hat_v1.0_SCH.zip)
- [HLS8L データシート](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/HLS8L.pdf)
- [PCAL9535A データシート](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/PCAL9535A.pdf)
- [Python テストコード](https://github.com/johnwargo/Seed-Studio-Relay-Board)
- [C# テストコード](https://github.com/SeeedDocument/Raspberry_Pi_Relay_Board_v1.0/tree/master/res/RPiRelayBoard)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0 から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>