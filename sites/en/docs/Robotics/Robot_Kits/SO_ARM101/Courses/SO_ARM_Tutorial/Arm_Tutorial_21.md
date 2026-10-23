---
description: Chapter 21 of the SO-ARM Physical AI Beginner's Course — set up the Isaac-GR00T environment, fine-tune GR00T N1.5 on your SO-ARM dataset with the so100_dualcam config, then run inference with the GR00T server and the SO-100 robot control client, on a workstation or Jetson AGX Thor.
title: Chapter 21 - Fine-tuning the SO-ARM with Isaac GR00T
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - VLA
  - Fine-tuning
  - Inference
  - Jetson Thor
  - Course
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_21
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/robotics/soarm_physical_ai_course_chapter_21/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Stage 4 · Chapter 21 · Practice</span>
    <h2>21. Fine-tuning the SO-ARM with Isaac GR00T</h2>
    <p>
      Chapter 21 of the SO-ARM Physical AI Beginner's Course — set up the Isaac-GR00T environment,
      fine-tune GR00T N1.5 on your SO-ARM dataset with the so100_dualcam config, then run
      inference with the GR00T server and the SO-100 robot control client, on a workstation or
      Jetson AGX Thor.
    </p>
    <div className="hero-actions">
      <a href="#environment">Environment</a>
      <a href="#finetune">Fine-tune</a>
      <a href="#inference">Inference</a>
    </div>
  </div>
</section>

## 21.1 Choose Your Training Path

<section id="paths" className="section-card">
  <div className="section-title">
    <span>Paths</span>
    <h2>21.1 Choose Your Training Path</h2>
  </div>

This chapter follows the **Isaac-GR00T** path used by NVIDIA's official [SO101 fine-tuning guide](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning) — the same recipe Seeed uses in the [SO101 + GR00T on Jetson Thor](/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/) tutorial. Three ways to get the compute:

| Path | Hardware | Notes |
| :--- | :--- | :--- |
| **Local workstation** | RTX 4090 / A6000 class (Ampere+, ~25GB VRAM) | What this chapter assumes |
| **NVIDIA Brev cloud** | Any browser | Same commands in a cloud notebook; export the checkpoint and download it |
| **No GPU at all** | — | Skip to Chapter 22: the no-code SenseCraft Robotics path |

:::warning
GR00T training or fine-tuning requires a GPU with **Ampere or newer** architecture (e.g. RTX A6000, RTX 4090). **V100 (Volta) is not supported.**
:::

</section>

## 21.2 Environment Setup

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Environment</span>
    <h2>21.2 Environment Setup</h2>
  </div>

Create a dedicated environment (separate from your `lerobot` env is fine):

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4
```

`flash-attn` is the step most likely to fail — it must match your PyTorch/CUDA build. If the build errors out: check `python -c "import torch; print(torch.version.cuda)"` against the wheel you need, install `ninja` and `packaging` first, and retry.

The pretrained foundation model downloads automatically from Hugging Face on first use: [`nvidia/GR00T-N1.5-3B`](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main).

</section>

## 21.3 Fine-tuning on Your SO-ARM Dataset

<section id="finetune" className="section-card">
  <div className="section-title">
    <span>Fine-tune</span>
    <h2>21.3 Fine-tuning on Your SO-ARM Dataset</h2>
  </div>

With the Chapter 20 dataset ready (here `./demo_data/so101-table-cleanup/` — replace with your dataset path):

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

Key parameters:

- `--dataset-path`: your LeRobot dataset folder (the one prepared in Chapter 20);
- `--data-config so100_dualcam`: the standard two-camera SO-ARM configuration;
- `--max-steps`: 10,000 is a solid first run for ~50 episodes;
- `--video-backend torchvision_av`: video decoding backend;
- To fine-tune from a locally stored base model instead of auto-downloading, add `--base-model-path ./pretrained/GR00T-N1.5-3B`.

:::note
The default fine-tuning settings require **~25GB of VRAM**. If you don't have that much, add `--no-tune_diffusion_model` — it freezes the DiT action head and trains less, but fits smaller cards.
:::

Monitor loss as in Chapter 15; expect fine-tuning to take noticeably longer per step than ACT — the model is ~3B parameters.

### Exporting from a cloud notebook (Brev path)

The Jupyter sidebar cannot navigate into training folders directly. Compress the checkpoint folder into a `.zip` or `.tar.gz` first, then download the archive through the notebook interface.

</section>

## 21.4 Running Inference: Server + Robot Control Client

<section id="inference" className="section-card">
  <div className="section-title">
    <span>Inference</span>
    <h2>21.4 Running Inference: Server + Robot Control Client</h2>
  </div>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety check before running</strong>
    <p>
      Inference moves the real arm with no human in the loop. Clear the workspace, keep hands away, and be ready to cut power.
    </p>
  </div>
</div>

To achieve the best performance, replicate the data-collection setup as closely as possible — same cameras, same positions, same lighting. The model's generalization is limited.

**Terminal 1 — launch the GR00T inference service:**

```bash
python scripts/inference_service.py --server \
    --model_path ./so101-checkpoints \
    --embodiment-tag new_embodiment \
    --data-config so100_dualcam \
    --denoising-steps 4
```

**Terminal 2 — start the robot control client** (the official SO-100 example, written for this arm):

```bash
python examples/SO-100/eval_lerobot.py \
    --robot.type=so100_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --policy_host=0.0.0.0 \
    --lang_instruction="Grab pens and place into pen holder."
```

Notes:

- Replace `index_or_path` with your camera indexes — find them with `ls /dev/video*` or `lerobot-find-cameras opencv`. They must be the **same views** (front + side/gripper) as in the dataset.
- Change `--lang_instruction` to your dataset's exact task sentence — this is language conditioning live (Chapter 18).
- The client and server can run on the same machine, or the server on a networked GPU box / Jetson Thor.

</section>

## 21.5 Edge Deployment on Jetson AGX Thor

<section id="thor" className="section-card">
  <div className="section-title">
    <span>Edge</span>
    <h2>21.5 Edge Deployment on Jetson AGX Thor</h2>
  </div>

Jetson AGX Thor provides enough compute to run GR00T N1.5 inference at the edge. All GR00T dependencies ship in a dedicated Docker image:

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  <image_name>:<tag>
```

Inside the container:

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
pip install --upgrade setuptools
pip install -e .[thor]
```

Fine-tuning (optional, if you skipped it in the cloud) uses the same `gr00t_finetune.py` command as 21.3; then run the same server + client pair as 21.4. For the complete Jetson Thor walkthrough — flashing, environment, data collection, Brev training, deployment — see the full tutorial: [Fine-tune GR00T N1.5 for LeRobot SO-ARM and deploy on Jetson Thor](/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/).

</section>

## 21.6 Alternative: The LeRobot `groot` Policy Path

<section id="lerobot-groot" className="section-card">
  <div className="section-title">
    <span>Alternative</span>
    <h2>21.6 Alternative: The LeRobot `groot` Policy Path</h2>
  </div>

If you prefer staying inside the LeRobot toolchain from Stage 3, the `--policy.type=groot` policy works too (it also requires `flash-attn` and a CUDA GPU):

```bash
pip install "lerobot[groot]"

accelerate launch \
  --num_processes=1 \
  $(which lerobot-train) \
  --output_dir=outputs/train/groot_so101 \
  --save_checkpoint=true \
  --batch_size=64 \
  --steps=20000 \
  --policy.type=groot \
  --policy.repo_id=${HF_USER}/groot_so101 \
  --dataset.repo_id=seeedstudio123/test \
  --wandb.enable=true
```

Expect higher environment requirements than ACT/Pi0 — the official advice holds: get ACT running end-to-end first, then try GR00T. Evaluation afterwards uses the familiar `lerobot-record ... --policy.path` recipe from Chapter 16.

</section>

## 21.7 Evaluation and Iteration

<section id="evaluation" className="section-card">
  <div className="section-title">
    <span>Evaluate</span>
    <h2>21.7 Evaluation and Iteration</h2>
  </div>

Reuse Chapter 16's framework verbatim — success criteria, varied starts, success rate, failure buckets — with two VLA-specific additions:

1. **Instruction matrix:** evaluate each task sentence your dataset contains; a VLA should switch behavior when you switch the sentence;
2. **Same-weights new-instruction probe:** try a sentence you *didn't* record — where it succeeds, that's language generalization; where it fails, that's Chapter 18's distribution boundary showing up. Answer failures with data, not with hope.

</section>

## 21.8 Troubleshooting FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>21.8 Troubleshooting FAQ</h2>
  </div>

| Problem | Fix |
| :--- | :--- |
| Model download failure / slow | Download [`nvidia/GR00T-N1.5-3B`](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main) manually and pass `--base-model-path` |
| `flash-attn` build fails | Check PyTorch/CUDA match; install `ninja` + `packaging` first; use the pinned `2.7.1.post4` |
| CUDA OOM during fine-tuning | Add `--no-tune_diffusion_model`; reduce batch size |
| V100 rejected | Expected — Ampere+ required |
| Client can't reach server | `--policy_host` must be the server's reachable IP; check firewall/port |
| Arm moves but task ignored | Camera keys or instruction sentence don't match the dataset — Chapters 19-20 rules |

</section>

</div>
