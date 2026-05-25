---
description: Jetsonフラッシュプロセス中のタイムアウト問題の可能な原因を一覧表示します。
title: UUID エラーの問題を解決する
keywords:
  - reComputer
  - jetpack
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /deal_the_issue_of_UUID
sku: 100001302,E2025021103
last_update:
  date: 01/08/2026
  author: Dayu
createdAt: '2026-01-08'
updatedAt: '2026-01-08'
url: https://wiki.seeedstudio.com/ja/deal_the_issue_of_UUID/
---

# 🚨 問題の説明

Jetsonカーネル関連のコンテンツを一切変更していないにも関わらず、Jetsonデバイスは起動時にUUID関連のエラーに遭遇し、リカバリターミナルに入ります。この問題により正常なシステム起動が妨げられ、解決するために手動での介入が必要になります。

## 🔍 症状

**ユーザーパーティションにアクセスできない（UUIDエラー）**

最初に、システムが謎めいた形でユーザーパーティションのマウントに失敗し、以下の画像に示すように継続的な起動失敗が発生します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/other/UUID-error.jpg"/></div>

**システムがリカバリモードに入る**

その後、システムは異常にリカバリモード（レスキューターミナル）に入ります：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/other/rc-terminal.png"/></div>

この問題は通常、起動プロセスが破損したシステムファイルや不正なパーティションフラグに遭遇した際に発生し、システムが正常な起動に失敗してリカバリシェル環境に落ちる原因となります。UUIDエラーは、システムが正常な動作に不可欠なルートファイルシステムを適切に識別またはマウントできないことを示しています。




# 🛠️ 解決方法




## 方法1：OTAフラグをクリアしてinitrdファイルを置換する

**考えられる原因：** `/boot/initrd`イメージファイルが破損し、起動プロセスが中断される。

**症状：** システムが起動時に正常なOSに入ることができず、繰り返しリカバリモードに入り、`bash-5.1#`シェルに落ちる。

### ステップ1：リカバリターミナルでEFI変数をマウントする

まず、リカバリターミナルでEFI変数ファイルシステムをマウントします：

```bash
mount -t efivarfs efivarfs /sys/firmware/efi/efivars
```

### ステップ2：OTAフラグ変数をクリアする

`bash-5.1#`シェル環境で、OTAフラグビットを削除してクリアします：
**1. L4Tデフォルト起動モードフラグを削除してクリア：**

```bash
chattr -i /sys/firmware/efi/efivars/L4TDefaultBootMode-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/L4TDefaultBootMode-781e084c-a330-417c-b678-38e696380cb9
```



**2. パーティションAステータスフラグを削除してクリア：**

```bash
chattr -i /sys/firmware/efi/efivars/RootfsStatusSlotA-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/RootfsStatusSlotA-781e084c-a330-417c-b678-38e696380cb9
```



**3. パーティションBステータスフラグを削除してクリア：**

```bash
chattr -i /sys/firmware/efi/efivars/RootfsStatusSlotB-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/RootfsStatusSlotB-781e084c-a330-417c-b678-38e696380cb9
```

### ステップ3：システムの電源を切る

誤ったフラグビットをクリアした後、Jetsonデバイスをシャットダウンして電源を切ります。

### ステップ4：/boot/initrdファイルを置換する

SSDエンクロージャーを使用してJetsonのSSDをPCに接続し、`/boot/initrd`ファイルを置換します。**置換前に古いinitrdファイルをバックアップすることをお勧めします。**

**詳細手順：**
- **ドライブを取り外す：** 開発ボードからSSDを取り出し、SSDエンクロージャーを使用してPC（Linux環境）に接続します。
- **パーティションをマウントする：** SSDからシステムルートパーティション（RootFS）をマウントします。
- **ファイルを置換する：**
  - a. マウントポイント内の`/boot/initrd`ファイルを見つけます。
  - b. 新しい、動作確認済みのinitrdイメージ（または新しくコンパイルされたイメージ）で置換します。
- **復旧テスト：** SSDを開発ボードに再インストールして電源を入れます。


**initrdファイルのダウンロードリンク：**

**🔗 L4T 36.4.0 (JetPack 6.1)：**
[ダウンロードはこちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD15MxbJs_tTqEKA0ouhCygAR7LuRFU5wZzczSziLYUX2s?e=kM4KjT)

**🔗 L4T 36.4.3 (JetPack 6.2)：**
[ダウンロードはこちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCpm0jqIgDxRIvM3kk_40P6AX8bfvYF6AbEJ8fRWCNMS8c?e=4nMyMM)

**🔗 L4T 36.4.4 (JetPack 6.2.1)：**
[ダウンロードはこちら](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBFn84LQJqlQ7BgIzvCPp6gAcD9I80K2RBW0v88Uvjh8zs?e=IyaREq)



### ステップ5：Jetsonを再起動する

ファイル置換を完了した後、Jetsonデバイスを再起動します。

## 🔄 方法2：新規インストールアプローチ

<div>空のSSD</div>を準備し、Jetsonデバイス内で置換します。システムをフラッシュした後（JetPackバージョンが古いSSDと一致することを確認）、古いSSDに戻します。

古いSSD上のコンテンツはそのまま残り、正常に起動するはずです。




## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
