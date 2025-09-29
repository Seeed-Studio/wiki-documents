---
description: Seeed Studio 24GHz mmWave for XIAO の使用開始
title: 24GHz mmWave for XIAO
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/mmwave_for_xiao
last_update:
  date: 11/09/2023
  author: Citric
---

# Seeed Studio 24GHz mmWave for XIAO

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:300, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div><br />

## はじめに

24GHz mmWave Sensor for XIAO - Human Static Presence は、Seeed Studio XIAO シリーズ用の拡張ボードです。FMCW 原理に基づいたアンテナ一体型の高感度 mmWave レーダーセンサーです。レーダー信号処理と正確な人体検知アルゴリズムを組み合わせることで、動いている人体と静止している人体を識別することができます。

### 特徴

- **FMCW 原理に基づく**: 高感度で環境干渉に強い
- **包括的な人体検知**: センサーは動いている人体を高感度で検知するだけでなく、静止している人、微細な動き、座っている人や横になっている人に対しても感度を示します。
- **マルチレベル インテリジェント パラメータ調整**: Bluetooth またはシリアルポートを使用して調整でき、さまざまな環境条件やシーンの変化に対応する柔軟性を提供します。さらに、アプリを通じて直接パラメータ設定をサポートし、シリアルポート接続の必要性を排除します。
- **広い検知角度と長い検知距離**: 最大60度の視野角を持ち、センサーは広角から動きを検知できます。さらに、最大5メートル離れた物体を検知できます。
- **優れた筐体透過性と美観向上**: 良好な筐体透過性を持ち、製品の筐体内部で目立たずに動作でき、表面に穴を開ける必要がありません。

### 応用

- 人体センサー照明制御
- 生活安全保護
- スマート家電
- インテリジェント セキュリティ

### 仕様

<div class="table-center">
  <table align="center">
    <tr>
        <th>パラメータ</th>
        <th>値</th>
    </tr>
    <tr>
        <td align="center">動作周波数</td>
        <td align="center">24GHz ~ 24.25GHz</td>
    </tr>
    <tr>
        <td align="center">動作電圧</td>
        <td align="center">DC 5V</td>
    </tr>
    <tr>
        <td align="center">電源供給容量</td>
        <td align="center">>200mA</td>
    </tr>
    <tr>
        <td align="center">平均動作電流</td>
        <td align="center">79mA</td>
    </tr>
    <tr>
        <td align="center">変調</td>
        <td align="center">FMCW</td>
    </tr>
    <tr>
        <td align="center">インターフェース</td>
        <td align="center">GPIO (IO レベル 3.3V), UART</td>
    </tr>
    <tr>
        <td align="center">対象アプリケーション</td>
        <td align="center">人体存在センサー</td>
    </tr>
    <tr>
        <td align="center">検知距離</td>
        <td align="center">0.75m ~ 6m (調整可能)</td>
    </tr>
    <tr>
        <td align="center">検知角度</td>
        <td align="center">±60°</td>
    </tr>
    <tr>
        <td align="center">距離分解能</td>
        <td align="center">0.75m</td>
    </tr>
    <tr>
        <td align="center">スイープ帯域幅</td>
        <td align="center">250MHz</td>
    </tr>
    <tr>
        <td align="center">周囲温度</td>
        <td align="center">-40℃ ~ 85℃</td>
    </tr>
    <tr>
        <td align="center">寸法</td>
        <td align="center">18mm x 22mm</td>
    </tr>
  </table>
</div>

## ハードウェア概要

このmmwaveセンサーはXIAOの全シリーズと互換性があるため、ピン定義はXIAOのピン定義に従います。ただし、シリアルポートの広範囲な使用を考慮して、mmwaveセンサー用にソフトシリアル接続を設計しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/2.png" style={{width:800, height:'auto'}}/></div>

このセンサーは主にソフトシリアルポート（D2 - TX、D3 - RX）と3.3V電源に依存しています。それ以外のピンは使用されません。

## はじめに

このセンサーモジュールは、直接ソフトウェア表示（Bluetooth経由）と二次開発（XIAOとUARTを使用）の両方をサポートしています。センサー値をできるだけ早く観察したい場合は、**はじめに**の手順を参照して、私たちが提供するソフトウェアを使用してください。

## ハードウェア接続

このセンサーはXIAO互換性のために設計されているため、一般的に、このセンサーを使用したい場合は、XIAOを準備し、センサー用のメスヘッダーピンを取り付ける必要があります。XIAOに接続する際は、センサーの取り付け方向に特に注意してください。逆向きに差し込まないでください。そうしないとセンサーやXIAOを焼損する可能性があります。

:::caution
正しい方向は、センサーのアンテナが外側を向くようにすることです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

接続方向が正しいことを確認した後、USB-Cタイプケーブルをコンピューターまたは電源に接続すると、センサーが動作を開始します。

### mmwaveセンサーソフトウェア

HLKRadarToolソフトウェアを使用して、レーダーのセンサー値を直接観察できます。このソフトウェアは現在、iOS、Android、Windowsシステムをサポートしています。

- [Google PlayからHLKRadarToolをダウンロード](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool)

- [App StoreからHLKRadarToolをダウンロード](https://apps.apple.com/us/app/hlkradartool/id1638651152)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

- [Windows用HLKRadarToolをダウンロード](https://files.seeedstudio.com/wiki/mmwave-for-xiao/HLKRadarTool.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/4.png" style={{width:250, height:'auto'}}/></div>

以下では、これらのソフトウェアをセンサーと組み合わせて使用する方法について説明します。

### モバイルソフトウェア操作ガイド

携帯電話でセンサーの値を観察したい場合は、センサーのBluetoothを使用して携帯電話と通信する必要があります。つまり、Bluetooth対応の携帯電話も必要です。そして、上記のソフトウェアを事前にダウンロードしてください。

**ステップ1.** アプリを開くと、アプリが近くのレーダーデバイスを検索します。デバイスのブロードキャスト名は**HLK-LD2410_xxxx**です（xxxxはmacアドレスの下4桁）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

:::tip
APPの使用距離はBluetooth信号範囲を超えてはいけません（4メートル以内）。
:::

**ステップ2.** モジュールが正常に接続された後、レーダー情報を表示したり、パラメータをデバッグして保存したりできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**ステップ3.** ソフトウェアの右上角のMoreオプションで、設定メニューにアクセスして、センサーのカスタムパラメータと機能を設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/8.png" style={{width:400, height:'auto'}}/></div>

:::tip
これらのパラメータと設定を変更する前に、[ユーザープロトコルマニュアル](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)を注意深く読み、マニュアルの指示に従ってこれらを変更することをお勧めします。ソフトウェアが表示する値の意味と設定パラメータの詳細については、[ユーザープロトコルマニュアル](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)をお読みください。
:::

### Windowsソフトウェア操作ガイド

ユーザーがモジュールを迅速かつ効率的にテストおよび設定できるように、PC設定ツールが提供されています。ユーザーはこのツールソフトウェアを使用してモジュールのシリアルポートに接続し、モジュールのパラメータを読み取りおよび設定し、モジュールが報告する検出結果データを受信し、リアルタイムで視覚的に表示できます。これにより、ユーザーの使用が大幅に促進されます。

**ステップ1.** USB-シリアルポートツールを使用してモジュールシリアルポートを正しく接続します。

<div class="table-center">
 <table align="center">
  <tr>
   <th> </th>
   <th>USB-シリアルポートツール</th>
            <th>mmWaveセンサー</th>
  </tr>
  <tr>
   <td rowspan="5"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/9.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td align="center">3V3</td>
   <td align="center">3V3</td>
  </tr>
  <tr>
   <td align="center">GND</td>
   <td align="center">GND</td>
  </tr>
  <tr>
   <td align="center">RX</td>
   <td align="center">TX</td>
  </tr>
  <tr>
   <td align="center">TX</td>
   <td align="center">RX</td>
  </tr>
 </table>
</div>

**ステップ 2.** ホストコンピュータツールで対応するシリアルポート番号を選択し、ボーレートを **256000** に設定し、**Engineering Mode** を選択して、デバイスに **接続** をクリックします。

:::tip
センサーをコンピュータに接続する前にソフトウェアを開いた場合は、ポート番号を更新するためにリフレッシュをクリックする必要がある場合があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/10.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3.** 接続が成功したら、スタートボタンをクリックすると、右側のグラフィカルインターフェースにテスト結果とデータが表示されます。接続が成功したら、スタートボタンをクリックすると、右側のグラフィカルインターフェースにテスト結果とデータが表示されます。

:::note
スタートをクリックした後はパラメータの読み取りと設定ができません。設定は停止後にのみ実行できます。
:::

ボールはターゲット状態出力の表示です：赤は移動ターゲットがあることを意味し、紫は静止ターゲットがあることを意味し、緑は誰もいないことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/11.png" style={{width:800, height:'auto'}}/></div>

## センサー異常回復

センサーの使用過程でレーダー異常（データが報告されない、ダウンタイムなど）に遭遇した場合は、ここに従ってセンサーファームウェアの復元を試すことができます。

ファームウェアを回復する方法は、Bluetooth機能付きの携帯電話APPを使用し、ソフトウェアのメインインターフェースの右上角で **More** を選択し、次に **Initialize** を選択することです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/14.png" style={{width:500, height:'auto'}}/></div>

## OTAアップグレード

デバイスのファームウェアが更新されると、ファームウェアバージョンに **upgradeable** という文字が表示されます。バージョン番号を長押しするとアップグレードインターフェースに入ります。**V1.07.22091516** 以降のバージョンのみがアップグレードをサポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/12.png" style={{width:800, height:'auto'}}/></div>

全体のアップグレード時間は1〜3分かかります。アップグレードはモジュールから実行する必要があります。そうでなければ、Bluetooth信号が悪い場合にアップグレードが失敗します。

アップグレードが完了する前に電源を切ったり、モジュールを再起動したり、APPを強制終了したりしないでください。そうでなければアップグレードが失敗します。アップグレードが失敗すると、センサープログラムが無効になり、センサー検出ができなくなります。デバイスのアップグレードが失敗した場合は、デバイスを再起動してAPPに再接続してください。デバイスリストに「アップグレード待ち」のプロンプトが表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/13.png" style={{width:800, height:'auto'}}/></div>

アップグレードするデバイスをクリックして再アップグレードし、アップグレードが成功した後にのみレーダー機能を復元できます。

## リソース

- **[PDF]** [24GHz mmWave for XIAO Datasheet-V1.00](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **[PDF]** [24GHz mmWave for XIAO User Protocol Manual](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **[PDF]** [24GHz mmWave for XIAO SCH](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
