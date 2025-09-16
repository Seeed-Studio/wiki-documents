---
description: このwikiは、StarAI Robot ArmのデバッグチュートリアルとLerobotフレームワーク内でのデータ収集とトレーニングの実現方法を提供します。
title: LeRobotでのStarAI Arm
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /ja/lerobot_starai_arm
last_update:
  date: 9/1/2025
  author: LiShanghang
---

# LeRobotでStarAI Robot Armを始める

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **フォロワー Viola** | **リーダー Violin** | **フォロワー Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入!!! 🖱️</font></span></strong>
</a></div>

## 製品紹介

1. **オープンソース & 二次開発が容易**
    [Fashion Star Robotics](https://fashionrobo.com/)が提供するこのサーボモーターシリーズは、オープンソースで簡単にカスタマイズ可能な6+1自由度ロボットアームソリューションを提供します。

2. **様々なペイロードを持つデュアルアームシステム**
    Violinはリーダーロボットアームとして機能します。アーム範囲の70%において、フォロワーアームViolaは300gの動作ペイロードを持ち、フォロワーアームCelloは750gの動作ペイロードを持ちます。

3. **ROS2、Moveit2、Isaac Simをサポート**
    ロボットアームデータトピックの公開・購読とロボットアームの制御にROS2をサポートし、逆運動学計算にMoveIt2、Isaac Simでのシミュレーションもサポートします。

4. **LeRobotプラットフォーム統合サポート**
    [LeRobotプラットフォーム](https://github.com/huggingface/lerobot)との統合のために特別に設計されています。このプラットフォームは、データ収集、シミュレーション、トレーニング、デプロイメントを含む実世界のロボティクスタスクにおける模倣学習のためのPyTorchモデル、データセット、ツールを提供します。

5. **オープンソースSDK**
     PythonとC++ SDK開発をサポート

6. **ボタンホバー**
    重力補償をシミュレートし、ボタンを介してロボットアームを任意の位置でホバーさせることができます。

7. **モジュラーエンドエフェクター**
    迅速なDIY交換を可能にします。

8. **豊富な学習リソース**
    環境設定、インストールとデバッグガイド、カスタム把持タスクの例を含む包括的なオープンソース学習リソースを提供し、ユーザーが迅速に開始してロボットアプリケーションを開発できるよう支援します。

9. **Nvidiaプラットフォーム互換性**
    Nvidia Jetsonプラットフォーム経由でのデプロイメントをサポートします。

## 仕様

| 項目                 | フォロワーアーム \| Viola                             | リーダーアーム \|Violin                                |    フォロワーアーム \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| 自由度   | 6+1                                               | 6+1                                               | 6+1             |
| リーチ                | 470mm                                             | 470mm                                             | 670mm |
| スパン                 | 940mm                                             | 940mm                                             | 1340mm |
| 再現性        | 2mm                                               | -                                                 | 1mm  |
| 動作ペイロード      | 300g (70%リーチ時)                            | -                                                 |  750g (70%リーチ時)   |
| サーボ               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| パラレルグリッパーキット  | ✅                                                 | -                                                 | ✅   |
| 手首回転         | Yes                                               | Yes                                               | Yes |
| 任意位置での保持 | Yes                                               | Yes (ハンドルボタン付き)                          |  Yes|
| 手首カメラマウント   |参考3Dプリントファイルを提供 | | 参考3Dプリントファイルを提供
| LeRobotとの連携   | ✅                                                 | ✅                                                 | ✅|
| ROS 2との連携     | ✅                                                 | ✅                                                | ✅|
| MoveIt2との連携    | ✅                                                 | ✅                                               |✅ |
| Gazeboとの連携    | ✅                                                 |✅                                              |✅ |
| 通信ハブ    | UC-01                                             | UC-01                                             | UC-01 |
| 電源         | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

サーボモーターの詳細については、以下のリンクをご覧ください。

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## 初期環境設定

**Ubuntu x86の場合:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Jetson Orinの場合:**

- Jetson JetPack 6.0+  
- Python 3.10  
- Torch 2.6  

## インストールとデバッグ

### LeRobotのインストール

pytorchやtorchvisionなどの環境は、お使いのCUDAに基づいてインストールする必要があります。

1. Minicondaのインストール:
Jetsonの場合:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

または、X86 Ubuntu 22.04の場合:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. lerobot用の新しいconda環境を作成してアクティベート

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Lerobotのクローン:

```bash
git clone https://github.com/servodevelop/lerobot-starai.git
```

4. minicondaを使用する場合、環境にffmpegをインストール:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
これは通常、libsvtav1エンコーダーでコンパイルされたプラットフォーム用のffmpeg 7.Xをインストールします。libsvtav1がサポートされていない場合（ffmpeg -encodersでサポートされているエンコーダーを確認）、以下を実行できます：

- [すべてのプラットフォーム] 以下を使用してffmpeg 7.Xを明示的にインストール:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Linuxのみ] ffmpegビルド依存関係をインストールし、libsvtav1でソースからffmpegをコンパイルし、which ffmpegでインストールに対応するffmpegバイナリを使用していることを確認してください。

:::

5. feetechモーター用の依存関係を含むLeRobotのインストール:

```bash
cd ~/lerobot-starai && pip install -e ".[feetech]"
```

Jetson Jetpackデバイスの場合（このステップを実行する前に、ステップ5から[Pytorch-gpuとTorchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)をインストールしてください）:

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. PytorchとTorchvisionの確認

pipを介してlerobot環境をインストールすると、元のPytorchとTorchvisionがアンインストールされ、PytorchとTorchvisionのCPUバージョンがインストールされるため、Pythonで確認を行う必要があります。

```python
import torch
print(torch.cuda.is_available())
```

印刷された結果がFalseの場合、[公式ウェブサイトのチュートリアル](https://pytorch.org/index.html)に従ってPytorchとTorchvisionを再インストールする必要があります。

Jetsonデバイスを使用している場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)に従ってPytorchとTorchvisionをインストールしてください。

### ロボットアームの開梱

ロボットアームキットに含まれるもの

- リーダーアーム
- フォロワーアーム
- コントローラー（ハンドル）
- パラレルグリッパー
- インストールツール（ネジ、六角レンチ）
- 電源 ×2
- Cクランプ ×2
- UC-01デバッグボード ×2

UC-01デバッグボードスイッチ：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

### アームポートの設定

ターミナルで以下のコマンドを実行して、アームに関連するUSBポートを見つけます：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

:::tip
usbを取り外すことを忘れないでください。そうしないとインターフェースが検出されません。
:::

例：

1. リーダーアームのポートを識別する際の出力例（例：Macでは`/dev/tty.usbmodem575E0031751`、Linuxでは`/dev/ttyACM0`の可能性）:
2. フォロワーアームのポートを識別する際の出力例（例：Macでは`/dev/tty.usbmodem575E0032081`、Linuxでは`/dev/ttyACM1`の可能性）:

以下を実行してUSBポートへのアクセス権を付与する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1```

:::tip

ttyUSB0シリアルポートが認識されない場合は、以下の解決策を試してください：

すべてのUSBポートをリストアップします。

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

認識されたら、ttyusbの情報を確認します。

```sh
sudo dmesg | grep ttyUSB
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate2.png" />
</div>

最後の行は、brlttyがUSBを占有しているため切断されていることを示しています。brlttyを削除すると問題が解決されます。

```sh
sudo apt remove brltty
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate3.png" />
</div>

最後に、chmodコマンドを使用します。

```sh
sudo chmod 666 /dev/ttyUSB0
```

:::

ファイル `lerobot-starai\lerobot\common\robot_devices\robots\configs.py` を開きます

Ctrl+Fを使用してstaraiを検索し、以下のコードを見つけます。次に、follower_armsとleader_armsのポート設定を実際のポート設定に合わせて変更する必要があります。

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB1",  #<-------- UPDATE HEARE
                interval = 100,        
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB0",  #<-------- UPDATE HEARE
                interval = 100,        
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )
```

### ランタイムパラメータの設定

ファイル `lerobot-starai\lerobot\common\robot_devices\robots\configs.py` を開きます

Ctrl + Fを使用してstaraiを検索し、以下のコードを見つけます。次に、follower_armsのinterval設定を変更する必要があります。

- 説明：時間間隔が小さくなるとフォロワーの応答が速くなり、時間間隔が大きくなるとフォロワーの動作がより安定します。
- 値の範囲：整数、50より大きく2000未満。

テレオペレーション中はより良い応答性のためにintervalを100（デフォルト値）に設定し、評価フェーズでの自律実行中はより安定した動作を確保するために1000に設定することを推奨します。

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB1",
                interval = 100,  #<-------- UPDATE HEARE       
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB0",
                interval = 100,  #<-------- UPDATE HEARE
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

```

### キャリブレーション

通常、ロボットアームは工場で事前にキャリブレーションされており、再キャリブレーションは必要ありません。関節モーターが長時間リミット位置に留まっていることが判明した場合は、キャリブレーションファイルを取得して再度キャリブレーションを実行するために、お問い合わせください。

## テレオペレーション

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/Uz-x-2P2xaE?si=HJTjALt5yFntR6-s" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

アームを図に示された位置に移動し、スタンバイに設定します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

**シンプルなテレオペレーション**
これでロボットをテレオペレーションする準備が整いました！この簡単なスクリプトを実行してください（カメラには接続せず、表示もしません）：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

プログラム開始後、Holdボタンは機能し続けます。

## カメラの追加

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

2台のUSBカメラを挿入した後、以下のスクリプトを実行してカメラのポート番号を確認します。カメラはUSBハブに接続してはならず、デバイスに直接接続する必要があることを覚えておくことが重要です。USBハブの低速度により、画像データを読み取れない場合があります。

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

ターミナルは以下の情報を出力します。例えば、ラップトップカメラは `index 0`、USBカメラは `index 2` です。

```markdown
Mac or X86 Ubuntu detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 0
Camera found at index 2
[...]
Connecting cameras
OpenCVCamera(0, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

各カメラで撮影された写真は `outputs/images_from_opencv_cameras` ディレクトリで確認でき、異なる位置のカメラに対応するポートインデックス情報を確認できます。次に、`lerobot-starai/lerobot/common/robot_devices/robots/configs.py` ファイルでカメラパラメータの調整を完了します。

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/camera.png" />
</div>

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"

    cameras: dict[str, CameraConfig] = field(
        default_factory=*lambda*: {
            "laptop": OpenCVCameraConfig(
                camera_index=2,             #<------ UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=0,             #<------ UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

​    mock: bool = False

```

これで、テレオペレーション中にコンピュータでカメラを表示できるようになります：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=teleoperate \
  --control.display_data=true
```

:::tip
このようなバグが見つかった場合。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

rerunバージョンをダウングレードして問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::

## データセットの記録

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

テレオペレーションに慣れたら、最初のデータセットを記録できます。

データセットのアップロードにHugging Face hubの機能を使用したい場合で、以前に行ったことがない場合は、[Hugging Face設定](https://huggingface.co/settings/tokens)から生成できる書き込みアクセストークンを使用してログインしていることを確認してください：
```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

これらのコマンドを実行するために、Hugging Faceリポジトリ名を変数に保存します：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

:::tip
Hugging Face Hubのデータセットアップロード機能を使用したくない場合は、`--control.push_to_hub=false`を選択できます。さらに、`--control.repo_id=${HF_USER}/starai`を`--control.repo_id=starai/starai`などのカスタムローカルフォルダ名に置き換えてください。データはシステムのホームディレクトリの`~/.cache/huggingface/lerobot`ディレクトリに保存されます。
:::

20エピソードを記録し、データセットをハブにアップロードします：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/starai \
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=ture
```

Hubにアップロードしない場合：
**（推奨、以下のチュートリアルは主にローカルデータに焦点を当てます）**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/starai \#Assign a name to the local storage file yourself
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=false #set push_to_hub to false
```

以下のようなデータが表示されます：

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

```markdown
Parameter Explanations
- wormup-time-s: It refers to the initialization time.
- episode-time-s: It represents the time for collecting data each time.
- reset-time-s: It is the preparation time between each data collection.
- num-episodes: It indicates how many groups of data are expected to be collected.
- push-to-hub: It determines whether to upload the data to the HuggingFace Hub. 
```

:::tip

- **再度**：「データをローカルに保存したい場合（`--control.push_to_hub=false`）、`--control.repo_id=${HF_USER}/starai`を`--control.repo_id=starai/starai`などのカスタムローカルフォルダ名に置き換えてください。その後、システムのホームディレクトリの`~/.cache/huggingface/lerobot`に保存されます。」

- 注意：`--control.resume=true`を追加することで記録を再開できます。また、データセットをまだプッシュしていない場合は、`--control.local_files_only=true`を追加してください。最初から記録を開始したい場合は、データセットディレクトリを手動で削除する必要があります。

- `--control.push_to_hub=true`でデータセットをハブにアップロードした場合、以下で提供されるrepo idをコピー＆ペーストして[オンラインでデータセットを可視化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます：

- エピソード記録中はいつでも右矢印→を押すと早期停止してリセットに移行します。リセット中も同様に、早期停止して次のエピソード記録に移行します。

- エピソード記録中またはリセット中はいつでも左矢印←を押すと早期停止し、現在のエピソードをキャンセルして再記録します。

- エピソード記録中はいつでもエスケープキーESCを押すとセッションを早期終了し、直接ビデオエンコーディングとデータセットアップロードに移行します。

- データ記録に慣れたら、トレーニング用のより大きなデータセットを作成できます。良い開始タスクは、異なる場所でオブジェクトを掴み、ビンに置くことです。少なくとも50エピソード、場所ごとに10エピソードを記録することをお勧めします。カメラを固定し、記録全体を通して一貫した掴み動作を維持してください。また、操作しているオブジェクトがカメラに映っていることを確認してください。良い経験則は、カメラ画像だけを見てタスクを自分で実行できることです。

- 以下のセクションでは、ニューラルネットワークをトレーニングします。信頼性の高い掴み性能を達成した後、追加の掴み場所、異なる掴み技術、カメラ位置の変更など、データ収集中により多くのバリエーションを導入し始めることができます。

- あまりにも早く多くのバリエーションを追加することは避けてください。結果に悪影響を与える可能性があります。

- Linuxでは、データ記録中に左右の矢印キーとエスケープキーが効果がない場合、$DISPLAY環境変数が設定されていることを確認してください。[pynputの制限](https://pynput.readthedocs.io/en/latest/limitations.html#linux)を参照してください。

:::

## データセットの可視化

データセットはローカルに保存されます。以下でローカルに可視化できます：

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id starai/starai \
```

ここで、`starai/starai`はデータ収集時に定義されたカスタム`repo_id`名です。

## エピソードの再生

ロボットで最初のエピソードを再生してみましょう：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=starai/starai \
  --control.episode=0 \# 0 is the first episode
  --control.local_files_only=true
```

:::tip
パラメータ`--control.local_files_only=true`は、Hubからのデータセットではなく、ローカルデータセットを利用するようプログラムに指示するために使用されます。
:::

## ポリシーのトレーニング

ロボットを制御するポリシーをトレーニングするには、`python lerobot/scripts/train.py`スクリプトを使用します。いくつかの引数が必要です。以下はコマンドの例です：

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=starai/starai \
  --policy.type=act \
  --output_dir=outputs/train/act_starai \
  --job_name=act_starai \
  --policy.device=cuda \
  --wandb.enable=false
```

説明しましょう：

1. 引数`--dataset.repo_id=starai/starai`としてローカルデータセットを使用します。
2. `policy.type=act`を使用してポリシーを提供し、[`lerobot-starai/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py)から設定を読み込みます。現在、ACTがテストされていますが、diffusion、pi0、pi0fast、tdmpc、vqbetなどの他のポリシーも試すことができます。
3. Nvidia GPUでトレーニングしているため`policy.device=cuda`を提供しましたが、Apple siliconでトレーニングする場合は`policy.device=mps`を使用できます。
4. トレーニングプロットを可視化するために[Weights and Biases](https://docs.wandb.ai/quickstart)を使用する`wandb.enable=true`を提供しました。これはオプションですが、使用する場合は`wandb login`を実行してログインしていることを確認してください。

ローカルデータセットでトレーニングしたい場合は、`repo_id`がデータ収集時に使用したものと一致することを確認してください。トレーニングには数時間かかります。チェックポイントは`outputs/train/act_starai/checkpoints`にあります。

チェックポイントからトレーニングを再開するには、以下は`act_starai`の最後のチェックポイントから再開するコマンドの例です：

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_starai/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## ポリシーの評価

[`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py)の`record`関数を使用できますが、ポリシーチェックポイントを入力として使用します。例えば、10の評価エピソードを記録するには、このコマンドを実行します：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/eval_act_starai \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=0 \#Set the reset time to 0 to skip the reset phase and ensure continuous operation.
  --control.num_episodes=10 \
  --control.push_to_hub=false \#Choose don't upload to Hub
  --control.policy.path=outputs/train/act_starai/checkpoints/last/pretrained_model
```

ご覧のとおり、これは以前にトレーニングデータセットを記録するために使用したコマンドとほぼ同じです。違いは2つだけです：

1. ポリシーチェックポイントのパスを示すために`--control.policy.path`パラメータが追加されました（例：`outputs/train/act_starai/checkpoints/last/pretrained_model`）。
2. 評価データセットの名前は推論を実行していることを反映するために`eval`で**始まる必要があります**（例：`--control.repo_id=starai/eval_act_starai`）。この操作は評価中に特別にビデオとデータを記録し、`eval_act_starai`に保存します。

:::warning
評価コマンドを2回目に実行するときにエラーが発生した場合、対応する`eval_act_starai`ファイルを削除して、ディレクトリ`~/.cache/huggingface/lerobot/starai/`の下に同じ名前のファイルがないことを確認する必要があります。
:::

:::tip
モデルチェックポイントをHubにアップロードした場合、`--control.push_to_hub=true`を設定しながら、モデルリポジトリも使用できます（例：`--control.repo_id=${HF_USER}/eval_act_starai`）。
:::

## FAQ

- このドキュメント/チュートリアルに従っている場合は、推奨されるGitHubリポジトリ`git clone https://github.com/servodevelop/lerobot-starai.git`をgit cloneしてください。

- 以下のエラーが発生した場合、対応するポートに接続されたロボットアームの電源が入っているか、バスサーボに緩みや切断されたケーブルがないかを確認する必要があります。

  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- ロボットアームの部品を修理または交換した場合は、`~/lerobot/.cache/huggingface/calibration/so100`フォルダを完全に削除し、ロボットアームを再キャリブレーションしてください。
- リモートコントロールが正常に機能するが、カメラ付きリモートコントロールで画像インターフェースが表示されない場合は、[こちら](https://github.com/huggingface/lerobot/pull/757/files)を参照してください

- データセットのリモート操作中にlibtiffの問題が発生した場合は、libtiffのバージョンを更新してください。

  ```bash
  conda install libtiff==4.5.0  #for Ubuntu 22.04 is libtiff==4.5.1
  ```

- [Lerobot Installation](https://wiki.seeedstudio.com/ja/lerobot_so100m/#install-lerobot)を実行した後、pytorchのGPUバージョンが自動的にアンインストールされる可能性があるため、torch-gpuを手動でインストールする必要があります。

- Jetsonの場合は、`conda install -y -c conda-forge ffmpeg`を実行する前に、まず[Pytorch and Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)をインストールしてください。そうしないと、torchvisionをコンパイルする際にffmpegのバージョン不一致の問題が発生する可能性があります。

- 以下の問題が発生した場合、お使いのコンピュータがこのビデオコーデック形式をサポートしていないことを意味します。ファイル`lerobot-starai/lerobot/common/datasets/video_utils.py`の134行目を変更し、`vcodec: str = "libsvtav1"`の値を`libx264`または`libopenh264`に変更する必要があります。異なるコンピュータでは異なるパラメータが必要な場合があるため、様々なオプションを試すことができます。[Issues 705](https://github.com/huggingface/lerobot/issues/705)

  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ```

- 重要！！！実行中にサーボのケーブルが緩んだ場合は、サーボを初期位置に戻してからサーボケーブルを再接続してください。[サーボ初期化コマンド](https://wiki.seeedstudio.com/ja/lerobot_so100m/#configure-the-motors)を使用して個別にサーボを校正することもできます。個別校正時は、サーボとドライバーボード間に1本のケーブルのみが接続されていることを確認してください。以下のエラーが発生した場合

  ```bash
  Auto-correct calibration of motor 'wrist roll' by shifting value by 1 full turns, from '-270 < -312.451171875 < 270degrees' to'-270<-312.451171875 < 270 degrees'.
  ```

  または角度や制限値の超過に関連するロボットアーム校正プロセス中の他のエラーが発生した場合も、この方法が適用できます。

- 8G 3060ラップトップで50セットのACTデータを訓練するには約6時間かかりますが、4090またはA100コンピュータでは50セットのデータの訓練に約2〜3時間かかります。

- データ収集中は、カメラの位置、角度、環境照明を安定に保ち、過度に不安定な背景や歩行者の撮影を最小限に抑えてください。そうしないと、展開時の大幅な環境変化により、ロボットアームが適切に把握できなくなる可能性があります。

- データ収集コマンドの`num-episodes`パラメータが十分なデータを収集するように設定されていることを確認し、途中で手動で一時停止しないでください。これは、データの平均と分散がデータ収集完了後にのみ計算されるためで、これは訓練に必要です。

- プログラムがUSBカメラの画像データを読み取れないというプロンプトが表示される場合は、USBカメラがハブに接続されていないことを確認してください。USBカメラは高速な画像伝送レートを確保するために、デバイスに直接接続する必要があります。

- `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`のようなバグが見つかった場合は、rerunのバージョンをダウングレードして問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::tip
ソフトウェアの問題や環境依存の問題で解決できない場合は、このチュートリアルの最後にあるFAQセクションを確認することに加えて、[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)または[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)に速やかに問題を報告してください。
:::

## 引用

Seeedstudio英語Wikiドキュメント：[How to use the SO10xArm robotic arm in the latest version of Lerobot](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/)

lerobot-starai github: [lerobot-starai](https://github.com/Welt-liu/lerobot-starai)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

StarAI Robot Arm moveit2: [star-arm-moveit2](https://github.com/Welt-liu/star-arm-moveit2)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT or ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
