---
description: アップグレードやロールバックなどのバージョン管理
title: OSバージョン管理
keywords:
  - Edge
  - reCamera
  - recamera
  - オペレーティングシステム
  - バージョンアップグレード
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.webp
slug: /ja/recamera_os_version_control
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Parker Hu & Dawn Yao
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Webを使用したOS更新/アップグレードガイドライン
type-cケーブルを使用してrecameraをコンピュータに接続し、コンピュータのブラウザで`http://192.168.42.1/#/system`にアクセスします。ネットワーク経由でデバイスにアクセスする場合は、IPアドレスを置き換えてください。アップグレードする前に、`ip_address/#/network`でreCameraが**インターネットに接続されている**ことを確認してください。

`System`設定をクリックし、新しいファームウェアがリリースされている場合は、`Apply`をクリックしてデバイスシステムを更新/アップグレードします。新しいファームウェアが自動検出されない場合、ボタンのテキストは「Check」と表示されます。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image.png" /></div>

進行バーが完了するまで待ちます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-1.png" /></div>

`Restart`をクリックしてシステムの更新/アップグレードを完了します。**ブラウザをリフレッシュ**して約30秒後にデバイスに再接続してください。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-2.png" /></div>

システムは自動的に更新可能な新しいバージョンのファームウェアがあるかどうかを確認します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-3.png" /></div>

## コマンドによるOSバージョン管理

### OTAによるデバイス管理
#### 最新のOTAバージョンへの更新/アップグレード
最新バージョンの[reCamera OSはこちら](https://github.com/Seeed-Studio/reCamera-OS)で確認できます。

最新のOTAファームウェアを手動で更新/アップグレードするには以下を使用します：
```bash
# 最新のファームウェアバージョンにアップグレード
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 

sudo /mnt/system/upgrade.sh start
```
または
#### 特定のOTAバージョンへの更新/アップグレードまたはロールバック
特定のバージョンをデプロイしたい場合は、以下のコマンドを使用します。
```bash
# 例：バージョン0.1.4をインストールする場合
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/tag/0.1.4

sudo /mnt/system/upgrade.sh start
```
OSを開発していてGitHubに独自のブランチがある場合は、ブランチリンクを使用してシステムバージョンを更新/アップグレードすることもできます。
```bash
sudo /mnt/system/upgrade.sh latest https://github.com/your-user-name/reCamera-OS/releases/your-version-file-address

sudo /mnt/system/upgrade.sh start
```
#### OSバージョン0.1.3以下の場合
`upgrade.sh`を使用してOTAを行いたいが、バージョンが**0.1.3以下**の場合は、以下の手順に従ってください：

1. USB-Type Cケーブルでデバイスをコンピュータに接続し、**192.168.42.1/#/terminal**にアクセスします。フォルダ内でupgrade.shスクリプトを見つけます。
```bash
cd /mnt/system
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/find_upgrade_script.png" /></div>

2. このスクリプトの権限を変更します。
```bash
sudo rootfs_rw on
sudo chmod +x upgrade.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_file_permission.png" /></div>

3. 古い`upgrade.sh`ファイルを削除し、正常に削除されたか確認します。
```bash
sudo rm upgrade.sh
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/remove_script.png" /></div>

4. [Github](https://github.com/Seeed-Studio/reCamera-OS/blob/sg200x-reCamera/external/ramdisk/rootfs/overlay/cv181x_musl_riscv64/system/upgrade.sh)にアクセスし、最新の`upgrade.sh`スクリプトをダウンロードします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/download_sh_github.png" /></div>

5. フォルダの権限を変更します。
```bash
sudo chmod 777 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_folder_permission.png" /></div>

6. デスクトップ/PCのターミナルを開き、ダウンロードしたスクリプトを同じフォルダ内のreCameraにコピーします。
```bash
sudo scp your_folder_address/upgrade.sh recamera@192.168.42.1:/mnt/system/
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/scp_file.png" /></div>

7. Webページに戻り、新しい`upgrade.sh`があるか確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/new_script.png" /></div>

8. 安全のためフォルダの権限を元に戻します。
```bash
sudo chmod 755 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/chang_back_permission.png" /></div>

9. [OTAコマンド](#device-management-by-ota)を使用して任意のバージョン管理を試すことができます。

### ローカルパッケージによるデバイス管理
ローカルOTAパッケージを使用してファームウェアを手動で更新/アップグレードすることもできます。OTAファームウェアは[こちら](https://github.com/Seeed-Studio/reCamera-OS/releases/)からダウンロードできます。scpなどのツールを使用してファイルをreCameraに転送します。
```bash
sudo scp sg2002_reCamera_0.1.3_emmc_ota.zip recamera@ip_address:~/
```
その後、bashを使用してデプロイします。
```bash
sudo /mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```
:::note
recameraにファイルを転送するための十分な権限がない場合は、`rootfs_rw on/off`を入力してシステムファイルを読み取り可能または書き込み可能に変更できます。
:::

### 工場出荷時設定への手動復元
このコマンドを使用すると、reCameraを工場出荷時設定に復元できます。この操作を行うと、Node-REDフローやローカルストレージなどのユーザーデータがすべて削除されます。
```bash
sudo /mnt/system/upgrade.sh recovery
```

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>