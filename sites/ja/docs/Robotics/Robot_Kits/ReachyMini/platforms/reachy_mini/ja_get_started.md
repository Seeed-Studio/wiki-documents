---
description: 組み立て手順、初回起動、Wi‑Fi 設定、システム更新、および SSH アクセスを含む Reachy Mini Wireless のセットアップガイドです。
title: Reachy Mini Wireless セットアップガイド
slug: /reachymini_platforms_reachy_mini_get_started
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
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_platforms_reachy_mini_get_started/
---

# Reachy Mini（Wireless） - セットアップガイド

**Reachy Mini（Wireless）** は Raspberry Pi Compute Module 4（CM4）を搭載した自律型バージョンです。内蔵バッテリーと Wi‑Fi 接続により、単体で動作します。

## 1. 🔧 組み立て

Reachy Mini はキットとして提供されます。組み立ては、あなたの旅の最初のステップです！

* **所要時間：** 2〜3 時間
* **必要な工具：** すべて同梱されています。
* **手順：** マニュアルとあわせてビデオガイドに従うことを強くおすすめします。

:::tip プロ向けヒント
紙の冊子とあわせて、**オンラインガイド** または **組み立てビデオ** を開いておくことを強くおすすめします（下記参照）。オンライン版には各ステップごとに短い動画クリップが含まれており、組み立て内容をより理解しやすくなります。
:::

| **📖 インタラクティブデジタルガイド** | **📺 組み立てフルビデオ** |
| :---: | :---: |
| [![Assembly Guide](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/digital_assembly_guide_preview_mini.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>[**ステップバイステップガイドを開く**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)<br/>*(短い動画ループ付き)* | [![Watch on YouTube](https://img.youtube.com/vi/WeKKdnuXca4/maxresdefault.jpg)](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>[**YouTube で視聴**](https://www.youtube.com/watch?v=WeKKdnuXca4)<br/>*(各ステップごとのセクション付きビデオ)* |


## 2. 🛜 初回起動と Wi‑Fi 設定

組み立てが完了したら、ロボットを Wi‑Fi ネットワークに接続する必要があります。

1.  **電源オン：** Reachy Mini の電源を入れます。
2. **Reachy Mini Control をダウンロード：** まだの場合は、[公式サイト](https://hf.co/reachy-mini/#/download)から **Reachy Mini Control** アプリをダウンロードしてインストールします。
3. **アプリを起動：** **Reachy Mini Control** を開き、下部のリンク **"First time connecting..."** をクリックします。
![First time connecting](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/first-setup-wifi-1.png)
4. **手順に従う：** アプリが接続プロセスを案内します。ロボットの Wi‑Fi アクセスポイントに接続し、その後 Wi‑Fi を設定するよう求められます。
![Configuring your WiFi](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/first-setup-wifi-2.png)

## 3. 🔄 システムの更新

先へ進む前に、ロボットを最新バージョンに更新することを強くおすすめします。

1. **Reachy Mini Control** を使ってロボットに接続します。
2. 接続されたら、**"⚙️"** 設定タブをクリックします。
![Settings Tab](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-settings.png)
3. **System Updates** セクションに移動します。
![System Update Section](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-update.png)
4.  **インストール：** 新しいバージョンが利用可能な場合は、画面の指示に従ってインストールします。


## 4. 🕹️ 次のステップ：ロボットを使う

ロボットがオンラインになり最新状態になったら、操作を開始できます！

👉 **[使用ガイドへ進む](/ja/reachymini_platforms_reachy_mini_usage)** と、次の内容を学べます：
* **Reachy Mini Control** の使い方
* 会話やゲームなどの **アプリ** のインストールと実行
* **Python** を使った Reachy のプログラミング

## 5. 💻 上級者向け：内部 Raspberry Pi に SSH で直接接続する

Reachy Mini の内部 Raspberry Pi に SSH で接続する必要がある場合、認証情報は次のとおりです：

```
username: pollen
password: root
```

SSH で接続したら、次のコマンドで Raspberry Pi とロボットセットアップの整合性を確認できます：

```bash
reachyminios_check
```

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認](/ja/reachymini_troubleshooting)**

## エキスパートモード

Raspberry Pi をゼロから再インストールする必要がある場合や、カスタムイメージを作成したい場合は、エキスパート向けガイドに従ってください。

**[ISO を再フラッシュする](/ja/reachymini_platforms_reachy_mini_reflash_the_rpi_iso)**

**[特定ブランチから Daemon をインストール](/ja/reachymini_platforms_reachy_mini_install_daemon_from_branch)**

**[開発ワークフロー](/ja/reachymini_platforms_reachy_mini_development_workflow)** - Wireless Reachy Mini 上でコードを開発・テストするためのベストプラクティス