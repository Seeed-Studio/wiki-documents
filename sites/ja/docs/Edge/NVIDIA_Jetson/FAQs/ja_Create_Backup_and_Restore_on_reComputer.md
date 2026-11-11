---
description: "JetPack 5.1.3 および 6.2 上の reComputer J3011 イメージをバックアップおよび復元します：システムを NVMe または USB にクローンし、その後新しいデバイスに書き込みます。"
title: reComputer でバックアップを作成して復元する
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
updatedAt: '2026-05-08'
url: https://wiki.seeedstudio.com/ja/create_backup_and_restore_on_recomputer/
---

# reComputer でバックアップを作成して復元する

## はじめに

reComputer は、コンパクトなエッジ筐体で最大 275 TOPS の AI 性能を提供します。設定済みユニットを手作業で再インストールするのは時間がかかるため、以下のフローでは `l4t_backup_restore.sh` を使用して [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) の NVMe システムイメージをホストに読み出し、そのイメージを別のユニットに書き込みます。JetPack 5.1.3 と JetPack 6.2 の両方を対象としています。

:::note
テストプラットフォームは reComputer J3011 であり、JetPack 5.1.3 と JetPack 6.2 の手順を参考として提供しています。ご使用の JetPack バージョンに基づいて、適切なセクションを選択してください。
:::

## 前提条件

- Ubuntu ホストコンピュータ
- USB Type-C データ転送ケーブル
- reComputer J3011（JetPack 5.1.3 または JetPack 6.2 OS 搭載）

:::info
reComputer 上に必要なソフトウェアやアプリケーションをインストールして設定しておいてください。これらの変更によってデバイスの起動機能が損なわれないことを確認します。変更後は、安定性を確認するためにデバイスを再起動することを推奨します。

<div align="center"><img alt="reComputer のターミナルで jtop が動作しており、インストールされている JetPack バージョンが表示されている" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
上のスクリーンショットのように、jtop ソフトウェアをインストールしておくと、ターミナルでこれらのコマンドを直接使用できます。
<a id="Recovery"></a>
:::

## JetPack 5.1.3
### システムのバックアップ


**Step 1.** デバイスをリカバリモードに設定します。手順はこの [wiki ページ](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode) を参照してください。

**Step 2.** 使用している Jetson モジュールに対応する JetPack BSP を入手します。JetPack 5.1.3 の場合、[NVIDIA の公式サイト](https://developer.nvidia.com/embedded/jetson-linux-r3550)から Jetson Linux R35.5.0 BSP をダウンロードします。
<div align="center"><img alt="JetPack 5.1.3 用の NVIDIA Jetson Linux R35.5.0 BSP ダウンロードページ" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**Step 3.** BSP ファイルを展開し、Linux_for_Tegra ディレクトリにアクセスします。

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img alt="展開された Linux_for_Tegra ディレクトリの ls。flash.sh、apply_binaries.sh、およびボードの .conf ファイルが表示されている" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>

**Step 4.** Linux_for_Tegra の内容を、JetPack のフラッシュ用パッケージディレクトリ（例：mfi_recomputer-orin）にコピーします。
:::note
"flashing package directory" は、システムのフラッシュ処理中に使用するディレクトリです。
:::

既存ファイルを保持するために `-rn` オプションを使用します：

```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**Step 5.** JetPack のフラッシュ用パッケージディレクトリに移動します：

```bash
cd /path/to/mfi_recomputer-orin
```

**Step 6.** バックアップスクリプトを実行し、ストレージデバイスと希望するバックアップ名を指定します：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```

:::info
-b `<target_board>` を使用して、あなたのデバイスに置き換えてください

:::

:::note
JetPack のフラッシュ用パッケージディレクトリに移動すると、`xxx.conf` ファイルが見つかります。
`xxx` があなたの `<target_board>` です

```bash
ls | grep *.conf
```

<div align="center"><img alt="フラッシュ用パッケージディレクトリの ls。recomputer-orin.conf が枠で囲まれている" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img alt="バックアップ開始後のホストターミナル。l4t_initrd_flash.sh が RCM ブートコマンドラインを生成している" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

完了するまでしばらく待ちます。
問題なく完了すると、ターミナルに次のスクリーンショットのような表示が出ます：

<div align="center"><img alt="バックアップ完了後、イメージがホストディレクトリに書き込まれたことを示す画面" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
この処理中、フラッシュ処理と同様にデバイスが何度も再起動する場合があります。接続が切れてバックアップ／リストア処理が失敗する可能性があるため、仮想マシンや WSL の使用は推奨されません。いくつかのファイルが見つからないというエラーが出ることがありますが、その場合は `recomputer-orin.conf` を開き、存在しないファイルのエントリを削除してください。
通常、これらは一時的なデバイスツリーオーバーレイオブジェクトファイルであり、バックアップおよび復元結果には影響しません。ただし、BSP に変更を加えている場合は、オーバーレイファイルをマージする必要があります。
:::

### システムの復元

**Step 1.** 新しい空の [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) を reComputer に挿入します。

<div align="center"><img alt="基板上にまだ装着されている元の SSD（枠で囲まれている）の横に、新しい空の M.2 2280 SSD が置かれている" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**Step 2.** [前述の説明](#Recovery) に従って、強制リカバリモードに入ります。

**Step 3.** ホストシステム上で JetPack のフラッシュ用パッケージディレクトリに移動し、ホスト上でリストアコマンドを実行します。  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

問題なく完了すると、ターミナルに次のスクリーンショットのような表示が出ます：
<div align="center"><img alt="リストアコマンド完了後、イメージが NVMe ドライブに書き戻されたことを示す画面" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**Step 4.** Jetson デバイスの電源を入れ、以前設定したユーザー名とパスワードでログインします。そして、以前インストールしたソフトウェアをいくつかテストします。問題なく動作すれば、復元は成功です。
<div align="center"><img alt="復元されたシステムで再び jtop が利用可能になり、イメージが正常に起動したことを確認している" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
以前のシステムで jtop をインストールしていたため、新しいシステムのターミナルでも jtop を直接起動できます。

:::info
さらに、バックアップおよび復元について、次のケースでテストを行いました。  

- バックアップを元の SSD に復元。
- バックアップを別の SSD に復元。  
- 同じキャリアボード上で、同一ロットの Jetson モジュールを使用し、異なる SSD にバックアップを復元。

:::

## JetPack 6.2
### システムのバックアップ

JetPack 6.2（L4T 36.4.3）の場合、バックアップを実行する前に、コンパイル済みの Seeed BSP ファームウェアをダウンロードし、ソースコードをコンパイルする必要があります。

**Step 1.** コンパイル済みの Seeed BSP ファームウェアをダウンロードします： [L4T-36.4.3](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/L4T36-4-3_plus.tar)

**Step 2.** ダウンロードしたパッケージを展開し、PC のターミナルで次のコマンドを使用して必要な内容を生成します：

```bash
sudo tar xpf L4T36-4-3_plus.tar
# For example: sudo tar xpf L4T36-4-3_plus.tar

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..
```

**Step 3.** 展開したディレクトリ（tar.gz パッケージがある場所）で環境変数を設定します：

```bash
export ARCH=arm64 
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"
```

**Step 4.** source ディレクトリに移動し、ソースコードをコンパイルします（この処理には時間がかかります）：

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

**Step 5.** コンパイルが完了したら、コンパイル済みコンポーネントをコピーしてインストールします：

```bash
./do_copy.sh
./nvbuild.sh -i
```

**Step 6.** 作業ディレクトリの準備が整いました。`Linux_for_Tegra/` ディレクトリに移動し、この [wiki ページ](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/#enter-force-recovery-mode) を参照してデバイスをリカバリモードに設定し、バックアップスクリプトを実行します：

```bash
cd ../
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin-j401
```

:::info
-b `<target_board>` を使用して、あなたのデバイスに置き換えてください。JetPack 6.2 のデフォルトの target board は `recomputer-orin-j401` です。
:::

完了するまでしばらく待ちます。問題なく完了すると、ターミナルに成功メッセージが表示されます。

:::note
この処理中、フラッシュ処理と同様にデバイスが何度も再起動する場合があります。接続が切れてバックアップ／リストア処理が失敗する可能性があるため、仮想マシンや WSL の使用は推奨されません。
:::

### システムの復元

**Step 1.** 新しい空の [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) を reComputer に挿入します。

**Step 2.** [前述の説明](#Recovery) に従って、強制リカバリモードに入ります。

**Step 3.** ホストシステム上で `Linux_for_Tegra/` ディレクトリに移動し、ホスト上でリストアコマンドを実行します：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin-j401
```

問題なく完了すると、ターミナルに成功メッセージが表示されます。

**Step 4.** Jetson デバイスの電源を入れ、以前設定したユーザー名とパスワードでログインします。そして、以前インストールしたソフトウェアをいくつかテストします。問題なく動作すれば、復元は成功です。

:::info
さらに、バックアップおよび復元について、次のケースでテストを行いました：

- バックアップを元の SSD に復元。
- バックアップを別の SSD に復元。
- 同じキャリアボード上で、同一ロットの Jetson モジュールを使用し、異なる SSD にバックアップを復元。
:::

## リソース

- [JetPack OS を J401 キャリアボードにフラッシュする](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 回路図](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D ファイル](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson シリーズ カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI 導入事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイス一覧（1 ページ）](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson examples](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## FAQ

**どのホストでバックアップを実行できますか？**
USB Type-C ケーブルで reComputer に接続された Ubuntu ホストが必要です。仮想マシンや WSL では実行しないでください。処理の途中でデバイスが複数回再起動し、その際に USB 接続が切断されると、イメージが途中までしか書き込まれません。

**`-b` フラグと `-r` フラグは何をしますか？**
`-b` はモジュール上のシステムイメージを読み取り、フラッシュパッケージディレクトリに保存します。`-r` はイメージを NVMe に書き戻します。どちらもストレージデバイスとして `-e nvme0n1` を取り、ターゲットボード名を指定します。JetPack 5.1.3 では `recomputer-orin`、JetPack 6.2 では `recomputer-orin-j401` です。

**バックアップがファイル欠如エラーで停止します。**
`recomputer-orin.conf` で参照されている一時的なデバイスツリーオーバーレイオブジェクトが存在しない場合があります。それらの行を `.conf` ファイルから削除して再実行してください。BSP を変更していない限り、これらはイメージに影響しません。BSP を変更している場合は、代わりに自分のオーバーレイをマージしてください。

**イメージを別の SSD や別の個体に書き込むことはできますか？**
はい。元の SSD、別の SSD、同じキャリアボードおよびモジュールロットの別個体への復元はすべてテスト済みです。モジュールの SKU が異なる場合は別のイメージとなり、この手順の対象外です。

## 関連リソース

- [reComputer J4012 に JetPack をフラッシュする](/ja/reComputer_J4012_Flash_Jetpack/)
- [reComputer に OTA アップデートをデプロイする](/ja/deploy_ota_on_recomputer/)
- [reComputer J3011 製品ページ](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html)
- [Jetson Linux R35.5.0 BSP](https://developer.nvidia.com/embedded/jetson-linux-r3550)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
