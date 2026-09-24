---
title: reBot Arm 102 + B601 RS Training Guide
description: Set up reBot Arm 102 + B601 RS with SenseCraft Robotics, connect and calibrate the arms, collect demonstrations, train a model, and validate inference.
keywords:
  - SenseCraft Robotics
  - reBot Arm 102
  - B601 RS
image: /sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/00-task-overview-rs-en.webp
slug: /sensecraft_robotics_rebot_arm_102_b601_rs
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

This tutorial uses the reBot Arm 102 (leader arm) and B601 RS (follower arm) with SenseCraft Robotics to present the complete workflow, from project creation and device setup to data collection, model training, and deployment.
The example task in this guide is to pick up an object at Point A and place it at Point B. It is provided for illustration only; users can design application scenarios according to their needs, such as sorting, handling, boxing, button pressing, or plugging and unplugging.

![RS arm pick-and-place task example](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/00-task-overview-rs-en.webp)


> **Version note**
> Interface names, button locations, and training backends may change with SenseCraft Robotics versions. Serial port numbers (such as COM21, COM35, COM3, and COM6) and dataset names in this guide are examples from a video. Always use the devices detected by your current computer.

## Tutorial Overview

This tutorial is organized in the order of hardware setup and software operation to help you quickly configure the arms and train a model:

| Chapter | Stage | Key content |
| :--- | :--- | :--- |
| Chapter 1 | **Preparation** | Hardware list, computer and software requirements, scene and safety checks |
| Chapter 2 | **Connect the Arms** | Physical mounting and cable connections for the leader and follower arms |
| Chapter 3 | **Software Training** | **Core workflow**: device setup ➔ data collection ➔ model training ➔ deployment and operation |



---

<span id="preparation"></span>

## 1. Preparation

### 1.1 Hardware
![Hardware list](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/01-1-hardware-list-rs-en.webp)

> The arms must be assembled, mounted, powered, and connected to USB. If assembly is not complete, refer to [Step 1: Assemble the Arm](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/).

#### Arms

| Category | Leader: reBot Arm 102 | Follower: B601 RS |
|---|---|---|
| Arm | reBot Arm 102 ×1    🔗[Buy now](https://www.seeedstudio.com/Star-Arm-102-p-6765.html?utm_source=sensecraft_wiki&utm_medium=socil) | Assembled reBot Arm B601-RS ×1  🔗[Buy now](https://www.seeedstudio.com/reBot-Arm-B601-RS-Assembled-Kit-with-Gripper-p-6865.html?utm_source=sensecraft_wiki&utm_medium=socil) |
| Power supply | 12 V / 2 A power adapter ×1 | 48 V / 12.5 A power supply ×1 |
| Data cable | USB-C data cable ×1 | USB extension cable ×1 |
| Communication and power components | — | USB-CAN driver board ×1 <br />Signal/power separation board ×1  |
| Other cables | — | 2-pin JST cable ×1<br />3-pin JST cable ×1<br />XT30 2+2 cable ×1 |
| Mounting tools | G-clamp ×2   | G-clamp ×2  |

> The arms must be assembled, mounted, powered, and connected to USB. If assembly is not complete, refer to [Step 1: Assemble the Arm](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/).

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
| Option 1 | 1 | 1 | Most stable; supports 120 FPS collection |
| Option 2 | ❌ | 2 | Stable; supports all collection frame rates |
| Option 3 | 2 | ❌ | Keep the frame rate at or below 60 FPS; 120 FPS collection is not supported and compatibility issues may occur in some cases |

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
> **Note:** This image uses the B601 DM arm as an example. The setup and operation are the same for the B601 RS.
---
<span id="connect-arms"></span>

## 2. Connect the Arms

> **Safety notice:**
> Disconnect the power before connecting or disconnecting JST, XT30, or other cables. Turn the power on only after confirming that all cables are connected correctly.
> B601 RS and B601 DM look similar. Make sure you distinguish between them.


### 2.1 Mount and Connect the reBot Arm 102 (Leader Arm)

![Mounting and connecting the reBot Arm 102 (leader arm)](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-1-connect-leader-dm-en.webp)

#### Step 1: Mount the reBot Arm 102
Use woodworking clamps to secure the reBot Arm 102 to a flat tabletop. Gently push the base to confirm that it does not move.

#### Step 2: Connect the Cables
The connections consist of two paths:

* **Signal path (arm -> USB-C cable -> computer)**
  1. Prepare a USB-C cable to connect the arm to the computer (**do not plug it into the computer yet; connect it when you reach serial-port binding and scan for devices**).

* **Power path (arm -> 12 V 2 A power supply -> power strip)**
  1. Connect the **12 V 2 A power adapter** to the arm's power connector.
  2. Connect the adapter to the power strip to power on the arm.



---

### 2.2 Mount and Connect the B601 RS (Follower Arm)
![B601 RS cable connection](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/02-2-follower-wiring-overview-rs-en.webp)

#### Step 4: Mount the B601 RS
Use G-clamps to secure the B601 RS to a flat tabletop. Gently rotate the arm left and right to confirm that the base does not move.

#### Step 5: Connect the Cables
Make sure the power is disconnected before starting. The connections consist of two paths:

* **Signal path (arm -> signal separation board -> USB-CAN -> computer)**
  1. Use an XT30 2+2 cable to connect the arm base to the signal separation module.
  2. Cut the 2-pin cable. Connect one end to the signal separation module; connect the red wire on the other end to H on the USB-CAN and the black wire to L.
  3. Connect one end of the USB-CAN to the computer through the USB extension cable (**do not plug it into the computer yet; connect it when serial-port binding is ready and scan for devices**).

* **Power path (arm -> signal separation board -> 48 V 12.5 A power supply -> outlet)**
  1. Use an XT30 2+2 cable to connect the arm base to the signal separation module.
  2. Use the power XT30 cable to connect the signal separation module to the 48 V 12.5 A power supply.
  3. Connect the power supply to the outlet. After confirming that the arm is secured, the cables are correct, and the surrounding area is clear, turn on the power.

![Connecting power to the B601 RS](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/02-2-connect-follower-rs-en.webp)


---

<span id="project"></span>

## 3. Project

After signing in, open the **Projects** page. Create a new project for first-time use, or open an existing project. In a project, the **Project Overview** provides access to device setup, action replay, datasets, training, models, and operation.

| Operation | Steps |
|---|---|
| Create a project | Click **New Project** → enter the project name and description → click **Create and Start** |
| Open an existing project | Select a project from the project list → open the project |

![New project window](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-create-project-rs-en.webp)


### 3.1 Project Overview

**Project Overview** displays the current project status, including arm connection, device setup, dataset, training, model, and operation status.

If the page shows **Pending configuration** or **Not connected**, click **Go to Device Setup** to configure the arms.

![Project overview](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-1-device-selection-rs-en.webp)



<span id="device-setup"></span>

### 3.2 Device Setup

Device Setup is used for device selection, serial-port binding, arm calibration, teleoperation verification, and camera configuration.

#### 3.2.1 Select the Device Model

In the **Device Pairing** step, select **reBot Arm 102 + B601 RS**, then click **Next** to bind the serial ports.

![Select reBot Arm 102 + B601 RS](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-1-device-pairing-rs-en.webp)


#### 3.2.2 Bind the USB Serial Ports for the Leader and Follower Arms



1. **Initial scan**: Disconnect the USB cables from both arms, click **Rescan**, and record the serial ports currently displayed.
2. **Bind the leader arm**: Connect the reBot Arm 102, click **Rescan** again, and bind the newly appearing serial port to the leader arm.
3. **Bind the follower arm**: Connect the B601 RS, click **Rescan** again, and bind *PCAN channel (can0)* to the follower arm.
4. Confirm that both arms show **Connected**, then click **Next**.

![Bind the serial ports for the leader and follower arms](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-2-serial-binding-rs-en.webp)

> **Serial-port binding and troubleshooting:**
> - After each scan, bind only the newly appearing serial port. Do not identify devices solely by their COM numbers.
> - If a serial port is not shown, reconnect the USB cable and scan again. If only one serial port is shown, check the other USB cable and the device power.


#### 3.2.3 Arm Calibration Verification

1. Follow the on-screen example to move the leader and follower arms to the initial posture, and make sure the workspace is free of obstacles.
2. Click **Start Calibration** and follow the on-screen instructions to complete the leader zero position, follower zero position, and calibration completion steps in sequence.
3. If the arm postures do not match or calibration fails, click **Recalibrate** and do not continue.

![Arm calibration verification](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-3-calibration-dm-en.webp)
*Note: The illustration uses a DM arm as an example. The procedure for the RS arm is exactly the same.*

> Do not perform teleoperation or data collection before calibration is complete.

#### 3.2.4 Teleoperation Verification

Teleoperation verification confirms that the follower arm correctly follows the leader arm. If the direction is reversed, the delay is excessive, or the motion is discontinuous, check the device roles, serial-port bindings, and calibration result.

1. Click **Start Teleoperation**.
2. Move the leader arm slightly and observe whether the follower arm moves synchronously, follows the same direction, and moves smoothly.
3. After checking, click **End Teleoperation** and select an option based on the result:
   - **Normal**: click **Confirm Teleoperation Normal**;
   - **Abnormal**: click **Abnormal, Return to Recalibrate**.

![Teleoperation verification](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-4-teleoperation-dm-en.webp)
*Note: The illustration uses a DM arm as an example. The procedure for the RS arm is exactly the same.*

> **Gravity compensation (optional)**
> The arm has some weight, so manually adjusting the follower may require effort. When gravity compensation is enabled, the system offsets part of the weight, making the follower easier to move. Turn gravity compensation off after adjustment and before teleoperation verification.
> Gravity compensation is for adjusting the follower arm; it does not control the follower arm to follow the leader.

#### 3.2.5 Bind the Cameras

Cameras record visual information while the arm performs a task. Depending on the camera mounting position, the following two layouts are commonly used:
| Layout | Installation and purpose | Suitable scenarios | Illustration |
|:---|:---|:---|:---|
| Gripper view<br /> | <small><strong>Top-view camera</strong>: mounted above the front of the workbench to cover the work area.<br /><br /><strong>Gripper camera</strong>: mounted near the gripper to observe grasping details.</small> | <small>Fine operations that require observing contact between the gripper and the object.</small> | ![Gripper-view layout](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-eye-in-hand-rs-en.webp)<br /><small>*Note: You may design your own 3D camera mount.</small> |
| Side-view assistance<br /> | <small><strong>Top-view camera</strong>: mounted above the front of the workbench to cover the work area.<br /><br /><strong>Side-view camera</strong>: mounted at the front side of the workbench to observe arm height and gripper motion.</small> | <small>Tasks such as grasping, handling, and placing.</small> | ![Side-view assistance layout](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-eye-to-hand-rs-en.webp) |

This tutorial uses the **side-view assistance layout**. After installing and positioning the cameras:

1. Connect the cameras to the computer and click **Rescan**.
2. Select the corresponding video streams in the **Front Camera** and **Side Camera** areas.
3. Check both preview windows to confirm that the arms, object, and target position are clearly visible. Click **Next** after confirming.

![Bind the front and side cameras](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-5-camera-binding-dm-en.webp)

> To check whether the cameras correspond to their mounting positions, click **View Camera Layout**. If the preview is black or abnormal, rescan, restart the cameras, or change the USB ports.


<span id="action-replay"></span>

### 3.3 Action Replay

**Action Replay** records arm actions through leader-arm teaching and saves them in the action list for replay. After recording, check whether the action is continuous and whether the movement direction and gripper opening and closing are correct.

| Function | Operation | Purpose |
|---|---|---|
| Record an action | Click **+** to create an action → use the leader arm to control the follower through the task <br />Click **Stop Recording** → save | Record target actions such as grasping, moving, and placing |
| Replay an action | Click **Replay** | Check that the action is complete and continuous, and confirm the movement direction and gripper opening and closing |
> Before recording an action for the first time, complete device connection and teleoperation verification in **Device Setup**, and click **Confirm Teleoperation Normal**. If replay is abnormal, delete the action and record it again.

![Action list and replay operation](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-3-action-replay-rs-en.webp)


<span id="dataset"></span>

### 3.4 Dataset

**Dataset** is used to create collection tasks and to record, inspect, clean, and merge task episodes. We recommend collecting data in small batches to detect disconnections, software problems, or video stuttering early and reduce the risk of losing all data because of a single failure.

- Record about 10 task episodes per batch;
- After completing 2–3 batches, keep about 20–30 valid episodes for the first training run;
- Add more data for complex tasks according to the training results.

#### 3.4.1 Configure a Data Collection Task

Go to **Dataset** → **Collect Data** and enter the task information. If multiple datasets will be merged, the task descriptions for all batches must be exactly the same. Before collection, keep the A and B positions, object category, camera positions, tabletop background, and lighting conditions as consistent as possible.

| Field | Example value | Instructions |
|---|---|---|
| Dataset name | `RS arm pick object from A to B-01` | Use the format “device + task + batch” |
| Task description | `Move the object from the left to the right` | State the task goal clearly; descriptions must be exactly the same when batches are merged |
| Number of episodes | `10` | Each episode should contain one complete task |
| Duration per episode | `20`–`30` seconds | Cover the complete action sequence |
| Rest duration | `5` seconds | Allow the arm to reset and the scene to be adjusted |

![Configure a data collection task](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-1-dataset-config-rs-en.webp)

#### 3.4.2 Record Task Episodes

Recording task episodes is the core of the training data. Each episode should fully record the process of grasping the object at Point A, moving it to Point B, and releasing it. To help the model learn quickly, keep the task procedure generally consistent. To improve generalization, add data with different positions, angles, and motion variations.

1. Place the object at Point A, confirm that the arm is in its initial posture, and click **Start Recording**.
2. Use the leader arm to control the follower through the task, then return the arm to its initial posture.
3. After the task is complete, wait for the remaining time to end or click the arrow (or press Space) to end the current episode early.
4. During the rest period, return the object to Point A and make sure the arm is ready. Start the next episode when the rest period ends.

![Record task episodes](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-2-recording-episode-rs-en.webp)

> **Important reminder ⚠️**
>
> - Before collection, adjust and secure the cameras. **Make sure the arms, gripper, object, and Points A and B are all visible.**
> - Key actions must not be 🚫 obstructed or outside the camera view, or the data may not be usable for training.
> - If a task fails, the object is not securely grasped, the video stutters, or a camera is obstructed, click **Record Again** or press `Esc` to stop collection.
> - You can complete the current batch first, then inspect and delete abnormal episodes.
> - If the arm behaves unexpectedly or there is a collision risk, stop 🛑 immediately.

#### 3.4.3 Inspect, Delete, and Merge Data

After collection, inspect abnormal episodes, delete invalid data, and merge multiple datasets when needed.

| Operation | Method | Description |
|---|---|---|
| Inspect abnormal episodes | Select an episode and play the video or replay the action | Confirm that the task is complete and the gripper action is normal. You can note abnormal episode numbers during recording and inspect them directly later |
| Delete abnormal episodes | Click **Batch Delete Episodes**, select the abnormal episodes, and confirm; then click **Generate Deleted Copy** | Enter a new dataset name and confirm. The original dataset will not be overwritten |
| Merge datasets | Click **Merge**, select the datasets, and enter a new dataset name | Merge datasets with matching task descriptions, device combinations, and camera configurations |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Inspect the dataset](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-check-rs-en.webp)


<figcaption>Inspect the dataset</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Delete abnormal episodes](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-delete-rs-en.webp)


<figcaption>Delete abnormal episodes</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![Merge datasets](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-merge-rs-en.webp)


<figcaption>Merge datasets</figcaption>
</figure>

</div>


<span id="training"></span>

### 3.5 Training

Training generates an action model for the arm (that is, an action-control program created from the teaching data). SenseCraft Robotics reads the recorded task data, analyzes how the arm performs the target action, and generates a model that can be used for autonomous operation.

Use the following table to configure the training parameters:

| Parameter | Option / value | Details |
| :--- | :--- | :--- |
| **Training hardware** | Cloud · automatically select GPU | Uses a cloud server for training and consumes the corresponding credits. |
| | Local · free | Uses the current computer for training. No credits are consumed, but a compatible local GPU is required. |
| **Training dataset** | Select the target dataset | Select the dataset you recorded and prepared for this training run. |
| **Policy** | ACT | The currently supported default action-control policy. |
| **Training steps** | `10000` | 10,000 is recommended as the initial value. Adjust it later according to the model's actual performance. |

> **Credits notice**
> Cloud training with **Cloud · automatically select GPU** consumes credits. **Local · free** training does not consume cloud-training credits. Refer to [Credit Rules](/sensecraft_robotics/#credits) for information about obtaining and using credits.

**Recommended training steps and episode counts:**

| Task difficulty | Task description | Recommended episodes | Recommended training steps |
|---|---|---:|---:|
| Beginner | Fixed Point A to Point B | About 20 | 10,000–15,000 steps |
| Intermediate | Grasp and place at random positions | About 50 | 30,000–40,000 steps |
| Advanced | Multiple steps or long duration | About 100 | 80,000–100,000 steps |

> **Training duration**: Total training time depends on both the selected **GPU model** and the **number of training steps**. For example, training for 20,000 steps (20K) in the cloud typically takes anywhere from several minutes to dozens of minutes on most GPUs. Training for 100,000 steps (100K) takes approximately five times as long as training for 20K steps.

After confirming the settings, click **Start Training**. Once training starts, view the progress and training history in the **Current Training Tasks** list.

![Training configuration](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-5-training-rs-en.webp)

<span id="model"></span>

### 3.6 Model

**Model** is used to view training results and select a model for subsequent operation. Before use, confirm that training is complete and that the task and device combination match the current project.

![Model list](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-6-model-rs-en.webp)

<span id="run"></span>

### 3.7 Operation

**Operation** loads a trained model onto the arms to verify whether it can complete the task correctly.

**Steps:**
1. **Select a model**: Select a model labeled **Supports current arm**.
2. **Select an inference method**: Select **Cloud Inference** or **Local Inference**, then configure the corresponding parameters.
3. **Start inference**: After confirming the settings, click **Start Cloud/Local Inference**.

**Key differences between cloud inference and local inference:**
| Comparison | Cloud inference | Local inference |
| :--- | :--- | :--- |
| **Computing hardware** | Uses a high-performance cloud GPU for inference. | Uses the computer's local CPU (the current platform does not support using a local GPU). |
| **Performance impact** | Computing power is generally not a limitation, but results depend heavily on **network transmission quality**. | Results depend on the **local CPU's computing power**. |
| **Parameters** | **Action chunks (default 120):** number of action steps predicted in one inference. <br />**Chunk threshold (default 0.9):** affects motion smoothness and accuracy. A higher value makes the arm more cautious and may cause pauses; a lower value makes motion smoother but may increase errors.<br />**(Defaults are usually recommended.)** | **Run count:** total number of times (episodes) to repeat the task. <br />**Time limit per run (seconds):** maximum duration of one task run; the run ends automatically when it times out.<br />**(Defaults are usually recommended.)** |
| **Data output** | Only performs inference verification. | Automatically generates a corresponding dataset from the inference runs after operation ends. |
| **Cost and limitations** | Subject to platform pricing; the stronger computing power is suitable for getting started quickly. | Usually does not consume cloud credits, but is limited by local CPU performance. |

**Notes**
- Before starting: Confirm that the arms are connected correctly and that the workspace is safe.
- During operation: Do not disconnect or disassemble the arms, and observe whether their movements are normal.
- If the result is unsatisfactory: Return to **Dataset**, delete abnormal episodes, add valid data, and train again.

![Model operation interface](/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-7-run-rs-en.webp)
