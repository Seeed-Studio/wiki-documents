---
description: reTerminalでのMender Client
title: reTerminalでのMender Client
keywords:
  - Edge
  - reTerminal アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Mender-Client-reTerminal
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminalでのMender Clientのインストール

reTerminalにMender Clientをセットアップし、HostedまたはSelf-Hosted Mender ServerからOTAアップデートを受信することができます。

このガイドでは、Yocto Projectを使用してカスタムLinuxシステムを実行しているreTerminalを使用することに焦点を当てています。

## テスト結果

以下の表に示すYocto Projectリリースは、Menderコミュニティによってテストされています。他の[Yocto Projectリリース](https://wiki.yoctoproject.org/wiki/Releases?target=_blank)でこの統合をテストした場合は更新してください：

| Yocto Project | ビルド | 実行 |
|---|---|---|
| dunfell (3.1 / 5.3.0) | テスト成功 | テスト成功 |

**ビルド**は、このMender統合を使用してYocto Projectビルドがエラーなしで完了し、イメージを出力することを意味します。
**実行**は、Menderがボード上で動作することが確認されたことを意味します。U-Bootベースのボードの場合、[統合チェックリスト](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank)が確認されています。

## 前提条件

- ワークステーション/ラップトップにインストールされたサポートされているLinuxディストリビューションと依存関係（[Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros)に記載）
  - 注意：使用するYoctoバージョンに応じて指示が異なります。
- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)

## ビルドの設定

### Yocto環境のセットアップ

`mender-reterminal`セットアップ用のディレクトリを作成し、メタ情報をクローンします。

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

meta-raspberrypiと互換性を持たせるために、pokyのgstreamerバージョンを最新に変更します。

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```

コンパイルエラーを回避するためにmeta-raspberrypiを修正します。

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```

コンパイルエラーを回避するためにmeta-menderを修正します。

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

コンパイルエラーを回避するためにmeta-seeed-cm4を修正します。

```
cd layers/meta-seeed-cm4
sed -i 's/eudev/udev/g' recipes-lvgl/lvgl/lvgl_demo_git.bb
```

### ビルド環境のセットアップ

ビルド環境を初期化します：

```
source layers/poky/oe-init-build-env 
```

Yoctoプロジェクトのレイヤーを追加します：

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

### MenderサーバーURLの設定（オプション）

このセクションはビルド成功には必須ではありませんが、デフォルトで生成されるイメージはサーバー設定がないため、[Standalone deployments](https://docs.mender.io/architecture/standalone-deployments?target=_blank)での使用にのみ適しています。

使用しているMenderサーバーに接続するように、生成されたイメージとMenderアーティファクトを設定するために、`conf/local.conf`ファイルを編集できます。生成された`conf/local.conf`ファイルにはすでにコメントアウトされたセクションがあるはずなので、関連する設定オプションを単にコメント解除し、適切な値を割り当てることができます。

Hosted Mender用のビルド：

```
# テナントトークンを取得するには：
#    - https://hosted.mender.io にログイン
#    - 右上のメールをクリックし、「My organization」を選択
#    - 「COPY TO CLIPBOARD」を押す
#    - クリップボードの内容をMENDER_TENANT_TOKENに割り当てる
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<ここにトークンをコピー>"
```

Mender Demo Server用のビルド：

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<MenderデモサーバーのIPアドレス>"
```

Mender Production/ Self-Hosted（オンプレミス）用のビルド：

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# 以下をコメント解除し、設定したドメイン名に一致するURLを更新し、
# 生成されたserver.crtファイルへのパスを提供してください。
#
# 自己署名証明書を使用している場合のみ、カスタムserver.crtファイルが必要です。
#
# 注意！以下の情報はカスタムYoctoレイヤーに提供することを推奨します。
# これはデモ目的のみです。追加情報についてはリンクされたドキュメントを参照してください。
MENDER_SERVER_URL = "<Self-Hosted Mender ServerのURL>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<server.crtを含むディレクトリ>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## イメージのビルド

以下のコマンドを使用してイメージのビルドを進めることができます：

```
MACHINE="seeed-reterminal-mender" bitbake rpi-test-image
```

`rpi-test-image` をお好みのイメージターゲットに置き換えてください。

## ビルド出力の使用

ビルドが成功した後、生成されたイメージとビルド成果物は以下の通りです：

- `build/tmp/deploy/images/seeed-reterminal-mender/rpi-test-image-seeed-reterminal-mender.sdimg.bz2`

すでにデバイス上で Mender が動作しており、このビルドを使用して rootfs の更新をデプロイしたい場合は、`.mender` 拡張子を持つ [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank) ファイルを使用する必要があります。この Artifact は、Mender サーバーを使用して管理モードでデプロイする（サーバー UI のリリースセクションにアップロード）か、[スタンドアロンデプロイメント](https://docs.mender.io/architecture/standalone-deployments?target=_blank)で Mender クライアントのみを使用してデプロイすることができます。

## フラッシュ手順

上記のイメージを reTerminal の eMMC にフラッシュする方法については、[この Wiki ガイド](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) を参照してください。

フラッシュが完了したら、reTerminal を起動すると、コンパイルされたイメージからブートします。

## ブート成功

UART から以下のログが表示された場合、システムが正常にブートしたことを意味します：

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

- **[Webページ]** [Mender公式ドキュメント](https://docs.mender.io)

- **[Webページ]** [Yocto公式ドキュメント](https://docs.yoctoproject.org)

- **[Webページ]** [Raspberry Pi CM4公式ドキュメント](https://www.raspberrypi.com/documentation/computers/compute-module.html)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>