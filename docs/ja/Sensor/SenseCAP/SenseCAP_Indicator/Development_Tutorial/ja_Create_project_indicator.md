---
title: プロジェクト作成(ESP-IDF) - SenseCAP Indicator
description: ESP-IDFまたはSquareline Studioを使用してSenseCAP Indicatorのプロジェクトを開発するためのステップバイステップガイド。
keywords: 
- SenseCAP Indicator
- ESP-IDF
- Squareline
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecap_indicator_project
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概要
SenseCAP IndicatorはデュアルコアMCUであるESP32-S3とRP2040を統合しています。このチュートリアルでは、ESP32-S3を使用してESP-IDFでプロジェクトを作成する方法に焦点を当てています。

プロジェクト作成には、GitHubテンプレートとSquareline Studioの2つの簡単な方法があります。

## プロジェクト作成方法

### 1. GitHubテンプレート
#### ステップ1: 新しいプロジェクトを作成
- [SenseCAP Indicatorテンプレートリポジトリ](https://github.com/Seeed-Solution/indicator-esp-idf-template)にアクセスし、`Use this template`をクリックして新しいリポジトリを開始します。

#### ステップ2: リポジトリをクローン
```bash
git clone https://github.com/your-username/indicator-esp-idf-template.git
```

#### ステップ3: プロジェクトをビルド
プロジェクトディレクトリに移動してプロジェクトをビルドします:
```bash
cd indicator-esp-idf-template
idf.py build
```

#### ステップ4: プロジェクトをフラッシュ
デバイスをUSBで接続し、以下のコマンドでプロジェクトをフラッシュします:
```bash
idf.py -p PORT flash
```

#### ステップ5: プロジェクトをモニター
以下のコマンドで出力をモニターします:
```bash
idf.py -p PORT monitor
```
*注: `PORT`をデバイスのポート番号に置き換えてください。*

### 2. Squareline Studio
初心者向けに、Squareline StudioはUIデザインのための使いやすいローコードオプションを提供します。

[Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe)というブログでは、Squareline Studioを使用してUIをデザインする詳細なガイドを提供しています。

#### ステップ1: セットアップ
- [Squarelineのウェブサイト](https://studio.squareline.io/)からSquareline Studioをダウンロードしてインストールします。
- ソフトウェアを起動し、新しいプロジェクトを開始します。

![](https://hackster.imgix.net/uploads/attachments/1650386/image_4QrcVcHWtG.png?auto=compress%2Cformat&w=1280&h=960)

#### ステップ2: UIをデザイン
- Squareline Studioを使用してプロジェクトのUIをデザインします。

#### ステップ3: プロジェクトを生成してビルド
- UIコードを生成します。
- ESP-IDFを使用してプロジェクトをビルドします。

Squareline Studioの使用方法については、[Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe)のガイドを参照してください。

### 初心者向けのヒント
- 開発に不慣れな場合は、Squareline Studioを使用して簡単な点滅プロジェクトを作成することから始めてください。
- より高度なカスタマイズを行いたい場合は、[SDK例](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)を直接変更してください。

## ODMサービス

Seeed Studioは、迅速なカスタマイズと多様なニーズに対応するスケーリング要件を満たす包括的なワンストップODMサービスを提供しています。プロジェクトを特別な機能でカスタマイズしたり、効率的に運用を拡大するための支援が必要な場合は、ぜひお問い合わせください。詳細情報やお問い合わせはiot@seeed.ccまでご連絡ください。あなたのユニークなアイデアを実現するお手伝いをいたします。

## 技術サポート

**SenseCAP Indicatorに関するサポートが必要ですか？私たちがサポートします！**

このチュートリアルを実行中に問題が発生したり質問がある場合は、ぜひ技術サポートにお問い合わせください。いつでもお手伝いします！

[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)で質問をしたり、[GitHubディスカッション](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions)で情報を共有してください！