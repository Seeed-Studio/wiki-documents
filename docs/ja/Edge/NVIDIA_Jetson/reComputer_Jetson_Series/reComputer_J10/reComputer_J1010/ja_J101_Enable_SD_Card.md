---
description: J101 SD カードの有効化
title: J101 SD カードの有効化
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/J101_Enable_SD_Card
last_update:
  date: 01/05/2022
  author: w0x7ce

no_comments: false # for Disqus

---

<!-- # Boot NVIDIA JetPack OS from SD card for J101 Carrier Board -->

# J101 SD カードの有効化

この方法は、reComputer J1010で動作するJ101キャリアボードのSDカードにNVIDIA JetPack OSをフラッシュすることです。そのため、まず<a href="https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/" target="_blank"><span>reComputer J1010にJetPack OSをフラッシュする</span></a>ことが必要です。

## ドライバー設定

最初に、reComputerの電源を入れて、以下のようなデスクトップに移動する必要があります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/S.png" /></div>

### ステップ 1 . リポジトリのクローン

右クリックしてターミナルを開き、以下のコマンドを実行して関連するコードをダウンロードします：

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

### ステップ 2. jetson-sdmmc-overlay をコンパイルする

ワークスペースの場所にアクセスします：

```bash
cd seeed-linux-dtoverlays
```

J101キャリアボード用に、このファイル「overlays\jetsonnano\jetson-sdmmc-overlay.dts」の「compatible」値を変更する必要があります。

```bash
sed -i '17s#JETSON_COMPATIBLE#\"nvidia,p3449-0000-b00+p3448-0002-b00\"\, \"nvidia\,jetson-nano\"\, \"nvidia\,tegra210\"#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
```

<!-- Just like this.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/change.png"/></div> -->

そして、変更したファイルをコンパイルして、正しく修正されていることを確認します。

```bash
make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
```

### ステップ3. SDカードが認識されることを確認する

SDカードを**J101キャリアボード**に挿入します。

```bash
sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
cd /boot/
sudo /opt/nvidia/jetson-io/config-by-hardware.py -l
```

上記のコマンドを実行した後、以下のような出力が得られるはずです（**完全に同じではない場合があります。周辺機器とすでにインストールされているドライバーによって異なります**）。これによりSDカードが認識されていることがわかります：

```txt
    Header 1 [default]: Jetson 40pin Header
    Available hardware modules:
    1. Adafruit SPH0645LM4H
    2. Adafruit UDA1334A
    3. FE-PI Audio V1 and Z V2
    4. MCP251x CAN Controller
    5. ReSpeaker 4 Mic Array
    6. ReSpeaker 4 Mic Linear Array
    7. reComputer sdmmc
    Header 2: Jetson Nano CSI Connector


    Available hardware modules:
    1. Camera IMX219 Dual
    2. Camera IMX477 Dual
    3. Camera IMX477-A and IMX219-B
    Header 3: Jetson M.2 Key E Slot
    No hardware configurations found!
```

### ステップ4. デバイスに名前を付けてドライバーのインストールを完了する

```bash
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png" /></div>

!!!Note
    初回インストール完了後にjtopを実行するには、**再起動**が必要な場合があります。

<!-- ## システムをSDカードに移動

まず、必要なツールを含むスクリプトをクローンする必要があります。

```bash
git clone https://github.com/limengdu/bootFromUSB
```

次に、SDカードがext4形式であることを確認する必要があります。これは「disk」ツールで視覚的に確認できます。ext4でない場合は、フォーマットしてext4形式に変更する必要があります。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png"/></div>

そして、スクリプトディレクトリに移動し、次のようなコマンドを実行します

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

しばらくお待ちください。自動的に完了するまで待機し、エラーが報告されなければ、書き込みが完了します。

## ブート設定

ドライバーが正常にインストールおよび設定されたら、「lsblk」などのコマンドで簡単に確認したり、「/dev」でデバイスを表示したりできます。

### ブートデバイスの変更

「/boot/extlinux/extlinux.conf」の設定を変更する必要があります。

- SDカードからブート

    キャリアボード上のeMMCからブートした後、SDカードからブートするように変更したい場合があります。SDカードへのシステム書き込みやSDカードドライバーの適切なインストールを含む、以前のプロセスが正常に完了していることを確認する必要があります。rootパラメータの後を、ブート元のデバイスのアドレスに変更します。変更が完了したら、システムを再起動します。

    **再起動前に「/boot/extlinux/extlinux.conf」を変更 再起動後に「/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf」を確認**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png"></div>

    !!!Note
        SDカードからシステムをブートした後の設定ファイルは「/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf」で、オンボードeMMCからシステムをブートした後の設定ファイルは「/boot/extlinux/extlinux.conf」にあります。これらは同じファイルで、デバイスが設定を読み取り、電源投入後にシステムをどこからブートするかを選択するファイルです。システムのブートが完了すると、相対パスが変更されます。

- ボードeMMCからブート

    SDカードからブートした後にeMMCからのブートに戻したい場合や、何らかの目的でSDカードを変更する必要がある場合があります。その場合は、まずデバイスをeMMCからブートするように変更する必要があります。以下の変更を行う必要があります。

    **再起動前に「/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf」を変更 再起動後に「/boot/extlinux/extlinux.conf」を確認**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png"></div>

最終的に、正常に動作することが確認できます。

- eMMCからブート

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png"></div>

- SDカードからブート

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png"></div> -->

## その他

### SDカードI/O速度の変更

<a href="https://wiki.seeedstudio.com/ja/install_NVIDIA_software_to_Jetson-101" target="_blank"><span>reComputer J101キャリアボード</span></a>でSDカード機能を提供しており、CLK周波数48MHzをサポートしています。ここでのCLKは認証（CE/FCCなど）を取得するために設計されています。CLKを自分で増加させたい場合は、以下の手順を使用できます。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

- **ステップ1**. このリポジトリをクローンし、以下のコードを変更します。

    ```bash
    git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
    ```

- **ステップ2**. max-clk-limit値を変更してコンパイルします

    ```bash
    cd seeed-linux-dtoverlays
    sed -i '10s#48000000#208000000#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
    make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
    sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
    sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
    ```

- **ステップ3**. 再起動

    ```bash
    reboot
    ```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
