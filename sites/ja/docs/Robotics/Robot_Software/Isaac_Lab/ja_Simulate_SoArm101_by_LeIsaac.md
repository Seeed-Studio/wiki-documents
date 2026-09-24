---
description: このチュートリアルでは、LeIsaac を使用して Isaac Lab 内で SOArm101 ロボットアームを遠隔操作および学習させる方法を説明します。これには、データ収集、NVIDIA Isaac GR00T を用いたモデルのファインチューニング、およびデプロイが含まれます。
title: Lightwheel LeIsaac
keywords:
  - NVIDIA
  - Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/simulate_soarm101_by_leisaac.webp
slug: /simulate_soarm101_by_leisaac
last_update:
  date: 8/1/2025
  author: Youjiang
createdAt: '2025-08-01'
updatedAt: '2025-09-12'
url: https://wiki.seeedstudio.com/ja/simulate_soarm101_by_leisaac/
---

# Lightwheel LeIsaac を始めよう — オープンソースワークフロー（Hugging Face LeRobot × GR00T N1.5 × Isaac Sim の統合）

## 概要

この wiki では leisaac のドキュメントに沿って、IsaacLab 上で leisaac を用いて SoArm101 ロボットアームを遠隔操作する方法を紹介します。さらに、Isaac Lab で収集したデータを使用してファインチューニングした Nvidia Isaac GR00T N1.5 モデルを、Isaac Lab シミュレーション環境内にデプロイする手順も示します。本 wiki で使用する主なプロジェクトは次のとおりです：

- [LeIsaac](https://github.com/LightwheelAI/leisaac) は、SO101Leader（LeRobot）を使用して IsaacLab 内での遠隔操作機能を提供し、データ収集、データ変換、およびその後のポリシー学習をサポートします。
- [NVIDIA Isaac™ Lab](https://developer.nvidia.com/isaac/lab) は、ロボットポリシーの学習を支援するために設計された、ロボット学習向けのオープンソース統合フレームワークです。
- [SO-ARM101](https://github.com/TheRobotStudio/SO-ARM100) は、低コストでオープンソースの 3D プリント可能なロボットアームキットです。オープンソースの LeRobot ライブラリとシームレスに連携するよう設計されています。
- [NVIDIA Isaac GR00T N1.5](https://github.com/NVIDIA/Isaac-GR00T) は、汎用ヒューマノイドロボットの推論とスキルのためのオープンな基盤モデルです。

## 必要環境

- Ubuntu PC
- SoArm101 リーダーアーム

:::info
この wiki で使用しているコンピュータは NVIDIA RTX 3080 GPU を搭載し、Ubuntu 22.04 LTS 上で動作しています。
:::

## シミュレーション環境のセットアップ

Isaac Lab ランタイム環境をインストールするには、ターミナルで次のコマンドを使用します：

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
お使いのコンピュータに conda がインストールされていない場合は、[このガイド](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html) を参照してインストールしてください。
:::

:::info
50 シリーズ GPU を使用している場合は、isaacsim5.0 と feature/isaacsim_5_0 ブランチの isaaclab を使用することを推奨します。
:::

## LeIsaac のインストール

LeIsaac リポジトリをクローンし、依存パッケージとしてインストールします。

```bash
cd ..
git clone https://github.com/LightwheelAI/leisaac.git
cd leisaac
pip install -e source/leisaac
pip install pynput pyserial deepdiff feetech-servo-sdk
```

:::note
必ず `leisaac` conda 仮想環境内でインストールを行ってください。
:::

## アセットの準備

LeIsaac は、キッチンシーンのサンプル USD アセットを提供しています。関連するシーンは[こちら](https://github.com/LightwheelAI/leisaac/releases/tag/v0.1.0)からダウンロードし、assets ディレクトリに展開します。ディレクトリ構造は次のようになります：

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

SO-ARM101 リーダーを USB ケーブルで Ubuntu コンピュータに接続し、次にコマンドを使用してシリアルポートの権限を付与します。

```bash
ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM0
```

すべてが正しく動作していれば、次のようなログ出力が表示されるはずです。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/connect_arm.png" />
</div>

次のスクリプトを使用してテレオペレーションタスクを実行し、データセットを収集します：

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

IsaacLab のウィンドウに入ったら、キーボードの `b` キーを押してテレオペレーションを開始します。その後、指定した teleop_device を使用してシミュレーション内のロボットを操作できます。操作を終えて環境をリセットする必要がある場合は、`r` または `n` キーを押すだけです。`r` は環境をリセットしタスクを失敗としてマークし、`n` は環境をリセットしタスクを成功としてマークします。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XkgBY4aa8AE" title="Teleoperate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットのリプレイ

テレオペレーション後、次のスクリプトを使用して、シミュレーション環境内で収集したデータセットをリプレイできます：

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

収集したテレオペレーションデータは、指定したディレクトリ内に HDF5 形式で保存されます。このデータをプロキシモデルの学習に使用する場合は、LeIsaac の変換スクリプトを使用して、データセットを LeRobot 互換形式に変換する必要があります。

このスクリプトは LeRobot 仮想環境内で実行する必要があります。この[wiki](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot) の手順に従って、新しい LeRobot 環境を作成してください。

```bash
cd ..
git clone https://github.com/huggingface/lerobot.git
cd lerobot
conda create -y -n lerobot python=3.12
conda activate lerobot
pip install -e .
```

その後、スクリプト内のパラメータを変更し、次のコマンドを実行します：

```bash
cd ../leisaac
python scripts/convert/isaaclab2lerobot.py
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/data_conversion.png" />
</div>

:::note
データ収集中にデータセットの保存パスを変更した場合は、変換スクリプトを実行する前に、スクリプト内の対応するパスを必ず更新してください。
:::

プログラムの実行が完了すると、変換されたデータセットは `~/.cache/huggingface/lerobot/` に保存されます。

また、LeRobot に組み込まれているデータセット可視化ツールキットを使用して、変換後のデータを確認することもできます。

```bash
cd ../lerobot
python -m lerobot.scripts.visualize_dataset --repo-id EverNorif/so101_test_orange_pick  --episode-index 0
```

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/LPSxPMoP-pk" title="Simulate SoArm101 by LeIsaac (2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ポリシー学習

この wiki では、NVIDIA Isaac GR00T N1.5 をファインチューニングします。まず Isaac-GR00T 仮想環境をセットアップしましょう：

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
flash-attn のインストールにはパッケージのコンパイルが含まれ、非常に時間がかかる場合があります。お使いのシステム環境に合った事前コンパイル済みパッケージを[ダウンロード](https://github.com/Dao-AILab/flash-attention/releases/tag/v2.7.1.post4)し、`pip install ./package_name` コマンドを使用してローカルインストールすることを推奨します。
:::

トレーニングを開始するには、ターミナルで次のコマンドを実行します：

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

この段階では、ファインチューニングした NVIDIA Isaac GR00T N1.5 モデルをデプロイし、Isaac Lab 内で SO-ARM101 ロボットアームを制御できます。
Isaac-GR00T のデプロイアーキテクチャは、推論エンドポイントと制御エンドポイントを分離した設計を採用しています：

- 推論エンドポイント（サーバー）：モデル推論タスクの実行専用。
- 制御エンドポイント（クライアント）：ロボットアームの状態取得と動作制御のオーケストレーションを担当。

**サーバー**
新しいターミナルウィンドウを開き、次を実行します：

```bash
conda activate gr00t
cd <path-to-Isaac-GR00T>
python scripts/inference_service.py --server --model_path  ./so101-orange-checkpoints/checkpoint-10000 --embodiment_tag new_embodiment --data_config so100_dualcam --port 5555
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/server.png" />
</div>

**クライアント**
新しいターミナルウィンドウを開き、次を実行します：

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
ZMQ 関連のエラーが発生した場合は、`pip install pyzmq` を実行して解決してください。
:::

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/GRzFK7o3lOQ" title="Simulate SoArm101 by LeIsaac (3)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

最終的に学習されたモデルは、SOArm101 ロボットアームを制御してオレンジをつかむことに失敗しました。これは、実験中に 3 セット分のデータしか収集しなかったためです。より多くのデータを収集できれば、モデルの精度は大幅に向上するはずです！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
