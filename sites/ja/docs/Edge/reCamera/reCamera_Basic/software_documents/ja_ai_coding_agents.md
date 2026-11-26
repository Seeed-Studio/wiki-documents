---
description: 公式の reCamera 2002 C++ 開発スキルを AI コーディングエージェントにインストールして使用し、SG200X アプリケーションのスキャフォールド、モデル変換、クロスコンパイル、デプロイ、検証を行います。
title: スキルを使う
keywords:
  - reCamera
  - reCamera 2002
  - AI coding agent
  - Agent Skills
  - SG200X
  - RISC-V
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_2002_development_cpp_skill
sidebar_position: 6
last_update:
  date: '2026-11-20'
  author: Go
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/ja/recamera_2002_development_cpp_skill/
---

# スキルを使って reCamera 2002 アプリケーションを開発する

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp" alt="reCamera 2002 AI coding agent skill" /></div>

## はじめに

[reCamera 2002 C++ Dev Toolkit](https://github.com/Seeed-Projects/recamera-2002-cpp-dev) は、reCamera 2002（SG200X）向けの再現可能な C++ ワークフローを Agent Skill としてパッケージ化したものです。インストール後は、コーディングエージェントがデモ用ワークスペースの生成、モデルの準備、RISC-V バイナリのクロスコンパイル、ホストでのスモークテストの実行、成果物のパッケージング、SSH 経由でのデプロイ、エビデンス収集までを実行できます。

このスキルは設定駆動型です：`demo.json` がデモの内容を記述し、各ステージは 1 つのコマンドで構成され、デバイスを使う前にオフラインステージがすべて成功している必要があります。

:::note
このスキルの対象は **SG200X SoC を搭載した reCamera 2002**（OS >= 0.2.4）です。reCamera Pro / RV1126B / RKNN 向けでは**ありません**。reCamera Pro には [reCamera Pro skill](/ja/recamera_pro_development_cpp_skill/) を使用してください。
:::

## スキルでできること

- `demo.json` からの**デモ用ワークスペース生成**：ディレクトリ構成、ビルドスクリプト、スターターコード
- **モデルの取得または変換**：Seeed ホストのモデル、または ONNX → TPU-MLIR を用いた `.cvimodel`
- Xuantie ツールチェーンと SG200X SDK を用いた RISC-V C/C++ デモの**クロスコンパイル**
- デバイスなしでの**ホスト側スモークテスト**により、デプロイ前にロジックエラーを検出
- 再現可能な配布のためにハッシュ付きで**決定論的な成果物をパッケージング**
- **SSH 経由でデプロイ**し、デバイスをプローブして障害を診断
- UDP H.264 ビデオ、検出オーバーレイ、パラメータ調整機能を備えた**ライブビューアの起動**
- **エビデンスの取得**と、出力のベースラインに対するスコアリング

## 対応環境

| 項目 | 対応構成 |
| --- | --- |
| デバイス | Seeed reCamera 2002 (SG200X), OS >= 0.2.4 |
| SoC | SG200X |
| ターゲットアーキテクチャ | riscv64 Linux |
| モデル形式 | `.cvimodel` (TPU-MLIR / CVI) |
| ホスト | Linux x86_64（ホスト側検証には macOS、Windows は WSL2 経由） |
| 対応エージェント | Claude Code, Codex, Gemini CLI |
| 非対応 | reCamera Pro / RV1126B / RKNN |

## スキルをインストールする

ツールキットのリポジトリをクローンし、スキルディレクトリをエージェントの skills ディレクトリにコピーします：

```bash
git clone https://github.com/Seeed-Projects/recamera-2002-cpp-dev.git ~/src/recamera-2002-cpp-dev

# Claude Code
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.claude/skills/

# OpenAI Codex
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.codex/skills/

# Gemini CLI
cp -r ~/src/recamera-2002-cpp-dev/skills/recamera-2002-cpp-dev ~/.gemini/skills/
```

インストール後は、スキルディレクトリ名を `recamera-2002-cpp-dev` のままにしておいてください。同じディレクトリを複数のエージェントで共有できます。スキルが現在のセッションに表示されない場合は、エージェントを再起動してください。

## スキルを使う：人数カウントのウォークスルー

スキルをインストールした後は、各スクリプトを手動で実行する必要はありません。目的をコーディングエージェントに説明すると、スキルのワークフローに従って処理が進みます。以下は、実際の人数カウント二次開発セッションの例です。

### 1. タスクを説明する

Claude Code / Codex に次の内容を入力します：

```text
Use the recamera-2002-cpp-dev skill to implement people counting in the camera view.
```

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/2002_skill_begin.png" alt="Starting a people counting task with the recamera-2002-cpp-dev skill" />
  <p><em>エージェントが検証、クロスコンパイル、パッケージング、デプロイ、ライブビューアの起動まで自動で処理します</em></p>
</div>

ここから先は、スクリプトを手動で実行する必要はありません。エージェントがワークスペース生成からデバイス上でのライブビューまでスキルに従って処理し、最後に `LIVE_URL` を出力します。

### 2. デプロイしてライブページを開く

エージェントは probe → install → start を自動で実行し、ホスト側ビューアを開いて `LIVE_URL` を出力します。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/2002_skill_count.png" alt="People counting count" />
  <img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/2002_skill_result.png" alt="People counting result in the reCamera Live page" />
  <p><em>reCamera Live：ライブビュー、人物ボックス、カウントライン、パラメータパネル、デバイスログ</em></p>
</div>

ページにはライブビュー、人物ボックス、入退場カウントが表示されます。カウントラインや ROI の変更は即座に反映されます。

### 3. 繰り返し改善する

会話を続けます：

```text
Move the counting line up and shrink the ROI to the lower half of the frame.
```

```text
Increase the track confirmation frames from 2 to 3 to reduce false counts.
```

```text
Publish the current count and in/out totals to Home Assistant over MQTT.
```

エージェントはプロジェクトを修正し、再ビルド・再デプロイを行い、同じ検証フローを再利用します。

## コマンドリファレンス

ここでは、最も一般的な 2 つのエントリポイントのみを掲載しています。完全なコマンドセット、パラメータ、注意事項については公式リポジトリを参照してください：

- [README.md](https://github.com/Seeed-Projects/recamera-2002-cpp-dev/blob/main/README.md)
- [SKILL.md](https://github.com/Seeed-Projects/recamera-2002-cpp-dev/blob/main/SKILL.md)

```bash
# Create a workspace with the live transport skeleton
python3 scripts/new_demo.py --name my_live --task detection --live udp --out ~/reCamera_demo

# Deploy and open the live page
python3 scripts/launch_demo.py --demo-dir ~/reCamera_demo/my_live --host <device-ip>
```

## 開発ワークフロー

1. `demo.json` からワークスペースを**生成**します。
2. プロジェクト設定をオフラインで**検証**します。
3. RISC-V バイナリを**ビルド**し、ツールチェーンロックを記録します。
4. デバイスなしでホストロジックの**スモークテスト**を行います。
5. 成果物のハッシュを含む決定論的アーカイブを**パッケージング**します。
6. SSH 経由で**デプロイ**し、デバイスをプローブします。
7. **エビデンスを取得**し、結果をベースラインと比較してスコアリングします。

デフォルトでは、スキルはローカルで成果物をビルドおよび検査します。ファイル転送、サービス変更、デバイス上での実行は、あなたが明示的に要求し、許可した場合にのみ行われます。

## トラブルシューティング

| 問題 | 想定される原因 | 解決策 |
| --- | --- | --- |
| スキルが一覧に表示されない | エージェントが skills ディレクトリを再読み込みしていない | エージェントを再起動し、上記のインストールパスを確認してください |
| クロスコンパイルに失敗する | Xuantie GCC 10.2.0、SG200X SDK、または `SG200X_SDK_PATH` が不足している | Linux/WSL2 ホストを使用し、環境チェックを再実行してください |
| モデル変換に失敗する | TPU-MLIR や `onnx` パッケージが不足している、またはモデル契約が非互換 | オプション依存関係をインストールし、まずモデルの入出力を確認してください |
| SSH デプロイに失敗する | デバイスに到達できない、またはパスワードが設定されていない | USB/RNDIS 接続を確認し、`RECAMERA_PASSWORD` を設定してください |
| バイナリがホストでは動くがデバイスでは動かない | アーキテクチャの誤り、または互換性のない C ライブラリ | ELF が riscv64 であり、SG200X の sysroot と一致していることを確認してください |
| ライブビューに検出結果が表示されない | `live` セクションが不完全、または検出が未実装 | 成功と主張する前にデモを修正し、`placeholder` や `degraded` を正直に報告してください |

## リソース

- [reCamera 2002 C++ Dev Toolkit リポジトリ](https://github.com/Seeed-Projects/recamera-2002-cpp-dev)
- [reCamera で C/C++ 開発を行う](https://wiki.seeedstudio.com/ja/recamera_develop_with_c_cpp/)
- [reCamera 2002 ハードウェア仕様](https://wiki.seeedstudio.com/ja/recamera_2002_series_hardware_and_specs/)
- [reCamera Pro Development Skill](https://wiki.seeedstudio.com/ja/recamera_pro_development_cpp_skill/)

## Q&A

### このスキルは reCamera Pro でも使えますか？

いいえ。このスキルの対象は **reCamera 2002 (SG200X)** のみです。reCamera Pro（RV1126B / RKNN）の場合は、[reCamera Pro Development Skill](/ja/recamera_pro_development_cpp_skill/) を使用してください。

### トラブルシューティング用のログはどのようにエクスポートしますか？

デプロイまたはライブビューが失敗した場合は、ホスト側デモのログとデバイスログを 1 つのアーカイブにまとめて収集します：

```bash
# On the host: pack the demo workspace logs and evidence
cd ~/reCamera_demo/my_live
tar -czf recamera-2002-host-logs.tar.gz logs/ evidence/ 2>/dev/null || true

# Collect device-side logs over SSH
ssh recamera@<device-ip> "dmesg > /tmp/dmesg.log; tar -czf /tmp/recamera-2002-device-logs.tar.gz -C /var/log . /tmp/dmesg.log 2>/dev/null" || true
scp recamera@<device-ip>:/tmp/recamera-2002-device-logs.tar.gz .
```

アーカイブを、問題の説明、ハードウェアモデル、reCamera OS バージョンと一緒に **techsupport@seeed.io** まで送付してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなレベルのサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
