---
description: reCamera Pro の本番展開前チェックリスト — フィールドに出す前に、電源、ネットワーク、時刻、ストレージ、AI モデル、再起動動作を確認します。
title: 展開前チェックリスト
keywords:
  - reCamera
  - reCamera Pro
  - 展開
  - チェックリスト
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_deploy_checklist
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_deploy_checklist/
---

# 展開前チェックリスト

このチェックリストは、**reCamera Pro を最終設置場所に取り付ける前に、ベンチ上で実行してください**。各項目には明確な合格基準があります — もし不合格の項目があれば、まずはそれを修正する（リンクされたガイドを参照）か、ログを収集してサポートに連絡してください。6 つすべてのチェックに合格したデバイスは、無人で展開できます。

| # | チェック | 合格基準 |
| --- | --- | --- |
| 1 | 電源 | 最終的な電源で起動し、LED が緑色点灯で安定している |
| 2 | ネットワーク | 監視用コンピュータから LAN アドレスで Web UI にアクセスできる |
| 3 | 時刻 | デバイスの時計が実時間と一致し、再起動後も維持される |
| 4 | ストレージ | 必要な保存期間に見合う録画ストレージ容量があり、ディスク満杯時のポリシーが設定されている |
| 5 | AI モデル | 適切なモデルが動作し、実環境のターゲットを検出できる |
| 6 | 再起動 | デバイスが自動的に復帰し、設定と検出状態が保持される |

{/* TODO(verify): validate each check below on a real device in the field-installation orientation, and add measured pass/fail thresholds (e.g. minimum supply voltage, Wi-Fi signal level, retention days per GB) once tested. */}

## 1. 電源

- 工場出荷時の 12 V DC 電源（12 V、最小 1 A；標準付属品は 12 V、3 A）または同等に安定した電源を、**最終**配線で使用してください — ベンチ用の USB ケーブルではありません。
- Type-C 給電の場合、アダプタは PD プロトコルをサポートしている必要があります。不安定な電源は、Wi-Fi エラーの繰り返しやプレビュー失敗として現れます。
- **合格**：起動後に緑色 LED が点灯状態で安定し、プレビュー＋推論のフルセッション中もデバイスが動作し続けること。ハードウェアについては [クイックスタート](/ja/recamera_pro_getting_started/) を参照してください。

## 2. ネットワーク

- デバイスを本番用 Wi-Fi／ネットワークに接続し、ルーター上でその MAC アドレスに固定アドレスを割り当てる（または割り当てられたアドレスを記録する）うえで、監視に使用するコンピュータから Web UI が開けることを確認します。
- アクセス制御を意図的に設定します：SSH は必要な場合のみ有効化し、HTTP 設定を確認し、デフォルトパスワードを変更します。
- **合格**：USB ケーブルを抜いた後も、LAN アドレスで Web UI にアクセスできること。[Wi-Fi 経由でデバイスにアクセスする](/ja/recamera_pro_wifi_access/) および [ネットワーク、時刻、アクセス制御](/ja/recamera_pro_device_info/) を参照してください。

## 3. 時刻

- 録画スケジュールとファイルのタイムスタンプは、正しい時計に依存します。**Device Info → Time Settings** でシステム時刻（および時刻ソース）を設定してください。
- **合格**：表示される時刻が実時間と一致し、録画ファイルのタイムスタンプが正しい日付ディレクトリに保存されること — 再起動後も含めて。

## 4. ストレージ

- 実際に録画に使用するストレージを挿入／確認したうえで、**Recording Settings → Storage Management** でディスク使用量を確認し、利用可能なストレージ容量／クォータを設定し、ディスク満杯時のポリシー（最古のものを上書きするか、停止するか）を決めます。
- **合格**：クォータとポリシーが設定され、テスト録画が **File Preview** に表示されること。[録画とストレージの確認](/ja/recamera_pro_storage/) を参照してください。

## 5. AI モデル

- 本番で使用するモデル（プリインストール済みまたは独自モデル）を読み込み、その検出カテゴリとしきい値を設定し、推論を有効化したうえで、**実際の設置位置で実際のターゲットを検出できること** を確認します — 照明、角度、距離も含めて検証してください。
- **合格**：リアルタイム推論モニタリングで、ターゲットに対して許容できる FPS で正しい `class_name`／`score` が表示されること。[AI 推論設定](/ja/recamera_pro_ai_inference/) を参照してください。カスタムモデルについては [モデル展開パスの選択](/ja/recamera_pro_model_path/) を参照してください。

## 6. 再起動

- 最終テストとして、**Device Info → System Settings** からデバイスを再起動する（または電源の入れ直しを行う）ようにします。
- **合格**：デバイスが自動的に起動して緑色 LED 点灯状態で安定し、時刻、ネットワーク、パスワード、録画ルール、実行中のモデルが保持され、手動操作なしで再び検出を開始すること。

## ボックスを閉じる前に

- [設定をバックアップ](/ja/recamera_pro_backup_restore/) し、エクスポートしたファイルを安全な場所に保管してください — それが最速の復旧手段です。
- **Device Info → System Settings** に表示されるファームウェアバージョンを資産リストに記録し、[ファームウェアの更新と復旧](/ja/recamera_pro_firmware_update/) ガイドを手元に置いてください。
- 自身の運用ドキュメントに、デバイスの LAN アドレス、管理者アカウントポリシー、および設置場所を記録しておきます。

## テクニカルサポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
