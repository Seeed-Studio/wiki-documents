---
description: Install the reCamera Pro cross-compilation SDK, build a small C++ program for RV1126B, check the binary, and run it on the device.
title: Set Up the reCamera Pro Cross-Compilation SDK
keywords:
  - reCamera Pro
  - RV1126B
  - SDK
  - cross-compilation
  - CMake
  - RKNN
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_setup
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/12/2026
  author: Seeed Studio
url: https://wiki.seeedstudio.com/recamera_pro_sdk_setup/
createdAt: '2026-09-21'
updatedAt: '2026-10-12'
---

# Set Up the reCamera Pro Cross-Compilation SDK

This guide uses the [reCamera Pro cross-compilation SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain) to build a small C++ program on a Linux PC or in WSL, then run it on reCamera Pro. You will install the compiler and target libraries, build the example, check that it is an ARM 64-bit program, and copy it to the camera.

> This SDK is for reCamera Pro with the Rockchip RV1126B processor. It does not work with the SG2002/RISC-V reCamera.

## What you need

- reCamera Pro running its production firmware
- A Linux PC or Windows PC with WSL 2 and Ubuntu
- Network access from the host to GitHub Releases to download the SDK assets (about 2.5 GB installed)
- CMake, Ninja, and `pkg-config`
- SSH access to the reCamera Pro for the deployment step

The SDK targets 64-bit ARM Linux and provides the Rockchip GCC 12.4.0 compiler, target sysroot, GStreamer 1.22 development files, and RKNN API/runtime 2.3.2. Model conversion is separate: convert ONNX models on an x86_64 host with RKNN-Toolkit2 2.3.2 and `target_platform='rv1126b'`.

## 1. Install the SDK

Install the host tools and clone the SDK repository:

```bash
sudo apt update
sudo apt install -y git cmake ninja-build pkg-config
git clone https://github.com/Seeed-Projects/recamera_pro_toolchain.git
cd recamera_pro_toolchain
```

Download and verify the versioned compiler and sysroot, then load the SDK environment:

```bash
./scripts/setup.sh
source scripts/env.sh
bash scripts/check-sdk.sh
```

`setup.sh` installs the SDK assets into the repository's `toolchain/` and `sysroot/` directories and checks their SHA-256 checksums. The download can take time on a slow connection. Run `source scripts/env.sh` again in each new terminal before configuring a project.

## 2. Build the included SDK example

First build the included smoke test. It links against RKNN Runtime, OpenCV, and GStreamer, so it checks that the SDK can find the main target libraries.

From the repository root:

```bash
source scripts/env.sh
cmake -S examples/sdk_smoke -B examples/sdk_smoke/build -G Ninja
cmake --build examples/sdk_smoke/build
```

The executable is written under `examples/sdk_smoke/build/`. If CMake previously configured this build directory with your host compiler, remove that build directory and configure it again before building with the SDK.

## 3. Build a small C++ application

You can use the SDK with your own CMake project. Create a project directory alongside `recamera_pro_toolchain`:

```bash
mkdir -p ~/my-recamerapro-app
cd ~/my-recamerapro-app
```

Create `main.cpp`:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello from reCamera Pro" << std::endl;
    return 0;
}
```

Create `CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.16)
project(my_recamera_app LANGUAGES CXX)

add_executable(my_recamera_app main.cpp)
```

Load the SDK environment, then configure and build. Replace the path below if you cloned the SDK somewhere else:

```bash
cd ~/my-recamerapro-app
source ~/recamera_pro_toolchain/scripts/env.sh
cmake -S . -B build -G Ninja
cmake --build build
```

The environment selects the aarch64 cross-compiler and target sysroot for CMake. For projects that use RKNN or GStreamer, follow the SDK repository's [CMake integration example](https://github.com/Seeed-Projects/recamera_pro_toolchain#minimal-cmake-integration) to find and link the target libraries.

## 4. Check the executable

Before copying the program to the camera, confirm that it was built for the right processor and does not contain a host path:

```bash
file build/my_recamera_app
source ~/recamera_pro_toolchain/scripts/env.sh
"${CROSS_COMPILE}readelf" -l build/my_recamera_app | grep interpreter
"${CROSS_COMPILE}readelf" -d build/my_recamera_app | grep -E 'NEEDED|RPATH|RUNPATH'
```

Check for these results:

- `file` reports ARM aarch64, not x86-64 or RISC-V.
- The ELF interpreter is `/lib/ld-linux-aarch64.so.1`.
- Any runtime search path points to `/oem/usr/lib`; it does not contain a host or WSL path.

The SDK toolchain file sets the device runtime path to `/oem/usr/lib`. Do not add an absolute path from your host, SDK directory, or build directory to the executable.

## 5. Copy and run it on reCamera Pro

Connect to the camera over USB virtual Ethernet or your LAN. Replace `192.168.42.1` below if your camera uses a different IP address. Create a directory for the program and copy the executable:

```bash
ssh root@192.168.42.1 'mkdir -p /userdata/my-recamerapro-app'
scp build/my_recamera_app root@192.168.42.1:/userdata/my-recamerapro-app/
ssh root@192.168.42.1
```

On the camera, run it:

```bash
cd /userdata/my-recamerapro-app
chmod +x my_recamera_app
./my_recamera_app
```

Expected output:

```text
Hello from reCamera Pro
```

Copy only your application and its required assets. Do not overwrite `/oem/usr/lib/librknnrt.so`; the SDK's RKNN Runtime is used for linking and has been checked against the production device runtime.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| `setup.sh` cannot download an asset | Check the host's internet connection and rerun `./scripts/setup.sh`. The script verifies downloaded checksums. |
| CMake selects the host compiler | Run `source scripts/env.sh` in the same terminal, use a fresh build directory, and configure again. |
| `pkg-config` finds host libraries | Load `scripts/env.sh` before configuring; it points `pkg-config` at the SDK sysroot. |
| `Exec format error` on the device | Run `file` on the executable and confirm it reports ARM aarch64. |
| A shared library is missing at runtime | Check the executable's `NEEDED` entries and confirm the required library exists in the device firmware. Do not copy host libraries onto the device. |

The SDK sysroot uses a libc with symbols through GLIBC 2.38. Check the firmware ABI before claiming compatibility with a different firmware version. A successful cross-build confirms compilation and linking; it does not verify camera operation, model accuracy, or runtime behavior for your application.

## Next steps

- [reCamera Pro SDK repository](https://github.com/Seeed-Projects/recamera_pro_toolchain) — SDK setup scripts, CMake integration, and the `sdk_smoke` example
- [Camera, Audio, and Inference Development](/recamera_pro_media_dev/) — GStreamer camera capture, audio, and RTSP
- [Choose a Development Path](/recamera_pro_dev_path/) — select a development workflow for your project

## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with various support to ensure your experience with our products is as smooth as possible. You can choose the channel that works best for you.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
