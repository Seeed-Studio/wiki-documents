---
description: JetsonとEtherCATデバイス間の通信を確立する方法
title: JetsonとEtherCATデバイス間の通信を確立する方法
keywords:
- jetson
- jetpack
- L4T
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100001302_recomputer_robotics_j3011_with_gmsl_extension.jpg
slug: /ja/how_to_establish_the_ethercat_on_jetson
last_update:
  date: 11/14/2025
  author: Dayu
---

**EtherCAT（Ethernet for Control Automation Technology）**は、**IEEE 802.3 Ethernetスタンダード**に基づくオープンソースの高性能リアルタイム産業用Ethernetフィールドバスプロトコルです。**マスター・スレーブアーキテクチャ**で動作し、産業オートメーション環境における優れた速度、精度、柔軟性で知られています。

この文書では、[**recomputer robotics J401**](https://www.seeedstudio.com/reComputer-Robotics-Carrier-board-p-6442.html)を**EtherCATマスター**として、[**MyActuator X4**](https://www.seeedstudio.com/Myactuator-X4-P12-5-10-Planetarty-Actuator-p-6470.html)を**スレーブ**として使用し、JetsonとEtherCATデバイス間の通信を確立する方法を実演します。

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
    <img height ="300" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/6/-/6-114110327-recomputer-robotics-carrier-board.jpg"/>
    <img height ="300" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-114090069--myactuator-x4-p12.5-10-planetarty-actuator.jpg"/>
</div>


## 1. ハードウェア接続

EtherCATマスターとして、Jetsonは通常その**Ethernetインターフェース**を使用してEtherCATスレーブデバイスに接続します。

<div align="center"><img width ="700" 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/eth.jpg"/>
</div>


多くのスレーブデバイスは標準的なEthernetポートを提供していないため、Ethernet接続を**4ピンインターフェース（Tx+、Tx–、Rx+、Rx–）**に変換するアダプターが必要になることがよくあります。
<div align="center"><img width ="600" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/EtherCAT-tran.png"/>
</div>

:::note
物理的なEtherCAT接続を確立した後も、ほとんどのスレーブデバイスは追加の外部電源が必要です。
:::

## 2. EtherCATドライバーのインストール

このセクションでは、**JetPack 6.2** BSPに対応する**L4T 36.4.3**を例として、JetsonにEtherCATドライバーをインストールする方法を示します。


EtherCATドライバーのビルドに必要な依存関係をインストールします：

```bash
sudo apt update
sudo apt install build-essential cmake libtool autoconf automake
```

EtherCATドライバーのソースコードを取得し、コンパイルしてインストールします：

```python
git clone https://gitlab.com/etherlab.org/ethercat.git
cd ethercat

./bootstrap # to create the configure script, if downloaded from the repo

./configure --sysconfdir=/etc
make all modules
sudo make modules_install install
sudo depmod -a
```

ドライバーが正常にインストールされたことを確認するには、以下のコマンドを実行します。
2つのカーネルモジュール`ec_master`と`ec_generic`が表示されるはずです：

```bash
sudo lsmod | grep "ec_"
```

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-ko.png"/>
</div>



## 3. EtherCATの設定

EtherCATドライバーをインストールした後、マスターとスレーブデバイス間の通信を有効にするためにいくつかの設定が必要です。

まず、`/etc/ethercat.conf`の設定ファイルを編集します：

```python
sudo vim /etc/ethercat.conf
```
Jetsonに接続されているEthernetインターフェースの名前に応じて、`/etc/ethercat.conf`の2つのパラメータを変更します：

```python
MASTER0_DEVICE="eno1"  # Replace eno1 with the Ethernet interface used for EtherCAT
DEVICE_MODULES="generic"
```
`eno1`をEtherCATに使用するEthernetインターフェースに置き換えてください。`ifconfig`コマンドを使用してインターフェース名を確認できます。

EtherCATサービスを再起動した後、`/dev`ディレクトリにEtherCATマスターデバイスが表示されるはずです：

```python
sudo systemctl restart ethercat
ls /de/EtherCAT*
```

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat0.png"/>
</div>

（**オプション**）`/dev/EtherCAT`が見つからない場合は、カーネルモジュールを手動でロードしてみてください：

```python
sudo modprobe ec_master devices="eno1"  # Replace eno1 with the Ethernet interface used for EtherCAT
sudo modprobe ec_generic
sudo systemctl restart ethercat
```
`eno1`をEtherCATに使用するEthernetインターフェースに置き換えてください。

（**オプション**）EtherCATに使用するEthernetインターフェースが**NetworkManager**によって占有されている場合があります。以下のコマンドを使用して解放できます：

```python
sudo nmcli dev set eno1 managed no  # Replace eno1 with the Ethernet interface used for EtherCAT
sudo nmcli dev set eno1 managed on  # Replace eno1 with the Ethernet interface used for EtherCAT
```
`eno1`をEtherCATに使用するEthernetインターフェースに置き換えてください。


## 4. JetsonとEtherCATスレーブ間の通信テスト

JetsonでEtherCATマスターノードが正しく初期化され、ハードウェア接続が適切に確立されていることを確認した後、ターミナルでJetsonとEtherCATデバイス間の通信をテストできます。

EtherCATデバイスをスキャンし、データ送信をテストしてパケット損失率が正常範囲内にあるかを確認します：

```python
sudo ethercat rescan
sudo ethercat master
```
<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-frame.png"/>
</div>


バス上のすべてのEtherCATデバイスをリストします：

```python
sudo ethercat rescan
sudo ethercat slaves -v
```


<div align="center"><img width ="700" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethercat-slave.png"/>
</div>

インデックス`0`のEtherCATデバイスの問題を表示します：

```python
sudo ethercat rescan
sudo ethercat pdos -p 0 #0 to n
```
`-p`の後のパラメータは`0`から`n`までの任意の値にできます。

<div align="center"><img width ="800" 
    src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/slave0.png"/>
</div>

## リソース

- [EtherCAT Masterのソースコード](https://gitlab.com/etherlab.org/ethercat.git)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
