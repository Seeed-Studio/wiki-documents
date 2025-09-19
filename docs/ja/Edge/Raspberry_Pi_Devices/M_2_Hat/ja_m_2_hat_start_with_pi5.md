---
description: このチュートリアルでは、主にM.2 HatとDual Hatのハードウェア接続設定と、Raspberry PiをSSDから起動する方法について紹介します。
title: Raspberry Pi 5でPCIe hat/dual hatを使用する
keywords:
  - M.2 hat
  - dual hat
  - Raspberry Pi
image: https://files.seeedstudio.com/wiki/M.2_Hat/new/m.2-dual-hat-for-raspberry-pi-5.webp
slug: /ja/raspberry_pi_5_uses_pcie_hat_dual_hat
last_update:
  date: 12/24/2024
  author: Jiahaoli

---

## はじめに

このチュートリアルでは、主にM.2 Hat/Dual Hatのハードウェア接続設定と、Raspberry PiをSSDから起動する方法について紹介します。また、ケースありとケースなしの2つのインストール方法を説明し、異なる条件下でのSSDの読み書き速度をテストします。

## 開始

### ハードウェアの準備

<div class="table-center">
 <table align="center">
 <tr>
  <th>Raspberry Pi5 8GB</th>
  <th>M.2 Hat/dual Hat</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-103110064-pcie-to-m.2-dual-hat-for-raspberry-pi-5-fonmt.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/PCIe-to-dual-M-2-hat-for-Raspberry-Pi-5-p-5973.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

ケースなしでの取り付けには、以下の材料を準備する必要があります：

- ① Raspberry Pi 5
- ② M.2 Hat/dual Hat
- ③ SSD/AI Kit PCIeデバイス
- ④ PCIeデバイス固定ネジ
- ⑤ M.2 HatとRaspberry Pi間のPCIe接続ケーブル
- ⑥ ネジスリーブ、長ネジ、ナット

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1.jpg" alt="pir" width="700" height="auto" /></div>

ケース付きでの取り付けには、以下の材料を準備する必要があります：

- ① Raspberry Pi 5
- ② M.2 Hat/dual Hat
- ③ SSD/AI Kit PCIeデバイス
- ④ PCIeデバイス固定ネジ
- ⑤ M.2 HatとRaspberry Pi間のPCIe接続ケーブル
- ⑥ 長ネジとナット
- ⑦ [外部ケース](https://files.seeedstudio.com/wiki/M.2_Hat/Seeed%20M.2%20hat%20with%20Pi5%20case_sam-20240827.stp)

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1_2.jpg" alt="pir" width="700" height="auto" /></div>

### 取り付け

> **注意:** これは注意事項です。`M.2 dual HatをRaspberry Piで使用する前に、ポゴピンとGPIOパッドをアルコール綿で拭き取ってから接続してください`

<!-- <div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/hat.jpg" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/pi5_GPIO_Pad.png" alt="pir" width="700" height="auto" /></div> -->

![](https://files.seeedstudio.com/wiki/M.2_Hat/new/hat_installation.gif)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="ケースなしでの取り付け">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ1**: PCIe接続ケーブルをM.2 Hatに挿入します。ケーブルの挿入方向に注意してください。M.2 HatのPCIeインターフェースに金属面を下向きにして挿入します。挿入後は図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ2**: PCIe接続ケーブルをRaspberry Pi 5に挿入します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

ケーブルの挿入方向に注意してください。Raspberry Pi 5のPCIeインターフェースに金属面を上向きにして挿入します。挿入後は図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ3**: Raspberry Pi 5とM.2 Hatを重ね合わせ、ネジスリーブをネジに挿入します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/6.jpg" alt="pir" width="700" height="auto" /></div>

次に、Raspberry Pi 5とM.2 Hatのネジ穴にネジを挿入します。図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/7.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ4**: スタッドをネジにねじ込み、ネジを回路基板に固定します。図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/8.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ5**: SSDとAI KitをM.2 dual Hatに挿入します

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/10.jpg" alt="pir" width="700" height="auto" /></div>

次に、固定ネジを挿入してSSDとAI KitをM.2 Hatに固定します。図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/11.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>

<TabItem value="Method 2" label="ケース付きでの取り付け">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ1**: PCIe接続ケーブルをM.2 Hatに挿入します。ケーブルの挿入方向に注意してください。M.2 HatのPCIeインターフェースに金属面を下向きにして差し込みます。挿入後は図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ2**: PCIe接続ケーブルをRaspberry Pi 5に差し込みます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

ケーブルの挿入方向に注意してください。Raspberry Pi 5のPCIeインターフェースに金属面を上向きにして差し込みます。挿入後は図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ3**: Raspberry Pi 5とM.2 Hatを重ね合わせ、シェル、ネジ、ナット、PCIeデバイスを準備します

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/12.jpg" alt="pir" width="700" height="auto" /></div>

重ね合わせたM.2 HatとRaspberry Piをケースに入れます。Raspberry Piを上にして、図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/13.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ4**: ケースの予約されたネジ穴にネジをねじ込みます。この穴はM.2 HatとRaspberry Piを接続し、M.2 Hat、Raspberry Pi 5、ケースを固定します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/14.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ5**: スタッドをネジにねじ込んで、M.2 Hat、Raspberry Pi 5、ケースを固定します

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/15.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ6**: SSDとAI KitをM.2 Hatに挿入します。図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/16.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ7**: 固定ネジを締めて、SSDをM.2 Hatに固定します

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/17.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ8**: 残りのシェルを取り付けます

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/18.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>
</Tabs>

### SD Card Copierツールを使用してRaspberry Pi OSでNVME SSDにOSを書き込む

*この方法は、SDカードを持っており、デバイスが正常に起動している場合に機能します。システムが最新のRaspberry Piシステム（Bookworm以降）であり、RPi 5ファームウェアが2023-12-06（12月6日）以降に更新されていることを確認してください。そうでなければ、NVME関連の設定を認識しない可能性があります。*

**ステップ1**: Raspberry Piシステムが最新（Bookworm以降）であることを確認し、以下のコマンドを入力してRPi 5ファームウェアを更新します：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

`Advanced Options`まで下にスクロールしてEnterを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version`まで下にスクロールしてEnterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に`Latest`を選択してEnterを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここでは`No`を選択します - `latest`ブートローダーが必要です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

`Finish`を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は、`Yes`を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**ステップ2**：メイン画面で**Applications** =>**Accessories** =>**SD Card Copier**をクリックし、**SD Card Copier**プログラムを実行して、下図のようにOSをNVMe SSDにコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Raspberry PiをNVMe SSDから起動するように設定する

SDカードスロットに簡単にアクセスできる場合は、Piの電源を切り、SDカードを取り出すことができます。（すべてが期待通りに動作している場合）次回起動時にNVMeドライブから自動的に起動するはずです。ただし、SDカードをそのままにしてNVMeから起動したい場合は、起動順序を変更する必要があります。

**ステップ1**：次のコマンドを入力します：

```shell
  sudo raspi-config
```

`Advanced Options` まで下にスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**：`Boot Order` まで下にスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**ステップ 3**：`NVMe/USB Boot` を選択して Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

設定が確認されます。Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**ステップ 4**：`Back` を選択するか Esc キーを押して最初の画面に戻ります。その後、右カーソルキーを使用して Finish に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

今すぐ再起動するかどうか尋ねられます。`Yes` をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

### PCIe の変更

<Tabs>
<TabItem value="Method 1" label="M.2 Hat">
M.2 Hat は PCIe Gen 2 と PCIe Gen 3 モードをサポートしています

**ステップ 1**：以下のコマンドを入力して `/boot/firmware/config.txt` ファイルを開きます

```shell
sudo nano /boot/firmware/config.txt
```

**ステップ2**：`/boot/firmware/config.txt`ファイルの末尾にある[all]セクションに以下を追加します：

```shell
dtparam=pciex1_gen=3
```

ファイルを保存して再起動すると、速度の向上が見られるかもしれません！
</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

PCIe2.0 M.2 dual HatはPCIe Gen 2をサポートし、PCIe3.0 M.2 dual HatはPCIe Gen 2とPCIe 3をサポートします。

**ステップ 1**: 以下のコマンドを入力して `/boot/firmware/config.txt` ファイルを開きます

```shell
sudo nano /boot/firmware/config.txt
```

**ステップ2**：`/boot/firmware/config.txt`ファイルの末尾にある[all]セクションに以下を追加します：

```shell
dtparam=pciex1
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip,mmio-hi 

```

</TabItem>
</Tabs>

### 速度ベンチマーク

<Tabs>
<TabItem value="Method 1" label="M.2 hat">

このテストは、Raspberry PiがSDカードから起動し、SSDをバックアップストレージとして使用することを示しています：

```
# write speed command
sudo dd if=/dev/zero of=/mnt/nvme/testfile bs=1M count=1024 oflag=direct

# read speed command
sudo dd if=/mnt/nvme/testfile of=/dev/null bs=1M iflag=direc
```

| M.2 hat | 読み取り速度| 書き込み速度|
|:-------------|:--------------:|--------------:|
| PCIe 3.0       | 822MB/s       | 716MB/s         |
| PCIe 2.0       | 431 MB/s      | 389MB/s         |

</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

このテストは、Raspberry PiがSSDから起動し、別のSSDをバックアップストレージとして使用することを示しています：

```
# write speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# read speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat | Read & Read | Write & Write | Read & Write |
|:-------------|:--------------:|--------------:|--------------:|
| PCIe 3.0       | 平均 454MB/s      | 平均 407MB/s        |   697MB/s 663MB/s|
| PCIe 2.0       | 平均 234MB/s      | 平均 214MB/s        |      414MB/s 324MB/s|

</TabItem>

<TabItem value="Method 3" label="M.2 dual Hat with hailo8">

このテストは、Raspberry Pi が SSD から起動し、Hailo8 AI アクセラレータを使用していることを示しています：

```
# write speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# read speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat with hailo8| Read | Read & Hailo8 | Write |Write & Hailo8|
|:-------------|:--------------:|--------------:|--------------:|--------------:|
| PCIe 3.0       | 812MB/S     | 416MB/S 187FPS      |   701MB/s |  340MB/s  188FPS|
| PCIe 2.0       | 429MB/S      | 233MB/S/s 128FPS       |      372MB/S|  273MB/S 111FPS|

> **注意:** Hailo8をテストするには、この[リンク](https://github.com/hailo-ai/hailo-rpi5-examples)を確認し、240 FPSの動画を準備してください。

</TabItem>
</Tabs>

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
