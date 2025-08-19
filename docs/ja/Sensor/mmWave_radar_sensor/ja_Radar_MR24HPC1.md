---
description: 24GHz mmWave Human Static Presence Lite
title: 24GHz mmWave Human Static Presence Lite
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Radar_MR24HPC1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# 24GHz mmWaveセンサー - Human Static Presence Module Lite (MR24HPC1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 概要

24GHz mmWaveセンサー - Human Static Presence Module Liteは、アンテナ統合型で健康に優しいmmWaveレーダーセンサーです。FMCW測距技術を適用し、24GHzで動作し、環境の影響を受けずに人間の静的存在を検出します。また、ユーザーが基礎的なパラメータを設定して検出機能を決定できるパーソナライズされたレーダーでもあります。

### 応用例

- 自動屋外照明
- 自動ドア開閉
- 全館モニタリング
- スマート家電（テレビ、浴室暖房、セキュリティなど）
- オフィスエネルギー管理（空調、照明）
- 睡眠モニタリング曲線
- ホームセキュリティ
- IPCトリガー

### 特徴

- 人間の存在を検出するmmWaveレーダー：FMCW測距技術を適用し、24GHzで動作し、5メートルの検出範囲で感知エリア内の人間の行動を検出
- パーソナライズされたレーダー検出：検出範囲、動作トリガー、状態変化時間を設定可能で、視覚的デバッグソフトウェアを提供し、さまざまなシナリオの要件に対応
- 健康に優しい動作状態：人体に無害な低出力
- 高い干渉耐性：温度、湿度、ノイズ、気流、ほこり、光などの環境影響を受けずにデータを出力
- Arduino対応

### ハードウェア概要

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/13.jpg" style={{width:500, height:'auto'}}/></div>

1. 5Vピンはレーダーの電源供給インターフェースであり、RXとTXはレーダーのデータ伝送インターフェースです。RXはシリアル受信、TXはシリアル送信を意味します。
2. 人間の存在状態出力インターフェース。これらの2つのピンのレベルを使用して、環境内の現在の人間の動きを判断できます。
   - S1出力：高レベル - 占有、低レベル - 非占有。
   - S2出力：高レベル - 活動中、低レベル - 静止中。
3. フラッシュファームウェアのピン配置。
4. オーバーヘッド入出力ピン。

## 始め方

### ファームウェアバージョンの更新

mmWaveセンサーは長期間の技術的な蓄積とユーザーから提供された貴重な提案を経て、元の製品を改良し、より正確で信頼性の高い監視結果とより良いユーザー体験を提供しています。

新しく出荷されるセンサーは、最新のファームウェアがデフォルトで搭載されており、最新の製品体験を保証します。しかし、旧ユーザーの体験を考慮して、最新のファームウェアと更新方法を提供し、最新技術を利用できるようにしています。

#### 一般的な方法 - J-linkを使用してファームウェアを書き込む

誤ったファームウェアやレーダー異常、ファームウェアの不具合などに遭遇した場合、この方法でファームウェアを再書き込みするのが最も効果的です。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードアドレス |
|:----------------:|:----------------:|
| Jlink_MR24HPC1-20230302.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR24HPC1-20230302.bin) |

:::caution
1. 製品の機能を慎重に確認してください。他のmmWaveセンサーと混同してこのファームウェアを書き込まないでください。そうしないと製品機能が異常になる可能性があり、その結果は自己責任となります。

2. ファームウェア更新方法によって使用するファームウェア内容が異なることに注意してください。ダウンロードしているのは**J-link**を介して書き込むファームウェアです。
:::

**レーダーを最新バージョンに更新する方法**

**ステップ1.** **Jlink**と**MR24HPC1** 24GHz mmWaveセンサーを用意します。

以下の図のように、デュポン線を使用してレーダーとJlinkを接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**ステップ2.** 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| JlinkV644e.rar | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**ステップ3.** **JlinkV644e.rar**を解凍し、内部の**JLink_Windows_V644e.exe**ファイルを開きます。

デフォルトのオプションに従ってインストールしてください。インストールが完了したら、**J-Flash V6.44e**ソフトウェアを起動します。

**ステップ4.** チップパッケージをインストールします。

**Pack_Segger_AT32F4xx_v1.3.3.zip**を解凍し、内部の**Segger_AT32F4xx_AddOn.exe**を開きます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

:::tip
JFlashに何かを追加する際に以下の画像のようなエラーが発生した場合、以下の手順で問題を解決できます。
:::

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/arteryMcu.png"/></div>

解決方法：

1. https://www.arterychip.com/en/product/AT32F403A.jsp からこのファイルをダウンロードします。

2. ファイルを解凍して開きます。

3. C:\Program Files\SEGGER\JLink_V794 から C:\Users[User]\AppData\Roaming\SEGGER に JLinkDevices.xml をコピーします。

これで問題が解決し、JFlashまたはJFlash Liteソフトウェアで書き込みが可能になります。

**ステップ5.** 新しいプロジェクトを作成します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

**AT32F403ARGT7** を選択してください。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**ステップ 6.** レーダーファームウェア (.bin ファイル) をこのソフトウェアにドラッグ＆ドロップするとウィンドウがポップアップします。デフォルトの開始アドレス 0x8000000 を使用します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**ステップ 7.** **Target** -> **Connect** をクリックします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

接続が成功すると、「Connected successfully」と表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

ファームウェアを消去する: **Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

ファームウェアをアップグレードする: **Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

これでファームウェアの更新が完了しました。

#### UART を使用したファームウェアの更新

J-link は高価であり、レーダーファームウェアを更新するだけの大多数のユーザーにとっては購入するのは贅沢すぎるため、UART を使用した更新方法を提供します。

**最新ファームウェアのダウンロード**

| ファームウェアバージョン | ダウンロードアドレス |
|:----------------:|:----------------:|
| UART_MR24HPC1-20230302.bin | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR24HPC1-20230302.bin) |

:::caution
1. 製品の機能を慎重に確認してください。他の mmWave センサーと混同してこのファームウェアを書き込まないでください。そうしないと製品機能が異常になる可能性があり、その結果は自己責任となります。

2. ファームウェアの更新方法によって使用するファームウェア内容が異なることに注意してください。ダウンロードしているのは **UART** を介して書き込むファームウェアです。

3. UART を使用してファームウェアをアップグレードする前に、レーダーファームウェアのバージョンが **少なくともバージョン G24VD1SYV001006** であることを確認してください。そうでない場合、レーダーが無効になる可能性があり、その場合は J-link を使用してファームウェアを書き込む必要があります。

レーダーにコマンド `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` を送信することでファームウェアバージョン番号情報を照会できます。レーダーが報告するデータは文字列として表示され、以下のような効果が見られます。

`G24VD1SYV000009` はレーダーが報告するモデル番号であり、`000009` はバージョン番号です。このセンサーは **UART アップグレードをサポートしていません**。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/21.png"/></div>
:::

**レーダーを最新バージョンに更新するには**

**ステップ 1.** **UART to USB** と **MR24HPC1** 24GHz mmWave センサーが必要です。

レーダーと UART to USB をデュポンワイヤを使用して以下の図のように接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**ステップ 2.** 必要なソフトウェアとファームウェアをダウンロードします。

| ファイル | ダウンロードアドレス |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [ダウンロード](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**ステップ 3.** PackageMake-v1.1.1.zip を解凍し、内部の PackageMake-v1.1.1.exe ファイルを開きます。

センサーが接続された UART to USB をコンピュータに接続し、ソフトウェアの左上のギアアイコンをクリックしてポート番号を選択し、ボーレートを 115200 に設定して右下の確認ボタンをクリックします。（ポート番号が見つからない場合は接続を確認し、左下のリフレッシュボタンをクリックして再試行してください）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**ステップ 4.** センサーの接続

上記のようにシリアルポートを設定した後、右上の2番目のアイコンをクリックすると、ポートが正しく選択されている場合、レーダーからの生データが表示されます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**ステップ 5.** ファームウェアの更新

左上の最後のアイコンを左クリックすると、ファームウェアを選択するウィンドウが表示されます。ダウンロードしたファームウェアバージョンを選択してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

選択が完了すると、選択したファイルパスがソフトウェアに表示されます。選択したファームウェアバージョンと使用しているセンサーのモデルが一致しているかを再確認してください。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/18.png"/></div>

ファームウェアをアップグレードするには、ソフトウェアの左上の最後の画像をダブルクリックしてください。これにより、ファームウェアがセンサーにダウンロードされ始めます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

進行バーが終了するのを待つと、ファームウェアの更新が完了します。

### 上位コンピュータの使用

レーダーを **UART to USB** デバイスを介してコンピュータの USB ポートに直接接続します。配線は以下の表に示されています。

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

上記で述べたシリアルソフトウェアに加えて、レーダー専用に設計された[上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)を使用することもできます。

以下の10セクションでは、ソフトウェアの各部分の役割について説明します。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

1. ポート

    レーダーがコンピュータに接続されているポートを選択します。通常、ポートを選択する前に**Refresh**ボタンをクリックしてポートを更新する必要があります。選択後は**Open**ボタンをクリックしてください。

2. ボーレート

    MR24HPC1レーダーはボーレートを115200に設定する必要があります。

3. モーションエネルギー

    この値は**動的値**に相当します。この値の変化は環境内の一定の動作ノイズを表します。空間に誰もいない場合、モーションエネルギーは低くなり、動作の規模や距離が増加するにつれて全体的なモーションエネルギーが高くなります。

4. エグジットエネルギー

    この値は**静的値**に相当します。この値の変化は環境内の一定の静的ノイズを表します。空間が無人の場合、エグジットエネルギーは低くなり、空間内に静止している人（胸の呼吸によるわずかな動き）がいる場合、全体的なエグジットエネルギーは高い値で変動します。

5. 距離

    **静止距離**: わずかに動いている領域が存在する場合の環境とレーダー間の直線距離。空間内の特定の場所に静止している人がいる場合、その場所からレーダーまでの直線距離がリアルタイムで出力されます。
    **動作距離**: 環境内の動いている位置とレーダー間の直線距離。空間内の特定の場所で動いている人がいる場合、その場所からレーダーまでの直線距離がリアルタイムで出力されます。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/9.png"/></div>

6. グラフィック設定

    リアルタイム波形と閾値の関係を明確に判断するために使用されます。リアルタイムの曲線変化に基づいて、空間の異なる状態における床ノイズの変化を観察することができ、床ノイズの変化に基づいて人体の存在閾値を設定し、静止状態の存在/不在/活動を簡単に判断することができます。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/8.png"/></div>

7. 問い合わせ

    現在のパラメータ設定を検索します。個々のパラメータ値の意味については、スペースの都合上、ユーザーマニュアルを参照してください。

8. 設定

    各パラメータの閾値を設定します。

9. 状態表示

    このウィンドウには、現在の距離、速度、動作状態などの値がリアルタイムで表示されます。

10. 送信＆返信

    送信および受信されたデータフレーム。

## Arduinoを使用したセンサー開発

### Arduinoライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

この例で使用されるライブラリコードは、以下のアイコンをクリックしてダウンロードできます。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### 関数 {#function}

スケッチの開発を始める前に、ライブラリの利用可能な関数を確認しましょう。

- `void recvRadarBytes()` —— この関数は、センサーのデータプロトコル内のフレームヘッダーとフレームテールに基づいて、UART経由でセンサーから報告されたデータフレームを収集します。`showData()`関数と組み合わせて使用することで、収集されたデータ情報をシリアルポート経由で出力できます。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void showData()` —— この関数は、センサーから報告された完全なデータフレームを一度にシリアルポート経由で出力する役割を果たし、`recvRadarBytes()`関数と組み合わせて使用する必要があります。

  - **入力パラメータ:** なし

  - **戻り値:** なし

- `void HumanStatic_func(bool bodysign /*=false*/)` —— この関数は、センサーのデータフレームを解析し、人の存在状態に関する関連データを出力する役割を果たします。

  - **入力パラメータ:** `bodysign` —— このパラメータは、人の動作パラメータを出力するかどうかを制御するスイッチです。**true**の場合、大量の人の動作パラメータデータが出力され、データの閲覧体験に影響を与える可能性があります。このパラメータはデフォルトで**false**であり、体の動作パラメータ情報は表示されません。

  - <span id="function"><strong>戻り値:</strong></span>

    - `int radarStatus` —— 返される値は、解析されたデータフレームが属する状態クラスを示します。具体的なカテゴリは**デフォルト変数**セクションで確認できます。

    - `int bodysign_val` —— 返される値は、人の動作パラメータの値を表します。この値は、`bodysign=true`の場合にのみ有効です。

    - `int static_val` —— この値は**静的値**に相当します。この値の変化は環境内の一定の静的ノイズを表します。空間が無人の場合、エグジットエネルギーは低くなり、空間内に静止している人（胸の呼吸によるわずかな動き）がいる場合、全体的なエグジットエネルギーは高い値で変動します。この値は、基礎メッセージがオンの場合にのみ有効です。

    - `int dynamic_val` —— この値の変動は、環境内の一定の動作ノイズを表します。空間に誰もいない場合、モーションエネルギーは低くなり、動作の大きさや距離が増加するにつれて、全体のモーションエネルギーが高くなります。この値は、Open Underlying Messageがオンの場合にのみ有効です。

    - `int dis_static` —— わずかに動いているエリアが存在する場合の環境とセンサー間の直線距離。空間内の特定の場所に誰かが静止している場合、そのセンサーからの直線距離がリアルタイムで出力されます。この値は、Open Underlying Messageがオンの場合にのみ有効です。

    - `int dis_move` —— 環境内の移動している位置とセンサー間の直線距離。空間内の特定の場所で人が移動している場合、そのセンサーからの直線距離がリアルタイムで出力されます。この値は、Open Underlying Messageがオンの場合にのみ有効です。

    - `int speed` —— この値は移動物体の移動速度を示します。この値は参考値としてのみ使用されます。この値は、Open Underlying Messageがオンの場合にのみ有効です。

- `void checkSetMode_func(const unsigned char* buff, int len, bool cyclic /*= false*/)` —— この関数はセンサーにデータフレームを送信するために使用できます。送信されたデータフレームと返されたデータフレームはシリアルポートを介して出力されます。

  - **入力パラメータ:**

    - `buff` —— センサーに送信したいデータフレーム。

    - `len` —— センサーに送信したいデータフレームの長さ。

    - `cyclic` —— 循環送信スイッチ。デフォルトはfalseで、データフレームを循環的に送信したい場合は**true**に設定できます。

  - **戻り値:** なし

- `void reset_func()` —— この関数はセンサーをリセットするためのものです。

  - **入力パラメータ:** なし

  - **戻り値:** なし

#### デフォルト変数

```c
#define MESSAGE_HEAD1 0x53       //データフレームヘッダー1
#define MESSAGE_HEAD2 0x59       //データフレームヘッダー2

#define MESSAGE_END1  0x54       //データフレームの終了1
#define MESSAGE_END2  0x43       //データフレームの終了2

#define HUMANSTATUS   0x80       //人の存在情報
#define HUMANEXIST    0x01       //人の存在
#define HUMANMOVE     0x02       //人の移動情報
#define HUMANSIGN     0x03       //身体のサインパラメータ
#define HUMANDIRECT   0x0B       //人の移動傾向

#define SOMEBODY      0x01       //誰かが移動
#define NOBODY        0x00       //誰もいない

#define NONE          0x00
#define SOMEBODY_STOP 0x01       //誰かが停止
#define SOMEBODY_MOVE 0x02       //誰かが移動

#define CA_CLOSE      0x01       //誰かが近づく
#define CA_AWAY       0x02       //誰かが遠ざかる


#define DETAILSTATUS  0x08       //人の状態の基礎パラメータ
#define DETAILINFO    0x01       //人の移動状態の詳細データ
#define DETAILDIRECT  0x06       //人の移動傾向
#define DETAILSIGN    0x07       //身体のサインパラメータ

//戻りステータス、Arduinoで使用
#define SOMEONE       0x01       //人がいる
#define NOONE         0x02       //誰もいない
#define NOTHING       0x03       //メッセージなし
#define SOMEONE_STOP  0x04       //誰かが停止
#define SOMEONE_MOVE  0x05       //誰かが移動
#define HUMANPARA     0x06       //身体のサインパラメータ
#define SOMEONE_CLOSE 0x07       //誰かが近づく
#define SOMEONE_AWAY  0x08       //誰かが遠ざかる
#define DETAILMESSAGE 0x09       //人の状態の基礎パラメータ

#define reset_frame_len 10       //リセットデータフレームの長さ

//リセットデータフレーム
const unsigned char reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};
```

### インストール

**ステップ 1.** Arduinoソフトウェアをインストールする必要があります。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**ステップ 2.** Arduinoアプリケーションを起動します。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**ステップ 3.** 開発ボードモデルを選択し、Arduino IDEに追加します。

- 後のルーチンで**Seeeduino V4.2**を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を参照して追加を完了してください。

- 後のルーチンで**Seeeduino XIAO**を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)を参照して追加を完了してください。

- 後のルーチンで**XIAO RP2040**を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)を参照して追加を完了してください。

- 後のルーチンで**XIAO nRF52840**を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)を参照して追加を完了してください。

- 後のルーチンで**XIAO ESP32C3**を使用したい場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/#software-setup)を参照して追加を完了してください。

:::caution
**XIAO nRF52840**の場合は、**Seeed nRF52 mbed-enabled Boards**を選択してください。そうしないと、プログラム実行時にエラーが報告される可能性があります。
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>
:::

**ステップ 4.** Arduinoコードライブラリをインストールします。

まず、[GitHub](https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite)からコードベースを取得し、ローカルコンピュータにダウンロードします。

ZIPライブラリをダウンロードしたら、Arduino IDEを開き、**スケッチ > ライブラリを含める > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

## Arduinoの例

ライブラリをインストールし、基本的な機能を理解したので、XIAO nRF52840 Senseを使用していくつかの例を実行し、その動作を確認してみましょう。

### 必要な材料

以下の例を完了する前に、以下の材料を準備する必要があります。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:240, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:210, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg" style={{width:150, height:'auto'}}/></div>|
|[**MR24HPC1**](https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mmから2.54mmピッチリボンケーブル**|

**ステップ1.** メインボードを介してデバイスをコンピュータに接続します。配線図は以下の表に示されています。

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

**ステップ2.** Arduino IDEの左上のメニューバーで**ツール**を選択し、使用している開発ボードの種類を選択し、対応するシリアルポートを選択します。

:::tip
**MacOS**を使用している場合、デバイスのシリアルポート名は通常**/dev/cu.usbmodem xxx**で始まり、デバイス名で終わります。**Windows**を使用している場合、デバイスのシリアルポート名は通常**COM**で始まり、デバイス名で終わります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/3.png" style={{width:600, height:'auto'}}/></div>
:::

この例では、人気のある製品XIAO nRF52840 Senseを使用してセンサーの動作をデモンストレーションします。

### デモ1: センサー出力の生データフレームをシリアルポートで表示する {#demo1}

この例では、センサーがシリアルポートを介して報告する生データを表示するプロセスを案内します。

以下の例のプログラムは、ライブラリの**MR24HPCB1_rawdata_print**という名前のexamplesフォルダにあります。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// ソフトウェアシリアルでRX & TXに使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// ハードウェアシリアルも試すことができます
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");
}

void loop() {
  // 繰り返し実行されるメインコードを記述
  radar.recvRadarBytes();           // レーダーデータを受信して処理を開始
  radar.showData();                 // シリアルポートで受信したデータフレームを表示
  delay(200);                       // プログラムの詰まりを避けるために時間遅延を追加
}
```

:::tip
XIAO ESP32シリーズを使用していて、mmWaveレーダーからデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

このプログラムでは、XIAO nRF52840のハードウェア**Serial1**ポートを使用してセンサーに接続し、ハードウェア**Serial**ポートを使用してデータを出力します。そのため、初期化関数`Setup()`でこのシリアルポートを個別に初期化する必要があります。

メインの`loop()`関数では、`recvRadarBytes()`関数を使用してセンサーからデータフレームを受信し、`showData()`関数を使用して受信したデータフレームをシリアルポートで表示します。

このプログラムでは、2つのデータフレームの受信と出力の間に間隔があることが重要です。これにより、メインボードの詰まりを避けることができます。この時間は**150ms**以上である必要があります。

つまり、メインボードがセンサーから報告されるすべてのデータフレームを受信することはできませんが、センサーが報告するフレーム数は非常に多く頻繁であるため、センサーを使用して環境を判断する精度には影響しません。

プログラムをアップロードします。シリアルモニターを開き、ボーレートを115200に設定すると結果が表示されます。出力は以下の画像のようになります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/1.png" style={{width:600, height:'auto'}}/></div>

### デモ2: 解析された人間の存在情報をシリアルポートで表示する {#demo2}

この例では、ライブラリ内の関数を使用して受信したデータフレームを解析し、センサーがアクティブに報告するすべての特徴データをシリアルポートで表示します。

以下の例のプログラムは、ライブラリの**MR24HPCB1_parsed_rawdata**という名前のexamplesフォルダにあります。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// ソフトウェアシリアルでRX & TXに使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// ハードウェアシリアルも試すことができます
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  Serial.println("準備完了");
}

void loop() {
  // 繰り返し実行されるメインコードを記述
  radar.HumanStatic_func(true);    // 人間の動きのサインパラメータの印刷をオンにする
  if(radar.radarStatus != 0x00){
    switch(radar.radarStatus){
      Serial.println(radar.radarStatus);
      case SOMEONE:
        Serial.println("誰かがここにいます。");
        Serial.println("---------------------------------");
        break;
      case NOONE:
        Serial.println("誰もいません。");
        Serial.println("---------------------------------");
        break;
      case NOTHING:
        Serial.println("人間の活動メッセージはありません。");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_STOP:
        Serial.println("誰かが止まっています。");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_MOVE:
        Serial.println("誰かが動いています。");
        Serial.println("---------------------------------");
        break;
      case HUMANPARA:
        Serial.print("人間の体のサインのパラメータは: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("---------------------------------");
        break;
      case SOMEONE_CLOSE:
        Serial.println("誰かが近づいています。");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_AWAY:
        Serial.println("誰かが遠ざかっています。");
        Serial.println("---------------------------------");
        break;
      case DETAILMESSAGE:
        Serial.print("空間静的値: ");
        Serial.println(radar.static_val);
        Serial.print("静的オブジェクトまでの距離: ");
        Serial.print(radar.dis_static);
        Serial.println(" m");

        Serial.print("空間動的値: ");
        Serial.println(radar.dynamic_val);

        Serial.print("動いているオブジェクトまでの距離: ");
        Serial.print(radar.dis_move);
        Serial.println(" m");
        
        Serial.print("動いているオブジェクトの速度: ");
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
もし XIAO ESP32 シリーズを使用していて、mmwave レーダーからデータフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

データ解析機能を実装するには、まず `HumanStatic_func()` 関数を呼び出す必要があります。この関数に渡すパラメータは `true` または `false` で、人体移動パラメータの表示を有効にするかどうかを制御します。

表示をオンにする場合、つまりパラメータに `true` を渡す場合、シリアルポートで以下のようなメッセージが表示される可能性があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/2.png" style={{width:600, height:'auto'}}/></div>

:::note
人体移動パラメータ: 人体移動の振幅値。人体移動パラメータは、空間に誰もいない場合は **0**、誰かが存在して静止している場合は **1-5**、体が動いている場合は **2-100**（動きの振幅が大きいほど、人体移動パラメータが高くなる）です。
これは、センサー認識の結果が期待に合わないと感じた場合、人体移動パラメータの判定をカスタマイズすることで人体の存在情報を出力できることを意味します。
:::

シリアルポートで人体移動パラメータの大量出力を停止したい場合は、パラメータに `false` を入力すると、シリアルポートでクリーンな体の状態情報を確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/3.png" style={{width:600, height:'auto'}}/></div>

:::tip
シリアルモニターに長時間コンテンツが表示されない場合がありますが、これは正常な場合があります。センサーに組み込まれたアルゴリズムは、監視対象の動作状態が変化した場合にのみ情報を出力するようになっています。アップロード手順後に静止している場合は、立ち上がって動き回り、効果を観察してみてください。
:::

受信したデータが上記の2つの画像に示されている情報と異なる場合もあります。この場合、Open Underlying Message 出力スイッチをオンにしている可能性があります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/4.png"  style={{width:600, height:'auto'}}/></div>

Open Underlying Message のオン/オフ方法については、[Demo 3](#demo3) の関連セクションを参照してください。簡単に言えば、Open Underlying Message をオンにすると、より詳細なデータが出力されます。

Open Underlying Message のデータの意味については、スペースの都合上、センサーの[**Function**](#function)セクションまたはユーザーマニュアルを参照してください。

### Demo 3: センサーにデータを送信する {#demo3}

MR24HPC1 は豊富なモード設定機能を提供します。この例では、Open Underlying Message のスイッチを実装する方法を説明し、データフレームを送信する例を示します。

以下の例のプログラムは、ライブラリの例フォルダにある **MR24HPCB1_open_underlyingMes** に含まれています。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// ソフトウェアシリアルで RX & TX に使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// ハードウェアシリアルも試すことが可能
HumanStaticLite radar = HumanStaticLite(&Serial1);

const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //Open Underlying Message をオフにする
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //Open Underlying Message をオンにする

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //シリアルポートが開かれるとプログラムが実行開始

  Serial.println("Ready");
}

void loop() {
  // 繰り返し実行されるメインコードを記述
  radar.checkSetMode_func(open_buff, 10, false);
  delay(50);   //遅延時間を長く設定しすぎないように注意。レーダーから返されるデータフレームの受信に影響を与える可能性があります。
}
```

:::tip
もし XIAO ESP32 シリーズを使用していて、mmwave レーダーからデータフィードバックがない場合は、上記のコードを ```Serial1.begin(115200);``` から ```Serial1.begin(115200, SERIAL_8N1, D7, D6);``` に変更してみてください。
:::

センサーにデータを送信する前に、ユーザーマニュアルを参照して送信する必要のある完全なデータフレームを取得し、プログラム内で送信するデータフレームを保持する配列を定義する必要があります。

この例では、ユーザーマニュアルに基づいて2つのデータフレーム配列を作成しました。それらの機能は、Open Underlying Message 機能をオンまたはオフにすることです。

```c
const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //Open Underlying Message をオフにする
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //Open Underlying Message をオンにする
```

:::tip
**チェックサム "sum" の計算について**

すべてのデータフレームには、データが正確に送信または受信されることを保証するためのチェックサムビットがあります。チェックサムビットは通常、データフレームの最後から2番目のビットにあります。これは、チェックビットの前のすべてのビットを加算し、16進数で下位2桁を取ることで計算されます。
デバイス ID を照会するデータフレームの例を見てみましょう。
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

チェックサムビットがデータフレーム全体の最後から2番目のビットにあることがわかります。次に、前のすべての16進数を加算します。

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

次に、その下位2桁を取る必要があります。それは **60** となり、このデータフレームのチェックサムは **60** です。センサーの ID を照会したい場合は、以下の配列を定義できます。


`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

次に、`checkSetMode_func()`関数を呼び出してデータフレームを送信します。この関数には、データフレームの配列、配列の長さ、および送信を周期的に行うかどうかを示すブール値が渡されます。

```c
radar.checkSetMode_func(open_buff, 10, false);
```

プログラムをアップロードします。シリアルモニターを115200のボーレートで開くと、結果が表示されるはずです。出力は以下の画像のようになります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/5.png" style={{width:600, height:'auto'}}/></div>

この時点で、返されたデータフレームを確認し、それがユーザーマニュアルに記載されている返されたデータフレームと一致する場合、セットアップは成功です。

通常、センサーに対してコマンドを繰り返し送信する必要はありませんが、センサーが非常に速くメッセージを返信するため、センサーから返された正確なデータメッセージを受信できるかどうかを確信できない場合があります。この問題を解決する方法は2つあります。

- 上記の手順を数回再アップロードする。
- `checkSetMode_func()`関数の第3パラメータ（周期的送信）を`true`に設定する。ただし、設定タイプのデータフレームを繰り返し送信すると**センサーが詰まる可能性がある**ため、この機能は慎重に使用してください。センサーが詰まった場合は、センサーの5V供給ピンを切断し、数秒待ってから機能を再開してください。

### デモ 4: センサーのリセット {#demo4}

センサーが異常を検出する問題が発生した場合や、センサーのすべての設定をクリアしたい場合は、この例に従ってセンサーをリセットできます。

以下の例のプログラムは、ライブラリの例フォルダにある**MR24HPCB1_reset_radar**という名前のものです。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// RX & TXに使用できる任意の2つのピンを選択
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// ハードウェアシリアルも試すことができます
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれると、プログラムが実行を開始します。

  Serial.println("Ready");

  radar.reset_func();
}

void loop() {
  // 繰り返し実行されるメインコードを記述

}
```

:::tip
XIAO ESP32シリーズを使用していて、mmwaveレーダーからデータフィードバックがない場合は、上記のコードを```Serial1.begin(115200);```から```Serial1.begin(115200, SERIAL_8N1, D7, D6);```に変更してみてください。
:::

センサーのリセットは非常に簡単で、`reset_func()`を呼び出すだけです。リセットは**一度だけ実行**する必要があるため、`Setup()`関数内で使用します。

### デモ 5: Arduino/Seeeduinoの使用 {#demo5}

ライブラリはArduino互換であり、手元にあるArduinoを選択してセンサープロジェクトを開発することもできます。

MR24HPC1センサーはUARTシリアルポートを使用して通信します。以下の配線に従ってセンサーをArduinoに接続するだけです。

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

すべての関数は上記の`デモ 1`から`デモ 4`と同じ方法で適用されるため、この例では繰り返しません。この例では、Arduinoのソフトシリアルポートを使用してセンサーからデータ情報を取得する方法の概要を示します。

:::tip
Arduinoのソフトシリアルポートに関する注意事項については、[公式Arduinoドキュメント](https://docs.arduino.cc/learn/built-in-libraries/software-serial)を参照してください。
:::

シリアルを出力とデータ送信の両方に使用することで発生するデータの混乱を避けるため、Arduino側では通常ソフトシリアルポートを使用します。

ソフトシリアルポートライブラリのインポートとRXおよびTXピンの定義は、プログラム内で早めに行う必要があります。以下のプログラムでは、ソフトシリアルポートの**RX**および**TX**ピンとして**A2**および**A3**ピンを定義しています。

```c
#include <SoftwareSerial.h>
// RX & TXに使用できる任意の2つのピンを選択
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
HumanStaticLite radar = HumanStaticLite(&mySerial);
```

また、`Setup()`関数内でソフトシリアルポートのボーレートを設定することを忘れないでください。

```c
void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれると、プログラムが実行を開始します。

  Serial.println("Ready");
}
```

**デモ 1**を例にすると、Arduinoを使用してセンサーから報告されたデータフレームを印刷したい場合、完全なプログラムは以下の通りです。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// RX & TXに使用できる任意の2つのピンを選択
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // 初回実行時にセットアップコードを記述
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   // シリアルポートが開かれると、プログラムが実行を開始します。

  Serial.println("Ready");
}

void loop() {
  // 繰り返し実行されるメインコードを記述
  radar.recvRadarBytes();           // レーダーデータを受信し、処理を開始
  radar.showData();                 // シリアルポートに受信したデータフレームを1セット印刷
  delay(200);                       // プログラムの詰まりを避けるために時間遅延を追加
}
```

### デモ 6: PCへの直接接続によるデータ取得 {#demo6}

センサー用に設計された上位コンピュータを使用したい場合や、シリアルソフトウェアを使用して完全なデータフレームを取得したい場合、この手順を参照してください。

センサーを**UART to USB**デバイスを介してコンピュータのUSBポートに直接接続します。配線は以下の表に示されています。

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

シリアルデバッグアシスタントのようなソフトウェアを使用して、センサーが接続されているシリアルポートを選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/37.png" style={{width:200, height:'auto'}}/></div>

:::caution
MR24HPC1センサーは5Vの電源供給が必要です。そうでない場合、センサーが正常に動作しない可能性があります。
:::

接続が成功すると、センサーが一定のメッセージを送信し続けるのが確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/39.png" style={{width:600, height:'auto'}}/></div>

同時に、ソフトウェアの送信機能を使用してセンサーにデータフレームを送信することもできます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/40.png" style={{width:600, height:'auto'}}/></div>

### デモ 7: MR24HPBC1 & XIAO ESP32C3 & ESPHome & Home Assistant {#demo7}

このレーダーとXIAO ESP32C3をESPHomeおよびHome Assistantに接続するためのチュートリアルを作成しました。興味がある場合は、以下のチュートリアルを参照してください。

- [XIAO ESP32C3がESPHomeサービスを介してHome Assistantにアクセスする](https://wiki.seeedstudio.com/ja/xiao-esp32c3-esphome)

### デモ 8: XIAO ESP32C3でセンサーを使用する {#demo8}

XIAO ESP32C3のハードウェアシリアルポートの[特殊な設計](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/#special-way---use-usb-serial-and-uart0uart1-at-the-same-time)により、センサーとのUART通信でデータメッセージを送受信するには以下のコードを使用する必要があります。

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

//HardwareSerial MySerial(0); // D6とD7をシリアルピンとして使用したい場合、この行のコメントを解除し、以下の行をコメントアウトしてください。
HardwareSerial MySerial(1);   // 新しいHardwareSerialクラスを作成

// ハードウェアシリアルも試すことができます
HumanStaticLite radar = HumanStaticLite(&MySerial);

void setup() {
  // 初回実行時のセットアップコードをここに記述
  Serial.begin(115200);

  /*
   * 4, 5はGPIO4とGPIO5を示し、ピンD2とD3に対応します。
   * XIAO ESP32C3のハードウェアUARTピンを直接使用したい場合は、4, 5を-1, -1に変更してください。
   * MySerial.begin(115200, SERIAL_8N1, -1, -1);
   * 
   * さらに、D9 (GPIO9)とD10 (GPIO10)ピンをシリアルポートとして使用することもできます。
   * MySerial1.begin(115200, SERIAL_8N1, 9, 10);
   */
  MySerial.begin(115200, SERIAL_8N1, 4, 5);

  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始

  delay(500);

  Serial.println("準備完了");
}

void loop() {
  // 繰り返し実行されるメインコードをここに記述
  radar.recvRadarBytes();           // レーダーデータを受信し、処理を開始
  radar.showData();                 // シリアルポートに受信したデータフレームを表示
  delay(200);                       // プログラムの詰まりを防ぐために遅延を追加
}
```

## トラブルシューティング

### FAQ 1: このセンサーは同じ環境で複数の人を検出できますか？ {#faq1}

> A: 利用不可。このセンサーは単一の生体対象にのみ使用できます。監視範囲内に複数の人や動物がいる場合、監視結果に影響を与える可能性があります。

### FAQ 2: XIAO ESP32C3でシリアルモニターに何も表示されないのはなぜですか？ {#faq2}

> XIAO ESP32C3のシリアルポート機能は一般的なArduinoハードウェアと完全には一致しておらず、Serial1を直接使用するとUSBシリアルポートが動作しない可能性があります。関連する適用例については、[XIAO ESP32C3のシリアル章](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Pin_Multiplexing/#serial)をご覧ください。

### FAQ 3: ライブラリを使用する際にXIAO ESP32-C3以外のチップを使用することは可能ですか？ {#faq3}

はい、XIAO ESP32-C3以外のチップを使用してライブラリを利用することは可能です。ただし、正しいRX/TXピンまたは2つのGPIOピンを接続し、ボーレートを`115200`に設定してください。
使用する方法（ソフトウェアまたはハードウェア）を確認してください。例えば、シリアルポートが1つしかない`Arduino Uno R3`を使用する場合、以下のように実装できます：

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// SoftwareSerialで使用可能な任意の2つのピンをRX & TXとして選択
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// ソフトウェアシリアルを使用します
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // 初回実行時のセットアップコード
  Serial.begin(115200);
  mySerial.begin(115200);
}
void loop() {
  // ここにコードを記述
}
```

## リソース

- **[PDF]** [クイックセットアップテンプレート](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [データシート](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [ユーザーマニュアル](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **[EXE]** [上位コンピュータソフトウェア](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **[ZIP]** [CE認証文書](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>