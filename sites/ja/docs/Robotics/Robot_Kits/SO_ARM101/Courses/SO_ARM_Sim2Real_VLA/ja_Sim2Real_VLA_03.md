---
description: "SO-ARM101 Sim-to-Real VLA コース第 3 章 —— Sim-to-Real とは：定義、重要性、そして本コースで縮めていく Sim-to-Real ギャップ。"
title: 第 3 章 - Sim-to-Real とは？
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Sim-to-Real
  - Isaac
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_3
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_3/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 1 · 第 3 章 · Overview</span>
    <h2>3. Sim-to-Real とは？</h2>
    <p>
      シミュレーションで学習し、実機にデプロイする——そして本コースのすべての
      実践技術が縮めようとする両者のギャップを理解する。
    </p>
    <div className="hero-actions">
      <a href="#defined">定義</a>
      <a href="#why">重要性</a>
      <a href="#gap">ギャップ</a>
      <a href="#summary">まとめ</a>
    </div>
  </div>
</section>

## Sim-to-Real の定義

<section id="defined" className="section-card">
  <div className="section-title">
    <span>定義</span>
    <h2>Sim-to-Real の定義</h2>
  </div>

Sim-to-Real（シミュレーションから現実へ）とは、シミュレーション内でロボット
ポリシーを学習し、実世界のハードウェアにデプロイするプロセスを指します。

現代のロボット AI では、学習の大部分がシミュレーションで行われます。実機と
比較して、シミュレーションははるかに低コストで大量のデータを生成でき、
ハードウェアの摩耗を避け、実験のリスクを減らせます。学習完了後の目標は、
得られたポリシーを物理ロボットに移し、実世界で同じタスクを成功させること
です。

この学習パスでは、NVIDIA Isaac のシミュレーション環境を使い、テレオペレー
ションと合成データを組み合わせ、Isaac GR00T N1.7 などの
Vision-Language-Action（VLA）モデルを学習し、最終的に学習済みポリシーを
SO-ARM101 にデプロイします。

</section>

## なぜ Sim-to-Real が重要か

<section id="why" className="section-card">
  <div className="section-title">
    <span>データの経済性</span>
    <h2>なぜ Sim-to-Real が重要か</h2>
  </div>

データはロボット学習の基盤ですが、大規模な実世界ロボットデータの収集は
多くの場合、高価で時間がかかります。

何千、何万回の演示や把持試行を要する操作タスクを考えてみてください。実機で
これを収集すれば数週間かかり、ハードウェアが摩耗し、ロボットや環境を損傷
しかねない失敗のリスクも増えます。一方シミュレーションでは、多数の仮想
ロボットが並列に走り、安全かつ連続的にデータを生成できます。

そのためシミュレーションは現代ロボット開発の主要構成要素となっています。
最先端のロボットポリシーの多くは、実機に移す前にシミュレーションで学習
されています。

移行の成否にはロボット自体も重要です。ロボットの動作が正確で予測可能な
ほど、シミュレーションと現実の差は小さくなります。SO-ARM101 が本コースに
適しているのは、NVIDIA の SO-101 Workshop が対象とするまさにその
エンボディメントだからです：同じ関節構成、同じキャリブレーション規約、
同じエンボディメントで学習された参照チェックポイント——開始前の時点で
丸ごと一種類の移行ミスマッチが消えています。

</section>

## Sim-to-Real ギャップ

<section id="gap" className="section-card">
  <div className="section-title">
    <span>ギャップ</span>
    <h2>Sim-to-Real ギャップ</h2>
  </div>

シミュレーション技術は大きく進歩しましたが、実世界を完璧に再現することは
できません。

シミュレーションと現実の性能差は **Sim-to-Real ギャップ** として知られて
います。

例えば、シミュレーションのカメラは照明変化・モーションブラー・レンズ歪み・
センサーノイズの影響を十分に捉えられないことが多くあります。同様に、
シミュレーションのアクチュエータは、摩擦や遅延といった物理的制約を持つ実
モータより理想化されがちです。接触相互作用、変形物体、環境の変動も正確に
モデル化は困難です。

そのため、シミュレーションで完璧に動くポリシーでも、実機では苦労する
ことがあります。

Sim-to-Real ギャップの縮小はロボット AI の中心的課題の 1 つです。本コース
では、テレオペレーションによるデータ収集、シミュレーションによるデータ
生成、データセット拡張、GR00T によるポリシー学習といった実践的手法を
通じて、実世界性能を改善していきます。

</section>

## まとめ

<section id="summary" className="section-card">
  <div className="section-title">
    <span>要点</span>
    <h2>まとめ</h2>
  </div>

Sim-to-Real は現代ロボット AI の中心的なワークフローです。ロボットは
シミュレーションで効率よく学習し、そのスキルを物理世界に適用できます。

シミュレーションは学習と実験のコストを劇的に下げますが、両者の差は常に
存在します。この差を理解し、縮める方法を学ぶことは、信頼できるロボット
システムを構築するための必須ステップです。

次の章：[第 4 章 —— SO-ARM101 の紹介](ja_Sim2Real_VLA_04.md)。

</section>

</div>