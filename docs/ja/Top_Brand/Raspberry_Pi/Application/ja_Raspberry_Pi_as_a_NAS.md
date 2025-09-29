---
description: Raspberry PiをNASとして使用する
title: Raspberry PiをNASとして使用する
keywords:
- アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Raspberry_Pi_as_a_NAS
last_update:
  date: 05/15/2025
  author: Frank
---


# Raspberry PiをNAS（ネットワーク接続ストレージ）として使用する

Raspberry Piは、技術愛好家の間で人気のある強力なマイクロコンピュータです。さまざまなDIYプロジェクトに使用でき、その中にはネットワーク接続ストレージ（NAS）のセットアップも含まれます。このガイドでは、以下の側面について探ります：

- [Raspberry PiはNASに適しているか？](#jump1)
- [Raspberry Pi 5をNASに変換する方法](#jump2)
- [Raspberry PiをNASとして使用する際の一般的な問題と解決策](#jump3)

## <span id="jump1"> Raspberry PiはNASに適しているか？ </span>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Raspberry Pi.png" alt="pir" width={500} height="auto" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

Raspberry Piは強力な処理能力と柔軟な構成オプションを備えており、NASを構築するための理想的な選択肢です。以下はその利点です：
- **コスト効率**：Raspberry Piは従来のNASデバイスと比較して比較的安価です。
- **低消費電力**：Raspberry Piは非常に低い消費電力を持ち、24時間365日の運用に適しています。
- **柔軟性とカスタマイズ性**：さまざまなオペレーティングシステムやソフトウェアをインストールして、必要に応じてNASを構成できます。
- **コミュニティサポート**：Raspberry Piには大規模なユーザーコミュニティがあり、豊富なリソースと技術サポートを提供しています。

ただし、以下の制約を考慮する必要があります：
- **性能の制約**：Raspberry Piは、大量のデータを処理する際に高性能なNASデバイスと比較して性能の制約がある場合があります。
- **ストレージの制約**：Raspberry Pi自体には大容量のストレージが内蔵されておらず、外部ハードドライブやSSDが必要です。

## <span id="jump2"> Raspberry Pi 5をNASに変換する方法 </span>

Raspberry Pi 5をNASに変換するのは複雑ではありません。以下の手順に従ってください：

### ステップ1：ハードウェアの準備
- [Raspberry Pi 5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)
- microSDカード（32GB以上推奨）
- 安定した電源アダプター
- 外部ハードドライブまたはSSD
- ネットワーク接続（有線または無線）

### ステップ2：オペレーティングシステムのインストール

1. [Raspberry Pi Imager](https://www.raspberrypi.com/software/)のようなツールを使用して、OSイメージをmicroSDカードに書き込みます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/imager.png" alt="pir" width={800} height="auto" /></div>

2. 「Raspberry Pi 5」->「Raspberry Pi OS (32-bit)」-> SDカードを選択します（他のUSBデバイスが接続されている場合はデータ損失を避けるため、正しいデバイスを選択してください）。次に「Next」をクリックします。以下は例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/burn1.gif" alt="pir" width={800} height="auto" /></div>

3. 次に設定を編集します。以下は提供される設定の例です：
- 推奨されるホスト名「nas」を入力します。
- 後で認証に必要なユーザー名とパスワードを入力します。
- 「WiFiを構成する」のチェックボックスをオンにして、Piが自動的にWi-Fiに接続できるようにします。
- ネットワークSSID（名前）とパスワードを入力します。
- 「SSHを有効にする」のチェックボックスをオンにして、マウスやキーボードを使用せずにPiに接続できるようにします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/burn2.gif" alt="pir" width={800} height="auto" /></div>

4. 「Save」をクリックした後、イメージの書き込みを開始します。このプロセスには時間がかかる場合があります。以下の画像のように表示された場合、書き込みが完了したことを示します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Burn completed.png" alt="pir" width={800} height="auto" /></div>

### ステップ3：Piへのリモート接続

SDカードを挿入した後、Raspberry Piに電源を入れます（可能であれば、イーサネットケーブルを使用してネットワークに接続しますが、このチュートリアルではイメージング中に選択したWiFiを使用します）。

コンピュータでターミナルセッションを開き、以下のコマンドを実行してSSH経由でRaspberry Piにアクセスします。**username**と**hostname**はイメージング中に設定したものに置き換えてください：

```bash
$ ssh <username>@<hostname>.local
```

例：

```bash
$ ssh seeed@nas.local
```

イメージング中に作成したパスワードを入力する必要があります。以下は例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Remote Connection.gif" alt="pir" width={800} height="auto" /></div>

SSH接続が完了したので、これをNASに変換する準備が整いました。

### ステップ4：NASのインストールと構成

#### 1. ドライブの確認

まず、ストレージデバイスをRaspberry Piに接続し、以下のコマンドを使用して接続されたストレージデバイスを確認します：

```bash
$ lsblk
```

以下のような出力が表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/locate the drive.gif" alt="pir" width={800} height="auto" /></div>

:::tip
この出力では、mmcblk0はmicroSDカードであり、最初に接続されたUSBストレージデバイスはsda（ストレージデバイスA）として表示されます。追加のデバイスはsdb、sdcなどとして表示されます。
:::

#### 2. ドライブのパーティション分割

次に、Raspberry Pi OSが単一のストレージデバイスとして認識できるようにドライブをパーティション分割します：

```bash
$ sudo fdisk /dev/sda
```

以下は関連するコマンドです：
- 新しいパーティションを作成：n
- 現在のパーティションを一覧表示：p
- パーティションを削除：d
- 保存せずに終了：q

このプロジェクトでは、新しいパーティションを作成するために「**n**」を入力し、**Enter**キーを押します。その後、「**p**」を入力して**Enter**を押し、プライマリパーティションとして指定します。残りのオプションについては、**Enter**を押してデフォルト設定を選択します。既存のパーティションがある場合は、「**d**」を入力して削除します。以下はその例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/partition the drive1.gif" alt="pir" width={800} height="auto" /></div>

:::tip
「**All space for primary partitions is in use**（プライマリパーティションのスペースがすべて使用されています）」というメッセージが表示された場合、ディスク上にすでに4つのプライマリパーティション、または3つのプライマリパーティションと1つの拡張パーティションが存在していることを意味します。この場合、パーティションを削除する必要があります（**d**）。
:::

:::note
ディスクにマウントされたパーティションがある場合（例：sda1）、以下の手順でアンマウントしてください：
1. fdiskを終了する：`q`を入力して**Enter**を押し、fdiskを終了して誤った変更を防ぎます。
2. ファイルシステムをアンマウントする：ディスクにマウントされたパーティションがある場合、まずそれらをアンマウントします。以下のコマンドでマウントされたパーティションを確認できます：

```bash
$ mount | grep /dev/sda
```

3. 次に、以下のように`umount`コマンドを使用してアンマウントします：

```bash
$ sudo umount /dev/sda1
```

4. 以下を実行します：

```bash
$ sudo fdisk /dev/sda 
```

以下はその例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/partition the drive2.gif" alt="pir" width={800} height="auto" /></div>

その後、上記のパーティション作成手順に戻ります。
:::

#### 3. ドライブをフォーマットする

ドライブのパーティションが完了したら、Raspberry Pi OSがデータをアクセスおよび操作できるようにフォーマットする必要があります。ext4ファイルシステムでドライブをフォーマットするには、以下のコマンドを使用します：

```bash
$ sudo mkfs.ext4 /dev/sda1
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/format the drive.gif" alt="pir" width={800} height="auto" /></div>

#### 4. ドライブをマウントする

次に、ドライブをマウントしてRaspberry Piのファイルシステムで使用可能にします：
```bash
$ sudo mount /dev/sda1 /mnt
```

システム起動時にドライブが自動的にマウントされるようにするには、以下を実行します：
```bash
$ sudo nano /etc/fstab
```

ファイルの末尾に以下の行を追加します：
```
/dev/sda1 /mnt/sda1/ ext4 defaults,noatime 0 1
```

**Ctrl**+**X**、次に**Y**、最後に**Enter**を押してnanoで編集したファイルを保存します。以下はその例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/mount the drive.gif" alt="pir" width={800} height="auto" /></div>

#### 5. 共有フォルダを作成する

以下のコマンドを実行して、ドライブ上に共有フォルダを作成します：
```bash
$ sudo mkdir /mnt/sda1/shared
```

次に、Raspberry Pi上のすべてのユーザーに読み取り、書き込み、実行権限を付与します：
```bash
$ sudo chmod -R 777 /mnt/sda1/shared
```

以下はその例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/create a shared folder.gif" alt="pir" width={800} height="auto" /></div>

### ステップ5：ドライブをネットワークで共有する

ネットワーク上でディレクトリを共有するためのツールである[Samba](https://www.samba.org/)をインストールするには、以下のコマンドを実行します：
```bash
$ sudo apt install samba samba-common-bin
```

以下はその例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network1.gif" alt="pir" width={800} height="auto" /></div>

次に、Sambaを設定してディレクトリをネットワーク上で共有します。Samba設定ファイルを編集して指示を与えます。設定ファイル`smb.conf`をエディタで開きます：
```bash
$ sudo nano /etc/samba/smb.conf
```

ファイルの末尾に以下の行を追加します：
```
[shared]
path=/mnt/sda1/shared
writeable=Yes
create mask=0777
directory mask=0777
public=no
```

**Ctrl**+**X**、次に**Y**、最後に**Enter**を押してnanoで編集したファイルを保存します。以下はその例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network2.gif" alt="pir" width={800} height="auto" /></div>

設定変更を適用するためにSambaを再起動します：
```bash
$ sudo systemctl restart smbd
```

以下はその例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Share the Drive Over the Network3.gif" alt="pir" width={800} height="auto" /></div>

### ステップ6：ドライブへのアクセス権を付与する

最後に、Samba共有にアクセスできるようにするため、認証されたユーザーにのみファイルへのアクセス権を付与します。以下のコマンドを実行して、Samba共有を管理するユーザーを作成します。この例では、ユーザー名を`pinas`とします：

```bash
$ sudo adduser <username>
```

以下はその例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Grant access to the drive1.gif" alt="pir" width={800} height="auto" /></div>

次に、以下のコマンドを使用してそのユーザーにパスワードを設定します：
```bash
$ sudo smbpasswd -a <username>
```

以下はその例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Grant access to the drive2.gif" alt="pir" width={800} height="auto" /></div>

### ステップ7：NASにアクセスして使用する

#### Windowsから

1. ファイルエクスプローラーを開き、「ネットワークドライブの割り当て」をコンピュータメニューから選択します。
2. ドライブ文字を選択し、フォルダパスを入力します。このチュートリアルでは、パスは`\\nas\pinas`です。ドメイン名形式を使用すると、IPアドレスが変更されてもデバイスに簡単にアクセスできます。
3. ログインユーザー名とパスワードを入力します。以下はその例です：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Access and Use the NAS.gif" alt="pir" width={800} height="auto" /></div>

4. ログイン後、サーバー上のファイルにアクセスできます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Raspberry_Pi_NAS/Access and Use the NAS finished.png" alt="pir" width={800} height="auto" /></div>

### 次のステップ

もし、ハードドライブと Raspberry Pi をより整理され、見た目が美しくなるようにしたい場合は、3Dプリンターを使用してブラケットやエンクロージャーを作成し、Raspberry Pi と外付けハードドライブを固定して一緒に組み立てることができます。

## <span id="jump3"> Raspberry Pi を NAS として使用する際の一般的な問題と解決策 </span>

Raspberry Pi を NAS として使用する際に遭遇する可能性がある一般的な問題とその解決策を以下に示します：

### 質問 1: Raspberry Pi NAS の性能を向上させる方法は？

- データ読み取り速度を向上させるために HDD の代わりに SSD を使用する。
- Raspberry Pi を有線ネットワークに接続して、より安定した性能を確保する。
- Samba の設定ファイルを最適化し、キャッシュ設定や最大接続数を調整する。

### 質問 2: Raspberry Pi NAS を安全に保つ方法は？
- セキュリティ脆弱性を修正するために、システムとソフトウェアを定期的に更新する。
- 強力なパスワードを使用し、SSH アクセスを制限する。
- ファイアウォールを設定し、リモートアクセスには VPN を使用する。

### 質問 3: Raspberry Pi NAS へのバックアップを自動化する方法は？
- rsync ツールを使用して定期的なバックアップタスクを設定する：
```bash
rsync -av --delete /source_directory /mnt/external_hdd/backup_directory
```
- cron ジョブを設定して自動バックアップを実行する。

## 技術サポート & 製品に関するディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>