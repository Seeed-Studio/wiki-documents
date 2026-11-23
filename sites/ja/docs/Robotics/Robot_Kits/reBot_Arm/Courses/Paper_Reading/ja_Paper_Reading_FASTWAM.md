---
description: "Fast-WAM の詳細：メカニズム、学習、実験、および LeRobot v0.7.0 への統合範囲。"
title: "Fast-WAM: 実行時に将来動画を生成せずに将来から学習する"
hide_title: true
keywords: ["Paper Deep-Dive","Fast-WAM","World-Action Models","Video Co-Training","Direct Action Inference","LeRobot"]
slug: /robotics/paper_reading_fastwam
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
    "value": "前提知識：将来から学習することと将来を生成することの違い",
    "id": "prerequisites-learning-from-the-future-versus-generating-it",
    "level": 2
  },
  {
    "value": "概要と読み方ガイド",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "制御されたバリアントが重要な理由",
    "id": "why-the-controlled-variants-matter",
    "level": 2
  },
  {
    "value": "アーキテクチャ：行動は現在の観測のみを読む",
    "id": "architecture-actions-read-only-the-current-observation",
    "level": 2
  },
  {
    "value": "学習と推論",
    "id": "training-and-inference",
    "level": 3
  },
  {
    "value": "データ：「Embodied Pretraining なし」の意味",
    "id": "data-what-without-embodied-pretraining-means",
    "level": 2
  },
  {
    "value": "実験：将来生成を取り除くことの証拠",
    "id": "experiments-evidence-for-removing-future-generation",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-fastwam-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-fastwam-title">Fast-WAM: 実行時に将来動画を生成せずに将来から学習する</h1>
  <p className="paper-reading-lead">Fast-WAM: World Action Model はテスト時に将来を想像する必要があるのか？</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#data-what-without-embodied-pretraining-means">Video co-training</a></li>
    <li><a href="#architecture-actions-read-only-the-current-observation">Direct action inference</a></li>
    <li><a href="#experiments-evidence-for-removing-future-generation">実験</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2603.16666v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>論文を読む</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/fastwam" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Fast-WAM ドキュメント ↗</a>

**LeRobot のパラメータ**

- `--policy.type=fastwam` は学習ポリシーを選択します。学習済み重みには `--policy.path` を使用します。
- `--policy.path=lerobot/fastwam_libero_uncond_2cam224` はここで説明している LIBERO のチェックポイントを読み込みます。
- `action_horizon` は予測の長さを制御し、`n_action_steps` は再計画までに消費されるアクション数を制御し、それを超えることはできません。
- ソースをチェックアウトしたら、`pip install -e ".[fastwam,libero]"` でインストールします。完全な評価コマンドはバージョン付きガイドを参照してください。

</aside>

タオルを折るロボットは、アームの動きを選ぶ前に次の折り目の動画を生成することができます。これは、すべての制御クエリに動画のノイズ除去を追加することになります。**将来予測が役立つのは、モデルが学習中に物理的変化を学んだからなのか、それとも動作中に明示的に将来を想像するからなのか？** Fast-WAM はこれらの要因を切り分けます。

## 前提知識：将来から学習することと将来を生成することの違い

将来動画による教師あり信号は、学習中にモデルのパラメータを形作ります。将来生成は、デプロイ時に追加の計算を行います。RGB デコードを省略しても将来の潜在表現の予測は可能ですが、標準的な Fast-WAM はさらに進み、推論時には将来動画トークンを一切インスタンス化しません。

## 概要と読み方ガイド

**概要（要約）。** Fast-WAM は動画と行動を共同学習しますが、デプロイ時には現在の視覚表現から直接行動を生成します。制御された joint-denoising、video-then-action、no-video-training の各バリアントにより、教師あり信号と推論時の「想像」を切り分けます。評価された設定では、動画学習を取り除くことの方が、性能低下が大きくなります。

**読み方メモ。** これは、評価されたモデルとタスクに関する条件付きの結果です。あらゆる動的問題や分布外問題に対して将来条件付けが不要であることを示すものではなく、動画バックボーンは依然としてポリシーの一部です。

## 制御されたバリアントが重要な理由

従来の World-Action Model は、行動の前に動画を予測するか、動画と行動を同時にノイズ除去します。どちらも、学習時の動画による教師あり信号と、デプロイ時の将来生成を組み合わせています。注意機構と動画教師あり信号を共通のフレームワーク内で切り替えることで、無関係なモデル同士を比較するよりも、それぞれの効果を評価しやすくなります。

## アーキテクチャ：行動は現在の観測のみを読む

このモデルは Wan2.2-5B の video DiT、VAE、テキストエンコーダを再利用し、およそ 10 億パラメータのアクションエキスパートを追加して、全体で約 60 億パラメータとしています。構造化された MoT アテンションパターンが各ブランチを接続します。

| トークングループ | 学習時のアクセス | デプロイ時に保持？ |
| --- | --- | --- |
| クリーンな現在の観測 | 現在の視覚アンカーと言語 | はい。視覚コンテキストは 1 回だけ計算 |
| ノイズ付き将来動画 | 現在のアンカーと将来動画グループ | いいえ |
| ノイズ付きアクションチャンク | 現在のアンカー、言語、行動 | はい。反復的なアクションノイズ除去 |

行動は将来動画トークンにアテンションできず、クリーンなアンカーは他のグループを読みません。これにより、デプロイ時には消えてしまう将来情報への依存を、行動の学習から排除します。

タオルの例では、動画による教師あり信号が、角を動かすと布がどう変形するかを教えます。アクションブランチは常に、現在の布と指示からその動きを学習します。共有パラメータは、有用な構造を転移させますが、将来を行動入力として与えることはありません。

<figure className="paper-reading-figure" data-reading-figure="fastwam/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/architecture.png" alt="共同学習中の動画ブランチとアクションブランチ" loading="lazy" />
  <figcaption><strong>共同学習中の動画ブランチとアクションブランチ。</strong> 出典：Fast-WAM 論文。学習では、言語と現在の観測から将来の動画潜在とアクションチャンクを予測します。アテンションマスクが、行動が将来を読めるかどうかを決めます。両方のブランチを図示していても、それ自体は依存関係を意味しません。</figcaption>
</figure>

### 学習と推論

目的関数は、動画と行動フローの損失を組み合わせたものです：

$$
\mathcal L=\lambda_v\mathcal L_{\mathrm{video}}+\lambda_a\mathcal L_{\mathrm{action}}.
$$

動画のノイズ除去は動的表現を形作り、行動のノイズ除去はデモンストレーションを再構成します。デプロイ時には、現在の観測 → 1 回の視覚エンコーディング → 行動ノイズ除去 → 部分的な実行 → 新しい観測、という流れで動作します。32 ステップの予測ホライズンがあっても、再計画前に 32 ステップすべてを実行する必要はありません。

<figure className="paper-reading-figure" data-reading-figure="fastwam/attention-masks">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/fastwam/attention-masks.png" alt="学習と推論におけるアテンション依存関係" loading="lazy" style={{maxWidth: "380px", marginInline: "auto"}} />
  <figcaption><strong>学習と推論におけるアテンション依存関係。</strong> 出典：Fast-WAM 論文。行はクエリ、列は読み取り可能なキーです。行動は現在のフレームと行動を読みますが、将来フレームは読みません。推論時に将来トークンを取り除いても、この条件付け経路は保たれ、動画による教師あり信号と実行時の動画生成を切り分けます。</figcaption>
</figure>

## データ：「Embodied Pretraining なし」の意味

バックボーンは、事前学習済み動画重みから開始します。論文でいう embodied pretraining の不在とは、大規模なロボット行動による追加の事前学習ステージがないという意味であり、ランダム初期化という意味ではありません。

評価は、LIBERO、クリーンおよびランダム化された RoboTwin 2.0、そして実機の Galaxea R1 Lite によるタオル折りタスクを対象としています。実機タスクでは 60 時間のテレオペレーションと、モデルごとに 3 万ステップの学習を行い、成功率と完了時間の両方を報告しています。

## 実験：将来生成を取り除くことの証拠

| 共通フレームワークの手法 | LIBERO 平均 | RoboTwin 平均 |
| --- | ---: | ---: |
| Fast-WAM | 97.6% | 91.8% |
| 動画と行動の joint denoising | 98.5% | 90.6% |
| Video-then-action IDM | 98.0% | 91.3% |
| 動画の共同学習なし | 93.5% | 83.8% |

これらは、別々のベンチマークにおける論文上の成功率です。直接行動推論は、LIBERO では将来生成バリアントを下回り、RoboTwin ではわずかに上回ります。動画学習を取り除く方が一貫して大きな損失を生み、LIBERO と RoboTwin でそれぞれ 4.1 と 8.0 ポイント低下します。この証拠は、直接推論の普遍的な精度優位性ではなく、動画による教師あり信号の重要性を支持しています。

RoboTwin では、クリーン／ランダム化の各設定について、タスクごとに 100 試行を行います。試行はタスクを完了して初めて成功と見なされ、平均値は難しい個々のタスクを隠してしまう可能性があります。

折り畳みタスクでは、最終的な成功だけでは、繰り返し失敗した把持を隠してしまうことがあります。完了時間は、実行が効率的かどうかを測る指標です。報告されている約 190 ms の推論レイテンシは、著者らの計測構成に属する値であり、モータ制御の周波数ではありません。

## LeRobot への統合と結果の境界

バージョン 0.7.0 は、画像、状態、行動、指示を入力として受け取ります。カメラビューは水平方向に連結され、`image_size` と一致している必要があります。このチェックポイントは、モデルが内部で画像を再スケーリングするため、外部の視覚 `IDENTITY` 前処理を使用します。両方の変換を適用すると、正規化が二重に行われてしまいます。

ここで説明しているチェックポイントは、4 つの LIBERO スイート全体で 97.6%、99.0%、95.0%、94.0% を記録し、2,000 エピソード平均で 96.4% となります。論文中の 97.6% の平均値は、別の実験結果です。

評価パラメータフラグメントは次のとおりです：

```bash
--policy.path=lerobot/fastwam_libero_uncond_2cam224
--policy.dtype=float32
--policy.n_action_steps=10
--env.type=libero
--env.task=libero_10
--eval.n_episodes=50
```

完全な評価では、4つすべてのスイートとそれぞれのタスクを、レンダリング、グリッパー処理、シード、およびエピソード制限を揃えた状態で走査します。

## 結論

Fast-WAM は、有用な学習信号を、繰り返し発生するデプロイ時の計算から切り離します。そのマスクは将来のリークを防ぎ、制御されたバリアントは、テストされた設定において、ビデオ生成を保持するよりもビデオ学習を保持する方が大きな利点をもたらすことを示しています。タスク分布とレイテンシ条件が、その結論の適用範囲を定義します。

</div>
