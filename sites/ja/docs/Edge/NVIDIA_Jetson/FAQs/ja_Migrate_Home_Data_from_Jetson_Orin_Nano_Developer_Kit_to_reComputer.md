---
description: このガイドでは、JetPack 6 を実行している NVIDIA Jetson Orin Nano Developer Kit から、/home ディレクトリのみをバックアップおよび復元することで、Seeed Studio reComputer へユーザーデータを移行する方法を説明します。reComputer J4012 と reComputer Super J4012 をターゲット例として使用し、開発者キット固有のブートファイル、デバイスツリー、カーネルモジュール、および BSP 設定のコピーを回避します。
title: Jetson Orin Nano Developer Kit から reComputer へ /home データを移行する
keywords:
  - reComputer
  - reComputer Super
  - Orin Nano Developer Kit
  - Jetson
  - JetPack 6
  - Backup
  - Restore
  - Migration
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer
last_update:
  date: 06/05/2026
  author: Seeed Studio
createdAt: '2026-06-04'
updatedAt: '2026-06-05'
url: https://wiki.seeedstudio.com/ja/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/
---

# Jetson Orin Nano Developer Kit から reComputer へ /home データを移行する

## はじめに

NVIDIA Jetson Orin Nano Developer Kit から Seeed Studio reComputer へ移行する際、ユーザーワークスペース、プロジェクトファイル、Conda 環境、スクリプト、アプリケーションデータを保持したい場合があります。しかし、キャリアボード、デバイスツリー、ブートローダー、BSP 設定が異なるため、開発者キットのシステムイメージ全体をそのまま reComputer に復元することは推奨されません。

この wiki では、[reComputer Classic backup to Super migration project](https://github.com/jjjadand/reComputer_classic-backup-to-super.git) を使用して、Jetson Orin Nano Developer Kit をソースとして `/home` のみをターゲットの reComputer に移行する方法を説明します。本ガイドでは、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) と [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html) をターゲット例として使用します。まずターゲットの reComputer に対応する Seeed JetPack 6 BSP をフラッシュし、そのクリーンな reComputer システム上に `/home` パッケージを復元します。

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>J4012 を入手</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Super J4012 を入手</font></span></strong>
  </a>
</div>

## ハードウェアリファレンス

本ガイドでは、Jetson Orin Nano Developer Kit をソースデバイスとして使用し、reComputer J4012 / reComputer Super J4012 をターゲット例として使用します。同じ `/home` のみの移行という考え方は、両方のシステムが JetPack 6 / L4T R36 を実行しており、ターゲットが対応する Seeed BSP でフラッシュされている場合、他の Jetson から reComputer への組み合わせにも利用できます。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>ソースデバイス</th>
      <th>ターゲット例 1</th>
      <th>ターゲット例 2</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp" />
        </div>
        <br />
        Jetson Orin Nano Developer Kit
      </td>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
        </div>
        <br />
        <a href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">reComputer J4012</a>
      </td>
      <td>
        <div align="center">
          <img width="300" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp" />
        </div>
        <br />
        <a href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">reComputer Super J4012</a>
      </td>
    </tr>
  </tbody>
</table>
</div>

## この移行で行うこと

移行パッケージには次の内容が含まれます：

- `/home`
- ソースシステムのメタデータ
- `/home` のユーザーおよびグループのメタデータ
- 手動でインストールした APT パッケージ一覧（存在する場合）
- インストール済み dpkg パッケージ一覧（存在する場合）
- パッケージのチェックサム

意図的に復元しないもの：

- `/boot`
- `/boot/dtb`
- `/lib/modules`
- `/usr/lib/modules`
- `/etc/nv_boot_control.conf`
- `/etc/fstab`
- ブートローダーパーティション
- ボード固有の BSP ファイル

:::caution
このワークフローはユーザーデータの移行用であり、システム全体のクローンではありません。`/usr` 配下にインストールされたアプリケーション、`/etc` 配下で設定されたサービス、`/var/lib/docker` 配下の Docker イメージ、システムレベルの BSP 変更は移行されません。`/home` を復元した後、これらのコンポーネントはターゲットの reComputer 上で再インストールまたは再設定してください。
:::

## 前提条件

- JetPack 6 / L4T R36 を実行しているソース NVIDIA Jetson Orin Nano Developer Kit
- 対応する Seeed JetPack 6 BSP を実行しているターゲットの reComputer J4012 または reComputer Super J4012
- パッケージを転送するためのネットワークアクセスまたはリムーバブルストレージ
- 圧縮された `/home` バックアップパッケージ用の十分な空き容量
- `git`、`tar`、`sha256sum`、`awk`、`find`

:::note
パッケージを復元する前に、ターゲットの reComputer に正しい Seeed ファームウェアをフラッシュしてください。reComputer J4012 については、[Flash JetPack OS to J401 Carrier Board](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/) を参照してください。reComputer Super J4012 については、[Getting Started with reComputer Super](https://wiki.seeedstudio.com/ja/recomputer_jetson_super_getting_started/#flash-jetpack-os) を参照してください。
:::

## ワークフロー概要

1. ターゲットの reComputer に対応する Seeed JetPack 6 BSP をフラッシュします。
2. ソースの Jetson Orin Nano Developer Kit 上で移行プロジェクトをクローンします。
3. ソースデバイス上で `/home` 移行パッケージを作成します。
4. パッケージをターゲットの reComputer にコピーします。
5. ターゲット上で復元の検査またはドライランを実行します。
6. ターゲット上で `/home` を復元し、再起動します。
7. `/home` の外側にある必要なシステムパッケージやサービスを再インストールします。

## ソース Jetson Orin Nano Developer Kit 上でのバックアップ

**ステップ 1.** `git` がまだインストールされていない場合はインストールします。

```bash
sudo apt update
sudo apt install -y git
```

**ステップ 2.** 移行プロジェクトをクローンします。

```bash
git clone https://github.com/jjjadand/reComputer_classic-backup-to-super.git
cd reComputer_classic-backup-to-super
chmod +x *.sh
```

**ステップ 3.** バックアップパッケージを作成します。

`/path/to/output` を、USB ドライブ、外付け SSD、共有ネットワークフォルダなど、十分な空き容量があるディレクトリに置き換えてください。

```bash
sudo ./backup_home_jp6.sh -o /path/to/output
```

バックアップが完了すると、次の 2 つのファイルが表示されます：

```text
jetson-home-jp6-<hostname>-<timestamp>.tar.gz
jetson-home-jp6-<hostname>-<timestamp>.tar.gz.sha256
```

デフォルトでは、スクリプトはパッケージサイズを小さくするために一般的なキャッシュディレクトリを除外します：

```text
/home/*/.cache
/home/*/.ccache
/home/*/.nv/ComputeCache
/home/*/.npm/_cacache
/home/*/.local/share/Trash
/home/*/.local/share/gvfs-metadata
```

ユーザーキャッシュデータをより忠実にコピーする必要がある場合は、`--include-caches` を追加します：

```bash
sudo ./backup_home_jp6.sh -o /path/to/output --include-caches
```

追加で除外したいデータがある場合は、tar の除外パターンを含む exclude ファイルを作成し、それをスクリプトに渡します：

```bash
sudo ./backup_home_jp6.sh -o /path/to/output --exclude-file /path/to/exclude-patterns.txt
```

:::info
バックアップスクリプトは `/home` に対して `--one-file-system` を使用します。`/home` 内に外部ストレージをマウントしている場合は、そのマウントされたデータを別途バックアップしてください。
:::

## バックアップパッケージの確認

復元する前に、ソースデバイスまたはターゲットデバイスのいずれかでパッケージを確認できます。

```bash
./inspect_home_package.sh /path/to/jetson-home-jp6-xxx.tar.gz
```

inspect コマンドはパッケージのチェックサムを検証し、パッケージ形式、ソースシステムのメタデータ、ソースの `/home` ユーザー、および `/home` アーカイブ内の先頭エントリを表示します。

## パッケージをターゲットの reComputer にコピーする

`.tar.gz` パッケージをターゲットの reComputer にコピーします。例えば、`scp` を使用します：

```bash
scp /path/to/jetson-home-jp6-xxx.tar.gz seeed@<recomputer-ip>:/home/seeed/
```

USB ドライブや外付け SSD を使用してパッケージをコピーすることもできます。

:::note
`.sha256` ファイルは外部のチェックサム記録として保持してください。復元スクリプトは、移行パッケージ内に埋め込まれたチェックサムも検証します。
:::

## ターゲットの reComputer 上での復元

**ステップ 1.** ターゲットの reComputer に、正しい Seeed JetPack 6 BSP がすでにフラッシュされ、初回起動セットアップが完了していることを確認します。

**ステップ 2.** ターゲット上で移行プロジェクトをクローンします。

```bash
git clone https://github.com/jjjadand/reComputer_classic-backup-to-super.git
cd reComputer_classic-backup-to-super
chmod +x *.sh
```

:::note
復元スクリプト名には、元のプロジェクトが reComputer Super の移行シナリオ向けに作成されたため `super` が含まれています。本ガイドでは、選択した reComputer ターゲット上で `/home` パッケージを検証およびオーバーレイする目的にのみ引き続き使用します。
:::

**ステップ 3.** まずドライランを実行します。

```bash
./restore_home_on_super_jp6.sh --dry-run /home/seeed/jetson-home-jp6-xxx.tar.gz
```

ドライランはパッケージを検証し、ファイルを復元せずにサマリーを表示します。

**ステップ 4.** パッケージを復元します。

```bash
sudo ./restore_home_on_super_jp6.sh --create-users /home/seeed/jetson-home-jp6-xxx.tar.gz
```

`--create-users` オプションは、パッケージを展開する前に、UID/GID に基づいて不足しているソースユーザーおよびグループを作成します。これは、ソースユーザーがまだターゲットの reComputer システム上に存在しない場合に、ファイル所有権を保持するのに役立ちます。

デフォルトでは、復元スクリプトはソースパッケージをオーバーレイする前に、現在のターゲット `/home` のロールバックアーカイブを作成します：

```text
/var/backups/jetson_home_migration/super-home-before-restore-<timestamp>.tar.gz
```

`/var/backups` に十分な空き容量がない場合は、別のバックアップディレクトリを使用します：

```bash
sudo ./restore_home_on_super_jp6.sh --create-users --backup-dir /path/to/backup-dir /home/seeed/jetson-home-jp6-xxx.tar.gz
```

ターゲットの `/home` の別のバックアップがすでにある場合のみ、`--no-backup` を使用してください：

```bash
sudo ./restore_home_on_super_jp6.sh --create-users --no-backup /home/seeed/jetson-home-jp6-xxx.tar.gz
```

:::caution
復元操作は `/home` 上にファイルをオーバーレイします。パッケージ内と一致するファイルは上書きされますが、ターゲットのみに存在するファイルは削除されません。
:::

**ステップ 5.** ターゲットを再起動します。

```bash
sudo sync
sudo reboot
```

## 移行の検証

ターゲットの reComputer が再起動したら、復元されたユーザーとファイルを確認します：

```bash
ls -lah /home
id <source-user>
du -sh /home/<source-user>
```

次に、アプリケーションデータとユーザー環境を検証します：

```bash
ls -lah /home/<source-user>/projects
conda env list
python3 --version
```

`jtop` などの Jetson ツールを使用している場合は、ターゲットの reComputer 上でも再度実行します：

```bash
jtop
```

:::info
移行後にアプリケーションコマンドが見つからない場合は、おそらく `/home` の外側にインストールされていた可能性があります。パッケージ内のメタデータを使用して元のパッケージ一覧を確認し、必要なソフトウェアをターゲットの reComputer システムに再インストールしてください。
:::

## ターゲットの /home をロールバックする

移行前の状態にターゲットの `/home` を復元する必要がある場合は、復元スクリプトによって作成されたロールバックアーカイブを使用します。

```bash
sudo tar --extract \
  --gzip \
  --file /var/backups/jetson_home_migration/super-home-before-restore-xxx.tar.gz \
  --directory / \
  --preserve-permissions \
  --same-owner \
  --acls \
  --xattrs \
  --xattrs-include='*' \
  --numeric-owner \
  --overwrite

sudo sync
sudo reboot
```

## トラブルシューティング

### スクリプトが「システムが JetPack 6 のように見えない」と警告する

スクリプトは `/etc/nv_tegra_release` を確認し、L4T R36 を想定しています。ソースとターゲットの両方が JetPack 6 を実行していることを確認してください。

```bash
cat /etc/nv_tegra_release
```

### 復元後にファイル所有者が数値で表示される

これは通常、ターゲットにソースと同じ UID/GID のユーザーが存在しないことを意味します。`--create-users` を付けて復元コマンドを実行するか、復元前に一致する UID/GID を持つユーザーを手動で作成してください。

### パッケージが大きすぎる

デフォルトのキャッシュ除外設定を使用するか、`/home` から不要なファイルを削除するか、`--exclude-file` で追加の除外パターンファイルを指定してください。

### バックアップ中に一部のファイルが変更された

バックアップスクリプトは tar ステータス `1` を許可します。これは通常、バックアップ中にライブファイルが変更されたことを意味します。変更されたファイルが重要な場合は、実行中のアプリケーションを終了し、バックアップをやり直してください。

### Docker イメージまたはシステムサービスが見つからない

この移行では `/home` のみが復元されます。Docker イメージ、システムサービス、APT でインストールされたアプリケーション、および `/etc`、`/usr`、`/var` 配下のファイルは、ターゲットの reComputer システム上で再インストールまたは再設定する必要があります。

## リソース

- [reComputer Classic から Super へのバックアップ移行プロジェクト](https://github.com/jjjadand/reComputer_classic-backup-to-super.git)
- [reComputer でバックアップと復元を作成する](https://wiki.seeedstudio.com/ja/create_backup_and_restore_on_recomputer/)
- [Jetson Orin Nano Developer Kit を Super Kit にアップデートする方法](https://wiki.seeedstudio.com/ja/update_orin_nano_developer_kit_to_super_kit/)
- [JetPack OS を J401 キャリアボードにフラッシュする](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/)
- [reComputer Super 入門](https://wiki.seeedstudio.com/ja/recomputer_jetson_super_getting_started/)
- [reComputer J30/J40 入門](https://wiki.seeedstudio.com/ja/reComputer_J30_40_with_Jetson_getting_start/)
- [Seeed Jetson デバイス ワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
