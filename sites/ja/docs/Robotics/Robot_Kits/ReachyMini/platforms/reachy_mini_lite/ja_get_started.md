---
description: Reachy Mini Lite のセットアップガイド。組み立て手順、USB 接続、Windows・macOS・Linux 向けデスクトップアプリのダウンロードについて説明します。
title: Reachy Mini Lite セットアップガイド
slug: /reachymini_platforms_reachy_mini_lite_get_started
keywords:
  - lite
  - setup
  - assembly
  - usb
  - desktop app
  - connection
  - education
  - development
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reachymini_platforms_reachy_mini_lite_get_started/
---

# Reachy Mini Lite - セットアップガイド

**Reachy Mini Lite** は、教育および開発向けに設計されたテザー接続型バージョンです。インテリジェンスを動作させるためにはコンピュータが必要です。

## 1. 🔧 組み立て

Reachy Mini はキットとして提供されます。組み立てはあなたの旅の最初のステップです！

:::info 組み立ての詳細
* **所要時間：** 2〜3 時間。
* **工具：** 必要なものはすべて箱に含まれています。
* **手順：** マニュアルとあわせてビデオガイドに従うことを強くおすすめします。
:::

:::tip プロのヒント
下記のように、紙の冊子とあわせて **Online Guide** または **assembly video** を開きながら作業することを強くおすすめします。オンライン版には各ステップごとに短い動画クリップが含まれており、組み立て内容をより理解しやすくなります。
:::

| **📖 インタラクティブデジタルガイド** | **📺 組み立てフル動画** |
| :---: | :---: |
| [![Assembly Guide](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/digital_assembly_guide_preview_mini_lite.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_LITE_Assembly_Guide)<br/>[**Open Step-by-Step Guide**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_LITE_Assembly_Guide)<br/>*(各ステップの短い動画ループ付き)* | [![Watch on YouTube](https://img.youtube.com/vi/PC5Yx950nMY/maxresdefault.jpg)](https://www.youtube.com/watch?v=PC5Yx950nMY)<br/>[**Watch on YouTube**](https://www.youtube.com/watch?v=PC5Yx950nMY)<br/>*(各ステップごとのセクション付き動画)* |

## 2. 💻 接続

:::tip ステップ 1：電源を入れる
付属の電源アダプタを使って、ロボットをコンセントに接続します。
:::

:::tip ステップ 2：データ接続
ロボットからコンピュータへ USB ケーブルを接続します。
:::

## 3. 📥 Reachy Mini Control をダウンロード

:::warning デスクトップアプリの互換性
**⚠️ 重要な注意事項：**
* **Windows ユーザー：** Windows 向け Reachy Mini Control アプリは現在最終調整中で、数日以内に利用可能になります。
* **ARM64 システム（DGX、Jetson など）および特殊な Linux ディストリビューション：** デスクトップアプリが動作しない場合があります。

**代替手段：** デスクトップアプリが環境で動作しない場合は、[Python SDK](/ja/reachymini_sdk_readme) を直接インストールして使用できます。これはロボットを制御するための、完全にサポートされた正当な方法です！
:::

**Reachy Mini Control** デスクトップアプリは、ロボットのコマンドセンターです。ダッシュボード、可視化ツール、アプリランチャーが含まれており、コマンドラインは不要です。

<div align="center">
  <a href="http://hf.co/reachy-mini/#/download">
    <img src="https://huggingface.co/spaces/pollen-robotics/Reachy_Mini/resolve/main/public/assets/desktop-app-screenshot--white.png" width="600" alt="Reachy Mini Control App" />
  </a>
</div>

:::tip アプリを入手
* **👉 [Download from Official Website](http://hf.co/reachy-mini/#/download)**（Windows、macOS、Linux に推奨）
* *代替手段：* [GitHub Releases](https://github.com/pollen-robotics/reachy-mini-desktop-app/releases)（特定バージョン向け）
:::

:::info 自動アップデート
インストール後は、アプリを開くだけでかまいません。アプリとロボット内部ソフトウェアの両方について、最新のアップデートを自動的に確認・インストールします。
:::

## 4. 🕹️ 次のステップ：ロボットを使う

すべての接続とインストールが完了したら、準備は万端です！

👉 **[使用ガイドへ進む](/ja/reachymini_platforms_reachy_mini_lite_usage)** と、次の内容を学ぶことができます：
* **Desktop App** の機能を使う。
* **Community Apps**（Conversation、Games など）をインストールして実行する。
* **Python** を使って Reachy をプログラムする。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認](/ja/reachymini_troubleshooting)**
