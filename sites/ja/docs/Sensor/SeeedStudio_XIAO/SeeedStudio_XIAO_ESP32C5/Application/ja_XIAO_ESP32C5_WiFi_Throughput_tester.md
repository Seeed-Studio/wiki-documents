---
title: Seeed Studio XIAO ESP32-C5 Wi-Fi スループットテストツール
description: |
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xaio_esp32c5_wifi_throughput_tester
last_update:
  date: 1/16/2026
  author: Zeller
---


Seeed Studio XIAO ESP32-C5 は ESP32-C5 をコアプロセッサとして搭載しています。ESP32-C5 は、2.4GHz と 5GHz の両方の帯域でデュアルバンド Wi-Fi 6（802.11ax）をサポートする業界初の RISC-V マイクロコントローラです。優れたワイヤレス性能を誇り、スマートホーム、モノのインターネット（IoT）、その他様々なシナリオでの応用において大きな可能性を秘めています。

実際の使用において、Wi-Fi の実際のデータスループットは、伝送能力を測定する最も重要な指標の一つです。
次に、Wi-Fi スループットテストツールを使用して、Wi-Fi 6 に基づく XIAO ESP32-C5 の強力なデータスループット能力を、2.4GHz と 5GHz の両方の周波数帯域で視覚的に実証します！

この wiki は [ESP-IDF](https://github.com/espressif/esp-idf) を使用して開発されます。

*参考*: [ESP-IDF プログラミングガイド](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/index.html)

## ハードウェアの準備

XIAO ESP32-C5 ボードを 1 台準備する必要があります。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### アンテナの取り付け

Seeed Studio XIAO ESP32-C5 のパッケージ内には、専用の **Wi-Fi/BT アンテナコネクタ**があります。最適な WiFi/Bluetooth 信号強度を得るために、パッケージに含まれているアンテナを取り出してコネクタに接続する必要があります。<br/>
:::tip
より強い信号ゲイン効果を得たい場合は、**RP-SMA オスコネクタ付き 2.4G/5G 外部アンテナ**を購入して取り付けることができます — パッケージに含まれている内蔵 FPC アンテナよりもはるかに高いゲインを提供します！
:::
<div class="table-center">
 <table>
  <tr>
   <th>RP-SMA オスコネクタ付き 2.4G/5G 外部アンテナ</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## ソフトウェアの準備

### ESP-IDF のインストール

:::tip
この wiki は Windows 開発環境で開発されています。Linux / Mac での ESP-IDF 操作については、[Espressif ESP-IDF を使用した XIAO での開発](https://wiki.seeedstudio.com/ja/xiao_idf/)を参照してください
:::

**Windows の場合**

**ステップ 1.** [ESP32-IDF Tools Installer](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/windows-setup.html#esp-idf-tools-installer) をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_1.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 2.** 適切なバージョンを選択してダウンロードします。

:::tip
XIAO ESP32-C5 には ESP-IDF v5.5 以降が必要です。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_2.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 3.** インストール

1. ダウンロードしたファイルの中から `esp-idf-tools-setup-offline-5.5.2.exe` を見つけてダブルクリックし、インストールを開始します。お好みのインストール言語を選択してください

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_3.png" style={{width:800, height:'auto'}}/></div><br/>

2. I accept the agreement を選択し、Next をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_4.png" style={{width:800, height:'auto'}}/></div><br/>

3. Next をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_5.png" style={{width:800, height:'auto'}}/></div><br/>

4. インストールパスを選択します。インストールには大量のストレージ容量が必要ですので、適切な場所を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_6.png" style={{width:800, height:'auto'}}/></div><br/>

5. デフォルト設定を保持します；変更は不要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_7.png" style={{width:800, height:'auto'}}/></div><br/>

6. Install をクリックし、インストールが完了するまで待ちます。これには時間がかかる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_8.png" style={{width:800, height:'auto'}}/></div><br/>

7. インストールが完了すると、Windows デスクトップに以下の 2 つのショートカットが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_9.png" style={{width:400, height:'auto'}}/></div><br/>

**Linux（Ubuntu/Debian）と macOS の場合**

**ステップ 1.** 依存関係のインストール

```bash
# Linux
sudo apt update && sudo apt install \
    git wget flex bison gperf python3 python3-pip python3-venv \
    cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

```bash
#macOS
brew install git wget cmake ninja dfu-util ccache python3
pip3 install pyserial
```

**ステップ 2.** 指定されたバージョンのリポジトリをクローンします。

```bash
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git -b v5.5.1 esp-idf-v5.5.1
```

**ステップ 3.** ツールチェーンのインストール

```bash
cd ~/esp/esp-idf-v5.5.1
./install.sh esp32c5
```

**ステップ 4.** 環境変数の追加

```bash
. $HOME/esp/esp-idf-v5.5.1/export.sh
```

### iperf のインストール

**Windows の場合**

**ステップ 1.** [iperf](https://sourceforge.net/projects/iperf2/) をクリックし、ダウンロードします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n1.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 2.** 適切なフォルダに配置し、右クリックしてそこでターミナルを開きます。このステップは後で使用されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n2.png" style={{width:800, height:'auto'}}/></div><br/>

**Linux（Ubuntu/Debian）と macOS の場合**

```bash
# Ubuntu/Debian
sudo apt install iperf

# macOS
brew install iperf
```

### テストプロジェクトのクローン

- お好みのフォルダにテストプロジェクトをクローンします。

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32C5_iperf_test" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
    </div><br />

```bash
git clone https://github.com/limengdu/XIAO-ESP32C5_iperf_test.git
```

**Windows の場合**

**ステップ 1.** デスクトップの `ESP-IDF 5.5 PowerShell` をクリックします；環境チェックが実行されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n3.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2.** クローンしたテストプロジェクトを開きます

```bash
cd C:\User\yourname\XIAO-ESP32C5_iperf_test
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n4.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3.** ターゲットチップを `esp32c5` に設定します

```bash
idf.py --preview set-target esp32c5
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n5_1.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** プロジェクトをビルドします

```bash
idf.py build
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n5.png" style={{width:800, height:'auto'}}/></div>

ビルド完了

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n6.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** XIAO ESP32-C5 にコードをフラッシュし、シリアルモニターを開きます

`idf.py flash`を使用してフラッシュすることを選択できます。IDFフラッシュツールは自動的にフラッシュ用のポートを検出し、`idf.py -p PORT flash`を使用してポートを指定することもできます。Windowsでは、Device Managerを開いてポートを確認できます。

```bash
 idf.py flash monitor
or
 idf.py -p PORT flash monitor
or
```

フラッシュ用のポートを指定します（具体的なポート番号はデバイスのポートによって異なります。）

```bash
idf.py -p COM69 flash monitor
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n7.png" style={{width:800, height:'auto'}}/></div><br/>

フラッシュが成功すると、ターミナルに**`iperf>`**プロンプトが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
`iperf>`プロンプトが表示されない場合は、XIAO ESP32-C5の電源を切ってから、オンボードのResetボタンを押してウェイクアップし、再接続してください。
:::

**Linux（Ubuntu/Debian）& macOS向け**

```bash
# Navigate to the project directory
cd esp32c5_iperf_test

# Set the target chip
idf.py --preview set-target esp32c5

# Compile the project
idf.py build

# Flash the firmware and open the serial monitor
idf.py flash monitor
```

## Wi-Fiデータスループットテスト

TCPとUDPプロトコルを使用して、2.4 GHzと5 GHzの両方の帯域でXIAO ESP32-C5のWi-Fiデータスループットをテストします。

なぜTCPとUDPの両方をテストする必要があるのでしょうか？<br/>
XIAO ESP32-C5のWi-Fi RF性能を評価する際、TCPとUDPは2つの全く異なる視点を提供します：

- **TCPテスト（アプリケーション体験を測定）：** TCPは接続指向の信頼性のあるプロトコルで、ハンドシェイク、再送信、輻輳制御メカニズムを含みます。
  - **目的：** Webブラウジング、OTAアップデート、MQTT制御など、厳格なデータ整合性要件を持つ実世界のアプリケーションをシミュレートします。データ損失ゼロを保証しながら複雑なプロトコルスタックを処理するチップの総合能力を反映します（つまり、**安定性**）。

- **UDPテスト（ハードウェア限界を測定）：** UDPは配信保証なしでデータ送信のみに焦点を当てたコネクションレスプロトコルです。
  - **目的：** プロトコル層の確認応答オーバーヘッドを除去し、Wi-Fi無線の物理帯域幅限界を最大化します。オーディオ/ビデオストリーミングテストで一般的に使用され、2.4GHzと5GHz帯域でのチップの最大「クリーン」スループットポテンシャルを明らかにします（つまり、**速度**）。

### IPアドレスの確認

コンピュータが接続されているネットワークのIPアドレスを確認してください。これは後続のステップで使用されます。

```bash
# macOS/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows
ipconfig
```

### 2.4GHz帯域スループットテスト

2.4GHz帯域でのXIAO ESP32-C5のWi-Fiデータスループットの実測。

- XIAO ESP32-C5を2.4G WiFiネットワークに接続

```bash
sta <Your WiFi Name> <Your WiFi Password>
```

ターミナルにWi-Fi接続情報が表示されます。XIAO ESP32-C5のIPアドレスをメモしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x1_1.png" style={{width:800, height:'auto'}}/></div>

#### TCPスループットテスト

:::tip
コンピュータとXIAO ESP32-C5が同じWiFiネットワークまたはルーターに接続されていることを確認してください。
:::

1. ダウンロードテスト（XIAO ESP32-C5がデータを受信）

    1.1. **XIAO ESP32-C5側でコマンドを実行**

      ```bash
      iperf -s -i 1
      ```

    1.2. **PC側でコマンドを実行**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -i 1 -t 60
      ```

      - Linux（Ubuntu/Debian）& macOS

      ```bash
      iperf -c <IP address of ESP32> -i 1 -t 60
      ```

- テスト結果

テスト結果から、2.4G WiFiでのXIAO ESP32-C5の平均TCPダウンロード速度は15 Mbpsであることがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x2.png" style={{width:800, height:'auto'}}/></div>

2. テスト（XIAO ESP32-C5がデータを送信）

    2.1 **XIAO ESP32-C5側でコマンドを実行**

      ```bash
      iperf -c <IP address of PC> -i 1 -t 60
      ```

    2.2 **PC側でコマンドを実行**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -i 1
      ```

      - Linux（Ubuntu/Debian）& macOS

      ```bash
      iperf -s -i 1
      ```

- テスト結果

テスト結果から、2.4G WiFiでのXIAO ESP32-C5の平均TCPアップロード速度は17 Mbpsであることがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x3.png" style={{width:800, height:'auto'}}/></div>

#### UDPスループットテスト

:::tip
コンピュータとXIAO ESP32-C5が同じWiFiネットワークまたはルーターに接続されていることを確認してください。
:::

1. ダウンロードテスト（XIAO ESP32-C5がデータを受信）

    1.1. **XIAO ESP32-C5側でコマンドを実行**

      ```bash
      iperf -s -u -i 1
      ```

    1.2. **PC側でコマンドを実行**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

      - Linux（Ubuntu/Debian）& macOS

      ```bash
      iperf -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

- テスト結果

テスト結果から、2.4G WiFiでのXIAO ESP32-C5の平均UDPダウンロード速度は18 Mbpsであることがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x4.png" style={{width:800, height:'auto'}}/></div>

2. テスト（XIAO ESP32-C5がデータを送信）

    2.1 **XIAO ESP32-C5側でコマンドを実行**

      ```bash
      iperf -c <IP address of PC> -u -b 100M -i 1 -t 60
      ```

    2.2 **PC側でコマンドを実行**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -u -i 1
      ```

      - Linux（Ubuntu/Debian）& macOS

      ```bash
      iperf -s -u -i 1
      ```

- テスト結果

テスト結果から、2.4G WiFiでのXIAO ESP32-C5の平均UDPアップロード速度は27 Mbpsであることがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x5.png" style={{width:800, height:'auto'}}/></div>

:::tip
上記のテスト結果は参考用です。実際の条件を参照してください。
:::

### 5GHz帯域スループットテスト

5GHz帯域でのXIAO ESP32-C5のWi-Fiデータスループットの実測。

- XIAO ESP32-C5を5G WiFiネットワークに接続

```bash
sta <Your WiFi Name> <Your WiFi Password>
```

ターミナルにWi-Fi接続情報が表示されます。XIAO ESP32-C5のIPアドレスをメモしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x1_1.png" style={{width:800, height:'auto'}}/></div>

#### TCPスループットテスト

:::tip
コンピュータとXIAO ESP32-C5が同じWiFiネットワークまたはルーターに接続されていることを確認してください。
:::

1. ダウンロードテスト（XIAO ESP32-C5がデータを受信）

    1.1. **XIAO ESP32-C5側でコマンドを実行**

      ```bash
      iperf -s -i 1
      ```

    1.2. **PC側でコマンドを実行**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -i 1 -t 60
      ```

      - Linux（Ubuntu/Debian）& macOS

      ```bash
      iperf -c <IP address of ESP32> -i 1 -t 60
      ```

- テスト結果

テスト結果から、5G WiFiでのXIAO ESP32-C5の平均UDPダウンロード速度は27 Mbpsであることがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x6.png" style={{width:800, height:'auto'}}/></div>

2. テスト（XIAO ESP32-C5がデータを送信）

    2.1 **XIAO ESP32-C5側でコマンドを実行**

      ```bash
      iperf -c <IP address of PC> -i 1 -t 60
      ```

    2.2 **PC側でコマンドを実行**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -i 1
      ```

      - Linux（Ubuntu/Debian）& macOS

      ```bash
      iperf -s -i 1
      ```

- テスト結果

テスト結果から、5G WiFiでのXIAO ESP32-C5の平均UDPアップロード速度は29 Mbpsであることがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x7.png" style={{width:800, height:'auto'}}/></div>

#### UDPスループットテスト

:::tip
コンピュータとXIAO ESP32-C5が同じWiFiネットワークまたはルーターに接続されていることを確認してください。
:::

1. ダウンロードテスト（XIAO ESP32-C5がデータを受信）

    1.1. **XIAO ESP32-C5側でコマンドを実行**

      ```bash
      iperf -s -u -i 1
      ```

    1.2. **PC側でコマンドを実行**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

      - Linux（Ubuntu/Debian）& macOS

      ```bash
      iperf -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

- テスト結果

テスト結果から、5G WiFiでのXIAO ESP32-C5の平均TCPアップロード速度は50 Mbpsであることがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x8.png" style={{width:800, height:'auto'}}/></div>

2. テスト（XIAO ESP32-C5がデータを送信）

    2.1 **XIAO ESP32-C5側でコマンドを実行**

      ```bash
      iperf -c <IP address of PC> -u -b 100M -i 1 -t 60
      ```

    2.2 **PC側でコマンドを実行**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -u -i 1
      ```

      - Linux（Ubuntu/Debian）& macOS

      ```bash
      iperf -s -u -i 1
      ```

- テスト結果

テスト結果から、5G WiFiでのXIAO ESP32-C5の平均TCPアップロード速度は50 Mbpsであることがわかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x9.png" style={{width:800, height:'auto'}}/></div>

## まとめ

テスト結果により、XIAO ESP32-C5は2.4 GHzと5 GHzのデュアルバンドWi-Fi 6環境の両方で優れたデータ伝送性能を示し、高帯域幅・低遅延のワイヤレスアプリケーションに最適であることが分かりました。

さらに、このチュートリアルのテスト方法は、XIAO ESPシリーズ開発ボード全体に適用できます。このWikiのガイドラインを参照し、コンパイル時にターゲットチップを調整するだけで、他のボードでも同じ性能評価を実行できます。皆さんがその可能性を探求し、発見をコミュニティと共有することを楽しみにしています！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
