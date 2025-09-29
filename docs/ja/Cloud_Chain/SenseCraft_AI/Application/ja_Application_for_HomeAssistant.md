---
description: Grove Vision AI V2 を HomeAssistant に接続する方法を紹介します。
title: HomeAssistant 向けアプリケーション
keywords:
- vision AI
- home assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/sensecraft-ai/application/application-for-homeassistant
aliases:
  - /ja/connect_vision_ai_v2_to_ha
sidebar_position: 1
last_update:
  date: 01/10/2024
  author: Citric
---

# Grove Vision AI V2 を Home Assistant に接続する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 を Home Assistant に統合することで、高度な視覚センシング機能を追加してスマートホームセットアップを向上させることができます。この統合により、リアルタイムの環境分析とカスタマイズされた自動化が可能になり、ホーム環境をより知的で応答性の高いものにします。

この統合を促進するため、HACS ストアからアクセス可能な SenseCraft-HomeAssistant プラグインが、SenseCraft データプラットフォームを通じて Grove Vision AI V2 を Home Assistant に接続します。このプロセスは合理化されユーザーフレンドリーで、SenseCraft アカウントログインだけでデバイスとセンサーデータを Home Assistant エコシステムに取り込み、カスタマイズと制御の準備が整います。

以下は本記事の主要コンテンツフレームワークです。

1. [HACS プラグインのインストール](#installing-the-hacs-plugin): Home Assistant Community Store (HACS) をインストールして、Home Assistant 内で Seeed Studio の SenseCraft プラグインのインストールを可能にします。
2. [SenseCraft プラグインのインストール](#installing-the-sensecraft-plugin): Seeed Studio による SenseCraft プラグインをインストールし、Seeed Studio の製品を Home Assistant に迅速にデプロイできるようにします。
3. [Grove Vision AI V2 用モデルの準備](#preparing-the-model-for-grove-vision-ai-v2): Grove Vision AI V2 に使用したいモデルを選択してデプロイし、その後 Home Assistant が Vision AI からの認識シーンと結果の情報を受信します。
4. [Home Assistant での MQTT サービス構築](#building-mqtt-services-at-home-assistant): ローカル MQTT サービスを活用して、Grove Vision AI V2 と XIAO から Home Assistant にデータを送信します。
5. [Grove Vision AI V2 を Home Assistant に統合](#integrate-grove-vision-ai-v2-into-home-assistant): Grove Vision AI V2 を Home Assistant に統合し、設定用の視覚的ダッシュボードをセットアップします。

## はじめに

本記事のチュートリアル内容が始まる前に、以下のハードウェアを準備する必要があります。

### 必要な材料

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Vision AI V2</th>
   <th>XIAO ESP32C3</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

</div>

Home Assistant Green は、あなたの家を自動化する最も簡単でプライバシーに重点を置いた方法です。簡単なセットアップを提供し、すべてのスマートデバイスを1つのシステムで制御でき、すべてのデータはデフォルトでローカルに保存されます。このボードは繁栄している Home Assistant エコシステムの恩恵を受け、オープンソースによって毎月改善されます。

このチュートリアルでは、Home Assistant Green を Home Assistant ホストとして使用することをお勧めしますが、Supervisor を搭載した任意の Home Assistant ホストを使用することもできます。

次に、XIAO と Grove Vision AI V2 をピンの列を介して接続する必要があります（または拡張ボードと Grove インターフェースを使用します）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## HACS プラグインのインストール

### ステップ 1. Home Assistant でアドバンスドモードを開く

Home Assistant の全ポテンシャルを解放し、高度な機能にアクセスするために、ユーザーインターフェースで「アドバンスドモード」を有効にできます。

[Home Assistant ウェブインターフェース](http://homeassistant.local:8123)に移動します。Home Assistant サイドバーの左下角にあるプロフィールアイコンをクリックします。プロフィールページで、下にスクロールして**アドバンスドモード**のトグルを見つけます。トグルをオンの位置に切り替えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. Terminal & SSH をインストール

サイドバーの**設定**をクリックして設定メニューにアクセスします。**アドオン**をクリックしてアドオンストアにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

検索バーを使用するか、利用可能なアドオンを閲覧して**Terminal & SSH**を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

**Terminal & SSH**を見つけたら、それをクリックして詳細を表示します。アドオンのページで、概要、ドキュメント、設定オプションが表示されます。アドオンをインストールするには、**インストール**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. HACS をインストール

サイドバーで最近ダウンロードした**Terminal & SSH**を見つけます。ターミナルで、Home Assistant 設定のルートである config ディレクトリに移動します：

```
cd /config
```

以下のコマンドを実行してHACSインストールスクリプトをダウンロードし、実行します：

```
wget -q -O - https://install.hacs.xyz | bash -
```

インストールスクリプトが完了した後、変更を適用するためにHome Assistantを再起動する必要があります。UIから**設定 > システム > 再起動**に移動してHome Assistantを再起動できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

再起動後、サイドバーの**設定**をクリックして設定メニューを開きます。設定メニュー内で、**デバイスとサービス**に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

**統合を追加**をクリックして、Home Assistantセットアップに新しい統合を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

検索バーで**HACS**と入力して、Home Assistantコミュニティストア統合を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

HACSが見つかった場合、利用可能な統合のリストに表示されるはずです。それをクリックしてインストールプロセスを開始します。

ライセンス契約または利用規約がポップアップする場合があります。契約を注意深く読み、条件に同意する場合は、すべてのボックスにチェックを入れて同意を示します。**送信**をクリックしてインストールを続行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

次に、GitHubアカウントでログインするよう求められます。HACSはGitHubと統合してコミュニティが作成した統合とプラグインのインストールを管理するため、これが必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

指示に従ってHome AssistantがあなたのGitHubアカウントにアクセスすることを承認します。これは通常、GitHubから提供される認証コードを入力してあなたの身元を確認することを含みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Home AssistantがあなたのGitHubアカウントを使用することを承認すると、HACSのインストールが完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

HACSがシステムに完全に統合されるために、Home Assistantを再起動する必要がある場合があります。

## SenseCraftプラグインのインストール

### ステップ4. HACSを介したSenseCraftプラグインのインストール

サイドバーでHACSを探してクリックし、HACSインターフェースを開きます。右下隅に、メニューボタン（HACSのバージョンによって3つの点またはプラス記号）があります。**カスタムリポジトリ**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

リポジトリURLの入力を求めるダイアログボックスが表示されます。ここで、SenseCraft統合のカスタムリポジトリURLを入力します。URLを入力した後、カテゴリを選択します（SenseCraft統合の場合、**統合**を選択します）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

**Add**をクリックします。リポジトリがHACSに追加され、**Integrations**の下のリストでSenseCraftインテグレーションを見つけることができるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

SenseCraftインテグレーションを見つけて「DOWNLOAD」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

この時点で、SenseCraftプラグインのインストールが正常に完了しました。

## Grove Vision AI V2用のモデルの準備

### ステップ5. XIAO ESP32C3のファームウェアをフラッシュする

適切なUSB-Cケーブルを使用してXIAO ESP32C3をコンピュータに接続します。デバイスドライバが正しくインストールされていることを確認してください。

Webブラウザで[SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool)を開きます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI Tool</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

次に**XIAO ESP32S3**を選択し、**Connect**をクリックします。

:::caution
ここではXIAO ESP32S3が選択されていますが、実際にはXIAO ESP32C3を使用していることに注意してください！
:::

下のボタンをクリックしてファームウェアファイルをダウンロードし、Webページの**Add File**ボタンをクリックして`0x0`アドレス用の`SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin`ファームウェアをフラッシュします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download the file</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最後に**Flash**ボタンをクリックし、プログラムが正常にアップロードされるまで待ってから、XIAO ESP32C3をコンピュータから切断します。

### ステップ6. Grove Vision AI V2をSenseCraft AIモデルアシスタントに接続する

まず、SenseCraft AIのメインページを開く必要があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft AI</font></span></strong></a>
</div>
<br />

ナビゲーションメニューで**Vision Workspace -> Grove Vision AI V2**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/52.png" style={{width:1000, height:'auto'}}/></div>

Type-Cタイプのケーブルを使用して**Grove Vision AI V2**をコンピュータに接続してください。

次に左上の**Connect**ボタンをクリックし、デバイスのポート番号を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/53.png" style={{width:500, height:'auto'}}/></div>

### ステップ7. 適切なモデルをアップロードする

次に、**Select Model**をクリックした後、使用したい適切なモデルを選択してGrove Vision AI V2にアップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/54.png" style={{width:1000, height:'auto'}}/></div>

モデルがアップロードされるまで1〜2分待ちます。

### ステップ8. 観察

モデルが正常にアップロードされると、右側のPreviewでGrove Vision AI V2カメラからのライブフィードを見ることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/55.png" style={{width:1000, height:'auto'}}/></div>

<br />

右側のPreview Settingsには、モデルの認識精度を最適化するために変更できる2つの設定オプションがあることがわかります。

:::tip
Previewに画面が表示されない場合やモデル情報に情報がない場合は、モデルに問題がある可能性があり、モデルを再選択するか再度アップロードする必要があります。
:::

## Home AssistantでのMQTTサービス構築

### ステップ9. EMQXのインストール

サイドバーの**Settings**をクリックして設定メニューにアクセスします。**Add-ons**をクリックしてアドオンストアにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

検索バーを使用するか、利用可能なアドオンを参照して**emqx**を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

**EMQX**を見つけたら、それをクリックして詳細を表示します。アドオンのページでは、概要、ドキュメント、設定オプションが表示されます。アドオンをインストールするには、**Install**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

EMQXアドオンがインストールされたら、**Start on boot**、**Watchdog**、**Show in sidebar**のトグルをオンにします。**Start**をクリックしてEMQXを開始します。

EMQXダッシュボードのログインページで、デフォルトのユーザー名とパスワードを入力します。

- デフォルトユーザー名：**admin**
- デフォルトパスワード：**public**

「Login」ボタンをクリックしてEMQXダッシュボードにアクセスします。

EMQXダッシュボードで、左サイドバーメニューから**Authentication**セクションに移動します。**Databases**タブをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

**Create**ボタンをクリックします。**Mechanism**ドロップダウンで**Password-Based**を選択し、**Backend**ドロップダウンで**Built-in Database**を選択します。「Create」ボタンをクリックしてBuilt-in Databaseを作成します。

Built-in Databaseを作成した後、「Authentication」セクションの**Users**タブをクリックします。「Add User」ボタンをクリックします。

- 「Username」フィールドに「seeed」と入力します。
- 「Password」フィールドに「seeed」と入力します。

「Authentication」セクションの「Databases」タブに戻ります。データベースのリストで以前に作成したデータベースを見つけます。

データベースの横にあるトグルスイッチをクリックして有効にします。データベースのステータスが「Enabled」に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

## Grove Vision AI V2をHome Assistantに統合

### ステップ10. Grove Vision AI V2とXIAOのネットワーク設定

Grove Vision AI V2をコンピューターに接続し、Grove Vision AI V2設定ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/56.png" style={{width:1000, height:'auto'}}/></div>

左上角をクリックしてGrove Vision AI V2に接続した後、MQTTボタンをオンにして、ページで入力する必要がある以下の情報を入力してください。

- **SSID & Password**：デバイスはHome Asistantがインストールされているホストと同じLAN上にある必要があります。そのため、同じLAN下でネットワークを設定してください。XIAOは2.4G WiFiのみをサポートし、5Gネットワークは利用できません。
- **Encryption**：**AUTO**を選択します。
- **Host**：Home AssistantがインストールされているホストのIPアドレス。
- **Port**：`1883`。
- **clientId**：デバイス識別番号として、`grove_vision_ai_v2_`をプレフィックスとして、その後にカスタムID番号を続けてください。
- **username**：先ほど作成したEMQXデータベースの名前。
- **password**：先ほど作成したEMQXデータベースのパスワード。

次に下の**Apply**ボタンをクリックします。保存後、**Grove Vision AIがネットワークに接続されたことを意味するものではありません**。左メニューバーの**Process**に戻って、デバイスのIPアドレスが表示されているか、MQTT接続のステータスが正しいかを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/57.png" style={{width:1000, height:'auto'}}/></div>

:::caution
IPアドレスが表示されている場合、WiFiに問題がないことを意味し、Service statusは図のテキストが正常を表す必要があります。WiFiが正常でない場合、MQTTは確実に正常ではないことに注意してください。切り替えたばかりの時は未接続と表示される場合があり、約10秒程度待つ必要があります。リフレッシュする必要はなく、ステータスが変更された後に自動的に最新のステータスが表示されます。
:::

### ステップ11. Home Assistantへの統合

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Scenario 1. If the device has been found" label="シナリオ1. デバイスが見つかった場合">

この時点で、通常はHome Assistantの**Settings->Devices & services**内でGrove Vision AI V2を検索できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

**Configure**ボタンをクリックして関連情報を設定してください。これでデバイスの追加が完了しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

**Settings->Devices & services**で、デバイスの詳細を確認し、サポートされているタブを表示できます。概要に表示したいタブを必要な数だけ追加できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::note

1. 前のステップでユーザー名とパスワードを設定した場合、デバイスを追加する際にそれらの入力を求められる場合があります。
2. Home Assistantに複数のVision AIデバイスを追加する場合は、デバイスのID番号に注意してください。これは異なるGroveフラグ間の識別マークとして機能します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

</TabItem>

<TabItem value="Scenario 2. If the device is not found" label="シナリオ2. デバイスが見つからない場合">

自宅にデバイスが多すぎる場合、Home Assistantで直接検索できないことがあります。その場合、手動でデバイスを追加する必要があります。

**Settings**ページで、**Devices & Services**を選択します。

右下角の**ADD INTEGRATION**ボタンをクリックし、**SenseCraft**を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

SenseCraftをクリックし、Actionとして**Add device using host/id**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

**SUBMIT**をクリックし、ドロップダウンメニューから`Grove Vision AI V2`などのデバイスタイプを選択し、再度**SUBMIT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:500, height:'auto'}}/></div>

次の入力フィールドに、デバイスの正確なIDを入力します。このIDは通常、デバイス本体またはSenseCraft AIウェブサイトで確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/70.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/58.png" style={{width:1000, height:'auto'}}/></div>

次のステップはMQTTサービスの設定です。ウェブサイトで設定したMQTTサービスの詳細と一致する情報を入力します。以前にユーザー名とパスワードを設定していない場合は、ここで入力する必要はありません。その後、**SUBMIT**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/59.png" style={{width:500, height:'auto'}}/></div>

- **Broker**: Home AssistantのIPアドレス。
- **Port**: `1883`。
- **clientId**: デバイス識別番号には、`grove_vision_ai_v2_`をプレフィックスとして付け、その後にカスタムID番号を続けてください。
- **username**: 作成したEMQXデータベースの名前。
- **password**: 作成したEMQXデータベースのパスワード。

</TabItem>

</Tabs>

設定が成功すると、システムは通常、デバイスの場所を選択するよう促します。実際の状況に基づいて適切な部屋またはエリアを選択し、**Finish**をクリックします。

設定が完了すると、Home Assistantの「Overview」ページでデバイスとその状態を確認できます。

これらの手順に従うことで、「SenseCraft」デバイスをHome Assistantインスタンスに正常に追加し、MQTTサービスを使用するように設定できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

## トラブルシューティング

### Q1: Grove Vision AI V2が切断された後、HAでデータメッセージが再び表示されない場合はどうすればよいですか？

SenseCraftでデバイスを削除して再追加する必要があります。削除後、自動検索できなくなる可能性があり、手動でデバイスを追加する必要があります。デバイスを再追加するには、**[こちらの手順](#step-11-integration-into-home-assistant)**を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
