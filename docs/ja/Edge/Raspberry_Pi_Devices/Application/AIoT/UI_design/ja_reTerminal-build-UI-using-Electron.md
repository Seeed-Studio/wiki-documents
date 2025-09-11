---
description: reTerminal 用の Electron
title: reTerminal 用の Electron
keywords:
  - Edge
  - reTerminal アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-build-UI-using-Electron
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## はじめに

このウィキでは、Electron を使用して独自のユーザーインターフェースを構築する方法を説明します。Electron は、HTML、CSS、JavaScript などの Web 技術を使用して、ネイティブデスクトップアプリケーション（Windows、Mac、Linux）を作成するためのオープンソースフレームワークです。つまり、ウェブサイトを構築できるなら、デスクトップアプリも構築できるということです！

以下のガイドに従うことで、LCD 上のボタンをクリックするだけで reTerminal の GPIO ピンを制御するアプリケーションを作成できるようになります。それでは始めましょう！

## 開発環境の準備

### reTerminal 上での作業

まず、reTerminal に **Node.js** と **npm** をインストールします。npm は Node.js パッケージのパッケージマネージャです。

- **ステップ 1.** [こちら](https://wiki.seeedstudio.com/ja/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)で説明されているように、**オンボード LCD、外部ディスプレイ、または SSH** を使用して reTerminal にアクセスします。

- **ステップ 2.** パッケージをアップグレードします。

```sh
sudo apt update
sudo apt full-upgrade 
```

- **ステップ 3.** Node.js をインストールするためのスクリプトをダウンロードします。

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

- **ステップ 4.** Node.js をインストールします。

```sh
sudo apt install -y nodejs
```

これで reTerminal に Node.js がインストールされました。インストールが成功したかどうかを確認するには、以下のコマンドを実行して **Node.js** と **npm** のバージョンを確認してください。

```sh
node -v
npm -v
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"/></p>

### ホスト PC 上での作業

次に、開発のために Microsoft Visual Studio Code をセットアップします。

- **ステップ 1.** [Microsoft Visual Studio Code](https://code.visualstudio.com/) をダウンロードしてインストールします。

**注意:** お使いのオペレーティングシステムに適したインストーラーをダウンロードしてください。

- **ステップ 2.** 左側のナビゲーションメニューの **拡張機能** タブをクリックし、検索ボックスに **remote development** と入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** **Remote Development** を選択し、**インストール** をクリックします。

- **ステップ 4.** キーボードで **F1** を押し、**ssh** と入力して **Remote-SSH:Connect to Host...** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 5.** 以下を入力します。

```sh
pi@192.xxx.xx.xx
```

**注意:** **pi** はユーザー名で、**192.xxx.xx.xx** は reTerminal の IP アドレスです。

- **ステップ 6.** ユーザーのパスワードを入力します。

これで、SSH を使用して reTerminal にログインし、開発環境の準備が完了しました。

## スマートライト Electron アプリケーション

ここでは、reTerminal の LCD 上のボタンを押すことで GPIO を制御できる **スマートライト Electron アプリケーション** を構築します。その後、GPIO にリレーを接続して家電製品を制御することも可能です！

### ハードウェア接続

テスト目的で、reTerminal の **GPIO 24** に **LED** を接続します。後でリレーを追加し、GPIO を使用して家電製品を制御することができます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="1000" height="auto"/></p>

**注意:** GPIO ピンと LED の間に抵抗を挟む必要があります。そうしないと LED が焼損する可能性があります。

### アプリケーションの作成と初期化

- **ステップ 1.** ホスト PC 上で VSCode を開き、以前説明した方法で SSH を使用して reTerminal にログインします。

- **ステップ 2.** `File > Open Folder...` に移動し、reTerminal 上の任意のフォルダを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-1.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 3.** 新しいフォルダを作成し、名前を付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-2.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-3.png" alt="pir" width="550" height="auto"/></p>

- **ステップ 4.** `Terminal > New Terminal` に移動し、新しく作成したフォルダに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-4.png" alt="pir" width="550" height="auto"/></p>

**注意:** ここでは **cd** を使用してディレクトリを変更します。

- **ステップ 5.** このターミナルウィンドウ内で以下を入力し、Node.js アプリ用の必要な設定を含む **package.json** ファイルを作成します。

```sh
npm init
```

**注意:** デフォルトの回答を使用するには **ENTER** を押し続けます。ただし、**entry point: (index.js)** を **main.js** に設定し、**test command:** を **electron .**（**electron** の後にスペースとドットを使用）に設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-5.png" alt="pir" width="550" height="auto"/></p>

後で設定を変更したい場合は、メインアプリフォルダ内の **package.json** ファイルを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-6.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 6.** VSCode 内のターミナルで以下を入力して **Electron** をインストールします。

```sh
npm install --save-dev electron
```

Electron が正常にインストールされると、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-7.png" alt="pir" width="700" height="auto"/></p>

また、Electron を実行するために必要なパッケージを含む **node_modules** フォルダが生成されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-8.png" alt="pir" width="500" height="auto"/></p>

#### onoff npm モジュールのインストール

onoff npm モジュールを使用すると、Electron アプリを使用して reTerminal の GPIO にアクセスして制御できます。

- **ステップ 1.** 前述の方法で VSCode 内にターミナルウィンドウを開き、メインアプリディレクトリに移動します。

- **ステップ 2.** 以下を入力して **onoff** npm モジュールをインストールします。

```sh
npm install onoff
```

#### electron-rebuild npm モジュールのインストールと実行

electron-rebuild npm モジュールは、Electron プロジェクトが使用している Node.js のバージョンに対してネイティブ Node.js モジュールを再構築します。これにより、システムの Node.js バージョンが正確に一致しなくても（しばしば一致しない、または不可能な場合があります）、Electron アプリでネイティブ Node.js モジュールを使用できます。

- **ステップ 1.** **electron-rebuild** npm モジュールをインストールします。

```sh
npm install --save-dev electron-rebuild
```

- **ステップ 2.** electron-rebuild を実行します。

```sh
./node_modules/.bin/electron-rebuild
```

**注意:** 新しい npm パッケージをインストールするたびに、electron-rebuild を再実行してください。

### HTML の作成（基本的な UI）

HTML ファイルを使用して、スタイリングなしの基本的なユーザーインターフェースを作成します。この HTML ファイルは、画面上に UI 要素を表示する役割を果たします。

メインアプリディレクトリ内に **index.html** という新しいファイルを作成し、以下のコードをコピーします。

```html
<!doctype html>
<html>
    <head>
        <!-- HTML ドキュメントの文字エンコーディングを指定 -->
        <meta charset="UTF-8">
        <!-- アプリのタイトルバー -->
        <title>Test Application</title>
        <!-- material icons API を読み込む -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- Google Fonts API を読み込む -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
        <!-- UI スタイリング用の style.css を読み込む -->
        <link rel="stylesheet" href="style.css">
        <!-- JavaScript コードを埋め込む -->
        <script>
            // ipcRenderer モジュールを読み込む
            const { ipcRenderer } = require('electron');
            // ボタンを押したときに GPIO を ON にする関数
            function buttonclick1()
            {
                // "msg" というチャンネル名でメインプロセスに 1 をメッセージとして送信
                ipcRenderer.send("msg1",1)
            }
            
            // ボタンを押したときに GPIO を OFF にする関数
            function buttonclick2()
            {
                ipcRenderer.send("msg2",0)
            }

            // ボタンを押したときにアプリを閉じる関数
            function buttonclick3()
            {
                ipcRenderer.send("close-me")
            }
        </script>
    </head>
    <body>
        <!-- アプリケーションの閉じるボタン -->
        <button class="button3" onclick="buttonclick3()">X</button>
        <br>
        <!-- アプリケーションの見出し -->
        <h1>SMART LAMP</h1>
        <!-- material icons API からの電球アイコン -->
        <i class="material-icons">lightbulb</i>
        <br>
        <!-- 空行 -->
        <br>
        <!-- ON ボタン（スタイリング用の class 属性とボタンクリックイベント用の onclick 属性を含む） -->
        <button class="button1" onclick="buttonclick1()">ON</button>
        <br>
        <button class="button2" onclick="buttonclick2()">OFF</button>
    </body>
</html>
```

**注意:** **ipcRenderer モジュール**は EventEmitter です。このモジュールは、レンダープロセス（ウェブページ - HTML/CSS）からメインプロセス（main.js）にメッセージを送信するためのいくつかのメソッドを提供します。また、メインプロセスからの返信を受け取ることもできます。

これで HTML ファイルの作成が完了しました。

**npm test** を実行すると、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-15.png" alt="pir" width="1000" height="auto"/></p>

### CSS（スタイリング）の作成

CSS ファイルを使用して、HTML ファイルで作成したユーザーインターフェースにさまざまなスタイリングを追加します。

メインアプリディレクトリ内に **style.css** という新しいファイルを作成し、以下のコードをコピーしてください。

```css
/* アプリのボディのスタイリング */
body {
    background-color: rgb(141, 141, 141);
}

/* アプリのヘッディングのスタイリング */
h1 {
    font-size: 60px;
    text-align: center;
    font-family: "Roboto", "Courier New", monospace;
    color: rgb(255, 255, 255);
}

/* 電球のスタイリング */
.material-icons{
    font-size: 250px;
    color: rgb(204, 202, 71);
    display: flex;
    justify-content: center;
}

/* ON ボタンのスタイリング */
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

/* ON ボタンの押下時のエフェクト */
.button1:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}

/* ON ボタンのホバーエフェクト */
.button1:hover {background-color: rgb(62, 142, 65)}

/* OFF ボタンのスタイリング */
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

/* OFF ボタンの押下時のエフェクト */
.button2:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}
  
/* OFF ボタンのホバーエフェクト */  
.button2:hover {background-color: rgb(179, 44, 44)}

/* Close ボタンのスタイリング */
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

アプリの最終的な出力は以下のようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-16.png" alt="pir" width="1000" height="auto"/></p>

### Javascript の作成（アプリのロードと実行）

Javascript ファイルを使用して、アプリケーションウィンドウを作成し、HTML ファイルをロードして表示し、GPIO 機能を追加します。

メインアプリディレクトリ内に **main.js** という新しいファイルを作成し、以下のコードをコピーしてください。

```javascript
var Gpio = require('onoff').Gpio; // onoff モジュールをインクルードして GPIO を操作
var LED = new Gpio(24, 'out'); // GPIO 24 を出力として初期化

// app, BrowserWindow, ipcMain モジュールをインクルード
const { app, BrowserWindow, ipcMain } = require('electron')
/* ipcMain モジュールを使用して ipcRenderer モジュールからのメッセージを受信し、
GPIO を ON にする */
ipcMain.on("msg1",(event,data)=>{
  LED.writeSync(data);
})

/* ipcMain モジュールを使用して ipcRenderer モジュールからのメッセージを受信し、
GPIO を OFF にする */
ipcMain.on("msg2",(event,data)=>{
  LED.writeSync(data);
})

/* ipcMain モジュールを使用して ipcRenderer モジュールからのメッセージを受信し、
アプリを閉じる */
ipcMain.on("close-me", (event, arg) => {
    app.quit()
})

// アプリケーションウィンドウを作成
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        // アプリをフルスクリーンにする
        "fullscreen": true,
        webPreferences: {
            // メインプロセスとレンダープロセス間の通信を有効化
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    // CSS スタイリング付きの HTML ページをロード
    mainWindow.loadFile('index.html');
});
```

**注意:** **ipcMain** は、レンダープロセス（ウェブページ）から送信されたメッセージを受信するためのいくつかのメソッドを提供します。

### アプリのテスト

前のファイルを保存すると、**electron-rebuild** をオンにしているため、すぐに出力が表示されます。ただし、アプリを閉じた場合は、再度 **npm test** を使用してアプリを開き、以下の出力を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## アプリを実行するスクリプトを準備する

- **ステップ 1.** 以前作成したルートフォルダを開き、そのフォルダ内に新しい **.sh ファイル** を作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-18.png" alt="pir" width="350" height="auto"/></p>

- **ステップ 2.** 作成したファイルを開き、以下を入力します。

```sh
#!/bin/bash
cd $HOME/Desktop/testapp
DISPLAY=:0 npm test
```

**注意:** ここで **$HOME/Desktop/testapp** は Electron プロジェクトの場所を指します。

- **ステップ 3.** VSCode 内でターミナルウィンドウを開き、アプリのルートディレクトリに移動します。

```sh
例:
cd ~/Desktop/testapp
```

- **ステップ 4.** ledstart.sh を実行可能ファイルにします。

```sh
sudo chmod +x ledstart.sh
```

## アプリを起動するデスクトップファイルを準備する

- **ステップ 1.** **Desktop フォルダ**を開き、そのフォルダ内に新しい **.desktop ファイル** を作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-20.png" alt="pir" width="340" height="auto"/></p>

- **ステップ 2.** 作成したファイルを開き、以下を入力します。

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/Desktop/testapp/ledStart.sh
Type=Application
Categories=Application;Development;
```

**注意:** **Exec** は先ほど作成したスクリプトの場所を指します。

- **ステップ 3.** VSCode 内でターミナルウィンドウを開き、Desktop に移動します。

```sh
例:
cd ~/Desktop
```

- **ステップ 4.** **ledStart.desktop** を実行可能ファイルにします。

```sh
sudo chmod +x ledStart.desktop
```

### アプリを起動する

reTerminal LCD のデスクトップ上にある **LED Test** ファイルをダブルクリックします。

以下のような出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

これでボタンをクリックすると、LED が点灯するのが確認できます！

## アプリをデバッグする

開発中にアプリをデバッグする手順を説明します。

- **ステップ 1.** 以前説明したように、**Microsoft Visual Studio Code** を使用して **SSH** 経由で reTerminal にログインします。

- **ステップ 2.** **MobaXterm** のような SSH アプリケーションを使用して reTerminal に SSH 経由でログインします。この際、**X11 サーバー機能**を有効にします。

**注意:** X11 は reTerminal のディスプレイを PC 上に転送して表示するために必要です。

- **ステップ 3.** Microsoft Visual Studio Code 上で reTerminal にコードを書き込んだ後、メインアプリディレクトリに移動し、以下を実行します。

```sh
npm test
```

最終的に、新しいウィンドウに出力が表示されます。コードにエラーがある場合は、MobaXterm のターミナルウィンドウに表示されます。

## FAQ

### Q: アプリを保存するたびに自動更新するにはどうすればよいですか？

これには、electron-reloader npm モジュールを使用してホットリロード機能を設定できます。

- **ステップ 1.** **electron-reloader** をインストールします。

```sh
npm install --save-dev electron-reloader
```

- **ステップ 2.** **main.js** ファイルの末尾に以下の行を追加します。

```javascript
try {
  require('electron-reloader')(module)
} catch (_) {}
```

これで **npm test** を一度実行すると、ファイルを保存するたびにアプリケーションが更新されます。プロジェクト内の内容を変更するたびに **npm test** を実行する必要はありません。

## ボーナスデモ

Electron を使用したより興味深いデモを体験したい場合は、[この GitHub リポジトリ](https://github.com/lakshanthad/Electron_reterminal_hardware)をチェックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" alt="pir" width="1000" height="auto"/></p>

## リソース

- **[GitHub]** [Electron_reTerminal_Smart_Lamp_UI](https://github.com/lakshanthad/Electron_reTerminal_Smart_Lamp_UI)
- **[Webページ]** [Electron ドキュメント](https://www.electronjs.org/docs/api)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>