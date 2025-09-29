---
description: このwikiでは、reComputer JetsonでVNCリモートデスクトップツールを段階的に使用する方法について説明します。
title: reComputer JetsonでVNCを使用する
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/vnc_for_recomputer
last_update:
  date: 9/30/2024
  author: YaoHui Zhu
---

# reComputer Nvidia JetsonでVNCリモートデスクトップツールを使用する方法

## はじめに

VNCは、他のPCデバイスからreComputer Nvidia Jetsonをリモート制御できるリモートデスクトップツールで、グラフィカルデスクトップにリアルタイムでアクセスできます。このwikiでは、reComputer Nvidia JetsonにVNCをインストールして使用する方法について説明します。

## 前提条件

- Jetsonデバイス：[すべてのSeeed Studio Nvidiaデバイス](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)に適用可能

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

- [HDMIダミープラグ](https://www.cytron.io/p-full-size-hdmi-dummy-plug-for-headless-setup)。

:::note
モニターを接続したくない場合は、リモートデスクトップ制御を有効にするために**`HDMIダミープラグ`**を使用する必要があります。
:::

<div align="center">
    <img width={300}
     src="https://static.cytron.io/image/cache/catalog/products/CA-HDMI-DMP/HDMI%20USB%20(a)-800x800.png" />
</div>

## はじめに

### VNCのインストール

 **ステップ 1.** JetsonにVNCをインストール：

 ```bash
  sudo apt update
  sudo apt install vino
 ```

 **ステップ2.** ログインするたびにVNCサーバーが起動するように設定します：

 ```bash
  cd /usr/lib/systemd/user/graphical-session.target.wants
  sudo ln -s ../vino-server.service ./.
 ```

 **ステップ 3.** VNCサーバーを設定する

 ```bash
  gsettings set org.gnome.Vino prompt-enabled false
  gsettings set org.gnome.Vino require-encryption false
 ```

**ステップ 4.** VNCサーバーにアクセスするためのパスワードを設定する

 ```bash
 # Replace thepassword with your desired password
  gsettings set org.gnome.Vino authentication-methods "['vnc']"
  gsettings set org.gnome.Vino vnc-password $(echo -n 'thepassword'|base64)
 ```

**ステップ 5.** `enabled key`のパラメータを追加するために`org.gnome`を編集する

 ```bash
  cd /usr/share/glib-2.0/schemas
  sudo cp org.gnome.Vino.gschema.xml org.gnome.Vino.gschema.xml.old
  sudo vi org.gnome.Vino.gschema.xml 
 ```

次のコードを以下の場所に貼り付け、フォーマットが下の例と同じであることを確認してください。

  ```bash
  <key name='enabled' type='b'>
        <summary>Enable remote access to the desktop</summary>
        <description>
                If true, allows remote access to the desktip via the RFB
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

### コンパイルと開始

 コンパイル:

 ```bash
  sudo glib-compile-schemas /usr/share/glib-2.0/schemas
  sudo reboot
 ```

 開始:

 ```bash
  /usr/lib/vino/vino-server
 ```

## 他のコンピュータからVNCサービスに接続する

他のコンピュータから接続するには、Jetson開発キットのIPアドレスを知る必要があります。開発キットでifconfigコマンドを実行し、イーサネットを使用している場合はeth0インターフェース、ワイヤレスを使用している場合はwlan0インターフェース、またはUSBデバイスモードイーサネット接続を使用している場合はl4tbr0に割り当てられたIPアドレスをメモしてください。その後、HDMIダミープラグをJetsonに接続する必要があります。

- Windows:
  - ステップ1: [こちら](https://www.realvnc.com/en/connect/download/viewer/)からVNCビューアをダウンロードしてインストールします。
  - ステップ2: VNCビューアを起動し、開発キットのIPアドレスを入力します。
  - ステップ3: VNCサーバーで認証を設定している場合は、VNCパスワードを入力します。

- MacOS:
  - ステップ1. Finderを開き、メニューバーから「移動」|「フォルダへ移動」を選択します。
  - ステップ2: "/System/Library/CoreServices/Applications"と入力し、「移動」をクリックします。
  - ステップ3: 画面共有という名前のアプリを開き、接続情報を入力します。例：username@。
  - ステップ4: 接続をクリックします。
  - ステップ5: VNCサーバーで認証を設定している場合は、VNCパスワードを入力します。

- Linux: 以下の例ではgvncviewerを使用していますが、お気に入りのvncクライアントでも動作するはずです。人気のある代替手段の一つはremminaです。
  - ステップ1. 以下のコマンドを実行してgvncviewerをインストールします：

    ```bash
    sudo apt update
    sudo apt install gvncviewer
    ```

  - ステップ2: gvncviewerを起動します。

      ```bash
    gvncviewer 
    ```

  - ステップ3: VNCサーバーで認証を設定している場合は、VNCパスワードを入力します。

## ログインするたびにVNCサーバーが開始されるように設定する：

**ステップ1.** アプリケーションで`自動起動するアプリケーションの設定`を検索します。
<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig2.png" />
  </div>

**ステップ2.** `追加`ボタンをクリックし、`名前`と`コメント`フィールドには任意のテキストを入力できます。`コマンド`フィールドに、以下の指示を追加します：

```bash
nohup /usr/lib/vino/vino-server > /dev/null 2>&1 &
```

<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig3.png" />
  </div>

`Save`をクリックしてreComputerを再起動します。モニターを切断し、**HDMIダミープラグ**をJetsonに接続します。これで、VNCを通じて確認できます。

<div align="center">
      <img width={700}
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig4.png" />
  </div>

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
