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
  date: 10/09/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator - Home Assistant アプリケーション開発

## はじめに

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        今すぐ購入 🖱️
</a>
</div>

SenseCAP Indicator を Home Assistant と統合することで、スマートホームの可能性を最大限に引き出しましょう。この強力な組み合わせにより、これまでにない簡単さで環境の監視と制御が可能になります。

この包括的なガイドでは、MQTT を使用して SenseCAP Indicator を Home Assistant とシームレスに統合する方法を学びます。

始める前に、Home Assistant のセットアップオプションを確認しましょう。Home Assistant は、2つの専用ハードウェアオプションに簡単にインストールできます：

:::note
もちろん、[Installation - Home Assistant (home-assistant.io)](https://www.home-assistant.io/installation/) に従って、HA をインストールするための様々なオプションがあります。
:::

<Tabs>
<TabItem value='Home Assistant Green'>

<div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA/HA_Green.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> 手頃な価格の **[Home Assistant Green](https://www.home-assistant.io/green)** は、Home Assistant を使い始める最も簡単な方法です。プラグアンドプレイで、Home Assistant が既にインストールされています。

</TabItem>

<TabItem value='Home Assistant Yellow'>

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png"style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> **[Home Assistant Yellow](https://www.home-assistant.io/yellow)** は、Raspberry Pi Compute Module 4 (CM4) とカスタムヒートシンクを搭載したカスタム筐体に事前組み立てされており、ファンレスで静音動作します。CM4 はワイヤレス機能なしのバージョンで、2 GB RAM と 16 GB eMMC ストレージを搭載しています。Home Assistant がプリインストールされています。

</TabItem>
</Tabs>

Home Assistant の機能を最大限に活用するために、Home Assistant OS または Home Assistant Supervised の使用をお勧めします。どちらのオプションも高度な機能とより多くのカスタマイズオプションを提供し、スマートホーム体験を正確なニーズに合わせて調整できます。

それでは、統合プロセスを始めましょう。SenseCAP Indicator を Home Assistant で動作させるために、以下の3つの主要なステップに従ってください：

1. [Home Assistant OS のインストール](#install_HA)
   1. [アドオンのインストール](#mqtt-addons)
   2. [MQTT 統合のセットアップ](#mqtt-integration)
2. [ファームウェアのビルドとフラッシュ](#build-flash-firmware)
3. [MQTT デバイスの追加](#add-mqtt-devices)
4. [ダッシュボードのセットアップ](#set-up-dashboard)

## 前提条件

始める前に、SenseCAP Indicator ボードの[ユーザーガイド](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)を読んで、そのソフトウェアとハードウェア情報に慣れ親しんでください。

## Home Assistant OS のインストール {#install_HA}

> Home Assistant は、プライバシーとローカル制御に焦点を当てた強力なオープンソースのホームオートメーションプラットフォームです。単一の統合プラットフォームからすべてのホームデバイスを管理・自動化するためのカスタマイズ可能で柔軟なフレームワークを提供します。

**Home Assistant Yellow** では、[こちら](https://www.home-assistant.io/installation/yellow)で提供されている手順に従うことができます。また、任意のタイプの Raspberry Pi やローカルサーバーで実行するには、この[手順](https://www.home-assistant.io/installation/)をステップバイステップで従うことができます。

インストールが完了し、このページにアクセスできれば、次のステップに進むことができます。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

<br />

:::tip Home Assistant のオンボーディング方法がわからない場合
Home Assistant をインストールしたら、詳細については [Onboarding Home Assistant - Home Assistant](https://www.home-assistant.io/getting-started/onboarding/) を確認してください。
:::

### ステップ 1: アドオンのインストール {#mqtt-addons}

:::caution アドオン機能が必要
Home Assistant Yellow には **Home Assistant Operating System** が付属しており、アドオンを簡単にインストールできます。ただし、**Home Assistant Container** はアドオンをサポートしていないため、Home Assistant とは別に MQTT ブローカーアプリケーションをインストールする必要があります。詳細については、[インストール方法](https://www.home-assistant.io/installation/#compare-installation-methods)を確認してください。
:::

次のステップは、**Mosquitto Broker** と **File Editor** をインストールすることです。**Mosquitto** は MQTT プロトコルを実装するオープンソースのメッセージブローカーであり、**File Editor** はターミナルにアクセスすることなく `configuration.yaml` ファイルを変更できます。

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
便宜のため、サイドバーに「ファイルエディタ」を表示します：

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

:::

これで2つのアドオンが取得できました。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### ステップ2：MQTT統合の設定 {#mqtt-integration}

MQTT（Message Queuing Telemetry Transport）は、SenseCAP IndicatorボードをHome Assistantに接続するために重要な軽量メッセージングプロトコルです。この機能を有効にするには、Home Assistantセットアップに[MQTT統合](https://www.home-assistant.io/integrations/mqtt)を追加する必要があります。

> MQTT統合を追加することで、Home AssistantがSenseCAP Indicatorボードとシームレスに通信できるようになり、リアルタイムデータ交換と制御が可能になります。この双方向通信は、センサーデータの監視とデバイスへのコマンド送信に不可欠です。

MQTT統合を設定するには：

1. Home Assistantダッシュボードの統合ページ（`デバイスとサービス` -> `統合`）に移動します。
2. 「MQTT」を検索し、リストから選択します。（自動的に検出されない場合）
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
公式でないMQTTブローカー（EMQX Brokerなど）を標準のMosquittoブローカーの代わりに使用している場合、自動検出が機能しない可能性があります。この場合、接続を確立するためにブローカーのIPアドレスを手動で入力する必要があります。これにより、Home AssistantがカスタムMQTTセットアップと通信できるようになります。
:::

### MQTTアドオンのユーザー追加

Home Assistantで公式のMosquitto Brokerアドオンを使用する場合、MQTT接続の認証情報を設定する必要がある場合があります。この手順により、デバイスとHome Assistant間の安全な通信が確保されます。ユーザーを追加する方法は以下の通りです：

1. Home AssistantインターフェースでMosquittoブローカーアドオンに移動します。
2. アドオン設定内の「Users」セクションまたはタブを探します。
3. 「Add User」または「+」ボタンをクリックして新しいユーザーを作成します。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}} alt="Add User Button"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}} alt="Create User Form"/></div></td>
    </tr>
  </table>
</div>

[^ref]: [MQTT デフォルト認証情報 - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/ba2fe1c04d486f802e12b763ffb6efbc71bb5d80/examples/indicator_ha/main/ha_config.h#L10C1-L14C70)

4. ユーザー作成フォームで：
   - お好みのユーザー名を入力します。デフォルトは `indicator-usr`[^ref] です。
   - 強力なパスワードを作成します。デフォルトは `indicator-password` です。
   - 必要に応じて、特定の権限を設定することもできます。
5. 新しいユーザー認証情報を保存します。

:::tip
SenseCAP Indicator やその他の MQTT デバイスを Home Assistant に接続するように設定する際は、これらの認証情報を使用してください。
:::

ユーザーを追加した後、変更を有効にするために Mosquitto ブローカーアドオンの再起動が必要な場合があります。これで、これらの認証情報を使用して安全な MQTT 接続を確立できるはずです。

SenseCAP Indicator の MQTT 設定を新しいユーザー名とパスワードで更新して、Home Assistant と通信できるようにすることを忘れないでください。

## SenseCAP Indicator ESP32 プロジェクトのセットアップ {#build-flash-firmware}

SenseCAP Indicator を Home Assistant と統合する前に、適切なファームウェアでデバイスをセットアップする必要があります。以下の手順に従って、プロジェクトをダウンロード、ビルド、そして SenseCAP Indicator にフラッシュしてください。

### ステップ 1: プロジェクトのダウンロード

SenseCAP Indicator を Home Assistant と統合するために利用可能な2つのプロジェクトがあります。ニーズに最も適したものを選択してください：

<Tabs groupId="project-ha">
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha" default>

このプロジェクトは Home Assistant 統合専用に設計されています。

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Love4yzp/sensecap-indicator-ha" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}>ファームウェアを取得</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

または Git を使用してリポジトリをクローンします：

```bash
git clone https://github.com/Love4yzp/sensecap-indicator-ha
```

</TabItem>
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

このプロジェクトには、SenseCAP Indicatorのより多くの例と機能が含まれています。

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}>ファームウェアを取得</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

または、Gitを使用してリポジトリをクローンします：

```bash
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
```

</TabItem>
</Tabs>

### ステップ2: プロジェクトディレクトリに移動

プロジェクトをダウンロードまたはクローンしたら、適切なディレクトリに移動します：

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

### ステップ3: プロジェクトのビルド、フラッシュ、モニタリング

これで、ファームウェアをビルドし、SenseCAP Indicatorにフラッシュして、デバイスの出力をモニタリングする準備が整いました。以下のコマンドを使用してください：

```bash
idf.py -p PORT build flash monitor
```

`PORT` を適切なデバイスのポートに置き換えてください（例：Windows では `COM3`、Linux では `/dev/ttyUSB0`）。

:::tip
デバイスのポートが不明な場合：

- Windows の場合：デバイスマネージャーの「ポート (COM と LPT)」を確認してください
- Linux/macOS の場合：ターミナルで `ls /dev/tty*` を実行してください

:::

このコマンドは以下を実行します：

1. プロジェクトをビルドします
2. ファームウェアを SenseCAP Indicator にフラッシュします
3. シリアルモニターを開いてデバイスの出力を表示します

シリアルモニターを終了するには、`Ctrl-]` を押してください。

### ステップ 4：セットアップの確認

ファームウェアをフラッシュした後、シリアルモニターに SenseCAP Indicator からの出力が表示されます。Wi-Fi ネットワークと MQTT ブローカーへの接続が成功したことを示すメッセージを確認してください。

:::caution
SenseCAP Indicator が Home Assistant インスタンスと同じネットワークに接続されており、MQTT ブローカーが適切に設定されてアクセス可能であることを確認してください。
:::

SenseCAP Indicator にファームウェアを正常にフラッシュして確認したら、MQTT 統合を使用して Home Assistant に統合する準備が整いました。

次に、SenseCAP Indicator を認識して通信するように Home Assistant を設定します。

## MQTT デバイスの追加 {#add-mqtt-devices}

Home Assistant で MQTT 統合をセットアップした後、次のステップは MQTT デバイスを追加することです。このプロセスでは、MQTT を通じて SenseCAP Indicator Board を認識して通信するように Home Assistant を設定します。

### ステップ 1：Indicator エンティティの追加

SenseCAP Indicator エンティティを Home Assistant に追加するには、`configuration.yaml` ファイルを変更する必要があります。このファイルは、Home Assistant がデバイスとどのように相互作用するかを定義するために重要です。

:::tip
Home Assistant Yellow または **File editor** アドオンを備えたシステムを使用している場合、Web インターフェースを通じて `configuration.yaml` ファイルを簡単に変更できます。Home Assistant Container などの他のセットアップでは、ターミナルアクセスを通じてファイルを変更する必要がある場合があります。
:::

`configuration.yaml` ファイルを変更するには：

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

1. Home Assistant ダッシュボードの File editor アドオンに移動します。
2. ファイルリストから `configuration.yaml` ファイルを選択します。
3. ファイルに以下の MQTT 設定を追加します：

<details>
<summary>クリックして SenseCAP Indicator の MQTT 設定を展開してコピーしてください</summary>

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

1. `configuration.yaml` ファイルに変更を保存します。

:::caution
あなたの Home Assistant セットアップがアドオンをサポートしていない場合（例：Home Assistant Container）、ターミナルまたはSSH接続を通じて `configuration.yaml` ファイルを変更する必要があります。
:::

### ステップ 2: 設定変更の適用

`configuration.yaml` ファイルを変更した後、変更を適用する必要があります：

1. Home Assistant ダッシュボードの `Developer Tools` に移動します。
2. "YAML" タブを見つけてクリックします。
3. `ALL YAML CONFIGURATION` で設定をリロードします。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png" alt="YAML Configuration in Developer Tools"/></div>

:::note
何か問題が発生した場合は、以下を実行できます：

- "Check Configuration" ボタンをクリックして変更を確認します。
- 設定チェックが通った場合、"Restart" ボタンをクリックして新しい設定を適用します。

再起動後、Home Assistant は SenseCAP Indicator エンティティを認識し、ダッシュボードでそれらを確認できるはずです。エンティティがすぐに表示されない場合は、MQTT ディスカバリープロセスが完了するまで数分待つ必要があるかもしれません。

SenseCAP Indicator が設定で定義された正しい MQTT トピックにデータを公開するよう適切に設定されていることを確認してください。
:::

これらのステップに従うことで、MQTT 経由で SenseCAP Indicator デバイスを Home Assistant に正常に追加できました。これで、これらのエンティティをオートメーション、スクリプト、ダッシュボードで使用して、より統合されたスマートホーム体験を実現できます。

## ダッシュボードの設定 {#set-up-dashboard}

SenseCAP Indicator を Home Assistant に統合する最後のステップは、カスタムダッシュボードの設定です。これにより、デバイスのデータと機能を簡単に視覚化し、制御できるようになります。

### 新しいダッシュボードの作成（オプション）

SenseCAP Indicator 専用のダッシュボードを作成したい場合：

1. Home Assistant サイドバーの `Settings -> Dashboards` に移動します。
2. "Add Dashboard" ボタンをクリックします。
3. タイトル（例："SenseCAP Indicator"）を設定し、アイコンを選択します。
4. "Create" をクリックして新しいダッシュボードを完成させます。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}} alt="Create Dashboard"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}} alt="New Dashboard"/></div></td>
    </tr>
  </table>
</div>

### ダッシュボードの設定

SenseCAP Indicatorエンティティをダッシュボードに追加するには：

1. 編集したいダッシュボードを開きます。
2. 右上角の三点メニューをクリックし、「Edit Dashboard」を選択します。
3. 「TAKE CONTROL」ボタンをクリックして手動設定を有効にします。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}} alt="Edit Dashboard"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}} alt="Take Control"/></div></td>
    </tr>
  </table>
</div>

4. ダッシュボードエディターで、再び三点メニューをクリックし、「Raw configuration editor」を選択します。
5. 既存のYAMLコンテンツを以下の設定に置き換えます：

<details>

<summary>クリックしてダッシュボードYAMLをコピーしてUIを変更</summary>

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
このYAML設定はダッシュボード専用であり、`configuration.yaml`ファイルに追加すべきではありません。
:::

1. 「SAVE」をクリックして変更を適用します。

<div class="table-center">
   <table align="center">
      <tr>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}} alt="Raw Configuration Editor"/></div>
         </td>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}} alt="Save Configuration"/></div>
         </td>
      </tr>
   </table>
</div>

おめでとうございます！Home Assistantダッシュボードを正常に設定し、SenseCAP Indicatorを表示・制御できるようになりました。これで、CO2レベル、温度、湿度、TVOCを監視し、Home Assistantインターフェースから直接さまざまなスイッチを制御できます。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## リソース

1. **Demo SDK**: SenseCAP IndicatorのDemo SDKは[GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)で入手できます。
2. **`indicator_ha.c`ファイル**: このファイルにはHome Assistant統合のメイン機能が含まれています。[こちら](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c)で確認できます。
3. **ユーザーガイド**: ユーザーガイドでは、SenseCAP Indicatorボードのソフトウェアとハードウェアに関する詳細情報を提供しています。[こちら](/ja/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)で読むことができます。
4. **Home Assistantインストールガイド**: Home Assistantを初めて使用する場合、このガイドがインストールとセットアップに役立ちます。[こちら](https://www.home-assistant.io/installation/)で確認できます。
5. **ESP-IDFスタートガイド**: このガイドでは、ESP-IDFを設定してプロジェクトをビルドするための完全な手順を提供しています。[こちら](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)でアクセスできます。
6. [Home Assistantの概念と用語](https://www.home-assistant.io/getting-started/concepts-terminology/)

## 参考資料

- 🔗 **[リンク]** [Home AssistantとMQTT: 構築できる4つのもの | EMQ (emqx.com)](https://www.emqx.com/en/blog/home-assistant-and-mqtt-4-things-you-could-build#home-assistant-mqtt-with-emqx)

## 技術サポート

**SenseCAP Indicatorでお困りですか？サポートいたします！**

このチュートリアルに従っている間に問題が発生したり、ご質問がある場合は、お気軽に技術サポートにお問い合わせください。いつでもサポートいたします！

[Seeed公式Discordチャンネル](https://discord.gg/kpY74apCWj)で質問するか、[GitHubディスカッション](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions)で何でも共有してください！
