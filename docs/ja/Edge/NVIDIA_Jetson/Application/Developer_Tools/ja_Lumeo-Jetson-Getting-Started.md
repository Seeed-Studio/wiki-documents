---
description: NVIDIA Jetsonデバイス上でLumeoを使用してAIモデルをデプロイする
title: Lumeoを始める
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Lumeo-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# NVIDIA® JetsonデバイスでLumeoを始める

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/thumb.gif" /></div>

[Lumeo](https://lumeo.com)は、カスタムビデオ分析やその他のビジョンAI対応アプリケーションを迅速に設計、デプロイ、監視できるノーコードビデオ分析プラットフォームです。

このwikiでは、NVIDIA Jetsonプラットフォーム上にLumeoを簡単にインストールし、ゲートウェイとして設定する方法を説明します。これにより、パイプラインを実行し、ストリーム、同一ネットワーク上のIPカメラ、または接続されたUSBカメラからのビデオを処理できるようになります。

## サポートされているハードウェア

Lumeoは以下のプラットフォームでサポートされています：

- NVIDIA Jetson
- Nvidia GPU搭載x86サーバー
- AWS、GCP、AzureなどのGPUインスタンス

ただし、このwikiではNVIDIA JetsonプラットフォームでのLumeoのデプロイ方法のみに焦点を当てます

## 前提条件

- すべてのSDKコンポーネントがインストールされ、インターネットに接続されたNVIDIA JetPackを実行するNVIDIA Jetsonデバイス

  - このwikiは[JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)を実行する[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)でテストしました
- Windows、Linux、またはMacでインターネットに接続されたホストPC

## Lumeoアカウントの作成

**ステップ1：** [このページ](https://console.lumeo.com/register)にアクセスし、メールアドレス、パスワードを入力し、利用規約に同意するチェックボックスをクリックして**Sign up**をクリックします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/9.jpg" /></div>

**ステップ2：** 新しいアカウントにサインアップした後、[このページ](https://console.lumeo.com/login)にアクセスして、以前に作成したメールアドレスとパスワードでアカウントにサインインできます

**ステップ3：** **組織名**と**ワークスペース名**を入力し、**Start using Lumeo**をクリックします

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Lumeo/10.png" /></div>

これで、以下のようにLumeoコンソールが表示されます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/11.jpg" /></div>

## NVIDIA JetsonへのLumeo Gatewayのインストール

**ステップ1：** Jetsonデバイス内でインストーラースクリプトを実行します

```sh
bash <(wget -qO- https://link.lumeo.com/setup)
```

インストーラースクリプトのプロンプトに必要に応じて応答してください。ここではすべてをデフォルトのままにしておくことができます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/1.png" /></div>

以下の出力が表示された場合、インストーラーが正常に完了したことを意味します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/2.png" /></div>

**ステップ 2:** プロンプト **Enter the command:** の横に **Install** と入力して、ゲートウェイを含む新しいコンテナをインストールします

```
Enter the command: 
install
```

**注意:** 無料のLumeoアカウントでは、デプロイできるゲートウェイは1つのみです。そのため、Jetsonデバイス上に独自のゲートウェイをデプロイする前に、Lumeoに付属するデフォルトのクラウドゲートウェイを削除する必要があります。事前にロードされたクラウドゲートウェイに入り、**Delete**をクリックしてそのゲートウェイを削除してください。

**ステップ3:** プロンプトが表示されたらコンテナの名前を入力し、プロンプトが表示されたらLumeoアカウントの認証情報でログインします

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/4.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/12.jpg" /></div>

**ステップ4:** コンテナのインストールが完了したら、**list**と入力してインストールしたコンテナを一覧表示します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/5.png" /></div>

**ステップ5:** **exit**と入力して実行中のスクリプトを終了します

これでNVIDIA JetsonにLumeo Gatewayが正常にインストールされました。Lumeoコンソールに移動して**Gateways**に移動すると、新しくデプロイされたJetson搭載ゲートウェイが表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/13.png" /></div>

**ステップ3:** Gatewayをクリックして、ゲートウェイに関する追加情報を表示します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/14.jpg" /></div>

## ゲートウェイにカメラを追加する

次に、Jetsonデバイス上にすでにセットアップしたゲートウェイにカメラを追加します

**ステップ1:** USBカメラをJetsonデバイスのUSBポートの1つに接続するか、ONVIFカメラをJetsonデバイスと同じネットワークに接続します

**ステップ2:** 前にセットアップしたGatewayの下で、**Add Camera**をクリックします

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/15.jpg" /></div>

**ステップ3:** 接続されたすべてのUSBカメラと同じネットワーク上のONVIFカメラを自動検出しようとします。カメラの横にある**Link**をクリックして、カメラをゲートウェイに追加します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/16.png" /></div>

接続されたカメラが検出されない場合は、Discoverをクリックして自動検出プロセスを再開始してください。それも失敗した場合は、**+ Manually add cameras**をクリックしてすべてのカメラを設定してください

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/17.png" /></div>

**ステップ4:** **Camera name**を入力し、カメラで必要な場合はカメラの認証情報を提供し、最後に**Connect camera**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/18.png" /></div>

これでカメラが正常にリンクされたことが表示されます

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/19.png" /></div>

**ステップ5:** リンクされたカメラをクリックして、以下のようにプレビュースナップショットを出力します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/20.png" /></div>

**ステップ6:** RTSPまたはHTTPストリームを追加したい場合は、**Deploy > Streams**に移動し、**Add input stream**をクリックしてストリームを設定できます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/21.jpg" /></div>

## 人物検出パイプラインの構築

Lumeoは、事前設定されたパイプラインと事前読み込みされたモデルを使用して、多くの異なるソリューションをすぐに使える形で提供しています。Lumeoを使用してシンプルな人物検出アプリケーションを作成してみましょう。

**ステップ1：** **Design > Solutions**セクション内の**Basics - Detect Objects**を選択します

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/22.jpg" /></div>

これで、ブロックベースのスタイルでテンプレートが作成され、ソリューションにさらなるカスタマイズと機能を追加できるようになります。ここでは、お好みに応じてブロックを追加、変更、または削除できます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/23.jpg" /></div>

**ステップ2：** このテンプレートはデフォルトで**人物検出**モデルを読み込み、オブジェクトを追跡し、ビデオをエンコードしてWebRTC経由でストリーミングします。設定されたすべてのブロックをデフォルトのままにして、**Deploy**をクリックします

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/24.jpg" /></div>

**ステップ3：** **Select Gateway**の下で、Jetsonにデプロイしたゲートウェイを選択し、以前に設定したカメラを選択して、**Deploy**をクリックしてアプリケーションをJetsonデバイスにデプロイを開始します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/25.png" /></div>

デプロイが成功すると、以下のように**running**という名前の緑色のアイコンが表示されます

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/26.png" /></div>

**ステップ4：** **再生ボタン**をクリックして、WebRTC経由で出力ストリームを表示します

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Lumeo/27.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/28.png" /></div>

## さらに詳しく学ぶ

Lumeoは非常に詳細で包括的なドキュメントを提供しています。[こちら](https://docs.lumeo.com)で確認することを強くお勧めします。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
