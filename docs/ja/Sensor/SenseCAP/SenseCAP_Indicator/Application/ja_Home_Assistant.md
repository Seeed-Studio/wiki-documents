---
description: SenseCAP Indicator - Home Assistant アプリケーション開発
title: Home Assistant - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- Home Assistant
- ESP32S3
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-ha-thumbnail.jpg
slug: /ja/SenseCAP_Indicator_Application_Home_Assistant
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator - Home Assistant アプリケーション開発

## はじめに

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">今すぐ購入 🖱️</a>
</div>

SenseCAP Indicator を Home Assistant と統合することで、スマートホームの可能性を最大限に引き出しましょう。この強力な組み合わせにより、環境をこれまでにないほど簡単に監視および制御することができます。

この包括的なガイドでは、MQTT を使用して SenseCAP Indicator を Home Assistant にシームレスに統合する方法を学びます。

始める前に、Home Assistant のセットアップオプションを確認しましょう。Home Assistant は、以下の 2 つの専用ハードウェアオプションに簡単にインストールできます。

:::note
もちろん、[Installation - Home Assistant (home-assistant.io)](https://www.home-assistant.io/installation/) に従って、さまざまな方法で Home Assistant をインストールすることができます。
:::

<Tabs>
<TabItem value='Home Assistant Green'>

<div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA/HA_Green.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> 手頃な価格の **[Home Assistant Green](https://www.home-assistant.io/green)** は、Home Assistant を使い始める最も簡単な方法です。プラグアンドプレイで、Home Assistant がすでにインストールされています。

</TabItem>

<TabItem value='Home Assistant Yellow'>

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png"style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> **[Home Assistant Yellow](https://www.home-assistant.io/yellow)** は、Raspberry Pi Compute Module 4 (CM4) とカスタムヒートシンクを備えたファンレスで静音動作するカスタムエンクロージャに組み立て済みで提供されます。CM4 はワイヤレス機能なしのバージョンで、2 GB RAM と 16 GB eMMC ストレージを搭載しています。Home Assistant がプリインストールされています。

</TabItem>
</Tabs>

Home Assistant の機能を最大限に活用するには、Home Assistant OS または Home Assistant Supervised のいずれかを使用することをお勧めします。これらのオプションは高度な機能とカスタマイズオプションを提供し、スマートホーム体験を正確なニーズに合わせて調整することができます。

それでは、統合プロセスを始めましょう。以下の 3 つの主要なステップに従って、SenseCAP Indicator を Home Assistant で動作させましょう：

1. [Home Assistant OS をインストール](#install_HA)
   1. [アドオンをインストール](#mqtt-addons)
   2. [MQTT 統合を設定](#mqtt-integration)
2. [ファームウェアをビルドしてフラッシュ](#build-flash-firmware)
3. [MQTT デバイスを追加](#add-mqtt-devices)
4. [ダッシュボード を設定](#set-up-dashboard)

## 前提条件

開始する前に、SenseCAP インジケーターボードの [ユーザーガイド](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) を読んで、ソフトウェアおよびハードウェア情報に慣れておいてください。

## Home Assistant OS のインストール {#install_HA}

> Home Assistant は、プライバシーとローカル制御に重点を置いた強力なオープンソースのホームオートメーションプラットフォームです。すべての家庭用デバイスを単一の統一されたプラットフォームから管理および自動化するためのカスタマイズ可能で柔軟なフレームワークを提供します。

**Home Assistant Yellow** を使用する場合は、[こちら](https://www.home-assistant.io/installation/yellow) に記載されている手順に従ってください。また、Raspberry Pi の任意のタイプやローカルサーバーで実行する場合は、この [手順](https://www.home-assistant.io/installation/) に従って進めてください。

インストールが完了したら、このページに進むことができるので、次のステップに進みます。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

<br />

:::tip Home Assistant のオンボーディング方法がわからない場合
Home Assistant をインストールした後、[Onboarding Home Assistant - Home Assistant](https://www.home-assistant.io/getting-started/onboarding/) を確認してください。
:::

### ステップ 1: アドオンのインストール {#mqtt-addons}

:::caution アドオン機能が必要
Home Assistant Yellow は **Home Assistant Operating System** を搭載しており、アドオンを簡単にインストールできます。ただし、**Home Assistant Container** はアドオンをサポートしていないため、Home Assistant とは別に MQTT ブローカーアプリケーションをインストールする必要があります。詳細は [インストール方法](https://www.home-assistant.io/installation/#compare-installation-methods) を確認してください。
:::

次のステップでは、**Mosquitto Broker** と **File Editor** をインストールします。**Mosquitto** は MQTT プロトコルを実装するオープンソースのメッセージブローカーであり、**File Editor** はターミナルにアクセスせずに `configuration.yaml` ファイルを編集できるようにします。

Home Assistant Yellow では、アドオン機能を使用して Mosquitto Broker と File Editor をインストールできます。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
便利のために、サイドバーに「File Editor」を表示させます：

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

:::

これで 2 つのアドオンがインストールされました。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### ステップ 2: MQTT 統合の設定 {#mqtt-integration}

MQTT (Message Queuing Telemetry Transport) は軽量なメッセージングプロトコルであり、SenseCAP インジケーターボードを Home Assistant に接続するために重要です。この機能を有効にするには、Home Assistant セットアップに [MQTT 統合](https://www.home-assistant.io/integrations/mqtt) を追加する必要があります。

> MQTT 統合を追加することで、Home Assistant は SenseCAP インジケーターボードとシームレスに通信できるようになり、リアルタイムのデータ交換と制御が可能になります。この双方向通信は、センサーデータの監視やデバイスへのコマンド送信に不可欠です。

MQTT 統合を設定するには：

1. Home Assistant ダッシュボードの「統合」ページ（`Devices & Services` -> `Integrations`）に移動します。
2. 「MQTT」を検索してリストから選択します。（自動的に検出されない場合）
3. 画面の指示に従って設定を完了します。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
公式以外の MQTT ブローカー（例えば EMQX Broker）を使用している場合、標準の Mosquitto ブローカーとは異なり、自動検出が機能しない場合があります。この場合、ブローカーの IP アドレスを手動で入力して接続を確立する必要があります。これにより、Home Assistant がカスタム MQTT 設定と通信できるようになります。
:::

### MQTT アドオンのユーザー追加

Home Assistant の公式 Mosquitto Broker アドオンを使用する場合、MQTT 接続のための認証情報を設定する必要があります。このステップは、デバイスと Home Assistant 間の安全な通信を確保するためのものです。以下の手順でユーザーを追加します：

1. Home Assistant インターフェースで Mosquitto Broker アドオンに移動します。
2. アドオン設定内の「ユーザー」セクションまたはタブを探します。
3. 「ユーザーを追加」または「+」ボタンをクリックして新しいユーザーを作成します。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}} alt="Add User Button"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}} alt="Create User Form"/></div></td>
    </tr>
  </table>
</div>

[^ref]: [MQTT デフォルト認証情報 - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/ba2fe1c04d486f802e12b763ffb6efbc71bb5d80/examples/indicator_ha/main/ha_config.h#L10C1-L14C70)

4. ユーザー作成フォームで:
   - 任意のユーザー名を入力します。デフォルトは `indicator-usr`[^ref] です。
   - 強力なパスワードを作成します。デフォルトは `indicator-password` です。
   - 必要に応じて、特定の権限を設定することもできます。
5. 新しいユーザー認証情報を保存します。

:::tip
これらの認証情報を使用して、SenseCAP Indicator または他の MQTT デバイスを Home Assistant に接続する際に設定してください。
:::

ユーザーを追加した後、変更を有効にするために Mosquitto ブローカーアドオンを再起動する必要がある場合があります。これで、これらの認証情報を使用して安全な MQTT 接続を確立できるようになります。

SenseCAP Indicator の MQTT 設定を新しいユーザー名とパスワードで更新し、Home Assistant と通信できるようにすることを忘れないでください。

## SenseCAP Indicator ESP32 プロジェクトのセットアップ {#build-flash-firmware}

Home Assistant と SenseCAP Indicator を統合する前に、適切なファームウェアでデバイスをセットアップする必要があります。以下の手順に従って、プロジェクトをダウンロード、ビルド、フラッシュして SenseCAP Indicator にインストールしてください。

### ステップ 1: プロジェクトをダウンロードする

SenseCAP Indicator を Home Assistant と統合するためのプロジェクトが 2 つあります。ニーズに最も適したものを選択してください。

<Tabs groupId="project-ha">
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha" default>

このプロジェクトは、Home Assistant との統合専用に設計されています。

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Love4yzp/sensecap-indicator-ha" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>ファームウェアを取得する</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg></a>
</div>

または Git を使用してリポジトリをクローンします:

```bash
git clone https://github.com/Love4yzp/sensecap-indicator-ha
```

</TabItem> 
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

このプロジェクトには、SenseCAP Indicator 用のより多くの例と機能が含まれています。

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>ファームウェアを取得する</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg></a>
</div>

または Git を使用してリポジトリをクローンします:

```bash
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
```

</TabItem> 
</Tabs>

### ステップ 2: プロジェクトディレクトリに移動する

プロジェクトをダウンロードまたはクローンしたら、適切なディレクトリに移動します:

<Tabs groupId="project-ha"> 
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha">

```bash
cd sensecap-indicator-ha
```

</TabItem> 
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

```bash
cd SenseCAP_Indicator_ESP32/examples/indicator_ha
```

</TabItem> 
</Tabs>

### ステップ 3: プロジェクトをビルド、フラッシュ、モニターする

次に、ファームウェアをビルドし、SenseCAP Indicator にフラッシュし、デバイスの出力をモニターします。以下のコマンドを使用してください:

```bash
idf.py -p PORT build flash monitor
```

`PORT` をデバイスに適したポートに置き換えてください（例: Windows の場合は `COM3`、Linux の場合は `/dev/ttyUSB0`）。

:::tip 
デバイスのポートが不明な場合:

- Windows: デバイスマネージャーで「ポート (COM & LPT)」を確認
- Linux/macOS: ターミナルで `ls /dev/tty*` を実行
:::

このコマンドは以下を実行します:

1. プロジェクトをビルド
2. ファームウェアを SenseCAP Indicator にフラッシュ
3. シリアルモニターを開き、デバイスの出力を表示

シリアルモニターを終了するには、`Ctrl-]` を押してください。

### ステップ 4: セットアップを確認する

ファームウェアをフラッシュした後、シリアルモニターに SenseCAP Indicator からの出力が表示されます。Wi-Fi ネットワークおよび MQTT ブローカーへの接続が成功したことを示すメッセージを確認してください。

:::caution 
SenseCAP Indicator が Home Assistant インスタンスと同じネットワークに接続されていること、MQTT ブローカーが適切に設定されてアクセス可能であることを確認してください。
:::

SenseCAP Indicator にファームウェアを正常にフラッシュして確認できたら、次は MQTT 統合を使用して Home Assistant に統合する準備が整いました。

次に、Home Assistant を設定して SenseCAP Indicator を認識し、通信できるようにします。

## MQTTデバイスの追加 {#add-mqtt-devices}

Home AssistantでMQTT統合を設定した後、次のステップはMQTTデバイスを追加することです。このプロセスでは、Home AssistantがSenseCAPインジケーターボードをMQTTを通じて認識し、通信できるように設定します。

### ステップ1: インジケーターエンティティの追加

SenseCAPインジケーターエンティティをHome Assistantに追加するには、`configuration.yaml`ファイルを編集する必要があります。このファイルは、Home Assistantがデバイスとどのようにやり取りするかを定義するために重要です。

:::tip
Home Assistant Yellowや**File editor**アドオンを備えたシステムを使用している場合、Webインターフェースを通じて`configuration.yaml`ファイルを簡単に編集できます。他のセットアップ（例: Home Assistant Container）の場合、ターミナルアクセスを介してファイルを編集する必要があるかもしれません。
:::

`configuration.yaml`ファイルを編集する手順：

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

1. Home AssistantダッシュボードでFile editorアドオンに移動します。
2. ファイルリストから`configuration.yaml`ファイルを選択します。
3. 以下のMQTT設定をファイルに追加します：

<details>
<summary>クリックして展開し、SenseCAPインジケーター用のMQTT設定をコピー</summary>


```yaml
# Example configuration.yaml entry | SenseCAP Indicator MQTT Configuration
mqtt:
  sensor:
    - unique_id: indicator_temperature
      name: "Indicator Temperature"
      state_topic: "indicator/sensor"
      suggested_display_precision: 1
      unit_of_measurement: "°C"
      value_template: "{{ value_json.temp }}"
    - unique_id: indicator_humidity
      name: "Indicator Humidity"
      state_topic: "indicator/sensor"
      unit_of_measurement: "%"
      value_template: "{{ value_json.humidity }}"
    - unique_id: indicator_co2
      name: "Indicator CO2"
      state_topic: "indicator/sensor"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.co2 }}"
    - unique_id: indicator_tvoc
      name: "Indicator tVOC"
      state_topic: "indicator/sensor"
      unit_of_measurement: ""
      value_template: "{{ value_json.tvoc }}"
  switch:
    - unique_id: indicator_switch1
      name: "Indicator Switch1"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch1 }}"
      payload_on: '{"switch1":1}'
      payload_off: '{"switch1":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch2
      name: "Indicator Switch2"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch2 }}"
      payload_on: '{"switch2":1}'
      payload_off: '{"switch2":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch3
      name: "Indicator Switch3"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch3 }}"
      payload_on: '{"switch3":1}'
      payload_off: '{"switch3":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch4
      name: "Indicator Switch4"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch4 }}"
      payload_on: '{"switch4":1}'
      payload_off: '{"switch4":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch6
      name: "Indicator Switch6"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch6 }}"
      payload_on: '{"switch6":1}'
      payload_off: '{"switch6":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch7
      name: "Indicator Switch7"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch7 }}"
      payload_on: '{"switch7":1}'
      payload_off: '{"switch7":0}'
      state_on: 1
      state_off: 0
  number:
    - unique_id: indicator_switch5
      name: "Indicator Switch5"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch5": {{ value }} }'
      value_template: "{{ value_json.switch5 }}"
    - unique_id: indicator_switch8
      name: "Indicator Switch8"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch8": {{ value }} }'
      value_template: "{{ value_json.switch8 }}"
```

</details>

1. `configuration.yaml`ファイルへの変更を保存します。

:::caution
Home Assistantのセットアップがアドオンをサポートしていない場合（例: Home Assistant Container）、ターミナルまたはSSH接続を介して`configuration.yaml`ファイルを編集する必要があります。
:::

### ステップ2: 設定変更の適用

`configuration.yaml`ファイルを編集した後、変更を適用する必要があります：

1. Home Assistantダッシュボードで`Developer Tools`に移動します。
2. 「YAML」タブを見つけてクリックします。
3. `ALL YAML CONFIGURATION`をリロードします。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png" alt="YAML Configuration in Developer Tools"/></div>

:::note
何か問題が発生した場合は、以下を試してください：
- 「Check Configuration」ボタンをクリックして変更を確認します。
- 設定チェックが成功した場合、「Restart」ボタンをクリックして新しい設定を適用します。
:::


Home Assistantを再起動すると、SenseCAP Indicatorのエンティティが認識され、ダッシュボードに表示されるはずです。エンティティがすぐに表示されない場合は、MQTTのディスカバリプロセスが完了するまで数分待つ必要があるかもしれません。

SenseCAP Indicatorが正しく設定され、構成で定義された正しいMQTTトピックにデータを公開していることを確認してください。
:::

これらの手順を実行することで、SenseCAP IndicatorデバイスをMQTTを介してHome Assistantに追加することに成功しました。これで、これらのエンティティを自動化、スクリプト、ダッシュボードで使用し、より統合されたスマートホーム体験を楽しむことができます。

## ダッシュボードの設定 {#set-up-dashboard}

Home AssistantでSenseCAP Indicatorを統合する最終ステップは、カスタムダッシュボードを設定することです。これにより、デバイスのデータや機能を簡単に視覚化および制御することができます。

### 新しいダッシュボードの作成（オプション）

SenseCAP Indicator専用のダッシュボードを作成したい場合は、以下の手順を実行してください：

1. Home Assistantのサイドバーで`設定 -> ダッシュボード`に移動します。
2. 「ダッシュボードを追加」ボタンをクリックします。
3. タイトル（例：「SenseCAP Indicator」）を設定し、アイコンを選択します。
4. 「作成」をクリックして新しいダッシュボードを完成させます。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}} alt="ダッシュボードを作成"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}} alt="新しいダッシュボード"/></div></td>
    </tr>
  </table>
</div>

### ダッシュボードの設定

SenseCAP Indicatorのエンティティをダッシュボードに追加するには：

1. 編集したいダッシュボードを開きます。
2. 右上の三点メニューをクリックし、「ダッシュボードを編集」を選択します。
3. 「制御を取得」ボタンをクリックして手動設定を有効にします。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}} alt="ダッシュボードを編集"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}} alt="制御を取得"/></div></td>
    </tr>
  </table>
</div>

4. ダッシュボードエディタで再度三点メニューをクリックし、「生の構成エディタ」を選択します。
5. 以下の構成で既存のYAMLコンテンツを置き換えます：

<details>

<summary>UIを変更するためのダッシュボード YAMLをコピー</summary>

> 注意：これは`Configuration.YAML`用ではありません。

```yaml
views:
  - title: Indicator device
    icon: ''
    badges: []
    cards:
      - graph: line
        type: sensor
        detail: 1
        icon: mdi:molecule-co2
        unit: ppm
        entity: sensor.indicator_co2
      - graph: line
        type: sensor
        entity: sensor.indicator_temperature
        detail: 1
        icon: mdi:coolant-temperature
      - graph: line
        type: sensor
        detail: 1
        entity: sensor.indicator_humidity
      - graph: line
        type: sensor
        entity: sensor.indicator_tvoc
        detail: 1
        icon: mdi:air-filter
      - type: entities
        entities:
          - entity: switch.indicator_switch1
          - entity: switch.indicator_switch2
          - entity: switch.indicator_switch3
          - entity: switch.indicator_switch4
          - entity: number.indicator_switch5
          - entity: switch.indicator_switch6
          - entity: switch.indicator_switch7
          - entity: number.indicator_switch8
        title: Indicator control
        show_header_toggle: false
        state_color: true
```

</details>

:::caution
このYAML構成はダッシュボード専用であり、`configuration.yaml`ファイルに追加しないでください。
:::

1. 「保存」をクリックして変更を適用します。

<div class="table-center">
   <table align="center">
      <tr>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}} alt="生の構成エディタ"/></div>
         </td>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}} alt="構成を保存"/></div>
         </td>
      </tr>
   </table>
</div>

おめでとうございます！Home Assistantダッシュボードを正常に設定し、SenseCAP Indicatorを表示および制御できるようになりました。これで、CO2レベル、温度、湿度、TVOCを監視し、Home Assistantインターフェースからさまざまなスイッチを直接制御することができます。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## リソース

1. **デモ SDK**: SenseCAP Indicator 用のデモ SDK は [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) で利用可能です。
2. **`indicator_ha.c` ファイル**: このファイルには Home Assistant 統合の主要な関数が含まれています。[こちら](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c) で閲覧できます。
3. **ユーザーガイド**: ユーザーガイドには SenseCAP Indicator ボードのソフトウェアとハードウェアに関する詳細情報が記載されています。[こちら](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) で読むことができます。
4. **Home Assistant インストールガイド**: Home Assistant を初めて使用する場合、このガイドがインストールとセットアップをサポートします。[こちら](https://www.home-assistant.io/installation/) で確認できます。
5. **ESP-IDF の入門ガイド**: このガイドは、ESP-IDF を使用してプロジェクトを構築するための完全な手順を提供します。[こちら](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html) でアクセスできます。
6. [Home Assistant の概念と用語](https://www.home-assistant.io/getting-started/concepts-terminology/)

## 参考資料

- 🔗 **[リンク]** [Home Assistant と MQTT: 構築できる 4 つのアイデア | EMQ (emqx.com)](https://www.emqx.com/en/blog/home-assistant-and-mqtt-4-things-you-could-build#home-assistant-mqtt-with-emqx)

## 技術サポート

**SenseCAP Indicator に関するサポートが必要ですか？私たちがサポートします！**

このチュートリアルを進める中で問題が発生したり質問がある場合は、ぜひ技術サポートにお問い合わせください。私たちはいつでもお手伝いします！

質問がある場合は [Seeed Official Discord Channel](https://discord.gg/kpY74apCWj) を訪れるか、[GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) で自由に共有してください！