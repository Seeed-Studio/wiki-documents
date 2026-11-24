---
description: "WALL-OSS-0.5 の詳細：メカニズム、学習、実験、および LeRobot v0.7.0 との統合範囲。"
title: "WALL-OSS-0.5: ビジョン・ランゲージ学習と連続アクションの橋渡し"
hide_title: true
keywords: ["Paper Deep-Dive","WALL-OSS-0.5","VLA","Gradient-Bridged Co-Training","RVQ","Flow Matching","LeRobot"]
slug: /robotics/paper_reading_wall_oss_05
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
    "value": "前提知識：ルーティングと勾配",
    "id": "prerequisites-routing-and-gradients",
    "level": 2
  },
  {
    "value": "概要と読み方ガイド",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "アーキテクチャ：共有コンテキストと分離パス",
    "id": "architecture-shared-context-separate-paths",
    "level": 2
  },
  {
    "value": "RVQ：軌道圧縮以上の役割",
    "id": "rvq-more-than-trajectory-compression",
    "level": 2
  },
  {
    "value": "共同学習：3 つの補完的シグナル",
    "id": "joint-training-three-complementary-signals",
    "level": 2
  },
  {
    "value": "アクション空間での教師あり学習",
    "id": "action-space-supervision",
    "level": 2
  },
  {
    "value": "26 次元制御インターフェース",
    "id": "the-26d-control-interface",
    "level": 2
  },
  {
    "value": "実験：進捗、ゼロショット挙動、適応",
    "id": "experiments-progress-zero-shot-behavior-and-adaptation",
    "level": 2
  },
  {
    "value": "事前学習済みの挙動",
    "id": "pretrained-behavior",
    "level": 3
  },
  {
    "value": "一致したファインチューニングデータ",
    "id": "matched-fine-tuning-data",
    "level": 3
  },
  {
    "value": "制御されたアブレーション",
    "id": "controlled-ablations",
    "level": 3
  },
  {
    "value": "LeRobot との統合と学習の境界",
    "id": "lerobot-integration-and-training-boundaries",
    "level": 2
  },
  {
    "value": "結論",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-wall_oss_05-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-wall_oss_05-title">WALL-OSS-0.5: ビジョン・ランゲージ学習と連続アクションの橋渡し</h1>
  <p className="paper-reading-lead">Wall-OSS-0.5 テクニカルレポート</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#joint-training-three-complementary-signals">勾配ブリッジ</a></li>
    <li><a href="#action-space-supervision">アクション空間での教師あり学習</a></li>
    <li><a href="#experiments-progress-zero-shot-behavior-and-adaptation">実験</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2605.30877v2" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>論文を読む</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/wall_oss_05" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot WALL-OSS-0.5 ドキュメント ↗</a>

**LeRobot パラメータ**

- `--policy.type=wall_oss_05` はこのリリースを選択します。`wall_x` は別の WALL リリースを対象とします。
- `--policy.path=lerobot/wall-oss-0.5` はターゲット適応用のベースを読み込みます。
- このリリースは標準的な 26 次元レイアウト、32 ステップのチャンク、q01/q99 正規化、10 ステップの Euler 法を使用します。
- アダプタは連続アクションとテキスト目的をサポートしますが、共同事前学習を再現するための完全な自己回帰 RVQ アクションパスは公開していません。

</aside>

ロボットがブロックを色と位置で仕分けします。VLM はそれらの概念を理解していますが、新しいアクションエキスパートがそれを正しく使えるとは限りません。**連続アクションの教師あり学習だけで、バックボーンを制御に沿って整理するには十分なのでしょうか？**

## 前提知識：ルーティングと勾配

順伝播のルーティングはエキスパートのパラメータと可視トークンを選択します。どの損失がそれらのパラメータを更新するかは勾配が決めます。エキスパートを分離しても、自動的に勾配が止まるわけではありません。

離散アクションのクロスエントロピーは、VLM ネイティブなアクション学習シグナルを提供し、連続フローマッチングはデプロイ時のアクションを供給します。本レポートは、これらの目的関数がどのように理解と制御を結びつけるかを調べます。

## 概要と読み方ガイド

**概要（要約）。** 約 40 億パラメータのモデルは、Qwen2.5-VL-3B をアクションエキスパート、ビジョン整合 RVQ トークナイザ、アクション空間での教師あり学習で拡張します。マルチモーダル予測はグラウンディングを維持し、離散アクション予測がバックボーンを形作り、フローマッチングが実行可能な軌道を生成します。

**読み方メモ。** これは独立した 0.5 レポートであり、古い WALL-OSS の学習レシピではありません。実機ロボットでの主な指標は、タスク完了率ではなくタスク進捗です。

## アーキテクチャ：共有コンテキストと分離パス

ビジョン、言語、状態、離散アクションは VL Expert を通過し、ノイズ付き連続アクションは Action Expert を通過します。共有アテンションがコンテキストを供給します。離散および連続アクションのターゲットは互いに不可視であり、答えのリークを防ぎます。

| 目的関数 | 学習時の役割 | デプロイ時の役割 |
| --- | --- | --- |
| マルチモーダルテキスト CE | グラウンディングと意味知識を維持 | 理解とテキスト生成 |
| アクショントークン CE（RVQ ターゲット） | バックボーンをアクション認識型にする | 主に学習用ブリッジ |
| 連続フローマッチング | バックボーンに勾配を流しつつ軌道を学習 | 既定の実行出力 |

仕分けタスクでは、テキストの教師あり学習が色や位置の概念を教え、アクショントークンがそれらを動きに結びつけ、連続エキスパートが数値的な軌道を学習します。これらはデプロイ時に 3 段階のプランナとして順番に動くわけではありません。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/gradient-bridge">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/gradient-bridge.png" alt="マルチモーダル・離散アクション・連続アクションの共同学習" loading="lazy" />
  <figcaption><strong>マルチモーダル・離散アクション・連続アクションの共同学習。</strong> 出典：WALL-OSS-0.5 論文。離散アクションのクロスエントロピーは、制御に関連する教師信号をビジョン・ランゲージバックボーンに供給し、フローマッチングはデプロイされる連続アクションを学習します。共有アテンションがトークングループを結びつけます。ルーティングの専門化と勾配の接続性は別の問題です。</figcaption>
</figure>

## RVQ：軌道圧縮以上の役割

Residual vector quantization は、粗い動きの構造を初期のコードブックに、残差補正を後段のコードブックに割り当てます。観測に条件付けられたエンコーダがデルタアクションを圧縮し、状態に条件付けられたデコーダがそれを再構成します。

ビジョン・アクション整合、次フレーム予測、DCT 領域での再構成により、意味的で結果を意識した滑らかなコードがさらに促されます。連続デプロイは、これらの離散的な学習表現を、制御に直接デコードしなくても活用できます。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/vision-aligned-rvq">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/vision-aligned-rvq.png" alt="ビジョン整合目的を伴う残差アクション量子化" loading="lazy" />
  <figcaption><strong>ビジョン整合目的を伴う残差アクション量子化。</strong> 出典：WALL-OSS-0.5 論文。アクション再構成に加えて、ビジョン・アクション整合と将来コンテキスト特徴予測が意味的なコードを形作ります。右側の特徴予測器は、将来のカメラ画像を直接合成するわけではありません。</figcaption>
</figure>

## 共同学習：3 つの補完的シグナル

アクションサンプルとマルチモーダルサンプルは 9:1 で混合され、

$$
\mathcal L=\mathcal L_{\mathrm{flow}}+0.01\mathcal L_{\mathrm{act\text{-}CE}}+0.01\mathcal L_{\mathrm{mm\text{-}CE}}.
$$

損失係数は能力の割合ではなく、数値スケールを釣り合わせるためのものです。stop-gradient による絶縁とは異なり、本レポートではフローの勾配を VL バックボーンに残しています。

事前学習は 20 を超えるエンボディメントと、1 エポックあたり 100 万軌道以上、およびマルチモーダルなグラウンディングにまたがります。ゴールレベルとステップレベルの指示、言い換え、状態摂動により、単一の言い回しや理想的な固有感覚への依存を減らします。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/teaching-gradient-bridge-en">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/teaching/wall-gradient-bridge-en-v2.png" alt="ブロック仕分けにおける順伝播情報と逆伝播勾配" width="1536" height="1024" loading="lazy" />
  <figcaption><strong>ブロック仕分けにおける順伝播情報と逆伝播勾配。</strong> AI 生成の教育用イラスト。実線は順伝播情報、破線は逆伝播経路を示します。アクショントークンのクロスエントロピー（CE）は RVQ トークンを自己回帰的に予測し、VL Expert への勾配ブリッジを提供します。マルチモーダル CE はグラウンディングを固定します。フローマッチングはアクション空間での教師あり学習により連続アクションを学習し、その勾配も共有アテンションを通じて VL Expert に届きます。内部アテンションマスクは省略されています。デプロイ時のデフォルトは連続アクションです。</figcaption>
</figure>

## アクション空間での教師あり学習

経路と再構成されたアクションは次のようになります。

$$
\begin{aligned}
A^\tau &= \tau A+(1-\tau)\epsilon,\\
\hat A &= A^\tau+(1-\tau)f_\theta(A^\tau,\tau).
\end{aligned}
$$

ネットワークは速度を予測しますが、損失は再構成アクションとクリーンなアクションを比較します。これは $(1-\tau)^2$ で重み付けされた速度誤差と等価です。$\tau=0.2$ では重みは 0.64、0.8 では 0.04 であり、16 倍の差があります。この教育的な計算は、高ノイズ領域での軌道形成がより強調される理由を説明するものであり、どんな滑らかな軌道でも成功することを保証するものではありません。

## 26 次元制御インターフェース

各アームは 3 次元の相対位置、6 次元の相対回転、1 つのグリッパチャネルを提供し、2 本のアームで 20 次元になります。ベース速度が 3 次元、リフトが 1 次元、ヘッド駆動が 2 次元を追加します。回転エンコーディングの幅は、物理的な自由度とは別物です。

デプロイ時には、観測・状態・言語から連続アクションのノイズ除去を行い、RVQ アクションをデコードしません。論文における 1 秒のソース依存ホライズンと、アダプタの 32 ステップというリリース設定は、別々のパラメータです。

## 実験：進捗、ゼロショット挙動、および適応

### 事前学習済みの挙動

ゼロショットスイートには、既知タスク 12 個とホールドアウトタスク 5 個が含まれ、各タスクにつき 10 軌道に対して、あらかじめ定義された進捗ルーブリックでスコアリングされます。40 万ステップ時点で、既知タスクの平均進捗は 50.0、ホールドアウトは 53.6、全体では 100 点満点中 51.1 です。

最終的な配置が成功しなくても、到達や運搬によって部分的な進捗を獲得できる一方で、完了タスク成功数はゼロのままになり得ます。そのため、進捗 51.1 を 51.1% の成功率とみなすことはできません。また、既知タスク群とホールドアウトタスク群では難易度も一致していません。

### マッチしたファインチューニングデータ

15 個の実タスクでは、それぞれ約 500 個のデモとマッチした評価を用います：

| モデル | マニピュレーション, 10 | 推論, 5 | 全体 |
| --- | ---: | ---: | ---: |
| WALL-OSS-0.5 | 61.1 | 59.3 | 60.5 |
| π0.5 | 35.0 | 58.9 | 43.0 |
| DreamZero | 33.7 | 32.7 | 33.4 |

これらは進捗スコアです。π0.5 との全体差は 17.5 ポイントですが、推論の差はわずか 0.4 です。オブジェクトマッチングとフルーツバスケット配置では、依然として π0.5 が有利です。

### 制御されたアブレーション

5 個の実タスクに対するゼロからのアブレーションでは、共学習は、アクション CE なしの flow とマルチモーダル学習の 36.68、stop-gradient の 31.93、まず勾配を止めてから共学習に切り替える 2 段階ウォームアップの 49.58 に対して、57.00 の進捗を達成します。別の 4 タスクにおけるトークナイザ研究では、RVQ により連続実行の進捗が 29.3 から 48.1 に改善されます。これらのサブセットは、15 タスクのメイン比較とは分離しておく必要があります。

<figure className="paper-reading-figure" data-reading-figure="wall_oss_05/bridge-ablation">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/wall_oss_05/bridge-ablation.png" alt="Gradient and co-training ablations from scratch" loading="lazy" />
  <figcaption><strong>ゼロからの勾配および共学習アブレーション。</strong> 出典：WALL-OSS-0.5 論文。5 つの物理タスクにおける平均進捗は、flow のみで 36.68、勾配停止ありで 31.93、まず勾配を止めてから共学習に切り替える 2 段階ウォームアップで 49.58、完全な共学習で 57.00 です。これらは進捗スコアであり、タスク完了成功率ではありません。</figcaption>
</figure>

## LeRobot との統合と学習の境界

バージョン 0.7.0 は、連続制御と言語生成／学習をサポートします。より狭い状態／アクションは 26 次元に正規化およびパディングされ、出力は非正規化前にクロップされます。パディングによって、関節がエンドエフェクタ座標に変換されることはありません。

```bash
--policy.path=lerobot/wall-oss-0.5
--policy.device=cuda
--policy.dtype=bfloat16
```

これらはターゲットファインチューニング用の読み込みフラグメントです。`camera_key_mapping`、物理単位、および統計量を整合させてください。完全な RVQ 自回帰アクション学習パスは公開されていないため、アダプタファインチューニングは 3 つの目的による事前学習の再現にはなりません。新しいロボットインターフェースには、依然として準備と適応が必要です。

## 結論

WALL-OSS-0.5 は、マルチモーダル知識と連続アクションの勾配を維持しつつ、離散アクションの教師あり学習によって制御を意識したバックボーンを形成します。アクション空間の教師あり学習は、高ノイズな再構成を強調します。タスク進捗、タスク完了成功、元の事前学習、およびアダプタ機能性は、互いに区別して扱う必要があります。

</div>
