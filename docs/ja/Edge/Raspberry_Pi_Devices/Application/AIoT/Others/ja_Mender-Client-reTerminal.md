---
description: reTerminal上のMender Client
title: reTerminal上のMender Client
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Mender-Client-reTerminal
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# reTerminal上のMender Clientのインストール

reTerminal上でMender Clientをセットアップし、ホスト型またはセルフホスト型のMender ServerからOTAアップデートを受信することができます。

このガイドでは、Yocto Projectを使用してコンパイルされたカスタムLinuxシステムを実行するreTerminalの使用に焦点を当てています。

## テスト結果

以下の表のYocto Projectリリースは、Menderコミュニティによってテストされています。他の[Yocto Projectリリース](https://wiki.yoctoproject.org/wiki/Releases?target=_blank)でこの統合をテストした場合は、更新してください：

| Yocto Project | ビルド | ランタイム |
|---|---|---|
| dunfell (3.1 / 5.3.0) | テスト動作 | テスト動作 |

**Build** Yocto Projectがこの Mender 統合を使用したビルドがエラーなしで完了し、イメージを出力することを意味します。
**Runtime** Mender がボード上で動作することが確認されていることを意味します。U-Boot ベースのボードの場合、[統合チェックリスト](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank)が検証されています。

## 前提条件

- [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros) に記載されているように、ワークステーション/ラップトップにサポートされている Linux ディストリビューションと依存関係がインストールされていること
  - 注意：手順は使用する予定の Yocto バージョンによって異なります。
- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)

## ビルドの設定

### Yocto 環境のセットアップ

`mender-reterminal` セットアップ用のディレクトリを作成し、メタ情報をクローンします。

```
mkdir mender-reterminal && cd mender-reterminal
```

必要なすべてのレイヤーを取得します：

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git layers/meta-qt5
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

meta-raspberrypiとの互換性を保つため、pokyのgstreamerバージョンを最新版に変更する

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```

コンパイルエラーを回避するためにmeta-raspberrypiを修正する

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```

コンパイルエラーを回避するためにmeta-menderを修正する

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

コンパイルエラーを回避するためにmeta-seeed-cm4を修正する

```
cd layers/meta-seeed-cm4
sed -i 's/eudev/udev/g' recipes-lvgl/lvgl/lvgl_demo_git.bb
```

### ビルド環境のセットアップ

ビルド環境を初期化します：

```
source layers/poky/oe-init-build-env 
```

Yoctoプロジェクトレイヤーを追加：

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
bitbake-layers add-layer ../layers/meta-mender/meta-mender-core
bitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi
bitbake-layers add-layer ../layers/meta-mender/meta-mender-demo
```

### Mender サーバー URL の設定（オプション）

このセクションはビルドを成功させるために必須ではありませんが、デフォルトで生成される画像は、サーバー設定が不足しているため、[スタンドアロンデプロイメント](https://docs.mender.io/architecture/standalone-deployments?target=_blank)での Mender クライアントでの使用にのみ適しています。

`conf/local.conf` ファイルを編集して Mender サーバー設定を提供することで、生成される画像と Mender Artifacts が使用している Mender サーバーに接続するようにできます。生成された `conf/local.conf` ファイルには既にコメントアウトされたセクションがあるはずで、関連する設定オプションのコメントを外して適切な値を割り当てるだけです。

Hosted Mender 用のビルド：

```
# To get your tenant token:
#    - log in to https://hosted.mender.io
#    - click your email at the top right and then "My organization"
#    - press the "COPY TO CLIPBOARD"
#    - assign content of clipboard to MENDER_TENANT_TOKEN
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<copy token here>"
```

Mender デモサーバー用にビルド：

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<IP address of Mender demo server>"
```

Mender本番環境/セルフホスト（オンプレミス）用のビルド：

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# Uncomment below and update the URL to match your configured domain
# name and provide the path to the generated server.crt file.
#
# Note that a custom server.crt file is only necessary if you are using
# self-signed certificates.
#
# NOTE! It is recommend that you provide below information in your custom
# Yocto layer and this is only for demo purposes. See linked documentation
# for additional information.
MENDER_SERVER_URL = "<URL of Self-Hosted Mender Server>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<DIRECTORY-CONTAINING-server.crt>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## イメージのビルド

これでイメージのビルドを進めることができます：

```
MACHINE="seeed-reterminal-mender" bitbake rpi-test-image
```

`rpi-test-image` を希望するイメージターゲットに置き換えてください。

## ビルド出力の使用

ビルドが成功した後、イメージとビルドアーティファクトは以下の場所にあります：

- `build/tmp/deploy/images/seeed-reterminal-mender/rpi-test-image-seeed-reterminal-mender.sdimg.bz2`

デバイスで既にMenderが動作しており、このビルドを使用してrootfsアップデートをデプロイしたい場合は、`.mender` 拡張子を持つ [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank) ファイルを使用する必要があります。このArtifactは、Menderサーバーを使用した管理モード（サーバーUIのReleasesでアップロード）、または [スタンドアロンデプロイメント](https://docs.mender.io/architecture/standalone-deployments?target=_blank) でMenderクライアントのみを使用してデプロイできます。

## フラッシュ手順

上記のイメージをreTerminalのeMMCにフラッシュする方法については、[このwikiガイド](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) に従ってください。

フラッシュが完了したら、reTerminalの電源を入れると、コンパイルされたイメージから起動します。

## 起動成功

UARTから以下のログが表示された場合、システムが正常に起動したことを意味します

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

Poky (Yocto Project Reference Distro) 3.1.12 seeed-reterminal-mender ttyS0

seeed-reterminal-mender login: root
root@seeed-reterminal-mender:~#
```

## リソース

- **[Web Page]** [Mender公式ドキュメント](https://docs.mender.io)

- **[Web Page]** [Yocto公式ドキュメント](https://docs.yoctoproject.org)

- **[Web Page]** [Raspberry Pi CM4公式ドキュメント](https://www.raspberrypi.com/documentation/computers/compute-module.html)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
