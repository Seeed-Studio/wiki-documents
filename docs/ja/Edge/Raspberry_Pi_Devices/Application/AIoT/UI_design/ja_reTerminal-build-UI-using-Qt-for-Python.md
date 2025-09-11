---
description: Pythonを使用したreTerminal向けQt
title: Pythonを使用したreTerminal向けQt
keywords:
  - Edge
  - reTerminalアプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-build-UI-using-Qt-for-Python
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

## はじめに

このWikiでは、Pythonを使用してreTerminal上でQtを使った独自のユーザーインターフェースを構築する方法を説明します。ここでは開発にPySide2を使用しています。PySide2はQt for Pythonプロジェクトの公式Pythonモジュールであり、Qt5フレームワーク全体へのアクセスを提供します。Qt for Pythonを使用すると、よりユーザーフレンドリーな方法でインタラクティブなユーザーインターフェースを構築できます！また、非常に柔軟で使いやすく、学習曲線も短いです。

以下のガイドに従うことで、LCD上のボタンをクリックするだけでreTerminalのSTAおよびUSR LEDを制御するアプリケーションを作成できるようになります。それでは始めましょう！

## 開発環境の準備

### reTerminal上で

- **ステップ1.** [こちら](https://wiki.seeedstudio.com/ja/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)で説明されているように、**オンボードLCD、外部ディスプレイ、またはSSH**を使用してreTerminalにアクセスし、ターミナルウィンドウで以下を入力します。

```sh
sudo apt install qml-module-qtquick-shapes python3-pyside2.qtqml python3-pyside2.qtcore python3-pyside2.qtnetwork python3-pyside2.qtgui python3-pyside2.qtwidgets python3-pyside2.qtquick qtquickcontrols2-5-dev qml-module-qtcharts qml-module-qtquick-controls qml-module-qtquick-controls2
```

- **ステップ2.** **QtQuick.Studio**コンポーネントを手動でインストールするためのコンパイルツールをインストールします。

```sh
sudo apt install qt5-qmake
```

**注意:** デフォルトのDebianおよびUbuntu OSにはこのモジュールが含まれていないため、QtQuick.Studioを手動でインストールする必要があります。

- **ステップ3.** **QtQuick.Studio**モジュールをインストールします。

```sh
git clone https://github.com/Pillar1989/qtquickdesigner-components.git
cd qtquickdesigner-components
qmake
make
sudo make install
```

**注意:** 最新のQtQuick.Studioモジュールは現在のRaspberry Pi OSでは動作しないため、Debian GNU/Linux 10 (buster)に移植しました。

以下のエラープロンプトは無視して構いません。

```txt
Some of the required modules (qtHaveModule(quick)) are not available.
Skipped.
```

これでreTerminal上で必要なパッケージのインストールが完了しました。

### ホストPC上で

- **ステップ1.** [Microsoft Visual Studio Code](https://code.visualstudio.com/)をダウンロードしてインストールします。

**注意:** お使いのオペレーティングシステムに適したインストーラーをダウンロードしてください。

- **ステップ2.** 左側のナビゲーションメニューの**拡張機能**タブをクリックし、検索ボックスに**remote development**と入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **ステップ3.** **Remote Development**を選択し、**インストール**をクリックします。

- **ステップ4.** キーボードで**F1**を押し、**ssh**と入力して**Remote-SSH:Connect to Host...**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **ステップ5.** 以下を入力します。

```sh
pi@192.xxx.xx.xx
```

**注意:** **pi**はユーザー名であり、**192.xxx.xx.xx**はreTerminalのIPアドレスです。

- **ステップ6.** ユーザーのパスワードを入力します。

これでSSHを使用してreTerminalに正常にログインしました。

- **ステップ7.** **ステップ2**と同様に**Python**拡張機能をインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-extension.png" alt="pir" width="800" height="auto"/></p>

- **ステップ8.** **Qt for Python**拡張機能をインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/qt-python-extension.png" alt="pir" width="800" height="auto"/></p>

- **ステップ9.** `File > Open Folder...`に移動し、開きたいフォルダを選択します。

**注意:** 後でVisual Studio Codeを使用してreTerminal内にファイルを作成し、プロジェクトを構築します。

これで開発環境の準備が正常に完了しました。

## プロジェクトの構築

次に、プロジェクトの構築に進みます。ワークフローは以下の通りです：

1. **グラフィックデザインソフトウェア**でUIをデザインする  
2. **.qml**ファイルを作成し、グラフィックデザインソフトウェアで得られたUI要素の位置に基づいてUIを構築する  
3. フルスクリーンUIアプリケーション用の別の**.qml**ファイルを作成する  
4. **Python**ファイルを作成し、LEDを制御するための関数を記述する  
5. アプリを実行するための**Python**ファイルを作成する  
6. Pythonファイルを実行するための**スクリプト**を作成する  
7. 作成したアプリをアイコンをダブルクリックして開けるようにする**デスクトップショートカット**を作成する  

作成する必要があるファイルは以下の通りです：

- LedGui.qml - グラフィカル要素を含むUI  
- App.qml - フルスクリーンUIアプリケーション  
- ledControl.py - LED制御関数  
- main.py - アプリを実行する  
- led_start.sh - Pythonファイルを実行する  
- led.desktop - アプリを開く  

### UIのデザイン

まずUIをデザインする必要があります。これには、無料のオンライングラフィックデザインソフトウェアである**Gravit Designer**を使用します。

- **ステップ1.** [このリンク](https://www.designer.io/)をクリックしてGravit Designerを開きます  

- **ステップ2.** **Get Started**をクリックし、無料アカウントを作成するか、FacebookまたはGoogleで直接ログインします  

- **ステップ3.** キャンバスサイズを**1280 x 720px**に設定し、**Create!**をクリックします  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-dimensions.png" alt="pir" width="800" height="auto"/></p>

**注:** reTerminal LCDの解像度が1280x720pxであるため、このサイズに設定します。

- **ステップ4.** **Rectangle**形状を選択します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/create-rect.png" alt="pir" width="800" height="auto"/></p>

- **ステップ5.** **UIのタイトルバー**用の長方形を描画します。左マウスボタンを押しながらドラッグし、マウスを離します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-draw.jpg" alt="pir" width="800" height="auto"/></p>

- **ステップ6.** **UIのタイトルバー**用の長方形を描画します（同じ手順を繰り返します）  

- **ステップ7.** **UIのボタン**用の以下の形状を描画します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-buttons.png" alt="pir" width="800" height="auto"/></p>

- **ステップ8.** 形状を選択し、**INSPECTOR**タブで**Fills**を選択します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-color.png" alt="pir" width="500" height="auto"/></p>

- **ステップ9.** 色をクリックして選択した形状を塗りつぶします  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-title-fill.png" alt="pir" width="800" height="auto"/></p>

- **ステップ10.** 残りの形状を以下のように塗りつぶします  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-colored-blocks.png" alt="pir" width="800" height="auto"/></p>

- **ステップ11.** 閉じるボタンを追加します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-close.png" alt="pir" width="800" height="auto"/></p>

- **ステップ12.** **Text tool**をクリックします  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-text.png" alt="pir" width="600" height="auto"/></p>

- **ステップ13.** テキストブロックを配置し、「LED TEST」と入力します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-2.png" alt="pir" width="800" height="auto"/></p>

- **ステップ14.** テキストブロックをクリックし、サイズと色を変更します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-3.png" alt="pir" width="350" height="auto"/></p>

- **ステップ15.** 同じ手順を繰り返して以下を作成します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-4.png" alt="pir" width="800" height="auto"/></p>

これでUIのデザインが完了しました。

### qmlでUIを構築

次に、Gravit Designerからのデザインをqmlに転送し、UIを構築します。

- **ステップ1.** Microsoft Visual Codeを使用してreTerminalにSSH接続し、前述のようにフォルダを開きます。

- **ステップ2.** 右クリックして**New Folder**を選択します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-1.png" alt="pir" width="700" height="auto"/></p>

- **ステップ3.** フォルダ名を入力し、そのフォルダに入ります  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-2.png" alt="pir" width="500" height="auto"/></p>

- **ステップ4.** フォルダを右クリックして**New File**を選択します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-3.png" alt="pir" width="500" height="auto"/></p>

- **ステップ5.** ファイル名を**.qml**拡張子付きで入力します  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-4.png" alt="pir" width="600" height="auto"/></p>

**注:** 最初の文字は**大文字**にしてください。

- **ステップ6.** **.qmlファイル**を開き、以下のコードをコピーします：

```qml
// ライブラリをインポート
import QtQuick 2.8
import QtQuick.Controls 2.1

/* Item型はQt Quickのすべてのビジュアルアイテムの基本型です。ここでは1280と720を選択しています。
これはreTerminal LCDの解像度が1280x720であるためです。*/
Item {
    // qmlを識別
    id: ledControl
    // アプリの幅と高さを定義
    width: 1280
    height: 720

    // 見出し用の長方形ブロック
    Rectangle {
        id: titleBlock
        x: 0 // 長方形ブロックのx軸位置
        y: 0 // 長方形ブロックのy軸位置
        width: 1280 // 長方形ブロックの幅
        height: 175 // 長方形ブロックの高さ
        color: "green" // 長方形ブロックの色
        /* 色フィールドには**16進数値**も入力できます */
    }

    // 左上ボタン（ON）
    Button {
        id: staGreenOn
        x: 159
        y: 272
        width: 200
        height: 91
        text: "ON" // ボタン内のテキスト
        font.pointSize: 28 // テキストフォント
        palette.button: "green" // ボタンの色
        palette.buttonText: "white" // テキストの色
        // Pythonファイル内のボタン制御クラスにアクセスしてLEDをオンにする
        onClicked:
        {
            _Setting.staGreenOn()
        }
    }

    // 左下ボタン（OFF）
    Button {
        id: staGreenOff
        x: 159
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staGreenOff()
        }
    }

    // 中央上ボタン（ON）
    Button {
        id: staRedOn
        x: 540
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "red"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staRedOn()
        }
    }

    // 中央下ボタン（OFF）
    Button {
        id: staRedOff
        x: 540
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "red"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staRedOff()
        }
    }

    // 右上ボタン（ON）
    Button {
        id: usrGreenOn
        x: 918
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.usrGreenOn()
        }
    }

    // 右下ボタン（OFF）
    Button {
        id: usrGreenOff
        x: 918
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.usrGreenOff()
        }
    }

    // 閉じるボタン
    Button {
        id: close
        x: 1200
        y: 0
        width: 80
        height: 31
        palette.button: "red"
        palette.buttonText: "white"
        text: "X"
        onClicked:
        {
            _Setting.closeWindow()
        }
    }

    // 見出し
    Text {
        id: title
        x: 500
        y: 37
        color: "white"
        text: "LED TEST"
        font.pixelSize: 60
    }

    // STA GREENテキスト
    Text {
        id: staGreen
        x: 135
        y: 400
        text: "STA GREEN"
        font.pixelSize: 45
    }

    // STA REDテキスト
    Text {
        id: staRed
        x: 547
        y: 400
        text: "STA RED"
        font.pixelSize: 45
    }

    // USR GREENテキスト
    Text {
        id: usrGreen
        x: 891
        y: 400
        text: "USR GREEN"
        font.pixelSize: 45
    }
}
```

#### 図形の位置とサイズを取得

**Gravit Designer**内で、図形ブロックを選択し、**INSPECTOR**タブから**位置とサイズ**を取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/build-ui-4.5.png" alt="pir" width="350" height="auto"/></p>

#### テキストの位置とサイズを取得

**Gravit Designer**内で、テキストブロックを選択し、**INSPECTOR**タブから**位置とサイズ**を取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-5.jpg" alt="pir" width="350" height="auto"/></p>

### フルスクリーン UI の構築

次に、フルスクリーン UI を構築します。

- **ステップ 1.** 以前作成したルートフォルダを開き、そのフォルダ内に新しい **.qml ファイル**を作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-6.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 2.** **.qml ファイル**を開き、以下のコードをコピーします。

```qml
// ライブラリをインポート
import QtQuick.Controls 2.1

// UI 要素を含むアプリケーションウィンドウのプロパティ
ApplicationWindow {
    id: application
    width: 1280
    height: 720
    visible: true
    visibility: "FullScreen"

    // アプリケーションの最初のウィンドウを初期化
    property var iniITEM: "LedGui.qml"

    // スタックベースのナビゲーションモデル
    StackView {
        id: stackview
        initialItem: iniITEM
    }
}
```

これでフルスクリーンアプリの構築が完了しました。

### LED を制御する方法

次に、reTerminal の LED を制御するためのメソッドを取得する Python ファイルを作成します。

- **ステップ 1.** 以前作成したルートフォルダを開き、そのフォルダ内に新しい **.py** Python ファイルを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-1.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 2.** 作成した **.py ファイル**を開き、以下のコードをコピーします。

```py
# ライブラリをインポート
import sys
import os
from PySide2.QtCore import *

# ボタン制御を処理するクラス
class Setting(QObject):

    # staGreen ON/OFF
    @Slot()
    def staGreenOn(self):
        # ON にする
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led2/brightness'")
    @Slot()
    def staGreenOff(self):
        # OFF にする
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led2/brightness'")

    # staRed
    @Slot()
    def staRedOn(self):
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led1/brightness'")
    @Slot()
    def staRedOff(self):
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led1/brightness'")

    # usrGreen
    @Slot()
    def usrGreenOn(self):
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led0/brightness'")
    @Slot()
    def usrGreenOff(self):
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led0/brightness'")

    # ウィンドウを閉じる
    @Slot()
    def closeWindow(self):
        sys.exit()
```

これで LED を制御するための Python ファイルが完成しました。

### アプリを実行するための Python ファイルを準備

次に、構築したアプリを実行するための Python ファイルを作成します。

- **ステップ 1.** 以前作成したルートフォルダを開き、そのフォルダ内に新しい **.py ファイル**を作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-7.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 2.** 作成したファイルを開き、以下のコードをコピーします。

```py
# ライブラリをインポート
from PySide2.QtQml import QQmlApplicationEngine
from PySide2.QtWidgets import *
from PySide2.QtCore import *
from ledControl import Setting

# アプリを起動
if __name__ == '__main__':
    app = QApplication([])
    engine = QQmlApplicationEngine()
    # 以前作成したフルスクリーンアプリの場所
    url = QUrl("./App.qml")
    context = engine.rootContext()
    seting = Setting()
    context.setContextProperty("_Setting", seting)
    engine.load(url)
    app.exec_()
```

### Python ファイルを実行するスクリプトを準備

- **ステップ 1.** 以前作成したルートフォルダを開き、そのフォルダ内に新しい **.sh ファイル**を作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-8.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 2.** 作成したファイルを開き、以下を入力します。

```sh
#!/bin/bash
cd $HOME/ledApp
DISPLAY=:0 python3 main.py
```

**注意:** ここで **$HOME/ledApp** は **main.py** ファイルの場所です。

- **ステップ 3.** reTerminal 内でターミナルウィンドウを開き、アプリのルートディレクトリに移動します。

```sh
例:
cd /ledApp
```

- **ステップ 4.** led_start.sh を実行可能ファイルにします。

```sh
chmod +x led_start.sh
```

### アプリを起動するデスクトップファイルを準備

- **ステップ 1.** 以前作成したルートフォルダを開き、そのフォルダ内に新しい **.desktop ファイル**を作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-9.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 2.** 作成したファイルを開き、以下を入力します。

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/ledApp/led_start.sh
Type=Application
Categories=Application;Development;
```

**注意:** **Exec** は以前作成したスクリプトの場所です。

- **ステップ 3.** reTerminal 内でターミナルウィンドウを開き、アプリのルートディレクトリに移動します。

```sh
例:
cd /ledApp
```

- **ステップ 4.** led.desktop を実行可能ファイルにします。

```sh
chmod +x led.desktop
```

### アプリを起動

- **ステップ 1.** reTerminal の LCD を使用して **ledApp フォルダ**に移動します。

- **ステップ 2.** **LED Test** ファイルをダブルクリックします。

以下のような出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

これでボタンをクリックすると、LED が点灯するのが確認できます！

### アプリのデバッグ

開発中にアプリをデバッグするプロセスを確認しましょう。

- **ステップ 1.** 以前説明したように、**Microsoft Visual Studio Code** を使用して **SSH** 経由で reTerminal にログインします。

- **ステップ 2.** [MobaXterm](https://mobaxterm.mobatek.net/) のような SSH アプリケーションを使用して、**X11 サーバー機能**を有効にした状態で SSH 経由で reTerminal にログインします。

**注意:** X11 は reTerminal のディスプレイを転送し、PC 上にポップアップ表示するために必要です。

- **ステップ 3.** Microsoft Visual Studio Code で reTerminal にすべてのコードを書き込んだ後、MobaXterm を使用して **main.py ファイル**を実行します。

```sh
python3 main.py
```

## 直接テスト

上記の手順に従って環境をセットアップし、コードを直接コピーして実行します。

```bash
git clone https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI
cd Python_ReTerminalQt5_LED_UI
python3 main.py
```

最後に、新しいウィンドウに出力が表示されます。コードにエラーがある場合は、MobaXterm のターミナルウィンドウにエラーが表示されます。

## ボーナスデモ

Qt for Python を使用した、より興味深いデモを体験したい場合は、[この GitHub リポジトリ](https://github.com/Seeed-Studio/Seeed_Python_ReTerminalQt5Examples) をチェックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" alt="pir" width="1000" height="auto"/></p>

## リソース

- **[GitHub]** [Python_ReTerminalQt5_LED_UI](https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI)
- **[Webページ]** [Qt ドキュメント](https://doc.qt.io/qt-5/index.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>