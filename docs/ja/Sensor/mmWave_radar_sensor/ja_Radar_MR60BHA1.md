---
description: 60GHz mmWave 静的呼吸・心拍検出
title: 60GHz mmWave 静的呼吸・心拍検出
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Radar_MR60BHA1
last_update:
  date: 03/03/2023
  author: Citric
---

# 60GHz mmWaveセンサー - 人体静的睡眠呼吸監視 (MR60BHA1)

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## 概要

MR60BHA1 60GHzレーダーモジュールは、FMCW検出理論を適用して、高精度で個人の呼吸数と心拍数の同時検出を実現し、他のノイズ干渉から独立した完全にプライベートで安全な環境を提供します。これは、家電、ヘルスケア、および産業用アプリケーションにおける標準的な生体レーダーシステムです。このwikiでは、その活用方法をご紹介します。

### アプリケーション

- スマートホーム
- ヘルスケア
- 呼吸数検出
- 心拍数検出
- スマートホテル
- 医療アシスタント

### 特徴

- 有効理論：FMCW FM連続波信号に基づくレーダー検出を実装
- 標準アルゴリズム：自己適応環境において人間の呼吸数と心拍リズムを同時に感知・出力
- 完璧なプライバシー保護：FMCW監視技術を適用し、識別なしで監視機能を提供
- 健康に優しい動作状態：人体に無害な低出力
- 高安定性：温度、湿度、ノイズ、気流、塵、光、その他の環境影響から独立
- 高測定精度：心拍精度85%、呼吸精度90%を達成
- 高柔軟性ハードウェア設計レーダー：二次開発をサポート、様々なシナリオアプリケーションに適応

### 仕様

| パラメータ内容                 |  最小値 |  標準値 |  最大値 |  単位 |
|-----------------------------------|----------|----------|----------|-------|
|  **性能**                      |          |          |          |       |
|  検出距離（胸部）    |  0.4     |          |  1.5       |  m    |
|  呼吸測定精度 |          |  90      |          |  %    |
|  心拍測定精度   |          |  95      |          |  %    |
|  更新時間                     |  1       |          |  30      |  S    |
|  観測セットアップ時間          |          |  20      |          |  S    |
|  **動作パラメータ**             |          |          |          |       |
|  動作電圧 (VCC)          |  4.6     |  5       |  6       |  V    |
|  動作電流 (ICC)          |          |  150     |          |  mA   |
|  動作温度 (TOP)      |  -20     |          |  60      |  ℃    |
|  保存温度 (TST)        |  -40     |          |  80      |  ℃    |
|  **送信パラメータ**                |          |          |          |       |
|  動作周波数 (fTX)        |  58      |  60      |  63.5    |  GHz  |
|  送信電力 (Pout)         |          |  6       |          |  dBm  |
|  **アンテナパラメータ**               |          |          |          |       |
|  アンテナゲイン (GANT)              |          |  4       |          |  dBi  |
|  水平ビーム (-3dB)           |  -20     |          |  20      |  o    |
|  垂直ビーム (-3dB)             |  -20     |          |  20      |  o    |

## ハードウェア概要

すべてを始める前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は、60GHz mmWave呼吸・心拍モジュールの特性に関する情報を提供します。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- インターフェース1：
  - 5Vピンはセンサーの電源供給インターフェースです。
  - RXとTXはセンサーのデータ伝送インターフェースです。RXはシリアル受信、TXはシリアル送信を意味します。
  - 人体存在状態出力インターフェース。これら2つのピンのレベルを使用して、環境内の現在の人の動きを判定できます。
    - GP2出力：高レベル - 占有、低レベル - 非占有。
    - GP1出力：高レベル - アクティブ、低レベル - 静止。
- インターフェース2：
  - ファームウェア書き込みピン配置：GND/3.3V/SWD/SWC。
  - 予備入出力ピン：GP3～GP6。

## はじめに

### ファームウェアバージョンアップデート

mmwaveセンサーは長期間の技術的蓄積とユーザーから提供された貴重な提案を経て、より正確で信頼性の高い監視結果とより良いユーザー体験を提供するために、元の製品を継続的に改良してきました。

新しく出荷されるセンサーは、最新の製品体験を保証するため、デフォルトで最新のファームウェアが搭載されています。しかし、既存ユーザーの体験のために、最新の技術を使用できるよう、最新のファームウェアとアップデート方法をここに提供します。

#### 汎用方法 - J-linkを使用してファームウェアを書き込む

間違ったファームウェアやレーダー異常、ファームウェア故障などに遭遇した場合、この方法でファームウェアを再書き込みすることが最も効果的な方法です。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードアドレス |
|:----------------:|:----------------:|
| Jlink_MR60BHA1-V230104.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230104.bin) |
| Jlink_MR60BHA1-V230904.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230904.bin) |

:::caution

1. 製品の機能を慎重に確認してください。他のmmwaveセンサーと混同してこのファームウェアを書き込まないでください。製品機能の異常を引き起こす可能性があり、その結果については自己責任となります！

2. ファームウェアの更新方法によって使用するファームウェア内容が異なることにもご注意ください。ダウンロードしているのは**J-link**経由で書き込むファームウェアです。

:::

**レーダーを最新バージョンにアップデートするには**

**ステップ1.** **Jlink**と**MR60BHA1** 60GHz mmWaveセンサーが必要です。

下図のようにデュポンワイヤーでレーダーとJlinkを接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**ステップ2.** 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| JlinkV644e.rar | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip) |

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

ファームウェア消去：**Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

ファームウェアアップグレード：**Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

この時点で、ファームウェアアップデートが完了します。

#### UART経由でファームウェアを更新

J-linkが高価であることを考慮し、レーダーファームウェアの更新のみが必要な大多数のユーザーにとってJ-linkを購入するのは贅沢すぎるため、UART経由での更新方法を提供します。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードアドレス |
|:----------------:|:----------------:|
| UART_MR60BHA1-230104.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230104.bin) |
| UART_MR60BHA1-230904.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230904.bin) |

:::caution

1. 製品の機能を慎重に確認してください。他のmmwaveセンサーと混同してこのファームウェアを書き込まないでください。製品機能の異常を引き起こす可能性があり、その結果については自己責任となります！

2. ファームウェアの更新方法によって使用するファームウェア内容が異なることにもご注意ください。ダウンロードしているのは**UART**経由で書き込むファームウェアです。

3. ファームウェアのUARTアップグレードを使用する前に、レーダーファームウェアのバージョンが**少なくともバージョンG60SM1SYv010003**であることを確認してください。そうでない場合、レーダーが無効になる可能性があり、その時点でJ-linkを使用してファームウェアを書き込む必要があります！

レーダーにコマンド `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` を送信することで、ファームウェアバージョン番号情報を照会できます。レーダーから報告されたデータは文字列として表示され、以下に示すような効果が表示されます。

`G60SM1SYv010009` はレーダーで報告されたモデル番号で、`10009` がバージョン番号です。これは、このセンサーがUARTアップグレードをサポートしていることを意味します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/20.png"/></div>
:::

**レーダーを最新バージョンに更新するには**

**ステップ1**. **UART to USB**と**MR60BHA1** 60GHz mmWaveセンサーが必要です。

以下の図に示すように、デュポンワイヤーを介してレーダーとUART to USBを接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**ステップ2**. 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**ステップ3**. パッケージPackageMake-v1.1.1.zipを解凍し、内部のPackageMake-v1.1.1.exeファイルを開きます。

センサーが接続されたUART to USBをコンピューターに接続し、ソフトウェアの左上角の歯車パターンをクリックし、ポート番号を選択し、ボーレートを115200に設定してから、右下角をクリックして確認します。（ポート番号が見つからない場合は、接続を確認してから左下角の更新ボタンをクリックして再試行してください）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**ステップ4**. センサーの接続

上記のようにシリアルポートの設定が完了したら、右上角の2番目のアイコンをクリックすると、ポートが正しく選択されている場合、レーダーからの生データが印刷されて表示されます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**ステップ5**. ファームウェアの更新

左マウスボタンで右上角の最後のアイコンをクリックすると、ファームウェアを選択するウィンドウが表示されます。ダウンロードしたファームウェアバージョンを選択してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

選択が完了すると、選択されたファイルパスがソフトウェアの下に表示されます。選択されたファームウェアバージョンとモデルが使用しているセンサーと一致しているかどうかを再度確認してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/17.png"/></div>

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

上記で言及したシリアルソフトウェアに加えて、レーダー専用に設計された[上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)も使用できます。

:::tip
古いバージョンのOPとファームウェアを使用している場合は、ソフトウェアプロトコルとWikiコンテンツを確実に利用できるよう、できるだけ早く[最新バージョンにアップグレード](#firmware-version-updates)してください。
:::

以下の5つのセクションでは、ソフトウェアの各部分の役割について説明します。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/1.png"/></div>

1. 接続設定

    センサーがコンピュータに接続されているポートを選択します。通常、選択する前に**シリアルポート更新ボタン**をクリックしてポートを更新する必要があります。シリアルポートが正しく選択されると、データは円4で自動的に更新されます（データが利用可能な場合）。

2. 機能設定

    - **デバッグ**: この機能をオンにすると、ソフトウェアでリアルタイムの生データを出力できます。これは図の円3のウィンドウです。
    - **生データ保存**: クリックすると、元のデータをローカルコンピュータに保存するパスを選択できます。ただし、このオプションはボタンをクリックした後の新しいデータは保存せず、最新の履歴データのみを保存することに注意してください。
    - **睡眠データ保存**: クリックすると、睡眠に関連する生データ情報を保存するパスを選択でき、他のデータは保存されません。ただし、このオプションはボタンをクリックした後の新しいデータは保存せず、最新の履歴データのみを保存することに注意してください。

3. シリアルモニター

    このウィンドウは、円2の**デバッグ**オプションがチェックされているときに表示され、この時点でエリアにはリアルタイムのセンサーデータフレームが表示されます。下部では、センサーにコマンドフレームを送信できます。送信または照会できるコマンドは、センサーのユーザーマニュアルで確認できます。

4. グラフィック表示

    これはリアルタイムで線グラフを表示します。表示されるデータ内容は、それぞれ呼吸数、心拍数、および身体パラメータです。横座標は時間で、縦座標は対応するデータです。

5. 状態と方向

    このエリアでは、人の存在状態と人体の方向を観察できます。人体方向データは参考用のみです。

## Arduinoを使用したセンサー開発

### Arduino ライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

この例で使用されるライブラリコードは、下のアイコンをクリックしてダウンロードできます。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### 機能

スケッチの開発を始める前に、ライブラリの利用可能な機能を見てみましょう。

- `void recvRadarBytes()` —— この関数は、センサーデータプロトコルのフレームヘッダーとフレームテールに従って、UARTを介してセンサーから報告されるデータフレームを収集します。`showData()`関数と組み合わせて使用することで、収集されたデータ情報をシリアルポート経由で印刷できます。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void showData()` —— この関数は、センサーから報告される完全なデータフレームをシリアルポート経由で一度に印刷する役割を果たし、`recvRadarBytes()`関数と組み合わせて使用する必要があります。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void HumanExis_Func()` —— この関数は、センサーのデータフレームを解析し、人の存在状態に関連するデータを出力する責任があります。

  - **入力パラメータ:** なし

  - **戻り値:**

    - `unsigned int sensor_report` —— 返される値は、解析されたデータフレームがどの状態クラスに属するかを示します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。人の動き情報は変化が発生した場合にのみ報告されます。

    - `int bodysign_val` —— 返される値は、人の動きパラメータの値を表します。この値は1秒に1回報告されます。

    - `float distance` —— センサーが決定する現在の人体までの距離で、値はメートル単位です。この値は2秒ごとに報告されます。

    - `float Dir_x, Dir_y, Dir_z` —— センサーが検出した身体位置情報を示します。人の位置情報は正負の値を持ち、単位はメートルです。この値は2秒ごとに報告されます。

- `void Breath_Heart()` —— この関数は、センサーからの呼吸と心拍データを解析し、関連する値を返す責任があります。

  - **入力パラメータ:** なし

  - **戻り値:**

    - `unsigned int sensor_report` —— 返される値は、解析されたデータフレームがどの状態クラスに属するかを示します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。

    - `unsigned int heart_rate` —— 心拍数値。3秒ごとに報告されます。値の範囲は0~100です。

    - `unsigned int heart_point_1, heart_point_2, heart_point_3, heart_point_4, heart_point_5` —— 心拍波形データ。5バイトはリアルタイムで1秒間の5つの値を表し、波形は正弦波データで、中心軸は128です。これは心拍強度が0の場合、128として表示されることを意味します。この値は1秒に1回報告されます。

    - `unsigned int breath_rate` —— 呼吸値。3秒ごとに報告されます。値の範囲は0~20です。

    - `unsigned int breath_point_1, breath_point_2, breath_point_3, breath_point_4, breath_point_5` —— 呼吸数波形データ。5バイトはリアルタイムで1秒間の5つの値を表し、波形は正弦波データで、中心軸は128です。これは心拍強度が0の場合、128として表示されることを意味します。この値は1秒に1回報告されます。

- `void SleepInf_Decode()` —— この関数は、センサーから報告される睡眠データ情報の解析を担当します。監視対象者がベッドに入り、5分以上眠っている場合にのみ有効です。この関数を使用する際は、睡眠状態転送モードが有効になっていることを確認してください。

  - **入力パラメータ:** なし

  - **戻り値:**

    - `unsigned int sensor_report` —— 返される値は、解析されたデータフレームがどの状態クラスに属するかを示します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。

    - `unsigned int awake_time` —— この値は、監視対象者がベッドに入っている場合の覚醒時間を示します。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int light_time` —— この値は、監視対象者がすでにベッドにいる場合の浅い睡眠時間を示します。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int deep_time` —— この値は、監視対象者がすでにベッドにいる場合の深い睡眠時間を示します。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int sleep_score` —— この値は睡眠品質スコアを示します。この情報は睡眠プロセスの終了時に報告されます。

    - `boolean existence` —— この値は人の存在情報を示します。戻り値がTrueの場合は人の存在を示し、Falseの場合は人の不在を示します。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int sleep_status` —— この値は睡眠状態を示します。睡眠状態には4つあり、それぞれベッドから離れる、覚醒、浅い睡眠、深い睡眠です。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int breath_rate` —— 10分間の平均心拍数。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int heart_rate` —— 10分間の平均呼吸数。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int turn_num` —— 10分間の寝返り回数。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int substantial_move_ratio` —— 10分間の監視対象者の大きな動きが占める割合。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int samll_move_ratio` —— 10分間の監視対象者の小さな動きの割合。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int apnea_num` —— 10分間の無呼吸回数。この値は他の睡眠状態データと共に10分ごとに報告されます。

    - `unsigned int sleep_time` —— 総睡眠時間。センサーが睡眠プロセスが終了したと判断した時に報告されます。

    - `unsigned int awake_time_radio` —— 人が覚醒している時間の割合。センサーが睡眠プロセスが終了したと判断した時に報告されます。

    - `unsigned int light_time_radio` —— 浅い睡眠に費やした時間の割合。センサーが睡眠プロセスが終了したと判断した時に報告されます。

    - `unsigned int deep_time_radio` —— 深い睡眠に費やした時間の割合。センサーが睡眠プロセスが終了したと判断した時に報告されます。

    - `unsigned int outbed_time` —— 人がベッドから出ている時間。センサーが睡眠プロセスが終了したと判断した時に報告されます。

    - `unsigned int outbed_num` —— 人がベッドから離れる回数。センサーが睡眠プロセスが終了したと判断した時に報告されます。

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— この関数はクエリフレームとコマンドフレームの送信に使用されます。

  - **入力パラメータ:**

    - `buff` —— センサーに送信したいデータフレーム。

    - `len` —— センサーに送信したいデータフレームの長さ。

    - `cyclic` —— 循環送信スイッチ。デフォルトはfalseで、このデータフレームを循環的に送信したい場合は**true**に設定できます。

  - **戻り値:** なし

- `void ModeSelect_fuc(int mode)` —— この関数はセンサーの動作モードを選択するために使用されます。動作モードには2つあり、睡眠状態転送モードとリアルタイムデータ転送モードです。睡眠状態転送モードでは、睡眠監視機能がオンになります（`SleepInf_Decode()`が有効）。リアルタイムデータ転送モードでは、睡眠監視機能はオフになりますが（`SleepInf_Decode()`が無効）、波形データが報告されます。

  - **入力パラメータ:**

    - `mode` —— 選択されたモード番号。1はリアルタイムデータ転送モードを示し、2は睡眠状態転送モードを示します。

  - **戻り値:** なし

- `void reset_func()` —— この関数はセンサーをリセットする役割を果たします。

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

#define DISTANCE 0x04           //Distance from the person being detected

#define DIRECTIONS 0x05         //Body orientation

#define HEART_INF 0x85          //Heart rate information

#define HEART_RATE 0x02         //Heart rate

#define HEART_RATE_WAVE 0x05    //Heart rate waveform (No analysis for now)

#define BREATH_RATE_RADAR 0x81  //Respiratory heart rate data

#define BREATH_INF 0x01         //Breathing data
#define BREATH_NORMAL 0x01      //Normal breathing
#define BREATH_RAPID 0x02       //Acute respiratory abnormalities
#define BREATH_SLOW 0x03        //Slow heartbeat
#define BREATH_NONE 0x04        //Radar detection nothing

#define BREATH_VAL 0x02         //Breathing values

#define BREATH_WAVE 0x05        //Respiratory waveform (No analysis for now)

#define SLEEP_INF 0x84          //Sleep information

#define INOUT_BED 0x01          //In bed or out of bed
#define OUT_BED 0x00            //Out of bed
#define IN_BED 0x01             //In bed
#define INOUT_NONE 0x02         //None (Display in real-time detection mode)

#define SLEEP_STATE 0x02        //Sleep state
#define DEEP_SLEEP 0x00         //Deep sleep
#define LIGHT_SLEEP 0x01        //Light sleep
#define AWAKE 0x02              //Awake
#define SLEEP_NONE 0x03         //None (Display in real-time detection mode)

#define AWAKE_TIME 0x03         //Awake time

#define LIGHTSLEEP_TIME 0x04    //Light sleep time

#define DEEPSLEEP_TIME 0x05     //Deep sleep time

#define SLEEP_SCORE 0x06        //Sleep quality score

#define SLEEP_STATUE 0x0C       //Sleep integrated status reporte

#define SLEEP_QUALITY 0x0D      //Comprehensive information reporting on sleep quality

#define SLEEP_ERROR 0x0E        //Abnormal sleep reporte

#define SLEEP_LESS4H 0x00        //Sleep less than 4 hours
#define SLEEP_OVER12H 0x01       //Sleep over 12 hours
#define SLEEP_LONGTIMENOONE 0x02 //Unusual situation, no one for a long time
#define SLEEP_ERRORNONE 0x03     //None

#define reset_frame_len 10      //Reset data frame length
//Reset data frame
const unsigned char breath_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

#define mode_frame_len 10       //Mode selection command frame length
//Mode selection command frame
const unsigned char realtime_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x00, 0x40, 0x54, 0x43};
const unsigned char sleepstatus_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x01, 0x41, 0x54, 0x43};

//Return status, Use in arduino
//Possible values for sensor_report
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

**ステップ 3.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- 後のルーチンで **Seeeduino V4.2** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を参照して追加を完了してください。

- 後のルーチンで **Seeeduino XIAO** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を参照して追加を完了してください。

- 後のルーチンで **XIAO RP2040** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)を参照して追加を完了してください。

- 後のルーチンで **XIAO BLE** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照して追加を完了してください。

- 後のルーチンで **XIAO ESP32C3** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup)を参照して追加を完了してください。

:::caution
**XIAO nRF52840** については、**Seeed nRF52 mbed-enabled Boards** を選択してください。そうしないと、プログラム実行時にエラーが報告される可能性があります。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**ステップ 4.** Arduino コードライブラリをインストールします。

まず [GitHub](https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor) からコードベースを取得し、ローカルコンピュータにダウンロードします。

zip ライブラリをダウンロードしたので、Arduino IDE を開き、**Sketch > Include Library > Add .ZIP Library** をクリックします。ダウンロードした zip ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **Library added to your libraries** と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino の例

ライブラリがインストールされ、基本的な機能を理解したので、XIAO BLE でいくつかの例を実行して、その動作を確認してみましょう。

### 必要な材料

以下の例を完了する前に、以下の材料を準備する必要があります。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**60GHz MR60BHA1 センサー**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm から 2.54mm ピッチリボンケーブル**|

**ステップ 1.** メインボードを通してデバイスをコンピュータに接続します。配線図を以下の表に示します。

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

**ステップ 2.** Arduino IDE の左上のメニューバーで、**ツール**を選択し、使用している開発ボードの種類を選択して、対応するシリアルポートを選択します。

:::tip
**MacOS**を使用している場合、デバイスのシリアルポート名は多くの場合 **/dev/cu.usbmodem xxx** で始まり、デバイス名で終わります。**Windows**を使用している場合、デバイスのシリアルポート名は多くの場合 **COM** で始まり、同様にデバイス名で終わります。
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

この例では、人気製品である XIAO BLE でレーダーがどのように動作するかを実演します。

### デモ1 生データエクスポート

この例では、センサーからシリアルポート経由で報告される生データを出力するプロセスをガイドします。

以下のサンプルプログラムは、ライブラリの examples フォルダにある **MR60BHA1_print_rawdata** というものです。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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

メインの`loop()`関数では、`recvRadarBytes()`関数を使用してセンサーからデータフレームを受信し、その後`showData()`関数を使用してシリアルポート経由で受信したデータフレームを出力します。

このプログラムで重要な点は、メインボードの詰まりを避けるために、2つのデータフレームの受信と出力の間に間隔があることです。この時間は**150ms**以上である必要があります。

これは、メインボードがセンサーから報告されるすべてのデータフレームを受信することができないことを意味しますが、センサーから報告されるフレーム数は非常に多く頻繁であるため、センサーを使用して環境を判定する精度には影響しません。

プログラムをアップロードします。シリアルモニターを115200のボーレートで開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/2.png"/></div>

### Demo2: 人体存在検知機能の使用

この例では、人体存在検知機能の使用方法を説明し、シリアルモニターを通じてこの機能のすべての値を出力します。

以下のサンプルプログラムは、ライブラリのexamplesフォルダにある**MR60BHA1_human_existence_inf_output**というものです。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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
      case DISVAL:
        Serial.print("The sensor judges the distance to the human body to be: ");
        Serial.print(radar.distance, DEC);
        Serial.println(" m");
        Serial.println("----------------------------");
        break;
      case DIREVAL:
        Serial.print("The sensor judges the orientation data with the human body as -- x: ");
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
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからのデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

この例では、人体の存在を検出する機能は`HumanExis_Func()`関数によって実装されています。プログラム実装の基本的なロジックは、`HumanExis_Func()`関数がセンサーから報告されたステータス情報を`sensor_report`変数に割り当てることです。`sensor_report`の値に基づいて、シリアルポートを通じてその状態のすべての値を出力します。

`sensor_report`はインデント下でのシリアルポートからのデータ出力に対応していることに注意してください。例えば、符号パラメータを表す`bodysign_val`変数は、`sensor_report`が`BODYVAL`の場合にのみ有効であり、センサーから報告される他の`sensor_reports`には存在しません。

プログラムをアップロードします。シリアルモニターを115200のボーレートで開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/3.png"/></div>

### Demo3: 静止している人の呼吸と心拍機能の使用

この例では、`Breath_Heart()`関数を使用して、静止している人体の呼吸と心拍数を検出します。

:::tip
私たちの重点は静止している人体の呼吸と心拍数の検出にあります。人体が動いている間は製品を使用しないでください。センサーの心拍数と呼吸を制限しているためです。最大心拍数は**100を超えず**、最大呼吸数は**25を超えません**。
:::

以下のサンプルプログラムは、ライブラリのexamplesフォルダにある**MR60BHA1_Breath_heartbeat_inf_output**というものです。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.
  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Breath_Heart();           //Breath and heartbeat information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("Sensor monitored the current heart rate value is: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("Sensor detects current breath rate is normal.");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("Sensor detects current breath rate is too fast.");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("Sensor detects current breath rate is too slow.");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("There is no breathing information yet, please wait...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("Sensor monitored the current breath rate value is: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

プログラムをアップロードします。シリアルモニターを115200のボーレートで開くと結果が表示されます。出力は以下の画像のようになります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/4.png"/></div>

:::caution
波形データを確認したい場合は、センサーをリアルタイムデータ送信モードに切り替えてください。モード切り替え後、センサーを再起動する必要がある場合があります。
:::

### Demo4: スリープ機能の使用

この例では、`SleepInf_Decode()`関数を使用してスリープに関する情報を取得する方法をガイドします。この例を使用する前に、あなたまたはテスト対象者が就寝準備ができていることを確認してください。

:::note
デフォルトでは、センサーはスリープ状態送信モードになっています。このモードでは、スリープ監視機能がオンになっています。リアルタイムデータ送信モードに切り替えると、スリープデータが利用できない場合があります。送信モードを変更したい場合は、`ModeSelect_fuc()`関数を使用できます。使用例は、examplesフォルダの**MR60BHA1_Transfer_mode_selection**でも確認できます。モード切り替え後、センサーを再起動する必要がある場合があります。
スリープに関連するデータは、人がベッドにいるときに報告される必要があり、現在のファームウェアでは、人の状態が5分間続いた後に誰かがベッドにいると判断するのがデフォルトです。
:::

以下のサンプルプログラムは、ライブラリのexamplesフォルダにある**MR60BHA1_Sleep_inf_output**です。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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
  radar.SleepInf_Decode();           //Sleep-related information output. Data output begins when the monitoring figure is in bed for five minutes.
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case OUTBED:
        Serial.println("Sensor detects someone currently leaving the bed.");
        Serial.println("----------------------------");
        break;
      case INBED:
        Serial.println("Sensor detects that someone is currently in bed.");
        Serial.println("----------------------------");
        break;
      case NOINOUT:
        Serial.println("No subject is detected leaving or going to bed.");
        Serial.println("----------------------------");
        break;
      case SLEEPAWAKE:
        Serial.println("Sensor detects that the monitoring people is awake.");
        Serial.println("----------------------------");
        break;
      case SLEEPLIGHT:
        Serial.println("Sensor detects that the monitoring people is in light sleeping.");
        Serial.println("----------------------------");
        break;
      case SLEEPDEEP:
        Serial.println("Sensor detects that the monitoring people is in deep sleeping.");
        Serial.println("----------------------------");
        break;
      case SLEEPNONE:
        Serial.println("Sleep state of the object is not detected.");
        Serial.println("----------------------------");
        break;
      case AWAKETIME:
        Serial.print("Sensor monitored the awake sleep time is: ");
        Serial.print(radar.awake_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case LIGHTTIME:
        Serial.print("Sensor monitored the light sleep time is: ");
        Serial.print(radar.light_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case DEEPTIME:
        Serial.print("Sensor monitored the deep sleep time is: ");
        Serial.print(radar.deep_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case SLEEPSCORE:
        Serial.print("Sensor judgment sleep score is: ");
        Serial.println(radar.sleep_score);
        Serial.println("----------------------------");
        break;
      case SLEEPSTATUE:
        Serial.println("Sleep integrated state information -- ");
        Serial.print("Human existence: ");
        if(radar.existence)Serial.println("human exis");
        else Serial.println("human non-existent");
        Serial.print("Sleep state: ");
        if(radar.sleep_status == SLEEPDEEP)Serial.println("sleeping soundly");
        else if(radar.sleep_status == SLEEPLIGHT)Serial.println("light sleep");
        else if(radar.sleep_status == SLEEPAWAKE)Serial.println("awake");
        else if(radar.sleep_status == SLEEPNONE)Serial.println("off the bed");
        Serial.print("Average breathing: ");
        Serial.println(radar.breath_rate);
        Serial.print("Average heart rate: ");
        Serial.println(radar.heart_rate);
        Serial.print("Number of turning over during sleep: ");
        Serial.println(radar.turn_num);
        Serial.print("Percentage of substantial exercise during sleep: ");
        Serial.println(radar.substantial_move_ratio);
        Serial.print("Percentage of small-amplitude movements during sleep: ");
        Serial.println(radar.samll_move_ratio);
        Serial.print("Number of apnea: ");
        Serial.println(radar.apnea_num);
        Serial.println("----------------------------");
        break;
      case SLEEPQUALITY:
        Serial.println("Quality of sleep information -- ");
        Serial.print("Sleep score: ");
        Serial.println(radar.sleep_score);
        Serial.print("Total time of sleep: ");
        Serial.print(radar.sleep_time);
        Serial.println(" min");
        Serial.print("Percentage of waking time: ");
        Serial.println(radar.awake_time_radio);
        Serial.print("Percentage of light sleep time: ");
        Serial.println(radar.light_time_radio);
        Serial.print("Percentage of deep sleep time: ");
        Serial.println(radar.deep_time_radio);
        Serial.print("Total time away from bed: ");
        Serial.print(radar.outbed_time);
        Serial.println(" min");
        Serial.print("Total number of times out of bed: ");
        Serial.println(radar.outbed_num);
        Serial.print("The number of turning over during sleep: ");
        Serial.println(radar.turn_num);
        Serial.print("Average breathing: ");
        Serial.println(radar.breath_rate);
        Serial.print("Average heart rate: ");
        Serial.println(radar.heart_rate);
        Serial.print("Number of apnea: ");
        Serial.println(radar.apnea_num);
        Serial.println("----------------------------");
        break;
      case SLEEPLESS4H:
        Serial.print("The monitored subjects slept for less than 4 hours.");
        Serial.println("----------------------------");
        break;
      case SLEEPOVER12H:
        Serial.print("The length of sleep of the monitored subjects exceeded 12 hours.");
        Serial.println("----------------------------");
        break;
      case LONGTIMENOONE:
        Serial.print("Abnormally unoccupied for long periods of time.");
        Serial.println("----------------------------");
        break;
      case ERRORNONE:
        Serial.print("No abnormal information.");
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

プログラムをアップロードします。シリアルモニターをボーレート115200で開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/6.png"/></div>

### Demo5: センサーにデータを送信

ユーザーマニュアルで提供されている詳細に基づいて、ユーザーは実際のニーズに応じて、センサーの特定の状態やモードを照会または設定するために、コマンドフレームをセンサーに送信できます。

センサーライブラリのexamplesフォルダにある**MR60BHA1_Send_frame**という名前の.inoファイルは、デバイスIDを照会するプログラムをセンサーに送信する方法を示しています。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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
XIAO ESP32シリーズを使用していて、mmwaveレーダーからデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

この例のプログラムでは、配列`DevID_buff[10]`が定義されているのがわかります。これは、クエリデバイスIDの16進数を格納し、1バイトごとに1つの場所を使用します。

そして送信は`send_func()`によって行われます。渡されるパラメータは、送信するフレームの配列、配列の長さ、およびループで送信するかどうかです。

独自のコマンドフレームを送信する必要がある場合は、ユーザーマニュアルで提供されているフレーム形式に従って正しい配列を定義する必要があります。

:::tip
**チェック桁「sum」の計算について。**

すべてのデータフレームには、データが正確に送信または受信されることを保証するためのチェックサムビットがあります。チェックサムビットは通常、データフレームの最後から2番目のビットにあります。これは、チェックビットより前のすべてのビットを加算し、16進数で下位2ビットを取ることによって計算されます。
デバイスIDをクエリするデータフレームの例を見てみましょう。
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

チェックサムビットがデータフレーム全体の最後から2番目のビットにあることがわかります。次に、前のすべての16進数を加算することから始めます。

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

次に、その下位2桁を取る必要があります。これは**60**になるので、このデータフレームのチェックサムは**60**です。センサーのIDを調べたい場合は、次の配列を定義できます。

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

プログラムをアップロードします。シリアルモニターを115200のボーレートで開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/5.png"/></div>

この時点で、返されたデータフレームを確認し、ユーザーマニュアルで説明されている返されたデータフレームと一致するかどうかを確認してください。

通常、コマンドをセンサーに繰り返し送信する必要はありませんが、センサーが非常に高速でメッセージを返信するため、センサーから返される正確なデータメッセージを受信できるかどうかを確信できません。この問題には2つの解決策があります。

- 上記の手順を数回再アップロードする。
- `send_func()`関数の3番目のパラメータ（循環送信）を`true`に設定する。ただし、設定タイプのデータフレームを繰り返し送信すると**センサーがジャムする可能性がある**ため、この機能は慎重に使用してください。センサーがスタックした場合は、センサーから5V電源ピンを切断し、機能が再開するまで少し待ってください。

### Demo6: センサーのリセット

センサーが異常を検出する問題が発生したり、センサーのすべての設定をクリアしたい場合があります。その場合は、この例に従ってセンサーをリセットできます。

次のサンプルプログラムは、ライブラリのexamplesフォルダにある**MR60BHA1_Reset_sensor**というものです。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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

### Demo7: Arduino/Seeduinoの使用

私たちのライブラリはArduino互換で、手持ちのArduinoを選んでセンサープロジェクトを開発することもできます。

MR60BHA1センサーはUARTシリアルポートを使用して通信するため、以下のようにセンサーをArduinoに接続するだけです。

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
        <td align="center">ソフトシリアルポート TX</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">ソフトシリアルポート RX</td>
 </tr>
</table>

すべての機能はDemo1からDemo6と同じ方法で適用されるため、この例では繰り返しません。この例では、Arduinoのソフトシリアルポートをセンサーからのデータ情報取得に使用する方法の概要を説明します。

:::tip
Arduinoソフトシリアルポートに関する注意事項については、[Arduino公式ドキュメント](https://docs.arduino.cc/learn/built-in-libraries/software-serial)を参照してください。
:::

出力とデータ送信の両方にSerialを使用することによるデータの混乱を避けるため、Arduino側では通常ソフトシリアルポートを使用します。

ソフトシリアルポートライブラリのインポートとRX、TXピンの定義は、プログラムの早い段階で行う必要があります。以下のプログラムでは、**A2**と**A3**ピンをソフトシリアルポートの**RX**と**TX**ピンとして定義しています。

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);
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
#include <60ghzbreathheart.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

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

### Demo8: PCへの直接接続によるデータ取得

センサー用に設計された上位コンピューターを使用したい場合、またはシリアルソフトウェアを使用して完全なデータフレームを取得したい場合は、このルーチンを参照してください。

**UART to USB**デバイスを介してセンサーを直接コンピューターのUSBポートに接続します。配線は以下の表に示されています。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
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

シリアルデバッグアシスタントなどのソフトウェアを使用して、センサーが接続されているシリアルポートを選択してください。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
MR60BHA1センサーは5V電源が必要です。そうでなければ、センサーが正常に動作しない可能性があります。
:::

接続が成功すると、センサーが安定したメッセージストリームを送信しているのが確認できます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

同時に、ソフトウェアの送信機能を使用してセンサーにデータフレームを送信することもできます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
データ送信の形式として**ASCII**を選択する場合、各データセットの前に**0x**を付ける必要があります。**HEX**を選択する場合は、各データセットの前に**0x**を付ける必要はありません。
:::

## トラブルシューティング

### FAQ1: このセンサーは同じ環境で同時に複数の人を検出できますか？

> A: できません。このセンサーは単一の生体にのみ使用できます。監視範囲内に複数の人や動物がいる場合、監視結果に影響を与えます。

### FAQ2: XIAO ESP32C3でシリアルモニターに何も表示されないのはなぜですか？

> XIAO ESP32C3のシリアルポート機能は一般的なArduinoハードウェアとは完全に一致しておらず、Serial1を直接使用するとUSBシリアルポートが動作しない可能性があります。関連するアプリケーション事例については、[XIAO ESP32C3のシリアル章](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/#serial)を詳しく参照してください。

## リソース

- **[PDF]** [呼吸・心拍レーダーセンサーデータシート](https://files.seeedstudio.com/wiki/mmWave-radar/MR60BHA1_Datasheet.pdf)
- **[PDF]** [呼吸・心拍レーダーセンサーユーザーマニュアル-V1.9](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_user_manual-V1.9.pdf)
- **[PDF]** [呼吸・心拍レーダーセンサーユーザーマニュアル-V2.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_userManual_V2.3.pdf)
- **[EXE]** [上位コンピューターソフトウェア_旧バージョン](https://files.seeedstudio.com/wiki/60GHzradar/Human-Vital-Sign-Radar.exe)
- **[EXE]** [上位コンピューターソフトウェア_新バージョン](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)
- **[PPTX]** [Seeed mmWaveセンサーシリーズ V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)
- **[ZIP]** [60G-Radar-heartbeat-3D](https://files.seeedstudio.com/wiki/mmWave-radar/60G-Radar-heartbeat-3D.zip)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
