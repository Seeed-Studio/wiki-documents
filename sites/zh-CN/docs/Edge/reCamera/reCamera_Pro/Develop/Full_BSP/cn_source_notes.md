---
description: 针对 v1.0.10 源码快照的静态审查发现项及验证状态。
title: 源码审查与已知问题
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Reference
  - Documentation
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_source_notes
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/cn/recamera_pro_sdk_source_notes/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 源码审查与已知问题

本页记录在对 SDK v1.0.10 进行静态审查时发现的、可能影响构建或使用的条目。除非明确标注为已在硬件上验证，否则这些发现均基于源码检查，未必已经在设备上复现。

| 项目 | 源码位置 | 已确认发现 | 影响与建议操作 |
| --- | --- | --- | --- |
| 应用 `install_to_userdata` 打包路径 | `project/build.sh`, `__PACKAGE_USERDATA()` | 应用目录检查使用的是 `userdata_app`，但拷贝命令仍然从 media 路径读取。已在源码中确认。 | 期望出现在 userdata 镜像中的文件可能不会从应用输出目录中被拷贝。如果需要此功能，请检查最终镜像或设备内容；或者在启动过程中创建/拷贝这些文件。 |
| `rkflash.sh update` 分支 | `project/rkflash.sh` | 对应分支被注释掉。已在源码中确认。 | 不要假定 `./rkflash.sh update` 会执行更新。请使用 [Flashing and Boot](/cn/recamera_pro_bsp_flash_boot/) 中列出的受支持命令。 |
| `rkflash.sh all` 中的 Env 镜像 | `project/rkflash.sh` | `all` 分支未包含 `env.img`。已在源码中确认。 | 在更改分区表或启动环境后，请单独确认 env 镜像已被烧录且生效。 |
| `save` 归档目录的大小写 | `project/build.sh`, `build_save()`; 根目录 `quick_start_cn.md` | `build_save()` 将 `Image/...` 路径转换为大写；实际目录为 `IMAGE/...`。快速入门指南中也使用了 `IMAGE/`。已在源码中确认。 | 请以当前脚本生成的目录名为准。Wiki 早期对 `Image/` 的引用是不正确的。 |
| `sdkinfo` 中的 SDK Version | `project/build.sh`, `build_get_sdk_version()` | 版本来自 `.repo/manifest.xml`。此源码快照没有 `.repo/`，因此构建可能会写入 `NONE`。已在源码中确认。 | 请结合 `/etc/ota_version`、BoardConfig 名称以及构建归档一并检查。不要仅凭 `sdkinfo` 中的 SDK Version 字段来识别发行版本。 |
| RTC 注释与 UTC 选项 | `project/cfg/BoardConfig_Recamera2/overlay-buildroot-hwclock/etc/init.d/S20hwclock` | 脚本注释与 `hwclock --utc` 似乎指定了不同的时间约定。已在源码中确认；时区行为需要在硬件上验证。 | 在更改时间处理逻辑之前，请验证时区、RTC 约定以及重启后的实际时间。 |
| `recamera_services` 的默认交叉编译目标 | `project/app/recamera_services/Makefile` | 默认目标似乎为 armv7；顶层构建是否覆盖该设置，需要结合构建入口进一步检查。静态发现；最终二进制尚未验证。 | 手动构建后，请对输出运行 `file`，确认其目标为 aarch64。 |
| Release Notes 文件名与自动发现 | `project/cfg/BoardConfig_Recamera2/` 以及 `project/build.sh` 中的 `build_info()` | 当前 Release Notes 文件名与脚本搜索的命名模式不匹配；文档本身也较为简略。已在源码中确认。 | 在发布前，请手动确认归档中包含正确的变更日志。不要依赖自动提升机制。 |
| `recamera_onvif` 与 `recamera_utils` 的 README | 各自的应用目录 | README 文件是通用模板，未描述本项目的构建或使用方式。已通过阅读文件确认。 | 如需了解组件行为，请查看 Makefile、源码及调用方。不要将模板 README 视为项目文档。 |

## 如何理解这些发现

- **已在源码中确认：** 实现或配置可在引用的源码中直接看到；但可能尚未在设备上实际运行验证。
- **需要硬件验证：** 结果依赖硬件、固件、运行时配置或构建输出，必须在相关设备上复现。
- 路径和行为均针对本 Wiki 涵盖的 v1.0.10 源码快照。升级 SDK 后请重新检查；不要将这些发现视为跨版本的保证。
- 视需要在 SDK 源码中修复这些问题并重新构建。本页仅记录当前行为和影响，不直接给出修复实现。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>