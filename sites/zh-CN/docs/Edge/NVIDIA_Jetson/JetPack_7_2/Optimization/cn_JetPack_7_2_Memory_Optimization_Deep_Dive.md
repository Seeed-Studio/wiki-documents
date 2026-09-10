---
description: '了解 JetPack 7.2 中与 Jetson 内存密切相关的软件变更：CUDA 和 TensorRT 软件栈、官方 Yocto 支持、优化技能，以及面向 Orin 的可量化 LLM 部署内存预算。'
title: 'JetPack 7.2 内存优化：软件进展与 LLM 部署预算'
keywords:
  - JetPack 7.2
  - 内存优化
  - TensorRT Edge-LLM
  - KV cache
  - INT4
  - Jetson Orin Nano
  - LLM 部署
image: https://files.seeedstudio.com/wiki/jetpack-7.2/unified_mem.png
slug: /jetpack_7_2_memory_optimization_deep_dive
last_update:
  date: 08/27/2026
  author: zibo
createdAt: '2026-08-27'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/cn/jetpack_7_2_memory_optimization_deep_dive/
---

# JetPack 7.2 内存优化：软件进展与 LLM 部署预算



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/unified_mem.png"/>
</div>


Jetson 使用统一内存：CPU、GPU、系统服务、摄像头与显示子系统、模型权重、推理运行时以及 KV cache 都共享同一片物理 DRAM。JetPack 7.2 不会为现有模组增加物理 DRAM，而是更新软件基础，并引入新的方式来构建、裁剪、测量和部署这个共享内存系统。

在 DRAM 供应持续紧张、内存成本上升的情况下，立刻换用更大内存的模组并不是让边缘 AI 设计可行的唯一途径。一次经过良好测量的 JetPack 7.2 升级可以释放此前被平台占用的内存，并让剩余预算更易于控制。从这个意义上说，它可以是一种**软件内存升级**：它不会改变模组的物理容量，但在系统镜像、运行时、模型精度和请求上限重新验证之后，可以让在等效 JetPack 6.2 部署中装不下的 LLM 工作负载变得可行。

本文聚焦于 Jetson Orin 开发者的两个问题：哪些 JetPack 7.2 软件更新可以提升内存效率，以及如何把可用内存转化为一个实际可行的 LLM 部署预算。它将 JetPack 7.2 的特性与通用 TensorRT 和 LLM 技巧区分开来，帮助你准确衡量每一项优化。


| **reComputer J3011** | **reComputer Classic J5011** |
| :---: | :---: |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/o/row6-recomputer_j30_.jpg" style={{width:400, height:'auto'}} /> | <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100006184-gallery_img_1.jpg" style={{width:400, height:'auto'}} /> |
| Jetson Orin Nano 8GB platform | Jetson AGX Orin 32GB platform |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>立即获取 🖱️</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>立即获取 🖱️</font></span></strong>
  </a>
</div>

:::info
**阅读指引** 

- 从 [1. What Is Specific to JetPack 7.2?](#1-what-is-specific-to-jetpack-72) 开始，识别 7.2 特有的调节手段； 
- 使用 [2. Turning the 7.2 Stack into an LLM Budget](#2-turning-the-jetpack-72-stack-into-an-llm-memory-budget) 将权重、运行时和 KV cache 拆分开来； 
- 使用 [3. Existing JetPack 7.2 Guides](#3-use-this-deep-dive-with-the-existing-jetpack-72-guides) 查阅对应的操作流程； 
- 阅读 [4. Field Observations](#4-field-observations-evidence-for-jetpack-72-not-marketing-claims)。
:::

本文的实践配套是 [JetPack 7.2 Memory Optimization](/cn/jetpack_7_2_memory_optimization/) 指南，它将相同的原则转化为一套以技能为驱动的审计与配置流程。

## 1. What Is Specific to JetPack 7.2?

[JetPack 7.2](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2) 提供 Jetson Linux 39.2、Ubuntu 24.04、Linux 内核 6.8、CUDA 13.2.1 和 TensorRT 10.16.2。[JetPack 7.2 Resource Hub](/cn/jetpack_7_2_resource_hub/) 已经描述了完整的发行特性集；本节只保留会改变 LLM 内存决策的能力。

| JetPack 7.2 capability | 为什么与本文相关 | 详细指南 |
| --- | --- | --- |
| 更新的 CUDA 和 TensorRT 软件栈 | 它是重建和分析受支持推理引擎的软件基线。 | [Deploy TensorRT Edge-LLM on JetPack 7.2](/cn/deploy_tensorrt_edge_llm_on_jetpack7.2/) |
| 内存优化与基准测试技能 | 它们提供了一种可重复的方法，在修改配置前测量平台预留、服务和工作负载压力。 | [JetPack 7.2 Memory Optimization](/cn/jetpack_7_2_memory_optimization/) |
| 官方 Yocto 支持 | 当 Ubuntu 开发镜像包含不需要的软件时，生产团队可以创建一个定制且可复现的镜像。 | [Build and Flash a Yocto Image](/cn/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) |

JetPack 7.2 不会为模组增加 DRAM、不会自动缩小模型，也不会自行启用诸如 KV-cache 复用之类的运行时特性。它提供了做出这些选择并对其进行测量的软件基线和工具链。

### 1.1 更低的启动内存即是可用的 LLM 余量

系统在启动时的占用是 LLM 预算的第一部分。下面这个历史 Orin Nano 8 GB 对比显示，在某个 JetPack 6.2 状态下大约使用了 1.4 GiB，而在某个 JetPack 7.2 状态下使用了略高于 800 MiB。两者的差异——在这个特定镜像和服务配置中大约 600 MiB——是可以留给推理运行时、模型工作区或 KV cache 使用的内存，而不是在应用启动前就被消耗掉。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/6.2vs7.2.PNG" alt="Historical JetPack 6.2 and 7.2 boot-memory comparison on Orin Nano"/>
</div>

这就是为什么可以把更低的系统内存占用理解为一种**软件内存升级**。模组依然只有 8 GB 物理 DRAM，但更小的平台占用提高了应用实际可以预算的那一部分。对于受内存约束的 LLM 部署来说，这些额外余量可能就是在引擎加载或预填阶段失败，和拥有足够空间运行一个有用且有边界的请求之间的差别。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/7.2.png" alt="Historical JetPack 7.2 boot-memory observation on Orin Nano"/>
</div>

这个结果并不会对每一个 JetPack 7.2 镜像自动成立。桌面模式、启用的服务、容器、显示与摄像头路径、载板 BSP 设置以及测量时机都会影响基线。在把回收的余量分配给更大的模型或更长的上下文之前，请在实际设备上测量稳定空闲状态。

关于已发布的 AGX Orin 32 GB JetPack 6.2 与 7.2 模型加载对比——包括其测试配置和性能数据——请参见 [JetPack 7.2 Deep Dive](/cn/jetpack72_deep_dive_bk/)。

## 2. Turning the JetPack 7.2 Stack into an LLM Memory Budget

JetPack 7.2 提供平台和工具；LLM 仍然必须装进操作系统和产品服务启动之后剩余的内存中。可用预算取决于模型大小、上下文长度、批大小、权重量化精度以及执行模型的运行时。在修改设置之前，先将其拆分为下面这些部分。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/llm_1.png"/>
</div>


- **模型权重（Model weights）** —— 模型本身，即其训练得到的参数。通常是最大的一块：模型越大或精度越高，占用的内存就越多。
- **KV cache** —— 模型对“当前对话进展”的记忆。它避免模型在生成每个新 token 时都重新读取整段对话，但上下文越长，它就越大。
- **激活值（Activations）** —— 计算中间产生的临时数值；模型在逐层计算时创建并丢弃它们。
- **TensorRT workspace** —— TensorRT 在准备和运行模型时预留的工作区。
- **CUDA 上下文（CUDA context）** —— CUDA 运行时在任何计算开始前打开的 GPU “会话”：上下文、流以及内部状态。
- **运行时 / 临时缓冲区（Runtime / temp buffers）** —— 框架和你的应用用于搬运数据的短生命周期缓冲区：I/O 缓冲区、拷贝区域和中间工作内存。


### 2.1 运行时边界：TensorRT Edge-LLM 带来了什么

JetPack 7.2 提供 CUDA 13.2.1 和 TensorRT 10.16.2，作为 TensorRT Edge-LLM 运行受支持边缘 LLM 工作流的底层组件。Edge-LLM 是一个独立的运行时和工具链，而不是 JetPack 自动启用的功能。当其模型和版本受支持时，它可以从 INT4 AWQ checkpoint 构建 TensorRT 引擎，并使用诸如内存规划、KV-cache 管理、算子融合和 CUDA Graphs 等技术。

对于 JetPack 7.2 开发者而言，实际收益是一个可与可复现系统基线配合使用的最新 NVIDIA 推理栈。目标不仅仅是启动一个 LLM；而是让模型与共享有限 DRAM 和内存带宽的 CPU、GPU、服务和应用共存。

对于大模型来说，权重通常是首先需要计入的稳定分配。一款 40 亿参数的模型大致需要：


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/llm_parameters.png"/>
</div>


这些数据只描述权重本身。量化尺度、元数据、运行时缓冲区和 KV cache 还会额外占用内存。即便如此，从 FP16 切换到 INT4 仍然可以将理论权重存储需求减少约 75%。

### 2.2 llama.cpp 与 TensorRT Edge-LLM 是不同路径

“4-bit” 这个标签并不会让两个部署变得等价。在同一个 JetPack 7.2 镜像上，被 llama.cpp 使用的 Qwen3.5-4B GGUF 文件，与用 TensorRT Edge-LLM 构建的 INT4 AWQ checkpoint，会通过不同路径抵达同一块 Jetson GPU。

| 对比项 | GGUF 路径 | TensorRT Edge-LLM 路径 |
| --- | --- | --- |
| 量化产物 | GGUF 文件，例如 Q4_K_M | 受支持的 INT4 AWQ checkpoint 及其导出产物 |
| 推理引擎 | llama.cpp | 模型导出 → TensorRT 引擎 |
| GPU 执行 | 由 llama.cpp 构建和后端选择的 kernel | 具备受支持融合、内存规划、插件和 CUDA Graphs 的 TensorRT 引擎 |
| 公平的内存对比 | 匹配模型、上下文、GPU offload、批大小、电源模式和版本 | 匹配相同变量，然后计入引擎和 workspace 的使用 |

因此，TensorRT Edge-LLM 不仅仅是一个 INT4 模型读取器。它会将受支持的 checkpoint 转换为针对 NVIDIA GPU 优化的引擎。可用的具体特性取决于模型、本次引擎构建以及 TensorRT Edge-LLM 版本，因此务必查阅其支持模型矩阵和发布文档。对于 JetPack 6.2 与 7.2 的对比，应在各自的软件栈上重新构建或重新验证两条路径；不要复用旧引擎，然后把结果称为 JetPack 7.2 的收益。

### 2.3 KV 缓存：JetPack 7.2 不会消除的预算

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/KV-cache-token.jpeg"/>
</div>
当 Transformer 生成第一个 token 时，它会处理提示词并存储其计算出的注意力 key 和 value。在下一个 token 上，运行时时可以重用这些值，而不是再次计算完整历史。正是这种重用让解码保持可行，但也带来了代价：随着对话增长，缓存也会增长。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/KV—Cache.jpeg"/>
</div>

一个近似的规划公式是：

> **KV-cache bytes ≈ 2 × layers × KV heads × head dimension × tokens × batch × bytes per element**

这就是为什么同一个 INT4 模型在 4K 上下文下可以运行得很从容，却会在 32K 上下文下耗尽内存。JetPack 7.2 也许会通过更精简的部署镜像或更高效的受支持运行时留下更多可用余量，但它不会限制 KV 缓存的增长。权重量化降低的是固定成本；上下文、batch 和并发度仍然决定预算中增长的那一部分。


### 2.4 KV 缓存复用：把增长的成本变成可管理资源

第 2.3 节解释了这种权衡：KV 缓存阻止模型为每个 token 重新计算完整提示词，但随着上下文增长，它会消耗更多 DRAM。在 JetPack 7.2 部署中，首先利用平台改进来建立一个真实的内存预算；然后再决定缓存中已经存储的工作是否能帮助下一次请求。

TensorRT Edge-LLM 将此缓存视为一种运行时资源，而不是一个不可见的副作用。引擎在构建时会指定目标输入长度和 KV 缓存容量，而运行时则为活动和保留的上下文提供一个页池。这是运行在 JetPack 7.2 计算栈上的 TensorRT Edge-LLM 能力——而不是由操作系统自动应用的缓存策略——但它让 7.2 部署可以有意识地预留内存，而不是在发生内存耗尽故障后才发现上限。

对于受支持的模型，Edge-LLM 还可以在请求之间复用匹配的提示词前缀。缓存是本地于某个运行时实例的，并以前缀内容为键，因此只有提示词中共享的部分可以被复用。在当前的 Edge-LLM 实现中，此特性需要 FP16 KV 缓存，并且必须为所选引擎和运行时显式启用。

| 轮次 | 不使用前缀复用 | 使用前缀复用 |
| --- | --- | --- |
| 第一次请求 | 系统提示词和用户提示词会被预取，然后写入 KV 缓存。 | 需要相同的初始预填充。 |
| 之后使用相同系统提示词的请求 | 重复的前缀会再次被预取。 | 可以复用匹配的缓存前缀；只需为新增部分进行预填充。 |

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/prefix_kv_cache.png" alt="Prefix KV cache reuse across repeated LLM requests"/>
</div>
这对具有较长系统提示词的智能体、带有重复文档前缀的 RAG 工作流，或重复相同图像前缀的 VLM 请求尤其有用。最大的收益通常是减少重复预填充工作并缩短首 token 时间，而不是降低峰值内存需求。被保留的缓存页仍然会消耗内存，并且更改提示词、图像或图像顺序会阻止受影响前缀的复用。

对于 Jetson 部署，要验证复用是否生效，而不是假定它已启用。为计划保留的上下文构建足够的页池容量，在运行时启用上下文复用，并检查运行时剖析：命中缓存的请求应报告一个大于零的复用 token 计数。

在考虑了上下文容量和复用之后，剩下的问题是每个生成 token 的内部发生了什么。这正是 TensorRT 执行优化发挥作用的地方。

### 2.5 JetPack 7.2 上的 TensorRT：减少中间数据搬运

一个 Transformer 层会组合归一化、量化或反量化、矩阵乘法、激活和注意力等操作。如果这些操作作为独立 kernel 执行，一个 kernel 可能会把中间张量写入 DRAM，而下一个 kernel 会立即把它再读回来。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/transformer_layer.png" alt="Operations in a Transformer layer"/>
</div>

| 执行路径 | 穿越 DRAM 的内容 | 在 Jetson 上的重要性 |
| --- | --- | --- |
| 独立 kernel | 每个中间张量在操作之间都会被写入和读出。 | 更多带宽占用、临时分配和 kernel 启动。 |
| 融合 kernel | 兼容操作会在最终结果写出前一起运行。 | 更少的中间流量和更低的运行时开销。 |

kernel 融合不会改变模型权重或 KV 缓存的大小。它减少的是在操作之间移动的工作数据，因此可以改善延迟并降低瞬时运行时压力。JetPack 7.2 的 TensorRT 10.16.2 提供了此引擎路径所使用的 TensorRT 版本，但本文并未声称某个特定融合是在 7.2 中引入的。可用的融合取决于模型图和引擎构建；应在目标 Jetson 上对生成的引擎进行测量，而不是把融合视为一个固定的节省内存数值。

融合减少的是 kernel 序列内部的工作。解码仍然会为每个生成的 token 重复该序列，这就留下了一个单独的调度成本。

### 2.6 JetPack 7.2 运行时路径上的 CUDA Graph

在解码过程中，LLM 每次迭代会生成一个或少量 token，同时一段类似的 GPU 操作序列会被多次执行。在传统路径中，CPU 会反复提交这段序列。

CUDA Graph 会将一段兼容的 GPU 序列记录一次，然后通过单次图启动在之后重放。

| 解码阶段 | 传统启动路径 | CUDA Graph 路径 |
| --- | --- | --- |
| 初始兼容序列 | CPU 启动各个 GPU 操作。 | 运行时将该序列记录为一个图。 |
| 后续迭代 | CPU 在每次迭代中再次提交该序列。 | CPU 启动已记录的图，该序列作为一个整体执行。 |

这是一种调度优化。kernel 融合主要减少中间内存流量；CUDA Graph 主要减少重复的 CPU 到 GPU 启动开销。两者都不会让模型权重或 KV 缓存变小。在 JetPack 7.2 系统上，这是兼容 TensorRT 引擎更好利用更新后的 CUDA 和 TensorRT 栈的一种方式。在 Jetson 上，减少启动工作可以提升端到端响应性，因为 CPU 资源和功耗预算与 GPU 资源一样有限。

这些机制现在构成了完整的运行时图景：量化降低了固定权重成本；KV 缓存设置控制了增长的上下文成本；融合减少了中间流量；CUDA Graph 则减少了重复的解码调度。

### 2.7 将每个机制映射回 JetPack 7.2

下表区分了 JetPack 7.2 的杠杆与其之上使用的运行时机制。

| 层或机制 | 与 JetPack 7.2 的关系 | 部署决策 | 需要测量的内容 |
| --- | --- | --- | --- |
| JetPack 7.2 平台基线 | 提供 OS、CUDA 和 TensorRT 版本；它建立了可复现的起点。 | 记录发行版本、服务集、桌面目标和功耗模式。 | 稳定后的空闲内存和设备配置。 |
| Yocto 或精简的 7.2 镜像 | 一种直接基于 7.2 的生产镜像选项，用于减少不需要的系统软件。 | 只包含所需的服务、驱动和库。 | 空闲内存和所需功能验证。 |
| 低精度权重 | 在 7.2 运行时环境中做出的模型选择。 | 选择受支持的 checkpoint 并验证输出质量。 | 引擎加载内存和任务质量。 |
| KV 缓存容量和复用 | 一项可选的运行时特性，而非 7.2 OS 自动提供的特性。 | 为工作负载设置上下文、batch、页池和保留上限。 | 预填充峰值、稳定解码内存、复用 token 计数和 TTFT。 |
| TensorRT 融合和 CUDA Graph | 兼容引擎可以利用 7.2 中包含的 CUDA/TensorRT 栈。 | 在目标 7.2 设备上构建并剖析引擎。 | 运行时峰值、解码延迟和吞吐量。 |

这就是为什么在 Jetson 上“更高的内存效率”和“更快”是相关联的。系统并没有获得额外的物理 DRAM。相反，是同样的共享 DRAM 和带宽中有更多部分被留给了工作负载，因为权重、缓存、中间数据和调度工作被更有意识地加以管理。

按顺序使用这张映射图：先确定镜像和平台预算，测量运行时和模型占用，然后只有在完整工作负载仍有余量时才扩展上下文和并发度。

## 3. 将本次深度解析与现有 JetPack 7.2 指南配合使用

本页解释的是预算：为什么更低的空闲占用、更小的权重、有边界的 KV 缓存以及兼容的运行时彼此相关。它有意不重复 JetPack 7.2 其余文档集中已经维护的操作流程。

| 如果你需要… | 使用此指南 | 保持本页打开以便… |
| --- | --- | --- |
| 测量空闲、引擎加载、预填充和解码内存；减少服务；或更改已验证的 BSP 预留 | [JetPack 7.2 Memory Optimization](/cn/jetpack_7_2_memory_optimization/) | 在采取行动前决定是哪一层内存负责。 |
| 导出 checkpoint、构建引擎、选择受支持的精度或对 TensorRT Edge-LLM 进行基准测试 | [Deploy TensorRT Edge-LLM on JetPack 7.2](/cn/deploy_tensorrt_edge_llm_on_jetpack7.2/) | 理解权重、工作区和 KV 缓存如何融入总预算。 |
| 构建面向生产、定制化的 OS 镜像 | [Build and Flash a Yocto Image](/cn/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) | 决定更小的系统镜像是否值得额外的运维成本。 |
| 对比已发布的 6.2 和 7.2 AGX Orin 结果 | [JetPack 7.2 Deep Dive](/cn/jetpack72_deep_dive_bk/) | 避免把一次测得的结果当作通用的内存节省。 |

正确的顺序很简单：先建立系统基线，测量选定的运行时和模型，然后只在完整工作负载仍然在预算范围内时，才增加上下文或并发度。链接的指南中包含每一步的命令、安全检查、回滚流程和验收测试。

## 4. 现场观察：支持 JetPack 7.2 的证据，而非市场宣传

关于已发布的 AGX Orin 32 GB 对比及其图表，请参见 [JetPack 7.2 Deep Dive](/cn/jetpack72_deep_dive_bk/)。本文重点说明在规划 LLM 内存预算时，如何解读这些结果。

在比较 JetPack 6.2 和 7.2 的结果时，把发行版本视为唯一变量。保持模组、载板、模型校验和、命令、GPU 下 offload、上下文、生成 token 数量、电源模式、`jetson_clocks` 状态、桌面目标、服务集合、温度和采样点不变。每次运行都要记录 L4T、CUDA 和 TensorRT 版本。

需要关注的四种内存状态是：稳定空闲、引擎或模型已加载、提示预填充，以及稳定解码。[Memory Optimization guide](/cn/jetpack_7_2_memory_optimization/) 提供了这些状态的采集命令和解读方法。只在单一状态下取得的数值，无法证明是 JetPack 7.2、CUDA 或 TensorRT 导致了整个工作负载的内存改进。

## 参考资料

- [TrendForce — AI Server Demand Continues to Support Memory Prices in 3Q26](https://www.trendforce.com/presscenter/news/20260703-13134.html)：近期 DRAM 和 NAND 合同价格展望。
- [NVIDIA Developer Blog — Deploy Agentic-Ready AI at the Edge with Memory Efficiency in NVIDIA JetPack 7.2](https://developer.nvidia.com/blog/deploy-agentic-ready-ai-at-the-edge-with-memory-efficiency-in-nvidia-jetpack-7-2/)：JetPack 7.2 的内存优化技巧和官方 Yocto 支持。
- [NVIDIA JetPack 7.2 Downloads / Release Notes](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2)
- [NVIDIA TensorRT-Edge-LLM](https://github.com/NVIDIA/TensorRT-Edge-LLM)：边缘工具链、受支持模型和示例的版本化权威来源。
- [NVIDIA TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM)：LLM 运行时、引擎构建和特性文档；kernel-fusion 和 CUDA Graph 优化文档的来源。
- [TensorRT Edge-LLM KV Cache Reuse](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/features/kv-cache-reuse.html)：支持条件、页池容量、运行时启用方式和复用验证。
- [NVIDIA TensorRT KV Cache Documentation](https://docs.nvidia.com/deeplearning/tensorrt/latest/inference-library/transformers-kv-cache.html)：通用 KV 缓存管理和配置概念。

## 相关页面

- [JetPack 7.2 Memory Optimization](/cn/jetpack_7_2_memory_optimization/) — 基于技能的审计、无头 / 无相机 BSP 回收、SWIOTLB 安全性，以及低内存 LLM 推理设置。
- [Deploy TensorRT Edge-LLM on JetPack 7.2](/cn/deploy_tensorrt_edge_llm_on_jetpack7.2/) — 主机导出、目标端引擎构建和 C++ 推理验证。
- [JetPack 7.2 Deep Dive](/cn/jetpack72_deep_dive_bk/) — Jetson AGX Orin 推理发生了哪些变化，以及 Seeed JetPack 7.2 与 6.2 的对比。
- [JetPack 7.2 Resource Hub](/cn/jetpack_7_2_resource_hub/) — 面向 Seeed Studio 设备的所有 JetPack 7.2 资源的分类索引。

## 技术支持与产品讨论

感谢您选择 Seeed Studio 产品！如需技术支持和产品讨论，请通过以下渠道联系我们：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
