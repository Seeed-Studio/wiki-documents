---
description: モデルアシスタントの概要
title: SenseCraft AI モデルアシスタント概要
keywords:
- sscma モデルアシスタント ai tinyml 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ModelAssistant_Introduce_Overview
last_update:
  date: 05/15/2025
  author: LynnL4
---


# 概要

<div align="center">
  <img width="20%" src="https://files.seeedstudio.com/sscma/docs/images/SSCMA-Hero.png"/>
</div>

## はじめに

Seeed SenseCraft Model Assistant（略して SSCMA）は、組み込みAIに焦点を当てたオープンソースプロジェクトです。私たちは [OpenMMLab](https://github.com/open-mmlab) の優れたアルゴリズムを現実世界のシナリオに最適化し、実装をよりユーザーフレンドリーにすることで、組み込みデバイス上でより高速かつ正確な推論を実現しました。

## 含まれる内容

現在、以下のアルゴリズム方向をサポートしています：

### 🔍 異常検知

現実世界では、異常データを特定することはしばしば困難であり、特定できたとしても非常に高いコストがかかります。異常検知アルゴリズムは、低コストで正常データを収集し、正常データの範囲外のものを異常と見なします。

### 👁️ コンピュータビジョン

ここでは、物体検出、画像分類、画像セグメンテーション、姿勢推定などの複数のコンピュータビジョンアルゴリズムを提供しています。ただし、これらのアルゴリズムは低コストのハードウェアでは動作しません。SSCMAはこれらのコンピュータビジョンアルゴリズムを最適化し、低スペックデバイスでも良好な実行速度と精度を実現します。

### ⏱️ シナリオ特化型

SSCMAは、アナログ計器や従来のデジタルメーターの識別、音声分類など、特定の生産環境に合わせたカスタマイズされたシナリオを提供します。今後も特定のシナリオ向けにさらに多くのアルゴリズムを追加していく予定です。

## 特徴

### 🤝 ユーザーフレンドリー

SSCMAは、収集したデータを簡単にトレーニングできるユーザーフレンドリーなプラットフォームを提供し、トレーニングプロセス中に生成される可視化を通じてアルゴリズムの性能をよりよく理解できるようにします。

### 🔋 低計算能力で高性能なモデル

SSCMAはエンドサイドAIアルゴリズムの研究に焦点を当てており、アルゴリズムモデルは [ESP32](https://www.espressif.com.cn/en/products/socs/esp32) や一部の [Arduino](https://arduino.cc) 開発ボード、さらには [Raspberry Pi](https://www.raspberrypi.org) などの組み込みSBCに展開可能です。

### 🗂️ 複数形式のモデルエクスポートをサポート

[TensorFlow Lite](https://www.tensorflow.org/lite) は主にマイクロコントローラーで使用され、[ONNX](https://onnx.ai) は主にEmbedded Linuxを搭載したデバイスで使用されます。[TensorRT](https://developer.nvidia.com/tensorrt)、[OpenVINO](https://docs.openvino.ai) などの特殊な形式はすでに OpenMMLab によって十分にサポートされています。SSCMAは、マイクロコントローラー向けにTFLiteモデルエクスポートを追加しており、これを直接 [TensorRT](https://developer.nvidia.com/tensorrt)、[UF2](https://github.com/microsoft/uf2) 形式に変換し、デバイスにドラッグ＆ドロップして展開することができます。

## アプリケーション例

### 物体検出

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/esp32/images/person_detection.png"/></div>

### アナログメーター認識

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/grove/images/pfld_meter.gif"/></div>

### デジタルメーター認識

<div align="center"><img width="800" src="https://files.seeedstudio.com/sscma/docs/static/grove/images/digital_meter.gif"/></div>

その他のアプリケーション例は [Model Zoo](https://github.com/Seeed-Studio/sscma-model-zoo) で確認できます。