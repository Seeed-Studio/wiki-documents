---
description: "SO-ARM Physical AI ビギナーコース第 20 章 — ステージ 3 の LeRobot データセットを GR00T 対応 VLA データセットへ：言語アノテーション、meta/modality.json、new_embodiment タグと so100_dualcam 設定、次元検証、マルチタスク構成。"
title: 第 20 章 - SO-ARM VLA データセットの準備
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - VLA
  - データセット
  - modality
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_20
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_20/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 4 · 第 20 章 · 実践</span>
    <h2>20. SO-ARM VLA データセットの準備</h2>
    <p>
      ステージ 3 の LeRobot データセットを GR00T 対応の VLA データセットへ変換します：言語アノテーション、meta/modality.json、new_embodiment タグと so100_dualcam 設定、次元検証、マルチタスク構成。
    </p>
    <div className="hero-actions">
      <a href="#check">データセット確認</a>
      <a href="#language">言語</a>
      <a href="#modality">modality.json</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ コード不要 · 環境構築不要</span>
    <p className="sensecraft-banner__title">セットアップをスキップして — reBot Arm と LeRobot を 1 つのアプリから実行</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics は、SO-ARM101、reBot Arm 102 + B601-RS および B601-DM 向けの Seeed のノーコードプラットフォームです。アームを接続し、キャリブレーションを行い、デモを収集し、ガイド付きインターフェースから学習と推論を実行できます — Python 環境もターミナルも不要です。</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6 ステップのガイド付きワークフロー</li>
      <li>✅ クラウド学習 — ローカル GPU 不要</li>
      <li>✅ Windows / macOS クライアント</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">SenseCraft Robotics へ移動 ↗</a>
    <a className="sensecraft-banner__link" href="/ja/sensecraft_robotics/">ソフトウェアガイド</a>
  </div>
</div>

<a id="overview"></a>

## 20.1 前提条件

<section id="prerequisites" className="section-card">
  <div className="section-title">
    <span>前提</span>
    <h2>20.1 前提条件</h2>
  </div>

必要なもの：

- ステージ 3 で録画したクリーンな SO-ARM データセット（第 11〜13 章）：2 カメラ視点（`front` + `side`）、50 Episode 以上、1 Episode 1 タスク、品質チェック済み；
- 訓練マシンにクローン済みの [Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T) リポジトリ（第 21 章で完全な環境を構築 — 本章はデータセットファイルだけ編集します）；
- 参照レシピ：[GR00T N1.5 を SO101 に微調整](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning)。

:::tip
既存の ACT データセットがそのまま原材料です — GR00T は同じ LeRobot エピソードを再利用します。本章で追加するのは言語とモダリティのメタデータだけです。
:::

</section>

## 20.2 LeRobot データセットの確認

<section id="check" className="section-card">
  <div className="section-title">
    <span>確認</span>
    <h2>20.2 LeRobot データセットの確認</h2>
  </div>

### データセットのディレクトリ構造

```text
~/.cache/huggingface/lerobot/seeedstudio123/test/
├── meta/
│   ├── info.json        ← fps、特徴量、カメラキー、ロボット情報
│   ├── tasks.jsonl      ← タスク記述（ここを編集！）
│   ├── episodes/...     ← Episode ごとのメタデータ
│   └── stats/...        ← 正規化統計
├── data/                ← parquet フレーム：観測 / 状態 / アクション
└── videos/              ← カメラストリーム
```

### Python でクイックチェック

```python
from lerobot.common.datasets.lerobot_dataset import LeRobotDataset

ds = LeRobotDataset("seeedstudio123/test", root="~/.cache/huggingface/lerobot")
print(ds.meta.info)          # fps、特徴量
print(ds[0]["observation.state"].shape)   # 期待値 torch.Size([6])
print(ds[0]["action"].shape)              # 期待値 torch.Size([6])
```

### 必須チェックリスト

- [ ] `observation.state` と `action` がどちらも 6 次元（5 関節 + グリッパ）；
- [ ] 画像特徴がちょうど 2 つ（例：`observation.images.front` / `observation.images.side`）；
- [ ] 各 Episode が意味のある 1 つのタスク記述に属している；
- [ ] 既知の壊れた Episode は除去済み（第 13 章）。

</section>

## 20.3 言語タスク記述の追加

<section id="language" className="section-card">
  <div className="section-title">
    <span>言語</span>
    <h2>20.3 言語タスク記述の追加</h2>
  </div>

### 方法 A：録画時に直接書く（推奨）

ステージ 4 用に**新しい**データセットを録画する場合、録画時の `--dataset.single_task` で指示をバインドします：

```bash
--dataset.single_task="Pick up the block at point A and place it at point B"
```

1 タスク = 動詞で始まる短い 1 文 — そのままタスクのメタデータに入ります。

### 方法 B：`meta/tasks.jsonl` を遡って記入

既存データセットの場合、`meta/tasks.jsonl` を編集し、各タスクインデックスを適切な指示文へ対応させます。対応は安定させましょう：モデルが学ぶのはこれらの文字列そのものです。

### 言語アノテーションのガイドライン

1. 1 タスク = 1 つの固定文。同じタスクが 2 つの言い方で現れないように；
2. 動詞開始で具体的に：「ブロックを箱に入れて」は「ブロックの取り扱い」より良い；
3. 中国語・英語どちらも可 — GR00T の VLM は両方扱えます — ただし 1 タスク内で言語を混ぜない。

</section>

## 20.4 meta/modality.json の作成

<section id="modality" className="section-card">
  <div className="section-title">
    <span>モダリティ</span>
    <h2>20.4 meta/modality.json の作成</h2>
  </div>

`modality.json` は、どのデータセットフィールドをどのモデル入力へ供給するかを GR00T に伝えます。SO-ARM の標準 2 カメラ構成は公式 **`so100_dualcam`** データ設定に対応します。ローカルデータセット用の最小等価物は次の通りです：

```json
{
    "state": {
        "single_arm": [0, 5],
        "gripper": [5, 6]
    },
    "action": {
        "single_arm": [0, 5],
        "gripper": [5, 6]
    },
    "video": {
        "front": "observation.images.front",
        "side": "observation.images.side"
    },
    "annotation": {
        "human.task_description": "task_description"
    }
}
```

### フィールド説明

| フィールド | 意味 |
| :--- | :--- |
| `state.single_arm` | `observation.state` の 5 関節スライス `[開始, 終了)` |
| `state.gripper` | グリッパ次元のスライス |
| `action.*` | `action` ベクトルの同じスライス |
| `video` | カメラキー → データセット特徴名（録画キーと 1 文字まで一致必須） |
| `annotation.human.task_description` | 言語指示の参照元（第 18 章の推奨キー） |

:::note
Isaac-GR00T リポジトリの `so100_dualcam` 設定がこのファイルの正本です — 構成が標準（2 カメラ、6 次元状態 / アクション）に一致するなら、自分でコピーを維持するより訓練時に `--data-config so100_dualcam` を渡す方が良いです。
:::

</section>

## 20.5 本体タグの設定

<section id="embodiment-tag" className="section-card">
  <div className="section-title">
    <span>本体</span>
    <h2>20.5 本体タグの設定</h2>
  </div>

SO-ARM は新しい本体として微調整します：タグ **`new_embodiment`**。これをデータセット自体に書くことはほとんどありません — 訓練 / 推論の引数です（第 21 章：推論サービスの `--embodiment-tag new_embodiment`、SO101 微調整レシピは訓練時に設定）。

データセット段階で本当に重要なのは、**データ設定が事実と一致していること**：2 カメラ、6 次元状態 / アクション（20.2 で検証）。

</section>

## 20.6 関節順序とデータ次元の確認

<section id="dimensions" className="section-card">
  <div className="section-title">
    <span>検証</span>
    <h2>20.6 関節順序とデータ次元の確認</h2>
  </div>

### ステップ 1：データセットのメタ情報を印刷

特徴量リストと次元を確認（20.2 の Python スニペット参照）：状態 / アクションが 6/6、画像特徴が 2 つ。

### ステップ 2：モダリティスライスの確認

カスタム `modality.json` を書いた場合、スライスは `[0,6)` を正確にカバーし、隙間や重複がない必要があります。

### ステップ 3：データの可視化

```bash
lerobot-dataset-viz \
    --repo-id seeedstudio123/test \
    --mode local \
    --episode-index 0
```

確認ポイント：正しいカメラの画像か、把持時にグリッパ次元が実際に開閉しているか、関節が妥当な順序で動いているか。

### ステップ 4：統計チェック

`meta/stats` の状態 min / max はキャリブレーションされた関節範囲内にあるべきです。画像の平均輝度が 0 や 255 に近くないこと（黒画や白飛びの録画）。

</section>

## 20.7 マルチタスクデータセットの構成

<section id="multi-task" className="section-card">
  <div className="section-title">
    <span>マルチタスク</span>
    <h2>20.7 マルチタスクデータセットの構成</h2>
  </div>

### 方法 A：同じ repo_id、複数の task_index（推奨）

複数タスクを 1 つのデータセットに録画します。各エピソードは `task_index` を保存し、`tasks.jsonl` が各インデックスを指示文へ対応させます。これが言語条件微調整の自然な形です。

### 方法 B：複数データセットの統合

第 13 章ツールボックスで統合（`--operation.type merge`）。有効な統合の条件：カメラ構成が同一、ロボット / 特徴量の構成が同一、そして各ソースデータセットの**タスク文が互いに異なり、それぞれ一貫している**こと。

### データ量の推奨

| 構成 | Episode 数 | 備考 |
| :--- | :--- | :--- |
| 単一タスク、固定 A→B | 約 50 | 微調整フローの検証 |
| 単一タスク、位置のばらつき | 50〜100 | ステージ 3 のデフォルト量 |
| マルチタスク（3〜5 タスク） | タスクごとに 50〜100 | 言語条件には各タスクのカバーが必要 |

</section>

## 20.8 データ品質チェックリスト

<section id="quality-checklist" className="section-card">
  <div className="section-title">
    <span>チェックリスト</span>
    <h2>20.8 データ品質チェックリスト</h2>
  </div>

- [ ] 各 Episode に正しい、一意の指示文がある；
- [ ] `modality.json` のカメラキーがデータセット特徴と 1 文字まで一致；
- [ ] `state` / `action` が 6 次元でスライスが正しい（`single_arm` / `gripper`）；
- [ ] 失敗・外れ値の Episode は削除済み（第 13 章）；
- [ ] 統計が存在する（`meta/stats`）— 録画途中で kill されたセッションで訓練しない；
- [ ] 第 21 章の作業開始前に最終データセットをバックアップ済み。

データセットの準備完了 — 次章はこの上で GR00T を微調整します。

</section>

</div>
