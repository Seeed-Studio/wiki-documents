---
title: 概要
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview/
slug: /ja/Wio-Terminal-Network-Overview
last_update:
  date: 05/15/2025
  author: gunengyu
---


# 概要

この Wiki では、Wio Terminal のワイヤレスコア Realtek RTL8720 の最新ファームウェアを更新する方法と、Wio Terminal にワイヤレス接続を有効にするためのすべての依存ライブラリをインストールする方法を紹介します。

:::note
**Wi-Fi ソフトウェアを新しい eRPC 構造に移行しました。この構造はより安定しており、Bluetooth と同時に動作することができます**！eRPC Wi-Fi ファームウェアと関連ライブラリの更新手順に従ってください！
:::

## ワイヤレスコアファームウェアの更新

まず、Wio Terminal の Realtek RTL8720 ワイヤレスコアのファームウェアを更新する必要があります。**これは重要であり、例を進める前に最新のファームウェアに更新する必要があります。**

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>使用前に Wi-Fi コアを更新してください！</p>
  </div>
</div>

### ステップ 1 - 初期工場ファームウェアの消去

初めて Wio Terminal を手にした場合、初期の RTL8720 ファームウェアを消去し、最新のファームウェアをフラッシュする必要があります。このために **ambd_flash_tool** というツールを用意しています。このツールを実行すると、まず SAMD51 から RTL8720 へのシリアル接続を有効にし、RTL8720 にファームウェアをインストールできるようにします。これは RTL8720 と直接通信できないためです。その後、このツールを使用して RTL8720 上の既存のファームウェアを消去し、最新のファームウェアをフラッシュすることができます。

**注意**: 初期工場ファームウェアを消去するのは最初の一回だけです。その後は、新しいファームウェアをフラッシュして既存のファームウェアを上書きすることができます。

#### Windowsの場合

- **ステップ 1:** PC 上で **Windows PowerShell** を開き、以下のコマンドを実行してフラッシュツールをダウンロードします。

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**注意**: **cd ~** コマンドはホームディレクトリに移動し、**git clone** コマンドは GitHub からリポジトリをダウンロードします。

- **ステップ 2:** **ambd_flash_tool** ディレクトリに移動します。

```sh
cd ambd_flash_tool
```

- **ステップ 3:** Wio Terminal を PC に接続して電源を入れます。

- **ステップ 4:** 以下のコマンドを実行して初期ファームウェアを消去します。

```sh
.\ambd_flash_tool.exe erase
```

**注意:** 初期消去プロセスには時間がかかる場合があります。ウィンドウを閉じずにお待ちください。

> Wio Terminal の接続されたシリアルポートは自動的に検出されます！

**注意**: 使用方法のヘルプを開きたい場合は、`.\ambd_flash_tool.exe` を実行してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_win_2.png" alt="pir" width={700} height="auto" /></p>

#### Mac/Linuxの場合

- **ステップ 1:** Mac/Linux 上で **Terminal** を開き、以下のコマンドを実行してフラッシュツールをダウンロードします。

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**注意**: **cd ~** コマンドはホームディレクトリに移動し、**git clone** コマンドは GitHub からリポジトリをダウンロードします。

- **ステップ 2:** **ambd_flash_tool** ディレクトリに移動します。

```sh
cd ambd_flash_tool
```

- **ステップ 3:** Wio Terminal を PC に接続して電源を入れます。

- **ステップ 4:** 以下のコマンドを実行して初期ファームウェアを消去します。

```sh
python3 ambd_flash_tool.py erase
```

**注意**: Mac/Linux に **Python 3** がインストールされていることを確認してください。スクリプトはすべての依存ライブラリを自動的にダウンロードします。

> 場合によっては、PC に Python 3 のみがインストールされている場合があります。その場合は `python3 ambd_flash_tool.py` を `python ambd_flash_tool.py` に置き換えてください。

**注意:** 初期消去プロセスには時間がかかる場合があります。ウィンドウを閉じずにお待ちください。

> Wio Terminal の接続されたシリアルポートは自動的に検出されます！

**注意**: 使用方法のヘルプを開きたい場合は、`python3 ambd_flash_tool.py` を実行してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_linux.png" alt="pir" width={750} height="auto" /></p>

### ステップ 2 - 最新ファームウェアのフラッシュ

#### Windowsの場合

- **ambd_flash_tool** ディレクトリ内にいる間に、以下のコマンドを実行して RTL8720 に **最新ファームウェア** をフラッシュします。

```sh
.\ambd_flash_tool.exe flash
``` 

#### Mac/Linuxの場合

- **ambd_flash_tool** ディレクトリ内にいる間に、以下のコマンドを実行して RTL8720 に **最新ファームウェア** をフラッシュします。

```sh
python3 ambd_flash_tool.py flash
```

### 古いファームウェアのフラッシュ (追加 - スキップ可能)

古いファームウェアリリースでコードをテストしたい場合は、以下の手順に従うことで可能です。ただし、最新のファームウェアで始めたい場合は、上記のステップ **(ステップ 2)** に従い、このステップをスキップしてください。

#### Windowsの場合

- **ステップ 1:** GitHub 上の [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) リポジトリにアクセスします。

- **ステップ 2:** 任意の **リリースバージョン** を選択し、**xxx-seeed-ambd-firmware-rpc-vxxx.zip** をクリックして **.zip ファイル** としてダウンロードします。

- **ステップ 3:** 前述のように **Windows PowerShell** を使用して **ambd_flash_tool** ディレクトリに移動し、以下のコマンドを実行します。

```sh
.\ambd_flash_tool.exe flash -d [RTL8720-firmware-path]
``` 

**注意:** `[RTL8720-firmware-path]` を上記でダウンロードした RTL8720 のパスに置き換えてください。このフォルダには以下の3つのファイルが含まれている必要があります: `km0_boot_all.bin`, `km0_km4_image2.bin`, `km4_boot_all.bin`

すべてが正常に進めば、成功メッセージが表示されるはずです。これで RTL8720 のファームウェアを RTL8720 コアに書き込むことができました！

#### Mac/Linuxの場合

- **ステップ 1:** GitHubの [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) リポジトリにアクセスします。

- **ステップ 2:** 任意のリリースバージョンを選択し、**xxx-seeed-ambd-firmware-rpc-vxxx.zip** をクリックして **.zip ファイル** としてダウンロードします。

- **ステップ 3:** 前述のように **terminal** を使用して **ambd_flash_tool** ディレクトリに移動し、以下のコマンドを実行します。

```sh
python3 ambd_flash_tool.py flash -d [RTL8720-firmware-path]
``` 

**注意:** `[RTL8720-firmware-path]` を上記でダウンロードした RTL8720 のパスに置き換えてください。このフォルダには以下の3つのファイルが含まれている必要があります: `km0_boot_all.bin`, `km0_km4_image2.bin`, `km4_boot_all.bin`

すべてが正常に進めば、成功メッセージが表示されるはずです。これで RTL8720 のファームウェアを RTL8720 コアに書き込むことができました！

## Arduino IDEでRTL8720ファームウェアバージョンを確認する

上記のファームウェアをインストールした後、以下のコードを **Arduino IDE** を使用して Wio Terminal にアップロードすることで、ファームウェアが正しくインストールされているか確認できます。

```cpp
#include "rpcWiFi.h"
#include <erpc/erpc_port.h>
 
void setup() {
    Serial.begin(115200);
    while(!Serial); // シリアルモニタが開くまで待機
    char* version = rpc_system_version();
    Serial.print("RTL8720 Firmware Version: ");
    Serial.println(version);
    erpc_free(version);
}
 
void loop() {
}
```

**シリアルモニタ** を開くと、**ファームウェアバージョン** が表示されるはずです。

## Seeed SAMD ArduinoCoreの更新

:::note
**Seeed SAMD ArduinoCore を最新バージョン (1.8.1) に更新してください！**
:::
- **ステップ 1:** **Arduino IDE** を開き、`ツール` -> `ボード` -> `ボードマネージャ` をクリックし、検索ボックスに **Wio Terminal** を入力します。

- **ステップ 2:** 最新バージョン (1.8.1) がインストールされていることを確認します。インストールされていない場合は、`バージョンを選択` ドロップダウンメニューをクリックし、最新バージョンを選択して `インストール` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>

> Seeed SAMD ArduinoCore のソースコードは [**こちら**](https://github.com/Seeed-Studio/ArduinoCore-samd) で確認できます。

## ライブラリのインストール

ワイヤレス接続にはいくつかの Arduino ライブラリが必要です。Wio Terminal 用のワイヤレス関連ライブラリはすべて **Arduino Library Manager** に含まれています。そのため、Arduino IDE 内で Arduino Library Manager を開き、必要なライブラリを検索して簡単にインストールすることができます！

### Arduino Library Managerからライブラリをインストールする方法

- **ステップ 1:** **Arduino IDE** を開き、`スケッチ` -> `ライブラリを含める` -> `ライブラリを管理...` をクリックします。

- **ステップ 2:** 必要なライブラリの**名前**を入力し、ドロップダウンメニューから**最新バージョン**を選択します（利用可能な場合）。

- **ステップ 3:** **インストール** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>

### Wi-Fi用に必要なライブラリ

Wi-Fi を使用するために、Wio Terminal で以下のライブラリが必要です。Arduino Library Manager の検索ボックスにライブラリ名を入力して検索してください。

利便性のため、すべてのライブラリをまとめています。そのため、将来のドキュメントや現在のドキュメントの更新では、rpcwifi をインストールするだけで、Wi-Fi に依存するすべてのライブラリがインストールされます。

- [**Seeed_Arduino_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) - `"seeed rpcwifi"` を検索

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - `"seeed rpcunified"` を検索

- [**Seeed_Arduino_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) - `"seeed mbedtls"` を検索

- [**Seeed_Arduino_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) - `"seeed fs"` を検索

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) - `"seeed sfud"` を検索

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/newliarary.png" alt="pir" width={700} height="auto" /></p>

## リリース

<table align="center">
  <tbody><tr>
      <td align="center">更新日</td>
      <td align="center">作成者</td>
      <td align="center">詳細</td>
    </tr>
    <tr>
      <td align="center">10.12</td>
      <td align="center">BILL と LAKSHANTHA</td>
      <td align="center">必要なライブラリをすべてまとめて組み立てる</td>
    </tr>
  </tbody></table>


## 技術サポート & 製品ディスカッション
技術的な問題がある場合は、問題を私たちの[フォーラム](http://forum.seeedstudio.com/)に投稿してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>