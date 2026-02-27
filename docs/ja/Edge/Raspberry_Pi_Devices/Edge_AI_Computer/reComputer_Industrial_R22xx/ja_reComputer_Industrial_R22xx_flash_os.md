---
description: reComputer Industrial R22xx は、Raspberry Pi CM5 をベースに Hailo-8 AI アクセラレータを搭載し、最大 26 TOPS を実現する産業グレードの AI 搭載 NVR です。PoE PSE をサポートする 4 つのギガビット Ethernet ポートと、追加のギガビット Ethernet ポートを備え、高帯域幅のビデオストリーミングと IP カメラ向けのシンプルな PoE 展開を可能にします。豊富な産業用 I/O、柔軟なワイヤレス接続、ファンレス熱設計、–20 °C から 50 °C の広い動作温度範囲を備え、要求の厳しいシナリオにおいても信頼性の高い AI ビデオ解析と連続した安定動作を実現します。
keywords:
- Edge Controller
- Raspberry pi
- Edge Controller
- reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg
slug: /ja/recomputer_industrial_r22xx_flash_os
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
---


# reComputer Industrial R22xx OS の書き込み

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

reComputer Industrial R22xx シリーズは Raspberry Pi CM5 と Hailo-8 AI アクセラレータを搭載しており、このコンパクトなエッジ AI システムはリアルタイムのマルチチャネル画像処理向けに 26 TOPS を提供します。クアッドコア Cortex-A76 CPU、最大 16GB RAM、64GB eMMC、および多用途なインターフェースを備え、産業用 AI アプリケーションへのシームレスな統合を実現します。

## ハードウェア要件

以下のハードウェアを準備する必要があります

- reComputer Industrial R22xx x 1
- ホストコンピュータ (Windows/Mac/Linux) x 1
- Ethernet ケーブル x 1
- 電源アダプタ (12V-24V) BYO

## ソフトウェア要件

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## OS の書き込み

### Windows ホストコンピュータの場合

- **ステップ 1.** 以下のリンクをクリックしてデバイスの [image file](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file) をダウンロードします
一番下のものを選択し、日付のリンクをクリックしてダウンロードします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-1.png" style={{width:800, height:'auto'}}/></div>

- **ステップ 2.** **Raspberry Pi Imager** ソフトウェアを **[here](https://www.raspberrypi.org/software/)** からダウンロードします

- **ステップ 3.** Raspberry Pi Imager ソフトウェアを開きます

- a.rpiboot セットアップインストーラをここをクリックしてダウンロードし、必要なドライバとブートツールをインストールします。
- b.USB Type-C ケーブルで reComputer R2200 を PC に接続します。
- c.Windows がハードウェアを検出し、必要なドライバをインストールします。
- d.先ほどインストールした rpiboot ツールを検索して開きます。
- e.ファイルエクスプローラを開くと、Computer Module 5 の eMMC が USB マスストレージデバイスとして表示されます。
- f.https://www.raspberrypi.org/software/ から Raspberry Pi Imager ソフトウェアをダウンロードします。
- g.Raspberry Pi Imager ソフトウェアを開きます。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-2.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 4.** ダウンロードしたイメージファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-3.png" alt="pir" width="800" height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-4.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 5.** Storage タブで、イメージを書き込むストレージデバイスを選択します。Next を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-5.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 6.** Raspberry Pi OS と一部のサードパーティ製 OS はカスタマイズをサポートしています。これらの OS のいずれかをインストールする場合、Imager の次の手順を使用してカスタマイズできます。これらの手順は任意であり、Skip customisation を選択してスキップできます。さらなる設定手順については **[here](https://www.raspberrypi.com/documentation/computers/getting-started.html#advanced-options)** を参照してください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-6.png" alt="pir" width="800" height="auto"/></p>

イメージの書き込みが成功するまで続けてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-7.png" alt="pir" width="800" height="auto"/></p>

USB-C ポートを抜き、再度ブートボタンを押してから電源をオン/オフします。通常どおりシステムにログインできれば、イメージの書き込みは正常に完了しており、問題なく使用できます。

### MAC ホストコンピュータの場合

:::caution
**以下の手順を進める前に [homebrew](https://brew.sh/) をインストールする必要があります。**
ターミナルを開き、```brew -V``` と入力して正しい homebrew 環境がセットアップされているか確認してください。インストール済みの homebrew 環境のバージョンが表示されるはずです。
:::

- **ステップ 1.** [this link](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file) にアクセスして **Raspberry Pi Imager** アプリケーションをダウンロードしてインストールします

- **ステップ 2.** **Raspberry Pi Imager** アプリケーションを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定** などを行うことができます

- **ステップ 4.** **CHOOSE OS** をクリックして、希望する OS を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="800" height="auto"/></p>

**NOTE:** **Other general purpose OS** に進むことで、**64-bit Ubuntu** など他の OS を選択できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、次のリンクを使用してイメージファイルをダウンロードすることもできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 5.** **CHOOSE STORAGE** をクリックします

- **ステップ 6.** 最後に **WRITE** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="800" height="auto"/></p>

### Linux ホストコンピュータの場合

- **ステップ 1.** snap をダウンロードします

```sh
sudo apt install snap
```

- **ステップ 2.** **rpi-imager** をダウンロードします

```sh
snap install rpi-imager
```

- **ステップ 3.** Raspberry Pi Imager ソフトウェアを開きます

```sh
rpi-imager
```

結果は次のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 4.** キーボードで **CTRL + SHIFT + X** を押して **Advanced options** ウィンドウを開きます

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

ここで **ホスト名の設定、SSH の有効化、パスワードの設定、Wi-Fi の設定、ローカル設定** などを行うことができます

- **ステップ 5.** **CHOOSE OS** をクリックして、希望する OS を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**NOTE:** **Other general purpose OS** に進むことで、**64-bit Ubuntu** など他の OS を選択できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

または、次のリンクを使用してイメージファイルをダウンロードすることもできます：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **ステップ 6.** **CHOOSE STORAGE** をクリックし、接続されている eMMC ドライブを選択します

- **ステップ 7.** 最後に **NEXT** と **YES** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="800" height="auto"/></p>

フラッシュ処理が完了するまで数分お待ちください。
結果は次のように表示されます：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="800" height="auto"/></p>

## NVME からの起動

### EEPROM の更新

*この方法は SSD を搭載し、eMMC から正常にデバイスを起動できている場合に有効です。システムが最新の Raspberry Pi システム (Bookworm 以降) であり、RPi 5 のファームウェアが 2023-12-06 (12 月 6 日) 以降に更新されていることを確認してください。そうでない場合、NVME 関連の設定が認識されない可能性があります。*

**ステップ 1**:Raspberry Pi システムが最新 (Bookworm 以降) であることを確認し、次のコマンドを入力して RPi 5 ファームウェアを更新します：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

`Advanced Options` までスクロールして Enter を押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="800" height="auto" /></div>

`Bootloader Version` までスクロールして Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="800" height="auto" /></div>

最後に `Latest` を選択し、Enter を押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="800" height="auto" /></div>

ここでは `No` を選択します。`latest` ブートローダーを使用したいからです。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="800" height="auto" /></div>

そして `Finish` を選択してツールを終了します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="800" height="auto" /></div>

再起動を求められた場合は、`Yes` を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="800" height="auto" /></div>

**ステップ 2**：メイン画面で **Applications** => **Accessories** => **SD Card Copier** をクリックし、**SD Card Copier** プログラムを実行して、下図のように OS を NVME SSD にコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="800" height="auto" /></div>

### Raspberry Pi を NVMe SSD から起動するように設定する

SD カードスロットに簡単にアクセスできる場合は、Pi の電源を切り、SD カードを取り外します。すべてが期待どおりに動作していれば、次回起動時に自動的に NVMe ドライブから起動するはずです。SD カードを挿したまま NVMe から起動したい場合は、ブート順序を変更する必要があります。

**ステップ 1**：次のコマンドを入力します：

```shell
  sudo raspi-config
```

`Advanced Options` までスクロールし、Enter キーを押します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="800" height="auto" /></div>

**ステップ 2**：`Boot Order` までスクロールし、Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="800" height="auto" /></div>

**ステップ 3**：`NVMe/USB Boot` を選択し、Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="800" height="auto" /></div>

設定内容が確認されます。Enter キーを押します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="800" height="auto" /></div>

**ステップ 4**：`Back` を選択するか Esc キーを押して最初の画面に戻ります。その後、カーソルの右キーを使って Finish に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="800" height="auto" /></div>

今すぐ再起動するかどうかを尋ねられます。`Yes` をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="800" height="auto" /></div>


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
