---
description: Grove Vision AI V2とソフトウェアプラットフォームの入門ガイド
title: ソフトウェアサポート
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_vision_ai_v2_software_support
last_update:
  date: 12/12/2023
  author: Citric
---

# サポートされているソフトウェアの概要

Grove Vision AI Module V2を有効にする方法は2つあります：

- [**SenseCraft AIでコード不要の入門**](#jump1)
   - [SenseCraft AIとは？](#jump2)
   - [SenseCraft AI Model Assistantの入門ガイド](#jump3)
- [**Seeed Studio XIAOボードと接続してArduinoでプログラミング**](#jump4)
   - [Arduinoライブラリの紹介](#jump5)
   - [Seeed Studio XIAOの入門ガイド](#jump6)

## <span id="jump1"> SenseCraft AIでコード不要の入門 </span>

このセクションでは、SenseCraft AI Model Assistantを使用して、コード不要で他の開発ボードも不要で、迅速にデプロイして結果を観察する方法をご案内します：

### <span id="jump2"> SenseCraft AIとは？  </span>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft AIは、ユーザーが公開されているAIモデルの膨大なライブラリを、エッジデバイスに簡単にデプロイできるようにします：

- reComputer (NVIDIA Jetson)
- Seeed Studio XIAO S3 Board
- Vision AIモジュール、その他

シームレスでユーザーフレンドリーな体験を提供し、わずか数クリックで公開AIモデルをエッジデバイスに直接デプロイできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>詳細を見る 📕</font></span></strong></a>
</div>

以下が含まれます：

- Model Assistantソフトウェアサービス
- Device Workspaceソフトウェアサービス

このセクションでは、「Model Assistant」を使用してモジュールを有効にします。SenseCraft AI Model Assistantの支援により、様々な共同作成モデルを簡単にアップロードし、結果を直接観察できます。




### <span id="jump3"> SenseCraft AI Model Assistantの入門ガイド  </span>

<!-- SenseCraft is a series of software services developed by Seeed Studio to provide users with faster and simpler software services and applications. With three product lines, Data line, Edge line and AI line, SenseCraft is able to fulfill users' needs in data services, device management and AI applications. No matter what solution you need, SenseCraft can provide you with efficient and reliable solutions and customized services. -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/1.png" style={{width:1000, height:'auto'}}/></div>
 -->
今度は、SenseCraft AIを使用してモジュールを迅速に開始します。これにはモジュールのみが必要です。

#### ステップ1. モデルを選択

まず、SenseCraft AI Model Assistantのメインページを開く必要があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AIに移動</font></span></strong></a>
</div>
<br />

デプロイしたいモデルを選択してクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a1.png" style={{width:1000, height:'auto'}}/></div>

ここでこのモデルの説明を確認でき、適している場合は右側の**Deploy Model**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a2.png" style={{width:1000, height:'auto'}}/></div>

#### ステップ2. モジュールを接続し、適切なモデルをアップロード

Type-Cケーブルを使用してGrove Vision AI V2をコンピュータに接続し、**Connect**ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

**Confirm**ボタンをクリックします。このページの左上角で**USB Single Serial**を選択できます。その後、**Connect**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

モデルが正常にアップロードされるまで、このページで1〜2分間お待ちください。この処理中に他のページタブに切り替えると、アップロードが失敗する可能性があることにご注意ください（私たちのチームはこの問題の解決に積極的に取り組んでおり、間もなく修正される予定です）。

#### ステップ3. 観察

モデルが正常にアップロードされると、左側のPreviewでGrove Vision AI V2カメラからのライブフィードを確認できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a5.png" style={{width:1000, height:'auto'}}/></div>

<br />

左側のPreview Settingsには、モデルの認識精度を最適化するために変更できる2つの設定オプションがあることがわかります。

- **Confidence:** Confidenceは、モデルがその予測に割り当てる確実性または確率のレベルを指します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif" style={{width:600, height:'auto'}}/></div>

- **IoU:** IoUは、予測されたバウンディングボックスと真のバウンディングボックスとの精度を評価するために使用されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif" style={{width:600, height:'auto'}}/></div>

:::tip
- **Confidence:** これは、コンピュータビジョンモデルがその推測にどの程度確信を持っているかを示します。パーセンテージのように考えてください：高いconfidenceは、モデルがより確実であることを意味します。
- **IoU (Intersection over Union):** これは、2つのボックス間の重複の程度を測定します。画像内のオブジェクトの周りにボックスを描き、モデルもボックスを描いたと想像してください。IoUは、あなたのボックスがどの程度一致するかを示します。高いIoUは、ボックスがより近くにあることを意味します。
:::

この時点で、モデルのアップロードと結果の観察が完了しました。

## <span id="jump4"> Seeed Studio XIAOボードと接続してArduinoでプログラミング </span>

### <span id="jump5"> Arduinoライブラリの紹介 </span>

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Grove Vision AIはWiseEye2 HX6538チップを使用し、画像処理とモデル推論はGrove Vision AI内でローカルに処理され、その後結果がIICまたはUART経由でXIAOに出力されます。そのため、このライブラリの主な目的はGrove Vision AIのデータストリームを処理することであり、モデル推論や画像処理は含まれません。

Grove Vision AIはIIC経由でXIAOと通信し、デバイスのIICアドレスは`0x62`です。画像情報の転送はUSBシリアルポート経由で行われます。

#### 機能

スケッチの開発を始める前に、ライブラリの利用可能な機能を見てみましょう。

- `bool begin(TwoWire *wire = &Wire, uint16_t address = I2C_ADDRESS, uint32_t wait_delay = 2, uint32_t clock = 400000)` —— Grove Vision AI V2を初期化します。

  **入力パラメータ:**
    - `TwoWire *wire` —— このポインタはTwoWireオブジェクトを指し、通常I2Cデバイスとの通信に使用されます。
    - `uint16_t address` —— これはI2Cデバイスのアドレスで、I2Cバスに接続された特定のデバイスを識別します。
    - `uint32_t wait_delay` —— コマンドを送信する前に応答を待つ遅延時間（ミリ秒）。
    - `uint32_t clock` —— これはI2Cバスのクロックレート（Hz）です。

  **戻り値:** `True`または`False`。初期化成功時はtrue、初期化失敗時はfalse。


- `int invoke(int times = 1, bool filter = 0, bool show = 0)` —— Grove Vision AI V2にINVOKEコマンドを送信し、Grove Vision AIがモデルの呼び出し、推論、認識を開始できるようにします。

  **入力パラメータ:** 
    - `int times` —— Invokeの回数。
    - `fileter` —— 最後の結果が前の結果と異なる場合のみイベント応答が送信されることを意味します（ジオメトリとスコアで比較）。
    - `bool show` —— 最後の結果が前の結果と異なる場合のみイベント応答が送信されることを意味します（ジオメトリとスコアで比較）。

:::note
Grove Vision AIのプロトコル定義の詳細については、[**プロトコルドキュメント**](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)をお読みください。
:::

  **戻り値:** `CMD_OK`または`CMD_ETIMEDOUT`。モデルが正常に有効化された場合は**CMD_OK**を返し、そうでなければ**CMD_ETIMEDOUT**を返します。

- `int available()` —— IIC経由で接続されたデバイスから読み取り可能なデータのバイト数を確認します。

  **入力パラメータ:** なし。

  **戻り値:** デバイスから読み取ることができるデータバイト数。

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

- `std::vector<boxes_t> &boxes() { return _boxes; }` —— 結果をボックスの形で出力します。

```cpp
typedef struct
{
    uint16_t x;      // Horizontal coordinates of the centre of the box
    uint16_t y;      // Vertical coordinates of the centre of the box
    uint16_t w;      // Width of the identification box
    uint16_t h;      // Height of the identification box
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} boxes_t;
```

- `std::vector<classes_t> &classes() { return _classes; }` —— 結果をカテゴリとして出力します。

```cpp
typedef struct
{
    uint8_t target;  // Target
    uint8_t score;   // Confidence in identifying as target
} classes_t;
```

- `std::vector<point_t> &points() { return _points; }` —— 結果をドットとして出力します。

```cpp
typedef struct
{
    uint16_t x;      // Horizontal coordinates of the identification point
    uint16_t y;      // Vertical coordinates of identification point
    uint16_t z;      // Relative depth coordinates of the identification point
    uint8_t score;   // Confidence in identifying as target
    uint8_t target;  // Target
} point_t;
```

:::note
ここでの深度座標は相対的なものであり、Grove Vision AIが深度カメラ対応であることを意味するものではありません。むしろ、アルゴリズムが相対的な深度座標を計算し、これは一部のモデル（例：face-3dモデル）で有効です。
:::

- `perf_t &perf() { return _perf; }` —— 画像処理と推論時間。

```cpp
typedef struct
{
    uint16_t prepocess;   // Pre-processing time
    uint16_t inference;   // inference time
    uint16_t postprocess; // Post-processing time
} perf_t;
```

:::note
出力は、モデルによってボックスやポイントを識別する情報を常に出力するとは限りません。
:::

#### インストール

zipライブラリをダウンロードしたので、Arduino IDEを開き、**Sketch > Include Library > Add .ZIP Library**をクリックします。ダウンロードしたzipファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**Library added to your libraries**と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### <span id="jump6"> Seeed Studio XIAOを使い始める </span>


機械視覚機能を持つセンサーのプロトタイプを作成したい場合は、XIAOの追加を検討することをお勧めします。XIAOとGrove Vision AI V2を使用することで、使用したいモデルを使用し、アプリケーション領域に迅速に展開することができます。

<!-- Before that, you still need to follow the [**SenseCraft AI**](#step-1-connect-the-grove-vision-ai-v2-to-the-sscma) steps and content to upload a model you want to use first. -->

#### 準備

**ステップ 1.** 必要な材料

このチュートリアルでは、XIAO ESP32S3を例として使用し、Arduinoプログラムの使用方法を紹介します。そのため、以下のハードウェアを準備することをお勧めします。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Grove Vision AI V2</th>
      <th>OV5647-62 FOV Camera Module<br />for Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

次に、ピンの列を介してXIAOとGrove Vision AI V2を接続する必要があります（または拡張ボードとGroveインターフェースを使用します）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

:::caution
接続の方向にご注意ください。Grove Vision AIのType-Cコネクタは、XIAOのType-Cコネクタと同じ方向である必要があります。
:::

**ステップ 2.** Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong>
    </a>
</div>

<br />

**ステップ 3.** 開発ボードモデルを選択し、Arduino IDEに追加します。

:::tip
以下は、Grove Vision AI V2の例でサポートされているボードのリストです。次の例を完了するために使用したいボードを選択できます。このチュートリアルでは、XIAO ESP32S3を例として使用します。
:::

- 後のルーチンで**Seeed Studio XIAO SAMD21**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO RP2040**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO nRF52840**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32C3**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32S3**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)**を参照して追加を完了してください。

- 後のルーチンで**Seeeduino V4.3**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino_v4.2/)**を参照して追加を完了してください。

**ステップ 4.** **ArduinoJSON**ライブラリをインストールします。

Sketchメニューに移動し、**Include Library > Manage Libraries...**を選択します。これによりライブラリマネージャが開きます。ライブラリマネージャの上部にある検索バーで、**ArduinoJSON**と入力します。検索結果にArduinoJSONライブラリが表示されます。ライブラリの横にInstallボタンがあります。Installボタンをクリックします。Arduino IDEが自動的にライブラリをダウンロードし、Arduino開発環境にインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/20.png" style={{width:1000, height:'auto'}}/></div>

#### デモ 1. XIAOを使用して認識結果を取得する

以下の手順は、Grove Vision AI V2によって報告される認識情報を取得し、解析するのに役立つ簡単な例です。

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

このArduinoスケッチは、Seeed_Arduino_SSCMAライブラリを使用してGrove Vision AI Module V2とインターフェースします。`setup()`関数では、AIモジュールが初期化され、シリアル通信が開始されます。

`loop()`関数は、Grove Vision AI Module V2の内蔵アルゴリズムを使用して推論を実行するために`invoke()`メソッドを繰り返し呼び出します。推論が成功すると、スケッチは前処理、推論、後処理の時間を含むパフォーマンス指標をシリアルモニターに出力します。

スケッチは推論結果の詳細情報を処理して出力します。これには以下が含まれます：

- 検出されたオブジェクトの位置と寸法をx、y座標、幅、高さの形で識別するバウンディングボックス（`boxes()`）。
- 検出されたオブジェクトのカテゴリと信頼度スコアを識別する分類（`classes()`）。
- 検出されたオブジェクトの特定の特徴やキーポイントを、x、y座標と信頼度スコアと共に表すポイント（`points()`）。

これらの結果は、AIモジュールによって検出されたオブジェクト、その位置、サイズ、および各検出や分類の信頼度レベルについての洞察を提供します。出力は、さらなる分析やデバッグのためにシリアルモニターに出力されます。


##### 効果

引き続きジェスチャー検出モデルを使用します。アプリケーションをアップロードした後、シリアルモニターを開き、シリアルモニターのボーレートを**9600**に設定してください。「じゃんけん」を準備し、カメラの認識エリアに向けると、シリアルモニターに認識結果が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/12.png" style={{width:800, height:'auto'}}/></div>


#### デモ2. XIAO経由で制御コマンドを送信

Grove Vision AI V2は[UARTプロトコル](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)による通信をサポートしており、内蔵プロトコルを使用することで、Grove Vision AI V2のHimax WE2チップを操作することが可能です。以下のサンプルプログラムは、XIAOを使用してシリアルポート経由でGrove Vision AI V2と通信する方法を示しています。

```cpp
#include <Arduino.h>
#include <Wire.h>

#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
    // put your setup code here, to run once:
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

このArduinoスケッチは、Seeed Studio Machine Learning Framework SSCMAを利用して、シリアルコンソールとGrove Vision AI V2モジュール間の通信インターフェースを確立します。このスケッチは、シリアルコマンドを介してGrove Vision AI V2モジュールとの間でデータをやり取りするように設計されています。

スケッチの修正された説明は以下の通りです：

`setup()`関数では：
- `Wire.begin()`でI2C通信プロトコルが初期化され、Grove Vision AI V2モジュールとの通信が可能になります。
- シリアル通信がボーレート115200で設定されます。
- スケッチはシリアル接続がアクティブになるまで待機し、その後「Proxy start」をシリアルモニターに出力して、プロキシ通信チャネルの準備ができたことを示します。

`loop()`関数では：
- スケッチは`Serial.available()`を使用して受信シリアルデータをチェックします。データがある場合、`buf`という名前のバッファに読み込みます。
- バッファに収集されたデータは、`AI.write()`メソッドを使用してGrove Vision AI V2モジュールに送信されます。
- 次に、スケッチは`AI.available()`を使用してGrove Vision AI V2モジュールが送り返すデータがあるかどうかをチェックします。
- Grove Vision AI V2モジュールがデータを送信した場合、スケッチは`AI.read()`でこのデータをバッファ`buf`に読み込み、データが512バイトのバッファサイズを超えないようにします。
- 最後に、Grove Vision AI V2モジュールから受信したデータは`Serial.write()`を使用してシリアルコンソールに送信され、シリアルインターフェースとビジョンAIモジュール間の双方向通信が完了します。

この設定により、Grove Vision AI V2モジュールとのインタラクティブな通信が可能になり、ユーザーはシリアル接続を介してモジュールに指示を送信し、モジュールからデータを受信できます。


## リソース
- [SenseCraft AI](https://sensecraft.seeed.cc/ai/#/home)
- [SenseCraft AI Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process)
- [XIAO用Arduinoライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)
- [Grove Vision AI V2を工場出荷時ファームウェアに復元](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/Vision_AI_Module_V2_factory_flasher.zip)

## トラブルシューティング

### Q1: XIAO ESP32C3を使用してDemo1のコードを正常にアップロードした後、ポートで認識結果が表示されないのはなぜですか？

Arduino IDE バージョン1.xxを使用している場合は、C3のResetを押した後にシリアルモニターを再度開いて結果を確認してください。Arduino バージョン2.xxを使用している場合は、Resetボタンを押した後にシリアルモニターでメッセージが更新されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
