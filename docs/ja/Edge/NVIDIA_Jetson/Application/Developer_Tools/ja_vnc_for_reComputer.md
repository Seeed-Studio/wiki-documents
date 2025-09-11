---
description: この Wiki では、reComputer Jetson で VNC リモートデスクトップツールを使用する方法をステップバイステップで説明します。
title: reComputer Jetson での VNC の使用
tags:
  - AI モデルデプロイ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/vnc_for_recomputer
last_update:
  date: 05/15/2025
  author: YaoHui Zhu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer Nvidia Jetson で VNC リモートデスクトップツールを使用する方法

## はじめに

VNC はリモートデスクトップツールであり、他の PC デバイスから reComputer Nvidia Jetson をリモートで制御し、グラフィカルデスクトップにリアルタイムでアクセスすることができます。この Wiki では、reComputer Nvidia Jetson に VNC をインストールして使用する方法を説明します。

## 前提条件
- Jetson デバイス：[Seeed Studio のすべての Nvidia デバイス](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) に対応

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

- [HDMI ダミープラグ](https://www.cytron.io/p-full-size-hdmi-dummy-plug-for-headless-setup)
:::note
モニターを接続したくない場合は、リモートデスクトップ制御を有効にするために **`HDMI ダミープラグ`** を使用する必要があります。
:::

<div align="center">
    <img width={300} 
     src="https://static.cytron.io/image/cache/catalog/products/CA-HDMI-DMP/HDMI%20USB%20(a)-800x800.png" />
</div>

## 始めましょう
### VNC のインストール
 **ステップ 1.** Jetson に VNC をインストールします:
 ```bash
  sudo apt update
  sudo apt install vino
 ```

 **ステップ 2.** ログインするたびに VNC サーバーを起動するように設定します:
 ```bash
  cd /usr/lib/systemd/user/graphical-session.target.wants
  sudo ln -s ../vino-server.service ./.
 ```

 **ステップ 3.** VNC サーバーを設定します:
 ```bash
  gsettings set org.gnome.Vino prompt-enabled false
  gsettings set org.gnome.Vino require-encryption false
 ```

 **ステップ 4.** VNC サーバーにアクセスするためのパスワードを設定します:
 ```bash
 # thepassword を希望するパスワードに置き換えてください
  gsettings set org.gnome.Vino authentication-methods "['vnc']"
  gsettings set org.gnome.Vino vnc-password $(echo -n 'thepassword'|base64)
 ```

 **ステップ 5.** `org.gnome` を編集して `enabled` キーのパラメータを追加します:
 ```bash
  cd /usr/share/glib-2.0/schemas
  sudo cp org.gnome.Vino.gschema.xml org.gnome.Vino.gschema.xml.old
  sudo vi org.gnome.Vino.gschema.xml 
 ```
以下のコードを指定された場所に貼り付け、フォーマットが以下と同じであることを確認してください。

  ```bash
  <key name='enabled' type='b'>
        <summary>Enable remote access to the desktop</summary>
        <description>
                If true, allows remote access to the desktop via the RFB
                protocol. Users on remote machines may then connect to the
                desktop using a VNC viewer.
        </description>
        <default>false</default>
      </key>
  ```

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig1.png" />
  </div>

### コンパイルと起動
 コンパイル:

 ```bash
  sudo glib-compile-schemas /usr/share/glib-2.0/schemas
  sudo reboot
 ```
 起動:

 ```bash
  /usr/lib/vino/vino-server
 ```

## 他のコンピュータから VNC サービスに接続する

他のコンピュータから接続するには、Jetson 開発キットの IP アドレスを知る必要があります。開発キットで `ifconfig` コマンドを実行し、イーサネットを使用している場合は `eth0` インターフェース、無線を使用している場合は `wlan0` インターフェース、または USB デバイスモードのイーサネット接続を使用している場合は `l4tbr0` に割り当てられた IP アドレスをメモしてください。その後、Jetson に HDMI ダミープラグを接続する必要があります。

- Windows:
  - ステップ 1: [こちら](https://www.realvnc.com/en/connect/download/viewer/) から VNC ビューアをダウンロードしてインストールします。
  - ステップ 2: VNC ビューアを起動し、開発キットの IP アドレスを入力します。
  - ステップ 3: VNC サーバーを認証用に設定している場合は、VNC パスワードを入力します。

- MacOS:
  - ステップ 1. Finder を開き、メニューバーから「移動」|「フォルダへ移動」を選択します。
  - ステップ 2: 「/System/Library/CoreServices/Applications」と入力し、「移動」をクリックします。
  - ステップ 3: 「画面共有」という名前のアプリを開き、接続情報を入力します。例: username@。
  - ステップ 4: 「接続」をクリックします。
  - ステップ 5: VNC サーバーを認証用に設定している場合は、VNC パスワードを入力します。

- Linux: 以下の例では `gvncviewer` を使用していますが、お気に入りの VNC クライアントを使用することもできます。人気のある代替ツールとして `remmina` があります。
  - ステップ 1. 以下のコマンドを実行して `gvncviewer` をインストールします:

    ```bash
    sudo apt update
    sudo apt install gvncviewer
    ```
  - ステップ 2: `gvncviewer` を起動します。
      ```bash
    gvncviewer 
    ```
  - ステップ 3: VNC サーバーを認証用に設定している場合は、VNC パスワードを入力します。

## VNCサーバーをログイン時に自動起動するように設定する方法:
**ステップ1.** アプリケーションで`Startup Application Preferences`を検索します。
<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig2.png" />
  </div>

**ステップ2.** `Add`ボタンをクリックし、`Name`と`Comment`フィールドには任意のテキストを入力できます。`Command`フィールドには以下の指示を追加してください:
```bash
nohup /usr/lib/vino/vino-server > /dev/null 2>&1 &
```

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig3.png" />
  </div>

`Save`をクリックしてreComputerを再起動します。モニターを切断し、**HDMI Dummy Plug**をJetsonに接続してください。これで、VNCを通じて確認することができます。

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig4.png" />
  </div>

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>