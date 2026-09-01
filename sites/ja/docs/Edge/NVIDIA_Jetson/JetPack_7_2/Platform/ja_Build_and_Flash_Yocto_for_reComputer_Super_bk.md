---
description: Seeed リポジトリから完全な CUDA 開発用 Yocto イメージをビルドし、reComputer Super にフラッシュします。
title: reComputer Super 向け Yocto イメージのビルドとフラッシュ
keywords:
  - Yocto
  - OpenEmbedded
  - reComputer Super
  - Jetson Orin NX
  - CUDA
  - Jetson Linux
image: https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg
slug: /build_and_flash_yocto_for_seeed_jetson_carrier_boards
aliases:
  - /build_and_flash_yocto_for_recomputer_super_bk
last_update:
  date: 2026-07-24
  author: Dayu
createdAt: '2026-07-24'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/build_and_flash_yocto_for_seeed_jetson_carrier_boards/
---

# reComputer Super 向け Yocto イメージのビルドとフラッシュ

:::note JetPack 7.2 collection copy
このコピーは、公式の OpenEmbedded/Yocto サポートが JetPack 7.2 の主要なプロダクション Linux 機能であるため含まれています。JetPack 7.2 イメージとして使用する前に、選択した Seeed Yocto ブランチ、NVIDIA BSP レイヤー、および生成されたフラッシュパッケージが、意図する Jetson Linux 39.2 ターゲットと一致していることを確認してください。
:::

このガイドでは、**Jetson Orin NX 16GB モジュールを搭載した reComputer Super J401** 向けの Seeed Yocto イメージをビルドし、それを Jetson の NVMe ドライブにフラッシュします。

この例では `seeed-image-jetson-development` を使用します。このイメージは、CUDA Toolkit と `nvcc`、CUDA/cuDNN/TensorRT/VPI/OpenCV の開発ファイル、ビルドおよびデバッグツール、NVIDIA サンプル、テストパッケージを備えたターゲット側開発環境を提供します。

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

:::note
これは OpenEmbedded/Yocto システムであり、NVIDIA SDK Manager によってインストールされる Ubuntu ルートファイルシステムではありません。パッケージ管理、ファイルシステムの内容、およびデスクトップ環境は JetPack Ubuntu とは異なります。
:::

## 前提条件

次のものを準備します：

- x86_64 Linux ホスト PC（できれば物理マシンの Ubuntu または Debian）
- 少なくとも 16 GB の RAM（32 GB 以上を推奨）
- 高速なローカル SSD と安定したインターネット接続
- 対応する Jetson Orin NX または Orin Nano モジュールを搭載した reComputer Super
- ホスト PC に直接接続された USB Type-C データケーブル
- ホストパッケージのインストールとフラッシュ作業のための `sudo` 権限

:::warning
ホスト PC 上に **少なくとも 400 GB の空きディスク容量** を確保してください。Yocto のダウンロード、共有状態キャッシュ、一時ビルドファイル、ルートファイルシステム、および展開されたフラッシュパッケージは、数百ギガバイトを消費する可能性があります。ホストローカル SSD の使用を強く推奨します。
:::

一般的に必要となるホストパッケージをインストールします：

```bash
sudo apt update
sudo apt install -y \
  gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
  python3 python3-pip python3-pexpect python3-git python3-jinja2 \
  xz-utils debianutils iputils-ping libegl1-mesa libsdl1.2-dev \
  pylint xterm zstd liblz4-tool file locales \
  gdisk parted udev udisks2
```

BitBake がホストディストリビューションが非対応であると報告した場合、ホストの検証警告を無視せず、Yocto がサポートする Linux ホストを使用してください。

## このガイドで使用するモジュール SKU

reComputer Super J401 は、次の P3767 モジュール SKU をサポートします：

| `--module-sku` | 完全なモジュール番号 | Jetson モジュール |
| --- | --- | --- |
| `0000` | `P3767-0000` | Jetson Orin NX 16GB |
| `0001` | `P3767-0001` | Jetson Orin NX 8GB |
| `0003` | `P3767-0003` | Jetson Orin Nano 8GB |
| `0004` | `P3767-0004` | Jetson Orin Nano 4GB |

このガイドでは `0000` を使用します。キャリアボードとモジュール SKU の組み合わせごとに、必ず別々のビルドディレクトリを使用してください。

## Seeed Yocto リポジトリをクローンする

クリーンなワークスペースを作成し、`master` ブランチをクローンします：

```bash
mkdir -p ~/work/jetson-yocto
cd ~/work/jetson-yocto

git clone \
  --branch master \
  --single-branch \
  https://github.com/jjjadand/seeed-tegra-demo-distro.git \
  tegra-demo-distro

cd tegra-demo-distro
```

メインリポジトリには、Seeed のメタデータとヘルパースクリプトが含まれています。`prepare-workspace.sh` は、固定された OpenEmbedded および OE4T レイヤーを Git サブモジュールとして初期化します。

## `all` を使って完全な開発イメージをビルドする

最初のビルドには `build.sh all` を使用することを推奨します。これはメタデータを検証し、Seeed のデバイスツリーをビルドし、ブートファイルをチェックし、完全なイメージと tegraflash アーカイブを順番にビルドします。

### ビルドディレクトリを準備する

```bash
./scripts/seeed/prepare-workspace.sh \
  --machine recomputer-orin-super-j401 \
  --module-sku 0000 \
  --build-dir build-seeed-super-j401-sku0000 \
  --cache-dir "$HOME/.cache/yocto-seeed"
```

共有キャッシュは、ダウンロードと sstate をビルドディレクトリの外側に保持し、後続のビルドで再利用できるようにします。

アクティブなビルドディレクトリ、キャリアボード、およびモジュール SKU を確認します：

```bash
./scripts/seeed/build.sh current \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401
```

出力は次のようになっている必要があります：

```text
Machine:   recomputer-orin-super-j401
Module SKU: 0000
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/current.png" />
</div>

:::warning
表示されている `MACHINE` またはモジュール SKU がハードウェアと一致しない場合は、先に進まないでください。このビルドディレクトリを別のキャリアボードやモジュール SKU に再利用しないでください。
:::

### 完全ビルドを実行する

ターゲット側開発イメージをビルドします：

```bash
./scripts/seeed/build.sh all \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

最初のビルドでは多数のコンポーネントをダウンロードしてコンパイルするため、数時間かかる場合があります。メタデータ検証、デバイスツリーコンパイル、ブートファイルチェック、またはイメージビルドが失敗すると、このコマンドは直ちに停止します。

4 つのステージがすべて正常に完了すると、ターミナル出力は次のようになります：

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/build-full-complete.png" />
</div>

ビルドが成功した後、deploy ディレクトリは次の場所になります：

```text
build-seeed-super-j401-sku0000/tmp/deploy/images/recomputer-orin-super-j401/
```

生成される重要なファイルには次のものが含まれます：

```text
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.ext4
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.manifest
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.spdx.json
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.testdata.json
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.tegraflash-tar.zst
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/filename.png" />
</div>

`.tegraflash-tar.zst` ファイルは、フラッシュに使用される自己完結型アーカイブです。

## フラッシュディレクトリを準備する

開発イメージのフラッシュアーカイブを展開して検証します：

```bash
./scripts/seeed/prepare-flash.sh \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development \
  --output-dir "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
```

ヘルパーはモジュール SKU を検証し、rootfs イメージ、DTB、BPMP DTB、pinmux、パッド電圧設定、およびフラッシュスクリプトが存在することを確認します。その後、準備されたディレクトリと、次に実行すべき正確なコマンドを表示します。

:::tip
ホストのローカル SSD 上の新規または空の出力ディレクトリを使用してください。フラッシュパッケージを Jetson ターゲットドライブ上に展開しないでください。
:::

## reComputer Super を強制リカバリモードにする

1. reComputer Super の電源を切ります。
2. reComputer Super のリカバリスイッチを **RESET** 位置に設定します。
3. 電源を接続します。
4. USB Type-C デバイス/デバッグポートを、データ通信対応ケーブルで Linux ホストに接続します。
5. ホスト PC 上で、リカバリモードを確認します：

```bash
lsusb -d 0955:
```

このガイドで使用する Orin NX 16GB モジュールの場合、出力には次のようなデバイスが含まれている必要があります：

```text
0955:7323 NVIDIA Corp. APX
```

その他の対応 Super モジュールでは、異なる USB プロダクト ID が使用されます：

| モジュール | リカバリ USB ID |
| --- | --- |
| Orin NX 16GB | `0955:7323` |
| Orin NX 8GB | `0955:7423` |
| Orin Nano 8GB | `0955:7523` |
| Orin Nano 4GB | `0955:7623` |

NVIDIA APX デバイスが表示されるまで、フラッシュを開始しないでください。

## Yocto イメージをフラッシュする

準備したディレクトリから生成済みフラッシャーを実行します：

```bash
cd "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
sudo ./initrd-flash
```

このスクリプトは、一時的な initrd フラッシャーを USB 経由で起動し、ターゲットの NVMe ドライブをホストに公開し、パーティションを書き込み、最終的なデバイスステータスを取得します。実行中は USB や電源を切断しないでください。

フラッシュが成功すると、次のような出力で終了します：

```text
[OK: /dev/sdX]
Final status: SUCCESS
Successfully finished
```

一時的なホスト側ブロックデバイス名は動的に割り当てられます。常に `/dev/sdb` や `/dev/sdc` になると想定しないでください。

## 初回起動

フラッシュコマンドが正常に完了したら：

1. USB データケーブルを取り外します。
2. リカバリスイッチを **RESET** から通常の位置に戻します。
3. 数秒間デバイスの電源を切ります。
4. HDMI ディスプレイを接続し、reComputer Super の電源を再度入れます。

Yocto デスクトップは、フラッシュされた NVMe ドライブから起動するはずです：

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg" />
</div>

開発イメージでは、初期状態では空のパスワードで `root` としてローカルログインできます。すぐにパスワードを設定してください：

```bash
passwd
```

ターゲット側開発環境を確認します：

```bash
nvcc --version
gcc --version
cmake --version

test -f /usr/local/cuda-13.2/include/cuda.h
test -f /usr/include/cudnn.h
test -f /usr/include/NvInfer.h
test -f /opt/nvidia/vpi4/include/vpi/VPI.h
pkg-config --modversion opencv4
```

## 詳細なパラメータ付きビルドコマンド

前のセクションでは、最初のビルドに推奨される `all` を使用しました。デバッグや特定ステージの再ビルドには、同じワークフローを明示的に実行します：

```bash
# 1. Validate metadata and print the selected BSP variables
./scripts/seeed/build.sh metadata \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 2. Build the Seeed DTB and DTBO files
./scripts/seeed/build.sh dtb \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 3. Install and verify the custom BCT, pinmux, and boot files
./scripts/seeed/build.sh bootfiles \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 4. Build the complete root filesystem and tegraflash archive
./scripts/seeed/build.sh image \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

ルートファイルシステムがすでにビルド済みで、`tegraflash` アーカイブだけを再生成する必要がある場合は、次を使用します：

```bash
./scripts/seeed/build.sh flash-package \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

## オプション：x86_64 クロス開発 SDK をビルドする

フラッシュ済みの開発イメージは、すでに Jetson 上での直接コンパイルをサポートしています。x86_64 PC からターゲット向けにアプリケーションをクロスコンパイルする必要がある場合にのみ、ホスト SDK をビルドしてください：

```bash
./scripts/seeed/build.sh sdk \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

生成された SDK インストーラは次の場所に配置されます：

```text
build-seeed-super-j401-sku0000/tmp/deploy/sdk/
```

このオプションのインストーラは、Jetson イメージのビルドやデバイスのフラッシュには必須ではありません。

## トラブルシューティング

### ビルドディレクトリが誤ったマシンまたは SKU を示している

`prepare-workspace.sh` を使って新しいビルドディレクトリを作成してください。キャリアボードやモジュール SKU を切り替えるために、既存のビルドディレクトリを編集しないでください。

### フラッシュアーカイブが見つからない

ビルドとフラッシュ準備の両方に、同じイメージ名が渡されていることを確認してください：

```text
seeed-image-jetson-development
```

`prepare-flash.sh` のデフォルトは `demo-image-full` であるため、`--image seeed-image-jetson-development` を省略すると、誤ったアーカイブを探すことになります。

### フラッシュ処理が `Waiting for USB storage device flashpkg` で止まる

この時点では、ホストは Jetson の initrd が一時的な USB マスストレージデバイスを公開するのを待っています。USB ケーブルを確認し、マザーボード上の USB ポートを使用し、不要な USB ストレージデバイスを取り外し、`lsusb` で Jetson が引き続き認識されていることを確認してください。

## 参考資料

- [Seeed tegra-demo-distro リポジトリ](https://github.com/jjjadand/seeed-tegra-demo-distro)
- [Yocto Project クイックビルド](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
- [OE4T meta-tegra ドキュメント](https://oe4t.github.io/)

Seeed Studio の製品をお選びいただきありがとうございます。技術サポートや製品に関するディスカッションには、以下のチャネルをご利用ください：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
