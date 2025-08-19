---
description: 60GHz mmWave 静的呼吸および心拍
title: 60GHz mmWave 静的呼吸および心拍
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Radar_MR60BHA1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# 60GHz mmWave センサー - 人間の静的睡眠呼吸モニタリング (MR60BHA1)

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>


## 概要

MR60BHA1 60GHzレーダーモジュールはFMCW検出理論を適用し、高精度で個人の呼吸率と心拍率を同時に検出することを実現します。他のノイズの影響を受けずに完全にプライベートで安全な環境を提供します。これは、消費者向け電子機器、ヘルスケア、産業用途における標準的な生体レーダーシステムです。このWikiでは、その利用方法を紹介します。

### アプリケーション

- スマートホーム
- ヘルスケア
- 呼吸率検出
- 心拍率検出
- スマートホテル
- 医療アシスタント

### 特徴

- 有効理論: FMCW FM連続波信号に基づくレーダー検出を実現
- 標準アルゴリズム: 自動適応環境で人間の呼吸率と心拍リズムを同時に検知して出力
- 完璧なプライバシー保護: FMCWモニタリング技術を適用し、識別なしで監視能力を提供
- 健康に優しい動作状態: 人体に無害な低出力を実現
- 高い安定性: 温度、湿度、ノイズ、気流、ほこり、光などの環境影響に依存しない
- 高精度測定: 心拍精度85%、呼吸精度90%を達成
- 高い柔軟性のハードウェア設計レーダー: 二次開発をサポートし、さまざまなシナリオに適応可能

### 仕様

| パラメータ内容                 |  最小値 |  標準値 |  最大値 |  単位 |
|-----------------------------------|----------|----------|----------|-------|
|  **性能**                      |          |          |          |       |
|  検出距離 (胸部)               |  0.4     |          |  1.5       |  m    |
|  呼吸測定精度                  |          |  90      |          |  %    |
|  心拍測定精度                  |          |  95      |          |  %    |
|  リフレッシュ時間              |  1       |          |  30      |  S    |
|  観察セットアップ時間          |          |  20      |          |  S    |
|  **動作パラメータ**             |          |          |          |       |
|  動作電圧 (VCC)                |  4.6     |  5       |  6       |  V    |
|  動作電流 (ICC)                |          |  150     |          |  mA   |
|  動作温度 (TOP)                |  -20     |          |  60      |  ℃    |
|  保管温度 (TST)                |  -40     |          |  80      |  ℃    |
|  **送信パラメータ**                |          |          |          |       |
|  動作周波数 (fTX)              |  58      |  60      |  63.5    |  GHz  |
|  送信出力 (Pout)               |          |  6       |          |  dBm  |
|  **アンテナパラメータ**               |          |          |          |       |
|  アンテナゲイン (GANT)         |          |  4       |          |  dBi  |
|  水平ビーム (-3dB)             |  -20     |          |  20      |  o    |
|  垂直ビーム (-3dB)             |  -20     |          |  20      |  o    |

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを理解することが非常に重要です。以下の表は、60GHz mmWave 呼吸および心拍モジュールの特性に関する情報を提供します。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- インターフェース 1:
  - 5V ピンはセンサーの電源供給インターフェースです。
  - RX と TX はセンサーのデータ伝送インターフェースです。RX はシリアル受信、TX はシリアル送信を意味します。
  - 人の存在状態の出力インターフェース。これらの2つのピンのレベルを使用して、環境内の現在の人の動きを判断できます。
    - GP2 出力: 高レベル - 占有中、低レベル - 非占有。
    - GP1 出力: 高レベル - 活動中、低レベル - 静止中。
- インターフェース 2:
  - ファームウェア書き込みピン: GND/3.3V/SWD/SWC。
  - オーバーヘッド入出力ピン: GP3~GP6。

## はじめに

### ファームウェアバージョンの更新

mmWave センサーは長期間にわたる技術的な蓄積とユーザーから提供された貴重な提案を経て、元の製品を改良し、より正確で信頼性の高い監視結果と、より良いユーザー体験を提供するために進化してきました。

新しく出荷されるセンサーは、最新の製品体験を保証するためにデフォルトで最新のファームウェアが搭載されています。しかし、既存のユーザー体験を考慮して、最新のファームウェアと更新方法を提供し、最新技術を利用できるようにしています。

#### 一般的な方法 - J-link を使用してファームウェアを書き込む

誤ったファームウェアやレーダー異常、ファームウェアの不具合などに遭遇した場合、この方法を使用してファームウェアを再書き込みすることが最も効果的です。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードリンク |
|:----------------:|:----------------:|
| Jlink_MR60BHA1-V230104.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230104.bin) |
| Jlink_MR60BHA1-V230904.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230904.bin) |

:::caution
1. 製品の機能を慎重に確認してください。他の mmWave センサーと混同してこのファームウェアを書き込まないでください。そうしないと製品機能が異常になる可能性があり、その結果は自己責任となります。

2. ファームウェア更新方法によって使用するファームウェア内容が異なることに注意してください。ダウンロードするのは **J-link** を使用して書き込むファームウェアです。
:::

**レーダーを最新バージョンに更新する方法**

**ステップ1.** **Jlink** と **MR60BHA1** 60GHz mmWave センサーを準備します。

以下の図のように、デュポン線を使用してレーダーと Jlink を接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**ステップ2.** 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードリンク |
|:----------------:|:----------------:|
| JlinkV644e.rar | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**ステップ3.** **JlinkV644e.rar** を解凍し、内部の **JLink_Windows_V644e.exe** ファイルを開きます。

デフォルトのオプションに従ってインストールします。インストールが完了したら、**J-Flash V6.44e** ソフトウェアを起動します。

**ステップ4.** チップパッケージをインストールします。

**Pack_Segger_AT32F4xx_v1.3.3.zip** を解凍し、内部の **Segger_AT32F4xx_AddOn.exe** を開きます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

**ステップ5.** 新しいプロジェクトを作成します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

**AT32F403ARGT7** を見つけて選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**ステップ6.** レーダーファームウェア (.bin ファイル) をこのソフトウェアにドラッグ＆ドロップします。ウィンドウがポップアップし、デフォルトの開始アドレス 0x8000000 を使用します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**ステップ7.** **Target** -> **Connect** をクリックします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

接続が成功すると、「Connected successfully」と表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

ファームウェアを消去: **Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

ファームウェアをアップグレード: **Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

これでファームウェアの更新が完了です。

#### UART 経由でファームウェアを更新する

J-link が高価であることを考慮し、レーダーファームウェアを更新するだけの大多数のユーザーにとって J-link を購入するのは過剰であるため、UART を使用した更新方法を提供します。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードリンク |
|:----------------:|:----------------:|
| UART_MR60BHA1-230104.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230104.bin) |
| UART_MR60BHA1-230904.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230904.bin) |

:::caution
1. 製品の機能を慎重に確認してください。他の mmWave センサーと混同してこのファームウェアを書き込まないでください。そうしないと製品機能が異常になる可能性があり、その結果は自己責任となります。

2. ファームウェア更新方法によって使用するファームウェア内容が異なることに注意してください。ダウンロードするのは **UART** を使用して書き込むファームウェアです。
:::


3. レーダーのファームウェアバージョンが**少なくとも G60SM1SYv010003**であることを確認してください。そうでない場合、UARTを使用してファームウェアをアップグレードするとレーダーが無効になる可能性があります。その場合、J-linkを使用してファームウェアを書き込む必要があります。

ファームウェアバージョン番号情報は、レーダーにコマンド `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` を送信することで照会できます。レーダーから報告されたデータは文字列として表示され、以下のような結果が得られます。

`G60SM1SYv010009` はレーダーが報告するモデル番号であり、`10009` がバージョン番号です。これは、このセンサーがUARTアップグレードをサポートしていることを意味します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/20.png"/></div>
:::

**レーダーを最新バージョンにアップデートする方法**

**ステップ 1**. **UART to USB** と **MR60BHA1** 60GHz mmWaveセンサーを準備します。

レーダーとUART to USBをデュポンワイヤーで接続し、以下の図のように接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**ステップ 2**. 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**ステップ 3**. PackageMake-v1.1.1.zip を解凍し、内部の PackageMake-v1.1.1.exe ファイルを開きます。

センサーを接続したUART to USBをコンピュータに接続し、ソフトウェアの左上のギアアイコンをクリックしてポート番号を選択し、ボーレートを115200に設定して右下の確認ボタンをクリックします。（ポート番号が見つからない場合は接続を確認し、左下のリフレッシュボタンをクリックして再試行してください）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**ステップ 4**. センサーの接続

上記のようにシリアルポートを設定した後、右上の2番目のアイコンをクリックすると、ポートが正しく選択されている場合、レーダーからの生データが表示されます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**ステップ 5**. ファームウェアのアップデート

左上の最後のアイコンを左クリックすると、ファームウェアを選択するウィンドウが表示されます。ダウンロードしたファームウェアバージョンを選択してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

選択が完了すると、選択したファイルパスがソフトウェアに表示されます。使用しているセンサーと一致するファームウェアバージョンとモデルを再確認してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/17.png"/></div>

ファームウェアをアップグレードするには、ソフトウェアの左上の最後の画像をダブルクリックしてください。これにより、ファームウェアがセンサーにダウンロードされ始めます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

進行バーが完了するのを待つと、ファームウェアの更新が完了します。

### 上位コンピュータの使用

センサーを **UART to USB** デバイスを介してコンピュータのUSBポートに直接接続します。配線は以下の表に示されています。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr>
 <tr>
     <td align="center">UART to USB</td>
     <td align="center"></td>
        <td align="center">MR60BHA1 センサー</td>
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

上記のシリアルソフトウェアに加えて、レーダー専用に設計された[上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)を直接使用することもできます。

:::tip
古いバージョンのOPやファームウェアを使用している場合は、[最新バージョンにアップグレード](#firmware-version-updates)して、ソフトウェアプロトコルとWikiコンテンツを最大限に活用してください。
:::

以下の5つのセクションでは、ソフトウェアの各部分の役割を説明します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/1.png"/></div>

1. 接続設定

    センサーがコンピュータに接続されているポートを選択します。通常、**シリアルポートリフレッシュボタン**をクリックしてポートを更新してから選択する必要があります。シリアルポートが正しく選択されると、円4内でデータが自動的に更新されます（データがある場合）。

2. 機能設定

    - **デバッグ**: この機能をオンにすると、リアルタイムの生データがソフトウェアに出力されます。これは図の円3内のウィンドウです。
    - **生データ保存**: クリックすると、元のデータをローカルコンピュータに保存することができます。ただし、このオプションはボタンをクリックした後に新しいデータを保存するわけではなく、最新の履歴データのみを保存します。
    - **睡眠データ保存**: クリックすると、睡眠に関連する生データ情報を保存するパスを選択できます。他のデータは保存されません。ただし、このオプションもボタンをクリックした後に新しいデータを保存するわけではなく、最新の履歴データのみを保存します。

3. シリアルモニター

このウィンドウは、円2の**デバッグ**オプションがチェックされている場合に表示され、その時点でリアルタイムのセンサーデータフレームが表示されます。下部ではセンサーにコマンドフレームを送信することができます。送信またはクエリ可能なコマンドは、センサーのユーザーマニュアルに記載されています。

4. グラフィック表示

    これはリアルタイムの折れ線グラフを表示します。表示されるデータ内容は、それぞれ呼吸率、心拍数、および身体のパラメータです。横軸は時間、縦軸は対応するデータを示します。

5. 状態と方向

    このエリアでは、人の存在状態と人体の方向を観察することができます。人体の方向データは参考情報として提供されます。

## Arduinoを使用したセンサー開発

### Arduinoライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

この例で使用されるライブラリコードは、以下のアイコンをクリックしてダウンロードできます。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### 機能

スケッチの開発を始める前に、ライブラリの利用可能な機能を確認しましょう。

- `void recvRadarBytes()` —— この関数は、センサーのデータプロトコルにおけるフレームヘッダーとフレームテールに基づいて、UART経由でセンサーから報告されるデータフレームを収集します。`showData()`関数と併用することで、収集されたデータ情報をシリアルポート経由で出力できます。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void showData()` —— この関数は、センサーから報告された完全なデータフレームを一度にシリアルポート経由で出力するためのもので、`recvRadarBytes()`関数と併用する必要があります。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void HumanExis_Func()` —— この関数は、センサーのデータフレームを解析し、人の存在状態に関する関連データを出力する役割を果たします。

  - **入力パラメータ:** なし

  - **戻り値:**

    - `unsigned int sensor_report` —— 返される値は、解析されたデータフレームが属する状態クラスを示します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。人の動きに関する情報は変化が発生した場合のみ報告されます。

    - `int bodysign_val` —— 返される値は、人の動きのパラメータ値を示します。この値は1秒ごとに報告されます。

    - `float distance` —— センサーが現在の人体までの距離を測定し、その値をメートル単位で返します。この値は2秒ごとに報告されます。

    - `float Dir_x, Dir_y, Dir_z` —— センサーが検出した人体の位置情報を示します。人体の位置情報はメートル単位で正負の値を持ちます。この値は2秒ごとに報告されます。

- `void Breath_Heart()` —— この関数は、センサーからの呼吸および心拍データを解析し、関連する値を返します。

  - **入力パラメータ:** なし

  - **戻り値:**

    - `unsigned int sensor_report` —— 返される値は、解析されたデータフレームが属する状態クラスを示します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。

    - `unsigned int heart_rate` —— 心拍数値。3秒ごとに報告されます。値の範囲は0〜100です。

    - `unsigned int heart_point_1, heart_point_2, heart_point_3, heart_point_4, heart_point_5` —— 心拍数波形データ。5バイトはリアルタイムで1秒間に5つの値を表し、波形は正弦波データです。中央軸は128で、心拍数強度が0の場合は128として表示されます。この値は1秒ごとに報告されます。

    - `unsigned int breath_rate` —— 呼吸値。3秒ごとに報告されます。値の範囲は0〜20です。

    - `unsigned int breath_point_1, breath_point_2, breath_point_3, breath_point_4, breath_point_5` —— 呼吸率波形データ。5バイトはリアルタイムで1秒間に5つの値を表し、波形は正弦波データです。中央軸は128で、呼吸率強度が0の場合は128として表示されます。この値は1秒ごとに報告されます。

- `void SleepInf_Decode()` —— この関数は、センサーが報告する睡眠データ情報を解析する役割を果たします。監視対象者がベッドに入り、5分以上眠っている場合にのみ有効です。この関数を使用する際は、睡眠状態転送モードが有効になっていることを確認してください。

  - **入力パラメータ:** なし

  - **戻り値:**

    - `unsigned int sensor_report` —— 返される値は、解析されたデータフレームが属する状態クラスを示します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。

    - `unsigned int awake_time` —— 監視対象者がベッドに入った場合の覚醒時間を示します。この値は他の睡眠状態データとともに10分ごとに報告されます。

    - `unsigned int light_time` —— 監視対象者がすでにベッドにいる場合の浅い睡眠時間を示します。この値は他の睡眠状態データとともに10分ごとに報告されます。

    - `unsigned int deep_time` —— 監視対象者がすでにベッドにいる場合の深い睡眠時間を示します。この値は他の睡眠状態データとともに10分ごとに報告されます。

    - `unsigned int sleep_score` —— 睡眠の質を示すスコア。この情報は睡眠プロセスの終了時に報告されます。

- `boolean existence` —— この値は人間の存在情報を示します。戻り値が True の場合は人間が存在することを示し、戻り値が False の場合は人間が存在しないことを示します。この値は他の睡眠状態データとともに10分ごとに報告されます。

- `unsigned int sleep_status` —— この値は睡眠状態を示します。睡眠状態には、ベッドを離れる、覚醒、浅い睡眠、深い睡眠の4つがあります。この値は他の睡眠状態データとともに10分ごとに報告されます。

- `unsigned int breath_rate` —— 10分間の平均心拍数。この値は他の睡眠状態データとともに10分ごとに報告されます。

- `unsigned int heart_rate` —— 10分間の平均呼吸数。この値は他の睡眠状態データとともに10分ごとに報告されます。

- `unsigned int turn_num` —— 10分間の寝返り回数。この値は他の睡眠状態データとともに10分ごとに報告されます。

- `unsigned int substantial_move_ratio` —— 10分間の大きな動きの割合。この値は他の睡眠状態データとともに10分ごとに報告されます。

- `unsigned int samll_move_ratio` —— 10分間の小さな動きの割合。この値は他の睡眠状態データとともに10分ごとに報告されます。

- `unsigned int apnea_num` —— 10分間の無呼吸回数。この値は他の睡眠状態データとともに10分ごとに報告されます。

- `unsigned int sleep_time` —— 睡眠の総時間。センサーが睡眠プロセスが終了したと判断した際に報告されます。

- `unsigned int awake_time_radio` —— 覚醒している時間の割合。センサーが睡眠プロセスが終了したと判断した際に報告されます。

- `unsigned int light_time_radio` —— 浅い睡眠に費やした時間の割合。センサーが睡眠プロセスが終了したと判断した際に報告されます。

- `unsigned int deep_time_radio` —— 深い睡眠に費やした時間の割合。センサーが睡眠プロセスが終了したと判断した際に報告されます。

- `unsigned int outbed_time` —— ベッドから離れていた時間。センサーが睡眠プロセスが終了したと判断した際に報告されます。

- `unsigned int outbed_num` —— ベッドを離れた回数。センサーが睡眠プロセスが終了したと判断した際に報告されます。

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— この関数はクエリフレームとコマンドフレームを送信するために使用されます。

  - **入力パラメータ:**

    - `buff` —— センサーに送信したいデータフレーム。

    - `len` —— センサーに送信したいデータフレームの長さ。

    - `cyclic` —— 循環送信スイッチ。デフォルトは false で、データフレームを循環的に送信したい場合は **true** に設定できます。

  - **戻り値:** なし

- `void ModeSelect_fuc(int mode)` —— この関数はセンサーの動作モードを選択するために使用されます。動作モードには、睡眠状態送信モードとリアルタイムデータ送信モードの2つがあります。睡眠状態送信モードでは、睡眠モニタリング機能がオンになり（`SleepInf_Decode()` が有効）、リアルタイムデータ送信モードでは睡眠モニタリング機能がオフになり（`SleepInf_Decode()` が無効）、波形データが報告されます。

  - **入力パラメータ:**

    - `mode` —— 選択されたモード番号。1はリアルタイムデータ送信モードを示し、2は睡眠状態送信モードを示します。

  - **戻り値:** なし

- `void reset_func()` —— この関数はセンサーをリセットするために使用されます。

  - **入力パラメータ:** なし

  - **戻り値:** なし

### デフォルト変数

```c
#define MESSAGE_HEAD1 0x53      //データフレームヘッダー1
#define MESSAGE_HEAD2 0x59      //データフレームヘッダー2

#define MESSAGE_END1  0x54      //データフレーム終了1
#define MESSAGE_END2  0x43      //データフレーム終了2

#define HUMAN_PSE_RADAR 0x80    //人間の存在データ

#define PRESENCE_INF 0x01       //存在情報
#define SOMEONE_HERE 0x01       //人がいる
#define NOONE_HERE 0x00         //人がいない

#define MOVE_INF 0x02           //動き情報
#define PSE_NONE 0x00           //なし
#define STATIONARY 0x01         //人が静止している
#define MOVEMENT 0x02           //人が動いている

#define BODY_SIG 0x03           //身体の動き情報

#define DISTANCE 0x04           //検出対象者との距離

#define DIRECTIONS 0x05         //身体の向き

#define HEART_INF 0x85          //心拍数情報

#define HEART_RATE 0x02         //心拍数

#define HEART_RATE_WAVE 0x05    //心拍数波形（現在は解析なし）

#define BREATH_RATE_RADAR 0x81  //呼吸心拍数データ

#define BREATH_INF 0x01         //呼吸データ
#define BREATH_NORMAL 0x01      //正常な呼吸
#define BREATH_RAPID 0x02       //急性呼吸異常
#define BREATH_SLOW 0x03        //遅い心拍
#define BREATH_NONE 0x04        //レーダー検出なし

#define BREATH_VAL 0x02         //呼吸値

#define BREATH_WAVE 0x05        //呼吸波形（現在は解析なし）

#define SLEEP_INF 0x84          //睡眠情報

#define INOUT_BED 0x01          //ベッド内外
#define OUT_BED 0x00            //ベッド外
#define IN_BED 0x01             //ベッド内
#define INOUT_NONE 0x02         //なし（リアルタイム検出モードで表示）

#define SLEEP_STATE 0x02        //睡眠状態
#define DEEP_SLEEP 0x00         //深い睡眠
#define LIGHT_SLEEP 0x01        //浅い睡眠
#define AWAKE 0x02              //覚醒
#define SLEEP_NONE 0x03         //なし（リアルタイム検出モードで表示）

#define AWAKE_TIME 0x03         //覚醒時間

#define LIGHTSLEEP_TIME 0x04    //浅い睡眠時間

#define DEEPSLEEP_TIME 0x05     //深い睡眠時間

#define SLEEP_SCORE 0x06        //睡眠品質スコア

#define SLEEP_STATUE 0x0C       //睡眠統合状態報告

#define SLEEP_QUALITY 0x0D      //睡眠品質の包括的情報報告

#define SLEEP_ERROR 0x0E        //異常睡眠報告

#define SLEEP_LESS4H 0x00        //睡眠時間が4時間未満
#define SLEEP_OVER12H 0x01       //睡眠時間が12時間以上
#define SLEEP_LONGTIMENOONE 0x02 //異常状況、長時間誰もいない
#define SLEEP_ERRORNONE 0x03     //なし

#define reset_frame_len 10      //リセットデータフレームの長さ
//リセットデータフレーム
const unsigned char breath_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

#define mode_frame_len 10       //モード選択コマンドフレームの長さ
//モード選択コマンドフレーム
const unsigned char realtime_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x00, 0x40, 0x54, 0x43};
const unsigned char sleepstatus_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x01, 0x41, 0x54, 0x43};

//戻り状態、Arduinoで使用
//sensor_reportの可能な値
#define NOONE 0x01
#define SOMEONE 0x02
#define NONEPSE 0x03
#define STATION 0x04
#define MOVE 0x05
#define BODYVAL 0x06
#define DISVAL 0x07
#define DIREVAL 0x08

#define HEARTRATEVAL 0x09
#define HEARTRATEWAVE 0x10
#define BREATHNOR 0x11
#define BREATHRAPID 0x12
#define BREATHSLOW 0x13
#define BREATHNONE 0x14
#define BREATHVAL 0x15
#define BREATHWAVE 0x16

#define OUTBED 0x17
#define INBED 0x18
#define NOINOUT 0x19
#define SLEEPAWAKE 0x20
#define SLEEPLIGHT 0x21
#define SLEEPDEEP 0x22
#define SLEEPNONE 0x23
#define AWAKETIME 0x24
#define LIGHTTIME 0x25
#define DEEPTIME 0x26
#define SLEEPSCORE 0x27
#define SLEEPSTATUE 0x28
#define SLEEPQUALITY 0x29
#define SLEEPLESS4H 0x30
#define SLEEPOVER12H 0x31
#define LONGTIMENOONE 0x32
#define ERRORNONE 0x33


unsigned int sensor_report = 0, bodysign_val = 0, awake_time = 0, light_time = 0, deep_time = 0, sleep_score = 0, turn_num = 0;
unsigned int heart_rate = 0, heart_point_1 = 0, heart_point_2 = 0, heart_point_3 = 0, heart_point_4 = 0, heart_point_5 = 0;
unsigned int breath_rate = 0, breath_point_1 = 0, breath_point_2 = 0, breath_point_3 = 0, breath_point_4 = 0, breath_point_5 = 0;
unsigned int substantial_move_ratio = 0, samll_move_ratio = 0, apnea_num = 0, sleep_status = 0, sleep_time = 0;
unsigned int awake_time_radio = 0, light_time_radio = 0, deep_time_radio = 0;
unsigned int outbed_time = 0, outbed_num = 0;
float distance = 0;
float Dir_x = 0, Dir_y = 0, Dir_z = 0;
boolean existence;
```

### インストール

**ステップ 1.** Arduino ソフトウェアをインストールする必要があります。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**ステップ 2.** Arduino アプリケーションを起動します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**ステップ 3.** 開発ボードのモデルを選択し、Arduino IDE に追加します。

- **Seeeduino V4.2** を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を参照して追加を完了してください。

- **Seeeduino XIAO** を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を参照して追加を完了してください。

- **XIAO RP2040** を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)を参照して追加を完了してください。

- **XIAO BLE** を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照して追加を完了してください。

- **XIAO ESP32C3** を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup)を参照して追加を完了してください。

:::caution
**XIAO nRF52840** を使用する場合は、**Seeed nRF52 mbed-enabled Boards** を選択してください。そうしないと、プログラム実行時にエラーが報告される可能性があります。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**ステップ 4.** Arduino コードライブラリをインストールします。

まず、[GitHub](https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor)からコードベースを取得し、ローカルコンピュータにダウンロードします。

ZIP ライブラリをダウンロードしたら、Arduino IDE を開き、**スケッチ > ライブラリを含める > .ZIP ライブラリを追加** をクリックします。ダウンロードした ZIP ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **ライブラリがライブラリに追加されました** と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino の例

ライブラリをインストールし、基本的な機能を理解したので、XIAO BLE の動作を確認するためにいくつかの例を実行してみましょう。

### 必要な材料

以下の例を完了する前に、以下の材料を準備する必要があります。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**60GHz MR60BHA1 センサー**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm to 2.54mm ピッチリボンケーブル**|

**ステップ 1.** メインボードを介してデバイスをコンピュータに接続します。配線図は以下の表に示されています。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/60GHzradar/30.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Seeed Studio XIAO nRF52840</td>
      <td align="center" />
      <td align="center">MR60BHA1 センサー</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">D6</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">D7</td>
    </tr>
  </tbody></table>

**ステップ 2.** Arduino IDE の左上のメニューバーで **ツール** を選択し、使用している開発ボードの種類を選択し、対応するシリアルポートを選択します。

:::tip
**MacOS** を使用している場合、デバイスのシリアルポート名は通常 **/dev/cu.usbmodem xxx** で始まり、デバイス名で終わります。**Windows** を使用している場合、デバイスのシリアルポート名は通常 **COM** で始まり、デバイス名で終わります。
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

この例では、人気製品 XIAO BLE を使用してレーダーの動作をデモンストレーションします。

### デモ1 生データのエクスポート

この例では、センサーがシリアルポート経由で報告する生データを出力するプロセスを案内します。

以下の例のプログラムは、ライブラリの例フォルダにある **MR60BHA1_print_rawdata** という名前のものです。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// ソフトウェアシリアルで RX & TX に使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// ハードウェアシリアルも試すことが可能
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // 初回実行時のセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");
}

void loop()
{
  // 繰り返し実行されるメインコードを記述
  radar.recvRadarBytes();           // レーダーデータを受信し処理を開始
  radar.showData();                 // シリアルポートに受信データフレームを出力
  delay(200);                       // プログラムの詰まりを防ぐために遅延を追加
}
```

:::tip
もし XIAO ESP32 シリーズを使用しており、mmwave レーダーからデータフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

このプログラムでは、XIAO nRF52840 のハードウェア **Serial1** ポートを使用してセンサーに接続し、ハードウェア **Serial** ポートを使用してデータを出力します。そのため、初期化関数 `Setup()` 内でこのシリアルポートを個別に初期化する必要があります。

メインの `loop()` 関数では、センサーからデータフレームを受信するために `recvRadarBytes()` 関数を使用し、受信したデータフレームをシリアルポートを介して出力するために `showData()` 関数を使用します。

このプログラムでは、2つのデータフレームの受信と出力の間に間隔を設けることが重要です。これにより、メインボードの詰まりを防ぐことができます。この間隔は **150ms** 以上である必要があります。

つまり、メインボードがセンサーから報告されるすべてのデータフレームを受信することはできませんが、センサーが報告するフレーム数は非常に多く頻繁であるため、環境を判断するためにセンサーを使用する精度には影響しません。

プログラムをアップロードし、シリアルモニターを115200のボーレートで開くと、以下の画像のような結果が表示されるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/2.png"/></div>

### デモ2: 人体存在検出機能の使用

この例では、人体存在検出機能を使用する方法を説明し、シリアルモニターを通じてこの機能のすべての値を出力します。

以下の例のプログラムは、ライブラリの例フォルダにある **MR60BHA1_human_existence_inf_output** に含まれています。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// ソフトウェアシリアルで使用可能な任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// ハードウェアシリアルも試すことが可能
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // 初期化コードをここに記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");
}

void loop()
{
  // 繰り返し実行されるメインコード
  radar.HumanExis_Func();           // 人体存在情報の出力
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case NOONE:
        Serial.println("誰もいません。");
        Serial.println("----------------------------");
        break;
      case SOMEONE:
        Serial.println("誰かがいます。");
        Serial.println("----------------------------");
        break;
      case NONEPSE:
        Serial.println("人体活動メッセージはありません。");
        Serial.println("----------------------------");
        break;
      case STATION:
        Serial.println("誰かが停止しています。");
        Serial.println("----------------------------");
        break;
      case MOVE:
        Serial.println("誰かが動いています。");
        Serial.println("----------------------------");
        break;
      case BODYVAL:
        Serial.print("人体のサインパラメータは: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("----------------------------");
        break;
      case DISVAL:
        Serial.print("センサーが人体までの距離を判断しました: ");
        Serial.print(radar.distance, DEC);
        Serial.println(" m");
        Serial.println("----------------------------");
        break;
      case DIREVAL:
        Serial.print("センサーが人体との方向データを判断しました -- x: ");
        Serial.print(radar.Dir_x);
        Serial.print(" m, y: ");
        Serial.print(radar.Dir_y);
        Serial.print(" m, z: ");
        Serial.print(radar.Dir_z);
        Serial.println(" m");
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       // プログラムの詰まりを防ぐために時間遅延を追加
}
```

:::tip
もし XIAO ESP32 シリーズを使用しており、mmwave レーダーからデータフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

この例では、人体存在検出機能は `HumanExis_Func()` 関数によって実装されています。プログラムの基本的なロジックは、`HumanExis_Func()` 関数がセンサーによって報告された状態情報を `sensor_report` 変数に割り当てることです。その後、`sensor_report` の値に基づいて、その状態のすべての値をシリアルポートを通じて出力します。

注意点として、`sensor_report` はインデントされたシリアルポートからのデータ出力に対応しています。例えば、サインパラメータを表す `bodysign_val` 変数は `sensor_report` が `BODYVAL` の場合にのみ有効であり、センサーが報告する他の `sensor_report` には存在しません。

プログラムをアップロードし、シリアルモニターを115200のボーレートで開くと、以下の画像のような結果が表示されるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/3.png"/></div>

### デモ3: 静止している人の呼吸と心拍機能の使用

この例では、`Breath_Heart()` 関数を使用して静止している人体の呼吸と心拍数を検出します。

:::tip
私たちの重点は静止している人体の呼吸と心拍数の検出です。人体が動いている間は製品を使用しないでください。センサーの心拍数と呼吸を制限しています。最大心拍数は **100を超えず**、最大呼吸数は **25を超えません**。
:::

以下の例のプログラムは、ライブラリの例フォルダにある **MR60BHA1_Breath_heartbeat_inf_output** に含まれています。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// ソフトウェアシリアルで使用可能な任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// ハードウェアシリアルも試すことが可能
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // 初期化コードをここに記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");

  // radar.ModeSelect_fuc(1);  //1: リアルタイム送信モード、2: スリープ状態モード
  // モード設定後、データが返されない場合はセンサーの電源を再投入する必要があるかもしれません。
}

void loop()
{
  // 繰り返し実行されるメインコード
  radar.Breath_Heart();           // 呼吸と心拍情報の出力
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("センサーが監視した現在の心拍数は: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  // リアルタイムデータ転送モードがオンの場合のみ有効
        Serial.print("心拍数波形(正弦波) -- 点1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", 点2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", 点3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", 点4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", 点5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("センサーが現在の呼吸速度が正常であることを検出しました。");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("センサーが現在の呼吸速度が速すぎることを検出しました。");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("センサーが現在の呼吸速度が遅すぎることを検出しました。");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("まだ呼吸情報がありません。お待ちください...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("センサーが監視した現在の呼吸速度は: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  // リアルタイムデータ転送モードがオンの場合のみ有効
        Serial.print("呼吸速度波形(正弦波) -- 点1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", 点2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", 点3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", 点4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", 点5 : ");
        Serial.println(radar.breath_point_5);
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

プログラムをアップロードし、シリアルモニターを115200のボーレートで開くと結果が表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/4.png"/></div>

:::caution
波形データを確認したい場合は、センサーをリアルタイムデータ送信モードに切り替えてください。モードを切り替えた後、センサーを再度電源を入れる必要がある場合があります。
:::

### Demo4: スリープ機能の使用

この例では、`SleepInf_Decode()` 関数を使用して睡眠に関する情報を取得する方法を説明します。この例を使用する前に、あなたまたはテスト対象者がベッドに入る準備ができていることを確認してください。

:::note
デフォルトでは、センサーはスリープ状態送信モードになっています。このモードでは、睡眠監視機能がオンになります。リアルタイムデータ送信モードに切り替えると、睡眠データが利用できなくなる場合があります。転送モードを変更したい場合は、`ModeSelect_fuc()` 関数を使用できます。使用例は、ライブラリの例フォルダ内の **MR60BHA1_Transfer_mode_selection** にもあります。モードを切り替えた後、センサーを再度電源を入れる必要がある場合があります。
睡眠に関連するデータは、対象者がベッドにいる場合に報告されます。現在のファームウェアでは、対象者がベッドにいる状態が5分間続いた後にベッドにいると判断するようになっています。
:::

以下の例のプログラムは、ライブラリの例フォルダ内の **MR60BHA1_Sleep_inf_output** にあります。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// ソフトウェアシリアルで使用可能な任意の2つのピンを選択してRX & TXに設定
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// ハードウェアシリアルも試すことができます
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");
}

void loop()
{
  // 繰り返し実行されるメインコードを記述
  radar.SleepInf_Decode();           //睡眠関連情報の出力。監視対象者がベッドに5分間いるとデータ出力が開始されます。
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case OUTBED:
        Serial.println("センサーが現在ベッドを離れている人を検出しました。");
        Serial.println("----------------------------");
        break;
      case INBED:
        Serial.println("センサーが現在ベッドにいる人を検出しました。");
        Serial.println("----------------------------");
        break;
      case NOINOUT:
        Serial.println("ベッドに入るまたは出る対象者が検出されていません。");
        Serial.println("----------------------------");
        break;
      case SLEEPAWAKE:
        Serial.println("センサーが監視対象者が目覚めていることを検出しました。");
        Serial.println("----------------------------");
        break;
      case SLEEPLIGHT:
        Serial.println("センサーが監視対象者が浅い睡眠状態にあることを検出しました。");
        Serial.println("----------------------------");
        break;
      case SLEEPDEEP:
        Serial.println("センサーが監視対象者が深い睡眠状態にあることを検出しました。");
        Serial.println("----------------------------");
        break;
      case SLEEPNONE:
        Serial.println("対象者の睡眠状態が検出されていません。");
        Serial.println("----------------------------");
        break;
      case AWAKETIME:
        Serial.print("センサーが監視した目覚めている時間は: ");
        Serial.print(radar.awake_time);
        Serial.println(" 分");
        Serial.println("----------------------------");
        break;
      case LIGHTTIME:
        Serial.print("センサーが監視した浅い睡眠時間は: ");
        Serial.print(radar.light_time);
        Serial.println(" 分");
        Serial.println("----------------------------");
        break;
      case DEEPTIME:
        Serial.print("センサーが監視した深い睡眠時間は: ");
        Serial.print(radar.deep_time);
        Serial.println(" 分");
        Serial.println("----------------------------");
        break;
      case SLEEPSCORE:
        Serial.print("センサーが判断した睡眠スコアは: ");
        Serial.println(radar.sleep_score);
        Serial.println("----------------------------");
        break;
      case SLEEPSTATUE:
        Serial.println("睡眠統合状態情報 -- ");
        Serial.print("人の存在: ");
        if(radar.existence)Serial.println("人が存在");
        else Serial.println("人が存在しない");
        Serial.print("睡眠状態: ");
        if(radar.sleep_status == SLEEPDEEP)Serial.println("深い睡眠");
        else if(radar.sleep_status == SLEEPLIGHT)Serial.println("浅い睡眠");
        else if(radar.sleep_status == SLEEPAWAKE)Serial.println("目覚めている");
        else if(radar.sleep_status == SLEEPNONE)Serial.println("ベッドから離れている");
        Serial.print("平均呼吸数: ");
        Serial.println(radar.breath_rate);
        Serial.print("平均心拍数: ");
        Serial.println(radar.heart_rate);
        Serial.print("睡眠中の寝返り回数: ");
        Serial.println(radar.turn_num);
        Serial.print("睡眠中の大きな動きの割合: ");
        Serial.println(radar.substantial_move_ratio);
        Serial.print("睡眠中の小さな動きの割合: ");
        Serial.println(radar.samll_move_ratio);
        Serial.print("無呼吸の回数: ");
        Serial.println(radar.apnea_num);
        Serial.println("----------------------------");
        break;
      case SLEEPQUALITY:
        Serial.println("睡眠の質情報 -- ");
        Serial.print("睡眠スコア: ");
        Serial.println(radar.sleep_score);
        Serial.print("総睡眠時間: ");
        Serial.print(radar.sleep_time);
        Serial.println(" 分");
        Serial.print("目覚めている時間の割合: ");
        Serial.println(radar.awake_time_radio);
        Serial.print("浅い睡眠時間の割合: ");
        Serial.println(radar.light_time_radio);
        Serial.print("深い睡眠時間の割合: ");
        Serial.println(radar.deep_time_radio);
        Serial.print("ベッドから離れていた総時間: ");
        Serial.print(radar.outbed_time);
        Serial.println(" 分");
        Serial.print("ベッドから離れた回数: ");
        Serial.println(radar.outbed_num);
        Serial.print("睡眠中の寝返り回数: ");
        Serial.println(radar.turn_num);
        Serial.print("平均呼吸数: ");
        Serial.println(radar.breath_rate);
        Serial.print("平均心拍数: ");
        Serial.println(radar.heart_rate);
        Serial.print("無呼吸の回数: ");
        Serial.println(radar.apnea_num);
        Serial.println("----------------------------");
        break;
      case SLEEPLESS4H:
        Serial.print("監視対象者の睡眠時間が4時間未満です。");
        Serial.println("----------------------------");
        break;
      case SLEEPOVER12H:
        Serial.print("監視対象者の睡眠時間が12時間を超えました。");
        Serial.println("----------------------------");
        break;
      case LONGTIMENOONE:
        Serial.print("長時間にわたり人が存在しない異常状態。");
        Serial.println("----------------------------");
        break;
      case ERRORNONE:
        Serial.print("異常情報なし。");
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //プログラムの詰まりを防ぐために時間遅延を追加
}
```

:::tip
もし XIAO ESP32 シリーズを使用しており、mmwave レーダーからデータのフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

プログラムをアップロードします。シリアルモニターを開き、ボーレートを 115200 に設定すると結果が表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/6.png"/></div>

### デモ5: センサーにデータを送信する

ユーザーマニュアルに記載されている詳細に基づき、ユーザーはセンサーにコマンドフレームを送信して、センサーの特定の状態やモードを実際のニーズに応じてクエリまたは設定することができます。

センサーライブラリの例フォルダにある **MR60BHA1_Send_frame** という名前の .ino ファイルでは、デバイス ID をクエリするプログラムをセンサーに送信する方法が示されています。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// ソフトウェアシリアルで RX & TX に使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// ハードウェアシリアルも試すことができます
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x5F, 0x54, 0x43};

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行を開始します。

  Serial.println("Readly");
}

void loop()
{
  // 繰り返し実行されるメインコードを記述
  radar.send_func(DevID_buff, 10, false);
  delay(50);                       // 遅延時間を長く設定しすぎないでください。レーダーから返されるデータフレームの受信に影響を与える可能性があります。
}
```

:::tip
もし XIAO ESP32 シリーズを使用しており、mmwave レーダーからデータのフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

この例のプログラムでは、`DevID_buff[10]` という配列が定義されており、クエリデバイス ID の16進数が格納されています。1バイトごとに1つの位置に保存されています。

送信は `send_func()` によって行われます。渡されるパラメータは送信するフレームの配列、配列の長さ、およびループ送信するかどうかです。

独自のコマンドフレームを送信する必要がある場合は、ユーザーマニュアルで提供されているフレーム形式に従って正しい配列を定義する必要があります。

:::tip
**チェックデジット「sum」の計算について**

すべてのデータフレームには、データが正確に送信または受信されることを保証するためのチェックサムビットがあります。チェックサムビットは通常、データフレームの最後から2番目のビットにあります。これは、チェックビットに先行するすべてのビットを加算し、16進数で下位2桁を取得することで計算されます。
デバイス ID をクエリするデータフレームの例を見てみましょう。
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

チェックサムビットがデータフレーム全体の最後から2番目のビットにあることがわかります。次に、前の16進数をすべて加算します。

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

次に、その下位2桁を取得する必要があります。それは **60** になります。したがって、このデータフレームのチェックサムは **60** です。センサーの ID を検索したい場合は、以下の配列を定義できます。

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

プログラムをアップロードします。シリアルモニターを開き、ボーレートを 115200 に設定すると結果が表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/5.png"/></div>

この時点で、返されたデータフレームを確認し、それがユーザーマニュアルに記載されている返されたデータフレームと一致するかどうかを確認してください。

通常、コマンドをセンサーに繰り返し送信する必要はありませんが、センサーが非常に速くメッセージを返信するため、センサーから返された正確なデータメッセージを受信できるかどうかを確実にすることはできません。この問題を解決する方法は2つあります。

- 上記の手順を数回再アップロードする。
- `send_func()` 関数の第3パラメータ（循環送信）を `true` に設定する。ただし、設定タイプのデータフレームを繰り返し送信すると **センサーがフリーズする可能性がある** ため、この機能は慎重に使用してください。センサーがフリーズした場合は、センサーの 5V 電源ピンを切断し、数秒待って機能を再開してください。

### デモ6: センサーをリセットする

センサーが異常を検出する問題が発生した場合や、センサーのすべての設定をクリアしたい場合は、この例に従ってセンサーをリセットすることができます。

以下の例のプログラムは、ライブラリの例フォルダにある **MR60BHA1_Reset_sensor** という名前のファイルにあります。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// ソフトウェアシリアルで RX & TX に使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// ハードウェアシリアルも試すことができます
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行を開始します。

  Serial.println("Readly");

  radar.reset_func();
}

void loop()
{
  // 繰り返し実行されるメインコードを記述
}
```

:::tip
もし XIAO ESP32 シリーズを使用しており、mmwave レーダーからデータのフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

センサーのリセットは非常に簡単で、`reset_func()` を呼び出すだけです。リセットは**一度だけ実行**すればよいので、`Setup()` 関数内で使用します。

### デモ7: Arduino/Seeeduinoの使用

私たちのライブラリはArduino互換であり、手元にあるArduinoを選んでセンサーのプロジェクトを開発することができます。

MR60BHA1センサーはUARTシリアルポートを使用して通信します。以下の配線に従ってセンサーをArduinoに接続するだけです。

<table align="center">
 <tr>
     <td align="center">MR60BHA1センサー</td>
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

すべての関数は上記のデモ1からデモ6と同じ方法で適用されるため、この例では繰り返しません。この例では、Arduinoのソフトシリアルポートを使用してセンサーからデータ情報を取得する方法の概要を示します。

:::tip
Arduinoのソフトシリアルポートに関する注意事項については、[公式Arduinoドキュメント](https://docs.arduino.cc/learn/built-in-libraries/software-serial)を参照してください。
:::

シリアルを出力とデータ送信の両方に使用することでデータの混乱を避けるために、Arduino側では通常ソフトシリアルポートを使用します。

ソフトシリアルポートライブラリのインポートとRXおよびTXピンの定義は、プログラム内で早めに行う必要があります。以下のプログラムでは、**A2** および **A3** ピンをソフトシリアルポートの **RX** および **TX** ピンとして定義しています。

```c
#include <SoftwareSerial.h>
// ソフトシリアルで使用可能な任意の2つのピンをRXとTXに選択
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトシリアルを使用します
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);
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

**デモ1** を例にすると、Arduinoを使用してセンサーから報告されたデータフレームを印刷したい場合、完全なプログラムは以下の通りです。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

#include <SoftwareSerial.h>
// ソフトシリアルで使用可能な任意の2つのピンをRXとTXに選択
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトシリアルを使用します
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

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
  radar.showData();                 // シリアルポートに受信したデータフレームを表示
  delay(200);                       // プログラムの詰まりを防ぐために遅延を追加
}
```

### デモ8: PCへの直接接続によるデータ取得

センサー用に設計された上位コンピュータを使用したい場合や、シリアルソフトウェアを使用して完全なデータフレームを取得したい場合、このルーチンを参照してください。

センサーを **UART to USB** デバイスを介してコンピュータのUSBポートに直接接続します。配線は以下の表の通りです。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center">UART to USB</td>
     <td align="center"></td>
        <td align="center">MR60BHA1センサー</td>
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

シリアルデバッグアシスタントのようなソフトウェアを使用して、センサーが接続されているシリアルポートを選択します。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
MR60BHA1センサーは5Vの電源供給が必要です。そうでない場合、センサーが正常に動作しない可能性があります。
:::

接続が成功すると、センサーが一定のメッセージを送信し続けるのが確認できます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

同時に、ソフトウェアの送信機能を使用してセンサーにデータフレームを送信することもできます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
データ送信形式として **ASCII** を選択する場合、各データセットには **0x** を付ける必要があります。**HEX** を選択する場合、各データセットには **0x** を付ける必要はありません。
:::

## トラブルシューティング

### FAQ1: このセンサーは同じ環境で複数の人を検出できますか？

> A: 利用不可。このセンサーは単一の生体対象にのみ使用できます。監視範囲内に複数の人や動物がいる場合、監視結果に影響を及ぼします。

### FAQ2: XIAO ESP32C3を使用している場合、シリアルモニターに何も表示されないのはなぜですか？

> XIAO ESP32C3のシリアルポート機能は一般的なArduinoハードウェアと完全には一致しておらず、Serial1を直接使用するとUSBシリアルポートが動作しない可能性があります。関連する適用例については、[XIAO ESP32C3のシリアル章](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/#serial)をご参照ください。

## リソース

- **[PDF]** [呼吸および心拍レーダーセンサー データシート](https://files.seeedstudio.com/wiki/mmWave-radar/MR60BHA1_Datasheet.pdf)
- **[PDF]** [呼吸および心拍レーダーセンサー ユーザーマニュアル-V1.9](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_user_manual-V1.9.pdf)
- **[PDF]** [呼吸および心拍レーダーセンサー ユーザーマニュアル-V2.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_userManual_V2.3.pdf)
- **[EXE]** [旧バージョンの上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/60GHzradar/Human-Vital-Sign-Radar.exe)
- **[EXE]** [新バージョンの上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)
- **[PPTX]** [Seeed mmWaveセンサーシリーズ V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)
- **[ZIP]** [60G-Radar-heartbeat-3D](https://files.seeedstudio.com/wiki/mmWave-radar/60G-Radar-heartbeat-3D.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>