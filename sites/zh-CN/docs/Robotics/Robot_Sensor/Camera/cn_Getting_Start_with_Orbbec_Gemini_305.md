---
description: 了解 Orbbec Gemini 305 3D 相机的规格、连接方式，以及使用 Orbbec Viewer 查看深度和彩色图像的步骤。
title: Orbbec Gemini 305 3D 相机
keywords:
  - Orbbec
  - Gemini 305
  - 深度相机
  - 立体视觉
  - 机器人视觉
image: https://new-orbbec3d-s3.s3.amazonaws.com/wp-content/uploads/2026/01/05024657/20260105Rectangle-431.webp
slug: /orbbec_gemini305
last_update:
  date: 11/19/2026
  author: Yang-Ci
---

<div align="center">
  <img src="https://new-orbbec3d-s3.s3.amazonaws.com/wp-content/uploads/2026/01/05024657/20260105Rectangle-431.webp" alt="Orbbec Gemini 305 3D 相机" width={400} />
</div>

Orbbec Gemini 305 是一款面向近距离机器人视觉的双目深度相机，可用于机械臂腕部安装、物体识别和抓取等场景。本文介绍 USB 版本；Gemini 305g 的接口、电源和尺寸不同，请参阅 [Orbbec 官方资料](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation)。

## 特性

- **近距离深度感知：** 工作范围为 4–100 cm+，推荐范围为 7–50 cm。
- **立体视觉：** 使用双目立体视觉获取深度数据，同时提供彩色图像。
- **紧凑机身：** 尺寸为 42 × 42 × 23 mm，适合空间受限的安装场景。
- **同步与触发：** 支持多相机同步以及软件和硬件触发。
- **USB 连接：** 通过 USB Type-C 连接供电和传输数据，推荐使用 USB 3.0。

## 规格参数

以下参数适用于 Gemini 305 USB 版本，具体测试条件和最新信息请参阅 [Orbbec 产品页面](https://www.orbbec.com/gemini-305/)。

| 类别 | 规格 | 参数 |
| --- | --- | --- |
| 基本参数 | 工作环境 | 室内和室外 |
| | 工作范围 | 4–100 cm+ |
| | 推荐范围 | 7–50 cm |
| | 深度技术 / 基线 | 立体视觉 / 18 mm |
| 深度参数 | 空间精度 | ≤1%（1280 × 800、距离 50 cm、90% × 90% ROI） |
| | 深度视场角 | 水平 88° × 垂直 65° ±3°（1280 × 800、距离 20 cm） |
| | 分辨率和帧率 | 最高 1280 × 800 @ 30 fps；848 × 480 @ 60 fps |
| 彩色参数 | 彩色视场角 | 水平 94° × 垂直 68° ±3° |
| | 分辨率和帧率 | 最高 1280 × 800 @ 60 fps |
| | 传感器 | 双目彩色，全局快门 |
| 电气参数 | 电源 | 直流 5 V，≥700 mA |
| | 平均功耗 | 小于 2 W |
| 物理参数 | 尺寸 / 重量 | 42 × 42 × 23 mm / 68 g ±10 g |
| | 接口 | USB Type-C，支持 USB 3.0 和 USB 2.0 |
| | 防护等级 | IP54；需连接并固定符合防护要求的 USB 线缆 |
| | 安装 | 底部：1 个 1/4-20 UNC 螺孔、2 个 M3 螺孔；背部：2 个 M3 螺孔 |

## 硬件概览

相机正面有两个镜头，侧面有 USB Type-C 接口。安装到机械臂或支架前，请结合实际安装方向检查相机视野、线缆走向和运动空间。安装孔位和尺寸图可在 [Gemini 305 官方文档](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation)中查看。

下图来自 [Orbbec 官方产品页面](https://store.orbbec.com/products/gemini-305)，分别展示 Gemini 305 的正面、USB Type-C 接口以及底部和背部安装孔。

<div align="center">
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_01.png?v=1783414201&amp;width=1600" alt="Gemini 305 正面，显示两个镜头" width={360} />
  <p>正面：双镜头</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_07.png?v=1783414277&amp;width=1600" alt="Gemini 305 侧面的 USB Type-C 接口" width={360} />
  <p>侧面：USB Type-C 接口</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_08.png?v=1783414288&amp;width=1600" alt="Gemini 305 底部的 1/4-20 UNC 和 M3 安装孔" width={360} />
  <p>底部安装孔</p>
  <img src="https://store.orbbec.com/cdn/shop/files/Gemini_305_09.png?v=1783414301&amp;width=1600" alt="Gemini 305 背部的两个 M3 安装孔" width={360} />
  <p>背部安装孔</p>
</div>

## 快速入门

### 准备与连接

1. 准备 Gemini 305、可传输数据的 USB Type-C 线缆，以及满足相机供电要求的主机。为获得更高的数据带宽，推荐使用 USB 3.0 接口和线缆。
2. 根据使用场景固定相机，将 USB Type-C 线缆连接到相机和主机。机械臂运动时，确保线缆有足够余量，且不会被拉扯或夹住。

### 安装 Orbbec Viewer

1. 打开 [Orbbec SDK v2 发布页面](https://github.com/orbbec/OrbbecSDK_v2/releases)，选择支持 Gemini 305 的版本，并按主机系统和架构下载对应的安装包或 Orbbec Viewer 软件包。Jetson 通常选择 Linux ARM64；PC 请根据系统选择 x86-64 或 Windows 软件包。
2. 按发布页面的说明安装或解压，并启动 Orbbec Viewer。具体文件名和操作可能随版本变化；如果使用 Linux 软件包，请按该版本的说明配置 USB 权限。

:::note
Gemini 305 使用 **Orbbec SDK v2**；SDK v1 不支持此型号。Viewer 的界面和可用功能可能因软件版本、固件及设备配置而异。有关设备权限和安装方法，请参阅 [SDK v2 官方说明](https://github.com/orbbec/OrbbecSDK_v2)。
:::

### 预览图像与点云

1. 在 Orbbec Viewer 的设备列表中确认 Gemini 305 已被识别，并选中该设备。
2. 打开深度流（Depth）和颜色流（Color），选择设备提供的分辨率与帧率，检查两个预览窗口是否显示画面。
3. 将物体放在推荐范围内，观察深度画面随距离变化。需要三维预览时，可在 Viewer 中启用点云；需要对齐彩色与深度图像时，可查看 Viewer 中的深度到彩色配准（D2C）设置。
4. 操作完成后关闭图像流，再断开相机。各功能的详细操作请参阅 [Orbbec Viewer 指南](https://github.com/orbbec/OrbbecSDK_v2/blob/main/docs/tutorial/orbbecviewer.md)。

下面两张图片来自 Orbbec 的 Viewer 2.6.2 官方指南，使用的是 **Gemini 335Lg**，仅用于说明界面位置，并非 Gemini 305 的实测画面。305 没有内置 IMU，因此不要以示例图中的 IMU 面板判断 305 的功能；具体界面和可用选项以实际设备和软件版本为准。

<div align="center">
  <img src="https://raw.githubusercontent.com/orbbec/OrbbecSDK_v2/f5d59930ccb9a189f200e58fba4e2ae42664792d/docs/tutorial/images/image1.jpg" alt="Orbbec Viewer 示例界面，显示设备列表、图像流控制和图像预览区域；示例设备为 Gemini 335Lg" width={800} />
  <p>Viewer 示例：顶部切换图像流，左侧配置参数，右侧预览图像</p>
  <img src="https://raw.githubusercontent.com/orbbec/OrbbecSDK_v2/f5d59930ccb9a189f200e58fba4e2ae42664792d/docs/tutorial/images/image23.jpg" alt="Orbbec Viewer 示例，左侧显示点云，右侧显示深度与彩色图像配准；示例设备为 Gemini 335Lg" width={800} />
  <p>Viewer 示例：点云与深度到彩色配准预览</p>
</div>

### 常见问题

- **设备未显示：** 重新连接线缆，确认使用的是数据线而非仅供电线，并检查主机供电。Linux 用户还应按 SDK v2 的说明检查 USB 权限。
- **图像流无法启动或不稳定：** 先单独开启深度流或彩色流，再尝试设备支持的其他分辨率和帧率；检查 USB 接口、线缆、固件与 SDK 版本是否匹配。
- **深度数据不理想：** 将目标移入推荐距离，检查镜头是否被遮挡，并根据实际场景调整 Viewer 中设备支持的设置。

## ROS 2

如需在 ROS 2 中使用相机，请按照 [Orbbec SDK ROS 2 Wrapper v2 安装指南](https://orbbec.github.io/OrbbecSDK_ROS2/)配置工作空间和设备权限。Gemini 305 使用 `v2-main` 分支；确认已安装支持该型号的版本并 source 工作空间后，可使用官方提供的启动文件：

```bash
ros2 launch orbbec_camera gemini_301_series.launch.py
```

启动后可在另一个已配置 ROS 2 环境的终端使用 `ros2 topic list` 查看话题。话题和可用参数以安装版本与启动配置为准。以上步骤依据官方文档整理，尚未在本页面进行 Gemini 305 实机验证。

## 资源

- [Gemini 305 官方文档与数据手册](https://doc.orbbec.com/documentation/Gemini%20305%20Documentation)
- [Orbbec SDK v2 与 Viewer 下载](https://github.com/orbbec/OrbbecSDK_v2/releases)
- [Orbbec Viewer 使用指南](https://github.com/orbbec/OrbbecSDK_v2/blob/main/docs/tutorial/orbbecviewer.md)
- [Orbbec SDK ROS 2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2)

## 相关资源

- [Orbbec Gemini 336 3D 相机](/cn/orbbec_gemini336/)
- [ROS 上的 Orbbec 深度相机](/cn/orbbec_depth_camera_on_ros/)

## 技术支持与产品讨论

如需获取帮助，可访问 [Seeed 论坛](https://forum.seeedstudio.com/)或[联系 Seeed](https://www.seeedstudio.com/contacts)。
