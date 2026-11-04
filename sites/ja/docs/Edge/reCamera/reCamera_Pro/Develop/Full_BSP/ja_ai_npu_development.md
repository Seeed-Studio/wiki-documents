---
description: reCamera Pro 上で RKNN、ROCKIVA、RKLLM を用いたアプリケーション開発パス。
title: AI と NPU 開発
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - C/C++
  - RKNN
  - アプリケーション開発
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_ai_npu_development
sku: 10003420
sidebar_position: 3
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_ai_npu_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# AI と NPU 開発

このページでは、アプリケーション側のモデル、ランタイムライブラリ、およびリファレンスプロジェクトについて説明します。C/C++ ビルドには [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain) を使用します。完全なシステムをビルドする必要はありません。`project/app/rkai` のようなパスはフルソースパッケージ内部を指しており、ここではソースパッケージの参照として示しています。

RV1126B には専用の NPU が搭載されています。SDK には 3 つの独立した AI 開発パスが含まれています。早い段階で適切なパスを選択することで、多くの時間を節約できます。

| パス | 位置 | ユースケース | 行うこと |
| --- | --- | --- | --- |
| **RKNN Runtime (C API)** | `media/rknn-llm-mk/`, `project/app/rkai/rkai/common/include/rknn_api.h` | 独自の検出 / 分類 / セグメンテーションモデルを実行 | PC 上で ONNX を `.rknn` に変換し、その後ボード上で C API を通じて推論を実行 |
| **ROCKIVA (パッケージ化されたアルゴリズムライブラリ)** | `media/iva/iva/` | 顔、人物、ペットなどの検出をすぐに利用 | `rockiva_*_api.h` を呼び出し、同梱の `.data` モデルを使用 |
| **RKLLM (大規模言語 / マルチモーダルモデル)** | `media/rknn-llm-mk/rknn-llm/`, `project/app/rkllm-inference/` | ボード上で LLM / VLM を実行 | PC で rkllm-toolkit により `.rkllm` に変換し、ボード上で `librkllmrt.so` を用いて実行 |

## 1. RKNN Runtime

### ランタイムライブラリとヘッダ

SDK 内で利用可能なコピー：

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

**デバイス上では**、ランタイムライブラリは `/oem/usr/lib/librknnrt.so` であり、`/etc/profile.d/RkEnv.sh` によって `LD_LIBRARY_PATH` に追加されています。

> **バージョンの整合性は必須です：** RKNN-Toolkit2（PC 側の変換ツール）、`rknn_api.h`、`librknnrt.so` は互換性のあるバージョンを使用する必要があります。Seeed の量産ファームウェアにおける内部ベースラインは **RKNN 2.3.2**（`target_platform='rv1126b'`）です。SDK に同梱されている `librknnrt.so` は別バージョンである可能性があります。**デバイス上の `/oem/usr/lib/librknnrt.so` を唯一の正とみなしてください。** 別途ダウンロードしたライブラリや他のボードからコピーしたライブラリで置き換えないでください。
>
> デプロイ前に、デバイス上のバージョンを確認してください（正確なコマンド出力はハードウェアでの検証が必要です）：
>
> ```bash
> # strings /oem/usr/lib/librknnrt.so | grep -i "librknnrt version"
> # cat /sys/kernel/debug/rknpu/version 2>/dev/null || dmesg | grep -i rknpu
> ```
>
> リンク時には RUNPATH に `/oem/usr/lib` を追加します：`-Wl,-rpath,/oem/usr/lib`。**デバイス上のライブラリを上書きしないでください。**

### NPU コア設定

`rknn_api.h` で利用可能なコアマスク：

| 値 | 意味 |
| --- | --- |
| `RKNN_NPU_CORE_AUTO` | 自動選択 |
| `RKNN_NPU_CORE_0` | コア 0 のみを使用 |
| `RKNN_NPU_CORE_0_1` | コア 0 + 1 を使用（`rkllm-inference` は引数として `2` を取ります） |
| `RKNN_NPU_CORE_0_1_2` | 3 つすべてのコアを使用（`3` を渡します） |

その他の一般的なフラグには、`RKNN_FLAG_PRIOR_HIGH/MEDIUM/LOW`（優先度）、`RKNN_FLAG_ASYNC_MASK`（非同期実行）、`RKNN_FLAG_COLLECT_PERF_MASK`（性能収集）、`RKNN_FLAG_MEM_ALLOC_OUTSIDE`（外部メモリ）、`RKNN_FLAG_SHARE_WEIGHT_MEM`（モデル間での重み共有）などがあります。

### モデル変換（PC 上）

SDK には RKNN-Toolkit2 は**含まれていません**。x86_64 Linux ホスト上に別途 Python 環境を用意してください：

```bash
# An isolated conda or venv environment is recommended
pip install rknn-toolkit2==2.3.2
```

変換スクリプトの概要：

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

ガイドライン：

- **まず FP16 ベースラインを確立**し、その後に推論が動作することと精度を確認してから INT8 量子化を検討してください。
- INT8 には代表的なキャリブレーション画像リストが必要であり、1 行につき 1 パスを記述します。キャリブレーションセットは検証セットと分離してください。
- エクスポートしたモデルには、入力レイアウト、正規化、色順序、リサイズポリシー、出力の意味、後処理などを含む、同名の `.rknn.json` メタデータを必ず保持してください。これはデプロイとデバッグに必要です。
- モデルの前処理パラメータを**推測しないでください**。mean/std、入力サイズ、NCHW/NHWC、RGB/BGR はトレーニングまたはエクスポートスクリプトからコピーしてください。
- 変換が成功したということは、RV1126B 互換の `.rknn` が生成されたことを意味するだけであり、**モデル精度やランタイムの正しさを保証するものではありません**。それらは別途検証してください。

### C API を用いたデバイス上推論

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

C API アプリケーションを作成する場合は、まず [`recamera_pro_toolchain` 内の RKNN サンプル](https://github.com/Seeed-Projects/recamera_pro_toolchain)から始めてください。sysroot、ヘッダパス、リンクフラグを手動で設定すると、ファームウェアと一致しないライブラリが混入する可能性があります。まずはサンプルを使って、既知の良好なビルドを確立してください。

**デバイス側の C/C++ アプリケーション作成に `rknn-toolkit-lite2`（Python）を使用しないでください。** これは迅速な検証を目的としており、本番アプリケーションでは C API を使用する必要があります。

### 既存の検出モデル

`project/app/recamera_ipc/model/rknn/` には、リファレンスとして利用できるモデルとメタデータが含まれています：

| ファイル | 説明 |
| --- | --- |
| `yolox_s.rknn` + `yolox_s.json` | YOLOX-S 物体検出 |
| `nanodet-plus-m_416.rknn` + `nanodet-plus-m_416.json` | NanoDet-Plus-M 416×416 検出 |

`.json` ファイルには、関連するメタデータ（入出力定義、しきい値、後処理パラメータ）が含まれています。`recamera_ipc` の推論フレームワークで自分のモデルを読み込ませたい場合は、同等のメタデータを作成してください。関連コードは `project/app/recamera_ipc/common/rc_infer/`、`rc_model/`、`rockiva/` にあります。

### リファレンスプロジェクト

| パス | 内容 |
| --- | --- |
| `project/app/rkai/rkai/samples/rkai_samples_vlm.cpp` | VLM（画像と言語の理解）サンプル |
| `project/app/rkai/rkai/samples/rkai_samples_vlm_vision.cpp` | ビジョン専用 VLM サンプル |
| `project/app/rkai/rkai/samples/rkai_samples_llm.cpp` | LLM サンプル |
| `project/app/rkai/rkai/rkai_VLM/`, `rkai_LLM/` | RKAI ラッパーライブラリ（`include/` と `src/` を含む CMake プロジェクト） |
| `project/app/rkai/rkai/app_conf/{config,inputs}` | ランタイム設定と入力サンプル |
| `project/app/rkai/rkai/RkLunch.sh` | 起動スクリプト |
| `project/app/testdemo/yoloworld_demo/` | エンドツーエンドの YOLO-World デモ（`3rdparty` と `resources` を含む） |
| `media/rknn-llm-mk/rknn-llm/examples/rkllm_api_demo/` | 最小限の RKLLM API サンプル |
| `media/rknn-llm-mk/rknn-llm/examples/multimodal_model_demo/` | 完全なマルチモーダルサンプル（`deploy/3rdparty` を含む） |

ドキュメント：`project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md`（英語版も利用可能です）。

## 2. ROCKIVA

`media/iva/iva/` 配下にあり、`CMakeLists.txt`、`librockiva/`、`models/` を含みます。

RV1126B パッケージ：

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

モデルデータ：

```text
media/iva/iva/models/rockiva_data_rv1126b/
├── iva_object_detection_pfp.data        # Person / face / pet detection
├── iva_object_detection_v3_pfp.data
└── iva_object_detection_v3_cls8.data    # 8-class detection
```

`-lrockiva -lrknnrt` とリンクし、実行時に `.data` モデルディレクトリを初期化 API に渡します。

ROCKIVA の主な利点は、**独自の検出器を学習・後処理する必要がない**ことです。人物 / 顔 / ペットのバウンディングボックスを直接返します。動体検知の強化、人物アラート、転倒検知などの機能に適しています。この SDK に含まれる `fall_detect` プロジェクトもリファレンスとして利用できます。

ドキュメント：`docs/zh/npu_iva/Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf`。（**`docs/en` には `npu_iva` カテゴリはなく、中国語マニュアルのみが含まれています。**）

`recamera_ipc` にはすでに、`project/app/recamera_ipc/common/rockiva/` 配下に ROCKIVA 統合コードが含まれています。

## 3. RKLLM（オンデバイス大規模言語モデル）

### SDK の内容

`media/rknn-llm-mk/rknn-llm/`：

| ディレクトリ / ファイル | 内容 |
| --- | --- |
| `rkllm-runtime/Linux/` | デバイス上ランタイム（`librkllmrt.so`） |
| `rkllm-toolkit/` | PC 側モデル変換ツール（`packages/`、`examples/`） |
| `examples/rkllm_api_demo/` | テキスト専用 LLM サンプル |
| `examples/multimodal_model_demo/` | 画像と言語のマルチモーダルサンプル（`deploy/3rdparty` を含む） |
| `examples/rkllm_server_demo/` | サーバーデプロイメントサンプル |
| `doc/Rockchip_RKLLM_SDK_CN_1.2.3.pdf` / `_EN_` | 公式 RKLLM SDK 1.2.3 マニュアル |
| `rknpu-driver/rknpu_driver_0.9.8_20241009.tar.bz2` | NPU カーネルドライバパッケージ |
| `benchmark.md`, `CHANGELOG.md`, `README.md` | 性能ベンチマークと変更履歴 |

Makefile ラッパーは `media/rknn-llm-mk/Makefile` であり、`./build.sh media` の一部としてビルドされます。

### アプリケーション: `rkllm-inference`

`project/app/rkllm-inference/`（`RK_APP_RKLLM_INFERENCE=y` で有効化）からは 2 つのバイナリが生成されます：

- `rkllm_inference_demo`: 対話型の画像・テキスト推論
- `rkllm_benchmark_demo`: 単回実行の推論ベンチマーク

```bash
make -C project/app/rkllm-inference
# Outputs: project/app/rkllm-inference/out/bin/{rkllm_inference_demo,rkllm_benchmark_demo}
```

次のように実行します：

```bash
rkllm_inference_demo \
  <image_path> <encoder_model_path> <llm_model_path> \
  <max_new_tokens> <max_context_len> <rknn_core_num> \
  [img_start] [img_end] [img_content]
```

| 引数 | 意味 |
| --- | --- |
| `image_path` | 入力画像 |
| `encoder_model_path` | ビジョンエンコーダ `.rknn` |
| `llm_model_path` | 言語モデル `.rkllm` |
| `max_new_tokens` | 生成されるトークン数の上限 |
| `max_context_len` | コンテキスト長 |
| `rknn_core_num` | `2` → `RKNN_NPU_CORE_0_1`、`3` → `RKNN_NPU_CORE_0_1_2`、その他の値 → `AUTO` |
| `img_start/img_end/img_content` | ビジョン用特殊トークン。デフォルトでは Qwen-VL 形式の `vision_start`、`vision_end`、`image_pad` トークン |

対話入力では、組み込みサンプルプロンプト用の `0` / `1`、任意のテキスト、`<image>` を前置した画像＋テキスト質問、KV キャッシュをクリアする `clear`、終了する `exit` が利用できます。

ベンチマーク出力には、モデル読み込み、前処理、ビジョンエンコード、TTFT、デコード、エンドツーエンド時間、およびスループットが含まれます。`prefill_time`、`decode_time`、`memory_usage` は RKLLM の `RKLLMPerfStat` から取得されます。ビジョンエンコード後、この制約の厳しいプラットフォームでのメモリ圧を下げるために、**LLM をロードする前にエンコーダを明示的にアンロードします**。

依存関係：`librknnrt.so`、`librkllmrt.so`、およびターゲットプラットフォームの OpenCV。`project/app/rkai/rkai/common/include/rknn_api.h` の `rknn_api.h` を再利用します。

> 使用している VLM が異なるビジョンプレースホルダトークンを使う場合は、実行時に正しい `img_start` / `img_end` / `img_content` を指定してください。そうしないと、出力が正しくならない可能性があります。

### メモリと実現可能性に関する注意

RV1126B は、一般的な LLM デプロイプラットフォームと比べてメモリが大幅に少なくなっています。LLM / VLM を実行する前に：

- `rkllm_benchmark_demo` を使って `memory_usage` を確認し、モデルが OOM を引き起こさないことを確認します。
- ボード設定では `RK_BOOTARGS_CMA_SIZE="8M"` としており、CMA 領域は小さくなっています。大きなモデルは主に通常のシステムメモリと NPU メモリを消費します。
- 通常は INT4 / INT8 量子化が必要であり、FP16 モデルは収まらない可能性が高いです。

## 4. AI-ISP

`RK_AIISP_MODEL=NONE` は、このボード設定では AI-ISP が**有効化されていない**ことを意味しますが、コードパス自体は存在します：

- `media/isp/camera_engine_rkaiq/rkaiq/algos/aiisp/`（`librknnrt_32bit.so` / `librknnrt_64bit.so` を含む）
- 例：`media/samples/example/demo/sample_demo_aiisp.c`、`sample_demo_dual_aiisp.c`
- ストレステスト：`sample_demo_aiisp_stresstest.c`、`sample_demo_dual_aiisp_stresstest.c`
- AINR 関連の IQ ファイルは `iqfiles/isp35/ainr/` 配下にあります

AI-ISP を有効にするには、ボード設定で `RK_AIISP_MODEL` を特定のモデルに設定し、対応するリソースを用意します。

## 5. パフォーマンスおよびストレステスト

| ツール | パス |
| --- | --- |
| NPU ストレステスト | `project/app/recamera_utils/stress_test/npu_stress.py` |
| CPU ストレステスト | `project/app/recamera_utils/stress_test/cpu_stress.py` |
| eMMC / SD ストレステスト | `project/app/recamera_utils/stress_test/emmc_sd_stress.py` |
| EMC テスト | `project/app/recamera_utils/stress_test/emc_test.py` |
| RKLLM ベンチマーク | `rkllm_benchmark_demo` |

継続的な AI ワークロードを実行する前に、熱および電力の挙動を評価してください。長時間にわたる NPU のフルロードはサーマルスロットリングを引き起こす可能性があります。`docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf` を参照してください。

## 推奨される開発ワークフロー

1. PC 上で、RKNN-Toolkit2 2.3.2 を用いて `target_platform='rv1126b'` 向けに ONNX を `.rknn` に変換します。まずは FP16 から始めます。
2. `rknn_api.h` を用いて最小限のアプリケーションを書き、ボード上でモデルがロードされ出力を返すことを確認します。最初はカメラを使わず、静止画像から始めてください。
3. 同じ入力セットに対する ONNX の出力と比較して精度を確認します。
4. ビデオストリームを追加します：rockit から NV12 フレームを取得 → RGA で RGB 変換 / リサイズ → NPU に渡します。[Video and ISP Development](/ja/recamera_pro_video_isp_development/) を参照してください。
5. 一般的な人物 / 顔検出については、自前で同等の機能を実装する前に ROCKIVA を評価してください。
6. パイプラインが動作してから、INT8 量子化やマルチコア最適化（`RKNN_NPU_CORE_0_1`）を検討します。

## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
