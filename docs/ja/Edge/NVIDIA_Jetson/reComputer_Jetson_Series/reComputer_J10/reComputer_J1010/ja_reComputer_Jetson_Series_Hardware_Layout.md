---
description: reComputer シリーズ Jetson 用
title: reComputer シリーズのハードウェアレイアウト
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Series_Hardware_Layout
last_update:
  date: 05/15/2025
  author: w0x7ce

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer のハードウェアレイアウト

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian.png" alt="pir" width={600} height="auto" /></p>

ここでは、Jetson シリーズ用 reComputer のハードウェアレイアウトの基本的な概要を説明します。また、キャリアボードからコアボードを取り外したり取り付けたりする方法、カメラ、M.2 Wi-Fi モジュール、またはハードディスクを取り付ける方法などについても説明します。

## reComputer シリーズの配置

reComputer インターフェースのバックプレーンを正面に向けた場合、シャーシの右側には立てやすいように4つの滑り止めパッドがあります。以下の図に示されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian1.png" alt="pir" width={600} height="auto" /></p>

reComputer シャーシの底部は吊り下げ構造になっており、結束バンドを使用して不便な構造に固定することができます。シャーシの底板には4つの固定穴があり、垂直面や傾斜面に固定するのに便利です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/Jetsonbackspec2.png" alt="pir" width={800} height="auto" /></p>

## reComputer シリーズのトップカバー

reComputer インターフェースのバックプレーンを正面に向けた場合、シャーシの右側には4つの滑り止めパッドがあり、金属製のボタンが見えます。以下の図に示されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly.jpg" alt="pir" width={500} height="auto" /></p>

ボタンを上に押し上げるとケースのトップカバーが持ち上がり、開けてトップカバーを取り外すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly1.jpg" alt="pir" width={500} height="auto" /></p>

## キャリアボードからコアボードを取り外す

シャーシを開けると、キャリアボードに挿入されたモジュールが見えます。以下の図に示されています。以下の手順に従ってモジュールをキャリアボードから取り外すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 1**: コアバージョンを取り外す前に、まずファンの電源が接続されているかどうかを確認する必要があります。接続されている場合は、プラグからファンの電源を抜く必要があります（Jetson Nano ではファンがない場合があり、このステップをスキップできます）。

- **ステップ 2**: 十字ドライバーを使用してコアプレートを固定しているネジを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ 3**: キャリアプレートのクランプを外側に開くと、コアプレートが自動的に持ち上がります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly3.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ 4**: コアボードを斜め上に取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly4.jpg" alt="pir" width={500} height="auto" /></p>

## モジュールをキャリアボードに取り付ける

- **ステップ 1**. キャリアボード上の対応するJetson SODIMMコネクタの端子とモジュールのコネクタを見つけます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ 2**. モジュールを約20度の角度でキャリアプレートのスロットに斜めに挿入します。押し下げるとキャリアボードに固定されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion2.jpg" alt="pir" width={500} height="auto" /></p>

!!! 注意
    正しい取り付けを行った場合、インターフェースにいくつかのコネクタ端子が見えることがあります。多くのコネクタ端子が露出している場合、不安定になる可能性があります。
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion3.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ 3**. 十字ドライバーを使用してネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ 4**. モジュールに冷却ファンが含まれている場合は、ファンの電源プラグをキャリアボードの電源ソケットに差し込みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

## キャリアボードをreComputerシャーシから取り外す

M.2モジュールやCSIカメラを取り付けるなどの操作を行う場合、キャリアボードをreComputerシャーシから取り外す必要があります。キャリアボードはシャーシのベースに4本のネジで固定されています。以下の図に示されています：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian5.jpg" alt="pir" width={600} height="auto" /></p>

以下のように4本の固定ネジを取り外します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian6.jpg" alt="pir" width={600} height="auto" /></p>

モジュールと一緒にキャリアボードをシャーシから取り出します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian7.jpg" alt="pir" width={600} height="auto" /></p>

## reComputerにカメラモジュールを装備する

reComputerキャリアボードには2つのCSIインターフェースがあります。これらのインターフェースは通常、識別プロジェクト用のカメラを接続するために使用されます。ここでは、J1010キャリアボードを例にして、[Raspberry Pi Camera Module V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)をreComputerに装備して使用する方法を説明します。

- **ステップ 1**. カメラモジュールをキャリアボードに取り付ける

!!!注意
    取り付け前に、reComputerの電源を切り、電源を抜き、シャーシの上部カバーを開けてください。
    以下のデモンストレーションの便宜のため、キャリアボードをシャーシとモジュールから取り外しました。実際の操作では上部カバーを開けるだけで十分です。

使用するCSIコネクタを選択し、両側の黒い保持スロットを優しく持ち上げます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/chai.jpg" /></div>

ケーブルをスロットに挿入する前に、黒いスロットを横に設定してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/cha.jpg" /></div>

ケーブルの向きに注意してください。ケーブルピンの側がキャリアボードに向いており、青い側が外側を向いていることが確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/que.JPG" /></div>

- **ステップ 2**. 電源を入れてreComputerを起動します。

カメラケーブルを差し込んだ後、モジュール、キャリアボード、周辺機器がすべて正しく取り付けられていることを確認し、電源を入れます。

- **ステップ 3**. カメラが認識されているか確認します。

コマンドラインウィンドウで以下のコマンドを入力し、現在カメラデバイスが利用可能かどうか確認します。

```shell
ls /dev/video0 
```

以下のように出力される場合、カメラが正常に検出されたことを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/50.jpg" /></div>

デバイスファイルが表示されない場合は、リボンの向きが正しいか確認し、Raspberry PiカメラがV2バージョンであることを確認してください。V1バージョンは認識されません。

- **ステップ 4**. カメラを使用する

GStreamerのnvarguscamerasrc要素で`sensor_mode`属性を使用してカメラを指定できます。有効な値は0または1（指定されない場合はデフォルトで0）です。例：

```shell
# 簡単なテスト
# Ctrl^Cで終了
# sensor_idはカメラを選択します: Jetson Nano B01では0または1
$ gst-launch-1.0 nvarguscamerasrc sensor_id=0 ! nvoverlaysink
```

以下のコマンドをコマンドラインウィンドウで使用してカメラの使用をテストできます。

このコマンドを実行すると、reComputerはカメラが撮影した画面をフルスクリーンで表示し、`Ctrl+C`を押すまで続きます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/51.jpg" /></div>

さらにカメラの使用方法が必要な場合は、[CSI-Cameraプロジェクト](https://github.com/JetsonHacksNano/CSI-Camera)を参照して、自分で探索して学習してください。

## reComputer にワイヤレスモジュールを装備する

ここでは、reComputer に M.2 Key E ワイヤレスモジュールを取り付ける方法を説明します。

必要な機器とアクセサリ：

- reComputer
- [Intel® Dual Band Wireless-AC 8265 ワイヤレスモジュール](https://www.intel.cn/content/www/cn/zh/products/sku/123742/intel-dual-band-wirelessac-8265-desktop-kit/specifications.html)
- IPEX から SMA メス外部アンテナアダプタおよび SMA オスアンテナ（Wi-Fi モジュール用）×2
- プラスドライバーとネジ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian8.jpg" alt="pir" width={600} height="auto" /></p>

!!!注意
    M.2 Key E のワイヤレスモジュールを取り付けるには、追加のアンテナが必要です。モジュールがシャーシ内にあり、モジュールとキャリアボードの間に挟まれる可能性があるため、アンテナがないと信号強度が大幅に低下します。

- **ステップ 1**. reComputer シャーシからキャリアボードを取り外す

ワイヤレスモジュールを取り付ける前に、以下の図のように reComputer シャーシからキャリアボードを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian9.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 2**. ケースのシリコンプラグを取り外す

シャーシには 4 つのアンテナ用開口部があり、シリコンプラグで塞がれています。以下の図を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian10.jpg" alt="pir" width={600} height="auto" /></p>

外側の 2 つの穴を選び、シャーシの外側から内側に向けてシリコンプラグを押し込み、内側から引き抜いてアンテナ穴を露出させます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian11.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 3**. SAM ヘッダーを取り付ける

以下の図のように、SAM ヘッドのナットを Wi-Fi 用の穴に取り付けます。この際、ケーブルの端をシャーシ内に配置するよう注意してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian12.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 4**. ワイヤレスモジュールを M.2 Key E ポートに挿入する

!!!注意
    M.2 Key E インターフェースはキャリアボードの底面または上面にあります。キャリアによって異なるため、キャリアボードのハードウェアレイアウトを参照してください。取り付け前に、コアボードをキャリアボードから取り外す必要がある場合があります。

以下の図のように、キャリアボード上の M.2 Key E インターフェースを見つけ、ワイヤレスモジュールをインターフェーススロットに挿入します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian13.jpg" alt="pir" width={600} height="auto" /></p>

ワイヤレスモジュールをしっかりと挿入した後、ネジで固定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian14.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 5**. 2 つの IPEX プラグをワイヤレスモジュールの対応するソケットに挿入します。接続はボタン式で、以下の図のように押し込むだけで操作は完了です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian15.jpg" alt="pir" width={600} height="auto" /></p>

取り付け後は以下の図のようになります。この時、ワイヤレスモジュールと SAM アンテナベースの間のワイヤを切断しないよう注意してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian16.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 6**. モジュールをシャーシに取り付ける

キャリアボードを慎重に reComputer シャーシに配置し、ネジを取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian17.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 7**. アンテナを装備する

2 つの SAM オスアンテナを SAM メスソケットに取り付け、締め付けます。これでハードウェアの取り付けは完了です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian18.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 8**. reComputer の電源を入れ、ワイヤレスネットワークに接続する

周辺機器を reComputer に接続し、電源を入れます。システムに入り、画面右上のネットワークオプションを開きます。**Wi-Fi を有効にする** オプションを確認すると、近くのワイヤレスネットワークが表示されます。利用可能なワイヤレスネットワークを選択して接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian19.jpg" alt="pir" width={800} height="auto" /></p>

おめでとうございます！ ワイヤレスモジュールの取り付けとネットワーク接続が成功しました。

## ハードウェアレイアウト

### **J101 キャリアボード**

**上面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ101v2.png" alt="pir" width={750} height="auto" /></p>

### **J202 キャリアボード**

**上面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20FRONT.png" alt="pir" width={750} height="auto" /></p>

**底面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20BACK.png" alt="pir" width={750} height="auto" /></p>

### **Jetson A206 キャリアボード（Jetson Nano 搭載）**

*Jetson A206 キャリアボード（Jetson Nano 搭載）のピンと操作インターフェースについては[こちら](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf)をクリックしてください。*

**上面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**底面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboards.jpg" alt="pir" width={600} height="auto" /></p>

### **Jetson A206 キャリアボード（Jetson Xavier NX 搭載）**

*Jetson A206 キャリアボード（Jetson Nano 搭載）のピンと操作インターフェースについては[こちら](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf)をクリックしてください。*

**上面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**底面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboards.jpg" alt="pir" width={720} height="auto" /></p>

## 詳細比較

|        製品名       |                                                    reComputer J1010                                                   |                         reComputer J1020                        |                                                    reComputer J2011                                                   |                                                    reComputer J2012                                                   |
|:--------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|
|        モジュール        |                                                    Nano                                                    |                         Nano                         |                                                 Xavier NX                                                  |                                               Xavier NX 16GB                                               |
|        AI性能       |                                                           472 GFLOPS                                                           |                                472 GFLOPS                                | 21 TOPS                                                                                                                        | 21 TOPS                                                                                                                        |
|          GPU         |                                                    128-core NVIDIA Maxwell™                                                    |                         128-core NVIDIA Maxwell™                         | 384-core NVIDIA Volta™ GPU                                                                                                     | 384-core NVIDIA Volta™ GPU                                                                                                     |
|          CPU         |                                                  Quad-core ARM A57 @ 1.43 GHz                                                  |                       Quad-core ARM A57 @ 1.43 GHz                       | 6-core NVIDIA Carmel ARM®v8.2 64-bit CPU 6 MB L2 + 4 MB L3                                                                     | 6-core NVIDIA Carmel ARM®v8.2 64-bit CPU 6 MB L2 + 4 MB L3                                                                     |
|        メモリ        |                                                   4GB 64-bit LPDDR4 25.6GB/s                                                   |                        4GB 64-bit LPDDR4 25.6GB/s                        | 8 GB 128-bit LPDDR4x 59.7GB/s                                                                                                  | 8 GB 128-bit LPDDR4x 59.7GB/s                                                                                                  |
|        ストレージ       |                                                           16 GB eMMC                                                           |                                16 GB eMMC                                | 16 GB eMMC                                                                                                                     | 16 GB eMMC                                                                                                                     |
|     ビデオエンコーダ    |                             4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264)                            |  4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264) |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |
|     ビデオデコーダ    |                            4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264)                            | 4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) |
|   ギガビットイーサネット   |                                         1x RJ45 ギガビットイーサネットコネクタ (10/100/1000)                                        |              1x RJ45 ギガビットイーサネットコネクタ (10/100/1000)             | 1x RJ45 ギガビットイーサネットコネクタ (10/100/1000)                                                                                | 1x RJ45 ギガビットイーサネットコネクタ (10/100/1000)                                                                                |
|          USB         | 1 x  USB 3.0 Type A コネクタ;  2 x  USB 2.0 Type A コネクタ; 1 x  USB Type C（デバイスモード用）; 1 x  USB Type C（5V電源入力用） |    4 x  USB 3.0 Type A コネクタ； 1 x  Micro-USBポート（デバイスモード用）;    |                               4 x  USB 3.0 Type A コネクタ； 1 x  Micro-USBポート（デバイスモード用）;                               |                               4 x  USB 3.0 Type A コネクタ； 1 x  Micro-USBポート（デバイスモード用）;                               |
|  CSIカメラ接続  |                                          2x CSI カメラ (15 pos, 1mm pitch, MIPI CSI-2 )                                         |               2x CSI カメラ (15 pos, 1mm pitch, MIPI CSI-2 )              | 2x CSI カメラ (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  | 2x CSI カメラ (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  |
|        ディスプレイ       |                                                          1x HDMI Type A                                                         |                            1xHDMI Type A; 1xDP                           | 1xHDMI Type A; 1xDP                                                                                                            | 1xHDMI Type A; 1xDP                                                                                                            |
|          FAN         |                                                         1x  FAN(5V PWM)                                                         |                              1x  FAN(5V PWM)                              | 1x  FAN(5V PWM)                                                                                                                 | 1x  FAN(5V PWM)                                                                                                                 |
|       M.2 KEY E      |                                                           1x M.2 Key E                                                          |                          1x M.2 Key E（無効化）                         |                                                           1x M.2 Key E                                                          |                                                           1x M.2 Key E                                                          |
|       M.2 KEY M      |                                                                -                                                               |                                1x M.2 Key M                               | 1x M.2 Key M                                                                                                                    | 1x M.2 Key M                                                                                                                    |
|          RTC         |                                                          1x RTC ソケット                                                          |                               1x RTC ソケット                               |                                                          1x RTC ソケット                                                          |                                                          1x RTC ソケット                                                          |
| 多機能ポート |                                                        1x  40ピンヘッダー                                                        |                             1x  40ピンヘッダー                             | 1x  40ピンヘッダー                                                                                                               | 1x  40ピンヘッダー                                                                                                               |
|  電源  |                                                       USB-Type C 5V⎓3A；                                                       |                              DCジャック 12V/2A                              | DCジャック 19V/4.74A (最大90W)                                                                                                      | DCジャック 19V/4.74A (最大90W)                                                                                                      |
|      機械的寸法      |                                                     130 mm x 120 mm x 50 mm                                                    |                            130mm x120mm x 50mm                           |                                                       130mm x120mm x 50mm                                                      |                                                       130mm x120mm x 50mm                                                      |
|                      |                                                                                                                                |                                                                          |                                                                                                                                |                                                                                                                                |

## キャリアボード技術仕様

| コネクタ                 | J1010 キャリアボード                                   | Jetson A206 キャリアボード                                |
|--------------------------|--------------------------------------------------|--------------------------------------------------|
| Jetson モジュールコネクタ | 1x Jetson SODIMM コネクタ、260ピン              | 1x Jetson SODIMM コネクタ、260ピン              |
| USB Type A              | 1x USB 3.0 Type-A コネクタ 2x USB 2.0 Type A コネクタ                      | 4x USB 3.0 Type-A コネクタ                      |
| USB Micro Type B        | -                                               | 1x USB Micro B、RA メスコネクタ                        |
| USB Type C              | 2x Type C コネクタ                             | -                                               |
| Ethernet ポート          | 1x RJ45 ギガビットイーサネットコネクタ (10/100/1000) | 1x RJ45 ギガビットイーサネットコネクタ (10/100/1000) |
| Display Port            | 1x HDMI Type A                          | 1x HDMI Type A および 1x DP                          |
| CSI カメラコネクタ       | 2x CSI カメラ (15ピン、1mmピッチ、MIPI CSI-2)   | 2x CSI カメラ (15ピン、1mmピッチ、MIPI CSI-2)   |
| M.2 Key E               | 1x M.2 Key E スロット (75ピン) 2230                                     | 1x M.2 Key E スロット (75ピン) 2230                  |
| M.2 Key M               | -                                               | 1x M.2 Key M スロット (75ピン) NVME 2280             |
| 多機能ポート             | 2.0 ピッチ 40 ピン                                | 2.0 ピッチ 40 ピン                                |
| ボタンヘッダー           | 1x ボタンヘッダー (1x12、2.54mm ピッチ、RA)        | 1x ボタンヘッダー (1x12、2.54mm ピッチ、RA)        |
| FAN コネクタ            | 1x Picoblade ヘッダー                              | 1x Picoblade ヘッダー                              |
| CAN                     | 無効化                                           | 1x CAN バスヘッダー (1x4、2.54mm ピッチ、RA)        |
| RTC                     | 1x RTC バックアップコインセルソケット (CR1220)         | 1x RTC バックアップコインセルソケット (CR1225)         |
| 電源                    | 1x Type C コネクタ                            | 1x DC 入力電源 TE コネクタ                   |

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>