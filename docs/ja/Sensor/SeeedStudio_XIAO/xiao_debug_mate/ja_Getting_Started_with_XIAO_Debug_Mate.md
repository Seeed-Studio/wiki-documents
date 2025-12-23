---
description: この記事では、Seeed Studio XIAO Debug Mateの包括的な紹介と使用ガイドを提供します。
title: XIAO Debug Mateの入門ガイド
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/main_1.webp
slug: /ja/getting_started_with_xiao_debug_mate
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/main_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>


## はじめに

Seeed Studio XIAO Debug Mateは、視覚的フィードバックによって組み込みシステムのデバッグを簡素化するオープンソースのESP32-S3マルチツールです。このオールインワンデバイスは、独立した2.01インチTFT LCDディスプレイ、LEDステータスマトリックス、ネイティブSeeed Studio XIAOサポートを特徴とし、重要なデバッグ機能を提供します：DAPLinkチップレベルデバッグ、UARTパススルー付き内蔵シリアルモニタリング、正確な消費電力測定。プラグアンドプレイ設計により、複雑な配線を排除し、開発を効率化します。

### 仕様

<div class="table-center">
	<table align="center">
		<tr>
			<th>パラメータ</th>
			<th>説明</th>
		</tr>
		<tr>
			<td>プロセッサ</td>
			<td>Espressif ESP32-S3</td>
		</tr>
		<tr>
			<td>電源入力</td>
			<td>USB-C 5V/1A</td>
		</tr>
		<tr>
			<td>ディスプレイ</td>
			<td>2.01インチTFT LCD、240 x 296解像度</td>
		</tr>
		<tr>
			<td>LED</td>
			<td>ステータス表示用36-LEDマトリックス（デフォルト：シリアルボーレート）</td>
		</tr>
		<tr>
			<td>ユーザー入力</td>
			<td>1 x ユーザーボタン/ブートボタン <br /> 1 x スクロールホイール <br /> 1 x 埋め込み式リセットボタン</td>
		</tr>
		<tr>
			<td>I/Oインターフェース</td>
			<td>14 x XIAO標準ピン <br /> 8 x 拡張ピン <br /> 4 x SWDデバッグピン <br /> 1 x UART Groveコネクタ</td>
		</tr>
		<tr>
			<td>製品サイズ</td>
			<td>100x20x56 mm</td>
		</tr>
		<tr>
			<td>ソフトウェア</td>
			<td>デバッグ用DAPLinkサポート</td>
		</tr>
		<tr>
			<td>サポートされるOpenOCDターゲットチップセット</td>
			<td>SAMD21、nRF52840（Sense）、RP2040、RP2350、RA4M1、MG24（Sense）</td>
		</tr>
		<tr>
			<td>筐体</td>
			<td>黒色PLA材料による3Dプリント</td>
		</tr>
	</table>
</div>

### 特徴

- プロフェッショナルなチップレベルデバッグ用DAPLink互換SWDインターフェース

- インテリジェントシリアルモニター & UARTパススルー

- 精密電力プロファイリング

- 独立型視覚フィードバックシステム

- XIAO用に設計された汎用互換性を持つオープンソースプラットフォーム


## ハードウェア概要

XIAO Debug Mateは、組み込み開発ワークフローを効率化するために設計されたコンパクトなオールインワンツールです。以下は、そのハードウェアレイアウトとコンポーネントの詳細な説明です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

このデバイスには以下の主要なハードウェアコンポーネントが搭載されています：

* ① **ユーザーボタン**：上端に配置されたプッシュボタンで、選択や動作の確認などのユーザー入力に使用されます。

* ② **XIAOソケット**：メスヘッダーで構成された専用ソケットで、Seeed Studio XIAOシリーズボードとの直接的なプラグアンドプレイ接続用に設計されています。

* ③ **ポゴピン**：XIAOソケット（②）内に配置されたスプリング式プローブのセットです。その特定の機能は、取り付けられたXIAOメインボードの裏面のパッドと確実な電気的接触を行うことです。

* ④ **外側内部拡張ヘッダー**：このヘッダーは、ポゴピン（③）を介して接続されたXIAOメインボードの背面ピンからの信号を引き出すために特別に設計されています。上部にメスヘッダー（デュポンワイヤー用）、下部にオスピンを持つデュアルインターフェース設計を特徴としています。この多用途設計により、デバイス全体を他のシステムのドーターボードとして使用できます。

* ⑤ **内部拡張ヘッダー**：このヘッダーは、XIAOメインボードの左右側面からのピンを引き出します。ヘッダー④と同様に、上部にメスヘッダー、下部にオスピンを持ち、XIAOの背面向きI/Oへの便利なアクセスを提供します。

* ⑥ **ロータリーエンコーダー**：上端にあるロータリーエンコーダーホイール（ローラー）で、メニューのナビゲーション、オプションのスクロール、ディスプレイ上の値の調整に使用されます。

* ⑦ **ディスプレイ**：明確なデータ可視化とインタラクション用の240x296解像度を持つ2.01インチTFT LCD。

* ⑧ **Groveポート**：外部UART ベースのGroveモジュールの接続用。

* ⑨ **ボーレート表示器**：デバイス背面にある視覚的インジケーターで、現在選択されているUARTボーレートを明確に表示します。

* ⑩ **USB-Cポート**：デバイスへの電力供給とXIAOボードのプログラミングやUARTパススルーなどのデータ通信を促進するために側面に配置されたUSB-Cポート。

## 入門ガイド

### XIAO Debug Mate用ピンステッカーの取り付け

パッケージ内には、4つのピンアウトステッカーが含まれています。これらはDebug Mateの拡張ヘッダーの隣に貼り付けるように設計されており、各ピンの機能を素早く便利に参照できます。

正しく貼り付けるには、各ステッカーの角にある小さな**白い三角形**に注目してください。この三角形は位置合わせマーカーです。Debug MateのPCBの対応する角に合わせて配置する必要があります。表面と裏面のステッカーも、正しい側から読めるように異なるテキスト方向を持っています。正しい配置については、以下の画像を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/sticket_1.jpg" style={{width:600, height:'auto'}}/></div>

ステッカーは異なる色を使用して2列のピンの機能を区別しています。濃い青のピンラベルは内側の列に対応し、薄い緑のピンラベルは外側の列に対応しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/sticket_2.jpg" style={{width:600, height:'auto'}}/></div>

表面と裏面のマーキングも異なります。例えば、表面では、XIAOピンはピン番号でラベル付けされています：D6、D7、D8など。裏面では、これらのピンはプロトコルや機能でマークされています：TX、RX、SCKなど。

### 初回電源投入

XIAO Debug MateはUSB-Cポート経由で5V/1Aの安定した電源供給が必要です。電源を接続すると、デバイスが起動し、スタートアップアニメーションを表示した後、メインインターフェースに移行し、操作の準備が整います。

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/first_power.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
一般的に、Debug Mate上のXIAOのすべての機能は、特に指定がない限り、XIAOへの追加電源供給を必要としません。
:::

### 操作ロジック

デバイスのインターフェースは、シンプルで直感的な2つの部分からなるシステムで制御されます：

*   **ロータリーエンコーダー（ローラー）：** ローラーをスクロールしてメニューをナビゲートし、選択可能なオプションをハイライトします。
*   **ボタン：**
    *   **シングルクリック：** 選択を確認するか、ハイライトされたメニューに入ります。
    *   **長押し（2秒以上押し続けてから離す）：** "戻る"ボタンとして機能し、前の画面やメニューに戻ります。

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/operational_logic.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 操作メニューの紹介

XIAO Debug Mateのファームウェアは3つの主要な機能ページに整理されており、ローラーとボタンを使用してナビゲートできます。

**1. メインページ（ダッシュボード）**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/1.jpg" style={{width:600, height:'auto'}}/></div>

これはデフォルト画面で、中央ダッシュボードとして機能します。すべての主要機能のリアルタイム概要を提供します：
*   **デバッグステータス：** SWD `DEBUG`機能がアクティブかどうかを示します。
*   **UARTステータス：** 現在のボーレートとRX/TX線上のアクティビティを表示します。
*   **電力メトリクス：** 接続されたXIAOが消費している瞬時電圧（`U`）、電流（`I`）、電力（`P`）を表示します。

このページから、他の2つの主要機能にアクセスできます。ローラーをスクロールしてUARTモジュール（左下）またはPowerモジュール（右下）をハイライトし、ボタンをシングルクリックして専用ページに入ります。

<div class="table-center">
	<table align="center">
		<tr>
			<th>UARTモジュール</th>
			<th>Powerモジュール</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/2.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/3.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

:::tip
1. デバッグ機能は**メインページメニューでのみ有効**です。
2. メインページではシリアルポートメッセージを取得できません。シリアルポートパススルーとモニタリング機能には、シリアルポート設定ページにアクセスする必要があります。
:::

**2. UARTページ**

このページはシリアル通信専用で、2つの異なるモードを提供します：

*   **UARTモニター：** このモードは、シリアルデータをキャプチャしてDebug Mateの2.01インチLCD画面に直接表示します。PCなしでの迅速な移動中のデバッグに最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/5.jpg" style={{width:600, height:'auto'}}/></div>

*   **UARTパススルー：** このモードでは、Debug MateがUSB-シリアルブリッジとして機能します。ターゲットデバイスからのすべてのシリアルデータをPCに転送します。データはデバイスの画面には表示**されません**が、コンピューター上の任意のシリアルモニターソフトウェア（Arduino IDE Serial Monitor、PuTTY、CoolTermなど）を使用して表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/4.jpg" style={{width:600, height:'auto'}}/></div>

UARTページ内では、ローラーでオプションをハイライトしてボタンをクリックすることで、以下を設定できます：
*   **Source:** オンボードの`XIAO`または`Grove`ポートに接続された外部デバイスの監視を選択します。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAOを選択</th>
			<th>Groveを選択</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/6.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/7.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

*   **Baud Rate:** 4800 bpsから921600 bpsまでの9つのプリセットボーレートから選択します。背面のLEDマトリックスが選択を視覚的に反映して更新されます。

<div class="table-center">
	<table align="center">
		<tr>
			<th>前面</th>
			<th>背面</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/8.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/9.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

**3. 電力アナライザーページ**

このページは、3つの異なるUIビューを持つ高精度電力分析ツールを提供します。ローラーをスクロールすることでビューを切り替えることができます。

*   **ビュー1: シンプルデジタルメーター**
    このビューは、瞬時電圧（V）、電流（A）、電力（W）をクリーンで大きなフォントで表示し、最大小数点以下4桁の精度で測定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

*   **ビュー2: 低電力詳細ビュー**
    低電力アプリケーション向けに最適化されたこのビューは、電流と電力に焦点を当てています。複数の単位で同時に値を表示し（例：`18.234 mA`と`18234 uA`）、マイクロアンペアレベルの消費を追跡する際の手動単位変換の手間を省きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

*   **ビュー3: 統計分析**
    このビューはプロジェクトの検証とバッテリー寿命の推定に最適です。以下を追跡・表示します：
    *   **Min/Max:** セッション中に記録された電流と電力の最小値と最大値。
    *   **Total:** 時間経過に伴う累積エネルギー（`Wh`）と電荷（`Ah`）の消費量。
    *   **Time:** 測定セッションの継続時間。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

    :::tip
    初回ビュー3に入ると、電力消費タイマーが開始されます。確認ボタンを長押しして電力アナライザーページを終了すると、タイマーはゼロにリセットされます。
    :::

:::tip **電力測定に関する重要な注意事項：**
電力分析機能は、**5Vピン**を介してXIAOに供給される電力を測定します。この測定には、XIAOのオンボード電源管理IC（PMIC）および他の5Vレール部品によって消費される電力が含まれます。最終プロジェクトをXIAOの3.3V/BATパッドに直接接続されたLiPoバッテリーで電源供給する予定の場合、実際の電力消費はDebug Mateによって報告される値よりも**低く**なります。最終的なバッテリー計算では、この違いを念頭に置いて、このデータを貴重な参考として使用してください。
:::

### XIAO Debug Mate: 機能と使用方法

特定のIDEやプロジェクトでDAPLinkデバッガー、UARTモニター、電力アナライザーを使用する方法の詳細ガイドについては、専用の機能ガイドを参照してください。

- [XIAO Debug Mate DAPLinkデバッガー](https://wiki.seeedstudio.com/ja/xiao_debug_mate_debug)
- [XIAO Debug Mate UARTモニター](https://wiki.seeedstudio.com/ja/xiao_debug_mate_serial)
- [XIAO Debug Mate 電力メーター](https://wiki.seeedstudio.com/ja/xiao_debug_mate_power)

## リセット

XIAO Debug Mateを再起動する必要がある場合、2つのオプションがあります：
1.  USB-C電源ケーブルを抜いて再接続する。
2.  隠れた**リセットボタン**を使用する。USB-Cポートの真下の小さな穴にあります。SIMカード取り出しツールやペーパークリップを使って優しく押すことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/13.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
リセットボタンを使用する際は過度な力を加えないでください。内部スイッチが損傷する可能性があります。
:::

## ブート

デバイスのメインボタンは二重の目的を持ちます。通常の動作中は**確認/戻る**ボタンとして機能します。しかし、ESP32-S3のフラッシュモードに入るための**BOOT**ボタンとしても機能します。

フラッシュモードに入るには：
1.  デバイスの電源がオフになっていることを確認します（プラグを抜く）。
2.  メインボタンを**長押し**します。
3.  ボタンを押し続けながら、USB-Cケーブルを接続してデバイスに電源を供給します。
4.  デバイスはフラッシュモードになり、新しいファームウェアを受信する準備が整います。

## 工場出荷時ファームウェア

元の工場出荷時ファームウェアを復元する必要がある場合は、以下の方法のいずれかを使用できます。まず、上記のセクションで説明されているように、デバイスを**ブートモード**にします。

### 方法1: フラッシュスクリプトの使用

すべての主要なオペレーティングシステム向けの使いやすいフラッシュスクリプトを含むパッケージを用意しました。

1.  ファームウェアパッケージをダウンロードします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_Flash_Script.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> ファームウェア ver. 1.0</font></span></strong>
    </a>
</div>

2.  zipファイルの内容を展開します。
3.  XIAO Debug Mateをブートモードにします。
4.  お使いのOSに適したスクリプトを実行します。

<Tabs>
<TabItem value="Windows" label="Windows" default>
`flash.bat`ファイルをダブルクリックします。
</TabItem>
<TabItem value="MacOS" label="MacOS">
ターミナルを開き、展開したフォルダーに移動して、コマンド`sh flash.sh`を実行します。
</TabItem>
<TabItem value="Linux" label="Linux">
ターミナルを開き、展開したフォルダーに移動して、コマンド`sh flash.sh`を実行します。
</TabItem>
</Tabs>

### 方法2: esptoolの使用

ESP-IDFの一部として、またはPythonパッケージとして`esptool`がインストールされている場合、ファームウェアを手動でフラッシュできます。

1.  工場出荷時ファームウェア`.bin`ファイルをダウンロードします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_Flash_Script.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> ファームウェア ver. 1.0</font></span></strong>
    </a>
</div>

2.  XIAO Debug Mateをブートモードにします。
3.  ターミナルまたはコマンドプロンプトを開き、以下の適切なコマンドを実行します。

<Tabs>
<TabItem value="Windows" label="Windows" default>

```bash
esptool.exe --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
<TabItem value="MacOS" label="MacOS">

```bash
esptool.py --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
esptool.py --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
</Tabs>

### 方法3: オープンソースファームウェアでPlatformIOを使用

XIAO Debug Mateのファームウェアは完全にオープンソースで、[GitHub](https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate)で利用可能です。ファームウェアをカスタマイズしたり、ソースからビルドしたい場合は、PlatformIOを使用できます。

1. リポジトリをクローンします：

```bash
git clone https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate.git
```

2. ファームウェアディレクトリに移動します

3. PlatformIOでプロジェクトを開きます：
   - PlatformIO IDE（VS Code拡張機能）を使用している場合は、`platformio.ini`を含むフォルダーを開きます
   - またはPlatformIO Core CLIを使用します

4. 上記のブートセクションで説明されているように、XIAO Debug Mateを**ブートモード**にします。

5. ファームウェアをビルドしてアップロードします：

<Tabs>
<TabItem value="PlatformIO IDE" label="PlatformIO IDE" default>
- PlatformIOツールバーの「Upload」ボタンをクリックします
- またはコマンドパレットを使用します：`PlatformIO: Upload`
</TabItem>
<TabItem value="PlatformIO CLI" label="PlatformIO CLI">

```bash
pio run --target upload
```

</TabItem>
</Tabs>

この方法により以下が可能になります：
- カスタム機能を追加するためのファームウェア修正
- 最新の開発版のビルド
- オープンソースプロジェクトへの貢献
- ソースコード実装からの学習

:::tip
PlatformIOがインストールされていることを確認してください。VS Code拡張機能として、またはpip経由でスタンドアロンCLIツールとしてインストールできます：`pip install platformio`
:::

## トラブルシューティング

### Q1: XIAO Debug Mateピン互換性ガイド

**問題:** デバッグ機能に問題があり、接続不良のようです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/14.jpg" style={{width:600, height:'auto'}}/></div>

**解決策:** これは主に2つの理由で発生する可能性があります：

1.  **古いXIAOボードとの互換性:**
    **XIAO SAMD21**、**XIAO RP2040**、**XIAO nRF52840**などの初期のXIAOボードの一部は、背面パッドの統一規格が確立される前に設計されました。Debug Mateのポゴピンは可能な限り互換性を持つように配置されていますが、これらの古いボードのわずかな違いにより、完全な接触が得られない場合があります。

    不安定なデバッグ接続を経験した場合は、ソケット内でXIAOボードの位置を**わずかに調整**してみてください。完全に押し込む必要はないかもしれません。わずかなずらしで、ポゴピンがXIAO背面のSWDパッドとしっかりと接触することがよくあります。

2.  **ヘッダーの摩耗:**
    メスヘッダーは、他の機械的コネクタと同様に、有限の寿命があります。耐久性を最大化し、信頼性の高い接続を確保するために、以下のベストプラクティスに従ってください：
    *   XIAOボードを挿入または取り外す際は、**真っ直ぐ上下に**力を加えてください。
    *   XIAOボードを前後に**揺らしたり傾けたりしないでください**。これによりピンが曲がり、メスヘッダーの接点が広がり、時間の経過とともに接続不良を引き起こす可能性があります。

## 特別な謝辞

LEDマトリックスのデザインインスピレーションを提供してくださった**啊猫啊狗晒太阳 (Ah Mao Ah Gou Shai Tai Yang)**に特別な感謝を申し上げます。Debug Mateのオンボード LED インジケーターのデザインは、彼らの優れたオープンソースプロジェクトを参考にしています。オリジナルのデザインは非常に創造的で実用的です。

オリジナルのデザインをご覧になりたい場合は、以下のリンクからデモンストレーション動画と作者のホームページをご確認いただけます。

*   [オリジナルデザインデモンストレーション動画](https://www.bilibili.com/video/BV1Sc411273Y/)
*   [作者のBilibiliホームページ](https://space.bilibili.com/1155738723)

## リソース

- **[ZIP]** [Seeed Studio XIAO Debug Mate 3Dプリントケース](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_3D_Printed_Case.zip)
- **[PDF]** [Seeed Studio XIAO Debug Mate 回路図 PDF](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_V1.0_SCH_20250926.pdf)
- **[ZIP]** [Seeed Studio XIAO Debug Mate 回路図&PCB KiCADファイル](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_V1.0_SCH&PCB_20250926.zip)
- **[GITHUB]** [Seeed Studio XIAO Debug Mate ファームウェアリポジトリ](https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate)

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
