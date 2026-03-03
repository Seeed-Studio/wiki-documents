---
description: このチュートリアルでは、LeIsaacを使用してIsaac LabでSOArm101ロボットアームを遠隔操作し、訓練する方法を説明します。データ収集、NVIDIA Isaac GR00Tによるモデルファインチューニング、デプロイメントを含みます。
title: Lightwheel LeIsaac
keywords:
- NVIDIA
- Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/simulate_soarm101_by_leisaac.webp
slug: /ja/simulate_soarm101_by_leisaac
last_update:
  date: 8/1/2025
  author: Youjiang
---

# Lightwheel LeIsaacを始める — Hugging Face LeRobot x GR00T N1.5 x Isaac Simを組み合わせたオープンソースワークフロー

## はじめに

このwikiでは、leisaacのドキュメントに従って、leisaacによってIsaacLabでSoArm101ロボットアームを遠隔操作する方法を示します。さらに、Isaac Labから収集したデータを使用して、Isaac Labシミュレーション環境内でファインチューニングされたNvidia Isaac GR00T N1.5モデルのデプロイメントを実演します。このwikiで使用される主要なプロジェクト：

- [LeIsaac](https://github.com/LightwheelAI/leisaac)は、SO101Leader（LeRobot）を使用してIsaacLabで遠隔操作機能を提供し、データ収集、データ変換、その後のポリシー訓練を含みます。
- [NVIDIA Isaac™ Lab](https://developer.nvidia.com/isaac/lab)は、ロボットポリシーの訓練を支援するために設計されたロボット学習用のオープンソース統合フレームワークです。
- [SO-ARM101](https://github.com/TheRobotStudio/SO-ARM100)は、低コストでオープンソースの3Dプリント可能なロボットアームキットです。オープンソースのLeRobotライブラリとシームレスに動作するよう設計されています。
- [NVIDIA Isaac GR00T N1.5](https://github.com/NVIDIA/Isaac-GR00T)は、汎用ヒューマノイドロボットの推論とスキルのためのオープン基盤モデルです。

## 要件

- Ubuntu PC
- SoArm101 Leader Arm

:::info
このwikiで使用されるコンピューターは、NVIDIA RTX 3080 GPUを搭載し、Ubuntu 22.04 LTSで動作しています。
:::

## シミュレーション環境のセットアップ

ターミナルで以下のコマンドを使用してIsaac Labランタイム環境をインストールします：

```bash
# Create and activate environment
conda create -n leisaac python=3.10
conda activate leisaac

# Install cuda-toolkit
conda install -c "nvidia/label/cuda-11.8.0" cuda-toolkit

# Install PyTorch
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu118

# Install IsaacSim
pip install --upgrade pip
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com

# Install IsaacLab
git clone https://github.com/isaac-sim/IsaacLab.git
sudo apt install cmake build-essential

cd IsaacLab
# fix isaaclab version for isaacsim4.5
git checkout v2.1.0
./isaaclab.sh --install
```

:::note
お使いのコンピューターにcondaがインストールされていない場合は、インストールについて[このガイド](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html)を参照してください。
:::

:::info
50シリーズGPUを使用している場合は、isaacsim5.0とfeature/isaacsim_5_0ブランチのisaaclabを使用することをお勧めします。
:::

## LeIsaacのインストール

LeIsaacリポジトリをクローンし、依存関係としてインストールします。

```bash
cd ..
git clone https://github.com/LightwheelAI/leisaac.git
cd leisaac
pip install -e source/leisaac
pip install pynput pyserial deepdiff feetech-servo-sdk
```

:::note
`leisaac` conda仮想環境内でのインストールを確実に行ってください。
:::

## アセットの準備

LeIsaacは例のUSDアセット—キッチンシーンを提供します。関連するシーンを[ここ](https://github.com/LightwheelAI/leisaac/releases/tag/v0.1.0)からダウンロードし、assetsディレクトリに展開できます。ディレクトリ構造は次のようになります：

```txt
<assets>
├── robots/
│   └── so101_follower.usd
└── scenes/
    └── kitchen_with_orange/
        ├── scene.usd
        ├── assets
        └── objects/
            ├── Orange001
            ├── Orange002
            ├── Orange003
            └── Plate
```

## データセットの収集

SO-ARM101リーダーをUSBケーブルでUbuntuコンピューターに接続し、コマンドを使用してシリアルポートの権限を付与します。

```bash
ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM0
```

すべてが正常に動作する場合、類似のログ出力が表示されます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/connect_arm.png" />
</div>

以下のスクリプトで遠隔操作タスクを実行してデータセットを収集します：

```bash
python scripts/environments/teleoperation/teleop_se3_agent.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --teleop_device=so101leader \
    --port=/dev/ttyACM0 \
    --num_envs=1 \
    --device=cpu \
    --enable_cameras \
    --record \
    --dataset_file=./datasets/dataset.hdf5
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XY3LEXGP8hI" title="Simulate SoArm101 by LeIsaac (1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

IsaacLabウィンドウに入った後、キーボードの`b`キーを押して遠隔操作を開始します。その後、指定されたteleop_deviceを使用してシミュレーション内のロボットを制御できます。操作完了後に環境をリセットする必要がある場合は、`r`または`n`キーを押すだけです。`r`は環境をリセットしてタスクを失敗としてマークし、`n`は環境をリセットしてタスクを成功としてマークします。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XkgBY4aa8AE" title="Teleoperate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットの再生

遠隔操作後、以下のスクリプトを使用してシミュレーション環境で収集したデータセットを再生できます：

```bash
python scripts/environments/teleoperation/replay.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --num_envs=1 \
    --device=cpu \
    --enable_cameras \
    --dataset_file=./datasets/dataset.hdf5 \
    --episode_index=0
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/C6KHxKRsWx0" title="Simulate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データ変換

収集された遠隔操作データは、指定されたディレクトリにHDF5形式で保存されます。このデータを使用してプロキシモデルを訓練する場合、LeIsaacの変換スクリプトを使用してデータセットをLeRobot互換形式に変換する必要があります。

このスクリプトはLeRobot仮想環境内で実行する必要があります。この[wiki](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot)の手順に従って新しいLeRobot環境を作成してください。

```bash
cd ..
git clone https://github.com/huggingface/lerobot.git
cd lerobot
conda create -y -n lerobot python=3.10
conda activate lerobot
pip install -e .
```

次に、スクリプト内のパラメータを変更し、以下のコマンドを実行できます：

```bash
cd ../leisaac
python scripts/convert/isaaclab2lerobot.py
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/data_conversion.png" />
</div>

:::note
データ収集中にデータセット保存パスを変更した場合は、実行前に変換スクリプト内の対応するパスを更新する必要があります。
:::

プログラムの実行完了後、変換されたデータセットは`~/.cache/huggingface/lerobot/`で見つけることができます。

LeRobotの組み込みデータセット可視化ツールキットを使用して、変換されたデータを検査することもできます。

```bash
cd ../lerobot
python -m lerobot.scripts.visualize_dataset --repo-id EverNorif/so101_test_orange_pick  --episode-index 0
```

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/LPSxPMoP-pk" title="Simulate SoArm101 by LeIsaac (2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ポリシー訓練

このwikiでは、NVIDIA Isaac GR00T N1.5をファインチューニングします。まず、Isaac-GR00T仮想環境をセットアップしましょう：

```bash
cd ..
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4
```

:::info
flash-attnのインストールにはパッケージのコンパイルが含まれ、非常に時間がかかる場合があります。システム環境に合致するプリコンパイル済みパッケージバージョンを[ダウンロード](https://github.com/Dao-AILab/flash-attention/releases/tag/v2.7.1.post4)し、コマンド：pip install ./package_nameを使用してローカルにインストールすることをお勧めします。
:::

ターミナルで以下のコマンドを実行して訓練を開始します：

```bash
cd <path-to-Isaac-GR00T>
cp ./getting_started/examples/so100_dualcam__modality.json ~/.cache/huggingface/lerobot/EverNorif/so101_test_orange_pick/meta/modality.json
python scripts/gr00t_finetune.py \
   --dataset-path ~/.cache/huggingface/lerobot/EverNorif/so101_test_orange_pick \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av \
   --batch_size 2
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/train.png" />
</div>

## ポリシー推論

この段階で、ファインチューニングされたNVIDIA Isaac GR00T N1.5モデルをデプロイして、Isaac LabでSO-ARM101ロボットアームを制御できます。
Isaac-GR00Tのデプロイメントアーキテクチャは、推論エンドポイントと制御エンドポイント間の分離設計を採用しています：

- 推論エンドポイント（サーバー）：モデル推論タスクの実行のみに専念します。
- 制御エンドポイント（クライアント）：ロボットアームの状態取得と動作制御の調整を担当します。

**サーバー**
新しいターミナルウィンドウを開いて実行します：

```bash
conda activate gr00t
cd <path-to-Isaac-GR00T>
python scripts/inference_service.py --server --model_path  ./so101-orange-checkpoints/checkpoint-10000 --embodiment_tag new_embodiment --data_config so100_dualcam --port 5555
```

<div align="center">
    <img width={800}    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/server.png" />
</div>

**クライアント**
新しいターミナルウィンドウを開いて実行します：

```bash
conda activate leisaac
cd <path-to-leisaac>
python scripts/evaluation/policy_inference.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --policy_type=gr00tn1.5 \
    --policy_host=localhost \
    --policy_port=5555 \
    --policy_timeout_ms=5000 \
    --policy_action_horizon=16 \
    --policy_language_instruction="Pick up the orange and place it on the plate" \
    --device=cuda \
    --enable_cameras
```

:::note
ZMQ関連のエラーが発生した場合は、`pip install pyzmq`を実行して解決してください。
:::

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/GRzFK7o3lOQ" title="Simulate SoArm101 by LeIsaac (3)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

最終的に訓練されたモデルは、SOArm101ロボットアームでオレンジを掴むことに失敗しました。これは実験中に3セットのデータしか収集しなかったためです。より多くのデータを収集できれば、モデルの精度は大幅に向上するでしょう！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
