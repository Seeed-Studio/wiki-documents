---
description: このチュートリアルでは、R1000向けにbalenaOSをコンパイル、設定、書き込む方法を説明します。
title: reComputer R1000向けbalenaOSの構築
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/build_balenaOS_for_reComputer_r1000
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## balenaとは？

[balena](https://www.balena.io/)は、IoT（Internet of Things）プラットフォームであり、開発者がIoTアプリケーションをデバイス群にわたって構築、展開、管理するのを支援します。幅広いデバイスアーキテクチャをサポートし、コンテナ化されたアプリケーションの展開機能を備えているため、IoTソフトウェアやHostOSを簡単に更新し、バグ修正や新機能の導入を可能にします。balenaはコード更新のプッシュ、デバイス設定の管理、デバイスが場所やネットワーク条件に関係なく確実かつ安全に動作することを統一的に提供します。

このチュートリアルでは、R1000向けにbalenaOSをコンパイル、設定、書き込む方法を説明します。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## 始める前に

このプロジェクトを開始する前に、以下に記載されているようにハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェア

* [yocto](https://docs.yoctoproject.org/4.0.20/brief-yoctoprojectqs/index.html) 環境
* [docker](https://www.docker.com/) 環境
* CM4メモリをフラッシュするための [balenaEtcher](https://etcher.balena.io/)

### ハードウェアの設定

**ステップ 1**: R1000の側面にあるスイッチをブートモードに設定し、デバイスの電源を入れます。

<div class="table-center">

| スイッチ位置                                                | モード       | 説明           | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード   | eMMCから起動   | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード | USBから起動    | High      |

</div>

**ステップ 2**: USB Type-Cケーブルを使用してreComputer R1000をコンピュータに接続してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### R1000-balenaOSのコンパイル
**ステップ 1**: 以下のライブラリをダウンロードし、現在の環境がyoctoプロジェクトのコンパイルをサポートしていることを確認します。
```shell
 sudo apt install gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping python3-git python3-jinja2 python3-subunit zstd liblz4-tool file locales libacl1 jq nodejs npm
 sudo locale-gen en_US.UTF-8
```

**ステップ 2**: 以下の指示を入力して`balena-seeed-cm4`をダウンロードおよび設定し、最終的にyoctoプロジェクトをコンパイルします。
```shell
  git clone https://github.com/Seeed-Studio/balena-seeed-cm4.git
  cd balena-seeed-cm4
  git submodule update --init --recursive
  ./balena-yocto-scripts/build/barys --dry-run
  source layers/poky/oe-init-build-env
  MACHINE=seeed-recomputer-r100x bitbake balena-image
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/0_build_balenaOS.gif" alt="pir" width="700" height="auto" /></div>

**ステップ 3**: コンパイルされたイメージは`balena-image-seeed-recomputer-r100x.balenaos-img`という名前で、`build/tmp/deploy/images/seeed-recomputer-r100x`ディレクトリにあります。この時点でイメージのコンパイルは完了です。次のステップではこれを設定します。

:::note
このリポジトリのデフォルトのbalenaOSバージョンは5.3.27+rev1です。バージョン情報は`VERSION`ファイルに記載されています。他のバージョンのbalenaOSをコンパイルする必要がある場合は、`VERSION`ファイルの内容を変更してください。
:::

### R1000-balenaOSの設定
**ステップ 1**: コンパイルされたイメージがあるディレクトリに移動し、コマンドラインインターフェイスを開いて`balena login`を入力し、`balena Cloud`にログインします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/1_login_balena.gif" alt="pir" width="700" height="auto" /></div>

**ステップ 2**: 新しい`Fleet`を作成し、タイプを`Raspberry Pi 4 (using 64bit os)`に設定します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2.1new_fleet.png" alt="pir" width="700" height="auto" /></div>

**ステップ 3**: 以下のコマンドを入力してイメージをプリロードします。
```shell
  balena preload ./balena-image-seeed-recomputer-r100x.balenaos-img --fleet [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2_preload_image.gif" alt="pir" width="700" height="auto" /></div>

**ステップ 4**: Fleetに新しいデバイスを登録し、デバイスIDを生成します。
```shell
balena device register [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/3_regester_dev.gif" alt="pir" width="700" height="auto" /></div>

**ステップ 5**: 設定ファイルを生成します。
```shell
balena config generate --device [uuid] --version 3.0.15+atsss --dev -o config.json
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/4_generate_config.gif" alt="pir" width="700" height="auto" /></div>

**ステップ 6**: 設定ファイルを読み込みます。
```shell
balena os configure balena-image-seeed-recomputer-r100x.balenaos-img --config config.json  --device [uuid] --version 3.0.15+atsss --dev
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/5_config_image.gif" alt="pir" width="700" height="auto" /></div>

**ステップ 7**: 最終的なイメージファイルをコピーします。このイメージは reComputer R1000 に書き込むことができます。
```shell
cp balena-image-seeed-recomputer-r100x.balenaos-img recomputer_balenaos-dev.img
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/6_rename.gif" alt="pir" width="700" height="auto" /></div>

### balena OS のフラッシュ手順

**ステップ 1**: [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) ソフトウェアを開きます。その後、システムに新しいディスクが表示されます。

**ステップ 2**: フラッシュツール [balenaEtcher](https://etcher.balena.io/) を開き、balena イメージファイルを選択し、ターゲットディスクを選択して、最後に「Burn」をクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

**ステップ 3**: 書き込みが完了したら、R1000 を再起動します。しばらくすると、balena Cloud 上で新しいデバイスがオンラインになったことが確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/7_online.png" alt="pir" width="700" height="auto" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>