---
description: このWikiでは、LeRobotフレームワークとACTモデルを用いて、J501 MiniとStarAI Violaロボットアームで果物の仕分けタスクを行う方法を説明します。
title: J501 Mini と StarAI Viola アームによる果物仕分け
keywords:
  - J501 mini
  - Robotics
  - StarAI
  - Viola
  - LeRobot
  - ACT
  - Fruit Sorting
image: https://files.seeedstudio.com/wiki/other/j501mini-startai-front.png
slug: /j501_mini_starai_viola_fruit_sorting
sku: 100020039,114090080
last_update:
  date: 2026-2-2
  author: Dayu
createdAt: '2026-02-02'
updatedAt: '2026-02-10'
url: https://wiki.seeedstudio.com/ja/j501_mini_starai_viola_fruit_sorting/
---

# 🍎 J501 Mini と StarAI Viola アームによる果物仕分け

## 🚀 はじめに

このWikiでは、**J501 Mini (Jetson AGX Orin)** と **StarAI Viola ロボットアーム** を使用し、**LeRobot フレームワーク** を用いて果物の仕分けタスクを実行する方法を説明します。本プロジェクトでは、データ収集からデプロイまでのエンドツーエンドのワークフローを紹介し、ロボットが果物をインテリジェントに把持して整理できるようにします。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/j501mini-startai-front.png"/>
</div>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">J501 Mini</th>
      <th class="table-trnobg">StarAI Viola</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J501-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5976.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ 今すぐ入手</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ 今すぐ入手</font></span></strong></a></div></td>
    </tr>
  </table>
</div>

<p></p>

**このチュートリアルで学べること：**

- 🔧 **J501 Mini** と **StarAI Viola アーム** のハードウェアセットアップ
- 💻 **Jetson AGX Orin** 上での **LeRobot** ソフトウェア環境構築
- 🎯 果物仕分けタスクのためのデータ収集とテレオペレーション
- 🤖 ACT ポリシーモデルの学習
- 🚀 学習済みモデルを用いた自律的な果物仕分けのデプロイ

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/catch-fruit.png"/>
</div>

<p></p>

**📚 このチュートリアルでは、ゼロからインテリジェントな果物仕分けシステムを構築するための手順をステップバイステップで解説します。**

:::warning
このWikiは JetPack 6.2.1 をベースとしており、Jetson AGX Orin モジュールを使用します。
:::

## 🛠️ ハードウェア要件

### 必要なコンポーネント

- Jetson AGX Orin モジュールを搭載した **J501 Mini**
- **StarAI Viola** フォロワーアーム（6+1 自由度）
- テレオペレーション用 **StarAI Violin** リーダーアーム（6+1 自由度）
- **USB カメラ 2台**（640x480 @ 30fps 推奨）
  - 手首マウントカメラ
  - 第三者視点カメラ
- **UC-01 デバッグボード**（x2、アームに同梱）
- ロボットアーム用 **12V 電源**
- アーム通信のための **USB ケーブル**
- デモ用の **果物**（仕分け用）

### ハードウェア仕様

| コンポーネント | 仕様 |
|-----------|--------------|
| **J501 Mini** | Jetson AGX Orin, JetPack 6.2.1 |
| **Viola フォロワー** | 6+1 自由度、リーチ 470mm、可搬重量 300g |
| **Violin リーダー** | 6+1 自由度、リーチ 470mm、テレオペレーション用 |
| **カメラ** | USB、640x480 @ 30fps、MJPG フォーマット |
| **電源** | 各アームにつき 12V 10A |

## 💻 ソフトウェア環境のセットアップ

### 前提条件

- Ubuntu 22.04（JetPack 6.2.1 を搭載した J501 Mini 上）
- Python 3.12
- CUDA 12 以上
- PyTorch 2.6 以上（GPU 版）

### Miniconda のインストール

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

### LeRobot 環境の作成

```bash
# Create conda environment
conda create -y -n lerobot python=3.12 && conda activate lerobot

# Clone LeRobot repository
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot

# Install ffmpeg
conda install ffmpeg -c conda-forge
```

### Jetson 向け PyTorch と Torchvision のインストール

Jetson デバイスでは、LeRobot をインストールする前に GPU 版の PyTorch と Torchvision をインストールする必要があります。[この Jetson 向け PyTorch インストールチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) に従って、PyTorch-gpu と Torchvision をインストールしてください。

### LeRobot と依存パッケージのインストール

PyTorch-gpu と Torchvision をインストールしたら、LeRobot をインストールします：

```bash
cd ~/lerobot && pip install -e .
```

Jetson JetPack 6.0 以上のデバイスでは、追加の依存パッケージをインストールします：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

### StarAI モーター依存パッケージのインストール

```bash
pip install lerobot_teleoperator_bimanual_leader
pip install lerobot_robot_bimanual_follower
```

### PyTorch と Torchvision の確認

pip による LeRobot 環境のインストールでは、元の PyTorch と Torchvision がアンインストールされ、CPU 版がインストールされるため、Python で確認を行う必要があります：

```python
import torch
print(torch.cuda.is_available())  # Should print True
```

出力結果が `False` の場合は、[この Jetson チュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) に従って、PyTorch と Torchvision を再インストールする必要があります。

```bash
# Remove brltty if it causes USB port conflicts
sudo apt remove brltty
```

## 🔧 ハードウェアのセットアップとキャリブレーション

### USB ポートの設定

ロボットアームを接続し、USB ポートを特定します：

```bash
cd ~/lerobot
lerobot-find-port
```

次のような出力が表示されるはずです：
- リーダーアーム: `/dev/ttyUSB0`
- フォロワーアーム: `/dev/ttyUSB1`

USB ポートへのアクセス権を付与します：

```bash
sudo chmod 666 /dev/ttyUSB*
```

### アームの初期姿勢

キャリブレーションの前に、両方のアームを初期姿勢に移動させます：

| **Violin リーダーアーム** | **Viola フォロワーアーム** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_init.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_init.png) |

### リーダーアームのキャリブレーション

```bash
lerobot-calibrate \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader
```

各関節を手動で最大位置と最小位置まで動かします。すべての関節のキャリブレーションが完了したら、Enter キーを押して保存します。

### フォロワーアームのキャリブレーション

```bash
lerobot-calibrate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower
```

:::tip
キャリブレーションファイルは `~/.cache/huggingface/lerobot/calibration/` に保存されます
:::

### カメラのセットアップ

カメラポートを確認します：

```bash
lerobot-find-cameras opencv
```

出力例：
```
Camera #0: /dev/video2 (wrist camera)
Camera #1: /dev/video4 (front camera)
```

カメラの設置：
- **手首カメラ**: 近接ビューのためにグリッパーに取り付けます
- **前方カメラ**: 第三者視点用にデスクトップ上に設置します

## 🎮 テレオペレーションテスト

データ収集の前に、テレオペレーションでセットアップをテストします：

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader \
    --display_data=true
```

:::warning
ACT モデルの学習では、カメラ名は `wrist` と `front` でなければなりません。異なる名前を使用する場合は、ソースコードの修正が必要になります。
:::

## 📊 果物仕分けのためのデータ収集

### Hugging Face へのログイン（任意）

データセットを Hugging Face Hub にアップロードしたい場合：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

### 学習用データセットの記録

果物仕分けデモを 50 エピソード収集します：

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=50 \
    --dataset.push_to_hub=true \
    --dataset.single_task="Sort fruits into containers"
```

### 記録パラメータ

| パラメータ | 説明 |
|-----------|-------------|
| `--dataset.episode_time_s` | 各エピソードの長さ（30 秒） |
| `--dataset.reset_time_s` | エピソード間のリセット時間（30 秒） |
| `--dataset.num_episodes` | 記録するエピソード数（50） |
| `--dataset.push_to_hub` | Hugging Face Hub へアップロードするかどうか（true/false） |
| `--dataset.single_task` | タスクの説明 |

### 記録中のキーボード操作

- **右矢印キー (→)**: 次のエピソードへスキップ
- **左矢印キー (←)**: 現在のエピソードを再記録
- **ESC**: 記録を停止してデータセットを保存

:::tip
キーボード操作が機能しない場合は、次を試してください：`pip install pynput==1.6.8`
:::

### エピソードをリプレイする

記録したデータをエピソードのリプレイでテストします：

```bash
lerobot-replay \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --dataset.episode=0
```

## 🎓 ACT ポリシーの学習

### 学習設定

収集したデータセットで ACT モデルを学習します：

```bash
lerobot-train \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --policy.type=act \
    --output_dir=outputs/train/fruit_sorting_act \
    --job_name=fruit_sorting_act \
    --policy.device=cuda \
    --wandb.enable=false \
    --policy.repo_id=${HF_USER}/fruit_sorting_policy \
    --steps=100000 \
    --batch_size=8 \
    --eval.batch_size=8 \
    --eval.n_episodes=10 \
    --eval_freq=5000
```

### 学習パラメータ

| パラメータ | 説明 |
|-----------|-------------|
| `--policy.type` | モデルタイプ（act） |
| `--steps` | 学習ステップ総数（100,000） |
| `--batch_size` | 学習バッチサイズ（8） |
| `--eval_freq` | 評価頻度（5,000 ステップごと） |
| `--wandb.enable` | Weights & Biases ログを有効化 |

### 学習時間

J501 Mini（AGX Orin）の場合：
- 50 エピソード： 約 8〜10 時間
- 100 エピソード： 約 16〜20 時間

:::tip
Weights & Biases で学習の進行状況をモニタリングするには、`--wandb.enable=true` を有効にします。その前に `wandb login` を実行しておいてください。
:::

### 学習の再開

学習が中断された場合は、最後のチェックポイントから再開できます：

```bash
lerobot-train \
    --config_path=outputs/train/fruit_sorting_act/checkpoints/last/pretrained_model/train_config.json \
    --resume=true \
    --steps=200000
```

## 🚀 デプロイと評価

### 学習済みモデルの評価

評価エピソードを実行して、学習済みポリシーをテストします：

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --display_data=false \
    --dataset.repo_id=${HF_USER}/eval_fruit_sorting \
    --dataset.single_task="Sort fruits into containers" \
    --dataset.num_episodes=10 \
    --policy.path=outputs/train/fruit_sorting_act/checkpoints/last/pretrained_model
```

### 自律動作

一度学習が完了すると、ロボットは自律的に果物を仕分けできるようになります。以下の動画は、J501 Mini 上で学習した ACT ポリシーと StarAI Viola アームを用いた、果物仕分けワークフロー全体を示しています：

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Tk6jazbZZy0" title="Fruit Sorting Demo with J501 Mini and StarAI Viola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**デモの見どころ：**
- ロボットが自律的にさまざまな果物を認識して把持
- テレオペレーションのデモから学習した、スムーズで正確な動き
- 果物を指定されたコンテナに正しく仕分け
- J501 Mini 上で学習した ACT ポリシーの有効性を実証

自律的な果物仕分けを実行するには：

1. 作業領域に果物を配置します
2. 上記の評価コマンドを実行します
3. ロボットが学習した動作を実行し、果物を把持して仕分けます

## 🎯 性能向上のためのヒント

### データ収集のベストプラクティス

1. **環境を一貫させる**
   - 照明条件を安定させる
   - 背景の変化を最小限にする
   - 果物の配置を一定にする

2. **量より質**
   - スムーズで意図的なデモを収集する
   - ガクガクした動きを避ける
   - 学習データ内の把持が成功していることを確認する

3. **カメラの配置**
   - カメラ角度を一定に保つ
   - 果物とグリッパがよく見えるようにする
   - 記録中はカメラを動かさない

### 学習の最適化

1. **データセットサイズ**
   - まずは 50 エピソードから始める
   - 性能が不十分な場合はデータを追加する
   - 単純なタスクであれば通常 100〜200 エピソードで十分

2. **ハイパーパラメータの調整**
   - GPU メモリに応じてバッチサイズを調整する
   - 収束を良くするために学習ステップ数を増やす
   - 評価指標をモニタリングする

3. **環境の一貫性**
   - 学習時と似た条件でデプロイする
   - 一貫した照明を維持する
   - 類似した果物の種類とコンテナを使用する

## 🔧 トラブルシューティング

### よくある問題

**USB ポートが認識されない**
```bash
# Remove brltty
sudo apt remove brltty

# Check USB devices
lsusb
sudo dmesg | grep ttyUSB

# Grant permissions
sudo chmod 777 /dev/ttyUSB*
```

**カメラが動作しない**
- カメラを USB ハブ経由で接続しない
- 直接 USB 接続を使用する
- `lerobot-find-cameras opencv` でカメラインデックスを確認する

**学習時にメモリ不足になる**
- バッチサイズを減らす：`--batch_size=4`
- 画像解像度を下げる
- 他のアプリケーションを閉じる

**推論性能が低い**
- さらに学習データを収集する
- 環境を一貫させる
- カメラの配置を確認する
- キャリブレーション精度を確認する

## 📚 参考情報

- 🔗 [LeRobot Documentation](https://github.com/huggingface/lerobot)
- 🔗 [StarAI Arm Wiki](https://wiki.seeedstudio.com/ja/lerobot_starai_arm/)
- 🔗 [J501 Mini Documentation](https://wiki.seeedstudio.com/ja/recomputer_j501_mini_getting_started/)
- 🔗 [ACT Paper](https://tonyzhaozh.github.io/aloha/)
- 🔗 [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

## 🤝 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
