---
description: reSpeaker Clip は、360 度音声収音、OLED ステータス表示、バイブレーションフィードバック、BLE と Wi-Fi 接続、そして文字起こし、AI ノート、会議要約、エンタープライズ向け音声 AI アプリケーションに対応するオープンなファームウェアと SDK サポートを備えた、オープンなウェアラブル AI レコーダーです。
title: reSpeaker Clip 入門ガイド
keywords:
  - reSpeaker
  - AI レコーダー
  - SenseCraft Voice
  - ウェアラブル AI レコーダー
  - 音声からテキストへ
  - LLM 要約
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /respeaker_clip
sku: 100020126
last_update:
  date: 6/30/2026
  author: Ray
createdAt: '2026-06-30'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/ja/respeaker_clip/
---

# reSpeaker Clip 入門ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

reSpeaker Clip は、リテール、会議、インタビュー、教室、サービス研修など、高品質な音声録音とその後のコンテンツ整理が求められるシナリオ向けに設計された、オープンなウェアラブル AI レコーダーです。デュアル PDM マイクによる 360 度全指向性で最大 3 m の収音、単体での録音、モバイルでのファイル管理、AI 文字起こし、AI 要約を統合し、現場での録音から構造化コンテンツまでの一連のワークフローを完結できるよう支援します。

reSpeaker Clip は、オープンハードウェアかつ開発者フレンドリーな製品としても設計されています。オープンソースのファームウェア、デモアプリ、SDK サポートを提供し、開発者はデバイスの動作やアプリケーションワークフローをカスタマイズできます。エンタープライズは、社内のオフィスシステム、プライベートにデプロイした LLM、または音声解析パイプラインと統合し、自社のデータセキュリティ要件を満たす音声 AI アプリケーションを構築できます。

reSpeaker Clip は SenseCraft Voice App とクラウドサービスと連携し、ローカルまたはクラウドの AI モデルとも統合できます。アプリを通じて、ユーザーはデバイスのペアリング、録音管理、ファイルのエクスポート、音声の文字起こし、AI 要約の生成、テンプレートのカスタマイズ、Q&A 検索を行うことができます。

:::note
本ドキュメントは reSpeaker Clip 用の初期 Wiki 草案です。一部の SDK URL、プロトコルドキュメント、およびリソースパッケージのリンクは、製品資料が確定した後に追加されます。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
    </a>
</div>

## 製品概要

reSpeaker Clip は、オープンなウェアラブル AI レコーダーとして位置付けられています。ポータブルな録音デバイスとしてだけでなく、企業のサービス研修、インタビュー記録、議事録作成、現場コミュニケーションの振り返りのための音声データ入力ポイントとしても使用できます。

本デバイスはコンパクトなウェアラブル形状を採用し、2GB の内蔵ストレージを搭載しているため、スマートフォンに依存せず単体で録音できます。また、プログラム可能な 0.5 インチ OLED ディスプレイとバイブレーションフィードバックを備え、画面・ボタン・触覚フィードバックを通じて録音状態の素早い確認、重要な区間のマーキング、録音ワークフローの切り替えを行うことができます。

### 主な特長

- **360 度収音、最大 3 m**：高性能なデュアル PDM マイクにより、会議、インタビュー、リテールでの会話など、複数話者のシナリオに対応した全指向性収音をサポートします。
- **2 種類の録音ワークフロー**：日常のウェアラブルメモから複数人の会議まで、環境に応じて適切な録音動作を選択できます。
- **単体録音とローカルストレージ**：内蔵 2GB ストレージにより、スマートフォンが近くになくてもスタンドアロンレコーダーとして動作します。
- **OLED ディスプレイとバイブレーションフィードバック**：0.5 インチ OLED ディスプレイにデバイスステータスが表示され、バイブレーションフィードバックにより録音操作を直感的に行えます。
- **オープンファームウェアと SDK**：開発者はデバイスの動作、ボタンロジック、表示内容、アプリ側ワークフローをカスタマイズできます。
- **AI 文字起こしと要約**：クラウドまたはローカルの AI モデルを用いて、音声からテキストへの変換、AI ノート、議事録作成、音声 Q&A を行えます。
- **エンタープライズ統合に対応**：社内システムやプライベートにデプロイした LLM と接続し、データセキュリティとカスタマイズが求められるワークフローに対応できます。

### 仕様

このセクションでは、reSpeaker Clip のハードウェア、オーディオ、物理仕様、およびバッテリー関連の仕様をまとめます。

#### ハードウェア仕様

| 仕様 | 詳細 |
| --- | --- |
| メインコントローラ | nRF5340+nRF7002 |
| ディスプレイ | 0.5 インチ 88*48 OLED |
| マイク | デュアル PDM、最大 16 kHz サンプリングレート |
| オーディオ出力 | ノイズ低減オーディオ |
| 接続方式 | Bluetooth (BLE 5.3),<br />Wi-Fi（高速オーディオエクスポート用） |
| 内蔵ストレージ | 2GB（圧縮音声を約 250 時間以上<br />保存可能） |
| バッテリー駆動時間 | 連続録音 14～18 時間 |
| インタラクション | アクションボタン、バイブレーションモーター |
| 充電インターフェース | 4 ピンマグネット |

#### オーディオパラメータ

| 項目 | パラメータ |
| --- | --- |
| マイク | デュアル PDM マイク |
| サンプリングレート | 最大 16 kHz |
| 収音方向 | 360 度全指向性収音 |
| 収音距離 | 最大 3 m |
| オーディオ出力 | ノイズ低減モノラルオーディオ |
| 圧縮オーディオ形式 | Opus モノラル、32 kbps |
| オーディオ保存容量 | 2GB で圧縮音声を約 250 時間以上保存可能 |
| 連続録音時間 | 14～18 時間 |

#### 物理パラメータ

| 項目 | パラメータ |
| --- | --- |
| ディスプレイ | 0.5 インチ 88*48 OLED |
| 内蔵ストレージ | 2GB |
| インタラクション | アクションボタン、バイブレーションモーター |
| 充電方式 | マグネット式充電ベース |
| 充電インターフェース | 4 ピンマグネット |
| 充電ベース電源入力 | USB-C |
| 装着方法 | マグネット装着、ラペルクリップ、ネックストラップ |
| 温度に関する注意 | -20°C～60°C の極端な温度環境での使用は避けてください |

### 想定シナリオ

- リテールサービスの録音および研修振り返り
- 会議、インタビュー、授業などの長時間音声録音
- 顧客コミュニケーション、営業訪問、サービス品質検査などのビジネスシナリオ
- 音声コンテンツを構造化テキストや要約に変換する必要があるワークフロー

### コア機能

- 360 度収音対応のデュアル PDM マイク
- 単体録音
- 2GB 内蔵ストレージ
- 0.5 インチ OLED ステータスディスプレイ
- バイブレーションフィードバック
- BLE および Wi-Fi 接続
- AI 音声文字起こし
- AI 要約および構造化抽出
- 複数の装着方法
- モバイルファイル管理
- SenseCraft Voice App およびクラウドサービス対応
- オープンソースファームウェア、デモアプリ、SDK サポート

### ハードウェア概要

reSpeaker Clip は、携帯しやすいクリップ型フォームファクタを採用しています。上面には OLED ディスプレイ、デュアルマイク、アクションボタンが統合されています。底面と充電ベースの両方にマグネット式充電端子があり、充電ベースは USB-C で給電されるため、デスクトップでの充電とウェアラブル録音を簡単に切り替えられます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_hardware_cropped.jpg" alt="reSpeaker Clip hardware overview" width={680} height="auto" /></p>

### 同梱物

<div style={{width: '100%', overflowX: 'auto'}}>
  <table style={{display: 'table', width: '680px', maxWidth: '100%', margin: '0 auto'}}>
    <thead>
      <tr>
        <th>項目</th>
        <th style={{textAlign: 'center'}}>数量</th>
        <th>説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>reSpeaker Clip 本体</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>ポータブル録音デバイス</td>
      </tr>
      <tr>
        <td>マグネット式ラペルクリップ</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>衣服への装着用</td>
      </tr>
      <tr>
        <td>マグネットパッチ</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>マグネット装着用</td>
      </tr>
      <tr>
        <td>充電ベース</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>デバイスの充電用</td>
      </tr>
      <tr>
        <td>0.5 m Type-C ケーブル</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>充電ベースへの給電用</td>
      </tr>
      <tr>
        <td>ネックストラップ</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>首掛け用</td>
      </tr>
    </tbody>
  </table>
</div>

## クイックスタート

このセクションでは、デバイスの準備とアプリ接続から録音および AI 要約までの基本的なワークフローを紹介します。初めて使用する場合は、手順に従って順番に進めてください。

### デバイスの準備

1. reSpeaker Clip を充電ベースにセットします。
2. Type-C ケーブルを使用して、充電ベースを電源アダプタまたはコンピュータの USB ポートに接続します。
3. デバイスの充電が完了するまで待ちます。
4. 電源ボタンを長押ししてデバイスの電源を入れます。
5. 利用シーンに応じて装着方法を選択します。

### 装着方法

reSpeaker Clip は、マグネット装着、ラペルクリップ、ネックストラップの 3 つの装着方法に対応しています。会議、インタビュー、サービス研修、モバイル録音などに最適な方法を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_wearing_methods.jpg" alt="reSpeaker Clip wearing methods" width={640} height="auto" /></p>

### SenseCraft Voice App

#### アプリのダウンロード

スマートフォンで以下の QR コードをスキャンするか、[SenseCraft Voice App download page](https://sensecraft-voice-download.seeed.cc/) を開いてアプリをダウンロードし、インストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_download_qr.png" alt="SenseCraft Voice App download QR code" width={360} height="auto" /></p>

#### デバイスの接続

1. SenseCraft Voice App を開き、サインインします。
2. デバイス側面のボタンを長押しして電源を入れ、デバイスが接続待機状態になるまで待ちます。
3. アプリのホーム画面で **Add Device** をタップします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_add_device.jpg" alt="Tap Add Device" width={320} height="auto" /></p>

4. アプリが自動的に周辺のデバイスを検索します。デバイスに表示される識別子と、アプリに表示されるデバイス名（例：`Clip EAE0`）を照合します。名前が一致していることを確認したら、該当デバイスの **Connect** をタップします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_scan_device.jpg" alt="Select and connect to the matching reSpeaker Clip device" width={320} height="auto" /></p>

5. 携帯電話に Bluetooth ペアリング要求が表示されたら、名前を再度確認し、**Pair** をタップします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_pair_device.jpg" alt="Bluetooth ペアリング要求を確認する" width={320} height="auto" /></p>

6. ペアリングが完了したら、アプリの指示に従って残りのセットアップを完了します。

:::tip
アプリがデバイスを見つけられない場合は、まずデバイスの電源が入っており、バッテリー残量が十分であることを確認してください。バッテリー残量が少ない場合は、再度ペアリングする前にデバイスを充電してください。また、デバイスが Bluetooth ペアリング状態になっていることを確認し、携帯電話をデバイスに近づけてから再度スキャンしてください。
:::

### 録音操作

reSpeaker Clip は側面ボタンで録音を素早く操作できます。

- ボタンを長押しすると録音の開始／停止ができます。
- 録音中にボタンを短く 1 回押すと、現在の区間を重要としてマークします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_recording_operation.png" alt="reSpeaker Clip の録音操作" width={640} height="auto" /></p>

録音中、デバイスは画面表示とバイブレーションフィードバックで現在の状態を示します。

### ファイル管理

録音後は、SenseCraft Voice App で音声ファイルを管理できます。

- 録音の再生
- 音声のトリミング
- Wi-Fi または BLE 経由でのファイル転送
- 音声またはテキスト結果のエクスポート
- マークした重要区間の表示

### AI 機能

reSpeaker Clip は SenseCraft Voice App とクラウドサービスと連携して、音声のインテリジェント処理を行うことができます。

#### STT / LLM サービス設定の確認

音声文字起こし、AI 要約、Q&A 検索を使用する前に、アプリ下部の **AI CONFIG** ページを開き、**STT Service** と **LLM Service** の両方が設定されていることを確認してください。STT サービスは音声文字起こしに使用され、LLM サービスは要約生成と Q&A 処理に使用されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_ai_config_stt.jpg" alt="STT サービス設定を確認する" width={320} height="auto" /></p>

**STT Service** に `Not configured` と表示されている場合は、STT Service 右側の設定項目をタップして STT Providers ページに入り、使用する文字起こしサービスに応じて Provider、Base URL、API Key、Language を入力します。**Test Connection** をタップし、テストに成功したら **Save Configuration** をタップします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_stt_provider_form.png" alt="STT サービス設定を入力して保存する" width={320} height="auto" /></p>

**LLM Service** に `Not configured` と表示されている場合は、LLM Providers ページに進み、**Add New Configuration** または右上の `+` ボタンをタップして新しいサービス設定を追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_add.jpg" alt="LLM サービス設定を追加する" width={320} height="auto" /></p>

API Key、Base URL、Model Name を入力したら、**Test Connection** をタップします。テストに成功したら **Save Configuration** をタップします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_form.png" alt="LLM サービス設定を入力して保存する" width={320} height="auto" /></p>

#### 音声文字起こし

録音をアップロードまたは同期した後、ファイル一覧から処理したい録音をタップして録音詳細ページに入ります。録音にまだ文字起こしがない場合、このページには **Transcribe & Summarize** ボタンが表示されます。これをタップして文字起こしと要約の設定ページに入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_entry.png" alt="録音を開き、Transcribe & Summarize をタップする" width={320} height="auto" /></p>

#### AI 要約

**Transcribe & Summarize** ページでは、要約テンプレートを選択し、Audio Language、STT Model、LLM Model を確認できます。テンプレートは会議要約、授業要約、日常会話要約など、要約出力の構成を制御します。設定を確認したら、**Generate Now** をタップして文字起こしと要約を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_summary_options.png" alt="テンプレートを選択して文字起こしと要約を開始する" width={320} height="auto" /></p>

#### AI Q&A 検索

ユーザーは録音の文字起こしに基づいて Q&A 検索を行うことができ、会議で言及されたタスク、時間、製品の問題、顧客からのフィードバックなどを問い合わせることができます。

### デバイス管理

アプリでは、デバイスの状態を確認および管理できます。

- バッテリー監視
- ファームウェアバージョンの確認
- OTA アップグレード
- デバイスの連携解除
- 工場出荷時設定へのリセット

### ファームウェア更新ガイド

reSpeaker Clip は、デバッグプローブを必要としない 2 つのファームウェア更新方法をサポートしています：

1. **Bluetooth OTA**：BLE を介してファームウェアパッケージをデバイスに送信します。日常的なアップデートに適しています。
2. **リカバリーモード書き込み**：デバイスを USB シリアルリカバリーモードにして、USB シリアルポート経由でファームウェアパッケージを転送します。

どちらの方法も MCUboot の mcumgr Simple Management Protocol (SMP) を使用します。Bluetooth OTA は BLE トランスポートを使用し、リカバリーモード書き込みは USB CDC-ACM シリアルトランスポートを使用します。reSpeaker Clip は `dfu-util` などのネイティブ USB DFU フローは使用しません。

#### ファームウェアファイルの種類

ファームウェアリリースには、次のファイルが含まれる場合があります：

| ファイル種別 | 説明 | 用途 |
| --- | --- | --- |
| `clip-<version>-*-single.*` | 単一アプリケーションパーティションの更新パッケージ。Clip SDK / アプリパーティションのみを更新する場合に適しています | USB シリアル DFU |
| `clip-<version>-*-signed.bin` | 署名付きアプリケーションファームウェアイメージ | USB シリアル DFU、BLE OTA |
| `clip-<version>-*-ota.zip` | 複数イメージの更新パッケージ。通常はアプリとネットワークコアを含みます | USB シリアル DFU、BLE OTA |
| `clip-<version>-*-merged.hex` | MCUboot、アプリ、ネットワークコアを含むフルイメージ | J-Link などのデバッガが必要 |
| `clip-<version>-*-merged_CPUNET.hex` | ネットワークコアイメージのみ | J-Link などのデバッガが必要 |

通常の Bluetooth OTA アップデートでは、まず `-ota.zip` を使用します。リカバリーモードによる開発者向け書き込みでは、`single` サフィックス付きのファームウェアパッケージを優先してください。一般的な Clip SDK の変更はアプリケーションパーティションのみに影響し、ネットワークコアの更新は不要です。`-merged.hex` と `-merged_CPUNET.hex` は主に開発、量産、またはデバッガを用いた書き込みに使用されます。

#### 方法 1: Bluetooth OTA

Bluetooth OTA は、デバイスが正常に起動し、BLE を通じて携帯電話から検出できる場合に適しています。OTA にはモバイル版 nRF Connect アプリの使用を推奨します。nRF Connect for Desktop の BLE ツールは、通常、別途 Nordic BLE アダプタが必要です。

基本的なワークフロー：

1. `clip-<version>-*-ota.zip` ファームウェアパッケージを準備します。
2. ファームウェアパッケージを携帯電話に送ります。
3. 携帯電話で nRF Connect を開きます。
4. BLE を通じて reSpeaker Clip を検索して接続します。
5. 接続後、**SMP Service** が表示されていることを確認します。
6. 右上の **DFU** アイコンをタップし、`-ota.zip` または `-signed.bin` ファームウェアパッケージを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_dfu_button.png" alt="モバイル版 nRF Connect で DFU ボタンをタップする" width={320} height="auto" /></p>

7. デフォルトの **Test and Confirm** モードのまま **OK** をタップしてアップデートを開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_mode.png" alt="Bluetooth OTA で Test and Confirm を選択する" width={320} height="auto" /></p>

8. 転送、検証、およびデバイスの自動再起動が完了するまで待ちます。
9. デバイスに再接続し、ファームウェアバージョンを確認します。

:::tip
OTA 中は携帯電話をデバイスの近くに保ち、nRF Connect をバックグラウンドに送らず、同時に SenseCraft Voice App とデバイスを接続しないようにしてください。
:::

#### 方法 2: リカバリーモード書き込み

リカバリーモードは開発者向けの USB 書き込みモードです。MCUboot / mcumgr SMP プロトコルを使用して、USB CDC-ACM シリアルポート経由でファームウェアを転送します。`nrfutil mcu-manager` コマンドラインワークフローの使用を推奨します。

##### リカバリーモードに入る

リカバリーモードは MCUboot USB シリアルリカバリーを通じて書き込み機能を提供します。リカバリーモードに入るには：

1. 使用する USB ケーブルがデータ転送に対応していることを確認します。
2. USB ケーブルを充電ベースに接続します。
3. reSpeaker Clip を充電ベースに載せ、充電端子がしっかり接続されるように本体を軽くひねります。
4. 画面に USB／充電アイコンが表示されたら、画面に **Recovery Mode** が表示されるまで **Action Button** を長押しします。
5. **Recovery Mode** が表示されたら、デバイスは USB シリアルリカバリーモードに正常に入っており、シリアルポートとして認識されます：
   - Windows: `COMx`
   - macOS: `/dev/cu.usbmodem*`
   - Linux: `/dev/ttyACM0`

Windows では、デバイスが複数の仮想シリアルポートとして認識される場合があります。例：

```text
Product         reSpeaker Clip DFU
Ports           COM10, vcom: 0
                COM11, vcom: 1
Traits          serialPorts, usb
```

書き込みの際は、まず `vcom: 1` に対応するシリアルポート（上記の例では `COM11` など）を試してください。接続やアップロードに失敗する場合は、もう一方のシリアルポートを試してください。

:::note
リカバリーモードには USB/VBUS 検出が必要です。このモードに入る前に、充電ベースの端子がしっかり接続されていることを確認してください。画面に USB／充電アイコンが表示されない場合、物理的にはベースに載っていても、実際には USB に接続されていない可能性があります。
:::

##### nrfutil mcu-manager で書き込む

nrfutil は Nordic のコマンドラインツールです。バージョン 8.x 以降を使用し、`mcu-manager` プラグインをインストールしてください。

新しいバージョンの nrfutil はサブコマンドプラグイン方式を採用しています。初回使用時は、`device` と `mcu-manager` サブコマンドをインストールします：

```bash
nrfutil install device
nrfutil install mcu-manager
```

もし `nrfutil device list` が `nrfutil command device not found` を報告する場合、`device` サブコマンドがインストールされていません。まず `nrfutil install device` を実行してください。

現在のシリアルデバイスを一覧表示します：

```bash
nrfutil device list
```

アプリケーションパーティションのファームウェアをアップロードします。`single` サフィックス付きのファームウェアパッケージを優先的に使用してください：

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-single.zip \
    --serial-port COMx
```

リリースパッケージに署名付きアプリケーションイメージが含まれている場合は、`-signed.bin` をアップロードすることもできます：

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-signed.bin \
    --serial-port COMx
```

アプリ + ネットワークコアをまとめて更新する場合は、`-ota.zip` をアップロードします：

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-ota.zip \
    --serial-port COMx
```

アップロード後、新しいファームウェアを適用するためにデバイスをリセットします：

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

`COMx` は、Windows デバイスマネージャーまたは `nrfutil device list` に表示される実際のシリアルポートに置き換えてください。デバイスが複数の `vcom` ポートを表示する場合は、まず `vcom: 1` に対応するポートを試してください。接続またはアップロードに失敗した場合は、別のポートに切り替えて再試行してください。macOS / Linux では `/dev/cu.usbmodem*` または `/dev/ttyACM0` を使用します。

:::tip
書き込みの進行状況が 100% のままでツールが自動的に終了しない場合は、デバイスを何度も抜き差ししないでください。次を実行します：

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

その後、デバイスの再起動後にファームウェアバージョンを確認してください。
:::

#### その他のファームウェア更新方法

デバッガを用いた書き込みや、より詳細なリカバリーモードのトラブルシューティング方法については、reSpeaker Clip Advanced Firmware Update Guide（近日公開）を参照してください。

## 開発ガイド

開発者およびエンタープライズ向けの統合シナリオとして、reSpeaker Clip はファームウェア SDK、アプリケーション SDK、および通信プロトコルを通じて拡張できます。

### ファームウェア SDK

reSpeaker Clip のファームウェアは nRF Connect SDK / Zephyr RTOS 上に構築され、nRF5340 + nRF7002 プラットフォーム上で動作します。単一のドライバ例ではなく、音声キャプチャ、ステートマシン、BLE / Wi-Fi 通信、ファイル管理、ファームウェア更新、低消費電力管理を中心に構成されたデバイス側フレームワークです。

ファームウェアシステムアーキテクチャ：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_system_architecture.png" alt="reSpeaker Clip firmware system architecture" width={900} height="auto" /></p>

開発の観点から見ると、ファームウェアは主に次のレイヤに分かれます：

- **アプリケーションレイヤ**：イベントディスパッチ、AT サーバー、ボタン処理、ユーザーインタラクション状態を処理します。
- **サービスレイヤ**：BLE / UDP トランスポート抽象化、ファイル転送、設定管理、NVS ストレージを処理します。
- **処理レイヤ**：音声キャプチャ、SpeexDSP ノイズリダクション / ダイナミックレンジ処理、および Opus エンコードを処理します。
- **ハードウェア抽象化レイヤ**：PDM マイク、SD FAT32、BLE、Wi-Fi、PMIC などのハードウェア機能をカプセル化します。
- **Zephyr RTOS カーネル**：`k_msgq`、`k_sem`、`k_mutex`、`k_thread`、`k_mem_slab` などのカーネルプリミティブを提供します。

典型的な開発ワークフローは次のとおりです：Zephyr / nRF Connect SDK 環境をセットアップし、reSpeaker Clip ファームウェアプロジェクトを取得し、ボードターゲットと設定ファイルを確認し、ファームウェアをビルドして書き込み、シリアルログを確認し、最後に SenseCraft Voice App または BLE / Wi-Fi プロトコルを通じて録音、ファイル同期、ファームウェア更新を検証します。

次のステップについては、ファームウェア SDK ドキュメントを参照してください：

- [Getting Started with the reSpeaker Clip Firmware SDK](/ja/respeaker_clip_firmware_quick_start/) では、環境構築、ビルド、書き込み、スモークテストについて説明します。
- [reSpeaker Clip Firmware Development Guide](/ja/respeaker_clip_firmware_development_guide/) では、ファームウェアアーキテクチャ、通信プロトコル、更新およびリカバリーパス、検証、量産リリースについて説明します。
- [Customization: Add a Custom AT Command](/ja/respeaker_clip_customization_at_command/) では、リポジトリのファームウェア Skill を利用する AI プロンプトを含め、新しい AT コマンドを追加して検証する方法を示します。

### アプリケーション SDK

アプリケーション SDK は、モバイルアプリやホスト側アプリケーションとの統合に使用できます。

| プラットフォーム | 言語 | ステータス |
| --- | --- | --- |
| iOS | Swift | Coming soon |
| Android | Kotlin | Coming soon |
| Desktop / Server | Python | [Available](/ja/respeaker_clip_basic_sdk_guide) |

## アプリケーション

reSpeaker Clip は B 向けビジネスシナリオで利用でき、エンタープライズのツールチェーンと統合して、音声キャプチャと文字起こしから、インテリジェントな要約、業務システムへのアーカイブまでの完全なワークフローを構築できます。

### 小売サービス研修

小売の販売・サービススタッフは reSpeaker Clip を装着して顧客との会話を録音できます。会話後、AI が録音から顧客要件の要約と実行可能な ToDo リストを生成し、チームのサービス品質、フォローアップ効率、成約率の向上に役立ちます。

### 会議議事録

会議シーンでは、reSpeaker Clip の 360 度全指向性ピックアップにより複数人のディスカッションをカバーできます。ユーザーは録音中にボタンで重要な瞬間にマークを付けることができ、会議後には自動的に構造化された議事録、ハイライト、アクションアイテムを生成できます。

### インタビューとリサーチ

ユーザーインタビュー、市場調査、顧客訪問などにおいて、reSpeaker Clip は生の音声データを取得し、録音を検索・レビュー可能なテキスト資料に整理するのに役立ちます。

### エンタープライズ向けカスタマイズ

企業はオープンな SDK を利用して、reSpeaker Clip を社内のオフィスシステム、CRM、ナレッジベース、プロジェクト管理ツール、あるいはプライベートにデプロイした LLM と統合できます。データコンプライアンス要件を持つ組織は、専用の AI 音声アシスタントやプライベートな音声分析ワークフローを構築することもできます。

## 適切な reSpeaker Clip ガイドの選び方

reSpeaker Clip のドキュメントは開発レイヤごとに整理されています。製品セットアップと通常のワークフローについては **Getting Started** から始めてください。ホストアプリケーションがデバイスを制御したり録音をダウンロードしたりする必要がある場合は **Basic SDK** を使用します。長時間稼働するサービスがデバイス接続を保持し API を公開する必要がある場合は **Service Integration** に進みます。デバイス側の動作、プロトコル、音声処理を変更する必要がある場合のみ **Firmware SDK** を使用してください。

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <a
      href="/ja/respeaker_clip/"
      aria-label="Open the reSpeaker Clip Getting Started guide"
      aria-current="page"
      className="card shadow--md respeaker-clip-nav-card respeaker-clip-nav-card--active"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
    >
      <img
        src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_getting_started.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
      />
      <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Getting Started</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>製品概要、ハードウェアセットアップ、初回利用のワークフロー。</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/ja/respeaker_clip_basic_sdk_guide/"
      aria-label="Open the reSpeaker Clip Basic SDK guide"
      className="card shadow--md respeaker-clip-nav-card"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
    >
      <img
        src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_basic_sdk.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
      />
      <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Basic SDK</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>ファームウェアを変更せずに、デバイスを制御し、録音を管理して音声をダウンロードします。</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/ja/respeaker_clip_service_integration/"
      aria-label="Open the reSpeaker Clip Service Integration guide"
      className="card shadow--md respeaker-clip-nav-card"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
    >
      <img
        src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_service_integration.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
      />
      <div style={{position: 'absolute', top: '50%', right: '4%', left: '54%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Service Integration</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>アダプタと API ルートを通じて、reSpeaker Clip を長時間稼働する Python サービスに追加します。</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/ja/respeaker_clip_firmware_quick_start/"
      aria-label="Open the reSpeaker Clip Firmware SDK quick start"
      className="card shadow--md respeaker-clip-nav-card"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
    >
      <img
        src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_firmware_sdk.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
      />
      <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>ファームウェア SDK</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>デバイス側の動作を構築、書き込み、デバッグし、カスタマイズします。</p>
      </div>
    </a>
  </div>
</div>

## Q&A

### 電源が入らない / 充電できない

デバイスの電源が入らない、または充電できない場合は、次の点を確認してください：

- デバイスが充電ベースに正しく置かれており、マグネット接点がずれていないことを確認します。
- USB-C ケーブルと電源アダプタが正常に動作しているか確認します。
- デバイス底面および充電ベース上のマグネット充電接点を清掃し、ほこりや異物による接触不良を防ぎます。
- 10 分間充電してから、もう一度電源ボタンを長押しします。
- それでもデバイスが反応しない場合は、デバイスの状態を記録し、テクニカルサポートに連絡してください。

### Bluetooth ペアリングに失敗する

スマートフォンが reSpeaker Clip とペアリングできない場合は、次の操作をお試しください：

- デバイスの電源が入っており、他のスマートフォンに接続されていないことを確認します。
- スマートフォンで Bluetooth 権限を有効にし、SenseCraft Voice App に Bluetooth の使用を許可します。
- スマートフォンをデバイスに近づけて、再度スキャンします。
- スマートフォンのシステム Bluetooth リストから古い reSpeaker Clip のペアリング記録を削除し、再度ペアリングします。
- デバイスとアプリを再起動してから、もう一度お試しください。

### 録音ファイルの転送が中断される

録音ファイルの転送が中断された場合は、次の点を確認してください：

- スマートフォンとデバイスを互いに近づけておきます。
- デバイスのバッテリー残量が十分であることを確認します。
- Wi-Fi または BLE 接続が安定しているか確認します。
- アプリをフォアグラウンドで実行したままにします。
- デバイスを再接続して、もう一度ファイルを転送します。大きなファイルの場合は、安定した Wi-Fi 環境を使用してください。

### Wi-Fi プロビジョニングに失敗する

デバイスが Wi-Fi プロビジョニングを完了できない場合は、次の点を確認してください：

- Wi-Fi 名とパスワードが正しいこと。
- ルーターが新しいデバイスをブロックしていないこと。
- スマートフォンとデバイスがルーターの近くにあること。
- 現在のネットワークが正常にインターネットへアクセスできること。
- 企業ネットワークや、Web 認証が必要な公共ネットワークを使用している場合は、通常の家庭用ネットワークまたはスマートフォンのテザリングに切り替えてテストしてください。

### アプリがデバイスを見つけられない

SenseCraft Voice App がデバイスを見つけられない場合は、次の操作をお試しください：

- デバイスの電源が入っており、接続待機状態であることを確認します。
- アプリに Bluetooth、位置情報、または近くのデバイスの権限が付与されていることを確認します。
- スマートフォンをデバイスに近づけて、再度スキャンします。
- アプリを終了してから再度開きます。
- reSpeaker Clip を再起動し、もう一度デバイスを追加します。

### ファームウェア更新に失敗する

OTA またはファームウェア更新に失敗した場合は、次の操作をお試しください：

- デバイスのバッテリー残量が十分であり、更新中に電源を切らないようにします。
- スマートフォン、デバイス、およびネットワーク接続を安定した状態に保ちます。
- 更新中にアプリを閉じたり、ネットワークを切り替えたりしないでください。
- 更新に失敗した後もデバイスが正常に起動できる場合は、アプリを開いて再度更新を開始します。
- デバイスが正常に起動できない場合は、後述のリカバリーモードまたはファームウェア書き込みのドキュメントに従い、テクニカルサポートに連絡してください。

## リソース

| リソース | リンク |
| --- | --- |
| 製品ページ | [reSpeaker Clip ウェアラブル AI レコーダー](https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html) |
| SenseCraft Voice アプリのダウンロード | [ダウンロードページ](https://sensecraft-voice-download.seeed.cc/) |
| ファームウェアのダウンロード | Coming soon |
| ファームウェア SDK ドキュメント | [ファームウェア SDK 入門ガイド](/ja/respeaker_clip_firmware_quick_start) |
| SDK リポジトリ | [reSpeaker Clip GitHub](https://github.com/Seeed-Studio/reSpeaker_Clip) |
| ユーザーマニュアル | <a href="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_user_manual.pdf" target="_blank" rel="noopener noreferrer">reSpeaker Clip ユーザーマニュアル</a> |
| データシート | Coming soon |
| 機械図面 | Coming soon |

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
