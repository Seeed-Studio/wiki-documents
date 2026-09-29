---
description: reCamera Pro SDK のクロスコンパイル環境をセットアップし、Visual Wake + STT プロジェクトを作業例として用いながら、最小限のネイティブアプリケーションをビルドおよびデプロイする手順を説明します。
title: SDK と最小アプリケーション
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - cross-compilation
  - RKNN
  - GStreamer
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_setup
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_sdk_setup/
---

# SDK と最小アプリケーション

このページでは、ネイティブな reCamera Pro アプリケーションをビルドするためのホスト環境の準備方法と、完全なビルドおよびデプロイサイクルがどのように動作するかを説明します。手順は、実際にデバイス上で完結して動作する RKNN + GStreamer アプリケーションである [Visual Wake and Offline Speech Recognition](/ja/recamera_pro_visual_wake_stt/) プロジェクトを用いて示します。

一般的な開発契約（ツールチェーンのバージョン、モデル形式、言語）については、[開発パスを選択する](/ja/recamera_pro_dev_path/)を参照してください。このワークフローを AI コーディングエージェントに任せたい場合は、[AI コーディングエージェントで開発する](/ja/recamera_pro_development_cpp_skill/)を参照してください。

## 前提条件

- USB 仮想イーサネット（デフォルト `192.168.42.1`）または LAN 経由で到達可能な reCamera Pro（RV1126B, aarch64）
- モデル変換とクロスコンパイル用の Linux コンピュータ、または WSL を備えた Windows コンピュータ
- ホスト上で動作する reCamera Pro SDK
- RKNN-Toolkit2 2.3.2 および RKNN Runtime 2.3.2 — 任意の RKNN Runtime バージョンを混在させないでください

{/* TODO(verify): reCamera Pro SDK のダウンロード場所、想定されるディレクトリ構成、および SDK バージョンの確認方法を文書化する；元のプロジェクトではローカル SDK パスのみを参照している */}

## SDK パスを設定する

reCamera Pro プロジェクトのビルドスクリプトは、通常、環境変数を通じて SDK を見つけます。Visual Wake プロジェクトでは、`scripts/build_recamera.sh` が SDK をデフォルトのローカルパスで探しますが、代わりに自分の SDK チェックアウト先を指すようにします：

```bash
export RECAMERA_PRO_SDK=/absolute/path/to/recamera-pro-sdk
```

ビルドスクリプトは `librknnrt.so` も検証します。SDK やランタイムがそれを別の場所に保存している場合は、チェックサム検証ステップを維持したまま、スクリプト内の `qualified_rknnrt` パスを検証済みの RKNN 2.3.2 ランタイムに更新してください。

## プロジェクトを取得してクロスコンパイルする

プロジェクトリポジトリをクローンし、プロジェクトルートからクロスビルドスクリプトを実行します：

```bash
git clone https://github.com/yyling0101-a11y/recamera_pro_face_stt.git
cd recamera_pro_face_stt
bash scripts/build_recamera.sh
```

このスクリプトは SDK を検証し、そのビルド環境を読み込み、デプロイメントバンドルを生成します：

```text
build-recamera/deploy/
├── visual_wake_app
├── models/
│   ├── scrfd_500m_640_fp16.rknn
│   ├── pfld_98_112_fp16.rknn
│   └── stt/                         # encoder, decoder, joiner, and vocabulary
└── web/dashboard.html
```

自作の最小アプリケーションも同じ構成になります：aarch64 実行ファイル、RKNN モデルファイル、および任意の Web または設定アセットを 1 つのディレクトリ内に配置します。

## デバイスへのデプロイ

デプロイメントディレクトリの**中身**をデバイス上の 1 つのディレクトリにコピーし、SSH で接続してバイナリに実行権限を付与します：

```bash
scp -r build-recamera/deploy/* root@192.168.42.1:/userdata/visual-wake/
ssh root@192.168.42.1
cd /userdata/visual-wake
chmod +x visual_wake_app
```

:::tip
`models/` と `web/` ディレクトリの相対パスは維持してください。アプリケーションは、それらのデフォルトの相対パスを使ってアセットを読み込みます。
:::

## 実行と検証

デプロイメントディレクトリからアプリケーションを実行します：

```bash
./visual_wake_app
```

通常の動作中、実行可能なイベントがターミナルに表示されます：

```text
VISUAL_WAKE track=1
STT_RESULT 打开灯
```

`--help` を使用すると、すべてのランタイムオプションを一覧表示できます。たとえば、次のコマンドはビジュアルパイプラインのみを検証し、ネットワークサービスを無効にします：

```bash
./visual_wake_app --no-stt --no-rtsp --no-web --debug
```

デプロイが成功したとみなせるのは、バイナリがデバイス上で起動し、RKNN モデルを読み込み、カメラを開き、認識可能なイベントまたは推論結果を出力する場合です。

## よくある環境の問題

| 問題 | 想定される原因 | 解決策 |
| --- | --- | --- |
| ビルド時に OpenCV または RKNN が見つからない | SDK 環境が読み込まれていない、またはランタイムが非互換 | `RECAMERA_PRO_SDK` を確認し、SDK の `env.sh` を読み込み、RKNN 2.3.2 を使用します |
| 実行時にモデルファイルが見つからない | デプロイ時のレイアウトが保持されていない | 実行ディレクトリ内に `models/` と `web/` が存在することを確認します |
| 実行ファイルが x86-64 である | aarch64 クロスコンパイラではなくホストコンパイラが使用された | 対象に互換性のあるコンパイラと reCamera Pro sysroot を用いて再ビルドします |
| バイナリがライブラリを読み込めない | sysroot、ABI、またはランタイムの検索パスがボードと一致していない | ELF 依存関係を調査し、すべてのターゲットライブラリをデバイス上のものと比較します |

{/* TODO(verify): バージョン確認コマンドの期待される出力（SDK バージョン、デバイス上の librknnrt.so バージョン）を追加し、デプロイ前にホストとデバイスの互換性をユーザーが確認できるようにする */}

## 次のステップ

- [カメラ、オーディオ、推論の開発](/ja/recamera_pro_media_dev/) — GStreamer によるカメラキャプチャ、ALSA オーディオ、および RTSP 出力の詳細
- [AI コーディングエージェントで開発する](/ja/recamera_pro_development_cpp_skill/) — AI エージェントでモデル変換とネイティブビルドを自動化
- [Visual Wake and Offline Speech Recognition](/ja/recamera_pro_visual_wake_stt/) — このページで使用した完全な作業例

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
