---
title: 2-Channel Wi-Fi AC Relay Module In Home Assistant
description: |
  A smart device from Seeed Studio designed to control AC-powered appliances wirelessly
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/dual_smart_relay_module_for_xiao_45font.webp
slug: /ja/2_channel_wifi_ac_relay
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Spencer
  date: 2024-11-27T03:21:36.491Z
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Home Assistantでの2チャンネルWi-Fi ACリレーモジュールの使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2-114993526-dual-smart-relay-module-for-xiao-45font.jpg" style={{width:420, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

## 概要

**[2チャンネルWi-Fi ACリレーモジュール](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)**は、AC電源機器をワイヤレスで制御するために設計されたSeeed Studioのスマートデバイスです。デュアルチャンネル構成により2つの負荷を独立して制御でき、Home Assistant環境でライト、ファン、その他のデバイスなどの家庭用電化製品を自動化するのに最適な選択肢です。

このガイドでは、初心者からスマートホーム愛好家まで、セットアップ、統合、高度な設定を含む詳細なウォークスルーを提供します。

### 主な機能と仕様

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
            <td>AC 100-240V、50/60Hz</td>
        </tr>
        <tr>
            <th>出力電圧</th>
            <td>AC 100-240V、50/60Hz</td>
        </tr>
        <tr>
            <th>最大負荷</th>
            <td>チャンネルあたり10A</td>
        </tr>
        <tr>
            <th>チャンネル数</th>
            <td>2（各チャンネル独立制御）</td>
        </tr>
        <tr>
            <th>接続タイプ</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>入力端子</th>
            <td>N（中性線）、L（電源線）</td>
        </tr>
        <tr>
            <th rolspan="2">出力端子</th>
            <td><b>チャンネル1:</b> N1（中性線）、L1（電源線） <br></br> <b>チャンネル2:</b> N2（中性線）、L2（電源線）</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全警告

リレーの配線を行う前に、必ずAC電源を切断してください。デバイスがAC電源に接続されている間は、電気的危険を防ぐためUSBポートの使用を避けてください。

:::

### 物理的レイアウトと接続

#### 入力および出力端子

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/relay_connections.png" style={{width: 600, height: 'auto'}}/></div>

- 入力
  - **N (ニュートラル)**: AC電源からのニュートラル線を接続します。
  - **L (ライブ)**: AC電源からのライブ線を接続します。
- 出力
  - チャンネル1
    - **N1 (ニュートラル)**: リレー1に接続された負荷のニュートラル線。
    - **L1 (ライブ)**: リレー1に接続された負荷のライブ線。
  - チャンネル2
    - **N2 (ニュートラル)**: リレー2に接続された負荷のニュートラル線。
    - **L2 (ライブ)**: リレー2に接続された負荷のライブ線。

## はじめに

### 必要なもの

1. **コアコンポーネント**:
   - [2チャンネルWi-Fi ACリレーモジュール](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **ネットワーク**:
   - ハードウェアとHome Assistantの間のシームレスな相互作用のための安定したWi-Fi。

### ステップ1: リレーモジュールのセットアップ（物理的セットアップ）

1. **インストール**: homeassistantは[Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)に既にプリインストールされています。
2. **ESPHomeアドオンの有効化**:
   - Home Assistantダッシュボードにアクセスします。
   - 「アドオン」セクションに移動し、ESPHomeアドオンを検索します。
   - 「インストール」をクリックし、次に「開始」をクリックして有効にします。
   - インストール後、XIAO ESP32C3との適切な通信を確保するためにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを収集し、ESPHomeアドオンでHome Assistantをセットアップすることで、2チャンネルWi-Fi ACリレーモジュールの統合を進める準備が整います。

### ステップ2: リレーモジュールの準備

デフォルトでは、お使いのデバイス（XIAO ESP32C3）には2チャンネルWi-Fi ACリレーモジュール用のファームウェアがプリフラッシュされています。ただし、ファームウェアの更新が必要な場合が2つあります：

1. **ファームウェアの再フラッシュ**: 既存のファームウェアが破損している場合や、新しく開始する必要がある場合。
2. **ファームウェアのアップグレード**: 改善された機能を持つ新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュする簡単な方法が2つあります：

:::caution
FirefoxはESPデバイスでのファームウェアフラッシュをサポートしていません。代わりにGoogle ChromeまたはMicrosoft Edgeを使用してください。
:::

<Tabs>
<TabItem value='Web Tool'>

この[Webツール](https://limengdu.github.io/2-Channel_Relay_based_on_XIAO_ESP32C3/)を使用して、簡単で直接的な方法でファームウェアをフラッシュできます。画面上の指示に従ってください。

- `CONNECT`ボタンをクリックして接続を開始します。ツールは自動的にファームウェアを更新します。

何か問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web`方法に切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3/releases)から`bin`ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍する必要があります）。

1. センサーキットをPCに接続します。
2. [ESPHome Web](https://web.esphome.io/)ページにアクセスします。
3. `*.factory.bin`サフィックスのファームウェアファイルを選択します。

ESPHome Webを介してファームウェアをフラッシュする詳細な手順については、以下のビデオをご覧ください：

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアが更新され、Home Assistantとの統合の準備が整います。

### ステップ3: ネットワーク設定

1. **アクセスポイントの有効化**:
   - 初回電源投入時、モジュールはWi-Fiネットワーク（SSID: `seeedstudio-relay`）を作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2ch_relay_wifi_list.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **設定へのアクセス**:
   - 電話またはPCを使用してネットワークに接続します。
   - ブラウザを開き、`http://192.168.4.1`に移動します。
   - ホームWi-FiネットワークのSSIDとパスワードを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant統合**:
   - ホームネットワークに接続されると、モジュールは`設定 -> デバイスとサービス`の下でHome Assistantで発見可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

この方法で、モジュールをHome Assistantネットワークに接続し、Home Assistantに発見させることができます。

### ステップ4: モジュールデバイスの追加

1. **自動発見**:
   - **ESPHome**がHome Assistantにインストールされていることを確認します。
   - `設定 -> デバイスとサービス -> 統合`に移動し、デバイスを探します。
2. **手動設定**:
   - 自動的に発見されない場合は、IPアドレスを指定してデバイスを手動で追加します。

デバイスを追加した後、概要ページで両方のスイッチを確認できます。各スイッチの名前を個別に設定することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/ha_switch_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

## 安全性とメンテナンス

1. 配線の摩耗や損傷を定期的に点検してください。
2. ヒューズやブレーカーなどの適切な回路保護装置を使用してください。
3. デバイスを水や過度の熱から遠ざけてください。

## FAQ

1. **デバイスがWi-Fiから切断された場合はどうなりますか？**
   - モジュールは自動的に再接続を試行します。失敗した場合は、再設定のためのフォールバックアクセスポイントを有効にします。
2. **AC電源に接続している間にUSBポートを使用できますか？**
   - いいえ、AC電源に接続している間にUSBを使用すると、デバイスが損傷したり安全上の危険が生じる可能性があります。
3. **このモジュールはHome Assistantなしで動作しますか？**
   - はい、モジュールは**ローカルIPアドレス**経由で制御したり、ESPHomeやMQTTをサポートする他のプラットフォームと統合することができます。

## リソース

- **GitHubリポジトリ**: [Seeed Studio Dual Channel Relay Module GitHub page](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3)でESPHomeファームウェアにアクセスしてください。
- **デュアルチャンネルリレーモジュール回路図**: [Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/resource/Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf)。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
