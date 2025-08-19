---
description: この記事では、reComputer R1000上でBACnet MS/TPプロトコルの機能テストを実施する方法を主に紹介します。
title: reComputer R1000でBACnet MS/TPを使用する
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/wirshark_capture.webp
slug: /ja/reComputer_r1000_use_bacnet_mstp
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer R1000でBACnet MS/TPを使用する

## はじめに
BACnet MS/TP (Master-Slave/Token Passing) は、建物の自動化および制御ネットワーク向けの通信プロトコルです。これはBACnet (Building Automation and Control Networks) プロトコルスイートの一部です。MS/TPは通常、RS-485物理層とバストポロジーを使用します。すべてのデバイスは同じツイストペアケーブルに接続されます。MS/TPネットワークにはマスターステーションとスレーブステーションがあります。マスターはトークンを生成して配布する役割を担い、スレーブはリクエストを受け取った場合のみ応答します。マスターデバイスはトークンを渡すことで、どのデバイスがデータを送信できるかを決定します。トークンパッシングメカニズムにより、バス上の通信が秩序立っており、競合が発生しないことが保証されます。

この記事では、reComputer R1000上でBACnet MS/TPプロトコルの機能テストを実施する方法を主に紹介します。reComputer R1000上でBACnet MS/TPサーバーをシミュレートし、その後W10 PC上でYABEを使用してデバイスが存在するかどうかを確認しました。シミュレートしたデバイスが正常に見つかれば、BACnet MS/TP通信が正常であることを意味します。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているようにハードウェアとソフトウェアを事前に準備する必要があります。

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
* BACnet MS/TPはRS485物理層を使用するため、reComputer R1000 V1.0でRS485機能を正常に使用する方法については、この[Wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/)を参照してください。
* `bacnet-stack`ライブラリアプリケーションを使用してサーバーをシミュレートするため、以下のコマンドを入力してダウンロードしてください：
  ```shell
  git clone https://github.com/bacnet-stack/bacnet-stack.git
  cd bacnet-stack
  ```
* この[リンク](https://sourceforge.net/projects/yetanotherbacnetexplorer/)にアクセスしてYABE (Yet Another BACnet Explorer) をダウンロードしてください。
* この[リンク](https://www.wireshark.org/)にアクセスしてWiresharkをダウンロードしてください。

### ハードウェア構成

このテストでは、RS485からUSBへのモジュールを使用してreComputer R1000とW10 PCを接続します。
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

## BACnet MS/TP通信機能をテストする手順
**ステップ1**: `bacnet-stack`をダウンロードします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif" /></center>

**ステップ2**: `bacnet-stack`のデフォルトのシリアルポート番号は`/dev/ttyUSB0`です。実際に使用するポート番号がこれでない場合、通信ができないため、ポート番号を変更する必要があります。変更が必要なファイル名は`ports/linux/rs485.c`です。これを使用する必要があるポート番号に変更します。私はこれを`/dev/ttyAMA30`に変更しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif" /></center>

**ステップ3**: 以下の指示を入力してコンパイルします。コンパイル結果はbinディレクトリで確認できます。
```shell
make clean
make mstp
# wait
cd bin/
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif" /></center>

**ステップ4**: `bacserv`を実行し、`YABE`を使用してシミュレートされたデバイスを検索します。シミュレートしたデバイスが正常に検索されたことが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif" /></center>

**ステップ5**: Wiresharkを使用してBACnet MS/TPメッセージを確認します。シミュレートしたデバイスがトークンを渡していることが確認できます。私のバスには他のデバイスがないため、トークンを渡し続けています。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif" /></center>

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！弊社では、製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>