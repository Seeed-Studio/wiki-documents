---
description: "SO-ARM Physical AI ビギナーコース第 21 章 — Isaac-GR00T 環境を構築し、so100_dualcam 設定で SO-ARM データセット上の GR00T N1.5 を微調整し、GR00T サーバと SO-100 ロボット制御クライアントで推論を実行します（ワークステーションまたは Jetson AGX Thor）。"
title: 第 21 章 - Isaac GR00T で SO-ARM をファインチューニング
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - VLA
  - 微調整
  - 推論
  - Jetson Thor
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_21
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_21/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 4 · 第 21 章 · 実践</span>
    <h2>21. Isaac GR00T で SO-ARM をファインチューニング</h2>
    <p>
      Isaac-GR00T 環境を構築し、so100_dualcam 設定で SO-ARM データセット上の GR00T N1.5 を微調整し、GR00T 推論サーバと SO-100 ロボット制御クライアントで真機推論を実行します — ワークステーションでも Jetson AGX Thor でも。
    </p>
    <div className="hero-actions">
      <a href="#environment">環境</a>
      <a href="#finetune">微調整</a>
      <a href="#inference">推論</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 21.1 訓練パスの選択

<section id="paths" className="section-card">
  <div className="section-title">
    <span>パス</span>
    <h2>21.1 訓練パスの選択</h2>
  </div>

本章は NVIDIA 公式の [SO101 微調整ガイド](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning)と同じ **Isaac-GR00T** パスに従います — Seeed の [Jetson Thor 上の SO101 + GR00T](/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/) チュートリアルと同じレシピです。計算資源の調達方法は 3 つ：

| パス | ハードウェア | 備考 |
| :--- | :--- | :--- |
| **ローカルワークステーション** | RTX 4090 / A6000 級（Ampere 以降、約 25GB VRAM） | 本章の前提 |
| **NVIDIA Brev クラウド** | ブラウザ 1 つ | クラウドノートブックで同じコマンド。チェックポイントを書き出してダウンロード |
| **GPU が全くない** | — | 第 22 章へ：SenseCraft Robotics のノーコードパス |

:::warning
GR00T の訓練 / 微調整には **Ampere 以降**の GPU が必要です（例：RTX A6000、RTX 4090）。**V100（Volta）は非対応**です。
:::

</section>

## 21.2 環境構築

<section id="environment" className="section-card">
  <div className="section-title">
    <span>環境</span>
    <h2>21.2 環境構築</h2>
  </div>

専用環境を作ります（`lerobot` 環境と分けても構いません）：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4
```

`flash-attn` が最も失敗しやすいステップです — PyTorch / CUDA ビルドと一致する必要があります。ビルドエラー時は：`python -c "import torch; print(torch.version.cuda)"` でバージョンを確認し、先に `ninja` と `packaging` を入れて再試行してください。

事前学習済み基盤モデルは初回利用時に Hugging Face から自動ダウンロードされます：[`nvidia/GR00T-N1.5-3B`](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main)。

</section>

## 21.3 SO-ARM データセットでの微調整

<section id="finetune" className="section-card">
  <div className="section-title">
    <span>微調整</span>
    <h2>21.3 SO-ARM データセットでの微調整</h2>
  </div>

第 20 章のデータセットが準備できたら（ここでは `./demo_data/so101-table-cleanup/` — あなたのデータセットパスに置換）：

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

キーパラメータ：

- `--dataset-path`：あなたの LeRobot データセットフォルダ（第 20 章で準備したもの）；
- `--data-config so100_dualcam`：SO-ARM 標準 2 カメラ構成；
- `--max-steps`：約 50 Episode なら最初は 10,000 ステップが堅実；
- `--video-backend torchvision_av`：動画デコードバックエンド；
- ローカル保存の基盤モデルから微調整する場合は `--base-model-path ./pretrained/GR00T-N1.5-3B` を追加。

:::note
デフォルトの微調整設定には**約 25GB の VRAM** が必要です。足りない場合は `--no-tune_diffusion_model` を追加 — DiT アクションヘッドを凍結し、学習量を減らしますが小さいカードに収まります。
:::

第 15 章と同じ要領で Loss を監視します。1 ステップあたりの所要時間は ACT より明確に長い — モデルは約 30 億パラメータです。

### クラウドノートブックからのエクスポート（Brev パス）

Jupyter のサイドバーは訓練フォルダへ直接移動できません。チェックポイントフォルダを先に `.zip` / `.tar.gz` へ圧縮し、ノートブック画面からアーカイブをダウンロードしてください。

</section>

## 21.4 推論の実行：サーバ + ロボット制御クライアント

<section id="inference" className="section-card">
  <div className="section-title">
    <span>推論</span>
    <h2>21.4 推論の実行：サーバ + ロボット制御クライアント</h2>
  </div>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>
      推論中、実機アームは人の関与なしに動きます。作業領域を清空し、手を離し、いつでも電源を切れる態勢で。
    </p>
  </div>
</div>

最良のパフォーマンスのため、採データ時のセットアップをできるだけ忠実に再現してください — 同じカメラ、同じ位置、同じ光照。モデルの汎化には限界があります。

**端末 1 —— GR00T 推論サービスを起動：**

```bash
python scripts/inference_service.py --server \
    --model_path ./so101-checkpoints \
    --embodiment-tag new_embodiment \
    --data-config so100_dualcam \
    --denoising-steps 4
```

**端末 2 —— ロボット制御クライアントを起動**（公式 SO-100 サンプル — このアームのために書かれています）：

```bash
python examples/SO-100/eval_lerobot.py \
    --robot.type=so100_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --policy_host=0.0.0.0 \
    --lang_instruction="Grab pens and place into pen holder."
```

注意：

- `index_or_path` をあなたのカメラ番号に置換 — `ls /dev/video*` または `lerobot-find-cameras opencv` で確認。データセットと同じ** 2 視点**（前面 + 側面 / グリッパ）である必要があります；
- `--lang_instruction` をあなたのデータセットの正確なタスク文に — これが言語条件のライブ実演です（第 18 章）；
- クライアントとサーバは同一マシンでも、GPU を持つネットワーク内のマシン / Jetson Thor にサーバを置く構成でも構いません。

</section>

## 21.5 Jetson AGX Thor でのエッジ展開

<section id="thor" className="section-card">
  <div className="section-title">
    <span>エッジ</span>
    <h2>21.5 Jetson AGX Thor でのエッジ展開</h2>
  </div>

Jetson AGX Thor は GR00T N1.5 の推論をエッジで回すのに十分な計算力を持ちます。GR00T の全依存は専用 Docker イメージで提供されます：

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  <image_name>:<tag>
```

コンテナ内で：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
pip install --upgrade setuptools
pip install -e .[thor]
```

微調整（任意、クラウドで実施していない場合）は 21.3 と同じ `gr00t_finetune.py` コマンド。その後、21.4 と同じサーバ + クライアントのペアを実行します。Jetson Thor の完全な流れ — 書き込み、環境、データ収集、Brev 訓練、展開 — は完全版チュートリアルを参照：[GR00T N1.5 を微調整し Jetson Thor 上の LeRobot SO-ARM に展開](/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/)。

</section>

## 21.6 代替パス：LeRobot の `groot` ポリシー

<section id="lerobot-groot" className="section-card">
  <div className="section-title">
    <span>代替</span>
    <h2>21.6 代替パス：LeRobot の `groot` ポリシー</h2>
  </div>

ステージ 3 の LeRobot ツールチェーン内に留まりたい場合、`--policy.type=groot` ポリシーも使えます（これも `flash-attn` と CUDA GPU が必要）：

```bash
pip install "lerobot[groot]"

accelerate launch \
  --num_processes=1 \
  $(which lerobot-train) \
  --output_dir=outputs/train/groot_so101 \
  --save_checkpoint=true \
  --batch_size=64 \
  --steps=20000 \
  --policy.type=groot \
  --policy.repo_id=${HF_USER}/groot_so101 \
  --dataset.repo_id=seeedstudio123/test \
  --wandb.enable=true
```

環境要件は ACT / Pi0 より高い — 公式の助言は変わりません：まず ACT をエンドツーエンドで回し、それから GR00T を試す。評価は第 16 章でおなじみの `lerobot-record ... --policy.path` レシピを使います。

</section>

## 21.7 評価とイテレーション

<section id="evaluation" className="section-card">
  <div className="section-title">
    <span>評価</span>
    <h2>21.7 評価とイテレーション</h2>
  </div>

第 16 章のフレームワークをそのまま再利用 — 成功基準、変化する開始点、成功率、失敗分類 — に VLA 特有の 2 項目を追加：

1. **指示マトリクス**：データセットに含まれる各タスク文をすべて評価。VLA は文を変えれば振る舞いを切り替えるはずです；
2. **同一重み・未収録指示の探査**：録って**いない**文を試す — 成功する部分は言語汎化、失敗する部分は第 18 章の分布境界の現れです。失敗には期待ではなくデータで答えてください。

</section>

## 21.8 トラブルシューティング FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>21.8 トラブルシューティング FAQ</h2>
  </div>

| 問題 | 対処 |
| :--- | :--- |
| モデルのダウンロード失敗 / 遅い | [`nvidia/GR00T-N1.5-3B`](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main) を手動ダウンロードし `--base-model-path` で指定 |
| `flash-attn` のビルド失敗 | PyTorch / CUDA の一致を確認。先に `ninja` + `packaging` をインストール。固定版 `2.7.1.post4` を使用 |
| 微調整中の CUDA OOM | `--no-tune_diffusion_model` を追加。バッチサイズを削減 |
| V100 が拒否される | 想定通り — Ampere 以降が必要です |
| クライアントがサーバへ接続できない | `--policy_host` には到達可能なサーバ IP を指定。ファイアウォール / ポートを確認 |
| アームは動くがタスクを無視する | カメラキーか指示文がデータセットと不一致 — 第 19〜20 章のルール |

</section>

</div>
