---
description: 対応するSeeed Studio Jetsonキャリアボード向けに、JetPack 7.2 Yoctoイメージを選択・ビルド・パッケージ化し、フラッシュします。
title: Seeed Jetsonキャリアボード向けYoctoのビルドとフラッシュ
keywords:
  - Yocto
  - OpenEmbedded
  - Seeed Jetson carrier board
  - Jetson Orin
  - Jetson Thor
  - meta-tegra
  - Jetson Linux 39.2
image: https://files.seeedstudio.com/wiki/jetpack-7.2/jetpack-7-2-yocto-workflow.png
slug: /build_and_flash_yocto_for_seeed_jetson_carrier_boards
aliases:
  - /build_and_flash_yocto_for_recomputer_super_bk
last_update:
  date: 2026-09-01
  author: Dayu
createdAt: '2026-07-24'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/ja/build_and_flash_yocto_for_seeed_jetson_carrier_boards/
---

# Seeed Jetsonキャリアボード向けYoctoのビルドとフラッシュ

このガイドでは、[`seeed-tegra-demo-distro`](https://github.com/jjjadand/seeed-tegra-demo-distro) リポジトリで定義されているSeeed Studio Jetsonキャリアボード上で、OpenEmbedded/Yoctoイメージをビルドおよびフラッシュするための共通ワークフローを説明します。

このリポジトリは、OE4T の `wrynose` ブランチと **Jetson Linux R39.2.0 / JetPack 7.2** 向けの `meta-tegra` BSP を使用します。YoctoイメージはNVIDIA Jetson Linux BSPコンポーネントを使用しますが、NVIDIA SDK Manager がインストールするUbuntuルートファイルシステムではありません。パッケージ管理、イメージ構成、デスクトップ環境、アップデート動作はYoctoメタデータによって制御されます。

:::warning リポジトリの適用範囲
この記事のコマンドとパラメータ表は、**2026年8月31日** 時点でレビューされたリポジトリ状態に基づいています。ビルドを行う前に、利用可能なマシン、モジュールSKU、ブランチ、ハードウェア検証状況が変更されている可能性があるため、必ずリポジトリのREADMEとサポートマトリクスを再確認してください。
:::

次の図は、全体のワークフローを要約したものです。最初にキャリアボードとJetsonモジュールを選択し、その後はビルドとフラッシュの全工程を通して、同じmachine、SKU、ビルドディレクトリ、イメージレシピを使い続けます。

<div align="center">
  <img width={1200} src="https://files.seeedstudio.com/wiki/jetpack-7.2/jetpack-7-2-yocto-workflow.png" alt="Seeed Jetsonキャリアボード向けJetPack 7.2 Yoctoビルドおよびフラッシュワークフロー" />
</div>

## 始める前に

高速なローカルSSD、安定したネットワーク接続、`sudo` 権限を備えた物理x86_64 Linuxホストを使用してください。キャリアボードのリカバリ／デバイスポート用に、データ通信対応のUSBケーブルを用意します。フルのYocto開発ビルドでは数百GBを消費する可能性があるため、可能であれば約 **400 GB** の空きストレージを確保してください。RAMは少なくとも **16 GB**、**32 GB以上を推奨** します。

Ubuntuホスト上に、一般的に必要となるビルドおよびフラッシュ用パッケージをインストールします：

```bash
sudo apt update
sudo apt install -y \
  gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
  python3 python3-pip python3-pexpect python3-git python3-jinja2 \
  xz-utils debianutils iputils-ping libegl1-mesa libsdl1.2-dev \
  pylint xterm zstd liblz4-tool file locales \
  gdisk parted udev udisks2
```

パッケージ名はホストディストリビューションによって異なる場合があります。リポジトリが使用しているブランチに対応するYocto Project Quick BuildおよびOE4Tのフラッシュ要件に従ってください。BitBakeがサポートされていないホストディストリビューションであると報告した場合は、検証を回避するのではなく、サポート対象のホストを使用してください。

ヘルパースクリプトは、ワークフロー全体を通して次のパラメータを使用します：

| パラメータ | 目的 | 重要なルール |
| --- | --- | --- |
| `--machine` | キャリアボード用のYocto `MACHINE` 設定を選択します。 | 物理的なキャリアボードと一致している必要があります。 |
| `--module-sku` | 設定可能なOrinキャリアに搭載されたJetsonモジュールを選択します。これはNVIDIAモジュール番号の末尾4桁です。 | 設定可能なOrinマシンでは必須です。固定モジュールのThorマシンでは省略します。 |
| `--build-dir` | 選択した設定、BitBakeの作業ファイル、デプロイ成果物を保存します。 | キャリアとモジュールSKUの組み合わせごとに別々のディレクトリを使用します。 |
| `--cache-dir` | 共有ダウンロードおよびsstateキャッシュデータを保存します。 | ビルド間で1つのホストローカルキャッシュを再利用します。 |
| `--image` | BitBakeイメージレシピを選択します。 | ビルドとフラッシュ準備の両方で同じイメージ名を使用します。 |
| `--output-dir` | 検証済みtegraflashパッケージの展開先を選択します。 | 新規または空のホストローカルディレクトリを使用します。 |

`MACHINE` は単なる製品ラベルではなく、Yoctoのハードウェアターゲット名です。これは `layers/meta-seeed/conf/machine/` からマシン設定を選択し、SoCファミリ、キャリアDTB、モジュール構成、BPMPデータ、pinmuxおよびパッド電圧ファイル、オーバーレイ、BitBakeとtegraflashが使用するフラッシュ変数を決定します。

:::tip ハードウェアに合ったmachineを選択する
このガイド内の `recomputer-orin-super-j401` コマンドは、あくまで具体例にすぎません。ワークスペースを準備する前に、[キャリアボード表](https://wiki.seeedstudio.com/ja/build_and_flash_yocto_for_seeed_jetson_carrier_boards/#キャリアボードと-jetson-モジュールを選択する) から、使用するキャリアとJetsonモジュールに一致する `MACHINE` とモジュールSKUを選択してください。
:::

ターゲットの用途に基づいてイメージを選択します：

| イメージレシピ | 用途 |
| --- | --- |
| `demo-image-full` | グラフィックス、コンテナ、OpenCV、NVIDIAサンプルを含むOE4Tリファレンス／デモイメージ。これはヘルパースクリプトのデフォルトです。 |
| `seeed-image-jetson-runtime` | OE4T/NVIDIAランタイムスタックに合わせたSeeedランタイムプロファイル。 |
| `seeed-image-jetson-development` | ランタイムイメージに、ターゲット側CUDA開発パッケージ、ヘッダー、ビルド／デバッグツール、サンプル、テストを追加したもの。 |

以下の例では `seeed-image-jetson-development` を使用します。

## キャリアボードとJetsonモジュールを選択する

このガイドでレビューしたリポジトリには、16個のSeeedマシン設定が定義されています。現在チェックアウトしているマシン一覧は、`./scripts/seeed/build.sh machines` で出力することもできます。

| 製品またはキャリア構成 | `MACHINE` | サポートされるモジュール選択 |
| --- | --- | --- |
| reComputer Industrial J401 | `recomputer-industrial-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Mini AGX Orin J501X | `recomputer-mini-agx-orin-j501x` | P3701 AGX Orin: `0004`, `0005` |
| reComputer Orin J401 | `recomputer-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Orin J40mini | `recomputer-orin-j40mini` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Robotics J401 | `recomputer-orin-robotics-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Robotics J401 GMSL | `recomputer-orin-robotics-j401-gmsl` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Super J401 | `recomputer-orin-super-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Robo AGX Orin J501X | `recomputer-robo-agx-orin-j501x` | P3701 AGX Orin: `0004`, `0005` |
| reComputer Rugged Orin J401 | `recomputer-rugged-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Thor Carrier J601 | `recomputer-thor-carrier-j601` | 固定P3834-0008 T5000。`--module-sku` は省略します。 |
| reComputer Thor Carrier J6014 | `recomputer-thor-carrier-j6014` | 固定P3834-0000 T4000。`--module-sku` は省略します。 |
| reComputer Thor Carrier J6015 | `recomputer-thor-carrier-j6015` | 固定P3834-0008 T5000。`--module-sku` は省略します。 |
| reServer AGX Orin J501X | `reserver-agx-orin-j501x` | P3701 AGX Orin: `0000`, `0001`, `0002`, `0004`, `0005` |
| reServer AGX Orin J501X GMSL | `reserver-agx-orin-j501x-gmsl` | P3701 AGX Orin: `0000`, `0001`, `0002`, `0004`, `0005` |
| reServer Industrial Orin J401 | `reserver-industrial-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| Seeed AGX Orin Kit | `seeed-agx-orin-kit` | P3701 AGX Orin: `0000`, `0001`, `0002`, `0004`, `0005` |

`--module-sku` は、NVIDIAモジュール部品番号に印字されている末尾4桁です。記憶に頼って値を選ぶのではなく、必ずモジュールラベルまたはEEPROMを確認してください。

| モジュールファミリ | `--module-sku` | 完全なモジュール番号 | モジュールモデルまたはリポジトリでの対応付け |
| --- | --- | --- | --- |
| P3767 | `0000` | `P3767-0000` | Jetson Orin NX 16GB |
| P3767 | `0001` | `P3767-0001` | Jetson Orin NX 8GB |
| P3767 | `0003` | `P3767-0003` | Jetson Orin Nano 8GB |
| P3767 | `0004` | `P3767-0004` | Jetson Orin Nano 4GB |
| P3701 | `0000` | `P3701-0000` | Jetson AGX Orin 開発キットモジュール |
| P3701 | `0001` | `P3701-0001` | リポジトリの `0000` DTB/BPMP 対応付けを使用する互換SKU |
| P3701 | `0002` | `P3701-0002` | リポジトリの `0000` DTB/BPMP 対応付けを使用する互換SKU |
| P3701 | `0004` | `P3701-0004` | Jetson AGX Orin 32GB |
| P3701 | `0005` | `P3701-0005` | Jetson AGX Orin 64GB |
| P3834 | not selectable | `P3834-0000` | Jetson T4000。Thor の `MACHINE` によって選択されます。 |
| P3834 | not selectable | `P3834-0008` | Jetson T5000 / AGX Thor 開発キットモジュール。Thor の `MACHINE` によって選択されます。 |

:::caution ビルドサポートとハードウェア検証の違い
このリポジトリは、記載されているすべての構成についてマシンメタデータとビルド検証を提供します。これは、すべてのキャリア、モジュールSKU、カメラオプション、周辺機器で物理検証が完了していることを意味するわけではありません。レビューされたサポートマトリクスでは、`recomputer-orin-super-j401` はフラッシュ、NVMeブート、HDMI、および基本的なUSB検証を完了しています。SKU `0004` の `reserver-agx-orin-j501x-gmsl` はフラッシュとブート検証を完了していますが、GMSLおよびより広範な周辺機器の検証は保留中です。他のマシンについては、ハードウェアステータスが更新されるまではビルド検証済みとして扱ってください。
:::

次のセクションのコマンドシーケンスでは、**Orin NX 16GBモジュールを搭載したreComputer Super J401** を具体例として使用します。上記の表から選択した値に合わせて、そのmachine、SKU、ディレクトリ名を置き換えてください。同じパラメータ化されたワークフローは、reComputer Mini J5011 などサポート表にある他のマシンにも適用できます。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>reComputer Super J401</th>
      <th>reComputer Mini J5011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img width={360} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" alt="reComputer Super J401" />
      </td>
      <td>
        <img width={360} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl.jpg" alt="reComputer Mini J5011" />
      </td>
    </tr>
    <tr>
      <td>
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Buy One 🖱️</font></span></strong></a>
        </div>
      </td>
      <td>
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5011-with-GMSL-Extension-p-6876.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Buy One 🖱️</font></span></strong></a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
誤った `MACHINE` またはモジュール SKU を使用すると、互換性のない DTB、BPMP、pinmux、メモリ、またはフラッシュ設定ファイルが選択される可能性があります。いずれかの値を変更した後に、既存のビルドディレクトリを再利用しないでください。
:::

## ワークスペースの準備と検証

Seeed リポジトリをクローンし、ビルドに使用するコミットを記録します：

```bash
mkdir -p ~/work/jetson-yocto
cd ~/work/jetson-yocto

git clone \
  --branch master \
  --single-branch \
  https://github.com/jjjadand/seeed-tegra-demo-distro.git \
  tegra-demo-distro

cd tegra-demo-distro
git rev-parse HEAD
```

サンプルキャリアおよびモジュール用に 1 つのワークスペースを準備します：

```bash
./scripts/seeed/prepare-workspace.sh \
  --machine recomputer-orin-super-j401 \
  --module-sku 0000 \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --cache-dir "$HOME/.cache/yocto-seeed"
```

AGX Orin キャリアの場合は、その machine とサポートされている P3701 SKU の値に置き換えてください。Thor キャリアの場合は、選択した machine ファイルによってモジュールが固定されるため、`--module-sku` を省略します。ヘルパーは高度なワークスペース管理のために `--no-activate`、`--no-submodules`、`--full-history` も受け付けます。

ビルド前に、選択されたビルドディレクトリ、machine、およびモジュール SKU を確認します：

```bash
./scripts/seeed/build.sh current \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/current.png" alt="選択されたビルドディレクトリ、machine、およびモジュール SKU を表示している Yocto ヘルパー" />
</div>

表示されている値が実際のハードウェアと一致しない場合は、先に進まないでください。

## イメージとフラッシュパッケージのビルド

最初のビルドには `all` コマンドを使用することを推奨します。これはメタデータ検証、Seeed DTB/DTBO コンパイル、ブートファイルインストールチェック、完全なイメージビルドを順番に実行します：

```bash
./scripts/seeed/build.sh all \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

最初のビルドでは多くのコンポーネントをダウンロードしてコンパイルするため、数時間かかる場合があります。すべての 4 ステージが完了すると、正常終了となります：

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/build-full-complete.png" alt="完了した Yocto メタデータ、デバイスツリー、ブートファイル、およびイメージビルドステージ" />
</div>

生成されたファイルは `<build-dir>/tmp/deploy/images/<machine>/` 配下に配置されます。重要な出力は次の命名パターンに従います：

```text
<image>-<machine>.rootfs.ext4
<image>-<machine>.rootfs.manifest
<image>-<machine>.rootfs.spdx.json
<image>-<machine>.rootfs.testdata.json
<image>-<machine>.rootfs.tegraflash-tar.zst
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/filename.png" alt="生成されたルートファイルシステムと tegraflash アーカイブを含む Yocto deploy ディレクトリ" />
</div>

`.tegraflash-tar.zst` アーカイブには、フラッシュ準備ヘルパーが使用するファイルが含まれています。

デバッグや部分的な再ビルドのためには、`all` を `metadata`、`dtb`、`bootfiles`、`image`、または `flash-package` に置き換えてください。同じ `--build-dir`、`--machine`、`--image` の値を維持します。オプションの x86_64 クロス開発 SDK をビルドするには、次を実行します：

```bash
./scripts/seeed/build.sh sdk \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

SDK インストーラは `<build-dir>/tmp/deploy/sdk/` 配下に書き込まれます。ターゲットイメージのビルドやフラッシュには必須ではなく、Jetson 上で直接コンパイルする場合は不要です。

## ターゲットの準備とフラッシュ

ビルドに使用したものと同じビルドディレクトリ、machine、image の値を使って、フラッシュアーカイブを展開し検証します：

```bash
./scripts/seeed/prepare-flash.sh \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development \
  --output-dir "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
```

ヘルパーは rootfs、`initrd-flash`、フラッシュ変数、DTB/BPMP DTB、pinmux、pad-voltage、およびその他の選択されたブートファイルをチェックします。設定可能なキャリアの場合、フラッシュアーカイブ内のモジュール SKU が準備したワークスペースと一致していることも検証します。ヘルパー自体は `sudo` を実行せず、ターゲットをフラッシュしません。

対象の Seeed キャリアボード固有のドキュメントに記載されたリカバリボタンまたはリカバリスイッチの手順を使用して、ターゲットを Force Recovery Mode にします。キャリアの USB デバイス/デバッグポートをデータ通信対応ケーブルで Linux ホストに直接接続し、NVIDIA APX デバイスが表示されることを確認します：

```bash
lsusb -d 0955:
```

USB プロダクト ID は Jetson モジュールによって異なります。NVIDIA リカバリデバイスが表示されるまで、フラッシュを開始しないでください。

準備した出力ディレクトリから生成されたフラッシャーを実行します：

```bash
cd "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
sudo ./initrd-flash
```

このスクリプトは一時的な initrd を USB 経由で起動し、ターゲットのストレージデバイスをホストに公開し、パーティションレイアウトとルートファイルシステムを書き込み、最終ステータスを報告します。フラッシュ中は電源や USB を切断しないでください。

:::warning
一時的なホストのブロックデバイス名は動的に割り当てられます。常に `/dev/sdb` や `/dev/sdc` であると決めつけないでください。また、ワークフローをホストドライブに手動でリダイレクトしないでください。
:::

## 初回起動と検証

フラッシュが正常に完了したら、リカバリ用 USB ケーブルを取り外し、必要に応じてキャリアのリカバリ制御を通常の状態に戻し、ターゲットの電源を入れ直して、ディスプレイと周辺機器を接続します。

選択したターゲットストレージから Yocto デスクトップが起動するはずです：

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg" alt="Seeed Jetson デバイス上で動作する Yocto デスクトップ" />
</div>

デフォルトの `tegrademo` 構成では、初期 root パスワードが空で、開発用に root ログインが有効になっています。すぐにパスワードを設定してください：

```bash
passwd
```

開発用イメージでは、必要なターゲット側ツールとライブラリを確認し、そのうえでアプリケーションが使用するキャリア固有インターフェースをテストします：

```bash
nvcc --version
gcc --version
cmake --version
pkg-config --modversion opencv4
```

イメージのビルドや起動が成功しても、すべてのカメラ、GMSL リンク、表示モード、USB ポート、ネットワークインターフェース、または拡張コネクタが検証されるわけではありません。展開前に、製品固有の周辺機器テストを完了してください。

## トラブルシューティング

**ビルドディレクトリが誤った machine または SKU を報告する：** `prepare-workspace.sh` を使用して新しいビルドディレクトリを作成してください。キャリアボードやモジュール SKU を切り替えるために、既存のワークスペースを編集したり再利用したりしないでください。

**フラッシュアーカイブが見つからない：** `build.sh` と `prepare-flash.sh` に同じ `--image` 値を渡してください。両方のヘルパーのデフォルトは `demo-image-full` であるため、`seeed-image-jetson-development` をビルドした場合は、フラッシュ準備時にその名前を明示的に使用する必要があります。

**メタデータはパースできるがハードウェアが起動しない：** リポジトリのサポートマトリクスを確認してください。メタデータおよび DTB ビルド検証は、すべての machine とモジュールの組み合わせにおいて、実際のフラッシュ、ストレージブート、ディスプレイ、カメラ、GMSL、または周辺機器の動作を保証するものではありません。

**フラッシュが `Waiting for USB storage device flashpkg` で停止する：** この段階では、ホストは Jetson initrd が一時的な USB マスストレージデバイスとして認識されるのを待っており、rootfs パーティションの書き込みはまだ開始されていません。データケーブル、ホスト USB への直接接続、リカバリモードの状態、コンパイル済みデバイスツリーの USB デバイスモードパスを確認してください。連続するドットを、ストレージ書き込みが遅いだけの正常な状態とみなさないでください。

## 参考資料

- [Seeed tegra-demo-distro リポジトリ](https://github.com/jjjadand/seeed-tegra-demo-distro)
- [Seeed キャリアボードサポートマトリクス](https://github.com/jjjadand/seeed-tegra-demo-distro/blob/master/layers/meta-seeed/docs/board-support-status.md)
- [Yocto Project クイックビルド](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
- [OE4T meta-tegra ドキュメント](https://oe4t.github.io/)
- [OE4T フラッシュの基本](https://oe4t.github.io/wrynose/Flashing.html)

Seeed Studio の製品をお選びいただきありがとうございます。技術サポートや製品に関するディスカッションには、以下のチャネルをご利用ください：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
