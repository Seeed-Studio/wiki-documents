---
description: 本维基提供了 Lekiwi 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。
title: Lekiwi入门教程
keywords:
- Lerobot
- Huggingface
- 小车
- 机器人
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png
slug: /cn/lerobot_lekiwi
last_update:
  date: 2025/12/11
  author: Li shanghang
---

# 如何在 Lerobot 中使用 Lekiwi

:::tip
本教程仓库代码保持为2025年6月5日之前的Lerobot经过测试的稳定版本，目前Huggingface对Lerobot进行了非常庞大的升级，增加了非常多的新功能，如果需要体验最新的教程请跟随[官方文档进行操作](https://huggingface.co/docs/lerobot/lekiwi)。
:::


## 简介

[Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) 是由 [SIGRobotics-UIUC](https://github.com/SIGRobotics-UIUC) 发起的一个完全开源的机器人小车项目。它包含详细的 3D 打印文件和操作指南，设计上与 [LeRobot](https://github.com/huggingface/lerobot/tree/main) 模仿学习框架兼容。它支持 SO101 机器人手臂，从而实现完整的模仿学习流程。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/LeKiwi-Full-Kit-12V-Verision.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 主要特点

1. **开源且低成本**： [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) 提供了一种开源、低成本的机器人小车解决方案。
2. **与 LeRobot 集成**： 专为与 [LeRobot 平台](https://github.com/huggingface/lerobot) 集成而设计。
3. **丰富的学习资源**： 提供全面的开源学习资源，包括组装和校准指南，以及测试、数据收集、训练和部署的教程，帮助用户快速入门并开发机器人应用。
4. **兼容 Nvidia**： 可与 reComputer Mini J4012 Orin NX 16 GB 搭配使用。
5. **多场景应用**： 适用于教育、科学研究、自动化生产和机器人领域，帮助用户在各种复杂任务中实现高效且精准的机器人操作。

:::caution

Seeed Studio 仅对硬件本身的质量负责。教程严格按照官方文档更新。如果您遇到无法解决的软件问题或环境依赖问题，请及时向 [LeRobot 平台](https://github.com/huggingface/lerobot) 或 [LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU) 报告问题。
:::

:::danger

- Lekiwi 底盘中的所有舵机需要 12V 电源供电。对于使用 5V 机器人手臂的用户，我们提供了 12V 转 5V 降压转换模块。请注意，您需要自行进行电路修改。

- 12V 电源 - 如果需要，您可以在结账时选择此选项。如果您已经拥有 12V 电源，只需将电源输出接口转换为 5521 DC 插头即可。

- 树莓派控制器和摄像头 - 这些需要通过订单界面单独购买。
:::

## 规格

| 类型 | Lekiwi | 
|--|--|
|  舵机电机 | 3个 12V STS3215 1:345 齿轮比 | 
| 电源 | 12V DC 或电池 |
| 角度传感器 | 12位磁性编码器 | 
| 推荐工作温度范围 | 0℃～40℃ | 
| 通信方式 | UART | 
| 控制方式 | PC |

## 物料清单 (BOM)

| 部件 | 数量 | 包含 |
|--|--|--|
| STS3215 1:345 12V 舵机电机 | 3 | ✅ |
| 全向轮/万向轮 | 3 | ✅ |
| Lekiwi 3D打印外壳 | 1 | ✅ |
| DC-DC 降压电源模块 - 24V/12V 转 5V | 1 | ✅ |
| 电机控制板 | 1 | ✅ |
| DC公头转双DC公头5521 Y型电缆 | 1 | ✅ |
| USB线缆；Type C 2.0 转 Type C 2.0-黑色；长度150mm | 1 | ✅ |
| USB 3.1 Type C 转 A线缆 0.5米 | 1 | ✅ |
| 插头电源适配器；黑色-12V-2A AC/DC | 1 | ✅ |
| M2 M3 M4 混合螺丝 | 足量 | ✅ |
| 树莓派 | 1 | 可选 |
| USB摄像头 | 1 | 可选 |
| 深度摄像头 | 2 | 可选 |
| SO-ARM101 Pro | 1 | 可选 |
| 12V 高容量锂离子电池组 E326S | 1 | 可选 |

## 初始系统环境

**对于 Ubuntu x86:**
- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**对于 Jetson Orin:**
- Jetson JetPack 6.0
- Python 3.10  
- Torch 2.3+  

**对于树莓派:**
- 树莓派5 4G~16G

## 目录
  [A. 3D打印指南]

  [B. 安装 LeRobot]

  [C. 配置电机]

  [D. 组装]

  [E. 校准]

  [F. 遥控操作]

  [G. 添加摄像头]

  [H. 记录数据集]

  [I. 可视化数据集]

  [J. 回放一个操作序列]

  [K. 训练策略]

  [L. 评估你的策略]

## 3D打印指南

### 部件
我们提供以下3D打印部件的可打印STL文件。这些部件可以使用通用PLA耗材在消费级FDM打印机上打印。我们在Bambu Lab P1S打印机上进行了测试。对于所有组件，我们只需加载到bambuslicer中，自动旋转和排列，启用任何推荐的支撑，然后打印。

| 项目 | 数量 | 备注 | 
|:---|:---:|:---:|
| [底板顶部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer2.stl) | 1 | |
| [底板底部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer1.stl) | 1 | |
| [驱动电机支架](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/drive_motor_mount_v2.stl) | 3 | |
| [舵机轮毂](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/servo_wheel_hub.stl) | 3 | 使用支撑 |
| [树莓派外壳顶部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_top.stl) | 1 | |
| [树莓派外壳底部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_bottom.stl) | 1 | |
| Arducam [底座支架](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_camera_mount.stl) 和 [腕部支架](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/wrist_camera_mount.stl)| 1 | **兼容 [此摄像头](https://www.amazon.com/Arducam-Camera-Computer-Without-Microphone/dp/B0972KK7BC)** |
| 网络摄像头 [底座支架](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount.stl)、[夹持器插入件](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/so100_gripper_cam_mount_insert.stl) 和 [腕部支架](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount_wrist.stl) | 1 | **兼容 [此摄像头](https://www.amazon.fr/Vinmooog-equipement-Microphone-Enregistrement-conférences/dp/B0BG1YJWFN/)** |

### 打印参数

提供的STL文件可以在许多FDM打印机上直接打印。以下是测试和建议的设置，其他设置也可能有效。
- 材料：PLA+ 
- 喷嘴直径和精度：0.2mm喷嘴直径，层高0.2mm
- 填充密度：15%  
- 打印速度：150 mm/s
- 如果需要，将G代码（切片文件）上传到打印机并打印

## 安装 LeRobot

在您的 Raspberry Pi 上：

### 1. [安装 Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install):
```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

### 2. 重启 Shell
在您的 Shell 中复制粘贴以下命令：`source ~/.bashrc` 或对于 Mac 用户：`source ~/.bash_profile` 或 `source ~/.zshrc`（如果您使用的是 zshell）

### 3. 为 LeRobot 创建并激活一个新的 Conda 环境

```bash
conda create -y -n lerobot python=3.10
```

然后激活您的 Conda 环境（每次打开 Shell 使用 LeRobot 时都需要执行此操作！）：
```bash
conda activate lerobot
```

### 4. 克隆 LeRobot：
```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. 在您的环境中安装 ffmpeg：
如果使用 `miniconda`，请在您的环境中安装 `ffmpeg`：
```bash
conda install ffmpeg -c conda-forge
```

### 6. 安装带有 feetech 电机依赖的 LeRobot：
```bash
cd ~/lerobot && pip install -e ".[lekiwi]"
```

## C. 在笔记本电脑上安装 LeRobot
如果您已经在笔记本电脑上安装了 LeRobot，可以跳过此步骤，否则请按照我们在 Raspberry Pi 上的相同步骤进行操作。

> [!提示]
> 我们会频繁使用命令提示符 (cmd)。如果您对使用 cmd 不熟悉，或者想复习命令行的使用，可以参考这里：[命令行速成课程](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)

在您的电脑上：

### 1. [安装 Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install):

### 2. 重启 Shell
在您的 Shell 中复制粘贴以下命令：`source ~/.bashrc` 或对于 Mac 用户：`source ~/.bash_profile` 或 `source ~/.zshrc`（如果您使用的是 zshell）

### 3. 为 LeRobot 创建并激活一个新的 Conda 环境

```bash
conda create -y -n lerobot python=3.10
```

然后激活您的 Conda 环境（每次打开 Shell 使用 LeRobot 时都需要执行此操作！）：
```bash
conda activate lerobot
```

### 4. 克隆 LeRobot：
```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. 在您的环境中安装 ffmpeg：
如果使用 `miniconda`，请在您的环境中安装 `ffmpeg`：
```bash
conda install ffmpeg -c conda-forge
```

### 6. 安装带有 feetech 电机依赖的 LeRobot：
```bash
cd ~/lerobot && pip install -e ".[lekiwi]"
```

## 配置电机

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/huggingface/lerobot/refs/heads/main/media/lekiwi/motor_ids.webp" />
</div>

**查找与机械臂相关联的 USB 端口**
要找到单个电机的正确端口，请运行以下实用脚本两次：

```bash
lerobot-find-port
```

示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0031751`，或在 Linux 上可能为 `/dev/ttyACM0`）：

示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0032081`，或在 Linux 上可能为 `/dev/ttyACM1`）：

故障排除：在 Linux 上，您可能需要通过以下命令授予 USB 端口访问权限：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**配置您的电机**

依次插入您的底盘的每一个电机并运行以下脚本，他会先初始化机械臂舵机6-1，然后再初始化底盘舵机，将其 ID 设置为 9-7，如果你已经校准过机械臂，可以连续按回车不断覆盖和跳过：

```bash
lerobot-setup-motors \
    --robot.type=lekiwi \
    --robot.port=/dev/tty.usbmodem58760431551 # <- paste here the port found at previous step
```

## 组装

<details>
<summary>组装 Lekiwi</summary>

您可以参考官方的[组装教程](https://github.com/SIGRobotics-UIUC/LeKiwi)。

收到打印部件后，所有打印组件如下图所示。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/1.jpg" />
</div>

**A. 使用 12 个 m2x6 自攻螺钉将驱动电机固定到电机支架上。**

| **步骤 1** | **步骤 2** |
|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/2.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/3.jpg) |

**B. 使用 12 个 m3x16 机器螺钉将驱动电机支架固定到底部底板上。**

:::tip
记住 ID 排列：8 代表后轮，7 和 9 分别对应左前轮和右前轮。
:::

| **步骤 1** | **步骤 2** |
|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/4.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/5.jpg) |

**C. 将轮毂安装到全向轮上。**

**步骤 1 和步骤 2**：拆下三个螺钉。

| **步骤 1** | **步骤 2** |
|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/6.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/7.jpg) |

**步骤 3 和步骤 4**：使用 9 个 m4x18 机器螺钉将轮毂固定到全向轮上。

| **步骤 3** | **步骤 4** |
|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/8.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/9.jpg) |

**D. 使用 6 个 m3x16 机器螺钉将舵机舵盘固定到轮毂上。**

| **步骤 1** | **步骤 2** | **步骤 3** |
|:---------:|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/10.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/11.jpg) | ![图3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/12.jpg) |

**E. 使用 3 个 m3x10 机器螺钉将舵机舵盘固定到驱动电机上。**

| **步骤 1** | **步骤 2** | **步骤 3** |
|:---------:|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/13.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/14.jpg) | ![图3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/15.jpg) |

**H. 添加舵机驱动器并连接所有电路。**

| **步骤 1** | **步骤 2** | **步骤 3** | **步骤 4** |
|:---------:|:---------:|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/16.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/17.jpg) | ![图3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/18.jpg) | ![图4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/19.jpg) |

| **步骤 5** | **步骤 6** | **步骤 7** | **步骤 8** |
|:---------:|:---------:|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20-1.jpg) | ![图3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/21.jpg) | ![图4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/22.jpg) |

**电源输入**直接连接到电源，如步骤 8 所示，而 **USB-C** 接口为树莓派提供 5V 电源。

对于额外的 **2 针端子（5V 和 12V）**：  
- 如果使用 **7.4V SO10x 机械臂**，通过 **5V 输出**为 **舵机电机板**供电。  
- 如果使用 **12V 机械臂**，直接从 **DC 电源分配器**为 **舵机电机板**供电，如步骤 8 所示。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/23.jpg" />
</div>

**I. 现在可以将树莓派安装到车辆的第二层顶板上。在此之前，请连接 **USB-C 电源线** 和 **USB-C 舵机通信线**，然后将它们从车辆顶板的开口处引出。**

**步骤 1** 将电源线连接到树莓派，并通过顶板中心的开口引出。

|  | | |
|:---------:|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/24.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/25.jpg) | ![图3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/26.jpg) |

**步骤 2** 在底盘的三个舵机中，有一个舵机仅连接了一根电缆。如果需要安装 SO10x 机械臂，请：移除机械臂的 ID1 电缆。将其连接到底盘电机。通过顶板引出作为备用电缆。

|  | | |
|:---------:|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/27.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/28.jpg) | ![图3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) |

**步骤 3** 现在可以将舵机驱动板的 USB-C 连接到树莓派的 USB 接口。

|  | |
|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/30.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

**J. 现在需要使用 12 M3×16 螺钉固定树莓派和顶板的其余部分。**

|  | ||
|:---------:|:---------:|:---------:|
| ![图1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/32.jpg) | ![图2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/33.jpg) | ![图3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/34.jpg) |

**K. 现在您可以使用 1个 M3x16 和 4个 M5×25 螺钉安装 USB 摄像头和跟随臂**

|  |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/35.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/36.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/37.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/38.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/39.jpg) |

并确保伺服控制电缆和 USB 摄像头都已连接到树莓派。

|  | 
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

</details>


## 更新配置
LeKiwi LeRobot 和笔记本电脑上的配置文件应保持一致。首先，我们需要找到移动机械臂的树莓派的 IP 地址。这与用于 SSH 的 IP 地址相同。我们还需要找到笔记本电脑上主臂控制板的 USB 端口以及 LeKiwi 上控制板的端口。可以通过以下脚本找到这些端口。

在 Linux 上，您可能需要通过运行以下命令来授予 USB 端口的访问权限：
```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

重要提示：现在您已经获得了主臂和跟随臂的端口以及移动机械臂的 IP 地址，请在网络配置中更新 **ip**，在主臂配置中更新 **port**，并在 LeKiwi 配置中更新 **port**。在 [`LeKiwiRobotConfig`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/robots/configs.py) 文件中，您会看到如下内容：
```python
@RobotConfig.register_subclass("lekiwi")
@dataclass
class LeKiwiRobotConfig(RobotConfig):
    # `max_relative_target` 限制了相对位置目标向量的大小，以确保安全。
    # 将其设置为一个正标量以对所有电机使用相同的值，或者设置为一个列表，其长度与跟随臂中的电机数量相同。
    max_relative_target: int | None = None

    # 网络配置
    ip: str = "172.17.133.91"
    port: int = 5555
    video_port: int = 5556

    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "mobile": OpenCVCameraConfig(camera_index="/dev/video0", fps=30, width=640, height=480),
            "mobile2": OpenCVCameraConfig(camera_index="/dev/video2", fps=30, width=640, height=480),
        }
    )

    calibration_dir: str = ".cache/calibration/lekiwi"

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/tty.usbmodem585A0077581",
                motors={
                    # 名称: (索引, 型号)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",
                motors={
                    # 名称: (索引, 型号)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                    "left_wheel": (7, "sts3215"),
                    "back_wheel": (8, "sts3215"),
                    "right_wheel": (9, "sts3215"),
                },
            ),
        }
    )

    teleop_keys: dict[str, str] = field(
        default_factory=lambda: {
            # 移动
            "forward": "w",
            "backward": "s",
            "left": "a",
            "right": "d",
            "rotate_left": "z",
            "rotate_right": "x",
            # 速度控制
            "speed_up": "r",
            "speed_down": "f",
            # 退出遥控
            "quit": "q",
        }
    )

    mock: bool = False
```

## 有线版本

对于有线的 LeKiwi 版本，您配置的 IP 地址应指向您自己的笔记本电脑（127.0.0.1），因为在这种情况下，主控臂和 LeKiwi 都连接到自己的笔记本电脑。以下是此有线设置的示例配置：
```python
@RobotConfig.register_subclass("lekiwi")
@dataclass
class LeKiwiRobotConfig(RobotConfig):
    # `max_relative_target` 限制了相对位置目标向量的大小，以确保安全。
    # 将其设置为一个正标量以为所有电机设置相同的值，或者设置为一个列表，其长度与从动臂中的电机数量相同。
    max_relative_target: int | None = None

    # 网络配置
    ip: str = "127.0.0.1"
    port: int = 5555
    video_port: int = 5556

    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "front": OpenCVCameraConfig(
                camera_index=0, fps=30, width=640, height=480, rotation=90
            ),
            "wrist": OpenCVCameraConfig(
                camera_index=1, fps=30, width=640, height=480, rotation=180
            ),
        }
    )

    calibration_dir: str = ".cache/calibration/lekiwi"

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/tty.usbmodem585A0077581",
                motors={
                    # 名称: (索引, 型号)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/tty.usbmodem58760431061",
                motors={
                    # 名称: (索引, 型号)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                    "left_wheel": (7, "sts3215"),
                    "back_wheel": (8, "sts3215"),
                    "right_wheel": (9, "sts3215"),
                },
            ),
        }
    )

    teleop_keys: dict[str, str] = field(
        default_factory=lambda: {
            # 移动
            "forward": "w",
            "backward": "s",
            "left": "a",
            "right": "d",
            "rotate_left": "z",
            "rotate_right": "x",
            # 速度控制
            "speed_up": "r",
            "speed_down": "f",
            # 退出遥控
            "quit": "q",
        }
    )

    mock: bool = False
```


## 校准
现在我们需要校准主控臂和从动臂。轮子电机无需校准。

### 校准从动臂（安装在移动底座上）

在您的电脑上运行以下命令以校准主控机器人臂。注意：这里显示的图片是 SO101 型号的示例。

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_leader"]'
```

| **主控中间位置** | **主控零位位置** | **主控旋转位置** | **主控休息位置** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig8](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_middle.webp) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_zero.webp) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rotated.webp) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rest.webp) |

现在在您的 Raspberry Pi 上运行以下命令以校准 LeKiwi 上的从动臂。忽略它当前在桌上的位置——正常校准应在安装到车辆上时进行。

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_follower"]'
```

| **从动中间位置** | **从动零位位置** | **从动旋转位置** | **从动休息位置** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig7](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_middle.webp) | ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_zero.webp) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rotated.webp) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rest.webp) |

# F. 远程操作

> [!TIP]
> 如果您使用的是 Mac，可能需要授予终端访问键盘的权限。请前往系统偏好设置 > 安全与隐私 > 输入监控，并勾选终端的选项。

要进行远程操作，请通过 SSH 登录到您的 Raspberry Pi，并运行以下命令激活环境 `conda activate lerobot`，然后运行以下脚本：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=remote_robot
```

接着，在您的笔记本电脑上，也运行以下命令激活环境 `conda activate lerobot`，然后运行以下脚本：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=teleoperate \
  --control.fps=30
```

> **注意:** 如果需要可视化数据，请启用 `--control.display_data=true`。这将使用 `rerun` 流式传输数据。对于 `--control.type=remote_robot`，您还需要设置 `--control.viewer_ip` 和 `--control.viewer_port`。

您应该在笔记本电脑上看到类似以下的信息：```[INFO] Connected to remote robot at tcp://172.17.133.91:5555 and video stream at tcp://172.17.133.91:5556.``` 现在，您可以移动主控臂并使用键盘（w,a,s,d）进行前进、左转、后退、右转操作。使用（z,x）进行左转或右转。使用（r,f）来增加或减少移动机器人的速度。机器人有三种速度模式，详见下表：

| 速度模式 | 线速度 (m/s) | 旋转速度 (度/秒) |
| -------- | ------------ | ---------------- |
| 快速     | 0.4          | 90               |
| 中速     | 0.25         | 60               |
| 慢速     | 0.1          | 30               |

| 按键 | 动作           |
| ---- | -------------- |
| W    | 前进           |
| A    | 左移           |
| S    | 后退           |
| D    | 右移           |
| Z    | 左转           |
| X    | 右转           |
| R    | 增加速度       |
| F    | 减少速度       |

> [!TIP]
> 如果您使用不同的键盘，可以在 `LeKiwiRobotConfig` 中更改每个命令的按键设置。

### 有线版本
如果您使用的是 **有线** LeKiwi 版本，请在笔记本电脑上运行所有命令，包括这两个远程操作命令。

## 通信故障排查

如果您在连接移动机器人 SO100 时遇到问题，请按照以下步骤诊断并解决问题。

### 1. 验证 IP 地址配置
确保配置文件中设置了正确的 Raspberry Pi IP 地址。要检查 Raspberry Pi 的 IP 地址，请运行以下命令（在 Pi 的命令行中）：
```bash
hostname -I
```

### 2. 检查笔记本电脑/PC 是否能访问 Pi
尝试从笔记本电脑 ping Raspberry Pi：
```bash
ping <your_pi_ip_address>
```

如果 ping 失败：
- 确保 Pi 已开机并连接到同一网络。
- 检查 Pi 上是否启用了 SSH。

### 3. 尝试 SSH 连接
如果无法通过 SSH 登录到 Pi，可能是连接不正确。请使用以下命令：
```bash
ssh <your_pi_user_name>@<your_pi_ip_address>
```
如果出现连接错误：
- 确保 Pi 上启用了 SSH，可以运行以下命令：
  ```bash
  sudo raspi-config
  ```
  然后导航到：**Interfacing Options -> SSH** 并启用它。

### 4. 配置文件一致性
确保笔记本电脑/PC 和 Raspberry Pi 上的配置文件完全一致。

# G. 记录数据集
在熟悉远程操作后，您可以使用 LeKiwi 记录您的第一个数据集。

要在 LeKiwi 上启动程序，请通过 SSH 连接到您的 Raspberry Pi，并运行以下命令以激活环境并启动脚本：
```bash
conda activate lerobot
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=remote_robot
```

如果您希望使用 Hugging Face hub 功能上传数据集，并且之前尚未登录，请确保使用写入权限的令牌登录，该令牌可以从 [Hugging Face 设置](https://huggingface.co/settings/tokens) 中生成：
```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

将您的 Hugging Face 仓库名称存储在变量中以运行以下命令：
```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```
然后在您的笔记本电脑上运行以下命令以记录 2 个回合并将数据集上传到 hub：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="抓取一个乐高积木并将其放入垃圾桶。" \
  --control.repo_id=${HF_USER}/lekiwi_test \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=2 \
  --control.push_to_hub=true
```

注意：您可以通过添加 `--control.resume=true` 来继续记录。

### 有线版本
如果您使用的是 **有线** LeKiwi 版本，请在您的笔记本电脑上运行所有命令，包括上述记录数据集的命令。

# H. 可视化数据集

如果您使用 `--control.push_to_hub=true` 上传了数据集，可以通过 [在线可视化您的数据集](https://huggingface.co/spaces/lerobot/visualize_dataset)，复制并粘贴以下命令生成的仓库 ID：
```bash
echo ${HF_USER}/lekiwi_test
```

如果您没有使用 `--control.push_to_hub=false` 上传数据集，也可以在本地进行可视化（浏览器窗口可以通过 `http://127.0.0.1:9090` 打开可视化工具）：
```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/lekiwi_test \
  --local-files-only 1
```

# I. 回放一个回合
现在尝试在您的机器人上回放第一个回合：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=${HF_USER}/lekiwi_test \
  --control.episode=0
```

## J. 训练策略

要训练控制机器人策略，请使用 `python lerobot/scripts/train.py` 脚本。需要提供一些参数。以下是示例命令：
```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/lekiwi_test \
  --policy.type=act \
  --output_dir=outputs/train/act_lekiwi_test \
  --job_name=act_lekiwi_test \
  --policy.device=cuda \
  --wandb.enable=true
```

以下是命令的解释：
1. 我们通过 `--dataset.repo_id=${HF_USER}/lekiwi_test` 提供了数据集作为参数。
2. 我们通过 `policy.type=act` 提供了策略。这会从 `configuration_act.py` 加载配置。重要的是，该策略会自动适应您的机器人（例如 `laptop` 和 `phone`）的数据集中保存的电机状态、电机动作和摄像头数量。
3. 我们通过 `policy.device=cuda` 指定在 Nvidia GPU 上训练，但您也可以使用 `policy.device=mps` 在 Apple Silicon 上训练。
4. 我们通过 `wandb.enable=true` 启用了 [Weights and Biases](https://docs.wandb.ai/quickstart) 用于可视化训练图表。这是可选的，但如果您使用它，请确保通过运行 `wandb login` 登录。

训练可能需要几个小时。您将在 `outputs/train/act_lekiwi_test/checkpoints` 中找到检查点文件。

## K. 评估你的策略

你可以使用 `lerobot/scripts/control_robot.py` 中的 `record` 函数，但需要提供策略检查点作为输入。例如，运行以下命令记录 10 个评估回合：
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="驱动到红色方块并拾取它" \
  --control.repo_id=${HF_USER}/eval_act_lekiwi_test \
  --control.tags='["教程"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=10 \
  --control.push_to_hub=true \
  --control.policy.path=outputs/train/act_lekiwi_test/checkpoints/last/pretrained_model
```

如你所见，这几乎与之前用于记录训练数据集的命令相同。两点有所不同：
1. 增加了一个 `--control.policy.path` 参数，用于指示策略检查点的路径（例如 `outputs/train/eval_act_lekiwi_test/checkpoints/last/pretrained_model`）。如果你已将模型检查点上传到 Hub，也可以使用模型仓库路径（例如 `${HF_USER}/act_lekiwi_test`）。
2. 数据集的名称以 `eval` 开头，以反映你正在运行推理（例如 `${HF_USER}/eval_act_lekiwi_test`）。

## 帮助 🙋‍

对于硬件问题，请联系客户服务。对于使用问题，请加入 Discord。

[LeRobot 平台](https://github.com/huggingface/lerobot) 

[LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>