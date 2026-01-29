---
description: XIAO ESP32C6 で Embedded Swift を活用する
title: XIAO ESP32C6 と (Embedded) Swift
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png
slug: /ja/xiao-esp32-swift
sku: 113991254, 102010636, 101991470
last_update:
  date: 2024-07-12T02:50:00.462Z
  author: Spencer
---
# Seeed Studio XIAO-C6 での Embedded Swift ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png" alt="pir" width={600} height="auto" /></p>

## はじめに

Seeed Studio XIAO ESP32C6 は、ESP32-C6 SoC を搭載した強力で多用途な開発ボードで、デュアル 32 ビット **RISC-V** プロセッサを特徴としています。高性能プロセッサは最大 160 MHz で動作し、低消費電力プロセッサは最大 20 MHz で動作します。512KB SRAM と 4MB Flash を搭載した XIAO ESP32C6 は、大きなプログラミング領域を提供し、様々な IoT アプリケーションに最適です。このボードは無線接続に優れており、2.4 GHz Wi-Fi 6、Bluetooth® 5.3、Zigbee、Thread (802.15.4) をサポートし、Matter ネイティブであるため、スマートホームの相互運用性において重要です。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

[Swift](https://www.swift.org/) は、Apple Inc. によって開発された強力で直感的なプログラミング言語で、iOS、macOS、watchOS、tvOS、およびそれ以外のソフトウェア開発に使用されます。[WWDC2024](https://developer.apple.com/wwdc24/) で、Apple は Embedded Swift を発表しました。これは Swift を組み込みシステムと IoT の世界に持ち込むことを目的としたオープンソースプロジェクトです。オペレーティングシステムがなく、利用可能なリソースが最小限のマイクロコントローラーで Swift を使用できるようにします。現在、公式の swift-embedded-examples は STM32、Raspberry Pi Pico、Nordic Semiconductor、さらには RISC-V ESP32（ESP32C6）のハードウェアプラットフォームをサポートしています。

<div style={{ textAlign: 'center' }}>
<img width={680} src="https://user-images.githubusercontent.com/1186214/264192528-ec5673ba-eec5-422a-b28c-8c0a1e814d1c.png" alt="Vision of Embedded Swfit " />

<div style={{ marginTop: '-8px' }}><em>Swift Language</em></div>

</div>  

<br></br>

Embedded Swift にはいくつかの利点があります：

- **パフォーマンスと使いやすさ**: Swift の使いやすい構文と機能を維持しながら、C/C++ レベルのパフォーマンスを提供します（[Swift Forums](https://forums.swift.org/t/accepted-a-vision-for-embedded-swift/68067)）。
- **ライブラリとフレームワークの統合**: Swift が C/C++ ライブラリと直接リンクする能力により、開発者は既存のフレームワークをシームレスに活用できます（[GitHub](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)）。
- **開発者の親しみやすさ**: すでに Swift に習熟している開発者は、馴染みのある API とツールを活用して、Embedded Swift を自分のプロジェクトに迅速に採用できます（[Swift.org](https://www.swift.org/getting-started/embedded-swift/)）。

:::tip このガイドの目的

このページでは、以下の内容をカバーします：

- 必要な開発環境のセットアップ方法。
- GPIO ベースの Blink サンプルの実行。

:::

## 前提条件

Seeed Studio XIAO-C6 で Embedded Swift を始めるには、以下のスキルとセットアップが必要です：

- **Seeed Studio XIAO-C6**: このガイドのコアハードウェア。
- **USB-C ケーブル**: XIAO-C6 をコンピューターに接続するため。
- **コンピューター**: *Linux*、*macOS*、または Windows（**WSL2** を使用）を実行している。
- **[ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/index.html)**: ESP32-C6 での開発にはバージョン 5.2（*推奨*）が必要です。[Espressif ウェブサイト](https://github.com/espressif/esp-idf)からダウンロードしてインストールできます。
- **[Swift Toolchain](https://www.swift.org/getting-started/embedded-swift/)**: コンピューターに Swift 6.0 がインストールされていることを確認してください。これは公式 Swift ウェブサイトまたはオペレーティングシステムのパッケージマネージャーから入手できます。

:::info インストールガイド

**ESP-IDF インストール:**

- ESP-IDF をインストールするには [Linux and macOS](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/linux-macos-setup.html) ページに従ってください
- 詳細な手順については [Espressif ESP-IDF を使用した XIAO での開発ガイド](/ja/xiao_idf) に従ってください。

**Swift Toolchain インストール:**

- [公式サイト](https://www.swift.org/install/)から Swift `release/6.0` ツールチェーンをインストールしてください。

Docker ソリューションをお好みの場合は、`apple/swift-matter-examples/` の [Dockerfile](https://github.com/apple/swift-matter-examples/blob/main/Dockerfile) を参照してください
:::

進行する前に、スムーズなセットアップと開発プロセスのために必要なすべての前提条件が揃っていることを確認してください。

:::caution 注意

このページでは、Ubuntu 22.04 Jammy Linux（WSL2）での Embedded Swift のセットアップと使用について説明します。

:::

### ESP-IDF のインストール

```shell
#!/bin/bash
# Update and install required packages
sudo apt-get update
sudo apt-get install -y git wget flex bison gperf python3 python3-pip python3-venv python3.10-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0

# Clone the ESP-IDF repository
cd ~
git clone --recursive https://github.com/espressif/esp-idf.git --jobs 10
cd esp-idf
git checkout v5.2.1; git submodule update --init --recursive

# Run the install script for ESP-IDF
cd ~/esp-idf && ./install.sh

# Set up alias for ESP-IDF environment
echo 'alias get_idf=". ~/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc

echo "Installation complete. Use 'get_idf' to set up the ESP-IDF environment."
```

### Swift 6.0のインストール

このスクリプトを直接実行することで、Swift 6.0をインストールできます。

```shell
#!/bin/bash
# Download the Swift 6.0 Snapshot
wget https://download.swift.org/swift-6.0-branch/ubuntu2204/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

# Extract the Tarball
tar -xvzf swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

sudo mv swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04 $HOME/swift-6.0

# Update PATH
echo 'export PATH=$HOME/swift-6.0/usr/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Verify Installation
swift --version

echo "Swift 6.0 installation complete."
```

## Swift で最初の Blink プログラムを実行する

### ステップ 1. サンプルを取得します

```shell showLineNumbers
get_idf #get idf enviorment
cd ~ && git clone https://github.com/apple/swift-embedded-examples.git #get GitHub repo
cd ~/swift-embedded-examples/esp32-led-blink-sdk
```

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/apple/swift-embedded-examples" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub Repository</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### ステップ 2. サンプルをビルドする

ユーザーLEDはGPIO15に接続されているため、コードを `let led = Led(gpioPin: 15)` に変更する必要があります：

```swift
@_cdecl("app_main")
func app_main() {
    print("Hello from Swift on ESP32-C6!")

    var ledValue: Bool = false
    let blinkDelayMs: UInt32 = 500
    let led = Led(gpioPin: 15)

    while true {
        led.setLed(value: ledValue)
        ledValue.toggle() // Toggle the boolean value
        vTaskDelay(blinkDelayMs / (1000 / UInt32(configTICK_RATE_HZ)))
    }
}
```

その後、ファームウェアをビルドできます：

```shell
idf.py set-target esp32c6
idf.py build
```

:::info issue?
`/bin/sh: 1: -target: not found` の問題が発生した場合、ビルドフォルダにある `build.ninja` ファイルを編集することで解決できます。

キーワード `-target` を見つけて、その前に `swiftc` キーワードを追加し、`swiftc -target ...` となるようにしてください。この調整により問題が解決されるはずです。
:::

`Project build complete.` のプロンプトが表示されたら、XIAO C6にファームウェアを書き込むことができます。

### ステップ 3. ファームウェアの書き込み

<details>
<summary>WSL2を使用する場合はusbipd が必要です</summary>

WSL2で作業している場合は、[usbipd](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/WSL.md#usbipd) をインストールする必要があります。

インストールするには、Windows Package Manager を使用して以下のコマンドを実行してください：

```shell
winget install usbipd
```

インストール後、以下を使用してUSBデバイスを共有します：

```shell
usbipd list #Check BUSID
usbipd bind -b '<BUSID>'
```

WSL2内からデバイスを接続するには：

```shell
usbipd attach --wsl --busid=<BUSID>
```

どのポートが共有されているかを確認するには：

```shell
dmesg | tail
# dmesg | tail -n 100 | sed -n 's/.*\(ttyACM[0-9]*\).*/\1/p'
```

</details>

`ttyACM0` が検出されたと仮定すると、コマンドは次のようになります：

```shell
idf.py -p /dev/ttyACM0 flash monitor
```

*このコマンドは以下を実行します：*

1. ttyACM0に接続されたデバイスにファームウェアをフラッシュします。
2. デバイスからのシリアル出力の監視を開始し、print文やログを表示します。

### デモンストレーション

<div class="video-container">
<iframe width="407" height="724" src="https://www.youtube.com/embed/byqY2bYfVjA" title="Embedded Swift on XIAO ESP32C6 #Swift #Embedded #ESP32C6 #iot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考資料

- [Embedded Swift Blog](https://www.swift.org/blog/embedded-swift-examples/)
- [A Vision for Embedded Swift](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)
- [swift-embedded-examples](https://github.com/apple/swift-embedded-examples)
- [esp32-led-blink-sdk - GitHub](https://github.com/apple/swift-embedded-examples/tree/main/esp32-led-blink-sdk)

## リソース

- [WWDC24: Go small with Embedded Swift - Apple YouTube](https://www.youtube.com/watch?v=LqxbsADqDI4&t)
- [Add support for Matter in your smart home app](https://developer.apple.com/videos/play/wwdc2021/10298)
- [Embedde Swift - Apple Forum](https://forums.swift.org/c/development/embedded/107)
- [Use C, C++ and Objective C Libraries in a Swift Project - Cecilia Humlelu - YouTube](https://www.youtube.com/watch?v=jcNxtM_yTfk)
- [Mixing Swift and C++](https://www.swift.org/documentation/cxx-interop/)
- [awesome-embedded-swift](https://github.com/Cosmo/awesome-embedded-swift)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
