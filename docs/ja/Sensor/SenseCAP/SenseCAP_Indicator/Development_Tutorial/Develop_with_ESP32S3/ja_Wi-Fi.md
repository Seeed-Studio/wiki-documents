---
description: Wi-Fi
title: Wi-Fi
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_ESP32_Wi-Fi
last_update:
  date: 5/23/2023
  author: Thomas
---
# **Wi-Fi**

[**例**](https://github.com/espressif/esp-idf/tree/master/examples/wifi)

この[ディレクトリ](https://github.com/espressif/esp-idf/tree/master/examples/wifi)には、Wi-Fi機能を実演し、あなた自身のプロジェクトにコピーして適用できるコードを提供する一連のプロジェクト例が含まれています。

**例の使用**

例をビルドする前に、必要な開発環境を確保するためにESP-IDF Getting Started Guideに従ってください。

例のビルドは他のプロジェクトのビルドと同じです：

- ステップ1：ビルドしたい新しい例のディレクトリに移動します。

プロジェクト設定メニューを開く前に、ビルドする正しいチップターゲットを選択するために以下のコマンドを実行します：

`idf.py set-target esp32s3`

（デフォルトではターゲットはesp32です。すべてのオプションについてはidf.py set-target --helpを参照してください）

- ステップ2：プロジェクト設定メニューを開くために以下のコマンドを実行します：

`idf.py menuconfig`

ほとんどの例にはプロジェクト固有の「Example Configuration」セクションがあります（例えば、使用するWiFi SSIDとパスワードを設定するため）

- ステップ3：例をビルドします：

`idf.py build`

フラッシュするために印刷された指示に従うか、以下を実行します
`idf.py -p PORT flash`

# **技術サポート**

ご心配なく、私たちがサポートします！質問については[Seeed公式Discordチャンネル](https://discord.com/invite/QqMgVwHT3X)をご訪問ください！

大量注文やカスタマイズ要件がある場合は、[iot@seeed.cc](mailto:iot@seeed.cc)までお問い合わせください