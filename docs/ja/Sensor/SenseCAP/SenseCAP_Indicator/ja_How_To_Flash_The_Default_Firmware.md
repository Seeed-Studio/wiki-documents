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

SenseCAP indicatorには2つのMCU、ESP32-S3とRP2040があります。このチュートリアルは、開発者がオンボードするための包括的なガイドを提供し、工場出荷時のネイティブファームウェアのフラッシュと、初期出荷デバイスの最新ファームウェアへの更新を含みます。

ファームウェアの更新は、特に以下の2つのシナリオで適用されます：

1. 2023年6月以前にOpenAIファームウェアなしの製品を購入し、ファームウェアバージョンが`1.0.0`の場合、OpenAI機能を含む最新ファームウェアをダウンロードして更新できます。最新ファームウェアは[こちら](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases)からダウンロードできます。
2. アプリケーションを開発し、カスタムファームウェアをフラッシュしたい場合は、[以下で提供されるチュートリアル](#flash-esp32-s3-frimware-using-espressif-idf)に従うことができます。

簡単に言うと、以下の理由でこのチュートリアルが必要です：

1. ESP32-S3またはRP2040にフラッシュする必要があるファームウェアがある。
2. コードを変更し、それをコンパイルしてデバイスにフラッシュする必要がある。

それでは、このチュートリアルに入りましょう。

## 準備

開始するために必要なのは、SenseCAP IndicatorとWindows/Mac/Linuxコンピューターだけです。

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"/></div>

## ネイティブファームウェアの取得

SenseCAP Indicatorのデフォルト出荷ファームウェアは、ESP32-S3とRP2040の両方で完全にオープンソースです。

:::tip 工場出荷時ファームウェアを取得するには2つのオプションがあります：

- **ソースコード：** フラッシュする前に、要件に応じてコードを変更するオプションがあります。**コンパイル**するためにツールチェーン（[ESP-IDF](#ESP-IDF)、[Arduino](#RP_Arduino)）が必要です。
- **ファームウェア：** コードの変更やコンパイルを必要とせずに、プリコンパイルされたバイナリファイルを直接フラッシュします。[Esptool](#ESPTOOL)や[Flash Download Tools](#Flash_Tools)などのツールを使用します。
:::

**ソースコード**

- [🖱️ESP32-S3ファームウェアソースコードを取得するにはクリック](https://github.com/Seeed-Solution/sensecap_indicator_esp32)
- [🖱️RP2040 Arduinoサンプルソースコードを取得するにはクリック](https://github.com/Seeed-Solution/sensecap_indicator_rp2040)

**ファームウェア**

- [🖱️ESP32-S3ファームウェアをダウンロードするにはクリック](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0)
- [🖱️RP2040ファームウェアをダウンロードするにはクリック](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0)

## **ESP32-S3**用

### **ESP-IDF** {#ESP-IDF}

> ESP-IDF（Espressif IoT Development Framework）は、Espressif SystemsがESP32およびESP8266シリーズのマイクロコントローラー専用のファームウェアとアプリケーションを設計するために提供するソフトウェア開発フレームワークです。詳細については、[ESP-IDFプログラミングガイド](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)を参照してください。

ソースコードをファームウェアにコンパイルすることを選択した場合、コンパイルプロセスを実行するためにESP-IDFが必要です。

:::note **注意**：
ESP-IDFのバージョンはv5.0以上である必要があります。古いバージョンを使用している場合は、最新バージョンに更新する必要があります。
:::

新しいユーザーの場合、このビデオが以下の手順をより良く理解するのに役立つかもしれません：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/oqJz6zKfc4A?si=glzTFfR7m392eITb" title="Set Up the ESP-IDF Toolchain for SenseCAP Indicator on Windows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

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

  Windowsユーザーの場合、ESP-IDFオフラインインストーラーを直接ダウンロードするオプションがあります。直接ダウンロードリンクはこちらです：[🖱️オフラインインストーラーv5.1.1をダウンロード](https://dl.espressif.com/dl/idf-installer/esp-idf-tools-setup-offline-5.1.1.exe)

  **オプション2：推奨スクリプトの使用**

[コマンドプロンプトの使用](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html#using-the-command-prompt)に移動してください

</TabItem>

<TabItem value="Unix">

  > 公式Espressifドキュメント：[LinuxとmacOS用標準ツールチェーンセットアップ](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/linux-macos-setup.html)

  LinuxまたはMacOSの場合、このガイドに従ってgitリポジトリのバージョンを変更できます。

  ```
  git clone --recursive https://github.com/espressif/esp-idf.git
  ```

**esp-idfディレクトリに移動**：

1. `./install.sh esp32s3`を実行して、ESP32-S3サポートを追加します（SenseCAP indicatorに必要）
2. `./export.sh`と入力して、現在のターミナルセッションでPATHとIDF_PATH変数を設定します。

任意のシェルセッションで呼び出したい場合は、シェル設定ファイル（例：~/.bash_profile）に以下の行を追加できます：

```
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

その後、`get_idf`を使用して環境をアクティブ化できます。[^refer](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html#step-4-set-up-the-environment-variables)

</TabItem>
</Tabs>

#### プロジェクトのビルドとフラッシュ {#BUILD}

ソースコードをファームウェアにコンパイルすることを選択した場合、コンパイルプロセスを実行するためにESP-IDFが必要です。

<!-- Please differentiate between flashing compiled firmware and directly downloading firmware using IDF! -->

プロジェクトをビルド、フラッシュ、監視するには、以下のコマンドを実行します：

```
cd  <your_sdk_path>/examples/indicator_basis/
idf.py -p PORT build flash monitor
```

:::tip
`PORT`なしでは、IDFが利用可能なポートを自動的に選択します。
:::

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"/></div>

<!-- Need to change the PIcure -->

この時点で、コマンド`idf.py -p PORT flash`を入力することで、ファームウェアがESP32-S3に正常にフラッシュされました。

<!-- Why is this patch not placed in the later Q/A section? Also, are there too few Compile Code instructions? There's no Compile Code, just direct flashing. -->

### **Esptool** {#ESPTOOL}

> [ESPtool - GitHub](https://github.com/espressif/esptool)は、Espressifチップ内のROMブートローダーと通信するためのプラットフォーム独立な方法を提供するPythonベースのオープンソースユーティリティです。

EsptoolはPythonスクリプトの一部として使用できます。このガイドでは、[Esptoolリリースページ](https://github.com/espressif/esptool/releases)で利用可能な`パッケージソフトウェア`を使用します。コンピューターのオペレーティングシステムに対応するソフトウェアを選択してください。

#### フラッシュ用Esptoolの使用

ESP32-S3マイクロコントローラーにファームウェアをフラッシュするためにEsptoolを効果的に活用する方法を示す2つのスクリプトが提供されています。

:::note **注意**：
提供されたスクリプトはWindowsオペレーティングシステム用に調整されていることにご注意ください。異なるオペレーティングシステムを使用している場合は、環境に合わせてスクリプトを適応させる必要があります。
:::

merge.batスクリプトは、ブートローダー、パーティションテーブル、およびインジケーターベースバイナリを単一のファームウェアファイルに巧妙に統合するため、特に有用です。マージされると、このファームウェアはflash.batスクリプトを使用してESP32-S3にシームレスにフラッシュできます。プロンプトが表示されたら、デバイスに対応するCOMポートを入力すると、フラッシュプロセスが開始されます。完全な操作は以下のように要約できます：

```sh title="merge.bat"
esptool.exe --chip esp32s3 ^
merge_bin -o sensecap_indicator_basis_v1.0.0.bin ^ # Target file name
--flash_mode dio ^
--flash_size 8MB ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

または、ファイルをマージしてからフラッシュする代わりに個別のバイナリファイルをフラッシュしたい場合は、`just_flash.bat`スクリプトを直接使用できます：

```sh title="just_flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

そして、マージされたファームウェアを使用した簡単なフラッシュプロセスの場合：

```sh title="flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z 0x0 indicator_basis_v1.0.0.bin
```

> 特にバイナリをマージしない場合は、開始（0x0）アドレスに細心の注意を払ってください。個別のバイナリファイルについては、[個別のバイナリファイル用Flash Download Tools](#Address_Note)の指示を参照してください。これらのガイドラインに従うことで、エラーのないフラッシュが保証されます。

これらのスクリプトを利用するには、コードをプロジェクトフォルダー内の`merge.bat`と`flash.bat`という名前の別々のテキストファイルに保存します。この組織的なアプローチにより、アクセスと使用が簡素化されます。

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

ファームウェアをフラッシュするには、提供された`flash.bat`スクリプトを使用できます。このスクリプトは、ESP32-S3マイクロコントローラーにファームウェアをフラッシュするプロセスを簡素化するように設計されています。

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

提供された `merge.bat` スクリプトを使用して、必要なバイナリファイルを1つのファームウェアファイルにマージできます。このスクリプトはプロセスを簡素化し、フラッシュを成功させるための正しいマージを保証します。これにより、[個別ファイルをフラッシュ](#Address_Note)する代わりに、単一のbinファイルをフラッシュできます。

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

### **Flash Download Tools**（Windows のみ）{#Flash_Tools}

> **Flash Download Tools** は、ESP8266 および ESP32 シリーズのマイクロコントローラーにファームウェアをプログラムまたはフラッシュするために使用されます。ユーザーが ESP マイクロコントローラーに簡単にファームウェアをフラッシュできるグラフィカルユーザーインターフェース（GUI）を提供します。

プリコンパイルされたファームウェアをフラッシュする手順に従ってください：

**ダウンロード：**
[Flash Download Tools（Windows のみ）](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

- **ステップ 1**：`.exe` ファイルを**ダブルクリック**して、ツールのメインインターフェースに入ります。

- **ステップ 2**：以下のオプションを選択します：

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

- **ステップ 3**：SenseCAP Indicator を USB Type-C ケーブルでラップトップに接続します。

- **ステップ 4**：SPI Download タブで "..." をクリックし、ダウンロードしたファームウェアに移動します。

- **ステップ 5**：SPI Flash を設定します：

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

- **ステップ 6**：Download パネルを設定します：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>

- **COM**：Device Manager でポートを確認し、USB-SERIAL が正しいものです。
（`ここでは COM4 を選択しました`）
- **Baud**：921600（推奨値）

<!-- Previous: Click `Start` Downloading -->

次に `START` をクリックしてフラッシュを開始します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"/></div>

`FINISH` と表示されたら、ファームウェアのフラッシュが完了しています。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"/></div>

#### 個別バイナリファイル用の Flash Download Tools {#Address_Note}

前述のガイドでは、バイナリファイル「Default_Factory_Firmware_ESP32-S3.bin」は3つのバイナリを1つにマージしています。

ただし、ESP-IDF を使用してファームウェアをビルドしている場合、単一ファイルを直接フラッシュするとエラーが発生する可能性があります。代わりに、ビルドした**3つの個別バイナリファイル**を見つけて、以下のように正しいアドレス（独自のアドレスを使用できます）を指定する必要があります：

- **bootloader.bin** ----> **0x0**
- **partion-table.bin** ----> **0x6800**
- **termial_demo.bin** ----> **0x10000**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"/></div>

## **RP2040** 用

### Arduino IDE によるフラッシュ {#RP_Arduino}

RP2040 開発ツールは Arduino を活用してコーディング体験を向上させます。

> Arduino IDE は Arduino ボードをコーディングするための無料ソフトウェアです。ユーザーフレンドリーなインターフェースにより、コードを簡単に書いてアップロードできます。C++ の簡素化されたバージョンに基づいており、ライブラリと例を提供するため、初心者に最適です。

**ダウンロード：**

- **ステップ 1**：[Arduino IDE](https://www.arduino.cc/en/software) をインストールします

- **ステップ 2**：Raspberry Pi Pico ボードを追加します

Arduino IDE を開き、**Arduino IDE** > **Preferences** をクリックし、以下の URL を **Additional Boards Manager URLs** にコピーします：

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

"indicator" を検索し、Boards Manager で "Raspberry Pi Pico/RP2040" をインストールします

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"/></div>

- **ステップ 3**：ライブラリを追加します

:::note **参考ライブラリ**

- Sensirion Core：[Sensirion Arduino Core ライブラリ](https://github.com/Sensirion/arduino-core)
- PacketSerial：[シリアル通信プロトコル](https://github.com/bakercp/PacketSerial)
- Sensirion I2C SGP40：[SGP40 TVOC センサーライブラリ](https://github.com/Sensirion/arduino-i2c-sgp40)
- Sensirion I2C SCD4x：[SCD41 CO2 センサーライブラリ](https://github.com/Sensirion/arduino-i2c-scd4x)
- Sensirion Gas Index Algorithm：[転送インデックスライブラリ](https://github.com/Sensirion/arduino-gas-index-algorithm)
- Seeed_Arduino_AHT20：[AHT20 温湿度センサーライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20)
:::

Arduino IDE では、`Library Manager` で検索できます（例：`Seeed_Arduino_AHT20`）、そしてインストールします。

<details>
<summary>オフラインインストールをプレビューするにはクリック</summary>

*オフライン*でインストールするには、GitHub から **repo zip をダウンロード**し、**Sketch** -> **Include Library** -> **Add .ZIP Library** に移動して、ダウンロードしたライブラリを選択します。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

- **ステップ 4**：提供された USB Type-C ケーブルでデバイスを PC に接続します。

- **ステップ 5**：ボードとポートを選択します

"Indicator" を検索し、`Seeed INDICATOR RP2040` ボードを選択し、`usbmodem` シリアルポートを選択します。

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

- **ステップ 6**：サンプルコードファイルを開きます

**File** -> **Open** で、サンプルコードファイル（[.ino ファイル](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/tree/main/examples/indicator_rp2040)）を選択します。

サンプルコードファイルを提供していますので、必要に応じてコードを変更できます。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **ステップ 7**：ファイルを検証してアップロードします。

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

これで、RP2040 でのファームウェアのビルドとフラッシュ（ダウンロード）が完了しました。

### .uf2 ファイルのフラッシュ

- **ステップ 1**：デバイスを PC に接続します

針を使ってこの内部ボタンを長押しし、提供された USB Type-C ケーブルでデバイスを PC に接続し、接続後にボタンを離します。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"/></div>

- **ステップ 2**: ファームウェアフラッシュ

接続が成功すると、PCにディスクが表示されます。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"/></div>

[.uf2](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2)ファイルをディスクにコピーすると、ディスクがログアウトします。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"/></div>

アップグレードが自動的に実行されます。

## ESP32 & RP2040 通信プロトコル

ESP32とRP2040はシリアルポート通信を使用し、[cobs](http://www.stuartcheshire.org/papers/COBSforToN.pdf)通信プロトコルを使用します。デモで使用されるコマンドのリストは以下の通りです：

コマンド形式は、パケットタイプとパケットパラメータで構成されます。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"/></div>

## リソース

[SenseCAP Indicator ESP32 SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)

[SenseCAP Indicator RP2040 デモ](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main)

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
      Device Manageでポートを確認してください
      - "USB Serial Device(COMx)" または "USB 串行设备" はRP2040用です
      - "USB-SERIAL CH340" はESP32用です
      簡単に言うと、CH340ポートはESP32用です。
      <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"/></div>
    </TabItem>
    <TabItem value="Unix">
      - "/dev/cu.usbmodem" はRP2040用です
      <div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"/></div>
    </TabItem>
    </Tabs>
</details>

# **最近の更新**

- 2023-11-17
  - パッチセクションを削除
- 2023-08-25
  - パッチセクションをより明確に
- 2023-07-25
  - Esptoolを使用したファームウェアフラッシュのコンテンツを追加
- 2023-05-29
  - パッチセクションを追加

# **技術サポート**

**SenseCAP Indicatorでお困りですか？私たちがサポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
