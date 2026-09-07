---
description: Create a custom Microduck motion task by selecting a template, defining phases and rewards, registering the task, training it, and exporting ONNX.
title: Create a Custom Microduck Motion
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
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
