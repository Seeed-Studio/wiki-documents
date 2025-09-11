---
description: Flutter for reTerminal
title: Flutter for reTerminal
keywords:
  - Edge
  - reTerminal アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-build-UI-using-Flutter
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

## はじめに

このウィキでは、Flutterを使用して独自のユーザーインターフェースを構築する方法を説明します。FlutterはGoogleによって作成されたオープンソースのUIソフトウェア開発キットです。Android、iOS、Linux、Mac、Windows、Google Fuchsia、そしてWeb向けのクロスプラットフォームアプリケーションを単一のコードベースから開発するために使用されます。つまり、1つのプログラミング言語と1つのコードベースを使用して、iOSやAndroidなどの異なる2つのアプリを作成することができます。

Flutterを使用して開発するには、Dartというプログラミング言語が必要です。DartはGoogleによって開発されたオープンソースの汎用オブジェクト指向プログラミング言語で、Cスタイルの構文を持っています。

ここでは、PC上でFlutterを使用してアプリケーションを開発し、そのアプリケーションをflutter-piを使用してreTerminal上で実行します。flutter-piは、Xを使用せずに動作するRaspberry Pi向けの軽量Flutterエンジンエンベッダーです。つまり、Raspberry Pi OSデスクトップに起動してX11やLXDEをロードする必要はありません。コマンドラインに起動してアプリケーションを実行するだけで済みます。

以下のガイドに従うことで、LCD上のボタンをクリックするだけでreTerminalのGPIOピンを制御するアプリケーションを作成することができます。それでは始めましょう！

## 開発環境の準備

### reTerminal上で

まず、reTerminalに**flutter-pi**をインストールする必要があります。

> flutter-piのGitHubリポジトリには[こちら](https://github.com/ardera/flutter-pi)からアクセスできます。

- **ステップ 1.** [このウィキ](https://wiki.seeedstudio.com/ja/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)で説明されているようにreTerminalにログインし、reTerminalに**flutterエンジンバイナリ**をインストールします。

```sh
git clone --depth 1 https://github.com/ardera/flutter-engine-binaries-for-arm.git engine-binaries
cd engine-binaries
sudo ./install.sh
```

- **ステップ 2.** cmake、グラフィックス、システムライブラリ、フォントをインストールします。

```sh
sudo apt install cmake libgl1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdrm-dev libgbm-dev ttf-mscorefonts-installer fontconfig libsystemd-dev libinput-dev libudev-dev  libxkbcommon-dev
```

- **ステップ 3.** システムフォントを更新します。

```sh
sudo fc-cache
```

- **ステップ 4.** flutter-piをクローンし、クローンしたディレクトリに移動します。

```sh
git clone https://github.com/ardera/flutter-pi
cd flutter-pi
```

- **ステップ 5.** flutter-piをコンパイルします。

```sh
mkdir build && cd build
cmake ..
make -j`nproc`
```

- **ステップ 6.** flutter-piをインストールします。

```sh
sudo make install
```

- **ステップ 7.** raspi-configを開きます。

```sh
sudo raspi-config
```

- **ステップ 8.** `System Options > Boot / Auto Login`に移動して**ConsoleまたはConsole (Autologin)**を選択してコンソールモードに切り替えます。

- **ステップ 9.** `Advanced Options > GL Driver > GL (Fake KMS)`に移動してV3Dグラフィックスドライバーを有効にします。

- **ステップ 10.** `Performance Options -> GPU Memory`に移動して**64**を入力してGPUメモリを設定します。

- **ステップ 11.** キーボードで**ESC**を押して**raspi-config**ウィンドウを閉じます。

- **ステップ 12.** reTerminalに3Dアクセラレーションを使用する権限を付与します。（注意：潜在的なセキュリティリスクがあります。これを行いたくない場合は、**sudo**を使用してflutter-piを起動してください。）

```sh
usermod -a -G render pi
```

- **ステップ 13.** reTerminalを再起動します。

```sh
sudo reboot
```

これでreTerminalに必要なツールのインストールが完了しました。

### ホストPC上で

次に、開発用にホストPCを準備する必要があります。ここでは、Flutter開発に必要なパッケージを含む**Flutter SDK**、コード編集用の**Android Studio**、コードを実行してテストするための**Android Emulator**をインストールします。

- **ステップ 1.** オペレーティングシステムに応じて[Flutter SDK](https://flutter.dev/docs/get-started/install)をダウンロードしてインストールします。

- **ステップ 2.** ターミナルウィンドウで以下を入力してFlutter SDKが正常にインストールされたか確認します。

```sh
flutter --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/flutter-version.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** オペレーティングシステムに応じて[Android Studio](https://developer.android.com/studio)をダウンロードしてインストールします。

- **ステップ 4.** Android Studioを開き、`Configure > Plugins`に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-6.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 5.** **Marketplace**で検索ボックスに**flutter**と入力し、**Install**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-7.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 6.** プロンプトウィンドウで**Dart**プラグインをインストールするために**Install**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-8.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 7.** **Restart IDE**をクリックして、インストールされたプラグインでIDEを再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-9.png" alt="pir" width="650" height="auto"/></p>

- **ステップ 8.** IDEが再び開いたら、`Configure > AVD Manager`に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/android-studio-open.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 9.** **Create Virtual Device**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-1.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 10.** **New Hardware Profile**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-2.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 11.** 以下の設定を構成します。

  - デバイス名: reTerminal
  - デバイスタイプ: Phone/ Tablet
  - スクリーン:

- 画面サイズ: 5インチ  
- 解像度: 1280 x 720  
- メモリ: RAM: 2048MB  
- 入力: [✓] ハードウェアボタンあり (戻る/ホーム/メニュー)  
- 対応デバイス状態: [✓] 横向き  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-3.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 12.** **Finish** をクリックし、その後 **Next** をクリックします。

- **ステップ 13.** 最新の Android イメージを選択し、**Next** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-4.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 14.** **Emulated Performance** の下で、加速性能のために **Hardware - GLES 2.0** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-5.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 15.** 最後に **Finish** をクリックします。

これで開発環境の準備が成功裏に完了しました。

## スマートランプ Flutter アプリケーション

### ハードウェア接続

テスト目的で reTerminal の GPIO 24 に LED を接続します。後でリレーを追加し、GPIO を使用して家庭用電化製品を制御することができます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="800" height="auto"/></p>

**注意:** GPIO ピンと LED の間に抵抗が必要です。そうしないと LED が焼損します。

### アプリケーションの作成と初期化

- **ステップ 1.** Android Studio を開き、**Create New Flutter Project** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-10.png" alt="pir" width="550" height="auto"/></p>

- **ステップ 2.** **Flutter SDK パス**は自動的に設定されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-11.png" alt="pir" width="800" height="auto"/></p>

**注意:** このウィンドウに Flutter SDK パスが表示されない場合は、手動で Flutter SDK の場所を指定することができます。

- **ステップ 3.** 以下のようにプロジェクトの詳細を入力し、**Finish** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-12.png" alt="pir" width="800" height="auto"/></p>

これでサンプルプロジェクトが **main.dart** とともに開きます。

### main.dart (メインアプリ) の作成

**lib** フォルダ内の **main.dart** ファイルを使用して Flutter アプリケーションを作成します。

**main.dart** ファイルを開き、以下のコードをコピーします。

```dart
// ライブラリのインポート
import 'package:flutter/material.dart';
import 'package:flutter_gpiod/flutter_gpiod.dart';

// アプリのエントリーポイント
void main() {
  runApp(MyApp());
}

// これはメインアプリケーションウィジェットです。
class MyApp extends StatelessWidget {
  // GPIO 制御のための関数
  void ledState(state) {
    // GPIO チップのリストを取得
    final chips = FlutterGpiod.instance.chips;

    // 最初のチップのインデックス 24 のラインを取得
    // これは Raspberry Pi の BCM ピン 24 です。
    final chip = chips.singleWhere(
          (chip) => chip.label == 'pinctrl-bcm2711',
      orElse: () =>
          chips.singleWhere((chip) => chip.label == 'pinctrl-bcm2835'),
    );

    final line2 = chip.lines[24];

    // BCM 24 を出力としてリクエスト
    line2.requestOutput(consumer: "flutter_gpiod test", initialValue: false);
    line2.setValue(state);
    line2.release();
  }

  @override
  Widget build(BuildContext context) {
    // MaterialApp ウィジェット
    return MaterialApp(
      // 右上のデバッグバナーを非表示
      debugShowCheckedModeBanner: false,
      // Scaffold ウィジェット
      home: Scaffold(
        // アプリの背景色
        // "Colors." を入力すると、Android Studio が利用可能な色を推奨します。
        // また、マウスをホバーすると、[ ] に囲まれた番号で割り当てられた色のバリエーションを確認できます。
        backgroundColor: Colors.grey[700],
        // AppBar ウィジェット
        appBar: AppBar(
          // AppBar の背景色
          backgroundColor: Colors.black,
          // AppBar ウィジェット内のテキストを中央揃え
          title: Center(
            child: Text(
              'LIVING ROOM',
            ),
          ),
        ),
        body: Center(
          // Row ウィジェット
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              // ON ボタンの機能
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {
                  print('ON');
                  ledState(true);
                },
                // ON ボタンのスタイリング
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[700],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
              // 電球の Google Material アイコン
              Icon(
                Icons.lightbulb_outline,
                color: Colors.white,
                size: 200,
              ),
              // OFF ボタンの機能
              ElevatedButton(
                child: Text('OFF'),
                onPressed: () {
                  print('OFF');
                  ledState(false);
                },
                // OFF ボタンのスタイリング
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

#### 使用される Flutter ウィジェット

Flutter ウィジェットは、React にインスパイアされたモダンなフレームワークを使用して構築されています。中心的なアイデアは、UI をウィジェットで構築することです。ウィジェットは、現在の設定と状態に基づいてビューがどのように見えるべきかを記述します。

**StatelessWidget（ステートレスウィジェット）：**  
StatelessWidget は、記述しているユーザーインターフェースの一部が、オブジェクト自体の構成情報とウィジェットが展開される BuildContext 以外には依存しない場合に便利です。

**MaterialApp（マテリアルアプリ）：**  
MaterialApp ウィジェットは、マテリアルデザインアプリケーションに一般的に必要な複数のウィジェットをラップするウィジェットです。

**Scaffold（スキャフォールド）：**  
Scaffold ウィジェットは、Flutter アプリの基本的なマテリアルデザインのビジュアルレイアウト構造を実装するフレームワークを提供します。ドロワー、スナックバー、ボトムシートを表示するための API を提供します。

**Appbar（アプリバー）：**  
Appbar は、Flutter アプリケーション内でツールバーを含むウィジェットです。

**Row（行）：**  
Row ウィジェットは、その子要素を水平配列で表示するために使用されます。このウィジェット内に UI 要素を配置します。

**ElevatedButton（エレベーテッドボタン）：**  
ElevatedButton ウィジェットは、押すことで反応するボタンを提供します。

#### Google Material Icons（Google マテリアルアイコン）

アプリ内で **lightbulb（電球）** アイコンを **Google Material Icons** から使用しました。さらに多くの Google Material Icons を確認するには、[このリンク](https://fonts.google.com/icons)を参照してください。ボタンを検索し、選択して、ボタンの Flutter コードを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-14.png" alt="pir" width="800" height="auto"/></p>

### GPIO ライブラリのインストール

次に、Flutter アプリケーションに GPIO 制御ライブラリをインストールします。ここでは、[flutter_gpiod](https://pub.dev/packages/flutter_gpiod/versions/0.4.0-nullsafety) という GPIO ライブラリを使用します。

- **ステップ 1.** Flutter プロジェクト内の **pubspec.yaml** ファイルを開き、**dependencies:** の下に次の内容を追加します：

```yaml
dependencies:
  flutter_gpiod: ^0.4.0-nullsafety
```

- **ステップ 2.** ファイルを保存し、**Pub get** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-17.jpg" alt="pir" width="520" height="auto"/></p>

### アプリのテスト

- **ステップ 1.** **main.dart** ファイルを開きます。

- **ステップ 2.** **no device selected** ボタンをクリックし、以前作成した Android デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-13.1.jpg" alt="pir" width="800" height="auto"/></p>

以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-5.png" alt="pir" width="800" height="auto"/></p>

- **ステップ 3.** **再生ボタン（play button）** をクリックしてアプリケーションを実行します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-14.png" alt="pir" width="800" height="auto"/></p>

Android エミュレーター上で以下のアプリケーションが実行されているのが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

### アプリケーションのビルドと reTerminal への転送

次に、Flutter アプリケーションをビルドし、reTerminal に転送します。

- **ステップ 1.** Android Studio 内でターミナルウィンドウを開きます（`View > Tool Windows > Terminal` を選択）。

- **ステップ 2.** 以下を入力してビルドの準備をします：

```sh
flutter clean
```

- **ステップ 3.** プロジェクトをビルドします：

```sh
flutter build bundle
```

- **ステップ 4.** reTerminal の電源を入れます。

**注意：** reTerminal がコマンドラインモードで起動していることを確認してください。

- **ステップ 5.** ビルドしたプロジェクトを reTerminal に転送します：

```sh
scp -r ./build/flutter_assets pi@<ip_address_of_reTerminal>:/home/pi/testapp
```

## reTerminalでアプリケーションを起動する

- **ステップ 1.** reTerminalのコマンドラインで以下を入力してください。

```sh
flutter-pi /home/pi/testapp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

**ON**ボタンと**OFF**ボタンを押すと、GPIO 24に接続されたLEDがそれに応じて反応することが確認できます！

さらに、GPIOピンにリレーを追加して家電を制御し、reTerminal上で完全なスマートホームソリューションを構築することも可能です！

## ボーナスデモ

Flutterを使用したより興味深いデモを体験したい場合は、[このGitHubリポジトリ](https://github.com/lakshanthad/Flutter_reTerminal_Smart_Home_UI)をチェックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" alt="pir" width="800" height="auto"/></p>

## リソース

- **[GitHub]** [flutter-pi](https://github.com/ardera/flutter-pi)
- **[Webページ]** [公式Flutterドキュメント](https://flutter.dev/docs)
- **[GitHub]** [Flutterデモのソースコード](https://github.com/lakshanthad/Flutter_reTerminal_LED_UI)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>