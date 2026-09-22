---
description: "Seeed Embodied Intelligence Beginner's Course の第 2 章 — reBot Arm オープンソースプロジェクト、DM 版と RS 版の違い、およびそのオープンソースハードウェアとソフトウェアについて学びます。"
title: 第 2 章 - ハードウェアとオープンソースプロジェクト
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - ロボットアーム
  - オープンソース
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_2
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/ja/rebot_embodied_ai_course_chapter_2/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 1 · 第 2 章 · 理論 &amp; 実践</span>
    <h2>2. reBot Arm のハードウェアとオープンソースプロジェクトを知る</h2>
    <p>
      Seeed Embodied Intelligence Beginner's Course の第 2 章では、reBot Arm
      のオープンソースプロジェクト、DM 版と RS 版の違い、およびそのオープンソース
      ハードウェアとソフトウェアについて学びます。
    </p>
    <div className="hero-actions">
      <a href="#what-is-rebot-arm">reBot Arm とは</a>
      <a href="#open-source">オープンソース</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章で学ぶこと</strong>
    <span>2.1 reBot Arm とは</span>
    <span>2.2 なぜ 2 つのバージョン DM と RS を設計したのか</span>
    <span>2.3 reBot Arm DM と reBot Arm RS のパラメータ比較</span>
    <span>2.4 オープンソースハードウェアとオープンソースソフトウェア</span>
  </div>
</section>

<RebotCourseNav />

## 2.1 reBot Arm とは

<section id="what-is-rebot-arm" className="section-card">
  <div className="section-title">
    <span>概要</span>
    <h2>2.1 reBot Arm とは</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-01.png" alt="reBot Arm" />
</div>

reBot Arm B601 は、Seeed Studio がリリースした、構造ハードウェアからソフトウェアまで完全にオープンソースのロボットアームです。ロボット教育、アルゴリズム開発、エンボディドインテリジェンス研究向けのオープンソースデスクトップロボットアームであり、モジュラー式の機械構造を採用し、およそ 750 mm のリーチと 6+1 自由度を備えています。USB-CAN を介してコンピュータに接続し、ロボットアーム制御、ロボットビジョン、模倣学習、VLA などの実験に使用できます。

reBot Arm は単なるロボットアームのハードウェアではなく、低レベル制御から高レベル AI アプリケーションまでの完全な開発資料も提供します。このオープンソースプロジェクトから、ゼロから次のことを学ぶことができます：

- ロボットアームの設計と組み立て（DM 製品詳細ビデオ）;
- ロボットアームのキャリブレーションと関節制御;
- 順運動学、逆運動学、軌道計画;
- Pinocchio による動力学解析と MeshCat による可視化;
- Leader–Follower マスタースレーブ遠隔操作;
- LeRobot によるデータ収集、学習、評価; Hugging Face Web ページでの記録;
- RGB-D による物体認識と自律把持;
- Isaac Sim;
- ROS2 連携と二次開発;
- ACT や GR00T などのロボットポリシーモデルへの適用。

その主な目的は、比較的低コストでオープンかつ改変可能なハードウェアを用いて、ユーザーがロボットアームおよびエンボディドインテリジェンスのアルゴリズムを学習・検証できるようにすることです。

</section>

## 2.2 なぜ 2 つのバージョン DM と RS を設計したのか

<section id="two-versions" className="section-card">
  <div className="section-title">
    <span>ハードウェアバージョン</span>
    <h2>2.2 なぜ 2 つのバージョン DM と RS を設計したのか</h2>
  </div>

reBot Arm B601 には、次の 2 つのバージョンがあります：

- **B601-DM**
- **B601-RS**

両バージョンは、類似した機械構造と上位ソフトウェアシステムを使用していますが、使用している関節モーターの種類が異なります。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-02.png" alt="DM and RS comparison" />
</div>

</section>

## 2.3 reBot Arm DM と reBot Arm RS のパラメータ比較

<section id="parameter-comparison" className="section-card">
  <div className="section-title">
    <span>比較</span>
    <h2>2.3 reBot Arm DM と reBot Arm RS のパラメータ比較</h2>
  </div>

| 製品                    | reBot Arm DM                                                                     | reBot Arm RS                                                                     |
| ---------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **SKU**                | 100065783                                                                        | 100019336                                                                        |
| **購入リンク**          | [Bazaar](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html) | [Bazaar](https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html) |
| **自由度**              | 6+1                                                                              | 6+1                                                                              |
| **定格可搬重量**        | **1.5 kg**                                                                       | **2.5 kg**                                                                       |
| **最大可搬重量**        | **2.5 kg**                                                                       | **5 kg**                                                                         |
| **繰り返し精度**        | **0.2 mm**                                                                       | **0.1 mm**                                                                       |
| **リーチ**              | 767 mm                                                                           | 754.7 mm                                                                         |
| **通信方式**            | USB-CAN アダプタ経由の CAN バス                                                 | USB-CAN アダプタ経由の CAN バス                                                 |
| **電源**                | 24V DC, 15A                                                                      | 48V DC, 12.5A                                                                    |
| **アクチュエータ種類**  | [Damiao DM プラネタリギア関節アクチュエータ](https://www.seeedstudio.com/DM4340P-Actuator-p-6663.html)    | [RoboStride 準ダイレクトドライブ関節アクチュエータ](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)  |


</section>

## 2.4 オープンソースハードウェアとオープンソースソフトウェア

<section id="open-source" classNameName="section-card">
  <div className="section-title">
    <span>オープンソース</span>
    <h2>2.4 オープンソースハードウェアとオープンソースソフトウェア</h2>
  </div>

reBot Arm のハードウェアおよびソフトウェアの資料は、いずれも一般に公開されています。

GitHub リポジトリ: <a href="https://github.com/Seeed-Projects/reBot-DevArm/" target="_blank" rel="noopener noreferrer">https://github.com/Seeed-Projects/reBot-DevArm/</a>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-2/ch2-03.png" alt="Open-source hardware and software" />
</div>

</section>

</div>
