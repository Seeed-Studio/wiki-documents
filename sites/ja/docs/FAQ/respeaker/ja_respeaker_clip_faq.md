---
title: reSpeaker Clip FAQ
description: reSpeaker Clip の公式ドキュメント、文字起こしの言語サポート、録音とエクスポート、メカ設計リソースに関するよくある質問。
slug: /respeaker_clip_faq
last_update:
  date: 11/12/2026
  author: ray
keywords:
  - reSpeaker Clip FAQ
  - reSpeaker Clip documentation
  - transcription language support
  - recordings export
  - mechanical drawing
createdAt: '2026-09-01'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_faq/
updatedAt: '2026-11-12'
---

<div class="respeaker-faq-page">

# reSpeaker Clip FAQ

このページには、reSpeaker Clip に関する検証済みの回答が掲載されています。各回答には、対象となる製品バリアントとファームウェアモード、および最新の公式情報源に照らして最後に検証された日付が記載されています。

## 始める前に

- デバイスが動作している正確な製品バリアントとファームウェアモード（USB か I2S か）を確認します。
- バージョン固有の手順を適用する前に、現在のファームウェアバージョンを確認します。
- このページの回答は 2026-09-01 時点で最後に検証されています。これ以降に閲覧している場合は、リンクされている公式情報源を再確認してください。

<!-- RESPEAKER_FAQ_AUTO_START -->
## ドキュメントと使用方法 {#documentation-and-usage}

### 現在の公式 ReSpeaker Clip ドキュメントはどこで確認できますか？ {#official-documentation}

**対象:** ReSpeaker Clip のユーザーおよび開発者

**最終検証日:** 2026-09-01

まずは現在の ReSpeaker Clip Getting Started ページから始めてください。ホスト側での制御や録音転送には Basic SDK ガイドを使用し、デバイス側ファームウェアを変更する場合にのみ Firmware Development ガイドを使用します。古い `/respeaker_clip_getting_started/` URL は廃止されており、ブックマークしないでください。

**前提条件:**

- 対象の作業が、通常の製品利用なのか、ホスト側 SDK 連携なのか、デバイスファームウェア開発なのかを特定する

1. セットアップ、アプリのワークフロー、仕様、および最新のリソース一覧については Getting Started を開きます。
2. 録音の制御、セッション管理、BLE または Wi-Fi 経由でのファイル転送には Basic SDK ガイドを開きます。
3. デバイス側の動作をビルド、書き込み、デバッグ、変更する場合にのみ Firmware Development ガイドを開きます。
4. 保存済みリンクで依然としてアクセスできない場合は、ドキュメント障害を報告する前に、対応する最新の Wiki URL に置き換えてください。

**成功条件:**

- 選択した最新ガイドが正しく読み込まれ、対象とする製品、ホスト SDK、またはファームウェア開発レイヤーをカバーしている

**補足:**

- Getting Started 上の一部リソースには、明示的に `Coming soon` と記載されているものがあります。ガイドが公開されていることは、すべてのメカやファームウェア関連成果物が公開済みであることを意味しません。

**参考情報:**

- [ReSpeaker Clip Getting Started](https://wiki.seeedstudio.com/ja/respeaker_clip/)
- [ReSpeaker Clip Basic SDK guide](https://wiki.seeedstudio.com/ja/respeaker_clip_basic_sdk_guide/)
- [ReSpeaker Clip Firmware Development guide](https://wiki.seeedstudio.com/ja/respeaker_clip_firmware_development_guide/)

### ReSpeaker Clip を使って、会話のリアルタイム文字起こしプロトタイプを作れますか？ {#live-conversation-transcription}

**対象:** 別のコンピュータまたはブラウザにリアルタイム音声認識結果を表示する ReSpeaker Clip プロトタイプ

**最終検証日:** 2026-09-01

はい、ホストおよびクラウドを組み合わせたプロトタイプの一部として利用できます。公式の Live STT サンプルは、RTC 対応 Clip ファームウェアから BLE 経由でマイク音声をストリーミングし、外部の STT プロバイダで完了した発話をテキストに変換し、その文字起こしをブラウザに表示します。これは、デバイス単体でのオンデバイス文字起こしとしてはドキュメント化されていません。

**前提条件:**

- RTC ライブストリーミング対応の ReSpeaker Clip ファームウェア
- Python 3.10 以降と動作する BLE アダプタ
- 使用する公式サンプルの STT プロバイダ向け API キーとネットワークアクセス

1. 公式の Live STT アプリケーションガイドに従い、Python の依存パッケージをインストールします。
2. BLE 経由で ReSpeaker Clip に接続し、アプリケーション設定に STT プロバイダのキーを入力します。
3. `Start Streaming` を選択し、話しかけて、完了した各発話がブラウザの文字起こしに表示されるのを待ちます。
4. アクセシビリティ支援として扱う前に、想定する音響環境でレイテンシと文字起こし精度を測定します。

**成功条件:**

- BLE 経由で RTC セッションが開始され、話した内容がブラウザ上でリアルタイムのテキストとして表示される
- 想定する環境と言語に対して、レイテンシと精度が記録されている

**補足:**

- Live STT は RTC オーディオストリームに BLE を使用します。ドキュメント化されている Wi-Fi 経路は、Live STT ではなく、録音してから処理するワークフロー向けです。
- 公開サンプルは外部の文字起こしサービスに依存しており、認証済みの医療機器や支援機器として提示されてはいません。実際の導入にあたっては、プライバシー、接続性、レイテンシ、障害時の挙動を確認してください。

**参考情報:**

- [ReSpeaker Clip Live STT application guide](https://wiki.seeedstudio.com/ja/respeaker_clip_python_build_app/)
- [ReSpeaker Clip RTC streaming guide](https://wiki.seeedstudio.com/ja/respeaker_clip_rtc_streaming/)
- [ReSpeaker Clip Getting Started](https://wiki.seeedstudio.com/ja/respeaker_clip/)

### ReSpeaker Clip の公式寸法やメカ図面はどこで入手できますか？ {#mechanical-drawing-status}

**対象:** ReSpeaker Clip の筐体、治具、ウェアラブルアクセサリ設計

**最終検証日:** 2026-09-01

リビジョンラベル付きのメカ図面は、現時点では公開されていません。公式 Getting Started のリソース表では、`Mechanical Drawing` は依然として `Coming soon` と表示されており、物理パラメータ表にも筐体寸法が完全には記載されていません。

**前提条件:**

- メカ設計が適合しなければならない、正確な量産ハードウェアリビジョン

1. 現在の公式リソース表で Mechanical Drawing の行を確認します。
2. 量産寸法を、写真、マーケティング用レンダリング、ラベルのない試作機から推定しないでください。
3. すぐに設計作業が必要な場合は、実機を正確に採寸し、金型やクリアランスを確定する前に、リビジョンラベル付きの公式図面を依頼してください。

**成功条件:**

- メカ設計が、リビジョンラベル付きの公式図面、または該当する量産リビジョンの検証済み寸法のいずれかに基づいている

**補足:**

- これは公開状況に関する時間依存の回答であり、リソース表が更新された際には再確認が必要です。
- 公開図面が存在しないことは、社内にメカファイルが存在しないことを意味するものではありません。

**参考情報:**

- [ReSpeaker Clip specifications and resources](https://wiki.seeedstudio.com/ja/respeaker_clip/)

### reSpeaker Clip は、スマートフォンを変更した後でも引き続き使用でき、録音にアクセスしたりエクスポートしたりできますか？ {#recordings-after-phone-change-export}

**対象:** 新しいスマートフォンへ移行した、または公式 SDK でエクスポートされる、reSpeaker Clip（SKU 100020126）上の未削除録音

**最終検証日:** 2026-11-12

はい、可能です。録音は Clip 本体に保存されます。デバイスには 2 GB のローカルストレージがあり、圧縮音声で約 250 時間以上を保存でき、録音はスマートフォンなしでも動作します。スマートフォンを変更しても（寿命を迎えたスマートフォンを廃棄する場合を含め）、Clip 上の録音は削除されません。新しいスマートフォンに SenseCraft Voice アプリをインストールし、Clip を追加・ペアリングしてから、セッションを新しいスマートフォンに同期するか、アプリから音声またはテキスト結果をエクスポートしてください。削除されていない録音はデバイス上に残り、公式 Basic SDK を使って BLE または Wi-Fi 経由でダウンロードすることもできます。

**前提条件:**

- 電源が入る、充電済みの reSpeaker Clip
- 新しいスマートフォンにインストールされた SenseCraft Voice アプリ
- Clip がまだ古いスマートフォンにバインドされている場合は、そのバインドを解除するための古いスマートフォンへのアクセス、または古い Bluetooth ペアリングを削除できること

1. 新しいスマートフォンに SenseCraft Voice アプリをインストールして開きます。
2. `Add Device` をタップし、Clip 画面の識別子と一致するデバイス名を選択して、ペアリングを確認します。
3. 録音一覧を開き、必要なセッションを同期します。Clip の電源を入れたまま、スマートフォンの近くに置いてください。
4. アプリから音声またはテキスト結果をエクスポートします。
5. エクスポートしたファイルまたは文字起こしを開き、内容が完全であることを確認します。

**成功条件:**

- 新しいスマートフォンが Clip を検出し、ペアリングが完了する
- 録音一覧に、デバイスに保存されているセッションが表示される
- エクスポートした音声またはテキストが正しく開ける

**補足:**

- 2 GB のストレージには、圧縮音声で約 250 時間以上を保存できますが、容量には限りがあるため、重要な録音は定期的にエクスポートしてください。
- 通常の同期では、デフォルトでファイルはデバイス上に残ります。録音は、セッションを削除するか、ストレージをフォーマットするか、自動削除ポリシーによって削除されるまで保持されます。デバイス側の自動削除ポリシーは SDK を通じて設定できます（0〜30 日、または無効）。
- ストレージをフォーマットするかセッションを削除すると、デバイスから録音が削除されます。先にエクスポートしてください。
- 古いスマートフォンが利用できない場合でも、録音は Clip 上に残っています。Basic SDK によるダウンロードは BLE または Wi-Fi をサポートしており、中断した転送の再開も可能です。
- 新しいスマートフォンでのペアリングに失敗する場合は、古いスマートフォンまたはスマートフォンの Bluetooth 設定から古い Clip のペアリングを削除してから、再度ペアリングしてください。

**参考情報:**

- [reSpeaker Clip Getting Started (storage, file management and export)](https://wiki.seeedstudio.com/ja/respeaker_clip/)
- [reSpeaker Clip Basic SDK Guide (session download over BLE and Wi-Fi)](https://wiki.seeedstudio.com/ja/respeaker_clip_basic_sdk_guide/)

## ファームウェアとソフトウェア {#firmware-and-software}

### reSpeaker Clip は中国語などの言語をサポートしていますか？また、文字起こしの精度はどの程度ですか？ {#language-support-and-accuracy}

**対象:** SenseCraft Voice アプリと組み合わせて使用し、外部 STT サービス（クラウドまたはセルフホスト）で文字起こしを行う reSpeaker Clip（SKU 100020126）

**最終検証日:** 2026-11-12

はい。設定された STT サービスが対応している場合、中国語やその他の言語を文字起こしできます。reSpeaker Clip は音声をローカルストレージに録音し、音声認識は SenseCraft Voice アプリの AI CONFIG で設定された STT サービスによって実行されます。そのため、サポートされる言語や方言、および文字起こし精度は、使用する STT サービスとモデルに依存します。

STT 設定では、Provider、Base URL、API key、Language を指定でき、各文字起こしごとに Audio Language と STT Model を選択できます。

**前提条件:**

- 最新ファームウェアの reSpeaker Clip と、スマートフォンにインストールされた SenseCraft Voice アプリ
- 対象 STT サービス向けの Provider、Base URL、API key、およびスマートフォンからのネットワークアクセス
- テスト用録音

1. アプリで AI CONFIG → STT Service を開きます。
2. Provider、Base URL、API key、Language を入力し、`Test Connection` をタップしてから `Save Configuration` をタップします。
3. 録音を開き、`Transcribe & Summarize` をタップして、Audio Language と STT Model を選択します。
4. `Generate Now` をタップし、文字起こし結果を確認します。

**成功条件：**

- Test Connection が成功すること
- 録音から、意図した言語で文字起こしが生成されること

**補足：**

- Clip はデバイス上で音声認識を実行しません。すべての文字起こしは外部の STT サービスで行われます。
- Clip の音声は 16 kHz モノラル Opus、32 kbps です。
- 完全ローカルまたはオフラインでの文字起こしについては、公式のプライベートデプロイメントが、中国語、広東語、英語、日本語、韓国語をサポートしています。

**参考情報：**

- [reSpeaker Clip 入門ガイド](https://wiki.seeedstudio.com/ja/respeaker_clip/)
- [reSpeaker Clip 向けプライベートオンプレミス文字起こし](https://wiki.seeedstudio.com/ja/solutions/clip-private-transcription/)

## 製品とビジネス {#product-and-business}

### reSpeaker Clip アプリは月額サブスクリプションが必要ですか？また、OpenAI や自前ホスティングの STT / LLM モデルを利用できますか？ {#app-subscription-and-custom-providers}

**対象：** 現行バージョンのアプリで、reSpeaker AI サブスクリプションと自前の STT/LLM プロバイダのどちらを使うか選択する reSpeaker Clip アプリユーザー

**最終検証日：** 2026-10-26

いいえ。サブスクリプションは任意です。アプリは、Base URL で公開された自前ホスティングモデルを含め、あなた自身が設定した STT および LLM サービスだけで完全に動作させることができ、その場合 reSpeaker AI のクォータは一切消費しません。任意の reSpeaker AI サブスクリプションは、プロバイダの認証情報や課金を自分で管理したくないユーザー向けのものです。

アプリの AI CONFIG ページでは、STT サービスには Provider、Base URL、API key、Language を設定し、LLM サービスには API key、Base URL、Model Name を設定します。どちらにも Test Connection アクションが用意されているため、互換性のある API を公開している限り、OpenAI がホストするサービスでも、自分でホストするモデルでも、使用前に接続確認ができます。

| プラン | 中国本土 | 海外 | AI 分数 | 備考 |
| --- | --- | --- | --- | --- |
| デバイス有効化ボーナス | ¥0 | \$0 | 300（1 回限り） | アカウント、デバイス、決済アカウントごとに 1 回；有効期限 180 日 |
| Lite | ¥19/月 または ¥179/年 | \$4.99/月 または \$49.99/年 | 300/月 | 最も安価な有料ティア |
| Pro | ¥59/月 または ¥649/年 | \$12.99/月 または \$129/年 | 1,200/月 | 主な推奨ティア |
| Max | ¥115/月 または ¥1,249/年 | \$23.99/月 または \$249/年 | 2,400/月 | 高優先度の処理キュー |
| 追加パック | ¥9/100 分；¥25/300 分 | \$1.99/100 分；\$4.99/300 分 | 100 または 300 | 有効なサブスクライバーのみ；現在の月次サイクル終了まで有効 |

プラットフォームの AI 分数 1 分で、1 回の文字起こしと、その録音の基本的な要約 1 回をカバーします。

**前提条件：**

- AI CONFIG ページを備えた reSpeaker Clip アプリと、テスト用の録音済みデバイス
- カスタムプロバイダ経路の場合：プロバイダの Base URL と API key、またはスマートフォンから到達可能な自前ホスティングのエンドポイント
- サブスクリプション経路の場合：プランまたはデバイス有効化ボーナスを持つ reSpeaker アカウント

1. アプリで AI CONFIG を開き、STT Service と LLM Service の項目を確認します。
2. STT について、Provider、Base URL、API key、Language を入力し、Test Connection をタップしてから Save Configuration をタップします。
3. LLM について、API key、Base URL、Model Name を入力し、Test Connection をタップしてから Save Configuration をタップします。
4. 録音を 1 件処理し、文字起こしと要約の両方が設定したプロバイダから提供されていることを確認します。
5. reSpeaker AI サブスクリプションを使用するには、アプリでプラットフォームの AI サービスを選択します。その場合、文字起こしと要約はプランの AI 分数を消費します。

**成功条件：**

- STT サービスと LLM サービスの両方で Test Connection が成功すること
- テスト用の録音が、設定したプロバイダ経由で文字起こしおよび要約されること
- カスタムプロバイダ経路では、reSpeaker AI のクォータが消費されないこと

**補足：**

- プラン、クォータ、価格は 2026-10-26 時点のものです。アプリには現在の価格と地域差が表示され、価格やクォータは変更される場合があります。
- 月額サブスクリプションのクォータは翌月に繰り越されません。追加パックも、現在の月次サイクルが終了するまでのみ有効で、繰り越しはされません。自動更新を解約しても、支払い済み期間の終了まではプランを利用できます。
- カスタムプロバイダ経路では、プラットフォーム側で使用量を計測しません。料金、レート制限、可用性は、利用するプロバイダの条件に従い、あなたの責任となります。
- 自前ホスティングのエンドポイントはスマートフォンから到達可能であり、互換性のある API を公開している必要があります。Test Connection アクションが成功して初めて、そのサービスを利用できます。
- より簡単に自己展開できる LLM オプションは、今後のリリースで提供予定です。それまでは、カスタム Base URL と Model Name フィールドを通じて、自前ホスティングの LLM をすでに設定できます。

**参考情報：**

- [reSpeaker Clip 入門ガイド（AI CONFIG、STT および LLM プロバイダ設定）](https://wiki.seeedstudio.com/ja/respeaker_clip/)
- [reSpeaker Clip ライブ STT アプリケーションガイド](https://wiki.seeedstudio.com/ja/respeaker_clip_python_build_app/)

<!-- RESPEAKER_FAQ_AUTO_END -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
