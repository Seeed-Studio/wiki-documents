---
description: "FineART-VLA の詳細：メカニズム、学習、実験、および LeRobot v0.7.0 への統合範囲を深掘りします。"
title: "FineART-VLA: 長期的なゴールをサブタスクを通じて両腕操作アクションへ結びつける"
hide_title: true
keywords: ["Paper Deep-Dive","FineART-VLA","VLA","Subtask Prediction","Bimanual Manipulation","Knowledge Insulation","LeRobot"]
slug: /robotics/paper_reading_fineart_vla
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "前提知識：3 つの時間スケールの制御",
    "id": "prerequisites-three-timescales-of-control",
    "level": 2
  },
  {
    "value": "概要と読み方ガイド",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "なぜ長いデモにはフェーズラベルが必要なのか",
    "id": "why-long-demonstrations-need-phase-labels",
    "level": 2
  },
  {
    "value": "データ：再利用可能なスキルと接触が多いタスクをカバーする",
    "id": "data-covering-reusable-skills-and-contact-rich-tasks",
    "level": 2
  },
  {
    "value": "アーキテクチャ：サブタスクを予測し、そのアクションを生成する",
    "id": "architecture-predict-a-subtask-then-generate-its-actions",
    "level": 2
  },
  {
    "value": "3 つの目的関数と Knowledge Insulation",
    "id": "three-objectives-and-knowledge-insulation",
    "level": 3
  },
  {
    "value": "学習と実行：2 つの学習された決定を整合させる",
    "id": "training-and-execution-aligning-two-learned-decisions",
    "level": 2
  },
  {
    "value": "実験：何がどの条件で改善するのか",
    "id": "experiments-what-improves-and-under-which-conditions",
    "level": 2
  },
  {
    "value": "初期条件が一致している場合",
    "id": "matched-initial-conditions",
    "level": 3
  },
  {
    "value": "空間語と長期的ガイダンス",
    "id": "spatial-words-and-long-horizon-guidance",
    "level": 3
  },
  {
    "value": "ロングテールデータとエンボディメント転移",
    "id": "long-tail-data-and-embodiment-transfer",
    "level": 3
  },
  {
    "value": "LeRobot への統合：言語プランナーを保持する",
    "id": "lerobot-integration-preserving-the-language-planner",
    "level": 2
  },
  {
    "value": "結論",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-fineart_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-fineart_vla-title">FineART-VLA: 長期的なゴールをサブタスクを通じて両腕操作アクションへ結びつける</h1>
  <p className="paper-reading-lead">FineART: 両腕操作のための Fine-Grained Annotated Robotic Trajectory Dataset と Vision-Language-Action モデル</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-predict-a-subtask-then-generate-its-actions">サブタスク予測</a></li>
    <li><a href="#three-objectives-and-knowledge-insulation">Knowledge insulation</a></li>
    <li><a href="#experiments-what-improves-and-under-which-conditions">実験</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2609.36416v3" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>論文を読む</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fineart_vla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot FineART-VLA ドキュメント ↗</a>

**LeRobot のパラメータ**

- `--policy.path=lerobot/fineart_vla_base` は FineART の中間チェックポイントから適応を開始します。
- `--policy.type=fineart_vla --policy.pretrained_path=lerobot/pi05_base` は π0.5 の重みから別の学習ルートを開始します。
- 言語プランニングには時間的に整合した `subtask` アノテーションが必要です。エピソードレベルのタスク文字列だけでは、その教師信号を与えられません。
- `lerobot-rollout` はインタラクティブな実行を管理し、`--autosteer_interval_s=3` はプランニングクエリの間隔を秒で設定します。完全なハードウェア構成についてはバージョン付きガイドを参照してください。

</aside>

朝食を用意するロボットは、カップを置き、カトラリーを並べ、食べ物を移動させなければなりません。全体の指示は数分間変わらない一方で、必要な動きは各ステージが完了するたびに変化します。**もし各フレームが全体のゴールしか持たないとしたら、ポリシーは今どのステップを実行すべきかをどこから学習するのでしょうか？**

## 前提知識：3 つの時間スケールの制御

ゴールは最終結果を指定し、サブタスクは現在の操作を指定し、アクションチャンクは複数の制御ティックにわたる数値コマンドを指定します。FineART はサブタスク指示をデモンストレーションのタイムラインと整合させます。

| 朝食の例 | 意味 | 学習上の役割 |
| --- | --- | --- |
| 朝食を用意する | 全体のゴール | サブタスク予測の条件付け |
| カップを棚に置く | 現在の操作 | 言語ターゲットとアクションの条件 |
| 関節とグリッパのターゲット | 物理的な動き | 連続値および離散値アクションの教師信号 |

サブタスクの中にも、依然として複数の動きが含まれます。カップを置くには、到達、把持、運搬、解放が含まれます。このアノテーションは、すべてのモータティックを言葉で記述することなく、制御問題の範囲を狭めます。

## 概要と読み方ガイド

**概要（簡略版）。** FineART は 40,543 エピソード、1,718 時間、151 タスク、533,913 サブタスクから構成されます。FineART-VLA は、次サブタスク予測とサブタスク条件付き連続制御を備えた π0.5 の拡張です。実験では、アノテーションの粒度、サブタスク学習、Knowledge Insulation、異なるエンボディメントへの適応を個別に検証します。

**読み方メモ。** デモンストレーションの増加、フェーズラベル、勾配ルーティングは、それぞれ異なる目的を持ちます。統制された比較では、ある要因に改善を帰属する前に、他の要因を固定しておく必要があります。

## なぜ長いデモにはフェーズラベルが必要なのか

似た画像が異なるタスクフェーズに属することもあれば、同じ動きが異なるゴールに奉仕することもあります。エピソード単位の指示だけでは、そうした違いは暗黙のままです。時間的に整合したサブタスクは、現在の操作に対する直接的な教師信号を提供します。

π0.5 の直接アクションインターフェースと比べると、FineART-VLA は言語生成パスを追加しています。別個のプランナーとコントローラと比べると、1 つのポリシーの中で言語とアクションを学習し、人間が指定したサブタスクも受け付けます。動画全体に対する長いキャプションでは、個々の操作に整合したラベルの代わりにはなりません。

## データ：再利用可能なスキルと接触が多いタスクをカバーする

FineART は、繰り返されるピック・アンド・プレースや意味的な整理に、布操作、工具の組み立て、ケーブル配線、精密な挿入といったロングテールを組み合わせています。これらのタスクは、ポリシーをさまざまな接触条件と精度要件にさらします。

タオル折りでは、ラベルは実際の把持、移動、配置の順序に従わなければなりません。境界が誤っていると、1 つの指示が別の操作のアクションと組み合わされ、コントローラの学習条件を直接弱めてしまいます。

中間学習では、タスクはそのフレーム数 $n_i$ に対して重み $n_i^{0.5}$ に比例してサンプリングされます。説明用の例では、100 フレームと 400 フレームのタスクは、それぞれ 10 と 20 の重みを受け取り、生の 1:4 ではなく 1:2 のサンプリング比になります。

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-annotations">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-annotations.png" alt="タスクとサブタスクの時間的整合" loading="lazy" />
  <figcaption><strong>タスクとサブタスクの時間的整合。</strong> 出典：FineART 論文。1 つの梱包タスクが長さの異なるフェーズに分割されており、サブタスクラベルに時間的境界が必要な理由を示しています。表示されている名前は説明用のカテゴリであり、データセットのアノテーションそのものではありません。</figcaption>
</figure>

## アーキテクチャ：サブタスクを予測し、そのアクションを生成する

論文の ALOHA 構成では、オーバーヘッドビューと 2 つの手首ビュー、14 次元の関節／グリッパ状態、および 14 次元アクションの 50 ステップチャンクを使用します。ビジョン・ランゲージのバックボーンは、SigLIP と Gemma を、別個の Gemma スタイルのアクションエキスパートと組み合わせています。

| パス | 入力 | 計算 | 出力 |
| --- | --- | --- | --- |
| サブタスクプランニング | 観測と全体ゴール | 自回帰的な言語生成 | 低レベルの指示 |
| 離散アクション学習 | 観測とサブタスク | FAST トークン予測 | バックボーンに対するアクションの教師信号 |
| 連続制御 | 観測、状態、サブタスク、およびノイズ付きアクション | Flow-matching アクションエキスパート | 実行可能なアクションチャンク |

プランナーは「カップを棚に置く」のような文を生成し、その指示に従って複数回のアクション呼び出しが続きます。定期的なプランニングクエリは、新しい観測と元の高レベルゴールを用いて、アクティブなサブタスクを推論します。ランタイムはサブタスクの完了を検出せず、クエリ間隔は設定可能です。プランニングとアクション生成は、異なるレートで動作できます。

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/teaching-three-timescales-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/fineart-three-timescales-en-v2.png" alt="3 つの時間スケール：高レベルゴール、サブタスク、連続アクション" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>3 つの時間スケール：高レベルゴール、サブタスク、連続アクション。</strong> AI 生成の教育用イラスト。単一のポリシーが、自律的なサブタスク推論（System 2）と連続アクション実行（System 1）をサポートします。ランタイムは、高レベルゴールと現在の観測から定期的にサブタスクをクエリし、サブタスクの完了は検出しません。1 つのサブタスクが複数のアクションチャンクを導くことができます。観測にはロボット状態も含まれますが、見やすさのためここでは省略しています。名前付きの動作フェーズは軌道を示し、実行可能な出力は連続値です。</figcaption>
</figure>

### 3 つの目的関数と Knowledge Insulation

学習の目的関数は次のとおりです。

$$
\mathcal L=10\mathcal L_{\mathrm{flow}}+\mathcal L_{\mathrm{FAST}}+\lambda_{\mathrm{text}}\mathcal L_{\mathrm{text}}.
$$

サブタスク学習を有効にすると、サンプルの 30% はゴールからサブタスクへの予測を学習し、70% はサブタスク条件付きアクションを学習します。これは実行時の割り当てではなく、サンプリング比率です。

知識インスレーションは、アクションエキスパートが読み取るバックボーンのキーとバリューを切り離します。エキスパートは依然として視覚と言語のコンテキストを使用しますが、連続アクション損失はその経路を通じてバックボーンを更新しません。テキスト損失と離散アクション損失は引き続きバックボーンを学習させるため、バックボーンが恒久的に凍結されるわけではありません。

## 学習と実行：2つの学習された決定の整合

デモンストレーションは学習中に正しいサブタスクを与えますが、デプロイ時には通常生成されたサブタスクを用います。コントローラはサブタスクに従わなければならず、プランナは現在のフェーズを認識しなければなりません。どちらか一方の能力だけを学習しても、もう一方の問題は未解決のままです。

1つの制御サイクルは画像と状態を読み取り、サブタスクを問い合わせるか保持し、アクションを予測し、計画の一部を実行し、再び観測します。人間によるサブタスク入力は、計画の失敗と動作の失敗を区別するのに役立ちます。50ステップの予測ホライズンと、実行時のプランニング間隔は別々の設定です。

## 実験：何がどの条件で改善するか

### 初期条件の一致

ALOHA の評価では、各タスクについて規定された初期配置で25ロールアウトを行います。成功率は完全な達成を数え、進捗率は完了したステージ数を測定します。4ステージのカップ配置の例では、到達、把持、搬送まで成功し、最終的な配置に失敗した場合、進捗は75%で成功は0%と評価されます。

2×2 のアブレーションでは、サブタスク学習と知識インスレーションを独立に切り替えます。両者の組み合わせは、分布外一般化を最も強く支えますが、個々のタスクの挙動は異なります。単純な棚への配置では、サブタスク学習なしのインスレーションが、両方を有効にした場合よりも高い性能を示します。より曖昧なタスクでは、フェーズの教師あり信号が有益な場合があります。

<figure className="paper-reading-figure" data-reading-figure="fineart_vla/subtask-insulation-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fineart_vla/subtask-insulation-ablation.png" alt="Subtask training and knowledge-insulation ablation" loading="lazy" />
  <figcaption><strong>サブタスク学習と知識インスレーションのアブレーション。</strong> 出典：FineART 論文。濃いバーは成功率、淡いバーは進捗率を示します。両方のメカニズムを組み合わせることは、分布外グループで最も効果があります。各タスク25試行、各レジーム50試行、全体で150試行であり、レジーム平均はすべてのタスクを代表するわけではありません。</figcaption>
</figure>

### 空間語と長ホライズンのガイダンス

ドーナツを左・中央・右のいずれかのビンに置くタスクで、両条件ともインスレーションを無効にした場合、サブタスク学習により成功率は各25試行で32%から100%に上昇します。サブタスク学習なしの17件の失敗はすべて、誤ったビンを選択しています。これは、空間的な言語がターゲット選択を変えるかどうかを特に検証するものです。

朝食タスクは、見慣れたサブタスクを未観測の完全なシーケンスへと再構成します。ステップごとの人間のガイダンスにより、成功率は16%から76%に上昇します。この結果には人間のガイダンスが含まれており、完全自律的なプランニングを測定しているわけではありません。

### ロングテールデータとエンボディメント転移

接触が多いロングテール部分を除去しつつ学習ステップ数を固定すると、そのアブレーション設定では全体の成功率が24.7%から14.0%に低下します。これらの数値は、その制御された比較条件に属するものであり、別の実験における最良構成の結果ではありません。

ALOHA から YAM への研究では、YAM への適応後のデータ効率とタスク構成を測定します。エンボディメントをまたぐ転移には、依然として互換性のあるターゲット制御インターフェースと適応用データが必要です。

## LeRobot への統合：言語プランナの保持

バージョン 0.7.0 は FineART-VLA の学習、テキストクエリ、アクション実行をサポートします。画像、状態、アクション、タスクに加えて、選択したレシピは `language_persistent` と `language_events` にターゲットを持つ必要があります。デフォルトのレシピは連続したサブタスクタイムラインを使用します。メモリと VQA には、それぞれ専用のアノテーションと実行時サポートが必要です。

チェックポイントのレシピ、アクショントークナイザ、プロセッサを保持し、そのうえでカメラ名、アクション統計量、状態次元をターゲットロボットに合わせてください。π0.5 ポリシーの名前だけを変更しても、論文のプランナは再現されません。

以下は学習パラメータの断片であり、実際のデータセットと出力設定は別途指定してください：

```bash
--policy.path=lerobot/fineart_vla_base
--policy.dtype=bfloat16
--policy.gradient_checkpointing=true
--policy.tokenizer_max_length=256
```

これらの統合設定だけでは、論文の評価プロトコルを再現することはできません。

## 結論

FineART-VLA は、全体目標、フェーズ言語、連続アクションを1つの学習パイプラインで結び付けます。高密度ラベルは各アクションセグメントが何を達成するかを説明し、生成されたサブタスクは介入ポイントを提供し、知識インスレーションはバックボーン能力の保持に寄与します。その最も強い証拠は対応するアブレーションから得られますが、自律行動は依然としてフェーズ認識、精密な実行、ターゲットエンボディメントのデータに依存します。

</div>
