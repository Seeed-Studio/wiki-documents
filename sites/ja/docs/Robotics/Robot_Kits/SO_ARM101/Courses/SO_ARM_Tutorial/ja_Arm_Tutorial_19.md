---
description: "SO-ARM Physical AI ビギナーコース第 19 章 — ロボット本体（エンボディメント）とは何か、SO-ARM の関節・状態・アクション・カメラの GR00T での定義、基盤モデル＋微調整パラダイム、GR00T 推論サーバとロボット制御クライアントの構成。"
title: 第 19 章 - ロボット本体と GR00T システムアーキテクチャ
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - エンボディメント
  - VLA
  - LeRobot
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_19
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_19/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 4 · 第 19 章 · 理論</span>
    <h2>19. ロボット本体と GR00T システムアーキテクチャ</h2>
    <p>
      ロボット本体（エンボディメント）とは何か、SO-ARM の関節・状態・アクション・カメラが GR00T でどう定義されるか、基盤モデル＋微調整パラダイム、GR00T 推論サーバとロボット制御クライアントの構成を学びます。
    </p>
    <div className="hero-actions">
      <a href="#embodiment">本体</a>
      <a href="#joints">関節と状態</a>
      <a href="#architecture">アーキテクチャ</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 19.1 ロボット本体（エンボディメント）とは？

<section id="embodiment" className="section-card">
  <div className="section-title">
    <span>本体</span>
    <h2>19.1 ロボット本体（エンボディメント）とは？</h2>
  </div>

「本体（エンボディメント）」とはロボットが物理的にどう存在するかです：関節はいくつ、どのカメラ、どんなグリッパ、どんなアクション空間か。VLA 基盤モデルは**多数**の本体をまたいで訓練されます — 様々なアーム、ヒューマノイド、移動操作プラットフォーム — だから「いま自分はどの身体のために行動しているのか？」を伝える手段が必要です。

それが**本体タグ（embodiment tag）**です。SO-ARM データで GR00T を微調整するとき、データセットは `new_embodiment` タグを運び、これは「新しい単腕本体」に対する正しい入出力射影を選択します。**データ設定** — SO-ARM の標準 2 カメラ構成は `so100_dualcam` — と組み合わせて、モデルはこの身体の形を正確に把握します。

:::note
SO-ARM は GR00T エコシステムで最も良くサポートされた低価格本体の 1 つです：NVIDIA の公式微調整ガイドは SO101 データを使い、LeRobot の `groot` ポリシーパスも SO-ARM データセットで動きます。
:::

</section>

## 19.2 SO-ARM の関節・状態・アクション定義

<section id="joints" className="section-card">
  <div className="section-title">
    <span>定義</span>
    <h2>19.2 SO-ARM の関節・状態・アクション定義</h2>
  </div>

### 関節と状態

SO-ARM の `observation.state` は 6 次元で、データセットのメタデータに保存された固定関節順序です：

| 次元 | 関節 |
| :---: | :--- |
| 0 | 肩旋回 |
| 1 | 肩上下 |
| 2 | 肘 |
| 3 | 手首ピッチ |
| 4 | 手首回転 |
| 5 | グリッパ |

### アクション

`action` は同じ 6 次元をミラーします：次ステップの目標位置。`modality.json`（第 20 章）では、状態 / アクショングループは `single_arm`（0〜4 次元）と `gripper`（5 次元目）に分割されます — GR00T は異なるヘッドで処理することがあるためです。

</section>

## 19.3 カメラモダリティ

<section id="camera-modality" className="section-card">
  <div className="section-title">
    <span>カメラ</span>
    <h2>19.3 カメラモダリティ</h2>
  </div>

### SO-ARM の一般的なカメラ構成

`so100_dualcam` データ設定は 2 つのカメラ視点を期待します — エコシステム標準の SO-ARM 構成です：

| キー | 視点 | 役割 |
| :--- | :--- | :--- |
| `front`（または `top`） | 作業域全体をカバーする俯瞰 / 前面 | 物体はどこ、B 点はどこ |
| `side`（または `wrist`） | 側面またはグリッパ視点 | テーブル面からの高さ、物体との接触 |

### 注意

- データセットに録画されたカメラキーは、推論時に同一のものが現れる必要があります；
- 2 視点がこのアーム上の GR00T のスイートスポット。カメラ追加にはカスタムデータ設定が必要です。

</section>

## 19.4 言語モダリティ

<section id="language-modality" className="section-card">
  <div className="section-title">
    <span>言語</span>
    <h2>19.4 言語モダリティ</h2>
  </div>

### データ側

各エピソードは録画時にバインドされたタスク記述（第 12 章の `--dataset.single_task`）、または `meta/tasks.jsonl` への追記を運びます。GR00T は `modality.json` のアノテーションキー `human.task_description`（第 18 章 SO-ARM 推奨）を通じて読み取ります。

### 推論側

展開時、指示はライブで渡されます — 第 21 章クライアントの `--lang_instruction="Grab pens and place into pen holder."` など。文を変えればタスクが変わり、重みはそのままです。

</section>

## 19.5 観測ウィンドウとアクションウィンドウ

<section id="windows" className="section-card">
  <div className="section-title">
    <span>ウィンドウ</span>
    <h2>19.5 観測ウィンドウとアクションウィンドウ</h2>
  </div>

GR00T は**現在**の観測（画像 + 状態 + 言語）を処理し、短い未来窓をカバーする**アクションチャンク**（N1.5 は 16 ステップ）を出力します。第 14 章の ACT と同様、先頭の一部だけ開ループ実行して再観測 — 同じチャンク / ホライズンのトレードオフが、はるかに大きなモデルの中で再現されます。

</section>

## 19.6 基盤モデルと微調整

<section id="foundation" className="section-card">
  <div className="section-title">
    <span>パラダイム</span>
    <h2>19.6 基盤モデルと微調整</h2>
  </div>

### 基盤モデル

VLM バックボーンはインターネットスケールの視覚-言語データと大規模な多ロボットデータセットで事前学習されています — 「物体とは何か」「操作とはどういうものか」をすでに知った状態でやって来ます。事前学習済み GR00T N1.5-3B の重みは Hugging Face にあります：`nvidia/GR00T-N1.5-3B`。

### 微調整

あなたの SO-ARM データセットが、基盤モデルをあなたのテーブル・物体・指示表現へ適応させます：

- 全パラメータ微調整はネットワークのより多くを再訓練します（約 25GB VRAM、第 21 章）；
- 部分微調整（例：`--no-tune_diffusion_model` は DiT ヘッドを凍結）は VRAM と時間を削減し、精度を少し犠牲にします；
- LoRA / PEFT 系は小さなアダプタ層だけを訓練します。

### ゼロショット vs. 微調整

ゼロショット（微調整なし）は「もっともらしく動く」ことがありますが、あなたの特定タスクを信頼性を持って完了することはまれです — あなたのテーブルは事前学習データにありません。50〜100 件のローカルエピソードでの微調整が想定される経路です。

</section>

## 19.7 GR00T システムアーキテクチャ

<section id="architecture" className="section-card">
  <div className="section-title">
    <span>アーキテクチャ</span>
    <h2>19.7 GR00T システムアーキテクチャ</h2>
  </div>

### モデル内部のデータフロー（簡略）

```text
画像（前面・側面）──┐
状態（6 次元）─────┼─→ VLM バックボーン ─→ DiT アクションヘッド ─→ アクションチャンク（k × 6）
言語 ──────────────┘        （理解）           （デノイズ）              （サーボへ）
```

- **VLM バックボーン**が 3 つのモダリティをシーンと言示の意味的理解へ融合；
- **DiT（拡散 Transformer）ヘッド**が潜在変数を繰り返しデノイズし、首尾一貫した連続アクションチャンクへ（Flow Matching）；
- チャンクはロボット制御側へ流れ、先頭数ステップを実行して再観測します。

### GR00T 推論サーバとロボット制御クライアント

展開時、NVIDIA Isaac-GR00T スタックは 2 つのプロセスに分割されます：

**ロボット制御クライアント** — SO-ARM とカメラに接続し、観測（画像 + 状態 + 言語）をサーバへ送り、アクションチャンクを受信してサーボで実行します。公式サンプル `examples/SO-100/eval_lerobot.py` はまさにこのアームのために書かれています。

**GR00T 推論サーバ** — モデルを保持し、利用可能な GPU（ワークステーション、クラウドインスタンス、または Jetson AGX Thor の Docker イメージ）で動作し、ネットワーク越しにクライアントへ応答します。

```text
[ SO-ARM + カメラ ] ⇄ USB ⇄ [ ロボット制御クライアント ] ⇄ ネットワーク ⇄ [ GR00T 推論サーバ + GPU ]
```

### 統合チェックリスト

第 21 章の実践の前に、答えられることを確認：

1. 本体タグは？ → `new_embodiment`
2. データ設定は？ → `so100_dualcam`
3. カメラキーは？ → データセットと完全に同一
4. 指示の言い回しは？ → データセットのアノテーションと完全に同一

</section>

## 19.8 GR00T における SO-ARM の位置

<section id="soarm-in-groot" className="section-card">
  <div className="section-title">
    <span>位置</span>
    <h2>19.8 GR00T における SO-ARM の位置</h2>
  </div>

- **低価格・再現可能なデスクトップ本体** — LeRobot のリファレンスアームであることが、そのまま GR00T の微調整対象としての価値につながっています；
- **公式 SO101 微調整レシピ**でサポート（NVIDIA ブログ + Isaac-GR00T リポジトリの SO-100 サンプル）；
- **Jetson AGX Thor** でのエッジ推論展開が可能；
- そして — 第 22 章 — GR00T ツールチェーンを完全にバイパスするユーザー向けに、**SenseCraft Robotics のノーコードプラットフォーム**という道があります。

</section>

## 19.9 本章のまとめ

<section id="summary" className="section-card">
  <div className="section-title">
    <span>まとめ</span>
    <h2>19.9 本章のまとめ</h2>
  </div>

- 本体 = ロボットの身体の定義。GR00T での SO-ARM：タグ `new_embodiment`、データ設定 `so100_dualcam`；
- 状態 / アクションは固定関節順序の 6 次元。2 カメラ + 言語でモダリティ構成が完成；
- 基盤モデル + 微調整は、あなたのテーブルに対するゼロショットより優れています；
- 展開はロボット制御クライアント（アーム + カメラ）と GPU 推論サーバに分割されます。

次章で SO-ARM データセットを GR00T 微調整用に準備します。

</section>

</div>
