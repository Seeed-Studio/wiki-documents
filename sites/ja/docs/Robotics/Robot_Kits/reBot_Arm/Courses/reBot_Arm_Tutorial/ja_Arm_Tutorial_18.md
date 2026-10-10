---
description: Seeed Physical AI Beginner's Course の第18章 — マルチモーダル学習と VLA の基礎：Vision/Language/Action、VLM と VLA の違い、ACT と VLA の違い、言語条件付きタスク、単一タスク vs マルチタスク vs 汎化、連続アクション vs アクショントークン、そして VLA の能力と限界。
title: 第18章 - マルチモーダル学習と VLA の基礎
hide_title: true
keywords:
  - reBot
  - VLA
  - VLM
  - GR00T
  - Multimodal
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_18
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-24
  author: ZhuYaoHui
createdAt: '2026-09-24'
updatedAt: '2026-09-28'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_18/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 4 · 第18章 · 理論</span>
    <h2>18. マルチモーダル学習と VLA の基礎</h2>
    <p>
      Seeed Physical AI Beginner's Course の第18章 — Vision/Language/Action、
      VLM と VLA の違い、ACT と VLA の違い、言語条件付きタスク、単一タスク vs マルチタスク vs
      汎化、連続アクション vs アクショントークン、そして VLA の能力と限界について解説します。
    </p>
    <div className="hero-actions">
      <a href="#VLM-と-VLA-の違い">VLM vs VLA</a>
      <a href="#ACT-と-VLA-の違い">ACT vs VLA</a>
      <a href="#能力">Capabilities</a>
    </div>
  </div>
</section>

<section className="section-card">
  <p>前の章では、reBot Arm 上で <strong>ACT (Action Chunking with Transformers)</strong> のようなポリシーを用いて、「画像を見て関節アクションを出力する」模倣学習を行いました。このような手法は通常、<strong>単一タスク</strong> 用に学習されます。つまり、モデルは「赤いキューブを箱に入れる」という 1 つの振る舞いだけを学習し、タスクを切り替えるにはデータの再収集と再学習が必要になります。</p>

  <p>本章では、<strong>VLA (Vision-Language-Action)</strong> の中核となる考え方を紹介します。ロボットが単に「見る」だけでなく、自然言語の指示を「理解」し、複数のタスク間で 1 つのポリシーネットワークを共有できるようにするというものです。</p>

  <div className="image-frame">
    <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-01.png" alt="VLA overview" />
  </div>
</section>

## 18.1 マルチモーダルモデル

<section id="multimodal" className="section-card">
  <div className="section-title">
    <span>Multimodal</span>
    <h2>18.1 マルチモーダルモデルとは？</h2>
  </div>

マルチモーダルモデルは、画像、テキスト、ロボットの状態といった複数種類の情報を 1 つに融合し、統一された意思決定を行います。VLA の文脈では、以下の 3 つのモダリティを組み合わせてロボットアクションへとデコードします。

</section>

## 18.2 Vision、Language、Action

<section id="vla-modalities" className="section-card">
  <div className="section-title">
    <span>Modalities</span>
    <h2>18.2 Vision、Language、Action</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-02.png" alt="Vision, language, and action" />
</div>

VLA フレームワークでは、3 つのモダリティそれぞれに明確な役割分担があります。

| モダリティ | 意味 | reBot Arm における典型的なソース |
| :--- | :--- | :--- |
| **Vision** | 外部カメラや手首カメラで取得した RGB 画像 | 前方カメラ、手首の RealSense / USB カメラ |
| **Language** | タスクの自然言語による記述 | "Put the screwdriver into the toolbox" |
| **Action** | ロボットが実行すべき制御コマンド | 各関節の目標角度、グリッパの開閉幅 |

**State** は通常、Action とペアで現れます。State は「ロボットが今どこにいるか」を表し、Action は「次にどこへ行くか」を表します。LeRobot のデータセットでは、`observation.state` と `action` フィールドに保存され、GR00T ではさらに `meta/modality.json` を通じて `single_arm` や `gripper` といったサブキーに分割されます。

VLA と純粋な Vision ベースのポリシーとの大きな違いは、**言語が条件変数になる** ことです。学習時には、各デモ軌道がタスク記述と結び付けられます。推論時には、ユーザーはモデルの重みを変えずに（データ分布の範囲内で）指示テキストだけを変更すればよいのです。

</section>

## 18.3 VLM と VLA の違い

<section id="vlm-vla" className="section-card">
  <div className="section-title">
    <span>VLM vs VLA</span>
    <h2>18.3 VLM と VLA の違い</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-03.png" alt="VLM vs VLA" />
</div>

| 観点 | VLM (Vision-Language Model) | VLA (Vision-Language-Action) |
| :--- | :--- | :--- |
| 出力 | テキスト、記述、推論結果 | **ロボットのアクションシーケンス** |
| 典型的な用途 | 画像 QA、シーン理解、キャプション生成 | 把持、配置、ドアの開閉などのマニピュレーション |
| 代表的なモデル | LLaVA、Qwen-VL、Cosmos-Reason2 | GR00T、pi0、OpenVLA |
| ロボットとの関係 | 計画立案を支援できるが、モーターを直接駆動しない | 制御コマンドをエンドツーエンドで出力する |

簡単に言えば、**VLM は「世界を理解して語る」役割、VLA は「世界を理解して行動する」役割** を担っていると考えられます。

Isaac GR00T N1.7 はアーキテクチャ的に VLM の能力を再利用しています。バックボーンは **Cosmos-Reason2-2B**（Qwen3-VL アーキテクチャに基づき、N1.6 の Eagle バックボーンを置き換えたもの）で、画像と言語のエンコードを担当し、その後段に **Diffusion Transformer (DiT) アクションヘッド** を接続して、意味表現を連続アクションチャンクへとデコードします。したがって GR00T は VLA であると同時に、強力な VLM 表現能力も内包しています。

</section>

## 18.4 ACT と VLA の違い

<section id="act-vla" className="section-card">
  <div className="section-title">
    <span>ACT vs VLA</span>
    <h2>18.4 ACT と VLA の違い</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-04.png" alt="ACT vs VLA" />
</div>

前の章で登場した ACT と、本章の VLA はどちらも模倣学習（Behavior Cloning）ファミリーに属しますが、設計目標は異なります。

| 観点 | ACT | VLA（GR00T を例とする） |
| :--- | :--- | :--- |
| タスク条件 | 通常は **言語なし**、暗黙の単一タスク | **言語 + Vision**、明示的なマルチタスク |
| モデルサイズ | 小さい（数千万パラメータ規模） | 大きい（数十億パラメータの基盤モデル） |
| 学習方法 | ゼロから学習、または軽いファインチューニング | 基盤モデルの事前学習 + 下流タスクのファインチューニング |
| アクション表現 | アクションチャンク | アクションチャンク + Flow Matching によるノイズ除去 |
| 汎化性能 | 分布内では良好だが、タスク切り替え時は再学習が必要 | 言語条件付けによりゼロショット／少数ショット転移をサポート |
| LeRobot のポリシー種別 | `act` | `groot` |

ACT の中核技術は **Action Chunking** です。これは、逐次推論による誤差の蓄積を減らすために、複数ステップ先のアクションをまとめて予測するというものです。GR00T もアクションチャンクを予測しますが、ウィンドウ長はバージョンによって異なります。

- **N1.5 / N1.6:** `action_horizon = 16`
- **N1.7:** `action_horizon` が 16 から **40** に拡張され、それに伴い事前学習された汎用状態／アクション空間の最大次元も拡張されます（reBot では実際には 7 次元しか使わず、残りの次元は自動的にゼロ埋めされます）
- **LeRobot `groot` ポリシー:** ソースのデフォルトは `chunk_size=50`, `n_action_steps=50`

このチュートリアルでは、公式の N1.7 ファインチューニング例に従い、学習時に **`chunk_size=40`** を使用して事前学習済みのアクションウィンドウと整合させます。16 にこだわらないでください。ウィンドウが一致しないとファインチューニングの性能が低下します。`action_horizon` は学習時に Diffusion ヘッドへ書き込まれ、推論時に任意に拡大することはできません。

**移行パス：** すでに reBot Arm 用の ACT データセット（LeRobot v2 形式）を持っている場合、第20章では言語アノテーションとモダリティ設定を追加するだけで GR00T のファインチューニングに利用でき、すべてのデモを取り直す必要はありません。

</section>

## 18.5 言語条件付きロボットタスク

<section id="language-conditioned" className="section-card">
  <div className="section-title">
    <span>Language</span>
    <h2>18.5 言語条件付きロボットタスク</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-05.png" alt="Language-conditioned robot tasks" />
</div>

言語条件付きタスクの標準的な形は次のとおりです。

```text
Input: image I_t + language instruction L + current state S_t
Output: actions A_{t:t+H} (action chunk for the next H steps)
```

**指示の粒度** はさまざまです。

- **タスクレベル:** 「赤いキューブを青い箱に入れる」（軌道全体で共有される 1 文）
- **サブゴールレベル:** 「まず物体に近づく」->「次にグリッパを閉じる」（区間ごとのアノテーション。上級シナリオ）
- **制約レベル:** 「そっと置く」「障害物を避ける」（アクションの実行方法を修飾する）

LeRobot のデータセットでは、言語は通常 `meta/tasks.jsonl` または `annotation` フィールドに記述されます。GR00T は `modality.json` 内の `annotation` キーを通じてこれを読み込み、よく使われる形は次の 2 つです。

| キー名 | 典型的なデータセット | reBot 推奨 |
| :--- | :--- | :--- |
| `human.task_description` | SO-100、cube_to_bowl などのシンプルなデスクトップタスク | **推奨**：第20章の例と同じ形式 |
| `human.action.task_description` | LIBERO、SimplerEnv などのシミュレーションベンチマーク | これらのベンチマーク由来のデータのみで使用 |

どちらのキーも有効ですが、データセット内の実際のフィールド名と一致している必要があります。学習と推論の間で混在させないでください。

**実践的なアドバイス（reBot Arm 向け）：**

1. 各デモを記録する際は、そのタスクを中国語または英語で **短く、動詞から始まる 1 文** で記述します。
2. 類似タスクでは表現をそろえます。例えば「put X on Y」で統一するなどです。
3. 1 つのデータポイントに複数の言い回しを対応させるのは避けてください。特に初期のファインチューニング段階では、表現が一貫しているほど望ましいです。

</section>

## 18.6 単一タスク、マルチタスク、そして汎化

<section id="generalization-levels" className="section-card">
  <div className="section-title">
    <span>Generalization</span>
    <h2>18.6 単一タスク、マルチタスク、そして汎化</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-06.png" alt="Single-task, multi-task, and generalization" />
</div>

| トレーニングパラダイム | 説明 | 適したシナリオ |
| :--- | :--- | :--- |
| **Single-task** | 1つのスキルだけを学習する | ACT のデフォルト；データが少なく、目的が明確な場合 |
| **Multi-task** | 同じモデルが複数のスキルを学習し、言語で区別する | VLA のファインチューニング；デスクトップの片付け、仕分けなど |
| **Cross-embodiment generalization** | 異なるロボットが基盤モデルを共有する | GR00T の事前学習；`embodiment_tag` によって適応 |

VLA における「汎化」にはいくつかのレベルがあります — 混同しないでください：

1. **同じタスクで新しい初期姿勢：** キューブの位置が変わっても把持できる — ACT でも通常は可能です。
2. **新しい物体、新しい容器：** 視覚的な汎化に依存 — 学習データに十分な多様性が必要です。
3. **新しい言語指示の組み合わせ：** 「A を B の上に置く」が未学習でも、文のパターンが馴染みである — これは VLA の言語条件付けの強みです。
4. **新しいロボットエンボディメント：** アームを切り替えても利用可能 — GR00T のエンボディメント射影層と少量のファインチューニングデータが必要です。

reBot Arm ユーザーにとって現実的な期待値は：**ファインチューニング後、すでに収集済みの複数の言語タスクの間で切り替えられる**というものです。まったく新しい物体や、まったく新しい文パターンに対しては、追加のデモデータが依然として必要です。

</section>

## 18.7 連続アクションとアクショントークン

<section id="action-representations" className="section-card">
  <div className="section-title">
    <span>アクション空間</span>
    <h2>18.7 連続アクションとアクショントークン</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-07.png" alt="Continuous actions and action tokens" />
</div>

ロボット制御コマンドには、主流となる表現が 2 種類あります：

### 連続アクション

浮動小数点ベクトルを直接出力します。例：6 つの関節角度 + 1 つのグリッパー開閉値：

```python
action = [q1, q2, q3, q4, q5, q6, gripper]   # shape: (7,)
```

- **利点：** 高精度で、実際のモーターインターフェースと整合的。
- **欠点：** 高次元空間での回帰が難しい。
- **GR00T の採用方式：** DiT + Flow Matching により連続空間でノイズ除去し、アクションチャンクを出力。

### アクショントークン（離散化アクション）

連続値を離散シンボルに量子化し、言語モデルが次のトークンを予測するように扱います：

```text
action_tokens = [tok_42, tok_17, tok_89, ...]
```

- **利点：** 自回帰型 LLM アーキテクチャを再利用できる；pi0-FAST など一部の VLA で採用。
- **欠点：** 量子化誤差が生じ、語彙設計が複雑。

**相対アクション vs. 絶対アクション：**

1. **GR00T N1.7 の事前学習の中核は Relative EEF（相対エンドエフェクタ）アクション空間です**：アクションは、関節角度の増分ではなく、**現在のエンドエフェクタ姿勢**に対するデカルト増分として表現されます。エンドエフェクタの増分は、異なるロボット間（さらには人間の動画でも）で意味がより一貫しており、これが N1.7 のクロスエンボディメント汎化の鍵となります。公式コードではアクショングループごとにこれを設定しており、`eef_9d` は相対エンドエフェクタ、`joint_position` は相対関節、`gripper_position` は絶対値のままです。
2. **LeRobot の `--policy.use_relative_actions=true`** はフレームワークレベルのスイッチであり、関節次元に対して `action - state` の相対変換を適用します。これは論文中の Relative EEF と**同じではなく**、N1.7 の「デフォルト推奨」でもありません。reBot Arm が関節空間（`NON_EEF`）で動作する場合、このスイッチはあくまで任意の LeRobot 前処理ステップに過ぎず、「GR00T の事前学習設計と一貫している」と表現しないでください。
3. グリッパーなどの非関節量は、絶対制御を維持するために一般的に `relative_exclude_joints` を使用します。相対関節軌道はよりスムーズになりますが、長期実行ではドリフトする可能性があります。

</section>

## 18.8 VLA の能力と限界

<section id="capabilities" className="section-card">
  <div className="section-title">
    <span>能力</span>
    <h2>18.8 VLA の能力と限界</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-18/ch18-08.png" alt="Capabilities and limitations of VLA" />
</div>

### 能力

- **言語駆動：** 1 つのモデルで多くのタスクを扱い、指示を変えることで振る舞いを切り替えられます。
- **視覚的ロバスト性：** 大規模事前学習により、小規模な ACT より優れたシーン理解を実現します。
- **タスク間転移：** 類似した文パターンや類似した物体間で表現を共有できます。
- **アクションチャンク予測：** 1 回の推論で複数ステップを出力し、リアルタイム制御（RTC 推論ポリシー）に適しています。

### 限界

- **高い計算資源要求：** N1.7-3B は**ファインチューニングに 40 GB 以上の VRAM を推奨**します（H100 / L40；プロジェクタ + DiT ヘッドのみを学習してもピークは約 35 GB；公式のシミュレーション・ファインチューニングチュートリアルでは 48 GB 以上が必要）。**推論**には 16 GB 以上で十分です（RTX 4090 で推論可能）。24 GB カードでのフルファインチューニングは、LoRA / PEFT などの効率的なファインチューニングを使わない限り、基本的に現実的ではありません。
- **より複雑なデータ形式：** 標準的な LeRobot フィールドに加えて、`modality.json` とエンボディメントタグが必要です。
- **万能薬ではない：** 学習セットでカバーされていない物体、指示、作業台レイアウトでは失敗する可能性があります。
- **レイテンシ：** 大規模モデルの推論は ACT より遅いため、`n_action_steps` と RTC パラメータを適切に設定する必要があります。
- **Sim-to-real ギャップ：** 事前学習データはヒューマノイド／特定プラットフォームが中心であり、デスクトップアームには十分なファインチューニングが必要です。

### ACT を選ぶべきとき、VLA を選ぶべきとき？

| シナリオ | 推奨 |
| :--- | :--- |
| 単一の反復タスク、エッジデバイス、低レイテンシ | ACT |
| マルチタスク、言語インタラクション、GPU とアノテーションに投資する意思がある | VLA / GR00T |
| すでに ACT データがあり、マルチタスクへ拡張したい | 既存の LeRobot データに言語を追加 -> GR00T ファインチューニング |

</section>

## 18.9 章のまとめ

<section id="summary" className="section-card">
  <div className="section-title">
    <span>まとめ</span>
    <h2>18.9 章のまとめ</h2>
  </div>

- マルチモーダルモデルは、視覚・言語・状態を統合して意思決定を行います。
- VLA は VLM の上にアクション出力を追加し、言語条件付きマニピュレーションをサポートします。
- ACT は軽量な単一タスク向けソリューションであり、GR00T は大規模事前学習 + ファインチューニングによる VLA ソリューションです。
- N1.7 の事前学習は Relative EEF と `action_horizon=40` を使用しており、LeRobot における関節相対アクションは別個の任意の前処理ステップです — この 2 つを混同しないでください。
- 次の章では、一般的な VLA を**この特定のエンボディメントである reBot Arm にどのように適用するか**を紹介します。

</section>

</div>
