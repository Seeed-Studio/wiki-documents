---
description: 60GHz mmWave Fall Detection Pro
title: 60GHz mmWave Fall Detection Pro
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Radar_MR60FDA1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# 60GHz mmWave Sensor - Fall Detection Module Pro (MR60FDA1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"  style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 概要

60GHz mmWave Radar Sensor - Fall Detection Module Proは、FMCW検出理論を適用して、移動、転倒、静止を含む人間の活動を高精度で同時に検出する機能を実現し、完全にプライベートで安全な環境を提供します。他のノイズの影響を受けることなく動作します。これは、プライベートプロパティ監視、転倒警告、高齢者の健康管理における標準的な生体レーダーシステムであり、家庭、ホテル、病院で優れた性能を発揮します。このWikiでは、その利用方法を紹介します。

### 応用例

- スマートホーム
- ヘルスケア
- 転倒検出
- スマートホテル
- 医療アシスタント

### 特徴

- 有効理論: 60GHz FM連続波信号に基づくレーダー検出を実現
- 強化された検出アルゴリズム: 自動適応環境で移動、転倒、静止を含む人間の活動を同時に検知して出力
- 完璧なプライバシー保護: FMCW監視技術を適用し、識別なしで監視能力を提供
- 健康に優しい動作状態: 人体に無害な低出力
- 高い安定性: 温度、湿度、ノイズ、気流、ほこり、光、その他の環境影響に依存しない
- 高い測定精度: 転倒検出精度90%、存在感知機能精度90%を達成
- 高い柔軟性のハードウェア設計レーダー: 二次開発をサポートし、さまざまなシナリオに適応可能

### 仕様

| 検出角度と距離                     | 最小値 | 典型値 | 最大値 | 単位 |
|-----------------------------------|----------|----------|----------|-------|
| **内容 最小値 典型値 最大値 単位** |          |          |          |       |
| 人の移動検出半径 [1]              |          |     6     |         |  メートル |
| 転倒監視半径 [2]                  |          |   3       |          |  メートル |
| レーダー検出角度（水平）          |          |  60       |          |  度     |
| レーダー検出角度（ピッチ）        |          |    60     |          |  度     |
| 注: [1][2] レーダー設置高さ2.8m、レーダー投影半径。 |          |          |
| **電気的特性**                    |          |          |          |       |
| 動作電圧 (VCC)                   |  4.5     |  5       |  6       |  V    |
| 動作電流 (ICC)                   |   90     |  93      |  100     |  mA   |
| 動作温度 (TOP)                   |  -20     |          |  60      |  ℃    |
| 保管温度 (TST)                   |  -40     |          |  80      |  ℃    |
| **RF性能**                        |          |          |          |       |
| 動作周波数 (fTX)                 |  58      |          |  63.5    |  GHz  |
| 送信出力 (Pout)                  |          |          |     6     |  dBm  |

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを理解することが非常に重要です。以下の表は、60GHz mmWaveセンサー - Fall Detection Proモジュールの特性に関する情報を提供します。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- インターフェース1:
  - 5Vピンはセンサーの電源供給インターフェースです。
  - RXとTXはセンサーのデータ伝送インターフェースです。RXはシリアル受信、TXはシリアル送信を意味します。
  - 人の存在状態出力インターフェース。これら2つのピンのレベルを使用して、環境内の現在の人の動きを判断できます。
    - GP2出力: 高レベル - 占有中、低レベル - 非占有。
    - GP1出力: 高レベル - 活動中、低レベル - 静止中。
- インターフェース2:
  - ファームウェア書き込みピンアウト: GND/3.3V/SWD/SWC。
  - オーバーヘッド入出力ピン: GP3~GP6。

## はじめに

### ファームウェアバージョンの更新

mmWaveセンサーは長期間にわたる技術的な蓄積とユーザーから提供された貴重な提案を経て、元の製品を改良し、より正確で信頼性の高い監視結果と、より良いユーザー体験を提供してきました。

新しく出荷されるセンサーは、最新の製品体験を保証するためにデフォルトで最新のファームウェアが搭載されています。しかし、既存ユーザーの体験を考慮して、最新のファームウェアと更新方法を提供し、最新技術を利用できるようにしています。

#### 一般的な方法 - J-linkを使用してファームウェアを書き込む

誤ったファームウェアやレーダー異常、ファームウェアの不具合などに遭遇した場合、この方法でファームウェアを再書き込みすることが最も効果的です。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードアドレス |
|:----------------:|:----------------:|
| Jlink_MR60FDA1-V0821.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-230821.bin) |
| Jlink_MR60FDA1-V0728.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V0728.bin) |
| Jlink_MR60FDA1-V114.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V114.bin) |

:::注意
1. 製品の機能を慎重に確認してください。他のmmWaveセンサーと混同してこのファームウェアを書き込まないでください。そうしないと製品機能が異常になる可能性があり、その結果は自己責任となります。

2. ファームウェア更新の方法によって使用するファームウェア内容が異なることにも注意してください。ダウンロードしているのは**J-link**を介して書き込むファームウェアです。
:::

**レーダーを最新バージョンに更新する方法**

**ステップ1.** **Jlink**と**MR60FDA1** 60GHz mmWaveセンサーを用意します。

以下の図のように、デュポン線を使用してレーダーとJlinkを接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**ステップ2.** 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| JlinkV644e.rar | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**ステップ3.** **JlinkV644e.rar**を解凍し、内部の**JLink_Windows_V644e.exe**ファイルを開きます。

デフォルトのオプションに従ってインストールします。インストールが完了したら、**J-Flash V6.44e**ソフトウェアを起動します。

**ステップ4.** チップパッケージをインストールします。

**Pack_Segger_AT32F4xx_v1.3.3.zip**を解凍し、内部の**Segger_AT32F4xx_AddOn.exe**を開きます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

**ステップ5.** 新しいプロジェクトを作成します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

**AT32F403ARGT7**を見つけて選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**ステップ6.** レーダーファームウェア（.binファイル）をこのソフトウェアにドラッグ＆ドロップします。ウィンドウがポップアップし、デフォルトの開始アドレス0x8000000を使用します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**ステップ7.** **Target** -> **Connect**をクリックします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

接続が成功すると、「Connected successfully」と表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

ファームウェアを消去する: **Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

ファームウェアをアップグレードする: **Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

これでファームウェアの更新が完了です。

#### UARTを介したファームウェア更新

J-linkが高価であることを考慮し、レーダーファームウェアを更新するだけの大多数のユーザーにとってJ-linkを購入するのは過剰であるため、UARTを介した更新方法を提供します。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードアドレス |
|:----------------:|:----------------:|
| UART_MR60FDA1-230821.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230821.bin) |
| UART_MR60FDA1-230728.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230728.bin) |
| UART_MR60FDA1-230227.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230227.bin) |
| UART_MR60FDA1-230915.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230915.bin) |

:::注意
1. 製品の機能を慎重に確認してください。他のmmWaveセンサーと混同してこのファームウェアを書き込まないでください。そうしないと製品機能が異常になる可能性があり、その結果は自己責任となります！

2. また、ファームウェアの更新方法によって使用するファームウェアの内容が異なることに注意してください。ダウンロードするファームウェアは、**UART**経由で書き込むものです。

3. UARTを使用してファームウェアをアップグレードする前に、レーダーのファームウェアバージョンが**少なくとも G60FD1SYv010102**であることを確認してください。そうでない場合、レーダーが無効になる可能性があり、その場合はJ-linkを使用してファームウェアを書き込む必要があります！

レーダーにコマンド `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` を送信することで、ファームウェアバージョン番号情報を照会できます。レーダーから報告されたデータは文字列として表示され、以下のような結果が得られます。

`G60FD1SYv010104` はレーダーが報告するモデル番号であり、`010104` がバージョン番号です。これは、このセンサーがUARTアップグレードをサポートしていることを意味します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/19.png"/></div>
:::

**レーダーを最新バージョンに更新する方法**

**ステップ 1**. **UART to USB**と**MR60FDA1** 60GHz mmWaveセンサーを準備します。

レーダーとUART to USBをデュポンワイヤーで接続し、以下の図のように接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**ステップ 2**. 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**ステップ 3**. PackageMake-v1.1.1.zipを解凍し、内部のPackageMake-v1.1.1.exeファイルを開きます。

センサーを接続したUART to USBをコンピュータに接続し、ソフトウェアの左上のギアアイコンをクリックしてポート番号を選択し、ボーレートを115200に設定して右下の確認ボタンをクリックします。（ポート番号が見つからない場合は接続を確認し、左下の更新ボタンをクリックして再試行してください）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**ステップ 4**. センサーの接続

上記の手順でシリアルポートの設定を完了した後、右上の2番目のアイコンをクリックすると、ポートが正しく選択されている場合、レーダーからの生データが表示されます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**ステップ 5**. ファームウェアの更新

左上の最後のアイコンを左クリックすると、ファームウェアを選択するウィンドウが表示されます。ダウンロードしたファームウェアバージョンを選択してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

選択が完了すると、ソフトウェアの下に選択したファイルパスが表示されます。使用しているセンサーと一致するファームウェアバージョンとモデルを再確認してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/14.png"/></div>

ファームウェアをアップグレードするには、ソフトウェアの左上の最後の画像をダブルクリックしてください。これにより、ファームウェアがセンサーにダウンロードされ始めます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

進行バーが完了するまで待つと、ファームウェアの更新が完了します。

### 上位コンピュータの使用

センサーを**UART to USB**デバイスを介してコンピュータのUSBポートに直接接続します。配線は以下の表に示されています。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr>
 <tr>
     <td align="center">UART to USB</td>
     <td align="center"></td>
        <td align="center">MR60FDA1センサー</td>
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

上記のシリアルソフトウェアに加えて、レーダー専用に設計された[上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)を直接使用することもできます。

以下の2つのセクションでは、ソフトウェアの各部分の役割を説明します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/10.png"/></div>

- **作業エリア**

    上位コンピュータのすべての機能は作業エリアにのみ表示されます。表示される主な内容は作業スペースの上部に集中しています。

    **ステーション:** 誰かが存在しているか、移動しているか、静止しているかを表示します。

    **転倒状態:** 転倒の状態はキャラクターのアニメーションとして表示されます。画像の状態は転倒なしを示しており、誰かが転倒した場合は転倒する人のアニメーション画像が表示されます。

    **設定:** センサーがPCに接続されているポート番号を設定するために使用します。通常、センサーがUART to USBを介してコンピュータに接続されている場合、**更新**ボタンをクリックしてポートを更新し、新しく表示されたポート番号を選択してから**開く**ボタンをクリックし、最後に**開始**ボタンをクリックして監視機能を有効にします。

**高さ/cmの設置:** 設置高さを指します。転倒検知の精度を確保するために、以下のようにセンサーを正確に設置してください。必ず上部に設置してください！レーダーは水平偏差角が≤5°で垂直に設置する必要があり、レーダーの主ビームが検知エリアをカバーするようにしてください。レーダーの設置高さは2m≤H≤3mを推奨します。レーダーの前に明らかな障害物や覆いがないことを確認してください。レーダーの設置高さとレーダービーム範囲の影響を受け、この設置モードでの移動する人間の検知最大半径はR3 ≈ 3メートル、静止する人間の検知最大半径はR2 ≈ 2.25メートル、転倒検知の半径はR1 ≤ 2メートルです。

例えば、設置高さが2.6メートルの場合、260を入力して**送信**ボタンをクリックしてください。

- **無効エリア**

    このエリアは現在動作しませんが、予約されたインターフェースとしてのみ機能します。

:::caution
このレーダーは現在、範囲、速度、またはポイントクラウドをサポートしていません！
:::

## Arduinoを使用したセンサー開発

### Arduinoライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

この例で使用されるライブラリコードは、以下のアイコンをクリックしてダウンロードできます。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### 機能

スケッチの開発を始める前に、ライブラリの利用可能な機能を確認しましょう。

- `void recvRadarBytes()` —— この関数は、センサーのデータプロトコル内のフレームヘッダーとフレームテールに基づいて、UART経由でセンサーが報告するデータフレームを収集します。この関数は`showData()`関数と組み合わせて使用され、収集されたデータ情報をシリアルポート経由で出力できます。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void showData()` —— この関数は、センサーが報告する完全なデータフレームをシリアルポート経由で一度に出力するためのもので、`recvRadarBytes()`関数と組み合わせて使用する必要があります。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void HumanExis_Func()` —— この関数はセンサーのデータフレームを解析し、人間の存在状態に関する関連データを出力します。

  - **入力パラメータ:** なし

  - **戻り値:**

    - `unsigned int sensor_report` —— 解析されたデータフレームが属する状態クラスを示す値を返します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。人間の動き情報は変化がある場合のみ報告されます。

    - `int bodysign_val` —— 人間の動きパラメータの値を表します。この値は1秒ごとに報告されます。

- `void Fall_Detection()` —— この関数は転倒検知を解析して返すために使用されます。検知結果は変数sensor_reportに格納されます。

  - **入力パラメータ:** なし

  - **戻り値:** - `unsigned int sensor_report` —— 解析されたデータフレームが属する状態クラスを示す値を返します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。転倒情報は変化がある場合のみ報告されます。

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— この関数はクエリフレームやコマンドフレームを送信するために使用されます。

  - **入力パラメータ:**

    - `buff` —— センサーに送信したいデータフレーム。

    - `len` —— センサーに送信したいデータフレームの長さ。

    - `cyclic` —— 循環送信スイッチ。デフォルトはfalseで、データフレームを循環的に送信したい場合は**true**に設定できます。

  - **戻り値:** なし

- `void reset_func()` —— この関数はセンサーをリセットするためのものです。

  - **入力パラメータ:** なし

  - **戻り値:** なし

### デフォルト変数

```c
#define MESSAGE_HEAD1 0x53      //データフレームヘッダー1
#define MESSAGE_HEAD2 0x59      //データフレームヘッダー2

#define MESSAGE_END1  0x54      //データフレームの終了1
#define MESSAGE_END2  0x43      //データフレームの終了2

#define HUMAN_PSE_RADAR 0x80    //人間の存在データ

#define PRESENCE_INF 0x01       //存在情報
#define SOMEONE_HERE 0x01       //誰かがいる
#define NOONE_HERE 0x00         //誰もいない

#define MOVE_INF 0x02           //動き情報
#define PSE_NONE 0x00           //なし
#define STATIONARY 0x01         //人が静止している
#define MOVEMENT 0x02           //人が動いている

#define BODY_SIG 0x03           //身体の動き情報

#define MOVE_DIS 0x0E           //動きが発生する距離を判定

#define FALL_DETECTION 0x83     //転倒データマーカー

#define FALL_STATE 0x01         //転倒状態マーカー
#define NO_FALL 0x00            //転倒検知なし
#define FALLING 0x01            //転倒検知あり

#define RESIDENT_STATE 0x05     //居住状態
#define NO_RESIDENT 0x00        //静止居住なし
#define RESIDENT 0x01           //静止居住あり

#define reset_frame_len 10      //リセットデータフレームの長さ
//リセットデータフレーム
const unsigned char fall_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

//戻り状態、Arduinoで使用
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

**ステップ1.** Arduinoソフトウェアをインストールする必要があります。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**ステップ 2.** Arduino アプリケーションを起動します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**ステップ 3.** 開発ボードのモデルを選択し、Arduino IDE に追加します。

- **Seeeduino V4.2** を後の手順で使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を参照して追加を完了してください。

- **Seeeduino XIAO** を後の手順で使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を参照して追加を完了してください。

- **XIAO RP2040** を後の手順で使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)を参照して追加を完了してください。

- **XIAO BLE** を後の手順で使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照して追加を完了してください。

- **XIAO ESP32C3** を後の手順で使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup)を参照して追加を完了してください。

:::caution
**XIAO nRF52840** を使用する場合は、**Seeed nRF52 mbed-enabled Boards** を選択してください。そうしないと、プログラム実行時にエラーが報告される可能性があります。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**ステップ 4.** Arduino コードライブラリをインストールします。

まず、[GitHub](https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor) からコードベースを取得し、ローカルコンピュータにダウンロードします。

ZIP ライブラリをダウンロードしたら、Arduino IDE を開き、**スケッチ > ライブラリを含める > .ZIP ライブラリを追加** をクリックします。ダウンロードした ZIP ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **ライブラリがライブラリに追加されました** と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino の例

ライブラリをインストールし、基本的な機能を理解したので、XIAO BLE の動作を確認するためにいくつかの例を実行してみましょう。

### 必要な材料

以下の例を完了する前に、以下の材料を準備する必要があります。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**60GHz mmWave Radar Sensor**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm to 2.54mm ピッチリボンケーブル**|

**ステップ 1.** メインボードを介してデバイスをコンピュータに接続します。配線図は以下の表に示されています。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/30.png"/></div></td>
 </tr >
 <tr >
     <td align="center">Seeed Studio XIAO nRF52840</td>
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
        <td align="center">D6</td>
 </tr>
  <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">D7</td>
 </tr>
</table>

**ステップ 2.** Arduino IDE の左上のメニューバーで **ツール** を選択し、使用している開発ボードの種類を選択し、対応するシリアルポートを選択します。

:::tip
**MacOS** を使用している場合、デバイスのシリアルポート名は通常 **/dev/cu.usbmodem xxx** で始まり、デバイス名で終わります。**Windows** を使用している場合、デバイスのシリアルポート名は通常 **COM** で始まり、同様にデバイス名で終わります。
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

この例では、人気製品 XIAO BLE を使用してレーダーの動作をデモンストレーションします。

### デモ1 生データのエクスポート

この例では、センサーがシリアルポートを介して報告する生データを出力するプロセスを案内します。

以下の例のプログラムは、ライブラリの **MR60FDA1_print_rawdata** フォルダー内にあります。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// ソフトウェアシリアルで RX & TX に使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// ハードウェアシリアルを試すこともできます
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");
}

void loop()
{
  // 繰り返し実行されるメインコードを記述
  radar.recvRadarBytes();           // レーダーデータを受信し、処理を開始
  radar.showData();                 // シリアルポートに受信したデータフレームを出力
  delay(200);                       // プログラムの詰まりを防ぐために遅延を追加
}
```

:::tip
もし XIAO ESP32 シリーズを使用していて、mmwave レーダーからデータのフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

このプログラムでは、XIAO nRF52840 のハードウェア **Serial1** ポートを使用してセンサーに接続し、ハードウェア **Serial** ポートを使用してデータを出力します。そのため、初期化関数 `Setup()` 内でこのシリアルポートを個別に初期化する必要があります。

メインの `loop()` 関数では、センサーからデータフレームを受信するために `recvRadarBytes()` 関数を使用し、受信したデータフレームをシリアルポート経由で出力するために `showData()` 関数を使用します。

このプログラムでは、2つのデータフレームの受信と出力の間に間隔を設けることが重要です。これにより、メインボードの詰まりを防ぐことができます。この間隔は **150ms** 以上である必要があります。

つまり、メインボードがセンサーから報告されるすべてのデータフレームを受信することはできませんが、センサーが報告するフレーム数が非常に多く頻繁であるため、センサーを使用して環境を判断する精度には影響しません。

プログラムをアップロードしてください。シリアルモニターを開き、ボーレートを 115200 に設定すると、結果が表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/7.png"/></div>

### デモ2: 人の存在検知機能の使用

この例では、人の存在検知機能を使用する方法を説明し、この機能のすべての値をシリアルモニターを通じて出力します。

以下のサンプルプログラムは、ライブラリの例フォルダにある **MR60FDA1_human_existence_inf_output** という名前のプログラムです。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// RX & TX に使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// ハードウェアシリアルも試すことが可能
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // 初期化コードをここに記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれると、プログラムが実行を開始します。

  Serial.println("準備完了");
}

void loop()
{
  // 繰り返し実行されるメインコード
  radar.HumanExis_Func();           // 人の存在情報を出力
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case NOONE:
        Serial.println("ここには誰もいません。");
        Serial.println("----------------------------");
        break;
      case SOMEONE:
        Serial.println("誰かがここにいます。");
        Serial.println("----------------------------");
        break;
      case NONEPSE:
        Serial.println("人間の活動メッセージはありません。");
        Serial.println("----------------------------");
        break;
      case STATION:
        Serial.println("誰かが停止しています。");
        Serial.println("----------------------------");
        break;
      case MOVE:
        Serial.println("誰かが移動しています。");
        Serial.println("----------------------------");
        break;
      case BODYVAL:
        Serial.print("人体のサインパラメータは: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       // プログラムの詰まりを防ぐために時間遅延を追加
}
```

:::tip
もし XIAO ESP32 シリーズを使用していて、mmwave レーダーからデータのフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

この例では、人体の存在を検知する機能は `HumanExis_Func()` 関数によって実装されています。プログラムの基本的なロジックは、`HumanExis_Func()` 関数がセンサーによって報告された状態情報を `sensor_report` 変数に割り当てることです。その後、`sensor_report` の値に基づいて、その状態におけるすべての値をシリアルポートを通じて出力します。

注意点として、`sensor_report` はインデントされたシリアルポートからのデータ出力に対応しています。例えば、サインパラメータを表す `bodysign_val` 変数は、`sensor_report` が `BODYVAL` の場合にのみ有効であり、センサーが報告する他の `sensor_report` には存在しません。

プログラムをアップロードしてください。シリアルモニターを開き、ボーレートを 115200 に設定すると、結果が表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/8.png"/></div>

### デモ3: 人の転倒検知

この例では、`Fall_Detection()` 関数を使用して人の転倒を検知します。

:::tip
転倒状態の出力原理は、センサーが転倒状態の変化を検知した場合にのみ内容が出力されるというものです。
:::

以下のサンプルプログラムは、ライブラリの例フォルダにある **MR60FDA1_Fall_detection** という名前のプログラムです。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// RX & TX に使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// ハードウェアシリアルも試すことが可能
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // 初期化コードをここに記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれると、プログラムが実行を開始します。

  Serial.println("準備完了");
}

void loop()
{
  // 繰り返し実行されるメインコード
  radar.Fall_Detection();           // レーダーデータを受信し、処理を開始
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
        case NOFALL:
            Serial.println("センサーはこの動きが転倒ではないと検知しました。");
            Serial.println("----------------------------");
            break;
        case FALL:
            Serial.println("センサーは転倒を検知しました。");
            Serial.println("----------------------------");
            break;
        case NORESIDENT:
            Serial.println("センサーは誰もその場に留まっていないと検知しました。");
            Serial.println("----------------------------");
            break;
        case RESIDENCY:
            Serial.println("センサーは誰かがその場に留まっていると検知しました。");
            Serial.println("----------------------------");
            break;
    }
  }
  delay(200); // プログラムの詰まりを防ぐために時間遅延を追加
}
```

:::tip
もし XIAO ESP32 シリーズを使用していて、mmwave レーダーからデータのフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

転倒検知機能の中には、滞留検知機能も含まれています。この機能の主な目的は、ユーザーやセンサーが人体が転倒したかどうかを判断するのを補助することです。垂直方向の加速度が急激に変化した後、一定時間人間の活動がない場合（つまりその場に留まる場合）、センサーは高い確率で誰かが転倒して意識を失っていると判断します。

### Demo4: センサーにデータを送信する

ユーザーマニュアルに記載されている詳細に基づき、ユーザーはセンサーにコマンドフレームを送信して、センサーの特定の状態やモードを実際のニーズに応じてクエリまたは設定することができます。

センサーライブラリの例フォルダにある **MR60FDA1_Send_frame** という名前の .ino ファイルでは、デバイスIDをクエリするプログラムをセンサーに送信する方法が示されています。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// RX & TX に使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// ハードウェアシリアルも試すことができます
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x5F, 0x54, 0x43};

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");
}

void loop()
{
  // 繰り返し実行されるメインコードを記述
  radar.send_func(DevID_buff, 10, false);
  delay(50);                       // 遅延時間を長く設定しすぎると、レーダーから返されるデータフレームの受信に影響を与える可能性があります。
}
```

:::tip
もし XIAO ESP32 シリーズを使用していて、mmwave レーダーからデータのフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

この例のプログラムでは、`DevID_buff[10]` という配列が定義されており、クエリするデバイスIDの16進数が格納されています。1バイトごとに1つの位置に保存されています。

送信は `send_func()` によって行われます。渡されるパラメータは、送信するフレームの配列、配列の長さ、およびループ送信するかどうかです。

独自のコマンドフレームを送信する必要がある場合は、ユーザーマニュアルで提供されているフレーム形式に従って正しい配列を定義する必要があります。

:::tip
**チェックデジット「sum」の計算について**

すべてのデータフレームには、データが正確に送信または受信されることを保証するためのチェックサムビットがあります。チェックサムビットは通常、データフレームの最後から2番目のビットにあります。これは、チェックビットの前のすべてのビットを加算し、16進数で下位2桁を取ることで計算されます。
デバイスIDをクエリするデータフレームの例を見てみましょう。
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

チェックサムビットがデータフレーム全体の最後から2番目のビットにあることがわかります。次に、前の16進数をすべて加算します。

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

次に、その下位2桁を取る必要があります。それは **60** になります。したがって、このデータフレームのチェックサムは **60** です。センサーのIDを検索したい場合は、以下の配列を定義できます。

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

プログラムをアップロードします。シリアルモニターを開き、ボーレートを115200に設定すると結果が表示されるはずです。出力は以下の画像のようになるでしょう。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/9.png"/></div>

この時点で、返されたデータフレームを確認し、それがユーザーマニュアルに記載されている返されたデータフレームと一致しているかどうかを確認してください。

通常、センサーにコマンドを繰り返し送信する必要はありませんが、センサーが非常に速くメッセージを返信するため、センサーから返された正確なデータメッセージを受信できるかどうかを確信することはできません。この問題を解決する方法は2つあります。

- 上記の手順を数回再アップロードする。
- `send_func()` 関数の第3パラメータ（循環送信）を `true` に設定する。ただし、設定タイプのデータフレームを繰り返し送信すると **センサーがフリーズする可能性がある** ため、この機能は慎重に使用してください。センサーがフリーズした場合は、センサーの5V供給ピンを切断し、数秒待って機能を再開してください。

### Demo5: センサーをリセットする

センサーが異常を検知したり、センサーのすべての設定をクリアしたい場合は、この例に従ってセンサーをリセットすることができます。

以下の例のプログラムは、ライブラリの例フォルダにある **MR60FDA1_Reset_sensor** という名前のファイルにあります。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// RX & TX に使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// ハードウェアシリアルも試すことができます
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");

  radar.reset_func();
}

void loop()
{
  // 繰り返し実行されるメインコードを記述
}
```

:::tip
もし XIAO ESP32 シリーズを使用していて、mmwave レーダーからデータのフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

センサーのリセットは非常に簡単で、`reset_func()` を呼び出すだけです。リセットは**一度だけ実行**すればよいため、`Setup()` 関数内で使用します。

### デモ6: Arduino/Seeeduinoの使用

当ライブラリはArduino互換であり、手元にあるArduinoを使用してセンサーのプロジェクトを開発することができます。

MR60FDA1センサーはUARTシリアルポートを使用して通信します。以下の配線に従ってセンサーをArduinoに接続してください。

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

すべての関数は上記のデモ1からデモ5と同じ方法で適用されるため、この例では繰り返し説明しません。この例では、Arduinoのソフトシリアルポートを使用してセンサーからデータ情報を取得する方法の概要を示します。

:::tip
Arduinoのソフトシリアルポートに関する注意事項については、[公式Arduinoドキュメント](https://docs.arduino.cc/learn/built-in-libraries/software-serial)を参照してください。
:::

シリアルを出力とデータ送信の両方に使用することでデータが混乱するのを避けるため、Arduino側では通常ソフトシリアルポートを使用します。

ソフトシリアルポートライブラリのインポートとRXおよびTXピンの定義は、プログラム内で早めに行う必要があります。以下のプログラムでは、**A2** および **A3** ピンをソフトシリアルポートの **RX** および **TX** ピンとして定義しています。

```c
#include <SoftwareSerial.h>
// ソフトシリアルで使用可能な任意の2つのピンをRX & TXとして選択
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトシリアルを使用します
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);
```

また、`Setup()` 関数内でソフトシリアルポートのボーレートを設定することを忘れないでください。

```c
void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");
}
```

**デモ1** を例にすると、Arduinoを使用してセンサーから報告されたデータフレームを出力したい場合、完全なプログラムは以下の通りです。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

#include <SoftwareSerial.h>
// ソフトシリアルで使用可能な任意の2つのピンをRX & TXとして選択
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトシリアルを使用します
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");
}

void loop()
{
  // 繰り返し実行されるメインコードを記述
  radar.recvRadarBytes();           // レーダーデータを受信し処理を開始
  radar.showData();                 // シリアルポートに受信したデータフレームを出力
  delay(200);                       // プログラムの詰まりを防ぐために時間遅延を追加
}
```

### デモ7: PCへの直接接続によるデータ取得

センサー用に設計された上位コンピュータを使用する場合や、シリアルソフトウェアを使用して完全なデータフレームを取得したい場合、このルーチンを参照してください。

**UART to USB** デバイスを介してセンサーをコンピュータのUSBポートに直接接続します。配線は以下の表の通りです。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center">UART to USB</td>
     <td align="center"></td>
     <td align="center">MR60FDA1センサー</td>
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

シリアルデバッグアシスタントなどのソフトウェアを使用して、センサーが接続されているシリアルポートを選択します。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
MR60FDA1センサーは5Vの電源供給が必要です。そうでない場合、センサーが正常に動作しない可能性があります。
:::

接続が成功すると、センサーが一定のメッセージを送信し続けるのが確認できます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

同時に、ソフトウェアの送信機能を使用してセンサーにデータフレームを送信することもできます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
データ送信形式として **ASCII** を選択する場合、各データセットには **0x** を付ける必要があります。**HEX** を選択する場合、各データセットには **0x** を付ける必要はありません。
:::

## トラブルシューティング

### FAQ1: このセンサーは同じ環境で複数の人を同時に検出できますか？

> A: 利用不可。このセンサーは単一の生体対象にのみ使用できます。監視範囲内に複数の人や動物がいる場合、監視結果に影響を与える可能性があります。

### FAQ2: XIAO ESP32C3でシリアルモニターに何も表示されないのはなぜですか？

> XIAO ESP32C3のシリアルポート機能は一般的なArduinoハードウェアと完全には一致しておらず、Serial1を直接使用するとUSBシリアルポートが動作しない可能性があります。関連する適用例については、[XIAO ESP32C3のシリアル章](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/#serial)をご参照ください。

## リソース

- **[PDF]** [Universal Protocol](https://files.seeedstudio.com/wiki/60GHzradar/60GHz_mmWave_Sensor_Fall_Detection_Module_Pro-Universal_Protocol.pdf)
- **[PDF]** [ユーザーマニュアル V1.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60FDA1_user_manual-V1.3.pdf)
- **[PDF]** [Seeed Studio MMWave Sensor ケースデザイン](https://files.seeedstudio.com/wiki/60GHzradar/Seeed_Studio_MMWave_Sensor-Case_Design.pdf)
- **[EXE]** [上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>