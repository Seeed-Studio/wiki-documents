---
description: Chapter 7 of the SO-ARM Physical AI Beginner's Course — use the Seeed_RoboController Steering Gear Debugging Tool to detect servos, recalibrate servo IDs, write neutral values, control single servos, and read servo status.
title: Chapter 7 - Servo Debugging with the Steering Gear Tool
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Servo
  - Debugging
  - Steering Gear
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_7
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_7/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 2 · Chapter 7 · Practice</span>
    <h2>7. Servo Debugging with the Steering Gear Tool</h2>
    <p>
      Chapter 7 of the SO-ARM Physical AI Beginner's Course — use the Seeed_RoboController
      Steering Gear Debugging Tool to detect servos, recalibrate servo IDs, write neutral
      values, control single servos, and read servo status.
    </p>
    <div className="hero-actions">
      <a href="#install-tool">Install</a>
      <a href="#check-servos">Check servos</a>
      <a href="#recalibrate-ids">Fix IDs</a>
      <a href="#neutral">Neutral value</a>
    </div>
  </div>
</section>

## 7.1 What the Tool Is For

<section id="intro" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>7.1 What the Tool Is For</h2>
  </div>

The Steering Gear Debugging Tool ([Seeed_RoboController](https://github.com/Seeed-Projects/Seeed_RoboController)) is a graphical debugging tool for LeRobot / SO-ARM robotic arms. With this tool, you can:

- Quickly detect servo status;
- Recalibrate duplicated or wrong servo IDs;
- Write neutral (middle-position) values;
- Control individual servos and read their voltage, temperature, speed, load, and current;
- Manage advanced servo register data, baud rate, and factory reset.

It runs on **Windows, Ubuntu, and Mac**, and it is your first stop whenever an arm behaves strangely — before recalibrating in LeRobot, before reassembling, and before assuming a servo is broken.

</section>

## 7.2 Installation

<section id="install-tool" className="section-card">
  <div className="section-title">
    <span>Install</span>
    <h2>7.2 Installation</h2>
  </div>

**1. Clone the repository:**

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

**2. Install dependencies.** It is recommended to install the tool inside the LeRobot conda environment from Chapter 5. If you prefer a standalone installation, create a new virtual environment to avoid polluting the system Python:

```bash
pip install -r requirements.txt
```

**3. Check the environment.** If it returns `[OK] Environment check passed`, the project is ready to run:

```bash
python setup.py
```

**4. Launch the tool:**

```bash
python -m src.gui.factory_calibration_tool
```

This starts interactive port selection. (Optional) If ports are occupied, specify them manually:

```bash
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

</section>

## 7.3 Check Whether the Servos Are Normal

<section id="check-servos" className="section-card">
  <div className="section-title">
    <span>Detect</span>
    <h2>7.3 Check Whether the Servos Are Normal</h2>
  </div>

First, select the corresponding port in the serial-port selector. If servos 1-6 are all detected successfully, the servos are recognized normally and the basic functions are working.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="All six servos detected" />
</div>

If some servos show as not detected:

1. Check whether the wiring is correct; close the page and reopen it.
2. If they are still not detected, the servo IDs may be duplicated — possibly because a servo-calibration command was accidentally run as the arm-calibration command. In that case, recalibrate the IDs of these servos (next section).

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" alt="Servo not detected" />
</div>

</section>

## 7.4 Recalibrate Servo IDs

<section id="recalibrate-ids" className="section-card">
  <div className="section-title">
    <span>Fix IDs</span>
    <h2>7.4 Recalibrate Servo IDs</h2>
  </div>

From Chapter 4: all servos share one bus, so flashing an ID affects **every** servo with that ID. Therefore, all other servos must be disconnected and reprogrammed one by one.

**Step 1 — remove the servo wire harnesses** between adjacent servos, from the gripper down to the base:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" alt="Disconnect servo 6 to 5" />
</div>

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" alt="Disconnect servo 1 from the control board" />
</div>

**Step 2 — connect one servo at a time.** Make sure only one servo is connected to the control board. For example, connect the #6 servo to the driver board as shown below — other servos are connected the same way, so you can fix IDs without disassembling the arm.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" alt="Single servo connected to the board" />
</div>

**Step 3 — rewrite the ID.** In the example below, only servo #4 is recognized, but the servo actually connected is #6 — the ID is wrong and needs to be changed back to 6.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" alt="Wrong ID detected" />
</div>

Click on servo #4 and change its ID to 6. Repeat the same operation for the other servos.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" alt="Rewrite the servo ID" />
</div>

After the servo calibration is complete, plug the wires back in one by one to finish.

</section>

## 7.5 Write the Neutral Value to the Servo

<section id="neutral" className="section-card">
  <div className="section-title">
    <span>Neutral</span>
    <h2>7.5 Write the Neutral Value to the Servo</h2>
  </div>

The neutral (middle) position is the "straight" posture all later calibration is measured from — internally it is the value 2048.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" alt="Reference neutral posture" />
</div>

1. Click **Serial Port Neutral Test** to check whether the arm's neutral position matches the reference above. If it is roughly the same, the neutral value is normal.
2. If not, move the arm to the neutral position, then click **Serial Port Neutral Calibration** — the current position is written into the servo as the neutral value.
3. Click **Serial Port Disable Motors**, and the arm will go limp — support it by hand.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" alt="Neutral test and calibration buttons" />
</div>

:::tip
This is also the fix for the LeRobot error `Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`: that message means a servo's zero offset is abnormal. Run a middle-position calibration here (or with the `servo_middle_calibration.py` script in the same repository), then redo the full-arm calibration in Chapter 10.
:::

</section>

## 7.6 Single Servo Control and Status

<section id="single-servo" className="section-card">
  <div className="section-title">
    <span>Control</span>
    <h2>7.6 Single Servo Control and Status</h2>
  </div>

By default, all servos on the page are at their neutral positions.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" alt="All servos at neutral" />
</div>

**1. Enable torque and move one servo.** Enable all torques with one click, or enable a single servo, then slide the slider to move it. Move **slowly**: the printed parts physically block certain positions, so do not slide the slider to 0 or the maximum. After disabling torque, the arm goes limp.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" alt="Torque enabled, servo moved" />
</div>

**2. Per-servo maintenance.** You can run neutral calibration for a single servo and clear its internal neutral, maximum, and minimum positions.

**3. Read the servo status panel:**

| Field | Meaning |
| :--- | :--- |
| Pos | Position |
| V | Voltage |
| T | Temperature |
| Spd | Speed |
| Load | Torque |
| Cur | Current |
| Mov | Motion status |
| Model | Model, authority |
| Status | Normal / Overcurrent / Overload |

Rising temperature with high load during long teleoperation sessions is normal on the follower; persistent `Overcurrent` or `Overload` at rest usually means a jammed joint or a wrong neutral value.

</section>

## 7.7 Advanced Tools

<section id="advanced" className="section-card">
  <div className="section-title">
    <span>Advanced</span>
    <h2>7.7 Advanced Tools</h2>
  </div>

For deeper debugging you can read and write raw register data, modify the baud rate, and restore factory settings.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" alt="Advanced tools panel" />
</div>

:::warning
Register writes and factory reset can brick a servo's configuration if done blindly. Prefer the guided functions (Sections 7.3-7.6) and only touch raw registers when a specific guide tells you to.
:::

</section>

## 7.8 Summary

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Summary</span>
    <h2>7.8 Summary</h2>
  </div>

- The Steering Gear Debugging Tool is the maintenance console for the servo bus: detect, fix IDs, set neutrals, move single servos, read status.
- Servo IDs are always rewritten one connected servo at a time.
- A correct neutral value (2048) is the foundation of all later calibration.

With the arms assembled and every servo verified, Stage 2 is complete. Stage 3 starts by explaining why robot arms need to learn at all — and then puts your SO-ARM to work collecting data and training policies.

</section>

</div>
