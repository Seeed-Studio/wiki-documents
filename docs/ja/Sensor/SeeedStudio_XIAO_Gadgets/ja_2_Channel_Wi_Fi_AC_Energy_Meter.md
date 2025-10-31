---
title: XIAO 2チャンネル Wi-Fi AC エネルギーメーター In Home Assistant
description: |
  AC電源機器の電力使用量を検出するために設計されたSeeed Studioのスマートデバイス。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.webp
slug: /ja/2_channel_wifi_ac_energy_meter
keywords:
  - XIAO
  - Home Assistant
  - Energy Meter
  - Smart Home
sidebar_position: 5
last_update:
  author: Hugo
  date: 04/01/2025
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# XIAO 2チャンネル Wi-Fi AC エネルギーメーター In Home Assistant の使い方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.jpg" style={{width:680, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div><br />

## 概要

**[XIAO 2チャンネル Wi-Fi AC エネルギーメーター](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)** は、AC電源機器の電力使用量を検出するために設計されたSeeed Studioのスマートデバイスです。デュアルチャンネル構成により、最大2つの負荷の独立した検出をサポートし、スマートホーム環境でさまざまなデバイスを自動化するための優れた選択肢となっています。

このガイドでは、初心者からスマートホーム愛好家まで、幅広いユーザー向けにセットアップ、統合、高度な設定を含む詳細なウォークスルーを提供します。

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
            <th>チャンネル数</th>
            <td>2（各チャンネル独立検出）</td>
        </tr>
        <tr>
            <th>接続タイプ</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>入力端子</th>
            <td>L（ライブ）、N（ニュートラル）、PE（保護接地）</td>
        </tr>
        <tr>
            <th>電流検出の有効範囲</th>
            <td>10mA-100A @ 1mΩ（CTモード）</td>
        </tr>
        <tr>
            <th>有効電力エネルギー</th>
            <td>1w-7700w @ 1mΩ</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全警告

配線前は必ずAC電源を切断してください。

:::

### 物理レイアウトと接続

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_wiring.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

- **L (ライブ)**: AC電源からのライブ線を接続します。
- **N (ニュートラル)**: AC電源からのニュートラル線を接続します。
- **PE (保護接地)**: AC電源からの保護接地線を接続します。
- **CT1, CT2 (変流器)**: 変流器の固定具をライブ線にクランプし、矢印が電源側から負荷側を向くようにします。

#### 変流器の設置

1. まず、固定具を開いて、線を円形エリアに配置します。

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

2. 次にバックルを締め、しっかりと押して「カチッ」という音が聞こえれば設置完了です。

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

:::warning 変流器固定具の設置

固定具を設置する際は、電流の方向が固定具の矢印で示された方向と一致することを確認してください。

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

### 必要なもの

1. **コアコンポーネント**:
   - [XIAO 2チャンネル Wi-Fi AC エネルギーメーター](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)
   - [非侵襲型AC変流器](https://www.seeedstudio.com/Non-invasive-AC-Current-Sensor-100A-ma-p-547.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **ネットワーク**:
   - ハードウェアとHome Assistantの間のシームレスな相互作用のための安定したWi-Fi。

### ステップ1: Home Assistantのセットアップ {#setting-up-home-assistant}

1. **インストール**: homeassistantは[Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)に既にプリインストールされています。
2. **ESPHome アドオンの有効化**:
   - Home Assistantダッシュボードにアクセスします。
   - 「アドオン」セクションに移動し、ESPHome アドオンを検索します。
   - 「インストール」をクリックし、次に「開始」をクリックして有効にします。
   - インストール後、XIAO ESP32C6との適切な通信を確保するためにアドオンを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

必要なコンポーネントを収集し、ESPHome アドオンでHome Assistantをセットアップすることで、XIAO 2チャンネル Wi-Fi AC エネルギーメーターの統合を進める準備が整います。

### ステップ2: エネルギーメーターの準備

デフォルトでは、お使いのデバイス（XIAO ESP32C6）にはXIAO 2チャンネル Wi-Fi AC エネルギーメーター用のファームウェアがプリフラッシュされています。ただし、ファームウェアの更新が必要な場合が2つあります：

1. **ファームウェアの再フラッシュ**: 既存のファームウェアが破損している場合や、新しく開始する必要がある場合。
2. **ファームウェアのアップグレード**: 機能が改善された新しいバージョンのファームウェアがある場合。

ファームウェアをフラッシュする簡単な方法が2つあります：

:::caution
FirefoxはESPデバイスでのファームウェアフラッシュをサポートしていません。代わりにGoogle ChromeまたはMicrosoft Edgeを使用してください。
:::

<Tabs>
<TabItem value='Web Tool'>

簡単で直接的な方法でファームウェアをフラッシュするために、この[Webツール](https://gadgets.seeed.cc/)を使用できます。画面の指示に従ってください。（**SeeedStuido-2CH-EM**を選択してください）

- `CONNECT`ボタンをクリックして接続を開始します。ツールが自動的にファームウェアを更新します。

何か問題が発生した場合は、画面のトラブルシューティング手順に従うか、`ESPHome Web`方法に切り替えてプロセスを完了してください。

</TabItem>
<TabItem value='ESPHome Web'>

この方法では、[こちら](https://github.com/Seeed-Studio/xiao-esphome-projects/releases)から`bin`ファームウェアファイルをダウンロードする必要があります（ダウンロードしたファイルを解凍する必要があります）。

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
   - 初回電源投入時、モジュールはWi-Fiネットワーク（SSID: `SeeedStudio-2CH-EM`）を作成します。

2. **設定へのアクセス**:
   - 電話またはPCを使用してネットワークに接続します。
   - ブラウザを開いて`http://192.168.4.1`に移動します。
   - ホームWi-FiネットワークのSSIDとパスワードを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant 統合**:
   - ホームネットワークに接続されると、モジュールは Home Assistant の `設定 -> デバイスとサービス` で検出可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

この方法で、モジュールを Home Assistant ネットワークに接続し、Home Assistant に検出させることができます。

### ステップ 4: モジュールデバイスを追加する

1. **自動検出**:
   - **ESPHome** が Home Assistant にインストールされていることを確認してください。
   - `設定 -> デバイスとサービス -> 統合` に移動し、デバイスを探してください。

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
   - 自動検出されない場合は、IPアドレスを指定してデバイスを手動で追加してください。

デバイスを追加した後、概要ページで照明制御スイッチ、2チャンネルの電流使用量、2チャンネルの電力消費量、および総電圧値を確認できます。

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
任意の行のアイコンをクリックすることで、対応する値とその最近の変化をより詳細に表示でき、これらは線グラフで表現されます。
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

1. 配線の摩耗や損傷を定期的に点検してください。
2. ヒューズやブレーカーなどの適切な回路保護装置を使用してください。
3. デバイスを水や過度の熱から遠ざけてください。

## FAQs

1. **デバイスがWi-Fiから切断された場合はどうなりますか？**
   - モジュールは自動的に再接続を試行します。失敗した場合は、再設定のためのフォールバックアクセスポイントを有効にします。

2. **デバイスが突然予期せず電源を失った場合はどうすればよいですか？**
   - デバイスが突然電源を失った場合、変流器の固定具を取り外したい場合は、デバイスが再起動して正常に動作するまで待ってから取り外してください。そうしないとデバイスを損傷する可能性があります。

## Resources

- **GitHub Repository**: [Seeed Studio Dual Channel Energy Meter GitHub page](https://github.com/ZhangKeLiang0627/2-Channel_Energy_Meter_based_on_XIAO_ESP32C6)でESPHomeファームウェアにアクセスしてください

- **Dual Channel Energy Meter Schematic**: [Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/resource/Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf)

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
