---
description: このガイドは、SenseCAP Watcher Agent のネットワーク接続の設定と構成を支援します
title: デバイスネットワーク設定ガイド
sidebar_position: 2
keywords:
  - SenseCAP
  - Watcher Agent
  - Network Setup
  - IoT Configuration
  - WiFi Configuration
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /ja/device_network_setup
last_update:
  date: 10/13/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# デバイスネットワーク設定ガイド

このドキュメントは、SenseCAP Watcher Agent のネットワーク設定プロセスをガイドします。以下の手順に従って、デバイスをネットワークに簡単に接続し、開始してください。

以下のビデオは、Web Control Panel を使用してデバイスを設定する方法のステップバイステップチュートリアルです。
<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/6UDVsv953Tw?si=0yD96_pQq1cMjjAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## 前提条件

設定を開始する前に、以下をご用意ください：

- Agent ファームウェアがインストールされた SenseCAP Watcher
- 利用可能な 2.4GHz Wi-Fi ネットワーク（二次認証が必要なネットワーク（企業ネットワークなど）を除く）
- 設定用のモバイルデバイスまたはコンピュータ

## ネットワーク設定手順

### 初期設定

ステップ 1. デバイスの電源を入れる
- デバイスを電源に接続するか、右上角のスクロールホイールボタンを5秒間押し続けてから離します。
:::tip 注意
ファームウェアのフラッシュ直後に設定が開始される場合は、ピンを使用してリセットボタンを軽く押してください。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:200, height:'auto'}}/></div>
:::
- デバイスが電源オンになり、Wi-Fi 設定モードに入ります



### WiFi 設定

ステップ 1. デバイスホットスポットに接続
- モバイルデバイスまたはコンピュータで、「Watcher-XXXX」という名前の WiFi ネットワークを探します
- このネットワークに接続します
- 接続が確立されるまで数秒待ちます
- ブラウザで設定インターフェースが自動的に開きます
:::note
設定ページが自動的に開かない場合は、「Watcher-XXXX」ネットワークに接続されていることを確認し、ウェブブラウザで手動で `http://192.168.4.1` にアクセスしてください。
:::

ステップ 2. WiFi 接続の設定
- WiFi スキャンが完了するまで約5秒待ちます
- 利用可能な 2.4GHz ネットワークのリストから、ご自宅の Wi-Fi ネットワークを選択します
- SSID が自動的に入力されます
- 選択した WiFi ネットワークのパスワードを入力します
- "Connect" ボタンをクリックして送信します

:::note
2.4GHz ネットワークのみがサポートされています
iPhone のホットスポットを使用する場合は、「互換性を優先」オプションを有効にしてください
WiFi スキャンページの読み込みには約5秒かかる場合があります - ページを閉じたりキャンセルしたりしないでください
:::

ステップ 3. 接続プロセスの完了
- WiFi 認証情報が正しい場合、デバイスは自動的に接続されます
- 緑色のチェックマークが表示され、ネットワーク設定が成功したことを示します
- デバイスは3秒後に自動的に再起動します
- 再起動後、デバイスは設定された WiFi ネットワークに自動的に接続します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/wifi%20done.jpeg" style={{width:500, height:'auto'}}/></div> 


### デバイス登録

ステップ 1. デバイスが認証コードを表示
- 6桁の認証コードを聞く/見る
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

ステップ 2. デバイスの登録
- [SenseCraft AI-Watcher Agent プラットフォーム](https://sensecraft.seeed.cc/ai/watcher-agent)にアクセスします
- この[WiKi](https://wiki.seeedstudio.com/ja/watcher_web_control_panel/)に従って Agent を設定します

### 基本操作

1. 電源オン
   - スクロールホイールを3-5秒間押し続けてから離します

2. 電源オフ
   - 電源供給を切断します
   - スクロールホイールを3秒間押し続けてから離します

3. 再起動
   - ピンを使用してリセットボタンを軽く押します

4. 工場出荷時設定にリセット
   - スクロールホイールを10秒間押し続けます

5. ネットワーク設定モードに再入場
   - デバイスが「Scanning Wi-Fi」状態を表示している時
   - スクロールホイールを一度押します
   - デバイスはネットワーク設定モードに再入場します

## トラブルシューティング

接続の問題が発生した場合：

1. よくある問題
   - Wi-Fi 名とパスワードを再確認してください
   - 2.4GHz ネットワークに接続していることを確認してください


## FAQ

**Q: Watcher-XXXX ネットワークが見つからないのはなぜですか？**

A: ピンを使用してリセットボタンを軽く押し、デバイスを再起動して設定モードに入ってください。
以前にネットワークにペアリングしたことがある場合は、デバイスを再起動し、「Scanning Wi-Fi」が表示されている間にスクロールホイールを一度押してペアリングモードに再入場してください

**Q: 設定ページが自動的に読み込まれない場合はどうすればよいですか？**

A: Watcher-XXXX ネットワークに接続している間に、ウェブブラウザで手動で `http://192.168.4.1` にアクセスしてください。

**Q: 他の Wi-Fi ネットワークにアクセスするにはどうすればよいですか？**

A: 起動時に「Scanning Wi-Fi」が表示されている時に、スクロールホイールを押して wifi 設定モードに入ってください。設定された wifi は保存されます。

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>