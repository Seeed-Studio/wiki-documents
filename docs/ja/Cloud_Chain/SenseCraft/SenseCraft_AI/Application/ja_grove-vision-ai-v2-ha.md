---
description: Grove Vision AI V2 を Home Assistant に接続する方法を紹介します。
title: Grove Vision AI V2 を Home Assistant に接続する
keywords:
- vision AI
- home assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/connect_vision_ai_v2_to_ha
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Grove Vision AI V2 を Home Assistant に接続する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 を Home Assistant に統合することで、スマートホーム環境に高度な視覚センサー機能を追加し、リアルタイムの環境分析やカスタマイズされた自動化を実現できます。この統合により、家庭環境がよりインテリジェントで応答性の高いものになります。

この統合を実現するために、HACS ストアからアクセス可能な SenseCraft-HomeAssistant プラグインを使用して、SenseCraft Data Platform を介して Grove Vision AI V2 を Home Assistant に接続します。このプロセスは簡単で、SenseCraft アカウントにログインするだけで、デバイスとセンサーのデータを Home Assistant エコシステムに取り込み、カスタマイズや制御が可能になります。

以下はこの記事の主要な内容構成です。

1. [HACS プラグインのインストール](#installing-the-hacs-plugin): Home Assistant Community Store (HACS) をインストールして、Seeed Studio の SenseCraft プラグインを Home Assistant 内でインストールできるようにします。
2. [SenseCraft プラグインのインストール](#installing-the-sensecraft-plugin): Seeed Studio の SenseCraft プラグインをインストールし、Seeed Studio 製品を迅速に Home Assistant に展開できるようにします。
3. [Grove Vision AI V2 用モデルの準備](#preparing-the-model-for-grove-vision-ai-v2): Grove Vision AI V2 用に使用するモデルを選択して展開し、その後 Home Assistant が Vision AI から認識シーンと結果の情報を受信します。
4. [Home Assistant での MQTT サービスの構築](#building-mqtt-services-at-home-assistant): ローカル MQTT サービスを活用して、Grove Vision AI V2 と XIAO から Home Assistant にデータを送信します。
5. [Grove Vision AI V2 を Home Assistant に統合](#integrate-grove-vision-ai-v2-into-home-assistant): Grove Vision AI V2 を Home Assistant に統合し、設定用のビジュアルダッシュボードを構築します。

## はじめに

この記事のチュートリアル内容を始める前に、以下のハードウェアを準備する必要があります。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Home Assistant Green は、最も簡単でプライバシーに配慮した方法で家庭を自動化するためのデバイスです。簡単なセットアップを提供し、すべてのスマートデバイスを 1 つのシステムで制御できるようにします。データはデフォルトでローカルに保存されます。このボードは活発な Home Assistant エコシステムの恩恵を受け、オープンソースによって毎月改善されます。

このチュートリアルでは、Home Assistant のホストとして Home Assistant Green を使用することをお勧めしますが、Supervisor を備えた任意の Home Assistant ホストを使用することもできます。

次に、XIAO と Grove Vision AI V2 をピン列を介して接続する必要があります（または拡張ボードと Grove インターフェースを使用します）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## HACSプラグインのインストール

### ステップ1. Home Assistantで高度なモードを有効にする

Home Assistantの可能性を最大限に引き出し、高度な機能にアクセスするには、ユーザーインターフェースで「高度なモード」を有効にすることができます。

[Home Assistantのウェブインターフェース](http://homeassistant.local:8123)に移動します。Home Assistantのサイドバーの左下にあるプロフィールアイコンをクリックします。プロフィールページで下にスクロールし、**高度なモード**のトグルを見つけます。このトグルをオンの位置に切り替えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ2. Terminal & SSHをインストールする

サイドバーで**設定**をクリックして設定メニューにアクセスします。**アドオン**をクリックしてアドオンストアにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

検索バーを使用するか、利用可能なアドオンをブラウズして**Terminal & SSH**を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

**Terminal & SSH**を見つけたら、それをクリックして詳細を表示します。アドオンのページでは、概要、ドキュメント、設定オプションが表示されます。アドオンをインストールするには、**インストール**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ3. HACSをインストールする

最近ダウンロードした**Terminal & SSH**をサイドバーで見つけます。ターミナルでHome Assistantの設定のルートディレクトリであるconfigディレクトリに移動します：

```
cd /config
```

以下のコマンドを実行してHACSインストールスクリプトをダウンロードして実行します：

```
wget -q -O - https://install.hacs.xyz | bash -
```

インストールスクリプトが完了したら、変更を適用するためにHome Assistantを再起動する必要があります。UIを通じて再起動するには、**設定 > システム > 再起動**に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

再起動後、サイドバーで**設定**をクリックして設定メニューを開きます。設定メニュー内で**デバイスとサービス**に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

**統合を追加**をクリックして、Home Assistantセットアップに新しい統合を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

検索バーに**HACS**と入力して、Home Assistant Community Store統合を探します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

HACSが見つかった場合、利用可能な統合のリストに表示されます。それをクリックしてインストールプロセスを開始します。

ライセンス契約または利用規約が表示される場合があります。契約内容を注意深く読み、条件に同意する場合はすべてのチェックボックスをチェックして同意を示します。**送信**をクリックしてインストールを進めます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

次に、GitHubアカウントでログインするよう求められます。これは、HACSがGitHubと統合してコミュニティが作成した統合やプラグインの管理を行うために必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

指示に従ってHome AssistantがGitHubアカウントにアクセスすることを許可します。これには通常、GitHubから提供される確認コードを入力して本人確認を行うことが含まれます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Home AssistantがGitHubアカウントを使用することを許可すると、HACSのインストールが完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

HACSがシステムに完全に統合されるために、Home Assistantを再起動する必要がある場合があります。

## SenseCraftプラグインのインストール

### ステップ4. HACSを使用したSenseCraftプラグインのインストール

サイドバーでHACSを探し、それをクリックしてHACSインターフェースを開きます。右下隅にメニューボタン（HACSのバージョンによっては三点リーダーまたはプラス記号）が表示されます。**Custom repositories**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

ダイアログボックスが表示され、リポジトリURLの入力を求められます。ここで、SenseCraft統合用のカスタムリポジトリURLを入力します。URLを入力した後、カテゴリを選択します（SenseCraft統合の場合は**Integration**を選択します）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

**Add**をクリックします。これでリポジトリがHACSに追加され、**Integrations**のリストにSenseCraft統合が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft統合を見つけて「DOWNLOAD」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

これで、SenseCraftプラグインのインストールが正常に完了しました。

## Grove Vision AI V2用モデルの準備

### ステップ5. XIAO ESP32C3のファームウェアをフラッシュする

適切なUSB-Cケーブルを使用して、XIAO ESP32C3をコンピュータに接続します。デバイスドライバが正しくインストールされていることを確認してください。

ウェブブラウザで[SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool)を開きます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI Tool</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

次に、**XIAO ESP32S3**を選択し、**Connect**をクリックします。

:::caution
ここではXIAO ESP32S3を選択しますが、実際にはXIAO ESP32C3を使用しています！
:::

以下のボタンをクリックしてファームウェアファイルをダウンロードし、ウェブページ上の**Add File**ボタンをクリックして、`0x0`アドレスに`SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin`ファームウェアをフラッシュします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ファイルをダウンロード</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最後に、**Flash**ボタンをクリックし、プログラムが正常にアップロードされるのを待ってから、XIAO ESP32C3をコンピュータから切断します。

### ステップ6. Grove Vision AI V2をSenseCraft AI Model Assistantに接続する

まず、SenseCraft AIのメインページを開きます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AIに移動</font></span></strong></a>
</div>
<br />

ナビゲーションメニューで**Vision Workspace -> Grove Vision AI V2**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/52.png" style={{width:1000, height:'auto'}}/></div>

Type-Cタイプのケーブルを使用して、**Grove Vision AI V2**をコンピュータに接続してください。

次に、左上の**Connect**ボタンをクリックし、デバイスのポート番号を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/53.png" style={{width:500, height:'auto'}}/></div>

### ステップ7. 適切なモデルをアップロードする

次に、**Select Model**をクリックして使用したい適切なモデルを選択し、Grove Vision AI V2にアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/54.png" style={{width:1000, height:'auto'}}/></div>

モデルがアップロードされるまで1〜2分待ちます。

### ステップ8. 観察

モデルが正常にアップロードされると、右側のプレビューにGrove Vision AI V2カメラからのライブフィードが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/55.png" style={{width:1000, height:'auto'}}/></div>

<br />

右側のプレビュー設定では、モデルの認識精度を最適化するために変更可能な2つの設定オプションが表示されます。

:::tip
プレビューに画面が表示されない場合やモデル情報が表示されない場合、モデルに問題がある可能性があります。その場合は、モデルを再選択するか再アップロードしてください。
:::

## Home AssistantでのMQTTサービスの構築

### ステップ9. EMQXのインストール

サイドバーの**設定**をクリックして設定メニューにアクセスします。**アドオン**をクリックしてアドオンストアにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

検索バーを使用するか、利用可能なアドオンをブラウズして**emqx**を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

**EMQX**を見つけたら、それをクリックして詳細を表示します。アドオンのページでは、概要、ドキュメント、および設定オプションが表示されます。アドオンをインストールするには、**インストール**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

EMQXアドオンがインストールされたら、**起動時に開始**、**ウォッチドッグ**、および**サイドバーに表示**のトグルをオンにします。**開始**をクリックしてEMQXを起動します。

EMQXのダッシュボードログインページで、デフォルトのユーザー名とパスワードを入力します。

- デフォルトのユーザー名: **admin**
- デフォルトのパスワード: **public**

「ログイン」ボタンをクリックしてEMQXのダッシュボードにアクセスします。

EMQXのダッシュボードで、左サイドバーメニューから**認証**セクションに移動します。**データベース**タブをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

**作成**ボタンをクリックします。**メカニズム**ドロップダウンで**パスワードベース**を選択し、**バックエンド**ドロップダウンで**組み込みデータベース**を選択します。「作成」ボタンをクリックして組み込みデータベースを作成します。

組み込みデータベースを作成した後、「認証」セクションの**ユーザー**タブをクリックします。「ユーザー追加」ボタンをクリックします。

- 「ユーザー名」フィールドに「seeed」と入力します。
- 「パスワード」フィールドに「seeed」と入力します。

「認証」セクションの「データベース」タブに戻ります。リスト内の先ほど作成したデータベースを見つけます。

データベースの横にあるトグルスイッチをクリックして有効にします。データベースのステータスが「有効」に変わるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

## Grove Vision AI V2をHome Assistantに統合する

### ステップ10. Grove Vision AI V2とXIAOのネットワーク設定

Grove Vision AI V2をコンピュータに接続し、Grove Vision AI V2の設定ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/56.png" style={{width:1000, height:'auto'}}/></div>

左上をクリックしてGrove Vision AI V2に接続した後、MQTTボタンをオンにし、以下の情報をページに入力してください。

- **SSIDとパスワード**: デバイスはHome Assistantがインストールされているホストと同じLAN上にある必要があります。そのため、同じLANでネットワークを設定してください。XIAOは2.4G WiFiのみをサポートしており、5Gネットワークは利用できません。
- **暗号化**: **AUTO**を選択します。
- **ホスト**: Home AssistantがインストールされているホストのIPアドレス。
- **ポート**: `1883`。
- **clientId**: デバイス識別番号として、`grove_vision_ai_v2_`に続けてカスタムID番号を付けてください。
- **ユーザー名**: 先ほど作成したEMQXデータベースの名前。
- **パスワード**: 先ほど作成したEMQXデータベースのパスワード。

その後、下部の**適用**ボタンをクリックします。保存後、**Grove Vision AIがネットワークに接続されたことを意味するわけではありません**。左メニューの**プロセス**に戻り、デバイスのIPアドレスが表示されているか、MQTT接続のステータスが正しいかを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/57.png" style={{width:1000, height:'auto'}}/></div>

:::caution
IPアドレスが表示されている場合、WiFiに問題がないことを意味します。また、サービスステータスが図のテキストである必要があります。WiFiが正常でない場合、MQTTも正常ではありません。切り替えたばかりの場合、未接続と表示されることがありますが、約10秒ほど待つ必要があります。ステータスが変わると自動的に最新のステータスが表示されるため、リフレッシュする必要はありません。
:::

### ステップ11. Home Assistantへの統合

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Scenario 1. If the device has been found" label="シナリオ1. デバイスが見つかった場合">

この時点で通常、Home Assistantの**設定->デバイスとサービス**内でGrove Vision AI V2を検索できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

**設定**ボタンをクリックして関連情報を設定し、デバイスの追加が完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

**設定->デバイスとサービス**で、デバイスの詳細を確認し、サポートされているタブを表示できます。表示したいタブを好きなだけ追加できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::note
1. 前の手順でユーザー名とパスワードを設定した場合、デバイスを追加するときに入力を求められることがあります。
2. Home Assistantに追加するVision AIデバイスが複数ある場合、デバイスのID番号に注意してください。これは異なるGroveフラグを区別するための識別マークとして機能します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

</TabItem>

<TabItem value="Scenario 2. If the device is not found" label="シナリオ2. デバイスが見つからない場合">

もし自宅にデバイスが多すぎる場合、Home Assistantで直接検索できないことがあります。その際は、デバイスを手動で追加する必要があります。

**設定**ページで、**デバイスとサービス**を選択します。

その後、右下の**統合を追加**ボタンをクリックし、**SenseCraft**を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

SenseCraftをクリックし、アクションとして**ホスト/IDを使用してデバイスを追加**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

**送信**をクリックし、ドロップダウンメニューからデバイスの種類（例：`Grove Vision AI V2`）を選択し、再度**送信**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:500, height:'auto'}}/></div>

次の入力フィールドに、デバイスの正確なIDを入力します。このIDは通常、デバイス本体またはSenseCraft AIウェブサイトに記載されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/70.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/58.png" style={{width:1000, height:'auto'}}/></div>

次のステップは、MQTTサービスを設定することです。ウェブサイトで設定したMQTTサービスの詳細に一致する情報を入力します。以前にユーザー名とパスワードを設定していない場合は、ここに入力する必要はありません。その後、**送信**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/59.png" style={{width:500, height:'auto'}}/></div>

- **Broker**: Home AssistantのIPアドレス。
- **Port**: `1883`。
- **clientId**: デバイス識別番号には、`grove_vision_ai_v2_`を接頭辞として付け、その後にカスタムID番号を続けます。
- **username**: 作成したEMQXデータベースの名前。
- **password**: 作成したEMQXデータベースのパスワード。

</TabItem>

</Tabs>

セットアップが成功すると、通常、デバイスの配置場所を選択するように促されます。実際の状況に基づいて適切な部屋やエリアを選択し、**完了**をクリックします。

設定が完了すると、Home Assistantの「概要」ページでデバイスとそのステータスを確認できます。

これらの手順に従うことで、「SenseCraft」デバイスをHome Assistantに正常に追加し、MQTTサービスを使用するように構成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

## トラブルシューティング

### Q1: Grove Vision AI V2が切断された後、HAでデータメッセージが再び表示されなくなった場合はどうすればよいですか？

SenseCraftでデバイスを削除して再追加する必要があるかもしれません。削除後は自動検索ができなくなる可能性があり、デバイスを手動で追加する必要があります。デバイスを再追加するには、**[こちらの手順](#step-11-integration-into-home-assistant)**を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>