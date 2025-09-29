---
description: J1010 Boot From SD Card
title: J1010 Boot From SD Card
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/J1010_Boot_From_SD_Card
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# J1010 SDカードからの起動

## はじめに

開始する前に、以下の2つの記事を読む必要があります。J1010システムが正しく書き込まれており、SDカードドライバーが適切にインストールされていることを確認してください。

- [J1010/J101 Flash Jetpack](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/)
- [J101_Enable_SD_Card](https://wiki.seeedstudio.com/ja/J101_Enable_SD_Card/)

## J101からSDカードへのシステム書き込み

まず、必要なツールを含むスクリプトをクローンする必要があります。

```bash
git clone https://github.com/limengdu/bootFromUSB
```

次に、SDカードがext4形式であることを確認する必要があります。これは「ディスク」ツールで視覚的に確認できます。ext4でない場合は、フォーマットしてext4形式に変更する必要があります。

青い部分をクリックし、次に緑の部分をクリックして「Format Partiton」を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_1.jpg" /></div>

緑の部分をクリックして「Internal disk for use with Linux systems only (Ext4)」を選択します
黄色の部分の「Volume Name」に希望する名前を入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_2.jpg" /></div>

これで、SDカードの形式がext4に変更されたことが確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png" /></div>

次に、スクリプトディレクトリに移動し、以下のコマンドを実行します

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

しばらく待ち、自動的に完了するまで待ちます。エラーが報告されなければ、書き込みは完了です

## ブート設定

ドライバーが正常にインストールされ設定されると、「lsblk」コマンドで簡単に確認したり、「/dev」でデバイスを表示したりできます。

### ブートデバイスの変更

「/boot/extlinux/extlinux.conf」の設定を変更する必要があります。

- SDカードからブート

    キャリアボード上のeMMCからブートした後、SDカードからブートするように変更したい場合があります。SDカードへのシステム書き込みやSDカードドライバーの適切なインストールを含む、前のプロセスが正しく完了していることを確認する必要があります。rootの後のパラメータを、ブートするデバイスのアドレスに変更します。変更が完了したら、システムを再起動します。

    **再起動前に「/boot/extlinux/extlinux.conf」を変更 再起動後は「/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf」を確認**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png" /></div>

    :::note
    SDカードからシステムをブートした後の設定ファイルは「/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf」にあり、オンボードeMMCからシステムをブートした後の設定ファイルは「/boot/extlinux/extlinux.conf」にあります。これらは同じファイルで、デバイスが設定を読み取り、電源投入後にシステムをどこからブートするかを選択するためのものです。システムのブートが完了すると相対パスが変わります。
    :::

- ボードeMMCからブート

    SDカードからブートした後にeMMCからのブートに戻したい場合や、何らかの目的でSDカードを変更する必要がある場合があります。その場合は、まずデバイスをeMMCからブートするように変更する必要があります。以下の変更を行う必要があります。

    **再起動前に「/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf」を変更 再起動後は「/boot/extlinux/extlinux.conf」を確認**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png" /></div>

最終的に、正常に動作することが確認できます。

- eMMCからブート

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png" /></div>

- SDカードからブート

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
