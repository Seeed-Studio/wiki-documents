---
description: Grove Vision AI V2 とソフトウェアプラットフォームの使い方
title: ソフトウェアサポート
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_vision_ai_v2_software_support
last_update:
  date: 05/15/2025
  author: Citric
---


# サポートされているソフトウェアの概要

Grove Vision AI Module V2 を有効にする方法は2つあります：

- [**SenseCraft AI を使用したコード不要のスタートガイド**](#jump1)
   - [SenseCraft AI とは？](#jump2)
   - [SenseCraft AI Model Assistant を使ったスタートガイド](#jump3)
- [**Arduino を使用して Seeed Studio XIAO ボードと接続してプログラム**](#jump4)
   - [Arduino ライブラリの紹介](#jump5)
   - [Seeed Studio XIAO を使ったスタートガイド](#jump6)

## <span id="jump1"> SenseCraft AI を使用したコード不要のスタートガイド </span>

このセクションでは、SenseCraft AI Model Assistant を使用して、コードや他の開発ボードを必要とせずに、迅速にデプロイして結果を観察する方法を説明します。

### <span id="jump2"> SenseCraft AI とは？  </span>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AI は、ユーザーが公開されている膨大な AI モデルライブラリをエッジデバイスに簡単にデプロイできるようにするツールです：

- reComputer (NVIDIA Jetson)
- Seeed Studio XIAO S3 ボード
- Vision AI モジュールなど

SenseCraft AI は、公開されている AI モデルをエッジデバイスに数クリックで直接デプロイできる、シームレスで使いやすい体験を提供します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>詳細を見る 📕</font></span></strong></a>
</div>

SenseCraft AI には以下が含まれます：

- Model Assistant ソフトウェアサービス
- Device Workspace ソフトウェアサービス

このセクションでは、「Model Assistant」を使用してモジュールを有効にします。SenseCraft AI Model Assistant の機能を活用することで、多種多様な共同作成モデルを簡単にアップロードし、結果を直接観察できます。

### <span id="jump3"> SenseCraft AI Model Assistant を使ったスタートガイド  </span>

<!-- SenseCraft は、Seeed Studio によって開発された一連のソフトウェアサービスで、ユーザーにより迅速で簡単なソフトウェアサービスとアプリケーションを提供します。Data ライン、Edge ライン、AI ラインの3つの製品ラインを持つ SenseCraft は、データサービス、デバイス管理、AI アプリケーションにおけるユーザーのニーズを満たすことができます。どのようなソリューションが必要であっても、SenseCraft は効率的で信頼性の高いソリューションとカスタマイズサービスを提供します。 -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>
 -->

ここでは、SenseCraft AI を使用してモジュールを迅速に開始する方法を説明します。このプロセスではモジュールのみが必要です。

#### ステップ 1. モデルを選択

まず、SenseCraft AI Model Assistant のメインページを開きます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI に移動</font></span></strong></a>
</div>
<br />

デプロイしたいモデルを選択し、それをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a1.png" style={{width:1000, height:'auto'}}/></div>

ここでこのモデルの説明を確認できます。適している場合は、右側の **Deploy Model** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a2.png" style={{width:1000, height:'auto'}}/></div>

#### ステップ 2. モジュールを接続し、適切なモデルをアップロード

Type-C ケーブルを使用して Grove Vision AI V2 をコンピュータに接続し、**Connect** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

**Confirm** ボタンをクリックします。このページの左上隅で **USB Single Serial** を選択できます。その後、**Connect** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

このページに 1～2 分間留まり、モデルが正常にアップロードされるのを待ちます。このプロセス中に別のページタブに切り替えると、アップロードが失敗する可能性があることに注意してください（現在、この問題を解決するためにチームが積極的に取り組んでおり、近いうちに修正される予定です）。

#### ステップ 3. 観察

モデルが正常にアップロードされると、左側のプレビューで Grove Vision AI V2 カメラからのライブフィードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a5.png" style={{width:1000, height:'auto'}}/></div>

<br />

プレビュー設定の左側には、モデルの認識精度を最適化するために変更可能な2つの設定オプションがあります。

- **Confidence（信頼度）:** 信頼度は、モデルが予測に割り当てる確信度や確率を指します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU（Intersection over Union）:** IoU は、予測されたバウンディングボックスと真実のバウンディングボックスの精度を評価するために使用されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

:::tip
- **Confidence（信頼度）:** これは、コンピュータビジョンモデルがその予測についてどれだけ確信しているかを示します。パーセンテージのように考えてください。信頼度が高いほど、モデルがより確信していることを意味します。
- **IoU（Intersection over Union）:** これは、2つのボックス間の重なり具合を測定します。画像内のオブジェクトの周りにボックスを描き、モデルもボックスを描いたと想像してください。IoU は、これらのボックスがどれだけ一致しているかを示します。IoU が高いほど、ボックスがより近いことを意味します。
:::

この時点で、モデルのアップロードと結果の観察が完了しています。

## <span id="jump4"> ArduinoでSeeed Studio XIAOボードを接続してプログラムする </span>

### <span id="jump5"> Arduinoライブラリの紹介 </span>

:::tip
Arduinoを初めて使用する場合は、[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Grove Vision AIはWiseEye2 HX6538チップを使用しており、画像処理とモデル推論はGrove Vision AI内でローカルに処理され、その結果がIICまたはUARTを介してXIAOに出力されます。このライブラリの主な目的は、Grove Vision AIのデータストリームを処理することであり、モデル推論や画像処理には関与しません。

Grove Vision AIはIICを介してXIAOと通信し、デバイスのIICアドレスは`0x62`です。画像情報の転送はUSBシリアルポートを介して行われます。

#### 機能

スケッチの開発を始める前に、ライブラリで利用可能な機能を見てみましょう。

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— Grove Vision AI V2を初期化します。

  **入力パラメータ:**
    - `TwoWire *wire` —— TwoWireオブジェクトを指すポインタで、通常I2Cデバイスとの通信に使用されます。
    - `uint16_t address` —— I2Cバスに接続された特定のデバイスを識別するためのI2Cデバイスのアドレス。
    - `uint32_t wait_delay` —— コマンドを送信する前に応答を待つ遅延時間（ミリ秒）。
    - `uint32_t clock` —— I2Cバスのクロックレート（Hz）。

  **戻り値:** `True`または`False`。初期化が成功した場合は`True`、失敗した場合は`False`。

- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— Grove Vision AI V2にINVOKEコマンドを送信し、モデルの呼び出し、推論、認識を開始します。

  **入力パラメータ:** 
    - `int times` —— Invokeの回数。
    - `fileter` —— 最後の結果が前回の結果と異なる場合にのみイベント応答を送信します（ジオメトリとスコアで比較）。
    - `bool show` —— 最後の結果が前回の結果と異なる場合にのみイベント応答を送信します（ジオメトリとスコアで比較）。

:::note
Grove Vision AIのプロトコル定義に関する詳細は、[**プロトコルドキュメント**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)を参照してください。
:::

  **戻り値:** `CMD_OK`または`CMD_ETIMEDOUT`。モデルが正常に有効化された場合は**CMD_OK**を返し、そうでない場合は**CMD_ETIMEDOUT**を返します。

- `int available()` —— 接続されたデバイスからIICを介して読み取ることができるデータのバイト数を確認します。

  **入力パラメータ:** なし。

  **戻り値:** デバイスから読み取ることができるデータのバイト数。

- `int read(char *data, int length)` —— IICインターフェースを介してGrove Vision AIからデータを読み取ります。この関数の目的は、提供されたデータポインタが指す配列に読み取ったデータを格納することです。

  **入力パラメータ:** 
    - `char *data` —— データを格納するための配列。
    - `int length` —— 読み取るデータの長さ。
  
  **戻り値:** 読み取るデータの長さ。

- `int write(const char *data, int length)` —— I2Cインターフェースを介して指定されたデバイスにデータを書き込みます。

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
    uint8_t score;   // ターゲットとして識別された信頼度
    uint8_t target;  // ターゲット
} boxes_t;
```

- `std::vector<classes_t> &classes() { return _classes; }` —— 結果をカテゴリ形式で出力します。

```cpp
typedef struct
{
    uint8_t target;  // ターゲット
    uint8_t score;   // ターゲットとして識別された信頼度
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— 結果を点形式で出力します。

```cpp
typedef struct
{
    uint16_t x;      // 識別点の水平座標
    uint16_t y;      // 識別点の垂直座標
    uint16_t z;      // 識別点の相対的な深度座標
    uint8_t score;   // ターゲットとして識別された信頼度
    uint8_t target;  // ターゲット
} point_t;
```

:::note
ここでの深度座標は相対的なものであり、Grove Vision AIが深度カメラ機能を備えていることを意味するわけではありません。むしろ、アルゴリズムが相対的な深度座標を計算し、一部のモデル（例: face-3dモデル）で有効です。
:::

- `perf_t &perf() { return _perf; }` —— 画像処理と推論時間。

```cpp
typedef struct
{
    uint16_t prepocess;   // 前処理時間
    uint16_t inference;   // 推論時間
    uint16_t postprocess; // 後処理時間
} perf_t;
```

:::note
モデルによっては、出力がボックスやポイントを識別する情報を常に出力するわけではありません。
:::

#### インストール

ZIPライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリを含める > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### <span id="jump6"> Seeed Studio XIAO を使った入門 </span>

機械視覚機能を備えたセンサーのプロトタイプを作成したい場合は、XIAOを追加することを検討するかもしれません。XIAOとGrove Vision AI V2を使用することで、使用したいモデルを選択し、アプリケーション領域に迅速に展開することができます。

<!-- その前に、まず使用したいモデルをアップロードするために[**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma)の手順と内容に従う必要があります。 -->

#### 準備

**ステップ 1.** 必要な材料

このチュートリアルでは、Arduinoプログラムの使用方法を紹介するためにXIAO ESP32S3を例として使用します。そのため、以下のハードウェアを準備することをお勧めします。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV カメラモジュール<br />Raspberry Pi 3B+4B用</th>
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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
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

次に、XIAOとGrove Vision AI V2をピン列を介して接続する必要があります（または拡張ボードとGroveインターフェースを使用します）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
接続の方向に注意してください。Grove Vision AIのType-CコネクタはXIAOのType-Cコネクタと同じ方向である必要があります。
:::

**ステップ 2.** Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

<br />

**ステップ 3.** 開発ボードモデルを選択し、Arduino IDEに追加します。

:::tip
以下はGrove Vision AI V2の例でサポートされているボードのリストです。使用したいボードを選択して、次の例を完成させてください。このチュートリアルでは、XIAO ESP32S3を例として使用します。
:::

- **Seeed Studio XIAO SAMD21**を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)**を参照して追加を完了してください。

- **Seeed Studio XIAO RP2040**を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)**を参照して追加を完了してください。

- **Seeed Studio XIAO nRF52840**を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)**を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32C3**を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)**を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32S3**を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)**を参照して追加を完了してください。

- **Seeeduino V4.3**を後のルーチンで使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino_v4.2/)**を参照して追加を完了してください。

**ステップ 4.** **ArduinoJSON**ライブラリをインストールします。

スケッチメニューに移動し、**ライブラリを含める > ライブラリを管理...**を選択します。これによりライブラリマネージャが開きます。ライブラリマネージャの検索バーに**ArduinoJSON**と入力します。検索結果にArduinoJSONライブラリが表示されます。ライブラリの横にインストールボタンがあります。そのボタンをクリックしてください。Arduino IDEがライブラリを自動的にダウンロードし、Arduino開発環境にインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/20.png" style={{width:1000, height:'auto'}}/></div>

#### デモ 1. XIAO を使用して認識結果を取得する

以下の手順は、Grove Vision AI V2 が報告する認識情報を取得し解析するための簡単な例です。

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
        Serial.println("invoke success");
        Serial.print("perf: prepocess=");
        Serial.print(AI.perf().prepocess);
        Serial.print(", inference=");
        Serial.print(AI.perf().inference);
        Serial.print(", postpocess=");
        Serial.println(AI.perf().postprocess);

        for (int i = 0; i < AI.boxes().size(); i++)
        {
            Serial.print("Box[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.boxes()[i].target);
            Serial.print(", score=");
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
            Serial.print("Class[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.classes()[i].target);
            Serial.print(", score=");
            Serial.println(AI.classes()[i].score);
        }
        for (int i = 0; i < AI.points().size(); i++)
        {
            Serial.print("Point[");
            Serial.print(i);
            Serial.print("] target=");
            Serial.print(AI.points()[i].target);
            Serial.print(", score=");
            Serial.print(AI.points()[i].score);
            Serial.print(", x=");
            Serial.print(AI.points()[i].x);
            Serial.print(", y=");
            Serial.println(AI.points()[i].y);
        }
    }
}
```

##### 手順の説明

この Arduino スケッチは、Seeed_Arduino_SSCMA ライブラリを使用して Grove Vision AI Module V2 とインターフェースします。`setup()` 関数では、AI モジュールが初期化され、シリアル通信が開始されます。

`loop()` 関数では、Grove Vision AI Module V2 の組み込みアルゴリズムを使用して推論を実行するために `invoke()` メソッドが繰り返し呼び出されます。推論が成功すると、スケッチはシリアルモニタに前処理、推論、後処理の時間を含むパフォーマンスメトリクスを出力します。

スケッチは推論結果の詳細情報を処理し、以下を出力します：
- バウンディングボックス (`boxes()`)：検出されたオブジェクトの位置とサイズを x, y 座標、幅、高さの形式で識別。
- クラス分類 (`classes()`)：検出されたオブジェクトのカテゴリと信頼スコアを識別。
- ポイント (`points()`)：検出されたオブジェクトの特定の特徴やキーポイントを x, y 座標と信頼スコアとともに表現。

これらの結果は、AI モジュールによって検出されたオブジェクト、その位置、サイズ、および各検出や分類の信頼レベルに関する洞察を提供します。出力はシリアルモニタに表示され、さらなる分析やデバッグに使用できます。

##### 効果

引き続きジェスチャー検出モデルを使用します。アプリケーションをアップロードした後、シリアルモニタを開き、シリアルモニタのボーレートを **9600** に設定してください。「じゃんけん」の手を準備し、カメラの認識エリアに向けてください。シリアルモニタに認識結果が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>

#### デモ 2. XIAO を介して制御コマンドを送信する

Grove Vision AI V2 は [UART プロトコル](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md) を介した通信をサポートしており、組み込みプロトコルを使用することで Grove Vision AI V2 の Himax WE2 チップを操作することが可能です。以下のサンプルプログラムは、XIAO を使用して Grove Vision AI V2 とシリアルポート経由で通信する方法を示しています。

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

##### 手順の説明

この Arduino スケッチは、Seeed Studio の機械学習フレームワーク SSCMA を利用して、シリアルコンソールと Grove Vision AI V2 モジュール間の通信インターフェースを確立します。このスケッチは、シリアルコマンドを介して Grove Vision AI V2 モジュールとのデータの送受信を行うよう設計されています。

スケッチの説明：

`setup()` 関数では：
- I2C 通信プロトコルが `Wire.begin()` を使用して初期化され、Grove Vision AI V2 モジュールとの通信が可能になります。
- シリアル通信がボーレート 115200 で設定されます。
- シリアル接続がアクティブになるまで待機し、シリアルモニタに「Proxy start」と出力してプロキシ通信チャネルが準備完了であることを示します。

`loop()` 関数では：
- スケッチは `Serial.available()` を使用して受信したシリアルデータを確認します。データがある場合、バッファ `buf` に読み込みます。
- バッファに収集されたデータは `AI.write()` メソッドを使用して Grove Vision AI V2 モジュールに送信されます。
- 次に、Grove Vision AI V2 モジュールが送信するデータがあるかどうかを `AI.available()` を使用して確認します。
- Grove Vision AI V2 モジュールからデータが送信されている場合、`AI.read()` を使用してバッファ `buf` にデータを読み込み、バッファサイズ 512 バイトを超えないようにします。
- 最後に、Grove Vision AI V2 モジュールから受信したデータを `Serial.write()` を使用してシリアルコンソールに送信し、シリアルインターフェースと Vision AI モジュール間の双方向通信を完了します。

このセットアップにより、Grove Vision AI V2モジュールとのインタラクティブな通信が可能になり、ユーザーはシリアル接続を介してモジュールに指示を送信し、データを受信することができます。

## リソース
- [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home)
- [SenseCraft AI Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process)
- [XIAO用Arduinoライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)

## トラブルシューティング

### Q1: XIAO ESP32C3を使用してDemo1のコードを正常にアップロードした後、ポートで認識結果が表示されないのはなぜですか？

Arduino IDEバージョン1.xxを使用している場合は、C3のリセットボタンを押した後にシリアルモニターを再度開いて結果を確認してください。Arduino IDEバージョン2.xxを使用している場合は、リセットボタンを押すとシリアルモニターにメッセージが更新されます。

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