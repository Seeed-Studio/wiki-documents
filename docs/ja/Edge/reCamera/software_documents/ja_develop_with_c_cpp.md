---
description: C/C++開発者向けのドキュメントと情報を提供
title: C/C++での開発
keywords:
  - Edge
  - reCamera
  - C
  - CPP
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /ja/recamera_develop_with_c_cpp
sidebar_position: 5
last_update:
  date: 06/09/2025
  author: Parker Hu & Yuxin Liang
---

# reCameraでC&C++を使用した開発

## 環境設定
reCameraはリソースが限られており、Cコードのコンパイル環境が設定されていません。reCameraでC/C++を使用してアプリケーションを開発したい場合は、クロスコンパイル環境を設定する必要があります（別のLinux上でC/C++プログラムをコンパイルし、コンパイルされたファイルをreCameraターミナルに転送して実行）。Windowsを使用している場合は、Windows Subsystem for Linux（WSL）をインストールしてLinux（Ubuntu、OpenSUSE、Kali、Debian、またはArch Linux）を実行できます。

 **ステップ1**：別のLinux上でビルド環境を設定

```bash
sudo apt update
sudo apt install build-essential

mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.1.5/reCameraOS_sdk_v0.1.5.tar.gz

tar -xzvf reCameraOS_sdk_v0.1.5.tar.gz

git clone https://github.com/sophgo/host-tools.git
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH

```

**ステップ2**：Linuxで実行したいインスタンスプログラムまたはプログラムをコンパイルします。作成される「build」ディレクトリは、プロジェクトのルートディレクトリに配置する必要があることに注意してください（「build」は「CMakeLists.txt」と同じレベルに配置する必要があります）。

```bash
cd $HOME/recamera/sscma-example-sg200x/solutions/helloworld
mkdir build && cd build
cmake ..
make
```

`file helloworld` と入力することで、ファイルのプロパティを確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/1.png" /></div>

緑色の「helloworld」（プログラムフォルダと同じ名前）がコンパイルされた実行可能ファイルです。

**ステップ3**：このステップでは、コンパイルされた実行可能ファイルをrecameraのLinuxターミナルに転送して実行します。
まず、recameraターミナルにログインする必要があります。以下に示すようにWeb版を使用できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/2.2.png" /></div>

または、リモートアクセスソフトウェア（例：MobaXterm）を使用してrecameraに接続することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/3.png" /></div>

次に、Linux上で以下のコードを入力します（パスワードが必要です）：

```bash
sudo scp helloworld recamera@{recamera_IP}:/home/recamera/
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/4.png" /></div>

実行可能ファイルが正常に転送されました。

**Step4**：reCamera端末で実行可能ファイルを実行します。

```bash
./helloworld
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/5.png" /></div>

実行が成功しました。

## C&C++で構築されたその他のデモ

### ​reCameraを使用してストリーミング動画をキャプチャする

reCameraのためのより多くのC/C++デモを提供しています。GitHubからクローンできます：https://github.com/Seeed-Studio/sscma-example-sg200x。「ステップ1」で既にクローンしている可能性があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/6.png" /></div>

**Video_demo**は、**recamera**を使用して動画フレームをキャプチャし、異なる形式で保存し、RTSP（Real-Time Streaming Protocol）を介して動画をストリーミングする方法を実演するサンプルアプリケーションです。
「ステップ2」に従ってコンパイルし、「ステップ3」に従ってreCameraターミナルにアップロードできます。
*注意*：reCameraターミナルでプログラムを実行する前に、reCameraワークスペース（http://192.168.42.1/#/workspace）にログインしてFlowを終了する必要があります。このプログラムは大量のキャッシュリソースを消費するためです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/7.png" /></div>

メモリ割り当ての失敗を防ぐため、スーパーユーザー権限でプログラムを実行する必要があります。

```bash
sudo ./video_demo
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/8.png" /></div>

実行成功の出力は上記の通りです。
出力パラメータの説明：
1. ビデオが初期化され、異なるフォーマットとフレームレートで3つのチャンネルが設定されています：
   - **チャンネル 0**: RGB888フォーマット、1920x1080解像度、10 FPS
   - **チャンネル 1**: NV21フォーマット、1920x1080解像度、5 FPS
   - **チャンネル 2**: H.264フォーマット、1920x1080解像度、30 FPS
2. チャンネルに応じて：
   - **チャンネル 0** と **チャンネル 1**: フレームはそれぞれRGBとNV21フォーマットで保存されます。
   - **チャンネル 2**: フレームはRTSPでストリーミングされます。

RTSPストリームを表示・保存するには、VLCメディアプレーヤーをダウンロードして、以下のネットワークストリームに接続してください：rtsp://192.168.42.1:8554/live0。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/9.png" /></div>

RTSPストリームの遅延は約2秒以内です。

アプリケーションは中断されるまで（Ctrl C）無限に実行されます。アプリケーションは終了シグナル（SIGINT、SIGTERM）を受信した際に適切に終了するためのシグナルハンドラーを設定します。

この例は、recameraを使用したビデオ処理とストリーミングの基本的な紹介として機能します。ユーザーはコードを変更し、特定のニーズに合わせて適応させ、異なるビデオフォーマットとストリーミング設定を実験することができます。

詳細については、私たちの[GitHubリポジトリ](https://github.com/Seeed-Studio/OSHW-reCamera-Series)をご参照ください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます。私たちの製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>


<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
