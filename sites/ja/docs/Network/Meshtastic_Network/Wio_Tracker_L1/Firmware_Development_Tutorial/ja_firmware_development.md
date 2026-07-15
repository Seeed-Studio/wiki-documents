---
description: Meshtastic ファームウェアのソースコード開発環境を構築し、Wio Tracker L1 ターゲットをビルドし、簡単な UI 変更を行い、ファームウェアを書き込むための実践チュートリアルです。
title: Meshtastic ソースコード開発チュートリアル
keywords:
  - Meshtastic
  - Source Code
  - PlatformIO
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/ja/meshtastic_source_code_practical_tutorial/
createdAt: '2026-03-19'
updatedAt: '2026-04-03'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Meshtastic ファームウェア ソースコード実践チュートリアル

このチュートリアルでは、Windows と macOS 上での基本的な Meshtastic ファームウェアのワークフローを扱います。リポジトリのクローン、`seeed_wio_tracker_L1` のビルド、簡単な UI 変更、そして結果の書き込みまでを行います。

すでに Git、Python、PlatformIO がインストールされている場合は、ハンズオンのセクションまでスキップしてかまいません。

:::tip
このドキュメントでは、Windows と macOS の両方向けにコマンドを示します。スクリーンショットは主に Windows ですが、ワークフローは macOS でも同じです。
:::

## 事前準備

次のツールを準備してください：

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. Git をインストールする

<Tabs>
<TabItem value="windows" label="Windows">

公式の Git for Windows ダウンロードページを開きます：

[Git for Windows](https://git-scm.com/install/windows)

ページを開くと、通常は自動的にインストーラのダウンロードが始まります。ダウンロードが完了したら、インストーラをダブルクリックしてセットアップウィザードに従います。

インストール中で最も重要なステップは **PATH 環境変数の調整** です。次を選択してください：

**Git from the command line and also from 3rd-party software**

それ以外のオプションは、通常はデフォルトのままで問題ありません。そのまま `Next` をクリックして進めてください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

インストールが完了するまで待ちます。

インストール後、**現在開いている PowerShell と VS Code のターミナルウィンドウをすべて閉じてから** 新しく PowerShell を開き、次を実行します：

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

Git のバージョン番号が表示されれば、Git は正しくインストールされています。

**それでも `git` コマンドが使えない場合**

まず、PowerShell で次のコマンドを実行して、Git のデフォルトのインストールパスを確認できます：

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

そのうえで、手動で Git をシステム環境変数に追加します。

**GUI での修正手順**

1. `Win` キーを押す
2. 「Edit the system environment variables」を検索する
3. 開いて **Environment Variables** をクリックする
4. **System variables** の中から `Path` を探す
5. **Edit** をクリックする
6. **New** をクリックして、次の 2 つのパスを追加する：

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. 最後まで **OK** をクリックして保存する

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

保存後、次の操作も行う必要があります：

- すべての PowerShell ウィンドウを **すべて** 閉じる
- PowerShell を再度開く

そのあと、次を実行します：

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

バージョン番号が表示されれば、インストールは完了です。

</TabItem>

<TabItem value="macos" label="macOS">

macOS では、Git をインストールする方法はいくつかありますが、通常は Homebrew を使うのが最も簡単です：

1. まず Command Line Tools をインストールします：

```bash
xcode-select --install
```

2. Homebrew がまだインストールされていない場合は、先にインストールします：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Git をインストールします：

```bash
brew install git
```

4. インストールされたバージョンを確認します：

```bash
git --version
```

すでにターミナルで有効な Git のバージョンが返ってくる場合は、改めてインストールする必要はありません。

</TabItem>
</Tabs>

**Git のユーザー情報を設定する**

次に、Git のユーザー情報を設定します。サンプルの値を、自分の名前とメールアドレスに置き換えてください：

```plain
git config --global user.name "your name"
git config --global user.email "your mail@gmail.com"
```

そのあと、次を実行します：

```plain
git config --global --list
```

設定が反映されていることを確認します。

### 2. Python 3 をインストールする

**コマンドラインから Python をインストールする**

<Tabs>
<TabItem value="windows" label="Windows">

ターミナルで次のコマンドを実行します：

```plain
winget search --id Python.Python.3.13 --source winget
winget install -e --id Python.Python.3.13 --source winget
```

最初のコマンドで Python が見つかる場合は、通常 2 つ目のコマンドでそのままインストールできます。

インストール後、ターミナルを閉じて開き直し、次を実行します：

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

バージョン番号が表示されれば、Python と pip の準備は完了です。

</TabItem>

<TabItem value="macos" label="macOS">

macOS には、すでに Python 環境が含まれていることがよくあります。新しいバージョンをインストールする前に、`python3` と `pip3` がすでに利用可能かどうかを確認してください：

```bash
python3 --version
pip3 --version
```

利用できない場合、またはより新しいバージョンを使いたい場合は、Homebrew で Python をインストールします：

```bash
brew install python
```

インストール後、ターミナルを再度開き、次を実行します：

```bash
python3 --version
pip3 --version
```

もし `python` と `pip` を使いたい場合は、自分でシェルのエイリアスを設定することもできます。ただし macOS では、`python3` と `pip3` を使う方が一般的に信頼性が高いです。

</TabItem>
</Tabs>

### 3. PlatformIO をインストールする

PlatformIO はインストール時に依存関係を自動でダウンロードするため、このステップには時間がかかる場合があります。エラーが発生した場合は、1 つずつ内容を確認してください。

VS Code の拡張機能マーケットプレイスで `PlatformIO` を検索し、インストールします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

インストール後、左側のツールバーにアリの形をしたアイコンが表示されるはずです。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. Meshtastic ファームウェアリポジトリをクローンする

Meshtastic 公式のファームウェアリポジトリは `meshtastic/firmware` です。

<Tabs>
<TabItem value="windows" label="Windows">

作業ディレクトリのターミナルで、次のコマンドを実行します：

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

プロジェクトディレクトリが別のドライブやパスにある場合は、先にその場所へ移動してください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

出力が上のスクリーンショットと同様であれば、リポジトリは正常にクローンされています。

</TabItem>

<TabItem value="macos" label="macOS">

作業ディレクトリのターミナルで、次のコマンドを実行します：

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

もし `~/workplace` がまだ存在しない場合は、先に作成してください：

```bash
mkdir -p ~/workplace
```

コマンドが問題なく完了すれば、リポジトリは正常にクローンされています。

</TabItem>
</Tabs>

### 5. ハンズオン

この段階では、まだコードの編集を急がないでください。まず、プロジェクトが一通りのビルドプロセスを正常に通過できることを確認します。

次の 3 つの作業から始めることをおすすめします：

1. `firmware` を開く
2. `platformio.ini` を確認する
3. 対象ボードのビルド環境を見つける

1 つ重要なポイントとして、ルートの `platformio.ini` だけに注目しないでください。実際には、次のような追加設定ファイルを `include` しています：

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

つまり、実際のボードレベルの環境定義は、通常 `variants/.../platformio.ini` 配下にあります。

ターゲットボードを特定する際は、特に次の 2 つのディレクトリに注意してください：

- `variants/`
- `boards/`

ここでは、例として **Wio Tracker L1 Pro** をターゲットにします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

これにより、Meshtastic において **Wio Tracker L1 / L1 Pro のビルドターゲットが** `seeed_wio_tracker_L1` であることがわかります。

**ステップ 1: プロジェクトが正常にビルドできることを確認する**

ここではビルドに PlatformIO Core の CLI を使用します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

最初のビルドでは、次のコマンドを実行することをおすすめします：

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

画面が上のスクリーンショットと同様であれば、ビルドプロセスは正しく開始されています。初回ビルドは時間がかかることが多いので、気長に待ってください。

**ビルドが失敗した場合**

ビルドに失敗したときは、まず PlatformIO に現在の環境に必要な依存関係をインストールさせることができます：

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

この方法には、次のような利点があります：

- 依存関係だけをインストールし、すぐにフルビルドを開始しない。
- どのパッケージが問題を引き起こしているかを確認しやすい。
- エラーメッセージがより絞られ、原因の切り分けがしやすい。

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

この時点でビルドが通れば、ファームウェアの出力は正常に生成されています。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**ステップ 2：コードを変更する**

**実践 1：UI 表示を変更する**

まずボードレベルの設定から表示の実装をたどっていきます。最初に次を確認できます：

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

これらの設定ファイルから、L1 は `HAS_SCREEN` と `USE_SSD1306` を定義していることが分かります。つまり、スクリーンなしの構成でも E-Ink ソリューションでもなく、標準的な OLED ディスプレイパイプラインを使用しているということです。

さらに表示ロジックを追っていくと、関連コードのほとんどは次の場所にあります：

- `src/graphics/`
- `src/graphics/draw/`

ここでは簡単な例として、ホーム画面のヘッダーにカスタムラベルを追加してみます。

次の変更を加えて `src/graphics/SharedUIDisplay.cpp` を更新します：

```cpp
// Track the end of the battery text
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;
int batteryTextEndX = batteryX - 1;

// Update the boundary while drawing the battery percentage
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

// In the branch that displays time
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;

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

// In the branch that does not display time
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;

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

この更新は次の 3 つを行います：

- バッテリーテキストの右端を記録します。
- バッテリー領域と右側のアイコンとの間にスペースを確保します。
- タイトルが空のときにのみ、`SEEED_WIO_TRACKER_L1` 上で `made by AE` を描画します。

完全なコードはこちらで確認できます：

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**ステップ 3：独自のファームウェアをビルドする**

変更が終わったら、プロジェクトルートに戻り、同じターゲットを再度ビルドします：

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

更新されたことを確認すべきファイルは次のとおりです：

```plain
firmware-seeed_wio_tracker_L1-*.uf2
```

### 6. ファームウェアを書き込む

ビルドが完了したら、公式の書き込みページを開きます：

[Meshtastic Flasher](https://flasher.meshtastic.org/)

ほとんどの場合、まず消去操作を行う必要があります。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

次に、先ほどビルドしたファームウェアファイルを選択し、デバイスに書き込みます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

これで、Meshtastic ソースコードの実践演習は完了です。環境構築、リポジトリのクローン、ボード設定の調査、ファームウェアのコンパイル、表示ロジックの変更、最終的な書き込み検証まで、一連のワークフローを一通り体験しました。

さらに発展させたい場合は、次の方向を引き続き探求できます：

1. ホーム画面上の要素をさらに変更する
2. ボタン、GPS、Bluetooth およびその他のモジュールの動作を調整する
3. 自作ボード用に独立した `variant` を追加する
4. `src/`、`variants/`、`boards/` 間の関係を引き続き追跡する

## よくある問題

**`git` コマンドが使用できない**

- Windows では、まず Git が `PATH` に追加されているか確認します。
- macOS では、最初に `git --version` を実行します。Command Line Tools のインストールを求められたら、指示に従ってください。

**`python3` または `pip3` が使用できない**

- Windows では、Python が `PATH` に追加されていることを確認するか、ターミナルを再起動してから再度試してください。
- macOS では、まず `python3` / `pip3` が既に存在するか確認し、必要な場合のみ Homebrew で Python をインストールします。

**`pio` コマンドが使用できない**

- まず `pio --version` を実行します。
- それでもコマンドが使用できない場合は、VS Code とターミナルを再起動してから再度試してください。
- 必要に応じて、PlatformIO 拡張機能を再インストールし、PlatformIO Core が正しく初期化されていることを確認します。

**`git submodule update --init` の後でもコードがまだ不完全に見える**

- まず、自分が `firmware` リポジトリのルートディレクトリにいることを確認します。
- ネットワーク接続が不安定な場合は、次を使って再試行してください：

```bash
git submodule update --init --recursive
```

**最初のビルドに時間がかかりすぎる**

- 最初のビルドで多くの依存関係をダウンロードするのは正常です。
- 長時間停止しているように見える場合は、先にパッケージを個別にインストールしてみてください：

```bash
pio pkg install -e seeed_wio_tracker_L1
```

その後、もう一度ビルドを実行します。
