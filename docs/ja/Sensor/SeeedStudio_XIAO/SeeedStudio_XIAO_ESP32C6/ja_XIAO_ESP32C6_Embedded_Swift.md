---
description: XIAO ESP32C6 を使用して Embedded Swift を活用する
title: XIAO ESP32C6 と (Embedded) Swift
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png
slug: /ja/xiao-esp32-swift
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO-C6 と Embedded Swift のガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png" alt="pir" width={600} height="auto" /></p>

## はじめに

Seeed Studio XIAO ESP32C6 は、ESP32-C6 SoC を基盤とした強力で多用途な開発ボードで、デュアル 32 ビット **RISC-V** プロセッサを搭載しています。高性能プロセッサは最大 160 MHz で動作し、低消費電力プロセッサは最大 20 MHz で動作します。512KB SRAM と 4MB フラッシュを備えた XIAO ESP32C6 は、広範なプログラミングスペースを提供し、さまざまな IoT アプリケーションに最適です。このボードは、2.4 GHz Wi-Fi 6、Bluetooth® 5.3、Zigbee、Thread (802.15.4) をサポートする無線接続に優れ、スマートホームの相互運用性に重要な Matter にもネイティブ対応しています。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

[Swift](https://www.swift.org/) は、Apple Inc. によって開発された強力で直感的なプログラミング言語で、iOS、macOS、watchOS、tvOS などのソフトウェア開発に使用されます。[WWDC2024](https://developer.apple.com/wwdc24/) では、Apple が Embedded Swift を発表しました。これは、組み込みシステムや IoT の世界に Swift をもたらすことを目的としたオープンソースプロジェクトです。Embedded Swift は、オペレーティングシステムがなく、利用可能なリソースが最小限のマイクロコントローラ上で Swift を使用できるようにします。現在、公式の swift-embedded-examples は、STM32、Raspberry Pi Pico、Nordic Semiconductor、さらには RISC-V ESP32 (ESP32C6) のハードウェアプラットフォームをサポートしています。

<div style={{ textAlign: 'center' }}>
<img width={680} src="https://user-images.githubusercontent.com/1186214/264192528-ec5673ba-eec5-422a-b28c-8c0a1e814d1c.png" alt="Embedded Swift のビジョン" />

<div style={{ marginTop: '-8px' }}><em>Swift 言語</em></div>

</div>  

<br></br>

Embedded Swift は以下のような利点を提供します：

- **パフォーマンスと使いやすさ**: C/C++ レベルのパフォーマンスを提供しながら、Swift のユーザーフレンドリーな構文と機能を維持します ([Swift Forums](https://forums.swift.org/t/accepted-a-vision-for-embedded-swift/68067))。
- **ライブラリとフレームワークの統合**: Swift は C/C++ ライブラリと直接リンクできるため、既存のフレームワークをシームレスに利用できます ([GitHub](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md))。
- **開発者の親和性**: すでに Swift に精通している開発者は、馴染みのある API とツールを活用して、迅速に Embedded Swift をプロジェクトに採用できます ([Swift.org](https://www.swift.org/getting-started/embedded-swift/))。

:::tip このガイドの目的

このページでは、以下をカバーします：

- 必要な開発環境のセットアップ方法。
- GPIO を使用した Blink の例を実行する方法。

:::

## 前提条件

Seeed Studio XIAO-C6 で Embedded Swift を始めるには、以下のスキルとセットアップが必要です：

- **Seeed Studio XIAO-C6**: このガイドの中心となるハードウェア。
- **USB-C ケーブル**: XIAO-C6 をコンピュータに接続するために必要です。
- **コンピュータ**: *Linux*、*macOS*、または Windows（**WSL2** を使用）を実行しているもの。
- **[ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/index.html)**: ESP32-C6 での開発にはバージョン 5.2（*推奨*）が必要です。[Espressif のウェブサイト](https://github.com/espressif/esp-idf)からダウンロードしてインストールできます。
- **[Swift Toolchain](https://www.swift.org/getting-started/embedded-swift/)**: コンピュータに Swift 6.0 がインストールされていることを確認してください。これは公式 Swift ウェブサイトまたはお使いのオペレーティングシステムのパッケージマネージャーから取得できます。

:::info インストールガイド

**ESP-IDF のインストール:**

- [Linux と macOS](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/linux-macos-setup.html) ページに従って ESP-IDF をインストールしてください。
- [Espressif ESP-IDF を使用した XIAO 開発ガイド](/ja/xiao_idf) を参照して詳細な手順を確認してください。

**Swift Toolchain のインストール:**

- [公式サイト](https://www.swift.org/install/) から Swift `release/6.0` ツールチェーンをインストールしてください。

Docker ソリューションを好む場合は、`apple/swift-matter-examples/` の [Dockerfile](https://github.com/apple/swift-matter-examples/blob/main/Dockerfile) を参照してください。
:::

セットアップと開発プロセスをスムーズに進めるために、必要な前提条件がすべて揃っていることを確認してください。

:::caution 注意

このページでは、Ubuntu 22.04 Jammy Linux（WSL2）で Embedded Swift をセットアップして使用する手順を説明します。

:::

### ESP-IDF のインストール

```shell
#!/bin/bash
# 必要なパッケージを更新およびインストール
sudo apt-get update
sudo apt-get install -y git wget flex bison gperf python3 python3-pip python3-venv python3.10-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0

# ESP-IDF リポジトリをクローン
cd ~
git clone --recursive https://github.com/espressif/esp-idf.git --jobs 10
cd esp-idf
git checkout v5.2.1; git submodule update --init --recursive

# ESP-IDF のインストールスクリプトを実行
cd ~/esp-idf && ./install.sh

# ESP-IDF 環境のエイリアスを設定
echo 'alias get_idf=". ~/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc

echo "インストールが完了しました。'get_idf' を使用して ESP-IDF 環境を設定してください。"
```

### Swift 6.0 のインストール

以下のスクリプトを直接実行して Swift 6.0 をインストールできます。

```shell
#!/bin/bash
# Swift 6.0 スナップショットをダウンロード
wget https://download.swift.org/swift-6.0-branch/ubuntu2204/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

# アーカイブを展開
tar -xvzf swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

sudo mv swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04 $HOME/swift-6.0

# PATH を更新
echo 'export PATH=$HOME/swift-6.0/usr/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# インストールを確認
swift --version

echo "Swift 6.0 のインストールが完了しました。"
```

## Swiftで初めてのBlinkプログラムを実行する

### ステップ 1. サンプルを取得する

```shell showLineNumbers
get_idf #idf環境を取得
cd ~ && git clone https://github.com/apple/swift-embedded-examples.git #GitHubリポジトリを取得
cd ~/swift-embedded-examples/esp32-led-blink-sdk
```

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/apple/swift-embedded-examples" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHubリポジトリ</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### ステップ 2. サンプルをビルドする

ユーザーLEDがGPIO15に接続されているため、コードを以下のように修正する必要があります: `let led = Led(gpioPin: 15)`:

```swift
@_cdecl("app_main")
func app_main() {
    print("Hello from Swift on ESP32-C6!")

    var ledValue: Bool = false
    let blinkDelayMs: UInt32 = 500
    let led = Led(gpioPin: 15)

    while true {
        led.setLed(value: ledValue)
        ledValue.toggle() // ブール値を切り替える
        vTaskDelay(blinkDelayMs / (1000 / UInt32(configTICK_RATE_HZ)))
    }
}
```

その後、ファームウェアをビルドします:

```shell
idf.py set-target esp32c6
idf.py build
```

:::info 問題発生？
もし`/bin/sh: 1: -target: not found`という問題が発生した場合は、ビルドフォルダ内にある`build.ninja`ファイルを編集することで解決できます。

`-target`というキーワードを見つけて、その前に`swiftc`キーワードを追加してください。結果として`swiftc -target ...`のようになります。この調整で問題が解決するはずです。
:::

ファームウェアがXIAO C6に書き込まれる準備が整い、`Project build complete.`というプロンプトが表示されます。

### ステップ 3. ファームウェアを書き込む

<details>
<summary>WSL2を使用する場合はusbipdが必要です</summary>

WSL2を使用している場合は、[usbipd](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/WSL.md#usbipd)をインストールする必要があります。

インストールするには、Windowsパッケージマネージャーを使用して以下のコマンドを実行します:
```shell
winget install usbipd
```

インストール後、USBデバイスを共有するには以下を使用します:
```shell
usbipd list #BUSIDを確認
usbipd bind -b '<BUSID>'
```

WSL2内からデバイスをアタッチするには以下を使用します:
```shell
usbipd attach --wsl --busid=<BUSID>
```

共有されているポートを確認するには以下を使用します:
```shell
dmesg | tail
# dmesg | tail -n 100 | sed -n 's/.*\(ttyACM[0-9]*\).*/\1/p'
```
</details>

`ttyACM0`が検出されたと仮定すると、コマンドは以下のようになります:

```shell
idf.py -p /dev/ttyACM0 flash monitor
```

*このコマンドは以下を行います:*
1. ttyACM0に接続されたデバイスにファームウェアを書き込む。
2. デバイスからのシリアル出力を監視し、print文やログを表示する。

### デモンストレーション

<center>
<iframe width="407" height="724" src="https://www.youtube.com/embed/byqY2bYfVjA" title="Embedded Swift on XIAO ESP32C6 #Swift #Embedded #ESP32C6 #iot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

## 参考

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

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>