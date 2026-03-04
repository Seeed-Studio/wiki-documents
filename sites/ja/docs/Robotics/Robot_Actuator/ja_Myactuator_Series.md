---
description: このwikiはMyactuatorシリーズモーターのチュートリアルを提供します。
title: MyActuatorシリーズモーター
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.webp
slug: /myactuator_series
sku: 114090068,114090069
last_update:
  date: 05/29/2025
  author: ZhuYaoHui
---

# MyActuator Xシリーズモーター入門

この記事では、MyActuatorシリーズモーターの使い方と、reComputer Mini Jetson OrinでC++およびPythonを使用する方法を紹介します。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱</font></span></strong>
    </a>
</div>

## 仕様

以下は、すべてのモーターモデルのパラメータを記載した完全な表です：

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>X2-7</th>
      <th>X4-10</th>
      <th>X4-36</th>
      <th>X8-120</th>
      <th>X12-320</th>
      <th>X15-450</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>ギア比</td><td>28.17</td><td>12.6</td><td>36</td><td>19.61</td><td>20</td><td>20.25</td></tr>
    <tr><td>入力電圧 (V)</td><td>24</td><td>24</td><td>24</td><td>48</td><td>48</td><td>72</td></tr>
    <tr><td>無負荷速度 (RPM)</td><td>178</td><td>317</td><td>111</td><td>158</td><td>125</td><td>108</td></tr>
    <tr><td>無負荷入力電流 (A)</td><td>1</td><td>1</td><td>0.9</td><td>1.6</td><td>2.7</td><td>3.5</td></tr>
    <tr><td>定格速度 (RPM)</td><td>142</td><td>238</td><td>83</td><td>127</td><td>100</td><td>98</td></tr>
    <tr><td>定格トルク (N.m)</td><td>2.5</td><td>4</td><td>10.5</td><td>43</td><td>85</td><td>145</td></tr>
    <tr><td>定格出力 (W)</td><td>37</td><td>100</td><td>100</td><td>574</td><td>900</td><td>1480</td></tr>
    <tr><td>定格相電流 A(rms)</td><td>3</td><td>7.8</td><td>6.1</td><td>17.6</td><td>30</td><td>25</td></tr>
    <tr><td>ピークトルク (N.m)</td><td>7</td><td>10</td><td>34</td><td>120</td><td>320</td><td>450</td></tr>
    <tr><td>ピーク相電流 A(rms)</td><td>8.1</td><td>19.5</td><td>21.5</td><td>43.8</td><td>100</td><td>69.2</td></tr>
    <tr><td>効率 (%)</td><td>63</td><td>69.5</td><td>63.1</td><td>79</td><td>75</td><td>82.4</td></tr>
    <tr><td>モーター逆起電力定数 (Vdc/Krpm)</td><td>4.3</td><td>6</td><td>6</td><td>19.2</td><td>17.9</td><td>29.9</td></tr>
    <tr><td>モジュールトルク定数 (N.m/A)</td><td>0.8</td><td>0.8</td><td>1.9</td><td>2.4</td><td>3.3</td><td>5.8</td></tr>
    <tr><td>モーター相抵抗 (Ω)</td><td>0.61</td><td>0.32</td><td>0.35</td><td>0.18</td><td>0.12</td><td>0.08</td></tr>
    <tr><td>モーター相インダクタンス (mH)</td><td>0.13</td><td>0.14</td><td>0.17</td><td>0.31</td><td>0.05</td><td>0.14</td></tr>
    <tr><td>極対数</td><td>13</td><td>13</td><td>13</td><td>10</td><td>20</td><td>20</td></tr>
    <tr><td>3相接続</td><td colspan="6">Y</td></tr>
    <tr><td>バックドライブトルク (N.m)</td><td>0.4</td><td>0.8</td><td>1.14</td><td>3.21</td><td>3.8</td><td>4</td></tr>
    <tr><td>バックラッシュ (Arcmin)</td><td>12</td><td>10</td><td>10</td><td>10</td><td>10</td><td>10</td></tr>
    <tr><td>出力ベアリングタイプ</td><td colspan="2">深溝玉軸受</td><td colspan="4">クロスローラーベアリング</td></tr>
    <tr><td>軸方向荷重 (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>4</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>軸方向応力 (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>1</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>ラジアル荷重 (KN)</td><td>1</td><td>1.2</td><td>1.5</td><td>4.5</td><td>5</td><td>6</td></tr>
    <tr><td>慣性 (Kg.cm²)</td><td>0.17</td><td>0.25</td><td>0.3</td><td>1.5</td><td>12.9</td><td>31.6</td></tr>
    <tr><td>エンコーダータイプ・インターフェース</td><td colspan="6">デュアルエンコーダー ABS-17BIT (入力) / 17-18BIT (出力)</td></tr>
    <tr><td>制御精度 (度)</td><td colspan="6">&lt;0.01</td></tr>
    <tr><td>通信</td><td colspan="6">CAN BUS / EtherCAT</td></tr>
    <tr><td>重量 (Kg)</td><td>0.26</td><td>0.33</td><td>0.36</td><td>1.40</td><td>2.37</td><td>3.50</td></tr>
    <tr><td>絶縁等級</td><td colspan="6">F</td></tr>
  </tbody>
</table>

## RMD-X V4シリーズ命名規則

- **RMD**: ブランド名 R-Reducer M-Motor D-Drive
- **X2**: Xはシリーズ名を表す：統合プラネタリーアクチュエーター、2はモーターモデル番号を表す（例：X2 X4 X6 X8など）
- **P28**: プラネタリーギア比（例：P12 P28 P32など）
- **7**: ピークトルク 7N.m
- **E**: 通信 E: CAN BUS & EtherCAT

## 主な特徴

1. **CAN BUS & EtherCAT**
2. **クロスローラーベアリング**
3. **デュアルエンコーダー**
4. **高トルク密度**
5. **高精度**
6. **中空設計**

## 入門

### 使用前の環境準備

**PCのWindowsシステム**

- [対応する製品マニュアルをダウンロード](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)してください。
- [MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)をダウンロードしてください。

- `MYACTUATOR_Setup Software_V4.0.zip`を展開し、以下をインストールしてください：
  - `Required Runtime Environment\ZLGUSBCAN_Driver`ディレクトリにある`USBCAN_AllInOne_x86_x64_2.0.0.1.exe`
  - `Required Microsoft Runtime Libraries`ディレクトリにある`MSVBCRT.AIO.2019.10.19.X86 X64.exe`

### 回路の接続

ここではX4-36モーターを選択し、そのインターフェース図を以下に示します。

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/X4-36-circuit.png" />
</div>

<table>
  <tr>
    <th>ポート定義</th>
    <th>ポート説明</th>
  </tr>
  <tr>
    <td>① VCC</td>
    <td>電源正極</td>
  </tr>
  <tr>
    <td>② GND</td>
    <td>電源負極</td>
  </tr>
  <tr>
    <td>③ CAN_H</td>
    <td>CAN_Hネットワーク信号端子</td>
  </tr>
  <tr>
    <td>④ CAN_L</td>
    <td>CAN_Lネットワーク信号端子</td>
  </tr>
  <tr>
    <td>⑤ EtherCAT_IN</td>
    <td>EtherCAT入力端子</td>
  </tr>
  <tr>
    <td>⑥ EtherCAT_OUT</td>
    <td>EtherCAT出力端子</td>
  </tr>
  <tr>
    <td>⑦ T+</td>
    <td>マスターがモジュールに制御コマンドを送信</td>
  </tr>
  <tr>
    <td>⑧ T-</td>
    <td>モジュールがマスターにステータスフィードバックを送信</td>
  </tr>
  <tr>
    <td>⑨ R+</td>
    <td>マスターがモジュールステータスデータを反映</td>
  </tr>
  <tr>
    <td>⑩ R-</td>
    <td>モジュールがマスター制御コマンドを反映</td>
  </tr>
</table>

ここでは、CAN通信方式を使用します。これには、WindowsでのPC上でのデバッグ用に追加のUSB-CANインターフェースが必要です。

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/6.jpg" />
</div>

ここでは、モーター用に別途24V電源を提供し、USBをコンピューターに接続する必要があります。

### `MYACTUATOR Setup Software 250206.exe`を使用してモーターをテストする

| **IDの設定と接続** | **モーター情報の読み取り** | **モーターの校正** | **モーターの校正** |**モーター回転テストの実行** |
|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/1.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/2.png) | ![fig3](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/3.png) | ![fig4](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/4.png) |![fig5](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/5.png) |
| デフォルトのモーターIDは1です。IDに1を入力し、「Connect」をクリックします。 | 接続後、「Read」をクリックしてモーターの現在の情報を取得します。|初回使用時は、「Calibrate Motor」をクリックして校正を実行します。|校正後、「Read」と「Save」をクリックします。 |Motor Runningセクションで異なるモーター制御モードをテストできます。 |

詳細な機能については、[MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)ファイルに含まれている**Setup Software Instruction Manual - V3.0.pdf**を参照してください。

## [reComputer Mini Jetson Orin](/ja/recomputer_jetson_mini_getting_started)を使用してモーターを制御する

現在、市場で最も一般的なモーター用CAN通信インターフェースは**XT30 (2+2)**と**JSTコネクタ**を使用しています。私たちの**reComputer Mini Jetson Orin**と**reComputer Robotics**デバイスは**デュアルXT30 (2+2)ポート**と**JSTベースのCANインターフェース**を搭載し、シームレスな互換性を提供します。

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

CAN使用の詳細については、この[wiki](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_hardware_interfaces_usage/#can)を参照してください。

### CANインターフェースの有効化

**ステップ1:** CAN0とCAN1を使用する前に、底面カバーを取り外し、両方の120Ω終端抵抗をON位置に設定してください。

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**ステップ2:** XT30 (2+2)インターフェースを介してモーターをreComputer Mini CAN0に直接接続します。

これはreComputer MiniのCAN0インターフェースです

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.jpg" />
</div>

:::dangerこの電源は単一モーター学習およびテスト専用です。複数のモーターの場合は、別途電源ボードを設計し、Jetsonの電源をモーター電源から分離して、高電流がJetsonを直接通過することを避けてください。
:::

#### Jetson CAN通信を有効にする

ターミナルを開き、以下のコマンドを入力してGPIOピンをハイにプルし、CAN0を有効にします：

```bash
gpioset --mode=wait 0 43=0
```

JST-インターフェースCAN1を使用している場合は、ピン106をハイにプルします。

```bash
gpioset --mode=wait 0 106=0
```

このターミナルを開いたまま、新しいターミナルを起動し、CAN0を設定します。

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### PythonとC++環境の構築

**ステップ1:** SDKをGitクローンします。

```bash
git clone https://github.com/ZhuYaoHui1998/myactuator_rmd.git
```

**ステップ2:** このドライバーSDKには以下の依存関係のインストールが必要です。Debian Linuxの場合、aptを通じて以下のようにインストールできます：

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

Pythonバインディングを使用したい場合は、追加でPython 3、pip、pybind11をインストールする必要があります：

```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

依存関係をインストールした後、以下のステップで説明するように、ドライバーSDKをC++ライブラリまたはPythonパッケージとしてインストールする必要があります。どちらもCMakeを使用してC++コードをコンパイルします。

#### C++ライブラリのビルド

C++ドライバーSDKをビルドするには、このフォルダ内で新しいターミナルを開き、以下のコマンドを実行します。古いバージョンのLinuxでは、error: 'const struct can_frame' has no member named 'len'というエラーメッセージでビルドが失敗する場合があり、[issue 5](https://github.com/2b-t/myactuator_rmd/issues/5)で議論されているコード修正を適用する必要があります。

```bash
cd ~/myactuator_rmd
mkdir build
cd build
cmake .. -D PYTHON_BINDINGS=on
make -j $(nproc)
sudo make install
```

フラグPYTHON_BINDINGS（デフォルトはオフ）は、C++ライブラリに加えてPythonバインディングもビルドします。C++ライブラリのみを使用したい場合は、オフのままにしておいてください。このようにPythonバインディングをビルドすると、共有ライブラリにコンパイルされますが、インストールはされません。つまり、ライブラリを手動でインストールするか、ビルドフォルダ内でローカルにのみインポートできます。

パッケージを再度アンインストールするには、以下のコマンドを使用できます：`xargs rm < install_manifest.txt`。

#### Pythonライブラリのビルド

このSDKのPythonバインディングをビルドしてインストールするには、メインフォルダ内で新しいターミナルを開き、以下のコマンドを実行します：

```bash
cd ~/myactuator_rmd
pip3 install .
```

これはsetup.pyを使用してCMakeを呼び出し、バインディングをC++ライブラリとしてインストールします。再度削除したい場合は、単純に`pip3 uninstall myactuator-rmd-py`を実行してください。

### C++を使用した制御

1. プロジェクトディレクトリ構造の作成  
コードsrcディレクトリの下にプロジェクトディレクトリを作成します。例えば、`myactuator_example`という名前にし、サブディレクトリの下にsrcフォルダを作成します。

```bash  
cd ~/myactuator_rmd
mkdir -p ~/myactuator_rmd/src/myactuator_example/src  
cd ~/myactuator_rmd/src/myactuator_example  
```  

2. CMakeLists.txtの作成  
`~/myactuator_rmd/src/myactuator_example/CMakeLists.txt`ファイルに、以下の内容を記述します：

```bash
touch CMakeLists.txt
```

```cmake  
cmake_minimum_required(VERSION 3.20)  
project(myactuator_example)  

# Find the myactuator_rmd library  
find_package(myactuator_rmd REQUIRED)  

# Create executable  
add_executable(myactuator_node  
src/main.cpp  
)  

# Use C++17 standard  
target_compile_features(myactuator_node PUBLIC  
cxx_std_17  
)  

# Link the myactuator_rmd library  
target_link_libraries(myactuator_node PUBLIC  
myactuator_rmd::myactuator_rmd  
)  
```

3. main.cppの作成  
`~/myactuator_rmd/src/myactuator_example/src/main.cpp`ファイルに、以下のコードを記述します：  

```bash
touch src/main.cpp
```

```cpp
#include <cstdlib>
#include <iostream>
#include <myactuator_rmd/myactuator_rmd.hpp>

int main() {
myactuator_rmd::CanDriver driver {"can0"};
myactuator_rmd::ActuatorInterface actuator {driver, 1};

std::cout << actuator.getVersionDate() << std::endl;
std::cout << actuator.sendPositionAbsoluteSetpoint(180.0, 500.0) << std::endl;
actuator.shutdownMotor();
return EXIT_SUCCESS;
}
```

4. プロジェクトのビルド  

```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make
```

5. プログラムの実行  

```bash
sudo ./myactuator_node
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/Cresult.png" />
</div>

**前提条件**  

- CANインターフェース`can0`が適切に設定されている必要があります（モーターとCANバスが正しく接続されていることを確認してください）。  
- `myactuator_rmd`ライブラリが適切にインストールされている必要があります（インストールされていない場合は、まずインストールしてください）。

C++実装の詳細については、`myactuator_rmd.hpp`のすべての内容を参照してください。Python使用方法について詳細な紹介を提供します。

### Pythonを使用した制御

`~/myactuator_rmd/src/myactuator_example`ディレクトリの下にscriptsという名前のフォルダを作成し、Pythonスクリプトを保存します。

```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir scripts
```

#### **バージョン番号の取得**

scriptsディレクトリの下に`test.py`という名前のカスタムPythonスクリプトを作成し、以下のコードを記述します。

```python
import myactuator_rmd_py as rmd
import time

# Initialize CAN driver and actuator interface
driver = rmd.CanDriver("can0")  # Using can0
actuator = rmd.ActuatorInterface(driver, 1)  # CAN ID set to 1

# Get version number
print("Version number:", actuator.getVersionDate())
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.png" />
</div>

ライブラリをロードし、特定のネットワークインターフェース（ここではcan0）とドライブ（ここでは1、CANアドレス0x140 + 1 = 0x141に対応）のドライバーを作成し続けます。

#### **モーターステータスの取得**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Motor Status 1
status1 = actuator.getMotorStatus1()
print(f"""
Motor Status 1:
Temperature: {status1.temperature}°C
Brake Status: {'Released' if status1.is_brake_released else 'Locked'}
Voltage: {status1.voltage}V
Error Code: {status1.error_code}
""")

# Motor Status 2
status2 = actuator.getMotorStatus2()
print(f"""
Motor Status 2:
Temperature: {status2.temperature}°C
Current: {status2.current}A
Shaft Speed: {status2.shaft_speed} RPM
Shaft Angle: {status2.shaft_angle}°
""")

# Motor Status 3
status3 = actuator.getMotorStatus3()
print(f"""
Motor Status 3:
Temperature: {status3.temperature}°C
Phase A Current: {status3.current_phase_a}A
Phase B Current: {status3.current_phase_b}A
Phase C Current: {status3.current_phase_c}A
""")

## Torque Calculation

import myactuator_rmd_py as rmd
from myactuator_rmd_py.actuator_constants import X4_24  # Import according to your motor model

def get_normalized_torque(actuator):
    """Calculate normalized torque from current"""
    # Get current value
    status = actuator.getMotorStatus2()
    current = status.current

    # Calculate normalized torque (current/rated)
    torque_ratio = current / X4_24.rated_current
    actual_torque = torque_ratio * X4_24.rated_torque
    return actual_torque

# Usage example
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

try:
    while True:
        torque = get_normalized_torque(actuator)
        print(f"Current Torque: {torque:.3f} Nm (Rated: {X4_24.rated_torque} Nm)", end='\r')
        time.sleep(0.1)
except KeyboardInterrupt:
    actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/9.png" />
</div>

#### **制御モード**

- **現在の制御モードの取得**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
mode = actuator.getControlMode()
print(f"Current Control Mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/10.png" />
</div>

- **絶対位置制御**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Move to 180 degree position at 100 deg/s
actuator.sendPositionAbsoluteSetpoint(180.0, 300.0)
time.sleep(5)  # Wait for motor to reach target position

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

time.sleep(5)
mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/11.png" />
</div>

モーターが180度の位置に回転するのを確認できます。

- **相対位置制御**

```python
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Move an additional 90 degrees from current position
current_angle = actuator.getMultiTurnAngle()
target_angle = current_angle + 90.0
actuator.sendPositionAbsoluteSetpoint(target_angle, 50.0)
time.sleep(3)
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")
mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/12.png" />
</div>

モーターが反時計回りに90度回転するのを観察できます。

- **速度制御**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Continuous rotation at 500 RPM
actuator.sendVelocitySetpoint(500.0)
time.sleep(15)

# Stop motor
actuator.stopMotor()

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/13.png" />
</div>

- **トルク制御**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Apply 0.5A current (torque)
actuator.sendCurrentSetpoint(0.5)
time.sleep(2)

# Stop torque output
actuator.stopMotor()

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/14.png" />
</div>

- **クローズドループモーション制御**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

# Initialization
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Position control with feedback
feedback = actuator.sendPositionAbsoluteSetpoint(180.0, 100.0)
time.sleep(5)
print(feedback)


# Velocity control with feedback
feedback = actuator.sendVelocitySetpoint(20.0)
time.sleep(5)
print(feedback)

# Torque control with feedback
torque_constant = 0.32  # Set according to motor model
feedback = actuator.sendTorqueSetpoint(1.5, torque_constant)
time.sleep(5)
print(feedback)

actuator.stopMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/15.png" />
</div>

#### モーターブレーキ制御

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Engage brake
actuator.lockBrake()
print("Brake engaged")

# Release brake
actuator.releaseBrake()
print("Brake released")
```

#### モーター電源制御

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Power off motor
actuator.shutdownMotor()
print("Motor powered off")
```

#### エンコーダー機能

- **マルチターンエンコーダー位置の取得**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
encoder_pos = actuator.getMultiTurnEncoderPosition()
print(f"Multi-turn encoder position: {encoder_pos}")
```

- **現在位置をゼロ点として設定（再起動が必要）**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
actuator.setCurrentPositionAsEncoderZero()
print("Current position set as encoder zero point")
```

- **カスタムゼロ点の設定（再起動が必要）**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Get current position as zero point
current_pos = actuator.getMultiTurnEncoderOriginalPosition()
print(f"Raw encoder position: {current_pos}")

# Set zero offset
actuator.setEncoderZero(current_pos)
print(f"Encoder zero point set to: {current_pos}")

# Reboot to apply settings
actuator.shutdownMotor()
time.sleep(1)  # Wait for shutdown
actuator = rmd.ActuatorInterface(driver, 1)  # Reinitialize

# Verify
new_pos = actuator.getMultiTurnEncoderPosition()
print(f"Post-reboot position (should be near 0): {new_pos}")
```

#### 加速度設定

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
from myactuator_rmd_py.actuator_state import AccelerationType

# Initialization
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

## Get initial acceleration
print(f"Initial acceleration: {actuator.getAcceleration()}")

actuator.setAcceleration(5000, AccelerationType.POSITION_PLANNING_ACCELERATION)

## Get modified acceleration
print(f"Modified acceleration: {actuator.getAcceleration()}")

# Set different acceleration types
actuator.setAcceleration(1000, AccelerationType.POSITION_PLANNING_ACCELERATION)
actuator.setAcceleration(800, AccelerationType.POSITION_PLANNING_DECELERATION)
actuator.setAcceleration(1200, AccelerationType.VELOCITY_PLANNING_ACCELERATION)
actuator.setAcceleration(1000, AccelerationType.VELOCITY_PLANNING_DECELERATION)
```

<div class="video-container">
<iframe width="960" height="640" src="https://www.youtube.com/embed/0HLx3iQitXg?si=Z39mFeatUdp4j9dh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
