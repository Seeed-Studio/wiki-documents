---
description: "Chapter 12 of the Seeed Embodied Intelligence Beginner's Course — robot datasets and task design: what an Episode is, what is in one data record, timestamps and synchronization, start/end conditions, consistency vs diversity, data quantity vs quality, and a worked data-creation example."
title: Chapter 12 - Robot Datasets and Task Design
keywords:
  - reBot
  - LeRobot
  - Dataset
  - Episode
  - Data Collection
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_12
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: LiuJunjie
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/rebot_embodied_ai_course_chapter_12/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 3 · Chapter 12 · Theory</span>
    <h2>12. Robot Datasets and Task Design</h2>
    <p>
      Chapter 12 of the Seeed Embodied Intelligence Beginner's Course — what an Episode is, what is
      in one data record, timestamps and synchronization, start/end conditions, consistency vs
      diversity, data quantity vs quality, and a worked data-creation example.
    </p>
    <div className="hero-actions">
      <a href="#episode">Episode</a>
      <a href="#consistency-diversity">Data design</a>
      <a href="#example">Example</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>In this chapter</strong>
    <span>12.1 What Is an Episode?</span>
    <span>12.2 What Exactly Is in One Data Record?</span>
    <span>12.3 Timestamps and Data Synchronization</span>
    <span>12.4 Task Design: Start and End Conditions</span>
    <span>12.5 Task Consistency vs. Diversity</span>
    <span>12.6 Success and Failure Criteria</span>
    <span>12.7 Data Quantity vs. Data Quality</span>
    <span>12.8 Single-Task vs. Multi-Task Datasets</span>
    <span>12.9 Data Collection Iteration</span>
    <span>12.10 Data Creation Example</span>
  </div>
</section>

<RebotCourseNav />

## 12.1 What Is an Episode?

<section id="episode" className="section-card">
  <div className="section-title">
    <span>Episode</span>
    <h2>12.1 What Is an Episode?</h2>
  </div>

Starting from this chapter, every operation you do means you've switched roles — **you're no longer the "driver," you're the "teacher."** Every action you take will be recorded and become the model's textbook. The basic unit of this textbook is the Episode.

**An Episode is one complete task demonstration.** From when the arm is at its starting pose and the task begins, until task completion, all data continuously recorded by the system constitutes one Episode.

</section>

## 12.2 What Exactly Is in One Data Record?

<section id="data-record" className="section-card">
  <div className="section-title">
    <span>Data</span>
    <h2>12.2 What Exactly Is in One Data Record?</h2>
  </div>

Recall Chapter 9 — this should look familiar. Yes, it's what we learned before: **Observation, State, Action**.

Note the source of Action: it records the target action given (via the Leader), not the position the Follower actually reached afterward. This precisely matches the definition of behavioral cloning — the model learns "under this observation and state, what the human intended to do at that moment."

</section>

## 12.3 Timestamps and Data Synchronization

<section id="timestamps" className="section-card">
  <div className="section-title">
    <span>Sync</span>
    <h2>12.3 Timestamps and Data Synchronization</h2>
  </div>

Images go over USB, joint data goes over CAN — the two data streams naturally arrive at the computer at different times. LeRobot timestamps each frame of data, thereby aligning images, states, and actions from "the same moment" into one row.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-01.png" alt="Timestamps and synchronization" />
</div>

</section>

## 12.4 Task Design: Start and End Conditions

<section id="task-design" className="section-card">
  <div className="section-title">
    <span>Task design</span>
    <h2>12.4 Task Design: Start and End Conditions</h2>
  </div>

Before collecting data, write out the task definition clearly in text. A good task definition answers two questions: **Where does it start? When is it done?**

### Start Condition: Give the Model a "Fixed Starting Point"

- **Fixed initial arm pose:** every Episode starts from the same safe pose (e.g., a standard pose near zero). If starting poses vary wildly, the model's first step is to learn "how to enter the task from any pose," adding unnecessary difficulty.

### End Condition: Draw a Clear "Finish Line" for the Episode

- **Successful end:** task goal achieved (e.g., "block fully inside the box, gripper released, arm lifted away").
- **Failure termination:** an unrecoverable situation occurs (object dropped, container knocked over, arm enters a dangerous pose) — stop recording this Episode immediately.

</section>

## 12.5 Task Consistency vs. Diversity

<section id="consistency-diversity" className="section-card">
  <div className="section-title">
    <span>Data design</span>
    <h2>12.5 Task Consistency vs. Diversity: The Core Tension in Data Design</h2>
  </div>

This is the most critical section of the chapter. High-quality demonstration data must simultaneously satisfy two seemingly contradictory requirements.

### Consistency: Teaching One "Way of Doing It"

- **Consistent operation style:** for the same task, all Episodes should use the same strategy (e.g., always approach the block from the right, grasp it, and lower it into the box from above). If half the data grasps from the left and half from the right, the model learns the "average" of two approaches — often a weird path that grasps nothing.
- **Consistent rhythm:** movement speed and pause positions should be roughly stable — if you set 20 seconds, complete it within 20 seconds. Data that varies in speed makes the model's actions inconsistent in speed.
- **Consistent workflow:** every run should go through the full "approach → grasp → transport → place → retract" workflow without skipping steps.
- **Controlled scene initial state:** objects should be placed within a designated area (the area can be large, but boundaries must be clear); remove unrelated items from the workspace.
- **Fixed camera position:** cameras must not move during collection — to the model, moving the camera 5 cm means the world has changed.

### Diversity: Enough "Variations" Seen

- **Diverse target positions:** blocks appear at various positions in the workspace (grid coverage, not random scattering).
- **Diverse initial poses:** block orientation and relative position to obstacles should vary.

</section>

## 12.6 Success and Failure Criteria

<section id="success-criteria" className="section-card">
  <div className="section-title">
    <span>Criteria</span>
    <h2>12.6 Success and Failure Criteria</h2>
  </div>

  | **Unqualified Standard (Ambiguous)**              | **Qualified Standard (Measurable)**                                                                                  |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| "As long as the object is roughly grasped."       | "The gripper is fully closed and grasps the center of the block."                                                    |
| "As long as the block is placed inside the box."  | "The block is placed near the center of the box rather than randomly near the edge."                                 |
| "Just pick up the block and put it into the box." | "The entire motion should be smooth, and the duration of each recorded episode should remain reasonably consistent." |


For failed segments during recording, the principle is simple: **re-record this Episode.** Don't hold onto failed data hoping "maybe the model will learn from it" — the model will indeed learn, including from the failures.

"Task complete" must be an **objectively determinable** state, not "looks about right." Good success criteria look like this:

</section>

## 12.7 Data Quantity vs. Data Quality

<section id="data-quantity" className="section-card">
  <div className="section-title">
    <span>Data volume</span>
    <h2>12.7 Data Quantity vs. Data Quality</h2>
  </div>

Empirical reference (for a single tabletop task in a clean environment such as a data collection box; if no data collection box, increase the dataset size):

| Data Amount | Expected Effect |
| :--- | :--- |
| **50 Episodes** | Pipeline works; model starts working in the data-covered area (starting level for introductory tasks) |
| **50–100 Episodes** | Success rate reaches a usable range; the sweet spot for most single-task experiments |
| **100+ Episodes** | Diminishing returns, unless the task is complex or success rate requirements are very high |

For multi-task, increase data proportionally to complexity. Of course, data can be supplemented after training — when you find the model's performance isn't great, you can add more data.

But put this sentence before the numbers:

- **50 high-quality Episodes are better than 200 sloppy ones.**
- **If there's a problem with data collection, don't hesitate — re-record this Episode immediately.**
- **If you want strong generalization, you'll need hundreds or thousands of Episodes.**

</section>

## 12.8 Single-Task vs. Multi-Task Datasets

<section id="single-multi-task" className="section-card">
  <div className="section-title">
    <span>Datasets</span>
    <h2>12.8 Single-Task vs. Multi-Task Datasets</h2>
  </div>

- **Single-task dataset:** one dataset contains only one task (e.g., "block into box"). The model has a single goal, data requirements are small, and success rate is easier to achieve. Your first model must start with a single task.
- **Multi-task dataset:** one dataset contains multiple tasks (grasp block, open drawer, put block in drawer); each Episode is labeled with `task_index` to indicate which task it belongs to. Data utilization is high and it's the direction toward general policies, but tasks compete for model capacity, requiring more data per task to learn well.

</section>

## 12.9 Data Collection Iteration

<section id="iteration" className="section-card">
  <div className="section-title">
    <span>Iteration</span>
    <h2>12.9 Data Collection Iteration</h2>
  </div>

Collect in batches with iterative validation: collect 50 → train → evaluate on real robot → collect more for failure scenarios → retrain. If the model's overall direction is right but precision is poor, adding data helps; if model behavior is completely wrong, there's a problem with task or data design, and no amount of additional data will help.

</section>

## 12.10 Data Creation Example

<section id="example" className="section-card">
  <div className="section-title">
    <span>Example</span>
    <h2>12.10 Data Creation Example</h2>
  </div>

### Scene Design

1. Place test tubes into a test tube rack. Note: secure the rack bottom with double-sided tape to prevent it from moving; keep cameras and arm in fixed positions, and keep lighting unchanged.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-02.png" alt="Scene design" />
</div>

2. Place test tubes according to the points shown in the figure; 1→2→3→4→5 is one round. Collect for 10 rounds.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-03.png" alt="Test tube placement points" />
</div>

The most headache-inducing problem for beginners recording data is "how to place objects to practice thoroughly" — random placement either clusters everything in a small area (the model only recognizes that spot and fails at other positions) or scatters them irregularly (some areas are over-practiced, others never touched). It's like only practicing problems you already know during review, then failing when the exam changes the format; or like only showing a robot one flavor of snack, so it has no idea where to start at a buffet. Here's a simple and standardized method:

1. **Mark points:** use a pencil to mark **5 points** in the data collection area (collection box / desk mat), arranged in a **cross shape** — 1 in the center, one each at top, bottom, left, and right.
2. **Set spacing:** adjacent points should be separated by **5–10 cm**, ensuring all five points are within the arm's workspace and clearly visible in both camera feeds.
3. **Allocate:** collect **10 Episodes at each point**; 5 points × 10 = **50 Episodes**, which meets the target. Also note: don't collect 10 Episodes at point 1, then 10 at point 2, etc.; instead, collect 1 Episode at each point (5 points = 1 round), and do 10 rounds this way.

### Grasping and Placement Design

1. Initial position

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-04.jpg" alt="Initial position" />
</div>

2. Grasp the object

- Move the arm directly above the test tube (always move to the tube's center at the same height above it).

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-05.jpg" alt="Move above the test tube" />
</div>

- Open the gripper (why start at a fixed distance? To avoid bumping the tube while opening the gripper and shifting its position).

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-06.jpg" alt="Open the gripper" />
</div>

- Grasp with the same force and speed each time.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-07.jpg" alt="Grasp the object" />
</div>

3. Place the object

- Move directly above the center of the test tube rack.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-08.jpg" alt="Move above the rack" />
</div>

- Open the gripper at constant speed and lift the arm; you should see the tube settle smoothly into the rack.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-09.jpg" alt="Place the object" />
</div>

- After placing the tube, return the arm to its home position.

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-12/ch12-10.jpg" alt="Return to home" />
</div>

That's it — one perfect Episode is done. Now just repeat this 50 times.

### Design Questions

Why can't I move the test tube rack, cameras, tube positions, or change lighting?

- **Dispelling the misconception:** "Moving everything freely" produces noise, not diversity.
- **Generalization budget theory:** with limited data, variations spent on one dimension teach the model that dimension — spending on target position teaches it to grasp tubes at different positions; spending on camera position variations makes the model learn both grasping and viewpoint differences, requiring far more data and yielding poor results.
- **What if I really need variations:** it's not about "don't fix" during recording, but about the supplementary data iteration later — consciously expanding the boundaries to achieve the generalization we're after.

</section>

</div>
