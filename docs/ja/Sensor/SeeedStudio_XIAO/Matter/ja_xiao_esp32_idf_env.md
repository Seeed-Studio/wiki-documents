---
description: IDF環境のインストールと設定方法を紹介します。
title: Espressif ESP-IDFを使用したXIAOでの開発
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_idf
last_update:
  date: 05/09/2024
  author: Citric
---

# Espressif ESP-IDFを使用したXIAOでの開発

:::tip
この記事は、Seeed Studio XIAO ESP32開発Matterシリーズの最初のチュートリアルです。XIAO ESP32シリーズでMatterデバイス開発の旅を始めたい場合は、ここから始めてください。

このチュートリアルは、XIAO ESP32C3、XIAO ESP32S3、およびXIAO ESP32C6に適用されます。
:::

IoT開発の世界では、ESP-IDF（Espressif IoT Development Framework）は、その強力な機能とESP32シリーズマイクロコントローラーへの広範なサポートにより、大きな人気を得ています。スマートホームデバイス向けの統一標準を提供することを目的としたMatterプロトコルの登場により、開発者はこの新しいフロンティアを探求することに熱心です。しかし、Matter開発は現在Arduinoフレームワークをサポートしておらず、ESP-IDFが開発の主要な選択肢として残されています。このチュートリアルでは、UbuntuシステムにESP-IDFをインストールするプロセスをガイドし、XIAO ESP32シリーズでMatter開発の旅を始められるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/matter-sdk.png" style={{width:800, height:'auto'}}/></div>

## Ubuntu 22.04ベース

Matter開発に関しては、オペレーティングシステムの選択は重要な考慮事項です。WindowsはMatter開発のネイティブサポートを提供していませんが、開発者はWindows Subsystem for Linux（WSL）を使用して**[互換性のある環境を作成](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#windows-10)**することができます。**[WSL](https://learn.microsoft.com/en-us/windows/wsl/install)**は、UbuntuなどのLinuxディストリビューションをWindows上で直接実行することを可能にし、Matter開発に必要なツールとライブラリへのアクセスを提供します。

一方、macOSは、そのUnixベースの基盤と包括的な開発ツールにより、開発者の間で人気のある選択肢です。

最終的に、オペレーティングシステムの選択は、あなたの個人的な好みとMatterプロジェクトの特定の要件によって決まります。Ubuntuは、Linuxディストリビューションとして、Matter開発のためのネイティブで合理化された体験を提供します。しかし、WindowsやmacOSの方が慣れている場合は、WindowsでのWSLやmacOSの内蔵ターミナルなどのツールを使用して、適切な開発環境を設定することができます。

:::caution
WSLを使用してもWindows用のESP-Matter開発は推奨しません。WindowsはCOMポートをWSLディストリビューションに公開することをサポートしていません。ポートの問題のために頻繁にターミナルを切り替えたり、[usbipd-win](https://github.com/dorssel/usbipd-win)をインストールしたりする必要があるかもしれません。[chip-toolの使用も問題点](https://github.com/espressif/esp-matter/blob/main/docs/en/using_chip_tool.rst)です。
:::

**要約すると、次の開発ステップではUbuntuを使用し、Matterで現在サポートされている最新のUbuntu 22.04を使用します**。この記事以外のオペレーティングシステムをMatter開発に使用したい場合は、Lexinの公式ドキュメントを参照してください。この記事では繰り返しません。

- **[ESPRESSIF IDF - Get Started](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

## ソフトウェアの準備

以下に、この記事で使用するシステムバージョンとESP-IDFバージョンを参考として記載します。これは正常に動作することがテストされた安定版です。

- **ホスト**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)
- **ESP-IDF**: タグ [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1)
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## ハードウェアの準備

このセクションでは、Ubuntu環境でESP-IDFの使用を設定し、ESP-IDFが提供するライティングサンプルを実行する方法を詳しく説明します。そのため、この記事では以下のXIAO ESP32シリーズのいずれかを準備するだけで十分です。

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::caution
XIAO ESP32C3 にはオンボード LED が搭載されていないため、XIAO ESP32C3 を使用している場合は、追加の LED が必要になる場合があります。
:::

## ビデオチュートリアル

ESP-IDF 開発フレームワークはより専門的なソフトウェア開発者を対象としているため、使用の敷居は Arduino よりも高くなります。関連する文書や情報は Arduino よりも少なくなります。XIAO ユーザーができるだけ早く ESP-IDF の使用を開始し、開発環境の設定で問題に遭遇する可能性を減らすために、環境の設定をビデオと図解の形で紹介します。このセクションはビデオ部分です。ビデオに沿って進めたい場合は、このビデオを参考にして ESP-IDF 環境をインストール・設定し、最終的に XIAO ESP32C6 のオンボード LED を点灯させることができます。

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/QdPmsGDd7zs?si=5r_OO2EwZMX8D_HM?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ESP-IDF のステップバイステップインストール

このセクションは ESP-IDF 環境設定の図解チュートリアル部分です。

### ステップ 1. 前提条件のインストール

まず、Ubuntu システムを更新およびアップグレードして、最新のパッケージと依存関係があることを確認します。ターミナルを開いて、以下のコマンドを実行してください：

```
sudo apt update
sudo apt upgrade
```

ESP-IDFに必要な前提条件をインストールするために以下のコマンドを実行してください。以下のパッケージがすでにインストールされていることが確実な場合は、この手順をスキップできますが、再度確認するためにこのコマンドを実行することをお勧めします。

```
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

:::note
CMake バージョン 3.16 以降が ESP-IDF で使用するために必要です。お使いの OS バージョンに適切なバージョンがない場合は、"[tools/idf_tools.py](https://github.com/espressif/esp-idf/blob/v5.2.1/tools/idf_tools.py) install cmake" を実行して適切なバージョンをインストールしてください。
:::

### ステップ 2. Python3 のインストール

通常、Ubuntu 22.04 LTS のフルバージョンでは、デフォルトで Python 3.12 がインストールされます。確信がない場合は、以下のように確認できます。インストールされていない場合や、以前にアンインストールした場合は、以下のように再インストールすることもできます。Python 3 がインストールされていることが確実な場合は、このステップをスキップできます。

現在お持ちの Python を確認してください：

```
python --version
```

出力が `Python 2.7.17` のような場合、デフォルトのインタープリターは `Python 2.7` です。その場合は、コンピューターに Python 3 がまだインストールされていないかどうかも確認してください：

```
python3 --version
```

上記のコマンドでエラーが返される場合は、Python 3がインストールされていないことを意味します。

以下は、Python 3をインストールする手順の概要です。

- HomeBrewでのインストールは以下のように実行できます：

    ```
    brew install python3
    ```

- MacPortsをお持ちの場合は、以下を実行できます：

    ```
    sudo port install python38
    ```

### ステップ 3. ESP-IDFを取得する

ESP-IDFを取得するには、インストールディレクトリに移動し、`git clone`でリポジトリをクローンします。お使いのオペレーティングシステム固有の以下の手順に従ってください。ターミナルを開き、以下のコマンドを実行します：

```
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

上記のコマンドを実行することで、ESP-IDFが`~/esp/esp-idf`にダウンロードされます。

### ステップ4. ツールのセットアップ

ESP-IDFに加えて、ESP32をサポートするプロジェクト用のコンパイラ、デバッガ、Pythonパッケージなど、ESP-IDFで使用されるツールもインストールする必要があります。

```
cd esp-idf/
./install.sh
```

### ステップ 5. 環境変数の設定

インストールされたツールはまだPATH環境変数に追加されていません。コマンドラインからツールを使用できるようにするには、いくつかの環境変数を設定する必要があります。ESP-IDFは、これを行う別のスクリプトを提供しています。

ESP-IDFを使用するターミナルで、以下を実行してください：

```
source ./export.sh
cd ..
```

この時点で、ESP-IDF環境全体が実際に設定されています。ESP-IDFが正しくインストールされていることを確認するには、以下のコマンドを実行してください：

```
idf.py --version
```

インストールが成功した場合、ESP-IDFのバージョン情報が表示されるはずです。

### ステップ6（オプション）. ESP-IDF開発環境への迅速なアクセス

上記のステップで説明したように、ターミナルを起動するたびやコンピュータを再起動するたびに、新しいターミナルでESP-IDFの環境変数をインポートする必要があり、特にESP32を頻繁に開発する必要がある場合、これは大きな不便をもたらします。以下のステップでShellの設定ファイルを変更することで、`get_idf`コマンドでESP-IDFの環境を起動できるようになります。

ターミナルで以下のコマンドを入力して`.bashrc`ファイルを開きます。

```
nano ~/.bashrc
```

`.bashrc` ファイルの末尾に以下を追加してください。

```
alias get_idf='. ~/esp/esp-idf/export.sh'
```

ターミナルセッションを再起動するか、`source [プロファイルへのパス]`を実行して設定を更新してください。例：`source ~/.bashrc`。

これで、任意のターミナルセッションで`get_idf`を実行してesp-idf環境をセットアップまたは更新できるようになります。

:::caution
技術的には、`export.sh`をシェルのプロファイルに直接追加することは可能ですが、推奨されません。そうすると、すべてのターミナルセッション（IDFが不要なセッションを含む）でIDF仮想環境がアクティブになり、仮想環境の目的を無効にし、他のソフトウェアに影響を与える可能性があります。
:::

## LEDサンプルプログラムの実行

ESP-IDF環境が正しくセットアップされていることを確認するために、シンプルなLEDサンプルプログラムを実行してみましょう。

### ステップ1. XIAO ESP32C6をPCに接続

XIAO ESP32シリーズボードをコンピュータに接続し、ボードがどのシリアルポートで認識されているかを確認してください。ここではXIAO ESP32C6を例として使用します。

シリアルポートは次の命名パターンに従います：`/dev/tty`。一般的に、コンピュータには`tty`で始まる多くのポートがある場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

ポートの特定も簡単です。XIAOを接続していない状態でデフォルトで存在するポートを確認するクエリコマンドを使用できます。

```
ls /dev/tty*
```

その後、XIAOをコンピュータに接続して再度確認すると、追加されたシリアルポート名がXIAOのポート番号になります。

次のステップで必要になるため、ポート名を控えておいてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/12.png" style={{width:800, height:'auto'}}/></div>

上記のように、私のコンピュータでのXIAOポート番号は**ttyACM0**であることがわかります。

### ステップ2. プロジェクトを開始する

examplesディレクトリに移動します

```
cd ~/esp/esp-idf/examples/get-started/blink
```

ターゲットデバイスを設定します。

```
idf.py set-target esp32c6
```

:::tip

- **XIAO ESP32C3** を使用している場合、使用する必要があるコマンドは `idf.py set-target esp32c3` です。
- **XIAO ESP32S3** を使用している場合、使用する必要があるコマンドは `idf.py set-target esp32s3` です。

:::

このサンプルプロジェクトの主な効果はオンボードLEDを点滅させることなので、LEDが配置されているGPIOと点滅時間などのパラメータを設定する必要があります。ESP-IDFはプロジェクトの調整可能なパラメータを設定するためのmenuconfigコマンドを提供しています。

```
idf.py menuconfig
```

このコマンドは、様々な設定を変更できる設定メニューを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/14.png" style={{width:800, height:'auto'}}/></div>

blinkプロジェクトを例に取ると、調整可能な3つのパラメータがあります。

1. Blink LED type: 使用するLEDのタイプを設定します。この場合は**GPIO**に設定します。

2. Blink GPIO number: LEDが配置されているGPIOピン番号を設定します。ここでは**15**に設定します。XIAO ESP32C6のLEDはGPIO15に接続されています。

3. Blink period in ms: 点滅間の時間間隔です。デフォルトは**1000**ミリ秒、つまり1秒です。

設定が完了したら、**q**を押して設定メニューを終了し、**y**を押して変更を確認します。

### ステップ3. サンプルのビルドとフラッシュ

以下を実行してプロジェクトをビルドします：

```
idf.py build
```

このコマンドは、アプリケーションとすべてのESP-IDFコンポーネントをコンパイルし、ブートローダー、パーティションテーブル、およびアプリケーションバイナリを生成します。エラーがなければ、ファームウェアバイナリ.binファイルを生成してビルドが完了します。

前のステップでESP32用にビルドしたバイナリをフラッシュするには、以下のコマンドを実行する必要があります：

```
idf.py -p PORT flash
```

`PORT`をあなたのXIAO ESP32ボードのUSBポート名に置き換えてください。**PORT**が定義されていない場合、`idf.py`は利用可能なUSBポートを使用して自動的に接続を試行します。最初のステップで確認したデバイスポート番号に従って、私の場合は以下のコマンドを入力してプログラムをフラッシュする必要があります。

```
idf.py -p /dev/ttyACM0 flash
```

フラッシュプロセスの最後に問題がなければ、XIAOは再起動し、「blink」アプリケーションを開始します。

LEDサンプルプログラムの出力を確認するには、以下のコマンドを実行してください

```
idf.py monitor
```

XIAOのLEDが点滅しているのが確認できるはずです。これは、サンプルプログラムが正常に実行されていることを示しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/13.png" style={{width:800, height:'auto'}}/></div>

シリアルモニターを終了したい場合は、ショートカット `Ctrl+]` を使用できます。

:::tip
ESP-IDF環境でよく使用されるコマンドをいくつか紹介します：

- `idf.py menuconfig`: プロジェクト設定メニューを開きます。
- `idf.py build`: プロジェクトをビルドします。
- `idf.py flash`: ビルドされたファームウェアを接続されたデバイスに書き込みます。
- `idf.py monitor`: シリアルモニターを開始してデバイスからの出力を表示します。
- `idf.py clean`: ビルドディレクトリをクリーンします。
- `idf.py fullclean`: ダウンロードされた依存関係を含む完全なクリーンを実行します。
- `idf.py set-target`: プロジェクトのターゲットチップを設定します。
- `idf.py size`: ビルドされたファームウェアのサイズ情報を表示します。
- `idf.py app`: プロジェクト内のアプリケーションを管理します。
- `idf.py component`: プロジェクト内のコンポーネントを管理します。

:::

おめでとうございます！Ubuntu システムにESP-IDFを正常にインストールし、Matter開発の旅の基盤を築きました。Seeed Studioは、Matterの文脈でXIAO ESP32シリーズの開発ドキュメントを継続的に強化・拡張していきます。ESP-IDFのセットアップと設定が完了したことで、Matter開発の旅の次の段階に進む準備が整いました。

Seeed Studioは、Matter開発体験を促進するための包括的なリソースとサポートの提供に取り組んでいます。XIAO ESP32シリーズに特化した今後のMatter専用ドキュメントとチュートリアルにご注目ください。これらのリソースは、ESP-IDFフレームワークを活用してMatterプロトコルに準拠した最先端のスマートホームデバイスを構築するプロセスをガイドします。

Matter開発をより深く掘り下げる際は、フレームワークの機能とベストプラクティスに関する詳細な情報について、公式ESP-IDFドキュメントを参照してください。活発な開発者とエンスージアストのコミュニティと関わり、知識を交換し、ガイダンスを求め、革新的なプロジェクトで協力してください。

ESP-IDFの力とSeeed Studioからの今後のMatter開発リソースにより、相互運用性とユーザーエクスペリエンスの境界を押し広げる優れたスマートホームソリューションを作成するための十分な装備が整っています。前方に広がるエキサイティングな可能性を受け入れ、自信を持ってMatter開発の旅に乗り出してください。ハッピーコーディング！

## トラブルシューティング

### 環境のインストール中にさまざまなエラーが発生するのはなぜですか？

ESP-IDFの環境は少し要求が厳しく、開発によく使用されるUbuntuホストを使用している場合、一部のPython依存関係の異なるバージョンによりエラーが発生する可能性があります。MatterフレームワークはSeeedによって開発されたものではないため、この部分の問題については私たちにできることはおそらくありません。そのため、インストールで問題が発生した場合は、公式の**[ESP-IDFリポジトリ](https://github.com/espressif/esp-idf)**にissueを提出してヘルプを求めることをお勧めします。

## リソース

- **[ESPRESSIF IDF - Get Started](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html)**

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
