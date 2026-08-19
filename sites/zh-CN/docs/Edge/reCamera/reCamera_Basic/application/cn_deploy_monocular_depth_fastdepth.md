---
description: 使用 TPU-MLIR 将 FastDepth 单目深度估计模型转换、量化并部署到 reCamera 的 CV181x TPU 上，并在设备端与 YOLO11n 同时运行，达到 54 FPS。
title: 部署单目深度估计（FastDepth INT8）
keywords:
  - 边缘
  - reCamera
  - 深度估计
  - FastDepth
  - 模型转换
  - TPU-MLIR
image: https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png
slug: /recamera_deploy_monocular_depth
sidebar_position: 19
last_update:
  date: 08/18/2026
  author: Zafar Khidoyatov
---

# 在 reCamera 上部署单目深度估计（FastDepth，INT8）

本指南将逐步讲解如何将单目深度估计模型 — [FastDepth](https://github.com/dwofk/fast-depth) — 转换、量化并部署到 reCamera 的 CV181x TPU 上，并在设备端运行。所有命令均在真实硬件上执行，所有数据均为实测结果。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png" alt="室内办公室画面及其 FastDepth INT8 深度热力图" />
</div>

你在最后可以预期的实测结果：

| 指标 | 结果 |
|---|---|
| 深度推理延迟（INT8，224×224） | **18.4 ms**（P50 18.36 / P95 18.46，n=300） |
| 仅深度模型 FPS | **54** |
| 深度 + YOLO11n 串行，每帧 | 53.9 ms → **18.5 FPS**（模型级） |
| INT8 相比 BF16 的精度损失（DIODE AbsRel） | **< 2%** |
| `.cvimodel` 大小 | 1.5 MB（INT8）/ 3.1 MB（BF16） |
| 连续 30 分钟烘烤测试 | 无崩溃、无漂移、内存稳定 |

:::note 相对深度，而不是米
FastDepth 预测的是**相对**深度，并在 NYU Depth V2 *室内*数据集上训练。室内场景中，它能给出正确的远近结构；室外场景的输出范围会被强烈压缩（见 [定性结果：可以期待什么](#定性结果-可以期待什么)）。不要把原始输出当作以米为单位的绝对距离。
:::

整体流程：ONNX → Top-MLIR（`model_transform`）→ INT8 标定表（`run_calibration`，500 张图片）→ 编译后的 `.cvimodel`（`model_deploy`，两个验证关卡）→ 设备端推理（`cviruntime`）。

## 前置条件

- reCamera 2002 系列（SG2002 SoC，CV181x TPU），通过 USB 连接（`192.168.42.1`），以 `recamera` 用户通过 ssh 访问
- 开发机上已安装 Docker
- TPU-MLIR 工具链容器：

```bash
docker pull sophgo/tpuc_dev:v3.4
docker run --rm -it -v $(pwd):/workspace sophgo/tpuc_dev:v3.4
```

在容器内，将 TPU-MLIR 安装到挂载目录上的虚拟环境中（这样容器重启后仍然保留）：

```bash
python3 -m venv /workspace/tpu_env
source /workspace/tpu_env/bin/activate
pip install "tpu_mlir[onnx]==1.28.1"
pip install psutil
pip install torch --index-url https://download.pytorch.org/whl/cpu
```

:::caution 两个安装陷阱

1. 安装 `[onnx]` extra，**不要**用 `[all]` — `tpu_mlir[all]==1.28.1` 固定了一个已从 PyPI 下架、无法再安装的 paddlepaddle 版本。
2. `psutil` 和 `torch` 是未声明的依赖 — 没有它们工具会在导入时崩溃。请使用仅 CPU 的 torch wheel（默认的 PyPI 包会拉下一整套数 GB 的 CUDA 组件，你并不需要）。

:::

验证：运行 `model_transform.py --help` 应该会打印 TPU-MLIR 的版本横幅。

## 步骤 1 — 获取 ONNX 模型

将 FastDepth（`mobilenet-nnconv5dw-skipadd-pruned` 变体）导出为 ONNX，固定输入为 1×3×224×224，opset ≥ 13，并通过 [onnxsim](https://github.com/daquexian/onnx-simplifier) 简化。简化后计算图只包含 `Conv / Clip / Relu / Resize / Add` — 这些在 CV181x 上都受 TPU-MLIR 支持。（在转换*之前*审查算子列表是个非常值得养成的习惯 — 见下文 [你的模型能在这颗芯片上跑吗？](#你的模型能在这颗芯片上跑吗)）

## 步骤 2 — 翻译为 Top-MLIR

FastDepth 期望的预处理是简单的 **resize + RGB + /255** — 没有 mean/std 归一化。你在这里声明一次预处理配方；它会被写入 `.mlir`，后续所有工具（标定、部署）都会自动复用它：

```bash
mkdir -p /workspace/build/fastdepth && cd /workspace/build/fastdepth
model_transform.py --model_name fastdepth \
  --model_def /workspace/fastdepth_224.onnx \
  --input_shapes [[1,3,224,224]] \
  --mean 0.0,0.0,0.0 \
  --scale 0.00392156862745098,0.00392156862745098,0.00392156862745098 \
  --pixel_format rgb \
  --test_input /workspace/test_image.jpg \
  --test_result fastdepth_top_outputs.npz \
  --mlir fastdepth_224.mlir
```

**你应该看到：** 与 ONNX 的逐层对比，最终所有层通过（`46/46`，余弦相似度约为 1.0）。

保留 `fastdepth_in_f32.npz` 和 `fastdepth_top_outputs.npz` — 它们是后面用于验证量化模型的冻结 float32 参考。

:::tip
`--test_input` 的扩展名检查区分大小写：`.JPG` 会以一个令人困惑的断言崩溃。请使用小写 `.jpg` — 对这个文件以及每一张标定图片都如此。
:::

## 步骤 3 — 构建标定数据集

这一部分是大多数教程会略过的，但它决定了你的 INT8 质量。量化会把 256 个等级分布到每一层在*标定图片上实际产生*的数值范围上。在推理时，超出记录范围的数值会被裁剪 — 信息在该层被破坏。所以数据集必须覆盖相机在真实使用中会看到的内容：

- **约 500 张图片**，主要是使用**目标 reCamera 本机**采集的帧（白天 / 室内 / 夜晚 / 逆光），再补充一些公开数据集（例如 [DIODE](https://diode-dataset.org/) 验证集图片）
- 在录制中均匀抽帧 — 绝不要使用连续的近似重复帧
- **与部署完全相同的预处理**：提供原始图片，让工具按 `.mlir` 中的配方处理 — 不要自己先做 resize
- 文件名使用小写 `.jpg`

:::caution
**MPEG-TS 的帧数是骗人的。** 从 `.ts` 录制中抽帧时，`CAP_PROP_FRAME_COUNT` 可能报告真实帧数的 3 倍 — 请通过顺序读取到文件末尾来统计帧数。
:::

生成标定表（500 张图片约需 3 分钟）：

```bash
run_calibration.py fastdepth_224.mlir \
  --dataset /workspace/calib_set --input_num 500 \
  -o fastdepth_cal_table
```

## 步骤 4 — 量化并编译

```bash
model_deploy.py --mlir fastdepth_224.mlir --quantize INT8 \
  --calibration_table fastdepth_cal_table --processor cv181x \
  --test_input fastdepth_in_f32.npz \
  --test_reference fastdepth_top_outputs.npz \
  --tolerance 0.85,0.45 \
  --model fastdepth_224_int8.cvimodel
```

该工具会运行**两个验证关卡** — 学会阅读它们，它们回答的是不同的问题：

| 关卡 | 对比对象 | 回答的问题 | FastDepth 结果 |
|---|---|---|---|
| 1 | 量化后的 MLIR vs float32 参考 | *量化是否破坏了数学计算？* | 余弦相似度 **0.9997** ✅ |
| 2 | 编译后的 `.cvimodel`（TPU 模拟器）vs 自身的量化 MLIR | *编译是否保持了数学计算？* | **EQUAL (1.0)** ✅ |

:::caution 关卡 2 不是走形式
代码生成可能会打印警告（例如 `cvkcv181x tiu ... wrong parameter`），并且**仍然报告 `[Success]`**，但实际生成的是数值错误的模型。
只有关卡 2 能抓住这种问题。如果关卡 1 通过但关卡 2 崩掉，你遇到的是模型与芯片兼容性问题，而不是量化问题 — 见 [你的模型能在这颗芯片上跑吗？](#你的模型能在这颗芯片上跑吗)
:::

为了获得精度参考，可以用同样方式构建一个 BF16 变体 — 去掉 `--calibration_table`，并使用 `--quantize BF16`（无需标定：BF16 保留真实数值范围）。

## 步骤 5 — 在 reCamera 上运行

reCamera 的系统镜像没有自带通用的 `.cvimodel` 运行器，因此我们使用一个基于 `cviruntime` API 的小型 C 程序，通过 [sscma-example-sg200x](https://github.com/Seeed-Studio/sscma-example-sg200x) 工具链交叉编译，并静态链接 SDK 中的 `libcviruntime-static.a` / `libcvikernel-static.a` / `libcvimath-static.a`。
该 API 十分精简：

```c
#include "cviruntime.h"

CVI_MODEL_HANDLE model = NULL;
CVI_NN_RegisterModel("fastdepth_224_int8.cvimodel", &model);

CVI_TENSOR *inputs, *outputs;
int32_t input_num, output_num;
CVI_NN_GetInputOutputTensors(model, &inputs, &input_num, &outputs, &output_num);

// fill inputs[0] with 1x3x224x224 float32 (RGB/255, CHW), then:
CVI_NN_Forward(model, inputs, input_num, outputs, output_num);
// outputs[0] now holds the 1x1x224x224 depth map (float32)

CVI_NN_CleanupModel(model);
```

<!-- LINK: full runner source (warm-up, P50/P95 timing, dual-model mode) — location TBD -->

主机侧预处理（Python — 生成原始输入文件）：

```python
import cv2
img = cv2.imread("frame.jpg")
img = cv2.resize(img, (224, 224))
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img = img.astype("float32") / 255.0
img.transpose(2, 0, 1).tofile("input.bin")
```

在相机上，TPU 需要 root 权限以及空闲的视频子系统：

```bash
sudo /etc/init.d/S93sscma-supervisor stop   # frees VPSS/ION held by the stock stack
sudo ./depth_runner fastdepth_224_int8.cvimodel input.bin depth_out.bin 300
```

**你应该会看到**（来自我们设备的真实输出）：

```
model registered: fastdepth_224_int8.cvimodel (target cv181x)
input : name=data fmt=FP32 count=150528 shape=[1,3,224,224]
output: name=decode_conv6/2_Relu_f32 fmt=FP32 count=50176 shape=[1,1,224,224]
depth latency over 300 runs (after 20 warm-up): mean 18.38 ms  P50 18.36 ms  P95 18.46 ms  (54.41 fps mean)
```

将结果可视化为热力图：

```python
import cv2, numpy as np
d = np.fromfile("depth_out.bin", dtype="float32").reshape(224, 224)
g = ((d - d.min()) / (d.max() - d.min()) * 255).astype("uint8")
cv2.imwrite("depth_map.png", cv2.applyColorMap(g, cv2.COLORMAP_INFERNO))
```

## 基准测试结果

所有数据：224×224 输入，预处理同上，20 次推理预热，300 次测量运行，在设备端（CV181x TPU）：

| 基准项 | mean | P50 | P95 | FPS |
|---|---|---|---|---|
| FastDepth INT8 | 18.38 ms | 18.36 | 18.46 | 54.4 |
| FastDepth BF16 | 19.55 ms | 19.54 | 19.58 | 51.2 |
| YOLO11n 检测 INT8（原始模型） | 35.51 ms | 35.50 | 35.53 | 28.2 |
| FastDepth INT8 + YOLO11n，串行 | 53.90 ms | 53.88 | 53.99 | 18.5 |

有三点结论值得了解：

- **TPU 是确定性的** — 所有变体中 P95 − P50 ≤ 0.1 ms。无需为抖动做工程处理。
- **共驻是“免费的”** — 与 YOLO 同时加载只让深度模型多花 +0.01 ms。连续 30 分钟的联合运行：无崩溃、无延迟漂移、内存稳定。
- **INT8 相比 BF16 的速度优势只有约 6%** —— 在这个模型规模下，TPU 受限于带宽，因此 INT8 主要带来的收益是*模型尺寸减半*。两种精度都可用；在 DIODE 上（按缩放和平移对齐）测得 INT8 相比 BF16 的 AbsRel 差异 < 2%，远低于典型的 5% 预算。

## 定性结果（可以预期什么）

- **室内**（分布内）：全局结构正确——最近的物体最暗，远处墙面较亮，最深的走廊最亮。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-indoor-office-result.png" alt="Indoor office frame beside its FastDepth INT8 depth heatmap" />
</div>

- **室外**：对在 NYU 上训练的 FastDepth 来说属于分布外——深度范围会急剧压缩（40 m 的街道被映射到约 3 个单位的跨度），结构变得粗糙。最多只能用于粗略的远近提示。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-outdoor-street-result.png" alt="Outdoor street frame beside its FastDepth INT8 depth heatmap showing range compression" />
</div>

- **夜间**：在没有红外补光的相机上，路灯照明场景会产生粗糙的斑块，并且是所有情况中范围压缩最严重的；完全无光场景的输入接近全黑，没有意义。

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-batch-results-a.png" alt="Night scenes with FastDepth depth maps" />
  <img width="500" src="https://files.seeedstudio.com/wiki/solution/recamera/recamera-fastdepth-batch-results-b.png" alt="Outdoor day scenes with FastDepth depth maps" />
</div>

如果你的产品需要高质量的室外或夜间深度，请规划在目标域上进行微调，或从更强的教师模型（例如 Depth Anything V2）蒸馏到适合芯片的学生网络结构。

## 你的模型能在这颗芯片上跑吗？

成功转换并**不等于**正确运行。本项目中的一个真实案例：**ZipDepth**（一个面向 NPU 的深度模型）量化本身是正确的：Gate 1 余弦相似度在 INT8 *和* BF16 中都 ≥ 0.998，但它的条带池化注意力使用了形状为 `[48,1]`、`[1,48]`（步长 48）和 `[24,24]` 的平均池化：大于 CV181x TIU 池化单元可编码的范围。代码生成打印了四次 `cvkcv181x tiu avg pool: wrong parameter`（每个池化一次），仍然报告成功，而编译出的模型输出噪声——只被 Gate 2（负 SQNR）捕获。这个失败与精度无关，因此没有任何混合 INT8/BF16 量化表可以绕过它。

在你为 reCamera 确定一个深度模型之前的检查清单：

- ✅ 先审查 ONNX 算子列表（Netron 是你的朋友）；优先选择由小卷积构成的网络结构
- ⚠️ 避免大尺寸或条带形状的**平均池化**——小的 `MaxPool`（例如 SPPF 的 5×5）可以正常编译
- ✅ 始终传入 `--test_input/--test_reference`，以便两个 gate 都能运行
- 如果 Gate 1 通过但 Gate 2 在伴随池化警告的情况下失败：在能适配这颗芯片之前，该模型需要在结构上做“外科手术”（例如把一个大池化精确分解为一串小池化——对等分组的均值的均值仍然是整体均值）

## 故障排查

| 症状 | 原因 | 解决方法 |
|---|---|---|
| 相机上出现 `Assertion failed ... device_init` | 默认 AI 栈占用了 TPU/ION 内存 | 运行 `sudo /etc/init.d/S93sscma-supervisor stop`，并使用 `sudo` 运行 |
| 容器中出现 `model_runner.py: not found` | venv 未激活 | 运行 `source /workspace/tpu_env/bin/activate` |
| 安装 `tpu_mlir[all]` 失败 | 上游固定依赖了已被删除的 paddlepaddle | 改为安装 `tpu_mlir[onnx]` |
| 在有效图像上触发 `--test_input` 断言 | `.JPG` 扩展名为大写 | 重命名为小写 `.jpg` |
| Gate 2 失败，Gate 1 通过 | 代码生成/芯片不兼容（检查是否有 `wrong parameter` 警告） | 参见 [你的模型能在这颗芯片上跑吗？](#你的模型能在这颗芯片上跑吗？) |
| 帧提取读取的帧数少于预期 | `.ts` 元数据中的帧计数错误 | 通过顺序读取进行计数 |

## 资源

[FastDepth](https://github.com/dwofk/fast-depth)

[TPU-MLIR](https://github.com/sophgo/tpu-mlir)

[DIODE dataset](https://diode-dataset.org/)

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera example (cross-compile toolchain)](https://github.com/Seeed-Studio/sscma-example-sg200x)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
