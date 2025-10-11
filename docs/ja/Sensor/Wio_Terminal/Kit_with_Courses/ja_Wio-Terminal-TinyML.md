---
description: TinyMLとは何か
title: TinyMLとは何か
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-TinyML
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# TinyMLとは何か？

ML（Machine Learning、機械学習）はその名の通り機械学習を指し、現在ではほとんどの場合（必ずしもそうではありませんが）ディープラーニングを指します。TinyMLの「Tiny」は、MLモデルが非常に低消費電力で小型のデバイス、例えばさまざまなMCU（マイクロコントローラ）上で動作するように最適化されていることを意味します。これは、エッジ上のMLまたは組み込み機械学習のサブセットです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/81nihP0ASSL.jpg" /></div>

組み込みデバイスは、Nvidiaの「Jetson」Xavier AGXのような「組み込みスーパーコンピュータ」から、ESP32やCortex M0のような最小のマイクロコントローラまで、さまざまな形状とサイズがあります。

<img width={200} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1-750x750.jpg" />

<img width={350} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/xavier-module-dev-kit-3qrtr-1945px.png" />

では、なぜマイクロコントローラ上の組み込みMLが特別なカテゴリに分類され、独自のクールな名前が付けられているのでしょうか？

それは、独自の利点と制約があるからです。TinyMLの魅力は、MCUが広く普及しており、小型で、少量のエネルギーを消費し、比較的安価であることにあります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>

例えば、ARM Cortex M0+と、それを基盤とした小型の[Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)ボードを見てみましょう。このボードは親指ほどのサイズ（21×17.8mm）で、わずか1.33mAhの電力を消費します（つまり、150mAのバッテリーで約112時間動作可能で、ディープスリープ状態ではさらに長時間動作可能）。価格はわずか4.3USDです。

最近のモデル最適化の進展と、マイクロコントローラ上で機械学習モデルの推論を実行するために特別に作られたフレームワークの登場により、これらの小型デバイスにより多くの知能を与えることが可能になりました。現在では、音声シーン認識（例えば、象の活動やガラスが割れる音）、ホットワード検出（特定のフレーズでデバイスを起動する）や、簡単な画像認識タスクのためにマイクロコントローラ上でニューラルネットワークを展開することができます。組み込みマイクロコントローラを搭載したデバイスは、古いセンサーに新しい生命と意味を与えるために使用できます。例えば、機構に取り付けられた加速度計を使用して異常検出や予測保守を行う、または[このデモ](https://wiki.seeedstudio.com/ja/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)のようにさまざまな種類のリキュールを区別することができます。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>
TinyMLの可能性は本当に広大です。
<br />

では、制約についてはどうでしょうか？主な制約要因は、MCUのRAM/FLASHサイズです。どれだけ最適化しても、[YOLO9999](https://arxiv.org/abs/1612.08242)を小型マイクロコントローラに収めることはできません。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/yolo9000-pr023-1-638.jpg" /></div>

同様に、自動音声認識も制約があります。簡単なホットワード（または音声コマンド検出）は可能ですが、オープンドメインの音声認識はMCUの能力を超えています。現時点では。

Seeed EDUチームは、Wio Terminalを使用してTinyMLを始めるための決定的なステップバイステップコースを作成しました。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL5efXgSvwk9UCtJ6JKTyWAccSVfTXSlA3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

以下のリンクをクリックすることで、PDF形式のコースとコース資料をダウンロードできます。また、以前にSeeed StudioブログやHackster.ioサイトで公開された単独プロジェクトも見つけることができます。コース内のプロジェクトと単独プロジェクトの両方では、デバイスのプログラミングにArduino IDEを使用し、モデルのトレーニングと推論にはEdge ImpulseとTensorflow Lite for Microcontrollersを組み合わせて使用しています。

:::note
コースと単独プロジェクトの主な違いは、コースが主にSTEM教師が独自の教材を開発するための基盤として、またはすぐに使用できる授業教材として使用することを目的としているのに対し、単独プロジェクトはメーカーやハッカーがそれを探索し改良するためのものです。
:::

[Edge Impulse](https://www.edgeimpulse.com)は、エッジデバイス上での機械学習のためのユーザーフレンドリーな開発プラットフォームであり、データ収集からモデル展開までのTinyMLパイプライン全体をサポートする初心者向け（かつ強力な）ウェブインターフェースとツールキットを提供します。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/index.png" /></div>

一方で、[Tensorflow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers/get_started)は学習曲線が急ですが、独自のモデルトレーニングと推論パイプラインを実装することができます。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/tensorflow-lite-logo-social.png" /></div>

## Wio Terminal を使った TinyML コース

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1.png" /></div>

##### PDF をダウンロード

[Wio Terminal を使った TinyML コースの PDF](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/TinyML_with_Wio_Terminal_Course_v1-3.pdf)

##### コース教材をダウンロード

[Seeed_Arduino_WioTerminal_TinyML_Course-1.0.zip](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course/archive/refs/tags/1.0.zip)

##### コース教材の GitHub リポジトリ

[Wio Terminal を使った TinyML コースの GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course)

## ノーコードプログラミングで始める TinyML

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" /></div>

初心者が Wio Terminal と Codecraft グラフィカルプログラミングを使って、組み込み機械学習の基本を学べるように設計されています。

##### PDF をダウンロード

[ノーコードプログラミングで始める TinyML コースの PDF](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/No-code_Programming_to_Get_Started_with_TinyML.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>