---
description: Reachy Mini Lite のセットアップガイドです。組み立て手順、USB 接続、Windows / macOS / Linux 向けデスクトップアプリのダウンロードについて説明します。
title: Reachy Mini Lite セットアップガイド
slug: /reachymini_platforms_reachy_mini_lite_get_started
keywords:
  - lite
  - セットアップ
  - 組み立て
  - usb
  - デスクトップアプリ
  - 接続
  - 教育
  - 開発
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/ja/reachymini_platforms_reachy_mini_lite_get_started/
---

# Reachy Mini Lite - セットアップガイド

**Reachy Mini Lite** は、教育および開発向けに設計されたテザー接続版です。インテリジェンスを動作させるためにはコンピュータが必要です。

## 1. 🔧 組み立て

Reachy Mini はキットとして提供されます。組み立てはあなたの旅の最初のステップです！

* **必要時間：** 2〜3 時間。
* **工具：** 必要なものはすべて箱に含まれています。
* **手順：** マニュアルと併せてビデオガイドに従うことを強くお勧めします。

:::tip プロのヒント
紙の冊子（下記参照）と一緒に、**オンラインガイド** または **組み立てビデオ** を開いておくことを強くお勧めします。オンライン版には各ステップごとの短い動画クリップが含まれており、組み立て内容の理解がはるかに容易になります。
:::

| **📖 インタラクティブデジタルガイド** | **📺 組み立てフルビデオ** |
| :---: | :---: |
| [![Assembly Guide](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/digital_assembly_guide_preview_mini_lite.jpg)](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_LITE_Assembly_Guide)<br/>[**ステップバイステップガイドを開く**](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_LITE_Assembly_Guide)<br/>*(短い動画ループを含みます)* | [![Watch on YouTube](https://img.youtube.com/vi/PC5Yx950nMY/maxresdefault.jpg)](https://www.youtube.com/watch?v=PC5Yx950nMY)<br/>[**YouTube で視聴**](https://www.youtube.com/watch?v=PC5Yx950nMY)<br/>*(各ステップごとのセクション付きビデオ)* |

## 2. 💻 接続

1.  **電源を入れる：** 付属の電源アダプタを使って、ロボットをコンセントに接続します。
2.  **データ接続：** ロボットからコンピュータへ USB ケーブルを接続します。

## 3. 📥 Reachy Mini Control をダウンロード

:::warning
デスクトップアプリの互換性

**⚠️ Reachy Mini Control の互換性：**
- **ARM64 システム（DGX、Jetson、Surface など）および特殊な Linux ディストリビューション：** デスクトップアプリが動作しない場合があります。

**代替手段：** デスクトップアプリがあなたの環境で動作しない場合は、[Python SDK](/ja/reachymini_sdk_readme) を直接インストールして使用できます。これはロボットを制御するための、完全にサポートされた正当な方法です！
:::

**Reachy Mini Control** デスクトップアプリは、ロボットの司令塔となるアプリです。ビジュアライゼーションツール、アプリランチャー、システム設定が含まれており、コマンドラインは不要です。

<div align="center">
  <a href="https://hf.co/reachy-mini/#/download">
    <img src="https://huggingface.co/spaces/pollen-robotics/Reachy_Mini/resolve/main/public/assets/desktop-app-screenshot--white.png" width="600" alt="Reachy Mini Control App" />
  </a>
</div>


**アプリを入手：**

* **👉 [公式サイトからダウンロード](https://hf.co/reachy-mini/#/download)**（Windows、macOS、Linux に推奨）
* *代替手段：* [GitHub Releases](https://github.com/pollen-robotics/reachy-mini-desktop-app/releases)（特定バージョン向け）

:::info 自動アップデート
インストール後は、アプリを開くだけでかまいません。アプリとロボット内部ソフトウェアの両方について、最新のアップデートを自動的に確認し、インストールします。
:::

## 4. 🕹️ 次のステップ：ロボットを使う

すべての接続とインストールが完了したら、準備は万端です！

👉 **[使用ガイドへ進む](/ja/reachymini_platforms_reachy_mini_lite_usage)** と、次の内容を学ぶことができます：
* **Desktop App** の機能を使う。
* **Community Apps**（会話、ゲームなど）をインストールして実行する。
* **Python** を使って Reachy をプログラムする。

## ❓ トラブルシューティング

問題が発生しましたか？ 👉 **[トラブルシューティング & FAQ ガイドを確認する](/ja/reachymini_troubleshooting)**