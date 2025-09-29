---
description: 在 Jetson Xavier AGX H01 上刷写 Jetpack
title: Jetson Xavier AGX H01
tags:
   - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Jetson_Xavier_AGX_H01_Driver_Installation
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

# Jetson Xavier AGX H01 套件驱动安装

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/first_1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

本教程将向您展示如何为 Jetson Xavier AGX H01 套件安装驱动程序。有多种方法可以完成此操作。

## 使用命令行安装 Jetson Xavier AGX H01

这是通过命令行进行安装的方法，步骤稳定可靠。

### 所需材料

- Ubuntu 主机 PC
- Jetson Xavier AGX H01
- Type C 数据传输线

### 驱动安装

在安装驱动程序之前，需要将开发板设置为强制恢复模式。

#### 强制恢复模式

开发板上有一个恢复按钮，位于三个按钮的中间。按住恢复按钮然后上电，这将进入强制恢复模式。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver1.png" /></div>

使用 Type-C 数据传输线将 Jetson Xavier AGX H01 与 Ubuntu 主机 PC 连接。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/driver.png" /></div>

#### 所需驱动

我们为不同版本的 Jetpack 系统提供了不同版本的驱动程序，方便您安装。

<table>
  <thead>
    <tr>
      <th>JetPack 版本</th>
      <th>所需驱动</th>
      <th>Jetson Linux 归档</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.4</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_4.4.zip">点击下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r32.4.3">NVIDIA L4T 32.4.3</a></td>
    </tr>
    <tr>
      <td>4.6.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip">点击下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/linux-tegra-r3271">NVIDIA L4T 32.7.1</a></td>
    </tr>
    <tr>
      <td>5.0.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.1.zip">点击下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3411">NVIDIA L4T 34.1.1</a></td>
    </tr>
    <tr>
      <td>5.0.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.0.2.zip">点击下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351">NVIDIA L4T 35.1</a></td>
    </tr>
    <tr>
      <td>5.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.rar" target="_blank" rel="noopener noreferrer">点击下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3521" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.2.1</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.1.zip" target="_blank" rel="noopener noreferrer">点击下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.3.1</a></td>
    </tr>
    <tr>
      <td>5.1.2</td>
      <td><a href="https://files.seeedstudio.com/wiki/H01Driver/H01_Driver_for_5.1.2.zip" target="_blank" rel="noopener noreferrer">点击下载</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3541" target="_blank" rel="noopener noreferrer">NVIDIA L4T 35.4.1</a></td>
    </tr>
  </tbody>
</table>

#### 开始使用

这里的示例使用 **NVIDIA L4T 32.7.1** 在 Jetson AGX H01 上安装 **Jetpack 4.6.1**。

- **步骤 1**. 在主机 PC 上从 NVIDIA [下载](https://developer.nvidia.com/embedded/linux-tegra-r3271)驱动程序。所需的 32.7.1 驱动程序如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver4.png" /></div>

- **步骤 2**. 在主机 PC 上[下载](https://files.seeedstudio.com/wiki/H01Driver/H01_Driver.zip)额外所需的安装文件 **H01_Drivers**。

将**步骤 1** 中下载的文件移动到与 **H01_Drivers** 相同的文件夹中。现在您将在同一文件夹中看到三个解压缩的文件。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01drivera.png" /></div>

- **步骤 3**. 解压缩 **AGX_H01_Drivers.zip** 文件。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver1b.png" /></div>

- **步骤 4**. 在文件夹中打开终端并解压缩其余文件。执行以下命令：

```
tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
cd ..
sudo  ./apply_binaries.sh
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver5.png" /></div>

!!!Note
    如果您在其他地方下载文件，请确保添加文件路径。例如这里的示例是"/Desktop/AGX/"。如果您直接在文件目录中打开终端，路径将自动添加。

命令行应该如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx0.png" /></div>

- **步骤 5**. 返回上级目录，从下载的 **H01_Driver** 文件中复制并粘贴文件到解压的 **Jetson_Linux_R32.6.1_aarch64.tbz2** 文件中。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/H01Driver/h01driver6.png" /></div>

以下是相关命令：

```
cd ..
cp -a -f H01_Driver/Linux_for_Tegra/kernel Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./flash.sh jetson-xavier mmcblk0p1
```

刷写将开始运行，进度如下：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx2.png" /></div>

最终结果应该如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/recomputerzhongwen/agx3.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
