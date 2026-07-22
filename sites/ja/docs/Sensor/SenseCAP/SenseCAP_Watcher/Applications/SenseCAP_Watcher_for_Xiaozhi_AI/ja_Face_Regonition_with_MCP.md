---
description: 内部 MCP ツールを使用して顔認識をデプロイするためのガイド
title: MCP を使った顔認識
sidebar_position: 7
keywords:
  - AI
  - SenseCAP
  - Watcher
  - Agent
  - Face
  - Model
  - Context
  - protocol
  - recognition
  - MCP
  - reComputer
image: https://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /face_regonition_with_mcp
last_update:
  date: 04/07/2026
  author: Spencer
translation:
  skip: [zh-CN]
createdAt: '2025-11-24'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/ja/face_regonition_with_mcp/
---

# MCP による顔認識の拡張

## 概要

このガイドでは、**SenseCAP Watcher (Xiaozhi)** と **reComputer Raspberry Pi システム** を組み合わせて、顔認識ワークフローをデプロイする方法を説明します。

カスタマイズされたファームウェアを **SenseCAP Watcher** に書き込むことで、Xiaozhi AI は Hailo-8 アクセラレーションを備えた **reComputer** による顔認識機能を獲得します。セットアップが完了すると、「この人が誰か確認して」などと Watcher に話しかけるだけで、AI が自動的に写真を撮影し、reComputer 上のローカルデータベースと照合して顔を識別し、その人の名前と信頼度を返します。

## ハードウェアの準備

<table align="center">
  <tr>
    <th>Xiaozhi 用 SenseCAP Watcher</th>
    <th>reComputer AI R2130-12</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr1.png" style={{width:350, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank" rel="noopener noreferrer">
      <strong><span style={{color: '#FFFFFF', fontSize: '16px'}}> 今すぐ入手 🖱️</span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
      <strong><span style={{color: '#FFFFFF', fontSize: '16px'}}> 今すぐ入手 🖱️</span></strong>
      </a>
    </div></td>
  </tr>
</table>

## 前提条件

- 次の手順に従って reComputer Raspberry Pi システムをインストールします: [reComputer R2000 シリーズ入門ガイド](https://wiki.seeedstudio.com/ja/r2000_series_getting_start/#flash-os)
- ソースコードリポジトリ:
  - [Xiaozhi 用顔認識ファームウェア](https://github.com/suharvest/xiaozhi-esp32/tree/face_rec_api)
  - [顔認識 API](https://github.com/suharvest/face_rec_api)

## デプロイ手順

### 手順 1. reComputer の IP アドレスを確認

reComputer をネットワーク（例: ルーター）に接続し、IP アドレスを取得します。このガイドでは、例として `192.168.24.10` を使用します。

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr2.png" style={{width:400, height:'auto'}}/></div>

### 手順 2. Watcher にファームウェアを書き込む

1. PC と Watcher を、底面ポートの Type-C ケーブルで接続します。

2. ESP-IDF 5.5 CMD（バージョン 5.5.1）を開き、ファームウェアリポジトリをクローンします:

```bash
git clone -b face_rec_api --single-branch https://github.com/suharvest/xiaozhi-esp32.git
cd xiaozhi-esp32
```

3. `main/boards/sensecap-watcher/sscma_camera.cc` を開き、`face_rec_url` を検索して、IP を reComputer の IP に変更します:

```cpp
// Before (default):
std::string face_rec_url = "http://192.168.10.131:8001/recognize";

// After (your reComputer IP):
std::string face_rec_url = "http://<reComputer_IP>:8001/recognize";
```

4. コンパイルして書き込みます:

```bash
idf.py set-target esp32s3
idf.py menuconfig    # Select SenseCAP Watcher board
idf.py build flash
```

### 手順 3. reComputer 環境のセットアップ

1. SSH で接続します:

```bash
ssh <username>@<reComputer_IP>
# Example: ssh recomputer@192.168.24.10
```

:::note
reComputer への接続には、VS Code の **Remote - SSH** 拡張機能を使用することを推奨します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr10.png" style={{width:400, height:'auto'}}/></div>
:::

2. システムソフトウェアを更新します:

```bash
sudo apt update && sudo apt full-upgrade
sudo rpi-eeprom-update
```

3. Hailo ランタイムとドライバをインストールします:

```bash
sudo apt install hailo-all
sudo reboot
```

4. 再起動後、再度 SSH で接続し、HailoRT を確認します:

```bash
hailortcli scan
hailortcli fw-control identify
```

次のような出力が表示されれば、ドライバは正常にインストールされています:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr3.png" style={{width:700, height:'auto'}}/></div>

5. uv をインストールします:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env
```

### 手順 4. API をクローンして依存関係をインストール

```bash
git clone https://github.com/suharvest/face_rec_api.git
cd face_rec_api/
uv sync
```

### 手順 5. 写真を追加してサービスを起動

1. 写真を `photos/` フォルダに配置します。各ファイルは人物名で命名してください（拡張子を除いたファイル名がその人の名前として使用されます）:

```
photos/
├── john_doe.jpg
├── jane_smith.png
└── alice_wang.jpg
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr5.png" style={{width:400, height:'auto'}}/></div>

2. 埋め込みベクトルを生成します:

```bash
uv run scripts/batch_process.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr6.png" style={{width:600, height:'auto'}}/></div>

3. サービスを起動します:

```bash
chmod +x start_standalone.sh
./start_standalone.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr7.png" style={{width:600, height:'auto'}}/></div>

サービスは現在ポート **8001** 上で動作しています。Watcher は reComputer と通信し、データベース内に顔が存在するかを確認できます。サービスは `Ctrl + C` で停止できます。

次のようなプロンプトを追加できます: 「人が検出されたら、顔認識ツールを使って名前と信頼度を確認し、信頼度が 0.40 より大きい場合は名前で挨拶し、それ以外の場合は一般的な挨拶をする。」

### 手順 6. 顔データベースを更新

新しい写真を `photos/` フォルダに追加し、埋め込みベクトルを再生成してサービスを再起動します:

```bash
uv run scripts/batch_process.py
./start_standalone.sh
```

:::tip
サービス実行中でも、reload エンドポイントを呼び出すことでデータベースを更新できます:
```bash
curl -X POST http://localhost:8001/reload
```
:::

### 手順 7. 顔データベースをクリア

1. `photos/` フォルダ内のすべてのファイルを削除します。
2. `data/` フォルダ内の `embeddings.json` ファイルを削除します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr8.png" style={{width:400, height:'auto'}}/></div>

クリア後にサービスを再起動すると、クリーンなログが表示されます:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr9.png" style={{width:600, height:'auto'}}/></div>

## 実行結果

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr11.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr12.png" style={{width:400, height:'auto'}}/></div>

## FAQ

**Q: Xiaozhi AI に顔認識 API を呼び出させるにはどうすればよいですか?**

**A:** 「自分が顔認識システムに登録されているか確認して」などと Watcher に質問するだけです。AI が自動的に顔認識ツールを呼び出します。

**Q: サービスが接続できない、または顔を認識できません。何を確認すればよいですか?**

**A:** 次の点を確認してください:
- ファームウェア内の reComputer の IP アドレスが実際の IP と一致している。
- 顔認識サービスが実行中である（`curl http://<reComputer_IP>:8001/health`）。
- ポート 8001 をブロックしているファイアウォールルールがない。

**Q: `hailo-all` をインストールした後も Hailo が検出されません。どうすればよいですか?**

**A:** 完全に再起動した後で `hailortcli scan` を再実行してください。まだ検出されない場合は、`lspci | grep Hailo` および `dmesg | grep -i hailo` で PCIe 接続を確認してください。

**Q: 他のデバイスに顔認識システムをデプロイできますか?**

**A:** はい、デバイスが Hailo-8 ハードウェアを備えた Linux ベースのシステムを実行していれば可能です。本ガイドは reComputer シリーズで検証されているため、このプラットフォームを推奨します。

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
