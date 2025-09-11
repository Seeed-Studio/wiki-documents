---
description: ネイティブファームウェアをフラッシュする
title: ファームウェアの更新とフラッシュ
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware
toc_max_heading_level: 4
sidebar_position: 3
last_update:
  date: 11/17/2023
  author: Spencer
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **ネイティブファームウェアをフラッシュする方法**

SenseCAP indicatorには2つのMCU、ESP32-S3とRP2040があります。このチュートリアルでは、開発者が始めるための包括的なガイドを提供します。これには、工場出荷時のネイティブファームウェアのフラッシュと、初期出荷デバイスの最新ファームウェアへの更新が含まれます。

ファームウェアの更新は、特に以下の2つのシナリオで適用されます：

1. 2023年6月以前にOpenAIファームウェアなしの製品を購入し、ファームウェアバージョンが`1.0.0`の場合、OpenAI機能を含む最新ファームウェアをダウンロードして更新できます。最新ファームウェアは[こちら](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases)からダウンロードできます。
2. アプリケーションを開発し、カスタムファームウェアをフラッシュしたい場合は、[以下で提供されるチュートリアル](#flash-esp32-s3-frimware-using-espressif-idf)に従うことができます。

簡単に言うと、以下の理由でこのチュートリアルが必要です：

1. ESP32-S3またはRP2040にフラッシュする必要があるファームウェアがある。
2. コードを変更し、それをコンパイルしてデバイスにフラッシュする必要がある。

このチュートリアルに入りましょう。

## 準備

始めるために必要なのは、SenseCAP IndicatorとWindows/Mac/Linuxコンピューターだけです。

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"/></div>

## ネイティブファームウェアの取得

SenseCAP Indicatorのデフォルト出荷ファームウェアは、ESP32-S3とRP2040の両方で完全にオープンソースです。

:::tip 標準ファームウェアを取得するには2つのオプションがあります：

- **ソースコード：** フラッシュする前に、要件に応じてコードを変更するオプションがあります。**コンパイル**するためにツールチェーン（[ESP-IDF](#ESP-IDF)、[Arduino](#RP_Arduino)）が必要です。
- **ファームウェア：** コードの変更やコンパイルを必要とせずに、事前にコンパイルされたバイナリファイルを直接フラッシュします。[Esptool](#ESPTOOL)や[Flash Download Tools](#Flash_Tools)などのツールを使用します。
:::

**ソースコード**

- [🖱️ESP32-S3ファームウェアソースコードを取得するにはクリック](https://github.com/Seeed-Solution/sensecap_indicator_esp32)
- [🖱️RP2040 Arduinoサンプルソースコードを取得するにはクリック](https://github.com/Seeed-Solution/sensecap_indicator_rp2040)

**ファームウェア**

- [🖱️ESP32-S3ファームウェアをダウンロードするにはクリック](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0)
- [🖱️RP2040ファームウェアをダウンロードするにはクリック](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0)

## **ESP32-S3**用

### **ESP-IDF** {#ESP-IDF}

> ESP-IDF（Espressif IoT Development Framework）は、ESP32およびESP8266シリーズのマイクロコントローラー専用のファームウェアとアプリケーションを設計するために、Espressif Systemsが提供するソフトウェア開発フレームワークです。詳細については、[ESP-IDFプログラミングガイド](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)を参照してください。

ソースコードをファームウェアにコンパイルすることを選択した場合、コンパイルプロセスを実行するためにESP-IDFが必要です。

:::note **注意**：
ESP-IDFのバージョンはv5.0以上である必要があります。古いバージョンを使用している場合は、最新バージョンに更新する必要があります。
:::

新しいユーザーの場合、このビデオは以下の手順をよりよく理解するのに役立つかもしれません：

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/oqJz6zKfc4A?si=glzTFfR7m392eITb" title="Set Up the ESP-IDF Toolchain for SenseCAP Indicator on Windows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### **ツールチェーンのインストール**

<Tabs
groupId="operating-systems"
defaultValue='Win'
values={[
{label: 'Windows', value: 'Win'},
{label: 'Linux and MacOS', value: 'Unix'},
]}>
<TabItem value="Win">

  > 公式Espressifドキュメント：[Windows用ツールチェーンの標準セットアップ](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/windows-setup.html)

  **オプション1：オフラインインストーラーの使用**

  Windowsユーザーの場合、ESP-IDFオフラインインストーラーを直接ダウンロードするオプションがあります。直接ダウンロードリンクは次のとおりです：[🖱️オフラインインストーラーv5.1.1をダウンロード](https://dl.espressif.com/dl/idf-installer/esp-idf-tools-setup-offline-5.1.1.exe)

  **オプション2：推奨スクリプトの使用**

[コマンドプロンプトの使用](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html#using-the-command-prompt)に移動してください

</TabItem>

<TabItem value="Unix">

  > 公式Espressifドキュメント：[LinuxとmacOS用標準ツールチェーンセットアップ](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/linux-macos-setup.html)

  LinuxまたはmacOSの場合、このガイドに従ってgitリポジトリのバージョンを変更できます。

  ```
  git clone --recursive https://github.com/espressif/esp-idf.git
  ```

**esp-idfディレクトリに移動**:

1. `./install.sh esp32s3`を実行して、ESP32-S3サポートを追加します（SenseCAP indicatorに必要）
2. `./export.sh`と入力して、現在のターミナルセッションでPATHとIDF_PATH変数を設定します。

任意のシェルセッションで呼び出したい場合は、シェル設定ファイル（例：~/.bash_profile）に以下の行を追加できます：

```
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

その後、`get_idf` を使用して環境をアクティベートできます。[^refer](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html#step-4-set-up-the-environment-variables)

</TabItem>
</Tabs>

#### プロジェクトのビルドとフラッシュ {#BUILD}

ソースコードをファームウェアにコンパイルする場合は、コンパイルプロセスを実行するためにESP-IDFが必要になります。

<!-- コンパイル済みファームウェアのフラッシュとIDFを使用した直接ファームウェアダウンロードを区別してください！ -->

プロジェクトをビルド、フラッシュ、モニターするには、以下のコマンドを実行してください：

```
cd  <your_sdk_path>/examples/indicator_basis/
idf.py -p PORT build flash monitor
```

:::tip
`PORT`を指定しない場合、IDFは利用可能なポートを自動的に選択します。
:::

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"/></div>

<!-- Need to change the PIcure -->

ここまでで、`idf.py -p PORT flash`コマンドを入力することで、ファームウェアがESP32-S3に正常にフラッシュされました。

<!-- Why is this patch not placed in the later Q/A section? Also, are there too few Compile Code instructions? There's no Compile Code, just direct flashing. -->

### **Esptool** {#ESPTOOL}

> [ESPtool - GitHub](https://github.com/espressif/esptool)は、Pythonベースのオープンソースユーティリティで、Espressifチップ内のROMブートローダーとプラットフォーム非依存の方法で通信する機能を提供します。

Esptoolは、Pythonスクリプトの一部として使用できます。このガイドでは、[Esptoolリリースページ](https://github.com/espressif/esptool/releases)で利用可能な`パッケージソフトウェア`を使用します。お使いのコンピューターのオペレーティングシステムに対応するソフトウェアを選択してください。

#### フラッシュ用のEsptoolの使用

ESP32-S3マイクロコントローラーにファームウェアをフラッシュするためにEsptoolを効果的に活用する方法を示す2つのスクリプトが提供されています。

:::note **注意**:
提供されているスクリプトはWindowsオペレーティングシステム向けに調整されていることにご注意ください。異なるオペレーティングシステムを使用している場合は、お使いの環境に合わせてスクリプトを適応させる必要があります。
:::

merge.batスクリプトは、ブートローダー、パーティションテーブル、およびインジケーターベースバイナリを単一のファームウェアファイルに巧妙に統合するため、特に有用です。マージが完了すると、このファームウェアはflash.batスクリプトを使用してESP32-S3にシームレスにフラッシュできます。プロンプトが表示されたら、デバイスに対応するCOMポートを入力すると、フラッシュプロセスが開始されます。完全な操作は以下のように要約できます：

```sh title="merge.bat"
esptool.exe --chip esp32s3 ^
merge_bin -o sensecap_indicator_basis_v1.0.0.bin ^ # Target file name
--flash_mode dio ^
--flash_size 8MB ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

または、ファイルをマージしてからフラッシュするのではなく、個別のバイナリファイルをフラッシュしたい場合は、`just_flash.bat` スクリプトを直接使用できます：

```sh title="just_flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

And for a straightforward flashing process using the merged firmware:

```sh title="flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z 0x0 indicator_basis_v1.0.0.bin
```

> 開始（0x0）アドレスに特に注意してください。特にバイナリをマージしない場合は注意が必要です。個別のバイナリファイルについては、[個別バイナリファイル用Flash Download Tools](#Address_Note)の手順を参照してください。これらのガイドラインに従うことで、エラーのないフラッシュが保証されます。

これらのスクリプトを利用するには、コードをプロジェクトフォルダ内の`merge.bat`と`flash.bat`という名前の別々のテキストファイルに保存してください。この整理方法により、アクセスと使用が簡単になります。

これらのスクリプトを使用することで、ファームウェアの準備とフラッシュの両方の段階を合理化し、よりスムーズで信頼性の高いプロセスに貢献します。

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

1. `merge.bat`を使用してバイナリをマージします。
2. `flash.bat`を使用してマージされたファームウェアをフラッシュします。

#### ファームウェアのフラッシュ

ファームウェアのフラッシュには、提供されている`flash.bat`スクリプトを使用できます。このスクリプトは、ESP32-S3マイクロコントローラーにファームウェアをフラッシュするプロセスを簡素化するように設計されています。

<details>
   <summary>flash.batコードを表示</summary>
   ```bat
   @echo off
   setlocal
   cd /d "%~dp0"
   :: Set Chip
   set chip=esp32s3
   :: Set Baud
   set baud=921600
   :: List COM ports
   echo Available ports and devices:
   echo.
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"COM" ^| findstr /C:"CH340"') do (
   echo %%A
   )
   :: Prompt for port
   :chooseport
   echo.
   echo Please enter the COM port to use (e.g., COM5):
   set /p port=
   :: Check if chosen port is valid and contains "CH340"
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"%port%" ^| findstr /C:"CH340"') do (
   set device=%%A
   goto :flash
   )
   echo Port %port% not found
   goto :chooseport
   :flash:: Print chosen parameters
   echo.
   echo You have chosen:
   echo Chip: %chip%
   echo Port: %port% - %device%
   echo Baud: %baud%
   @REM echo Press any key to continue to...
   @REM pause >nul
   :: Run esptool for the single file
   esptool.exe --chip %chip% --port %port% --baud %baud% write_flash -z 0x0 indicator_basis_v1.0.0.bin
   if ERRORLEVEL 1 (
   echo Flashing with the single file failed with error %ERRORLEVEL%.
   goto :end
   )
   :: End of script
   :end
   endlocal
   ```
</details>

#### バイナリのマージ

提供された `merge.bat` スクリプトを使用して、必要なバイナリファイルを1つのファームウェアファイルにマージできます。このスクリプトはプロセスを簡素化し、フラッシュを成功させるための正しいマージを保証します。これにより、[個別ファイルをフラッシュする](#Address_Note)のではなく、単一のbinファイルをフラッシュできます。

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

> **Flash Download Tools** は、ESP8266 および ESP32 シリーズのマイクロコントローラーにファームウェアをプログラムまたはフラッシュするために使用されます。ESP マイクロコントローラーにファームウェアを簡単にフラッシュできるグラフィカルユーザーインターフェース（GUI）を提供します。

プリコンパイル済みファームウェアをフラッシュする手順に従ってください：

**ダウンロード:**
[Flash Download Tools (Windows のみ)](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

- **ステップ 1**: `.exe` ファイルを**ダブルクリック**してツールのメインインターフェースに入ります。

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
        <td>
            <div style={{textAlign: 'center'}}>ESP32-S3</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>WorkMode</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>Develop</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>LoadMode</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>UART</div>
        </td>
    </tr>
  </table>
</div>

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"/></div>

- **Step 3**: USB type-CケーブルでSenseCAP Indicatorをラップトップに接続します。

- **Step 4**: SPIダウンロードタブで「...」をクリックし、先ほどダウンロードしたファームウェアに移動します。

- **Step 5**: SPIフラッシュを設定します：

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
        <td>
            <div style={{textAlign: 'center'}}>40MHz</div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign: 'center'}}><strong>SPI MODE</strong></div>
        </td>
        <td>
            <div style={{textAlign: 'center'}}>DIO</div>
        </td>
    </tr>
  </table>
</div>

- **ステップ 6**: ダウンロードパネルを設定します：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>

- **COM**: デバイスマネージャーでポートを確認し、USB-SERIALが正しいものです。
（`ここではCOM4を選択しました`）
- **Baud**: 921600（推奨値）

<!-- Previous: Click `Start` Downloading -->

次に`START`をクリックして書き込みを開始します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"/></div>

`FINISH`と表示されたら、ファームウェアの書き込みが完了しています。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"/></div>

#### 個別バイナリファイル用のFlash Download Tools {#Address_Note}

前述のガイドでは、バイナリファイル「Default_Factory_Firmware_ESP32-S3.bin」は3つのバイナリを1つにマージしたものです。

しかし、ESP-IDFを使用してファームウェアをビルドしている場合、単一ファイルを直接書き込むとエラーが発生する可能性があります。代わりに、ビルドした**3つの個別バイナリファイル**を見つけて、以下のように正しいアドレス（独自のアドレスを使用できます）を指定する必要があります：

- **bootloader.bin** ----> **0x0**
- **partion-table.bin** ----> **0x6800**
- **termial_demo.bin** ----> **0x10000**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"/></div>

## **RP2040**用

### Arduino IDEによる書き込み {#RP_Arduino}

RP2040開発ツールはArduinoを活用してコーディング体験を向上させます。

> Arduino IDEはArduinoボード用のコーディング無料ソフトウェアです。ユーザーフレンドリーなインターフェースで、コードを簡単に書いてアップロードできます。C++のシンプル版をベースにしており、ライブラリと例を提供するため、初心者に最適です。

**ダウンロード:**

- **ステップ 1**: [Arduino IDE](https://www.arduino.cc/en/software)をインストール

- **ステップ 2**: Raspberry Pi Picoボードを追加

Arduino IDEを開き、**Arduino IDE** > **Preferences**をクリックし、以下のURLを**Additional Boards Manager URLs**にコピーします：

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png" style={{width:680, height:'auto'}}/></div>
        </td>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
  </table>
</div>

**Tools** > **Board** > **Board Manager** をクリックします。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"/></div>

「indicator」を検索し、Board Manager で「Raspberry Pi Pico/RP2040」をインストールします。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"/></div>

- **ステップ 3**: ライブラリを追加

:::note **参考ライブラリ**

- Sensirion Core: [Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core)
- PacketSerial : [Serial communication protoco](https://github.com/bakercp/PacketSerial)
- Sensirion I2C SGP40 : [SGP40 TVOC sensor library](https://github.com/Sensirion/arduino-i2c-sgp40)
- Sensirion I2C SCD4x : [SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)
- Sensirion Gas Index Algorithm : [Transfer index library](https://github.com/Sensirion/arduino-gas-index-algorithm)
- Seeed_Arduino_AHT20 : [AHT20 temperature and humidity sensor library](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20)
:::

Arduino IDE では、`Library Manager` で検索できます。例えば `Seeed_Arduino_AHT20` を検索してインストールします。

<details>
<summary>オフラインインストールのプレビューをクリック</summary>

*オフライン* でインストールするには、GitHub から **repo zip をダウンロード** し、**Sketch** -> **Include Library** -> **Add .ZIP Library** に移動して、ダウンロードしたライブラリを選択します。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

- **ステップ 4**: 付属の USB Type-C ケーブルでデバイスを PC に接続します。

- **ステップ 5**: ボードとポートを選択

「Indicator」を検索し、`Seeed INDICATOR RP2040` ボードを選択して、`usbmodem` シリアルポートを選択します。

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
     <td>
        <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png" style={{width:680, height:'auto'}}/></div>
    </td>
  </table>
</div>

- **ステップ 6**: サンプルコードファイルを開く

**File** -> **Open**を選択し、サンプルコードファイル（[.inoファイル](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main/examples/terminal_rp2040)）を選択します。

サンプルコードファイルを提供していますので、必要に応じてコードを修正できます。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **ステップ 7**: ファイルを検証してアップロードする

<div class="table-center">
  <table align="center">
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png" style={{width:680, height:'auto'}}/></div>
        </td>
    </tr>
  </table>
</div>

ここで、RP2040でのファームウェアのビルドとフラッシュ（ダウンロード）が完了しました。

### .uf2ファイルのフラッシュ

- **ステップ1**: デバイスをPCに接続

針を使ってこの内部ボタンを長押しし、付属のUSB Type-CケーブルでデバイスをPCに接続し、接続後にボタンを離します。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"/></div>

- **ステップ2**: ファームウェアフラッシュ

接続が成功すると、PCにディスクが表示されます。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"/></div>

[.uf2](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2)ファイルをディスクにコピーすると、ディスクがログアウトします。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"/></div>

アップグレードが自動的に実行されます。

## ESP32とRP2040の通信プロトコル

ESP32とRP2040はシリアルポート通信を使用し、[cobs](http://www.stuartcheshire.org/papers/COBSforToN.pdf)通信プロトコルを使用します。デモで使用されるコマンドのリストは以下の通りです：

コマンド形式は、パケットタイプとパケットパラメータで構成されます。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"/></div>

## リソース

[SenseCAP Indicator ESP32 SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)

[SenseCAP Indicator RP2040 Demo](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main)

## FAQ

<details>
    <summary>シリアルポートを区別する方法は？</summary>
    <Tabs
    groupId="operating-systems"
    defaultValue='Win'
    values={[
    {label: 'Windows', value: 'Win'},
    {label: 'MacOS', value: 'Unix'},
    ]}
    >
    <TabItem value="Win" >
      デバイスマネージャーでポートを確認してください
      - "USB Serial Device(COMx)"または"USB 串行设备"はRP2040用です
      - "USB-SERIAL CH340"はESP32用です
      簡単に言うと、CH340ポートはESP32用です。
      <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"/></div>
    </TabItem>
    <TabItem value="Unix">
      - "/dev/cu.usbmodem"はRP2040用です
      <div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"/></div>
    </TabItem>
    </Tabs>
</details>

# **最近の更新**

- 2023-11-17
  - パッチセクションを削除
- 2023-08-25
  - パッチセクションをより明確にしました
- 2023-07-25
  - Esptoolを使用したファームウェアフラッシュの内容を追加
- 2023-05-29
  - パッチセクションを追加

# **技術サポート**

**SenseCAP Indicatorでお困りですか？サポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
