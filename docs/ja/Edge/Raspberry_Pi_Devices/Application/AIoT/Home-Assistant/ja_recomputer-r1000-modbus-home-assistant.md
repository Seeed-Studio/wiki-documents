---
description: Modbus TCP および Modbus RTU を Home Assistant と reComputer R1000 で設定および構成する方法を学びます。これは、建物管理システム (BMS) における Modbus デバイスのシームレスな統合と制御を可能にする、Raspberry Pi を搭載した強力なソリューションです。
title: reComputer R1000 と Home Assistant における Modbus
keywords:
  - Home Assistant 
  - reComputer R1000
  - ホームオートメーション
  - BMS
  - Modbus
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_home_assistant_modbus
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

現代の建物管理システム (BMS) では、効率的な監視と制御のためにさまざまなプロトコルやデバイスを統合することが重要です。このガイドでは、Raspberry Pi を搭載した強力なソリューションである reComputer R1000 を使用して、Home Assistant OS と Modbus 通信プロトコル (Modbus TCP および Modbus RTU) の機能を活用する方法に焦点を当てます。新しいシステムを設定する場合でも、既存のシステムを強化する場合でも、このガイドは Modbus デバイスを Home Assistant に接続し、シームレスな統合と制御を実現するプロセスを案内します。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているようにハードウェアを事前に準備する必要があります。

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

### ソフトウェアの準備

統合プロセスに進む前に、必要なすべてのドライバーとツールがインストールされていることを確認することが重要です。Modbus RTU デバイスと Home Assistant 間のシームレスな通信を実現するには、[ドライバーのインストール](https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/) が必須です。このガイドを進める前に、必要なドライバーを徹底的に調査し、インストールすることを強くお勧めします。

さらに、まだ Home Assistant をインストールしていない場合は、reComputer R1000 に Home Assistant をセットアップするための [Home Assistant インストールガイド](https://wiki.seeedstudio.com/ja/recomputer_r1000_home_automation/) に従ってください。

## File Editor アドオン

Home Assistant のほとんどの設定は、設定メニュー内のユーザーインターフェースから直接構成できますが、一部の部分では `configuration.yaml` ファイルの編集が必要です。このファイルには、読み込む統合とその構成が含まれています。この構成ファイルにコードスニペットを追加することで、Modbus 統合を含む特定の機能を有効にすることができます。

まず、Home Assistant に File Editor アドオンをインストールする必要があります：

- Home Assistant を開きます。
- `設定 > アドオン` に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/settings.PNG" style={{width:600}}/></div>

- `アドオンストア` をクリックします。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/add-ons.PNG" style={{width:600}}/></div>

- `File Editor` を検索し、それをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor.PNG" style={{width:600}}/></div>

- インストールボタンをクリックします。
- インストールが完了したら、`開始` をクリックして File Editor を起動します。
- オプションで、サイドバーに表示を有効にして、すばやくアクセスできるようにします。
 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor-start.PNG" style={{width:600}}/></div>

File Editor アドオンを使用すると、`configuration.yaml` ファイルを編集して Modbus 統合を追加できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/config.PNG" style={{width:600}}/></div>

## Modbus TCP 統合の有効化

Home Assistant で Modbus 統合を有効にするには、`configuration.yaml` ファイルに特定のパラメータを追加する必要があります。以下に、設定が必要なパラメータとその説明を示します：

- **name**: このハブの名前。ユニークである必要があります。
- **host**: Modbus デバイスの IP アドレスまたは名前。例：`192.168.1.1`
- **port**: 通信に使用するネットワークポート。
- **type**: Modbus 接続の種類。選択肢は `tcp` または `serial` です。ここでは `tcp` を使用します。

Modbus 統合のエンティティを設定するには、各エンティティに対してさまざまなパラメータを定義する必要があります。以下は、バイナリセンサーを設定するために必要なパラメータです：
複数のエンティティがあります。詳細は [公式 Modbus Home Assistant ページ](https://www.home-assistant.io/integrations/modbus) を参照してください。

- **binary_sensors**: この接続に設定されたすべてのバイナリセンサーのリスト。
- **address**: コイルまたはレジスタのアドレス。
- **name**: エンティティの名前。同じエンティティタイプ内でユニークである必要があります。
- **scan_interval**: 更新間隔（秒単位）。`scan_interval = 0` に設定するとポーリングは行われません。エンティティは起動直後に読み取られ、その後は `scan_interval` に従って読み取られます。
- **slave**: `device_address` と同一。
- **input_type**: リクエストの種類。選択肢は `coil`、`holding`、または `input` です。

**例**：

```bash
modbus:
  - name: modbus_hub
    type: tcp
    host: IP_ADDRESS_of_PLC
    port: 502
    binary_sensors:
      - name: Relay_1
        address: 8193
        slave: 1
        input_type: coil
        scan_interval: 1
      - name: Relay_2
        address: 8194
        slave: 1
        input_type: coil
        scan_interval: 1
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/modbus-settings.PNG" style={{width:600}}/></div>

:::note
`configuration.yaml` ファイルを変更した後は、必ず保存して Home Assistant を再起動してください。
:::

## Modbus RTU 統合の有効化

Home Assistant で Modbus RTU 統合を有効にするには、以下のパラメータを `configuration.yaml` ファイルに追加する必要があります：

- **name**: このハブの名前。ユニークである必要があります。
- **type**: Modbus 接続の種類。ここでは `serial` を指定します。
- **port**: Modbus デバイスが接続されているシリアルポートまたは USB デバイス。`/dev/ttyAMA30` が使用されることが確認されています。
- **baudrate**: シリアル接続の速度。
- **method**: Modbus への接続方法。選択肢は `rtu` または `ascii` です。
- **parity**: データバイトのパリティ。選択肢は `E`（偶数）、`O`（奇数）、`N`（なし）。
- **bytesize**: 各バイトのデータサイズ（ビット単位）。通常は 8。
- **stopbits**: データバイトのストップビット。

Modbus RTU 統合のエンティティを設定するには、各センサーに対してさまざまなパラメータを定義する必要があります。以下は、センサーを設定するために必要なパラメータです：

- **sensors**: Modbus センサーを使用して Modbus レジスタからデータを収集します。
- **name**: エンティティの名前。同じエンティティタイプ内でユニークである必要があります。
- **address**: レジスタのアドレス。
- **slave**: `device_address` と同一。
- **input_type**: センサーの Modbus レジスタタイプ。選択肢は `holding` または `input`。
- **scale**: スケールファクター。
- **device_class**: フロントエンドでアイコンを設定するためのセンサーのタイプ/クラス。
- **unit_of_measurement**: 値に付加する単位。

**例**：

```bash
modbus:
  - name: modbus_hub2
    type: serial
    port: /dev/ttyAMA30
    baudrate: 9600
    bytesize: 8
    method: rtu
    parity: N
    stopbits: 1
    sensors:
      - name: Room Temperature
        address: 1
        input_type: input
        slave: 1
        scale: 0.01
        device_class: temperature
        unit_of_measurement: °C
      - name: Room Humidity
        address: 2
        input_type: input
        slave: 1
        scale: 0.01
        unit_of_measurement: '%'
        device_class: humidity
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/modbus-rtu-setting.PNG" style={{width:600}}/></div>

:::note
`configuration.yaml` ファイルを変更した後は、必ず保存して Home Assistant を再起動してください。
:::

最後に、動作する現象を確認できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/demo.gif" style={{width:600}}/></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>