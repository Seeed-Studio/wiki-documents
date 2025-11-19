---
description: Seeed の Jetson BSP 用ドライバーモジュールの構築方法
title: Seeed の Jetson BSP 用ドライバーモジュールの構築方法
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /ja/how_to_build_the_ko_module_for_seeed_jetson
last_update:
  date: 09/24/2025
  author: Dayu
---


**reComputer/reServer で必要な `.ko` ドライバーモジュールが利用できない場合、Jetson 上でドライバーモジュールをコンパイルして読み込むことができます。この wiki では、JetPack 6.2 を例として、具体的な手順と重要な注意点を説明します。**

## 1. ワークスペースの準備

この記事では、**JetPack 6.2** BSP に対応する **L4T 36.4.3** を例として、**reComputer/reServer** 上で `pl2303`（USB-シリアル関連ドライバー）の .ko ドライバーモジュールをコンパイルする方法を示します。

:::tip
このチュートリアルでは、Jetson 上でソースコードをダウンロードし、`.ko` カーネルモジュールをコンパイルします。
:::


まず、お使いの L4T バージョンに応じて、NVIDIA の公式ウェブサイトから BSP ソースコードをダウンロードします。

L4T バージョンと JetPack バージョンの関係がわからない場合は、このリンクを参照してください：
https://developer.nvidia.com/embedded/jetpack-archive.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

コンパイルしたい特定の **L4T (Linux for Tegra)** リリースを検索します。例：
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

NVIDIA のウェブサイトから対応する BSP ソースコードをダウンロードします：
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-src.png"/>
</div>

ダウンロードした BSP ソースコードアーカイブを作業ディレクトリに配置し、ターミナルで以下のコマンドを実行して完全に展開します：
```python
# First extract the main file
tar -xjf public_sources.tbz2

# Enter the extracted directory
cd Linux_for_Tegra/source

# Recursively extract all .tbz2, .tar.bz2, .tar.gz, .tgz, .tar.xz files
find . -type f \( -name "*.tbz2" -o -name "*.tar.bz2" -o -name "*.tar.gz" -o -name "*.tgz" -o -name "*.tar.xz" \) -exec bash -c '
    dir=$(dirname "$1")
    filename=$(basename "$1")
    cd "$dir"
    if [[ "$filename" == *.tbz2 || "$filename" == *.tar.bz2 ]]; then
        tar -xjf "$filename"
    elif [[ "$filename" == *.tar.gz || "$filename" == *.tgz ]]; then
        tar -xzf "$filename"
    elif [[ "$filename" == *.tar.xz ]]; then
        tar -xJf "$filename"
    fi
    cd - > /dev/null
' _ {} \;
```


すべてのアーカイブを展開した後、`Linux_for_Tegra/source` に移動し、キーワードに基づいてドライバーソースパスを特定します：
```python
sudo find . -type f -name "*<keyword>*"

# For exmaple:
sudo find . -type f -name "*pl2303*"
```
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/path-pl2303.png"/>
</div>

コンパイル用の新しいワークスペースを作成します。ターミナルに表示されたソースパスに従って、ドライバーソースコードをこのワークスペースにコピーします。

次に、ワークスペース内で、以下の内容でコンパイル用の `Makefile` を作成します：
```cpp
obj-m   += pl2303.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
```
ここで、`pl2303.o` はコンパイルしたいドライバーの対応する名前に置き換える必要があります。

ワークスペースは以下の図のようになり、ソースファイルと `Makefile` の両方が含まれます：
<div align="center">
<img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/wkspace-ko.png"/>
</div>

コンパイルする前に、シンボリックリンクを作成する必要があります：
```python
# Remove existing redundant directory if it exists
sudo rm -r /lib/modules/$(uname -r)/build

# Create symbolic link
sudo ln -s /usr/src/linux-headers-$(uname -r)-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source /lib/modules/$(uname -r)/build
```

シンボリックリンクを作成した後、ワークスペースで以下のコマンドを実行してコンパイルし、`.ko` ドライバーモジュールを取得します：
```bash
make
```

コンパイル後、`.ko` ファイルが現在のディレクトリに生成されます：
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/compiled-ko.png"/>
</div>


次に、`.ko` ファイルを正しいターゲットパスにコピーします：
```bash
sudo cp pl2303.ko /lib/modules/$(uname -r)/kernel/drivers/usb/serial/
```

コンパイルされた `.ko` ドライバーモジュールの場合、ターゲットパスのプレフィックスは常に `/lib/modules/$(uname -r)/kernel/` です。サフィックスはドライバーモジュールのタイプに依存し、ソースコードの相対パスから推測できます。これにより完全なターゲットパスが得られます：
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/mark_path.png"/>
</div>


ターゲットパスにコピーした後、`.ko` ドライバーモジュールを読み込みます：
```python
sudo depmod -a
sudo modprobe pl2303
```

正常に読み込まれたら、`modinfo <driver_name>` を実行して確認できます：
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/modinfo-pl.png"/>
</div>




## リソース

- [Seeed の L4T ソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験を可能な限りスムーズにするため、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
