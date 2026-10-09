---
description: "Chapter 39 of the Seeed Physical AI Beginner's Course — Real-to-Sim synchronization: mapping the real arm's joint states into MuJoCo in real time, DM and RS unit conversion, communication frequencies, UDP versus ROS2, state refresh and latency, gripper state synchronization, the safety design of the sync program, and two demo workflows."
title: Chapter 39 - Synchronizing the Real and Simulated Arms
keywords:
  - reBot
  - Robotic Arm
  - Real-to-Sim
  - Digital Twin
  - MuJoCo
  - ROS2
  - Latency
  - Gravity Compensation
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_39
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/rebot_physical_ai_course_chapter_39/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 8 · Chapter 39 · Practice</span>
    <h2>39. Synchronizing the Real and Simulated Arms</h2>
    <p>
      Chapter 39 of the Seeed Physical AI Beginner's Course — Real-to-Sim synchronization: mapping the real arm's joint states into MuJoCo in real time, DM and RS unit conversion, communication frequencies, UDP versus ROS2, state refresh and latency, gripper state synchronization, the safety design of the sync program, and two demo workflows.
    </p>
    <div className="hero-actions">
      <a href="#overview">Chapter overview</a>
      <a href="#units">Units and frequencies</a>
      <a href="#transport">UDP, Socket or ROS2</a>
      <a href="#safety">Safety design</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`重力补偿.mp4`). The file(s) are in 图片和附件/ but recordings are not published through the course CDN path - upload them and link them here once they are available. */}
Using the actual source code of the reBotArm-RS project as an example, this chapter explains how to synchronize the joint states of the real arm to the MuJoCo simulation environment in real time. All code references point to the real files in this repository and can be read side by side.

<a id="overview"></a>

## 39.1 What is Real-to-Sim

Real-to-Sim means transmitting the joint angles, velocities, torques, and other states of the real physical arm to the simulation environment in real time, so that the virtual arm reproduces the real arm's motion synchronously. It is the opposite direction of Sim-to-Real: Sim-to-Real trains policies in simulation and then deploys them to the real robot, while Real-to-Sim maps the real-robot state into the virtual model.

Typical uses of Real-to-Sim:

1. Digital twin: observe the real arm's pose in real time on a web page without looking at the physical device.
2. Recording and playback: record the real arm's motion as trajectory data and replay it repeatedly in simulation for debugging.
3. Safety monitoring: the simulation environment can overlay capabilities the real arm lacks, such as collision detection and workspace visualization.
4. Teaching reproduction: manually drag the real arm (gravity compensation mode) while the simulation model follows synchronously, used to collect teaching data.

In this project, the core chain of Real-to-Sim is:

```text
Real RobStride motors → SocketCAN can0 → MotorBridge SDK state cache
→ HardwareManager._get_arm_state() → ROS JointState topic (60 Hz)
→ MuJoCo Sync node subscribes → MuJoCo qpos update → virtual arm moves
```

Key source files:

- Hardware state reading and caching: [hardware_manager.py](ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarmcontroller/rebotarmcontroller/hardware_manager.py)
- ROS joint state publishing: [ros_publishers.py](ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarmcontroller/rebotarmcontroller/ros_publishers.py)
- MuJoCo sync node: [mujoco_sync.py](ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_mujoco_rs/rebotarm_mujoco_rs/mujoco_sync.py)
- Simulation-side fake driver: [fake_rs_driver.py](ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarmcontroller/rebotarmcontroller/fake_rs_driver.py)

<a id="units"></a>

## 39.2 DM and RS Joint Unit Conversion

DM (Damiao motors) and RS (RobStride motors) both use radians for angle units, but the gripper units differ significantly—

this is an error-prone link in synchronization.

### Arm joints

The six arm joints of both DM and RS use radians, and the MuJoCo model also uses radians (`<compiler angle="radian"/>`),

so the arm joints need no unit conversion.

### Gripper unit differences

The gripper involves four different quantities with different units:

|Quantity|Range|Unit|Use|
|---|---|---|---|
|RS gripper motor angle|0-5|rad|Real-robot SDK commands and feedback|
|Web/task gripper opening width|0-0.0715|m|User command semantics|
|ROS single-finger state|0-0.045|m|Visual displacement after mapping by the state publisher|
|MuJoCo gripper displacement|0-0.05|m|Simulation joint7 slide stroke|

## 39.3 Communication Frequencies

There are multiple links with different frequencies in the Real-to-Sim chain; understanding their relationships is the basis for troubleshooting latency and lag.

|Link|Frequency|Description|
|---|---|---|
|RS real-robot control loop|125 Hz|The MIT commands finally sent to the motors|
|Sync hardware feedback polling|20 Hz|Query RobStride states and refresh the cache|
|ROS joint state publishing|60 Hz|Publish the JointState topic from the cache|
|MuJoCo simulation sync|250 Hz|Simulation step frequency|
|Browser receiving MuJoCo states|Up to 25 Hz|rosbridge subscription throttled to 40 ms|
|Browser rendering|About 60 Hz|requestAnimationFrame|

Key points to understand:

- The web page sends commands at up to 60 Hz, which does not mean the motors are only controlled at 60 Hz. After the RS controller receives a new target, it keeps generating and sending MIT commands with its own 125 Hz loop.
- Hardware feedback refreshes the cache at 20 Hz, and ROS publishes from the cache at 60 Hz. The real-time MIT loop does not do synchronous CAN parameter queries.
- MuJoCo steps at 250 Hz, but its input comes from the 60 Hz ROS topic, so MuJoCo keeps the last target between adjacent inputs.

<a id="transport"></a>

## 39.4 UDP, Socket, or ROS2 Communication

This project chooses ROS2 topics as the communication layer for Real-to-Sim, rather than UDP or raw Sockets. Understanding the reason for this choice helps make correct architecture decisions in other scenarios.

### Why ROS2

1. Topic abstraction: `sensor_msgs/JointState` is a standard message type; publishers and subscribers do not need to agree on the data format.
2. QoS policies: `qos_profile_sensor_data` provides BEST_EFFORT reliability and a small depth, suitable for high-frequency sensor data.
3. Many-to-many communication: one joint-state topic can be subscribed by MuJoCo sync, the web page, logging, and multiple other nodes at once.
4. Ecosystem integration: rosbridge can bridge ROS topics directly to WebSocket, so the web page needs no extra communication layer.

### Topic topology

```text
/rebotarm/joint_states          ← published by the real-robot controller (60 Hz)
    ↓
MuJoCo Sync node subscribes
    ↓
/rebotarm/mujoco/joint_states   ← published by the MuJoCo sync node (250 Hz)
    ↓
rosbridge WebSocket → browser
```

The MuJoCo sync node's subscription and publication are defined in [mujoco_sync.py](/home/robot/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_mujoco_rs/rebotarm_mujoco_rs/mujoco_sync.py):

```python
self.subscription = self.create_subscription(
    JointState, input_topic, self._joint_state_callback, qos_profile_sensor_data,
)
self.publisher = self.create_publisher(
    JointState, output_topic, qos_profile_sensor_data,
)
```

### Namespace isolation

The real robot and the simulation use different namespaces to avoid topic conflicts:

|Environment|Default namespace|Launch script|
|---|---|---|
|Real robot|`/rebotarm`|`scripts/start_rs_hardware.sh`|
|Fake Driver + MuJoCo|`/rebotarm_rs`|`scripts/start_rs_sim.sh`|
|MuJoCo following the real robot|`/rebotarm` (following)|`scripts/start_rs_mujoco_follow.sh`|

In the Real-to-Sim scenario, the MuJoCo sync node subscribes to the real robot's `/rebotarm/joint_states`, and its own

namespace is also set to `rebotarm`, but it only subscribes and never sends motor commands, so it does not conflict with the real-robot controller.

### DDS discovery range

[rs_env.sh](/home/robot/ReBot_Arm_DigitalTwin_RS/scripts/rs_env.sh) restricts the DDS discovery range to the local host, avoiding nodes losing each other after Wi-Fi roaming:

```bash
export ROS_AUTOMATIC_DISCOVERY_RANGE="${REBOTARM_ROS_DISCOVERY_RANGE:-LOCALHOST}"
```

### Applicable scenarios of UDP vs ROS2

|Feature|ROS2 topics|UDP|
|---|---|---|
|Latency|Millisecond-level, with DDS middleware overhead|Lowest, microsecond-level|
|Reliability|Configurable BEST_EFFORT / RELIABLE|Must implement yourself|
|Multiple subscribers|Natively supported|Must implement broadcasting yourself|
|Debugging tools|ros2 topic echo / hz|Must implement yourself|
|Applicable scenarios|Multi-node collaboration, needs the ecosystem|Point-to-point ultra-low latency|

This project's latency requirements (60 Hz states, human-eye-acceptable) are far from needing UDP; ROS2 topics are the most natural choice.

## 39.5 State Refresh and Latency

### Separating the async cache from the feedback frequency

[hardware_manager.py](/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarmcontroller/rebotarmcontroller/hardware_manager.py) is designed around separating the hardware feedback polling frequency from the

ROS publish frequency:

```python
# JointStatePublisher in ros_publishers.py
period = 1.0 / max(float(rate_hz), 1.0)           # publish at 60 Hz
self._feedback_poll_period = 1.0 / max(float(feedback_poll_rate_hz), 1.0)  # feedback at 20 Hz

def publish(self) -> None:
    now = time.monotonic()
    request_feedback = now - self._last_feedback_poll >= self._feedback_poll_period
    if request_feedback:
        self._last_feedback_poll = now
    pos, vel, effort = self._hardware.get_joint_state(request_feedback=request_feedback)
```
Among the 60 Hz publish frames, one third (20 Hz) triggers a synchronous CAN read, and the remaining frames return directly from the cache. This
both keeps the ROS topic refresh rate high and prevents the CAN bus from being occupied by feedback polling.

### Stale timeout on the MuJoCo side

The MuJoCo sync node has a `stale_timeout` parameter (default 1.0 second). If no new JointState message is
received within this time, the simulation stops updating:

```python
def _update(self) -> None:
    if self.last_input_time == 0.0:
        return
    if (self.stale_timeout > 0.0
        and time.monotonic() - self.last_input_time > self.stale_timeout):
        return
```

This prevents the simulation from continuing to move with stale data after the real robot disconnects.

### Latency layering and troubleshooting

When synchronization lags or is not responsive, measure layer by layer along the chain rather than tuning a single parameter:

1. Real-robot feedback layer: use `ros2 topic hz /rebotarm/joint_states` to confirm it is stably at 60 Hz.
2. MuJoCo sync layer: confirm whether `last_input_time` keeps updating.
3. Web reception layer: the rosbridge subscription throttle may keep the browser side below 25 Hz.
4. Display interpolation layer: the browser interpolates 32-120 ms between adjacent measurements.

For the detailed data flow and troubleshooting methods, see [DATA_FLOW_RS_ZH.md](/home/robot/ReBot_Arm_DigitalTwin_RS/DATA_FLOW_RS_ZH.md).

## 39.6 Gripper State Synchronization

Gripper synchronization is more complex than the arm joints, because it involves unit conversion and MuJoCo's equality-constraint linkage.

### MuJoCo gripper model

In [rs_arm.xml](/home/robot/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_mujoco_rs/models/rs_arm.xml), the gripper consists of three joints:

```xml
<joint name="joint7" type="slide" axis="0 1 0" range="0 0.05"/>
<joint name="joint_left" type="slide" .../>
<joint name="joint_right" type="slide" .../>

<equality>
  <joint joint1="joint7" joint2="joint_left" polycoef="0 1 0 0 0"/>
  <joint joint1="joint7" joint2="joint_right" polycoef="0 1 0 0 0"/>
</equality>
```

`joint7` is the driving joint, and `joint_left` and `joint_right` follow it 1:1 through the equality constraint. When syncing, you only need to set `joint7`'s `qpos`; the left and right fingers follow automatically.

### Sync code

When the MuJoCo sync node receives a JointState message, it first converts the gripper units, then sets the qpos of the three joints during the update:

```python
def _joint_state_callback(self, msg: JointState) -> None:
    if "gripper_joint1" in values:
        self.target_gripper = self._visual_to_mujoco_gripper(
            values["gripper_joint1"], _RS_ROS_VISUAL_OPEN_M
        )

def _update_kinematic(self) -> None:
    self.data.qpos[self.gripper_qpos_addr] = next_gripper      # joint7
    self.data.qpos[self.left_qpos_addr] = next_gripper         # joint_left
    self.data.qpos[self.right_qpos_addr] = next_gripper        # joint_right
```

Note: in kinematic mode, the three joints are written with the same value directly; in physics mode, only `joint7_motor` is driven, and the left/right fingers follow automatically through the equality constraint.

<a id="safety"></a>

## 39.7 Safety Design of the Synchronization Program

### Hardware confirmation gate

[start_rs_hardware.sh](/ReBot_Arm_DigitalTwin_RS/scripts/start_rs_hardware.sh) requires explicit confirmation before starting the real-robot controller, to prevent accidental operation from moving the arm:

```bash
if [[ "${REBOTARM_RS_HARDWARE_CONFIRM:-}" != "I_UNDERSTAND_RS_WILL_MOVE" ]]; then
  echo "Hardware launch blocked." >&2
  exit 2
fi
```

But the MuJoCo follow script [start_rs_mujoco_follow.sh](/ReBot_Arm_DigitalTwin_RS/scripts/start_rs_mujoco_follow.sh) does not need this confirmation, because it only subscribes to the real-robot topics and does not send motor commands or open SocketCAN:

### Process mutex lock

[start_rs_hardware.sh](/ReBot_Arm_DigitalTwin_RS/scripts/start_rs_hardware.sh) uses flock for process mutex on hardware launch, preventing two controllers from competing for the motors at the same time:

```bash
exec 9>"${REBOTARM_HARDWARE_LOCK}"
if ! flock -n 9; then
  # identify and safely terminate the previous launch
  stop_processes "the previous RS hardware launch" "${REBOTARM_LOCK_HOLDERS[@]}"
fi
```

It can also recognize controllers paused with Ctrl+Z, send SIGCONT first and then SIGINT, and finally clean up leftover Fast DDS shared memory.

### State machine arbitration

[hardware_manager.py](/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarmcontroller/rebotarmcontroller/hardware_manager.py) uses a state machine to reject unsafe commands:

```python
def _begin_lowlevel_streaming(self, required_mode: str) -> None:
    if not self._enabled:
        raise RuntimeError("rejecting low-level command while arm is disabled")
    if self._gravity_comp_active or self.state_machine == "GRAVITY_COMP":
        raise RuntimeError("rejecting low-level command during gravity compensation")
    if self.state_machine == "SAFE_HOMING":
        raise RuntimeError("rejecting low-level command during safe home")
```

The states include: `IDLE`, `LOWLEVEL_STREAMING`, `TRAJ_RUNNING`, `GRAVITY_COMP`, `SAFE_HOMING`. Each state accepts only specific command types and rejects everything else.

### Safe homing

Before disabling, if the arm is not near the zero pose (any joint's absolute angle exceeds 2 degrees, or velocity exceeds 0.15 rad/s), the controller first enters the `SAFE_HOMING` state: clears old targets, closes the gripper, performs homing, verifies arrival, and only then disables the motors. For the detailed flow, see Section 5 of [DATA_FLOW_RS_ZH.md](/ReBot_Arm_DigitalTwin_RS/DATA_FLOW_RS_ZH.md).

---

## 39.8 Practice Demos

### Demo 1: Synchronizing the Real Arm to MuJoCo

#### Overall chain

```text
Real reBot Arm (RobStride motors)
  ↓  CAN bus
Python SDK (motorbridge + reBotArm_control_py)
  ↓  read encoder feedback
ROS controller (rebotarmcontroller)
  ↓  publish JointState topics
MuJoCo sync node (mujoco_sync.py)
  ↓  kinematics mode directly writes qpos
MuJoCo virtual arm
```

#### DEMO launch

The 6 RobStride motors (joints 1–6) and 1 gripper motor on the arm continuously report their encoder states (position, velocity, torque, status codes) over the SocketCAN `can0` bus at 1 Mbps. This layer is pure hardware and involves no software.

Before launching, configure the CAN interface:

```text
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Launch the real-robot controller:

```text
# Terminal 1: real-robot controller
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Terminal 2: MuJoCo follow (same as Demo 1)
./scripts/start_rs_mujoco_follow.sh

# Terminal 3: web page
./rebotarm start web
```

### Demo 2: Gravity-Compensation Manual Teaching Synchronization

#### Overall chain

```text
Click "Start gravity comp" on the web page
  ↓  rosbridge → ROS Service
The real-robot controller enters gravity compensation mode (GRAVITY_COMP)
  ↓  Pinocchio computes gravity torques + low-gain MIT holding
The user manually drags the real arm
  ↓  motor encoders report new angles
The controller publishes JointState (60 Hz, same as normal motion)
  ↓
The MuJoCo follow node subscribes → the virtual arm reproduces in real time
Meanwhile the web 3D model also displays the feedback in real time
```

Key difference from Demo 1: the real robot is no longer passively driven by position targets; it enters **gravity compensation mode**—the user drags the real arm by hand, the encoder feedback keeps changing, JointState is published as usual, and both MuJoCo and the web page follow. The MuJoCo follow part fully reuses Demo 1's script and needs no extra configuration.

#### Step 1: Web operation — start gravity compensation

###### Prerequisites

Three terminals, respectively launching the real robot, MuJoCo follow, and the web page:

```text
# Terminal 1: real-robot controller
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Terminal 2: MuJoCo follow (same as Demo 1)
./scripts/start_rs_mujoco_follow.sh

# Terminal 3: web page
./rebotarm start web
```

Open `http://localhost:3002` in the browser, and follow these steps:

1. **Select the namespace**: choose "RS real robot (`/rebotarm`)" as the control target;
2. **Connect**: fill the ROS WebSocket with `ws://localhost:9090` and click connect;
3. **Open the control lock**: check the control lock checkbox;
4. **Enable**: click the "Enable" button and wait until the status shows enabled;
5. **Start gravity comp**: click the "Start gravity comp" button.

#### Step 2: The real-robot controller enters gravity compensation

Several key design points:

- **Gain smooth transition**: use smoothstep to gradually transition within `transition_duration` (default 0.5 s) from the stiff gains `[80,150,150,50,50,50]` / `[5,10,10,5,4,4]` to the compliant gains `kp=2.0` / `kd=1.0` (RS config). smoothstep has zero derivatives at both ends, avoiding an abrupt stiffness drop at the switch instant.
- **Target follows the measured angle**: `q_target` is smoothly interpolated from the holding angle at startup to the real-time measured angle. After the transition completes, `q_target = q`, i.e., the target always equals the current angle—wherever the user drags, the arm follows.
- **Gravity feedforward**: every cycle, recompute `compute_generalized_gravity` with the cached angles (no CAN read) and add it to the MIT torque. The motors only need to output a tiny position-error force; the `tau` mainly cancels gravity.
- **Cache instead of real-time CAN reads**: `_read_gravity_comp_positions(request=False)` takes angles from the 20 Hz-refreshed cache; the 125 Hz loop does no synchronous CAN parameter queries, avoiding blocking.

###### Safety rules during gravity compensation

While the state machine is in `GRAVITY_COMP`, the controller rejects all web joint commands, TCP dragging, trajectory playback, and gripper commands. Only the "Stop gravity comp" button and disable requests can interrupt it.

---

#### Complete data flow

```text
User clicks "Start gravity compensation" on the web page
  → rosbridge WebSocket
  → /rebotarm/gravity_compensation/start service
  → HardwareManager.start_gravity_compensation()
  → per-joint switch to MIT + gravity feedforward
  → 125 Hz compliant control loop
The user manually drags the real robot
  → encoder feedback → SocketCAN → state cache
  → /rebotarm/joint_states (60 Hz)
  → web mirror (Three.js model follows)
  → MuJoCo Sync (virtual arm follows)
```

###### MuJoCo virtual arm + web 3D model + real arm reproduced in real time

## 39.9 Summary

The core of Real-to-Sim synchronization is passing the real-robot joint states to the simulation environment at an appropriate frequency and format. The practical points of this project

are:

1. Map joints by name, not by array order.
2. The gripper involves four units; every step of the conversion chain must be clear.
3. Separate the hardware feedback polling frequency from the ROS publish frequency; do not do synchronous CAN reads in the real-time loop.
4. ROS2 topics beat UDP in this scenario; the benefits of the ecosystem and debugging tools outweigh the microsecond-level latency difference.
5. Safety design runs through the whole chain: hardware confirmation gate, process mutex lock, state machine arbitration, safe homing.
6. Gravity-compensation teaching is a high-value Real-to-Sim scenario: low stiffness + gravity feedforward + target following the feedback

updates are the key design.

## 39.10 FAQ

---

{/* Note: parts of this stage were drafted with the help of Doubao AI. */}

</div>
