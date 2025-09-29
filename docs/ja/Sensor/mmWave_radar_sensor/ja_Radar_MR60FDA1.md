---
description: 60GHz mmWave Fall Detection Pro
title: 60GHz mmWave Fall Detection Pro
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Radar_MR60FDA1
last_update:
  date: 03/03/2023
  author: Citric
---
# 60GHz mmWave センサー - 転倒検知モジュール Pro (MR60FDA1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"  style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## はじめに

60GHz mmWave Radar Sensor - Fall Detection Module Pro は、FMCW 検出理論を適用して、移動、転倒、静止を含む人間の活動を高精度で同時検出し、他のノイズの影響を受けることなく、完全にプライベートで安全な環境を提供します。これは、プライベート財産の監視、転倒警告、高齢者の健康管理における標準的な生体レーダーシステムであり、家庭、ホテル、病院で優れた性能を発揮します。このwikiでは、その活用方法をご紹介します。

### アプリケーション

- スマートホーム
- ヘルスケア
- 転倒検知
- スマートホテル
- 医療アシスタント

### 特徴

- 有効理論：60GHz FM連続波信号に基づくレーダー検出を実装
- 強化された検出アルゴリズム：自己適応環境において、移動、転倒、静止を含む人間の活動を同時に感知・出力
- 完璧なプライバシー保護：FMCW監視技術を適用し、識別なしで監視機能を提供
- 健康に優しい動作状態：人体に無害な低出力
- 高安定性：温度、湿度、ノイズ、気流、塵、光、その他の環境影響から独立
- 高測定精度：転倒検知精度90%まで達成、存在認識機能精度90%まで達成
- 高柔軟性ハードウェア設計レーダー：二次開発をサポート、様々なシナリオアプリケーションに適応

### 仕様

| 検出角度と距離      |  最小 |  標準 |  最大 |  単位 |
|-----------------------------------|----------|----------|----------|-------|
| **内容 最小 標準 最大 単位**  |          |          |          |       |
| 人の動き検出半径 [1] |       |     6     |         |  メートル    |
|  転倒監視半径 [2] |          |   3    |          |  メートル   |
|  レーダー検出角度（水平）   |          |  60      |          |  度    |
|  レーダー検出角度（ピッチ）                     |         |    60      |        |  度    |
|  注：[1][2] レーダー設置高さ2.8m、レーダー投影半径。             |          |          |
|  **電気的特性**             |          |          |          |       |
|  動作電圧（VCC）          |  4.5     |  5       |  6       |  V    |
|  動作電流（ICC）          |   90       |  93     |  100        |  mA   |
|  動作温度（TOP）      |  -20     |          |  60      |  ℃    |
|  保存温度（TST）        |  -40     |          |  80      |  ℃    |
|  **RF性能**                |          |          |          |       |
|  動作周波数（fTX）        |  58      |        |  63.5    |  GHz  |
|  送信電力（Pout）         |          |         |     6     |  dBm  |

## ハードウェア概要

すべてが始まる前に、製品の基本的なパラメータを把握することは非常に重要です。以下の表は、60GHz mmWaveセンサー - 転倒検知Proモジュールの特性に関する情報を提供します。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- インターフェース1：
  - 5Vピンはセンサーの電源供給インターフェースです。
  - RXとTXはセンサーのデータ伝送インターフェースです。RXはシリアル受信、TXはシリアル送信を意味します。
  - 人の存在状態出力インターフェース。これら2つのピンのレベルを使用して、環境内の現在の人の動きを判断できます。
    - GP2出力：高レベル - 占有、低レベル - 非占有。
    - GP1出力：高レベル - アクティブ、低レベル - 静止。
- インターフェース2：
  - ファームウェア書き込みピン配置：GND/3.3V/SWD/SWC。
  - 予備入出力ピン：GP3～GP6。

## はじめに

### ファームウェアバージョンの更新

mmwaveセンサーは長期間の技術的蓄積とユーザーから提供された貴重な提案を経て、より正確で信頼性の高い監視結果とユーザーにとってより良い体験を提供するために、元の製品を継続的に改良してきました。

新しく出荷されるセンサーは、最新の製品体験を保証するために、デフォルトで最新のファームウェアが搭載されています。しかし、既存ユーザーの体験のために、最新の技術を使用できるよう、最新のファームウェアと更新方法をここに提供します。

#### 汎用方法 - J-linkを使用してファームウェアを書き込む

間違ったファームウェアやレーダーの異常、ファームウェアの誤動作などに遭遇した場合、この方法でファームウェアを再書き込みすることが最も効果的な方法です。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードアドレス |
|:----------------:|:----------------:|
| Jlink_MR60FDA1-V0821.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-230821.bin) |
| Jlink_MR60FDA1-V0728.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V0728.bin) |
| Jlink_MR60FDA1-V114.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V114.bin) |

:::caution

1. 製品の機能を慎重に確認してください。他のmmwaveセンサーと混同してこのファームウェアを書き込まないでください。製品機能の異常を引き起こす可能性があり、その結果については自己責任となります！

2. ファームウェアを更新する方法によって使用するファームウェアの内容が異なることにもご注意ください。ダウンロードしているのは**J-link**経由で書き込むファームウェアです。

:::

**レーダーを最新バージョンに更新するには**

**ステップ1.** **Jlink**と**MR60FDA1** 60GHz mmWaveセンサーが必要です。

以下の図に示すように、デュポンワイヤーを使用してレーダーとJlinkを接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**ステップ2.** 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| JlinkV644e.rar | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**ステップ3.** **JlinkV644e.rar**を解凍し、内部の**JLink_Windows_V644e.exe**ファイルを開きます。

デフォルトオプションに従ってインストールしてください。インストールが完了したら、**J-Flash V6.44e**ソフトウェアを起動します。

**ステップ4.** チップパッケージをインストールします。

**Pack_Segger_AT32F4xx_v1.3.3.zip**を解凍し、内部の**Segger_AT32F4xx_AddOn.exe**を開きます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

**ステップ5.** 新しいプロジェクトを作成します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

**AT32F403ARGT7**を見つけて選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**ステップ6.** レーダーファームウェア（.binファイル）をこのソフトウェアにドラッグアンドドロップすると、ウィンドウがポップアップします。デフォルトの開始アドレス0x8000000を使用します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**ステップ7.** **Target** -> **Connect**をクリックします

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

接続が成功すると「Connected successfully」と表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

ファームウェアの消去：**Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

ファームウェアのアップグレード：**Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

この時点で、ファームウェアの更新が完了します。

#### UART経由でファームウェアを更新

J-linkが高価であることを考慮し、レーダーファームウェアの更新のみが必要な大多数のユーザーにとってJ-linkを購入するのは贅沢すぎるため、UART経由での更新方法を提供します。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードアドレス |
|:----------------:|:----------------:|
| UART_MR60FDA1-230821.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230821.bin) |
| UART_MR60FDA1-230728.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230728.bin) |
| UART_MR60FDA1-230227.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230227.bin) |
| UART_MR60FDA1-230915.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230915.bin) |

:::caution

1. 製品の機能を慎重に確認してください。他のmmwaveセンサーと混同してこのファームウェアを書き込まないでください。製品機能の異常を引き起こす可能性があり、その結果については自己責任となります！

2. また、ファームウェアの更新方法によって使用するファームウェアの内容が異なることにご注意ください。ダウンロードしているのは**UART**経由で書き込むファームウェアです。

3. UARTを使用してファームウェアをアップグレードする前に、レーダーのファームウェアバージョンが**少なくともバージョンG60FD1SYv010102**であることを確認してください。そうでない場合、レーダーが無効になる可能性があり、その時点でJ-linkを使用してファームウェアを書き込む必要があります！

レーダーにコマンド`0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43`を送信することで、ファームウェアのバージョン番号情報を照会できます。レーダーから報告されたデータは文字列として表示され、以下に示すような効果が表示されます。

`G60FD1SYv010104`はレーダーで報告されたモデル番号で、`010104`がバージョン番号です。これは、このセンサーがUARTアップグレードをサポートしていることを意味します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/19.png"/></div>
:::

**レーダーを最新バージョンに更新するには**

**ステップ1**. **UART to USB**と**MR60FDA1** 60GHz mmWaveセンサーが必要です。

以下の図に示すように、デュポンワイヤーを介してレーダーとUART to USBを接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**ステップ2**. 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**ステップ3**. パッケージPackageMake-v1.1.1.zipを解凍し、内部のPackageMake-v1.1.1.exeファイルを開きます。

センサーが接続されたUART to USBをコンピューターに接続し、ソフトウェアの左上隅にある歯車パターンをクリックし、ポート番号を選択し、ボーレートを115200に設定してから、右下隅をクリックして確認します。（ポート番号が見つからない場合は、接続を確認してから左下隅の更新ボタンをクリックして再試行してください）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**ステップ4**. センサーの接続

上記のようにシリアルポートの設定が完了したら、右上の2番目のアイコンをクリックすると、ポートが正しく選択されている場合、レーダーからの生データが印刷されるのが表示されます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**ステップ5**. ファームウェアの更新

左マウスボタンで右上の最後のアイコンをクリックすると、ファームウェアを選択するウィンドウが表示されます。ダウンロードしたファームウェアバージョンを選択してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

選択が完了すると、選択されたファイルパスがソフトウェアの下に表示されます。選択されたファームウェアのバージョンとモデルが使用しているセンサーと一致しているかどうかを再度確認してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/14.png"/></div>

ファームウェアをアップグレードするには、ソフトウェアの左上の最後の画像を左マウスボタンでダブルクリックしてください。その後、ファームウェアがセンサーへのダウンロードを開始します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

プログレスバーが完了するまで待つと、ファームウェアの更新が完了します。

### 上位コンピューターの使用

**UART to USB**デバイスを介してセンサーを直接コンピューターのusbポートに接続します。配線は以下の表に示されています。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr>
 <tr>
     <td align="center">UART to USB</td>
     <td align="center"></td>
        <td align="center">MR60FDA1 センサー</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
  <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">TX</td>
 </tr>
  <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">RX</td>
 </tr>
</table>

上記で言及したシリアルソフトウェアに加えて、レーダー専用に設計された[上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)も使用できます。

以下の2つのセクションでは、ソフトウェアの各部分の役割について説明します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/10.png"/></div>

- **作業エリア**

    上位コンピュータのすべての機能は、作業エリアにのみ表示されます。表示の主な内容は、ワークスペースの上部に集中しています。

    **Station:** 誰かが存在するか、動いているか、静止しているかを表示します。

    **Fall state:** 転倒の状態は、キャラクターのアニメーションとして表示されます。図の状態は転倒なしで、誰かが転倒した場合、人が転倒するアニメーション画像が表示されます。

    **Settings:** センサーがPCに接続されているポート番号を設定するために使用されます。一般的に、センサーがUART to USB経由でコンピュータに接続されている場合、**Refresh**ボタンをクリックしてポートを更新し、新しく表示されたポート番号を選択してから**Open**ボタンをクリックし、最後に**Start**ボタンをクリックして監視機能を有効にする必要があります。

    **Installing height/cm:** 設置高度を指します。転倒検出の精度を確保するため、以下のようにセンサーを正確に設置してください。上部に設置してください！レーダーは垂直に設置し、水平偏差角度は≤5°にして、レーダーのメインビームが検出エリアをカバーするようにしてください。レーダーの設置高度は2m≤H≤3mが推奨されます。レーダーの前に明らかな障害物や覆いがないようにしてください。レーダーの設置高度とレーダービーム範囲の影響により、この設置モードでの移動人体検出の最大半径はR3 ≈ 3メートル、静止人体検出の最大半径はR2 ≈ 2.25メートル、転倒検出の半径はR1 ≤ 2メートルです。

    例えば、設置高度が2.6メートルの場合、260と入力して**Send**ボタンをクリックする必要があります。

- **無効エリア**

    このエリアは現在動作しませんが、予約インターフェースとしてのみ機能します。

:::caution
このレーダーは現在、距離、速度、またはポイントクラウドをサポートしていません！
:::

## Arduinoを使用したセンサー開発

### Arduino ライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

この例で使用されるライブラリコードは、下のアイコンをクリックしてダウンロードできます。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### 機能

スケッチの開発を始める前に、ライブラリで利用可能な機能を見てみましょう。

- `void recvRadarBytes()` —— この関数は、センサーデータプロトコルのフレームヘッダーとフレームテールに従って、UART経由でセンサーから報告されるデータフレームを収集します。`showData()`関数と組み合わせて使用することで、収集されたデータ情報をシリアルポート経由で印刷できます。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void showData()` —— この関数は、センサーから報告される完全なデータフレームをシリアルポート経由で一度に印刷する役割を果たし、`recvRadarBytes()`関数と組み合わせて使用する必要があります。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void HumanExis_Func()` —— この関数は、センサーのデータフレームを解析し、人の存在状態に関する関連データを出力する責任があります。

  - **入力パラメータ:** なし

  - **戻り値:**

    - `unsigned int sensor_report` —— 返される値は、解析されたデータフレームがどのステータスクラスに属するかを示します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。人の動き情報は変化が発生した場合にのみ報告されます。

    - `int bodysign_val` —— 返される値は、人の動きパラメータの値を表します。この値は1秒に1回報告されます。

- `void Fall_Detection()` —— この関数は、転倒の検出を解析して返すために使用されます。検出は変数sensor_reportに格納されます。

  - **入力パラメータ:** なし

  - **戻り値:** - `unsigned int sensor_report` —— 返される値は、解析されたデータフレームがどのステータスクラスに属するかを示します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。転倒情報は変化が発生した場合にのみ報告されます。

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— この関数は、クエリフレームとコマンドフレームの送信に使用されます。

  - **入力パラメータ:**

    - `buff` —— センサーに送信したいデータフレーム。

    - `len` —— センサーに送信したいデータフレームの長さ。

    - `cyclic` —— 循環送信スイッチ。デフォルトはfalseで、このデータフレームを循環的に送信したい場合は**true**に設定できます。

  - **戻り値:** なし

- `void reset_func()` —— この関数は、センサーをリセットする役割を果たします。

  - **入力パラメータ:** なし

  - **戻り値:** なし

### デフォルト変数

```c
#define MESSAGE_HEAD1 0x53      //Data frame header1
#define MESSAGE_HEAD2 0x59      //Data frame header2

#define MESSAGE_END1  0x54      //End1 of data frame
#define MESSAGE_END2  0x43      //End2 of data frame

#define HUMAN_PSE_RADAR 0x80    //Human presence data

#define PRESENCE_INF 0x01       //Presence Information
#define SOMEONE_HERE 0x01       //Someone here
#define NOONE_HERE 0x00         //Noone here

#define MOVE_INF 0x02           //Campaign Information
#define PSE_NONE 0x00           //None
#define STATIONARY 0x01         //A person is stationary
#define MOVEMENT 0x02           //A person in motion

#define BODY_SIG 0x03           //Body movement information

#define MOVE_DIS 0x0E           //Determine the distance at which the movement occurs

#define FALL_DETECTION 0x83     //Fall data markers

#define FALL_STATE 0x01         //Fall status marker
#define NO_FALL 0x00            //No falls detected
#define FALLING 0x01            //Fall detected

#define RESIDENT_STATE 0x05     //Resident status
#define NO_RESIDENT 0x00        //No stationary residency
#define RESIDENT 0x01           //There is a stationary residency

#define reset_frame_len 10      //Reset data frame length
//Reset data frame
const unsigned char fall_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

//Return status, Use in arduino
#define NOONE 0x01
#define SOMEONE 0x02
#define NONEPSE 0x03
#define STATION 0x04
#define MOVE 0x05
#define BODYVAL 0x06
#define MOVEDIS 0x07

#define NOFALL 0x08
#define FALL 0x09
#define NORESIDENT 0x10
#define RESIDENCY 0x11

unsigned int sensor_report = 0, bodysign_val = 0, total_detect = 0, height_0005 = 0, height_0510 = 0, height_1015 = 0, height_1520 = 0;
```

### インストール

**ステップ 1.** Arduino ソフトウェアをインストールする必要があります。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**ステップ 2.** Arduino アプリケーションを起動します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**ステップ 3.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- 後のルーチンで **Seeeduino V4.2** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/) を参照して追加を完了してください。

- 後のルーチンで **Seeeduino XIAO** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software) を参照して追加を完了してください。

- 後のルーチンで **XIAO RP2040** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup) を参照して追加を完了してください。

- 後のルーチンで **XIAO BLE** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup) を参照して追加を完了してください。

- 後のルーチンで **XIAO ESP32C3** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup) を参照して追加を完了してください。

:::caution
**XIAO nRF52840** については、**Seeed nRF52 mbed-enabled Boards** を選択してください。そうしないと、プログラム実行時にエラーが報告される可能性があります。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**ステップ 4.** Arduino コードライブラリをインストールします。

まず [GitHub](https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor) からコードベースを取得し、ローカルコンピュータにダウンロードします。

zip ライブラリをダウンロードしたので、Arduino IDE を開き、**Sketch > Include Library > Add .ZIP Library** をクリックします。ダウンロードした zip ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **Library added to your libraries** と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino の例

ライブラリがインストールされ、基本機能を理解したので、XIAO BLE でいくつかの例を実行して、その動作を確認してみましょう。

### 必要な材料

以下の例を完了する前に、以下の材料を準備する必要があります。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**60GHz mmWave Radar Sensor**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm to 2.54mm Pitch Ribbon Cable**|

**ステップ 1.** メインボードを通してデバイスをコンピュータに接続します。配線図を以下の表に示します。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/30.png"/></div></td>
 </tr >
 <tr >
     <td align="center">Seeed Studio XIAO nRF52840</td>
     <td align="center"></td>
        <td align="center">MR60FDA1 Sensor</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
  <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">D6</td>
 </tr>
  <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">D7</td>
 </tr>
</table>

**ステップ 2.** Arduino IDE の左上のメニューバーで、**ツール**を選択し、使用している開発ボードの種類を選択し、対応するシリアルポートを選択します。

:::tip
**MacOS** を使用している場合、デバイスのシリアルポート名は多くの場合 **/dev/cu.usbmodem xxx** で始まり、デバイス名で終わります。**Windows** を使用している場合、デバイスのシリアルポート名は多くの場合 **COM** で始まり、同様にデバイス名で終わります。
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

この例では、人気製品である XIAO BLE でレーダーがどのように動作するかを実演します。

### デモ1 生データエクスポート

この例では、シリアルポート経由でセンサーから報告される生データを出力するプロセスをガイドします。

以下のサンプルプログラムは、ライブラリのexamplesフォルダにある **MR60FDA1_print_rawdata** というものです。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからのデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

このプログラムでは、XIAO nRF52840のハードウェア**Serial1**ポートを使用してセンサーに接続し、ハードウェア**Serial**ポートSerialを使用してデータを出力するため、初期化関数`Setup()`でこのシリアルポートを個別に初期化する必要があります。

メインの`loop()`関数では、`recvRadarBytes()`関数を使用してセンサーからデータフレームを受信し、その後`showData()`関数を使用して受信したデータフレームをシリアルポート経由で出力します。

このプログラムで重要な点は、メインボードの詰まりを避けるために、2つのデータフレームの受信と出力の間に間隔があることです。この時間は**150ms**以上である必要があります。

これは、メインボードがセンサーから報告されるすべてのデータフレームを受信することができないことを意味しますが、センサーから報告されるフレーム数は非常に多く頻繁であるため、センサーを使用して環境を判定する精度には影響しません。

プログラムをアップロードします。シリアルモニターを115200のボーレートで開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/7.png"/></div>

### Demo2: 人体存在検知機能の使用

この例では、人体存在検知機能の使用方法を説明し、シリアルモニターを通じてこの機能のすべての値を出力します。

以下のサンプルプログラムは、ライブラリのexamplesフォルダにある**MR60FDA1_human_existence_inf_output**というものです。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.HumanExis_Func();           //Human existence information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case NOONE:
        Serial.println("Nobody here.");
        Serial.println("----------------------------");
        break;
      case SOMEONE:
        Serial.println("Someone is here.");
        Serial.println("----------------------------");
        break;
      case NONEPSE:
        Serial.println("No human activity messages.");
        Serial.println("----------------------------");
        break;
      case STATION:
        Serial.println("Someone stop");
        Serial.println("----------------------------");
        break;
      case MOVE:
        Serial.println("Someone moving");
        Serial.println("----------------------------");
        break;
      case BODYVAL:
        Serial.print("The parameters of human body signs are: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからのデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

この例では、人体の存在を検出する機能は`HumanExis_Func()`関数によって実装されています。プログラム実装の基本的なロジックは、`HumanExis_Func()`関数がセンサーから報告されたステータス情報を`sensor_report`変数に割り当てることです。`sensor_report`の値に基づいて、シリアルポートを通じてその状態のすべての値を出力します。

`sensor_report`はインデント下でのシリアルポートからのデータ出力に対応していることに注意してください。例えば、サインパラメータを表す`bodysign_val`変数は、`sensor_report`が`BODYVAL`の場合にのみ有効であり、センサーから報告される他の`sensor_reports`には存在しません。

プログラムをアップロードします。シリアルモニターをボーレート115200で開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/8.png"/></div>

### Demo3: 人体転倒の検出

この例では、`Fall_Detection()`関数を使用して人体の転倒を検出します。

:::tip
転倒の状態出力の原理は、センサーが転倒状態の変化を検出した場合にのみコンテンツが出力されることです。
:::

以下のサンプルプログラムは、ライブラリのexamplesフォルダにある**MR60FDA1_Fall_detection**というものです。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Fall_Detection();           //Receive radar data and start processing
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
        case NOFALL:
            Serial.println("The sensor detects this movement is not a fall.");
            Serial.println("----------------------------");
            break;
        case FALL:
            Serial.println("The sensor detects a fall.");
            Serial.println("----------------------------");
            break;
        case NORESIDENT:
            Serial.println("The sensors did not detect anyone staying in place.");
            Serial.println("----------------------------");
            break;
        case RESIDENCY:
            Serial.println("The sensor detects someone staying in place.");
            Serial.println("----------------------------");
            break;
    }
  }
  delay(200); //Add time delay to avoid program jam
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからのデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

転倒検出機能の中には、滞留検出機能もあります。この機能の主な目的は、ユーザーまたはセンサーが人体が転倒したかどうかを判断するのを支援することです。垂直方向の加速度に劇的な変化があった後、一定期間人間の活動がない場合（つまり、その場に留まっている場合）、センサーは誰かが転倒して意識を失ったと判断する可能性が高くなります。

### Demo4: センサーにデータを送信

ユーザーマニュアルで提供されている詳細に基づいて、ユーザーは実際のニーズに応じて、センサーの特定の状態やモードを照会または設定するために、コマンドフレームをセンサーに送信できます。

センサーライブラリのexamplesフォルダにある**MR60FDA1_Send_frame**という名前の.inoファイルは、デバイスIDを照会するプログラムをセンサーに送信する方法を示しています。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x5F, 0x54, 0x43};

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.send_func(DevID_buff, 10, false);
  delay(50);                       //Do not set the delay time too long, as this may affect the reception of the data frames returned by the radar.
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからデータフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

この例のプログラムでは、配列 `DevID_buff[10]` が定義されており、これはクエリデバイスIDの16進数を格納し、1バイトごとに1つの場所を使用します。

そして送信は `send_func()` によって行われます。渡されるパラメータは、送信するフレームの配列、配列の長さ、およびループで送信するかどうかです。

独自のコマンドフレームを送信する必要がある場合は、ユーザーマニュアルで提供されているフレーム形式に従って正しい配列を定義する必要があります。

:::tip
**チェック桁「sum」の計算について。**

すべてのデータフレームには、データが正確に送信または受信されることを保証するためのチェックサムビットがあります。チェックサムビットは通常、データフレームの最後から2番目のビットにあります。これは、チェックビットより前のすべてのビットを加算し、16進数で下位2ビットを取ることによって計算されます。
デバイスIDをクエリするデータフレームの例を見てみましょう。
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

チェックサムビットがデータフレーム全体の最後から2番目のビットにあることがわかります。次に、前のすべての16進数を加算することから始めます。

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

次に、その下位2桁を取る必要があり、それは **60** になるので、このデータフレームのチェックサムは **60** です。センサーのIDを調べたい場合は、次の配列を定義できます。

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

プログラムをアップロードします。シリアルモニターを115200のボーレートで開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/9.png"/></div>

この時点で、返されたデータフレームを確認し、ユーザーマニュアルで説明されている返されたデータフレームと一致するかどうかを確認してください。

通常、私たちのコマンドはセンサーに繰り返し送信する必要はありませんが、センサーが非常に高速でメッセージを返信するため、センサーから返される正確なデータメッセージを受信できるかどうかを確信できません。この問題には2つの解決策があります。

- 上記の手順を数回再アップロードする。
- `send_func()` 関数の3番目のパラメータ（循環送信）を `true` に設定する。ただし、設定タイプのデータフレームを繰り返し送信すると **センサーがジャムする可能性がある** ことに注意してください。この機能は慎重に使用してください。センサーがスタックした場合は、センサーから5V電源ピンを切断し、機能が再開するまで少し待ってください。

### Demo5: センサーのリセット

センサーが異常を検出する問題が発生したり、センサーのすべての設定をクリアしたい場合があります。その場合は、この例に従ってセンサーをリセットできます。

以下のサンプルプログラムは、ライブラリのexamplesフォルダにある **MR60FDA1_Reset_sensor** というものです。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  radar.reset_func();
}

void loop()
{
  // put your main code here, to run repeatedly:
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからのデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

センサーのリセットは非常に簡単で、`reset_func()`を呼び出すだけです。リセットは**一度だけ実行**すれば良いので、`Setup()`関数内で使用します。

### Demo6: Arduino/Seeduinoの使用

私たちのライブラリはArduino互換で、手持ちのArduinoを選んでセンサープロジェクトを開発することもできます。

MR60FDA1センサーはUARTシリアルポートを使用して通信するため、以下のように配線してセンサーをArduinoに接続するだけです。

<table align="center">
 <tr>
     <td align="center">MR60FDA1センサー</td>
     <td align="center"></td>
        <td align="center">MCU</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
    <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">ソフトシリアルポートTX</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">ソフトシリアルポートRX</td>
 </tr>
</table>

すべての機能はDemo1からDemo5と同じ方法で適用されるため、この例では繰り返しません。この例では、ArduinoのソフトシリアルポートをSensorからのデータ情報を取得するために使用する方法の概要を説明します。

:::tip
Arduinoソフトシリアルポートに関する注意事項については、[Arduino公式ドキュメント](https://docs.arduino.cc/learn/built-in-libraries/software-serial)を参照してください。
:::

出力とデータ送信の両方にSerialを使用することによるデータの混乱を避けるため、Arduino側では通常ソフトシリアルポートを使用します。

ソフトシリアルポートライブラリのインポートとRXおよびTXピンの定義は、プログラムの早い段階で行う必要があります。以下のプログラムでは、**A2**と**A3**ピンをソフトシリアルポートの**RX**と**TX**ピンとして定義しています。

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);
```

また、`Setup()` 関数でソフトシリアルポートのボーレートを設定することを忘れないでください。

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}
```

**Demo1**を例として、Arduinoを使用してセンサーから報告されたデータフレームを印刷したい場合、完全なプログラムは以下の通りです。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

### Demo7: PCへの直接接続によるデータ取得

センサー用に設計された上位コンピューターを使用したい場合、またはシリアルソフトウェアを使用して完全なデータフレームを取得したい場合は、このルーチンを参照してください。

**UART to USB**デバイスを介してセンサーを直接コンピューターのUSBポートに接続します。配線は以下の表に示されています。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center">UART to USB</td>
     <td align="center"></td>
        <td align="center">MR60FDA1 センサー</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
    <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">TX</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">RX</td>
 </tr>
</table>

シリアルデバッグアシスタントなどのソフトウェアを使用して、Sensorが配置されているシリアルポートを選択します。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
MR60FDA1 Sensorは5V電源が必要です。そうでなければSensorが正常に動作しない可能性があります。
:::

接続が成功すると、Sensorが安定したメッセージストリームを送信しているのが確認できます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

同時に、ソフトウェアの送信機能を介してSensorにデータフレームを送信することもできます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
データ送信の形式として**ASCII**を選択する場合、各データセットには**0x**のプレフィックスが必要です。**HEX**を選択する場合は、各データセットに**0x**のプレフィックスは不要です。
:::

## トラブルシューティング

### FAQ1: このSensorは同じ環境で同時に複数の人を検出できますか？

> A: 利用できません。このSensorは単一の生体にのみ使用できます。監視範囲内に複数の人や動物がいる場合、監視結果に影響を与えます。

### FAQ2: XIAO ESP32C3でシリアルモニターに何も表示されないのはなぜですか？

> XIAO ESP32C3のシリアルポート機能は一般的なArduinoハードウェアとは完全に一致しておらず、Serial1を直接使用するとUSBシリアルポートが動作しない可能性があります。関連するアプリケーション事例については、詳細は[XIAO ESP32C3のSerialの章](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/#serial)をご覧ください。

## リソース

- **[PDF]** [Universal Protocol](https://files.seeedstudio.com/wiki/60GHzradar/60GHz_mmWave_Sensor_Fall_Detection_Module_Pro-Universal_Protocol.pdf)
- **[PDF]** [User manual V1.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60FDA1_user_manual-V1.3.pdf)
- **[PDF]** [Seeed Studio MMWave Sensor Case Design](https://files.seeedstudio.com/wiki/60GHzradar/Seeed_Studio_MMWave_Sensor-Case_Design.pdf)
- **[EXE]** [Upper Computer Software](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
