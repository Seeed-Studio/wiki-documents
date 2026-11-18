---
description: "SO-ARM101 Sim-to-Real VLA コース第 1 章 —— コース概要：ロボット演示とシミュレーションから VLA ポストトレーニング、実世界デプロイまでの Seeed × NVIDIA 実践カリキュラム。"
title: 第 1 章 - コース概要
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Physical AI
  - Sim-to-Real
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_1
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_1/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 1 · 第 1 章 · Overview</span>
    <h2>1. コース概要</h2>
    <p>
      Seeed Studio と NVIDIA が開発者向けに提供する実践コース：ロボットの
      テレオペレーションとシミュレーションから、VLA ポストトレーニング、
      実世界デプロイまで——本コースは SO-ARM101 を題材に構築されています。
    </p>
    <div className="hero-actions">
      <a href="#workflow">ワークフロー</a>
      <a href="#task">デモタスク</a>
      <a href="#platform">プラットフォーム</a>
    </div>
  </div>
</section>

## コースのワークフロー

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>エンドツーエンド</span>
    <h2>コースのワークフロー</h2>
  </div>

本コースは SO-ARM101 の完全な開発ワークフローに焦点を当て、ハードウェアの
セットアップ、データ収集、モデル学習、シミュレーション検証、そして実機と
Jetson エッジデバイスでのデプロイと推論までを扱います。LeRobot、NVIDIA
Isaac Sim、Isaac GR00T N1.7、Jetson を組み合わせ、ロボット学習と Physical
AI 応用のための完全な実験環境を構築します。

本コースを通して、次のことができるようになります：

- リーダー・フォロワーのテレオペレーションでアームデータを収集する；
- そのデータで Isaac GR00T N1.7 の Vision-Language-Action ポリシーを学習
  する；
- シミュレーションデータとデータ拡張でデータセットをスケールさせる；
- 学習済みモデルを実環境で評価する；
- Jetson デバイスにモデルをデプロイし、エッジでタスクを実行する。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM101 キット" />
</div>

</section>

## デモタスク

<section id="task" className="section-card">
  <div className="section-title">
    <span>バイアル → ラック</span>
    <h2>デモタスク</h2>
  </div>

デモ用に、本コースはシンプルなピック & プレースタスクを使用します：
**3 本のバイアルをバイアルラックに入れる**。NVIDIA の SO-101 Workshop と
同じタスクなので、収集したデータセットは NVIDIA の参照データセットや
チェックポイントと直接互換になります。

タスクは自分の環境に合わせて変更できます——「収集 → 学習 → デプロイ →
評価」というパイプライン自体は変わりません。

</section>

## 本コースが重視するもの

<section id="platform" className="section-card">
  <div className="section-title">
    <span>再現可能なプラットフォーム</span>
    <h2>本コースが重視するもの</h2>
  </div>

本コースは単一モデルの学習と実行だけでなく、**再現可能で拡張しやすい**ロボット
実験プラットフォームの構築を重視します：

- 固定のデータセットスキーマ（6 次元関節・2 カメラ・1 つのタスク文）が
  実機・Isaac Sim・Jetson でそのまま通用する；
- すべてのコマンドは SO-ARM101 でエンドツーエンド検証済み；
- reBot DLI コースと同じツールを使用するため、アーム間を移動しても
  パイプラインを学び直す必要がない。

次の章：[第 2 章 —— LeRobot の背景とコミュニティ](ja_Sim2Real_VLA_02.md)。

</section>

</div>