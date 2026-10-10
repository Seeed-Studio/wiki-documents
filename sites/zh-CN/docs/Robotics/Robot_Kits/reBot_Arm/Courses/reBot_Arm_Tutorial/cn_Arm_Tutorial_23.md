---
description: "Seeed 具身智能入门课程第五阶段：机械臂数学与运动控制第 23 章 — 机械臂数学基础与坐标系：本章节介绍的内容属于传统控制，即通过'死编程'来控制机械臂。传统控制应用在绝大多数已落地的项目中。它的好处是稳定可靠，在工业生产场景中，这点尤为可贵 。它的不足之处就是在一个新场景中，需要重新调试，才能稳定运行。在本章节，将着重介绍运动控制。建立运动学、手眼标定和视觉抓取所需的数学基础。"
title: 第 23 章 - 机械臂数学基础与坐标系
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_23
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_23/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 5 阶段 · 第 23 章 · 理论</span>
    <h2>23. 机械臂数学基础与坐标系</h2>
    <p>
      本章节介绍的内容属于传统控制，即通过"死编程"来控制机械臂。传统控制应用在绝大多数已落地的项目中。它的好处是稳定可靠，在工业生产场景中，这点尤为可贵 。它的不足之处就是在一个新场景中，需要重新调试，才能稳定运行。在本章节，将着重介绍运动控制。建立运动学、手眼标定和视觉抓取所需的数学基础。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 教学目的

本章节介绍的内容属于传统控制，即通过"死编程"来控制机械臂。传统控制应用在绝大多数已落地的项目中。它的好处是稳定可靠，在工业生产场景中，这点尤为可贵 。它的不足之处就是在一个新场景中，需要重新调试，才能稳定运行。在本章节，将着重介绍运动控制。建立运动学、手眼标定和视觉抓取所需的数学基础。

## 向量与矩阵基础

在正逆运动学（下一章会讲）的计算中存在大量向量和矩阵，因此打好矩阵数理基础很重要。在实际控制中，我们并不需要亲自参与底层的运算，所以本章只是提供参考

## 世界坐标系和基坐标系

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23cn/ch23-01cn.jpg" alt="" />
</div>

世界坐标系，可以理解为机械臂所处的环境的坐标系，基坐标系以机器人底座建立的坐标系。在rebot arm 的设计中，因为机器人底座是固定的，所以世界坐标系和基坐标系重合。

例如：机械臂放在桌子上，以机械臂底座中心为原点，桌面为 xy 平面，桌脚垂直方向为 z 轴方向，建立世界坐标系，坐标系遵守右手准则。而基坐标系也与世界坐标系重合。（常用笛卡尔坐标系）

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23cn/ch23-02cn.jpg" alt="" />
</div>

**机器人/视觉领域的 XYZ 三轴颜色约定（RGB = XYZ）**

| 轴 | 颜色 | 英文 |
|-|-|-|
| **X** | 🔴 红 | Red |
| **Y** | 🟢 绿 | Green |
| **Z** | 🔵 蓝 | Blue |

## 关节空间坐标系和末端坐标系

关节空间坐标系是在机器人控制中最常用到的坐标系。它建立于机器人的关节上，机器人有多少关节，就有多少维度。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23cn/ch23-03cn.jpg" alt="" />
</div>

末端坐标系

- 原点：工具中心点

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23cn/ch23-04cn.jpg" alt="" />
</div>

末端坐标系建立在机器人的末端上，另外还有工具坐标系。当我们需要让末端抵达某个位置，则需要关心末端坐标，如果末端上装了夹爪，则我们会关心夹爪的坐标。

一句话概括：世界坐标是人最直观理解的坐标系，而机器人依靠关节空间坐标系来改变末端夹爪的位置，所以我们需要通过世界坐标设置目标，而使用关节空间坐标系来实现机器人按照我们的想法运动。这其中的联系，就是坐标变换。

## 相机坐标系

相机坐标系和末端坐标系通常通过一个平移变化来获得。

- 原点：相机光心
- 约定：z 轴沿光轴向前，x 右、y 下（OpenCV 惯例；OpenGL/ROS 某些工具是 y 上）

## 坐标变换的矩阵表示

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23cn/ch23-05cn.jpg" alt="" />
</div>

**齐次**表示把"线性变换 + 平移"统一成一个矩阵乘法，

**非齐次**下平移是矩阵之外的一次加法，没法跟旋转拼成单个矩阵。

**平移变换**

|  | 非齐次 | 齐次 |
|-|-|-|
|  | $\mathbf{p}' = \mathbf{p} + \mathbf{t}$ | $\mathbf{T} = \begin{pmatrix}1 & 0 & 0 & t_x \\0 & 1 & 0 & t_y \\0 & 0 & 1 & t_z \\0 & 0 & 0 & 1\end{pmatrix}$ |
|  | $\begin{pmatrix} x' \\ y' \\ z' \end{pmatrix}=\begin{pmatrix} x \\ y \\ z \end{pmatrix}+\begin{pmatrix} t_x \\ t_y \\ t_z \end{pmatrix}=\begin{pmatrix} x + t_x \\ y + t_y \\ z + t_z \end{pmatrix}$ | $\begin{pmatrix} x' \\ y' \\ z' \\ 1 \end{pmatrix}=\begin{pmatrix}1 & 0 & 0 & t_x \\0 & 1 & 0 & t_y \\0 & 0 & 1 & t_z \\0 & 0 & 0 & 1\end{pmatrix}\begin{pmatrix} x \\ y \\ z \\ 1 \end{pmatrix}=\begin{pmatrix}x + t_x \\y + t_y \\z + t_z \\1\end{pmatrix}$ |

**旋转变换**

|  | 非齐次 | 齐次 |
|-|-|-|
| X 轴 | $R_x(\theta) = \begin{pmatrix}1 & 0 & 0 \\0 & \cos\theta & -\sin\theta \\0 & \sin\theta &  \cos\theta\end{pmatrix}$ | $R_x(\theta) = \begin{pmatrix}1 & 0 & 0 & 0 \\0 & \cos\theta & -\sin\theta & 0 \\0 & \sin\theta &  \cos\theta & 0 \\0 & 0 & 0 & 1\end{pmatrix}$ |
| Y 轴 | $R_y(\theta) = \begin{pmatrix} \cos\theta & 0 & \sin\theta \\ 0          & 1 & 0          \\-\sin\theta & 0 & \cos\theta\end{pmatrix}$ | $R_y(\theta) = \begin{pmatrix} \cos\theta & 0 & \sin\theta & 0 \\ 0          & 1 & 0          & 0 \\-\sin\theta & 0 & \cos\theta & 0 \\0          & 0 & 0          & 1\end{pmatrix}$ |
| Z 轴 | $R_z(\theta) = \begin{pmatrix}\cos\theta & -\sin\theta & 0 \\\sin\theta &  \cos\theta & 0 \\0          &  0          & 1\end{pmatrix}$ | $R_z(\theta) = \begin{pmatrix}\cos\theta & -\sin\theta & 0 & 0 \\\sin\theta &  \cos\theta & 0 & 0 \\0          &  0          & 1 & 0 \\0          &  0          & 0 & 1\end{pmatrix}$ |

## 欧拉角和四元数

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-23cn/ch23-06cn.jpg" alt="" />
</div>

**欧拉角和四元数对比**

- 欧拉角：3 个数，直观，有万向锁
- 四元数：4 个数（1 个约束），不直观，没万向锁

工程上：**给人看用欧拉角，给机器算用四元数**。

</div>
