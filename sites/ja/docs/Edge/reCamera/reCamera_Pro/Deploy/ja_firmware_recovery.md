---
description: ファームウェアバージョンの確認、reCamera Pro ファームウェアの更新、システムの再起動、およびボタンまたは Web UI による工場出荷時設定へのリセットでデバイスを復旧する方法について説明します。
title: ファームウェアの更新と復旧
keywords:
  - reCamera
  - reCamera Pro
  - firmware update
  - factory reset
  - recovery
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_firmware_update
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_firmware_update/
---

# ファームウェアの更新と復旧

このページでは、**Device Info → System Settings** にあるライフサイクル操作について説明します。具体的には、ファームウェアバージョンの確認、ファームウェアの更新、システムの再起動、およびデバイスの動作がおかしい場合の復旧手段としての工場出荷時設定へのリセットです。

:::caution 開始する前に
更新やリセットを行う前に、[configuration backup](/ja/recamera_pro_backup_restore/) をエクスポートし、現在のファームウェアバージョンを控えておいてください。作業中は常に安定した電源を確保してください。更新が中断されると、デバイスが起動不能になる可能性があります。
:::

## 現在のファームウェアバージョンを確認する

**Device Info → System Settings** を開きます。このページにはデバイスの現在のファームウェアバージョンが表示されます（基本的なハードウェア／ソフトウェアバージョンは [Basic Information](/ja/recamera_pro_device_info/#basic-information) にも表示されます）。このバージョンを資産リストに記録しておいてください。サポートやバグ報告では必ず必要になります。

{/* TODO(verify): add a screenshot of System Settings highlighting the firmware version field, and document where official firmware packages are published (download page / release notes) and how version numbers map to releases. */}

## ファームウェアを更新する

**Device Info → System Settings** で、新しいファームウェアへの更新を選択し、画面の指示に従います。OTA（Over-the-Air）更新中は、緑色のステータス LED が **約 100 ms 間隔で点滅** します。この状態ではデバイスの電源を切らないでください。更新が完了してデバイスが再起動すると、LED は再び緑色の点灯状態に戻ります。

更新後は、次のことを行ってください：

1. System Settings でファームウェアバージョンを再確認し、新しいバージョンが動作していることを確認します。
2. デバイスが引き続き期待どおりに検出および記録できることを確認します（[pre-deployment checklist](/ja/recamera_pro_deploy_checklist/) の項目 5〜6 が簡易テストとして有効です）。
3. 古いバージョンから設定をインポートした場合は、[restore verification steps](/ja/recamera_pro_backup_restore/#verify-a-restore) を再実行します。

{/* TODO(verify): document the exact update flow on current firmware — whether updates are pulled OTA from the Internet, uploaded as a package, or both; what data is preserved across an update (settings, uploaded models, recordings); and the failure-recovery path if an update is interrupted. */}

## システムを再起動する

System Settings にはリモートでの **restart** 機能もあります。設定のインポート後やネットワーク設定の変更後、あるいはサービスがハングした状態を解消するために使用します。デバイスは再起動し、通常の起動時間内に緑色の点灯状態に戻るはずです。

## 復旧：工場出荷時設定へのリセット

デバイスがフリーズしている場合、設定したパスワードでアクセスできない場合、または更新後に動作がおかしい場合は、工場出荷時設定を復元してください。方法は 2 つあります：

### 方法 1：ハードウェアボタン

側面のボタンを **約 15 秒間押し続け**、プロンプト音が聞こえるまで待ちます。これでデバイスはリセットモードに入ります。緑色のステータス LED が連続点灯状態になるまで待ってから、再度ログインします（新しいデバイスと同様に、初回ログインフローと初期パスワードが適用されます）。

### 方法 2：Web UI

**Device Info → System Settings → Factory Reset** をクリックします。

![Factory reset diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-Pro_reset_Device.jpg)

:::warning 工場出荷時リセットはデバイスを開封直後の状態に戻します
設定は消去されます。その後で [configuration backup](/ja/recamera_pro_backup_restore/) を再インポートし、ネットワークアクセス、時刻、検出が正しく動作するかを再確認する計画を立てておいてください。

{/* TODO(verify): state exactly what a factory reset preserves vs wipes on current firmware (recorded media on SD/eMMC, uploaded model files, Wi-Fi credentials, admin password), and whether the button-reset prompt sound/15 s timing is unchanged. */}
:::

## デバイスがまったく起動しない場合

- まず電源を確認します。緑色 LED が消灯している場合は、コアプロセスが動作していません。緑色の短い点滅は、ファイルシステムが不正な SD カードが検出されたことを意味します。SD カードを挿し直すか再フォーマットしてください。
- LED が呼吸点灯のままで点灯状態にならない場合は、起動が途中で止まっています。デバイスの電源を入れ直し、その後ボタンによる工場出荷時リセットを試してください。
- LED 状態のリファレンス: [quick start, status indicator](/ja/recamera_pro_getting_started/#status-indicator-reference)。その他の症状については [Troubleshoot by symptom](/ja/recamera_pro_faqs/) を参照してください。

{/* TODO(verify): confirm the last-resort recovery path (e.g. re-flashing factory system image over USB/SD) for a device that does not respond to button reset, and link the official recovery material once identified. */}

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
