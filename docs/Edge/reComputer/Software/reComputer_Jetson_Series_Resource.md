---
description: Jetson Resource
title: Jetson Resource
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Jetson_Series_Resource
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Jetson Resource

## [Jetson software](https://developer.nvidia.com/embedded/develop/software)

All NVIDIA® Jetson™ modules and developer kits are supported by the same software stack, enabling you to develop once and deploy everywhere. Jetson Software is designed to provide end-to-end acceleration for AI applications and accelerate your time to market. We bring the same powerful NVIDIA technologies that power data center and cloud deployments to the edge.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang.png" alt="pir" width={800} height="auto" /></p>

### [NVIDIA JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

The Jetson software stack starts with the NVIDIA JetPack™ SDK, which provides a complete development environment including CUDA-X acceleration libraries and other NVIDIA technologies to kickstart your development. JetPack includes the Jetson Linux driver package, which provides the Linux kernel, bootloader, NVIDIA drivers, flash utilities, sample filesystem, and toolchain for the Jetson platform. It also includes security features, over-the-air updates, and more. JetPack includes the NVIDIA container runtime to enable Cloud-Native technologies and workflows at the edge.

Learn more:

- [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Linux](https://developer.nvidia.com/embedded/linux-tegra)
- [Cloud-Native on Jetson](https://developer.nvidia.com/embedded/jetson-cloud-native)

### [NVIDIA TAO and pretrained AI models](https://developer.nvidia.com/tao)

NVIDIA TAO simplifies time-consuming parts of deep learning workflows, from data preparation to training to optimization, reducing time-to-value.

Learn more:

- [TAO](https://developer.nvidia.com/tao)
- [Pretrained Models](https://developer.nvidia.com/tao-toolkit)

### [NVIDIA Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server)

The NVIDIA Triton™ inference server simplifies the deployment of AI models at scale. Triton Inference Server is open source and provides a single standardized inference platform that can support multi-frame model inference in different deployments such as data center, cloud, embedded devices, and virtualized environments. It supports different types of inference queries with advanced batching and scheduling algorithms, and supports real-time model updates.

Learn more:

- [NVIDIA Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server)

### [NVIDIA Riva](https://developer.nvidia.com/riva)

NVIDIA Riva is a fully accelerated SDK for building multimodal conversational AI applications using end-to-end deep learning pipelines. The Riva SDK includes pretrained conversational AI models, the NVIDIA TAO toolkit, and optimized end-to-end skills for speech, vision, and natural language processing (NLP) tasks.

Learn more:

- [Riva](https://developer.nvidia.com/riva)

### [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk)

The NVIDIA DeepStream SDK provides a complete stream analytics toolkit for AI-based multi-sensor processing and video and image understanding on Jetson. DeepStream is an integral part of NVIDIA Metropolis, a platform for building end-to-end services and solutions that transform pixel and sensor data into actionable insights. Learn more: DeepStream >

Learn more:

- [DeepStream >](https://developer.nvidia.com/deepstream-sdk)

### [NVIDIA Isaac](https://developer.nvidia.com/isaac-sdk)

NVIDIA Isaac ROS GEM is a hardware acceleration package that makes it easier for ROS developers to build high-performance solutions on NVIDIA hardware. NVIDIA Isaac Sim, powered by Omniverse, is a scalable robotics simulation application. It includes Replicator - a tool that generates various synthetic datasets for training perception models. Isaac Sim is also a tool that supports realistic, physically accurate virtual environments to develop, test and manage AI-based robots.

Learn more:

- [Isaac ROS GEM](https://developer.nvidia.com/isaac-ros-gems)
- [Isaac Sim](https://developer.nvidia.com/isaac-sim)

---

## [Jetson Modules](https://developer.nvidia.com/embedded/jetson-modules)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang2.png" alt="pir" width={500} height="auto" /></p>

NVIDIA ® Jetson™ brings accelerated AI performance to edge devices in an energy-efficient and compact form factor. The Jetson family of modules all use the same NVIDIA CUDA-X™ software and support cloud-native technologies such as containerization and orchestration to build, deploy and manage AI at the edge.

[Learn about all Jetson modules >](https://developer.nvidia.com/embedded/jetson-modules)

**reComputer Jetson applies these modules:**

### Jetson Xavier NX Series

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang3.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">Jetson Xavier NX brings up to 21 TOPs of AI computing power to the edge in a small form factor module. It can run multiple modern neural networks in parallel and process data from multiple high-resolution sensors as a requirement for a complete AI system. Jetson Xavier NX series can be used in production applications and supports all popular AI frameworks.<br /> Jetson Xavier NX - <a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html">reComputer J2011</a><br /> Jetson Xavier NX 16GB - <a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html">reComputer J2012</a></td>
    </tr>
  </tbody>
</table>

### Jetson Nano

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang4.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">The Jetson Nano is a small, powerful computer for embedded AI systems and the IoTs, delivering the power of modern AI on a low-power platform. You can get up to speed quickly with the NVIDIA Jetpack SDK and a full desktop Linux environment and start exploring the new world of embedded products.<br /> Jetson Nano - <a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a>, <a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></td>
    </tr>
  </tbody>
</table>

## Brush guide

Since reComputer Jetson series products have been equipped 16 GB eMMC, and the `ubuntu 18.04 LTS` and `NVIDIA JetPack 4.6` are both pre-installed, you can directly apply it to develop your projects. If you want to re-flash, please visit the appropriate documentation below:

- [J1010 carrier version](https://wiki.seeedstudio.com/install_NVIDIA_software_to_Jetson-10-1-A0)
- [Jetson A206 carrier board](https://wiki.seeedstudio.com/Tutorial-of-A20X-Carrier-Boards/)

## Support

Ask and recevie questions on the Jetson Forum. NVIDIA engineers, community developers, and Jetson partners all contribute here. Check:

- [Jetson Nano forum](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-nano) for Jetson Nano developer kits and Jetson Nano production modules.
- [Jetson Xavier NX Forum](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-xavier-nx) for Jetson Xavier NX Development Kits and Jetson Xavier NX Production Modules.

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
