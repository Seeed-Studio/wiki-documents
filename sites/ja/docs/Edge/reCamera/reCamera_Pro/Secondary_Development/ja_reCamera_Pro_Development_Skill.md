---
title: AI コーディングエージェントで reCamera Pro アプリケーションを開発する
description: reCamera Pro Development Skill をインストールして使用し、ONNX モデルの変換、ネイティブ RKNN アプリケーションのビルド、カメラ・オーディオ・GStreamer・RTSP ワークフローを自然言語での対話を通じて開発します。
keywords:
  - reCamera
  - reCamera Pro
  - AI coding agent
  - Agent Skills
  - RKNN
  - RV1126B
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/cpp_skill/recamera_skill.png
slug: /recamera_pro_development_cpp_skill
sidebar_position: 3
last_update:
  date: 2026-08-14
  author: yylin
createdAt: '2026-08-14'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/ja/recamera_pro_development_cpp_skill/
---

# AI コーディングエージェントで reCamera Pro アプリケーションを開発する

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/cpp_skill/recamera_skill.png" alt="reCamera Pro Development Skill workflow" /></div>

## はじめに

[reCamera Pro Development Skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) は、reCamera Pro 固有の手順、スクリプト、技術リファレンス、およびネイティブ C++ アプリケーションテンプレートを AI コーディングエージェント向けにパッケージ化したものです。これをインストールすると、アプリケーションを自然言語で記述し、エージェントにモデル変換とネイティブ開発ワークフローの準備を任せることができます。

例えば、エージェントに次のようなことを依頼できます：

- ONNX モデルを RV1126B NPU 向けの RKNN に変換する
- ネイティブ C/C++ RKNN Runtime アプリケーションを作成または変更する
- GStreamer でカメラフレームをキャプチャする
- マイク入力のキャプチャやスピーカー再生を追加する
- RTSP 推論パイプラインを開発する
- ホスト、クロスコンパイラ、sysroot、ターゲットライブラリ、および生成された ELF ファイルを検査する

このリポジトリは、OpenAI Codex、Claude Code、GitHub Copilot、Cursor、Gemini CLI 向けのエディションを提供します。各エディションは同じ reCamera Pro 開発ナレッジを使用しつつ、エージェント固有のインストール方法と呼び出し手順を備えています。

:::note
このスキルは、**RV1126B SoC と aarch64 Linux を搭載した reCamera Pro 専用**です。SG2002/riscv64 reCamera プラットフォームを対象としたものではありません。
:::

## ハードウェアの準備

- reCamera Pro 1 台
- モデル変換とクロスコンパイル用の Linux コンピュータ、または WSL を備えた Windows コンピュータ
- リポジトリおよび必要な開発用依存関係をダウンロードするためのネットワーク接続

<div align="center">
<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>
</div>

## 対応する開発環境

このスキルは、ネイティブ AI アプリケーションを開発する際に、次のターゲット契約を使用します：

| 項目 | 対応構成 |
| --- | --- |
| デバイス | Seeed reCamera Pro |
| SoC | Rockchip RV1126B |
| ターゲットアーキテクチャ | aarch64 Linux |
| モデル形式 | ONNX 入力、RKNN 出力 |
| RKNN Toolkit | RKNN-Toolkit2 2.3.2 |
| RKNN Runtime | 2.3.2 |
| カメラフレームワーク | GStreamer |
| ネイティブアプリケーション言語 | C/C++ |

## スキルをインストールする

### 使用する AI コーディングエージェントを選択する

使用しているエージェントに対応するブランチをクローンします：

| AI コーディングエージェント | ブランチ | ユーザーレベルのスキルディレクトリ |
| --- | --- | --- |
| OpenAI Codex | `main` | `~/.agents/skills/recamera-rknn-dev` |
| Claude Code | `claude-code` | `~/.claude/skills/recamera-rknn-dev` |
| GitHub Copilot | `github-copilot` | `~/.copilot/skills/recamera-rknn-dev` |
| Cursor | `cursor` | `~/.cursor/skills/recamera-rknn-dev` |
| Gemini CLI | `gemini-cli` | `~/.gemini/skills/recamera-rknn-dev` |

### 方法 1: エージェントにインストールさせる

エージェントが Git リポジトリからスキルをインストールする機能をサポートしている場合、次のリクエストを送信します：

```text
Install the reCamera Pro development skill from:
https://github.com/Seeed-Projects/recamera-pro-development-skill.git
```

使用しているエージェント名に言及し、それに対応するブランチとインストールディレクトリが選択されるようにします。

### 方法 2: 手動でインストールする

次の例では、OpenAI Codex エディションをインストールします：

```bash
git clone --branch main --single-branch \
  https://github.com/Seeed-Projects/recamera-pro-development-skill.git
cd recamera-pro-development-skill
./scripts/install_skill.sh
```

他の対応エージェントを使用する場合は、上の表にあるブランチ名で `main` を置き換えてください。ブランチ固有のインストールスクリプトが、そのエージェントのユーザーレベルスキルディレクトリにスキルをコピーします。

インストール後もスキルが現在のセッションに表示されない場合は、エージェントを再起動してください。

:::tip
クローンしたリポジトリは保持しておいてください。後でスキルを更新するには、同じエージェントブランチから最新の変更を取得し、そのブランチの README とインストール手順に従います。
:::

## スキルを使用する

プロンプト内でスキル名を明示的に指定できます：

```text
Use the reCamera Pro development skill to check whether my computer is ready
to cross-compile native applications for reCamera Pro.
```

スキルがインストールされた後は、タスクを自然な言葉で記述することもできます。エージェントは、関連するモデル変換、クロスコンパイル、カメラ、オーディオ、ストリーミングに関するガイダンスを読み込みます。

### ONNX モデルを変換する

```text
Use the reCamera Pro development skill to inspect model.onnx and convert it
to an RKNN model for RV1126B. Use representative images in calibration/images
for INT8 calibration and compare the RKNN output with the ONNX output.
```

エージェントはモデルの入力および出力契約を確認し、`rv1126b` 向けに RKNN-Toolkit2 2.3.2 を構成し、生成されたモデルとともに前処理および変換メタデータを保持します。

:::warning
モデルの前処理、色順序、正規化、出力セマンティクスを推測しないでください。INT8 量子化を要求する場合は、元のモデルソースと代表的なキャリブレーション画像を提供してください。
:::

### ネイティブカメラアプリケーションをビルドする

```text
Use the reCamera Pro development skill to create a C++ application that
captures /dev/video13 with GStreamer and runs my RKNN detection model.
Cross-compile it with my reCamera Pro sysroot and inspect the resulting ELF file.
```

このスキルには、最小限の RKNN Runtime と GStreamer アプリケーションテンプレートが含まれています。エージェントはテンプレートを完成された検出器として扱うのではなく、モデルに合わせて前処理と後処理を調整します。

### オーディオや RTSP を追加する

```text
Add microphone capture and speaker playback to my reCamera Pro application.
Check the device's ALSA configuration before changing the code.
```

```text
Create an RTSP inference application for reCamera Pro and identify the target
GStreamer dependencies required by the cross build.
```

### 既存プロジェクトを診断する

```text
Diagnose why this binary does not run on reCamera Pro. Check its architecture,
ELF interpreter, shared-library dependencies, runtime search path, and ABI
compatibility with the board sysroot.
```

## 開発ワークフロー

エージェントは次の一般的なワークフローに従います：

1. Linux または WSL ホスト、Conda インストール、クロスコンパイラ、sysroot、およびローカルの RKNN Runtime ファイルを検査する。
2. ONNX モデルの契約を検査し、そのソース、ライセンス、入力レイアウト、正規化、色順序、および出力セマンティクスを記録する。
3. `rv1126b` 向けに RKNN-Toolkit2 2.3.2 を使用してモデルを変換する。INT8 の場合は代表的なキャリブレーションデータを使用する。
4. アプリケーションに統合する前に、RKNN 出力を元の ONNX モデルと比較する。
5. ネイティブ C/C++ アプリケーションを作成または調整し、reCamera Pro 互換の sysroot に対してクロスコンパイルする。
6. 生成された実行ファイルが aarch64 であり、その RKNN、GStreamer、libc、C++ ABI、およびランタイムパスがデバイスと互換であることを確認する。
7. 実行ファイル、RKNN モデル、実行コマンド、およびデプロイ用の想定入力/出力契約を準備する。

デフォルトでは、このスキルは成果物をローカルでビルドおよび検査します。reCamera Pro 上でのファイル転送と実行は、あなたが明示的に要求し、許可した場合にのみ行われます。

デフォルトでは、エージェントが出力を生成した後、それをデバイスに転送して実行する作業は手動で行う必要があります。エージェントは対応する実行コマンドを提示し、出力は通常、バイナリ実行ファイルと rknn モデルファイルです。

## 重要な注意事項

- ネイティブ C/C++ アプリケーションには RKNN Runtime C API を使用してください。このワークフローでは `rknn-toolkit-lite2` は使用しません。
- 開発用コンピュータの x86_64 ライブラリを、aarch64 ターゲットアプリケーションにリンクしないでください。
- NV12 カメラバイトを RGB または BGR モデルに直接入力しないでください。パイプラインまたはアプリケーションは、モデルが要求する正確な前処理を実行する必要があります。
- モデル変換が成功しても、正しい推論が保証されるわけではありません。数値出力と前処理を元のフレームワークと比較してください。
- アプリケーションはボード互換の RKNN Runtime にリンクし、既存のデバイスランタイムを使用します。reCamera Pro にインストールされている RKNN Runtime を置き換えるべきではありません。

## トラブルシューティング

| 問題 | 想定される原因 | 解決策 |
| --- | --- | --- |
| スキルが一覧に表示されない | エージェントがユーザーレベルのスキルディレクトリを再読み込みしていない | エージェントを再起動し、上記のディレクトリにスキルがインストールされていることを確認する |
| 誤ったプラットフォームが選択される | SG2002/riscv64 reCamera 向けの手順がタスクに混在している | ターゲットが reCamera Pro、RV1126B、aarch64 であることを明示する |
| RKNN 変換が失敗する | Toolkit バージョン、ONNX オペレータサポート、またはモデル入力契約が非互換 | まずエージェントに ONNX モデルを検査させ、RKNN-Toolkit2 2.3.2 を使用する |
| INT8 精度が低い | キャリブレーション画像がない、または代表的でない | 代表的なデータセットを作成し、1 行につき 1 つの画像パスを列挙する |
| 実行ファイルが x86-64 である | aarch64 クロスコンパイラではなくホストコンパイラが使用された | ターゲット互換のコンパイラと reCamera Pro sysroot を使用して再ビルドする |
| バイナリがライブラリを読み込めない | sysroot、ABI、またはランタイム検索パスがボードと一致していない | エージェントに ELF 依存関係を検査させ、各ターゲットライブラリをデバイスと比較する |
| カメラフレームの色や推論結果がおかしい | NV12 から RGB/BGR への変換や正規化がモデルと一致していない | モデル契約を再確認し、前処理を明示的にする |

## リソース

- [reCamera Pro Development Skill リポジトリ](https://github.com/Seeed-Projects/recamera-pro-development-skill)
- [reCamera Pro 製品ページ](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [reCamera Pro Wiki](https://wiki.seeedstudio.com/ja/recamera_pro_getting_started/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなレベルのサポートを提供しています。お客様それぞれの好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
