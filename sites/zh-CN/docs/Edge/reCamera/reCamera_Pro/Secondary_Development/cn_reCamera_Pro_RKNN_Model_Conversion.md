---
description: 将 ONNX 模型转换为可在 reCamera Pro 上运行的 RKNN 格式，并使用代表性数据集完成 INT8 量化。
title: 转换和量化模型
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - RKNN-Toolkit2
  - RV1126B
  - 模型量化
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rknn_model_conversion
sku: 10003420
sidebar_position: 2
last_update:
  date: 08/28/2026
  author: Seeed Studio
createdAt: '2026-08-28'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/cn/recamera_pro_rknn_model_conversion/
---

# 使用 RKNN-Toolkit2 为 reCamera Pro 转换和量化模型

## 介绍

reCamera Pro 搭载 Rockchip RV1126B。要让自定义神经网络模型在其 NPU 上运行，需要先将模型导出为 ONNX，再在 x86_64 Linux PC 或 WSL 环境中将其编译为面向 **RV1126B** 的 RKNN 模型。

本文介绍一套可复现的流程：先生成 FP16 基线模型，再生成 INT8 量化模型。模型转换在主机 PC 上完成；只有在验证或部署导出的模型时才需要连接 reCamera Pro。

:::note 开始前请注意
本文使用 **RKNN-Toolkit2 2.3.2**、Python 3.10 和 `target_platform='rv1126b'`。请让 Toolkit 版本与 reCamera Pro 固件中提供的 RKNN Runtime 版本保持一致。请勿使用面向其他 reCamera 产品或其他 Rockchip SoC 的转换说明。
:::

---

## 1. 准备条件

这篇wiki中的使用示例的配置如下：

- 一台 x86_64 Linux 电脑或 WSL 2 环境。请勿直接在 reCamera Pro 上进行模型转换。
- Python 3.10。
- 用于 x86_64 的 [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) **2.3.2** 及其配套依赖。
- 已知输入形状、预处理方式和输出语义的 ONNX 模型。
- 若进行 INT8 量化：一组具有代表性的校准图像，无需标注。

其中的python版本可以修改，当前 RKNN-Toolkit2 工具支持的python版本为 3.6 ~ 3.12 版本，可以按照自己的系统版本的python版本安装不同版本的 whl 文件，文件名称中的cp后面带着的数字为对应的python版本。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/Model_Conversion/image.png" alt="RKNN-Toolkit2 Python wheel version example" /></div>

开始转换前，请记录模型来源和许可证、导出命令、校验和、输入布局、颜色顺序、缩放方式、归一化参数和后处理逻辑。这些内容是模型契约的一部分，也必须在 reCamera Pro 端的应用中保持一致。

:::tip 推荐流程
始终先导出 FP16 模型。它是检查计算图和预处理流程的可靠基线，之后再评估 INT8 的精度和性能。
:::

---

## 2. 配置 RKNN-Toolkit2

从 [Rockchip 官方仓库](https://github.com/airockchip/rknn-toolkit2) 下载 **2.3.2** 版本的 RKNN-Toolkit2。在发布包的 `rknn-toolkit2/packages/x86_64` 目录中，选择与 CPython 3.10 对应的 wheel 文件和依赖文件。

创建独立 Python 环境，然后安装发布包提供的依赖和 wheel。请将 `PATH_TO_TOOLKIT` 和 wheel 文件名替换为下载包中的实际路径。

```bash
python3.10 -m venv rknn-2.3.2
source rknn-2.3.2/bin/activate

python -m pip install --upgrade pip
python -m pip install -r PATH_TO_TOOLKIT/rknn-toolkit2/packages/x86_64/requirements_cp310*.txt
python -m pip install PATH_TO_TOOLKIT/rknn-toolkit2/packages/x86_64/rknn_toolkit2-2.3.2-*-cp310-*.whl

python -c "from rknn.api import RKNN; print('RKNN-Toolkit2 import succeeded')"
```

:::caution 使用正确的平台工具
RKNN-Toolkit2 是主机端转换工具。请勿使用 `rknn-toolkit-lite2` 进行转换；它用于在受支持的目标系统上运行模型。面向 RV1126B 的 `.rknn` 文件必须使用 `target_platform='rv1126b'` 生成。
:::

---

## 3. 检查 ONNX 模型和输入契约

ONNX 模型应尽量使用静态的 batch-1 输入。转换前可使用 [Netron](https://netron.app/)、ONNX checker、model-inspect 或模型导出程序检查模型。请从原始模型实现中确认下列信息，不要根据 ONNX 文件名猜测。

| 项目 | 示例 | 原因 |
| --- | --- | --- |
| 输入名称和形状 | `images`、`[1, 3, 640, 640]` | `load_onnx()` 需要这些信息 |
| 布局 | NCHW 或 NHWC | 必须与导出的计算图一致 |
| 通道顺序 | RGB 或 BGR | 通道颠倒会严重降低精度 |
| 输入范围和归一化 | `[0,255]` 到 `[0,1]` | 必须且只能配置一次 |
| 缩放策略 | 拉伸、中心裁剪或 letterbox | 运行时必须完全一致 |
| 输出和后处理 | 分类分数、检测框、掩码等 | 用于正确解读推理结果 |

例如，若应用输入为 `[0,255]` 范围内的 uint8 RGB 像素，而原始模型期望 `[0,1]` 范围内的浮点数，则使用 `mean_values=[[0, 0, 0]]` 和 `std_values=[[255, 255, 255]]`。RKNN 执行的计算是 `(input - mean) / std`。如果 ONNX 图内部已经包含归一化，请使用恒等参数（`mean=[0,0,0]`、`std=[1,1,1]`），避免重复归一化。

这里使用model-inspect工具检查模型输入以输出。

```bash
pip install model-inspect-tool

model-inspect ./yolov8n.onnx
```

这里使用的模式的输出示例如下

```bash
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

## 4. 使用 Ultralytics YOLO 直接导出 RKNN 模型

对于 Ultralytics YOLO 模型，可以直接通过 Ultralytics 导出 RKNN。该工具会自动生成中间 ONNX 模型并调用 RKNN-Toolkit2，因此不需要另行编写 ONNX 转换脚本。

在前面准备好的 RKNN-Toolkit2 环境中安装 Ultralytics：

```bash
python -m pip install ultralytics
```

下面的示例将导出一个适用于 reCamera Pro 的 FP16 RKNN 模型。请将 `yolo11n.pt` 替换为自己的训练权重，例如 `runs/detect/train/weights/best.pt`。

```python
from ultralytics import YOLO

model = YOLO('yolo11n.pt')
model.export(format='rknn', name='rv1126b', imgsz=640)
```

也可以使用命令行：

```bash
yolo export model=yolo11n.pt format=rknn name=rv1126b imgsz=640
```

导出后通常会生成类似 `yolo11n_rknn_model/` 的目录，内含名称类似 `yolo11n-rv1126b.rknn` 的模型文件。这里的 `name='rv1126b'` 用于选择 Rockchip 目标平台，而不是输出目录名称。

若要生成 INT8 模型，请传入 `quantize=8` 和具有代表性的 YOLO 数据集 YAML 文件。Ultralytics 会从该数据集的图像路径生成 RKNN-Toolkit2 所需的校准列表。

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

:::caution INT8 必须提供校准数据
`data` 必须指向有效的 YOLO 数据集 YAML，并且其中的图像路径在主机上可访问。请使用与 reCamera Pro 实际部署场景相似的图像，并另行保留独立的测试图像用于精度评估。Ultralytics 导出成功并不代表任务精度或设备性能已经得到保证。
:::

:::tip 直接导出与手动流程的选择
如果需要快速导出 Ultralytics YOLO 模型，请使用本节的直接导出方式。若模型不是 Ultralytics 模型、需要明确控制 Toolkit2 参数，或需要诊断导出的 ONNX 计算图，请使用下方的 ONNX 手动转换流程。
:::

---

## 5. 生成 FP16 RKNN 基线模型

创建 `convert_onnx_to_rknn.py`。请根据自己的模型修改模型路径、输入名称、输入尺寸和归一化参数。

```python
from rknn.api import RKNN

ONNX_MODEL = 'model.onnx'
RKNN_MODEL = 'model-fp16-rv1126b.rknn'

rknn = RKNN(verbose=True)

# 示例：将 [0,255] 的 uint8 RGB 输入转为模型所需的 [0,1]。
rknn.config(
    target_platform='rv1126b',
    mean_values=[[0, 0, 0]],
    std_values=[[255, 255, 255]],
)

ret = rknn.load_onnx(
    model=ONNX_MODEL,
    inputs=['images'],                     # 替换为您的 ONNX 输入名称。
    input_size_list=[[1, 3, 640, 640]],    # 替换为实际的静态输入形状。
)
if ret != 0:
    raise RuntimeError('Failed to load ONNX model')

# 不提供校准数据集，即生成未量化的 FP16 基线模型。
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

若 Toolkit 报告不支持的算子、动态输入或无效计算图，请修复或重新导出 ONNX 模型。不要为了让构建通过而直接删除算子。

---

## 6. 准备具有代表性的 INT8 校准数据集

INT8 量化需要与实际部署输入相似的样本。作为实践起点，可使用约 100--500 张图像，具体数量取决于任务和模型。图像应覆盖预期光照、背景、物体尺寸、视角、运动模糊、相机噪声和重要边界情况。校准图像应与用于评估精度的图像分开。如果校准的图像数量太少，可能会影响int8量化之后的模型和原本的onnx模型的推理结果出现些许的差异。

数据集列表每行包含一个图像路径，通常可使用 PNG、JPEG、BMP 或 NPY 输入。

```bash
find calibration/images -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) \
  | sort > calibration/dataset.txt

wc -l calibration/dataset.txt
head -n 3 calibration/dataset.txt
```

:::caution 保持预处理一致
校准数据必须使用与推理相同的通道顺序、缩放策略和数值输入约定。如果图像不具有代表性、RGB/BGR 设置错误，或预处理方式与部署不一致，INT8 精度可能明显下降。
:::

---

## 7. 构建 INT8 RKNN 模型

复制 FP16 脚本为 `convert_onnx_to_rknn_int8.py`，然后替换模型名称和构建代码：

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

默认 INT8 配置通常适合作为第一次测试。只有在实际测量了影响之后，再尝试量化算法、混合量化或权重压缩等高级选项。

---

## 8. 部署前验证

`build()` 和 `export_rknn()` 成功，表示 RKNN-Toolkit2 已为 RV1126B 编译计算图。但这**并不**自动证明任务精度、后处理正确性或设备端延迟。

1. 在留出的测试样本上运行原始 ONNX 模型和 FP16 RKNN 配置，比较解码后的任务结果，而非只比较原始张量。
2. 在同一批留出样本上比较 FP16 与 INT8 的结果，调查不可接受的精度下降。
3. 在 reCamera Pro 上，使用与固件匹配的 RKNN Runtime 加载导出的 `.rknn`，查询输入/输出张量属性，并确认应用提供的数据类型、布局、尺寸、预处理和后处理正确。
4. 在设备上预热后测量延迟，并验证持续运行表现。

:::note 主机验证的边界
主机端 RKNN 模拟器与 RV1126B NPU 并不是相同的执行环境。主机对比可用于检查转换和预处理；最终验收仍需在 reCamera Pro 上测试导出的 `.rknn`。
:::

---

## 9. 故障排查

| 现象 | 优先检查项 |
| --- | --- |
| `load_onnx()` 失败 | 验证 ONNX、导出 opset、输入名称、静态形状和外部数据文件。 |
| 不支持的算子 | 重新导出模型，或使用语义等价且受支持的算子实现。 |
| INT8 构建失败 | 检查所有数据集路径、输入数量、数据类型/形状以及图像可读性。 |
| INT8 精度较差 | 检查 RGB/BGR、缩放策略、mean/std、校准数据覆盖度和后处理。 |
| 主机正常、设备异常 | 确认 `rv1126b`、模型校验和、Toolkit/Runtime 2.3.2 一致性以及张量属性。 |
| 设备端推理慢 | 在预热后测量；检查瓶颈是否在预处理或后处理，而不仅仅是 NPU。 |

## 10. 下一步

现在您已经获得面向 RV1126B 的 `.rknn` 模型。请将 ONNX 源文件、转换脚本、校准列表校验和、`.rknn` 校验和以及预处理/后处理契约与导出的模型一起保存。下一步可将模型接入 reCamera Pro 的 RKNN Runtime C API，并在设备上完成验证。
