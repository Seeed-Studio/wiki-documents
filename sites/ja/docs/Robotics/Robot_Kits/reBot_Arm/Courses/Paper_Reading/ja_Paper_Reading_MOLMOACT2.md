---
description: "MolmoAct2 の詳細：メカニズム、学習、実験、および LeRobot v0.7.0 への統合範囲を深掘りします。"
title: "MolmoAct2: 離散アクション学習から層ごとの連続制御へ"
hide_title: true
keywords: ["Paper Deep-Dive","MolmoAct2","VLA","Layer-Wise KV","Action Tokenization","Continuous Control","LeRobot"]
slug: /robotics/paper_reading_molmoact2
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
    "value": "前提条件：1 つのデモの 2 つの表現",
    "id": "prerequisites-two-representations-of-one-demonstration",
    "level": 2
  },
  {
    "value": "概要と読み方ガイド",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "なぜアクションを段階的に導入するのか",
    "id": "why-introduce-actions-in-stages",
    "level": 2
  },
  {
    "value": "データ：時間長は共有しつつ制御の意味は異なる",
    "id": "data-shared-duration-distinct-control-semantics",
    "level": 2
  },
  {
    "value": "離散事前学習：バックボーンにロボットアクションを教える",
    "id": "discrete-pretraining-teaching-the-backbone-robot-actions",
    "level": 2
  },
  {
    "value": "連続ポストトレーニング：全層で KV を読む",
    "id": "continuous-post-training-reading-kv-at-every-layer",
    "level": 2
  },
  {
    "value": "ターゲットリーク防止と勾配制御",
    "id": "preventing-target-leakage-and-controlling-gradients",
    "level": 3
  },
  {
    "value": "Think：変化した深度領域だけを更新する",
    "id": "think-updating-only-changed-depth-regions",
    "level": 2
  },
  {
    "value": "実験：異なる学習履歴を持つチェックポイントの比較",
    "id": "experiments-comparing-checkpoints-with-different-training-histories",
    "level": 2
  },
  {
    "value": "LeRobot への統合と結果の境界",
    "id": "lerobot-integration-and-result-boundaries",
    "level": 2
  },
  {
    "value": "結論",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-molmoact2-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-molmoact2-title">MolmoAct2: 離散アクション学習から層ごとの連続制御へ</h1>
  <p className="paper-reading-lead">MolmoAct2: 実環境デプロイのためのアクション推論モデル</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#discrete-pretraining-teaching-the-backbone-robot-actions">離散から連続へ</a></li>
    <li><a href="#continuous-post-training-reading-kv-at-every-layer">層ごとの KV</a></li>
    <li><a href="#think-updating-only-changed-depth-regions">適応的な深さ</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.02881v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>論文を読む</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/molmoact2" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot MolmoAct2 ドキュメント ↗</a>

**LeRobot パラメータ**

- `--policy.type=molmoact2 --policy.checkpoint_path=allenai/MolmoAct2` は著者のフォーマットから初期化します。
- `--policy.path=allenai/MolmoAct2-LIBERO-LeRobot` は保存済みの LeRobot チェックポイントとプロセッサを読み込みます。
- LIBERO は相対エンドエフェクタ制御で `--policy.chunk_size=10 --policy.n_action_steps=10` を使用します。
- アダプタは標準の MolmoAct2 をサポートし、適応的深さの MolmoAct2-Think 変種はサポートしません。

</aside>

ロボットは、ボウルに最も近いカップをその中に入れなければなりません。空間的な関係を理解することと、正確な動きを生成することは別の要求です。**連続制御器は、どのようにしてビジョン・ランゲージ・バックボーンにすでに存在する知識を確実に活用できるのでしょうか？**

## 前提条件：1 つのデモの 2 つの表現

離散アクショントークンにより、言語モデルは次トークン予測を通じて軌道を学習できます。連続アクションはフローマッチングのために数値制御値を保持します。これらは、逐次的なデプロイ用コントローラになることなく、同じデモを教師ありすることができます。

Attention のキーとバリュー、すなわち KV は、各層におけるコンテキストを符号化します。ネットワーク全体でそれらを読むことで、アクションエキスパートは 1 つの最終プーリング特徴以上の情報にアクセスできます。

## 概要と読み方ガイド

**概要（要約）。** MolmoAct2 は、エンボディドな理解を強化し、離散ロボットインターフェースを学習したうえで、連続フローエキスパートを追加します。複数エンボディメントのデータ、アクショントークナイザ、コード、モデルを公開し、変化しない空間領域を再利用する深度推論変種を検証します。

**読み方メモ。** 標準の MolmoAct2 と Think は、推論経路が異なります。後者の中間深度生成は、すべてのチェックポイントやバージョン管理された LeRobot アダプタが備える能力ではありません。

## なぜアクションを段階的に導入するのか

新しい状態インターフェース、アクション符号化、ランダムな連続エキスパートを同時にフィットさせることは、困難な最適化問題です。離散事前学習はまず、VLM をその慣れ親しんだ目的関数を用いてアクション認識可能にします。その後のエキスパートは、ロボット認識済みバックボーンから連続制御を学習できます。

層ごとの KV は、最終層による条件付けとは異なります。知識の絶縁はステージにも依存します。ポストトレーニングとエンボディメント特化のファインチューニングでは、勾配設定が異なります。

## データ：時間長は共有しつつ制御の意味は異なる

主なロボットソースは、両腕 YAM、SO-100/101、DROID であり、小規模なロボットデータセットやマルチモーダル例で補完されています。空間 QA、ポインティング、マルチビュー対応付け、動画理解が、エンボディドなグラウンディングを提供します。

アクションチャンクは 1 秒をカバーします：30 Hz の YAM/SO-100/101 では 30 ステップ、DROID では 15 ステップ、本論文の 10 Hz LIBERO セットアップでは 10 ステップです。アクションは幅 32 にパディングされ、マスクによって人工的な次元とタイムステップが除外されます。セットアップ／制御文字列は、絶対関節と相対エンドエフェクタ姿勢を区別します。パディングによって、それらの物理的意味が交換可能になるわけではありません。

## 離散事前学習：バックボーンにロボットアクションを教える

FAST スタイルのトークナイザは、軌道を周波数領域に変換し、係数を量子化し、2,048 トークンのアクション語彙で BPE を適用します。連続チャネルにはパーセンタイル統計を用い、グリッパは別扱いとし、離散化された状態はプロンプトに入力されます。

VLM は観測、指示、セットアップ／制御の説明、状態を読み取り、その後アクショントークンを予測します。この段階には連続エキスパートは存在しません。マルチモーダルな共同学習により、より広い視覚と言語の能力が維持されます。

## 連続ポストトレーニング：全層で KV を読む

36 層の DiT エキスパートは、バックボーンの深さと一致しています。そのブロックは、アクション自己注意、対応する VLM 層から射影された KV へのクロスアテンション、およびフィードフォワード変換を適用します。

| 経路 | カップタスクにおける役割 |
| --- | --- |
| 画像、言語、状態 → VLM | 目標のカップ、ボウル、ロボットを表現する |
| 層の KV → 射影 → クロスアテンション | アクション生成全体にわたってコンテキストを供給する |
| ノイズ付きアクション → フローエキスパート | 時間を通じて軌道を調整する |
| アクション → ポストプロセッサ | 制御単位を復元する |

デモチャンク $A$ とノイズ $\epsilon$ に対して、

$$
X_t=(1-t)\epsilon+tA,\qquad u^\star=A-\epsilon.
$$

マスク付きフロー損失により、速度予測器を学習します。ターゲット 0.6、ノイズ −0.2 の教師例では、中点は 0.2 でターゲット速度は 0.8 です。これは正規化された生成経路に沿った速度であり、モータ回転数コマンドではありません。

<figure className="paper-reading-figure" data-reading-figure="molmoact2/layerwise-kv">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/layerwise-kv.png" alt="Layer-wise backbone KV conditioning of the action expert" loading="lazy" />
  <figcaption><strong>アクションエキスパートに対する層ごとのバックボーン KV 条件付け。</strong> 出典：MolmoAct2 論文。各エキスパート層は、射影されたバックボーンのキーとバリューを読み取ります。離散教師ありと連続フローマッチングは異なる役割を担います。ターゲットアクショントークンはリークを防ぐため、連続条件付け経路からマスクされます。</figcaption>
</figure>

### ターゲットリーク防止と勾配制御

ポストトレーニングでは、離散出力と連続出力の両方を教師ありしますが、エキスパートのコンテキストからは真値アクショントークンをマスクします。そうしないと、コントローラがデプロイ時には利用できない答えから学習してしまう可能性があります。

ポストトレーニングでは KV を切り離します：フロー損失はエキスパートとアダプタを学習させ、次トークン損失は VLM を学習させます。エンボディメント特化のファインチューニングでは、その絶縁を取り除き、フローの勾配をバックボーンに流します。したがって、VLM はパイプライン全体を通して固定されているわけではありません。

## Think：変化した深度領域だけを更新する

Think はアクションの前に 10×10 の深度トークングリッドを生成します。最初のクエリで 100 個すべての位置を埋めます。後続のクエリでは、現在と前回の RGB 領域を比較し、変化したセルを再生成し、変化していないセルにはキャッシュされたコードを再利用します。

埋められた深度プレフィックスは、KV を通じてエキスパートを条件付けします。動くカップやグリッパは更新を引き起こす一方で、静的な背景は再利用されます。これらは保証されたセンサ計測ではなく予測された深度コードであり、変化検出が失敗する可能性もあります。

<figure className="paper-reading-figure" data-reading-figure="molmoact2/adaptive-depth">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/molmoact2/adaptive-depth.png" alt="Adaptive depth reasoning with reuse of static regions" loading="lazy" />
  <figcaption><strong>静的領域の再利用を伴う適応的深度推論。</strong> 出典：MolmoAct2 論文。観測が変化した箇所では深度コードが更新され、KV 接続を通じてアクションを条件付ける前に反映されます。これは Think 変種を示しており、通常のポリシーや LeRobot 統合が自動的にこの推論を行うわけではありません。</figcaption>
</figure>

## 実験：異なる学習履歴を持つチェックポイントの比較

バージョン管理された LeRobot の結果は、著者の LIBERO チェックポイントから開始し、8 枚の H100 GPU で GPU あたりバッチ 32 の設定で、さらに 10k ステップのファインチューニングを行います。

| LIBERO スイート | 元の結果 | 追加学習済み LeRobot チェックポイント |
| --- | ---: | ---: |
| Spatial | 97.8% | 98.4% |
| Object | 100.0% | 100.0% |
| Goal | 97.8% | 98.0% |
| Long / 10 | 93.2% | 96.6% |
| Mean | 97.20% | 98.25% |

これらはタスク完了ベースの成功率です。1.05 ポイントの差は、学習が変更されているため、フォーマット変換だけに起因するとは言えません。最大の差は long スイートで発生します。

Embodied QA、深度推論、およびクローズドループ動作は、それぞれ異なる能力をテストします。正しいターゲットの特定は、必ずしも把持の成功を保証せず、Think のジオメトリ生成コストは通常のアクション推論とは別に測定する必要があります。

## LeRobot の統合と結果の境界

バージョン 0.7.0 は標準的な学習と評価をサポートします。元の HF 重みには `checkpoint_path` を、保存された LeRobot ポリシーディレクトリには `policy.path` を使用します。

LIBERO では、公開されている `norm_stats.json`、カメラ順序、オーグメンテーション、グリッパー処理、および制御モードを一致させてください。近似したデータセット分位点は、著者らの統計と完全には一致しません。SO-100/101 の関節符号とゼロオフセットには物理フレーム変換も必要であり、パディングではそれを行えません。

```bash
--policy.type=molmoact2
--policy.checkpoint_path=allenai/MolmoAct2
--policy.action_mode=continuous
--policy.norm_tag=libero
--policy.chunk_size=10
--policy.n_action_steps=10
```

これらは、対応するデータ、統計、および画像設定を必要とする学習用フラグメントです。Think については著者らの実装を通じて調査してください。通常のポリシー名だけでは、このバージョンでは有効になりません。

## 結論

MolmoAct2 はまず離散的なロボットインターフェースを確立し、その後、層ごとの KV を通じて視覚と言語のコンテキストを連続アクションへ転移します。ターゲットマスキングとステージ固有の勾配が、どのように学習するかを説明します。デプロイ時には、標準モデルと Think モデル、そして元のアダプターチェックポイントと追加学習済みアダプターチェックポイントを区別する必要があります。

</div>
