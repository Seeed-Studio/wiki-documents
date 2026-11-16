---
description: Measure four-stream 4K industrial video analytics on Jetson Orin Nano 8GB and Orin NX 16GB with TensorRT YOLO, NVDEC, H.264 encoding, power, latency, and thermal monitoring.
title: 4K Industrial Vision Benchmark on Jetson Orin Nano and Orin NX
keywords:
  - Jetson Orin Nano
  - Jetson Orin NX
  - TensorRT
  - YOLOv8
  - NVDEC
  - NVENC
  - H.264
  - industrial vision
  - benchmark
tags:
  - Computer Vision
  - YOLO
  - Jetson
  - Benchmark
image: https://files.seeedstudio.com/wiki/other/rugged-benchmark-front.png
slug: /jetson-orin-industrial-vision-benchmark
last_update:
  date: 11/13/2026
  author: Dayu
createdAt: '2026-11-13'
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/jetson-orin-industrial-vision-benchmark/
---

[![reComputer Rugged industrial vision benchmark](https://files.seeedstudio.com/wiki/other/rugged-benchmark-front.png)](https://files.seeedstudio.com/wiki/other/rugged-benchmark-front.png)

<div className="jetson-product-page">
  <div className="jetson-product-actions" style={{justifyContent: 'center'}}>
    <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">Get reComputer Rugged J4012 ↗</a>
  </div>
</div>

Running YOLO on one image measures only a small part of an industrial video system. A deployed application must decode multiple streams, move and resize frames, run inference, encode recordings, and deliver usable previews while sharing memory and power.

This project instruments that complete workload on **Jetson Orin Nano 8GB** and **Jetson Orin NX 16GB**. Four native 4K H.264 industrial clips feed a TensorRT FP16 YOLOv8n detector, an H.264 recording branch, and a browser dashboard. The measurements show where CPU encoding, frame scheduling, and cooling affect the result.

**Orin Nano has no NVENC hardware.** Its recording branch uses **CPU x264 emulation**, producing real H.264 frames as a replacement for NVENC functionality. The performance data is measured from completed work. Orin NX uses its hardware NVENC encoder.

With the same four source files, sequential inference, and recording target, **Orin NX delivers 1.33× the inference throughput, 63.3% lower normalized CPU load, and 69.7% lower end-to-end latency** in these recorded application runs.

[![Four-stream application performance on Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-performance-overview.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-performance-overview.png)

**Jetson Orin Nano 8GB — CPU x264 emulation**

[![Jetson Orin Nano 8GB industrial vision dashboard with CPU x264 emulation](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nano-dashboard.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nano-dashboard.png)

**Jetson Orin NX 16GB — Hardware NVENC**

[![Jetson Orin NX 16GB industrial vision dashboard with hardware NVENC](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-dashboard.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-dashboard.png)

## Test platforms and workload

| Configuration | Jetson Orin Nano 8GB | Jetson Orin NX 16GB |
|---|---|---|
| Module identification | Orin Nano 8GB | Orin NX 16GB |
| Jetson Linux | L4T 35.5 | L4T 35.5 |
| CUDA | 11.4 | 11.4 |
| TensorRT | 8.5.2 | 8.5.2 |
| Configured power mode | 25W | MAXN |
| Runtime frequency limits | Default DVFS | CPU 1.50 GHz; GPU 816 MHz |
| CPU normalization | Average across six cores | Average across eight cores |
| Video decoder | NVDEC | NVDEC |
| H.264 encoder | CPU x264 emulation; no NVENC | Hardware NVENC |
| Inference configuration | Sequential batch 1, FP16 | Sequential batch 1, FP16 |
| Cooling during the reported run | Passive cooling | Passive cooling |

The model is YOLOv8n with a 640×640 letterboxed input, confidence threshold 0.30, and IoU threshold 0.45. Decoding and encoding retain the native **3840×2160** resolution. “4K analytics” describes the video pipeline; the detector itself consumes resized images.

The four active clips cover warehouse and factory activity:

| Channel | Scene | Native frame rate | Source |
|---|---|---:|---|
| 1 | Warehouse aisle | 25 FPS | [Men Working in a Warehouse](https://www.pexels.com/video/men-working-in-a-warehouse-4281405/) |
| 2 | Material handling | 25 FPS | [Video of Man Loading Cart](https://www.pexels.com/video/video-of-man-loading-cart-4284185/) |
| 3 | Factory production line | 24 FPS | [Wide View of Modern Factory Production Line](https://www.pexels.com/video/wide-view-of-modern-factory-production-line-30715848/) |
| 4 | Textile factory operations | 25 FPS | [Documentary Filming Inside Textile Factory](https://www.pexels.com/video/documentary-filming-inside-textile-factory-39533716/) |

Together, the sources contain 99 frames per second of media. Clips are looped for the workload and are covered by the [Pexels License](https://www.pexels.com/license/). This experiment uses H.264 throughout.

## Pipeline architecture

Decoded frames stay in NVMM before branching into recording and inference:

```text
3840×2160 H.264 → NVDEC → NVMM
                           ├─ Recording
                           │    NX:   hardware NVENC → 4K H.264
                           │    Nano: VIC → CPU-accessible I420 → x264 → 4K H.264
                           │
                           └─ VIC resize to 640×360
                                → CPU letterbox/preprocessing to 640×640
                                → TensorRT FP16 YOLOv8n
                                → CPU class-aware NMS
                                → detection results

Independent 640×360 JPEG preview worker → browser
Latest completed detections → preview overlays
```

The Nano encoder uses x264's `ultrafast` preset, `zerolatency` tuning, two threads per stream, sliced threading, no B-frames, and a 10,000 kbit/s target. A bounded recording queue drops old frames under pressure, allowing inference to continue. Encoded frames and output bytes are counted after real encoding completes.

**VIC conversion and TensorRT inference do not provide GPU H.264 bitstream encoding.** NVENC activity on Nano is reported as unavailable; no hardware utilization value is invented for the missing encoder.

The sustained Nano run selects a 5 FPS encoding media-time target per stream. This reduces recording work before conversion to CPU memory. That setting does not guarantee 20 completed frames per wall-clock second: actual input progress and encoder capacity still determine output throughput. The dashboard reports both actual encoded FPS and encoding coverage.

## What was measured

The four video files on NX were verified against the Nano reference with SHA256. Both sustained runs use four streams, source pacing, sequential TensorRT batch 1, a 5 FPS recording media-time target per stream, 15 FPS preview generation, and ten minutes of collection. Summaries exclude the first 30 seconds. These are deployed-system measurements with different encoder backends and operating points, rather than an isolated GPU comparison.

- **Nano sustained run:** 13 November 2026, 10:08:04–10:18:04 UTC+08, 582 samples over 599.83 seconds.
- **NX sustained run:** 13 November 2026, 13:47:26 UTC+08 to 13 November 2026, 13:57:27 UTC+08, 582 samples over 599.86 seconds. CPU/GPU frequency limits are listed above. Visual Hub was paused during collection and restored afterwards.
- **NX full-rate recording segment:** the first 99.72 seconds of a separate capture, with the recording cap removed and dynamic inference batching enabled. The planned 150-second capture was stopped at the 99°C measurement guard; this short capacity segment excludes its first 30 seconds and retains source pacing and the same frequency limits.

Backend preview generation remains enabled during collection; an additional browser preview client is opened only after the sustained measurement finishes.

Throughput counts completed frames, rather than requested FPS. Both sustained summaries use counter differences and integrated module energy:

```text
Throughput (FPS)       = completed frames / elapsed seconds
Average module power  = integrated module energy / elapsed seconds
Encoding coverage     = encoded frames / decoded frames
```

Curve legends show the final sampled values; summary tables use counter deltas after warm-up.

Power comes from the INA3221 **module VDD_IN** rail. It excludes separately powered peripherals and is not wall power. CPU load is normalized across each module's cores. NVDEC/NVENC activity percentages represent the fraction of nonzero counter samples at 20 Hz, rather than a calibrated hardware utilization measurement.

## Four-stream results

| Metric | Orin Nano 8GB | Orin NX 16GB |
|---|---:|---:|
| Aggregate decode throughput | 65.24 FPS | 98.63 FPS |
| Aggregate inference throughput | 58.82 FPS | 78.06 FPS |
| Aggregate H.264 encoding throughput | 13.24 FPS, CPU x264 | 20.00 FPS, NVENC |
| CPU load | 49.34% | 18.10% |
| GPU load | 30.49% | 54.68% |
| End-to-end latency, rolling P95 mean | 1108.46 ms | 335.57 ms |
| Module input power | 11.02 W | 15.76 W |
| Peak measured temperature | 58.19°C | 97.38°C |
| Thermal-throttling samples | 0 | 0 |

### Throughput and encoding pressure

[![Decode, inference, and encoding throughput: Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-throughput-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-throughput-comparison.png)

Individual curves: [Nano throughput](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-throughput.png) · [NX throughput](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-throughput.png).

NX sustains 78.06 inference FPS and 98.63 decode FPS with the same four source files. Nano completes 58.82 inference FPS and 65.24 decode FPS. Both use the 5 FPS recording target per stream; actual completed recording rates are 20.00 and 13.24 FPS respectively.

### Full-rate NVENC recording

Removing the NX recording cap produces **98.51 aggregate 4K H.264 encoding FPS** while inference continues at 75.63 FPS. Decode throughput is 98.51 FPS, normalized CPU load is 12.79%, and module power is 16.88 W. This short capacity segment uses dynamic inference batching and source-rate recording; it is not a ten-minute endurance result.

[![NX full-rate hardware H.264 recording workload](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-full-rate-throughput.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-full-rate-throughput.png)

Hardware NVENC allows the recording branch to handle the source-rate 4K workload while sharing the system with detection. Nano's CPU x264 replacement requires an explicit recording budget to preserve the rest of the application.

### Compute load and power

[![CPU load, GPU load, and module power: Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-load-and-power-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-load-and-power-comparison.png)

Individual curves: [Nano load and power](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-load-and-power.png) · [NX load and power](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-load-and-power.png).

On Nano, x264 shares CPU resources with preprocessing, postprocessing, preview generation, and application threads. GPU load alone therefore cannot explain pipeline capacity. Hardware NVENC on NX handles the recording branch independently of CPU bitstream encoding, although decoding, memory traffic, and thermal limits still affect the application.

### Temperature and cooling

[![CPU, GPU, and maximum sensor temperature: Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-temperature-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-temperature-comparison.png)

Individual curves: [Nano temperature](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-temperature.png) · [NX temperature](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-temperature.png).

Nano reached a maximum of 58.19°C. The sustained NX run peaked at 97.38°C and recorded 0 sampled thermal-throttling events. A preliminary unrestricted MAXN capture was stopped at 99°C; the sustained result therefore uses the CPU/GPU limits listed above. Hardware thermal protections remain active.

Both devices use passive cooling. Ambient temperature and equivalent cooling assemblies were not controlled, so these sessions do not establish a thermal advantage between modules.

### End-to-end latency

[![End-to-end latency histories: Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-latency-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-latency-comparison.png)

Individual curves: [Nano latency](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-latency.png) · [NX latency](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-latency.png).

Both curves show the **worst rolling per-channel P95**, measured from decoder input to completed detection postprocessing. The time-weighted means after warm-up are 1108.46 ms for Nano and 335.57 ms for NX, a 69.7% reduction in this recorded statistic.

These are complete-pipeline latency measurements, not isolated TensorRT execution times or a P95 recalculated over every frame in the ten-minute run. Both curves and both summary values use the same rolling statistic.

### Memory behavior

[![Device memory usage: Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-memory-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-memory-comparison.png)

Individual curves: [Nano memory](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-memory.png) · [NX memory](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-memory.png).

The curves show actual device memory usage as a percentage of each device's available RAM. Nano rises from 35.6% to 71.2% during the run; application RSS rises from approximately 2,108 MiB to 4,695 MiB. NX memory rises from 37.3% to 43.6% in the new sustained run, with application RSS ending at 1277 MiB. The larger Nano growth remains unresolved in this measurement. Ten minutes of acceptable temperature and throughput does not establish memory stability for continuous operation.

## Detection previews and dashboard behavior

[![Four industrial detection views from Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-detection-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-detection-comparison.png)

Individual previews: [Nano detections](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-detection.png) · [NX detections](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-detection.png).

The browser uses independent 640×360 JPEG previews with a selectable 5 or 15 FPS target. Each channel has one outstanding frame request, paints new frames, and avoids accumulating an old-frame queue. Generated preview FPS, browser display FPS, inference FPS, and video encoding FPS are reported separately.

Bounding boxes use the latest completed detection result. The overlay shows its update age and hides boxes after 300 ms without a new result. A smooth browser image consequently does not mean every displayed frame has been inferred, and these overlays are not object tracking.

Both dashboard figures render recorded telemetry and the completed-run summaries. Nano telemetry is from 13 November at 10:18:04 UTC+08; its preview pixels were captured separately at 11:05:05. NX telemetry and preview pixels were captured after the sustained run at 13:57:34 UTC+08. Dashboard instantaneous values can differ from the window averages, and preview scenes are not synchronized across devices.

YOLOv8n uses generic COCO80 classes. These previews demonstrate person and object detection in industrial scenes; no PPE, defect-detection, or industrial accuracy benchmark is claimed.

## Reproducing the measurement approach

Before choosing a recording backend, inspect the actual module identity and installed software. A carrier-board device-tree model string alone can be insufficient to distinguish modules. The Orin Nano 8GB identity used here was verified from module EEPROM.

Useful checks on a Jetson installation include:

```bash
cat /etc/nv_tegra_release
/usr/local/cuda/bin/nvcc --version
python3 -c "import tensorrt as trt; print(trt.__version__)"
sudo nvpmodel -q
gst-inspect-1.0 nvv4l2decoder
gst-inspect-1.0 nvv4l2h264enc
gst-inspect-1.0 x264enc
```

On Nano, an absent NVENC plugin must not be reported as a working hardware encoder. Verify output codec and dimensions independently, and count completed encoded frames rather than frames submitted to a queue. TensorRT engines should be built for the target module and software stack.

For a repeatable run, retain the source files and their checksums, model settings, power mode, cooling state, encoder target, pacing policy, preview settings, and measurement timestamps. Start monitoring before the workload and distinguish a short capacity test from a sustained run. Keep per-channel counters so that aggregate throughput cannot hide a stalled camera.

The dashboard serves frontend assets and the measurement API from the same backend. Each curve can be exported independently. This makes it possible to inspect throughput together with power, temperature, latency, and memory instead of selecting a single favorable FPS value.

## Practical deployment choices

- **For full-rate multi-stream 4K recording, budget for the encoder.** NX's hardware NVENC branch reached 98.51 encoded FPS in its source-rate recording run. Nano's CPU x264 replacement requires a recording-rate budget and visible frame coverage.
- **Tune the complete pipeline.** An earlier Nano short suite measured 56.82 inference FPS with sequential inference versus 51.70 FPS with batching under its capped encoder configuration. Batch size alone did not predict application throughput.
- **Treat cooling and memory as operating constraints.** The sustained NX operating point uses explicit frequency limits; the Nano record contains memory growth. Monitor temperature, throttling, and memory during longer endurance runs.
- **Measure freshness separately from display smoothness.** Browser FPS describes presentation. Decoder-to-detection latency describes when the result becomes available to an application.

## Related resources

- [Deploy YOLOv8 with TensorRT on Jetson](https://wiki.seeedstudio.com/YOLOv8-TRT-Jetson/)
- [AI NVR with Jetson Orin](https://wiki.seeedstudio.com/ai_nvr_with_jetson/)
- [Pexels License](https://www.pexels.com/license/)

## Tech Support & Product Discussion

For technical questions and implementation discussions, visit the [Seeed Studio Forum](https://forum.seeedstudio.com/) or [Wiki discussions](https://github.com/Seeed-Studio/wiki-documents/discussions/69).
