---
description: この文書では、HighTorqueシリーズモーターの素早い開始方法を紹介します。
title: HighTorqueシリーズモーター
keywords:
- Joint Module
- Motor
- Robotics
- Robotic Arm
image: https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /ja/hightorque_series
last_update:
  date: 06/24/2025
  author: ZhuYaoHui
---

# HighTorqueシリーズモーターユーザーマニュアル

<div className="quick-nav-container">
  <nav className="quick-nav">
    <a className="nav-item">
      <img width={100}  src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438.png" className="nav-icon" alt="4438-32"/>
      <span className="text">4438-32</span>
      <div className="hover-effect"></div>
    </a>
    <a className="nav-item">
      <img width={100} src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047-3.png" className="nav-icon" alt="5047-36"/>
      <span className="text">5047-36</span>
      <div className="hover-effect"></div>
    </a>
  </nav>
</div>

# HighTorqueシリーズモータークイックスタートガイド

この文書では、HighTorqueシリーズモーターの素早い開始方法を紹介します。

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque.png" />
</div>

## 技術仕様

### 遊星関節モジュールパラメータ比較表

| **技術仕様ダウンロード** | **[HTDW-5047-36-NE](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-5047-36-NE.pdf)** |  **[HTDW-4438-32-NE](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-4438-32-NE.pdf)** |  
|------------------------|------------------|---------------------|
| **減速比**    | 36               | 30                  |
| **ピークトルク (Nm)**   | 16               | 6                   |
| **定格トルク (Nm)**  | 4                | 1.5                 |
| **ストールトルク (Nm)**  | 24               | 10                  |
| **定格速度 (RPM)**  | 40               | 36                  |
| **無負荷速度 (RPM)**| 60               | 75                  |
| **定格電力 (W)**    | 17               | 13                  |
| **トルク定数 (Nm/A)** | 0.062        | 0.039               |
| **極対数**         | 14               | -                   |
| **定格電圧 (V)**  | 12-48            | 12-48               |
| **定格電流 (A)**  | 2                | 1                   |
| **ピーク電流 (A)**   | 10               | 5                   |
| **トルク制御精度** | ±10%         | ±20%                |
| **速度制御精度** | ±8%           | ±10%                |
| **応答時間 (μs)** | ≤200             | ≤200                |
| **高速エンコーダ分解能** | 14bit | 14bit               |
| **低速エンコーダ分解能** | 12bit  | 12bit               |
| **通信ボーレート (Mbps)** | 5 | 5                   |
| **制御周波数 (Hz)** | 3k      | 3k                  |

### モーター取り付け寸法

- **HTDM-4438-32**:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438_install.png" />
</div>

- **HTDM-5047-36**:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047_install.png" />
</div>

**Windows PC準備**

- [モーターデバッグアシスタント v1.2.1](https://www.hightorque.cn/wp-content/uploads/2025/03/%E9%AB%98%E6%93%8E%E7%94%B5%E6%9C%BA%E8%B0%83%E8%AF%95%E5%8A%A9%E6%89%8Bv1.2.1.zip)をダウンロード
- [PCデバッグマニュアル](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/Hightorque_Motor_Debugging_Manual_EN.pdf)をダウンロード
- CAN-USBドライバーボードを購入

<details>
<summary>プロトコル解析</summary>

# プロトコル解析

## 1.1 CAN関連指示

1. CANボーレート:
   - 調停セグメント: 1 Mbps
   - データセグメント: 1 Mbps
2. ID: 16ビットで構成され、0x7Fはブロードキャストアドレスです。
   - 上位8ビット: ソースアドレスを表す:
     - 最上位ビットが1: 応答が必要で、マスタースイッチとして機能します。クエリコマンドを送信せずに有効にすると、データセグメント長が0のフレームが返されます。
     - 最上位ビットが0: 応答は不要です。
     - 残りの7ビット: 信号ソースアドレス。
   - 下位8ビット: 宛先アドレスを表す:
     - 最上位ビットは0。
     - 残りの7ビットは宛先アドレスを表します。

例:

1. ID: 0x8001
   - 信号ソースアドレスは0。
   - 宛先アドレスは1。
   - 最上位ビットが1で、応答が必要であることを示し、つまり応答マスタースイッチがオンになっています。
2. ID: 0x100
   - 信号ソースアドレスは1。
   - 宛先アドレスは0。
   - 最上位ビットが0で、応答が不要であることを示し、つまり応答マスタースイッチがオフになっています。

## 1.2 モード指示

### 1.2.1 通常モード（位置と速度は同時に制御できません）

```bash
uint8_t cmd[] = {0x07, 0x07, pos1, pos2, val1, val2, tqe1, tqe2};
```

通常プロトコルは、コマンドビット（2バイト）+ 位置（2バイト）+ 速度（2バイト）+ トルク（2バイト）で構成され、合計8バイトです。

0x07 0x07: 通常モードで、速度とトルク、または位置とトルクを制御できます（[[#2.1-通常モード]]を参照）。

プロトコル内の位置、速度、トルクデータはリトルエンディアンモードで、つまり下位バイトが最初に送信され、その後上位バイトが送信されます。例えば、pos = 0x1234の場合、pos1 = 0x34、pos2 = 0x12となります。

このモードは2つの制御方法に分けることができます:

- 位置とトルク制御（この時、val = 0x8000で制限なしを示します）。
- 速度とトルク制御（この時、pos = 0x8000で制限なしを示します）。

### 1.2.2 トルクモード

```bash
uint8_t cmd[] = {0x05, 0x13, tqe1, tqe2};
```

トルクモードプロトコルは、コマンドビット（2バイト）+ トルク（2バイト）で構成されます。

0x05 0x13: 純粋なトルクモードで、その後に2バイトのトルクデータが続きます（[[#2.3-トルクモード]]を参照）。

プロトコル内のトルクデータはリトルエンディアンモードで、つまり下位バイトが最初に送信され、その後上位バイトが送信されます。例えば、tqe = 0x1234の場合、tqe1 = 0x34、tqe2 = 0x12となります。

### 1.2.3 協調制御モード（位置、速度、トルクを同時に制御可能）

```bash
uint8_t cmd[] = {0x07, 0x35, val1, val2, tqe1, teq2, pos1, pos2};
```

協調制御モードプロトコル: コマンドビット（2バイト）+ 速度（2バイト）+ トルク（2バイト）+ 位置（2バイト）、合計8バイト。

0x07 0x35: 協調制御モードで、指定された速度で指定された位置まで回転し、最大トルクを制限します。

このモードでは、パラメータ0x8000を使用すると制限なしを示します（速度とトルクに制限がないということは最大値を意味します）。例えば、val = 5000、tqe = 1000、pos = 0x8000: モーターが毎秒0.5回転の速度で回転し、最大トルクが0.1 NMであることを意味します。

プロトコル内の位置、速度、トルクデータはすべてリトルエンディアンモードで、つまり下位バイトが最初に送信され、その後上位バイトが送信されます。例えば、pos = 0x1234の場合、pos1 = 0x34、pos2 = 0x12となります。

## 1.3 モーター状態データ読み取り

1. モーター状態部分を読み取るプロトコルはCAN-FDのプロトコルと同じで、唯一の違いはCANが8バイトのデータセグメントに制限されることです。
2. レジスタアドレスと機能指示については、「Register Function, Motor Operation Mode, Error Code Instructions.xlsx」ファイルを参照してください。
3. CANの8バイトデータセグメント制限により、単一のCANフレームで返せるモーター情報は限られています:
   - レジスタ内の1つのfloat型またはint32_t型モーター情報。
   - 3つの連続したint16_t型モーター情報。
   - 6つの連続したint8_t型モーター情報。
4. サンプルプログラムでは、int16_t型のモーター位置、速度、トルク情報を照会するサンプル関数とモーター情報解析を提供しています（サンプルプログラムではC言語のunionを使用してCANの3番目から8番目のバイトのデータを直接コピーします）。

### 1.3.1 送信プロトコル指示

```bash
uint8_t tdata[] = {cmd, addr, cmd1, addr1, cmd2, add2};
```

一般的な意味は: addrからcmd[3, 2]型のcmd[0, 1]個のデータを読み取る。

cmd:

- 上位4ビット[7, 4]: 0001は読み取りを示します。
- ビット2-3 [3, 2]: 型を示します。
  - 00: int8_t型。
  - 01: int16_t型。
  - 10: int32_t型。
  - 11: float型。
- 下位2ビット[1, 0]: 数量を示します。
  - 01: 1つのデータ。
  - 10: 2つのデータ。
  - 11: 3つのデータ。

addr: 取得する開始アドレス。

複数のcmdとaddrを連結して、不連続なアドレスと異なる型のデータを一度に読み取ることができます。

### 1.3.2 受信プロトコル指示

取得したデータがuint16_tであると仮定します。

```bash
uint8_t rdata[] = {cmd, addr, a1, a2, b1, b2, ..., cmd1, addr1, c1, c2, c3, c4}
```

cmd:

- 上位4ビット[7, 4]: 0010は応答を示します。
- ビット2-3 [3, 2]: 型を示します。
  - 00: int8_t型。
  - 01: int16_t型。
  - 10: int32_t型。
  - 11: float型。
- 下位2ビット[1, 0]: 数量を示します。
  - 01: 1つのデータ。
  - 10: 2つのデータ。
  - 11: 3つのデータ。

addr: 取得する開始アドレス。

a1, a2: データ1、リトルエンディアンモード。

b1, b2: データ2、リトルエンディアンモード。

### 1.3.3 例

1. 位置、速度、トルクデータを読み取る必要があります。
2. レジスタExcelテーブルから、位置、速度、トルクのデータアドレスが01、02、03であることがわかります。
3. これから、アドレス01から3つの連続したデータを読み取ることができることがわかります。CANが一度に最大8バイトのデータを送信でき、cmd + addrが2バイトを占めることを考慮すると、データ型は最大でint16_t型になります。
4. 上記から、cmdのバイナリは0001 0111で、16進数は0x17です。
5. アドレス01から読み取りを開始する必要があるため、addrは0x01です。
6. 送信する総データはuint8_t tdata[] = {0x17, 0x01}です。

サンプルコードは以下の通りです:

```c
/**
* @brief Read the motor
* @param id
*/
void motor_read(uint8_t id)
{
static uint8_t tdata[8] = {0x17, 0x01};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}

uint8_t cmd[] = {0x17, 0x01};
```
全体的な意味は：アドレス0x01から開始して3つのint16_tレジスタを読み取る（表によると、アドレス0x01から0x03のレジスタはそれぞれ位置、速度、トルクを表す）。したがって、このコマンドはモーターの位置、速度、トルク情報を照会するためのものです。

0x17：0x17[7:4]のバイナリは0001：読み取りを示す。0x17[3:2]のバイナリは01：データタイプがint16_tであることを示す。0x17[1:0]のバイナリは11：データ数が3であることを示す。0x01：アドレス0x01から開始。

対応する受信データの例：

```bash
uint8_t rdata[] = {0x27, 0x01, 0x38, 0xf6, 0x09, 0x00, 0x00, 0x00};
```

0x27：送信された0x17に対応。0x01：アドレス0x01から開始。0x38 0xf6：位置データ：0xf638、すなわち-2505。0x09 0x00：速度データ：0x0009、すなわち9。0x00 0x00：トルクデータ：0x0000、すなわち0。

## 1.4 モーター停止

説明：

1. モーターを停止します。
2. ホストコンピューター命令d stopに対応します。

```c
/**
* @brief Stop the motor
*/
void motor_stop(uint8_t id)
{
uint8_t tdata[] = {0x01, 0x00, 0x00};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.5 モーターゼロ位置リセット

説明：

1. 現在の位置をモーターのゼロ位置として設定します。
2. この命令はRAM内でのみ変更し、conf write命令と組み合わせてflashに保存する必要があります。
3. この命令を使用した約1秒後にconf write命令を送信することを推奨します。

```c
void rezero_pos(uint8_t id)
{
uint8_t tdata[] = {0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
HAL_Delay(1000); // It is recommended to delay for 1s
conf_write(id); // Save the settings
}
```

## 1.6 モーター設定保存（conf write）

説明：

1. RAM内のモーター設定をflashに保存します。
2. この命令を使用した後、モーターの電源を再投入することを推奨します。

```c
void conf_write(uint8_t id)
{
uint8_t tdata[] = {0x05, 0xb3, 0x02, 0x00, 0x00};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.7 モーターステータス読み取り

説明：

1. モーターの位置、速度、トルクデータを一度読み取ります。
2. モーターフィードバックステータス情報データの解析については、例の割り込み関数HAL_FDCAN_RxFifo0Callbackのコードを参照してください。

```c
* @brief Instruction to read motor position, speed, and torque
* @param id Motor ID
*/
void motor_read(CAN_HandleTypeDef *hcan, uint8_t id)
{
static uint8_t tdata[8] = {0x17, 0x01};
can_send(hcan, 0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.8 モーターステータスデータの定期返送

説明：

1. モーターの位置、速度、トルクデータを定期的に返送します。
2. 返送されるデータ形式は、0x17、0x01命令を使用して取得したものと同じです（すなわち、1.7位置ステータス読み取り）。
3. 周期の単位はmsです。
4. 最小周期は1msです。
5. データの定期返送を停止するには、周期を0に設定するか、モーターの電源を切ってください。
6. モーターフィードバックステータス情報データの解析については、例の割り込み関数HAL_FDCAN_RxFifo0Callbackのコードを参照してください。

```c
void timed_return_motor_status(uint8_t id, int16_t t_ms)
{
uint8_t tdata[] = {0x05, 0xb4, 0x02, 0x00, 0x00};
*(int16_t *)&tdata[3] = t_ms;
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 2. サンプル関数

### 2.1 ノーマルモード

#### 2.1.1 位置制御

```c
/**
* @brief Position control
* @param id Motor ID
* @param pos Position: Unit 0.0001 circle, e.g., pos = 5000 means rotating to the position of 0.5 circle.
* @param torque
*/
void motor_control_Pos(uint8_t id,int32_t pos,int16_t tqe)
{
uint8_t tdata[8] = {0x07, 0x07, 0x0A, 0x05, 0x00, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[2] = pos;
*(int16_t *)&tdata[6] = tqe;
uint32_t ext_id = (0x8000 | id);
CAN_Send_Msg(ext_id, tdata, 8);
}
```

#### 2.1.2 速度制御

```c
/**
* @brief Speed control
* @param id Motor ID
* @param vel Speed: Unit 0.00025 rotations/second, e.g., val = 1000 means 0.25 rotations/second
* @param tqe Torque
*/
uint8_t tdata[8] = {0x07, 0x07, 0x00, 0x80, 0x20, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[4] = vel;
*(int16_t *)&tdata[6] = tqe;
uint32_t ext_id = (0x8000 | id);
CAN_Send_Msg(ext_id, tdata, 8);
}
```

### 2.3 トルクモード

```c
/**
* @brief Torque mode
* @param id Motor ID
* @param tqe Torque
*/
void motor_control_tqe(uint8_t id,int32_t tqe)
{
uint8_t tdata[8] = {0x05, 0x13, 0x00, 0x80, 0x20, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[2] = tqe;
CAN_Send_Msg(0x8000 | id, tdata, 4);
}
```

### 2.4 協調制御モード

```c
/**
* @brief Motor position-speed-feedforward torque (maximum torque) control, int16 type
* @param id Motor ID
* @param pos Position: Unit 0.0001 circle, e.g., pos = 5000 means rotating to the position of 0.5 circle.
* @param val Speed: Unit 0.00025 rotations/second, e.g., val = 1000 means 0.25 rotations/second
* @param tqe Maximum torque
*/
void motor_control_pos_val_tqe(uint8_t id, int16_t pos, int16_t val, int16_t tqe)
{
static uint8_t tdata[8] = {0x07, 0x35, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
*(int16_t *)&tdata[2] = val;
*(int16_t *)&tdata[4] = tqe;
*(int16_t *)&tdata[6] = pos;
CAN_Send_Msg(0x8000 | id, tdata, 8);
}
```

### 2.5 DQ電圧モード

説明：

1. Q相電圧を制御できます。単位：0.1v、例：vol = 10はQ相電圧が1Vであることを意味します。

```c
void motor_control_volt(FDCAN_HandleTypeDef *hfdcanx, uint8_t id, int16_t vol)
static uint8_t tdata[7] = {0x01, 0x00, 0x08, 0x05, 0x1b, 0x00, 0x00};
*(int16_t *)&tdata[5] = vol;
can_send(hfdcanx, 0x8000 | id, tdata, sizeof(tdata));
}
```

### 2.6 DQ電流モード

説明：

1. Q相電流を制御できます。単位：0.1A、例：cur = 10はQ相電圧が1Aであることを意味します。

```c
void motor_control_cur(FDCAN_HandleTypeDef *hfdcanx, uint8_t id, int16_t cur)
{
static uint8_t tdata[7] = {0x01, 0x00, 0x09, 0x05, 0x1c, 0x00, 0x00};
*(int16_t *)&tdata[5] = cur;
can_send(hfdcanx, 0x8000 | id, tdata, sizeof(tdata));
}
```

### 2.7 ブレーキ

説明：

1. モーターブレーキ、モーターを回転させるとダンピングが発生します。

```c
/**
* @brief Motor brake
* @param fdcanHandle &hfdcanx
* @param motor id Motor ID
*/
void set_motor_brake(FDCAN_HandleTypeDef *fdcanHandle, uint8_t id)
static uint8_t cmd[] = {0x01, 0x00, 0x0f};
can_send(fdcanHandle, 0x8000 | id, cmd, sizeof(cmd));
}
```

### 2.8 停止

説明：

1. モーターが停止し、位置を維持する力を失います。

```c
/**
* @brief Stop the motor. Note: The motor must be stopped before resetting the zero position, otherwise it will be invalid.
* @param fdcanHandle &hfdcanx
* @param motor id Motor ID
*/
void set_motor_stop(FDCAN_HandleTypeDef *fdcanHandle, uint8_t id)
{
static uint8_t cmd[] = {0x01, 0x00, 0x00};
can_send(fdcanHandle, 0x8000 | id, cmd, sizeof(cmd));
}
```

## 3. 一般的なタイプの説明（単位）

### 3.1 電流（A）

| データタイプ | LSB | 実際（A） |
| --- | --- | --- |
| int8 | 1 | 1 |
| int16 | 1 | 0.1 |
| int32 | 1 | 0.001 |
| float | 1 | 1 |

### 3.2 電圧（V）

| データタイプ | LSB | 実際（V） |
| --- | --- | --- |
| int8 | 1 | 0.5 |
| int16 | 1 | 0.1 |
| int32 | 1 | 0.001 |
| float | 1 | 1 |

### 3.3 トルク（Nm）

真のトルク = k * tqe + d

#### 3.3.1 5046 トルク（Nm）

| データタイプ | 傾き（k） | オフセット（d） |
| --- | --- | --- |
| int16 | 0.005397 | -0.455107 |
| int32 | 0.000528 | -0.414526 |
| float | 0.533654 | -0.519366 |

#### 3.3.2 4538 トルク（Nm）

| データタイプ | 傾き（k） | オフセット（d） |
| --- | --- | --- |
| int16 | 0.004587 | -0.290788 |
| int32 | 0.000445 | -0.234668 |
| float | 0.493835 | -0.473398 |

#### 3.3.2 5047/6056（バイポーラ、36ギア比）トルク（Nm）

| データタイプ | 傾き（k） | オフセット（d） |
| --- | --- | --- |
| int16 | 0.004563 | -0.493257 |
| int32 | 0.000462 | -0.512253 |
| float | 0.465293 | -0.554848 |

#### 3.3.3 5047（ユニポーラ、9ギア比）トルク（Nm）

| データタイプ | 傾き（k） | オフセット（d） |
| --- | --- | --- |
| int16 | 0.005332 | -0.072956 |
| int32 | 0.000533 | -0.034809 |
| float | 0.547474 | -0.150232 |

### 3.4 温度（℃）

| データタイプ | LSB | 実際（℃） |
| --- | --- | --- |
| int8 | 1 | 1 |
| int16 | 1 | 0.1 |
| int32 | 1 | 0.001 |
| float | 1 | 1 |

### 3.5 時間（s）

| データタイプ | LSB | 実際（s） |
| --- | --- | --- |
| int8 | 1 | 0.01 |
| int16 | 1 | 0.001 |
| int32 | 1 | 0.000001 |
| float | 1 | 1 |

### 3.6 位置（回転数）

| データタイプ | LSB | 実際（回転数） | 実際（°） |
| --- | --- | --- | --- |
| int8 | 1 | 0.01 | 3.6 |
| int16 | 1 | 0.0001 | 0.036 |
| int32 | 1 | 0.00001 | 0.0036 |
| float | 1 | 1 | 360 |

### 3.7 速度（回転数/秒）

| データタイプ | LSB | 実際（回転数/秒） |
| --- | --- | --- |
| int8 | 1 | 0.01 |
| int16 | 1 | 0.00025 |
| int32 | 1 | 0.00001 |
| float | 1 | 1 |

### 3.8 加速度（回転数/秒²）

| データタイプ | LSB | 実際（回転数/秒²） |
| --- | --- | --- |
| int8 | 1 | 0.05 |
| int16 | 1 | 0.001 |
| int32 | 1 | 0.00001 |
| float | 1 | 1 |

### 3.9 PWMスケール（無単位）

| データタイプ | LSB | 実際 |
| --- | --- | --- |
| int8 | 1 | 1/127 - 0.007874 |
| int16 | 1 | 1/32767 - 0.000030519 |
| int32 | 1 | (1/2147483647) - 4.657^10 |
| float | 1 | 1 |

### 3.10 Kp、Kdスケール（無単位）

| データタイプ | LSB | 実際 |
| --- | --- | --- |
| int8 | 1 | 1/127 - 0.007874 |
| int16 | 1 | 1/32767 - 0.000030519 |
| int32 | 1 | (1/2147483647) - 4.657^10 |
| float | 1 | 1 |

</details>

## C++の例

C++制御には追加のCAN-USBドライバーボードが必要です。[livelybot_hardware_sdk](https://github.com/HighTorque-Robotics/livelybot_hardware_sdk)を参照してください

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/USB-CAN.png" />
</div>

## [reComputer Mini Jetson Orin](/ja/recomputer_jetson_mini_getting_started)でモーターを制御する

現在、市場でモーターに最も一般的に使用されているCAN通信インターフェースは、XT30(2+2)およびJSTコネクタです。私たちの**reComputer Mini Jetson Orin**および**reComputer Robotics**デバイスには、デュアルXT30(2+2)ポートとJSTベースのCANインターフェースが搭載されており、シームレスな互換性を提供します。

**reComputer Mini：**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>
**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

CANの使用に関する詳細については、この[wiki](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_hardware_interfaces_usage/#can)を参照してください。

### CANインターフェースの有効化

**ステップ1:** CAN0とCAN1を使用する前に、底面カバーを取り外し、両方の120Ω終端抵抗をON位置に設定してください。

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**ステップ2:** XT30(2+2)インターフェースを介してモーターをreComputer MiniのCAN0に直接接続してください。

:::tip
reComputer MiniのCANインターフェースのH/Lピンはモーターのものと逆になっているため、XT30 2+2ハーネスのH/L接続を逆にする必要があります。
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/reComputer_mini_control.png" />
</div>

:::danger
この電源ソリューションは、単一モーターの学習とテストにのみ適しています。マルチモーターアプリケーションの場合は、Jetsonの電源供給をモーターの電源供給から分離し、大電流がJetsonを直接通過することを避けるために、独立した電源ボードを設計してください。
:::

#### Jetson CAN通信の有効化

ターミナルを開き、以下のコマンドを入力してGPIOピンをハイにしてCAN0を有効化してください：

```bash
gpioset --mode=wait 0 43=0
```

JSTインターフェースのCAN1を使用する場合は、ピン106をハイにしてください：

```bash
gpioset --mode=wait 0 106=0
```

このターミナルを開いたままにして、新しいターミナルを作成してCAN0を設定してください：

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Python制御

- **Python環境のインストール**  

```bash
pip install python-can numpy
```

- **スクリプトディレクトリの作成**  

```bash
mkdir -p ~/hightorque/scripts
```

- **hightorque_motor.pyファイルの作成**

```bash
cd ~/hightorque/scripts
touch hightorque_motor.py
```

以下のコードをhightorque_motor.pyにコピーしてください。

<details>
<summary>hightorque_motor.py</summary>

```python
import can
import numpy as np
from time import sleep
from enum import IntEnum

class MotorType(IntEnum):
    """Motor Type Enum"""
    HT5046 = 0  # 5046 Motor
    HT4538 = 1  # 4538 Motor
    HT5047_36 = 2  # 5047/6056 Dual-pole 36 Reduction Ratio
    HT5047_9 = 3  # 5047 Single-pole 9 Reduction Ratio

class ControlMode(IntEnum):
    """Control Mode Enum"""
    NORMAL = 0  # Normal Mode
    TORQUE = 1  # Torque Mode
    COOPERATIVE = 2  # Cooperative Control Mode

class Motor:
    def __init__(self, motor_type: MotorType, slave_id: int, master_id: int):
        """
        Initialize Motor Object
        :param motor_type: Motor Type
        :param slave_id: Slave ID
        :param master_id: Master ID
        """
        self.motor_type = motor_type
        self.slave_id = slave_id
        self.master_id = master_id
        self.position = 0
        self.velocity = 0
        self.torque = 0
        self.temperature = 0

        # Set Torque Conversion Parameters Based on Motor Type
        if motor_type == MotorType.HT5046:
            self.torque_k = 0.005397
            self.torque_d = -0.455107
        elif motor_type == MotorType.HT4538:
            self.torque_k = 0.004587
            self.torque_d = -0.290788
        elif motor_type == MotorType.HT5047_36:
            self.torque_k = 0.004563
            self.torque_d = -0.493257
        elif motor_type == MotorType.HT5047_9:
            self.torque_k = 0.005332
            self.torque_d = -0.072956

    def update_status(self, position: float, velocity: float, torque: float, temperature: float):
        """Update Motor Status"""
        self.position = position
        self.velocity = velocity
        self.torque = torque
        self.temperature = temperature

class MotorControl:
    def __init__(self, channel: str, bitrate: int = 1000000):
        """
        Initialize Motor Controller
        :param channel: CAN Channel
        :param bitrate: CAN Baud Rate
        """
        self.bus = can.interface.Bus(channel=channel, bustype='socketcan', bitrate=bitrate)
        self.motors = {}

    def add_motor(self, motor: Motor):
        """Add Motor to Controller"""
        self.motors[motor.slave_id] = motor

    def __send_data(self, motor_id: int, data: bytes):
        """
        Send CAN Data
        :param motor_id: Motor ID
        :param data: Data to Send
        """
        msg = can.Message(
            arbitration_id=0x8000 | motor_id,
            data=data,
            is_extended_id=True
        )
        self.bus.send(msg)

    def enable(self, motor: Motor):
        """Enable Motor"""
        data = bytes([0x01, 0x00, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def disable(self, motor: Motor):
        """Disable Motor"""
        data = bytes([0x01, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def set_zero_position(self, motor: Motor):
        """Set Motor Zero Position"""
        data = bytes([0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a])
        self.__send_data(motor.slave_id, data)
        sleep(1.0)  # Wait 1 second
        self.save_settings(motor)

    def save_settings(self, motor: Motor):
        """Save Motor Settings to Flash"""
        data = bytes([0x05, 0xb3, 0x02, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)

    def control_position(self, motor: Motor, position: float, torque: float):
        """
        Position Control
        :param motor: Motor Object
        :param position: Target Position (Unit: 0.0001 turns)
        :param torque: Torque Limit
        """
        pos_bytes = int(position).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07]) + pos_bytes + bytes([0x80, 0x00]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_velocity(self, motor: Motor, velocity: float, torque: float):
        """
        Velocity Control
        :param motor: Motor Object
        :param velocity: Target Velocity (Unit: 0.00025 turns/second)
        :param torque: Torque Limit
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07, 0x00, 0x80]) + vel_bytes + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_torque(self, motor: Motor, torque: float):
        """
        Torque Control
        :param motor: Motor Object
        :param torque: Target Torque
        """
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x05, 0x13]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_cooperative(self, motor: Motor, position: float, velocity: float, torque: float):
        """
        Cooperative Control (Position, Velocity, Torque Simultaneous Control)
        :param motor: Motor Object
        :param position: Target Position (Unit: 0.0001 turns)
        :param velocity: Target Velocity (Unit: 0.00025 turns/second)
        :param torque: Torque Limit
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        pos_bytes = int(position).to_bytes(2, 'little')
        data = bytes([0x07, 0x35]) + vel_bytes + tqe_bytes + pos_bytes
        self.__send_data(motor.slave_id, data)

    def read_motor_status(self, motor: Motor):
        """Read Motor Status"""
        data = bytes([0x17, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.01)  # Wait for Data Reception

        # Receive and Parse Data
        msg = self.bus.recv(timeout=0.1)
        if msg and msg.arbitration_id == (0x8000 | motor.slave_id):
            data = msg.data
            if len(data) >= 8 and data[0] == 0x27:
                position = int.from_bytes(data[2:4], 'little')
                velocity = int.from_bytes(data[4:6], 'little')
                torque = int.from_bytes(data[6:8], 'little')
                motor.update_status(position, velocity, torque, 0)

    def periodic_read_status(self, motor: Motor, period_ms: int):
        """
        Set Periodic Motor Status Reading
        :param motor: Motor Object
        :param period_ms: Period (milliseconds)
        """
        period_bytes = int(period_ms).to_bytes(2, 'little')
        data = bytes([0x05, 0xb4, 0x02, 0x00]) + period_bytes
        self.__send_data(motor.slave_id, data)

    def close(self):
        """Close CAN Bus"""
        self.bus.shutdown() 
```

</details>

- **hightorque_test.pyファイルの作成**

以下のコードをhightorque_test.pyにコピーしてください。

<details>
<summary>hightorque_test.py</summary>

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time
import math
import numpy as np
from hightorque_motor import Motor, MotorControl, MotorType

# Configuration Parameters
NUM_MOTORS = 2  # Number of Motors to Control
CAN_INTERFACE = "can0"  # CAN Interface Name
CAN_BITRATE = 1000000  # CAN Baud Rate
MOTOR_TYPE = MotorType.HT5047_36  # Motor Type

# Sine Wave Parameters
FREQUENCY = 0.1  # Frequency (Hz)
AMPLITUDE = 2500  # Amplitude (0.0001 turns)
OFFSET = 2500    # Offset to Ensure Positive Position
DURATION = 60.0  # Run Duration (s)

def main():
    # Create Motor Control Object
    controller = MotorControl(channel=CAN_INTERFACE, bitrate=CAN_BITRATE)

    try:
        # Create and Add Motors
        motors = []
        for i in range(NUM_MOTORS):
            motor = Motor(MOTOR_TYPE, slave_id=i+1, master_id=0)
            controller.add_motor(motor)
            motors.append(motor)

            # Enable Motor
            print(f"Enabling Motor {i+1}...")
            controller.enable(motor)
            time.sleep(1)  # Wait for Motor Enable

            # Set Zero Position
            print(f"Setting Motor {i+1} Zero Position...")
            controller.set_zero_position(motor)
            time.sleep(1)

            # Save Settings to Flash
            print(f"Saving Motor {i+1} Settings...")
            controller.save_settings(motor)
            time.sleep(1)

            # Read Initial Status
            controller.read_motor_status(motor)
            print(f"Motor {i+1} Initial Status:")
            print(f"Position: {motor.position * 0.0001:.4f} turns")
            print(f"Velocity: {motor.velocity * 0.00025:.4f} turns/second")
            print(f"Torque: {motor.torque * motor.torque_k + motor.torque_d:.4f} Nm")

        # Start Sine Wave Position Control
        print("\nStarting Sine Wave Position Control...")
        start_time = time.time()
        while time.time() - start_time < DURATION:
            current_time = time.time() - start_time

            # Calculate Sine Wave Position with Offset to Ensure Positive
            position = AMPLITUDE * math.sin(2 * math.pi * FREQUENCY * current_time) + OFFSET

            # Control All Motors
            for motor in motors:
                # Use Position Control Mode with Max Torque of 1000
                controller.control_position(motor, position=int(position), torque=1000)

            # Control Frequency
            time.sleep(0.001)  # 1kHz Control Frequency

    except KeyboardInterrupt:
        print("\nProgram Interrupted by User")
    finally:
        # Disable All Motors
        for motor in motors:
            print(f"Disabling Motor {motor.slave_id}...")
            controller.disable(motor)

        # Close CAN Bus
        controller.close()
        print("CAN Bus Closed")

if __name__ == "__main__":
    main() 
```

</details>

- **hightorque_test.py を実行**

```bash
python hightorque_test.py
```

<div class="video-container">
<iframe width="960" height="640" src="https://www.youtube.com/embed/iwE-8klCB2Q?si=QYcVnxF8YpYSYxvl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！最高の体験をしていただけるよう、様々なサポートチャンネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

<style>{`
/* 導航容器 */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f8f9fa 100%);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card-container {
  margin: 0.1rem 0;
  padding: 0.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* Dark模式 - 導航容器 */
html[data-theme='dark'] .quick-nav-container {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

/* 導航主体 */
.quick-nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap; /* 関键属性 */
  justify-content: left; /* 可选居中 */
}

/* 導航項 */
.nav-item {
  position: relative;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(20% - 20px);
  margin-bottom: 20px;
  align-items: center;
  text-decoration: none !important;
  color: #333;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  z-index: 1;
}

/* Dark模式 - 導航項 */
html[data-theme='dark'] .nav-item {
  color: #e5e7eb;
  background: #374151;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* 图标样式 */
.nav-item .icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;
}

/* 文字样式 */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* 悬浮特效 */
.nav-item .hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
  border-radius: 12px;
  transition: height 0.3s ease;
  z-index: -1;
}

/* 悬浮动画 */
.nav-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  color: white;
}

/* Dark模式 - 悬浮动画 */
html[data-theme='dark'] .nav-item:hover {
  box-shadow: 0 6px 12px rgba(0,0,0,0.6);
  color: white;
}

.nav-item:hover .icon {
  transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
  height: 100%;
}

.nav-item img {
  pointer-events: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .quick-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-item {
    flex-direction: row;
    justify-content: start;
    padding: 0.8rem 1rem;
  }
  .nav-item .icon {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }
}
`}</style>

<style>{`
/* 内容卡片增强版样式 */
.nav-grid {
  display: block;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

.category-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 1;
}

/* Dark模式 - 内容卡片 */
html[data-theme='dark'] .category-card {
  background: #374151;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
  color: #e5e7eb;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* 悬浮特效 */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark模式 - 悬浮特效 */
html[data-theme='dark'] .category-card:hover {
  box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: -1;
}

/* Dark模式 - 悬浮光效 */
html[data-theme='dark'] .category-card:hover::after {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* 链接动画 */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

/* Dark模式 - 链接 */
html[data-theme='dark'] .category-card a {
  color: #d1d5db;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

/* Dark模式 - 链接悬浮 */
html[data-theme='dark'] .category-card a:hover {
  color: #60a5fa;
}

.category-card a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4a90e2;
  transition: width 0.3s;
}

/* Dark模式 - 链接下划线 */
html[data-theme='dark'] .category-card a::after {
  background: #60a5fa;
}

.category-card a:hover::after {
  width: 100%;
}

/* 标签样式增强 */
.tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  transition: all 0.3s;
}

.stable {
  background: #e6f4ea;
  color: #137333;
  box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark模式 - Stable标签 */
html[data-theme='dark'] .stable {
  background: #065f46;
  color: #a7f3d0;
  box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended {
  background: #fce8e6;
  color: #a50e0e;
  box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark模式 - Recommended标签 */
html[data-theme='dark'] .recommended {
  background: #7f1d1d;
  color: #fca5a5;
  box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark模式 - 点击效果 */
html[data-theme='dark'] .category-card:active {
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    width: 100%;
    margin-top: 0.5rem; /* 卡片紧贴标题 */
  }
}

/* Dark模式 - 标题文字 */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
  color: #f9fafb;
}

/* Dark模式 - 正文文字 */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
  color: #e5e7eb;
}

/* Dark模式 - 引用块 */
html[data-theme='dark'] blockquote {
  color: #9ca3af;
  border-left-color: #4b5563;
}
`}</style>
