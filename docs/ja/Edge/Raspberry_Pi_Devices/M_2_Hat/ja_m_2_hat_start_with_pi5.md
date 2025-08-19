---
description: このチュートリアルでは、主に M.2 Hat と Dual Hat のハードウェア接続構成、および Raspberry Pi を SSD から起動する方法について紹介します。
title: Raspberry Pi 5 が PCIe Hat/Dual Hat を使用する方法
keywords:
  - M.2 Hat
  - Dual Hat
  - Raspberry Pi
image: https://files.seeedstudio.com/wiki/M.2_Hat/new/m.2-dual-hat-for-raspberry-pi-5.webp
slug: /ja/raspberry_pi_5_uses_pcie_hat_dual_hat
last_update:
  date: 05/15/2025
  author: Jiahaoli

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

このチュートリアルでは、主に M.2 Hat/Dual Hat のハードウェア接続構成と、Raspberry Pi を SSD から起動する方法について紹介します。また、ケースあり・なしの2つの設置方法についても説明し、異なる条件下での SSD の読み書き速度をテストします。

## 準備を始める

### ハードウェアの準備

<div class="table-center">
	<table align="center">
	<tr>
		<th>Raspberry Pi5 8GB</th>
		<th>M.2 Hat/Dual Hat</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-103110064-pcie-to-m.2-dual-hat-for-raspberry-pi-5-fonmt.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/PCIe-to-dual-M-2-hat-for-Raspberry-Pi-5-p-5973.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

ケースなしで設置する場合、以下の材料を準備する必要があります：

- ① Raspberry Pi 5
- ② M.2 Hat/Dual Hat
- ③ SSD/AI Kit PCIe デバイス
- ④ PCIe デバイス固定用ネジ
- ⑤ M.2 Hat と Raspberry Pi 間の PCIe 接続ケーブル
- ⑥ ネジスリーブ、長いネジ、ナット

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1.jpg" alt="pir" width="700" height="auto" /></div>

ケースありで設置する場合、以下の材料を準備する必要があります：

- ① Raspberry Pi 5
- ② M.2 Hat/Dual Hat
- ③ SSD/AI Kit PCIe デバイス
- ④ PCIe デバイス固定用ネジ
- ⑤ M.2 Hat と Raspberry Pi 間の PCIe 接続ケーブル
- ⑥ 長いネジとナット
- ⑦ [外装ケース](https://files.seeedstudio.com/wiki/M.2_Hat/Seeed%20M.2%20hat%20with%20Pi5%20case_sam-20240827.stp)

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1_2.jpg" alt="pir" width="700" height="auto" /></div>

### 設置方法

> **注意:** これは注意書きです。`M.2 Dual Hat を Raspberry Pi で使用する前に、ポゴピンと GPIO パッドをアルコール綿で拭いてから接続してください。`

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/hat.jpg" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/pi5_GPIO_Pad.png" alt="pir" width="700" height="auto" /></div>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="ケースなしでの設置">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 1**: PCIe 接続ケーブルを M.2 Hat に挿入します。ケーブルの挿入方向に注意してください。M.2 Hat の PCIe インターフェースは金属面を下向きにして挿入します。挿入後の図は以下の通りです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 2**: PCIe 接続ケーブルを Raspberry Pi 5 に挿入します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

ケーブルの挿入方向に注意してください。Raspberry Pi 5 の PCIe インターフェースは金属面を上向きにして挿入します。挿入後の図は以下の通りです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 3**: Raspberry Pi 5 を M.2 Hat と重ね合わせ、ネジスリーブをネジに挿入します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/6.jpg" alt="pir" width="700" height="auto" /></div>

次に、ネジを Raspberry Pi 5 と M.2 Hat のネジ穴に挿入します。図は以下の通りです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/7.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 4**: スタッドをネジにねじ込み、ネジを基板に固定します。図は以下の通りです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/8.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 5**: SSD と AI Kit を M.2 Dual Hat に挿入します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/10.jpg" alt="pir" width="700" height="auto" /></div>

次に固定ネジを挿入し、SSD と AI Kit を M.2 Hat に固定します。図は以下の通りです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/11.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>

<TabItem value="Method 2" label="ケースありでの設置">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 1**: PCIe 接続ケーブルを M.2 Hat に挿入します。ケーブルの挿入方向に注意してください。金属面を下向きにして、M.2 Hat の PCIe インターフェースに差し込みます。挿入後の状態は以下の図の通りです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 2**: PCIe 接続ケーブルを Raspberry Pi 5 に接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

ケーブルの挿入方向に注意してください。金属面を上向きにして、Raspberry Pi 5 の PCIe インターフェースに差し込みます。挿入後の状態は以下の図の通りです：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 3**: Raspberry Pi 5 と M.2 Hat を重ね合わせ、ケース、ネジ、ナット、PCIe デバイスを準備します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/12.jpg" alt="pir" width="700" height="auto" /></div>

M.2 Hat と Raspberry Pi を重ねた状態でケースに収め、Raspberry Pi を上に配置します。以下の図のように配置してください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/13.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 4**: ケースのネジ穴にネジを差し込みます。このネジ穴は M.2 Hat と Raspberry Pi を接続し、M.2 Hat、Raspberry Pi 5、およびケースを固定します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/14.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 5**: スタッドをネジに取り付けて、M.2 Hat、Raspberry Pi 5、およびケースを固定します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/15.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 6**: SSD と AI キットを M.2 Hat に挿入します。以下の図のように配置してください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/16.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 7**: 固定用のネジを締めて、SSD を M.2 Hat に固定します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/17.jpg" alt="pir" width="700" height="auto" /></div>

**ステップ 8**: 残りのケースを取り付けます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/18.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>
</Tabs>

### SD Card Copier ツールを使用して Raspberry Pi OS を NVMe SSD に書き込む

*この方法は、SD カードを使用してデバイスを正常に起動した場合に有効です。システムが最新の Raspberry Pi システム（Bookworm 以降）であり、RPi 5 のファームウェアが 2023 年 12 月 6 日（12 月 6 日）以降に更新されていることを確認してください。そうでない場合、NVMe 関連の設定が認識されない可能性があります。*

**ステップ 1**: Raspberry Pi システムが最新であることを確認します（Bookworm 以降）。以下のコマンドを入力して RPi 5 ファームウェアを更新してください：
```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # 2023 年 12 月以降でない場合は、以下のコマンドをターミナルに入力して設定ツールを起動します
  sudo raspi-config
```
`Advanced Options` までスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

`Bootloader Version` までスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最後に `Latest` を選択して Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

ここでは `No` を選択します - `latest` ブートローダーを選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

`Finish` を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**：メイン画面で **Applications** => **Accessories** => **SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、OS を NVMe SSD にコピーします。以下の図を参考にしてください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Raspberry Pi を NVMe SSD から起動する設定

SD カードスロットに簡単にアクセスできる場合は、Pi をシャットダウンして SD カードを取り外し、（すべてが正常に動作していれば）次回起動時に NVMe ドライブから自動的に起動するはずです。ただし、SD カードをそのままにして NVMe から起動したい場合は、起動順序を変更する必要があります。

**ステップ 1**: 以下のコマンドを入力します：
```shell
  sudo raspi-config
```
`Advanced Options` までスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**: `Boot Order` までスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**ステップ 3**: `NVMe/USB Boot` を選択して Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

設定が確認されます。Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**ステップ 4**: `Back` を選択するか Esc キーを押して最初の画面に戻ります。その後、右カーソルキーを使用して Finish に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

再起動するかどうか尋ねられます。「Yes」をクリックしてください:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>


### PCIeの変更

<Tabs>
<TabItem value="Method 1" label="M.2 Hat">
M.2 HatはPCIe Gen 2およびPCIe Gen 3モードをサポートしています。

**ステップ 1**: 以下のコマンドを入力して`/boot/firmware/config.txt`ファイルを開きます。
```shell
sudo nano /boot/firmware/config.txt
```

**ステップ 2**: `/boot/firmware/config.txt`ファイルの最後の[all]セクションに以下を追加してください。
```shell
dtparam=pciex1_gen=3
```
ファイルを保存して再起動してください。速度が向上する可能性があります！
</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

PCIe2.0 M.2 dual HatはPCIe Gen 2をサポートし、PCIe3.0 M.2 dual HatはPCIe Gen 2およびPCIe Gen 3をサポートしています。

**ステップ 1**: 以下のコマンドを入力して`/boot/firmware/config.txt`ファイルを開きます。
```shell
sudo nano /boot/firmware/config.txt
```

**ステップ 2**: `/boot/firmware/config.txt`ファイルの最後の[all]セクションに以下を追加してください。

```shell
dtparam=pciex1
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip,mmio-hi 
```

</TabItem>
</Tabs>

### スピードベンチマーク

<Tabs>
<TabItem value="Method 1" label="M.2 hat">

このテストは、Raspberry PiがSDカードから起動し、SSDをバックアップストレージとして使用することを示しています。
```
# 書き込み速度コマンド
sudo dd if=/dev/zero of=/mnt/nvme/testfile bs=1M count=1024 oflag=direct

# 読み取り速度コマンド
sudo dd if=/mnt/nvme/testfile of=/dev/null bs=1M iflag=direc
```

| M.2 hat | 読み取り速度 | 書き込み速度 |
|:-------------|:--------------:|--------------:|
| PCIe 3.0       | 822MB/s       | 716MB/s         |
| PCIe 2.0       | 431 MB/s      | 389MB/s         |


</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

このテストは、Raspberry PiがSSDから起動し、別のSSDをバックアップストレージとして使用することを示しています。

```
# 書き込み速度コマンド
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# 読み取り速度コマンド
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat | 読み取り & 読み取り | 書き込み & 書き込み | 読み取り & 書き込み |
|:-------------|:--------------:|--------------:|--------------:|
| PCIe 3.0       | 平均 454MB/s      | 平均 407MB/s        |   697MB/s 663MB/s|
| PCIe 2.0       | 平均 234MB/s      | 平均 214MB/s        |      414MB/s 324MB/s|


</TabItem>

<TabItem value="Method 3" label="M.2 dual Hat with hailo8">

このテストは、Raspberry PiがSSDから起動し、Hailo8 AIアクセラレータを使用することを示しています。

```
# 書き込み速度コマンド
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# 読み取り速度コマンド
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat with hailo8 | 読み取り | 読み取り & Hailo8 | 書き込み | 書き込み & Hailo8 |
|:-------------|:--------------:|--------------:|--------------:|--------------:|
| PCIe 3.0       | 812MB/S     | 416MB/S 187FPS      |   701MB/s |  340MB/s  188FPS|
| PCIe 2.0       | 429MB/S      | 233MB/S/s 128FPS       |      372MB/S|  273MB/S 111FPS|

> **注意:** Hailo8をテストするには、この[リンク](https://github.com/hailo-ai/hailo-rpi5-examples)を確認し、240 FPSの動画を準備してください。

</TabItem>
</Tabs>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>


<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>