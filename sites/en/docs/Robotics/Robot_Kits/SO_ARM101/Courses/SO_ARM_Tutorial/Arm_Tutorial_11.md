---
description: 'Chapter 11 of the SO-ARM Physical AI Beginner''s Course — robot datasets and task design: what an Episode is, what is in one data record, timestamps and synchronization, start/end conditions, consistency vs diversity, data quantity vs quality, and a worked pick-and-place example.'
title: Chapter 11 - Robot Datasets and Task Design
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Dataset
  - Episode
  - Data Collection
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_11
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_11/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 11 · Theory</span>
    <h2>11. Robot Datasets and Task Design</h2>
    <p>
      Chapter 11 of the SO-ARM Physical AI Beginner's Course — what an Episode is, what is
      in one data record, timestamps and synchronization, start/end conditions, consistency vs
      diversity, data quantity vs quality, and a worked pick-and-place example.
    </p>
    <div className="hero-actions">
      <a href="#episode">Episode</a>
      <a href="#consistency-diversity">Data design</a>
      <a href="#example">Example</a>
    </div>
  </div>
</section>

## 11.1 What Is an Episode?

<section id="episode" className="section-card">
  <div className="section-title">
    <span>Episode</span>
    <h2>11.1 What Is an Episode?</h2>
  </div>

Starting from this chapter, every operation you do means you've switched roles — **you're no longer the "driver," you're the "teacher."** Every action you take will be recorded and become the model's textbook. The basic unit of this textbook is the Episode.

**An Episode is one complete task demonstration.** From when the arm is at its starting pose and the task begins, until task completion, all data continuously recorded by the system constitutes one Episode.

</section>

## 11.2 What Exactly Is in One Data Record?

<section id="data-record" className="section-card">
  <div className="section-title">
    <span>Data</span>
    <h2>11.2 What Exactly Is in One Data Record?</h2>
  </div>

Recall Chapter 8 — this should look familiar. Yes, it's what we learned before: **Observation, State, Action**.

On the SO-ARM, one recorded frame contains:

- **Observation:** the two camera images (front + side);
- **State:** the follower's 6 joint readings (5 joints + gripper);
- **Action:** the 6 target joint values derived from the leader.

Note the source of Action: it records the target action given (via the Leader), not the position the Follower actually reached afterward. This precisely matches the definition of behavioral cloning — the model learns "under this observation and state, what the human intended to do at that moment."

</section>

## 11.3 Timestamps and Data Synchronization

<section id="timestamps" className="section-card">
  <div className="section-title">
    <span>Sync</span>
    <h2>11.3 Timestamps and Data Synchronization</h2>
  </div>

Images go over USB, joint data goes over the serial bus — the two data streams naturally arrive at the computer at different times. LeRobot timestamps each frame of data, thereby aligning images, states, and actions from "the same moment" into one row.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-01.png" alt="Timestamps and synchronization" />
</div>

</section>

## 11.4 Task Design: Start and End Conditions

<section id="task-design" className="section-card">
  <div className="section-title">
    <span>Task design</span>
    <h2>11.4 Task Design: Start and End Conditions</h2>
  </div>

Before collecting data, write out the task definition clearly in text. A good task definition answers two questions: **Where does it start? When is it done?**

### Start Condition: Give the Model a "Fixed Starting Point"

- **Fixed initial arm pose:** every Episode starts from the same safe pose (e.g., the calibrated home posture). If starting poses vary wildly, the model's first step is to learn "how to enter the task from any pose," adding unnecessary difficulty.

### End Condition: Draw a Clear "Finish Line" for the Episode

- **Successful end:** task goal achieved (e.g., "object released at Point B, gripper open, arm returned to start").
- **Failure termination:** an unrecoverable situation occurs (object dropped, object knocked off the mat, arm in a dangerous pose) — stop recording this Episode immediately.

</section>

## 11.5 Task Consistency vs. Diversity

<section id="consistency-diversity" className="section-card">
  <div className="section-title">
    <span>Data design</span>
    <h2>11.5 Task Consistency vs. Diversity: The Core Tension in Data Design</h2>
  </div>

This is the most critical section of the chapter. High-quality demonstration data must simultaneously satisfy two seemingly contradictory requirements.

### Consistency: Teaching One "Way of Doing It"

- **Consistent operation style:** for the same task, all Episodes should use the same strategy (e.g., always approach the object from above, grasp it, and place it at Point B). If half the data grasps from the left and half from the right, the model learns the "average" of two approaches — often a weird path that grasps nothing.
- **Consistent rhythm:** movement speed and pause positions should be roughly stable — if you set 20-30 seconds, complete it in 20-30 seconds. Data that varies in speed makes the model's actions inconsistent in speed.
- **Consistent workflow:** every run should go through the full "approach → grasp → transport → place → retract" workflow without skipping steps.
- **Controlled scene initial state:** objects should be placed within a designated area (the area can be large, but boundaries must be clear); remove unrelated items from the workspace.
- **Fixed camera position:** cameras must not move during collection — to the model, moving the camera 5 cm means the world has changed.

### Diversity: Enough "Variations" Seen

- **Diverse target positions:** objects appear at various positions in the workspace (grid coverage, not random scattering).
- **Diverse initial poses:** object orientation and relative position to obstacles should vary.

</section>

## 11.6 Success and Failure Criteria

<section id="success-criteria" className="section-card">
  <div className="section-title">
    <span>Criteria</span>
    <h2>11.6 Success and Failure Criteria</h2>
  </div>

"Task complete" must be an **objectively determinable** state, not "looks about right." Good success criteria look like this:

| **Unqualified Standard (Ambiguous)** | **Qualified Standard (Measurable)** |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| "As long as the object is roughly grasped." | "The gripper is fully closed and grasps the center of the object." |
| "As long as the object is placed at Point B." | "The object is placed within the marked Point B area, not hanging off the edge." |
| "Just pick up the object and put it down." | "The entire motion is smooth, and the duration of each recorded episode stays reasonably consistent." |

For failed segments during recording, the principle is simple: **re-record this Episode.** Don't hold onto failed data hoping "maybe the model will learn from it" — the model will indeed learn, including from the failures.

</section>

## 11.7 Data Quantity vs. Data Quality

<section id="data-quantity" className="section-card">
  <div className="section-title">
    <span>Data volume</span>
    <h2>11.7 Data Quantity vs. Data Quality</h2>
  </div>

Empirical reference (for a single tabletop task in a clean, consistent scene):

| Data Amount | Expected Effect |
| :--- | :--- |
| **20-30 Episodes** | First usable policy for a fixed A-to-B task (beginner level) |
| **50 Episodes** | Pipeline works; model starts working across the data-covered area (starting level for general positioning) |
| **50-100 Episodes** | Success rate reaches a usable range; the sweet spot for most single-task experiments |
| **100+ Episodes** | Diminishing returns, unless the task is complex or success rate requirements are very high |

For multi-task, increase data proportionally to complexity. Of course, data can be supplemented after training — when you find the model's performance isn't great, you can add more data.

But put these sentences before the numbers:

- **50 high-quality Episodes are better than 200 sloppy ones.**
- **If there's a problem with data collection, don't hesitate — re-record this Episode immediately.**
- **If you want strong generalization, you'll need hundreds or thousands of Episodes.**

:::tip
A practical batching strategy (also used by the SenseCraft workflow in Chapter 22): record about 10 episodes per batch; after 2-3 batches, keep 20-30 valid episodes for the first training run; then add data for harder variants according to the training results.
:::

</section>

## 11.8 Single-Task vs. Multi-Task Datasets

<section id="single-multi-task" className="section-card">
  <div className="section-title">
    <span>Datasets</span>
    <h2>11.8 Single-Task vs. Multi-Task Datasets</h2>
  </div>

- **Single-task dataset:** one dataset contains only one task (e.g., "object from A to B"). The model has a single goal, data requirements are small, and success rate is easier to achieve. Your first model must start with a single task.
- **Multi-task dataset:** one dataset contains multiple tasks (grasp block, open drawer, put block in drawer); each Episode is labeled with `task_index` to indicate which task it belongs to. Data utilization is high and it's the direction toward general policies, but tasks compete for model capacity, requiring more data per task to learn well.

</section>

## 11.9 Data Collection Iteration

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iteration</span>
    <h2>11.9 Data Collection Iteration</h2>
  </div>

Collect in batches with iterative validation: collect 50 → train → evaluate on real robot → collect more for failure scenarios → retrain. If the model's overall direction is right but precision is poor, adding data helps; if model behavior is completely wrong, there's a problem with task or data design, and no amount of additional data will help.

</section>

## 11.10 Data Creation Example: Pick-and-Place from A to B

<section id="example" className="section-card">
  <div className="section-title">
    <span>Example</span>
    <h2>11.10 Data Creation Example: Pick-and-Place from A to B</h2>
  </div>

The example task used throughout the rest of this stage: **pick up an object at Point A and place it at Point B** — the same task used by the no-code platform in Chapter 22, so you can compare the two paths directly.

### Scene Design

1. Mark two fixed positions on the desk mat: Point A for the object's starting position, Point B for its destination. Prepare an appropriately sized object that is easy to grasp, such as a small block.
2. Make sure Point A, Point B, both arms, and the object are visible in both camera views and are not obstructed. Secure the cameras; keep lighting unchanged; keep the leader out of the camera views.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp" alt="Task scene with Point A and Point B" />
</div>

The most headache-inducing problem for beginners recording data is "how to place objects to practice thoroughly" — random placement either clusters everything in a small area (the model only recognizes that spot and fails at other positions) or scatters them irregularly (some areas are over-practiced, others never touched). Here's a simple and standardized method:

1. **Mark points:** use a pencil to mark **5 points** in the collection area, arranged in a **cross shape** — 1 in the center, one each at top, bottom, left, and right.
2. **Set spacing:** adjacent points should be separated by **5-10 cm**, ensuring all five points are within the arm's workspace and clearly visible in both camera feeds.
3. **Allocate:** collect **10 Episodes at each point**; 5 points × 10 = **50 Episodes**, which meets the target. Don't collect 10 Episodes at point 1, then 10 at point 2; instead, collect 1 Episode at each point (5 points = 1 round), and do 10 rounds this way.

### Grasping and Placement Design

1. **Initial position:** the arm rests at its home pose; the object sits at Point A.
2. **Grasp the object:**
   - Move directly above the object (always arrive at the same height above it);
   - Open the gripper at a fixed distance above the object (why a fixed distance? To avoid bumping the object while opening the gripper and shifting its position);
   - Grasp with the same force and speed each time.
3. **Place the object:**
   - Move directly above the center of Point B;
   - Open the gripper at constant speed and lift the arm — you should see the object settle within the marked area;
   - Return the arm to its home position.

That's it — one perfect Episode is done. Now just repeat this 50 times.

### Design Questions

Why can't I move the mat, cameras, object positions, or change lighting?

- **Dispelling the misconception:** "Moving everything freely" produces noise, not diversity.
- **Generalization budget theory:** with limited data, variations spent on one dimension teach the model that dimension — spending on target position teaches it to grasp objects at different positions; spending on camera position variations makes the model learn both grasping and viewpoint differences, requiring far more data and yielding poor results.
- **What if I really need variations:** it's not about "don't fix" during recording, but about the supplementary data iteration later — consciously expanding the boundaries to achieve the generalization we're after.

</section>

</div>
