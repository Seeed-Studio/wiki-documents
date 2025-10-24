---
description: Grove GestureセンサーPAJ7660の使い方。
title: Grove スマート IR ジェスチャーセンサー (PAJ7660)
keywords:
- ジェスチャー
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_gesture_paj7660
last_update:
  date: 05/15/2025
  author: Citric
---


# Grove スマート IR ジェスチャーセンサー (PAJ7660)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>


## 概要

Grove スマート IR ジェスチャーセンサーは、赤外線カメラセンサーを搭載し、AIアルゴリズムを適用したインテリジェントなジェスチャー認識モジュールです。15種類以上のジェスチャーを広範囲で検出でき、IICおよびSPI通信の両方をサポートします。このモジュールは、Grove、Type-C、およびSeeed Studio XIAOとの直接接続も可能です。

### 特徴

- **コンパクトなAIジェスチャーセンサー**: 赤外線カメラセンサーを搭載し、AIアルゴリズムを適用してジェスチャー検出を実現。サイズは4.3cm x 2.1cmのコンパクトな基板。
- **15種類以上のジェスチャーを広範囲で検出**: Nフィンガープッシュ、ピンチ、タップ、グラブ、回転、親指の上下、静的など、さまざまなジェスチャーをサポート。検出範囲は5〜40cm。
- **高い互換性**: XIAOシリーズインターフェースおよびGroveコネクタとI2C通信を介して互換性があり、SPI通信を介してPC上で画像表示をサポート。
- **柔軟な電圧選択**: Groveインターフェースは3.3Vおよび5Vシステムに対応。

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/hardware.png" style={{width:1000, height:'auto'}}/></div>

## 始め方

### 操作平面

ジェスチャー操作距離は15〜30cmで、最大距離は35cmを超えることはできません。センサーのFOVは水平78.3°、垂直62.9°で、操作エリアは30cmで48 x 36cm²です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/1.png" style={{width:700, height:'auto'}}/></div>

センサーまでの距離に加えて、センサーの配置場所にも注意が必要です。センサーの前面、左上隅に小さな人型の形があります。この図が直立している場合は、正しい位置に配置されています。逆さまの場合は、正確な認識結果が得られない可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/13.png" style={{width:400, height:'auto'}}/></div>

### 背景干渉

背景ノイズがジェスチャー認識の精度に影響を与える可能性があるため、手のひらの後ろに反射率の高い背景物体を避けることを推奨します。通常のジェスチャー認識条件では、手のひらと背景の間に少なくとも35cmの距離を確保することを推奨します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/2.png" style={{width:600, height:'auto'}}/></div>


### ジェスチャータイプ

サポートされているすべてのジェスチャータイプは以下のセクションで説明されています。

#### ジェスチャー定義

<div class="table-center">
	<table align="center">
		<tr>
			<th>ジェスチャー</th>
			<th>説明</th>
            <th>備考</th>
		</tr>
		<tr>
			<td>Nフィンガー (N=0~5)</td>
			<td>拳の上に0〜5本の指 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/3.png" style={{width:250, height:'auto'}}/></div></td>
            <td>操作距離 15〜30cm <br /> 静的</td>
		</tr>
		<tr>
			<td>Nフィンガープッシュ (N=1~5)</td>
			<td>N本の指がセンサーに向かって前進 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/4.png" style={{width:250, height:'auto'}}/></div></td>
            <td>操作距離 15〜30cm <br /> プログラム可能な閾値</td>
		</tr>
        <tr>
            <td>ピンチ</td>
            <td>2本の指を閉じてピンチ、開いてリリース <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/5.png" style={{width:100, height:'auto'}}/></div></td>
            <td>操作距離 15〜30cm <br /> 手のひらの中心座標をカーソルとして使用可能、ピンチ結果を報告</td>
        </tr>
        <tr>
            <td>回転 CW/CCW</td>
            <td>手首を円形パターンで動かす <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/6.png" style={{width:150, height:'auto'}}/></div></td>
            <td>操作距離 15〜30cm <br /> 検出されたジェスチャー角度を設定可能、角度値を報告可能</td>
        </tr>
        <tr>
            <td>手のスワイプ右または左</td>
            <td>両手を互いに離して一定の距離を移動 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/7.png" style={{width:300, height:'auto'}}/></div></td>
            <td>操作距離 15〜30cm <br /> プログラム可能な閾値</td>
        </tr>
        <tr>
            <td>タップ</td>
            <td>1本指でクリック（指が消える） <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/8.png" style={{width:200, height:'auto'}}/></div></td>
            <td>操作距離 15〜30cm <br /> 手のひらの中心座標をカーソルとして使用可能</td>
        </tr>
        <tr>
            <td>グラブ</td>
            <td>5本指から0本指へ <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/9.png" style={{width:200, height:'auto'}}/></div></td>
            <td>操作距離 15〜30cm <br /> 手のひらの中心座標をカーソルとして使用可能 <br /> グラブ結果を報告</td>
        </tr>
        <tr>
            <td>親指アップ</td>
            <td>拳の上に親指 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/10.png" style={{width:180, height:'auto'}}/></div></td>
            <td>操作距離 15〜25cm</td>
        </tr>
        <tr>
            <td>親指ダウン</td>
            <td>拳の下に親指 <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/11.png" style={{width:180, height:'auto'}}/></div></td>
            <td>操作距離 15〜25cm</td>
        </tr>
	</table>
</div>

#### ジェスチャー操作モード

ジェスチャーモードには、サムモード、カーソルモード、ジェスチャーモードの3種類があります。それぞれ特定のユーザーシナリオやアプリケーションに適したジェスチャータイプを定義しています。デフォルトの組み合わせモードには、サムモードを除くすべてのジェスチャーが含まれます。

<div class="table-center">
	<table align="center">
		<tr>
			<th>モード</th>
			<th>デフォルト接続</th>
            <th>ジェスチャータイプ</th>
		</tr>
		<tr>
			<td>2</td>
			<td>サムモード</td>
            <td>親指の上下</td>
		</tr>
		<tr>
			<td>4</td>
			<td>カーソルモード</td>
            <td>静止指 <br /> プッシュ <br /> 回転 <br /> タップ <br /> ピンチ <br /> グラブ</td>
		</tr>
        <tr>
			<td>5</td>
			<td>ジェスチャーモード（デフォルト）</td>
            <td>静止指 <br /> プッシュ <br /> スワイプ <br /> 回転 <br /> タップ (IS_SELECT フラグ = 1) <br /> ピンチ (IS_SELECT フラグ = 1) <br /> グラブ (IS_SELECT フラグ = 1)</td>
		</tr>
	</table>
</div>

### ハードウェアタイプ

Grove スマート IR ジェスチャーセンサーは、IIC、SPI、USBの幅広い通信プロトコルをサポートしています。異なるモードは、背面の4ポジションDIPスイッチで直接選択できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/back.png" style={{width:400, height:'auto'}}/></div>

<br />

以下の図と表は、4ポジションDIPスイッチを使用して希望のモードを選択する方法を示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/12.png" style={{width:300, height:'auto'}}/></div>

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
			<th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
		</tr>
		<tr>
			<th>I2Cモード</th>
			<td>ON</td>
            <td>OFF</td>
            <td>ON</td>
            <td>ON</td>
		</tr>
		<tr>
			<th>SPIモード</th>
			<td>ON</td>
            <td>ON</td>
            <td>ON</td>
            <td>ON</td>
		</tr>
        <tr>
			<th>USBモード</th>
			<td>OFF</td>
            <td>OFF</td>
            <td>OFF</td>
            <td>OFF</td>
		</tr>
	</table>
</div>

:::note
異なるパターンを使用する場合、配線やコードが若干異なる場合があります。これについては、以下の例で詳しく説明します。
:::

## 上位コンピュータソフトウェアの使用

Grove Gesture SensorをUSBケーブルでコンピュータに接続し、リアルタイムで認識結果を確認したい場合は、上位コンピュータソフトウェアを使用するのが最適です。

### ステップ1. ソフトウェアをダウンロードして開く

まず、**[こちら](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/GestureDemo_220620_Customer.zip)** をクリックしてソフトウェアをzipファイルとしてダウンロードしてください。その後、ダウンロードしたzipファイルを解凍し、解凍された**GestureDemo_220620_Customer**フォルダを開き、**GestureDemo_220620_Customer.exe**ファイルをダブルクリックして実行します。

:::tip
この時点で、ジェスチャーセンサーが見つからないというエラーメッセージが表示される場合がありますが、エラーメッセージを閉じるだけで問題ありません。
:::

### ステップ2. Grove Gesture SensorをPCに接続する

次に、4ポジションDIPスイッチをすべてOFFにして、Grove Gesture SensorがUSBモードになっていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/14.png" style={{width:150, height:'auto'}}/></div>

その後、高品質のデータケーブルを使用して、Grove Gesture SensorのUSB-CポートをコンピュータのUSBポートに接続します。

### ステップ3. ソフトウェアで結果を確認する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/16.png" style={{width:1000, height:'auto'}}/></div>

コンピュータに接続したら、ソフトウェアの左上にある**Run**ボタンをクリックし、その後**Gesture**モードを選択してリアルタイムで結果を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/17.png" style={{width:1000, height:'auto'}}/></div>

ジェスチャーの種類とその説明については、**[前のセクション](#gesture-types)** を参照してください。

## Arduinoライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture/tree/dev" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### 機能

スケッチを開発する前に、ライブラリで利用可能な関数を確認しましょう。

1. `bool init()` —— この関数はGrove Gesture Sensorを初期化し、初期化が成功した場合は**True**を、失敗した場合は**False**を返します。

2. `bool getResult(paj7620_gesture_t& res)` —— この関数は、センサーが認識したジェスチャーの結果を取得するために使用されます。

### インストール

ZIP形式のライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリのインストールは成功です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## デモ1: IICでセンサーをMCUに接続

### ステップ1. 4ポジションDIPスイッチをIIC位置に切り替えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style={{width:100, height:'auto'}}/></div>

左から右への2番目のギアをOFFに設定し、他はすべてONにします。

### ステップ2. MCUをGrove Gesture SensorにGroveケーブルで接続します。

IICインターフェースはXIAOシリーズおよびArduino/Seeeduinoシリーズと互換性があります。Arduino/Seeeduinoを使用している場合は、Groveケーブルを使用してIICインターフェースに接続する必要があるかもしれません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/18.jpg" style={{width:600, height:'auto'}}/></div>

XIAOを使用している場合は、すべてが簡単です。Grove Gesture Sensorのメスコネクタに直接差し込むだけで使用できます。USB-Cポートが常に外側を向いていることに注意してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### ステップ3. プログラムをアップロード

以下のプログラムをArduino IDEにコピーし、使用しているXIAO開発ボードを選択して、プログラムをコンパイルしてアップロードします。

#### コード1: ジェスチャーモード（デフォルト）

```cpp
#include "Gesture.h"

pag7660 Gesture; // デフォルトで複合モードを使用

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: ジェスチャー複合モード。");
    
    if(Gesture.init()) {
        Serial.println("PAG7660 初期化成功");
    } else {
        Serial.println("PAG7660 初期化失敗");
    }
    Serial.println("ジェスチャーを入力してください:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        printResultCombinedMode(result);
    }
    delay(100);
}

void printResultCombinedMode(const pag7660_gesture_t& result) {
    const char *cursor_str[] = {
        NULL,
        "タップ",
        "グラブ",
        "ピンチ",
    };
    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                Serial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        Serial.print(result.type);
        Serial.println("-フィンガー");
        break;
    case 6:
        Serial.print("右回転 ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("左回転 ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("左スワイプ");
        break;
    case 9:
        Serial.println("右スワイプ");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-フィンガープッシュ");
        break;
    default:
        break;
    }
}
```

すべてが正常に動作すれば、Grove Gesture Sensorに直接ジェスチャーを行うと、シリアルモニターに結果が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/20.png" style={{width:800, height:'auto'}}/></div>

#### コード2: サムモード

```cpp
#include "Gesture.h"

pag7660 Gesture(GESTURE_THUMB_MODE); // サムモードを使用

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: ジェスチャーサムモード。");

    // SPIを使用するためにSPIチップセレクトピン番号で初期化
    if(Gesture.init()) {
        Serial.println("PAG7660 初期化成功");
    } else {
        Serial.println("PAG7660 初期化失敗");
    }
    Serial.println("ジェスチャーを入力してください:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("サムアップ");
        else if (result.thumb.down)
            Serial.println("サムダウン");
        }
    delay(100);
}
```

もしすべてが正常に動作していれば、Grove Gesture Sensor に直接ジェスチャーを行うと、シリアルモニターに結果が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/21.png" style={{width:800, height:'auto'}}/></div>

:::tip
Grove Gesture Sensor には3つの異なるモードがあります。2つの自己完結型モードのプログラム開発を完了し、ここで利用可能にしています。異なるモードの違いについては、[Gesture Operation Mode](#gesture-operation-mode) を参照してください。
:::

## デモ 2: センサーを SPI で XIAO に接続する

IIC の代わりに SPI アプローチを使用したい場合は、以下の手順を参照してプロジェクトを完成させてください。

### ステップ 1. 4ポジション DIP スイッチを SPI の位置に切り替える

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/SPI.png" style={{width:100, height:'auto'}}/></div>

すべてのスイッチを ON の位置に切り替える必要があります。

### ステップ 2. XIAO を Grove Gesture Sensor に接続する

XIAO を Grove Gesture Sensor のメスコネクタに直接差し込み、使用します。USB-C ポートが常に外側を向いていることに注意してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### ステップ 3. プログラムをアップロードする

以下のプログラムを Arduino IDE にコピーし、使用している XIAO 開発ボードを選択して、プログラムをコンパイルしてアップロードしてください。

#### コード 1: ジェスチャーモード（デフォルト）

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture; // デフォルトで結合モードが使用されます

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture combined mode.");
    
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        printResultCombinedMode(result);
    }
    delay(100);
}

void printResultCombinedMode(const pag7660_gesture_t& result) {
    const char *cursor_str[] = {
        NULL,
        "Tap", // タップ
        "Grab", // グラブ
        "Pinch", // ピンチ
    };
    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                Serial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        Serial.print(result.type);
        Serial.println("-finger"); // 指
        break;
    case 6:
        Serial.print("Rotate Right "); // 右回転
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("Rotate Left "); // 左回転
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("Swipe Left"); // 左スワイプ
        break;
    case 9:
        Serial.println("Swipe Right"); // 右スワイプ
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-finger push"); // 指プッシュ
        break;
    default:
        break;
    }
}
```

もしすべてが正常に動作していれば、Grove Gesture Sensor に直接ジェスチャーを行うと、シリアルモニターに結果が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/22.png" style={{width:800, height:'auto'}}/></div>

#### コード 2: サムモード

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture(GESTURE_THUMB_MODE); // サムモードが使用されます

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture thumb mode.");

    // SPI を使用するために SPI チップセレクトピン番号で初期化
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("Thumb Up"); // 親指を上げる
        else if (result.thumb.down)
            Serial.println("Thumb Down"); // 親指を下げる
        }
    delay(100);
}
```

もしすべてが正常に動作していれば、Grove Gesture Sensor に直接ジェスチャーを行うと、シリアルモニターに結果が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/23.png" style={{width:800, height:'auto'}}/></div>

:::tip
Grove Gesture Sensor には3つの異なるモードがあります。2つの自己完結型モードのプログラム開発を完了し、ここで利用可能にしています。異なるモードの違いについては、[Gesture Operation Mode](#gesture-operation-mode) を参照してください。
:::

## リソース

- **[ZIP]** [Grove ジェスチャーセンサー SCH&PCB](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH&PCB.zip)
- **[PDF]** [Grove ジェスチャーセンサー SCH](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH_PDF.pdf)
- **[データシート]** [PAG7661QN_FW-DS_V0.8_05072022_Confidential.pdf](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/PAG7661QN_FW-DS_V0.8_05072022_Confidential.pdf)


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>