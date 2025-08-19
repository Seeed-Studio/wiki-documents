---
description: XIAOでmmWaveセンサーを開発する方法の紹介。
title: XIAOとArduinoでの24GHz mmWave開発
keywords:
- mmwave
- レーダー
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/mmwave_for_xiao_arduino
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAOとArduinoでの24GHz mmWaveセンサー開発

このセクションでは、XIAO向けのmmWaveライブラリの使用方法と二次開発について説明します。

:::caution
このWikiの内容はXIAO向けの24GHz mmWaveにのみ適用され、他のミリ波センサーには使用できません。
:::

## はじめに

### ハードウェア準備

この記事のチュートリアル内容を始める前に、現在販売されているXIAOのいずれかを購入することをお勧めします。これによりミリ波センサーを使用することができます。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

この記事のチュートリアルでは、XIAO ESP32C3とmmWaveセンサーを使用例として取り上げ、センサーのArduinoライブラリと関連機能の使用方法を案内します。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

センサーはXIAOとの互換性を考慮して設計されているため、一般的にこのセンサーを使用する場合はXIAOを準備し、センサー用のメスヘッダーピンを取り付ける必要があります。XIAOに接続する際は、センサーの取り付け方向に特に注意してください。逆向きに差し込むと、センサーやXIAOが焼損する可能性があります。

:::caution
正しい方向は、センサーのアンテナが外側を向くようにすることです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

接続方向が正しいことを確認した後、USB-Cタイプのケーブルをコンピュータまたは電源に接続すると、センサーが動作を開始します。

### ソフトウェア準備

センサーが使用するデフォルトのボーレートは256000であり、XIAOで設計されたソフトシリアルポートのボーレートがこのような高速データ伝送を満たせない可能性があるため、センサーを使用する前にソフトウェアでボーレートを調整する必要があります。その後、使用している携帯電話のシステムに応じて対応するアプリをダウンロードしてください。

- [Google PlayからHLKRadarToolをダウンロード](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool).

- [App StoreからHLKRadarToolをダウンロード](https://apps.apple.com/us/app/hlkradartool/id1638651152).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

## Arduinoライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave_for_XIAO" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 機能

スケッチを開発する前に、ライブラリの利用可能な機能を確認しましょう。

- `Seeed_HSP24(Stream &serial)` —— センサーが接続されているシリアルポートを渡し、センサーの初期化を開始します。
    - **入力パラメータ**:

        - **serial**: センサーが接続されているシリアルポート。

- `Seeed_HSP24(Stream &serial, Stream &debugSerial)` —— センサーが接続されているシリアルポートを渡し、デバッグ用シリアルポートを追加してセンサーの初期化を開始します。
    - **入力パラメータ**:

        - **serial**: センサーが接続されているシリアルポート。
        - **debugSerial**: デバッグ用シリアルを有効にし、指定されたシリアルポートに出力します。

- `String getVersion()` —— センサーのソフトウェアバージョン番号を取得します。
    - **戻り値**: センサーのソフトウェアバージョン番号。

- `RadarStatus getStatus()` —— センサーの状態情報を取得します。センサーが報告するすべての情報はこの関数で解析されます。
    - **戻り値**: 
        - **radarStatus.radarMode**: エンジニアリングモードまたはベースモード。1はエンジニアリングモード、2はベースモードを表します。
        - **radarStatus.targetStatus**: 監視対象の現在の状況を示します。4つの状況があります（NoTarget）。1つ目は人が検出されていない状態（MovingTarget）、2つ目は人が検出されて静止している状態（StaticTarget）、3つ目は同時に検出された状態（BothTargets）、4つ目は異常（ErrorFrame）です。BothTargetは人の動きを指します。センサーが現在の環境を監視し、動作エネルギーと静止エネルギーの両方が設定された閾値を超えた場合、「BothTarget」と名付けられます。動作エネルギーのみが閾値を超えた場合は「MovingTarget」と出力されます。
        - **radarStatus.distance**: センサーが検出した対象物との距離を指します。
        - **radarStatus.radarMovePower.moveGate** (エンジニアリングモードで有効): この配列は異なる距離ゲートの動作エネルギー値を格納します。
        - **radarStatus.radarStaticPower.staticGate** (エンジニアリングモードで有効): この配列は異なる距離ゲートの静止エネルギー値を格納します。
        - **radarStatus.photosensitive** (エンジニアリングモードで有効): センサーの感光度値を指します。範囲は0-255。

- `DataResult sendCommand(const byte* sendData, int sendDataLength)` —— この関数を通じてセンサーにコマンドを送信します。
    - **入力パラメータ**:
        - **sendData**: 送信されるコマンドフレームの配列。
        - **sendDataLength**: 送信されるコマンドフレームの長さ。
    
    - **戻り値**:
        - **resultBuffer**: 動的に割り当てられた配列を指します。
        - **length**: 配列の長さ。

- `AskStatus setDetectionDistance(int distance,int times)` —— この関数を使用して最大距離ゲートと無人時間を設定します。
    - **入力パラメータ**:
        - **distance**: 最大距離ゲートを設定します。
        - **times**: 無人時間を設定します。

    - **戻り値**:
        - 成功 0x00 または エラー 0x01。

- `AskStatus setGatePower(int gate,int movePower, int staticPower)` —— 異なる距離ゲートおよび感度をこの関数で設定します。
    - **入力パラメータ**:
        - **gate**: ドアまでの距離、範囲は0-8 m。
        - **movePower**: 動作閾値をトリガーするエネルギー値。
        - **staticPower**: 静止閾値をトリガーするエネルギー値。

    - **戻り値**:
        - 成功 0x00 または エラー 0x01。

- `RadarStatus getConfig()` —— 設定されたセンサーのパラメータ値を読み取ります。
    - **戻り値**:
        - **radarStatus.detectionDistance**: レーダーの動作検出距離ゲート数。
        - **radarStatus.moveSetDistance**: レーダーの静止検出距離ゲート数。
        - **radarStatus.staticSetDistance**: レーダーの最長検出範囲ゲート。
        - **radarStatus.noTargrtduration**: 無人時間。

- `AskStatus setResolution(int resolution)` —— ドアまでの距離解像度を設定します。1は0.25M、0は0.75Mです。デフォルトは0.75M。
    - **入力パラメータ**:
        - **resolution**: 1は0.25M、0は0.75M。デフォルトは0.75M。

    - **戻り値**:
        - 成功 0x00 または エラー 0x01。

- `RadarStatus getResolution()` —— ドアまでの距離の解像度を取得します。1は0.25M、0は0.75Mを意味します。デフォルトは0.75Mです。
    - **戻り値**:
        - **radarStatus.resolution**: 1は0.25M、0は0.75Mを意味します。デフォルトは0.75Mです。

- `AskStatus rebootRadar()` —— レーダーを再起動するコマンド。
    - **戻り値**:
        - 成功 0x00 または エラー 0x01。

- `AskStatus refactoryRadar()` —— レーダーを工場出荷時設定に戻します。
    - **戻り値**:
        - 成功 0x00 または エラー 0x01。

- `AskStatus enableEngineeringModel()` —— センサーのエンジニアリングモード出力を有効にします。
    - **戻り値**:
        - 成功 0x00 または エラー 0x01。

- `AskStatus disableEngineeringModel()` —— エンジニアリングモード出力を終了します。
    - **戻り値**:
        - 成功 0x00 または エラー 0x01。


### デフォルト変数

```cpp
#define BUFFER_SIZE 256     // シリアルバッファサイズ

class Seeed_HSP24
{
    public:
        static const int FRAME_START_SIZE = 4;
        static const int FRAME_END_SIZE = 4;

        static const byte frameStart[FRAME_START_SIZE];
        static const byte frameEnd[FRAME_END_SIZE];
        static const byte frameAskStart[FRAME_START_SIZE];
        static const byte frameAskEnd[FRAME_END_SIZE];

        struct RadarMovePower // 移動距離ゲートごとのエネルギー値
        {
            int moveGate[9] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        };

        struct RadarStaticPower // 静止距離ゲートごとのエネルギー値
        {
            int staticGate[9] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        };

        // TargetStatus列挙型クラスを定義
        enum class AskStatus : byte
        {
            Success = 0x00, // 成功
            Error = 0x01,   // 失敗
        };

        // TargetStatus列挙型クラスを定義
        enum class TargetStatus : byte
        {
            NoTarget = 0x00,     // ターゲットなし
            MovingTarget = 0x01, // 移動ターゲット
            StaticTarget = 0x02, // 静止ターゲット
            BothTargets = 0x03,  // 移動と静止の両方の閾値が設定値を超えていることを意味する
            ErrorFrame = 0x04    // ステータス取得失敗
        };

        // RadarStatus構造体を定義
        struct RadarStatus
        {
            TargetStatus targetStatus = TargetStatus::ErrorFrame; // レーダーのターゲットステータス
            int distance = -1;                                    // レーダーのターゲット距離（mm単位）
            int moveSetDistance = -1;                             // レーダーの移動検出距離ゲート数（通常設定不要）
            int staticSetDistance = -1;                           // レーダーの静止検出距離ゲート数（通常設定不要）
            int detectionDistance = -1;                           // レーダーの最長検出範囲ゲート
            int resolution = -1;                                  // レーダーの距離ゲート解像度
            int noTargrtduration = -1;                            // 無人状態の継続時間
            int radarMode = -1;                                   // モジュールが基本報告モード(2)かエンジニアリング報告モード(1)かを区別するための値
            RadarMovePower radarMovePower;                        // 移動エネルギー値
            RadarStaticPower radarStaticPower;                    // 静止エネルギー値
            int photosensitive = -1;                              // 光感度 0-255
        };

        // 発行されたコマンドの結果を返すために使用
        struct DataResult
        {
            byte *resultBuffer; // 動的に割り当てられた配列を指すポインタ
            int length;         // 配列の長さ
        };
};
```

### インストール

ZIP形式のライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIP形式のライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## XIAO の例

ライブラリをインストールし、基本的な機能を理解したところで、24GHz mmWave センサーの動作を確認するための例をいくつか実行してみましょう。

**ステップ 1.** Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong>
    </a>
</div>

**ステップ 2.** 開発ボードのモデルを選択し、Arduino IDE に追加します。

- 後のルーチンで **Seeed Studio XIAO SAMD21** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)** を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO RP2040** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)** を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO nRF52840** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO ESP32C3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照して追加を完了してください。

- 後のルーチンで **Seeed Studio XIAO ESP32S3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して追加を完了してください。

:::tip
このチュートリアルでは XIAO ESP32C3 を例として使用します。
:::

**ステップ 3.** センサーを XIAO に接続し、USB-C タイプのケーブルを使用して XIAO を PC に接続します。

**ステップ 4.** ダウンロードした **HLKRadarTool** アプリを開き、センサーに適切なボーレートを設定します。

アプリを開くと、アプリが近くのレーダーデバイスを検索します。デバイスのブロードキャスト名は **HLK-LD2410_xxxx**（xxxx は MAC アドレスの最後の 4 桁）です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

ソフトウェアの右上にある「More」オプションで設定メニューにアクセスし、センサーのカスタムパラメータや機能を設定できます。センサーのボーレートを **9600** に設定し、保存してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/15.png" style={{width:400, height:'auto'}}/></div>

その後、センサーの再起動を待ちます。

**ステップ 5.** 必要なライブラリを追加します。

Arduino 環境にセンサー用のライブラリを追加する必要があるほか、**ESP32 シリーズ XIAO** を使用する場合は、提供されている例を使用するためにソフトシリアルポート用のライブラリを別途インストールする必要があります。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### デモ 1. 基本モードの出力

最初のプログラム例では、センサーが報告する一般的な情報を解析します。これにより、この製品の主な機能情報出力が表されます。例えば、人の存在、動き、距離などのデータです。

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 は非-mbed対応バージョンを使用してください。"
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// SoftwareSerial オブジェクトを定義、D2 を RX、D3 を TX として mmWave センサーのシリアルポートに接続
SoftwareSerial COMSerial(D2, D3);

// デバッグ情報を出力するためのグローバル Serial オブジェクトを作成
#define ShowSerial Serial

// レーダー設定の初期化
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  delay(500);

  ShowSerial.println("プログラム開始！");

  xiao_config.disableEngineeringModel();
}

void loop() {
  int retryCount = 0;
  const int MAX_RETRIES = 10;  // 無限ループを防ぐための最大リトライ回数

  // レーダーのステータスを取得
  do {
    radarStatus = xiao_config.getStatus();
    retryCount++;
  } while (radarStatus.targetStatus == Seeed_HSP24::TargetStatus::ErrorFrame && retryCount < MAX_RETRIES);

  // レーダーのステータスを解析し、デバッグシリアルポートに結果を出力
  if (radarStatus.targetStatus != Seeed_HSP24::TargetStatus::ErrorFrame) {
    ShowSerial.print("ステータス: " + String(targetStatusToString(radarStatus.targetStatus)) + " ---- ");
    ShowSerial.println("距離: " + String(radarStatus.distance) + "  モード: " + String(radarStatus.radarMode));
  }
  delay(200);
}

// 取得したレーダーのステータスを解析
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

プログラムをコンパイルしてアップロードした後、シリアルモニターを開き、ボーレートを9600に設定してください。すべてが正常に動作していれば、以下の結果が出力されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/16.png" style={{width:700, height:'auto'}}/></div>

### デモ 2. エンジニアリングモードの出力

2つ目のサンプルプログラムでは、センサーのエンジニアリングデータアップロードを有効にし、このエンジニアリング情報を解析します。基本モードと比較して、エンジニアリング情報には異なる距離ゲートに対する動的エネルギー値と静的エネルギー値が含まれています。これらの値を表示することで、現在の環境における動的および静的エネルギーの変化を視覚化でき、センサーのトリガーを調整して、実際の状況に応じて人が存在しているか、静止しているか、動いているかを判断しやすくなります。

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840は、mbed対応バージョンを使用しないでください。"
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// SoftwareSerialオブジェクトを定義、D2をRX、D3をTXとしてmmwaveセンサーのシリアルポートに接続
SoftwareSerial COMSerial(D2, D3);

// デバッグ情報を出力するためのグローバルSerialオブジェクトを作成
#define ShowSerial Serial

// レーダー設定の初期化
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  delay(500);

  ShowSerial.println("プログラム開始！");

  xiao_config.enableEngineeringModel();
}

void loop() {
  int retryCount = 0;
  const int MAX_RETRIES = 10;  // 無限ループを防ぐための最大リトライ回数

  // レーダーステータスを取得
  do {
    radarStatus = xiao_config.getStatus();
    retryCount++;
  } while (radarStatus.targetStatus == Seeed_HSP24::TargetStatus::ErrorFrame && retryCount < MAX_RETRIES);

  // レーダーステータスを解析し、デバッグシリアルポートに結果を出力
  if (radarStatus.targetStatus != Seeed_HSP24::TargetStatus::ErrorFrame) {
    ShowSerial.print("ステータス: " + String(targetStatusToString(radarStatus.targetStatus)) + "  ----   ");
    ShowSerial.println("距離: " + String(radarStatus.distance) + "  モード: " + String(radarStatus.radarMode));
    
    if (radarStatus.radarMode == 1) {
      ShowSerial.print("動的:");
      for (int i = 0; i < 9; i++) {
        ShowSerial.print(" " + String(radarStatus.radarMovePower.moveGate[i]) + ",");
      }
      ShowSerial.println("");
      ShowSerial.print("静的:");
      for (int i = 0; i < 9; i++) {
        ShowSerial.print(" " + String(radarStatus.radarStaticPower.staticGate[i]) + ",");
      }
      ShowSerial.println("");
      ShowSerial.println("光感度: " + String(radarStatus.photosensitive));
    }
  }
  delay(100);
}

// 取得したレーダーステータスを解析
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

プログラムをコンパイルしてアップロードした後、シリアルモニターを開き、ボーレートを9600に設定してください。すべてが正常に動作していれば、以下の結果が出力されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/17.png" style={{width:800, height:'auto'}}/></div>

### デモ 3. その他の設定の問い合わせと工場出荷時設定への復元

3つ目の例では、センサー設定を復元する方法と、パラメータ問い合わせ機能の使用例をいくつか提供します。

:::caution
センサーを工場出荷時設定に復元する際には、センサーのボーレートが**256000**に戻ることに特に注意してください。モバイルアプリでボーレートを**9600**に再設定する必要があります。その後、他のXIAOプログラムを使用できます。
:::

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840は、mbed対応バージョンを使用しないでください。"
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// SoftwareSerialオブジェクトを定義、D2をRX、D3をTXとしてmmwaveセンサーのシリアルポートに接続
SoftwareSerial COMSerial(D2, D3);

// デバッグ情報を出力するためのグローバルSerialオブジェクトを作成
#define ShowSerial Serial

// レーダー設定の初期化
// Seeed_HSP24 xiao_config(COMSerial, ShowSerial);
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  while(!ShowSerial);                   // シリアルモニターをオンにして実行開始
  delay(500);
  
  ShowSerial.println("プログラム開始！");

  ShowSerial.print("センサーソフトウェアバージョン: ");
  ShowSerial.println(xiao_config.getVersion());

  radarStatus = xiao_config.getConfig();
  if (radarStatus.detectionDistance != -1) {
    ShowSerial.println("検出距離: " + String(radarStatus.detectionDistance) + " m ");
    ShowSerial.println("動的設定距離: " + String(radarStatus.moveSetDistance) + " m ");
    ShowSerial.println("静的設定距離: " + String(radarStatus.staticSetDistance) + " m ");
    ShowSerial.println("ターゲットなしの持続時間: " + String(radarStatus.noTargrtduration) + " 秒 ");
  }
  else ShowSerial.println("設定情報の取得に失敗しました。再試行してください。");

  /*** レーダー設定の復元またはリセットを慎重に操作してください。
   * * 工場出荷時設定を復元またはリセットした後、ボーレートを9600に再設定してから
   * * XIAOを使用してください！
   * */
  xiao_config.refactoryRadar();
//   xiao_config.rebootRadar();                // センサーを再起動
}

void loop() {}
```

このプログラムは、シリアルモニターをオンにした後にリセットを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/18.png" style={{width:600, height:'auto'}}/></div>


## トラブルシューティング

### Q1: XIAO nRF52840 (Sense) を使用していますが、どの開発ボードバージョンを選べばよいですか？

XIAO nRF52840 開発ボードパッケージの非-mbedバージョンを使用してください。このバージョンにはプログラムに必要なソフトシリアルポートライブラリが含まれています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/19.png" style={{width:800, height:'auto'}}/></div>

### Q2: フレームがドロップしたり、センサーデータストリームが乱れるのはなぜですか？

これは、センサーのボーレートを変更していないことが原因である可能性が高いです。この製品の工場出荷時のファームウェアのデフォルトボーレートは256000です。XIAOのソフトシリアルポートは、このような高速データストリームを処理できない場合があり、その結果、プログラムが異常に停止してデータフレームを正しく解析できなくなる可能性があります。そのため、ボーレートを下げてから再度プログラムを使用してください。推奨されるボーレートは**9600**です。

### Q3: Demo2を使用しているときにデータストリームが1〜2秒遅れるのはなぜですか？

これは通常の現象である可能性があります。エンジニアリングモードではデータフローが多く、ソフトシリアルポートがCPUを占有してデータを処理する能力が限られているため、時々一時的に停止することがあります。


## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>