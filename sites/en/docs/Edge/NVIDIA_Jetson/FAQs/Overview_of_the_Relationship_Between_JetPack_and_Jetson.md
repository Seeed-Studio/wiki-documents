---
description: overview of the relationship between jetpack and jetson
title: Overview of the Relationship Between Jetpack and Jetson
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /overview_of_the_relationship_between_jetpack_and_jetson
last_update:
  date: 06/05/2025
  author: Dayu
---

This wiki provides a brief introduction to the components of JetPack, helping you quickly understand the relationship between JetPack and Jetson, and answering some of the most frequently asked questions.

## 1. What is JetPack composed of?
JetPack is a collection of software packages that includes two major components: 

**① L4T (Linux for Tegra).** L4T is a middleware Linux distribution customized for Jetson hardware platforms. It consists of: 

- Ubuntu root file system

- Linux kernel (with NVIDIA patches)

- Drivers (GPU, ISP, CSI, I2C, etc.)

- Firmware (Bootloader, UEFI, U-Boot, initrd)

- BSP (Board Support Package) including device trees, boot configurations, and flashing tools

- and more

**② JetPack SDK.** This is the upper software layer that mainly provides application development tools, including: 

- CUDA Toolkit

- cuDNN (Deep Learning Library)

- TensorRT (AI Model Inference Engine)

- and more

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.png"/></div>

## 2. What is the relationship between JetPack and Ubuntu?

As described in the first answer above, Ubuntu is a part of JetPack. Each JetPack release includes a specific version of Ubuntu. Our JetPack versions include the following Ubuntu versions:

| JetPack Version | L4T Version | Ubuntu Version |
|------------------|--------------|-----------------|
| JetPack 6.2      | L4T 36.4.3   | Ubuntu 22.04    |
| JetPack 6.1      | L4T 36.4.0   | Ubuntu 22.04    |
| JetPack 6.0      | L4T 36.3.0   | Ubuntu 22.04    |
| JetPack 5.1.3    | L4T 35.5.0   | Ubuntu 20.04    |
| JetPack 5.1.1    | L4T 35.3.1   | Ubuntu 20.04    |
| JetPack 4.6.6    | L4T 32.7.6   | Ubuntu 18.04    |

## 3. Jetpack Version supported by our products?
The JetPack versions supported by our currently available products can be found at the following link: 

[seeed's jetpack verson](https://docs.google.com/spreadsheets/d/1Sf7IdmVkKTAUH95XwxHK0ojV5aFq3ItKZ-iT28egzIk/edit?pli=1&gid=0#gid=0)



## 4. Relationship Between JetPack 6.2 and Super Mode

Devices flashed with JetPack 6.2 support the activation of Super Mode. However, please note that Super Mode is currently available only on select Seeed products.

## 5. How to find the contents of each JetPack version?

You can refer to the official resources published by NVIDIA. See the following link for details:

[contents of each jetpack](https://developer.nvidia.com/embedded/jetpack-archive)

## Resources

- [Source code of Seeed's L4T](https://github.com/Seeed-Studio/Linux_for_Tegra)

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

