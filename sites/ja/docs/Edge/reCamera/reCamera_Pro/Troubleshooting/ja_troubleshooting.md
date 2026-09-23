---
description: 症状別に整理した、reCamera Pro でよくある問題とその解決方法。Wi-Fi エラー、ビデオプレビュー失敗、FP16 モデルのフリーズ、USB ネットワーク、工場出荷時リセットをカバーします。
title: 症状別トラブルシューティング
keywords:
  - reCamera
  - reCamera Pro
  - FAQ
  - troubleshooting
  - FP16
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_faqs/
---

# 症状別トラブルシューティング

このページでは、よくある reCamera Pro の問題を**目に見える症状**ごとにまとめています。該当するものがない場合は、[ログを収集](/ja/recamera_pro_collect_logs/)してサポートに共有してください。

| 症状 | セクション |
| --- | --- |
| WebUI が繰り返し Wi-Fi エラーを表示する / プレビューできない | [1. Wi-Fi エラーとプレビュー不可](#1-wi-fi-エラーとプレビュー不可) |
| FP16 モデルをアップロードすると WebUI がフリーズする | [2. FP16 モデルのアップロードで WebUI がフリーズする](#2-fp16-モデルのアップロードで-webui-がフリーズする) |
| Windows から USB 経由で `192.168.42.1` にアクセスできない | [3. Windows での USB 接続失敗](#3-windows-での-usb-接続失敗) |
| USB を接続した後にインターネット接続が失われる | [4. USB 接続後にホスト PC のインターネットが切れる](#4-usb-接続後にホスト-pc-のインターネットが切れる) |
| デバイスを完全にリセットしたい | [5. 工場出荷時リセット](#5-工場出荷時リセット) |

---

## 1. Wi-Fi エラーとプレビュー不可

**症状**：WebUI が繰り返し Wi-Fi 接続エラーを表示し、ライブプレビューを表示できません。

**解決方法**：

- デバイスに適切に電源が供給されているか確認します。不安定な電源が最も一般的な原因です。
- Type-C インターフェースから給電している場合は、アダプタが **PD プロトコル**をサポートしていることを確認してください。
- 安定した動作のために、工場出荷時に付属している DC 電源ケーブル（12 V、3 A）を使用してください。
- 電源を改善した後、**Device Info → Network Settings** で Wi-Fi 接続を確認し、プレビューを再度開く前に緑色 LED が点灯し続けていることを確認します。

## 2. FP16 モデルのアップロードで WebUI がフリーズする

**症状**：ファームウェア **V1.1.1 以前**では、FP16 精度のモデルをアップロードするとメインシステムプロセスがフリーズし、WebUI が応答しなくなります。

:::note Terminology
この問題は **FP16**（16 ビット浮動小数点）モデル量子化に該当します。古いドキュメントでは "FB16" という略語が使われている場合がありますが、どちらも同じ量子化形式を指します。
:::

**解決方法** — 利用可能な方法を使用してください：

### オプション A: 工場出荷時リセット

デバイス側面のボタンを**15 秒間長押し**して工場出荷時設定を復元します。デバイスはクリーンな構成で再起動し、問題のモデルは削除されます。完全なリセット手順については、[ファームウェアの更新と復旧](/ja/recamera_pro_firmware_update/)を参照してください。

### オプション B: SSH で設定ファイルを編集する

1. USB でデバイスに接続し、SSH でログインします。
2. `/userdata/config/rkipc.ini` を開いて編集します。
3. `[rc_model.0]` セクションで、`model` フィールドを `yolox_s.rknn` に変更します。
4. 保存してデバイスを再起動します。

{/* TODO(verify): confirm whether this freeze is fixed on firmware versions after V1.1.1, and state the first firmware version where FP16 models can be uploaded without freezing. */}

## 3. Windows での USB 接続失敗

**症状**：Type-C ケーブルを接続した後、Windows 上のブラウザで `http://192.168.42.1` が開けません。

**解決方法**：Windows の仮想ネットワークアダプタが自動的に IP アドレスを取得できていない可能性が高いです。

1. **コントロール パネル → ネットワークとインターネット → ネットワークと共有センター → アダプターの設定の変更** を開きます。
2. `Remote NDIS based Internet Sharing Device` などの名前、または reCamera に関連する名前のアダプタを探します（ケーブルを抜き差しして、消えたり再表示されたりするアダプタを確認します — それが reCamera Pro のインターフェースです）。
3. 右クリックして **プロパティ** を選択します。
4. **インターネット プロトコル バージョン 4 (TCP/IPv4)** をダブルクリックします。
5. **IP アドレスを自動的に取得する** と **DNS サーバーのアドレスを自動的に取得する** を選択します。
6. OK をクリックし、再度 `http://192.168.42.1` を試します。

<video
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4"
  controls
  width="100%"
  preload="metadata">
  お使いのブラウザはこの動画の再生をサポートしていません。
</video>

{/* TODO(verify): add equivalent steps for macOS and Linux if the USB connection exposes a network interface on those platforms too. */}

## 4. USB 接続後にホスト PC のインターネットが切れる

**症状**：reCamera を USB でコンピュータに接続した後、ホストコンピュータがインターネットに接続できなくなります。

これは、OS のルーティングテーブルで USB ネットワークアダプタが優先されるために発生します。対処方法については、[ネットワーク接続トラブルシューティング図](https://wiki.seeedstudio.com/ja/recamera_network_connection/#コンピュータのネットワークエラー)を参照してください。

## 5. 工場出荷時リセット

上記のいずれにも該当せず、デバイスの動作がおかしい場合は、工場出荷時設定を復元してください：

- **ハードウェア**：側面のボタンを**約 15 秒間**押し続け、プロンプト音が聞こえるまで待ちます。その後、緑色 LED が点灯し続けるまで待ちます。
- **WebUI**：**Device Info → System Settings → Factory Reset**。

保持される内容と消去される内容については、[ファームウェアの更新と復旧](/ja/recamera_pro_firmware_update/)を参照してください。

## その他の問題

- RTSP、録画、ストレージの問題 → [イベント録画の設定](/ja/recamera_pro_record_settings/) および [録画とストレージの場所](/ja/recamera_pro_storage/)。
- モデル変換や推論の問題 → [AI 推論の設定](/ja/recamera_pro_ai_inference/)。カスタムモデルについては [モデルデプロイ経路の選択](/ja/recamera_pro_model_path/) を参照してください。
- API 呼び出しの失敗 → [API トラブルシューティング](/ja/recamera_pro_api_faq/)（B4 / T3 プレースホルダ）。

{/* TODO(verify): cross-reference RTSP/recording/storage and API troubleshooting issues from real support tickets once T3 (api_troubleshooting.md) lands. */}

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
