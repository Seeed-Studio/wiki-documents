---
description: "Seeed 具身智能入门课程第三阶段：模仿学习与 LeRobot第 17 章 — 真机推理、评估与数据迭代：训练时模型吃的是归一化数据，推理时就必须按同一套规则处理进出："
title: 第 17 章 - 真机推理、评估与数据迭代
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_17
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_17/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 17 章 · 理论与实践</span>
    <h2>17. 真机推理、评估与数据迭代</h2>
    <p>
      训练时模型吃的是归一化数据，推理时就必须按同一套规则处理进出：
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 真机推理、评估与数据迭代

## 推理数据流：一张图看懂

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-17cn/ch17-01cn.jpg" alt="" />
</div>

---

## 预处理与反归一化

训练时模型吃的是归一化数据，推理时就必须按**同一套规则**处理进出：

| 方向 | 处理 | 用的统计量 |
|-|-|-|
| 进模型 | 图像 resize + ImageNet 均值方差；state 减均值、除标准差（z\\-score） | 训练数据集的`meta/stats.json` |
| 出模型 | action 乘标准差、加均值，还原成真实关节角度 | 同上 |

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-17cn/ch17-02cn.jpg" alt="" />
</div>

---

## 启动真机推理

用 `lerobot-record` 加载策略即可，机器人和相机参数与采集时完全一致：

**RS版本：**

```Bash
lerobot-record \
  --robot.type=seeed_b601_rs_follower \
  --robot.port=can0 \
  --robot.can_adapter=socketcan \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test18 \
  --dataset.single_task="Grab the test tube into the box" \
  --dataset.num_episodes=10 \
  --dataset.episode_time_s=60 \
  --dataset.reset_time_s=10 \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --policy.push_to_hub=false 
```

 **DM版本：**

```Bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test18 \
  --dataset.single_task="Grab the test tube into the box" \
  --dataset.num_episodes=10 \
  --dataset.episode_time_s=60 \
  --dataset.reset_time_s=10 \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --policy.push_to_hub=false 
```

• --dataset.num_episodes=10：录 10 个回合。

• --dataset.episode_time_s=60：每回合最长 60 秒。设多少取决于任务耗时——比如抓小龙虾进盒子一次大概要 20\－30 秒，就设 30\－40 秒，留出余量即可。如果你想测试模型效果不想等待，可以将此时间设置很长（例如300）进行测试，因为回合与回合之间会存在时间间隔

• --dataset.reset_time_s=10：每回合之间留 10 秒给你摆放物体复位（评估时要保证每次初始状态尽量一致）。  

---

---

## Action Chunk 的执行

- 一次推理输出 100 步动作块，**只开环执行前 n 步**（`n_action_steps`）就重新观测——预测越远越不可信；
- 开启时间集成（`temporal_ensemble_coeff`）时，每个时间步的动作是多次预测的加权平均，曲线几乎无毛刺；
- 真机看起来"一顿一顿"，多半是每次重新推理的计算停顿—— chunk 执行完、新一块还没算出来的间隙。适当增大 `n_action_steps` 能缓解，代价是抗干扰变弱。

---

## 安全保护：限位、限速、急停

- **结束用 ESC**，切记不要用Ctrl\\+C进行结束，停之前先让机械臂完成当前动作块或手动回安全位，避免停在半空受力姿态
- 随时准备断电，机械臂运行异常需要进行紧急断电。

---

## 评估：成功率与完成时间

固定起始条件，连测 20 次，逐次记录。

- **成功率 = 成功次数 ÷ 20**。第一次训出的模型，50% 以上算正常开局，80% 以上算优秀；
- **完成时间**看稳定性：成功的那几次用时是否接近，忽快忽慢说明策略在"犹豫"；
- 失败的那几次**不要只记一个 ✗**——记下失败方式。

---

## 泛化能力测试

标准条件测完，逐项改变条件，看成功率掉多少（ACT数据集50条不会有太好的泛化性，建议增加数据集）

| 测试 | 做法 | 预期 |
|-|-|-|
| 位置泛化 | 方块放到五个铅笔点之外、但未出训练覆盖范围 | 应基本不掉；掉了说明位置多样性不够 |
| 轻微干扰 | 桌面上放无关物体 | 视觉干净的模型应不受影响 |
| 明显出分 | 全新物体、镜面反光台面 | 失效是预期行为，不必救 |

泛化测试的意义不是证明模型多强，而是**画出它的能力边界**——边界之内放心用，边界之外补数据集慢慢扩。

---

## 失败类型分析

| 失败类型 | 最可能原因 | 对策 |
|-|-|-|
| 够不到：伸向错误位置 | 该位置数据覆盖不足（出分布） | 补录该区域示范 |
| 抓不稳：碰到但夹不住/滑落 | 夹爪闭合时序学得不准；抓握段示范太少 | 补录抓取瞬间的高质量示范 |
| 全程乱动、动作离谱 | 训练根本没收敛，亦或是场景、光线变化较大 | 检查采集数据场景光线是否和推理一致 |

**先排除配置问题，再怀疑数据问题**——乱动是配置病，够不到才是数据病。

---

## 数据迭代：失败驱动补数据

闭环的最后一步，把失败变成数据：

1. **归类**：确定失败类型和对应场景；
2. **补录**：针对失败场景录 10–20 条新示范——够不到就录那个位置，抓不稳就录抓取瞬间，有意识地对抓取的边界进行慢慢的扩张，比如在原有的十字架的附近按5-10cm的点进行放置方块采集数据集从而进行扩张。
3. **重训**：根据新的数据集进行重新训练。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-17cn/ch17-03cn.jpg" alt="" />
</div>

至此，本章开头的闭环完整跑通：遥操作、采集、检查、训练、推理、评估、迭代——这套流程对任何新任务原样复用，这就是第三阶段的核心交付。

---

</div>
