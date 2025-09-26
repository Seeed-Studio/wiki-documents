---
description: reServer X86
title: BIOSのアップグレードとドライバーのインストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reServer-Update-BIOS-Install-Drivers
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: Upgrading BIOS and Installing Drivers
category: reServer
bzurl: 
wikiurl: 
sku: 
--- -->

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>重要な注意事項</p>
    <p style={{color: '#000000', fontSize: 14}}> これは<b>古いBIOS設定を消去します</b>ので、（Windowsを使用している場合）Windowsを<b>再アクティベーション</b>する必要があります（アクティベーションキーが消去されるため、再度アクティベーションするにはインターネットが必要です）。<br /></p>
  </div>
</div>

## BIOSのアップグレード

すべてのバグ修正を含む最高のパフォーマンスを得るために、reServerのBIOSファームウェアを最新の状態に保つことをお勧めします。BIOSをアップグレードするには、以下の手順に従ってください。

### 最新のBIOSファームウェア

**[ODYSSEY-TGL-A_v2.0a 7/7/2022 16:00:00](https://files.seeedstudio.com/wiki/reServer/ODYSSEY-TGL-A_v2.0a.zip)**

- **SHA256:** 02CC2C24E615EE2665CCCF79257709433D69C5B80326FB6DB12D0341DAC2E5F5

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-main.png" /></div>

### アップグレード手順

- **手順1.** フラッシュドライブをFAT32でフォーマットします

- **手順2.** **ODYSSEY-TGL-A_v1.7a.zip**を展開します

- **手順3.** ODYSSEY-TGL-A_v1.1aに含まれる3つのファイルをフラッシュドライブのルートにコピーします

- **手順4.** reServerが既にONの場合はシャットダウンします

- **手順5.** フラッシュドライブをreServerに接続します

- **手順6.** reServerをONにし、**DELETE**キーを押してBIOSセットアップに入ります

- **手順7.** **Save & Exit -> Boot Override -> UEFI:Built-in EFI shell**を選択し、**ENTER**を押します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-EFI-start.png" /></div>

- **手順8.** ボードはシェル環境に入ります（待機するだけで、何もしません）

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-2.jpg" /></div>

- **手順9.** **fs0:**と入力します

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-3.jpg" /></div>

- **手順10.** **dir**と入力し、ファイルが正しいことを確認します。正しくない場合は、**fs1:**または**fs2:**または**fs3:**と入力してから**dir**を実行して、内部のファイルをリストします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/dir-1.png" /></div>

- **手順11.** **update.nsh**と入力してBIOSをフラッシュします

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update.nsh.png" /></div>

- **手順12.** BIOSアップデートが成功した場合、以下のメッセージが表示されます

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-6.jpg" /></div>

- **手順13.** 電源ボタンを押してボードをOFFにします

- **手順14.** ボードからDC電源とCMOSバッテリーを取り外します

- **手順15.** 数分間待ちます

- **手順16.** DC電源とCMOSバッテリーをボードに戻します

- **手順17.** 最後に電源ボタンを再度押してボードをONにします

- **手順18.** 辛抱強く待ち、更新プロセスを破損させるために電源（またはハードウェア）を抜かないでください。プロセスには6〜8分かかりますので、コーヒーブレイクをお楽しみください！

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>BIOSアップグレード後の最初の起動は<b>比較的長く</b>なりますので、辛抱強く待ってください。インストールされたOSは最終的に起動します。<b>約6〜8分</b>かかります。</p>
  </div>
</div>

## ドライバーのインストール

reServerでWindowsを使用している場合、システムの機能性を向上させるために関連ドライバーをインストールすることをお勧めします。

ドライバーには以下が含まれます：

- Realtek High Definition Audio Driver
- Intel® Chipset Device Software
- Intel® Graphics Driver
- Intel® HID Event Filter driver
- Intel® Converged Security and Management Engine Driver
- Intel® Serial IO Host Controller Driver
- WiFi Driver
- Ethernet Driver
- Bluetooth Driver

上記のドライバーをインストールするには、以下の手順に従ってください

- **ステップ 1.** [このファイル](https://files.seeedstudio.com/wiki/reServer/reServer-Drivers.zip)をダウンロードし、**reServer-drivers.zip**ファイルを展開します

- **ステップ 2.** 以下の手順に進みます

### Realtek High Definition Audio ドライバー

- **ステップ 1.** **audio_realtek_6.0.9057.1_w1064.zip**を展開します

- **ステップ 2.** **audio_realtek_6.0.9057.1_w1064**を開きます

- **ステップ 3.** **Setup.exe**をダブルクリックします

### Intel® チップセットデバイスソフトウェア

- **ステップ 1.** **chipset-10.1.18460.8229-public-mup.zip**を展開します

- **ステップ 2.** **1_chipset-10.1.18460.8229-public-mup**を開きます

- **ステップ 3.** **SetupChipset.exe**をダブルクリックします

### Intel® グラフィックスドライバー

- **ステップ 1.** **Graphics Driver.zip**を展開します

- **ステップ 2.** **igfx_win_101.1069.exe**をダブルクリックします

### Intel® HID イベントフィルタードライバー

- **ステップ 1.** **Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified.zip**を展開します

- **ステップ 2.** `Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified > Installer`に移動します

- **ステップ 3.** **Setup.exe**をダブルクリックします

### Intel® Converged Security and Management Engine ドライバー

- **ステップ 1.** **intel_(r)_csme_15.0.0.1318v3_b0_cons.zip**を展開します

- **ステップ 2.** `4_intel_(r)_csme_15.0.0.1318v3_b0_cons > intel_(r)_csme_15.0.0.1318v3_b0_cons > MEI-Only Installer MSI`に移動します

- **ステップ 3.** **MEISetup.exe**をダブルクリックします

### Intel® Serial IO ホストコントローラードライバー

- **ステップ 1.** **SerialIO-Win10-30.100.2129.8.zip**を展開します

- **ステップ 2.** **SetupSerialIO.exe**をダブルクリックします

### WiFi Driver

- **ステップ 1.** **WiFi-22.90.0-Driver64-Win10-Win11.zip**を展開します

- **ステップ 2.** **WiFi-22.90.0-Driver64-Win10-Win11.exe**をダブルクリックします

### Ethernet Driver

- **ステップ 1.** **Wired_driver_26.6_x64.zip**を展開します

- **ステップ 2.** **Wired_driver_26.6_x64.exe**をダブルクリックします

### Bluetooth Driver

- **ステップ 1.** **Wireless Bluetooth.zip**を展開します

- **ステップ 2.** **BT-22.90.2-32-64UWD-Win10-Win11.exe**をダブルクリックします

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
