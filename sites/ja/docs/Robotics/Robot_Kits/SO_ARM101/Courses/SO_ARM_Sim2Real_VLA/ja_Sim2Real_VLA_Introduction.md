---
description: "SO-ARM101 Sim-to-Real VLA コース —— Seeed × NVIDIA の DLI 形式実践カリキュラムを SO-ARM101 に全面移植：実機ラボの構築、テレオペレーションによるデータ収集、Isaac GR00T N1.7 のファインチューニング、実機・Jetson へのデプロイ、さらに Isaac Sim と Cosmos によるデータ拡張（オプション）。"
title: SO-ARM101 Sim-to-Real VLA コース
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Sim-to-Real
  - Isaac Sim
  - LeRobot
  - Isaac GR00T
  - VLA
  - テレオペレーション
  - Physical AI
  - Jetson
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_course
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_course/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot × GR00T × Jetson · 上級コース</span>
    <h2>SO-ARM101 Sim-to-Real VLA</h2>
    <p>
      実機ラボを構築し、テレオペレーションで独自データを収集、Isaac GR00T
      N1.7 の VLA ポリシーをファインチューニング、実機と Jetson
      にデプロイする。さらに Isaac Sim によるデータ拡張も選択できる。
    </p>
    <div className="hero-actions">
      <a href="#pipeline">学習パイプライン</a>
      <a href="#modules">コース構成</a>
      <a href="#prerequisites">前提条件</a>
      <a href="#build">成果物</a>
    </div>
  </div>
</section>

## コース概要

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>何もない作業台から Jetson 上のポリシーまで</h2>
  </div>

本コースは reBot DLI カリキュラムと NVIDIA SO-101 Workshop のモジュール構成
をそのまま踏襲し、**ホワイト SO-ARM101** 向けに再構築したものです：

1. **Overview と環境** —— Sim-to-Real が必要な理由、LeRobot と GR00T
   が提供するもの、ソフトウェア群のインストールと検証；
2. **Build Your Robot Lab** —— SO-101 ペアの組み立て（組み立て済み機体は
   サーボ ID 書き込みをスキップ）、両腕のキャリブレーション、スタジオ
   （ライトボックス・ブラケット・ラック位置）の構築；
3. **Get Your Own VLA Model** —— 実機ペアのテレオペーション、2 カメラの
   LeRobot v3 エピソード録画、Isaac GR00T N1.7 のファインチューニング、
   実機フォロワーでの閉ループ実行；
4. **データ拡張（オプション）** —— Isaac Sim のホワイト SO-ARM101
   デジタルツインで追加データを収集し、シーンをランダム化、実データと
   マージして協調学習；
5. **Jetson へのデプロイ** —— Jetson AGX Orin / Thor 上でターゲット固有の
   TensorRT エンジンをエクスポートし、エッジでポリシーサーバを起動。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM101 キット" />
</div>

</section>

## コース構成

<section id="modules" className="section-card">
  <div class="section-title">
    <span>DLI モジュール</span>
    <h2>Overview → Build Your Robot Lab → Get Your Own VLA Model → Jetson</h2>
  </div>

| モジュール | 章 | トピック |
| --- | --- | --- |
| 1 · Overview | 1–5 | コース概要、LeRobot、Sim-to-Real、SO-ARM101、まとめ |
| 2 · Build Your Robot Lab | 6–8 | モジュール導入、アームの準備（ID とキャリブレーション）、作業環境 |
| 3 · Get Your Own VLA Model | 9–11 | 実データ収集、GR00T N1.7 学習、実環境評価 |
| 3+ · オプション | 12–13 | Isaac Sim でのデータ収集、Cosmos によるデータ拡張 |
| 4 · Deploy on Jetson | 14–18 | Jetson セットアップ、ハードウェア、GR00T 環境、資産、TensorRT 推論 |
| 5 · Reference | 19 | リポジトリ・製品・ドキュメント一覧 |

実機ルートが本コースの主線です。Isaac Sim はオプションの加速装置としてのみ
登場します。[Seeed × NVIDIA Sim-to-Real 記事](https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac)
での使われ方と同じです。

</section>

## 前提条件

<section id="prerequisites" className="section-card">
  <div class="section-title">
    <span>開始前に</span>
    <h2>必要なもの</h2>
  </div>

| 条件 | 詳細 |
| --- | --- |
| ワークステーション GPU | 第 9–12 章は RTX 8 GB 以上；GR00T のファインチューニングは 24 GB 以上（RTX 5090 / RTX 6000 クラス） |
| OS | Ubuntu 22.04 以降 |
| ソフトウェア | Isaac Sim 6.1（第 12 章のみ）、LeRobot 環境（第 7 章） |
| ロボット | SO-ARM101 リーダーとフォロワー —— キットでも組み立て済みでも可；必須はフォロワーのみ |
| カメラ | USB カメラ 2 台（手首 + 外部） |
| エッジデバイス（モジュール 4） | Jetson AGX Orin または AGX Thor（JetPack 7.2） |
| ディスク | 合計約 100 GB の空き |

AI アシスタントに環境構築を任せる場合は、プロジェクトリポジトリの
セットアップスキルファイルをコピーしてください——第 6 章にリンクがあります。

</section>

## 成果物

<section id="build" className="section-card">
  <div class="section-title">
    <span>成果</span>
    <h2>19 章終了時の成果物</h2>
  </div>

- キャリブレーション済みの SO-ARM101 リーダー / フォロワーペア——
  組み立て済みまたはキット、必要に応じてサーボ ID 書き込み済み；
- 録画スタジオ：ライトボックス、剛性カメラブラケット、固定されたラック
  位置とマーキング済みのプロップ配置；
- 2 カメラの動画ストリームを含む実環境 LeRobot Dataset v3；
- 独自データでファインチューニングした Isaac GR00T N1.7 ポリシー
  （シミュレーション拡張と Cosmos 拡張の協調学習セットはオプション）；
- NVIDIA の実機評価スタックにより物理フォロワー上で閉ループ動作する
  ポリシー；
- Jetson AGX Orin / Thor 上のターゲット固有 TensorRT エンジンバンドルと
  ポリシーサーバ。

</section>

## コースの章

<section id="chapters" className="section-card">
  <div class="section-title">
    <span>目次</span>
    <h2>5 モジュール・19 章</h2>
  </div>

| 章 | タイトル | モジュール |
| --- | --- | --- |
| 1 | コース概要 | 1 · Overview |
| 2 | LeRobot の背景とコミュニティ | 1 · Overview |
| 3 | Sim-to-Real とは？ | 1 · Overview |
| 4 | SO-ARM101 の紹介 | 1 · Overview |
| 5 | まとめ | 1 · Overview |
| 6 | Build Your Robot Lab（導入） | 2 · Build Your Robot Lab |
| 7 | ロボットアームの準備 | 2 · Build Your Robot Lab |
| 8 | 作業環境の構築 | 2 · Build Your Robot Lab |
| 9 | 実環境でのデータ収集 | 3 · Get Your Own VLA Model |
| 10 | GR00T N1.7 ポリシーの学習 | 3 · Get Your Own VLA Model |
| 11 | 実環境での評価 | 3 · Get Your Own VLA Model |
| 12 | Isaac Sim からのデータ収集（オプション） | 3 · オプション |
| 13 | データセット拡張（オプション） | 3 · オプション |
| 14 | Jetson エッジデバイスのセットアップ | 4 · Deploy on Jetson |
| 15 | ロボットハードウェアの接続 | 4 · Deploy on Jetson |
| 16 | GR00T ソフトウェア環境の構成 | 4 · Deploy on Jetson |
| 17 | データセットとモデル資産の準備 | 4 · Deploy on Jetson |
| 18 | GR00T N1.7 TensorRT 推論の実行 | 4 · Deploy on Jetson |
| 19 | リファレンス | 5 · Reference |

第 1 章から開始してください。ソフトウェア環境が既にあれば第 7 章から。
シミュレーション部分のみ必要なら[第 12 章](ja_Sim2Real_VLA_12.md)へ直接
どうぞ。

</section>

</div>