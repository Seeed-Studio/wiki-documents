---
title: Home Assistant における 6 チャンネル Wi-Fi リレーモジュール
description: |
  Seeed Studio が提供する、安全な DC 電圧でデバイスをワイヤレス制御するために設計されたスマートデバイスです。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp
slug: /6_channel_wifi_relay
sku: 114993588
keywords:
  - XIAO
  - Home Assistant
  - Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Cody
  date: 07/06/2026
createdAt: '2025-01-04'
updatedAt: '2026-07-06'
url: https://wiki.seeedstudio.com/ja/6_channel_wifi_relay/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Home Assistant で 6 チャンネル Wi-Fi リレーモジュールを使い始める

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp" style={{width:640, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6-Channel-Wi-Fi-5V-DC-Relay-p-6373.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

## 概要

**[6-Channel Wi-Fi Relay Module](https://www.seeedstudio.com/)** は、Seeed Studio によるスマートデバイスで、安全な DC 電圧範囲内での制御用に設計されており、AC 電源機器向けではありません。6 チャンネル構成により最大 6 つの負荷を個別に制御でき、スマートホーム環境でさまざまなデバイスを自動化するのに最適です。

6 つのリレーチャンネルに加えて、このモジュールには 2 つの追加 Grove 拡張インターフェースも備わっており、より高度な自動化シナリオのために、追加のセンサーやアクチュエータを統合することができます。

このガイドでは、初心者からスマートホーム愛好家までを対象に、セットアップ、統合、詳細な設定手順を詳しく解説します。

### 主な特長と仕様

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>項目</th>
            <th>詳細</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>入力電圧</th>
            <td>DC 5V（XIAO 用）</td>
        </tr>
        <tr>
            <th>DC 耐電圧</th>
            <td>DC 0～30V</td>
        </tr>
        <tr>
            <th>最大負荷</th>
            <td>各チャンネルあたり 10A</td>
        </tr>
        <tr>
            <th>チャンネル数</th>
            <td>6（各チャンネルを個別制御可能）</td>
        </tr>
        <tr>
            <th>接続方式</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>電気ポート</th>
            <td>NO（ノーマリオープン）、COM（コモン）、NC（ノーマリクローズ）</td>
        </tr>
        <tr>
            <th>Grove 拡張</th>
            <td>IIC×1、UART×1</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全上の警告

このリレーモジュールは、低電圧 DC 動作用に設計されています。感電などの電気的危険を避けるため、AC 電源には接続しないでください。ショートや感電を防ぐため、リレーの配線を行う前には必ず電源を切ってください。

24V を超える電圧は、特に皮膚が傷ついている場合や湿った環境では、感電ややけどの原因となる可能性があります。けがを防ぐため、電気機器を扱う際は十分に注意してください。

:::

### 外観レイアウトと接続

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/simplified_diagram_with_con.png" style={{width: 600, height: 'auto'}}/></div>

- **NO (Normally Open)**: ノーマリオープン端子です。通常、この端子はコモン端子（COM）には接続されていません。リレーが動作すると、NO 端子が COM 端子に接続されます。一般的に負荷のスイッチ制御に使用されます。
- **COM (Common)**: リレーのコモン端子で、回路の一方の側の共通接続点として使用されます。
- **NC (Normally Closed)**: ノーマリクローズ端子です。通常、この端子はコモン端子（COM）に接続されています。リレーが動作すると、NC 端子と COM 端子の接続が切れます。一般的に遮断制御が必要なシナリオで使用されます。

   | XIAO GPIO | リレーチャンネル |
   | --------- | ------------- |
   | GPIO2     | リレー 1       |
   | GPIO21    | リレー 2       |
   | GPIO1     | リレー 3       |
   | GPIO0     | リレー 4       |
   | GPIO19    | リレー 5       |
   | GPIO18    | リレー 6       |

## はじめに

### 必要なもの

1. **コアコンポーネント**:
   - [6-Channel Wi-Fi Relay Module](https://www.seeedstudio.com/)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **ネットワーク**:
   - ハードウェアと Home Assistant 間のシームレスな連携のための安定した Wi-Fi。

### ステップ 1: Home Assistant のセットアップ {#setting-up-home-assistant}

1. **インストール**: homeassistant はすでに [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) にプリインストールされています。
2. **ESPHome アドオンの有効化**:
   - Home Assistant のダッシュボードにアクセスします。
   - "Add-ons" セクションに移動し、ESPHome アドオンを検索します。
   - "Install" をクリックし、その後 "Start" をクリックして有効化します。
   - インストール後、XIAO ESP32C6 と正しく通信できるようにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを揃え、ESPHome アドオン付きの Home Assistant をセットアップすれば、6 チャンネルリレーモジュールの統合を進める準備が整います。

### ステップ 2: リレーモジュールの準備

デフォルトでは、お使いのデバイス（XIAO ESP32C6）には 6 チャンネルリレー用のファームウェアがプリインストールされています。ただし、次の 2 つの状況ではファームウェアを更新する必要があります。

1. **ファームウェアの再書き込み**: 既存のファームウェアが破損している場合、または一からやり直したい場合。
2. **ファームウェアのアップグレード**: 機能が向上した新しいバージョンのファームウェアがある場合。

ファームウェアを書き込む簡単な方法が 2 つあります。

:::caution
Firefox は ESP デバイスへのファームウェア書き込みをサポートしていません。代わりに Google Chrome または Microsoft Edge を使用してください。
:::

<Tabs>
<TabItem value='Web Tool'>

この [Web Tool](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/) を使用すると、簡単かつ直接的な方法でファームウェアを書き込むことができます。画面の指示に従うだけです。

- `CONNECT` ボタンをクリックして接続を開始します。ツールが自動的にファームウェアを更新します。

問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web` の方法に切り替えて処理を完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases)から `bin` ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍する必要があります）。

1. センサーキットを PC に接続します。
2. [ESPHome Web](https://web.esphome.io/) ページにアクセスします。
3. `*.factory.bin` という拡張子のファームウェアファイルを選択します。

ESPHome Web を使ってファームウェアを書き込む手順については、次の動画をご覧ください。

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアを更新し、Home Assistant との統合に向けて準備を整えることができます。

### ステップ 3: ネットワーク設定

1. **アクセスポイントを有効化**:
   - 初回起動時、モジュールは Wi-Fi ネットワーク（SSID: `seeedstudio-6-channel-relay`）を作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap-from-xiao-esp32c6-seeedstudio-6-channel-relay.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **設定画面へのアクセス**:
   - スマートフォンまたは PC からそのネットワークに接続します。
   - ブラウザを開き、[http://192.168.4.1](http://192.168.4.1) にアクセスします。
   - 自宅の Wi-Fi ネットワークの SSID とパスワードを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant との統合**:
   - 自宅のネットワークに接続されると、モジュールは Home Assistant の `Settings -> Devices & Services` に新しいデバイスとして検出されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

このようにして、モジュールを Home Assistant のネットワークに接続し、Home Assistant に検出させることができます。

### ステップ 4: モジュールデバイスを追加する

1. **自動検出**:
   - Home Assistant に **ESPHome** がインストールされていることを確認します。
   - `Settings -> Devices & Services -> Integrations` に移動し、デバイスを探します。
2. **手動設定**:
   - 自動検出されない場合は、IP アドレスを指定してデバイスを手動で追加します。

デバイスを追加すると、Overview ページに 6 つすべてのスイッチが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

各スイッチの名前も個別に設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview_with_custom_names.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### ステップ 5: 制御したい機器を接続する

:::warning 安全上の警告

このリレーモジュールは、低電圧 DC 動作用に設計されています。感電などの電気的危険を避けるため、AC 電源には接続しないでください。ショートや感電を防ぐため、リレーの配線を行う前には必ず電源を切ってください。

24V を超える電圧は、特に皮膚が傷ついている場合や湿った環境では、感電ややけどの原因となる可能性があります。けがを防ぐため、電気機器を扱う際は十分に注意してください。

:::

1. 配線:
    - リレー・モジュールの配線は、「物理レイアウトと接続」セクションに従って行ってください。
    - すべての接続が確実で、露出した配線がないことを確認してください。
2. 電源オン：
    - USB を介してモジュールの電源を入れます。
    - 他の電気機器を制御するために DC 電源をオンにします。

## 安全性とメンテナンス

1. 定期的に配線に摩耗や損傷がないか点検してください。
2. ヒューズやブレーカーなど、適切な回路保護デバイスを使用してください。
3. 装置を水や過度の熱から遠ざけてください。

## よくある質問

1. **デバイスが Wi-Fi から切断された場合はどうなりますか？**
   - モジュールは自動的に再接続を試みます。失敗した場合は、再設定のためにフォールバック・アクセスポイントを有効にします。
2. **AC 電源に接続している間に USB ポートを使用できますか？**
   - いいえ、AC 電源に接続している状態で USB を使用すると、デバイスが損傷したり、安全上の危険を引き起こす可能性があります。
3. **このモジュールは Home Assistant なしで動作しますか？**
   - はい、モジュールは**ローカル IP アドレス**経由で制御することも、ESPHome や MQTT をサポートする他のプラットフォームと連携させることもできます。

## リソース

- **GitHub リポジトリ**： [Seeed Studio 6 Channel Relay Module GitHub ページ](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6) から ESPHome ファームウェアにアクセスできます。
- **📄[Schematic]** [ 6-Channel Wi-Fi Relay Module 回路図](https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/202004205_PCBA;6-Channel-Wi-Fi-5V-DC-Relay_SCH_PDF.pdf)
- **🗃️[PCB Design Files]** [ 6-Channel Wi-Fi Relay Module KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/202004205_PCBA;6-Channel-Wi-Fi-5V-DC-Relay-SCH.zip)

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
