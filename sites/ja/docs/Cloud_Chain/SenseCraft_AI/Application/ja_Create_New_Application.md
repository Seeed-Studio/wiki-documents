---
description: SenseCraft AI で新しいアプリケーションを作成する方法。
title: 新しいアプリケーションの作成
keywords:
  - create application
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/create-new-application
sidebar_position: 1
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/application/create-new-application/
---
# SenseCraft AI で新しいアプリケーションを作成する

## アプリの作成

**マイアプリ** ページを開き、**アプリを作成** > **アップロード** をクリックします。

作業内容を守るため、編集画面に入ると変更は **自動保存** され、ナビゲーションバーに保存状態がリアルタイムで表示されます。

## アプリの構築

作成フローは 4 つのステップに分かれており、上部のナビゲーションからいつでも切り替えられます。

### ステップ 1：アプリ情報

他のユーザーがアプリを知る最初の情報です。内容をよく考え、魅力が伝わるようにしてください。

- **アプリ名**：一目で何をするアプリか分かる、分かりやすい名前を付けます。

- **アプリの要約**：用途、利用技術、デバイスなどを簡潔にまとめます。

- **シーン**：最も適したカテゴリタグを選びます。掲載・発見に影響します。

- **ライセンス**：他者の複製・改変の可否、商用利用の可否などをここで設定します。

:::caution
後からライセンスを変更した場合、変更前に行われた操作（複製など）とその結果には影響しません。
:::

- **画像**：見せ方は魅力に直結します。1 枚目はデフォルトでカバー画像になります。最大 16 枚、アプリあたり **2MB 以下**、**4:3** の比率を推奨します。

### ステップ 2：ドキュメント

アプリの中心となるパートです。**アプリ紹介** と **デプロイ（展開）** の手順を詳しく書きます。右上のボタンでプレビューの表示／非表示を切り替え、他ユーザー視点でフローを確認・検証できます。

#### Markdown で編集

エディターは Markdown 対応です。編集中に `/` を入力すると、見出しやツールブロック挿入のショートカット（今後のアップデートで提供）が開きます。

#### アプリ紹介

背景、原理、設計などを自由に記述できます。この欄では SenseCraft 機能を呼び出すツールブロックは追加できません。

#### アプリのデプロイ

再現手順をステップ単位で書き、各ステップの前提も説明します。`+` で操作ステップを追加します。順序と説明を明確にし、プレビューで他者が追えるか確認してください。

#### ツールブロックの利用

デプロイフローでは SenseCraft AI の統合機能をワンクリックで挿入でき、作成とエンドユーザーの導入の両方が楽になります。

##### AI ビジョン

物体認識、検出、分類など、対応ハードウェア上で AI ビジョンモデルを配置します。設定に応じ、推論結果を MQTT、GPIO、シリアル（Serial）などでリアルタイムに送れます。

現時点のツールブロックは **検出（Detection）** と **分類（Classification）** に対応します。セグメンテーションと姿勢推定は今後のリリース予定です。

**対応デバイス：**

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Grove - Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)
- [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html)
- [SenseCAP A1102](https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html)
- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

**SenseCraft AI モデル：** モデルライブラリからコミュニティ公開のモデルを選びます。

**マイモデル：** 非公開で保存したリストから選びます。

:::caution
このモデルを含むアプリをコミュニティに公開すると、非公開モデルも自動的に公開されます。
:::

- **モデルをアップロード：** 第三者プラットフォームで学習したファイルをアップロードします。モデル名、タスク種別（Task）、カテゴリ（Class ID / Class Name）、モデルファイル、対応デバイスを指定します。完了後 **マイモデル** に表示されます。

- **モデルを学習：** 新規学習または再学習は学習エントリから実行し、**履歴モデル** の **SenseCraft に送信** からアップロードフローを完了し、**マイモデル** に保存します。

**デバイスを選択：** このモデルがサポートする一覧から、実際に使うハードウェアを選びます。

**推奨パラメータの調整：** 推論とデバイス設定を用途に合わせて調整します。デプロイ時にデフォルトとして書き込まれます。

- **信頼度しきい値：** 最終予測を出すかどうかの基準です。上げると誤検知が減り、下げると取りこぼしが減る傾向があります。

- **IOU しきい値：** 検出では IoU で予測ボックスと正解の重なりを評価します。高すぎると同一物体に複数ボックスが付きやすく、低すぎると近接物体が一つにまとまりやすくなります。

- **出力モード**

  - **なし：** 電源投入後は推論を開始せず、別トリガーが必要です。低消費電力用途向け。

  - **MQTT：** 起動後すぐ推論し、Wi-Fi 経由で MQTT 送信します。

    - **SenseCraft 公式サービス（推奨）：** アプリ用の Dev Kit を選ぶか新規作成すると MQTT が自動設定されます。受信データは [SenseCraft Data プラットフォーム](https://sensecap.seeed.cc) で確認・処理します。

    - **サードパーティ：** 自前または第三者の MQTT ブローカーを使い、手動でパラメータを設定します。

  - **GPIO：** ピンレベルで信号を出します。

    - **トリガー条件：** 対象、条件、信頼度しきい値などでルールを定義します。

    - **トリガーアクション：** 条件成立時にピンの High/Low、SD への保存、LED 点灯などを実行します。

  - **シリアル：** [SSCMACore ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA?tab=readme-ov-file#seeed_arduino_sscma-library) で UART（GPIO）、I2C、SPI から推論データを出力します。

  ```text
    **UART (GPIO)**
    Baud Rate Value: 921600
    Data Format: 8N1
    TX: GPIO43
    RX: GPIO44

    **I2C**
    Slave Address: 0x62
    SDA: GPIO5 (PULLUP)
    SCL: GPIO6 (PULLUP)
    Protocol:
    - READ：0x10，0x01, LEN << 8, LEN & 0xff
    - WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
    - AVAIL(to read): 0x10，0x03
    - RESET(clear buffer): 0x10，0x06

    **SPI**
    Slave CPOL0 CPHA0
    MOSI GPIO9 (PULLUP)
    MISO GPIO8,
    SCLK GPIO7 (PULLUP)
    CS GPIO4 (PULLUP)
    Protocol:
    - READ：0x10，0x01, LEN << 8, LEN & 0xff
    - WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
    - AVAIL(to read): 0x10，0x03
    - RESET(clear buffer): 0x10，0x06
  ```

##### AI オーディオ

対応ハード上で音声認識モデルを配置します。設定に応じ MQTT / GPIO / シリアルで結果を送れます。

**対応デバイス：**

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)

**SenseCraft AI モデル：** ライブラリのコミュニティ共有モデルから選びます。

**マイモデル：** 非公開リストから選びます。

:::caution
コミュニティ公開時、非公開モデルは自動的に公開されます。
:::

- **モデルをアップロード：** モデル名とカテゴリ（Class ID / Class Name）を入力します。完了後 **マイモデル** に出ます。

- **モデルを学習：** 新規または更新モデルを学習し、ビジョンと同様 **履歴モデル** から SenseCraft に送ります。

**デバイスを選択：** 音声モデルは現状 XIAO ESP32S3 Sense のみです。

**推奨パラメータの調整：** 用途に合わせて微調整します。

- **信頼度しきい値：** ビジョンと同様、取りこぼしと誤検知のトレードオフです。

- **出力モード：** 音声モデルの既定の出力経路です。

##### AI 振動

通常の振動を学習し、異常振動を検知するモデルを配置します。

**対応デバイス：**

- XIAO ESP32S3 Sense（[3 軸加速度計](https://seeedstudio.feishu.cn/record/QFIprpQsmesStwcOpZWc98Ccn9n) 接続）

**推奨パラメータの調整：** サンプリング、起動時推論、GPIO、出力を調整します。

- **サンプリングウィンドウ：** 単位時間あたりのサンプル数。大きすぎると遅く、小さすぎると学習不足になります。

- **既定の起動時推論を有効化：** オフにすると起動直後は推論せず、別トリガーが必要です（低消費電力向け）。

- **GPIO：** 異常検知時にレベルや LED などを制御します。

- **出力モード：** 振動モデルの既定の出力です。

##### Node-RED

reCamera 向けのビジュアルロジックを Node-RED で組みます。

**ワークフローの準備：** Node-RED ブロック追加後、次のいずれかで設定します。

1. **新規ワークフロー：** reCamera に有線／無線接続し、Dashboard 上で編集します。

2. **ローカルファイルをアップロード：** 既存の JSON フローをアップロードします。形式は自動検証されます。

**AI ビジョンモデルの選択：** JSON にはモデルバイナリは含まれません。利用モデルを別途指定します。

1. **デバイス同梱：** reCamera プリインストールモデル（YOLO11n 系の分類・検出・セグメンテーション・姿勢など）。

2. **公開モデル：** reCamera 向けの SenseCraft 公開モデルを参照します。

3. **マイモデル：** 非公開ライブラリから選びます。

:::caution
**公開時：** **マイモデル** の非公開モデルを使いアプリを公開コミュニティに出すと、当該モデルも公開されます。公開前に確認プロンプトが出ます。
:::

##### Aily Blockly

ビジュアル開発環境です。このブロックで Aily Blockly で作ったプログラムをエッジ機器にワンステップで書き込めます。

**対応製品：**

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)

**プロジェクト ID の紐付け：** 公開の Aily Blockly テンプレートを指すコードを入力します。

- **Project ID の取得：** Aily Blockly デスクトップを開き、右側の **CLOUD SPACE** でプロジェクトカードを探します。カード下の文字列（例 `prj_be881f`）が Project ID です。

![](https://seeedstudio.feishu.cn/space/api/box/stream/download/asynccode/?code=YjczYzljYmQ3NjhlNDg4NzhlNDBiZmM1YjZlNTYzOWRfa1VaTU5hNEFRN2g3WFF6a1g1c0VMNGFkcDNxcWoyTjVfVG9rZW46WWFmSmJER09yb3JVaUh4RmZITGNueFlSbmNlXzE3NzQ4NTczMzg6MTc3NDg2MDkzOF9WNA)

**デプロイデバイス：** 実機をドロップダウンから選択します。

##### コンテナアプリのデプロイ（近日）

##### ファームウェアの書き込み（近日）

##### MQTT の設定（近日）

##### デバッグツール（近日）

### ステップ 3：部品表（BOM）

再現に必要な材料をすべて列挙します。

#### Seeed Studio から

公式ハードウェアを検索して直接追加できます。

#### その他の材料

ボルトや特殊ケーブル、3D プリント部品など Seeed 以外のものは名称・説明・数量を書き、購入リンクがあると便利です。

#### ソフト・プラットフォーム（近日）

Arduino IDE、Home Assistant、Edge Impulse など、必要なソフトやプラットフォームを列挙します。

### ステップ 4：プレビューと公開

エンドユーザー目線で全体を確認します。**公開** 前に必須項目の記入、コード・アセット配布の権利、機密や違法コンテンツの有無を確認してください。

公開後は審査フローに入り、その間は下書きを編集できません。まだ公開したくない場合はエディターを閉じれば、進捗は引き続き自動保存されます。

## アプリの公開

:::caution
非公開のモデル（自分で学習したものなど）を使っている場合、アプリ公開と同時にモデルも公開対象になります。事前に通知があります。
:::

:::caution
他者公開モデルに依存している場合、そのモデルが取り下げられてもアプリの公開状態は維持されますが、そのモデルでのデプロイはできなくなります。通知があります。
:::

### 審査について

:::tip
審査提出後も、編集を続ける必要があれば申請をいつでも取り下げられます。
:::

管理者は主に次を確認します。

1. **コンテンツとセキュリティ**

   - **著作権・OSS ライセンス：** コード・モデル・画像・素材の権利、または上流ライセンス（MIT、Apache 等）順守。

   - **プライバシーとデータセキュリティ：** カメラ・マイク等を使うコードに、隠れた窃取・無許可アップロード・バックドアがあってはなりません。

   - **法令とコミュニティ規範：** 企業秘密、違法素材、マルウェア、暴力・ポルノ・憎悪表現などは不可。

2. **モデル品質とハード適合**

   - **利用可能：** カスタムモデルはプラットフォームで正しく読み込める形式であること。

   - **説明の正確さ：** 実性能と説明が大きく乖離した誇大は不可。

   - **ハード適合：** モデル規模とロジックが、謳うボードの性能に合うこと。

3. **ドキュメントと再現性**

   - **基本情報：** 名称・要約・タグ・カバーが正確で誤解を招かないこと。

   - **BOM の正確さ：** 記載ハードが実際の手順と一致すること。

   - **再現可能なデプロイ：** 手順が一貫し、配線・しきい値・MQTT 等が明示されていること。

4. **コミュニティガイドライン**

   - **スパム禁止：** 意味のない重複や、技術的価値のない広告のみの内容は不可。

:::caution
SenseCraft AI コミュニティの安全と品質のため、審査の最終判断はプラットフォームにあります。法令・規約・重大なセキュリティ問題に抵触するプロジェクトは却下や削除の対象になり得ます。
:::

## アプリの管理

### アプリストアから公開アプリを管理する

ストアから **自分が公開した** アプリの詳細を開くと、**現在公開中の版** を素早く管理できます。

- **複製：** 公開済みの安定版を別プロジェクトとしてコピーします。

- **編集：** 下書きを開き、`マイアプリ` > `編集` と同様に変更します。

- **非公開：** 一般公開を一時停止し、状態をプライベートにします。

### マイアプリから管理する

- **編集：** エディターを開きます。変更は **下書き** のみで、公開版には影響しません。

- **複製：** 現在の下書きを新規プロジェクトにコピーします。

- **公開／更新を公開：** 審査に提出します。承認後、ストアの掲載が更新され、既存公開版が置き換わる場合があります。

- **非公開：** 公開中のアプリをここからプライベートに戻せます。

:::tip
下書きと公開版が異なる場合、非公開後は公開版スナップショットに簡単にアクセスできなくなることがあります。公開版を基に続けるなら、**非公開前に複製** してください。
:::

- **削除：** アプリを完全に削除します。

:::caution
現在公開中なら、削除はストアからの非公開の後に永続削除します。十分注意してください。
:::
