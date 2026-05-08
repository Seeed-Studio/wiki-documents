---
description: このガイドでは、reComputer J3011 上のシステムをバックアップおよび復元して、設定済みの環境とソフトウェアを新しいデバイスへ移行する方法を説明します。バックアップ手順には、リカバリーモードへの移行、JetPack BSP のダウンロード、バックアップスクリプトを使用したデータのコピーが含まれます。復元時には、新しい SSD を挿入し、再度リカバリーモードに入り、復元コマンドを実行します。この手順により、構成済みシステム環境を効率的に複製できます。
title: reComputer でバックアップと復元を作成する
keywords:
  - jetson
  - BSP
  - L4T
  - Backup
  - Restore
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /create_backup_and_restore_on_recomputer
last_update:
  date: 04/11/2025
  author: Zibo
createdAt: '2025-04-14'
updatedAt: '2025-09-15'
url: https://wiki.seeedstudio.com/ja/create_backup_and_restore_on_recomputer/
---

# reComputer でバックアップと復元を作成する

## はじめに

reComputer は、最大 275TOPS の最新 AI パフォーマンスをエッジにもたらす、強力でコンパクトなインテリジェントエッジボックスです。ビジネスに必要なソフトウェアや環境を reComputer 上で構成・インストールし、別の新しい reComputer にプロジェクトを複製する必要がある場合、ソフトウェアを再インストールするのは効率的ではありません。そのため、この wiki ページでは [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) を使用して、reComputer シリーズ上の既存のソフトウェアと環境をどのようにバックアップし、新しい reComputer へ簡単に復元・移行できるかを紹介します。

:::note
本ガイドのテストプラットフォームは reComputer J3011 であり、JetPack 5.1.3 と JetPack 6.2 の手順を参考として提供しています。ご使用の JetPack バージョンに応じて適切なセクションを選択してください。
:::

## 前提条件

- Ubuntu ホストコンピュータ
- USB Type-C データ転送ケーブル
- reComputer J3011（JetPack 5.1.3 または JetPack 6.2 OS 搭載）

:::info
reComputer 上に必要なソフトウェアやアプリケーションをインストール・設定しておいてください。これらの変更によってデバイスの起動機能が損なわれていないことを確認します。変更後は、デバイスを再起動して安定性を確認することを推奨します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
上のスクリーンショットのように、jtop ソフトウェアをインストールしておくと、ターミナル上でこれらのコマンドを直接使用できます。
<a id="Recovery"></a>
:::

## JetPack 5.1.3
### システムのバックアップ


**Step 1.** デバイスをリカバリーモードに設定します。手順はこの [wiki ページ](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode)を参照してください。

**Step 2.** 使用している Jetson モジュールに対応する JetPack BSP を入手します。JetPack 5.1.3 の場合、[NVIDIA の公式サイト](https://developer.nvidia.com/embedded/jetson-linux-r3550)から Jetson Linux R35.5.0 BSP をダウンロードします。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**Step 3.** BSP ファイルを展開し、Linux_for_Tegra ディレクトリにアクセスします。

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>

**Step 4.** Linux_for_Tegra の内容を、JetPack のフラッシュ用パッケージディレクトリ（例: mfi_recomputer-orin）にコピーします。
:::note
"flashing package directory" は、システムのフラッシュ処理中に使用したディレクトリです。
:::

既存ファイルを保持するために `-rn` オプションを使用します:

```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**Step 5.** JetPack のフラッシュ用パッケージディレクトリへ移動します:

```bash
cd /path/to/mfi_recomputer-orin
```

**Step 6.** バックアップスクリプトを実行し、ストレージデバイスと希望するバックアップ名を指定します:

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```

:::info
-b `<target_board>` を使用して、実際のデバイス名に置き換えてください。

:::

:::note
JetPack のフラッシュ用パッケージディレクトリに移動し、`xxx.conf` ファイルを探すことができます。
`xxx` があなたの `<target_board>` です。

```bash
ls | grep *.conf
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

完了するまでしばらくお待ちください。
問題なく完了すると、ターミナルに以下のスクリーンショットのような表示が出ます:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
この処理中、フラッシュプロセスと同様にデバイスが何度も再起動する場合があります。接続が切れてバックアップ/復元処理が失敗する可能性があるため、仮想マシンや WSL の使用は推奨されません。いくつかのファイルが見つからないというエラーが出ることがありますが、その場合は `recomputer-orin.conf` を開き、存在しないファイルの記述を削除してください。
通常、これらは一時的なデバイスツリーオーバーレイオブジェクトファイルであり、バックアップおよび復元結果には影響しません。ただし、BSP に変更を加えている場合は、独自のオーバーレイファイルをマージする必要があります。
:::

### システムの復元

**Step 1.** 新しく空の [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) を reComputer に挿入します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**Step 2.** [前述の説明](#Recovery)に従って、強制リカバリーモードに入ります。

**Step 3.** ホストシステム上で JetPack のフラッシュ用パッケージディレクトリに移動し、ホスト側で復元コマンドを実行します。  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

問題なく完了すると、ターミナルに以下のスクリーンショットのような表示が出ます:
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**Step 4.** Jetson デバイスの電源を入れ、以前に設定したユーザー名とパスワードでログインします。そのうえで、以前インストールしたソフトウェアをいくつかテストします。問題なく動作すれば、復元は成功です。
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
以前のシステムで jtop をインストールしていたため、新しいシステムのターミナルでも jtop を直接起動できます。

:::info
さらに、以下のケースについてバックアップと復元の動作確認を行っています。  

- バックアップを元の SSD に復元。
- バックアップを別の SSD に復元。  
- 同一バッチの Jetson モジュールを搭載した同一キャリアボード上で、異なる SSD にバックアップを復元。

:::

## JetPack 6.2
### システムのバックアップ

JetPack 6.2（L4T 36.4.3）の場合、バックアップを実行する前に、コンパイル済みの Seeed BSP ファームウェアをダウンロードし、ソースコードをコンパイルする必要があります。

**Step 1.** コンパイル済みの Seeed BSP ファームウェアをダウンロードします: [L4T-36.4.3](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/L4T36-4-3_plus.tar)

**Step 2.** ダウンロードしたパッケージを展開し、PC のターミナルで次のコマンドを使用して必要な内容を生成します:

```bash
sudo tar xpf L4T36-4-3_plus.tar
# For example: sudo tar xpf L4T36-4-3_plus.tar

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..
```

**Step 3.** 展開したディレクトリ（tar.gz パッケージがある場所）で環境変数を設定します:

```bash
export ARCH=arm64 
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"
```

**Step 4.** source ディレクトリに移動し、ソースコードをコンパイルします（この処理には時間がかかります）:

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

**Step 5.** コンパイルが完了したら、コンパイル済みコンポーネントをコピーしてインストールします:

```bash
./do_copy.sh
./nvbuild.sh -i
```

**Step 6.** 作業ディレクトリの準備が完了しました。`Linux_for_Tegra/` ディレクトリに移動し、この [wiki ページ](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode)を参照してデバイスをリカバリーモードに設定し、バックアップスクリプトを実行します:

```bash
cd ../
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin-j401
```

:::info
-b `<target_board>` を使用して、実際のデバイス名に置き換えてください。JetPack 6.2 のデフォルトの target board は `recomputer-orin-j401` です。
:::

完了するまでしばらくお待ちください。問題なく完了すると、ターミナルに成功メッセージが表示されます。

:::note
この処理中、フラッシュプロセスと同様にデバイスが何度も再起動する場合があります。接続が切れてバックアップ/復元処理が失敗する可能性があるため、仮想マシンや WSL の使用は推奨されません。
:::

### システムの復元

**Step 1.** 新しく空の [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) を reComputer に挿入します。

**Step 2.** [前述の説明](#Recovery)に従って、強制リカバリーモードに入ります。

**Step 3.** ホストシステム上で `Linux_for_Tegra/` ディレクトリに移動し、ホスト側で復元コマンドを実行します:

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin-j401
```

問題なく完了すると、ターミナルに成功メッセージが表示されます。

**Step 4.** Jetson デバイスの電源を入れ、以前に設定したユーザー名とパスワードでログインします。そのうえで、以前インストールしたソフトウェアをいくつかテストします。問題なく動作すれば、復元は成功です。

:::info
さらに、以下のケースについてバックアップと復元の動作確認を行っています:

- バックアップを元の SSD に復元。
- バックアップを別の SSD に復元。
- 同一バッチの Jetson モジュールを搭載した同一キャリアボード上で、異なる SSD にバックアップを復元。
:::

## リソース

- [JetPack OS を J401 キャリアボードにフラッシュする](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 回路図](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D ファイル](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI 導入事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson 例](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-入門者向け](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
