---
description: EdgeBox RPi 200 外部メディアからの起動
title: EdgeBox RPi 200 外部メディアからの起動
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/EdgeBox-RPi-200-boot-from-external-media
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPi-200シリーズは、Raspberry Piをベースにしたオールインワンの産業用エッジコンピューティングコントローラーであり、複数の産業用途を統合しています。高い拡張性と堅牢な産業用ハードウェアとして設計され、豊富なIOリソースを搭載し、Raspberry Piの産業用ソフトウェアエコシステムによってサポートされています。スマートオートメーションや産業用IoT（IIoT）ソリューションに最適な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

:::tip進む前に:
2023年3月30日以降にリリースされたバッチから、Raspberry Pi Compute Module 4のEEPROMを更新したため、起動順序が`NVME > USB-MSD > BCM-USB-MSD > SD CARD/eMMC > NETWORK > RESTART`に変更されました。詳細については、[Compute Module 4のEEPROMを更新する](/ja/Raspberry_pi_CM4_update_eeprom/)ページをご覧ください。

**2023年3月30日以前にEdgebox-RPI-200を購入し、EEPROMを更新するか、Edgebox-RPI-200にオペレーティングシステムをフラッシュするガイドに従いたい場合は、Raspberry Pi CM4の起動モードを選択する機能を備えた最小限の開発ボードが必要です。そのため、[Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)が最適です。**

したがって、このガイドは`2023年3月30日以降にリリースされたEdgeBox-RPi-200`にのみ適用されます。この情報は、`製品ラベルステッカー`の`S/N番号`から確認できます。以下の画像で強調表示されている番号`2312`は、`23`が`2023年の製造年`、`12`が`2023年の製造週12`を示しています。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/label.jpg" alt="pir" width="500" height="auto" /></div>
:::

## 必要条件

- 1台のPCホストコンピュータ（Ubuntu OS）
- 1台の[EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- 1つのストレージデバイス：
  * オプション1: 1つのUSBストレージドライブ（16GB以上）
  * オプション2: 1つの**M.2 NVMeドライブ**

:::danger
以下の手順ではストレージデバイスが消去されるため、使用するストレージデバイスに注意し、フォーマット可能であることを確認してください。
:::

### 起動可能なデバイスのセットアップ

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB Storage" label="USBストレージ">

#### EdgeBox-RPI-200の工場出荷時のデフォルトOSで起動可能なUSBデバイスをセットアップする

:::note
元のOSイメージをバックアップし、Sourceforgeでファイルをリリースしました。[このページ](https://sourceforge.net/projects/edgebox-rpi-200/files/edgeboxrpi200.img/download)にアクセスしてイメージファイルを取得できます。
:::

[Raspberry Pi公式イメージャー](https://www.raspberrypi.com/software/)を使用して、[こちらの手順](https://wiki.seeedstudio.com/ja/Raspberry_Pi_3_Model_B/)に従い、起動可能なRaspbian OSデバイスをセットアップしてください。

#### USBから起動する

EdgeBox-RPI-200に電源を接続する前に、上記の手順で準備したUSBストレージデバイスを挿入してください。

その後、電源を接続し、デバイスが起動するのを待ちます。

これで、EdgeBox-RPI-200はUSBストレージから起動しているはずです。

##### 起動メディアを確認する

`lsblk`コマンドを使用して、EdgeBox-RPI-200がどのメディアから起動しているかを確認できます。

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
初回起動時には、以下のような出力が表示される可能性があります：

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
この場合、`/boot/cmdline.txt`内の`root=`を正しいストレージデバイスに変更して、ルートディレクトリを`root=/dev/sda2`としてマウントする必要があります。`/boot/cmdline.txt`は以下のようになります：

```sh
console=serial0,115200 console=tty1 root=/dev/sda2 rootfstype=ext4 elevator=deadline 
fsck.repair=yes rootwait quiet splash plymouth.ignore-serial-consoles
```
その後、再起動してください。
:::

</TabItem>
<TabItem value="NVMe Drive" label="NVMeドライブ">

#### NVMeドライブをインストールする

M.2スロットにNVMeドライブをインストールしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/install-nvme.jpg" alt="pir" width="500" height="auto" /></div>

#### 起動可能なNVMeドライブを作成する

:::note
NVMeドライブがフォーマットされており、起動可能なパーティションを含んでいないことを確認してください。
:::

電源を接続し、デバイスが起動するのを待ってください。

その後、SSHを使用してEdgeBox-RPI-200にアクセスしてください。[こちらのガイド](/ja/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh)をご覧ください。

SSHアクセスを取得したら、以下の手順に従ってください：

**STEP 1:** NVMeドライブが正しく読み込まれているか確認する

`lsblk`コマンドを入力してください。以下のような出力が表示され、`nvme0n1`がNVMeドライブのデバイス名であることがわかります。

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

**STEP 2:** EdgeBox-RPI-200 イメージファイルをダウンロードする

以下のコマンドを入力してイメージファイルをダウンロードしてください：

```sh
wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
```

ダウンロード進行状況は以下のように表示されます：

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

**STEP 3:** `DD` ツールを使用して OS イメージを NVMe ドライブに書き込む

以下のコマンドを入力してください。`if` は入力ファイルとしてイメージファイル `edgeboxrpi200.img` の名前を指定し、`of` は NVMe ドライブ名 `/dev/nvme0n1` を指定します。

```sh
sudo dd if=edgeboxrpi200.img of=/dev/nvme0n1 bs=4MB status=progress oflag=sync
```

**STEP 4:** 再起動

以下のコマンドを入力してください：

```sh
sudo reboot
```

##### 起動メディアを確認する

これで EdgeBox-RPI-200 は NVMe ストレージデバイスから起動しているはずです。

EdgeBox-RPI-200 がどのメディアから起動しているかを確認するには、`lsblk` コマンドを使用してください。

起動ディレクトリ `/boot` が `nvme0n1p1` パーティションにマウントされ、ルートディレクトリ `/` が `nvme0n1p2` パーティションにマウントされていることを確認できます。

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

<!-- コード終了 -->

## 技術サポート & 製品に関するディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>