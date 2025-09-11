---
description: reCamera用の基本的なLinuxコマンド
title: Cによる深層開発
keywords:
  - Edge
  - reCamera
  - recamera
  - linuxコマンド
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /ja/gimbal_development_c
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Parker Hu & Dawn Yao
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# GimbalのCによる深層開発

reCamera Gimbalの開発には以下の3つのアプローチがあります：

1. **Node-REDノードを使用したアプリケーションロジック開発**
2. **ターミナルコマンドを介したcan-utilsツールを使用したBashスクリプト作成**  
3. **クロスコンパイル環境のセットアップとバイナリコンパイルを必要とするCプログラミング**

このドキュメントでは、Cプログラミングを使用してreCamera Gimbalを開発する方法について詳しく説明します。

Node-REDベースの開発については、以下を参照してください：  
[Node-RED開発ドキュメント](https://wiki.seeedstudio.com/ja/recamera_gimbal_node_red/)

開発を始める前に、クロスコンパイル環境を開発環境にインストールする必要があります。

Linux:

```bash
sudo apt-get update
sudo apt-get install can-utils

mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.2.0/reCameraOS_sdk_v0.2.0.tar.gz

tar -xzvf reCameraOS_sdk_v0.2.0.tar.gz

git clone https://github.com/sophgo/host-tools.git
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH

```
## サンプルプログラムのダウンロード

```bash
sudo apt-get install unzip
wget https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip
unzip CAN.zip
```
ディレクトリ構造は以下のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN_Directory.png" /></div>

Makefileを修正して、CC変数を自分のクロスコンパイルツールチェーンに置き換える必要があります。

```bash
CC = $HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin/riscv64-unknown-linux-musl-gcc
```

## プログラムのコンパイル

```bash
cd CAN/can_send
mkdir build && cd build
cmake ../
make
```

コンパイルされたバイナリをreCameraにアップロードします

```bash
scp can_send recamera@ip_address:/home/recamera
```

`candump can0`を使用してCANバスデータを表示  
`sudo ./can_send`を使用してスクリプトをテスト

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_send.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_dump.png" /></div>

## プログラム解析

これらのコマンドは、CANバスのレートとインターフェースの状態を設定するために使用され、アプリケーション内で一度だけ初期化する必要があります。

```bash
"sudo ip link set can0 type can bitrate 100000"
"sudo ifconfig can0 up"
```
can_send.cファイルでは、上記のコマンドがsystem関数を使用して呼び出されています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Initialization_can0.png" /></div>

CANフレームのID、データ長、データを格納するためのCANフレーム構造体を定義する必要があります。  
また、memset関数を使用してCANフレーム構造体をゼロにクリアします。

```c
struct can_frame frame;
memset(&frame, 0, sizeof(struct can_frame));
```

can_idとcan_dlcを設定して、CANフレームのIDとデータ長を構成できます。  
これは標準的なCANフレームデータフォーマットです。  
`nbytes = write(s, &frame, sizeof(frame));`を使用してCANフレームをCANバスに送信し、送信されたバイト数を返します。返された値を期待されるバイト数と比較して、CANフレームが正常に送信されたかどうかを判断できます。

```c
 //5.送信データを設定
    frame.can_id = 0x141;
    frame.can_dlc = 8;
    frame.data[0] = 0x80;
    frame.data[1] = 0x00;
    frame.data[2] = 0x00;
    frame.data[3] = 0x00;
    frame.data[4] = 0x00;
    frame.data[5] = 0x00;;
    frame.data[6] = 0x00;
    frame.data[7] = 0x00
```

さらに多くのCプログラムについては、[Githubリポジトリ](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/reCamera_Gimbal/src)を参照してください。

なお、Gimbal関連のプログラムはNode-REDコンポーネントに基づいて開発されています。今後はNode-REDプログラムのみを維持するため、Node-REDで直接参照して開発することをお勧めします。

Cプログラムはメンテナンスされていないため、モーターファームウェアの更新に伴い無効になる可能性があります。開発には、[最新のモーターマニュアル](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf)を使用して正しいコマンドをカプセル化してください。

## リソース

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)
- [CAN_Script_C](https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。以下の複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>