---
description: 将应用程序添加到完整 BSP 源码中，把它包含进构建流程，并打包进产品 rootfs。
title: 将应用程序集成到产品固件中
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
url: https://wiki.seeedstudio.com/cn/recamera_pro_bsp_app_integration/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 将应用程序集成到产品固件中

本指南适用于需要在 reCamera Pro 产品构建和固件镜像中包含应用程序的开发者。请先选择目标板卡配置。仅当你的应用程序需要链接媒体库时，才需要事先构建媒体组件。

## 应用构建框架的工作方式

如果你只需要编译一个独立的 C/C++ 或 RKNN 应用，而不需要修改产品构建或固件集成，请改用 Seeed 的[cross-compilation SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain)。

`project/app/Makefile` 使用通配符发现子目录：

```make
app_src := $(wildcard ./*/Makefile ./component/fastboot_server/Makefile ./component/ao_record_service/Makefile)
```

**在 `project/app/<your-app>/` 下，任何包含 `Makefile` 的目录都会自动被纳入构建**；不需要单独注册。

输出会分两个阶段收集：

```text
project/app/<your-app>/out/          ← PKG_BIN for the individual application
        ↓ MAROC_COPY_PKG_TO_APP_OUTPUT
project/app/out/                    ← RK_APP_OUTPUT, aggregate of all applications
        ↓ copied again by the top-level Makefile
output/out/app_out/                 ← RK_PROJECT_PATH_APP, used to package the rootfs
```

来自 `project/app/Makefile.param` 的关键变量：

| 变量 | 值 / 含义 |
| --- | --- |
| `RK_APP_CROSS` | 交叉编译器前缀；在本板卡上为 `aarch64-rockchip1240-linux-gnu` |
| `RK_APP_CFLAGS` | `-march=armv8-a -mtune=cortex-a53`（由工具链名称推导） |
| `RK_APP_OPTS` | `-D_LARGEFILE_SOURCE -D_LARGEFILE64_SOURCE -D_FILE_OFFSET_BITS=64` 加上一些优化选项 |
| `RK_APP_MEDIA_INCLUDE_PATH` | `output/out/media_out/include` |
| `RK_APP_MEDIA_LIBS_PATH` | `output/out/media_out/lib` |
| `RK_APP_OUTPUT` | `project/app/out` |
| `RK_APP_CHIP` | `rv1126b` |
| `RK_APP_BUILDROOT_STAGING` | `sysdrv/source/buildroot/buildroot-2023.02.6/output/staging` |
| `RK_APP_BUILDROOT_TARGET` | `sysdrv/source/buildroot/buildroot-2023.02.6/output/target` |
| `RK_APP_JOBS` | 并行任务数 |

优化由 `RK_BUILD_VERSION_TYPE` 控制：默认的 RELEASE 模式使用 `-Os`，`DEBUG` 使用 `-O0 -g -ggdb -pg`，而 `ASAN` 还会添加 `-fsanitize=address -fno-stack-protector -fno-omit-frame-pointer -fsanitize-recover=all`。

`Makefile.param` 还会自动将 `tools/linux/toolchain/<cross-compiler>/bin` 添加到 `PATH`，因此你不需要再执行 `env_install_toolchain.sh`。

## 最小示例：`hello_world`

### 创建目录

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

> Makefile 中的配方行必须使用**Tab**缩进，而不是空格。复制上述代码后，请检查缩进。

### 添加构建开关

编辑由 `.BoardConfig.mk` 选中的文件（`project/cfg/BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`），在应用配置部分添加如下内容：

```bash
export RK_APP_HELLO_WORLD=y
```

该开关是可选的（你可以从 Makefile 中移除 `ifeq` 条件来无条件构建），但**建议保留**，这样你就可以为不同的板卡启用或禁用该应用。现有应用如 `recamera_notify`、`recamera_onvif`、`recamera_services`、`recamera_web` 和 `rkllm-inference` 都使用 `RK_APP_xxx` 开关。

### 构建并验证

```bash
./build.sh app                          # Build enabled applications through the aggregate entry point
ls output/out/app_out/bin/hello_world   # Confirm the output exists

make -C project/app/hello_world         # Build only this application (run lunch first)
make -C project/app/hello_world distclean
```

若要在不重新刷写镜像的情况下在设备上测试应用：

```bash
scp output/out/app_out/bin/hello_world root@<device-IP>:/userdata/
ssh root@<device-IP> '/userdata/hello_world'
```

若要将应用包含进固件镜像：

```bash
./build.sh firmware
sudo ./rkflash.sh rootfs
```

## 输出目录如何映射到 Rootfs

当 `build.sh` 打包 rootfs 时，会按目录名合并应用输出：

| `app_out` 下的目录 | 设备上的位置 |
| --- | --- |
| `bin/` | `/bin` 或 `/usr/bin` |
| `lib/` | `/usr/lib`、`/lib` |
| `etc/` | `/etc` |
| `share/` | `/usr/share` |
| `root/` | **rootfs 根目录，即 `/`**（按原样复制；参见 `build.sh` 中 `__PACKAGE_ROOTFS` 的 `__COPY_FILES $RK_PROJECT_PATH_APP/root`） |
| `install_to_userdata/` | `/userdata` 分区 |

`root/` 目录是最灵活的选项：如果要把文件安装到 `/usr/bin/foo`，就将其放在 `<PKG_BIN>/root/usr/bin/foo` 下。`project/app/wifi_app` 应用就是通过 `install_out/root/usr/bin` 这样做的。

对于属于可写分区的数据（例如模型、配置或录制文件），请使用 `install_to_userdata/`。

> 当前 SDK 在应用 `install_to_userdata/` 的打包路径上存在源码问题，可能导致文件未被包含进 userdata 镜像。有关影响和解决方法，请参见[源码评审与已知问题](/cn/recamera_pro_sdk_source_notes/)。

打包还会自动处理符号（`build.sh` 中的 `__RELEASE_FILESYSTEM_FILES()`）：它会删除 `lib*.la`、`lib*.a` 以及所有 `pkgconfig` 目录。RELEASE 模式会对可执行文件和 `*.so*` 运行 `strip`，但排除 `libpthread*.so*` 和 `ld-*.so*`；`.ko` 文件则使用 `--strip-debug`。DEBUG 模式会跳过 strip，并额外安装 libc 调试符号。

## 真实示例：链接媒体库

`project/app/ao_record_demo/Makefile` 是一个实用模板，展示了如何链接 rockit：

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

要点：

- 头文件包含根目录为 `$(RK_APP_MEDIA_INCLUDE_PATH)`。rkaiq 头文件分布在多个子目录中，因此每个子目录都需要一个 `-I` 选项。
- `-Wl,-rpath-link,...` 用于在链接时解析间接依赖；如果没有它，链接器可能会报告 `warning: libxxx.so not found`。
- `-Wl,-Bstatic ... -Wl,-Bdynamic` 会将 rockit/rtsp/mpp/rga 静态链接，而保持 rkaiq 为动态链接。这遵循 Rockchip 参考应用的约定，并减少 `/oem/usr/lib` 下的运行时依赖。
- `-Wl,--gc-sections -Wl,--as-needed` 可以减小二进制体积。

## 在启动时运行应用

reCamera Pro 应用启动入口为 `/oem/usr/bin/RkLunch.sh`（停止脚本为 `RkLunch-stop.sh`）。`build.sh` 中的 `__PACKAGE_OEM()` 会在 `/etc/init.d/` 下生成一个 init 脚本，内容如下：

```sh
#!/bin/sh
[ -f /etc/profile.d/RkEnv.sh ] && source /etc/profile.d/RkEnv.sh
case $1 in
    start) sh /oem/usr/bin/RkLunch.sh ;;
    stop)  sh /oem/usr/bin/RkLunch-stop.sh ;;
    *)     exit 1 ;;
esac
```

**推荐方式：**将你的应用启动命令追加到 `RkLunch.sh` 中。其源码文件为 `project/app/recamera_ipc/src/rv1126b_ipc/RkLunch.sh`。这样你的应用就可以共享由 `RkEnv.sh` 设置的 `PATH` 和 `LD_LIBRARY_PATH`（包括 `/oem/usr/lib`），并复用通用的停止流程。

如果你需要单独的 init 脚本，请遵循 overlay 模式（`start-stop-daemon -S -b -m -p <pidfile> -x <executable> -- <arguments>`），并将文件命名为 `S<priority><name>`，放在 `<PKG_BIN>/root/etc/init.d/` 下。现有优先级包括：`S00board-id`、`S10log`、`S15watchdog`、`S20hwclock`、`S40gmgr`、`S40skt2ws`、`S40tmir`、`S49rcisd`、`S50sshd`、`S50ttyd`、`S50go2rtc`、`S70vsftpd`、`S99factorykey`、`S99inotify_passwd` 和 `S99led`。

## 使用 CMake 而不是 Makefile

`recamera_ipc` 和 `recamera_web_backend` 使用 CMake。保留一个很薄的外层 Makefile，以便应用框架的通配符能找到该应用，然后在其中调用 CMake：

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

有关 toolchain-file 方法，请参阅[选择开发路径](/cn/recamera_pro_dev_path/)。

## Rust / Go / Node.js / Python 应用

`project/app/` 目录中包含使用 C 以外语言编写的示例；请参考它们的构建方式：

| 应用 | 语言 | 构建方式 |
| --- | --- | --- |
| `recamera_services/gmgr` | Rust | `Cargo.toml` + `Cross.toml`；使用 `cross` 进行基于 Docker 的交叉编译。`setup-libgpiod.sh` 用于准备依赖项 |
| `recamera_web/recamera_web_react` | Node.js / React | `package.json` + `nginx.conf`；输出静态资源 |
| `recamera_web/recamera_web_backend` | C/C++ | CMake + `thirdparty` |
| `recamera_notify/notify-server` | Python | 运行安装脚本并安装 `requirements.txt`；无需编译 |
| 与 go2rtc 相关的应用 | Go | 预构建二进制文件被放置在 `oem/usr/bin/go2rtc` (`go2rtc-arm` 和 `go2rtc-arm64`) 下的 overlay 中 |

Go 应用以预构建二进制文件的形式提供在 overlay 中（`overlay-buildroot-go2rtc-arm64/oem/usr/bin/go2rtc`）。这意味着当前的构建流程是将预构建的 Go 二进制文件复制到 overlay 中，而不是在 SDK 内进行编译。

## 检查清单

- 应用位于 `project/app/` 下，并且包含 `Makefile`。
- Makefile 在开头附近包含 `../Makefile.param`。
- 它提供 `all`、`clean` 和 `distclean` 目标（顶层的 `clean` 会在每个子目录中调用 `distclean`，如果目标缺失则会失败）。
- 输出被复制到 `$(PKG_BIN)`，然后调用 `MAROC_COPY_PKG_TO_APP_OUTPUT`。
- 在板级配置中添加 `RK_APP_<NAME>=y` 开关。
- 构建完成后，确认你的文件出现在 `output/out/app_out/` 下。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>