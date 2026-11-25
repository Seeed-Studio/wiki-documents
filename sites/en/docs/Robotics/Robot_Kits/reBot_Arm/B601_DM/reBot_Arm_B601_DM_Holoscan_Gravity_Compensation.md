---
title: "reBot-DM Holoscan5 Gravity Compensation"
sidebar_label: "reBot-DM Holoscan5 Gravity Compensation"
description: "Run NVIDIA's Holoscan 5 example on Ubuntu 24.04 to verify gravity compensation on the reBot Arm B601-DM and measure its control loop with Nsight Systems."
keywords:
  - reBot Arm B601-DM
  - NVIDIA Holoscan
  - gravity compensation
  - Pinocchio
slug: /rebot_b601_dm_holoscan_gravity_compensation
translation:
  skip: [zh-CN]
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

NVIDIA's gravity compensation example lets you guide the **reBot Arm B601-DM** by hand while the motors support the arm's weight based on its current joint angles. This guide walks you through setting up Ubuntu, downloading the robot model, verifying the software, configuring the serial port, and running the example on the arm. You can then use Nsight Systems to compare host-side control latency with and without CPU pinning. [NVIDIA Technical Blog](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/)

## Prerequisites

| Item | Requirement |
| --- | --- |
| Robot arm | reBot Arm B601-DM with Damiao motors and the gripper installed |
| Connectivity | B601-DM power supply, USB-to-CAN controller board, and a USB data cable |
| Host | Ubuntu 24.04 x86_64 with internet access to download the source and dependencies |
| Runtime | Python 3.12, Holoscan 5.0.0, and an NVIDIA driver compatible with CUDA 13 |

If the arm is still unassembled, follow the quick start to secure the base, complete the wiring, and verify the motor IDs and joint zero positions. Turn off power before connecting or disconnecting the power or CAN harness. [B601-DM Quick Start](https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/)

Check the system and driver on the host.

```bash
uname -m
getconf GNU_LIBC_VERSION
nvidia-smi
```

Expect `x86_64`, glibc 2.39 or later, and `nvidia-smi` output that lists your GPU. NVIDIA specifies a CUDA 13-compatible R580 or later driver for Holoscan 5. If the driver is missing or too old, use Ubuntu's Additional Drivers utility or `sudo ubuntu-drivers list` to find a driver branch for your hardware. Follow Ubuntu's installation guide, reboot, and check again. On Jetson, first verify the corresponding JetPack SDK version. [Holoscan SDK installation requirements](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Installing NVIDIA drivers on Ubuntu](https://ubuntu.com/server/docs/how-to/graphics/install-nvidia-drivers/)

:::tip

Ubuntu 22.04 ships with glibc 2.35. Even with Python 3.12 installed in Conda, run Holoscan 5 on a host or in a container that meets its glibc requirement. The commands in this guide use Ubuntu 24.04's native Python environment. [Holoscan wheel requirements](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

:::

## Run gravity compensation

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Set up the environment and check the control graph

Download NVIDIA's example in Bash. Use the pinned revision so the commands, configuration, and tests below match the source.

```bash
sudo apt update
sudo apt install -y ca-certificates git nano python3.12-venv libgl1 libglib2.0-0t64 libgomp1 psmisc

git clone https://github.com/nvidia-holoscan/holoscan-tutorials.git
cd holoscan-tutorials
git checkout --detach e79b1a662f358dca734d8a4426c0aeb60699e264
cd tutorials/rebot-gravity-compensation
```

Choose one way to create a Python 3.12 environment.

<Tabs>
<TabItem value="venv" label="Python venv">

```bash
python3.12 -m venv .venv
source .venv/bin/activate
```

</TabItem>
<TabItem value="conda" label="Conda">

If you already have Conda, create a dedicated environment. You can choose a different environment name. [Conda installation guide](https://docs.conda.io/projects/conda/en/stable/user-guide/install/linux.html)

```bash
conda create -n holoscan-rebot python=3.12 pip -y
conda activate holoscan-rebot
```

</TabItem>
</Tabs>

Stay in the example directory with your environment active. Download the model and install the example's dependencies.

```bash
python --version
python scripts/fetch-urdf.py
test -s urdf/DM/urdf/ReBot_Arm_DM.urdf

python -m pip install --only-binary=:all: -r requirements-python.txt \
  'holoscan==5.0.0' 'nvidia-cuda-runtime==13.0.96'
python -m pip check
```

The download script retrieves the URDF from a pinned Seeed Studio revision, verifies the source file, and preserves the dynamics data. The requirements file installs Pinocchio 3.9.0 and motorbridge 0.5.0. Pinocchio's pip package is `pin`, and its Python import name is `pinocchio`. [Official example source and dependencies](https://github.com/nvidia-holoscan/holoscan-tutorials/tree/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation)

The control graph runs on the CPU, and importing Holoscan still loads the CUDA runtime. These commands add the shared libraries from the wheel to the current terminal's library search path. Whenever you open a new terminal, return to the example directory, reactivate your environment, and run these commands again. [Holoscan wheel runtime libraries](https://pypi.org/project/holoscan-core-cu13/5.0.0/)

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

Before connecting the arm, you can load the model and compile the control graph. This check initializes the model and compiles the graph without opening the serial port or enabling the motors.

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

Expect `nq=8, nv=8` and a successful compile message. The model has six arm coordinates and two finger coordinates. The physical arm has seven motors. For a fuller software regression check, run the fake-motor tests later in this guide.

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Connect the arm and configure the serial port

Make sure the base is secure, connect the USB data cable, and power on the arm. Run the following command to grant read and write access to the serial devices.

```bash
sudo chmod 666 /dev/ttyACM*
```

Copy the official configuration and edit `channel` in the copy. Replace the example path with your actual serial port.

```bash
cp config/rebotarm_dm.yaml config/rebotarm_local.yaml
nano config/rebotarm_local.yaml
```

```yaml
channel: "/dev/ttyACM0"
```

| Setting | Official example value |
| --- | --- |
| Motor IDs and feedback IDs | 1–7 and 17–23, respectively, in decimal |
| Motor models | `4340P` for `joint1`–`joint3`, and `4310` for `joint4`–`joint6` and the gripper |
| Serial baud rate | 921600 |
| Arm gains | `kp: 1.5` and `kd: 1.0` |
| Gravity torque scale and joint direction | `tau_scale` and `joint_direction` both default to 1 for all six arm joints |
| Command watchdog | 100 ms |

Keep the official gains, directions, and scaling for the first run. If the motor IDs, mounting orientations, or joint zero positions differ from the actual hardware, verify them against the quick start first. If you change the base orientation or add a payload, use a dynamics model that accounts for the change. [Official motor configuration](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/config/rebotarm_dm.yaml)

</div>
</section>
<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Start, verify, and stop the controller

:::warning

The start command enables the physical motors. Remove any extra payload, clear the range of motion, and put the arm in a position where it stays supported if torque is lost. Make sure someone on site can cut power promptly. A fault can also cause the controller to remove support torque.

:::

Run the commands in the same environment. Make sure the controller has exclusive access to the serial port.

```bash
unset MOTORBRIDGE_LIB
python python/gravity_compensation.py config/rebotarm_local.yaml
```

The program checks the model, current pose, and motor state, then configures the watchdog and starts sending commands. Once you see the message below, slowly guide the arm through a small movement. Check that it supports its weight and moves with your hand. If it pushes back noticeably, drops, oscillates, or reports a motor error, support the arm and stop the controller before troubleshooting.

```text
Gravity compensation active.
```

**To shut down normally, first guide the arm back to a supported position, then press `Ctrl+C`.** The program attempts to disable the motors as it exits, which removes the support torque. On a normal exit, the terminal shows a stop message and the command batch count.

</div>
</section>
</div>

## How the control loop works

| Operator | Role |
| --- | --- |
| `joint_feedback` | Runs on a 2.5 ms schedule and reads joint positions, velocities, and motor status |
| `gravity` | Computes feedforward gravity torque from the URDF and current joint angles and generates stiffness and damping parameters |
| `motor_commands` | Validates commands and sends MIT control commands to all seven motors through motorbridge |

The three operators execute in sequence in the same Holoscan `control` partition. Each queue between operators holds one pending message. Pinocchio computes the gravity term as `g(q) = RNEA(q, 0, 0)`. The scheduling target is 400 Hz. Use Nsight Systems to measure the actual interval between iterations.

The watchdog checks for overdue command batches. motorbridge returns cached feedback. If motor feedback stops while commands can still be sent, the example may continue to read stale values. Have someone monitor the arm on site during hardware tests. [Official technical guide](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#startup-watchdogs-and-feedback)

## Optional fake-motor tests

The two official test suites cover gravity torque, the control graph, shutdown on fault, and Cartesian point hold. Stop the hardware controller before running the following commands. You can unplug the arm's USB cable for these tests. Run them from the example directory with the environment active. The commands build the fake motor library used by the tests without requiring the C++ SDK.

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

At the pinned revision, expect 20 tests in the first suite and 15 in the second, each ending with `OK`. The fault-injection tests produce expected error logs. Passing these tests verifies the software path. Follow Steps 2 and 3 to check the wiring, motor directions, joint zero positions, and behavior on the physical arm.

## Optional CPU pinning comparison with Nsight Systems

Install Nsight Systems and run `nsys --version` to check that the CLI is available. Both profiling runs drive the physical arm. Run them one at a time and confirm that the previous process has stopped before starting another. At the end of each run, return the arm to a supported position before pressing `Ctrl+C`. [Nsight Systems download](https://developer.nvidia.com/nsight-systems)

First, capture a run with the default scheduling and no CPU pinning.

```bash
mkdir -p build/profiles
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-unpinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml
```

Next, check which logical CPUs are available and choose an allowed CPU number. The value `2` below is an example.

```bash
lscpu -e=CPU,CORE,SOCKET,NODE
taskset -pc $$
REBOT_CPU=2
nsys profile --trace=nvtx --sample=none --backtrace=none --cpuctxsw=none \
  --output=build/profiles/gravity-pinned \
  python python/gravity_compensation.py config/rebotarm_local.yaml --cpu "$REBOT_CPU"
```

Inspect both reports. Use new output filenames for repeat runs.

```bash
nsys stats --report nvtx_sum build/profiles/gravity-unpinned.nsys-rep
nsys stats --report nvtx_sum build/profiles/gravity-pinned.nsys-rep
```

Open the `.nsys-rep` reports in the Nsight Systems GUI and inspect the NVTX ranges for the three operators on the timeline. Keep the arm pose, capture duration, and host load as consistent as possible across both runs.

| Metric | How to measure it |
| --- | --- |
| Operator duration | Check the statistics for the corresponding NVTX range in `nvtx_sum`. |
| Loop interval and jitter | Compare successive `joint_feedback` entry timestamps. The target interval is 2.5 ms. |
| In-graph latency | Use message markers to match events from the same iteration, then measure from entry into `joint_feedback` to entry into `motor_commands`. Measure serial transmission separately. |

For batch analysis, export the report to SQLite. Run `nsys export --help` to check for `--include-blobs`. If the option is missing, upgrade Nsight Systems before exporting structured message payloads. To match publish and receive events on the same edge, use `source_identity` and `sequence`. Then follow the operator's input and output to trace the same control iteration. [Holoscan NVTX annotations](https://docs.nvidia.com/holoscan/sdk-user-guide/5-0-latest/performance/nsight-profiling)

```bash
nsys export --type sqlite --include-blobs=true \
  -o build/profiles/gravity-pinned.sqlite build/profiles/gravity-pinned.nsys-rep
```

`--cpu` sets affinity only for the control thread. NVIDIA also isolated a physical core and its SMT sibling, discarded the first 10 seconds as warm-up, and kept more than one million iterations per run. Record your own sample count, CPU topology, and isolation settings when reproducing the experiment. Use a short trace to inspect graph behavior and a sufficiently large sample for tail-latency percentiles. [NVIDIA's benchmark conditions](https://developer.nvidia.com/blog/make-a-robot-arm-feel-weightless-with-nvidia-holoscan-5/#pinning-cores) · [Message correlation guide](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#profiling-and-cpu-placement)

## Optional C++ comparison

Install Holoscan SDK 5.0 with its development components, a C++20 compiler, CMake 4 or later, Ninja, Rust/Cargo, and Python 3.12. NVIDIA used SDK build 5.0.0.7 for this example. [SDK installation guide](https://docs.nvidia.com/holoscan/sdk-user-guide/setup/sdk-installation) · [Example C++ build instructions](https://github.com/nvidia-holoscan/holoscan-tutorials/blob/e79b1a662f358dca734d8a4426c0aeb60699e264/tutorials/rebot-gravity-compensation/docs/technical-guide.md#c-build)

Run these commands from the example directory. If you have already verified that the model file exists, skip the first line.

```bash
python3.12 scripts/fetch-urdf.py
./scripts/bootstrap-deps.sh
cmake --preset default
cmake --build --preset default
ctest --preset default
```

After the tests pass, use Steps 2 and 3 to check the hardware and starting pose. Then use the following command in place of the Python launch command. To profile C++ with Nsight Systems, change the executable and the output name in the profiling commands. Keep the serial configuration and comparison conditions the same.

```bash
./build/rebot_gravity_compensation config/rebotarm_local.yaml
```

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| pip cannot find the Holoscan wheel | Check `python --version`, `uname -m`, and `getconf GNU_LIBC_VERSION`, then use a compatible Python version and system. |
| `libcudart.so.13` is missing | Check that the CUDA runtime wheel is installed in the active Python environment and set `LD_LIBRARY_PATH` again. |
| `libcuda.so.1` is missing | Check the host's NVIDIA driver and `nvidia-smi` output. The CUDA runtime wheel does not include the host driver. |
| The URDF is missing or Pinocchio fails to import | Rerun the model download script from the example directory. Check the `pin` version and import path in the active environment. Avoid loading ROS extensions from a different Python environment. |
| The serial port fails to open or is busy | Check the USB data cable, the `channel` path, and the serial port permissions. Use `fuser -v /dev/ttyACM0` with your actual device path to identify the process using the port, then stop it from its original terminal. |
| A motor stops reporting feedback or reports a fault | Support the arm and stop the controller first. Verify the motor IDs, power supply, wiring, and firmware instructions. Save the full error and joint number, and keep the watchdog enabled. |
| The arm drops, pushes back, or oscillates | Support the arm and stop the controller first. Check the base orientation, joint zero positions, model, and payload. |
| The graph fails to compile or start with a CPU specified | Run `taskset -pc $$` to check which CPUs are allowed, or remove `--cpu` to restore default scheduling. |
