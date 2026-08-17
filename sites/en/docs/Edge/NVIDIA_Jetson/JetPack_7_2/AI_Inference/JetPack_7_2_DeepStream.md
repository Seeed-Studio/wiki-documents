---
description: Install and use NVIDIA DeepStream 9.1 on JetPack 7.2, including agentic skills, natural-language pipeline development, video analytics, memory planning, and migration guidance.
title: DeepStream on JetPack 7.2
keywords:
  - JetPack 7.2
  - DeepStream
  - GStreamer
  - TensorRT
  - video analytics
image: https://files.seeedstudio.com/wiki/reComputer/Application/YOLOv8-DeepStream-TRT-Jetson/1.jpg
slug: /jetpack_7_2_deepstream
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/jetpack_7_2_deepstream/
---

# DeepStream on JetPack 7.2

NVIDIA DeepStream is the accelerated streaming analytics framework in the Jetson ecosystem. It combines hardware video decode, GStreamer, TensorRT inference, tracking, metadata, message transport, and application APIs into multi-stream edge AI pipelines.

As of **July 31, 2026**, **DeepStream 9.1** is the current release and the first DeepStream release whose Jetson platform table explicitly targets **JetPack 7.2 GA / Jetson Linux 39.2**. It supports both **Jetson Orin** and **Jetson Thor**.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" />
</div>

:::info
The animation above is reused from an existing Seeed DeepStream application to illustrate a multi-object analytics pipeline. Rebuild the application, TensorRT engines, plugins, and configuration against DeepStream 9.1 before using the workflow on JetPack 7.2.
:::

## DeepStream 9.1 and JetPack 7.2 Baseline

| Component | JetPack 7.2 DeepStream baseline |
| --- | --- |
| DeepStream | 9.1 |
| Jetson Linux | 39.2 GA |
| JetPack | 7.2 GA |
| CUDA | 13.2 |
| TensorRT | 10.16.1.7 |
| cuDNN | 9.20.0.46 |
| GStreamer | 1.24.2 |
| OpenCV | 4.8.0 |
| Supported Jetson platforms | Jetson Orin and Jetson Thor |
| Native Jetson package | `deepstream-9.1_9.1.0-1_arm64.deb` |

:::warning
DeepStream 9.0 Jetson packages were based on JetPack 7.1 / Jetson Linux 38.4. Use DeepStream 9.1 for a JetPack 7.2 target. Do not install an older Jetson package only because the major version looks close.
:::

## Why DeepStream 9.1 Matters

DeepStream 9.1 is more than a compatibility update. The release moves application development toward an agent-assisted workflow while continuing the DeepStream 9.x shift toward Service Maker, advanced multi-camera analytics, foundation-model integration, and observable production services.

### Natural-Language Coding Agent

The official DeepStream repository includes a **DeepStream Coding Agent**. A developer can describe a pipeline in natural language, and the agent can generate a DeepStream application, assemble configuration and source files, build the project, launch it in a container, and help diagnose errors.

Example request:

```text
Create a DeepStream 9.1 application for JetPack 7.2 that reads four RTSP streams,
runs a PeopleNet-compatible detector, tracks people, publishes entry events,
and saves a short clip when a person enters the restricted zone.
```

The Coding Agent changes how applications are authored; it does not remove the need to validate model compatibility, stream capacity, memory use, and application behavior on the target Jetson.

### Agentic Skills

DeepStream 9.1 provides access to **13 agentic skills** through the DeepStream repository. The official skills cover tasks such as:

- building and running DeepStream Service Maker applications;
- inspecting and debugging pipelines;
- configuring multi-view 3D tracking;
- performing automatic multi-camera calibration;
- building inference configurations from supported ONNX or TAO models;
- generating application code and running containerized examples.

Two important new workflows are:

- **MV3DT skill**: helps configure multi-view 3D tracking across calibrated cameras;
- **AutoMagicCalib skill**: assists camera calibration for multi-camera analytics deployments.

### Inference Builder MCP

The Inference Builder MCP server can inspect a supported model and generate DeepStream inference artifacts. NVIDIA documents support for ONNX and TAO model paths including PeopleNet, YOLOv8, YOLOv11, YOLOE, and Grounding DINO workflows.

Treat generated inference configuration as a starting point. Confirm preprocessing, tensor names, dimensions, label files, parser behavior, precision, and TensorRT engine output before production use.

### DeepStream 9.x Capabilities Available to 9.1 Applications

DeepStream 9.1 also carries forward the major DeepStream 9.x capabilities:

- Service Maker Flow and Graph APIs;
- Python Service Maker development;
- MaskTracker for segmentation-aware tracking;
- MediaExtractor for event-oriented clips and media capture;
- MV3DT multi-view 3D tracking;
- 3D pose estimation and Sparse4D examples;
- dynamic stream management through REST APIs;
- OpenTelemetry and Prometheus-oriented observability;
- Triton and TensorRT inference integration;
- C/C++, Python, GStreamer, and containerized application paths.

For new Python applications, NVIDIA recommends `pyservicemaker`; the older `pyds` Python bindings are deprecated. Graph Composer is also deprecated, and OpenCV support is disabled by default unless the relevant components are rebuilt with OpenCV enabled.

## Two Types of Natural-Language Integration

When discussing DeepStream and natural language, distinguish **pipeline authoring** from **video understanding**.

### 1. Natural Language for Building Pipelines

The DeepStream Coding Agent and skills translate development intent into application code and configuration. This path is directly relevant to JetPack 7.2 because the generated application can target a DeepStream 9.1 Jetson container or package.

Good requests specify:

- the target is JetPack 7.2 and DeepStream 9.1;
- Jetson Orin or Jetson Thor;
- input types and stream count;
- the model and precision;
- tracker, output, event, and message requirements;
- memory, latency, and power constraints.

### 2. Natural Language for Understanding Video

DeepStream 9.1 documents an `nvvllmvlm` plugin that connects video streams to large language or vision-language models. The plugin supports:

- Cosmos Reason 2 and Cosmos Nemotron 12B model families;
- per-stream natural-language prompts;
- time-segment-based video reasoning;
- asynchronous inference;
- multi-stream processing;
- text responses attached to DeepStream metadata.

Example questions include:

```text
Is there smoke or fire in this stream?
Is anyone entering the restricted area without protective equipment?
Summarize the activity around the loading bay during the last segment.
```

:::warning Current Jetson limitation
The DeepStream 9.1 `nvvllmvlm` documentation currently lists the plugin for **x86 discrete GPUs only**, with approximately **40 GB of GPU memory** required for the documented Cosmos examples. Do not present this plugin as a native Jetson Orin or Jetson Thor path until NVIDIA documents Jetson support and the target model fits the available unified memory.
:::

### Recommended JetPack 7.2 Hybrid Architecture

JetPack 7.2 can still participate in a natural-language video system by separating real-time edge processing from large-model reasoning:

```text
Camera / RTSP streams
        |
        v
Jetson + JetPack 7.2 + DeepStream 9.1
decode -> detection -> tracking -> event filtering -> clip selection
        |
        +---- structured metadata ----+
        |                             |
        +---- selected video clips ---+--> x86 DeepStream nvvllmvlm
                                      or remote VLM service
                                                |
                                                v
                               natural-language answer / alert / summary
```

This design keeps continuous decoding, filtering, and low-latency analytics on Jetson while sending only relevant clips or events to the larger VLM service. It also reduces bandwidth and avoids loading a very large language model beside every edge pipeline.

## Installation Options

DeepStream 9.1 provides three practical development paths on JetPack 7.2.

### Option A: Native Jetson Package

Verify JetPack 7.2 first:

```bash
cat /etc/nv_tegra_release
```

The output should identify Jetson Linux release 39.2. Install the DeepStream prerequisites documented by NVIDIA:

```bash
sudo apt update
sudo apt install -y \
  libssl3 \
  libssl-dev \
  libcurl4-openssl-dev \
  libgstreamer1.0-0 \
  gstreamer1.0-tools \
  gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad \
  gstreamer1.0-plugins-ugly \
  gstreamer1.0-libav \
  libgstreamer-plugins-base1.0-dev \
  libgstrtspserver-1.0-0 \
  libjansson4 \
  libyaml-cpp-dev \
  libmosquitto1
```

Download `deepstream-9.1_9.1.0-1_arm64.deb` from the official NVIDIA DeepStream GitHub release assets, then install it:

```bash
cd ~/Downloads
sudo apt install ./deepstream-9.1_9.1.0-1_arm64.deb
sudo ldconfig
```

Verify the installation:

```bash
deepstream-app --version-all
```

### Option B: NVIDIA Container

DeepStream containers are published under the unified `deepstream` repository. The older `deepstream-l4t` repository is no longer the current container path.

For a graphical sample container:

```bash
xhost +local:docker

sudo docker run --rm -it \
  --runtime nvidia \
  --network host \
  -e DISPLAY="$DISPLAY" \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  nvcr.io/nvidia/deepstream:9.1-triton-multiarch
```

For a headless deployment, omit the display mount and use a configuration that writes metadata, files, RTSP, or messages instead of opening a window.

### Option C: DeepStream Monorepo and Agentic Workflow

Clone the official repository when you need Service Maker source, skills, samples, coding-agent integration, or reusable plugins:

```bash
git clone https://github.com/NVIDIA/DeepStream.git
cd DeepStream
```

In a compatible coding-agent environment, follow the repository's `/install-coding-agent` workflow. Keep generated work in version control and review every command before it modifies the Jetson or starts a privileged container.

## Validate the First Pipeline

After installing DeepStream, list the sample configurations shipped with the package:

```bash
find /opt/nvidia/deepstream/deepstream-9.1/samples/configs \
  -maxdepth 3 -type f -name '*.txt' | sort | head -30
```

Start with one local file or one camera before enabling multiple RTSP streams. A basic validation should confirm:

1. hardware decode succeeds;
2. TensorRT loads or rebuilds the correct engine;
3. inference metadata appears;
4. the tracker produces stable IDs;
5. the output sink runs without accumulating latency;
6. memory remains stable for at least 30 minutes.

## JetPack 7.2 Migration Rules

### Rebuild TensorRT Engines

Do not copy a serialized TensorRT engine from JetPack 6.x into DeepStream 9.1. Rebuild it with the JetPack 7.2 TensorRT 10.16.1.7 runtime and the target GPU architecture.

### Rebuild Custom Parsers and Plugins

Recompile custom `nvdsinfer` parsers, GStreamer plugins, CUDA extensions, and Service Maker components against the DeepStream 9.1 headers and JetPack 7.2 libraries.

### Review Configuration Keys

Compare every application configuration with the DeepStream 9.1 migration guide. Pay particular attention to:

- `nvstreammux` behavior and batch dimensions;
- inference tensor metadata and parser configuration;
- tracker libraries and tracker configuration;
- REST-controlled dynamic stream handling;
- message-converter and message-broker schemas;
- Python binding or Service Maker API changes.

### Revalidate Camera and Codec Paths

JetPack 7.2 moves to Linux kernel 6.8 and a newer multimedia stack. Revalidate CSI, GMSL, USB, RTSP, decoder, encoder, and zero-copy paths rather than assuming that a JetPack 6.x GStreamer pipeline remains unchanged.

## Memory-Efficient DeepStream Design

DeepStream pipelines can become memory-bound when they combine many decoders, large batching, multiple TensorRT engines, high-resolution frames, trackers, clip recording, and an LLM or VLM service.

Use the [JetPack 7.2 Memory Optimization guide](/jetpack_7_2_memory_optimization/) together with these pipeline-level controls:

- start with one stream and increase the stream count gradually;
- match `nvstreammux` batch size to the actual active sources;
- use the lowest model precision that meets accuracy requirements;
- avoid loading duplicate engines in separate application processes;
- reduce input resolution before inference when the use case allows it;
- use inference intervals for workloads that do not require inference on every frame;
- select a tracker that matches the accuracy and memory budget;
- keep only event clips instead of recording every decoded frame;
- send filtered metadata or clips to a remote VLM rather than co-loading a very large VLM on the edge device.

Measure idle memory, engine-load memory, peak batching memory, and steady-state memory with `tegrastats`. Do not optimize only for frames per second; monitor latency, dropped frames, queue growth, temperature, and board power.

DeepStream 9.1 documents an Ubuntu 24.04 memory-surge workaround for applications that repeatedly add and remove streams through the REST API:

```bash
export MALLOC_ARENA_MAX=1
export MALLOC_MMAP_MAX_=0
export MALLOC_MMAP_THRESHOLD_=131072
export MALLOC_TRIM_THRESHOLD_=131072
```

Apply these variables only to the affected application process and validate long-duration behavior before making them part of a system-wide environment.

## Suggested JetPack 7.2 Projects

### Natural-Language Pipeline Generator

Use the Coding Agent to generate a Service Maker application from a written requirement, then validate and version the generated code.

### Multi-Camera 3D Tracking

Combine AutoMagicCalib and MV3DT skills for calibrated multi-camera tracking. Begin with synchronized recorded files before moving to live cameras.

### Edge-to-Cloud Video Reasoning

Run decode, detection, tracking, and clip selection on Jetson. Send selected events to an x86 DeepStream `nvvllmvlm` service for natural-language answers and summaries.

### Memory-Aware Industrial Monitoring

Extend the [Industrial Vision Monitoring on JetPack 7.2](/industrial_vision_monitoring_on_industrial_bk/) workflow with DeepStream batching, tracking, event clips, and structured metadata while monitoring unified memory.

## Production Checklist

- [ ] Jetson reports JetPack 7.2 / Jetson Linux 39.2.
- [ ] DeepStream reports version 9.1.
- [ ] All TensorRT engines were rebuilt on the target release.
- [ ] Custom parsers and plugins compile against DeepStream 9.1.
- [ ] Camera, RTSP, decoder, encoder, and zero-copy paths are validated.
- [ ] Stream add/remove and reconnect behavior are tested.
- [ ] Memory remains stable during the maximum stream and event load.
- [ ] Latency, FPS, dropped frames, power, and thermals are recorded.
- [ ] Natural-language video reasoning runs on a supported backend.
- [ ] Generated agent code is reviewed and committed before deployment.

## Official NVIDIA References

- [DeepStream 9.1 Release Notes](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_Release_notes.html)
- [DeepStream Getting Started](https://developer.nvidia.com/deepstream-getting-started)
- [DeepStream 9.1 Jetson Installation](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_Installation.html)
- [DeepStream Docker Containers](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_docker_containers.html)
- [DeepStream GitHub Repository](https://github.com/NVIDIA/DeepStream)
- [DeepStream Agentic Skills Reference](https://docs.nvidia.com/metropolis/deepstream/9.1/text/AgenticSkillsReference.html)
- [Inference Builder MCP Server](https://docs.nvidia.com/metropolis/deepstream/9.1/text/InferenceBuilder_MCP_Server.html)
- [LLM/VLM Inference Plugin](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_plugin_gst-nvvllmvlm.html)

## Tech Support & Product Discussion

Thank you for choosing Seeed Studio products! For technical support and product discussion, please use the following channels:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>