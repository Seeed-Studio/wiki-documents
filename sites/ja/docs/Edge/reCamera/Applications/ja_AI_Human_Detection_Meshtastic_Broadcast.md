---
title: AI 人体検知と Meshtastic 通知
description: この Wiki では、AI カメラと XIAO ESP32S3 & Wio SX1262 の Meshtastic ネットワークを用いて、リアルタイムアラートをブロードキャストする AI 駆動の人体検知システムを紹介します。
keywords:
  - AI 人体検知
  - XIAO ESP32S3
  - ESP-Mesh
  - エッジ AI
  - GPIO トリガ
slug: /ai_human_detection_meshtastic_broadcast
sku: 100029708,102010611,114993649
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
  date: 2026-01-28T00:00:00.000Z
  author: John Xiang
createdAt: '2026-01-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/ai_human_detection_meshtastic_broadcast/
---

## はじめに
このデモでは、reCamera と Meshtastic LoRa メッシュネットワークを統合したエッジ AI リモート監視ソリューションを紹介します。reCamera のオンデバイス推論機能を活用し、ローカルの YOLO11n モデルが人を検出して直接 GPIO 信号をトリガします。この物理信号により、XIAO ESP32S3 ノードが Meshtastic ネットワーク全体に「Human detected」というアラートをブロードキャストします。このアーキテクチャは、複数の reCamera と Meshtastic ノードを統合して広範囲をカバーすることを想定しています。 

## ハードウェアの準備
<table align="center">
<tbody><tr>
<th>Seeed Studio reCamera HQ PoE 8GB/64GB</th>
<th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa</th>
<th>Wio Tracker L1(Pro)</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t3.jpg" style={{width:210, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Check More🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Check More🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## デモのセットアップ
このデモを実現するために、reCamera と 2 つの Mesh ノードをそれぞれ異なる方法で設定する必要があります。まず reCamera 上で C++ プログラムを実行し、人を検知したときに GPIO 信号をトリガするようにします。次に、最初の Mesh ノードに Meshtastic ファームウェアを書き込み、この Mesh ノードが GPIO 信号を監視し、信号がトリガされたときに Meshtastic ネットワークへメッセージを送信できるようにします。ブロードキャストされたメッセージは 2 台目の Mesh ノードで受信され、最後に、2 台目の Mesh ノードに Bluetooth でスマートフォンを接続することで、送信されたメッセージをスマートフォン上で確認できます。

### reCamera の設定
:::warning
お使いの reCamera ベースボードが PoE バージョンであることを必ず確認してください。GPIO インターフェースを備えているのは PoE バージョンの reCamera のみです。標準版と PoE 版の reCamera の違いについては、[reCamera 2002(w) 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/ja/recamera_hardware_and_specs/) および [reCamera HQ PoE 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/ja/recamera_hq_poe_hardware/) を参照してください。

PoE バージョンの reCamera - [reCamera HQ PoE 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html) を購入している場合は、そのまま使用してこのデモを再現できます。

標準版の reCamera - [reCamera 2002(w) 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html) を購入している場合は、追加で PoE ベースボード - [reCamera Base Board PoE](https://www.seeedstudio.com/reCamera-2002-Base-Board-PoE-p-6559.html) を購入し、標準ベースボードと交換して reCamera に取り付ける必要があります。
:::

以下の設定の目的は、**reCamera** 上に **物体検出** アプリケーションをデプロイすることです。デフォルトの Node-RED サービスを停止することで、reCamera 上で `model_detector` という専用の C++ 実行プログラムを動作させられるようにします。 

このセットアップでは、**YOLO11n** モデル（COCO データセットで学習）を使用してリアルタイムのエッジコンピューティングを行います。 

最終的な目的は、reCamera が特定の物体（この例では人）を自律的に検出できるようにすることです。検出が行われると、システムは **GPIO 490** を **High** レベルに引き上げることでハードウェア信号をトリガします。このハードウェアトリガが、**XIAO ESP32S3 + Wio SX1262** Meshtastic ノードとの通信のブリッジとして機能します。

#### GPIO ピンを露出させる
reCamera PoE ベースボード上の GPIO ピンを露出させるには、ベースボードのネジを外してカバーを取り外す必要があります。すると、ベースボード上に 6 ピンのコネクタがあるのが分かります。このコネクタから GPIO 490 と GND を使用します。この 6 ピンコネクタのようなベースボード上のインターフェースの詳細については、[reCamera Base Board with PoE Hardware Specification](https://wiki.seeedstudio.com/ja/recamera_hq_poe_hardware/#B3_PoE) を参照してください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_1.jpg" /></div>

次に、reCamera パッケージから下図の延長ケーブルを取り出します。このケーブルは **MX1.25-Dupont,6P,6Color:Red-Black-Yellow-Green-Blue-White wire** です。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_2.jpg" /></div>

ケーブルをベースボードに接続します。最終的な接続は下図のようになります。GPIO 490 は緑のケーブルに、GND は黒のケーブルに接続されています。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_3.jpg" /></div>

#### reCamera にログインする
まず、このチュートリアルに従って reCamera を最新バージョン 0.2.2 にアップグレードしてください：[reCamera OS UPgrade Tutorial](https://wiki.seeedstudio.com/ja/recamera_os_version_control/) すでにバージョン 0.2.2 の場合は、この手順をスキップできます。

:::note
reCamera のカメラリソースは排他的であるため、デフォルトで動作している Node-RED および関連する AI サービスが、基盤となる画像ドライバを長時間占有します。これらのサービスが動作している状態で C++ の物体検出プログラムを直接起動すると、複数プロセス間で競合が発生し、カメラに正常にアクセスできないために C++ プログラムが起動に失敗します。 

したがって、Web サービスを停止した後もデバイスをリモートで制御できるようにするため、SSH 経由で reCamera にアクセスする必要があります。そのうえで、SSH を通じて reCamera のターミナルでコマンドを実行し、Node-RED などのバックグラウンドプロセスを停止してカメラのロックを解除し、model_detector プログラムのために必要なハードウェアアクセスパスを確保します。
:::

#### SSH 接続の確立
**MobaXTerm** などのツールを使用して、SSH 経由で **reCamera** にログインします。デフォルト IP：通常は `192.168.42.1`
* ログイン後は、ユーザーデータやモデルの保存に一般的に使用される `/userdata/` ディレクトリに移動することを推奨します。

#### Node-RED 関連サービスの停止
reCamera 上でデフォルトで動作している Node-RED サービスは多くのシステムリソースを消費するため、C++ デモを実行する前に、必ず次の 3 つのコマンドを実行して停止させる必要があります：

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_1n.jpg" /></div>

#### モデルとファームウェアのアップロード

**MobaXTerm のファイル転送機能**（左側のファイルパネルにあるアップロードアイコン）を使用して、次のファイルを `/home/recamera/` ディレクトリにアップロードします。

**コンパイル済みファームウェア**: 例 `model_detector`
**量子化済みモデル**: 例 `yolo11n_cv181x_int8.cvimodel`

ここでの `model_detector` は実行可能ファイルです。これは **reCamera SDK** を構成し、C++ ソースコードを**クロスコンパイル**することで生成されます。このプログラムのロジックは次のとおりです。アップロードした `yolo.cvimodel` を使用してフレーム内に人が存在するかどうかを検出します。人が検出されると、reCamera PoE ベースボード上の **GPIO 490** が **High** に設定され、検出されない場合は **Low** のままになります。

クロスコンパイル環境の構築は複雑になる可能性があるため、利便性のためにあらかじめコンパイル済みの実行ファイルを提供しています。これをダウンロードして reCamera に直接アップロードするだけで利用できます。[Compiled C++ Model Detector Code](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/model_detector)

モデルファイルについては、**COCO データセット**に基づいて学習された YOLO11n 検出モデルです。80 クラスを含み、人や車両など日常的な物体を認識できます。同様に、学習や変換を自分で行う必要がないようにダウンロードリンクを提供しています。ダウンロード後、そのまま reCamera にアップロードできます。[reCamera Yolo Models](https://wiki.seeedstudio.com/ja/recamera_on_device_models/)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_2n.jpg" /></div>

:::note
ソースコードの修正とクロスコンパイルは、組み込みシステムの経験がある方に推奨されます。さらに詳しく探求したい場合は、ドキュメントを参照してください。
:::

#### 権限付与と実行
ターミナルで、まずコンパイル済みファームウェアと量子化済みモデルをアップロードしたフォルダに移動します。次に、ファームウェアに実行権限を付与し、検出プログラムを起動します。
```bash
chmod +x model_detector
```

視覚的なデモのために、model_detector プログラムには UDP ビデオストリーミング機能が統合されています。reCamera と PC が同じローカルネットワーク（LAN）上にある限り、reCamera 上でプログラムを実行し、PC 上で udp_receiver.py スクリプトを実行することでリアルタイムプレビューを実現できます。

:::note
この UDP ストリームは、あくまでローカル監視およびデモ用途（「おまけ」機能）に限定されています。LoRa 技術の物理的な帯域幅制約により、Meshtastic ネットワーク上でのビデオストリーミングはサポートされておらず、実現も不可能です。Mesh ネットワークを介して実際に送信されるデータは、「Human detected」のような軽量なテキストアラートに限られます。
:::

`0.5`（50%）を信頼度のしきい値の例として使用して、model_detector プログラムを実行するには、次のコマンドを実行します：

```bash
sudo ./model_detector [model_name] [confidence_threshold] [PC_IP_address] [udp_port]
```
ここで：
* `[model_name]`: 量子化済みモデルファイルの名前。この例では `yolo11n_cv181x_int8.cvimodel` です。
* `[confidence_threshold]`: 物体検出用の 0.0 から 1.0 の間の信頼度しきい値。値が高いほど検出数は少なくなりますが、精度は高くなります。この例では `0.5` です。
* `[PC_IP_address]`: `udp_receiver.py` スクリプトを実行するあなたの PC の IP アドレス。この例では `10.0.0.228` です。**必ず、私のではなく、あなた自身の PC の IP アドレスを使用してください。**
* `[udp_port]`: ビデオストリーミングに使用される UDP ポート番号。この例では `5000` です。

以下は完全なコマンド例です：
```bash
sudo ./model_detector yolo11n_cv181x_int8.cvimodel 0.5 10.0.0.228 5000
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_1n.jpg" /></div>

次に、PC 上で `udp_receiver.py` スクリプトをセットアップします。PC に Python、**OpenCV** および **NumPy** ライブラリがインストールされていることを確認してください。その後、リンク [udp_receiver.py](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/udp_receiver.py) から `udp_receiver.py` スクリプトをダウンロードし、PC 上で実行します。この例では、Windows Powershell 上で実行しています：

```bash
python .\udp_receiver.py --port [udp_port] --scale [scale_factor]
```
ここで：
* `[udp_port]`: reCamera からのビデオストリーミングに使用される UDP ポート番号。この例では `5000` です。
* `[scale_factor]`: ビデオフレームをリサイズするためのスケール係数。この例では `1.5` です。

以下は完全なコマンド例です：
```bash
python .\udp_receiver.py --port 5000 --scale 1.5
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_3n.jpg" /></div>

最後に、ターミナル上でリアルタイムに検出されたクラス情報（例：`Class 0`）とその座標が表示されます。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_2n.jpg" /></div>

同時に、PC 上にはライブビデオストリームが表示されます：
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_4n.jpg" /></div>

### XIAO ESP32S3 + Wio-SX1262（Meshtastic ノード）の設定
ここでは、**最初の Mesh ノード** を設定します。このノードは、reCamera からの IO 出力を受信し、テキストメッセージ **"Human detected"** をブロードキャストする役割を担います。

#### ファームウェアの書き込み
デバイスには特定の Mesh ファームウェアを書き込む必要があります。Mesh ネットワークの独自のチャネル管理メカニズムにより、標準ファームウェアでは **DetectionSensor** モジュールから **Channel 0** へ出力された情報は通常破棄されます。これは、高頻度の検出データが Mesh ネットワークのチャネルを占有してしまうのを防ぐために意図的に設計されています。以下の手順に従ってください：

:::note
書き込みを行う前に、一時的に XIAO から **Wio SX1262 拡張ボード** を取り外してください。拡張ボード自体は書き込み処理を妨げませんが、XIAO ESP32S3 上の **BOOT** ボタンを物理的に塞いでしまいます。
:::

1.  まず、事前にコンパイルされた Mesh ファームウェア [Custom Meshtastic Firmware](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/firmware-seeed-xiao-s3-2.7.17.63aadba52.factory.bin) をダウンロードします。
2.  XIAO ESP32S3 を USB ケーブルでコンピュータに接続し、**ブートローダーモードに入ります**。このガイド [XIAO S3 bootloader guide](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#bootloader-mode) を参照できます。
3.  Web ベースの書き込みツール [Meshtastic Web Flasher](https://flasher.meshtastic.org/) を使用し、**Seeed XIAO esp32s3** デバイスを選択してから、先ほどダウンロードしたファームウェアを選択し、最後に **Flash** ボタンをクリックして XIAO ESP32S3 にファームウェアを書き込みます。
ビデオチュートリアルも用意されていますが、Meshtastic 公式ファームウェアではなく、ダウンロードしたファームウェアを書き込むことを忘れないでください。[Flash Firmware Video](https://wiki.seeedstudio.com/ja/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/#flash-firmware)。
4.  書き込みが完了し、エラーが報告されないことを確認したら、XIAO ESP32S3 の電源を切るために USB ケーブルを抜きます。Wio SX1262 拡張ボードを再度取り付け、その後 USB ケーブルをコンピュータに再接続します。これでデバイスは新しいファームウェアで起動します。

#### Mesh ノードの設定
Mesh ノードを設定する方法は 2 つあります。まず、デバイスを USB ケーブルでコンピュータに接続します。その後、1: 別の Mesh Web ツール [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) を使用してシリアル経由で Mesh ノードにアクセスする 2: Meshtastic モバイルアプリをダウンロードして、スマートフォンの Bluetooth 経由で Mesh ノードにアクセスする、のいずれかを選べます。ここでは、PC 上で [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) を使用して esp32s3 と Wio Tracker を設定する方法を示します。

:::note
iOS と Android 上の Mesh アプリの UI、および meshtastic Web クライアントツールの UI は異なる場合がありますが、LoRa 周波数帯の設定など、特定の設定はそれぞれの設定オプション内に必ず存在します。そのため、iOS を持っていなくても心配する必要はありません。他のプラットフォームのアプリにも必ず対応する設定オプションがあります。
:::

:::note
[Meshtastic Web Flasher](https://flasher.meshtastic.org/) と [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) は、Meshtastic が提供する 2 つの公式 Web ツールです。前者は Mesh ファームウェアの書き込みに、後者は Mesh ノードの設定に使用されます。互いに混同しないようにしてください。
:::

1.XIAO esp32s3 Mesh ノードが USB ケーブルでコンピュータに接続されていることを確認します。[Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) を開くと初期ページが表示されます。ここで「+ New Connection」をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_1.png" /></div>

2."Serial" をクリックし、次に "New Device" をクリックして、Mesh ノードのポートを選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_2.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_3.png" /></div>

3.デバイス設定ページに入ります。ここでは、私のデバイス名は "Meshtastic ff28" です。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_4.png" /></div>

4.'Config' -> 'Radio config' -> 'LoRa' をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_5.png" /></div>

5.'Region' と 'Modem Preset' をそれぞれ 'US' と 'Short Turbo' に設定します：
:::note
実際には、Region と Modem Preset の設定に厳密な制限はありませんが、2 つの Mesh ノードデバイス間で Region と Modem Preset の設定が一致している必要があります。本ドキュメントでは、例として 'US' と 'Short Turbo' を使用しています。
:::

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_6.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_7.png" /></div>

6.次に、'Module Config' に移動し、'DetectionSensor' を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_11.png" /></div>

7.このモジュールを有効にし、送信間隔を 15 秒に設定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_12.png" /></div>

8.Friendly Name を 'Human'、Monitor Pin を '3'、Detection Triggered Type を 'LOGIC_HIGH' に設定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_13.png" /></div>

9.次に、'Channel Config' に移動し、'Ch1' を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_8.png" /></div>

10.'Role' を 'SECONDARY' に設定し、Pre-Shared Key format として '128 bit' を選択します。その後、'Generate' をクリックしてランダムな 128-bit Pre-Shared Key を生成します。**この Key を必ず記録し、後で使用できるようにテキストファイルに保存してください。** また、Name を 'reCamera' に設定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_9.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_10.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_15.png" /></div>

11.最後に、'Save' をクリックして設定を保存します。デバイスが設定を保存して再起動するまで待ちます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_14.png" /></div>

SjVzNWwzNTEwQWZUWlo0Yg==

### Wio Tracker L1（Meshtastic ノード）の設定
Wio Tracker の設定も上記と同様で、[Meshtastic Web Flasher](https://flasher.meshtastic.org/) を使用し、'Wio Tracker L1' を選択して、先ほどダウンロードしたカスタムファームウェアではなく **Official Meshtastic Firmware** を書き込みます。[Wio Tracker L1 Firmware Flashing Tutorial](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) を参照してください。

上記と同様に、Wio Tracker L1 についても Region と Modem Preset を 'US' と 'Short Turbo' に設定します。その後、Channel1 を有効にし、Pre-Shared Key を先ほど生成した 128-bit Key に設定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/3_1_1.png" /></div>

### 組み立て
上記と同様に、reCamera 上の GPIO490（緑のワイヤ）を XIAO esp32s3 の D2 に、GND を GND ピンに接続します。これでシステムが動作します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_2.jpg" /></div>

接続が確立されると、Wio Tracker L1 から音が鳴り、Wio Tracker L1 のディスプレイに 'Human detected' というテキストが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_3.jpg" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。特定のカスタマイズ目標についてのガイダンスが必要な場合や、ワークフローをさらに拡張したい場合は、いつでもお気軽にお問い合わせください。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>