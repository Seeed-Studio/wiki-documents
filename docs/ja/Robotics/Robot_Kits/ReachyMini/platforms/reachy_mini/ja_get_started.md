---
description: Raspberry Pi 4 を搭載した Reachy Mini Wireless のセットアップガイドです。組み立て、初回起動、Wi-Fi 設定、システム更新、SSH アクセスについて説明します。
title: Reachy Mini Wireless セットアップガイド
slug: /ja/reachymini_platforms_reachy_mini_get_started
keywords:
- wireless
- setup
- assembly
- wi-fi
- first boot
- configuration
- ssh
- update
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Reachy Mini (Wireless) - セットアップガイド

**Reachy Mini (Wireless)** は Raspberry Pi 4 を搭載した自律型バージョンです。内蔵バッテリーと Wi-Fi 接続により、単体で動作します。

## 1. 🔧 組み立て

Reachy Mini はキットとして提供されます。組み立ては、あなたの旅の最初のステップです！

:::info 組み立ての詳細
* **所要時間：** 2〜3 時間
* **工具：** 必要なものはすべて同梱されています。
* **手順：** マニュアルとあわせてビデオガイドに従うことを強くおすすめします。
:::

:::tip プロのヒント
以下のように、紙の冊子とあわせて **Online Guide** または **assembly video** を開いておくことを強くおすすめします。オンライン版には各ステップごとに短い動画クリップが含まれており、組み立て内容の理解がはるかに容易になります。
:::

| **📖 インタラクティブデジタルガイド** | **📺 組み立てフル動画** |
| :---: | :---: |
| [![Assembly Guide](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/digital_assembly_guide_preview_mini.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>[**ステップバイステップガイドを開く**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>*(短い動画ループ付き)* | [![Watch on YouTube](https://img.youtube.com/vi/WeKKdnuXca4/maxresdefault.jpg)](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>[**YouTube で視聴**](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>*(各ステップごとのセクション付き動画)* |

## 2. 🛜 初回起動と Wi-Fi 設定

組み立てが完了したら、ロボットを Wi-Fi ネットワークに接続する必要があります。

:::tip ステップ 1：電源を入れる
Reachy Mini の電源を入れます。
:::

:::info ステップ 2：Reachy に接続
数秒待つと、ロボットが **`reachy-mini-ap`** という名前の Wi-Fi ネットワークを作成します。
* **Password:** `reachy-mini`
* *または QR コードをスキャンします：*

![QR-Code reachy-mini-ap](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/qrcode-ap.png)
:::

:::tip ステップ 3：Wi-Fi を設定
* ブラウザを開き、**[http://reachy-mini.local:8000/settings](http://reachy-mini.local:8000/settings)** にアクセスします。
* ローカル Wi-Fi の認証情報（SSID と Password）を入力し、**"Connect"** をクリックします。
* Reachy Mini が Wi-Fi ネットワークに接続されるまで数秒待ちます。接続されるとアクセスポイントは消えます。接続に失敗した場合、Reachy Mini はアクセスポイントを再起動するので、再度お試しください。
:::

## 3. 🔄 システムを更新する

:::warning 推奨
先に進む前に、ロボットを最新バージョンに更新することを強くおすすめします。
:::

1.  **Settings を開く：** **[http://reachy-mini.local:8000/settings](http://reachy-mini.local:8000/settings)** にアクセスします。
2.  **アップデートを確認：** **"Check for updates"** ボタンをクリックします。
3.  **インストール：** 新しいバージョンが利用可能な場合は、画面の指示に従ってインストールします。

## 4. 🕹️ 次のステップ：ロボットを使う

ロボットがオンラインになり最新状態になったら、操作を開始できます。

👉 **[Usage Guide へ進む](usage.md)** と、次の内容を学べます：
* **Dashboard** にアクセスする。
* Conversation や Games などの **Apps** をインストールして実行する。
* **Python** を使って Reachy をプログラムする。

## 5. 💻 上級編：内部 Raspberry Pi に SSH で直接接続する

:::info SSH 認証情報
Reachy Mini の内部 Raspberry Pi に SSH で接続する必要がある場合、認証情報は次のとおりです：
:::

```bash
username: pollen
password: root
```

SSH で接続したら、次のコマンドで Raspberry Pi とロボットセットアップの整合性を確認できます：

```bash
reachyminios_check
```

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[Troubleshooting & FAQ ガイドを確認してください](../../troubleshooting.md)**

## エキスパートモード

:::warning エキスパート向けガイド
Raspberry Pi をゼロから再インストールする必要がある場合や、カスタムイメージを作成する必要がある場合は、以下のエキスパート向けガイドに従ってください。
:::

<!-- * **[Reflash the ISO](../reflash_the_rpi_ISO.md)** -->
<!-- * **[Install Daemon from a Specific Branch](../install_daemon_from_branch.md)** -->
