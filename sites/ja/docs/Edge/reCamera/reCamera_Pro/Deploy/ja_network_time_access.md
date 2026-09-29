---
description: 日常運用時に、ネットワーク上での reCamera Pro の動作（システム時刻、SSH/HTTP アクセス、シリアルボーレート、管理者パスワード）をどのようにするかを設定します。
title: ネットワーク、時刻、アクセス制御
keywords:
  - reCamera
  - reCamera Pro
  - network settings
  - SSH
  - time settings
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_device_info
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_device_info/
---

# ネットワーク、時刻、アクセス制御

Web UI の **Device Info** エリアでは、展開済みの reCamera Pro がネットワーク上でどのように動作するかを決める設定（クロック、どのリモートアクセスサービスを開くか、誰がログインできるか）を扱います。初回の Wi-Fi 接続については [Access the device over Wi-Fi](/ja/recamera_pro_wifi_access/) を参照してください。このページでは、デバイスがネットワークに接続された「その後」の **長期的な設定** について説明します。

Device Info では、ハードウェア／ソフトウェアのバージョンやリソース使用状況も表示します。ページ下部の [Basic information](#basic-information) を参照し、残りの System Settings 項目については [Back up and restore](/ja/recamera_pro_backup_restore/) および [Firmware update and recovery](/ja/recamera_pro_firmware_update/) を参照してください。

## 時刻設定

システム時刻は、録画スケジュール、ファイルのタイムスタンプ、ログエントリに影響します。**Device Info → Time Settings** で設定します。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_F3jLNlVu0W.png" />

- 再起動のたび、またデバイスをインターネットに接続されていないネットワークへ移動した後は、必ず時計を確認してください。
- スケジュールや録画ディレクトリの時刻がずれている場合は、まず時刻を確認してください。誤った時計設定が最も一般的な原因です。

{/* TODO(verify): document whether the device syncs time via NTP automatically when connected to the Internet, which NTP servers/regions are used, and how time behaves after reboot without network. */}

## ネットワーク設定（長期運用）

**Device Info → Network Settings** では、Wi-Fi モジュールの状態、接続中のネットワーク、および詳細なネットワーク情報を確認できます（接続中のネットワークの横にある感嘆符をクリックすると、IP/MAC の詳細が表示されます）。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_GJspvgAFdl.png" />
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_vq4u1biblp.png" />

恒久的な設置の場合：

- ルーター側でデバイスの MAC アドレスに固定 IP を割り当てる（DHCP 予約）か、割り当てられたアドレスを資産リストに記録しておきます。
- Web UI や公開サービスにアクセスできるのが想定したクライアントだけになるよう、デバイスを適切なネットワークセグメント上に配置します。

## 接続設定：SSH、HTTP、シリアル

**Device Info → Connection Settings** では、デバイスへの接続方法を制御します：

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZH9JMcsCen.png" />

| 設定 | 影響 | 導入時のガイドライン |
| --- | --- | --- |
| SSH remote connection | システムへの SSH アクセスを有効／無効にします | 開発および保守用途では有効にし、シェルアクセスが不要な本番機では無効にします |
| HTTP settings | デバイスの HTTP サービスを設定します | 信頼できるネットワークへのみ公開範囲を制限します |
| Serial port baud rate | シリアルポートのボーレートを設定します | 連携する外部コントローラ／MCU と一致させる必要があります |

:::caution アクセス設定の変更は即時に反映されます
SSH を無効にしたり HTTP 設定を変更したりすると、現在のリモートセッションから締め出される可能性があります。接続設定を変更する間は、Web UI（または `192.168.42.1` の USB 直接接続）をフォールバック経路として確保しておいてください。
:::

{/* TODO(verify): confirm exact HTTP settings fields exposed in Connection Settings on current firmware (port, enable switch, TLS) and document them here. */}

## パスワード管理

管理者パスワードは **Device Info → System Settings** で変更します。Web UI のログインにはユーザー名 `admin` を使用し、新品デバイスの初期パスワードは `recamera` です（初回ログイン時に新しいパスワードの設定を求められます）。

- **展開前に必ずデフォルトパスワードを変更してください**。デフォルトを知っている人なら誰でも Web UI にアクセスできてしまい、[web terminal](/ja/recamera_pro_terminal/)／SSH root ログイン（デフォルトでは `root` / `recamera`）はデバイスの認証情報の状態を共有しています。
- パスワードを変更すると Web UI のログインに影響します。新しいパスワードをどこに保管したかを記録しておいてください。

{/* TODO(verify): confirm the exact relationship between the Web UI admin password, the root SSH/terminal password, and whether changing one changes the other, on current firmware. */}

## 基本情報

**Device Info → Basic Information** では、ハードウェアおよびソフトウェアのバージョンと、システムリソースのリアルタイム使用状況が表示されます。サポートに問い合わせる際、最初に求められる情報です。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_aWZqM1cZvA.png" />

[ファームウェアを更新する](/ja/recamera_pro_firmware_update/) または [サポート用にログを収集する](/ja/recamera_pro_collect_logs/) 際には、このページに表示されるファームウェアバージョンを伝えてください。

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
