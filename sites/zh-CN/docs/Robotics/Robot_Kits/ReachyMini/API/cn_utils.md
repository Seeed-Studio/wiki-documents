---
description: Reachy Mini工具完整API参考，包括插值函数、硬件配置、Rerun可视化和核心工具。
title: 工具API参考
slug: /reachymini_api_utils
keywords:
  - api
  - utils
  - interpolation
  - hardware config
  - visualization
  - urdf
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/reachymini_api_utils/
---
# 工具

## 插值函数

### `reachy_mini.utils.interpolation.minimum_jerk`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L13)**

计算从起始位置到目标位置的最小jerk插值函数。

---

### `reachy_mini.utils.interpolation.linear_pose_interpolation`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L58)**

在线性插值6D空间中两个姿态之间。

---

### `reachy_mini.utils.interpolation.time_trajectory`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L96)**

基于指定的插值方法计算时间轨迹值。

---

### `reachy_mini.utils.interpolation.delta_angle_between_mat_rot`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L135)**

计算两个3x3旋转矩阵`P`和`Q`之间的角度（以弧度为单位）。

这等价于轴角空间中的角距离。通过相对旋转矩阵的迹来计算。

**参数：**

| 名称 | 描述 |
|------|-------------|
| `P` | 一个3x3旋转矩阵。 |
| `Q` | 另一个3x3旋转矩阵。 |

**返回：**

两个旋转之间的弧度角度。

**参考：**
- [https://math.stackexchange.com/questions/2113634/comparing-two-rotation-matrices](https://math.stackexchange.com/questions/2113634/comparing-two-rotation-matrices)
- [http://www.boris-belousov.net/2016/12/01/quat-dist/](http://www.boris-belousov.net/2016/12/01/quat-dist/)

---

### `reachy_mini.utils.interpolation.distance_between_poses`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L161)**

计算两个4x4齐次变换矩阵之间的三种距离。

结果结合了翻译（以毫米为单位）和旋转（以度为单位），使用任意但令人满意的等价关系：**1度≈1毫米**。

**参数：**

| 名称 | 描述 |
|------|-------------|
| `pose1` | 表示第一个姿态的4x4齐次变换矩阵。 |
| `pose2` | 表示第二个姿态的4x4齐次变换矩阵。 |

**返回：**

一个包含以下内容的元组：
- 以米为单位的翻译距离
- 以弧度为单位的角距离
- 以魔法毫米为单位的疯狂距离（以毫米为单位的翻译+以度为单位的旋转）

---

### `reachy_mini.utils.interpolation.compose_world_offset`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L187)**

用世界帧偏移组合绝对世界帧姿态。

- **翻译在世界帧中相加：** `t_final = t_abs + t_off`
- **旋转在世界帧中组合：** `R_final = R_off @ R_abs`

这绕其自身的原点旋转框架（关于世界轴定义的旋转），并按世界翻译移动。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `T_abs` | `(4,4) ndarray` | 世界帧中的绝对姿态。 |
| `T_off_world` | `(4,4) ndarray` | 在世界轴中指定的偏移变换（dx,dy,dz在世界；dR关于世界轴）。 |
| `reorthonormalize` | `bool` | 如果为True，SVD正交化结果旋转以对抗漂移。 |

**返回：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `T_final` | `(4,4) ndarray` | 世界帧中的结果姿态。 |

---

### `reachy_mini.utils.interpolation.InterpolationTechnique`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/interpolation.py#L87)**

插值技术的枚举。

---

## 硬件配置

### `reachy_mini.utils.hardware_config.parser.MotorConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L9)**

电机配置。

---

### `reachy_mini.utils.hardware_config.parser.SerialConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L23)**

串行配置。

---

### `reachy_mini.utils.hardware_config.parser.ReachyMiniConfig`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L30)**

Reachy Mini配置。

---

### `reachy_mini.utils.hardware_config.parser.parse_yaml_config`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/hardware_config/parser.py#L38)**

解析YAML配置文件并返回`ReachyMiniConfig`。

---

## Rerun可视化

### `reachy_mini.utils.rerun.Rerun`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L28)**

Reachy Mini的Rerun日志记录。

### 方法

#### `log_camera`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L126)**

将摄像头图像记录到Rerun。

---

#### `log_movements`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L203)`

将运动数据记录到Rerun。

---

#### `set_absolute_path_to_urdf`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L97)**

设置URDF文件中的绝对路径。Rerun无法读取`"package://"`路径。

---

#### `start`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L107)**

启动Rerun日志记录线程。

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L113)**

停止Rerun日志记录线程。

---

### `reachy_mini.utils.rerun.UrdfEntityPaths`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/rerun.py#L276)**

用于构造与本机URDF日志记录器匹配的链接/关节实体路径的帮助器。

---

## 无线版本工具

### `reachy_mini.utils.wireless_version.utils.call_logger_wrapper`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/utils.py#L8)**

异步运行命令，将stdout和stderr实时流式传输到日志记录器。

**参数：**

| 名称 | 描述 |
|------|-------------|
| `command` | 命令参数的列表或元组（不是字符串） |
| `logger` | 具有`.info`和`.error`方法的日志记录器对象 |

---

### `reachy_mini.utils.wireless_version.update.update_reachy_mini`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update.py#L12)**

更新reachy_mini包并重启守护进程。

**参数：**

| 名称 | 描述 |
|------|-------------|
| `logger` | 用于流式输出的日志记录器。 |
| `pre_release` | 如果为True，则从PyPI安装预发布（如果设置了git_ref，则忽略）。 |
| `git_ref` | 如果设置，则从GitHub标签/分支安装而不是从PyPI安装。 |

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_fix_venvs_ownership`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L17)**

对于无线单元，检查venvs_path下的文件是否由用户pollen拥有，并在需要时修复。

**参数：**

| 名称 | 描述 |
|------|-------------|
| `venvs_path` | 虚拟环境目录的路径（默认：/venvs） |
| `custom_logger` | 要使用的可选日志记录器，而不是模块日志记录器 |

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_update_bluetooth_service`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L80)**

:::info

检查蓝牙服务是否需要更新并在需要时更新。

将源`bluetooth_service.py`与安装在`/bluetooth/bluetooth_service.py`处的版本进行比较。如果它们不同，则复制新版本并重启蓝牙服务。还同步`commands/`文件夹。

:::

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_update_wireless_launcher`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L190)**

:::info

检查无线守护进程服务是否需要更新并在需要时更新。

将源`reachy-mini-daemon.service`与安装的版本进行比较。如果它们不同，则复制新版本并重新加载systemd。

:::

---

### `reachy_mini.utils.wireless_version.startup_check.check_and_sync_apps_venv_sdk`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/startup_check.py#L255)**

:::info

检查apps_venv SDK是否与守护进程安装源匹配并在需要时同步。

比较两者版本和安装源（PyPI与git ref）。如果守护进程是从git ref安装的，apps_venv将被同步到相同的ref。

:::

---

### `reachy_mini.utils.wireless_version.update_available.is_update_available`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L36)**

检查给定包是否有可用更新。

---

### `reachy_mini.utils.wireless_version.update_available.get_pypi_version`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L47)**

从PyPI获取包的最新版本。

---

### `reachy_mini.utils.wireless_version.update_available.get_local_version`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/wireless_version/update_available.py#L65)**

获取包的当前安装版本。

---

## 核心工具

### `reachy_mini.utils.create_head_pose`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/__init__.py#L13)**

创建表示6D空间中姿态（位置和方向）的齐次变换矩阵。

**参数：**

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `x` | `float` | 位置的X坐标。 |
| `y` | `float` | 位置的Y坐标。 |
| `z` | `float` | 位置的Z坐标。 |
| `roll` | `float` | 横滚角 |
| `pitch` | `float` | 俯仰角 |
| `yaw` | `float` | 偏航角 |
| `mm` | `bool` | 如果为True，则将位置从毫米转换为米。 |
| `degrees` | `bool` | 如果为True，则将横滚、俯仰和偏航解释为度；否则解释为弧度。 |

**返回：**

`np.ndarray` — 表示姿态的4x4齐次变换矩阵。

---

## URDF解析

### `reachy_mini.utils.parse_urdf_for_kinematics.get_data`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/utils/parse_urdf_for_kinematics.py#L17)**

生成`urdf_kinematics.json`文件。