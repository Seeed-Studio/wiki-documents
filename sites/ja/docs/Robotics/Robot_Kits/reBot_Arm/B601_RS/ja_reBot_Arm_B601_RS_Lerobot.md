---
description: このWikiでは、LeRobotフレームワーク内でのデータ収集と学習を実装するための reBot Arm B601-RS の完全なガイドを提供します。
title: LeRobot で始める reBot Arm B601-RS
keywords:
  - Lerobot
  - Huggingface
  - ロボットアーム
  - rebot arm
  - ロボット
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-15
  author: LiuJunjie
translation:
  skip: [zh-CN]
createdAt: '2026-06-17'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_lerobot/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# LeRobot ベースの reBot Arm B601-RS 入門

<RebotRsDocNav />


<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6 自由度ロボットアーム · 複数モーター対応 · 運動学ソルバー · 軌道計画 · 完全オープンソース</strong>
</p>

[reBot Arm B601-RS](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/) は Seeed が立ち上げたオープンソースのロボットアームプロジェクトで、エンボディドインテリジェンス学習のハードルを下げることを目的としています。構造設計とコードを余すところなくすべてオープンソース化し、ロボット技術を誰もが利用できるようにしています。


[LeRobot](https://github.com/huggingface/lerobot/tree/main) は、PyTorch を用いて実世界ロボティクス向けのモデル、データセット、ツールを提供することに取り組んでいます。その目的はロボティクスの参入障壁を下げ、誰もがデータセットや事前学習モデルを共有し、貢献し、恩恵を受けられるようにすることです。LeRobot は、模倣学習と強化学習を中心に、実世界で検証された最先端の手法を統合しています。人間によるデモを含むデータセット、事前学習済みモデル群、シミュレーション環境を提供しており、ユーザーはロボットを組み立てることなくすぐに始めることができます。

### 📖 プロジェクト概要

**reBot-DevArm（reBot Arm B601 DM と reBot Arm B601 RS）** は、エンボディドインテリジェンス学習のハードルを下げることを目的としたロボットアームプロジェクトです。私たちは **「真のオープンソース」** に注力しており、コードだけでなく、以下のすべてを余すところなく公開しています：
- 🦾 **2 種類のモーターバージョンを備えたオープンソースロボットアーム**：同一外観で RoboStride モーター版と Damiao モーター版のすべてのオープンソースファイルを提供します。
- 🛠️ **ハードウェア設計図**：板金および 3D プリント部品のソースファイル。
- 🔩 **BOM（部品表）**：すべてのネジ 1 本ごとの仕様と購入リンクまで詳細に記載。
- 💻 **ソフトウェアとアルゴリズム**：Python SDK、ROS1/2、Isaac Sim、LeRobot など。

## reBot ロボットアームを構築する

- 5 種類のキットオプションを提供しています：
  - **ロボットアーム本体モーターキット**：ロボットアームに必要なモーターとハーネスのみを含みます。
  - **ロボットアーム本体構造部品キット**：機械構造部品のみを含みます。
  - **グリッパーコンプリートキット**：グリッパー用のモーター、ハーネス、構造部品を含みます。
  - **アームコンプリートキット**：ロボットアーム本体とグリッパーのすべての部品を含みます。
  - **完成組立済みロボットアーム**：完全に組み立て済みのロボットアームです。

reBot-DevArm と reComputer Jetson AI インテリジェントロボットキットは、高精度なロボットアーム制御と強力な AI コンピューティングプラットフォームをシームレスに統合し、包括的なロボット開発ソリューションを提供します。このキットは Jetson Orin または AGX Orin プラットフォームをベースに、reBot-DevArm と LeRobot AI フレームワークを組み合わせることで、教育、研究、産業オートメーションなど複数のシナリオに適用可能なインテリジェントロボットシステムをユーザーに提供します。

この Wiki では reBot-DevArm のデバッグチュートリアルを提供し、LeRobot フレームワーク内でのデータ収集と学習を実装します。

:::caution
Seeed Studio のチュートリアルは公式ドキュメントに基づいて厳密に更新されています。解決できないソフトウェアや環境の問題に遭遇した場合は、まず記事末尾の FAQ を確認するか、カスタマーサービスに連絡して SeeedStudio LeRobot 議論グループに参加してください。こちらでも質問できます：[LeRobot GitHub](https://github.com/huggingface/lerobot) または [Discord Channel](https://discord.gg/8TnwDdjFGU)。
:::

## 🔧 reBot B601-RS シリーズの特長:

1. **オープンソース & 低コスト**
   reBot Arm は Seeed Studio によるオープンソースかつ低コストのロボットアームソリューションで、エンボディドインテリジェンス学習のハードルを下げることを目的としています。

2. **LeRobot プラットフォームとの統合**
   [LeRobot プラットフォーム](https://github.com/huggingface/lerobot) との統合を前提に設計されています。このプラットフォームは、実ロボットタスクの模倣学習向けに、PyTorch モデル、データセット、ツール（データ収集、シミュレーション、学習、デプロイを含む）を提供します。

3. **豊富な学習リソース**
   組立およびキャリブレーションガイド、テストとデータ収集チュートリアル、学習とデプロイのドキュメントなど、包括的なオープンソース学習リソースを提供し、ユーザーがロボットアプリケーションを迅速に習得・開発できるよう支援します。

4. **Nvidia プラットフォーム互換**
   reComputer Mini J4012 Orin NX 16GB プラットフォームによるデプロイをサポートします。

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1mFo7BiEwX&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

## 初期システム環境

**Ubuntu x86 の場合：**
  - Ubuntu 22.04
  - CUDA 12+
  - Python 3.10
  - Torch 2.6

**Jetson Orin の場合：**
  - Jetson JetPack 6.0 および 6.1、6.2 は非対応
  - Python 3.10
  - Torch 2.3+

## LeRobot をインストールする

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV12Fo7BvE7G&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

CUDA バージョンに応じて、pytorch、torchvision などの環境をインストールする必要があります。

### 1. Miniforge をインストールする

```bash
cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc
```

### 2. Lerobot リポジトリをクローンする

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git
```

### 3. Conda 環境を作成し LeRobot をインストールする

:::tip
各機能パッケージの詳細な機能については、以下を参照してください：
- [lerobot-teleoperator-rebot-arm-102](https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102)
- [lerobot-robot-seeed-b601](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601)
:::

lerobot リポジトリにはすでに pyproject.toml が含まれています。conda 環境を作成し、すべての依存関係をインストールします。

```bash
cd ~/rebot_lerobot

# Create conda environment (Python 3.10)
conda create -y -n lerobot python=3.10

# Activate environment
conda activate lerobot

# Install lerobot main project (editable mode)
pip install -e ./lerobot

# Add dependency packages
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge
```

### 4. ffmpeg をインストールする

ffmpeg は動画デコードの依存関係であり、conda 経由でインストールします：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
**バージョンに関する注意**:
- デフォルトでは ffmpeg 7.X がインストールされます（libsvtav1 エンコーダーをサポート）
- バージョン互換性の問題が発生した場合は、ffmpeg 7.1.1 を指定できます：
  ```bash
  conda install ffmpeg=7.1.1 -c conda-forge
  ```
- `ffmpeg -encoders | grep svtav1` によって libsvtav1 エンコーダーがサポートされているか確認できます
:::

### 5. Jetson JetPack 6.0+ デバイス向け特別設定

（PC の場合はこのステップをスキップ）Jetson JetPack 6.0+ デバイスの場合（このステップを実行する前に、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) のステップ 5 に従って Pytorch-gpu と Torchvision をインストールしていることを確認してください）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies via conda, for Jetson Jetpack 6.0+ only
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Install specific OpenCV version using pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This version must be compatible with torchvision
```

### 6. Pytorch と Torchvision を確認する

:::tip
Jetson デバイスを使用している場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) に従って Pytorch と Torchvision をインストールしてください。
:::

pip による lerobot 環境のインストールでは、元の Pytorch と Torchvision がアンインストールされ、CPU 版がインストールされるため、Python で確認を行う必要があります。

```python
python3

import torch
print(torch.cuda.is_available())#Should output True
```

出力が True の場合は、exit() と入力して Python を終了し、次のステップに進んでください。
出力が False の場合は、[公式チュートリアル](https://pytorch.org/index.html) に従って Pytorch と Torchvision を再インストールする必要があります。

## ロボットアームをキャリブレーションする

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1KFo7BiE1h&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

次に、reBot B601-RS ロボットのキャリブレーションを行うために、電源とデータケーブルを接続する必要があります。これは、リーダーアームとフォロワーアームが同じ物理位置にあるときに、同じ位置値を持つようにするためです。このキャリブレーションは、ある reBot B601-RS ロボットで学習したニューラルネットワークを別のロボットでも動作させるために不可欠です。ロボットアームを再キャリブレーションする必要がある場合は、`~/.cache/huggingface/lerobot/calibration/robots` または `~/.cache/huggingface/lerobot/calibration/teleoperators` 配下のファイルを完全に削除してから、ロボットアームを再キャリブレーションしてください。そうしないと、エラーが表示されます。ロボットアームのキャリブレーション情報は、このディレクトリ配下の JSON ファイルに保存されます。

### フォロワーアームのキャリブレーション

:::tip
フォロワーに接続できない場合は、Getting Started の Wiki に移動し、motorbridge が提供するインターフェースを使用してロボットアームが正常に動作しているかテストしてみてください。
:::

B601-RS は、組み立て後に 1 回だけキャリブレーションを行えば十分です。以下がキャリブレーションコマンドです。ゼロ位置（グリッパーが完全に閉じた状態）については図を参照してください。

```bash

# follower
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up

lerobot-calibrate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_0pos.jpg" />
  </div>

Jetson（Jetpack 6.x）を使用する場合は、以下の手順で Jetson に対応する CAN ポート番号を確認してください。

```bash
for i in /sys/class/net/can*; do
    [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"
done
```

出力:

```
cam2  # also maybe can0,can1,can x
```

以降のすべてのフォロワー用コマンドで使用するポート番号は、ここで得られた出力と一致している必要があります。

Jetson に PCAN ドライバがインストールされていない場合、通信は常に失敗します。[Quick Start](https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/#3pcan-usb) セクションの Jetson PCAN ドライバインストールガイドを参照してください。


### リーダーアームのキャリブレーション

キャリブレーション手順は非常に重要であり、ロボットアームが正常に動作するかどうかに直接影響します。必ず手順に厳密に従ってください。

<details>

<summary> rebot 102 leader </summary>

:::tip
**reBot 102 leader キャリブレーションの注意事項**:
- キャリブレーション開始時、reBot Arm 102 上の各サーボの現在位置は**ゼロにリセット**されます
- `joint_ranges`（関節リミット）は、キャリブレーションデータではなく、設定ファイル `config_rebot_arm_102_leader.py` から取得されます
- ある関節が常にリミット付近で引っかかっているように見える場合は、まず `joint_ranges` の設定を確認してください
- 関節の回転方向は設定ファイルで定義されています。方向が一致しない場合は、再キャリブレーションではなく設定ファイルを修正してください
- reBot 102 leader は USB–UART モジュールを使用しており、通常は `/dev/ttyUSB*` に割り当てられます
- 実際のポート番号は `ls /dev/ttyUSB*` で確認してください

初回接続時には、`/dev/ttyACM0` が見つからないというエラーが発生する場合があります。これは brltty がシリアルポートを占有しているためです。以下の手順を実行してください。

```bash
sudo dmesg | grep ttyUSB #Check the last line shows "disconnected"
sudo apt remove brltty #Remove brltty
```
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" />
</div>

プロンプトに従い、上図に示すゼロ位置までリーダーアームを動かします。

```bash
sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

そのまま静止させ、キャリブレーションが完了するまで Enter キーを押し続けてください。
キャリブレーション後、次のコマンドを入力してリーダーアームをテストします。

```bash
python ./lerobot-teleoperator-rebot-arm-102/examples/read_raw_angles.py \
      --port /dev/ttyUSB0

#If you observe terminal output similar to the following printing continuously, and when at the zero position shown above, all joint output values are 0, then leader calibration is complete.
#shoulder_pan=    0.00  shoulder_lift=    0.00  elbow_flex=    0.00  wrist_flex=    0.00  wrist_yaw=    0.00  wrist_roll=    0.00  gripper=    0.00
```

</details>

## テレオペレーション

:::danger
**すべてのロボットアームの動作シーンにおいて、同じレベルの注意が必要です！**

テレオペレーション中に、マスタースレーブロボットアームで電源断、電源接触不良、信号線の脱落などが発生した場合は、まずプログラムコードを停止し、ロボットアームをホームのゼロ位置に戻す必要があります。その後で電源を再接続し、プログラムを再起動してください。これにより、データの乱れによるロボットアームの暴走や安全上のリスクを防ぐことができます。

:::

まずシリアルポートに対して権限を付与します：

```bash
# leader
sudo chmod 666 /dev/ttyUSB*
# follower
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

テレオペレーションを実行します：
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```
<!-- <div class="video-container">
    <iframe
        width="900"
        height="600"
        src="https://player.bilibili.com/player.html?bvid=BV1A6JM62EeK&page=1&high_quality=1&danmaku=0&autoplay=0&muted=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true">
    </iframe>
</div> -->

## カメラを追加する

<details>
<summary> RealSense D435i/D405 を使用する場合 </summary>

RealSense 深度カメラは LeRobot に RGB-D 認識機能を提供し、物体認識、点群再構成、テーブルトップマニピュレーションなどのタスクに適しています。ここで推奨するモデルは **RealSense D405** と **RealSense D435i** です。

**RealSense D405**

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

RealSense D405 は短距離ステレオ深度カメラであり、テーブルトップロボットマニピュレーションなどの高精度な近距離タスク向けに設計されており、一般的な動作距離は **7 cm ～ 50 cm** です。

**RealSense D435i**

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

RealSense D435i は、深度センシング、RGB 画像、および IMU を組み合わせており、3D 再構成、SLAM、ロボットによる環境認識などの中距離〜近距離アプリケーションに適しています。

**1. カメラ用ブランチに切り替える**

現在のカメラサポートは `DepthCameraSupport` ブランチで提供されています：

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

現在のブランチを確認します：

```bash
git branch --show-current
```

期待される出力：

```bash
DepthCameraSupport
```

**2. RealSense をインストールする：**

RealSense のみを使用する場合：

```bash
pip install -e ".[realsense]"
```

**3. 権限を付与する**

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

**4. カメラを検出する**

```bash
lerobot-find-cameras realsense
```

このステップでは、次の情報が出力されます：

- カメラモデル
- シリアル番号
- USB 情報
- デフォルトのストリーム設定

**5. RealSense の例**

デュアル RealSense テスト：

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      max_depth_m: 2.0,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    },
    d405_color: {
      type: realsense_d405_color,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d405_depth: {
      type: realsense_d405_depth,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      depth_alpha: 0.03,
      rotation: 0,
      warmup_s: 5
    }
  }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**6. パラメータに関する注意事項**

- `depth_alpha` は深度画像のスケーリング係数を制御し、表示結果や対象物までの距離範囲に応じて調整できます。
- 3 台以上の深度カメラを接続する場合は、全体の安定性を高めるために `fps` を `15` に下げることを推奨します。
- 安定性とリアルタイム性のバランスを取るため、解像度は `640x480` に保つことを推奨します。

</details>

<details>

<summary> Orbbec Gemini2 Depth Camera を使用する場合 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

RGB と Depth のストリームを同期して提供し、高精度な Depth とカラーのアライメントを実現します。ステレオ Depth センシングと内蔵 6 軸 IMU を組み合わせることで、物体検出、3D 認識、マッピング、ナビゲーションなどのロボットタスクに非常に適しています。コンパクトな設計と完全な Orbbec SDK サポートにより、研究用途だけでなく実環境での展開にも適しています。

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>

Gemini 336 は Gemini 330 シリーズの新しいメンバーです。Gemini 335 の優れた Depth 性能を受け継ぎつつ、反射の多い屋内エリア、高ダイナミックシーンの暗部、明るい屋外環境における Depth 画像品質をさらに向上させています。ロボットアプリケーション向けに、認識、自己位置推定、マニピュレーションなどのタスクに対して、より安定した高品質の Depth データを提供できます。

* 🚀 ステップ 1: Orbbec SDK の依存関係をインストールする

**1. Camera ブランチに切り替える**

現在のカメラサポートは `DepthCameraSupport` ブランチで利用できます：

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

現在のブランチを確認します：

```bash
git branch --show-current
```

期待される出力：

```bash
DepthCameraSupport
```

**2. Orbbec をインストールする**

```bash
pip install -e ".[orbbec]"
```

**3. 権限を付与する**

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

**4. カメラを検出する**

```bash
lerobot-find-cameras orbbec
```

このステップでは次の情報が出力されます：

- カメラモデル
- シリアル番号
- USB 情報
- デフォルトのストリーム構成

**5. Orbbec の例**

単一 Orbbec テスト：

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      rotation: 0,
      warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 400,
      fps: 30,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    }
  }" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**6. パラメータの注意事項**

- `depth_alpha` は Depth 画像のスケーリング係数を制御します。`0.2` を良い出発点として、表示結果に基づいて微調整してください。
- 3 台以上の Depth カメラを接続する場合は、安定性を高めるために `fps` を `15` に下げることを推奨します。
- より安定した表示とデータ転送のために、解像度は `640x480` に保つことを推奨します。

**7. よくある問題**

次のようなエラーが表示される場合：

```bash
No Orbbec camera found for 'XXXX'
```

通常、これは設定内のシリアル番号が現在接続されているデバイスと一致していないことを意味します。次を実行します：

```bash
lerobot-find-cameras orbbec
```

その後、実際の `serial` を確認し、コマンド内の `serial_number_or_name` を更新してください。

**💡 著者と貢献**

- 著者: Zhang Jiaquan, Wang Wenzhao - South China Normal University

</details>

<details>

<summary> 汎用カメラを使用する場合 </summary>

カメラをインスタンス化するには、カメラ識別子が必要です。この識別子は、コンピュータを再起動したりカメラを再接続したりすると変更される場合があり、この挙動は主にオペレーティングシステムに依存します。

システムに接続されているカメラのインデックスを見つけるには、次のスクリプトを実行します：

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

ターミナルには関連するカメラ情報が表示されます。

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

各カメラで撮影された画像は、`~/lerobot/outputs/captured_images` ディレクトリで確認できます。

:::warning
Intel RealSense カメラを **macOS** で使用する場合、**"Error finding RealSense cameras: failed to set power state"** というエラーが発生することがあります。これは同じコマンドを `sudo` 権限で実行することで解決できます。ただし、**macOS** で RealSense カメラを使用することは不安定である点に注意してください。
:::

その後、次のコードを実行することで、テレオペレーション中にコンピュータ上でカメラ映像を表示できるようになります。これは、最初のデータセットを記録する前にセットアップを準備するのに役立ちます。

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

:::tip
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV` 形式を試すことも可能です。ただし、後者は画像解像度と FPS を低下させ、ロボットアームの動作にラグが生じます。現在、`MJPG` 形式では、`1920*1080` の解像度で `30FPS` を維持しながら 3 台のカメラをサポートできます。しかし、同じ USB HUB を介して 2 台のカメラをコンピュータに接続することは依然として推奨されません。
:::

さらに多くのカメラがある場合は、`--robot.cameras` パラメータを変更して追加できます。`index_or_path` の形式には注意する必要があり、これは `python -m lerobot.find_cameras opencv` によって出力されるカメラ ID の末尾の数字によって決まります。

例えば、カメラを追加したい場合：

<!-- TODO: reBot multi-camera configuration command -->
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

</details>

## データセット収集

<!-- <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?bvid=BV1W3okBNEAJ&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div> -->

<details>

<summary> データセットをローカルに保存したい場合 </summary>

<!-- TODO: reBot local data collection command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

その中で、`repo_id` は任意に変更でき、`push_to_hub=false` とします。最終的に、データセットはホームフォルダ内の `~/.cache/huggingface/lerobot` ディレクトリに保存され、前述の `seeed_rebot_b601_rs/test` フォルダが作成されます。

</details>

<details>
<summary> データセットをアップロードするために Hugging Face Hub の機能を使用したい場合 </summary>

- データセットをアップロードするために Hugging Face Hub の機能を使用したい場合で、これまでに行っていない場合は、[Hugging Face settings](https://huggingface.co/settings/tokens) から生成できる書き込み権限付きトークンを使用してログインしていることを確認してください：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

これらのコマンドを実行するために、Hugging Face リポジトリ名を変数に保存します：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

5 エピソードを記録し、データセットを Hub にアップロードします：

<!-- TODO: reBot data collection and upload to Hugging Face command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

次のような行が多数表示されます：
```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

</details>

**Record 関数**

**record** 関数は、ロボットの動作中にデータを取得および管理するための一連のツールを提供します。

**1. データ保存**

- データは `LeRobotDataset` 形式で保存され、記録中にディスクへ保存されます。
- デフォルトでは、記録後にデータセットはあなたの Hugging Face ページにプッシュされます。
- アップロードを無効にするには、`--dataset.push_to_hub=False` を使用します。

**2. チェックポイントと再開**

- チェックポイントは記録中に自動的に作成されます。
- 中断後に再開するには、同じコマンドを `--resume=true` を付けて再実行します。

⚠️ **重要な注意**：再開する際は、`--dataset.num_episodes` を「データセット全体の目標エピソード数」ではなく、「追加で記録したいエピソード数」に設定してください。
- 最初から記録をやり直したい場合は、データセットディレクトリを**手動で削除**します。

**3. 記録パラメータ**

コマンドライン引数を使ってデータ記録の流れを設定します：

| パラメータ | 説明 | デフォルト |
|------|------|--------|
| --dataset.episode_time_s | 1エピソードあたりの継続時間（秒） | 60 |
| --dataset.reset_time_s | 各エピソード後の環境リセット時間（秒） | 60 |
| --dataset.num_episodes | 記録するエピソードの総数 | 50 |

**4. 記録中のキーボード操作**

キーボードショートカットでデータ記録の流れを制御します：

| キー | 動作 |
|----|------|
| →（右矢印） | 現在のエピソード／リセットを早期終了し、次へ進む。 |
| ←（左矢印） | 現在のエピソードをキャンセルし、録り直す。 |
| ESC | セッションを即座に停止し、動画をエンコードしてデータセットをアップロードする。 |

:::tip
キーボード入力が反応しない場合は、`pynput` のバージョンを 1.6.8 などにダウングレードする必要があるかもしれません。
```bash
pip install pynput==1.6.8
```
:::

**データ収集のヒント**

- **タスクの提案**：さまざまな位置にある物体を把持して、ビンに入れる。
- **スケール**：50エピソード以上を記録する（位置ごとに10エピソード）。
- **一貫性**：
  - カメラは固定したままにする。
  - 同じ把持動作を維持する。
  - 操作対象の物体がカメラ映像内に見えるようにする。
- **段階的な拡張**：
  - まずは安定して把持できる状態にしてから、（新しい位置、把持方法、カメラ調整などの）バリエーションを追加する。
  - 失敗を防ぐため、複雑さを急激に増やさない。

💡 **経験則**：画面上のカメラ画像だけを見て、自分自身でタスクを実行できる状態であるべきです。

この重要なトピックをさらに深く知りたい場合は、「良いデータセットとは何か」について執筆した[ブログ記事](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)を参照してください。

**トラブルシューティング**

Linux 固有の問題：
記録中に Right Arrow/Left Arrow/ESC キーが反応しない場合：
- `$DISPLAY` 環境変数が設定されているか確認します（[pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html) を参照）。

## データセットの可視化

```bash
echo ${HF_USER}/rebot_test
```

データをアップロードしている場合は、次のコマンドでローカルでも可視化できます：

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

`--dataset.push_to_hub=false` を使用してデータをアップロードしていない場合も、次のコマンドでローカル可視化が可能です：

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false
```

ここで、`seeed_rebot_b601_rs/test` はデータ収集中に定義したカスタムの `repo_id` 名です。

## エピソードのリプレイ

:::tip
不安定なため、スキップしても試してみても構いません。
:::

ここでは、最初のデータセットをロボット上でリプレイしてみましょう：

<!-- TODO: reBot dataset replay command -->
```bash
lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0
```

この時点で、ロボットは記録時にテレオペレーションで行ったのと同じ動作を実行するはずです。

## 学習と評価

<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

公式チュートリアル [ACT](https://huggingface.co/docs/lerobot/act) を参照してください。

**学習（トレーニング）**

ロボットを制御するポリシーを学習させるには、`python -m lerobot.scripts.train` スクリプトを使用します。いくつかのパラメータ指定が必須です。以下はコマンド例です：

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/rebot_test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000
```

**ローカルデータセットで学習したい場合は、`repo_id` がデータ収集時に使用した名前と一致していることを確認し、`--policy.push_to_hub=false` を追加してください。**

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

:::tip

RTX 50 シリーズ GPU を使用している場合は、torchvision のプレビュー版で不足している API を回避するために、`--dataset.video_backend=pyav` を追加する必要があります。学習コマンドは次のようになります：

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

:::

コマンドの説明

- **データセット指定**：`--dataset.repo_id=${HF_USER}/rebot_test` パラメータでデータセットを指定します。
- **学習ステップ数**：`--steps=300000` で学習ステップ数を変更します。アルゴリズムのデフォルトは 800000 ステップです。タスクの難易度に応じて調整してください。よく分からない場合は多めに設定して構いません。学習中にチェックポイントが生成されるため、任意のチェックポイントから評価を再開できます。
- **ポリシータイプ**：`policy.type=act` でポリシーを指定します。同様に、[`act`, `diffusion`, `pi0`, `pi0fast`, `sac`, `smolvla`] などのポリシーを切り替えることもできます。これにより `configuration_act.py` から設定が読み込まれます。重要な点として、このポリシーは、モータ状態・モータアクション・カメラ数といった情報がすでにデータセットに保存されているため、あなたのロボットに自動的に適応します。
- **デバイス選択**：Nvidia GPU 上で学習しているため `policy.device=cuda` を指定していますが、Apple Silicon で学習する場合は `policy.device=mps` を使用できます。
- **可視化ツール**：学習曲線を [Weights and Biases](https://docs.wandb.ai/quickstart) で可視化するために `wandb.enable=true` を指定しています。これは任意ですが、使用する場合は `wandb login` を実行してログインしておいてください。

**評価**

ポリシーのチェックポイントを入力として、[`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) の `record` 関数を使用できます。例えば、次のコマンドを実行して 10 エピソード分の評価を記録します：

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
```

1. `--policy.path` パラメータは、ポリシー学習結果の重みファイルへのパスを示します（例：`outputs/train/act_rebot_test/checkpoints/last/pretrained_model`）。モデル学習結果の重みファイルを Hub にアップロードした場合は、モデルリポジトリ（例：`${HF_USER}/act_rebot_test`）を使用することもできます。
2. データセット名 `dataset.repo_id` は `eval_` で始まります。この操作により、評価中の動画とデータが別々に記録され、`seeed/eval_test123` のような `eval_` で始まるフォルダに保存されます。
3. 評価フェーズ中に `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` というエラーが発生した場合は、まず `eval_` で始まるフォルダを削除してから、再度プログラムを実行してください。
4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model` というメッセージが出た場合は、`--robot.cameras` パラメータ内の `front` や `side` といったキーワードが、データセット収集時に使用したものと厳密に一致している必要がある点に注意してください。

</details>

<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

公式チュートリアル [SmolVLA](https://huggingface.co/docs/lerobot/smolvla) を参照してください。

SmolVLA は Hugging Face が提供する**軽量なロボット基盤モデル**です。自分で記録した LeRobot データセットを使って、**素早くファインチューニングし、実機ロボットで結果を得られる**ように設計されています。

簡単に言うと、その入出力は次のとおりです：

- 入力：マルチカメラ映像 + ロボットの現在状態（センサー／関節など）+ 自然言語によるタスク指示
- 出力：タスクを実行するためにロボットアームを駆動する連続的なアクションチャンク

```bash
pip install -e ".[smolvla]"
```

**データセット収集（推奨）**

SmolVLA は「基盤モデル」です。自分のテーブル上で、自分のカメラ・グリッパ・物体に対して良い性能を出すには、通常、自前のデータでファインチューニングする必要があります。

- まずは約 50 エピソードから始めます（少なすぎると学習や汎化がうまくいかない可能性があります）。
- タスクに「変数」（例：テーブル上のキューブ位置の違い）がある場合は、それぞれのバリエーションに十分なデモを用意してください：
  - 例：5 つの位置 × 各 10 エピソード = 50 エピソード
- 経験則：25 エピソードだけの記録では不十分であることが多いです。データの質と量の両方が重要です。

**学習（トレーニング）**

事前学習済み 450M モデルである `smolvla_base` を出発点として、自分のデータセットでファインチューニングします。公式の例では 20k ステップ学習しており、単一の A100 では約 4 時間かかります（あくまで参考値であり、実際の時間はハードウェアによって異なります）。

GPU が利用できない場合は、Colab ノートブック経由での学習を検討してください（公式チュートリアルを参照）。

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

ヒント：

- メモリが不足する場合は、まず `--batch_size` を小さくしてください。動作することを確認したら、徐々に増やしていきます。
- 利用可能なパラメータ一覧：`lerobot-train --help`

**評価**

評価フェーズでは、ファインチューニング済みモデルを読み込み、ロボットにタスクを実行させ、その評価プロセスを新しいデータセットとして記録します（動画の振り返りや結果分析のため）。

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.id=follower1 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=${HF_USER}/FINETUNE_MODEL_NAME
```

パラメータの設定方法：

- `--robot.port`: マシンで認識されているシリアルポートに変更します（一般的には `can0` や `/dev/ttyACM0`）。
- `--robot.id`: ロボット ID（キャリブレーション／記録時に使用したものと一致している必要があります）。
- `--robot.cameras`: 実際のカメラの `index_or_path` に変更し、カメラキー（例：`front`、`side`）がデータセット記録時に使用したものと完全に一致していることを確認します。
- `--dataset.single_task`: データセット記録時に使用したタスク記述と一致させる必要があります。
- `--dataset.repo_id`: 評価結果の出力データセット名。Hugging Face にログインしている場合は、自分のアカウント配下に作成／アップロードされます。
- `--policy.path`:
  - モデルがローカルにある場合：学習出力ディレクトリ配下の重みパスを指定します（例：`outputs/train/my_smolvla/checkpoints/last/pretrained_model`）
  - モデルが Hub 上にある場合：`${HF_USER}/FINETUNE_MODEL_NAME` を指定します

任意：評価エピソードの合間に「手動テレオペで微調整」したい場合は、テレオペを追加できます（自分のデバイスと設定に合わせて記入）：

```bash
--teleop.type=rebot_arm_102_leader \
--teleop.port=/dev/ttyUSB0 \
--teleop.id=rebot_arm_102_leader
```

</details>

<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

公式チュートリアル [Pi0](https://huggingface.co/docs/lerobot/pi0) を参照してください。

π₀（Pi0）は、より「汎用的な」ロボット制御のために Physical Intelligence が提案した **Vision-Language-Action** モデルです。カメラ画像を見て自然言語の指示を理解し、そのうえでロボットアームを制御するアクションを出力できるモデルと考えることができます。

LeRobot での利用はとても簡単で、学習時にポリシータイプを `--policy.type=pi0` に設定するだけです（ACT セクションで説明した一般的な学習／評価の概念を繰り返す必要はありません）。

```bash
pip install -e ".[pi]"
```

:::tip
古いバージョンの LeRobot（例：0.4.0）を使用している場合、GitHub ソースから `pi` 依存関係をインストールする必要があるかもしれません（公式ドキュメント側で後続のパッチで修正予定です）：

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**学習**

```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

共通パラメータ（Pi0 固有／よく調整するもののみ）：

- `--policy.pretrained_path=lerobot/pi0_base`: ベースモデル。公式からは `lerobot/pi0_libero`（Libero データセット向けバージョン）も提供されており、タスクに応じて切り替えを試すことができます。
- `--policy.compile_model=true`: コンパイル最適化を有効化し、学習が高速になる場合があります（初回コンパイルは遅くなります）。
- `--policy.gradient_checkpointing=true`: VRAM を大幅に節約でき、VRAM が厳しい場合に適しています。
- `--policy.dtype=bfloat16`: 混合精度で、速度／VRAM の両面で有利です（ハードウェアが対応している場合に推奨）。
- `--policy.train_expert_only=true`（VRAM 節約テクニック）：大規模モデル（VLM）部分を凍結し、「アクションエキスパート」と射影層のみを学習します。より多くの VRAM を節約できますが、学習可能な容量は制限されます。まずは入門や小規模データでの素早い実験に適しています。

**評価**

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi0_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

公式チュートリアル [Pi0.5](https://huggingface.co/docs/lerobot/pi05) を参照してください。

π₀.₅（Pi0.5）も Physical Intelligence が提案した **Vision-Language-Action** モデルで、π₀ の「アップグレード版」と理解できます。特に **オープンワールド一般化** 能力の強化に重点が置かれており、学習時に見た固定シナリオで良好に動作するだけでなく、新しい部屋・新しい物体・新しい配置でも、より安定してタスクを完了できることを目指しています。

ここでいう「一般化」は、おおまかに次の 3 つのレベルに分けられます（理解のための例）：

- **物理レイヤー**：見慣れないスプーン／皿でも、どこを持つべきか（柄／縁）を理解して把持し、散らかった環境でも操作できること。
- **意味レイヤー**：「どこに物を置くべきか／どの道具を使うべきか」を理解すること。例：靴は下駄箱、服は洗濯かごに入れる、など。
- **環境レイヤー**：家庭・オフィス・病院など、より現実的で「散らかった」シナリオに適応できること。

LeRobot で利用するには、ポリシータイプを `--policy.type=pi05` に設定するだけです。

```bash
pip install -e ".[pi]"
```

:::tip
古いバージョンの LeRobot（例：0.4.0）を使用している場合、GitHub ソースから `pi` 依存関係をインストールする必要があるかもしれません（公式ドキュメント側で後続のパッチで修正予定です）：

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**学習**

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

共通パラメータ（Pi0.5 関連）：

- `--policy.pretrained_path=lerobot/pi05_base`: ベースモデル。公式からは `lerobot/pi05_libero` も提供されています。
- `--policy.train_expert_only=true`（VRAM 節約テクニック）：大規模モデル（VLM）部分を凍結し、「アクションエキスパート」と射影層のみを学習します。
- `--policy.normalization_mapping=...`: データセットの正規化統計が一致していない／欠けている場合、このマッピングを使って正規化方法を強制できます。

データセットに分位点統計が含まれていない場合（バージョン／フォーマットによっては必須）、公式からは変換スクリプトによるアプローチも提供されています。学習前にデータセット統計を補完／変換します（詳細は公式ドキュメントを参照）。

**評価**

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi05_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

公式チュートリアル [GR00T N1.5](https://huggingface.co/docs/lerobot/groot) を参照してください。

GR00T N1.5 は、より汎用的なロボットの推論とスキル学習のために NVIDIA が提供するオープンな基盤モデルです。これは **クロスエンボディメント** モデルであり、**言語** や **画像** などのマルチモーダル入力を受け取り、異なる環境にまたがってマニピュレーションタスクを実行できます。

LeRobot で利用する際のポイントは、ポリシータイプを `--policy.type=groot` に設定することです。注意：GR00T N1.5 は現時点で環境要件が高く（FlashAttention に依存し、CUDA GPU が必要）、まずは ACT／Pi0 を動かしてから GR00T を試すことを推奨します。

**インストール（重要）**

公式ドキュメントにあるように、GR00T N1.5 を動作させるには **flash-attn** が必要であり、**CUDA 対応デバイス** でのみ使用できます。

推奨手順（この順番で実行）：

1. まずインストールガイドに従ってベース環境（Python、CUDA、ドライバなど）を構築します。**この段階では `lerobot` をインストールしないでください**。
2. PyTorch をインストールします（バージョン範囲は公式要件に従う）：

```bash
pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
```

:::tip
RTX 50 シリーズを使用している場合は、Python=3.10、CUDA=12.8、Torch=2.7.1 が必要です

```bash
pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128
```
:::

3. flash-attn の依存関係と flash-attn 本体をインストールします：

```bash
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"
```

:::tip
RTX 50 シリーズを使用している場合は、次のバージョンが必要です: flash_attn=2.8.0

```bash
pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation
```
:::

4. LeRobot の groot 依存パッケージをインストールします：

```bash
pip install "lerobot[groot]"
```

:::tip
flash-attn のインストールに失敗する場合、多くは (1) PyTorch と CUDA のバージョン不一致、(2) ビルド用依存パッケージの不足、(3) 環境が新しすぎる／古すぎる、のいずれかが原因です。この場合は、まず公式の GR00T ドキュメントと PyTorch インストールガイドを参照してください。
:::

**学習（ファインチューニング）**

公式ではマルチ GPU 学習の例（`accelerate launch --multi_gpu ...`）が提供されています。GPU が 1 枚しかない場合は、まずシングルプロセスモードでの実行も試せます（対応状況／パラメータの詳細は公式ドキュメントに従ってください）。

マルチ GPU（変数は置き換えが必要）：

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=$NUM_GPUS \
  $(which lerobot-train) \
  --output_dir=$OUTPUT_DIR \
  --save_checkpoint=true \
  --batch_size=$BATCH_SIZE \
  --steps=$NUM_STEPS \
  --save_freq=$SAVE_FREQ \
  --log_freq=$LOG_FREQ \
  --policy.push_to_hub=true \
  --policy.type=groot \
  --policy.repo_id=$REPO_ID \
  --policy.tune_diffusion_model=false \
  --dataset.repo_id=$DATASET_ID \
  --wandb.enable=true \
  --wandb.disable_artifact=true \
  --job_name=$JOB_NAME
```

パラメータの説明（よく変更するもの）：

- `--dataset.repo_id`: 学習用データセット（Hub 上の `username/dataset_name`、またはそれに対応するローカルキャッシュの `repo_id`）。
- `--output_dir`: 学習結果の出力ディレクトリ（ここに重み／チェックポイントが保存されます）。
- `--steps`, `--batch_size`: 学習ステップ数とバッチサイズ。大規模モデルは VRAM に敏感なため、動作しない場合はまず `batch_size` を小さくしてください。
- `--policy.repo_id`: モデルを Hub にプッシュしたい場合、作成したいモデルリポジトリ名を指定します。

**評価（ロボット上での実行）**

学習後は、他のポリシーと同様に `lerobot-record` を使って評価／記録を行えます。reBot B601-RS シングルアームユーザーは、以下のコマンドを参照してください：

```bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30} }' \
  --robot.id=follower1 \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=${HF_USER}/groot-rebot \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10
```

ライセンス：このモデルは Apache 2.0 ライセンスに従います（元の GR00T リポジトリと同一）。

</details>

<details>
<summary>（オプション）PEFT による効率的なファインチューニング</summary>

PEFT（Parameter-Efficient Fine-Tuning）は、大規模事前学習モデルを新しいタスクに適応させるための「パラメータ効率の良い適応」手法とツールの集合であり、**すべてのモデルパラメータを更新することなく**適応を行えます。LeRobot の事前学習済みポリシー（SmolVLA や π₀ など）に対しては、通常は少数の「アダプタ」パラメータ（例：LoRA）だけを学習することで、VRAM 使用量と学習コストを抑えつつ、ほぼフルファインチューニングに近い性能を得ることができます。

**インストール**

PEFT 関連パラメータを使用するには、LeRobot のオプション依存パッケージ `peft` をインストールします：

```bash
# Method 1: Source installation (in the lerobot root directory)
pip install -e ".[peft]"
```

```bash
# Method 2: pip installation
pip install "lerobot[peft]"
```

より多くの適応手法や概念の説明については、公式ドキュメントを参照してください：
[🤗 PEFT Documentation](https://huggingface.co/docs/peft/index)

**例：SmolVLA を LoRA でファインチューニングする（Libero の libero_spatial サブタスク）**

以下の例では、`HuggingFaceVLA/libero` データセット上で `lerobot/smolvla_base` に対して LoRA ファインチューニングを行う方法を示します。パラメータ名は現行の LeRobot バージョンに基づいており、`lerobot-train --help` も併せて参照してください。

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64
```

**主要な PEFT パラメータ**

- `--peft.method_type`: 使用する PEFT 手法を選択します。LoRA（Low-Rank Adapter）は最も一般的に使われる手法の一つです。
- `--peft.r`: LoRA のランク。一般に、ランクが高いほど表現力は強くなりますが、パラメータ数と VRAM 使用量も増加します。

**LoRA を注入する層の指定（オプション）**

デフォルトでは、PEFT は通常モデルの最も重要な射影層（例：Attention の `q_proj`、`v_proj` など）に LoRA を注入し、さらに状態／行動に関連する射影層もカバーする場合があります。別の層を対象にしたい場合は、`--peft.target_modules` を使って対象層を指定します。

よく使われるパターンには次のようなものがあります：

1) モジュール名のサフィックスリストによる指定（例）：

```bash
--peft.target_modules="['q_proj', 'v_proj']"
```

2) 正規表現を使う方法（例：実際のモジュール名に合わせて調整してください）：

```bash
--peft.target_modules='(model\\.vlm_with_expert\\.lm_expert\\..*\\.(down|gate|up)_proj|.*\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'
```

**特定の層をフル学習させる指定（オプション）**

特定のモジュールを「LoRA のみ注入」ではなく「フル学習」させたい場合は、`--peft.full_training_modules` で指定します。例えば、`state_proj` のみフル学習させるには：

```bash
--peft.full_training_modules="['state_proj']"
```

**学習率の推奨値（経験則）**

LoRA の学習率は、通常フルファインチューニングより 1 桁大きく設定できます（一般的な経験則：およそ 10 倍）。例えば、フルファインチューニングでは `1e-4` がよく使われますが、LoRA では `1e-3` から始められます。学習率減衰（スケジューラ）を有効にしている場合、最終的な学習率も `1e-4` 前後に設定するのが一般的な目安です。

</details>

<details>
<summary>（オプション）マルチ GPU 学習</summary>

**1. 学習手順**

**方法 1：コマンドライン引数によるマルチ GPU 学習**

まず、lerobot 環境に学習加速システムをインストールします：

```bash
pip install accelerate
```

その後、次のコマンドを実行してマルチ GPU 学習を開始します：

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true
```

主な accelerate パラメータの説明：

- `--multi_gpu`: マルチ GPU 学習を有効化
- `--num_processes=2`: 使用する GPU 数（通常は GPU の枚数と同じ）
- `--mixed_precision=fp16`: fp16 の混合精度を使用（ハードウェアが対応していれば bf16 も可）

**bf16 にはハードウェアの対応が必要**であり、すべての GPU で利用できるわけではない点に注意してください。

| 精度の種類 | ハードウェアサポート |
|--|--|
| fp16 | ほぼすべての NVIDIA GPU でサポート |
| bf16 | 新しい GPU（Ampere アーキテクチャ以降）のみサポート |

GPU が bf16 をサポートしていない場合は、accelerate の設定で fp16 を選択するか、コマンドラインで明示的に fp16 を指定してください。

**方法 2：Accelerate の設定ファイルを使う（オプション）**

頻繁にマルチ GPU 学習を行う場合は、上記の学習設定を保存して、毎回コマンドラインで入力しなくて済むようにできます。

> **ヒント**：この節の内容がよく分からない場合や、とりあえず素早く始めたいだけの場合は、
> **この節はスキップして、方法 1（コマンドライン引数）を使って構いません。**

`accelerate config` の目的は次の通りです：

**ハードウェア環境（GPU 数、混合精度など）を設定ファイルとして保存し、
今後 `accelerate launch` を実行する際に、これらのパラメータを毎回入力しなくて済むようにすることです。**

LeRobot の学習ロジック自体は一切変更せず、単に繰り返しのパラメータ入力を減らすだけです。

マルチ GPU を**たまにしか使わない**場合や、今回が初めての試行であれば、**無理に使う必要はまったくありません**。

---

次を実行します：

```bash
accelerate config
```

対話的な設定プロセスでは、一般的な単一マシン・マルチ GPU のケースでは、次のように選択できます：

- Compute environment: This machine
- Number of machines: 1
- Number of processes: 使用する GPU 数（通常は GPU の枚数と同じ）
- GPU ids to use: Enter キーをそのまま押す（すべての GPU を使用するという意味）
- Mixed precision:
  - fp16 を推奨
  - GPU が bf16 をサポートしていることが確実な場合は、bf16 を選択してもよい

設定後は、次のようにして学習を実行できます：

```bash
accelerate launch $(which lerobot-train) \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true
```

**マルチ GPU 学習が学習パラメータに与える影響と調整戦略**

LeRobot は、ユーザーに知らせずに学習挙動が変わってしまうことを避けるため、GPU 数に応じて学習率やステップ数を自動調整しません。これは、他の一般的な分散学習フレームワークとは異なる点です。

マルチ GPU 学習向けに**ハイパーパラメータを調整したい場合**は、以下の手順に従って手動で行う必要があります。

**ステップ数への影響と調整方針**

マルチ GPU では有効バッチサイズ（batch_size × num_gpus）が増加するため：

（直感的に理解するための例：学習を「歩くこと」に例えると、1 枚の GPU は 1 ステップで 1 メートル進み、2 枚の GPU は 1 ステップで 2 メートル進みます。同じ距離（モデルが学習する総データ量）に到達するには、2 GPU 学習ではステップ数を半分にすべきです。同様に、n 枚の GPU なら 1/n になります。）

したがって、複数 GPU で学習する場合は、学習ステップ数を適切に減らす必要があります。

シングル GPU 学習：

- batch_size = 8
- steps = 100000

デュアル GPU 学習（有効バッチサイズが 16 になる場合）：

- `batch_size` がまだ 8 に設定されている場合
- `steps` は 50000 まで減らすことができます

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --batch_size=8 \
  --steps=50000 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

**学習率への影響と調整戦略**

複数 GPU を使用する場合、各ステップ更新で使用されるサンプル数が増加します。

モデルの「学習スピード」を単一 GPU と同程度に保ちたい場合は、
通常、GPU の数に比例して学習率を上げる必要があります。

- 新しい学習率 = 単一 GPU の学習率 × GPU の数

例：

単一 GPU の学習率（optimizer.lr）が 1e-4 の場合、
2 枚の GPU を使用するときは 2e-4 に変更できます：

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --optimizer.lr=2e-4 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

注意：

これらは必須のルールではなく、一般的なベストプラクティスです。

調整方法に自信がない場合は、次のようにすることもできます：

- 学習率を変更しない
- トレーニングステップ数を変更しない

トレーニングプロセスが安定している限り、結果は依然として有用です。

より高度な設定やトラブルシューティングについては、[Accelerate](https://huggingface.co/docs/accelerate/index) のドキュメントを参照してください。多数の GPU でのトレーニングについてさらに学びたい場合は、この優れたガイドをチェックしてください：[Ultrascale Playbook](https://github.com/huggingface/ultrascale-playbook)。
</details>

<details>
<summary>（オプション）デプロイのための非同期推論の使用</summary>

非同期推論を使わない場合、LeRobot の制御フローは従来の逐次的／同期的な推論として理解できます：ポリシーがアクションチャンクを予測し、それを実行し、その後次の予測を待ちます。モデルが大きくなると、ロボットが新しいアクションチャンクを待つ間に顕著な一時停止が発生することがあります。非同期推論の目的は、次のアクションチャンクを事前に計算しながらロボットに現在のアクションチャンクを実行させることで、アイドル時間を減らし応答性を向上させることです。非同期推論は、ACT、OpenVLA、Pi0、SmolVLA など、アクションチャンクを出力する LeRobot 対応ポリシーに適用されます。推論と実際の制御が分離されているため、非同期推論により、より高性能なマシンをリモートでロボット推論に利用することも可能になります。

非同期推論については、Hugging Face のこの[ブログ記事](https://huggingface.co/blog/async-robot-inference)で詳しく読むことができます。

まず、いくつかの基本概念を紹介します：

- **クライアント**：ロボットアームとカメラに接続し、観測（画像、ロボット姿勢など）を収集してサーバーに送信します。また、サーバーからアクションチャンクを受信し、順番に実行します。
- **サーバー**：計算リソースを提供するデバイスです。カメラとロボットのデータを受信し、アクションチャンクを推論（計算）してクライアントに送り返します。ロボットとカメラに接続された同じデバイスでも、同一 LAN 上の別のコンピュータでも、クラウドサーバーでもかまいません。
- **アクションチャンク**：サーバー側の推論によってポリシーから生成される、一連のロボットアームのアクションコマンドです。
- **同期推論**：1 つのチャンクを予測し、1 つのチャンクを実行します。次のチャンクが推論されるのを待つ間、ロボットにはアイドルギャップが生じます。モデルが大きく計算資源が不足している場合、この推論ギャップは顕著になり、アームが動いては一時停止（推論）、そして再び動く、という動作になります。
- **非同期推論**：同期推論とは異なり、ロボットが現在のチャンクを実行している間に、サーバーはすでに次のチャンクを計算しています。重なり合う部分を集約することで、より応答性の高い制御を実現します。

**3 つの非同期推論デプロイシナリオ**

**1. 単一マシンデプロイ**

ロボット、カメラ、クライアント、サーバーがすべて同じデバイス上にあります。
これは最も単純なケースで、サーバーは 127.0.0.1 で待ち受け、クライアントも 127.0.0.1:port に接続します。公式ドキュメントのコマンド例はこのシナリオに従っています。

**2. LAN デプロイ**

ロボットとカメラは軽量デバイスに接続され、ポリシーサーバーは同一 LAN 上の別の高性能デバイス上で動作します。
この場合、サーバーは他のマシンからアクセス可能なアドレスで待ち受ける必要があり、クライアントは 127.0.0.1 ではなくサーバーの LAN IP に接続する必要があります。

**3. ネットワーク越し／クラウドデプロイ**

ポリシーサーバーはパブリックにアクセス可能なクラウドホスト上で動作し、クライアントはパブリックネットワーク経由で接続します。
この方法では、クラウドホスト上のより強力な GPU を活用できます。ネットワーク環境が良好であれば、往復時間（ネットワークレイテンシ）は推論時間と比べて相対的に小さい場合もありますが、これは実際のネットワーク環境に依存します。

> セキュリティに関する注意：LeRobot の非同期推論パイプラインには、認証されていない gRPC + pickle デシリアライズのリスクがあります。サーバーが重要な情報やサービスをホストしている場合、パブリックネットワーク上にデプロイする際にサービスをインターネットに直接公開することは推奨されません。より安全なアプローチは、VPN や SSH トンネリング、少なくともセキュリティグループの送信元 IP をクライアントのパブリック IP に制限することです。

**非同期推論デプロイの開始**

**ステップ 1：環境構成**

まず、pip を使用して非同期推論に必要な追加依存関係をインストールします。クライアントとサーバーの両方で、追加依存関係付きで lerobot をインストールする必要があります：

```bash
pip install -e ".[async]"
```

**ステップ 2：ネットワーク構成と確認**

**1. プロキシの問題**

ターミナルにプロキシ環境変数が設定されていて接続問題が発生する場合は、一時的にそれらを解除できます：

```bash
unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY
```

注意：上記のコマンドは現在のターミナルセッションにのみ影響します。新しいターミナルウィンドウを開いた場合は、再度実行する必要があります。

**2. ファイアウォール／セキュリティグループでポートを許可**

- 単一マシンデプロイ：通常はスキップできます。
- LAN デプロイ：サーバー側で待ち受けポートを許可する必要があります。
  LAN 上で待ち受けポートを許可する例（サーバー上で実行）：

```bash
sudo ufw allow 8080/tcp
```

- クラウドデプロイ：クラウドサーバーのセキュリティグループでポートを許可し、可能であれば送信元 IP を制限する必要があります。

クラウドサーバー上で実行している場合：
サーバー管理ページのセキュリティグループでポート 8080 を許可するか、すでに許可されている別のポートを使用します。方法はクラウドプロバイダによって異なります。

**3. IP アドレスの確認**

単一マシンデプロイではこのステップはスキップできます（IP は常に 127.0.0.1）。

**4. 接続テスト**

- 単一マシンデプロイ：このステップはスキップします。
- LAN／クラウドデプロイ：クライアントがサーバーポートにアクセスできるかテストすることを推奨します：

```bash
nc -vz <LAN_IP_address> 8080
```

```bash
nc -vz <server_public_IP> 8080
```

**ステップ 3：サービスを起動**

**シナリオ A：単一マシンデプロイ**

1 つのターミナルでローカルサービスを起動します：

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080
```

正常に起動したら、このターミナルは開いたままにして、別のターミナルを新しく作成して他のコマンドを実行する必要があります。

**シナリオ B：LAN デプロイ**

サーバー上で実行：

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

クライアントが接続する際、`--server_address` にはサーバーの LAN IP アドレス `<LAN_IP_address>:8080` を指定する必要があります。

**シナリオ C：クラウドサーバーデプロイ**

サーバー上で実行：

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

クライアントが接続する際、`--server_address` にはサーバーのパブリック IP アドレス `<server_public_IP>:8080` を指定する必要があります。

**ステップ 4：推論パラメータを選択**

クライアント側で実行：

```bash
python -m lerobot.async_inference.robot_client \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false
```

主要なパラメータの説明：

- `--server_address`：サーバーアドレス。単一マシンの場合は `127.0.0.1:port` を使用し、LAN／クラウドの場合はサーバーの IP を使用します。
- `--actions_per_chunk`：各アクションチャンクのサイズ（アクション数）。値が大きいほど推論頻度は低くなりますが、1 回の推論あたりの結果はより安定します。値が小さいほど動きは滑らかになりますが、サーバーの推論負荷は増加します。
- `--chunk_size_threshold`：古いアクションチャンクと新しいアクションチャンクのブレンディング閾値です。古いチャンクがこの割合まで実行されたときに、新しいチャンクとのブレンディングが開始されます。
- `--fixed_update_fps`：制御コマンドの送信頻度で、ロボットアームの動きの滑らかさに対応します。
- `--visualize_action_queue`：実行時にアクションキューのサイズを可視化するかどうか。有効にすると、キューが頻繁に底をついていないかをより直感的に確認でき、`actions_per_chunk` と `chunk_size_threshold` の調整に役立ちます。

**ステップ 5：ロボットの挙動に基づいてパラメータを調整**

非同期推論では、同期推論には存在しない追加パラメータが 2 つあり、調整が必要です：

- `--actions_per_chunk`：各アクションチャンクのサイズ。ロボットの動きがぎくしゃく／カクつく場合はこの値を大きくし、ロボットの応答に顕著な遅延がある場合はこの値を小さくします。
- `--chunk_size_threshold`：古いアクションチャンクと新しいアクションチャンクのブレンディング閾値。通常は `0.5` から試し始めます。

非同期推論では、サーバーのアクションチャンク生成速度がクライアントの消費速度以上であるようにバランスを取る必要があります。そうでない場合、アクションキューが空になり、ロボットがカクつき始めます（これはキューの可視化カーブが底に張り付くことで確認できます）。

</details>

## FAQ

- このドキュメントのチュートリアルに従っている場合は、推奨されている GitHub リポジトリ `https://github.com/Seeed-Projects/lerobot.git` を git clone してください。本ドキュメントで推奨しているリポジトリは検証済みの安定版です。一方、公式の LeRobot リポジトリは常に最新バージョンへ更新されており、データセットバージョンの違いやコマンドの違いなど、予期せぬ問題を引き起こす可能性があります。

- 次のようなエラーが発生した場合:
  ```bash
  Could not connect on port "/dev/ttyUSB0" or "/dev/ttyACM0"
  ```
  そして、`ls /dev/ttyUSB*` または `ls /dev/ttyACM*` を実行したときにデバイスが存在することが確認できる場合は、シリアルポートの権限付与を忘れていることを意味します。ターミナルで `sudo chmod 666 /dev/ttyUSB* /dev/ttyACM*` を入力して修正してください。

- 次のようなエラーが発生した場合:
  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```
  `conda install ffmpeg=7.1.1 -c conda-forge` を使用して ffmpeg 7.1.1 をインストールしてください。

- 50 セットのデータで ACT をトレーニングするには、RTX 3060（8GB）を搭載したノート PC では約 6 時間、RTX 4090 または A100 GPU を搭載したコンピュータでは約 2～3 時間かかります。

- データ収集中は、カメラの位置、角度、および周囲の照明が安定していることを確認してください。カメラに写り込む不安定な背景や歩行者の量を減らしてください。展開環境の変化が大きすぎると、ロボットアームが正しく把持できなくなる可能性があります。

- データ収集コマンドでは、十分なデータを収集できるように `num-episodes` パラメータが適切に設定されていることを確認してください。途中で手動で一時停止しないでください。データの平均値と分散はデータ収集完了後にのみ計算され、これらはトレーニングに必要です。

- プログラムが USB カメラから画像データを読み取れないと表示する場合は、USB カメラがハブ経由で接続されていないことを確認してください。USB カメラは、画像伝送速度を確保するために、必ずデバイスに直接接続する必要があります。

:::tip
解決できないソフトウェアの問題や環境依存関係の問題が発生した場合は、このチュートリアルの最後にある FAQ セクションを確認するだけでなく、速やかに [LeRobot platform](https://github.com/huggingface/lerobot) または [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU) に問題を報告してください。
:::

## 参考資料

Seeed Studio 英語 Wiki: [Lerobot で SO100Arm ロボットアームを使用する方法](https://wiki.seeedstudio.com/ja/lerobot_so100m/)

TheRobotStudio プロジェクト: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface プロジェクト: [LeRobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択できる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
