---
description: ReSpeaker XVF3800 USB 4-Mic Array は、AEC、ビームフォーミング、ノイズ抑制、360° 音声キャプチャを備えたプロフェッショナルな円形マイクアレイです。XIAO ESP32S3 と組み合わせることで、スマートデバイス、ロボット工学、IoT アプリケーション向けの高度な音声制御を実現します。シームレスな統合とデュアルモードの柔軟性をご体験ください。
title: I2C コマンドを使用して XIAO ESP32S3 で reSpeaker XVF3800 USB Mic Array を制御する
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_i2c_list
sku: 114993702,114993700
last_update:
  date: 8/24/2026
  author: Kunpeng Wang
createdAt: '2026-08-21'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/ja/respeaker_xvf_3800_i2c_list/
---

## はじめに 

このセクションでは、ReSpeaker XVF3800 の I2C 制御コマンド一覧に加え、I2C の読み書き例および 2 つの動作モードにおけるハードウェア信号パス図を示します。I2C インターフェース経由で ReSpeaker XVF3800 を制御するアプリケーション例については、[Device Control](/ja/respeaker_xvf3800_xiao_rgb) セクションを参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>


## reSpeaker ハードウェア信号パス図

### I2S モードの信号パス

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/Signal Path-I2S.png" alt="pir" width={800} height="auto" /></p>

#### 録音パス
マイクロフォンが生データを取得し、そのデータはアルゴリズムモジュールによって処理されます。処理されたデータは、I2S インターフェースを介してホストコントローラによって読み出されます。

#### 再生パス
I2S モードでは、オーディオ再生パスは Host → XVF3800 → DAC と Host → DAC の 2 つの経路に分かれます。

##### 1. Host → XVF3800 → DAC

ホストコントローラは I2S インターフェースを介して XVF3800 にオーディオデータを送信します。データは Optional Far DSP ブロックで処理され、その後 I2S バス経由で DAC に再送され、再生されます。

:::note
この経路を介した再生のアプリケーション例については、[reSpeaker XVF3800 Record and Playback Audio Using I2S](/ja/respeaker_xvf3800_xiao_record_playback) セクションを参照してください。
:::

##### 2. Host → DAC

ホストコントローラは I2S インターフェースを介して DAC に直接オーディオデータを送信し、XVF3800 をバイパスして再生します。

:::note
この経路を介した再生のアプリケーション例については、[reSpeaker XVF3800 Audio Playback and Volume Control via I2C](/ja/respeaker_xvf3800_xiao_volume) セクションを参照してください。
:::

#### 制御パス
制御パスも再生パスと同様に、2 つの経路に分かれます：

##### 1. Host → XVF3800 → DAC

- **Host ↔ XVF3800 の通信:** ホストは I2C マスター、XVF3800 は I2C スレーブとして動作します。ホストは I2C を使用して、XVF3800 の Optional Far DSP、Optional PP、GPIO などのブロックを設定します。
- **XVF3800 ↔ DAC の通信:** XVF3800 は I2C マスター、DAC は I2C スレーブとして動作します。XVF3800 は I2C を介して DAC の再生を制御します。

##### 2. Host → DAC

ホストは DAC と直接通信します。ホストは I2C を使用して DAC を直接制御し、オーディオ再生および音量制御を行います。

### USB モードの信号パス

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/Signal Path-USB.png" alt="pir" width={800} height="auto" /></p>

USB モードでは、データパスは Host → XVF3800 → DAC の 1 つだけであり、Host → XVF3800 と XVF3800 → DAC の 2 つの区間に分かれます。

- **Host ↔ XVF3800:** 通信は USB 経由で行われます。マイクロフォンで取得された生データをアルゴリズムモジュールで処理したオーディオデータと、XVF3800 の Optional Far DSP、Optional PP、GPIO などのブロックを設定するための制御データの両方が USB 上で送受信されます。

- **XVF3800 ↔ DAC:** 通信は I2C および I2S 経由で行われます。XVF3800 は I2C マスターおよび I2S マスターとして動作し、DAC のオーディオ再生を制御します。

:::note
この経路を介した再生のアプリケーション例については、[reSpeaker XVF3800 Control with Python](/ja/respeaker_xvf3800_python_sdk) セクションを参照してください。
:::

## I2C フレーム形式

### 書き込み動作

```
[resid] [cmd] [write_byte_num] [data...]
```

| Field | Description |
|-------|-------------|
| `resid` | Resource ID |
| `cmd` | Command ID |
| `write_byte_num` | 書き込むデータバイト数 |
| `data...` | 書き込まれるデータバイト |

### 読み出し動作（先にコマンドを書き込み、その後レスポンスを読み出し）:

```
Step 1 (Write): [resid] [cmd | 0x80] [read_len + 1]
Step 2 (Read):  [status] [data...]
```

| Field | Description |
|-------|-------------|
| `cmd\|0x80` | MSB を 1 に設定したコマンド ID（読み出し動作を示す） |
| `read_len + 1` | 読み出しが想定されるバイト数（ステータスバイト分として +1） |
| `status` | レスポンスステータスバイト（`0` = 成功、`64` = 再試行） |
| `data...` | 返されるデータバイト |

:::note
詳細な I2C コマンド一覧については、[I2C Command List](#i2c-command-list) セクションを参照してください。
:::

## Arduino 読み書き例
```cpp
#define XMOS_ADDR 0x2C  // XVF3800 I2C 7-bit Address
```
### 書き込み

```cpp
void xmos_write_bytes(uint8_t resid, uint8_t cmd, uint8_t *value, uint8_t write_byte_num) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(write_byte_num);
  for (uint8_t i = 0; i < write_byte_num; i++) {
    Wire.write(value[i]);
  }
  Wire.endTransmission();
}
```

### 読み出し

```cpp
bool xmos_read_bytes(uint8_t resid, uint8_t cmd, uint8_t *buffer, uint8_t read_len, uint8_t *status) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd | 0x80);
  Wire.write(read_len + 1);  // +1 for status byte
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();  // First byte is status (0 = success, 64 = retry)
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}
```

### ファームウェアバージョン読み出し例

```cpp
#include <Wire.h>

#define XMOS_ADDR 0x2C  // XVF3800 I2C 7-bit Address

#define APPLICATION_SERVICER_RESID 48  // ResID = 48 (Application Servicer)
#define VERSION_CMD              0     // CmdID = 0 (VERSION)
#define VERSION_NUM_BYTES        3     // 3 bytes: MAJOR, MINOR, PATCH

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 Firmware Version Read Test Starting...");
}

void loop() {
  uint8_t version[VERSION_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  // Read 3 bytes: [MAJOR] [MINOR] [PATCH]
  bool success = xmos_read_bytes(APPLICATION_SERVICER_RESID, VERSION_CMD,
                                 version, VERSION_NUM_BYTES, &status);

  if (success && status == 0) {
    Serial.print("Firmware Version: v");
    Serial.print(version[0]);  // MAJOR
    Serial.print(".");
    Serial.print(version[1]);  // MINOR
    Serial.print(".");
    Serial.println(version[2]);  // PATCH
    Serial.print("  (Status byte: 0x");
    Serial.print(status, HEX);
    Serial.println(")");
  } else {
    Serial.print("Read failed. Status byte: 0x");
    Serial.println(status, HEX);
  }

  delay(2000);
}

bool xmos_read_bytes(uint8_t resid, uint8_t cmd, uint8_t *buffer, uint8_t read_len, uint8_t *status) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd | 0x80);        
  Wire.write(read_len + 1);      // +1 for status byte
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();  // First byte is status (0 = success, 64 = retry)
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

```

**期待される出力**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/read-version.png" alt="pir" width={800} height="auto" /></p>

:::note
I2C インターフェース経由で ReSpeaker XVF3800 を制御するアプリケーション例については、[Device Control](/ja/respeaker_xvf3800_xiao_rgb) セクションを参照してください。
:::

## I2C コマンド一覧

### ResID 一覧

| Servicer Name | ResID | Hex | Description |
|---------------|------|------|-------------|
| PP Servicer (Post-Processing) | 17 | 0x11 | AGC、リミッタ、ノイズ抑制、エコー抑制 |
| GPO Servicer (GPIO/LED/DOA) | 20 | 0x14 | GPO 読み書き、LED エフェクト/色/速度/明るさ、DOA |
| AEC Servicer (Acoustic Echo Cancellation) | 33 | 0x21 | AEC フィルタ、ビーム、方位角、RT60 |
| Audio Manager | 35 | 0x23 | ゲイン、I2S、チャネル選択、出力ルーティング |
| Application Servicer (System) | 48 | 0x30 | バージョン、再起動、設定保存、USB ビット深度 |

### CmdID 一覧

#### ResID = 48 — Application Servicer（システム制御）

| Name | CmdID | Direction | Data Type | Values | Bytes | Description |
|------|-------|-----------|-----------|--------|-------|-------------|
| VERSION | 0 | ro | uint8 | 3 | 3 | ファームウェアバージョン（MAJOR, MINOR, PATCH） |
| BLD_MSG | 1 | ro | char | 50 | 50 | ビルドメッセージ（ビルド構成名） |
| BLD_HOST | 2 | ro | char | 30 | 30 | CI ビルドホスト情報 |
| BLD_REPO_HASH | 3 | ro | char | 40 | 40 | GIT ハッシュ |
| BLD_MODIFIED | 4 | ro | char | 6 | 6 | ファームウェアが変更されたかどうか |
| BOOT_STATUS | 5 | ro | char | 3 | 3 | ブートモード（SPI/JTAG/FLASH） |
| TEST_CORE_BURN | 6 | rw | uint8 | 1 | 1 | コアストレステスト（チップを再起動） |
| REBOOT | 7 | wo | uint8 | 1 | 1 | チップを再起動し、デフォルトパラメータを復元 |
| USB_BIT_DEPTH | 8 | rw | uint8 | 2 | 2 | USB ビット深度（16/24/32）、USB モードのみ |
| SAVE_CONFIGURATION | 9 | wo | uint8 | 1 | 1 | 現在の設定をフラッシュに保存 |
| CLEAR_CONFIGURATION | 10 | wo | uint8 | 1 | 1 | 設定をクリアし、デフォルトを復元 |
| AIC3104_HP_LEVEL | 11 | rw | uint8 | 1 | 1 | ヘッドホン出力レベル [0..9] |
| AIC3104_LINEOUT_LEVEL | 12 | rw | uint8 | 1 | 1 | ライン出力レベル [0..9] |

---

#### ResID = 20 — GPO Servicer（GPIO および LED 制御）

| Name | CmdID | Direction | Data Type | Values | Bytes | Description |
|------|-------|-----------|-----------|--------|-------|-------------|
| GPO_READ_VALUES | 0 | ro | uint8 | 5 | 5 | すべての GPO ピンレベルを読み出し |
| GPO_WRITE_VALUE | 1 | wo | uint8 | 2 | 2 | 指定した GPO ピンレベルを設定 |
| GPO_PORT_PIN_INDEX | 2 | rw | uint32 | 2 | 8 | GPO ポート/ピンインデックス |
| GPO_PIN_VAL | 3 | wo | uint8 | 3 | 3 | 指定ポートピン値を書き込み |
| GPO_PIN_ACTIVE_LEVEL | 4 | rw | uint32 | 1 | 4 | アクティブレベル（1=high, 0=low） |
| LED_EFFECT | 12 | rw | uint8 | 1 | 1 | LED エフェクト（0=off 1=breathing 2=rainbow 3=solid 4=DOA 5=ring） |
| LED_BRIGHTNESS | 13 | rw | uint8 | 1 | 1 | LED 輝度 |
| LED_GAMMIFY | 14 | rw | uint8 | 1 | 1 | ガンマ補正（0=off 1=on） |
| LED_SPEED | 15 | rw | uint8 | 1 | 1 | LED 速度 |
| LED_COLOR | 16 | rw | uint32 | 1 | 4 | LED 色（RGB） |
| LED_DOA_COLOR | 17 | rw | uint32 | 2 | 8 | DOA モード色（ベースカラー + DOA カラー） |
| DOA_VALUE | 18 | ro | uint16 | 2 | 4 | DOA 角度（0-359）+ 音声検出フラグ |
| LED_RING_COLOR | 19 | rw | uint32 | 12 | 48 | リングモードの LED ごとの色 |

---

#### ResID = 33 — AEC サービサー（Acoustic Echo Cancellation）

| 名前 | CmdID | 方向 | データ型 | 値 | バイト数 | 説明 |
|------|-------|-----------|-----------|--------|-------|-------------|
| AEC_AECPATHCHANGE | 0 | ro | int32 | 1 | 4 | AEC パス変更検出 (0,1) |
| AEC_HPFONOFF | 1 | rw | int32 | 1 | 4 | ハイパスフィルタ (0=off 1=70Hz 2=125Hz 3=150Hz 4=180Hz) |
| AEC_AECSILENCELEVEL | 2 | rw | float | 2 | 8 | 無音しきい値 [0.0..1.0] |
| AEC_AECCONVERGED | 3 | ro | int32 | 1 | 4 | AEC 収束状態 (0,1) |
| AEC_AECEMPHASISONOFF | 4 | rw | int32 | 1 | 4 | プリ／デエンファシス (0=off 1=on 2=on_eq) |
| AEC_FAR_EXTGAIN | 5 | rw | float | 1 | 4 | 遠端外部ゲイン (dB) |
| AEC_PCD_COUPLINGI | 6 | rw | float | 1 | 4 | PCD 感度 [0.0..1.0] |
| AEC_PCD_MINTHR | 7 | rw | float | 1 | 4 | PCD 最小しきい値 [0.0..0.02] |
| AEC_PCD_MAXTHR | 8 | rw | float | 1 | 4 | PCD 最大しきい値 [0.025..0.2] |
| AEC_RT60 | 9 | ro | float | 1 | 4 | RT60 残響推定値 [0.250..0.900] 秒 |
| AEC_ASROUTONOFF | 35 | rw | int32 | 1 | 4 | ASR 出力切り替え (0=residual 1=ASR processed) |
| AEC_ASROUTGAIN | 36 | rw | float | 1 | 4 | ASR 出力ゲイン [0.0..1000.0] |
| AEC_FIXEDBEAMSONOFF | 37 | rw | int32 | 1 | 4 | 固定ビームモード切り替え (0,1) |
| AEC_FIXEDBEAMNOISETHR | 38 | rw | float | 2 | 8 | 固定ビームノイズしきい値 [0.0..1.0] |
| SHF_BYPASS | 70 | rw | uint8 | 1 | 1 | AEC バイパス |
| AEC_NUM_MICS | 71 | ro | int32 | 1 | 4 | マイク数 |
| AEC_NUM_FARENDS | 72 | ro | int32 | 1 | 4 | 遠端リファレンス数 |
| AEC_MIC_ARRAY_TYPE | 73 | ro | int32 | 1 | 4 | マイクアレイタイプ (1=linear 2=square) |
| AEC_MIC_ARRAY_GEO | 74 | ro | float | 12 | 48 | マイクアレイ形状 (3D XYZ 座標) |
| AEC_AZIMUTH_VALUES | 75 | ro | radians | 4 | 16 | 方位角 (beam1/2/free/auto) |
| TEST_AEC_DISABLE_CONTROL | 76 | wo | uint32 | 1 | 4 | AEC 制御の無効化（テスト専用） |
| AEC_CURRENT_IDLE_TIME | 77 | ro | uint32 | 1 | 4 | 現在のアイドル時間 (10ns ティック) |
| AEC_MIN_IDLE_TIME | 78 | ro | uint32 | 1 | 4 | 最小アイドル時間 (10ns ティック) |
| AEC_RESET_MIN_IDLE_TIME | 79 | wo | uint32 | 1 | 4 | 最小アイドル時間のリセット |
| AEC_SPENERGY_VALUES | 80 | ro | float | 4 | 16 | 音声エネルギー (beam1/2/free/auto) |
| AEC_FIXEDBEAMSAZIMUTH_VALUES | 81 | rw | radians | 2 | 8 | 固定ビーム方位角 |
| AEC_FIXEDBEAMSELEVATION_VALUES | 82 | rw | radians | 2 | 8 | 固定ビーム仰角 |
| AEC_FIXEDBEAMSGATING | 83 | rw | uint8 | 1 | 1 | 固定ビームゲーティングスイッチ |
| SPECIAL_CMD_AEC_FAR_MIC_INDEX | 90 | wo | int32 | 2 | 8 | AEC フィルタ読み出しインデックス（トリガーコマンド） |
| SPECIAL_CMD_AEC_FILTER_COEFF_START_OFFSET | 91 | rw | int32 | 1 | 4 | フィルタ係数開始オフセット |
| SPECIAL_CMD_AEC_FILTER_COEFFS | 92 | rw | float | 15 | 60 | AEC フィルタ係数の読み書き |
| SPECIAL_CMD_AEC_FILTER_LENGTH | 93 | ro | int32 | 1 | 4 | AEC フィルタ長 |
| AEC_FILTER_CMD_ABORT | 94 | wo | int32 | 1 | 4 | フィルタ読み書きステートマシンの中止 |

---

#### ResID = 35 — Audio Manager（オーディオ管理）

| 名前 | CmdID | 方向 | データ型 | 値 | バイト数 | 説明 |
|------|-------|-----------|-----------|--------|-------|-------------|
| AUDIO_MGR_MIC_GAIN | 0 | rw | float | 1 | 4 | マイクゲイン（SHF 前） |
| AUDIO_MGR_REF_GAIN | 1 | rw | float | 1 | 4 | リファレンスゲイン（SHF 前） |
| AUDIO_MGR_CURRENT_IDLE_TIME | 2 | ro | int32 | 1 | 4 | 現在のアイドル時間 (10ns ティック) |
| AUDIO_MGR_MIN_IDLE_TIME | 3 | ro | int32 | 1 | 4 | 最小アイドル時間 (10ns ティック) |
| AUDIO_MGR_RESET_MIN_IDLE_TIME | 4 | wo | int32 | 1 | 4 | 最小アイドル時間のリセット |
| MAX_CONTROL_TIME | 5 | ro | int32 | 1 | 4 | 最大制御時間 |
| RESET_MAX_CONTROL_TIME | 6 | wo | int32 | 1 | 4 | 最大制御時間のリセット |
| I2S_CURRENT_IDLE_TIME | 7 | ro | int32 | 1 | 4 | I2S 現在のアイドル時間 |
| I2S_MIN_IDLE_TIME | 8 | ro | int32 | 1 | 4 | I2S 最小アイドル時間 |
| I2S_RESET_MIN_IDLE_TIME | 9 | wo | int32 | 1 | 4 | I2S アイドル時間のリセット |
| I2S_INPUT_PACKED | 10 | rw | uint8 | 1 | 1 | I2S/USB 入力パックモード |
| AUDIO_MGR_SELECTED_AZIMUTHS | 11 | ro | radians | 2 | 8 | 選択されたビーム方位角（DOA 処理 + DOA 自動選択） |
| AUDIO_MGR_SELECTED_CHANNELS | 12 | rw | uint8 | 2 | 2 | 選択された出力チャネル |
| AUDIO_MGR_OP_PACKED | 13 | rw | uint8 | 2 | 2 | L/R 出力パック状態 |
| AUDIO_MGR_OP_UPSAMPLE | 14 | rw | uint8 | 2 | 2 | L/R 出力アップサンプリング状態 |
| AUDIO_MGR_OP_L | 15 | rw | uint8 | 2 | 2 | L チャネルカテゴリとソース (= OP_L_PK0) |
| AUDIO_MGR_OP_L_PK0 | 16 | rw | uint8 | 2 | 2 | L チャネルパックソース 0 |
| AUDIO_MGR_OP_L_PK1 | 17 | rw | uint8 | 2 | 2 | L チャネルパックソース 1 |
| AUDIO_MGR_OP_L_PK2 | 18 | rw | uint8 | 2 | 2 | L チャネルパックソース 2 |
| AUDIO_MGR_OP_R | 19 | rw | uint8 | 2 | 2 | R チャネルカテゴリとソース (= OP_R_PK0) |
| AUDIO_MGR_OP_R_PK0 | 20 | rw | uint8 | 2 | 2 | R チャネルパックソース 0 |
| AUDIO_MGR_OP_R_PK1 | 21 | rw | uint8 | 2 | 2 | R チャネルパックソース 1 |
| AUDIO_MGR_OP_R_PK2 | 22 | rw | uint8 | 2 | 2 | R チャネルパックソース 2 |
| AUDIO_MGR_OP_ALL | 23 | rw | uint8 | 12 | 12 | すべての L/R パックソース設定 |
| I2S_INACTIVE | 24 | ro | uint8 | 1 | 1 | I2S アクティブ状態 (0=active 1=inactive) |
| AUDIO_MGR_FAR_END_DSP_ENABLE | 25 | rw | uint8 | 1 | 1 | 遠端 DSP スイッチ |
| AUDIO_MGR_SYS_DELAY | 26 | rw | int32 | 1 | 4 | リファレンス信号ディレイ（サンプル数） |
| I2S_DAC_DSP_ENABLE | 27 | rw | uint8 | 1 | 1 | DAC 遠端 DSP スイッチ |

---

#### ResID = 17 — PP サービサー（ポストプロセッシング：AGC/ノイズ/エコー）

| 名前 | CmdID | 方向 | データ型 | 値 | バイト数 | 説明 |
|------|-------|-----------|-----------|--------|-------|-------------|
| PP_AGCONOFF | 10 | rw | int32 | 1 | 4 | AGC スイッチ (0,1) |
| PP_AGCMAXGAIN | 11 | rw | float | 1 | 4 | AGC 最大ゲイン [1.0..1000.0] |
| PP_AGCDESIREDLEVEL | 12 | rw | float | 1 | 4 | AGC 目標電力 [1e-8..1.0] |
| PP_AGCGAIN | 13 | rw | float | 1 | 4 | AGC 現在ゲイン [1.0..1000.0] |
| PP_AGCTIME | 14 | rw | float | 1 | 4 | AGC 時定数 [0.5..4.0] 秒 |
| PP_AGCFASTTIME | 15 | rw | float | 1 | 4 | AGC 高速減衰時間 [0.05..4.0] 秒 |
| PP_AGCALPHAFASTGAIN | 16 | rw | float | 1 | 4 | 高速モードゲインしきい値 [0.0..1000.0] |
| PP_AGCALPHASLOW | 17 | rw | float | 1 | 4 | 低速メモリパラメータ [0.0..1.0] |
| PP_AGCALPHAFAST | 18 | rw | float | 1 | 4 | 高速メモリパラメータ [0.0..1.0] |
| PP_LIMITONOFF | 19 | rw | int32 | 1 | 4 | リミッタースイッチ (0,1) |
| PP_LIMITPLIMIT | 20 | rw | float | 1 | 4 | リミッター最大電力 [1e-8..1.0] |
| PP_MIN_NS | 21 | rw | float | 1 | 4 | 定常ノイズゲインフロア [0.0..1.0] |
| PP_MIN_NN | 22 | rw | float | 1 | 4 | 非定常ノイズゲインフロア [0.0..1.0] |
| PP_ECHOONOFF | 23 | rw | int32 | 1 | 4 | エコー抑圧スイッチ (0,1) |
| PP_GAMMA_E | 24 | rw | float | 1 | 4 | エコー過剰抑圧係数 [0.0..2.0] |
| PP_GAMMA_ETAIL | 25 | rw | float | 1 | 4 | テイルエコー過剰抑圧係数 [0.0..2.0] |
| PP_GAMMA_ENL | 26 | rw | float | 1 | 4 | 非線形エコー過剰抑圧係数 [0.0..5.0] |
| PP_NLATTENONOFF | 27 | rw | int32 | 1 | 4 | 非線形エコー減衰スイッチ (0,1) |
| PP_NLAEC_MODE | 28 | rw | int32 | 1 | 4 | 非線形 AEC トレーニングモード (0=normal 1=training 2=training2) |
| PP_MGSCALE | 29 | rw | float | 3 | 12 | 最小ゲインスケール (max,min,cur) |
| PP_FMIN_SPEINDEX | 30 | rw | float | 1 | 4 | ダブルトーク周波数境界 [0.0..7999.0] |
| PP_DTSENSITIVE | 31 | rw | int32 | 1 | 4 | ダブルトーク感度 [0..5, 10..15] |
| PP_ATTNS_MODE | 32 | rw | int32 | 1 | 4 | 非音声追加減衰スイッチ (0,1) |
| PP_ATTNS_NOMINAL | 33 | rw | float | 1 | 4 | 公称音声減衰 [0.0..1.0] |
| PP_ATTNS_SLOPE | 34 | rw | float | 1 | 4 | 減衰スロープ [0.0..5.0] |
| PP_CURRENT_IDLE_TIME | 70 | ro | uint32 | 1 | 4 | PP 現在のアイドル時間 (10ns ティック) |
| PP_MIN_IDLE_TIME | 71 | ro | uint32 | 1 | 4 | PP 最小アイドル時間 (10ns ティック) |
| PP_RESET_MIN_IDLE_TIME | 72 | wo | uint32 | 1 | 4 | PP 最小アイドル時間のリセット |
| PP_NL_MODEL_CMD_ABORT | 94 | wo | int32 | 1 | 4 | NL モデル読み書きステートマシンの中止 |
| PP_EQUALIZATION_CMD_ABORT | 100 | wo | int32 | 1 | 4 | イコライザ読み書きステートマシンの中止 |

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



