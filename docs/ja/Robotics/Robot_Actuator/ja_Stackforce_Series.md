---
description: このwikiはStackforce系列モーターのチュートリアルを提供します。
title: Stackforce 系列モーター
keywords:
- actuator
- motor
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010_homepage.webp
slug: /ja/stackforce_series
last_update:
  date: 11/26/2025
  author: Li Shanghang
---

# Stackforce X 系列モーター入門ガイド

この記事では、Stackforce系列モーターの使い始め方と、reComputer Jetson SuperでC++とPythonを使用する方法を紹介します。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>

## 仕様

すべてのモーターモデルのパラメータを記載した完全な表は以下の通りです：

<table>
  <thead>
    <tr>
      <th>パラメータ</th>
      <th>6010</th>
      <th>8108</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>定格電圧</td><td>24V</td><td>24V</td></tr>
    <tr><td>定格電流</td><td>10.5A</td><td>7.5A</td></tr>
    <tr><td>定格電力</td><td>240W</td><td>180W</td></tr>
    <tr><td>定格トルク</td><td>5 Nm</td><td>7.5 Nm</td></tr>
    <tr><td>最大トルク</td><td>11 Nm</td><td>22 Nm</td></tr>
    <tr><td>定格速度</td><td>120 RPM</td><td>110 RPM</td></tr>
    <tr><td>最大速度</td><td>270 RPM</td><td>320 RPM</td></tr>
    <tr><td>ギア比</td><td>8:1</td><td>8:1</td></tr>
    <tr><td>通信プロトコル</td><td>MIT Protocol</td><td>MIT Protocol</td></tr>
    <tr><td>制御モード</td><td>Position, Velocity, Torque Control</td><td>Position, Velocity, Torque Control</td></tr>
    <tr><td>外径</td><td>80 mm</td><td>97 mm</td></tr>
    <tr><td>厚さ</td><td>47 mm</td><td>46 mm</td></tr>
    <tr><td>重量</td><td>392 g ±10%</td><td>395 g ±5%</td></tr>
    <tr><td>相抵抗</td><td>0.48 Ω ±10%</td><td>0.439 Ω ±10%</td></tr>
    <tr><td>相インダクタンス</td><td>368 μH ±10%</td><td>403 μH ±10%</td></tr>
  </tbody>
</table>

## 主な特徴

1. **高トルク出力**
2. **MITモード制御**
3. **磁気エンコーダフィードバック**
4. **コンパクトで軽量な設計**
5. **高速CANバス通信対応**
6. **多用途アプリケーション**

## 入門ガイド
### 使用前の準備
**Windowsシステム搭載のPCで**
- [製品マニュアル](https://files.seeedstudio.com/products/stackforce/%E6%96%B0%E7%89%886010%E5%85%B3%E8%8A%82%E7%94%B5%E6%9C%BA%E7%94%A8%E6%88%B7%E6%96%87%E6%A1%A3V1.1.pdf)。
- [VOFA](https://www.vofa.plus/)をダウンロード。

モーターのCANIDとCANModeは両方ともシリアルポート経由で変更されます。モーターは出荷時にデフォルトのCANID 0x01とCANMode CAN2.0（1Mbps）で設定されています。

### シリアルポート配線
V、G、T、Rをそれぞれシリアル通信モジュールのVCC（3.3V）、GND、RX、TXに接続します（RXとTXはクロス接続する必要があります）。下図のように：

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口通信端口
    .png"/>
</div>

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口工具.png"/>
</div>

### CANIDの変更
シリアルポートのボーレートを1Mbpsに設定します。

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID.png"/>
</div>

送信するCANIDは0x**で、設定するIDは0x**です。最大制限は0x7Fです。CANIDの設定が成功すると、以下のログが出力されます：

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID反馈.png"/>
</div>

### CANモードの変更
シリアルポート経由でCANMODE:0またはCANMODE:1を送信します。

CANMODE:0はCAN2.0モード（1Mbps）を表し、CANMODE:1はCANFDモード（5Mbps）を表します。

CANモードの変更が成功した場合は、以下の図のように表示されます：

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈1.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈2.png"/>
</div>

## [reComputer Mini Jetson Orin](/ja/recomputer_jetson_mini_getting_started)を使用したモーター制御
市場で最も一般的なモーター用CAN通信インターフェースは**XT30（2+2）**と**JSTコネクタ**です。私たちの**reComputer Mini Jetson Orin**と**reComputer Robotics**デバイスには**デュアルXT30（2+2）インターフェース**と**JSTベースのCANインターフェース**が搭載されており、シームレスな互換性を提供します。

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg "/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg "/>  
</div>

CAN使用に関するより詳細な情報については、この[wiki](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_hardware_interfaces_usage/#can)を参照してください。

### CANインターフェースの有効化

**ステップ1：** CAN0とCAN1を使用する前に、底面カバーを取り外し、2つの120Ω終端抵抗をON位置に設定してください。

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png " />
</div>

モーターに内蔵された120Ω CAN通信終端抵抗のトグルスイッチをオフにします。

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/电阻开关.png" />
</div>

:::tip
Recomputer Miniで120Ω終端抵抗をONに設定していない場合は、モーターのCAN通信終端抵抗のトグルスイッチをオンにすることができます。
:::

**ステップ2：** XT30（2+2）インターフェース経由でモーターをreComputer MiniのCAN0に直接接続します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Mini连接.jpg" />
</div>

:::tip
[reComputer MiniのCANインターフェース設計](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_hardware_interfaces_usage/#can0can1-通信)がモーターのCANインターフェースと逆になっているため、データラインを逆にするための手動はんだ付けが必要です。

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png" />
     <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/电机can接口.png" />
</div>

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/TX30.jpg" />
</div>

モーターが必要とする高電圧・大電流を考慮し、単一モーターを駆動するためにreComputer Miniに電力を供給する24V 300W電源アダプターの購入を推奨します。より多くのモーターを接続する必要がある場合は、要件に応じてより高出力の電源アダプターを購入できます。

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/适配器.jpg " />
</div>
:::

:::danger
この電源は単一モーターの学習とテスト用のみです。複数のモーターの場合は、別途電源ボードを設計し、JetsonとモーターのPowerを分離して、大電流がJetsonを直接通過しないようにしてください。
:::

### Jetson CAN通信の有効化
ターミナルを開き、以下のコマンドを入力してGPIOピンをハイにしてCAN0を有効化します：
```bash
gpioset --mode=wait 0 43=0
```

JSTインターフェースでCAN1を使用する場合は、ピン106をハイにします。
```bash
gpioset --mode=wait 0 106=0
```

このターミナルを開いたまま、新しいターミナルを起動してCAN0を設定します。
```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### PythonとC++環境のセットアップ

**ステップ1：** SDKをクローンします。
```bash
git clone https://github.com/Seeed-Projects/Stackforce-Motor-SDK.git 
```

**ステップ2：** ドライバーSDKには以下の依存関係が必要です。Debian Linuxでは、以下のコマンドでインストールできます：

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

Pythonバインディングが必要な場合は、さらにPython 3、pip、pybind11をインストールします：
```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

依存関係をインストールした後、以下の手順に従ってドライバーSDKをC++ライブラリまたはPythonパッケージとしてインストールします。どちらもCMakeを使用してC++コードをコンパイルします。

### C++を使用した制御

```bash
cd build
cmake ..
make
```

コンパイルされた実行ファイルは`build/sfmotor_control`に配置されます。プログラムを実行します：

```bash
./sfmotor_control
```

プログラムはデフォルトでID 0x01のモーターを制御します。動作中は、キーボード経由で目標角度値（ラジアン単位）を入力できます。また、モーターの角度と角速度のフィードバックデータも受信します。

### Pythonを使用した制御

Pythonスクリプトは`script/`ディレクトリにあり、コンパイルなしで直接実行できます。

```bash
python main.py 
```

プログラムはデフォルトでID 0x01のモーターを制御します。動作中は、キーボード経由で目標角度値（ラジアン単位）を入力できます。また、モーターの角度と角速度のフィードバックデータも受信します。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
