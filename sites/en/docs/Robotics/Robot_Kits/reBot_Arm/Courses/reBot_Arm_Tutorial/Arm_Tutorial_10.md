---
description: Chapter 10 of the Seeed Embodied Intelligence Beginner's Course — what LeRobot is, leader/follower arm division of labor, the Robot and Teleoperator plugin architecture, the camera/CAN/arm data flow, and DM vs RS configuration differences.
title: Chapter 10 - LeRobot and reBot Arm System Architecture
keywords:
  - reBot
  - LeRobot
  - Teleoperation
  - Leader Arm
  - Follower Arm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_10
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-21'
url: https://wiki.seeedstudio.com/rebot_embodied_ai_course_chapter_10/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 10 · Theory</span>
    <h2>10. LeRobot and reBot Arm System Architecture</h2>
    <p>
      Chapter 10 of the Seeed Embodied Intelligence Beginner's Course — what LeRobot is,
      leader/follower arm division of labor, the Robot and Teleoperator plugin architecture, the
      camera/CAN/arm data flow, and DM vs RS configuration differences.
    </p>
    <div className="hero-actions">
      <a href="#why-lerobot">Why LeRobot</a>
      <a href="#leader-follower">Arms</a>
      <a href="#plugins">Plugins</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>In this chapter</strong>
    <span>10.1 What Is LeRobot and Why Do We Need It?</span>
    <span>10.2 Leader Arm and Follower Arm</span>
    <span>10.3 Plugin Architecture</span>
    <span>10.4 Data Flow Overview: Cameras, CAN, and the Arm</span>
    <span>10.5 Four Workflows: Four Uses of the Same System</span>
    <span>10.6 DM vs. RS Configuration Differences</span>
  </div>
</section>

<RebotCourseNav />

## 10.1 What Is LeRobot and Why Do We Need It?

<section id="why-lerobot" className="section-card">
  <div className="section-title">
    <span>Motivation</span>
    <h2>10.1 What Is LeRobot and Why Do We Need It?</h2>
  </div>

In Chapter 9 we established the conceptual framework of imitation learning: demonstration, data, model, closed loop. But to actually run this pipeline, you immediately encounter a host of trivial yet specific problems:

- How to align timestamps between camera frames and joint angles?
- What format should be used to store images, states, and actions for dozens of Episodes?
- How to share and download trained models on Hugging Face Hub?
- How can the three codebases — data collection, training, and inference — share the same arm control logic?

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-01.png" alt="Reinventing the wheel" />
</div>

If everyone reinvented the wheel, robot learning would remain a game for only a few labs. LeRobot is the open-source framework Hugging Face built to solve this — it implements proven imitation learning algorithms (ACT, smolVLA, GR00T, etc.) in PyTorch, defines a standard robot dataset format, and provides a complete command-line toolchain from teleoperation and data collection to training and real-robot deployment.

</section>

## 10.2 Leader Arm and Follower Arm

<section id="leader-follower" className="section-card">
  <div className="section-title">
    <span>Arms</span>
    <h2>10.2 Leader Arm and Follower Arm</h2>
  </div>

- The first step of imitation learning is "human demonstrates to the robot." The question is: how does a human "teach" a 750 mm-reach arm to do precise grasping motions? Physically guiding it by hand is both dangerous and produces non-smooth data.
- The answer is master-slave teleoperation: use a structurally similar, lightweight, flexible demonstration arm as the "input device" — the human moves the leader, and the follower follows in real time.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-02.png" alt="Leader arm and follower arm" />
</div>

- **Leader Arm (leader / teaching arm):** the arm the human holds and moves. It **only reads positions** — it reads its own joint angles in real time and sends them to the computer. It doesn't need to output force, so it can use a lightweight, low-cost servo solution.
- **Follower Arm (follower / execution arm):** the arm that actually does the work. It receives joint angles from the Leader and drives its high-power joint motors to follow, completing the actual grasping.

This is like the relationship between the control stick in a crane cab and the crane arm itself. The operator moves the lightweight stick (Leader), while the heavy lifting is done by the arm outside (Follower). Every movement of the stick is real-time "translated" into movements of the crane arm.

</section>

## 10.3 Plugin Architecture

<section id="plugins" className="section-card">
  <div className="section-title">
    <span>Plugins</span>
    <h2>10.3 Plugin Architecture: Robot Plugin and Teleoperator Plugin</h2>
  </div>

LeRobot's first design principle: the framework doesn't know any specific hardware; it only defines interfaces. Hardware connects as plugins.

| | **Robot Plugin** | **Teleoperator Plugin** |
| :--- | :--- | :--- |
| Role | Executor: receives actions, reports state | Input: only reads human motion intent |
| Data Direction | Bidirectional (read + write) | Unidirectional (read-only) |
| Core Methods | `get_observation()`, `send_action()` | `get_action()` |
| In the reBot system | B601 Follower slave arm | reBot 102 Leader master arm |

One-sentence distinction: **The Robot handles "doing," the Teleoperator handles "reading."**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-03.png" alt="Plugin architecture" />
</div>

</section>

## 10.4 Data Flow Overview: Cameras, CAN, and the Arm

<section id="data-flow" className="section-card">
  <div className="section-title">
    <span>Data flow</span>
    <h2>10.4 Data Flow Overview: Cameras, CAN, and the Arm</h2>
  </div>

In one control cycle, what data flows, in what format, through which path? One computer connects three types of peripherals, corresponding to three data paths:

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-10/ch10-04.png" alt="Data flow overview" />
</div>

</section>

## 10.5 Four Workflows: Four Uses of the Same System

<section id="workflows" className="section-card">
  <div className="section-title">
    <span>Workflows</span>
    <h2>10.5 Four Workflows: Four Uses of the Same System</h2>
  </div>

Understanding the hardware and data flow, when you look at the four workflows in later chapters of this stage, you'll find they **use the same plugins and same configuration; only the LeRobot tools called differ**:

| Workflow | LeRobot Tool |
|---|---|
| Teleoperation | `lerobot-teleoperate` |
| Data Collection | `lerobot-record` |
| Training | `lerobot-train` |
| Inference & Deployment | `lerobot-record` (with a policy) or an inference script |

- **Teleoperation and data collection use the same hardware chain** — the only difference is whether data is recorded.
- **Inference deployment and data collection are structural mirror images:** during collection, actions come from the Leader (human); during inference, actions come from the model (checkpoint). Everything else (camera reading, State feedback, CAN commands, safety limits) is identical. This is the benefit of a plugin architecture — changing the decision-maker doesn't require changing the system.
- **Teleoperation and inference deployment:** both have all hardware active and control the arm online; the difference is "who makes decisions" — in teleoperation, the decision-maker is the human; in inference, it's the model.

</section>

## 10.6 DM vs. RS Configuration Differences

<section id="dm-vs-rs" className="section-card">
  <div className="section-title">
    <span>Config</span>
    <h2>10.6 DM vs. RS Configuration Differences</h2>
  </div>

|  **Comparison Item**  |                    **B601-DM**                   |                **B601-RS**               |
| :-------------------: | :----------------------------------------------: | :--------------------------------------: |
|     PC Connection     |           Damiao USB2CAN Serial Bridge           |   SocketCAN-compatible USB-CAN Adapter   |
|      Device Name      |          `/dev/ttyACM*` (Serial Bridge)          |   `can0` (SocketCAN Network Interface)   |
|     `--robot.type`    |             `seeed_b601_dm_follower`             |         `seeed_b601_rs_follower`         |
|     `--robot.port`    | `/dev/ttyACM0` (depending on actual enumeration) | `can0` (depending on actual enumeration) |
| `--robot.can_adapter` |                     `damiao`                     |                `socketcan`               |


One sentence summarizing the relationship between the two versions: **same skeleton, two sets of "hearts and nerves."** The mechanical structure, joint naming, and upper-level software workflows are identical; all differences are in the motors and CAN communication chain — which is also the most commonly misconfigured parameter in all LeRobot commands.

This means that all subsequent teleoperation, data collection, training, and evaluation commands are identical for both arms — you only need to replace the corresponding arm name.

</section>

</div>
