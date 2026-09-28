---
description: 'Chapter 9 of the Seeed Physical AI Beginner''s Course — foundations of robot learning and imitation learning: why the arm needs learning, rule-based vs learning-based control, observation/state/action, action chunks, data distribution, and the three phases of training, inference, and evaluation.'
title: Chapter 9 - Foundations of Robot Learning and Imitation Learning
keywords:
  - reBot
  - Imitation Learning
  - Behavioral Cloning
  - Robot Learning
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_9
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-21'
url: https://wiki.seeedstudio.com/rebot_physical_ai_course_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 9 · Theory & Practice</span>
    <h2>9. Foundations of Robot Learning and Imitation Learning</h2>
    <p>
      Chapter 9 of the Seeed Physical AI Beginner's Course — why the arm needs learning,
      rule-based vs learning-based control, observation/state/action, action chunks, data
      distribution, and the three phases of training, inference, and evaluation.
    </p>
    <div className="hero-actions">
      <a href="#why-learning">Why learning</a>
      <a href="#data-distribution">Data distribution</a>
      <a href="#pipeline">Pipeline</a>
    </div>
  </div>
</section>

## 9.1 Why Do Robot Arms Need Learning?

<section id="why-learning" className="section-card">
  <div className="section-title">
    <span>Motivation</span>
    <h2>9.1 Why Do Robot Arms Need Learning?</h2>
  </div>

In Stage 2, you can already control the robot arm with the Python SDK: read joint angles, send target positions, open and close the gripper. So it's natural to think — just write a program that makes the arm automatically pick up blocks on the table, right?

So you write such a program. During the first demo in the lab, the program worked great. But the next day, things changed — and you'll find that to handle these changes, more and more "if" statements get added to the program, eventually becoming a giant catalog of special cases that no one can maintain.

**This is the fundamental dilemma of traditional programmatic control: the real world changes continuously, while if-else is discrete.** You cannot enumerate every possible state of the world.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-01.png" alt="The dilemma of traditional programmatic control" />
</div>

**Enabling robot arms to acquire skills this way is what Robot Learning sets out to solve.** And the imitation learning covered in this stage is the most mature and easiest-to-deploy-on-real-hardware approach.

</section>

## 9.2 Rule-Based Control vs. Learning-Based Control

<section id="control-paradigms" className="section-card">
  <div className="section-title">
    <span>Paradigms</span>
    <h2>9.2 Rule-Based Control vs. Learning-Based Control</h2>
  </div>

Before continuing, let's put the two control approaches side by side and see them clearly.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-02.png" alt="Rule-based control vs. learning-based control" />
</div>

:::note
Stages 3 and 4 of this course follow the "learning-based control" path. But remember: even in the future, your learning systems will still retain a large number of rules — such as joint limits and safe speed constraints. Learning and rules are complementary.
:::

</section>

## 9.3 Imitation Learning and Behavioral Cloning

<section id="imitation-learning" className="section-card">
  <div className="section-title">
    <span>Imitation</span>
    <h2>9.3 Imitation Learning and Behavioral Cloning</h2>
  </div>

### What Is Imitation Learning

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-03.png" alt="Imitation learning" />
</div>

### What Is Behavioral Cloning

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-04.png" alt="Behavioral cloning" />
</div>

</section>

## 9.4 Observation, State, and Action

<section id="observation-state-action" className="section-card">
  <div className="section-title">
    <span>Data concepts</span>
    <h2>9.4 Observation, State, and Action</h2>
  </div>

All data in imitation learning can be categorized into three concepts. These three terms will appear repeatedly in every chapter that follows, so build accurate intuition here.

- **Observation:** the world the robot "sees."
- **State:** the robot's "own" condition.
- **Action:** what the robot "will do."

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-05.png" alt="Observation, state, and action" />
</div>

</section>

## 9.5 Single-Step Actions vs. Action Chunks

<section id="action-chunks" className="section-card">
  <div className="section-title">
    <span>Actions</span>
    <h2>9.5 Single-Step Actions vs. Action Chunks</h2>
  </div>

- **Single-step action:** one decision per frame.
- **Action chunk:** predict a sequence of actions at once.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-06.png" alt="Single-step action vs. action chunk" />
</div>

Of course, longer action chunks aren't always better. Predicting too far ahead means the environment may change mid-execution (e.g., an object gets bumped), while the arm is still executing "outdated" actions. Real systems use a compromise: execute open-loop for a short segment, then re-observe and re-predict.

</section>

## 9.6 Data Distribution and Model Generalization

<section id="data-distribution" className="section-card">
  <div className="section-title">
    <span>Distribution</span>
    <h2>9.6 Data Distribution and Model Generalization</h2>
  </div>

This is the most important section of this chapter, and the one beginners most easily overlook, yet it determines success or failure in practice. Remember this one sentence first:

**An imitation learning model can only learn what's in the data, and can only work within the range covered by the data.**

- All (observation, action) pairs the model saw during training constitute a **Data Distribution**. During inference, if the images and states the arm encounters fall within this distribution, the model generally performs well; once they go outside the distribution, the model's output loses its basis and behavior becomes unpredictable.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-07.png" alt="Data distribution" />
</div>

This leads to several very practical implications:

- If you want it to grasp blocks at any position on the table, the data must cover all positions on the table — if you only collect data at the center of the table, the model will only grasp at the center.
- If you want it to grasp objects of different colors, the data must contain different colors — otherwise, a new color is an unfamiliar world to it.
- Lighting, background, and camera position should all stay as consistent as possible with data collection — a model trained on afternoon-collected data may completely fail under evening indoor lighting.

And **generalization** is the model's ability to apply patterns learned from data to new situations within the distribution that it has not seen individually. For example, if training saw blocks at 100 different positions, and during inference a block appears at the 101st position (still on the tabletop), the model can still grasp it — that's generalization. Generalization isn't magic; it comes from the data's **diversity**: the richer and more continuous the data coverage, the smaller the "gaps" within the distribution, and the better the generalization.

:::tip
The upper limit of imitation learning is essentially determined at the moment data is collected. Training merely realizes that upper limit.
:::

</section>

## 9.7 Training, Inference, and Evaluation

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>Pipeline</span>
    <h2>9.7 Training, Inference, and Evaluation</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-08.png" alt="The three phases of imitation learning" />
</div>

### Training: Offline Learning

Training happens after data collection is complete; it's an **offline** process: the arm can be powered off and set aside; all work is done on the GPU.

- **Input:** collected dataset (time series of images, State, and Action);
- **Process:** the model repeatedly reads the data, continuously adjusting its internal parameters so that its predicted Actions increasingly match the human demonstrations;
- **Output:** a trained model file.

Training quality is primarily observed through **Loss**: as Loss decreases, the model's predicted actions increasingly resemble human demonstrations.

### Inference: Online Decision-Making

Inference is the process where the model is **deployed on the real robot and works in real time**: reading camera and joint states → the model predicts an Action Chunk → sending it to the motors for execution. Inference has real-time requirements — the model must output actions within tens of milliseconds, otherwise the arm will stutter.

### Evaluation: Judged by Success Rate

The model is trained, Loss is low — can it actually do the job? Not necessarily.

**Low Loss only means the model is "human-like," not that it "can complete the task."** The only reliable evaluation method is real-robot testing:

- Set clear task success criteria (e.g., "the block ends up in the box");
- Vary initial conditions (block position, lighting), repeat the test N times;
- Calculate the task success rate — e.g., 14 successes out of 20 tests = 70% success rate.

Failure cases found during evaluation are not endpoints; they are input for the next round of data collection — wherever failures occur, collect additional data there, then retrain. This is the data iteration loop, and it's the daily routine of real robot learning projects.

</section>

## 9.8 Advantages and Limitations of Imitation Learning

<section id="advantages" className="section-card">
  <div className="section-title">
    <span>Trade-offs</span>
    <h2>9.8 Advantages and Limitations of Imitation Learning</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-9/ch9-09.png" alt="Advantages and limitations of imitation learning" />
</div>

</section>

</div>
