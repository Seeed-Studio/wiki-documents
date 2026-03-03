---
description: 音声コマンドとSeeed Studio XIAO ESP32S3 Senseおよび円形LCDディスプレイを使用して、コンパクトなCircuitPython駆動のポモドーロタイマーを構築します。
title: XIAO ESP32S3とCircuitPythonで音声起動ポモドーロタイマーを構築する
keywords:
  - XIAO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiao_esp32s3_voice_pomodoro
last_update:
  date: 04/17/2025
  author: Peter Machona
---

# AskLou.io ポモドーロタイマー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32s3_sense_pomodoro_timer/AskLou_01.png" style={{width:800, height:'auto'}}/></div>

> Seeed Studio XIAO ESP32S3 SenseとRound Display for XIAOで構築された音声制御ポモドーロタイマー。ハンズフリーの時間管理で生産性を維持しましょう！

## プロジェクト概要

AskLou.io ポモドーロタイマーは、時間管理のための人気のポモドーロテクニックを実装するのに役立つ、コンパクトな音声起動生産性ツールです。シンプルな音声コマンドを使用して、コンピューターや電話に触れることなく、作業セッションを開始し、休憩を取り、生産性を管理できます。

## なぜAskLou.io ポモドーロタイマーなのか？

従来のポモドーロタイマーは手動操作が必要で、フローと集中力を妨げます。AskLou.ioは音声コマンドでこの問題を解決し、指一本動かすことなく時間を管理できます。エレガントな円形ディスプレイは現在のセッションの状況を一目で確認でき、集中力と生産性を維持するのに役立ちます。

## 機能

- **音声制御**: シンプルな音声コマンドでタイマーを開始・一時停止
- **複数のセッションタイプ**: 標準作業セッション（25分）、短い休憩（5分）、長い休憩（15分）
- **視覚的進捗追跡**: 直感的な円形進捗インジケーターで残り時間を表示
- **集中を妨げない**: アプリなし、通知なし、ただ集中した生産性
- **カスタマイズ可能**: 個人のワークフローに合わせてセッション時間を簡単に変更
- **低消費電力**: デスクでの終日使用を想定した設計
- **スタンドアロン動作**: セットアップ後はスマートフォンやコンピューターは不要

## ハードウェア

### 必要なコンポーネント

- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html)
- [Seeed Studio Round Display for XIAO (1.28" 240x240 GC9A01 LCD)](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- 電源用USB-Cケーブル
- オプション: 3Dプリントケース（プロジェクトにファイル含む）

### このハードウェアを選んだ理由

XIAO ESP32S3 Senseには内蔵マイクが含まれており、音声制御アプリケーションに最適です。そのコンパクトなフォームファクターと美しい円形ディスプレイの組み合わせにより、ワークスペースの美観を損なわないエレガントなデスクトップコンパニオンを作成できます。

## 構築プロセス

### 1. ハードウェア組み立て

- Round DisplayをXIAO ESP32S3 Senseボードに接続
- ディスプレイはXIAOのピンに直接接続 - はんだ付け不要！
- オプション: 完成した外観のために3Dプリントケースに取り付け

### 2. ソフトウェアセットアップ

**CircuitPythonのセットアップ**

- [CircuitPython.org](https://circuitpython.org/)からCircuitPython 8.x以降をダウンロード
- ボードをブートローダーモードにする（リセットボタンをダブルクリック）
- CircuitPython UF2ファイルをボードのドライブにドラッグアンドドロップ

**必要なライブラリのインストール**

- [CircuitPythonバンドル](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases)から以下のライブラリをダウンロード:
  - adafruit_display_text
  - adafruit_display_shapes
  - gc9a01.mpy
  - analogio（マイク機能用）
- CircuitPythonデバイスのlibフォルダにコピーします。

### 3. コードデプロイ

この[リポジトリ](https://github.com/AskLou-io/Pomodoro_Circuit_Python)からcode.pyファイルをCircuitPythonデバイスにコピーするだけで、タイマーが自動的に動作を開始します！

## 動作原理

- **音声検出**: オンボードマイクロフォンが閾値を超える音を検出します
- **コマンドシミュレーション**: デモ版では、コマンドがプリセットリストを循環します
- **タイマーロジック**: 作業セッション、短い休憩、長い休憩を追跡します
- **視覚的フィードバック**: 円形ディスプレイがセッションタイプと残り時間を表示します
- **進捗インジケーター**: 照明付きアークが現在のセッションの進捗を表示します

AskLou.io ポモドーロタイマーは以下の音声コマンドに応答します：

- "Start timer" - 25分間の作業セッションを開始
- "Pause timer" - 現在のセッションを一時停止
- "Start short break" - 5分間の休憩を開始
- "Start long break" - 15分間の休憩を開始

## カスタマイズオプション

AskLou.io ポモドーロタイマーは以下の方法でカスタマイズできます：

- **セッション時間**: session_durations辞書を変更して作業や休憩の長さを変更
- **音声感度**: 環境に応じてLOUD_THRESHOLD値を調整
- **視覚テーマ**: 異なるセッションタイプのアーク色を変更
- **コマンドワード**: voice_commandsリストを更新して異なるフレーズを使用

## 将来の機能強化

将来のバージョンで考えられる改善点：

- より信頼性の高いコマンド検出のための音声認識の改善
- セッション終了時の触覚または音声フィードバック
- セッションログ記録のための生産性アプリとの連携
- 音声通知用の小型スピーカー
- 持ち運び可能なバッテリー電源

## リソース

- [GitHubリポジトリ](https://github.com/AskLou-io/Pomodoro_Circuit_Python/blob/main/README.md)
- [Hackster.ioプロジェクト](https://www.hackster.io/peter-machona/asklou-io-pomodoro-timer-a7a1f2)
- [XIAO ESP32S3 ドキュメント](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/)
- [Round Display ドキュメント](https://wiki.seeedstudio.com/ja/get_start_round_display/)

## クレジット

- Seeed Studioによるハードウェアプラットフォーム
- Francesco Cirilloによるポモドーロテクニック
- [Peter Machonaによるプロジェクト](https://github.com/AskLou-io/Pomodoro_Circuit_Python)

## ライセンス

このプロジェクトはクリエイティブ・コモンズ 表示-非営利（CC BY-NC）ライセンスの下でリリースされています。これは以下を自由に行えることを意味します：

- **共有** — あらゆる媒体や形式で資料をコピー・再配布
- **翻案** — 資料をリミックス、変形、構築

以下の条件の下で：

- **表示** — 適切なクレジットを表示し、ライセンスへのリンクを提供し、変更が加えられた場合はその旨を示す必要があります。合理的な方法で行うことができますが、ライセンサーがあなたやあなたの使用を推奨していることを示唆する方法は除きます。
- **非営利** — 商業目的でこの資料を使用することはできません。

---

AskLou.io ポモドーロタイマー - 集中した生産性を、ただ求めるだけで。

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Peter Machona](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92639112&issue=Seeed-Studio%7Cwiki-documents%7C2074)の献身的な努力に特別な感謝を捧げます。あなたの作品は[展示](https://wiki.seeedstudio.com/contributors/)されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
