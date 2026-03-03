---
description: XIAOでmmWaveセンサーを開発する方法の紹介。
title: XIAOとArduinoでの24GHz mmWave開発
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/mmwave_for_xiao_arduino
last_update:
  date: 11/13/2023
  author: Citric
---

# XIAOとArduinoでの24GHz mmWaveセンサー開発

このセクションでは、XIAO用mmWaveのライブラリの使用方法と二次開発について説明します。

:::caution
このWikiのすべての内容は、XIAO用24GHz mmWaveにのみ適用され、他のミリ波センサーでは使用できない場合があります。
:::

## はじめに

### ハードウェアの準備

この記事のチュートリアル内容を始める前に、ミリ波センサーを使用するために、現在販売中のXIAOのいずれかを購入することをお勧めします。

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>Seeed Studio XIAO ESP32S3</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

この記事のチュートリアルでは、XIAO ESP32C3とmmWaveセンサーを使用例として、センサーのArduinoライブラリと関連機能の使用方法をガイドします。

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>24GHz mmWave for XIAO</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:150, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

このセンサーはXIAO互換性を考慮して設計されているため、一般的に、このセンサーを使用したい場合は、XIAOを準備し、センサー用のメスヘッダーピンを取り付ける必要があります。XIAOに接続する際は、センサーの取り付け方向に特に注意してください。逆向きに差し込まないでください。そうしないと、センサーやXIAOを焼損する可能性があります。

:::caution
正しい方向は、センサーのアンテナが外側を向くようにすることです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

接続方向が正しいことを確認した後、USB-Cタイプケーブルをコンピューターまたは電源に接続すると、センサーが動作を開始します。

### ソフトウェアの準備

センサーが使用するデフォルトのボーレートは256000であり、XIAOが設計したソフトシリアルポートのボーレートでは、このような高速ボーレートでのデータ伝送を満たすことができない可能性があるため、センサーを使用する前に、ソフトウェアを使用してセンサーのボーレートを調整する必要があります。次に、使用している携帯電話システムに応じて、対応するAPPをダウンロードしてください。

:::note
APPはボーレートを読み取ることができません。変更後も、APPは依然としてデフォルトのボーレートを表示します。
:::

- [Google PlayからHLKRadarToolをダウンロード](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool)

- [App StoreからHLKRadarToolをダウンロード](https://apps.apple.com/us/app/hlkradartool/id1638651152)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

## Arduinoライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave_for_XIAO" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 関数

スケッチの開発を始める前に、ライブラリで利用可能な関数を見てみましょう。

- `Seeed_HSP24(Stream &serial)` —— センサーが接続されているシリアルポートを渡し、センサーの初期化を開始するために使用されます。
    - **入力パラメータ**:

        - **serial**: センサーが接続されているシリアルポート。

- `Seeed_HSP24(Stream &serial, Stream &debugSerial)` —— センサーが接続されているシリアルポートを渡し、デバッグシリアルポートを追加してセンサーの初期化を開始するために使用されます。
    - **入力パラメータ**:

        - **serial**: センサーが接続されているシリアルポート。
        - **debugSerial**: シリアルデバッグを有効にし、受信シリアルポートで出力します。

- `String getVersion()` —— センサーのソフトウェアバージョン番号を取得します。
    - **戻り値**: センサーのソフトウェアバージョン番号。

- `RadarStatus getStatus()` —— センサーのステータス情報を取得します。センサーから報告されるすべての情報は、この関数によって解析されます。
    - **戻り値**: 
        - **radarStatus.radarMode**: エンジニアリングモードまたはベースモード。1はエンジニアリングモードに対応し、2はベースモードに対応します。
        - **radarStatus.targetStatus**: 監視対象の現在の状況を示します。合計4つの状況があります（NoTarget）、1つ目は人が検出されない場合、2つ目は誰かが静止していると検出された場合（MovingTarget）、3つ目は同時に検出された場合（StaticTarget）、4つ目は異常な場合（BothTargets）です（ErrorFrame）。BothTargetは誰かの動きを指します。センサーが現在の環境を監視し、動きエネルギーと静止エネルギーの両方が設定されたしきい値を超えるため、「BothTarget」と名付けました。動きエネルギーのみがしきい値を超える場合は、「MovingTarget」を出力します。
        - **radarStatus.distance**: この値は、センサーが検出されたオブジェクトから検出する距離を指します。
        - **radarStatus.radarMovePower.moveGate**（エンジニアリングモードで有効）: この配列は、異なる距離ゲートの移動エネルギー値を格納します。
        - **radarStatus.radarStaticPower.staticGate**（エンジニアリングモードで有効）: この配列は、異なる距離ゲートの静的エネルギー値を格納します。
        - **radarStatus.photosensitive**（エンジニアリングモードで有効）: この値は、センサーの光感度値を指し、範囲は0-255です。

- `DataResult sendCommand(const byte* sendData, int sendDataLength)` —— この関数を通じてセンサーにコマンドが送信されます。
    - **入力パラメータ**:
        - **sendData**: 送信されるコマンドフレームの配列。
        - **sendDataLength**: 送信されるコマンドフレームの長さ。
    
    - **戻り値**:
        - **resultBuffer**: 動的に割り当てられた配列を指します。
        - **length**: 配列の長さ。

- `AskStatus setDetectionDistance(int distance,int times)` —— この関数で最大距離ゲートと無人継続時間を設定します。
    - **入力パラメータ**:
        - **distance**: 最大距離ゲートを設定します。
        - **times**: 無人継続時間。

- **Return**:
        - 成功 0x00 または エラー 0x01。

- `AskStatus setGatePower(int gate,int movePower, int staticPower)` —— この関数で異なる距離ゲートと感度を設定します。
    - **入力パラメータ**:
        - **gate**: ドアまでの距離、範囲 0-8 m。
        - **movePower**: 動作閾値をトリガーするエネルギー値。
        - **staticPower**: 静止閾値をトリガーするエネルギー値。

    - **Return**:
        - 成功 0x00 または エラー 0x01。

- `RadarStatus getConfig()` —— 設定センサーのパラメータ値を読み取ります。
    - **Return**:
        - **radarStatus.detectionDistance**: レーダーの動作検出距離ゲート数。
        - **radarStatus.moveSetDistance**: レーダーの静止検出距離ゲート数。
        - **radarStatus.staticSetDistance**: レーダーの最長検出範囲ゲート。
        - **radarStatus.noTargrtduration**: 無人継続時間。


- `AskStatus setResolution(int resolution)` —— ドアまでの距離の解像度を設定します。1は0.25M、0は0.75M。デフォルト0.75M。
    - **入力パラメータ**:
        - **resolution**: 1は0.25M、0は0.75M。デフォルト0.75M。

    - **Return**:
        - 成功 0x00 または エラー 0x01。

- `RadarStatus getResolution()` —— ドアまでの距離の解像度を取得します。1は0.25M、0は0.75M。デフォルト0.75M。
    - **Return**:
        - **radarStatus.resolution**: 1は0.25M、0は0.75M。デフォルト0.75M。

- `AskStatus rebootRadar()` —— レーダー再起動コマンド。
    - **Return**:
        - 成功 0x00 または エラー 0x01。

- `AskStatus refactoryRadar()` —— レーダーを工場設定に復元します。
    - **Return**:
        - 成功 0x00 または エラー 0x01。

- `AskStatus enableEngineeringModel()` —— センサーエンジニアリングモード出力を有効にします。
    - **Return**:
        - 成功 0x00 または エラー 0x01。

- `AskStatus disableEngineeringModel()` —— エンジニアリングモード出力を終了します。
    - **Return**:
        - 成功 0x00 または エラー 0x01。


### デフォルト変数

```cpp
#define BUFFER_SIZE 256     // Serial Buffer Size

class Seeed_HSP24
{
    public:
        static const int FRAME_START_SIZE = 4;
        static const int FRAME_END_SIZE = 4;

        static const byte frameStart[FRAME_START_SIZE];
        static const byte frameEnd[FRAME_END_SIZE];
        static const byte frameAskStart[FRAME_START_SIZE];
        static const byte frameAskEnd[FRAME_END_SIZE];

        struct RadarMovePower // Energy value per movement distance gate
        {
            int moveGate[9] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        };

        struct RadarStaticPower // Energy value per stationary distance gate
        {
            int staticGate[9] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        };

        //  Define the TargetStatus enum class
        enum class AskStatus : byte
        {
            Success = 0x00, // Success
            Error = 0x01,   // Failed
        };

        //  定义TargetStatus枚举类
        enum class TargetStatus : byte
        {
            NoTarget = 0x00,     // No target
            MovingTarget = 0x01, // Moving target
            StaticTarget = 0x02, // Static target
            BothTargets = 0x03,  // It can be interpreted as motion, meaning that both the set motion and stationary thresholds are above the set value
            ErrorFrame = 0x04    // Failed to get status
        };

        // Define the RadarStatus structure
        struct RadarStatus
        {
            TargetStatus targetStatus = TargetStatus::ErrorFrame; // Target status of the radar
            int distance = -1;                                    // Target distance of the radar in mm
            int moveSetDistance = -1;                             // The number of motion detection distance gates of the radar, which generally do not have to be configured
            int staticSetDistance = -1;                           // Number of static detection distance gates of the radar, which generally do not have to be configured
            int detectionDistance = -1;                           // Radar's longest detection range gate
            int resolution = -1;                                  // Distance gate resolution of radar
            int noTargrtduration = -1;                            // Unmanned duration
            int radarMode = -1;                                   // Used to distinguish whether the module is in basic reporting mode (2) or engineering reporting mode (1)
            RadarMovePower radarMovePower;                        // Exercise Energy Value
            RadarStaticPower radarStaticPower;                    // Stationary energy value
            int photosensitive = -1;                              // Photosensitive 0-255
        };

        // Used to return the result of an issued command
        struct DataResult
        {
            byte *resultBuffer; // Points to a dynamically allocated array
            int length;         // Length of the array
        };
};
```

### インストール

zipライブラリをダウンロードしたので、Arduino IDEを開き、**Sketch > Include Library > Add .ZIP Library**をクリックしてください。ダウンロードしたzipファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**Library added to your libraries**と表示されます。これはライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## XIAOの例

ライブラリがインストールされ、基本機能を理解したので、24GHz mmWaveセンサーのいくつかの例を実行して、その動作を確認してみましょう。

**ステップ1.** Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

**ステップ2.** 開発ボードモデルを選択し、Arduino IDEに追加します。

- 後のルーチンで**Seeed Studio XIAO SAMD21**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO RP2040**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO nRF52840**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32C3**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32S3**を使用したい場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)**を参照して追加を完了してください。

:::tip
このチュートリアルではXIAO ESP32C3を例として使用します。
:::

**ステップ3.** センサーをXIAOに接続し、USB-Cタイプケーブルを使用してXIAOをPCに接続します。

**ステップ4.** ダウンロードした**HLKRadarTool**アプリを開き、センサーに適切なボーレートを設定します。

アプリを開くと、アプリが近くのレーダーデバイスを検索します。デバイスのブロードキャスト名は**HLK-LD2410_xxxx**です（xxxxはmacアドレスの最後の4桁）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

ソフトウェアの右上角のMoreオプションで、設定メニューにアクセスして、センサーのカスタムパラメータと機能を設定できます。センサーのボーレートを**9600**に設定して保存してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/15.png" style={{width:400, height:'auto'}}/></div>

その後、センサーの再起動を待ちます。

**ステップ5.** 必要なライブラリを追加します。

Arduino環境に追加する必要があるセンサー用のライブラリに加えて、**ESP32シリーズXIAO**を使用している場合は、提供されている例を使用できるように、ソフトシリアルポート用のライブラリを別途インストールする必要がある場合があります。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### デモ1. 基本モード出力

最初のプログラム例では、センサーによって報告される一般的な情報を解析します。これは、この製品の主要な機能情報出力を表します。例えば、人の存在、動き、距離などのデータです。

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// Define the SoftwareSerial object, D2 as RX, D3 as TX, connect to the serial port of the mmwave sensor
SoftwareSerial COMSerial(D2, D3);

// Creates a global Serial object for printing debugging information
#define ShowSerial Serial

// Initialising the radar configuration
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  delay(500);

  ShowSerial.println("Programme Starting!");

  xiao_config.disableEngineeringModel();
}

void loop() {
  int retryCount = 0;
  const int MAX_RETRIES = 10;  // Maximum number of retries to prevent infinite loops

  //Get radar status
  do {
    radarStatus = xiao_config.getStatus();
    retryCount++;
  } while (radarStatus.targetStatus == Seeed_HSP24::TargetStatus::ErrorFrame && retryCount < MAX_RETRIES);

  //Parses radar status and prints results from debug serial port
  if (radarStatus.targetStatus != Seeed_HSP24::TargetStatus::ErrorFrame) {
    ShowSerial.print("Status: " + String(targetStatusToString(radarStatus.targetStatus)) + " ---- ");
    ShowSerial.println("Distance: " + String(radarStatus.distance) + "  Mode: " + String(radarStatus.radarMode));
  }
  delay(200);
}

// Parsing the acquired radar status
const char* targetStatusToString(Seeed_HSP24::TargetStatus status) {
  switch (status) {
    case Seeed_HSP24::TargetStatus::NoTarget:
      return "NoTarget";
    case Seeed_HSP24::TargetStatus::MovingTarget:
      return "MovingTarget";
    case Seeed_HSP24::TargetStatus::StaticTarget:
      return "StaticTarget";
    case Seeed_HSP24::TargetStatus::BothTargets:
      return "BothTargets";
    default:
      return "Unknown";
  }
}
```

プログラムをコンパイルしてアップロードした後、シリアルモニターを開いてボーレートを9600に設定してください。すべてが正常に動作すれば、以下の結果出力が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/16.png" style={{width:700, height:'auto'}}/></div>


### デモ2. エンジニアリングモード出力

2番目のサンプルプログラムでは、センサーのエンジニアリングデータアップロードを有効にし、このエンジニアリング情報を解析します。ベースモードと比較して、エンジニアリング情報には異なる距離ゲートに対するより多くの動作エネルギー値と静的エネルギー値が含まれています。これらの値の表示により、現在の環境における動的および静的エネルギーの変化を視覚化でき、実際の状況に応じて誰かが存在している、静止している、または動いているかを判断するためのセンサーのトリガーを調整しやすくなります。

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// Define the SoftwareSerial object, D2 as RX, D3 as TX, connect to the serial port of the mmwave sensor
SoftwareSerial COMSerial(D2, D3);

// Creates a global Serial object for printing debugging information
#define ShowSerial Serial

// Initialising the radar configuration
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  delay(500);

  ShowSerial.println("Programme Starting!");

  xiao_config.enableEngineeringModel();
}

void loop() {
  int retryCount = 0;
  const int MAX_RETRIES = 10;  // Maximum number of retries to prevent infinite loops

  //Get radar status
  do {
    radarStatus = xiao_config.getStatus();
    retryCount++;
  } while (radarStatus.targetStatus == Seeed_HSP24::TargetStatus::ErrorFrame && retryCount < MAX_RETRIES);

  //Parses radar status and prints results from debug serial port
  if (radarStatus.targetStatus != Seeed_HSP24::TargetStatus::ErrorFrame) {
    ShowSerial.print("Status: " + String(targetStatusToString(radarStatus.targetStatus)) + "  ----   ");
    ShowSerial.println("Distance: " + String(radarStatus.distance) + "  Mode: " + String(radarStatus.radarMode));
    
    if (radarStatus.radarMode == 1) {
      ShowSerial.print("Move:");
      for (int i = 0; i < 9; i++) {
        ShowSerial.print(" " + String(radarStatus.radarMovePower.moveGate[i]) + ",");
      }
      ShowSerial.println("");
      ShowSerial.print("Static:");
      for (int i = 0; i < 9; i++) {
        ShowSerial.print(" " + String(radarStatus.radarStaticPower.staticGate[i]) + ",");
      }
      ShowSerial.println("");
      ShowSerial.println("Photosensitive: " + String(radarStatus.photosensitive));
    }
  }
  delay(100);
}

// Parsing the acquired radar status
const char* targetStatusToString(Seeed_HSP24::TargetStatus status) {
  switch (status) {
    case Seeed_HSP24::TargetStatus::NoTarget:
      return "NoTarget";
    case Seeed_HSP24::TargetStatus::MovingTarget:
      return "MovingTarget";
    case Seeed_HSP24::TargetStatus::StaticTarget:
      return "StaticTarget";
    case Seeed_HSP24::TargetStatus::BothTargets:
      return "BothTargets";
    default:
      return "Unknown";
  }
}
```

プログラムをコンパイルしてアップロードした後、シリアルモニターを開いてボーレートを9600に設定してください。すべてが正常に動作すれば、以下の結果出力が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/17.png" style={{width:800, height:'auto'}}/></div>

### デモ 3. その他の設定照会と工場出荷時設定の復元

3番目の例では、センサー設定を復元する方法と、パラメータ照会機能の使用に関するその他の例を提供します。

:::caution
特に注意すべき点は、センサーを工場出荷時設定に復元すると、センサーのボーレートも**256000**に復元されることです。他のXIAOプログラムを使用する前に、前の手順に従ってスマートフォンアプリでボーレートを**9600**にリセットする必要があります。
:::

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// Define the SoftwareSerial object, D2 as RX, D3 as TX, connect to the serial port of the mmwave sensor
SoftwareSerial COMSerial(D2, D3);

// Creates a global Serial object for printing debugging information
#define ShowSerial Serial

// Initialising the radar configuration
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  while(!ShowSerial);                   // Turn on the serial monitor and start executing
  delay(500);
  
  ShowSerial.println("Programme Starting!");

  ShowSerial.print("Sensor Software Version: ");
  ShowSerial.println(xiao_config.getVersion());

  radarStatus = xiao_config.getConfig();
  if (radarStatus.detectionDistance != -1) {
    ShowSerial.println("Detection Distance: " + String(radarStatus.detectionDistance) + " m ");
    ShowSerial.println("Moveing Set Distance: " + String(radarStatus.moveSetDistance) + " m ");
    ShowSerial.println("Static Set Distance: " + String(radarStatus.staticSetDistance) + " m ");
    ShowSerial.println("No Target Duration Time: " + String(radarStatus.noTargrtduration) + " seconds ");
  }
  else ShowSerial.println("Failed to get configuration information, please retry.");

  /*** Restore or reset the radar settings, please operate with caution.
   * * After restoring or resetting the factory settings, please re-modify 
   * * the baud rate to 9600 before using XIAO!
   * */
  xiao_config.refactoryRadar();
//   xiao_config.rebootRadar();                // Reboot the Sensor
}

void loop() {}
```

このプログラムは、シリアルモニターをオンにした後にリセットを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/18.png" style={{width:600, height:'auto'}}/></div>


## トラブルシューティング

### Q1: XIAO nRF52840 (Sense)を使用していますが、どの開発ボードバージョンを選択すべきですか？

プログラムに必要なソフトシリアルポートライブラリが含まれているため、XIAO nRF52840開発ボードパッケージの非mbedバージョンを使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/19.png" style={{width:800, height:'auto'}}/></div>

### Q2: フレームドロップやセンサーデータストリームの文字化けが発生するのはなぜですか？

これは、センサーのボーレートを変更していないことが原因である可能性が高いです。この製品の工場出荷時ファームウェアのデフォルトボーレートは256000です。XIAOのソフトシリアルポートはこのような高速データストリームを処理できない場合があり、プログラムが異常に停止してデータフレームを正しく解析できなくなる可能性があります。そのため、ボーレートを下げてからプログラムを再度使用してください。**9600**のボーレートの使用をお勧めします。

### Q3: Demo2を使用する際にデータストリームが1〜2秒遅れるのはなぜですか？

これは正常な現象である可能性があります。エンジニアリングモードでのデータフローは大きく、ソフトシリアルポートがCPUを占有してデータを処理する能力には限界があるため、時々一時停止することがあります。


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
