---
description: "Seeed Physical AI Beginner's Course — 100% オープンソースの reBot ロボットアームを使って構築と学習を行うための、無料でハンズオンなガイドです。セットアップと基本制御、LeRobot を用いた模倣学習、Isaac GR00T を用いた VLA、ロボットアームの数学とモーションコントロールを網羅する 5 ステージ・26 章が公開されています。"
title: Seeed Physical AI ビギナーズコース
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - ロボットアーム
  - Physical AI
  - コース
  - チュートリアル
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_introduction
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-25
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-09-25'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot × Physical AI · 5 ステージ公開中</span>
    <h2>5 ステージ・26 章 — 無料でハンズオン</h2>
    <p>
      100% オープンソースの reBot ロボットアームを使って構築と学習を行うための、無料でハンズオンなガイドです。
      公開済みの各章では、基本概念、組み立てとモーター制御から始まり、
      LeRobot を用いた模倣学習や Isaac GR00T を用いた VLA、さらにその背後にあるロボットアームの数学と
      モーションコントロールまでを扱います。
    </p>
    <div className="hero-actions">
      <a href="#structure">コース構成</a>
      <a href="#principles">コース設計</a>
      <a href="#community">コミュニティ</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>コース概要</strong>
    <span>Seeed ロボティクスチームが無料で執筆・公開しています。</span>
    <span>100% オープンソースで再現可能な reBot ロボットアームと組み合わせて学べます。</span>
    <span><strong>ステージ 1〜5 を公開済み</strong>（第 1〜26 章）：基礎とハードウェア、組み立てと制御、模倣学習、VLA、数学とモーションコントロール。</span>
    <span>ステージ 6〜8（ビジョンと把持、ROS2 連携、シミュレーション）は順次公開予定です。</span>
  </div>
</section>

<GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />

:::tip
このコースは、ロボティクス学習者、学生、就職希望者、メイカーに対して、明確で体系的な学習パスを提供するために、Seeed Studio AI Robotics チームによって無料で制作・公開されたものです。本コースから学び、他の人と共有していただくことは歓迎しますが、無断での複製、商用での再配布、またはコンテンツの不正利用は禁止されています。著作権は Seeed Studio（Shenzhen）Co., Ltd. に帰属します。

本コースは、100% オープンソースで商用利用可能かつ再現可能なロボットアームである <strong>reBot</strong> を中心に構成されており、理論と実機演習を組み合わせて、ロボットアーム制御、従来型ロボティクスアルゴリズム、そして最新の VLA ベースのエンボディド AI をカバーします。コースは完全に無料です。もし役に立ったと感じたら、ハードウェア図面、BOM ファイル、その他のオープンソースリソースも公開している <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">GitHub 上の reBot-DevArm</a> ⭐ にスターを付けてプロジェクトを支援してください。経験豊富なユーザーは、チュートリアルやサンプルのために <a href="https://wiki.seeedstudio.com/ja/robotics_page/" target="_blank" rel="noopener noreferrer">Robotics Wiki</a> から直接始めることもできます。本コースは、厳密な数学的導出よりも実践的な理解に重点を置いており、短期間でしっかりとした基礎を築き、その後の高度な学習に備えられるように設計されています。ステージ 5 では、座標系、運動学、ヤコビアン、軌道計画といった数学的基礎も紹介しますが、ハンズオンの章を進める際に一度通読し、その後必要に応じて参照できるリファレンス資料として執筆されています。
:::

<section id="community" className="section-card">
  <div className="section-title">
    <span>コミュニティ</span>
    <h2>コミュニティグループ</h2>
  </div>

<div style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-01.png" alt="Facebook group QR code" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Facebook</p>
  </div>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02.png" alt="Discord reBot group logo" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Discord</p>
  </div>
</div>

</section>

<section id="principles" className="section-card">
  <div className="section-title">
    <span>設計</span>
    <h2>コース設計の基本方針</h2>
  </div>

本コースでは、実習用プラットフォームとして reBot Arm B601-DM と B601-RS を使用し、ロボットアームの理論、ロボティクス学習理論、実機ハードウェアでの演習を組み合わせています。コースの概要は次のとおりです。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-03.png" alt="Course outline" />
</div>

</section>

<section id="structure" className="section-card">
  <div className="section-title">
    <span>構成</span>
    <h2>コース構成</h2>
  </div>

### ステージ 1：基本概念と機材準備

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>ロボットと Physical AI を知る</strong>
      <span>第 1 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>reBot Arm ハードウェアとオープンソースプロジェクトを知る</strong>
      <span>第 2 章</span>
    </div>
    <span className="course-tag">理論 &amp; 実習</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>以降のコースに向けたハードウェア選定</strong>
      <span>第 3 章</span>
    </div>
    <span className="course-tag">理論 &amp; 実習</span>
  </a>
</div>

### ステージ 2：ロボットアームの組み立てと基本制御

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>ロボットアームと関節アクチュエータの基礎</strong>
      <span>第 4 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>CAN バスとモーター通信</strong>
      <span>第 5 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>組み立て、電源、初回の電源投入</strong>
      <span>第 6 章</span>
    </div>
    <span className="course-tag">実習</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>MotorBridge モーター制御ライブラリ</strong>
      <span>第 7 章</span>
    </div>
    <span className="course-tag">実習</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>Python SDK を用いた reBot Arm の制御</strong>
      <span>第 8 章</span>
    </div>
    <span className="course-tag">理論 &amp; 実習</span>
  </a>
</div>

### ステージ 3：模倣学習と LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>ロボット学習と模倣学習の基礎</strong>
      <span>第 9 章</span>
    </div>
    <span className="course-tag">理論 &amp; 実習</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>LeRobot と reBot Arm のシステムアーキテクチャ</strong>
      <span>第 10 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>リーダー・フォロワーのキャリブレーションと遠隔操作</strong>
      <span>第 11 章</span>
    </div>
    <span className="course-tag">実習</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>ロボットデータセットとタスク設計</strong>
      <span>第 12 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>カメラ設定と LeRobot によるデータ収集</strong>
      <span>第 13 章</span>
    </div>
    <span className="course-tag">実習</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>データセット構造と品質チェック</strong>
      <span>第 14 章</span>
    </div>
    <span className="course-tag">理論 &amp; 実習</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>ACT モデルとアクションチャンク</strong>
      <span>第 15 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>最初の ACT ポリシーのトレーニング</strong>
      <span>第16章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>実機ロボットでの推論・評価・データ反復</strong>
      <span>第17章</span>
    </div>
    <span className="course-tag">理論 &amp; 実践</span>
  </a>
</div>

### ステージ4：VLA と Isaac GR00T

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>マルチモーダル学習と VLA の基礎</strong>
      <span>第18章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>ロボットのエンボディメントと GR00T システムアーキテクチャ</strong>
      <span>第19章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>reBot VLA データセットの準備</strong>
      <span>第20章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>Isaac GR00T による reBot アームのファインチューニング</strong>
      <span>第21章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_22">
    <span className="course-index">22</span>
    <div className="course-path-copy">
      <strong>GR00T 推論と実機ロボットへのデプロイ</strong>
      <span>第22章</span>
    </div>
    <span className="course-tag">理論 &amp; 実践</span>
  </a>
</div>

### ステージ5：ロボットアームの数学とモーション制御

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_23">
    <span className="course-index">23</span>
    <div className="course-path-copy">
      <strong>ロボットアームの数学的基礎と座標系</strong>
      <span>第23章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_24">
    <span className="course-index">24</span>
    <div className="course-path-copy">
      <strong>順運動学・逆運動学・ヤコビ行列</strong>
      <span>第24章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_25">
    <span className="course-index">25</span>
    <div className="course-path-copy">
      <strong>軌道計画とロボットアーム制御</strong>
      <span>第25章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_26">
    <span className="course-index">26</span>
    <div className="course-path-copy">
      <strong>Pinocchio と MeshCat</strong>
      <span>第26章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
</div>

### ステージ6–8

:::note
近日公開予定 — ロボットアームのビジョンと自律把持（ステージ6）、ROS2 とロボットシステム統合（ステージ7）、MuJoCo / Isaac Sim シミュレーション（ステージ8）は、順次この wiki に追加されます。
:::

</section>

</div>
