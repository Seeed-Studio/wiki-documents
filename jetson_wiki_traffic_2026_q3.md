# Jetson Wiki 流量统计报告（2026 Q3）

> 统计范围：`sites/en/docs/Edge/NVIDIA_Jetson` 目录下，`createdAt` 位于 2026-07-01 至 2026-09-30 的 36 篇 Wiki。\
> 流量周期：2026-07-01 至 2026-09-30（含首尾日期）。\
> 数据来源：Seeed 内部 GA4 数据仪表盘。\
> 导出日期：2026-10-10（Asia/Shanghai）。

## 1. 结论

统计后台的普通逐页接口存在结果数量上限。36 篇目标页面中，只有 3 篇同时出现在 `101 daysAgo → today` 和 `9 daysAgo → today` 两个累计区间，因此只有这 3 篇能够通过区间相减得到精确的 Q3 数据。

已确认的 Q3 流量下限为：

| 指标 | 已确认数值 |
| --- | ---: |
| PV | **1,326** |
| Sessions | **1,200** |
| New users | **354** |

这些数值是 36 篇页面的**已确认下限**，不是全部页面的最终总量。未返回的页面不能按 0 计算。

## 2. 已确认的 Q3 逐页数据

计算方式：

```text
Q3 = 2026-07-01 至 2026-10-10累计值 - 2026-10-01 至 2026-10-10累计值
```

后台将 `days=0` 实际解释为“今天”，因此这里使用 `days=101` 和 `days=9` 两个包含首尾日期的累计区间。

| 页面 | PV | Sessions | New users |
| --- | ---: | ---: | ---: |
| [JetPack 7.2 Resource Hub](https://wiki.seeedstudio.com/jetpack_7_2_resource_hub/) | 748 | 666 | 145 |
| [Flash and OTA Upgrade to JetPack 7.2](https://wiki.seeedstudio.com/flash_and_ota_jetpack_7.2/) | 317 | 289 | 109 |
| [Microduck RL on Jetson](https://wiki.seeedstudio.com/ai_robotics_microduck_rl_on_jetson/) | 261 | 245 | 100 |
| **合计** | **1,326** | **1,200** | **354** |

### 分类下限

| 分类 | PV | Sessions | New users | 说明 |
| --- | ---: | ---: | ---: | --- |
| JetPack 7.2 | 1,065 | 955 | 254 | 仅包含后台成功返回的 2 篇 |
| Application | 261 | 245 | 100 | 仅包含后台成功返回的 1 篇 |
| FAQ / Troubleshooting | N/A | N/A | N/A | 页面被普通接口截断 |
| Product / Hardware / Selection | N/A | N/A | N/A | 页面被普通接口截断 |

## 3. 36 篇 Wiki 的逐页统计状态

`N/A` 表示页面没有被普通接口返回，原因是 GA4 页面报表的结果数量上限；它不表示流量为 0。

### JetPack 7.2（11 篇）

| # | Created at | 页面 | Q3 PV | Q3 Sessions | Q3 New users | 状态 |
| ---: | --- | --- | ---: | ---: | ---: | --- |
| 1 | 2026-07-31 | [DeepStream on JetPack 7.2](https://wiki.seeedstudio.com/jetpack_7_2_deepstream/) | N/A | N/A | N/A | 接口截断 |
| 2 | 2026-07-31 | [Deploy Full-Weight GR00T N1.7](https://wiki.seeedstudio.com/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/) | N/A | N/A | N/A | 接口截断 |
| 3 | 2026-07-31 | [Deploy TensorRT Edge-LLM](https://wiki.seeedstudio.com/deploy_tensorrt_edge_llm_on_jetpack7.2/) | N/A | N/A | N/A | 接口截断 |
| 4 | 2026-07-31 | [Flash and OTA Upgrade](https://wiki.seeedstudio.com/flash_and_ota_jetpack_7.2/) | **317** | **289** | **109** | 已确认 |
| 5 | 2026-07-31 | [JetPack 6.x to 7.2 Migration](https://wiki.seeedstudio.com/jetpack_6_to_7_2_migration_playbook/) | N/A | N/A | N/A | 接口截断 |
| 6 | 2026-07-31 | [Camera and Multimedia Compatibility](https://wiki.seeedstudio.com/jetpack_7_2_camera_multimedia_compatibility/) | N/A | N/A | N/A | 接口截断 |
| 7 | 2026-07-31 | [MAXN_SUPER and MIG](https://wiki.seeedstudio.com/jetpack_7_2_maxn_super_and_mig/) | N/A | N/A | N/A | 接口截断 |
| 8 | 2026-07-31 | [Memory Optimization](https://wiki.seeedstudio.com/jetpack_7_2_memory_optimization/) | N/A | N/A | N/A | 接口截断 |
| 9 | 2026-07-31 | [JetPack 7.2 Resource Hub](https://wiki.seeedstudio.com/jetpack_7_2_resource_hub/) | **748** | **666** | **145** | 已确认 |
| 10 | 2026-07-31 | [Unified Platform, ISO and SBSA](https://wiki.seeedstudio.com/jetpack_7_2_unified_platform_iso_sbsa/) | N/A | N/A | N/A | 接口截断 |
| 11 | 2026-08-27 | [Memory Optimization Deep Dive](https://wiki.seeedstudio.com/jetpack_7_2_memory_optimization_deep_dive/) | N/A | N/A | N/A | 接口截断 |

### FAQ / Troubleshooting（6 篇）

| # | Created at | 页面 | Q3 PV | Q3 Sessions | Q3 New users | 状态 |
| ---: | --- | --- | ---: | ---: | ---: | --- |
| 12 | 2026-07-14 | [JetPack 7.2 Wireless Module Setup](https://wiki.seeedstudio.com/jetpack72_ax210_ax200_wifi_setup_guide/) | N/A | N/A | N/A | 接口截断 |
| 13 | 2026-07-22 | [Make DIY BSP for Classic / Super](https://wiki.seeedstudio.com/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super/) | N/A | N/A | N/A | 接口截断 |
| 14 | 2026-08-07 | [A603 Headless Setup and Recovery](https://wiki.seeedstudio.com/headless_setup_and_recovery_for_a603/) | N/A | N/A | N/A | 接口截断 |
| 15 | 2026-08-07 | [Arducam OV9281 with A603](https://wiki.seeedstudio.com/use_arducam_ov9281_camera_with_a603_jetson_carrier_board/) | N/A | N/A | N/A | 接口截断 |
| 16 | 2026-08-12 | [Initrd Flash on ZFS Host](https://wiki.seeedstudio.com/jetson_initrd_flash_zfs_host_limitation/) | N/A | N/A | N/A | 接口截断 |
| 17 | 2026-08-13 | [Weston EGL Cold Boot Error](https://wiki.seeedstudio.com/weston_egl_not_initialized_jetson_cold_boot/) | N/A | N/A | N/A | 接口截断 |

### Product / Hardware / Selection（4 篇）

| # | Created at | 页面 | Q3 PV | Q3 Sessions | Q3 New users | 状态 |
| ---: | --- | --- | ---: | ---: | ---: | --- |
| 18 | 2026-07-01 | [EM12-G GNSS Module](https://wiki.seeedstudio.com/em12_g_gnss_module_for_recomputer_robotics_j3011/) | N/A | N/A | N/A | 接口截断 |
| 19 | 2026-08-14 | [Rugged J401 Hardware and Interfaces](https://wiki.seeedstudio.com/jetson/recomputer_rugged_j401/hardware_and_interface_usage/) | N/A | N/A | N/A | 接口截断 |
| 20 | 2026-09-01 | [Jetson Product Selection Guide](https://wiki.seeedstudio.com/jetson-product-selection-guide/) | N/A | N/A | N/A | 接口截断 |
| 21 | 2026-09-20 | [Rugged J401 Industrial Vision](https://wiki.seeedstudio.com/jetson/recomputer_rugged_j401/industrial_vision/) | N/A | N/A | N/A | 接口截断 |

### Application（15 篇）

| # | Created at | 页面 | Q3 PV | Q3 Sessions | Q3 New users | 状态 |
| ---: | --- | --- | ---: | ---: | ---: | --- |
| 22 | 2026-07-02 | [PREEMPT_RT Kernel on JetPack 6.2.1](https://wiki.seeedstudio.com/flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1/) | N/A | N/A | N/A | 接口截断 |
| 23 | 2026-07-07 | [JoyAI-VL-Interaction on Jetson Thor](https://wiki.seeedstudio.com/deploy_joyai_vl_interaction_on_jetson_thor/) | N/A | N/A | N/A | 接口截断 |
| 24 | 2026-07-09 | [Rapid Prototyping with NVIDIA Skills](https://wiki.seeedstudio.com/rapid_prototyping_on_jetson_with_nvidia_skills/) | N/A | N/A | N/A | 接口截断 |
| 25 | 2026-07-13 | [Industrial Vision Monitoring](https://wiki.seeedstudio.com/industrial_vision_monitoring_on_industrial/) | N/A | N/A | N/A | 接口截断 |
| 26 | 2026-07-24 | [Build and Flash Yocto](https://wiki.seeedstudio.com/build_and_flash_yocto_for_recomputer_super/) | N/A | N/A | N/A | 接口截断 |
| 27 | 2026-08-03 | [Streaming Vision Agent](https://wiki.seeedstudio.com/streaming_vision_agent_on_jetson/) | N/A | N/A | N/A | 接口截断 |
| 28 | 2026-08-18 | [Four-Camera Fisheye Surround View](https://wiki.seeedstudio.com/jetson_fisheye_surround_view_demo/) | N/A | N/A | N/A | 接口截断 |
| 29 | 2026-09-04 | [Custom Microduck Motion](https://wiki.seeedstudio.com/ai_robotics_microduck_rl_custom_motion_training/) | N/A | N/A | N/A | 接口截断 |
| 30 | 2026-09-04 | [Microduck RL Environment](https://wiki.seeedstudio.com/ai_robotics_microduck_rl_jetson_environment/) | N/A | N/A | N/A | 接口截断 |
| 31 | 2026-09-04 | [Microduck RL on Jetson](https://wiki.seeedstudio.com/ai_robotics_microduck_rl_on_jetson/) | **261** | **245** | **100** | 已确认 |
| 32 | 2026-09-04 | [Official Microduck Motions](https://wiki.seeedstudio.com/ai_robotics_microduck_rl_official_policies/) | N/A | N/A | N/A | 接口截断 |
| 33 | 2026-09-18 | [PREEMPT_RT Prebuilt DEB](https://wiki.seeedstudio.com/deploy_preempt_rt_kernel_with_prebuilt_deb_package_on_recomputer_jetson/) | N/A | N/A | N/A | 接口截断 |
| 34 | 2026-09-20 | [TensorRT-Model-Connect](https://wiki.seeedstudio.com/ai_robotics_deploy_tensorrt_model_connect_on_jetson/) | N/A | N/A | N/A | 接口截断 |
| 35 | 2026-09-24 | [AI Model Deployment Guide](https://wiki.seeedstudio.com/ai_robotics_deploy_ai_models_on_jetson/) | N/A | N/A | N/A | 接口截断 |
| 36 | 2026-09-27 | [ZED X-Series GMSL Cameras](https://wiki.seeedstudio.com/zed_x_gmsl_cameras_on_recomputer_robotics/) | N/A | N/A | N/A | 接口截断 |

## 4. 后台返回的 2026-10-01 至 2026-10-10 数据

本节不是 Q3 数据，仅用于记录后台普通接口实际返回了哪些目标页面。列表之外的目标页面仍应视为“未返回”，不能视为 0。

| 页面 | PV | Sessions | New users |
| --- | ---: | ---: | ---: |
| [JetPack 7.2 Resource Hub](https://wiki.seeedstudio.com/jetpack_7_2_resource_hub/) | 115 | 103 | 28 |
| [Flash and OTA Upgrade](https://wiki.seeedstudio.com/flash_and_ota_jetpack_7.2/) | 61 | 58 | 23 |
| [Jetson Product Selection Guide](https://wiki.seeedstudio.com/jetson-product-selection-guide/) | 58 | 38 | 7 |
| [Deploy TensorRT Edge-LLM](https://wiki.seeedstudio.com/deploy_tensorrt_edge_llm_on_jetpack7.2/) | 37 | 38 | 28 |
| [Microduck RL on Jetson](https://wiki.seeedstudio.com/ai_robotics_microduck_rl_on_jetson/) | 36 | 36 | 21 |
| [Official Microduck Motions](https://wiki.seeedstudio.com/ai_robotics_microduck_rl_official_policies/) | 31 | 31 | 23 |
| [TensorRT-Model-Connect](https://wiki.seeedstudio.com/ai_robotics_deploy_tensorrt_model_connect_on_jetson/) | 29 | 28 | 14 |
| [Rapid Prototyping with NVIDIA Skills](https://wiki.seeedstudio.com/rapid_prototyping_on_jetson_with_nvidia_skills/) | 26 | 31 | 8 |
| [JetPack 7.2 Wireless Module Setup](https://wiki.seeedstudio.com/jetpack72_ax210_ax200_wifi_setup_guide/) | 0 | 0 | 0 |
| [Four-Camera Fisheye Surround View](https://wiki.seeedstudio.com/jetson_fisheye_surround_view_demo/) | 0 | 0 | 0 |
| [Memory Optimization Deep Dive](https://wiki.seeedstudio.com/jetpack_7_2_memory_optimization_deep_dive/) | 0 | 0 | 0 |
| [Custom Microduck Motion](https://wiki.seeedstudio.com/ai_robotics_microduck_rl_custom_motion_training/) | 0 | 0 | 0 |
| [PREEMPT_RT Prebuilt DEB](https://wiki.seeedstudio.com/deploy_preempt_rt_kernel_with_prebuilt_deb_package_on_recomputer_jetson/) | 0 | 0 | 0 |

## 5. 数据完整性说明

1. `/api/wiki-traffic-detail?days=101` 在 36 个目标 URL 中只返回了 3 个。
2. `/api/wiki-traffic-detail?days=9` 返回了 13 个目标 URL，其中部分页面当前区间为 0，但因为它们在对比区间出现而保留在结果中。
3. `/api/wiki-new-pages?days=9` 能返回只有 2–6 PV 的低流量页面，而这些页面不会出现在普通逐页接口中，证明普通接口缺失不等于真实 0。
4. `/api/wiki-new-pages?days=101` 连续等待 900 秒后超时，没有得到完整结果。
5. 9 月发生过文档目录迁移，Git 新页面接口会把大量迁移文件纳入遍历，显著拖慢查询。

## 6. 获得完整统计所需的后台改进

- 为 Wiki 流量接口增加 `start_date` 和 `end_date`。
- 支持传入 URL/path 列表并使用 GA4 `inListFilter` 定向查询。
- 取消普通逐页接口的 Top-N 截断，或开放 `limit` 参数。
- 新页面检测使用文档 `createdAt` 或追踪 rename，避免把目录迁移计为新增页面。
