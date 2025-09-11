---
description: reComputer for Jetson Series 
title: reComputerシリーズのハードウェアレイアウト
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Series_Hardware_Layout
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# reComputerのハードウェアレイアウト

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian.png" alt="pir" width={600} height="auto" /></p>

ここでは、reComputer for Jetsonシリーズのハードウェアレイアウトの基本的な概念を理解できます。同時に、キャリアボードからコアボードを取り外して取り付ける方法、カメラ、M.2 Wi-Fiモジュール、ハードディスクなどを取り付ける方法を学習できます。

## reComputerシリーズの設置

reComputerインターフェースの背面パネルに向かって、シャーシの右側に4つの滑り止めパッドがあり、立てやすくなっています。下図に示すとおりです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian1.png" alt="pir" width={600} height="auto" /></p>

reComputerシャーシの底部は吊り下げ構造になっており、結束テープで不便な構造物にシャーシを固定できます。シャーシ底板には4つの固定穴があり、立面や斜面への固定が容易です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/Jetsonbackspec2.png" alt="pir" width={800} height="auto" /></p>

## reComputerシリーズのトップカバー

reComputerインターフェースの背面パネルに向かって、シャーシの右側に4つの滑り止めパッドがあり、そこに金属ボタンが見えます。下図に示すとおりです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly.jpg" alt="pir" width={500} height="auto" /></p>

ボタンを上に押してケースのトップカバーを持ち上げ、その後持ち上げて開いてトップカバーを取り外すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly1.jpg" alt="pir" width={500} height="auto" /></p>

## キャリアボードからコアボードを取り外す

シャーシを開くと、キャリアボードに挿入されたモジュールが見えます。下図に示すとおりです。以下の手順に従って、モジュールをキャリアボードから取り外すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ1**: コアボードを取り外す前に、まずファンの電源が接続されているかどうかを確認する必要があります。接続されている場合は、プラグからファンの電源を抜く必要があります（Jetson Nanoの場合、ファンがない場合があるため、この手順をスキップできます）。

- **ステップ2**. プラスドライバーでコアプレートを固定しているネジを取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ3**. キャリアプレートのクランプを外側に開くと、コアプレートが自動的に跳ね上がります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly3.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ4**. コアボードを斜め上に取り外します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly4.jpg" alt="pir" width={500} height="auto" /></p>

## キャリアボードにモジュールを取り付ける

- **ステップ1**. キャリアボード上の対応するJetson SODIMMコネクタフィンガーとモジュール上のコネクタを見つけます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ2**. モジュールをキャリアプレートのスロットに約20度斜めに挿入します。押し下げるとキャリアボードに固定されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion2.jpg" alt="pir" width={500} height="auto" /></p>

!!! Note
    正しく取り付けられた場合、インターフェースにいくつかのコネクタフィンガーが見えることがあります。多くのコネクタフィンガーが露出すると不安定になります。
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion3.jpg" alt="pir" width={800} height="auto" /></p>

- **ステップ3**. プラスドライバーを使用してネジを締めます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ4**. モジュールに冷却ファンが含まれている場合は、ファンの電源プラグをキャリアボード上の電源ソケットに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg" alt="pir" width={600} height="auto" /></p>

## reComputerシャーシからキャリアボードを取り外す

M.2モジュールやCSIカメラなどを取り付ける際は、より簡単な操作のためにreComputerシャーシからキャリアボードを取り外す必要があります。キャリアボードは4本のネジでシャーシベースに固定されています。以下の図に示すとおりです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian5.jpg" alt="pir" width={600} height="auto" /></p>

以下に示すように4本の固定ネジを取り外します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian6.jpg" alt="pir" width={600} height="auto" /></p>

キャリアボードをモジュールと一緒にシャーシから取り出します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian7.jpg" alt="pir" width={600} height="auto" /></p>

## reComputerにカメラモジュールを装備する

両方のreComputerキャリアボードには2つのCSIインターフェースがあります。これらのインターフェースは通常、識別プロジェクト用のカメラ接続に使用されます。ここではJ1010キャリアボードを例に、reComputerに[Raspberry Pi Camera Module V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)を装備して使用する方法をご案内します。

- **ステップ1**. キャリアボードにカメラモジュールを取り付ける

!!!Note
    取り付け前に、reComputerの電源を切り、電源プラグを抜いて、シャーシの上部カバーを開けてください。
    以下のデモンストレーションの便宜上、キャリアボードをシャーシとモジュールから取り外しました。実際の操作では上部カバーを開けるだけで十分です。

使用したいCSIコネクタを選択し、両側の黒い保持スロットを優しく上に持ち上げます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/chai.jpg" /></div>

ケーブルをスロットに挿入する前に、黒いスロットを脇に設定してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/cha.jpg" /></div>

ケーブルの方向に注意してください。ケーブルピンの側がキャリアボードに向いており、青い側が外側に向いていることがわかります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/que.JPG" /></div>

- **ステップ2**. 電源を入れてreComputerを起動する。

カメラケーブルを接続した後、モジュール、キャリアボード、周辺機器がすべて適切に取り付けられていることを確認してください。その後、電源を入れます。

- **ステップ3**. カメラが認識されているかを確認する。

コマンドラインウィンドウで以下のコマンドを入力して、現在カメラデバイスが利用可能かどうかを確認します。

```shell
ls /dev/video0 
```

出力が以下のように表示されれば、カメラが正常に検出されたことを意味します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/50.jpg" /></div>

デバイスファイルが表示されない場合は、リボンケーブルの向きが正しいかどうかを確認し、Raspberry Pi カメラが V2 バージョンであることを確認してください。V1 バージョンは認識されません。

- **ステップ 4**. カメラの適用

GStreamer nvarguscamerasrc 要素で `sensor_mode` 属性を使用して、どのカメラを指定するかを設定できます。有効な値は 0 または 1 です（指定されていない場合はデフォルトで 0）。つまり、

```shell
# Simple Test
# Ctrl^C to exit
# sensor_id selects the camera: 0 or 1 on Jetson Nano B01
$ gst-launch-1.0 nvarguscamerasrc sensor_id=0 ! nvoverlaysink
```

コマンドラインウィンドウで以下のコマンドを使用して、カメラの使用方法をテストできます。

このコマンドを実行すると、reComputerは`Ctrl+C`を押すまで、カメラで撮影した画面をフルスクリーンで表示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/51.jpg" /></div>

より多くのカメラ使用ニーズがある場合は、[CSI-Cameraプロジェクト](https://github.com/JetsonHacksNano/CSI-Camera)を参照して、自分で探索し学習することができます。

## reComputerにワイヤレスモジュールを装備する

ここでは、reComputerにM.2 Key Eワイヤレスモジュールをインストールする方法を説明します。

必要な機器とアクセサリ：

- reComputer
- [Intel® Dual Band Wireless-AC 8265ワイヤレスモジュール](https://www.intel.cn/content/www/cn/zh/products/sku/123742/intel-dual-band-wirelessac-8265-desktop-kit/specifications.html)
- 2 x IPEXからSMAメス外部アンテナアダプターとWIFIモジュール用SMAオスアンテナ
- プラスドライバーとネジ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian8.jpg" alt="pir" width={600} height="auto" /></p>

!!!Note
    M.2 Key Eのワイヤレスモジュールをインストールするには、追加のアンテナが必要です。モジュールがシャーシ内にあるため、モジュールとキャリアボードの間に挟まれる可能性もあります。アンテナがないと、信号強度が大幅に影響を受けます。

- **ステップ1**. reComputerシャーシからキャリアボードを取り外す

ワイヤレスモジュールをインストールする前に、以下に示すようにreComputerシャーシからキャリアボードを取り外します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian9.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ2**. ケースのシリコンプラグを取り外す

シャーシには4つの予約されたアンテナ開口部があり、以下の図に示すようにシリコンプラグで塞がれています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian10.jpg" alt="pir" width={600} height="auto" /></p>

外側の2つの穴を選択し、シャーシの外側から内側にシリコンプラグを押し込み、次に内側からシリコンプラグを引き抜いてアンテナ穴を露出させます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian11.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ3**. SAMヘッダーをインストールする

以下の図に示すように、SAMヘッドのナットとナットをwifi穴に取り付け、ケーブル端をシャーシ内に配置することに注意してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian12.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ4**. ワイヤレスモジュールをM.2 Key Eポートに挿入する

!!!Note
    M.2 Key Eインターフェースは、キャリアボードの底面または上面にあります。異なるキャリアについては、Carrier Board Hardware Layoutを参照してください。インストール前に、キャリアボードからコアボードを取り外すことをお勧めします。

以下の図に示すように、キャリアボード上のM.2 Key Eインターフェースを見つけ、ワイヤレスモジュールをインターフェーススロットに挿入します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian13.jpg" alt="pir" width={600} height="auto" /></p>

ワイヤレスモジュールがしっかりと挿入されたら、ネジで固定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian14.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ5**. 2つのIPEXプラグをワイヤレスモジュールの対応するソケットに挿入します。接続はボタン接続で、以下の図に示すとおりです。単純に押すだけで、それ以上の操作は必要ありません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian15.jpg" alt="pir" width={600} height="auto" /></p>

インストールは以下の図のようになります。この時、ワイヤレスモジュールとSAMアンテナベース間のワイヤを破損しないよう注意してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian16.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ6**. モジュールをシャーシに取り付ける

キャリアボードを慎重にreComputerシャーシに配置し、ネジを取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian17.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ7**. アンテナを装備する

2つのSAMオスアンテナをSAMメスソケットに取り付けて締めます。これでハードウェアのインストールは完了です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian18.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ8**. reComputerの電源を入れ、ワイヤレスネットワークに接続する

周辺機器をreComputerに接続してから電源を入れます。システムに入り、画面右上のネットワークオプションを開きます。**Enable Wi-Fi**オプションをチェックした後、近くのワイヤレスネットワークが表示されます。利用可能なワイヤレスネットワーク接続を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian19.jpg" alt="pir" width={800} height="auto" /></p>

おめでとうございます。ワイヤレスモジュールのインストールとネットワークへの接続が正常に完了しました。

## ハードウェアレイアウト

### **J101 キャリアボード**

**上面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ101v2.png" alt="pir" width={750} height="auto" /></p>

### **J202 キャリアボード**

**上面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20FRONT.png" alt="pir" width={750} height="auto" /></p>

**底面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102991695/J202%20BACK.png" alt="pir" width={750} height="auto" /></p>

### **Jetson A206 キャリアボード（Jetson Nano搭載）**

*Jetson A206 キャリアボード（Jetson Nano搭載）の動作インターフェースへのピン配置を確認するには[こちら](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf)をクリックしてください。*

**上面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**底面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboards.jpg" alt="pir" width={600} height="auto" /></p>

### **Jetson A206 キャリアボード（Jetson Xavier NX搭載）**

*Jetson A206 キャリアボード（Jetson Nano搭載）の動作インターフェースへのピン配置を確認するには[こちら](https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf)をクリックしてください。*

**上面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboard.jpg" alt="pir" width={750} height="auto" /></p>

**底面図**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboards.jpg" alt="pir" width={720} height="auto" /></p>

## 詳細比較

|        製品       |                                                    reComputer J1010                                                   |                         reComputer J1020                        |                                                    reComputer J2011                                                   |                                                    reComputer J2012                                                   |
|:--------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|
|        モジュール        |                                                    Nano                                                    |                         Nano                         |                                                 Xavier NX                                                  |                                               Xavier NX 16GB                                               |
|        AI性能       |                                                           472 GFLOPS                                                           |                                472 GFLOPS                                | 21 TOPS                                                                                                                        | 21 TOPS                                                                                                                        |
|          GPU         |                                                    128コア NVIDIA Maxwell™                                                    |                         128コア NVIDIA Maxwell™                         | 384コア NVIDIA Volta™ GPU                                                                                                     | 384コア NVIDIA Volta™ GPU                                                                                                     |
|          CPU         |                                                  クアッドコア ARM A57 @ 1.43 GHz                                                  |                       クアッドコア ARM A57 @ 1.43 GHz                       | 6コア NVIDIA Carmel ARM®v8.2 64ビット CPU 6 MB L2 + 4 MB L3                                                                     | 6コア NVIDIA Carmel ARM®v8.2 64ビット CPU 6 MB L2 + 4 MB L3                                                                     |
|        メモリ        |                                                   4GB 64ビット LPDDR4 25.6GB/s                                                   |                        4GB 64ビット LPDDR4 25.6GB/s                        | 8 GB 128ビット LPDDR4x 59.7GB/s                                                                                                  | 8 GB 128ビット LPDDR4x 59.7GB/s                                                                                                  |
|        ストレージ       |                                                           16 GB eMMC                                                           |                                16 GB eMMC                                | 16 GB eMMC                                                                                                                     | 16 GB eMMC                                                                                                                     |
|     ビデオエンコーダー    |                             4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264)                            |  4K30 \| 2x1080p60 \| 4x1080p30 \|  4x720p60 \| 9x720p30 (H.265 & H.264) |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |        2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.265)  2x 4K60 \| 4x 4K30 \| 10x 1080p60 \| 20x 108p30 (H.264)       |
|     ビデオデコーダー    |                            4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264)                            | 4K60 \| 2x 4K30 \| 4x 1080p60 \| 8x 1080p30 \| 9x 720p60 (H.265 & H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) | 2x 8K30 \| 6x 4K60 \| 12x 4K30 \| 22x 1080p60 \| 44x 1080p30 (H.265)  2x 4K60 \| 6x 4K30 \| 10x 1080p60 \| 22x 1080p30 (H.264) |
|   ギガビットイーサネット   |                                         1x RJ45 ギガビットイーサネットコネクタ (10/100/1000)                                        |              1x RJ45 ギガビットイーサネットコネクタ (10/100/1000)             | 1x RJ45 ギガビットイーサネットコネクタ (10/100/1000)                                                                                | 1x RJ45 ギガビットイーサネットコネクタ (10/100/1000)                                                                                |
|          USB         | 1 x  USB 3.0 Type A コネクタ;  2 x  USB 2.0 Type A コネクタ; 1 x  USB Type C（デバイスモード用）; 1 x  USB Type C（5V電源入力用） |    4 x  USB 3.0 Type A コネクタ； 1 x  Micro-USB ポート（デバイスモード用）;    |                               4 x  USB 3.0 Type A コネクタ； 1 x  Micro-USB ポート（デバイスモード用）;                               |                               4 x  USB 3.0 Type A コネクタ； 1 x  Micro-USB ポート（デバイスモード用）;                               |
|  CSI カメラ接続  |                                          2x CSI カメラ (15 pos, 1mm pitch, MIPI CSI-2 )                                         |               2x CSI カメラ (15 pos, 1mm pitch, MIPI CSI-2 )              | 2x CSI カメラ (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  | 2x CSI カメラ (15 pos, 1mm pitch, MIPI CSI-2 )                                                                                  |
|        ディスプレイ       |                                                          1x HDMI Type A                                                         |                            1xHDMI Type A; 1xDP                           | 1xHDMI Type A; 1xDP                                                                                                            | 1xHDMI Type A; 1xDP                                                                                                            |
|          FAN         |                                                         1x  FAN(5V PWM)                                                         |                              1x  FAN(5V PWM)                              | 1x  FAN(5V PWM)                                                                                                                 | 1x  FAN(5V PWM)                                                                                                                 |
|       M.2 KEY E      |                                                           1x M.2 Key E                                                          |                          1x M.2 Key E（無効）                         |                                                           1x M.2 Key E                                                          |                                                           1x M.2 Key E                                                          |
|       M.2 KEY M      |                                                                -                                                               |                                1x M.2 Key M                               | 1x M.2 Key M                                                                                                                    | 1x M.2 Key M                                                                                                                    |
|          RTC         |                                                          1x RTCソケット                                                          |                               1x RTCソケット                               |                                                          1x RTCソケット                                                          |                                                          1x RTCソケット                                                          |
| 多機能ポート |                                                        1x  40ピンヘッダー                                                        |                             1x  40ピンヘッダー                             | 1x  40ピンヘッダー                                                                                                               | 1x  40ピンヘッダー                                                                                                               |
|  電源  |                                                       USB-Type C 5V⎓3A；                                                       |                              DC Jack 12V/2A                              | DC Jack 19V/4.74A (MAX 90W) MAX                                                                                                      | DC Jack 19V/4.74A (MAX 90W) MAX                                                                                                      |
|      機械的仕様      |                                                     130 mm x 120 mm x 50 mm                                                    |                            130mm x120mm x 50mm                           |                                                       130mm x120mm x 50mm                                                      |                                                       130mm x120mm x 50mm                                                      |
|                      |                                                                                                                                |                                                                          |                                                                                                                                |                                                                                                                                |

## キャリアボード技術仕様

|  コネクタ               |  J1010 キャリアボード                   |  Jetson A206 キャリアボード                                |
|--------------------------|--------------------------------------------------|--------------------------------------------------|
|  Jetson モジュールコネクタ |  1x Jetson SODIMM コネクタ、260ピン              |  1x Jetson SODIMM コネクタ、260ピン              |
|  USB Type A              |  1x USB 3.0 Type-A コネクタ 2x USB 2.0 Type A コネクタ                      |  4x USB 3.0 Type-A コネクタ                      |
|  USB Micro Type B        |  -                                               |  1x USB Micro B、RA メス                        |
|  USB Type C              |  2x Type C コネクタ                             |  -                                               |
|   イーサネットポート          |  1x RJ45 ギガビットイーサネットコネクタ (10/100/1000) |  1x RJ45 ギガビットイーサネットコネクタ (10/100/1000) |
|  ディスプレイポート            |  1xHDMI type A                          |  1xHDMI type A および 1xDP                          |
|  CSI カメラコネクタ    |  2x CSI カメラ (15 pos、1mm ピッチ、MIPI CSI-2 )   |  2x CSI カメラ (15 pos、1mm ピッチ、MIPI CSI-2 )   |
|  M.2 Key E               |  1x M.2 Key E スロット (75ピン) 2230                                     |  1x M.2 Key E スロット (75ピン) 2230                  |
|  M.2 Key M               |  -                                               |  1x M.2 Key M スロット (75ピン) NVME 2280             |
|  多機能ポート    |  2.0 ピッチ 40 PIN                                |  2.0 ピッチ 40 PIN                                |
|  ボタンヘッダー           |  1x ボタンヘッダー (1x12、2.54mm ピッチ、RA)        |  1x ボタンヘッダー (1x12、2.54mm ピッチ、RA)        |
|  FAN コネクタ           |  1x Picoblade ヘッダー                              |  1x Picoblade ヘッダー                              |
|  CAN                     |  無効                                       |  1x CAN バスヘッダー (1x4、2.54mm ピッチ、RA)        |
|  RTC                     |  1x RTC バックアップコインセルソケット (CR1220)         |  1x RTC バックアップコインセルソケット (CR1225)         |
|   電源                  |  1x Type C コネクタ                            |  1x DC 入力電源 TE コネクタ                   |

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
