---
description: "Seeed 具身智能入门课程 —— 一份免费、可动手实践的教程，带你从零搭建并学习 100% 开源的 reBot 机械臂。全部八个阶段、39 章已发布，涵盖基础概念与硬件准备、组装与基础控制、使用 LeRobot 的模仿学习、Isaac GR00T 的 VLA、机械臂数学与运动控制、机器人视觉与自主抓取、ROS2 机器人系统集成，以及 MuJoCo 与 Isaac Sim 机械臂仿真。"
title: Seeed 具身智能入门课程
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - 机械臂
  - 具身智能
  - 课程
  - 教程
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
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot × 具身智能 · 全部 8 个阶段已发布</span>
    <h2>8 个阶段、39 章 —— 免费且可动手实践</h2>
    <p>
      一份免费、可动手实践的教程，带你从零搭建并学习 100% 开源的 reBot 机械臂。
      已发布的章节从基础概念、组装与电机控制开始，经过使用 LeRobot 的模仿学习和
      Isaac GR00T 的 VLA，一直到背后的机械臂数学与运动控制，再到机器人视觉、
      自主抓取、ROS2 系统集成与仿真。
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
    <span>配套 100% 开源、可复现的 reBot 机械臂。</span>
    <span><strong>全部 8 个阶段已发布</strong>（第 1–39 章）：基础与硬件、组装与控制、模仿学习、VLA、数学与运动控制、机器人视觉与抓取、ROS2 系统集成，以及 MuJoCo / Isaac Sim 仿真。</span>
    <span>课程已完结 —— 39 章全部上线。</span>
  </div>
</section>

:::tip
本课程由 Seeed Studio AI 机器人团队创作并免费分享，旨在为机器人学习者、学生、求职者和创客提供一条清晰、系统的学习路径。欢迎学习并分享给他人，但禁止未经授权的复制、商业再分发或滥用内容 —— 版权归深圳矽递科技股份有限公司所有。

课程围绕 <strong>reBot</strong> 展开：一台 100% 开源、可商用、可复现的机械臂。内容理论与动手实践并重，覆盖机械臂控制、传统机器人算法以及现代基于 VLA 的具身智能。课程完全免费 —— 如果它对你有帮助，欢迎到 <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">GitHub 上的 reBot-DevArm</a> 点个 Star ⭐，硬件图纸、BOM 等开源资源也在那里。有经验的用户可以直接前往我们的 <a href="https://wiki.seeedstudio.com/cn/robotics_page/" target="_blank" rel="noopener noreferrer">机器人 Wiki</a> 查看教程与示例。课程侧重实践理解而非深度数学推导，帮助你快速建立扎实的基础，为更深入的学习做准备。第五阶段会介绍数学基础 —— 坐标系、运动学、雅可比与轨迹规划 —— 但它是作为参考资料编写的，读一遍之后就可以在动手章节里边做边查。第六、七、八阶段延续同样的节奏：先把概念讲清楚，再落到真机与仿真上。
:::

<section id="community" className="section-card">
  <div className="section-title">
    <span>社区</span>
    <h2>社区群组</h2>
  </div>

<div style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-01cn.png" alt="feishu 群组二维码" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>飞书</p>
  </div>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02cn.png" alt="qq reBot 群组" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>QQ</p>
  </div>
</div>

</section>

<section id="principles" className="section-card">
  <div className="section-title">
    <span>设计</span>
    <h2>课程设计原则</h2>
  </div>

本课程以 reBot Arm B601-DM 与 B601-RS 作为实践平台，把机械臂理论、机器人学习理论与真实硬件实践结合在一起。课程大纲如下：

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-03cn.png" alt="课程大纲" />
</div>

</section>

<section id="structure" className="section-card">
  <div className="section-title">
    <span>结构</span>
    <h2>课程结构</h2>
  </div>

### 第一阶段：基本概念与教具准备

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>认识机器人与具身智能</strong>
      <span>第 1 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>认识机械臂硬件与开源项目 reBot Arm</strong>
      <span>第 2 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>后续课程需要的硬件选择</strong>
      <span>第 3 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
</div>

### 第二阶段：机械臂组装与基础控制

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>机械臂与关节执行器的基础</strong>
      <span>第 4 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>CAN 总线与电机通信</strong>
      <span>第 5 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>组装、供电与首次上电</strong>
      <span>第 6 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>MotorBridge 电机控制库</strong>
      <span>第 7 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>使用 Python SDK 控制 reBot Arm</strong>
      <span>第 8 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
</div>

### 第三阶段：模仿学习与 LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>机器人学习与模仿学习基础</strong>
      <span>第 9 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>LeRobot 与 reBot Arm 系统架构</strong>
      <span>第 10 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>Leader 与 Follower 校准及遥操作</strong>
      <span>第 11 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>机器人数据集与任务设计</strong>
      <span>第 12 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>相机配置与 LeRobot 数据采集</strong>
      <span>第 13 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>数据集结构与质量检查</strong>
      <span>第 14 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>ACT 模型与 Action Chunking</strong>
      <span>第 15 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>训练第一个 ACT 策略</strong>
      <span>第 16 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>真机推理、评估与数据迭代</strong>
      <span>第 17 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
</div>

### 第四阶段：VLA 与 Isaac GR00T

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>多模态学习与 VLA 基础</strong>
      <span>第 18 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>机器人本体与 GR00T 系统架构</strong>
      <span>第 19 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>准备 reBot VLA 数据集</strong>
      <span>第 20 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>使用 Isaac GR00T 微调 reBot Arm</strong>
      <span>第 21 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_22">
    <span className="course-index">22</span>
    <div className="course-path-copy">
      <strong>GR00T 推理与真机部署</strong>
      <span>第 22 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
</div>

### 第五阶段：机械臂数学与运动控制

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_23">
    <span className="course-index">23</span>
    <div className="course-path-copy">
      <strong>机械臂数学基础与坐标系</strong>
      <span>第 23 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_24">
    <span className="course-index">24</span>
    <div className="course-path-copy">
      <strong>正运动学、逆运动学与雅可比矩阵</strong>
      <span>第 24 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_25">
    <span className="course-index">25</span>
    <div className="course-path-copy">
      <strong>轨迹规划与机械臂控制</strong>
      <span>第 25 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_26">
    <span className="course-index">26</span>
    <div className="course-path-copy">
      <strong>Pinocchio 与 MeshCat</strong>
      <span>第 26 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
</div>

### 第六阶段：机器人视觉与自主抓取

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_27">
    <span className="course-index">27</span>
    <div className="course-path-copy">
      <strong>机器人视觉与三维感知</strong>
      <span>第 27 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_28">
    <span className="course-index">28</span>
    <div className="course-path-copy">
      <strong>目标检测与手眼标定</strong>
      <span>第 28 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_29">
    <span className="course-index">29</span>
    <div className="course-path-copy">
      <strong>reBot Arm 自主视觉抓取</strong>
      <span>第 29 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_30">
    <span className="course-index">30</span>
    <div className="course-path-copy">
      <strong>语音与多模态交互</strong>
      <span>第 30 章</span>
    </div>
    <span className="course-tag">选修</span>
  </a>
</div>

### 第七阶段：ROS2 与机器人系统集成

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_31">
    <span className="course-index">31</span>
    <div className="course-path-copy">
      <strong>ROS2 通信与机器人软件架构</strong>
      <span>第 31 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_32">
    <span className="course-index">32</span>
    <div className="course-path-copy">
      <strong>URDF、TF 与机器人模型</strong>
      <span>第 32 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_33">
    <span className="course-index">33</span>
    <div className="course-path-copy">
      <strong>reBot Arm ROS2 集成</strong>
      <span>第 33 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_34">
    <span className="course-index">34</span>
    <div className="course-path-copy">
      <strong>MoveIt2 运动规划</strong>
      <span>第 34 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
</div>

### 第八阶段：MuJoCo 与 Isaac Sim 机械臂仿真

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_35">
    <span className="course-index">35</span>
    <div className="course-path-copy">
      <strong>机器人仿真基础与平台介绍</strong>
      <span>第 35 章</span>
    </div>
    <span className="course-tag">理论</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_36">
    <span className="course-index">36</span>
    <div className="course-path-copy">
      <strong>在 MuJoCo 中运行 reBot Arm</strong>
      <span>第 36 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_37">
    <span className="course-index">37</span>
    <div className="course-path-copy">
      <strong>MuJoCo 中的运动学与轨迹控制</strong>
      <span>第 37 章</span>
    </div>
    <span className="course-tag">理论与实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_38">
    <span className="course-index">38</span>
    <div className="course-path-copy">
      <strong>在 Isaac Sim 中运行 reBot Arm</strong>
      <span>第 38 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
  <a className="course-path-item" href="/cn/rebot_physical_ai_course_chapter_39">
    <span className="course-index">39</span>
    <div className="course-path-copy">
      <strong>真实机械臂与仿真机械臂同步</strong>
      <span>第 39 章</span>
    </div>
    <span className="course-tag">实践</span>
  </a>
</div>

</section>

</div>
