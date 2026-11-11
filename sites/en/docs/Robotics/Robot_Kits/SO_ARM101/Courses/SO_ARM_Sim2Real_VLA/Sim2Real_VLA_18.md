---
description: "Chapter 18 of the SO-ARM101 Sim-to-Real VLA Course — run GR00T N1.7 TensorRT inference on Jetson: build the seven target-specific engines, run offline evaluation, and start the edge policy server."
title: Chapter 18 - Run GR00T N1.7 TensorRT Inference
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Jetson
  - TensorRT
  - GR00T N1.7
  - Edge Deployment
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_18
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/robotics/soarm_sim2real_vla_chapter_18/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 4 · Chapter 18 · Deploy on Jetson</span>
    <h2>18. Run GR00T N1.7 TensorRT Inference</h2>
    <p>
      Export the fine-tuned policy to seven target-specific TensorRT
      engines, validate offline, and serve the policy to the SO-101
      follower — entirely from the Jetson.
    </p>
    <div className="hero-actions">
      <a href="#prereq">Prerequisites</a>
      <a href="#build">Build engines</a>
      <a href="#offline">Offline inference</a>
      <a href="#serve">Policy server</a>
      <a href="#troubleshoot">Troubleshooting</a>
    </div>
  </div>
</section>

## 18.1 Prerequisites

<section id="prereq" className="section-card">
  <div className="section-title">
    <span>Check before building</span>
    <h2>18.1 Prerequisites</h2>
  </div>

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"
git rev-parse HEAD
```

Expected repository revision:

```text
dcf5f6b759fd17cab3644a97fc4429bca7451e38
```

Verify the required inputs from Chapter 17:

```bash
test -f "${GR00T_MODEL_PATH}/config.json"
test -f "${GR00T_MODEL_PATH}/processor_config.json"
test -f "${GR00T_MODEL_PATH}/statistics.json"
test -f "${GR00T_DATASET_PATH}/meta/info.json"
test -f "${GR00T_DATASET_PATH}/meta/modality.json"
test -f "${GR00T_BACKBONE_PATH}/config.json"
```

:::caution Never copy engines between targets
TensorRT `.engine` files depend on the GPU architecture, TensorRT version,
checkpoint, graph shapes, precision, and builder configuration. Each
target builds its own engines.
:::

</section>

## 18.2 The TensorRT Pipeline Output

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>Seven engines</span>
    <h2>18.2 The TensorRT Pipeline Output</h2>
  </div>

The full pipeline creates seven target-specific engines:

```text
1. vit.engine
2. llm_bf16.engine
3. vl_self_attention.engine
4. state_encoder.engine
5. action_encoder.engine
6. dit_bf16.engine
7. action_decoder.engine
```

</section>

## 18.3 Build on Jetson AGX Orin

<section id="orin" className="section-card">
  <div className="section-title">
    <span>Orin wrapper</span>
    <h2>18.3 Build on Jetson AGX Orin</h2>
  </div>

```bash
export GR00T_TARGET=orin
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"

bash scripts/deployment/orin_jp72/run_full_trt.sh prepare
bash scripts/deployment/orin_jp72/run_full_trt.sh verify
bash scripts/deployment/orin_jp72/run_full_trt.sh status
```

The wrapper activates `.venv-jp72`, loads the JetPack 7.2 CUDA runtime
paths, and builds the Orin engine bundle under `${GR00T_TRT_OUTPUT}`.

</section>

## 18.4 Build on Jetson AGX Thor

<section id="thor" className="section-card">
  <div className="section-title">
    <span>Thor pipeline</span>
    <h2>18.4 Build on Jetson AGX Thor</h2>
  </div>

```bash
export GR00T_TARGET=thor
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"

source .venv/bin/activate
source scripts/activate_thor.sh

python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_MODEL_PATH}" \
  --dataset-path "${GR00T_DATASET_PATH}" \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --precision bf16 \
  --batch-size 1 \
  --steps export,build,verify,benchmark
```

Use the same embodiment tag (`NEW_EMBODIMENT`) and 16-step action horizon
that Chapter 10 trained with. Build a separate Thor output directory even
when the checkpoint and dataset are shared with Orin.

</section>

## 18.5 Run Offline Inference

<section id="offline" className="section-card">
  <div className="section-title">
    <span>No robot attached</span>
    <h2>18.5 Run Offline Inference</h2>
  </div>

Validate the engines against the recorded trajectory first:

```bash
# Orin
bash scripts/deployment/orin_jp72/run_full_trt.sh evaluate
```

The command evaluates the TensorRT pipeline against the configured local
trajectory and writes the result to `${GR00T_RESULT_PATH}`.

```bash
# Thor
source .venv/bin/activate
source scripts/activate_thor.sh

python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_MODEL_PATH}" \
  --dataset-path "${GR00T_DATASET_PATH}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --inference-mode trt_full_pipeline \
  --trt-engine-path "${GR00T_TRT_OUTPUT}/engines" \
  --execution-horizon 16 \
  --save-plot-path "${GR00T_RESULT_PATH}"
```

Use the same embodiment tag and action horizon that were used when
exporting the engines.

</section>

## 18.6 Start the TensorRT Policy Server

<section id="serve" className="section-card">
  <div className="section-title">
    <span>Edge endpoint</span>
    <h2>18.6 Start the TensorRT Policy Server</h2>
  </div>

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh serve
ss -ltn | grep ':5555'
```

The default endpoint is `127.0.0.1:5555`. To expose another address:

```bash
export GR00T_SERVER_HOST=0.0.0.0
export GR00T_SERVER_PORT=5555
bash scripts/deployment/orin_jp72/run_full_trt.sh serve
```

Point the SO-101 robot client at the Jetson. From the Jetson itself — or
from any machine on the same network with the workshop evaluation scripts
and the follower attached — run the Chapter 11 client with the Jetson's
address:

```bash
python Isaac-GR00T/gr00t/eval/real_robot/SO100/so101_eval.py \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --robot.cameras="{
    wrist: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    front: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }" \
  --policy_host=<JETSON_IP> \
  --policy_port=5555 \
  --lang_instruction="Put the three vials into the vial rack"
```

The SO-101 follower now executes a policy that runs entirely on the
Jetson.

Validate the engine bundle:

```bash
find "${GR00T_TRT_OUTPUT}/engines" -maxdepth 1 -name '*.engine' -printf '%f\n' | sort
```

Confirm that all seven engines exist and that verification completed
without a shape or numerical-accuracy failure.

</section>

## 18.7 Troubleshooting

<section id="troubleshoot" className="section-card">
  <div className="section-title">
    <span>Common issues</span>
    <h2>18.7 Troubleshooting</h2>
  </div>

### `libcusparseLt.so.0` Cannot Be Found on Orin

Use the wrapper instead of calling `.venv-jp72/bin/python` directly:

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh evaluate
```

### Wrong Python Environment

```bash
which python
python -c "import sys; print(sys.executable)"
```

- Orin: `${GR00T_REPO}/.venv-jp72/bin/python`
- Thor: `${GR00T_REPO}/.venv/bin/python`

### Engine Shape or Deserialization Error

Delete and rebuild the target-specific engines after changing the
checkpoint, backbone, TensorRT version, precision, batch size, action
horizon, or graph shapes:

```bash
rm -rf "${GR00T_TRT_OUTPUT}/engines"
```

Then rerun the appropriate Orin or Thor build command.

### TensorRT Build Runs Out of Memory

```bash
free -h
df -h "${GR00T_WORKSPACE}"
sudo tegrastats
```

Close other GPU applications and confirm that the workspace has sufficient
free storage before rebuilding.

</section>

## 18.8 Reproduction Checklist

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Final gate</span>
    <h2>18.8 Reproduction Checklist</h2>
  </div>

- [ ] The repository is at the validated commit;
- [ ] The checkpoint, backbone, dataset, and embodiment configuration are
      complete;
- [ ] Orin uses `.venv-jp72`; Thor uses `.venv`;
- [ ] Seven engines were built on the target where they will run;
- [ ] Offline TensorRT inference completes and saves a result plot;
- [ ] The policy server is started only after the engine bundle passes
      verification;
- [ ] The SO-101 follower executes the task driven by the Jetson policy
      server.

Back to the course overview: [SO-ARM101 Sim-to-Real VLA Course](Sim2Real_VLA_Introduction.md).

</section>

</div>