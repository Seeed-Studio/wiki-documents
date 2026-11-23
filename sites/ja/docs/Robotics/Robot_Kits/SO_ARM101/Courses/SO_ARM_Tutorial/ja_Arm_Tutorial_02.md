---
description: "SO-ARM Physical AI ビギナーコース第 2 章 — SO-ARM オープンソースプロジェクト、SO-ARM100 と SO-ARM101 の違い、スタンダード版と Pro 版、そしてオープンソースのハードウェアとソフトウェアを知ります。"
title: 第 2 章 - ハードウェアとオープンソースプロジェクト
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - ロボットアーム
  - オープンソース
  - LeRobot
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_2
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_2/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 1 · 第 2 章 · 理論と実践</span>
    <h2>2. SO-ARM のハードウェアとオープンソースプロジェクトを知る</h2>
    <p>
      SO-ARM オープンソースプロジェクト、SO-ARM100 と SO-ARM101 の違い、スタンダード版と Pro 版、そしてオープンソースのハードウェアとソフトウェアを知ります。
    </p>
    <div className="hero-actions">
      <a href="#what-is-so-arm">SO-ARM とは</a>
      <a href="#versions">バージョン</a>
      <a href="#open-source">オープンソース</a>
    </div>
  </div>
</section>

## 2.1 SO-ARM とは

<section id="what-is-so-arm" className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>2.1 SO-ARM とは</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 / SO-ARM101 キット" />
</div>

SO-ARM は AI・ロボティクス学習向けの低価格・完全オープンソースのロボットアームです。初代 SO-ARM100 は [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100) が設計した Hugging Face [LeRobot](https://github.com/huggingface/lerobot) プロジェクトの参考リーダー・フォロワーアームで、Seeed Studio がこれを完全なキット — SO-ARM100 と新世代 SO-ARM101 — として提供し、検証済み 3D プリント部品・Feetech STS3215 バスサーボ・サーボ制御ボード・充実した Wiki サポートが含まれます。

SO-ARM キットには必ず**2 本のアーム**が入っています：

- **リーダーアーム（黒）**：手に持って教示する軽量アーム。サーボは位置を読むだけ — 教示の「入力デバイス」です。
- **フォロワーアーム（白）**：実際に作業する実行アーム。全電圧で駆動され、実際の把持と移動を担います。

各アームは 6 個の STS3215 シリアルバスサーボ（アーム関節 5 個 + グリッパ 1 個）で駆動され、3 ピンバスでデイジーチェーン接続され、USB サーボ制御ボード経由で PC に接続します。このオープンソースプロジェクトから、次のことをゼロから学べます：

- 3D プリント、組み立て、バスサーボ設定；
- サーボ ID 割り当て、キャリブレーション、デバッグ；
- リーダー・フォロワーのマスター・スレーブテレオペレーション；
- LeRobot のデータ収集・可視化・データセット管理；
- ACT・SmolVLA・拡散ポリシーの訓練と実機評価；
- 双腕（バイマニュアル）協調訓練；
- NVIDIA Isaac GR00T の VLA ファインチューニングと Jetson 展開；
- SenseCraft Robotics プラットフォームのノーコード VLA。

その狙いは、本当に低価格・オープン・再現可能なハードウェアで具身知能アルゴリズムを学び検証できるようにすることです。

</section>

## 2.2 SO-ARM100 と SO-ARM101 の違い

<section id="versions" className="section-card">
  <div className="section-title">
    <span>バージョン</span>
    <h2>2.2 SO-ARM100 と SO-ARM101 の違い</h2>
  </div>

アームには 2 世代あります：

- **SO-ARM100** — この設計を有名にした初代；
- **SO-ARM101** — 現行推奨版。ケーブルクリップで配線が整理され、リーダーアームが再設計されています。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="SO-ARM101 のサーボと配線" />
</div>

2 世代は高い互換性があります：

:::tip
現在の推奨購入は SO-ARM101 キットです。SO100 と SO101 のコードは互換 — SO100 ユーザーは LeRobot の `so101_follower` / `so101_leader` のパラメータとコマンドをそのまま使え、SO101 のプリントファイルは SO100 モーターキットの取り付けと完全互換です。
:::

注意すべき違いは**リーダーアームのサーボ減速比**です：SO-ARM101 リーダーの最初の 3 関節（L1〜L3）は SO-ARM100 と異なる減速比を使うため、サーボ設定は自分のキットの対応表に厳密に従う必要があります（第 6 章）。

</section>

## 2.3 スタンダード版と Pro 版

<section id="standard-pro" className="section-card">
  <div className="section-title">
    <span>エディション</span>
    <h2>2.3 スタンダード版と Pro 版</h2>
  </div>

SO-ARM101 キットには構造が同じで、サーボトルクと電源が異なる 2 つのエディションがあります：

| エディション | フォロワー サーボ | リーダー サーボ | 電源 |
| :--- | :--- | :--- | :--- |
| **SO101 スタンダード** | ST-3215-C001 7.4V（減速比 1:345）×6 | ST-3215 7.4V シリーズ | 両アーム 5V |
| **SO101 Pro** | ST-3215 12V シリーズ（高トルク、例：C018 / C047） | ST-3215 7.4V シリーズ | リーダー 5V、フォロワー 12V |

:::danger
電源ルールが重要です。スタンダード版は両アーム 5V。Pro 版ではリーダーは常に 5V 電源、フォロワーは常に 12V 電源を使うこと — 間違った電圧を挿すとサーボが焼ける可能性があります。毎回の通電前にアダプターのラベルを再確認してください。
:::

</section>

## 2.4 主なパラメータ

<section id="parameters" className="section-card">
  <div className="section-title">
    <span>仕様</span>
    <h2>2.4 主なパラメータ</h2>
  </div>

| 製品 | SO-ARM100 キット | SO-ARM101 キット |
| :--- | :--- | :--- |
| **購入リンク** | [Bazaar](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html) | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) |
| **自由度** | 5 + グリッパ | 5 + グリッパ |
| **アクチュエータ** | 各アーム Feetech STS3215 バスサーボ ×6 | 各アーム Feetech STS3215 バスサーボ ×6 |
| **通信** | TTL シリアルバス（USB サーボ制御ボード経由） | TTL シリアルバス（USB サーボ制御ボード経由） |
| **電源** | 5V（スタンダード）/ 5V+12V（Pro） | 5V（スタンダード）/ 5V+12V（Pro） |
| **構造** | 3D プリント PLA+ 部品、STL オープンソース | ケーブルクリップ付き 3D プリント部品、STL オープンソース |
| **エコシステム** | LeRobot、GR00T、SenseCraft Robotics | LeRobot、GR00T、SenseCraft Robotics |

</section>

## 2.5 オープンソースのハードウェアとソフトウェア

<section id="open-source" className="section-card">
  <div className="section-title">
    <span>オープンソース</span>
    <h2>2.5 オープンソースのハードウェアとソフトウェア</h2>
  </div>

SO-ARM はプリント可能な構造からソフトウェアスタックまでオープンです：

- **アーム設計と STL ファイル**：<a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">TheRobotStudio/SO-ARM100</a>
- **本コースで使う検証済み LeRobot フォーク**：<a href="https://github.com/Seeed-Projects/lerobot" target="_blank" rel="noopener noreferrer">Seeed-Projects/lerobot</a>
- **上流フレームワーク**：<a href="https://github.com/huggingface/lerobot" target="_blank" rel="noopener noreferrer">huggingface/lerobot</a>
- **サーボデバッグツール**：<a href="https://github.com/Seeed-Projects/Seeed_RoboController" target="_blank" rel="noopener noreferrer">Seeed-Projects/Seeed_RoboController</a>
- **VLA 基盤モデル**：<a href="https://huggingface.co/nvidia/GR00T-N1.5-3B" target="_blank" rel="noopener noreferrer">Hugging Face の NVIDIA Isaac GR00T</a>

:::tip
本コースは Seeed-Projects フォークから LeRobot をインストールします — このバージョンは SO-ARM キットで検証済みです。上流リポジトリは更新が速く、コマンド引数・データセット形式・依存関係が本コースの内容と異なる場合があります。
:::

</section>

</div>
