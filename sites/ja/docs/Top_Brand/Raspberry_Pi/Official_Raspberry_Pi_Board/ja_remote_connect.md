---
description: Raspberry Pi/reComputerにリモート接続する方法
title: Raspberry Piにリモート接続する
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/remote_connect
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Raspberry Pi/reComputerにリモート接続する

ユーザーが特定の制約（追加のモニターがないなど）により、Raspberry Pi（reComputerやその他のエッジデバイス）に物理的にアクセスできないことがよくあります。そのため、Raspberry Piにリモート接続することが非常に重要です。使用しているオペレーティングシステムによって、リモートエッジデバイスに接続する方法はいくつかあります。このプロジェクトでは、Raspberry Piのオペレーティングシステム（Linux）を使用して、Secure Shell Protocol（SSH）を利用してリモートでマシンを制御します。

## はじめに

SSH（Secure ShellまたはSecure Socket Shellとしても知られる）は、特にシステム管理者にとって、安全でないネットワークを介してコンピュータにアクセスするための安全な方法を提供するネットワークプロトコルです。SSHはネットワーク管理者によって広く使用されており、ネットワークを介して別のコンピュータにログインし、コマンドを実行し、ファイルを別のコンピュータに移動することができます。SSHサーバーは、デフォルトで標準のTransmission Control Protocol（TCP）ポート22でリッスンします。

### 必要な材料

- Linuxベースのデバイス（Raspberry PiまたはreComputer）
- PC

### リモート接続

Raspberry Piを例にとり、Raspberry PiのSSHポートを開き、PC上のSSHインターフェースを使用してリモートで呼び出します。コンピュータからRaspberry Piに接続するには、PiのIPアドレスを知る必要があります。
> 注意：PCとRaspberry Piが同じLAN内にあることを確認してください。

もしデバイスがreComputerの場合、SSHポートはデフォルトで開いているため、ステップ1からステップ3をスキップできます。以下は、Raspberry Piをコンピュータに接続する手順です。

**ステップ1.** Raspberry Piで新しいターミナルを開き、`sudo raspi-config`を実行します。以下のようなメニューが表示されるので、「Interfacing Options」を選択し、ENTERを押します。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_2.png"/></div>

**ステップ2.** 「SSH」を選択し、ENTERを押します。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_3.png"/></div>

**ステップ3.** 「Yes」を選択し、ENTERを押します。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_4.png"/></div>

しばらくすると、「The SSH server is enabled」というメッセージが表示されます。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_5.png"/></div>

**ステップ4.** Raspberry Piでターミナルを開き、`ifconfig`を実行します。
以下のようにRaspberry PiのIPアドレスが表示されます。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_6.png"/></div>

**ステップ5.** PCのターミナルを開き、`ssh pi@192.168.6.215`を実行し、Raspberry Piのパスワードを入力します。これでPCがRaspberry Piにリモート接続されます。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SecurityCheck/Security_Scan_7.png"/></div>