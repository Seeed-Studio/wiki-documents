---
title: プロジェクトの作成(ESP-IDF) - SenseCAP Indicator
description: ESP-IDFまたはSquareline Studioを使用してSenseCAP Indicatorのプロジェクトを開発するためのステップバイステップガイド。
keywords: 
- SenseCAP Indicator
- ESP-IDF
- Squareline
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecap_indicator_project
sidebar_position: 4
last_update:
  date: 04/12/2024
  author: Spencer
---

## 概要

SenseCAP IndicatorはデュアルコアMCU ESP32-S3とRP2040を統合しています。このチュートリアルでは、ESP-IDFを使用してESP32-S3でプロジェクトを作成することに焦点を当てています。

プロジェクト作成には2つの簡単な方法があります：GitHubテンプレートとSquareline Studioです。

## プロジェクト作成方法

### 1. GitHubテンプレート

#### ステップ1：新しいプロジェクトの作成

- [SenseCAP Indicatorテンプレートリポジトリ](https://github.com/Seeed-Solution/indicator-esp-idf-template)にアクセスし、`Use this template`をクリックして新しいリポジトリを開始します。

#### ステップ2：リポジトリのクローン

```bash
git clone https://github.com/your-username/indicator-esp-idf-template.git
```

#### ステップ3：プロジェクトのビルド

プロジェクトディレクトリに移動してプロジェクトをビルドします：

```bash
cd indicator-esp-idf-template
idf.py build
```

#### ステップ4：プロジェクトのフラッシュ

デバイスをUSB経由で接続し、以下を使用してプロジェクトをフラッシュします：

```bash
idf.py -p PORT flash
```

#### ステップ5：プロジェクトのモニタリング

以下でアウトプットをモニタリングします：

```bash
idf.py -p PORT monitor
```

*注意：`PORT`をデバイスのポート番号に置き換えてください。*

### 2. Squareline Studio

初心者の場合、Squareline StudioはUI設計のためのユーザーフレンドリーなローコードオプションを提供します。

Squareline Studioを使用してUIを設計する詳細なガイドを提供するブログ[Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe)があります。

#### ステップ1：セットアップ

- [Squarelineのウェブサイト](https://studio.squareline.io/)からSquareline Studioをダウンロードしてインストールします。
- ソフトウェアを起動し、新しいプロジェクトを開始します。

![](https://hackster.imgix.net/uploads/attachments/1650386/image_4QrcVcHWtG.png?auto=compress%2Cformat&w=1280&h=960)

#### ステップ2：UIの設計

- Squareline Studioを使用してプロジェクトのUIを設計します。

#### ステップ3：プロジェクトの生成とビルド

- UIコードを生成します。
- ESP-IDFを使用してプロジェクトをビルドします。

Squareline Studioの使用方法の詳細については、[Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe)のガイドを参照してください。

### 初心者向けのヒント

- 開発が初めての場合は、Squareline Studioから始めて簡単なblinkプロジェクトを作成してください。
- より高度なカスタマイゼーションについては、[SDKサンプル](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)を直接変更してください。

## ODMサービス

Seeed Studioは、多様なニーズに対応する迅速なカスタマイゼーションとスケーリング要件に対応するための包括的なワンストップODMサービスを提供しています。専門的な機能でプロジェクトをカスタマイズしたい場合や、効率的に運用を拡大するためのサポートが必要な場合は、お気軽にお問い合わせください。お問い合わせやより詳細な情報については、iot@seeed.ccまでご連絡ください。お客様のユニークなアイデアを現実に変えるお手伝いをいたします。

## 技術サポート

**SenseCAP Indicatorでお困りですか？サポートいたします！**

このチュートリアルに従っている間に問題が発生したり、ご質問がある場合は、お気軽に技術サポートにお問い合わせください。いつでもサポートいたします！

[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)で質問するか、[GitHubディスカッション](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions)で何でも共有してください！