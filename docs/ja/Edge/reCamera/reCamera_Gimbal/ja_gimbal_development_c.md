---
description: reCamera用の基本的なlinuxコマンド
title: Cによる深層開発
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /ja/gimbal_development_c
sidebar_position: 4
last_update:
  date: 4/15/2025
  author: Parker Hu & Dawn Yao
---

# CによるGimbalの深層開発

reCamera Gimbalの開発には3つのアプローチがあります：

1. **Node-REDノードを使用したアプリケーションロジック開発**
2. **ターミナルコマンドを介したcan-utilsツールを使用したBashスクリプト**  
3. **クロスコンパイル環境のセットアップとバイナリコンパイルが必要なCプログラミング**

このドキュメントでは、Cプログラミングを使用してreCamera Gimbalを開発する方法について包括的なガイドを提供します。

Node-REDベースの開発については、以下を参照してください：  
[Node-RED開発ドキュメント](https://wiki.seeedstudio.com/ja/recamera_gimbal_node_red/)

開発前に、開発環境にクロスコンパイル環境をインストールする必要があります。

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
## ケースプログラムのダウンロード

```bash
sudo apt-get install unzip
wget https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip
unzip CAN.zip
```
ディレクトリ構造は以下のとおりです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN_Directory.png" /></div>

Makefileを修正して、CC変数を独自のクロスコンパイルツールチェーンに置き換える必要があります。

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

コンパイルされたバイナリをreCameraにアップロード

```bash
scp can_send recamera@ip_address:/home/recamera
```

`candump can0`を使用してCANバスデータを表示
`sudo ./can_send`を使用してスクリプトをテスト

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_send.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_dump.png" /></div>

## プログラム解析

これらのコマンドはCANバスレートとインターフェースステータスを設定するために使用され、アプリケーションで一度だけ初期化する必要があります。

```bash
"sudo ip link set can0 type can bitrate 100000"
"sudo ifconfig can0 up"
```
図に示すように、can_send.cファイルでは、上記のコマンドがsystem関数を使用して呼び出されています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Initialization_can0.png" /></div>

CANフレームのID、データ長、データを格納するためのCANフレーム構造を定義する必要があります。
そして、memset関数を使用してCANフレーム構造をゼロにクリアします。

```c
struct can_frame frame;
memset(&frame, 0, sizeof(struct can_frame));
```

can_idとcan_dlcを設定して、CANフレームのIDとデータ長を構成できます。
これは標準的なCANフレームデータ形式です。
`nbytes = write(s, &frame, sizeof(frame));`を使用してCANフレームをCANバスに送信すると、送信されたバイト数が返されます。返された値を期待されるバイト数と比較して、CANフレームが正常に送信されたかどうかを判断できます。

```c
 //5.Set send data
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

私たちの[Githubリポジトリ](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/reCamera_Gimbal/src)でより多くのCプログラムを参照できます。

Gimbal関連のプログラムはNode-REDコンポーネントに基づいて開発されていることに注意してください。今後はNode-REDプログラムのみを維持するため、Node-REDで直接参照して開発できます。

Cプログラムは維持されていないため、モーターファームウェアの更新に伴い無効になる可能性があります。開発には私たちの[最新モーターマニュアル](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf)を使用して正しいコマンドをカプセル化してください。


## リソース

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)
- [CAN_Script_C](https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>