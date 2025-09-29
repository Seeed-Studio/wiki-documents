---
description: EdgeBox RPi 200 外部メディアからの起動
title: EdgeBox RPi 200 外部メディアからの起動
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/EdgeBox-RPi-200-boot-from-external-media
last_update:
  date: 6/14/2023
  author: Peter Pan
---


## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPi-200シリーズは、複数の産業用途を組み合わせたRaspberry Piベースのオールインワン産業用エッジコンピューティングコントローラーです。高いスケーラビリティと堅牢な産業用ハードウェアとして設計され、豊富なIOリソースを搭載し、優れたRaspberry Pi産業用ソフトウェアエコシステムによってサポートされており、スマートオートメーションと産業用モノのインターネット（IIoT）ソリューションに理想的な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

:::tip開始する前に：
2023年3月30日以降にリリースされたバッチから、Raspberry Pi Compute Module 4のEEPROMを更新しており、起動順序が`NVME > USB-MSD > BCM-USB-MSD > SD CARD/eMMC > NETWORK > RESTART`に変更されています。詳細については、[Compute Module 4のEEPROM更新](/ja/Raspberry_pi_CM4_update_eeprom/)ページをご覧ください。

**2023年3月30日より前にEdgebox-RPI-200を購入され、このガイドに従ってEEPROMを更新したり、Edgebox-RPI-200にオペレーティングシステムをフラッシュしたりする場合は、Raspberry Pi CM4の起動モードを選択する機能を含む最小限の開発ボードが必要になります。[Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)がこの目的に最適です。**

したがって、このガイドは`2023年3月30日以降にリリースされたEdgeBox-RPi-200`にのみ適用されます。この情報は`製品ラベルステッカー`の`S/N番号`から確認できます。下の画像でハイライトされた番号`2312`は、`23`が`生産年2023年`、`12`が`2023年の生産週12週目`を示しています。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/label.jpg" alt="pir" width="500" height="auto" /></div>
:::

## 前提条件

- 1 x PCホストコンピュータ（Ubuntu OS）
- 1 x [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- 1x ストレージデバイス：
  - オプション1：1 x USBストレージドライブ（16GB以上）
  - オプション2：1 x **M.2 NVMeドライブ**

:::danger
以下の手順はストレージデバイスを完全に消去しますので、使用しようとしているストレージデバイスに注意し、フォーマットできることを確認してください。
:::

### 起動可能デバイスのセットアップ

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB Storage" label="USB Storage">

#### EdgeBox-RPI-200工場出荷時デフォルトOSで起動可能USBデバイスをセットアップ

:::note
元のOSイメージをバックアップし、Sourceforgeでファイルをリリースしています。イメージファイルを取得するには[このページ](https://sourceforge.net/projects/edgebox-rpi-200/files/edgeboxrpi200.img/download)をご覧ください。
:::

[Raspberry Pi公式Imager](https://www.raspberrypi.com/software/)を使用して起動可能なRaspbian OSデバイスをセットアップする方法については、[こちらの手順](https://wiki.seeedstudio.com/ja/Raspberry_Pi_3_Model_B/)に従ってください。

#### USBからの起動

EdgeBox-RPI-200に電源を接続する前に、上記の手順で準備したUSBストレージデバイスを挿入してください。

その後、電源を接続してデバイスが起動するまで待ちます。

これで、EdgeBox-RPI-200がUSBストレージから起動されているはずです。

##### 起動メディアの確認

EdgeBox-RPI-200がどのメディアから起動されたかは、`lsblk`コマンドを使用して確認できます。

以下のような出力が表示されるはずです：

```sh
pi@raspberrypi:~ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda            8:0    1  7.2G  0 disk 
|-sda1         8:1    1  256M  0 part /boot
`-sda2         8:2    1    7G  0 part /
mmcblk0      179:0    0 14.6G  0 disk 
|-mmcblk0p1  179:1    0  256M  0 part 
`-mmcblk0p2  179:2    0 14.3G  0 part 
mmcblk0boot0 179:32   0    4M  1 disk 
mmcblk0boot1 179:64   0    4M  1 disk 
```

:::note
初回起動時に以下のような出力が表示される場合（おそらく初回起動時に表示されるでしょう）：

```sh
pi@raspberrypi:~ $ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda            8:0    1  7.2G  0 disk 
|-sda1         8:1    1  256M  0 part /boot
`-sda2         8:2    1  4.6G  0 part 
mmcblk0      179:0    0 14.6G  0 disk 
|-mmcblk0p1  179:1    0  256M  0 part 
`-mmcblk0p2  179:2    0 14.3G  0 part /
mmcblk0boot0 179:32   0    4M  1 disk 
mmcblk0boot1 179:64   0    4M  1 disk 
```

`/boot/cmdline.txt` の `root=` を正しいストレージデバイスを指すように変更して、ルートディレクトリを `root=/dev/sda2` としてマウントする必要があります。そのため、`/boot/cmdline.txt` は次のようになります：

```sh
console=serial0,115200 console=tty1 root=/dev/sda2 rootfstype=ext4 elevator=deadline 
fsck.repair=yes rootwait quiet splash plymouth.ignore-serial-consoles
```

その後、再起動してください。
:::

</TabItem>
<TabItem value="NVMe Drive" label="NVMe Drive">

#### NVMeドライブのインストール

M.2スロットにNVMeドライブをインストールしてください

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/install-nvme.jpg" alt="pir" width="500" height="auto" /></div>

#### 起動可能なNVMeドライブの作成

:::note
NVMeドライブがフォーマットされており、起動可能なパーティションが含まれていないことを確認してください
:::

電源を接続し、デバイスが起動するまでお待ちください。

次に、SSHを使用してEdgeBox-RPI-200にアクセスしてください。こちらが[ガイド](/ja/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh)です。

SSHアクセスを取得したら、以下の手順に従ってください：

**ステップ1:** NVMeドライブが正しく読み込まれているかを確認

`lsblk`コマンドを入力してください。以下のような出力が表示されるはずです。ここで`nvme0n1`がNVMeドライブのデバイス名です。

```sh
pi@raspberrypi:~ $ lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.6G  0 disk 
|-mmcblk0p1  179:1    0   256M  0 part /boot
`-mmcblk0p2  179:2    0  14.3G  0 part /
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
nvme0n1      259:0    0 119.2G  0 disk 
|-nvme0n1p1  259:1    0   200M  0 part 
`-nvme0n1p2  259:2    0   119G  0 part 
```

**ステップ 2:** EdgeBox-RPI-200 イメージファイルをダウンロードする

以下のコマンドを入力してイメージファイルをダウンロードしてください：

```sh
wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
```

以下のようなダウンロード進行状況が表示されるはずです：

```sh
pi@raspberrypi:~/Downloads $ wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
--2023-06-27 16:34:07--  https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img
Resolving altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)... 79.142.76.130
Connecting to altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)|79.142.76.130|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 5230625280 (4.9G) [application/octet-stream]
Saving to: 'edgeboxrpi200.img'

edgeboxrpi200.img                     3%[=>                                                                 ] 151.13M  14.2MB/s    eta 6m 4s
```

**ステップ3:** `DD`ツールを使用してOSイメージをNVMeドライブにフラッシュする

以下のコマンドを入力してください。ここで`if`は入力ファイルとしてイメージファイル名`edgeboxrpi200.img`を指定し、`of`はNVMeドライブ名`/dev/nvme0n1`を指定します

```sh
sudo dd if=edgeboxrpi200.img of=/dev/nvme0n1 bs=4MB status=progress oflag=sync
```

**ステップ 4:** 再起動

以下のコマンドを入力してください：

```sh
sudo reboot
```

##### ブートメディアの確認

これで、EdgeBox-RPI-200はNVMeストレージデバイスから起動されているはずです。

`lsblk`コマンドを使用して、EdgeBox-RPI-200がどのメディアから起動されているかを確認できます。

ここで、ブートディレクトリ`/boot`は`nvme0n1p1`パーティションにマウントされ、ルートディレクトリ`/`は`nvme0n1p2`パーティションにマウントされています。

```sh
pi@raspberrypi:~ $ lsblk   
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.6G  0 disk 
|-mmcblk0p1  179:1    0   256M  0 part 
`-mmcblk0p2  179:2    0  14.3G  0 part 
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
nvme0n1      259:0    0 119.2G  0 disk 
|-nvme0n1p1  259:1    0   256M  0 part /boot
`-nvme0n1p2  259:2    0   119G  0 part /
```

</TabItem>
</Tabs>

<!-- Code END -->

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
