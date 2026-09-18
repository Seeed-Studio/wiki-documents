---
description: "Chapter 1 of the Seeed Embodied Intelligence Beginner's Course — understand what robots and robotic arms are, degrees of freedom, and the difference between traditional control, imitation learning, and VLA."
title: Chapter 1 - Robots and Embodied Intelligence
keywords:
  - reBot
  - Robotic Arm
  - Robot
  - Embodied Intelligence
  - DOF
  - Imitation Learning
  - VLA
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_1
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/rebot_embodied_ai_course_chapter_1/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 1 · Chapter 1 · Theory</span>
    <h2>1. Getting to Know Robots and Embodied Intelligence</h2>
    <p>
      Chapter 1 of the Seeed Embodied Intelligence Beginner's Course — understand what robots and
      robotic arms are, degrees of freedom, and the difference between traditional control, imitation
      learning, and VLA.
    </p>
    <div className="hero-actions">
      <a href="#objectives">Learning objectives</a>
      <a href="#paradigms">Control paradigms</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>In this chapter</strong>
    <span>1.1 Learning Objectives</span>
    <span>1.2 What Is a Robot?</span>
    <span>1.3 What Is a Robotic Arm?</span>
    <span>1.4 Traditional Control, Imitation Learning, and VLA</span>
    <span>1.5 The Role of reBot Arm in the Course</span>
  </div>
</section>

<RebotCourseNav />

## 1.1 Learning Objectives

<section id="objectives" className="section-card">
  <div className="section-title">
    <span>Objectives</span>
    <h2>1.1 Learning Objectives</h2>
  </div>

After completing this chapter, you should be able to:

1. Explain the basic concepts of robots and robotic arms.
2. Identify joints, links, degrees of freedom, and end effectors in a robotic arm.
3. Understand perception, decision-making, and control in a robot system.
4. Distinguish between industrial robotic arms and embodied intelligence robotic arms.
5. Distinguish between traditional program control, imitation learning, and VLA.
6. Describe the composition of a complete embodied intelligence robotic arm system.
7. Understand the role of reBot Arm in the entire embodied intelligence system.

</section>

## 1.2 What Is a Robot?

<section id="robot" className="section-card">
  <div className="section-title">
    <span>Foundations</span>
    <h2>1.2 What Is a Robot?</h2>
  </div>

A robot is not merely a machine that looks like a human. From a functional perspective, a robot is a system that can:

- Acquire information about itself or its environment;
- Perform computation or decision-making based on goals;
- Change its own state or the surrounding environment through actuators.

A robot system can typically be abstracted as:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-01.png" alt="Robot system abstraction" />
</div>

For example, a desktop grasping robot needs to complete the following process:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-02.png" alt="Desktop grasping robot process" />
</div>

Therefore, a robot not only needs to "be able to move" but also must be able to form a continuously running closed loop.

### The Difference Between Robots and Ordinary Machines

Ordinary machines often work in a fixed manner. For example:

- An electric fan keeps rotating after being powered on;
- A conveyor belt runs at a fixed speed;
- An ordinary motor rotates after receiving voltage.

Robots, on the other hand, typically have stronger state perception, program control, and task execution capabilities. For example, a robotic arm can control multiple joints to move to different postures based on different target positions.

</section>

## 1.3 What Is a Robotic Arm?

<section id="arm" className="section-card">
  <div className="section-title">
    <span>Foundations</span>
    <h2>1.3 What Is a Robotic Arm?</h2>
  </div>

A robotic arm is a robot mechanism composed of multiple joints and links. Through the coordinated motion of multiple joints, it brings the end effector to a specified position and posture, and completes tasks such as grasping, handling, assembly, polishing, and welding.

A robotic arm can be simply understood as:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-03.png" alt="Robotic arm" />
</div>

Robotic arms share some similarities with human arms. However, a robotic arm does not necessarily mimic human anatomy. Its number of joints, arrangement, and workspace are designed according to task requirements.

### What Are Degrees of Freedom

Degrees of freedom are commonly denoted as DOF (Degree of Freedom). DOF describes the number of independent directions in which a mechanical system can move.

In three-dimensional space, the complete pose of a rigid body includes:

- Translation along the X, Y, and Z axes;
- Rotation about the X, Y, and Z axes.

Therefore, an object in 3D space has at most 6 degrees of freedom.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-04.png" alt="6 degrees of freedom" />
</div>

A six-degree-of-freedom robotic arm can typically control the position and posture of the end effector in 3D space.

It should be noted that:

:::note
Six degrees of freedom does not mean the robotic arm has only six motors, nor does it mean that all positions and postures can necessarily be reached.
:::

A robotic arm is also affected by factors such as link lengths, joint limits, singularities, and collisions.

</section>

## 1.4 Traditional Control, Imitation Learning, and VLA

<section id="paradigms" className="section-card">
  <div className="section-title">
    <span>Paradigms</span>
    <h2>1.4 Traditional Control, Imitation Learning, and VLA</h2>
  </div>

A robotic arm can obtain actions through different methods.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem', margin: '1.25rem 0 1.5rem'}}>
  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>Traditional Program Control</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-05.png" alt="Traditional program control" />
    </div>
    <p>Suitable for fixed positions, fixed workflows, and repetitive tasks.</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>Imitation Learning</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-06.png" alt="Imitation learning" />
    </div>
    <p>A human first teleoperates the robotic arm to complete a task, and then a model learns from the demonstration data. Suitable for grasping, organizing, and continuous operation tasks.</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>VLA</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-07.png" alt="VLA" />
    </div>
    <p>VLA uses visual, language, and action information to enable the robotic arm to complete tasks based on natural language.</p>
  </div>
</div>

For example:

:::note
Put the red block on the left into the box.
:::

</section>

## 1.5 The Role of reBot Arm in the Course

<section id="role" className="section-card">
  <div className="section-title">
    <span>Hands-on Platform</span>
    <h2>1.5 The Role of reBot Arm in the Course</h2>
  </div>

reBot Arm is the unified practical platform for the entire course. Later, we will use it to complete:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-08.png" alt="The role of reBot Arm" />
</div>

</section>

</div>
