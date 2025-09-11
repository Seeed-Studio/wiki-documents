---
description: NVIDIA Jetson デバイスで Lumeo を使用して AI モデルをデプロイする
title: Lumeo の使い方入門
tags:
  - AI モデルデプロイ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Lumeo-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA® Jetson デバイスでの Lumeo の使い方入門

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/thumb.gif" /></div>

[Lumeo](https://lumeo.com) は、カスタムビデオ分析やその他のビジョンAI対応アプリケーションを迅速に設計、デプロイ、監視できるノーコードのビデオ分析プラットフォームです。

このウィキでは、NVIDIA Jetson プラットフォームに Lumeo を簡単にインストールし、ゲートウェイとして設定する方法を説明します。これにより、同じネットワーク上のストリーム、IP カメラ、または接続された USB カメラからのビデオを処理するパイプラインを実行できるようになります。

## 対応ハードウェア

Lumeo は以下のプラットフォームでサポートされています：

- NVIDIA Jetson
- Nvidia GPU を搭載した x86 サーバー
- AWS、GCP、Azure などの GPU インスタンス

ただし、このウィキでは NVIDIA Jetson プラットフォームへの Lumeo のデプロイ方法にのみ焦点を当てます。

## 前提条件

- NVIDIA JetPack を実行し、すべての SDK コンポーネントがインストールされ、インターネットに接続された NVIDIA Jetson デバイス

  - このウィキは、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) で [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51) を実行してテストされています。
- インターネットに接続された Windows、Linux、または Mac を搭載したホスト PC

## Lumeo アカウントの作成

**ステップ 1:** [こちらのページ](https://console.lumeo.com/register)にアクセスし、メールアドレス、パスワードを入力し、利用規約に同意するチェックボックスをクリックして、**Sign up** をクリックします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/9.jpg" /></div>

**ステップ 2:** 新しいアカウントにサインアップした後、[こちらのページ](https://console.lumeo.com/login)にアクセスして、作成したメールアドレスとパスワードでアカウントにサインインします。

**ステップ 3:** **組織名** と **ワークスペース名** を入力し、**Start using Lumeo** をクリックします。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Lumeo/10.png" /></div>

これで、以下のように Lumeo コンソールが表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/11.jpg" /></div>

## NVIDIA Jetson に Lumeo Gateway をインストールする

**ステップ 1:** Jetson デバイス内でインストーラースクリプトを実行します。

```sh
bash <(wget -qO- https://link.lumeo.com/setup)
```

インストーラースクリプトのプロンプトに従って、必要に応じて応答します。ここではすべてデフォルトの設定を維持することができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/1.png" /></div>

以下の出力が表示された場合、インストーラーが正常に完了したことを意味します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/2.png" /></div>

**ステップ 2:** プロンプト **Enter the command:** に **Install** と入力して、ゲートウェイを含む新しいコンテナをインストールします。

```
Enter the command: 
install
```

**注意:** 無料の Lumeo アカウントでは、1つのゲートウェイしかデプロイできません。そのため、Jetson デバイス上に独自のゲートウェイをデプロイする前に、Lumeo に付属するデフォルトのクラウドゲートウェイを削除する必要があります。プリロードされたクラウドゲートウェイに入り、**Delete** をクリックしてそのゲートウェイを削除してください。

**ステップ 3:** プロンプトが表示されたらコンテナの名前を入力し、Lumeo アカウントの資格情報でログインします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/4.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/12.jpg" /></div>

**ステップ 4:** コンテナのインストールが完了したら、**list** と入力してインストールしたコンテナを一覧表示します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/5.png" /></div>

**ステップ 5:** **exit** と入力して実行中のスクリプトを終了します。

これで NVIDIA Jetson に Lumeo Gateway を正常にインストールできました。Lumeo コンソールに移動し、**Gateways** に移動すると、新しくデプロイされた Jetson ベースのゲートウェイが表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/13.png" /></div>

**ステップ 3:** ゲートウェイをクリックして、ゲートウェイに関する追加情報を表示します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/14.jpg" /></div>

## ゲートウェイにカメラを追加する

ここでは、Jetson デバイス上で既にセットアップしたゲートウェイにカメラを追加します。

**ステップ 1:** USB カメラを Jetson デバイスの USB ポートのいずれかに接続するか、ONVIF カメラを Jetson デバイスと同じネットワークに接続します。

**ステップ 2:** 以前にセットアップしたゲートウェイの下で、**Add Camera** をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/15.jpg" /></div>

**ステップ 3:** 接続されたすべての USB カメラと、同じネットワーク上の ONVIF カメラを自動検出しようとします。カメラをゲートウェイに追加するには、カメラの横にある **Link** をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/16.png" /></div>

接続されたカメラが検出されない場合は、**Discover** をクリックして自動検出プロセスを再開します。それでも失敗する場合は、**+ Manually add cameras** をクリックして、すべてのカメラを手動で設定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/17.png" /></div>

**ステップ 4:** **Camera name** を入力し、必要に応じてカメラの認証情報を提供し、最後に **Connect camera** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/18.png" /></div>

これで、カメラが正常にリンクされたことが確認できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/19.png" /></div>

**ステップ 5:** リンクされたカメラをクリックして、以下のようにプレビューのスナップショットを出力します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/20.png" /></div>

**ステップ 6:** RTSP または HTTP ストリームを追加したい場合は、**Deploy > Streams** に移動し、**Add input stream** をクリックしてストリームを設定します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/21.jpg" /></div>

## 人物検出パイプラインを構築する

Lumeo は、事前構成されたパイプラインと事前ロードされたモデルを使用して、さまざまなソリューションを提供します。ここでは、Lumeo を使用してシンプルな人物検出アプリケーションを作成します。

**ステップ 1:** **Design > Solutions** セクション内の **Basics - Detect Objects** を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/22.jpg" /></div>

これで、ブロックベースのスタイルでテンプレートが作成され、ソリューションにカスタマイズや機能を追加できるようになります。ここで、好みに応じてブロックを追加、変更、または削除できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/23.jpg" /></div>

**ステップ 2:** このテンプレートはデフォルトで **人物検出** モデルをロードし、オブジェクトを追跡し、ビデオをエンコードして WebRTC を介してストリームします。すべての構成済みブロックをデフォルトのままにして、**Deploy** をクリックします。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/24.jpg" /></div>

**ステップ 3:** **Select Gateway** の下で、Jetson 上にデプロイしたゲートウェイを選択し、以前に設定したカメラを選択して、**Deploy** をクリックしてアプリケーションを Jetson デバイスにデプロイします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/25.png" /></div>

デプロイが成功すると、以下のように **running** という緑色のアイコンが表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/26.png" /></div>

**ステップ 4:** **再生ボタン** をクリックして、WebRTC を介して出力ストリームを表示します。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Lumeo/27.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/28.png" /></div>

## 詳細情報

Lumeoは非常に詳細で包括的なドキュメントを提供しています。そのため、[こちら](https://docs.lumeo.com)で確認することを強くお勧めします。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>