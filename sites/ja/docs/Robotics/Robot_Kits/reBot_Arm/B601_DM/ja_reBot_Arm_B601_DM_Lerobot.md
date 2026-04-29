---
description: この Wiki では、LeRobot フレームワーク内で reBot Arm B601-DM を用いたデータ収集と学習を実装するための完全なガイドを提供します。
title: LeRobot で始める reBot Arm B601-DM
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg
slug: /rebot_arm_b601_dm_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-15T00:00:00.000Z
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-04-09'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_dm_lerobot/
---


# LeRobot ベースの reBot Arm B601-DM と reBot 102 Leader 入門


![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6 自由度ロボットアーム · 複数モータ対応 · 運動学ソルバ · 軌道計画 · 完全オープンソース</strong>
</p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>



[reBot Arm B601-DM](https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/) は Seeed が立ち上げたオープンソースロボットアームプロジェクトで、エンボディドインテリジェンス学習のハードルを下げることを目的としています。構造設計とコードを余すところなくオープンソース化し、ロボット技術を誰もが利用できるようにしています。

[LeRobot](https://github.com/huggingface/lerobot/tree/main) は、PyTorch 上で実世界ロボティクス向けのモデル、データセット、ツールを提供することに取り組んでいます。その目的はロボティクスの参入障壁を下げ、誰もがデータセットや事前学習モデルを共有し、貢献し、恩恵を受けられるようにすることです。LeRobot は、模倣学習と強化学習を中心に、実世界で検証された最先端の手法を統合しています。人間によるデモを含むデータセット、事前学習済みモデル群、シミュレーション環境を提供しており、ユーザーはロボットの組み立てを行わなくてもすぐに始めることができます。

### 📖 プロジェクト概要

**reBot-DevArm（reBot Arm B601 DM および reBot Arm B601 RS）** は、エンボディドインテリジェンス学習のハードルを下げることを目的としたロボットアームプロジェクトです。私たちは **「真のオープンソース」** に注力しており、コードだけでなく、以下のすべてを余すところなく公開しています：
- 🦾 **2 種類のモータバージョンを備えたオープンソースロボットアーム**：同一外観で RoboStride モータ版と Damiao モータ版のすべてのオープンソースファイルを提供します。
- 🛠️ **ハードウェア設計図**：板金および 3D プリント部品のソースファイル。
- 🔩 **BOM（部品表）**：すべてのネジ 1 本ごとの仕様と購入リンクまで詳細に記載。
- 💻 **ソフトウェアとアルゴリズム**：Python SDK、ROS1/2、Isaac Sim、LeRobot など。

## reBot ロボットアームの構築

- 5 種類のキットオプションを提供しています：
  - **ロボットアーム本体モータキット**：ロボットアームに必要なモータとハーネスのみを含みます。
  - **ロボットアーム本体構造部品キット**：機械的な構造部品のみを含みます。
  - **グリッパーコンプリートキット**：グリッパー用のモータ、ハーネス、構造部品を含みます。
  - **アームコンプリートキット**：ロボットアーム本体とグリッパー用のすべての部品を含みます。
  - **組立済みロボットアーム**：完全に組み立て済みのロボットアームです。

reBot-DevArm と reComputer Jetson AI インテリジェントロボットキットは、高精度なロボットアーム制御と強力な AI コンピューティングプラットフォームをシームレスに統合し、包括的なロボット開発ソリューションを提供します。本キットは Jetson Orin または AGX Orin プラットフォームをベースに、reBot-DevArm と LeRobot AI フレームワークを組み合わせることで、教育、研究、産業オートメーションなど複数のシナリオに適用可能なインテリジェントロボットシステムをユーザーに提供します。

この Wiki では reBot-DevArm のデバッグチュートリアルを提供し、LeRobot フレームワーク内でのデータ収集と学習を実装します。

:::caution
Seeed Studio のチュートリアルは、公式ドキュメントに基づいて厳密に更新されています。解決できないソフトウェアや環境の問題に遭遇した場合は、まず記事末尾の FAQ を確認するか、カスタマーサービスに連絡して SeeedStudio LeRobot 議論グループに参加してください。こちらでも質問できます：[LeRobot GitHub](https://github.com/huggingface/lerobot) または [Discord Channel](https://discord.gg/8TnwDdjFGU)。
:::

## 🔧 reBot B601-DM シリーズの特長

1. **オープンソース & 低コスト**
   reBot Arm は Seeed Studio によるオープンソースかつ低コストのロボットアームソリューションであり、エンボディドインテリジェンス学習のハードルを下げることを目的としています。

2. **LeRobot プラットフォームとの統合**
   [LeRobot プラットフォーム](https://github.com/huggingface/lerobot) との統合を前提に設計されています。このプラットフォームは、実ロボットタスクの模倣学習向けに、PyTorch モデル、データセット、ツール（データ収集、シミュレーション、学習、デプロイを含む）を提供します。

3. **豊富な学習リソース**
   組み立ておよびキャリブレーションガイド、テストとデータ収集チュートリアル、学習とデプロイのドキュメントなど、包括的なオープンソース学習リソースを提供し、ユーザーがロボットアプリケーションを迅速に習得・開発できるよう支援します。

4. **Nvidia プラットフォーム互換**
   reComputer Mini J4012 Orin NX 16GB プラットフォームによるデプロイをサポートします。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/PoMv3mw8SGk" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 初期システム環境

**Ubuntu x86 の場合：**
  - Ubuntu 22.04
  - CUDA 12 以上
  - Python 3.10
  - Torch 2.6

**Jetson Orin の場合：**
  - Jetson JetPack 6.0 および 6.1（6.2 は非対応）
  - Python 3.10
  - Torch 2.3 以上

## LeRobot のインストール

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/mWrWeqAPDSY" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

CUDA のバージョンに応じて、pytorch、torchvision などの環境をインストールする必要があります。

### 1. Miniforge のインストール

```bash
cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc
```

### 2. Lerobot リポジトリのクローン

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git
```

### 3. 機能パッケージのクローン

2 つの依存機能パッケージを rebot_lerobot ディレクトリにクローンします：

:::tip
機能パッケージの詳細な機能については、以下を参照してください：
- [lerobot-teleoperator-rebot-arm-102](https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102)
- [lerobot-robot-seeed-b601](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601)
:::

```bash
cd ~/rebot_lerobot

# Clone rebot 102 leader function package
git clone https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102.git

# Clone rebot b601 follower function package
git clone https://github.com/Seeed-Projects/lerobot-robot-seeed-b601.git
```

### 4. Conda 環境の作成と LeRobot のインストール

lerobot リポジトリにはすでに pyproject.toml が含まれています。conda 環境を作成し、すべての依存関係をインストールします。

```bash
cd ~/rebot_lerobot

# Create conda environment (Python 3.12)
conda create -y -n lerobot python=3.12

# Activate environment
conda activate lerobot

# Install lerobot main project (editable mode)
pip install -e ./lerobot

# Add local dependency packages (editable install)
pip install -e ./lerobot-teleoperator-rebot-arm-102
pip install -e ./lerobot-robot-seeed-b601
pip install motorbridge
```

### 5. ffmpeg のインストール

ffmpeg は動画デコードの依存パッケージです。conda 経由でインストールします：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
**バージョンに関する注意**：
- デフォルトでは ffmpeg 7.X がインストールされます（libsvtav1 エンコーダをサポート）
- バージョン互換性の問題が発生した場合は、ffmpeg 7.1.1 を指定できます：
  ```bash
  conda install ffmpeg=7.1.1 -c conda-forge
  ```
- `ffmpeg -encoders | grep svtav1` によって libsvtav1 エンコーダがサポートされているか確認できます
:::

### 6. Jetson JetPack 6.0+ デバイス向け特別設定

（PC の場合はこのステップをスキップ）Jetson JetPack 6.0+ デバイス向け（このステップを実行する前に、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) のステップ 5 に従って Pytorch-gpu と Torchvision をインストールしていることを確認してください）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies via conda, for Jetson Jetpack 6.0+ only
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Install specific OpenCV version using pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This version must be compatible with torchvision
```

### 7. Pytorch と Torchvision の確認

:::tip
Jetson デバイスを使用している場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) に従って Pytorch と Torchvision をインストールしてください。
:::

pip による lerobot 環境のインストールでは、元の Pytorch と Torchvision がアンインストールされ、CPU 版がインストールされるため、Python で確認を行う必要があります。

```python
python3

import torch
print(torch.cuda.is_available())#Should output True
```

出力が True の場合は、exit() と入力して Python を終了し、次のステップに進むことができます。
出力が False の場合は、[公式チュートリアル](https://pytorch.org/index.html) に従って Pytorch と Torchvision を再インストールする必要があります。

## ロボットアームのキャリブレーション

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/v8Ek1Ad1VWo" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

次に、キャリブレーションのために、電源とデータケーブルを reBot B601-DM ロボットに接続する必要があります。これは、リーダーアームとフォロワーアームが同じ物理位置にあるときに、同じ位置値を持つようにするためです。このキャリブレーションは、ある reBot B601-DM ロボットで学習したニューラルネットワークを別のロボットでも動作させるために不可欠です。ロボットアームを再キャリブレーションする必要がある場合は、`~/.cache/huggingface/lerobot/calibration/robots` または `~/.cache/huggingface/lerobot/calibration/teleoperators` 配下のファイルを完全に削除してから、ロボットアームを再キャリブレーションしてください。そうしないと、エラープロンプトが表示されます。ロボットアームのキャリブレーション情報は、このディレクトリ配下の JSON ファイルに保存されます。

まず、次のコマンドを実行してインターフェース権限を付与する必要があります：

```bash
sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm (serial bridge)
```

### フォロワーアームのキャリブレーション

B601-DM は、組み立て後に 1 回だけキャリブレーションを行えば十分です。以下がキャリブレーションコマンドです。ゼロ位置（グリッパーが完全に閉じた状態）については図を参照してください。

```bash
sudo chmod 666 /dev/ttyACM*  # follower arm (serial bridge)

lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg" />
  </div>

### リーダーアームのキャリブレーション

キャリブレーション手順は非常に重要であり、ロボットアームが正常に動作するかどうかに直接影響します。必ず手順に厳密に従ってください。

<details>

<summary> rebot 102 leader </summary>

:::tip
**reBot 102 leader キャリブレーションの注意事項**：
- キャリブレーション開始時に、reBot Arm 102 上の各サーボの現在位置は**ゼロにリセット**されます
- `joint_ranges`（関節リミット）は、キャリブレーションデータではなく、設定ファイル `config_rebot_arm_102_leader.py` から取得されます
- ある関節が常にリミット付近で引っかかっているように見える場合は、まず `joint_ranges` の設定を確認してください
- 関節の回転方向は設定ファイルで定義されています。方向が一致しない場合は、再キャリブレーションではなく設定ファイルを修正してください
- reBot 102 leader は USB-to-UART モジュールを使用しており、通常は `/dev/ttyUSB*` にマッピングされます
- 実際のポート番号を確認するには `ls /dev/ttyUSB*` を使用します

初回接続時には、`/dev/ttyACM0` が見つからないというエラーが発生する場合があります。これは brltty がシリアルポートを占有しているためです。次の手順を実行してください：

```bash
sudo dmesg | grep ttyUSB #Check the last line shows "disconnected"
sudo apt remove brltty #Remove brltty
```
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" />
</div>

プロンプトに従って、上図に示すゼロ位置までリーダーアームを動かします。

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


まずシリアルポートに対して権限を付与します：
```bash
sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm (serial bridge)
```

テレオペレーションを実行します：
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --teleop.joint_directions='{"shoulder_pan":-1,"shoulder_lift":-1,"elbow_flex":1,"wrist_flex":1,"wrist_yaw":1,"wrist_roll":-1,"gripper":-4}'
```

## カメラの追加


<details>
<summary> RealSense D435i/D405 を使用する場合 </summary>

RealSense 深度カメラは LeRobot に RGB-D 認識機能を提供し、物体認識、点群再構成、テーブルトップマニピュレーションなどのタスクに適しています。ここで推奨するモデルは **RealSense D405** と **RealSense D435i** です。

### RealSense D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

RealSense D405 は短距離用のステレオ深度カメラで、テーブルトップロボットマニピュレーションなどの高精度な近距離タスク向けに設計されており、一般的な動作距離は **7 cm ～ 50 cm** です。

### RealSense D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

RealSense D435i は、深度センシング、RGB 画像、および IMU を組み合わせており、3D 再構成、SLAM、ロボットによる環境認識などの中距離から近距離のアプリケーションに適しています。

### 1. カメラ用ブランチに切り替える

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

### 2. LeRobot を編集可能モードでインストール

RealSense のみを使用する場合：

```bash
pip install -e ".[realsense]"
```

### 3. 権限を付与

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

### 4. カメラを検出

```bash
lerobot-find-cameras realsense
```

このステップでは次の情報が出力されます：

- カメラモデル
- シリアル番号
- USB 情報
- デフォルトのストリーム設定

### 5. RealSense の例

RealSense 2 台のテスト：

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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

### 6. パラメータに関する注意

- `depth_alpha` は深度画像のスケーリング係数を制御し、表示結果や対象距離の範囲に応じて調整できます。
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

高精度な深度からカラーへのアライメントを備えた同期 RGB および深度ストリームを提供します。ステレオ深度センシングと内蔵 6 軸 IMU を組み合わせることで、物体検出、3D 認識、マッピング、ナビゲーションなどのロボットタスクに非常に適しています。コンパクトな設計と Orbbec SDK の完全なサポートにより、研究用途と実運用の両方に適したカメラです。

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>

Gemini 336 は Gemini 330 シリーズの新しいメンバーです。Gemini 335 の優れた深度性能を受け継ぎつつ、反射の多い屋内エリア、高ダイナミックシーンの暗部、明るい屋外環境における深度画像品質をさらに向上させています。ロボット用途においては、認識、自己位置推定、マニピュレーションなどのタスクに対して、より安定した高品質の深度データを提供できます。

### 1. カメラ用ブランチに切り替える

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

### 2. LeRobot を編集可能モードでインストール

Orbbec のみを使用する場合：

```bash
pip install -e ".[orbbec]"
```

### 3. 権限を付与

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

### 4. カメラを検出

```bash
lerobot-find-cameras orbbec
```

このステップでは次の情報が出力されます：

- カメラモデル
- シリアル番号
- USB 情報
- デフォルトのストリーム設定

### 5. Orbbec の例


単一 Orbbec のテスト：



```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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

### 6. パラメータの注意事項

- `depth_alpha` は深度画像のスケーリング係数を制御します。`0.2` を初期値として、表示結果に基づいて微調整してください。
- 3 台以上の深度カメラを接続する場合は、安定性を高めるために `fps` を `15` に下げることを推奨します。
- より安定した表示とデータ転送のために、解像度は `640x480` に保つことを推奨します。

### 7. よくある問題

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

カメラをインスタンス化するには、カメラ識別子が必要です。この識別子は、コンピュータを再起動したりカメラを再接続したりすると変更される可能性があり、この挙動は主にオペレーティングシステムに依存します。

システムに接続されているカメラのインデックスを見つけるには、次のスクリプトを実行します：

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

ターミナルに関連するカメラ情報が表示されます。

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

各カメラで撮影された画像は、`~/lerobot/outputs/captured_images` ディレクトリで見つけることができます。

:::warning
Intel RealSense カメラを **macOS** で使用する場合、**"Error finding RealSense cameras: failed to set power state"** というエラーが発生することがあります。これは同じコマンドを `sudo` 権限で実行することで解決できます。ただし、**macOS** での RealSense カメラの使用は不安定であることに注意してください。
:::

その後、次のコードを実行することで、テレオペレーション中にコンピュータ上でカメラ映像を表示できるようになります。これは、最初のデータセットを記録する前にセットアップを準備するのに役立ちます。

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

:::tip
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV` 形式を試すこともできます。ただし、後者は画像の解像度と FPS を低下させ、ロボットアームの動作にラグが生じます。現在、`MJPG` 形式では、`1920*1080` の解像度で `30FPS` を維持しながら 3 台のカメラをサポートできます。しかし、同じ USB HUB を介して 2 台のカメラを 1 台のコンピュータに接続することは依然として推奨されません。
:::

カメラがさらにある場合は、`--robot.cameras` パラメータを変更して追加できます。`index_or_path` の形式は、`python -m lerobot.find_cameras opencv` によって出力されるカメラ ID の末尾の数字によって決まることに注意してください。

例えば、カメラを追加したい場合：

<!-- TODO: reBot multi-camera configuration command -->
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

## データセット収集
<!-- vidio todo -->

<details>

<summary> データセットをローカルに保存したい場合 </summary>

<!-- TODO: reBot local data collection command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

その中で、`repo_id` は任意に変更でき、`push_to_hub=false` とします。最終的に、データセットはホームフォルダ内の `~/.cache/huggingface/lerobot` ディレクトリに保存され、前述の `seeed_rebot_b601_dm/test` フォルダがそこに作成されます。

</details>

<details>
<summary> データセットをアップロードするために Hugging Face Hub の機能を使用したい場合 </summary>

- データセットをアップロードするために Hugging Face Hub の機能を使用したいが、これまでに行ったことがない場合は、書き込み権限付きトークンを使用してログインしていることを確認してください。このトークンは [Hugging Face settings](https://huggingface.co/settings/tokens) から生成できます：

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
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
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

- データは `LeRobotDataset` 形式で保存され、記録中にディスクに保存されます。
- デフォルトでは、記録後にデータセットはあなたの Hugging Face ページにプッシュされます。
- アップロードを無効にするには、`--dataset.push_to_hub=False` を使用します。

**2. チェックポイントと再開**

- 記録中にチェックポイントが自動的に作成されます。
- 中断後に再開するには、`--resume=true` を付けて同じコマンドを再実行します。

⚠️ **重要な注意**: 再開する場合、`--dataset.num_episodes` はデータセット内の合計エピソード数ではなく、「追加で記録するエピソード数」に設定してください。
- 最初から記録をやり直すには、データセットディレクトリを**手動で削除**します。

**3. 記録パラメータ**

コマンドライン引数を使用してデータ記録の流れを設定します：

| Parameter | 説明 | デフォルト |
|------|------|--------|
| --dataset.episode_time_s | 各データエピソードの長さ（秒） | 60 |
| --dataset.reset_time_s | 各エピソード後の環境リセット時間（秒） | 60 |
| --dataset.num_episodes | 記録するエピソードの総数 | 50 |

**4. 記録中のキーボード操作**

キーボードショートカットを使用してデータ記録の流れを制御します：

| Key | 動作 |
|----|------|
| → (右矢印) | 現在のエピソード／リセットを早期終了し、次へ進む。 |
| ← (左矢印) | 現在のエピソードをキャンセルし、再記録する。 |
| ESC | セッションを即座に停止し、動画をエンコードしてデータセットをアップロードする。 |

:::tip
キーボード入力が反応しない場合は、pynput のバージョンを 1.6.8 などにダウングレードする必要があるかもしれません。
```bash
pip install pynput==1.6.8
```
:::

**データ収集のヒント**

- **タスクの提案**: さまざまな位置にある物体を把持し、ビンに入れる。
- **規模**: 50 エピソード以上を記録する（位置ごとに 10 エピソード）。
- **一貫性**:
  - カメラを固定する。
  - 同じ把持動作を維持する。
  - 操作対象の物体がカメラ映像内に見えるようにする。
- **段階的な拡張**:
  - 新しい位置、把持方法、カメラ調整などのバリエーションを追加する前に、まずは安定した把持から始める。
  - 失敗を防ぐため、複雑さを急激に増やさない。

💡 **経験則**: 画面上のカメラ画像だけを見て、自分自身でタスクを実行できる状態であるべきです。

この重要なトピックをさらに深く知りたい場合は、良いデータセットとは何かについて執筆した [blog post](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) を参照してください。

**トラブルシューティング**

Linux 固有の問題:
記録中に右矢印／左矢印／ESC キーが反応しない場合：
- `$DISPLAY` 環境変数が設定されていることを確認します（[pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html) を参照）。

## データセットの可視化

```bash
echo ${HF_USER}/rebot_test  
```

データをアップロードした場合は、次のコマンドでローカルでも可視化できます：

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

`--dataset.push_to_hub=false` を使用してデータをアップロードしなかった場合でも、次のコマンドでローカルに可視化できます：

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false
```

ここで、`seeed_rebot_b601_dm/test` はデータ収集時に定義したカスタムの `repo_id` 名です。

## エピソードをリプレイする

:::tip
不安定なため、スキップしても試してみても構いません。
:::

では、最初のデータセットをロボット上でリプレイしてみましょう：

<!-- TODO: reBot dataset replay command -->
```bash
lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0
```

この時点で、ロボットは記録時にテレオペレーションで行ったのと同じ動作を実行するはずです。

## 学習と評価

<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

公式チュートリアル [ACT](https://huggingface.co/docs/lerobot/act) を参照してください。

**学習**

ロボットを制御するポリシーを学習するには、`python -m lerobot.scripts.train` スクリプトを使用します。いくつかのパラメータが必須です。以下はコマンド例です：

**ローカルデータセットで学習したい場合は、`repo_id` がデータ収集時に使用した名前と一致していることを確認し、`--policy.push_to_hub=false` を追加してください。**

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

**リモートに保存されたデータを使用する場合**

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

**コマンドの説明**

* **データセットの指定**：パラメータ `--dataset.repo_id=${HF_USER}/rebot_test` によってデータセットを指定します。
* **学習ステップ数**：`--steps=300000` を使用して学習ステップ数を変更します。アルゴリズムのデフォルトは 800000 ステップであり、タスクの難易度や学習中の loss を観察しながら調整できます。
* **ポリシータイプ**：`policy.type=act` でポリシーを指定します。同様に、[`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`] などのポリシーを切り替えることもできます。これにより、`configuration_act.py` から設定が読み込まれます。重要な点として、このポリシーは、ロボット（例：`laptop` や `phone`）のモータ状態、モータアクション、カメラの数に自動的に適応します。これらの情報はすでにデータセット内に保存されているためです。
* **デバイスの選択**：Nvidia GPU 上で学習しているため `policy.device=cuda` を指定していますが、Apple Silicon で学習する場合は `policy.device=mps` を使用できます。
* **可視化ツール**：学習チャートを [Weights and Biases](https://docs.wandb.ai/quickstart) で可視化するために `wandb.enable=true` を指定します。これは任意ですが、使用する場合は `wandb login` を実行してログインしていることを確認してください。

**評価**

ポリシーのチェックポイントを入力として、[`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) の `record` 関数を使用できます。例えば、次のコマンドを実行して 10 エピソード分の評価を記録します：

<!-- TODO: reBot ACT evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
``` 

1. `--policy.path` パラメータは、ポリシー学習結果の重みファイルへのパスを示します（例：`outputs/train/act_rebot_test/checkpoints/last/pretrained_model`）。モデル学習結果の重みファイルを Hub にアップロードした場合は、モデルリポジトリ（例：`${HF_USER}/act_rebot_test`）を使用することもできます。
2. データセット名 `dataset.repo_id` は `eval_` で始まります。この操作により、評価中の動画とデータが別々に記録され、`seeed/eval_test123` のような `eval_` で始まるフォルダに保存されます。
3. 評価段階で `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` に遭遇した場合は、まず `eval_` で始まるフォルダを削除してから、再度プログラムを実行してください。
4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model` が発生した場合、`--robot.cameras` パラメータ内の `front` や `side` などのキーワードは、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

</details>

<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

公式チュートリアル [SmolVLA](https://huggingface.co/docs/lerobot/smolvla) を参照してください。

```bash
pip install -e ".[smolvla]"
```

**学習**
```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \ # <- Use pretrained fine-tuned model
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

**評価**

<!-- TODO: reBot SmolVLA evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.id=follower1 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=rebot_arm_102_leader \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=rebot_arm_102_leader \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME
```

</details>

<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

公式チュートリアル [Pi0](https://huggingface.co/docs/lerobot/pi0) を参照してください。

```bash
pip install -e ".[pi]"
```

**学習**
```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=seeed/eval_test123 \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=20000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false 
```

**評価**

<!-- TODO: reBot Pi0 evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

公式チュートリアル [Pi0.5](https://huggingface.co/docs/lerobot/pi05) を参照してください。

```bash
pip install -e ".[pi]"
```

**学習**
```bash
lerobot-train \
    --dataset.repo_id=seeed/eval_test123 \
    --policy.type=pi05 \
    --output_dir=outputs/pi05_training \
    --job_name=pi05_training \
    --policy.pretrained_path=lerobot/pi05_base \
    --policy.compile_model=true \
    --policy.gradient_checkpointing=true \
    --wandb.enable=false \
    --policy.dtype=bfloat16 \
    --steps=3000 \
    --policy.device=cuda \
    --batch_size=32
```

**評価**

<!-- TODO: reBot Pi0.5 evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

公式ドキュメントを参照してください：[GR00T N1.5](https://huggingface.co/docs/lerobot/groot)

</details>

学習には数時間かかるはずです。`outputs/train/act_rebot_test/checkpoints` ディレクトリ内にチェックポイントが生成されます。

チェックポイントから学習を再開するには、`act_rebot_test` ポリシーの `last` チェックポイントから再開するためのコマンド例を以下に示します：
```bash
lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## FAQ

- このドキュメントのチュートリアルに従う場合は、推奨されている GitHub リポジトリ `https://github.com/Seeed-Projects/lerobot.git` を git clone してください。本ドキュメントで推奨しているリポジトリは検証済みの安定版です。一方、公式の LeRobot リポジトリは常に最新バージョンへ更新されており、データセットのバージョン違いやコマンドの違いなど、予期しない問題が発生する可能性があります。

- 次のようなエラーが発生した場合：
  ```bash
  Could not connect on port "/dev/ttyUSB0" or "/dev/ttyACM0"
  ```
  そして、`ls /dev/ttyUSB*` または `ls /dev/ttyACM*` を実行したときにデバイスが存在することが確認できる場合は、シリアルポートの権限付与を忘れていることを意味します。ターミナルで `sudo chmod 666 /dev/ttyUSB* /dev/ttyACM*` を実行して修正してください。

- 次のようなエラーが発生した場合：
  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```
  `conda install ffmpeg=7.1.1 -c conda-forge` を使用して ffmpeg 7.1.1 をインストールしてください。

- 50 セットのデータで ACT をトレーニングするには、RTX 3060（8GB）を搭載したノート PC で約 6 時間、RTX 4090 または A100 GPU を搭載したコンピュータでは約 2～3 時間かかります。

- データ収集時には、カメラの位置、角度、および周囲の照明が安定していることを確認してください。カメラに映り込む不安定な背景や歩行者の量を減らしてください。展開環境が大きく変化しすぎると、ロボットアームが正しく把持できなくなる可能性があります。

- データ収集コマンドでは、十分なデータを収集できるように `num-episodes` パラメータが設定されていることを確認してください。途中で手動で一時停止しないでください。データの平均値と分散はデータ収集完了後にのみ計算され、これらはトレーニングに必要です。

- プログラムが USB カメラから画像データを読み取れないと表示する場合は、USB カメラがハブ経由で接続されていないことを確認してください。USB カメラは、高速な画像伝送速度を確保するために、デバイスに直接接続する必要があります。

:::tip
解決できないソフトウェアの問題や環境依存関係の問題に遭遇した場合は、このチュートリアルの最後にある FAQ セクションを確認することに加えて、速やかに [LeRobot platform](https://github.com/huggingface/lerobot) または [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU) に問題を報告してください。
:::

## 参考文献

Seeed Studio 英語 Wiki: [Lerobot で SO100Arm ロボットアームを使用する方法](https://wiki.seeedstudio.com/ja/lerobot_so100m/)

TheRobotStudio プロジェクト: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface プロジェクト: [LeRobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
