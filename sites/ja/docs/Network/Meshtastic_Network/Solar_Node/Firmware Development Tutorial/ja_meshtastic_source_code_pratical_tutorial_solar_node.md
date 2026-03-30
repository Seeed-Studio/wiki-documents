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
updatedAt: '2026-03-19'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Meshtastic ファームウェア ソースコード実践チュートリアル

このチュートリアルは、Meshtastic ファームウェアのソースコードにこれから触れるユーザーを対象としています。Windows と macOS の両方で共通するワークフローを含んでいます。目的はシンプルで、公式リポジトリをクローンし、ビルドを一度成功させ、UI を 1 か所だけ簡単に変更し、その変更済みファームウェアをデバイスに書き込んで動作を確認することです。

すでに Git、Python、または PlatformIO に慣れている場合は、該当するセクションを飛ばして、ハンズオンのパートに直接進んでも構いません。

:::tip
このガイドには、Windows と macOS の両方で共通して使えるコマンドを掲載しています。スクリーンショットの多くは Windows 環境で撮影していますが、macOS での全体的なワークフローもほぼ同じです。
:::

## 事前準備

始める前に、次のツールを用意してください。

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. Git をインストールする

<Tabs>
<TabItem value="windows" label="Windows">

公式の Git for Windows ダウンロードページを開きます。

[Git for Windows](https://git-scm.com/install/windows)

ページを開くと、通常はインストーラのダウンロードが自動的に始まります。ダウンロードが完了したら、インストーラをダブルクリックしてセットアップウィザードに従います。

インストール中で最も重要なステップは **PATH 環境変数の調整** です。次を選択します。

**Git from the command line and also from 3rd-party software**

その他のオプションは、通常はデフォルトのままで問題ありません。そのまま `Next` をクリックし続けてください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

インストールが完了するまで待ちます。

インストール後、**現在開いている PowerShell と VS Code のターミナルウィンドウをすべて閉じてから**、新しい PowerShell ウィンドウを開き、次を実行します。

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

1. `Win` を押します
2. 「Edit the system environment variables」を検索します
3. 開いて **Environment Variables** をクリックします
4. **System variables** の下にある `Path` を探します
5. **Edit** をクリックします
6. **New** をクリックし、次の 2 つのパスを追加します。

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. 最後まで **OK** をクリックして保存します

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

macOS では、Git をインストールする方法が複数ありますが、Homebrew を使うのが一般的に最も簡単です。

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

最初のコマンドで Python が見つかる場合、通常は 2 つ目のコマンドでそのままインストールされます。

インストール後、ターミナルを閉じて再度開き、次を実行します。

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

もし `python` や `pip` を使いたい場合は、自分でシェルエイリアスを設定できます。ただし macOS では、`python3` と `pip3` を使う方が一般的に信頼性が高い選択です。

</TabItem>
</Tabs>

### 3. PlatformIO をインストールする

このステップは、PlatformIO が多くの依存関係を自動的にダウンロードし、インストールに時間がかかるため、初心者には少しとっつきにくく感じられるかもしれません。インストール中にエラーが出た場合は、慌てずに 1 つずつ問題を切り分けて対処するのがよいでしょう。エラーメッセージの確認には、AI ツールを活用すると時間の節約にもなります。

VS Code の拡張機能マーケットプレイスで `PlatformIO` を検索し、インストールします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

インストール後、左側のツールバーにアリの形をしたアイコンが表示されるはずです。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. Meshtastic ファームウェアリポジトリをクローンする

Meshtastic 公式のファームウェアリポジトリは `meshtastic/firmware` です。

<Tabs>
<TabItem value="windows" label="Windows">

作業ディレクトリのターミナルで次のコマンドを実行します。

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

プロジェクトディレクトリが別のドライブや別のパスにある場合は、先にその場所へ移動してください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

出力が上のスクリーンショットと同様であれば、リポジトリは正常にクローンされています。

</TabItem>

<TabItem value="macos" label="macOS">

作業ディレクトリのターミナルで次のコマンドを実行します。

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

まだ `~/workplace` が存在しない場合は、先に作成します。

```bash
mkdir -p ~/workplace
```

コマンドが問題なく完了すれば、リポジトリは正常にクローンされています。

</TabItem>
</Tabs>

### 5. ハンズオン実践

この段階では、まだコードの編集を急がないでください。まずはプロジェクトが最後までビルドプロセスを正常に完走できることを確認します。

最初は次の 3 つのタスクから始めることをおすすめします。

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

つまり、実際のボードレベルの環境定義は、通常 `variants/.../platformio.ini` の下にあります。

対象ボードを特定する際は、次の 2 つのディレクトリに特に注意してください。

- `variants/`
- `boards/`

ここでは、例として **Wio Tracker L1 Pro** をターゲットにします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

この表示から、Meshtastic において **Wio Tracker L1 / L1 Pro のビルドターゲットは** `seeed_wio_tracker_L1` であることがわかります。

**最小限の変更のまとめ**

最小限のエンドツーエンドの練習だけを完了したい場合は、次のキーとなるステップに集中してください。

1. Git、Python 3、VS Code、PlatformIO をインストールする。
2. `meshtastic/firmware` リポジトリをクローンし、サブモジュールを初期化する。
3. `pio run -e seeed_wio_tracker_L1` を使って、元のプロジェクトが正常にビルドできることを確認する。
4. `src/graphics/SharedUIDisplay.cpp` 内の表示ロジックを変更する。
5. ファームウェアを再ビルドし、生成された UF2 ファイルをデバイスに書き込んで動作を確認する。

**ステップ 1: プロジェクトが正常にビルドできることを確認する**

ここでは、ビルドに PlatformIO Core CLI を使用します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

最初のビルドでは、次のコマンドを実行することをおすすめします。

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

画面が上のスクリーンショットと同様であれば、ビルドプロセスは正しく開始されています。最初のビルドは時間がかかることが多いので、しばらく待ちましょう。

**ビルドが失敗した場合**

ビルドが失敗したときは、まず PlatformIO に現在の環境で必要な依存関係をインストールさせることができます。

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

- 依存関係のみをインストールし、すぐにフルビルドを開始しません。
- どのパッケージが問題を引き起こしているかを確認しやすくなります。
- エラーメッセージが通常より絞り込まれ、トラブルシューティングしやすくなります。

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

まず、ボードレベルの設定から表示の実装をトレースしていきます。最初に次を確認できます：

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

これらの設定ファイルから、L1 が `HAS_SCREEN` と `USE_SSD1306` を定義していることが分かります。つまり、スクリーンなし構成でも E-Ink ソリューションでもなく、標準的な OLED ディスプレイパイプラインを使用しているということです。

さらに表示ロジックを追っていくと、関連コードのほとんどは次の場所にあります：

- `src/graphics/`
- `src/graphics/draw/`

具体的にどのように変更するかは、ソースコードを読む力に依存します。ここでは、ホーム画面の UI を変更するという、とてもシンプルな例から始めます。

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

ここでは、バッテリー残量テキストの終端位置を記録する `batteryTextEndX` を追加しています。これにより、後でバッテリー情報の後ろにカスタムテキストを追加しやすくなります。

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

このコードは、バッテリー残量を描画するロジックの中にあります。バッテリーレベルを通常どおり表示するだけでなく、テキスト領域の右端境界も計算し、その後にカスタムラベルを配置できるようにしています。

**変更 3: 右側のアイコン領域用に境界を確保する**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

この部分は、右側の時刻、メール、ミュートなどのアイコンが使用する領域を処理します。中央テキストの最大右端境界を制限し、右側のコンテンツと重ならないようにするために `headerLabelRight` を追加しました。

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

これは変更の中核となるロジックです。`SEEED_WIO_TRACKER_L1` にのみ適用され、E-Ink バリアントは明示的に除外しています。バッテリー情報と時刻表示の間の空白に、`made by AE` というテキストを中央揃えで表示します。

**変更 5: 時刻が表示されない分岐を処理する**

```cpp
// Add the same boundary control for the no-time branch
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;
```

`src/graphics/SharedUIDisplay.cpp:377`

これは時刻値が表示されない場合に使われる分岐です。ここにも同じ境界制御を追加する必要があります。

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

更新されたことを確認すべきファイルは次のとおりです：

```plain
firmware-seeed_wio_tracker_L1-*.uf2
```

### 6. ファームウェアを書き込む

ビルドが完了したら、公式の書き込みページを開きます：

[Meshtastic Flasher](https://flasher.meshtastic.org/)

ほとんどの場合、最初に消去操作を実行する必要があります。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

その後、先ほどビルドしたファームウェアファイルを選択し、デバイスに書き込みます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

これで、Meshtastic ソースコードの実践演習は完了です。環境構築、リポジトリのクローン、ボード設定の調査、ファームウェアのコンパイル、表示ロジックの変更、最終的な書き込み検証まで、一連のワークフローを一通り体験しました。

さらに先に進みたい場合は、次のような方向性を引き続き探求できます：

1. ホーム画面上のより多くの要素を変更する
2. ボタン、GPS、Bluetooth などのモジュールの動作を調整する
3. 自分のボード用に独立した `variant` を追加する
4. `src/`、`variants/`、`boards/` 間の関係を引き続きトレースする

## よくある問題

**`git` コマンドが使用できない**

- Windows の場合、まず Git が `PATH` に追加されているか確認します。
- macOS の場合、まず `git --version` を実行します。システムから Command Line Tools のインストールを求められたら、指示に従ってください。

**`python3` または `pip3` が使用できない**

- Windows の場合、Python が `PATH` に追加されていることを確認するか、ターミナルを開き直して再試行してください。
- macOS の場合、まず `python3` / `pip3` が既に存在するか確認し、必要な場合にのみ Homebrew で Python をインストールしてください。

**`pio` コマンドが使用できない**

- まず `pio --version` を実行します。
- それでもコマンドが使用できない場合は、VS Code とターミナルを再起動してから再試行してください。
- 必要に応じて、PlatformIO 拡張機能を再インストールし、PlatformIO Core が正しく初期化されていることを確認してください。

**`git submodule update --init` の後もコードが不完全に見える**

- まず、自分が `firmware` リポジトリのルートディレクトリにいることを確認します。
- ネットワーク接続が不安定な場合は、次を使って再試行してください：

```bash
git submodule update --init --recursive
```

**最初のビルドに時間がかかりすぎる**

- 最初のビルドで多くの依存関係がダウンロードされるのは正常です。
- あまりにも長時間止まっているように見える場合は、まずパッケージを個別にインストールしてみてください：

```bash
pio pkg install -e seeed_wio_tracker_L1
```

その後、もう一度ビルドを実行します。
