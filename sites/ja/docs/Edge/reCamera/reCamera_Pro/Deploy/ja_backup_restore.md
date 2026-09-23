---
description: reCamera Pro の構成をファイルにエクスポートし、別のデバイスにインポートする方法 — バックアップに含まれる内容、復元方法、および検証方法について説明します。
title: 構成のバックアップと復元
keywords:
  - reCamera
  - reCamera Pro
  - backup
  - restore
  - configuration
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_backup_restore
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_backup_restore/
---

# 構成のバックアップと復元

reCamera Pro は現在の設定をファイル（ブラウザがダウンロードする `tar` アーカイブ）としてエクスポートし、そのファイルを同じデバイスまたは別のデバイスにインポートできます。これは次のことを行う最速の方法です：

- 実績のある構成を複数のデバイス群に複製する
- [ファクトリーリセットまたはファームウェア復旧](/ja/recamera_pro_firmware_update/) 後に素早く復旧する
- 検知・録画・ネットワーク設定を変更する前に、既知の良好なスナップショットを保持する

## 構成バックアップをエクスポートする

1. Web UI にログインし、**Device Info → System Settings** を開きます。
2. **Export Configuration** をクリックします。
3. ブラウザが現在の設定を含む `tar` ファイルを自動的にダウンロードします。デバイス名と日付を含めて安全な場所に保存します（例：`recamera-frontdoor-2026-09-21.tar`）。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_eBayhpwddh.png" />

:::info バックアップに含まれる内容
エクスポートされたファイルには、その時点のデバイス設定が含まれます。依存する前に、自分のデバイスでどの項目（ネットワーク、時刻、接続、パスワード、録画ルール、AI モデル構成、サウンドモデル）が含まれているかを確認してください。また、アップロードしたモデルファイルや録画された映像は「設定」ではなく大容量データである点に注意してください。

{/* TODO(verify): enumerate exactly what Export Configuration includes and excludes on current firmware — network/Wi-Fi credentials, admin password, recording trigger rules and schedules, AI model configuration, uploaded .rknn model files, Sound Lab trained models, and recorded media. */}
:::

## 構成を復元（インポート）する

1. 対象デバイスで **Device Info → System Settings** を開きます。
2. インポートオプションを選択し、以前エクスポートした `tar` ファイル（エクスポートと同じ拡張子）を選びます。
3. インポート後、構成は自動的に読み込まれ、デバイスは**再起動**します。再起動が完了するまで待ちます — その後、インポートされた設定が有効になります。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_4h4p6raYPF.png" />

:::caution インポートは現在の設定を上書きします
インポートを行うと、デバイスに既にある構成はファイルの内容で置き換えられます。対象デバイスに保持したい設定がある場合は、先にエクスポートしておいてください。

{/* TODO(verify): confirm whether import merges or fully replaces settings, and whether importing a backup from a different firmware version is supported or rejected. */}
:::

## 復元を検証する

デバイスが再起動したら、復元が実際に反映されていることを確認します：

- [ ] Web UI へのログインが想定したパスワードで行える。
- [ ] ネットワーク／Wi-Fi の状態がバックアップと一致している（デバイスはファイルに記録された Wi-Fi に再接続する場合があります — 新しい設置場所からそのネットワークに到達できることを確認してください）。
- [ ] 時刻設定が正しい（[ネットワーク、時刻、アクセス制御](/ja/recamera_pro_device_info/) を参照）。
- [ ] **Recording Settings** の下に録画ルールとスケジュールが存在する。
- [ ] AI 推論が想定したモデルを実行し、実際のターゲットを検出できる。

## フリート運用とライフサイクルのヒント

- 残したい構成変更を行った**すべてのタイミングで**、および[導入前チェックリスト](/ja/recamera_pro_deploy_checklist/) をクリアした後にバックアップをエクスポートします。
- 1 台のデバイスを多数にクローンするには：ゴールデンデバイスを構成して 1 回エクスポートし、その後各ユニットにインポートします — その後、必要に応じてデバイスごとの項目（例：Wi-Fi、時刻）を調整します。
- バックアップはデバイス外（PC やファイルサーバー）に保管します。バックアップをデバイス上のみに保存している場合、そのデバイスをリセットまたは交換するとバックアップも失われます。

## テクニカルサポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
