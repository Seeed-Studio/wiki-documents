---
description: このチュートリアルでは主に、M.2 Hat および dual Hat のハードウェア接続構成と、Raspberry Pi を SSD から起動する方法について説明します。
title: Raspberry Pi 5 で PCIe hat/dual hat を使用する
keywords:
  - M.2 hat
  - dual hat
  - Raspberry Pi
image: https://files.seeedstudio.com/wiki/M.2_Hat/new/m.2-dual-hat-for-raspberry-pi-5.webp
slug: /raspberry_pi_5_uses_pcie_hat_dual_hat
sku: 103110064,103110063,E2024082901,103110065
last_update:
  date: 12/24/2024
  author: Jiahaoli
createdAt: '2024-08-28'
updatedAt: '2026-06-24'
url: https://wiki.seeedstudio.com/ja/raspberry_pi_5_uses_pcie_hat_dual_hat/
---

## はじめに

このチュートリアルでは主に、M.2 Hat/Dual Hat のハードウェア接続構成と、Raspberry Pi を SSD から起動する方法を紹介します。また、ケースあり/なしの 2 つの取り付け方法を取り上げ、さまざまな条件下での SSD の読み書き速度もテストします。

## 準備

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/PCIe-to-dual-M-2-hat-for-Raspberry-Pi-5-p-5973.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

ケースなしで取り付ける場合は、次の部材を用意する必要があります：

- ① Raspberry Pi 5
- ② M.2 Hat/dual Hat
- ③ SSD/AI Kit PCIe デバイス
- ④ PCIe デバイス固定用ネジ
- ⑤ M.2 Hat と Raspberry Pi 間の PCIe 接続ケーブル
- ⑥ スペーサー、長ネジ、ナット

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1.jpg" alt="pir" width="700" height="auto" /></div>

ケースありで取り付ける場合は、次の部材を用意する必要があります：

- ① Raspberry Pi 5
- ② M.2 Hat/dual Hat
- ③ SSD/AI Kit PCIe デバイス
- ④ PCIe デバイス固定用ネジ
- ⑤ M.2 Hat と Raspberry Pi 間の PCIe 接続ケーブル
- ⑥ 長ネジとナット
- ⑦ [外装ケース](https://files.seeedstudio.com/wiki/M.2_Hat/Seeed%20M.2%20hat%20with%20Pi5%20case_sam-20240827.stp)

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1_2.jpg" alt="pir" width="700" height="auto" /></div>

### 取り付け

> **Note:** これは注意事項です。`Wipe pogo pin and GPIO pad with alcohol cotton, and then connect it before you using M.2 dual Hat on raspberrypi`

<!-- <div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/hat.jpg" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/pi5_GPIO_Pad.png" alt="pir" width="700" height="auto" /></div> -->

![](https://files.seeedstudio.com/wiki/M.2_Hat/new/hat_installation.gif)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="ケースなしでの取り付け">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**Step 1**: PCIe 接続ケーブルを M.2 Hat に挿入します。ケーブルの挿入方向に注意してください。M.2 Hat の PCIe インターフェースには、金属面を下向きにして挿入します。挿入後の状態は次の図のとおりです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**Step 2**: PCIe 接続ケーブルを Raspberry Pi 5 に挿入します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

ケーブルの挿入方向に注意してください。Raspberry Pi 5 の PCIe インターフェースには、金属面を上向きにして挿入します。挿入後の状態は次の図のとおりです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**Step 3**: Raspberry Pi 5 と M.2 Hat を重ね合わせ、ネジにスペーサーを差し込みます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/6.jpg" alt="pir" width="700" height="auto" /></div>

その後、Raspberry Pi 5 と M.2 Hat のネジ穴にネジを挿入します。次の図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/7.jpg" alt="pir" width="700" height="auto" /></div>

**Step 4**: スタッドをネジにねじ込み、基板にネジを固定します。次の図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/8.jpg" alt="pir" width="700" height="auto" /></div>

**Step 5**: SSD と AI Kit を M.2 dual Hat に挿入します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/10.jpg" alt="pir" width="700" height="auto" /></div>

その後、固定用ネジを挿入して SSD と AI Kit を M.2 Hat 内に固定します。次の図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/11.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>

<TabItem value="Method 2" label="ケースありでの取り付け">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**Step 1**: PCIe 接続ケーブルを M.2 Hat に挿入します。ケーブルの挿入方向に注意してください。M.2 Hat の PCIe インターフェースには、金属面を下向きにして挿し込みます。挿入後の状態は次の図のとおりです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**Step 2**: PCIe 接続ケーブルを Raspberry Pi 5 に挿し込みます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

ケーブルの挿入方向に注意してください。Raspberry Pi 5 の PCIe インターフェースには、金属面を上向きにして挿し込みます。挿入後の状態は次の図のとおりです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**Step 3**: Raspberry Pi 5 と M.2 Hat を重ね合わせ、ケース、ネジ、ナット、PCIe デバイスを準備します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/12.jpg" alt="pir" width="700" height="auto" /></div>

重ね合わせた M.2 Hat と Raspberry Pi をケース内に入れ、Raspberry Pi が上側になるように配置します。次の図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/13.jpg" alt="pir" width="700" height="auto" /></div>

**Step 4**: ケースに用意されているネジ穴にネジをねじ込みます。この穴で M.2 Hat と Raspberry Pi を接続し、M.2 Hat、Raspberry Pi 5、およびケースを固定します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/14.jpg" alt="pir" width="700" height="auto" /></div>

**Step 5**: スタッドをネジにねじ込み、M.2 Hat、Raspberry Pi 5、およびケースを固定します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/15.jpg" alt="pir" width="700" height="auto" /></div>

**Step 6**: SSD と AI Kit を M.2 Hat に挿入します。次の図のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/16.jpg" alt="pir" width="700" height="auto" /></div>

**Step 7**: 固定用ネジをねじ込んで、SSD を M.2 Hat 内に固定します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/17.jpg" alt="pir" width="700" height="auto" /></div>

**Step 8**: 残りのケース部品を取り付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/18.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>
</Tabs>

### Raspberry Pi OS 上で SD Card Copier ツールを使用して NVME SSD に OS を書き込む

*この方法は、SD カードを使用してデバイスを正常に起動できている場合に有効です。システムが最新の Raspberry Pi システム（Bookworm 以降）であり、RPi 5 のファームウェアが 2023-12-06（12 月 6 日）以降に更新されていることを確認してください。そうでない場合、NVME 関連の設定を認識できない可能性があります。*

**Step 1**: Raspberry Pi システムが最新（Bookworm 以降）であることを確認し、次のコマンドを入力して RPi 5 のファームウェアを更新します：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

`Advanced Options` までスクロールし、Enter キーを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version` までスクロールし、Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に `Latest` を選択し、Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここでは `No` を選択します。`latest` ブートローダーを使用したいからです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

そして `Finish` を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められたら、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**：メイン画面で **Applications** => **Accessories** => **SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、下図のように OS を NVME SSD にコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Raspberry Pi を NVMe SSD から起動するように設定する

SD カードスロットに簡単にアクセスできる場合は、Pi の電源を切り、SD カードを取り外すことで（すべてが期待どおりに動作していれば）次回起動時に自動的に NVMe ドライブから起動するはずです。SD カードをそのまま挿した状態で NVMe から起動したい場合は、ブート順序を変更する必要があります。

**ステップ 1**：次のコマンドを入力します：

```shell
  sudo raspi-config
```

`Advanced Options` までスクロールして Enter キーを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**：`Boot Order` までスクロールして Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**ステップ 3**：`NVMe/USB Boot` を選択して Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

設定内容が確認されます。Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**ステップ 4**：`Back` を選択するか Esc キーを押して最初の画面に戻ります。次に、カーソルの右キーを使って Finish に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

今すぐ再起動するかどうかを尋ねられます。`Yes` をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

### PCIe の変更

<Tabs>
<TabItem value="Method 1" label="M.2 Hat">
M.2 Hat は PCIe Gen 2 および PCIe Gen 3 モードをサポートします

**ステップ 1**：次のコマンドを入力して `/boot/firmware/config.txt` ファイルを開きます

```shell
sudo nano /boot/firmware/config.txt
```

**ステップ 2**：`/boot/firmware/config.txt` ファイルの末尾にある [all] セクションに、次の内容を追加します：

```shell
dtparam=pciex1_gen=3
```

ファイルを保存して再起動すると、速度が向上する場合があります。
</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

PCIe2.0 M.2 dual Hat は PCIe Gen 2 をサポートし、PCIe3.0 M.2 dual Hat は PCIe Gen 2 と PCIe 3 をサポートします。

**ステップ 1**：次のコマンドを入力して `/boot/firmware/config.txt` ファイルを開きます

```shell
sudo nano /boot/firmware/config.txt
```

**ステップ 2**：`/boot/firmware/config.txt` ファイルの末尾にある [all] セクションに、次の内容を追加します：

```shell
dtparam=pciex1
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip,mmio-hi 
```

</TabItem>
</Tabs>

### M.2 Dual Hat ドライバの修正

新しい OS イメージを書き込んだ後、`pcie-fix.dtbo` オーバーレイをインストールして M.2 Dual Hat ドライバを修正します。

書き込んだ OS に入り、ターミナルで次のコマンドを実行します：

```shell
cd /tmp
wget https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo
sudo cp pcie-fix.dtbo /boot/firmware/overlays/
echo "dtoverlay=pcie-fix" | sudo tee -a /boot/firmware/config.txt
sudo reboot
```

### 速度ベンチマーク

<Tabs>
<TabItem value="Method 1" label="M.2 hat">

このテストは、Raspberry Pi が SD カードから起動し、SSD をバックアップストレージとして使用していることを示しています：

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

このテストは、Raspberry Pi が SSD から起動し、もう一つの SSD をバックアップストレージとして使用していることを示しています：

```
# write speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# read speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat | 読み取り & 読み取り | 書き込み & 書き込み | 読み取り & 書き込み |
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

| M.2 dual Hat with hailo8| 読み取り | 読み取り & Hailo8 | 書き込み |書き込み & Hailo8|
|:-------------|:--------------:|--------------:|--------------:|--------------:|
| PCIe 3.0       | 812MB/S     | 416MB/S 187FPS      |   701MB/s |  340MB/s  188FPS|
| PCIe 2.0       | 429MB/S      | 233MB/S/s 128FPS       |      372MB/S|  273MB/S 111FPS|

> **注:** Hailo8 をテストするには、この [リンク](https://github.com/hailo-ai/hailo-rpi5-examples) を確認し、240 FPS の動画を用意してください。

</TabItem>
</Tabs>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
