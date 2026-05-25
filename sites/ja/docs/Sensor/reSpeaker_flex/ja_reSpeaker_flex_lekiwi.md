---
description: Raspberry Pi、XIAO ESP32、ReSpeaker Lite、および音声埋め込みを使用した音声制御 Kiwi ドライブロボット。ハンズフリーでインテリジェントなロボット制御を実現します。
title: reSpeaker Flex で LeKiwi ロボットに音声インタラクションを追加
keywords:
  - reSpeaker flex
  - LeKiwi
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/banner_javis.png
slug: /respeaker_flex_lekiwi
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 04/28/2026
  author: Kasun Thushara
createdAt: '2026-04-28'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/respeaker_flex_introduction/
---


## 概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/banner_javis.png" alt="pir" width={800} height="auto" /></p>

3 輪 Kiwi ドライブロボットを音声で操作しましょう！このプロジェクトでは、Seeed Studio XIAO ESP32（モータコントローラ）と Raspberry Pi（音声処理ブレイン）を組み合わせ、reSpeaker Flex による高品質な音声取得と Voice Embeddings による、よりスマートでパーソナライズされた音声インタラクションを実現します。自然言語コマンドを使って、ロボットの走行、操舵、制御を完全ハンズフリーで行うことができ、精度と応答性も向上します。

## 必要なハードウェア

<table align="center">
  <tr>
    <th>LeKiwi キット</th>
    <th>XIAO ESP32S3</th>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th>Raspberry Pi 5</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114090065-lekiwi-kit_1.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010634-seeed-studio-xiao-esp32s3-_pre-soldered_-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Lekiwi-Kit-p-6501.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## サービス

- [**Groq**](https://groq.com/) アカウント：無料プランで十分に始められます

## 動作の仕組み

```
You speak → Wake word detected → Audio recorded → Whisper STT → LLaMA LLM → Orpheus TTS speaks back → ESP32 moves the robot
```

1. ウェイクワードを話します（デフォルト：**"Hey Jarvis"**）
2. Raspberry Pi があなたのコマンドを録音します
3. **Groq Whisper** が音声をテキストに書き起こします
4. **LLaMA 3** がロボットが取るべき動作を判断します
5. **Groq Orpheus TTS** が応答を音声で読み上げます
6. シリアルコマンドが ESP32 に送信され、モータを駆動します

---

## XIAO ESP32（モータコントローラ）の準備

ESP32 は Arduino スケッチを実行し、**Kiwi ドライブの運動学**を用いて 3 つの車輪を物理的に駆動します。Raspberry Pi から送られてくる 1 文字のシリアルコマンド（`w`、`s`、`a`、`d` など）を受信し、それを協調したモータ速度に変換します。

### ステップ 1 — モータ ID を設定する

:::info
このスケッチはサーボ ID を **1, 2, 3** として想定しています。ロボットを組み立てる前に、各サーボを個別に接続し、Feetech 設定ツールを使って正しい ID を割り当ててください。

 [Feetech セットアップガイド (PDF)](https://www.feetechrc.com/Data/feetechrc/upload/file/20201127/start%20%20tutorial201015.pdf)

 :::

### ステップ 2 — LeKiwi を組み立てる

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/hardware_lekiwi_1.png" alt="pir" width={800} height="auto" /></p>

公式の Seeed Studio 動画チュートリアルに従って、シャーシの組み立て、ホイールの取り付け、サーボの配線を行ってください：

 [LeKiwi 組み立てチュートリアル](https://wiki.seeedstudio.com/ja/lerobot_lekiwi/#組み立て)

:::info
完了する必要があるのは**物理的な組み立て**だけです。このプロジェクトでは別の構成を使用するため、LeRobot GitHub リポジトリのクローンに関する手順はすべてスキップしてください。
:::

### ステップ 3 — Arduino スケッチを書き込む

スケッチ（`lekiwi_motor_control.ino`）は次のことを行います：

- 3 つのサーボすべてを **位置モード** で初期化し、センタリングしてから **ホイール（連続回転）モード** に切り替えます
- USB シリアルポートで 1 文字のコマンドを待ち受けます
- **Kiwi ドライブの運動学**を使用して、各車輪の正しい速度を計算します
- **ナッジモード**（短いバースト後に自動停止）のみをサポートします
**シリアルコマンドリファレンス：**

| キー | 動作 |
|-----|--------|
| `w` | 前方にナッジ |
| `s` | 後方にナッジ |
| `a` | 左旋回ナッジ |
| `d` | 右旋回ナッジ |
| `q` | 左へ平行移動ナッジ |
| `e` | 右へ平行移動ナッジ |
| `x` / Space | 緊急停止 |
| `+` / `-` | ナッジ時間の増加 / 減少 |
| `*` / `/` | ナッジ速度の増加 / 減少 |

**SCServo** ライブラリをインストールした Arduino IDE 経由でスケッチを書き込みます。シリアルモニタを **115200 ボー**に設定し、3 つのサーボすべてが `OK` を返すことを確認してください。

<details>
<summary>Arduino コード</summary>

```c++
#include <SCServo.h>
#include <math.h>

// Serial port selection
#if defined(CONFIG_IDF_TARGET_ESP32C3) || \
    defined(CONFIG_IDF_TARGET_ESP32C6) || \
    defined(CONFIG_IDF_TARGET_ESP32S3)
  #define COMSerial Serial0
#else
  #define COMSerial Serial1
#endif

#define S_RXD D7
#define S_TXD D6

SMS_STS st;
#define SERVO_NUM 3
byte ID[SERVO_NUM] = {1, 2, 3};

// Kiwi drive wheel angles (90°, 210°, 330°)
const float WHEEL_ANGLE_DEG[SERVO_NUM] = {90.0f, 210.0f, 330.0f};

// Base speed (0-3000 for STS3215 in wheel mode)
int BASE_SPEED = 1000;

// Nudge parameters
int NUDGE_DURATION = 1500;  // milliseconds to move
int NUDGE_SPEED = 800;     // speed during nudge

#define REG_OPERATING_MODE 33

void enableWheelMode(byte servoID) {
  // Unlock EEPROM
  st.unLockEprom(servoID);
  delay(10);

  // Set wheel mode (value 1 for continuous rotation mode)
  st.writeByte(servoID, REG_OPERATING_MODE, 1);
  delay(10);

  // Lock EEPROM
  st.LockEprom(servoID);
  delay(10);

  // IMPORTANT: Enable torque after mode change
  st.EnableTorque(servoID, 1);
  delay(10);

  Serial.print("Servo "); Serial.print(servoID); 
  Serial.println(" configured for wheel mode with torque enabled");
}

void setWheelSpeeds(float vx, float vy, float omega) {
  for (int i = 0; i < SERVO_NUM; i++) {
    float rad = WHEEL_ANGLE_DEG[i] * (PI / 180.0f);

    // Kiwi kinematics formula
    float speed = -sin(rad) * vx + cos(rad) * vy + omega;

    // Scale to servo speed range (-3000 to +3000)
    int spdInt = (int)(speed * BASE_SPEED);

    // Clamp to valid range
    if (spdInt > 3000) spdInt = 3000;
    if (spdInt < -3000) spdInt = -3000;

    // WriteSpe expects (id, speed) - only 2 parameters!
    st.WriteSpe(ID[i], spdInt);
  }
}

void nudgeRobot(float vx, float vy, float omega) {
  // Calculate temporary speeds using nudge speed instead of base speed
  int originalBaseSpeed = BASE_SPEED;
  BASE_SPEED = NUDGE_SPEED;

  // Apply movement
  setWheelSpeeds(vx, vy, omega);

  // Wait for nudge duration
  delay(NUDGE_DURATION);

  // Stop all motors
  stopAll();

  // Restore original base speed
  BASE_SPEED = originalBaseSpeed;
}

void stopAll() {
  for (int i = 0; i < SERVO_NUM; i++) {
    st.WriteSpe(ID[i], 0);
  }
  Serial.println("Motors stopped");
}

void initializeServosToPositionMode() {
  Serial.println(F("Setting servos to position mode for initial positioning..."));

  for (int i = 0; i < SERVO_NUM; i++) {
    // Unlock EEPROM
    st.unLockEprom(ID[i]);
    delay(10);

    // Set position mode (value 0)
    st.writeByte(ID[i], REG_OPERATING_MODE, 0);
    delay(10);

    // Lock EEPROM
    st.LockEprom(ID[i]);
    delay(10);

    // Enable torque
    st.EnableTorque(ID[i], 1);
    delay(10);
  }

  delay(500);

  Serial.println(F("Moving all servos to center position (2048)..."));

  // Move all servos to center position
  u16 Speed[SERVO_NUM] = {1500, 1500, 1500};
  byte ACC[SERVO_NUM] = {50, 50, 50};
  s16 Pos[SERVO_NUM] = {2048, 2048, 2048};

  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(2000); // Wait for movement to complete

  Serial.println(F("Servos positioned. Switching to wheel mode..."));

  // Now switch to wheel mode
  for (int i = 0; i < SERVO_NUM; i++) {
    enableWheelMode(ID[i]);
    delay(50);
  }
}

void printHelp() {
  Serial.println(F("\n====== LeKiwi Nudge Control ======"));
  Serial.println(F("Each key press gives a short 'nudge' movement"));
  Serial.println(F(" w = Forward nudge"));
  Serial.println(F(" s = Backward nudge"));
  Serial.println(F(" a = Turn LEFT nudge"));
  Serial.println(F(" d = Turn RIGHT nudge"));
  Serial.println(F(" q = Strafe LEFT nudge"));
  Serial.println(F(" e = Strafe RIGHT nudge"));
  Serial.println(F(" x = STOP (emergency)"));
  Serial.println(F(""));
  Serial.println(F("Continuous movement mode:"));
  Serial.println(F(" SHIFT + key = Continuous movement"));
  Serial.println(F(" Example: Press 'W' (uppercase) = continuous forward"));
  Serial.println(F(""));
  Serial.println(F("Settings:"));
  Serial.println(F(" + = Increase nudge duration"));
  Serial.println(F(" - = Decrease nudge duration"));
  Serial.println(F(" * = Increase nudge speed"));
  Serial.println(F(" / = Decrease nudge speed"));
  Serial.println(F(" ? = Show this help"));
  Serial.println(F(""));
  Serial.print(F("Current nudge duration: "));
  Serial.print(NUDGE_DURATION);
  Serial.println(F(" ms"));
  Serial.print(F("Current nudge speed: "));
  Serial.println(NUDGE_SPEED);
  Serial.println(F("==================================="));
}

void setup() {
  Serial.begin(115200);
  delay(1500);
  Serial.println(F("LeKiwi Nudge Control boot..."));

  // Start servo bus with explicit pins
  COMSerial.begin(1000000, SERIAL_8N1, S_RXD, S_TXD);
  st.pSerial = &COMSerial;
  delay(500);

  Serial.println(F("Checking servos..."));
  bool allServosFound = true;

  for (int i = 0; i < SERVO_NUM; i++) {
    if (st.Ping(ID[i]) != -1) {
      Serial.print(F("Servo "));
      Serial.print(ID[i]);
      Serial.println(F(" OK"));
    } else {
      Serial.print(F("ERROR: Servo "));
      Serial.print(ID[i]);
      Serial.println(F(" not found!"));
      allServosFound = false;
    }
    delay(100);
  }

  if (!allServosFound) {
    Serial.println(F("Some servos not found. Check connections and power!"));
    while(1) { delay(1000); } // Halt if servos not found
  }

  // Initialize servos to center position, then switch to wheel mode
  initializeServosToPositionMode();

  Serial.println(F("\nSystem ready! Press keys for nudge movement."));
  Serial.println(F("(Each key press moves the robot a short distance)\n"));

  printHelp();
}

void loop() {
  if (!Serial.available()) return;

  char cmd = (char)Serial.read();
  bool isShifted = false;

  // Check for uppercase (SHIFT key in terminal)
  if (cmd >= 'A' && cmd <= 'Z') {
    isShifted = true;
  }

  // Flush any trailing characters
  while (Serial.available() && (Serial.peek() == '\n' || Serial.peek() == '\r')) {
    Serial.read();
  }

  // Process movement commands
  switch (cmd) {
    case 'w':
      if (isShifted) {
        setWheelSpeeds(0, 1, 0);
        Serial.println(F("Continuous Forward"));
      } else {
        Serial.println(F("Nudge Forward"));
        nudgeRobot(0, 1, 0);
      }
      break;

    case 's':
      if (isShifted) {
        setWheelSpeeds(0, -1, 0);
        Serial.println(F("Continuous Backward"));
      } else {
        Serial.println(F("Nudge Backward"));
        nudgeRobot(0, -1, 0);
      }
      break;

    case 'q':
      if (isShifted) {
        setWheelSpeeds(-1, 0, 0);
        Serial.println(F("Continuous Strafe Left"));
      } else {
        Serial.println(F("Nudge Strafe Left"));
        nudgeRobot(-1, 0, 0);
      }
      break;

    case 'e':
      if (isShifted) {
        setWheelSpeeds(1, 0, 0);
        Serial.println(F("Continuous Strafe Right"));
      } else {
        Serial.println(F("Nudge Strafe Right"));
        nudgeRobot(1, 0, 0);
      }
      break;

    case 'a':
      if (isShifted) {
        setWheelSpeeds(0, 0, 1);
        Serial.println(F("Continuous Turn Left"));
      } else {
        Serial.println(F("Nudge Turn Left"));
        nudgeRobot(0, 0, 1);
      }
      break;

    case 'd':
      if (isShifted) {
        setWheelSpeeds(0, 0, -1);
        Serial.println(F("Continuous Turn Right"));
      } else {
        Serial.println(F("Nudge Turn Right"));
        nudgeRobot(0, 0, -1);
      }
      break;

    case 'x': case 'X': case ' ':
      stopAll();
      Serial.println(F("Emergency Stop"));
      break;

    case '+':
      NUDGE_DURATION = min(NUDGE_DURATION + 50, 1000);
      Serial.print(F("Nudge duration: "));
      Serial.print(NUDGE_DURATION);
      Serial.println(F(" ms"));
      break;

    case '-':
      NUDGE_DURATION = max(NUDGE_DURATION - 50, 50);
      Serial.print(F("Nudge duration: "));
      Serial.print(NUDGE_DURATION);
      Serial.println(F(" ms"));
      break;

    case '*':
      NUDGE_SPEED = min(NUDGE_SPEED + 100, 2000);
      Serial.print(F("Nudge speed: "));
      Serial.println(NUDGE_SPEED);
      break;

    case '/':
      NUDGE_SPEED = max(NUDGE_SPEED - 100, 200);
      Serial.print(F("Nudge speed: "));
      Serial.println(NUDGE_SPEED);
      break;

    case '?':
      printHelp();
      break;
  }
}
```

</details>

## Raspberry Pi（Voice Brain）の準備

### ステップ 1 — Groq API キーを取得する

1. [console.groq.com](https://console.groq.com/) に登録します
2. 新しい API キーを作成してコピーします — ステップ 4 で必要になります

### ステップ 2 — このリポジトリをクローンする

```bash
git clone https://github.com/KasunThushara/Lekiwi-voice
cd Lekiwi-voice
```

### ステップ 3 — 仮想環境を作成する

```bash
python3 -m venv venv
source venv/bin/activate
```

> このプロジェクトを使用する前に、新しいターミナルを開くたびに `source venv/bin/activate` を実行してください。

### ステップ 4 — 依存関係をインストールする

```bash
pip install -r requirements.txt
```

次にウェイクワードモデルをダウンロードします：

```bash
python3 download_model.py
```

これは、事前学習済みの **"Hey Jarvis"** モデル（およびその他）を openwakeword から `~/.openwakeword/` にダウンロードします。

### ステップ 5 — マイクのインデックスを確認する

**ReSpeaker Flex** を USB 経由で接続し、次を実行します：

```bash
python3 list_mics.py
```

次のような一覧が表示されます：

```
Available audio INPUT devices:

  [0] bcm2835 Headphones  (rate=44100Hz)
  [1] ReSpeaker 4 Mic Array  (rate=16000Hz)
  [2] USB PnP Sound Device  (rate=16000Hz)
```

ReSpeaker の横の角括弧内の番号をメモします — それが `MIC_INDEX` です。

### ステップ 6 — ESP32 のシリアルポートを確認する

XIAO ESP32 を USB で Pi に接続し、次を実行します：

```bash
python3 list_ports.py
```

出力例：

```
Available serial ports:

  /dev/ttyACM0         USB Serial Device
  /dev/ttyUSB0         CP2102 USB to UART Bridge
```

デバイスパス（XIAO の場合は通常 `/dev/ttyACM0`）をメモします。

### ステップ 7 — プロジェクトを設定する

サンプル設定ファイルをコピーし、自分の値を入力します：

```bash
cp config.env.example config.env
nano config.env
```

更新すべき主な設定項目：

```env
# Your Groq API key (required)
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxx

# The number from list_mics.py
MIC_INDEX=1

# The port from list_ports.py
SERIAL_PORT=/dev/ttyACM0
```

その他はすべて、入門用としてデフォルトのままで構いません。

---

## ロボットを実行する

仮想環境が有効になっていることを確認し、次を実行します：

```bash
python3 pipeline.py
```

次のように表示されるはずです：

```
======================================================
  LeKiwi Voice Controller — Ready
  Wake word  : hey jarvis
  LLM model  : llama-3.1-8b-instant
  STT model  : whisper-large-v3-turbo
  TTS voice  : autumn
  Serial     : /dev/ttyACM0 @ 115200
======================================================
[WakeWord] Listening for 'hey jarvis' ...
```

ここで **"Hey Jarvis"** と話しかけて、動作コマンドを出してみましょう！

### コマンド例

> "Hey Jarvis, move forward"

> "Hey Jarvis, turn left"

> "Hey Jarvis, strafe right"

> "Hey Jarvis, stop"

> "Hey Jarvis, what can you do?"

---

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
