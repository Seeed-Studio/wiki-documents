---
description: reCamera Pro を Wi-Fi ネットワークに接続し、その LAN IP アドレスを確認して、USB 直接接続から完全なワイヤレス管理へ切り替えます。
title: Wi-Fi 経由でデバイスにアクセスする
keywords:
  - reCamera
  - reCamera Pro
  - Wi-Fi
  - wireless access
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_wifi_access
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_wifi_access/
---

# Wi-Fi 経由でデバイスにアクセスする

出荷時の状態では、USB Type-C ケーブルを使い `192.168.42.1` で reCamera Pro にアクセスします。デバイスからインターネットへ接続したり、ローカルネットワーク上のどこからでも管理できるようにするには、Wi-Fi に接続して LAN IP アドレスに切り替えます。

## 1. Wi-Fi ネットワークに接続する

1. Web UI にログインします（まだの場合は[クイックスタート](/ja/recamera_pro_getting_started/)を参照してください）。
2. 左側のナビゲーションバーで **Device Info** をクリックします。
3. **Network Settings** を開きます。reCamera Pro には Wi-Fi モジュールが内蔵されています。Wi-Fi がオフの場合は有効にすると、システムが周辺のネットワークをスキャンします。
4. 使用する Wi-Fi の SSID を選択し、パスワードを入力して接続します。

![ワイヤレスネットワーク設定手順の図](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_wifi_setting.png)

## 2. デバイスの LAN IP アドレスを確認する

接続後、接続済みネットワークの情報アイコン（右側の感嘆符）をクリックすると、割り当てられた IP アドレス、MAC アドレスなどの詳細なネットワーク情報を確認できます。

![Wi-Fi 詳細表示の図](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

![Device Info 内のネットワーク詳細](https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_vq4u1biblp.png)

## 3. ワイヤレスアクセスへ切り替えて確認する

1. **同じローカルネットワーク**に接続されているコンピュータでブラウザを開き、先ほど確認した LAN IP にアクセスします（例：`http://192.168.4.200`）。
2. 管理者パスワードでログインします。USB 接続時と同じ Web UI にアクセスできるはずです。
3. **Real-time Preview** を開き、**Start** をクリックして、Wi-Fi 経由でも映像ストリームが確認できることを確かめます。

:::tip 完全ワイヤレスで運用するには USB ケーブルを抜く
Web UI が LAN IP で問題なく動作することを確認したら、**USB Type-C ケーブルを安全に取り外せます**。USB 接続はデータのみを伝送し、デバイス自体は独立した電源で動作し続けます。
:::

:::note 電源は引き続き必要です
USB ケーブルを外しても電源が切れるわけではありません。reCamera Pro が動作を続けるには、12 V DC 電源（またはそれに相当する適切な電源）に接続された状態を維持する必要があります。

{/* TODO(verify): confirm supported power options when the USB cable is unplugged (DC barrel only, or also PD over Type-C) and state them explicitly here. */}
:::

## 注意事項

- コンピュータとデバイスが異なるネットワーク上にある場合（例：クライアント分離された 2.4 GHz と 5 GHz の別 SSID、またはゲストネットワークなど）、LAN IP に到達できないことがあります。両方を同じネットワークに接続してください。
- デバイスが再接続すると、Wi-Fi アドレスが変わる場合があります。恒久的な設置では、ルーター側でデバイスの MAC アドレスに固定 IP アドレスを予約し、[Network, time and access control](/ja/recamera_pro_device_info/) で残りのネットワーク設定を完了してください。
- この手順で接続に失敗する場合は、[症状別トラブルシュート](/ja/recamera_pro_faqs/)を参照してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
