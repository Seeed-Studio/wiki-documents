---
description: Meshtastic ファームウェアのソースコード環境をセットアップし、Wio Tracker L1 ターゲットをビルドし、簡単な UI 変更を行い、ファームウェアを書き込むための実践的なチュートリアルです。
title: Meshtastic ソースコード開発チュートリアル
keywords:
  - Meshtastic
  - ソースコード
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

すでに Git、Python、PlatformIO がインストールされている場合は、ハンズオンのセクションまでスキップして構いません。

:::tip
コマンドは Windows と macOS の両方について記載しています。スクリーンショットの多くは Windows ですが、ワークフローは macOS でも同じです。
:::

## 事前準備

次のツールを用意します：

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. Git をインストールする

<Tabs>
<TabItem value="windows" label="Windows">

公式の Git for Windows ダウンロードページを開きます：

[Git for Windows](https://git-scm.com/install/windows)

ページを開くと通常は自動的にインストーラのダウンロードが始まります。ダウンロード完了後、インストーラをダブルクリックし、セットアップウィザードに従います。

インストール中で最も重要なステップは **PATH 環境変数の調整** です。次を選択します：

**Git from the command line and also from 3rd-party software**

それ以外のオプションは、通常デフォルト値のままで問題ありません。そのまま `Next` をクリックし続けてください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

インストールが完了するまで待ちます。

インストール後、**現在開いている PowerShell と VS Code のターミナルウィンドウをすべて閉じてから**、新しい PowerShell ウィンドウを開き、次を実行します：

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

Git のバージョン番号が表示されれば、Git は正常にインストールされています。

**`git` コマンドがまだ使えない場合**

まず PowerShell で次のコマンドを実行し、Git のデフォルトのインストールパスを確認できます：

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

その後、Git をシステム環境変数に手動で追加します。

**GUI での修正手順**

1. `Win` を押す
2. 「Edit the system environment variables」を検索
3. 開いて **Environment Variables** をクリック
4. **System variables** の下にある `Path` を探す
5. **Edit** をクリック
6. **New** をクリックし、次の 2 つのパスを追加します：

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. **OK** を押してすべて保存します

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

保存後、次の操作も必要です：

- **すべての** PowerShell ウィンドウを閉じる
- PowerShell を再度開く

その後、次を実行します：

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

2. まだ Homebrew がインストールされていない場合は、先にインストールします：

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

ターミナルがすでに有効な Git バージョンを返す場合は、再インストールする必要はありません。

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

最初のコマンドで Python が見つかる場合、通常 2 つ目のコマンドでそのままインストールされます。

インストール後、ターミナルを閉じて再度開き、次を実行します：

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

バージョン番号が表示されれば、Python と pip を使用する準備ができています。

</TabItem>

<TabItem value="macos" label="macOS">

macOS には、すでに Python 環境が含まれていることがよくあります。新しいバージョンをインストールする前に、`python3` と `pip3` がすでに利用可能かどうかを確認します：

```bash
python3 --version
pip3 --version
```

利用できない場合、またはより新しいバージョンが必要な場合は、Homebrew で Python をインストールします：

```bash
brew install python
```

インストール後、ターミナルを再度開き、次を実行します：

```bash
python3 --version
pip3 --version
```

`python` や `pip` を使いたい場合は、自分でシェルエイリアスを設定することもできます。ただし macOS では、`python3` と `pip3` を使う方が一般的により確実です。

</TabItem>
</Tabs>

### 3. PlatformIO をインストールする

PlatformIO はインストール時に依存関係を自動的にダウンロードするため、このステップには時間がかかる場合があります。エラーが発生した場合は、1 つずつ内容を確認してください。

VS Code の拡張機能マーケットプレイスで `PlatformIO` を検索し、インストールします。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

インストール後、左側のツールバーにアリの形をしたアイコンが表示されるはずです。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. Meshtastic ファームウェアリポジトリをクローンする

公式の Meshtastic ファームウェアリポジトリは `meshtastic/firmware` です。

<Tabs>
<TabItem value="windows" label="Windows">

作業ディレクトリのターミナルで次のコマンドを実行します：

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

プロジェクトディレクトリが別のドライブや別のパスにある場合は、先にその場所へ移動してください。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

出力が上のスクリーンショットと似ていれば、リポジトリは正常にクローンされています。

</TabItem>

<TabItem value="macos" label="macOS">

作業ディレクトリのターミナルで次のコマンドを実行します：

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

まだ `~/workplace` が存在しない場合は、先に作成します：

```bash
mkdir -p ~/workplace
```

コマンドが問題なく完了すれば、リポジトリは正常にクローンされています。

</TabItem>
</Tabs>

### 5. ハンズオン

この段階では、すぐにコード編集に取りかからないでください。まず、プロジェクトが完全なビルドプロセスを正常に通過できることを確認します。

最初は次の 3 つのタスクから始めることをおすすめします：

1. `firmware` を開く
2. `platformio.ini` を確認する
3. 対象ボード用のビルド環境を見つける

重要なポイントが 1 つあります。ルートの `platformio.ini` だけに注目しないでください。実際には、次のような追加の設定ファイルを `include` しています：

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

つまり、実際のボードレベルの環境定義は、通常 `variants/.../platformio.ini` の下にあります。

ターゲットボードを特定する際は、特に次の 2 つのディレクトリに注意してください：

- `variants/`
- `boards/`

ここでは、例としてのターゲットに **Wio Tracker L1 Pro** を使用します。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

この図から、Meshtastic において **Wio Tracker L1 / L1 Pro のビルドターゲットは** `seeed_wio_tracker_L1` であることがわかります。

**ステップ 1: プロジェクトが正常にビルドできることを確認する**

ここではビルドに PlatformIO Core CLI を使用します。

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

画面が上のスクリーンショットと似た状態になっていれば、ビルドプロセスは正しく開始されています。最初のビルドには時間がかかることが多いので、しばらく待ってください。

**ビルドが失敗した場合**

ビルドが失敗した場合は、まず PlatformIO に現在の環境で必要な依存関係をインストールさせることができます：

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
- どのパッケージが問題を引き起こしているかを把握しやすい。
- エラーメッセージがより絞り込まれ、トラブルシューティングしやすくなる。

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

まず、ボードレベルの設定からディスプレイ実装をたどっていきます。最初に次を確認できます：

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

これらの設定ファイルから、L1 が `HAS_SCREEN` と `USE_SSD1306` を定義していることが分かります。つまり、スクリーンなし構成でも E-Ink ソリューションでもなく、標準的な OLED ディスプレイパイプラインを使用しているということです。

ディスプレイロジックをさらに追っていくと、関連コードのほとんどは次の場所にあります：

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
- バッテリー領域と右側のアイコンの間にスペースを確保します。
- タイトルが空のときにのみ、`SEEED_WIO_TRACKER_L1` 上で `made by AE` を描画します。

完全なコードはこちらで確認できます：

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**ステップ 3: 独自のファームウェアをビルドする**

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

ディスプレイロジックは変更されましたが、ビルドターゲットは依然として同じです：

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

ほとんどの場合、最初に消去操作を行う必要があります。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

次に、先ほどビルドしたファームウェアファイルを選択し、デバイスに書き込みます。

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

この時点で、Meshtastic ソースコードの実践演習は完了です。環境構築、リポジトリのクローン、ボード設定の調査、ファームウェアのコンパイル、表示ロジックの変更、最終的な書き込み検証まで、一連のワークフローを一通り体験しました。

さらに進めたい場合は、次の方向性を引き続き探求できます：

1. ホーム画面上のより多くの要素を変更する
2. ボタン、GPS、Bluetooth などのモジュールの動作を調整する
3. 自分のボード用に独立した `variant` を追加する
4. `src/`、`variants/`、`boards/` 間の関係を引き続き追跡する

## よくある問題

**`git` コマンドが使用できない**

- Windows の場合、まず Git が `PATH` に追加されているか確認します。
- macOS の場合、まず `git --version` を実行します。システムから Command Line Tools のインストールを求められたら、指示に従ってください。

**`python3` または `pip3` が使用できない**

- Windows の場合、Python が `PATH` に追加されていることを確認するか、ターミナルを再起動してから再試行します。
- macOS の場合、まず `python3` / `pip3` が既に存在するか確認し、必要な場合にのみ Homebrew で Python をインストールします。

**`pio` コマンドが使用できない**

- まず `pio --version` を実行します。
- それでもコマンドが使用できない場合は、VS Code とターミナルを再起動してから再試行します。
- 必要に応じて、PlatformIO 拡張機能を再インストールし、PlatformIO Core が正しく初期化されていることを確認します。

**`git submodule update --init` の後もコードが不完全に見える**

- まず、自分が `firmware` リポジトリのルートディレクトリにいることを確認します。
- ネットワーク接続が不安定な場合は、次のコマンドで再試行します：

```bash
git submodule update --init --recursive
```

**最初のビルドに時間がかかりすぎる**

- 最初のビルドで多くの依存関係がダウンロードされるのは正常です。
- あまりにも長く止まっているように見える場合は、先にパッケージを個別にインストールしてみてください：

```bash
pio pkg install -e seeed_wio_tracker_L1
```

その後、再度ビルドを実行します。

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>