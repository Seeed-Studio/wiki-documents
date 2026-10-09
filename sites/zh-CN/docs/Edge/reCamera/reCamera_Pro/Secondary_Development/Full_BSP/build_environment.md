---
description: Prepare and verify host dependencies for building the full source package.
title: BSP Build Environment
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_build_environment
sku: 10003420
sidebar_position: 3
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/recamera_pro_bsp_build_environment/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# BSP Build Environment

## One-Shot Installation Script

The SDK root contains `setup_build_env.sh` (the actual script is `project/setup_build_env.sh`, with a symbolic link at the root). It is **idempotent**: it does not reinstall or upgrade tools that are already installed at an acceptable version, so you can run it repeatedly.

```bash
cd recamera-pro-sdk-v1.0.10
./setup_build_env.sh             # Install all missing tools
./setup_build_env.sh --check     # Dry run: report missing tools without changing anything
./setup_build_env.sh --help      # Show script help
```

On the first run, use `--check` to see what is missing before deciding whether to install packages or access the network.

## Install Tools for Your Build Target

Tool requirements depend on what you plan to build. For a first full SDK build, using the script to install and check all dependencies is the easiest approach. If you are building only a C/C++ application, first check what its Makefile, linked libraries, and sysroot require, and install only those tools. Rust, Go, Node.js, and Docker are used by specific higher-level applications in the SDK; they are not universal prerequisites for building the kernel or every C program.

The script summarizes and checks the required tools. Its installation stages are:

| Stage | Contents | Used by |
| --- | --- | --- |
| Step 1 | Hardware checks: 64-bit CPU and free space on the SDK partition (≥20 GB; ≥100 GB recommended) | All builds |
| Step 2 | Basic build packages via `apt`: `repo git make gcc g++ cmake bison flex libssl-dev autoconf pkg-config python3 device-tree-compiler`, etc. | U-Boot / kernel / Buildroot / common application dependencies |
| Step 3 | Rust (`rustup` / `cargo`), Docker (≥27.0.0, and add the user to the `docker` group), `cross` (Rust cross-compilation helper), nvm / Node.js (≥18) | `recamera_services`, `recamera_web` |
| Step 4 | CMake ≥3.21, `libblkid-dev`, `libprotobuf-dev`, `protobuf-compiler` | `recamera_ipc`, `common/vigil` |
| Step 5 | Go ≥1.24.0, UPX | `recamera_go2rtc` and related applications |
| Step 6 | Print a version summary for all tools | All builds |

> Why does a “C SDK” check for Rust, Go, and Node.js? This is a complete product source package, not just C code. `recamera_services` uses Rust, go2rtc-related programs use Go, the Web frontend uses Node.js tooling, and the notification service uses Python. These tools are needed only when building the corresponding components. If a full build fails because a tool is missing, first identify which application failed. See the [reCamera Upper-Layer Service Architecture](/recamera_pro_bsp_services/) for the application list.

## Users and Permissions

- Run the script as a **regular user with sudo access**, or as root.
- When invoked as `sudo ./setup_build_env.sh`, user-level tools such as rustup, nvm, and Go configuration are installed for the real user identified by `$SUDO_USER`, not for root. This is intentional and avoids permission problems during later builds.

## Required Steps After Installation

1. If the script added the current user to the `docker` group, **log out and sign in again**, or run `newgrp docker` temporarily, for the change to take effect.
2. Open a new terminal or run `source ~/.bashrc` so the Go, cargo, and nvm PATH changes take effect.
3. Confirm that no required tool is marked `NOT INSTALLED` in the Step 6 version summary.

Verify the environment with:

```bash
./setup_build_env.sh --check
```

## Restricted Networks: Mirrors and Offline Packages

The script supports environment variables for overriding download sources:

| Environment variable | Overrides |
| --- | --- |
| `GO_MIRROR_BASE` | Go download base URL |
| `DOCKER_REPO_BASE` | Docker apt repository base URL |
| `CMAKE_BASE_URL` | CMake download base URL |
| `RUSTUP_DIST_SERVER` | rustup distribution server |

For example:

```bash
export GO_MIRROR_BASE=https://golang.google.cn/dl
export RUSTUP_DIST_SERVER=https://rsproxy.cn
./setup_build_env.sh
```

If you place the offline archive `go1.24.0.linux-*.tar.gz` in the **SDK root**, the script will use it to install Go before attempting a network download.

## Manual Installation (Without the Script)

If company policy does not allow running the installer, install at least:

```bash
sudo apt install -y build-essential git make cmake bison flex libssl-dev \
    autoconf pkg-config python3 device-tree-compiler libblkid-dev \
    libprotobuf-dev protobuf-compiler
```

Minimum version requirements:

- CMake ≥ 3.21 (`recamera_ipc` requires it in its CMakeLists)
- Docker ≥ 27.0.0 (required by the Rust `cross` cross-compiler)
- Node.js ≥ 18 (frontend build)
- Go ≥ 1.24.0 (go2rtc)

**You do not need to install the cross-toolchain manually.** The SDK includes it under `tools/linux/toolchain/`:

- `aarch64-rockchip1240-linux-gnu` (GCC 12.4.0, 64-bit; used by reCamera Pro)
- `arm-rockchip1240-linux-gnueabihf` (32-bit)

`project/app/Makefile.param` automatically adds `tools/linux/toolchain/<RK_TOOLCHAIN_CROSS>/bin` to `PATH`, so you do not need to modify the system PATH.

## Check Whether the Build Environment Is Ready

The SDK provides this check command:

```bash
./build.sh check
```

It checks dependencies for the component SDKs. After running `lunch`, `./build.sh info` also prints the current board configuration and all `RK_*` variables to help verify that the environment is loaded correctly.

> Note: `./build.sh --help` is **not** the help command. An unrecognized argument causes `build.sh` to show the board-selection menu. The usage information is in the `usage()` function in `project/build.sh`; it is also summarized in the command table in [First Full Build](/recamera_pro_bsp_full_build/).

## Common Installation Problems

| Symptom | Cause | Resolution |
| --- | --- | --- |
| `docker: permission denied` | The group change has not taken effect | Log out and back in, or run `newgrp docker` |
| `go: command not found` after installation | PATH has not been refreshed | Open a new terminal or run `source ~/.bashrc` |
| rustup download times out | Restricted network | Set `RUSTUP_DIST_SERVER` and run the installer again |
| Disk-space check fails | Less than 20 GB free on the partition | Use another partition or free space and retry; build outputs can require tens of GB more |
| `cross` build fails | Docker is not running | Run `sudo systemctl start docker` |
