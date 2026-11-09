---
description: reComputer Classic J3010 + Sony IMX219 のアーキテクチャ解析と実機実験に基づき、Jetson Camera がセンサー → MIPI CSI-2 → NVCSI → VI → ISP という完全なデータチェーンに沿ってどのように動作するかを説明し、V4L2 RAW と Argus ISP という 2 つの取得パスを比較します。
title: Jetson Camera
keywords:
  - jetson
  - camera
  - sensor
  - csi
  - nvcsi
  - vi
  - isp
  - imx219
  - v4l2
  - argus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_camera_data_chain
last_update:
  date: 11/02/2026
  author: youjiang
---

**reComputer Classic J3010 + Sony IMX219 に基づくアーキテクチャ解析と実機実験**

## はじめに

カメラは Jetson プラットフォームで最も一般的な周辺機器の 1 つです。ロボットビジョンや産業検査から自動運転やエンボディド AI まで、カメラはシステムが現実世界を知覚するための重要な入口です。しかし Jetson 開発の過程では、一見矛盾しているような問題にしばしば遭遇します：

- カメラはすでにシステムに認識されている — それなのになぜまだ画像を取得できないのか？
- `/dev/video0` はすでに存在する — それなのになぜ `v4l2-ctl` を実行すると Timeout が報告されるのか？
- NVCSI、VI、ISP はそれぞれ何をしているのか？
- センサーの RAW10 データはどのようにして閲覧可能なカラー画像になるのか？

これらの問題を理解するには、V4L2 や GStreamer を知っているだけでは不十分です。ハードウェアから出発し、1 枚の画像フレームが Jetson 内部でどのモジュールを通過し、それらのモジュールがどのように連携して動作しているかを理解する必要があります。本記事では、次のデータチェーンを紹介します：

**Sensor → MIPI CSI-2 → NVCSI → VI → ISP → Application**

同時に、実際に JetPack 6.2.1 を動作させている [reComputer Classic J3010](https://www.seeedstudio.com/reComputer-J3010-p-5589.html) と [Sony IMX219 CSI Camera](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) を用いて、このデータチェーンを 1 ステップずつ検証していきます。この記事を読み終えると、次の内容を理解できるようになります。あなたの助けになれば幸いです：

1. Jetson Camera のハードウェアアーキテクチャと完全なデータフロー
2. Sensor、NVCSI、VI、ISP の具体的な役割
3. V4L2 RAW と Argus ISP という 2 つの取得パスの違い
4. Linux ツールを使って実際の Camera トポロジーを観察する方法
5. RAW 画像と ISP 処理済みカラー画像を取得する方法
6. VI Timeout や RTCPU Trace などの情報を用いてカメラの問題を切り分ける方法

---

## 1. 実機テストプラットフォーム

本記事で使用するテストデバイスは、Seeed Studio reComputer Classic J3010 と Sony IMX219 カメラです。IMX219 は一般的な 8MP CMOS イメージセンサーで、Raspberry Pi Camera Module v2 にも採用されています。

| 項目 | 構成 |
|---|---|
| Device | reComputer Classic J3010 |
| SoC | NVIDIA Jetson Orin Nano |
| JetPack | 6.2.1 |
| Jetson Linux | R36.4.3 |
| Ubuntu | 22.04.5 LTS |
| Linux Kernel | 5.15.148-tegra |
| Camera Sensor | Sony IMX219 |
| Camera Interface | MIPI CSI-2 |
| Maximum Sensor Resolution | 3280 × 2464 |
| Camera Data Format | RAW Bayer |
| Camera Driver | imx219 |

IMX219 のセンサー仕様は、現在のドライバが実際に公開しているモードと完全には一致しない場合があることに注意してください。以降の実験は、デバイス列挙結果に基づいています。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/test_platform.jpg"/></div>

この記事の残りの部分で使用する実験用ファイルは、Jetson 上の `~/jetson-camera-test` ディレクトリに統一して保存します。

---

## 2. Jetson Camera の全体アーキテクチャ

まず、基本的な理解を構築する必要があります：**画像データが Jetson に入ったあと、直接 CPU に渡されて処理されるわけではありません。**

典型的な MIPI CSI Bayer カメラでは、データは複数のハードウェアモジュールを通過する必要があります。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/camera_data_path.png"/></div>

上図は論理的な関係を示している点に注意してください。ISP が必ずしも VI の DMA 出力の物理的な直後に接続されていることを意味するわけではありません。実際のデータ転送とメモリアクセスは、SoC 内部のハードウェアと NVIDIA Camera Framework によって管理されています。

**各モジュールはどのような仕事をしているのでしょうか？**

| モジュール | フルネーム | 主な機能 |
|---|---|---|
| Sensor | Image Sensor | 光をデジタルの画素データに変換する |
| CSI-2 | Camera Serial Interface 2 | 高速シリアルインターフェースで画像データを伝送する |
| NVCSI | NVIDIA Camera Serial Interface | CSI データの受信・解析・ルーティングを行う |
| VI | Video Input | 画像フレームをキャプチャしメモリに書き込む |
| ISP | Image Signal Processor | RAW 画像に対して色や画質の処理を行う |

このチェーンはさらに 3 つのステージに分けることができます。

**第 1 段階：画像生成**

Sensor は光電変換、露光、アナログ・デジタル変換を担当します。

**第 2 段階：画像伝送とキャプチャ**

MIPI CSI-2、NVCSI、VI は、画像データを Jetson に転送し、フレームキャプチャを完了する役割を担います。

**第 3 段階：画像処理とアプリケーション**

ISP は RAW データを処理し、最終的に Argus、GStreamer、OpenCV などのアプリケーションに画像を引き渡すことができます。

Jetson では、RAW Bayer **画像は ISP をバイパスすることができる**点に注意してください。生の画像データは V4L2 を通じて直接取得することもできますし、NVIDIA Camera Core と Argus を使用して ISP で画像処理を行うこともできます。これは 2 つの異なるソフトウェア利用パスです。

---

## 3. センサー：画像データはどこから来るのか？

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/image_sensor.png"/></div>

Camera データチェーンの起点はイメージセンサーであり、その主な役割はレンズで結像した光学像をデジタル画像データに変換することです。Sony IMX219 を例にとると、センサー内部には主に受光画素アレイ、アナログ信号処理回路、アナログ・デジタルコンバータ（ADC）、および MIPI CSI-2 データ出力インターフェースが含まれています。

レンズを通して光がセンサー表面に投影されると、画像取得の全プロセスは次のステップに分けることができます：

1. **光電変換**：受光画素アレイが光を受け取り、各画素が受光したフォトンの数に応じて電荷を生成し、光信号を電気信号に変換します。
2. **アナログ信号処理**：センサーは各画素に蓄積された電荷を読み出して電圧信号に変換し、必要な増幅やノイズ抑制を行います。
3. **アナログ・デジタル変換**：ADC がアナログ電圧をデジタル画素値に変換します。たとえば RAW10 モードでは、各画素は 10 ビットを使ってサンプリング結果を表現します。
4. **データ伝送**：センサーはデジタル画素データを MIPI CSI-2 プロトコルに従ってパッケージングし、MIPI D-PHY 物理インターフェースを介して Jetson の NVCSI モジュールへ伝送します。

### 3.1 RAW Bayer を理解する

私たちが日常的に目にするカラー画像は、通常 Red、Green、Blue の 3 つのカラーチャンネルを含みます。しかし、典型的な Bayer センサーでは、1 つの画素は通常 1 色のサンプリング値しか記録しません。たとえば、RGGB 配列は下図のようになります。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/bayer_rggb.png"/></div>

したがって、センサーが出力する RAW Bayer データは、完全な RGB カラー画像と同等ではありません。完全なカラー画像を得るには、デモザイク処理などのアルゴリズムによって色情報を再構成する必要があります。

### 3.2 RAW10 とは何か？

IMX219 の一般的な出力モードは 10 ビット Bayer RAW を使用します。RAW10 とは、各画素が 10 ビットの有効な生サンプリング情報を含むことを意味します。

たとえば、1920 × 1080 の画像には合計：

1920 × 1080 = 2,073,600 画素

有効画素データのみを数えると、RAW10 に必要なデータ量は：

2,073,600 × 10 / 8 = 2,592,000 Bytes

となり、約 2.47 MiB です。

しかし、これはあくまで有効画素の理論上のデータ量であり、Jetson のメモリに保存される RAW ファイルのサイズが必ずしもこの値と完全に一致することを意味しません。CSI-2 データのパッキング方式、VI 出力のメモリレイアウト、ラインアラインメントなどが、最終的な実際のバッファサイズに影響を与える可能性があります。これは後ほど RAW キャプチャ実験でさらに検証します。

### 3.3 センサーの制御インターフェースとデータインターフェース

IMX219 には、用途の異なる 2 つのインターフェースがあります：

- **制御インターフェース：** I2C。露光時間、アナログゲイン、フレームレート、動作モードなどのレジスタを設定するために使用されます。
- **データインターフェース：** MIPI CSI-2。画像画素データを連続的に出力するために使用されます。

この 2 つは互いに独立しています。

たとえば、Jetson が I2C 経由で IMX219 に正常にアクセスできるということは、Sensor の制御通信が確立されている可能性があることを示すに過ぎません。

それは、Sensor が正常に画像出力を開始していることや、CSI と VI がデータのキャプチャに成功していることを証明するものではありません。

### 3.4 実機実験 1：Sony IMX219 を認識する

まず、v4l2 ツールをインストールします：

```bash
sudo apt update
sudo apt install v4l-utils -y
v4l2-ctl --version
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/install_v4l2.png"/></div>

次に、以下を実行します：

```text
ls -l /dev/video*
v4l2-ctl --list-devices
```

正しく登録された CSI Camera では、通常、対応する Video Device が表示されます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/video_devices.png"/></div>

ここでは、Jetson が IMX219 カメラを認識し、2 つのビデオデバイスノードを作成していることがわかります。次に、詳細なデバイス情報を確認してみましょう：

```text
v4l2-ctl -d /dev/video0 --all
```

<details>

<summary> v4l2-ctl 出力ログ </summary>

```yaml
seeed@ubuntu:~$ v4l2-ctl -d /dev/video0 --all
Driver Info:
        Driver name      : tegra-video
        Card type        : vi-output, imx219 9-0010
        Bus info         : platform:tegra-capture-vi:2
        Driver version   : 5.15.148
        Capabilities     : 0x84a00001
                Video Capture
                Metadata Capture
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04200001
                Video Capture
                Streaming
                Extended Pix Format
Media Driver Info:
        Driver name      : tegra-camrtc-ca
        Model            : NVIDIA Tegra Video Input Device
        Serial           :
        Bus info         :
        Media version    : 5.15.148
        Hardware revision: 0x00000003 (3)
        Driver version   : 5.15.148
Interface Info:
        ID               : 0x0300000b
        Type             : V4L Video
Entity Info:
        ID               : 0x00000009 (9)
        Name             : vi-output, imx219 9-0010
        Function         : V4L2 I/O
        Pad 0x0100000a   : 0: Sink
          Link 0x0200000f: from remote pad 0x1000006 of entity '13e00000.host1x:nvcsi@15a00000-' (Unknown sub-device (0002000a)): Data, Enabled
Priority: 2
Video input : 0 (Camera 2: ok)
Format Video Capture:
        Width/Height      : 3280/2464
        Pixel Format      : 'RG10' (10-bit Bayer RGRG/GBGB)
        Field             : None
        Bytes per Line    : 6592
        Size Image        : 16242688
        Colorspace        : sRGB
        Transfer Function : Default (maps to sRGB)
        YCbCr/HSV Encoding: Default (maps to ITU-R 601)
        Quantization      : Default (maps to Full Range)
        Flags             :
Streaming Parameters Video Capture:
        Capabilities     : timeperframe
        Frames per second: 21.000 (21/1)
        Read buffers     : 0

Camera Controls

                     group_hold 0x009a2003 (bool)   : default=0 value=0 flags=execute-on-write
                    sensor_mode 0x009a2008 (int64)  : min=0 max=5 step=1 default=0 value=0 flags=slider
                           gain 0x009a2009 (int64)  : min=16 max=171 step=1 default=16 value=16 flags=slider
                       exposure 0x009a200a (int64)  : min=13 max=683710 step=1 default=2495 value=13 flags=slider
                     frame_rate 0x009a200b (int64)  : min=2000000 max=21000000 step=1 default=21000000 value=2000000 flags=slider
           sensor_configuration 0x009a2032 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[22] flags=read-only, volatile, has-payload
         sensor_mode_i2c_packet 0x009a2033 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[1026] flags=read-only, volatile, has-payload
      sensor_control_i2c_packet 0x009a2034 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[1026] flags=read-only, volatile, has-payload
                    bypass_mode 0x009a2064 (intmenu): min=0 max=1 default=0 value=0 (0 0x0)
                                0: 0 (0x0)
                                1: 1 (0x1)
                override_enable 0x009a2065 (intmenu): min=0 max=1 default=0 value=0 (0 0x0)
                                0: 0 (0x0)
                                1: 1 (0x1)
                   height_align 0x009a2066 (int)    : min=1 max=16 step=1 default=1 value=1
                     size_align 0x009a2067 (intmenu): min=0 max=2 default=0 value=0 (1 0x1)
                                0: 1 (0x1)
                                1: 65536 (0x10000)
                                2: 131072 (0x20000)
               write_isp_format 0x009a2068 (int)    : min=1 max=1 step=1 default=1 value=1
       sensor_signal_properties 0x009a2069 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][18] flags=read-only, has-payload
        sensor_image_properties 0x009a206a (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][16] flags=read-only, has-payload
      sensor_control_properties 0x009a206b (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][36] flags=read-only, has-payload
              sensor_dv_timings 0x009a206c (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][16] flags=read-only, has-payload
               low_latency_mode 0x009a206d (bool)   : default=0 value=0
               preferred_stride 0x009a206e (int)    : min=0 max=65535 step=1 default=0 value=0
    override_capture_timeout_ms 0x009a206f (int)    : min=-1 max=2147483647 step=1 default=2500 value=2500
                   sensor_modes 0x009a2082 (int)    : min=0 max=30 step=1 default=30 value=5 flags=read-only
seeed@ubuntu:~$ v4l2-ctl -d /dev/video1 --all
Driver Info:
        Driver name      : tegra-embedded
        Card type        : tegra-capture-vi-metadata-2
        Bus info         : platform:tegra-capture-vi:2
        Driver version   : 5.15.148
        Capabilities     : 0x84a00001
                Video Capture
                Metadata Capture
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04a00000
                Metadata Capture
                Streaming
                Extended Pix Format
Media Driver Info:
        Driver name      : tegra-camrtc-ca
        Model            : NVIDIA Tegra Video Input Device
        Serial           :
        Bus info         :
        Media version    : 5.15.148
        Hardware revision: 0x00000003 (3)
        Driver version   : 5.15.148
Interface Info:
        ID               : 0x03000013
        Type             : V4L Video
Entity Info:
        ID               : 0x00000011 (17)
        Name             : tegra-capture-vi-metadata-2
        Function         : V4L2 I/O
        Pad 0x01000012   : 0: Sink
Priority: 2
Format Metadata Capture:
        Sample Format   : 'G2XX' (Orbbec G2xx UVC Metadata)
        Buffer Size     : 96
```

</details>

このコマンドは、ドライバー情報、キャプチャ機能、画像フォーマット、および現在のデバイスのいくつかの動作パラメータを取得できます。

Sensor ドライバーのロードに失敗した場合は、システムログから手がかりを探すことができます。ログには、I2C アクセスの失敗、電源、または Probe 関連のエラーが含まれている可能性があります。ログ取得コマンドについては、以下のコマンドを参照してください：

```text
sudo dmesg | grep -i imx219
```

---

## 4. MIPI CSI-2: 画像はどのように Sensor から Jetson に届くのか？

Sensor が画像を生成した後、そのデータを物理インターフェースを介して Jetson に送信する必要があります。IMX219 は MIPI CSI-2 インターフェースを通じて画像を出力します。CSI-2 はカメラデータ伝送に使用される高速シリアルプロトコルで、組み込みシステムで広く利用されています。

### 4.1 CSI-2 と D-PHY

CSI-2 はカメラデータの伝送プロトコルを定義し、D-PHY は一般的な物理層実装です。典型的な D-PHY 接続では、Camera は差動データレーンとクロックレーンを通じて情報を送信します。CSI-2 が送るのはピクセルデータだけではなく、フレームやデータタイプ、チャネルを区別するために使用されるパケット情報（Frame Start、Frame End、Data Type、Virtual Channel、Pixel Payload など）も含まれます。受信側は、この情報を正しく識別して、連続したデータストリームを対応する画像フレームに復元する必要があります。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/mipi_csi2_dphy.png"/></div>

*画像出典：* *https://blog.zhaw.ch/high-performance/2017/02/28/mipi-csidsi-interface-for-general-purpose-data-acquisition/*

### 4.2 CSI レーン数は帯域幅にどのように影響するか？

1920 × 1080、30 FPS、RAW10 を例に取ります。

1 秒あたりの理論上の有効ピクセルデータレートは次のとおりです：

1920 × 1080 × 30 × 10 = 622.08 Mbps

reComputer Classic J3010 は 2 本の Data Lane を使用しているため、均等分配後の 1 レーンあたりの有効ピクセルデータレートはおよそ次の値になります：

311.04 Mbps/Lane

これは、上記のキャプチャ条件下では、各 Data Lane が 1 秒あたり平均して約 **311 Mbps の有効ピクセルデータ**を運ぶ必要があることを意味します。しかし、これは実際のレーンレート要件ではありません。実際の計算では、CSI-2 パケットオーバーヘッド、センサータイミング、およびそれに対応する帯域幅マージンも考慮する必要があります。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/csi2_circuit.png"/></div>

*画像出典：* *https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf*

---

## 5. NVCSI: Jetson はどのようにカメラデータを受信するのか？

IMX219 が MIPI CSI-2 を通じて Jetson にデータを送信すると、そのデータは NVCSI に入ります。これは Jetson SoC 内部の Camera 受信モジュールです。ここでは 2 つの概念を区別する必要があります：**CSI-2 はデータ伝送プロトコルであり、NVCSI は対応するデータ受信機能を実装する Jetson 内部のハードウェアモジュールです。** NVCSI は外部 Sensor から CSI-2 データを受信し、設定に従って受信・解析・ルーティングを行います。

### 5.1 NVCSI と Virtual Channel

単一カメラの場合、データフローは通常比較的単純です。しかし、複数のカメラが CSI データリンクを共有するシナリオでは、Virtual Channel が使用される場合があります。Virtual Channel によって、同じ CSI-2 リンク上で異なる論理データストリームを伝送できます。例えば：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/virtual_channel.png"/></div>

GMSL2 カメラシステムでは、複数の Sensor が Serializer と Deserializer を経由して Jetson にデータを入力し、その後 Virtual Channel を通じて異なるビデオストリームが区別されます。したがってマルチカメラのデバッグでは、CSI Port、Virtual Channel、VI Channel のマッピングが非常に重要です。

### 5.2 実機実験 2：カメラ Media Graph の確認

Linux Media Controller Framework は、マルチメディアデバイス間の接続関係をトポロジグラフとして表現できます。

J3010 上で、システムに登録されている Media Device を問い合わせます：

```bash
ls /dev/media*
# If a media0 device exists, view its details
media-ctl -d /dev/media0 -p
# Where:
# -d /dev/media0: specifies the Media Device to view.
# -p: prints the Media Controller topology information.
```

*返されたログ*

```bash
seeed@ubuntu:~$ ls /dev/media*
/dev/media0
seeed@ubuntu:~$ media-ctl -d /dev/media0 -p
Media controller API version 5.15.148

Media device information
------------------------
driver          tegra-camrtc-ca
model           NVIDIA Tegra Video Input Device
serial
bus info
hw revision     0x3
driver version  5.15.148

Device topology
- entity 1: 13e00000.host1x:nvcsi@15a00000- (2 pads, 0 link)
            type V4L2 subdev subtype Unknown flags 0
            device node name /dev/v4l-subdev0
        pad0: Sink
        pad1: Source

- entity 4: 13e00000.host1x:nvcsi@15a00000- (2 pads, 2 links)
            type V4L2 subdev subtype Unknown flags 0
            device node name /dev/v4l-subdev1
        pad0: Sink
                <- "imx219 9-0010":0 [ENABLED]
        pad1: Source
                -> "vi-output, imx219 9-0010":0 [ENABLED]

- entity 7: imx219 9-0010 (1 pad, 1 link)
            type V4L2 subdev subtype Sensor flags 0
            device node name /dev/v4l-subdev2
        pad0: Source
                [fmt:SRGGB10_1X10/3280x2464@1/21 field:none colorspace:srgb]
                -> "13e00000.host1x:nvcsi@15a00000-":0 [ENABLED]

- entity 9: vi-output, imx219 9-0010 (1 pad, 1 link)
            type Node subtype V4L flags 0
            device node name /dev/video0
        pad0: Sink
                <- "13e00000.host1x:nvcsi@15a00000-":1 [ENABLED]

- entity 17: tegra-capture-vi-metadata-2 (1 pad, 0 link)
             type Node subtype V4L flags 0
             device node name /dev/video1
        pad0: Sink

seeed@ubuntu:~$
```

実際のログと合わせると、現在の IMX219 Media Controller トポロジは次の図のように簡略化できます。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/media_topology.png"/></div>

**Media Graph はカーネルに登録されたトポロジを記述しているだけであり、それ自体では高速 CSI データが正常に伝送されていることを証明できない点に注意してください。**

完全なデータチェーンに加えて、現在のログには 2 つの追加の Media Entity も含まれています。

**未接続の NVCSI サブデバイス**

```text
entity 1: 13e00000.host1x:nvcsi@15a00000-
    (2 pads, 0 link)

    device node name /dev/v4l-subdev0
```

この NVCSI サブデバイスには現在 Media Link が確立されていないため、上記の接続された IMX219 キャプチャパスには属しません。

**メタデータキャプチャノード**

```text
entity 17: tegra-capture-vi-metadata-2
    (1 pad, 0 link)

    device node name /dev/video1
```

`v4l2-ctl -d /dev/video1 --all` の結果と合わせることで、`/dev/video1` はメタデータキャプチャデバイスであり、2 台目のカメラ用の通常の画像キャプチャノードではないことが確認できます。

これは、**Linux において `/dev/video*` ノードの数が、実際に接続されているカメラの数と必ずしも一致するわけではない**ことを示しています。開発者は、V4L2 Device Capabilities と Media Graph を組み合わせて、デバイスの実際の機能を判断する必要があります。

---

## 6. VI: CSI データはどのように画像フレームになるのか？

NVCSI は CSI データの受信を担当し、VI（Video Input）の主な役割は、設定に従ってフレームキャプチャを完了し、画像データをメモリに書き込むことです。典型的な V4L2 RAW キャプチャパスでは：

`IMX219` -> `MIPI CSI-2` -> `NVCSI` -> `VI` -> `Memory Buffer` -> `V4L2` -> `Application`

VI は DMA などのメカニズムを通じて画像データを転送し、CPU がカメラデータをピクセル単位で移動させる必要がないようにします。

### 6.1 Frame と Buffer

ビデオキャプチャにおいて、アプリケーションは通常 CSI シリアル信号を直接読み取りません。その代わりに、V4L2 を通じて画像 Buffer を要求し、Streaming を開始し、キャプチャ完了後に対応する Buffer を読み出します。

簡略化したキャプチャプロセスは次のとおりです：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/v4l2_frame_capture.png"/></div>

これが、V4L2 が MMAP などの Buffer メカニズムを使用する理由でもあります。

### 6.2 実機実験 3：RAW データのキャプチャ

まず、IMX219 の現在の画像フォーマットを確認します：

```text
v4l2-ctl -d /dev/video0 --get-fmt-video
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/get_fmt_video.png"/></div>

100 フレームの RAW キャプチャテストを実行します：

```text
v4l2-ctl -d /dev/video0 \
  --stream-mmap \
  --stream-count=100 \
  --verbose
```

フレームを連続してキャプチャできる場合は、現在のモードにおいて、Sensor、NVCSI、VI、および V4L2 Buffer パスがすでに基本的なデータキャプチャ能力を備えていることを意味します。

次に、1 フレーム分の RAW を保存します：

```text
v4l2-ctl -d /dev/video0 \
  --stream-mmap \
  --stream-count=1 \
  --stream-to=imx219.raw
```

ファイルサイズを確認します：

```text
ls -lh imx219.raw
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/raw_file.png"/></div>

### 6.3 なぜ RAW10 が必ずしも 10 ビット分だけを占有するとは限らないのか？

Jetson Camera のデータチェーンでは、**MIPI CSI-2 の伝送フォーマット**と、**VI がメモリに書き込むデータフォーマット**を区別する必要があります。IMX219 は MIPI CSI-2 上で RAW10 データを送信しており、各有効ピクセルは 10 ビットの情報を含みます。しかし現在の V4L2 キャプチャフォーマットでは、VI は各ピクセルを**16 ビット（2 Byte）のコンテナ**に格納し、行アラインメントを適用します。

したがって、実際の Buffer サイズを単純に 10 bit/Pixel として計算することはできません。

上記のログスクリーンショットに基づいて分析してみましょう。現在の解像度は 3280 × 2464 です：

- **コンパクトな RAW10 パッキングとして計算：** 3280 × 2464 × 10 / 8 = 10,102,400 Byte、約 **9.63 MiB**。
- **16 ビットコンテナとして計算：** 3280 × 2464 × 2 = 16,163,840 Byte、約 **15.42 MiB**。
- **実際の Bytes Per Line から計算：** 6592 × 2464 = 16,242,688 Byte、約 **15.49 MiB**。

100フレームを正常にキャプチャしたとき、実際のフレームレートは約**21.19 FPS**であり、各フレームバッファは16,242,688バイトを使用していました。

その後に保存された単一フレームのRAW画像は約16 MBで、キャプチャ時のバッファサイズと一致していました。

**結論：RAW10の10ビットは各ピクセルの有効なデータビット深度を表しており、画像がメモリ上で1ピクセルあたり10ビットしか占有しないという意味ではありません。** 現在のJetson VIキャプチャ設定では、RAW10は16ビットコンテナに格納され、Bytes Per Line（1行あたりのバイト数）のアラインメントの影響も受けるため、実際のメモリ使用量は、隙間なく詰め込まれたRAW10データ量よりも多くなります。

### 6.4 RAWデータをどのように表示するか？

V4L2を通じてRAW画像のキャプチャに成功すると、`imx219.raw`ファイルが得られます。しかしRAW Bayerデータは通常のRGBカラー画像ではないため、一般的な画像ビューアでは正しく表示できません。カラー画像に変換するには、まず実際のメモリレイアウトに従ってピクセルデータを読み取り、その後**デモザイク（Demosaicing）**アルゴリズムによってRGB画像を復元する必要があります。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/bayer_demosaic.png"/></div>

*画像出典：* *https://jetsonhacks.com/2022/01/13/in-depth-cameras/*

上記のスクリーンショットに基づき、現在のRAW画像には次の特徴があることが分かります：

- 画像解像度は3280 × 2464。
- Bayer配列はRGGBで、各ピクセルあたり10ビットの有効データ。
- V4L2は各ピクセルを16ビットコンテナに格納している。
- 各行は実際には6592バイトを占有しているが、有効なピクセルデータは6560バイトのみである。

各行には32バイトの余分なパディングがあると判断できます。RAWファイルを読み込む際には、この行パディングを考慮する必要があり、すべてのデータを単純に3280 × 2464の2次元配列にreshapeしてはいけません。

以下では、Python + OpenCVを用いて変換を行います：

```python
import cv2
import numpy as np

# IMX219 V4L2 capture configuration
WIDTH = 3280
HEIGHT = 2464
BYTES_PER_LINE = 6592

# 1. Read RAW data as 16-bit little-endian
raw = np.fromfile("imx219.raw", dtype="<u2")

expected = HEIGHT * BYTES_PER_LINE // 2
assert raw.size == expected, "RAW file size mismatch"

# 2. Restore row layout and remove padding
raw = raw.reshape(HEIGHT, BYTES_PER_LINE // 2)
raw = raw[:, :WIDTH]

# 3. Extract 10-bit values for preview
# Experimental decoding based on observed image structure
raw10 = raw >> 6

# 4. Normalize brightness for visualization
low, high = np.percentile(raw10, [1, 99.5])

if high <= low:
    raise ValueError("Invalid RAW intensity range")

normalized = np.clip(
    (raw10.astype(np.float32) - low) / (high - low),
    0, 1
)

# 5. Apply gamma correction
gamma = 0.65
raw8 = (np.power(normalized, gamma) * 255).astype(np.uint8)

# 6. Save grayscale preview
cv2.imwrite("imx219-gray.png", raw8)

# 7. Bayer demosaicing
# RGGB Bayer pattern
bgr = cv2.cvtColor(raw8, cv2.COLOR_BayerRG2BGR)

# 8. Save color image
cv2.imwrite("imx219-demosaic.png", bgr)

print("RAW conversion completed")
print("Output: imx219-gray.png")
print("Output: imx219-demosaic.png")
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/imx219_demosaic.png"/></div>

:::info
**OpenCVで変換した画像は、NVIDIA ISPで処理された画像と同等ではありません。** ホワイトバランス、カラーコレクション、ノイズリダクションなどの処理が完全ではないため、最終的な画像は明るさが暗かったり、色が正確でなかったりする可能性があります。
:::

---

## 7. ISP：RAWデータはどのようにカラー画像になるのか？

ISP（Image Signal Processor）は、センサーのRAW画像を、表示・エンコード・後段のアルゴリズム処理に適した画像へ変換する役割を担います。Bayer RAWに対して、典型的な画像処理機能には次のようなものがあります：

| 機能 | 役割 |
|---|---|
| Black Level Correction | 黒レベル補正 |
| Demosaicing | Bayerカラー再構成 |
| White Balance | ホワイトバランス |
| Color Correction | カラーコレクション |
| Noise Reduction | 画像ノイズ低減 |
| Tone Mapping | 輝度およびダイナミックレンジ処理 |
| Sharpening | 画像のシャープ化 |

同時に、Jetson Camera Frameworkは3A制御も連携して行うことができます：

- AE：自動露出（Automatic Exposure）
- AWB：自動ホワイトバランス（Automatic White Balance）
- AF：自動フォーカス（Automatic Focus）

なお、3AはすべてがISPの画素処理そのものに属するわけではありません。例えばAEは、センサー制御を通じて露出とゲインを調整する必要があり、AFはセンサーモジュール側に制御可能なフォーカスメカニズムがあることに依存します。

### 7.1 なぜISPのチューニングが必要なのか？

2つのカメラが同じセンサーを使用していても、ISPを通した後にまったく同じ画像が得られるとは限りません。これは、画質がセンサーだけでなく、レンズ、IRフィルタ、センサーのキャリブレーションパラメータ、実際の照明条件などの要因にも依存するためです。これらの違いにより、画像の明るさ、色、ホワイトバランス、ノイズ性能が異なる結果になる可能性があります。

したがって、特定のカメラモジュールに対して、ホワイトバランス、カラーコレクション、ノイズリダクション、シャープ化などの関連する画像処理パラメータを調整するために、**ISPチューニング**を行う必要があります。要するに、**ISPは画像を処理する役割を担い、ISPチューニングは異なるカメラに対してその処理効果をどのように最適化するかを決定します。**

### 7.2 実機実験4：Argusを通じてISP画像をキャプチャする

これまでの実験では、V4L2を通じてIMX219のRAW10データを取得し、OpenCVを用いて基本的なデモザイク処理を行いました。次に、**NVIDIA Argus Camera Framework**を使用して、画像をJetsonのISP経路に通し、両者の画質の違いを観察します。

本実験では、reComputer Classic J3010 + IMX219を使用し、SSHでJetsonにリモート接続して画像キャプチャを行います。

**step1. GStreamerプラグインを確認する：**

```text
gst-inspect-1.0 nvarguscamerasrc
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/gst_inspect.png"/></div>

プラグイン情報が正常に表示されれば、GStreamerがそのプラグインを見つけられていることを意味します。

**step2. Argus経由で画像キャプチャをテストする**

SSH環境、特にX11 Forwardingが有効な場合、`DISPLAY`などの環境変数がNVIDIA ArgusのEGLStream初期化に影響を与えることがあります。Jetsonデバイスへリモートアクセスしている場合は、`env -u`を使用して関連する環境変数を一時的に削除してください：

```text
env -u DISPLAY -u WAYLAND_DISPLAY -u LD_LIBRARY_PATH \
gst-launch-1.0 -e \
  nvarguscamerasrc sensor-id=0 num-buffers=100 ! \
  'video/x-raw(memory:NVMM),width=1920,height=1080,framerate=30/1,format=NV12' ! \
  fakesink
```

ここで：

- `nvarguscamerasrc`：NVIDIA Argusを通じてカメラ画像を取得します。
- `sensor-id=0`：最初に利用可能なArgusセンサーを選択します。
- `num-buffers=100`：100フレームをキャプチャします。
- `memory:NVMM`：NVIDIAマルチメディアバッファを使用します。
- `format=NV12`：出力画像フォーマットを指定します。
- `fakesink`：画像を受け取って破棄し、表示や保存は行いません。

ここで`env -u`を使用しているのは、このコマンドの実行時にのみ影響を与えるためであり、システムの環境変数を恒久的に変更するものではありません。

プログラムが正常にキャプチャを行い、ログにエラーが出ずに終了すれば、現在のカメラがArgusを通じて基本的な画像を出力できていることを意味します。

**step3. ISP処理済みのカラー画像を保存する**

Argusでのキャプチャが正常に動作することを確認したら、次のコマンドを実行してJPEG画像を保存します：

```text
env -u DISPLAY -u WAYLAND_DISPLAY -u LD_LIBRARY_PATH \
gst-launch-1.0 -e \
  nvarguscamerasrc sensor-id=0 num-buffers=1 ! \
  'video/x-raw(memory:NVMM),width=1920,height=1080,framerate=30/1,format=NV12' ! \
  nvvidconv ! \
  'video/x-raw,format=I420' ! \
  jpegenc ! \
  filesink location=imx219-isp.jpg
```

このパイプラインでは：

- **nvarguscamerasrc**：Argusを通じてカメラキャプチャおよびISP処理経路を呼び出します。
- **nvvidconv**：NVMM画像を、後段のエンコーダがサポートするメモリおよびピクセルフォーマットに変換します。
- **jpegenc**：画像をJPEGとしてエンコードします。
- **filesink**：JPEGデータをファイルに保存します。

保存後、次を確認します：

```text
ls -lh imx219-isp.jpg
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/isp_ls.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/imx219_isp.jpg"/></div>

上記のOpenCVデモザイク画像と比較すると、ISPで処理された画像は、色・明るさ・ノイズの最適化がより完全に行われています。ここから得られる結論は次のとおりです：**V4L2は主にセンサーのRAW画像を取得するために使用され、ArgusはNVIDIA ISPを呼び出して、より完全な画像処理が施されたカラー画像を生成できます。**

> 保存された画像には、レンズのピントやISPパラメータがまだ調整されていないため、依然としてぼやけやパープルフリンジの問題が残っている点に注意してください。

---

## 8. V4L2とArgus：2つの異なるカメラデータパス

これまでの実験を通じて、2つの異なる方法で画像をキャプチャしてきました。1つはV4L2、もう1つはArgusです。どちらもJetsonの下層カメラハードウェアを利用できますが、使用経路や適用シナリオは異なります。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/v4l2_vs_argus.png"/></div>

### 8.1 V4L2によるRAWキャプチャ

V4L2は、Jetson ISPを経由せずに、Bayerセンサーが出力するRAWデータを直接取得できます。

この方法は、**センサードライバ開発、CSIカメラのデバッグ、RAWデータ解析、カスタム画像処理アルゴリズム開発**に適しています。

### 8.2 ArgusによるISPキャプチャ

ArgusはNVIDIAが提供するCamera Frameworkであり、センサー制御とISPを組み合わせてRAW画像に対してデモザイク、ホワイトバランス、カラーコレクション、ノイズリダクションなどの処理を行い、NV12などの画像フォーマットを出力できます。

このアプローチは、**リアルタイムカメラプレビュー、ビデオキャプチャ、および良好な画質を必要とするビジョンアプリケーション**により適しています。

### 8.3 比較

| 項目 | V4L2 RAW | Argus ISP |
|---|---|---|
| 典型的な出力 | RAW Bayer | NV12 / YUV |
| ISP を使用 | 必要なし | 使用可能 |
| センサー制御 | V4L2 Controls | Argus Camera Core |
| 適用シナリオ | ドライバデバッグ、RAW 解析 | カラー画像、ビデオアプリケーション |
| 一般的なツール | v4l2-ctl | nvarguscamerasrc |
| ISP Tuning が必要か | RAW キャプチャには不要 | 画質は Tuning に依存する場合がある |

**V4L2 は RAW データの出力に限定されない**ことに注意してください。ここでの「V4L2 RAW」は、Jetson VI を介して Bayer センサーの生データを直接キャプチャするシナリオを特に指します。

### 8.4 V4L2 は動作するのに Argus が失敗するのはなぜか？

V4L2 が正常に RAW 画像をキャプチャできたとしても、Argus が必ず動作するとは限りません。

これは、Argus が基盤となるセンサー、NVCSI、VI だけでなく、Camera Core、センサー制御、ISP 設定、NVIDIA バッファ管理などの要素にも依存しているためです。

したがって、V4L2 は動作するが Argus が失敗する場合、優先的に次の点を確認できます：

- **Camera Core の設定**：センサーモードおよび関連パラメータが正しいかどうか。
- **センサー制御**：露光やゲインなどの制御が正常に機能しているかどうか。
- **Argus サービス**：`nvargus-daemon` に異常がないかどうか。
- **実行時環境**：SSH X11 Forwarding、EGL、動的ライブラリ環境に競合がないかどうか。

---

## 9. デバイスツリー：Jetson はカメラがどこに接続されているかをどのように知るのか？

ハードウェアの観点では、センサーは CSI インターフェースを介して Jetson に接続されます。しかし、ケーブルを接続しただけではカメラが自動的に動作するわけではありません。Jetson は接続関係とセンサーの具体的な動作モードも把握する必要があります。この情報は通常、デバイスツリーと対応するセンサードライバによって提供されます。

### 9.1 カメラ用デバイスツリー

reComputer Classic J401 と IMX219 の組み合わせを例に取ると、Seeed Studio は [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) リポジトリ内で対応するデバイスツリー設定を提供しています。主に次の 2 つのファイルが関係します：

**① J401 キャリアボード設定ファイル**
[recomputer-orin-j401.conf](https://github.com/Seeed-Studio/Linux_for_Tegra/blob/r36.4.3/recomputer-orin-j401.conf)

このファイルは、J401 が使用するベースデバイスツリーを指定し、IMX219 カメラオーバーレイを参照します：

**② IMX219 カメラオーバーレイ**
[tegra234-p3767-camera-p3768-imx219-dual-seeed.dts](https://github.com/Seeed-Studio/Linux_for_Tegra/blob/r36.4.3/source/hardware/nvidia/t23x/nv-public/overlay/tegra234-p3767-camera-p3768-imx219-dual-seeed.dts)

このファイルは J401 用に 2 つの IMX219 カメラを設定し、I2C MUX、GPIO、CSI インターフェースなどのハードウェア接続情報を定義し、ベースとなる IMX219 センサー設定を参照します。

なお、これはオーバーレイ内の設定の一部に過ぎません。完全なセンサーモードには、解像度、CSI レーン数、ピクセルビット深度、クロックなどのパラメータも含まれます。

### 9.2 センサーモード：IMX219 はどのように画像を送信するのか？

デバイスツリー内のセンサーモードは、カメラの具体的な動作方法を記述するために使用されます。この J401 実機実験では、実行時デバイスツリーから IMX219 の `mode0` の次のパラメータを読み取りました：

```text
mode0 {
    num_lanes = "2";
    tegra_sinterface = "serial_a";
    phy_mode = "DPHY";

    mode_type = "bayer";
    pixel_phase = "rggb";

    active_w = "3280";
    active_h = "2464";

    csi_pixel_bit_depth = "10";
    pix_clk_hz = "182400000";
};
```

*上記は、J401 の実行時デバイスツリーから抽出・整理した主要フィールドであり、完全なセンサーモード設定ではありません。*

### 9.3 実機実験 5：使用中のデバイスツリーを確認する

GitHub に保存されているのはデバイスツリーのソースコードですが、Jetson が実際に使用するのは、ブートプロセス中にオーバーレイが読み込まれ適用された後のデバイスツリーです。SSH 経由で現在有効な設定を直接確認できます。

ここでは、実行時デバイスツリー内で `imx219` を含むプロパティを直接検索します：

```text
sudo grep -rla 'imx219' /proc/device-tree 2>/dev/null
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/grep_imx219.png"/></div>

実際のセンサーモードパラメータを読み取ります：

```text
CAM=/proc/device-tree/bus@0/cam_i2cmux/i2c@0/rbpcv2_imx219_a@10
ls "$CAM"

for key in \
  num_lanes \
  tegra_sinterface \
  phy_mode \
  mode_type \
  pixel_phase \
  active_w \
  active_h \
  csi_pixel_bit_depth \
  pix_clk_hz
do
  printf "%-25s : " "$key"
  tr -d '\0' < "$CAM/mode0/$key" 2>/dev/null || echo "Not found"
  echo
done
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/sensor_mode.png"/></div>

---

## まとめ

Jetson カメラのデータチェーンを解析することで、画像キャプチャの全プロセスを次のようなつながりとして理解できます：**センサーが画像データを生成し、MIPI CSI-2 が伝送を担当し、NVCSI が受信を担当し、VI がキャプチャを担当し、ISP が画像処理を担当します。**

ソフトウェアレベルでは、Jetson はカメラへアクセスするためのさまざまな方法も提供しています。ドライバデバッグや RAW データ解析には V4L2 を通じて RAW データをキャプチャでき、カラー処理、自動露光、リアルタイムプレビューを必要とするアプリケーションには Argus と ISP を通じて処理済み画像を取得できます。

**このデータチェーンを理解する本当の価値は、問題の所在をより正確に特定できるようになることです。**

もちろん、Jetson カメラに関わる知識はこれだけにとどまりません。本記事は画像データが Jetson に入ってくるまでの流れに焦点を当てましたが、RAW データ自体のフォーマットや画像処理の原理など、掘り下げて議論する価値のある内容はまだ多く残されています。

---

## 参考文献

- https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/CameraDevelopment.html
- https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/SD/Multimedia/AcceleratedGstreamer.html
- https://docs.nvidia.com/jetson/archives/r36.4/ApiReference/l4t_mm_10_argus_camera_recording.html
- https://github.com/Seeed-Studio/Linux_for_Tegra
- https://wiki.seeedstudio.com/ja/J401_carrierboard_Hardware_Interfaces_Usage/
- https://wiki.seeedstudio.com/ja/how_to_use_camera_imx219/

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
