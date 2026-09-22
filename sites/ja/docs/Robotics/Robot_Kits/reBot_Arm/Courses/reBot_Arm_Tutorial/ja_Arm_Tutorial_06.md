---
description: "Seeed Embodied Intelligence Beginner's Course の第 6 章 — reBot Arm の組み立て、電源の組み立て、アームの配線、そして初回の電源投入を行います。"
title: 第 6 章 - 組み立て、電源、および初回の電源投入
keywords:
  - reBot
  - ロボットアーム
  - 組み立て
  - 電源
  - 配線
  - コース
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_6
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/ja/rebot_embodied_ai_course_chapter_6/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 2 · 第 6 章 · 実践</span>
    <h2>6. 組み立て、電源、および初回の電源投入</h2>
    <p>
      Seeed Embodied Intelligence Beginner's Course の第 6 章では、
      reBot Arm の組み立て、電源の組み立て、アームの配線、そして初めての電源投入を行います。
    </p>
    <div className="hero-actions">
      <a href="#assembly">組み立て</a>
      <a href="#wiring">配線</a>
      <a href="#power">電源投入</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章で学ぶこと</strong>
    <span>6.1 ロボットアームの組み立て</span>
    <span>6.2 電源の組み立て</span>
    <span>6.3 ロボットアームの配線</span>
    <span>6.4 ロボットアームの電源要件</span>
    <span>6.5 ロボットアームの電源投入</span>
  </div>
</section>

<RebotCourseNav />

## 6.1 ロボットアームの組み立て

<section id="assembly" className="section-card">
  <div className="section-title">
    <span>ステップ 1</span>
    <h2>6.1 ロボットアームの組み立て</h2>
  </div>

- [reBot DM ロボットアームの組み立て](https://www.youtube.com/watch?v=rfTQoFCfnMc&list=PLpH_4mf13-A0UsztzM_yWQUsxXbYMVydM&index=15)
- [reBot RS ロボットアームの組み立て](https://www.youtube.com/watch?v=Bv60NPO0TRo&list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&index=6)

</section>

## 6.2 電源の組み立て

<section id="power-supply-assembly" className="section-card">
  <div className="section-title">
    <span>ステップ 2</span>
    <h2>6.2 電源の組み立て</h2>
  </div>

- [reBot DM 電源の組み立て](https://www.youtube.com/watch?v=DHFA2UfQzUo&list=PLpH_4mf13-A0UsztzM_yWQUsxXbYMVydM&index=3)
- [reBot RS 電源の組み立て](https://www.youtube.com/watch?v=5GitUWT9gx0)

</section>

## 6.3 ロボットアームの配線

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>ステップ 3</span>
    <h2>6.3 ロボットアームの配線</h2>
  </div>

### reBot DM の配線

動画: [reBot DM ロボットアームの配線](https://www.youtube.com/watch?v=vVxCOfu5ZCE)

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>ロボットアームをアダプタボードに接続します。</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-01.jpg" alt="ロボットアームをアダプタボードに接続します" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>電源接続：XT60 から XT30 へのケーブル。</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-02.jpg" alt="電源接続：XT60 から XT30 へのケーブル" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>XT60 から XT30 へのケーブルをアダプタボードに接続します。</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-03.jpg" alt="XT60 から XT30 へのケーブルをアダプタボードに接続します" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>USB2CAN を GH1.25 2 ピンに接続します。</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-04.jpg" alt="USB2CAN を GH1.25 2 ピンに接続します" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>GH1.25 2 ピンケーブルのもう一方の端をアダプタボードに接続します。</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-05.jpg" alt="GH1.25 2 ピンケーブルのもう一方の端をアダプタボードに接続します" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>USB2CAN を Type-C データケーブルでコンピュータに接続します。</h4>

:::warning
モーター 1 とモーター 2 は必ず相互に接続されている必要があります。
:::

</div>
</section>
</div>

### reBot RS の配線

動画: [reBot RS ロボットアームの配線](https://www.youtube.com/watch?v=llSa6qn3yrY&list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&index=8)

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>ロボットアームをアダプタボードに接続します。</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-06.jpg" alt="ロボットアームをアダプタボードに接続します" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>電源接続：XT60 から XT30 へのケーブル。</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-07.jpg" alt="電源接続：XT60 から XT30 へのケーブル" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>XT60 から XT30 へのケーブルをアダプタボードに接続します。</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-08.jpg" alt="XT60 から XT30 へのケーブルをアダプタボードに接続します" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>CANable を GH1.25 2 ピンケーブルに接続します。</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-09.jpg" alt="CANable を GH1.25 2 ピンケーブルに接続します" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>GH1.25 2 ピンケーブルのもう一方の端をアダプタボードに接続します。</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-10.jpg" alt="GH1.25 2 ピンケーブルのもう一方の端をアダプタボードに接続します" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>CANable をコンピュータに接続します。</h4>

:::warning
モーター 1 とモーター 2 は必ず相互に接続されている必要があります。
:::

</div>
</section>
</div>

</section>

## 6.4 ロボットアームの電源要件

<section id="power-requirements" className="section-card">
  <div className="section-title">
    <span>電源</span>
    <h2>6.4 ロボットアームの電源要件</h2>
  </div>

reBot DM の電源要件は 24V、reBot RS の電源要件は 48V です。

以下に、推奨する電源の使用手順を示します。

:::danger 電圧セレクタを正しく設定してください！
ご家庭の電圧が 220V の場合は、電源側面の DIP スイッチを 230V に設定してください。ご家庭の電圧が 110V の場合は、電源の DIP スイッチを 115V に設定してください。
:::

| 220V → 230V | 110V → 115V |
| :---: | :---: |
| ![電源 DIP スイッチ 220V](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-11.png) | ![電源 DIP スイッチ 110V](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-12.png) |

</section>

## 6.5 ロボットアームの電源投入

<section id="power" className="section-card">
  <div className="section-title">
    <span>電源投入</span>
    <h2>6.5 ロボットアームの電源投入</h2>
  </div>

reBot DM ロボットアームでは、すべての関節のランプが点灯して赤色になり、この時点でロボットアームは無効状態になっています。

reBot RS ロボットアームは、電源が入っていないときと見た目は変わらず、モーターとの通信によってのみ状態を確認できます。

</section>

</div>
