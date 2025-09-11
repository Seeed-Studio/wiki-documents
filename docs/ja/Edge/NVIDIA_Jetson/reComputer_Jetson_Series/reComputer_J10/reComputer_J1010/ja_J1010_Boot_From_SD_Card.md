---
description: J1010 SDカードからの起動
title: J1010 SDカードからの起動
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/J1010_Boot_From_SD_Card
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# J1010 SDカードからの起動

## はじめに

開始する前に、以下の2つの記事を読んでおく必要があります。J1010システムが正しく書き込まれており、SDカードドライバが正しくインストールされていることを確認してください。

- [J1010/J101 Jetpackの書き込み](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/)
- [J101_SDカードの有効化](https://wiki.seeedstudio.com/ja/J101_Enable_SD_Card/)

## J101からSDカードへのシステム書き込み

まず、必要なツールを含むスクリプトをクローンします。

```bash
git clone https://github.com/limengdu/bootFromUSB
```

次に、SDカードがext4形式であることを確認します。「ディスク」ツールで視覚的に確認できます。ext4形式でない場合は、フォーマットしてext4形式に変更する必要があります。

青いエリアをクリックし、緑のエリアをクリックして「パーティションのフォーマット」を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_1.jpg" /></div>

緑のエリアをクリックして「Linuxシステム専用の内部ディスク（Ext4）」を選択します。黄色のエリアにある「ボリューム名」に希望する名前を入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_2.jpg" /></div>

これで、SDカードのフォーマットがext4に変更されたことが確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png" /></div>

その後、スクリプトのディレクトリに移動し、以下のコマンドを実行します。

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

しばらく待ちます。エラーが報告されなければ、自動的に完了し、書き込みが終了します。

## 起動設定

ドライバが正常にインストールおよび設定されたら、「lsblk」コマンドや「/dev」内のデバイスを確認することで簡単に確認できます。

### 起動デバイスの変更

「/boot/extlinux/extlinux.conf」の設定を変更する必要があります。

- SDカードからの起動

    キャリアボード上のeMMCから起動した後、SDカードから起動するように変更したい場合、SDカードへのシステム書き込みやSDカードドライバのインストールが正しく行われていることを確認する必要があります。「root」の後のパラメータを起動元デバイスのアドレスに変更します。変更が完了したら、システムを再起動します。

    **再起動前に`/boot/extlinux/extlinux.conf`を変更し、再起動後に`/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf`を確認します。**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png" /></div>

    :::warning 注意
    SDカードからシステムを起動した後の設定ファイルは`/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf`であり、オンボードeMMCからシステムを起動した後の設定ファイルは`/boot/extlinux/extlinux.conf`です。これらは同じファイルであり、デバイスが電源投入後にシステムをどこから起動するかを選択するための設定を読み取ります。システムが起動した後、相対パスが変更されます。
    :::

- ボードeMMCからの起動

    SDカードから起動した後、再びeMMCから起動するように変更したい場合や、SDカードを交換する必要がある場合、デバイスをeMMCから起動するように変更する必要があります。以下の変更を行います。

    **再起動前に`/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf`を変更し、再起動後に`/boot/extlinux/extlinux.conf`を確認します。**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png" /></div>

最終的に、正常に動作することが確認できます。

- eMMCからの起動

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png" /></div>

- SDカードからの起動

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
