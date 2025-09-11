---
description: Wi-Fi
title: Wi-Fi
keywords:
- SenseCAP Indicator ESP32 開発チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_ESP32_Wi-Fi
last_update:
  date: 05/15/2025
  author: Thomas
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **Wi-Fi**






[**例**](https://github.com/espressif/esp-idf/tree/master/examples/wifi)

この[ディレクトリ](https://github.com/espressif/esp-idf/tree/master/examples/wifi)には、Wi-Fi 機能を示す一連のプロジェクト例が含まれており、自分のプロジェクトにコピーして適応できるコードが提供されています。

**例の使用方法**

例をビルドする前に、ESP-IDF Getting Started Guide に従って、必要な開発環境が整っていることを確認してください。

例をビルドする手順は、他のプロジェクトをビルドする手順と同じです：

- ステップ 1: ビルドしたい新しい例のディレクトリに移動します。

プロジェクト設定メニューを開く前に、以下のコマンドを実行して正しいチップターゲットを選択してください：

`idf.py set-target esp32s3`

（デフォルトではターゲットは esp32 です。すべてのオプションについては `idf.py set-target --help` を参照してください）

- ステップ 2: 以下のコマンドを実行してプロジェクト設定メニューを開きます：

`idf.py menuconfig`

ほとんどの例には、ここにプロジェクト固有の「例設定」セクションがあります（例えば、使用する WiFi SSID とパスワードを設定するため）。

- ステップ 3: 例をビルドします：

`idf.py build`

印刷された指示に従ってフラッシュを実行するか、以下を実行してください：
`idf.py -p PORT flash`




# **技術サポート**

ご安心ください！私たちがサポートします！質問がある場合は、[Seeed Official Discord Channel](https://discord.com/invite/QqMgVwHT3X) を訪問してください。

大量注文やカスタマイズの要件がある場合は、iot@seeed.cc にお問い合わせください。