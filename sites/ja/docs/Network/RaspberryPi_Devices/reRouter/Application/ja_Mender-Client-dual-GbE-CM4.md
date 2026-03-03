---
description: デュアル GbE CM4 上の Mender クライアント
title: Mender の使用方法
keywords:
- ソフトウェア Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Mender-Client-dual-GbE-CM4
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


デュアルギガビットイーサネットキャリアボード上で Mender クライアントをセットアップし、ホスト型またはセルフホスト型の Mender サーバーから OTA アップデートを受信することができます。

このガイドは、Yocto プロジェクトを使用してコンパイルされたカスタム Linux システムを実行する Raspberry Pi Compute Module 4 用のデュアルギガビットイーサネットキャリアボードの使用に焦点を当てています。

## テスト結果

以下の表に示す Yocto プロジェクトリリースは、Mender コミュニティによってテストされています。他の [Yocto プロジェクトリリース](https://wiki.yoctoproject.org/wiki/Releases?target=_blank) でこの統合をテストした場合は、更新してください。

| Yocto プロジェクト | ビルド | 実行時 |
|---|---|---|
| dunfell (3.1 / 5.3.0) | テスト成功 | テスト成功 |

**ビルド** は、この Mender 統合を使用して Yocto プロジェクトのビルドがエラーなしで完了し、イメージを出力することを意味します。  
**実行時** は、Mender がボード上で動作することを確認したことを意味します。U-Boot ベースのボードの場合、[統合チェックリスト](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank) が確認されています。

## 前提条件

- ワークステーション/ラップトップにインストールされたサポートされている Linux ディストリビューションと依存関係（[Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros) に記載）
  - 注意: 使用する Yocto バージョンに応じて手順が異なります。
- [Raspberry Pi CM4 用デュアルギガビットイーサネットキャリアボード](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)

## ビルドの設定

### Yocto 環境のセットアップ

`mender-dual-gbe-cm4` 用のディレクトリを作成し、メタ情報をクローンします。

```
mkdir mender-dual-gbe-cm4 && cd mender-dual-gbe-cm4
```

必要なすべてのレイヤーを取得します。

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

meta-raspberrypi と互換性を持たせるために、poky の gstreamer バージョンを最新に変更します。

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```

コンパイルエラーを回避するために meta-raspberrypi を修正します。

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```

コンパイルエラーを回避するために meta-mender を修正します。

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

### ビルド環境のセットアップ

ビルド環境を初期化します。

```
source layers/poky/oe-init-build-env 
```

Yocto プロジェクトのレイヤーを追加します。

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
bitbake-layers add-layer ../layers/meta-mender/meta-mender-core
bitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi
bitbake-layers add-layer ../layers/meta-mender/meta-mender-demo
```

### Mender サーバー URL の設定（オプション）

このセクションはビルドの成功には必須ではありませんが、デフォルトで生成されるイメージはサーバー構成がないため、[スタンドアロンデプロイメント](https://docs.mender.io/architecture/standalone-deployments?target=_blank) での使用にのみ適しています。

`conf/local.conf` ファイルを編集して Mender サーバー構成を提供し、生成されたイメージと Mender アーティファクトが使用している Mender サーバーに接続するようにします。生成された `conf/local.conf` ファイルにはすでにコメントアウトされたセクションがあるはずなので、関連する構成オプションを単にコメント解除し、適切な値を割り当てることができます。

ホスト型 Mender 用のビルド:

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

Mender デモサーバー用のビルド:

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<Mender デモサーバーの IP アドレス>"
```

Mender 本番環境/セルフホスト型（オンプレミス）用のビルド:

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# 以下をコメント解除し、構成済みドメイン名に一致する URL を更新し、
# 生成された server.crt ファイルのパスを提供します。
#
# カスタム server.crt ファイルは、自己署名証明書を使用している場合にのみ必要です。
#
# 注意！以下の情報はカスタム Yocto レイヤーで提供することを推奨します。
# これはデモ目的のみです。詳細情報についてはリンクされたドキュメントを参照してください。
MENDER_SERVER_URL = "<セルフホスト型 Mender サーバーの URL>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<server.crt を含むディレクトリ>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## イメージのビルド

以下のコマンドを使用してイメージのビルドを進めることができます：

```
MACHINE="dual-gbe-cm4-mender" bitbake core-image-base
```

`core-image-base` をお好みのイメージターゲットに置き換えてください。

## ビルド出力の使用

ビルドが成功した後、生成されたイメージとビルド成果物は以下の通りです：

- `build/tmp/deploy/images/dual-gbe-cm4-mender/core-image-base-dual-gbe-cm4-mender.sdimg.bz2`

すでにデバイス上で Mender が動作しており、このビルドを使用して rootfs 更新をデプロイしたい場合は、`.mender` 拡張子を持つ [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank) ファイルを使用する必要があります。この Artifact は、Mender サーバーを使用して管理モードでデプロイするか（サーバー UI のリリースセクションにアップロード）、または [スタンドアロンデプロイメント](https://docs.mender.io/architecture/standalone-deployments?target=_blank) で Mender クライアントのみを使用してデプロイすることができます。

## フラッシュ手順

上記のイメージをボードの eMMC にフラッシュする方法については、[この Wiki ガイド](https://wiki.seeedstudio.com/ja/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/#flash-to-emmc-cm4-emmc-version) を参照してください。

フラッシュが完了したら、reTerminal の電源を入れると、コンパイルされたイメージから起動します。

## 起動成功

UART から以下のログが表示された場合、システムが正常に起動したことを意味します：

```
[  OK  ] Started Kernel Logging Service.
[  OK  ] Started System Logging Service.
[  OK  ] Started D-Bus System Message Bus.
[  OK  ] Started Getty on tty1.
         Starting Telephony service...
[  OK  ] Started Serial Getty on ttyS0.
[  OK  ] Reached target Login Prompts.
[    7.340436] audit: type=1334 audit(1638186061.687:4): prog-id=7 op=LOAD
[    7.347278] audit: type=1334 audit(1638186061.691:5): prog-id=8 op=LOAD
         Starting Login Service...
[  OK  ] Started Save/Restore Sound Card State.
[    7.386306] Bluetooth: Core ver 2.22
[    7.390103] NET: Registered protocol family 31
[    7.394856] Bluetooth: HCI device and connection manager initialized
[[    7.401967] Bluetooth: HCI socket layer initialized
  OK      7.407591] Bluetooth: L2CAP socket layer initialized
0m] Reac[    7.413409] Bluetooth: SCO socket layer initialized
hed target Sound Card.
[  OK  ] Started Telephony service.
[  OK  ] Started Avahi mDNS/DNS-SD Stack.
[  OK  ] Started Login Service.

Poky (Yocto Project Reference Distro) 3.1.12 dual-gbe-cm4-mender ttyS0

dual-gbe-cm4-mender login: root
root@dual-gbe-cm4-mender:~#
```

## リソース

- **[ウェブページ]** [Mender公式ドキュメント](https://docs.mender.io)

- **[ウェブページ]** [Yocto公式ドキュメント](https://docs.yoctoproject.org)

- **[ウェブページ]** [Raspberry Pi CM4公式ドキュメント](https://www.raspberrypi.com/documentation/computers/compute-module.html)

## 技術サポートと製品ディスカッション

弊社製品をご利用いただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>