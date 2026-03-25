---
description: このチュートリアルでは、WSL2 を使用して Windows 上で JetPack をフラッシュする方法を説明します。
title: WSL2 で JetPack をフラッシュする
tags:
  - JetPack
  - WSL2
  - Windows
image: https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/check_custom_kernel.png
slug: /ai_robotics_flash_jetpack_with_wsl2
sku: 110110145
last_update:
  date: 02/24/2026
  author: Lorraine
createdAt: '2026-02-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/ai_robotics_flash_jetpack_with_wsl2/
---

# WSL2 で JetPack をフラッシュする

## はじめに

このチュートリアルでは、Windows Subsystem for Linux 2 (WSL2) を使用して Jetson デバイス上で JetPack をフラッシュする方法を説明します。この方法により、Windows ユーザーは専用の Ubuntu マシンを用意しなくても JetPack をフラッシュできます。

:::warning
これは**安定した解決策とは見なされず**、積極的なサポートも提供されません。エラーが発生した場合は、代わりにネイティブの Ubuntu ホストを使用してください。
:::

## 前提条件

### システム要件

- **Windows**: Windows 10 1903（ビルド 18362.1049 以降）または Windows 11
- **WSL**: WSL2 が必須
- **usbipd-win**: バージョン 4.x 以上

### システムの確認

Windows のビルドバージョンを確認します:

```bash
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v CurrentBuild
```

WSL のバージョンを確認します:

```bash
wsl -v
```

usbipd のバージョンを確認します:

```bash
usbipd --version
```

### 推奨 WSL ディストリビューション

| JetPack Version | Recommended WSL Distributions |
|-----------------|-------------------------------|
| JetPack 4.x     | Ubuntu 18.04                  |
| JetPack 5.x     | Ubuntu 18.04 / Ubuntu 20.04   |
| JetPack 6.x     | Ubuntu 20.04 / Ubuntu 22.04   |

特定バージョンの要件については、[NVIDIA SDK Manager documentation](https://developer.nvidia.com/sdk-manager#installation_get_started) を参照してください。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/jetpack_host.png" />
</div>

Microsoft Store からディストリビューションをインストールするか、コマンドラインを使用します:


```bash
# For example, install Ubuntu 22.04
wsl --install -d Ubuntu-22.04
```

## WSL2 カーネルのセットアップ

### カスタマイズされた WSL カーネル
さまざまな USB デバイスをサポートするには、カスタマイズされた WSL カーネルが必要です。次のいずれかを行うことができます:
- 以下の事前ビルド済みカーネルを使用する
- [このガイド](https://github.com/dorssel/usbipd-win/wiki/WSL-support)に従って独自のカーネルをビルドする

**事前ビルド済みカーネルのダウンロード**: [OneDrive Link](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBAoWWTQQsBSYpacMvUN9LYAUi6X_jPQmzYrGWtZtb5ilc?e=ZjNaJr)
- SHA256: `f249022feab9372d448d236a4401e087d0f150dd6b3367b571f0b9a703bd2d38`

カーネルの互換性を確認するには、インストール後に RNDIS サポートを確認します。

### 標準 WSL カーネルの置き換え

1. **WSL をシャットダウンする**:

```bash
wsl --shutdown
```

2. **WSL カーネルを設定する**:

**Windows 11 の場合**（またはそれ以降の Windows 10 ビルド）:
- WSL Settings GUI アプリケーションを開く
- 設定画面に移動し、カスタムカーネルのパスを設定する

**すべての Windows バージョン共通**:
`.wslconfig` ファイルを編集します:

```bash
notepad $env:USERPROFILE\.wslconfig
```

`[wsl2]` の下に次の設定を追加します:

```ini
[wsl2]
kernel=D:\\WSL_Kernel\\bzImage
```

:::note
`D:\\WSL_Kernel\\bzImage` を、ダウンロードしたカーネルファイルの実際のパスに置き換えてください。
:::

3. **WSL を再起動して確認する**:

```bash
# Restart WSL
wsl

# Check kernel information
uname -a

# Check RNDIS features
zcat /proc/config.gz | grep RNDIS
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/check_custom_kernel.png" />
</div>

## JetPack をフラッシュする

ほとんどのフラッシュ手順はネイティブ Ubuntu と同じです。この例では reComputer J4012 を使用します。

**ステップ 1: JetPack をダウンロードする**

[Seeed Flashing Summary Page](https://wiki.seeedstudio.com/ja/flash/jetpack_to_selected_product/) から、お使いのデバイスに適した JetPack バージョンをダウンロードします。このページでは次の情報が提供されています:
- すべての Seeed Jetson デバイス向け JetPack イメージ
- 各デバイスごとのフォースリカバリーモードへの入り方の詳細な手順

:::warning
Windows から WSL にファイルを移動する際は、ファイルパーミッションに注意してください。
:::

ファイルを移動して検証します:

```bash
# Move file from Windows drive to WSL storage
mv /mnt/c/Users/seeed/Downloads/mfi_recomputer-<xxxx>.tar.gz ~

# Remove execute permission
chmod -x mfi_recomputer-<xxxx>.tar.gz

# Verify SHA256 checksum
sha256sum mfi_recomputer-<xxxx>.tar.gz
```

:::note
パス `/mnt/c/Users/seeed/Downloads/` 内の `seeed` を、実際の Windows ユーザー名に置き換えてください。
:::

**ステップ 2: フォースリカバリーモードに入る**

:::tip
デバイス固有のリカバリーモード手順（ピン位置、ボタンの組み合わせ）については、[Seeed Flashing Summary Page](https://wiki.seeedstudio.com/ja/flash/jetpack_to_selected_product/) を参照し、お使いのデバイスモデルを選択してください。
:::

多くのデバイスに共通する一般的な手順:

1. Jetson デバイスの電源を完全に **オフにする**
2. ジャンパキャップまたはピンセットを使用して **FEC ピンと GND ピンをショートさせる**
3. **USB-C データケーブルを** Windows ホストに接続する
4. デバイスに **電源を接続する**
5. **2〜3 秒待ってから** ジャンパキャップを外す

これでデバイスはフォースリカバリーモードに入ります。

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png" />
</div>

:::note
上の例は reComputer J4012 を示しています。ピン位置はデバイスによって異なるため、必ずお使いのデバイス固有のドキュメントを確認してください。
:::

**ステップ 3: USB デバイスを WSL にアタッチする**

**PowerShell** または **Windows Terminal** を **管理者権限** で開きます。

**USB デバイスを一覧表示**（PowerShell で実行）:

```powershell
usbipd list
```

:::note
`usbipd: command not found` と表示される場合は、usbipd-win がインストールされており、システム PATH に追加されていることを確認してください。インストール後にターミナルを再起動する必要がある場合があります。
:::

デバイスが **APX** として表示されていれば、フォースリカバリーモードになっていることを示します。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_list.png" />
</div>

**デバイスをバインドする**（PowerShell で実行）:

```powershell
usbipd bind -b 1-1 -f
```

:::note
`usbipd list` の出力に表示される実際のバス ID で `1-1` を置き換えてください。
:::

再度 `usbipd list` を使用し、STATE が **Shared(forced)** に変わっていることを確認します。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_list_shared.png" />
</div>

**WSL にアタッチする**（PowerShell で実行）:

```powershell
usbipd attach -b 1-1 --wsl --auto-attach
```

次のような出力が表示されます:

```
usbipd: info: Using WSL distribution 'Ubuntu-22.04' to attach; the device will be available in all WSL 2 distributions.
usbipd: info: Using IP address 172.24.240.1 to reach the host.
usbipd: info: Starting endless attach loop; press Ctrl+C to quit.
WSL Attached
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_attach_apx.png" />
</div>

:::tip
このターミナルウィンドウは開いたままにしておいてください。フラッシュが完了した後にのみ `Ctrl+C` を押してください。
:::

**WSL で確認する**:

新しいターミナルで WSL を起動し、次を確認します:

```bash
lsusb
```

次のような出力が表示されます:

```
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 0955:7323 NVIDIA Corp. APX
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_rndis.png" />
</div>

これでデバイスは正常に WSL に接続されました。

**ステップ 4: デバイスをフラッシュする**

JetPack ディレクトリに移動し、フラッシュコマンドを実行します:

お使いのデバイスと要件に応じて、適切なフラッシュ方法を選択してください:

**オプション 1: Seeed BSP（Seeed デバイスに推奨）**

Seeed reComputer デバイスの場合は、事前ビルド済みの Massflash パッケージを使用します:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

:::note
フラッシュの前提パッケージがインストールされていることを確認してください:

```bash
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```
:::

**オプション 2: NVIDIA SDK Manager**

NVIDIA 公式開発キット、または SDK コンポーネントが必要な場合:

**1. SDK Manager を起動する:**

```bash
sdkmanager
```

**2. 画面の指示に従って** フラッシュプロセスを完了します。

:::tip
WSL2 上での SDK Manager の詳細な手順については、[NVIDIA official documentation](https://docs.nvidia.com/sdk-manager/wsl-systems/index.html) を参照してください。
:::

:::warning
**既知の制限事項**: SDK Manager は、WSL2 経由で外部 NVMe/SSD ストレージデバイスにフラッシュすることができません。外部 SSD にフラッシュする必要がある場合は、オプション 3（Initrd Flash）を使用するか、ネイティブの Ubuntu ホストを使用してください。
:::

**オプション 3: Initrd Flash（NVIDIA 公式開発キット向け）**

NVIDIA 公式開発キット（Jetson Orin Nano Developer Kit など）の場合:

Jetson Orin Nano Super Developer Kit の例:

```bash
# Download Jetson Linux
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2

# Download Root Filesystem
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2

# Extract Jetson Linux
tar xpf Jetson_Linux_r36.4.3_aarch64.tbz2

# Extract Root Filesystem
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C ./Linux_for_Tegra/rootfs

# Install prerequisites
sudo ./tools/l4t_flash_prerequisites.sh

# Apply binaries
sudo ./apply_binaries.sh

# Flash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/flash_send_blob.png" />
</div>

:::tip
`jetson-orin-nano-devkit` を、お使いのデバイスに対応するターゲット名に置き換えてください。正しいターゲット名については NVIDIA のドキュメントを確認してください。
:::

フラッシュプロセスが正常に完了すると、次のような出力が表示されます:

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/flash_success.png" />
</div>

フラッシュが完了したら、WSL から USB デバイスをデタッチできます：

```powershell
usbipd detach -b 1-1
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_detached.png" />
</div>

## トラブルシューティング

### USB デバイスが WSL に表示されない

- usbipd-win がバージョン 4.x 以上であることを確認します
- デバイスが強制リカバリーモードになっていることを確認します（APX と表示されるはずです）
- `-f`（force）フラグを付けてデバイスを再バインドしてみます
- 一時的に **Windows Defender Firewall** やウイルス対策ソフトを無効にします。これらが USB デバイスへのアクセスをブロックしている可能性があります
- 別の USB ポート（可能であれば USB 3.0）を試します

### フラッシュが失敗する、またはタイムアウトする

- 問題が解決しない場合は、ネイティブの Ubuntu ホストを使用します
- USB ケーブルの品質と接続を確認します（可能であれば純正ケーブルを使用します）
- Jetson デバイスへの電源供給が十分であることを確認します（5V/4A の電源アダプターを使用します）
- USB デバイスを使用している可能性のある他のソフトウェアをすべて閉じます
- `--auto-attach` フラグを付けずにフラッシュを実行し、接続状況を手動で監視してみます

### パーミッションの問題

- 常に **Administrator** 権限で usbipd コマンドを実行します
- Windows から WSL にファイルを移動する際は、ファイルのパーミッションを確認します
- WSL で permission denied エラーが発生する場合は、次を試します：`sudo chmod 666 /dev/bus/usb/001/*`

### WSL カーネルの問題

USB サポートが不足しているというエラーが表示される場合：
- カスタムカーネルが正しく読み込まれていることを確認します：`uname -r` の表示が標準の WSL カーネルとは異なるバージョンになっているはずです
- RNDIS サポートを確認します：`zcat /proc/config.gz | grep CONFIG_USB_NET_RNDIS`
- 問題が解決しない場合は、[公式ガイド](https://github.com/dorssel/usbipd-win/wiki/WSL-support)に従ってカーネルを再ビルドします

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
