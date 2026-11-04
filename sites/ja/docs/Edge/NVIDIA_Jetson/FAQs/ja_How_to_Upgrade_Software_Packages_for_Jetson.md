---
description: この FAQ では、Seeed キャリアボードのドライバを置き換えることなく Jetson のソフトウェアを更新する方法と、誤って nvidia-l4t をアップグレードしてしまった後に JetPack 5.1.3 または JetPack 6.2 を修復する方法を説明します。
title: Jetson のソフトウェアパッケージをアップグレードする
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /upgrade_software_packages_for_jetson
last_update:
  date: 10/16/2026
  author: Youjiang/Dayu
createdAt: '2025-02-11'
updatedAt: '2026-10-16'
url: https://wiki.seeedstudio.com/ja/upgrade_software_packages_for_jetson/
---

#### apt upgrade を実行してはいけないと言われましたが、ソフトウェアパッケージはどのようにアップグレードできますか？ソフトウェアをアップグレードしないとセキュリティ上のリスクはありますか？

A: Seeed の Jetson イメージでは `sudo apt upgrade` や `sudo apt full-upgrade` を実行しないでください。通常のアプリケーション更新は問題ありませんが、無人の NVIDIA アップグレードによって、Seeed の `nvidia-l4t` カーネル、デバイスツリー、およびドライバパッケージが NVIDIA 純正パッケージに置き換えられてしまう可能性があります。その結果、デバイスが起動しなくなったり、キャリアボード上の周辺機能が動作しなくなったりします。

`nvidia-l4t` に依存しないアプリケーションパッケージについては、必要なパッケージだけをインストールしてください：

```bash
sudo apt update
sudo apt-get install <your-package>
```

ほとんどのオープンソースソフトウェアについては、ソースコードをダウンロードして自分でビルドすることも安全な選択肢です。カーネル、ブートローダー、キャリアボードドライバをまとめて更新するには、完全な Seeed BSP または JetPack イメージを使用することを推奨します。

## 誤った nvidia-l4t アップグレードを修復する

apt 保護をまだ含んでいない 2 つの JetPack リリース向けに、修復パッケージが用意されています：

| JetPack | Jetson Linux | Repair package |
| --- | --- | --- |
| JetPack 5.1.3 | R35.5.0 | [seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQBHzK-usznrT72e9lsjdzvnAZf8tB1ohV93_-vjlazshYQ?e=ljS4tL) |
| JetPack 6.2 | R36.4.3 | [seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQCTqH9GsRQWSI-PhfPuJeycAR_oaUGvZc7jBTgcMMWS-fc?e=jV1YJF) |

JetPack 7 以降の Seeed ファームウェアでは、すでに NVIDIA カーネルとドライバパッケージが保持されているため、`apt` によって誤って置き換えられることはありません。これらのリリース向けの修復パッケージはありません。JetPack 7 以降のシステムがすでに破損している場合は、対応する Seeed イメージを書き込み直してください。

:::caution
修復は Jetson 本体上で実行し、`cat /etc/nv_tegra_release` の結果と一致するパッケージのみを使用してください。このスクリプトは Seeed のカーネルおよびドライバパッケージを復元します。`--with-bootloader` を明示的に追加しない限り、ブートローダーパッケージはインストールしません。
:::

### JetPack 5.1.3 / L4T R35.5.0

まずリリースを確認します：

```bash
cat /etc/nv_tegra_release
```

最初の行に `R35 (release), REVISION: 5` が含まれている必要があります。`seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip` をダウンロードし、Jetson にコピーして、次を実行します：

```bash
unzip -o seeed-jetson-linux-r35.5.0-bsp_fix-bundle-1.zip
cd seeed-jetson-linux-r35.5.0-bsp-bundle
sudo ./seeed-linux-bsp-repair.sh
sudo reboot
```

ブートローダー自体を修復する必要がある場合にのみ `--with-bootloader` を追加してください。再起動後、復元されたパッケージを確認します：

```bash
dpkg -l nvidia-l4t-kernel nvidia-l4t-kernel-dtbs nvidia-l4t-kernel-headers nvidia-l4t-display-kernel
cat /etc/nv_boot_control.conf
dpkg --audit
```

4 つのパッケージはインストール済みまたは hold 状態であり、そのバージョンには `+seeed1` が含まれている必要があります。`dpkg --audit` は何も出力しないはずです。修復ログは `/var/log/seeed-linux-bsp-r35.5.0-repair.log` にあります。

### JetPack 6.2 / L4T R36.4.3

まずリリースを確認します：

```bash
cat /etc/nv_tegra_release
```

出力には `R36` と `REVISION: 4.3` が含まれている必要があります。`seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip` をダウンロードし、Jetson にコピーして、次を実行します：

```bash
unzip -o seeed-jetson-linux-r36.4.3-bsp_fix-bundle.zip
cd seeed-jetson-linux-r36.4.3-bsp-bundle
sudo ./seeed-linux-bsp-repair.sh
sudo reboot
```

スクリプトがキャリアボードを識別できない場合は、処理を中止し、Seeed 製品名を指定して再実行してください：

```bash
sudo ./seeed-linux-bsp-repair.sh --board recomputer-orin-super-j401
```

`recomputer-orin-super-j401` を、修復対象の Seeed キャリアボードまたは製品の名称に置き換えてください。検出されたボード名がすでに正しい状態で、対話なしでコマンドを実行する必要がある場合にのみ `--auto` を使用します。ファームウェアの修復が必要な場合にのみ `--with-bootloader` を追加してください。R36.4.3 の修復パッケージには Orin Super 用ブートローダーカプセルが含まれていないため、Orin Super ハードウェアでこのオプションを使用する前に、モジュールとファームウェアを確認してください。

再起動後、次を確認します：

```bash
dpkg -l nvidia-l4t-kernel nvidia-l4t-kernel-dtbs nvidia-l4t-kernel-headers nvidia-l4t-kernel-oot-modules nvidia-l4t-display-kernel
uname -r
dpkg --audit
```

パッケージバージョンには `+seeed1` が含まれている必要があり、`uname -r` は `5.15.148-tegra` を報告するはずです。修復ログは `/var/log/seeed-linux-bsp-r36.4.3-repair.log` にあり、スクリプトのバックアップは `/opt/nvidia/l4t-packages/seeed-r36.4.3-repair-backup` にあります。


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
