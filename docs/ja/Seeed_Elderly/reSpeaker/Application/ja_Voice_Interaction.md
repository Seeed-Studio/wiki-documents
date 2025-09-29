---
description: 音声インタラクション
title: 音声インタラクション
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Voice_Interaction
last_update:
  date: 1/13/2023
  author: shuxu hu
---

世界中の音声インタラクションサービスの全体像をご紹介します。

## 1. Alexa

Alexaは、Amazonのクラウドベースの音声サービスで、Amazonおよびサードパーティデバイスメーカーの数千万台のデバイスで利用可能です。Alexaを使用することで、顧客が日常的に使用するテクノロジーとより直感的に対話できる自然な音声体験を構築できます。私たちのツール、API、リファレンスソリューション、ドキュメントのコレクションにより、誰でも簡単にAlexaで構築できます。

**Alexaで何が構築できるか？**
- **Alexaに機能を追加**：Alexa Skills Kit（ASK）を使用してAlexaに機能やスキルを追加します。ASKは、セルフサービスAPI、ツール、ドキュメント、コードサンプルのコレクションです。スキルはAlexaをより賢くし、顧客が音声でより多くのことを実行できるようにします。私たちのツールキットで自然で音声ファーストの体験を構築し、顧客がテクノロジーと対話する方法を再定義してください。
- **デバイスにAlexaを統合**：Alexa Voice Service（AVS）を使用してAlexaを製品に直接統合し、接続されたデバイスにハンズフリー音声制御の利便性をもたらします。AVSを通じて、製品に新しいインテリジェントなインターフェースを追加し、顧客に増え続けるAlexaの機能、スマートホーム統合、スキルへのアクセスを提供できます。
- **デバイスをAlexaに接続**：Alexaをデバイスに接続して、顧客に楽しく直感的な体験を提供します。スマートホームデバイスにAlexaを追加して、スマートカメラ、照明、エンターテインメントシステムなどの音声制御を可能にします。また、独自のAlexa Gadgetsを構築したり、Echo ButtonsなどのAlexa Gadgetsと連携するインタラクティブなスキルを作成したりできます。

**開発者リソース**

-　[Alexa Voice Service Get Started](https://developer.amazon.com/zh/alexa-voice-service)
-　[avs-device-sdk](https://github.com/alexa/avs-device-sdk/wiki)

## 2. Google アシスタント

Google Assistant SDKを使用すると、ホットワード検出、音声制御、自然言語理解、Googleのスマート機能をデバイスに追加できます。デバイスが発話（「私のカレンダーには何がありますか？」などの音声リクエスト）をキャプチャし、Google Assistantに送信し、発話の生テキストに加えて音声応答を受信します。

**何ができるか？**
- **タスク管理**：テキストの送信、リマインダーの設定、バッテリーセーバーの有効化、メールの即座検索。
- **一日の計画**：フライト状況の確認、夕食の予約、映画の開始時間の確認、ルート上のコーヒーショップの検索。
- **エンターテインメントを楽しむ**：Google PlayとYouTube Musicで音楽を制御。Google HomeのAssistantでお気に入りのポッドキャストの続きを聞くこともできます。
- **思い出を作る**：Assistantは写真の検索と撮影を非常に簡単にします。
- **答えを得る**：天気、交通、金融、スポーツの最新情報を含むリアルタイムの回答を取得。旅行中の翻訳も素早く見つけられます。
- **家を制御**：スマートフォンを使用してスマートホームデバイスを制御。外出中でも温度、照明などを調整できます。

**開発者リソース**

- [Google Assistant](https://assistant.google.com/)
- [SDK](https://developers.google.com/assistant/sdk/overview)

## 3. Bing Speech

Bing Speech には、音声をテキストに変換し、意図を理解し、テキストを音声に変換して自然な応答性を実現する機能が含まれています。

**音声認識**
話された音声をテキストに変換します。この API は、リアルタイムでマイクからの音声をオンにして認識したり、異なるリアルタイム音声ソースからの音声を認識したり、ファイル内の音声を認識したりするように指示できます。すべての場合において、リアルタイムストリーミングが利用可能で、音声がサーバーに送信されると同時に、部分的な認識結果も返されます。

Speech to Text API を使用すると、音声でトリガーされるスマートアプリを構築できます。動作を確認するには、対象言語を選択してマイクをクリックし、話し始めてください。または、サンプル音声フレーズの1つをクリックして、音声認識の動作を確認してください。このデモを使用する際は、サービス改善の目的で音声入力データを Microsoft に提供することに同意したものとみなされます。

**テキスト読み上げ**
テキストを話された音声に変換します。アプリケーションがユーザーに「話しかける」必要がある場合、この API を使用してアプリが生成したテキストを、ユーザーに再生できる音声に変換できます。

Text-To-Speech API を使用すると、話すことができるスマートアプリを構築できます。今すぐテストできます。対象言語を選択し、文章を追加してから再生ボタンをクリックして、音声合成の動作を確認してください。このデモを使用する際は、サービス改善の目的で音声入力データを Microsoft に提供することに同意したものとみなされます。

**開発者リソース**

- [API](https://docs.microsoft.com/en-us/azure/cognitive-services/speech/home)


## 4. Baidu

Baidu Speech には STT、TTS、音声インタラクション、オフラインウェイクアップが含まれています。

**開発者リソース**

-　[SDK](https://github.com/MyDuerOS/DuerOS-Python-Client)
-　[API](http://ai.baidu.com/docs#/ASR-Android-SDK/top)

## 音声インタラクションチュートリアルリスト

音声インタラクションチュートリアルリストです。

<!-- - [ReSpeaker Core V2 & Wio Link](/ja/ReSpeaker_Core_V2_&_Wio_Link/)
- [Google Assistant](/ja/Google_Assistant) -->
弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験を可能な限りスムーズにするため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
