---
title: reSpeaker Clip FAQ
description: reSpeaker Clip の公式ドキュメント、ライブ文字起こしプロトタイピング、および機構リソースに関するよくある質問。
slug: /respeaker_clip_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker Clip FAQ
  - reSpeaker Clip documentation
  - live transcription
  - mechanical drawing
createdAt: '2026-09-01'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_faq/
updatedAt: '2026-09-03'
---

<div class="respeaker-faq-page">

# reSpeaker Clip FAQ

このページには、reSpeaker Clip に関する検証済みの回答が掲載されています。各回答には、対象となる製品バリアントとファームウェアモード、そして最新の公式情報源と照合された日付が記載されています。

## 始める前に

- デバイスが動作している正確な製品バリアントとファームウェアモード（USB または I2S）を確認します。
- バージョン固有の手順を適用する前に、現在のファームウェアバージョンを確認します。
- このページの回答は 2026-09-01 時点で最後に検証されています。これ以降に読んでいる場合は、リンクされた公式情報源を再確認してください。

<!-- RESPEAKER_FAQ_AUTO_START -->
## ドキュメントと使用方法 {#documentation-and-usage}

### 現在の公式 ReSpeaker Clip ドキュメントはどこで見つかりますか？ {#official-documentation}

**対象:** ReSpeaker Clip のユーザーおよび開発者

**最終検証日:** 2026-09-01

現在の ReSpeaker Clip Getting Started ページから始めてください。ホスト側での制御や録音転送には Basic SDK ガイドを使用し、デバイス側ファームウェアを変更する場合にのみ Firmware Development ガイドを使用します。古い `/respeaker_clip_getting_started/` URL は廃止されており、ブックマークすべきではありません。

**前提条件:**

- 対象の作業が、通常の製品利用なのか、ホスト側 SDK 連携なのか、あるいはデバイスファームウェア開発なのかを特定する

1. Getting Started を開き、セットアップ、アプリのワークフロー、仕様、および最新のリソース一覧を確認します。
2. Basic SDK ガイドを開き、録音の制御、セッション管理、BLE または Wi-Fi 経由でのファイル転送を行います。
3. Firmware Development ガイドは、ビルド、書き込み、デバッグ、またはデバイス側の動作変更を行う場合にのみ開きます。
4. 保存済みリンクが依然として開けない場合は、ドキュメント障害を報告する前に、対応する最新の Wiki URL に置き換えてください。

**成功条件:**

- 選択した最新ガイドが正しく読み込まれ、対象とする製品、ホスト SDK、またはファームウェア開発レイヤーをカバーしている

**補足:**

- Getting Started 上の一部リソースには、依然として明示的に `Coming soon` と記載されています。ガイドが公開されていることは、すべての機構図面やファームウェア成果物が公開済みであることを意味しません。

**参考情報:**

- [ReSpeaker Clip Getting Started](https://wiki.seeedstudio.com/ja/respeaker_clip/)
- [ReSpeaker Clip Basic SDK guide](https://wiki.seeedstudio.com/ja/respeaker_clip_basic_sdk_guide/)
- [ReSpeaker Clip Firmware Development guide](https://wiki.seeedstudio.com/ja/respeaker_clip_firmware_development_guide/)

### ReSpeaker Clip を使って、会話のライブ文字起こしプロトタイプを作成できますか？ {#live-conversation-transcription}

**対象:** 別のコンピュータまたはブラウザにライブ音声認識結果（音声→テキスト）を表示する ReSpeaker Clip プロトタイプ

**最終検証日:** 2026-09-01

はい、ホストおよびクラウドを組み合わせたプロトタイプの一部として利用できます。公式の Live STT サンプルは、RTC 対応の Clip ファームウェアから BLE 経由でマイク音声をストリーミングし、外部の STT プロバイダで完了した発話をテキストに変換し、その文字起こしをブラウザに表示します。これは、デバイス単体でのオンデバイス文字起こしとしてはドキュメント化されていません。

**前提条件:**

- RTC ライブストリーミング対応の ReSpeaker Clip ファームウェア
- Python 3.10 以降と動作する BLE アダプタ
- 公式サンプルが利用する STT プロバイダ向けのネットワークアクセスと API キー

1. 公式の Live STT アプリケーションガイドに従い、Python の依存パッケージをインストールします。
2. BLE 経由で ReSpeaker Clip に接続し、アプリケーション設定に STT プロバイダのキーを入力します。
3. `Start Streaming` を選択して話しかけ、各発話が完了してブラウザの文字起こしに表示されるまで待ちます。
4. アクセシビリティ支援としてプロトタイプを扱う前に、想定する音響環境でレイテンシと文字起こし精度を測定します。

**成功条件:**

- BLE 経由で RTC セッションが開始され、話した内容がブラウザ上でライブテキストとして表示される
- 想定する環境と言語に対して、テストしたレイテンシと精度が記録されている

**補足:**

- Live STT は RTC オーディオストリームに BLE を使用します。ドキュメント化されている Wi-Fi 経路は、Live STT ではなく録音と処理ワークフロー向けです。
- 公開サンプルは外部の文字起こしサービスに依存しており、認証済みの医療機器や支援機器として提示されてはいません。実際の導入にあたっては、プライバシー、接続性、レイテンシ、および障害時の挙動を確認してください。

**参考情報:**

- [ReSpeaker Clip Live STT application guide](https://wiki.seeedstudio.com/ja/respeaker_clip_python_build_app/)
- [ReSpeaker Clip RTC streaming guide](https://wiki.seeedstudio.com/ja/respeaker_clip_rtc_streaming/)
- [ReSpeaker Clip Getting Started](https://wiki.seeedstudio.com/ja/respeaker_clip/)

### 公式の ReSpeaker Clip 寸法や機構図面はどこで入手できますか？ {#mechanical-drawing-status}

**対象:** ReSpeaker Clip の筐体、治具、またはウェアラブルアクセサリ設計

**最終検証日:** 2026-09-01

リビジョンラベル付きの機構図面は、現時点では公開されていません。公式 Getting Started のリソース表では、`Mechanical Drawing` は依然として `Coming soon` と表示されており、物理パラメータ表にも筐体寸法が完全には記載されていません。

**前提条件:**

- 機構設計が適合しなければならない、正確な量産ハードウェアリビジョン

1. 現在の公式リソース表で Mechanical Drawing の行を確認します。
2. 写真、マーケティング用レンダリング、ラベルのない試作機から量産寸法を導き出さないでください。
3. すぐに設計作業が必要な場合は、実機を正確に採寸し、金型やクリアランスを確定する前にリビジョンラベル付きの公式図面を依頼してください。

**成功条件:**

- 機構設計が、リビジョンラベル付きの公式図面、または該当する量産リビジョンの検証済み寸法のいずれかに基づいている

**補足:**

- これは公開状況に関する時間依存の回答であり、リソース表が更新された際には再確認する必要があります。
- 公開図面が存在しないことは、社内に機構ファイルが存在しないことを意味するものではありません。

**参考情報:**

- [ReSpeaker Clip specifications and resources](https://wiki.seeedstudio.com/ja/respeaker_clip/)

## 製品とビジネス {#product-and-business}

### reSpeaker Clip アプリには月額サブスクリプションが必要ですか？また、OpenAI や自前ホスティングの STT / LLM モデルを利用できますか？ {#app-subscription-and-custom-providers}

**対象:** 現行アプリリリースで、reSpeaker AI サブスクリプションと自前の STT/LLM プロバイダのどちらを使うか選択する reSpeaker Clip アプリユーザー

**最終検証日:** 2026-10-26

いいえ。サブスクリプションは任意です。アプリは、あなた自身が設定した STT および LLM サービスのみで完全に動作させることができます。これには、Base URL で公開された自前ホスティングのモデルも含まれ、その場合 reSpeaker AI のクォータは消費されません。任意の reSpeaker AI サブスクリプションは、プロバイダの認証情報や課金を自分で管理したくないユーザー向けのものです。

アプリの AI CONFIG ページでは、STT サービスは Provider、Base URL、API key、Language を受け取り、LLM サービスは API key、Base URL、Model Name を受け取ります。どちらにも Test Connection アクションが用意されているため、OpenAI がホストするサービスでも、自前でホストするモデルでも、互換性のある API を公開していれば使用前に接続確認ができます。

| プラン | 中国本土 | 海外 | AI 分数 | 備考 |
| --- | --- | --- | --- | --- |
| デバイス有効化ボーナス | ¥0 | \$0 | 300（1 回限り） | アカウント、デバイス、決済アカウントごとに 1 回；有効期限 180 日 |
| Lite | ¥19/月 または ¥179/年 | \$4.99/月 または \$49.99/年 | 300/月 | 最も低価格の有料ティア |
| Pro | ¥59/月 または ¥649/年 | \$12.99/月 または \$129/年 | 1,200/月 | 主な推奨ティア |
| Max | ¥115/月 または ¥1,249/年 | \$23.99/月 または \$249/年 | 2,400/月 | 高優先度の処理キュー |
| 追加パック | ¥9/100 分；¥25/300 分 | \$1.99/100 分；\$4.99/300 分 | 100 または 300 | 有効なサブスクライバーのみ；現在の月次サイクル終了まで有効 |

プラットフォームの AI 分数 1 分は、1 回の文字起こしと、その録音の基本的な要約 1 回をカバーします。

**前提条件:**

- AI CONFIG ページを備えた reSpeaker Clip アプリと、テスト用の録音があるデバイス
- カスタムプロバイダ経路の場合: プロバイダの Base URL と API key、またはスマートフォンから到達可能な自前ホスティングのエンドポイント
- サブスクリプション経路の場合: プランまたはデバイス有効化ボーナスを持つ reSpeaker アカウント

1. アプリで AI CONFIG を開き、STT Service と LLM Service の項目を確認します。
2. STT について、Provider、Base URL、API key、Language を入力し、Test Connection をタップしてから Save Configuration を実行します。
3. LLM について、API key、Base URL、Model Name を入力し、Test Connection をタップしてから Save Configuration を実行します。
4. 録音を 1 件処理し、文字起こしと要約の両方が設定したプロバイダから提供されていることを確認します。
5. reSpeaker AI サブスクリプションを利用する場合は、アプリでプラットフォーム AI サービスを選択します。その場合、文字起こしと要約はプランの AI 分数を消費します。

**成功条件:**

- STT と LLM の両サービスで Test Connection が成功する
- テスト用録音が、設定したプロバイダ経由で文字起こしおよび要約される
- カスタムプロバイダ経路では、reSpeaker AI のクォータが消費されない

**補足:**

- プラン、クォータ、価格は 2026-10-26 時点のものです。アプリには現在の価格と地域差が表示され、価格やクォータは変更される可能性があります。
- 月額サブスクリプションのクォータは繰り越されません。追加パックも、現在の月次サイクル終了までのみ有効で、同様に繰り越しはありません。自動更新を解約しても、支払い済み期間の終了まではプランを利用できます。
- カスタムプロバイダ経路では、プラットフォーム側で利用量を計測しません。料金、レート制限、可用性は、利用するプロバイダ側の責任となります。
- 自前ホスティングのエンドポイントはスマートフォンから到達可能であり、互換性のある API を公開している必要があります。サービスを利用する前に、Test Connection アクションが成功しなければなりません。
- より簡単なセルフデプロイ型 LLM オプションは、今後のリリースで提供予定です。それまでは、自前ホスティングの LLM も、カスタム Base URL と Model Name フィールドを通じてすでに設定可能です。

**参考情報:**

- [reSpeaker Clip Getting Started (AI CONFIG、STT および LLM プロバイダ設定)](https://wiki.seeedstudio.com/ja/respeaker_clip/)
- [reSpeaker Clip Live STT application guide](https://wiki.seeedstudio.com/ja/respeaker_clip_python_build_app/)

<!-- RESPEAKER_FAQ_AUTO_END -->

## テクニカルサポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
