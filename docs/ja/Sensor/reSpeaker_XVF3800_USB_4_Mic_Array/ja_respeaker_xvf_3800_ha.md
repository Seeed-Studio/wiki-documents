---
description: ReSpeaker XVF3800 USB 4マイクアレイの力を体験してください。AEC、ビームフォーミング、ノイズ抑制、360°音声キャプチャを備えた高度な円形マイクアレイです。コンパクトなXIAO ESP32S3と組み合わせることで、スマートデバイス、ロボティクス、IoTアプリケーション向けの高性能音声制御を実現します。Home Assistantとのシームレスな統合を実演し、音声コマンドでデバイスを制御する方法をご紹介します。

title: Home Assistantによるスマートホーム音声制御

keywords:
- reSpeaker
- XIAO
- ESP32S3
- Home Assistant
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /ja/respeaker_xvf3800_xiao_home_assistant
last_update:
  date: 7/30/2025
  author: Kasun Thushara
---

## 概要

新しい**ReSpeaker XMOS XVF3800 with XIAO ESP32S3**でスマートスペースと会話しましょう。音声でライトを点灯させたり、音楽を再生したり、天気を尋ねたりできます。

この章では、ReSpeaker XMOS XVF3800 with XIAO ESP32S3 HAボイスアシスタントを使用してSonoffスマートスイッチに接続し、音声によるライトスイッチの制御を実現します。

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/iqlsNezHYuE"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## 必要なハードウェア

<table align="center">
  <tr>
      <th>ReSpeaker XVF3800 with XIAO ESP32S3</th>
        <th>Home Assistantデバイス</th>
        <th>Sonoff BASICR2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home_Assistant_Green/HAyellow.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991074-sonoff-basicr2-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Standard-Version-with-CM4-p-5809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Sonoff-BasicR2-p-5514.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## ファームウェア更新

最高の再生体験を得るために、XMOSファームウェアを更新する必要があります。
ファームウェアをここからダウンロードしてください。コンピューターで、ReSpeaker XMOS XVF3800とXIAO ESP32S3を接続し、ガイドに従って実行してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_firmware.PNG" alt="pir" width={800} height="auto" /></p>

:::note
XVF3800マイクアレイは動作するために12.288 MHz MCLKが必要ですが、ESPHome（Home Assistantで使用）はAPI制限のため生成できません。このファームウェアはXVF3800をI2Sマスターとして動作させ、ESP32からのMCLKを必要とせずに独自のクロックを生成できるようにします。
私たちのファームウェアはこの制限を修正し、マイクがHome Assistantで正常に動作するようにします。
:::

ファームウェアは[こちら](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)からダウンロードできます

インストールガイドは[こちら](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#update-firmware)です

## ReSpeaker XMOS XVF3800とXIAO ESP32S3の準備

**Home Assistant > Settings > Add-ons**に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_Settings.PNG" alt="pir" width={800} height="auto" /></p>

**Add-on Store**をクリックします（通常は右下にあります）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_addon.PNG" alt="pir" width={800} height="auto" /></p>

**Official add-ons**の下で、**ESPHome Device Builder**を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome.PNG" alt="pir" width={800} height="auto" /></p>

インストール後、**Start**をクリックしてESPHomeアドオンを実行します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_Start.PNG" alt="pir" width={800} height="auto" /></p>

簡単にアクセスできるように、**Start on Boot、Watchdog、Show in Sidebar**を有効にします。

Home Assistantサイドバーから、**ESPHome Builder**に移動します。

**+ NEW DEVICE**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_add_new.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_device.PNG" alt="pir" width={500} height="auto" /></p>

プロンプトが表示されたら、**SKIP**をクリックします - 設定を手動で作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_skip.PNG" alt="pir" width={500} height="auto" /></p>

新しいデバイスエントリを選択し、**EDIT**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_respeaker_device.PNG" alt="pir" width={800} height="auto" /></p>

内容をカスタム**YAML設定**に置き換えます

YAMLファイルは[こちら](https://github.com/respeaker/reSpeaker_XVF3800_ESPHome_Assistant)から見つけることができます

YAMLが保存されたら、**INSTALL**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_yaml.PNG" alt="pir" width={800} height="auto" /></p>

**Manual Download**を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_manual.PNG" alt="pir" width={800} height="auto" /></p>

ファームウェアのコンパイルを待ちます。

生成された.binファームウェアファイルをコンピューターにダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_factory.PNG" alt="pir" width={800} height="auto" /></p>

**ESP32-S3**ボード（XVF3800が接続された状態）を**USB Type-Cケーブル**を使用してPCに接続します。

ChromeまたはEdgeで[**Web-ESPHome**](https://web.esphome.io/?dashboard_wizard)を開きます。

**CONNECT**をクリックし、適切なシリアルポートを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/connect-port.png" alt="pir" width={800} height="auto" /></p>

接続されたら、**INSTALL**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_install.PNG" alt="pir" width={500} height="auto" /></p>

ダウンロードした.binファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_bin_write.PNG" alt="pir" width={500} height="auto" /></p>

インストールが完了するまで待ちます（数分かかる場合があります）。

成功すると、確認メッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_congrats.PNG" alt="pir" width={500} height="auto" /></p>

**Home Assistant > Settings > Devices & Services**に戻ります。

**ESPHome**が発見された統合として表示されているはずです。

**CONFIGURE**をクリックし、次に**Submit**をクリックしてセットアップを完了します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_discover.PNG" alt="pir" width={800} height="auto" /></p>

## スマートデバイスの追加

メーカーのユーザーマニュアルに従って **Sonoff BASICR2** デバイスをセットアップしてください。eWeLinkアカウントを作成する必要があります。

### HACSのインストール

まだインストールしていない場合は、公式ガイドに従って [**Home Assistant Community Store**](https://hacs.xyz/docs/use/) をセットアップしてください：

サイドバーから **HACS** を開きます。
検索セクションで **Sonoff LAN** を検索します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_HACS.PNG" alt="pir" width={800} height="auto" /></p>

**Install** をクリックして統合を追加します。
変更を適用するために Home Assistant を再起動します。

### Sonoff

**設定 → デバイスとサービス** に移動します。
**統合を追加** をクリックします。
**Sonoff** を検索して選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_sonoff.PNG" alt="pir" width={800} height="auto" /></p>

認証のために **eWeLinkアカウントの認証情報** を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/credentials.png" alt="pir" width={500} height="auto" /></p>

正常に接続されると、関連するエンティティが以下の場所に一覧表示されます：
**設定 → デバイスとサービス → エンティティ**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/sonoff-id.png" alt="pir" width={800} height="auto" /></p>

## Nabu Cloudを使用した音声アシスタント

このデモでは、音声を使用して **Home Assistant Cloud (Nabu Casa)** に接続する方法を紹介しています。セットアップは簡単で、**1ヶ月間の無料トライアル** を利用してその全機能を探索できます。
内蔵の **ウェイクワード**: "Okay Nabu" を使用して、音声コマンドを簡単にトリガーし、複雑な設定なしに **いつでも、どこでも** デバイスやサービスと **シームレスに統合** できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice_nabu.PNG" alt="pir" width={800} height="auto" /></p>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
