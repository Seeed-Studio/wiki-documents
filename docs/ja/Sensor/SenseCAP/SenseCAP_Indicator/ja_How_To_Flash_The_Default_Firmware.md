---
description: ネイティブファームウェアのフラッシュ
title: ファームウェアの更新とフラッシュ  
keywords:
- SenseCAP インジケーター
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware
toc_max_heading_level: 4
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **ネイティブファームウェアのフラッシュ方法**

SenseCAP インジケーターには、ESP32-S3 と RP2040 の 2 つの MCU が搭載されています。このチュートリアルでは、開発者がスムーズに作業を開始できるよう、工場出荷時のネイティブファームウェアのフラッシュや、初期出荷デバイスを最新のファームウェアに更新する方法を包括的に説明します。

ファームウェアの更新は、特に以下の 2 つのシナリオに適用されます：

1. 2023 年 6 月以前に OpenAI ファームウェアが含まれていない製品を購入し、ファームウェアバージョンが `1.0.0` の場合、OpenAI 機能を含む最新のファームウェアをダウンロードして更新できます。最新のファームウェアは[こちら](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases)からダウンロードできます。
2. アプリケーションを開発し、カスタムファームウェアをフラッシュしたい場合は、[以下のチュートリアル](#flash-esp32-s3-frimware-using-espressif-idf)に従ってください。

簡単に言えば、このチュートリアルが必要な理由は以下の通りです：
1. ESP32-S3 または RP2040 にフラッシュする必要があるファームウェアを持っている。
2. コードを変更し、それをコンパイルしてデバイスにフラッシュする必要がある。

それでは、このチュートリアルを始めましょう。

## 準備

作業を始めるには、SenseCAP インジケーターと Windows/Mac/Linux コンピューターが必要です。

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"/></div>

## ネイティブファームウェアの取得

SenseCAP インジケーターの出荷時のデフォルトファームウェアは、ESP32-S3 と RP2040 の両方で完全にオープンソースです。

:::tip 以下の 2 つの方法で出荷時ファームウェアを取得できます：

- **ソースコード：** フラッシュする前に、必要に応じてコードを変更することができます。この場合、**コンパイル**するためにツールチェーン（[ESP-IDF](#ESP-IDF)、[Arduino](#RP_Arduino)）が必要です。
- **ファームウェア：** コードの変更やコンパイルを行わずに、事前にコンパイルされたバイナリファイルを直接フラッシュできます。[Esptool](#ESPTOOL) や [Flash Download Tools](#Flash_Tools) などのツールを使用します。
:::

**ソースコード**

- [🖱️ESP32-S3 ファームウェアソースコードを取得](https://github.com/Seeed-Solution/sensecap_indicator_esp32)
- [🖱️RP2040 Arduino サンプルソースコードを取得](https://github.com/Seeed-Solution/sensecap_indicator_rp2040)

**ファームウェア**

- [🖱️ESP32-S3 ファームウェアをダウンロード](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0)
- [🖱️RP2040 ファームウェアをダウンロード](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0)

## **ESP32-S3** の場合

### **ESP-IDF** {#ESP-IDF}

> ESP-IDF（Espressif IoT Development Framework）は、Espressif Systems が提供するソフトウェア開発フレームワークで、ESP32 および ESP8266 シリーズのマイクロコントローラー向けにファームウェアやアプリケーションを設計するためのものです。詳細については、[ESP-IDF プログラミングガイド](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)を参照してください。

ソースコードをファームウェアにコンパイルする場合、ESP-IDF が必要です。

:::note **注意**：
ESP-IDF のバージョンは v5.0 以上である必要があります。古いバージョンを使用している場合は、最新バージョンに更新する必要があります。
:::

初心者の方には、以下の動画が手順を理解するのに役立つかもしれません：

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/oqJz6zKfc4A?si=glzTFfR7m392eITb" title="Windows で SenseCAP インジケーター用 ESP-IDF ツールチェーンをセットアップする方法" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### **ツールチェーンのインストール**

<Tabs
groupId="operating-systems"
defaultValue='Win'
values={[
{label: 'Windows', value: 'Win'},
{label: 'Linux と MacOS', value: 'Unix'},
]}>
<TabItem value="Win">

  > 公式 Espressif ドキュメント：[Windows 用ツールチェーンの標準セットアップ](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/windows-setup.html)

  **オプション 1: オフラインインストーラーを使用**

  Windows ユーザーは、ESP-IDF オフラインインストーラーを直接ダウンロードすることができます。以下のリンクから直接ダウンロードできます：[🖱️オフラインインストーラー v5.1.1 をダウンロード](https://dl.espressif.com/dl/idf-installer/esp-idf-tools-setup-offline-5.1.1.exe)

  **オプション 2: 推奨スクリプトを使用**

[コマンドプロンプトを使用する方法](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html#using-the-command-prompt)に移動してください。

</TabItem>

<TabItem value="Unix">

  > 公式 Espressif ドキュメント：[Linux と macOS 用ツールチェーンの標準セットアップ](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/linux-macos-setup.html)

  Linux または MacOS を使用している場合、以下のガイドに従って git リポジトリのバージョンを変更できます。

  ```
  git clone --recursive https://github.com/espressif/esp-idf.git
  ```

**esp-idf ディレクトリに移動**:
1. `./install.sh esp32s3` を実行して ESP32-S3 サポートを追加します（SenseCAP インジケーターに必要）。
2. `./export.sh` を入力して、現在のターミナルセッションで PATH と IDF_PATH 変数を設定します。

任意のシェルセッションで呼び出したい場合は、以下の行をシェル構成ファイル（例：~/.bash_profile）に追加できます：

```
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

その後、`get_idf` を使用して環境をアクティブ化できます。[^参照](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html#step-4-set-up-the-environment-variables)

</TabItem>
</Tabs>

#### プロジェクトのビルドとフラッシュ {#BUILD}

ソースコードをファームウェアにコンパイルする場合、ESP-IDF が必要です。

<!-- コンパイル済みファームウェアのフラッシュと、IDF を使用した直接ダウンロードの違いを明確にしてください！ -->

プロジェクトをビルド、フラッシュ、モニタリングするには、以下のコマンドを実行してください：

```
cd  <your_sdk_path>/examples/indicator_basis/
idf.py -p PORT build flash monitor
```

:::tip
`PORT`を指定しない場合、IDFは自動的に利用可能なポートを選択します。
:::

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"/></div>

<!-- 画像を変更する必要があります -->

ここまでで、コマンド `idf.py -p PORT flash` を入力することで、ファームウェアがESP32-S3に正常にフラッシュされました。

<!-- なぜこのパッチが後のQ/Aセクションに配置されていないのか？また、コンパイルコードの指示が少なすぎるのでは？コンパイルコードがなく、直接フラッシュしています。 -->

### **Esptool** {#ESPTOOL}

> [ESPtool - GitHub](https://github.com/espressif/esptool) は、EspressifチップのROMブートローダーと通信するためのプラットフォーム非依存の方法を提供する、Pythonベースのオープンソースユーティリティです。

EsptoolはPythonスクリプトの一部として使用できます。このガイドでは、[Esptoolリリースページ](https://github.com/espressif/esptool/releases)で利用可能な`パッケージ化されたソフトウェア`を使用します。お使いのコンピュータのオペレーティングシステムに対応するソフトウェアを選択してください。

#### Esptoolを使用したフラッシュ

Esptoolを使用してESP32-S3マイクロコントローラーにファームウェアをフラッシュする方法を示す2つのスクリプトが提供されています。

:::note **注意**:
提供されているスクリプトはWindowsオペレーティングシステム向けに調整されています。他のオペレーティングシステムを使用している場合は、スクリプトを環境に合わせて調整する必要があります。
:::

`merge.bat`スクリプトは特に便利で、ブートローダー、パーティションテーブル、およびインジケーターベーシスバイナリを1つのファームウェアファイルに統合します。統合後、このファームウェアは`flash.bat`スクリプトを使用してESP32-S3にシームレスにフラッシュできます。プロンプトが表示されたら、デバイスに対応するCOMポートを入力し、フラッシュプロセスを開始します。操作全体は以下のように要約されます：

```sh title="merge.bat"
esptool.exe --chip esp32s3 ^
merge_bin -o sensecap_indicator_basis_v1.0.0.bin ^ # ターゲットファイル名
--flash_mode dio ^
--flash_size 8MB ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

また、ファイルを統合せずに個別のバイナリファイルを直接フラッシュしたい場合は、`just_flash.bat`スクリプトを使用できます：

```sh title="just_flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

統合されたファームウェアを使用して簡単にフラッシュする場合：

```sh title="flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z 0x0 indicator_basis_v1.0.0.bin
```

> 特にバイナリを統合しない場合、開始アドレス(0x0)に注意してください。個別のバイナリファイルについては、[個別バイナリファイルのフラッシュダウンロードツール](#Address_Note)の指示を参照してください。これらのガイドラインに従うことで、エラーのないフラッシュが可能になります。

これらのスクリプトを使用するには、コードをそれぞれ`merge.bat`および`flash.bat`という名前のテキストファイルとしてプロジェクトフォルダ内に保存してください。この方法により、アクセスと使用が簡単になります。

これらのスクリプトを使用することで、ファームウェアの準備とフラッシュの両方の段階が効率化され、スムーズで信頼性の高いプロセスが実現します。

```
├── indicator_basis
│   ├── CMakeLists.txt
│   ├── build
│   ├── docs
│   ├── main
│   ├── partitions.csv
│   ├── sdkconfig
│   └── .defaults
│   └── flash.bat
│   └── merge.bat
```

1. `merge.bat`を使用してバイナリを統合します。
2. `flash.bat`を使用して統合されたファームウェアをフラッシュします。

#### ファームウェアのフラッシュ

ファームウェアをフラッシュするには、提供されている`flash.bat`スクリプトを使用できます。このスクリプトは、ESP32-S3マイクロコントローラーにファームウェアをフラッシュするプロセスを簡素化するよう設計されています。

<details>
   <summary>flash.batコードを表示</summary>
   ```bat
   @echo off
   setlocal
   cd /d "%~dp0"
   :: チップを設定
   set chip=esp32s3
   :: ボーレートを設定
   set baud=921600
   :: COMポートを一覧表示
   echo 利用可能なポートとデバイス:
   echo.
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"COM" ^| findstr /C:"CH340"') do (
   echo %%A
   )
   :: ポートを入力
   :chooseport
   echo.
   echo 使用するCOMポートを入力してください (例: COM5):
   set /p port=
   :: 選択したポートが有効で"CH340"を含むか確認
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"%port%" ^| findstr /C:"CH340"') do (
   set device=%%A
   goto :flash
   )
   echo ポート %port% が見つかりません
   goto :chooseport
   :flash:: 選択したパラメータを表示
   echo.
   echo 選択内容:
   echo チップ: %chip%
   echo ポート: %port% - %device%
   echo ボーレート: %baud%
   @REM echo 続行するには任意のキーを押してください...
   @REM pause >nul
   :: 単一ファイル用にesptoolを実行
   esptool.exe --chip %chip% --port %port% --baud %baud% write_flash -z 0x0 indicator_basis_v1.0.0.bin
   if ERRORLEVEL 1 (
   echo 単一ファイルでのフラッシュがエラー %ERRORLEVEL% で失敗しました。
   goto :end
   )
   :: スクリプトの終了
   :end
   endlocal
   ```
</details>

#### バイナリの統合
提供されている`merge.bat`スクリプトを使用して、必要なバイナリファイルを1つのファームウェアファイルに統合できます。このスクリプトはプロセスを簡素化し、正確な統合を保証することで、成功したフラッシュを可能にします。これにより、[個別ファイルのフラッシュ](#Address_Note)を行わずに単一のbinファイルをフラッシュできます。

<details>
   <summary>merge.batコードを表示</summary>
   ```bat
   @echo off
   SETLOCAL
   SET CurrentDir=%cd%
   SET ScriptDir=%~dp0
   SET CurrentDir=%CurrentDir:~0,-1%
   SET ScriptDir=%ScriptDir:~0,-1%
   IF NOT "%CurrentDir%"=="%ScriptDir%" (
   cd /d "%ScriptDir%"
   )
   esptool.exe --chip esp32s3 ^
   merge_bin -o indicator_basis_v1.0.0.bin ^
   --flash_mode dio ^
   --flash_size 8MB ^
   0x0 ../../build/bootloader/bootloader.bin ^
   0x8000 ../../build/partition_table/partition-table.bin ^
   0x10000 ../../build/indicator_basis.bin
   ENDLOCAL
   ```
</details>

### **Flash Download Tools** (Windows のみ) {#Flash_Tools}

> **Flash Download Tools** は、ESP8266 および ESP32 シリーズのマイクロコントローラーにファームウェアをプログラミングまたはフラッシュするために使用されます。これらのツールは、ESP マイクロコントローラーにファームウェアを簡単にフラッシュできるグラフィカルユーザーインターフェース (GUI) を提供します。

以下の手順に従って、事前にコンパイルされたファームウェアをフラッシュしてください：

**ダウンロード:**
[Flash Download Tools (Windows のみ)](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

- **ステップ 1**: `.exe` ファイルを **ダブルクリック** して、ツールのメインインターフェースに入ります。

- **ステップ 2**: 以下のオプションを選択します：

<div class="table-center">
  <table align="center">
    <tr>
        <th>オプション</th>
        <th>パラメータ</th>
    </tr>
    <tr>
        <td>
        <div style={{textAlign: 'center'}}><strong>Chip Type</strong></div>
        </td>
        <td><div  style={{textAlign: 'center'}}>ESP32-S3</div></td>
    </tr>
    <tr>
      <td>
      <div  style={{textAlign: 'center'}}> <strong>WorkMode</strong></div>
      </td>
      <td>
      <div  style={{textAlign: 'center'}}> Develop </div>
      </td>
    </tr>
    <tr>
      <td>
      <div  style={{textAlign: 'center'}}> <strong>LoadMode</strong></div>
      </td>
      <td>
      <div  style={{textAlign: 'center'}}> UART </div>
      </td>
    </tr>
  </table>
</div>

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"/></div>

- **ステップ 3**: USB Type-C ケーブルを使用して SenseCAP インジケーターをノートパソコンに接続します。

- **ステップ 4**: SPI Download タブで「...」をクリックし、ダウンロードしたファームウェアを選択します。

- **ステップ 5**: SPI フラッシュを設定します：

<div class="table-center">
  <table align="center">
    <tr>
        <th>オプション</th>
        <th>パラメータ</th>
    </tr>
    <tr>
        <td>
        <div style={{textAlign: 'center'}}><strong>SPI SPEED</strong></div>
        </td>
        <td><div  style={{textAlign: 'center'}}>40MHz</div></td>
    </tr>
    <tr>
      <td>
      <div  style={{textAlign: 'center'}}> <strong>SPI MODE</strong></div>
      </td>
      <td>
      <div  style={{textAlign: 'center'}}> DIO </div>
      </td>
    </tr>
  </table>
</div>

- **ステップ 6**: ダウンロードパネルを設定します：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>

- **COM**: デバイスマネージャーでポートを確認し、USB-SERIAL が正しいものです。
（`ここでは COM4 を選択`）
- **Baud**: 921600（推奨値）

その後、`START` をクリックしてフラッシュを開始します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"/></div>

`FINISH` と表示されたら、ファームウェアのフラッシュが完了です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"/></div>

#### 個別のバイナリファイル用の Flash Download Tools {#Address_Note}

前述のガイドでは、バイナリファイル "Default_Factory_Firmware_ESP32-S3.bin" は 3 つのバイナリを 1 つに統合しています。

しかし、ESP-IDF を使用してファームウェアをビルドする場合、単一ファイルを直接フラッシュするとエラーが発生する可能性があります。その代わりに、ビルドした **3 つの個別のバイナリファイル** を見つけて、以下のように正しいアドレスを指定する必要があります（独自のアドレスを使用することも可能です）：

- **bootloader.bin** ----> **0x0**
- **partion-table.bin** ----> **0x6800**
- **termial_demo.bin** ----> **0x10000**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"/></div>

## **RP2040**向け

### Arduino IDEを使用したフラッシュ {#RP_Arduino}

RP2040開発ツールは、Arduinoを活用してコーディング体験を向上させます。

> Arduino IDEは、Arduinoボード用の無料のソフトウェアです。使いやすいインターフェースを備えており、コードの記述とアップロードが簡単に行えます。C++の簡易版に基づいており、ライブラリや例が豊富で、初心者にも最適です。

**ダウンロード手順:**

- **ステップ 1**: [Arduino IDE](https://www.arduino.cc/en/software)をインストールします。

- **ステップ 2**: Raspberry Pi Picoボードを追加します。

Arduino IDEを開き、**Arduino IDE** > **Preferences**をクリックし、以下のURLを**Additional Boards Manager URLs**にコピーします：

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

**Tools** > **Board** > **Board Manager**をクリックします。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"/></div>

「indicator」と検索し、Boards Managerで「Raspberry Pi Pico/RP2040」をインストールします。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"/></div>

- **ステップ 3**: ライブラリを追加します。

:::note **参考用ライブラリ**
* Sensirion Core: [Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core)
* PacketSerial : [シリアル通信プロトコル](https://github.com/bakercp/PacketSerial)
* Sensirion I2C SGP40 : [SGP40 TVOCセンサーライブラリ](https://github.com/Sensirion/arduino-i2c-sgp40)
* Sensirion I2C SCD4x : [SCD41 CO2センサーライブラリ](https://github.com/Sensirion/arduino-i2c-scd4x)
* Sensirion Gas Index Algorithm : [ガスインデックスアルゴリズムライブラリ](https://github.com/Sensirion/arduino-gas-index-algorithm)
* Seeed_Arduino_AHT20 : [AHT20温湿度センサーライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20)
:::

Arduino IDE内で`Library Manager`を使用して検索し、例えば`Seeed_Arduino_AHT20`をインストールします。

<details>
<summary>オフラインインストールのプレビューをクリック</summary>

オフラインでインストールするには、GitHubから**リポジトリのZIPファイルをダウンロード**し、**Sketch** -> **Include Library** -> **Add .ZIP Library**を選択して、ダウンロードしたライブラリを選択します。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

- **ステップ 4**: 提供されたUSB Type-Cケーブルを使用してデバイスをPCに接続します。

- **ステップ 5**: ボードとポートを選択します。

「Indicator」と検索し、`Seeed INDICATOR RP2040`ボードを選択し、`usbmodem`シリアルポートを選択します。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png" style={{width:680, height:'auto'}}/></div></td>
  </table>
</div>

- **ステップ 6**: サンプルコードファイルを開きます。

**File** -> **Open**を選択し、サンプルコードファイル（[.inoファイル](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main/examples/terminal_rp2040)）を選択します。

サンプルコードファイルを提供していますので、必要に応じてコードを変更できます。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **ステップ 7**: ファイルを検証してアップロードします。
<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png" style={{width:680, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png"style={{width:680, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

これで、RP2040にファームウェアの構築とフラッシュ（ダウンロード）が完了しました。

### .uf2ファイルをフラッシュする

- **ステップ 1**: デバイスをPCに接続します。

針を使用して内部ボタンを長押しし、その後、提供されたUSB Type-CケーブルでデバイスをPCに接続し、接続後にボタンを離します。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"/></div>

- **ステップ 2**: ファームウェアのフラッシュ

接続が成功すると、PCにディスクが表示されます。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"/></div>

[.uf2ファイル](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2)をディスクにコピーすると、ディスクが自動的にログアウトします。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"/></div>

アップグレードは自動的に実行されます。

## ESP32 & RP2040 通信プロトコル

ESP32 と RP2040 はシリアルポート通信を使用し、[cobs](http://www.stuartcheshire.org/papers/COBSforToN.pdf) 通信プロトコルを採用しています。デモで使用されるコマンドの一覧は以下の通りです。

コマンド形式は、パケットタイプとパケットパラメータで構成されています。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"/></div>

## リソース

[SenseCAP Indicator ESP32 SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)

[SenseCAP Indicator RP2040 Demo](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main)

## FAQ

<details>
    <summary>シリアルポートをどのように区別しますか？</summary>
    <Tabs
    groupId="operating-systems"
    defaultValue='Win'
    values={[
    {label: 'Windows', value: 'Win'},
    {label: 'MacOS', value: 'Unix'},
    ]}
    >
    <TabItem value="Win" >
      デバイスマネージャーでポートを確認してください。
      - "USB Serial Device(COMx)" または "USB 串行设备" は RP2040 用です。
      - "USB-SERIAL CH340" は ESP32 用です。
      要するに、CH340 ポートは ESP32 用です。
      <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"/></div>
    </TabItem>
    <TabItem value="Unix">
      - "/dev/cu.usbmodem" は RP2040 用です。
      <div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"/></div>
    </TabItem>
    </Tabs>
</details>

# **最近の更新**

- 2023-11-17 
  - パッチセクションを削除
- 2023-08-25
  - パッチセクションをより明確化
- 2023-07-25
  - Esptool を使用したファームウェアのフラッシュに関する内容を追加
- 2023-05-29
  - パッチセクションを追加

# **技術サポート**

**SenseCAP Indicator に関するサポートが必要ですか？私たちがサポートします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>