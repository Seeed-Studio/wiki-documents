---
title: SO-ARM101 Isaac Sim DLI シミュレーションとデータ収集
description: Isaac Sim 6.1 を使用して SO-ARM101 のバイアル仕分けシーンを実行し、ロボットをテレオペレーションし、物理フォロワーをリンクし、LeRobot データを収集します。
keywords:
  - SO-ARM101
  - Isaac Sim
  - NVIDIA DLI
  - LeRobot
slug: /soarm101_isaac_sim_dli
last_update:
  date: 11/16/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/ja/soarm101_isaac_sim_dli/
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
---

# Isaac Sim 6.1 を使った SO-ARM101 のデータ収集

![Isaac Sim における SO-ARM101 データ収集デモ](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaac%20sim/isaac_sim_dli.gif)

## 1. 必要要件

> ⚠️ **GPU 要件。** 少なくとも 12 GB の VRAM を搭載した NVIDIA RTX GPU（RTX 3080 12 GB や RTX 4070 Ti SUPER 16 GB など）と、最新のドライバーを使用してください。
> ロボット、3 つのカメラビュー、物理シミュレーションが同時に動作します。VRAM が 8 GB の場合、デフォルトのレンダラーが数分以内にデスクトップコンポジタを圧迫することがあります。ディスプレイがフリーズしてマウスやキーボードに反応しなくなり、強制再起動が必要になる場合があります。Isaac Sim 自体は動作を続け、ログを書き出していることがあります。開発中、組み込みの緩和策と `--single-viewport` を有効にしていても、8 GB 搭載のノート PC が 2 回フリーズしました。安定した動作のために、少なくとも 12 GB の VRAM を搭載した GPU を使用してください。
> GPU の VRAM が 8 GB の場合は、レンダリング負荷を下げる方法についてセクション 10 を参照してください。それでもシステムがフリーズする可能性があります。

- Ubuntu 22.04。Isaac Sim 6.1 は Ubuntu 24.04 にも対応しています。
- **少なくとも 12 GB の VRAM** を搭載した NVIDIA RTX GPU。
- 最新の NVIDIA ドライバー。
- Isaac Sim 6.1 スタンドアロンパッケージ。
- 物理テレオペレーション用に USB 接続された SO-ARM101 リーダーアーム。シミュレーションとリンクする物理フォロワーとして、SO-ARM101 フォロワーアームも接続します。

次のディレクトリ構成を使用します。

```text
~
├── isaacsim/                 # Isaac Sim 6.1 installation directory
└── rebot_lerobot/
    └── .venv/bin/python      # LeRobot virtual environment
```

## 2. Isaac Sim 6.1 をインストールする

NVIDIA から `isaac-sim-standalone-6.1.0-linux-x86_64.zip`（約 12.4 GB）をダウンロードします。これを `~/isaacsim` に展開し、ポストインストールスクリプトを実行します。

```bash
unzip isaac-sim-standalone-6.1.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

互換性チェッカーを実行して、システムが要件を満たしていることを確認します。

```bash
./isaac-sim.compatibility_check.sh     # Expected output: System checking result: PASSED
```

- `./isaac-sim.sh` による初回起動時は、シェーダーコンパイルに数分かかる場合があります。
- Isaac Sim を別の場所にインストールした場合は、シミュレーションを起動する前に `ISAACSIM_ROOT` をインストールディレクトリに設定してください。セクション 6 を参照してください。
- 起動ログに表示される IOMMU、DLSS-RR、PCIe リンク幅に関する警告は、このチュートリアルの実行を妨げるものではありません。

## 3. コードを取得する（Git LFS が必要）

> ⚠️ ロボット、カメラマウント、作業台、バイアル、バイアルラックは、Git LFS に保存された USD アセットを使用します。クローンする前に `git-lfs` をインストールして、Isaac Sim が完全なアセットを読み込めるようにしてください。

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/Seeed-Projects/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

アセットが正しくダウンロードされたことを確認します。

```bash
du -sh assets/
# Expected size: about 157 MB

head -c 8 assets/so101/SO-ARM101-USD-NO-CAMERA.usd
# Expected output: PXR-USDC. If you see version, run git lfs pull again.
```

## 4. LeRobot 環境をセットアップする

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
sudo apt update
sudo apt install -y ffmpeg

# Clone the repository
git clone https://github.com/Seeed-Projects/lerobot.git

# Create a virtual environment with Python 3.12
uv venv --python 3.12 .venv
source .venv/bin/activate

# Install LeRobot with the dataset and visualization extras
uv pip install -e "./lerobot[dataset,viz]"

# Install the SO-ARM101 servo dependency
uv pip install feetech-servo-sdk
```

> `[dataset,viz]` エクストラは、`datasets`、`Pillow`、`av`、`rerun` を含む依存関係をインストールします。これらの依存関係が不足していると、エピソード変換は失敗し、ターミナルに `[dataset-error]` が表示されます。

## 5. SO-ARM101 を接続してキャリブレーションする

物理リーダーアームの電源を入れ、USB データケーブルを接続します。`lerobot-find-port` を実行して、リーダーとフォロワーのポートを特定します。ここでの例では、リーダーに `/dev/ttyACM1`、フォロワーに `/dev/ttyACM0` を使用しています。実際のポートパスに置き換えてください。プロジェクトのデフォルトデバイス ID に合わせるため、キャリブレーションは `so101_leader` と `so101_follower` という名前で保存します。

### リーダーアームをキャリブレーションする

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=so101_leader
```

プロンプトが表示されたら、各関節を可動範囲の中間位置に動かして Enter を押します。次に、各関節を可動範囲いっぱいに動かし、再度 Enter を押して保存します。[LeRobot SO-101 キャリブレーションデモ](https://huggingface.co/docs/lerobot/so101#calibrate) を参照してください。

### フォロワーアームをキャリブレーションする

シミュレーションとリンクする前にフォロワーをキャリブレーションします。リーダーと同じ中間位置および全可動範囲の手順を使用し、キャリブレーションを保存して終了するコマンドが表示されるまで待ちます。

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=so101_follower
```

## 6. テレオペレーションを開始してデータを収集する

プロジェクトディレクトリを開きます。Isaac Sim を別の場所にインストールしている場合は、現在のターミナルで `export ISAACSIM_ROOT=/path/to/isaacsim` を実行します。

```bash
cd ~/rebot-arm-dli-isaacsim
```

### テレオペレーションモードを選択する

物理リーダーを使ってシミュレートされたアームを操作します。`src=LEADER` ステータスは、シミュレーションがリーダーに追従していることを示します。

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --no-follower
```

物理フォロワーをリンクするには、まず両方の物理アームを似た姿勢に配置してから、次のコマンドを実行します。`src=FOLLOWER` ステータスは、シミュレーションがフォロワーの測定関節位置に追従していることを示します。

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --follower-port /dev/ttyACM0
```

物理リーダーなしでシミュレートされたアームを操作するには、シミュレーションを開始し、3D ビューポートをクリックしてから `Y` を押してキーボードモードに入ります。

```bash
./run_so101.sh --no-start-bridge
```

| キー | キーボードモードでの動作 |
| --- | --- |
| `W` / `S` / `A` / `D` | エンドエフェクタを前後左右に移動 |
| `↑` / `↓` | エンドエフェクタを上下に移動 |
| `Q` / `E` | 手首を回転 |
| `Z` / `C` | エンドエフェクタのピッチを調整 |
| `G` | グリッパーの開閉を切り替え |
| `B` | 5 mm と 15 mm のステップを切り替え |

### バイアル仕分けタスクを記録する

1. シミュレーションビューポートをクリックし、`R` を押して 3 本のバイアルをリセットし、シーンを再度ランダム化します。
2. リーダーモードでは `S`、キーボードモードでは `T` を押して記録を開始します。
3. 3 本のバイアルを 1 本ずつラックに立てて配置します。グリッパーがバイアルに近づくと、ガイドラインが把持距離の判断に役立ちます。ターミナルには `[GRASP]` と `[RELEASE]` が表示されます。
4. 記録キーをもう一度押してエピソードを保存します。リーダーモードでは、`C` を押してエピソードを破棄することもできます。

データセットは `~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side` に書き込まれ、ID は `local/so101_vials_front_side`、タスクテキストは `Put the three vials into the vial rack` になります。各記録には、SO-ARM101 の関節およびグリッパーデータに加え、手首カメラと俯瞰カメラからの 30 FPS 映像が含まれます。

### カメラビュー

| ![front](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_front.png) | ![side](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_side.png) | ![external](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_external.png) |
| --- | --- | --- |
| 手首カメラ `front`（記録対象） | 側面カメラ `side`（閲覧用） | 俯瞰カメラ `external`（記録対象） |

## 7. データセットの確認・可視化・リプレイ

### 動画とアクションの同期を確認する

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-dataset-viz \
  --repo-id local/so101_vials_front_side \
  --root ~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --mode local \
  --episode-index 0
```

2 つの動画がアクションおよび状態と同期したままになっていることを確認します。黒いフレーム、フリーズしたフレーム、視界を遮る物体がないかを確認してください。

### Isaac Sim でアクションをリプレイする

最初のターミナルで、シミュレーション受信側を起動します。

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --no-start-bridge --no-recording --no-dr
```

2 つ目のターミナルで、エピソード 0 をリプレイします。連続再生するには `--loop` を追加します。

```bash
source ~/rebot_lerobot/.venv/bin/activate
cd ~/rebot-arm-dli-isaacsim
PYTHONPATH=scripts python scripts/replay_episode_so101.py --episode 0
```

## 8. ハードウェアなしで検証する

次のコマンドは、シミュレートされたリーダーを使用して関節トラッキングを確認します。2 つ目のコマンドでは、両方のカメラ、H.264 エンコード、および LeRobot データセット出力も確認します。

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --test
./run_so101.sh --headless --test --test-recording
```

2 つのシミュレートされた記録を生成するには、次のコマンドを実行します。この例では、検証データを通常の記録とは別のディレクトリに書き込みます。

```bash
./run_so101.sh --headless --auto-record 2 \
  --dataset-root datasets/so101_vials_smoke_test \
  --repo-id local/so101_vials_smoke_test
```

## 9. ACT ポリシーを学習する

トレーニングワークフローを検証するために、通常の記録ディレクトリのデータを使って 60 ステップの ACT トレーニングを実行します。学習済みモデルと関連ファイルは、出力ディレクトリ内の `checkpoints/last/pretrained_model/` に保存されます。

```bash
source ~/rebot_lerobot/.venv/bin/activate
lerobot-train \
  --policy.type=act \
  --policy.push_to_hub=false \
  --dataset.repo_id=local/so101_vials_front_side \
  --dataset.root=~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --output_dir=~/rebot_lerobot/outputs/train/act_so101 \
  --steps=60 --batch_size=4 --num_workers=2
```

## 10. 既知の問題

SO-ARM101 シーンはデフォルトで Path Tracing を使用します。レンダリング負荷が高すぎる場合は、`--single-viewport` を使用してメインビューポートのみを表示しつつ、2 つのカメラは引き続き記録します。`--realtime-renderer` を使用してリアルタイムレンダリングに切り替えることもできます。リアルタイム映像はノイズが多くなる場合があります。

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --no-start-bridge --no-recording --single-viewport --realtime-renderer
```

## 11. トラブルシューティング

- **シリアルポートにアクセスできません。** デバイスのポートとデータケーブルを確認してください。アカウントにシリアルポートの権限がない場合は、`sudo usermod -aG dialout "$USER"` を実行し、一度サインアウトして再度サインインしてから、もう一度試してください。
- **シミュレーションアームと実機アームの姿勢が異なります。** 両方のアームについて、シリアルポートとキャリブレーション ID を確認してください。キャリブレーションの中点と、各関節の可動範囲を再確認してください。
- **Isaac Sim Python が見つかりません。** インストールディレクトリに `python.sh` が含まれていることを確認し、そのディレクトリを `ISAACSIM_ROOT` に設定してください。
- **シーンアセットが見つかりません。** プロジェクトディレクトリで `git lfs pull` を実行し、セクション 3 で説明しているようにアセットを確認してください。
- **記録時に `[dataset-error]` が報告されます。** LeRobot の仮想環境と、セクション 4 の `[dataset,viz]` エクストラを確認してください。
- **ターミナルに `[watchdog] Leader data timed out` と表示されます。** リーダー側の USB 接続とシリアルブリッジプロセスを確認してください。通信が中断されている間、シミュレーションは最後のターゲットを保持します。

<details>
<summary>上流 MIT ライセンス</summary>

MIT ライセンス

Copyright (c) 2026 reBot Arm DLI Isaac Sim contributors

本ソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）の複製を取得するすべての人に対し、
ソフトウェアを無制限に扱うことを無償で許可します。これには、ソフトウェアの使用、複製、改変、結合、
掲載、頒布、サブライセンス、および/または販売の権利、およびソフトウェアを提供された人にこれを行うことを
許可する権利が含まれ、これらに限定されません。
ただし、以下の条件に従うものとします。

上記の著作権表示および本許諾表示は、ソフトウェアのすべての複製または重要な部分に記載されるものとします。

ソフトウェアは「現状のまま」で提供され、明示であるか黙示であるかを問わず、いかなる種類の保証も
行われません。ここでいう保証には、商品性、特定目的適合性、および非侵害についての保証を含みますが、
これらに限定されません。いかなる場合も、著作者または著作権者は、契約行為、不法行為、またはそれ以外であれ、
ソフトウェアまたはソフトウェアの使用もしくはその他の取引に起因または関連して生じるいかなる請求、
損害、その他の責任についても、一切の責任を負わないものとします。

</details>

SOFTWARE.

</details>
