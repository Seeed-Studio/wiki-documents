---
description: reTerminal用Flutter
title: reTerminal用Flutter
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-build-UI-using-Flutter
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

## はじめに

このwikiでは、Flutterを使用して独自のユーザーインターフェースを構築する方法について説明します。FlutterはGoogleによって作成されたオープンソースのUIソフトウェア開発キットです。単一のコードベースから、Android、iOS、Linux、Mac、Windows、Google Fuchsia、およびWebのクロスプラットフォームアプリケーションを開発するために使用されます。これは、一つのプログラミング言語と一つのコードベースを使用して、2つの異なるアプリ（iOS、Android、その他用）を作成できることを意味します。

Flutterで開発するには、Dartというプログラミング言語が必要です。DartはGoogleによって開発された、C言語スタイルの構文を持つオープンソースの汎用オブジェクト指向プログラミング言語です。

ここでは、Flutterを使用してPC上でアプリケーションを開発し、flutter-piを使用してreTerminal上でアプリケーションを実行します。flutter-piは、Xなしで動作するRaspberry Pi用の軽量Flutter Engine Embedderです。つまり、Raspberry Pi OS DesktopやX11、LXDEを起動する必要がありません。コマンドラインで起動してアプリケーションを実行するだけです。

以下のガイドに従うことで、LCD上のボタンをクリックするだけでreTerminal上のGPIOピンを制御するアプリケーションを作成できるようになります。それでは始めましょう！

## 開発環境の準備

### reTerminal上で

まず、reTerminal上に**flutter-pi**をインストールする必要があります。

> flutter-piのGitHubリポジトリにアクセスするには[こちら](https://github.com/ardera/flutter-pi)をクリックしてください

- **ステップ1.** [このwiki](https://wiki.seeedstudio.com/ja/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)で説明されているようにreTerminalにログインし、reTerminal上に**flutter engine binaries**をインストールします

```sh
git clone --depth 1 https://github.com/ardera/flutter-engine-binaries-for-arm.git engine-binaries
cd engine-binaries
sudo ./install.sh
```

- **ステップ 2.** cmake、グラフィックス、システムライブラリ、フォントをインストールする

```sh
sudo apt install cmake libgl1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdrm-dev libgbm-dev ttf-mscorefonts-installer fontconfig libsystemd-dev libinput-dev libudev-dev  libxkbcommon-dev
```

- **ステップ 3.** システムフォントを更新する

```sh
sudo fc-cache
```

- **ステップ 4.** flutter-piをクローンし、クローンしたディレクトリにcdで移動する

```sh
git clone https://github.com/ardera/flutter-pi
cd flutter-pi
```

- **ステップ 5.** flutter-piをコンパイルする

```sh
mkdir build && cd build
cmake ..
make -j`nproc`
```

- **ステップ 6.** flutter-piをインストールする

```sh
sudo make install
```

- **ステップ 7.** Open raspi-config

```sh
sudo raspi-config
```

- **ステップ 8.** `System Options > Boot / Auto Login` に移動してコンソールモードに切り替え、**Console または Console (Autologin)** を選択します

- **ステップ 9.** `Advanced Options > GL Driver > GL (Fake KMS)` に移動してV3Dグラフィックスドライバーを有効にします

- **ステップ 10.** `Performance Options -> GPU Memory` に移動してGPUメモリを設定し、**64** を入力します

- **ステップ 11.** キーボードの **ESC** を押して **rasp-config** ウィンドウを終了します

- **ステップ 12.** reTerminalに3Dアクセラレーションの使用許可を与えます。（注意：潜在的なセキュリティリスクがあります。これを行いたくない場合は、代わりに **sudo** を使用してflutter-piを起動してください。）

```sh
usermod -a -G render pi
```

- **ステップ 13.** Reboot reTerminal

```sh
sudo reboot
```

必要なツールのreTerminalへのインストールが完了しました

### ホストPC上で

次に、開発用のホストPCを準備する必要があります。ここでは、Flutter開発に必要なパッケージを含む**Flutter SDK**、コード編集用の**Android Studio**、そしてコードの実行とテストを行う**Android Emulator**をインストールします。

- **ステップ 1.** お使いのオペレーティングシステムに応じて[Flutter SDK](https://flutter.dev/docs/get-started/install)をダウンロードしてインストールします

- **ステップ 2.** ターミナルウィンドウで以下を入力して、Flutter SDKが正常にインストールされているかを確認します

```sh
flutter --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/flutter-version.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** お使いのオペレーティングシステムに応じて[Android Studio](https://developer.android.com/studio)をダウンロードしてインストールします

- **ステップ 4.** Android Studioを開き、`Configure > Plugins`に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-6.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 5.** **Marketplace**で、検索ボックスに**flutter**と入力し、**Install**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-7.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 6.** プロンプトウィンドウで**Install**をクリックして**Dart**プラグインもインストールします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-8.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 7.** **Restart IDE**をクリックして、インストールしたプラグインでIDEを再起動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-9.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 8.** IDEが再び開いたら、`Configure > AVD Manager`に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/android-studio-open.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 9.** **Create Virtual Device**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-1.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 10.** **New Hardware Profile**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-2.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 11.** 以下のように設定を構成します

  - Device Name: reTerminal
  - Device Type: Phone/ Tablet
  - Screen:

    - Screen size: 5inch
    - Resolution: 1280 x 720
  - Memory: RAM: 2048MB
  - Input: [✓] Has Hardware Buttons (Back/Home/Menu)
  - Supported device states: [✓] Landscape

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-3.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 12.** **Finish**をクリックし、次に**Next**をクリックします

- **ステップ 13.** 最新のAndroid Imageを選択し、**Next**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-4.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 14.** **Emulated Performance**で、加速されたパフォーマンスのために**Hardware - GLES 2.0**を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-5.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 15.** 最後に**Finish**をクリックします

これで開発環境の準備が正常に完了しました

## スマートランプ Flutter アプリケーション

### ハードウェア接続

テスト目的でreTerminalのGPIO 24にLEDを接続します。後で、リレーを追加してGPIOを使用して家電製品を制御することができます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="800" height="auto"/></p>

**注意:** GPIOピンとLEDの間に抵抗が必要です。そうしないとLEDが焼損します。

### アプリケーションの作成と初期化

- **ステップ 1.** Android Studioを開き、**Create New Flutter Project**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-10.png" alt="pir" width="550" height="auto"/></p>

- **ステップ 2.** **Flutter SDK path**は自動的に設定されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-11.png" alt="pir" width="800" height="auto"/></p>

**注意:** このウィンドウにFlutter SDK pathが表示されない場合は、手動でFlutter SDKの場所を指定できます

- **ステップ 3.** プロジェクトの詳細を以下のように入力し、**Finish**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-12.png" alt="pir" width="800" height="auto"/></p>

これで**main.dart**でサンプルプロジェクトが開きます

### main.dart（メインアプリ）の作成

**lib**フォルダ内の**main.dart**ファイルを使用してFlutterアプリケーションを作成します

**main.dart**ファイルを開き、以下のコードをコピーします

```dart
//library imports
import 'package:flutter/material.dart';
import 'package:flutter_gpiod/flutter_gpiod.dart';

//entry point for the app
void main() {
  runApp(MyApp());
}

// This is the main application widget.
class MyApp extends StatelessWidget {
  // Function for GPIO control
  void ledState(state) {
    // Retrieve the list of GPIO chips.
    final chips = FlutterGpiod.instance.chips;

    // Retrieve the line with index 24 of the first chip.
    // This is BCM pin 24 for the Raspberry Pi.
    final chip = chips.singleWhere(
          (chip) => chip.label == 'pinctrl-bcm2711',
      orElse: () =>
          chips.singleWhere((chip) => chip.label == 'pinctrl-bcm2835'),
    );

    final line2 = chip.lines[24];

    // Request BCM 24 as output.
    line2.requestOutput(consumer: "flutter_gpiod test", initialValue: false);
    line2.setValue(state);
    line2.release();
  }

  @override
  Widget build(BuildContext context) {
    // MaterialApp widget
    return MaterialApp(
      // Hide the debug banner at the top right corner
      debugShowCheckedModeBanner: false,
      // Scaffold widget
      home: Scaffold(
        // background color of the app.
        // Here after you type "Colors.", Android Studio will recommend the available colors. 
        // Also you can hover the mouse over to check the different color variations assigned 
        // by numbers enclosed by [ ].
        backgroundColor: Colors.grey[700],
        // AppBar widget
        appBar: AppBar(
          // background color of the appbar
          backgroundColor: Colors.black,
          // center align text inside appbar widget
          title: Center(
            child: Text(
              'LIVING ROOM',
            ),
          ),
        ),
        body: Center(
          // Row widge
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              // ON Button function
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {
                  print('ON');
                  ledState(true);
                },
                // ON Button styling
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[700],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
              // Google Material Icon of a Light Bulb
              Icon(
                Icons.lightbulb_outline,
                color: Colors.white,
                size: 200,
              ),
              // OFF Button function
              ElevatedButton(
                child: Text('OFF'),
                onPressed: () {
                  print('OFF');
                  ledState(false);
                },
                // OFF Button styling
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[300],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

#### Flutter で使用されるウィジェット

Flutter ウィジェットは、React からインスピレーションを得たモダンなフレームワークを使用して構築されています。中心的なアイデアは、ウィジェットからUIを構築することです。ウィジェットは、現在の設定と状態に基づいて、そのビューがどのように見えるべきかを記述します。

**StatelessWidget:** ステートレスウィジェットは、記述しているユーザーインターフェースの一部が、オブジェクト自体の設定情報とウィジェットが展開されるBuildContext以外の何にも依存しない場合に便利です。

**MaterialApp:** MaterialAppウィジェットは、マテリアルデザインアプリケーションで一般的に必要とされる多数のウィジェットをラップするウィジェットです。

**Scaffold:** Scaffoldウィジェットは、flutterアプリの基本的なマテリアルデザインビジュアルレイアウト構造を実装するフレームワークを提供します。ドロワー、スナックバー、ボトムシートを表示するためのAPIを提供します。

**Appbar:** Appbarは、flutterアプリケーションでツールバーを含むウィジェットです。

**Row:** Rowウィジェットは、その子要素を水平配列で表示するために使用されます。このウィジェット内でUI要素を使用します。

**ElevatedButton:** ElevatedButtonウィジェットは、押すことができ、それに応じて反応するボタンで構成されています。

#### Google Material Icons

アプリ内で**Google Material Icons**から**lightbulb**アイコンを使用しています。より多くのGoogle Material Iconsを探索するには、[このリンク](https://fonts.google.com/icons)をフォローし、ボタンを検索し、ボタンを選択してボタンのflutterコードを表示してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-14.png" alt="pir" width="800" height="auto"/></p>

### GPIO ライブラリのインストール

次に、Flutter アプリケーションに GPIO 制御ライブラリをインストールします。ここでは [flutter_gpiod](https://pub.dev/packages/flutter_gpiod/versions/0.4.0-nullsafety) という GPIO ライブラリを使用します。

- **ステップ 1.** GPIO ライブラリをインストールするには、Flutter プロジェクト内の **pubspec.yaml** ファイルに移動し、**dependencies:** の下に以下を追加します：

```yaml
dependencies:
  flutter_gpiod: ^0.4.0-nullsafety
```

- **ステップ 2.** ファイルを保存し、**Pub get** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-17.jpg" alt="pir" width="520" height="auto"/></p>

### アプリをテストする

- **ステップ 1.** **main.dart** ファイルを開きます

- **ステップ 2.** **no device selected** ボタンをクリックし、先ほど作成したAndroidデバイスを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-13.1.jpg" alt="pir" width="800" height="auto"/></p>

以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-5.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** **再生ボタン** をクリックしてアプリケーションを実行します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-14.png" alt="pir" width="800" height="auto"/></p>

Androidエミュレーター上で以下のアプリケーションが実行されているのが確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

### アプリケーションをビルドしてreTerminalに転送する

次に、FlutterアプリケーションをビルドしてreTerminalに転送します

- **ステップ 1.** Android Studio内でターミナルウィンドウを開きます。`View > Tool Windows > Terminal` に移動します

- **ステップ 2.** 以下を入力してビルドの準備をします

```sh
flutter clean
```

- **ステップ 3.** Build the project

```sh
flutter build bundle
```

- **ステップ 4.** reTerminalの電源を入れる

**注意:** reTerminalがコマンドラインモードで起動することがわかります

- **ステップ 5.** ビルドしたプロジェクトをreTerminalに転送する

```sh
scp -r ./build/flutter_assets pi@<ip_address_of_reTerminal>:/home/pi/testapp
```

## reTerminal でアプリケーションを起動する

- **ステップ 1.** reTerminal のコマンドラインで以下を入力します

```sh
flutter-pi /home/pi/testapp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

**ON**と**OFF**ボタンを押すと、GPIO 24に接続されたLEDが対応して反応し始めることがわかります！

GPIOピンにリレーを追加して家電製品を制御し、reTerminal上で完全なスマートホームソリューションを構築することで、これをさらに拡張することもできます！

## ボーナスデモ

Flutterでより興味深いデモを体験したい場合は、[このGitHubリポジトリ](https://github.com/lakshanthad/Flutter_reTerminal_Smart_Home_UI)をチェックしてください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" alt="pir" width="800" height="auto"/></p>

## リソース

- **[GitHub]** [flutter-pi](https://github.com/ardera/flutter-pi)
- **[Webpage]** [公式Flutterドキュメント](https://flutter.dev/docs)
- **[GitHub]** [Flutterデモソースコード](https://github.com/lakshanthad/Flutter_reTerminal_LED_UI)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
