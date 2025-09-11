---
description: このガイドは、SenseCAP Watcher Agentのネットワーク接続を設定および構成する方法を説明します。
title: デバイスネットワーク設定ガイド
sidebar_position: 2
keywords:
  - SenseCAP
  - Watcher Agent
  - ネットワーク設定
  - IoT構成
  - WiFi構成
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /ja/device_network_setup
last_update:
  date: 05/15/2025
  author: Zeke
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# デバイスネットワーク設定ガイド

このドキュメントでは、SenseCAP Watcher Agentのネットワーク構成プロセスについて説明します。以下の手順に従って、デバイスをネットワークに簡単に接続し、使用を開始してください。

## 前提条件

構成を開始する前に、以下を確認してください：

- SenseCAP WatcherにAgentファームウェアがインストールされていること
- 利用可能な2.4GHz Wi-Fiネットワーク（企業ネットワークなどの二次認証が必要なネットワークを除く）
- 構成用のモバイルデバイスまたはコンピュータ

## ネットワーク構成手順

### 初期設定

ステップ1. デバイスの電源を入れる
- デバイスを電源に接続するか、右上のスクロールホイールボタンを5秒間押し続けてから離します。
:::tip 注意
ファームウェアをフラッシュした直後に構成が開始される場合は、ピンを使用してリセットボタンを軽く押してください。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:200, height:'auto'}}/></div>
:::
- デバイスが電源オンされ、Wi-Fi構成モードに入ります。

### WiFi構成

ステップ1. デバイスのホットスポットに接続する
- モバイルデバイスまたはコンピュータで「Watcher-XXXX」という名前のWiFiネットワークを探します。
- このネットワークに接続します。
- 接続が確立されるまで数秒待ちます。
- ブラウザで構成インターフェースが自動的に開くはずです。
:::note
構成ページが自動的に開かない場合は、「Watcher-XXXX」ネットワークに接続されていることを確認し、ブラウザで手動で`http://192.168.4.1`にアクセスしてください。
:::

ステップ2. WiFi接続を構成する
- WiFiスキャンが完了するまで約5秒待ちます。
- 利用可能な2.4GHzネットワークのリストから自宅のWi-Fiネットワークを選択します。
- SSIDが自動的に入力されます。
- 選択したWiFiネットワークのパスワードを入力します。
- 「Connect」ボタンをクリックして送信します。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/wifi%20config.jpg" style={{width:500, height:'auto'}}/></div> 

:::note
2.4GHzネットワークのみがサポートされています。
iPhoneのホットスポットを使用する場合は、「最大互換性」オプションを有効にしてください。
WiFiスキャンページの読み込みには約5秒かかる場合がありますので、ページを閉じたりキャンセルしたりしないでください。
:::

ステップ3. 接続プロセスを完了する
- WiFi認証情報が正しい場合、デバイスは自動的に接続します。
- 緑色のチェックマークが表示され、ネットワーク構成が成功したことを示します。
- デバイスは3秒後に自動的に再起動します。
- 再起動後、デバイスは構成されたWiFiネットワークに自動的に接続します。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/wifi%20done.jpeg" style={{width:500, height:'auto'}}/></div> 

### デバイス登録

ステップ1. デバイスが認証コードを表示する
- 6桁の認証コードを確認してください。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

ステップ2. デバイスを登録する
- [SenseCraft AI-Watcher Agentプラットフォーム](https://sensecraft.seeed.cc/ai/home)にアクセスします。
- この[WiKi](https://wiki.seeedstudio.com/ja/Web_Control_Panel/)に従ってAgentを構成します。

### 基本操作

1. 電源オン
   - スクロールホイールを3〜5秒間押し続けてから離します。

2. 電源オフ
   - 電源供給を抜きます。
   - スクロールホイールを3秒間押し続けてから離します。

3. 再起動
   - ピンを使用してリセットボタンを軽く押します。

4. 工場出荷時設定にリセット
   - スクロールホイールを10秒間押し続けます。

5. ネットワーク構成モードに再度入る
   - デバイスが「Wi-Fiスキャン」状態を表示しているとき
   - スクロールホイールを1回押します。
   - デバイスがネットワーク構成モードに再度入ります。

## トラブルシューティング

接続問題が発生した場合：

1. 一般的な問題
   - Wi-Fiの名前とパスワードを再確認してください。
   - 2.4GHzネットワークに接続していることを確認してください。

## FAQ

**Q: Watcher-XXXXネットワークが見つからないのはなぜですか？**

A: ピンを使用してリセットボタンを軽く押し、デバイスを再起動して構成モードに入ってください。
以前にネットワークにペアリングしている場合は、デバイスを再起動し、「Wi-Fiスキャン」を表示している間にスクロールホイールを1回押してペアリングモードに再度入ります。

**Q: 構成ページが自動的に読み込まれない場合はどうすればよいですか？**

A: 「Watcher-XXXX」ネットワークに接続している間に、ブラウザで手動で`http://192.168.4.1`にアクセスしてください。

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>