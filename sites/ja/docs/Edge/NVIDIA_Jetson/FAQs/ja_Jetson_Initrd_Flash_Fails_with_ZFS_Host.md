---
description: Ubuntu ホストが ZFS ルートファイルシステムを使用している場合に、initrd フラッシュが mount.nfs access denied で失敗する理由と、Seeed Jetson デバイスでの回避方法を説明します。
title: ZFS ホストでの Initrd フラッシュ失敗（mount.nfs access denied）
tags:
  - JetPack
  - フラッシュ
  - ホスト PC
keywords:
  - jetson
  - flash
  - ZFS
  - NFS
  - initrd
  - l4t_initrd_flash
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/Jetson_Initrd_Flash_ZFS_nfs_error_01.png
slug: /jetson_initrd_flash_zfs_host_limitation
last_update:
  date: 08/13/2026
  author: haochen
createdAt: '2026-08-12'
updatedAt: '2026-08-13'
url: https://wiki.seeedstudio.com/ja/jetson_initrd_flash_zfs_host_limitation/
---

# ZFS ホストでの Initrd フラッシュ失敗（mount.nfs access denied）

## はじめに

NVIDIA の **initrd** ワークフロー（`l4t_initrd_flash.sh` と `--network usb0` の組み合わせ）で Seeed Jetson デバイスをフラッシュする際、Ubuntu の **ホスト PC** は一時的にフラッシュ用ファイルを **NFS**（Network File System）経由で Jetson と共有します。ホストが **ZFS ルートファイルシステム**（Ubuntu インストーラの *Erase disk and use ZFS* オプション）でインストールされている場合、フラッシュ時に次のようなエラーで失敗することがあります：

```text
mount.nfs: access denied by server while mounting [fc00:1:1:0::1]:/path/to/mfi_xxx/rootfs
Flash failure
Either the device cannot mount the NFS server on the host or a flash command has failed.
```

これは Seeed キャリアボードや Jetson モジュールの欠陥では**ありません**。これは **ZFS** と、initrd フラッシュ中に使用される NVIDIA のデフォルトの一時 NFS エクスポートとの既知の相互作用によるものです。

:::info 対象製品
**`l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0`**（または同様の initrd + ネットワークフラッシュ）でフラッシュされるすべての Seeed Jetson 製品が対象であり、以下を含みますがこれらに限定されません：

- reComputer Classic / Mini / Super (J401 シリーズ)
- reComputer Industrial / reServer J401
- reComputer Robotics J401 / J501 / J501 Mini
- reServer J501

特定の SKU に固有の問題では**ありません**。根本原因はターゲットデバイスではなく、**ホストのファイルシステム**です。
:::

## この文脈での NFS とは？

initrd フラッシュ中は次のように動作します：

1. Ubuntu ホスト上で Seeed の **mfi** パッケージを展開します。
2. Jetson は USB 経由で小さな **initrd** イメージを起動します。
3. ホストは `rootfs` や `tools/kernel_flash/images` などのフォルダを NFS 経由で**エクスポート**します。
4. Jetson はそれらのフォルダを**マウント**し、システムイメージを書き込みます。

ここでの NFS は、フラッシュ中の **ホスト ↔ Jetson 間の転送メカニズム**に過ぎません。キャリアボード上の NFS 機能とは無関係です。

## ZFS ホストで失敗する理由

NVIDIA のスクリプト（`tools/kernel_flash/l4t_network_flash.func`）は **`exportfs -o`** を使用して、**一時的なインメモリの** NFS エクスポートを作成します。

**ext4**（Ubuntu のデフォルトインストール）では、通常これは問題なく動作します。

しかし **ZFS** では、Linux NFS サーバはそのデータセットに対して安定した **`fsid`** を自動割り当てできません。ホスト側ではエクスポートが成功したように見えても、Jetson 側でマウント時に **access denied** が返されます。

Ubuntu は 19.10 以降、ルートオプションとして ZFS を提供しているため、インストール時に ZFS を選択したユーザーは誰でもこの影響を受ける可能性があります。

## 推奨される回避策（最も簡単）

**mfi ディレクトリ全体を ext4 ファイルシステムにコピーし**、その場所からフラッシュコマンドを実行してください。

```bash
# Example: copy mfi folder to an ext4 mount (adjust paths)
cp -a /path/on/zfs/mfi_recomputer-orin-super-j401 /mnt/ext4-flash/
cd /mnt/ext4-flash/mfi_recomputer-orin-super-j401

sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

ヒント：

- 専用の ext4 パーティション、ext4 でフォーマットした外付け USB ドライブ、または ext4 ループバックイメージを使用します。
- 展開済み mfi パッケージ全体を格納できる十分な空き容量を確保してください。
- 製品の Getting Started ガイドに従い、ホストにフラッシュの前提パッケージ（`nfs-kernel-server`、`sshpass` など）をインストールしてください。

## 上級者向け回避策（ZFS のまま使う）

ZFS パスからどうしてもフラッシュする必要がある場合は、`/etc/exports` に明示的な **`fsid=`** 値付きで**永続的な**エクスポートを設定し、パーミッションが正しいことを確認してください。また、スクリプトが `exportfs -o` の代わりに `/etc/exports` + `exportfs -ra` を使用するように、`l4t_network_flash.func` 内の `enable_nfs_for_folder()` にパッチを当てる必要がある場合もあります。

エクスポート行の例（mfi ディレクトリに合わせてパスと IPv6 ネットワークを調整してください）：

```bash
/path/to/mfi_xxx/rootfs fc00:1:1::/48(rw,nohide,insecure,no_subtree_check,async,no_root_squash,fsid=1)
/path/to/mfi_xxx/tools/kernel_flash/images fc00:1:1::/48(rw,nohide,insecure,no_subtree_check,async,no_root_squash,fsid=2)
```

その後：

```bash
sudo chmod 755 /path/to/mfi_xxx/rootfs /path/to/mfi_xxx/tools/kernel_flash/images
sudo chown root:root /path/to/mfi_xxx/rootfs /path/to/mfi_xxx/tools/kernel_flash/images
sudo systemctl restart nfs-kernel-server
sudo exportfs -rav
```

詳細およびサンプルパッチは [wiki-documents #4148](https://github.com/Seeed-Studio/wiki-documents/issues/4148) を参照してください。

## ホストのファイルシステムを確認する

```bash
df -T /
findmnt -no FSTYPE /
```

出力に `zfs` と表示された場合は、フラッシュ前に上記の ext4 回避策を使用してください。

## 参考情報

- [Seeed wiki-documents #4148](https://github.com/Seeed-Studio/wiki-documents/issues/4148)
- [NVIDIA Forums: rootfs does not support NFS export](https://forums.developer.nvidia.com/t/rootfs-does-not-support-nfs-export/248850)
- [NVIDIA Forums: requires fsid= for NFS export](https://forums.developer.nvidia.com/t/requires-fsid-for-nfs-export/338708)
- [Flash BSP with Jetpack to Selected Jetson](https://wiki.seeedstudio.com/ja/flash/jetpack_to_selected_product/)
- [reServer J501 Getting Started](https://wiki.seeedstudio.com/ja/reserver_j501_getting_started/)
- [Flash JetPack with WSL2](https://wiki.seeedstudio.com/ja/ai_robotics_flash_jetpack_with_wsl2/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
