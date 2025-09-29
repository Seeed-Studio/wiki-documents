---
description: HimaxのSDKを使用してGrove Vision AI V2を開発する方法を紹介します。
title: Himax SDKを使用したGrove Vision AI V2の開発
keywords:
- himax
- vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_vision_ai_v2_himax_sdk
last_update:
  date: 05/15/2025
  author: Citric
---


# Himax SDKを使用したGrove Vision AI V2の開発

このチュートリアルは、Grove Vision AIプラットフォームでHimax SDKを使用する方法を案内することを目的としています。特に、データ管理のためのmicroSDカードと音声キャプチャのためのPDMマイクの効果的な利用方法に焦点を当てています。このガイドを終える頃には、これらのコンポーネントをAIプロジェクトに実装し、大規模なデータセットを保存し、高品質な音声を簡単にキャプチャできるようになります。これらはすべてGrove Vision AIデバイス上で直接行えます。

以下は、このチュートリアルの目次です。

1. [Windows Subsystem for Linux (WSL)にUbuntu 22.04をインストールする](#install-ubuntu-2204-on-windows-subsystem-for-linux-wsl)
2. [コンパイル環境の準備](#preparation-of-the-compilation-environment)
3. [Himax SDKを使用して録音例を実行する](#run-the-recording-example-using-the-himax-sdk)
4. [Himax SDKコード解析](#himax-sdk-code-analysis)

## はじめに

この記事のチュートリアル内容を始める前に、以下のハードウェアを準備する必要があります。

### 必要な材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Vision AI V2</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

microSDカードのルーチンを使用したい場合は、microSDカードを別途購入する必要があります（これまでにテストされた最大容量は64GBです）。対応するメモリーカードのフォーマットは以下の通りです：**FAT12/FAT16/FAT32/exFAT**。

## Windows Subsystem for Linux (WSL)にUbuntu 22.04をインストールする

:::tip
このセクションはWindowsコンピュータにのみ適用されます。Windowsコンピュータを使用していない場合は、このセクションをスキップして**[コンパイル環境の準備](#preparation-of-the-compilation-environment)**に進んでください。
:::

Himax SDKはLinux環境でコンパイルする必要があるため、Windowsコンピュータを使用している場合はWSLをインストールする必要があります。Windows Subsystem for Linux (WSL)にUbuntu 22.04をインストールするには、以下の一般的な手順に従います。開始する前に、Windows 10またはWindows 11の互換性のあるバージョンを使用していることを確認してください。

### ステップ1. Ubuntu 22.04.3をダウンロードしてインストールする

Microsoft StoreからUbuntuをインストールできます：

Microsoft Storeを開きます。**Ubuntu 22.04.3 LTS**を検索します。検索結果からUbuntu 22.04.3 LTSバージョンを選択します。「取得」または「インストール」をクリックしてUbuntuアプリをダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/4.png" style={{width:1000, height:'auto'}}/></div>

または、コマンドラインを使用してUbuntuをインストールすることもできます。PowerShellまたはコマンドプロンプトを開き、以下のコマンドを実行します：

```shell
wsl --install -d Ubuntu-22.04
```

Ubuntuがインストールされたら、スタートメニューから起動します。初回起動時には、ユーザーアカウントとパスワードの作成を求められます。指示に従って設定してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/5.png" style={{width:800, height:'auto'}}/></div>

これで、WSLを使用してWindowsマシン上でUbuntuを使用できます。Linuxターミナルにアクセスし、パッケージをインストールしたり、Linuxアプリケーションを実行したりできます。

:::note
以前にWSL 1をインストールしていてWSL 2にアップグレードしたい場合は、WSL 2 Linuxカーネル更新パッケージをインストールし、既存のディストリビューションをWSL 2に設定するなど、追加の手順を実行する必要があります。これらの追加手順については、[公式Microsoftドキュメント](https://learn.microsoft.com/en-us/windows/wsl/install)で確認できます。
:::

最新の手順やトラブルシューティングのヒントについては、[公式Microsoftドキュメント](https://learn.microsoft.com/en-us/windows/wsl/install)を確認してください。

## コンパイル環境の準備

### ステップ 2. Microsoft VSCode のインストール

Visual Studio Code (VSCode) は、Microsoft によって開発された無料でオープンソースのコードエディタで、Windows、macOS、Linux で利用可能です。以下に、それぞれのプラットフォームでの VSCode のインストール手順を説明します。

**Windows**:

1. **インストーラーのダウンロード:**
   - [公式 Visual Studio Code ダウンロードページ](https://code.visualstudio.com/Download)にアクセスします。
   - Windows インストーラーをクリックして `.exe` ファイルをダウンロードします。

2. **インストーラーの実行:**
   - ダウンロードが完了したら、インストーラー (`VSCodeSetup-x.y.z.exe`、x.y.z はバージョン番号) を実行します。
   - セットアップウィザードの指示に従います。デフォルトの選択をそのまま使用できますが、VSCode を PATH に追加するオプションや、デスクトップアイコンを作成するオプションにチェックを入れることをお勧めします。

3. **インストールの完了:**
   - 「Finish」をクリックしてインストールを完了します。VSCode が自動的に起動するはずです。

4. **VSCode の起動:**
   - デスクトップアイコンをダブルクリックするか、スタートメニューで検索して VSCode を起動します。

**macOS**:

1. **インストーラーのダウンロード:**
   - [公式 Visual Studio Code ダウンロードページ](https://code.visualstudio.com/Download)にアクセスします。
   - macOS バージョンをクリックして `.zip` ファイルをダウンロードします。

2. **アプリケーションのインストール:**
   - ダウンロードが完了したら、`.zip` ファイルを開いてアプリケーションを展開します。
   - Visual Studio Code をアプリケーションフォルダにドラッグ＆ドロップします。これでランチャーから利用可能になります。

3. **VSCode の起動:**
   - Launchpad を開き、Visual Studio Code アイコンをクリックします。
   - 初回起動時に、インターネットからダウンロードされたアプリケーションであるため警告が表示される場合があります。「開く」をクリックして続行します。

**Linux**:

Linux では、snap パッケージを使用するか、ディストリビューションのパッケージリポジトリを通じて VSCode をインストールできます。以下は Ubuntu を例にしたコマンドラインでの手順です：

1. **パッケージインデックスの更新 (Ubuntu/Debian ベースのディストリビューション):**
    ```sh
    sudo apt update
    ```

2. **依存関係のインストール (未インストールの場合):**
    ```sh
    sudo apt install software-properties-common apt-transport-https wget
    ```

3. **Microsoft の GPG キーとリポジトリの追加:**
    ```sh
    wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
    ```

4. **VSCode のインストール:**
    ```sh
    sudo apt update
    sudo apt install code
    ```

5. **VSCode の起動:**
   - アプリケーションメニューで検索するか、ターミナルで `code` を実行して起動します。

snap パッケージをサポートするディストリビューションの場合：

```sh
sudo snap install --classic code
```

:::note
インストールコマンドは Linux ディストリビューションによって若干異なる場合がありますので、特定の Linux バージョンに関する公式ドキュメントやパッケージ管理の指示を確認してください。
:::

### ステップ 3. Python のインストール

Python 3 のインストールは、使用しているオペレーティングシステムによって異なります。以下に、Windows、macOS、Linux でのインストール手順を説明します。

**Windows**:

1. **Python のダウンロード:**
   - [公式 Python ウェブサイト](https://www.python.org/downloads/windows/)にアクセスします。
   - 「Download Python」をクリックして、Windows 用の最新バージョンをダウンロードします。
   - 必要なバージョンの実行可能インストーラーを選択します。

2. **インストーラーの実行:**
   - インストーラーを起動します。
   - インストーラーウィンドウの下部にある「Add Python 3.x to PATH」にチェックを入れて、Python を環境変数に追加することを忘れないでください。
   - 「Install Now」をクリックします。

3. **インストールの確認:**
   - コマンドプロンプトを開き、以下のコマンドを入力して Python が正しくインストールされているか確認します：

    ```
    python --version
    ```

    インストールした Python のバージョンが表示されるはずです。

**macOS**:

1. **Python のダウンロード:**
   - [公式 Python ウェブサイト](https://www.python.org/downloads/macos/)にアクセスします。
   - 「Download Python」をクリックして、macOS 用の最新バージョンをダウンロードします。
   - macOS 64-bit インストーラーをダウンロードします。

2. **インストーラーの実行:**
   - ダウンロードしたパッケージを開き、指示に従って Python をインストールします。

3. **インストールの確認:**
    - ターミナルを開き、以下のコマンドを入力します：

    ```sh
    python3 --version
    ```

    インストールされた Python のバージョンが表示されるはずです。

**Linux**:

多くの Linux ディストリビューションには Python 3 があらかじめインストールされています。Python 3 がすでにインストールされているか確認し、バージョンを確認するには、ターミナルを開いて以下を入力します：

```sh
python3 --version
```

Python 3 がインストールされていない場合や、別のバージョンをインストールしたい場合は、Linux ディストリビューションに付属のパッケージマネージャーを使用します。

例えば、Ubuntu または Debian ベースのシステムでは、以下の手順で Python 3 をインストールできます：

1. **パッケージリストの更新:**
   ```sh
   sudo apt update
   ```

2. **Python 3 のインストール:**
   ```sh
   sudo apt install python3
   ```

3. **インストールの確認:**
   ```sh
   python3 --version
   ```

Fedora または Red Hat ベースのシステムでは、`dnf` を使用します：

```sh
sudo dnf install python3
```

Arch Linux または Manjaro では：

```sh
sudo pacman -S python
```

### ステップ 4. python-pip のインストール

- **`pip` のインストール**:

  `pip` は Python のパッケージインストーラーです。Python Package Index やその他のインデックスからパッケージをインストールするために使用します。Windows および macOS では、`pip` は Python インストーラーに含まれています。Linux では、別途インストールが必要な場合があります：

  Ubuntu または Debian ベースのシステムの場合：
  ```sh
  sudo apt install python3-pip
  ```

  Fedora の場合：
  ```sh
  sudo dnf install python3-pip
  ```

  Arch Linux の場合：
  ```sh
  sudo pacman -S python-pip
  ```

- **`pip` のインストール確認:**

  以下のコマンドを実行して `pip` のインストールを確認します：
  ```sh
  pip3 --version
  ```

- **仮想環境:**

  Python プロジェクトの依存関係を管理するために仮想環境を使用することをお勧めします。以下のコマンドで仮想環境を作成できます：

  ```sh
  python3 -m venv /path/to/new/virtual/environment
  ```

新しい仮想環境を配置したいディレクトリに `/path/to/new/virtual/environment` を置き換えることを忘れないでください。

これらの手順に従うことで、Python 3 と `pip` をシステムにインストールし、Python 開発を開始することができます。

### ステップ 5. make コンパイル環境をインストールする

プロジェクトリポジトリを保存したい場所にクローンします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> プロジェクトをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```sh
cd /mnt/c/Users/mengd/Desktop/
git clone https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic.git
```

次に、VSCode でプロジェクトを開き、VSCode のターミナルで `wsl` コマンドを入力して Linux 環境に入ります。（MacOS または Linux を使用している場合、このコマンドは不要です）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/6.png" style={{width:1000, height:'auto'}}/></div>

次に、WSL 環境（Windows）または Linux 環境で以下のコマンドを実行してコンパイル環境をインストールしてください。

**必要なパッケージをインストール**

まず、ビルド自動化ツールとして必須の `make` をインストールする必要があります。

```sh
sudo apt install make
```

インストールを進めるために、プロンプトが表示されたらパスワードを入力してください。

**Arm GNU Toolchain をダウンロード**

ARM プロジェクトをコンパイルするために Arm GNU Toolchain が必要です。ホームディレクトリに移動し、`wget` を使用してパッケージをダウンロードします。適切なインストール先を選択し、どこにインストールされるか確認してください。ここでは、プロジェクトフォルダの上位ディレクトリにインストールします。

```sh
cd /mnt/c/Users/mengd/Desktop/
wget https://developer.arm.com/-/media/Files/downloads/gnu/13.2.rel1/binrel/arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
```

このコマンドは指定されたバージョンの ARM ツールチェーンを取得します。

**ツールチェーンアーカイブを解凍**

ツールチェーンをダウンロードした後、解凍する必要があります。ターミナルで以下を実行してください：

```sh
tar -xvf arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
```

これにより、必要なツールチェーンファイルを含むディレクトリが作成されます。

**PATH を更新**

最後に、どのディレクトリからでもツールチェーンを使用できるようにするため、解凍されたファイルの bin ディレクトリをシステムの PATH に追加します。このコマンドを実行してください：

```sh
export PATH="/mnt/c/Users/mengd/Desktop/arm-gnu-toolchain-13.2.Rel1-x86_64-arm-none-eabi/bin/:$PATH"
```

この変更を永続化するには、エクスポートコマンドを `~/.bashrc`、`~/.zshrc`、または使用しているシェルの設定ファイルに追加します。

```sh
echo 'export PATH="$HOME/arm-gnu-toolchain-13.2.Rel1-x86_64-arm-none-eabi/bin/:$PATH"' >> ~/.bashrc
```

その後、プロファイルを再読み込みするか、ターミナルを閉じて再度開いて変更を適用します：

```sh
source ~/.bashrc
```

**確認**

すべてが正しく設定されていることを確認するには、以下を入力してください：

```sh
echo $PATH | tr ':' '\n' | grep gnu
arm-none-eabi-gcc --version
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/7.png" style={{width:1000, height:'auto'}}/></div>

これにより、ARM GCC コンパイラのバージョンが表示され、システムのどこからでも正しくインストールされていることが確認できます。

これで、ARM 開発のための環境が整いました。

:::note
`apt install` を使用して ARM コンパイラをインストールしないでください。このバージョンは古すぎて、このプロジェクトをコンパイルできない可能性があります。使用しているバージョンがスクリーンショットのバージョン 13.2 と同じであることを確認してください。
:::

## Himax SDKを使用した録音例の実行

### ステップ6. 録音プロジェクトのコンパイルとアップロード

ここまでで基本的な環境設定が完了しましたので、プロジェクトをコンパイルしてアップロードできます。プロジェクトフォルダの名前は **EPII_CM55M_APP_S** です。

以下のコマンドを wsl または Linux 環境で実行してプロジェクトをコンパイルします。

```sh
cd Seeed_Grove_Vision_AI_V2_SD-Mic/EPII_CM55M_APP_S
make clean
```

次に、**EPII_CM55M_APP_S** フォルダ内の **makefile** ファイルを開き、コードの [47行目](https://github.com/limengdu/Seeed_Grove_Vision_AI_V2_SD-Mic/blob/3de76e628b74bdb075ea27d6fd98b89d6c2f80bb/EPII_CM55M_APP_S/makefile#L47) にある **GNU_TOOLPATH** のパスを変更してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/8.png" style={{width:1000, height:'auto'}}/></div>

このパスには、[ステップ5](#step-5-install-the-make-compilation-environment) で解凍した Arm GNU Toolchain の `bin` フォルダへの絶対パスを入力する必要があります。

その後、ファイルを保存してください。以下のコマンドを実行してプロジェクトをコンパイルします。

```sh
make
```

コンパイルが正常に完了すると、以下のようなコンパイル結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/1.png" style={{width:1000, height:'auto'}}/></div>

次に、`.elf` ファイルを `.img` ファイルに変換して Grove Vision AI V2 にフラッシュする必要があります。`output.sh` スクリプトを実行するだけです。

```sh
./output.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/2.png" style={{width:1000, height:'auto'}}/></div>

生成されたファームウェアをデバイスにフラッシュするには、`flasher.py` スクリプトを実行します。

:::note
Windowsコンピュータを使用している場合は、新しいターミナルを作成し、以下のコマンドを git bash 環境で実行してください。
:::

```sh
pip install xmodem --user
cd ..
python flasher.py we2_image_gen_local/output_case1_sec_wlcsp/output.img COM3
```

コマンド内の `COM3` はデバイスのポート番号を示しており、Grove Vision AI V2 の実際のデバイスポート番号に応じて変更してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-himax/3.png" style={{width:800, height:'auto'}}/></div>

### ステップ7. 録音と保存

次に、Pythonの録音プログラムを使用して録音コマンドを実行します。

```
pip install playsound --user
python getdate.py
```

このコードは約4秒間の音声を録音し、`Seeed_Grove_Vision_AI_V2_SD-Mic` フォルダ内の `record.wav` という名前のフォルダに保存します。

## Himax SDKコード解析

Grove Vision AI V2 上で Himax の SDK を使用してハードウェアを開発しやすくするために、このセクションでは SDK 内のマイクと SD コードに焦点を当てて説明します。このプロジェクトのメインプログラムコードのパスは以下の通りです：

```
EPII_CM55M_APP_S\app\scenario_app\grove_vision_ai\grove_vision_ai.c
```

提供されたコードは、埋め込みシステムでオーディオデータをキャプチャするためにパルス密度変調（PDM）インターフェースを設定および使用し、データをダイレクトメモリアクセス（DMA）を介して転送します。また、いくつかの外部ライブラリやデバイスドライバを組み込み、ファイルシステム操作や GPIO 制御を含みます。

### ヘッダーとマクロ定義のインクルード

```c
#include <stdio.h>
#include <assert.h>
#include <stdbool.h>
#include <stdint.h>
#include <string.h>
#include <stdlib.h>
```
このセクションでは、入出力、アサーション、ブール型データ、整数型、文字列操作、標準ライブラリ機能のための標準Cライブラリヘッダーをインクルードしています。

```c
#ifdef TRUSTZONE_SEC
// ...
#endif
```
この条件付きコンパイルブロックには、`TRUSTZONE_SEC` マクロが定義されている場合にのみコンパイルされる TrustZone セキュリティ関連の設定コードが含まれています。このセクションには通常、メモリ保護やセキュアコールなどのセキュリティ機能が含まれます。

### デバイスおよびボードサポートパッケージヘッダー

```c
#include "WE2_device.h"
#include "WE2_device_addr.h"
#include "board.h"
#include "hx_drv_scu.h"
#include "hx_drv_spi.h"
#include "hx_drv_gpio.h"
#include "WE2_core.h"
#include "WE2_debug.h"
#include "mmc_we2.h"
#include "hx_drv_swreg_aon.h"
#include "hx_drv_pdm_rx.h"
```
これらのヘッダーには、GPIO、SPI、PDM などのドライバや設定など、ハードウェア固有およびボードレベルの定義とインターフェースが含まれています。

### PDMオーディオバッファとコールバックフラグの定義

```c
#define quarter_second_mono_bytes 8000
#define blk_num 20
int16_t audio_buf[blk_num * quarter_second_mono_bytes / 2];
volatile bool rx_cb_flag;
```
オーディオバッファのサイズとブロック数を定義し、整数配列をオーディオバッファとして宣言し、DMA受信が完了したかどうかを示すフラグ変数 `rx_cb_flag` を定義しています。

### PDM DMA受信コールバック関数

```c
void app_pdm_dma_rx_cb()
{
    // ...
}
```
PDM DMA受信が完了した際に呼び出されるコールバック関数を定義しています。この関数には、DMAによって更新されたメモリからデータを読み取るためのキャッシュ無効化が含まれています。

### PDM設定関数

```c
int app_pdm_setting()
{
    // ...
}
```
サンプリングレート、DMAチャネル、クロックソースなどのPDMデバイス設定パラメータを設定し、PDMデバイスにコールバック関数を関連付けます。

### メイン関数

```c
int app_main(void)
{
    // ...
}
```
メイン関数はデバイスの初期化と設定を行います：

- GPIOピンの多重化を設定し、GPIO状態を初期化します。
- PDMを初期化し、DMA転送を設定します。
- ファイル操作のためにFatFSファイルシステムを設定します。
- GPIOを介して入力状態を読み取り、出力状態を制御します。
- DMA受信フラグをチェックしてオーディオデータをキャプチャするループを使用します。
- デバッグコンソールにデータを出力し、完了後にPDMを停止します。

### PDMマイク部分

コードにはマイクの使用が含まれており、これはパルス密度変調（PDM）インターフェースの設定と使用を通じて実現されています。

**PDM設定**

```c
int app_pdm_setting()
{
    // PDM設定
    // ...
}
```
この関数 `app_pdm_setting` は、PDMデバイス設定パラメータを設定します。これらのパラメータ（サンプリングレート、DMAチャネル、クロックソースなど）は、マイクからデータをキャプチャするために重要です。

**PDM 初期化と DMA 転送設定**

```c
if (hx_drv_pdm_init(&pdm_dev_info) != PDM_NO_ERROR)
    return -1;

hx_drv_pdm_dma_lli_transfer((void *)audio_buf, blk_num, quarter_second_mono_bytes, 0);
```
このコードセクションでは、PDM デバイスを初期化し、DMA 転送を設定します。`hx_drv_pdm_dma_lli_transfer` 関数呼び出しは DMA 転送プロセスを開始し、接続されたマイクからオーディオデータをキャプチャして、事前に定義されたバッファ `audio_buf` に保存します。

**PDM DMA 受信コールバック関数**

```c
void app_pdm_dma_rx_cb()
{
    // PDM DMA 受信が完了したときに呼び出されるコールバック関数
    // ...
}
```

`app_pdm_dma_rx_cb` は、PDM インターフェースが DMA を介してオーディオデータの受信を完了した際に呼び出されるコールバック関数です。この関数内では、受信したオーディオデータ（`audio_buf` バッファに保存されている）がさらなる処理のために出力されます。

このコードから、プログラムは主にマイクの設定と使用を通じてオーディオデータをキャプチャすることに関与していることがわかります。

### microSD 部分

コードには、FatFS ファイルシステムライブラリを使用して microSD カードに関連する操作が含まれています。

```c
FATFS fs;
TCHAR drv[3] = {_T('0'), _T(':'), _T('0')};
FRESULT res = f_mount(&fs, drv, 1);
bool mount = false;
if (res != FR_OK)
{
    mount = false;
    xprintf("Mount Failed: %d\n", res);
}
else
{
    mount = true;
    xprintf("Mount Success\n");
}
```

このセクションでは、microSD カード上にあるファイルシステムをマウントしようとします。これは、カード上で読み取りおよび書き込み操作を実行するために必要です。

```c
FIL file;
res = f_open(&file, _T("/test.txt"), FA_CREATE_ALWAYS | FA_WRITE | FA_READ);
// ...
```

このコード部分では、microSD カード上のマウントされたファイルシステムに「test.txt」という名前のファイルを開こうとします（存在しない場合は作成します）。

```c
res = f_write(&file, buffer, strlen(buffer), NULL);
// ...
```

ここでは、以前に開いたファイルにデータを書き込もうとしています。この操作により、データが microSD カードに保存されます。

```c
res = f_read(&file, buffer, 512, NULL);
// ...
```

このセクションでは、「test.txt」ファイルからデータを読み取り、バッファに保存します。この操作により、microSD カードからデータを取得します。

要約すると、このコードには microSD カードをマウントし、ファイルを作成または開き、データを書き込み、データを読み取る機能が含まれており、このアプリケーションで microSD カードがストレージとして使用されていることを示しています。

:::tip
`grove_vision_ai.c` コードには、PDM マイクとメモリカードの使用に関するより完全な設定がすでに含まれています。ただし、SDK ではマイクの出力がシリアルポート経由で行われるため、オーディオファイルを保存するには、`getdata.py` を使用してシリアルポートを読み取り、それを転記する必要があります。一方、microSD カードはストレージタスクに別の Python プログラムを必要としません。
:::

## リソース

- **[GITHUB]** [Grove Vision AI V2 用 Himax リポジトリ](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>