---
description: このWikiでは、StarAI Robot Arm のデバッグチュートリアルを提供し、Lerobot フレームワーク内でのデータ収集と学習を実現します。
title: StarAI Arm と LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /lerobot_starai_arm
sku: 114090081,114090080,100049805,100038899,100028196
last_update:
  date: 10/13/2025
  author: LiShanghang
translation:
  skip: [zh-CN]
createdAt: '2025-07-25'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/lerobot_starai_arm/
---

# LeRobot を使った StarAI Robot Arm 入門

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **フォロワー Viola** | **リーダー Violin** | **フォロワー Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手!!! 🖱️</font></span></strong>
</a></div>

## 製品紹介

1. **オープンソース & 開発者フレンドリー**
   これは、[Fishion Star Technology Limited](https://fashionrobo.com/) によるオープンソースで開発者フレンドリーな 6+1 自由度ロボットアームソリューションです。
2. **LeRobot との統合**
   [LeRobot Platform](https://github.com/huggingface/lerobot) との統合を前提に設計されており、PyTorch モデル、データセット、および模倣学習のためのツールを提供します。これには、実世界のロボットタスクにおけるデータ収集、シミュレーション、学習、デプロイが含まれます。
3. **充実した学習リソース**
   組み立ておよびキャリブレーションガイド、カスタム把持タスクのサンプルなど、包括的なオープンソース学習リソースを提供し、ユーザーが素早く使い始めてロボットアプリケーションを開発できるよう支援します。
4. **Nvidia との互換性**
   reComputer Mini J4012 Orin NX 16GB プラットフォーム上でのデプロイをサポートします。

## 主な特長

- すぐに使える — 組み立て不要。箱から出して AI の世界に飛び込むだけ。
- 6+1 自由度と 470mm のリーチ — 高い汎用性と精度のために設計。
- デュアルブラシレスバスサーボ駆動 — 最大 300g の可搬重量で、滑らか・静音かつパワフル。
- 最大開口 66mm のパラレルグリッパー — 迅速な交換が可能なモジュール式フィンガーチップ。
- 独自のホバーロック技術 — ボタン 1 つで任意の位置でリーダーアームを即座に固定。

## 仕様

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.jpg" />
</div>

| 項目                 | フォロワーアーム \| Viola                             | リーダーアーム \|Violin                                |    フォロワーアーム \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| 自由度               | 6+1                                               | 6+1                                               | 6+1             |
| リーチ               | 470mm                                             | 470mm                                             | 670mm |
| 繰り返し精度         | 2mm                                               | -                                                 | 2mm  |
| 動作時可搬重量       | 300g（リーチ 70% 時）                            | -                                                 |  750g（リーチ 70% 時）   |
| サーボ               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| パラレルグリッパーキット  | ✅                                                 | -                                                 | ✅   |
| 手首回転             | Yes                                               | Yes                                               | Yes |
| 任意位置での保持     | Yes                                               | Yes (with handle button)                          |  Yes|
| 手首カメラマウント   |参照用 3D プリントファイルを提供 | | 参照用 3D プリントファイルを提供
| LeRobot 対応         | ✅                                                 | ✅                                                 | ✅|
| ROS 2 対応           | ✅                                                 | ✅                                                | ✅|
| MoveIt2 対応          | ✅                                                 | ✅                                               |✅ |
| Gazebo 対応          | ✅                                                 |✅                                              |✅ |
| 通信ハブ             | UC-01                                             | UC-01                                             | UC-01 |
| 電源                 | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

サーボモーターの詳細については、次のリンクをご覧ください。

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## 初期環境のセットアップ

**Ubuntu x86 の場合：**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.12
- Torch 2.6  

**Jetson Orin の場合：**

- Jetson JetPack 6.0+  
- Python 3.12
- Torch 2.6  

## インストールとデバッグ

### LeRobot のインストール

pytorch や torchvision などの環境は、使用している CUDA に基づいてインストールする必要があります。

1. Miniconda をインストールします：
Jetson の場合：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

または、X86 Ubuntu 22.04 の場合：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. lerobot 用の新しい conda 環境を作成して有効化します

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

3. Lerobot をクローンします：

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. miniconda を使用している場合は、環境内に ffmpeg をインストールします：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
これは通常、libsvtav1 エンコーダーでコンパイルされた、プラットフォーム向けの ffmpeg 7.X をインストールします。libsvtav1 がサポートされていない場合（`ffmpeg -encoders` でサポートされているエンコーダーを確認）、次のことができます：

- 【任意のプラットフォーム】明示的に ffmpeg 7.X をインストールします：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- 【Linux のみ】ffmpeg のビルド依存関係をインストールし、libsvtav1 を有効にしてソースから ffmpeg をコンパイルし、`which ffmpeg` で確認できる、インストールに対応した ffmpeg バイナリを使用していることを確認します。

:::

5. LeRobot をインストールします：

```bash
cd ~/lerobot && pip install -e .
```

```bash
sudo apt remove brltty
```

Jetson Jetpack デバイスの場合（このステップを実行する前に、必ずステップ 5 で [Pytorch-gpu と Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) をインストールしてください）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6.Fashionstar モーター依存パッケージをインストールします：

```bash
pip install lerobot_teleoperator_bimanual_leader
pip install lerobot_robot_bimanual_follower
```

7. Pytorch と Torchvision を確認します

pip で lerobot 環境をインストールすると、元の Pytorch と Torchvision がアンインストールされ、CPU 版の Pytorch と Torchvision がインストールされるため、Python で確認を行う必要があります。

```python
import torch
print(torch.cuda.is_available())
```

出力結果が False の場合は、[公式サイトのチュートリアル](https://pytorch.org/index.html) に従って Pytorch と Torchvision を再インストールする必要があります。

Jetson デバイスを使用している場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) に従って Pytorch と Torchvision をインストールしてください。

### ロボットアームの開封

ロボットアームキット内容

- リーダーアーム
- フォロワーアーム
- コントローラー（ハンドル）
- パラレルグリッパー
- 取付工具（ネジ、六角レンチ）
- C クランプ ×2
- UC-01 デバッグボード ×2

UC-01 デバッグボードのスイッチ：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/C0DsNSNl0dI?si=HQzFXNwGEEqdXz3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### アームポートの設定

`~/lerobot` ディレクトリに入ります：

```bash
cd ~/lerobot
```

ターミナルで次のコマンドを実行し、アームに対応する USB ポートを探します：

```bash
lerobot-find-port
```

:::tip
USB を抜くことを忘れないでください。そうしないとインターフェースが検出されません。
:::

例：

1. リーダーアームのポートを特定したときの出力例（Mac では `/dev/tty.usbmodem575E0031751`、Linux では `/dev/ttyUSB0` など）：
2. フォロワーアームのポートを特定したときの出力例（Mac では `/dev/tty.usbmodem575E0032081`、Linux では `/dev/ttyUSB1` など）：

:::tip
ttyUSB0 シリアルポートが認識されない場合は、次の解決策を試してください：

すべての USB ポートを一覧表示します。

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

認識されたら、ttyusb の情報を確認します。

```sh
sudo dmesg | grep ttyUSB
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate2.png" />
</div>

最後の行は、brltty が USB を占有しているために切断されていることを示しています。brltty を削除すると問題は解決します。

```sh
sudo apt remove brltty
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate3.png" />
</div>

最後に、chmod コマンドを使用します。

```sh
sudo chmod 777 /dev/ttyUSB*
```

:::

USB ポートへのアクセス権を付与するために、次を実行する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyUSB*
```

## キャリブレーション

StarAI ロボットアームの開封から遠隔操作までをカバーする動画については、次を参照してください：
<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/02lxxF9Cvy8?si=IGJda5nXkYEbm2N6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

ロボットアームをロボットアームの初期位置（下図参照）に移動し、待機状態にしてから、電源を再接続します。


新バージョンのロボットアームの初期位置については、特にジョイント 3、4、5 のサーボが図の位置と厳密に一致するよう注意してください。


| **新型 Violin リーダーアーム** | **旧型 Violin リーダーアーム** | **Viola フォロワーアーム** |**Cello フォロワーアーム** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_init.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png) |![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_init.png) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello_init.png) |

例：

| **Violin リーダーアーム** | **Viola フォロワーアーム** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_rest.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_rest.jpg) |


:::tip
PC（Linux）と Jetson ボードを例にすると、`最初` に挿入された USB デバイスは `ttyUSB0` にマッピングされ、`2 番目` に挿入された USB デバイスは `ttyUSB1` にマッピングされます。

コードを実行する前に、リーダーとフォロワーのマッピングインターフェースに注意してください。
:::

#### リーダー ロボットアーム

リーダーを `/dev/ttyUSB0` に接続するか、`--teleop.port` パラメータを変更してから、次を実行します：

```bash
lerobot-calibrate     --teleop.type=lerobot_teleoperator_violin --teleop.port=/dev/ttyUSB0 --teleop.id=my_awesome_staraiviolin_arm
```

起動後、各関節のエンコーダ値が表示されます。各関節を 1 つずつ手動でキャリブレーションする必要があります。各関節を最大位置と最小位置まで回転させてください。リミットストッパーのない関節では、回転範囲は時計回り 180° または反時計回り 180° を超えてはなりません。すべての関節のキャリブレーションが完了したら、Enter キーを押して設定を保存します。

#### フォロワー ロボットアーム

フォロワーを `/dev/ttyUSB1` に接続するか、`--teleop.port` パラメータを変更してから、次を実行します：

Viola：

```bash
lerobot-calibrate     --robot.type=lerobot_robot_viola --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraiviola_arm
```

Cello：
```bash
lerobot-calibrate     --robot.type=lerobot_robot_cello --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraicello_arm
```

起動後、各関節のエンコーダ値が表示されます。各関節を 1 つずつ手動でキャリブレーションする必要があります。各関節を最大位置と最小位置まで回転させてください。リミットストッパーのない関節では、回転範囲は時計回り 180° または反時計回り 180° を超えてはなりません。すべての関節のキャリブレーションが完了したら、Enter キーを押して設定を保存します。

:::tip
キャリブレーションファイルは、次のパスに保存されます：`~/.cache/huggingface/lerobot/calibration/robots` および `~/.cache/huggingface/lerobot/calibration/teleoperators`。
:::

### デュアルアーム キャリブレーション設定

<details>
<summary> チュートリアル </summary>

#### リーダー ロボットアーム

`left_arm_port` を `/dev/ttyUSB0` に、`right_arm_port` を `/dev/ttyUSB2` に接続するか、`--teleop.left_arm_port` および `--teleop.right_arm_port` パラメータを変更してから、次を実行します：

```bash
lerobot-calibrate     --teleop.type=lerobot_teleoperator_bimanual_leader  --teleop.left_arm_port=/dev/ttyUSB0  --teleop.right_arm_port=/dev/ttyUSB2  --teleop.id=bi_starai_violin_leader
```

起動後、各関節のエンコーダ値が表示されます。各関節を 1 つずつ手動でキャリブレーションする必要があります。各関節を最大位置と最小位置まで回転させてください。リミットストッパーのない関節では、回転範囲は時計回り 180° または反時計回り 180° を超えてはなりません。すべての関節のキャリブレーションが完了したら、Enter キーを押して設定を保存します。

#### フォロワー ロボットアーム

`left_arm_port` を `/dev/ttyUSB1` に、`right_arm_port` を `/dev/ttyUSB3` に接続するか、`--robot.left_arm_port` および `--robot.right_arm_port` パラメータを変更してから、次を実行します：

Vioa：

```bash
lerobot-calibrate     --robot.type=lerobot_robot_bimanual_follower  --robot.arm_name=starai_viola  --robot.left_arm_port=/dev/ttyUSB1  --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_viola_follower
```

Cello：

```bash
lerobot-calibrate     --robot.type=lerobot_robot_bimanual_follower  --robot.arm_name=starai_cello  --robot.left_arm_port=/dev/ttyUSB1  --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_cello_follower
```

起動後、各関節のエンコーダ値が表示されます。各関節を 1 つずつ手動でキャリブレーションする必要があります。各関節を最大位置と最小位置まで回転させてください。リミットストッパーのない関節では、回転範囲は時計回り 180° または反時計回り 180° を超えてはなりません。すべての関節のキャリブレーションが完了したら、Enter キーを押して設定を保存します。

:::tip

シングルアーム構成とデュアルアーム構成の違いは、`--teleop.type` と `--robot.type` パラメータにあります。さらに、デュアルアーム構成では左右のアームに別々の USB ポートが必要で、合計 4 つの USB ポート、すなわち `--teleop.left_arm_port`、`--teleop.right_arm_port`、`--robot.left_arm_port`、`--robot.right_arm_port` が必要です。

デュアルアーム構成を使用する場合は、遠隔操作、データ収集、トレーニング、および評価コマンドに対応するために、ロボットアームファイルタイプ `--teleop.type` と `--robot.type`、ならびに USB ポート `--teleop.left_arm_port`、`--teleop.right_arm_port`、`--robot.left_arm_port`、`--robot.right_arm_port` を手動で変更する必要があります。

:::

</details>

## 遠隔操作（Teleoperate）

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/02lxxF9Cvy8?si=IGJda5nXkYEbm2N6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

アームを図に示す位置に移動し、待機状態にします。

| **Violin リーダーアーム** | **Viola フォロワーアーム** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_rest.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_rest.jpg) |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

これでロボットを遠隔操作する準備が整いました（カメラは表示されません）！次の簡単なスクリプトを実行します：

Violin&Viola：

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm
```

Violin&Cello：

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm
```

<details>
<summary> デュアルアーム </summary>

Violin&Viola：

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader
```

Violin&Cello：

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader
```

</details>

遠隔操作コマンドは自動的に次のパラメータを検出します：

1. 不足しているキャリブレーションを特定し、キャリブレーション手順を開始します。
2. ロボットと遠隔操作デバイスを接続し、遠隔操作を開始します。

プログラム起動後も、Hover Lock Technology は有効のままです。

## カメラを追加

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

- 🚀 ステップ 1: Orbbec SDK の依存環境をインストールする

1. `pyorbbec` リポジトリをクローンします

   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. SDK 用の対応する **.whl ファイル** をダウンロードしてインストールします  
   [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases) にアクセスし、  
   使用している Python バージョンに基づいて選択してインストールします。例えば:

   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. `pyorbbec` ディレクトリ内で依存関係をインストールします

   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

   `numpy` のバージョンを強制的に `1.26.0` にダウングレードします

    ```bash
    pip install numpy==1.26.0
    ```

  赤いエラーメッセージは無視してかまいません。

4. Orbbec SDK を `~/lerobot/src/cameras` ディレクトリにクローンします

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5. utils.py と **init**.py を修正します

- `~/lerobot/src/lerobot/cameras` ディレクトリ内の `utils.py` を見つけ、40 行目に次のコードを追加します:

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- `~/lerobot/src/lerobot/cameras` ディレクトリ内の `__init__.py` を見つけ、18 行目に次のコードを追加します:

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 ステップ 2: 関数呼び出しとサンプル

以下のすべての例で、`starai_viola` を、使用しているロボットアームの実際のモデル（例: `so100` / `so101`）に置き換えてください。

`focus_area` ハイパーパラメータを追加しました。ロボットアームにとって、あまりに遠い距離の深度データは意味がありません（到達したり物体を把持したりできないため）、`focus_area` より小さいまたは大きい深度データは黒で表示されます。デフォルトの `focus_area` は (20, 600) です。  
現在サポートされている解像度は、幅: 640、高さ: 880 のみです。

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```

Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_starai_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/orbbec_result.png" />
</div>

データ収集、学習、評価などの後続タスクについては、通常の RGB コマンドと同じ手順です。通常の RGB コマンド内の該当部分を次の内容に置き換えるだけでかまいません:

  ```
  --robot.cameras="{ front: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:(20,600)}}" \
  ```

その後、単眼 RGB カメラを追加で接続することもできます。

</details>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

2 台の USB カメラを接続した後、次のスクリプトを実行してカメラのポート番号を確認します。重要な点として、カメラは USB ハブに接続してはいけません。必ずデバイスに直接接続してください。USB ハブの低速な転送速度により、画像データを読み取れない可能性があります。

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

ターミナルには次のような情報が出力されます。例えば、ノート PC 内蔵カメラは `index 2`、USB カメラは `index 4` です。

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

各カメラで撮影された画像は `outputs/images_from_opencv_cameras` ディレクトリ内で確認でき、異なる位置のカメラに対応するポートインデックス情報を検証できます。

外部カメラを確認したら、以下のカメラ情報を実際のカメラ情報に置き換えることで、遠隔操作中に PC 上でカメラ映像を表示できるようになります:

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```


:::tip
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV` 形式を試すことも可能です。ただし後者では画像解像度と FPS が低下し、ロボットアームの動作にラグが発生します。現在、`MJPG` 形式では `1920*1080` の解像度で 3 台のカメラを `30FPS` を維持したままサポートできます。とはいえ、2 台のカメラを同じ USB HUB 経由で PC に接続することは依然として推奨されません。
:::


Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```


:::tip
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV` 形式を試すことも可能です。ただし後者では画像解像度と FPS が低下し、ロボットアームの動作にラグが発生します。現在、`MJPG` 形式では `1920*1080` の解像度で 3 台のカメラを `30FPS` を維持したままサポートできます。とはいえ、2 台のカメラを同じ USB HUB 経由で PC に接続することは依然として推奨されません。
:::


<details>
<summary> Dual-Arm </summary>

Violin&Viola:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --display_data=true
```

Violin&Cello:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --display_data=true
```


:::tip
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV` 形式を試すことも可能です。ただし後者では画像解像度と FPS が低下し、ロボットアームの動作にラグが発生します。現在、`MJPG` 形式では `1920*1080` の解像度で 3 台のカメラを `30FPS` を維持したままサポートできます。とはいえ、2 台のカメラを同じ USB HUB 経由で PC に接続することは依然として推奨されません。
:::


</details>

:::tip
このようなバグが発生した場合。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

rerun のバージョンをダウングレードすることで問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::

## データセットを記録する

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

テレオペレーションに慣れたら、最初のデータセットを記録してみましょう。

データセットのアップロードに Hugging Face Hub の機能を使いたい場合で、まだ設定していないときは、書き込み権限付きトークンでログインしていることを確認してください。トークンは [Hugging Face settings](https://huggingface.co/settings/tokens) から生成できます：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

以下のコマンドを実行するために、Hugging Face のリポジトリ名を変数に保存します：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

10 エピソードを記録し、データセットを Hub にアップロードします：

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> Dual-Arm </summary>

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

:::tip
シングルアーム構成とデュアルアーム構成を区別するために、ここでの `--dataset.repo_id` は `starai/record-test_bi_arm` という名前になっています。
:::

</details>

:::tip
Hugging Face Hub のデータセットアップロード機能を使いたくない場合は、`--dataset.push_to_hub=false` を指定できます。また、`--dataset.repo_id=${HF_USER}/starai` を任意のローカルフォルダ名、例えば `--dataset.repo_id=starai/record-test` に置き換えてください。データはシステムのホームディレクトリ配下の `~/.cache/huggingface/lerobot` に保存されます。
:::

Hub にアップロードしない場合：

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
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

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=lerobot_teleoperator_violin \
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
<summary> Dual-Arm </summary>

Violin&Viola:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

Violin&Cello:

```bash
lerobot-record \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --teleop.type=lerobot_teleoperator_bimanual_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_violin_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

:::tip
シングルアーム構成とデュアルアーム構成を区別するために、ここでの `--dataset.repo_id` は `starai/record-test_bi_arm` という名前になっています。
:::

</details>

- `record` は、ロボットの動作中にデータを取得・管理するためのツールセットを提供します：

#### 1. データ保存

- データは `LeRobotDataset` 形式で保存され、記録プロセス中にディスクへ書き込まれます。

#### 2. チェックポイントと再開

- 記録中にチェックポイントが自動的に作成されます。
- 問題が発生した場合は、同じコマンドを `--resume=true` を付けて再実行することで再開できます。記録を再開する際は、`--dataset.num_episodes` には **データセットの合計エピソード数ではなく、追加で記録したいエピソード数** を指定する必要があります！
- 最初から記録をやり直したい場合は、データセットディレクトリを**手動で削除**してください。

#### 3. 記録パラメータ

コマンドラインパラメータを使ってデータ記録のワークフローを設定します：

```markdown
Parameter Description
- warmup-time-s: The initialization time.
- episode-time-s: The duration for each data collection session.
- reset-time-s: The preparation time between each data collection.
- num-episodes: The expected number of data sets to collect.
- push-to-hub: Determines whether to upload the data to HuggingFace Hub.
```

#### 4. 記録中のキーボード操作

キーボードショートカットを使ってデータ記録のワークフローを制御します：

- **右矢印キー (→)** を押す：現在のエピソードを途中で終了するか時間をリセットし、次のエピソードへ進みます。
- **左矢印キー (←)** を押す：現在のエピソードをキャンセルして、再度記録します。
- **ESC** を押す：セッションを即座に停止し、動画をエンコードしてデータセットをアップロードします。

:::tip

キーボードが動作しない場合は、別バージョンの pynput をインストールする必要があるかもしれません。

```bash
pip install pynput==1.6.8
```

:::

## エピソードをリプレイする

それでは、ロボット上で最初のエピソードをリプレイしてみましょう：

Viola:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --dataset.repo_id=starai/record-test \
    --dataset.episode=1 # choose the episode you want to replay
```

チェロ：

```bash
lerobot-replay \
    --robot.type=lerobot_robot_cello \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraicello_arm \
    --dataset.repo_id=starai/record-test \
    --dataset.episode=1 # choose the episode you want to replay
```

<details>
<summary> デュアルアーム </summary>

ビオラ：

```bash
lerobot-replay \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_viola_follower \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode=0 # choose the episode you want to replay
```

チェロ：

```bash
lerobot-replay \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_cello_follower \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode=0 # choose the episode you want to replay
```

</details>

## ポリシーの学習と評価

<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>


[ACT](https://huggingface.co/docs/lerobot/act) を参照してください

**学習**

ビオラ：

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test \
  --policy.type=act \
  --output_dir=outputs/train/act_viola_test \
  --job_name=act_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

チェロ：

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test \
  --policy.type=act \
  --output_dir=outputs/train/act_cello_test \
  --job_name=act_cello_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

<details>
<summary> デュアルアーム </summary>

ビオラ：

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test_bi_arm \
  --policy.type=act \
  --output_dir=outputs/train/act_bi_viola_test \
  --job_name=act_bi_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

チェロ：

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test_bi_arm \
  --policy.type=act \
  --output_dir=outputs/train/act_bi_cello_test \
  --job_name=act_bi_cello_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy \
  --steps=200000
```

</details>

1. `policy.type` は `diffusion,pi0,pi0fast` の入力をサポートします
1. データセットはパラメータとして提供します：`dataset.repo_id=starai/record-test`。
2. [`configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/configuration_act.py) から設定を読み込みます。重要な点として、このポリシーはロボットのモータ状態、モータアクション、カメラの数に自動的に適応し、それらはデータセット内に保存されます。
3. 学習チャートを可視化するために [Weights and Biases](https://docs.wandb.ai/quickstart) を使用する `wandb.enable=true` を提供しています。これは任意ですが、使用する場合は `wandb login` を実行してログインしていることを確認してください。

**評価**


次のコマンドを実行して、10 エピソード分の評価を記録します：

ビオラ：

```bash
lerobot-record  \
  --robot.type=lerobot_robot_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=starai/eval_record-test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_viola_test/checkpoints/last/pretrained_model
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=lerobot_teleoperator_violin \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=my_awesome_leader_arm \
```

チェロ：

```bash
lerobot-record  \
  --robot.type=lerobot_robot_cello \
  --robot.port=/dev/ttyUSB1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_staraicello_arm \
  --display_data=false \
  --dataset.repo_id=starai/eval_record-test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_viola_test/checkpoints/last/pretrained_model
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=lerobot_teleoperator_violin \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=my_awesome_leader_arm \
```

<details>
<summary> デュアルアーム </summary>

ビオラ：

```bash
lerobot-record  \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_viola \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --robot.id=bi_starai_viola_follower \
    --display_data=false \
    --dataset.repo_id=starai/eval_record-test_bi_arm \
    --dataset.single_task="test" \
    --policy.path=outputs/train/act_bi_viola_test/checkpoints/last/pretrained_model
```

チェロ：

```bash
lerobot-record  \
    --robot.type=lerobot_robot_bimanual_follower \
    --robot.arm_name=starai_cello \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --robot.id=bi_starai_cello_follower \
    --display_data=false \
    --dataset.repo_id=starai/eval_record-test_bi_arm \
    --dataset.single_task="test" \
    --policy.path=outputs/train/act_bi_cello_test/checkpoints/last/pretrained_model
```

</details>

ご覧のとおり、これは学習用データセットの記録に以前使用したコマンドとほとんど同じですが、いくつかの変更点があります：

1. `--policy.path` パラメータは、学習済みポリシーの重みファイルへのパスを示します（例：`outputs/train/act_viola_test/checkpoints/last/pretrained_model`）。モデルの重みを Hub にアップロードしている場合は、モデルリポジトリ（例：`${HF_USER}/starai`）を使用することもできます。

2. 評価データセットの名前 `dataset.repo_id` は `eval_` で始まります。この操作により、評価フェーズ専用の動画とデータが記録され、`starai/eval_record-test` のように `eval_` で始まるフォルダに保存されます。

3. 評価フェーズ中に `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/starai/eval_xxxx'` に遭遇した場合は、`eval_` で始まるフォルダを削除してから、プログラムを再実行してください。

4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model` が発生した場合は、`--robot.cameras` パラメータ内の `up` や `front` などのキーワードが、データ収集フェーズで使用したものと厳密に一致していることを確認してください。

</details>



<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) を参照してください 

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

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30, fourcc: "MJPG"}}" \
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
<summary>[Libero](https://huggingface.co/docs/lerobot/libero) </summary>

[Libero](https://huggingface.co/docs/lerobot/libero) を参照してください 

LIBERO は、生涯にわたるロボット学習を研究するために設計されたベンチマークです。ロボットは工場で一度だけ事前学習されるのではなく、時間の経過とともに人間のユーザーと一緒に学習と適応を続ける必要がある、という考えに基づいています。この継続的な適応は、意思決定における生涯学習（lifelong learning in decision making, LLDM）と呼ばれ、真にパーソナライズされたヘルパーロボットを構築するための重要なステップです。

- [LIBERO 論文](https://arxiv.org/abs/2306.03310)
- [オリジナルの LIBERO リポジトリ](https://github.com/Lifelong-Robot-Learning/LIBERO)

LIBERO には 5 つのタスクスイートが含まれます：

- LIBERO-Spatial (libero_spatial) – 空間的な関係についての推論を必要とするタスク。

- LIBERO-Object (libero_object) – さまざまなオブジェクトの操作に焦点を当てたタスク。

- LIBERO-Goal (libero_goal) – ロボットが変化するターゲットに適応しなければならない、ゴール条件付きタスク。

- LIBERO-90 (libero_90) – LIBERO-100 コレクションからの短いホライズンの 90 タスク。

- LIBERO-Long (libero_10) – LIBERO-100 コレクションからの長いホライズンの 10 タスク。

これらのスイートを合わせると、単純な物体操作から複雑なマルチステップシナリオまで、130個のタスクを網羅しています。LIBERO は時間とともに成長し、コミュニティが終身学習アルゴリズムをテストし改良するための共有ベンチマークとして機能することを目的としています。

**学習（Train）**

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

**評価（Evaluating）**

LIBERO をインストールするには、LeRobot の公式手順に従った後、次を実行します：`pip install -e ".[libero]"`

**単一スイート評価**

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task` はスイート（libero_object, libero_spatial など）を選択します。

- `--eval.batch_size` は並列で実行する環境数を制御します。

- `--eval.n_episodes` は合計で実行するエピソード数を設定します。

**マルチスイート評価**

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- マルチスイート評価を行うには、カンマ区切りのリストを `--env.task` に渡します。

</details>



<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

[Pi0](https://huggingface.co/docs/lerobot/pi0) を参照してください 

```bash
pip install -e ".[pi]"
```

**学習（Train）**
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

**評価（Evalute）**

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```


</details>


<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

[Pi0.5](https://huggingface.co/docs/lerobot/pi05) を参照してください 

```bash
pip install -e ".[pi]"
```

**学習（Train）**
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

**評価（Evaluate）**

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```


</details>


<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) を参照してください 


</details>




特定のチェックポイントからトレーニングを再開します。

Viola：

```bash
lerobot-train \
  --config_path=outputs/train/act_viola_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true \
  --steps=400000
```

Cello：

```bash
lerobot-train \
  --config_path=outputs/train/act_cello_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true \
  --steps=400000
```



## FAQ

- 本ドキュメントのチュートリアルを使用する場合は、推奨される GitHub リポジトリを `git clone` してください：`https://github.com/servodevelop/lerobot.git`。

- テレオペレーションは正常に動作するが、Camera を用いたテレオペレーションで画像インターフェースが表示されない場合は、[こちら](https://github.com/huggingface/lerobot/pull/757/files) を参照してください。

- データセットのテレオペレーション中に libtiff の問題が発生した場合は、libtiff のバージョンを更新してください。

  ```bash
  conda install libtiff==4.5.0  # for Ubuntu 22.04, use libtiff==4.5.1
  ```

- LeRobot をインストールした後、自動的に GPU 版 PyTorch がアンインストールされる場合があるため、手動で torch-gpu をインストールする必要があります。

- Jetson の場合は、`conda install -y -c conda-forge ffmpeg` を実行する前に、まず [PyTorch と Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) をインストールしてください。そうしないと、torchvision のコンパイル時にバージョン不整合の問題が発生します。

- 3060 8GB 搭載ノート PC で 50 エピソード分の ACT データを学習するには約 6 時間かかり、4090 または A100 搭載マシンで 50 エピソードを学習する場合は約 2〜3 時間かかります。

- データ収集時には、カメラの位置と角度、および環境光の安定性を確保し、カメラに映り込む不安定な背景や歩行者を最小限に抑えてください。そうしないと、デプロイ環境が大きく変化した際に、ロボットアームが物体を正常に把持できなくなる可能性があります。

- データ収集コマンド内の `num-episodes` は十分なデータ収集を保証する値に設定し、途中で手動停止しないでください。これは、データ収集完了後にのみデータの平均値と分散が計算され、それが学習に必要となるためです。

- プログラムが USB カメラの画像データを読み取れないと表示する場合は、USB カメラが Hub 経由で接続されていないことを確認してください。USB カメラはデバイスに直接接続し、高速な画像伝送レートを確保する必要があります。

## 引用

StarAI Robot Arm ROS2 Moveit2: [star-arm-moveit2](https://wiki.seeedstudio.com/ja/starai_arm_ros_moveit/)

lerobot-starai GitHub: [lerobot-starai](https://github.com/servodevelop/lerobot.git)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

Huggingface プロジェクト: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT または ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
