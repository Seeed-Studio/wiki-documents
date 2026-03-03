---
description: このページは、TinyML に関するすべてのコンテンツを集めたものです。
title: TinyML
keywords:
- tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/tinyml_topic
last_update:
  date: 05/15/2025
  author: Yaohao
---


# 小型機械学習 (TinyML)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/main.jpg" style={{width:1000, height:'auto'}}/></div>

<br />

TinyML は、マシンラーニングと組み込みシステムの分野で、小型で低消費電力のマイクロコントローラー上でマシンラーニングを実現することを探求する学問分野です。これにより、エッジデバイス上で安全で低遅延、低消費電力、低帯域幅のマシンラーニング推論が可能になります。TinyML に興味があるけれど、どこから始めればよいかわからない方には、このワンストップガイドが最適です。このガイドでは、TinyML の概要、提供する機会、そして始め方のステップバイステップの手順を提供します。このエキサイティングな分野に参加し、今日から TinyML の旅を始めましょう！

## TinyML とは？

Tiny Machine Learning (TinyML) は、Arduino のような低消費電力、低フットプリントのマイクロコントローラー上で ML モデルを開発および展開することに焦点を当てたマシンラーニングの分野です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/1.png" style={{width:1000, height:'auto'}}/></div>

マシンラーニングは、自己改善型のアルゴリズムや統計モデルを開発することを目的としたコンピュータシステムの分野です。これは、大量のデータを使用してモデルが分析し、パターンを抽出することで、特定のタスクを学習し改善することを可能にします。この一見単純なパラダイムは、予測、異常検出、コンピュータビジョンなどの複雑なタスクにおいて画期的な進歩をもたらしました！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/blog/2021/06/14/everything-about-tinyml-basics-courses-projects-more/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div>


## TinyML をサポートする推奨ボード

### Seeed Studio XIAO ESP32S3 Sense

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>OV2640 カメラを搭載した超小型 ESP32-S3 開発ボードで、AIoT 分野で注目の新星</font>
        <br /><font size={"3"}><strong>高性能</strong></font>
        <font size={"2"}>240MHz Xtensa 32ビット LX7 デュアルコアプロセッサ</font>
        <br /><font size={"3"}><strong>メモリ</strong></font>
        <font size={"2"}>8MB PSRAM + 8MB FLASH</font>
        <br /><font size={"3"}><strong>多機能</strong></font>
        <font size={"2"}>マイクロフォン/SDカードスロット/取り外し可能な OV2640</font>
        <br /><font size={"3"}><strong>ワイヤレス</strong></font>
        <font size={"2"}>2.4GHz WiFi と BLE 5</font>
        <br /><font size={"3"}><strong>TinyML 対応</strong></font>
        <font size={"2"}>画像処理/音声認識</font>
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiaos3sense.jpg" style={{width:800, height:'auto'}}/>
    </div>
</div>

<br /> <br /> <br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 詳細を見る </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 はじめに</font></span></strong></a>
</div>

<br />

### Seeed Studio XIAO nRF52840 Sense

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/nrf52840sense.jpg" style={{width:800, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>XIAO nRF52840 Sense は、オンボードマイクと 6 軸 IMU を備え、TinyML AI+IoT プロジェクトに適しています</font>
        <br /><font size={"3"}><strong>高性能</strong></font>
        <font size={"2"}>ARM® Cortex™-M4 32ビットプロセッサ（FPU 搭載）64 MHz で動作</font>
        <br /><font size={"3"}><strong>メモリ</strong></font><font size={"2"}>256 KB RAM + 2MB FLASH</font>
        <br /><font size={"3"}><strong>多機能</strong></font><font size={"2"}>オンボードマイクと 6 軸 IMU</font>
        <br /><font size={"3"}><strong>ワイヤレス</strong></font><font size={"2"}>Bluetooth 5.0、NFC（オンボードアンテナ付き）</font>
        <br /><font size={"3"}><strong>TinyML 対応</strong></font><font size={"2"}>ジェスチャー/音声認識</font>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 詳細を見る </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO_BLE/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 はじめに</font></span></strong></a>
</div>

<br />


### Seeed Studio XIAO RP2040

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <br />
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/rp2040.jpg" style={{width:800, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>XIAO RP2040 は、超小型で高性能な汎用開発ボードです。オンボード 2MB フラッシュ、マイクロパイソン対応</font>
        <br /><font size={"3"}><strong>すぐに始められる</strong></font>
        <font size={"2"}>Arduino/Micropython/CircuitPython をサポート</font>
        <br /><font size={"3"}><strong>コストパフォーマンスが高い</strong></font>
        <font size={"2"}>参入障壁を低減</font>
        <br /><font size={"3"}><strong>より強力な MCU (RP2040)</strong></font>
        <font size={"2"}>デュアルコア ARM Cortex M0+ Raspberry PI RP2040 チップ、最大 133 MHz で動作</font>
        <br /><font size={"3"}><strong>豊富なオンチップメモリ</strong></font>
        <font size={"2"}>264KB の SRAM、オンボード 2MB フラッシュ</font>
        <br /><font size={"3"}><strong>豊富なインターフェース</strong></font>
        <font size={"2"}>11 デジタルピン、4 アナログピン、11 PWM ピン、1 I2C インターフェース、1 UART インターフェース、1 SPI インターフェース、1 SWD ボンディングパッドインターフェース</font>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO-RP2040/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 はじめに</font></span></strong></a>
</div>

<br />

### Seeed Studio XIAO SAMD21

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>XIAO SAMD21は、超小型で高性能な汎用開発ボードです</font>
        <br /><font size={"3"}><strong>ユーザーのお気に入り</strong></font>
        <font size={"2"}>XIAOシリーズの最初の革新的な製品！</font>
        <br /><font size={"3"}><strong>親指サイズ</strong></font>
        <font size={"2"}>Seeed Studioボードファミリーで最も小さいArduino互換ボード</font>
        <br /><font size={"3"}><strong>強力なMCU (SAMD21)</strong></font>
        <font size={"2"}>ARM® Cortex®-M0+ 32bit 48MHzマイクロコントローラー(SAMD21G18)を搭載、256KBフラッシュ、32KB SRAM</font>
        <br /><font size={"3"}><strong>柔軟な互換性</strong></font>
        <font size={"2"}>Arduino IDEに対応、ブレッドボードフレンドリー</font>
        <br /><font size={"3"}><strong>豊富なインターフェース</strong></font>
        <font size={"2"}>11個のデジタル/アナログピン、10個のPWMピン、1つのDAC出力、1つのSWDボンディングパッドインターフェース、1つのI2Cインターフェース、1つのUARTインターフェース、1つのSPIインターフェース</font>
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/samd21.jpg" style={{width:800, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 今すぐ購入 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 はじめに</font></span></strong></a>
</div>

<br />

### Wio Terminal

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>TinyMLとIoTを始めるための完全なAIプラットフォーム - ATSAMD51P19とARM Cortex-M4F（120MHz）を中心に構築され、マイクロコントローラー向けのさまざまなMLフレームワークに高い互換性を持つ</font>
        <br /><font size={"3"}><strong>高性能</strong></font>
        <font size={"2"}>ATSAMD51コアとRealtek RTL8720DN BLE 5.0 & Wi-Fi 2.4G/5G開発ボード</font>
        <br /><font size={"3"}><strong>メモリ</strong></font><font size={"2"}>4 MB外部フラッシュ、192 KB RAM</font>
        <br /><font size={"3"}><strong>多機能</strong></font><font size={"2"}>スクリーン + 開発ボード + 入出力インターフェース + ケースを備えた完全なシステム</font>
        <br /><font size={"3"}><strong>ワイヤレス</strong></font><font size={"2"}>信頼性の高いワイヤレス接続、Realtek RTL8720DN搭載、デュアルバンド2.4GHz / 5GHz Wi-Fi</font>
        <br /><font size={"3"}><strong>TinyML対応</strong></font><font size={"2"}>Azure認定、Edge Impulse対応デバイスで、IoTとTinyMLを迅速に開始可能</font>
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/wio.png" style={{width:600, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 詳細を見る </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 はじめに</font></span></strong></a>
</div>

<br />

### Grove ビジョン AI

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/vision.png" style={{width:600, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <br /><br /><br />
        <font size={"2"}>Himax HX6537-Aプロセッサ、OV2640カメラセンサー、デジタルマイク、6軸慣性計測ユニット（IMU）を搭載した事前学習済みの組み込みAIビジョンセンサーで、YOLO v5およびEdge Impulseをサポート</font>
        <br /><font size={"3"}><strong>多機能</strong></font><font size={"2"}>画像処理用のOV2640センサーを搭載<br />デジタルマイクと6軸慣性計測ユニット（IMU）</font>
        <br /><font size={"3"}><strong>TinyML対応</strong></font><font size={"2"}>Edge Impulseに公式対応、物体検出などの主流のML機能を実現する3つのカスタマイズモデルを提供</font>
        <br /><br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 詳細を見る </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Grove-Vision-AI-Module/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 はじめに</font></span></strong></a>
</div>

<br />

### Grove ビジョン AI V2

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg" style={{width:600, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <br />
        <font size={"2"}>Arm Cortex-M55 & Ethos-U55を搭載したMCUベースのビジョンAIモジュールです。TensorFlowおよびPyTorchフレームワークをサポートし、Arduino IDEと互換性があります。SenseCraft AIアルゴリズムプラットフォームを使用して、コード不要でセンサーに学習済みMLモデルをデプロイ可能です。</font>
        <br /><font size={"3"}><strong>多様なAIモデルサポート:</strong></font><font size={"2"}> SenseCraft AIから提供される既製モデルやカスタムAIモデルを簡単にデプロイ可能。Mobilenet V1、V2、Efficientnet-lite、Yolo v5 & v8を含む。TensorFlowおよびPyTorchフレームワークをサポート。</font>
        <br /><font size={"3"}><strong>完全オープンソース:</strong></font><font size={"2"}>すべてのコード、設計ファイル、回路図が変更および利用可能。</font>
        <br /><font size={"3"}><strong>豊富な周辺機器:</strong></font><font size={"2"}> PDMマイクロフォン、SDカードスロット、Type-C、Groveインターフェースなどの周辺機器を含む。</font><br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 詳細を見る </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/grove_vision_ai_v2/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 はじめに</font></span></strong></a>
</div>

<br />

### SenseCAP K1100

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <br /><br /><br />
        <font size={"2"}>LoRa®とAIをすぐに始めるためのセンサープロトタイプキット<br /><br />10分で展開、3ステップでAIoTプロジェクトを構築<br /><br />MLとLoRa®技術の組み合わせ<br /><br />400以上のGroveセンサーに対応し、幅広いアプリケーションをサポート<br /><br />クラウドサポートのための主流プラットフォームとのボード統合<br /><br />SenseCAPシリーズの産業用センサーへのアップグレードが可能</font>
        <br /><br /><br />
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/k1100.png" style={{width:800, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 詳細を見る </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-quickstart/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 はじめに</font></span></strong></a>
</div>

<br />

### SenseCAP A1101

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/a1101.png" style={{width:800, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
      <br /><br /><br /><br />
      <font size={"2"}>TinyML Edge AI対応のスマートイメージセンサーで、画像認識、人のカウント、ターゲット検出、メーター認識など、さまざまなAIモデルをサポートします。</font>
      <br /><font size={"3"}><strong>TINYML対応</strong></font><font size={"2"}>Edge Impulseによって公式にサポートされており、MLモデルのトレーニングとデプロイを迅速に開始できます！</font>
      <br /><br /><br /><br /><br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 詳細を見る </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/SenseCAP-Vision-AI-Get-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 はじめに</font></span></strong></a>
</div>

<br />

## サポートプラットフォーム

当社のデバイスは、非常に多くの協力プラットフォームおよびケースでサポートされています。

- **Seeed Studio SenseCraft Model Assistant** は、組み込みAIに焦点を当てたオープンソースプロジェクトです。
- **Edge Impulse** は、センサーをベースとしたアプリケーションに最適化されています。
- **TensorFlow Lite** は、軽量でディープラーニングに最適化されています。

これらのプラットフォームをサポートすることで、開発者はマイクロコントローラーからシングルボードコンピュータまで、エッジデバイス上で機械学習モデルを簡単に構築およびデプロイできます。

### SenseCraft モデルアシスタント

SenseCraft Model Assistantは、Seeed Studioによって開発された組み込みAIに焦点を当てたオープンソースプロジェクトです。現実世界のシナリオに最適化されたアルゴリズムを提供し、実装をよりユーザーフレンドリーにし、組み込みデバイスでの推論をより迅速かつ正確にします。

SenseCraft Model Assistantは現在、異常検知、コンピュータビジョン、シナリオ固有のアルゴリズムをサポートしており、将来的にはさらに多くの機能が追加される予定です。

<div class="button_tech_support_container">
<a href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" class="button_edgelab"></a> 
</div>

収集したデータでのトレーニングやアルゴリズムのパフォーマンスの可視化のためのユーザーフレンドリーなプラットフォームを提供し、ESP32、Arduino開発ボード、Raspberry Piなどの低コストハードウェアで動作するように設計されたモデルを提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/pfld_meter.gif" style={{width:700, height:'auto'}}/></div>

SenseCraft Model Assistantは、TensorFlow Lite、ONNX、TensorRTやOpenVINOなどの特殊フォーマットを含む複数の形式でのモデルエクスポートをサポートしています。SenseCraft Model Assistantを使用することで、開発者は幅広い組み込みデバイス上で機械学習モデルを簡単に構築およびデプロイできます。

### Codecraft

Codecraftは、Scratch 3.0言語に基づいており、ブロックを「ドラッグ＆ドロップ」するだけでプログラミングが可能です。Scratchのインタラクティブなゲームやアニメーションをプログラムする能力に加えて、Codecraftはさまざまな一般的なハードウェアデバイスをサポートし、ハードウェアとソフトウェアの統合を可能にします。これにより、プログラミングがさらに楽しくなります。

<div class="button_tech_support_container">
<a href="https://ide.tinkergen.com/" class="button_codecraft"></a> 
</div>

CodecraftとWio Terminalを使用することで、複雑なプログラミング環境やプログラミング知識に煩わされることなく、組み込み機械学習の全プロセスを体験することが可能です。

Edge Impulseによって強化されたTiny Machine Learningは、Codecraftのグラフィカルプログラミングを使用する初心者にも簡単にアクセス可能です。ドラッグ＆ドロップによる簡単なコーディングで、データの取得、トレーニング、モデルのデプロイがこれまで以上に直感的になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/4625491.gif" style={{width:400, height:'auto'}}/></div>

### Edge Impulse

Edge Impulseは、組み込み機械学習モデルを構築およびデプロイするための強力な機械学習プラットフォームです。

<div class="button_tech_support_container">
<a href="https://edgeimpulse.com/" class="button_edgeimpulse"></a> 
</div>

開発者は、センサーデータの収集と処理、機械学習モデルの設計とトレーニング、そしてそのモデルをエッジデバイスに展開するための幅広いツールを提供されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/4262777.gif" style={{width:500, height:'auto'}}/></div>

Edge Impulseはセンサーをベースとしたアプリケーションに最適化されており、幅広いハードウェアプラットフォームをサポートしています。Edge Impulseを使用することで、開発者は組み込みデバイス上で機械学習モデルを簡単に構築および展開できるため、IoTやスマートデバイスアプリケーションにおいて非常に価値のあるツールとなります。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/edgeimpulse.png" style={{width:600, height:'auto'}}/></div> -->

### TensorFlow Lite

TensorFlow Liteは、人気のあるTensorFlow機械学習フレームワークの軽量版であり、組み込みおよびモバイルデバイスでの実行を目的として設計されています。

<div class="button_tech_support_container">
<a href="https://www.tensorflow.org/lite" class="button_tensorflowlite"></a> 
</div>

開発者は、リソースが制約されたデバイス上で機械学習モデルを構築および展開するための幅広いツールを提供されており、専用のハードウェアアクセラレータのサポートも含まれています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/image5.gif" style={{width:800, height:'auto'}}/></div>

TensorFlow Liteは幅広いハードウェアプラットフォームをサポートしており、特に深層学習アプリケーションに適しています。TensorFlow Liteを使用することで、開発者は組み込みおよびモバイルデバイス上で機械学習モデルを簡単に構築および展開できるため、IoT、モバイル、スマートデバイス分野における幅広いアプリケーションにおいて非常に価値のあるツールとなります。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/tensorflowlite.png" style={{width:600, height:'auto'}}/></div> -->

## 簡単に始められる

TinyMLが達成できる興味深いことを見てみましょう！

### TinyML on XIAO

<div class="button_tech_support_container">
<a href="https://wiki.seeedstudio.com/ja/SeeedStudio_XIAO_Series_Introduction/" class="button_xiao"></a> 
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Impulse on XIAO RP2040 & XIAO SAMD21</th>
      <th class="table-trnobg">Edge Impulse on XIAO nRF52840 Sense</th>
      <th class="table-trnobg">TensorFlow Lite on XIAO nRF52840 Sense</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" style={{width:200, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>このプロジェクトでは、Seeed Studio XIAO SAMD21およびSeeed Studio XIAO RP2040開発ボードへのモデルのトレーニングと展開を扱います。</font></td>
      <td class="table-trnobg"><font size={"1"}>Seeed Studio XIAO nRF52840 SenseでEdge Impulseを使用するためのクイックスタートWikiへようこそ！このガイドでは、オンボードIMUセンサーを使用して人間の動きを検出し、さまざまなアクションを分類する方法を探ります。</font></td>
      <td class="table-trnobg"><font size={"1"}>このWikiでは、Seeed Studio XIAO nRF52840 SenseでTensorFlow Liteを使用し、オンボード加速度センサーを使用してパンチや屈伸などのジェスチャーを検出する方法を示します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAOEI/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-TFLite-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を学ぶ</font></span></strong></a></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr>
      <th class="table-trnobg">Edge Impulse on XIAO ESP32S3 Sense</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/2.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>このプロジェクトでは、Seeed Studio XIAO SAMD21およびSeeed Studio XIAO RP2040開発ボードへのモデルのトレーニングと展開を扱います。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/xiao_esp32s3_keyword_spotting/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を学ぶ</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

---

### Wio Terminal上のTinyML

Wio Terminalは、メーカー、趣味愛好家、IoT愛好家向けに設計された強力で使いやすい開発ボードです。2.4インチLCDスクリーン、Wi-FiおよびBluetooth接続、センサー群、多様な入出力インターフェースを備えています。

Wio TerminalはArduino、MicroPython、CircuitPythonなどの幅広いプログラミング言語をサポートしており、開発者が簡単に始められるようになっています。そのコンパクトで携帯性に優れたデザインにより、スマートデバイスの作成から産業用途のプロトタイプ構築まで、幅広いプロジェクトに最適です。

<div class="video-container">
<iframe width="960" height="500" src="https://www.youtube.com/embed/3Fp3W9VJUL4" title="YouTube動画プレーヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

---

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
			<th class="table-trnobg">Edge Impulse on Wio Terminal</th>
      <th class="table-trnobg">TensorFlow Lite on Wio Terminal</th>
      <th class="table-trnobg">Codecraft TinyML on Wio Terminal</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif1.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/4625071.png" style={{width:500, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>現在、Wio Terminalは公式にEdge Impulseをサポートしています。Wio Terminalを使ってエッジでの機械学習を始める方法を見てみましょう！</font></td>
      <td class="table-trnobg"><font size={"1"}>この記事では、公式のArduino TensorFlow LiteライブラリをWio Terminalにインストールする方法を紹介します。これにより、Wio Terminalを使用していくつかの機械学習モデルを試すことができます。</font></td>
      <td class="table-trnobg"><font size={"1"}>Codecraftのグラフィカルプログラミング、Wio Terminal、およびEdge Impulseを使用した簡単な音声認識プロジェクト。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-EI-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-TFLM-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.yuque.com/tinkergen-help-en/codecraft/tinyml" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

### Grove Vision AIでのTinyML

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
			<th class="table-trnobg">Edge Impulse on Grove Vision AI</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><iframe width="960" height="515" src="https://www.youtube.com/embed/N7xpzzD1bYA" title="YouTube動画プレーヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>Grove - Vision AI Moduleは、Himax HX6537-Aプロセッサをベースにした親指サイズのボードで、2メガピクセルのOV2640カメラ、マイク、3軸加速度計、3軸ジャイロスコープを搭載しています。32MBのSPIフラッシュによるストレージを提供し、顔認識や人物検出のためのMLアルゴリズムが事前インストールされており、カスタマイズされたモデルもサポートします。XIAOエコシステムやArduinoと互換性があり、AI対応カメラプロジェクトを始めるのに最適です。Edge Impulseによる完全なサポートがあるため、カメラから生データをサンプリングし、モデルを構築し、スタジオから直接プログラミングなしで学習済みの機械学習モデルをモジュールにデプロイすることができます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/edge-impulse-vision-ai/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

### SenseCAP A1101でのTinyML

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
        <th class="table-trnobg">Roboflow/ YOLOv5/ TensorFlow Lite on SenseCAP A1101</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/sensecapa1101.png" style={{width:800, height:400}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>Seeed SenseCAP A1101 - LoraWAN Vision AI Sensorは、開発者向けに設計された画像認識AIセンサーです。SenseCAP A1101 - LoRaWAN Vision AI SensorはTinyML AI技術とLoRaWAN長距離伝送を組み合わせ、屋内外で使用可能な低消費電力、高性能AIデバイスソリューションを提供します。このセンサーはHimaxの高性能低消費電力AIビジョンソリューションを特徴とし、Google TensorFlow Liteフレームワークおよび複数のTinyML AIプラットフォームをサポートします。このWikiでは、特定のアプリケーション向けに独自のAIモデルをトレーニングし、それを簡単にSenseCAP A1101 - LoRaWAN Vision AI Sensorにデプロイする方法を学びます。さあ始めましょう！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## TinyML コース

### Wio Terminal Codecraft コース

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"3"}>詳細なレッスンとステップバイステップのプロジェクトで、TinyMLとWio Terminalの世界への第一歩を踏み出しましょう！今や、シンプルなハードウェアでも複雑な問題を解決できます。</font>
        <br /><font size={"3"}><strong>豊富なカリキュラムリソース</strong></font>
        <font size={"2"}>このコースには完全なプロジェクト資料とコードプログラムが付属しており、すべてがGitHubでオープンソース化されています。すべての読者は自由に使用し、さらに学習することができます。</font>
        <br /><font size={"3"}><strong>詳細で分かりやすいコース内容</strong></font><font size={"2"}>このコースはSeeed Studio EDU部門によって開発されました。コースは原理、展開、応用をカバーしており、授業を生き生きとしたものにしながら、内容は完全かつ専門的です。</font>
        <br /><font size={"3"}><strong>基礎からのカリキュラム設計</strong></font><font size={"2"}>学生の学習状況を考慮し、各レッスンやカリキュラム全体が浅いところから深いところへ進むように設計されています。そのため、学生の能力に合わせた指導が行われます。</font>
        <br /><font size={"3"}><strong>複雑なプログラミング基礎は不要</strong></font><font size={"2"}>このコースはSeeed Studioが開発したCodecraftプラットフォームを使用したプログラミングに焦点を当てています。CodecraftはScratch 3.0に基づいたブロック型のグラフィカルプログラミングプラットフォームであり、プログラミングをより簡単で楽しいものにします。高度なプログラミング言語の使用に関する基礎は必要ありません。</font>
        <br />
    </div>
    <div class="xiao_topic_page_pic">
      <img src="https://files.seeedstudio.com/wiki/tinyml-topic/cc_tinyml_2.png" style={{width:800, height:'auto'}}/>
      <br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🖱 詳細を見る</font></span></strong></a>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/No-code_Programming_to_Get_Started_with_TinyML.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 今すぐダウンロード</font></span></strong></a>
</div>

---

### Wio Terminal TinyML 基礎チュートリアル by Seeed Studio

<div class="button_tech_support_container">
<a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" class="button_wiotinyml"></a> 
</div>

### Wio Terminal Edge Impulse チュートリアル

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
			<th class="table-trnobg">組み込み機械学習による連続動作認識システムの構築</th>
      <th class="table-trnobg">Wio Terminal Edge Impulse 内蔵マイクによる音声シーン認識</th>
      <th class="table-trnobg">Wio Terminal Edge Impulse 超音波センサーによる人数カウント</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><iframe width="280" height="180" src="https://www.youtube.com/embed/FseGCn-oBA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_p.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/walkinout.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>このチュートリアルでは、連続動作を検出できる機械学習システムの構築方法、実際のデバイスからデータをサンプリングする方法、信号処理パイプラインの設計方法、そしてモデルをデバイスに戻して展開する方法を紹介します。</font></td>
			<td class="table-trnobg"><font size={"1"}>このプロジェクトでは、Wio TerminalとEdge Impulseを使用して音声シーン分類器をトレーニングおよび展開する方法を学びます。詳細とビデオチュートリアルについては、対応するビデオをご覧ください！</font></td>
			<td class="table-trnobg"><font size={"1"}>このプロジェクトでは、Wio Terminal、通常の超音波レンジャー、および特別なディープラーニング技術を使用して人数カウントシステムを作成します。</font></td>
    	</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-EI-2/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-EI-3/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-EI-4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminal Edge Impulse 異常検知による予知保全</th>
      <th class="table-trnobg">Wio Terminal Edge Impulse マルチチャンネルガスセンサーによる飲料識別</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>このプロジェクトでは、Wio Terminal内蔵加速度センサーのデータを使用し、デバイス上で異常検知を行い、その後データをBlynk Edgent Cloudに送信します。</font></td>
      <td class="table-trnobg"><font size={"1"}>このWikiでは、Wio TerminalとEdge Impulseを使用して機械学習プロジェクトを簡単に展開する方法を紹介します。Wio TerminalとGroveシステムを組み合わせることで非常に強力になり、数百のセンサーデータを分析し、さまざまなシナリオを評価する可能性があります！</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-EI-6/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-EI-5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Wio Terminal TensorFlow Lite チュートリアル

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
			<th class="table-trnobg">Wio Terminal Tensorflow Lite Micro BME280を使用したインテリジェント気象ステーション</th>
      <th class="table-trnobg">Wio Terminal Tensorflow Lite Micro MCUでの音声認識 – Speech-to-Intent</th>
      <th class="table-trnobg">Wio Terminal を使用した機械学習 - ジェスチャー認識</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/IMG_9575.JPG" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-7-768x570.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>このプロジェクトでは、Wio Terminal と Tensorflow Lite for Microcontrollers を使用して、BME280 環境センサーからのローカルデータに基づいて、次の24時間の天気と降水量を予測できるインテリジェント気象ステーションを作成します。</font></td>
			<td class="table-trnobg"><font size={"1"}>このプロジェクトでは、より効率的な方法を採用し、ユーザーの発話を直接解析して、意図/スロットの形式で実行可能な出力に変換します。</font></td>
			<td class="table-trnobg"><font size={"1"}>このチュートリアルでは、Wio Terminal を使用して TensorFlow Lite の助けを借りて、簡単なジェスチャー認識機械学習デモをセットアップする方法を示します。</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-TFLM-2/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-TFLM-3/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Gesture-Recognition/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Wio Terminal Udemy による TinyML チュートリアル

<div class="button_tech_support_container">
<a href="https://www.udemy.com/course/tinyml-wio-terminal/" class="button_udemy"></a> 
</div>

## TinyML アプリケーション

ここでは、TinyML デバイスの素晴らしい例をいくつか紹介します。これらのケーススタディはアプリケーションシナリオごとに分類されているため、興味のあるものを見つけて、アイデアを実現するために参加してください！

### ヒューマンマシンインタラクション

TinyML 技術を使用すると、センサーデータを機械学習モデルと組み合わせて、音声認識、ジェスチャー認識、ポーズ認識などのヒューマンコンピュータインタラクションアプリケーションを実現できます。

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
			<th class="table-trnobg">XIAO nRF52840 Sense での音声認識</th>
      <th class="table-trnobg">簡単な TinyML: 異常検知と動作分類</th>
      <th class="table-trnobg">XIAO nRF52840 と Edge Impulse を使用した音声制御おもちゃとディスプレイ</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1472235/_d2Lefd6Xrq.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/voicetoy.gif" style={{width:280, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>このウィキでは、Seeed Studio XIAO nRF52840 Sense を使用して、オンボードマイクを使った音声認識を実行する方法を示します。</font></td>
			<td class="table-trnobg"><font size={"1"}>Seeed XIAO nRF52840 Sense を使用した巨大な小型デバイスでの機械学習の探求。</font></td>
			<td class="table-trnobg"><font size={"1"}>このデモでは、組み込み ML を使用して、XIAO nRF52840 Sense ボードによるアニメーション画面表示とおもちゃの音声制御を実現します。</font></td>
    	</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-TFLite-Mic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mjrobot/tinyml-made-easy-anomaly-detection-motion-classification-958fd2" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/yuwork58426/voice-control-toy-and-display-using-xiao-and-edge-impulse-592bb4" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
    <tr></tr>
    <tr class="table-trnobg">
			<th class="table-trnobg">簡単な TinyML: ジェスチャー認識</th>
      <th class="table-trnobg">接続された人工鼻を作る方法</th>
      <th class="table-trnobg">TinyML を使用した液体分類</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1347750/_wTExmhrtW6.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/nose.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/liquid.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>Codecraft/Edge Impulse を使用してプログラムされた Seeed Wio Terminal は、初心者が TinyML（組み込み機械学習）を始めるための素晴らしいツールです。</font></td>
			<td class="table-trnobg"><font size={"1"}>過去数か月間、私はかなりクールなプロジェクトに取り組んできました。一部の方はすでに聞いたことがあるかもしれませんが、DIY の汎用人工鼻を作成しました。この鼻は、認識するように教えたほぼすべてのものを嗅ぎ分けることができます！</font></td>
			<td class="table-trnobg"><font size={"1"}>水質センサーを使用して濁度を測定し、Seeed Studio Wio Terminal 上で動作する機械学習モデルを使用してさまざまな液体を分類します。</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mjrobot/tinyml-made-easy-gesture-recognition-ce13a5" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://blog.benjamin-cabe.com/2021/08/03/how-i-built-a-connected-artificial-nose" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.edgeimpulse.com/experts/prototype-and-concept-projects/liquid-classification-tinyml" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
    <tr></tr>
    <tr class="table-trnobg">
			<th class="table-trnobg">物理的に Chrome の Dino ゲームをプレイ</th>
      <th class="table-trnobg">Wio Terminal と Edge Impulse を使用した手書き認識の構築</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/dinogame.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2021/03/Copy-of-Copy-of-Clean-6-1030x601.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>このプロジェクトでは、機械学習と組み込みエレクトロニクスを使用して、物理的に Chrome の Dino ゲームをプレイします。</font></td>
			<td class="table-trnobg"><font size={"1"}>今日のチュートリアルでは、Wio Terminal と Edge Impulse を使用して機械学習ベースの手書き認識デバイスを構築する方法を紹介します。この詳細なガイドに従って、単一の飛行時間センサーを使用して手書きジェスチャーを認識し、それをテキストに変換する方法を学びましょう！</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://makergram.com/blog/play-chromes-dino-game-physically/?fbclid=IwAR3h19XxXITb4jh6Ot1pvc7yDXJ5g8gvNAOPA7DYTs8rpQ1DaiHmd_WsGFo" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/blog/2021/03/02/handwriting-recognition-with-wio-terminal-edge-impulse/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

### 小売業

TinyML技術は、小売業界において、販売予測、顧客行動分析、リソース最適化、損失防止、スマートマーケティングなどに応用することができ、よりスマートで効率的なビジネス管理と運営を実現するのに役立ちます。

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
			<th class="table-trnobg">XIAO nRF52840 Sense & Edge Impulseを使用したペット活動トラッカー</th>
      <th class="table-trnobg">潜在的な日焼けを検出するBLE AI駆動スマートウォッチ</th>
      <th class="table-trnobg">Person Sensor.Ft Useful Sensorを使用したスマートエアクーラー</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1424908/_vDVFksQ0VV.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/smartwatch.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1509781/_hEJTTPV6Rb.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>私たちのペットには、もっとアクティブでいるためのサポートが必要です。TinyMLモデルは、3軸IMUからのデータに基づいて活動を予測します。</font></td>
			<td class="table-trnobg"><font size={"1"}>UVおよび天候データをSDカードに記録し、Edge Impulseモデルをトレーニングします。その後、Androidアプリを介してBLEで日焼けの情報を取得します。</font></td>
      <td class="table-trnobg"><font size={"1"}>この時代では、他のすべてのデバイスがスマート化しています。なぜ私たちの古き良き夏の友であるエアクーラーにも知能を追加しないのでしょうか？しかし、センサーが画像データの抽出された特徴を直接提示できるとしたらどうでしょう？それは興味深いと思いませんか？</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mithun-das/pet-activity-tracker-using-xiao-ble-sense-edge-impulse-858d73" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/ble-ai-driven-smartwatch-detecting-potential-sun-damage-7d08be" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/phatta/smart-air-cooler-using-person-sensor-ft-useful-sensor-7daa73" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
    <tr></tr>
    <tr class="table-trnobg">
			<th class="table-trnobg">TinyML 🧠 とAzure IoTをEdge ImpulseとWio Terminalで活用</th>
      <th class="table-trnobg">NMCS: コーヒーこぼれ防止！</th>
      <th class="table-trnobg">安全なキャンプのためのAI駆動サーマルカメラ</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><iframe width="300" height="200" src="https://www.youtube.com/embed/JCirUbyY60s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1579836/_rL5FcyTm6U.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1367564/_W4FrYx6LrV.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>春が来たので、Azure IoTリスフィーダーをアップグレードし、コンピュータビジョン機能を追加します。このために、現在のシナリオにEdge Impulseを使用してTinyML機能を追加します。</font></td>
      <td class="table-trnobg"><font size={"1"}>NMCSは、聴覚と視覚のスキルを使用して、エネルギーブースターを作る際にコーヒーがこぼれないようにするデバイスです。</font></td>
      <td class="table-trnobg"><font size={"1"}>TinyMLモデルを実行するWio Terminalは、暗闇の中でも動物や人間が近づいているかを識別し、キャンパーに警告を発します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=JCirUbyY60s" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/sashrikad/nmcs-no-more-coffee-spills-55897a" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mithun-das/ai-powered-thermal-camera-for-safe-camping-8fc887" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

---

### 農業

TinyML技術を使用することで、センサーデータを機械学習モデルと組み合わせて、灌漑の自動化、天気予報、作物の病害虫検出を行うことが可能です。

<div class="table-center">
	

<table align="center">
    <tr class="table-trnobg">
			<th class="table-trnobg">視覚ベースの砂減少防止キット (VSDP)</th>
      <th class="table-trnobg">TensorFlowを使用した熱画像による灌漑レベル評価</th>
      <th class="table-trnobg">TensorFlow Lite for Microcontrollersを用いた天気予測</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1502609/_8nie9S4suc.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/irrigation.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/weatherstation.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>エッジAIノードを使用して砂減少地域を監視するLoRaWAN接続のインフラを構築したいと考えています。</font></td>
			<td class="table-trnobg"><font size={"1"}>熱画像を使用して灌漑レベルデータを収集し、ニューラルネットワークモデルを構築・訓練し、そのモデルをWio Terminal上で直接実行します。</font></td>
			<td class="table-trnobg"><font size={"1"}>この記事では、Wio TerminalとTensorFlow Lite for Microcontrollersを使用して、BME280環境センサーからのローカルデータに基づいて次の24時間の天気と降水量を予測できるインテリジェントな気象ステーションを作成します。</font></td>
    </tr>
		<tr></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/rahulkhanna/vision-based-sand-depletion-prevention-kit-vsdp-bde664" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/irrigation-level-assessment-by-thermal-imaging-w-tensorflow-c60b2c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/blog/2021/03/18/learn-tinyml-using-wio-terminal-and-arduino-ide-4-weather-prediction-with-tensorflow-lite-for-microcontrollers-a-k-a-i-just-like-data/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
    <tr></tr>
    <tr class="table-trnobg">
			<th class="table-trnobg">食用藻類の成長サイクルモニター</th>
      <th class="table-trnobg">IoT食品腐敗センサーとモニタリングダッシュボード</th>
      <th class="table-trnobg">スマートレイク - 藻類ブルームの早期検出</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1510607/_dve7mQFzUj.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1502746/_dSmk8zVpyV.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1498224/_dDVOnd2yVz.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>スピルリナ藻類を自己完結型の空間で育てるシステムを考案しました。</font></td>
			<td class="table-trnobg"><font size={"1"}>DeViridiは、食品保管条件を監視し、食品の腐敗を判断するために使用できるスマートIoTツールです。</font></td>
      <td class="table-trnobg"><font size={"1"}>さまざまなセンサーとエッジでの機械学習を使用して、このデバイスは藻類ブルームの早期兆候を検出し、当局や市民に通知します。</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/skruglewicz/edible-algae-growing-cycle-monitor-bca939" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/cyborgash122/deviridi-iot-food-spoilage-sensor-and-monitoring-dashboard-e2f933" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mithun-das/smart-lake-early-detection-of-algae-bloom-6494c9" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <th class="table-trnobg">エッジインパルスとMMSを使用したIoT AI駆動の樹木病害識別器</th>
      <th class="table-trnobg">湖用プラスチックボトル検出器</th>
      <th class="table-trnobg">NOMOS: 蚊の成長モニタリングシステム</th>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/mms.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1499166/_i5AfIuVOPD.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1498662/_4hNXTHVvlf.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
		<tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>樹木の病害を検出し、MMSを通じて結果を通知することで、森林、農場、耕作地への被害を防ぎます。</font></td>
      <td class="table-trnobg"><font size={"1"}>海洋生物のためのプラスチック汚染と戦うために。映画のキャラクターWALL-Eに触発され、このプロジェクトはゴミの投棄と環境への影響についての意識を高めることを目的としています。</font></td>
      <td class="table-trnobg"><font size={"1"}>下水管の温度、湿度、水流に基づいた蚊の成長モニタリングシステムで、デング熱の拡散を最小限に抑えます。</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/iot-ai-driven-tree-disease-identifier-w-edge-impulse-mms-1b5ff6" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/JuanYi/plastic-bottle-detector-for-lake-353996" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/rifqiabdillah/nomos-mosquito-growth-monitoring-system-6def4c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
    <tr></tr>
    <tr class="table-trnobg">
			<th class="table-trnobg">Wio Terminalを使用したTinyMLスマート気象ステーションの構築！</th>
      <th class="table-trnobg">火災と戦う 🔥 - TinyMLを使用した山火事予測</th>
      <th class="table-trnobg">早期鉄砲水警報システム</th>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1264506/_2yKmoX1X3P.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1503029/_Uq5VHx9Sf0.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1503004/_dDriQ77DIf.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>データ収集からトレーニング、デプロイメントまで、機械学習を活用したスマート気象ステーションを自分で構築する方法を学びましょう！</font></td>
      <td class="table-trnobg"><font size={"1"}>Fight Fireは、山火事に迅速に対応するために消防当局を支援する山火事予測デバイスです。</font></td>
      <td class="table-trnobg"><font size={"1"}>このアイデアは、洪水や雪崩による災害に迅速に対応できるよう、早期警報を生成するソリューションを提供することを目的としています。</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/supperted825/build-a-tinyml-smart-weather-station-with-wio-terminal-1ec8ee" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/user102774/fight-fire-wild-fire-prediction-using-tinyml-df7572" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mrmolex/early-flash-flood-warn-system-8cfdee" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

---

### 工業

TinyML技術を使用することで、センサーデータと機械学習モデルを組み合わせ、品質管理や設備保守などの生産プロセスを自動化および最適化することが可能です。

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
			<th class="table-trnobg">エレベーターの異常検知をMLで実現（Edge Impulse & Notecard使用）</th>
      <th class="table-trnobg">IoT AI駆動型ヨーグルト製造とテクスチャ予測 | Blynk</th>
      <th class="table-trnobg">TinyMLを使用した油タンク漏れ検知</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/elevator.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/aidriven.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1412712/_pEJAZLxsMf.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
        <td class="table-trnobg"><font size={"1"}>IoTデバイスは予測保守を可能にし、商業用エレベーターの安定した性能を確保し、高額な修理費用やダウンタイムを削減します。これは効率的な建物の流れや公共の安全、生産性、エネルギー消費、生活の質にとって重要です。</font></td>
        <td class="table-trnobg"><font size={"1"}>ヨーグルト製造中に環境要因と培養量を収集します。その後、Blynkを介してニューラルネットワークモデルを実行し、テクスチャを予測します。</font></td>
        <td class="table-trnobg"><font size={"1"}>このML搭載デバイスはディーゼルの匂いを検知し、リアルタイム通知をモバイルに送信します。Wio Terminal、Edge Impulse、Blynkを使用。</font></td>
    	</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/ivan-arakistain/ml-anomaly-detection-in-elevators-w-edge-impulse-notecard-344198" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/iot-ai-driven-yogurt-processing-texture-prediction-blynk-560c52" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/450327/oil-tank-leak-detection-using-tinyml-by-sashrika-29222f" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
    <tr></tr>
    <tr class="table-trnobg">
			<th class="table-trnobg">ガス漏れ検知用ウェブブラウザ操作ロボット</th>
      <th class="table-trnobg">流量計とTinyMLを使用したパイプライン詰まり検知</th>
      <th class="table-trnobg">TinyML + LoRaを使用した排水口詰まり検知</th>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1548875/_F9M97NN1KO.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><iframe title="vimeo-player" src="https://player.vimeo.com/video/784835596?h=cc9173caab" width="300" height="230" frameborder="0" allowfullscreen></iframe></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1580113/_N3O8kRxik8.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>グリーン水素は排出量を削減し、地球を守る代替エネルギーです。しかし、まだ初期段階にあり、安全性が大きな懸念事項です。水素漏れはあらゆる手段で回避する必要があります。ガス漏れの早期検知を可能にするため、必要なセンサー機器を搭載した大きな遠隔操作ロボットを構築しました。</font></td>
      <td class="table-trnobg"><font size={"1"}>産業運用におけるパイプライン詰まりの問題に対する提案として、人工知能（AI）と機械学習の使用を導入しています。AIシステムは流量センサーのデータを使用して、流量の変化を分析し、詰まりを示す可能性のある兆候を検知します。</font></td>
      <td class="table-trnobg"><font size={"1"}>屋外スマートセンサーA1101を使用して、バルコニー排水口に葉や花、その他のゴミが蓄積していることを検知し、ユーザーに通知します。</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/ivan-arakistain/web-browser-operated-robot-for-gas-leak-detection-4cbe1b" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.edgeimpulse.com/experts/prototype-and-concept-projects/clog-detection-with-ai" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/vitaminCC/detect-the-drain-blockage-with-tiny-ml-lora-6d8957" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

---

### ヘルスケア

TinyMLは健康モニタリングに応用され、医療業界がより効率的で正確な健康モニタリングを実現するのに役立ちます。

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
			<th class="table-trnobg">Edge Impulseで動作するスマート聴診器</th>
      <th class="table-trnobg">ホットフラッシュに対する非侵襲的ソリューション</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1284920/_lKAIVXYzeU.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1119627/_vk6o5mjK8D.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    	<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>TinyMLを活用して呼吸器系の異常を聴診し検出するデジタル聴診器。</font></td>
			<td class="table-trnobg"><font size={"1"}>このプロジェクトでは、ホットフラッシュを検出し、エアコン冷却システムをIRエミッターで作動させるなどのアクションをトリガーするデバイスを構築します。入力として多次元赤外線温度センサーのデータを使用し、出力は人が認識され、最近急激な温度変化が発生したかどうかを通知するシンプルな分類結果となります。</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/phatta/smart-stethoscope-powered-by-edge-impulse-a09826" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/naveenbskumar/no-pause-f1bcbf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

### 交通

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
			<th class="table-trnobg">TinyMLを使用したマイコン上の音声認識ロボカー</th>
		</tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/autocar.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>内蔵マイクを使用した音声認識により、Wio TerminalはTinyMLを使用して「進む」「止まる」および背景ノイズを認識できます。</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/vincekok/voice-activated-robo-car-on-microcontroller-with-tinyml-39a8fb" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

### 畜産業

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
      <th class="table-trnobg">野生動物保護区モニター</th>
      <th class="table-trnobg">ペンギンのカウントとモニタリング</th>
      <th class="table-trnobg">Gate Keeper - IoTベースの象検出システム</th>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1494879/_vVl6arJ5L8.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:700, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1501504/image_YwTN2w1Ca6.png?auto=compress%2Cformat&w=740&h=555&fit=max" style={{width:280, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1500778/inshot_20220925_2048546541_MCWMtzTNBg.jpg?auto=compress%2Cformat&w=740&h=555&fit=max" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><font size={"1"}>保護区の持続可能性を維持するための野生動物保護区環境および動物モニター。</font></td>
      <td class="table-trnobg"><font size={"1"}>AIオブジェクト認識カメラを使用して、リトルブルーペンギンが岸に上がったり海に戻ったりする際に検出およびカウントするためのPOC。</font></td>
      <td class="table-trnobg"><font size={"1"}>Grove AI Vision ModuleとWio Terminalを使用したIoTベースの象検出システムの構築方法を案内します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/hendra/wildlife-sanctuary-monitor-4162ec" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mediapod/penguin-counting-and-monitoring-2bdc1c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/482632/gate-keeper-an-iot-based-elephant-detection-system-ae726c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

---

### Microsoft Reactor

<div class="table-center">
	<table align="center">
    <tr class="table-trnobg">
      <th class="table-trnobg">Microsoft Reactor パート 1</th>
      <th class="table-trnobg">Microsoft Reactor パート 2</th>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><iframe width="450" height="240" src="https://www.youtube.com/embed/ZsQ0-jXdnRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
			<td class="table-trnobg"><iframe width="450" height="240" src="https://www.youtube.com/embed/-1EP3iqYYdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
		</tr>
		<tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
			<td class="table-trnobg" colspan="2"><font size={"1"}>AIはもはやクラウドに閉じ込められていません。GPUを搭載した強力なコンピュータに依存する代わりに、近年ではTinyMLのおかげでAIが小型デバイスに進出しました。TinyMLはマイクロコントローラ上で動作する機械学習モデルであり、音声制御スマートスピーカーやフィットネストラッカーなど、すでに身の回りに存在しているかもしれません。<br />この2部構成の番組では、JimがTinyMLを実際に体験し、Seeed Studiosの小型マイクロコントローラ「Seeed XIAO BLE」を使用して、ローイングとランニングを区別できるフィットネストラッカーを構築します。これらのモデルのトレーニングとデプロイは非常に複雑なため、Jimはトレーニングデータの収集とTinyMLモデルの構築を支援するオンラインツール「Edge Impulse」の助けを借ります。<br />Jimがモデルを完成させた後、VS CodeとPlatformIO（VS Code用のマイクロコントローラ開発拡張機能）を使用してデバイスにデプロイします。その後、低消費電力のフィットネストラッカーを構築する際の複雑さの1つである接続性に取り組みます。多くのフィットネストラッカーはBluetoothを使用してスマホアプリと同期するため、Jimもこの方法を採用し、モバイルアプリからAzure IoT Centralにフィットネスデータを同期します。</font></td>
    </tr>
		<tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=ZsQ0-jXdnRY" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=-1EP3iqYYdU" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## TinyMLプロジェクトを私たちに共有しよう

TinyMLのための公共リソースプールを構築するために、あなたのプロジェクトや探求を提出して参加してください！ あなたの作業を共有することで、TinyML分野における課題や機会についてコミュニティの理解を深めることができます。物体検出、音声認識、その他のTinyMLアプリケーションに取り組んでいる場合でも、あなたの洞察や経験は他の人々が学び、革新する助けとなるでしょう！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/sharecase.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.google.com/forms/d/1k4aCFeehVkTLucVVHIzrJAJL_prbZqJ2h5YaRmvbdQQ/edit" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>プロジェクトを共有する</font></span></strong></a></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>