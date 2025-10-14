---
description: 24GHz mmWave Human Static Presence Lite
title: 24GHz mmWave Human Static Presence Lite
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Radar_MR24HPC1
last_update:
  date: 03/03/2023
  author: Citric
---


# 24GHz mmWave センサー - 人体静的存在検知モジュール Lite (MR24HPC1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## はじめに

24GHz mmWave Sensor - Human Static Presence Module Liteは、アンテナ一体型の健康に優しいmmwaveレーダーセンサーで、FMCW測距技術を適用し、24GHzで動作し、環境の影響を受けずに人の静的存在を実装します。これは、ユーザーが検出機能を決定するために基本パラメータを設定できるパーソナライズされたレーダーでもあります。

### アプリケーション

- 屋外照明の自動制御
- 自動ドア開閉
- 全館監視
- インテリジェント家電（TV、浴室暖房、セキュリティなど）
- オフィスエネルギー（エアコン、照明）
- 睡眠監視カーブ
- ホームセキュリティ
- IPCトリガー

### 特徴

- 人感知mmwaveレーダー：FMCW測距技術を適用し、24GHzで動作し、5メートルの検出範囲で、感知エリア内の人の行動を検出
- パーソナライズされたレーダー検出：設定可能な検出範囲、モーショントリガー、状態変化時間、および視覚的デバッグソフトウェアを提供し、様々なシナリオの要件を満たす
- 健康に優しい動作状態：人体に無害な低出力
- 干渉に対する高い耐性：温度、湿度、ノイズ、気流、ほこり、光などの環境の影響を受けずにデータを出力
- Arduino対応

### ハードウェア概要

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/13.jpg" style={{width:500, height:'auto'}}/></div>

1. 5Vピンはレーダーの電源供給インターフェースで、RXとTXはレーダーのデータ伝送インターフェースです。RXはシリアル受信、TXはシリアル送信を意味します。
2. 人感知状態出力インターフェース。これら2つのピンのレベルを使用して、環境内の現在の人の動きを判定できます。
  S1出力：高レベル - 占有、低レベル - 非占有。
  S2出力：高レベル - アクティブ、低レベル - 静止。
3. フラッシュファームウェアピン配置。
4. オーバーヘッド入出力ピン。

## はじめに

### ファームウェアバージョンの更新

mmwaveセンサーは長期間の技術的蓄積とユーザーから提供された貴重な提案を経て、より正確で信頼性の高い監視結果とユーザーにとってより良い体験を提供するために、元の製品を継続的に改良してきました。

新しく出荷されるセンサーは、最新の製品体験を保証するために、デフォルトで最新のファームウェアが搭載されています。しかし、既存ユーザーの体験のために、最新のファームウェアと更新方法を提供し、最新の技術を使用できることを保証します。

#### 汎用方法 - J-linkを使用してファームウェアを書き込む

間違ったファームウェアやレーダーの異常、ファームウェアの誤動作などに遭遇した場合、この方法でファームウェアを再フラッシュすることが最も効果的な方法です。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードアドレス |
|:----------------:|:----------------:|
| Jlink_MR24HPC1-20230302.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR24HPC1-20230302.bin) |

:::caution

1. 製品の機能を慎重に確認してください。他のmmwaveセンサーと混同してこのファームウェアを書き込まないでください。そうしないと製品機能に異常が生じる可能性があり、その結果については自己責任となります！

2. ファームウェアを更新する方法によって使用するファームウェアの内容が異なることにも注意してください。ダウンロードしているのは**J-link**経由で書き込むファームウェアです。

:::

**レーダーを最新バージョンに更新するには**

**ステップ 1.** **Jlink**と**MR24HPC1** 24GHz mmWave Sensorが必要です。

下図のようにデュポンワイヤーでレーダーとJlinkを接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**ステップ 2.** 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| JlinkV644e.rar | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**ステップ 3.** **JlinkV644e.rar**を解凍し、内部の**JLink_Windows_V644e.exe**ファイルを開きます。

デフォルトオプションに従ってインストールしてください。インストールが完了したら、**J-Flash V6.44e**ソフトウェアを起動します。

**ステップ 4.** チップパッケージをインストールします。

**Pack_Segger_AT32F4xx_v1.3.3.zip**を解凍し、内部の**Segger_AT32F4xx_AddOn.exe**を開きます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

:::tip
JFlashに何かを追加する際に下の画像のようなエラーが発生した場合は、以下の手順に従って問題を解決できます。
:::

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/arteryMcu.png"/></div>

解決方法：

1. https://www.arterychip.com/en/product/AT32F403A.jsp からこのファイルをダウンロードします

2. ファイルを解凍して開きます

3. C:\Program Files\SEGGER\JLink_V794からJLinkDevices.xmlをC:\Users[User]\AppData\Roaming\SEGGERにコピーします

これで問題が解決され、JFlashまたはJFlash Liteソフトウェアでフラッシュできます。

**ステップ 5.** 新しいプロジェクトを作成します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

**AT32F403ARGT7**を見つけて選択してください。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**ステップ 6.** レーダーファームウェア（.binファイル）をこのソフトウェアにドラッグアンドドロップすると、ウィンドウがポップアップします。デフォルトの開始アドレス0x8000000をそのまま使用します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**ステップ 7.** **Target** -> **Connect**をクリックします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

接続が成功すると「Connected successfully」と表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

ファームウェアの消去：**Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

ファームウェアのアップグレード：**Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

この時点で、ファームウェアの更新が完了しました。

#### UART経由でのファームウェア更新

J-linkは高価であり、レーダーファームウェアの更新のみが必要な大多数のユーザーにとってJ-linkを購入するのは贅沢すぎることを考慮して、UART経由での更新方法を提供します。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードアドレス |
|:----------------:|:----------------:|
| UART_MR24HPC1-20230302.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR24HPC1-20230302.bin) |

:::caution

1. 製品の機能を慎重に確認してください。他のmmwaveセンサーと混同してこのファームウェアを書き込まないでください。製品機能の異常を引き起こす可能性があり、その結果については自己責任となります！

2. ファームウェアの更新方法によって使用するファームウェアの内容が異なることにもご注意ください。ダウンロードしているのは**UART**経由で書き込むファームウェアです。

3. UARTを使用してファームウェアをアップグレードする前に、レーダーファームウェアのバージョンが**少なくともバージョンG24VD1SYV001006**であることを確認してください。そうでなければレーダーが無効になる可能性があり、その時点でJ-linkを使用してファームウェアを書き込む必要があります！

レーダーにコマンド`0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43`を送信することで、ファームウェアバージョン番号情報を照会できます。レーダーから報告されたデータは文字列として表示され、以下のような効果が表示されます。

`G24VD1SYV000009`はレーダーで報告されたモデル番号で、`000009`がバージョン番号です。これは、このセンサーがUARTアップグレードを**サポートしていない**ことを意味します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/21.png"/></div>
:::

**レーダーを最新バージョンに更新するには**

**ステップ 1**. **UART to USB**と**MR24HPC1** 24GHz mmWaveセンサーが必要です。

以下の図に示すように、Dupontワイヤーを介してレーダーとUART to USBを接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**ステップ 2**. 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**ステップ 3**. パッケージPackageMake-v1.1.1.zipを解凍し、内部のPackageMake-v1.1.1.exeファイルを開きます。

センサーが接続されたUART to USBをコンピューターに接続し、ソフトウェアの左上隅にある歯車パターンをクリックし、ポート番号を選択し、ボーレートを115200に設定してから、右下隅をクリックして確認します。（ポート番号が見つからない場合は、接続を確認してから左下隅の更新ボタンをクリックして再試行してください）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**ステップ 4**. センサーの接続

上記のようにシリアルポートの設定を完了した後、右上の2番目のアイコンをクリックすると、ポートが正しく選択されていればレーダーからの生データが印刷されます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**ステップ 5**. ファームウェアの更新

左マウスボタンで右上の最後のアイコンをクリックすると、ファームウェアを選択するウィンドウが表示されます。ダウンロードしたファームウェアバージョンを選択してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

選択が完了すると、選択されたファイルパスがソフトウェアの下に表示されます。選択されたファームウェアバージョンとモデルが使用しているセンサーと一致しているかどうかを再度確認してください。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/18.png"/></div>

ファームウェアをアップグレードするには、ソフトウェアの左上の最後の画像を左マウスボタンでダブルクリックしてください。その後、ファームウェアがセンサーへのダウンロードを開始します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

プログレスバーが完了するまで待つと、ファームウェアの更新が完了します。

### 上位コンピューターの使用

**UART to USB**デバイスを介してレーダーを直接コンピューターのusbポートに接続します。配線は以下の表に示されています。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">レーダーセンサー</td>
      <td align="center" />
      <td align="center">UART to USB</td>
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
      <td align="center">TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
  </tbody></table>

上記で言及したシリアルソフトウェアに加えて、レーダー専用に設計された[上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)を直接使用することもできます。

以下の10のセクションでは、ソフトウェアの各部分の役割について説明します。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

1. Port

    レーダーがコンピュータに接続されているポートを選択します。通常、選択する前にRefreshボタンをクリックしてポートを**Refresh**する必要があります。選択したら**Open**ボタンをクリックしてください。

2. Baud rate

    MR24HPC1レーダーは115200のボーレートに設定する必要があります。

3. Motion Energy

    この値は**動的値**に相当します。この値の変動は、環境内の一定の動作ノイズを表します。空間に誰もいない場合、Motion Energyは低く、動作の大きさと距離が増加するにつれて、全体的なMotion Energyは高くなります。

4. Exit Energy

    この値は**静的値**に相当します。この値の変動は、環境内の一定の静的ノイズを表します。空間が無人の場合、Exit Energyは低く、空間に静止している人がいる場合（胸の呼吸のわずかな動き）、全体的なExit Energyはより高い値で変動します。

5. Distance

    **静止距離**: わずかに動いている領域が存在する環境とレーダー間の直線距離。空間内の場所に誰かが静止している場合、レーダーからの直線距離がリアルタイムで出力されます。
    **移動距離**: 環境内の移動位置とレーダー間の直線距離。空間内の場所に動いている人がいる場合、その場所のレーダーからの直線距離がリアルタイムで出力されます。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/9.png"/></div>

6. Graphics Settings

    リアルタイム波形と閾値の関係を明確に判断するために使用されます。リアルタイム曲線の変化に基づいて、空間の異なる状態でのフロアノイズの変化を観察することができ、フロアノイズの変化に基づいて人体の存在の閾値を設定し、静止状態の存在/不在/活動の簡単な判定を行うことができます。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/8.png"/></div>

7. Inquiry

    現在のパラメータ設定を検索します。個々のパラメータ値の意味については、スペースの関係上、詳細はユーザーマニュアルを参照してください。

8. Settings

    各パラメータの閾値を設定します。

9. Status Display

    このウィンドウは、現在の距離、速度、移動状態などの値をリアルタイムで表示します。

10. Send & Reply

    送信および受信されたデータフレーム。

## Arduinoを使用したセンサー開発

### Arduino ライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

この例で使用されるライブラリコードは、下のアイコンをクリックしてダウンロードできます。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### 関数 {#function}

スケッチの開発を始める前に、ライブラリで利用可能な関数を見てみましょう。

- `void recvRadarBytes()` —— この関数は、センサーデータプロトコルのフレームヘッダーとフレームテールに従って、UARTを介してセンサーから報告されるデータフレームを収集します。`showData()`関数と組み合わせて使用することで、収集されたデータ情報をシリアルポート経由で印刷できます。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void showData()` —— この関数は、センサーから報告される完全なデータフレームをシリアルポート経由で一度に印刷する役割を果たし、`recvRadarBytes()`関数と組み合わせて使用する必要があります。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void HumanStatic_func(bool bodysign /*=false*/)` —— この関数は、センサーのデータフレームを解析し、人の存在状態に関する関連データを出力する責任があります。

  - **入力パラメータ:** `bodysign` —— このパラメータは、Human Movement Parametersを出力するかどうかを制御するスイッチです。**true**の場合、出力には大量の人体サインパラメータデータが含まれ、データの表示体験に影響を与える可能性があります。デフォルトでは、このパラメータは**false**で、ボディサインパラメータの情報は表示されません。

  - <span id="function"><strong>戻り値:</strong></span>

    - `int radarStatus` —— 返される値は、解析されたデータフレームがどのステータスクラスに属するかを示します。具体的なカテゴリは**Default Variables**セクションで確認できます。

    - `int bodysign_val` —— 返される値は、Human Movement Parameterの値を表します。この値は、パラメータ`bodysign=true`の場合のみ有効です。

    - `int static_val` —— この値は**静的値**に相当します。この値の変動は、環境内の一定の静的ノイズを表します。空間が無人の場合、Exit Energyは低く、空間に静止している人がいる場合（胸の呼吸のわずかな動き）、全体的なExit Energyはより高い値で変動します。この値は、Open Underlying Messageがオンの場合のみ有効です。

- `int dynamic_val` —— この値の変動は、環境内の一定の動作ノイズを表します。空間に誰もいない場合、Motion Energyは低く、動作の大きさと距離が増加するにつれて、全体的なMotion Energyは高くなります。この値は、基盤メッセージが開いている場合にのみ有効です。

  - `int dis_static` —— わずかに動いている領域が存在する環境とセンサー間の直線距離。空間内の位置に誰かが静止している場合、センサーからの直線距離がリアルタイムで出力されます。この値は、基盤メッセージが開いている場合にのみ有効です。

  - `int dis_move` —— 環境内の移動位置とセンサー間の直線距離。空間内の位置に動いている人がいる場合、その位置のセンサーからの直線距離がリアルタイムで出力されます。この値は、基盤メッセージが開いている場合にのみ有効です。

  - `int speed` —— この値は移動物体の移動速度を示します。この値は参考用のみです。この値は、基盤メッセージが開いている場合にのみ有効です。

- `void checkSetMode_func(const unsigned char* buff, int len, bool cyclic /*= false*/)` —— この関数は、センサーにデータフレームを送信するために使用できます。送信されたデータフレームと返されたデータフレームは、シリアルポート経由で出力されます。

  - **入力パラメータ:**

    - `buff` —— センサーに送信したいデータフレーム。

    - `len` —— センサーに送信したいデータフレームの長さ。

    - `cyclic` —— 循環送信スイッチ。デフォルトはfalseで、このデータフレームを循環的に送信したい場合は**true**に設定できます。

  - **戻り値:** なし

- `void reset_func()` —— この関数はセンサーをリセットする役割を果たします。

  - **入力パラメータ:** なし

  - **戻り値:** なし

#### Default Variables

```c
#define MESSAGE_HEAD1 0x53       //Data frame header1
#define MESSAGE_HEAD2 0x59       //Data frame header2

#define MESSAGE_END1  0x54       //End1 of data frame
#define MESSAGE_END2  0x43       //End2 of data frame

#define HUMANSTATUS   0x80       //Human Presence Information
#define HUMANEXIST    0x01       //Presence of the human body
#define HUMANMOVE     0x02       //Human movement information
#define HUMANSIGN     0x03       //Body Signs Parameters
#define HUMANDIRECT   0x0B       //Human movement trends

#define SOMEBODY      0x01       //Somebody move
#define NOBODY        0x00       //No one here

#define NONE          0x00
#define SOMEBODY_STOP 0x01       //Somebody stop
#define SOMEBODY_MOVE 0x02       //Somebody move

#define CA_CLOSE      0x01       //Someone approaches
#define CA_AWAY       0x02       //Some people stay away


#define DETAILSTATUS  0x08       //Underlying parameters of the human state
#define DETAILINFO    0x01       //Detailed data on the state of human movement
#define DETAILDIRECT  0x06       //Human movement trends
#define DETAILSIGN    0x07       //Body Signs Parameters

//Return status, Use in arduino
#define SOMEONE       0x01       //There are people
#define NOONE         0x02       //No one
#define NOTHING       0x03       //No message
#define SOMEONE_STOP  0x04       //Somebody stop
#define SOMEONE_MOVE  0x05       //Somebody move
#define HUMANPARA     0x06       //Body Signs Parameters
#define SOMEONE_CLOSE 0x07       //Someone approaches
#define SOMEONE_AWAY  0x08       //Some people stay away
#define DETAILMESSAGE 0x09       //Underlying parameters of the human state

#define reset_frame_len 10       //Reset data frame length

//Reset data frame
const unsigned char reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};
```

### インストール

**ステップ 1.** Arduino ソフトウェアをインストールする必要があります。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**ステップ 2.** Arduino アプリケーションを起動します。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**ステップ 3.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- 後のルーチンで **Seeeduino V4.2** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を参照して追加を完了してください。

- 後のルーチンで **Seeeduino XIAO** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を参照して追加を完了してください。

- 後のルーチンで **XIAO RP2040** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)を参照して追加を完了してください。

- 後のルーチンで **XIAO nRF52840** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照して追加を完了してください。

- 後のルーチンで **XIAO ESP32C3** を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup)を参照して追加を完了してください。

:::caution
**XIAO nRF52840** については、**Seeed nRF52 mbed-enabled Boards** を選択してください。そうしないと、プログラム実行時にエラーが報告される可能性があります。
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>
:::

**ステップ 4.** Arduino コードライブラリをインストールします。

まず [GitHub](https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite) からコードベースを取得し、ローカルコンピュータにダウンロードします。

zip ライブラリをダウンロードしたので、Arduino IDE を開き、**Sketch > Include Library > Add .ZIP Library** をクリックします。ダウンロードした zip ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **Library added to your libraries** と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

## Arduino の例

ライブラリがインストールされ、基本機能を理解したので、XIAO nRF52840 Sense のいくつかの例を実行して、その動作を確認してみましょう。

### 必要な材料

以下の例を完了する前に、以下の材料を準備する必要があります。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:240, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:210, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg" style={{width:150, height:'auto'}}/></div>|
|[**MR24HPC1**](https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm から 2.54mm ピッチリボンケーブル**|

**ステップ 1.** メインボードを通してデバイスをコンピュータに接続します。配線図を以下の表に示します。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/11.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">MR24HPC1</td>
      <td align="center" />
      <td align="center">メインボード</td>
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

**ステップ 2.** Arduino IDE の左上のメニューバーで、**ツール**を選択し、使用している開発ボードの種類を選択し、対応するシリアルポートを選択します。

:::tip
**MacOS**を使用している場合、デバイスのシリアルポート名は多くの場合 **/dev/cu.usbmodem xxx** で始まり、デバイス名で終わります。**Windows**を使用している場合、デバイスのシリアルポート名は多くの場合 **COM** で始まり、同様にデバイス名で終わります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/3.png" style={{width:600, height:'auto'}}/></div>
:::

この例では、センサーが私たちの人気製品 XIAO nRF52840 Sense とどのように動作するかを実演します。

### デモ 1: センサー出力からの生データフレームのシリアルポート印刷 {#demo1}

この例では、センサーから報告される生データをシリアルポート経由で印刷するプロセスをガイドします。

以下のサンプルプログラムは、ライブラリの examples フォルダにある **MR24HPCB1_rawdata_print** というものです。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
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

メインの`loop()`関数では、`recvRadarBytes()`関数を使用してセンサーからデータフレームを受信し、次に`showData()`関数を使用してシリアルポート経由で受信したデータフレームを印刷します。

このプログラムで重要な点は、メインボードの詰まりを避けるために、2つのデータフレームの受信と出力の間に間隔があることです。この時間は**150ms**以上である必要があります。

これは、メインボードがセンサーから報告されるすべてのデータフレームを受信する方法がないことを意味しますが、センサーから報告されるフレーム数は非常に多く頻繁であるため、これはセンサーを使用して環境を判定する精度には影響しません。

プログラムをアップロードします。シリアルモニターを115200のボーレートで開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/1.png" style={{width:600, height:'auto'}}/></div>

### デモ2：解析された人体存在情報のシリアルポート印刷 {#demo2}

この例では、ライブラリの関数を使用して受信したデータフレームを解析し、センサーアクティブから報告されるすべての特徴データをシリアルポート経由で印刷します。

以下のサンプルプログラムは、ライブラリのexamplesフォルダにある**MR24HPCB1_parsed_rawdata**というものです。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.HumanStatic_func(true);    //Turn on printing of human movement sign parameters
  if(radar.radarStatus != 0x00){
    switch(radar.radarStatus){
      Serial.println(radar.radarStatus);
      case SOMEONE:
        Serial.println("Someone is here.");
        Serial.println("---------------------------------");
        break;
      case NOONE:
        Serial.println("Nobody here.");
        Serial.println("---------------------------------");
        break;
      case NOTHING:
        Serial.println("No human activity messages.");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_STOP:
        Serial.println("Someone stop");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_MOVE:
        Serial.println("Someone moving");
        Serial.println("---------------------------------");
        break;
      case HUMANPARA:
        Serial.print("The parameters of human body signs are: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("---------------------------------");
        break;
      case SOMEONE_CLOSE:
        Serial.println("Someone is closing");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_AWAY:
        Serial.println("Someone is staying away");
        Serial.println("---------------------------------");
        break;
      case DETAILMESSAGE:
        Serial.print("Spatial static values: ");
        Serial.println(radar.static_val);
        Serial.print("Distance to stationary object: ");
        Serial.print(radar.dis_static);
        Serial.println(" m");

        Serial.print("Spatial dynamic values: ");
        Serial.println(radar.dynamic_val);

        Serial.print("Distance from the movement object: ");
        Serial.print(radar.dis_move);
        Serial.println(" m");
        
        Serial.print("Speed of moving object: ");
        Serial.print(radar.speed);
        Serial.println(" m/s");
        Serial.println("---------------------------------");
        break;
    }
  }
  delay(200);
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

データ解析機能を実装するには、まず`HumanStatic_func()`関数を呼び出す必要があります。渡すパラメータは`true`または`false`で、Human Movement Parametersの表示を有効にするかどうかを制御できます。

有効にする場合、つまりパラメータ`true`を渡すと、シリアルポートで以下のメッセージが表示される可能性があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/2.png" style={{width:600, height:'auto'}}/></div>

:::note
Human Movement Parameters: 人体の動き振幅値。Human Movement Parametersは、空間に誰もいない場合は**0**、誰かがいて静止している場合は**1-5**、身体が動いている場合は**2-100**（動きの振幅が大きいほど身体動作パラメータが近くなります）。
これは、センサー認識の結果が期待に合わない場合、Human Movement Parametersの判定をカスタマイズすることで人体の存在に関する情報を出力できることを意味します。
:::

シリアルポートでのHuman Movement Parametersの大量出力を停止したい場合は、パラメータ`false`を入力すると、シリアルポートでクリーンな身体状態情報を確認できるようになります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/3.png" style={{width:600, height:'auto'}}/></div>

:::tip
シリアルモニターで長時間コンテンツが印刷されない場合がありますが、これは正常な場合があります。センサーに組み込まれたアルゴリズムは、監視対象の動作状態が変化した場合にのみ情報を出力するようになっています。アップロード手順後に静止している場合は、立ち上がって動き回り、効果を観察することをお勧めします。
:::

受信したデータが上記の2つの画像に示されているデータの情報と異なる可能性もあります。その場合、Open Underlying Message出力スイッチをオンにしている可能性があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/4.png"  style={{width:600, height:'auto'}}/></div>

Open Underlying Messageのオン・オフ方法の詳細については、[Demo 3](#demo3)の関連セクションを参照してください。簡単に言うと、Open Underlying Messageを開くということは、より詳細なデータがエクスポートされることを意味します。

Open Underlying Messageのデータの意味については、スペースの関係上、このセンサーの[**Function**](#function)セクションまたはユーザーマニュアルを参照してください。

### Demo 3: センサーにデータを送信する {#demo3}

MR24HPC1は豊富なモード設定機能を提供します。この例では、データフレームの送信方法の例として、Open Underlying Messageスイッチの実装について説明します。

以下のサンプルプログラムは、ライブラリのexamplesフォルダにある**MR24HPCB1_open_underlyingMes**というものです。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //switch off Open Underlying Message
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //switch on Open Underlying Message

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.checkSetMode_func(open_buff, 10, false);
  delay(50);   //Do not set the delay time too long, as this may affect the reception of the data frames returned by the radar.
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

センサーにデータを送信する前に、ユーザーマニュアルを参照して、必要に応じて送信する完全なデータフレームを取得し、プログラム内で送信するデータフレームを保持する配列を定義する必要があります。

この例では、ユーザーマニュアルに従って2つのデータフレーム配列を作成しました。これらの機能は、Open Underlying Message機能をオンまたはオフにすることです。

```c
const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //switch off Open Underlying Message
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //switch on Open Underlying Message
```

:::tip
**チェックディジット「sum」の計算について。**

すべてのデータフレームには、データが正確に送信または受信されることを保証するためのチェックサムビットがあります。チェックサムビットは通常、データフレームの最後から2番目のビットにあります。これは、チェックビットより前のすべてのビットを加算し、16進数で下位2ビットを取ることによって計算されます。
デバイスIDを照会するデータフレームの例を見てみましょう。
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

チェックサムビットがデータフレーム全体の最後から2番目のビットにあることがわかります。次に、前のすべての16進数を加算することから始めます。

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

次に、その下位2桁を取る必要があります。これは**60**になるので、このデータフレームのチェックサムは**60**です。センサーのIDを調べたい場合は、次の配列を定義できます。

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

次に、`checkSetMode_func()`関数を呼び出してデータフレームを送信します。渡されるパラメータは、データフレームの配列、配列の長さ、および循環送信するかどうかのブール値です。

```c
radar.checkSetMode_func(open_buff, 10, false);
```

プログラムをアップロードしてください。シリアルモニターをボーレート115200で開くと、結果が表示されるはずです。出力は以下の画像のようになるはずです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/5.png" style={{width:600, height:'auto'}}/></div>

この時点で、返されたデータフレームを確認し、ユーザーマニュアルに記載されているデータフレームと一致するかどうかを確認してください。一致していれば、セットアップは成功です。

通常、コマンドをセンサーに繰り返し送信する必要はありませんが、センサーが非常に高速でメッセージを返すため、センサーから返される正確なデータメッセージを受信できるかどうか確実ではありません。この問題には2つの解決策があります。

- 上記の手順を数回再アップロードする。
- `checkSetMode_func()`関数の第3パラメータ（循環送信）を`true`に設定する。ただし、設定タイプのデータフレームを繰り返し送信すると**センサーがジャムする可能性がある**ため、この機能は慎重に使用してください。センサーがスタックした場合は、センサーから5V電源ピンを切断し、機能が復旧するまで少し待ってください。

### デモ4: センサーのリセット {#demo4}

センサーが異常を検出する問題が発生したり、センサーのすべての設定をクリアしたい場合があります。その場合は、この例に従ってセンサーをリセットできます。

以下のサンプルプログラムは、ライブラリのexamplesフォルダにある**MR24HPCB1_reset_radar**というファイルです。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");

  radar.reset_func();
}

void loop() {
  // put your main code here, to run repeatedly:

}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからのデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

センサーのリセットは非常に簡単で、`reset_func()`を呼び出すだけです。リセットは**一度だけ実行**すれば良いので、`Setup()`関数内で使用します。

### デモ5：Arduino/Seeduinoの使用 {#demo5}

私たちのライブラリはArduino互換で、手持ちのArduinoを選んでセンサープロジェクトを開発することもできます。

MR24HPC1センサーはUARTシリアルポートを使用して通信するため、以下のようにセンサーをArduinoに接続するだけです。

<table align="center">
  <tbody><tr>
      <td align="center">MR24HPC1</td>
      <td align="center" />
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
  </tbody></table>

すべての機能は上記の `Demo 1` から `Demo 4` と同じ方法で適用されるため、この例では繰り返しません。この例では、Arduinoのソフトシリアルポートを使用してセンサーからデータ情報を取得する方法の概要を説明します。

:::tip
Arduinoソフトシリアルポートに関する注意事項については、[Arduino公式ドキュメント](https://docs.arduino.cc/learn/built-in-libraries/software-serial)を参照してください。
:::

Serialを出力とデータ送信の両方に使用することによるデータの混乱を避けるため、Arduino側では通常ソフトシリアルポートを使用します。

ソフトシリアルポートライブラリのインポートとRXおよびTXピンの定義は、プログラムの早い段階で行う必要があります。以下のプログラムでは、**A2**と**A3**ピンをソフトシリアルポートの**RX**と**TX**ピンとして定義しています。

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
HumanStaticLite radar = HumanStaticLite(&mySerial);
```

また、`Setup()` 関数でソフトシリアルポートのボーレートを設定することを忘れないでください。

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}
```

**Demo 1**を例として、Arduinoを使用してセンサーから報告されたデータフレームを印刷したい場合、完全なプログラムは以下の通りです。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

### Demo 6: データ取得のためのPCへの直接接続 {#demo6}

センサー用に設計された上位コンピューターを使用したい場合、またはシリアルソフトウェアを使用して完全なデータフレームを取得したい場合は、このルーチンを参照してください。

**UART to USB**デバイスを介してセンサーをコンピューターのusbポートに直接接続します。配線は以下の表に示されています。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">レーダーセンサー</td>
      <td align="center" />
      <td align="center">UART to USB</td>
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
  </tbody></table>

シリアルデバッグアシスタントなどのソフトウェアを使用して、Sensorが配置されているシリアルポートを選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/37.png" style={{width:200, height:'auto'}}/></div>

:::caution
MR24HPC1 Sensorは5V電源が必要です。そうでなければSensorが正常に動作しない可能性があります。
:::

接続が成功すると、Sensorが安定したメッセージストリームを送信しているのが確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/39.png" style={{width:600, height:'auto'}}/></div>

同時に、ソフトウェアの送信機能を使用してSensorにデータフレームを送信することもできます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/40.png" style={{width:600, height:'auto'}}/></div>

### Demo 7: MR24HPBC1 & XIAO ESP32C3 & ESPHome & Home Assistant {#demo7}

このレーダーとXIAO ESP32C3をESPHomeとHome Assistantに接続するためのチュートリアルを作成しました。興味がある場合は、こちらのチュートリアルを参照してください。

- [XIAO ESP32C3がESPHomeサービス経由でHome Assistantにアクセス](https://wiki.seeedstudio.com/ja/xiao-esp32c3-esphome)

### Demo 8: XIAO ESP32C3でセンサーを使用する {#demo8}

XIAO ESP32C3ハードウェアシリアルポートの[特別な設計](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/#special-way---use-usb-serial-and-uart0uart1-at-the-same-time)により、UARTを使用してセンサーとデータメッセージを送受信するには、以下のコードを使用する必要があります。

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

//HardwareSerial MySerial(0); // If you want to use D6 and D7 as serial pins, uncomment this line and comment the following line instead.
HardwareSerial MySerial(1);   // Create a new HardwareSerial class

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&MySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  /*
   * 4, 5 indicate GPIO4 and GPIO5, corresponding to pins D2 and D3. 
   * If you want to use the hardware UART pins of the XIAO ESP32C3 directly, you can change 4, 5 to -1, -1.
   * MySerial.begin(115200, SERIAL_8N1, -1, -1);
   * 
   * In addition to this you can also use the D9 (GPIO9) and D10 (GPIO10) pins as serial ports.
   * MySerial1.begin(115200, SERIAL_8N1, 9, 10);
   */
  MySerial.begin(115200, SERIAL_8N1, 4, 5);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  delay(500);

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

## トラブルシューティング

### FAQ 1: このセンサーは同じ環境で同時に複数の人を検出できますか？ {#faq1}

> A: 利用できません。このセンサーは単一の生体にのみ使用できます。監視範囲内に複数の人や動物がいる場合、監視結果に影響を与えます。

### FAQ 2: XIAO ESP32C3でシリアルモニターに何も表示されないのはなぜですか？ {#faq2}

> XIAO ESP32C3のシリアルポート機能は一般的なArduinoハードウェアとは完全に一致しておらず、Serial1を直接使用するとUSBシリアルポートが動作しない場合があります。関連するアプリケーション事例については、[XIAO ESP32C3のシリアル章](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/#serial)で詳細をご確認ください。

### FAQ 3: ライブラリでXIAO ESP32-C3の代わりに他のチップを使用することは可能ですか？ {#faq3}

はい、ライブラリでXIAO ESP32-C3の代わりに他のチップを使用することは確実に可能です。正しいRX/TXピンまたは2つのGPIOピンを接続し、ボーレートを`115200`に設定することを確認してください。
ソフトウェアまたはハードウェアのどちらの方法を使用するかを確認してください。例えば、シリアルポートが1つしかない`Arduino Uno R3`をお持ちの場合、以下のように実装できます：

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  mySerial.begin(115200);
}
void loop() {
  // Your code here
}
```

## リソース

- **[PDF]** [クイックセットアップテンプレート](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [データシート](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [ユーザーマニュアル](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **[EXE]** [上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **[ZIP]** [CE認証文書](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
