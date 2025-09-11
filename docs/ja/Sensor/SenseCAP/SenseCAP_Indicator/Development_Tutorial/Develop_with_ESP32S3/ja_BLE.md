---
description: BLE
title: BLE
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_ESP32_BLE
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **BLE**

[**例**](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth)

この[ディレクトリ](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth)には、Bluetooth機能を示す一連のプロジェクト例が含まれており、独自のプロジェクトにコピーして適応できるコードが提供されています。

**例の使用方法**

例をビルドする前に、ESP-IDF Getting Started Guideに従って必要な開発環境を準備してください。

例をビルドする手順は、他のプロジェクトをビルドする手順と同じです：

- ステップ1: ビルドしたい新しい例のディレクトリに移動します。

プロジェクト構成メニューを開く前に、正しいチップターゲットを選択するために以下のコマンドを実行してください：

`idf.py set-target esp32s3`

（デフォルトではターゲットはesp32です。すべてのオプションについては、`idf.py set-target --help`を参照してください）

- ステップ2: 以下のコマンドを実行してプロジェクト構成メニューを開きます：

`idf.py menuconfig`

ほとんどの例には、ここにプロジェクト固有の「例の設定」セクションがあります（例えば、使用するWiFi SSIDとパスワードを設定するなど）。

- ステップ3: 例をビルドします：

`idf.py build`

印刷された指示に従ってフラッシュするか、以下のコマンドを実行してください：
`idf.py -p PORT flash`

# **技術サポート**

心配しないでください、私たちがサポートします！質問がある場合は、[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)をご訪問ください。

大量注文やカスタマイズの要件がある場合は、iot@seeed.ccまでお問い合わせください。