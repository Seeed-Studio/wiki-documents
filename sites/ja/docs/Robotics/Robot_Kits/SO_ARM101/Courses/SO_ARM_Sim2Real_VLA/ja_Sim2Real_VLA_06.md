---
description: "SO-ARM101 Sim-to-Real VLA コース第 6 章 —— Build Your Robot Lab 導入：理論から実践へ。デジタルツインと物理世界の運動学的・視覚的一致を厳密に保つ。"
title: 第 6 章 - Build Your Robot Lab（導入）
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - ロボットラボ
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_6
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_6/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 2 · 第 6 章 · Build Your Robot Lab</span>
    <h2>6. Build Your Robot Lab</h2>
    <p>
      ハードウェアを組み立て、タスク環境を標準化し、制御ループを確立する——
      デジタルツイン（シミュレーション）と物理世界の厳密な一致を保ちながら。
    </p>
    <div className="hero-actions">
      <a href="#scope">範囲</a>
      <a href="#env">ソフトウェア環境</a>
      <a href="#chapters">章</a>
    </div>
  </div>
</section>

## このモジュールの範囲

<section id="scope" className="section-card">
  <div className="section-title">
    <span>理論から実践へ</span>
    <h2>このモジュールの範囲</h2>
  </div>

このモジュールでは、ハードウェアの組み立て、タスク環境の標準化、制御ループ
の確立を通して、理論から物理的実行へ移行します。Physical AI パイプラインの
構築には、デジタルツイン（シミュレーション）と物理世界の間で運動学的一致と
視覚的一致が厳密に必要です。

具体的には、**SO-ARM101 ペア** の開梱または組み立て、サーボ ID の書き込み
（キット版のみ——組み立て済み機体はスキップ）、正確な実世界追従のための重要な
**関節キャリブレーション** を行います。次に、Isaac Sim の視覚アセットに
対応する標準化された光管理作業空間——スタジオ——を、カメラブラケットと固定
プロップ配置で構築します。最後に、実世界データ収集が依存する運用モード
であるハードウェアテレオペレーションを習得します。

</section>

## ソフトウェア環境

<section id="env" className="section-card">
  <div className="section-title">
    <span>1 回のインストール</span>
    <h2>ソフトウェア環境</h2>
  </div>

このモジュールは LeRobot 環境が準備済みであることを前提とします。第 7 章
が（uv、Python 3.12、SO-101 リーダー / フォロワー対応の Seeed LeRobot
フォーク、Feetech SDK を含む）段階的にインストールし、以降の章はすべて
それを再利用します。

AI アシスタントに構築を任せたい場合、プロジェクトリポジトリには
マシン可読なセットアップスキルが同梱されています：

**`skills/install-soarm-env.md`**（[github.com/yuyoujiang/rebot-arm-dli-isaacsim](https://github.com/yuyoujiang/rebot-arm-dli-isaacsim) 内）

ファイル全体を AI アシスタント（Claude、ChatGPT など）にコピーして実行を
依頼してください。実行順に並んだ全コマンド、各検証ステップの期待出力、
トラブルシューティング表（`scservo_sdk` 不足、シリアル権限、GPU フリーズ、
UDP ポート衝突）が含まれています。

</section>

## このモジュールの章

<section id="chapters" className="section-card">
  <div className="section-title">
    <span>2 章</span>
    <h2>このモジュールの章</h2>
  </div>

1. [第 7 章 —— ロボットアームの準備](ja_Sim2Real_VLA_07.md)：サーボ ID、
   キャリブレーション、初回テレオペレーション；
2. [第 8 章 —— 作業環境の構築](ja_Sim2Real_VLA_08.md)：ライトボックス、
   カメラブラケット、プロップ配置、カメラ。

</section>

</div>