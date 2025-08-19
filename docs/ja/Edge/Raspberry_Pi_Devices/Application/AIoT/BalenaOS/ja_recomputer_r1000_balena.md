---
description: balenaは、多様なデバイスアーキテクチャにわたるIoTアプリケーションの構築、デプロイ、および管理を容易にする多用途なIoTプラットフォームです。コンテナ化されたデプロイメントを活用してシームレスな更新と堅牢なデバイス管理を実現します。Raspberry Pi CM4を搭載したreComputer R1000エッジIoTコントローラーは、要求の厳しいエッジコンピューティングタスクに対応する高性能を提供します。balenaとreComputer R1000を組み合わせることで、多様な環境で効率的かつ安全なIoTアプリケーションのデプロイと管理を可能にする強力でスケーラブルなソリューションを提供します。

title: balenaを使用したreComputer R1000
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_r1000_balena
last_update:
  date: 05/15/2025
  author: ShuishengPeng and Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## balenaとは？

[balena](https://www.balena.io/)は、開発者がデバイス群全体にわたるIoTアプリケーションを構築、デプロイ、および管理するのを支援するために設計されたIoTプラットフォームです。幅広いデバイスアーキテクチャをサポートし、コンテナ化されたアプリケーションデプロイメントの機能を備えているため、IoTソフトウェアやHostOSを簡単に更新し、バグを修正し、新機能を導入することが可能です。balenaは、コード更新のプッシュ、デバイス設定の管理、デバイスがその場所やネットワーク条件に関係なく信頼性と安全性を保つことを統一的にサポートします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## はじめに

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェア

* [balenaCloud](https://balena.io)アカウント（こちらでサインアップ）を作成し、最初の10台のデバイスを無料で利用可能。
* CM4メモリをフラッシュするための[balenaEtcher](https://etcher.balena.io/)。

### ハードウェアの設定

**ステップ1**: R1000の側面にあるスイッチをブートモードに設定し、デバイスの電源を入れます。

<div class="table-center">

| スイッチ位置                                                | モード       | 説明            | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード   | eMMCから起動   | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード | USBから起動    | High      |

</div>

**ステップ2**: USB Type-Cケーブルを使用してreComputer R1000をコンピュータに接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### イメージファイルの取得

**ステップ1**: balenaCloudにアクセスし、無料アカウントを作成してフリートを作成します。デフォルトのデバイスタイプとして`Raspberry Pi CM4 IO Board`を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/create_fleet.gif" alt="pir" width="700" height="auto" /></div>

**ステップ2**: 「Add device」をクリックし、希望するバージョン情報と設定情報を選択した後、右下の「balenaOSイメージファイルをダウンロード」をクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dowload_img.gif" alt="pir" width="700" height="auto" /></div>

:::note
balenaOSイメージファイルを先にダウンロードしてから書き込むことをお勧めします。ウィンドウ右下の「Flash」を直接クリックして書き込むと、失敗する可能性があります。
:::

### balena OSのフラッシュ手順

**ステップ1**: [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)ソフトウェアを開き、システムが新しいディスクを表示するのを確認します。

**ステップ2**: フラッシュツール[balenaEtcher](https://etcher.balena.io/)を開き、先ほどダウンロードしたbalenaイメージファイルを選択し、ターゲットディスクを選択して最後に「Burn」をクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

### 設定の変更

**ステップ1**: [reComputer-R100x.dtbo](https://files.seeedstudio.com/wiki/reComputer-R1000/balena/reComputer-R100x.dtbo)ファイルを`resin-boot => overlays`フォルダにコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dtbo_file.png" alt="pir" width="700" height="auto" /></div>

**ステップ2**: 以下の内容を`config.txt`ファイルに追加します：
```shell
dtparam=i2c_arm=on
dtoverlay=i2c1,pins_44_45
dtoverlay=i2c3,pins_2_3
dtoverlay=i2c6,pins_22_23
dtoverlay=audremap,pins_18_19
dtoverlay=reComputer-R100x,uart2
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/change_config.png" alt="pir" width="700" height="auto" /></div>

**ステップ3**: reComputer R1000のDIPスイッチを通常モードに設定し、再度電源を入れます。しばらくすると、balenaCloud上で新しいデバイスが正常に追加されたことが確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/device_online.png" alt="pir" width="700" height="auto" /></div>

デバイスが `Online (Heartbeat only)` と表示される場合、これは地域のファイアウォール制限によるものです。同じ問題が発生した場合は、デバイスにVPNを接続することで、正常に `Online` と表示されるようになります。

### デプロイメントテスト
**ステップ 1**: 以下のコマンドを入力してリソースをダウンロードし、デプロイします:
```shell
balena login
git clone https://github.com/mpous/seeed-recomputer-r100x.git
cd seeed-recomputer-r100x
balena push recomputerR1000
```
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/push_program.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/updating_two.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**: デプロイメントが完了すると、ターミナルにユニコーンが表示され、すべてのサービスのステータスが `Running` に変わります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/unicorn.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Deployment_Complete.png" alt="pir" width="700" height="auto" /></div>

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>