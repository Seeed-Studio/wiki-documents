---
description: reTerminal用Electron
title: reTerminal用Electron
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-build-UI-using-Electron
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## はじめに

このwikiでは、Electronを使用して独自のユーザーインターフェースを構築する方法について説明します。Electronは、HTML、CSS、JavaScriptなどのWeb技術を使用してネイティブデスクトップアプリケーション（Windows、Mac、Linux）を作成するためのオープンソースフレームワークです。つまり、Webサイトを構築できれば、デスクトップアプリも構築できるということです！

以下のガイドに従うことで、LCDのボタンをクリックするだけでreTerminalのGPIOピンを制御するアプリケーションを作成できるようになります。それでは始めましょう！

## 開発環境の準備

### reTerminal上で

まず、reTerminal上に**Node.js**と**npm**をインストールします。npmはNode.jsパッケージのパッケージマネージャーです。

- **ステップ1.** [こちら](https://wiki.seeedstudio.com/ja/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)で説明されているように、**オンボードLCD、外部ディスプレイ、またはSSH**を使用してreTerminalにアクセスします

- **ステップ2.** パッケージをアップグレードします

```sh
sudo apt update
sudo apt full-upgrade 
```

- **ステップ 3.** Node.jsをインストールするスクリプトをダウンロードする

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

- **ステップ 4.** Node.js をインストールする

```sh
sudo apt install -y nodejs
```

Node.jsがreTerminalにインストールされました。インストールが成功したかどうかを確認するには、以下のコマンドを実行して**Node.js**と**npm**のバージョンを確認してください

```sh
node -v
npm -v
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"/></p>

### ホストPC上で

次に、開発用にMicrosoft Visual Studio Codeをセットアップします。

- **ステップ1.** [Microsoft Visual Studio Code](https://code.visualstudio.com/)をダウンロードしてインストールします

**注意:** お使いのオペレーティングシステムに適したインストーラーをダウンロードしてください

- **ステップ2.** 左側のナビゲーションメニューの**Extensions**タブをクリックし、検索ボックスに**remote development**と入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **ステップ3.** **Remote Development**を選択し、**Install**をクリックします

- **ステップ4.** キーボードで**F1**を押し、**ssh**と入力して**Remote-SSH:Connect to Host...**を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **ステップ5.** 以下を入力します

```sh
pi@192.xxx.xx.xx
```

**注意:** **pi** はユーザー名で、**192.xxx.xx.xx** は reTerminal の IP アドレスです

- **ステップ 6.** ユーザーのパスワードを入力します

これで SSH を使用して reTerminal に正常にログインし、開発環境の準備が正常に完了しました

## Smart Light Electron アプリケーション

次に、LCD 上のボタンを押すことで reTerminal の GPIO を制御できる **Smart Light Electron アプリケーション** を構築します。その後、リレーを GPIO に接続して家電製品も制御できます！

### ハードウェア接続

テスト目的で reTerminal の **GPIO 24** に **LED** を接続します。後でリレーを追加して GPIO を使用して家電製品を制御できます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="1000" height="auto"/></p>

**注意:** GPIO ピンと LED の間には抵抗が必要です。そうしないと LED が焼損します。

### アプリケーションの作成と初期化

- **ステップ 1.** ホスト PC で VSCode を開き、前述の通り SSH 経由で reTerminal にログインします

- **ステップ 2.** `File > Open Folder...` に移動し、reTerminal 上の任意のフォルダを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-1.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 3.** 新しいフォルダを作成して名前を付けます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-2.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-3.png" alt="pir" width="550" height="auto"/></p>

- **ステップ 4.** `Terminal > New Terminal` に移動し、新しく作成したフォルダに移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-4.png" alt="pir" width="550" height="auto"/></p>

**注意:** ここでは **cd** を使用してディレクトリを変更します

- **ステップ 5.** このターミナルウィンドウ内で以下を入力して、Node.js アプリに必要な設定を含む **package.json** ファイルを作成します

```sh
npm init
```

**注意:** デフォルトの回答を使用するために **ENTER** を押し続けますが、**entry point: (index.js)** を **main.js** に設定し、**test command:** を **electron .** に設定してください（**electron** の後にスペースとドットを使用）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-5.png" alt="pir" width="550" height="auto"/></p>

後で設定を変更したい場合は、メインアプリフォルダ内の **package.json** ファイルにアクセスできます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-6.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 6.** VSCode内のターミナルで、以下を入力して **Electron** をインストールします

```sh
npm install --save-dev electron
```

Electronが正常にインストールされた場合、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-7.png" alt="pir" width="700" height="auto"/></p>

また、Electronを実行するために必要なパッケージが含まれた**node_modules**フォルダが生成されることも確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-8.png" alt="pir" width="500" height="auto"/></p>

#### onoff npm モジュールのインストール

onoff npm モジュールを使用すると、Electronアプリを使用してreTerminal上のGPIOにアクセスし、制御することができます

- **ステップ 1.** 前述の説明に従ってVSCode内でターミナルウィンドウを開き、メインアプリディレクトリに移動します

- **ステップ 2.** 以下を入力して**onoff** npm モジュールをインストールします

```sh
npm install onoff
```

#### electron-rebuild npm モジュールのインストールと実行

electron-rebuild npm モジュールは、Electron プロジェクトが使用している Node.js のバージョンに対してネイティブ Node.js モジュールを再ビルドします。これにより、システムの Node.js バージョンが正確に一致しなくても（多くの場合一致せず、時には不可能な場合もあります）、Electron アプリでネイティブ Node.js モジュールを使用できるようになります。

- **ステップ 1.** **electron-rebuild** npm モジュールをインストール

```sh
npm install --save-dev electron-rebuild
```

- **ステップ 2.** electron-rebuildを実行する

```sh
./node_modules/.bin/electron-rebuild
```

**注意:** 新しいnpmパッケージをインストールするたびに、electron-rebuildを再実行してください

### HTML（基本UI）の作成

HTMLファイルを使用して、スタイリングなしの基本的なユーザーインターフェースを作成します。このHTMLファイルは、画面上にUI要素を表示する役割を担います。

メインアプリディレクトリ内に、**index.html**という新しいファイルを作成し、以下のコードをコピーしてください

```html
<!doctype html>
<html>
    <head>
        <!-- Specify the character encoding for the HTML document -->
        <meta charset="UTF-8">
        <!-- App title bar -->
        <title>Test Application</title>
        <!-- Load the material icons api -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- Load the google fonts api -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
        <!-- Load style.css with UI styling -->
        <link rel="stylesheet" href="style.css">
        <!-- Embed  JavaScript code -->
        <script>
            // Load ipcRenderer module
            const { ipcRenderer } = require('electron');
            // Function to turn ON the GPIO on button press
            function buttonclick1()
            {
                // This will send 1 as a message to the main process with "msg" as the channel name
                ipcRenderer.send("msg1",1)
            }
            
            // Function to turn OFF the GPIO on button press
            function buttonclick2()
            {
                ipcRenderer.send("msg2",0)
            }

            // Function to close the app on button press
            function buttonclick3()
            {
                ipcRenderer.send("close-me")
            }
        </script>
    </head>
    <body>
        <!-- Application close button -->
        <button class="button3" onclick="buttonclick3()">X</button>
        <br>
        <!-- Application heading -->
        <h1>SMART LAMP</h1>
        <!-- Lightbulb icon from the material icons api -->
        <i class="material-icons">lightbulb</i>
        <br>
        <!-- Empty lines -->
        <br>
        <!-- ON button with class attribute for styling 
        and onclick attribute for button click event -->
        <button class="button1" onclick="buttonclick1()">ON</button>
        <br>
        <button class="button2" onclick="buttonclick2()">OFF</button>
    </body>
</html>
```

**注意:** **ipcRenderer モジュール**は EventEmitter です。レンダープロセス（ウェブページ - html/css）からメインプロセス（main.js）にメッセージを送信するためのいくつかのメソッドを提供します。メインプロセスからの返信を受信することもできます。

これで HTML ファイルの作成が完了しました。

**npm test** を実行すると、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-15.png" alt="pir" width="1000" height="auto"/></p>

### CSS（スタイリング）の作成

CSS ファイルを使用して、HTML ファイルで作成したユーザーインターフェースに異なるスタイリングを追加します

メインアプリディレクトリ内で、**style.css** という新しいファイルを作成し、以下のコードをコピーしてください

```css
/* Styling for the body of the app */
body {
    background-color: rgb(141, 141, 141);
}

/* Styling for heading of the app */
h1 {
    font-size: 60px;
    text-align: center;
    font-family: "Roboto", "Courier New", monospace;
    color: rgb(255, 255, 255);
}

/* Styling for the light bulb */
.material-icons{
    font-size: 250px;
    color: rgb(204, 202, 71);
    display: flex;
    justify-content: center;
}

/* Styling for the ON button */
.button1 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 35px;
    text-align: center;
    outline: none;
    color: rgb(255, 255, 255);
    background-color:rgb(76, 175, 80);
    border: none;
    border-radius: 15px;
    width: 20%;
    margin:auto;
    display:grid;
  }

/* Button press effect for ON button */
.button1:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}

/* Hover effect for ON button */
.button1:hover {background-color: rgb(62, 142, 65)}

/* Styling for OFF button */
.button2 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 35px;
    text-align: center;
    outline: none;
    color: rgb(255, 255, 255);
    background-color:rgb(207, 85, 85);
    border: none;
    border-radius: 15px;
    width: 20%;
    margin:auto;
    display:grid;
}

/* Button press effect for OFF button */
.button2:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}
  
/* Hover effect for OFF button */  
.button2:hover {background-color: rgb(179, 44, 44)}

/* Styling for Close button */
.button3 {
  padding: 8px 25px;
  font-size: 20px;
  text-align: center;
  outline: none;
  color: rgb(255, 255, 255);
  background-color:rgb(179, 44, 44);
  border: none;
  width: 6%;
  margin:auto;
  display:grid;
  float: right;
}
```

アプリの最終出力は以下のようになります

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-16.png" alt="pir" width="1000" height="auto"/></p>

### Javascript の作成（アプリの読み込みと実行）

Javascript ファイルを使用してアプリケーションウィンドウを作成し、HTML ファイルの読み込みを表示し、GPIO 機能を追加します。

メインアプリディレクトリ内で、**main.js** という新しいファイルを作成し、以下のコードをコピーしてください

```javascript
var Gpio = require('onoff').Gpio; //include onoff module to interact with the GPIO
var LED = new Gpio(24, 'out'); //initialize GPIO 24 as an output

// Include app, BrowserWindow and ipcMain module
const { app, BrowserWindow, ipcMain } = require('electron')
/* Use ipcMain module to receive the messages from the ipcRenderer module and 
turn ON the GPIO*/
ipcMain.on("msg1",(event,data)=>{
  LED.writeSync(data);
})

/* Use ipcMain module to receive the messages from the ipcRenderer module and 
turn OFF the GPIO */
ipcMain.on("msg2",(event,data)=>{
  LED.writeSync(data);
})

/* Use ipcMain module to receive the messages from the ipcRenderer module and 
close the app */
ipcMain.on("close-me", (event, arg) => {
    app.quit()
})

// Create application window
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        // Make the app fullscreen
        "fullscreen": true,
        webPreferences: {
            // enable the communication between the main and rendered process
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    // Load the HTML page with CSS styling
    mainWindow.loadFile('index.html');
});
```

**注意:** **ipcMain** はレンダラープロセス（ウェブページ）から送信されたメッセージを受信するためのいくつかのメソッドを提供します。

### アプリのテスト

**electron-rebuild** を有効にしているため、前のファイルを保存するとすぐに出力が表示されます。ただし、アプリを閉じた場合は、**npm test** を使用して再度開くことができ、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## アプリを実行するスクリプトの準備

- **ステップ 1.** 以前に作成したルートフォルダを開き、そのフォルダの下に新しい **.sh ファイル** を作成します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-18.png" alt="pir" width="350" height="auto"/></p>

- **ステップ 2.** 作成したファイルを開き、以下を入力します

```sh
#!/bin/bash
cd $HOME/Desktop/testapp
DISPLAY=:0 npm test
```

**注意:** ここで **$HOME/Desktop/testapp** は electron プロジェクトの場所です

- **ステップ 3.** VSCode 内でターミナルウィンドウを開き、アプリのルートディレクトリに移動します

```sh
example:
cd ~/Desktop/testapp
```

- **ステップ4.** ledstart.shを実行可能ファイルにする

```sh
sudo chmod +x ledstart.sh
```

## アプリを起動するためのデスクトップファイルを準備する

- **ステップ 1.** **Desktop フォルダ**を開き、そのフォルダの下に新しい **.desktop ファイル**を作成します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-20.png" alt="pir" width="340" height="auto"/></p>

- **ステップ 2.** 作成したファイルを開き、以下を入力します

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/Desktop/testapp/ledStart.sh
Type=Application
Categories=Application;Development;
```

**注意：** **Exec** は、以前に作成したスクリプトの場所です

- **ステップ 3.** VSCode 内でターミナルウィンドウを開き、デスクトップに移動します

```sh
example:
cd ~/Desktop
```

- **ステップ 4.** **ledStart.desktop** を実行可能ファイルにする

```sh
sudo chmod +x ledStart.desktop
```

### アプリの起動

reTerminal LCDのデスクトップにある**LED Test**ファイルをダブルクリックします

以下のような出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

これでボタンをクリックするとLEDが点灯するのを確認できます！

## アプリのデバッグ

開発中にアプリをデバッグするプロセスを見ていきましょう

- **ステップ 1.** 前述のように**Microsoft Visual Studio Code**を使用して**SSH**経由でreTerminalにログインします

- **ステップ 2.** **X11サーバー機能**を持つ[MobaXterm](https://mobaxterm.mobatek.net/)などのSSHアプリケーションを使用してSSH経由でreTerminalにログインします

**注意:** X11はreTerminalのディスプレイを転送してPC上にポップアップ表示するために必要です

- **ステップ 3.** Microsoft Visual Studio CodeですべてのコードをreTerminalに書き込んだ後、メインアプリディレクトリに移動して以下を実行します

```sh
npm test
```

最終的に、新しいウィンドウに出力が表示されます。コードにエラーがある場合は、MobaXtermターミナルウィンドウに表示されます。

## FAQ

### Q: アプリを保存する際に自動更新を設定するにはどうすればよいですか？

これには、electron-reloader npmモジュールを使用してHot Reload機能を設定できます

- **ステップ 1.** **electron-reloader**をインストール

```sh
npm install --save-dev electron-reloader
```

- **ステップ 2.** **main.js** ファイルの末尾に以下の行を追加します

```javascript
try {
  require('electron-reloader')(module)
} catch (_) {}
```

**npm test** を一度実行すると、ファイルを保存するたびにアプリケーションが更新されます。プロジェクト内のコンテンツを変更するたびに **npm test** を実行する必要はありません。

## ボーナスデモ

Electron を使ったより興味深いデモを体験したい場合は、[この GitHub リポジトリ](https://github.com/lakshanthad/Electron_reterminal_hardware)をチェックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" alt="pir" width="1000" height="auto"/></p>

## リソース

- **[GitHub]** [Electron_reTerminal_Smart_Lamp_UI](https://github.com/lakshanthad/Electron_reTerminal_Smart_Lamp_UI)
- **[Webpage]** [Electron Documentation](https://www.electronjs.org/docs/api)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
