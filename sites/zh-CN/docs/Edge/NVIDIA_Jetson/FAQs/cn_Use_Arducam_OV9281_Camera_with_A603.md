---
description: 在 JetPack 6.2 上将 Arducam Jetvariety 相机（OV9281）与 A603 Jetson 载板一起使用
title: 在 A603 Jetson 载板上使用 Arducam OV9281（Jetvariety）相机
keywords:
  - reComputer
  - Arducam
  - OV9281
  - Jetvariety
  - A603
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /use_arducam_ov9281_camera_with_a603_jetson_carrier_board
last_update:
  date: 07/08/2026
  author: Jonathan van der Maas
createdAt: '2026-08-11'
url: https://wiki.seeedstudio.com/cn/use_arducam_ov9281_camera_with_a603_jetson_carrier_board/
updatedAt: '2026-08-11'
---

Arducam Jetvariety 相机官方只支持 NVIDIA 开发套件载板，而不是 A603，并且 Arducam 的安装器 overlay 无法在 A603 上工作。相机本身在你构建一个小型自定义设备树后可以很好地工作。本页记录了 Arducam OV9281（B0223）在 JetPack 6.2（L4T R36.4.3）上的可用配置、原厂 overlay 失败的原因，以及一个可能会禁用板上所有 USB 的陷阱。

结果：OV9281 出现在 `/dev/video0`，GREY / Y10 / Y16 格式，分辨率为 1280x800、1280x720 和 640x400，最高 80 fps，并支持外部触发。

## 为什么 Arducam 自己的 overlay 无法在 A603 上工作

1. A603 的单个 CSI 接口是 i2c-2（`i2c@3180000`）上的 `serial_a`。Arducam 的开发套件 overlay 将其传感器节点连接到 `cam_i2cmux` 节点下的 `serial_b`/`serial_c`，而这个复用器在该板上从不会实例化，因此传感器节点从不会探测到。不会有任何错误信息；相机只是永远不会出现。
2. Jetvariety 控制器在 i2c 地址 `0x0c` 上响应。使用 `i2cdetect -y -r 2` 验证。
3. A603 BSP 自带其重建的内核，并复用了 NVIDIA 的设备树文件名，因此必须修改的是 A603 的设备树，而不是开发套件的设备树。

## 启动安全优先

:::caution
Arducam 的安装器会添加一个启动条目（通常标记为 `JetsonIO`），将他们的内核与他们的开发套件设备树配对。在 A603 上从该条目启动会禁用所有 USB 端口，包括 USB gadget 网络和任何键盘。A603 的 UEFI/extlinux 启动菜单不接受键盘输入，因此 `/boot/extlinux/extlinux.conf` 中 `DEFAULT` 指向的内容就是每次启动的内容，且始终如此。切勿让 `DEFAULT` 指向未经测试的条目。从这种状态恢复需要在另一台机器上通过 RCM 启动刷机 initrd（在 W7 的 3、4 脚上短接恢复跳线）。
:::

在实验之前，先备份原始内核和 DTB，并考虑安装一个 systemd 定时器：在每次启动约 180 秒后，如果不存在保持标志文件，就将 `DEFAULT` 重置为已知可用的条目：

```bash
# /usr/local/sbin/a603-boot-revert.sh
#!/bin/sh
[ -e /etc/a603-keep-boot-default ] && exit 0
sed -i 's/^DEFAULT .*/DEFAULT seeed/' /boot/extlinux/extlinux.conf
```

任何启动实验的工作流程：删除保持标志，将 `DEFAULT` 指向实验条目并重启。如果它工作正常，则重新创建保持标志。如果板子变得不可访问，断电重启，它会自动恢复到已知可用的条目。

## 可用配置

在 `/boot/extlinux/extlinux.conf` 中的启动条目：

```
LABEL arducam
      MENU LABEL Arducam kernel + A603 sensor-swapped DTB
      LINUX /boot/arducam/Image
      FDT /boot/kernel_a603-arducam.dtb
      APPEND ${cbootargs} root=/dev/nvme0n1p1 rw rootwait rootfstype=ext4 ...
```

- 内核：来自 Arducam 的 `arducam-nvidia-l4t-kernel` 软件包（他们的安装器会获取）。其中包含 `arducam-csi2` Jetvariety 驱动。
- DTB：自定义的，按下文所述构建。注意，在该板上，extlinux 中的 `FDT` 行确实会覆盖分区中的 DTB。

### 设备树策略：只替换传感器，保留其他所有内容

将 Arducam 的相机图 graft 到 A603 设备树中会因为 phandle 和连线不匹配而失败。可行的方法恰好相反：保留 A603 完整且与板匹配的相机图（CSI 通道、VI 连线、端口和端点、phandle，全都为该板开箱即用支持的 IMX219 构建），只替换传感器节点的身份：

1. 反编译原厂 A603 DTB：`dtc -I dtb -O dts -o seeed.dts <stock DTB>`
2. 反编译任意一个包含 Arducam 传感器块的 DTB（例如来自他们的 overlay），以获取其中的 `mode0` 节点
3. 在 `seeed.dts` 中，在 `i2c@3180000` 内，将 `rbpcv2_imx219_a@10` 节点替换为 `arducam_a@0c` 节点：
   - `compatible = "arducam,arducam-csi2"`，`reg = <0x0c>`，`sensor_model = "arducam-csi2"`，`use_sensor_mode_id = "true"`
   - 原样保留原来的 `devnode`、`reset-gpios`、`phandle` 以及整个 `ports` 块；这样可以保持所有 phandle 有效
   - 插入 Arducam 的 `mode0` 块，并将其中的 `tegra_sinterface` 改为 `"serial_a"`
4. 将 `cam0-rst` GPIO hog 从 `output-low` 改为 `output-high`（原厂设备树会将相机保持在复位状态）
5. 将 `tegra-camera-platform` 中的路径字符串和 `__symbols__` 从 `.../rbpcv2_imx219_a@10` 更新为 `.../arducam_a@0c`
6. 重新编译并安装：`dtc -I dts -O dtb -o /boot/kernel_a603-arducam.dtb a603-arducam.dts`

一个自动执行此转换的 Python 脚本可在[此仓库](https://github.com/vdmaas98/a603-arducam)中获取。

在 dmesg 中的成功标志：

```
arducam-csi2 2-000c: firmware version: 0x10003
arducam-csi2 2-000c: Sensor ID: 0x9281
arducam-csi2 2-000c: sensor arducam-csi2 2-000c registered
```

## 在调试软件前先检查排线

如果传感器在 i2c 上没有响应，先检查物理层：

- 在相机端，排线的金手指必须朝向远离相机 PCB 的一侧，并且两个卡扣都必须完全且均匀地闭合。
- 一个决定性的诊断方法是自由端供电测试：只将排线插入 A603，保持相机端松开，给板子上电，然后用万用表测量松端最外侧的触点。读数为 3.3 V 说明主板、线缆以及主板端方向都没有问题，将剩余故障范围限定在相机端。
- 线缆：22 针，A 型（两端金手指在同一面），直通。

## 采集

:::note
驱动的默认曝光和增益会产生黑帧，看起来与相机损坏完全一样。使用 `v4l2-ctl` 进行采集时，在同一次调用中设置控制参数，因为每次打开新流时这些值都会重置。
:::

```bash
v4l2-ctl -d /dev/video0 --set-fmt-video=width=1280,height=800,pixelformat=GREY \
  --set-ctrl exposure=10000 --set-ctrl analogue_gain=400 \
  --stream-mmap --stream-count=10 --stream-to=/tmp/frames.raw
```

范围：`exposure` 1 到 65523，`analogue_gain` 100 到 1500。还可用：`trigger_mode`（外部触发）、`frame_rate` 5 到 80，水平和垂直翻转。

虽然该方法是在 OV9281 B0223 上测试的，但它也应适用于 A603 上的其他 Jetvariety 模块，因为 Jetvariety 设计将模式逻辑放在相机板载控制器中，而不是设备树中。


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
