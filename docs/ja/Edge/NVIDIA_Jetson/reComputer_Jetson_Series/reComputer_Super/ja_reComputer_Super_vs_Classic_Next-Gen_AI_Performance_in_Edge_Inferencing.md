---
description: この記事では、NVIDIA Jetson Orin NX 16GBを使用したreComputer SuperとreComputer Classicの優れたAI性能を紹介し、AIコンピューティングパワーで最大1.7倍の向上を実証しています。OllamaでDeepSeek-R1:7Bモデルを使用したAIテキスト生成と、YOLOv11物体検出モデルを使用したAIビデオ処理の実用的なベンチマークを通じて、reComputer Superが大幅に高速な推論速度とより高いGPU周波数を提供することを示しています。特に、Classicと比較して約2.37倍多くの画像を1秒間に処理します。この記事では、ディスプレイやシステム要因によって制限される可能性がある画面上のFPSではなく、ターミナルで報告されるFPSに基づいて性能を評価することの重要性についても説明しています。
title: reComputer Super vs Classic エッジ推論における次世代AI性能
tags:
  - reComputer Super
  - Super
  - deepseek
  - yolo
  - Jetson
  - AI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/recomputer-super_robotics_2.webp
slug: /ja/recomputer_jetson_super_performance
last_update:
  date: 06/04/2025
  author: Zibo
---


<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
</a></div>

## はじめに

<div style={{ textAlign: "justify" }}>
reComputer Superシリーズは、reComputer Classicを大幅に強化し、AI性能において最大1.7倍の向上で157 TOPSを実現します。このwikiでは、AIテキスト生成とAIビデオ処理におけるreComputer SuperとreComputer Classicの性能差を比較します。<a href="https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html" target="_blank">NVIDIA Jetson Orin NX 16GBモジュール</a>をテストプラットフォームとして使用し、reComputer SuperがreComputer Classicと比較して優れた性能を提供することを明確に実証します。
</div>

## AIテキスト生成

<div style={{ textAlign: "justify" }}>
このセクションでは、Ollamaを使用してdeepseek-r1:7bモデルを読み込み、異なるデバイスでのモデルの推論速度を比較します。reComputer SuperがreComputer Classicと比較して推論速度とGPU周波数において改善されていることが明らかです。
</div>

:::info
このモデルをデプロイするための主な手順は以下の通りです：

**ステップ1.** jetson-containersをインストールします。

**ステップ2.** Dockerコンテナに入り、Ollamaサービスを実行します。

**ステップ3.** Ollamaからdeepseek-r1:7bモデルをプルします。
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/nD1w-odV-ZU" title="Deepseek Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
デモンストレーションを容易にするため、ターミナルに「tell me a story.」と入力し、DeepSeekに短い物語を生成してもらいました。モデルが生成する結果のランダム性により、得られる結果は一般的に同じにはなりません。モデルがトークンを生成する速度に基づいて、デバイスの推論性能を測定することができます。（ビデオで実証されているように、eval rate指標が使用されます）
</div>

:::note
JetsonデバイスにOllamaをデプロイしたい場合は、[このチュートリアル](https://www.jetson-ai-lab.com/tutorial_ollama.html)を参照して、Nvidia Jetson上で迅速にデプロイする方法を学んでください。
:::

## AI動画処理

<div style={{ textAlign: "justify" }}>
このセクションでは、物体検出モデルYOLOv11を2つのデバイスにデプロイし、動画入力を処理する際の性能差を比較しました。結果として、reComputer SuperはreComputer Classicと比較して、1秒間に約2.37倍多くの画像を処理できることが示されました。
</div>

:::info
私たちと同様にデバイスにYOLOv11をデプロイするには、[このリポジトリ](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)を参照してください。
このモデルをデプロイする主な手順は以下の通りです：

**ステップ1.** この[GitHubリポジトリ](https://github.com/wang-xinyu/tensorrtx/tree/master)をクローンします。

**ステップ2.** [ultralytics](https://github.com/ultralytics/ultralytics)から事前訓練済み重みファイルyolo11n.ptをダウンロードします。

**ステップ3.** [このリポジトリ](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)に従ってモデルをコンパイルし、推論を実行します。

**ステップ4.** [このリポジトリ](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)のyolo11_det_trt.pyスクリプトを参照して推論を実行します。
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/ELbltFieez4" title="Yolo Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
ターミナルに表示される平均FPSは、モデルの純粋な推論速度を反映しており、デバイスの計算能力の違いを直接示しているため、reComputer Superは大幅に高いFPSを示します。しかし、表示ウィンドウの左上に表示されるリアルタイムFPSは、画像キャプチャ、前処理、推論、後処理、表示を含む全体の処理パイプラインのフレームレートを表しています。このFPSは、カメラのフレームレート、ディスプレイのリフレッシュレート、プログラムのフレームレート制限など複数の要因に影響されるため、両デバイスで表示されるFPSが類似し、推論性能の違いが隠されてしまいます。したがって、デバイス性能は、リアルタイム表示FPSのみに依存するのではなく、ターミナルに出力される平均推論FPSに基づいて評価すべきです。
:::

## 参考文献

- https://www.jetson-ai-lab.com/tutorial_ollama.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/edge-ai/generative-ai
- https://github.com/ultralytics/ultralytics
- https://github.com/wang-xinyu/tensorrtx?tab=readme-ov-file

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
