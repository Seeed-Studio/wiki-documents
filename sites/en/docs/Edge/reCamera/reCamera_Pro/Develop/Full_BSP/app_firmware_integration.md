---
description: Add an application to the full BSP source, include it in the build, and package it in the product rootfs.
title: Integrate an Application into the Product Firmware
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_app_integration
sku: 10003420
sidebar_position: 5
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/recamera_pro_bsp_app_integration/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Integrate an Application into the Product Firmware

This guide is for developers who need to include an application in the reCamera Pro product build and firmware image. Select the target board configuration first. Build media beforehand only if your application links against media libraries.

## How the Application Build Framework Works

If you only need to compile a standalone C/C++ or RKNN application and do not need to change the product build or firmware integration, use Seeed's [cross-compilation SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain) instead.

`project/app/Makefile` discovers subdirectories with a wildcard:

```make
app_src := $(wildcard ./*/Makefile ./component/fastboot_server/Makefile ./component/ao_record_service/Makefile)
```

**Any directory under `project/app/<your-app>/` with a `Makefile` is automatically included in the build**; no separate registration is required.

The outputs are collected in two stages:

```text
project/app/<your-app>/out/          ← PKG_BIN for the individual application
        ↓ MAROC_COPY_PKG_TO_APP_OUTPUT
project/app/out/                    ← RK_APP_OUTPUT, aggregate of all applications
        ↓ copied again by the top-level Makefile
output/out/app_out/                 ← RK_PROJECT_PATH_APP, used to package the rootfs
```

Key variables from `project/app/Makefile.param`:

| Variable | Value / meaning |
| --- | --- |
| `RK_APP_CROSS` | Cross-compiler prefix; `aarch64-rockchip1240-linux-gnu` for this board |
| `RK_APP_CFLAGS` | `-march=armv8-a -mtune=cortex-a53` (derived from the toolchain name) |
| `RK_APP_OPTS` | `-D_LARGEFILE_SOURCE -D_LARGEFILE64_SOURCE -D_FILE_OFFSET_BITS=64` plus optimization flags |
| `RK_APP_MEDIA_INCLUDE_PATH` | `output/out/media_out/include` |
| `RK_APP_MEDIA_LIBS_PATH` | `output/out/media_out/lib` |
| `RK_APP_OUTPUT` | `project/app/out` |
| `RK_APP_CHIP` | `rv1126b` |
| `RK_APP_BUILDROOT_STAGING` | `sysdrv/source/buildroot/buildroot-2023.02.6/output/staging` |
| `RK_APP_BUILDROOT_TARGET` | `sysdrv/source/buildroot/buildroot-2023.02.6/output/target` |
| `RK_APP_JOBS` | Number of parallel jobs |

Optimization is controlled by `RK_BUILD_VERSION_TYPE`: the default RELEASE mode uses `-Os`, `DEBUG` uses `-O0 -g -ggdb -pg`, and `ASAN` adds `-fsanitize=address -fno-stack-protector -fno-omit-frame-pointer -fsanitize-recover=all`.

`Makefile.param` also adds `tools/linux/toolchain/<cross-compiler>/bin` to `PATH` automatically, so you do not need to source `env_install_toolchain.sh`.

## Minimal Example: `hello_world`

### Create the Directory

```bash
mkdir -p project/app/hello_world && cd project/app/hello_world
```

### `hello.c`

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("Hello World from RV1126B IPC SDK!\n");
    return 0;
}
```

### `Makefile`

```make
ifeq ($(APP_PARAM), )
    APP_PARAM := ../Makefile.param
    include $(APP_PARAM)
endif

export LC_ALL=C
SHELL := /bin/bash

CURRENT_DIR := $(shell pwd)

PKG_NAME := hello_world
PKG_BIN  ?= out

ifeq ($(RK_APP_HELLO_WORLD),y)
PKG_TARGET := hello_world-build
endif

all: $(PKG_TARGET)
	@echo "build $(PKG_NAME) done"

hello_world-build:
	rm -rf $(PKG_BIN); \
	mkdir -p $(PKG_BIN)/bin;
	$(RK_APP_CROSS)-gcc $(RK_APP_OPTS) $(RK_APP_CFLAGS) hello.c -o $(PKG_BIN)/bin/hello_world
	$(call MAROC_COPY_PKG_TO_APP_OUTPUT, $(RK_APP_OUTPUT), $(PKG_BIN))

clean:
	rm -rf $(PKG_BIN)

distclean: clean

info:
	@echo "$(PKG_NAME): RK_APP_HELLO_WORLD=$(RK_APP_HELLO_WORLD)"
```

> Recipe lines in a Makefile must be indented with a **Tab**, not spaces. Verify the indentation after copying the code above.

### Add a Build Switch

Edit the file selected by `.BoardConfig.mk` (`project/cfg/BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`) and add this in the app configuration section:

```bash
export RK_APP_HELLO_WORLD=y
```

The switch is optional (you can remove the `ifeq` condition from the Makefile to build unconditionally), but **keeping it is recommended** so you can enable or disable the application for different boards. Existing applications such as `recamera_notify`, `recamera_onvif`, `recamera_services`, `recamera_web`, and `rkllm-inference` use `RK_APP_xxx` switches.

### Build and Verify

```bash
./build.sh app                          # Build enabled applications through the aggregate entry point
ls output/out/app_out/bin/hello_world   # Confirm the output exists

make -C project/app/hello_world         # Build only this application (run lunch first)
make -C project/app/hello_world distclean
```

To test the application on the device without reflashing the image:

```bash
scp output/out/app_out/bin/hello_world root@<device-IP>:/userdata/
ssh root@<device-IP> '/userdata/hello_world'
```

To include the application in a firmware image:

```bash
./build.sh firmware
sudo ./rkflash.sh rootfs
```

## How Output Directories Map into the Rootfs

When `build.sh` packages the rootfs, it merges app outputs by directory name:

| Directory under `app_out` | Location on the device |
| --- | --- |
| `bin/` | `/bin` or `/usr/bin` |
| `lib/` | `/usr/lib`, `/lib` |
| `etc/` | `/etc` |
| `share/` | `/usr/share` |
| `root/` | **Root of the rootfs, `/`** (copied as-is; see `__COPY_FILES $RK_PROJECT_PATH_APP/root` in `__PACKAGE_ROOTFS`) |
| `install_to_userdata/` | `/userdata` partition |

The `root/` directory is the most flexible option: to install a file at `/usr/bin/foo`, place it under `<PKG_BIN>/root/usr/bin/foo`. The `project/app/wifi_app` application does this with `install_out/root/usr/bin`.

Use `install_to_userdata/` for data that belongs on a writable partition, such as models, configuration, or recordings.

> The current SDK has a source issue in the app `install_to_userdata/` packaging path that may prevent files from being included in the userdata image. See [Source Review and Known Issues](/recamera_pro_sdk_source_notes/) for the impact and workaround.

Packaging also processes symbols automatically (`__RELEASE_FILESYSTEM_FILES()` in `build.sh`): it removes `lib*.la`, `lib*.a`, and all `pkgconfig` directories. RELEASE mode runs `strip` on executables and `*.so*`, except `libpthread*.so*` and `ld-*.so*`; `.ko` files receive `--strip-debug`. DEBUG mode skips stripping and also installs libc debug symbols.

## Real-World Example: Linking Media Libraries

`project/app/ao_record_demo/Makefile` is a practical template showing how to link against rockit:

```make
RK_APP_CFLAGS = -I $(RK_APP_MEDIA_INCLUDE_PATH) \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/libdrm \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/uAPI \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/uAPI2 \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/algos \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/common \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/xcore \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/iq_parser \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/iq_parser_v2 \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/smartIr \
                -I $(RK_APP_OUTPUT)/include \
                -I $(RK_APP_OUTPUT)/include/freetype2

RK_APP_LDFLAGS = -L $(RK_APP_MEDIA_LIBS_PATH) -L $(RK_APP_OUTPUT)/lib

RK_APP_OPTS += -Wl,-rpath-link,$(RK_APP_MEDIA_LIBS_PATH):$(RK_APP_PATH_LIB_INCLUDE)/root/usr/lib:$(RK_APP_OUTPUT)/lib

LD_FLAGS += $(RK_APP_OPTS) $(RK_APP_LDFLAGS) $(RK_APP_CFLAGS) \
            -Wl,-Bstatic -pthread -lrockit -lrtsp \
            -lrockchip_mpp -lrksysutils -lrga -Wl,-Bdynamic \
            -Wl,--gc-sections -Wl,--as-needed \
            -lrkaiq -lstdc++ -lm
```

Key points:

- The include root is `$(RK_APP_MEDIA_INCLUDE_PATH)`. rkaiq headers are spread across multiple subdirectories, so each one needs an `-I` option.
- `-Wl,-rpath-link,...` resolves indirect dependencies at link time; without it, the linker may report `warning: libxxx.so not found`.
- `-Wl,-Bstatic ... -Wl,-Bdynamic` statically links rockit/rtsp/mpp/rga while keeping rkaiq dynamic. This follows Rockchip reference-app conventions and reduces runtime dependencies under `/oem/usr/lib`.
- `-Wl,--gc-sections -Wl,--as-needed` reduce binary size.

## Start the Application at Boot

The reCamera Pro application startup entry point is `/oem/usr/bin/RkLunch.sh` (the stop script is `RkLunch-stop.sh`). `__PACKAGE_OEM()` in `build.sh` generates an init script under `/etc/init.d/` with this content:

```sh
#!/bin/sh
[ -f /etc/profile.d/RkEnv.sh ] && source /etc/profile.d/RkEnv.sh
case $1 in
    start) sh /oem/usr/bin/RkLunch.sh ;;
    stop)  sh /oem/usr/bin/RkLunch-stop.sh ;;
    *)     exit 1 ;;
esac
```

**Recommended approach:** append your application startup command to `RkLunch.sh`. The source file is `project/app/recamera_ipc/src/rv1126b_ipc/RkLunch.sh`. This lets your application share the `PATH` and `LD_LIBRARY_PATH` set by `RkEnv.sh` (including `/oem/usr/lib`) and use the common stop flow.

If you need a separate init script, follow the overlay pattern (`start-stop-daemon -S -b -m -p <pidfile> -x <executable> -- <arguments>`) and name the file `S<priority><name>` under `<PKG_BIN>/root/etc/init.d/`. Existing priorities are `S00board-id`, `S10log`, `S15watchdog`, `S20hwclock`, `S40gmgr`, `S40skt2ws`, `S40tmir`, `S49rcisd`, `S50sshd`, `S50ttyd`, `S50go2rtc`, `S70vsftpd`, `S99factorykey`, `S99inotify_passwd`, and `S99led`.

## Use CMake Instead of a Makefile

`recamera_ipc` and `recamera_web_backend` use CMake. Keep a thin outer Makefile so the app framework's wildcard finds the application, then invoke CMake inside it:

```make
ifeq ($(APP_PARAM), )
    APP_PARAM := ../Makefile.param
    include $(APP_PARAM)
endif
PKG_BIN ?= out

all:
	rm -rf build && mkdir -p build
	cd build && cmake .. \
	    -DCMAKE_TOOLCHAIN_FILE=../cmake/toolchain.cmake \
	    -DCMAKE_INSTALL_PREFIX=$(CURDIR)/$(PKG_BIN)
	make -C build -j$(RK_APP_JOBS) install
	$(call MAROC_COPY_PKG_TO_APP_OUTPUT, $(RK_APP_OUTPUT), $(PKG_BIN))

distclean:
	rm -rf build $(PKG_BIN)
clean: distclean
```

See [Choose a Development Path](/recamera_pro_dev_path/) for the toolchain-file approach.

## Rust / Go / Node.js / Python Applications

The `project/app/` directory includes examples written in languages other than C; use their build approach as a reference:

| Application | Language | Build approach |
| --- | --- | --- |
| `recamera_services/gmgr` | Rust | `Cargo.toml` + `Cross.toml`; use `cross` for Docker-based cross-compilation. `setup-libgpiod.sh` prepares dependencies |
| `recamera_web/recamera_web_react` | Node.js / React | `package.json` + `nginx.conf`; outputs static assets |
| `recamera_web/recamera_web_backend` | C/C++ | CMake + `thirdparty` |
| `recamera_notify/notify-server` | Python | Run the installation script and install `requirements.txt`; no compilation |
| go2rtc-related apps | Go | Prebuilt binaries are placed in the overlay under `oem/usr/bin/go2rtc` (`go2rtc-arm` and `go2rtc-arm64`) |

Go applications are supplied as prebuilt binaries in the overlay (`overlay-buildroot-go2rtc-arm64/oem/usr/bin/go2rtc`). This means the current build flow copies prebuilt Go binaries into the overlay instead of compiling them inside the SDK.

## Checklist

- The application is under `project/app/` and has a `Makefile`.
- The Makefile includes `../Makefile.param` near the beginning.
- It provides `all`, `clean`, and `distclean` targets (the top-level `clean` calls `distclean` in each subdirectory and fails if the target is missing).
- Outputs are copied to `$(PKG_BIN)`, followed by a call to `MAROC_COPY_PKG_TO_APP_OUTPUT`.
- Add the `RK_APP_<NAME>=y` switch to the board configuration.
- After the build, verify that your files appear under `output/out/app_out/`.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>