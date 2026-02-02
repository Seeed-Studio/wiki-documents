---
title: AI人体検出とMeshtastic通知デモ
description: このwikiでは、AIカメラとXIAO ESP32S3 & Wio SX1262 Meshtasticネットワーキングを使用したAI駆動の人体検出システムを実演し、リアルタイムアラートをブロードキャストします。
keywords:
    - AI人体検出
    - XIAO ESP32S3
    - ESP-Mesh
    - エッジAI
    - GPIOトリガー
slug: /ja/ai_human_detection_meshtastic_broadcast
sku: 100029708,102010611,114993649
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
    date: 2026-01-28
    author: John Xiang
---

## はじめに
このデモでは、reCameraとMeshtastic LoRaメッシュネットワークを統合した強力なエッジAIソリューションを紹介します。ローカルYOLO11nモデルを実行することで、reCameraはリアルタイムで人間を識別し、GPIO信号をトリガーします。この物理信号により、XIAO ESP32S3ノードが分散ネットワーク全体に「人間検出」アラートをブロードキャストします。このセットアップにより、インターネットインフラに依存することなく、自律的なオフグリッド監視とセキュリティが可能になります。このガイドでは、PoEベースボードのハードウェア組み立て、C++デプロイメント、およびAIビジョンと長距離通信を橋渡しするMeshノード設定について説明します。

## ハードウェア準備
<table align="center">
<tbody><tr>
<th>Seeed Studio reCamera HQ PoE 8GB/64GB</th>
<th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa</th>
<th>Wio Tracker L1 Pro</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t3.jpg" style={{width:210, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 詳細を確認🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 詳細を確認🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## デモセットアップ
このデモを実現するには、reCameraと2つのMeshノードを異なって設定する必要があります。まず、reCameraでC++プログラムを実行し、人が検出されたときにGPIO信号をトリガーします。続いて、最初のMeshノードにMeshtasticファームウェアをフラッシュし、このMeshノードがGPIO信号を監視し、信号がトリガーされたときにMeshtasticネットワークにメッセージを送信できるようにします。ブロードキャストされたメッセージは2番目のMeshノードで受信されます。最後に、Bluetooth経由で携帯電話を2番目のMeshノードに接続することで、送信されたメッセージを携帯電話で確認できます。

### reCamera設定
:::warning
お持ちのreCameraベースボードがPoE版であることを確認してください。reCameraのPoE版のみがGPIOインターフェースを備えているためです。reCameraの標準版とPoE版の違いについては、[reCamera 2002(w) 8GB/64GB ハードウェア仕様](https://wiki.seeedstudio.com/ja/recamera_hardware_and_specs/)と[reCamera HQ PoE 8GB/64GB ハードウェア仕様](https://wiki.seeedstudio.com/ja/recamera_hq_poe_hardware/)を参照してください。

PoE版のreCamera[reCamera HQ PoE 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html)を購入された場合は、直接使用してこのデモを再現できます。

標準版のreCamera[reCamera 2002(w) 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)を購入された場合は、追加でPoEベースボード[reCamera Base Board PoE](https://www.seeedstudio.com/reCamera-2002-Base-Board-PoE-p-6559.html)を購入し、reCameraに取り付けて標準ベースボードと交換する必要があります。
:::

以下の設定の目的は、**reCamera**に**物体検出**アプリケーションをデプロイすることです。デフォルトのNode-REDサービスを停止することで、`model_detector`という専用のC++実行ファイルを実行するために必要なハードウェアリソースを解放します。

このセットアップでは、YOLO11nモデル（COCOデータセットで訓練）を使用してリアルタイムエッジコンピューティングを実行します。最終的な目標は、reCameraが特定のオブジェクト（この場合は人間）を自律的に検出できるようにすることです。検出が発生すると、システムは**GPIO 490**を**High**レベルに引き上げることでハードウェア信号をトリガーします。このハードウェアトリガーは、**XIAO ESP32S3 + Wio SX1262** Meshtasticノードとの通信の橋渡しとして機能します。

#### GPIOピンの露出
reCamera PoEベースボードのGPIOピンを露出させるには、ベースボードのネジを外してカバーを取り外す必要があります。次に、六角レンチを使用してカバーを取り外します。ベースボードにコネクタがあり、6つのピンがあります。このコネクタからGPIO 490を使用します。ベースボードのインターフェースの詳細については、[reCamera Base Board with PoE ハードウェア仕様](https://wiki.seeedstudio.com/ja/recamera_hq_poe_hardware/#b3_poe)を参照してください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_1.jpg" /></div>

次に、reCamera PoEパッケージまたはreCamera Base Board with PoEパッケージから、MX1.25-Dupont,6P,6Color:Red-Black-Yellow-Green-Blue-Whiteワイヤーを取り出します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_2.jpg" /></div>

ワイヤーをベースボードのGPIO 490インターフェースに接続します。最終的な接続は下の画像のようになります。GPIO 490は緑のワイヤーに接続されています。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_3.jpg" /></div>

#### reCameraへのログイン
まず、このチュートリアルに従ってreCameraを最新バージョン0.2.2にアップグレードしてください。バージョンがすでに0.2.2の場合は、この手順をスキップできます。[reCamera OSアップグレードチュートリアル](https://wiki.seeedstudio.com/ja/recamera_os_version_control/)

:::note
reCameraのカメラリソースは排他的であるため、デフォルトで実行されているNode-REDおよび関連するAIサービスが基盤となる画像ドライバーを長時間占有します。これらのサービスが実行中にC++物体検出プログラムを直接開始すると、複数のプロセス間で競合が発生し、カメラに正常にアクセスできないためC++プログラムの開始に失敗します。したがって、SSH経由でreCameraにアクセスして、Webサービスを閉じた後もデバイスをリモートで制御できるようにする必要があります。その後、SSH経由でreCameraターミナルでコマンドを実行してNode-REDなどのバックグラウンドプロセスを停止し、カメラのロックを解除してmodel_detectorプログラムに必要なハードウェアアクセスパスをクリアします。
:::

#### SSH接続の確立
**MobaXTerm**などのツールを使用して、SSH経由で**reCamera**にログインします。デフォルトIP：通常`192.168.42.1`
* ログイン後、`/userdata/`ディレクトリに切り替えることをお勧めします。これは通常、ユーザーデータとモデルの保存に使用されるためです。

#### Node-RED関連サービスの停止
reCameraでデフォルトで実行されているNode-REDサービスは大量のシステムリソースを消費するため、C++デモを実行する前に以下の3つのコマンドを実行して停止する必要があります：

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_1.jpg" /></div>

#### モデルとファームウェアのアップロード

**MobaXTermのファイル転送機能**（左ファイルパネルのアップロードアイコン）を使用して、以下のファイルを`/userdata/`ディレクトリにアップロードします。

**コンパイル済みファームウェア**：例：`model_detector`
**量子化モデル**：例：`yolo11n_cv181x_int8.cvimodel`

ここでの`model_detector`は実行ファイルです。これは**reCamera SDK**を設定し、C++ソースコードを**クロスコンパイル**することで生成されます。このプログラムのロジックは次のとおりです：アップロードされた`yolo.cvimodel`を使用してフレーム内に人間が存在するかを検出します。人間が検出された場合、reCamera PoEベースボードの**GPIO 490**が**High**に設定されます。そうでなければ**Low**のままです。

クロスコンパイル環境の設定は複雑になる可能性があるため、便宜上、事前にコンパイルされた実行ファイルを提供しています。単純にダウンロードしてreCameraに直接アップロードできます。[コンパイル済みC++モデル検出器コード](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/model_detector)

モデルファイルについては、**COCOデータセット**に基づいて訓練されたYOLO11n検出モデルです。80のクラスが含まれており、人間や車両などの一般的な日常オブジェクトを認識できます。同様に、モデルを自分で訓練または変換する必要がないよう、ダウンロードリンクを提供しています。ダウンロード後、reCameraに直接アップロードできます。[reCamera Yoloモデル](https://wiki.seeedstudio.com/ja/recamera_on_device_models/)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_2.jpg" /></div>

:::note
ソースコードの変更とクロスコンパイルの実行は、組み込みシステムの経験がある方にお勧めします。これをさらに探求することに興味がある場合は、ドキュメントを参照してください。
:::

#### 権限の付与と実行
ターミナルで、まずコンパイル済みファームウェアと量子化モデルをアップロードしたフォルダーにアクセスします。次に、ファームウェアに実行権限を追加し、検出プログラムを開始します。
```bash
chmod +x model_detector
```
以下のコマンドを実行します（信頼度閾値として`0.5`（50%）を使用する例）：

```bash
sudo ./model_detector yolo11n_cv181x_int8.cvimodel 0.5
```

実行が成功すると、ターミナルでリアルタイムで検出されたクラス情報（例：`Class 0`）とその座標が表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_2.jpg" /></div>

### XIAO ESP32S3 + Wio-SX1262（Meshtasticノード）の設定
次に、**最初のMeshノード**を設定します。このノードは、reCameraからのIO出力を受信し、テキストメッセージ「**Human detected**」をブロードキャストする役割を担います。

#### ファームウェアの書き込み
デバイスには特定のMeshファームウェアを書き込む必要があります。Meshネットワークの独特なチャネル管理メカニズムにより、標準ファームウェアでは**DetectionSensor**モジュールが**Channel 0**に出力する情報は通常破棄されます。この設計は、高頻度の検出データがMeshネットワークチャネルを詰まらせることを防ぐ意図的なものです。以下の手順に従ってください：

:::note
書き込み前に、XIAOから**Wio SX1262拡張ボード**を一時的に取り外してください。拡張ボードは書き込みプロセス自体には干渉しませんが、XIAO ESP32S3の**BOOT**ボタンを物理的に遮ってしまいます。
:::

1.  まず、プリコンパイル済みのMeshファームウェア[Custom Meshtastic Firmware](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/firmware-seeed-xiao-s3-2.7.17.63aadba52.factory.bin)をダウンロードします。
2.  XIAO ESP32S3をUSBケーブルでコンピュータに接続し、**ブートローダーモード**に入ります。このガイド[XIAO S3 bootloader guide](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/#bootloader-mode)を参照してください。
3.  ウェブベースの書き込みツール[Meshtastic Web Flasher](https://flasher.meshtastic.org/)を使用して**Seeed XIAO esp32s3**デバイスを選択し、ダウンロードしたファームウェアを選択して、最後に**Flash**ボタンをクリックしてXIAO ESP32S3にファームウェアを書き込みます。
ビデオチュートリアルが利用可能ですが、Meshtastic公式ファームウェアではなく、ダウンロードしたファームウェアを書き込むことを忘れないでください[Flash Firmware Video](https://wiki.seeedstudio.com/ja/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/#flash-firmware)。
4.  書き込みが完了してエラーが報告されなかったら、XIAO ESP32S3を抜いて電源を切ります。Wio SX1262拡張ボードを再取り付けし、USBケーブルをコンピュータに再接続します。デバイスは新しいファームウェアで起動します。

#### Meshノードの設定
Meshノードを設定する方法は2つあります。まず、デバイスをUSBケーブルでコンピュータに接続し、次に1：別のMeshウェブツール[Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0)を使用してシリアル経由でmeshノードにアクセスする、2：Meshtasticモバイルアプリをダウンロードして、スマートフォンでBluetooth経由でMeshノードにアクセスする、のいずれかを選択できます。ここでは、PCで[Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0)を使用してesp32s3とWio Trackerを設定する方法を実演します。

:::note
iOSとAndroidのMeshアプリのUI、およびmeshtastic web clientツールのUIは異なる場合がありますが、LoRa周波数帯の設定などの特定の設定は、すべて対応する設定オプションで見つけることができます。したがって、iOSをお持ちでない場合でも心配する必要はありません。他のプラットフォームのアプリには必ず対応する設定オプションがあります。
:::

:::note
[Meshtastic Web Flasher](https://flasher.meshtastic.org/)と[Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0)は、Meshtasticが提供する2つの公式ウェブツールです。これらはそれぞれMeshノードの設定とMeshファームウェアの書き込みに使用されます。混同しないでください。
:::

1.XIAO esp32s3 MeshノードがUSBケーブルでコンピュータに接続されていることを確認します。[Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0)を開くと、初期ページが表示されます。「+ New Connection」をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_1.png" /></div>

2.「Serial」をクリックし、「New Device」をクリックして、Meshノードのポートを選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_2.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_3.png" /></div>

3.デバイス設定ページに入ります。ここでは、私のデバイス名は「Meshtastic ff28」です。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_4.png" /></div>

4.「Config」→「Radio config」→「LoRa」をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_5.png" /></div>

5.「Region」と「Modem Preset」をそれぞれ「US」と「Short Turbo」に設定します：
:::note
実際には、RegionとModem Presetの設定に厳格な制限はありませんが、お持ちの2つのMeshノードデバイスのRegionとModem Presetの設定が一致していることを確認する必要があります。この文書では、例として「US」と「Short Turbo」を使用します。
:::

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_6.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_7.png" /></div>

6.次に、「Module Config」に移動して「DetectionSensor」を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_11.png" /></div>

7.このモジュールを有効にし、送信間隔を15秒に設定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_12.png" /></div>

8.Friendly Nameを「Human」に、Monitor Pinを「3」に、Detection Triggered Typeを「LOGIC_HIGH」に設定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_13.png" /></div>

9.次に、「Channel Config」に移動して「Ch1」を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_8.png" /></div>

10.「Role」を「SECONDARY」に設定し、Pre-Shared Key formatで「128 bit」を選択します。次に「Generate」をクリックしてランダムな128ビットPre-Shared Keyを作成します。**このキーを覚えておき、後で使用するためにテキストファイルに保存してください。**また、Nameを「reCamera」に設定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_9.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_10.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_15.png" /></div>

11.最後に、「Save」をクリックして設定を保存します。デバイスが設定を保存して再起動するまで待ちます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_14.png" /></div>

SjVzNWwzNTEwQWZUWlo0Yg==

### Wio Tracker L1（Meshtasticノード）の設定
Wio Trackerの設定も同様です。[Meshtastic Web Flasher](https://flasher.meshtastic.org/)を使用して「Wio Tracker L1」を選択し、上記でダウンロードしたカスタムファームウェアではなく**公式Meshtasticファームウェア**を書き込みます。[Wio Tracker L1 Firmware Flashing Tutorial](https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)を参照してください。

上記と同様に、Wio Tracker L1のRegionとModem Presetを「US」と「Short Turbo」に設定します。次に、Channel1を有効にし、Pre-Shared Keyを上記で生成した128ビットキーに設定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/3_1_1.png" /></div>

### 組み立て
上記と同様に、reCameraのGPIO490（緑線）をXIAO esp32s3のD2に接続します。これでシステムが動作します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_2.jpg" /></div>

接続が確立されると、Wio Tracker L1から音が聞こえ、Wio Tracker L1のディスプレイに「Human detected」テキストが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_3.jpg" /></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！特定のカスタマイズ目標に関するガイダンスが必要な場合や、ワークフローをさらに拡張したい場合は、お気軽にお問い合わせください。弊社製品での体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>