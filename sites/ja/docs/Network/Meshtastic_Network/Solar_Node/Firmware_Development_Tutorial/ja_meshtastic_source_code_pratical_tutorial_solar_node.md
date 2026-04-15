---
description: Meshtastic ファームウェアのソースコード環境を構築し、ソーラーノードをビルドしてファームウェアを書き込むための実践的なチュートリアルです。
title: Meshtastic ソースコード開発チュートリアル
keywords:
  - Meshtastic
  - Source Code
  - PlatformIO
  - Solar Node
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

このチュートリアルは、Meshtastic ファームウェアのソースコードをこれから触り始めるユーザーを対象としています。Windows と macOS の両方で共通するワークフローを含んでいます。目的はシンプルで、公式リポジトリをクローンし、ビルドを一度成功させ、UI を 1 箇所だけ簡単に変更し、その変更済みファームウェアをデバイスに書き込んで動作を確認することです。

すでに Git、Python、PlatformIO に慣れている場合は、該当セクションを読み飛ばして、ハンズオンのパートから始めても構いません。

:::tip
本ガイドには、Windows と macOS の両方で共通して使えるコマンドを記載しています。スクリーンショットの多くは Windows 環境のものですが、macOS での全体的な流れもほぼ同じです。
:::

## 事前準備

始める前に、以下のツールを用意してください：

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. Git をインストールする

<Tabs>
<TabItem value="windows" label="Windows">

公式の Git for Windows ダウンロードページを開きます：

[Git for Windows](https://git-scm.com/install/windows)

ページを開くと、通常は自動的にインストーラのダウンロードが始まります。ダウンロードが完了したら、インストーラをダブルクリックしてセットアップウィザードに従ってください。

インストール中で最も重要なステップは **PATH 環境変数の調整** です。次のオプションを選択します：

**Git from the command line and also from 3rd-party software**

その他のオプションは、基本的にデフォルトのままで問題ありません。そのまま `Next` を押し続けてください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

インストールが完了するまで待ちます。

インストール後、**現在開いている PowerShell と VS Code のターミナルウィンドウをすべて閉じて**、新しく PowerShell を開き、次を実行します：

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

Git のバージョン番号が表示されれば、Git は正常にインストールされています。

**`git` コマンドがまだ使えない場合**

まず PowerShell で以下のコマンドを実行し、Git のデフォルトインストールパスを確認できます：

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

その後、手動で Git をシステム環境変数に追加します。

**GUI での修正手順**

1. `Win` を押す
2. 「Edit the system environment variables」を検索
3. 開いて **Environment Variables** をクリック
4. **System variables** の中から `Path` を探す
5. **Edit** をクリック
6. **New** をクリックして、次の 2 つのパスを追加します：

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. 最後まで **OK** をクリックして保存します

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

保存後、次の操作がまだ必要です：

- **すべての** PowerShell ウィンドウを閉じる
- PowerShell を再度開く

そのうえで次を実行します：

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

バージョン番号が表示されれば、インストールは完了です。

</TabItem>

<TabItem value="macos" label="macOS">

macOS では、Git をインストールする方法はいくつかありますが、Homebrew を使うのがもっとも簡単な場合が多いです：

1. まず Command Line Tools をインストールします：

```bash
xcode-select --install
```

2. Homebrew がまだ入っていない場合は、先にインストールします：

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

ターミナルがすでに有効な Git バージョンを返す場合は、改めてインストールする必要はありません。

</TabItem>
</Tabs>

**Git のユーザー情報を設定する**

次に、Git のユーザー情報を設定します。サンプルの値を自分の名前とメールアドレスに置き換えてください：

```plain
git config --global user.name "your name"
git config --global user.email "your mail@gmail.com"
```

その後、次を実行します：

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

最初のコマンドで Python が見つかれば、通常は 2 つ目のコマンドでそのままインストールされます。

インストール後、ターミナルを閉じて再度開き、次を実行します：

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

バージョン番号が表示されれば、Python と pip を使用する準備が整っています。

</TabItem>

<TabItem value="macos" label="macOS">

macOS には、すでに Python 環境が含まれていることがよくあります。新しいバージョンをインストールする前に、`python3` と `pip3` がすでに利用可能かどうかを確認してください：

```bash
python3 --version
pip3 --version
```

もし利用できない場合、または新しいバージョンが必要な場合は、Homebrew で Python をインストールします：

```bash
brew install python
```

インストール後、ターミナルを開き直して次を実行します：

```bash
python3 --version
pip3 --version
```

もし `python` と `pip` を使いたい場合は、自分でシェルエイリアスを設定することもできます。ただし macOS では、`python3` と `pip3` を使う方が一般的に信頼性が高いです。

</TabItem>
</Tabs>

### 3. PlatformIO をインストールする

このステップは、PlatformIO が多くの依存関係を自動でダウンロードし、インストールに時間がかかるため、初心者にはやや分かりづらく感じられるかもしれません。インストール中にエラーが出た場合は、あわてずに 1 つずつ問題を切り分けて対処するのがよいでしょう。エラーメッセージの確認には、AI ツールを活用すると時間の節約にもなります。

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

プロジェクトディレクトリが別のドライブや別パスにある場合は、先にその場所へ移動してください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

出力が上のスクリーンショットと似たような内容であれば、リポジトリは正常にクローンされています。

</TabItem>

<TabItem value="macos" label="macOS">

作業ディレクトリのターミナルで、次のコマンドを実行します：

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

もし `~/workplace` がまだ存在しない場合は、先に作成します：

```bash
mkdir -p ~/workplace
```

コマンドが問題なく完了すれば、リポジトリは正常にクローンされています。

</TabItem>
</Tabs>

リポジトリの準備ができたら、次の 2 つの実践プロジェクトのうち、いずれかを続けて進めることができます。プロジェクト A は `Wio Tracker L1` の UI カスタマイズに焦点を当てます。プロジェクト B は Meshtastic 上での `XIAO ESP32S3` による環境テレメトリ送信に焦点を当てます。

## プロジェクト A: Wio Tracker L1 の UI カスタマイズ

### ハンズオン実践

この段階では、すぐにコード編集に飛びつかないようにしてください。まずはプロジェクトが最後までビルドプロセスを正常に完走できることを確認します。

最初に、次の 3 つのタスクから始めることをおすすめします：

1. `firmware` を開く
2. `platformio.ini` を確認する
3. 対象ボード用のビルド環境を探す

重要なポイントが 1 つあります。ルートの `platformio.ini` だけに注目しないでください。実際には次のような追加の設定ファイルをインクルードしています：

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

つまり、実際のボードレベルの環境定義は、通常 `variants/.../platformio.ini` 以下に配置されています。

対象ボードを特定する際は、次の 2 つのディレクトリに特に注意してください：

- `variants/`
- `boards/`

ここでは、例として **Wio Tracker L1 Pro** をターゲットにします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

これから分かるように、Meshtastic における **Wio Tracker L1 / L1 Pro のビルドターゲットは** `seeed_wio_tracker_L1` です。

**最小限の変更内容のまとめ**

エンドツーエンドの実践を 1 回だけ最小限で完了させたい場合は、次のキーとなるステップに集中してください：

1. Git、Python 3、VS Code、PlatformIO をインストールする。
2. `meshtastic/firmware` リポジトリをクローンし、サブモジュールを初期化する。
3. `pio run -e seeed_wio_tracker_L1` を使って、元のプロジェクトが正常にビルドできることを確認する。
4. `src/graphics/SharedUIDisplay.cpp` 内の表示ロジックを変更する。
5. ファームウェアを再ビルドし、生成された UF2 ファイルをデバイスに書き込んで動作を確認する。

**ステップ 1: プロジェクトが正常にビルドできることを確認する**

ここでは、ビルドに PlatformIO Core CLI を使用します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

初回ビルドでは、次のコマンドを実行することをおすすめします：

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

ビルドが失敗したときは、まず現在の環境に必要な依存関係を PlatformIO にインストールさせることができます：

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

- 依存関係だけをインストールし、すぐにフルビルドを開始しません。
- どのパッケージが問題を引き起こしているかを把握しやすくなります。
- エラーメッセージがより的を絞った内容になり、トラブルシューティングが容易になります。

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

**ステップ 2: コードを変更する**

**実践 1: UI 表示を変更する**

まずボードレベルの設定から表示処理をたどっていきます。最初に次を確認できます：

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

これらの設定ファイルから、L1 では `HAS_SCREEN` と `USE_SSD1306` が定義されていることが分かります。つまり、画面なしの構成でも E-Ink ソリューションでもなく、標準的な OLED ディスプレイパイプラインを使用しているということです。

さらに表示ロジックを追っていくと、関連コードのほとんどは次の場所にあります：

- `src/graphics/`
- `src/graphics/draw/`

実際にどのように変更するかは、ソースコードを読み解く力に依存します。ここでは非常にシンプルな例として、ホーム画面の UI を変更するところから始めます。

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

ここでは `batteryTextEndX` を追加し、バッテリー残量テキストの終端位置を記録しています。これにより、後からバッテリー情報の後ろにカスタムテキストを付け足しやすくなります。

**変更 2: バッテリー残量表示時に右端境界を計算する**

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

このコードはバッテリー残量を描画するロジックの中にあります。通常どおりバッテリーレベルを表示することに加え、テキスト領域の右端境界も計算し、バッテリー情報の後にカスタムラベルを配置できるようにしています。

**変更 3: 右側のアイコン領域のための境界を確保する**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

この部分は、右側にある時刻・メール・ミュートなどのアイコンが使用する領域を処理します。ここでは `headerLabelRight` を追加し、中央テキストの最大右端境界を制限して、右側のコンテンツとの重なりを防いでいます。

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

ここが変更の中核となるロジックです。これは `SEEED_WIO_TRACKER_L1` にのみ適用され、E-Ink バリアントは明示的に除外しています。バッテリー情報と時刻表示の間の空白領域に、テキスト `made by AE` を中央揃えで表示します。

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

これは、時刻なし分岐において `made by AE` を描画するための実装です。

完全なコードはこちらから確認できます：

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**ステップ 3: 自分のファームウェアをビルドする**

変更が完了したら、プロジェクトのルートに戻り、同じターゲットを再度ビルドします：

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

表示ロジックは変更されていますが、ビルドターゲット自体は同じです：

```plain
seeed_wio_tracker_L1
```

ビルドが成功すると、出力は通常次の場所に生成されます：

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

### ファームウェアを書き込む

ビルドが完了したら、公式のフラッシングページを開きます：

[Meshtastic Flasher](https://flasher.meshtastic.org/)

ほとんどの場合、最初に消去（erase）操作を行うべきです。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

その後、先ほどビルドしたファームウェアファイルを選択し、デバイスに書き込みます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

ここまでで Meshtastic ソースコードの実践演習は完了です。環境構築、リポジトリのクローン、ボード設定の調査、ファームウェアのコンパイル、表示ロジックの変更、最終的な書き込み検証まで、一連のワークフローを一通り体験しました。

さらに踏み込みたい場合は、次のような方向で探索を続けることができます：

1. ホーム画面上のより多くの要素を変更する
2. ボタン、GPS、Bluetooth などのモジュールの挙動を調整する
3. 自分のボード用に独立した `variant` を追加する
4. `src/`、`variants/`、`boards/` 間の関係をさらに追跡する

より機能指向のソースレベルの例が欲しい場合は、以下のプロジェクト B に進んでください。これは `XIAO ESP32S3 + Wio-SX1262 + SHT40` を使った専用の環境テレメトリノードを構築します。上記の Wio Tracker L1 UI 変更と比べて、このパートではデフォルト設定、テレメトリのタイミング、2 ノード間での実際のメッシュ検証に焦点を当てます。

## プロジェクト B: XIAO ESP32S3 環境テレメトリノード

### プロジェクトの目的

この発展的な例では、同じメッシュ内で 2 台の Meshtastic デバイスを使用します。

**リモートセンサーノード**

- `SHT40` から温度と湿度を読み取る
- Meshtastic の環境テレメトリを使用する
- メッシュ内にテレメトリを送信する
- メッシュ送信間隔を `60s` に変更する
- 初回起動時の対話的な地域設定をスキップする
- デフォルトの地域を `US` に設定する

**近くのゲートウェイノード**

- Meshtastic ネットワークに `CLIENT` として参加する
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

近くのノードは、同じネットワークに参加している任意の Meshtastic デバイスで構いません。以下の例では、別の `XIAO ESP32S3 + Wio-SX1262` デバイスを使用します。

**SHT40 の配線**

- `VCC -> 3V3`
- `GND -> GND`
- `SDA -> GPIO5`
- `SCL -> GPIO6`

動作を確認した設定は次のとおりです:

- `I2C address = 0x44`
- `GPIO5 / GPIO6` は現在使用している I2C 配線ペアです

次の写真は、リモートノードで実際に使用している配線を示しています:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image1.png)

**本プロジェクトで使用したモジュールと SKU**

- [`Seeeduino XIAO Expansion Board`](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (`SKU: 103030356`)
- [`XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa`](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) (`SKU: 102010611`)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image11.png)

### リモートノード用に Meshtastic ファームウェアを変更する

このプロジェクトのターゲット環境は次のとおりです:

```plain
seeed-xiao-s3
```

主なファイルは次のとおりです:

- `variants/esp32s3/seeed_xiao_s3/platformio.ini`
- `src/modules/Telemetry/EnvironmentTelemetry.h`
- `src/modules/Telemetry/EnvironmentTelemetry.cpp`

このパートでは、`variants/esp32s3/seeed_xiao_s3/platformio.ini` 内の `build_flags` セクションだけを更新します。アップストリームのファイルの残りの部分は変更しないでください。

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

これら 3 つのフラグは次のことを行います:

- 環境テレメトリをデフォルトで有効にする
- デフォルトの地域を `US` に設定し、初回起動時に地域選択で停止しないようにする
- デフォルトのデバイスロールを `SENSOR` に設定する

テレメトリタイミングの変更は、`platformio.ini` ではなく `EnvironmentTelemetry.h` と `EnvironmentTelemetry.cpp` に実装されています。

すべての変更後、動作は次のようになります:

- 環境テレメトリがデフォルトで有効になる
- デバイスは地域 `US` で起動する
- デバイスはロール `SENSOR` で起動する
- メッシュ環境テレメトリは `60s` ごとに送信される
- `path=phone` と `path=mesh` は別々にログされる
- 実際にメッシュ送信が成功した後にのみ、メッシュ送信タイムスタンプが更新される

期待されるメッシュディスパッチログは次のようになります:

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image4.png)

### 近くのゲートウェイノードを設定する

同じメッシュ上で、近くの Meshtastic デバイスを `CLIENT` として使用します。リモートノードがテレメトリ送信を開始したら、ゲートウェイが次のものを受信できることを確認します:

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

テスト中にゲートウェイが Wi-Fi への接続を試行し続ける場合は、Meshtastic CLI で Wi-Fi を無効にします。`<gateway_port>` を実際のシリアルポートに置き換えてください。Windows では `COMx`、macOS では `/dev/cu.usbmodem...` のようになります。

```bash
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image5.png)

### ビルド、書き込み、検証

**ステップ 1: 変更したファイルをコピーする**

ビルドする前に、変更した 3 つのファイルを Meshtastic `2.7.20` または `2.7.21` のソースツリーにコピーします:

| パッケージ内のファイル | Meshtastic ソースツリー内で置き換えるファイル |
| --- | --- |
| `meshtastic-2.7.20-s3-files/variants/esp32s3/seeed_xiao_s3/platformio.ini` | `<your Meshtastic directory>/variants/esp32s3/seeed_xiao_s3/platformio.ini` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.h` | `<your Meshtastic directory>/src/modules/Telemetry/EnvironmentTelemetry.h` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.cpp` | `<your Meshtastic directory>/src/modules/Telemetry/EnvironmentTelemetry.cpp` |

直接ダウンロードリンク:

- [📎EnvironmentTelemetry.h](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.h)
- [📎EnvironmentTelemetry.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.cpp)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image9.png)

**ステップ 2: リモート用ファームウェアをビルドする**

Meshtastic ファームウェアのルートから、次を実行します:

```bash
pio run -e seeed-xiao-s3
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image6.png)

**ステップ 3: リモートノードへ書き込む**

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio device list
pio run -e seeed-xiao-s3 -t upload --upload-port COMx
```

手動でダウンロードモードに入る必要がある場合:

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

**ステップ 4: シリアルログを監視する**

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

次のようなログを探します:

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
Send: relative_humidity=...
Send: ... temperature=...
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image7.png)

**ステップ 5: Meshtastic CLI で検証する**

まず CLI をインストールします:

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

以下のコマンドでは、`<gateway_port>` を実際のゲートウェイのシリアルポートに置き換えてください:

- Windows の例: `COMx`
- macOS の例: `/dev/cu.usbmodem3030F917FF281`

```bash
meshtastic --port <gateway_port> --listen --debug
meshtastic --port <gateway_port> --nodes --show-fields user.id,user.longName,user.shortName
meshtastic --port <gateway_port> --get bluetooth.enabled --get bluetooth.mode --get bluetooth.fixed_pin --get power.wait_bluetooth_secs --get power.is_power_saving
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

次の点に注目します:

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image8.png)

**ステップ 6: モバイルアプリで確認する**

書き込み後、Meshtastic モバイルアプリでリモートノードに接続し、環境データが表示されていることを確認します。その後、同じメッシュ上の別のデバイスにアプリを接続し、`Nodes` ビューを確認して、センサー値がメッシュ経由で受信されていることを確認します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image10.png)

## よくある問題

**`git` コマンドが使用できない**

- Windows の場合、まず Git が `PATH` に追加されているか確認します。
- macOS の場合、まず `git --version` を実行します。システムから Command Line Tools のインストールを求められたら、指示に従ってください。

**`python3` または `pip3` が使用できない**

- Windows の場合、Python が `PATH` に追加されていることを確認するか、ターミナルを再起動して再試行します。
- macOS の場合、まず `python3` / `pip3` がすでに存在するか確認し、必要な場合にのみ Homebrew で Python をインストールします。

**`pio` コマンドが使用できない**

- まず `pio --version` を実行します。
- それでもコマンドが使用できない場合は、VS Code とターミナルを再起動してから、再度試してください。
- 必要に応じて PlatformIO 拡張機能を再インストールし、PlatformIO Core が正しく初期化されていることを確認します。

**`git submodule update --init` の後もコードがまだ不完全に見える**

- まず、自分が `firmware` リポジトリのルートディレクトリにいることを確認します。
- ネットワーク接続が不安定な場合は、次のコマンドで再試行します:

```bash
git submodule update --init --recursive
```

**最初のビルドに時間がかかりすぎる**

- 最初のビルドで多くの依存関係をダウンロードするのは正常です。
- 長時間止まっているように見える場合は、先にパッケージを個別にインストールしてみてください:

```bash
pio pkg install -e seeed_wio_tracker_L1
```

その後、もう一度ビルドを実行します。

**Web クライアントに完全な環境テレメトリが表示されない**

- Meshtastic Web Client は現在、リモート環境テレメトリ用の完全な UI を提供していません。
- `Messages` / `Broadcast` ページはチャットトラフィック用であり、専用のテレメトリページではありません。
- そこに値が表示されない場合でも、メッシュリンクが失敗していることを自動的に意味するわけではありません。

**スマートフォンでデータが見えても、メッシュ転送が証明されるわけではない**

- 直接接続されたスマートフォンで値が更新されているのが見えることは、ローカルのスマートフォンとデバイス間のリンクが機能していることだけを示します。
- それだけでは、環境テレメトリがすでにメッシュ内に転送されたことの証明にはなりません。
- 実際にメッシュ転送されていることを確認するには、ログ内で次の項目を確認します：
- `Environment telemetry dispatch path=mesh ...`
- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**`seeed-xiao-s3` のビルドが最初のセットアップ時に失敗する**

- 最初の依存関係のインストールには長時間かかることがあります。これは正常です。
- ターゲット環境で失敗する場合は、まずパッケージをインストールしてから、詳細出力付きビルドを実行します：

```bash
pio pkg install -e seeed-xiao-s3
pio run -e seeed-xiao-s3 -v
```

- 依存関係の準備が整ったら、通常のビルドに戻します：

```bash
pio run -e seeed-xiao-s3
```
