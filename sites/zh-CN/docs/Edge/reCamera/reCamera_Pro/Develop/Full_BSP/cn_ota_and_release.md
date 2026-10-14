---
description: 构建 OTA 和出厂镜像，准备发布归档，并验证发布版本记录。
title: OTA 和固件发布
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_ota_release
sku: 10003420
sidebar_position: 11
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_ota_release/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# OTA 和固件发布

## 在哪里查看版本

| 位置 | 值 | 说明 |
| --- | --- | --- |
| 板级配置 `RK_OTA_VERSION` | `V1.0.10` | 在打包时写入 rootfs 中的 `/etc/ota_version` |
| 归档名称 | `recamera-pro-sdk-v1.0.10` | 分发包名称 |
| 设备 `/etc/ota_version` | 同上 | 运行时上报的版本 |
| 设备 `/bin/sdkinfo` | Build Time / SDK Version / BoardConfig | 在打包过程中由 `build.sh` 生成 |
| `project/cfg/BoardConfig_Recamera2/RECAMERA2-IPC-RELEASE-NOTES.md` | 变更日志 | 当前仅包含 `v0.0.1 - init`；**请保持其为最新** |

在设备上检查版本：

```bash
# cat /etc/ota_version
# /bin/sdkinfo
```

`/bin/sdkinfo` 输出如下所示：

```sh
#!/bin/sh
echo Build Time:  2026-08-28-09:28:00
echo SDK Version: NONE
echo SDK BoardConfig: BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk
```

> 当前的源码快照不包含 `.repo/`，因此 `sdkinfo` 中的 SDK Version 可能显示为 `NONE`。基于源码的说明请参见 [源码审查与已知问题](/cn/recamera_pro_sdk_source_notes/)。请同时使用 `/etc/ota_version` 和构建记录来验证设备版本。

对于每次发布，**同时更新** 板级配置中的 `RK_OTA_VERSION` 和 `RECAMERA2-IPC-RELEASE-NOTES.md`。

## OTA 机制

### 相关配置

```bash
export RK_ENABLE_RECOVERY=y
export RK_MISC=recovery-misc.img
export RK_OTA_RESOURCE="boot.img rootfs.img"
export RK_ENABLE_OTA=y          # Comment: Used for set/get factory reset flag
```

因此 OTA 只更新 **`boot` 和 `rootfs` 分区**。它不会更新 U-Boot、idblock、env 或 userdata。这是有意为之：引导加载程序和分区表更新风险更高，而用户数据必须保留。

### 创建 OTA 包

```bash
./build.sh all        # First create boot.img and rootfs.img under output/image/
./build.sh ota
ls -lh output/image/update_ota.tar
```

### 包内容与更新脚本

`build_ota()` 会生成 `RK_OTA_update.sh`，并使用 `tar -cvhf`（注意 `-h` 会跟随符号链接）将其与镜像一起打包到 `update_ota.tar` 中。脚本的 eMMC 分支如下：

```sh
#!/bin/sh
set -e
COMMON_DIR=`dirname $(realpath $0)`
TOP_DIR=$(realpath $COMMON_DIR/../..)
cd $TOP_DIR
echo "Start to write partitions"
for image in $(ls /dev/block/by-name)
do
    if [ -f $COMMON_DIR/${image}.img ]; then
        echo "Writing $image..."
        dd if=$COMMON_DIR/${image}.img of=/dev/block/by-name/$image || exit 1
    fi
done
echo "Erase misc partition"
dd if=/dev/zero of=/dev/block/by-name/misc bs=32 count=1 seek=512 || exit 2
```

要点：

- 脚本会遍历 `/dev/block/by-name/` 下的每个分区，**如果归档中包含同名镜像，就写入该分区**。将镜像添加到 `RK_OTA_RESOURCE` 即可将其包含进 OTA 包；脚本本身无需修改。
- 它会在最后清除 misc 分区中的标志（偏移为 512 个 32 字节块），这样下次启动就不会再次进入 recovery。
- 当 `RK_ENABLE_RECOVERY=y` 时，脚本通过 `-C $OTA_SCRIPT_PATH RK_OTA_update.sh` 被打包。
- NAND 介质使用不同的分支，采用 `flash_eraseall` + `nandwrite -p`。本板使用 eMMC，因此该分支不适用。

### OTA 流程（概念）

```text
Application downloads update_ota.tar → extracts it to a directory
        ↓
Write the recovery flag to the misc partition (RK_ENABLE_OTA provides set/get factory-reset flag interfaces)
        ↓
Reboot → U-Boot reads misc → enters recovery
        ↓
Recovery runs RK_OTA_update.sh → writes boot/rootfs with dd → clears the misc flag
        ↓
Reboot into the new system → verify with cat /etc/ota_version
```

使用 `./build.sh recovery` 单独构建 recovery 镜像（`RK_KERNEL_RECOVERY_DEFCONFIG=rv1126b_ipc_defconfig` 加上 `rv1126b-recovery.config` 片段）；ramdisk 内容位于 `output/out/ramdisk/`。

> 触发 recovery 和 OTA 的**上层应用代码**位于 `recamera_ipc` / `recamera_services` 中（Web UI 的 “Firmware Update” 和 “Factory Reset” 操作）。本页仅涵盖 SDK 侧的打包。具体的 API 调用仍需在设备上验证。

### 恢复出厂设置

`RK_ENABLE_OTA=y` 的注释说明它提供设置/获取恢复出厂标志的函数。实际操作中，恢复出厂会向 misc 写入一个标志，并清除或重建 `userdata`。用户数据位于 `/userdata` 下，包括 `/userdata/config/rkipc.ini`、`/userdata/config/system/login_lock.json` 和 `eth0_dns_mode`；恢复出厂会重置这些设置。

## 完整固件镜像

```bash
./build.sh updateimg     # Package all partition images as output/image/update.img
./build.sh unpackimg     # Extract update.img
```

将 `update.img` 与以下命令一起使用：

```bash
sudo tools/linux/Linux_Upgrade_Tool/upgrade_tool uf output/image/update.img
```

> `./rkflash.sh update` **无法工作**，因为该分支在脚本中被注释掉了。请直接使用 `upgrade_tool uf`。

## 出厂镜像

```bash
./build.sh factory
ls output/image/factory/
```

这在内部会调用 `tools/linux/SocToolKit/bin/linux/programmer_image_tool -i output/image/update.img -o output/image/factory/ -t emmc`。镜像类型由 `RK_BOOT_MEDIUM` 决定。NAND 介质使用 `-b <blockKB> -p <pageKB> [-s <oobB>]`；通过 `RK_NAND_BLOCK_SIZE`、`RK_NAND_PAGE_SIZE` 和 `RK_NAND_OOB_SIZE` 覆盖默认值（0x20000 / 2048 / 128）。

## 发布归档：`save` / `allsave`

```bash
./build.sh save          # Create an archive
./build.sh save xml      # Generate only the repo manifest XML, then exit
./build.sh allsave       # all + save; default when ./build.sh is run without arguments
```

`build_save()` 构造归档路径并将其转换为**大写**：

```text
IMAGE/<application-scenario>_<boot-medium>_<power-scheme>_<hardware-version>_<YYYYMMDD.HHMM>_RELEASE_TEST/
```

对于本板级配置，路径如下所示：

```text
IMAGE/IPC_64BIT_EMMC_RK801_RV1126B_V1_20260828.0928_RELEASE_TEST/
├── IMAGES/                        # All contents of output/image/
├── PATCHES/                       # Patches and repo information (__GET_REPO_INFO)
├── DEBUG_FILES/
│   ├── kernel/vmlinux.tar.bz2     # Unstripped kernel for crash analysis
│   ├── media_out.tar.bz2          # Complete media outputs
│   ├── app_out.tar                # Complete application outputs
│   └── uboot/uboot.debug.tar.bz2
└── build_info.txt                 # BUILD-ID: <hostname>:<user> + build_info output
```

> `build_save()` 会将归档路径转换为大写，因此目录名为 **`IMAGE/`**，如 SDK 快速入门指南中所示。
>
> 后缀始终为 `_RELEASE_TEST`，即使是实际的量产发布也是如此。要区分量产构建和测试构建，请重命名归档或在 `build_info.txt` 中记录状态。

`DEBUG_FILES` 对于排查现场问题至关重要。**请为每次对外发布保留归档**，尤其是 `vmlinux`，它是解析内核 panic 调用栈所必需的。

## 记录构建信息和配置

`./build.sh info` 会输出：

- 当前 `BOARD_CONFIG` 的真实路径
- 所有非空的 `RK_*` 环境变量，按排序输出
- sysdrv、media 和 app 组件 SDK 的 `make info` 输出
- 电源域检查结果（`build_check_power_domain`）

将该输出附加到发布记录中，以避免日后猜测固件是如何构建的。

```bash
./build.sh info > release_info_$(date +%Y%m%d).txt 2>&1
```

`build_info()` 还会尝试在该文件存在时，将 `project/cfg/BoardConfig_Recamera2/RK-RELEASE-NOTES-Recamera2.txt` 链接或复制到 SDK 根目录。当前文件名为 `RECAMERA2-IPC-RELEASE-NOTES.md`，这与脚本搜索的 `RK-RELEASE-NOTES-<board-name>.txt` 模式**不匹配**，因此不会被自动提升。根目录下的 `RECAMERA2-IPC-RELEASE-NOTES.md` 是指向它的符号链接。

## 发布检查清单

### 构建前

- [ ] 将 `git` / 内部仓库同步到目标标签，并确认工作树干净。
- [ ] 更新板级配置中的 `RK_OTA_VERSION`。
- [ ] 在 `RECAMERA2-IPC-RELEASE-NOTES.md` 中更新本次发布的变更（当前仅包含 `v0.0.1 - init`；请持续维护）。
- [ ] 运行 `./build.sh lunch` 并选择 `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`。
- [ ] 运行 `./setup_build_env.sh --check`；确认没有缺失工具。

### 构建

- [ ] 在切换版本或板级配置时运行 `./build.sh clean`。
- [ ] 运行 `./build.sh allsave` 并保留构建日志。
- [ ] 验证 `output/image/` 下的 `boot.img` 小于 11 M，`rootfs.img` 小于 3 G。
- [ ] 确认已生成 `IMAGE/.../build_info.txt`。

### 验证

- [ ] 使用 `sudo ./rkflash.sh all` 刷写一块空板，并确认其能启动到横幅界面。
- [ ] 确认 `/bin/sdkinfo` 中的 BoardConfig 名称，并验证 `cat /etc/ota_version` 与新版本一致。
- [ ] 视频：确认 Web UI 能显示视频，且 go2rtc WebRTC 在 `:8555` 上可以接收码流。
- [ ] AI 推理：确认 NPU 模型能加载，且 `recamera_notify` 能接收并转发事件。
- [ ] 音频：验证 `ai_debug` 能录制四个通道且扬声器能输出音频。
- [ ] OTA：使用 `update_ota.tar` 从上一版本升级，并确认 `/userdata` 配置被保留。
- [ ] 恢复出厂：确认设备恢复到默认配置。
- [ ] 稳定性：在 `media/samples/example/test/` 和 `recamera_utils/stress_test/` 下运行相关压力测试。
- [ ] 看门狗：确认长时间运行的测试不会触发复位（`S15watchdog`，30 秒超时）。

### 归档

- [ ] 将整个 `IMAGE/` 目录（包括 `DEBUG_FILES/`）上传到内部制品仓库。
- [ ] 一并记录 `update.img`、`update_ota.tar`、版本号和 SHA-256。
- [ ] 将 `./build.sh info` 的输出附加到发布记录中。

## 命令速查

| 命令 | 输出 |
| --- | --- |
| `./build.sh firmware` | `output/image/` 下的分区镜像 |
| `./build.sh updateimg` | `output/image/update.img` |
| `./build.sh ota` | `output/image/update_ota.tar` |
| `./build.sh factory` | `output/image/factory/` |
| `./build.sh recovery` | `output/image/recovery.img` |
| `./build.sh save` | `IMAGE/<...>_RELEASE_TEST/` |
| `./build.sh info` | 打印当前配置；不写入文件 |
| `./build.sh unpackimg` | 解压 `update.img` |

## 相关文档

- `docs/en/Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf`：SDK 申请和同步（向 Rockchip 请求 SDK 更新）
- `docs/en/Rockchip_User_Guide_Bug_System_EN.pdf`：向 Rockchip 提交问题
- `docs/zh/ipc/Rockchip_RV1126B_Linux_IPC_SDK_Release_V1.0.0_20250620_CN.pdf`：上游 SDK 发行说明
- `project/cfg/BoardConfig_IPC/RK-RELEASE-NOTES-IPC.txt`：Rockchip IPC 参考板的发行说明格式；用作维护 `RECAMERA2-IPC-RELEASE-NOTES.md` 的模板

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>