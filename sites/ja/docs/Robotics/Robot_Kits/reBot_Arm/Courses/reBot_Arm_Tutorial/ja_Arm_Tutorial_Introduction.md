---
description: "Seeed Embodied Intelligence 初級コース — 100% オープンソースの reBot ロボットアームを使って構築し学ぶための、無料で実践的なガイドです。ステージ 1 では、基本概念、ハードウェア、および機材準備を扱います。"
title: Seeed Embodied Intelligence 初級コース
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - ロボットアーム
  - Embodied Intelligence
  - コース
  - チュートリアル
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_introduction
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/ja/rebot_embodied_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot × Embodied Intelligence</span>
    <h2>8 ステージ・40 章 — 無料で実践的</h2>
    <p>
      100% オープンソースの reBot ロボットアームを使って構築し学ぶための、無料で実践的なガイドです。
      ステージ 1 では、基本概念、ハードウェア、および機材準備を扱います。
    </p>
    <div className="hero-actions">
      <a href="#structure">コース構成</a>
      <a href="#principles">コース設計</a>
      <a href="#community">コミュニティ</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>コース概要</strong>
    <span>Seeed ロボティクスチームが執筆し、無料で公開しています。</span>
    <span>100% オープンソースで再現可能な reBot ロボットアームと組み合わせて学べます。</span>
  </div>
</section>

<RebotCourseNav />

<GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />

:::tip
このコースは、ロボティクス学習者、学生、就職希望者、メイカーに対して、明確で体系的な学習パスを提供するために、Seeed Studio AI Robotics チームによって無料で制作・公開されたものです。本コースから学び、他の人と共有していただくことは歓迎しますが、無断での複製、商用での再配布、またはコンテンツの不正使用は禁止されています。著作権は Seeed Studio（Shenzhen）Co., Ltd. に帰属します。

本コースは、100% オープンソースで商用利用および再現が可能なロボットアームである <strong>reBot</strong> を中心に構成されており、ロボットアーム制御、従来型ロボティクスアルゴリズム、そして最新の VLA ベースの Embodied AI を、理論と実践を組み合わせて学びます。コースは完全に無料です — もし役に立ったと感じたら、ハードウェア図面、BOM ファイル、その他のオープンソースリソースも公開している <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">GitHub 上の reBot-DevArm</a> ⭐ にスターを付けてプロジェクトを支援してください。経験豊富なユーザーは、チュートリアルやサンプルのために <a href="https://wiki.seeedstudio.com/ja/robotics_page/" target="_blank" rel="noopener noreferrer">Robotics Wiki</a> から直接始めることもできます。本コースは、厳密な数学的導出よりも実践的な理解に重点を置いており、短期間で堅固な基礎を築き、その先の高度な学習に備えられるように設計されています。
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

本コースでは、実習用プラットフォームとして reBot Arm B601-DM と B601-RS を使用し、ロボットアームの理論、ロボット学習の理論、そして実機ハードウェアでの演習を組み合わせています。コースの概要は次のとおりです。

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
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>ロボットと Embodied Intelligence を知る</strong>
      <span>第 1 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>reBot Arm ハードウェアとオープンソースプロジェクトを知る</strong>
      <span>第 2 章</span>
    </div>
    <span className="course-tag">理論 &amp; 実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_3">
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
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>ロボットアームと関節アクチュエータの基礎</strong>
      <span>第 4 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>CAN バスとモーター通信</strong>
      <span>第 5 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>組み立て、電源、および初回の電源投入</strong>
      <span>第 6 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>MotorBridge モーター制御ライブラリ</strong>
      <span>第 7 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_8">
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
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>ロボット学習と模倣学習の基礎</strong>
      <span>第 9 章</span>
    </div>
    <span className="course-tag">理論 &amp; 実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>LeRobot と reBot Arm のシステムアーキテクチャ</strong>
      <span>第 10 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>リーダー・フォロワーのキャリブレーションと遠隔操作</strong>
      <span>第 11 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>ロボットデータセットとタスク設計</strong>
      <span>第 12 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>カメラ設定と LeRobot によるデータ収集</strong>
      <span>第 13 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>データセット構造と品質検査</strong>
      <span>第 14 章</span>
    </div>
    <span className="course-tag">理論 &amp; 実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>ACT モデルとアクションチャンク</strong>
      <span>第 15 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>最初の ACT ポリシーをトレーニングする</strong>
      <span>第 16 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/rebot_embodied_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>実機ロボットでの推論・評価・データ反復</strong>
      <span>第17章</span>
    </div>
    <span className="course-tag">理論と実践</span>
  </a>
</div>

### ステージ 4–8

:::note
近日公開 — 残りのステージは順次 Wiki に追加されます。
:::

</section>

</div>
