---
description: Grove Vision AI V2 を HomeAssistant に接続する方法を紹介します。
title: HomeAssistant 向けアプリケーション
keywords:
  - vision AI
  - home assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/application-for-homeassistant
aliases:
  - /connect_vision_ai_v2_to_ha
sidebar_position: 1
last_update:
  date: 01/10/2024
  author: Citric
createdAt: '2024-01-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/application/application-for-homeassistant/
---


# Grove Vision AI V2 を Home Assistant に接続する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

Grove Vision AI V2 を Home Assistant に統合することで、高度なビジュアルセンシング機能が追加され、スマートホーム環境をさらに向上させることができます。この統合により、環境をリアルタイムに解析し、カスタマイズされた自動化を実現できるため、家庭環境がよりインテリジェントかつ応答性の高いものになります。

この統合を容易にするために、HACS ストアからアクセスできる SenseCraft-HomeAssistant プラグインを使用して、SenseCraft Data Platform を介して Grove Vision AI V2 を Home Assistant に接続します。このプロセスはシンプルでユーザーフレンドリーであり、SenseCraft アカウントにログインするだけで、デバイスとセンサーデータを Home Assistant エコシステムに取り込み、自由にカスタマイズおよび制御できるようになります。

以下は本記事の主な内容構成です。

1. [HACS プラグインのインストール](#hacs-プラグインのインストール)：Home Assistant Community Store（HACS）をインストールし、Home Assistant 内で Seeed Studio の SenseCraft プラグインをインストールできるようにします。
2. [SenseCraft プラグインのインストール](#sensecraft-プラグインのインストール)：Seeed Studio の SenseCraft プラグインをインストールし、Seeed Studio の製品を素早く Home Assistant に導入できるようにします。
3. [Grove Vision AI V2 用モデルの準備](#grove-vision-ai-v2-用モデルの準備)：Grove Vision AI V2 で使用したいモデルを選択してデプロイし、その後 Home Assistant は Vision AI から認識シーンおよび結果の情報を受信します。
4. [Home Assistant での MQTT サービスの構築](#home-assistant-での-mqtt-サービスの構築)：ローカル MQTT サービスを利用して、Grove Vision AI V2 と XIAO から Home Assistant へデータを送信します。
5. [Grove Vision AI V2 を Home Assistant に統合](#grove-vision-ai-v2-を-home-assistant-に統合)：Grove Vision AI V2 を Home Assistant に統合し、設定用のビジュアルダッシュボードを構築します。

## はじめに

本記事のチュートリアル内容に入る前に、以下のハードウェアを用意しておく必要があります。

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Home Assistant Green は、最も簡単かつプライバシー重視で自宅を自動化するための方法です。セットアップは非常に簡単で、すべてのスマートデバイスを 1 つのシステムで制御でき、データはデフォルトですべてローカルに保存されます。このボードは活発な Home Assistant エコシステムの恩恵を受けており、オープンソースによって毎月改善されていきます。

本チュートリアルでは、Home Assistant ホストとして Home Assistant Green を使用することを推奨しますが、Supervisor を備えた任意の Home Assistant ホストを使用することもできます。

次に、ピンヘッダ（または拡張ボードと Grove インターフェース）を使用して、XIAO と Grove Vision AI V2 を接続する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

## HACS プラグインのインストール

### ステップ 1. Home Assistant で Advanced Mode を有効にする

Home Assistant の可能性を最大限に引き出し、詳細機能へアクセスするには、ユーザーインターフェースで「Advanced Mode」を有効にします。

[Home Assistant の Web インターフェース](http://homeassistant.local:8123) にアクセスします。Home Assistant サイドバー左下のプロフィールアイコンをクリックします。プロフィールページで下にスクロールし、**Advanced Mode** トグルを見つけます。トグルをオンの位置に切り替えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. Terminal & SSH をインストールする

サイドバーの **Settings** をクリックして設定メニューにアクセスします。**Add-ons** をクリックしてアドオンストアを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

検索バーを使用するか、利用可能なアドオンをスクロールして **Terminal & SSH** を探します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

**Terminal & SSH** を見つけたら、それをクリックして詳細を表示します。アドオンのページには、概要、ドキュメント、設定オプションが表示されます。アドオンをインストールするには、**Install** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. HACS をインストールする

サイドバーで、先ほどダウンロードした **Terminal & SSH** を探してクリックします。ターミナルで、Home Assistant 設定のルートである config ディレクトリに移動します。

```
cd /config
```

次のコマンドを実行して、HACS インストールスクリプトをダウンロードして実行します。

```
wget -q -O - https://install.hacs.xyz | bash -
```

インストールスクリプトが完了したら、変更を反映させるために Home Assistant を再起動する必要があります。**Settings > System > Restart** に移動して、UI から Home Assistant を再起動できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

再起動後、サイドバーの **Settings** をクリックして設定メニューを開きます。設定メニュー内で **Devices & Services** に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

**ADD INTEGRATION** をクリックして、Home Assistant 環境に新しいインテグレーションを追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

検索バーに **HACS** と入力して、Home Assistant Community Store インテグレーションを探します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

HACS が見つかると、利用可能なインテグレーションの一覧に表示されます。それをクリックしてインストールプロセスを開始します。

ライセンス契約または利用規約がポップアップ表示される場合があります。内容をよく読み、同意する場合はすべてのチェックボックスをオンにして同意を示します。**SUBMIT** をクリックしてインストールを続行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

次に、GitHub アカウントでログインするよう求められます。これは、HACS が GitHub と連携してコミュニティ製インテグレーションやプラグインのインストールを管理するために必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

指示に従って、Home Assistant に GitHub アカウントへのアクセスを許可します。通常は、本人確認のために GitHub から提供される確認コードを入力する手順が含まれます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Home Assistant に GitHub アカウントの使用を許可すると、HACS のインストールが完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

HACS をシステムに完全に統合するには、Home Assistant を再起動する必要がある場合があります。

## SenseCraft プラグインのインストール

### ステップ 4. HACS 経由で SenseCraft プラグインをインストールする

サイドバーで HACS を探してクリックし、HACS インターフェースを開きます。右下にメニューボタン（HACS のバージョンによっては三点リーダーまたはプラス記号）が表示されます。**Custom repositories** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

リポジトリ URL の入力を求めるダイアログボックスが表示されます。ここに、SenseCraft インテグレーション用のカスタムリポジトリ URL を入力します。URL を入力したら、カテゴリを選択します（SenseCraft インテグレーションの場合は **Integration** を選択します）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

**Add** をクリックします。これでリポジトリが HACS に追加され、**Integrations** の一覧の中から SenseCraft インテグレーションを見つけられるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft インテグレーションを見つけて "DOWNLOAD" をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

ここまでで、SenseCraft プラグインのインストールが正常に完了しました。

## Grove Vision AI V2 用のモデルを準備する

### ステップ 5. XIAO ESP32C3 にファームウェアを書き込む

XIAO ESP32C3 を適切な USB-C ケーブルでコンピュータに接続します。デバイスドライバが正しくインストールされていることを確認してください。

Web ブラウザで [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) を開きます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI Tool</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>

次に **XIAO ESP32S3** を選択し、**Connect** をクリックします。

:::caution
ここでは XIAO ESP32-S3 を選択していますが、実際に使用しているのは XIAO ESP32-C3 であることに注意してください！
:::

下のボタンをクリックしてファームウェアファイルをダウンロードし、Web ページ上の **Add File** ボタンをクリックして、`0x0` アドレスに `SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin` ファームウェアを書き込みます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/SSCMA_XIAO_ESP32C3_adapter_sensecraft_v1.1.8.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ファイルをダウンロード</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

最後に **Flash** ボタンをクリックし、プログラムのアップロードが正常に完了するまで待ってから、XIAO ESP32C3 をコンピュータから取り外します。

### ステップ 6. Grove Vision AI V2 を SenseCraft AI Model Assistant に接続する

まず、SenseCraft AI のメインページを開く必要があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>SenseCraft AI へ移動</font></span></strong></a>
</div>
<br />

ナビゲーションメニューで **Vision Workspace -> Grove Vision AI V2** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/52.png" style={{width:1000, height:'auto'}}/></div>

Type-C ケーブルを使用して **Grove Vision AI V2** をコンピュータに接続してください。

次に左上の **Connect** ボタンをクリックし、デバイスのポート番号を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/53.png" style={{width:500, height:'auto'}}/></div>

### ステップ 7. 適切なモデルをアップロードする

その後、**Select Model** をクリックした後に使用したい適切なモデルを選択し、Grove Vision AI V2 にアップロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/54.png" style={{width:1000, height:'auto'}}/></div>

モデルのアップロードが完了するまで 1〜2 分ほど待ちます。

### ステップ 8. 動作確認

モデルが正常にアップロードされると、右側のプレビューで Grove Vision AI V2 カメラからのライブ映像が表示されるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/55.png" style={{width:1000, height:'auto'}}/></div>

<br />

右側の Preview Settings では、モデルの認識精度を最適化するために変更できる設定オプションが 2 つあります。

:::tip
Preview に画面が表示されない、またはモデル情報に何も表示されない場合は、モデルに問題がある可能性があり、モデルを再選択するか再度アップロードする必要があります。
:::

## Home Assistant で MQTT サービスを構築する

### ステップ 9. EMQX をインストールする

サイドバーの **Settings** をクリックして設定メニューにアクセスします。**Add-ons** をクリックしてアドオンストアにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

検索バーを使用するか、利用可能なアドオンを参照して **emqx** を見つけます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/51.png" style={{width:1000, height:'auto'}}/></div>

**EMQX** を見つけたら、それをクリックして詳細を表示します。アドオンのページには、概要、ドキュメント、設定オプションが表示されます。アドオンをインストールするには、**Install** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/50.png" style={{width:1000, height:'auto'}}/></div>

EMQX アドオンがインストールされたら、**Start on boot**、**Watchdog**、**Show in sidebar** のトグルをオンにします。**Start** をクリックして EMQX を起動します。

EMQX Dashboard のログインページで、デフォルトのユーザー名とパスワードを入力します。

- デフォルトのユーザー名: **admin**
- デフォルトのパスワード: **public**

"Login" ボタンをクリックして EMQX Dashboard にアクセスします。

EMQX Dashboard で、左側のサイドバーメニューから **Authentication** セクションに移動します。**Databases** タブをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/11.png" style={{width:900, height:'auto'}}/></div>

**Create** ボタンをクリックします。**Mechanism** ドロップダウンで **Password-Based** を選択し、**Backend** ドロップダウンで **Built-in Database** を選択します。"Create" ボタンをクリックして Built-in Database を作成します。

Built-in Database を作成したら、"Authentication" セクションの **Users** タブをクリックします。"Add User" ボタンをクリックします。

- "Username" フィールドに "seeed" と入力します。
- "Password" フィールドに "seeed" と入力します。

"Authentication" セクションの "Databases" タブに戻ります。データベース一覧から先ほど作成したデータベースを探します。

データベースの横にあるトグルスイッチをクリックして有効化します。データベースのステータスが "Enabled" に変わるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/vision_ai_v2_heatmap/12.png" style={{width:900, height:'auto'}}/></div>

## Grove Vision AI V2 を Home Assistant に統合する

### ステップ 10. Grove Vision AI V2 と XIAO のネットワーク設定

Grove Vision AI V2 をコンピュータに接続し、Grove Vision AI V2 の設定ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/56.png" style={{width:1000, height:'auto'}}/></div>

左上をクリックして Grove Vision AI V2 に接続した後、MQTT ボタンをオンにし、ページ上で入力する必要がある以下の情報を入力してください。

- **SSID & Password**: デバイスは Home Assistant がインストールされているホストと同じ LAN 上にある必要があります。そのため、同じ LAN 配下のネットワークを設定してください。XIAO は 2.4G WiFi のみをサポートしており、5G ネットワークは使用できません。
- **Encryption**: **AUTO** を選択します。
- **Host**: Home Assistant がインストールされているホストの IP アドレス。
- **Port**: `1883`。
- **clientId**: デバイスの識別番号で、`grove_vision_ai_v2_` をプレフィックスとして付け、その後に任意の ID 番号を続けてください。
- **username**: 先ほど作成した EMQX データベースのユーザー名。
- **password**: 先ほど作成した EMQX データベースのパスワード。

その後、下の **Apply** ボタンをクリックします。保存しても、**Grove Vision AI がネットワークに接続されたことを意味するわけではありません**。左側のメニューバーの **Process** に戻り、デバイスの IP アドレスが表示されているか、MQTT 接続のステータスが正しいかを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/57.png" style={{width:1000, height:'auto'}}/></div>

:::caution
IP Address が表示されている場合は WIFI に問題がないことを意味し、Service status は図のテキストと同じであれば正常を示します。WIFI が正常でない場合、MQTT も必ず正常ではありません。また、画面を切り替えた直後は未接続と表示されることがありますが、約 10 秒ほど待つ必要があります。ステータスを確認するためにリフレッシュする必要はなく、ステータスが変化すると自動的に最新の状態が表示されます。
:::

### ステップ 11. Home Assistant への統合

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Scenario 1. If the device has been found" label="シナリオ 1. デバイスが検出された場合">

ここまでで通常は、Home Assistant の **Settings->Devices & services** 内で Grove Vision AI V2 を検索できるようになっています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/34.png" style={{width:1000, height:'auto'}}/></div>

**Configure** ボタンをクリックして関連情報を設定すると、デバイスの追加が完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/35.png" style={{width:1000, height:'auto'}}/></div>

**Settings->Devices & services** では、デバイスの詳細とサポートされているタブが表示され、概要に表示したいタブを好きなだけ追加できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/36.png" style={{width:1000, height:'auto'}}/></div>

:::note

1. 以前の手順でユーザー名とパスワードを設定している場合、デバイスを追加するときにそれらの入力を求められることがあります。
2. Home Assistant に追加する Vision AI デバイスが複数ある場合は、各 Grove フラグを区別するための識別マークとして機能するデバイスの ID 番号に注意してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/42.png" style={{width:600, height:'auto'}}/></div>
:::

</TabItem>

<TabItem value="Scenario 2. If the device is not found" label="シナリオ 2. デバイスが見つからない場合">

自宅にデバイスが多すぎる場合、Home Assistant から直接検索できないことがあります。その場合は、デバイスを手動で追加する必要があります。

**Settings** ページで、**Devices & Services** を選択します。

右下の **ADD INTEGRATION** ボタンをクリックし、**SenseCraft** を検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

SenseCraft をクリックし、Action として **Add device using host/id** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

**SUBMIT** をクリックし、ドロップダウンメニューから `Grove Vision AI V2` などのデバイスタイプを選択して、再度 **SUBMIT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/40.png" style={{width:500, height:'auto'}}/></div>

次の入力フィールドに、デバイスの正確な ID を入力します。この ID は通常、デバイス本体または SenseCraft AI の Web サイト上に記載されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/70.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/58.png" style={{width:1000, height:'auto'}}/></div>

次のステップでは MQTT サービスを設定します。Web サイト上で設定した MQTT サービスの詳細と一致する情報を入力してください。以前にユーザー名とパスワードを設定していない場合は、ここでは入力する必要はありません。その後 **SUBMIT** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/59.png" style={{width:500, height:'auto'}}/></div>

- **Broker**: Home Assistant の IP アドレス。
- **Port**: `1883`。
- **clientId**: デバイスの識別番号として、`grove_vision_ai_v2_` を接頭辞とし、その後にカスタム ID 番号を続けてください。
- **username**: 先ほど作成した EMQX データベースの名前。
- **password**: 先ほど作成した EMQX データベースのパスワード。

</TabItem>

</Tabs>

セットアップが成功すると、通常システムからデバイスの設置場所を選択するよう求められます。実際の状況に応じて適切な部屋やエリアを選択し、**Finish** をクリックします。

設定が完了すると、Home Assistant の "Overview" ページでデバイスとそのステータスを確認できます。

これらの手順に従うことで、"SenseCraft" デバイスを Home Assistant インスタンスに正常に追加し、MQTT サービスを使用するように構成できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/a4.png" style={{width:1000, height:'auto'}}/></div>

## トラブルシューティング

### Q1: Grove Vision AI V2 が切断された後、HA にデータメッセージがまったく表示されなくなった場合はどうすればよいですか？

SenseCraft でデバイスを削除してから再追加する必要があるかもしれません。削除後は自動検索ができなくなる場合があり、その際はデバイスを手動で追加する必要があります。デバイスを再追加するには、**[こちらの手順](#step-11-home-assistant-への統合)** を参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/44.png" style={{width:1000, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
