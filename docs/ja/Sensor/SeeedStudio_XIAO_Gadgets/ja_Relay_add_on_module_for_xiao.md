---
title: XIAO用リレーアドオンモジュール
description: XIAO用リレーアドオンモジュールは、Seeed Studioが設計したAC電源機器を制御するためのスマートモジュールです。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.webp
slug: /ja/relay_add_on_module_for_xiao
keywords:
  - XIAO
  - Home Assistant
  - ACリレー
  - スマートホーム
sidebar_position: 3
last_update:
  author: Allen
  date: 05/15/2025
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.jpg" /></div>

## 概要

XIAO用リレーアドオンモジュールは、Seeed Studioが設計したAC電源機器を制御するためのスマートモジュールです。このモジュールはXIAOと組み合わせて使用され、ESPHomeを通じてHome Assistantに接続し、さまざまな家電を制御することで、よりスマートな家庭環境を実現します。

### 主な特徴と仕様

| パラメータ               | 値               |
|-------------------------|----------------|
| 動作電圧               | 5V             |
| 動作電流               | 1A             |
| リレー寿命             | 100,000サイクル |
| 最大スイッチング電圧   | 250VAC         |
| 最大スイッチング電流   | 10A            |
| 電気的耐久性           | 1.5x10^4 OPS (10A 250VAC、抵抗負荷、85°C、1秒オン9秒オフ)|

詳細については、[こちらからPDFファイルをダウンロード](https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay_module.pdf)してください。

## はじめに

このチュートリアルをすべて実行するには、以下の準備が必要です。XIAO ESP32 C3以外にも、XIAO ESP32 C6やXIAO ESP32 S3などの他のESP32シリーズ製品を使用することもできます。このプロジェクトの最終目標は、Home Assistantでリレーモジュールを制御することです。

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

このチュートリアルの内容は、以下のステップを大まかに進めていきます。

1. [Home Assistant環境を選択する](#select-your-home-assistant-environment)
2. [Home AssistantでESPHomeをインストールして設定する](#install-and-configure-esphome-in-home-assistant)
3. [XIAO ESP32C3とESPHomeの接続を設定する](#configure-the-xiao-esp32c3-and-esphome-connection)
4. [リレーモジュールをHome Assistant ダッシュボードに追加する](#add-relay-module-to-home-assistant-dashboard)

### 高速ファームウェアフラッシュ

XIAO用に高速ファームウェアフラッシュページを作成しました。以下のサイトを直接使用して、プログラミングなしでお持ちのXIAOにリレーのファームウェアをフラッシュできます。このサイトは接続しているXIAOのチップを自動的に検出し、選択する必要なく、ESP32チップに対応するXIAOファームウェアバージョンを直接フラッシュします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ファームウェアフラッシャー 🖱️</font></span></strong>
    </a>
</div>

## Home Assistant 環境を選択する

この手順では、Home Assistant 環境のインストール方法については詳しく説明しません。すでに動作する Home Assistant デバイスをお持ちであることを前提としています。

もし Home Assistant のインストール方法を学びたい場合は、[公式チュートリアル](https://www.home-assistant.io/installation/)をご参照ください。Home Assistant を Supervised でインストールする最もユーザーフレンドリーな方法として、x86 デバイスを使用することを強くお勧めします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

上記の表に基づくと、**Home Assistant OS** と **Home Assistant Supervised** をインストールするのが最適であり、多くの手間を省くことができます。もし OpenWRT を使用した Docker 上で Home Assistant を実行している場合（例：LinkStar H68K を使用）、心配しないでください。この方法についても詳細な参考資料を提供します。

また、Seeed Studio 製品のいくつかに対して Home Assistant のインストール方法を記載していますので、以下をご参照ください。

- [ODYSSEY-X86 での Home Assistant の始め方](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)
- [reTerminal での Home Assistant の始め方](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)
- [LinkStar H68K/reRouter CM4 での Home Assistant の始め方](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)

## ステップ 1. ESPHome をインストールする

Home Assistant OS をインストールしている場合、Add-on Store が含まれており、ESPHome のインストールが非常に簡単になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

Add-on Store で ESPHome を検索してインストールできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

## ステップ 2. XIAO ESP32C3 にファームウェアをアップロードする

XIAO 用のクイックフラッシュファームウェアページを作成しました。以下のサイトを直接使用して、プログラミングなしで XIAO 用のリレーのファームウェアをフラッシュできます。このサイトは接続している XIAO のチップを自動的に検出し、ESP32 チップに対応する XIAO ファームウェアバージョンを直接フラッシュします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Relay_Module_for_XIAO/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ファームウェアフラッシャー 🖱️</font></span></strong>
    </a>
</div>

## ステップ 3. リレーモジュールを Home Assistant ダッシュボード に追加する

ファームウェアをフラッシュした後、**seedstudio-relay-module** という名前の無線ネットワークが表示されます。このネットワークに接続し、ブラウザで `192.168.4.1` を入力してデバイスのネットワークを設定してください。Home Assistant と同じネットワークを使用してください。

**設定** に移動し、**デバイスとサービス** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/5.png" /></div>

**検出済み** エリアで XIAO を見つけ、**CONFIGURE** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/2.png" /></div>

エリアを選択するか、デフォルトのままにして **FINISH** をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/4.png" /></div>

その後、**デバイス** をクリックし、**xiao_esp32c3**（以前に名前を付けたもの）を見つけてクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/6.png" /></div>

ここは ESPHome デバイスページです。自動化を追加するなどが可能です。次にダッシュボードに追加する必要があるので、それをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/7.png" /></div>

**NEXT** をクリックし、**ADD TO DASHBOARD** をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/8.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/9.png" /></div>

左側の **Overview** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/10.png" /></div>

ここにリレーコントロールが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/11.png" /></div>

### ステップ 7. リレーモジュールを使用してテーブルランプを制御する

スイッチをクリックしてリレーが正常に動作するか確認できます。スイッチをクリックしたときに基板上の小さな緑色のライトが点灯すれば、正常に動作しています！

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/relay.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<br></br>
このリレーモジュールを使用して小さなテーブルランプを改造しました。プラスの配線を切断し、それをリレーモジュールの 2 つのポートにそれぞれ接続します。以下のビデオでその効果を見ることができます。このリレーモジュールは XIAO に電力を供給できないため、バッテリーまたは USB ケーブルを使用して XIAO に電力を供給することを忘れないでください。

:::warning
電気の安全に注意し、通電中にリレーに触れないでください。
:::

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/relay_module_for_xiao/light.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/6.png" style={{width:1000, height:'auto'}}/></div>

リレーモジュール For XIAO の旅を無事に完了したことをおめでとうございます！さらに面白い改造をしてみましょう！

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>