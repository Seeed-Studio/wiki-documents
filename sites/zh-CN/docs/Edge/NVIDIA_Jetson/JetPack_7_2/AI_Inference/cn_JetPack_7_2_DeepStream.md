---
description: 在 JetPack 7.2 上安装和使用 NVIDIA DeepStream 9.1，包括智能体技能、自然语言流水线开发、视频分析、内存规划和迁移指导。
title: JetPack 7.2 上的 DeepStream
keywords:
  - JetPack 7.2
  - DeepStream
  - GStreamer
  - TensorRT
  - 视频分析
image: https://files.seeedstudio.com/wiki/reComputer/Application/YOLOv8-DeepStream-TRT-Jetson/1.jpg
slug: /jetpack_7_2_deepstream
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# JetPack 7.2 上的 DeepStream

NVIDIA DeepStream 是 Jetson 生态系统中用于加速流式分析的框架。它将硬件视频解码、GStreamer、TensorRT 推理、跟踪、元数据、消息传输和应用 API 组合成多路流的边缘 AI 流水线。

截至 **2026 年 7 月 31 日**，**DeepStream 9.1** 是当前版本，也是第一个在 Jetson 平台支持表中明确面向 **JetPack 7.2 GA / Jetson Linux 39.2** 的 DeepStream 版本。它同时支持 **Jetson Orin** 和 **Jetson Thor**。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" />
</div>

:::info
上面的动画复用了一个现有的 Seeed DeepStream 应用，用于展示多目标分析流水线。在 JetPack 7.2 上使用该工作流之前，请基于 DeepStream 9.1 重新构建应用、TensorRT 引擎、插件和配置。
:::

## DeepStream 9.1 和 JetPack 7.2 基线

| 组件 | JetPack 7.2 DeepStream 基线 |
| --- | --- |
| DeepStream | 9.1 |
| Jetson Linux | 39.2 GA |
| JetPack | 7.2 GA |
| CUDA | 13.2 |
| TensorRT | 10.16.1.7 |
| cuDNN | 9.20.0.46 |
| GStreamer | 1.24.2 |
| OpenCV | 4.8.0 |
| 支持的 Jetson 平台 | Jetson Orin 和 Jetson Thor |
| 原生 Jetson 软件包 | `deepstream-9.1_9.1.0-1_arm64.deb` |

:::warning
DeepStream 9.0 Jetson 软件包基于 JetPack 7.1 / Jetson Linux 38.4。针对 JetPack 7.2 目标请使用 DeepStream 9.1。不要仅因为主版本号看起来接近就安装旧的 Jetson 软件包。
:::

## DeepStream 9.1 的重要性

DeepStream 9.1 不只是兼容性更新。该版本在延续 DeepStream 9.x 向 Service Maker、高级多摄像头分析、基础模型集成和可观测生产服务演进的同时，将应用开发推进到智能体辅助的工作流。

### 自然语言编码智能体

官方 DeepStream 仓库包含一个 **DeepStream Coding Agent**。开发者可以用自然语言描述流水线，智能体可以生成 DeepStream 应用、组装配置和源文件、构建项目、在容器中启动它，并帮助诊断错误。

示例请求：

```text
Create a DeepStream 9.1 application for JetPack 7.2 that reads four RTSP streams,
runs a PeopleNet-compatible detector, tracks people, publishes entry events,
and saves a short clip when a person enters the restricted zone.
```

Coding Agent 改变了应用的编写方式；它不会消除在目标 Jetson 上验证模型兼容性、流路容量、内存使用和应用行为的必要性。

### 智能体技能

DeepStream 9.1 通过 DeepStream 仓库提供对 **13 个智能体技能** 的访问。官方技能涵盖以下任务：

- 构建和运行 DeepStream Service Maker 应用；
- 检查和调试流水线；
- 配置多视角 3D 跟踪；
- 执行自动多摄像头标定；
- 从受支持的 ONNX 或 TAO 模型构建推理配置；
- 生成应用代码并运行容器化示例。

两个重要的新工作流是：

- **MV3DT 技能**：帮助在已标定摄像头之间配置多视角 3D 跟踪；
- **AutoMagicCalib 技能**：辅助多摄像头分析部署中的摄像头标定。

### Inference Builder MCP

Inference Builder MCP 服务器可以检查受支持的模型并生成 DeepStream 推理工件。NVIDIA 文档说明了对 ONNX 和 TAO 模型路径的支持，包括 PeopleNet、YOLOv8、YOLOv11、YOLOE 和 Grounding DINO 工作流。

将生成的推理配置视为起点。在生产使用前，请确认预处理、张量名称、维度、标签文件、解析器行为、精度以及 TensorRT 引擎输出。

### DeepStream 9.x 在 9.1 应用中可用的能力

DeepStream 9.1 也延续了 DeepStream 9.x 的主要能力：

- Service Maker Flow 和 Graph API；
- Python Service Maker 开发；
- 面向分割感知跟踪的 MaskTracker；
- 用于事件导向片段和媒体采集的 MediaExtractor；
- MV3DT 多视角 3D 跟踪；
- 3D 姿态估计和 Sparse4D 示例；
- 通过 REST API 的动态流管理；
- 面向 OpenTelemetry 和 Prometheus 的可观测性；
- Triton 和 TensorRT 推理集成；
- C/C++、Python、GStreamer 和容器化应用路径。

对于新的 Python 应用，NVIDIA 推荐使用 `pyservicemaker`；较旧的 `pyds` Python 绑定已被弃用。Graph Composer 也已弃用，并且除非重新构建相关组件并启用 OpenCV，否则默认禁用 OpenCV 支持。

## 两类自然语言集成方式

在讨论 DeepStream 与自然语言时，需要区分 **流水线编写** 和 **视频理解**。

### 1. 用自然语言构建流水线

DeepStream Coding Agent 和技能将开发意图转换为应用代码和配置。此路径与 JetPack 7.2 直接相关，因为生成的应用可以面向 DeepStream 9.1 Jetson 容器或软件包。

良好的请求应明确：

- 目标是 JetPack 7.2 和 DeepStream 9.1；
- Jetson Orin 或 Jetson Thor；
- 输入类型和流路数量；
- 模型和精度；
- 跟踪器、输出、事件和消息需求；
- 内存、延迟和功耗约束。

### 2. 用自然语言理解视频

DeepStream 9.1 文档中包含一个 `nvvllmvlm` 插件，用于将视频流连接到大语言模型或视觉语言模型。该插件支持：

- Cosmos Reason 2 和 Cosmos Nemotron 12B 模型系列；
- 按流配置的自然语言提示；
- 基于时间片段的视频推理；
- 异步推理；
- 多流处理；
- 附加到 DeepStream 元数据的文本响应。

示例问题包括：

```text
Is there smoke or fire in this stream?
Is anyone entering the restricted area without protective equipment?
Summarize the activity around the loading bay during the last segment.
```

:::warning 当前 Jetson 限制
DeepStream 9.1 的 `nvvllmvlm` 文档目前仅将该插件列为适用于 **x86 离散 GPU**，并且文档中的 Cosmos 示例大约需要 **40 GB GPU 内存**。在 NVIDIA 文档化 Jetson 支持并且目标模型适配可用统一内存之前，请不要将此插件作为原生 Jetson Orin 或 Jetson Thor 路径进行介绍。
:::

### 推荐的 JetPack 7.2 混合架构

通过将实时边缘处理与大模型推理分离，JetPack 7.2 仍然可以参与自然语言视频系统：

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

这种设计将持续解码、过滤和低延迟分析保留在 Jetson 上，同时只将相关片段或事件发送到更大的 VLM 服务。它还能降低带宽占用，并避免在每条边缘流水线旁加载一个非常大的语言模型。

## 安装选项

DeepStream 9.1 在 JetPack 7.2 上提供三种实用的开发路径。

### 选项 A：原生 Jetson 软件包

首先验证 JetPack 7.2：

```bash
cat /etc/nv_tegra_release
```

输出应标识 Jetson Linux 版本为 39.2。安装 NVIDIA 文档中列出的 DeepStream 先决条件：

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

从官方 NVIDIA DeepStream GitHub 发布资源中下载 `deepstream-9.1_9.1.0-1_arm64.deb`，然后安装它：

```bash
cd ~/Downloads
sudo apt install ./deepstream-9.1_9.1.0-1_arm64.deb
sudo ldconfig
```

验证安装：

```bash
deepstream-app --version-all
```

### 选项 B：NVIDIA 容器

DeepStream 容器发布在统一的 `deepstream` 仓库下。较旧的 `deepstream-l4t` 仓库不再是当前的容器路径。

对于图形化示例容器：

```bash
xhost +local:docker

sudo docker run --rm -it \
  --runtime nvidia \
  --network host \
  -e DISPLAY="$DISPLAY" \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  nvcr.io/nvidia/deepstream:9.1-triton-multiarch
```

对于无头部署，省略显示挂载，并使用写入元数据、文件、RTSP 或消息而不是打开窗口的配置。

### 选项 C：DeepStream 单一仓库与智能体工作流

当你需要 Service Maker 源码、技能、示例、编码智能体集成或可复用插件时，请克隆官方仓库：

```bash
git clone https://github.com/NVIDIA/DeepStream.git
cd DeepStream
```

在兼容的编码智能体环境中，按照仓库的 `/install-coding-agent` 工作流进行操作。将生成的工作内容纳入版本控制，并在其修改 Jetson 或启动特权容器之前审查每一条命令。

## 验证第一个流水线

安装 DeepStream 之后，列出软件包中附带的示例配置：

```bash
find /opt/nvidia/deepstream/deepstream-9.1/samples/configs \
  -maxdepth 3 -type f -name '*.txt' | sort | head -30
```

在启用多路 RTSP 流之前，从一个本地文件或一个摄像头开始。基础验证应确认：

1. 硬件解码成功；
2. TensorRT 加载或重建了正确的引擎；
3. 推理元数据出现；
4. 跟踪器生成稳定的 ID；
5. 输出接收端在不累积延迟的情况下运行；
6. 内存在至少 30 分钟内保持稳定。

## JetPack 7.2 迁移规则

### 重新构建 TensorRT 引擎

不要将从 JetPack 6.x 序列化的 TensorRT 引擎复制到 DeepStream 9.1 中。请使用 JetPack 7.2 的 TensorRT 10.16.1.7 运行时和目标 GPU 架构重新构建。

### 重新构建自定义解析器和插件

重新编译自定义 `nvdsinfer` 解析器、GStreamer 插件、CUDA 扩展和 Service Maker 组件，使其基于 DeepStream 9.1 头文件和 JetPack 7.2 库。

### 检查配置键

将每个应用程序配置与 DeepStream 9.1 迁移指南进行比较。特别注意：

- `nvstreammux` 行为和批处理维度；
- 推理张量元数据和解析器配置；
- 跟踪器库和跟踪器配置；
- 通过 REST 控制的动态流处理；
- 消息转换器和消息代理的模式；
- Python 绑定或 Service Maker API 变更。

### 重新验证相机和编解码路径

JetPack 7.2 迁移到 Linux 内核 6.8 和更新的多媒体栈。请重新验证 CSI、GMSL、USB、RTSP、解码器、编码器和零拷贝路径，而不是假设 JetPack 6.x 的 GStreamer 管道保持不变。

## 内存高效的 DeepStream 设计

当 DeepStream 管道组合了大量解码器、大批量处理、多路 TensorRT 引擎、高分辨率帧、跟踪器、片段录制以及 LLM 或 VLM 服务时，可能会受到内存限制。

将 [JetPack 7.2 内存优化指南](/cn/jetpack_7_2_memory_optimization/) 与以下管道级控制结合使用：

- 从一个流开始，并逐步增加流的数量；
- 将 `nvstreammux` 批大小与实际活动源匹配；
- 使用满足精度要求的最低模型精度；
- 避免在不同的应用进程中加载重复的引擎；
- 在推理前降低输入分辨率（在用例允许的情况下）；
- 对不需要对每一帧进行推理的工作负载使用推理间隔；
- 选择与精度和内存预算相匹配的跟踪器；
- 仅保留事件片段，而不是记录每一帧解码结果；
- 将过滤后的元数据或片段发送到远程 VLM，而不是在边缘设备上同时加载非常大的 VLM。

使用 `tegrastats` 测量空闲内存、引擎加载内存、峰值批处理内存和稳态内存。不要只针对每秒帧数进行优化；还要监控延迟、丢帧、队列增长、温度和板级功耗。

DeepStream 9.1 记录了一个适用于通过 REST API 反复添加和移除流的应用程序的 Ubuntu 24.04 内存激增解决方法：

```bash
export MALLOC_ARENA_MAX=1
export MALLOC_MMAP_MAX_=0
export MALLOC_MMAP_THRESHOLD_=131072
export MALLOC_TRIM_THRESHOLD_=131072
```

仅将这些变量应用于受影响的应用进程，并在将其作为系统范围环境的一部分之前验证长时间运行行为。

## 建议的 JetPack 7.2 项目

### 自然语言管道生成器

使用 Coding Agent 根据书面需求生成一个 Service Maker 应用程序，然后验证并进行版本管理。

### 多相机 3D 跟踪

结合 AutoMagicCalib 和 MV3DT 技能，实现经过标定的多相机跟踪。先从同步录制的文件开始，再迁移到实时相机。

### 边缘到云的视频推理

在 Jetson 上运行解码、检测、跟踪和片段选择。将选定事件发送到 x86 DeepStream `nvvllmvlm` 服务，以获得自然语言回答和摘要。

### 内存感知型工业监控

在监控统一内存的同时，将 [JetPack 7.2 上的工业视觉监控](/cn/industrial_vision_monitoring_on_industrial_bk/) 工作流扩展为包含 DeepStream 批处理、跟踪、事件片段和结构化元数据。

## 生产检查清单

- [ ] Jetson 报告 JetPack 7.2 / Jetson Linux 39.2。
- [ ] DeepStream 报告版本 9.1。
- [ ] 所有 TensorRT 引擎均在目标发行版上重新构建。
- [ ] 自定义解析器和插件基于 DeepStream 9.1 成功编译。
- [ ] 相机、RTSP、解码器、编码器和零拷贝路径已验证。
- [ ] 已测试流的添加/移除和重连行为。
- [ ] 在最大流和事件负载下内存保持稳定。
- [ ] 已记录延迟、FPS、丢帧、功耗和热特性。
- [ ] 自然语言视频推理在受支持的后端上运行。
- [ ] 生成的代理代码在部署前已审查并提交。

## NVIDIA 官方参考

- [DeepStream 9.1 Release Notes](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_Release_notes.html)
- [DeepStream 入门](https://developer.nvidia.com/deepstream-getting-started)
- [DeepStream 9.1 Jetson 安装](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_Installation.html)
- [DeepStream Docker 容器](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_docker_containers.html)
- [DeepStream GitHub 仓库](https://github.com/NVIDIA/DeepStream)
- [DeepStream Agentic Skills 参考](https://docs.nvidia.com/metropolis/deepstream/9.1/text/AgenticSkillsReference.html)
- [Inference Builder MCP Server](https://docs.nvidia.com/metropolis/deepstream/9.1/text/InferenceBuilder_MCP_Server.html)
- [LLM/VLM 推理插件](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_plugin_gst-nvvllmvlm.html)

## 技术支持与产品讨论

感谢您选择 Seeed Studio 的产品！如需技术支持和产品讨论，请使用以下渠道：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>