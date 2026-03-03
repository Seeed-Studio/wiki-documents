---
description: ODYSSEY - X86 上の Mender クライアント
title: ODYSSEY - X86 上の Mender クライアント
keywords:
- ソフトウェア Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Mender-Client-ODYSSEY-X86
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# ODYSSEY - X86 上の Mender クライアントのインストール

ODYSSEY - X86 ボードに Mender クライアントをセットアップし、ホスト型またはセルフホスト型の Mender サーバーから OTA アップデートを受信することができます。

このガイドでは、Yocto Project を使用してコンパイルされたカスタム Linux システムを実行している ODYSSEY - X86 ボードを使用することに焦点を当てています。

## テスト結果

以下の表に記載されている Yocto Project リリースは、Mender コミュニティによってテストされています。他の [Yocto Project リリース](https://wiki.yoctoproject.org/wiki/Releases?target=_blank) でこの統合をテストした場合は、更新してください。

| Yocto Project | ビルド | 実行時 |
|---|---|---|
| dunfell (3.1 / 5.3.0) | テスト成功 | テスト成功 |

**ビルド** は、この Mender 統合を使用して Yocto Project ビルドがエラーなしで完了し、イメージを出力することを意味します。  
**実行時** は、Mender がボード上で動作することが確認されたことを意味します。U-Boot ベースのボードの場合、[統合チェックリスト](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank) が確認されています。

## 前提条件

- ワークステーション/ラップトップに [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros) に記載されているように、サポートされている Linux ディストリビューションと依存関係がインストールされていること
  - 注意: 使用する Yocto バージョンに応じて手順が異なります。
- [ODYSSEY - X86 ボード](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)

## ビルドの設定

### Yocto 環境のセットアップ

ビルドする Yocto Project ブランチを設定します。

`mender-seeed` セットアップ用のディレクトリを作成し、メタ情報をクローンします。

```
mkdir mender-seeed && cd mender-seeed
```

必要なすべてのレイヤーを取得します。

```
git clone -b dunfell git://git.yoctoproject.org/poky layers/poky
git clone git://git.yoctoproject.org/meta-intel layers/meta-intel 
git clone -b dunfell https://github.com/mendersoftware/meta-mender layers/meta-mender
git clone -b dunfell https://github.com/openembedded/meta-openembedded  layers/meta-openembedded
git clone https://github.com/Seeed-Studio/meta-odyssey-x86 layers/meta-odyssey-x86
```

### ビルド環境のセットアップ

ビルド環境を初期化します。

```
source layers/poky/oe-init-build-env 
```

Yocto プロジェクトのレイヤーを追加します。

```
bitbake-layers add-layer  ../layers/meta-intel 
bitbake-layers add-layer  ../layers/meta-odyssey-x86 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-oe 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-python 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-networking 
bitbake-layers add-layer  ../layers/meta-mender/meta-mender-core 
bitbake-layers add-layer  ../layers/meta-mender/meta-mender-demo 
```

Mender 設定をビルド環境に適用します。

```
CONF_VERSION = "1"
MACHINE = "odyssey-x86-mender"
MENDER_ARTIFACT_NAME = "release-1"
INHERIT += "mender-full"
DISTRO_FEATURES_append = " systemd"
VIRTUAL-RUNTIME_init_manager = "systemd"
DISTRO_FEATURES_BACKFILL_CONSIDERED = "sysvinit"
VIRTUAL-RUNTIME_initscripts = ""
MENDER_STORAGE_DEVICE = "/dev/sda"
MENDER_STORAGE_TOTAL_SIZE_MB_DEFAULT = "4096"
MENDER_BOOT_PART_SIZE_MB = "64"
MENDER_DATA_PART_SIZE_MB = "1024"
MENDER_IMAGE_BOOTLOADER_FILE = "wic-initrd"

IMAGE_FEATURES_append = " \
    ssh-server-openssh \
    "
```

`local.conf` に記載します。

### Mender サーバー URL の設定（オプション）

このセクションはビルドの成功には必須ではありませんが、デフォルトで生成されるイメージはサーバー設定がないため、[スタンドアロンデプロイメント](https://docs.mender.io/architecture/standalone-deployments?target=_blank) での使用にのみ適しています。

使用している Mender サーバーに接続するように、生成されたイメージと Mender アーティファクトを設定するには、`conf/local.conf` ファイルを編集して Mender サーバー設定を提供します。生成された `conf/local.conf` ファイルにはすでにコメントアウトされたセクションがあるはずなので、関連する設定オプションを単にコメント解除し、適切な値を割り当てることができます。

ホスト型 Mender 用にビルドする場合:

```
# テナントトークンを取得するには:
#    - https://hosted.mender.io にログイン
#    - 右上のメールアドレスをクリックし、「My organization」を選択
#    - 「COPY TO CLIPBOARD」を押す
#    - クリップボードの内容を MENDER_TENANT_TOKEN に割り当てる
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<トークンをここにコピー>"
```

Mender デモサーバー用にビルドする場合:

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<Mender デモサーバーの IP アドレス>"
```

Mender 本番環境/セルフホスト型（オンプレミス）用にビルドする場合:

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# 以下をコメント解除し、設定したドメイン名に一致する URL を更新し、
# 生成された server.crt ファイルへのパスを提供します。
#
# カスタム server.crt ファイルは、自己署名証明書を使用している場合にのみ必要です。
#
# 注意! 以下の情報はカスタム Yocto レイヤーで提供することを推奨します。
# これはデモ目的のみです。詳細についてはリンクされたドキュメントを参照してください。
MENDER_SERVER_URL = "<セルフホスト型 Mender サーバーの URL>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<server.crt を含むディレクトリ>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## イメージのビルド

次に、イメージのビルドを進めることができます：

```
MACHINE="odyssey-x86-mender" bitbake odyssey-image-base
```

`odyssey-image-base` をお好みのイメージターゲットに置き換えてください。

## ビルド出力の使用

ビルドが成功すると、イメージとビルド成果物は以下の場所に生成されます：

- `build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg.bz2`

すでにデバイス上で Mender が動作しており、このビルドを使用して rootfs アップデートをデプロイしたい場合は、`.mender` 拡張子を持つ [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank) ファイルを使用する必要があります。このアーティファクトは、Mender サーバーの管理モードで（サーバー UI のリリースにアップロード）デプロイするか、[スタンドアロンデプロイメント](https://docs.mender.io/architecture/standalone-deployments?target=_blank)で Mender クライアントのみを使用してデプロイできます。

## フラッシュ手順

ODYSSEY - X86 ボードでイメージをフラッシュして実行する方法は2つあります。

**方法 1:** ODYSSEY - X86 ボードに接続された USB フラッシュドライブにフラッシュし、フラッシュドライブからシステムを起動する。

**方法 2:** ODYSSEY - X86 ボードに接続された HDD/SSD にフラッシュし、HDD/SSD から実行する。

### 方法 1

- **ステップ 1.** [balenaEtcher をダウンロード](https://www.balena.io/etcher/)（お使いのオペレーティングシステムに応じて）

- **ステップ 2.** USB フラッシュドライブを PC に接続

- **ステップ 3.** **Flash from file** をクリックし、`mender-seeed/build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg.bz2` ファイルを選択

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/balena.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 4.** **Select target** をクリックし、接続された USB ドライブを選択

- **ステップ 5.** 最後に **Flash** をクリック

- **ステップ 6.** フラッシュドライブを ODYSSEY - X86 ボードに接続し、ボードの電源を入れる

- **ステップ 7.** ボードの電源を入れる際に **DELETE キー** を押し続けて **BIOS 設定** に入る

- **ステップ 8.** **Boot** セクションに移動し、**Boot Option #1** を **UEFI: USB, Partition 1** に設定

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 9.** **Save & Exit** に移動し、**Save Changes and Reset** を選択

これで OS が USB フラッシュドライブから正常に起動します。

### 方法 2

- **ステップ 1.** 上記 **方法 1** の **ステップ 1 - ステップ 9** を実行

- **ステップ 2.** 正常に起動した後、以下のコマンドを実行してボードの電源を切る：

```sh
poweroff
```

**注意:** フラッシュ後に一度起動する必要があります。これは、**data** パーティションがフラッシュドライブの残りのスペースを使用するように拡張され、そのスペースを使用して HDD/SSD にフラッシュするイメージを保存するためです。

- **ステップ 3.** フラッシュドライブを ODYSSEY - X86 から取り外し、PC に接続

- **ステップ 4.** ターミナルウィンドウを開き、Yocto コンパイルから **uefiimg** をフラッシュドライブの **data** パーティションにコピー

```sh
sudo cp mender-seeed/build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg /media/username/data
```

**注意:** **username** を PC のユーザー名に置き換えてください

- **ステップ 5.** フラッシュドライブを PC から取り外し、ODYSSEY - X86 ボードに接続。さらに外部 HDD/SSD を ODYSSEY ボードに接続。

- **ステップ 6.** ボードが起動した後、ターミナルウィンドウで以下を入力してディスクパーティションを一覧表示

```sh
fdisk -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/partition.png" alt="pir" width="600" height="auto"/></p>

接続された HDD が **/dev/sdb** として表示されます。

- **ステップ 7.** 以前コピーした **.uefiimg** ファイルを **dd** ユーティリティを使用して接続された HDD/SSD にフラッシュ

```sh
dd if=/data/odyssey-image-base-odyssey-x86.uefiimg of=/dev/sdb
```

**注意:** **/dev/sdb** を接続された HDD/SSD に対応する名前に置き換えてください

- **ステップ 8.** フラッシュが完了したら、ODYSSEY - X86 の電源を切る

```sh
poweroff
```

- **ステップ 9.** USB フラッシュドライブを取り外し、ODYSSEY - X86 の電源を入れる

- **ステップ 10.** ボードの電源を入れる際に **F7** を押し続けて BIOS 設定に入る

- **ステップ 11.** **BOOT** セクションに移動し、**Boot Option #1** を **UEFI: USB, Partition 1** に設定

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 12.** **Save & Exit** に移動し、**Save Changes and Reset** を選択

これで OS が HDD/SSD から正常に起動します。