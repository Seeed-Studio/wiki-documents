---
description: |
  ロボット用途向けにシリアルバスサーボを制御するために設計された、Seeed Studio の多用途ドライバーボード。接続方法（USB または直接 UART）に応じて調整が必要な重要なジャンパー設定を備えています。
title: バスサーボドライバーボード
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/9.webp
slug: /ja/bus_servo_driver_board
keywords:
    - Bus Servo
    - Robotics
    - UART
    - USB connection
    - Jumper settings
last_update:
  author: Citric
  date: 05/27/2025
---

# バスサーボドライバーボード / XIAO バスサーボアダプター入門ガイド

このwikiでは、**バスサーボドライバーボード**と**XIAO バスサーボアダプター**という2つの関連製品について説明します。

- **バスサーボドライバーボード**は、オンボード XIAO ESP32-C3 マイクロコントローラーを**含まず**、3Dプリント筐体も付属しません。汎用バスサーボインターフェースボードとして機能するよう設計されており、お好みの外部コントローラーを介してサーボを接続・制御できます。

- 一方、**XIAO バスサーボアダプター**は、メインコントローラーとして XIAO ESP32-C3 を**含み**、3Dプリントケースが付属します。このバージョンでは、オンボード XIAO を使用してバスサーボを直接制御でき、ロボティクスプロジェクト向けのより統合された即座に使用可能なソリューションとなっています。

両製品のセットアップと使用方法の詳細については、このガイドの残りの部分を参照してください。

<div class="table-center">
  <table align="center">
    <tr>
        <th>バスサーボドライバーボード</th>
        <th>XIAO バスサーボアダプター</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/5.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-Bus-Servo-Adapter-for-XIAO-p-6397.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## はじめに

バスサーボドライバーボード / XIAO バスサーボアダプターは、ロボティクスおよび自動化プロジェクト向けにシリアルバスサーボを駆動するために設計された、Seeed Studio のコンパクトで強力なハードウェアソリューションです。UART 通信をサポートし、Feetech SCS シリーズを含む複数の ST/SC シリーズサーボからの精密な制御とフィードバックを可能にします（[Feetech SCS/STS/TTL シリーズ公式ウェブサイト](https://www.feetechrc.com/en/scs_ttl_Servo.html)を参照）。これにより、ロボットアーム、ヘキサポッド、ヒューマノイドロボット、サーボ角度と負荷フィードバックが必要な車輪型ロボットなどの用途に最適です。

このガイドでは、ハードウェアセットアップ、物理的接続、主要仕様、および**重要なジャンパー設定**に焦点を当て、ユーザーがボードを効果的にプロジェクトに統合できるよう支援します。

:::warning 安全警告

サーボや配線を接続または切断する前に、必ず電源を切断してください。損傷を避けるため、入力電圧がサーボの要件と一致することを確認してください。

:::

## ハードウェア概要

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Bus Servo Driver Board" label="バスサーボドライバーボード">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/2.png" style={{width:800, height:'auto'}}/></div>

バスサーボドライバーボードには、いくつかの主要な接続ポイントがあります：

**入力：**

- **DC IN (5.5 * 2.1mm)：** これはボードと接続されたサーボの電源入力です。ここに5〜12Vの電源を接続してください。*重要なことに、この電源の電圧はサーボの電圧要件と一致する必要があります。*例えば、STシリーズサーボは通常9Vで動作し、SCシリーズサーボは12Vが必要な場合があります。

**出力：**

- **サーボインターフェース：** この専用ポートは、ST/SCシリーズバスサーボを接続する場所です。コネクタが適切に配置されていることを確認してください。

**制御インターフェース：**

- **UART (RX/TX)：** これらのピンは、サーボを制御するためのシリアル通信を提供します。接続方法とジャンパー設定は、ホストデバイスによって異なります。詳細については以下を参照してください。

</TabItem>

<TabItem value="XIAO Bus Servo Adapter" label="XIAO バスサーボアダプター">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/4.png" style={{width:800, height:'auto'}}/></div>

**入力：**

- **DC IN (5.5 * 2.1mm)：** これはボードと接続されたサーボの電源入力です。ここに5〜12Vの電源を接続してください。*重要なことに、この電源の電圧はサーボの電圧要件と一致する必要があります。*例えば、STシリーズサーボは通常9Vで動作し、SCシリーズサーボは12Vが必要な場合があります。

**出力：**

- **サーボインターフェース：** この専用ポートは、ST/SCシリーズバスサーボを接続する場所です。コネクタが適切に配置されていることを確認してください。

</TabItem>

</Tabs>

## 入門ガイド

### ドライバーボードの動作モードの選択 **（バスサーボドライバーボードのみ）**

:::tip
XIAO バスサーボアダプターの場合、付属の XIAO ESP32-C3 を使用してサーボを制御するために回路を変更する必要はありません。この部分は直接スキップできます。
:::

バスサーボドライバーボードは、直接UART接続とUSB-to-UARTアダプター経由のUSB接続という2つの主要な接続方法を提供します。*適切な動作のためには、正しいジャンパー設定が不可欠です。*

#### UART接続（MCU、XIAO、ESP32など用）

この方法は、ESP32、Arduino、Seeed Studio XIAO、またはシングルボードコンピューターなどのマイクロコントローラー（MCU）のUARTピンに直接接続する際に使用されます。

- **配線：**
  - ドライバーボードの`RX`ピンをホストデバイスの`TX`ピン（D7）に接続します。
  - ドライバーボードの`TX`ピンをホストデバイスの`RX`ピン（D6）に接続します。
  - Seeed Studio XIAOなどのデバイスの場合、XIAOを提供されたヘッダーに直接差し込むことができ、正しいピン配置を確保します。これにより、UART接続用の別途デュポンワイヤーが不要になります。

- **ジャンパー設定（重要）：**

  - ボード前面の2ピンピンを短絡するために2.54mmジャンパーキャップを使用する必要はありません。（デフォルトでは短絡されていません）
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png" style={{width:400, height:'auto'}}/></div>

- **ホストの電源供給：** ホストデバイス（例：Raspberry Pi Zero、ESP32、XIAO）には、独自の別電源が必要です。

#### USB接続

この方法は、USBポートを持つコンピューターまたはシングルボードコンピューター（例：PCまたはRaspberry Pi 4B）に接続する際に使用されます。USBケーブルを使用して制御ボードをコンピューターに接続するだけです。

- **配線：**
  - USBケーブルを使用して制御ボードをコンピューターに接続するだけです。

- **ジャンパー設定（重要）：**

  - **ステップ1.** ボード裏面のはんだジャンパーを見つけます。**USB通信の場合、2つのパッドが接続されていることを確認する必要があります（それらの間にはんだブリッジがあります）。**

  - バージョン1の裏面パッド：

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/7.jpg" style={{width:400, height:'auto'}}/></div>

  - バージョン2の裏面パッド：

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-1.png" style={{width:400, height:'auto'}}/></div>

  - **ステップ2.** 2.54mmジャンパーキャップを使用してボード前面の2ピンピンを短絡します。（デフォルトでは短絡されていません）
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png" style={{width:400, height:'auto'}}/></div>

### 必要なコンポーネント（開始前に）

何かを接続する前に、以下があることを確認してください：

- **バスサーボドライバーボード / XIAO バスサーボアダプター**
- **互換性のあるST/SCシリーズバスサーボ**：[Feetech SCS/STS/TTL シリーズ公式ウェブサイト](https://www.feetechrc.com/en/scs_ttl_Servo.html)を参照してください。
- **5〜12V電源：** バッテリーまたは電源アダプター。*電圧はサーボの仕様と一致する必要があります。*
- **ホストデバイス：**
  - **直接UART用：** Raspberry Pi、Arduino、ESP32、またはSeeed Studio XIAOなどのUART対応デバイス。
  - **USB用：** コンピューター（PC、Mac、Linux）またはRaspberry Pi 4Bなどのシングルボードコンピューター、*さらに*USB-to-UARTアダプター。

:::note
XIAO バスサーボアダプターの場合、XIAO ESP32-C3 が内蔵されているため、ホストデバイスを準備する必要はありません。
:::

- **接続ワイヤー/アダプター：** 直接UARTを使用する場合はジャンパーワイヤー（デュポンワイヤー）（XIAOを直接ヘッダー接続で使用する場合を除く）。USB接続方法を使用する場合はUSB-to-UARTアダプター。

:::caution
SCシリーズサーボを使用する場合は、電源がその電圧要件と一致することを確認してください。ボードのDC入力ラベルはSTシリーズサーボ向けに調整されていますが、SCシリーズ電圧もサポートしています。**不正なジャンパー設定では、ドライバーボードとの通信ができません。**
:::

## USB経由でのサーボ制御

このセクションでは、USB接続を使用してバスサーボドライバーボード経由で複数のバスサーボを制御する方法について説明します。

### 原理概要

バスサーボドライバーボードは、USB経由でホストデバイス（PC、Raspberry Pi、またはマイクロコントローラーなど）からシリアル（UART）コマンドを受信することで動作します。これらのコマンドは、接続されたバスサーボに中継されます。適切なシリアルプロトコルコマンドを送信することで、各サーボの位置、速度、その他のパラメーターを個別に制御できます。

ボード自体はサーボ制御信号を自律的に解釈または生成しません。代わりに、ホストとサーボ間の透明なブリッジとして機能します。これは、サーボの通信プロトコルに従って正しいコマンドパケットを送信する責任があることを意味します。

### 参考例

Feetech（ST/SC/STS/TTLシリーズ）バスサーボにコマンドを送信する実用的な例については、以下のPythonサンプルを参照してください：  
[lerobot/common/robot_devices/motors/feetech.py on GitHub](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/motors/feetech.py)

この例では、Feetechサーボを制御するためのシリアルパケットの構築と送信方法を示しています。必要に応じて、コードを独自のホストプラットフォームやプログラミング言語に適応させることができます。

> **注意：**  
>
> - 具体的なコマンド形式とプロトコルは、サーボモデルによって異なる場合があります。  
> - 正しいシリアルプロトコルとコマンド構造については、サーボの公式ドキュメントを参照してください。  
> - サーボの要件に合致するドライバープログラムを作成または適応する必要があります。

Feetech SCS/STS/TTLシリーズプロトコルの詳細については、[Feetech公式ドキュメント](https://www.feetechrc.com/en/scs_ttl_Servo.html)を参照してください。

## XIAOを介したサーボ制御

次に、XIAOを通じてサーボの動作を制御する信号の送信方法と、ライブラリの使用方法について説明します。

### Arduinoライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/workloads/scservo" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 関数

スケッチの開発を始める前に、ライブラリで利用可能な関数を見てみましょう。

- `SMS_STS(uint8_t id)` —— 指定されたIDでサーボオブジェクトを作成します。  
  パラメータ：`uint8_t id`（サーボID）  
  出力：なし

- `void WritePos(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed)` —— サーボの目標位置、時間、速度を設定します。  
  パラメータ：`uint8_t id`、`int16_t Position`、`uint16_t Time`、`uint16_t Speed`  
  出力：なし

- `void RegWritePos(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed)` —— サーボの目標位置、時間、速度を設定しますが、Actionコマンドで後で実行します。  
  パラメータ：`uint8_t id`、`int16_t Position`、`uint16_t Time`、`uint16_t Speed`  
  出力：なし

- `void RegWriteAction()` —— 登録されたすべてのRegWritePosコマンドを実行します。  
  パラメータ：なし  
  出力：なし

- `void WriteSpe(uint8_t id, int16_t Speed)` —— サーボの回転速度を設定します。  
  パラメータ：`uint8_t id`、`int16_t Speed`  
  出力：なし

- `void WritePosEx(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed, uint8_t ACC)` —— 位置、時間、速度、加速度を設定します。  
  パラメータ：`uint8_t id`、`int16_t Position`、`uint16_t Time`、`uint16_t Speed`、`uint8_t ACC`  
  出力：なし

- `void RegWritePosEx(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed, uint8_t ACC)` —— 位置、時間、速度、加速度を登録し、後で実行します。  
  パラメータ：`uint8_t id`、`int16_t Position`、`uint16_t Time`、`uint16_t Speed`、`uint8_t ACC`  
  出力：なし

- `void RegWriteActionEx()` —— 登録されたすべてのRegWritePosExコマンドを実行します。  
  パラメータ：なし  
  出力：なし

- `int16_t ReadPos(uint8_t id)` —— サーボの現在位置を読み取ります。  
  パラメータ：`uint8_t id`  
  出力：`int16_t`（位置）

- `int16_t ReadSpeed(uint8_t id)` —— サーボの現在速度を読み取ります。  
  パラメータ：`uint8_t id`  
  出力：`int16_t`（速度）

- `int16_t ReadLoad(uint8_t id)` —— サーボの現在負荷を読み取ります。  
  パラメータ：`uint8_t id`  
  出力：`int16_t`（負荷）

- `int16_t ReadVoltage(uint8_t id)` —— サーボの現在電圧を読み取ります。  
  パラメータ：`uint8_t id`  
  出力：`int16_t`（電圧）

- `int16_t ReadTemper(uint8_t id)` —— サーボの現在温度を読み取ります。  
  パラメータ：`uint8_t id`  
  出力：`int16_t`（温度）

- `int16_t ReadMove(uint8_t id)` —— サーボが動作中かどうかを確認します。  
  パラメータ：`uint8_t id`  
  出力：`int16_t`（1：動作中、0：停止）

- `int16_t ReadCurrent(uint8_t id)` —— サーボの電流を読み取ります。  
  パラメータ：`uint8_t id`  
  出力：`int16_t`（電流）

- `void SetID(uint8_t id, uint8_t newid)` —— サーボに新しいIDを設定します。  
  パラメータ：`uint8_t id`、`uint8_t newid`  
  出力：なし

- `void Load(uint8_t id)` —— サーボトルクを有効にします。  
  パラメータ：`uint8_t id`  
  出力：なし

- `void Unload(uint8_t id)` —— サーボトルクを無効にします。  
  パラメータ：`uint8_t id`  
  出力：なし

- `int16_t ReadTorque(uint8_t id)` —— サーボのトルク状態を読み取ります。  
  パラメータ：`uint8_t id`  
  出力：`int16_t`（1：有効、0：無効）

- `void LEDAlarm(uint8_t id, uint8_t enable)` —— LEDアラーム状態を設定します。  
  パラメータ：`uint8_t id`、`uint8_t enable`  
  出力：なし

- `void Reset(uint8_t id)` —— サーボを工場出荷時設定にリセットします。  
  パラメータ：`uint8_t id`  
  出力：なし

- `void LockEprom(uint8_t id)` —— サーボのEEPROMをロックします。  
  パラメータ：`uint8_t id`  
  出力：なし

- `void UnlockEprom(uint8_t id)` —— サーボのEEPROMをアンロックします。  
  パラメータ：`uint8_t id`  
  出力：なし

### XIAO例

ライブラリがインストールされ、基本的な関数を理解したので、産品名称のいくつかの例を実行して、その動作を確認してみましょう。

**ステップ1.** Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

**ステップ2.** 開発ボードモデルを選択し、Arduino IDEに追加します。

- 後のルーチンで**Seeed Studio XIAO ESP32-C3**を使用するには、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)**を参照して追加を完了してください。

**ステップ3.** 図に示すように配線を完了します。複数のサーボを接続する必要がある場合は、サーボに付属のワイヤーを使用して接続を完了できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/8.jpg" style={{width:600, height:'auto'}}/></div>

#### 複数サーボの制御

```cpp
#include <SCServo.h>

// Define the correct serial port for your target board
#if defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3)
#define COMSerial Serial0
#else
#define COMSerial Serial1
#endif

// Define RX/TX pins for the servo bus (for reference)
// Note: On ESP32, pins are usually specified in COMSerial.begin().
// For example: COMSerial.begin(1000000, SERIAL_8N1, S_RXD, S_TXD);
// If your board uses the default pins for Serial1, no extra specification is needed.
#define S_RXD D7
#define S_TXD D6

#define SERVO_NUM 2 // Number of servos

SMS_STS st; // Servo control object

// --- Servo Configuration ---
byte ID[SERVO_NUM] = {1, 2};                // IDs of the servos
u16 Speed[SERVO_NUM] = {1500, 1500};         // Set a medium speed for the servos
byte ACC[SERVO_NUM] = {50, 50};             // Set a medium acceleration for the servos
s16 Pos[SERVO_NUM] = {2048, 2048};           // Servo position array, initialized to the midpoint (2048)

void setup()
{
  // Start the main serial port for debugging and receiving commands
  Serial.begin(115200);
  // Wait a moment for the Serial Monitor to connect
  delay(2000); 
  Serial.println("--- Servo Control Program Start ---");

  // Start the serial port for controlling the servos
  COMSerial.begin(1000000, SERIAL_8N1);
  st.pSerial = &COMSerial; // Associate the control object with the serial port

  Serial.println("Checking servo connection status...");
  for (int i = 0; i < SERVO_NUM; i++) {
    if (st.Ping(ID[i]) != -1) {
      Serial.print("Servo with ID ");
      Serial.print(ID[i]);
      Serial.println(" is connected.");
    } else {
      Serial.print("Error: Servo with ID ");
      Serial.print(ID[i]);
      Serial.println(" is not responding!");
    }
  }

  // --- Power-on Self-Test ---
  // This section makes the servos move automatically on power-up to confirm they are working correctly.
  Serial.println("\nExecuting power-on self-test movement...");

  // 1. Move to position 1024
  Serial.println("Moving to position 1024...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 1024;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(2000); // Wait for the movement to complete

  // 2. Move to position 3072
  Serial.println("Moving to position 3072...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 3072;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(2000); // Wait for the movement to complete

  // 3. Return to center position (2048) to prepare for user commands
  Serial.println("Returning to center position (2048)...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 2048;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(1500);

  Serial.println("\n--- Initialization Complete ---");
  Serial.println("Enter 'j' to decrease the angle, or 'k' to increase it.");
  Serial.println("-----------------------------------");
}

void loop()
{
  // Check if the user has sent a command via the Serial Monitor
  if (Serial.available()) {
    String input = Serial.readString();
    input.trim(); // Remove extra spaces or newlines

    bool shouldMove = false; // Flag to indicate if a valid command was received

    if (input.startsWith("j")) {
      Serial.println("Received command: 'j'. Decreasing angle.");
      for (int i = 0; i < SERVO_NUM; i++) {
        Pos[i] -= 512; // Move a small step for easy observation
        if (Pos[i] < 0) {
          Pos[i] = 0; // Prevent going below the minimum range
        }
      }
      shouldMove = true;
    } else if (input.startsWith("k")) {
      Serial.println("Received command: 'k'. Increasing angle.");
      for (int i = 0; i < SERVO_NUM; i++) {
        Pos[i] += 512; // Move a small step
        if (Pos[i] > 4095) {
          Pos[i] = 4095; // Prevent going above the maximum range
        }
      }
      shouldMove = true;
    } else {
      Serial.print("Unknown command: '");
      Serial.print(input);
      Serial.println("'. Please enter 'j' or 'k'.");
    }

    // If a valid command was received, send the new positions to the servos
    if (shouldMove) {
      Serial.print("Moving servos to new positions: [");
      for(int i = 0; i < SERVO_NUM; i++){
        Serial.print(Pos[i]);
        if(i < SERVO_NUM - 1) Serial.print(", ");
      }
      Serial.println("]");

      st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
    }
  }
}
```

この例では、XIAOとSCServoライブラリを使用して複数のFeetech SCSシリーズバスサーボを制御する方法を示しています。コードは2つのサーボを初期化し、キャリブレーションを行い、シリアルコマンドを通じてユーザーがサーボの位置をインタラクティブに調整できるようにします。シリアルモニターから「j」または「k」を送信すると、コードは接続されたすべてのサーボの角度をそれぞれ減少または増加させます。各サーボの現在位置が追跡・更新され、新しい位置は`SyncWritePosEx`関数を使用してサーボに送信されます。

独自のプロジェクト用にカスタマイズする方法：

- **サーボ数**: `Servo_Num`の値を変更し、ID、Speed、ACC、Pos配列をサーボの数とIDに合わせて更新します。
サーボID: ID配列を接続されたサーボのIDに合わせて変更します。

- **速度と加速度**: Speed配列とACC配列を調整して、各サーボに異なる速度と加速度を設定します。

- **シリアルピン**: UARTに異なるピンを使用する場合は、S_RXDとS_TXDの定義を更新します。

- **動作ロジック**: `loop()`関数内のロジックを変更して、異なるシリアルコマンドへの応答、センサーフィードバックの追加、他のハードウェアとの統合など、より複雑またはプロジェクト固有の動作を実装できます。

- **初期位置**: `Pos`配列の初期値を設定して、サーボの開始位置を定義します。

## FAQ

:::tip

プロジェクトを開始する前に、これらのFAQを読むことをお勧めします。よくある質問と潜在的な問題について説明しています。

:::

<details>
<summary>電源電圧がサーボと一致しない場合はどうなりますか？</summary>

ボードとサーボが誤動作したり、損傷を受ける可能性があります。常に入力電圧をサーボの要件に合わせてください。
</details>

<details>
<summary>複数のサーボを同時に接続できますか？</summary>

はい、複数のサーボがサポートされていますが、電源が合計電流消費に対応できることを確認してください。

</details>

<br/>

## リソース

- **[PDF]** [バスサーボドライバーボード回路図](https://files.seeedstudio.com/wiki/bus_servo_driver_board/202004237_Servo_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_250225.pdf)

### 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>
