---
title: XIAO 2チャンネルWi-Fi ACエネルギーメーターをHome Assistantで使用する
description: |
  AC電源の家電製品の電力使用量を検出するために設計されたSeeed Studioのスマートデバイス。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.webp
slug: /ja/2_channel_wifi_ac_energy_meter
keywords:
  - XIAO
  - Home Assistant
  - エネルギーメーター
  - スマートホーム
sidebar_position: 5
last_update:
  author: Hugo
  date: 05/15/2025
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# XIAO 2チャンネルWi-Fi ACエネルギーメーターをHome Assistantで使用する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.jpg" style={{width:680, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

## 概要
**[XIAO 2チャンネルWi-Fi ACエネルギーメーター](https://www.seeedstudio.com/)**は、Seeed Studioが設計したスマートデバイスで、AC電源の家電製品の電力使用量を検出するために使用されます。このデバイスは2チャンネル構成を持ち、それぞれ独立して2つの負荷を検出することが可能です。スマートホーム環境でさまざまなデバイスを自動化するための優れた選択肢です。

このガイドでは、初心者からスマートホーム愛好家までのユーザー向けに、セットアップ、統合、そして高度な設定を含む詳細な手順を提供します。

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
            <th>チャンネル数</th>
            <td>2 (各チャンネル独立検出)</td>
        </tr>
        <tr>
            <th>接続タイプ</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>入力端子</th>
            <td>L (ライブ), N (ニュートラル), PE (保護接地)</td>
        </tr>
        <tr>
            <th>電流検出の有効範囲</th>
            <td>10mA-35A @ 1mΩ</td>
        </tr>
        <tr>
            <th>有効電力</th>
            <td>1w-7700w @ 1mΩ</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全上の注意

配線を行う前に必ずAC電源を切断してください。

:::

### 外観と接続

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_wiring.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

- **L (ライブ)**: AC電源供給からライブ線を接続します。
- **N (ニュートラル)**: AC電源供給からニュートラル線を接続します。
- **PE (保護接地)**: AC電源供給から保護接地線を接続します。
- **CT1, CT2 (電流トランスフォーマー)**: 電流トランスフォーマーの固定具をライブ線にクランプし、矢印が電源端から負荷端に向かうようにします。

#### 電流トランスフォーマーの取り付け

1. まず、固定具を開き、ワイヤーをその円形部分に配置します。

<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/CT_install_step1.jpg"   
        style={{   
            width: '300px',   
            height: '300px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

2. 次に、バックルを締め、しっかり押して「カチッ」という音が聞こえたら、取り付けが完了です。

<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/CT_install_step2.gif"   
        style={{   
            width: '300px',   
            height: '300px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

:::warning 電流トランスフォーマー固定具の取り付け

固定具を取り付ける際は、電流の方向が固定具の矢印で示された方向と一致していることを確認してください。

<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/current_flow_direction.jpg"   
        style={{   
            width: '300px',   
            height: '300px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

:::

## はじめに

### 必要条件

1. **主要コンポーネント**:
   - [XIAO 2-Channel Wi-Fi AC Energy Meter](https://www.seeedstudio.com/)
   - [非侵襲型AC電流トランスフォーマー](https://www.seeedstudio.com/Non-invasive-AC-Current-Sensor-100A-ma-p-547.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **ネットワーク**:
   - ハードウェアとHome Assistant間の円滑な通信を可能にする安定したWi-Fi。

### ステップ1: Home Assistantのセットアップ {#setting-up-home-assistant}

1. **インストール**: [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)には、homeassistantがすでにプリインストールされています。
2. **ESPHomeアドオンの有効化**:
   - Home Assistantのダッシュボードにアクセスします。
   - 「アドオン」セクションに移動し、ESPHomeアドオンを検索します。
   - 「インストール」をクリックし、その後「開始」をクリックして有効化します。
   - インストール後、XIAO ESP32C6との適切な通信を確保するためにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを収集し、ESPHomeアドオンを使用してHome Assistantをセットアップすることで、XIAO 2-Channel Wi-Fi AC Energy Meterの統合を進める準備が整います。

### ステップ2: エネルギーメーターの準備

デフォルトでは、デバイス（XIAO ESP32C6）はXIAO 2-Channel Wi-Fi AC Energy Meter用のファームウェアがプリフラッシュされています。ただし、以下の2つのシナリオではファームウェアを更新する必要があります：

1. **ファームウェアの再フラッシュ**: 既存のファームウェアが破損している場合や、新しい状態から始めたい場合。
2. **ファームウェアのアップグレード**: 機能が改善された新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュする簡単な方法は2つあります：

:::caution
FirefoxはESPデバイスのファームウェアフラッシュをサポートしていません。Google ChromeまたはMicrosoft Edgeを使用してください。
:::

<Tabs>
<TabItem value='Web Tool'>

この[Web Tool](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/)を使用すると、簡単かつ直接的にファームウェアをフラッシュできます。画面上の指示に従うだけです。

- `CONNECT`ボタンをクリックして接続を開始します。このツールは自動的にファームウェアを更新します。

問題が発生した場合は、画面上のトラブルシューティング手順に従うか、`ESPHome Web`メソッドに切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases)から`bin`ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍してください）。

1. センサーキットをPCに接続します。
2. [ESPHome Web](https://web.esphome.io/)ページにアクセスします。
3. `*.factory.bin`という接尾辞のファームウェアファイルを選択します。

以下の動画で、ESPHome Webを使用したファームウェアフラッシュの詳細な手順をご覧ください：

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="ESPHome Webを使用したファームウェアインストール" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

どちらの方法でも、ファームウェアを更新し、Home Assistantとの統合の準備が整います。

### ステップ3: ネットワーク設定

1. **アクセスポイントの有効化**:
   - 初回起動時に、モジュールはWi-Fiネットワーク（SSID: `SeeedStudio-2CH-EM`）を作成します。

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

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_add_new_device.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div> -->

<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_add_new_device.png"   
        style={{   
            width: '680px',   
            height: 'auto',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

1. **手動設定**:
   - 自動的に検出されない場合は、デバイスのIPアドレスを指定して手動で追加します。

デバイスを追加すると、概要ページで照明制御スイッチ、2チャンネルの電流使用量、2チャンネルの電力消費量、総電圧値を確認できます。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div> -->
<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_overview.png"   
        style={{   
            width: 'auto',   
            height: '680px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  

<br />
任意の行アイコンをクリックすると、対応する値とその最近の変更をより詳細に確認することができます。これらは折れ線グラフで表されています。
<br /><br />

<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_dashboard_detail.png"   
        style={{   
            width: '680px',   
            height: 'auto',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  

## 安全性とメンテナンス

1. 定期的に配線の摩耗や損傷を点検してください。
2. ヒューズやブレーカーなど、適切な回路保護装置を使用してください。
3. デバイスを水や過度の熱から遠ざけてください。

## よくある質問 (FAQs)

1. **デバイスがWi-Fiから切断された場合はどうなりますか？**
   - モジュールは自動的に再接続を試みます。再接続に失敗した場合、再設定のためにフォールバックアクセスポイントを有効にします。

2. **デバイスが突然電力を失った場合、どうすればよいですか？**
   - デバイスが突然電力を失った場合、電流変成器の固定具を取り外したい場合は、デバイスが再起動して正常に動作するまで待ってから取り外してください。そうしないとデバイスが損傷する可能性があります。

## リソース
- **GitHubリポジトリ**: ESPHomeファームウェアは[Seeed Studio Dual Channel Energy Meter GitHubページ](https://github.com/ZhangKeLiang0627/2-Channel_Energy_Meter_based_on_XIAO_ESP32C6)でアクセスできます。

- **デュアルチャンネルエネルギーメーター回路図**: [Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/resource/Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf)

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>