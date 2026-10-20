---
description: "SO-ARM 具身智能入门课程 —— 一份免费、可动手实践的教程，带你从零搭建并学习开源的 SO-ARM100 / SO-ARM101 机械臂。全部四个阶段、22 章已发布，涵盖基础概念与硬件准备、组装与舵机控制、使用 LeRobot 的模仿学习、双臂训练、Isaac GR00T 的 VLA，以及 SenseCraft Robotics 平台的无代码 VLA。"
title: SO-ARM 具身智能入门课程
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - LeRobot
  - 机械臂
  - 具身智能
  - 课程
  - 教程
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
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × 具身智能 · 全部 4 个阶段已发布</span>
    <h2>4 个阶段、22 章 —— 免费且可动手实践</h2>
    <p>
      一份免费、可动手实践的教程，带你从零搭建并学习开源的 SO-ARM100 / SO-ARM101
      机械臂。已发布的章节从基础概念、组装与舵机控制开始，经过使用 LeRobot 的模仿学习
      与双臂训练，再到 Isaac GR00T 的 VLA 微调，最后以 SenseCraft Robotics 平台的
      无代码 VLA 收尾。
    </p>
    <div className="hero-actions">
      <a href="#structure">课程结构</a>
      <a href="#principles">课程设计</a>
      <a href="#community">社区</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>课程概览</strong>
    <span>由 Seeed 机器人团队撰写并免费分享。</span>
    <span>配套开源的 SO-ARM100 / SO-ARM101 主从臂套件。</span>
    <span><strong>全部 4 个阶段已发布</strong>（第 1–22 章）：基础与硬件、组装与舵机控制、模仿学习与双臂训练、GR00T VLA 与无代码 SenseCraft VLA。</span>
    <span>课程已完结 —— 22 章全部上线。</span>
  </div>
</section>

<GitHubStarButton owner="TheRobotStudio" repo="SO-ARM100" />

:::tip
本课程由 Seeed Studio AI 机器人团队创作并免费分享，旨在为机器人学习者、学生、求职者和创客提供一条清晰、系统的学习路径。欢迎学习并分享给他人，但禁止未经授权的复制、商业再分发或滥用内容 —— 版权归深圳矽递科技股份有限公司所有。

课程围绕 <strong>SO-ARM100 / SO-ARM101</strong> 展开：由 <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">TheRobotStudio</a> 开源设计、Seeed Studio 制成完整套件的主从臂机械臂，也是 Hugging Face <a href="https://github.com/huggingface/lerobot" target="_blank" rel="noopener noreferrer">LeRobot</a> 项目的参考硬件。内容理论与动手实践并重，覆盖机械臂控制、LeRobot 模仿学习生态以及现代基于 VLA 的具身智能。课程完全免费 —— 如果它对你有帮助，欢迎到 <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">GitHub 上的 SO-ARM100</a> 点个 Star ⭐，STL 文件等开源资源也在那里。有经验的用户可以直接前往我们的 <a href="https://wiki.seeedstudio.com/cn/robotics_page/" target="_blank" rel="noopener noreferrer">机器人 Wiki</a> 查看教程与示例。课程侧重实践理解而非深度数学推导，帮助你快速建立扎实的基础。第二阶段逐步完成组装与配置；第三阶段走完 LeRobot 完整闭环 —— 标定、遥操作、数据集、ACT 训练、真机推理 —— 并以双臂选修章收尾；第四阶段先讲 VLA 理论与 GR00T 架构，再在 SO-ARM 数据集上微调 GR00T，最后为没有训练 GPU 的读者提供 SenseCraft Robotics 无代码路径。
:::

<a id="community"></a>

## 社区群组

---

<div style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-01cn.png" alt="feishu 群组二维码" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>飞书</p>
  </div>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02cn.png" alt="qq 群组" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>QQ</p>
  </div>
</div>

<a id="principles"></a>

## 课程设计原则

---

本课程以 SO-ARM100 / SO-ARM101 主从臂套件为实践平台，结合机械臂理论、机器人学习理论与真机实践。课程大纲如下：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 / SO-ARM101 套件" />
</div>

<a id="structure"></a>

## 课程结构

---

### 第一阶段：基本概念与教具准备

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>认识机器人与具身智能</strong>
      <span>第 1 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>认识 SO-ARM 硬件与开源项目</strong>
      <span>第 2 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>后续课程的硬件选择</strong>
      <span>第 3 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
</div>

### 第二阶段：SO-ARM 组装与基础控制

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>机械臂与总线舵机基础</strong>
      <span>第 4 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>软件环境搭建</strong>
      <span>第 5 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>电机配置与机械臂组装</strong>
      <span>第 6 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>使用舵机调试工具调试舵机</strong>
      <span>第 7 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
</div>

### 第三阶段：模仿学习与 LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>机器人学习与模仿学习基础</strong>
      <span>第 8 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>LeRobot 与 SO-ARM 系统架构</strong>
      <span>第 9 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>主从臂标定与遥操作</strong>
      <span>第 10 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>机器人数据集与任务设计</strong>
      <span>第 11 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>相机配置与 LeRobot 数据采集</strong>
      <span>第 12 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>数据集结构与质量检查</strong>
      <span>第 13 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>ACT 模型与动作分块</strong>
      <span>第 14 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>训练你的第一个 ACT 策略</strong>
      <span>第 15 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>真机推理、评估与数据迭代</strong>
      <span>第 16 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>SO-ARM 双臂训练</strong>
      <span>第 17 章</span>
    </div>
    <span className="course-tag">选修</span>
  </a>
</div>

### 第四阶段：VLA —— Isaac GR00T 与无代码 SenseCraft

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>多模态学习与 VLA 基础</strong>
      <span>第 18 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>机器人本体与 GR00T 系统架构</strong>
      <span>第 19 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>准备 SO-ARM VLA 数据集</strong>
      <span>第 20 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>使用 Isaac GR00T 微调 SO-ARM</strong>
      <span>第 21 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/robotics/soarm_physical_ai_course_chapter_22">
    <span className="course-index">22</span>
    <div className="course-path-copy">
      <strong>SenseCraft Robotics 无代码 VLA</strong>
      <span>第 22 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
</div>

</div>
