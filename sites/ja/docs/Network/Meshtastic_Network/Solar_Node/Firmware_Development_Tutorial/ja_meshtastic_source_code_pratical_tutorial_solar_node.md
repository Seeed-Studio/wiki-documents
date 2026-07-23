---
description: Meshtastic ファームウェアのソースコード環境をセットアップし、ソーラーノードをビルドして、ファームウェアを書き込むための実践的なチュートリアルです。
title: Meshtastic ソースコード開発チュートリアル
keywords:
  - Meshtastic
  - ソースコード
  - PlatformIO
  - ソーラーノード
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial_solar_node
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/ja/meshtastic_source_code_practical_tutorial_solar_node/
createdAt: '2026-03-19'
updatedAt: '2026-05-14'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Meshtastic ファームウェア ソースコード実践チュートリアル

このチュートリアルは、Meshtastic ファームウェアのソースコードをこれから触り始めるユーザーを対象としています。Windows と macOS の両方で共通するワークフローを含んでいます。目的はシンプルで、公式リポジトリをクローンし、ビルドを一度成功させ、UI を 1 か所だけ簡単に変更し、その変更済みファームウェアをデバイスに書き込んで動作を確認することです。

すでに Git、Python、または PlatformIO に慣れている場合は、該当するセクションを飛ばして、ハンズオンのパートに直接進んでも構いません。

:::tip
このガイドには、Windows と macOS の両方で共通して使えるコマンドを掲載しています。スクリーンショットの多くは Windows 環境で撮影していますが、macOS での全体的なワークフローもほぼ同じです。
:::

## 事前準備

作業を始める前に、次のツールを用意してください。

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. Git をインストールする

<Tabs>
<TabItem value="windows" label="Windows">

公式の Git for Windows ダウンロードページを開きます。

[Git for Windows](https://git-scm.com/install/windows)

ページを開くと、通常はインストーラーのダウンロードが自動的に始まります。ダウンロードが完了したら、インストーラーをダブルクリックして、セットアップウィザードに従って進めます。

インストール中で最も重要なステップは、**PATH 環境変数の設定**です。次のオプションを選択してください。

**Git from the command line and also from 3rd-party software**

それ以外のオプションは、基本的にデフォルトのままで問題ありません。そのまま `Next` をクリックして進めてください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

インストールが完了するまで待ちます。

インストール後、**現在開いている PowerShell と VS Code のターミナルウィンドウをすべて閉じてから**、新しく PowerShell を開き、次を実行します。

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

Git のバージョン番号が表示されれば、Git は正常にインストールされています。

**`git` コマンドがまだ使えない場合**

まず PowerShell で次のコマンドを実行し、Git のデフォルトのインストールパスを確認できます。

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

その後、Git をシステム環境変数に手動で追加します。

**GUI での修正手順**

1. `Win` キーを押す
2. 「Edit the system environment variables」と検索する
3. 開いて **Environment Variables** をクリックする
4. **System variables** の中から `Path` を探す
5. **Edit** をクリックする
6. **New** をクリックし、次の 2 つのパスを追加する。

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. 最後まで **OK** をクリックして保存する

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

保存後、次の操作も必要です。

- **すべての** PowerShell ウィンドウを閉じる
- PowerShell を再度開く

そのうえで、次を実行します。

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

バージョン番号が表示されれば、インストールは完了です。

</TabItem>

<TabItem value="macos" label="macOS">

macOS では、Git をインストールする方法はいくつかありますが、Homebrew を使うのが一般的に最も簡単です。

1. まず Command Line Tools をインストールします。

```bash
xcode-select --install
```

2. Homebrew がまだインストールされていない場合は、先にインストールします。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Git をインストールします。

```bash
brew install git
```

4. インストールされたバージョンを確認します。

```bash
git --version
```

ターミナルですでに有効な Git バージョンが返ってくる場合は、改めてインストールする必要はありません。

</TabItem>
</Tabs>

**Git のユーザー情報を設定する**

次に、Git のユーザー情報を設定します。サンプルの値を自分の名前とメールアドレスに置き換えてください。

```plain
git config --global user.name "your name"
git config --global user.email "your mail@gmail.com"
```

その後、次を実行します。

```plain
git config --global --list
```

設定が反映されていることを確認します。

### 2. Python 3 をインストールする

**コマンドラインから Python をインストールする**

<Tabs>
<TabItem value="windows" label="Windows">

ターミナルで次のコマンドを実行します。

```plain
winget search --id Python.Python.3.13 --source winget
winget install -e --id Python.Python.3.13 --source winget
```

最初のコマンドで Python が見つかれば、通常は 2 つ目のコマンドでそのままインストールされます。

インストール後、ターミナルを一度閉じて開き直し、次を実行します。

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

バージョン番号が表示されれば、Python と pip を使用する準備が整っています。

</TabItem>

<TabItem value="macos" label="macOS">

macOS には、すでに Python 環境が含まれていることがよくあります。新しいバージョンをインストールする前に、`python3` と `pip3` がすでに利用可能かどうかを確認してください。

```bash
python3 --version
pip3 --version
```

利用できない場合、またはより新しいバージョンが必要な場合は、Homebrew で Python をインストールします。

```bash
brew install python
```

インストール後、ターミナルを開き直して次を実行します。

```bash
python3 --version
pip3 --version
```

`python` や `pip` を使いたい場合は、自分でシェルエイリアスを設定しても構いません。ただし macOS では、`python3` と `pip3` を使う方が一般的に信頼性が高い選択です。

</TabItem>
</Tabs>

### 3. PlatformIO をインストールする

このステップは、PlatformIO が多くの依存関係を自動的にダウンロードし、インストールに時間がかかるため、初心者には少しとっつきにくく感じられるかもしれません。インストール中にエラーが出た場合は、基本的には焦らず、1 つずつ問題を切り分けて対処するのがよいです。エラーメッセージの確認には、AI ツールを活用すると時間の節約にもなります。

VS Code の拡張機能マーケットプレイスで `PlatformIO` を検索し、インストールします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

インストール後、左側のツールバーにアリの形をしたアイコンが表示されるはずです。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. Meshtastic ファームウェアリポジトリをクローンする

Meshtastic 公式のファームウェアリポジトリは `meshtastic/firmware` です。

<Tabs>
<TabItem value="windows" label="Windows">

作業用ディレクトリでターミナルを開き、次のコマンドを実行します。

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

プロジェクトディレクトリが別のドライブや別のパスにある場合は、先にその場所へ移動してください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

出力が上のスクリーンショットと同じような内容であれば、リポジトリは正常にクローンされています。

</TabItem>

<TabItem value="macos" label="macOS">

作業用ディレクトリでターミナルを開き、次のコマンドを実行します。

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

もし `~/workplace` がまだ存在しない場合は、先に作成します。

```bash
mkdir -p ~/workplace
```

コマンドが問題なく完了すれば、リポジトリは正常にクローンされています。

</TabItem>
</Tabs>

リポジトリの準備ができたら、次の 2 つの実践プロジェクトのいずれかに進むことができます。プロジェクト A は `Wio Tracker L1` の UI カスタマイズに焦点を当てています。プロジェクト B は Meshtastic 上での `XIAO ESP32S3` による環境テレメトリに焦点を当てています。

## プロジェクト A: Wio Tracker L1 の UI カスタマイズ

### ハンズオン実践

この段階では、すぐにコード編集に取りかからないでください。まずはプロジェクトが最後までビルドプロセスを正常に完走できることを確認します。

最初に取り組むタスクとして、次の 3 つをお勧めします。

1. `firmware` を開く
2. `platformio.ini` を確認する
3. 対象ボード用のビルド環境を探す

重要なポイントが 1 つあります。ルートの `platformio.ini` だけに注目しないでください。実際には、次のような追加の設定ファイルを `include` しています。

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

つまり、実際のボードレベルの環境定義は、通常 `variants/.../platformio.ini` 以下に配置されています。

対象ボードを特定する際は、次の 2 つのディレクトリに特に注意してください。

- `variants/`
- `boards/`

ここでは、例として **Wio Tracker L1 Pro** をターゲットにします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

このことから、Meshtastic において **Wio Tracker L1 / L1 Pro のビルドターゲットは** `seeed_wio_tracker_L1` であることがわかります。

**最小限の変更内容のまとめ**

ひとまず最小限のエンドツーエンドの練習だけを完了したい場合は、次のポイントに絞って進めてください。

1. Git、Python 3、VS Code、PlatformIO をインストールする。
2. `meshtastic/firmware` リポジトリをクローンし、サブモジュールを初期化する。
3. `pio run -e seeed_wio_tracker_L1` を使って、元のプロジェクトが正常にビルドできることを確認する。
4. `src/graphics/SharedUIDisplay.cpp` 内の表示ロジックを変更する。
5. ファームウェアを再ビルドし、生成された UF2 ファイルをデバイスに書き込んで動作を確認する。

**ステップ 1: プロジェクトが正常にビルドできることを確認する**

ここでは、ビルドに PlatformIO Core の CLI を使用します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

最初のビルドでは、次のコマンドを実行することをお勧めします。

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image13.png)

もしインターフェースが上のスクリーンショットと同様に見えていれば、ビルドプロセスは正しく開始されています。最初のビルドは時間がかかることが多いので、しばらく待ちましょう。

**ビルドが失敗した場合**

ビルドが失敗したときは、まず PlatformIO に現在の環境で必要な依存関係をインストールさせることができます：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio pkg install -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio pkg install -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

この方法にはいくつかの利点があります：

- 依存関係のみをインストールし、すぐにフルビルドを開始しません。
- どのパッケージが問題を引き起こしているかを確認しやすくなります。
- エラーメッセージがより絞り込まれ、トラブルシュートしやすくなります。

依存関係のインストールが完了したら、次を実行します：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio run -e seeed_wio_tracker_L1 -v
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio run -e seeed_wio_tracker_L1 -v
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image14.png)

依存関係のインストールが完了したら、通常のビルドをもう一度実行します：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image15.png)

この時点でビルドが通れば、ファームウェア出力は正常に生成されています。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**ステップ 2: コードを変更する**

**実践 1: UI 表示を変更する**

まず、ボードレベルの設定から表示の実装をたどっていきます。最初に次を確認できます：

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

これらの設定ファイルから、L1 が `HAS_SCREEN` と `USE_SSD1306` を定義していることが分かります。つまり、スクリーンなし構成でも E-Ink ソリューションでもなく、標準的な OLED ディスプレイパイプラインを使用しているということです。

さらに表示ロジックを追っていくと、関連コードのほとんどは次の場所にあります：

- `src/graphics/`
- `src/graphics/draw/`

具体的にどのように変更するかは、ソースコードを読む力に依存します。ここではとても簡単な例として、ホーム画面の UI を変更するところから始めます。

**変更 1: バッテリーテキストの右端を記録する**

```cpp
Before / After

// Before
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;

// After
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;
int batteryTextEndX = batteryX - 1;
```

`src/graphics/SharedUIDisplay.cpp:157`

ここでは `batteryTextEndX` を追加しており、バッテリー残量テキストの終端位置を記録します。これにより、後でバッテリー情報の後ろにカスタムテキストを追加しやすくなります。

**変更 2: バッテリー残量描画時に右端境界を計算する**

```cpp
// Before
if (chargePercent != 101) {
    char chargeStr[4];
    snprintf(chargeStr, sizeof(chargeStr), "%d", chargePercent);
    int chargeNumWidth = display->getStringWidth(chargeStr);
    display->drawString(batteryX, textY, chargeStr);
    display->drawString(batteryX + chargeNumWidth - 1, textY, "%");
    if (isBold) {
        display->drawString(batteryX + 1, textY, chargeStr);
        display->drawString(batteryX + chargeNumWidth, textY, "%");
    }
}

// After
if (chargePercent != 101) {
    char chargeStr[4];
    snprintf(chargeStr, sizeof(chargeStr), "%d", chargePercent);
    int chargeNumWidth = display->getStringWidth(chargeStr);
    int percentWidth = display->getStringWidth("%");
    display->drawString(batteryX, textY, chargeStr);
    display->drawString(batteryX + chargeNumWidth - 1, textY, "%");
    if (isBold) {
        display->drawString(batteryX + 1, textY, chargeStr);
        display->drawString(batteryX + chargeNumWidth, textY, "%");
    }
    batteryTextEndX = batteryX + chargeNumWidth + percentWidth - 1 + (isBold ? 1 : 0);
} else {
    batteryTextEndX = batteryX - 1;
}
```

`src/graphics/SharedUIDisplay.cpp:204`

このコードはバッテリー残量描画ロジックの内部にあります。バッテリーレベルを通常どおり表示するだけでなく、テキスト領域の右端境界も計算し、その後にカスタムラベルを配置できるようにしています。

**変更 3: 右側のアイコン領域用に境界を確保する**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

この部分は、右側にある時刻、メール、ミュートなどのアイコンが使用する領域を処理します。ここでは `headerLabelRight` を追加し、中央テキストの最大右端境界を制限して、右側のコンテンツと重ならないようにしています。

**変更 4: タイトルが空のときにカスタムラベルを描画する**

```cpp
// Newly added core logic
#if defined(SEEED_WIO_TRACKER_L1) && !defined(SEEED_WIO_TRACKER_L1_EINK)
if (titleStr && titleStr[0] == '\0') {
    static const char *yclLabel = "made by AE";
    int labelWidth = display->getStringWidth(yclLabel);
    int labelLeft = batteryTextEndX + 4;
    if (labelLeft + labelWidth <= headerLabelRight) {
        int labelX = labelLeft + ((headerLabelRight - labelLeft) - labelWidth) / 2;
        display->drawString(labelX, textY, yclLabel);
        if (isBold)
            display->drawString(labelX + 1, textY, yclLabel);
    }
}
#endif
```

`src/graphics/SharedUIDisplay.cpp:350`

これは変更の中核となるロジックです。`SEEED_WIO_TRACKER_L1` にのみ適用され、E-Ink バリアントは明示的に除外しています。バッテリー情報と時刻表示の間の空白領域に、`made by AE` というテキストを中央揃えで表示します。

**変更 5: 時刻が表示されない分岐を処理する**

```cpp
// Add the same boundary control for the no-time branch
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;
```

`src/graphics/SharedUIDisplay.cpp:377`

ここは時刻値が表示されない場合に使われる分岐です。同じ境界制御をここにも追加する必要があります。

```cpp
#if defined(SEEED_WIO_TRACKER_L1) && !defined(SEEED_WIO_TRACKER_L1_EINK)
        if (titleStr && titleStr[0] == '\0') {
            static const char *yclLabel = "made by AE";
            int labelWidth = display->getStringWidth(yclLabel);
            int labelLeft = batteryTextEndX + 4;
            if (labelLeft + labelWidth <= headerLabelRight) {
                int labelX = labelLeft + ((headerLabelRight - labelLeft) - labelWidth) / 2;
                display->drawString(labelX, textY, yclLabel);
                if (isBold)
                    display->drawString(labelX + 1, textY, yclLabel);
            }
        }
#endif
```

`src/graphics/SharedUIDisplay.cpp:426`

これは、時刻なし分岐で `made by AE` を描画する実装です。

完全なコードはこちらで確認できます：

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**ステップ 3: 自分のファームウェアをビルドする**

変更が完了したら、プロジェクトルートに戻り、同じターゲットを再度ビルドします：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

表示ロジックは変更しましたが、ビルドターゲットは同じままです：

```plain
seeed_wio_tracker_L1
```

ビルドが成功すると、出力は通常次の場所にあります：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
D:\workplace\firmware\.pio\build\seeed_wio_tracker_L1\
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
~/workplace/firmware/.pio/build/seeed_wio_tracker_L1/
```

</TabItem>
</Tabs>

更新されていることを確認すべきファイルは次のとおりです：

```plain
firmware-seeed_wio_tracker_L1-*.uf2
```

### ファームウェアを書き込む

ビルドが完了したら、公式の書き込みページを開きます：

[Meshtastic Flasher](https://flasher.meshtastic.org/)

ほとんどの場合、最初に消去操作を実行する必要があります。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

次に、先ほどビルドしたファームウェアファイルを選択し、デバイスに書き込みます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

これで、Meshtastic ソースコードの実践演習は完了です。環境構築、リポジトリのクローン、ボード設定の調査、ファームウェアのコンパイル、表示ロジックの変更、最終的な書き込み検証まで、一連のワークフローを一通り体験しました。

さらに先に進みたい場合は、次のような方向性を引き続き探求できます：

1. ホーム画面上のより多くの要素を変更する
2. ボタン、GPS、Bluetooth などのモジュールの動作を調整する
3. 自分のボード用に独立した `variant` を追加する
4. `src/`、`variants/`、`boards/` 間の関係を引き続き追跡する

より機能志向のソースレベルの例が欲しい場合は、以下のプロジェクト B に進んでください。これは `XIAO ESP32S3 + Wio-SX1262 + SHT40` を用いた専用の環境テレメトリノードを構築します。上記の Wio Tracker L1 の UI 変更と比べて、このパートではデフォルト設定、テレメトリのタイミング、2 ノード間の実際のメッシュ検証に重点を置いています。

## プロジェクト B: XIAO ESP32S3 環境テレメトリノード

### プロジェクトの目的

この発展的な例では、同じメッシュ内で 2 台の Meshtastic デバイスを使用します。

**リモートセンサーノード**

- `SHT40` から温度と湿度を読み取る
- Meshtastic の環境テレメトリを使用する
- テレメトリをメッシュに送信する
- メッシュ送信間隔を `60s` に変更する
- 初回起動時の対話的な地域設定をスキップする
- デフォルトの地域を `US` に設定する

**近くのゲートウェイノード**

- Meshtastic ネットワークに `CLIENT` として参加する
- LoRa 経由でリモートの `TELEMETRY_APP` パケットを受信する
- `environmentMetrics.temperature` を解析する
- `environmentMetrics.relativeHumidity` を解析する

**通信パス**

```plain
XIAO ESP32S3 + Wio-SX1262 + SHT40 -> Meshtastic LoRa -> XIAO ESP32S3 + Wio-SX1262 (or any other device on the same mesh)
```

### ハードウェアの準備

**リモートノードのハードウェア**

- Seeed `XIAO ESP32S3`
- `Wio-SX1262`
- `SHT40`

**ゲートウェイノードのハードウェア**

近くのノードは、同じネットワークに参加している任意の Meshtastic デバイスで構いません。以下の例では、別の `XIAO ESP32S3 + Wio-SX1262` デバイスを使用します。

**SHT40 の配線**

- `VCC -> 3V3`
- `GND -> GND`
- `SDA -> GPIO5`
- `SCL -> GPIO6`

動作確認済みの設定：

- `I2C address = 0x44`
- `GPIO5 / GPIO6` は現在動作している I2C 配線ペアです

次の写真は、リモートノードで実際に使用している配線を示しています：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image1.png)

**このプロジェクトで使用したモジュールと SKU**

- [`Seeeduino XIAO Expansion Board`](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (`SKU: 103030356`)
- [`XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa`](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) (`SKU: 102010611`)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image11.png)

### リモートノード用に Meshtastic ファームウェアを変更する

このプロジェクトの対象環境は次のとおりです：

```plain
seeed-xiao-s3
```

主なファイルは次のとおりです：

- `variants/esp32s3/seeed_xiao_s3/platformio.ini`
- `src/modules/Telemetry/EnvironmentTelemetry.h`
- `src/modules/Telemetry/EnvironmentTelemetry.cpp`

このパートでは、`variants/esp32s3/seeed_xiao_s3/platformio.ini` の `build_flags` セクションのみを更新します。それ以外の上流ファイルの部分は変更しないでください。

```ini
build_flags =
  ${esp32s3_base.build_flags}
  -D SEEED_XIAO_S3
  -D ENVIRONMENTAL_TELEMETRY_MODULE_ENABLE=1 ; enable environmental telemetry by default
  -D USERPREFS_CONFIG_LORA_REGION=meshtastic_Config_LoRaConfig_RegionCode_US ; set the default region to US
  -D USERPREFS_CONFIG_DEVICE_ROLE=meshtastic_Config_DeviceConfig_Role_SENSOR ; set the default role to SENSOR
  -I variants/esp32s3/seeed_xiao_s3
  -DBOARD_HAS_PSRAM
  -DARDUINO_USB_MODE=0
```

`build_flags` の変更は次のような見た目になるはずです：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image4.png)

これら 3 つのフラグは次のことを行います：

- 環境テレメトリをデフォルトで有効にする
- デフォルトの地域を `US` に設定し、初回起動時に地域選択で停止しないようにする
- デフォルトのデバイスロールを `SENSOR` に設定する

テレメトリのタイミング変更は、`platformio.ini` ではなく `EnvironmentTelemetry.h` と `EnvironmentTelemetry.cpp` に実装されています。

すべての変更を行うと、動作は次のようになります：

- 環境テレメトリがデフォルトで有効になる
- デバイスは地域 `US` で起動する
- デバイスはロール `SENSOR` で起動する
- メッシュ環境テレメトリは `60s` ごとに送信される
- `path=phone` と `path=mesh` が別々にログ記録される
- 実際にメッシュ送信が成功した後にのみ、メッシュ送信タイムスタンプが更新される

期待されるメッシュディスパッチログは次のようになります：

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
```

### 近くのゲートウェイノードを設定する

近くの Meshtastic デバイスを、同じメッシュ上の `CLIENT` として使用します。リモートノードがテレメトリ送信を開始したら、ゲートウェイが次を受信できることを確認します：

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

テスト中にゲートウェイが Wi-Fi への接続を試行し続ける場合は、Meshtastic CLI を使って Wi-Fi を無効にします。`<gateway_port>` を実際のシリアルポートに置き換えてください。Windows では `COMx`、macOS では `/dev/cu.usbmodem...` のようになります。

```bash
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

### ビルド、書き込み、検証

**ステップ 1: 変更したファイルをコピーする**

ビルドする前に、変更した 3 つのファイルを Meshtastic `2.7.20` または `2.7.21` のソースツリーにコピーします：

| パッケージ内のファイル | Meshtastic ソースツリー内で置き換えるファイル |
| --- | --- |
| `meshtastic-2.7.20-s3-files/variants/esp32s3/seeed_xiao_s3/platformio.ini` | `<your Meshtastic directory>/variants/esp32s3/seeed_xiao_s3/platformio.ini` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.h` | `<your Meshtastic directory>/src/modules/Telemetry/EnvironmentTelemetry.h` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.cpp` | `<your Meshtastic directory>/src/modules/Telemetry/EnvironmentTelemetry.cpp` |

直接ダウンロードリンク：

- [📎EnvironmentTelemetry.h](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.h)
- [📎EnvironmentTelemetry.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.cpp)

グラフィカルなファイルマネージャーでファイルをコピーする場合、置き換えのプロンプトは次のように表示されるはずです：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image5.png)

**ステップ 2: リモート用ファームウェアをビルドする**

Meshtastic ファームウェアルートから、次を実行します：

```bash
pio run -e seeed-xiao-s3
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image6.png)

**ステップ 3: リモートノードに書き込む**

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio device list
pio run -e seeed-xiao-s3 -t upload --upload-port COMx
```

手動でダウンロードモードに入る必要がある場合：

1. `BOOT` を押し続ける
2. `RESET` をタップする
3. `RESET` を離す
4. `BOOT` を離す

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio device list
pio run -e seeed-xiao-s3 -t upload --upload-port /dev/cu.usbmodemXXXX
```

</TabItem>
</Tabs>

最初に `pio device list` を使用して、正しいシリアルポートを特定します：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image7.png)

書き込みが完了すると、PlatformIO はフラッシュ成功を報告するはずです：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image8.png)

**ステップ 4: シリアルログをモニタする**

PlatformIO のシリアルモニタを使用して、リモートノードと近くのゲートウェイの両方を確認します。

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio device monitor -p COMx -b 115200
pio device monitor -p COMy -b 115200
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio device monitor -p /dev/cu.usbmodemE072A1D89EB81 -b 115200
pio device monitor -p /dev/cu.usbmodem3030F917FF281 -b 115200
```

</TabItem>
</Tabs>

次のようなログを探します：

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
Send: relative_humidity=...
Send: ... temperature=...
```

**ステップ 5: Meshtastic CLI で検証する**

まず CLI をインストールします：

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pip install meshtastic
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pip3 install meshtastic
```

</TabItem>
</Tabs>

インストール後、ターミナルを再度開き、`meshtastic --help` が動作することを確認します。

以下のコマンドでは、`<gateway_port>` を実際のゲートウェイのシリアルポートに置き換えてください：

- Windows の例: `COMx`
- macOS の例: `/dev/cu.usbmodem3030F917FF281`

```bash
meshtastic --port <gateway_port> --listen --debug
meshtastic --port <gateway_port> --nodes --show-fields user.id,user.longName,user.shortName
meshtastic --port <gateway_port> --get bluetooth.enabled --get bluetooth.mode --get bluetooth.fixed_pin --get power.wait_bluetooth_secs --get power.is_power_saving
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

次の点に注目します：

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**ステップ 6: モバイルアプリで確認する**

書き込み後、Meshtastic モバイルアプリでリモートノードに接続し、環境データが表示されていることを確認します。その後、同じメッシュ上の別のデバイスにアプリを接続し、`Nodes` ビューを確認して、センサー値がメッシュ経由で受信されていることを確認します。

リモートセンサーノードでは、アプリ内で環境テレメトリ値を直接確認できるはずです：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image9.png)

近くのノードでは、メッシュ経由で転送された後に、同じ値が `Nodes` ビューに表示されるはずです：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image10.png)

## プロジェクト C: T1000-E の起動音とシャットダウン音のカスタマイズ

### プロジェクトの目的

このコンパクトな例では、ごく小さいものの体感しやすいソースレベルのカスタマイズに焦点を当てます。デフォルトの T1000-E の起動音とシャットダウン音を、よりクリアなカスタムチャイムに置き換えます。

プロジェクト A およびプロジェクト B と比べて、このプロジェクトで変更するソースファイルは 1 つだけで、関数も 2 つだけです。Meshtastic のコードベース全体に影響を与えずに、ボード固有の動作変更を行う方法の良い例です。

### `buzz.cpp` を変更する

このプロジェクトで変更されるファイルは次の 1 つだけです：

- `src/buzz/buzz.cpp`

変更される 2 つの関数は次のとおりです：

- `playStartMelody()`
- `playShutdownMelody()`

両方の箇所で、`#if defined(TRACKER_T1000_E)` ブランチが追加されています。

この構造が重要なのは、カスタマイズを `T1000-E` ターゲットに限定できるためです：

- `TRACKER_T1000_E` はカスタム起動チャイムを使用する
- `TRACKER_T1000_E` は対応するカスタムシャットダウンチャイムを使用する
- その他すべての Meshtastic ボードは、既存の `#else` パス内の元のデフォルトメロディに従う

つまり、この変更は意図的にスコープが狭くなっています。1 つのボードのユーザー体験をカスタマイズしつつ、他のすべてのサポート対象に対しては元の動作を維持します。

ローカルのテスト版では、起動メロディをより電話のような上昇チャイムに変更し、シャットダウンメロディをそれに対応する下降チャイムに変更しています。

変更内容をより明確に記録したい場合は、両方の関数が同じ画面内に収まるように 1 枚だけスクリーンショットを撮れば十分です：

- `playStartMelody()` 内の `#if defined(TRACKER_T1000_E)` ブロック
- `playShutdownMelody()` 内の `#if defined(TRACKER_T1000_E)` ブロック

その 1 枚のスクリーンショットだけで、コード変更とボード固有の適用範囲の両方を説明できるため、他のボードには影響しないことだけを説明するための別画像は不要です。

### ビルドと検証

変更が完了したら、T1000-E ターゲットをビルドします：

```bash
pio run -e tracker-t1000-e
```

テストビルドでは、このターゲットはメロディー変更後も問題なくコンパイルできました。

ビルドが通ったら、T1000-E にファームウェアを書き込み、実機で結果を確認します：

1. デバイスの電源を入れ、新しい起動チャイムが再生されることを確認します。
2. デバイスの電源を切り、対応するシャットダウンチャイムが再生されることを確認します。
3. 可能であれば、新しいサウンドと元のデフォルトメロディーを比較し、違いが分かりやすいようにします。

### 推奨画像

Project C を短く読みやすく保つためには、通常 3 枚の画像で十分です：

1. `buzz.cpp` のスクリーンショットを 1 枚（`playStartMelody()` と `playShutdownMelody()` の両方が同じフレームに収まっているもの）
2. `pio run -e tracker-t1000-e` が成功したことを示すターミナルのスクリーンショットを 1 枚
3. T1000-E の電源オンまたは電源オフテストを示す、実機での検証画像または短い動画を 1 つ

テスト中にブザーが鳴らない場合は、まずデバイスのブザーモードが有効になっているかを確認してください。`playTones()` では、ブザーが無効になっているか通知専用モードに設定されている場合、コードは早期に return します。

## よくある問題

**`git` コマンドが使用できない**

- Windows の場合、まず Git が `PATH` に追加されているか確認します。
- macOS の場合、最初に `git --version` を実行します。システムから Command Line Tools のインストールを求められたら、指示に従ってください。

**`python3` または `pip3` が使用できない**

- Windows の場合、Python が `PATH` に追加されているか確認するか、ターミナルを開き直して再試行してください。
- macOS の場合、まず `python3` / `pip3` がすでに存在するか確認し、必要な場合にのみ Homebrew で Python をインストールしてください。

**`pio` コマンドが使用できない**

- まず `pio --version` を実行します。
- それでもコマンドが使用できない場合は、VS Code とターミナルを再起動してから再試行してください。
- 必要であれば、PlatformIO 拡張機能を再インストールし、PlatformIO Core が正しく初期化されていることを確認してください。

**`git submodule update --init` の後もコードが未完成に見える**

- まず、自分が `firmware` リポジトリのルートディレクトリにいることを確認します。
- ネットワーク接続が不安定な場合は、次のコマンドで再試行してください：

```bash
git submodule update --init --recursive
```

**最初のビルドに時間がかかりすぎる**

- 最初のビルドで多くの依存関係をダウンロードするのは正常な動作です。
- あまりにも長時間止まっているように見える場合は、先にパッケージを個別にインストールしてみてください：

```bash
pio pkg install -e seeed_wio_tracker_L1
```

その後、もう一度ビルドを実行します。

**Web クライアントに環境テレメトリがすべて表示されない**

- Meshtastic Web Client は現在、リモート環境テレメトリ用の完全な UI を提供していません。
- `Messages` / `Broadcast` ページはチャットトラフィック用であり、専用のテレメトリページではありません。
- そこに値が表示されない場合でも、メッシュリンクが失敗していることを自動的に意味するわけではありません。

**スマートフォンでデータが見えても、メッシュ転送が証明されるわけではない**

- 直接接続されたスマートフォンで値が更新されて見えることは、ローカルなスマートフォンとデバイス間のリンクが動作していることだけを示します。
- それだけでは、環境テレメトリがすでにメッシュ内に転送されていることの証明にはなりません。
- 実際にメッシュ転送が行われているか確認するには、ログ内で次の項目を探してください：
- `Environment telemetry dispatch path=mesh ...`
- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**初回セットアップ時に `seeed-xiao-s3` のビルドが失敗する**

- 最初の依存関係インストールには時間がかかることがあります。これは正常です。
- ターゲット環境が失敗する場合は、先にパッケージをインストールしてから、詳細出力付きビルドを実行します：

```bash
pio pkg install -e seeed-xiao-s3
pio run -e seeed-xiao-s3 -v
```

- 依存関係の準備ができたら、通常のビルドに戻します：

```bash
pio run -e seeed-xiao-s3
```
