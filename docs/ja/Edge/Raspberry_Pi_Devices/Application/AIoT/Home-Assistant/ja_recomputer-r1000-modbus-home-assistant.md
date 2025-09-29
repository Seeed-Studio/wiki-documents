---
description: reComputer R1000でModbus TCPとModbus RTUをHome Assistantと組み合わせて設定・構成する方法を学び、ビルディング管理システム（BMS）でのModbusデバイスのシームレスな統合と制御を実現する強力なRaspberry Piベースのソリューションについて説明します。
title: reComputer R1000とModbusによるHome Assistant 
keywords:
  - Home Assistant 
  - reComputer R1000
  - Home Automation
  - BMS
  - Modbus
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_home_assistant_modbus
last_update:
  date: 08/07/2024
  author: Kasun Thushara
---

## はじめに

現代のビルディング管理システム（BMS）において、様々なプロトコルとデバイスの統合は、効率的な監視と制御にとって重要です。このガイドでは、強力なRaspberry PiベースのソリューションであるreComputer R1000を使用して、Home Assistant OSでModbus通信プロトコル（Modbus TCPとModbus RTU）の機能を活用することに焦点を当てています。新しいシステムを設定する場合でも、既存のシステムを強化する場合でも、このガイドではModbusデバイスをHome Assistantに接続するプロセスを説明し、シームレスな統合と制御を確実に行います。

## はじめに

このプロジェクトを開始する前に、ここで説明されているようにハードウェアを事前に準備する必要があります。

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

### ソフトウェア準備

統合プロセスに入る前に、必要なドライバーとツールがすべてインストールされていることを確認することが重要です。適切な[ドライバーのインストール](https://wiki.seeedstudio.com/ja/reComputer_r1000_use_rs485_modbus_rtu/)は、Modbus RTUデバイスとHome Assistant間のシームレスな通信の前提条件です。このガイドを進める前に、必要なドライバーを十分に研究してインストールすることを強く推奨します。

また、まだHome Assistantをインストールしていない場合は、[Home Assistantインストールガイド](https://wiki.seeedstudio.com/ja/recomputer_r1000_home_automation/)に従って、reComputer R1000にセットアップしてください。

## File Editor アドオン

Home Assistantのほとんどは設定のユーザーインターフェースから直接設定できますが、一部はconfiguration.yamlなどのファイルを編集する必要があります。このファイルには、設定と共に読み込まれる統合が含まれています。この設定ファイルにコードスニペットを追加することで、Modbus統合を含む特定の機能を有効にできます。

開始するには、Home AssistantにFile Editorアドオンをインストールする必要があります：

- Home Assistantを開きます。
- `設定 > アドオン`に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/settings.PNG" style={{width:600}}/></div>

- `アドオンストア`をクリックします。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/add-ons.PNG" style={{width:600}}/></div>

- `File Editor`を検索してクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor.PNG" style={{width:600}}/></div>

- インストールボタンをクリックします。
- インストールが完了したら、開始をクリックしてFile Editorを起動します。
- オプションで、クイックアクセスのためにサイドバーに表示を有効にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor-start.PNG" style={{width:600}}/></div>

File Editorアドオンを使用して、`configuration.yaml`ファイルを編集してModbus統合を追加できるようになりました

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/config.PNG" style={{width:600}}/></div>

## Modbus TCP統合の有効化

Home AssistantでModbus統合を有効にするには、configuration.yamlファイルに特定のパラメータを追加する必要があります。以下は、設定する必要があるパラメータとその説明です：

- **name**: このハブの名前。一意である必要があります。
- **host**: ModbusデバイスのIPアドレスまたは名前、例：`192.168.1.1`。
- **port**: 通信用のネットワークポート。
- **type**: Modbus接続のタイプ。オプションはtcpまたはserialです。ここでは`tcp`を使用しました

Modbus統合のエンティティを設定するには、各エンティティに対してさまざまなパラメータを定義する必要があります。以下は、バイナリセンサーを設定するために必要なパラメータです：
複数のエンティティがあります。[公式modbusHome Assistantページ](https://www.home-assistant.io/integrations/modbus)で確認できます。

- **binary_sensors**: この接続に設定されたすべてのバイナリセンサーのリスト。
- **address**: コイル/レジスタのアドレス。
- **name**: エンティティの名前。エンティティタイプ内で一意である必要があります。
- **scan_interval**: 更新間隔（秒）。ポーリングなしの場合はscan_interval = 0を設定します。エンティティは起動直後に読み取られ、その後scan_intervalに従って読み取られます。
- **slave**: device_addressと同じ。
- **input_type**: リクエストのタイプ。オプションはcoil、holding、またはinputです。

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
configuration.yml ファイルを変更した後は、HAを保存して再起動する必要があります
:::

## Modbus RTU統合の有効化

Home AssistantでModbus RTU統合を有効にするには、configuration.yamlファイルに以下のパラメータを追加する必要があります：

- **name**: このハブの名前。一意である必要があります。
- **type**: Modbus接続のタイプ。ここではserialにする必要があります。
- **port**: ModbusデバイスがHome Assistantホストに接続されているシリアルポートまたはUSBデバイス。`/dev/ttyAMA30`であることがわかりました
- **baudrate**: シリアル接続の速度。
- **method**: Modbusへの接続方法。オプションはrtuとasciiです。
- **parity**: データバイトのパリティ。オプションはE（偶数）、O（奇数）、N（なし）です。
- **bytesize**: 各バイトのデータサイズ（ビット単位）。通常は8です。
- **stopbits**: データバイトのストップビット。

Modbus RTU統合のエンティティを設定するには、各センサーに対してさまざまなパラメータを定義する必要があります。センサーの設定に必要なパラメータは以下の通りです：

- **sensors**: Modbusセンサーを使用すると、Modbusレジスタからデータを収集できます。
- **name**: エンティティの名前。エンティティタイプ内で一意である必要があります。
- **address**: レジスタのアドレス。
- **slave**: device_addressと同じ。
- **input_type**: センサーのModbusレジスタタイプ。オプションはholdingまたはinputです。
- **scale**: スケールファクター。
- **device_class**: フロントエンドでアイコンを設定するためのセンサーのタイプ/クラス。
- **unit_of_measurement**: 値に付加する単位。

例：

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
configuration.ymlファイルを変更した後は、HAを保存して再起動する必要があります
:::

最終的に動作現象を確認できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/demo.gif" style={{width:600}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
