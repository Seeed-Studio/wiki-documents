---
description: 适用于Jetson的内存扩展器
title: 适用于Jetson的内存扩展器
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Memory_Expansion
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# 适用于Jetson的内存扩展器

Jetson的reComputer售卖时附带16GB的eMMC存储空间,预装有Ubuntu 18.04 LTS和NVIDIA JetPack 4.6,因此剩余的可用用户空间大约只有2GB,这对于一些项目的培训和部署来说是一个重大障碍。本教程将介绍基于这一情况下,对不同型号reComputer进行扩展的过程,并帮助开发者通过将系统转移到外部存储设备上来扩展他们的系统。

## 扩容基础知识

系统安装的磁盘上的第一个扇区称为**主引导记录（MBR）**，其中包含有关**引导加载程序（BootLoader）**、分区表和固定标识符**55AA**的信息。Linux的启动过程中，**引导加载程序**和**内核**经历了两个重要阶段。

**第一阶段：** 引导加载程序初始化一个临时的根文件系统 **(ramfs)**。Ramfs 包含在启动时必要的驱动程序、文件系统（fs）、网络（net）等配置程序。之后，引导加载程序的控制权转移到内核，以便内核可以提取这些程序，将它们移至内存 **(RAM)** 并运行它们以加载各种功能模块。

**第二阶段：** 在内核加载了与ramfs一起的必要模块后，它释放系统并配置真正的根文件系统（rootfs）以挂载到真正的根目录。

1. 在上述两个阶段中，我们不需要修改加载带有ramfs的功能模块的内核部分（第1阶段），因此即使重新计算机已扩展，它仍然需要使用eMMC。
2. 我们需要修改的是第二阶段，它将根文件系统挂载到外部内存，从而实现扩展。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/2.png" /></div>

## 容量扩展说明

1. 通过外部存储扩展的主要原则是将rootfs设置在外部存储设备上。

2. 这种扩展方法会修改Linux内核级别的系统文件，可能会遇到一些难以解决的问题。在按照本教程完成扩展时，您应该使用一台新的reComputer和一个新的存储设备，并**不要尝试在设备上存储重要文件**。如果一切不如预期般顺利，您可能需要重新格式化存储设备甚至reComputer，在最终保留选项上，如果可能的话，我们将提供通过串口帮助您恢复备份，但是您需自行承担任何数据损失。

3. 这种扩展过程不需要重新编译内核，与在线其他早期的扩展方法相比，安装时间可以节省约40分钟。

## 通过载板上的M.2插槽和固态硬盘进行扩展

固态硬盘，也被称为固态驱动器，通常被用作笔记本电脑、台式电脑等的主要存储设备。由于其高可靠性和快速的数据读写速率，它是扩展reComputer的最佳选择。下表列出了目前可用于固态硬盘扩展解决方案的reComputer系列产品。reComputer J1010不支持固态硬盘扩展的主要原因是载板未配备适用的M.2插槽。

<table align="center">
  <tbody><tr>
      <th align="center">产品</th>
      <th align="center">reComputer J1020</th>  
      <th align="center">reComputer J2011</th>
      <th align="center">reComputer J2012</th>
      <th align="center">reComputer J2021</th>
    </tr>
    <tr>
      <th align="center">SKU
      </th><td align="center">110061361</td>
      <td align="center">110061363</td>
      <td align="center">110061401</td>
      <td align="center">110061381</td>
    </tr>
    <tr>
      <th align="center">产品图
      </th><td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
    </tr>
    <tr>
      <th align="center">配备的模块
      </th><td align="center">Jetson Nano 4G</td>
      <td align="center">Jetson Xavier NX 8GB</td>
      <td align="center">Jetson Xavier NX 16GB</td>
      <td align="center">Jetson Xavier NX 8GB</td>
    </tr>
    <tr>
      <th align="center">操作载体板
      </th><td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">J202</td>
    </tr>
  </tbody>
</table>


### 软件和硬件要求

为了证明使用SSD进行扩展解决方案的成功，需要满足以下条件，这些是扩展成功的基本要求。

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">software and hardware requirements</th>  
    </tr>
    <tr>
      <th align="center">reComputer for Jetson
      </th><td align="left">JetPack versions 4.4 ~ 4.6 <br />
        Carrier board must contain M.2 M-Key slot</td>
    </tr>
    <tr>
      <th align="center">SSD
      </th><td align="left">SSD need to be fourth generation extended file system (Ext4) <br />
        M.2 M-Key interface with NVMe protocol <br />
        Recommended capacity ≤ 512 GB</td>
    </tr>
  </tbody>
</table>


注意！！！
更新后的JetPack版本尚未经过扩展测试，因此无法保证扩展的稳定性或成功性，请仔细遵循本教程。

SSD需要是M.2 M-Key，否则将无法匹配载板上的接口。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/3.jpeg" /></div>

具有非扩展第四代文件系统（Ext4）的存储设备无法完成扩展操作。

### 步骤

**步骤 1.** 安装SSD

Follow the steps in the [Hardware Instructions](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Hardware_Layout/) to install the SSD for reComputer.

**步骤 2.** 准备固态硬盘

使用快捷键`Ctrl+F`或点击左上角的Ubuntu图标搜索**磁盘**，并打开随Ubuntu 18.04提供的磁盘工具。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

在左侧选择您的固态硬盘，然后在菜单栏下方的右上角选择**格式化磁盘**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd1.jpg" /></div>


将您的SSD格式化为GPT格式。将出现一个弹出窗口询问您进行确认并输入您的用户密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd3.png" /></div>


然后，我们点击中间的**+**添加一个磁盘字符。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd6.png" /></div>


点击“下一页”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd7.png" /></div>


请给你的SSD取一个名称，然后在类型中选择**Ext4**，点击“创建”。这样，我们已经按照扩展需求完成了SSD的准备工作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd8.png" /></div>


**步骤 3.** 构建将根目录定位到SSD

使用git命令下载我们需要使用重新计算机脚本文件。.

```sh
$ git clone https://github.com/limengdu/rootOnNVMe.git
$ cd rootOnNVMe/
```

然后执行以下命令，将来自eMMC的根目录中的文件构建到SSD中，此步骤的等待时间取决于您使用的根目录的大小。

```sh
$ ./copy-rootfs-ssd.sh
```

**步骤 4.**配置环境并完成扩展

执行以下命令以完成rootfs的配置。

```sh
$ ./setup-service.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/9.png" /></div>

重新启动计算机时，您会发现eMMC已变成主界面上的外部存储设备，并且您会看到系统占用空间已减少，因此扩展成功。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/11.png" /></div>

!!!注意
    脚本文件中默认的SSD路径为`/dev/nvme0n1p1`，这也是reComputer默认分配的路径。如果发现您的SSD路径与命令`sudo fdisk -l`不匹配，请将rootOnNVMe中的文件**copy-rootfs-ssd.sh**、**data/setssdroot.service**和**data/setssdroot.sh**中所有的`/dev/nvme0n1p1`路径更改为您SSD所在的路径。
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/21.png" /></div>


    以上的扩展不会删除eMMC中原始根目录的内容。如果您不想从SSD启动，可以移除SSD，系统仍然会从eMMC启动。

## 通过USB存储设备进行容量扩展。

USB存储设备，如USB闪存驱动器和移动硬盘，在生活的各个领域广泛用作外部存储，USB扩展也适用于reComputer。以下表格列出了目前可用于USB扩展解决方案的reComputer产品。

<table align="center">
  <tbody><tr>
      <th align="center">产品</th>
      <th align="center">reComputer J1010</th>  
    </tr>
    <tr>
      <th align="center">SKU
      </th><td align="center">110061362</td>
    </tr>
    <tr>
      <th align="center">产品图
      </th><td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" /></div></td>
    </tr>
    <tr>
      <th align="center">模组
      </th><td align="center">Jetson Nano 4G</td>
    </tr>
    <tr>
      <th align="center">载板
      </th><td align="center">J1010 carrier board</td>
    </tr>
  </tbody>
</table>


通过 USB 存储设备进行扩展的最大优势是 USB 设备的高度便利性和简单的拔插操作。然而，即使使用高速的 USB 3.2 接口，数据传输速率远低于标准 PCIe 总线的速度，因此 SSD 扩展方法在稳定性、可靠性和数据传输速度方面更为优越。

### 软件和硬件要求

使用USB进行扩展方案的成功实施，需要满足以下条件，这是验证扩展是否可以成功完成的基本要求。

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">软件和硬件要求</th>  
    </tr>
    <tr>
      <th align="center">reComputer for Jetson
      </th><td align="left">JetPack versions 4.4 ~ 4.6 <br />
        装备模块需要Jetson Nano</td>
    </tr>
    <tr>
      <th align="center">USB 存储设备
      </th><td align="left">USB存储设备需要为第四代的扩展文件系统（Ext4）。 <br />
        USB存储设备电源供应电流 ≤ 0.5 A</td>
    </tr>
  </tbody>
</table>


!!!注意。
    更新后的JetPack版本还未经过扩展测试，因此无法保证扩展的稳定性或成功性，请仔细按照这个教程操作。

大容量USB存储设备需要保证reComputer的正常供电以确保正常运行，不建议使用容量超过512GB的USB存储设备。电源供应不足会导致reComputer关机。

除了Jetson Nano外装备的模块目前不支持使用此方法进行扩展。

非扩展第四代文件系统（Ext4）的存储设备无法完成扩展操作。

### 扩展步骤

**步骤 1.** 准备必要的文件。

使用git命令下载我们需要用来重新计算机的脚本文件。

```sh
$ git clone https://github.com/limengdu/bootFromUSB.git
$ cd bootFromUSB
```

**步骤 2.** 准备USB存储设备

将USB存储设备连接到reComputer，并通过快捷键`Ctrl+F`或单击左上角的Ubuntu图标并搜索** Disks**来打开随Ubuntu 18.04提供的Disks工具。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

在左侧选择您的USB存储设备，然后在菜单栏下方的右上角选择**格式化磁盘**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd1.jpg" /></div>


将您的USB存储设备格式化为GPT格式。将会出现一个弹窗，要求您确认并输入您的用户密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd2.png" /></div>


然后，我们点击中间的**+**来添加一个磁盘字符。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd4.png" /></div>


点击“下一步”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd5.png" /></div>


请为您的USB存储设备命名，选择**Ext4**类型，然后点击“创建”。这样，根据扩展要求，我们已经完成了USB存储设备的准备工作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd6.png" /></div>


**步骤 3.** 安装 USB 存储设备

根据**步骤2**准备的USB存储设备可以在磁盘软件中看到，状态是未挂载的。

!!!Note
	如果您发现您的USB设备在格式化后被自动挂载，请跳过此步骤。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/60.png" /></div>


我们使用以下命令来挂载USB设备。

```sh
$ mkdir /media/USB/
$ sudo mount <USB Device Path> /media/USB/
```

`<USB设备路径>`是指USB存储设备的路径，此参数可以在磁盘软件的设备中查看，也可以用命令`sudo fdisk -l`进行查询。例如，对于我的USB设备，我可以使用以下命令将`/dev/sda1`挂载到`/media/USB/`。

```sh
$ sudo mount /dev/sda1 /media/USB/
```

请使用以下命令检查设备的挂载位置。

```sh
$ sudo findmnt -rno TARGET <USB Device Path>
```

对于我的USB设备，我需要使用的命令是：

```sh
$ sudo findmnt -rno TARGET /dev/sda1
```


**步骤 4.**将系统复制到USB存储设备中。

**copyRootToUSB.sh**脚本将整个eMMC系统的内容复制到USB存储设备中。当然，USB存储设备应该比eMMC拥有更多的存储空间。

所使用的命令如下。

```sh
usage: ./copyRootToUSB.sh [OPTIONS]
-d | --directory     Directory path to parent of kernel

-v | --volume_label  Label of Volume to lookup

-p | --path          Device Path to USB drive (e.g. /dev/sda1)

-h | --help  This message
```

通常，对于常规的扩展需求，我们可以在参数`[选项]`中简单选择`-p`，然后我们需要添加USB设备的路径（例如`/dev/sda1`），这是我们在**步骤3**中得到的。例如，对于我的USB设备，我需要使用的完整命令是：

```sh
$ ./copyRootToUSB.sh -p /dev/sda1
```

执行此命令所需的时间取决于您的eMMC存储的文件大小。

**步骤 5.**查询USB设备的UUID。

为了确保准确性，我们需要查找USB设备的UUID。

```sh
$ ./partUUID.sh 
```

此命令的默认路径为**sda1 (/dev/sda1)**，但您也可以确定其他USB设备的UUID。请使用`-d`标志指定`/dev/`。例如，对于我的USB设备，路径将是：

```sh
$ ./partUUID.sh -d sdb1

UUID of Disk: /dev/sdb1
e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5
Sample for /boot/extlinux/extlinux.conf entry:
APPEND ${cbootargs} root=UUID=e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5 rootwait rootfstype=ext4
```

!!!注意
    如果返回的UUID在格式和长度上与上面的示例不同，则设备可能未格式化为Ext4，请重新从**步骤2**开始！

**步骤 6.** 修改引导配置以完成扩展

我们需要首先备份引导配置文件。

```sh
$ sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
```

这一步骤是USB设备扩展操作中最重要且最危险的步骤。编辑 `/boot/extlinux/extlinux.conf` 文件和 `/media/nvidia/boot/extlinux/extlinux.conf`，然后添加一个条目指向新的rootfs，位置为USB设备的路径，请填写在下面的参数`<path>`中。路径信息可以在**步骤3**中获取。

```sh
$ sudo vi /boot/extlinux/extlinux.conf
$ sudo vi /media/nvidia/boot/extlinux/extlinux.conf

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=<path> rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
```

我正在使用的USB存储设备，修改后的`/boot/extlinux/extlinux.conf`文件和`/media/nvidia/boot/extlinux/extlinux.conf`文件内容如下：

```sh
TIMEOUT 30
DEFAULT primary

MENU TITLE L4T boot options

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=/dev/sda1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
#      APPEND ${cbootargs} quiet root=/dev/mmcblk0p1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1 

# When testing a custom kernel, it is recommended that you create a backup of
# the original kernel and add a new entry to this file so that the device can
# fallback to the original kernel. To do this:
#
# 1, Make a backup of the original kernel
#      sudo cp /boot/Image /boot/Image.backup
#
# 2, Copy your custom kernel into /boot/Image
#
# 3, Uncomment below menu setting lines for the original kernel
#
# 4, Reboot

# LABEL backup
#    MENU LABEL backup kernel
#    LINUX /boot/Image.backup
#    INITRD /boot/initrd
#    APPEND ${cbootargs}
```

保存文件并重新启动计算机，系统根目录将切换到 USB 存储设备，扩容完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/62.png" /></div>


## 通过串行控制台恢复系统备份

当您的系统由于错误或其他原因而无法正常引导时（一个常见情况是在引导时Nvidia图标不断出现），那么您在扩容期间制作的备份将发挥重要作用。我们理解您此刻的焦虑，但请耐心跟随以下步骤将ReComputer重新调入串行控制台，我们将操作U-boot来恢复您的备份。

### 材料准备

<table align="center">
  <tbody><tr>
      <th align="center">材料准备</th>
      <th align="center">描述</th>  
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/7.jpeg" /></div>
      </th><td align="left">Ubuntu主机x1.</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div>
      </th><td align="left">无系统的 reComputer Jetson x1</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/5.png" /></div>
      </th><td align="left"><a href="https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?queryID=cb30ad1a9d75c9ef437912535186b130&objectID=1112&indexName=bazaar_retailer_products">UART转USB模块x1</a></td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/6.png" /></div>
      </th><td align="left"><a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html?queryID=a51c4491cb6b462a1e844c832c98c52a&objectID=2042&indexName=bazaar_retailer_products">母对母杜邦线 x3</a></td>
    </tr>
  </tbody>
</table>


### 访问串行控制台的步骤。

**第一步。** 将UART转USB模块连接到reComputer。

将reComputer连接到UART至USB模块，按照下表中的布线说明进行连接。

<table align="center">
  <tbody><tr>
      <td colSpan={3}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/8.jpeg" /></div></td>
    </tr>
    <tr>
      <td align="center">reComputer</td>
      <td align="center"> </td>
      <td align="center">UART to USB module</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">UART TXD</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">UART RXD</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
  </tbody>
</table>


!!!Tip
    reComputer与UART至USB模块之间的VCC接口无需连接。

连接电缆后，暂时无需打开reComputer电源，请将其放在一旁。

请断开扩展的外部存储器。

**第2步。** 在Ubuntu主机上安装并启动minicom

如果您的Ubuntu主机没有安装minicom，则可以使用以下命令在计算机上安装minicom。

```sh
$ sudo apt-get install minicom
```

安装完成后，请输入命令启动minicom。

```sh
$ sudo minicom
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/40.png" /></div>

**步骤 3.** 准备配置minicom

在minicom菜单栏中，我们打开串口并配置它，以便通过minicom获取reComputer启动信息。在菜单栏中，按键盘**o**键以访问配置屏幕。使用键盘上下箭头键控制光标移动到**串口设置**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/41.png" /></div>

**步骤4。** 将reComputer连接到Ubuntu主机

此刻，我们创建一个新的命令行窗口，并在窗口中输入命令来监视新设备的访问。
```sh
$ dmesg --follow
```

在这一点上，我们将启动reComputer，并将UART连接到USB模块，reComputer通过USB端口连接到Ubuntu主机。命令行窗口将显示新连接设备的名称，我们需要找到以**tty**开头的片段并记下来。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/44.png" /></div>

**步骤5。** U-boot操作

回到minicom，将在**步骤4**中获得的设备名称填入**串行设备**中。同时，请检查波特率是否配置为**115200**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/42.png" /></div>

在修改后，按回车键保存。选择**另存为dfl配置**并退出minicom界面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/43.png" /></div>

重新输入命令`sudo minicom`，输入minicom后，我们将在窗口中看到计算机的启动信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/45.png" /></div>

我们可以通过使用返回的信息和使用帮助命令来查看U-boot系统下所有可用命令，来排查reComputer无法启动的原因。了解如何使用这些命令是解决问题所必需的，当然这可能会很困难。

```sh
Tegra210 (P3450-0000) # help
?         - alias for 'help'
base      - print or set address offset
bdinfo    - print Board Info structure
blkcache  - block cache diagnostics and control
boot      - boot default, i.e., run 'bootcmd'
bootd     - boot default, i.e., run 'bootcmd'
bootefi   - Boots an EFI payload from memory
bootelf   - Boot from an ELF image in memory
booti     - boot Linux kernel 'Image' format from memory
bootm     - boot application image from memory
bootp     - boot image via network using BOOTP/TFTP protocol
bootvx    - Boot vxWorks from an ELF image
cmp       - memory compare
coninfo   - print console devices and information
cp        - memory copy
crc32     - checksum calculation
dcache    - enable or disable data cache
dfu       - Device Firmware Upgrade
dhcp      - boot image via network using DHCP/TFTP protocol
dm        - Driver model low level access
echo      - echo args to console
editenv   - edit environment variable
enterrcm  - reset Tegra and enter USB Recovery Mode
env       - environment handling commands
exit      - exit script
ext2load  - load binary file from a Ext2 filesystem
ext2ls    - list files in a directory (default /)
ext4load  - load binary file from a Ext4 filesystem
ext4ls    - list files in a directory (default /)
ext4size  - determine a file's size
ext4write - create a file in the root directory
false     - do nothing, unsuccessfully
fatinfo   - print information about filesystem
fatload   - load binary file from a dos filesystem
fatls     - list files in a directory (default /)
fatmkdir  - create a directory
fatrm     - delete a file
fatsize   - determine a file's size
fatwrite  - write file into a dos filesystem
fdt       - flattened device tree utility commands
fstype    - Look up a filesystem type
go        - start application at address 'addr'
gpio      - query and control gpio pins
gzwrite   - unzip and write memory to block device
help      - print command description/usage
i2c       - I2C sub-system
icache    - enable or disable instruction cache
imxtract  - extract a part of a multi-image
itest     - return true/false on integer compare
ln        - Create a symbolic link
load      - load binary file from a filesystem
loadb     - load binary file over serial line (kermit mode)
loads     - load S-Record file over serial line
loadx     - load binary file over serial line (xmodem mode)
loady     - load binary file over serial line (ymodem mode)
loop      - infinite loop on address range
ls        - list files in a directory (default /)
lzmadec   - lzma uncompress a memory region
md        - memory display
mii       - MII utility commands
mm        - memory modify (auto-incrementing address)
mmc       - MMC sub system
mmcinfo   - display MMC info
mw        - memory write (fill)
nm        - memory modify (constant address)
nvme      - NVM Express sub-system
part      - disk partition related commands
pci       - list and access PCI Configuration Space
ping      - send ICMP ECHO_REQUEST to network host
printenv  - print environment variables
pxe       - commands to get and boot from pxe files
reset     - Perform RESET of the CPU
run       - run commands in an environment variable
save      - save file to a filesystem
saveenv   - save environment variables to persistent storage
setenv    - set environment variables
sf        - SPI flash sub-system
showvar   - print local hushshell variables
size      - determine a file's size
sleep     - delay execution for some time
source    - run script from memory
sspi      - SPI utility command
sysboot   - command to get and boot from syslinux files
test      - minimal test like /bin/sh
tftpboot  - boot image via network using TFTP protocol
true      - do nothing, successfully
ums       - Use the UMS [USB Mass Storage]
unzip     - unzip a memory region
usb       - USB sub-system
usbboot   - boot from USB device
version   - print monitor, compiler and linker version
```

## 技术支持与产品讨论
感谢您选择我们的产品！我们在这里提供不同的支持，以确保您与我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
