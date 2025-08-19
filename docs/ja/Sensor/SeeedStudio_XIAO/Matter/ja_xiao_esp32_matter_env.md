---
description: ESP-Matter 環境のインストールと設定方法を紹介します。
title: XIAO ESP32 シリーズでの Matter 開発
keywords:
- ESP-IDF
- matter
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32_matter_env
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32 シリーズでの Matter 開発

:::tip
この記事は、Seeed Studio XIAO ESP32 開発シリーズの Matter に関する第 3 回目のチュートリアルです。以前のチュートリアルをまだ読んでいない場合は、まずそれらを読んで、デバイスが必要な設定を満たしていることを確認することをお勧めします。

- **[Espressif ESP-IDF を使用した XIAO での開発](https://wiki.seeedstudio.com/ja/xiao_idf)**
- **[XIAO ESP32 シリーズで Matter をすばやく始める](https://wiki.seeedstudio.com/ja/getting_started_with_matter)**
:::

急速に進化する IoT（モノのインターネット）の世界において、スマートホームデバイスが相互に通信し、連携する方法を革新する新しいプロトコルが登場しました。それが Matter です。この統一プロトコルは、さまざまなスマートホームエコシステム間のギャップを埋め、世界中のユーザーにシームレスで相互運用可能な体験を提供することを目指しています。

では、Matter とは具体的に何であり、なぜ IoT コミュニティでこれほど注目を集めているのでしょうか？Matter は、異なるメーカーのスマートホームデバイスが簡単に連携できるようにするオープンソースの標準化プロトコルです。共通の言語とフレームワークを提供することで、IoT デバイスの開発と展開を簡素化することを目的としています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-stack.png" style={{width:700, height:'auto'}}/></div>

- スマートホームデバイス向けの通信プロトコル。
- 1.0 バージョンは 2022 年 10 月 4 日にリリース（2 度の延期を経て）。
- 標準化されたコマンドセットにより、異なるメーカーのデバイスが相互に通信可能。
- Thread、Wi-Fi、または Ethernet を使用して IP ネットワーク上で動作。
- 「セキュリティ・バイ・デザイン」と「ゼロトラスト」を採用。
- ローカルで動作し、通常は Matter ハブを介してクラウドに接続。
- Zigbee、Z-Wave、433MHz などの他のスマートホーム標準と共存。
- バッテリー寿命と通信範囲は無線ネットワーク技術に依存。
- Matter ハブによって調整される。

Matter の価値提案は明確です。それは、より接続性が高く、ユーザーフレンドリーで安全なスマートホーム体験への道を提供します。Matter を採用することで、デバイスメーカーは自社製品が Amazon Alexa、Google Home、Apple HomeKit などの幅広いスマートホームプラットフォームやアシスタントと互換性を持つことを保証できます。この相互運用性は消費者に利益をもたらすだけでなく、IoT 分野の開発者や企業に新たな機会を提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-network.jpg" style={{width:800, height:'auto'}}/></div>

開発者として Matter を採用することは、デバイスやサービスの広大なエコシステムにアクセスし、既存のスマートホーム環境とシームレスに統合できる革新的なソリューションを作成することを意味します。Matter の力を活用することで、デバイスの通信や互換性の複雑さを心配することなく、魅力的なユーザー体験や機能の構築に集中できます。

Matter 開発を始めるには、適切なツールと環境が必要です。このチュートリアルでは、IoT アプリケーション向けに特別に設計されたコンパクトで強力なボードである Seeed Studio XIAO ESP32C6 を使用して Matter 開発環境を設定する手順を案内します。ESP32-C6 マイクロコントローラーと豊富な周辺インターフェースを備えた XIAO ESP32C6 は、Matter 対応デバイスの開発に最適な選択肢です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Thread-matter-smart-homes.png" style={{width:800, height:'auto'}}/></div>

以下のセクションでは、Matter 開発環境を構成する手順を説明します。必要なソフトウェアのインストール、Seeed Studio XIAO ESP32C6 ボードのセットアップ、最初の Matter サンプルプログラムの実行を含みます。このチュートリアルを終える頃には、自分自身の Matter デバイスを構築し、相互運用可能なスマートホームソリューションの成長するエコシステムに貢献するための確かな基盤を得ることができます。

それでは、Seeed Studio XIAO ESP32C6 を使った Matter 開発の可能性を解き放ちましょう！

## ソフトウェアの準備

以下に、本記事で使用するシステムバージョン、ESP-IDFバージョン、およびESP-Matterバージョンをリストします。これらは正常に動作することが確認された安定版です。

- **ホスト**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)。
- **ESP-IDF**: タグ [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1)。
- **ESP-Matter**: メインブランチ、2024年5月10日時点のコミット [bf56832](https://github.com/espressif/esp-matter/commit/bf568327d41ca29167fcf2743ace1941432e4aa5)。
- **connectedhomeip**: 現在のところ、2024年5月10日時点のコミット [13ab158f10](https://github.com/project-chip/connectedhomeip/tree/13ab158f10)と互換性があります。
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## ハードウェアの準備

このセクションでは、Ubuntu環境でESP-IDFを使用する方法を設定し、ESP-IDFが提供するライティング例を実行する手順を詳しく説明します。そのため、本記事では以下のいずれかのXIAO ESP32シリーズを準備するだけで十分です。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

XIAOに加えて、WS281xモデルのライトバーまたはライトビーズも必要です。現在、Espressifが提供するライティング例は単一のビーズのみをサポートしているため、ストリップまたはビーズのどちらを使用しても、点灯するのは1つのライトだけです。また、配線を簡単にするために、XIAO用のGrove Baseを使用することをお勧めします。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

インターフェースを統一するために、このケースでは**D9**ピンを使用します。LEDストリップまたはビーズをXIAOの**D9**ピンに接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

## ビデオチュートリアル

<div class="table-center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/g9hBp84xs1E?si=fzE--HA7v8H8R090?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ESP-Matter のインストール手順

:::tip
Matter の環境をインストールする前に、[ESP-IDF プログラミング環境をインストールしてアクセスできるようにする](https://wiki.seeedstudio.com/ja/xiao_idf/#step-5-set-up-environment-variables)ことを確認してください。
:::

### ステップ 1. 依存関係のインストール

まず、`apt-get` を使用して必要なパッケージをインストールします。ターミナルを開き、以下のコマンドを実行してください：

```bash
sudo apt-get install git gcc g++ pkg-config libssl-dev libdbus-1-dev \
     libglib2.0-dev libavahi-client-dev ninja-build python3-venv python3-dev \
     python3-pip unzip libgirepository1.0-dev libcairo2-dev libreadline-dev
```

このコマンドは、`git`、コンパイラ（`gcc`、`g++`）、および Matter SDK のビルドと実行に必要なライブラリをインストールします。

### ステップ 2. ESP-Matter リポジトリのクローン作成

GitHub から `esp-matter` リポジトリを `git clone` コマンドを使用してクローンします。最新のスナップショットのみを取得するために深さ 1 を指定します：

```bash
cd ~/esp
git clone --depth 1 https://github.com/espressif/esp-matter.git
```

`esp-matter` ディレクトリに移動し、必要な Git サブモジュールを初期化します：

```bash
cd esp-matter
git submodule update --init --depth 1
```

次に、`connectedhomeip` ディレクトリに移動し、特定のプラットフォーム用のサブモジュールを管理する Python スクリプトを実行します：

```bash
cd ./connectedhomeip/connectedhomeip
./scripts/checkout_submodules.py --platform esp32 linux --shallow
```

このスクリプトは、ESP32 および Linux プラットフォーム用のサブモジュールを浅い方法（最新のコミットのみ）で更新します。

### ステップ 3. ESP-Matter のインストール

`esp-matter` のルートディレクトリに戻り、インストールスクリプトを実行します：

```bash
cd ../..
./install.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/1.png" style={{width:1000, height:'auto'}}/></div>

このスクリプトは、ESP-Matter SDK に特有の追加の依存関係をインストールします。

### ステップ 4. 環境変数の設定

`export.sh` スクリプトをソースとして実行し、開発に必要な環境変数を設定します：

```bash
source ./export.sh
```

このコマンドは、必要な環境パスと変数をシェルに設定します。

### ステップ 5（オプション）. ESP-Matter 開発環境への簡単なアクセス

提供されたエイリアスと環境変数設定を `.bashrc` ファイルに追加することで、IDF と Matter 開発セットアップ間を簡単に切り替えたり、ccache を有効にしてビルドを高速化したりできます。

ターミナルを開き、テキストエディタを使用してホームディレクトリにある `.bashrc` ファイルを開きます。`nano` またはお好みのエディタを使用できます。例えば：

```bash
nano ~/.bashrc
```

`.bashrc` ファイルの末尾までスクロールし、以下の行を追加します：

```bash
# ESP-Matter 環境を設定するためのエイリアス
alias get_matter='. ~/esp/esp-matter/export.sh'

# コンパイルを高速化するために ccache を有効化
alias set_cache='export IDF_CCACHE_ENABLE=1'
```

行を追加したら、ファイルを保存してテキストエディタを終了します。`nano` を使用している場合は、`Ctrl+O` を押して保存し、`Enter` を押して確認し、`Ctrl+X` を押して終了します。

変更を反映させるには、`.bashrc` ファイルを再読み込みする必要があります。これを行うには、`.bashrc` ファイルをソースするか、ターミナルを閉じて再度開きます。`.bashrc` ファイルをソースするには、以下のコマンドを使用します：

```bash
source ~/.bashrc
```

これで、任意のターミナルセッションで `get_matter` と `set_cache` を実行して、esp-matter 環境を設定または更新できるようになります。

```bash
get_matter
set_cache
```

## light サンプルの実行

Matter 環境が構築されたら、サンプルアプリケーション light をコンパイルしてアップロードし、動作を確認します。

### ステップ 1. プロジェクトのパラメータを設定する

`examples/light` ディレクトリに移動します。

```bash
cd examples/light                # light サンプルディレクトリに移動
```

以前のビルドファイルを削除してクリーン操作を行います。

```bash
rm -rf build/                     # 以前のビルドファイルを削除
```

ターゲットを ESP32-C6 に設定します。

```bash
idf.py set-target esp32c6        # ビルドターゲットを ESP32-C6 に設定
```

設定メニューに入り、必要な設定を行います。

```bash
idf.py menuconfig                # 設定メニューに入る
```

`menuconfig` 内で、`Channel for console output` オプションを見つけて有効にする必要があります。このオプションは通常、**Component config** -> **ESP System Settings** の下にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/7.png" style={{width:1000, height:'auto'}}/></div>

1. 矢印キーを使用してオプションに移動します。
2. スペースキーまたは Enter キーを押してオプションを選択します: `USB Serial/JTAG Controller`.

異なる XIAO の場合、GPIO ピン番号も更新する必要があります。このオプションは **Component config -> Board Support Package (generic) -> LEDs** の下にあります。

- XIAO ESP32C3 の場合、D9 の GPIO は 9 です。
- XIAO ESP32S3 の場合、D9 の GPIO は 8 です。
- XIAO ESP32C6 の場合、D9 の GPIO は 20 です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/33.png" style={{width:1000, height:'auto'}}/></div>

1. 矢印キーを使用してオプションに移動します。
2. スペースキーまたは Enter キーを押して GPIO 番号を入力します。
3. 必要なオプションを有効にした後、`menuconfig` を終了するには `q` を押し、その後 `y` を押します。

### ステップ 2. サンプルアプリケーションをコンパイルしてアップロードする

ビルドとフラッシュのプロセスを続行します。

```bash
idf.py build                      # プロジェクトをビルド
```

コンパイルが正常に完了すると、以下の結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/2.png" style={{width:1000, height:'auto'}}/></div>

その後、プログラムをアップロードできます。

```bash
idf.py -p /dev/ttyACM0 flash monitor  # ファームウェアをフラッシュして出力をモニター
```

`/dev/ttyACM0` を、XIAO ESP32 に対応する実際の USB デバイスファイルに置き換えてください。

すべての指示を慎重に従い、各ステップが正常に完了したことを確認してから次に進んでください。エラーが発生した場合は、それを解決してから続行する必要があります。

:::tip
Matter のファームウェアをフラッシュする過程で、権限がない状況に遭遇することがあります。この場合、以下のコマンドを使用してデバイスのポートに権限を付与し、再度プログラムをアップロードしてください。デバイスが接続されたり再起動されたりすると、再度権限を付与する必要がある場合があります。

```
sudo chmod 666 /dev/ttyACM0       # USB デバイスファイルに権限を付与
```

`/dev/ttyACM0` を、XIAO ESP32 に対応する実際の USB デバイスファイルに置き換えてください。
:::

ファームウェアのフラッシュに成功した場合、モニターでターミナルにデバッグログ出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/3.png" style={{width:1000, height:'auto'}}/></div>

次に、Matter コマンドと chip-tool を使用して Matter デバイスを設定し、Matter デバイスのデバッグと確認を完了する方法を学びます。

## ホスト制御と機器の試運転

`menuconfig`で`console output to USB Serial`のチャンネルを設定します。この目的は、USBインターフェースを使用してXIAOを制御し、ネットワークへの参加を設定したり、その他のデバッグを行ったりすることです。このステップは非常に重要であり、シリアルツールを使用してデバイスにコマンドを送信できるかどうかを決定します。

以下は、ケーブルを介してデバイスを直接制御するためのコマンドで、通常`matter`で始まります。

### 一般的なコマンド

- BLEコマンド: BLE広告の開始と停止:

	```
	matter ble [start|stop|state]
	```

- Wi-Fiコマンド: Wi-Fiモードの設定と取得:

	```
	matter wifi mode [disable|ap|sta]
	```

- デバイス設定: デバイスの静的設定をダンプ:
	```
	matter config
	```

- 工場出荷時リセット:

	```
	matter device factoryreset
	```

- オンボーディングコード: オンボーディングペアリングコードのペイロードをダンプ:

	```
	matter onboardingcodes
	```

- 属性の取得: (IDは16進数):

	```
	matter esp attribute get <endpoint_id> <cluster_id> <attribute_id>
	```

	- 例: on_off::on_off:

		```
		matter esp attribute get 0x1 0x6 0x0
		```

- 属性の設定: (IDは16進数):

	```
	matter esp attribute set <endpoint_id> <cluster_id> <attribute_id> <attribute value>
	```

	- 例: on_off::on_off:

		```
		matter esp attribute set 0x1 0x6 0x0 1
		```

- 診断:

	```
	matter esp diagnostics mem-dump
	```

- Wi-Fi接続:

	```
	matter esp wifi connect <ssid> <password>
	```

### 使用方法

#### ステップ 1. Minicomのインストール

Minicomは、Unix系オペレーティングシステム向けのテキストベースのモデム制御および端末エミュレーションプログラムです。Minicomをインストールすることで、Matter制御コマンドをXIAOに簡単に送信できます。UbuntuにMinicomをインストールするには、ターミナルを開いて以下のコマンドを入力します:

```bash
sudo apt update
sudo apt install minicom
```

このコマンドはパッケージリストを更新し、Minicomをインストールします。

#### ステップ 2. ユーザー権限の設定

`ttyACM0`のようなシリアルポートに非rootユーザーがアクセスできるようにするには、ユーザーを`dialout`グループに追加する必要があります。以下のコマンドを使用してください:

```bash
sudo usermod -a -G dialout $USER
```
`$USER`をあなたのユーザー名に置き換えるか、現在ログインしているユーザーに適用する場合は省略してください。このコマンドを実行した後、**ログアウトして再ログインする必要があります**。これによりグループ変更が有効になります。

#### ステップ 3. Minicomの設定

次に、Minicomを`ttyACM0`ポートで使用するように設定する必要があります。以下のコマンドで設定モードでMinicomを実行します:

```bash
sudo minicom -s
```

設定メニューで以下の手順を実行してください:

1. **Serial port setup**を選択します。
2. 'A'を押してシリアルデバイスを`/dev/ttyACM0`に変更します。
3. 必要に応じて他の設定を調整します。デフォルト設定は通常9600 8N1 (9600 Baud, No Parity, 8 Data Bits, 1 Stop Bit)です。ボーレートを**115200**に変更するだけで十分です。
4. 'Enter'を押してこの画面を終了します。

#### ステップ 4. 設定の保存

シリアルポートを設定した後:

1. **Save setup as dfl**を選択して、これをデフォルト設定として保存します。
2. **Exit from Minicom**を選択してMinicom設定を終了します。

#### ステップ 5. Minicomの実行

デフォルト設定でMinicomを開始するには、以下を入力します:

```bash
minicom
```

もし権限の問題が発生した場合は、sudo権限で実行することもできます:

```bash
sudo minicom
```

Minicomを終了するには、`Ctrl-A`を押してヘルプメニューを表示し、その後`X`を押してプログラムを終了します。

#### ステップ 6. XIAOの配布ネットワーク設定

以下のコマンドを使用してXIAOをネットワークに接続します。ネットワークを選択する際、XIAOは2.4Gネットワークのみをサポートし、5Gネットワークはサポートしていないことに注意してください。

```
matter esp wifi connect <ssid> <password>
```

接続が成功した後、以下のコマンドを使用してMatterデバイスに関する非常に重要な情報を照会できます: **VendorID**, **ProductId**, **Discriminator**, **PinCode**。この情報は、Chip-toolツールを使用してデバッグする際にデバイスをペアリングするのに役立ちます。

```
matter config
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/8.png" style={{width:1000, height:'auto'}}/></div>

最後に、以下のコマンドを使用してオンボーディングペアリングコードのペイロードをダンプします。

```
matter onboardingcodes onnetwork
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/9.png" style={{width:1000, height:'auto'}}/></div>

最後に表示されるのはデバイスのペアリングQRコードへのリンクです。このQRコードを使用して、スマートフォンでコードをスキャンし、Matterデバイスを[Getting Started](https://wiki.seeedstudio.com/ja/getting_started_with_matter/#step-2-add-a-device-by-scanning-the-code-using-the-iphone-home-app)の手順に従ってバインドできます。

## Matter デバイスのリモートデバッグ方法（Chip-toolを使用）

Matterデバイスはスマートホームの重要な部分であり、デバッグやセットアップの際に常にデータケーブルを使用するのは現実的ではありません。Matterデバッグツールの中で最も一般的に使用されるのがChip-toolであり、デバイスが接続されている場合にリモートでデバッグを行うことができます。

Chip-toolコマンドは通常、Chip-toolスクリプトを必要とし、`chip-tool`で始まることが一般的です。

### IP経由でデバイスをペアリングする

以下のコマンドはデバイスを検出し、提供されたセットアップコードを使用して最初に検出されたデバイスとペアリングを試みます。

```
chip-tool pairing onnetwork ${NODE_ID_TO_ASSIGN} 20202021
```

以下のコマンドは、長い識別子3840を持つデバイスを検出し、提供されたセットアップコードを使用して最初に検出されたデバイスとペアリングを試みます。

```
chip-tool pairing onnetwork-long ${NODE_ID_TO_ASSIGN} 20202021 3840
```

以下のコマンドは、指定されたQRコード（デバイスが起動時にログに記録するもの）に基づいてデバイスを検出し、最初に検出されたデバイスとペアリングを試みます。

```
chip-tool pairing code ${NODE_ID_TO_ASSIGN} MT:#######
```

これらすべての場合において、デバイスには`${NODE_ID_TO_ASSIGN}`（10進数または0xで始まる16進数である必要があります）というノードIDが割り当てられます。

### 現在コミッション済みのデバイスを忘れる

```
chip-tool pairing unpair
```

### クライアントを使用してMatterコマンドを送信する

クライアントを使用してMatterコマンドを送信するには、ビルドされた実行ファイルを実行し、ターゲットクラスタ名、ターゲットコマンド名、およびエンドポイントIDを渡します。

エンドポイントIDは1から240の間である必要があります。

```
chip-tool onoff on 1
```

クライアントは単一のコマンドパケットを送信し、その後終了します。

### 使用方法

Chip-toolを使用してデバッグを行う準備が整ったら、XIAOをコンピュータから切断し、電源に接続します。

最初のステップとして、デバイスをペアリングする必要があります。これは、[IP経由でデバイスをペアリングする](#pair-a-device-over-ip)セクションのいずれかの方法を使用して行うことができます。

例えば、以下のコマンドを使用します。

```
chip-tool pairing onnetwork-long 0x12 20202021 3840
```

この場合、デバイスにはノードID`0x12`（10進数または0xで始まる16進数である必要があります）が割り当てられます。20202021はPinCodeであり、3840はDiscriminatorです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/5.png" style={{width:1000, height:'auto'}}/></div>

最後に、以下のコマンドを使用してライトのオン/オフを制御できることを確認します。

ライトをオンにする：

```
chip-tool onoff on 0x12 0x1
```

ライトをオフにする：

```
chip-tool onoff off 0x12 0x1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/6.png" style={{width:1000, height:'auto'}}/></div>

`0x12`はペアリング時にデバイスに割り当てられたノードIDです。

皆さん、おめでとうございます！ここで実施したチュートリアルの手順により、ESP-Matterの開発フレームワークの一般的な手順とデバッグツールの使用方法について初歩的な理解が得られたと思います。まだ理解できない点や慣れていない点がある場合は、次のチュートリアルで引き続き使用方法を案内していきますので、ぜひご期待ください！

## トラブルシューティング

### Q1: 環境のインストール中にさまざまなエラーが発生するのはなぜですか？

ESP-Matter の環境は少し要求が厳しく、開発によく使用される Ubuntu ホストを使用している場合、一部の Python 依存関係のバージョンが異なるためにエラーが発生する可能性があります。Matter フレームワークは Seeed によって開発されたものではないため、この問題に関してはおそらく対応できることはありません。そのため、インストール中に問題が発生した場合は、公式の **[ESP-Matter リポジトリ](https://github.com/espressif/esp-matter)** にイシューを提出してサポートを受けることをお勧めします。

### Q2: Matter の環境をどのようにアンインストールしますか？

`./install.sh` スクリプトを実行して Python 環境の設定ステップで行き詰まった場合、Matter の [バージョン](#prepare-the-software) が connectedhomeip のバージョンと一致しているか確認する必要があります。

簡単にリセットする方法は、以下のコマンドを実行することです。

```
rm -r connectedhomeip/connectedhomeip/.environment
```

その後、適切なバージョンの connectedhomeip ブランチを再度取得します。

```
git submodule update --init --depth 1
```

それでもうまくいかない場合は、esp-matter フォルダ全体を削除し、Wiki の内容に従って再度実行してください。


## リソース

- **[ESPRESSIF Matter - SDK を使用した開発](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#)**

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>