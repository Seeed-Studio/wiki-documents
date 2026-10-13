---
description: reCamera Pro 上 RKNN、ROCKIVA 和 RKLLM 的应用开发路径。
title: AI 与 NPU 开发
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - C/C++
  - RKNN
  - 应用开发
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_ai_npu_development
sku: 10003420
sidebar_position: 3
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_ai_npu_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# AI 与 NPU 开发

本页涵盖应用侧模型、运行时库以及参考项目。对于 C/C++ 构建，请使用 [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain)；你不需要构建完整系统。诸如 `project/app/rkai` 之类的路径指的是完整源码包的内部结构，这里仅作为源码包参考提供。

RV1126B 具有独立的 NPU。SDK 包含三条相互独立的 AI 开发路径。尽早选择合适的路径可以节省大量时间。

| 路径 | 位置 | 使用场景 | 你需要做什么 |
| --- | --- | --- | --- |
| **RKNN Runtime（C API）** | `media/rknn-llm-mk/`, `project/app/rkai/rkai/common/include/rknn_api.h` | 运行你自己的检测 / 分类 / 分割模型 | 在 PC 上将 ONNX 转换为 `.rknn`，然后在板端通过 C API 进行推理 |
| **ROCKIVA（封装算法库）** | `media/iva/iva/` | 现成的人脸、人体、宠物等检测 | 调用 `rockiva_*_api.h` 并使用随附的 `.data` 模型 |
| **RKLLM（大语言 / 多模态模型）** | `media/rknn-llm-mk/rknn-llm/`, `project/app/rkllm-inference/` | 在板端运行 LLM / VLM | 使用 rkllm-toolkit 转换为 `.rkllm`，并在板端通过 `librkllmrt.so` 运行 |

## 1. RKNN Runtime

### 运行时库与头文件

SDK 中可用的副本：

```text
media/rknn-llm-mk/rknn-llm/examples/multimodal_model_demo/deploy/3rdparty/librknnrt/
├── Linux/librknn_api/include/rknn_api.h          # C API header
├── Linux/librknn_api/include/rknn_matmul_api.h   # Matrix multiplication API
├── Linux/librknn_api/aarch64/librknnrt.so        # aarch64 runtime
├── Android/librknn_api/arm64-v8a/librknnrt.so
└── Android/librknn_api/armeabi-v7a/librknnrt.so

media/iva/iva/librockiva/rockiva-rv1126b-Linux/lib/librknnrt.so
media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/aiisp_relate/librknnrt_64bit.so
media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/aiisp_relate/librknnrt_32bit.so

project/app/rkai/rkai/common/include/rknn_api.h       # Header used by applications
project/app/rkai/rkai/common/include/rknn_custom_op.h # Custom operators
project/app/rkai/rkai/common/include/rknn_matmul_api.h
```

**在设备上**，运行时库为 `/oem/usr/lib/librknnrt.so`，它由 `/etc/profile.d/RkEnv.sh` 添加到 `LD_LIBRARY_PATH` 中。

> **版本匹配是强制要求：** RKNN-Toolkit2（PC 端转换工具）、`rknn_api.h` 和 `librknnrt.so` 必须使用兼容版本。Seeed 量产固件的内部基线为 **RKNN 2.3.2**（`target_platform='rv1126b'`）。SDK 中捆绑的 `librknnrt.so` 可能是不同版本；**请以设备上的 `/oem/usr/lib/librknnrt.so` 为唯一可信来源**。不要用单独下载的库或从其他板子拷贝的库替换它。
>
> 部署前，请检查设备上的版本（确切命令输出仍需在硬件上验证）：
>
> ```bash
> # strings /oem/usr/lib/librknnrt.so | grep -i "librknnrt version"
> # cat /sys/kernel/debug/rknpu/version 2>/dev/null || dmesg | grep -i rknpu
> ```
>
> 链接时将 `/oem/usr/lib` 添加到 RUNPATH：`-Wl,-rpath,/oem/usr/lib`。**不要覆盖设备上的库。**

### NPU 核心配置

`rknn_api.h` 中可用的核心掩码：

| 值 | 含义 |
| --- | --- |
| `RKNN_NPU_CORE_AUTO` | 自动选择 |
| `RKNN_NPU_CORE_0` | 仅使用核心 0 |
| `RKNN_NPU_CORE_0_1` | 使用核心 0 + 1（`rkllm-inference` 将 `2` 作为其参数） |
| `RKNN_NPU_CORE_0_1_2` | 使用全部三个核心（传入 `3`） |

其他常见标志包括 `RKNN_FLAG_PRIOR_HIGH/MEDIUM/LOW`（优先级）、`RKNN_FLAG_ASYNC_MASK`（异步执行）、`RKNN_FLAG_COLLECT_PERF_MASK`（性能采集）、`RKNN_FLAG_MEM_ALLOC_OUTSIDE`（外部分配内存）以及 `RKNN_FLAG_SHARE_WEIGHT_MEM`（在模型间共享权重内存）。

### 模型转换（在 PC 上）

SDK **不包含** RKNN-Toolkit2。请在 x86_64 Linux 主机上单独搭建 Python 环境：

```bash
# An isolated conda or venv environment is recommended
pip install rknn-toolkit2==2.3.2
```

转换脚本概要：

```python
from rknn.api import RKNN

rknn = RKNN(verbose=True)
rknn.config(
    mean_values=[[0, 0, 0]],
    std_values=[[255, 255, 255]],
    target_platform='rv1126b',       # Required; do not leave this unset
)
rknn.load_onnx(model='model.onnx')
rknn.build(do_quantization=False)    # Establish an FP16 baseline first
rknn.export_rknn('model.rknn')
```

注意事项：

- **先建立 FP16 基线**，在考虑 INT8 量化之前，先验证推理可用并检查精度。
- INT8 需要一份具有代表性的标定图片列表，每行一个路径。保持标定集与验证集相互独立。
- 与导出的模型一起保留同名的 `.rknn.json` 元数据，其中包括输入布局、归一化、颜色顺序、缩放策略、输出语义和后处理。这在部署和调试时是必需的。
- **不要凭猜测** 设置模型预处理参数。请从训练或导出脚本中复制 mean/std、输入尺寸、NCHW/NHWC 以及 RGB/BGR。
- 成功转换仅意味着生成了一个与 RV1126B 兼容的 `.rknn`；这**并不能证明模型精度或运行时行为正确**。这些需要单独验证。

### 使用 C API 在设备上推理

```c
#include "rknn_api.h"

rknn_context ctx = 0;
rknn_init(&ctx, model_data, model_size, 0, NULL);

rknn_input_output_num io_num;
rknn_query(ctx, RKNN_QUERY_IN_OUT_NUM, &io_num, sizeof(io_num));

rknn_set_core_mask(ctx, RKNN_NPU_CORE_0_1);

rknn_input in[1] = {0};
in[0].type = RKNN_TENSOR_UINT8;
in[0].fmt  = RKNN_TENSOR_NHWC;
in[0].size = width * height * 3;
in[0].buf  = rgb_buffer;
rknn_inputs_set(ctx, 1, in);

rknn_run(ctx, NULL);

rknn_output out[1] = {0};
out[0].want_float = 1;
rknn_outputs_get(ctx, 1, out, NULL);
/* ... post-processing ... */
rknn_outputs_release(ctx, 1, out);
rknn_destroy(ctx);
```

对于 C API 应用，请从 [`recamera_pro_toolchain` 中的 RKNN 示例](https://github.com/Seeed-Projects/recamera_pro_toolchain)入手。手动配置 sysroot、头文件路径和链接参数，可能会引入与固件不匹配的库；请先使用该示例建立一个已知可用的构建环境。

**不要使用 `rknn-toolkit-lite2`（Python）来编写设备端 C/C++ 应用。** 它用于快速验证；生产级应用应使用 C API。

### 现有检测模型

`project/app/recamera_ipc/model/rknn/` 中包含可作为参考的模型和元数据：

| 文件 | 说明 |
| --- | --- |
| `yolox_s.rknn` + `yolox_s.json` | YOLOX-S 目标检测 |
| `nanodet-plus-m_416.rknn` + `nanodet-plus-m_416.json` | NanoDet-Plus-M 416×416 检测 |

`.json` 文件包含相关元数据（输入/输出定义、阈值和后处理参数）。如果你希望自己的模型能够在 `recamera_ipc` 推理框架中加载，请为其创建等价的元数据。相关代码位于 `project/app/recamera_ipc/common/rc_infer/`、`rc_model/` 和 `rockiva/` 下。

### 参考项目

| 路径 | 内容 |
| --- | --- |
| `project/app/rkai/rkai/samples/rkai_samples_vlm.cpp` | VLM（图文理解）示例 |
| `project/app/rkai/rkai/samples/rkai_samples_vlm_vision.cpp` | 仅视觉 VLM 示例 |
| `project/app/rkai/rkai/samples/rkai_samples_llm.cpp` | LLM 示例 |
| `project/app/rkai/rkai/rkai_VLM/`, `rkai_LLM/` | RKAI 封装库（CMake，包含 `include/` 和 `src/`） |
| `project/app/rkai/rkai/app_conf/{config,inputs}` | 运行时配置和输入样例 |
| `project/app/rkai/rkai/RkLunch.sh` | 启动脚本 |
| `project/app/testdemo/yoloworld_demo/` | 端到端 YOLO-World 演示（包含 `3rdparty` 和 `resources`） |
| `media/rknn-llm-mk/rknn-llm/examples/rkllm_api_demo/` | 最小 RKLLM API 示例 |
| `media/rknn-llm-mk/rknn-llm/examples/multimodal_model_demo/` | 完整多模态示例（包含 `deploy/3rdparty`） |

文档：`project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md`（提供英文版本）。

## 2. ROCKIVA

位于 `media/iva/iva/` 下，包括 `CMakeLists.txt`、`librockiva/` 和 `models/`。

RV1126B 包：

```text
media/iva/iva/librockiva/rockiva-rv1126b-Linux/
├── include/
│   ├── rockiva_common.h       # Common types and initialization
│   ├── rockiva_one_api.h      # Unified API (most commonly used)
│   ├── rockiva_det_api.h      # Detection
│   ├── rockiva_face_api.h     # Face processing
│   ├── rockiva_ba_api.h       # Behavior analysis
│   └── rockiva_image.h        # Image structures
├── lib/librockiva.so
├── lib/librknnrt.so           # Includes another copy of the RKNN runtime
└── lib64/
```

模型数据：

```text
media/iva/iva/models/rockiva_data_rv1126b/
├── iva_object_detection_pfp.data        # Person / face / pet detection
├── iva_object_detection_v3_pfp.data
└── iva_object_detection_v3_cls8.data    # 8-class detection
```

链接时使用 `-lrockiva -lrknnrt`，并在运行时将 `.data` 模型目录传递给初始化 API。

ROCKIVA 的主要优势在于它**免去了你自行训练和后处理检测器的需求**：它会直接返回人体 / 人脸 / 宠物的边界框。适用于增强移动侦测、人员告警、跌倒检测等功能。SDK 中的 `fall_detect` 工程也可以作为参考。

文档：`docs/zh/npu_iva/Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf`。（**`docs/en` 中没有 `npu_iva` 分类；仅包含中文手册。**）

`recamera_ipc` 已在 `project/app/recamera_ipc/common/rockiva/` 下集成了 ROCKIVA 相关代码。

## 3. RKLLM（设备端大语言模型）

### SDK 内容

`media/rknn-llm-mk/rknn-llm/`：

| 目录 / 文件 | 内容 |
| --- | --- |
| `rkllm-runtime/Linux/` | 设备端运行时（`librkllmrt.so`） |
| `rkllm-toolkit/` | PC 端模型转换工具（`packages/`、`examples/`） |
| `examples/rkllm_api_demo/` | 纯文本 LLM 示例 |
| `examples/multimodal_model_demo/` | 图文多模态示例（包含 `deploy/3rdparty`） |
| `examples/rkllm_server_demo/` | 服务器部署示例 |
| `doc/Rockchip_RKLLM_SDK_CN_1.2.3.pdf` / `_EN_` | 官方 RKLLM SDK 1.2.3 手册 |
| `rknpu-driver/rknpu_driver_0.9.8_20241009.tar.bz2` | NPU 内核驱动包 |
| `benchmark.md`, `CHANGELOG.md`, `README.md` | 性能基准与更新日志 |

Makefile 封装位于 `media/rknn-llm-mk/Makefile`；它作为 `./build.sh media` 的一部分进行构建。

### 应用：`rkllm-inference`

`project/app/rkllm-inference/`（通过 `RK_APP_RKLLM_INFERENCE=y` 启用）会生成两个二进制文件：

- `rkllm_inference_demo`：交互式图文推理
- `rkllm_benchmark_demo`：单次运行推理基准测试

```bash
make -C project/app/rkllm-inference
# Outputs: project/app/rkllm-inference/out/bin/{rkllm_inference_demo,rkllm_benchmark_demo}
```

运行方式：

```bash
rkllm_inference_demo \
  <image_path> <encoder_model_path> <llm_model_path> \
  <max_new_tokens> <max_context_len> <rknn_core_num> \
  [img_start] [img_end] [img_content]
```

| 参数 | 含义 |
| --- | --- |
| `image_path` | 输入图像 |
| `encoder_model_path` | 视觉编码器 `.rknn` |
| `llm_model_path` | 语言模型 `.rkllm` |
| `max_new_tokens` | 生成 token 的最大数量 |
| `max_context_len` | 上下文长度 |
| `rknn_core_num` | `2` → `RKNN_NPU_CORE_0_1`；`3` → `RKNN_NPU_CORE_0_1_2`；其他任意值 → `AUTO` |
| `img_start/img_end/img_content` | 视觉特殊 token；默认使用 Qwen-VL 风格的 `vision_start`、`vision_end` 和 `image_pad` token |

交互式输入支持：`0` / `1` 选择内置示例提示词，自定义文本，以 `<image>` 开头的图文问题，输入 `clear` 清除 KV 缓存，输入 `exit` 退出。

基准测试输出包括模型加载、预处理、视觉编码、TTFT、解码、端到端时间和吞吐量。`prefill_time`、`decode_time` 和 `memory_usage` 来自 RKLLM 的 `RKLLMPerfStat`。在视觉编码之后，它会在加载 LLM 之前**显式卸载编码器**，以减轻该受限平台上的内存压力。

依赖项：`librknnrt.so`、`librkllmrt.so` 和目标平台的 OpenCV。它复用 `project/app/rkai/rkai/common/include/rknn_api.h` 中的 `rknn_api.h`。

> 如果你的 VLM 使用了不同的视觉占位符 token，请在运行时传入正确的 `img_start` / `img_end` / `img_content` 值。否则输出可能不正确。

### 内存与可行性说明

RV1126B 的内存远小于典型的 LLM 部署平台。在运行 LLM / VLM 之前：

- 使用 `rkllm_benchmark_demo` 检查 `memory_usage`，确保模型不会触发 OOM。
- 板级配置将 `RK_BOOTARGS_CMA_SIZE` 设为 `"8M"`，这是一个较小的 CMA 区域；大模型主要消耗普通系统内存和 NPU 内存。
- 通常需要 INT4 / INT8 量化；FP16 模型很可能无法装入。

## 4. AI-ISP

`RK_AIISP_MODEL=NONE` 表示在该板级配置中 **未启用** AI-ISP，尽管代码路径是存在的：

- `media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/`（包含 `librknnrt_32bit.so` / `librknnrt_64bit.so`）
- 示例：`media/samples/example/demo/sample_demo_aiisp.c`、`sample_demo_dual_aiisp.c`
- 压力测试：`sample_demo_aiisp_stresstest.c`、`sample_demo_dual_aiisp_stresstest.c`
- 与 AINR 相关的 IQ 文件位于 `iqfiles/isp35/ainr/`

要启用 AI-ISP，请在板级配置中将 `RK_AIISP_MODEL` 设置为某个具体模型，并提供相应的资源。

## 5. 性能与压力测试

| 工具 | 路径 |
| --- | --- |
| NPU 压力测试 | `project/app/recamera_utils/stress_test/npu_stress.py` |
| CPU 压力测试 | `project/app/recamera_utils/stress_test/cpu_stress.py` |
| eMMC / SD 压力测试 | `project/app/recamera_utils/stress_test/emmc_sd_stress.py` |
| EMC 测试 | `project/app/recamera_utils/stress_test/emc_test.py` |
| RKLLM 基准测试 | `rkllm_benchmark_demo` |

在运行持续的 AI 负载之前，请评估热和功耗行为。长时间满负载运行 NPU 可能触发温度降频；参见 `docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf`。

## 推荐开发流程

1. 在 PC 上使用 RKNN-Toolkit2 2.3.2 将 ONNX 转换为 `target_platform='rv1126b'` 的 `.rknn`，从 FP16 开始。
2. 使用 `rknn_api.h` 编写一个最小应用，并在板子上验证模型可以加载并返回输出。先从静态图像开始，不接入相机。
3. 在相同输入集上，将输出与 ONNX 进行对比以检查精度。
4. 加入视频流：从 rockit 获取 NV12 帧 → 使用 RGA 转换为 RGB / 调整尺寸 → 传入 NPU。参见 [视频与 ISP 开发](/cn/recamera_pro_video_isp_development/)。
5. 对于通用的人体 / 人脸检测，在自行实现相同功能之前，先评估 ROCKIVA。
6. 仅在整个流水线工作正常之后，再考虑 INT8 量化和多核优化（`RKNN_NPU_CORE_0_1`）。

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
