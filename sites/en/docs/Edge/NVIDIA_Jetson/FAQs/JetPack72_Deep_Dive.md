---
description: This FAQ explains the key JetPack 7.2 changes for Jetson AGX Orin, summarizes Seeed's JetPack 7.2 and JetPack 6.2 inference comparison, and shows how to upgrade with Seeed Jetson DevelopTool.
title: JetPack 7.2 Deep Dive
keywords:
  - Jetson
  - JetPack 7.2
  - Jetson AGX Orin
  - edge AI
  - large language model
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-e26020301-recomputer-jetson-agx-orin_-developer-kit-gmsl-bundle.jpg
slug: /jetpack72_deep_dive
sku: E26020301
last_update:
  date: 06/11/2026
  author: Dayu
createdAt: '2026-06-11'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/jetpack72_deep_dive/
---

# JetPack 7.2 Deep Dive: What Changes for Jetson AGX Orin Inference?

This FAQ summarizes why JetPack 7.2 matters for Jetson AGX Orin users, what Seeed measured when comparing JetPack 7.2 with JetPack 6.2, and how to evaluate an upgrade path with Seeed Jetson DevelopTool.

The test platform used by Seeed is the reComputer Jetson AGX Orin Developer Kit GMSL Bundle.

<div align="center">
  <img width={800} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-e26020301-recomputer-jetson-agx-orin_-developer-kit-gmsl-bundle.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Jetson-AGX-Orintm-Developer-Kit-GMSL-Bundle.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
  </a>
</div>

## FAQ

#### Q1: What are the main JetPack 7.2 changes for Jetson users?

JetPack 7.2 moves the Jetson software stack forward with a newer Jetson Linux base, Ubuntu 24.04, CUDA 13, updated AI runtime components, and platform-level improvements for memory efficiency and agentic AI workflows.

For Jetson AGX Orin 32GB users, one of the most important changes is the new high-performance power mode used in Seeed's test, which allows the same module to run at a higher GPU frequency and deliver higher AI throughput when the carrier board power and thermal design can support it.

:::note
Always check the NVIDIA release notes and the Seeed BSP release notes for the exact component versions supported by your target carrier board and image.
:::

#### Q2: What hardware and software did Seeed compare?

Seeed compared an AGX Orin 32GB Developer Kit with a reComputer J5011 using the JetPack 6.2 and JetPack 7.2 software environments and the same large language model inference workload.

| Item | JetPack 6.2 test | JetPack 7.2 test |
| --- | --- | --- |
| Module | Jetson AGX Orin 32GB | Jetson AGX Orin 32GB |
| Test device | AGX Orin 32GB Developer Kit | reComputer J5011 |
| Jetson Linux | L4T 36.4.3 | L4T 39.2 |
| Ubuntu | 22.04 | 24.04 |
| CUDA | 12.6 | 13.x |
| Inference engine | llama.cpp | llama.cpp |
| Model | Qwen3.5-27B-Q4_K_M.gguf | Qwen3.5-27B-Q4_K_M.gguf |
| Main parameters | `-ngl 999 -fa on -ub 512 -t 12` | `-ngl 999 -fa on -ub 512 -t 12` |

#### Q3: What memory and performance improvement did Seeed observe?

In Seeed's comparison, JetPack 7.2 reduced memory usage after model loading and improved both prompt processing speed and token generation speed.

| Metric | JetPack 6.2 | JetPack 7.2 | Observed change |
| --- | --- | --- | --- |
| Memory after model load | 24.6 GB / 30 GB | 14.7 GB / 30 GB | About 40% lower |
| GPU frequency during inference | 930 MHz | 1.36 GHz | Higher boost frequency |
| Prompt processing | 18.2 tokens/s | 25.8 tokens/s | About 41.8% faster |
| Token generation | 4.3 tokens/s | 5.5 tokens/s | About 27.9% faster |

The most practical result is the memory headroom. In the JetPack 6.2 run, the 27B model occupied most of the available memory after loading. In the JetPack 7.2 run, the system kept roughly 10 GB more memory available, which is useful when running vision preprocessing, robotics middleware, or other services alongside the LLM workload.

#### Q4: Can I watch the JetPack 7.2 and JetPack 6.2 comparison result?

Yes. The following video shows the comparison effect.

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/rO0ZPA2VK9w" title="JetPack 7.2 and JetPack 6.2 comparison on Jetson AGX Orin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Q5: Should I upgrade my Jetson device to JetPack 7.2?

Use the following table as a starting point:

| Scenario | Recommendation |
| --- | --- |
| New Jetson AGX Orin project | Consider starting with JetPack 7.2 if the required BSP, drivers, and application stack are available. |
| Existing JetPack 6.x project | Validate kernel modules, CUDA dependencies, TensorRT engines, camera drivers, and peripheral drivers before migration. |
| LLM or VLM workloads limited by memory | JetPack 7.2 is worth evaluating because the measured memory reduction can make larger models or multi-service pipelines easier to run. |
| Production system with custom carrier board | Do not upgrade only by running `apt upgrade`. Use a validated full image or an officially supported OTA path from Seeed. |

:::caution
Higher performance modes increase power and thermal requirements. Before enabling a high-power mode, confirm that the carrier board, power adapter, enclosure, and heat dissipation design can sustain the target workload.
:::

#### Q6: How can I upgrade to JetPack 7.2 with Seeed Jetson DevelopTool?

Seeed Jetson DevelopTool provides a guided workflow for Jetson firmware download, flashing, device connection, and OTA operations.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/flash-page.png" />
</div>

For a major-version migration such as JetPack 6.x to JetPack 7.x, a full flash is recommended unless Seeed explicitly provides a validated OTA path for your exact product and source image.

General workflow:

1. Install and open Seeed Jetson DevelopTool.
2. Select the Jetson product or carrier board model.
3. Select the target L4T or JetPack version that matches JetPack 7.2.
4. Download and extract the BSP package from the tool.
5. Put the Jetson device into Force Recovery Mode.
6. Detect the device from the host PC.
7. Start flashing and wait until the device reboots.
8. Complete first boot setup and verify the system version.

For more details about the tool, refer to [Seeed Jetson DevelopTool](https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool).

#### Q7: What should I verify after upgrading?

After flashing or upgrading, verify the following items before running production workloads:

- JetPack, L4T, CUDA, cuDNN, and TensorRT versions.
- GPU frequency, power mode, and thermal behavior under load.
- Camera, GMSL, Ethernet, CAN, USB, M.2, and other peripheral interfaces.
- Custom kernel modules and out-of-tree drivers.
- AI framework compatibility, including PyTorch, TensorRT engines, llama.cpp builds, and CUDA extensions.
- Long-duration stress tests for power and temperature stability.

## Resources

- [reComputer Jetson AGX Orin Developer Kit GMSL Bundle](https://www.seeedstudio.com/reComputer-Jetson-AGX-Orintm-Developer-Kit-GMSL-Bundle.html)
- [Seeed Jetson DevelopTool](https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool)
- [NVIDIA JetPack Archive](https://developer.nvidia.com/embedded/jetpack-archive)
- [Seeed Jetson Wiki](https://wiki.seeedstudio.com/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
