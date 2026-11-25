---
title: "reBot-DM Holoscan5 重力补偿"
sidebar_label: "reBot-DM Holoscan5 重力补偿"
description: "在 Ubuntu 24.04 上运行 NVIDIA Holoscan 5 官方示例，验证 reBot Arm B601-DM 的重力补偿，并用 Nsight Systems 测量控制循环。"
keywords:
  - reBot Arm B601-DM
  - NVIDIA Holoscan
  - 重力补偿
  - Pinocchio
slug: /rebot_b601_dm_holoscan_gravity_compensation
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

运行 NVIDIA 的重力补偿示例后，你可以用手引导 **reBot Arm B601-DM** 换姿态，电机根据当前关节角度补偿机械臂自身的重量。本文从 Ubuntu 环境开始，依次完成模型下载、软件验证、串口配置和实机运行。最后可用 Nsight Systems 对比绑核前后的主机控制延迟。[NVIDIA 技术博客](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/)

## 准备工作

| 项目 | 要求 |
| --- | --- |
| 机械臂 | 达妙电机版 reBot Arm B601-DM，含已安装的夹爪 |
| 连接 | B601-DM 配套电源、USB-CAN 控制板及可传数据的 USB 线 |
| 主机 | Ubuntu 24.04 x86_64，联网以下载源码和依赖 |
| 运行环境 | Python 3.12、Holoscan 5.0.0、兼容 CUDA 13 的 NVIDIA 驱动 |

如果机械臂还未完成组装，先按照快速入门固定底座、完成接线，并核对电机 ID 和关节零点。连接或拆卸电源、CAN 线束前先断电。[B601-DM 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/)

在主机上检查系统和驱动。

```bash
uname -m
getconf GNU_LIBC_VERSION
nvidia-smi
```

这里应看到 `x86_64`、glibc 2.39 或更新版本，以及能识别 GPU 的 `nvidia-smi` 输出。NVIDIA 为 Holoscan 5 指定兼容 CUDA 13 的 R580 或更新驱动。若驱动缺失或过旧，先用 Ubuntu 的“附加驱动”或 `sudo ubuntu-drivers list` 查看适用于当前硬件的分支，按 Ubuntu 指南安装兼容版本，重启后再检查。Jetson 请先核对对应 JetPack SDK 版本。[Holoscan SDK 安装要求](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Ubuntu NVIDIA 驱动安装](https://ubuntu.com/server/docs/how-to/graphics/install-nvidia-drivers/)

:::tip

Ubuntu 22.04 默认使用 glibc 2.35。即使在 Conda 里安装了 Python 3.12，仍需在满足 glibc 要求的系统或容器内运行 Holoscan 5。本文命令使用 Ubuntu 24.04 原生 Python 环境。[Holoscan wheel 要求](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

:::

## 运行重力补偿

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### 安装环境并检查控制图

在 Bash 中下载 NVIDIA 的官方示例。固定版本便于与下文命令、配置和测试对应。

```bash
sudo apt update
sudo apt install -y ca-certificates git nano python3.12-venv libgl1 libglib2.0-0t64 libgomp1 psmisc

git clone https://github.com/nvidia-holoscan/holoscan-tutorials.git
cd holoscan-tutorials
git checkout --detach e79b1a662f358dca734d8a4426c0aeb60699e264
cd tutorials/rebot-gravity-compensation
```

任选一种方式创建 Python 3.12 环境。

<Tabs>
<TabItem value="venv" label="Python venv">

```bash
python3.12 -m venv .venv
source .venv/bin/activate
```

</TabItem>
<TabItem value="conda" label="Conda">

已有 Conda 时，可使用独立环境。环境名称可自行替换。[Conda 安装说明](https://docs.conda.io/projects/conda/en/stable/user-guide/install/linux.html)

```bash
conda create -n holoscan-rebot python=3.12 pip -y
conda activate holoscan-rebot
```

</TabItem>
</Tabs>

保持在示例目录并激活环境。下载模型并安装示例依赖。

```bash
python --version
python scripts/fetch-urdf.py
test -s urdf/DM/urdf/ReBot_Arm_DM.urdf

python -m pip install --only-binary=:all: -r requirements-python.txt \
  'holoscan==5.0.0' 'nvidia-cuda-runtime==13.0.96'
python -m pip check
```

模型脚本会从 Seeed Studio 的固定版本提取 URDF，校验源文件并保留动力学数据。依赖清单会安装 Pinocchio 3.9.0 和 motorbridge 0.5.0。Pinocchio 对应的 pip 包名是 `pin`，Python 导入名是 `pinocchio`。[官方示例源码和依赖](https://github.com/nvidia-holoscan/holoscan-tutorials/tree/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation)

控制图在 CPU 上运行，Holoscan 导入时仍会加载 CUDA 运行库。以下命令将 wheel 内的共享库加入当前终端的搜索路径。以后新开终端时，回到示例目录，重新激活环境并执行这段命令。[Holoscan wheel 的运行库说明](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

```bash
CUDA_LIB_DIR="$(python - <<'PY'
from importlib.metadata import distribution

runtime = distribution("nvidia-cuda-runtime")
library = next(file for file in runtime.files if file.name == "libcudart.so.13")
print(runtime.locate_file(library).parent)
PY
)"
test -n "$CUDA_LIB_DIR" && export LD_LIBRARY_PATH="$CUDA_LIB_DIR${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
python python/gravity_compensation.py --help
```

接线前可以加载模型并编译控制图。此检查只执行模型初始化和编译，不打开串口或使能电机。

```bash
PYTHONPATH=python python - <<'PY'
import holoscan as hsdk
from gravity_compensation import build_graph, load_configuration
from rebot_gravity import GravityCompensation
from rebot_robot import Robot

config, params = load_configuration("config/rebotarm_dm.yaml")
controller = GravityCompensation(config, params)
controller.initialize()
plan = hsdk.compile(build_graph(Robot(config), controller), hsdk.CompileOptions())
if not plan:
    raise SystemExit(plan.summary())
print(f"URDF loaded: nq={controller.model.nq}, nv={controller.model.nv}")
print("Control graph compiled successfully.")
PY
```

预期看到 `nq=8, nv=8` 和编译成功提示。模型含六个手臂坐标和两个手指坐标，实机共有七个电机。需要完整软件回归时，可继续运行后文的假电机测试。

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### 连接机械臂并配置串口

确认底座固定，接好 USB 数据线并给机械臂上电。运行以下命令，为串口设备授予读写权限。

```bash
sudo chmod 666 /dev/ttyACM*
```

复制官方配置，在副本中修改 `channel`。示例中的路径需换成你的实际串口。

```bash
cp config/rebotarm_dm.yaml config/rebotarm_local.yaml
nano config/rebotarm_local.yaml
```

```yaml
channel: "/dev/ttyACM0"
```

| 配置项 | 官方示例值 |
| --- | --- |
| 电机 ID、反馈 ID | 1–7、17–23，均用十进制 |
| 电机型号 | `joint1`–`joint3` 为 `4340P`，`joint4`–`joint6` 和夹爪为 `4310` |
| 串口波特率 | 921600 |
| 手臂增益 | `kp: 1.5`、`kd: 1.0` |
| 重力缩放和方向 | 六个手臂关节的 `tau_scale` 和 `joint_direction` 默认都为 1 |
| 命令 watchdog | 100 ms |

首次运行保留官方增益、方向和缩放。若 ID、安装方向或零点与实际硬件不符，先按快速入门核对。更改基座朝向或加装负载后，需要对应的动力学模型。[官方电机配置](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/config/rebotarm_dm.yaml)

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### 启动、验证并退出

:::warning

运行命令会使能真实电机。请卸下额外负载，清理运动范围，把手臂放在失去力矩后仍有支撑的姿态，并确保现场可以及时断电。故障退出也可能撤掉支撑力矩。

:::

在同一个环境中运行。确保串口只由当前控制器使用。

```bash
unset MOTORBRIDGE_LIB
python python/gravity_compensation.py config/rebotarm_local.yaml
```

程序检查模型、当前姿态和电机状态，配置 watchdog 后开始发命令。看到下面的提示后，缓慢用手引导机械臂做小幅移动，确认它能支撑自重、随手移动。出现明显顶手、下坠、振荡或电机错误时，先支撑手臂并停机，再排查。

```text
Gravity compensation active.
```

**正常退出时，先把机械臂手动放回有支撑的位置，再按 `Ctrl+C`。** 程序退出时会尝试失能电机，支撑力矩随之撤去。正常结束时终端显示停止和命令批次数。

</div>
</section>
</div>

## 控制循环如何工作

| 算子 | 职责 |
| --- | --- |
| `joint_feedback` | 每 2.5 ms 调度一次，读取关节位置、速度和电机状态 |
| `gravity` | 用 URDF 和当前关节角计算重力前馈力矩，并生成刚度和阻尼参数 |
| `motor_commands` | 校验命令，再通过 motorbridge 向七个电机发送 MIT 控制命令 |

三个算子在同一个 Holoscan `control` 分区中依次执行，中间队列各保留一条待处理消息。Pinocchio 使用 `g(q) = RNEA(q, 0, 0)` 得到重力项。400 Hz 是调度目标，实际控制间隔可通过 Nsight Systems 查看。

watchdog 监控命令批次是否超时。motorbridge 返回缓存的反馈，若电机反馈中断但命令仍可发送，示例可能继续读到旧值。实机测试应有人在现场观察。[官方技术指南](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#startup-watchdogs-and-feedback)

## 可选：用假电机运行官方测试

这两组测试分别检查重力力矩、控制图、故障退出和 Cartesian 点保持。复制以下命令前，先退出实机控制。可断开机械臂 USB，只在已激活环境的示例目录下执行。下面编译官方测试用的假电机库，无需安装 C++ SDK。

```bash
sudo apt install -y curl g++
mkdir -p build/wiki-test

curl -fL \
  https://raw.githubusercontent.com/motorbridge/motorbridge/082cbb8c36dfdc8fbf9baa4cc02c5992ab0dc2ad/motor_abi/include/motor_abi.h \
  -o build/wiki-test/motor_abi.h

g++ -std=c++20 -shared -fPIC -I build/wiki-test tests/fake_motor_abi.cpp \
  -o build/wiki-test/librebot_fake_motor_abi.so

REBOT_FAKE_ABI="$PWD/build/wiki-test/librebot_fake_motor_abi.so"
REBOT_TEST_MOTOR_LIBRARY="$REBOT_FAKE_ABI" python tests/test_python_gravity.py
REBOT_TEST_MOTOR_LIBRARY="$REBOT_FAKE_ABI" python tests/test_python_cartesian.py
```

固定版本应分别运行 20 项和 15 项测试，末尾显示 `OK`。其中的故障注入测试会输出预期的错误日志。通过测试说明软件路径可以工作，实机的接线、方向、零点和控制表现仍按第 2、3 步检查。

## 可选：用 Nsight Systems 对比绑核前后

安装 Nsight Systems，先执行 `nsys --version` 确认 CLI 可用。下面两轮采集都驱动实机。依次运行，每次启动前确认上一轮已退出，每次结束前把手臂放回有支撑的位置，再按 `Ctrl+C`。[Nsight Systems 下载](https://developer.nvidia.com/nsight-systems)

先采集默认的未绑核运行。

```bash
mkdir -p build/profiles
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-unpinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml
```

再查看可用的逻辑 CPU，从允许的编号中选一个。下面的 `2` 仅为示例。

```bash
lscpu -e=CPU,CORE,SOCKET,NODE
taskset -pc $$
REBOT_CPU=2
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-pinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml --cpu "$REBOT_CPU"
```

查看两个报告。重复实验时使用新的输出文件名。

```bash
nsys stats --report nvtx_sum build/profiles/gravity-unpinned.nsys-rep
nsys stats --report nvtx_sum build/profiles/gravity-pinned.nsys-rep
```

在 Nsight Systems GUI 中打开 `.nsys-rep`，沿时间线查看三个算子的 NVTX 区间。比较前尽量保持姿态、采样时长和主机负载一致。

| 指标 | 怎么看 |
| --- | --- |
| 单个算子耗时 | 看 `nvtx_sum` 中相应 NVTX 区间的统计 |
| 循环间隔与抖动 | 比较相邻两次 `joint_feedback` 入口的时间差，目标间隔为 2.5 ms |
| 图内延迟 | 按消息标记匹配同一轮，取 `joint_feedback` 入口到 `motor_commands` 入口的时间差，串口发送时间另算 |

要做批量分析，可将报告导出为 SQLite。先用 `nsys export --help` 检查是否支持 `--include-blobs`。旧版如未提供此选项，需升级 Nsight Systems 后再导出结构化消息载荷。关联同一条边上的发布与接收时，使用 `source_identity` 和 `sequence`，再沿计算算子的输入和输出追踪同一轮控制。[Holoscan NVTX 标记说明](https://docs.nvidia.com/holoscan/sdk-user-guide/5-0-latest/performance/nsight-profiling)

```bash
nsys export --type sqlite --include-blobs=true \
  -o build/profiles/gravity-pinned.sqlite build/profiles/gravity-pinned.nsys-rep
```

`--cpu` 只设置控制线程的亲和性。NVIDIA 原实验还隔离了物理核心及其 SMT 兄弟线程，丢弃预热的 10 秒，每组保留超过一百万轮。复现实验时记录自己的采样量、CPU 拓扑和隔离条件。短时间跟踪适合先看控制图行为，尾延迟分位数应使用足够多的样本。[NVIDIA 原实验条件](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/#pinning-cores) · [消息关联说明](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#profiling-and-cpu-placement)

## 可选：构建 C++ 对照组

安装包含开发组件的 Holoscan SDK 5.0，以及 C++20 编译器、CMake 4 或更新版本、Ninja、Rust/Cargo 和 Python 3.12。NVIDIA 在该示例中使用了 SDK 构建 5.0.0.7。[SDK 安装说明](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [示例 C++ 构建说明](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#c-build)

在示例目录中运行以下命令。已经验证模型文件存在时，可以跳过第一行。

```bash
python3.12 scripts/fetch-urdf.py
./scripts/bootstrap-deps.sh
cmake --preset default
cmake --build --preset default
ctest --preset default
```

测试通过后，先按第 2、3 步检查实机和起始姿态，再用下面的命令替换 Python 启动命令。采集 C++ 性能时，在 Nsight 命令中替换可执行文件和输出名，保留相同的串口配置和对照条件。

```bash
./build/rebot_gravity_compensation config/rebotarm_local.yaml
```

## 常见问题

| 现象 | 处理 |
| --- | --- |
| pip 找不到 Holoscan wheel | 检查 `python --version`、`uname -m` 和 `getconf GNU_LIBC_VERSION`，回到兼容的 Python 和系统。 |
| 找不到 `libcudart.so.13` | 确认在当前 Python 环境安装了 CUDA runtime wheel，并重新设置 `LD_LIBRARY_PATH`。 |
| 找不到 `libcuda.so.1` | 检查系统 NVIDIA 驱动及 `nvidia-smi` 输出。CUDA runtime wheel 不提供主机驱动。 |
| URDF 找不到或 Pinocchio 导入失败 | 从示例目录重新运行模型脚本。检查当前环境中的 `pin` 版本和导入路径，避开另一个 Python 环境的 ROS 扩展。 |
| 打不开串口或端口被占用 | 检查 USB 数据线、`channel` 路径和串口读写权限。用 `fuser -v /dev/ttyACM0`（换成实际串口路径）查找占用进程，然后在原终端退出该进程。 |
| 电机缺少反馈或返回故障状态 | 先支撑机械臂并停止，核对电机 ID、供电、线束和固件说明。保存完整错误及关节编号，保持 watchdog 启用。 |
| 手臂下坠、顶手或振荡 | 先支撑并停机，检查基座朝向、零点、模型和负载。 |
| 指定 CPU 后无法编译或启动 | 用 `taskset -pc $$` 确认可用编号，或去掉 `--cpu` 恢复默认调度。 |
