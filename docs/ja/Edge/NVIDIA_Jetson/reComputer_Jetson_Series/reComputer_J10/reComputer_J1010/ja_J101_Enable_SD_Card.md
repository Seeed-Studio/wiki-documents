---
description: J101 SDカードを有効化する
title: J101 SDカードを有効化する
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/J101_Enable_SD_Card
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- # J101キャリアボードでSDカードからNVIDIA JetPack OSを起動する -->

# J101 SDカードを有効化する

この方法は、reComputer J1010上で動作するJ101キャリアボードにSDカードへNVIDIA JetPack OSをフラッシュする手順です。そのため、まず<a href="https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/" target="_blank"><span>JetPack OSをreComputer J1010にフラッシュ</span></a>する必要があります。

## ドライバ設定

まず、reComputerを電源オンし、以下のようなデスクトップ画面に進みます：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/S.png" /></div>

### ステップ 1. リポジトリをクローンする

右クリックしてターミナルを開き、以下のコマンドを実行して関連コードをダウンロードします：

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

### ステップ 2. jetson-sdmmc-overlayをコンパイルする

作業ディレクトリに移動します：

```bash
cd seeed-linux-dtoverlays
```

J101キャリアボードの場合、"overlays\jetsonnano\jetson-sdmmc-overlay.dts"ファイル内の"compatible"値を変更する必要があります。

```bash
sed -i '17s#JETSON_COMPATIBLE#\"nvidia,p3449-0000-b00+p3448-0002-b00\"\, \"nvidia\,jetson-nano\"\, \"nvidia\,tegra210\"#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
```

<!-- 以下のようになります。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/change.png"/></div> -->

その後、変更したファイルをコンパイルして正しく修正されていることを確認します。

```bash
make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
```

### ステップ 3. SDカードが認識されることを確認する

SDカードを**J101キャリアボード**に挿入します。

```bash
sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
cd /boot/
sudo /opt/nvidia/jetson-io/config-by-hardware.py -l
```

上記のコマンドを実行した後、以下のような**類似の**出力（周辺機器や既にインストールされているドライバによって完全に一致しない場合があります）が得られ、SDカードが認識されたことが分かります：

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

### ステップ 4. デバイスに名前を付けてドライバインストールを完了する

```bash
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png" /></div>

!!!注意
    初回インストール完了後、jtopを実行するために**再起動**が必要になる場合があります。

<!-- ## システムをSDカードに移動する

まず、必要なツールを含むスクリプトをクローンします。

```bash
git clone https://github.com/limengdu/bootFromUSB
```

次に、SDカードがext4フォーマットであることを確認します。"disk"ツールで視覚的に確認できます。ext4でない場合はフォーマットしてext4に変更する必要があります。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png"/></div>

その後、スクリプトディレクトリに移動し、以下のコマンドを実行します：

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

しばらく待ち、エラーが報告されなければ自動的に完了します。これで書き込みが完了です。


## ブート構成

ドライバが正常にインストールおよび構成された後、"lsblk" コマンドを使用して確認するか、"/dev" ディレクトリ内でデバイスを確認できます。

### ブートデバイスの変更

"/boot/extlinux/extlinux.conf" の設定を変更する必要があります。

- SDカードからのブート

    キャリアボード上のeMMCから起動した後、SDカードから起動するように変更したい場合があります。この場合、SDカードへのシステム書き込みやSDカードドライバのインストールが正しく行われていることを確認する必要があります。その後、rootの後のパラメータを、起動元デバイスのアドレスに変更します。変更が完了したら、システムを再起動します。

    **再起動前に "/boot/extlinux/extlinux.conf" を変更し、再起動後に "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" を確認してください**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png"></div>

    !!!注意
        SDカードからシステムを起動した後の設定ファイルは "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" であり、オンボードeMMCからシステムを起動した後の設定ファイルは "/boot/extlinux/extlinux.conf" にあります。これらは、デバイスが設定を読み取り、電源投入後にシステムをどこから起動するかを選択するための同じファイルです。システムが起動を完了すると、相対パスが変更されます。

- ボードeMMCからのブート

    SDカードから起動した後、再びeMMCから起動する必要がある場合や、何らかの理由でSDカードを交換する必要がある場合、デバイスをeMMCから起動するように戻す必要があります。以下の変更を行ってください。

    **再起動前に "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" を変更し、再起動後に "/boot/extlinux/extlinux.conf" を確認してください**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png"></div>

最終的に、これが正常に動作することを確認しました。

- eMMCからのブート

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png"></div>

- SDカードからのブート

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png"></div> -->

## その他

### SDカードのI/O速度を変更

<a href="https://wiki.seeedstudio.com/ja/install_NVIDIA_software_to_Jetson-101" target="_blank"><span>reComputer J101キャリアボード</span></a>では、CLK周波数48MHzをサポートするSDカード機能を提供しています。ここでのCLKは、CE/FCCなどの認証を取得するために設計されています。CLKを自分で増加させたい場合は、以下の手順を使用してください。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

- **ステップ1**. このリポジトリをクローンし、以下のコードを変更します。

    ```bash
    git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
    ```

- **ステップ2**. max-clk-limit値を変更してコンパイルします。

    ```bash
    cd seeed-linux-dtoverlays
    sed -i '10s#48000000#208000000#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
    make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
    sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
    sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
    ```

- **ステップ3**. 再起動します。

    ```bash
    reboot
    ```

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>