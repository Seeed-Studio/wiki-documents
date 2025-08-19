---
title: Home Assistantでの6チャンネルWi-Fiリレーモジュール
description: |
  安全なDC電圧でデバイスをワイヤレスで制御するために設計されたSeeed Studioのスマートデバイス。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp
slug: /ja/6_channel_wifi_relay
keywords:
  - XIAO
  - Home Assistant
  - リレー
  - スマートホーム
sidebar_position: 2
last_update:
  author: Cody
  date: 05/15/2025
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Home Assistantでの6チャンネルWi-Fiリレーモジュールの使い方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp" style={{width:640, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6-Channel-Wi-Fi-5V-DC-Relay-p-6373.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

## 概要

**[6チャンネルWi-Fiリレーモジュール](https://www.seeedstudio.com/)**は、Seeed Studioが設計したスマートデバイスで、安全なDC電圧範囲内での制御を目的としており、AC電源の機器には使用できません。このモジュールは6チャンネル構成で、最大6つの負荷を独立して制御できるため、スマートホーム環境でさまざまなデバイスを自動化するのに最適です。

さらに、このモジュールには2つの追加のGrove拡張インターフェースが搭載されており、追加のセンサーやアクチュエータを統合して、より高度な自動化シナリオを実現できます。

このガイドでは、初心者からスマートホーム愛好家まで、セットアップ、統合、そして高度な設定を含む詳細な手順を提供します。

### 主な特徴と仕様

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>特徴</th>
            <th>詳細</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>入力電圧</th>
            <td>DC 5V(XIAO用)</td>
        </tr>
        <tr>
            <th>DC耐圧</th>
            <td>DC 0~30V</td>
        </tr>
        <tr>
            <th>最大負荷</th>
            <td>各チャンネル10A</td>
        </tr>
        <tr>
            <th>チャンネル数</th>
            <td>6 (各チャンネル独立制御)</td>
        </tr>
        <tr>
            <th>接続タイプ</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>電気ポート</th>
            <td>NO (通常開), COM (共通), NC (通常閉)</td>
        </tr>
        <tr>
            <th>Grove拡張</th>
            <td>IIC×1, UART×1</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全上の注意

このリレーモジュールは低電圧DC操作用に設計されています。電気的な危険を避けるためにAC電源に接続しないでください。リレーを配線する前に必ず電源を切断し、短絡や感電を防いでください。

24Vを超える電圧は、特に皮膚が破れている場合や湿った環境では、感電や火傷を引き起こす可能性があります。電気機器を扱う際は、怪我を防ぐために十分注意してください。

:::

### 外観と接続

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/simplified_diagram_with_con.png" style={{width: 600, height: 'auto'}}/></div>

- **NO (通常開)**: 通常開端子。デフォルトでは、この端子は共通端子(COM)に接続されていません。リレーが作動すると、NO端子がCOM端子に接続されます。通常、負荷のスイッチを制御するために使用されます。
- **COM (共通)**: リレーの共通端子で、回路の一方の接続点として共有されます。
- **NC (通常閉)**: 通常閉端子。デフォルトでは、この端子は共通端子(COM)に接続されています。リレーが作動すると、NC端子とCOM端子の接続が切断されます。通常、切断制御が必要なシナリオで使用されます。

   | XIAO GPIO | リレーチャンネル |
   | --------- | ------------- |
   | GPIO2     | リレー1       |
   | GPIO21    | リレー2       |
   | GPIO1     | リレー3       |
   | GPIO0     | リレー4       |
   | GPIO19    | リレー5       |
   | GPIO18    | リレー6       |

## はじめに

### 必要条件

1. **主要コンポーネント**:
   - [6チャンネルWi-Fiリレーモジュール](https://www.seeedstudio.com/)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **ネットワーク**:
   - ハードウェアとHome Assistant間の円滑な通信を可能にする安定したWi-Fi。

### ステップ1: Home Assistantのセットアップ {#setting-up-home-assistant}

1. **インストール**: [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)にはHome Assistantが事前にインストールされています。
2. **ESPHomeアドオンの有効化**:
   - Home Assistantのダッシュボードにアクセスします。
   - 「アドオン」セクションに移動し、ESPHomeアドオンを検索します。
   - 「インストール」をクリックし、その後「開始」をクリックして有効化します。
   - インストール後、XIAO ESP32C6との適切な通信を確保するためにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを収集し、ESPHomeアドオンを使用してHome Assistantをセットアップすることで、6チャンネルリレーモジュールの統合を進める準備が整います。

### ステップ2: リレーモジュールの準備

デフォルトでは、XIAO ESP32C6デバイスには6チャンネルリレー用のファームウェアが事前にフラッシュされています。ただし、以下の2つのシナリオではファームウェアを更新する必要がある場合があります:

1. **ファームウェアの再フラッシュ**: 既存のファームウェアが破損している場合や新しい状態から始めたい場合。
2. **ファームウェアのアップグレード**: 機能が改善された新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュするには、以下の2つの簡単な方法があります:

:::caution
FirefoxはESPデバイスのファームウェアフラッシュをサポートしていません。Google ChromeまたはMicrosoft Edgeを使用してください。
:::

<Tabs>
<TabItem value='Web Tool'>

この[Web Tool](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/)を使用すると、簡単かつ直接的にファームウェアをフラッシュできます。画面上の指示に従ってください。

- `CONNECT`ボタンをクリックして接続を開始します。このツールは自動的にファームウェアを更新します。

問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web`方法に切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases)から`bin`ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍してください）。

1. センサーキットをPCに接続します。
2. [ESPHome Web](https://web.esphome.io/)ページにアクセスします。
3. `*.factory.bin`の接尾辞が付いたファームウェアファイルを選択します。

以下の動画で、ESPHome Webを使用したファームウェアフラッシュの詳細な手順をご覧ください:

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="ESPHome Webを使用したファームウェアインストール" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアを更新し、Home Assistantとの統合の準備が整います。

### ステップ3: ネットワーク設定

1. **アクセスポイントの有効化**:
   - 初回の電源投入時に、モジュールはWi-Fiネットワーク（SSID: `seeedstudio-6-channel-relay`）を作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap-from-xiao-esp32c6-seeedstudio-6-channel-relay.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **設定へのアクセス**:
   - 携帯電話またはPCを使用してネットワークに接続します。
   - ブラウザを開き、`http://192.168.4.1`に移動します。
   - ホームWi-FiネットワークのSSIDとパスワードを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant統合**:
   - ホームネットワークに接続すると、モジュールはHome Assistantの`設定 -> デバイスとサービス`で検出可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

この方法で、モジュールをHome Assistantネットワークに接続し、Home Assistantに検出させることができます。

### ステップ4: モジュールデバイスを追加する

1. **自動検出**:
   - **ESPHome**がHome Assistantにインストールされていることを確認します。
   - `設定 -> デバイスとサービス -> 統合`に移動し、デバイスを探します。
2. **手動設定**:
   - 自動的に検出されない場合は、デバイスのIPアドレスを指定して手動で追加します。

デバイスを追加すると、概要ページに6つのスイッチが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

各スイッチの名前を個別に設定することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview_with_custom_names.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### ステップ5: 制御したい機器を接続する

:::warning 安全上の注意

このリレーモジュールは低電圧DC操作用に設計されています。電気的危険を避けるためにAC電源に接続しないでください。リレーの配線を行う前に必ず電源を切断し、短絡や感電を防いでください。

24Vを超える電圧は、特に皮膚が破れている場合や湿った環境では、感電や火傷を引き起こす可能性があります。電気機器を扱う際は怪我を防ぐために注意してください。

:::

1. 配線:
    - 「物理的なレイアウトと接続」セクションに従ってリレーモジュールを配線します。
    - すべての接続が確実であり、露出したワイヤがないことを確認してください。
2. 電源オン:
    - USBを介してモジュールに電源を供給します。
    - DC電源をオンにして他の電気機器を制御します。

## 安全性とメンテナンス

1. 配線の摩耗や損傷を定期的に点検してください。
2. ヒューズやブレーカーなど、適切な回路保護装置を使用してください。
3. デバイスを水や過度の熱から遠ざけてください。

## よくある質問 (FAQs)

1. **デバイスが Wi-Fi から切断された場合はどうなりますか？**  
   - モジュールは自動的に再接続を試みます。失敗した場合、再設定のためにフォールバックアクセスポイントを有効にします。

2. **AC 電源に接続している間に USB ポートを使用できますか？**  
   - いいえ、AC 電源に接続している間に USB を使用すると、デバイスが損傷したり、安全上の問題が発生する可能性があります。

3. **このモジュールは Home Assistant なしで動作しますか？**  
   - はい、このモジュールは**ローカル IP アドレス**を介して制御することができ、ESPHome や MQTT をサポートする他のプラットフォームと統合することも可能です。

## リソース

- **GitHub リポジトリ**: ESPHome ファームウェアは [Seeed Studio 6 チャンネルリレーモジュール GitHub ページ](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6) でアクセスできます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>