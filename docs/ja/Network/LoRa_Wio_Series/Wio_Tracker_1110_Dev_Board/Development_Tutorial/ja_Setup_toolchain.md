---
description: Wio Tracker 1110 のパラメータを設定する
title: ツールチェーンのセットアップ
keywords:
- トラッカー
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/setup_toolchain_for_wio_tracker
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

Wio Tracker 1110 開発ボードは Arduino を活用してコーディング体験を向上させます。開発を始める前に、まずツールチェーンをセットアップする必要があります。

### ツールチェーンのセットアップ

#### Arduino IDE のインストール

Arduino IDE（統合開発環境）はオープンソースのソフトウェアで、主にコードの記述、コンパイル、アップロードをほぼすべての Arduino モジュールに対して行うために使用されます。これは、MAC、Windows、Linux などすべてのオペレーティングシステムで利用可能で、Java プラットフォーム上で動作します。デバッグ、編集、コンパイルに重要な役割を果たす組み込み関数とコマンドが付属しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-wio.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Arduino IDE ダウンロード </font></span></strong>
    </a>
</div>

:::tip
Arduino を初めて使用する場合は、[Arduino の始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

#### Seeed ボードの追加

`Arduino IDE` -> `Preferences` に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-add.png" alt="pir" width={800} height="auto" /></p>

以下の URL を `Additional boards manager URLs` にコピーし、`OK` をクリックします。

```cpp
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/copy-urls.png" alt="pir" width={800} height="auto" /></p>

`Board Manager` をクリックします。  
`Seeed nRF52 Boards` を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png" alt="pir" width={800} height="auto" /></p>

次に、ボードとポートを選択する必要があります。  
`Seeed Wio Tracker 1110` を検索して選択し、ポートを選択して `OK` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png" alt="pir" width={800} height="auto" /></p>

:::info
ポートは「Serial Port(USB)」のように表示されるはずです。
:::

#### Wio Tracker 1110 の例

SenseCAP は、ユーザーが迅速に開始できるように `Wio Tracker 1110 Examples` を提供しています。

`File` タブに移動し、`Example` -> `Wio Tracker 1110 Examples` を選択し、必要なものを選びます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/example.png" alt="pir" width={800} height="auto" /></p>

### ライブラリの追加

Arduino IDE では、`Library Manager` で例えば `Seeed_Arduino_AHT20` を検索してインストールできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-lib.png" alt="pir" width={800} height="auto" /></p>
<details>
<summary>オフラインインストールをプレビューするにはクリック</summary>

オフラインでインストールするには、GitHub からリポジトリの ZIP をダウンロードし、**Sketch** -> **Include Library** -> **Add .ZIP Library** に移動して、ダウンロードしたライブラリを選択します。

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