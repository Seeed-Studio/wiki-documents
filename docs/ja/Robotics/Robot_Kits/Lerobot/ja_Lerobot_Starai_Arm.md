---
description: このwikiは、StarAI Robot ArmのデバッグチュートリアルとLerobotフレームワーク内でのデータ収集とトレーニングの実現方法を提供します。
title: LeRobotでのStarAI Arm
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.webp
slug: /ja/lerobot_starai_arm
last_update:
  date: 9/16/2025
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

1. **オープンソース & 開発者フレンドリー**
   [Fishion Star Technology Limited](https://fashionrobo.com/)によるオープンソースで開発者フレンドリーな6+1自由度ロボットアームソリューションです。
2. **LeRobotとの統合**
   [LeRobot Platform](https://github.com/huggingface/lerobot)との統合を目的として設計されており、実世界のロボットタスクにおける模倣学習のためのPyTorchモデル、データセット、ツール（データ収集、シミュレーション、トレーニング、デプロイメントを含む）を提供します。
3. **包括的な学習リソース**
   組み立てと校正ガイド、カスタム把持タスクの例など、包括的なオープンソース学習リソースを提供し、ユーザーが迅速に開始してロボットアプリケーションを開発できるよう支援します。
4. **Nvidiaとの互換性**
   reComputer Mini J4012 Orin NX 16GBプラットフォームでのデプロイメントをサポートします。

## 主な特徴

- すぐに使用可能 — 組み立て不要。開封してすぐにAIの世界に飛び込めます。
- 6+1自由度と470mmのリーチ — 汎用性と精度のために構築されています。
- デュアルブラシレスバスサーボ駆動 — 最大300gのペイロードでスムーズ、静音、強力。
- 最大66mm開口の平行グリッパー — クイック交換の柔軟性のためのモジュラーフィンガーチップ。
- 独自のホバーロック技術 — ワンプレスでリーダーアームを任意の位置で瞬時に固定。

## 仕様

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.jpg" />
</div>

| 項目                 | フォロワーアーム \| Viola                             | リーダーアーム \|Violin                                |    フォロワーアーム \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| 自由度   | 6+1                                               | 6+1                                               | 6+1             |
| リーチ                | 470mm                                             | 470mm                                             | 670mm |
| スパン                 | 940mm                                             | 940mm                                             | 1340mm |
| 再現性        | 2mm                                               | -                                                 | 1mm  |
| 作業ペイロード      | 300g（70%リーチ時）                            | -                                                 |  750g（70%リーチ時）   |
| サーボ               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| 平行グリッパーキット  | ✅                                                 | -                                                 | ✅   |
| 手首回転         | あり                                               | あり                                               | あり |
| 任意位置での保持 | あり                                               | あり（ハンドルボタン付き）                          |  あり|
| 手首カメラマウント   |参考3Dプリントファイル提供 | | 参考3Dプリントファイル提供
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

## 初期環境セットアップ

**Ubuntu x86の場合：**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Jetson Orinの場合：**

- Jetson JetPack 6.0+  
- Python 3.10  
- Torch 2.6  

## インストールとデバッグ

### LeRobotのインストール

pytorchやtorchvisionなどの環境は、お使いのCUDAに基づいてインストールする必要があります。

1. Minicondaのインストール：
Jetsonの場合：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

または、X86 Ubuntu 22.04の場合：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. lerobotのための新しいconda環境を作成してアクティベート

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Lerobotのクローン：

```bash
git clone https://github.com/Seeed-Projects/lerobot-starai.git ~/lerobot
```

starai-arm-developブランチに切り替えます。

```bash
git checkout starai-arm-develop
```

4. minicondaを使用する場合、環境にffmpegをインストール：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
これは通常、libsvtav1エンコーダーでコンパイルされたプラットフォーム用のffmpeg 7.Xをインストールします。libsvtav1がサポートされていない場合（ffmpeg -encodersでサポートされているエンコーダーを確認）、以下を実行できます：

- [すべてのプラットフォーム] 以下を使用してffmpeg 7.Xを明示的にインストール：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Linuxのみ] ffmpegビルド依存関係をインストールし、libsvtav1でソースからffmpegをコンパイルし、which ffmpegでインストールに対応するffmpegバイナリを使用していることを確認してください。

:::

5. feetechモーター用の依存関係を含むLeRobotのインストール：

```bash
cd ~/lerobot && pip install -e ".[starai]"
```

Jetson Jetpackデバイスの場合（このステップを実行する前に、ステップ5から[Pytorch-gpuとTorchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)をインストールしてください）：

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
- 平行グリッパー
- インストールツール（ネジ、六角レンチ）
- 電源 ×2
- Cクランプ ×2
- UC-01デバッグボード ×2

UC-01デバッグボードスイッチ：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/C0DsNSNl0dI?si=HQzFXNwGEEqdXz3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### アームポートの設定

`~/lerobot`ディレクトリに入ります：

```bash
cd ~/lerobot
```

ターミナルで以下のコマンドを実行して、アームに関連付けられたUSBポートを見つけます：

```bash
lerobot-find-port
```

:::tip
usbを取り外すことを忘れないでください。そうしないとインターフェースが検出されません。
:::

例：
1. リーダーアームのポートを識別する際の出力例（例：Macでは `/dev/tty.usbmodem575E0031751`、Linuxでは `/dev/ttyUSB0` の可能性があります）：
2. フォロワーアームのポートを識別する際の出力例（例：Macでは `/dev/tty.usbmodem575E0032081`、Linuxでは `/dev/ttyUSB1` の可能性があります）：

:::tip
ttyUSB0シリアルポートが識別できない場合は、以下の解決策を試してください：

すべてのUSBポートをリストアップします。

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

識別できたら、ttyusbの情報を確認します。

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
sudo chmod 777 /dev/ttyUSB*
```

:::

以下を実行してUSBポートへのアクセス権限を付与する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyUSB*
```

## キャリブレーション

### 初期キャリブレーション

各関節を左右に回転させて対応する位置に移動してください。

### 再キャリブレーション

画面の指示に従って：文字「c」を入力してEnterキーを押してください。

以下は参考値です。通常の状況では、実際の制限参考値はこれらの参考値の**±10°**の範囲内に収まるはずです。

| サーボID | 下限角度 (°) | 上限角度 (°) | 備考                                          |
| -------- | --------------------- | --------------------- | ---------------------------------------------- |
| motor\_0 | -180°                 | 180°                  | 制限位置まで回転                   |
| motor\_1 | -90°                  | 90°                   | 制限位置まで回転                   |
| motor\_2 | -90°                  | 90°                   | 制限位置まで回転                   |
| motor\_3 | -180°                 | 180°                  | 制限なし；参考角度制限まで回転 |
| motor\_4 | -90°                  | 90°                   | 制限位置まで回転                   |
| motor\_5 | -180°                 | 180°                  | 制限なし；参考角度制限まで回転 |
| motor\_6 | 0°                    | 100°                  | 制限位置まで回転                   |

:::tip
PC（Linux）とJetsonボードを例にすると、`最初に`挿入されたUSBデバイスは`ttyUSB0`にマップされ、`2番目に`挿入されたUSBデバイスは`ttyUSB1`にマップされます。

コードを実行する前に、リーダーとフォロワーのマッピングインターフェースに注意してください。
:::

#### リーダーロボットアーム

リーダーを `/dev/ttyUSB0` に接続するか、`--teleop.port` パラメータを変更してから実行してください：

```bash
lerobot-calibrate     --teleop.type=starai_violin --teleop.port=/dev/ttyUSB0 --teleop.id=my_awesome_staraiviolin_arm
```

#### フォロワーロボットアーム

フォロワーを `/dev/ttyUSB1` に接続するか、`--teleop.port` パラメータを変更してから実行してください：

```bash
lerobot-calibrate     --robot.type=starai_viola --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraiviola_arm
```

コマンドを実行した後、各関節が**制限位置**に到達するように**ロボットアームを手動で動かす**必要があります。ターミナルには記録された範囲データが表示されます。この操作が完了したら、Enterキーを押してください。

:::tip
キャリブレーションファイルは以下のパスに保存されます：`~/.cache/huggingface/lerobot/calibration/robots` と `~/.cache/huggingface/lerobot/calibration/teleoperators`。
:::

### デュアルアームキャリブレーション設定

<details>
<summary> チュートリアル </summary>

#### リーダーロボットアーム

`left_arm_port` を `/dev/ttyUSB0` に、`right_arm_port` を `/dev/ttyUSB2` に接続するか、`--teleop.left_arm_port` と `--teleop.right_arm_port` パラメータを変更してから実行してください：

```bash
lerobot-calibrate     --teleop.type=bi_starai_leader  --teleop.left_arm_port=/dev/ttyUSB0  --teleop.right_arm_port=/dev/ttyUSB2  --teleop.id=bi_starai_leader
```

#### フォロワーロボットアーム

`left_arm_port` を `/dev/ttyUSB1` に、`right_arm_port` を `/dev/ttyUSB3` に接続するか、`--robot.left_arm_port` と `--robot.right_arm_port` パラメータを変更してから実行してください：

```bash
lerobot-calibrate     --robot.type=bi_starai_follower  --robot.left_arm_port=/dev/ttyUSB1  --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_follower
```

:::tip

シングルアームとデュアルアーム設定の違いは、`--teleop.type` と `--robot.type` パラメータにあります。さらに、デュアルアーム設定では左右のアーム用に別々のUSBポートが必要で、合計4つのUSBポートが必要です：`--teleop.left_arm_port`、`--teleop.right_arm_port`、`--robot.left_arm_port`、`--robot.right_arm_port`。

デュアルアーム設定を使用する場合は、テレオペレーション、データ収集、トレーニング、評価コマンドに適応するために、ロボットアームファイルタイプ `--teleop.type` と `--robot.type`、およびUSBポート `--teleop.left_arm_port`、`--teleop.right_arm_port`、`--robot.left_arm_port`、`--robot.right_arm_port` を手動で変更する必要があります。

:::

</details>

## テレオペレーション

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/Uz-x-2P2xaE?si=HJTjALt5yFntR6-s" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

アームを図に示された位置に移動し、スタンバイ状態に設定してください。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

これでロボットをテレオペレーションする準備が整いました（カメラは表示されません）！この簡単なスクリプトを実行してください：

```bash
lerobot-teleoperate \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm
```

<details>
<summary> デュアルアーム </summary>

```bash
lerobot-teleoperate \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader
```

</details>

リモート操作コマンドは以下のパラメータを自動的に検出します：

1. 不足しているキャリブレーションを識別し、キャリブレーション手順を開始します。
2. ロボットとリモート操作デバイスを接続し、リモート操作を開始します。

プログラム開始後、Hover Lock Technologyは機能し続けます。

## カメラの追加

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

2つのUSBカメラを挿入した後、以下のスクリプトを実行してカメラのポート番号を確認してください。カメラはUSBハブに接続してはならず、デバイスに直接接続する必要があることが重要です。USBハブの低速度により、画像データを読み取れない場合があります。

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

ターミナルには以下の情報が出力されます。例えば、ラップトップカメラは `index 2`、USBカメラは `index 4` です。

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ /dev/video2
  Type: OpenCV
  Id: /dev/video2
  Backend api: V4L2
  Default stream profile:
    Format: 0.0
    Width: 640
    Height: 480
    Fps: 30.0
--------------------
Camera #1:
  Name: OpenCV Camera @ /dev/video4
  Type: OpenCV
  Id: /dev/video4
  Backend api: V4L2
  Default stream profile:
    Format: 0.0
    Width: 640
    Height: 360
    Fps: 30.0
--------------------

Finalizing image saving...
Image capture finished. Images saved to outputs/captured_images
```

各カメラで撮影された画像は `outputs/images_from_opencv_cameras` ディレクトリで確認でき、異なる位置のカメラに対応するポートインデックス情報を検証できます。

外部カメラを確認した後、以下のカメラ情報を実際のカメラ情報に置き換えると、リモート操作中にコンピューターでカメラを表示できるようになります：

```bash
lerobot-teleoperate \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true

```

<details>
<summary> デュアルアーム </summary>

```bash
lerobot-teleoperate \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --display_data=true
```
</details>

:::tip
このようなバグが見つかった場合。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

rerunのバージョンをダウングレードすることで問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::

## データセットの記録

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

テレオペレーションに慣れたら、最初のデータセットを記録できます。

データセットをアップロードするためにHugging Face hubの機能を使用したい場合で、以前に行ったことがない場合は、[Hugging Face設定](https://huggingface.co/settings/tokens)から生成できる書き込みアクセストークンを使用してログインしていることを確認してください：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

これらのコマンドを実行するために、Hugging Faceリポジトリ名を変数に保存します：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

10エピソードを記録し、データセットをhubにアップロードします：

```bash
lerobot-record \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> デュアルアーム </summary>

```bash
lerobot-record \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

:::tip
シングルアームとデュアルアームのセットアップを区別するために、ここでの`--dataset.repo_id`は`starai/record-test_bi_arm`と名付けられています。
:::

</details>

:::tip
Hugging Face Hubデータセットアップロード機能を使用したくない場合は、`--dataset.push_to_hub=false`を選択できます。また、`--dataset.repo_id=${HF_USER}/starai`をカスタムローカルフォルダ名（例：`--dataset.repo_id=starai/record-test`）に置き換えてください。データはシステムのホームディレクトリの`~/.cache/huggingface/lerobot`に保存されます。
:::

Hubにアップロードしない場合：
**（推奨、以下のチュートリアルはローカルデータに焦点を当てます）**

```bash
lerobot-record \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> デュアルアーム </summary>

```bash
lerobot-record \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

:::tip
シングルアームとデュアルアームのセットアップを区別するために、ここでの`--dataset.repo_id`は`starai/record-test_bi_arm`と名付けられています。
:::

</details>

- `record`は、ロボット操作中のデータキャプチャと管理のためのツールセットを提供します：

#### 1. データストレージ

- データは`LeRobotDataset`形式で保存され、記録プロセス中にディスクに保存されます。

#### 2. チェックポイントと再開

- チェックポイントは記録中に自動的に作成されます。
- 問題が発生した場合、`--resume=true`で同じコマンドを再実行することで再開できます。記録を再開する際は、`--dataset.num_episodes`をデータセット内の目標総エピソード数ではなく、**記録する追加エピソード数**に設定する必要があります！
- 最初から記録を開始するには、データセットディレクトリを**手動で削除**してください。

#### 3. 記録パラメータ

コマンドラインパラメータを使用してデータ記録ワークフローを設定します：

```markdown
Parameter Description
- warmup-time-s: The initialization time.
- episode-time-s: The duration for each data collection session.
- reset-time-s: The preparation time between each data collection.
- num-episodes: The expected number of data sets to collect.
- push-to-hub: Determines whether to upload the data to HuggingFace Hub.
```

#### 4. 記録中のキーボード操作

キーボードショートカットを使用してデータ記録ワークフローを制御します：

- **右矢印キー（→）**を押す：現在のエピソードを早期停止するか時間をリセットし、次のエピソードに移動します。
- **左矢印キー（←）**を押す：現在のエピソードをキャンセルして再記録します。
- **ESC**を押す：セッションを即座に停止し、ビデオをエンコードしてデータセットをアップロードします。

:::tip
Linuxでは、データ記録中に左右の矢印キーとエスケープキーが効かない場合、$DISPLAY環境変数が設定されていることを確認してください。pynputの制限を参照してください。

データ記録に慣れたら、トレーニング用により大きなデータセットを作成できます。良い開始タスクは、異なる位置でオブジェクトを掴み、小さな箱に置くことです。少なくとも50エピソード、場所ごとに10エピソードを記録することをお勧めします。記録中はカメラを固定し、一貫した掴み動作を維持してください。また、操作しているオブジェクトがカメラに映っていることを確認してください。良い経験則は、カメラ画像だけを見てタスクを完了できることです。
:::


## エピソードの再生

ロボットで最初のエピソードを再生してみましょう：

```bash
lerobot-replay \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --dataset.repo_id=starai/record-test \
    --dataset.episode=1 # choose the episode you want to replay
```

<details>
<summary> デュアルアーム </summary>

```bash
lerobot-replay \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode=0 # choose the episode you want to replay
```

</details>

## ポリシーのトレーニング

ロボットを制御するポリシーをトレーニングするためのコマンド例です：

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test \
  --policy.type=act \
  --output_dir=outputs/train/act_viola_test \
  --job_name=act_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy
```

<details>
<summary> デュアルアーム </summary>

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test_bi_arm \
  --policy.type=act \
  --output_dir=outputs/train/act_bi_viola_test \
  --job_name=act_bi_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy
```

</details>


1. `policy.type`は`diffusion,pi0,pi0fast`の入力をサポートします
1. データセットをパラメータとして提供します：`dataset.repo_id=starai/record-test`。

2. [`configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/configuration_act.py)から設定を読み込みます。重要なことに、このポリシーはロボットのモーター状態、モーターアクション、カメラ数に自動的に適応し、データセットに保存されます。

3. トレーニングチャートを可視化するために[Weights and Biases](https://docs.wandb.ai/quickstart)を使用する`wandb.enable=true`を提供します。これはオプションですが、使用する場合は`wandb login`を実行してログインしていることを確認してください。

特定のチェックポイントからトレーニングを再開します。

```bash
lerobot-train \
  --config_path=outputs/train/act_bi_viola_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```


<details>
<summary>[SmolVLA policy](https://huggingface.co/docs/lerobot/smolvla)をトレーニングする場合のコマンド： </summary>

```bash
pip install -e ".[smolvla]"
```

### トレーニング
```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \ # <- Use pretrained fine-tuned model
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true```

### 評価

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \ 
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=so100_leader \
  # --teleop.port=/dev/ttyACM0 \
  # --teleop.id=my_red_leader_arm \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model
```


</details>


<details>
<summary>[Libero policy](https://huggingface.co/docs/lerobot/libero)のトレーニングコマンド： </summary>

LIBEROは生涯ロボット学習を研究するために設計されたベンチマークです。ロボットは工場で一度だけ事前訓練されるのではなく、時間をかけて人間のユーザーと共に学習し適応し続ける必要があるという考えです。この継続的な適応は意思決定における生涯学習（LLDM）と呼ばれ、真にパーソナライズされたヘルパーとなるロボットの構築に向けた重要なステップです。

  - [LIBERO論文](https://arxiv.org/abs/2306.03310)
  - [オリジナルLIBEROリポジトリ](https://github.com/Lifelong-Robot-Learning/LIBERO)

LIBEROには5つのタスクスイートが含まれています：
- LIBERO-Spatial (libero_spatial) – 空間関係についての推論を必要とするタスク。

- LIBERO-Object (libero_object) – 異なるオブジェクトの操作を中心としたタスク。

- LIBERO-Goal (libero_goal) – ロボットが変化するターゲットに適応する必要がある目標条件付きタスク。

- LIBERO-90 (libero_90) – LIBERO-100コレクションからの90の短期間タスク。

- LIBERO-Long (libero_10) – LIBERO-100コレクションからの10の長期間タスク。

これらのスイートは合わせて130のタスクをカバーし、シンプルなオブジェクト操作から複雑な多段階シナリオまで幅広く含んでいます。LIBEROは時間とともに成長し、コミュニティが生涯学習アルゴリズムをテストし改善できる共有ベンチマークとして機能することを意図しています。

## LIBEROでのトレーニング

```bash
lerobot-train \
  --policy.type=smolvla \
  --policy.repo_id=${HF_USER}/libero-test \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_10 \
  --output_dir=./outputs/ \
  --steps=100000 \
  --batch_size=4 \
  --eval.batch_size=1 \
  --eval.n_episodes=1 \
  --eval_freq=1000 \
```


## LIBEROでの評価  

LIBEROをインストールするには、LeRobotの公式手順に従った後、単に次を実行してください：`pip install -e ".[libero]"`

### 単一スイート評価：

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task`はスイート（libero_object、libero_spatialなど）を選択します。

- `--eval.batch_size`は並列実行する環境の数を制御します。

- `--eval.n_episodes`は実行する総エピソード数を設定します。

### マルチスイート評価

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- マルチスイート評価には`--env.task`にカンマ区切りのリストを渡します。



</details>



## ポリシーの評価

10回の評価エピソードを記録するには、以下のコマンドを実行してください：

```bash
lerobot-record  \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=starai/eval_record-test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_viola_test/checkpoints/last/pretrained_model
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=starai_violin \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=my_awesome_leader_arm \
```

<details>
<summary> デュアルアーム </summary>

```bash
lerobot-record  \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --robot.id=bi_starai_follower \
    --display_data=false \
    --dataset.repo_id=starai/eval_record-test_bi_arm \
    --dataset.single_task="test" \
    --policy.path=outputs/train/act_bi_viola_test/checkpoints/last/pretrained_model
```

</details>

ご覧のとおり、これは以前にトレーニングデータセットを記録するために使用したコマンドとほぼ同じですが、いくつかの変更があります：

1. `--policy.path`パラメータは、トレーニング済みポリシー重みファイルへのパスを示します（例：`outputs/train/act_viola_test/checkpoints/last/pretrained_model`）。モデル重みをHubにアップロードしている場合は、モデルリポジトリも使用できます（例：`${HF_USER}/starai`）。

2. 評価データセット`dataset.repo_id`の名前は`eval_`で始まります。この操作により、評価フェーズ専用のビデオとデータが記録され、`eval_`で始まるフォルダ（例：`starai/eval_record-test`）に保存されます。

3. 評価フェーズで`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/starai/eval_xxxx'`が発生した場合は、`eval_`で始まるフォルダを削除してプログラムを再実行してください。

4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`が発生した場合は、`--robot.cameras`パラメータの`up`や`front`などのキーワードがデータ収集フェーズで使用されたものと厳密に一致していることを確認してください。

## FAQ

- このドキュメントのチュートリアルを使用している場合は、推奨されるGitHubリポジトリを`git clone`してください：`https://github.com/servodevelop/lerobot.git`。

- テレオペレーションは正常に動作するが、カメラ付きテレオペレーションで画像インターフェースが表示されない場合は、[こちら](https://github.com/huggingface/lerobot/pull/757/files)を参照してください。

- データセットテレオペレーション中にlibtiffの問題が発生した場合は、libtiffのバージョンを更新してください。

  ```bash
  conda install libtiff==4.5.0  # for Ubuntu 22.04, use libtiff==4.5.1
  ```

- LeRobotをインストールした後、GPU版のPyTorchが自動的にアンインストールされる場合があるため、torch-gpuを手動でインストールする必要があります。

- Jetsonの場合は、`conda install -y -c conda-forge ffmpeg`を実行する前に、まず[PyTorchとTorchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)をインストールしてください。そうしないと、torchvisionをコンパイルする際にバージョンの不一致問題が発生します。

- 3060 8GBラップトップでACTデータの50エピソードをトレーニングするには約6時間かかり、4090またはA100コンピュータでは約2-3時間かかります。

- データ収集中は、カメラの位置と角度、環境照明の安定性を確保し、カメラに映る不安定な背景や歩行者を最小限に抑えてください。そうしないと、デプロイメント環境の大幅な変化により、ロボットアームが正常にオブジェクトを把握できなくなる可能性があります。

- データ収集コマンドの`num-episodes`は十分なデータ収集を確保し、途中で手動で一時停止してはいけません。これは、データの平均と分散がデータ収集完了後にのみ計算され、これがトレーニングに必要だからです。

- プログラムがUSBカメラの画像データを読み取れないと表示する場合は、USBカメラがHubを通じて接続されていないことを確認してください。USBカメラは高速な画像転送レートを確保するために、デバイスに直接接続する必要があります。

## 引用

StarAI Robot Arm ROS2 Moveit2: [star-arm-moveit2](https://wiki.seeedstudio.com/ja/starai_arm_ros_moveit/)

lerobot-starai github: [lerobot-starai](https://github.com/servodevelop/lerobot.git)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT or ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
