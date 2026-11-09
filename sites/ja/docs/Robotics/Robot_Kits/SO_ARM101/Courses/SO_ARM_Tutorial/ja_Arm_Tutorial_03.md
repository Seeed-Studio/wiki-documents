---
description: "SO-ARM Physical AI ビギナーコース第 3 章 — 各ステージで必要なハンズオンハードウェアの一覧：主制御デバイス、SO-ARM キット、カメラ、およびオプションの深度カメラ。"
title: 第 3 章 - コースで必要なハードウェアの選定
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - ロボットアーム
  - ハードウェア
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_3
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_3/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 1 · 第 3 章 · 理論と実践</span>
    <h2>3. 以降の章で必要なハードウェアの選定</h2>
    <p>
      各ステージで必要なハンズオンハードウェアの一覧：主制御デバイス、SO-ARM キット、カメラ、およびオプションの深度カメラ。
    </p>
    <div className="hero-actions">
      <a href="#hardware-selection">ハードウェア一覧</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>必要なもの</strong>
    <span>全章を通して使う主制御デバイス（Ubuntu x86 または Jetson）。</span>
    <span>SO-ARM キット 1 式 — リーダーとフォロワーの両方が含まれます。</span>
    <span>模倣学習と VLA ステージ用の USB カメラ 2 台。</span>
    <span>訓練ステージ用の NVIDIA GPU（またはクラウド／ノーコード）。</span>
  </div>
</section>

## 3.1 以降の章で必要なハードウェアの選定

<section id="hardware-selection" className="section-card">
  <div className="section-title">
    <span>ハードウェア</span>
    <h2>3.1 以降の章で必要なハードウェアの選定</h2>
  </div>

この節では各章で必要なハンズオンハードウェアを紹介します。各自の状況に合わせて購入してください。

コース全体を通して、自分の PC をアルゴリズムの展開デバイスとして使います。Ubuntu x86 マシン・Mac・Jetson どれでも構いませんが、**Windows 上の WSL や仮想マシン Ubuntu は使わないでください** — バグ解決に大量の時間を取られ、学習効率が下がります。

### 主制御デバイス

全章で、コードの展開先として主制御デバイスが 1 台必要です。推奨デバイスとシステム：

| 必要なハードウェア | リンク | 数量 | 備考 | 対象章 |
| :--- | :--- | :---: | :--- | :--- |
| デスクトップまたはノート PC | - | 1 | ネイティブ Ubuntu 22.04、CUDA 12+、Python 3.12、Torch 2.6+。訓練には 12GB 以上の VRAM（例：RTX 4080）と 16GB 以上のメモリを推奨 | 全章 |
| reComputer Robotics J4012（Jetson Orin） | [Bazaar](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 1 | JetPack 6.0 / 6.1（JetPack 6.2 は未対応） | ステージ 2、3 |
| NVIDIA Jetson AGX Thor 128G | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | ステージ 4 の GR00T N1.5 推論用 | ステージ 2、3、4 |

:::tip
訓練用 GPU がなくてもコースは完走できます：無料のクラウドノートブック（例：Google Colab）で小さなポリシーを訓練し、NVIDIA Brev で GR00T をファインチューニングするか、第 22 章 SenseCraft Robotics のノーコードクラウド訓練を使いましょう。
:::

### ステージ 2：SO-ARM の組み立てと基本制御

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| SO-ARM101 キット（リーダー + フォロワー） | [SO-ARM101 Pro キット](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html)<br/>[SO-ARM100 キット](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html) | 1 | - キット版：サーボ一式、制御ボード、ケーブルが付属し、プリント部品は自分で 3D プリントまたは別途購入<br/>- 組み立て済み版：第 6 章の組み立て手順はスキップ可<br/>- スタンダード（5V）と Pro（リーダー 5V / フォロワー 12V）の電源ルールに注意 |

### ステージ 3：模倣学習と LeRobot

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| SO-ARM101 キット（リーダー + フォロワー） | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 | ステージ 2 と同じキット |
| 32 × 32 mm USB カメラ | - | 2 | データ収集には 2 視点（前面 + 側面、または上面 + グリッパ）が必要。キットに 1 台付属、もう 1 台は別途準備 |
| マウスパッド / デスクマット | - | 1 | 作業面の保護と安定化、物体配置の再現性確保 |

### ステージ 4：VLA — Isaac GR00T とノーコード SenseCraft

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| SO-ARM101 キット（リーダー + フォロワー） | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 | ステージ 2 と同じキット |
| 32 × 32 mm USB カメラ | - | 2 | データセットと推論でカメラキーを一致させる必要あり |
| 訓練 GPU（またはクラウド） | - | 1 | GR00T ファインチューニングには約 25GB VRAM（Ampere 以降、例：RTX 4090 / A6000）。V100 は非対応。代替：NVIDIA Brev クラウド、または第 22 章のノーコードパス |
| NVIDIA Jetson AGX Thor（任意、エッジ推論用） | [Bazaar](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 1 | ファインチューニング済み GR00T N1.5 推論サービスをエッジで実行 |

### オプションのアップグレード

| 必要なハードウェア | リンク | 数量 | 備考 |
| :--- | :--- | :---: | :--- |
| Orbbec Gemini 2 深度カメラ | [Bazaar](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html) | 1 | カメラ章のオプション RGB-D センシング |
| ソフトグリッパのプリントファイル | [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git) | - | 柔らかい・壊れやすい・不整形な物体用の TPU フィンガー |

</section>

</div>
