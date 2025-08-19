---
description: IDF環境のインストールと設定方法を紹介します。
title: Espressif ESP-IDFを使用したXIAOでの開発
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_idf
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Espressif ESP-IDFを使用したXIAOでの開発

:::tip
この記事はSeeed Studio XIAO ESP32開発Matterシリーズの最初のチュートリアルです。XIAO ESP32シリーズでMatterデバイス開発を始めたい場合は、ここから始めてください。

このチュートリアルはXIAO ESP32C3、XIAO ESP32S3、XIAO ESP32C6に適用されます。
:::

IoT開発の世界では、ESP-IDF（Espressif IoT Development Framework）はその強力な機能とESP32シリーズマイクロコントローラーへの広範なサポートにより、非常に人気を集めています。Matterプロトコルの登場により、スマートホームデバイスの統一標準を提供することを目指しているため、開発者はこの新しいフロンティアを探求することに熱心です。しかし、Matter開発は現在Arduinoフレームワークをサポートしておらず、ESP-IDFが開発の主要な選択肢となっています。このチュートリアルでは、UbuntuシステムにESP-IDFをインストールするプロセスを案内し、XIAO ESP32シリーズでMatter開発を開始する準備を整えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/matter-sdk.png" style={{width:800, height:'auto'}}/></div>

## Ubuntu 22.04を基盤とする

Matter開発において、オペレーティングシステムの選択は重要な考慮事項です。WindowsはMatter開発をネイティブにサポートしていませんが、Windows Subsystem for Linux（WSL）を使用して**[互換性のある環境を作成する](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#windows-10)**ことができます。**[WSL](https://learn.microsoft.com/en-us/windows/wsl/install)**を使用すると、UbuntuなどのLinuxディストリビューションをWindows上で直接実行でき、Matter開発に必要なツールやライブラリにアクセスできます。

一方、macOSはUnixベースの基盤と包括的な開発ツールにより、開発者の間で人気のある選択肢です。

最終的に、オペレーティングシステムの選択は個人的な好みやMatterプロジェクトの具体的な要件に依存します。UbuntuはLinuxディストリビューションであるため、Matter開発においてネイティブで効率的な体験を提供します。ただし、WindowsやmacOSに慣れている場合でも、Windows上のWSLやmacOSの組み込みターミナルなどのツールを使用して適切な開発環境を設定することができます。

:::caution
WSLを使用しても、WindowsでESP-Matterを開発することは推奨しません。WindowsはCOMポートをWSLディストリビューションに公開することをサポートしていません。そのため、頻繁にターミナルを切り替える必要があるか、ポート問題を解決するために[usbipd-win](https://github.com/dorssel/usbipd-win)をインストールする必要があります。また、[chip-toolの使用も問題点](https://github.com/espressif/esp-matter/blob/main/docs/en/using_chip_tool.rst)となる可能性があります。
:::

**まとめると、次の開発ステップではUbuntuを使用し、現在Matterでサポートされている最新のUbuntu 22.04を使用します**。この記事以外のオペレーティングシステムを使用してMatter開発を行いたい場合は、Lexinの公式ドキュメントを参照してください。この記事では繰り返しません。

- **[ESPRESSIF IDF - Get Started](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## ソフトウェアの準備

以下に、この記事で使用するシステムバージョンとESP-IDFバージョンをリストします。これは正常に動作することが確認された安定版です。

- **ホスト**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)。
- **ESP-IDF**: タグ [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1)。
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## ハードウェアの準備

このセクションでは、Ubuntu環境でESP-IDFを使用するための設定方法と、ESP-IDFが提供するライティング例を実行する方法を詳しく説明します。そのため、この記事では以下のいずれかのXIAO ESP32シリーズを準備するだけで十分です。

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

:::caution
XIAO ESP32C3にはオンボードLEDが搭載されていないため、XIAO ESP32C3を使用する場合は追加のLEDが必要になる場合があります。
:::

## ビデオチュートリアル

ESP-IDF開発フレームワークは、より専門的なソフトウェア開発者を対象としているため、Arduinoよりも使用の敷居が高くなっています。そのため、関連するドキュメントや情報はArduinoよりも少ないです。XIAOユーザーがESP-IDFをできるだけ早く使い始め、開発環境の設定で問題に直面する可能性を減らすために、環境設定をビデオとグラフィックの形式で紹介します。このセクションはビデオ部分です。ビデオに沿って進めたい場合は、このビデオを参考にしてESP-IDF環境をインストールおよび設定し、最終的にXIAO ESP32C6のオンボードLEDを点灯させてください。

<div class="table-center">
<iframe width="900" height="450" src="https://www.youtube.com/embed/QdPmsGDd7zs?si=5r_OO2EwZMX8D_HM?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ESP-IDF インストール手順

このセクションでは、ESP-IDF 環境構成のグラフィカルチュートリアルを提供します。

### ステップ 1. 必要なパッケージのインストール

まず、Ubuntu システムを更新およびアップグレードして、最新のパッケージと依存関係を確保します。ターミナルを開き、以下のコマンドを実行してください：

```
sudo apt update
sudo apt upgrade
```

ESP-IDF に必要なパッケージを以下のコマンドでインストールします。すでにこれらのパッケージがインストールされている場合、このステップをスキップできますが、再確認のためにこのコマンドを実行することをお勧めします。

```
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

:::note
ESP-IDF を使用するには、CMake バージョン 3.16 以上が必要です。お使いの OS に適切なバージョンがない場合は、"[tools/idf_tools.py](https://github.com/espressif/esp-idf/blob/v5.2.1/tools/idf_tools.py) install cmake" を実行してインストールしてください。
:::

### ステップ 2. Python3 のインストール

通常、Ubuntu 22.04 LTS のフルバージョンにはデフォルトで Python 3.12 がインストールされています。確認したい場合は以下の手順を実行してください。インストールされていない場合や以前にアンインストールした場合は、以下の手順で再インストールできます。Python 3 がインストールされていると確信している場合、このステップをスキップできます。

現在の Python バージョンを確認するには以下を実行します：

```
python --version
```

出力が `Python 2.7.17` のようであれば、デフォルトのインタープリタは `Python 2.7` です。その場合、Python 3 がすでにインストールされているかどうかも確認してください：

```
python3 --version
```

上記のコマンドがエラーを返す場合、Python 3 はインストールされていません。

以下は Python 3 をインストールする手順の概要です。

- HomeBrew を使用してインストールする場合：
    ```
    brew install python3
    ```

- MacPorts を使用している場合：
    ```
    sudo port install python38
    ```

### ステップ 3. ESP-IDF の取得

ESP-IDF を取得するには、インストールディレクトリに移動し、以下の手順に従ってリポジトリを `git clone` します。ターミナルを開き、以下のコマンドを実行してください：

```
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

上記のコマンドを実行すると、ESP-IDF が `~/esp/esp-idf` にダウンロードされます。

### ステップ 4. ツールのセットアップ

ESP-IDF の他に、ESP-IDF が使用するコンパイラ、デバッガ、Python パッケージなどのツールもインストールする必要があります。以下のコマンドを実行してください：

```
cd esp-idf/
./install.sh
```

### ステップ 5. 環境変数の設定

インストールされたツールはまだ PATH 環境変数に追加されていません。コマンドラインからツールを使用できるようにするには、いくつかの環境変数を設定する必要があります。ESP-IDF はこれを行うスクリプトを提供しています。

ESP-IDF を使用するターミナルで以下を実行してください：

```
source ./export.sh
cd ..
```

これで、ESP-IDF 環境が完全に構成されました。ESP-IDF が正しくインストールされているか確認するには、以下のコマンドを実行してください：

```
idf.py --version
```

インストールが成功すると、ESP-IDF のバージョン情報が表示されます。

### ステップ 6（オプション）. ESP-IDF 開発環境への簡単なアクセス

上記の手順で説明したように、ターミナルを起動するたび、またはコンピュータを再起動するたびに、新しいターミナルで ESP-IDF の環境変数をインポートする必要があります。ESP32 を頻繁に開発する場合、これは非常に不便です。以下の手順で Shell の設定ファイルを変更し、`get_idf` コマンドで ESP-IDF 環境を起動できるようにします。

ターミナルで以下のコマンドを入力して `.bashrc` ファイルを開きます：

```
nano ~/.bashrc
```

`.bashrc` ファイルの末尾に以下を追加します：

```
alias get_idf='. ~/esp/esp-idf/export.sh'
```

設定を更新するには、ターミナルセッションを再起動するか、`source [プロファイルのパス]` を実行します。例えば：

```
source ~/.bashrc
```

これで、任意のターミナルセッションで `get_idf` を実行して、ESP-IDF 環境をセットアップまたは更新できるようになります。

:::caution
技術的には、`export.sh` を直接シェルのプロファイルに追加することも可能ですが、これは推奨されません。この方法では、すべてのターミナルセッション（ESP-IDF が不要な場合も含む）で IDF 仮想環境が有効になり、仮想環境の目的が失われ、他のソフトウェアに影響を与える可能性があります。
:::

## LED例題プログラムの実行

ESP-IDF環境が正しく設定されていることを確認するために、簡単なLED例題プログラムを実行してみましょう。

### ステップ1. XIAO ESP32C6をPCに接続する

まず、XIAO ESP32シリーズボードをコンピュータに接続し、ボードがどのシリアルポートに表示されるか確認します。ここではXIAO ESP32C6を例として使用します。

シリアルポートは通常、`/dev/tty`という命名パターンを持っています。一般的に、コンピュータには`tty`で始まる多くのポートが存在する可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

ポートを特定するのは簡単で、接続していない状態で以下のコマンドを使用して、デフォルトで存在するポートを確認できます。

```
ls /dev/tty*
```

次に、XIAOをコンピュータに接続して再度クエリを実行すると、追加されたシリアルポート名がXIAOのポート番号になります。

ポート名を控えておいてください。次のステップで必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/12.png" style={{width:800, height:'auto'}}/></div>

上記のように、私のコンピュータではXIAOのポート番号は**ttyACM0**であるべきです。

### ステップ2. プロジェクトを開始する

例題ディレクトリに移動します。

```
cd ~/esp/esp-idf/examples/get-started/blink
```

ターゲットデバイスを設定します。

```
idf.py set-target esp32c6
```

:::tip
- **XIAO ESP32C3**を使用している場合は、`idf.py set-target esp32c3`コマンドを使用してください。
- **XIAO ESP32S3**を使用している場合は、`idf.py set-target esp32s3`コマンドを使用してください。
:::

このサンプルプロジェクトの主な効果はオンボードLEDを点滅させることなので、LEDが配置されているGPIOや点滅時間などのパラメータを設定する必要があります。ESP-IDFはプロジェクトの調整可能なパラメータを設定するための`menuconfig`コマンドを提供しています。

```
idf.py menuconfig
```

このコマンドを実行すると、設定メニューが開き、さまざまな設定を変更できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/14.png" style={{width:800, height:'auto'}}/></div>

blinkプロジェクトを例にすると、調整可能な3つのパラメータがあります。

1. Blink LEDタイプ: 使用するLEDのタイプを設定します。この場合、**GPIO**に設定します。

2. Blink GPIO番号: LEDが配置されているGPIOピン番号を設定します。ここでは**15**に設定します。XIAO ESP32C6のLEDはGPIO15に接続されています。

3. Blink期間（ms）: 点滅間隔の時間。デフォルトは**1000**ミリ秒、つまり1秒です。

設定が完了したら、**q**を押して設定メニューを終了し、**y**を押して変更を確認します。

### ステップ3. 例題をビルドしてフラッシュする

以下のコマンドを実行してプロジェクトをビルドします。

```
idf.py build
```

このコマンドはアプリケーションとすべてのESP-IDFコンポーネントをコンパイルし、ブートローダー、パーティションテーブル、およびアプリケーションバイナリを生成します。エラーがなければ、ビルドはファームウェアバイナリ.binファイルを生成して終了します。

前のステップでビルドしたバイナリをESP32にフラッシュするには、以下のコマンドを実行します。

```
idf.py -p PORT flash
```

`PORT`をXIAO ESP32ボードのUSBポート名に置き換えてください。**PORT**が定義されていない場合、`idf.py`は利用可能なUSBポートを使用して自動的に接続を試みます。最初のステップでクエリしたデバイスポート番号に基づいて、私の場合は以下のコマンドを入力してプログラムをフラッシュします。

```
idf.py -p /dev/ttyACM0 flash
```

フラッシュプロセスの最後に問題がなければ、XIAOは再起動して"blink"アプリケーションを起動します。

LED例題プログラムの出力を確認するには、以下のコマンドを実行します。

```
idf.py monitor
```

XIAOのLEDが点滅しているのが確認できるはずです。これにより、例題プログラムが正常に動作していることが示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/13.png" style={{width:800, height:'auto'}}/></div>

シリアルモニターを終了したい場合は、ショートカット`Ctrl+]`を使用できます。

:::tip
ESP-IDF環境でよく使用されるコマンドは以下の通りです：

- `idf.py menuconfig`: プロジェクト設定メニューを開きます。
- `idf.py build`: プロジェクトをビルドします。
- `idf.py flash`: ビルドしたファームウェアを接続されたデバイスにフラッシュします。
- `idf.py monitor`: デバイスからの出力を表示するシリアルモニターを開始します。
- `idf.py clean`: ビルドディレクトリをクリーンします。
- `idf.py fullclean`: ダウンロードされた依存関係を含む完全なクリーンを実行します。
- `idf.py set-target`: プロジェクトのターゲットチップを設定します。
- `idf.py size`: ビルドしたファームウェアのサイズ情報を表示します。
- `idf.py app`: プロジェクト内のアプリケーションを管理します。
- `idf.py component`: プロジェクト内のコンポーネントを管理します。
:::

おめでとうございます！UbuntuシステムにESP-IDFを正常にインストールし、Matter開発の旅の基盤を築きました。Seeed StudioはMatterの文脈でXIAO ESP32シリーズの開発ドキュメントをさらに強化し拡張していきます。ESP-IDFのセットアップと構成が完了したことで、Matter開発の次のステップに進む準備が整いました。

Seeed StudioはMatter開発体験を促進するための包括的なリソースとサポートを提供することに尽力しています。XIAO ESP32シリーズに特化したMatter関連のドキュメントやチュートリアルが近日公開される予定です。これらのリソースは、ESP-IDFフレームワークを活用してMatterプロトコルに準拠した最先端のスマートホームデバイスを構築するプロセスを案内します。

Matter開発をさらに深く掘り下げる際には、フレームワークの機能やベストプラクティスに関する詳細情報を得るために公式のESP-IDFドキュメントを参照してください。開発者や愛好家の活気あるコミュニティに参加し、知識を交換したり、ガイダンスを求めたり、革新的なプロジェクトで協力したりしてください。

ESP-IDF の力と、Seeed Studio から提供される今後の Matter 開発リソースを活用することで、相互運用性とユーザー体験の限界を押し広げる素晴らしいスマートホームソリューションを作成する準備が整います。これからのエキサイティングな可能性を受け入れ、自信を持って Matter 開発の旅を始めましょう。コーディングを楽しんでください！

## トラブルシューティング

### 環境のインストール中にさまざまなエラーが発生するのはなぜですか？

ESP-IDF の環境は少し要求が厳しく、開発によく使用される Ubuntu ホストを使用している場合、一部の Python 依存関係のバージョンが異なるためにエラーが発生する可能性があります。Matter フレームワークは Seeed によって開発されたものではないため、この問題に関してはおそらく対応できない部分があります。そのため、インストール中に問題が発生した場合は、公式の **[ESP-IDF リポジトリ](https://github.com/espressif/esp-idf)** に問題を提出してヘルプを求めることをお勧めします。

## リソース

- **[ESPRESSIF IDF - Get Started](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品をご利用いただく際の体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>