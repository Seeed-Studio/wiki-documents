---
description: 从 Episode、起止条件和示范一致性出发，设计首个模仿学习任务，完成五点采样与抓取放置示范。
title: 设计第一个模仿学习任务
hide_title: true
keywords:
  - 手把手复现
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - 机械臂
  - 具身智能
  - 课程
  - 教程
  - SO101
  - SO-ARM101
  - Hugging Face
  - Arm
  - Robotics
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_task_design
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-21
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-21'
url: https://wiki.seeedstudio.com/cn/robotics/hands_on_task_design/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-task_design-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 手把手复现</span>
  <h1 id="hands-on-task_design-title">设计第一个模仿学习任务</h1>
  <p className="paper-reading-lead">从 Episode、起止条件和示范一致性出发，设计首个模仿学习任务，完成五点采样与抓取放置示范。</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li>Episode</li>
    <li>任务设计</li>
    <li>五点采样</li>
    <li>示范采集</li>
  </ul>
</section>

## 什么是 Episode？

**Episode即一次完整的任务示范。** 从机械臂处于起点姿态、任务开始，到任务完成，系统连续记录下的全部数据，就是一条 Episode。

## 一条数据里到底有什么

一条 Episode 是一段时间轴上的很多帧。 每一帧（通常 30 Hz，也就是每秒 30 条）都成对记下三样东西：当时看见/感觉到什么、机械臂自己在哪、人（或策略）下令去哪，也就是Observation、State、Action

## 任务设计：起点与结束条件

采集之前，先用文字把任务定义写清楚。一个好的任务定义要回答两个问题：**从哪开始？到哪算完？**

**起点条件：给模型一个"确定的出发点"**

- **机械臂初始姿态固定**：每条 Episode 都从同一个安全姿态出发（比如零位附近的标准姿态）。起点姿态五花八门，模型第一步就得学"从任意姿态怎么进入任务"，凭空增加难度；

**结束条件：给 Episode 画一条清晰的"终点线"**

- **成功结束**：任务目标达成（如"方块完全进入盒子，夹爪松开，机械臂抬离"）；

- **失败终止**：出现无法恢复的状况（物体掉落、碰倒容器、机械臂进入危险姿态），立即停止本条录制。

---

## 任务的一致性与多样性：数据设计的核心矛盾

这是本章最关键的一节。高质量的示范数据同时要满足两个看似矛盾的要求：

**一致性：教的是一种"做法"**

- **操作风格一致**：同一个任务，所有 Episode 用同一种策略完成（比如都从方块右侧接近、夹取、从上方移入盒子）。如果我们的采集数据少，一半数据从左边抓、一半从右边抓，泛化性不足，模型学到的是两种做法的"平均"——往往是哪个都抓不着的诡异路径；

- **节奏一致**：动作速度、停顿位置大体稳定，设置20秒即在20秒内完成。时快时慢的数据会让模型动作忽快忽慢；

- **流程一致**：每条都完整走"接近→抓取→搬运→放置→撤离"全流程，不省略步骤。

- **场景初始状态可控**：目标物放在规定区域内（区域可以大，但边界要清楚），无关物品清出工作区；

- **相机位置固定**：采集全程相机不能挪动——对模型来说，相机动 5 厘米等于世界变了。

**多样性：见过的"情况"要够多**

- **目标位置多样**：方块出现在工作区内的各个位置（网格化地覆盖，而不是随手撒）；

- **初始姿态多样**：方块的朝向、与障碍的相对关系有变化；

---

## 成功与失败标准

录制中出现的失败片段，处理原则很简单：**本条重录**。不要抱着"也许模型能学到"的侥幸心理留下失败数据——模型确实会学，连失败一起学。

"任务完成"必须是一个**可客观判定**的状态，而不是"看起来差不多了"。好的成功标准长这样：

---

## 数据数量与数据质量

经验参考（单一桌面任务且在干净的环境内如在数据采集箱中，如若没有数据采集箱子建议增加数据集）：

|数据量|预期效果|
|---|---|
|**50 条**|能跑通流程，模型在数据覆盖的区域内开始工作（入门任务的起步量级）|
|**50–100 条**|成功率进入可用区间，是大多数单任务实验的甜点区|
|**100\+ 条**|边际收益递减，除非任务复杂或成功率要求很高|

多任务则需要按照复杂度相应增加数据就好，当然，数据是可以训练完模型后补录的，当发现模型效果不是很好的时候可以进行增补数据集。

但请把下面这段话放在数字之前：

- **50 条高质量数据，胜过 200 条敷衍数据。**

- **数据采集有问腿，不要犹豫，直接重录这一条**

- **如若想要泛化性强那肯定是成百上千条数据**

---

## 单任务与多任务数据集

- **单任务数据集**：一个数据集只含一种任务（如"方块入盒"）。模型目标单一，数据需求小，成功率容易做高。第一个模型务必从单任务开始。

- **多任务数据集**：一个数据集包含多种任务（抓方块，打开抽屉，将方块放入抽屉），每条 Episode 用 `task_index` 标注属于哪个任务。数据利用率高，是迈向通用策略的方向，但任务之间会互相挤占模型容量，每个任务需要更多数据才能学好。

---

## 数据采集迭代

节奏上分批采集，迭代验证：先采 50 条 → 训练 → 真机评估 → 针对失败场景补采 → 再训练。模型大方向对、只是精度差，补数据有用；模型行为完全不对，说明任务或数据设计有问题，补再多也是浪费。

---

## 数据制作示例

**场景设计：**

1\.将小龙虾放入黑色盒子里，注意需要将黑色盒子底部用双面胶固定，防止其移动位置，同时相机，机械臂也要保持固定位置，光线也要保持不变。

![设计第一个模仿学习任务：数据制作示例（配图 1）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-01-task-scene.png)

2\.将小龙虾按照如图所示的点进行摆放采集数据，即为1\-\>2\-\>3\-\>4\-\>5为一轮，采集持续10轮

![设计第一个模仿学习任务：数据制作示例（配图 2）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-02-five-point-sampling.png)

- 新手录数据时最头疼的问题是"物体位置怎么摆才算练到位"——随手一摆，要么全挤在一小块地方（模型只认这一块，换个位置就不会抓），要么东一个西一个没规律（有的地方练得多、有的地方没练过）。这就像复习时只刷自己会做的题，考试换个题型就抓瞎；也像只给机器人看一种口味的零食，结果它到了自助餐厅完全不知道从何下嘴。推荐一个又简单又规范的方法：

1. **画点**：用铅笔在数据采集区域（数采实验盒/桌垫）内点上 **5 个点**，呈**十字架形状**——中心 1 个点，上下左右各 1 个点。

2. **定距**：相邻点之间相隔 **5\~10cm** 左右，确保五个点都在机械臂工作范围内、且在两路摄像头画面中清晰可见。

3. **分配**：**每个点采集 10 组数据**，5 个点 × 10 组 = **50 条**，正好达标。同时注意，不要第一个点连续采集10个数据集又第二个点连续采集10个数据集紧接采集50个，而是每个点采集一个数据集5个点为一轮，按照这个流程走十轮。

**机械臂夹取与放置设计：**

1\.初始位置

![设计第一个模仿学习任务：数据制作示例（配图 3）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-03-start-pose.jpg)

2\.夹取物块

- 将机械臂移动到小龙虾正上方（保持每次都移动到小龙虾的中心位置且距离上方相同的距离）

![设计第一个模仿学习任务：数据制作示例（配图 4）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-04-approach-object.jpg)

- 张开爪夹（为什么一开始要距离小龙虾一定的距离，就是为了避免张开爪夹的时候碰撞到小龙虾导致其位置发生变化）

![设计第一个模仿学习任务：数据制作示例（配图 5）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-05-open-gripper.jpg)

- 保持每次相同的力度与速度进行夹取

![设计第一个模仿学习任务：数据制作示例（配图 6）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-06-grasp-object.jpg)

3\.放置物块

- 移动到黑色盒子的中心正上方

![设计第一个模仿学习任务：数据制作示例（配图 7）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-07-move-to-box.jpg)

- 匀速进行张开爪夹并且抬起机械臂，此时可以看到小龙虾已经平稳落到黑色盒子的上方

![设计第一个模仿学习任务：数据制作示例（配图 8）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-08-release-object.jpg)

- 放置完小龙虾以后，将我们的机械臂进行归位

![设计第一个模仿学习任务：数据制作示例（配图 9）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/task-design-09-return-home.jpg)

- 到此，一条完美的数据集已经制作完成，接下来，你只需要重复50次这样的操作即可

**设计疑惑**

为什么不能随便动这黑盒子、相机的摆放、小龙虾的位置以及光线不能有变化？

- **破除误解**："什么都随便动"产生的不是多样性而是噪声。

- **泛化预算论**：数据量有限，变化花在哪个维度模型就学会哪个维度——花在目标位置上学会抓取不同位置的小龙虾，花在相机位置变化上模型既要学怎么抓又要学视角变化带来的差异性，这个时候想要抓取成功就需要更多的数据进行弥补，而且效果也会非常不好；

- **真要动怎么办**：不是录制时"别固定"，而是走之后要学习的补数据迭代，有意识地扩边界，达到我们追求的泛化性。

</div>
