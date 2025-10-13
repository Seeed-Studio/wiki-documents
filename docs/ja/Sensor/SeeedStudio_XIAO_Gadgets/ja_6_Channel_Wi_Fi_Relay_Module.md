---
title: 6-Channel Wi-Fi Relay Module In Home Assistant
description: |
  Seeed Studioが設計した、安全なDC電圧でデバイスをワイヤレス制御するスマートデバイス。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp
slug: /ja/6_channel_wifi_relay
keywords:
  - XIAO
  - Home Assistant
  - Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Cody
  date: 01/04/2025
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Home Assistantでの6チャンネルWi-Fiリレーモジュール入門

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp" style={{width:640, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6-Channel-Wi-Fi-5V-DC-Relay-p-6373.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

## 概要

**[6チャンネルWi-Fiリレーモジュール](https://www.seeedstudio.com/)**は、Seeed Studioが設計したスマートデバイスで、安全なDC電圧範囲内での制御用に設計されており、AC電源機器用ではありません。6チャンネル構成により最大6つの負荷の独立制御をサポートし、スマートホーム環境での様々なデバイスの自動化に最適な選択肢となっています。

6つのリレーチャンネルに加えて、このモジュールには2つの追加Grove拡張インターフェースも搭載されており、ユーザーはより高度な自動化シナリオのために追加のセンサーやアクチュエーターを統合できます。

このガイドでは、初心者からスマートホーム愛好家まで、幅広いユーザー向けにセットアップ、統合、高度な設定を含む詳細なウォークスルーを提供します。

### 主要機能と仕様

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>機能</th>
            <th>詳細</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>入力電圧</th>
            <td>DC 5V（XIAO用）</td>
        </tr>
        <tr>
            <th>DC耐電圧</th>
            <td>DC 0~30V</td>
        </tr>
        <tr>
            <th>最大負荷</th>
            <td>チャンネルあたり10A</td>
        </tr>
        <tr>
            <th>チャンネル数</th>
            <td>6（各チャンネル独立制御）</td>
        </tr>
        <tr>
            <th>接続タイプ</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>電気ポート</th>
            <td>NO（ノーマリーオープン）、COM（コモン）、NC（ノーマリークローズ）</td>
        </tr>
        <tr>
            <th>Grove拡張</th>
            <td>IIC×1、UART×1</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全警告

このリレーモジュールは低電圧DC動作用に設計されています。電気的危険を避けるため、AC電源に接続しないでください。短絡や感電を防ぐため、リレーの配線前には必ず電源を切断してください。

24Vを超える電圧は、特に皮膚が損傷している場合や湿潤環境では、感電や火傷を引き起こす可能性があります。怪我を避けるため、電気機器を取り扱う際は注意してください。

:::

### 物理レイアウトと接続

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/simplified_diagram_with_con.png" style={{width: 600, height: 'auto'}}/></div>

- **NO (Normally Open)**: 常開端子。デフォルトでは、この端子は共通端子（COM）に接続されていません。リレーが作動すると、NO端子がCOM端子に接続されます。通常、負荷のスイッチ制御に使用されます。
- **COM (Common)**: リレーの共通端子で、回路の一方の接続点として共有されます。
- **NC (Normally Closed)**: 常閉端子。デフォルトでは、この端子は共通端子（COM）に接続されています。リレーが作動すると、NC端子とCOM端子間の接続が切断されます。通常、切断制御が必要なシナリオで使用されます。

   | XIAO GPIO | リレーチャンネル |
   | --------- | ------------- |
   | GPIO2     | リレー 1       |
   | GPIO21    | リレー 2       |
   | GPIO1     | リレー 3       |
   | GPIO0     | リレー 4       |
   | GPIO19    | リレー 5       |
   | GPIO18    | リレー 6       |

## はじめに

### 要件

1. **コアコンポーネント**:
   - [6チャンネルWi-Fiリレーモジュール](https://www.seeedstudio.com/)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **ネットワーク**:
   - ハードウェアとHome Assistant間のシームレスな相互作用のための安定したWi-Fi。

### ステップ1: Home Assistantのセットアップ {#setting-up-home-assistant}

1. **インストール**: homeassistantは[Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)に既にプリインストールされています。
2. **ESPHomeアドオンの有効化**:
   - Home Assistantダッシュボードにアクセスします。
   - 「アドオン」セクションに移動し、ESPHomeアドオンを検索します。
   - 「インストール」をクリックし、次に「開始」をクリックして有効にします。
   - インストール後、XIAO ESP32C6との適切な通信を確保するためにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを収集し、ESPHomeアドオンでHome Assistantをセットアップすることで、6チャンネルリレーモジュールの統合を進める準備が整います。

### ステップ2: リレーモジュールの準備

デフォルトでは、お使いのデバイス（XIAO ESP32C6）には6チャンネルリレー用のファームウェアがプリフラッシュされています。ただし、ファームウェアの更新が必要な2つのシナリオがあります：

1. **ファームウェアの再フラッシュ**: 既存のファームウェアが破損している場合や、新しく開始する必要がある場合。
2. **ファームウェアのアップグレード**: 改善された機能を持つ新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュする2つの簡単な方法があります：

:::caution
FirefoxはESPデバイスでのファームウェアフラッシュをサポートしていません。代わりにGoogle ChromeまたはMicrosoft Edgeを使用してください。
:::

<Tabs>
<TabItem value='Web Tool'>

簡単で直接的な方法でファームウェアをフラッシュするために、この[Webツール](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/)を使用できます。画面上の指示に従ってください。

- `CONNECT`ボタンをクリックして接続を開始します。ツールは自動的にファームウェアを更新します。

何か問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web`方法に切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases)から`bin`ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍する必要があります）。

1. センサーキットをPCに接続します。
2. [ESPHome Web](https://web.esphome.io/)ページにアクセスします。
3. `*.factory.bin`サフィックスのファームウェアファイルを選択します。

ESPHome Webを介してファームウェアをフラッシュする詳細な手順については、以下のビデオをご覧ください：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアが更新され、Home Assistantとの統合の準備が整います。

### ステップ3: ネットワーク設定

1. **アクセスポイントの有効化**:
   - 初回電源投入時、モジュールはWi-Fiネットワーク（SSID: `seeedstudio-6-channel-relay`）を作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap-from-xiao-esp32c6-seeedstudio-6-channel-relay.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **設定へのアクセス**:
   - 電話またはPCを使用してネットワークに接続します。
   - ブラウザを開き、[http://192.168.4.1](http://192.168.4.1)に移動します。
   - ホームWi-FiネットワークのSSIDとパスワードを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant統合**:
   - ホームネットワークに接続されると、モジュールはHome Assistantの`設定 -> デバイスとサービス`で発見可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

この方法で、モジュールをHome Assistantネットワークに接続し、Home Assistantに発見させることができます。

### ステップ 4: モジュールデバイスを追加する

1. **自動検出**:
   - **ESPHome** が Home Assistant にインストールされていることを確認してください。
   - `設定 -> デバイスとサービス -> 統合` に移動し、デバイスを探してください。
2. **手動設定**:
   - 自動検出されない場合は、IPアドレスを指定してデバイスを手動で追加してください。

デバイスを追加した後、概要ページで6つのスイッチすべてを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

各スイッチの名前を個別に設定することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview_with_custom_names.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### ステップ 5: 制御したい機器を接続する

:::warning 安全警告

このリレーモジュールは低電圧DC動作用に設計されています。電気的危険を避けるため、AC電源に接続しないでください。短絡や感電を防ぐため、リレーを配線する前に必ず電源を切断してください。

24Vを超える電圧は、特に皮膚が損傷している場合や湿潤環境では、感電や火傷を引き起こす可能性があります。怪我を避けるため、電気機器を取り扱う際は注意してください。

:::

1. 配線:
    - 物理レイアウトと接続セクションに従ってリレーモジュールを配線してください。
    - すべての接続が確実で、露出した配線がないことを確認してください。
2. 電源投入:
    - USBを通してモジュールに電源を供給してください。
    - 他の電気機器を制御するためにDC電源をオンにしてください。

## 安全性とメンテナンス

1. 配線の摩耗や損傷を定期的に点検してください。
2. ヒューズやブレーカーなどの適切な回路保護装置を使用してください。
3. デバイスを水や過度の熱から遠ざけてください。

## よくある質問

1. **デバイスがWi-Fiから切断された場合はどうなりますか？**
   - モジュールは自動的に再接続を試行します。失敗した場合は、再設定用のフォールバックアクセスポイントを有効にします。
2. **AC電源に接続している間にUSBポートを使用できますか？**
   - いいえ、AC電源に接続している間にUSBを使用すると、デバイスが損傷したり安全上の危険が生じる可能性があります。
3. **このモジュールは Home Assistant なしで動作できますか？**
   - はい、モジュールは**ローカルIPアドレス**を介して制御したり、ESPHome や MQTT をサポートする他のプラットフォームと統合したりできます。

## リソース

- **GitHubリポジトリ**: [Seeed Studio 6チャンネルリレーモジュール GitHubページ](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6)で ESPHome ファームウェアにアクセスしてください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
