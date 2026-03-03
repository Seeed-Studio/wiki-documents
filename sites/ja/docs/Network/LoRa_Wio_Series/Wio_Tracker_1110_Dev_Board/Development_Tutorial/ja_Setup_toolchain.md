---
description: Wio_Tracker_1110のパラメータを設定する
title: ツールチェーンのセットアップ
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/setup_toolchain_for_wio_tracker
last_update:
  date: 9/19/2023
  author: Jessie
---


Wio Tracker 1110 Dev Boardは、コーディング体験を向上させるためにArduinoを活用しています。開発を開始する前に、まずツールチェーンをセットアップする必要があります。

### ツールチェーンのセットアップ

#### Arduino IDEのインストール

Arduino IDE（統合開発環境）はオープンソースソフトウェアで、主にほぼすべてのArduinoモジュールへのコードの記述、コンパイル、アップロードに使用されます。
MAC、Windows、Linuxなど、すべてのオペレーティングシステムで利用可能で、Javaプラットフォーム上で動作し、デバッグ、編集、コードのコンパイルにおいて重要な役割を果たす組み込み関数とコマンドが含まれています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-wio.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Arduino IDEダウンロード </font></span></strong>
    </a>
</div>

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

#### Seeedボードの追加

`Arduino IDE` -> `環境設定`に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-add.png" alt="pir" width={800} height="auto" /></p>

このURLを`追加のボードマネージャのURL`にコピーし、`OK`をクリックします。

```cpp
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/copy-urls.png" alt="pir" width={800} height="auto" /></p>

`ボードマネージャ`をクリックします。
`Seeed nRF52 Boards`を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png" alt="pir" width={800} height="auto" /></p>

次に、ボードとポートを選択する必要があります。<br/>
`Seeed Wio Tracker 1110`を検索して選択し、ポートを選択して`OK`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png" alt="pir" width={800} height="auto" /></p>

:::info
ポートは'Serial Port(USB)'のようになっているはずです
:::

#### Wio Tracker 1110の例

SenseCAPは、ユーザーが迅速に開始できるように`Wio Tracker 1110 Examples`を提供しています。

`ファイル`タブに移動し、`例`-> `Wio Tracker 1110 Examples`を選択し、必要なものを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/example.png" alt="pir" width={800} height="auto" /></p>

### ライブラリの追加

Arduino IDEでは、`ライブラリマネージャ`で検索できます。例えば`Seeed_Arduino_AHT20`を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-lib.png" alt="pir" width={800} height="auto" /></p>
<details>
<summary>オフラインインストールをプレビューするにはクリック</summary>

*オフライン*でインストールするには、GitHubから**リポジトリのzipをダウンロード**し、**スケッチ** -> **ライブラリをインクルード** -> **.ZIPライブラリを追加**に移動して、ダウンロードしたライブラリを選択します。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

:::note 参考用ライブラリ
[Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)<br/>
[Adafruit SPI Flash](https://github.com/adafruit/Adafruit_SPIFlash)<br/>
[Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)<br/>
[Sensirion I2C SGP41 Arduino Library](https://github.com/Sensirion/arduino-i2c-sgp41)<br/>
[Sensirion I2C SHT4X Arduino Library](https://github.com/Sensirion/arduino-i2c-sht4x)<br/>
[Sensirion Gas Index Algorithm Arduino Library](https://github.com/Sensirion/arduino-gas-index-algorithm)
:::