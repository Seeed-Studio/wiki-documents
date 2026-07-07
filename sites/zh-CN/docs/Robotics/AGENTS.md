
# Seeed Robotics Wiki AI Writing Guide

本文件用于指导 Codex、Cursor、Claude Code、ChatGPT Agent 等 AI Agent，帮助工程师将普通 Markdown / MDX Wiki 文章自动润色成 Seeed Robotics Wiki 的统一风格。

目标是：**在不删除原有教程内容的前提下，统一页面结构、统一视觉风格、修复 MDX 编译风险，并保证 Docusaurus 页面功能正常。**

本指南以如下两篇wiki风格为参考,希望尽可能风格和理念统一，生成具有任务导向的教程，使小白也可以清晰知道自己学了什么：
```
sites\zh-CN\docs\Robotics\Robot_Kits\reBot_Arm\B601_DM\cn_reBot_Arm_B601_DM_Getting_Started.md
sites\zh-CN\docs\Robotics\Robot_Kits\reBot_Arm\B601_DM\cn_reBot_Arm_B601_DM_Lerobot.md
```


---

## 1. 使用场景

当工程师已经写好一篇 Wiki 草稿后，可以让 AI Agent 根据本规则自动完成润色。

适用内容包括：

- reBot Arm 教程
- SO-ARM 教程
- LeRobot 教程
- Jetson / reComputer 教程
- ROS2 / MoveIt 教程
- Pinocchio / MeshCat 教程
- 视觉夹取 / GraspNet / YOLO 教程
- GR00T / VLA / Isaac Sim / Isaac Lab 教程
- 其他 Seeed Studio Robotics Wiki 页面

---

## 2. 最重要原则

AI Agent 必须遵守以下原则：

1. **不要删除原始教程内容。**
2. **不要删除原始命令。**
3. **不要删除原始图片。**
4. **不要删除原始视频。**
5. **不要删除原始表格。**
6. **不要删除原始链接。**
7. **不要删除 FAQ 和故障排查内容。**
8. **不要改变技术含义。**
9. **只做结构优化、语言润色、风格统一和 MDX 编译风险修复。**

如果发现原文存在明显错误，可以在保留原文信息的基础上进行修正，并在必要时添加说明，但不要擅自删除整段教程。

---

## 3. 统一 CSS

所有 Seeed Robotics Wiki 风格页面都必须引入统一 CSS：

```mdx
import '/src/css/rebot-wiki-style.css';
````

如果页面里包含命令行代码块，必须额外引入 Docusaurus CodeBlock：

```mdx
import CodeBlock from '@theme/CodeBlock';
```

推荐放置位置：

```mdx
---
description: ...
title: ...
keywords:
  - ...
slug: ...
last_update:
  date: YYYY-MM-DD
  author: ...
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';

# 页面标题
```

如果页面没有命令，可以不引入 `CodeBlock`。

---

## 4. 推荐页面结构

润色后的 Wiki 页面建议统一使用以下结构：

```mdx
---
description: ...
title: ...
keywords:
  - ...
slug: ...
last_update:
  date: YYYY-MM-DD
  author: ...
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';

# 页面标题

<div className="rebot-page">

<section className="doc-hero">
  ...
</section>

<div className="safety-alert">
  ...
</div>

<nav className="doc-nav" aria-label="quick navigation">
  ...
</nav>

## 推荐操作顺序

<section id="course-steps" className="section-card">
  ...
</section>

## 上手路线

<section id="start-path" className="section-card">
  ...
</section>

## 项目介绍

<section id="overview" className="section-card">
  ...
</section>

## Step 1：...

<section id="step-1" className="section-card">
  ...
</section>

## Step 2：...

<section id="step-2" className="section-card">
  ...
</section>

## 常见问题

<section id="faq" className="section-card">
  ...
</section>

## 后续学习路径

<section className="section-card course-path-section">
  ...
</section>

</div>
```

---

## 5. 右侧目录 TOC 规则

Docusaurus 的右侧目录主要依赖标准 Markdown 标题。

因此每个主要模块前必须保留 Markdown 标题：

```mdx
## 电源检查

<section id="power" className="section-card">
  ...
</section>
```

不要只写：

```mdx
<section id="power" className="section-card">
  <h2>电源检查</h2>
</section>
```

否则右侧目录可能无法识别。

推荐使用：

```mdx
## 推荐操作顺序
## 上手路线
## 项目介绍
## 电源检查
## Step 1：组装机械臂
## Step 2：写入电机 ID 及零点
## Step 3：校准机械臂及上手初体验
## 常见问题
## 后续学习路径
```

英文页面推荐使用：

```mdx
## Recommended Workflow
## Start Here
## Overview
## Hardware Setup
## Step 1: Install Dependencies
## Step 2: Configure the Device
## Step 3: Run the Demo
## FAQ
## Continue Learning
```

---

## 6. Hero 区域规则

页面顶部推荐使用 `doc-hero`。

中文模板：

```mdx
<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>用一句话说明这篇教程能帮助用户完成什么</h2>
    <p>
      用 1-2 句话说明本文覆盖的内容，包括硬件、软件、环境配置、运行 Demo、训练、部署或调试流程。
    </p>
    <div className="hero-actions">
      <a href="#start-path">查看上手路线</a>
      <a href="#install">开始安装</a>
      <a href="#faq">常见问题</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>推荐阅读方式</strong>
    <span>第一次使用的用户建议从 Step 0 开始。</span>
    <span>已有经验的用户可以直接跳到对应模块。</span>
  </div>
</section>
```

英文模板：

```mdx
<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Explain what users will build or learn in this tutorial</h2>
    <p>
      This guide walks you through the complete workflow, including hardware setup, software installation, calibration, testing, and troubleshooting.
    </p>
    <div className="hero-actions">
      <a href="#start-path">View Workflow</a>
      <a href="#install">Start Installation</a>
      <a href="#faq">FAQ</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Recommended Reading Path</strong>
    <span>New users should start from Step 0.</span>
    <span>Experienced users may jump directly to the required section.</span>
  </div>
</section>
```

---

## 7. 安全提示规则

涉及真实硬件运动、电机使能、机械臂、机器人、夹爪、车辆、飞行器、电源、激光、加热、运动平台等内容时，必须添加安全提示。

中文模板：

```mdx
<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：运行前请清空机械臂工作空间</strong>
    <p>
      在运行任何会驱动机械臂运动的程序前，请务必清空机械臂工作空间 1 米范围内
      的贵重物品、易碎物品、工具、线缆和其他无关物体。调试和运行过程中，人员禁止靠近机械臂运动范围。
    </p>
    <ul>
      <li>设备上电后，请勿用手触碰关节、电机、连杆、夹爪或末端工具。</li>
      <li>运行校准、遥操作、IK 控制、轨迹控制、重力补偿、MoveIt、LeRobot 数据采集或视觉抓取 Demo 前，请确保机械臂已固定牢靠。</li>
      <li>请保持至少 1 米安全距离，并确保周围人员了解设备可能突然运动。</li>
      <li>如出现异常运动、异响、抖动、线缆松动、电源接触不良或通信中断，请立即停止程序并断电检查。</li>
      <li>插拔电机线、CAN 线、USB2CAN / PCAN-USB、XT30 或电源接口前，必须先断开电源。</li>
    </ul>
  </div>
</div>
```

英文模板：

```mdx
<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Warning: Clear the Robot Workspace Before Running</strong>
    <p>
      Before running any program that may move the robot, clear valuable items, fragile objects, tools, cables, and unrelated objects within 1 meter of the workspace.
      Keep people away from the motion range during calibration, teleoperation, recording, replay, evaluation, and deployment.
    </p>
    <ul>
      <li>Do not touch joints, motors, links, grippers, or end-effectors after the robot is powered on.</li>
      <li>Make sure the robot base is firmly fixed before running calibration, teleoperation, IK control, trajectory control, gravity compensation, MoveIt, LeRobot recording, or visual grasping demos.</li>
      <li>Keep at least 1 meter of safety distance and make sure nearby people understand that the robot may move unexpectedly.</li>
      <li>If abnormal motion, noise, vibration, loose cables, power issues, or communication loss occurs, stop the program immediately and power off the system before inspection.</li>
      <li>Always power off the system before plugging or unplugging motor cables, CAN cables, USB2CAN / PCAN-USB adapters, XT30 connectors, or power connectors.</li>
    </ul>
  </div>
</div>
```

注意：

* 只有安全提示标题使用 `<strong>`。
* 正文里的 `1 米范围内`、`1 米安全距离` 不要再使用 `<strong>`。
* 避免 `<strong>1 米范围内</strong>`，否则可能导致 CSS 换行问题。

---

## 8. 导航栏规则

页面顶部建议添加 `doc-nav`。

中文示例：

```mdx
<nav className="doc-nav" aria-label="quick navigation">
  <a href="#start-path">上手路线</a>
  <a href="#overview">项目介绍</a>
  <a href="#install">环境安装</a>
  <a href="#run">运行 Demo</a>
  <a href="#faq">常见问题</a>
</nav>
```

英文示例：

```mdx
<nav className="doc-nav" aria-label="quick navigation">
  <a href="#start-path">Workflow</a>
  <a href="#overview">Overview</a>
  <a href="#install">Install</a>
  <a href="#run">Run Demo</a>
  <a href="#faq">FAQ</a>
</nav>
```

导航链接必须与对应 section 的 `id` 一致。

---

## 9. Step Overview 规则

每篇教程建议添加一个 Step Overview，帮助用户快速理解流程。

中文模板：

```mdx
## 推荐操作顺序

<section id="course-steps" className="section-card">
  <div className="section-title">
    <span>Step Overview</span>
    <h2>本篇教程的推荐操作顺序</h2>
    <p>下面按照真实上手流程整理为 Step 卡片。建议从前往后完成，尤其是涉及电源、电机使能和真实硬件运动的步骤。</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card">
      <span className="step-mini">Step 0</span>
      <strong>确认硬件与环境</strong>
      <p>确认设备型号、电源、线缆、系统版本和基础依赖。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">Step 1</span>
      <strong>安装软件环境</strong>
      <p>安装依赖、创建虚拟环境，并完成基础配置。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">Step 2</span>
      <strong>运行基础测试</strong>
      <p>先运行不涉及真实运动或低风险的测试，确认通信链路稳定。</p>
    </div>
    <div className="step-card">
      <span className="step-mini">Step 3</span>
      <strong>运行完整 Demo</strong>
      <p>确认安全后运行完整功能，并根据日志进行调试。</p>
    </div>
  </div>
</section>
```

---

## 10. 卡片规则

常用卡片 class：

```text
section-card
section-title
step-card-grid
step-card
step-mini
feature-grid
module-summary-grid
path-grid
path-card
info-card
callout
callout warning
callout danger
content-details
video-container
image-frame
badge-row
course-path-section
course-path-grid
course-path-item
```

不要为每篇文章重新写 `<style>`。

不要在文章内添加大段 CSS。

页面只调用统一 CSS：

```mdx
import '/src/css/rebot-wiki-style.css';
```

---

## 11. 命令代码块规则

为了让 Docusaurus 显示右上角复制按钮，命令必须使用 `CodeBlock`。

先引入：

```mdx
import CodeBlock from '@theme/CodeBlock';
```

然后使用：

```mdx
<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>
```

多行命令示例：

```mdx
<CodeBlock language="bash">
{`conda create -y -n rebot python=3.12
conda activate rebot
pip install motorbridge`}
</CodeBlock>
```

Python 示例：

```mdx
<CodeBlock language="python">
{`import torch
print(torch.cuda.is_available())`}
</CodeBlock>
```

配置文件示例：

```mdx
<CodeBlock language="yaml">
{`hardware_yaml: rebotarm_dm.yaml`}
</CodeBlock>
```

不要使用：

```mdx
<pre><code>command</code></pre>
```

不要使用缩进代码块。

不要把 fenced code block 缩进到 JSX 组件内部，否则 Docusaurus 可能无法识别复制按钮。

---

## 12. 视频 iframe 规则

Bilibili 视频必须尽量禁止自动播放，并默认关闭弹幕和静音兜底。

推荐格式：

```mdx
<div className="video-container">
  <iframe
    loading="lazy"
    width="900"
    height="600"
    src="//player.bilibili.com/player.html?isOutside=true&bvid=BVxxxx&autoplay=0&muted=1&mute=1&danmaku=0"
    title="Video title"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen>
  </iframe>
</div>
```

要求：

* `src` 中添加 `autoplay=0`
* `src` 中添加 `muted=1`
* `src` 中添加 `mute=1`
* `src` 中添加 `danmaku=0`
* `allow` 中不要出现 `autoplay`
* 使用 `frameBorder`
* 使用 `referrerPolicy`
* 使用 `allowFullScreen`
* 添加 `loading="lazy"`

不要使用：

```mdx
frameborder="0"
allowfullscreen
referrerpolicy="..."
allow="accelerometer; autoplay; ..."
```

---

## 13. 图片规则

普通图片建议使用：

```mdx
<div className="image-frame">
  <img src="IMAGE_URL" alt="描述图片内容" />
</div>
```

不要使用：

```mdx
<div align="center">
  <img width={800} src="..." />
</div>
```

如果是 Markdown 表格内的小图，可以保留：

```mdx
<img src="IMAGE_URL" width="300" />
```

图片必须尽量有 `alt`。

---

## 14. Get One Now 按钮规则

购买按钮统一使用：

```mdx
<div className="get-one-now-panel">
  <a
    className="get-one-now-button"
    href="PRODUCT_LINK"
    target="_blank"
    rel="noopener noreferrer">
    立即购买 / Get One Now
  </a>
</div>
```

英文页面可以使用：

```mdx
<div className="get-one-now-panel">
  <a
    className="get-one-now-button"
    href="PRODUCT_LINK"
    target="_blank"
    rel="noopener noreferrer">
    Get One Now
  </a>
</div>
```

不要使用：

```mdx
<center color={'FFFFFF'} size={"8"}>下一单</center>
```

不要给按钮写复杂 inline style，样式由 `/src/css/rebot-wiki-style.css` 提供。

---

## 15. details 折叠内容规则

可以使用：

```mdx
<details className="content-details">
  <summary>查看安装命令</summary>

  <CodeBlock language="bash">
{`pip install motorbridge`}
  </CodeBlock>
</details>
```

注意：

* 默认不要加 `open`。
* `<summary>` 后面建议空一行。
* 代码块建议使用 `CodeBlock`。
* 不要使用 `<pre><code>`。

---

## 16. MDX 编译安全规则

必须避免以下写法：

```mdx
class="xxx"
frameborder="0"
allowfullscreen
referrerpolicy="..."
<center>...</center>
<pre><code>...</code></pre>
<code>{`...`}</code>
${HF_USER}
<style>{`...`}</style>
```

必须改成：

```mdx
className="xxx"
frameBorder="0"
allowFullScreen
referrerPolicy="..."
<div className="...">...</div>
<CodeBlock language="bash">
{`...`}
</CodeBlock>
\${HF_USER}
```

如果需要在命令里展示 shell 变量，例如：

```bash
${HF_USER}
```

在 MDX 里必须写成：

```mdx
\${HF_USER}
```

否则 MDX 会把 `${...}` 当成表达式解析，可能导致编译失败。

---

## 17. Frontmatter 规则

保留原文已有 frontmatter，不要随意删除。

可以优化：

```yaml
description: ...
title: ...
keywords:
  - ...
slug: ...
last_update:
  date: YYYY-MM-DD
  author: ...
```

不要随便修改 `slug`，除非用户明确要求。

如果原文已有：

```yaml
createdAt:
updatedAt:
url:
translation:
```

可以保留。

---

## 18. 中文写作风格

中文 Wiki 应该：

* 技术表达清晰。
* 语气专业但不生硬。
* 保留工程细节。
* 步骤用“步骤 1 / Step 1”组织。
* 命令前说明执行目的。
* 涉及真实设备运动前添加安全提示。
* 尽量减少口语化表达，例如“光速赶来”等可以改为更正式的说明。
* 不改变技术含义。

推荐表达：

```text
本教程将带你完成...
建议先完成...
如果你使用的是...
运行前请确认...
```

避免表达：

```text
这个很简单
随便运行一下
光速赶来
应该没问题
```

---

## 19. 英文写作风格

English Wiki should:

* Use concise technical English.
* Prefer action-oriented headings.
* Preserve product names, command options, and device paths.
* Avoid overly promotional language.
* Add safety warnings before real hardware motion.
* Keep code and configuration accurate.

Recommended wording:

```text
This guide walks you through...
Before running the command, make sure...
Use the following command to...
If the device is not detected, check...
```

---

## 20. FAQ 规则

FAQ 建议使用：

```mdx
## 常见问题

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>常见问题</h2>
    <p>本节整理常见问题和对应处理方法。</p>
  </div>

  <details className="content-details">
    <summary>问题 1？</summary>
    <p>解决方法...</p>
  </details>

  <details className="content-details">
    <summary>问题 2？</summary>
    <p>解决方法...</p>
  </details>
</section>
```

不要删除原始 FAQ。

可以把原始 FAQ 改成折叠卡片。

---

## 21. 后续学习路径规则

Robotics Wiki 建议添加学习路径。

中文模板：

```mdx
## 后续学习路径

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>后续学习路径</h2>
    <p>完成本教程后，可以继续学习相关进阶内容。</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item active" href="/cn/current_article/">
      <span className="course-index">1</span>
      <span className="course-path-copy">
        <strong>当前教程</strong>
        <span>当前页面的主要内容。</span>
      </span>
      <span className="course-tag">Current article</span>
    </a>
    <a className="course-path-item" href="/cn/next_article/">
      <span className="course-index">2</span>
      <span className="course-path-copy">
        <strong>下一篇教程</strong>
        <span>下一步建议学习的内容。</span>
      </span>
      <span className="course-tag">Next</span>
    </a>
  </div>
</section>
```

根据实际产品系列调整链接。

---

## 22. Agent 执行任务时的推荐步骤

当用户要求润色 Wiki 时，Agent 应按以下步骤执行：

1. 阅读当前 Markdown / MDX 文件。
2. 识别页面主题、产品、硬件、软件流程和 FAQ。
3. 保留 frontmatter。
4. 添加 CSS import。
5. 如果有命令，添加 CodeBlock import。
6. 添加或优化 Hero。
7. 添加安全提示。
8. 添加导航栏。
9. 添加 Markdown `##` 标题，保证右侧 TOC 可见。
10. 用 section-card 组织正文。
11. 将命令转换为 CodeBlock。
12. 修复图片、视频、按钮、表格和 details 写法。
13. 添加 FAQ 和学习路径。
14. 检查 MDX 编译风险。
15. 输出完整可替换的 MDX 文件。

---

## 23. 最终检查清单

完成后必须检查：

* [ ] 是否保留原始教程内容。
* [ ] 是否保留所有命令。
* [ ] 是否保留所有图片。
* [ ] 是否保留所有视频。
* [ ] 是否保留所有表格。
* [ ] 是否保留所有链接。
* [ ] 是否保留 FAQ。
* [ ] 是否引入 `/src/css/rebot-wiki-style.css`。
* [ ] 如果有命令，是否引入 `CodeBlock`。
* [ ] 命令是否使用 `<CodeBlock>`。
* [ ] 是否有标准 Markdown `##` 标题用于右侧 TOC。
* [ ] `<section>` 与 `</section>` 数量是否匹配。
* [ ] `<div>` 与 `</div>` 数量是否匹配。
* [ ] `<details>` 与 `</details>` 数量是否匹配。
* [ ] 是否不存在 raw `class=`。
* [ ] 是否不存在 lowercase `frameborder`。
* [ ] 是否不存在 lowercase `allowfullscreen`。
* [ ] 是否不存在 lowercase `referrerpolicy`。
* [ ] 是否不存在 `<pre><code>`。
* [ ] 是否不存在 `<center>`。
* [ ] 是否不存在未转义的 `${...}`。
* [ ] Bilibili iframe 是否包含 `autoplay=0`。
* [ ] Bilibili iframe 是否包含 `muted=1` 和 `mute=1`。
* [ ] Bilibili iframe 的 `allow` 中是否移除了 `autoplay`。
* [ ] 安全提示正文中的 `1 米范围内` 是否没有使用 `<strong>`。
* [ ] Get One Now 按钮是否使用 `get-one-now-button`。

---

## 24. 用户给 Agent 的推荐提示词

中文：

```text
请根据 AGENTS.md 中的 Seeed Robotics Wiki AI Writing Guide，帮我润色当前 Wiki 文件。

要求：
1. 不删除原有教程内容。
2. 保留所有命令、图片、视频、表格、链接、FAQ 和注意事项。
3. 引入 /src/css/rebot-wiki-style.css。
4. 如果页面包含命令，使用 Docusaurus CodeBlock，保证右上角复制按钮可用。
5. 为右侧目录保留标准 Markdown ## 标题。
6. 将页面整理成 Seeed Robotics Wiki 的统一风格。
7. 修复 MDX 编译风险。
8. 输出完整可替换的 MDX 文件。
```

英文：

```text
Please polish the current Wiki file according to AGENTS.md.

Requirements:
1. Preserve all original tutorial content.
2. Do not delete commands, images, videos, tables, links, notes, or FAQ.
3. Import /src/css/rebot-wiki-style.css.
4. Use Docusaurus CodeBlock for commands.
5. Keep Markdown ## headings before visual sections so the right-side TOC works.
6. Rewrite the article into the unified Seeed Robotics Wiki style.
7. Fix MDX compilation risks.
8. Output the complete replacement MDX file.
```

---

## 25. 提交 PR 前建议

提交 PR 前建议本地检查：

```bash
npm run start
```

或项目对应的 Wiki 启动命令。

检查页面：

* 页面是否能正常编译。
* 右侧目录是否显示。
* 命令右上角是否有复制按钮。
* 视频是否不会自动播放，或者至少默认静音。
* Get One Now 按钮是否完整显示。
* 安全提示是否没有奇怪换行。
* 暗色模式是否可读。
* 手机窄屏是否可读。

---

## 26. 总结

AI Agent 的任务不是重写技术方案，而是把工程师写好的技术教程整理成统一、易读、可维护、可编译的 Seeed Robotics Wiki 页面。

最终结果应该做到：

* 内容完整。
* 技术准确。
* 风格统一。
* MDX 可编译。
* TOC 可见。
* 命令可复制。
* 视频不自动播放。
* 安全提示清晰。
* 后续学习路径完整。

---

## 27. reBot 系列参考文章规则

本 Skill 需要随包携带两篇高质量参考文章，作为 Agent 润色同系列 Wiki 时的结构和风格样例：

- `references/rebot-b601-dm-getting-started-reference.mdx`
- `references/rebot-arm-b601-dm-lerobot-reference.mdx`

Agent 在处理 reBot、LeRobot、Pinocchio、MeshCat、视觉夹取、ROS2、Isaac 或 GR00T 相关页面时，应先根据任务类型选择参考：

1. **硬件 / 快速入门 / MotorBridge 页面**：优先参考 Getting Started。
   - 参考 Hero 写法：先告诉用户本教程从开箱、组装到校准能完成什么。
   - 参考路线设计：成品套件 vs 散件套件、Step 0 到 Step 5。
   - 参考安全提示：电源、XT30、电机线、CAN 线、真实机械臂运动前必须警告。
   - 参考学习路径：快速入门 → LeRobot → Pinocchio → 视觉夹取 → ROS2。

2. **LeRobot / 数据采集 / 训练 / 部署页面**：优先参考 LeRobot。
   - 参考 Hero 写法：从遥操作开始，完成数据采集、训练与真实机械臂部署。
   - 参考 Step Overview：环境安装、校准、遥操作、相机、数据集、训练、进阶部署。
   - 参考内容组织：把长流程拆成 `content-details` 折叠卡片。
   - 参考 CodeBlock：长命令全部使用 Docusaurus CodeBlock，并转义 `\${HF_USER}`、`\${HUGGINGFACE_TOKEN}`。

3. **Pinocchio / MeshCat / ROS2 / 视觉夹取页面**：组合参考。
   - Hero、全局安全提示、课程导链参考 Getting Started。
   - Step Overview、长命令折叠、训练/部署类内容组织参考 LeRobot。
   - 涉及 MIT、IK、轨迹、重力补偿、MoveIt、真实机械臂运动时，必须在章节前添加 `safety-alert compact`。

注意：

- 参考文章用于学习结构、视觉风格、写作口吻和 MDX 写法。
- 不要把参考文章中的命令、产品链接或正文内容复制到无关页面。
- 待修改 Wiki 的原始教程内容永远优先于参考文章内容。
- 如果参考文章与用户本次明确要求冲突，以用户本次要求为准。


