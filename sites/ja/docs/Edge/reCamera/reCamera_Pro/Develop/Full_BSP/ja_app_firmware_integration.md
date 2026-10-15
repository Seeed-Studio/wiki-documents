---
description: 完全な BSP ソースにアプリケーションを追加し、ビルドに含め、製品の rootfs にパッケージします。
title: アプリケーションを製品ファームウェアに統合する
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
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_app_integration/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# アプリケーションを製品ファームウェアに統合する

このガイドは、reCamera Pro 製品のビルドおよびファームウェアイメージにアプリケーションを含める必要がある開発者向けです。まずターゲットボード構成を選択してください。アプリケーションがメディアライブラリにリンクする場合にのみ、事前にメディアをビルドします。

## アプリケーションビルドフレームワークの仕組み

スタンドアロンの C/C++ または RKNN アプリケーションをコンパイルするだけで、製品ビルドやファームウェア統合を変更する必要がない場合は、代わりに Seeed の [クロスコンパイル SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain) を使用してください。

`project/app/Makefile` はワイルドカードでサブディレクトリを検出します：

```make
app_src := $(wildcard ./*/Makefile ./component/fastboot_server/Makefile ./component/ao_record_service/Makefile)
```

**`project/app/<your-app>/` 配下の任意のディレクトリに `Makefile` があれば、自動的にビルドに含まれます**。別途登録する必要はありません。

出力は 2 段階で収集されます：

```text
project/app/<your-app>/out/          ← PKG_BIN for the individual application
        ↓ MAROC_COPY_PKG_TO_APP_OUTPUT
project/app/out/                    ← RK_APP_OUTPUT, aggregate of all applications
        ↓ copied again by the top-level Makefile
output/out/app_out/                 ← RK_PROJECT_PATH_APP, used to package the rootfs
```

`project/app/Makefile.param` の主な変数：

| Variable | 値 / 意味 |
| --- | --- |
| `RK_APP_CROSS` | クロスコンパイラのプレフィックス。このボードでは `aarch64-rockchip1240-linux-gnu` |
| `RK_APP_CFLAGS` | `-march=armv8-a -mtune=cortex-a53`（ツールチェーン名から導出） |
| `RK_APP_OPTS` | `-D_LARGEFILE_SOURCE -D_LARGEFILE64_SOURCE -D_FILE_OFFSET_BITS=64` に最適化フラグを加えたもの |
| `RK_APP_MEDIA_INCLUDE_PATH` | `output/out/media_out/include` |
| `RK_APP_MEDIA_LIBS_PATH` | `output/out/media_out/lib` |
| `RK_APP_OUTPUT` | `project/app/out` |
| `RK_APP_CHIP` | `rv1126b` |
| `RK_APP_BUILDROOT_STAGING` | `sysdrv/source/buildroot/buildroot-2023.02.6/output/staging` |
| `RK_APP_BUILDROOT_TARGET` | `sysdrv/source/buildroot/buildroot-2023.02.6/output/target` |
| `RK_APP_JOBS` | 並列ジョブ数 |

最適化は `RK_BUILD_VERSION_TYPE` によって制御されます。デフォルトの RELEASE モードでは `-Os` を使用し、`DEBUG` では `-O0 -g -ggdb -pg` を使用し、`ASAN` では `-fsanitize=address -fno-stack-protector -fno-omit-frame-pointer -fsanitize-recover=all` を追加します。

`Makefile.param` は `tools/linux/toolchain/<cross-compiler>/bin` を自動的に `PATH` に追加するため、`env_install_toolchain.sh` を source する必要はありません。

## 最小例: `hello_world`

### ディレクトリを作成する

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

> Makefile のレシピ行は、スペースではなく **Tab** でインデントする必要があります。上記のコードをコピーした後、インデントを確認してください。

### ビルドスイッチを追加する

`.BoardConfig.mk` によって選択されるファイル（`project/cfg/BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`）を編集し、アプリ構成セクションに次を追加します：

```bash
export RK_APP_HELLO_WORLD=y
```

このスイッチは任意です（Makefile から `ifeq` 条件を削除すれば無条件にビルドできます）が、**保持しておくことを推奨します**。これにより、ボードごとにアプリケーションを有効または無効にできます。`recamera_notify`、`recamera_onvif`、`recamera_services`、`recamera_web`、`rkllm-inference` などの既存アプリケーションは、`RK_APP_xxx` スイッチを使用しています。

### ビルドして検証する

```bash
./build.sh app                          # Build enabled applications through the aggregate entry point
ls output/out/app_out/bin/hello_world   # Confirm the output exists

make -C project/app/hello_world         # Build only this application (run lunch first)
make -C project/app/hello_world distclean
```

イメージを書き換えずにデバイス上でアプリケーションをテストするには：

```bash
scp output/out/app_out/bin/hello_world root@<device-IP>:/userdata/
ssh root@<device-IP> '/userdata/hello_world'
```

アプリケーションをファームウェアイメージに含めるには：

```bash
./build.sh firmware
sudo ./rkflash.sh rootfs
```

## 出力ディレクトリと rootfs の対応関係

`build.sh` が rootfs をパッケージングする際、ディレクトリ名ごとにアプリ出力をマージします：

| `app_out` 配下のディレクトリ | デバイス上の場所 |
| --- | --- |
| `bin/` | `/bin` または `/usr/bin` |
| `lib/` | `/usr/lib`, `/lib` |
| `etc/` | `/etc` |
| `share/` | `/usr/share` |
| `root/` | **rootfs のルート `/`**（そのままコピーされます。`__PACKAGE_ROOTFS` 内の `__COPY_FILES $RK_PROJECT_PATH_APP/root` を参照） |
| `install_to_userdata/` | `/userdata` パーティション |

`root/` ディレクトリが最も柔軟な選択肢です。`/usr/bin/foo` にファイルをインストールするには、`<PKG_BIN>/root/usr/bin/foo` 配下に配置します。`project/app/wifi_app` アプリケーションは、`install_out/root/usr/bin` でこれを行っています。

モデル、設定、録画など、書き込み可能なパーティションに属するデータには `install_to_userdata/` を使用してください。

> 現在の SDK には、アプリの `install_to_userdata/` パッケージングパスにソース上の問題があり、ファイルが userdata イメージに含まれない場合があります。影響と回避策については、[ソースレビューと既知の問題](/ja/recamera_pro_sdk_source_notes/) を参照してください。

パッケージングではシンボルも自動的に処理されます（`build.sh` 内の `__RELEASE_FILESYSTEM_FILES()`）。`lib*.la`、`lib*.a`、およびすべての `pkgconfig` ディレクトリを削除します。RELEASE モードでは、実行ファイルと `*.so*` に対して `strip` を実行します（ただし `libpthread*.so*` と `ld-*.so*` は除く）。`.ko` ファイルには `--strip-debug` が適用されます。DEBUG モードでは strip を行わず、libc のデバッグシンボルもインストールします。

## 実例: メディアライブラリへのリンク

`project/app/ao_record_demo/Makefile` は、rockit にリンクする方法を示す実用的なテンプレートです：

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

- インクルードルートは `$(RK_APP_MEDIA_INCLUDE_PATH)` です。rkaiq のヘッダは複数のサブディレクトリに分散しているため、それぞれに `-I` オプションが必要です。
- `-Wl,-rpath-link,...` はリンク時に間接依存関係を解決します。これがないと、リンカが `warning: libxxx.so not found` を報告する場合があります。
- `-Wl,-Bstatic ... -Wl,-Bdynamic` は、rkaiq を動的のままにしつつ、rockit/rtsp/mpp/rga を静的リンクします。これは Rockchip のリファレンスアプリの慣例に従うもので、`/oem/usr/lib` 配下の実行時依存関係を減らします。
- `-Wl,--gc-sections -Wl,--as-needed` はバイナリサイズを削減します。

## 起動時にアプリケーションを開始する

reCamera Pro アプリケーションの起動エントリポイントは `/oem/usr/bin/RkLunch.sh`（停止スクリプトは `RkLunch-stop.sh`）です。`build.sh` 内の `__PACKAGE_OEM()` は、次の内容を持つ init スクリプトを `/etc/init.d/` 配下に生成します：

```sh
#!/bin/sh
[ -f /etc/profile.d/RkEnv.sh ] && source /etc/profile.d/RkEnv.sh
case $1 in
    start) sh /oem/usr/bin/RkLunch.sh ;;
    stop)  sh /oem/usr/bin/RkLunch-stop.sh ;;
    *)     exit 1 ;;
esac
```

**推奨アプローチ：** アプリケーションの起動コマンドを `RkLunch.sh` に追記してください。ソースファイルは `project/app/recamera_ipc/src/rv1126b_ipc/RkLunch.sh` です。これにより、アプリケーションは `RkEnv.sh` によって設定される `PATH` と `LD_LIBRARY_PATH`（`/oem/usr/lib` を含む）を共有し、共通の停止フローを利用できます。

別個の init スクリプトが必要な場合は、オーバーレイパターン（`start-stop-daemon -S -b -m -p <pidfile> -x <executable> -- <arguments>`）に従い、`<PKG_BIN>/root/etc/init.d/` 配下にファイル名を `S<priority><name>` として配置してください。既存の優先度は `S00board-id`、`S10log`、`S15watchdog`、`S20hwclock`、`S40gmgr`、`S40skt2ws`、`S40tmir`、`S49rcisd`、`S50sshd`、`S50ttyd`、`S50go2rtc`、`S70vsftpd`、`S99factorykey`、`S99inotify_passwd`、`S99led` です。

## Makefile の代わりに CMake を使う

`recamera_ipc` と `recamera_web_backend` は CMake を使用します。アプリフレームワークのワイルドカードがアプリケーションを検出できるように、薄い外側の Makefile を維持し、その中から CMake を呼び出します：

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

ツールチェーンファイル方式については、[Choose a Development Path](/ja/recamera_pro_dev_path/) を参照してください。

## Rust / Go / Node.js / Python アプリケーション

`project/app/` ディレクトリには、C 以外の言語で書かれたサンプルが含まれています。それらのビルド方法を参考にしてください：

| アプリケーション | 言語 | ビルド方法 |
| --- | --- | --- |
| `recamera_services/gmgr` | Rust | `Cargo.toml` + `Cross.toml`。`cross` を使用して Docker ベースのクロスコンパイルを行います。`setup-libgpiod.sh` が依存関係を準備します |
| `recamera_web/recamera_web_react` | Node.js / React | `package.json` + `nginx.conf`。静的アセットを出力します |
| `recamera_web/recamera_web_backend` | C/C++ | CMake + `thirdparty` |
| `recamera_notify/notify-server` | Python | インストールスクリプトを実行し、`requirements.txt` をインストールします。コンパイルは不要です |
| go2rtc 関連アプリ | Go | 事前ビルド済みバイナリが `oem/usr/bin/go2rtc`（`go2rtc-arm` と `go2rtc-arm64`）配下のオーバーレイに配置されます |

Go アプリケーションは、オーバーレイ内の事前ビルド済みバイナリ（`overlay-buildroot-go2rtc-arm64/oem/usr/bin/go2rtc`）として提供されます。これは、現在のビルドフローでは、SDK 内でコンパイルするのではなく、事前ビルドされた Go バイナリをオーバーレイにコピーしていることを意味します。

## チェックリスト

- アプリケーションは `project/app/` 配下にあり、`Makefile` を持っている。
- Makefile の先頭付近で `../Makefile.param` をインクルードしている。
- `all`、`clean`、`distclean` ターゲットを提供している（トップレベルの `clean` は各サブディレクトリで `distclean` を呼び出し、そのターゲットがない場合は失敗します）。
- 出力は `$(PKG_BIN)` にコピーされ、その後 `MAROC_COPY_PKG_TO_APP_OUTPUT` を呼び出す。
- ボード設定に `RK_APP_<NAME>=y` スイッチを追加する。
- ビルド後、ファイルが `output/out/app_out/` 配下に現れていることを確認する。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>