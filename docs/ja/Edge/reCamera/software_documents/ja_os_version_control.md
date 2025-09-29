---
description: アップグレードやロールバックなどのバージョン管理
title: OSバージョン管理
keywords:
  - Edge
  - reCamera
  - recamera
  - Operating system
  - version upgrade
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.webp
slug: /ja/recamera_os_version_control
sidebar_position: 1
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
---

# WebによるOSアップデート/アップグレードガイドライン

type-cケーブルを使用してrecameraをコンピュータに接続し、コンピュータのブラウザで`http://192.168.42.1/#/system`にアクセスするか、ネットワーク経由でデバイスにアクセスしている場合はIPアドレスを置き換えてください。アップグレードする前に、`ip_address/#/network`をチェックしてreCameraが**インターネットにアクセスできる**ことを確認してください。

`System`設定をクリックし、新しいファームウェアがリリースされている場合は、`Apply`をクリックしてデバイスシステムをアップデート/アップグレードします。新しいファームウェアが自動検出されない場合、ボタンのテキストは「Check」になります。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image.png" /></div>

プログレスバーが完了するまで待ちます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-1.png" /></div>

`Restart`をクリックしてシステムのアップデート/アップグレードを完了します。デバイスに再接続するために、約30秒後に**ブラウザを更新**してください。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-2.png" /></div>

システムは自動的にアップデート/アップグレード可能な新しいバージョンのファームウェアがあるかどうかをチェックします。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-3.png" /></div>

## コマンドによるOSバージョン管理

### OTAによるデバイス管理

#### 最新のOTAバージョンへのアップデート/アップグレード

[reCamera OSの最新バージョンはこちらで確認できます。](https://github.com/Seeed-Studio/reCamera-OS)

最新のOTAファームウェアを手動でアップデート/アップグレード：

```bash
#Upgrade to the latest firmware version
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 

sudo /mnt/system/upgrade.sh start
```

#### 特定のOTAバージョンへの更新/アップグレードまたはロールバック

デプロイしたい特定のバージョンがある場合は、以下のコマンドを使用できます。

```bash
#E.g. install 0.1.4 as an example
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/tag/0.1.4

sudo /mnt/system/upgrade.sh start
```

OSを開発していて、githubに独自のブランチがある場合は、そのブランチリンクを使用してシステムバージョンを更新/アップグレードすることもできます。

```bash
sudo /mnt/system/upgrade.sh latest https://github.com/your-user-name/reCamera-OS/releases/your-version-file-address

sudo /mnt/system/upgrade.sh start
```

#### OSバージョン0.1.3以下の場合

`upgrade.sh`でOTAを行いたいが、バージョンが**0.1.3以下**の場合は、以下の手順に従ってください：

1. USB-type Cケーブルでデバイスをコンピュータに接続し、**192.168.42.1/#/terminal**にアクセスします。フォルダ内のupgrade.shスクリプトを見つけます

```bash
cd /mnt/system
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/find_upgrade_script.png" /></div>

2. このスクリプトの権限を変更する

```bash
sudo rootfs_rw on
sudo chmod +x upgrade.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_file_permission.png" /></div>

3. 古い `upgrade.sh` ファイルを削除し、正常に削除されたかどうかを確認します。

```bash
sudo rm upgrade.sh
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/remove_script.png" /></div>

4. [Github](https://github.com/Seeed-Studio/reCamera-OS/blob/sg200x-reCamera/external/ramdisk/rootfs/overlay/cv181x_musl_riscv64/system/upgrade.sh)にアクセスして、最新の`upgrade.sh`スクリプトをダウンロードします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/download_sh_github.png" /></div>

5. フォルダの権限を変更します

```bash
sudo chmod 777 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_folder_permission.png" /></div>

6. デスクトップ/PCのターミナルを開き、ダウンロードしたスクリプトを同じフォルダ下のreCameraにコピーします。

```bash
sudo scp your_folder_address/upgrade.sh recamera@192.168.42.1:/mnt/system/
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/scp_file.png" /></div>

7. Webページに戻って、新しい`upgrade.sh`があるかどうかを確認します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/new_script.png" /></div>

8. 安全のためにフォルダの権限を元に戻します

```bash
sudo chmod 755 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/chang_back_permission.png" /></div>

9. これで[OTAコマンド](#device-management-by-ota)を試してバージョン制御を行うことができます。

### ローカルパッケージによるデバイス管理

ローカルのotaパッケージを使用してファームウェアを手動で更新/アップグレードすることもできます。otaファームウェアは[こちらからダウンロード](https://github.com/Seeed-Studio/reCamera-OS/releases/)できます。scpなどのツールを使用してファイルをreCameraに転送してください。

```bash
sudo scp sg2002_reCamera_0.1.3_emmc_ota.zip recamera@ip_address:~/
```

次に、bashを使用してデプロイします。

```bash
sudo /mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```

:::note
reCamera にファイルをダンプするのに十分な権限がない場合は、`rootfs_rw on/off` と入力してシステムファイルを読み取り可能または書き込み可能に変更できます。
:::

### 手動で工場出荷時設定に復元

このコマンドは reCamera を工場出荷時設定に復元できます。これを使用すると、Node-RED フローやローカルストレージなど、すべてのユーザーデータが削除されます。

```bash
sudo /mnt/system/upgrade.sh recovery
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
