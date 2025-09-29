---
description: ODYSSEY - X86J41x5
title: Intel Neural Compute Stick 2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-NCS2
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# 使用 ODYSSEY - X86J41x5 开始体验 Intel® Neural Compute Stick 2

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png)

**Intel Neural Compute Stick 2 (NCS2)** 是一款 USB 设备，它让您无需大型昂贵的硬件即可使用神经网络功能。它内置了 **Intel Movidius Myriad X 视觉处理单元 (VPU)**，使您能够将计算机视觉和人工智能 (AI) 集成到您的物联网和边缘设备中。

## 设置软件环境

要使用 Intel NCS2，请首先完成 [为 ODYSSEY - X86J41x5 安装 Intel® Distribution of OpenVINO™ 工具包](/cn/ODYSSEY-X86J4105-NCS2) 并配置所有依赖的软件环境。
<!-- 上述链接有误 -->

如果您已经完成了教程，请按照以下说明操作。

## 配置 Intel® Neural Compute Stick 2

1. 将当前 Linux 用户添加到用户组：

```sh
sudo usermod -a -G users "$(whoami)"
```

注销并重新登录以使其生效。

2. 要在 **Intel® Neural Compute Stick 2** 上执行推理，请安装 USB 规则，如下所示：

```sh
sudo cp /opt/intel/openvino/inference_engine/external/97-myriad-usbboot.rules /etc/udev/rules.d/
```

```sh
sudo udevadm control --reload-rules
```

```sh
sudo udevadm trigger
```

```sh
sudo ldconfig
```

**注意：** 重启设备以使更改生效。

## 使用 NCS2 的 VPU 运行示例

1. 进入推理引擎演示目录：

```sh
cd /opt/intel/openvino/deployment_tools/demo
```

2. 使用 NSC2 运行 **图像分类验证脚本：**

```sh
./demo_squeezenet_download_convert_run.sh –d MYRIAD
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-demo-1.png)

3. 使用 NSC2 运行 **推理管道验证脚本：**

```sh
./demo_security_barrier_camera.sh –d MYRIAD
```

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-demo-2.png)

查看类似以下的结果，表示安装成功！

## 下一步：[Ncappzoo](http://www.github.com/movidius/ncappzoo)

[Ncappzoo](http://www.github.com/movidius/ncappzoo) 是一个开源的 GitHub 仓库，包含了许多示例，具有简单的布局和易于使用的 Makefile。该仓库专为 Intel® NCS 2 开发者社区设计，帮助开发者快速入门，专注于使用预训练神经网络的应用代码。

1. 使用以下命令将 GitHub 仓库克隆到本地文件：

```sh
git clone https://github.com/movidius/ncappzoo.git
```

2. 在任何 **app/network** 文件夹中运行此命令，以检查该示例的系统软件依赖项：

```sh
make install_reqs
```

3. 运行示例：

```sh
make run
```

## 示例运行

有许多可以运行的示例，这里以 `benchmark` 演示为例：

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-benchmark-1.png)

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-benchmark-2.png)

### 运行 `birds` 示例

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png)

## 资源

- [Intel® Distribution of OpenVINO™ 工具包](https://docs.openvinotoolkit.org/)

- [Ncappzoo](http://www.github.com/movidius/ncappzoo)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>