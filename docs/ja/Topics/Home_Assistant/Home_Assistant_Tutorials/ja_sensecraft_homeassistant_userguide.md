---
description: これは SenseCraft-HomeAssistant ユーザーマニュアルです
title: SenseCraft-HomeAssistant ユーザーマニュアル
keywords:
- home assistant 
slug: /ja/sensecraft_homeassistant_userguide
last_update:
  date: 05/15/2025
  author: WenHao
---


# SenseCraft-HomeAssistant ユーザーマニュアル

## はじめに

SenseCraft-HomeAssistant は HomeAssistant 用のプラグインです。このプラグインを使用することで、ユーザーは SenseCraft データプラットフォーム（以前の SenseCAP クラウドプラットフォーム）のアカウントでログインし、HomeAssistant プラットフォーム上でクラウドデバイスやセンサーデータにアクセスし、カスタムデバイスレポートダッシュボードを生成することができます。

:::note
SenseCraft-HomeAssistant プラグインは現在、HomeAssistant システム上のサードパーティアプリストアである HACS を介してのみインストール可能です。HomeAssistant が提供する公式統合が十分でない場合、HACS を使用するとサードパーティ統合を簡単に追加および管理できます。
:::

### 1.1 HACS のインストール手順

HACS プラグインをダウンロードするにはターミナルコマンドが必要なため、まずターミナルアプリをインストールする必要があります。

1. **高度なモードを有効にしてターミナルアプリを検索**

- 高度なモードを開き、アドオンに移動してターミナルアプリケーションを検索します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage2.png" alt="pir" width={800} height="auto" /></p>

- 見つからない場合は、まずネットワーク接続を確認し、次に HomeAssistant を再起動してみてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage3.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage4.png" alt="pir" width={800} height="auto" /></p>

2. **インストール、起動、およびターミナルインターフェースの開放**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage5.png" alt="pir" width={800} height="auto" /></p>

3. **ターミナルで以下のコマンドを入力して HACS インストールパッケージをダウンロード**（詳細は [https://hacs.xyz/docs/setup/download](https://hacs.xyz/docs/setup/download) を参照）:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage6.png" alt="pir" width={800} height="auto" /></p>

- config ディレクトリに移動:

```
cd config
```

- HACS をダウンロードしてインストール:

```
wget -q -O - https://install.hacs.xyz | bash -
```

4. **Home Assistant を再起動**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage7.png" alt="pir" width={800} height="auto" /></p>

5. **HACS プラグインを検索してインストール**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage8.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage9.png" alt="pir" width={800} height="auto" /></p>

6. **ライセンス契約が表示されるので、すべての契約を確認して送信**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage10.png" alt="pir" width={800} height="auto" /></p>

7. **リンクをクリックして GitHub ページに移動し、ログインして、下部に表示される 8 文字のコードを GitHub インターフェースに入力**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage11.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage12.png" alt="pir" width={800} height="auto" /></p>

8. **認証を行う**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage13.png" alt="pir" width={800} height="auto" /></p>

9. **これで HACS ストアがインストールされます**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage14.png" alt="pir" width={800} height="auto" /></p>

### 1.2 SenseCraft プラグインのインストール

1. 上記の手順を完了すると、左側のメニューバーに新しい「HACS」項目が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage15.png" alt="pir" width={800} height="auto" /></p>

2. SenseCraft リポジトリ URL とカテゴリを入力し、「追加」ボタンをクリックします:

:::note
   - リポジトリ: `https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git`
   - カテゴリ: `Integration`
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage16.png" alt="pir" width={800} height="auto" /></p>

3. 検索ボックスに「sensecraft」と入力し、SenseCraft プラグインを見つけます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage17.png" alt="pir" width={800} height="auto" /></p>

4. SenseCraft プラグインをクリックしてプラグイン紹介ページに移動し、「ダウンロード」ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage18.png" alt="pir" width={800} height="auto" /></p>

これで、SenseCraftを現在のHome Assistantセットアップに追加する作業が完了しました。

## Grove Vision AI(V2)とSenseCraft-HomeAssistant

デバイスをファームウェアやモデルなしで購入した場合、まずファームウェアとモデルを書き込む必要があります。

デバイスにすでにファームウェアとモデルが含まれている場合は、**ステップ2**をスキップできます。以下は、デバイスにファームウェアとモデルが含まれているかどうかを確認する方法です。ファームウェアとモデルは一緒にバンドルされています。

### 2.1 デバイスにファームウェアとモデルが含まれているか確認する

1. ウェブサイト [https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) を開き、デバイスをコンピュータに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage19.png" alt="pir" width={800} height="auto" /></p>

2. Grove Vision AI V2をコンピュータに接続します。

3. Grove Vision AIオプションに切り替えます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage20.png" alt="pir" width={800} height="auto" /></p>

4. 初めての場合、権限を求められます。表示されたデバイスを選択し、「接続」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage21.png" alt="pir" width={800} height="auto" /></p>

5. 表示される情報と画像がスクリーンショットに似ている場合、正常に動作しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage22.png" alt="pir" width={800} height="auto" /></p>

### 2.2 ファームウェアとモデルの書き込み

モデル情報が検出されず、ライブプレビューがない場合は、ファームウェアとモデルを再書き込みする必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage23.png" alt="pir" width={800} height="auto" /></p>

プリセットモデル（例：性別検出）を選択し、「送信」をクリックします。ファームウェアの書き込みが完了するまで待ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage24.png" alt="pir" width={800} height="auto" /></p>

### 2.3 MQTTサービスの設定

#### オプション1: Home AssistantでMQTTサービスを設定する

1. **「設定 > アドオン > アドオンストア」を開く**し、右下の「アドオンストア」を見つけます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage25.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage26.png" alt="pir" width={300} height="auto" /></p>

2. ストアで「mqtt」を検索します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage27.png" alt="pir" width={800} height="auto" /></p>

3. インストールをクリックし、MQTTサービスをユーザー名とパスワードで設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage28.png" alt="pir" width={400} height="auto" /></p>

4. 「オプション > ログイン」に移動し、ユーザー名またはパスワードを希望のものに置き換えます。設定を保存します。

:::note
- ユーザー名: user
- パスワード: passwd
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage29.png" alt="pir" width={800} height="auto" /></p>

:::note
エラーがない場合は成功です。エラーがある場合は、アンインストールして再インストールし、再度設定を試してください。
:::

#### オプション2: 自分のコンピュータにMQTTサービスをインストールする

1. [https://www.emqx.com/en/downloads/broker/5.4.0](https://www.emqx.com/en/downloads/broker/5.4.0) からシステムに適したEMQXをダウンロードし、OSに応じた指示に従います。

2. MacOSを例に取ると：

以下を使用してパッケージをダウンロードします：

```
wget https://www.emqx.com/en/downloads/broker/5.4.0/emqx-5.4.0-macos13-amd64.zip
```

そしてEMQXをインストールします：

```
mkdir -p emqx && unzip emqx-5.4.0-macos13-amd64.zip -d emqx
```

最後にEMQXを実行します：

```
./emqx/bin/emqx start
```

3. 機能しているかテストします：

[MQTTダウンロード](https://mqttx.app/downloads) にアクセスしてターミナルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage30.png" alt="pir" width={800} height="auto" /></p>

### MQTTサービス成功の確認

- [MQTTXダウンロードページ](https://mqttx.app/downloads) からMQTTXクライアントをダウンロードし、MQTTサービスがPCからアクセス可能か確認します（公開ネットワークサーバー上に展開されている場合、またはPCと同じネットワークセグメント内にある場合）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage31.png" alt="pir" width={800} height="auto" /></p>

- 接続が成功すれば問題ありません。

### 2.4 WIFIとMQTTの設定

#### なぜこれらを設定する必要があるのか？

Grove Vision AIのHome Assistantでの操作はMQTTを通じて行われます。また、MQTT自体がネットワーク接続を必要とするため、WIFIの設定が必要です。5G WIFIは選択できないことに注意してください。設定ページに移動します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage32.png" alt="pir" width={800} height="auto" /></p>

対応する情報を入力し、「保存」をクリックしてください。ただし、ここでの保存は情報を保存するだけであり、実際に正しく設定されたかどうかは不明です。設定が正しいか確認するには、再び「プロセス」ページに戻る必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage33.png" alt="pir" width={800} height="auto" /></p>

IPアドレスが表示されている場合、Wi-Fiに問題がないことを意味します。サービスステータスは、正常な動作を示すために画像のように表示される必要があります。注意点として、Wi-Fiが正常でない場合、MQTTも確実に正常ではありません。

切り替えた際、最初は「切断」と表示されることがありますが、約10秒、通常は20秒以内に接続されます。

**ステータスを確認するためにリフレッシュする必要はありません。ステータスは自動的に最新の状態に更新されます。**

### 2.5 Discoveryを使用してHAに統合する

デバイスを「発見済み」セクションに表示させるには、デバイスとHAが同じネットワークセグメント上にある必要があります。そうでない場合、デバイスは表示されません。ネットワークセグメントが不明な場合は、HAとデバイスを同じWi-Fiまたは同じルーターにイーサネットで接続してください。

上記の操作を完了したばかりの場合は、デバイスの電源を切り、再度接続することをお勧めします。設定ページにアクセスしてください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage34a.png" alt="pir" width={800} height="auto" /></p>

次に、以下のページが表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage34.png" alt="pir" width={800} height="auto" /></p>

ここで、最初に発見されたデバイスが表示されます。対応するIDを確認して、それが自分のデバイスかどうかを確認してください：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage35.png" alt="pir" width={400} height="auto" /></p>

丸で囲まれた部分がデバイスIDであり、以下のウェブサイト上のデバイスIDに対応しています：
https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage36.png" alt="pir" width={400} height="auto" /></p>

それが自分のデバイスである場合、「設定」をクリックしてください。ここで、MQTTサービスにユーザー名とパスワードがない場合、以下のダイアログボックスが表示されます。そうでない場合は、ユーザー名とパスワードの入力を求められます。その後、「送信」をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage37.png" alt="pir" width={800} height="auto" /></p>

MQTTサービスにユーザー名とパスワードがある場合は、以下のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage38.png" alt="pir" width={600} height="auto" /></p>

次に、デバイスの場所を選択します。例えば、リビングルーム、キッチンなどです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage39.png" alt="pir" width={600} height="auto" /></p>

ここではリビングルームを選択し、「完了」をクリックします。これでデバイスがHAに追加されます。この時点で、「概要」をクリックして、設定が完了した効果を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage40.png" alt="pir" width={800} height="auto" /></p>

### 2.6 手動でHAに統合する

発見済みデバイスを使用できる場合は、手動設定よりも簡単なため、発見済みセクションから設定してください。「設定」を選択し、「デバイスとサービス」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage41.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage42.png" alt="pir" width={800} height="auto" /></p>

次に、以下のように「SenseCraft」の別のインスタンスを選択します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage43.png" alt="pir" width={500} height="auto" /></p>

次に、`<Add device using host/id (LAN integration)>`を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage44.png" alt="pir" width={500} height="auto" /></p>

その後、「送信」をクリックし、ドロップダウンから`grove_vision_ai_we2`を選択して「送信」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage45.png" alt="pir" width={500} height="auto" /></p>

次に、デバイスIDを入力します。これはウェブサイトに対応するデバイスIDであり、任意の値ではありません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage46.png" alt="pir" width={500} height="auto" /></p>

その後、「送信」をクリックし、次にMQTTサービスの設定を行います。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage47.png" alt="pir" width={500} height="auto" /></p>

ここに入力する詳細は、ウェブサイトで設定した内容と一致している必要があります。以前にユーザー名とパスワードがなかった場合、ここでも入力する必要はありません。その後、「送信」をクリックします。成功すると、デバイスの場所を選択するよう求められます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage48.png" alt="pir" width={500} height="auto" /></p>

実際の状況に基づいて場所を選択し、「完了」をクリックします。この方法で概要で効果を確認することができます。残りの手順は「発見済み」方法と同じです。

## センサーノードをHAに統合する

当社には光や二酸化炭素などの多くのセンサーがあり、これらも簡単にHAに統合することができます。センサーノードを統合するには、[SENSECAPウェブサイト](https://sensecap.seeed.cc/portal/)でアカウントを作成する必要があります。そのため、まず国際サイトまたは国内サイトでアカウントを登録し、センサーノードをアカウントに追加してください。

以下では、アプリを使用してデバイスを追加する方法について説明します：

- [SenseCAP Mate App](https://sensecap-mate-download.seeed.cn/)

### 3.1 SenseCAP Mateアプリを使用してセンサーノードを追加する

まずアプリのホームページにログインしてください。以下の手順に従って追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage49.png" alt="pir" width={800} height="auto" /></p>

### 3.2 ウェブサイトを使用してセンサーノードを追加する

[SENSECAPウェブサイト](https://sensecap.seeed.cc/portal/)にアクセスし、センサー機器のEUI、Keyなどを入力して「確認」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage50.png" alt="pir" width={800} height="auto" /></p>

その後、センサーノードリストに追加したデバイスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage51.png" alt="pir" width={800} height="auto" /></p>

### 3.3 HAへの追加

「設定 > 統合を追加」に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage52.png" alt="pir" width={800} height="auto" /></p>

表示されるダイアログで「sensecraft」を検索します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage53.png" alt="pir" width={500} height="auto" /></p>

その後、フィルター結果をクリックし、`<another instance of device "SenseCraft">`を選択して、「SenseCraftアカウントを使用してデバイスを追加」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage54.png" alt="pir" width={800} height="auto" /></p>

「送信」をクリックし、登録したアカウントとパスワードを入力して環境を選択します。これは、国際ステーション（グローバル）または国内ステーション（中国）で登録したかどうかによります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage55.png" alt="pir" width={500} height="auto" /></p>

追加が完了したら、必要に応じてセンサー設定を構成することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sensecraft/sensecraft_homeassistant/SenseCraft-HomeAssistantimage56.png" alt="pir" width={500} height="auto" /></p>

## さらに詳しく

Home Assistant を NVIDIA Jetson に統合する機能は近日公開予定です！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>