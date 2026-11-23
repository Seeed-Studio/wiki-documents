---
description: "Cosmos 3 を徹底解説：メカニズム、学習、実験、そして LeRobot v0.7.0 との統合範囲。"
title: "Cosmos 3：オムニモーダル世界モデルから動画・行動の統合ポリシーへ"
hide_title: true
keywords: ["Paper Deep-Dive","Cosmos 3","Omnimodal World Models","MoT","Joint Video-Action Prediction","LeRobot"]
slug: /robotics/paper_reading_cosmos3
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
    "value": "前提知識：3 つのアクションモード",
    "id": "prerequisites-three-action-modes",
    "level": 2
  },
  {
    "value": "概要と読み方ガイド",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "アーキテクチャ：理解パスと生成パス",
    "id": "architecture-understanding-and-generation-paths",
    "level": 2
  },
  {
    "value": "アクション：共有ジオメトリとドメイン固有インターフェース",
    "id": "actions-shared-geometry-with-domain-specific-interfaces",
    "level": 2
  },
  {
    "value": "学習：1 つの軌道の 3 つの使い方",
    "id": "training-three-uses-of-one-trajectory",
    "level": 2
  },
  {
    "value": "ループを閉じる",
    "id": "closing-the-loop",
    "level": 3
  },
  {
    "value": "実験：指示の具体性と初期化",
    "id": "experiments-instruction-specificity-and-initialization",
    "level": 2
  },
  {
    "value": "RoboLab における指示",
    "id": "robolab-instructions",
    "level": 3
  },
  {
    "value": "LIBERO-10 への適応",
    "id": "adaptation-to-libero-10",
    "level": 3
  },
  {
    "value": "物理環境での選好評価",
    "id": "physical-preference-ratings",
    "level": 3
  },
  {
    "value": "LeRobot 統合：サイズ・制御・レシピの対応付け",
    "id": "lerobot-integration-match-size-controls-and-recipe",
    "level": 2
  },
  {
    "value": "まとめ",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-cosmos3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-cosmos3-title">Cosmos 3：オムニモーダル世界モデルから動画・行動の統合ポリシーへ</h1>
  <p className="paper-reading-lead">Cosmos 3：Physical AI のためのオムニモーダル世界モデル</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-understanding-and-generation-paths">マルチモーダルアーキテクチャ</a></li>
    <li><a href="#actions-shared-geometry-with-domain-specific-interfaces">アクションと学習</a></li>
    <li><a href="#experiments-instruction-specificity-and-initialization">実験</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2606.02800v4" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>論文を読む</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/cosmos3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot Cosmos 3 ドキュメント ↗</a>

**LeRobot パラメータ**

- `--policy.type=cosmos3_nano` と `--policy.type=cosmos3_edge` でサポートされるサイズを選択します。
- `--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO` は 4 つすべての LIBERO スイートで学習されたポリシーを読み込みます。
- `--policy.save_predicted_video=true` は予測を追加でデコード／保存し、可視化コストを増やします。
- ドメイン、カメラキャンバス、実際のフレームレート、アクション表現はすべてモデルの条件となります。

</aside>

ロボットが黒いボウルを引き出しの中に入れて閉めます。あるアクションが何を引き起こすか、その視覚的変化を説明するアクションはどれか、あるいは目標を達成するにはどのアクションを取るべきかを尋ねることができます。**軌道のどの部分を既知とみなすかを変えるだけで、1 つのモデルがこの 3 つすべてを学習できるでしょうか？**

## 前提知識：3 つのアクションモード

| モード | 既知 | 予測対象 | 引き出しの例 |
| --- | --- | --- | --- |
| 順方向ダイナミクス | 現在の視点とアクション | 将来の視点 | 引くと引き出しがどこまで動くか |
| 逆方向ダイナミクス | 視覚的な変化 | アクション | 閉じた状態を開いた状態にするにはどう動かすか |
| ポリシー | 現在の観測と目標 | アクションと将来の視点 | 動きと期待される結果をまとめて扱う |

開く引き出しの動画は、そのままでは実行可能なロボットコマンドではありません。ポリシー学習にはアクションの教師信号とボディ固有のインターフェースが必要であり、予測は実世界からのフィードバックで修正されます。

<figure className="paper-reading-figure" data-reading-figure="cosmos3/teaching-three-conditioning-modes-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/cosmos-three-conditioning-modes-en-v2.png" alt="引き出しを開けるための 3 つの条件付き予測タスク" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>引き出しを開けるための 3 つの条件付き予測タスク。</strong> AI 生成の教材イラスト。列は順方向ダイナミクス、逆方向ダイナミクス、動画とアクションの統合予測（ポリシー）を示し、それぞれ既知の入力と予測対象が異なります。これは連続した実行段階ではなく、代替的な生成モードです。視覚シーンは動画シーケンスを表し、言語や特殊トークンによる条件付けは簡略化されています。</figcaption>
</figure>

## 概要と読み方ガイド

**概要（要約）。** Cosmos 3 は、MoT アーキテクチャのもとで自己回帰的な理解と連続値生成を組み合わせ、言語・画像・動画・音声・アクションを統合します。クリーン／ノイズ付きトークンの選択によって、順方向ダイナミクス、逆方向ダイナミクス、ポリシー学習を実装します。アクションの中間学習により、ターゲット向けの事後学習の前にクロスドメインな事前知識を与えます。

**読み方メモ。** 本記事はロボットに関係するメカニズムに焦点を当てます。画像／動画の画質ランキングは制御の成功度を測るものではなく、LeRobot の Nano／Edge アダプタはオムニモーダルプラットフォーム全体を公開しているわけではありません。

## アーキテクチャ：理解パスと生成パス

因果的な理解パスはテキストと任意の ViT ビジョントークンを処理します。生成パスは連続値の動画・音声・アクショントークンからノイズを除去します。各層は別々の正規化・射影・フィードフォワードパラメータを持ち、共有アテンションによってコンテキストが結び付けられます。

ViT 特徴は理解を支え、固定された video VAE が生成用の潜在表現を提供します。このパスベースの MoT は、トークンごとに複数のフィードフォワードエキスパートを選択するスパース MoE ルーティングとは異なります。

ポリシーモードでは、現在の画像はクリーンで、将来の動画／アクションはノイズ付きとしてまとめて復元されます。プロンプトには、フレームレート、解像度、ビューのレイアウト、アイドルフレームも記述され、視覚とアクションの時間軸をそろえます。

<figure className="paper-reading-figure" data-reading-figure="cosmos3/mot-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/mot-architecture.png" alt="自己回帰的理解と拡散生成の間のアテンションルーティング" loading="lazy" />
  <figcaption><strong>自己回帰的理解と拡散生成の間のアテンションルーティング。</strong> 出典：公式 LeRobot ドキュメント。理解パスは因果的自己アテンションを用い、生成パスはフルアテンションを用いて理解コンテキストを読み込みます。マスクにより、生成トークンからのクエリが理解パスに届くのを防ぎます。共有アテンションは計算を結び付けますが、デコード規則を同一にはしません。</figcaption>
</figure>

## アクション：共有ジオメトリとドメイン固有インターフェース

レポートでは、アクションを自身体の移動、エフェクタ、把持状態の観点から整理しています。連続する姿勢から次のように定義できます。

$$
\Delta T_t=T_{t-1}^{-1}T_t.
$$

並進と 6D 回転が動きを符号化し、把持チャネルが現在の操作状態を符号化します。ドメイン固有の射影によって、各ボディのベクトルが共有の隠れ次元に写像されます。

事前学習された表現と、最終的な制御フォーマットは異なっていてもかまいません。DROID はアダプタレシピで 8 つの関節／グリッパチャネルを使用し、LIBERO は 6D 回転を含む 10 チャネルを使用してから、シミュレータの 7 次元アクションに戻します。パディングでは、こうした変換の代わりにはなりません。

<figure className="paper-reading-figure" data-reading-figure="cosmos3/action-representation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/cosmos3/action-representation.png" alt="具現化ごとに異なるアクションベクトル間で共有される幾何学的構成要素" loading="lazy" />
  <figcaption><strong>具現化ごとに異なるアクションベクトル間で共有される幾何学的構成要素。</strong> 出典：Cosmos 3 論文。位置、6D 回転、把持の構成要素が長さの異なるベクトルを形成し、ドメイン固有の射影によって結び付けられます。回転を表す 6 つの数値は 6 自由度の回転を意味するわけではなく、共有構成要素があるからといってコマンドが相互に置き換え可能になるわけでもありません。</figcaption>
</figure>

## 学習：1 つの軌道の 3 つの使い方

引き出しのデモでは、順方向ダイナミクスはアクションをクリーンに保ち、動画を予測します。逆方向ダイナミクスは視覚的な変化をクリーンに保ち、アクションを予測します。ポリシーモードでは両方にノイズを加え、両方を予測します。

一般的な理解／生成の学習の後に、マルチドメインのアクション中間学習とターゲット向け事後学習が続きます。アクションの事前知識が適応を支え、ターゲットのデモが実際の制御とシーンを整合させます。一般的な動画生成だけでは、実運用可能なポリシーは得られません。

### ループを閉じる

ビューは固定キャンバス上に構成されます。クリーンな現在の潜在表現を条件として、将来の動画とアクションをまとめてサンプリングします。ロボットはある区間を実行し、その後ふたたび観測します。動画のデコードは確認のためのオプションです。

もしモデルがボウルを引き出しの中にあると想像していても、実際にはグリッパが落としてしまった場合、次の呼び出しではボウルの実際の位置を使わなければなりません。統合予測は動きを期待される結果に結び付けますが、その物理的な正しさを保証するものではありません。

## 実験：指示の具体性と初期化

### RoboLab における指示

レポートでは 120 タスクを各 10 試行で評価しています：

| モデル | あいまい | デフォルト | 具体的 |
| --- | ---: | ---: | ---: |
| Cosmos3-Nano（アクション中間学習で初期化） | 20.6% | 36.8% | 39.7% |
| Cosmos3-Nano（一般事前学習で初期化） | 16.7% | 28.1% | 30.2% |
| π0.5 | 15.2% | 28.0% | 28.1% |

これらは異なる指示条件下での成功率です。36.8% と 39.7% は互換ではなく、あいまいな要求は依然として大幅に難しいままです。

### LIBERO-10 への適応

10 個のタスクそれぞれについて 50 回の試行を行うことで、チェックポイントごとに 500 個のロールアウトを得ます：

| 更新回数 | MT-init | PT-init |
| --- | ---: | ---: |
| 500 | 24.6% | 0.0% |
| 1,000 | 91.4% | 73.8% |
| 2,000 | 97.4% | 95.2% |

初期の大きな差は、行動の中間学習からのより高速な適応を裏付けています。差が縮小することは、一般的な事前学習済み初期化が決して学習できないことを意味するわけではありません。

### 物理的な選好評価

RoboArena は、ブラインドのペアワイズ比較を集約します。このレポートは、2026 年 5 月 30 日時点での先行する評価を記録しています。選好評価は、固定スイートに対する成功率でもなければ、今日時点でのランキングに関する主張でもありません。

## LeRobot との統合：サイズ、制御、レシピの整合

バージョン 0.7.0 は、おおよそ 165 億パラメータの Nano 実装と 46 億パラメータの Edge 実装をサポートし、デフォルトでは主に生成パスとアクションモジュールを学習します。Base、DROID、4 スイート LIBERO、および LIBERO-10 のみのチェックポイントは、それぞれ異なる目的に使用されます。

文書化された 4 スイートの Nano/Edge の結果は、各スイート 500 エピソードで平均 97.90%/97.95% です。LIBERO-10 のみの Nano チェックポイントは 97.6% を記録し、このレポートの 2,000 回更新時点の MT-init は 97.4% を記録しています。異なる訓練セット、実装、重みは、別々のラベルを保持しなければなりません。

```bash
--policy.path=lerobot/Cosmos3-Nano-Policy-LIBERO
--policy.dtype=bfloat16
--env.type=libero
--env.task=libero_spatial,libero_object,libero_goal,libero_10
--env.observation_height=256
--env.observation_width=256
```

これらの評価フラグメントには、残りのバージョン付き評価設定が必要です。新しいデータセットには、正しいフレームレート、ビューの説明、統計量、およびドメイン識別子が必要です。状態条件付きの場合、状態/アクションチャネルは幅とセマンティクスが一致していなければなりません。データ/環境プロセッサは物理的な変換を実行します。

ベースを適応させる際には、`load_action_modules=false` によってターゲットモジュールを初期化できます；評価時には学習済みモジュールを読み込む必要があります。EMA ベースのレシピには、対応する EMA チェックポイントが必要です。これらは統合手順であり、現在のマシンでのベンチマーク実行の証拠ではありません。

## 結論

Cosmos 3 は、統一されたアーキテクチャの中で、視覚的変化と行動の間のいくつかの条件付き関係を学習します。行動の中間学習は、再利用可能な適応の事前分布を提供します。ポリシーを解釈するには、その 3 つのモード、ボディ固有の表現、インストラクション条件、および学習後のプロトコルを分離して考える必要があります。

</div>
