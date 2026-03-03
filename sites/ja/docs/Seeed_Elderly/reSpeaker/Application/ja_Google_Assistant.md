---
description: reSpeaker用Google Assistant
title: reSpeaker用Google Assistant
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Google_Assistant
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Front.jpg)

このwikiはReSpeaker Core v2.0用です。まず[ReSpeaker Core v2.0のWiki](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/#preparation)を読むことをお勧めします。

## 開始前の準備

以下の準備が必要です：

- 最新イメージを搭載したReSpeaker Core v2.0
- Wi-Fiネットワーク（このネットワークでgoogleにpingできることを確認してください）
- PCまたはMac
- Micro-USBケーブル1本
- [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

[準備](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/#preparation)を読み、WiFiとシリアルの設定が既に完了していることを前提としています。

それでは始めましょう 😃

## はじめに

### ハードウェア

この部分は簡単です。ReSpeaker Core v2.0を`OTG`ポート経由でコンピューターに接続するだけです。

### ソフトウェア

#### プロジェクトの設定

- **ステップ1. プロジェクトの追加**

[リンク](https://console.actions.google.com/?pli=1)を開いてプロジェクトを追加します。

:::note
    googleアカウントをお持ちでない場合は、まずgoogle.comでサインインしてください。
:::

`Add/Import project`をクリックします

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_0.png)

`Project name`を入力し、`Country/region`を選択します。その後、`CREATE PROJECT`をクリックして続行します。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_1.png)

- **ステップ2. モデルの登録**

下の画像のように`Connected properties ->DEVICE MODELS ->REGISTER MODEL`をクリックします。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_2.png)

製品情報を入力し、`REGISTER MODEL`をクリックして続行します。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_3.png)

`NEXT`をクリックします

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_4.png)

`ALL 7 traits`オプションが選択されていることを確認してください。これにより、すべての権限を有効にできます。その後、`SAVE TRAITS`をクリックします。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_5.png)

作成したプロジェクト名をクリックしてください。このデモでは、`ReSpeaker Core v2.0`を使用しています。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_6.png)

以下の画像のような情報が表示されます。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_7.png)

このデモでは`respeaker-xxxx-respeaker-core-v2.0-xxxxx`である`Model Id`をメモしてください。これは重要で、後で使用します。

次に、jsonファイルをダウンロードしましょう。右上角のボタンをクリックし、`Download credentials.json`をクリックしてjsonファイルをコンピューターにダウンロードします。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_8.png)

[WinCP](https://winscp.net/eng/docs/lang:chs)または他の転送ツールを使用して、jsonファイルをReSpeaker Core v2.0にコピーします。
例えば、`/home/respeaker`パスにコピーします。

次に、左上角の歯車をクリックし、`Project settings`をクリックして、このデモでは``である`Project ID`を覚えておいてください。
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_9.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_10.png)

確認しましょう。このセクションで2つのIDを取得します。

Model ID `respeaker-xxxx-respeaker-core-v2.0-xxxxx`

Project ID `respeaker-440eb`

これらは後で使用されます。

#### Google Assistant APIの有効化

選択したプロジェクトでGoogle Assistant APIを有効にします（[利用規約](https://developers.google.com/assistant/sdk/terms-of-service)を参照）。これはCloud Platform Consoleで行う必要があります。

[こちら](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview)をクリックしてGoogle Assistant APIを有効にします。

以下のトグルスイッチが有効（青色）になっていることを確認してください：

- `Web & App Activity`
- さらに、`Include Chrome browsing history and activity from websites and apps that use Google services`チェックボックスを選択してください。
- `Device Information`
- `Voice & Audio Activity`

#### SDKとサンプルコードのインストール

この部分の詳細については、[googleドキュメント](https://developers.google.com/assistant/sdk/guides/service/python/embed/install-sample)を参照してください。

python2.7とpython3の両方でこの部分を実行できますが、このデモではpython2.7を使用します。

**python2.7の場合**

**ステップ1.**

以下のコマンドを入力します：

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install python-dev python-virtualenv
sudo virtualenv env --no-site-packages  
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate

```

**ステップ 2. パッケージを取得する**

Google Assistant SDK パッケージには、サンプルコードを含む、デバイス上で Google Assistant を実行するために必要なすべてのコードが含まれています。

パッケージのシステム依存関係をインストールします：

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
Use pip to install the latest version of the Python package in the virtual environment:
sudo python -m pip install --upgrade google-assistant-sdk[samples]

```

**ステップ3. 認証情報を生成する**

認証ツールをインストールまたは更新します：

```
sudo python -m pip install --upgrade google-auth-oauthlib[tool]==0.2
```

ターゲットフォルダを作成します。

```
sudo mkdir –p /path/to/assistant-sdk/
```

以下のコマンドを使用して `credentials.json` をターゲットの場所にコピーします。

```
sudo cp /home/respeaker/credentials.json /path/to/assistant-sdk/ 
```

以下のコマンドをタップしてトークン生成コードを取得します。

```
google-oauthlib-tool --scope https://www.googleapis.com/auth/assistant-sdk-prototype \
          --save --headless --client-secrets /path/to/assistant-sdk/credentials.json

```

:::note
    上記のコマンドを使用することで、毎回異なる認証コードを取得できます。必ず確認してください
:::

その後、コードが取得できますので、`Please visit this URL to authorize this application:` の注記の後にあるコードをコピーしてください。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code0.png)

コードをインターネットブラウザに貼り付けて、`Enter` キーを押してください。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code1.png)

すべてが順調に進むと、以下のウィンドウがポップアップします。Google アカウントを選択し、`ALLOW` を選択してください。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code2.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code3.png)

これで、以下の画像に示すように認証コードが取得できます。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code4.png)

このコードをコンソールにコピーしてください
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code5.png)

その後、`credentials saved: /path/to/.config/google-oauthlib-tool/credentials.json` という通知が表示されます。これは、ここまでのすべてが順調に進んでいることを意味します。

#### Respeakerd のインストール

以下のコマンドを実行して respeakerd をインストールしてください

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
git clone https://github.com/respeaker/googleassistant_respeakerd
cd googleassistant_respeakerd
sudo python setup.py install
sudo cp script/io.respeaker.respeaker.conf /etc/dbus-1/system.d/
# set respeakerd to pulse mode
sudo vim /etc/respeaker/respeakerd.conf 
# reboot to make it work
sudo reboot
```

#### Google Assistantを有効化する

前にマークした2つのIDを覚えていますか？今度はそれらを使用する時です。

コマンド `googlesamples-assistant-respeakerd --project-id my-dev-project --device-model-id my-model` を自分のIDに変更してください。

上記のコマンドで、`my-dev-project` を自分の `project-id` に変更し、`my-model` を自分の `Model ID` に変更してください。

このデモでは、次のようになります

```
googlesamples-assistant-respeakerd --project-id respeaker-440eb --device-model-id respeaker-xxxx-respeaker-core-v2.0-xxxxx
```

さあ、乾杯!!!

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/codel.png)

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験を可能な限りスムーズにしていただくため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
