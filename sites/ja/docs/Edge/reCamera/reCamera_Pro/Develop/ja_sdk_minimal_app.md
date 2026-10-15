---
description: reCamera Pro クロスコンパイル SDK をインストールし、RV1126B 向けの小さな C++ プログラムをビルドし、バイナリを確認して、デバイス上で実行します。
title: reCamera Pro クロスコンパイル SDK のセットアップ
keywords:
  - reCamera Pro
  - RV1126B
  - SDK
  - クロスコンパイル
  - CMake
  - RKNN
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_setup
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/12/2026
  author: Seeed Studio
url: https://wiki.seeedstudio.com/ja/recamera_pro_sdk_setup/
createdAt: '2026-09-21'
updatedAt: '2026-10-12'
---

# reCamera Pro クロスコンパイル SDK のセットアップ

このガイドでは、[reCamera Pro cross-compilation SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain) を使用して、Linux PC または WSL 上で小さな C++ プログラムをビルドし、それを reCamera Pro 上で実行します。コンパイラとターゲットライブラリをインストールし、サンプルをビルドし、それが ARM 64 ビットプログラムであることを確認してから、カメラにコピーします。

> この SDK は Rockchip RV1126B プロセッサを搭載した reCamera Pro 用です。SG2002/RISC-V reCamera では動作しません。

## 必要なもの

- プロダクションファームウェアが動作している reCamera Pro
- Linux PC、または WSL 2 と Ubuntu を搭載した Windows PC
- SDK アセットをダウンロードするために、ホストから GitHub Releases へのネットワークアクセス（インストール後のサイズは約 2.5 GB）
- CMake、Ninja、`pkg-config`
- デプロイ手順用の reCamera Pro への SSH アクセス

この SDK は 64 ビット ARM Linux をターゲットとしており、Rockchip GCC 12.4.0 コンパイラ、ターゲット sysroot、GStreamer 1.22 開発ファイル、および RKNN API/runtime 2.3.2 を提供します。モデル変換は別工程です：x86_64 ホスト上で RKNN-Toolkit2 2.3.2 を使用し、`target_platform='rv1126b'` を指定して ONNX モデルを変換します。

## 1. SDK をインストールする

ホストツールをインストールし、SDK リポジトリをクローンします：

```bash
sudo apt update
sudo apt install -y git cmake ninja-build pkg-config
git clone https://github.com/Seeed-Projects/recamera_pro_toolchain.git
cd recamera_pro_toolchain
```

バージョン付きコンパイラと sysroot をダウンロードして検証し、その後 SDK 環境を読み込みます：

```bash
./scripts/setup.sh
source scripts/env.sh
bash scripts/check-sdk.sh
```

`setup.sh` は SDK アセットをリポジトリ内の `toolchain/` と `sysroot/` ディレクトリにインストールし、SHA-256 チェックサムを検証します。回線が遅い場合、ダウンロードには時間がかかることがあります。新しいターミナルでプロジェクトを設定する前に、毎回 `source scripts/env.sh` を再度実行してください。

## 2. SDK に含まれるサンプルをビルドする

まず、同梱されているスモークテストをビルドします。これは RKNN Runtime、OpenCV、GStreamer にリンクするため、SDK が主要なターゲットライブラリを見つけられるかどうかを確認できます。

リポジトリのルートから：

```bash
source scripts/env.sh
cmake -S examples/sdk_smoke -B examples/sdk_smoke/build -G Ninja
cmake --build examples/sdk_smoke/build
```

実行ファイルは `examples/sdk_smoke/build/` 配下に生成されます。以前にこのビルドディレクトリをホストコンパイラで CMake 設定していた場合は、そのビルドディレクトリを削除し、SDK を使ってビルドする前に再度設定し直してください。

## 3. 小さな C++ アプリケーションをビルドする

SDK は独自の CMake プロジェクトでも使用できます。`recamera_pro_toolchain` と同じ階層にプロジェクトディレクトリを作成します：

```bash
mkdir -p ~/my-recamerapro-app
cd ~/my-recamerapro-app
```

`main.cpp` を作成します：

```cpp
#include <iostream>

int main() {
    std::cout << "Hello from reCamera Pro" << std::endl;
    return 0;
}
```

`CMakeLists.txt` を作成します：

```cmake
cmake_minimum_required(VERSION 3.16)
project(my_recamera_app LANGUAGES CXX)

add_executable(my_recamera_app main.cpp)
```

SDK 環境を読み込んでから、設定とビルドを行います。SDK を別の場所にクローンした場合は、以下のパスを置き換えてください：

```bash
cd ~/my-recamerapro-app
source ~/recamera_pro_toolchain/scripts/env.sh
cmake -S . -B build -G Ninja
cmake --build build
```

この環境により、CMake 用に aarch64 クロスコンパイラとターゲット sysroot が選択されます。RKNN や GStreamer を使用するプロジェクトでは、SDK リポジトリの [CMake integration example](https://github.com/Seeed-Projects/recamera_pro_toolchain#minimal-cmake-integration) に従って、ターゲットライブラリの検出とリンクを行ってください。

## 4. 実行ファイルを確認する

プログラムをカメラにコピーする前に、正しいプロセッサ向けにビルドされていること、およびホストのパスが含まれていないことを確認します：

```bash
file build/my_recamera_app
source ~/recamera_pro_toolchain/scripts/env.sh
"${CROSS_COMPILE}readelf" -l build/my_recamera_app | grep interpreter
"${CROSS_COMPILE}readelf" -d build/my_recamera_app | grep -E 'NEEDED|RPATH|RUNPATH'
```

次の点を確認します：

- `file` が x86-64 や RISC-V ではなく ARM aarch64 と報告すること。
- ELF インタプリタが `/lib/ld-linux-aarch64.so.1` であること。
- 任意のランタイムサーチパスが `/oem/usr/lib` を指しており、ホストや WSL のパスを含んでいないこと。

SDK のツールチェーンファイルは、デバイスのランタイムパスを `/oem/usr/lib` に設定します。ホスト、SDK ディレクトリ、またはビルドディレクトリからの絶対パスを実行ファイルに追加しないでください。

## 5. reCamera Pro にコピーして実行する

USB 仮想 Ethernet または LAN 経由でカメラに接続します。カメラが別の IP アドレスを使用している場合は、以下の `192.168.42.1` を置き換えてください。プログラム用のディレクトリを作成し、実行ファイルをコピーします：

```bash
ssh root@192.168.42.1 'mkdir -p /userdata/my-recamerapro-app'
scp build/my_recamera_app root@192.168.42.1:/userdata/my-recamerapro-app/
ssh root@192.168.42.1
```

カメラ上で実行します：

```bash
cd /userdata/my-recamerapro-app
chmod +x my_recamera_app
./my_recamera_app
```

期待される出力：

```text
Hello from reCamera Pro
```

アプリケーション本体と必要なアセットのみをコピーしてください。`/oem/usr/lib/librknnrt.so` を上書きしないでください。SDK の RKNN Runtime はリンク用に使用されており、プロダクションデバイスのランタイムと整合性が確認されています。

## トラブルシューティング

| 症状 | 確認すること |
| --- | --- |
| `setup.sh` がアセットをダウンロードできない | ホストのインターネット接続を確認し、`./scripts/setup.sh` を再実行します。スクリプトはダウンロードしたチェックサムを検証します。 |
| CMake がホストコンパイラを選択してしまう | 同じターミナルで `source scripts/env.sh` を実行し、新しいビルドディレクトリを使用して再度設定します。 |
| `pkg-config` がホストライブラリを検出する | 設定前に `scripts/env.sh` を読み込みます。これにより `pkg-config` は SDK の sysroot を参照するようになります。 |
| デバイス上で `Exec format error` が発生する | 実行ファイルに対して `file` を実行し、ARM aarch64 と報告されることを確認します。 |
| 実行時に共有ライブラリが見つからない | 実行ファイルの `NEEDED` エントリを確認し、必要なライブラリがデバイスファームウェア内に存在することを確認します。ホストライブラリをデバイスにコピーしないでください。 |

SDK の sysroot は、GLIBC 2.38 までのシンボルを持つ libc を使用しています。別バージョンのファームウェアとの互換性を主張する前に、ファームウェア ABI を確認してください。クロスビルドが成功しても、コンパイルとリンクが確認されるだけであり、カメラの動作、モデル精度、またはアプリケーションのランタイム動作が検証されるわけではありません。

## 次のステップ

- [reCamera Pro SDK repository](https://github.com/Seeed-Projects/recamera_pro_toolchain) — SDK セットアップスクリプト、CMake 連携、および `sdk_smoke` サンプル
- [Camera, Audio, and Inference Development](/ja/recamera_pro_media_dev/) — GStreamer によるカメラキャプチャ、オーディオ、RTSP
- [Choose a Development Path](/ja/recamera_pro_dev_path/) — プロジェクト向けの開発ワークフローを選択

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。ご都合のよいチャネルをお選びください。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
