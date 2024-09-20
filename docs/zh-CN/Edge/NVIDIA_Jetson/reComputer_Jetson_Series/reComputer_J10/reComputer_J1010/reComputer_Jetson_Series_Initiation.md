---
description: Jetson 系列开机
title: Jetson 系列开机
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Series_Initiation
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Jetson启动计算机

Jetson的所有reComputer均配备了16 GB的eMMC，其中已经预装了`ubuntu 18.04 LTS`和`NVIDIA JetPack 4.6`。按照说明连接外设，您可以立即启动并在几秒钟内直接使用它。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaijiss.png" alt="pir" width="auto" height="auto" /></p>

## 1. 连接外围设备

将reComputer主机通过USB连接键盘、鼠标，并通过HDMI端口或DP端口（仅限A206载板）连接到屏幕显示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji1.jpg" alt="pir" width={600} height="auto" /></p>

:::note
对于具有HDMI或DP接口的reComputer主机，尽管它有两个显示输出端口，但不支持双显示输出，这意味着一次只能使用一个显示输出接口。
:::

## 2. 功率提升

连接外围设备后，将电源连接到 reComputer 主机。

- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html)的电源供应由Type-C接口提供，电源供应位置靠近HDMI接口，在下图中显示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc1.png" alt="pir" width={600} height="auto" /></p>

:::note
Jetson J1010计算机在两侧都有一个Type-C端口，右侧靠近LAN端口的是数据传输端口。严禁将Type-C电源插入右侧的数据传输端口，否则可能会损坏组件。
:::

- reComputer J1020，[reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)，和[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html) 都由靠近 HDMI 接口处的直流接口供电。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/dc2.png" alt="pir" width={600} height="auto" /></p>

连接到电源后，reComputer主机将自动开机。

## 3. 初始设置

新的重启计算机已经刷新了系统。但在我们可以使用它之前，仍需要进行一些必要的初始设置。

### 第一步：等待开机。

开机后，您会看到屏幕中央显示着巨大的NVIDIA标志。在进入配置页面之前，您可能会发现reComputer会自动重启两次，整个过程大约需要一分钟。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji5.jpg" alt="pir" width={600} height="auto" /></p>

### 第二步：审查并接受许可证。

在配置页面中，首先您将被要求检查许可证并选择“**我接受这些许可证的条款**”来同意，并然后继续下一步。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji6.jpg" alt="pir" width={600} height="auto" /></p>

### 第三步：选择系统语言和键盘布局。

点击“继续”按钮后，下一页会要求您选择系统语言和键盘布局。您可以根据实际需求进行选择。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji7.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji8.jpg" alt="pir" width={600} height="auto" /></p>

### 第四步：连接到网络

连接 reComputer 到互联网有两种方式。一种是通过网络电缆直接连接，另一种是通过 Wi-Fi 连接到互联网（需要无线模块）。如果您不需要通过软件更新访问互联网，可以选择在此步骤中选择不连接互联网。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji9.jpg" alt="pir" width={600} height="auto" /></p>

### 第五步：配置用户信息和密码。

在下一页，您将被要求输入您的用户名和密码。您需要记住您的启动密码，因为您稍后需要启动 reComputer。

如果您觉得每次启动 reComputer 都输入密码很麻烦，为了确保其他人无法使用它，您可以选择下面的“需要我的密码登录”选项，但我们不建议这样做。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji10.jpg" alt="pir" width={600} height="auto" /></p>

### 第六步：选择供电电压

您将在reComputer操作时选择的是供电电压。

- [reComputer J1010](https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html) 和 [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) 都配备了 Jetson Nano 模块。我们强烈推荐 **MAXN** 型号，以确保您的 reComputer 正常运行。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji11.jpg" alt="pir" width={600} height="auto" /></p>

- [reComputer J2011](https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html)和[reComputer J2012](https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html)都配备了Jetson Xavier NX模块，可提供各种功率输出选项。默认型号为10W，即`MODE_10W_DESKTOP - （默认）`，您可以在这里看到：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji12.jpg" alt="pir" width={600} height="auto" /></p>

:::note
以下表格显示了 NVIDIA 预定义的电源模式及相关模块资源使用上限。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/21.jpg" /></div>
:::

完成以上指示后，我们需要等待1~2分钟，让重新启动的计算机进行最终配置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/46.jpg" /></div>

## 4. 开始吧

重新完成计算机的初始设置后，它将自动重新启动。之后，它将以下面的示例图进入系统桌面。显示系统已准备就绪，可以使用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rekaiji4.jpg" alt="pir" width={800} height="auto" /></p>

由于产品包含内置的16 GB eMMC，其中已安装了`ubuntu 18.04 LTS`和`NVIDIA JetPack 4.6`，剩余用户可用空间约为2GB。下图显示了在终端中使用磁盘空间命令后的结果：

```shell
seeed@seeed-desktop:~$ df -hl
Filesystem      Size  Used Avail Use% Mounted on
/dev/mmcblk0p1   14G   12G  2.0G  86% /
none            3.5G     0  3.5G   0% /dev
tmpfs           3.8G   75M  3.8G   2% /dev/shm
tmpfs           3.8G   22M  3.8G   1% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           3.8G     0  3.8G   0% /sys/fs/cgroup
tmpfs           777M  128K  777M   1% /run/user/1000
seeed@seeed-desktop:~$
```

## 在reComputer上安装NVIDIA系统。

如果您的 reComputer 设备崩溃，想要重新安装NVIDIA系统。我们在这里为您提供关于如何在reComputer上安装NVIDIA系统的wiki。所提供的wiki包括A20X载具板和reComputer J1010载具板。

- [Install NVIDIA system based on A20X carrier board](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack/)
- [Install NVIDIA system based on reComputer J1010 Carrier Board](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/)

## 故障排除

### Q1: 接收到的电脑中eMMC中剩余空间仅约2GB，如何解决空间不足的问题？

我们目前提供三种方式来处理这种特殊情况，您可以根据实际情况选择适合您的解决方案。

**选项 1.** 系统重新部署到外部存储设备。

如果您尚未与reComputer开始项目，您可以考虑使用此选项在具有足够容量的存储设备上重新部署新系统。

通常有两种安装reComputer系统的方法，第一种是使用**NVIDIA SDK Manager**。

如果您使用的是**reComputer J2011**或**reComputer J2012**，在[使用SDK Manager刷写到eMMC](reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line)的**第12步**中，您可以通过改变系统烧录位置来扩展容量。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::提示
这种方法不适用于Jetson Nano模块。

- 通常有两种方法可用于reComputer的系统安装，第二种方法是使用**命令行**。

- 如果您正在使用**A20X载板**，请参阅[使用命令行刷写到eMMC](/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line)的方法安装系统。

- 如果您正在使用**reComputer J1010载板**，请使用命令行按照[使用命令行刷写到eMMC](/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line)的步骤安装系统。

这两种方法都基本上通过以下命令完成系统安装。

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

在此：

[options]是一个或多个命令行选项。所有选项都是可选的。有关选项的信息，请参阅Flashing Script Usage。

指定要应用于要刷写的设备的配置。在Jetson Modules and Configurations中的表格中列出了值。flash.sh从名为.conf的配置文件中获取配置。

指定要刷写的设备类型。使用值mmcblk0p1来刷写本地存储设备（根据平台的不同为eMMC或SD卡），与NFS服务器等区分开。

如上所述，如果要将系统安装在外部存储中，可以通过更改选项来实现。

对于连接到reComputer设备的USB存储设备上的分区，请输入以下命令：

```sh
sudo ./flash.sh <board> sda<x>
```

连接到reComputer设备的NVMe存储设备上进行分区时，请输入此命令：

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

“`<x>`是一个数字，指定了存储设备上APP分区的位置，如USB设备的`sda1`，或NVMe存储设备的`nvme0n1p1`。”

**选项2。** 删除不必要的JetPack组件，以增加eMMC空间。

NVIDIA JetPack SDK是构建端到端加速AI应用程序的最全面解决方案。所有Jetson模块和开发者套件都受JetPack SDK支持。

JetPack SDK包括Jetson Linux驱动程序包(L4T)、Linux操作系统和用于深度学习、计算机视觉、加速计算和多媒体的CUDA-X加速库和API。它还包括针对主机计算机和开发套件的示例、文档和开发工具，并支持较高级别的SDK，如用于流媒体视频分析的DeepStream和用于机器人技术的Isaac。

[本表](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages)列出了包含在JetPack 4.6中的所有组件。

<table align="center">
  <tbody><tr>
      <th align="center">Component Group</th>
      <th colSpan={2} align="center" valign="middle">Packages</th>
    </tr>
    <tr>
      <th align="center" valign="middle">CUDA Toolkit for L4T</th>
      <td align="center">cuda <br /> cuda-11-4 <br /> cuda-cccl-11-4 <br /> cuda-command-line-tools-11-4 <br /> cuda-compiler-11-4 <br /> cuda-cudart-11-4 <br /> cuda-cudart-dev-11-4 <br /> cuda-cuobjdump-11-4 <br /> cuda-cupti-11-4 <br /> cuda-cupti-dev-11-4 <br /> cuda-cuxxfilt-11-4 <br /> cuda-documentation-11-4 <br /> cuda-driver-dev-11-4 <br /> cuda-gdb-11-4 <br /> cuda-gdb-src-11-4 <br /> cuda-libraries-11-4 <br /> cuda-libraries-dev-11-4 <br /> cuda-minimal-build-11-4 <br /> cuda-nvcc-11-4 <br /> cuda-nvdisasm-11-4 <br /> cuda-nvml-dev-11-4 <br /> cuda-nvprof-11-4 <br /> cuda-nvprune-11-4 <br /> cuda-nvrtc-11-4 <br /> cuda-nvrtc-dev-11-4 <br /> cuda-nvtx-11-4</td>
      <td align="center">cuda-runtime-11-4 <br /> cuda-samples-11-4 <br /> cuda-sanitizer-11-4 <br /> cuda-toolkit-11-4 <br /> cuda-toolkit-11-4-config-common <br /> cuda-toolkit-11-config-common <br /> cuda-toolkit-config-common <br /> cuda-tools-11-4 <br /> cuda-visual-tools-11-4 <br /> libcublas-11-4 <br /> libcublas-dev-11-4 <br /> libcudla-11-4 <br /> libcudla-dev-11-4 <br /> libcufft-11-4 <br /> libcufft-dev-11-4 <br /> libcurand-11-4 <br /> libcurand-dev-11-4 <br /> libcusolver-11-4 <br /> libcusolver-dev-11-4 <br /> libcusparse-11-4 <br /> libcusparse-dev-11-4 <br /> libnpp-11-4 <br /> libnpp-dev-11-4</td>
    </tr>
    <tr>
      <th align="center">cuDNN</th>
      <td align="center">libcudnn8 <br /> libcudnn8-dev</td>
      <td align="center">libcudnn8-samples</td>
    </tr>
    <tr>
      <th align="center">TensorRT</th>
      <td align="center">graphsurgeon-tf <br /> libnvinfer-bin <br /> libnvinfer-dev <br /> libnvinfer-doc <br /> libnvinfer-plugin-dev <br /> libnvinfer-plugin8 <br /> libnvinfer-samples <br /> libnvinfer8</td>
      <td align="center">libnvonnxparsers-dev <br /> libnvonnxparsers8 <br /> libnvparsers-dev <br /> libnvparsers8 <br /> python3-libnvinfer <br /> python3-libnvinfer-dev <br /> tensorrt <br /> uff-converter-tf</td>
    </tr>
    <tr>
      <th align="center">OpenCV</th>
      <td align="center">libopencv <br /> libopencv-dev <br /> opencv-licenses</td>
      <td align="center">libopencv-python <br /> libopencv-samples</td>
    </tr>
    <tr>
      <th align="center">VPI</th>
      <td align="center">libnvvpi2 <br /> vpi2-dev <br /> python-vpi2</td>
      <td align="center">python3.9-vpi2 <br /> vpi2-samples <br /> vpi2-demos</td>
    </tr>
    <tr>
      <th align="center">NVIDIA container runtime with Docker integration</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">Multimedia API</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

JetPack SDK包含大量内容，但并非所有开发人员都需要使用。因此，有选择地移除它们以腾出更多存储空间是一个不错的选择。

我们可以使用以下命令查看在reComputer Jetson上安装的JetPack的信息。

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

通过这个命令，您可以快速了解JetPack中安装的组件的内容，比如CUDA、openCV等。

要获取更详细的信息，您可以使用以下命令查找由reComputer当前安装的所有软件及其描述信息。

```sh
dpkg-query -l
```

然后，根据您的实际需求和组件的描述信息，您可以选择性地删除您不需要的内容。删除的命令如下所示。

```sh
sudo apt autoremove ${packagesname}
```

环境变量`${packagesname}`表示您要删除的组件包的名称。如果要删除所有以特定名称为前缀的包，可以在该前缀后面添加`*`来指示。

例如，如果我们想删除有关**CUDA**的所有组件，则可以使用以下命令。

```sh
sudo apt autoremove cuda*
```

释放CUDA组件的内容后，您会发现eMMC的剩余容量也会变得更大。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

相同的规则也适用于其他JetPack组件。

**选项 3.** 通过外部存储设备进行容量扩展。

如果您已经在正常使用 reComputer 一段时间，并且不想破坏现有系统环境来完成扩展解决方案，则可以选择此选项。

我们已经拥有一个完善的扩展维基 [reComputer 系列内存扩展](https://wiki.seeedstudio.com/reComputer_Jetson_Memory_Expansion/)。

值得注意的是，任何扩展操作都是危险的，我们希望您在一切开始之前积极进行 **系统备份**。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供不同的支持，以确保您与我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

