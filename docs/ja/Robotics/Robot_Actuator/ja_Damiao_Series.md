---
description: このwikiはDamiaoシリーズモーターのチュートリアルを提供します。
title: Damiaoシリーズモーター
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /ja/damiao_series
last_update:
  date: 06/1/2025
  author: ZhuYaoHui
---

# Damiao 43シリーズモーター入門ガイド

この記事では、Damiao 43シリーズモーターの使い始め方と、reComputer Mini Jetson OrinでC++とPythonを使用する方法を紹介します。

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.png" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 仕様

以下は、すべてのモーターモデルのパラメータを記載した完成版の表です：

 モーターモデル | 定格トルク (Nm) | ピークトルク (Nm) | 無負荷速度 (rpm) | 定格速度 (rpm) | 減速比 | サイズ 直径*高さ (mm) | 重量 (g) | 供給電圧 (V) | 推奨電圧範囲 (V) | 定格相電流 (A) | ピーク相電流 (A) | 定格電力 (W) | 極対数 | 通信方式 | エンコーダタイプ | 設置 | 相抵抗 (Ω) | 相インダクタンス (uH) | 磁束鎖交 (Wb) | 回転慣性 (Kg*m²) | トルク定数 (Nm/A) | ドライブ最大電流 (A) | 速度ループKP | デフォルトPMAX (rad) | デフォルトVMAX (rad/s) | デフォルトTMAX (Nm) | 速度定数 |
------------|------------------|-----------------|---------------------|------------------|----------------|--------------------------|-----------|-------------------|-----------------------------|------------------------|----------------------|----------------|-----------|---------------------|-------------|-------------|----------------------|---------------------|------------------|--------------------------|----------------------|---------------------|--------------|------------------|------------------|----------------|---------------|
J4310-2EC V1.1 | 3 | 7 | 200 | 120 | 10 | 57 * 46 | ~300 | 24 | 15-32 | 3.7 | 7.2 | 37.699112 | 14 | CAN, CANFD | 磁気、デュアル | 内蔵 | 0.85 | 345 | 0.0045 | 1.80E-05 | 0.945 | 10.261194 | 3.72E-04 | 12.5 | 30 | 10 | 87.512523 |
J4310-2EC V1.1(48V) | 3 | 7 | 400 | 120 | 10 | 57 * 46 | ~300 | 48 | 15-52 | 3.7 | 7.2 | 37.699112 | 14 | CAN, CANFD | 磁気、デュアル | 内蔵 | 0.85 | 345 | 0.0045 | 1.80E-05 | 0.945 | 10.261194 | 3.72E-04 | 12.5 | 30 | 10 | 87.512523 |
J4340-2EC | 9 | 27 | 52.5 | 36 | 40 | 57 * 53.3 | ~362 | 24 | 15-32 | 3 | 8 | 33.929201 | 14 | CAN, CANFD | 磁気、デュアル | 内蔵 | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261194 | 9.59E-05 | 12.5 | 8 | 28 | 81.197186 |
J4340-2EC(48V) | 9 | 27 | 100 | 36 | 40 | 57 * 53.3 | ~362 | 48 | 15-52 | 2.5 | 9 | 33.929201 | 14 | CAN, CANFD | 磁気、デュアル | 内蔵 | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261194 | 9.59E-05 | 12.5 | 8 | 28 | 81.197186 |
J4340P-2EC | 9 | 27 | 52.5 | 36 | 40 | 57 * 56.5 | ~375 | 24 | 15-32 | 3 | 8 | 33.929201 | 14 | CAN, CANFD | 磁気、デュアル | 内蔵 | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261194 | 9.59E-05 | 12.5 | 8 | 28 | 81.197186 |
J4340P-2EC(48V) | 9 | 27 | 100 | 36 | 40 | 57 * 56.5 | ~375 | 48 | 15-52 | 2.5 | 9 | 33.929201 | 14 | CAN, CANFD | 磁気、デュアル | 内蔵 | 0.88 | 360 | 0.00485 | 2.00E-05 | 4.074 | 10.261194 | 9.59E-05 | 12.5 | 8 | 28 | 81.197186 |

## 主な特徴

1. **CAN BUS & CANFD**
2. **デュアルエンコーダ**
3. **高トルク密度**
4. **高精度**
5. **中空設計**

## 入門ガイド

### 使用前の環境準備

**PCのWindowsシステム**

- [Damiaoデバッグツール](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/Debugging_Tools_v.1.6.8.8.exe)をダウンロードします。
- [USB2CANツール](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/USB2CAN_2.0.0.3.exe)をダウンロードします

### 回路をPCに接続

CAN通信方式を使用するため、WindowsのホストコンピュータでデバッグするためにUSB-CANインターフェースが追加で必要です。

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/circcuit.jpg" />
</div>

ここでは、モーター用に別途24V電源を提供し、USBをコンピュータに接続する必要があります。

### `Debugging_Tools_v.1.6.8.8.exe`を使用してモーターをテスト

アプリの下部で中国語と英語を切り替えることができます。

| **シリアルポート接続パラメータの設定** | **モーターに接続** | **パラメータ読み取り** | **CAN ID設定** |**パラメータ書き込み** |
|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/1.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/2.png) | ![fig3](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/3.png) | ![fig4](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/4.png) |![fig5](https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/5.png) |
| シリアルポートには、コンピュータが自動認識したポートを使用し、その他の設定はすべてデフォルトのままにします。 | "Open Port"ボタンをクリックすると、ホストコンピュータに自動接続されます。初回接続の場合、ダイアログボックスにモーター情報が表示されます|"Set Parameters"セクションで"Read Param"をクリックすると、モーターの現在の詳細情報と動作モードが表示されます。|ここで、まずCAN IDを設定してください。 |設定後、"Write Param"をクリックしてパラメータを更新します。 |

:::tip

**​CAN_ID**: ドライブがCANコマンドを受信するために使用するフレームID（16進数）。

**​Master ID**: ドライブがフィードバックを送信するために使用するフレームID（16進数）。

​Master IDはホストIDです。各モーターに固有のMaster IDを設定することをお勧めします。

良い慣行は、​Master IDを​CAN_IDより​0x10高く設定することです（例：CAN_ID = 0x01の場合、Master ID = 0x11）。

​例：

​モーター1: CAN_ID = 0x01, Master ID = 0x11

​モーター2: CAN_ID = 0x02, Master ID = 0x12

​Master IDを0x00に設定しないでください！！！
:::

#### **(1) 基本パラメータ**  

- **NPP**: モーターの極対数、キャリブレーションによって自動決定されます。  
- **UV**: 供給電圧がしきい値（最小**15V**）を下回ると、ドライブは動作を停止します。  
- **OV**: 上限電圧を設定します。ドライブは起動時に供給電圧をチェックし、超過した場合は動作を無効にします（起動時に一度だけチェック）。  
- **Acc/Dec**: **非MITモード**で速度変化の割合を制限するために使用されます。  
- **GR(Gear Ratio)**: 出力速度/位置に影響し、間接的にトルクフィードバックに影響します。浮動小数点値をサポートします。  
- **OT**: コイル温度しきい値（推奨≤**100°C**）。これを超えると故障モードがトリガーされます（モーターを無効にしてエラーを報告）。  
- **CAN_ID**: CANコマンドを受信するためのフレームID（16進数）。  
- **Master ID**: ドライブフィードバック用のフレームID（16進数）。ベストプラクティス：`MasterID = CAN_ID + 0x10`に設定（例：`0x01` → `0x11`）。**`0x00`に設定しないでください。**  
- **CAN Timeout**: タイムアウト期間を定義する32ビット整数（単位：50µsサイクル）。この間隔内にCANコマンドが検出されない場合、モーターは保護モードに入ります。  
- **Speed Limit** (*速度モードのみ*): 減速前の最大速度（単位：**rad/s**）。  
- **Overcurrent**: 最大相電流制限（パーセンテージ）。  

#### **(2) モーターパラメータ**  

- ドライブによって自動識別されます。**ドライブボードを交換する際は再キャリブレーションが必要です**。ドライブに永続的に保存されます。  

#### **(3) コマンドスケーリング（振幅設定）**  

- **PMAX**: **MITモード**では、コマンド入力をスケーリングします；他のモードでは、フィードバック出力をスケーリングします。マッピングルールについてはCANプロトコルを参照してください。  
- **VMAX**: PMAXと同じです。  
- **TMAX**: PMAXと同じです。  
- **KT_OUT**: モータートルク定数。モーターパラメータが正確に識別されている場合は**0**に設定します。  
- **Gear Ratio Coefficient**: ギアのトルク伝達比。  

> **注意**: ドライブは**MIT通信プロトコル形式**を使用します。  

#### **(4) 制御設定**  

- **制御モード**:  
  - **MITモード**  
  - **位置-速度モード**（台形加減速）  
  - **速度モード**  
- **Current Bandwidth**: 電流ループゲイン（デフォルト：`1000`）。  
- **Speed KP/KI, Position KP/KI**: 速度および位置ループのPIDパラメータ。  

### MIT制御モード

**1. MITトルク制御モード:**

1. Set Parametersセクションで、​Read Paramをクリックして現在のモーターパラメータを表示します。
2. ​Control ModeをMIT Modeに設定します。
3. 設定された​CAN IDを確認します。
4. ​Write Paramをクリックしてすべての設定を保存します。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/7.png" />
</div>

5. ​Testタブで、​**"Enable Motor"**ボタン（Ente）をクリックします。
6. ​MIT Controlセクションで:
    - ​Torque (Nm)を​1に設定します。
    - ​Update → ​Sendをクリックします。

モーターが回転を開始します。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/6.png" />
</div>

CANデータ（16進数形式）をコピーして、シリアルポートデバッグツールを使用してモーターを駆動することもできます。

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/8.png" />
</div>

**2. MIT速度制御モード:**

1. ​Testタブで、​**"Enable Motor"**ボタン（Ente）をクリックします。
2. ​MIT Controlセクションで:
    - Vel (rad/s)を​5に設定します。
    - KD (N*s/r)を​1に設定します。
    - ​Update → ​Sendをクリックします。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/9.png" />
</div>

モーターが回転を開始します。CANデータ（16進数形式）をコピーして、シリアルポートデバッグツールを使用してモーターを駆動することもできます。

**3. MIT位置制御モード:**

1. ​Testタブで、​**"Enable Motor"**ボタン（Ente）をクリックします。
2. ​**"SaveZero"**を使用して現在の位置をゼロ点として設定できます。
3. ​MIT Controlセクションで:
    - Pos (rad)を3.14に設定します。
    - KP (N/r)を​2に設定します。
    - KD (N*s/r)を​1に設定します。
    - Update → Send をクリックします。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/10.png" />
</div>

モーターが回転を開始します。CAN データ（16進形式）をコピーして、シリアルポートデバッグツールを使用してモーターを駆動することもできます。

### 速度制御モード

1. Set Parameters セクションで、Read Param をクリックして現在のモーターパラメータを表示します。
2. Control Mode を Vel Mode に設定します。
3. 設定された CAN ID を確認します。
4. Write Param をクリックしてすべての設定を保存します。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/11.png" />
</div>

5. Test タブで、**"Enable Motor"** ボタン（Ente）をクリックします。
6. Vel Control セクションで：
    - Vel (rad/s) を 5 に設定します。
    - Update → Send をクリックします。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/12.png" />
</div>

モーターが回転を開始します。CAN データ（16進形式）をコピーして、シリアルポートデバッグツールを使用してモーターを駆動することもできます。

### 位置制御モード

1. Set Parameters セクションで、Read Param をクリックして現在のモーターパラメータを表示します。
2. Control Mode を Pos Mode に設定します。
3. 設定された CAN ID を確認します。
4. Write Param をクリックしてすべての設定を保存します。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/13.png" />
</div>

5. Test タブで、**"Enable Motor"** ボタン（Ente）をクリックします。
6. Pos Control セクションで：
    - Pos を 3.14 に設定します。
    - Vel (rad/s) を 5 に設定します。
    - Update → Send をクリックします。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/14.png" />
</div>

モーターが回転を開始します。CAN データ（16進形式）をコピーして、シリアルポートデバッグツールを使用してモーターを駆動することもできます。

## [reComputer Mini Jetson Orin](/ja/recomputer_jetson_mini_getting_started) を使用したモーター制御

現在、市場でモーター用の最も一般的な CAN 通信インターフェースは **XT30 (2+2)** と **JST コネクタ** を使用しています。私たちの **reComputer Mini Jetson Orin** と **reComputer Robotics** デバイスは **デュアル XT30 (2+2) ポート** と **JST ベースの CAN インターフェース** を搭載しており、シームレスな互換性を提供します。

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

CAN の使用に関する詳細については、この [wiki](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_hardware_interfaces_usage/#can ) を参照してください。

### CAN インターフェースの有効化

**ステップ1:** CAN0 と CAN1 を使用する前に、底面カバーを取り外し、両方の 120Ω 終端抵抗を ON 位置に設定してください。

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**ステップ2:** XT30 (2+2) インターフェースを介してモーターを reComputer Mini CAN0 に直接接続します。

:::tip
reComputer Mini の CAN インターフェースでは、H/L ピンがモーターの H/L と比較して反転しています。そのため、XT30 2+2 ケーブルハーネスで H/L 接続を逆にする必要があります。
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/15.jpg" />
</div>

:::danger
この電源は単一モーターの学習とテスト専用です。複数のモーターの場合は、別途電源ボードを設計し、Jetson の電源をモーター電源から分離して、高電流が Jetson を直接通過することを避けてください。
:::

#### Jetson CAN 通信の有効化

ターミナルを開き、以下のコマンドを入力して GPIO ピンをハイにプルし、CAN0 を有効化します：

```bash
gpioset --mode=wait 0 43=0
```

JST インターフェース CAN1 を使用している場合は、ピン 106 をハイにプルします。

```bash
gpioset --mode=wait 0 106=0
```

このターミナルを開いたまま、新しいターミナルを起動し、CAN0 を設定します。

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### C++ サンプル

#### インストールとコンパイル

- **CMake のインストール**

```shell
sudo apt update  
sudo apt install cmake  
```  

- **CAN ツールのインストール**

```shell
sudo apt install can-utils  
```  

- **プログラムのダウンロードとコンパイル**

1. ワークスペースを作成してリポジトリをクローンします：

```shell
mkdir -p ~/orin_ws/src  
cd ~/orin_ws/src  
git clone https://gitee.com/xauter/orin-control.git  
```  

2. コンパイル：

```shell
cd ~/orin_ws/src/orin-control/dm_hw  
mkdir build  
cd build  
cmake ..  
make  
```  

#### 使用方法

1. **CAN デバイスの確認**

ターミナルを開いて実行します：

```shell
ip -brief link | grep can  
```  

2. **プログラムの実行**

`build` フォルダで実行します：

```shell
cd ~/orin_ws/src/orin-control/dm_hw/build  
./dm_main  
```  

モーターが **緑色** に点灯し、**正弦波速度** で回転します。

### Python を使用した制御

- **Python 環境のインストール**

```bash
pip install python-can numpy
```

- **`~/damiao/scripts` ディレクトリの下に scripts という名前のフォルダを作成して、Python スクリプトを保存します。**

```bash
mkdir -p ~/damiao/scripts
```

- **damiao_motor.py ファイルの作成**

```bash
cd ~/damiao/scripts
touch damiao_motor.py
```

以下のコードを damiao_motor.py にコピーします

<details>

<summary>damiao_motor.py</summary>

```python
## This is a derivative of the following software.
## https://github.com/cmjang/DM_Control_Python/blob/main/DM_CAN.py

import can
from time import sleep, time
import numpy as np
from enum import IntEnum
from struct import unpack
from struct import pack

class Motor:
    def __init__(self, MotorType, SlaveID, MasterID):
        """
        define Motor object 定义电机对象
        :param MotorType: Motor type 电机类型
        :param SlaveID: CANID 电机ID
        :param MasterID: MasterID 主机ID 建议不要设为0
        """
        self.Pd = float(0)
        self.Vd = float(0)
        self.goal_position = float(0)
        self.goal_tau = float(0)
        self.state_q = float(0)
        self.state_dq = float(0)
        self.state_tau = float(0)
        self.state_tmos = int(0)
        self.state_trotor = int(0)
        self.SlaveID = SlaveID
        self.MasterID = MasterID
        self.MotorType = MotorType
        self.isEnable = False
        self.NowControlMode = Control_Type.MIT
        self.temp_param_dict = {}

    def recv_data(self, q: float, dq: float, tau: float, tmos: int, trotor: int):
        self.state_q = q
        self.state_dq = dq
        self.state_tau = tau
        self.state_tmos = tmos
        self.state_trotor = trotor

    def getPosition(self):
        """
        get the position of the motor 获取电机位置
        :return: the position of the motor 电机位置
        """
        return self.state_q

    def getVelocity(self):
        """
        get the velocity of the motor 获取电机速度
        :return: the velocity of the motor 电机速度
        """
        return self.state_dq

    def getTorque(self):
        """
        get the torque of the motor 获取电机力矩
        :return: the torque of the motor 电机力矩
        """
        return self.state_tau

    def getParam(self, RID):
        """
        get the parameter of the motor 获取电机内部的参数，需要提前读取
        :param RID: DM_variable 电机参数
        :return: the parameter of the motor 电机参数
        """
        if RID in self.temp_param_dict:
            return self.temp_param_dict[RID]
        else:
            return None


class MotorControl:
    #send_data_frame = np.array(
    #    [0x55, 0xAA, 0x1e, 0x03, 0x01, 0x00, 0x00, 0x00, 0x0a, 0x00, 0x00, 0x00, 0x00, 0, 0, 0, 0, 0x00, 0x08, 0x00,
    #     0x00, 0, 0, 0, 0, 0, 0, 0, 0, 0x00], np.uint8)
    #                4310           4310_48        4340           4340_48
    Limit_Param = [[12.5, 30, 10], [12.5, 50, 10], [12.5, 8, 28], [12.5, 10, 28],
                   # 6006           8006           8009            10010L         10010
                   [12.5, 45, 20], [12.5, 45, 40], [12.5, 45, 54], [12.5, 25, 200], [12.5, 20, 200],
                   # H3510            DMG62150      DMH6220
                   [12.5 , 280 , 1],[12.5 , 45 , 10],[12.5 , 45 , 10]]

    def __init__(self, channel: str, bitrate: int = 1000000):
        """
        define MotorControl object 定义电机控制对象
        :param serial_device: serial object 串口对象
        """
        #self.serial_ = serial_device
        self.motors_map = dict()
        self.data_save = bytes()  # save data
        #if self.serial_.is_open:  # open the serial port
        #    print("Serial port is open")
        #    serial_device.close()
        #self.serial_.open()
        self.canbus = can.interface.Bus(channel=channel, interface='socketcan', bitrate=bitrate)

        #print("can is open")


    def controlMIT(self, DM_Motor, kp: float, kd: float, q: float, dq: float, tau: float):
        """
        MIT Control Mode Function 达妙电机MIT控制模式函数
        :param DM_Motor: Motor object 电机对象
        :param kp: kp
        :param kd:  kd
        :param q:  position  期望位置
        :param dq:  velocity  期望速度
        :param tau: torque  期望力矩
        :return: None
        """
        if DM_Motor.SlaveID not in self.motors_map:
            print("controlMIT ERROR : Motor ID not found")
            return
        kp_uint = float_to_uint(kp, 0, 500, 12)
        kd_uint = float_to_uint(kd, 0, 5, 12)
        MotorType = DM_Motor.MotorType
        Q_MAX = self.Limit_Param[MotorType][0]
        DQ_MAX = self.Limit_Param[MotorType][1]
        TAU_MAX = self.Limit_Param[MotorType][2]
        q_uint = float_to_uint(q, -Q_MAX, Q_MAX, 16)
        dq_uint = float_to_uint(dq, -DQ_MAX, DQ_MAX, 12)
        tau_uint = float_to_uint(tau, -TAU_MAX, TAU_MAX, 12)
        data_buf = np.array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        data_buf[0] = (q_uint >> 8) & 0xff
        data_buf[1] = q_uint & 0xff
        data_buf[2] = dq_uint >> 4
        data_buf[3] = ((dq_uint & 0xf) << 4) | ((kp_uint >> 8) & 0xf)
        data_buf[4] = kp_uint & 0xff
        data_buf[5] = kd_uint >> 4
        data_buf[6] = ((kd_uint & 0xf) << 4) | ((tau_uint >> 8) & 0xf)
        data_buf[7] = tau_uint & 0xff
        self.__send_data(DM_Motor.SlaveID, data_buf)
        self.recv()  # receive the data from serial port

    def control_delay(self, DM_Motor, kp: float, kd: float, q: float, dq: float, tau: float, delay: float):
        """
        MIT Control Mode Function with delay 达妙电机MIT控制模式函数带延迟
        :param DM_Motor: Motor object 电机对象
        :param kp: kp
        :param kd: kd
        :param q:  position  期望位置
        :param dq:  velocity  期望速度
        :param tau: torque  期望力矩
        :param delay: delay time 延迟时间 单位秒
        """
        self.controlMIT(DM_Motor, kp, kd, q, dq, tau)
        sleep(delay)

    def control_Pos_Vel(self, Motor, P_desired: float, V_desired: float):
        """
        control the motor in position and velocity control mode 电机位置速度控制模式
        :param Motor: Motor object 电机对象
        :param P_desired: desired position 期望位置
        :param V_desired: desired velocity 期望速度
        :return: None
        """
        if Motor.SlaveID not in self.motors_map:
            print("Control Pos_Vel Error : Motor ID not found")
            return
        motorid = 0x100 + Motor.SlaveID
        data_buf = np.array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        P_desired_uint8s = float_to_uint8s(P_desired)
        V_desired_uint8s = float_to_uint8s(V_desired)
        data_buf[0:4] = P_desired_uint8s
        data_buf[4:8] = V_desired_uint8s
        self.__send_data(motorid, data_buf)
        self.recv()  # receive the data from serial port

    def control_Vel(self, Motor, Vel_desired):
        """
        control the motor in velocity control mode 电机速度控制模式
        :param Motor: Motor object 电机对象
        :param Vel_desired: desired velocity 期望速度
        """
        if Motor.SlaveID not in self.motors_map:
            print("control_VEL ERROR : Motor ID not found")
            return
        motorid = 0x200 + Motor.SlaveID
        data_buf = np.array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        Vel_desired_uint8s = float_to_uint8s(Vel_desired)
        data_buf[0:4] = Vel_desired_uint8s
        self.__send_data(motorid, data_buf)
        self.recv()  # receive the data from serial port

    def control_pos_force(self, Motor, Pos_des: float, Vel_des, i_des):
        """
        control the motor in EMIT control mode 电机力位混合模式
        :param Pos_des: desired position rad  期望位置 单位为rad
        :param Vel_des: desired velocity rad/s  期望速度 为放大100倍
        :param i_des: desired current rang 0-10000 期望电流标幺值放大10000倍
        电流标幺值：实际电流值除以最大电流值，最大电流见上电打印
        """
        if Motor.SlaveID not in self.motors_map:
            print("control_pos_vel ERROR : Motor ID not found")
            return
        motorid = 0x300 + Motor.SlaveID
        data_buf = np.array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        Pos_desired_uint8s = float_to_uint8s(Pos_des)
        data_buf[0:4] = Pos_desired_uint8s
        Vel_uint = np.uint16(Vel_des)
        ides_uint = np.uint16(i_des)
        data_buf[4] = Vel_uint & 0xff
        data_buf[5] = Vel_uint >> 8
        data_buf[6] = ides_uint & 0xff
        data_buf[7] = ides_uint >> 8
        self.__send_data(motorid, data_buf)
        self.recv()  # receive the data from serial port

    def enable(self, Motor):
        """
        enable motor 使能电机
        最好在上电后几秒后再使能电机
        :param Motor: Motor object 电机对象
        """
        self.__control_cmd(Motor, np.uint8(0xFC))
        sleep(0.1)
        self.recv()  # receive the data from serial port

    def enable_old(self, Motor ,ControlMode):
        """
        enable motor old firmware 使能电机旧版本固件，这个是为了旧版本电机固件的兼容性
        可恶的旧版本固件使能需要加上偏移量
        最好在上电后几秒后再使能电机
        :param Motor: Motor object 电机对象
        """
        data_buf = np.array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xfc], np.uint8)
        enable_id = ((int(ControlMode)-1) << 2) + Motor.SlaveID
        self.__send_data(enable_id, data_buf)
        sleep(0.1)
        self.recv()  # receive the data from serial port

    def disable(self, Motor):
        """
        disable motor 失能电机
        :param Motor: Motor object 电机对象
        """
        self.__control_cmd(Motor, np.uint8(0xFD))
        sleep(0.1)
        self.recv()  # receive the data from serial port

    def set_zero_position(self, Motor):
        """
        set the zero position of the motor 设置电机0位
        :param Motor: Motor object 电机对象
        """
        self.__control_cmd(Motor, np.uint8(0xFE))
        sleep(0.1)
        self.recv()  # receive the data from serial port

    def recv(self):
        # 把上次没有解析完的剩下的也放进来
        # data_recv = b''.join([self.data_save, self.serial_.read_all()])
        #data_recv = b''.join([self.data_save, self.canbus.recv()])


        # packets = self.__extract_packets(data_recv)
        # for packet in packets:
        #     data = packet[7:15]
        #     CANID = (packet[6] << 24) | (packet[5] << 16) | (packet[4] << 8) | packet[3]
        #     CMD = packet[1]
        #     self.__process_packet(data, CANID, CMD)

        data_recv = self.canbus.recv(0.1)

        if data_recv is not None:
            # data = data_recv.data
            # err = data[0] >> 12
            # id = data[0] & 0x7f
            # pos = (data[1] << 8) + data[2]
            # vel = (data[3] << 4) + (data[4] >> 4)
            # tau = ((data[4] & 0x0f) << 8) + data[5]
            # t_mos = data[6]
            # t_rotor = data[7]
            # print(hex(id), err, id, pos, vel, tau, goal_tau, t_mos, t_rotor)
            # CANID = data_recv.arbitration_id
            CANID = data_recv.data[0]
            # CMD = data_recv.data[3]
            CMD = 0x11                  # 飯田：修正の必要あり
            self.__process_packet(data_recv.data, CANID, CMD)

            # 飯田：Debug print
            # print(hex(CANID),hex(CMD))
            # print(hex(data_recv.data[0]),hex(data_recv.data[1]),hex(data_recv.data[2]),hex(data_recv.data[3]),hex(data_recv.data[4]),hex(data_recv.data[5]),hex(data_recv.data[6]),hex(data_recv.data[7]))
            #return data

    def recv_set_param_data(self):
        #data_recv = self.serial_.read_all()

        # packets = self.__extract_packets(data_recv)
        # for packet in packets:
        #     data = packet[7:15]
        #     CANID = (packet[6] << 24) | (packet[5] << 16) | (packet[4] << 8) | packet[3]
        #     CMD = packet[1]
        #     self.__process_set_param_packet(data, CANID, CMD)

        data_recv = self.canbus.recv(0.1)


        if data_recv is not None:
            data = data_recv.data
            CANID = data_recv.arbitration_id
            # CANID = data_recv.data[0]
            # CMD = data_recv.data[3]  
            CMD = 0x11                  # 飯田：修正の必要あり
            self.__process_packet(data, CANID, CMD)


            # 飯田：Debug print
            print(hex(CANID),hex(CMD))
            print(hex(data_recv.data[0]),hex(data_recv.data[1]),hex(data_recv.data[2]),hex(data_recv.data[3]),hex(data_recv.data[4]),hex(data_recv.data[5]),hex(data_recv.data[6]),hex(data_recv.data[7]))

    def __process_packet(self, data, CANID, CMD):
        if CMD == 0x11:
            if CANID != 0x00:
                if CANID in self.motors_map:
                    q_uint = np.uint16((np.uint16(data[1]) << 8) | data[2])
                    dq_uint = np.uint16((np.uint16(data[3]) << 4) | (data[4] >> 4))
                    tau_uint = np.uint16(((data[4] & 0xf) << 8) | data[5])
                    t_mos = data[6]
                    t_rotor = data[7]
                    MotorType_recv = self.motors_map[CANID].MotorType
                    Q_MAX = self.Limit_Param[MotorType_recv][0]
                    DQ_MAX = self.Limit_Param[MotorType_recv][1]
                    TAU_MAX = self.Limit_Param[MotorType_recv][2]
                    recv_q = uint_to_float(q_uint, -Q_MAX, Q_MAX, 16)
                    recv_dq = uint_to_float(dq_uint, -DQ_MAX, DQ_MAX, 12)
                    recv_tau = uint_to_float(tau_uint, -TAU_MAX, TAU_MAX, 12)
                    self.motors_map[CANID].recv_data(recv_q, recv_dq, recv_tau, t_mos, t_rotor)
            else:
                MasterID=data[0] & 0x0f
                if MasterID in self.motors_map:
                    q_uint = np.uint16((np.uint16(data[1]) << 8) | data[2])
                    dq_uint = np.uint16((np.uint16(data[3]) << 4) | (data[4] >> 4))
                    tau_uint = np.uint16(((data[4] & 0xf) << 8) | data[5])
                    t_mos = data[6]
                    t_rotor = data[7]
                    MotorType_recv = self.motors_map[MasterID].MotorType
                    Q_MAX = self.Limit_Param[MotorType_recv][0]
                    DQ_MAX = self.Limit_Param[MotorType_recv][1]
                    TAU_MAX = self.Limit_Param[MotorType_recv][2]
                    recv_q = uint_to_float(q_uint, -Q_MAX, Q_MAX, 16)
                    recv_dq = uint_to_float(dq_uint, -DQ_MAX, DQ_MAX, 12)
                    recv_tau = uint_to_float(tau_uint, -TAU_MAX, TAU_MAX, 12)
                    self.motors_map[MasterID].recv_data(recv_q, recv_dq, recv_tau, t_mos, t_rotor)


    def __process_set_param_packet(self, data, CANID, CMD):
        if CMD == 0x11 and (data[2] == 0x33 or data[2] == 0x55):
            masterid=CANID
            slaveId = ((data[1] << 8) | data[0])
            if CANID==0x00:  #防止有人把MasterID设为0稳一手
                masterid=slaveId

            if masterid not in self.motors_map:
                if slaveId not in self.motors_map:
                    return
                else:
                    masterid=slaveId

            RID = data[3]
            # 读取参数得到的数据
            if is_in_ranges(RID):
                #uint32类型
                num = uint8s_to_uint32(data[4], data[5], data[6], data[7])
                self.motors_map[masterid].temp_param_dict[RID] = num

            else:
                #float类型
                num = uint8s_to_float(data[4], data[5], data[6], data[7])
                self.motors_map[masterid].temp_param_dict[RID] = num


    def addMotor(self, Motor):
        """
        add motor to the motor control object 添加电机到电机控制对象
        :param Motor: Motor object 电机对象
        """
        self.motors_map[Motor.SlaveID] = Motor
        if Motor.MasterID != 0:
            self.motors_map[Motor.MasterID] = Motor
        return True

    def __control_cmd(self, Motor, cmd: np.uint8):     # 飯田：コマンドは通ります
        data_buf = np.array([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, cmd], np.uint8)
        self.__send_data(Motor.SlaveID, data_buf)

    def __send_data(self, motor_id, data):
        """
        send data to the motor 发送数据到电机
        :param motor_id:
        :param data:
        :return:
        """
        #self.send_data_frame[13] = motor_id & 0xff
        #self.send_data_frame[14] = (motor_id >> 8)& 0xff  #id high 8 bits
        #self.send_data_frame[21:29] = data
        #self.serial_.write(bytes(self.send_data_frame.T))

        msg =can.Message(is_extended_id=False,arbitration_id=motor_id,data=data,is_remote_frame = False)
        self.canbus.send(msg)

    def __read_RID_param(self, Motor, RID):             # 飯田：修正の必要あり?
        can_id_l = Motor.SlaveID & 0xff #id low 8 bits
        can_id_h = (Motor.SlaveID >> 8)& 0xff  #id high 8 bits
        data_buf = np.array([np.uint8(can_id_l), np.uint8(can_id_h), 0x33, np.uint8(RID), 0x00, 0x00, 0x00, 0x00], np.uint8)
        self.__send_data(0x7FF, data_buf)



    def __write_motor_param(self, Motor, RID, data):             # 飯田：修正の必要あり?
        can_id_l = Motor.SlaveID & 0xff #id low 8 bits
        can_id_h = (Motor.SlaveID >> 8)& 0xff  #id high 8 bits
        data_buf = np.array([np.uint8(can_id_l), np.uint8(can_id_h), 0x55, np.uint8(RID), 0x00, 0x00, 0x00, 0x00], np.uint8)
        if not is_in_ranges(RID):
            # data is float
            data_buf[4:8] = float_to_uint8s(data)
        else:
            # data is int
            data_buf[4:8] = data_to_uint8s(int(data))
        self.__send_data(0x7FF, data_buf)

    def switchControlMode(self, Motor, ControlMode):
        """
        switch the control mode of the motor 切换电机控制模式
        :param Motor: Motor object 电机对象
        :param ControlMode: Control_Type 电机控制模式 example:MIT:Control_Type.MIT MIT模式
        """
        max_retries = 20
        retry_interval = 0.1  #retry times
        RID = 10
        self.__write_motor_param(Motor, RID, np.uint8(ControlMode))
        for _ in range(max_retries):
            sleep(retry_interval)
            self.recv_set_param_data()
            if Motor.SlaveID in self.motors_map:
                if RID in self.motors_map[Motor.SlaveID].temp_param_dict:
                    if abs(self.motors_map[Motor.SlaveID].temp_param_dict[RID] - ControlMode) < 0.1:
                        return True
                    else:
                        return False
        return False

    def save_motor_param(self, Motor):
        """
        save the all parameter  to flash 保存所有电机参数
        :param Motor: Motor object 电机对象
        :return:
        """
        can_id_l = Motor.SlaveID & 0xff #id low 8 bits
        can_id_h = (Motor.SlaveID >> 8)& 0xff  #id high 8 bits
        data_buf = np.array([np.uint8(can_id_l), np.uint8(can_id_h), 0xAA, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        self.disable(Motor)  # before save disable the motor
        self.__send_data(0x7FF, data_buf)
        sleep(0.001)

    def change_limit_param(self, Motor_Type, PMAX, VMAX, TMAX):
        """
        change the PMAX VMAX TMAX of the motor 改变电机的PMAX VMAX TMAX
        :param Motor_Type:
        :param PMAX: 电机的PMAX
        :param VMAX: 电机的VMAX
        :param TMAX: 电机的TMAX
        :return:
        """
        self.Limit_Param[Motor_Type][0] = PMAX
        self.Limit_Param[Motor_Type][1] = VMAX
        self.Limit_Param[Motor_Type][2] = TMAX

    def refresh_motor_status(self,Motor):
        """
        get the motor status 获得电机状态
        """
        can_id_l = Motor.SlaveID & 0xff #id low 8 bits
        can_id_h = (Motor.SlaveID >> 8) & 0xff  #id high 8 bits
        data_buf = np.array([np.uint8(can_id_l), np.uint8(can_id_h), 0xCC, 0x00, 0x00, 0x00, 0x00, 0x00], np.uint8)
        self.__send_data(0x7FF, data_buf)
        self.recv()  # receive the data from serial port

    def change_motor_param(self, Motor, RID, data):
        """
        change the RID of the motor 改变电机的参数
        :param Motor: Motor object 电机对象
        :param RID: DM_variable 电机参数
        :param data: 电机参数的值
        :return: True or False ,True means success, False means fail
        """
        max_retries = 20
        retry_interval = 0.05  #retry times

        self.__write_motor_param(Motor, RID, data)
        for _ in range(max_retries):
            self.recv_set_param_data()
            if Motor.SlaveID in self.motors_map and RID in self.motors_map[Motor.SlaveID].temp_param_dict:
                if abs(self.motors_map[Motor.SlaveID].temp_param_dict[RID] - data) < 0.1:
                    return True
                else:
                    return False
            sleep(retry_interval)
        return False

    def read_motor_param(self, Motor, RID):
        """
        read only the RID of the motor 读取电机的内部信息例如 版本号等
        :param Motor: Motor object 电机对象
        :param RID: DM_variable 电机参数
        :return: 电机参数的值
        """
        max_retries = 5
        retry_interval = 0.05  #retry times
        self.__read_RID_param(Motor, RID)
        for _ in range(max_retries):
            sleep(retry_interval)
            self.recv_set_param_data()
            if Motor.SlaveID in self.motors_map:
                if RID in self.motors_map[Motor.SlaveID].temp_param_dict:
                    return self.motors_map[Motor.SlaveID].temp_param_dict[RID]
        return None

    # -------------------------------------------------
    # Extract packets from the serial data
    def __extract_packets(self, data):          
        frames = []
        header = 0xAA
        tail = 0x55
        frame_length = 16
        i = 0
        remainder_pos = 0

        while i <= len(data) - frame_length:
            if data[i] == header and data[i + frame_length - 1] == tail:
                frame = data[i:i + frame_length]
                frames.append(frame)
                i += frame_length
                remainder_pos = i
            else:
                i += 1
        self.data_save = data[remainder_pos:]
        return frames


def LIMIT_MIN_MAX(x, min_val, max_val):
    return max(min_val, min(x, max_val))


def float_to_uint(x: float, x_min: float, x_max: float, bits):
    x = LIMIT_MIN_MAX(x, x_min, x_max)
    span = x_max - x_min
    data_norm = (x - x_min) / span
    return np.uint16(data_norm * ((1 << bits) - 1))


def uint_to_float(x: np.uint16, min: float, max: float, bits):
    span = max - min
    data_norm = float(x) / ((1 << bits) - 1)
    temp = data_norm * span + min
    return np.float32(temp)


def float_to_uint8s(value):
    # Pack the float into 4 bytes
    packed = pack('f', value)
    # Unpack the bytes into four uint8 values
    return unpack('4B', packed)


def data_to_uint8s(value):
    # Check if the value is within the range of uint32
    if isinstance(value, int) and (0 <= value <= 0xFFFFFFFF):
        # Pack the uint32 into 4 bytes
        packed = pack('I', value)
    else:
        raise ValueError("Value must be an integer within the range of uint32")

    # Unpack the bytes into four uint8 values
    return unpack('4B', packed)


def is_in_ranges(number):
    """
    check if the number is in the range of uint32
    :param number:
    :return:
    """
    if (7 <= number <= 10) or (13 <= number <= 16) or (35 <= number <= 36):
        return True
    return False


def uint8s_to_uint32(byte1, byte2, byte3, byte4):
    # Pack the four uint8 values into a single uint32 value in little-endian order
    packed = pack('<4B', byte1, byte2, byte3, byte4)
    # Unpack the packed bytes into a uint32 value
    return unpack('<I', packed)[0]


def uint8s_to_float(byte1, byte2, byte3, byte4):
    # Pack the four uint8 values into a single float value in little-endian order
    packed = pack('<4B', byte1, byte2, byte3, byte4)
    # Unpack the packed bytes into a float value
    return unpack('<f', packed)[0]


def print_hex(data):
    hex_values = [f'{byte:02X}' for byte in data]
    print(' '.join(hex_values))


def get_enum_by_index(index, enum_class):
    try:
        return enum_class(index)
    except ValueError:
        return None


class DM_Motor_Type(IntEnum):
    DM4310 = 0
    DM4310_48V = 1
    DM4340 = 2
    DM4340_48V = 3
    DM6006 = 4
    DM8006 = 5
    DM8009 = 6
    DM10010L = 7
    DM10010 = 8
    DMH3510 = 9
    DMH6215 = 10
    DMG6220 = 11


class DM_variable(IntEnum):
    UV_Value = 0
    KT_Value = 1
    OT_Value = 2
    OC_Value = 3
    ACC = 4
    DEC = 5
    MAX_SPD = 6
    MST_ID = 7
    ESC_ID = 8
    TIMEOUT = 9
    CTRL_MODE = 10
    Damp = 11
    Inertia = 12
    hw_ver = 13
    sw_ver = 14
    SN = 15
    NPP = 16
    Rs = 17
    LS = 18
    Flux = 19
    Gr = 20
    PMAX = 21
    VMAX = 22
    TMAX = 23
    I_BW = 24
    KP_ASR = 25
    KI_ASR = 26
    KP_APR = 27
    KI_APR = 28
    OV_Value = 29
    GREF = 30
    Deta = 31
    V_BW = 32
    IQ_c1 = 33
    VL_c1 = 34
    can_br = 35
    sub_ver = 36
    u_off = 50
    v_off = 51
    k1 = 52
    k2 = 53
    m_off = 54
    dir = 55
    p_m = 80
    xout = 81


class Control_Type(IntEnum):
    MIT = 1
    POS_VEL = 2
    VEL = 3
    Torque_Pos = 4

class DamiaoPort:
    def __init__(self, device, types, can_ids, master_ids, motor_with_torque, control_mode=Control_Type.MIT):
        self.device = device
        self.types = types
        self.can_ids = can_ids
        self.master_ids = master_ids
        self.control = MotorControl(self.device, bitrate=4000000)
        self.motors = [Motor(type, can_id, master_id) for type, can_id, master_id in zip(types, can_ids, master_ids)]
        self.stat_data = []
        self.stat_time = []
        for motor in self.motors:
            self.control.addMotor(motor)
            self.control.enable(motor)

    def get_present_status(self):
        self.stat_time.append(time())
        stat = [[
            motor.goal_position,
            motor.goal_tau,
            motor.getPosition(),
            motor.getVelocity(),
            motor.getTorque(),
            motor.state_tmos,
            motor.state_trotor,
        ] for motor in self.motors]
        self.stat_data.append(stat)

        return stat

    def save_status(self, filename):
        np.savez(filename, np.array(self.stat_time), np.array(self.stat_data))

    def disable(self):
        for motor in self.motors:
            self.control.disable(motor)

    def shutdown(self):
        for motor in self.motors:
            self.control.controlMIT(motor, 0, 0, 0, 0, 0)
        self.control.canbus.shutdown()

    def set_zero_position(self):
        for motor in self.motors:
            self.control.disable(motor)
        sleep(1)
        for motor in self.motors:
            self.control.set_zero_position(motor)
        sleep(1)
        for motor in self.motors:
            self.control.enable(motor)
        return 0

    async def move_towards(self, goal_positions, kps, kds):
        for motor, goal_position, kp, kd in zip(self.motors, goal_positions, kps, kds):
            delta = goal_position - motor.getPosition()
            v = motor.getVelocity()
            tau = kp * delta - kd * v
            motor.goal_position = goal_position
            motor.goal_tau = tau
            self.control.controlMIT(motor, 0, 0, 0, 0, tau)
            await asyncio.sleep(0.00003)

    def move_regressor_sync(self, regs, search_range, search_step, goal_positions, kps, kds):
        TORQUE_SCALER=30
        if len(self.stat_data) == 0:
            return self.move_towards_sync(goal_positions, kps, kds)
        for motor, reg, goal_position, kp, kd, stat in zip(
                self.motors, regs, goal_positions, kps, kds, self.stat_data[-1]):
            pos = motor.getPosition()
            vel = motor.getVelocity()
            delta = goal_position - pos
            goal_tau = kp * delta - kd * vel
            _goal_pos, _goal_tau, _pos, _vel, _tau = stat
            x = np.array([[_pos, _vel, _tau, _goal_pos, _goal_tau],
                          [pos, vel, motor.getTorque(), goal_position, goal_tau]])
            x /= np.array([[np.pi, 10, TORQUE_SCALER, np.pi, TORQUE_SCALER]])
            xs = []
            for tau in np.linspace(goal_tau/TORQUE_SCALER - search_range,
                                   goal_tau/TORQUE_SCALER + search_range,
                                   num=search_step):
                x_ = x.copy()
                x_[0,4] = tau
                xs.append(x_.flatten())
            h = reg.predict(xs)
            diff = h - goal_position
            tau = TORQUE_SCALER * xs[np.argmin(diff ** 2)][4]
            goal_tau = tau
            motor.goal_position = goal_position
            motor.goal_tau = goal_tau
            self.control.controlMIT(motor, 0, 0, 0, 0, goal_tau)
            sleep(0.00003)

    def move_towards_sync(self, goal_positions, kps, kds):
        for motor, goal_position, kp, kd in zip(self.motors, goal_positions, kps, kds):
            delta = goal_position - motor.getPosition()
            v = motor.getVelocity()
            tau = kp * delta - kd * v
            motor.goal_position = goal_position
            motor.goal_tau = tau
            self.control.controlMIT(motor, 0, 0, 0, 0, tau)
            # sleep(0.00003)

    def set_goal_torque_sync(self, goal_taus):
        for motor, goal_tau in zip(self.motors, goal_taus):
            motor.goal_position = 0
            motor.goal_tau = goal_tau
            self.control.controlMIT(motor, 0, 0, 0, 0, motor.goal_tau)
            sleep(0.00003)

    def move_torque_sync(self, taus):
        for motor,tau in zip(self.motors, taus):
            motor.goal_position = 0
            motor.goal_tau = tau
            self.control.controlMIT(motor, 0, 0, 0, 0, motor.goal_tau)
            sleep(0.00003)

    def keep_torque_sync(self):
        for motor in self.motors:
            self.control.controlMIT(motor, 0, 0, 0, 0, motor.goal_tau)
            sleep(0.00003)

    async def set_goal_positions(self, goal_positions, kps):
        for motor, goal_position, kp in zip(self.motors, goal_positions, kps):
            motor.goal_position = goal_position
            motor.goal_tau = 0
            self.control.controlMIT(motor, kp, 1.2, goal_position, 0, 0)
            await asyncio.sleep(0.00003)

    def set_goal_positions_sync(self, goal_positions, kps, kds):
        for motor, goal_position, kp, kd in zip(self.motors, goal_positions, kps, kds):
            motor.goal_position = goal_position
            motor.goal_tau = 0
            self.control.controlMIT(motor, kp, kd, goal_position, 0, 0)
            sleep(0.00003)

    def set_goal_posvel(self, goal_positions):
        for motor, goal_position in zip(self.motors, goal_positions):
            motor.goal_position = goal_position
            motor.goal_tau = 0
            self.control.control_pos_force(motor, goal_position, 1, 1)

    def controlMIT(self, motor, kp, kd, q, dq, tau):
        self.control.controlMIT(self.motors[motor], kp, kd, q, dq, tau)


```

</details>

- **damiao_test.py ファイルを作成する**

以下のコードを damiao_test.py にコピーしてください

<details>

<summary>damiao_motor.py</summary>

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time
import math
import numpy as np
from damiao_motor import Motor, MotorControl, DM_Motor_Type, Control_Type

# Configuration parameters
NUM_MOTORS = 1  # Number of motors to control
CAN_INTERFACE = "can0"  # CAN interface name
CAN_BITRATE = 1000000  # CAN bus baud rate
MOTOR_TYPE = DM_Motor_Type.DM4310  # Motor model

# Sine wave parameters
FREQUENCY = 0.1  # Frequency (Hz)
AMPLITUDE = 6  # Amplitude (rad)
DURATION = 60.0  # Operation duration (s)

def main():
    # Create motor controller object
    control = MotorControl(CAN_INTERFACE, bitrate=CAN_BITRATE)

    # Create and add motors
    motors = []
    for i in range(NUM_MOTORS):
        motor = Motor(MOTOR_TYPE, i + 1, i + 0X10)  # CAN IDs start from 1
        control.addMotor(motor)
        motors.append(motor)
        control.enable(motor)
        print(f"Motor {i + 1} enabled")

    try:
        start_time = time.time()
        while time.time() - start_time < DURATION:
            current_time = time.time() - start_time

            # Calculate sine wave position
            position = AMPLITUDE * math.sin(2 * math.pi * FREQUENCY * current_time)

            # Control all motors
            for motor in motors:
                control.controlMIT(
                    motor,
                    kp=10.0,  # Position gain
                    kd=1.0,   # Velocity gain
                    q=position,  # Target position
                    dq=0.0,   # Target velocity
                    tau=0.0   # Feedforward torque
                )

            # Control frequency
            time.sleep(0.001)  # 1kHz control frequency

    except KeyboardInterrupt:
        print("\nProgram interrupted by user")
    finally:
        # Disable all motors
        for motor in motors:
            control.disable(motor)
            print(f"Motor {motor.SlaveID} disabled")

if __name__ == "__main__":
    main()

```

</details>

- **damiao_test.py を実行する**

```bash
python damiao_test.py
```

<div class="video-container">
<iframe width="960" height="640" src="https://www.youtube.com/embed/e5hajjlaXAM?si=mTwNAeU5cfQEIuOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

モーターは**緑色**に点灯し、**正弦波速度**で回転します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
