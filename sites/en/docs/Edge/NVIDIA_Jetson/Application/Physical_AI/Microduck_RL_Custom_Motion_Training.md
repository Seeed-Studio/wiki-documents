---
description: Create a custom Microduck motion task by selecting a template, defining phases and rewards, registering the task, training it, and exporting ONNX.
title: Create a Custom Microduck Motion
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/07/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Create a Custom Microduck Motion

This chapter introduces the project workflow for building a new motion. The example uses a phase-based **Bow** behavior, but the same process applies to nodding, crouching, stretching, recovery skills, and other robot motions.

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo Home</a>
  <a href="/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>←</span> Official Motions</a>
</div>

## Understand the Policy Contract

All hot-swappable Microduck policies share the same interface:

- **61-dimensional actor observation**: 48 proprioception values plus the 13-dimensional command block `[twist(3), head_pose(4), body_pose(6)]`.
- **14-dimensional action output** for the active servo joints.
- Unused command slots remain present and are zero-padded.
- Passive wheel and backlash joints use the `passive_*` naming convention and must not be selected as actuated joints.
- Joint IDs should be resolved by the project helpers rather than hardcoded.
- ONNX export must go through `scripts/export.py` so the observation normalizer is included.

Breaking this contract can produce a policy that works in one viewer but cannot be switched or deployed correctly.

## Select the Closest Template

| Desired motion | Recommended template |
|---|---|
| Continuous velocity motion | `microduck_velocity_env_cfg.py` |
| Recovery from a specific state | `microduck_standup_env_cfg.py` |
| Two-state command transition | `microduck_sitstand_env_cfg.py` |
| Slow phase-based motion | `microduck_ground_pick_env_cfg.py` |
| Fast dynamic maneuver | `microduck_roulade_env_cfg.py` |
| Roller motion | `microduck_velocity_rollers_env_cfg.py` |

For a bow, the ground-pick task is a useful starting point because it already implements phase commands, descent, hold, rise, pose tracking, and recovery.

## Copy the Template

```bash
cd ~/microduck-jetson/microduck_rl

cp src/mjlab_microduck/tasks/microduck_ground_pick_env_cfg.py \
  src/mjlab_microduck/tasks/microduck_bow_env_cfg.py
```

Back up the task registry and shared MDP functions before editing:

```bash
cp src/mjlab_microduck/tasks/__init__.py \
  src/mjlab_microduck/tasks/__init__.py.bak

cp src/mjlab_microduck/tasks/mdp.py \
  src/mjlab_microduck/tasks/mdp.py.bak
```

## Design the Motion Timeline

A simple bow can use a normalized phase from `0.0` to `1.0`:

| Phase | Behavior |
|---|---|
| `0.00–0.25` | Descend toward the bow pose |
| `0.25–0.55` | Hold the bow |
| `0.55–0.85` | Return to the home pose |
| `0.85–1.00` | Stabilize upright |

Use smooth interpolation instead of switching directly between two poses. Sharp target changes often cause high action rates, impacts, or unstable reward gradients.

## Define a Target Pose

Create a joint-name mapping in `microduck_bow_env_cfg.py`. Start with conservative angles and inspect them with the Viewer before training.

```python
BOW_POSE = {
    "left_hip_pitch": -0.20,
    "left_knee": 0.30,
    "left_ankle": -0.10,
    "neck_pitch": 0.35,
    "head_pitch": 0.20,
    "right_hip_pitch": -0.20,
    "right_knee": 0.30,
    "right_ankle": -0.10,
}
```

The values above are only a starting point. Confirm the actual joint names and signs in the robot configuration.

## Build the Reward

A useful custom-motion reward usually combines:

- Phase-conditioned target-pose tracking.
- A task-result reward, such as lowering the head during the bow.
- Upright and recovery rewards near the end of the sequence.
- Foot contact and lateral stability terms.
- Joint-limit, collision, action-rate, and impact penalties.

Reuse the template rewards and the shared functions in `src/mjlab_microduck/tasks/mdp.py` whenever possible. Add a new function only when the desired measurement does not already exist.

:::warning
Check the sign convention before assigning a weight. A function that already returns a negative penalty normally uses a positive weight only when that matches the project convention. Inspect nearby task configurations and confirm the weighted metric in TensorBoard.
:::

## Register the New Task

Import the new configuration in `src/mjlab_microduck/tasks/__init__.py`, then register a new ID following the existing entries:

```python
register_mjlab_task(
    task_id="Mjlab-Bow-Flat-MicroDuck",
    env_cfg=microduck_bow_env_cfg,
    play_env_cfg=microduck_bow_play_env_cfg,
    rl_cfg=microduck_bow_rl_cfg,
)
```

Use the exact callable names implemented in your new module and mirror the current registry signature.

Confirm registration:

```bash
uv run --no-sync list-envs | grep Mjlab-Bow
```

## Inspect Before Training

Launch a random policy to check the model, reset state, sensors, command manager, and term configuration:

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --agent random \
  --num-envs 1 \
  --viewer native
```

Look for invalid contacts, spawn penetration, joint direction mistakes, immediate termination, NaN values, and impossible target poses.

## Run a Smoke Test

```bash
export MUJOCO_GL=egl

uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

Only start a long training run after this completes without exceptions or NaNs.

## Train in Stages

A practical curriculum is:

1. **Motion discovery**: easy spawn state, broad pose reward, minimal disturbance.
2. **Motion completion**: strengthen hold and recovery terms; add result-based rewards.
3. **Robustness**: increase spawn diversity, friction randomization, external pushes, and backlash variants.

Example long run:

```bash
uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 2000
```

Watch the main task reward rather than only total reward. A policy can improve regularization metrics while never completing the intended motion.

## Visualize and Export

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer native
```

Export the accepted checkpoint:

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --onnx-file bow.onnx
```

To add keyboard triggering, extend `scripts/infer_policy.py` using the existing sit/stand, ground-pick, roulade, and kick policy-switching patterns. Write to the command slot expected by the new policy and keep the 61-dimensional observation layout unchanged.

## Verified Example: One-Leg Balance

The following custom task was implemented and smoke-tested on the Jetson reference system. The motion transfers the robot's weight onto its **left foot**, lifts the **right foot**, holds the balance pose, and then returns to the normal two-foot standing pose.

The registered task ID is:

```text
Mjlab-OneLegBalance-Flat-MicroDuck
```

### Motion Timeline

The task uses a six-second cyclic phase command:

| Normalized phase | Behavior |
|---|---|
| `0.00–0.30` | Transfer weight to the left foot and lift the right leg |
| `0.30–0.58` | Hold the one-leg balance pose |
| `0.58–0.78` | Lower the right foot and return to standing |
| `0.78–1.00` | Stabilize in the two-foot home pose |

These boundaries are defined in `microduck_one_leg_balance_env_cfg.py`:

```python
BALANCE_PERIOD = 6.0
LIFT_END = 0.30
HOLD_END = 0.58
RETURN_END = 0.78
```

### Define the Target Pose

The target is expressed with joint names rather than raw MuJoCo joint indexes. This keeps the intent readable and avoids accidental index shifts when the robot model changes.

```python
ONE_LEG_POSE = {
    "left_hip_roll": -0.25,
    "left_hip_pitch": -0.40,
    "left_knee": -0.05,
    "left_ankle": 0.45,
    "right_hip_roll": -0.10,
    "right_hip_pitch": 0.95,
    "right_knee": -1.25,
    "right_ankle": 0.30,
    "neck_pitch": 0.30,
    "head_pitch": 0.30,
    "head_roll": -0.10,
}
```

The left leg remains close to its standing configuration. The right hip and knee fold the swing leg forward, while the small head roll helps communicate the intended support side.

### Build the Balance Reward

The example combines five task-specific objectives:

| Reward | Purpose |
|---|---|
| `one_leg_pose` | Track the interpolated standing-to-balance joint pose |
| `support_foot_grounded` | Keep the left support foot in contact with the terrain |
| `swing_foot_airborne` | Prevent the right foot from remaining on the floor during the hold phase |
| `swing_foot_height` | Track the desired right-foot clearance above the terrain |
| `com_over_support` | Move the horizontal center of mass over the left support foot |

The task also retains joint-limit, self-collision, angular-velocity, action-rate, actuator, encoder, friction, mass, inertia, and center-of-mass randomization terms inherited from the Microduck training environment.

Two small reusable measurements were added to `src/mjlab_microduck/tasks/mdp.py`:

- `phase_single_foot_airborne_reward()` gates the right-foot airborne reward to the active balance phase.
- `phase_site_height_track()` interpolates the right-foot height target between standing and lifted states.

The existing `phase_pose_track()`, `phase_pose_track_l1()`, `single_foot_grounded_reward()`, and `com_over_support_foot()` functions are reused directly.

### Register the Task

Add the task configuration import and registration to `src/mjlab_microduck/tasks/__init__.py`:

```python
from .microduck_one_leg_balance_env_cfg import (
    make_microduck_one_leg_balance_env_cfg,
    MicroduckOneLegBalanceRlCfg,
)

register_mjlab_task(
    task_id="Mjlab-OneLegBalance-Flat-MicroDuck",
    env_cfg=make_microduck_one_leg_balance_env_cfg(),
    play_env_cfg=make_microduck_one_leg_balance_env_cfg(play=True),
    rl_cfg=MicroduckOneLegBalanceRlCfg,
    runner_cls=MicroduckOnPolicyRunner,
)
```

Confirm that MJLab discovers the new task:

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep OneLegBalance
```

Expected output:

```text
Mjlab-OneLegBalance-Flat-MicroDuck
```

### Edit and Capture the Pose in MuJoCo

The example includes `scripts/one_leg_pose_editor.py`. It disables gravity and fixes the floating base so that individual joint targets can be adjusted safely before training.

Run it directly from a terminal on the Jetson desktop:

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync python scripts/one_leg_pose_editor.py
```

Expand the **Control** panel on the right side of the MuJoCo window and adjust the joint sliders. Closing the window prints the final named `ONE_LEG_POSE` dictionary to the terminal. The MuJoCo **Save XML** and **Save MJB** buttons save model files; they do not save the Python target-pose dictionary used by this task.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_one_leg_balance.png" alt="Interactive MuJoCo pose editor showing the Microduck one-leg balance target pose" />
</div>

If the editor is launched through SSH and should appear on the Jetson's locally connected monitor, export the active desktop session first. The verified Jetson session used `DISPLAY=:1`:

```bash
cd ~/microduck-jetson/microduck_rl

export DISPLAY=:1
export XAUTHORITY=/run/user/1000/gdm/Xauthority
export XDG_RUNTIME_DIR=/run/user/1000
export DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus

~/.local/bin/uv run --no-sync python scripts/one_leg_pose_editor.py
```

:::note
The display number can change after reboot or when the desktop session changes. From a terminal opened directly on the Jetson desktop, `echo $DISPLAY` shows the active value.
:::

### Run the Verified Smoke Tests

Start with 64 environments and five iterations:

```bash
cd ~/microduck-jetson/microduck_rl

export MUJOCO_GL=egl

uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

The task was also tested with 4096 parallel environments on a 16 GB Jetson:

```bash
uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 4096 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

The 4096-environment smoke test completed without an out-of-memory error or NaN termination and reached approximately `4.6k steps/s`. The actor observation remained 61-dimensional and the action output remained 14-dimensional.

:::tip
On an 8 GB Jetson Orin NX or Jetson Orin Nano, begin with `--env.scene.num-envs 1024`. Increase it only after checking available memory with `jtop`.
:::

### Open the Training Viewer

To visualize one environment while the custom task trains, run the following command from the Jetson desktop:

```bash
cd ~/microduck-jetson/microduck_rl

uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 1 \
  --agent.logger tensorboard \
  --agent.max_iterations 1000 \
  --env.viewer.distance 0.55 \
  --env.viewer.azimuth 145 \
  --env.viewer.elevation -12
```

The pose editor shows the intended target immediately. The training viewer initially shows an untrained policy, so stable one-leg behavior appears only after the policy has learned the transfer, lift, hold, and recovery sequence.

### Start a Full Training Run

For the 16 GB reference system, use the following starting point:

```bash
uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 4096 \
  --agent.logger tensorboard \
  --agent.max_iterations 20000
```

The smoke tests confirm that the task configuration, reward terms, sensors, CUDA backend, and large parallel environment count work correctly. They do not by themselves prove policy convergence. Evaluate saved checkpoints in MuJoCo and adjust the pose, reward weights, phase timing, or curriculum if the robot lifts its foot without transferring its center of mass, hops, or fails to recover to standing.

## Development Checklist

- [ ] The observation layout remains 61D.
- [ ] The policy output remains 14D.
- [ ] Passive joints are excluded from actions and servo observations.
- [ ] The BAM startup event and domain randomization remain active where required.
- [ ] The task appears in `list-envs`.
- [ ] Random-policy Viewer inspection succeeds.
- [ ] The 64-environment smoke test succeeds.
- [ ] Main task metrics improve in TensorBoard.
- [ ] The final PT checkpoint behaves correctly in MuJoCo.
- [ ] ONNX is exported with the project script and rehearsed before robot deployment.

<div align="center">
  <a href="/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-block', padding:'16px 30px', marginTop:'20px', borderRadius:'10px', background:'linear-gradient(135deg, #172b4d, #0b172d)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(23,43,77,.25)'}}>Return to Demo Home</a>
</div>
