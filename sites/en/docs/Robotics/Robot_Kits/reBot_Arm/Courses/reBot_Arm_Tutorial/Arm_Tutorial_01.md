---
description: "Chapter 1 of the Seeed Embodied Intelligence Beginner's Course — understand what robots and robotic arms are, degrees of freedom, and the difference between traditional control, imitation learning, and VLA."
title: Chapter 1 - Getting to Know Robots and Embodied Intelligence
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

# Chapter 1 [Theory]: Getting to Know Robots and Embodied Intelligence

## 1.1 Learning Objectives

After completing this chapter, you should be able to:

1. Explain the basic concepts of robots and robotic arms.
2. Identify joints, links, degrees of freedom, and end effectors in a robotic arm.
3. Understand perception, decision-making, and control in a robot system.
4. Distinguish between industrial robotic arms and embodied intelligence robotic arms.
5. Distinguish between traditional program control, imitation learning, and VLA.
6. Describe the composition of a complete embodied intelligence robotic arm system.
7. Understand the role of reBot Arm in the entire embodied intelligence system.

## 1.2 What Is a Robot?

A robot is not merely a machine that looks like a human. From a functional perspective, a robot is a system that can:

- Acquire information about itself or its environment;
- Perform computation or decision-making based on goals;
- Change its own state or the surrounding environment through actuators.

A robot system can typically be abstracted as:

![Robot system abstraction](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-01.png)

For example, a desktop grasping robot needs to complete the following process:

![Desktop grasping robot process](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-02.png)

Therefore, a robot not only needs to "be able to move" but also must be able to form a continuously running closed loop.

### The Difference Between Robots and Ordinary Machines

Ordinary machines often work in a fixed manner. For example:

- An electric fan keeps rotating after being powered on;
- A conveyor belt runs at a fixed speed;
- An ordinary motor rotates after receiving voltage.

Robots, on the other hand, typically have stronger state perception, program control, and task execution capabilities. For example, a robotic arm can control multiple joints to move to different postures based on different target positions.

## 1.3 What Is a Robotic Arm?

A robotic arm is a robot mechanism composed of multiple joints and links. Through the coordinated motion of multiple joints, it brings the end effector to a specified position and posture, and completes tasks such as grasping, handling, assembly, polishing, and welding.

A robotic arm can be simply understood as:

![Robotic arm](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-03.png)

Robotic arms share some similarities with human arms. However, a robotic arm does not necessarily mimic human anatomy. Its number of joints, arrangement, and workspace are designed according to task requirements.

### What Are Degrees of Freedom

Degrees of freedom are commonly denoted as DOF (Degree of Freedom). DOF describes the number of independent directions in which a mechanical system can move.

In three-dimensional space, the complete pose of a rigid body includes:

- Translation along the X, Y, and Z axes;
- Rotation about the X, Y, and Z axes.

Therefore, an object in 3D space has at most 6 degrees of freedom.

![6 degrees of freedom](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-04.png)

A six-degree-of-freedom robotic arm can typically control the position and posture of the end effector in 3D space.

It should be noted that:

> Six degrees of freedom does not mean the robotic arm has only six motors, nor does it mean that all positions and postures can necessarily be reached.

A robotic arm is also affected by factors such as link lengths, joint limits, singularities, and collisions.

## 1.4 Traditional Control, Imitation Learning, and VLA

A robotic arm can obtain actions through different methods.

### Traditional Program Control

![Traditional program control](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-05.png)

Suitable for fixed positions, fixed workflows, and repetitive tasks.

### Imitation Learning

A human first teleoperates the robotic arm to complete a task, and then a model learns from the demonstration data.

![Imitation learning](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-06.png)

Suitable for grasping, organizing, and continuous operation tasks.

### VLA

VLA uses visual, language, and action information to enable the robotic arm to complete tasks based on natural language.

![VLA](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-07.png)

For example:

> Put the red block on the left into the box.

## 1.5 The Role of reBot Arm in the Course

reBot Arm is the unified practical platform for the entire course. Later, we will use it to complete:

![The role of reBot Arm](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-08.png)
