---
description: jetpackとjetsonの関係の概要
title: JetPackとJetsonの関係の概要
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /ja/overview_of_the_relationship_between_jetpack_and_jetson
last_update:
  date: 06/05/2025
  author: Dayu
---

このwikiではJetPackのコンポーネントについて簡潔に紹介し、JetPackとJetsonの関係を素早く理解し、最もよくある質問にお答えします。

## 1. JetPackは何で構成されていますか？
JetPackは2つの主要コンポーネントを含むソフトウェアパッケージの集合です：

**① L4T (Linux for Tegra).** L4TはJetsonハードウェアプラットフォーム向けにカスタマイズされたミドルウェアLinuxディストリビューションです。以下で構成されています：

- Ubuntuルートファイルシステム

- Linuxカーネル（NVIDIAパッチ付き）

- ドライバー（GPU、ISP、CSI、I2C等）

- ファームウェア（Bootloader、UEFI、U-Boot、initrd）

- BSP（Board Support Package）デバイスツリー、ブート設定、フラッシュツールを含む

- その他

**② JetPack SDK.** これは主にアプリケーション開発ツールを提供する上位ソフトウェア層です：

- CUDA Toolkit

- cuDNN（深層学習ライブラリ）

- TensorRT（AIモデル推論エンジン）

- その他

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.png"/></div>

## 2. JetPackとUbuntuの関係は何ですか？

上記の最初の回答で説明したように、UbuntuはJetPackの一部です。各JetPackリリースには特定のバージョンのUbuntuが含まれています。私たちのJetPackバージョンには以下のUbuntuバージョンが含まれています：

| JetPackバージョン | L4Tバージョン | Ubuntuバージョン |
|------------------|--------------|-----------------|
| JetPack 6.2      | L4T 36.4.3   | Ubuntu 22.04    |
| JetPack 6.1      | L4T 36.4.0   | Ubuntu 22.04    |
| JetPack 6.0      | L4T 36.3.0   | Ubuntu 22.04    |
| JetPack 5.1.3    | L4T 35.5.0   | Ubuntu 20.04    |
| JetPack 5.1.1    | L4T 35.3.1   | Ubuntu 20.04    |
| JetPack 4.6.6    | L4T 32.7.6   | Ubuntu 18.04    |

## 3. 当社製品でサポートされているJetpackバージョンは？
現在利用可能な当社製品でサポートされているJetPackバージョンは以下のリンクで確認できます：

[seeedのjetpackバージョン](https://docs.google.com/spreadsheets/d/1Sf7IdmVkKTAUH95XwxHK0ojV5aFq3ItKZ-iT28egzIk/edit?pli=1&gid=0#gid=0)


## 4. JetPack 6.2とスーパーモードの関係

JetPack 6.2でフラッシュされたデバイスはスーパーモードの有効化をサポートしています。ただし、スーパーモードは現在、選択されたSeeed製品でのみ利用可能であることにご注意ください。

## 5. 各JetPackバージョンの内容を確認する方法は？

NVIDIAが公開している公式リソースを参照できます。詳細については以下のリンクをご覧ください：

[各jetpackの内容](https://developer.nvidia.com/embedded/jetpack-archive)

## リソース

- [SeeedのL4Tソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます！当社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>