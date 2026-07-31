---
description: Deploy a finetuned full-weight NVIDIA Isaac GR00T N1.7 policy as a seven-engine TensorRT pipeline on Jetson AGX Orin with JetPack 7.2.
title: Deploy Full-Weight GR00T N1.7 with TensorRT on JetPack 7.2 and Jetson AGX Orin
keywords:
  - Jetson AGX Orin
  - JetPack 7.2
  - GR00T N1.7
  - TensorRT
  - Physical AI
  - VLA
image: https://files.seeedstudio.com/wiki/other/agx-orin-gr00t-front.png
slug: /deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/
---

# Deploy Full-Weight GR00T N1.7 with TensorRT on JetPack 7.2 and Jetson AGX Orin

This tutorial deploys a finetuned **NVIDIA Isaac GR00T N1.7** policy on **Jetson AGX Orin** using **JetPack 7.2** and a full TensorRT inference pipeline. Unlike the older Orin workflow that accelerated only the DiT component, this implementation builds TensorRT engines for all seven model components:

1. Vision Transformer (ViT)
2. Large Language Model (LLM)
3. Vision-language self-attention
4. State encoder
5. Action encoder
6. DiT action expert
7. Action decoder

The validated workflow performs offline inference with a local LeRobot dataset. It does not open a robot serial port or send actuator commands, making it suitable for checking model conversion and action generation before integrating a physical robot.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/other/agx-orin-gr00t-front.png" alt="GR00T N1.7 full TensorRT deployment on Jetson AGX Orin" />
</div>

<div className="video-container">
  <iframe
    width="800"
    height="450"
    src="https://www.youtube.com/embed/H3rQHnB-gaI"
    title="GR00T N1.7 full TensorRT inference on JetPack 7.2 and Jetson AGX Orin"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>

## Project Repository

The JetPack 7.2 implementation, conversion scripts, runtime changes, and original deployment notes are available in the following repository:

- [jjjadand/Isaac-GR00T-Orin-JP72](https://github.com/jjjadand/Isaac-GR00T-Orin-JP72)

This guide was validated against repository commit:

```text
93d711e3d56ca054d1cd41b12115a37ae57b46f6
```

Later commits may improve package versions or command-line options. When reproducing the measured result, start from the pinned commit and review newer changes separately.

## Tested Configuration

| Item | Tested value |
| --- | --- |
| Device | Jetson AGX Orin, compute capability `sm_87` |
| JetPack / L4T | JetPack 7.2 / L4T R39.2 |
| OS / kernel | Ubuntu 24.04 / Linux 6.8 Tegra |
| System CUDA | CUDA 13.2 |
| System TensorRT | 10.16.2.10 |
| Python | 3.12.3 |
| PyTorch | 2.8.0, Jetson AI Lab CUDA 12.9 wheel |
| TorchVision | 0.23.0 |
| Transformers | 4.57.6 |
| ONNX | 1.20.1 |
| PyAV / FFmpeg | PyAV 16.1.0 / FFmpeg 8 |
| TensorRT batch size | 1 |
| Action horizon | 16 |

:::warning
The repository's older Orin setup targets JetPack 6.2, Python 3.10, CUDA 12.6, and an earlier TensorRT release. Do not run `scripts/deployment/orin/install_deps.sh` or `scripts/activate_orin.sh` for this JetPack 7.2 workflow.
:::

:::note
The PyTorch wheel used by the validated environment carries a CUDA 12.9 runtime. TensorRT continues to use JetPack 7.2's system CUDA 13.2 installation. Keep the activation and library-path order shown in this guide.
:::

## Storage and Memory Planning

Reserve at least **45–50 GB** of free storage for the repository, checkpoint, local VLM backbone, dataset, ONNX graphs, TensorRT engines, and temporary build files. The validated TensorRT artifact directory occupies approximately **13 GB**.

The tested AGX Orin exposed approximately 29 GB of usable unified memory and did not use swap. Before building engines:

```bash
free -h
df -h "${HOME}"
sudo tegrastats
```

Close browsers, notebooks, desktop applications, and unrelated model services if the TensorRT builder is terminated by the out-of-memory killer.

## 1. Define Portable Paths

The project README records paths from the original test machine. Instead of copying machine-specific absolute paths, create a reusable configuration under your own home directory:

```bash
mkdir -p "${HOME}/.config/gr00t-jp72"

cat > "${HOME}/.config/gr00t-jp72/paths.sh" <<'EOF'
export GR00T_WORKSPACE="${HOME}/gr00t-jp72"
export GR00T_REPO="${GR00T_WORKSPACE}/Isaac-GR00T-Orin-JP72"
export GR00T_CHECKPOINT="${GR00T_WORKSPACE}/checkpoints/checkpoint-10000"
export GR00T_DATASET="${GR00T_WORKSPACE}/datasets/grab_tube_0_eval"
export GR00T_BACKBONE="${GR00T_WORKSPACE}/models/Qwen/Qwen3-VL-2B-Instruct"
export GR00T_TRT_OUTPUT="${GR00T_WORKSPACE}/artifacts/rebot_trt"
EOF

source "${HOME}/.config/gr00t-jp72/paths.sh"
mkdir -p \
  "$(dirname "${GR00T_REPO}")" \
  "$(dirname "${GR00T_CHECKPOINT}")" \
  "$(dirname "${GR00T_DATASET}")" \
  "$(dirname "${GR00T_BACKBONE}")" \
  "${GR00T_TRT_OUTPUT}"
```

Run the following command in every new terminal before using the variables:

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
```

You may change the values in `paths.sh` to place large files on an NVMe SSD. Keep the repository, model, dataset, and output paths separate.

## 2. Clone the JetPack 7.2 Repository

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"

git clone https://github.com/jjjadand/Isaac-GR00T-Orin-JP72.git "${GR00T_REPO}"
cd "${GR00T_REPO}"
git checkout 93d711e3d56ca054d1cd41b12115a37ae57b46f6
```

If the repository already exists, verify its current revision:

```bash
git -C "${GR00T_REPO}" rev-parse HEAD
git -C "${GR00T_REPO}" status --short
```

Do not switch revisions while an ONNX export or engine build is in progress.

## 3. Prepare the Required Inputs

### 3.1 Finetuned GR00T N1.7 Checkpoint

Copy your finetuned checkpoint into `${GR00T_CHECKPOINT}`. The inference checkpoint requires the GR00T configuration, statistics, and model shards. A typical layout is:

```text
checkpoint-10000/
├── config.json
├── embodiment_id.json
├── model-00001-of-00003.safetensors
├── model-00002-of-00003.safetensors
├── model-00003-of-00003.safetensors
├── model.safetensors.index.json
├── processor_config.json
└── statistics.json
```

Training-state files such as `optimizer.pt`, `scheduler.pt`, and `trainer_state.json` are not required for inference or ONNX export.

Validate the configured path:

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
test -f "${GR00T_CHECKPOINT}/config.json"
test -f "${GR00T_CHECKPOINT}/processor_config.json"
test -f "${GR00T_CHECKPOINT}/statistics.json"
```

### 3.2 Download the Local Qwen3-VL Backbone

The N1.7 policy still requires the compatible backbone architecture, tokenizer, and image processor. This repository supports a fully local backbone through `GR00T_BACKBONE_PATH`, so a Hugging Face login is not required during export or inference.

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"

uv tool run --from modelscope modelscope download \
  Qwen/Qwen3-VL-2B-Instruct \
  --local-dir "${GR00T_BACKBONE}"
```

Confirm that the main model file and configuration are present:

```bash
test -f "${GR00T_BACKBONE}/config.json"
test -f "${GR00T_BACKBONE}/model.safetensors"
ls -lh "${GR00T_BACKBONE}/model.safetensors"
```

The `model.safetensors` file is approximately 4.25 GB in the tested download.

### 3.3 Prepare the Local LeRobot Dataset

The offline dry-test accepts a local LeRobot v2/v2.1 dataset through `--dataset-path`. For the validated RS-Rebot example, the minimum layout is:

```text
grab_tube_0_eval/
├── data/chunk-000/episode_000000.parquet
├── videos/chunk-000/observation.images.front/episode_000000.mp4
├── videos/chunk-000/observation.images.side/episode_000000.mp4
└── meta/
    ├── episodes.jsonl
    ├── info.json
    ├── modality.json
    ├── stats.json
    └── tasks.jsonl
```

The provided example expects:

- embodiment tag: `NEW_EMBODIMENT`;
- camera keys: `front` and `side`;
- state and action dimensions: 7;
- action horizon: 16.

The checkpoint's `processor_config.json` and the dataset's `meta/modality.json` must describe compatible state, action, and video modalities.

:::tip
Pass the local directory with `--dataset-path`. Do not provide a local folder to an option that expects a Hugging Face repository ID, because it may trigger an unnecessary Hub request and return an HTTP 401 error.
:::

## 4. Install the JetPack 7.2 Environment

### 4.1 Install System Packages

JetPack 7.2 must already provide CUDA, TensorRT, cuDNN, and the TensorRT Python bindings.

```bash
sudo apt-get update
sudo apt-get install -y --no-install-recommends \
  ffmpeg \
  libopenblas0-pthread \
  python3.12-venv \
  python3-dev
```

Check the platform packages:

```bash
cat /etc/nv_tegra_release
/usr/local/cuda-13.2/bin/nvcc --version
dpkg-query -W python3-libnvinfer libnvinfer10 tensorrt
```

The validated environment reports L4T R39.2, CUDA 13.2, and TensorRT 10.16.

### 4.2 Create a Dedicated Python Environment

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
cd "${GR00T_REPO}"

curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="${HOME}/.local/bin:${PATH}"

uv venv --python /usr/bin/python3.12 .venv-jp72
```

Do not reuse the repository's `.venv`, which may contain packages built for a different Jetson platform.

### 4.3 Install the Tested Orin PyTorch Wheels

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/f36/0db283b1249b3/torch-2.8.0-cp312-cp312-linux_aarch64.whl" \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/255/341cb5beb4673/torchvision-0.23.0-cp312-cp312-linux_aarch64.whl"
```

Install the CUDA 12.9 runtime libraries required by the PyTorch wheel:

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" \
  nvidia-cublas-cu12==12.9.2.10 \
  nvidia-cuda-cupti-cu12==12.9.79 \
  nvidia-cuda-nvrtc-cu12==12.9.86 \
  nvidia-cuda-runtime-cu12==12.9.79 \
  nvidia-cufft-cu12==11.4.1.4 \
  nvidia-curand-cu12==10.3.10.19 \
  nvidia-cusolver-cu12==11.7.5.82 \
  nvidia-cusparse-cu12==12.5.10.65 \
  nvidia-nvjitlink-cu12==12.9.86
```

### 4.4 Install the GR00T Dependencies

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" \
  accelerate==1.12.0 \
  albumentations==1.4.18 \
  av==16.1.0 \
  build==1.4.0 \
  click==8.1.8 \
  cryptography==46.0.7 \
  datasets==3.6.0 \
  dm-tree==0.1.8 \
  einops==0.8.1 \
  gitpython==3.1.50 \
  gymnasium==1.2.2 \
  "huggingface-hub[cli]==0.36.2" \
  jsonlines==4.0.0 \
  lmdb==1.7.5 \
  matplotlib==3.10.1 \
  msgpack==1.1.0 \
  msgpack-numpy==0.4.8 \
  numpy==1.26.4 \
  omegaconf==2.3.0 \
  onnx==1.20.1 \
  onnxscript==0.6.2 \
  opencv-python-headless==4.11.0.86 \
  pandas==2.2.3 \
  peft==0.17.1 \
  pytest==9.0.3 \
  pytest-timeout==2.4.0 \
  pyzmq==27.0.1 \
  ruff==0.15.1 \
  safetensors==0.7.0 \
  scipy==1.15.3 \
  termcolor==3.2.0 \
  transformers==4.57.6 \
  tyro==0.9.17 \
  wandb==0.23.0

uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/c46/66317287eb28a/diffusers-0.36.0.dev0-py3-none-any.whl"

uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps -e "${GR00T_REPO}"
```

Do not install TorchCodec for this tested configuration. PyAV 16 is used with JetPack 7.2's FFmpeg 8 to decode the dataset videos. Flash Attention is optional and was not installed in the validated environment.

### 4.5 Expose the System TensorRT Python Package

Use Python to determine the environment's actual `site-packages` path instead of hard-coding a username:

```bash
GR00T_SITE_PACKAGES="$("${GR00T_REPO}/.venv-jp72/bin/python" -c 'import site; print(site.getsitepackages()[0])')"

printf '%s\n' '/usr/lib/python3.12/dist-packages' \
  > "${GR00T_SITE_PACKAGES}/jetpack_system_packages.pth"
```

## 5. Activate and Validate

Run the following block in each new shell:

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
cd "${GR00T_REPO}"

deactivate 2>/dev/null || true
source .venv-jp72/bin/activate
source scripts/activate_orin_jp72.sh

# Override the original test-machine path configured by the activation script.
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE}"
hash -r
```

Validate the interpreter, GPU architecture, TensorRT binding, backbone, and video backend:

```bash
python - <<'PY'
import os
import sys

import tensorrt
import torch

print("python:", sys.executable)
print("torch:", torch.__version__)
print("torch CUDA:", torch.version.cuda)
print("GPU:", torch.cuda.get_device_name(0))
print("architectures:", torch.cuda.get_arch_list())
print("TensorRT:", tensorrt.__version__)
print("backbone:", os.environ["GR00T_BACKBONE_PATH"])
print("video backend:", os.environ["GR00T_VIDEO_BACKEND"])

assert sys.executable.endswith("/.venv-jp72/bin/python")
assert "sm_87" in torch.cuda.get_arch_list()
assert os.environ["GR00T_VIDEO_BACKEND"] == "pyav"
PY
```

Expected key values include PyTorch 2.8.0, PyTorch CUDA 12.9, `sm_87`, TensorRT 10.16.2.10, and the `pyav` backend.

:::warning
Use the activated environment's plain `python` command. Avoid `uv run python` after installation because it may synchronize the repository's default project environment and replace working Jetson-specific packages.
:::

## 6. Run the PyTorch Smoke Test

Before exporting, verify that the checkpoint, local backbone, dataset, video decoder, and CUDA forward pass work together:

```bash
python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --steps 1 \
  --execution-horizon 16 \
  --denoising-steps 4 \
  --inference-mode pytorch \
  --save-plot-path /tmp/rebot_pytorch_smoke.jpeg
```

Do not continue to TensorRT export until this command can load one dataset observation and generate an action prediction.

## 7. Export the Complete Model to ONNX

Export all seven components with a static batch size of 1:

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps export
```

The validated export takes approximately two minutes. Confirm that the ONNX directory contains seven graphs and the export metadata:

```bash
find "${GR00T_TRT_OUTPUT}/onnx" -maxdepth 1 -type f \
  -printf '%f %s bytes\n' | sort
```

Keep `dit_bf16.onnx.data` beside `dit_bf16.onnx`; it contains external tensor data used by the DiT graph.

## 8. Build the Seven TensorRT Engines

Build the engines on the target AGX Orin. TensorRT engines are tied to the GPU architecture, TensorRT version, graph shapes, and batch size.

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps build
```

The validated build took approximately 3 minutes 37 seconds and generated:

```text
action_decoder.engine
action_encoder.engine
dit_bf16.engine
llm_bf16.engine
state_encoder.engine
vit.engine
vl_self_attention.engine
```

Verify the engine directory:

```bash
find "${GR00T_TRT_OUTPUT}/engines" -maxdepth 1 -type f \
  -printf '%f %s bytes\n' | sort
```

Rebuild after changing the checkpoint, input camera layout or resolution, action horizon, batch size, GPU, CUDA/TensorRT installation, or ONNX graphs.

## 9. Verify TensorRT Against PyTorch

Run the repository's numerical verification stage:

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps verify
```

The validated run produced:

| Comparison | Cosine similarity |
| --- | ---: |
| ViT output | 0.995977 |
| Backbone output | 0.999958 |
| Final action | 0.997426 |
| Verification status | PASS |

Treat these values as a reproduction reference. A different finetuned checkpoint, dataset sample, or dependency revision may produce slightly different values.

## 10. Run Full-TensorRT Offline Inference

The following command loads trajectory 0 and predicts two 16-action chunks. It does not initialize the RS-Rebot hardware runner.

```bash
python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --steps 32 \
  --execution-horizon 16 \
  --denoising-steps 4 \
  --skip-timing-steps 1 \
  --inference-mode trt_full_pipeline \
  --trt-engine-path "${GR00T_TRT_OUTPUT}/engines" \
  --save-plot-path /tmp/rebot_trt_result.jpeg
```

A successful run includes messages similar to:

```text
N1.7 full-pipeline TRT engines loaded.
  ViT: TRT | LLM: TRT | Action Head: TRT
All inference steps completed for current trajectory-id 0
pred_action_joints vs time (32, 7)
Done
```

The validated warm inference time was **0.2755 seconds per 16-action prediction chunk**, or approximately **3.63 chunks per second**. This result applies to the tested checkpoint, dataset shape, engine configuration, and AGX Orin operating conditions.

The script's MSE and MAE values compare model predictions with recorded dataset actions. They are not TensorRT conversion-error metrics; use the cosine verification stage for PyTorch-versus-TensorRT agreement.

## 11. Safe Warnings

### `libnvjpeg.so.12` from TorchVision

The tested dataset path uses PyAV and FFmpeg rather than `torchvision.io`. This warning does not block the validated inference workflow.

### `flash_attn is not installed`

The reference PyTorch model uses SDPA during loading and export. Full-pipeline inference replaces the ViT, LLM, and action components with TensorRT engines.

### `lm_head.weight` is newly initialized

GR00T consumes the backbone hidden states rather than the language-generation head. The finetuned policy checkpoint supplies the weights used by action inference.

## 12. Troubleshooting

### `torch._C` has no `_dlpack_exchange_api`

The wrong environment is active. Check the interpreter:

```bash
which python
python -c "import sys; print(sys.executable)"
```

The path must end with `${GR00T_REPO}/.venv-jp72/bin/python`. Reactivate the environment and run `source scripts/activate_orin_jp72.sh` again.

### Hugging Face HTTP 401

Confirm that the local backbone override was applied after the repository activation script:

```bash
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE}"
export HF_HUB_OFFLINE=1
export TRANSFORMERS_OFFLINE=1

test -f "${GR00T_BACKBONE_PATH}/config.json"
test -f "${GR00T_BACKBONE_PATH}/model.safetensors"
```

### TorchCodec or FFmpeg Import Failure

Confirm that PyAV is selected:

```bash
python -c "import os, av; print(os.environ['GR00T_VIDEO_BACKEND'], av.__version__)"
```

Expected output begins with `pyav 16.1.0`.

### Engine Shape or Deserialization Error

Do not copy engines from another GPU or TensorRT installation. Check that `export_metadata.json` accompanies the engine output and rebuild ONNX and TensorRT artifacts on the target device.

### TensorRT Build Runs Out of Memory

1. Close unrelated GPU applications and model servers.
2. Keep `--workspace 4096` rather than increasing it immediately.
3. Build stages sequentially.
4. Confirm sufficient storage and memory with `df -h`, `free -h`, and `tegrastats`.
5. Reboot into a clean session if memory remains fragmented after repeated failed builds.

## 13. Moving Toward Robot Control

The validated command is intentionally an offline dry-test. Before connecting a physical robot:

1. compare TensorRT and PyTorch action trajectories on recorded episodes;
2. confirm joint order, units, scaling, limits, and embodiment metadata;
3. clamp all generated commands to safe joint and velocity limits;
4. implement emergency stop, command timeout, and stale-observation detection;
5. test with actuators disabled or unloaded;
6. begin with low-speed, short-horizon actions;
7. record latency, memory, power, temperature, and task success rate.

Do not reuse the offline command as a robot controller without a hardware-specific safety layer.

## Reproduction Checklist

- [ ] JetPack 7.2 / L4T R39.2 is installed.
- [ ] CUDA 13.2 and TensorRT 10.16 are visible.
- [ ] The repository is cloned at the documented revision.
- [ ] `.venv-jp72` uses Python 3.12 and the Orin `sm_87` PyTorch wheel.
- [ ] The local Qwen3-VL backbone loads without a Hub request.
- [ ] The checkpoint and LeRobot dataset modalities match.
- [ ] The PyTorch smoke test succeeds.
- [ ] Seven ONNX graphs are exported.
- [ ] Seven TensorRT engines are generated on the target Orin.
- [ ] Numerical verification reports PASS.
- [ ] Offline full-TensorRT inference completes and saves the plot.

## Related Resources

- [JetPack 7.2 Resource Hub](/jetpack_7_2_resource_hub/)
- [JetPack 7.2 Memory Optimization](/jetpack_7_2_memory_optimization/)
- [Deploy TensorRT Edge-LLM on JetPack 7.2](/deploy_tensorrt_edge_llm_on_jetpack7.2/)
- [Fine-tune GR00T N1.7 for reBot Arm and Deploy on Jetson Thor](/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [JetPack 7.2 Deep Dive](/jetpack72_deep_dive_bk/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
