---
description: Grove Vision AI V2 の使い方を始めましょう。
title: Grove Vision AI Module V2
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_vision_ai_v2a
last_update:
  date: 05/15/2025
  author: Citric
---


# Grove ビジョン AI モジュール V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/ja/grove_vision_ai_v2" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

Grove - Vision AI V2 は、Arm Cortex-M55 デュアルコアアーキテクチャを採用した WiseEye2 HX6538 プロセッサを搭載した親指サイズの AI ビジョンモジュールです。標準的な CSI インターフェースを備え、Raspberry Pi カメラと互換性があります。また、オンボードデジタルマイクと SD カードスロットを搭載しています。このモジュールは、さまざまな組み込み AI ビジョンプロジェクトに非常に適しています。SenseCraft AI アルゴリズムプラットフォームを使用することで、コードを書くことなくトレーニング済みの ML モデルをセンサーにデプロイできます。XIAO シリーズや Arduino エコシステムと互換性があり、さまざまな物体検出アプリケーションに最適な選択肢です。

<div class="table-center">
<iframe width="900" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 特徴

- WiseEye2 HX6538 プロセッサを搭載した最初のボードで、デュアルコア Arm Cortex-M55 アーキテクチャを採用。
- 統合された Arm Ethos-U55 マイクロニューラルネットワークアクセラレーションユニットを搭載し、AI 画像ビジョンアプリケーションに最適。
- 幅広い Raspberry Pi カメラとの互換性。
- オンボード PDM マイク、SD カードスロット、Type-C、Grove インターフェース、および豊富な周辺機器によりプロトタイプ開発を容易に。
- Seeed Studio XIAO ボードとの拡張性。
- SenseCraft AI によるノーコードデプロイメント用の即使用可能な AI モデル。
- MobilenetV1、MobilenetV2、Efficientnet-lite、Yolov5、Yolov8 など、さまざまな効率的な AI モデルをサポート。

### 応用分野

- 産業オートメーション：品質検査、予知保全、音声制御など。
- スマートシティ：デバイスモニタリング、エネルギー管理など。
- 交通：状態モニタリング、位置追跡など。
- スマート農業：環境モニタリングなど。
- モバイル IoT デバイス：ウェアラブルデバイス、ハンドヘルドデバイスなど。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.jpg" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 の全機能を使用するには、CSI カメラを別途購入する必要がある場合があります。おすすめは [**OV5647-62 FOV Camera Module for Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html) です。

:::caution
Grove Vision AI V2 のパーツリストにはカメラが含まれていないことにご注意ください。
:::

Grove Vision AI V2 とカメラの準備が整ったら、CSI 接続ケーブルを使用して接続できます。接続時には、ピン列の方向に注意し、逆向きに差し込まないようにしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

## はじめに

### ブート

もし何らかの特殊な方法を使用して Grove Vision AI が正常に動作しなくなった場合（ソフトウェアレベルで）、デバイスを復旧させるために BootLoader モードに入れる必要があるかもしれません。以下は BootLoader モードに入る方法です。

**方法 1**

Grove Vision AI とコンピュータ間の接続ケーブルを外し、デバイスの Boot ボタンを押し続けてください。この状態で、Type-C データケーブルを使用して Grove Vision AI をコンピュータに接続し、その後ボタンを放します。この時点でデバイスは BootLoader モードに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**方法 2**

Grove Vision AI をコンピュータに接続した状態で、Boot ボタンを押し、その後すぐに Reset ボタンを押すことで BootLoader モードに入ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

### リセット

デバイスのデータが突然アップロードされなくなったり、画像がフリーズしたりする問題が発生した場合は、Reset ボタンを使用してデバイスを再起動してみてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

### ドライバ

Grove Vision AI V2 をコンピュータに接続しても認識されない場合、CH343 ドライバをコンピュータにインストールする必要があるかもしれません。以下は CH343 ドライバのダウンロードおよびインストールリンクです。

- Windows Vendor VCP ドライバ ワンクリックインストーラー: [CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Windows Vendor VCP ドライバ: [CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Windows CDC ドライバ ワンクリックインストーラー: [CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Windows CDC ドライバ: [CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.ZIP)
- macOS Vendor VCP ドライバ: [CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)

## Arduino ライブラリ概要

:::tip
Arduino を初めて使用する場合は、[Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Grove Vision AI は WiseEye2 HX6538 チップを使用しており、画像処理とモデル推論は Grove Vision AI 内でローカルに処理され、その結果が IIC または UART を介して XIAO に出力されます。このライブラリの主な目的は Grove Vision AI のデータストリームを処理することであり、モデル推論や画像処理には関与しません。

Grove Vision AI は IIC を介して XIAO と通信し、デバイスの IIC アドレスは `0x62` です。画像情報の転送は USB シリアルポートを介して行われます。

### 機能

スケッチの開発を始める前に、ライブラリで利用可能な機能を確認しましょう。

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— Grove Vision AI V2 を初期化します。

  **入力パラメータ:**
    - `TwoWire *wire` —— TwoWire オブジェクトを指すポインタで、通常 I2C デバイスとの通信に使用されます。
    - `uint16_t address` —— I2C バスに接続された特定のデバイスを識別するための I2C デバイスのアドレス。
    - `uint32_t wait_delay` —— コマンドを送信する前に応答を待つ遅延時間（ミリ秒）。
    - `uint32_t clock` —— I2C バスのクロックレート（Hz）。

  **戻り値:** `True` または `False`。初期化が成功した場合は true、失敗した場合は false。

- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— Grove Vision AI V2 に INVOKE コマンドを送信し、モデルの呼び出し、推論、認識を開始します。

  **入力パラメータ:** 
    - `int times` —— Invoke の回数。
    - `fileter` —— 最後の結果が前回の結果と異なる場合にのみイベント応答を送信することを意味します（ジオメトリとスコアで比較）。
    - `bool show` —— 最後の結果が前回の結果と異なる場合にのみイベント応答を送信することを意味します（ジオメトリとスコアで比較）。

:::note
Grove Vision AI のプロトコル定義に関する詳細は、[**プロトコルドキュメント**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)を参照してください。
:::

  **戻り値:** `CMD_OK` または `CMD_ETIMEDOUT`。モデルが正常に有効化された場合は **CMD_OK** を返し、それ以外の場合は **CMD_ETIMEDOUT** を返します。

- `int available()` —— 接続されたデバイスからIIC経由で読み取れるデータのバイト数を確認します。

  **入力パラメータ:** なし。

  **戻り値:** デバイスから読み取れるデータバイト数。

- `int read(char *data, int length)` —— Grove Vision AIからIICインターフェースを介してデータを読み取ります。この関数の目的は、提供されたデータポインタが指す配列に読み取ったデータを格納することです。

  **入力パラメータ:** 
    - `char *data` —— データを格納するための配列。
    - `int length` —— 読み取るデータの長さ。
  
  **戻り値:** 読み取るデータの長さ。

- `int write(const char *data, int length)` —— 指定されたデバイスにI2Cインターフェースを介してデータを書き込みます。

  **入力パラメータ:**
    - `const char *data` —— 書き込むデータの内容。
    - `int length` —— 書き込むデータの長さ。

  **戻り値:** 書き込むデータの長さ。

- `std::vector<boxes_t> &boxes() { return _boxes; }` —— 結果をボックス形式で出力します。

```cpp
typedef struct
{
    uint16_t x;      // ボックスの中心の水平座標
    uint16_t y;      // ボックスの中心の垂直座標
    uint16_t w;      // 識別ボックスの幅
    uint16_t h;      // 識別ボックスの高さ
    uint8_t score;   // ターゲットとして識別する信頼度
    uint8_t target;  // ターゲット
} boxes_t;
```

- `std::vector<classes_t> &classes() { return _classes; }` —— 結果をカテゴリ形式で出力します。

```cpp
typedef struct
{
    uint8_t target;  // ターゲット
    uint8_t score;   // ターゲットとして識別する信頼度
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— 結果を点形式で出力します。

```cpp
typedef struct
{
    uint16_t x;      // 識別点の水平座標
    uint16_t y;      // 識別点の垂直座標
    uint16_t z;      // 識別点の相対的な深度座標
    uint8_t score;   // ターゲットとして識別する信頼度
    uint8_t target;  // ターゲット
} point_t;
```

:::note
ここでの深度座標は相対的なものであり、Grove Vision AIが深度カメラ機能を備えていることを意味するわけではありません。むしろ、アルゴリズムが相対的な深度座標を計算し、一部のモデル（例: 顔の3Dモデル）で有効となります。
:::

- `perf_t &perf() { return _perf; }` —— 画像処理および推論時間。

```cpp
typedef struct
{
    uint16_t prepocess;   // 前処理時間
    uint16_t inference;   // 推論時間
    uint16_t postprocess; // 後処理時間
} perf_t;
```

:::note
出力は常にボックスや点を識別する情報を出力するわけではなく、モデルによって異なります。
:::

### インストール

ZIPライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## SenseCraft AI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/sensecraftai.jpg" style={{width:1000, height:'auto'}}/></div>

SenseCraftは、Seeed Studioによって開発された一連のソフトウェアサービスであり、ユーザーに対してより迅速かつ簡単なソフトウェアサービスとアプリケーションを提供します。データライン、エッジライン、AIラインの3つの製品ラインを備えたSenseCraftは、データサービス、デバイス管理、AIアプリケーションにおけるユーザーのニーズを満たすことができます。どのようなソリューションが必要であっても、SenseCraftは効率的で信頼性の高いソリューションとカスタマイズされたサービスを提供します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>詳細を見る 📕</font></span></strong></a>
</div>

<br />

SenseCraft AI Model Assistantの支援を組み合わせることで、さまざまな共同作成モデルを簡単にアップロードし、結果を直接観察することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>詳細を見る 📕</font></span></strong></a>
</div>

<br />

このセクションでは、SenseCraft AI Model Assistantを使用して迅速に展開し、結果を観察する方法を説明します。

### ステップ 1. Grove Vision AI V2をSenseCraft AI Model Assistantに接続する

まず、SenseCraft AI Model Assistantのメインページを開きます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AIへ移動</font></span></strong></a>
</div>
<br />

Type-Cタイプのケーブルを使用してGrove Vision AI V2をコンピュータに接続してください。

SenseCraft AI Model Assistantページの右上隅で、**Grove Vision AI (WE2)**を選択できます。その後、右端の**Connect**ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/2.png" style={{width:1000, height:'auto'}}/></div>

ポップアップする新しいウィンドウで、デバイスの正しいCOMポートを選択し、Connectボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/3.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. 適切なモデルをアップロードする

次に、使用したいモデルを選択し、下の**Send**ボタンをクリックするだけです。以下はジェスチャー検出の例です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/4.png" style={{width:600, height:'auto'}}/></div>

モデルがアップロードされるまで1〜2分待ちます。

### ステップ 3. 観察

モデルが正常にアップロードされると、右側のプレビューでGrove Vision AI V2カメラからのライブフィードを見ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/5.gif" style={{width:1000, height:'auto'}}/></div>

<br />

右側のプレビュー設定では、モデルの認識精度を最適化するために変更可能な2つの設定オプションがあります。

- **Confidence:** Confidenceは、モデルが予測に割り当てる確信度または確率を指します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU:** IoUは、予測されたバウンディングボックスが真実のバウンディングボックスと比較してどれだけ正確であるかを評価するために使用されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

これで、モデルのアップロードと結果の観察が完了しました。

## XIAO の例

機械視覚機能を備えたセンサーのプロトタイプを作成したい場合は、XIAO を追加することを検討してください。XIAO と Grove Vision AI V2 を使用することで、使用したいモデルを選択し、迅速にアプリケーション領域に展開することができます。

その前に、まず使用したいモデルをアップロードするために [**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma) の手順と内容に従う必要があります。

**ステップ 1.** 必要な材料

このチュートリアルでは、Arduino プログラムの使用方法を紹介するために XIAO ESP32S3 を例として使用します。そのため、以下のハードウェアを準備することをお勧めします。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV カメラモジュール<br />Raspberry Pi 3B+4B 用</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="/ja/grove_vision_ai_v2" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

次に、XIAO と Grove Vision AI V2 をピン列を介して接続する必要があります（または拡張ボードと Grove インターフェースを使用します）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
接続の方向に注意してください。Grove Vision AI の Type-C コネクタは XIAO の Type-C コネクタと同じ方向である必要があります。
:::

**ステップ 2.** Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div>

<br />

**ステップ 3.** 開発ボードモデルを選択し、Arduino IDE に追加します。

:::tip
以下は Grove Vision AI V2 の例でサポートされているボードのリストです。使用したいボードを選択して次の例を完成させてください。このチュートリアルでは XIAO ESP32S3 を例として使用します。
:::

- **Seeed Studio XIAO SAMD21** を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)** を参照して追加を完了してください。

- **Seeed Studio XIAO RP2040** を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO nRF52840** を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32C3** を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32S3** を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して追加を完了してください。

- **Seeeduino V4.3** を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino_v4.2/)** を参照して追加を完了してください。


### デモ 1. XIAO を使用して Grove Vision AI V2 による認識結果を取得する

以下の手順は、Grove Vision AI V2 によって報告される認識情報を取得し解析するための簡単な例です。

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
}

void loop()
{
    if (!AI.invoke())
    {
        Serial.println("呼び出し成功");
        Serial.print("性能: 前処理=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", 推論=");
        Serial.print(AI.perf().inference);
        Serial.print(", 後処理=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("ボックス[");
            Serial.print(i);
            Serial.print("] ターゲット=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", スコア=");
            Serial.print(AI.boxes()[i].score);
            Serial.print(", x=");
            Serial.print(AI.boxes()[i].x);
            Serial.print(", y=");
            Serial.print(AI.boxes()[i].y);
            Serial.print(", w=");
            Serial.print(AI.boxes()[i].w);
            Serial.print(", h=");
            Serial.println(AI.boxes()[i].h);
        }
        for (int i = 0; i < AI.classes().size(); i++)
        {
            Serial.print("クラス[");
            Serial.print(i);
            Serial.print("] ターゲット=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", スコア=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("ポイント[");
            Serial.print(i);
            Serial.print("] ターゲット=");
            Serial.print(AI.points()[i].target);
            Serial.print(", スコア=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
    }
}
```

#### 手順の説明

このArduinoスケッチは、Seeed_Arduino_SSCMAライブラリを使用してGrove Vision AI Module V2とインターフェースします。`setup()`関数では、AIモジュールが初期化され、シリアル通信が開始されます。

`loop()`関数では、Grove Vision AI Module V2の組み込みアルゴリズムを使用して推論を実行するために`invoke()`メソッドが繰り返し呼び出されます。推論が成功すると、スケッチはシリアルモニターに以下のパフォーマンス指標を出力します：前処理、推論、および後処理の時間。

スケッチは推論結果の詳細情報を処理し、以下を含む情報をシリアルモニターに出力します：

- バウンディングボックス（`boxes()`）：検出されたオブジェクトの位置と寸法をx座標、y座標、幅、高さの形式で識別します。
- クラス分類（`classes()`）：検出されたオブジェクトのカテゴリとその信頼度スコアを識別します。
- ポイント（`points()`）：検出されたオブジェクトの特定の特徴やキーポイントをx座標、y座標、信頼度スコアとともに表します。

これらの結果は、AIモジュールによって検出されたオブジェクト、その位置、サイズ、および各検出または分類の信頼度レベルに関する洞察を提供します。出力はシリアルモニターに表示され、さらなる分析やデバッグに使用できます。


#### 効果

引き続きジェスチャー検出モデルを使用します。アプリケーションをアップロードした後、シリアルモニターを開き、シリアルモニターのボーレートを**9600**に設定してください。「じゃんけん」のジェスチャーを準備し、カメラの認識エリアに向けてください。シリアルモニターには認識結果が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>


### デモ 2. XIAOを使用してGrove Vision AI V2とシリアル通信を行う

Grove Vision AI V2は[UARTプロトコル](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)を介した通信をサポートしており、組み込みプロトコルを使用することでGrove Vision AI V2のHimax WE2チップを操作することが可能です。以下のサンプルプログラムは、XIAOを使用してGrove Vision AI V2とシリアルポートを介して通信する方法を示しています。

```cpp
#include <Arduino.h>
#include <Wire.h>

#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    // 初回実行時にセットアップコードを記述
    Wire.begin();
    Serial.begin(115200);
    while (!Serial)
        delay(1000);

    Serial.println("Proxy start");
}

char buf[512];
void loop()
{
    int s_len = Serial.available();
    if (s_len)
    {
        int len = Serial.readBytes((char *)buf, s_len);
        AI.write(buf, len);
    }
    int t_len = AI.available();
    if (t_len)
    {
        if (t_len > 512)
        {
            t_len = 512;
        }

        AI.read(buf, t_len);
        Serial.write(buf, t_len);
    }
}
```


#### 手順の説明

このArduinoスケッチは、Seeed Studio Machine Learning Framework SSCMAを利用して、シリアルコンソールとGrove Vision AI V2モジュール間の通信インターフェースを確立します。このスケッチは、シリアルコマンドを介してGrove Vision AI V2モジュールとのデータの送受信を行うよう設計されています。

スケッチの詳細な説明は以下の通りです：

`setup()`関数では：
- I2C通信プロトコルが`Wire.begin()`で初期化され、Grove Vision AI V2モジュールとの通信が可能になります。
- シリアル通信がボーレート115200で設定されます。
- シリアル接続がアクティブになるまで待機し、その後「Proxy start」というメッセージをシリアルモニターに出力して、プロキシ通信チャネルが準備完了であることを示します。

`loop()`関数では：
- スケッチは`Serial.available()`を使用して、シリアルデータの受信を確認します。データがある場合、バッファ`buf`に読み込みます。
- バッファに収集されたデータは、`AI.write()`メソッドを使用してGrove Vision AI V2モジュールに送信されます。
- 次に、Grove Vision AI V2モジュールが送信するデータがあるかどうかを`AI.available()`で確認します。
- Grove Vision AI V2モジュールからデータが送信されている場合、`AI.read()`を使用してバッファ`buf`にデータを読み込みます。この際、データがバッファサイズ512バイトを超えないようにします。
- 最後に、Grove Vision AI V2モジュールから受信したデータをシリアルコンソールに`Serial.write()`を使用して送信し、シリアルインターフェースとVision AIモジュール間の双方向通信を完了します。

このセットアップにより、Grove Vision AI V2モジュールとのインタラクティブな通信が可能となり、ユーザーはモジュールに指示を送信したり、モジュールからデータを受信したりすることができます。

## トラブルシューティング

### Q1: Grove Vision AIはライブ画面を出力しながらXIAOの結果情報を見ることができますか？

できません。フレームレートや画像推論の速度を考慮すると、現時点では両方の作業を同時に実行することはサポートしていません。XIAOが接続されている場合、認識された情報のみを受け取ることができ、リアルタイムのフレームは表示されません。

### Q2: Grove Vision AI V2はどのカメラをサポートしていますか？OV5647-62のみをサポートしていますか？

現在、OV5642シリーズのカメラ用ドライバを作成しているため、Grove Vision AI V2はRaspberry PiのOV5647カメラ全シリーズをサポートしています。例えば、OV5647-62、OV5647-67、OV5647-160などです。他のCSIカメラも理論上はサポートされていますが、一部のカメラにはドライバが作成されていない、またはカラープロセッシングユニットが内蔵されていないため、色が緑のみになる問題や、フルカラーが失われることで認識精度に影響を与える可能性があります。


## リソース

- **[PDF]** [データシート](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>