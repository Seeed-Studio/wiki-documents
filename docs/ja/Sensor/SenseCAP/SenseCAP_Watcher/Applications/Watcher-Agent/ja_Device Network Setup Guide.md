---
description: このガイドでは、SenseCAP Watcher Agentのネットワーク接続の設定と構成方法について説明します
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
  date: 08/20/2025
  author: Twelve
---

# デバイスネットワーク設定ガイド

このドキュメントでは、SenseCAP Watcher Agentのネットワーク設定プロセスをガイドします。以下の手順に従って、デバイスをネットワークに簡単に接続し、使用を開始してください。

## 前提条件

設定を開始する前に、以下をご用意ください：

- AgentファームウェアがインストールされたSenseCAP Watcher
- 利用可能な2.4GHz Wi-Fiネットワーク（二次認証が必要なネットワーク（企業ネットワークなど）を除く）
- 設定用のモバイルデバイスまたはコンピュータ

## ネットワーク設定手順

### 初期設定

ステップ1. デバイスの電源を入れる
- デバイスを電源に接続するか、右上のスクロールホイールボタンを5秒間長押しして離します。
:::tip 注意
ファームウェアのフラッシュ直後に設定が開始される場合は、ピンを使用してリセットボタンを軽く押してください。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:200, height:'auto'}}/></div>
:::
- デバイスが電源オンになり、Wi-Fi設定モードに入ります

### WiFi設定

ステップ1. デバイスホットスポットに接続
- モバイルデバイスまたはコンピュータで、「Watcher-XXXX」という名前のWiFiネットワークを探します
- このネットワークに接続します
- 接続が確立されるまで数秒待ちます
- ブラウザで設定インターフェースが自動的に開きます
:::note
設定ページが自動的に開かない場合は、「Watcher-XXXX」ネットワークに接続されていることを確認し、Webブラウザで手動で`http://192.168.4.1`にアクセスしてください。
:::

ステップ2. WiFi接続の設定
- WiFiスキャンが完了するまで約5秒待ちます
- 利用可能な2.4GHzネットワークのリストから、ご自宅のWi-Fiネットワークを選択します
- SSIDが自動的に入力されます
- 選択したWiFiネットワークのパスワードを入力します
- 「Connect」ボタンをクリックして送信します

:::note
2.4GHzネットワークのみサポートされています
iPhoneのホットスポットを使用する場合は、「最大互換性」オプションを有効にしてください
WiFiスキャンページの読み込みに約5秒かかる場合があります - ページを閉じたりキャンセルしたりしないでください
:::

ステップ3. 接続プロセスの完了
- WiFi認証情報が正しい場合、デバイスは自動的に接続されます
- 緑色のチェックマークが表示され、ネットワーク設定が成功したことを示します
- デバイスは3秒後に自動的に再起動します
- 再起動後、デバイスは設定されたWiFiネットワークに自動的に接続します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/wifi%20done.jpeg" style={{width:500, height:'auto'}}/></div> 

### デバイス登録

ステップ1. デバイスが認証コードを表示
- 6桁の認証コードを聞く/確認する
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

ステップ2. デバイスの登録
- [SenseCraft AI-Watcher Agentプラットフォーム](https://sensecraft.seeed.cc/ai/watcher-agent)にアクセスします
- この[WiKi](https://wiki.seeedstudio.com/Web_Control_Panel/)に従ってAgentを設定します

### 基本操作

1. 電源オン
   - スクロールホイールを3-5秒間長押しして離します

2. 電源オフ
   - 電源を抜きます
   - スクロールホイールを3秒間長押しして離します

3. 再起動
   - ピンを使用してリセットボタンを軽く押します

4. 工場出荷時設定にリセット
   - スクロールホイールを10秒間長押しします

5. ネットワーク設定モードに再入場
   - デバイスが「Scanning Wi-Fi」状態を表示している時
   - スクロールホイールを一度押します
   - デバイスがネットワーク設定モードに再入場します

## トラブルシューティング

接続に問題が発生した場合：

1. よくある問題
   - Wi-Fi名とパスワードを再確認してください
   - 2.4GHzネットワークに接続していることを確認してください

## FAQ

**Q: Watcher-XXXXネットワークが見つからないのはなぜですか？**

A: ピンを使用してリセットボタンを軽く押してデバイスを再起動し、設定モードに入ってください。
以前にネットワークにペアリングしたことがある場合は、デバイスを再起動し、「Scanning Wi-Fi」を表示している間にスクロールホイールを一度押してペアリングモードに再入場してください。

**Q: 設定ページが自動的に読み込まれない場合はどうすればよいですか？**

A: Watcher-XXXXネットワークに接続している間に、Webブラウザで手動で`http://192.168.4.1`にアクセスしてください。

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>