---
description: Meshtastic ファームウェアソースコード環境のセットアップ、ソーラーノードのコンパイル、ファームウェアの書き込みに関する実践的なチュートリアル。
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
updatedAt: '2026-03-19'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Meshtastic ファームウェアソースコード実践チュートリアル

このチュートリアルは、Meshtastic ファームウェアソースコードを始めたばかりのユーザー向けです。Windows と macOS の両方の一般的なワークフローを含みます。目標はシンプルです：公式リポジトリをクローンし、ビルドを成功させ、1つの簡単な UI 変更を行い、修正したファームウェアをデバイスに書き込んで検証します。

Git、Python、または PlatformIO に既に慣れている場合は、対応するセクションをスキップして、実践部分に直接進むことができます。

:::tip
このガイドには、Windows と macOS の両方の一般的なコマンドが含まれています。ほとんどのスクリーンショットは Windows 環境から撮影されていますが、macOS での全体的なワークフローは非常に似ています。
:::

## 前提条件

始める前に、以下のツールを準備してください：

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. Git のインストール

<Tabs>
<TabItem value="windows" label="Windows">

公式 Git for Windows ダウンロードページを開きます：

[Git for Windows](https://git-scm.com/install/windows)

インストーラーは通常、ページを開くと自動的にダウンロードが開始されます。ダウンロードが完了したら、インストーラーをダブルクリックし、セットアップウィザードに従います。

インストール中、最も重要なステップは **PATH 環境変数の調整** です。以下を選択してください：

**Git from the command line and also from 3rd-party software**

他のオプションについては、通常デフォルト値で問題ありません。`Next` をクリックし続けてください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

インストールが完了するまで待ちます。

インストール後、**現在開いているすべての PowerShell と VS Code ターミナルウィンドウを閉じ**、新しい PowerShell ウィンドウを開き、以下を実行します：

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

Git のバージョン番号が表示されれば、Git は正常にインストールされています。

**`git` コマンドがまだ利用できない場合**

まず、PowerShell で以下のコマンドを実行して、デフォルトの Git インストールパスを確認できます：

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

その後、手動で Git をシステム環境変数に追加します。

**GUI での修正手順**

1. `Win` キーを押す
2. "システム環境変数の編集" を検索
3. 開いて **環境変数** をクリック
4. **システム変数** の下にある `Path` を見つける
5. **編集** をクリック
6. **新規** をクリックし、以下の2つのパスを追加：

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. **OK** をクリックして保存

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

保存後、以下の操作が必要です：

- **すべての** PowerShell ウィンドウを閉じる
- 再度 PowerShell を開く

その後、実行：

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

バージョン番号が表示されれば、インストールは完了です。

</TabItem>

<TabItem value="macos" label="macOS">

macOS では、Git は複数の方法でインストールできますが、通常 Homebrew を使用するのが最も簡単なオプションです：

1. まず Command Line Tools をインストール：

```bash
xcode-select --install
```

2. Homebrew がまだインストールされていない場合は、まずインストール：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Git をインストール：

```bash
brew install git
```

4. インストールされたバージョンを確認：

```bash
git --version
```

ターミナルが既に有効な Git バージョンを返す場合は、再度インストールする必要はありません。

</TabItem>
</Tabs>

**Git の身元情報を設定**

次に、Git ユーザー情報を設定します。例の値を自分の名前とメールアドレスに置き換えてください：

```plain
git config --global user.name "your name"
git config --global user.email "your mail@gmail.com"
```

その後、実行：

```plain
git config --global --list
```

設定が有効になったことを確認します。

### 2. Python 3 のインストール

**コマンドラインから Python をインストール**

<Tabs>
<TabItem value="windows" label="Windows">

ターミナルで以下のコマンドを実行します：

```plain
winget search --id Python.Python.3.13 --source winget
winget install -e --id Python.Python.3.13 --source winget
```

最初のコマンドで Python が見つかれば、2番目のコマンドで通常直接インストールされるはずです。

インストール後、ターミナルを閉じて再度開き、実行：

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

バージョン番号が表示されれば、Python と pip は使用可能です。

</TabItem>

<TabItem value="macos" label="macOS">

macOS には既に Python 環境が含まれていることがよくあります。新しいバージョンをインストールする前に、`python3` と `pip3` が既に利用可能か確認してください：

```bash
python3 --version
pip3 --version
```

利用できない場合、またはより新しいバージョンが必要な場合は、Homebrew で Python をインストールします：

```bash
brew install python
```

インストール後、ターミナルを再起動し、実行：

```bash
python3 --version
pip3 --version
```

`python` と `pip` を使用したい場合は、シェルエイリアスを自分で設定できます。ただし、macOS では、`python3` と `pip3` を使用する方が通常より信頼性の高い選択です。

</TabItem>
</Tabs>

### 3. PlatformIO のインストール

このステップは初心者には少し難しく感じるかもしれません。なぜなら、PlatformIO は多くの依存関係を自動的にダウンロードし、インストールに時間がかかるためです。インストール中にエラーが表示された場合は、通常は辛抱強く待ち、問題を1つずつ解決するのが最善です。AI ツールを使用してエラーメッセージを調べることも時間の節約になります。

VS Code 拡張機能マーケットプレイスで `PlatformIO` を検索し、インストールします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

インストール後、通常は左側のツールバーにアリの形をしたアイコンが表示されます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. Meshtastic ファームウェアリポジトリのクローン

公式 Meshtastic ファームウェアリポジトリは `meshtastic/firmware` です。

<Tabs>
<TabItem value="windows" label="Windows">

作業ディレクトリのターミナルで以下のコマンドを実行します：

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

プロジェクトディレクトリが別のドライブや別のパスにある場合は、まずその場所に移動してください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

出力が上記のスクリーンショットと似ていれば、リポジトリは正常にクローンされています。

</TabItem>

<TabItem value="macos" label="macOS">

作業ディレクトリのターミナルで以下のコマンドを実行します：

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

`~/workplace` がまだ存在しない場合は、まず作成します：

```bash
mkdir -p ~/workplace
```

コマンドが正常に完了すれば、リポジトリは正常にクローンされています。

</TabItem>
</Tabs>

リポジトリの準備ができたら、以下の2つの実践プロジェクトのいずれかを続けることができます。プロジェクト A は `Wio Tracker L1` の UI カスタマイズに焦点を当てています。プロジェクト B は Meshtastic を介した `XIAO ESP32S3` の環境テレメトリに焦点を当てています。

## プロジェクト A: Wio Tracker L1 UI カスタマイズ

### 実践演習

この段階では、コードの編集を急がないでください。まず、プロジェクトが完全なビルドプロセスを正常に実行できることを確認します。

以下の3つのタスクから始めることをお勧めします：

1. `firmware` を開く
2. `platformio.ini` を確認する
3. ターゲットボードのビルド環境を見つける

重要な詳細：ルートの `platformio.ini` だけに集中しないでください。実際には追加の設定ファイルが含まれており、例えば：

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

つまり、実際のボードレベルの環境定義は通常 `variants/.../platformio.ini` の下にあります。

ターゲットボードを特定する際は、特に以下の2つのディレクトリに注意してください：

- `variants/`
- `boards/`

ここでは例として **Wio Tracker L1 Pro** をターゲットに使用します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

これは、Meshtastic では **Wio Tracker L1 / L1 Pro のビルドターゲットが** `seeed_wio_tracker_L1` であることを示しています。

**最小限の変更の概要**

最小限のエンドツーエンドの実践演習を1回だけ完了したい場合は、以下の主要なステップに集中してください：

1. Git、Python 3、VS Code、および PlatformIO をインストール。
2. `meshtastic/firmware` リポジトリをクローンし、サブモジュールを初期化。
3. `pio run -e seeed_wio_tracker_L1` を使用して、元のプロジェクトが正常にビルドされることを確認。
4. `src/graphics/SharedUIDisplay.cpp` の表示ロジックを変更。
5. ファームウェアを再ビルドし、生成された UF2 ファイルをデバイスに書き込んで検証。

**ステップ 1: プロジェクトが正常にビルドされることを確認**

ここでは、ビルドに PlatformIO Core CLI を使用します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

最初のビルドでは、以下のコマンドを実行することをお勧めします：

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

インターフェースが上記のスクリーンショットと似ている場合、ビルドプロセスは正常に開始されています。最初のビルドはしばしば時間がかかるため、辛抱強くお待ちください。

**ビルドが失敗した場合**

ビルドが失敗した場合、まず PlatformIO に現在の環境に必要な依存関係をインストールするよう指示できます：

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

- 依存関係のみをインストールし、すぐに完全なビルドを開始しません。
- どのパッケージが問題を引き起こしているかを確認しやすくなります。
- エラーメッセージは通常、より焦点が絞られており、トラブルシューティングが容易です。

依存関係がインストールされた後、実行します：

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

依存関係のインストールが完了したら、通常のビルドを再度実行します：

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

この時点でビルドが成功すれば、ファームウェア出力は正常に生成されています。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**ステップ 2: コードを修正する**

**実践 1: UI 表示を修正する**

まず、ボードレベルの設定から表示実装をトレースします。最初に確認できます：

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

これらの設定ファイルから、L1 は `HAS_SCREEN` と `USE_SSD1306` を定義していることがわかります。つまり、スクリーンレス構成や E-Ink ソリューションではなく、標準の OLED ディスプレイパイプラインを使用していることを意味します。

表示ロジックをさらにトレースすると、関連するコードのほとんどは以下の場所にあります：

- `src/graphics/`
- `src/graphics/draw/`

具体的な修正方法は、ソースコードを読む能力に依存します。ここでは非常にシンプルな例から始めます：ホームスクリーンの UI を修正します。

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

これにより、バッテリー残量パーセントテキストの終了位置を記録する `batteryTextEndX` が追加されます。これにより、後でバッテリー情報の後にカスタムテキストを追加しやすくなります。

**変更 2: バッテリー残量を描画しながら右境界を計算する**

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

このコードはバッテリー残量描画ロジック内にあります。バッテリーレベルを通常通り表示するだけでなく、テキスト領域の右境界も計算し、バッテリー情報の後にカスタムラベルを配置できるようにします。

**変更 3: 右側のアイコン領域の境界を確保する**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

この部分は、右側の時刻、メール、ミュートなどのアイコンが使用する領域を処理します。中央テキストの最大右境界を制限し、右側のコンテンツと重ならないようにするために `headerLabelRight` を追加しました。

**変更 4: タイトルが空の場合にカスタムラベルを描画する**

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

これが修正のコアロジックです。これは `SEEED_WIO_TRACKER_L1` にのみ適用され、E-Ink バリアントを明示的に除外します。バッテリー情報と時刻表示の間の空白スペースにテキスト `made by AE` を中央揃えで配置します。

**変更 5: 時刻が表示されない分岐を処理する**

```cpp
// Add the same boundary control for the no-time branch
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;
```

`src/graphics/SharedUIDisplay.cpp:377`

これは時刻値が表示されない場合に使用される分岐です。ここにも同じ境界制御を追加する必要があります。

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

これは時刻なし分岐で `made by AE` を描画するための実装です。

完全なコードはこちらで確認できます：

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**ステップ 3: 独自のファームウェアをビルドする**

修正が完了したら、プロジェクトのルートに戻り、同じターゲットを再度ビルドします：

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

表示ロジックは変更されましたが、ビルドターゲットは同じままです：

```plain
seeed_wio_tracker_L1
```

ビルドが成功すると、出力は通常以下の場所にあります：

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

更新されたことを確認すべきファイルは：

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

これで、実践的な Meshtastic ソースコード演習は完了です。環境設定、リポジトリのクローン、ボード設定の確認、ファームウェアのコンパイル、表示ロジックの修正、最終的な書き込み検証という完全なワークフローを経験しました。

さらに進みたい場合は、以下の方向性を引き続き探求できます：

1. ホームスクリーンの要素をさらに修正する
2. ボタン、GPS、Bluetooth などのモジュールの動作を調整する
3. 独自のボード用に独立した `variant` を追加する
4. `src/`、`variants/`、`boards/` 間の関係を引き続きトレースする

より機能指向のソースレベル例が必要な場合は、以下のプロジェクト B に進んでください。これは `XIAO ESP32S3 + Wio-SX1262 + SHT40` を使用した専用の環境テレメトリーノードを構築します。上記の Wio Tracker L1 UI 修正と比較して、この部分はデフォルト設定、テレメトリータイミング、および 2 つのノード間の実際のメッシュ検証に焦点を当てています。

## プロジェクト B: XIAO ESP32S3 環境テレメトリーノード

### プロジェクトの目標

この高度な例では、同じメッシュ内で 2 つの Meshtastic デバイスを使用します。

**リモートセンサーノード**

- `SHT40` から温度と湿度を読み取る
- Meshtastic 環境テレメトリーを使用する
- テレメトリーをメッシュに送信する
- メッシュ送信間隔を `60秒` に変更する
- 初回起動時のインタラクティブな地域設定をスキップする
- デフォルトの地域を `US` に設定する

**近隣のゲートウェイノード**

- `CLIENT` として Meshtastic ネットワークに参加する
- LoRa 経由でリモートの `TELEMETRY_APP` パケットを受信する
- `environmentMetrics.temperature` を解析する
- `environmentMetrics.relativeHumidity` を解析する

**通信経路**

```plain
XIAO ESP32S3 + Wio-SX1262 + SHT40 -> Meshtastic LoRa -> XIAO ESP32S3 + Wio-SX1262 (or any other device on the same mesh)
```

### ハードウェアの準備

**リモートノードのハードウェア**

- Seeed `XIAO ESP32S3`
- `Wio-SX1262`
- `SHT40`

**ゲートウェイノードのハードウェア**

近隣ノードは、同じネットワークに参加する任意の Meshtastic デバイスで構いません。以下の例では、別の `XIAO ESP32S3 + Wio-SX1262` デバイスを使用しています。

**SHT40 の配線**

- `VCC -> 3V3`
- `GND -> GND`
- `SDA -> GPIO5`
- `SCL -> GPIO6`

動作確認済みの設定：

- `I2C アドレス = 0x44`
- `GPIO5 / GPIO6` が現在動作している I2C 配線ペアです

以下の写真は、リモートノードで使用した実際の配線を示しています：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image1.png)

**このプロジェクトで使用したモジュールと SKU**

- [`Seeeduino XIAO Expansion Board`](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (`SKU: 103030356`)
- [`XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa`](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) (`SKU: 102010611`)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image11.png)

### リモートノード用の Meshtastic ファームウェアを修正する

このプロジェクトのターゲット環境は：

```plain
seeed-xiao-s3
```

主なファイルは：

- `variants/esp32s3/seeed_xiao_s3/platformio.ini`
- `src/modules/Telemetry/EnvironmentTelemetry.h`
- `src/modules/Telemetry/EnvironmentTelemetry.cpp`

この部分では、`variants/esp32s3/seeed_xiao_s3/platformio.ini` の `build_flags` セクションのみを更新します。アップストリームファイルの残りの部分は変更しないでください。

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

`build_flags` の変更は、以下のようになります：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image4.png)

これら3つのフラグは、以下のことを行います：

- 環境テレメトリをデフォルトで有効にする
- デフォルトの地域を `US` に設定し、初回起動時に地域選択で停止しないようにする
- デフォルトのデバイスロールを `SENSOR` に設定する

テレメトリのタイミング変更は、`platformio.ini` ではなく、`EnvironmentTelemetry.h` と `EnvironmentTelemetry.cpp` で実装されています。

完全な修正後、動作は以下のようになります：

- 環境テレメトリがデフォルトで有効になる
- デバイスは地域 `US` で起動する
- デバイスはロール `SENSOR` で起動する
- メッシュ環境テレメトリは `60秒` ごとに送信される
- `path=phone` と `path=mesh` は別々にログに記録される
- メッシュ送信タイムスタンプは、実際のメッシュ送信が成功した後にのみ更新される

期待されるメッシュディスパッチログは以下のようになります：

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
```

### 近隣のゲートウェイノードを設定する

近隣の Meshtastic デバイスを、同じメッシュ上の `CLIENT` として使用します。リモートノードがテレメトリの送信を開始した後、ゲートウェイが以下を受信できることを確認します：

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

テスト中にゲートウェイが Wi-Fi への接続を試み続ける場合は、Meshtastic CLI を使用して Wi-Fi を無効にしてください。`<gateway_port>` を実際のシリアルポート（Windows では `COMx`、macOS では `/dev/cu.usbmodem...` など）に置き換えてください。

```bash
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

### ビルド、書き込み、検証

**ステップ 1: 修正したファイルをコピーする**

ビルド前に、修正した3つのファイルを Meshtastic `2.7.20` または `2.7.21` のソースツリーにコピーします：

| パッケージ内のファイル | Meshtastic ソースツリー内のこのファイルを置き換える |
| --- | --- |
| `meshtastic-2.7.20-s3-files/variants/esp32s3/seeed_xiao_s3/platformio.ini` | `<Meshtastic ディレクトリ>/variants/esp32s3/seeed_xiao_s3/platformio.ini` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.h` | `<Meshtastic ディレクトリ>/src/modules/Telemetry/EnvironmentTelemetry.h` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.cpp` | `<Meshtastic ディレクトリ>/src/modules/Telemetry/EnvironmentTelemetry.cpp` |

直接ダウンロードリンク：

- [📎EnvironmentTelemetry.h](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.h)
- [📎EnvironmentTelemetry.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.cpp)

グラフィカルなファイルマネージャーでファイルをコピーする場合、置換プロンプトは以下のようになります：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image5.png)

**ステップ 2: リモートファームウェアをビルドする**

Meshtastic ファームウェアのルートから、以下を実行します：

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

まず `pio device list` を使用して、正しいシリアルポートを特定します：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image7.png)

書き込みが完了すると、PlatformIO は正常なフラッシュを報告するはずです：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image8.png)

**ステップ 4: シリアルログを監視する**

PlatformIO のシリアルモニターを使用して、リモートノードと近隣のゲートウェイの両方を確認します。

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

以下のようなログを探します：

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

インストール後、ターミナルを再起動し、`meshtastic --help` が動作することを確認します。

以下のコマンドでは、`<gateway_port>` を実際のゲートウェイシリアルポートに置き換えてください：

- Windows の例： `COMx`
- macOS の例： `/dev/cu.usbmodem3030F917FF281`

```bash
meshtastic --port <gateway_port> --listen --debug
meshtastic --port <gateway_port> --nodes --show-fields user.id,user.longName,user.shortName
meshtastic --port <gateway_port> --get bluetooth.enabled --get bluetooth.mode --get bluetooth.fixed_pin --get power.wait_bluetooth_secs --get power.is_power_saving
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

以下に注目します：

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**ステップ 6: モバイルアプリで確認する**

書き込み後、Meshtastic モバイルアプリでリモートノードに接続し、環境データが表示されることを確認します。次に、アプリを同じメッシュ上の別のデバイスに接続し、`Nodes` ビューをチェックして、センサー値がメッシュ経由で受信されていることを確認します。

リモートセンサーノードでは、アプリ内で環境テレメトリ値を直接確認できるはずです：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image9.png)

近隣ノードでは、同じ測定値がメッシュ経由で転送された後、`Nodes` ビューに表示されるはずです：

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image10.png)

## よくある問題

**`git` コマンドが利用できない**

- Windows では、まず Git が `PATH` に追加されているか確認してください。
- macOS では、まず `git --version` を実行してください。システムが Command Line Tools のインストールを求めた場合は、プロンプトに従ってください。

**`python3` または `pip3` が利用できない**

- Windows では、Python が `PATH` に追加されていることを確認するか、ターミナルを再起動して再度試してください。
- macOS では、まず `python3` / `pip3` が既に存在するか確認し、必要に応じてのみ Homebrew で Python をインストールしてください。

**`pio` コマンドが利用できない**

- まず `pio --version` を実行してください。
- コマンドがまだ利用できない場合は、VS Code とターミナルを再起動して、再度試してください。
- 必要に応じて、PlatformIO 拡張機能を再インストールし、PlatformIO Core が正しく初期化されていることを確認してください。

**`git submodule update --init` の後もコードが不完全に見える**

- まず、`firmware` リポジトリのルートディレクトリにいることを確認してください。
- ネットワーク接続が不安定な場合は、以下で再度試してください：

```bash
git submodule update --init --recursive
```

**初回ビルドに時間がかかりすぎる**

- 初回ビルドでは多くの依存関係をダウンロードするため、時間がかかるのは正常です。
- 長時間固まっているように見える場合は、まずパッケージを個別にインストールしてみてください：

```bash
pio pkg install -e seeed_wio_tracker_L1
```

その後、再度ビルドを実行します。

**Web クライアントに完全な環境テレメトリが表示されない**

- Meshtastic Web Client は現在、リモート環境テレメトリの完全な UI を提供していません。
- `Messages` / `Broadcast` ページはチャットトラフィック用であり、専用のテレメトリページではありません。
- そこに値が表示されない場合、自動的にメッシュリンクが失敗したことを意味するわけではありません。

**電話でデータが見えることは、メッシュ転送を証明しない**

- 直接接続された電話で更新された値が見えることは、ローカルの電話とデバイス間のリンクが機能していることのみを証明します。
- 環境テレメトリがすでにメッシュに転送されていることを自動的に証明するものではありません。
- 実際のメッシュ転送を確認するには、ログで以下の項目を確認してください：
- `Environment telemetry dispatch path=mesh ...`
- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**`seeed-xiao-s3` ビルドが初回セットアップ中に失敗する**

- 最初の依存関係のインストールには長い時間がかかることがあります。これは正常です。
- ターゲット環境のセットアップに失敗した場合は、まずパッケージをインストールし、詳細ビルドを実行してください：

```bash
pio pkg install -e seeed-xiao-s3
pio run -e seeed-xiao-s3 -v
```

- 依存関係の準備ができたら、通常のビルドに戻ります：

```bash
pio run -e seeed-xiao-s3
```
