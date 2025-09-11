---
description: reServer X86
title: BIOSのアップグレードとドライバーのインストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reServer-Update-BIOS-Install-Drivers
last_update:
  date: 05/15/2025
  author: w0x7ce

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::



<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>重要な注意事項</p>
    <p style={{color: '#000000', fontSize: 14}}> これにより、<b>古いBIOS設定が消去されます</b>。そのため、Windowsを使用している場合は、再度<b>Windowsを再アクティベート</b>する必要があります（アクティベーションキーが消去され、再アクティベートにはインターネットが必要です）。<br /></p>
  </div>
</div>

## BIOSのアップグレード

reServerのBIOSファームウェアを最新の状態に保つことをお勧めします。これにより、すべてのバグ修正を含む最高のパフォーマンスを得ることができます。以下の手順に従ってBIOSをアップグレードしてください。

### 最新のBIOSファームウェア

**[ODYSSEY-TGL-A_v2.0a 2022年7月7日 16:00:00](https://files.seeedstudio.com/wiki/reServer/ODYSSEY-TGL-A_v2.0a.zip)**

- **SHA256:** 02CC2C24E615EE2665CCCF79257709433D69C5B80326FB6DB12D0341DAC2E5F5

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-main.png" /></div>

### アップグレード手順

- **ステップ 1.** フラッシュドライブをFAT32形式でフォーマットする

- **ステップ 2.** **ODYSSEY-TGL-A_v1.7a.zip**を解凍する

- **ステップ 3.** ODYSSEY-TGL-A_v1.1a内の3つのファイルをフラッシュドライブのルートにコピーする

- **ステップ 4.** reServerがすでに電源ONの場合はシャットダウンする

- **ステップ 5.** フラッシュドライブをreServerに接続する

- **ステップ 6.** reServerの電源を入れ、**DELETE**キーを押してBIOSセットアップに入る

- **ステップ 7.** **Save & Exit -> Boot Override -> UEFI:Built-in EFI shell**を選択し、**ENTER**を押す

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-EFI-start.png" /></div>

- **ステップ 8.** ボードがシェル環境に入る（何もせずに待つ）

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-2.jpg" /></div>

- **ステップ 9.** **fs0:** と入力する

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-3.jpg" /></div>

- **ステップ 10.** **dir**と入力し、ファイルが正しいことを確認する。正しくない場合は、**fs1:**、**fs2:**、または**fs3:** と入力し、**dir**でファイルをリストする

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/dir-1.png" /></div>

- **ステップ 11.** **update.nsh**と入力してBIOSをフラッシュする

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update.nsh.png" /></div>

- **ステップ 12.** BIOSのアップデートが成功すると、以下のメッセージが表示される

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-6.jpg" /></div>

- **ステップ 13.** 電源ボタンを押してボードの電源をOFFにする

- **ステップ 14.** ボードからDC電源とCMOSバッテリーを取り外す

- **ステップ 15.** 数分間待つ

- **ステップ 16.** DC電源とCMOSバッテリーをボードに再接続する

- **ステップ 17.** 再度電源ボタンを押してボードをONにする

- **ステップ 18.** 忍耐強く待ち、更新プロセスを破損させないように電源（またはハードウェア）を抜かないでください。このプロセスには6〜8分かかりますので、コーヒーブレイクをお楽しみください！

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>BIOSアップグレード後の最初の起動は<b>比較的長い</b>ため、忍耐強く待ってください。インストール済みのOSが最終的に起動します。このプロセスには<b>約6〜8分</b>かかります。</p>
  </div>
</div>

## ドライバーのインストール

reServerでWindowsを使用している場合、システムの機能を向上させるために関連するドライバーをインストールすることをお勧めします。

インストールするドライバーは以下の通りです：

- Realtek High Definition Audio Driver
- Intel® Chipset Device Software
- Intel® Graphics Driver
- Intel® HID Event Filter driver
- Intel® Converged Security and Management Engine Driver
- Intel® Serial IO Host Controller Driver
- WiFi Driver
- Ethernet Driver
- Bluetooth Driver

以下の手順に従って、上記のドライバーをインストールしてください。

- **ステップ 1.** [このファイル](https://files.seeedstudio.com/wiki/reServer/reServer-Drivers.zip)をダウンロードし、**reServer-drivers.zip**ファイルを解凍します。

- **ステップ 2.** 以下の手順に進みます。

### Realtek High Definition Audio Driver

- **ステップ 1.** **audio_realtek_6.0.9057.1_w1064.zip**を解凍します。

- **ステップ 2.** **audio_realtek_6.0.9057.1_w1064**を開きます。

- **ステップ 3.** **Setup.exe**をダブルクリックします。

### Intel® Chipset Device Software

- **ステップ 1.** **chipset-10.1.18460.8229-public-mup.zip**を解凍します。

- **ステップ 2.** **1_chipset-10.1.18460.8229-public-mup**を開きます。

- **ステップ 3.** **SetupChipset.exe**をダブルクリックします。

### Intel® Graphics Driver

- **ステップ 1.** **Graphics Driver.zip**を解凍します。

- **ステップ 2.** **igfx_win_101.1069.exe**をダブルクリックします。

### Intel® HID Event Filter Driver

- **ステップ 1.** **Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified.zip**を解凍します。

- **ステップ 2.** `Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified > Installer`に移動します。

- **ステップ 3.** **Setup.exe**をダブルクリックします。

### Intel® Converged Security and Management Engine Driver

- **ステップ 1.** **intel_(r)_csme_15.0.0.1318v3_b0_cons.zip**を解凍します。

- **ステップ 2.** `4_intel_(r)_csme_15.0.0.1318v3_b0_cons > intel_(r)_csme_15.0.0.1318v3_b0_cons > MEI-Only Installer MSI`に移動します。

- **ステップ 3.** **MEISetup.exe**をダブルクリックします。

### Intel® Serial IO Host Controller Driver

- **ステップ 1.** **SerialIO-Win10-30.100.2129.8.zip**を解凍します。

- **ステップ 2.** **SetupSerialIO.exe**をダブルクリックします。

### WiFi Driver

- **ステップ 1.** **WiFi-22.90.0-Driver64-Win10-Win11.zip**を解凍します。

- **ステップ 2.** **WiFi-22.90.0-Driver64-Win10-Win11.exe**をダブルクリックします。

### Ethernet Driver

- **ステップ 1.** **Wired_driver_26.6_x64.zip**を解凍します。

- **ステップ 2.** **Wired_driver_26.6_x64.exe**をダブルクリックします。

### Bluetooth Driver

- **ステップ 1.** **Wireless Bluetooth.zip**を解凍します。

- **ステップ 2.** **BT-22.90.2-32-64UWD-Win10-Win11.exe**をダブルクリックします。

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>