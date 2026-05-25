---
description: このwikiでは、J501 Mini（AGX Orin）でAIとロボティクスプロジェクトをデプロイするためのワークフロー例を紹介します。詳細なステップバイステップの手順と参考文書も提供されています。
title: LeRobot SO-101 アーム用 Isaac GR00T N1.6 のファインチューニングと AGX Orin でのデプロイ
keywords:
  - J501 mini
  - Robotics
  - AGX Orin
  - gr00t n1.6
image: https://files.seeedstudio.com/wiki/other/cover1.png
slug: /fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin
sku: E2025123101,114993668
last_update:
  date: 2026-1-6
  author: Dayu
createdAt: '2026-01-08'
updatedAt: '2026-01-09'
url: https://wiki.seeedstudio.com/ja/fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin/
---

# 🤖 LeRobot SO-101 アーム用 GR00T N1.6 のファインチューニングと AGX Orin でのデプロイ

## 🚀 はじめに

このwikiでは、**LeRobot SO-101 アーム**用に**NVIDIA Isaac GR00T N1.6**を**ファインチューニング**し、**AGX Orin 64G**にデプロイする方法を説明します。このwikiで使用されているAGX Orinキャリアボードとロボットアーム SO-ARM は、以下のリンクから購入できます：

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '40px',
    flexWrap: 'wrap',
    marginTop: '20px',
  }}
>
  {/* ===== Item 1 ===== */}
  <div style={{ textAlign: 'center' }}>
    <img
      width="350"
      src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"
    />

    <div class="get_one_now_container" style={{ textAlign: 'center', marginTop: '12px' }}>
      <a
        class="get_one_now_item"
        href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html"
        target="_blank"
      >
        <strong>
          <span>
            <font color={'FFFFFF'} size={'4'}>今すぐ入手 🖱</font>
          </span>
        </strong>
      </a>
    </div>
  </div>

  <div style={{ textAlign: 'center' }}>
    <img
      width="350"
      src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993668-so-arm101-low-cost-ai-arm-3d-printed-parts-for-lerobot_1.jpg"
    />

    <div class="get_one_now_container" style={{ textAlign: 'center', marginTop: '12px' }}>
      <a
        class="get_one_now_item"
        href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html"
        target="_blank"
      >
        <strong>
          <span>
            <font color={'FFFFFF'} size={'4'}>今すぐ入手 🖱️</font>
          </span>
        </strong>
      </a>
    </div>
  </div>
</div>

<p></p>


- 🔧 **LeRobot SO-101**と**AGX Orin 64G**のハードウェア準備  
- 💻 **AGX Orin 64G**での**GR00T N1.6**のソフトウェア環境セットアップ 
- 🎯 **LeRobot トレーニングプラットフォーム**の使用：データ収集、データセット形式化、SO-101 アーム用ファインチューニング  
- 🚀 **L20**（サーバーグレード GPU）でのトレーニング済み GR00T N1.6 ポリシー（LeRobot + SO-101）のデプロイワークフロー例
- 🛠️ トラブルシューティングのヒントと一般的な落とし穴  

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/form.png"/>
</div>

<p></p>

**📚 初期セットアップから完全なデプロイまでをサポートするため、詳細なステップバイステップの手順と参考文書が提供されています。**

このwikiは、データ収集にLeRobotプロジェクトを基盤とし、それをGR00T N1.6がサポートするデータセット形式に変換します。AGX Orinに加えて、事前トレーニング済みモデルのファインチューニングには48GB以上のVRAMを持つデバイスが必要です（**サーバーレンタルを推奨**）。最後に、ファインチューニング済みモデルをAGX Orin 64Gにデプロイして推論を行い、皿から果物を掴むタスクを実現します。

:::warning
このwikiはJetPack 6.2に基づいており、AGX Orin 64GBモジュールを使用しています。 
:::

## 🛠️ GR00T N1.6 環境のセットアップ

AGX OrinとX86アーキテクチャサーバーでのGR00T N1.6環境のセットアップは似たプロセスに従いますが、Jetsonでは一部の依存関係を手動でインストールする必要があります。

### 🔧 AGX Orin での環境セットアップ

GR00T N1.6のソースコードをクローンし、ディレクトリ構造を完成させます：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
git checkout d483f00b1c13116bda020bead9d16dca497b2f6d
git submodule update --init --recursive
```

`Isaac-GR00T`ディレクトリに留まり、仮想環境を作成して依存関係をインストールします：

```bash
cd Isaac-GR00T

# Create virtual environment
uv venv .venv --python python3.10
source .venv/bin/activate

# Install LeRobot related dependencies
cd gr00t/eval/real_robot/SO100
uv pip install -e . --verbose
uv pip install --no-deps -e ../../../../
```

事前コンパイル済みのwheelファイルをAGX Orinにダウンロードします。これらは手動でインストールする必要があります。以下のリンクをクリックしてダウンロードしてください：

**📦 必要なWheelファイル：**
- **PyTorch**: [ダウンロードはこちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCPB-wlwOrsSZNkhH9I27DMAcXbUvnXhRmshioXZz-N4Jk?e=DIrq5U)
- **TorchVision**: [ダウンロードはこちら](https://pypi.jetson-ai-lab.io/jp6/cu126/+f/907/c4c1933789645/torchvision-0.23.0-cp310-cp310-linux_aarch64.whl#sha256=907c4c1933789645ebb20dd9181d40f8647978e6bd30086ae7b01febb937d2d1)
- **Flash-Attention**: [ダウンロードはこちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDsyHCBmfaVQ4iM1dQxOrA0ASs-RgdpKdLPy87XPW5RL20?e=CbZnio)
- **TorchCodec**: [ダウンロードはこちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBkC3cpYjGcQ5Qwmei9PF3rAfYWOZY7JqugbcRtQ2VO7ro?e=Llh7yu)
- **Triton**: [ダウンロードはこちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBxXj1wMjIORbEkjCoZgRmnAWVrarrEHxHqW7-avotuJks?e=cDST1l)

Jetson用のその他のwheelファイルは以下からダウンロードできます：  
🔗 [https://pypi.jetson-ai-lab.io/jp6/cu126](https://pypi.jetson-ai-lab.io/jp6/cu126)

`.whl`ファイルをダウンロードした後、仮想環境をアクティベートしてpip経由でインストールします：

```bash
source .venv/bin/activate

pip install xxxx.whl

# For example:
# pip install torch-2.8.0a0+gitba56102-cp310-cp310-linux_aarch64.whl
```

:::warning
`flash-attn`と`torchvision`は`pytorch`の**後に**インストールする必要があります
:::

ソースコードの作業ディレクトリに戻り、最終的な依存関係のインストールを完了します：

```bash
cd Isaac-GR00T
source .venv/bin/activate
pip install -e .[base]

# We recommend using ffmpeg version 7.x
sudo apt update
sudo apt install ffmpeg
```

### 🖥️ ファインチューニングサーバーでの環境セットアップ

GR00T N1.6のソースコードをクローンし、ディレクトリ構造を完成させます：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
git checkout d483f00b1c13116bda020bead9d16dca497b2f6d
git submodule update --init --recursive
```

`Isaac-GR00T`ディレクトリに留まり、仮想環境を作成して依存関係をインストールします：

```bash
cd Isaac-GR00T

# Create virtual environment
uv venv .venv --python python3.10
source .venv/bin/activate

# Install LeRobot related dependencies
cd gr00t/eval/real_robot/SO100
uv pip install -e . --verbose
uv pip install --no-deps -e ../../../../
```

サーバーのCUDAバージョン（著者はCUDA 12.8を使用）に基づいて、PyTorch公式ウェブサイトからtorch 2.8とtorchvision 0.22.0のGPUバージョンに対応するインストールコマンドを見つけます：

🔗 [インストールコマンドを見つけるにはこちらをクリック](https://pytorch.org/get-started/previous-versions/)

依存関係をインストールする際は、仮想環境がアクティベートされていることを確認してください：

```bash
source .venv/bin/activate

# For example
# pip install torch==2.7.0 torchvision==0.22.0 torchaudio==2.7.0 --index-url https://download.pytorch.org/whl/cu128
```

:::warning
`flash-attn`と`torchvision`は`pytorch`の**後に**インストールする必要があります
:::

ソースコードの作業ディレクトリに戻り、最終的な依存関係のインストールを完了します：

```bash
cd Isaac-GR00T
source .venv/bin/activate
pip install --no-build-isolation flash-attn==2.8.2.post1
pip install -e .[base]
pip install torchcodec==0.4.0

# We recommend using ffmpeg version 7.x
sudo apt update
sudo apt install ffmpeg
```


## 📊 SO-ARM を使用したデータ収集

データ収集の詳細なチュートリアルについては、以下のリンクを参照してください：  
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#record-the-dataset](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#record-the-dataset)  
**このリンクには、設定、組み立て、キャリブレーション、データ収集、トレーニング、推論をカバーするSO-ARMの完全なチュートリアルが含まれています。**

lerobotロボットアームのデータ収集は、PCまたはJetsonデバイス上で直接実行できます。

- **方法1**: Jetsonを使用してデータを収集
- **方法2**: Ubuntu PCを使用してデータを収集（**推奨**）

両方の方法でのデータ収集手順は基本的に同じです。


### LeRobot 環境セットアップ（オプション）

Lerobotの開発環境セットアッププロセスは、以下のリンクのサブセクションで確認できます：  
🔗 [https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot)



### モーターの設定

SO-ARMの各関節のモーターは、組み立て前に設定する必要があります。設定手順は以下のリンクのサブセクションで確認できます：    
🔗 [https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#configure-the-motors](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#configure-the-motors)


### 組み立て

SO-ARMのマスターアームとフォロワーアームのインストールプロセスは、以下のリンクのサブセクションで確認できます：  
🔗 [https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#assembly](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#assembly)

### SO-ARM キャリブレーション


SO-ARMが完全に組み立てられた後、キャリブレーションが必要です。キャリブレーション手順については、以下のリンクのサブセクションを参照してください：  
🔗 [https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#calibrate](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#calibrate)



:::note
**ロボットアームをキャリブレーションする際は、USBカメラを接続しないでください。ポートの競合や不正なポート割り当てが発生する可能性があります。**
:::

**キャリブレーションスクリプトを実行した後、ロボットアームの各関節を手動で動かして、完全な可動域に到達することを確認してください！これを怠ると、テレオペレーション中にリーダーアームとフォロワーアームの姿勢が一致しない可能性があります。**




### カメラセットアップ

一般的に、ロボットアームの手首/グリッパーに1台のカメラを、デスクトップ表面にもう1台のカメラを設置して、アームの姿勢を適切にカバーすることが推奨されます。
<mark>具体的な設置方法はアプリケーションシナリオによって異なります。以下に示す例は参考用です。</mark>

詳細については、以下のリンクのサブセクションを参照してください：  
🔗 [https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#カメラを追加](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#カメラを追加)



### データ収集

:::warning
GR00T N1.6では、手首カメラのパラメータ名は `wrist` にし、三人称視点カメラのパラメータ名は `front` にする必要があります。

例：
`--robot.cameras="{ wrist: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 6, width: 640, height: 480, fps: 30}}"`  

データ収集時にこれらのパラメータ名を使用しない場合、後続のトレーニングとデプロイメントプロセスでソースコード内のパラメータファイルとキーワードを修正する必要があります。
:::


カメラの設置とロボットアームのキャリブレーションの両方が完了した後、データセット収集手順は以下のリンクのサブセクションで確認できます：  
[https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#データセットを記録](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#データセットを記録)



### 収集したデータの可視化


SO-ARMで収集したデータを可視化するには、以下のリンクのサブセクションを参照してください：  
🔗 [https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#データセットを可視化](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#データセットを可視化)



:::note
クラウドでポリシーをトレーニングすることを選択した場合、データセットが事前にクラウドサーバーにアップロードされているか、Hugging Face Hubからダウンロードされていることを確認してください。ただし、Hugging Face Hubから直接ダウンロードする際のネットワークの問題の可能性があるため、データセットを手動でクラウドサーバーにアップロードすることを強く推奨します。
:::



## 🚀 L20を使用したポリシーのトレーニング

著者は事前トレーニング済みモデルのファインチューニングにNVIDIAのL20 GPUを選択しました。他のサーバーグレードGPUをレンタルすることもできますが、ファインチューニングプロセスで48GBの利用可能なVRAMがあることを確認してください。

### データセット形式の変換

まず、前のセクションで収集したトレーニングデータセットをGR00T N1.6で使用される形式に変換する必要があります。著者はプロセスについて[このリンク](https://github.com/NVIDIA/Isaac-GR00T/blob/main/getting_started/finetune_new_embodiment.md)を参照しています。


LeRobot v2形式のデータセットを既にお持ちの場合は、**データセット形式変換プロセスをスキップ**できます。

LeRobot v3.0形式のデータセットをお持ちの場合は、このスクリプトを使用してLeRobot v2形式に変換してください。

他の形式のデータセットをお持ちの場合は、以下の要件を満たすLeRobot v2形式に変換してください。

**📁 構造要件**
フォルダは以下のような構造に従い、これらのコアフォルダとファイルを含む必要があります：

```bash
.
├─meta 
│ ├─episodes.jsonl
│ ├─modality.json # -> GR00T LeRobot specific
│ ├─info.json
│ └─tasks.jsonl
├─videos
│ └─chunk-000
│   └─observation.images.ego_view
│     └─episode_000001.mp4
│     └─episode_000000.mp4
└─data
  └─chunk-000
    ├─episode_000001.parquet
    └─episode_000000.parquet
```

データセット形式変換スクリプトは `Isaac-GR00T/scripts/lerobot_conversion` にあります。以下のコマンドを使用してデータセット形式を変換してください：

```bash
python convert_v3_to_v2.py --repo-id seeed/grap_fruit
```

`--repo-id` は変換するソースデータセットへのパスです。

SO-ARMを使用していて、収集したデータセットに `modality.json` が不足している場合は、demo_dataディレクトリで見つけることができます：
🔗 [https://github.com/NVIDIA/Isaac-GR00T/blob/main/demo_data/cube_to_bowl_5/meta/modality.json](https://github.com/NVIDIA/Isaac-GR00T/blob/main/demo_data/cube_to_bowl_5/meta/modality.json)

### 事前トレーニング済みモデルのダウンロード

事前トレーニング済みモデルの重み（
**GR00T-N1.6-3B**）をHugging Faceの公式ウェブサイトからダウンロードできます。ダウンロードページ： 
🔗 [https://huggingface.co/nvidia/GR00T-N1.6-3B](https://huggingface.co/nvidia/GR00T-N1.6-3B)

以下の画像に示されている内容を選択し、ダウンロードをクリックしてください。ダウンロードしたファイルを同じフォルダに配置してください。
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/dl-1.6.png" width="800"/>
</div>


### ファインチューニングの実行

エントリーポイントとして `gr00t/experiment/launch_finetune.py` を使用します。起動前にuv環境が有効になっていることを確認してください。これは `uv run bash <example_script_name>` コマンドを実行することで行えます。

**📋 利用可能な引数を表示**
```bash
# Display all available arguments
python gr00t/experiment/launch_finetune.py --help
```

**🔧 ファインチューニングの実行**

単一GPUでファインチューニングを行う場合は、以下の画像の赤でハイライトされた部分に従って `/Isaac-GR00T/gr00t/data/dataset/factory.py` を修正する必要があります：
<div align="center">
  <img src="https://files.seeedstudio.com/wiki/other/modify-gr00t.png" width="800"/>
</div>

```python
# Change torch.distributed.barrier() to:

import torch.distributed as dist
if dist.is_available() and dist.is_initialized():
    dist.barrier()
```

ファインチューニングには以下のコマンドを使用してください：

```bash
export NUM_GPUS=1
CUDA_VISIBLE_DEVICES=0 python \
    gr00t/experiment/launch_finetune.py \
    --base-model-path nvidia/GR00T-N1.6-3B \
    --dataset-path ./demo_data/cube_to_bowl_5 \
    --embodiment-tag NEW_EMBODIMENT \
    --modality-config-path examples/SO100/so100_config.py \
    --num-gpus $NUM_GPUS \
    --output-dir /tmp/so100 \
    --save-total-limit 5 \
    --save-steps 2000 \
    --max-steps 2000 \
    --use-wandb \
    --global-batch-size 32 \
    --color-jitter-params brightness 0.3 contrast 0.4 saturation 0.5 hue 0.08 \
    --dataloader-num-workers 4
```

**📊 主要パラメータ**

| パラメータ | 説明 |
|-----------|-------------|
| `--base-model-path` | 事前トレーニング済みベースモデルチェックポイントへのパス |
| `--dataset-path` | トレーニングデータセットへのパス |
| `--embodiment-tag` | ロボットの実体を識別するタグ |
| `--modality-config-path` | ユーザー指定のモダリティ設定へのパス（NEW_EMBODIMENTタグの場合のみ必要） |
| `--output-dir` | チェックポイントが保存されるディレクトリ |
| `--save-steps` | N ステップごとにチェックポイントを保存 |
| `--max-steps` | トレーニングステップの総数 |
| `--use-wandb` | 実験追跡のためのWeights & Biasesログを有効化 |



## 🚀 AGX Orin 64Gでのファインチューニング済みモデルによる推論

前の手順に従ってAGX Orin上でGR00T N1.6環境を設定していることを確認してください。

**🖥️ ターミナル1：ローカル推論サーバーの開始**

最初のターミナルを開き、仮想環境をアクティベートし、以下のコマンドでローカル推論サーバーを開始してください：

```bash
source .venv/bin/activate

uv run python gr00t/eval/run_gr00t_server.py \
  --model-path /tmp/so100_finetune/checkpoint-10000 \
  --embodiment-tag NEW_EMBODIMENT 
```

ここで `--model-path` はファインチューニング済みモデルの重みへのパスです。

**🤖 ターミナル2：ローカル推論クライアントの開始**

2番目のターミナルを開き、仮想環境をアクティベートし、以下のコマンドでローカル推論クライアントを開始してください：

```bash
source .venv/bin/activate

uv run python gr00t/eval/real_robot/SO100/eval_so100.py \
  --robot.type=so101_follower --robot.port=/dev/ttyACM0 \
  --robot.id=orange_follower \
  --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
  --policy_host=localhost --policy_port=5555 \
  --lang_instruction="grasp fruit into plate"
```

ここで `--robot.port` パラメータは実際のシリアルポート名に応じて修正し、`index_or_path` も2つのカメラのデバイスインデックス番号に応じて修正する必要があります。

**🎥 デモ結果**

推論リクエストを起動した後、ターミナルでGR00T N1.6が出力するアクションシーケンスを確認できます。各推論では8つのアクションが生成されます：

<div align="center"> <img src="https://files.seeedstudio.com/wiki/other/gr00t-infer.jpg" width="800"/> </div>

AGX Orin 64G上でのGR00T N1.6の著者の推論結果を以下のビデオで示します。**前半では**GR00T N1.6プログラム開始後のターミナルでの推論出力を示しており、推論ごとに8つのアクションが出力されることがわかります。**後半では**実世界での結果を実演しており、ロボットアームが果物を正常に掴んで皿の上に置くことに成功しています。
<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/MuzIkoKYOwU" title="GR00T N1.6 Inference Demo on AGX Orin 64G" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>




## 📚 参考文献

- 🔗 https://developer.nvidia.com/embedded/jetpack
- 🔗 https://github.com/NVIDIA/Isaac-GR00T/tree/main
- 🔗 https://huggingface.co/nvidia/GR00T-N1.6-3B

## 🤝 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
