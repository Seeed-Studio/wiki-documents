---
description: Edge Box RPi 200 用 Codesys
title: Edge Box RPi 200 用 Codesys
keywords:
  - Edge
  - reTerminal Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edgebox-rpi-200-codesys
last_update:
  date: 2/1/2023
  author: Peter Pan
---

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

EdgeBox-RPi-200 シリーズは、Raspberry Pi ベースのオールインワン産業用エッジコンピューティングコントローラーで、複数の産業用途を組み合わせています。高い拡張性と堅牢な産業用ハードウェアとして設計され、豊富な IO リソースを搭載し、優れた Raspberry Pi 産業用ソフトウェアエコシステムによってサポートされており、スマート自動化および産業用モノのインターネット（IIoT）ソリューションに理想的な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

### 特徴

- オールインワン産業用コントローラー：
  
  - 単なる PLC、PAC 以上の機能を持ち、IIoT ゲートウェイ、OPC UA サーバー、産業用 PC の機能を実装できます。
  
- 強力で柔軟なプロセッサー：
  
  - Raspberry Pi Compute Module 4（CM4）を搭載し、最大 4GB RAM と 16GB eMMC を装備し、リアルタイム動作とマルチプロセスを実行します。

- 豊富な IO リソースと産業用インターフェースを搭載：
  
  - 幅広い産業用バスプロトコルと標準をサポート

- 複数の通信機能：
  
  - フル機能のワイヤレス相互接続と RJ45 ギガビットイーサネットを搭載し、複数のクラウドサービスによってサポートされています

- 堅牢な産業グレードハードウェア設計：
  
  - フルアルミニウムヒートシンクエンクロージャーによる統合熱管理、35mm DIN および壁面取り付けをサポート

- 優れた Raspberry Pi 産業用ソフトウェアエコシステム：
  
  - Codesys、Node Red、MQTT、OPC UA、Ignition など、さまざまな産業用ソフトウェアとプラットフォームをサポート

## Codesys とは？

Codesys は、産業用コントローラーと自動化をプログラミングするための統合産業標準 IEC 61131-3 ソフトウェア開発環境です。

この wiki では、Codesys Development System V3 ソフトウェアを IDE として使用して、Raspberry Pi Computer Module 4 ベースの PLC コントローラーである Edgebox-RPI-200 で実行するソフトウェアを設定およびプログラムしました。そのため、CODESYS Control for Raspberry Pi MC ランタイムが Edgebox-RPI-200 にインストールおよび設定されます。

## 前提条件

- 1 x Windows PC ホストコンピューター
- 1 x [Edgebox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- [CODESYS Development System V3](https://store.codesys.com/engineering/codesys.html?___store=en) ソフトウェア
- [CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html) ライセンスとインストーラー

[CODESYS Development System V3 ダウンロードページ](https://store.codesys.com/engineering/codesys.html?___store=en)にアクセスして、Windows PC ホストコンピューターのセットアップに応じて CODESYS Development System V3 インストーラーをダウンロードし、インストールウィザードに従ってプログラムをインストールしてください。

[CODESYS Control for Raspberry Pi MC SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-mc-sl.html) にアクセスしてライセンスを購入するか、お好みに応じて [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/en/codesys-control-for-raspberry-pi-sl.html) を購入し、Raspberry Pi CODESYS インストーラーパッケージをダウンロードしてください。

## はじめに

### プロジェクトの準備

:::note
ホストコンピュータにCODESYS Development System V3ソフトウェアがインストールされ、開かれていることを確認してください。
:::

- **ステップ1:** **CODESYS Development SystemにCODESYS Control for Raspberry PIパッケージをインストール**

- **ステップ1-1:** **"TOOLS> CODESYS Installer"** をクリックして **Codesys Installer** を **開いて** ください

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer.png"/></div>

- **ステップ1-2:** パッケージインストール中は **CODESYS Development System V3ソフトウェア** を **閉じて** ください。そうしないと以下のような警告が表示されます：

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/quit_codesys.png"/></div>

- **ステップ1-3:** **"browse"** をクリックして **"CODESYS Control for Raspberry Pi MC SLパッケージ"** を選択し、**"install"** をクリックしてください

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_1.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_2.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_3.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_4.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_5.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_6.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_7.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesys_installer_8.png"/></div>

### Edgebox-RPI-200でのUSER LED切り替えプロジェクト

:::note
Edgebox-RPI-200が電源投入され、ホストコンピュータと同じネットワークに接続されていることを確認してください。接続したルーターのDHCPリーステーブルからEdgebox-RPI-200のIPアドレスを取得する必要があります。
:::

- **ステップ1:** **プロジェクトセットアップ**
- **ステップ1-1:** CODESYS Development System V3ソフトウェアを開き、**"File>New Project..."** を選択してください

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project.png"/></div>

- **ステップ1-2:** **"New Project"** ウィンドウで、**"Categories"** ウィンドウの下で **"projects"** を選択し、**"Templates"** の下で **"Standard project"** を選択し、**プロジェクト名を入力** してから **"OK"** をクリックしてください。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_1.png"/></div>

- **ステップ1-3:** Standard Projectウィンドウで、デバイスに **"CODESYS Control for Raspberry Pi MC SL (CODESYS GmBH)"** を選択し、PLC_PRGで **"Ladder Logic Diagram (LD)"** を選択してから **"OK"** をクリックしてください。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_2.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_3.png"/></div>

Raspberry Pi用の新しいプロジェクトをセットアップした後、以下のような画面が表示されるはずです：

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/new_project_4.png"/></div>

- **ステップ2:** Edgebox-RPI-200の設定

- **ステップ2-1:** **"Tools>Update Raspberry Pi"** を選択してください

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi.png"/></div>

- **ステップ2-2:** Raspberry Piサイドパネルで以下の情報を入力し、**"Install"** ボタンをクリックして **"CODESYS Control for Raspberry Pi MC runtime"** をEdgebox-RPI-200にインストールしてください。

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_1.png"/></div>

- ログイン認証情報
  - Username: pi
  - Password: raspberry
- Select Target:
  - IP Address: 192.168.1.40
- CODESYS Runtime Package
  - Version: 4.6.0.0(raspberry, armhf)

- **ステップ2-3:** **"Configure Runtime"** ポップアップウィンドウで、お好みに応じて **"runtime mode"** を選択してください。この場合はデフォルトの **"Multicore"** を選択し、**"OK"** をクリックします

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_2.png"/></div>

- **ステップ2-4:** **"CODESYS Control for Raspberry Pi MC runtime"** が **"Edgebox-RPI-200"** で実行されていることを確認するため、**"Runtime"** セクションで **"Start"** をクリックし、**"Messages"** ウィンドウで **"Standard output: codesyscontrol already running"** と表示されることを確認してください

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_rpi_3.png"/></div>

- **ステップ3:** **GPIOデバイスの設定：**

- **ステップ3-1:** DevicesタブでGPIOを追加します。まず左側のサイドバーで **"Devices"** タブを選択し、次にDeviceを **"右クリック"** してドロップダウンリストから **"Add Device"** を選択してください

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device.png"/></div>

- **ステップ3-2:** **"Add Device"** ウィンドウで、Miscellaneousの **"+"** をクリックし、**"GPIO"** オプションを選択してから **"Add Device"** をクリックして確認してください。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_1.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_2.png"/></div>

これで、deviceタブに新しいGPIOデバイスがリストされているのが確認できるはずです。
<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_device_3.png"/></div>

- **ステップ3-3:** 1ビットGPIOデバイスを追加します。上記のステップで新しく追加された **"GPIO"** デバイスを右クリックし、ドロップダウンリストから **"Add Device..."** を選択してください。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_1.png"/></div>

- **ステップ 3-4:** **"Add Device"** ウィンドウで、**"GPIOS 1 bit"** オプションを選択し、**"Add Device"** をクリックして確認します。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_2.png"/></div>

- **ステップ 3-5:** GPIOを設定するには、上記のステップで新しく追加されたデバイス **"GPIOS_1_bit(GPIOs 1 bit)"** をダブルクリックして、メイン設定ウィンドウを開きます。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_3.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/add_gpio_4.png"/></div>

- **ステップ 3-6:** **"GPIOs_1_bit"** **メイン設定** ウィンドウで、最初のタブ **"GPIOSysfsModuleParameters"** を選択して、**GPIO Direction**、**Pin Number**、および **current PIN state** を設定・割り当てします。この場合、[データシート](#)によるとEdgebox-RPI-200のLED2をトグルします。これはGPIO Pin 21です。そのため、Pin設定は以下と同じにする必要があります。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_1.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_2.png"/></div>

- **ステップ 3-7:** GPIO I/Oをマッピングするには、2番目のタブ **"GPIOSysfsModule I/O Mapping"** を選択し、GPIOに変数名を割り当てます。この場合、**"GPIO 21 input"** に **"LED_in"**、**"GPIO 21 Output"** に **"LED_out"** と名前を付けます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/config_gpio_3.png"/></div>

:::note
デフォルトの **"GPIOs_A_B(GPIOs A/B)"** デバイスを削除してください。そうしないと、新しく追加されたGPIOデバイスと干渉します。
:::

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/delete_gpio_AB.png"/></div>

- **ステップ 4:** **オンライン設定モードでEdgebox-RPI-200に接続し、Edgebox-RPI-200のLED2をテスト・トグルする**

- **ステップ 4-1:** まず、**"Deivce (CODESYS Control for Raspberry Pi MC SL)"** をダブルクリックしてデバイスを設定する必要があります。これにより **デバイス設定** ウィンドウが開きます。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device.png"/></div>

- **ステップ 4-2:** **"デバイス設定"** ウィンドウの **"Communication"** 設定タブで、**"Device"** ドロップダウンリストをクリックし、**"Options>Manage Favorite Devices..."** を選択します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_1.png"/></div>

- **ステップ 4-3:** **"Manage Favorite Devices"** ウィンドウで、**"+ Add"** をクリックし、**"Add favorite"** ウィンドウで

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_2.png"/></div>

- **ステップ 4-4:** **"Enter name, device address or IP address"** ボックスに **Edgebox-RPI-200のIPアドレス** を入力してください。

> 私の場合、Edgebox-RPI-200のIPアドレスは **"192.168.1.40"** で、**"OK"** をクリックして確認します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_3.png"/></div>

- **ステップ 4-5:** **"Manage Favorite Devices"** ウィンドウで、Identifierフィールドに **新しく追加されたIPアドレスデバイス** を選択し、**"OK"** をクリックして確認します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_4.png"/></div>

- **ステップ 4-6:** **"デバイス設定"** ウィンドウの **"Communication"** 設定タブで、ドロップダウンリストを **"クリック"** し、新しく追加されたデバイス **"IP Address"** を選択してください。下に接続されたデバイスに関する情報が表示されるはずです。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_5.png"/></div>

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/connect_device_6.png"/></div>
  
- **ステップ 4-7:** **"ツールバー"** から **"Online Config Mode..."** ボタンをクリックします。**"Online Config Mode..."** のアイコンが緑から赤に変わるはずです。これは、CODESYS Development System V3 IDEがEdgebox-RPI-200に接続され、IDEから接続されたハードウェアデバイスと直接テスト・インターフェースできることを意味します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config.png"/></div>

- **ステップ 4-8:** デバイスサイドバーから **"GPIOs_1_bit(GPIOs 1 bit)"** をダブルクリックして、設定ウィンドウを開きます。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/online_config_1.png"/></div>

- **ステップ 4-9:** メイン設定ウィンドウで2番目のタブ **"GPIOSysfsModule I/O Mapping"** を選択します。**"Current Value"** がLED_inとLED_outの両方で **"False"** になっているはずです。**"LED_out"** の **"Current Value"** セクションで **"False"** をダブルクリックして **"True/False"** をトグルすることで、Edgebox-RPI-200のLED2をトグルできます。LED2はTrue/Falseの値に応じてオン/オフになるはずです。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_gpio_1.png"/></div>

Edgebox-RPI-200のLED2を確認してください。トグルされた値に応答するはずです：

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/toggle_led.jpg"/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
