---
description: "Orin NX 上で reComputer Super と Classic を比較：同一電力モードでの llama.cpp のトークン生成速度、ビデオデコードおよび TensorRT 推論性能。"
title: reComputer Super と Classic の比較：エッジ推論における次世代 AI パフォーマンス
tags:
  - reComputer Super
  - Super
  - deepseek
  - yolo
  - Jetson
  - AI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/recomputer-super_robotics_2.webp
slug: /recomputer_jetson_super_performance
last_update:
  date: 06/04/2025
  author: Zibo
createdAt: '2025-06-09'
updatedAt: '2025-10-11'
url: https://wiki.seeedstudio.com/ja/recomputer_jetson_super_performance/
---


<div align="center">
  <img alt="この比較で使用した組み立て済みユニットの横にファンを取り付けた reComputer ボード" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## はじめに

<div style={{ textAlign: "justify" }}>
reComputer Super シリーズは reComputer Classic を強化し、AI 性能で最大 1.7 倍、157 TOPS のブーストを実現します。本 Wiki では、AI テキスト生成と AI ビデオ処理における reComputer Super と reComputer Classic の性能差を比較します。テストプラットフォームとして<a href="https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html" target="_blank">NVIDIA Jetson Orin NX 16GB モジュール</a>を使用し、reComputer Super が reComputer Classic と比べて明確に優れた性能を発揮することを示します。
</div>

## AI テキスト生成

<div style={{ textAlign: "justify" }}>
このセクションでは、Ollama を使用して deepseek-r1:7b モデルをロードし、異なるデバイスにおけるモデルの推論速度を比較します。reComputer Super は、reComputer Classic と比較して推論速度と GPU クロックの向上を示します。
</div>

:::info
このモデルをデプロイする主な手順は次のとおりです：

**ステップ 1.** jetson-containers をインストールします。

**ステップ 2.** Docker コンテナに入って Ollama サービスを実行します。

**ステップ 3.** Ollama から deepseek-r1:7b モデルをプルします。
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/nD1w-odV-ZU" title="Deepseek Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
デモを分かりやすくするために、ターミナルに「tell me a story.」と入力し、DeepSeek に短い物語を生成させました。モデルが生成する結果にはランダム性があるため、得られる結果は一般的に同じにはなりません。モデルがトークンを生成する速度に基づいて、デバイスの推論性能を測定することができます。（動画で示されているように、`eval rate` 指標が使用されています）
</div>

:::note
Jetson デバイスに Ollama をデプロイしたい場合は、[このチュートリアル](https://www.jetson-ai-lab.com/tutorial_ollama.html)を参照して、Nvidia Jetson 上に素早くデプロイする方法を学んでください。
:::

## AI ビデオ処理

<div style={{ textAlign: "justify" }}>
このセクションでは、2 台のデバイスに物体検出モデル YOLOv11 をデプロイし、ビデオ入力を処理する際の性能差を比較しました。その結果、reComputer Super は reComputer Classic と比べて、1 秒あたり約 2.37 倍多くの画像を処理できることが示されました。
</div>

:::info
[このリポジトリ](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)を参照することで、私たちと同様にお使いのデバイス上で YOLOv11 をデプロイできます。
このモデルをデプロイする主な手順は次のとおりです：

**ステップ 1.** この[GitHub リポジトリ](https://github.com/wang-xinyu/tensorrtx/tree/master)をクローンします。

**ステップ 2.** [ultralytics](https://github.com/ultralytics/ultralytics) から事前学習済みの重みファイル yolo11n.pt をダウンロードします。

**ステップ 3.** [このリポジトリ](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)に従ってモデルをコンパイルし、推論を実行します。

**ステップ 4.** 推論を実行するために、この[リポジトリ](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)内の yolo11_det_trt.py スクリプトを参考にします。
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/ELbltFieez4" title="Yolo Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
ターミナルに表示される Average FPS は、モデルの純粋な推論速度を反映しており、デバイスの計算能力の差を直接示します。そのため、reComputer Super では FPS が大幅に高くなっています。一方、表示ウィンドウ左上に表示されるリアルタイム FPS は、画像取得、前処理、推論、後処理、表示を含む処理パイプライン全体のフレームレートを表します。この FPS は、カメラのフレームレート、ディスプレイのリフレッシュレート、プログラムのフレームレート制限など、複数の要因の影響を受けるため、両デバイスで表示される FPS が類似し、推論性能の差が見えにくくなります。したがって、デバイス性能はリアルタイム表示の FPS のみに依存するのではなく、ターミナルに出力される平均推論 FPS に基づいて評価する必要があります。
:::

## 参考資料

- https://www.jetson-ai-lab.com/tutorial_ollama.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/ja/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/edge-ai/generative-ai
- https://github.com/ultralytics/ultralytics
- https://github.com/wang-xinyu/tensorrtx?tab=readme-ov-file

## 関連リソース

- [reComputer Super のハードウェアおよびインターフェースの使用方法](/ja/recomputer_jetson_super_hardware_interfaces_usage/)
- [reComputer Jetson 向けに PyTorch をインストール](/ja/install_torch_on_recomputer/)
- [Jetson 上で MTP を用いて llama.cpp を高速化](/ja/jetson/accelerate_llm_inference_mtp/)
- [reComputer Super 製品ページ](https://www.seeedstudio.com/reComputer-Super-p-6617.html)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
