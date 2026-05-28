---
description: Seeed Jetson DevelopTool のよくある質問とトラブルシューティングのヒントです。フラッシュ、SSH、VNC、ネットワーク共有などをカバーします。
title: FAQ
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - FAQ
  - troubleshooting
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_faq
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/ja/jetson_developtool_faq/
---

## フラッシュ

**Q: Recovery モードに入った後に "Detect Device" に何も表示されません。**

- USB-C ケーブルがデータ転送に対応していることを確認してください（充電専用ケーブルは使用しないでください）。
- Linux では、`lsusb | grep NVIDIA` で確認します。デバイスは `NVIDIA Corp. APX` として表示されるはずです。
- Windows では、WSL2 経由の USB パススルーには `usbipd` が必要です。`usbipd list` を実行してデバイスが表示されるか確認し、その後 `usbipd attach --wsl --busid <ID>` を実行してパススルーします。
- 別の USB ポートを試してください。可能であればマザーボード直結の USB 3.0 ポートを使用し、ハブは避けてください。

**Q: フラッシュが途中でエラーになって失敗します。**

- PC と Jetson 間の Ethernet ケーブルが接続されていることを確認してください（一部の BSP フラッシュスクリプトは、USB 経由でフラッシュする場合でもこれを必要とします）。
- 少なくとも 20 GB の空きディスク容量があることを確認してください。
- 再度 Recovery モードに入り直してリトライしてください。1 回の失敗でデバイスがブリックされることはありません。

**Q: フラッシュに 15 分以上かかります。**

- これは一般的ではありません。USB ケーブルが USB 3.0 ポートに接続されているか確認してください。USB 2.0 では大幅に遅くなります。

---

## SSH / 接続

**Q: SSH で Jetson に接続できません。**

- Jetson と PC が同じネットワーク上にあるか、または [PC Network Sharing](/ja/jetson_developtool_remote_development) が有効になっていることを確認してください。
- Jetson 上で SSH サービスが動作していることを確認します：`sudo systemctl status ssh`
- IP アドレスを確認します — Jetson Init のシリアルウィザードを使用するか、ルーターの DHCP テーブルを確認してください。

**Q: SSH には接続できるが、すぐに切断されます。**

- Jetson のメモリが不足している可能性があります。`free -h` で確認し、[Skills](/ja/jetson_developtool_skills) モジュールからスワップを有効にすることを検討してください。

---

## VNC / リモートデスクトップ

**Q: 接続後に VNC 画面が真っ黒です。**

- Jetson のディスプレイサーバーが動作していない可能性があります。次を試してください：`sudo systemctl restart gdm3`
- 物理ディスプレイが接続されていない場合、`/etc/X11/xorg.conf` で仮想ディスプレイを設定する必要があるかもしれません。

**Q: ブラウザの noVNC に "Disconnected" と表示されます。**

- Jetson 上で VNC サーバーが動作していることを確認します：`ps aux | grep vncserver`
- ポート 5900（または設定した VNC ポート）がファイアウォールによってブロックされていないか確認してください。

---

## App Market

**Q: アプリのインストールで "Docker not found" と表示されて失敗します。**

- まず [Skills](/ja/jetson_developtool_skills) モジュールを使って Docker をインストールするか、`curl -fsSL https://get.docker.com | sh` を実行してください。

**Q: Docker イメージの pull に失敗します。**

- これは通常ネットワークの問題です。Jetson がインターネットにアクセスできることを確認してください。必要に応じて [PC Network Sharing](/ja/jetson_developtool_remote_development) を使用します。
- プロキシ環境下にいる場合は、PC Network Sharing タブで **Auto Proxy Forward** を有効にしてください。

---

## Skills

**Q: Skill がパーミッションエラーで失敗します。**

- ほとんどの Skill には `sudo` 権限が必要です。SSH ユーザーにパスワードなし sudo が設定されていることを確認するか、Skill ログで求められたときにパスワードを入力してください。

**Q: 自作の OpenClaw Skill が表示されません。**

- Skill ファイルを `skills/openclaw/` に配置した後、DevelopTool を再起動してください。このツールは起動時にカスタム Skill を読み込みます。

---

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
