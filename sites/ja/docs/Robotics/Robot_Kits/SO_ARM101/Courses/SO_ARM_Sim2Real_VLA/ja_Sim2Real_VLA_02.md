---
description: "SO-ARM101 Sim-to-Real VLA コース第 2 章 —— LeRobot の背景とコミュニティ：なぜ LeRobot か、Hub エコシステム、収集→学習→デプロイ→評価のサイクル。"
title: 第 2 章 - LeRobot の背景とコミュニティ
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_2
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_2/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 1 · 第 2 章 · Overview</span>
    <h2>2. LeRobot の背景とコミュニティ</h2>
    <p>
      LeRobot は本コースのソフトウェア基盤：データ収集・ポリシー学習・
      デプロイ・評価を 1 つのフレームワークで行い、大きなコミュニティが
      支えています。
    </p>
    <div className="hero-actions">
      <a href="#what">LeRobot とは</a>
      <a href="#why">なぜ LeRobot か</a>
      <a href="#community">コミュニティ</a>
      <a href="#ready">準備</a>
    </div>
  </div>
</section>

## LeRobot とは？

<section id="what" className="section-card">
  <div className="section-title">
    <span>Hugging Face</span>
    <h2>LeRobot とは？</h2>
  </div>

LeRobot は Hugging Face が開発したオープンソースのロボティクスフレームワーク
です。ロボットのデータ収集、ポリシー学習、デプロイ、評価のための統一された
ツール群を提供します。

</section>

## なぜ LeRobot か？

<section id="why" className="section-card">
  <div className="section-title">
    <span>1 つのパイプライン</span>
    <h2>なぜ LeRobot か？</h2>
  </div>

本コースが LeRobot を主フレームワークにするのは、完全なロボット学習
パイプラインを提供するからです。

LeRobot は Hugging Face Hub と緊密に統合されており、データの保存・共有・
再利用が容易です。コミュニティのデータセットはそのまま学習に使えますし、
新しく収集した演示もアップロードして共同作業者と共有できます。

フレームワークは NVIDIA Isaac GR00T をはじめとする最新のロボット学習手法
にも対応しています。データ収集に使うのと同じツールを、ポリシー学習・
デプロイ・評価にも使えます。

そのためワークフロー全体はシンプルなサイクルになります：

**収集 → 学習 → デプロイ → 評価 → 反復**

開発者はインフラではなくロボティクスの問題に集中できます。

</section>

## コミニティリソース

<section id="community" className="section-card">
  <div className="section-title">
    <span>エコシステム</span>
    <h2>コミュニティリソース</h2>
  </div>

LeRobot の強みの 1 つは成長を続けるコミュニティエコシステムです。

Hugging Face Hub には多様なロボットプラットフォームと操作タスクをカバーする
大量のロボットデータセットがホストされています。これらは標準化された
フォーマットに従い、プロジェクト間での共有と再利用が容易です。

LeRobot にはデータセットビジュアライザーもあり、学習前に演示の確認、軌跡の
再生、ロボット観測の分析ができます。

これらのリソースがロボット学習の参入障壁を下げ、実験の反復を加速します。

</section>

## コースの準備

<section id="ready" className="section-card">
  <div className="section-title">
    <span>基盤</span>
    <h2>コースの準備</h2>
  </div>

この学習パス全体を通して、LeRobot は SO-ARM101 のデータ収集・ポリシー学習・
実世界デプロイのソフトウェア基盤です。第 7 章で、以降の全章が使う環境
（SO-101 リーダー / フォロワー対応の Seeed LeRobot フォークを含む）を段階的に
インストールします。

先に LeRobot の公式ドキュメントを一読することをおすすめします。環境が整えば、
続く章で完全な Physical AI ワークフローを構築していきます。

</section>

## その他のリソース

<section className="section-card">
  <div className="section-title">
    <span>リンク</span>
    <h2>その他のリソース</h2>
  </div>

- [LeRobot ドキュメント](https://huggingface.co/docs/lerobot)
- [SO-ARM101 の LeRobot 入門 | Seeed Studio Wiki](https://wiki.seeedstudio.com/ja/lerobot_so100m/)
- [SO-ARM101 ビギナーコース](https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_introduction/)

</section>

</div>