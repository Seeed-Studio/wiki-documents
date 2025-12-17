---
description: このwikiはStackforce シリーズモーターのチュートリアルを提供します。
title: Stackforce シリーズモーター
keywords:
- actuator
- motor
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010_homepage.webp
slug: /ja/stackforce_series
last_update:
  date: 11/26/2025
  author: Li Shanghang
translation:
    skip: [zh-CN]
---

# Stackforce X シリーズモーター入門ガイド

この記事では、Stackforce シリーズモーターの使い始め方と、reComputer Jetson Super で C++ と Python を使用する方法を紹介します。

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

すべてのモーターモデルのパラメータが記載された完全な表は以下の通りです：

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
2. **MIT モード制御**
3. **磁気エンコーダフィードバック**
4. **コンパクトで軽量な設計**
5. **高速 CAN バス通信サポート**
6. **多用途アプリケーション**

## 入門ガイド
### 使用前の準備
**Windows システムの PC で**
- [製品マニュアル](https://files.seeedstudio.com/products/stackforce/%E6%96%B0%E7%89%886010%E5%85%B3%E8%8A%82%E7%94%B5%E6%9C%BA%E7%94%A8%E6%88%B7%E6%96%87%E6%A1%A3V1.1.pdf)。
- [VOFA](https://www.vofa.plus/) をダウンロード。

モーターの CANID と CANMode は両方ともシリアルポート経由で変更されます。モーターは、デフォルトの CANID が 0x01、CANMode が 1Mbps の CAN2.0 で出荷されます。

### シリアルポート配線
V、G、T、R をそれぞれシリアル通信モジュールの VCC（3.3V）、GND、RX、TX に接続します（RX と TX はクロス接続する必要があります）。下図のように：

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口通信端口
    .png"/>
</div>

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口工具.png"/>
</div>

### CANID の変更
シリアルポートのボーレートを 1Mbps に設定します。

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID.png"/>
</div>

送信する CANID は 0x** で、設定する ID は 0x** です。最大制限は 0x7F です。CANID の設定が成功すると、以下のログが出力されます：

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID反馈.png"/>
</div>

### CAN モードの変更
シリアルポート経由で CANMODE:0 または CANMODE:1 を送信します。

CANMODE:0 は CAN2.0 モード（1Mbps）を表し、CANMODE:1 は CANFD モード（5Mbps）を表します。

CAN モードの変更が成功した場合は、以下の図のように表示されます：

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈1.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈2.png"/>
</div>

## [reComputer Mini Jetson Orin](/cn/recomputer_jetson_mini_getting_started) を使用したモーター制御
市場で最も一般的なモーター用 CAN 通信インターフェースは **XT30（2+2）** と **JST コネクタ** です。私たちの **reComputer Mini Jetson Orin** と **reComputer Robotics** デバイスには **デュアル XT30（2+2）インターフェース** と **JST ベースの CAN インターフェース** が搭載されており、シームレスな互換性を提供します。

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg "/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg "/>  
</div>

CAN 使用に関するより詳細な情報については、この [wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can) を参照してください。

### CAN インターフェースの有効化

**ステップ 1:** CAN0 と CAN1 を使用する前に、底面カバーを取り外し、2つの 120Ω 終端抵抗を ON 位置に設定してください。

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png " />
</div>

モーターに内蔵された 120Ω CAN 通信終端抵抗のトグルスイッチをオフにします。

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/电阻开关.png" />
</div>

:::tip
Recomputer Mini で 120Ω 終端抵抗を ON に設定していない場合は、モーターの CAN 通信終端抵抗のトグルスイッチをオンにすることができます。
:::

**ステップ 2:** XT30（2+2）インターフェース経由でモーターを reComputer Mini の CAN0 に直接接続します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Mini连接.jpg" />
</div>

:::tip
[reComputer Mini の CAN インターフェース設計](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can0can1-%E9%80%9A%E4%BF%A1) はモーターの CAN インターフェースとは逆になっているため、データラインを逆にするために手動でのはんだ付けが必要です。

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

モーターが必要とする高電圧・大電流を考慮すると、単一モーターを駆動するために reComputer Mini に電力を供給する 24V 300W 電源アダプターの購入をお勧めします。より多くのモーターを接続する必要がある場合は、要件に応じてより高出力の電源アダプターを購入できます。

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/适配器.jpg " />
</div>
:::

:::danger
この電源は単一モーターの学習とテスト専用です。複数のモーターの場合は、別途電源ボードを設計し、Jetson の電源をモーター電源から分離して、大電流が Jetson を直接通過することを避けてください。
:::

### Jetson CAN 通信の有効化
ターミナルを開き、以下のコマンドを入力して GPIO ピンをハイにして CAN0 を有効化します：
```bash
gpioset --mode=wait 0 43=0
```

JST インターフェースで CAN1 を使用する場合は、ピン 106 をハイにします。
```bash
gpioset --mode=wait 0 106=0
```

このターミナルを開いたまま、新しいターミナルを開始し、CAN0 を設定します。
```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Python と C++ 環境のセットアップ

**ステップ 1:** SDK をクローンします。
```bash
git clone https://github.com/Seeed-Projects/Stackforce-Motor-SDK.git 
```

**ステップ 2:** ドライバー SDK には以下の依存関係が必要です。Debian Linux では、以下のコマンドでインストールできます：

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

Python バインディングが必要な場合は、さらに Python 3、pip、pybind11 をインストールします：
```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

依存関係をインストールした後、以下の手順に従ってドライバー SDK を C++ ライブラリまたは Python パッケージとしてインストールします。どちらも CMake を使用して C++ コードをコンパイルします。

### C++ を使用した制御

```bash
cd build
cmake ..
make
```

コンパイルされた実行ファイルは `build/sfmotor_control` にあります。プログラムを実行します：

```bash
./sfmotor_control
```

プログラムはデフォルトで ID 0x01 のモーターを制御します。動作中は、キーボード経由で目標角度値（ラジアン単位）を入力できます。また、モーターの角度と角速度のフィードバックデータも受信します。

### Python を使用した制御

Python スクリプトは `script/` ディレクトリにあり、コンパイルなしで直接実行できます。

```bash
python main.py 
```

プログラムはデフォルトで ID 0x01 のモーターを制御します。動作中は、キーボード経由で目標角度値（ラジアン単位）を入力できます。また、モーターの角度と角速度のフィードバックデータも受信します。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
