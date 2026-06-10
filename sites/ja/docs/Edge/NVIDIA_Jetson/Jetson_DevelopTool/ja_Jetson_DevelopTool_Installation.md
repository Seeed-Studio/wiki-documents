---
description: Ubuntu または Windows 上で、pip またはソースコードから Seeed Jetson DevelopTool をインストールして起動する方法。
title: インストール
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - インストール
  - pip
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_installation
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/ja/jetson_developtool_installation/
---

## 必要条件

| 項目 | 要件 |
|------|-------------|
| ホスト OS | Ubuntu 20.04 / 22.04 / 24.04、または Windows 10/11 |
| Python | 3.8 以上 |

## オプション 1 — pip でインストール（推奨）

```bash
pip install seeed-jetson-developer
```

その後、GUI を起動します：

```bash
seeed-jetson-developer
```

## オプション 2 — ソースコードからインストール

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
pip install .
```

インストール後に起動します：

```bash
seeed-jetson-developer
```

## オプション 3 — 直接実行（インストール不要）

インストールせずに実行したい場合：

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
pip install PyQt5 paramiko requests
python3 run_v2.py
```

## インストールの確認

起動後、8 つすべてのモジュールタブが表示されたメインウィンドウが表示されるはずです。ウィンドウが開かない場合は、PyQt5 がインストールされているか確認してください：

```bash
pip show PyQt5
```

:::tip
Ubuntu で `cannot connect to X server` のようなディスプレイエラーが発生した場合は、X フォワーディングなしの SSH 端末ではなく、グラフィカルなデスクトップセッションで実行していることを確認してください。
:::

## 次のステップ

- [デバイスを接続する →](/ja/jetson_developtool_connect_device)
- [ファームウェアを書き込む →](/ja/jetson_developtool_flash_firmware)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
