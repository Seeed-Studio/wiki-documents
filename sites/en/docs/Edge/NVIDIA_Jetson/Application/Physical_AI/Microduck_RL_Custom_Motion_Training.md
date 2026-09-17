---
description: Create a custom Microduck motion task by selecting a template, defining phases and rewards, registering the task, training it, and exporting ONNX.
title: Create a Custom Microduck Motion
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/11/2026
  author: Dayu
createdAt: '2026-09-04'
url: https://wiki.seeedstudio.com/ai_robotics_microduck_rl_custom_motion_training/
updatedAt: '2026-09-07'
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

## Verified Example: Front-Back Split

The validated custom task uses a more feasible double-support motion than the
previous one-leg balance experiment. The left foot moves forward, the right foot
moves backward, both feet remain grounded, and the robot returns to its normal
standing pose.

The registered task ID is:

```text
Mjlab-FrontBackSplit-Flat-MicroDuck
```

### Motion Timeline

The task uses a six-second cyclic phase command:

| Normalized phase | Behavior |
|---|---|
| `0.00–0.30` | Move from standing into the front-back split |
| `0.30–0.58` | Hold the split stance with both feet grounded |
| `0.58–0.78` | Return the legs toward the standing pose |
| `0.78–1.00` | Stabilize in the two-foot home pose |

The timing constants are defined in
`src/mjlab_microduck/tasks/microduck_front_back_split_env_cfg.py`:

```python
SPLIT_PERIOD = 6.0
SPLIT_END = 0.30
HOLD_END = 0.58
RETURN_END = 0.78
TARGET_SAGITTAL_SEPARATION = 0.095
```

### Define the Target Pose

The target is expressed by joint names and was checked with MuJoCo forward
kinematics. The target keeps the two foot sites level while producing about
`9.5 cm` of signed front-to-back foot separation:

```python
FRONT_BACK_SPLIT_POSE = {
    "left_hip_pitch": -1.1865,
    "left_knee": -0.1386,
    "left_ankle": 1.0452,
    "right_hip_pitch": 0.0603,
    "right_knee": 0.4927,
    "right_ankle": 0.4293,
    "neck_pitch": 0.3491,
    "head_pitch": 0.3491,
}
```

The interactive pose editor is `scripts/front_back_split_pose_editor.py`.
It opens a MuJoCo window with gravity disabled and prints the final named pose
when the window closes:

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync python scripts/front_back_split_pose_editor.py
```

If the Jetson desktop uses a different display, run the command directly from a
graphical terminal and use the value printed by `echo $DISPLAY`.

### Build the Split-Motion Reward

The task combines these motion-specific objectives:

| Reward | Purpose |
|---|---|
| `split_pose` | Track the interpolated standing-to-split joint pose |
| `split_pose_l1` | Provide a directional joint error gradient |
| `feet_grounded` | Keep both feet in contact with the terrain |
| `feet_flat` | Penalize tilted foot sites |
| `sagittal_separation` | Track the signed front-to-back foot separation |

The task also retains upright, joint-limit, self-collision, angular-velocity,
action-rate, actuator, encoder, friction, mass, inertia, and center-of-mass
randomization terms inherited from the Microduck environment. The custom
`sagittal_separation` term measures both foot sites in the robot base frame, so
the reward and the pose use the same coordinate convention.

### Register the Task

`Mjlab-FrontBackSplit-Flat-MicroDuck` is the task ID used by the MJLab registry.
It is not a filename and is not passed as an argument to the environment factory.

| Item | Location | Purpose |
|---|---|---|
| Environment and RL configuration | `src/mjlab_microduck/tasks/microduck_front_back_split_env_cfg.py` | Defines the target pose, phase timing, scene, rewards, and PPO configuration |
| Phase separation reward | `src/mjlab_microduck/tasks/mdp.py` | Tracks signed sagittal foot separation in the robot base frame |
| Task registration | `src/mjlab_microduck/tasks/__init__.py` | Binds the task ID to the environment and RL configuration |
| Pose editor | `scripts/front_back_split_pose_editor.py` | Opens and prints the validated MuJoCo target pose |
| CLI entry point | `uv run --no-sync train <task-id>` | Looks up the registered task and starts training |

Confirm registration:

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep FrontBackSplit
```

Expected output:

```text
Mjlab-FrontBackSplit-Flat-MicroDuck
```

### Run Smoke Tests

Start with 64 environments and five iterations:

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl
uv run --no-sync train Mjlab-FrontBackSplit-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

For the 16 GB reference Jetson, the validated full run used 2048 environments:

```bash
uv run --no-sync train Mjlab-FrontBackSplit-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 1000
```

The completed run reached full 600-step episodes, zero falling terminations in
late training, and near-maximum split-pose, foot-contact, and separation rewards.
On an 8 GB Jetson Orin NX or Orin Nano, start with `1024` environments and
increase only after checking memory with `jtop`.

### Visualize a PT Checkpoint

Use the completed checkpoint with the Native MuJoCo Viewer:

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync play Mjlab-FrontBackSplit-Flat-MicroDuck \
  --checkpoint-file "$PWD/logs/rsl_rl/front_back_split/2026-09-09_18-04-10_front_back_split_left_forward/model_999.pt" \
  --num-envs 1 \
  --viewer native
```

### Export and Run the ONNX Policy

Export the checkpoint with the project wrapper so the observation normalizer is
embedded in the ONNX graph:

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-FrontBackSplit-Flat-MicroDuck \
  --checkpoint-file "$PWD/logs/rsl_rl/front_back_split/2026-09-09_18-04-10_front_back_split_left_forward/model_999.pt" \
  --onnx-file "$PWD/models/exports/front_back_split/front_back_split_model_999.onnx" \
  --num-envs 1
```

Run it through the keyboard-controlled MuJoCo inference demo:

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync python3 scripts/infer_policy.py \
  --standing pretrained/pollen-robotics/alpha_stand.onnx \
  --front-back-split models/exports/front_back_split/front_back_split_model_999.onnx \
  --new-cmd-obs
```

Press `O` to run one six-second front-back split cycle. The policy receives the
same cosine/sine phase command used during training, then control automatically
returns to the standing policy. If a walking policy is also provided, the demo
returns to walking when a non-zero velocity command is active.

The old `--one-leg-balance` option and one-leg task files are no longer part of
the current repository. Use `--front-back-split` for this verified motion.

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
