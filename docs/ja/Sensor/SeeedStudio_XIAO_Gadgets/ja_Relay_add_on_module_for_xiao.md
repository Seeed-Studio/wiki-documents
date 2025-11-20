---
title: XIAO用リレーアドオンモジュール
description: XIAO用リレーアドオンモジュールは、AC電源機器を制御するためにSeeed Studioが設計したスマートモジュールです。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.webp
slug: /ja/relay_add_on_module_for_xiao
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 3
last_update:
  author: Allen
  date: 12/02/2024
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.jpg" /></div>

## 概要

XIAO用リレーアドオンモジュールは、AC電源機器を制御するためにSeeed Studioが設計したスマートモジュールです。XIAOとの組み合わせが特徴で、ESPHomeを通じてHome Assistantにアクセスし、様々な機器を制御することで、あなたの家をよりスマートにします！

### 主要機能と仕様

| パラメータ               | 値           |
|-------------------------|----------------|
| 動作電圧       | 5V             |
| 動作電流       | 1A           |
| リレー寿命              | 100,000サイクル   |
| 最大スイッチング電圧    | 250VAC       |
| 最大スイッチング電流    | 10A             |
| 電気的耐久性    | 1.5x10^4 OPS (10A 250VAC、抵抗負荷、85°C、1秒オン9秒オフ)|

詳細については、[こちらをクリックしてPDFファイルをダウンロード](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.pdf)してください。

## はじめに

このチュートリアルをすべて通して実行したい場合は、以下を準備する必要があります。XIAO ESP32 C3以外にも、XIAO ESP32 C6やXIAO ESP32 S3などの他のESP32シリーズ製品も使用できます。このプロジェクトの最終目標は、Home Assistantでリレーモジュールを制御することです。

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
     <th>リレーモジュール</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
     <td align="center"><div align="center"><img width ="260" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/13.jpg"/></div></td>
 </tr>
 <tr>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
    <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Relay-add-on-module-for-XIAO-p-6310.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
 </tr>
</table>

このチュートリアルの内容は、大まかに以下の手順で進めていきます。

1. [Home Assistant環境を選択する](#select-your-home-assistant-environment)
2. Home AssistantにESPHomeをインストールして設定する
3. [XIAO ESP32C3とESPHomeの接続を設定する](#configure-the-xiao-esp32c3-and-esphome-connection)
4. [リレーモジュールをHome Assistantダッシュボードに追加する](#add-relay-module-to-home-assistant-dashboard)

### 高速ファームウェア書き込み

XIAOのための高速ファームウェア書き込みページを作成しました。以下のサイトを使用して、プログラミングなしで、お持ちのXIAOにリレー用のファームウェアを直接書き込むことができます。このサイトは、接続しているXIAOのチップを自動的に検出し、選択する必要なく、ESP32チップに対応するXIAOファームウェアバージョンを直接書き込みます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Firmware Flasher 🖱️</font></span></strong>
    </a>
</div>

## Home Assistant環境を選択する

このルーチンでは、Home Assistant環境のインストール方法については詳しく説明しません。すでに動作するHome Assistantデバイスをお持ちであることを前提とします。

Home Assistantのインストール方法を学びたい場合は、[公式チュートリアル](https://www.home-assistant.io/installation/)を参照してください。x86デバイスを使用してHome Assistantをインストールすることを強く推奨します。これは、SupervisedでHome Assistantをインストールする最もユーザーフレンドリーな方法です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

上記の表によると、**Home Assistant OS**と**Home Assistant Supervised**をインストールするのが最も適切で、多くの手間を省くことができます。OpenWRTでDocker上でHome Assistantを実行している場合（例：LinkStar H68Kを使用）でも、ご心配なく、これを行う方法についても詳細な参考資料を提供します。

Seeed Studioの一部製品についてHome Assistantのインストール方法も書いていますので、参考にしてください。

- [ODYSSEY-X86でのHome Assistant入門](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)
- [reTerminalでのHome Assistant入門](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)
- [LinkStar H68K/reRouter CM4でのHome Assistant入門](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)

## ステップ1. ESPHomeをインストールする

Home Assistant OSがインストールされている場合、Add-on Storeがあり、ESPHomeのインストールがはるかに簡単になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

Add-on Storeで、ESPHomeを検索してインストールできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

## ステップ2. XIAO ESP32C3にファームウェアをアップロードする

XIAOのための高速ファームウェア書き込みページを作成しました。以下のサイトを使用して、プログラミングなしで、お持ちのXIAOにリレー用のファームウェアを直接書き込むことができます。このサイトは、接続しているXIAOのチップを自動的に検出し、選択する必要なく、ESP32チップに対応するXIAOファームウェアバージョンを直接書き込みます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Firmware Flasher 🖱️</font></span></strong>
    </a>
</div>

## ステップ 3. Home Assistant ダッシュボードにリレーモジュールを追加する

ファームウェアをフラッシュした後、**seedstudio-relay-module** という名前のワイヤレスネットワークが表示されます。このネットワークに接続し、ブラウザで `192.168.4.1` にアクセスしてデバイスのネットワークを設定してください。Home Assistant と同じネットワークを使用してください。

**設定** に移動し、**デバイスとサービス** を選択します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/5.png" /></div>

**発見済み** エリアで XIAO を見つけ、**設定** をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/2.png" /></div>

エリアを選択するか、デフォルトのままにして、**完了** をクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/4.png" /></div>

その後、**デバイス** をクリックし、**xiao_esp32c3**（以前に名前を付けたもの）を見つけてクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/6.png" /></div>

これは ESPHome デバイスページです。ここでオートメーションなどを追加できます。今はダッシュボードに追加する必要があるので、クリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/7.png" /></div>

**次へ** をクリックし、**ダッシュボードに追加** をクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/8.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/9.png" /></div>

次に、左側の **概要** をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/10.png" /></div>

リレー制御がここに表示されます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/11.png" /></div>

### ステップ 7. リレーモジュールを使用してテーブルランプを制御する

スイッチをクリックして、リレーが正常に動作するかどうかを確認できます。スイッチをクリックしたときにボード上の小さな緑色のライトが点灯すれば、正常に動作しています！

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<br></br>
私はこのリレーモジュールで小さなテーブルランプを改造しました。プラス線を切断し、リレーモジュールの2つのポートのそれぞれに接続します。以下のビデオで効果を確認できます。このリレーモジュールは XIAO に電力を供給できないため、バッテリーまたは USB ケーブルを使用して XIAO に電力を供給することを忘れないでください。

:::warning
電気の安全に注意し、電源投入中はリレーに触れないでください。
:::

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/light.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

XIAO 用リレーモジュールの旅を無事に完了おめでとうございます！より興味深い改造を行いましょう！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
