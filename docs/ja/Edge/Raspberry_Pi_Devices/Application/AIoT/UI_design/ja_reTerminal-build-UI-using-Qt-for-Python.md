---
description: reTerminal で Python を使用した Qt
title: reTerminal で Python を使用した Qt
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-build-UI-using-Qt-for-Python
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

## はじめに

この wiki では、reTerminal で Python 用 Qt を使用して独自のユーザーインターフェースを構築する方法について説明します。ここでは開発に PySide2 を使用しています。PySide2 は Qt for Python プロジェクトの公式 Python モジュールで、完全な Qt5 フレームワークへのアクセスを提供します。Python 用 Qt を使用すると、よりユーザーフレンドリーな方法でインタラクティブなユーザーインターフェースを構築できます！また、使用方法が非常に柔軟で、学習曲線も短いです。

以下のガイドに従うことで、LCD 上のボタンをクリックするだけで reTerminal の STA および USR LED を制御するアプリケーションを作成できるようになります。それでは始めましょう！

## 開発環境の準備

### reTerminal 上で

- **ステップ 1.** [こちら](https://wiki.seeedstudio.com/ja/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)で説明されているように、**オンボード LCD、外部ディスプレイ、または SSH** を使用して reTerminal にアクセスし、ターミナルウィンドウで以下を入力します

```sh
sudo apt install qml-module-qtquick-shapes python3-pyside2.qtqml python3-pyside2.qtcore python3-pyside2.qtnetwork python3-pyside2.qtgui python3-pyside2.qtwidgets python3-pyside2.qtquick qtquickcontrols2-5-dev qml-module-qtcharts qml-module-qtquick-controls qml-module-qtquick-controls2
```

- **ステップ 2.** **QtQuick.Studio**コンポーネントを手動でインストールするためのコンパイルツールをインストールする

```sh
sudo apt install qt5-qmake
```

**注意:** デフォルトのDebianとUbuntu OSにはこのモジュールがないため、QtQuick.Studioを手動でインストールする必要があります

- **ステップ 3.** **QtQuick.Studio**モジュールをインストールする

```sh
git clone https://github.com/Pillar1989/qtquickdesigner-components.git
cd qtquickdesigner-components
qmake
make
sudo make install
```

**注意:** 最新のQtQuick.Studioモジュールは現在のRaspberry Pi OSで動作しないため、Debian GNU/Linux 10 (buster)に移植しました。

以下のプロンプトエラーは無視できます。

```txt
Some of the required modules (qtHaveModule(quick)) are not available.
Skipped.
```

現在、reTerminal に必要なパッケージのインストールが完了しました

### ホスト PC 上で

- **ステップ 1.** [Microsoft Visual Studio Code](https://code.visualstudio.com/) をダウンロードしてインストールします

**注意:** お使いのオペレーティングシステムに適したインストーラーをダウンロードしてください

- **ステップ 2.** 左側のナビゲーションメニューの **Extensions** タブをクリックし、検索ボックスに **remote development** と入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** **Remote Development** を選択し、**Install** をクリックします

- **ステップ 4.** キーボードで **F1** を押し、**ssh** と入力して **Remote-SSH:Connect to Host...** を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 5.** 以下を入力します

```sh
pi@192.xxx.xx.xx
```

**注意:** **pi** はユーザー名で、**192.xxx.xx.xx** は reTerminal の IP アドレスです

- **ステップ 6.** ユーザーのパスワードを入力します

これで SSH を使用して reTerminal に正常にログインできました

- **ステップ 7.** 前述の**ステップ 2** と同様に **Python** 拡張機能をインストールします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-extension.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 8.** **Qt for Python** 拡張機能をインストールします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/qt-python-extension.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 9.** `File > Open Folder...` に移動し、開きたいフォルダを選択します

**注意:** 後で Visual Studio Code を使用して reTerminal 内でファイルを作成し、プロジェクトを構築します

これで開発環境の準備が正常に完了しました

## プロジェクトの構築

次にプロジェクトの構築に進みましょう。ワークフローは以下の通りです：

1. **グラフィックデザイナーソフトウェア**で UI をデザインする
2. **.qml** ファイルを作成し、グラフィックデザイナーソフトウェアから取得した UI 要素の位置に基づいて UI を構築する
3. フルスクリーン UI アプリケーション用の別の **.qml** を作成する
4. **python** ファイルを作成し、LED を制御するために使用される関数を記述する
5. アプリを実行するための **Python** ファイルを作成する
6. python ファイルを実行するための**スクリプト**を作成する
7. アイコンをダブルクリックして作成したアプリを開くための**デスクトップショートカット**を作成する

作成する必要があるファイルは以下の通りです：

- LedGui.qml - グラフィック要素を含む UI
- App.qml - フルスクリーン UI アプリケーション
- ledControl.py - LED 制御関数
- main.py - アプリを実行
- led_start.sh - Python ファイルを実行
- led.desktop - アプリを開く

### UI のデザイン

まず UI をデザインする必要があります。これを行うために、**Gravit Designer** という無料のオンライングラフィックデザイナーソフトウェアを使用します

- **ステップ 1.** [このリンク](https://www.designer.io/)をクリックして Gravit Designer を開きます

- **ステップ 2.** **Get Started** をクリックし、無料アカウントを作成するか、Facebook または Google で直接ログインします

- **ステップ 3.** キャンバスサイズを **1280 x 720px** に設定し、**Create!** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-dimensions.png" alt="pir" width="800" height="auto"/></p>

**注意:** reTerminal LCD の解像度が 1280x720px であるため、この設定にします

- **ステップ 4.** **Rectangle** 形状を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/create-rect.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 5.** 左マウスボタンを押し続け、マウスをドラッグして離すことで、**UI のタイトルバー**用の長方形を描画します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-draw.jpg" alt="pir" width="800" height="auto"/></p>

- **ステップ 6.** 左マウスボタンを押し続け、マウスをドラッグして離すことで、**UI のタイトルバー**用の長方形を描画します

- **ステップ 7.** **UI のボタン**用に以下の形状を描画します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-buttons.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 8.** 形状を選択し、**INSPECTOR** タブの下で **Fills** を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-color.png" alt="pir" width="500" height="auto"/></p>

- **ステップ 9.** 色をクリックして選択した形状を塗りつぶします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-title-fill.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 10.** 残りの形状を以下のように塗りつぶします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-colored-blocks.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 11.** 閉じるボタンを追加します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-close.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 12.** **Text tool** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-text.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 13.** テキストブロックを配置し、"LED TEST" と入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-2.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 14.** テキストブロックをクリックし、サイズと色を変更します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-3.png" alt="pir" width="350" height="auto"/></p>

- **ステップ 15.** 同じ手順を繰り返して以下を取得します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-4.png" alt="pir" width="800" height="auto"/></p>

これで UI のデザインが完了しました

### qml での UI 構築

次に、Gravit Designer からのデザインを qml に転送し、UI を構築します

- **ステップ 1.** Microsoft Visual Code を介して SSH を使用して reTerminal に接続し、前述のようにフォルダを開きます。

- **ステップ 2.** 右クリックして **New Folder** を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-1.png" alt="pir" width="700" height="auto"/></p>

- **ステップ 3.** フォルダの名前を入力し、フォルダに入ります

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-2.png" alt="pir" width="500" height="auto"/></p>

- **ステップ 4.** フォルダを右クリックして **New File** を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-3.png" alt="pir" width="500" height="auto"/></p>

- **ステップ 4.** 以下のように **.qml** 拡張子でファイル名を入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-4.png" alt="pir" width="600" height="auto"/></p>

**注意:** 最初の文字が**大文字**であることを確認してください

- **ステップ 5.** **.qml ファイル**に入り、以下のコードをコピーします

```qml
// import libraries
import QtQuick 2.8
import QtQuick.Controls 2.1

/* The Item type is the base type for all visual items in Qt Quick. Here 1280 and 720 are chosen
for the dimensions because the resolution of reTerminal LCD is 1280x720 */
Item {
    // identify the qml
    id: ledControl
    // define width and height of the app
    width: 1280
    height: 720

    // Rectangle block for the heading
    Rectangle {
        id: titleBlock
        x: 0 // Rectangle block position in x-axis
        y: 0 // Rectangle block position in y-axis
        width: 1280 // Rectangle block width
        height: 175 // Rectangle block height
        color: "green" // Rectangle block color
        /* You can also enter **hexadecimal values** for the color field */
    }

    // left top button (ON)
    Button {
        id: staGreenOn
        x: 159
        y: 272
        width: 200
        height: 91
        text: "ON" // text inside the button
        font.pointSize: 28 // text font
        palette.button: "green" // button color
        palette.buttonText: "white" // text color
        // Used to access the button control class in the Python file and turn on the LED
        onClicked:
        {
            _Setting.staGreenOn()
        }
    }

    // left bottom button (OFF)
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

    // middle top button (ON)
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

    // middle bottom button (OFF)
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

    // right top button (ON)
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

    // right bottom button (OFF)
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

    // close button
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

    // heading
    Text {
        id: title
        x: 500
        y: 37
        color: "white"
        text: "LED TEST"
        font.pixelSize: 60
    }

    // STA GREEN text
    Text {
        id: staGreen
        x: 135
        y: 400
        text: "STA GREEN"
        font.pixelSize: 45
    }

    // STA RED text
    Text {
        id: staRed
        x: 547
        y: 400
        text: "STA RED"
        font.pixelSize: 45
    }

    // USR GREEN text
    Text {
        id: usrGreen
        x: 891
        y: 400
        text: "USR GREEN"
        font.pixelSize: 45
    }
}
```

#### シェイプの位置とサイズを取得する

**Gravit Designer** 内で、シェイプブロックを選択し、**INSPECTOR** タブから**位置とサイズ**を取得します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/build-ui-4.5.png" alt="pir" width="350" height="auto"/></p>

#### テキストの位置とサイズを取得する

**Gravit Designer** 内で、テキストブロックを選択し、**INSPECTOR** タブから**位置とサイズ**を取得します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-5.jpg" alt="pir" width="350" height="auto"/></p>

### フルスクリーンUIを構築する

次に、フルスクリーンUIを構築しましょう

- **ステップ 1.** 以前に作成したRootフォルダを開き、そのフォルダの下に新しい **.qmlファイル** を作成します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-6.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 2.** **.qmlファイル** を開き、以下のコードをコピーします

```qml
// import library
import QtQuick.Controls 2.1

// properties of the application window containing UI elements
ApplicationWindow {
    id: application
    width: 1280
    height: 720
    visible: true
    visibility: "FullScreen"

    // initialize the first window of the application
    property var iniITEM: "LedGui.qml"

    // stack-based navigation model
    StackView {
        id: stackview
        initialItem: iniITEM
    }
}
```

これでフルスクリーンアプリの構築が完了しました

### LEDを制御する方法

次に、reTerminal上のLEDを制御する方法を取得するためのpythonファイルを作成します

- **ステップ 1.** 以前に作成したルートフォルダを開き、そのフォルダの下に新しい **.py** pythonファイルを作成します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-1.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 2.** **.py** ファイルに入り、以下のコードをコピーします

```py
# import libraries
import sys
import os
from PySide2.QtCore import *

# class to handle button controls
class Setting(QObject):

    # staGreen ON/OFF
    @Slot()
    def staGreenOn(self):
        # turn ON
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led2/brightness'")
    @Slot()
    def staGreenOff(self):
        # turn OFF
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

    # close
    @Slot()
    def closeWindow(self):
        sys.exit()
```

これでLEDを制御するために使用するpythonファイルが完成しました

### APPを実行するためのPythonファイルを準備する

次に、構築したアプリを実行するために使用できるPythonファイルを作成する必要があります

- **ステップ 1.** 以前に作成したルートフォルダを開き、そのフォルダの下に新しい**.pyファイル**を作成します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-7.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 2.** 作成したファイルに入り、以下のコードをコピーします

```py
# import libraries
from PySide2.QtQml import QQmlApplicationEngine
from PySide2.QtWidgets import *
from PySide2.QtCore import *
from ledControl import Setting

# launch the app
if __name__ == '__main__':
    app = QApplication([])
    engine = QQmlApplicationEngine()
    # location of the fullscreen app that we created before
    url = QUrl("./App.qml")
    context = engine.rootContext()
    seting = Setting()
    context.setContextProperty("_Setting", seting)
    engine.load(url)
    app.exec_()
```

### Python ファイルを実行するスクリプトを準備する

- **ステップ 1.** 以前に作成したルートフォルダを開き、そのフォルダの下に新しい **.sh ファイル** を作成します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-8.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 2.** 作成したファイルを開き、以下を入力します

```sh
#!/bin/bash
cd $HOME/ledApp
DISPLAY=:0 python3 main.py
```

**注意:** ここで **$HOME/ledApp** は **main.py** ファイルの場所です

- **ステップ 3.** reTerminal内でターミナルウィンドウを開き、アプリのルートディレクトリに移動します

```sh
example:
cd /ledApp
```

- **ステップ 4.** led_start.sh を実行可能ファイルにする

```sh
chmod +x led_start.sh
```

### アプリを起動するためのデスクトップファイルを準備する

- **ステップ 1.** 以前に作成したRootフォルダを開き、そのフォルダの下に新しい**.desktopファイル**を作成します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-9.png" alt="pir" width="400" height="auto"/></p>

- **ステップ 2.** 作成したファイルを開き、以下を入力します

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/ledApp/led_start.sh
Type=Application
Categories=Application;Development;
```

**注意：** **Exec** は、以前に作成したスクリプトの場所です

- **ステップ 3.** reTerminal内でターミナルウィンドウを開き、アプリのルートディレクトリに移動します

```sh
example:
cd /ledApp
```

- **ステップ 4.** led_start.sh を実行可能ファイルにする

```sh
chmod +x led.desktop
```

### アプリの起動

- **ステップ 1.** reTerminal LCDを使用して**ledAppフォルダ**に移動します

- **ステップ 2.** **LED Test**ファイルをダブルクリックします

以下のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

これでボタンをクリックすると、LEDが点灯するのを確認できます！

### アプリのデバッグ

開発中にアプリをデバッグするプロセスを見ていきましょう

- **ステップ 1.** 前述のように**Microsoft Visual Studio Code**を使用して**SSH**経由でreTerminalにログインします

- **ステップ 2.** **X11サーバー機能**を持つ[MobaXterm](https://mobaxterm.mobatek.net/)などのSSHアプリケーションを使用してSSH経由でreTerminalにログインします

**注意:** X11はreTerminalのディスプレイを転送してPC上にポップアップ表示するために必要です

- **ステップ 3.** Microsoft Visual Studio CodeでreTerminalにすべてのコードを書いた後、MobaXtermを使用して**main.pyファイル**を実行します

```sh
python3 main.py
```

## 直接テスト

上記の手順に従って環境を設定し、コードを直接コピーして実行してください。

```bash
git clone https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI
cd Python_ReTerminalQt5_LED_UI
python3 main.py
```

最終的に、出力が新しいウィンドウに表示されます。コードにエラーがある場合は、MobaXtermターミナルウィンドウに表示されます。

## ボーナスデモ

Python用Qtを使ったより興味深いデモを体験したい場合は、[このGitHubリポジトリ](https://github.com/Seeed-Studio/Seeed_Python_ReTerminalQt5Examples)をチェックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" alt="pir" width="1000" height="auto"/></p>

## リソース

- **[GitHub]** [Python_ReTerminalQt5_LED_UI](https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI)
- **[Webpage]** [Qt Documentation](https://doc.qt.io/qt-5/index.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
