---
description: このwikiでは、LeRobotフレームワークとACTモデルを使用して、J501 MiniとStarAI Violaロボットアームでフルーツ仕分けタスクを実行する方法を説明します。
title: J501 MiniとStarAI Violaアームによるフルーツ仕分け
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
createdAt: '2026-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/j501_mini_starai_viola_fruit_sorting/
---

# 🍎 J501 MiniとStarAI Violaアームによるフルーツ仕分け

## 🚀 はじめに

このwikiでは、**J501 Mini（Jetson AGX Orin）**と**StarAI Violaロボットアーム**を使用して、**LeRobotフレームワーク**でフルーツ仕分けタスクを実行する方法を説明します。このプロジェクトでは、データ収集から展開までのエンドツーエンドワークフローを紹介し、ロボットが知的にフルーツを掴んで整理できるようにします。

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

**学習内容：**

- 🔧 **J501 Mini**と**StarAI Violaアーム**のハードウェアセットアップ
- 💻 **Jetson AGX Orin**での**LeRobot**ソフトウェア環境設定
- 🎯 フルーツ仕分けタスクのデータ収集とテレオペレーション
- 🤖 ACTポリシーモデルの訓練
- 🚀 自律フルーツ仕分けのための訓練済みモデルの展開

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/catch-fruit.png"/>
</div>

<p></p>

**📚 このチュートリアルでは、知的フルーツ仕分けシステムをゼロから構築するためのステップバイステップの手順を提供します。**

:::warning
このwikiはJetPack 6.2.1に基づいており、Jetson AGX Orinモジュールを使用しています。
:::

## 🛠️ ハードウェア要件

### 必要なコンポーネント

- **J501 Mini**（Jetson AGX Orinモジュール付き）
- **StarAI Viola**フォロワーアーム（6+1自由度）
- **StarAI Violin**リーダーアーム（6+1自由度、テレオペレーション用）
- **USBカメラ2台**（640x480 @ 30fps推奨）
  - 手首取り付けカメラ1台
  - 三人称視点カメラ1台
- **UC-01デバッグボード**（2台、アームに付属）
- **12V電源**（ロボットアーム用）
- **USBケーブル**（アーム通信用）
- **フルーツ**（仕分けデモンストレーション用）

### ハードウェア仕様

| コンポーネント | 仕様 |
|-----------|--------------|
| **J501 Mini** | Jetson AGX Orin、JetPack 6.2.1 |
| **Violaフォロワー** | 6+1自由度、470mmリーチ、300gペイロード |
| **Violinリーダー** | 6+1自由度、470mmリーチ、テレオペレーション |
| **カメラ** | USB、640x480 @ 30fps、MJPG形式 |
| **電源** | 各アーム12V 10A |

## 💻 ソフトウェア環境セットアップ

### 前提条件

- Ubuntu 22.04（JetPack 6.2.1搭載のJ501 Mini）
- Python 3.10
- CUDA 12+
- PyTorch 2.6+（GPU版）

### Minicondaのインストール

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

### LeRobot環境の作成

```bash
# Create conda environment
conda create -y -n lerobot python=3.10 && conda activate lerobot

# Clone LeRobot repository
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot

# Install ffmpeg
conda install ffmpeg -c conda-forge
```

### Jetson用PyTorchとTorchvisionのインストール

Jetsonデバイスでは、LeRobotをインストールする前にGPU版のPyTorchとTorchvisionをインストールする必要があります。PyTorch-gpuとTorchvisionをインストールするには、[このJetson PyTorchインストールチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch)に従ってください。

### LeRobotと依存関係のインストール

PyTorch-gpuとTorchvisionをインストールした後、LeRobotをインストールします：

```bash
cd ~/lerobot && pip install -e .
```

Jetson JetPack 6.0+デバイスの場合、追加の依存関係をインストールします：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

### StarAIモーター依存関係のインストール

```bash
pip install lerobot_teleoperator_bimanual_leader
pip install lerobot_robot_bimanual_follower
```

### PyTorchとTorchvisionの確認

pipを介してLeRobot環境をインストールすると、元のPyTorchとTorchvisionがアンインストールされ、CPU版がインストールされるため、Pythonで確認を行う必要があります：

```python
import torch
print(torch.cuda.is_available())  # Should print True
```

印刷結果が`False`の場合、[このJetsonチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)に従ってPyTorchとTorchvisionを再インストールする必要があります。

```bash
# Remove brltty if it causes USB port conflicts
sudo apt remove brltty
```

## 🔧 ハードウェアセットアップとキャリブレーション

### USBポートの設定

ロボットアームを接続し、USBポートを特定します：

```bash
cd ~/lerobot
lerobot-find-port
```

次のような出力が表示されます：
- リーダーアーム：`/dev/ttyUSB0`
- フォロワーアーム：`/dev/ttyUSB1`

USBポートアクセスを許可します：

```bash
sudo chmod 666 /dev/ttyUSB*
```

### 初期アーム位置

キャリブレーション前に、両方のアームを初期位置に移動します：

| **Violinリーダーアーム** | **Violaフォロワーアーム** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_init.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_init.png) |

### リーダーアームのキャリブレーション

```bash
lerobot-calibrate \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader
```

各関節を手動で最大位置と最小位置に移動します。すべての関節をキャリブレーションした後、Enterキーを押して保存します。

### フォロワーアームのキャリブレーション

```bash
lerobot-calibrate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower
```

:::tip
キャリブレーションファイルは`~/.cache/huggingface/lerobot/calibration/`に保存されます
:::

### カメラのセットアップ

カメラポートを見つけます：

```bash
lerobot-find-cameras opencv
```

出力例：
```
Camera #0: /dev/video2 (wrist camera)
Camera #1: /dev/video4 (front camera)
```

カメラを取り付けます：
- **手首カメラ**：クローズアップビュー用にグリッパーに取り付け
- **フロントカメラ**：三人称視点用にデスクトップに配置

## 🎮 テレオペレーションテスト

データ収集前にテレオペレーションでセットアップをテストします：

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
ACTモデル訓練では、カメラ名は`wrist`と`front`である必要があります。異なる名前を使用する場合は、ソースコードの修正が必要です。
:::

## 📊 フルーツ仕分けのデータ収集

### Hugging Faceへのログイン（オプション）

データセットをHugging Face Hubにアップロードしたい場合：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

### 訓練データセットの記録

フルーツ仕分けデモンストレーションの50エピソードを収集します：

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
| `--dataset.episode_time_s` | 各エピソードの持続時間（30秒） |
| `--dataset.reset_time_s` | エピソード間のリセット時間（30秒） |
| `--dataset.num_episodes` | 記録するエピソード数（50） |
| `--dataset.push_to_hub` | Hugging Face Hubにアップロード（true/false） |
| `--dataset.single_task` | タスクの説明 |

### 記録中のキーボード操作

- **右矢印（→）**：次のエピソードにスキップ
- **左矢印（←）**：現在のエピソードを再記録
- **ESC**：記録を停止してデータセットを保存

:::tip
キーボード制御が動作しない場合は、`pip install pynput==1.6.8` を試してください
:::

### エピソードの再生

エピソードを再生して記録されたデータをテストします：

```bash
lerobot-replay \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --dataset.episode=0
```

## 🎓 ACT ポリシーの訓練

### 訓練設定

収集したデータセットでACTモデルを訓練します：

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

### 訓練パラメータ

| パラメータ | 説明 |
|-----------|-------------|
| `--policy.type` | モデルタイプ (act) |
| `--steps` | 総訓練ステップ数 (100,000) |
| `--batch_size` | 訓練バッチサイズ (8) |
| `--eval_freq` | 評価頻度 (5000ステップごと) |
| `--wandb.enable` | Weights & Biases ログ記録を有効化 |

### 訓練時間

J501 Mini (AGX Orin) での場合：
- 50エピソード：約8-10時間
- 100エピソード：約16-20時間

:::tip
`--wandb.enable=true` を有効にして、Weights & Biases で訓練の進捗を監視できます。まず `wandb login` を実行してください。
:::

### 訓練の再開

訓練が中断された場合、最後のチェックポイントから再開します：

```bash
lerobot-train \
    --config_path=outputs/train/fruit_sorting_act/checkpoints/last/pretrained_model/train_config.json \
    --resume=true \
    --steps=200000
```

## 🚀 デプロイメントと評価

### 訓練済みモデルの評価

評価エピソードを実行して訓練済みポリシーをテストします：

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

訓練が完了すると、ロボットは自律的にフルーツを仕分けできます。以下の動画は、J501 Mini と StarAI Viola アームを使用して訓練済みACTポリシーによる完全なフルーツ仕分けワークフローを実演しています：

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Tk6jazbZZy0" title="Fruit Sorting Demo with J501 Mini and StarAI Viola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**デモのハイライト：**
- ロボットが自律的に異なるフルーツを識別し把持
- テレオペレーションデモンストレーションから学習したスムーズで正確な動き
- 指定されたコンテナへのフルーツ仕分けに成功
- J501 Mini で訓練されたACTポリシーの有効性を実証

自律フルーツ仕分けを実行するには：

1. ワークスペースにフルーツを配置
2. 上記の評価コマンドを実行
3. ロボットが学習した行動を実行してフルーツを把持・仕分け

## 🎯 性能向上のためのヒント

### データ収集のベストプラクティス

1. **一貫した環境**
   - 照明条件を安定に保つ
   - 背景の変化を最小限に抑える
   - 一貫したフルーツ配置を使用

2. **量より質**
   - スムーズで意図的なデモンストレーションを収集
   - ぎくしゃくした動きを避ける
   - 訓練データで成功した把持を確保

3. **カメラ位置**
   - カメラアングルを一貫して保つ
   - フルーツとグリッパーの良好な視認性を確保
   - 記録中のカメラ移動を避ける

### 訓練の最適化

1. **データセットサイズ**
   - 50エピソードから開始
   - 性能が不十分な場合はデータを追加
   - 単純なタスクには通常100-200エピソードで十分

2. **ハイパーパラメータ調整**
   - GPUメモリに基づいてバッチサイズを調整
   - より良い収束のために訓練ステップを増加
   - 評価メトリクスを監視

3. **環境の一貫性**
   - 訓練と同様の条件でデプロイ
   - 一貫した照明を維持
   - 同様のフルーツタイプとコンテナを使用

## 🔧 トラブルシューティング

### よくある問題

**USBポートが検出されない**
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
- USBハブ経由でカメラを接続しない
- 直接USB接続を使用
- `lerobot-find-cameras opencv` でカメラインデックスを確認

**訓練でメモリ不足**
- バッチサイズを削減：`--batch_size=4`
- 画像解像度を削減
- 他のアプリケーションを閉じる

**推論性能が悪い**
- より多くの訓練データを収集
- 一貫した環境を確保
- カメラ位置を確認
- キャリブレーション精度を検証

## 📚 参考資料

- 🔗 [LeRobot ドキュメント](https://github.com/huggingface/lerobot)
- 🔗 [StarAI Arm Wiki](https://wiki.seeedstudio.com/ja/lerobot_starai_arm/)
- 🔗 [J501 Mini ドキュメント](https://wiki.seeedstudio.com/ja/recomputer_j501_mini_getting_started/)
- 🔗 [ACT 論文](https://tonyzhaozh.github.io/aloha/)
- 🔗 [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

## 🤝 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
