---
title: Home Assistantでの2チャンネルWi-Fi ACリレーモジュール
description: |
  AC電源の家電をワイヤレスで制御するためにSeeed Studioが設計したスマートデバイス
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/dual_smart_relay_module_for_xiao_45font.webp
slug: /ja/2_channel_wifi_ac_relay
keywords:
  - XIAO
  - Home Assistant
  - ACリレー
  - スマートホーム
sidebar_position: 2
last_update:
  author: Spencer
  date: 05/15/2025
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Home Assistantでの2チャンネルWi-Fi ACリレーモジュールの使い方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2-114993526-dual-smart-relay-module-for-xiao-45font.jpg" style={{width:420, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

## 概要

**[2チャンネルWi-Fi ACリレーモジュール](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)**は、Seeed Studioが設計したスマートデバイスで、AC電源の家電をワイヤレスで制御するためのものです。このデバイスは2チャンネル構成で、2つの負荷を独立して制御することが可能です。これにより、照明、ファン、その他のデバイスをHome Assistant環境で自動化するのに最適な選択肢となります。

このガイドでは、初心者からスマートホーム愛好家まで幅広いユーザー向けに、セットアップ、統合、そして高度な設定を含む詳細な手順を提供します。

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
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>出力電圧</th>
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>最大負荷</th>
            <td>各チャンネル10A</td>
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
            <td>N（ニュートラル）、L（ライブ）</td>
        </tr>
        <tr>
            <th rolspan="2">出力端子</th>
            <td><b>チャンネル1:</b> N1（ニュートラル）、L1（ライブ） <br></br> <b>チャンネル2:</b> N2（ニュートラル）、L2（ライブ）</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全上の注意

リレーの配線を行う前に必ずAC電源を切断してください。電気的な危険を防ぐため、デバイスがAC電源に接続されている間はUSBポートを使用しないでください。

:::

### 外観と接続

#### 入力端子と出力端子

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/relay_connections.png" style={{width: 600, height: 'auto'}}/></div>

- 入力
  - **N（ニュートラル）**: AC電源供給からニュートラル線を接続します。
  - **L（ライブ）**: AC電源供給からライブ線を接続します。
- 出力
  - チャンネル1
    - **N1（ニュートラル）**: リレー1に接続された負荷のニュートラル線。
    - **L1（ライブ）**: リレー1に接続された負荷のライブ線。
  - チャンネル2
    - **N2（ニュートラル）**: リレー2に接続された負荷のニュートラル線。
    - **L2（ライブ）**: リレー2に接続された負荷のライブ線。

## はじめに

### 必要条件

1. **主要コンポーネント**:
   - [2チャンネル Wi-Fi AC リレーモジュール](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **ネットワーク**:
   - ハードウェアとHome Assistant間の円滑な通信を可能にする安定したWi-Fi。

### ステップ1: リレーモジュールのセットアップ (物理的セットアップ)

1. **インストール**: [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)には、Home Assistantがすでにプリインストールされています。
2. **ESPHomeアドオンの有効化**:
   - Home Assistantのダッシュボードにアクセスします。
   - 「アドオン」セクションに移動し、ESPHomeアドオンを検索します。
   - 「インストール」をクリックし、その後「開始」をクリックして有効化します。
   - インストール後、XIAO ESP32C3との適切な通信を確保するためにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを集め、Home AssistantにESPHomeアドオンを設定することで、2チャンネルWi-Fi ACリレーモジュールの統合を進める準備が整います。

### ステップ2: リレーモジュールの準備

デフォルトでは、デバイス (XIAO ESP32C3) は2チャンネルWi-Fi ACリレーモジュール用のファームウェアがプリフラッシュされています。ただし、以下の2つのシナリオではファームウェアの更新が必要になる場合があります:

1. **ファームウェアの再フラッシュ**: 既存のファームウェアが破損している場合や、新しい状態から始めたい場合。
2. **ファームウェアのアップグレード**: 機能が改善された新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュするには、以下の2つの簡単な方法があります:

:::caution
FirefoxはESPデバイスのファームウェアフラッシュをサポートしていません。Google ChromeまたはMicrosoft Edgeを使用してください。
:::

<Tabs>
<TabItem value='Web Tool'>

この[Web Tool](https://limengdu.github.io/2-Channel_Relay_based_on_XIAO_ESP32C3/)を使用すると、簡単かつ直接的にファームウェアをフラッシュできます。画面上の指示に従ってください。

- `CONNECT`ボタンをクリックして接続を開始します。このツールは自動的にファームウェアを更新します。

問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web`メソッドに切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3/releases)から`bin`ファームウェアファイルをダウンロードする必要があります(ダウンロードしたファイルを解凍してください)。

1. センサーキットをPCに接続します。
2. [ESPHome Web](https://web.esphome.io/)ページにアクセスします。
3. `*.factory.bin`という接尾辞の付いたファームウェアファイルを選択します。

以下の動画で、ESPHome Webを使用したファームウェアフラッシュの詳細な手順をご覧ください:

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="ESPHome Webを使用したファームウェアインストール" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアを更新し、Home Assistantとの統合の準備が整います。

### ステップ3: ネットワーク設定

1. **アクセスポイントの有効化**:
   - 初回起動時に、モジュールはWi-Fiネットワーク (SSID: `seeedstudio-relay`) を作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2ch_relay_wifi_list.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **設定へのアクセス**:
   - 携帯電話またはPCを使用してネットワークに接続します。
   - ブラウザを開き、`http://192.168.4.1`に移動します。
   - 自宅のWi-FiネットワークのSSIDとパスワードを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant統合**:
   - 自宅のネットワークに接続すると、モジュールはHome Assistantの`設定 -> デバイスとサービス`で検出可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

この方法で、モジュールをHome Assistantネットワークに接続し、Home Assistantに検出させることができます。

### ステップ4: モジュールデバイスの追加

1. **自動検出**:
   - **ESPHome**がHome Assistantにインストールされていることを確認します。
   - `設定 -> デバイスとサービス -> 統合`に移動し、デバイスを探します。
2. **手動設定**:
   - 自動的に検出されない場合は、デバイスのIPアドレスを指定して手動で追加します。

デバイスを追加すると、概要ページに両方のスイッチが表示されます。また、各スイッチの名前を個別に設定することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/ha_switch_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

## 安全性とメンテナンス

1. 配線の摩耗や損傷を定期的に点検してください。
2. ヒューズやブレーカーなど、適切な回路保護装置を使用してください。
3. デバイスを水や過度の熱から遠ざけてください。

## よくある質問 (FAQs)

1. **デバイスがWi-Fiから切断された場合はどうなりますか？**
   - モジュールは自動的に再接続を試みます。再接続に失敗した場合、再設定のためにフォールバックアクセスポイントを有効にします。
2. **AC電源に接続している間にUSBポートを使用できますか？**
   - いいえ、AC電源に接続している間にUSBを使用すると、デバイスが損傷したり、安全上の問題が発生する可能性があります。
3. **このモジュールはHome Assistantなしで動作しますか？**
   - はい、このモジュールは**ローカルIPアドレス**を介して制御することができ、ESPHomeやMQTTをサポートする他のプラットフォームと統合することも可能です。

## リソース

- **GitHubリポジトリ**: ESPHomeファームウェアは[Seeed Studio Dual Channel Relay Module GitHubページ](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3)でアクセスできます。
- **デュアルチャンネルリレーモジュール回路図**: [Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/resource/Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf)。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>