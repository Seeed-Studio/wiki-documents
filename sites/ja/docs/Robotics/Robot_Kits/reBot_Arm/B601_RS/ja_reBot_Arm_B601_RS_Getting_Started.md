---
description: このガイドでは、reBot Arm B601-RS の購入オプション、組み立て、キャリブレーション、ソフトウェア設定を含む入門手順を説明します。
title: reBot Arm B601-RS クイックスタート
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - ロボットアーム
  - ロボット
  - Lerobot
  - Pinocchio
  - 6 DOF
# image:
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/
---

# reBot Arm B601-RS 入門ガイド

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6 自由度ロボットアーム · マルチモーター対応 · 運動学ソルバ · 軌道計画 · 完全オープンソース</strong>
</p>

reBot Arm プロジェクトは [GitHub](https://github.com/Seeed-Projects/reBot-DevArm) 上でオープンソース公開されています。本ガイドでは、B601-RS の組み立てから動作までのクイックスタート手順を説明します。

このガイドの内容は光の速さであなたのもとへ向かっています — 続報をお待ちください！

:::

## 購入オプション


## ステップ 1: 組み立てガイド

組み立て前に：

- スムーズに組み立てを行うため、以下の注意事項をよくお読みください。
  1. 本キットには、外観がよく似たさまざまなネジや部品が含まれています。締め付ける前に、仕様と向きを必ず確認してください。
  2. 動画は 4 月上旬に撮影されたものです。細かな更新がある場合がありますが、組み立て手順は同じです。最終的には、同梱されている部品を基準としてください。
  3. 同梱のネジにはねじロック剤が塗布されています。適切な工具、または電動ドライバー（推奨）を使用してください。トルクは 3～6 kgf·cm に設定し、なめないようにしてください。もしなめてしまった場合は、直ちに作業を中止し、ネジの交換または位置調整を行ってください。ねじロック剤付きでなめたネジは外しにくく、部品を破損するおそれがあります。
  4. 組み立て作業中の安全を確保してください。指を挟むなどのけがに注意してください。子どもが作業する場合は必ず保護者が付き添ってください。

## ステップ 2: モーター ID のリセット

### モーターをリセットする前に：

モーターのパラメータ設定を行う前に、以下の準備と安全ルールを確認してください：

- 工作用クランプを 2 個（3 インチ以上）と、48V XT30 出力のスイッチング電源を用意してください（一般的なブランド品を使用し、粗悪品は使用しないでください）。
- デバッグ／動作中は 1m 以上の距離を保ってください。
- モーターのホットプラグは禁止です。XT30 2+2 インターフェースの抜き差しは、必ず電源を切ってから行ってください。
- 過負荷／過速度での動作は行わないでください。起動前に配線や固定部を確認し、湿度が高い／高温／粉じんの多い環境は避けてください。
- 暴走を防ぐため、プログラムパラメータと非常停止を適切に設定してください。
- **これらのルールを厳守してください。違反操作や個人的なミスによるリスクや責任について、販売者は一切の責任を負いません。**

### 準備リスト

#### ハードウェア

#### コンピュータ要件

- デュアルブートのパーソナルコンピュータ（Windows + Ubuntu / macOS）

#### ソフトウェア
