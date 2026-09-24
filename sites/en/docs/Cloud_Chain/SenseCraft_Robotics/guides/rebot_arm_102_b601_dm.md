---
title: reBot Arm 102 + B601 DM Training Guide
description: Set up reBot Arm 102 + B601 DM with SenseCraft Robotics, connect and calibrate the arms, collect demonstrations, train a model, and validate inference.
keywords:
  - SenseCraft Robotics
  - reBot Arm 102
  - B601 DM
image: /sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/00-task-overview-dm-en.webp
slug: /sensecraft_robotics_rebot_arm_102_b601_dm
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

This tutorial uses the reBot Arm 102 (leader arm) and B601 DM (follower arm) with SenseCraft Robotics to present the complete workflow, from project creation and device setup to data collection, model training, and operation.
The example task in this guide is to pick up an object at Point A and place it at Point B. It is provided for illustration only; users can design application scenarios according to their needs, such as sorting, handling, boxing, button pressing, or plugging and unplugging.

![DM arm pick-and-place task example](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/00-task-overview-dm-en.webp)

> **Version note**
> Interface names, button locations, and training backends may change with SenseCraft Robotics versions. Serial port numbers (such as COM21, COM35, COM3, and COM6) and dataset names in this guide are examples from a video. Always use the devices detected by your current computer.

## Tutorial Overview

This tutorial is organized in the order of hardware setup and software operation to help you quickly configure the arms and train a model:

| Chapter | Stage | Key content |
| :--- | :--- | :--- |
| Chapter 1 | **Preparation** | Hardware list, computer and software requirements, scene and safety checks |
| Chapter 2 | **Connect the Arms** | Physical mounting and cable connections for the leader and follower arms |
| Chapter 3 | **Software Training** | **Core workflow**: device setup ➔ data collection ➔ model training ➔ deployment and operation |



<span id="preparation"></span>

## 1. Preparation

### 1.1 Hardware

![Hardware list](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-1-hardware-list-dm-en.webp)

> The arms must be assembled, mounted, powered, and connected to USB. If assembly is not complete, refer to [Step 1: Assemble the Arm](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/#%E7%AC%AC%E4%B8%80%E6%AD%A5%E7%BB%84%E8%A3%85%E6%9C%BA%E6%A2%B0%E8%87%82).

#### Arms

| Category | Leader: reBot Arm 102 | Follower: B601 DM |
|---|---|---|
| Arm | reBot Arm 102 ×1  🔗[Buy now](https://www.seeedstudio.com/Star-Arm-102-p-6765.html?utm_source=sensecraft_wiki&utm_medium=socil) | Assembled reBot Arm B601-DM kit (assembled gripper version with power supply) ×1   🔗[Buy now](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html?utm_source=sensecraft_wiki&utm_medium=socil) |
| Power supply | 12 V / 2 A power adapter ×1    | 24 V / 15 A power supply and power cable ×1   |
| Data cable | USB-C data cable ×1 | USB-C data cable ×1 |
| Communication and power components | — | USB-CAN driver board ×1 <br />Signal/power separation board ×1 |
| Other cables | — | 2-pin JST cable ×1<br />3-pin JST cable ×1<br />XT30 2+2 cable ×1 |
| Mounting tools | G-clamp ×2 | G-clamp ×2  |

#### Cameras

Two cameras are required: one for the top view, and one for either the side view or the gripper view.

<table>
  <thead>
    <tr>
      <th>Camera</th>
      <th>Top-view camera</th>
      <th>Side-view camera</th>
      <th>Gripper camera</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Quantity</td>
      <td>1</td>
      <td colspan="2">Choose either the <em>side-view</em> or <em>gripper</em> camera</td>
    </tr>
    <tr>
      <td>Mount</td>
      <td>Top-view mount ×1</td>
      <td>Small desktop mount ×1</td>
      <td>3D-printed mount ×1</td>
    </tr>
  </tbody>
</table>

**Camera options**: On macOS or Windows, choose any of the following combinations. We recommend connecting the cameras directly to the computer's USB ports instead of using a USB hub or dock.

| Option | Hikvision USB camera | Logitech C270 HD Webcam | Collection performance |
|:---|:---|:---|:---|
| Option1 | 1 | 1 | Most stable; supports 120 FPS collection |
| Option2 | ❌ | 2 | Stable; supports all collection frame rates |
| Option3 | 2 | ❌ | Keep the frame rate at or below 60 FPS; 120 FPS collection is not supported and compatibility issues may occur in some cases |


### 1.2 Computer and Software

- Windows or macOS computer (local training requires a compatible GPU)
- Stable network connection (for downloading, logging in, cloud training, and inference)
- [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics) installed
- A registered [SenseCraft account](https://account.seeed.cc/login), signed in within SenseCraft Robotics


For detailed instructions, refer to [Software Download and Account Setup](/sensecraft_robotics/#download-and-account).

### 1.3 Scene and Safety

- Mark two fixed positions on the table: Point A for the object's starting position and Point B for its destination.
- Prepare an object that is appropriately sized and easy to grasp, such as a red block or a soft object.
- Make sure Point A, Point B, both arms, and the object are within the camera views and are not obstructed.
- Clear the arm workspace of people, clutter, cables, and fragile objects. Adjust the leader arm so that it does not approach the follower arm or appear in the follower camera view.

![Scene and safety example](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-3-scene-and-safety-dm-en.webp)


<span id="connect-arms"></span>

## 2. Connect the Arms

> **Safety notice:**
> Disconnect the power before connecting or disconnecting JST, XT30, or other cables. Turn the power on only after confirming that all cables are connected correctly.
> B601 RS and B601 DM look similar. Make sure you distinguish between them.


### 2.1 Mount and Connect the reBot Arm 102 (Leader Arm)



#### Step 1: Mount the reBot Arm 102

Use woodworking clamps to secure the reBot Arm 102 to a flat tabletop. Gently push the base to confirm that it does not move.

#### Step 2: Connect the Cables

![Mounting and connecting the reBot Arm 102 (leader arm)](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-1-connect-leader-dm-en.webp)


The connections consist of two paths:

* **Signal path (arm -> USB-C cable -> computer)**
  1. Prepare a USB-C cable to connect the arm to the computer (**do not plug it into the computer yet; connect it when you reach serial-port binding and scan for devices**).

* **Power path (arm -> 12 V 2 A power adapter -> power strip -> power on)**
  1. Connect the **12 V 2 A power adapter** to the arm's power connector.
  2. Connect the adapter to the power strip to power on the arm.


### 2.2 Mount and Connect the B601 DM (Follower Arm)

![B601 DM cable connection](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-2-follower-wiring-overview-dm-en.webp)

#### Step 3: Mount the B601 DM

Use G-clamps to secure the B601 DM to a stable, flat tabletop. After securing it, gently rotate the arm left and right to confirm that the base does not move.

#### Step 4: Connect the Cables

Make sure the power is disconnected before starting. The connections consist of two paths:

* **Signal path (arm -> signal/power separation board -> USB-CAN driver board -> computer)**
  1. Use an XT30 2+2 cable to connect the first motor at the bottom to the signal/power separation board.
  2. Use the 2-pin JST cable to connect the signal/power separation board to the USB-CAN driver board.
  3. Use the 3-pin JST cable to connect the first motor at the bottom to the USB-CAN driver board (this is a debug cable and may be left disconnected).
  4. Prepare a USB-C data cable to connect the USB-CAN driver board to the computer (**do not plug it into the computer yet; connect it when you reach serial-port binding and scan for devices**).

* **Power path (arm -> signal/power separation board -> 24 V power adapter -> outlet -> power on)**
  1. Use an XT30 2+2 cable to connect the first motor at the bottom to the signal/power separation board.
  2. Connect the signal/power separation board to the **24 V power adapter**.
  3. Connect the power adapter to the outlet. After confirming that the arm is secured, the cables are correct, and the surrounding area is clear, turn on the power.

![Connecting the B601 DM (follower arm)](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-2-connect-follower-dm-en.webp)



<span id="project"></span>

## 3. Project

After signing in, open the **Projects** page. Create a new project for first-time use, or open an existing project. In a project, the **Project Overview** provides access to device setup, action replay, datasets, training, models, and operation.

| Operation | Steps |
|---|---|
| Create a project | Click **New Project** → enter the project name and description → click **Create and Start** |
| Open an existing project | Select a project from the project list → open the project |

![New project window](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-create-project-dm-en.webp)


### 3.1 Project Overview

**Project Overview** displays the current project status, including arm connection, device setup, dataset, training, model, and operation status.

If the page shows **Pending configuration** or **Not connected**, click **Go to Device Setup** to configure the arms.

![Project overview](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-1-device-selection-dm-en.webp)



<span id="device-setup"></span>

### 3.2 Device Setup

Device Setup is used for device selection, serial-port binding, arm calibration, teleoperation verification, and camera configuration.

#### 3.2.1 Select the Device Model

In the **Device Pairing** step, select **reBot Arm 102 + B601 DM**, then click **Next** to bind the serial ports.

![Select reBot Arm 102 + B601 DM](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-1-device-pairing-dm-en.webp)


#### 3.2.2 Bind the USB Serial Ports for the Leader and Follower Arms

1. **Initial scan**: Disconnect the USB cables from both arms, click **Rescan**, and note the serial ports currently displayed.
2. **Bind the leader arm**: Connect the reBot Arm 102 (leader arm), click **Rescan** again, and bind the newly detected serial port to the leader arm.
3. **Bind the follower arm**: Connect the B601 DM (follower arm), click **Rescan** again, and bind the newly detected serial port to the follower arm.
4. Confirm that both arms show **Connected**, then click **Next**.

![Bind the serial ports for the leader and follower arms](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-2-serial-binding-dm-en.webp)

> **Serial-port binding and troubleshooting:**
> - After each scan, bind only the newly detected serial port. Do not identify a device only by its COM number.
> - If a serial port is not shown, reconnect the USB cable and scan again. If only one serial port is shown, check the other USB cable and the device power.


#### 3.2.3 Arm Calibration Verification

1. Follow the on-screen example to place the leader and follower arms in their initial poses, and confirm that the workspace is clear.
2. Click **Start Calibration**, then follow the on-screen instructions to complete leader-arm zeroing, follower-arm zeroing, and calibration completion.
3. If the arm poses are inconsistent or calibration fails, click **Recalibrate** and do not continue to the next steps.

![Arm calibration verification](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-3-calibration-dm-en.webp)

> Do not perform teleoperation or data collection before calibration is complete.

#### 3.2.4 Teleoperation Verification

Teleoperation verification confirms that the follower arm correctly follows the leader arm. If the direction is reversed, the delay is excessive, or the motion is discontinuous, check the device roles, serial-port binding, and calibration result.

1. Click **Start Teleoperation**.
2. Move the leader arm through a small range and observe whether the follower arm moves synchronously, in the same direction, and smoothly.
3. After completing the check, click **End Teleoperation**, then select an option based on the result:
   - **Normal**: Click **Confirm Teleoperation Normal**.
   - **Abnormal**: Click **Abnormal, Return to Recalibrate**.

![Teleoperation verification](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-4-teleoperation-dm-en.webp)

> **Gravity compensation (optional)**
> The arm has some weight, so manually adjusting the follower arm may require effort. When gravity compensation is enabled, the system offsets part of the weight and makes the follower arm easier to move. After adjustment, turn gravity compensation off before performing teleoperation verification.
> Gravity compensation is for adjusting the follower arm; it is not used to control the follower arm during leader-follower operation.


#### 3.2.5 Bind the Cameras

Cameras record visual information while the arm performs a task. The following are two common camera layouts:

| Layout | Installation and purpose | Suitable scenarios | Illustration |
|:---|:---|:---|:---|
| Gripper view<br /> | <small><strong>Top-view camera</strong>: Install it above the front of the worktable to cover the work area.<br /><br /><strong>Gripper camera</strong>: Install it near the gripper to observe grasping details.</small> | <small>Fine operations that require observing contact between the gripper and the object.</small> | ![Gripper-view layout](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-eye-in-hand-dm-en.webp)<br /><small>*Note: You may design the 3D camera mount yourself.</small> |
| Side-view assistance<br /> | <small><strong>Top-view camera</strong>: Install it above the front of the worktable to cover the work area.<br /><br /><strong>Side-view camera</strong>: Install it at the front side of the worktable to observe the arm height and gripper motion.</small> | <small>Pick-and-place, handling, and placement tasks.</small> | ![Side-view assistance layout](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-eye-to-hand-dm-en.webp) |

This tutorial uses the **side-view assistance** layout. After installing and positioning the cameras:

1. Connect the cameras to the computer and click **Rescan**.
2. Select the corresponding video streams in the **Top-view camera** and **Side-view camera** sections.
3. Check both preview windows to confirm that the arms, object, and target positions are clearly visible. Click **Next** after confirming the setup.

![Bind the top-view and side-view cameras](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-camera-binding-dm-en.webp)

> To confirm that each camera matches its installation position, click **View Camera Layout**. If a preview is black or abnormal, rescan, restart the camera, or use another USB port.


<span id="action-replay"></span>

### 3.3 Action Replay

**Action Replay** records arm motions through leader-arm teaching and saves them in the action list for replay. After recording, check whether the motion is continuous and whether the movement direction and gripper opening and closing are normal.

| Function | Operation | Purpose |
|---|---|---|
| Record an action | Click **+** to create an action → use the leader arm to control the follower arm and complete the task → click **Stop Recording** → save | Record target actions such as grasping, moving, and placing |
| Replay an action | Click **Replay** | Check whether the action is complete and continuous, and confirm the movement direction and gripper opening and closing |

> Before recording an action for the first time, complete device connection and teleoperation verification in **Device Setup**, and click **Confirm Teleoperation Normal**. If replay is abnormal, delete the action and record it again.

![Action list and replay operations](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-3-action-replay-dm-en.webp)


<span id="dataset"></span>

### 3.4 Dataset

**Dataset** is used to create collection tasks and record, inspect, clean, and merge task episodes. We recommend collecting data in small batches so that device disconnections, software errors, or video stutter can be found early and the risk of losing all data because of one failure is reduced.

- Record about 10 task episodes per batch first.
- After completing 2–3 batches, keep about 20–30 valid episodes for the first training run.
- Add more data for complex tasks according to the training results.

#### 3.4.1 Configure a Data Collection Task

Open **Dataset** → **Collect Data** at the top of the page and enter the task information. If multiple datasets will be merged, the task description in each batch must be exactly the same. Before collection, also keep the A and B positions, object category, camera positions, table background, and lighting conditions as stable as possible.

| Field | Example value | Instructions |
|---|---|---|
| Dataset name | `DM Arm Pick-and-Place from A to B-01` | Use a “device + task + batch” naming scheme |
| Task description | `Move the object from the left to the right` | Clearly describe the task objective; descriptions must be exactly the same when batches are merged |
| Number of episodes | `10` | Each episode should contain one complete task |
| Episode duration | `20`–`30` seconds | Cover the complete action sequence |
| Rest duration | `5` seconds | Allow time to reset the arm and adjust the scene |

![Configure a data collection task](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-1-dataset-config-dm-en.webp)

#### 3.4.2 Record Task Episodes

Recording task episodes is the core of the training data. Each episode should completely record picking up the object at Point A, moving it to Point B, and putting it down. To help the model learn quickly, keep the task flow generally consistent. To improve generalization, add data with different positions, angles, and motion variations.

1. Place the object at Point A, confirm that the arm is in its initial pose, and click **Start Recording**.
2. Use the leader arm to control the follower arm and complete the task, then return the arm to its initial pose.
3. After completing the task, wait for the remaining time to finish, or click the arrow (or press the space bar) to end the current episode early.
4. During the rest period, return the object to Point A and confirm that the arm is ready. Start the next episode when the rest period ends.

![Record task episodes](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-2-recording-episode-dm-en.webp)

> **Important ⚠️**
>
> - Before collection, adjust and secure the cameras. **Make sure the arms, gripper, object, and Points A and B are all visible in the camera views.**
> - Key actions must not be 🚫 obstructed or outside the camera views; otherwise, the data may not be usable for training.
> - If a task fails, the object is not grasped securely, the video stutters, or a camera is obstructed, click **Retake Immediately** or press `Esc` to stop collection.
> - You can finish the current batch first, then inspect and delete abnormal episodes.
> - If there is a risk of loss of control or collision, stop 🛑 immediately.



#### 3.4.3 Inspect, Delete, and Merge Data

After collection, inspect abnormal episodes, delete invalid data, and merge multiple datasets when needed.

| Operation | How to perform it | Description |
|---|---|---|
| Inspect abnormal episodes | Select an episode and play its video or replay its action | Confirm that the task was completed and the gripper motion was normal. Note abnormal episode numbers during recording so that you can inspect them directly later |
| Delete abnormal episodes | Click **Batch Delete Episodes**, select the abnormal episodes, and confirm; then click **Generate Deleted Copy** | Change the new dataset name and confirm. The original dataset will not be overwritten |
| Merge datasets | Click **Merge**, select the datasets, and enter a new dataset name | We recommend merging datasets with the same task description, device combination, and camera configuration |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Inspect dataset](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-check-dm-en.webp)


<figcaption>Inspect dataset</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Delete abnormal episodes](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-delete-dm-en.webp)


<figcaption>Delete abnormal episodes</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Merge datasets](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-4-3-dataset-merge-dm-en.webp)


<figcaption>Merge datasets</figcaption>
</figure>

</div>


<span id="training"></span>

### 3.5 Training

Training generates an action model for the arm (that is, an action-control program formed from the demonstration data). SenseCraft Robotics reads the recorded task data, analyzes how the arm completes the objective, and generates a model that can be used for automatic operation.

Use the following table to configure the training parameters:

| Parameter | Option / value | Details |
| :--- | :--- | :--- |
| **Training hardware** | Cloud · Auto-select GPU | Uses a cloud server for training and consumes the corresponding credits. |
| | Local · Free | Uses the current computer for training and does not consume credits, but requires a compatible local GPU. |
| **Training dataset** | Select the target dataset | Select the recorded dataset prepared for this training run. |
| **Policy** | ACT | The default action-control policy currently used. |
| **Training steps** | `10000` | We recommend entering 10000 as the initial value and adjusting it according to the model's actual performance. |

> **Credit note**
> Cloud · Auto-select GPU training consumes credits; Local · Free training does not consume cloud training credits. For credit acquisition, usage, and rules, refer to [Credit Rules](/sensecraft_robotics/#credits).

**Training steps and episode recommendations:**

| Task difficulty | Task description | Recommended episodes | Recommended training steps |
|---|---|---:|---:|
| Beginner | Fixed Point A to Point B | About 20 | 10,000–15,000 steps |
| Intermediate | Pick and place at random positions | About 50 | 30,000–40,000 steps |
| Advanced | Many steps or long duration | About 100 | 80,000–100,000 steps |

> **Training duration**: Total training time depends on both the selected GPU model and the number of training steps. For example, training for 20,000 steps (2W) in the cloud on most GPUs usually takes anywhere from several minutes to several tens of minutes. Training for 100,000 steps (10W) takes approximately five times as long as training for 20,000 steps.

After confirming the settings, click **Start Training**. Once training begins, you can view the progress and historical tasks in the **Current Training Tasks** list.

![Training configuration](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-5-training-dm-en.webp)

<span id="model"></span>

### 3.6 Model

**Model** is used to view training results and select the model for subsequent operation. Before using a model, confirm that training is complete and that its task and device combination match the current project.

![Model list](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-6-model-dm-en.webp)

<span id="run"></span>

### 3.7 Operation

**Operation** loads a trained model onto the arms to verify whether it can complete the task correctly.

**Steps:**

1. **Select a model**: Select a model labeled **Supported by Current Robot Arm**.
2. **Select an inference method**: Select **Cloud Inference** or **Local Inference**, and configure the corresponding parameters.
3. **Start inference**: After confirming the settings, click **Start Inference**.

**Core differences between Cloud Inference and Local Inference:**

| Comparison | Cloud Inference | Local Inference |
| :--- | :--- | :--- |
| **Computing hardware** | Uses a high-performance cloud GPU for inference. | Uses the computer's local CPU for inference (the current platform does not support using a local GPU). |
| **Performance impact** | Computing power is strong and generally unrestricted, but the result depends heavily on **network transmission quality**. | Performance is affected by the **local CPU**. |
| **Parameter configuration** | **Action count (default: 120):** Number of action steps predicted in one inference. <br />**Block threshold (default: 0.9):** A parameter that affects motion continuity and accuracy. A higher value makes arm execution more cautious (and may cause pauses); a lower value makes motion smoother (but may cause errors).<br />**(The default settings are usually sufficient.)** | **Run count:** Total number of times (episodes) to repeat the task continuously.<br />**Time limit per run (seconds):** Maximum time for one task run; the run ends automatically when the limit is reached.<br />**(The default settings are usually sufficient.)** |
| **Data output** | Only performs inference for verification. | After the run ends, the inference content is automatically generated as a corresponding dataset. |
| **Cost and limits** | Cost is subject to platform rules; the computing power is strong and suitable for quickly starting training. | Usually does not require cloud credits, but is limited by local CPU performance. |

**Notes**

- Before starting: Confirm that the arms are connected correctly and that the workspace is safe.
- During operation: Do not disconnect or disassemble the arms, and observe whether their movements are normal.
- If the result is unsatisfactory: Return to **Dataset**, delete abnormal episodes, add valid data, and train again.

![Model operation interface](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-7-run-dm-en.webp)
