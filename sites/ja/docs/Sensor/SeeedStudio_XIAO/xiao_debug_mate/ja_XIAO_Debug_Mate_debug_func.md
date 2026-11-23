---
description: この記事では、XIAO Debug Mate の DAPLink デバッグ機能の使い方を説明します。
title: DAPLink デバッガ
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/15.webp
slug: /xiao_debug_mate_debug
sku: 109990585
sidebar_position: 2
last_update:
  date: 10/22/2025
  author: Citric
createdAt: '2025-10-30'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/xiao_debug_mate_debug/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/15.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## 概要

このドキュメントは、XIAO Debug Mate の DAPLink 機能に関する公式ユーザーマニュアルです。本ガイドは、初心者から上級者まで、XIAO Debug Mate の潜在能力を最大限に引き出し、プロフェッショナルなデバッグ作業に活用できるよう設計されています。ここでは、DAPLink デバッガの接続方法、設定方法、操作方法に加え、必須ソフトウェアツールの理解や、幅広い XIAO シリーズ開発ボードでスムーズかつ生産的なデバッグ体験を得るためのベストプラクティスを学ぶことができます。複雑なファームウェアのトラブルシューティングから開発ワークフローの効率化まで、このドキュメントは、プロジェクトの最初から最後までを支える、明確なステップバイステップ手順、ヒント、詳細な技術解説を提供します。


## デバッガ関連の基本概念

XIAO Debug Mate の DAPLink 機能を効果的に使うには、デバッグを可能にするために連携して動作する主要なソフトウェアコンポーネントやプロトコルを理解しておくと役立ちます。ここでは、それぞれの概念と相互の関係について説明します。

### GDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/gdb.png" style={{width:800, height:'auto'}}/></div>

**[GDB](https://www.sourceware.org/gdb/)** は GNU Project Debugger であり、デバッグプロセスの中核となるエンジンです。ホストコンピュータ（PC）上で動作する強力なコマンドラインツールであり、ターゲットマイコン上で実行されるプログラムを制御します。GDB を使うと、次のことが可能になります。
*   プログラムの開始および停止。
*   特定のコード行で実行を一時停止するブレークポイントの設定。
*   コードを 1 行ずつステップ実行。
*   変数の値やメモリレジスタの内容の確認。

VS Code（PlatformIO 併用）や Eclipse など、ほとんどの最新 IDE（統合開発環境）は、GDB のフロントエンドとして動作するグラフィカルユーザーインターフェースを提供しており、マウスクリック操作を GDB コマンドに変換してくれます。

### OpenOCD/PyOCD

**[OpenOCD](https://openocd.org/)**（Open On-Chip Debugger）と **[PyOCD](https://pyocd.io/)** は、ホストコンピュータ上で動作する重要な「サーバー」アプリケーションです。これらは、GDB からの高レベルコマンドと、物理デバッグプローブ（この場合は XIAO Debug Mate）に必要な低レベル信号との間のブリッジ／トランスレータとして機能します。

GDB が「変数 `x` の値を読み取る」といったコマンドを発行すると、OpenOCD はこのコマンドを受け取り、デバッグプローブが理解できる一連の命令に変換し、それらの命令を USB 経由でプローブに送信します。

### DAPLink

**[DAPLink](https://github.com/ARMmbed/DAPLink)** は、XIAO Debug Mate の ESP32-S3 マイクロコントローラ上で動作するオープンソースファームウェアです。このファームウェアにより、Debug Mate は完全な機能を備えたデバッグプローブとして動作します。その主な役割は CMSIS-DAP プロトコルを実装することであり、ホストコンピュータから USB 経由でデバッグコマンドを受信し、ターゲットチップのデバッグピン（SWD）と物理的にやり取りできるようにします。要するに、DAPLink は OpenOCD から送られてくる命令を実行する、デバイス上の「エージェント」です。

### CMSIS-DAP

**[CMSIS-DAP](https://github.com/ARM-software/CMSIS-DAP)**（Cortex Microcontroller Software Interface Standard - Debug Access Port）は、ホストコンピュータが USB 経由でデバッグプローブと通信する方法を定義した標準化プロトコルです。XIAO Debug Mate の DAPLink ファームウェアはこの標準に準拠しているため、OpenOCD、PyOCD、Keil MDK など、業界標準ツールの幅広いラインナップと、専用ドライバや独自ソフトウェアを必要とせずに即座に互換性を持ちます。

### Telnet

**Telnet** はシンプルなテキストベースのネットワークプロトコルです。デバッグの文脈では、OpenOCD は特定のポート（一般的にはポート 4444）で Telnet サーバーを開くことがよくあります。これにより、OpenOCD サーバー自体に対する、人間が読みやすいコマンドラインインターフェースが提供されます。GDB がアプリケーションレベルのデバッグに使われる一方で、Telnet インターフェースは、OpenOCD の設定、デバッグプローブの状態確認、低レベルのリセットコマンドの発行など、高度な作業に便利です。

### それぞれがどのように連携するか

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/36.png" style={{width:1000, height:'auto'}}/></div>

ここでは、IDE からターゲット XIAO までのデバッグチェーン全体をまとめます。

1.  **あなた**（IDE 上で）が「Start Debugging」をクリックします。
2.  **IDE** が、適切なプログラムファイルを指定して **GDB** を起動します。
3.  **GDB** は、PC 上で動作している **OpenOCD** サーバーに接続します。
4.  **OpenOCD** は、USB 接続された **XIAO Debug Mate** を検出し、**CMSIS-DAP** プロトコルを使ってデバイスと通信します。
5.  Debug Mate 上の **DAPLink** ファームウェアが、これらの CMSIS-DAP コマンドを受信します。
6.  **DAPLink** は、これらのコマンドを **SWD**（Serial Wire Debug）ピン（SWDIO と SWCLK）上の電気信号に変換します。
7.  これらの SWD 信号がターゲット XIAO 内部の **ARM Cortex コア** を直接制御し、OpenOCD と GDB が CPU の一時停止、メモリ読み出し、その他すべてのデバッグ操作を実行できるようにします。

まとめると、**GDB** は司令官、**OpenOCD** は通訳、**CMSIS-DAP** は彼らが話す言語、そして **DAPLink** は現場で命令を実行する兵士です。

## デバッグを始める

### 互換性の確認

XIAO Debug Mate は XIAO エコシステム全体向けに設計されていますが、DAPLink デバッグ機能は ARM Cortex-M コア専用です。一方で、UART と電源モニタリング機能はアーキテクチャに依存しないため、普遍的に互換性があります。詳細な互換性情報については、以下の表を参照してください。

<div class="table-center">

<table align="center">

<tr>

<th>XIAO モデル</th>

<th>コアアーキテクチャ</th>

<th>DAPLink デバッグ</th>

<th>UART モニタ</th>

<th>電力アナライザ</th>

</tr>

<tr>

<td>XIAO SAMD21</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2040</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2350</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF52840</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RA4M1</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO MG24</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF54L15</td>

<td>ARM Cortex-M33</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C3</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C5</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C6</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-S3</td>

<td>Xtensa LX7</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

</table>

</div>

XIAO ESP32-C6 の内蔵 USB JTAG を使ってハードウェアブレークポイントを利用するには、USB データケーブルを XIAO ESP32-C6 に直接接続してください。Visual Studio で Arduino スケッチを使用する場合は、[Visual Micro のハードウェアブレークポイント手順](https://www.visualmicro.com/page/XIAO-ESP32-C6-Visual-Studio.aspx#hardware-breakpoint)を参照してください。

### ソフトウェアの準備

デバッグを開始する前に、ホストコンピュータに必要なソフトウェアをセットアップする必要があります。

#### OpenOCD のインストール

:::tip
検証済み：OpenOCD バージョン 0.12.0-7 以降を使用してください。
:::

互換性を確保し、最新機能にアクセスするために、**xPack** 版の OpenOCD を使用することを強く推奨します。macOS の Homebrew や Linux の APT などのシステムパッケージマネージャは、しばしば古く更新されていないバージョンを提供しており、最新のターゲットでは正しく動作しない場合があります。

:::tip PlatformIO メモ
VS Code で PlatformIO 拡張機能を使用している場合、デバッグセッションを開始すると、PlatformIO がプロジェクトに適したバージョンの OpenOCD を自動的にダウンロードして設定します。
:::

<Tabs>
<TabItem value="Windows" label="Windows" default>

Windows では、手動インストール手順はシンプルです。

1.  **OpenOCD パッケージをダウンロードする**

[xPack OpenOCD リリースページ](https://github.com/xpack-dev-tools/openocd-xpack/releases)にアクセスします。最新リリースは常に一番上に表示されます。最上段のリリース内から Windows 版（例：`xpack-openocd-...-win32-x64.zip`）を探して、このファイルをダウンロードします。

2.  **ファイルを展開する**

ダウンロードした ZIP ファイルを右クリックし、「すべて展開...」を選択します。`C:\Users\YourName\AppData\Local\xPacks\OpenOCD` のような安定した場所を選びます。展開後、`bin` ディレクトリを含む `xpack-openocd-0.12.0-7` のようなフォルダが作成されます。

3.  **OpenOCD をシステム PATH に追加する**

これにより、任意のターミナルから `openocd` を実行できるようになります。

    - スタートメニューで「環境変数」を検索し、「システム環境変数の編集」を選択します。
    - **「環境変数(N)...」** をクリックします。
    - 「システム環境変数」内で **「Path」** 変数を選択し、**「編集(E)...」** をクリックします。
    - **「新規(N)」** をクリックし、先ほど展開した `bin` ディレクトリへのフルパスを貼り付けます。例：  
      `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`
    - すべてのウィンドウで OK をクリックして保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_3.png" style={{width:1000, height:'auto'}}/></div>

4.  **インストールを確認する**

**新しい** Command Prompt または PowerShell ウィンドウを開き、次を実行します：

```bash
openocd --version
```

インストールが成功すると、バージョン情報が表示されます（例：`xPack Open On-Chip Debugger 0.12.0+dev-02228`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_4.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">

この手順は、Windows の手動セットアップと同様です。

1.  **OpenOCD パッケージをダウンロードする**

[xPack OpenOCD リリースページ](https://github.com/xpack-dev-tools/openocd-xpack/releases)にアクセスします。最新のリリースを探し、お使いの Mac に合ったアーカイブをダウンロードします（例：Intel 用は `...-darwin-x64.tar.gz`、Apple Silicon 用は `...-darwin-arm64.tar.gz`）。

2.  **ファイルを展開する**

ターミナルを開き、次のコマンドを実行します。ホームディレクトリ内に標準的な場所を作成します。

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder (or wherever you saved the file)
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **OpenOCD を PATH に追加する**

シェルに `openocd` 実行ファイルの場所を知らせる必要があります。最新の macOS のデフォルトシェルは Zsh です。

```bash
# Add the path to your .zshrc file (for Zsh)
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.zshrc
```

:::note
必ず `xpack-openocd-0.12.0-7` を、実際に作成されたフォルダ名に置き換えてください。Bash を使用している場合は、`~/.zshrc` の代わりに `~/.bash_profile` を編集します。
:::

4.  **適用と確認**

作成した `PATH` の変更は、設定ファイルを再読み込みするまで現在のターミナルセッションでは有効になりません。

既存のターミナルで次のコマンドを実行します：

```bash
# For Zsh (default on modern macOS)
source ~/.zshrc
```

次に、以下を実行してインストールを確認します：

```bash
openocd --version
```

正しい xPack のバージョン情報が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_5.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="Linux" label="Linux">

この手順は、他のオペレーティングシステムでの手動セットアップと同様です。

1.  **OpenOCD パッケージをダウンロードする**

[xPack OpenOCD リリースページ](https://github.com/xpack-dev-tools/openocd-xpack/releases)にアクセスします。最新のリリースを探し、Linux 用アーカイブ（`...-linux-x64.tar.gz`）をダウンロードします。

2.  **ファイルを展開する**

ターミナルを開き、次のコマンドを実行します。

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **OpenOCD を PATH に追加する**

シェルに `openocd` 実行ファイルの場所を知らせる必要があります。ほとんどの Linux ディストリビューションでは Bash シェルが使用されています。

```bash
# Add the path to your .bashrc file
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.bashrc
```

:::note
必ず `xpack-openocd-0.12.0-7` を、実際に作成されたフォルダ名に置き換えてください。
:::

4.  **適用と確認**

作成した `PATH` の変更は、設定ファイルを再読み込みするまで現在のターミナルセッションでは有効になりません。

既存のターミナルで次のコマンドを実行します：

```bash
# For Bash (default on most Linux distros)
source ~/.bashrc
```

次に、以下を実行してインストールを確認します：

```bash
openocd --version
```

正しい xPack のバージョン情報が表示されるはずです。

</TabItem>
</Tabs>

#### PyOCD をインストールする

:::info
XIAO RA4M1 のファームウェア書き込み機能を使用する場合は、ここに記載された手順を参照して、追加で PyOCD をダウンロードして使用する必要がある場合があります。
:::

PyOCD は、Arm Cortex-M マイクロコントローラのプログラミングとデバッグを行うための Python ベースのツールです。

<Tabs>
<TabItem value="Windows" label="Windows" default>

1.  **前提条件**
    システムに **Python** がインストールされていることを確認してください。インストールされていない場合は、公式サイト [python.org](https://www.python.org/) からダウンロードし、インストール時に **"Add Python to PATH"** のチェックボックスに必ずチェックを入れてください。

2.  **PyOCD をインストールする**
    コマンドプロンプトまたは PowerShell ウィンドウを開き、次のコマンドを実行します：

    ```bash
    pip install -U pyocd
    ```

3.  **XIAO RA4M1 サポートパックをインストールする**
    XIAO RA4M1 は `R7FA4M1AB` チップを使用しています。PyOCD がこれを認識できるように、専用のサポートパックをインストールする必要があります。

    パックが利用可能か検索して確認します：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    パックをインストールします：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **ターゲットを確認する**
    ターゲットが認識されているか確認します：
    ```bash
    pyocd list --targets
    ```
    一覧の中に `r7fa4m1ab` が表示されるはずです。

</TabItem>
<TabItem value="MacOS" label="MacOS">

1.  **前提条件**
    MacOS には通常 Python が付属していますが、最新バージョンを入手するには Homebrew または公式インストーラを使用することを推奨します。ターミナルを開きます。

2.  **PyOCD をインストールする**
    ターミナルで次のコマンドを実行します：

    ```bash
    pip3 install -U pyocd
    ```

3.  **XIAO RA4M1 サポートパックをインストールする**
    XIAO RA4M1 は `R7FA4M1AB` チップを使用しています。専用のサポートパックをインストールする必要があります。

    パックを検索します：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    パックをインストールします：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **ターゲットを確認する**
    ターゲットが認識されているか確認します：
    ```bash
    pyocd list --targets
    ```

</TabItem>
<TabItem value="Linux" label="Linux">

1.  **前提条件**
    パッケージマネージャーを使用して `python3` と `pip` がインストールされていることを確認します（例：Ubuntu では `sudo apt install python3-pip`）。

    :::note USB Permissions
    Linux では、`sudo` を使わずに USB デバイスへアクセスできるようにするため、udev ルールを設定する必要がある場合もあります。
    :::

2.  **PyOCD をインストールする**
    ターミナルで次のコマンドを実行します：

    ```bash
    pip3 install -U pyocd
    ```

3.  **XIAO RA4M1 サポートパックをインストールする**
    XIAO RA4M1 は `R7FA4M1AB` チップを使用しています。

    パックを検索します：
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    パックをインストールします：
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **ターゲットを確認する**
    ターゲットが認識されているか確認します：
    ```bash
    pyocd list --targets
    ```

</TabItem>
</Tabs>


#### `XIAO_Debug_Mate_DAPLink_Package` パッケージについて

DAPLink デバッガ機能を使用し始める前に、ZIP ファイルを別途ダウンロードする必要があります。このファイルには、各種 XIAO ボードをデバッグするために必要なすべてのファイルが含まれています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> ZIP ファイルをダウンロード</font></span></strong>
    </a>
</div>


##### ディレクトリ構造の説明

ファイルを解凍すると、次のようなフォルダ構造が表示されます。各部分には特定の役割があります：

```
XIAO_Debug_Mate_DAPLink_Package/
├── examples/
│   ├── Blink_nrf52840.elf
│   ├── Blink_SAMD21.bin
│   └── ... (other example firmwares)
├── target/
│   ├── XIAO_RA4M1/
│   │   └── ra4m1.cfg
│   └── XIAO_SAMD21/
│       └── at91samd21g18.cfg
├── XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/
│   ├── bin/
│   │   └── openocd
│   └── share/
│       └── ... (OpenOCD scripts)
└── XIAO_MG24_Win_OpenOCD-v0.12.0/
    ├── bin/
    │   └── openocd.exe
    └── share/
        └── ... (OpenOCD scripts)
```

*   **`examples/`**
    このフォルダには、各種 XIAO ボード向けに Arduino からエクスポートされた、事前コンパイル済みのサンプルファームウェアファイル（`.bin`、`.elf`、`.hex` など）が含まれています。これらは、後のチュートリアルでマイコンへの書き込みとデバッグ方法を説明する際に使用します。

*   **`target/`**
    このフォルダには、公式の OpenOCD ディストリビューションには含まれていない可能性のある XIAO ボード用のターゲット設定（`.cfg`）ファイルが含まれています。XIAO SAMD21 や XIAO RA4M1 などのボードを、お使いのシステムに既にインストールされている OpenOCD と一緒に使用する場合、これらの設定ファイルを手動で OpenOCD 環境に追加する必要があります。その具体的な手順については後ほど説明します。

*   **`XIAO_MG24_..._OpenOCD-v0.12.0/`**
    これは **XIAO MG24** ボード向けの、特別かつ非常に重要なコンポーネントです。現在、このチップのサポートは公式の OpenOCD リリースや標準の xPack ディストリビューションには含まれていません。この問題を解決するために、Windows 用（`XIAO_MG24_Win_...`）と macOS/Linux 用（`XIAO_MG24_Mac_Linux_...`）の完全なスタンドアロン OpenOCD パッケージを提供しています。XIAO MG24 を使用する場合は、必ずこれらの特定のフォルダ内にある `openocd` 実行ファイルを使用する必要があります。

### ハードウェアの準備

デバッグ用にハードウェアを接続する手順は簡単です。

#### XIAO ボードの場合

:::tip
一般的に言えば、特に指定がない限り、Debug Mate 上での XIAO のすべての機能は、XIAO への追加の電源供給を必要としません。
:::

XIAO Debug Mate は、すべての Seeed Studio XIAO ボードとシームレスにプラグアンドプレイで使用できるように設計されています。

1.  使用する XIAO ボードを取り出し、Debug Mate 上のメスヘッダと向きを合わせます。
2.  **XIAO の USB-C ポートが、Debug Mate の USB-C ポートと同じ向きになるようにしてください。**
3.  XIAO がしっかりと奥まで収まるまで、真上からソケットに向かって強く押し込みます。これにより、Debug Mate 上のポゴピンが XIAO 裏面の SWD パッドと確実に接触します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

:::note
以前の **XIAO SAMD21**、**XIAO RP2040**、**XIAO nRF52840** などの一部の初期のXIAOボードは、背面パッドの統一規格が確立される前に設計されました。Debug Mate のポゴピンは可能な限り互換性を持たせるよう配置されていますが、これらの古いボードではわずかな差異により、完全には接触しない場合があります。

デバッグ接続が不安定な場合は、ソケット内でXIAOボードの**位置を少し調整してみてください**。必ずしも最後まで押し込む必要はありません。わずかに位置をずらすだけで、ポゴピンがXIAO背面のSWDパッドにしっかり接触することがよくあります。
:::

:::danger hot-swapping
XIAO と Debug Mate のホットスワップは絶対に行わないでください！
:::

#### その他の開発ボード向け

XIAO Debug Mate は、他のARMベース開発ボード向けの汎用SWDデバッグプローブとしても使用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/16.jpg" style={{width:800, height:'auto'}}/></div>

1.  ターゲットボードに応じて、4本のDuPontワイヤー（メス-オス、またはメス-メス）が必要です。
2.  ターゲットボード上のSWDデバッグピンを探します。通常は `SWDIO`、`SWCLK`、`GND`、場合によっては `VTref` または `VCC` と表示されています。
3.  XIAO Debug Mate の拡張ヘッダからターゲットボードへ、以下のようにワイヤーを接続します：

| XIAO Debug Mate Pin | Target Board Pin | 説明                                       |
| :------------------ | :--------------- | :---------------------------------------- |
| `SWDIO`             | `SWDIO`          | シリアルワイヤーデータ入出力             |
| `SWCLK`             | `SWCLK`          | シリアルワイヤークロック                 |
| `GND`               | `GND`            | 共通グラウンド                           |
| `VCC`               | `VTref` or `3V3` | ターゲット電圧リファレンス（レベルシフティングに重要） |

接続が完了したら、CMSIS-DAPインターフェースを使用するようにOpenOCDを設定し、他のプローブと同様にデバッグセッションを開始できます。


## Telnet を使った OpenOCD との対話

最近のIDEはグラフィカルなデバッグインターフェースを提供しますが、より直接的で低レベルな方法でデバッガーとやり取りしたい場合もあります。そのときに役立つのが Telnet です。OpenOCD は Telnet サーバーを実行しており、そこに直接接続してテキストベースのコマンドを送信し、ターゲットチップを制御できます。これは、簡単な確認作業、タスクの自動化スクリプト、あるいはフル機能のIDEが利用できない／不要な場合のデバッグに非常に便利です。

### Telnet クライアントを有効にする

Telnet を使用する前に、オペレーティングシステム上で有効化する必要がある場合があります。Telnet は常にインストールまたは有効化されているとは限りません。

<Tabs>
<TabItem value="Windows" label="Windows" default>

最近の Windows システムでは、Telnet クライアントは手動で有効化する必要があるレガシー機能です。

1.  `Win` + `R` を押して「ファイル名を指定して実行」ダイアログを開き、`control panel` と入力して Enter を押します。
2.  **Programs** > **Programs and Features** に進みます。
3.  左側のメニューで **Turn Windows features on or off** をクリックします。
4.  表示された新しいウィンドウで下にスクロールし、**Telnet Client** を探します。
5.  そのチェックボックスをオンにして **OK** をクリックします。Windows がこの機能をインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">
macOS の最近のバージョンでは、標準の Telnet クライアントが削除されている場合があります。最も簡単なインストール方法は [Homebrew] を使うことです。Terminal を開き、次を実行します：
```bash
brew install telnet
```
</TabItem>
<TabItem value="Linux" label="Linux">
多くの Linux ディストリビューションには Telnet クライアントが同梱されています。入っていない場合でも、パッケージマネージャーを使って簡単にインストールできます。Debian/Ubuntu 系システムでは、ターミナルを開いて次を実行します：
```bash
sudo apt-get update
sudo apt-get install telnet
```
</TabItem>
</Tabs>

### Telnet を使ったステップバイステップデバッグ

#### ステップ 1: OpenOCD サーバーを実行する

以下のリストから自分のXIAOボードを探し、オペレーティングシステムごとの手順に従って OpenOCD サーバーを起動します。このサーバープロセスは、GDB のようなデバッガーからの接続を待ち受けます。

##### Seeed Studio XIAO SAMD21 の場合

標準の OpenOCD パッケージには XIAO SAMD21 用の設定ファイルが含まれていません。提供しているパッケージから、このファイルを手動でシステムの OpenOCD インストールディレクトリにコピーする必要があります。

**1. 設定ファイルをコピーする**

*   **コピー元ファイル:** `XIAO_Debug_Mate_DAPLink_Package` 内の `target/XIAO_SAMD21/at91samd21g18.cfg` ファイルを探します。
*   **コピー先フォルダ:** このファイルを、xPack OpenOCD インストール先の `target` スクリプトフォルダにコピーします。パスはOSによって異なります：

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
`YourName` と `xpack-openocd-0.12.0-7` は、自分のユーザー名とインストールした OpenOCD のバージョンに置き換えてください。
:::

**2. OpenOCD コマンドを実行する**

システム上の任意の場所で新しいターミナルを開き、対応するコマンドを実行します：

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```

---

##### Seeed Studio XIAO RP2040 の場合

RP2040 用の設定は標準の xPack OpenOCD に含まれています。ターミナルを開き、コマンドを実行します。

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```

---

##### Seeed Studio XIAO RP2350 の場合

RP2350 用の設定は標準の xPack OpenOCD に含まれています。ターミナルを開き、コマンドを実行します。

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```

---

##### Seeed Studio XIAO nRF52840 の場合

nRF52 用の設定は標準の xPack OpenOCD に含まれています。ターミナルを開き、コマンドを実行します。

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```

---

##### Seeed Studio XIAO RA4M1 の場合

SAMD21 と同様に、標準の OpenOCD パッケージには XIAO RA4M1 用の設定ファイルが含まれていません。手動でコピーする必要があります。

**1. 設定ファイルをコピーする**

*   **コピー元ファイル:** `XIAO_Debug_Mate_DAPLink_Package` 内の `target/XIAO_RA4M1/ra4m1.cfg` ファイルを探します。
*   **コピー先フォルダ:** このファイルを、xPack OpenOCD インストール先の `target` スクリプトフォルダにコピーします。

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
`YourName` と `xpack-openocd-0.12.0-7` は、自分のユーザー名とインストールした OpenOCD のバージョンに置き換えてください。
:::

**2. OpenOCD コマンドを実行する**

システム上の任意の場所で新しいターミナルを開き、対応するコマンドを実行します：

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```

---

##### Seeed Studio XIAO MG24 の場合

:::warning[Important]
XIAO MG24 には、`XIAO_Debug_Mate_DAPLink_Package` に含まれている特別なバージョンの OpenOCD が必要です。システム全体にインストールされた OpenOCD は**使用しないでください**。パッケージ内で指定されたディレクトリ内からコマンドを実行する必要があります。
:::

**1. ターミナルの準備**

コマンドラインツールを開き、解凍したパッケージ内で、自分のオペレーティングシステムに対応する正しいフォルダへ移動します。

*   **Windows:**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd C:\Users\YourName\Desktop\XIAO_Debug_Mate_DAPLink_Package\XIAO_MG24_Win_OpenOCD-v0.12.0
    ```
*   **macOS / Linux:**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd ~/Desktop/XIAO_Debug_Mate_DAPLink_Package/XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0
    ```

**2. OpenOCD コマンドを実行する**

正しいディレクトリ内に入ったら、次のコマンドを実行します：

*   **Windows:**
    ```bash
    bin\openocd.exe -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```
*   **macOS / Linux:**
    ```bash
    bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```

#### コマンドの分解説明

コマンドの各部分が何をしているか理解しておくと、問題のトラブルシュートやワークフローのカスタマイズに役立ちます。ここでは典型的なコマンドを分解して説明します：

`bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "..."`

*   `bin/openocd`（または `bin\openocd.exe`）: OpenOCD プログラムを実行します。ここでは、標準的な慣習に従い `bin` サブディレクトリ内にあると仮定しています。名前や拡張子はOSによって異なります。

*   `-s share/openocd/scripts`: `-s` フラグは非常に重要です。OpenOCD に対し、スクリプトライブラリをどこで**検索（search）**するかを指定します。このパスが設定されていることで、OpenOCD は `-f` フラグで指定されたファイルを見つけることができます。

*   `-f interface/cmsis-dap.cfg`: `-f` フラグは読み込む設定ファイル（con**f**iguration）を指定します。最初のこのファイルは、使用しているデバッグアダプタ（標準的な CMSIS-DAP プローブ）を定義します。

*   `-f target/rp2040.cfg`: 2つ目の `-f` フラグは、ターゲットマイコン（XIAO ボード上の RP2040 チップ）の設定を読み込みます。

*   `-c "..."`: `-c` フラグは、OpenOCD 起動後に実行する**コマンド（command）**を渡します。
    *   `adapter speed 5000`:（RP2040/RP2350 用）安定した通信のために SWD クロック速度を 5000 kHz に設定します。
    *   `reset_config srst_nogate`:（MG24 用）この特定のターゲットに必要な特別なリセット設定です。

これらのコマンドのいずれかを実行すると、OpenOCD は接続を初期化し、GDB などのデバッガが接続するのを待ちます（通常はポート 3333）。その後、デバッガを使ってプログラム（`load <path/to/your/firmware.elf>`）をロードし、ブレークポイントを設定してコードをデバッグできます。

#### ステップ 2: Telnet サーバーに接続する

次に、**2 つ目の新しい**コマンドプロンプトまたはターミナルウィンドウを開きます。次のコマンドを入力して Enter キーを押します：

```bash
telnet localhost 4444
```

*   `localhost` は自分のコンピュータを指します。
*   `4444` は OpenOCD が Telnet 接続に使用するデフォルトのポート番号です。

接続が成功すると、ターミナルに OpenOCD からのウェルカムメッセージが表示され、`>` プロンプトが現れてコマンド入力待ちの状態になります。

#### ステップ 3: デバッグコマンドを実行する

これで、Telnet セッションに直接コマンドを入力してターゲットチップを制御できます。よく使われるコマンドをいくつか紹介します：

| Command             | Description                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `init`              | **ターゲットの初期化。** チップへの接続を確立します。これは接続後に必ず最初に実行すべきコマンドです。                                                                     |
| `reset halt`        | **リセットして停止。** マイコンをリセットし、直ちに実行を一時停止（ハルト）します。デバッグ可能な状態に入るための主な方法です。                                           |
| `reg`               | **レジスタの表示。** すべての CPU レジスタの現在値を表示します。                                                                                                         |
| `mdw [address] [count]` | **メモリ表示（ワード）。** メモリ内容を読み出して表示します。例えば、`mdw 0x20000000 10` は、メモリアドレス `0x20000000` から 10 ワード（32 ビット値）を表示します。      |
| `step`              | **シングルステップ。** CPU 上で 1 命令だけ実行します。その命令が関数呼び出しである場合は、その関数の中に *入って* ステップ実行します。                                      |
| `resume`            | **実行再開。** 現在の状態からプログラムを自由に実行させます。ブレークポイント（設定されている場合）に到達するか、再度停止させるまで実行が続きます。                         |
| `exit`              | **Telnet の終了。** Telnet 接続を閉じてコマンドプロンプトに戻ります。別ウィンドウで動作している OpenOCD サーバーはそのまま動作を続けます。                                   |

典型的な手動デバッグセッションは、次のような手順になります：
1.  `init` と入力してチップに接続します。
2.  `reset halt` と入力して、プログラムを最初の段階で停止させます。
3.  `mdw 0x20000000 10` と入力して、RAM の値をいくつか確認します。
4.  `step` を数回入力して、初期のスタートアップコードを順に実行します。
5.  `resume` と入力して、プログラムを通常通り実行させます。
6.  作業が終わったら `exit` と入力します。

## OpenOCD/PyOCD を使ってファームウェアを書き込む

対話的なデバッグに加えて、XIAO Debug Mate はコマンドラインツールを使って XIAO のマイクロコントローラに直接ファームウェアを書き込む（フラッシュする）用途にも優れています。主なツールは **OpenOCD**（Open On-Chip Debugger）と **PyOCD** です。

このガイドでは、これらの強力なツールを使って事前にコンパイルされたファームウェアファイルをアップロードする方法を説明します。「OpenOCD/PyOCD」という表記を使用しているのは、互換性のあるほとんどの XIAO ボードが OpenOCD を使用する一方で、**XIAO RA4M1** はフラッシュに PyOCD が必須だからです。

### 書き込み互換性

この表は、提供されているツールでコマンドラインからの書き込みに対応している XIAO ボードとファイル形式をまとめたものです。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO Model</th>
			<th>.bin</th>
			<th>.elf</th>
			<th>.hex</th>
            <th>Bootloader</th>
		</tr>
		<tr>
			<td>Seeed Studio XIAO SAMD21</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (.bin file with OpenOCD)</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO RP2040</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
            <td>❌</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RP2350</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
            <td>❌</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO nRF52840</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (.hex file with OpenOCD)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RA4M1</td>
			<td>✅ (PyOCD)</td>
			<td>❌</td>
			<td>✅ (PyOCD)</td>
            <td>✅ (.hex file with PyOCD)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO MG24</td>
			<td>❌</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>❌</td>
		</tr>
	</table>
</div>

1. この互換性表で ❌ が付いている項目は、OpenOCD v0.12.0 でのテストに失敗したサンプルです。時間を節約するために、別のファームウェアファイルを使用してください。
2. ブートローダーファイル：ここでは XIAO のブートローダーファイルと書き込みコマンドのみを提供しています。この XIAO モデルにブートローダーファイルが付属していない場合は、❌ で示されています。
3. **XIAO RA4M1 と XIAO MG24 は `.elf` ファイルの書き込みをサポートしていません。XIAO RA4M1 または XIAO MG24 に `.elf` ファイルを書き込もうとすると、デバイスがブリック状態になります。**

### 前提条件

1.  **OpenOCD のインストール：** **XIAO MG24 を除くすべての XIAO ボード**では、[OpenOCD がシステムにインストールされ、コマンドラインからアクセス可能（つまりシステムの PATH に追加済み）である必要があります](#install-openocd)。

2.  **XIAO Debug Mate ファームウェアパッケージ：** カスタム設定ファイルとサンプルファームウェアを含むパッケージを用意しています。これをダウンロードして展開してください。構成は次のとおりです：

    *   `examples/`: 各種 XIAO ボード向けの事前コンパイル済みサンプルファームウェア（`.elf`, `.hex`, `.bin`）と、いくつかの XIAO ブートローダーファイルが含まれます。
    *   `target/`: XIAO SAMD21 や RA4M1 など特定のボードに必要なカスタム OpenOCD 設定ファイル（`.cfg`）が含まれます。
    *   `XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/`: macOS と Linux で XIAO MG24 に書き込みを行うための、OpenOCD を同梱した自己完結型パッケージです。
    *   `XIAO_MG24_Win_OpenOCD-v0.12.0/`: Windows で XIAO MG24 に書き込みを行うための、OpenOCD を同梱した自己完結型パッケージです。

3.  **ターミナル／コマンドプロンプト：** コマンドラインインターフェース（例：Command Prompt、PowerShell、Terminal）を開いて使用できることが必要です。

#### コマンド実行の方針

*   **オプション A（推奨）：パッケージディレクトリから実行する**

    このガイド内のすべてのコマンドは、展開した `XIAO_Debug_Mate_DAPLink_Package` フォルダのルートでターミナルを開いていることを前提としています。これは最も簡単な方法であり、ファームウェアや設定ファイルへの相対パスがそのまま利用できます。

*   **オプション B（上級者向け）：任意のディレクトリから実行する**

    自分のプロジェクトフォルダからコマンドを実行したい場合は、`-s` フラグを使って、OpenOCD にパッケージのカスタムスクリプトの場所を指定できます。

    *   **必要な操作：** `openocd` コマンドに `-s <path_to_package_folder>` を追加します。例えば次のようになります：

        ```bash
        # Replace <path_to_package_folder> with the actual path
        openocd -s <path_to_package_folder> -f interface/cmsis-dap.cfg -f target/XIAO_SAMD21/at91samd21g18.cfg ...
        ```

:::note
**Windows と macOS/Linux の違い：** すべてのコマンドにおいて、Windows ユーザーは `openocd` の代わりに `openocd.exe` を使用してください。クロスプラットフォームでの互換性のため、ファイルパスにはスラッシュ（`/`）を使用することを推奨します。
:::

**自分のカスタムファームウェアを書き込むには：**

例として示されているパス（例：`examples/Blink_RP2040.elf`）を、自分のファームウェアファイルへのパスに置き換えるだけです。

### ファームウェアファイルの理解（.bin, .hex, .elf）

プロジェクトをコンパイルすると、ツールチェーンはマイクロコントローラにアップロードするためのファイルを生成します。一般的に次の 3 つの形式に出会います：

*   **.bin（バイナリ）：** 機械語コードのみを含む、生のコンパクトなバイナリファイルです。メモリアドレスに関する追加情報を持たないため、プログラミングツール側でどこに配置するかを指定する必要があります。
*   **.hex（Intel HEX）：** バイナリコードを ASCII テキストで表現した形式です。メモリアドレス、チェックサム、メタデータを含み、`.bin` より堅牢な形式です。
*   **.elf（Executable and Linkable Format）：** 最も包括的な形式です。機械語コードとメモリアドレス情報に加え、関数名、変数名、ソースコードの行番号などのデバッグ情報も含みます。デバッグに最適な形式です。
*   **.bootloader（ブートローダーファイル）：** ブートローダーファイルは、マイクロコントローラの保護された領域に配置される専用のファームウェアイメージで、ファームウェアの書き込み、デバイスのリカバリ、起動処理などを担います。XIAO ボードでは、ブートローダーにより、専用のハードウェアプログラマを使わずに（多くの場合 USB 経由で）新しいアプリケーションコードをデバイスにアップロードできます。デバイスが反応しなくなったりメインプログラムが動作しない場合でも、ブートローダーを書き直すことでボードを復旧できることがあります。特定のボードモデル用に提供された公式ブートローダーファイルのみを使用してください。誤ったファイルを使用すると、特別なツールで修理するまでデバイスが動作不能になる可能性があります。

**プロジェクトからこれらのファイルを取得する方法：**

*   **Arduino IDE:** コンパイル後（`Sketch > Verify/Compile`）、`Sketch > Export compiled Binary` を使用します。これにより、スケッチフォルダ内に `.hex` または `.bin` ファイルが保存されます。
*   **PlatformIO:** ビルドが成功すると、ファームウェアファイル（`firmware.bin`, `firmware.hex`, `firmware.elf`）はプロジェクトの `.pio/build/<environment_name>/` ディレクトリに生成されます。



### `.bin` ファイルの書き込み

#### Seeed Studio XIAO SAMD21 の場合

標準の OpenOCD パッケージには XIAO SAMD21 用の設定ファイルが含まれていません。提供しているパッケージから、この設定ファイルを手動でシステムの OpenOCD インストールディレクトリにコピーする必要があります。

**1. 設定ファイルをコピーする**

*   **ソースファイル：** `XIAO_Debug_Mate_DAPLink_Package` 内の `target/XIAO_SAMD21/at91samd21g18.cfg` ファイルを探します。
*   **コピー先フォルダ：** このファイルを、xPack OpenOCD インストール先の `target` スクリプトフォルダにコピーします。パスは OS によって異なります：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
`YourName` と `xpack-openocd-0.12.0-7` は、実際のユーザー名とインストールした OpenOCD のバージョンに置き換えてください。
:::

**2. ファームウェアを書き込む**

システム上の任意の場所で新しいターミナルを開き、対応するコマンドを実行します：

*   **Windows の場合：**
    ```powershell
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.bin 0x00002000 verify reset; shutdown"
    ```

*   **macOS / Linux の場合：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.bin 0x00002000 verify reset; shutdown"
    ```

---

#### Seeed Studio XIAO RP2040 の場合

OpenOCD を使用して XIAO RP2040 に書き込む場合は、`.bin` ファイルではなく `.elf` ファイルを使用することを強く推奨します。

これは、`.elf` ファイルにはプログラムのメモリアドレス情報（リンカアドレス）が内部にすでに含まれているためです。OpenOCD は自動的に正しい位置（通常は `0x10000000`）に書き込むため、オフセットアドレスを手動で計算したり推測したりする必要がありません。

どうしても `.bin` ファイルを使用する場合は、XIAO RP2040 の Flash 開始アドレス `0x10000000` を手動で指定する必要があります。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.bin 0x10000000 verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.bin 0x10000000 verify reset exit"
```

---

#### Seeed Studio XIAO RP2350 の場合

OpenOCD を使用して XIAO RP2350 に書き込む場合は、`.bin` ファイルではなく `.elf` ファイルを使用することを強く推奨します。

これは、`.elf` ファイルにはプログラムのメモリアドレス情報（リンカアドレス）が内部にすでに含まれているためです。OpenOCD は自動的に正しい位置（通常は `0x10000000`）に書き込むため、オフセットアドレスを手動で計算したり推測したりする必要がありません。

どうしても `.bin` ファイルを使用する場合は、XIAO RP2350 の Flash 開始アドレス `0x10000000` を手動で指定する必要があります。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.bin 0x10000000 verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.bin 0x10000000 verify reset exit"
```

---

#### Seeed Studio XIAO nRF52840 の場合

nRF52 用の設定は標準の xPack OpenOCD に含まれています。ターミナルを開き、コマンドを実行します。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.bin 0x27000 verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.bin 0x27000 verify reset exit"
```

---

#### Seeed Studio XIAO RA4M1 の場合

現在、標準の OpenOCD ディストリビューションには、Renesas RA シリーズ向けの専用ドライバやターゲット設定ファイルなど、組み込みサポートが欠けていることがよくあります。そのため、OpenOCD を使った書き込みは、手動設定が必要な複雑な手順になります。

したがって、RA4M1 をすぐにサポートする `PyOCD` の使用を強く推奨します。

ファームウェア（例：`Blink_RA4M1.hex`）を書き込むには、使用している OS に対応したコマンドを使用します。

**Windows の場合：**
```powershell
pyocd flash -t r7fa4m1ab examples\Blink_RA4M1.bin —base-address 0x4000
```

**macOS / Linux の場合：**
```bash
pyocd flash -t r7fa4m1ab examples/Blink_RA4M1.bin —base-address 0x4000
```


### `.elf` ファイルの書き込み

:::danger
`.elf` ファイルを書き込む際は、ファームウェアサイズに十分注意してください。ファイルが 2MB を超える場合は、デバイスに十分な Flash 容量があることを確認してください。そうしないと、デバイスがブリックする可能性があります！
:::

#### Seeed Studio XIAO SAMD21 の場合

XIAO SAMD21 の Flash メモリは 256KB と限られているため、通常 256KB を超えるファームウェアファイルは書き込めません。Blink サンプルの `.elf` ファイルはすでに 658KB に達しており、書き込み不可能です。代わりに、より小さい `.bin` または `.hex` ファイルの使用を推奨します。

---

#### Seeed Studio XIAO RP2040 の場合

RP2040 用の設定は標準の xPack OpenOCD に含まれています。ターミナルを開き、コマンドを実行します。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

---

#### Seeed Studio XIAO RP2350 の場合

RP2350 用の設定は標準の xPack OpenOCD に含まれています。ターミナルを開き、コマンドを実行します。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

---

#### Seeed Studio XIAO nRF52840 の場合

nRF52 用の設定は標準の xPack OpenOCD に含まれています。ターミナルを開き、コマンドを実行します。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

:::tip
ファームウェアを有効にするために、2 回書き込みが必要になる場合がありますが、これは正常です。
:::

---

#### Seeed Studio XIAO RA4M1 の場合

:::danger デバイスをブリックさせないでください
XIAO RA4M1 では `.elf` ファイルの書き込みは禁止されています。書き込むとデバイスがブリックする可能性があります!!!
:::

---

#### Seeed Studio XIAO MG24 の場合

:::danger デバイスをブリックさせないでください
XIAO MG24 では `.elf` ファイルの書き込みは禁止されています。書き込むとデバイスがブリックする可能性があります!!!
:::


### `.hex` ファイルの書き込み

#### Seeed Studio XIAO SAMD21 の場合

標準の OpenOCD パッケージには XIAO SAMD21 用の設定ファイルが含まれていません。提供しているパッケージから、このファイルをシステムの OpenOCD インストールディレクトリに手動でコピーする必要があります。

**1. 設定ファイルをコピーする**

*   **ソースファイル：** `XIAO_Debug_Mate_DAPLink_Package` 内の `target/XIAO_SAMD21/at91samd21g18.cfg` ファイルを探します。
*   **コピー先フォルダ：** このファイルを、xPack OpenOCD インストール先の `target` スクリプトフォルダにコピーします。パスは OS によって異なります：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
`YourName` と `xpack-openocd-0.12.0-7` は、実際のユーザー名とインストールした OpenOCD のバージョンに置き換えてください。
:::

**2. ファームウェアを書き込む**

システム上の任意の場所で新しいターミナルを開き、対応するコマンドを実行します：

*   **Windows の場合：**
    ```powershell
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.hex verify reset; shutdown"
    ```

*   **macOS / Linux の場合：**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.hex verify reset; shutdown"
    ```

---

#### Seeed Studio XIAO nRF52840 の場合

nRF52 用の設定は標準の xPack OpenOCD に含まれています。ターミナルを開き、コマンドを実行します。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.hex verify reset exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.hex verify reset exit"
```

---

#### Seeed Studio XIAO RA4M1 の場合

現在、標準の OpenOCD ディストリビューションには、Renesas RA シリーズ向けの専用ドライバやターゲット設定ファイルなど、組み込みサポートが欠けていることがよくあります。そのため、OpenOCD を使った書き込みは、手動設定が必要な複雑な手順になります。

したがって、RA4M1 をすぐにサポートする `PyOCD` の使用を強く推奨します。

ファームウェア（例：`Blink_RA4M1.hex`）を書き込むには、使用している OS に対応したコマンドを使用します。

**Windows の場合：**
```powershell
pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples\Blink_RA4M1.hex
```

**macOS / Linux の場合：**
```bash
pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples/Blink_RA4M1.hex
```

**コマンドの説明：**
*   `pyocd flash`: 書き込み処理を実行します。
*   `-e sector`: 書き込み前に必要なセクタを消去します。
*   `-a 0x0`: 書き込み開始アドレスを `0x00000000` に指定します。
*   `-t r7fa4m1ab`: 対象 MCU の種類を指定します。
*   `examples\Blink_RA4M1.hex` または `examples/Blink_RA4M1.hex`: 書き込みたいファームウェアファイルへのパスです。Windows では `\`、macOS/Linux では `/` を使用している点に注意してください。

#### Seeed Studio XIAO MG24 の場合

このボードには、パッケージに含まれる専用の OpenOCD バージョンが必要です。コマンドを実行する前に、必ず正しいディレクトリに移動する必要があります。

1.  **正しいディレクトリに移動する：**
    *   **Windows の場合：** コマンドプロンプトを開き、次を実行します：
        `cd XIAO_MG24_Win_OpenOCD-v0.12.0`
    *   **macOS/Linux の場合：** ターミナルを開き、次を実行します：
        `cd XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0`

2.  **フラッシュコマンドを実行します：**
    現在、パッケージディレクトリ内で 2 階層深い場所にいるため、ファームウェアへのパスは `../examples/Blink_MG24.hex` になります。

    **Windows の場合：**
    ```powershell
    bin\openocd.exe -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```

    **macOS / Linux の場合：**
    ```bash
    bin/openocd -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```


### ブートローダーファイルを書き込む

これはボードを復旧できる重要な操作です。

#### Seeed Studio XIAO SAMD21 の場合

標準の OpenOCD パッケージには XIAO SAMD21 用の設定ファイルが含まれていません。提供しているパッケージから、このファイルを手動でシステムの OpenOCD インストールディレクトリにコピーする必要があります。

**1. 設定ファイルをコピーする**

*   **コピー元ファイル：** `XIAO_Debug_Mate_DAPLink_Package` 内の `target/XIAO_SAMD21/at91samd21g18.cfg` を探します。
*   **コピー先フォルダ：** このファイルを xPack OpenOCD インストールの `target` スクリプトフォルダにコピーします。パスは OS によって異なります：

    *   **Windows：** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux：** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
`YourName` と `xpack-openocd-0.12.0-7` は、実際のユーザー名とインストールした OpenOCD のバージョンに置き換えてください。
:::

**2. ファームウェアを書き込む**

このコマンドは、パッケージ内で提供しているカスタム `at91samd21g18.cfg` ファイルを使用して、`.bin` ブートローダーを書き込みます。

*   **Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

*   **macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

#### Seeed Studio XIAO nRF52840 の場合

この手順では、ブートローダーをダウンロードし、その後チップを消去して新しいファイルを書き込みます。

このコマンドは、OpenOCD インストールに含まれる標準の `nrf52.cfg` を使用します。

**Windows の場合：**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

**macOS / Linux の場合：**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

:::tip
OpenOCD を使ってブートローダーを書き込み、その後ファームウェアの bin を書き込んだだけでは、ファームウェア bin は正しく動作しません。Arduino を使ってプログラムを書き込むことで、プログラムを正常に動作させる必要があります。

これは、Nordic シリーズのチップ（nRF52832 など）のブートローダーが、起動時に特定のメモリアドレス（通常「Bootloader Settings Page」と呼ばれます）にあるアプリケーションファームウェアの有効性情報をチェックする必要があるためです。この「settings page」には、ファームウェアの CRC チェックサム、長さ、有効フラグが含まれています。

OpenOCD のような汎用プログラミングツールを使って .bin ファイルを直接書き込む場合、指定されたアプリケーション開始アドレスにファームウェアのバイナリデータを書き込むだけであり、ブートローダーが必要とする「settings page」を自動生成・書き込みはしません。そのため、デバイスが再起動すると、ブートローダーは有効な settings page を検出できず、正当なアプリケーションが存在しないと判断してファームウェアの起動を拒否し、通常は DFU（Device Firmware Update）モードに入り、OTA やシリアルポート経由での更新を待機します。
:::

#### Seeed Studio XIAO RA4M1 の場合

現在、標準の OpenOCD ディストリビューションには、Renesas RA シリーズ向けの専用ドライバやターゲット設定ファイルなどの組み込みサポートが不足していることが多くあります。そのため、OpenOCD を使った書き込みは、手動設定を要する複雑な手順になります。

したがって、RA4M1 をすぐにサポートしている `PyOCD` の使用を強く推奨します。

ブートローダーを書き込むには、使用しているオペレーティングシステムに対応したコマンドを使用します。

**Windows の場合：**
```powershell
pyocd flash -t r7fa4m1ab examples\Bootloader_RA4M1.hex —erase chip
```

**macOS / Linux の場合：**
```bash
pyocd flash -t r7fa4m1ab examples/Bootloader_RA4M1.hex —erase chip
```


## PlatformIO でデバッグを使用する

まず、Visual Studio Code に PlatformIO IDE 拡張機能がインストールされていることを確認します。

1.  **VS Code をインストール：** [Visual Studio Code をダウンロードしてインストール](https://code.visualstudio.com/)します。
2.  **PlatformIO IDE をインストール：** VS Code を開き、拡張機能ビュー（Ctrl+Shift+X）を開いて `PlatformIO IDE` を検索し、インストールします。

### PlatformIO プロジェクトの作成と設定

1.  **PlatformIO を起動：** VS Code のアクティビティバーで PlatformIO アイコンをクリックし、「Home」を選択して PIO Home 画面を開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/17.png" style={{width:1000, height:'auto'}}/></div>

2.  **新規プロジェクトを作成：** 「New Project」をクリックし、プロジェクト名を入力します。
    *   **ボードを選択：** 使用する特定の XIAO ボードを検索します。

:::note
Seeed Studio のボードはサードパーティリポジトリでホストされているため、デフォルトでは検索リストに表示されない場合があります。その場合は、汎用ボード（または利用可能な任意のボード）を選択してプロジェクトを初期化し、次のステップで修正します。
:::

3.  **`platformio.ini` を設定：** これは最も重要なステップです。XIAO Debug Mate でデバッグを有効にし、ボードを正しく認識させるには、プロジェクトのルートにある `platformio.ini` ファイルを編集する必要があります。

    **Seeed Studio ボードサポートを追加：**
    Seeed Studio の開発ボードはデフォルトの PlatformIO レジストリには含まれておらず、**サードパーティリポジトリ**で管理されています。これらを使用するには、設定内でリポジトリ URL を指定する必要があります。

    `platform` パラメータを次の URL に設定する必要があります：
    `https://github.com/Seeed-Studio/platform-seeedboards`

    この設定ファイルは、PlatformIO に対してボード定義をこのカスタムリポジトリからダウンロードするよう指示し、アップロードとデバッグに使用するツールを指定します。XIAO Debug Mate は標準的な **CMSIS-DAP** デバッガとして機能します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/18.png" style={{width:1000, height:'auto'}}/></div>

    以下に、各種 XIAO モデル向けの推奨 `platformio.ini` 設定を示します。使用するボードに対応する内容をコピーしてください。最新のボードサポートファイルを利用できるように、GitHub 上のプラットフォーム開発版を使用しています。

<Tabs>
<TabItem value="rp2350" label="XIAO RP2350" default>

```ini
[env:seeed_xiao_rp2350]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2350
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

</TabItem>
<TabItem value="rp2040" label="XIAO RP2040">

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="samd21" label="XIAO SAMD21">

```ini
[env:seeed-xiao-samd]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-samd
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="nrf52840" label="XIAO nRF52840">

nRF52840 では、PlatformIO は 2 種類のボードサポートパッケージを提供しています。プロジェクト要件に合う方を選択してください。

**Mbed コア：**
```ini
[env:seeed-xiao-mbed-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mbed-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

**Adafruit コア：**
```ini
[env:seeed-xiao-afruitnrf52-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="ra4m1" label="XIAO RA4M1">

RA4M1 は特別なケースであることに注意してください。アップロードには `pyocd` を使用しますが、デバッグには引き続き `cmsis-dap` を使用します。

```ini
[env:seeed-xiao-ra4m1]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-ra4m1
framework = arduino
upload_protocol = pyocd
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="mg24" label="XIAO MG24">

```ini
[env:seeed-xiao-mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
</Tabs>

`platformio.ini` ファイルを保存すると、次回ビルドまたはデバッグを行う際に、PlatformIO が必要なツールチェーンやパッケージを自動的にダウンロードします。

### ステップ実行によるデバッグ

ステップ実行は、コードのロジックを追跡しバグを特定するための中核機能です。

1.  **ハードウェアを接続：** XIAO ボードを XIAO Debug Mate に接続します。Debug Mate を USB-C ケーブルでコンピュータに接続します。
2.  **デバッグを開始：** デバッグセッションは次の 2 通りの方法で開始できます：
    *   `F5` キーを押します。
    *   アクティビティバーの「Run and Debug」ビュー（バグのアイコン）を開き、上部の緑色の「Start Debugging」矢印をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/19.png" style={{width:1000, height:'auto'}}/></div>

3.  **デバッグコントロール：** PlatformIO はコードをコンパイルし、Debug Mate 経由で XIAO にアップロードし、`main()` または `setup()` の最初の行で実行を一時停止します。エディタ上部にデバッグツールバーが表示され、プログラムの実行フローを制御できるようになります。
    *   **Continue (F5)**: 次のブレークポイントに到達するか、プログラムが終了するまで実行を再開します。
    *   **Step Over (F10)**: 現在の行を実行します。行に関数呼び出しが含まれている場合、その関数全体を実行し、次の行で停止します。
    *   **Step Into (F11)**: 現在の行を実行します。行に関数呼び出しが含まれている場合、デバッガはその関数内に入り、最初の行で停止します。
    *   **Step Out (Shift+F11)**: 関数内で一時停止している場合、その関数の残りを実行し、呼び出し元の行に戻ります。
    *   **Restart (Ctrl+Shift+F5)**: 現在のデバッグセッションを終了して再起動します。
    *   **Stop (Shift+F5)**: デバッグセッションを終了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/20.png" style={{width:1000, height:'auto'}}/></div>

### ブレークポイントデバッグ

プログラムを特定の位置で一時停止させたい場合、ブレークポイントがそのためのツールです。

1.  **ブレークポイントを設定する**: コードエディタで、一時停止させたい行番号の左側にカーソルを移動します。薄い赤い点が表示されます。それをクリックするとブレークポイントが設定され（点が明るい赤になります）、有効になります。
2.  **ブレークポイントまで実行する**: デバッグセッションを開始します（`F5`）。プログラムは全速で実行され、ブレークポイントがある行に到達すると自動的に一時停止します。
3.  **ブレークポイントを管理する**: 「Run and Debug」サイドパネルの「BREAKPOINTS」セクションには、すべての有効なブレークポイントが一覧表示されます。ここから有効化、無効化、削除ができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/21.png" style={{width:1000, height:'auto'}}/></div>

### RAM の読み書き

プログラムがブレークポイントで一時停止している間、変数の状態を確認したり、さらには変更したりすることができます。

1.  **変数を表示する（読み取り）**: 「Run and Debug」サイドパネルの「VARIABLES」セクションには、現在のスコープ内のすべてのローカル変数とグローバル変数、およびその現在値が表示されます。
2.  **変数をウォッチする**: 特定の変数や式を監視したい場合は、「WATCH」セクションに移動し、`+` アイコンをクリックして、変数名を入力します（例：`myVariable` や、そのメモリアドレスを確認するための `&myVariable`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/22.png" style={{width:1000, height:'auto'}}/></div>

3.  **変数を変更する（書き込み）**: 「VARIABLES」または「WATCH」セクションで、変数の値をダブルクリックすると、新しい値を入力できる場合があります。Enter キーを押して変更を適用します。これは、プログラムを再起動せずにさまざまな条件をテストするのに非常に便利です。


## トラブルシューティング

### Q1: XIAO RA4M1 をブリックしてしまった場合、修復する方法はありますか？

ブートローダーを書き直してデバイスを復元できる場合があります。XIAO RA4M1 モデルについては、ブートローダーの復旧方法として **[この方法](#for-seeed-studio-xiao-ra4m1-2)** を参照してください。

ブートローダーを復元する際にエラーが発生した場合は、XIAO RA4M1 をコンピュータに接続された XIAO Debug Mate に接続してみてください。XIAO RA4M1 上の B ボタンを押し続けながら、同時に R ボタンを 1 回クリックし、その後 R と B の両方を離します。そのうえで、再度ブートローダーの書き込みを行ってください。

ブートローダーの書き込み後、Arduino などのソフトウェアを使用してファームウェアの再アップデートを試してください。通常はこれで機能が回復します。うまくいかない場合、デバイスは恒久的に損傷しており、修復不能である可能性があります。XIAO Debug Mate を使用したファームウェアの書き込みに関するあらゆる操作については、ユーザーご自身が全責任を負う必要があります。


### Q2: デバイスがブリックされたかどうかはどのように判断できますか？

XIAO デバイスが損傷しているかどうかを判断する最も簡単な方法は、コンピュータに接続したときにシリアルポート接続がまったく表示されないことです。B ボタンを押し続けた状態でコンピュータに接続しても、依然としてシリアルポート接続が表示されない場合、そのデバイスは損傷しています。


### Q3: 損傷した機器は修理できますか？交換を依頼するためにテクニカルサポートへ連絡できますか？

XIAO デバイスの損傷は、通常、パーティション設定やブートローダーファイルの問題によって引き起こされます。これは多くの場合、ブートローダーファイルを書き直すことで解決できます。これが失敗した場合、現時点では他に有効な解決策はありません。この操作はユーザー自身の責任で行う必要があるため、書き込みに使用するコマンドやファームウェアが検証済みで有効なものであることを必ず確認してください。

### Q4: XIAO Debug Mate にはドライバが必要ですか？

XIAO Debug Mate は最新のコンピュータ用オペレーティングシステムでテストおよび検証されており、ドライバをインストールしなくても正常に動作します。Windows コンピュータでは、**Windows 11** オペレーティングシステムの使用を推奨します。テスト中に、Zading を使用してドライバをインストールしている場合、デバイスが認識されなくなることがあると判明しました。

### Q5: Windows 11 で XIAO Debug Mate が常に赤色点灯し、「unable to find a matching CMSIS-DAP device」というエラーが出て認識されません。

Windows 11 上で XIAO Debug Mate が赤色点灯し、「unable to find a matching CMSIS-DAP device」と表示される問題については、次のトラブルシューティング手順をお試しください。

**1. USB ケーブルを確認する**

まず、使用している USB ケーブルがデータ転送に対応しており、充電専用ケーブルではないことを確認してください。シリアルモニタソフトウェアにデバイスが表示されるか、何らかのデバイスログが確認できるかどうかで検証できます。接続してもコンピュータ側でまったく反応がない場合は、ケーブルを交換してみてください。

**2. PowerShell でドライバを再インストールする**

ケーブルに問題がないことが確認できた場合、原因は誤ったドライバインストールである可能性が高いです。PowerShell を使用して競合しているドライバを削除することで解決できます。次の手順に従ってください。

1.  スタートボタンを右クリックし、**Terminal (Admin)** または **PowerShell (Admin)** を選択します。

2.  次のコマンドを実行して、CMSIS-DAP ドライバの詳細を確認します。

    ```powershell
    dism /online /get-drivers /format:table | findstr /i "cmsis-dap"
    ```
3.  出力の中から **"Published Name"**（通常は `oemXX.inf` のような形式）を探します。

4.  次のコマンドを実行してドライバを削除およびアンインストールします（`{inf_name}` は前の手順で見つけた実際の名前、例：`oem10.inf` に置き換えてください）。

    ```powershell
    pnputil /delete-driver {inf_name} /uninstall
    ```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/40.png" style={{width:1000, height:'auto'}}/></div>

これらの手順を完了したら、デバイスを再接続し、正しく認識されるかどうかを確認してください。

### Q6: システムに表示される OpenOCD のバージョンが、Wiki のスクリーンショットと異なる場合はどうすればよいですか？

システムで OpenOCD のバージョンを確認した際に、その出力が Wiki のスクリーンショットに示されている推奨バージョンと一致しない場合、複数の OpenOCD がインストールされているか、システムがデフォルトで別のバージョンを使用している可能性があります。

Windows コンピュータでは、**システム環境変数**を開き、**システム環境変数**セクションに移動します。`Path` 変数を編集し、Wiki で推奨されている OpenOCD インストール先のパス（例：`C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`）を一覧の一番上に移動します。これにより、システムが最初に推奨バージョンの OpenOCD を検出して使用するようになります。この変更を行った後、新しいターミナルを開き、`openocd --version` を再実行して、正しいバージョンが表示されることを確認してください。



## リソース

- **[ZIP]** [XIAO_Debug_Mate_DAPLink_Package-v1.0](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip)


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
