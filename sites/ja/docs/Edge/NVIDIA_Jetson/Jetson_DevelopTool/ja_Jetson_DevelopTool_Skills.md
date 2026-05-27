---
description: Seeed Jetson DevelopTool の Skills モジュールを使用して、Jetson デバイス上でドライバ、AI フレームワーク、システムチューニング向けの 50 以上の組み込み自動化スクリプトを実行します。
title: Skills
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - Skills
  - automation
  - OpenClaw
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_skills
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/ja/jetson_developtool_skills/
---

**Skills** モジュールは、ドライバのインストールから AI フレームワークのデプロイまで、一般的な Jetson のセットアップおよび構成タスクをワンクリックで処理する、50 以上の組み込み自動化スクリプトを提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-skills.png" style={{width:800, height:'auto'}}/></div>

## Skill カテゴリ

### ドライバ & 修正
| Skill | 説明 |
|-------|-------------|
| USB-WiFi (88x2bu) | RTL88x2BU Wi-Fi アダプタ用ドライバをインストール |
| 5G Module Support | 5G セルラーモジュール接続を構成 |
| Bluetooth Conflict Fix | 一般的な Bluetooth と Wi-Fi の共存問題を解決 |
| NVMe Boot | システムを NVMe SSD から起動するように構成 |
| Docker Cleanup | 未使用の Docker イメージとコンテナを削除して空き容量を確保 |

### AI / LLM
| Skill | 説明 |
|-------|-------------|
| PyTorch (Jetson) | JetPack 向けの NVIDIA 最適化 PyTorch ホイールをインストール |
| Ollama | Ollama LLM 推論エンジンをインストール |
| DeepSeek | Jetson 上に DeepSeek モデルをデプロイ |
| Qwen2 | Jetson 最適化済みの Qwen2 LLM をインストール |
| LeRobot | エンボディド AI 向けに Hugging Face LeRobot をセットアップ |
| vLLM | 高スループット推論サーバー vLLM をインストール |

### Vision / YOLO
| Skill | 説明 |
|-------|-------------|
| YOLOv8 | TensorRT エクスポート付きで Ultralytics YOLOv8 をインストール |
| DeepStream | NVIDIA DeepStream SDK をセットアップ |
| NVBLOX | 3D シーン再構築用に NVBLOX をインストール |
| Depth Estimation | 深度推定パイプラインを構成 |

### ネットワーク & リモート
| Skill | 説明 |
|-------|-------------|
| VS Code Server | ブラウザベース IDE 用に code-server をインストール |
| VNC Server | noVNC リモートデスクトップをセットアップ |
| SSH Key Setup | パスワード不要の SSH 鍵認証を構成 |
| Proxy Config | システム全体の HTTP/HTTPS プロキシを構成 |

### システムチューニング
| Skill | 説明 |
|-------|-------------|
| Max Performance Mode | Jetson を最大 CPU/GPU クロックスピード（`nvpmodel`）に設定 |
| Swap Config | スワップ領域を作成またはサイズ変更 |
| Fan Control | ファンカーブと冷却プロファイルを構成 |
| Cache Cleanup | パッケージおよび pip キャッシュをクリアしてディスク容量を回復 |

## Skill の実行

1. Jetson デバイスに接続します。
2. **Skills** タブを開きます。
3. カテゴリ別に閲覧するか、キーワードで検索します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/skills-header.png" style={{width:800, height:'auto'}}/></div>

4. 目的の Skill で **Run** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/skills-cards.png" style={{width:800, height:'auto'}}/></div>

5. ログウィンドウに、実行結果がリアルタイムで表示されます。

## コミュニティ Skills（OpenClaw）

Skills は [OpenClaw](https://github.com/Seeed-Studio/openclaw) フォーマットを使用します。`skills/openclaw/` ディレクトリに配置することで、独自のカスタム Skill を追加できます。ツールは起動時に自動でそれらを読み込みます。

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
