---
description: "SO-ARM101 Sim-to-Real VLA コース第 4 章 —— SO-ARM101 の紹介：Feetech STS3215 バスサーボを基盤とする、オープンソースで低コストな 6 自由度アームペア。"
title: 第 4 章 - SO-ARM101 の紹介
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - STS3215
  - ハードウェア
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_4
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_4/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 1 · 第 4 章 · Overview</span>
    <h2>4. SO-ARM101 の紹介</h2>
    <p>
      「真のオープンソース」を掲げる低コストのロボットアームペア——リーダーと
      フォロワー——は Feetech STS3215 バスサーボで構成され、Physical AI の
      Sim-to-Real 学習の敷居を下げます。
    </p>
    <div className="hero-actions">
      <a href="#intro">紹介</a>
      <a href="#specs">仕様</a>
      <a href="#overview">キットか完成品か</a>
      <a href="#apps">応用</a>
      <a href="#resources">リソース</a>
    </div>
  </div>
</section>

## 紹介

<section id="intro" className="section-card">
  <div className="section-title">
    <span>真にオープン</span>
    <h2>紹介</h2>
  </div>

SO-ARM101 は「真のオープンソース」の思想で設計された低コストのロボット
アームです。外観とすべてのオープンソースファイル——3D プリント可能な構造部品、
詳細な BOM、LeRobot と NVIDIA Isaac 互換のソフトウェア——が個人開発者・
学生・教育機関に無償で公開されています。

本コースでは **1 組** のアームを使います：

- **リーダー（leader）** は手で動かすアームで、関節角度を読み取って
  ソフトウェアに送るだけです；
- **フォロワー（follower）** は実行するアームで、テレオペレーション中は
  リーダーをミラーし、後で学習済み VLA ポリシーを実行します。

フォロワーは NVIDIA の SO-101 Workshop が使うエンボディメントそのもの
なので、本コースで収集するデータセットは NVIDIA の参照データセット・
チェックポイント・評価ツールと直接互換です。

</section>

## ハードウェア仕様

<section id="specs" className="section-card">
  <div className="section-title">
    <span>12 個のサーボ</span>
    <h2>ハードウェア仕様</h2>
  </div>

| 項目 | SO-ARM101 |
|---|---|
| 自由度 | 1 アームあたり **6**（腕 5 関節 + グリッパー） |
| サーボ | Feetech STS3215 バスサーボ、1 アーム 6 個（計 12 個） |
| リーダー電源 | 7.4 V 系サーボを 5 V 電源で駆動 |
| フォロワー電源（Pro キット） | 12 V 電源 |
| 制御 | シリアルバス、1 アーム 1 枚の USB 制御基板 |
| キャリブレーション | LeRobot `lerobot-calibrate`、可動範囲中央基準 |
| エコシステム | LeRobot、NVIDIA Isaac Sim / Isaac GR00T、Feetech デバッグツール |

各関節は 1 個の STS3215 シリアルバスサーボで駆動され、1 アームの 6 個の
サーボは関節間でデイジーチェーンされた 1 本の 3 線バス（GND・VCC・DATA）を
共有します。減速比は関節ごとに異なり、フォロワーとリーダーの肩部は高減速比
1:345 のサーボでトルクを確保します。完全な減速比表は
[ビギナーコース第 4 章](https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_4/)を参照してください。

:::caution 電源規則
電圧はサーボ種別に合わせる必要があります：7.4 V 版 STS3215 は 5 V、12 V 版は
12 V。リーダーは常に 7.4 V サーボ + 5 V 電源、Pro キットのフォロワーは
12 V です。電源を混在させるとサーボが焼損します。USB ケーブルはデータのみ
——電源と USB の両方を接続してください。
:::

</section>

## キットか完成品か

<section id="overview" className="section-card">
  <div className="section-title">
    <span>2 つの購入形態</span>
    <h2>キットか完成品か</h2>
  </div>

- **キット版**：サーボ一式・制御基板・ケーブルが同梱。構造部品は自分で
  プリント（またはプリント済みを購入）して組み立てます。サーボ ID は
  `lerobot-setup-motors` で書き込みます——第 7 章で扱います；
- **組み立て済み版（完成品）**：工場で組み立てられ、サーボ ID
  も設定済み。組み立てと ID 書き込みは完全にスキップし、キャリブレーション
  から開始できます。

製品リンク：

- [SO-ARM101 Pro キット](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html)
- [SO-ARM100 キット](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html)

</section>

## 応用例

<section id="apps" className="section-card">
  <div className="section-title">
    <span>適用分野</span>
    <h2>応用例</h2>
  </div>

### 教育と Physical AI 開発

SO-ARM101 は教育と Physical AI 実験のために設計されています：リーダー・
フォロワーペアが人間の演示を録画し、LeRobot がそれをデータセットに変換し、
Isaac GR00T がその上で VLA ポリシーをファインチューニングします。低コスト
のため教室や研究室全体への配備が現実的です。

### テレオペレーションとデータ収集

LeRobot エコシステムを使えば、遠隔操作・演示の録画・データセット管理が
可能です——本コースのあらゆる模倣学習・VLA パイプラインの基盤です。

### 研究とプロトタイピング

オープンなソフトウェア・ハードウェアインターフェースにより、タスクの
カスタマイズ、エンドエフェクタの交換、より大きなプラットフォームへの移行前
の Sim-to-Real アイデアの迅速な検証ができます。

</section>

## リソース

<section id="resources" className="section-card">
  <div className="section-title">
    <span>リンク</span>
    <h2>リソース</h2>
  </div>

- [SO-ARM101 ビギナーコース](https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_introduction/)
- [SO-ARM101 の LeRobot 入門](https://wiki.seeedstudio.com/ja/lerobot_so100m/)
- [NVIDIA Sim-to-Real SO-101 Workshop](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/index.html)

次の章：[第 5 章 —— まとめ](ja_Sim2Real_VLA_05.md)。

</section>

</div>