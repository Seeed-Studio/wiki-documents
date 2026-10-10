---
description: "Seeed 具身智能入门课程第二阶段：机械臂组装与基础控制第 6 章 — 组装、供电与首次上电：rebotDM的供电要求是24v，rebotRS的供电要求是48v。"
title: 第 6 章 - 组装、供电与首次上电
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_6
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_6/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 2 阶段 · 第 6 章 · 实践</span>
    <h2>6. 组装、供电与首次上电</h2>
    <p>
      rebotDM的供电要求是24v，rebotRS的供电要求是48v。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 组装、供电与首次上电

## 机械臂组装

- reBotDM机械臂组装

- reBotRS机械臂组装

## 电源组装

- reBotDM电源组装

- reBotRS电源组装

## 机械臂接线

- rebotDM机械臂接线

1. 机械臂连接转接板

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-01cn.jpg" alt="" />
</div>

1. 电源连接 xt60转xt30线

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-02cn.jpg" alt="" />
</div>

1. xt60转xt30线连接转接板

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-03cn.jpg" alt="" />
</div>

1. usb2can连接gh1.25 2pin

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-04cn.jpg" alt="" />
</div>

1. gh1.25 2pin另一端连接转接版

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-05cn.jpg" alt="" />
</div>

1. usb2can通过typec数据线连接电脑即可

<callout emoji="📣">
注意：
1、1号电机和2号电机之间要连接
</callout>

- rebotRS机械臂接线

1. 机械臂连接转接板

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-06cn.jpg" alt="" />
</div>

1. 电源连接 xt60转xt30线

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-07cn.jpg" alt="" />
</div>

1. xt60转xt30线连接转接板

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-08cn.jpg" alt="" />
</div>

1. canable连接gh1.25 2pin线

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-09cn.jpg" alt="" />
</div>

1. gh1.25 2pin线另一端连接转接版

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-10cn.jpg" alt="" />
</div>

1. canable连接电脑即可

<callout emoji="📣">
注意：
1、1号电机和2号电机之间要连接
</callout>

## 机械臂供电要求

rebotDM的供电要求是24v，rebotRS的供电要求是48v。

下面是我们推荐的电源使用说明。如果你的家庭电压是220V，请把电源侧面拨码调至230V，如果你的家庭电压是110V，请把你电源的拨码调至115V。

<table><colgroup><col/><col/></colgroup><tbody><tr><td vertical-align="top"><img name="image.png" mime="image/png" scale="1.000000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-11cn.jpg"/></td><td vertical-align="top"><img name="image.png" mime="image/png" scale="1.000000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6cn/ch06-12cn.jpg"/></td></tr></tbody></table>

## 机械臂上电

rebotDM机械臂的所有关节的灯都会亮起并变成红色，此时处于机械臂失能状态。

rebotRS机械臂跟断电的时候没什么区别，只能通过与电机通信来判断。

---

</div>
