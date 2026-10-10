---
description: Application development paths for RKNN, ROCKIVA, and RKLLM on reCamera Pro.
title: AI and NPU Development
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - C/C++
  - RKNN
  - Application Development
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_ai_npu_development
sku: 10003420
sidebar_position: 3
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/recamera_pro_ai_npu_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# AI and NPU Development

This page covers application-side models, runtime libraries, and reference projects. For C/C++ builds, use [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain); you do not need to build the complete system. Paths such as `project/app/rkai` refer to internals of the full source package and are provided here as source-package references.

RV1126B has a dedicated NPU. The SDK contains three independent AI development paths. Choosing the right one early can save considerable time.

| Path | Location | Use case | What you do |
| --- | --- | --- | --- |
| **RKNN Runtime (C API)** | `media/rknn-llm-mk/`, `project/app/rkai/rkai/common/include/rknn_api.h` | Run your own detection / classification / segmentation model | Convert ONNX to `.rknn` on a PC, then run inference through the C API on the board |
| **ROCKIVA (packaged algorithm library)** | `media/iva/iva/` | Ready-made face, person, pet, and other detection | Call `rockiva_*_api.h` and use the bundled `.data` models |
| **RKLLM (large language / multimodal models)** | `media/rknn-llm-mk/rknn-llm/`, `project/app/rkllm-inference/` | Run an LLM / VLM on the board | Convert to `.rkllm` with rkllm-toolkit and run with `librkllmrt.so` on the board |

## 1. RKNN Runtime

### Runtime Libraries and Headers

Available copies in the SDK:

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

**On the device**, the runtime library is `/oem/usr/lib/librknnrt.so`, which is added to `LD_LIBRARY_PATH` by `/etc/profile.d/RkEnv.sh`.

> **Version matching is mandatory:** RKNN-Toolkit2 (PC-side conversion tool), `rknn_api.h`, and `librknnrt.so` must use compatible versions. The internal baseline for Seeed production firmware is **RKNN 2.3.2** (`target_platform='rv1126b'`). The `librknnrt.so` bundled in the SDK may be a different version; **use `/oem/usr/lib/librknnrt.so` on the device as the source of truth**. Do not replace it with a library downloaded separately or copied from another board.
>
> Before deployment, check the version on the device (the exact command output still needs hardware verification):
>
> ```bash
> # strings /oem/usr/lib/librknnrt.so | grep -i "librknnrt version"
> # cat /sys/kernel/debug/rknpu/version 2>/dev/null || dmesg | grep -i rknpu
> ```
>
> Add `/oem/usr/lib` to RUNPATH when linking: `-Wl,-rpath,/oem/usr/lib`. **Do not overwrite the library on the device.**

### NPU Core Configuration

Core masks available in `rknn_api.h`:

| Value | Meaning |
| --- | --- |
| `RKNN_NPU_CORE_AUTO` | Select automatically |
| `RKNN_NPU_CORE_0` | Use core 0 only |
| `RKNN_NPU_CORE_0_1` | Use cores 0 + 1 (`rkllm-inference` takes `2` as its argument) |
| `RKNN_NPU_CORE_0_1_2` | Use all three cores (pass `3`) |

Other common flags include `RKNN_FLAG_PRIOR_HIGH/MEDIUM/LOW` (priority), `RKNN_FLAG_ASYNC_MASK` (asynchronous execution), `RKNN_FLAG_COLLECT_PERF_MASK` (performance collection), `RKNN_FLAG_MEM_ALLOC_OUTSIDE` (external memory), and `RKNN_FLAG_SHARE_WEIGHT_MEM` (share weights across models).

### Model Conversion (on a PC)

The SDK does **not include** RKNN-Toolkit2. Set up a separate Python environment on an x86_64 Linux host:

```bash
# An isolated conda or venv environment is recommended
pip install rknn-toolkit2==2.3.2
```

Conversion script outline:

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

Guidelines:

- **Establish an FP16 baseline first**, then verify that inference works and check accuracy before considering INT8 quantization.
- INT8 requires a representative list of calibration images, one path per line. Keep the calibration set separate from the validation set.
- Keep same-name `.rknn.json` metadata with the exported model, including input layout, normalization, color order, resize policy, output semantics, and post-processing. This is needed for deployment and debugging.
- **Do not guess** model preprocessing parameters. Copy mean/std, input size, NCHW/NHWC, and RGB/BGR from the training or export script.
- A successful conversion means only that an RV1126B-compatible `.rknn` was produced; it **does not prove model accuracy or runtime correctness**. Verify those separately.

### On-Device Inference with the C API

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

For a C API application, start with the [RKNN example in `recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain). Manually configuring the sysroot, header paths, and link flags can introduce libraries that do not match the firmware; first use the example to establish a known-good build.

**Do not use `rknn-toolkit-lite2` (Python) to write a device-side C/C++ application.** It is intended for quick validation; production applications should use the C API.

### Existing Detection Models

`project/app/recamera_ipc/model/rknn/` contains models and metadata that can be used as references:

| File | Description |
| --- | --- |
| `yolox_s.rknn` + `yolox_s.json` | YOLOX-S object detection |
| `nanodet-plus-m_416.rknn` + `nanodet-plus-m_416.json` | NanoDet-Plus-M 416×416 detection |

The `.json` files contain related metadata (input/output definitions, thresholds, and post-processing parameters). Create equivalent metadata for your own model if you want it to load in the `recamera_ipc` inference framework. Related code is under `project/app/recamera_ipc/common/rc_infer/`, `rc_model/`, and `rockiva/`.

### Reference Projects

| Path | Contents |
| --- | --- |
| `project/app/rkai/rkai/samples/rkai_samples_vlm.cpp` | VLM (image-text understanding) example |
| `project/app/rkai/rkai/samples/rkai_samples_vlm_vision.cpp` | Vision-only VLM example |
| `project/app/rkai/rkai/samples/rkai_samples_llm.cpp` | LLM example |
| `project/app/rkai/rkai/rkai_VLM/`, `rkai_LLM/` | RKAI wrapper libraries (CMake, with `include/` and `src/`) |
| `project/app/rkai/rkai/app_conf/{config,inputs}` | Runtime configuration and input samples |
| `project/app/rkai/rkai/RkLunch.sh` | Startup script |
| `project/app/testdemo/yoloworld_demo/` | End-to-end YOLO-World demo (with `3rdparty` and `resources`) |
| `media/rknn-llm-mk/rknn-llm/examples/rkllm_api_demo/` | Minimal RKLLM API example |
| `media/rknn-llm-mk/rknn-llm/examples/multimodal_model_demo/` | Complete multimodal example (including `deploy/3rdparty`) |

Documentation: `project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md` (an English version is available).

## 2. ROCKIVA

Located under `media/iva/iva/`, including `CMakeLists.txt`, `librockiva/`, and `models/`.

RV1126B package:

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

Model data:

```text
media/iva/iva/models/rockiva_data_rv1126b/
├── iva_object_detection_pfp.data        # Person / face / pet detection
├── iva_object_detection_v3_pfp.data
└── iva_object_detection_v3_cls8.data    # 8-class detection
```

Link with `-lrockiva -lrknnrt` and pass the `.data` model directory to the initialization API at runtime.

The main benefit of ROCKIVA is that it **eliminates the need to train and post-process your own detector**: it directly returns person / face / pet bounding boxes. It is suitable for enhancing motion detection, person alerts, fall detection, and similar features. A `fall_detect` project in this SDK can also serve as a reference.

Documentation: `docs/zh/npu_iva/Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf`. (**There is no `npu_iva` category in `docs/en`; only the Chinese manual is included.**)

`recamera_ipc` already contains ROCKIVA integration code under `project/app/recamera_ipc/common/rockiva/`.

## 3. RKLLM (On-Device Large Language Models)

### SDK Contents

`media/rknn-llm-mk/rknn-llm/`:

| Directory / file | Contents |
| --- | --- |
| `rkllm-runtime/Linux/` | On-device runtime (`librkllmrt.so`) |
| `rkllm-toolkit/` | PC-side model conversion tools (`packages/`, `examples/`) |
| `examples/rkllm_api_demo/` | Text-only LLM example |
| `examples/multimodal_model_demo/` | Image-text multimodal example (includes `deploy/3rdparty`) |
| `examples/rkllm_server_demo/` | Server deployment example |
| `doc/Rockchip_RKLLM_SDK_CN_1.2.3.pdf` / `_EN_` | Official RKLLM SDK 1.2.3 manuals |
| `rknpu-driver/rknpu_driver_0.9.8_20241009.tar.bz2` | NPU kernel driver package |
| `benchmark.md`, `CHANGELOG.md`, `README.md` | Performance benchmarks and change log |

The Makefile wrapper is `media/rknn-llm-mk/Makefile`; it is built as part of `./build.sh media`.

### Application: `rkllm-inference`

`project/app/rkllm-inference/` (enabled with `RK_APP_RKLLM_INFERENCE=y`) produces two binaries:

- `rkllm_inference_demo`: interactive image-text inference
- `rkllm_benchmark_demo`: single-run inference benchmark

```bash
make -C project/app/rkllm-inference
# Outputs: project/app/rkllm-inference/out/bin/{rkllm_inference_demo,rkllm_benchmark_demo}
```

Run it with:

```bash
rkllm_inference_demo \
  <image_path> <encoder_model_path> <llm_model_path> \
  <max_new_tokens> <max_context_len> <rknn_core_num> \
  [img_start] [img_end] [img_content]
```

| Argument | Meaning |
| --- | --- |
| `image_path` | Input image |
| `encoder_model_path` | Vision encoder `.rknn` |
| `llm_model_path` | Language model `.rkllm` |
| `max_new_tokens` | Maximum number of generated tokens |
| `max_context_len` | Context length |
| `rknn_core_num` | `2` → `RKNN_NPU_CORE_0_1`; `3` → `RKNN_NPU_CORE_0_1_2`; any other value → `AUTO` |
| `img_start/img_end/img_content` | Vision special tokens; defaults to Qwen-VL style `<|vision_start|>` / `<|vision_end|>` / `<|image_pad|>` |

Interactive input supports `0` / `1` for built-in example prompts, custom text, image-text questions prefixed with `<image>`, `clear` to clear the KV cache, and `exit` to quit.

Benchmark output includes model loading, preprocessing, vision encoding, TTFT, decoding, end-to-end time, and throughput. `prefill_time`, `decode_time`, and `memory_usage` come from RKLLM's `RKLLMPerfStat`. After vision encoding, it **explicitly unloads the encoder before loading the LLM** to reduce memory pressure on this constrained platform.

Dependencies: `librknnrt.so`, `librkllmrt.so`, and target-platform OpenCV. It reuses `rknn_api.h` from `project/app/rkai/rkai/common/include/rknn_api.h`.

> If your VLM uses different vision placeholder tokens, pass the correct `img_start` / `img_end` / `img_content` values at runtime. Otherwise, output may be incorrect.

### Memory and Feasibility Notes

RV1126B has much less memory than a typical LLM deployment platform. Before running an LLM / VLM:

- Use `rkllm_benchmark_demo` to check `memory_usage` and make sure the model will not trigger OOM.
- The board configuration sets `RK_BOOTARGS_CMA_SIZE="8M"`, which is a small CMA region; large models mainly consume regular system memory and NPU memory.
- INT4 / INT8 quantization is usually required; FP16 models will likely not fit.

## 4. AI-ISP

`RK_AIISP_MODEL=NONE` means AI-ISP is **not enabled** in this board configuration, although the code path is present:

- `media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/` (includes `librknnrt_32bit.so` / `librknnrt_64bit.so`)
- Examples: `media/samples/example/demo/sample_demo_aiisp.c`, `sample_demo_dual_aiisp.c`
- Stress tests: `sample_demo_aiisp_stresstest.c`, `sample_demo_dual_aiisp_stresstest.c`
- AINR-related IQ files are under `iqfiles/isp35/ainr/`

To enable AI-ISP, set `RK_AIISP_MODEL` to a specific model in the board configuration and provide the corresponding resources.

## 5. Performance and Stress Tests

| Tool | Path |
| --- | --- |
| NPU stress test | `project/app/recamera_utils/stress_test/npu_stress.py` |
| CPU stress test | `project/app/recamera_utils/stress_test/cpu_stress.py` |
| eMMC / SD stress test | `project/app/recamera_utils/stress_test/emmc_sd_stress.py` |
| EMC test | `project/app/recamera_utils/stress_test/emc_test.py` |
| RKLLM benchmark | `rkllm_benchmark_demo` |

Before running a sustained AI workload, evaluate thermal and power behavior. Long periods of full NPU load can trigger thermal throttling; see `docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf`.

## Recommended Development Workflow

1. On a PC, convert ONNX to `.rknn` for `target_platform='rv1126b'` with RKNN-Toolkit2 2.3.2; start with FP16.
2. Write a minimal application with `rknn_api.h` and verify on the board that the model loads and returns output. Start with a static image, without the camera.
3. Check accuracy by comparing outputs with ONNX on the same input set.
4. Add the video stream: get NV12 frames from rockit → convert to RGB / resize with RGA → pass to the NPU. See [Video and ISP Development](/recamera_pro_video_isp_development/).
5. For general person / face detection, evaluate ROCKIVA before implementing the same functionality yourself.
6. Consider INT8 quantization and multi-core optimization (`RKNN_NPU_CORE_0_1`) only after the pipeline works.
