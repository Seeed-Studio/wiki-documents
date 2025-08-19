---
description: Edge Box RPi 200 用 Codesys
title: Edge Box RPi 200 用 Codesys
keywords:
  - Edge
  - reTerminal アプリケーション
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edgebox-rpi-200-codesys
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ---
name: Edgebox-RPI-200
category: 
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 102110771
tags:
--- -->

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPi-200シリーズは、複数の産業用途を統合したオールインワンのRaspberry Piベースの産業用エッジコンピューティングコントローラーです。高い拡張性と堅牢な産業用ハードウェアとして設計され、豊富なIOリソースを搭載し、優れたRaspberry Pi産業用ソフトウェアエコシステムに対応しています。スマートオートメーションや産業用IoT（IIoT）ソリューションに最適な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

### 特徴

- オールインワン産業用コントローラー:
  
  - PLCやPAC以上の機能を持ち、IIoTゲートウェイ、OPC UAサーバー、産業用PCの機能を実現可能。
  
- 強力で柔軟なプロセッサ:
  
  - Raspberry Pi Compute Module 4 (CM4)を搭載し、最大4GB RAMと16GB eMMCを装備。リアルタイム操作とマルチプロセスを実現。

- 豊富なIOリソースと産業用インターフェースを搭載:
  
  - 幅広い産業用バスプロトコルと標準をサポート。

- 多様な通信機能:
  
  - フル機能のワイヤレス接続性とRJ45ギガビットイーサネットを搭載し、複数のクラウドサービスに対応。

- 堅牢な産業用グレードのハードウェア設計:
  
  - アルミニウム製ヒートシンク筐体による統合型熱管理を採用し、35mm DINおよび壁面取り付けに対応。

- 優れたRaspberry Pi産業用ソフトウェアエコシステム:
  
  - Codesys、Node Red、MQTT、OPC UA、Ignitionなど、さまざまな産業用ソフトウェアとプラットフォームをサポート。

## Codesysとは？

Codesysは、産業用コントローラーとオートメーションをプログラミングするための統合型産業標準IEC 61131-3ソフトウェア開発環境です。

このWikiでは、Codesys Development System V3ソフトウェアをIDEとして使用し、Edgebox-RPI-200上で動作するソフトウェアを設定およびプログラムします。Edgebox-RPI-200はRaspberry Pi Compute Module 4ベースのPLCコントローラーであるため、CODESYS Control for Raspberry Pi MCランタイムをインストールして設定します。

## 必要条件

- 1台のWindows PCホストコンピューター
- 1台の[Edgebox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- [CODESYS Development System V3](https://store.codesys.com/engineering/codesys.html?___store=en) ソフトウェア
- [CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html) ライセンスとインストーラー

[CODESYS Development System V3ダウンロードページ](https://store.codesys.com/engineering/codesys.html?___store=en)にアクセスして、Windows PCホストコンピューターのセットアップに応じたCODESYS Development System V3インストーラーをダウンロードし、インストールウィザードに従ってプログラムをインストールしてください。

[CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html)にアクセスしてライセンスを購入するか、好みに応じて[CODESYS Control for Raspberry Pi SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-sl.html)を購入し、Raspberry Pi CODESYSインストーラーパッケージをダウンロードしてください。

## はじめに

### プロジェクト準備

:::note
ホストコンピュータに CODESYS Development System V3 ソフトウェアがインストールされ、開かれていることを確認してください。
:::

- **STEP 1:** **CODESYS Development System に CODESYS Control for Raspberry PI パッケージをインストールする**

- **STEP 1-1:** **"TOOLS > CODESYS Installer"** をクリックして **Codesys Installer** を**開いてください**。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer.png"/></div>

- **STEP 1-2:** パッケージインストール中に必要に応じて **CODESYS Development System V3 ソフトウェア**を**閉じてください**。そうしないと、以下のような警告が表示されます。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/quit_codesys.png"/></div>

- **STEP 1-3:** **"browse"** をクリックし、**"CODESYS Control for Raspberry Pi MC SL package"** を選択して **"install"** をクリックしてください。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_1.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_2.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_3.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_4.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_5.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_6.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_7.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_8.png"/></div>

### Edgebox-RPI-200 を使用した USER LED プロジェクトの切り替え

:::note
Edgebox-RPI-200 が電源に接続され、ホストコンピュータと同じネットワークに接続されていることを確認してください。接続したルーターの DHCP リーステーブルから Edgebox-RPI-200 の IP アドレスを取得する必要があります。
:::

- **STEP 1:** **プロジェクト設定**
- **STEP 1-1:** CODESYS Development System V3 ソフトウェアを開き、**"File > New Project..."** を選択してください。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project.png"/></div>

- **STEP 1-2:** **"New Project"** ウィンドウで、**"Categories"** ウィンドウの **"projects"** を選択し、**"Templates"** で **"Standard project"** を選択、**プロジェクト名を入力**し、**"OK"** をクリックしてください。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_1.png"/></div>

- **STEP 1-3:** Standard Project ウィンドウで、デバイスとして **"CODESYS Control for Raspberry Pi MC SL (CODESYS GmBH)"** を選択し、PLC_PRG には **"Ladder Logic Diagram (LD)"** を選択して **"OK"** をクリックしてください。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_2.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_3.png"/></div>

Raspberry Pi 用の新しいプロジェクトを設定した後、以下のような画面が表示されるはずです。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_4.png"/></div>

- **STEP 2:** Edgebox-RPI-200 の設定

- **STEP 2-1:** **"Tools > Update Raspberry Pi"** を選択してください。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi.png"/></div>

- **STEP 2-2:** Raspberry Pi サイドパネルで以下の情報を入力し、**"Install"** ボタンをクリックして **"CODESYS Control for Raspberry Pi MC runtime"** を Edgebox-RPI-200 にインストールしてください。

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_1.png"/></div>

- ログイン情報
  - ユーザー名: pi
  - パスワード: raspberry
- ターゲットの選択:
  - IP アドレス: 192.168.1.40
- CODESYS ランタイムパッケージ
  - バージョン: 4.6.0.0(raspberry, armhf)

- **STEP 2-3:** **"Configure Runtime"** ポップアップウィンドウで、希望する **"runtime mode"** を選択してください。この場合、デフォルトの **"Multicore"** を選択し、**"OK"** をクリックします。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_2.png"/></div>

- **STEP 2-4:** **"CODESYS Control for Raspberry Pi MC runtime"** が **"Edgebox-RPI-200"** 上で実行されていることを確認するには、**"Runtime"** セクションで **"Start"** をクリックし、**"Messages"** ウィンドウに **"Standard output: codesyscontrol already running"** と表示されていることを確認してください。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_3.png"/></div>

- **STEP 3:** **GPIO デバイスの設定:**

- **STEP 3-1:** Devices タブで GPIO を追加します。まず、左側のサイドバーで **"Devices"** タブを選択し、デバイスを右クリックしてドロップダウンリストから **"Add Device"** を選択してください。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device.png"/></div>

- **STEP 3-2:** **"Add Device"** ウィンドウで、Miscellaneous の **"+"** をクリックし、**"GPIO"** オプションを選択して **"Add Device"** をクリックして確認してください。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_1.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_2.png"/></div>

これで、デバイスタブに新しい GPIO デバイスがリストされているはずです。
<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_3.png"/></div>

- **STEP 3-3:** 1 ビット GPIO デバイスを追加します。上記の手順で追加した新しい **"GPIO"** デバイスを右クリックし、ドロップダウンリストから **"Add Device..."** を選択してください。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_1.png"/></div>

- **STEP 3-4:** **「Add Device」**ウィンドウで、**「GPIOS 1 bit」**オプションを選択し、**「Add Device」**をクリックして確認します。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_2.png"/></div>

- **STEP 3-5:** GPIOを設定するには、上記の手順で追加した新しいデバイス **「GPIOS_1_bit(GPIOs 1 bit)」** をダブルクリックして、メイン設定ウィンドウを開きます。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_3.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_4.png"/></div>

- **STEP 3-6:** **「GPIOs_1_bit」** **メイン設定**ウィンドウで、最初のタブ **「GPIOSysfsModuleParameters」** を選択し、**GPIO Direction**、**Pin Number**、および**現在のPIN状態**を設定します。この例では、Edgebox-RPI-200のLED2をトグルするため、[データシート](#)によるとGPIOピン21を使用します。そのため、ピン設定は以下のようにします。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_1.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_2.png"/></div>

- **STEP 3-7:** GPIO I/Oをマッピングするには、2番目のタブ **「GPIOSysfsModule I/O Mapping」** を選択し、GPIOに変数名を割り当てます。この例では、**「GPIO 21 input」** に対して **「LED_in」**、**「GPIO 21 Output」** に対して **「LED_out」** と名付けます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_3.png"/></div>

:::note
デフォルトの **「GPIOs_A_B(GPIOs A/B)」** デバイスを削除してください。そうしないと、新しく追加したGPIOデバイスに干渉する可能性があります。
:::

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/delete_gpio_AB.png"/></div>

- **STEP 4:** **Edgebox-RPI-200にオンライン設定モードで接続し、Edgebox-RPI-200のLED2をテストおよびトグルします**

- **STEP 4-1:** まず、**「Device (CODESYS Control for Raspberry Pi MC SL)」** をダブルクリックしてデバイスを設定します。これにより、**デバイス設定**ウィンドウが表示されます。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device.png"/></div>

- **STEP 4-2:** **「デバイス設定」**ウィンドウの**「Communication」**設定タブで、**「Device」**ドロップダウンリストをクリックし、**「Options>Manage Favorite Devices...」**を選択します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_1.png"/></div>

- **STEP 4-3:** **「Manage Favorite Devices」**ウィンドウで、**「+ Add」**をクリックし、**「Add favorite」**ウィンドウを開きます。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_2.png"/></div>

- **STEP 4-4:** **「Enter name, device address or IP address」**ボックスに**Edgebox-RPI-200のIPアドレス**を入力してください。

> この例では、Edgebox-RPI-200のIPアドレスは **「192.168.1.40」** です。入力後、**「OK」** をクリックして確認します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_3.png"/></div>

- **STEP 4-5:** **「Manage Favorite Devices」**ウィンドウで、**新しく追加したIPアドレスデバイス**を識別子フィールドに選択し、**「OK」** をクリックして確認します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_4.png"/></div>

- **STEP 4-6:** **「デバイス設定」**ウィンドウの**「Communication」**設定タブで、ドロップダウンリストをクリックし、新しく追加したデバイス **「IP Address」** を選択します。接続されたデバイスに関する情報が下部に表示されるはずです。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_5.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_6.png"/></div>
  
- **STEP 4-7:** **「Online Config Mode...」** ボタンを**「ツールバー」**からクリックします。**「Online Config Mode...」**のアイコンが緑から赤に変われば、CODESYS Development System V3 IDEがEdgebox-RPI-200に接続され、IDEから接続されたハードウェアデバイスを直接テストおよび操作できるようになります。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config.png"/></div>

- **STEP 4-8:** デバイスサイドバーから **「GPIOs_1_bit(GPIOs 1 bit)」** をダブルクリックして設定ウィンドウを開きます。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config_1.png"/></div>

- **STEP 4-9:** メイン設定ウィンドウの2番目のタブ **「GPIOSysfsModule I/O Mapping」** を選択します。**「Current Value」** が **「False」** であることを確認してください。Edgebox-RPI-200のLED2をトグルするには、**「Current Value」** セクションの **「False」** をダブルクリックして **「True/False」** を切り替えます。**「LED_out」** の値に応じてLED2がオン/オフするはずです。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio_1.png"/></div>

Edgebox-RPI-200のLED2を確認してください。トグルされた値に応じて反応するはずです。

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_led.jpg"/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>