---
description: "SO-ARM Physical AI ビギナーコース第 1 章 — ロボットとロボットアームとは何か、自由度、そして従来型制御・模倣学習・VLA の違いを理解します。"
title: 第 1 章 - ロボットと Physical AI
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - ロボットアーム
  - ロボット
  - Physical AI
  - 自由度
  - 模倣学習
  - VLA
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_1
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_1/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 1 · 第 1 章 · 理論</span>
    <h2>1. ロボットと Physical AI を知る</h2>
    <p>
      SO-ARM Physical AI ビギナーコース第 1 章 — ロボットとロボットアームとは何か、自由度、そして従来型制御・模倣学習・VLA の違いを理解します。
    </p>
    <div className="hero-actions">
      <a href="#objectives">学習目標</a>
      <a href="#paradigms">制御パラダイム</a>
    </div>
  </div>
</section>

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
5. 従来型プログラム制御、模倣学習、VLA を区別できる。
6. 完全なエンボディドインテリジェンスロボットアームシステムの構成を説明できる。
7. SO-ARM が具身知能システム全体で果たす役割を理解できる。

</section>

## 1.2 ロボットとは何か？

<section id="robot" className="section-card">
  <div className="section-title">
    <span>基礎</span>
    <h2>1.2 ロボットとは何か？</h2>
  </div>

ロボットとは、単に人間の形をした機械ではありません。機能的な観点では、ロボットとは次のようなシステムです：

- 自身または環境の情報を取得する；
- 目標に基づいて計算や意思決定を行う；
- アクチュエータを通じて自身の状態や周囲の環境を変化させる。

ロボットシステムは一般に次のように抽象化できます：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-01.png" alt="ロボットシステムの抽象化" />
</div>

例えば、デスクトップ把持ロボットは次のような流れを完了する必要があります：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-02.png" alt="デスクトップ把持ロボットの流れ" />
</div>

したがって、ロボットは「動ける」だけでなく、継続的に回る閉ループを形成できなければなりません。

### ロボットと普通の機械の違い

普通の機械は多くの場合、決まった方式で動きます。例えば：

- 電気扇風機は通電すると回り続ける；
- コンベアベルトは一定速度で走る；
- 普通のモーターは電圧を受けると回転する。

一方ロボットは、通常、より強力な状態認識・プログラム制御・タスク実行能力を持ちます。例えばロボットアームは、異なる目標位置に応じて複数の関節を制御し、さまざまな姿勢へ動かせます。

</section>

## 1.3 ロボットアームとは何か？

<section id="arm" className="section-card">
  <div className="section-title">
    <span>基礎</span>
    <h2>1.3 ロボットアームとは何か？</h2>
  </div>

ロボットアームは、複数の関節とリンクで構成されるロボット機構です。複数関節の協調動作によりエンドエフェクタを指定の位置と姿勢へ運び、把持・搬送・組立・研磨・溶接などのタスクを完了します。

ロボットアームは簡単にこう理解できます：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-03.png" alt="ロボットアーム" />
</div>

ロボットアームは人間の腕と似た部分もありますが、人体の解剖構造を模倣する必要はありません — 関节数・配置・作業空間はタスク要件に応じて設計されます。

### 自由度とは

自由度は一般に DOF（Degree of Freedom）と略されます。自由度は、機構が独立に動ける方向の数を表します。

3 次元空間では、剛体の完全な姿勢には次が含まれます：

- X・Y・Z 軸方向の並進；
- X・Y・Z 軸まわりの回転。

したがって 3 次元空間の物体は最大 6 自由度を持ちます。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-04.png" alt="6 自由度" />
</div>

6 自由度ロボットアームは通常、3 次元空間でエンドエフェクタの位置と姿勢を同時に制御できます。本コースで使う SO-ARM100 / SO-ARM101 は、6 個のバスサーボで 5 つのアーム関節と 1 つのグリッパを駆動します — 5 つの回転自由度でテーブル上の任意の把持点に到達でき、グリッパが「つかむ／離す」の自由度を加えます。

:::note
5 自由度は、あらゆる姿勢であらゆる位置に到達できることを意味しません。ロボットアームはリンク長・関節限界・特異姿勢・干渉などの制約も受けます。
:::

</section>

## 1.4 従来型制御・模倣学習・VLA

<section id="paradigms" className="section-card">
  <div className="section-title">
    <span>パラダイム</span>
    <h2>1.4 従来型制御・模倣学習・VLA</h2>
  </div>

ロボットアームは異なる方法で動作を得られます。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem', margin: '1.25rem 0 1.5rem'}}>
  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>従来型プログラム制御</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-05.png" alt="従来型プログラム制御" />
    </div>
    <p>固定位置・固定フロー・反復タスクに向いています。</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>模倣学習</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-06.png" alt="模倣学習" />
    </div>
    <p>人がまずテレオペレーションでタスクを完了し、モデルがそのデモデータから学習します。把持・整理・継続作業系タスクに向いています。</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>VLA</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-07.png" alt="VLA" />
    </div>
    <p>VLA は視覚・言語・アクションの情報を用い、自然言語に基づいてタスクを完了させます。</p>
  </div>
</div>

例えば：

:::note
左の赤いブロックを箱に入れてください。
:::

</section>

## 1.5 本コースにおける SO-ARM の役割

<section id="role" className="section-card">
  <div className="section-title">
    <span>実践プラットフォーム</span>
    <h2>1.5 本コースにおける SO-ARM の役割</h2>
  </div>

SO-ARM は本コース全体の統一実践プラットフォームです。後の章で次のことに使います：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 / SO-ARM101 キット" />
</div>

- 組み立て・配線・バスサーボ設定（ステージ 2）；
- リーダー・フォロワーのキャリブレーションとテレオペレーション（ステージ 3）；
- カメラ付きデモデータの収集（ステージ 3）；
- ACT 模倣学習の訓練と実機展開（ステージ 3）；
- 双腕協調訓練（ステージ 3、選択科目）；
- Isaac GR00T の VLA ファインチューニングと推論（ステージ 4）；
- SenseCraft Robotics プラットフォームのノーコード VLA（ステージ 4）。

</section>

</div>
