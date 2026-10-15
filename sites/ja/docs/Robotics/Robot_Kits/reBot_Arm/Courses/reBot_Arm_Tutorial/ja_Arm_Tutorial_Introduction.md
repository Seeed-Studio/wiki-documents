---
description: "Seeed Physical AI ビギナーコース — 100% オープンソースの reBot ロボットアームを使って構築し学ぶための、無料でハンズオンなガイドです。全 8 ステージ・39 章を公開済みで、セットアップと基本制御、LeRobot を用いた模倣学習、Isaac GR00T を用いた VLA、ロボットアームの数学とモーションコントロール、自律把持を伴うロボットビジョン、ROS2 ロボットシステム統合、MuJoCo および Isaac Sim によるロボットアームシミュレーションを網羅しています。"
title: Seeed Physical AI ビギナーコース
hide_title: true
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
  date: 2026-10-09
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot × Physical AI · 全 8 ステージ公開済み</span>
    <h2>8 ステージ・39 章 — 無料でハンズオン</h2>
    <p>
      100% オープンソースの reBot ロボットアームを使って構築し学ぶための、無料でハンズオンなガイドです。
      公開済みの各章では、基本概念、組み立てとモーター制御から始まり、
      LeRobot を用いた模倣学習や Isaac GR00T を用いた VLA、さらにその背後にあるロボットアームの数学と
      モーションコントロールへと進み、その先のロボットビジョン、自律把持、ROS2 ロボットシステム
      統合およびシミュレーションまでを扱います。
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
    <span><strong>全 8 ステージ公開済み</strong>（第 1〜39 章）：基礎とハードウェア、組み立てと制御、模倣学習、VLA、数学とモーションコントロール、ロボットビジョンと把持、ROS2 システム統合、MuJoCo / Isaac Sim シミュレーション。</span>
    <span>本コースは完結済みで、全 39 章が wiki に掲載されています。</span>
  </div>
</section>

<GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />

:::tip
本コースは、ロボティクス学習者、学生、就職希望者、メイカーに対して、明確で体系的な学習パスを提供するために、Seeed Studio AI Robotics チームが無料で制作・公開したものです。本コースを学習したり他者と共有したりすることは歓迎しますが、無断での複製、商用での再配布、または不正な利用は禁止されています。著作権は Seeed Studio（Shenzhen）Co., Ltd. に帰属します。

本コースは、100% オープンソースで商用利用および再現が可能なロボットアームである <strong>reBot</strong> を中心に構成されており、ロボットアーム制御、従来型ロボティクスアルゴリズム、そして最新の VLA ベースのエンボディド AI を、理論と実践を組み合わせてカバーします。コースは完全に無料です — もし役に立ったと感じたら、ハードウェア図面、BOM ファイル、その他のオープンソースリソースも公開されている <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">GitHub 上の reBot-DevArm</a> ⭐ にスターを付けてプロジェクトを支援してください。経験豊富なユーザーは、チュートリアルやサンプルのために <a href="https://wiki.seeedstudio.com/ja/robotics_page/" target="_blank" rel="noopener noreferrer">Robotics Wiki</a> に直接進むこともできます。本コースは、難解な数学的導出よりも実践的な理解に重点を置いており、短期間でしっかりとした基礎を築き、より高度な学習に備えられるように設計されています。ステージ 5 では、座標系、運動学、ヤコビアン、軌道計画といった数学的基礎も導入しますが、ハンズオンの章を進める際に必要に応じて参照できるリファレンスとして読めるように書かれています。ステージ 6 も同様の構成で、第 27 章と第 28 章がビジョン理論、第 29 章がビジュアルグラスピングの実践編です。ステージ 7 も同じパターンで、第 31 章と第 32 章が ROS2 の概念、第 33 章と第 34 章が実際の ROS2 システム上でアームを動かす内容です。ステージ 8 では、アームをコンピュータ内に配置することでコースを締めくくります：第 35 章がシミュレーション理論、第 36 章と第 37 章が MuJoCo 上でのアームの動作、第 38 章が Isaac Sim での構築、第 39 章が実機アームとシミュレーションの同期です。
:::

<section id="community" className="section-card">
  <div className="section-title">
    <span>コミュニティ</span>
    <h2>コミュニティグループ</h2>
  </div>

<div style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-01.png" alt="Facebook グループ QR コード" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Facebook</p>
  </div>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02.png" alt="Discord reBot グループロゴ" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Discord</p>
  </div>
</div>

</section>

<section id="principles" className="section-card">
  <div className="section-title">
    <span>設計</span>
    <h2>コース設計の基本方針</h2>
  </div>

本コースでは、実習用プラットフォームとして reBot Arm B601-DM と B601-RS を使用し、ロボットアーム理論、ロボティクス学習理論、実機ハードウェアでの演習を組み合わせています。コースの概要は次のとおりです。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-03.png" alt="コース概要" />
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
    <span className="course-tag">理論 &amp; 実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>以降のコースのためのハードウェア選定</strong>
      <span>第 3 章</span>
    </div>
    <span className="course-tag">理論 &amp; 実践</span>
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
      <strong>組み立て、電源供給、初回起動</strong>
      <span>第 6 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>MotorBridge モーター制御ライブラリ</strong>
      <span>第 7 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>Python SDK を用いた reBot Arm の制御</strong>
      <span>第 8 章</span>
    </div>
    <span className="course-tag">理論 &amp; 実践</span>
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
    <span className="course-tag">理論 &amp; 実践</span>
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
    <span className="course-tag">実践</span>
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
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>データセット構造と品質検査</strong>
      <span>第14章</span>
    </div>
    <span className="course-tag">理論と実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>ACTモデルとアクションチャンク</strong>
      <span>第15章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>最初のACTポリシーをトレーニングする</strong>
      <span>第16章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>実機ロボットの推論・評価・データ反復</strong>
      <span>第17章</span>
    </div>
    <span className="course-tag">理論と実践</span>
  </a>
</div>

### ステージ4：VLA と Isaac GR00T

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>マルチモーダル学習とVLAの基礎</strong>
      <span>第18章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>ロボットのエンボディメントとGR00Tシステムアーキテクチャ</strong>
      <span>第19章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>reBot VLAデータセットの準備</strong>
      <span>第20章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>Isaac GR00T による reBot Arm のファインチューニング</strong>
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
    <span className="course-tag">理論と実践</span>
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

### ステージ6：ロボットビジョンと自律把持

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_27">
    <span className="course-index">27</span>
    <div className="course-path-copy">
      <strong>ロボットビジョンと3D認識</strong>
      <span>第27章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_28">
    <span className="course-index">28</span>
    <div className="course-path-copy">
      <strong>物体検出とハンドアイキャリブレーション</strong>
      <span>第28章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_29">
    <span className="course-index">29</span>
    <div className="course-path-copy">
      <strong>reBot Arm の自律視覚把持</strong>
      <span>第29章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_30">
    <span className="course-index">30</span>
    <div className="course-path-copy">
      <strong>音声とマルチモーダルインタラクション</strong>
      <span>第30章</span>
    </div>
    <span className="course-tag">選択科目</span>
  </a>
</div>

### ステージ7：ROS2 とロボットシステム統合

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_31">
    <span className="course-index">31</span>
    <div className="course-path-copy">
      <strong>ROS2通信とロボットソフトウェアアーキテクチャ</strong>
      <span>第31章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_32">
    <span className="course-index">32</span>
    <div className="course-path-copy">
      <strong>URDF・TF・ロボットモデル</strong>
      <span>第32章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_33">
    <span className="course-index">33</span>
    <div className="course-path-copy">
      <strong>reBot Arm の ROS2 統合</strong>
      <span>第33章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_34">
    <span className="course-index">34</span>
    <div className="course-path-copy">
      <strong>MoveIt2 によるモーションプランニング</strong>
      <span>第34章</span>
    </div>
    <span className="course-tag">理論と実践</span>
  </a>
</div>

### ステージ8：MuJoCo と Isaac Sim によるロボットアームシミュレーション

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_35">
    <span className="course-index">35</span>
    <div className="course-path-copy">
      <strong>ロボットシミュレーションの基礎とプラットフォーム紹介</strong>
      <span>第35章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_36">
    <span className="course-index">36</span>
    <div className="course-path-copy">
      <strong>MuJoCo で reBot Arm を動かす</strong>
      <span>第36章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_37">
    <span className="course-index">37</span>
    <div className="course-path-copy">
      <strong>MuJoCo における運動学と軌道制御</strong>
      <span>第37章</span>
    </div>
    <span className="course-tag">理論と実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_38">
    <span className="course-index">38</span>
    <div className="course-path-copy">
      <strong>Isaac Sim で reBot Arm を動かす</strong>
      <span>第38章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_physical_ai_course_chapter_39">
    <span className="course-index">39</span>
    <div className="course-path-copy">
      <strong>実機アームとシミュレーションアームの同期</strong>
      <span>第39章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
</div>

</section>

</div>
