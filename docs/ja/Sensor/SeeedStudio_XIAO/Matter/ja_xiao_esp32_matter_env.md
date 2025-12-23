---
description: ESP-Matter環境のインストールと設定方法を紹介します。
title: XIAO ESP32 シリーズでのMatter開発
keywords:
- ESP-IDF
- matter
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32_matter_env
last_update:
  date: 05/15/2024
  author: Citric
---

# XIAO ESP32 シリーズでのMatter開発

:::tip
この記事は、Seeed Studio XIAO ESP32開発Matterシリーズの3番目のチュートリアルです。前のチュートリアルを読んでいない場合は、まずそれらを読んで、デバイスが要求通りに設定されていることを確認することをお勧めします。

- **[Espressif ESP-IDFを使用したXIAOでの開発](https://wiki.seeedstudio.com/ja/xiao_idf)**
- **[XIAO ESP32 シリーズでMatterを素早く始める](https://wiki.seeedstudio.com/ja/getting_started_with_matter)**

:::

急速に進化するモノのインターネット（IoT）の世界において、スマートホームデバイスの通信と相互作用の方法を革命的に変える新しいプレイヤーが登場しました。Matterは、さまざまなスマートホームエコシステム間のギャップを埋め、世界中のユーザーにシームレスで相互運用可能な体験を提供することを約束する統一プロトコルです。

では、Matterとは正確に何で、なぜIoTコミュニティでこれほど多くの興奮を生み出しているのでしょうか？Matterは、異なるメーカーのスマートホームデバイスが努力なく連携できるようにするオープンソースの標準化されたプロトコルです。通信のための共通言語とフレームワークを提供することで、IoTデバイスの開発と展開を簡素化することを目的としています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-stack.png" style={{width:700, height:'auto'}}/></div>

- スマートホームデバイス用の通信プロトコル。
- 2回延期された後、2022年10月4日に1.0バージョンがリリース。
- 標準化されたコマンドセットにより、異なるメーカーのデバイス同士が通信可能。
- Thread、Wi-Fi、またはEthernetを使用してIPネットワーク上で動作。
- セキュリティ・バイ・デザインとゼロトラストを使用。
- ローカルで動作 - 通常はMatterハブ経由でクラウドに接続。
- Zigbee、Z-Wave、433MHzなどの他のスマートホーム標準と共存。
- バッテリー寿命と範囲は無線ネットワーク技術に依存。
- Matterハブによって調整。

Matterの価値提案は明確です：より接続され、ユーザーフレンドリーで安全なスマートホーム体験への道を提供します。Matterを採用することで、デバイスメーカーは自社製品がAmazon Alexa、Google Home、Apple HomeKitなどの幅広いスマートホームプラットフォームやアシスタントと互換性があることを保証できます。この相互運用性は消費者に利益をもたらすだけでなく、IoT分野の開発者や企業にとって新しい機会も開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-network.jpg" style={{width:800, height:'auto'}}/></div>

開発者として、Matterを採用することは、デバイスとサービスの広大なエコシステムを活用することを意味し、既存のスマートホームセットアップとシームレスに統合できる革新的なソリューションを作成できます。Matterの力を活用することで、デバイス通信と互換性の複雑さを心配するのではなく、魅力的なユーザー体験と機能の構築に集中できます。

Matter開発の旅を始めるには、適切なツールと環境が必要です。このチュートリアルでは、IoTアプリケーション専用に設計されたコンパクトで強力なボードであるSeeed Studio XIAO ESP32C6を使用してMatter開発環境をセットアップするプロセスをガイドします。ESP32-C6マイクロコントローラーと豊富な周辺インターフェースを備えたXIAO ESP32C6は、Matter対応デバイスの開発に理想的な選択肢です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Thread-matter-smart-homes.png" style={{width:800, height:'auto'}}/></div>

以下のセクションでは、必要なソフトウェアのインストール、Seeed Studio XIAO ESP32C6ボードのセットアップ、最初のMatterサンプルプログラムの実行など、Matter開発環境を設定する手順を説明します。このチュートリアルの終わりまでに、独自のMatterデバイスの構築を開始し、相互運用可能なスマートホームソリューションの成長するエコシステムに貢献するための堅実な基盤を持つことになります。

それでは、Seeed Studio XIAO ESP32C6でMatter開発の可能性を解き放ちましょう！

## ソフトウェアの準備

以下に、この記事で使用するシステムバージョン、ESP-IDFバージョン、ESP-Matterバージョンを参考として一覧表示します。これは正常に動作することがテストされた安定版です。

- **ホスト**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)。
- **ESP-IDF**: タグ [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1)。
- **ESP-Matter**: mainブランチ、2024年5月10日時点、コミット [bf56832](https://github.com/espressif/esp-matter/commit/bf568327d41ca29167fcf2743ace1941432e4aa5)。
- **connectedhomeip**: 現在、2024年5月10日時点でコミット [13ab158f10](https://github.com/project-chip/connectedhomeip/tree/13ab158f10) で動作。
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## ハードウェアの準備

このセクションでは、Ubuntu環境でESP-IDFの使用を設定し、ESP-IDFが提供する照明サンプルを実行する方法を詳しく説明します。そのため、この記事では以下のXIAO ESP32シリーズのいずれかを準備するだけで十分です。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32-C3</th>
   <th>XIAO ESP32-S3</th>
   <th>XIAO ESP32-C5</th>
    <th>XIAO ESP32-C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/3-100010048-Seeed-Studio-XIAO-ESP32C5.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

XIAOに加えて、WS281xモデルのライトバーまたはライトビーズも必要です。現在、Espressifが提供するライトサンプルは単一のビーズのみをサポートしているため、ストリップまたはビーズのどちらを使用しても、1つのライトのみが点灯します。配線を簡単にするために、Grove Base for XIAOも入手することをお勧めします。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Base for XIAO</th>
   <th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a></div></td>
  </tr>
 </table>
</div>

インターフェースを統一するため、この例では**D9**ピンを使用します。LEDストリップまたはビーズをXIAOの**D9**ピンに接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

## ビデオチュートリアル

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/g9hBp84xs1E?si=fzE--HA7v8H8R090?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ESP-Matterのステップバイステップインストール

:::tip
Matterの環境インストールを開始する前に、[ESP-IDFプログラミング環境をインストールしてアクセスできる](https://wiki.seeedstudio.com/ja/xiao_idf/#step-5-set-up-environment-variables)ことを確認してください。
:::

:::tip
ESP-IDF環境をセットアップする際は、使用しているXIAOボードが現在のMatter環境と互換性があることを確認する必要があります。例えば、XIAO ESP32-C5とXIAO ESP32-C6を使用する場合、このwikiを書いている時点でサポートされている最新バージョンはESP-IDF v5.5.1です。詳細については、[サポートされているESP-IDFとconnectedhomeipバージョン](https://github.com/espressif/esp-matter)をご覧ください。
:::

### ステップ 1. 依存関係のインストール

まず、`apt-get` を使用して必要なパッケージをインストールする必要があります。ターミナルを開いて、以下のコマンドを実行してください：

```bash
sudo apt-get install git gcc g++ pkg-config libssl-dev libdbus-1-dev \
     libglib2.0-dev libavahi-client-dev ninja-build python3-venv python3-dev \
     python3-pip unzip libgirepository1.0-dev libcairo2-dev libreadline-dev
```

このコマンドは、`git`、コンパイラ（`gcc`、`g++`）、Matter SDK のビルドと実行に必要なライブラリなど、さまざまなパッケージをインストールします。

### ステップ 2. ESP-Matter リポジトリのクローン

GitHub から `esp-matter` リポジトリを `git clone` コマンドで深度 1 でクローンし、最新のスナップショットのみを取得します：

```bash
cd ~/esp
git clone --depth 1 https://github.com/espressif/esp-matter.git
```

`esp-matter` ディレクトリに移動し、必要な Git サブモジュールを初期化します：

```bash
cd esp-matter
git submodule update --init --depth 1
```

`connectedhomeip` ディレクトリに移動し、特定のプラットフォーム用のサブモジュールを管理する Python スクリプトを実行します：

```bash
cd ./connectedhomeip/connectedhomeip
./scripts/checkout_submodules.py --platform esp32 linux --shallow
```

このスクリプトは、ESP32 と Linux プラットフォームの両方のサブモジュールを浅い方法（最新のコミットのみ）で更新します。

### ステップ 3. ESP-Matter のインストール

`esp-matter` ルートディレクトリに戻り、インストールスクリプトを実行します：

```bash
cd ../..
./install.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/1.png" style={{width:1000, height:'auto'}}/></div>

このスクリプトは、ESP-Matter SDK 固有の追加の依存関係をインストールします。

### ステップ 4. 環境変数の設定

`export.sh` スクリプトをソースして、開発に必要な環境変数を設定します：

```bash
source ./export.sh
```

このコマンドは、必要な環境パスと変数でシェルを設定します。

### ステップ 5（オプション）. ESP-Matter 開発環境への簡単アクセス

提供されたエイリアスと環境変数設定を `.bashrc` ファイルに追加するには、以下の手順に従ってください。これにより、IDF と Matter 開発セットアップ間の簡単な切り替えが可能になり、より高速なビルドのために ccache が有効になります。

ターミナルを開き、テキストエディタを使用してホームディレクトリにある `.bashrc` ファイルを開きます。`nano` または任意のエディタを使用できます。例：

```bash
nano ~/.bashrc
```

`.bashrc` ファイルの最下部までスクロールし、以下の行を追加します：

```bash
# Alias for setting up the ESP-Matter environment
alias get_matter='. ~/esp/esp-matter/export.sh'

# Enable ccache to speed up compilation
alias set_cache='export IDF_CCACHE_ENABLE=1'
```

行を追加した後、ファイルを保存してテキストエディタを終了します。`nano` を使用している場合は、`Ctrl+O` を押して保存し、`Enter` を押して確認し、`Ctrl+X` で終了できます。

変更を有効にするには、`.bashrc` ファイルを再読み込みする必要があります。`.bashrc` ファイルをソースするか、ターミナルを閉じて再度開くことで実行できます。`.bashrc` ファイルをソースするには、以下のコマンドを使用します：

```bash
source ~/.bashrc
```

これで、任意のターミナルセッションで `get_matter` と `set_cache` を実行して、esp-matter 環境を設定または更新できます。

```bash
get_matter
set_cache
```

## ライトサンプルの実行

Matter 環境が設定されたら、サンプルアプリケーション light をコンパイルしてアップロードし、動作を確認できます。

### ステップ 1. プロジェクトパラメータの設定

`examples/light` ディレクトリに移動します。

```bash
cd examples/light                # Navigate to the light example directory
```

以前のビルドファイルを削除するためにクリーン操作を実行します。

```bash
rm -rf build/                     # Clean previous build files
```

ターゲットを ESP32-C6 に設定します。

```bash
idf.py set-target esp32c6        # Set the build target to ESP32-C6
```

設定メニューに入り、必要な設定を行います。

```bash
idf.py menuconfig                # Enter the configuration menu
```

`menuconfig` 内で、`Channel for console oputput` オプションを見つけて有効にする必要があります。通常、このオプションは **Component config** -> **ESP System Settings** の下にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/7.png" style={{width:1000, height:'auto'}}/></div>

1. 矢印キーを使用してオプションに移動します。
2. スペースまたは Enter を押してオプションを選択します：`USB Serial/JTAG Controller`。

異なる XIAO の場合、GPIO ピン番号も更新する必要があります。このオプションは **Component config -> Board Support Package (generic) -> LEDs** の下にあります。

- XIAO ESP32-C3 の場合、D9 の GPIO は 9 です。
- XIAO ESP32-S3 の場合、D9 の GPIO は 8 です。
- XIAO ESP32-C5 の場合、D9 の GPIO は 9 です。
- XIAO ESP32C6 の場合、D9 の GPIO は 20 です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/33.png" style={{width:1000, height:'auto'}}/></div>

1. 矢印キーを使用してオプションに移動します。
2. スペースまたは Enter を押して GPIO 番号を入力します。
3. 必要なオプションを有効にした後、`q` を押して `menuconfig` を終了し、`y` を押します。

### ステップ 2. サンプルアプリケーションのコンパイルとアップロード

ビルドとフラッシュプロセスを続行します：

```bash
idf.py build                      # Build the project
```

コンパイルが正常に進むと、以下の結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/2.png" style={{width:1000, height:'auto'}}/></div>

その後、プログラムをアップロードできます。

```bash
idf.py -p /dev/ttyACM0 flash monitor  # Flash the firmware and monitor the output
```

異なる場合は、`/dev/ttyACM0` を XIAO ESP32 に対応する実際の USB デバイスファイルに置き換えてください。

すべての指示に注意深く従い、次のステップに進む前に各ステップが正常に完了することを確認してください。エラーが発生した場合は、続行する前に解決する必要があります。

:::tip
Matter のファームウェアをフラッシュする過程で、権限がない状況に遭遇する可能性があります。その場合は、以下のコマンドを使用してデバイスのポートに権限を与え、プログラムを再度アップロードしてください。デバイスが接続されたり再起動されたりすると、権限を再度与える必要がある場合があります。

```
sudo chmod 666 /dev/ttyACM0       # Grant permissions to the USB device file
```

異なる場合は、`/dev/ttyACM0` を XIAO ESP32 に対応する実際の USB デバイスファイルに置き換えてください。
:::

おめでとうございます。ファームウェアのフラッシュに成功した場合、モニターでターミナルにデバッグログ出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/3.png" style={{width:1000, height:'auto'}}/></div>

次に、matter コマンドと chip-tool を使用して Matter デバイスを設定し、Matter デバイスのデバッグと確認を完了する方法を学習します。

## ホスト制御とデバイスコミッショニング

`menuconfig` で Channel for `console oputput to USB Serial` を設定した目的は、USB インターフェースを使用して XIAO を制御し、ネットワークへの参加設定やその他のデバッグを行えるようにすることです。このステップは重要で、シリアルツールを使用してデバイスにコマンドを発行できるかどうかを決定します。

これらは、ケーブル経由で接続してデバイスを直接制御するコマンドで、通常 `matter` で始まります。

### 一般的なコマンド

- BLE コマンド：BLE アドバタイズメントの開始と停止：

 ```
 matter ble [start|stop|state]
 ```

- Wi-Fi コマンド：Wi-Fi モードの設定と取得：

 ```
 matter wifi mode [disable|ap|sta]
 ```

- デバイス設定：デバイスの静的設定をダンプ：

 ```
 matter config
 ```

- ファクトリーリセット：

 ```
 matter device factoryreset
 ```

- オンボーディングコード：オンボーディングペアリングコードペイロードをダンプ：

 ```
 matter onboardingcodes
 ```

- 属性取得：（ID は 16 進数）：

 ```
 matter esp attribute get <endpoint_id> <cluster_id> <attribute_id>
 ```

  - 例：on_off::on_off：

  ```
  matter esp attribute get 0x1 0x6 0x0
  ```

- 属性設定：（ID は 16 進数）：

 ```
 matter esp attribute set <endpoint_id> <cluster_id> <attribute_id> <attribute value>
 ```

  - 例：on_off::on_off：

  ```
  matter esp attribute set 0x1 0x6 0x0 1
  ```

- 診断：

 ```
 matter esp diagnostics mem-dump
 ```

- Wi-Fi

 ```
 matter esp wifi connect <ssid> <password>
 ```

### 使用方法

#### ステップ 1. Minicom のインストール

Minicom は、Unix 系オペレーティングシステム用のテキストベースのモデム制御およびターミナルエミュレーションプログラムです。Minicom をインストールすることで、XIAO に Matter 制御コマンドを簡単に送信できます。Ubuntu に Minicom をインストールするには、ターミナルを開いて以下のコマンドを入力します：

```bash
sudo apt update
sudo apt install minicom
```

このコマンドは、パッケージリストを更新し、Minicom をインストールします。

#### ステップ 2. ユーザー権限の設定

非 root ユーザーが `ttyACM0` などのシリアルポートにアクセスできるようにするには、ユーザーを `dialout` グループに追加する必要があります。以下のコマンドで実行できます：

```bash
sudo usermod -a -G dialout $USER
```

`$USER` をユーザー名に置き換えるか、現在ログインしているユーザーに適用する場合は省略してください。このコマンドを実行した後、グループ変更を有効にするために**ログアウトして再度ログインする必要があります**。

#### ステップ 3. Minicom の設定

次に、`ttyACM0` ポートを使用するように Minicom を設定する必要があります。以下のコマンドで Minicom をセットアップモードで実行します：

```bash
sudo minicom -s
```

セットアップメニューで、以下の手順に従います：

1. **Serial port setup** を選択します。
2. 'A' を押してシリアルデバイスを `/dev/ttyACM0` に変更します。
3. 必要に応じて他の設定を調整します。デフォルト設定は通常 9600 8N1（9600 ボー、パリティなし、8 データビット、1 ストップビット）です。ボーレートを **115200** に変更するだけです。
4. 'Enter' を押してこの画面を終了します。

#### ステップ 4. 設定の保存

シリアルポートを設定した後：

1. **Save setup as dfl** を選択して、これをデフォルト設定にします。
2. **Exit from Minicom** を選択して Minicom セットアップを終了します。

#### ステップ 5：Minicom の実行

デフォルト設定でMinicomを開始するには、次のように入力します：

```bash
minicom
```

sudo権限で実行する必要がある場合（例：権限の問題が発生した場合）、次のコマンドを使用できます：

```bash
sudo minicom
```

Minicomを終了するには、`Ctrl-A`を押してから`Z`を押してヘルプメニューを表示し、`X`を押してプログラムを終了します。

#### ステップ6. XIAOの配信ネットワークの設定

次のコマンドを使用してXIAOをネットワークに接続します。ネットワークを選択する際は、2.4Gネットワーク接続を選択できます。

:::tip
このチュートリアルでは、デュアルバンド2.4G & 5G WiFiをサポートするXIAO ESP32-C5を除き、すべてのXIAOシリーズボードは2.4G WiFiのみをサポートします。
:::

```
matter esp wifi connect <ssid> <password>
```

ペアリングが成功した後、次のコマンドを使用してMatterデバイスの非常に重要な情報を照会できます：**VendorID**、**ProductId**、**Discriminator**、**PinCode**。この情報は、Chip-toolツールでデバッグする際にデバイスをペアリングするのに役立ちます。

```
matter config
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/8.png" style={{width:1000, height:'auto'}}/></div>

最後に、次のコマンドを使用してオンボーディングペアリングコードペイロードをダンプします。

```
matter onboardingcodes onnetwork
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/9.png" style={{width:1000, height:'auto'}}/></div>

ここで最後に表示されるのは、デバイスのペアリングQRコードへのリンクです。QRコードを使用して、[入門ガイド](https://wiki.seeedstudio.com/ja/getting_started_with_matter/#step-2-add-a-device-by-scanning-the-code-using-the-iphone-home-app)の手順と同様に、携帯電話でコードをスキャンしてMatterデバイスをバインドできます。

## Chip-toolを使用したMatterデバイスのリモートデバッグ

Matterデバイスはスマートホームの重要な部分であり、デバッグと設定のために常にデータケーブルを使用するのは実用的ではありません。Matterデバッグツールの中で最も一般的に使用されるのはChip-toolで、デバイスが接続されているときにリモートでデバッグするのに役立ちます。

Chip-toolコマンドは通常Chip-toolスクリプトを必要とするため、通常`chip-tool`で始まります。

### IP経由でデバイスをペアリング

以下のコマンドはデバイスを発見し、提供されたセットアップコードを使用して最初に発見したデバイスとのペアリングを試行します：

```
chip-tool pairing onnetwork ${NODE_ID_TO_ASSIGN} 20202021
```

以下のコマンドは長い識別子3840を持つデバイスを発見し、提供されたセットアップコードを使用して最初に発見したデバイスとのペアリングを試行します：

```
chip-tool pairing onnetwork-long ${NODE_ID_TO_ASSIGN} 20202021 3840
```

以下のコマンドは指定されたQRコード（デバイスが起動時にログに記録するもの）に基づいてデバイスを発見し、最初に発見したデバイスとのペアリングを試行します。

```
chip-tool pairing code ${NODE_ID_TO_ASSIGN} MT:#######
```

これらすべての場合において、デバイスにはノードID `${NODE_ID_TO_ASSIGN}`が割り当てられます（これは10進数または0x接頭辞付きの16進数である必要があります）。

### 現在コミッションされているデバイスを忘れる

```
chip-tool pairing unpair
```

### クライアントを使用してMatterコマンドを送信

クライアントを使用してMatterコマンドを送信するには、ビルドされた実行可能ファイルを実行し、ターゲットクラスタ名、ターゲットコマンド名、およびエンドポイントIDを渡します。

エンドポイントIDは1から240の間である必要があります。

```
chip-tool onoff on 1
```

クライアントは単一のコマンドパケットを送信してから終了します。

### 使用方法

Chip-toolでデバッグする準備ができたら、XIAOをコンピュータから切断し、電源に接続できます。

最初のステップとして、デバイスをマッチングする必要があります。これは上記の[IP経由でデバイスをペアリング](#IP経由でデバイスをペアリング)セクションの任意の方法を使用して行うことができます。

例えば、私は次のコマンドを使用します。

```
chip-tool pairing onnetwork-long 0x12 20202021 3840
```

この場合、デバイスにはノードID `0x12`が割り当てられます（これは10進数または0x接頭辞付きの16進数である必要があります）。20202021はPinCodeで、3840はDiscriminatorです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/5.png" style={{width:1000, height:'auto'}}/></div>

最後に、次のコマンドでライトのオン/オフを制御できることを確認します。

ライトをオンにする：

```
chip-tool onoff on 0x12 0x1
```

ライトをオフにする：

```
chip-tool onoff off 0x12 0x1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/6.png" style={{width:1000, height:'auto'}}/></div>

0x12は、マッチング時にデバイスに割り当てられたノードIDです。

皆さん、おめでとうございます。ここで実行したチュートリアルの手順により、ESP-Matterの開発フレームワークの一般的な手順とデバッグツールの使用について基本的な理解を得られたと思います。まだ理解できない部分や慣れていない部分がある場合は、今後のチュートリアルで引き続き使用方法をガイドしますので、お楽しみに！

## トラブルシューティング

### Q1: 環境のインストール中にさまざまなエラーが発生するのはなぜですか？

ESP-Matterの環境は少し要求が厳しく、開発によく使用されるUbuntuホストを使用している場合、一部のPython依存関係の異なるバージョンによりエラーが発生する可能性があります。MatterフレームワークはSeeedによって開発されていないため、この部分の問題については私たちにできることはおそらくありません。インストールで問題が発生した場合は、公式の**[ESP-Matterリポジトリ](https://github.com/espressif/esp-matter)**にissueを提出してヘルプを求めることをお勧めします。

### Q2: コンポーネントの解決に失敗

v4.xからv5.0+にアップグレード後、多くの機能モジュール（mqtt、json、esp_https_serverなど）がコアフレームワークから削除され、独立したコンポーネントに変換されました。その結果、コンパイル中にコンポーネント依存関係の欠落エラーが発生する可能性があります。エラーメッセージに従って不足しているコンポーネントを追加できます。<br/>
参考：[The ESP Component Registry](https://components.espressif.com/)

### Q3: Matterの環境をアンインストールするにはどうすればよいですか？

`./install.sh`スクリプトを実行してPython環境の設定ステップで停止してしまう場合は、Matterの[バージョン](#prepare-the-software)がconnectedhomeipのバージョンと一致しているかを確認する必要があります。

リセットする簡単な方法は、次のコマンドを実行することです。

```
rm -r connectedhomeip/connectedhomeip/.environment
```

その後、適切なバージョンのconnectedhomeipブランチを再度プルします。

```
git submodule update --init --depth 1
```

それでもうまくいかない場合は、esp-matterフォルダ全体を削除し、Wikiの内容に従って再度実行してください。

## リソース

- **[ESPRESSIF Matter - Developing with the SDK](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#)**

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
