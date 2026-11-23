---
description: "X-VLA の詳細：メカニズム、学習、実験、および LeRobot v0.7.0 への統合範囲の深掘り。"
title: "X-VLA: 学習可能なソフトプロンプトによるエンボディメント差の吸収"
hide_title: true
keywords: ["Paper Deep-Dive","X-VLA","VLA","Soft Prompts","Cross-Embodiment","Flow Matching","LeRobot"]
slug: /robotics/paper_reading_x_vla
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
    "value": "前提条件：ソフトプロンプトはロボット記述ではない",
    "id": "prerequisites-a-soft-prompt-is-not-a-robot-description",
    "level": 2
  },
  {
    "value": "概要と読み方ガイド",
    "id": "abstract-and-reading-guide",
    "level": 2
  },
  {
    "value": "出力ヘッドだけでは不十分な理由",
    "id": "why-output-heads-alone-are-insufficient",
    "level": 2
  },
  {
    "value": "アーキテクチャ：3 つの情報ストリームの統合",
    "id": "architecture-combining-three-information-streams",
    "level": 2
  },
  {
    "value": "行動表現：形が意味を保証するわけではない",
    "id": "action-representation-shape-does-not-guarantee-meaning",
    "level": 2
  },
  {
    "value": "学習と適応",
    "id": "training-and-adaptation",
    "level": 2
  },
  {
    "value": "実験：能力と適応コスト",
    "id": "experiments-capability-and-adaptation-cost",
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

<section className="paper-reading-intro" aria-labelledby="paper-reading-x_vla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-x_vla-title">X-VLA: 学習可能なソフトプロンプトによるエンボディメント差の吸収</h1>
  <p className="paper-reading-lead">X-VLA: スケーラブルなクロスエンボディメント Vision-Language-Action モデルとしてのソフトプロンプト付き Transformer</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-combining-three-information-streams">エンボディメントソフトプロンプト</a></li>
    <li><a href="#action-representation-shape-does-not-guarantee-meaning">行動表現</a></li>
    <li><a href="#experiments-capability-and-adaptation-cost">適応と実験</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://arxiv.org/html/2510.10274v1" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">arXiv</span><span>論文を読む</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/xvla" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot X-VLA ドキュメント ↗</a>

**LeRobot パラメータ**

- `--policy.path=lerobot/xvla-base` はクロスエンボディメントのベースから開始します。
- `--policy.action_mode=auto` は行動処理を選択しますが、物理単位や座標系の規約を自動で修正することはできません。
- `--policy.domain_id` はドメインプロンプトを選択し、データ／制御構成と一致している必要があります。
- ドキュメント化されているフルファインチューニングはプロンプト以上のものを学習しており、論文のパラメータ効率の良い実験とは別物です。

</aside>

「カップをボウルの中に入れて」といった指示は、Franka、両腕ロボット、低コストアームで、それぞれ異なる関節、カメラ解釈、単位を必要とします。同じテンソル幅であっても、これらの関係がそろうわけではありません。**小さな学習された条件だけで、共有ポリシーに対して、どのボディとデータ分布を使っているかを伝えられるでしょうか？**

## 前提条件：ソフトプロンプトはロボット記述ではない

ソフトプロンプトは、ドメイン識別子によって選択される連続値の学習可能ベクトルです。ドメインは、単なるロボットモデルだけでなく、カメラ、コントローラ、データセット構成を符号化できます。新しい識別子を割り当てるだけでは、学習済みコントローラが与えられるわけではありません。

## 概要と読み方ガイド

**概要（要約）。** X-VLA は、行動生成の早い段階でドメイン固有のソフトプロンプトを注入します。メインビューの視覚と言語特徴、補助画像、ロボット状態、フローに基づく行動生成が、共通の Transformer フレームワークを共有します。実験では、スケール、ターゲットドメインへの適応、および少数パラメータ更新が検証されます。

**読み方メモ。** フル適応と、およそ 1% の学習可能パラメータによる実験では、計算予算もスコアも異なります。

## 出力ヘッドだけでは不十分な理由

ドメイン固有の出力射影は次元を扱えますが、より前段の視覚解釈には情報を与えません。ドメイン固有の入力射影は事前学習済み表現を乱す可能性があり、手書きのロボット記述は手作業の設計を要します。ソフトプロンプトは、多モーダル融合の間に学習された条件を提供します。この論文では、学習レシピをそろえた上で、異質性を扱う手法を比較しています。

<figure className="paper-reading-figure" data-reading-figure="x_vla/heterogeneity-comparison">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/x_vla/heterogeneity-comparison.png" alt="Validation errors for heterogeneity-handling methods" loading="lazy" />
  <figcaption><strong>異質性を扱う手法における検証誤差。</strong> 出典：X-VLA 論文。学習レシピをそろえた条件では、ソフトプロンプトは学習後期において、保持アウトの行動誤差をより低く抑え、融合時のドメイン条件付けを支持しています。縦軸はオフライン予測誤差であり、クローズドループでのタスク成功率ではありません。</figcaption>
</figure>

## アーキテクチャ：3 つの情報ストリームの統合

Florence-Large がメインビューと指示文を処理します。共有のビジョンバックボーンが補助ビューをエンコードします。ロボット状態、ノイズ付き行動、時間埋め込みは射影され、ドメインプロンプトおよび視覚と言語の特徴とともに、標準的な Transformer 層で融合されます。

| 情報 | カップ配置での役割 |
| --- | --- |
| メインビューと言語 | 指定されたカップとボウルを特定する |
| 補助ビュー | 局所的な把持／接触ジオメトリを解決する |
| 状態とノイズ付き行動 | ボディと軌道を基礎付ける |
| ドメインプロンプト | セットアップに応じて共有計算を条件付けする |

インターフェースを教示するための記法は次のとおりです。

$$
\hat A=\operatorname{Flow}_{\theta}(\epsilon\mid E(I,L),q,p_d).
$$

ここで $p_d$ は学習されたドメイン条件を選択し、$q$ は状態、$\epsilon$ は行動ノイズです。物理的な規約は、依然としてデータ前処理とプロセッサの責任範囲にあります。

<figure className="paper-reading-figure" data-reading-figure="x_vla/architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/x_vla/xvla-architecture2.png" alt="Domain-specific prompts and shared multimodal computation" loading="lazy" />
  <figcaption><strong>ドメイン固有プロンプトと共有マルチモーダル計算。</strong> 出典：公式 LeRobot ドキュメント。ドメイン ID が、共有 Transformer 計算の前にプロンプトと行動射影を選択します。図中の 0.04% は、ドメイン固有モジュールがアーキテクチャ全体に占める割合であり、およそ 1% の学習可能パラメータによる適応実験とは別物です。</figcaption>
</figure>

## 行動表現：形が意味を保証するわけではない

この論文では、エンドエフェクタ位置、6D 回転、グリッパ状態を標準化しています。6D 回転エンコーディングは、6 つの回転自由度を意味するわけではありません。また、事前学習では 4 秒間に 30 個の軌道アンカーを用いて、過度に細かい動きを抽象化していますが、これはあらゆる運用環境での制御周期を意味するものではありません。

たとえば、メートルとミリメートルの座標は、幅をそろえるためにパディングしても、依然として 1000 倍の差があります。プロンプトは、単位変換、回転の規約、アームの並び順、グリッパ方向の整合性の代わりにはなりません。

## 学習と適応

事前学習では、共有パラメータとドメインプロンプトを共同で最適化します。主な適応手順では、まず事前学習済み重みを固定したまま新しいプロンプトをウォームアップし、その後に凍結を解除して共同で専門化します。別のパラメータ効率の検討では、およそ 900 万パラメータ、すなわちモデルの約 1% を更新します。

実行時には、プロセッサがドメインを選択し観測を整理します。Flow Matching が行動を生成し、ポストプロセッシングがロボットインターフェースを復元します。プロンプトは学習されたパラメータであり、オンラインで蓄積されるタスクメモリではありません。

## 実験：能力と適応コスト

フル適応版の X-VLA-0.9B は、LIBERO スコアとして 98.2%、98.6%、97.8%、97.6% を報告しており、平均すると約 98.1% です。約 900 万パラメータ更新の実験では、LIBERO でおよそ 93%、Simpler-WidowX で 54% 前後を報告しています。これらは異なるトレードオフを測定しています。

スケールの検証では、モデル容量、データ多様性と量を変化させ、保持アウトの行動誤差と下流の挙動を測定します。オフライン誤差が低いほど適応が良くなる相関はあり得ますが、クローズドループでの成功と同義ではありません。把持誤差がわずかでも、カップをつかみ損ねる可能性はあります。

実機ロボットのデモには、適応後の精密な布操作が含まれます。ただし、プロンプトだけで任意の未知ボディや接触問題が解決されることを示すものではありません。

## LeRobot への統合と結果の境界

バージョン 0.7.0 には、行動モード、プロセッサ、ドメイン識別子、プロンプト学習オプションが含まれます。学習スクリプトの断片は次のとおりです。

```bash
--policy.path=lerobot/xvla-base
--policy.action_mode=auto
--policy.dtype=bfloat16
--policy.train_soft_prompts=true
--policy.train_policy_transformer=true
```

実際のデータ、ドメイン、カメラ、出力先、および視覚／言語の凍結ポリシーを指定してください。少数パラメータ実験を再現するには、学習可能モジュールを明示的に制限する必要があります。

ドキュメント化されている `lerobot/xvla-libero` チェックポイントは、およそ 93% と記載されており、論文のフル適応 98.1% とは別物です。専用の LIBERO プロセッサは、手首カメラの回転や状態／行動の規約も処理しますが、生のネットワーク呼び出しではそれらがバイパスされます。

## 結論

X-VLA は、行動形成に影響を与えられる十分早い段階で、学習されたドメイン条件を導入します。ソフトプロンプトは適応インターフェースを提供し、一方で物理表現とプロセッサが制御の一貫性を維持します。フル適応とパラメータ効率の良い適応は、別々に解釈する必要があります。

</div>
