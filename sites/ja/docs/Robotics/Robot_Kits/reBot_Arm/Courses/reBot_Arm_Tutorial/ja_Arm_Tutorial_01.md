---
description: "Seeed Physical AI Beginner's Course の第1章 — ロボットとロボットアームとは何か、自由度とは何か、そして従来制御・模倣学習・VLA の違いを理解します。"
title: 第1章 - ロボットと Physical AI
keywords:
  - reBot
  - Robotic Arm
  - Robot
  - Physical AI
  - DOF
  - Imitation Learning
  - VLA
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_1
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_1/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 1 · 第1章 · 理論</span>
    <h2>1. ロボットと Physical AIを知る</h2>
    <p>
      Seeed Physical AI Beginner's Course の第1章では、ロボットとロボットアームとは何か、
      自由度とは何か、そして従来制御・模倣学習・VLA の違いについて理解します。
      </p>
    <div className="hero-actions">
    <a href="#objectives">学習目標</a>
      <a href="#paradigms">制御パラダイム</a>
      </div>
    </div>
  <div className="hero-card">
  <strong>この章の内容</strong>
    <span>1.1 学習目標</span>
    <span>1.2 ロボットとは？</span>
    <span>1.3 ロボットアームとは？</span>
    <span>1.4 従来制御・模倣学習・VLA</span>
    <span>1.5 本コースにおける reBot Arm の役割</span>
    </div>
  </section>

<RebotCourseNav />

## 1.1 学習目標

<section id="objectives" className="section-card">
  <div className="section-title">
  <span>目標</span>
    <h2>1.1 学習目標</h2>
    </div>

この章を学び終えると、次のことができるようになります：

1. ロボットとロボットアームの基本概念を説明できる。
2. ロボットアームの関節、リンク、自由度、エンドエフェクタを識別できる。
3. ロボットシステムにおける認識・意思決定・制御を理解できる。
4. 産業用ロボットアームとエンボディドインテリジェンスロボットアームを区別できる。
5. 従来のプログラム制御・模倣学習・VLA を区別できる。
6. 完全なエンボディドインテリジェンスロボットアームシステムの構成を説明できる。
7. エンボディドインテリジェンス全体のシステムにおける reBot Arm の役割を理解できる。

</section>

## 1.2 ロボットとは？

<section id="robot" className="section-card">
  <div className="section-title">
  <span>基礎</span>
    <h2>1.2 ロボットとは？</h2>
    </div>

ロボットは、人間のような見た目をした機械であるとは限りません。機能の観点から見ると、ロボットとは次のことができるシステムです：

- 自身または環境に関する情報を取得する；
- 目標に基づいて計算や意思決定を行う；
- アクチュエータを通じて、自身の状態や周囲の環境を変化させる。

ロボットシステムは、一般的に次のように抽象化できます：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-01.png" alt="ロボットシステムの抽象化" />
  </div>

例えば、卓上の把持ロボットは、次のプロセスを完了する必要があります：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-02.png" alt="卓上把持ロボットのプロセス" />
  </div>

したがって、ロボットは単に「動ける」だけでなく、継続的に動作する閉ループを形成できなければなりません。

### ロボットと一般的な機械の違い

一般的な機械は、多くの場合、決まった動作で動きます。例えば：

- 扇風機は、電源を入れると回転し続ける；
- コンベヤーベルトは、一定の速度で動き続ける；
- 一般的なモーターは、電圧を加えると回転する。

一方ロボットは、通常、より強力な状態認識、プログラム制御、タスク実行能力を備えています。例えば、ロボットアームは、異なる目標位置に応じて複数の関節を制御し、さまざまな姿勢へと動かすことができます。

</section>

## 1.3 ロボットアームとは？

<section id="arm" className="section-card">
  <div className="section-title">
  <span>基礎</span>
    <h2>1.3 ロボットアームとは？</h2>
    </div>

ロボットアームは、複数の関節とリンクから構成されるロボット機構です。複数の関節を協調して動かすことで、エンドエフェクタを指定された位置と姿勢に移動させ、把持、搬送、組み立て、研磨、溶接などのタスクを完了します。

ロボットアームは、次のように単純化して理解できます：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-03.png" alt="ロボットアーム" />
  </div>

ロボットアームは、人間の腕といくつかの共通点があります。しかし、ロボットアームが必ずしも人間の解剖学構造を模倣しているとは限りません。関節の数や配置、作業空間は、タスクの要件に応じて設計されます。

### 自由度とは

自由度は、一般的に DOF（Degree of Freedom）と表記されます。DOF は、機械システムが独立して動くことのできる方向の数を表します。

三次元空間では、剛体の完全な姿勢は次の要素から構成されます：

- X・Y・Z 軸方向の並進運動；
- X・Y・Z 軸回りの回転運動。

したがって、3D 空間内の物体は、最大で 6 自由度を持ちます。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-04.png" alt="6 自由度" />
  </div>

6 自由度ロボットアームは、通常、3D 空間におけるエンドエフェクタの位置と姿勢を制御できます。

ここで注意すべき点は次のとおりです：

:::note
6 自由度だからといって、ロボットアームにモーターが 6 個しかないという意味ではなく、すべての位置と姿勢に必ず到達できるという意味でもありません。
:::

ロボットアームは、リンク長、関節の可動範囲、特異姿勢、干渉（衝突）などの要因の影響も受けます。

</section>

## 1.4 従来制御・模倣学習・VLA

<section id="paradigms" className="section-card">
  <div className="section-title">
  <span>パラダイム</span>
    <h2>1.4 従来制御・模倣学習・VLA</h2>
    </div>

ロボットアームは、さまざまな方法で動作（アクション）を得ることができます。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem', margin: '1.25rem 0 1.5rem'}}>
  <div>
  <h4 style={{margin: '0 0 0.25rem'}}>従来のプログラム制御</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-05.png" alt="従来のプログラム制御" />
      </div>
    <p>固定された位置・固定された手順・繰り返しタスクに適しています。</p>
    </div>

  <div>
  <h4 style={{margin: '0 0 0.25rem'}}>模倣学習</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-06.png" alt="模倣学習" />
      </div>
    <p>まず人間が遠隔操作でロボットアームにタスクを行わせ、そのデモンストレーションデータからモデルが学習します。把持、整列、連続動作タスクなどに適しています。</p>
    </div>

  <div>
  <h4 style={{margin: '0 0 0.25rem'}}>VLA</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-07.png" alt="VLA" />
      </div>
    <p>VLA は、視覚・言語・行動の情報を用いて、ロボットアームが自然言語に基づいてタスクを完了できるようにします。</p>
    </div>
  </div>

例えば、次のような指示です：

:::note
左側の赤いブロックを箱の中に入れてください。
:::

</section>

## 1.5 本コースにおける reBot Arm の役割

<section id="role" className="section-card">
  <div className="section-title">
  <span>実習プラットフォーム</span>
    <h2>1.5 本コースにおける reBot Arm の役割</h2>
    </div>

reBot Arm は、本コース全体を通して使用する共通の実習プラットフォームです。今後、次のような内容を reBot Arm を使って行います：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-08.png" alt="reBot Arm の役割" />
  </div>

</section>

</div>

