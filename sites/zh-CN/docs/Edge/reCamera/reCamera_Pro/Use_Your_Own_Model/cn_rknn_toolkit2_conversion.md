---
description: 将 ONNX 模型转换为适用于 reCamera Pro 的 RKNN 格式，并使用具有代表性的校准数据集创建 INT8 量化模型。
title: 转换和量化模型
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - RKNN-Toolkit2
  - RV1126B
  - model quantization
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rknn_model_conversion
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_rknn_model_conversion/
---

# 使用 RKNN-Toolkit2 为 reCamera Pro 转换和量化模型

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/Model_Conversion/20260903-190057.png" alt="Workflow of converting and quantizing ONNX models to RKNN format for reCamera Pro" /></div>

## 介绍

reCamera Pro 使用 Rockchip RV1126B。要在其 NPU 上运行自定义神经网络模型，需要先将模型导出为 ONNX，然后在 x86_64 Linux PC 或 WSL 环境中将其编译为面向 **RV1126B** 的 RKNN 模型。

本指南将创建一个 FP16 基线模型和一个 INT8 量化模型。转换过程在主机 PC 上完成；仅在最终验证和部署时才需要连接 reCamera Pro。

:::note 开始之前
本指南使用 **RKNN-Toolkit2 2.3.2**、Python 3.10，以及 `target_platform='rv1126b'`。请保持 Toolkit 版本与 reCamera Pro 固件中提供的 RKNN Runtime 一致。不要使用针对其他 reCamera 产品或 Rockchip SoC 的说明。
:::

---

## 1. 环境要求

本指南示例中使用的配置如下：

- 一台 x86_64 Linux PC 或 WSL 2 环境。不要在 reCamera Pro 本机上转换模型。
- Python 3.10。
- 适用于 x86_64 的 [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) **2.3.2** 及其捆绑依赖。
- 一个已知输入形状、预处理方式和输出语义的 ONNX 模型。
- 对于 INT8 量化：具有代表性的校准图像。不需要标签。

Python 版本可以更换。RKNN-Toolkit2 当前支持 Python 3.6 到 3.12。请安装与你的 Python 版本匹配的 wheel；wheel 文件名中 `cp` 后的数字标识其对应的 CPython 版本。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/Model_Conversion/image.png" alt="RKNN-Toolkit2 Python wheel version example" /></div>

在转换之前，记录模型来源和许可证、导出命令、校验和、输入布局、颜色顺序、缩放策略、归一化方式以及后处理方式。这些构成了模型契约，你的 reCamera Pro 应用必须严格复现。

:::tip 推荐工作流
务必先生成 FP16 模型。它是检查计算图和预处理的基线，在此之后再排查 INT8 的精度或性能问题。
:::

---

## 2. 准备 RKNN-Toolkit2

从 [Rockchip 官方仓库](https://github.com/airockchip/rknn-toolkit2)下载 **2.3.2** 版本。在发布包中，选择 `rknn-toolkit2/packages/x86_64` 下与 CPython 3.10 匹配的 wheel 和依赖。

创建一个隔离环境并安装该 wheel。将 `PATH_TO_TOOLKIT` 和 wheel 文件名替换为你下载包中的实际路径。

```bash
python3.10 -m venv rknn-2.3.2
source rknn-2.3.2/bin/activate

python -m pip install --upgrade pip
python -m pip install -r PATH_TO_TOOLKIT/rknn-toolkit2/packages/x86_64/requirements_cp310*.txt
python -m pip install PATH_TO_TOOLKIT/rknn-toolkit2/packages/x86_64/rknn_toolkit2-2.3.2-*-cp310-*.whl

python -c "from rknn.api import RKNN; print('RKNN-Toolkit2 import succeeded')"
```

:::caution 使用主机端转换工具包
RKNN-Toolkit2 是主机端的转换工具包。不要使用 `rknn-toolkit-lite2` 进行转换；它用于在受支持的目标系统上运行模型。面向 RV1126B 的 `.rknn` 必须使用 `target_platform='rv1126b'` 构建。
:::

---

## 3. 确认 ONNX 输入契约

优先使用静态 batch=1 的 ONNX 输入。使用 [Netron](https://netron.app/)、ONNX checker、`model-inspect` 或其导出程序检查模型。请从原始模型实现中确认以下数值；不要仅凭文件名推断。

| 项目 | 示例 | 重要性说明 |
| --- | --- | --- |
| 输入名称和形状 | `images`，`[1, 3, 640, 640]` | `load_onnx()` 所需 |
| 布局 | NCHW 或 NHWC | 必须与导出的计算图一致 |
| 通道顺序 | RGB 或 BGR | 通道交换会严重降低精度 |
| 输入范围和归一化 | `[0,255]` 到 `[0,1]` | 必须且只能应用一次 |
| 缩放策略 | 拉伸、裁剪或 letterbox | 运行时必须完全一致 |
| 输出和后处理 | 分数、框、掩码等 | 用于解释预测结果 |

例如，如果应用提供的是 `[0,255]` 范围内的 uint8 RGB 像素，而模型期望 `[0,1]` 范围内的浮点数，则使用 `mean_values=[[0, 0, 0]]` 和 `std_values=[[255, 255, 255]]`。RKNN 会应用 `(input - mean) / std`。如果归一化已经在 ONNX 计算图内部完成，则使用恒等值（`mean=[0,0,0]`，`std=[1,1,1]`），以避免重复归一化。

使用 `model-inspect` 检查模型的输入和输出：

```bash
pip install model-inspect-tool

model-inspect ./yolov8n.onnx
```

下面展示一个示例输出：

```text
Format:  onnx
Path:    /home/yylin/rknn_test/rknn_model_zoo/examples/yolov8/model/yolov8n.onnx
Backend: onnx
Dynamic: false

Inputs:
  name=images, shape=[1, 3, 640, 640], dtype=float

Outputs:
  name=318, shape=[1, 64, 80, 80], dtype=float
  name=onnx::ReduceSum_326, shape=[1, 80, 80, 80], dtype=float
  name=331, shape=[1, 1, 80, 80], dtype=float
  name=338, shape=[1, 64, 40, 40], dtype=float
  name=onnx::ReduceSum_346, shape=[1, 80, 40, 40], dtype=float
  name=350, shape=[1, 1, 40, 40], dtype=float
  name=357, shape=[1, 64, 20, 20], dtype=float
  name=onnx::ReduceSum_365, shape=[1, 80, 20, 20], dtype=float
  name=369, shape=[1, 1, 20, 20], dtype=float
```

---

## 4. 直接将 Ultralytics YOLO 模型导出为 RKNN

对于 Ultralytics YOLO 模型，可以由 Ultralytics 直接导出为 RKNN。它会为你创建中间 ONNX 模型并调用 RKNN-Toolkit2，因此你无需编写单独的 ONNX 转换脚本。

在前面准备好的 RKNN-Toolkit2 环境中安装 Ultralytics：

```bash
python -m pip install ultralytics
```

下面的示例为 reCamera Pro 导出一个 FP16 RKNN 模型。将 `yolo11n.pt` 替换为你训练得到的 checkpoint，例如 `runs/detect/train/weights/best.pt`。

```python
from ultralytics import YOLO

model = YOLO('yolo11n.pt')
model.export(format='rknn', name='rv1126b', imgsz=640)
```

等效的命令行用法：

```bash
yolo export model=yolo11n.pt format=rknn name=rv1126b imgsz=640
```

导出通常会创建一个类似 `yolo11n_rknn_model/` 的目录，其中包含一个类似 `yolo11n-rv1126b.rknn` 命名的 RKNN 文件。这里的 `name='rv1126b'` 用于选择 Rockchip 目标平台；它不是输出目录名称。

要创建 INT8 模型，请传入 `quantize=8` 以及具有代表性的 YOLO 数据集的 YAML 定义。Ultralytics 会使用该数据集中的图像路径生成 RKNN-Toolkit2 所需的校准列表。

```python
from ultralytics import YOLO

model = YOLO('runs/detect/train/weights/best.pt')
model.export(
    format='rknn',
    name='rv1126b',
    imgsz=640,
    quantize=8,
    data='path/to/data.yaml',
)
```

```bash
yolo export model=runs/detect/train/weights/best.pt format=rknn name=rv1126b imgsz=640 quantize=8 data=path/to/data.yaml
```

:::caution INT8 需要校准数据
`data` 必须指向一个有效的 YOLO 数据集 YAML，且其中的图像路径必须能从主机访问。请使用能代表 reCamera Pro 部署场景的图像，并保留单独的留出图像用于精度评估。Ultralytics 不会将导出成功视为任务精度或设备性能的保证。
:::

:::tip 直接导出与手动工作流
对于快速导出 Ultralytics YOLO，可使用此路径。当你的模型不是 Ultralytics 模型、需要对 Toolkit2 设置进行精细控制，或需要诊断导出的 ONNX 计算图时，请使用下面的 ONNX 工作流。
:::

---

## 5. 创建 FP16 RKNN 基线模型

创建 `convert_onnx_to_rknn.py`。根据你的模型修改模型路径、输入名称、形状和归一化方式。

```python
from rknn.api import RKNN

ONNX_MODEL = 'model.onnx'
RKNN_MODEL = 'model-fp16-rv1126b.rknn'

rknn = RKNN(verbose=True)

# Example only: uint8 RGB [0,255] becomes model-domain [0,1].
rknn.config(
    target_platform='rv1126b',
    mean_values=[[0, 0, 0]],
    std_values=[[255, 255, 255]],
)

ret = rknn.load_onnx(
    model=ONNX_MODEL,
    inputs=['images'],                     # Replace with your ONNX input name.
    input_size_list=[[1, 3, 640, 640]],    # Replace with your static shape.
)
if ret != 0:
    raise RuntimeError('Failed to load ONNX model')

# No calibration dataset: build a non-quantized FP16 baseline.
ret = rknn.build(do_quantization=False)
if ret != 0:
    raise RuntimeError('Failed to build RKNN model')

if rknn.export_rknn(RKNN_MODEL) != 0:
    raise RuntimeError('Failed to export RKNN model')
rknn.release()
print(f'Created {RKNN_MODEL}')
```

```bash
python convert_onnx_to_rknn.py
sha256sum model-fp16-rv1126b.rknn
```

如果工具包报告不支持的算子、动态输入或无效计算图，请修复或重新导出 ONNX 模型。不要仅为让构建完成而删除算子。

---

## 6. 准备 INT8 校准数据集

INT8 校准图像必须与部署时的输入相似。一个实用的起点是使用大约 100–500 张图像，并覆盖预期的光照、背景、目标尺寸、视角、运动模糊、相机噪声以及重要的失败场景。请将校准图像与用于精度评估的图像分开保存。如果校准集过小，INT8 模型的结果可能会与原始 ONNX 模型有较大差异。

列表中每行一个图像路径；常用的输入格式包括 PNG、JPEG、BMP 和 NPY。

```bash
find calibration/images -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) \
  | sort > calibration/dataset.txt

wc -l calibration/dataset.txt
head -n 3 calibration/dataset.txt
```

:::caution 保持预处理一致
校准数据必须使用与推理相同的通道顺序、缩放策略和数值输入约定。不具代表性的图像、RGB/BGR 搞错或预处理不匹配，都会导致 INT8 精度大幅下降。
:::

---

## 7. 构建 INT8 RKNN 模型

将 FP16 脚本复制为 `convert_onnx_to_rknn_int8.py`，然后将模型名称和构建代码块替换为：

```python
RKNN_MODEL = 'model-int8-rv1126b.rknn'

ret = rknn.build(
    do_quantization=True,
    dataset='calibration/dataset.txt',
)
if ret != 0:
    raise RuntimeError('Failed to build INT8 RKNN model')
```

```bash
python convert_onnx_to_rknn_int8.py
sha256sum model-int8-rv1126b.rknn
```

默认的 INT8 配置通常是一个很好的首次测试。只有在测量它们对你的任务的影响之后，才去尝试量化算法、混合量化或权重量化压缩。

---

## 8. 部署前验证

成功执行 `build()` 和 `export_rknn()` 仅能确认 RKNN-Toolkit2 已为 RV1126B 编译好计算图。它本身**不能**证明任务精度、后处理是否正确，或设备端延迟是否达标。

1. 在保留样本上运行原始 ONNX 模型和 FP16 RKNN 配置；比较解码后的任务结果，而不仅仅是原始张量。
2. 在同一批样本上比较 FP16 和 INT8 的结果，并调查不可接受的精度回退。
3. 在 reCamera Pro 上，使用与固件匹配的 RKNN Runtime 加载导出的 `.rknn`。查询张量属性并验证输入类型、布局、尺寸、预处理和后处理。
4. 在设备上测量预热后的延迟和持续运行行为。

:::note 主机端验证的局限
主机端 RKNN 模拟器和 RV1126B NPU 是不同的执行环境。主机端对比可以检查转换和预处理；最终验收必须在 reCamera Pro 上测试导出的 `.rknn`。
:::

---

## 9. 故障排查

| 现象 | 优先检查 |
| --- | --- |
| `load_onnx()` 失败 | 验证 ONNX、导出器 opset、输入名称、静态形状以及 external-data 文件。 |
| 不支持的算子 | 重新导出或使用语义等价的受支持算子。 |
| INT8 构建失败 | 核实所有数据集路径、输入数量、dtype/shape 以及图像是否可读。 |
| INT8 精度较差 | 检查 RGB/BGR、缩放策略、mean/std、标定覆盖范围以及后处理。 |
| 主机正常但设备失败 | 确认 `rv1126b`、模型校验和、Toolkit/Runtime 2.3.2 是否匹配，以及张量属性。 |
| 设备推理速度慢 | 在预热后测量；检查预处理和后处理以及 NPU 执行情况。 |

## 10. 后续步骤

保留 ONNX 源文件、转换脚本、标定列表校验和、`.rknn` 校验和，以及与导出模型对应的预处理/后处理约定。接下来，将模型集成到 reCamera Pro 的 RKNN Runtime C API 中，并在设备上进行测试。
