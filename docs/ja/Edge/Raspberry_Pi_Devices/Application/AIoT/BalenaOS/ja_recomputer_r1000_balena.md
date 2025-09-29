---
description: balenaは、開発者がさまざまなデバイスアーキテクチャでIoTアプリケーションを簡単に構築、デプロイ、管理できる多用途なIoTプラットフォームです。コンテナ化されたデプロイメントを活用してシームレスな更新と堅牢なデバイス管理を実現します。Raspberry Pi CM4を搭載したreComputer R1000エッジIoTコントローラーは、要求の厳しいエッジコンピューティングタスクに対応する高性能機能を提供します。balenaとreComputer R1000を組み合わせることで、多様な環境での効率的で安全なIoTアプリケーションのデプロイメントと管理のための強力でスケーラブルなソリューションを提供します。
title: reComputer R1000 with balena
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_r1000_balena
last_update:
  date: 06/17/2024
  author: ShuishengPeng and Kasun Thushara
---

## balenaとは？

[balena](https://www.balena.io/)は、開発者がデバイスフリート全体でIoTアプリケーションを構築、デプロイ、管理するのを支援するために設計されたモノのインターネット（IoT）プラットフォームです。幅広いデバイスアーキテクチャをサポートし、コンテナ化されたアプリケーションデプロイメント機能を含んでいるため、IoTソフトウェアとHostOSを簡単に更新し、バグを修正し、IoTアプリケーションに新機能を導入することが可能です。balenaは、コードの更新をプッシュし、デバイス設定を管理し、場所やネットワーク条件に関係なく、フィールドでデバイスが確実かつ安全に動作することを保証する統一された方法を提供します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## はじめに

このプロジェクトを開始する前に、ここで説明されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェア

- [balenaCloud](https://balena.io) アカウント（こちらでサインアップ）、最初の10台のデバイスは無料です。
- CM4メモリをフラッシュするための [balenaEtcher](https://etcher.balena.io/)。

### ハードウェア設定

**ステップ1**: R1000の側面にあるスイッチをブートモードに設定し、デバイスの電源を入れる必要があります

<div class="table-center">

| スイッチ位置                                              | モード        | 説明    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード | eMMCから起動 | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード  | USBから起動  | High      |

</div>

**ステップ2**: USB Type-cケーブルを使用してreComputer R1000をコンピュータに接続してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### イメージファイルの取得

**ステップ1**: balenaCloudにアクセスし、無料アカウントを作成してからフリートを作成します。デフォルトのデバイスタイプは`Raspberry Pi CM4 IO Board`を選択してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/create_fleet.gif" alt="pir" width="700" height="auto" /></div>

**ステップ2**: 「Add device」をクリックし、必要なバージョン情報と設定情報を選択してから、右下角でbalenaOSイメージファイルをダウンロードします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dowload_img.gif" alt="pir" width="700" height="auto" /></div>

:::note
最初にbalenaOSイメージファイルをダウンロードしてから書き込むことをお勧めします。ウィンドウの右下角にある「Flash」を直接クリックして書き込む場合、書き込みに失敗する可能性があります。
:::

### balena OSの書き込み手順

**ステップ1**: [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)ソフトウェアを開くと、システムに新しいディスクが表示されます。

**ステップ2**: フラッシュツール[balenaEtcher](https://etcher.balena.io/)を開き、先ほどダウンロードしたbalenaイメージファイルを選択し、ターゲットディスクを選択してから、最後にBurnをクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

### 設定の変更

**ステップ1**: [reComputer-R100x.dtbo](https://files.seeedstudio.com/wiki/reComputer-R1000/balena/reComputer-R100x.dtbo)ファイルを`resin-boot => overlays`フォルダにコピーします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dtbo_file.png" alt="pir" width="700" height="auto" /></div>

**ステップ2**: `config.txt`ファイルに以下の内容を追加します：

```shell
dtparam=i2c_arm=on
dtoverlay=i2c1,pins_44_45
dtoverlay=i2c3,pins_2_3
dtoverlay=i2c6,pins_22_23
dtoverlay=audremap,pins_18_19
dtoverlay=reComputer-R100x,uart2
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/change_config.png" alt="pir" width="700" height="auto" /></div>

**ステップ3**：reComputer R1000のDIPスイッチを通常モードに設定し、再度電源を入れます。しばらくすると、balenaCloudで新しいデバイスが正常に追加されたことが確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/device_online.png" alt="pir" width="700" height="auto" /></div>

デバイスが`Online (Heartbeat only)`と表示される場合があります。これは私の地域のファイアウォール制限によるものです。同じ問題が発生した場合は、デバイスにVPNを接続することで、正常に`Online`と表示されるようになります。

### デプロイメントテスト

**ステップ1**：以下のコマンドを入力してリソースをダウンロードし、デプロイします：

```shell
balena login
git clone https://github.com/mpous/seeed-recomputer-r100x.git
cd seeed-recomputer-r100x
balena push recomputerR1000
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/push_program.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/updating_two.png" alt="pir" width="700" height="auto" /></div>

**ステップ 2**：デプロイメントが完了すると、ターミナルにユニコーンが表示され、すべてのサービスのステータスが `Running` に変わります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/unicorn.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Deployment_Complete.png" alt="pir" width="700" height="auto" /></div>

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
