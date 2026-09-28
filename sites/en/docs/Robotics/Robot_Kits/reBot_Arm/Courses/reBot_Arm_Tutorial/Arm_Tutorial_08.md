---
description: 'Chapter 8 of the Seeed Physical AI Beginner''s Course — control the reBot Arm with the Python SDK: parameters, context manager connection, motion, zero point, and joint state.'
title: Chapter 8 - Controlling reBot Arm Using Python SDK
keywords:
  - reBot
  - Robotic Arm
  - Python SDK
  - reBotArm
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_8
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-09-18'
url: https://wiki.seeedstudio.com/rebot_physical_ai_course_chapter_8/
---

import '/src/css/rebot-wiki-style.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 2 · Chapter 8 · Theory &amp; Practice</span>
    <h2>8. Controlling reBot Arm Using Python SDK</h2>
    <p>
      Chapter 8 of the Seeed Physical AI Beginner's Course — control the reBot Arm with
      the Python SDK: parameters, context manager connection, motion, zero point, and joint state.
    </p>
    <div className="hero-actions">
      <a href="#parameters">Parameters</a>
      <a href="#connect">Connect</a>
      <a href="#motion">Motion</a>
    </div>
  </div>
</section>

<section className="section-card">
  <p>1. If the environment is not installed, refer to section 7.2 for the installation environment.</p>

  <p>2. The parameters of each joint controller of the Python SDK robotic arm need to be adjusted according to actual usage requirements. The current parameters can only satisfy scenarios with low precision requirements.</p>

Install required dependencies:

```bash
python3 -m pip install pyyaml motorbridge
```

Pull example code:

```bash
git clone https://github.com/hopcan/rebotArm_ctrl.git
```

- The Python examples for controlling reBot DM are in `rebotArm_ctrl/example/rebotDM`.
- The configuration file for the reBot DM robotic arm is in `rebotArm_ctrl/config`.
- The Python examples for controlling reBot RS are in `rebotArm_ctrl/example/rebotRS`.
- The configuration file for the reBot RS robotic arm is in `rebotArm_ctrl/config`.

</section>

## 8.1 Modify Parameters and Switch Modes

<section id="parameters" className="section-card">
  <div className="section-title">
    <span>Parameters</span>
    <h2>8.1 Modify Parameters and Switch Modes</h2>
  </div>

The recommended control mode for reBot DM is `POS_VEL`. Switching the robotic arm joint control mode and configuring parameters can both be achieved by modifying the corresponding parameters in `rebotDM.yaml` under `rebotArm_ctrl/config`.

For example:

```yaml
- name: Shoulder Pan
  motor_can_id: 1
  MIT:
    kp: 10.0
    kd: 1.0
  POS_VEL:
    vel_kp: 0.0125
    vel_ki: 0.004
    pos_kp: 150.0
    pos_ki: 0.5
    vlim: 5.0
  posmax: 2.6
  posmin: -2.6
  use_mode: POS_VEL
```

MIT's `kp` and `kd`, POS_VEL's `vel_kp`, `vel_ki`, `pos_kp`, `pos_ki`, and `vlim` are the parameters of the corresponding mode, which can be changed according to the control effect of the robotic arm. `use_mode` can switch the control mode of the corresponding joint, and can be changed to `MIT` or `POS_VEL`.

</section>

## 8.2 Connect/Disconnect the Robotic Arm (Using Context Manager)

<section id="connect" className="section-card">
  <div className="section-title">
    <span>Connection</span>
    <h2>8.2 Connect/Disconnect the Robotic Arm (Using Context Manager)</h2>
  </div>

Refer to `example/rebotDM/1_rebotDM_connect.py` or `example/rebotRS/1_rebotRS_connect.py`.

1. First create the bus controller.

:::warning Notes
1. Check whether the port exists.
2. Port permissions must be granted before the program runs.
:::

reBot DM uses a serial port, created as follows:

```python
channel = "/dev/ttyACM0"
ctrl = Controller.from_dm_serial(channel, 921600)
```

reBot RS uses PCAN:

```python
channel = "can0"
ctrl = Controller(channel)
```

2. Implemented through a safe context manager:

```python
with reBotArm_handle(ctrl, "rebotDM") as handle:

with reBotArm_handle(ctrl, "rebotRS") as handle:
```

Where `reBotArm_handle` also supports the `config_path` parameter. This parameter can specify the imported configuration file, and the default robotic arm configuration file will no longer be imported. You can refer to the configuration files in `config` to write your own configuration file.

```python
with reBotArm_handle(ctrl, "rebotDM", config_path="absolute path of yaml") as handle:

with reBotArm_handle(ctrl, "rebotRS", config_path="absolute path of yaml") as handle:
```

Core implementation:

1. The `__enter__` function will call the `connect` function to automatically connect to the robotic arm. If the connection fails, the corresponding log will be output.
2. The `__exit__` function will call the `disconnect` function to automatically disconnect from the robotic arm when the program exits.
3. Connecting to the robotic arm will add motors to the bus controller, check motor communication on power-up, verify whether motor CAN ID and master ID are valid, verify whether the configuration file is valid, and change the motor control mode to the target control mode.
4. Disconnecting from the robotic arm will first automatically restore the initial state, then disable.

:::warning
After using Ctrl+C to exit the program, wait a few seconds. Do not keep entering Ctrl+C; you need to wait for the robotic arm to automatically return to its home position and then disable.
:::

If you do not want to use the context manager, you can directly call the `connect` function and `disconnect` function to connect/disconnect the robotic arm.

</section>

## 8.3 Control Robotic Arm Motion

<section id="motion" className="section-card">
  <div className="section-title">
    <span>Motion</span>
    <h2>8.3 Control Robotic Arm Motion</h2>
  </div>

Refer to `example/rebotDM/3_rebotDM_move_joint.py` or `example/rebotRS/3_rebotRS_move_joint.py`.

```python
while True:
    handle.move_to_joint_positions([0, 0, 0, 0.5, 0.5, 0, -1])
    for motor_id in list(range(1, 8)):
        print(f"motor {motor_id}")
        print(f"pos: {handle.motor_state[motor_id].pos:.3f} rad")
        print(f"vel: {handle.motor_state[motor_id].vel:.3f} rad/s")
        print(f"torque: {handle.motor_state[motor_id].torq:.3f} Nm\n")
    time.sleep(0.002)
```

`handle.motor_state` is a dictionary containing the state information of all joints. The reading method is as above.

</section>

## 8.4 Set Zero Point for the Robotic Arm

<section id="zero-point" className="section-card">
  <div className="section-title">
    <span>Zero Point</span>
    <h2>8.4 Set Zero Point for the Robotic Arm</h2>
  </div>

Refer to `example/rebotDM/2_rebotDM_set_zero.py` or `example/rebotRS/2_rebotRS_set_zero.py`.

```python
with reBotArm_handle(ctrl, "rebotRS") as handle:
    handle.set_zero_position()

with reBotArm_handle(ctrl, "rebotDM") as handle:
    handle.set_zero_position()
```

Calling the `set_zero_position` function through the robotic arm control class can set the corresponding joint ID for all joints of the robotic arm.

</section>

## 8.5 Update Robotic Arm Joint State

<section id="joint-state" className="section-card">
  <div className="section-title">
    <span>Joint State</span>
    <h2>8.5 Update Robotic Arm Joint State</h2>
  </div>

Refer to `example/rebotDM/5_rebotDM_request_joints_data.py` or `example/rebotRS/5_rebotRS_request_joints_data.py`.

```python
with reBotArm_handle(ctrl, "rebotDM") as handle:
    if handle.is_connected:
        print("Controller is connected and ready.")
        print("Motor Use Modes:", handle.use_mode)
    else:
        print("Controller failed to connect.")
    handle.ctrl.disable_all()
    while True:
        print(handle.get_joints_state())
        time.sleep(0.002)


with reBotArm_handle(ctrl, "rebotRS") as handle:
    if handle.is_connected:
        print("Controller is connected and ready.")
        print("Motor Use Modes:", handle.use_mode)
    else:
        print("Controller failed to connect.")
    handle.ctrl.disable_all()
    while True:
        print(handle.get_joints_state())
        time.sleep(0.002)
```

`get_joints_state()`: Actively updates the state of each joint of the robotic arm and returns the current joint angles.

</section>

</div>
