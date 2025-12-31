---
title: Home Assistant での 2 チャンネル Wi-Fi AC リレーモジュール
description: |
  AC 電源機器をワイヤレスで制御するために設計された Seeed Studio のスマートデバイス
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

# Home Assistant での 2 チャンネル Wi-Fi AC リレーモジュールの使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2-114993526-dual-smart-relay-module-for-xiao-45font.jpg" style={{width:420, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div><br />

## 概要

**[2 チャンネル Wi-Fi AC リレーモジュール](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)** は、AC 電源機器をワイヤレスで制御するために設計された Seeed Studio のスマートデバイスです。デュアルチャンネル構成により 2 つの負荷を独立して制御でき、Home Assistant 環境でライト、ファン、その他のデバイスなどの家庭用電化製品を自動化するのに最適な選択肢です。

このガイドでは、初心者からスマートホーム愛好家まで、幅広いユーザーを対象に、セットアップ、統合、高度な設定を含む詳細なウォークスルーを提供します。

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
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>出力電圧</th>
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>最大負荷</th>
            <td>チャンネルあたり 10A</td>
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
            <td><b>チャンネル 1:</b> N1（中性線）、L1（電源線）<br></br> <b>チャンネル 2:</b> N2（中性線）、L2（電源線）</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全警告

リレーの配線前には必ず AC 電源を切断してください。電気的危険を防ぐため、デバイスが AC 電源に接続されている間は USB ポートの使用を避けてください。

:::

### 物理的レイアウトと接続

#### 入力および出力端子

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/relay_connections.png" style={{width: 600, height: 'auto'}}/></div>

- 入力
  - **N（中性線）**: AC 電源からの中性線を接続します。
  - **L（電源線）**: AC 電源からの電源線を接続します。
- 出力
  - チャンネル 1
    - **N1（中性線）**: リレー 1 に接続された負荷の中性線。
    - **L1（電源線）**: リレー 1 に接続された負荷の電源線。
  - チャンネル 2
    - **N2（中性線）**: リレー 2 に接続された負荷の中性線。
    - **L2（電源線）**: リレー 2 に接続された負荷の電源線。

## 使用開始

### 必要なもの

1. **コアコンポーネント**:
   - [2 チャンネル Wi-Fi AC リレーモジュール](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **ネットワーク**:
   - ハードウェアと Home Assistant 間のシームレスな相互作用のための安定した Wi-Fi。

### ステップ 1: リレーモジュールのセットアップ（物理的セットアップ）

1. **インストール**: homeassistant は [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) にすでにプリインストールされています。
2. **ESPHome アドオンの有効化**:
   - Home Assistant ダッシュボードにアクセスします。
   - "Add-ons" セクションに移動し、ESPHome アドオンを検索します。
   - "Install" をクリックし、次に "Start" をクリックして有効にします。
   - インストール後、XIAO ESP32C3 との適切な通信を確保するためにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを収集し、ESPHome アドオンで Home Assistant をセットアップすることで、2 チャンネル Wi-Fi AC リレーモジュールの統合を進める準備が整います。

### ステップ 2: リレーモジュールの準備

デフォルトでは、お使いのデバイス（XIAO ESP32C3）には 2 チャンネル Wi-Fi AC リレーモジュール用のファームウェアがプリフラッシュされています。ただし、ファームウェアの更新が必要な場合が 2 つあります：

1. **ファームウェアの再フラッシュ**: 既存のファームウェアが破損している場合や、新しく開始する必要がある場合。
2. **ファームウェアのアップグレード**: 機能が改善された新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュする簡単な方法が 2 つあります：

:::caution
Firefox は ESP デバイスでのファームウェアフラッシュをサポートしていません。代わりに Google Chrome または Microsoft Edge を使用してください。
:::

<Tabs>
<TabItem value='Web Tool' label='Web ツール'>

この [Web ツール](https://limengdu.github.io/2-Channel_Relay_based_on_XIAO_ESP32C3/) を使用して、簡単で直接的な方法でファームウェアをフラッシュできます。画面の指示に従ってください。

- `CONNECT` ボタンをクリックして接続を開始します。ツールが自動的にファームウェアを更新します。

何か問題が発生した場合は、画面のトラブルシューティング手順に従うか、`ESPHome Web` 方法に切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3/releases)から `bin` ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍する必要があります）。

1. センサーキットを PC に接続します。
2. [ESPHome Web](https://web.esphome.io/) ページにアクセスします。
3. `*.factory.bin` 拡張子のファームウェアファイルを選択します。

ESPHome Web を介したファームウェアフラッシュの詳細なウォークスルーについては、以下のビデオをご覧ください：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアが更新され、Home Assistant との統合の準備が整います。

### ステップ 3: ネットワーク設定

1. **アクセスポイントの有効化**:
   - 初回電源投入時、モジュールは Wi-Fi ネットワーク（SSID: `seeedstudio-relay`）を作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2ch_relay_wifi_list.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **設定へのアクセス**:
   - 電話または PC を使用してネットワークに接続します。
   - ブラウザを開き、`http://192.168.4.1` に移動します。
   - ホーム Wi-Fi ネットワークの SSID とパスワードを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant 統合**:
   - ホームネットワークに接続されると、モジュールは Home Assistant の `Settings -> Devices & Services` で発見可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

この方法で、モジュールを Home Assistant ネットワークに接続し、Home Assistant に発見させることができます。

### ステップ 4: モジュールデバイスの追加

1. **自動発見**:
   - **ESPHome** が Home Assistant にインストールされていることを確認します。
   - `Settings -> Devices & Services -> Integrations` に移動し、デバイスを探します。
2. **手動設定**:
   - 自動的に発見されない場合は、IP アドレスを指定してデバイスを手動で追加します。

デバイスを追加した後、Overview ページで両方のスイッチを確認できます。各スイッチの名前を個別に設定することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/ha_switch_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

## 安全性とメンテナンス

1. 配線の摩耗や損傷を定期的に点検してください。
2. ヒューズやブレーカーなどの適切な回路保護装置を使用してください。
3. デバイスを水や過度の熱から遠ざけてください。

## よくある質問

1. **デバイスが Wi-Fi から切断された場合はどうなりますか？**
   - モジュールは自動的に再接続を試みます。失敗した場合は、再設定のためにフォールバックアクセスポイントを有効にします。
2. **AC 電源に接続中に USB ポートを使用できますか？**
   - いいえ、AC 電源に接続中に USB を使用すると、デバイスが損傷したり安全上の危険が生じる可能性があります。
3. **このモジュールは Home Assistant なしで動作しますか？**
   - はい、モジュールは**ローカル IP アドレス**経由で制御したり、ESPHome や MQTT をサポートする他のプラットフォームと統合したりできます。

## リソース

- **GitHub リポジトリ**: [Seeed Studio デュアルチャンネルリレーモジュール GitHub ページ](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_2_channel_wifi_ac_energy_meter)で ESPHome ファームウェアにアクセスできます。
- **デュアルチャンネルリレーモジュール回路図**: [Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/resource/Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf)。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
