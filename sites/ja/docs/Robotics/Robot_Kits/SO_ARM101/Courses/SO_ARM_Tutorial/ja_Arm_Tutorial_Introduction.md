---
description: "SO-ARM Physical AI ビギナーコース — オープンソースの SO-ARM100 / SO-ARM101 ロボットアームを使って構築し学ぶための、無料でハンズオンなガイドです。全 4 ステージ・22 章を公開済みで、セットアップと組み立て、LeRobot を用いた模倣学習、双腕訓練、Isaac GR00T を用いた VLA、および SenseCraft Robotics プラットフォームによるノーコード VLA を網羅しています。"
title: SO-ARM Physical AI ビギナーコース
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - LeRobot
  - ロボットアーム
  - Physical AI
  - コース
  - チュートリアル
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_introduction
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × Physical AI · 全 4 ステージ公開済み</span>
    <h2>4 ステージ・22 章 — 無料でハンズオン</h2>
    <p>
      オープンソースの SO-ARM100 / SO-ARM101 ロボットアームを使って構築し学ぶための、
      無料でハンズオンなガイドです。公開済みの各章では、基本概念、組み立てとサーボ制御
      から始まり、LeRobot を用いた模倣学習と双腕訓練を経て、Isaac GR00T による VLA
      ファインチューニングへと進み、SenseCraft Robotics プラットフォームのノーコード
      VLA で締めくくります。
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
    <span>オープンソースの SO-ARM100 / SO-ARM101 リーダー・フォロワーアームキットと組み合わせて学べます。</span>
    <span><strong>全 4 ステージ公開済み</strong>（第 1〜22 章）：基礎とハードウェア、組み立てとサーボ制御、模倣学習と双腕訓練、GR00T VLA とノーコード SenseCraft VLA。</span>
    <span>本コースは完結済みで、全 22 章が wiki に掲載されています。</span>
  </div>
</section>

<GitHubStarButton owner="TheRobotStudio" repo="SO-ARM100" />

:::tip
本コースは Seeed Studio AI ロボティクスチームが無料で作成・公開したもので、ロボティクス学習者・学生・就活者・メイカーに向けた明確で体系的な学習パスを提供します。学習や共有は自由ですが、無断複製・商業的再配布・内容の悪用は禁止です — 著作権は Seeed Studio (Shenzhen) Co., Ltd. に帰属します。

本コースは <strong>SO-ARM100 / SO-ARM101</strong> を軸に展開します。<a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">TheRobotStudio</a> がオープンソース設計し、Seeed Studio が完全なキットとして提供するリーダー・フォロワーアームで、Hugging Face の <a href="https://github.com/huggingface/lerobot" target="_blank" rel="noopener noreferrer">LeRobot</a> プロジェクトの参考ハードウェアでもあります。理論とハンズオンを合わせ、ロボットアーム制御、LeRobot の模倣学習エコシステム、最新の VLA ベース具身知能をカバーします。コースは完全無料です — 役に立ったと思ったら <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">GitHub の SO-ARM100</a> に Star ⭐ をお願いします。STL ファイルなどのオープンソース資料もそこにあります。経験者の方は <a href="https://wiki.seeedstudio.com/ja/robotics_page/" target="_blank" rel="noopener noreferrer">ロボティクス Wiki</a> のチュートリアルとサンプルを直接ご覧ください。本コースは深い数学的導出よりも実践的な理解を重視します。ステージ 2 で組み立てと設定を順に進め、ステージ 3 ではキャリブレーション・テレオペレーション・データセット・ACT 訓練・実機推論という LeRobot の完全ループを歩き、選択科目の双腕章で締めます。ステージ 4 ではまず VLA 理論と GR00T アーキテクチャを学び、SO-ARM データセットで GR00T をファインチューニングし、訓練 GPU のない読者のために SenseCraft Robotics のノーコードパスで締めくくります。
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
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02.png" alt="Discord グループロゴ" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Discord</p>
  </div>
</div>

</section>

<section id="principles" className="section-card">
  <div className="section-title">
    <span>設計</span>
    <h2>コース設計の考え方</h2>
  </div>

本コースは SO-ARM100 / SO-ARM101 リーダー・フォロワーアームキットを実践プラットフォームとして、ロボットアーム理論・ロボット学習理論・実機演習を組み合わせて進めます。コースのアウトラインは以下の通りです：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/Intro_en.png" alt="コースのアウトライン" />
</div>

</section>

<section id="structure" className="section-card">
  <div className="section-title">
    <span>構成</span>
    <h2>コース構成</h2>
  </div>

### ステージ 1：基本概念と教具の準備

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>ロボットと Physical AI を知る</strong>
      <span>第 1 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>SO-ARM のハードウェアとオープンソースプロジェクトを知る</strong>
      <span>第 2 章</span>
    </div>
    <span className="course-tag">理論と実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>以降の章で必要なハードウェアの選定</strong>
      <span>第 3 章</span>
    </div>
    <span className="course-tag">理論と実践</span>
  </a>
</div>

### ステージ 2：SO-ARM の組み立てと基本制御

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>ロボットアームとバスサーボの基礎</strong>
      <span>第 4 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>ソフトウェア環境の構築</strong>
      <span>第 5 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>モーター設定とアームの組み立て</strong>
      <span>第 6 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>サーボデバッグツールの使い方</strong>
      <span>第 7 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
</div>

### ステージ 3：模倣学習と LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>ロボット学習と模倣学習の基礎</strong>
      <span>第 8 章</span>
    </div>
    <span className="course-tag">理論と実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>LeRobot と SO-ARM のシステムアーキテクチャ</strong>
      <span>第 9 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>リーダー・フォロワーのキャリブレーションとテレオペレーション</strong>
      <span>第 10 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>ロボットデータセットとタスク設計</strong>
      <span>第 11 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>カメラ設定と LeRobot データ収集</strong>
      <span>第 12 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>データセット構造と品質チェック</strong>
      <span>第 13 章</span>
    </div>
    <span className="course-tag">理論と実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>ACT モデルとアクションチャンキング</strong>
      <span>第 14 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>最初の ACT ポリシーを訓練する</strong>
      <span>第 15 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>実機推論・評価・データイテレーション</strong>
      <span>第 16 章</span>
    </div>
    <span className="course-tag">理論と実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>SO-ARM 双腕訓練</strong>
      <span>第 17 章</span>
    </div>
    <span className="course-tag">選択科目</span>
  </a>
</div>

### ステージ 4：VLA — Isaac GR00T とノーコード SenseCraft

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>マルチモーダル学習と VLA の基礎</strong>
      <span>第 18 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>ロボット本体と GR00T システムアーキテクチャ</strong>
      <span>第 19 章</span>
    </div>
    <span className="course-tag">理論</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>SO-ARM VLA データセットの準備</strong>
      <span>第 20 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>Isaac GR00T で SO-ARM をファインチューニング</strong>
      <span>第 21 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
  <a className="course-path-item" href="/ja/robotics/soarm_physical_ai_course_chapter_22">
    <span className="course-index">22</span>
    <div className="course-path-copy">
      <strong>SenseCraft Robotics のノーコード VLA</strong>
      <span>第 22 章</span>
    </div>
    <span className="course-tag">実践</span>
  </a>
</div>

</section>

</div>
