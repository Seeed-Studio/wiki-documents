---
description: Seeed Studio 24GHz mmWave for XIAO の使い方
title: XIAO 用 24GHz mmWave
keywords:
- mmwave
- レーダー
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/mmwave_for_xiao
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio 24GHz mmWave for XIAO

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:300, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

## 概要

XIAO 用 24GHz mmWave Sensor - Human Static Presence は Seeed Studio XIAO シリーズ向けの拡張ボードです。これはアンテナ統合型の高感度 mmWave レーダーセンサーであり、FMCW 原理に基づいています。レーダー信号処理と正確な人体検知アルゴリズムを組み合わせることで、動いている人間の体だけでなく、静止状態の人間の体も識別することができます。

### 特徴
- **FMCW 原理に基づく**: 高感度で環境干渉に強い
- **包括的な人体検知**: センサーは動いている人間の体を高感度で検知するだけでなく、静止している人間、微小な動き、座っているまたは横になっている人間にも感度を示します。
- **多段階のインテリジェントなパラメータ調整**: Bluetooth またはシリアルポートを使用して調整可能で、さまざまな環境条件やシーンの変化に柔軟に対応します。さらに、アプリを使用して直接パラメータを設定できるため、シリアルポート接続が不要です。
- **広い検知角度と長い検知距離**: 最大 60 度の視野角を持ち、広い角度から動きを検知できます。また、最大 5 メートル離れたものを検知することができます。
- **優れた筐体貫通性と美観向上**: 優れた筐体貫通性を持ち、製品の筐体内部で目立たずに動作することができ、表面の穴開けが不要です。

### 応用例
- 人体センサーライト制御
- 生命安全保護
- スマート家電
- インテリジェントセキュリティ

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
        <td align="center">電源供給能力</td>
        <td align="center">>200mA</td>
    </tr>
    <tr>
        <td align="center">平均動作電流</td>
        <td align="center">79mA</td>
    </tr>
    <tr>
        <td align="center">変調方式</td>
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

この mmwave センサーは XIAO の全シリーズと互換性があり、ピン定義は XIAO のピン定義に従います。ただし、シリアルポートの広範な使用を考慮して、mmwave センサー用にソフトシリアル接続を設計しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/2.png" style={{width:800, height:'auto'}}/></div>

センサーは主にソフトシリアルポート（D2 - TX、D3 - RX）と 3.3V 電源を使用します。それ以外のピンは使用されません。

## はじめに

このセンサーモジュールは、直接ソフトウェアでの観察（Bluetooth 経由）と二次開発（XIAO と UART を使用）の両方をサポートしています。センサー値をすぐに観察したい場合は、提供されているソフトウェアを使用するための **はじめに** の手順を参照してください。

## ハードウェア接続

センサーは XIAO との互換性を考慮して設計されているため、一般的にこのセンサーを使用する場合は XIAO を準備し、センサー用のメスヘッダーピンを取り付ける必要があります。XIAO に接続する際は、センサーの取り付け方向に特に注意してください。逆向きに差し込まないようにしてください。逆向きに差し込むと、センサーや XIAO が焼損する可能性があります。

:::caution
正しい方向は、センサーのアンテナが外側を向くようにすることです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

接続方向が正しいことを確認した後、USB-C タイプのケーブルをコンピュータまたは電源に接続すると、センサーが動作を開始します。

### mmwave センサーソフトウェア

ソフトウェア HLKRadarTool を使用すると、レーダーのセンサー値を直接観察できます。このソフトウェアは現在、IOS、Android、Windows システムをサポートしています。

- [Google Play から HLKRadarTool をダウンロード](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool)。

- [App Store から HLKRadarTool をダウンロード](https://apps.apple.com/us/app/hlkradartool/id1638651152)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

- [Windows 用 HLKRadarTool をダウンロード](https://files.seeedstudio.com/wiki/mmwave-for-xiao/HLKRadarTool.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/4.png" style={{width:250, height:'auto'}}/></div>

以下では、これらのソフトウェアをセンサーと組み合わせて使用する方法を説明します。

### モバイルソフトウェア操作ガイド

センサーの値を携帯電話で観察したい場合は、センサーの Bluetooth を使用して携帯電話と通信する必要があります。そのため、Bluetooth 対応の携帯電話が必要です。また、事前に上記のソフトウェアをダウンロードしてください。

**ステップ 1.** アプリを開き、アプリが近くのレーダーデバイスを検索します。デバイスのブロードキャスト名は **HLK-LD2410_xxxx**（xxxx は MAC アドレスの最後の 4 桁）です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

:::tip
アプリの使用距離は Bluetooth 信号範囲（4 メートル以内）を超えないようにしてください。
:::

**ステップ 2.** モジュールが正常に接続されると、レーダー情報を確認したり、パラメータをデバッグして保存することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/7.png" style={{width:400, height:'auto'}}/></div>

**ステップ 3.** ソフトウェアの右上の「その他」オプションで設定メニューにアクセスし、センサーのカスタムパラメータや機能を設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/8.png" style={{width:400, height:'auto'}}/></div>

:::tip
これらのパラメータや設定を変更する前に、[ユーザープロトコルマニュアル](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf) をよく読み、マニュアルの指示に従って変更することをお勧めします。ソフトウェアに表示される値の意味や設定パラメータの詳細については、[ユーザープロトコルマニュアル](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf) を参照してください。
:::

### Windows ソフトウェア操作ガイド

ユーザーがモジュールを迅速かつ効率的にテストおよび構成できるように、PC 用の構成ツールが提供されています。このツールソフトウェアを使用してモジュールのシリアルポートに接続し、モジュールのパラメータを読み取りおよび構成し、モジュールが報告する検出結果を受信することができます。データのリアルタイム視覚表示により、ユーザーの使用が大幅に簡素化されます。

**ステップ 1.** USB からシリアルポートツールを使用してモジュールのシリアルポートを正しく接続します。

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
			<th>USB からシリアルポートツール</th>
            <th>mmWave センサー</th>
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

**ステップ 2.** ホストコンピュータツールで対応するシリアルポート番号を選択し、ボーレートを **256000** に設定し、**エンジニアリングモード** を選択してデバイスに **接続** をクリックします。

:::tip
センサーをコンピュータに接続する前にソフトウェアを開いた場合は、ポート番号を更新するために「更新」をクリックする必要があるかもしれません。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/10.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3.** 接続が成功した後、[開始]ボタンをクリックすると、右側のグラフィカルインターフェイスにテスト結果とデータが表示されます。接続が成功した後、[開始]ボタンをクリックすると、右側のグラフィカルインターフェイスにテスト結果とデータが表示されます。

:::note
[開始]をクリックした後は、パラメータの読み取りや設定ができなくなり、設定は停止後にのみ行うことができます。
:::

ボールはターゲット状態の出力を示します：赤は移動ターゲットが存在することを意味し、紫は静止ターゲットが存在することを意味し、緑は誰もいないことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/11.png" style={{width:800, height:'auto'}}/></div>

## センサー異常の復旧

センサー使用中にレーダー異常（データが報告されない、ダウンタイムなど）が発生した場合、以下の手順でセンサーのファームウェアを復旧することができます。

ファームウェアを復旧する方法は、Bluetooth機能を備えたスマートフォンのアプリを使用します。ソフトウェアのメインインターフェイスの右上隅で**その他**を選択し、次に**初期化**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/14.png" style={{width:500, height:'auto'}}/></div>

## OTAアップグレード

デバイスのファームウェアが更新された場合、ファームウェアバージョンに**アップグレード可能**という文字が表示されます。バージョン番号を長押ししてアップグレードインターフェイスに入ります。**V1.07.22091516**以降のバージョンのみアップグレードをサポートしています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/12.png" style={{width:800, height:'auto'}}/></div>

アップグレード全体の所要時間は1～3分です。モジュールからアップグレードを実行する必要があり、Bluetooth信号が弱い場合はアップグレードが失敗します。

アップグレードが完了するまでモジュールの電源を切ったり再起動したりせず、アプリを強制終了しないでください。これを行うとアップグレードが失敗します。アップグレードが失敗した場合、センサーのプログラムが無効になり、センサー検出ができなくなります。デバイスのアップグレードが失敗した場合は、デバイスを再起動してアプリに再接続してください。デバイスリストに「アップグレード待機中」のプロンプトが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/13.png" style={{width:800, height:'auto'}}/></div>

アップグレードするデバイスをクリックして再アップグレードを行い、アップグレードが成功した後にレーダー機能が復旧します。

## リソース

- **[PDF]** [24GHz mmWave for XIAO データシート-V1.00](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Datasheet-V1.00.pdf)
- **[PDF]** [24GHz mmWave for XIAO ユーザープロトコルマニュアル](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz_mmWave_for_XIAO-Usermanual-V1.00.pdf)
- **[PDF]** [24GHz mmWave for XIAO SCH](https://files.seeedstudio.com/wiki/mmwave-for-xiao/24GHz-mmWave-for-xiao-SCH.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>