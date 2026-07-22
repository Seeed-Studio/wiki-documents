---
description: 从 Jetson Orin Nano Developer Kit 克隆完整环境，并制作可刷写到 Seeed reComputer Super 的 Hybrid BSP
title: 从 Orin Nano DevKit 制作 DIY BSP 并适配 reComputer Super
keywords:
  - reComputer
  - reComputer Super
  - Orin Nano Developer Kit
  - BSP
  - Hybrid BSP
  - JetPack
  - custom image
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_diy_bsp_from_orin_nano_devkit_to_recomputer_super
last_update:
  date: 07/16/2026
  author: Zuhao
createdAt: '2026-07-16'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/cn/make_diy_bsp_from_orin_nano_devkit_to_recomputer_super/
---

本 Wiki 演示如何保留 **NVIDIA Jetson Orin Nano Developer Kit** 的完整系统和用户环境，同时换用 **Seeed reComputer Super** 的板级启动固件，制作并刷写 Hybrid BSP。

本流程已在 JetPack 6.2 / L4T 36.4.3、Orin Nano 8GB（SKU 0005）和 128GB reComputer Super NVMe 上完成实机刷写与启动验收。

相关文档：

- [从 Orin Nano DevKit 制作 DIY BSP 并适配 reComputer Classic](/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic/)
- [从 Jetson 开发环境创建自定义 BSP 包](/make_diy_bsp_for_jetson/)
- [将 Orin Nano DK 的 /home 迁到 reComputer](/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/)
- [刷写 JetPack 到指定产品](/flash/jetpack_to_selected_product/)

## 你要制作什么

最终产物为：

```text
mfi_recomputer-orin-super-j401.tar.gz
```

其中：

- `external/`：DevKit 备份的完整 APP，包含用户、软件和数据；
- `internal/`：由 `recomputer-orin-super-j401` 重新生成的 Super QSPI；
- GPT、kernel、DTB 和 recovery：按目标 Super NVMe 容量生成。

:::danger
不要把 `mfi_jetson-orin-nano-devkit-nvme` 直接刷到 reComputer Super。

不要把 Classic 的 `mfi_recomputer-orin-j401` 刷到 Super。Classic 与 Super 的 pinmux 和摄像头 overlay 不同。
:::

## 前提条件

### 硬件

- 源机：Jetson Orin Nano Developer Kit，NVMe 启动；
- 目标机：reComputer Super，建议使用相同 SKU 的模块；
- 本例：两端均为 Orin Nano 8GB，SKU 0005；
- Ubuntu 22.04 x86_64 主机和 USB Type-C 数据线；
- 建议预留至少 100GB 主机磁盘空间。

### 主机依赖

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

备份或刷写前：

```bash
sudo systemctl stop udisks2.service
sudo service nfs-kernel-server start
lsusb | grep 0955:7523
```

应看到 `NVIDIA Corp. APX`。

## DevKit、Classic 与 Super 的关键区别

| 项目 | DevKit | reComputer Classic | reComputer Super |
| --- | --- | --- | --- |
| board-name | `jetson-orin-nano-devkit-nvme` | `recomputer-orin-j401` | `recomputer-orin-super-j401` |
| Pinmux | NVIDIA DevKit | Classic HDMI | Super HDMI |
| 摄像头 overlay | NVIDIA dynamic | Seeed dual IMX219 | Seeed quad IMX219 |
| 最终 mfi | DevKit 专用 | Classic 专用 | Super 专用 |

Super 配置中的关键内容为：

```bash
PINMUX_CONFIG="recomputer-super-orin-j401-pinmux-p3767-hdmi-a03.dtsi";
PMC_CONFIG="recomputer-super-orin-j401-padvoltage-p3767-hdmi-a03.dtsi";
OVERLAY_DTB_FILE+=",tegra234-dcb-p3767-0000-hdmi.dtbo,tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo";
DCE_OVERLAY_DTB_FILE="tegra234-dcb-p3767-0000-hdmi.dtbo";
```

## 1. 准备 Linux_for_Tegra

按 [从 Jetson 开发环境创建自定义 BSP 包](/make_diy_bsp_for_jetson/) 准备与目标 JetPack 版本匹配的 Seeed L4T 工作区，并完成 `apply_binaries.sh`、内核编译和文件复制。

验收：

```bash
cd Linux_for_Tegra
test -f recomputer-orin-super-j401.conf
test -f jetson-orin-nano-devkit-nvme.conf
test -f kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo
test -f kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo
```

## 2. 备份 DevKit 完整环境

让源 DevKit 进入 Force Recovery。确认：

```bash
lsusb | grep 0955:7523
```

执行备份：

```bash
cd Linux_for_Tegra
sudo ./tools/backup_restore/l4t_backup_restore.sh \
  -e nvme0n1 -b -c jetson-orin-nano-devkit-nvme
```

:::warning
源机是 DevKit，第一次备份必须使用 `jetson-orin-nano-devkit-nvme`，不能使用 Super board-name。
:::

验收并保存快照：

```bash
ls -lah tools/backup_restore/images/
head -5 tools/backup_restore/images/nvpartitionmap.txt
sudo cp -a tools/backup_restore/images \
  /home/$USER/backup_images_dk_sku0005
```

备份里通常包含 DevKit 的 `QSPI0.img`。后续只复用 APP，不能把这个 QSPI 放进 Super Bundle。

## 3. 可选：生成 DevKit 同载板 BSP

如果已经有 `mfi_jetson-orin-nano-devkit-nvme`，可跳过本节。

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --use-backup-image --no-flash --network usb0 --massflash 5 \
  jetson-orin-nano-devkit-nvme internal
```

这个包只能用于 DevKit。它的 APP 可作为后续 Super Bundle 的数据源，但它的 QSPI 不能复用。

## 4. 理解 QSPI 陷阱

`--use-backup-image` 会同时复用源机的 APP 和 `QSPI0.img`。因此，即使把命令末尾的 board-name 改成 Super，也可能把 DevKit QSPI 装进新包。

正确做法是：

```text
DevKit APP  ──► external/
Super conf  ──► 重新生成 internal/QSPI
目标盘容量 ──► 生成匹配的 GPT
               │
               └──► mfi_recomputer-orin-super-j401
```

`--flash-only` 只刷预生成镜像，不会根据修改后的 `.conf` 重新计算 QSPI。

## 5. 生成 Super QSPI

设备处于 `0955:7523 APX` 时执行。先创建继承 Super 板级配置、但明确以
NVMe 为根设备的别名：

```bash
cd Linux_for_Tegra
cat > recomputer-orin-super-j401-nvme.conf <<'EOF'
source "${LDK_DIR}/recomputer-orin-super-j401.conf";
EOF
```

参数必须与模块一致；以下为本例 SKU 0005：

```bash
cd Linux_for_Tegra
sudo BOARDID=3767 BOARDSKU=0005 FAB=300 BOARDREV=V.2 \
  CHIP_SKU=00:00:00:D5 \
  ./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" \
  --no-flash --massflash 5 --showlogs --network usb0 \
  recomputer-orin-super-j401-nvme external
```

:::danger
不要在本场景中以 `internal` 作为最后的 rootdev。实测这样生成的 MB2 会把
secondary storage 配成 `SDCARD instance: 0`，没有 SD 卡时启动停在 `Busy Spin`。
:::

日志应包含：

```text
recomputer-super-orin-j401-pinmux-p3767-hdmi-a03.dtsi
tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo
```

确认 Super mfi 的 `internal/flash.idx` 存在，并且没有源 DevKit 的单体 `QSPI0.img`：

```bash
test -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/flash.idx
test ! -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/QSPI0.img
```

:::info
本指南实测生成的 Super QSPI internal（SKU 0005 / L4T 36.4.3）已上传，可直接下载使用：

```bash
wget -O super_j401_qspi_internal_save.tar.gz \
  https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-super/super_j401_qspi_internal_save.tar.gz
mkdir -p Linux_for_Tegra/tools/kernel_flash/images/internal
tar xpf super_j401_qspi_internal_save.tar.gz -C Linux_for_Tegra/tools/kernel_flash/images/internal/
```

下载后放入 `Linux_for_Tegra/tools/kernel_flash/images/internal/` 即可跳过本节 QSPI 生成步骤。

**复用前提**：目标板为 reComputer Super、模块 SKU 0005、L4T 36.4.3。若任一条件不符，必须按本节重新生成。
:::

## 6. 组装 APP 与目标磁盘布局

:::danger
不要无条件复制 DevKit mfi 的整个 `external/`。

如果 DevKit 源盘为 256GB，而 Super 目标盘为 128GB，源 GPT 会在 `partprobe` 阶段报 “GPT is larger than device storage”。
:::

本实测目标盘为 `128035676160` bytes。使用 `flash_l4t_t234_nvme.xml` 生成的标准 external 布局总长 `102400000000` bytes，然后只替换 APP 内容：

```bash
cd Linux_for_Tegra

# 使用 Super/当前工作区生成的标准 external：
sudo cp -a tools/kernel_flash/images/external/. \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/

# 只复用 DevKit APP 内容：
sudo cp -a \
  mfi_jetson-orin-nano-devkit-nvme/tools/kernel_flash/images/external/nvme0n1p1_bak.img* \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/

sudo tee \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/flash.cfg \
  >/dev/null <<'EOF'
APP_ext=nvme0n1p1_bak.img
external_device=nvme0n1p1
EOF
```

验收：

```bash
test -f mfi_recomputer-orin-super-j401/recomputer-orin-super-j401.conf
test -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/nvme0n1p1_bak.img
test ! -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/QSPI0.img
```

必须同时满足：

- `internal/` 是新生成的 Super QSPI；
- `external/` 的 GPT 小于目标物理盘；
- `APP_ext` 指向 DevKit 的 `nvme0n1p1_bak.img`。

### 保证首次启动无需现场修复

打包前还必须检查三个一致性条件：

1. `boot.img` 的 `root=PARTUUID=...` 与 external GPT 中 APP 分区的唯一 GUID 相同；
2. DevKit APP `/etc/fstab` 的 `/boot/efi` UUID 与新 `esp.img` 的 FAT UUID 相同；
3. 若克隆的 DevKit 内核在 Super LAN7430 上触发 `lan743x` Oops，在 APP 中预置：

```text
/etc/modprobe.d/blacklist-lan743x-super-hybrid.conf
```

```conf
blacklist lan743x
install lan743x /bin/false
```

前两项不一致分别会导致根分区挂载失败或进入 maintenance mode。不要把在
initrd 中用 `sgdisk` 改 PARTUUID 当成最终制作步骤；应重新成对生成 GPT 和
`boot.img`，并在归档中预修复 APP。

## 7. 打包

```bash
cd Linux_for_Tegra
sudo tar czf mfi_recomputer-orin-super-j401.tar.gz \
  mfi_recomputer-orin-super-j401
sudo gzip -t mfi_recomputer-orin-super-j401.tar.gz
sha256sum mfi_recomputer-orin-super-j401.tar.gz \
  > mfi_recomputer-orin-super-j401.tar.gz.sha256
```

本次最终一致版本为 `12,822,619,478` bytes，`gzip -t` 通过，SHA-256：

```text
fb1d502d9e869d67226eaf71bbe2462fab4e2f1dacf8a6e7fa59057c66a2e845
```

## 8. 刷写到 reComputer Super

让目标 Super 进入 Force Recovery：

```bash
lsusb | grep 0955:7523
```

如果当前主机保留了解压目录，直接执行：

```bash
cd Linux_for_Tegra/mfi_recomputer-orin-super-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

只有在另一台主机仅持有 `.tar.gz` 时才先解压。

正常日志包括：

- `RCM-boot started` 和 `SSH ready`；
- `Starting to flash to qspi`；
- 恢复 `nvme0n1p1_bak.img`；
- `Successfully flash the qspi`；
- `Successfully flash the external device`；
- `Flashing success` 和 `Flash is successful`。

本实测刷写约耗时 10 分钟。

### NFS Permission denied

如果刷到 recovery 或 APP 时出现 `/mnt/external/...: Permission denied`，检查 mfi 路径的每一级父目录是否允许 NFS 客户端穿越。

例如用户主目录权限为 `750` 时，可在刷写期间临时改为 `751`，结束后立即恢复：

```bash
sudo chmod 751 /home/$USER
# 重新进入 APX 并刷写
sudo chmod 750 /home/$USER
```

`751` 只增加目录穿越权限，不允许其他用户列目录。不要改成 `777`。

## 9. 刷后验收

刷写成功后释放 Recovery 按键或跳帽，再断电重启。若 `lsusb` 仍显示 `0955:7523 APX`，说明设备仍处于 Recovery，尚未进入系统。

正常启动后执行：

```bash
cat /proc/device-tree/model
ls /boot/kernel_tegra234*.dtb
ls /boot/*.dtbo | grep -E 'hdmi|imx219-quad-seeed' || true

xrandr 2>/dev/null | head -20
lsusb | head
ip -br link
sudo dmesg | grep -iE 'dtb|overlay|hdmi|tegra234' | tail -30

nvcc --version
```

对 SKU 0005，`model` 仍可能显示 `Developer Kit Super`，主 DTB 也可能仍为 `*-0005-nv-super.dtb`。这不表示刷错包；应以 HDMI、USB、网络、摄像头和原 DevKit 用户环境是否可用为准。

Super 应重点验证四路 CSI 所需的 quad camera 配置。`/boot` 中没有显示 `imx219-quad-seeed.dtbo` 文件名，也不能单独判定失败，因为 overlay 可能已由 QSPI/UEFI 路径应用。

本次实测结果：

- 正常启动到 Ubuntu 登录界面，`display-manager` 为 active；
- HDMI 显示、USB 键盘/鼠标、Bluetooth 和 Wi-Fi 正常；
- DevKit APP 与 CUDA 12.6 保留；
- quad camera overlay 与四组 IMX219/I2C 配置节点存在；


:::warning
本例克隆的 DevKit RT 内核在 Super 的 LAN7430 上加载 `lan743x` 时发生 kernel
Oops。最终 Hybrid BSP 默认禁用 `lan743x`，因此板载有线网暂不可用，Wi-Fi
不受影响。这是源 APP/内核的驱动兼容性限制，不是 Super QSPI 或 pinmux 失败。
生产使用有线网前应移植/升级兼容驱动并完成压力测试。
:::

## 10. 回退方案

若 Hybrid BSP 启动或外设异常：

1. 刷写官方 `recomputer-orin-super-j401` BSP；
2. 从 DevKit 备份中迁移 `/home`；
3. 按需重新安装 `/usr`、`/etc` 或 Docker 相关系统软件。

这种方案不是整盘克隆，但板级固件风险最低。

## FAQ

**Q：已有 mfi 目录和 tar.gz，还要解压吗？**  
A：不要。直接进入现有目录执行 `--flash-only`。

**Q：可以把 Classic Hybrid 包改名后刷到 Super 吗？**  
A：不可以。两者 pinmux 和摄像头 overlay 不同，必须重新生成 Super QSPI。

**Q：为什么不能直接使用 `--use-backup-image`？**  
A：它可能把 DevKit 的 `QSPI0.img` 一并复用。Hybrid 只应复用 APP。

**Q：源盘和目标盘容量不同怎么办？**  
A：GPT 必须按目标盘生成，只替换 APP 数据。还需确认 APP 解压后的实际占用小于新 APP 分区。

**Q：只想保留 `/home`？**  
A：使用官方 Super BSP，再按迁移文档恢复 `/home`，更简单稳妥。

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
