---
description: "SO-ARM101 Sim-to-Real VLA 课程第 18 章 —— 在 Jetson 上运行 GR00T N1.7 TensorRT 推理：构建七个目标专属引擎、离线评估、启动边缘策略服务。"
title: 第 18 章 - 运行 GR00T N1.7 TensorRT 推理
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Jetson
  - TensorRT
  - GR00T N1.7
  - 边缘部署
  - 课程
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
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_18/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 4 · 第 18 章 · Deploy on Jetson</span>
    <h2>18. 运行 GR00T N1.7 TensorRT 推理</h2>
    <p>
      把微调后的策略导出为七个目标专属 TensorRT 引擎，离线验证，然后在
      Jetson 上为 SO-101 从臂提供策略服务。
    </p>
    <div className="hero-actions">
      <a href="#prereq">前置条件</a>
      <a href="#build">构建引擎</a>
      <a href="#offline">离线推理</a>
      <a href="#serve">策略服务</a>
      <a href="#troubleshoot">排错</a>
    </div>
  </div>
</section>

## 18.1 前置条件

<section id="prereq" className="section-card">
  <div className="section-title">
    <span>构建前检查</span>
    <h2>18.1 前置条件</h2>
  </div>

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"
git rev-parse HEAD
```

预期仓库修订：

```text
dcf5f6b759fd17cab3644a97fc4429bca7451e38
```

验证第 17 章的输入都在位：

```bash
test -f "${GR00T_MODEL_PATH}/config.json"
test -f "${GR00T_MODEL_PATH}/processor_config.json"
test -f "${GR00T_MODEL_PATH}/statistics.json"
test -f "${GR00T_DATASET_PATH}/meta/info.json"
test -f "${GR00T_DATASET_PATH}/meta/modality.json"
test -f "${GR00T_BACKBONE_PATH}/config.json"
```

:::caution 引擎严禁跨目标复制
TensorRT `.engine` 文件依赖 GPU 架构、TensorRT 版本、checkpoint、图形状、
精度与构建配置。每个目标构建自己的引擎。
:::

</section>

## 18.2 TensorRT 流水线产出

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>七个引擎</span>
    <h2>18.2 TensorRT 流水线产出</h2>
  </div>

完整流水线创建七个目标专属引擎：

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

## 18.3 在 Jetson AGX Orin 上构建

<section id="orin" className="section-card">
  <div className="section-title">
    <span>Orin 包装脚本</span>
    <h2>18.3 在 Jetson AGX Orin 上构建</h2>
  </div>

```bash
export GR00T_TARGET=orin
source "${HOME}/.config/gr00t-inference/paths.sh"
cd "${GR00T_REPO}"

bash scripts/deployment/orin_jp72/run_full_trt.sh prepare
bash scripts/deployment/orin_jp72/run_full_trt.sh verify
bash scripts/deployment/orin_jp72/run_full_trt.sh status
```

包装脚本会激活 `.venv-jp72`，加载 JetPack 7.2 CUDA 运行时路径，并把 Orin
引擎包构建到 `${GR00T_TRT_OUTPUT}` 下。

</section>

## 18.4 在 Jetson AGX Thor 上构建

<section id="thor" className="section-card">
  <div className="section-title">
    <span>Thor 流水线</span>
    <h2>18.4 在 Jetson AGX Thor 上构建</h2>
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

使用与第 10 章训练时相同的本体标签（`NEW_EMBODIMENT`）与 16 步动作视界。
即使与 Orin 共享 checkpoint 与数据集，也要构建独立的 Thor 输出目录。

</section>

## 18.5 运行离线推理

<section id="offline" className="section-card">
  <div className="section-title">
    <span>不接机器人</span>
    <h2>18.5 运行离线推理</h2>
  </div>

先用录制的轨迹离线验证引擎：

```bash
# Orin
bash scripts/deployment/orin_jp72/run_full_trt.sh evaluate
```

该命令对配置好的本地轨迹评估 TensorRT 流水线，并把结果写到
`${GR00T_RESULT_PATH}`。

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

使用与导出引擎时相同的本体标签与动作视界。

</section>

## 18.6 启动 TensorRT 策略服务

<section id="serve" className="section-card">
  <div className="section-title">
    <span>边缘端点</span>
    <h2>18.6 启动 TensorRT 策略服务</h2>
  </div>

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh serve
ss -ltn | grep ':5555'
```

默认端点是 `127.0.0.1:5555`。要开放其他地址：

```bash
export GR00T_SERVER_HOST=0.0.0.0
export GR00T_SERVER_PORT=5555
bash scripts/deployment/orin_jp72/run_full_trt.sh serve
```

把 SO-101 机器人客户端指向 Jetson。在 Jetson 本机——或同网络任意装有
workshop 评估脚本并接着从臂的机器上——用 Jetson 的地址运行第 11 章的
客户端：

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

至此，SO-101 从臂执行的是一个完全跑在 Jetson 上的策略。

校验引擎包：

```bash
find "${GR00T_TRT_OUTPUT}/engines" -maxdepth 1 -name '*.engine' -printf '%f\n' | sort
```

确认七个引擎都在，且验证过程没有形状或数值精度失败。

</section>

## 18.7 排错

<section id="troubleshoot" className="section-card">
  <div className="section-title">
    <span>常见问题</span>
    <h2>18.7 排错</h2>
  </div>

### Orin 上找不到 `libcusparseLt.so.0`

使用包装脚本，不要直接调用 `.venv-jp72/bin/python`：

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh evaluate
```

### Python 环境不对

```bash
which python
python -c "import sys; print(sys.executable)"
```

- Orin：`${GR00T_REPO}/.venv-jp72/bin/python`
- Thor：`${GR00T_REPO}/.venv/bin/python`

### 引擎形状或反序列化错误

更换 checkpoint、backbone、TensorRT 版本、精度、batch size、动作视界或图
形状后，删掉目标引擎并重建：

```bash
rm -rf "${GR00T_TRT_OUTPUT}/engines"
```

然后重跑对应的 Orin 或 Thor 构建命令。

### TensorRT 构建内存不足

```bash
free -h
df -h "${GR00T_WORKSPACE}"
sudo tegrastats
```

关闭其他 GPU 应用，确认工作区存储充足后再重建。

</section>

## 18.8 复现清单

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>最后关卡</span>
    <h2>18.8 复现清单</h2>
  </div>

- [ ] 仓库处于验证过的提交；
- [ ] checkpoint、backbone、数据集与本体配置齐全；
- [ ] Orin 用 `.venv-jp72`；Thor 用 `.venv`；
- [ ] 七个引擎在运行它们的目标上构建；
- [ ] 离线 TensorRT 推理完成并保存结果图；
- [ ] 策略服务仅在引擎包通过验证后启动；
- [ ] SO-101 从臂执行由 Jetson 策略服务驱动的任务。

返回课程概览：[SO-ARM101 Sim-to-Real VLA 课程](cn_Sim2Real_VLA_Introduction.md)。

</section>

</div>