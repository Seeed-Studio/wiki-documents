---
description: "Seeed 具身智能入门课程第六阶段：机器人视觉与自主抓取第 29 章 — reBot Arm 自主视觉抓取：本章以 reBot Arm 视觉抓取Demo为案例，完成一个完整机器人视觉抓取系统搭建。"
title: 第 29 章 - reBot Arm 自主视觉抓取
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_29
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_29/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 6 阶段 · 第 29 章 · 实践</span>
    <h2>29. reBot Arm 自主视觉抓取</h2>
    <p>
      本章以 reBot Arm 视觉抓取Demo为案例，完成一个完整机器人视觉抓取系统搭建。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## reBot Arm 自主视觉抓取

## 章节概述

本章以 reBot Arm 视觉抓取Demo为案例，完成一个完整机器人视觉抓取系统搭建。

最终实现：机械臂通过RGB-D相机观察工作区域，利用目标检测模型识别目标物体，根据深度信息计算目标空间位置，并控制机械臂完成自动抓取和放置。

本实践将进行：

-  RGB-D相机部署； 
-  目标检测模型运行； 
-  视觉定位； 
-  手眼标定； 
-  抓取姿态计算； 
-  机械臂抓取控制。 

## 硬件配置

<sheet sheet-id="g2msJN" token="BXyssJZNMhqOL7tsLspcVbBan1I"></sheet>

**接线说明**

- 将深度相机通过 USB 3.0 连接到主机。
- 将 USB2CAN 适配器连接到机械臂 CAN 总线。
- 确认 24V 电源、相机和机械臂全部连接可靠。
- 配置权限：

  ```Plain Text
  sudo chmod a+rw /dev/bus/usb/*/*   # 深度相机 USB 权限
  sudo chmod 666 /dev/ttyUSB0        # USB2CAN（端口号按实际调整）
  ```

## 环境安装

<sheet sheet-id="1hdSXE" token="BXyssJZNMhqOL7tsLspcVbBan1I"></sheet>

## Step 1 克隆视觉抓取仓库

- 优先使用 Seeed-Projects 官方仓库，该仓库只包含视觉抓取部分，机械臂控制SDK需要另外安装

  ```Bash
  git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
  cd rebot_grasp
  ```

## Step 2 创建并配置 conda 环境

```Bash
conda env create -f environment.yml
conda activate rebotarm
```

- tip：如果你想使用其他环境名，可以将命令中的 `rebotarm` 替换为自定义名称。

## Step 3. 安装机械臂控制库

```Plain Text
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

- 如果 `pip install -e .` 报 `Multiple top-level packages discovered in a flat-layout`，请在 `reBotArm_control_py` 的 `pyproject.toml` 中加入显式包发现配置，然后重新执行 `pip install -e .`：

  ```TOML
  [build-system]
  requires = ["setuptools>=61.0", "wheel"]
  build-backend = "setuptools.build_meta"
  
  [tool.setuptools.packages.find]
  include = ["reBotArm_control_py*"]
  ```
- 视觉抓取程序会读取该 SDK 配置，并自动选择对应的机械臂控制模式与夹爪参数。

## Step 4. 配置机械臂型号

- 在路径`/rebot_grasp/sdk/reBotArm_control_py/config/`下，找到机械臂的`rebotarm.yaml`文件，根据机械臂的型号将`hardware_yaml:`修改为对应机械臂型号，程序将自行根据载入对应机械臂的电机硬件参数。

  ```Plain Text
  # reBotArm 全局配置
  # 硬件配置（电机类型、通信参数、PID 等）
  
  # reBotArm global config
  # Hardware config (motor type, comm params, PID, etc.)
  
  hardware_yaml: "rebotarm_rs.yaml"
  
  # rebotarm_rs.yaml为B601 RS
  # rebotarm_dm.yaml为B601 DM
  ```

## Step 5. 安装深度相机 SDK

- 本项目支持 Orbbec Gemini 2 与 RealSense D435i / D405 等 RGB-D 深度相机。请根据实际使用的相机安装对应 SDK；如果当前环境已经能正常导入相机驱动，可跳过本步骤。
- **Orbbec Gemini 2**

  - Orbbec Gemini 2 依赖 **pyorbbecsdk**（Orbbec SDK v2 的 Python 版本）。优先推荐直接安装预编译 Python 包：
  
    - **方式一：通过 pip 安装（推荐）**
    
      ```Bash
      pip install pyorbbecsdk2
      ```
    - **方式二：从 GitHub 获取**
    
      ```Bash
      # 安装编译依赖
      sudo apt-get install -y cmake build-essential libusb-1.0-0-dev
      
      cd sdk
      git clone https://github.com/orbbec/pyorbbecsdk.git
      cd pyorbbecsdk
      pip install -e .
      ```
    - **对于中国大陆用户可以使用**
    
      ```Bash
      git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
      ```
    - 源码安装时，请先通过 CMake 编译生成原生扩展，确保 `install/lib` 中已有 `pyorbbecsdk*.so` 和 Orbbec 动态库，再执行 `pip install -e .`。
    - 注意，如果上述安装过程中均发生错误导致安装失败，请参考下方Orbbec官方文档进行安装操作。
    - **验证安装**
    
      ```Bash
      python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
      ```
    - **OrbbecViewer（可选，用于验证相机）**
    
      - 下载预编译包后运行 `OrbbecViewer`，可在运行 Demo 前确认相机连接和深度流正常。
      - GitHub：[https://github.com/orbbec/OrbbecSDK_v2/releases](https://github.com/orbbec/OrbbecSDK_v2/releases)
      - Gitee：[https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases](https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases)
- **RealSense D435i / D405**

  - RealSense 相机依赖 `pyrealsense2`。通常可以直接通过 pip 安装：
  
    ```Bash
    pip install pyrealsense2
    python -c "import pyrealsense2; print('pyrealsense2 OK')"
    ```
  - 如果系统需要完整的 RealSense 工具链或 udev 规则，请参考 RealSense SDK 官方文档安装 `librealsense2`。
  - **SDK 资料汇总**
  
    <sheet sheet-id="mayZnf" token="BXyssJZNMhqOL7tsLspcVbBan1I"></sheet>

## RGB-D相机安装

根据实验需求选择固定相机方式

- 相机固定观察工作区域。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-29cn/ch29-01cn.jpg" alt="" />
</div>
- 相机安装在机械臂末端。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-29cn/ch29-02cn.jpg" alt="" />
</div>

## 视觉抓取

## 主抓取程序

`scripts/main.py` — 主抓取程序，完整的视觉抓取流水线：

- 初始化 RGB-D 相机，确认图像流可用
- 机械臂与夹爪使能，移动到预备高位
- 实时相机预览 + YOLO 目标检测与实例分割
- OBB 短轴估计夹爪朝向，深度分位数估计抓取高度
- 按 `G` 冻结帧，经手眼变换计算机械臂目标位姿
- 机械臂移动到预抓取点 → 下降 → 夹爪闭合 → 提升 → 回预备位

  ```Plain Text
  python scripts/main.py
  ```

## 抓取与放置程序

`scripts/set.py` — 抓取与放置程序，将香蕉抓取并放置到盒子里面

- 相机与机械臂初始化，移动到预备点位
- 实时相机预览 + YOLO 目标检测与实例分割
- 按 `G` 冻结帧，经手眼变换计算机械臂目标位姿
- 机械臂移动抓取香蕉并抬高
- 机械臂将香蕉放置在盒子内，并回归初始姿态
- 按 `Q` 退出系统，机械臂回归零点

  ```Plain Text
  python scripts/set.py
  ```

## 位置补偿

如果您在校准之后发现机械臂的抓取精度无法满足需求，可以打开`config/default.yaml`文件，修改`calibration.hand_eye_compensation_m`中的 `X（前后）、Y（左右）、Z（高低）` 参数给予位置补偿。

```YAML
------------------------------------
calibration:
  aruco:
    marker_length_m: 0.1
    dict_id: 0
    target_marker_id: 0
  hand_eye_method: TSAI
  hand_eye_compensation_m:
    x: 0.00
    y: 0.00
    z: -0.02
------------------------------------
```

## 三维点云抓取【选修】

## GraspNet是什么？

GraspNet主要解决的问题：已经知道物体三维形状，机器人应该从哪里抓？以什么姿态抓？

GraspNet属于基于点云（Point Cloud）的机器人抓取方法，更准确地说，它是一个面向三维点云的六自由度抓取姿态生成与评估框架。简单来说点云是“机器人看到的三维世界数据”，GraspNet是“机器人如何根据这些三维数据找到最佳抓取姿态的方法”。

输入：RGB-D数据 -> 点云 -> GraspNet -> 抓取姿态

输出：一个六自由度抓取姿态$G=(x,y,z,R)$，包括：

- 位置，机械臂夹爪应该到哪里：

  ```Plain Text
  x,y,z
  ```
- 姿态，夹爪应该朝哪个方向：

  ```Plain Text
  roll,pitch,yaw
  ```
- 最终告诉机械臂，从这个方向抓取

## 配置 GraspNet

为了实现对物体夹取姿态更准确的估计，本项目对[graspnet-baseline](https://github.com/graspnet/graspnet-baseline)进行了适配，从而提升机械臂夹取的性能。

GraspNet 的 `pointnet2` / `knn` 扩展需要 CUDA 编译器。开始前先确认当前环境可以找到 `nvcc`，并检查 `nvcc` 的 CUDA 版本是否和 PyTorch 编译时使用的 CUDA 版本一致：

```Bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

如果没有 `nvcc`，或 `nvcc` 显示的 CUDA 版本与 `torch.version.cuda` 不一致，请安装与当前 PyTorch CUDA 版本匹配的 CUDA 编译器。例如 PyTorch 显示 `13.0` 时：

```Bash
conda install -c nvidia cuda-nvcc=13.0
```

两者必须一致，否则编译 `pointnet2` / `knn` 时会出现 `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`。

```Bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# 按你的 CUDA 版本安装 PyTorch 后，再安装 GraspNet 运行依赖
pip install open3d tensorboard Pillow tqdm

# 编译本地算子前配置 CUDA 编译路径。
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

# 编译 CUDA 算子
cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

# 安装 GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

<callout emoji="💡">
- 注：如果直接参考graspnet-baseline官方仓库文档使用 `python setup.py install` 可能报 CUDA / PyTorch 相关错误，建议使用 `pip install . --no-build-isolation`，让扩展在当前 conda 环境中复用已安装的 PyTorch 与 CUDA 配置进行编译。
- 注：如果编译时报 `fatal error: cusparse.h: No such file or directory`，先运行 `find $CONDA_PREFIX -name cusparse.h`，并把包含 `cusparse.h` 的目录加入 `CPATH` / `CPLUS_INCLUDE_PATH`。如果 CUDA 头文件来自 conda `cuda-toolkit`，路径通常是 `$CONDA_PREFIX/targets/x86_64-linux/include`，而不是上面示例里的 pip `nvidia/cu13/include` 路径。
- 注：GraspNet API 的依赖中可能仍使用 `sklearn` 包名。上面的 `sed` 命令会将 `sklearn` 替换为 `scikit-learn`，避免安装时出现包名提示。除非同步调整 GraspNet API 的依赖栈，否则建议保留其 `numpy==1.23.4` 约束，因为 `transforms3d==0.3.1` 仍使用 `np.float` 等 NumPy 别名。
</callout>

配置预训练模型

- 在graspnet-baseline 官方仓库下载 GraspNet 官方预训练权重[Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view)、[Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A)，将 下载好的`checkpoint-rs.tar` 放到：

  ```Bash
  sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
  ```
- 然后在 `config/default.yaml` 中确认：

  ```YAML
  graspnet:
    checkpoint: "checkpoint-rs.tar"
  ```
- `checkpoint` 支持三种写法：仅文件名会自动从 `sdk/graspnet-baseline/checkpoints/` 查找；相对路径会按项目根目录解析；绝对路径会直接使用。

## 运行与调试

1、GraspNet 相机估计 Demo — `scripts/graspnet_camera_demo.py`

- 不连接机械臂，仅使用 RGB-D 相机运行 GraspNet 6D 夹取姿态估计。脚本会保留实时相机预览，并使用 YOLO 检测框选择目标区域，再从 GraspNet 全场景候选中筛选目标 bbox 内的可行夹取。按 `G` 或 `Space` 对当前帧推理，按 `R` 恢复实时预览，按 `Q` 或 `Esc` 退出；推理后可通过 Open3D 查看点云与夹取候选。

  ```Bash
  python scripts/graspnet_camera_demo.py
  ```

2、GraspNet 机械臂抓取程序 — `scripts/grasp.py`

- 基于 `graspnet_camera_demo.py` 的估计结果接入机械臂执行流程：YOLO 选择目标，GraspNet 输出 6D 夹取姿态，经手眼标定转换到机械臂基坐标系，再检查 IK 可达性并执行预夹取、夹取、退回动作。调试时建议先使用 `--dry-run` 只打印目标位姿和候选筛选结果。

  ```Bash
  python scripts/grasp.py --dry-run
  python scripts/grasp.py --target-class "light blue coffee cup"
  ```

---

</div>
