---
description: "SO-ARM101 Sim-to-Real VLA コース第 13 章（オプション）—— データセット拡張：NVIDIA Cosmos Transfer で録画済みエピソードを新シーンに再レンダリングし、協調学習へ組み込む。"
title: 第 13 章 - データセット拡張（オプション）
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Cosmos Transfer
  - データ拡張
  - 協調学習
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_13
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_13/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 3 · 第 13 章 · オプション · 拡張</span>
    <h2>13. データセット拡張</h2>
    <p>
      実データは高価で視野が狭い。NVIDIA Cosmos Transfer を使い、ロボットの
      動きを保ったまま録画済みエピソードを新しいシーンに再レンダリングし、
      拡張したデータセットで協調学習する。
    </p>
    <div className="hero-actions">
      <a href="#why">なぜ拡張するか</a>
      <a href="#cosmos">Cosmos Transfer</a>
      <a href="#setup">環境</a>
      <a href="#data">データ準備</a>
      <a href="#inference">推論</a>
      <a href="#integration">統合</a>
    </div>
  </div>
</section>

:::note この章はオプションの上級内容
まず実世界ループ（収集 → 学習 → 評価、第 9–11 章）を完了することを推奨
します。このワークフローは第 9 章の実データセットにも第 12 章のシミュ
データセットにも適用できます。
:::

## 13.1 なぜ拡張するのか

<section id="why" className="section-card">
  <div className="section-title">
    <span>実データの限界</span>
    <h2>13.1 なぜ拡張するのか</h2>
  </div>

実シーンでのデータ収集には高いコストと大きな制約があります：

- **環境が限られる**：通常は少数の固定シーンでしか収集できない；
- **背景の過学習**：ポリシーネットはタスクに無関係な背景特徴（壁の色、
  照明、物体配置）を学び、新しい環境で失敗する；
- **収集コストが高い**：シーンを追加するたびに再配置・再キャリブレーション・
  再収集が必要。

最先端の Cosmos Transfer モデルで動画シーンを改変し、データセットの多様性を
拡げてロバスト性を高めます。

</section>

## 13.2 Cosmos Transfer の仕組み

<section id="cosmos" className="section-card">
  <div className="section-title">
    <span>ビデオ・ツー・ビデオ</span>
    <h2>13.2 Cosmos Transfer の仕組み</h2>
  </div>

**NVIDIA Cosmos** は Physical AI（ロボティクスや自動運転）の開発を加速する
ための基盤 AI プラットフォームです。Cosmos Transfer は**ビデオ・ツー・
ビデオ**生成モデルで、3 つの入力を取ります：

| 入力 | 目的 | 例 |
|---|---|---|
| ソース動画（vision） | 時間的ダイナミクスの情報 | SO-101 外部カメラの操作動画 |
| 制御信号（controls） | 空間構造の制約、ロボット形態の保持 | Canny エッジマップ + SAM2 セグメンテーション |
| テキストプロンプト | 目標シーンの外観記述 | "A modern laboratory with white lab benches..." |

制御信号（エッジ + セグメンテーション）がロボットの形状と動きを固定し、
テキストプロンプトが新しい背景を決めます。

| 制御タイプ | 目的 | 事前計算が必要？ |
|---|---|---|
| Edge | 物体輪郭の保持、主体の変形防止 | 任意（フレームワークが自動計算可） |
| Segmentation | 意味領域（ロボット / 物体 / 背景）の保持 | 必要（SAM2 依存） |
| Blur | 全体レイアウト保持しつつテクスチャ変化を許可 | 任意 |
| Depth | 空間的な奥行き関係の保持 | 必要（DepthAnything 依存） |

:::tip アクションラベルはそのまま使える
Transfer はロボットの運動軌道を保持するため、拡張動画には元のアクション
（関節角度、グリッパー状態）がそのまま使えます。高いエッジ重み（0.9）が
この再利用を安全にする要因です。
:::

</section>

## 13.3 環境構築

<section id="setup" className="section-card">
  <div className="section-title">
    <span>GPU とインストール</span>
    <h2>13.3 環境構築</h2>
  </div>

ハードウェア要件：

| モデル | 最低 VRAM | 推奨 GPU |
|---|---|---|
| Cosmos-Nano | ~24 GB | 単一 RTX 4090 / A5000 / Jetson AGX Thor |
| Cosmos-Super | ~80 GB × 4 | 4× A100 / H100 |

インストール：

```bash
# Cosmos リポジトリのクローン
git clone https://github.com/NVIDIA/Cosmos.git
cd Cosmos

# フレームワークディレクトリへ
cd packages/cosmos3

# 仮想環境の作成
uv venv --python 3.13
source .venv/bin/activate

# 依存関係のインストール
uv pip install -e ".[inference]"

# Hugging Face へログインしモデル重みをダウンロード
huggingface-cli login
hf download nvidia/Cosmos-Nano --local-dir /path/to/models/Cosmos-Nano
```

</section>

## 13.4 データの準備

<section id="data" className="section-card">
  <div className="section-title">
    <span>制御信号とプロンプト</span>
    <h2>13.4 データの準備</h2>
  </div>

ディレクトリ構成：

```text
your_project/
├── controls/
│   └── episode_000/
│       ├── vision.mp4                # ソース動画（ロボット録画）
│       ├── control_edge.mp4           # Canny エッジマップ
│       └── control_seg.mp4            # SAM2 セグメンテーション
├── prompts/
│   ├── lab_prompt.json               # 目標シーンのプロンプト
│   └── workshop_prompt.json
├── specs/
│   └── my_lab.json                   # 推論設定
├── negative_prompt.json
└── outputs/
```

SO-101 データセットからクリップを抽出します（見下ろし `external` ストリーム
が拡張に最適です）：

```bash
ffmpeg -i ~/rebot-arm-dli-isaacsim/datasets/so101_vials_real/videos/chunk-000/observation.images.external/episode_000000.mp4 \
  -c copy your_project/controls/episode_000/vision.mp4
```

エッジ制御信号を生成：

```python
python -c "
import cv2
cap = cv2.VideoCapture('your_project/controls/episode_000/vision.mp4')
fps = cap.get(cv2.CAP_PROP_FPS)
w, h = int(cap.get(3)), int(cap.get(4))
out = cv2.VideoWriter('your_project/controls/episode_000/control_edge.mp4',
                      cv2.VideoWriter_fourcc(*'avc1'), fps, (w, h), True)
while True:
    ret, frame = cap.read()
    if not ret: break
    edges = cv2.Canny(cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY), 50, 150)
    out.write(cv2.cvtColor(edges, cv2.COLOR_GRAY2BGR))
cap.release(); out.release()
print('edge control done')
"
```

SAM2 でセグメンテーション信号を生成（別途インストールが必要）：

```bash
pip install sam2
python your_sam2_script.py \
  --input your_project/controls/episode_000/vision.mp4 \
  --output your_project/controls/episode_000/control_seg.mp4
```

シーンプロンプトを書きます。例 `prompts/lab_prompt.json`：

```json
{
  "subjects": [{
    "description": "A white SO-ARM101 robotic arm performing a tabletop pick-and-place task",
    "appearance_details": "White 3D-printed links, small two-finger gripper, wrist-mounted camera",
    "action": "pick up a vial and place it into a yellow rack",
    "pose": "Arm reaches toward the vial, gripper closes, the vial lifts and moves to the rack",
    "state_changes": "Gripper transitions from open to closed; the held vial is lifted and placed"
  }],
  "background_setting": "A modern laboratory with white lab benches, soft diffuse lighting, and a plain grey mat",
  "lighting": {
    "description": "Even, diffuse overhead lighting with no hard shadows"
  }
}
```

</section>

## 13.5 推論の実行

<section id="inference" className="section-card">
  <div className="section-title">
    <span>生成</span>
    <h2>13.5 推論の実行</h2>
  </div>

```bash
cd /path/to/cosmos/packages/cosmos3

export TRANSFER_ROOT="/path/to/your_project"

CUDA_VISIBLE_DEVICES=0 \
  .venv/bin/python -m cosmos_framework.scripts.inference \
    --parallelism-preset=latency \
    -i "$TRANSFER_ROOT/specs/my_lab.json" \
    -o "$TRANSFER_ROOT/outputs/" \
    --checkpoint-path Cosmos-Nano \
    --seed 2026
```

ガイダンスパラメータ（効くのは重みの比率で、総和は ≈ 1.0 に）：

| パラメータ | 推奨 | 効果 |
|---|---|---|
| `guidance` | 3.0 | テキスト CFG 強度——プロンプト追従の強さ |
| `control_guidance` | 1.5 | 制御 CFG 強度——運動保持の厳格さ |
| `edge.weight` | 0.75–0.9 | 主体構造の保持 |
| `seg.weight` | 0.1–0.25 | 補助的な意味的一貫性 |

:::caution ロボットが変形する場合
`edge.weight` を上げ（0.9 → 0.95）、`seg.weight` を下げ、`control_guidance`
を上げてください。背景がほとんど変わらない場合は `guidance` を上げ、目標
シーンを詳細に記述します。OOM 時は解像度を `"480"`、
`num_video_frames_per_chunk` を 33 に下げます。
:::

バッチ生成：コマンドをエピソードディレクトリのループで包めば、複数の目標
シーンでデータセットを倍増できます。

</section>

## 13.6 学習パイプラインへの統合

<section id="integration" className="section-card">
  <div className="section-title">
    <span>GR00T へ戻る</span>
    <h2>13.6 学習パイプラインへの統合</h2>
  </div>

拡張動画は元エピソードのアクションと状態ラベルを再利用します——再ラベリング
は不要です。学習へ組み込むには：

1. 拡張エピソードを LeRobot データセットとして構築（同じ 6 次元関節列、同じ
   `front`/`external` カメラキー、同じタスク文）；
2. 第 12 章のシミュデータと同じように実データセットとマージ——特徴が一致
   するソースはすべて `lerobot-edit-dataset --operation.type=merge` で
   マージできます；
3. [第 10 章](ja_Sim2Real_VLA_10.md)と同様にマージ済みセットを GR00T v2 へ
   変換してファインチューニング。ソース規模が不均一なら
   `EPISODE_SAMPLING_RATE` / `DS_WEIGHTS_ALPHA` を調整。

拡張データで学習する前の品質チェック：フレームをスクラブしてロボットが
正しく見え背景が信頼できるか確認し、短時間のポリシー転移テスト（拡張データ
で短く学習し、実データのみのバージョンと実成功率を比較）を行います。

</section>

## 13.7 参考資料

<section id="references" className="section-card">
  <div className="section-title">
    <span>リンク</span>
    <h2>13.7 参考資料</h2>
  </div>

- [Cosmos ドキュメント](https://docs.nvidia.com/cosmos)
- [Cosmos Transfer Cookbook](https://github.com/NVIDIA/Cosmos/tree/main/cookbooks/cosmos3/generator/transfer)
- [NVIDIA SO-101 Workshop —— 戦略 3：Cosmos によるデータセット拡張](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/14-strategy3-cosmos.html)

続いてモジュール 4：[第 14 章 —— Jetson エッジデバイスのセットアップ](ja_Sim2Real_VLA_14.md)。

</section>

</div>