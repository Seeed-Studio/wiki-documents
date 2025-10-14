---
description: この記事では、既存のJetson Orin Nano Developer KitをJetson Orin Nano Super Developer Kitにアップグレードする方法について説明します。ソフトウェアアップデートを通じて、ユーザーはシステムのAI性能を向上させ、より強力な計算能力を体験できます。
title: Jetson Orin Nano Developer KitをSuper Kitにアップデートする方法
keywords:
  - Edge reComputer
  - Jetson Orin Nano Super Developer Kit
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp
slug: /ja/update_orin_nano_developer_kit_to_super_kit
last_update:
  date: 12/19/2024
  author: Youjiang
---

## Jetson Orin Nano Super Developer Kitとは

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.png"/>
</div>

NVIDIA Jetson Orin Nano™ Super Developer Kitは、小型エッジデバイス向けの生成AIを再定義するコンパクトでありながら強力なコンピューターです。最大67 TOPSのAI性能を提供し、前世代と比較して1.7倍の改善を実現し、ビジョントランスフォーマー、大規模言語モデル、ビジョン言語モデルなど、最も人気のある生成AIモデルをシームレスに実行できます。わずか249ドルで、開発者、学生、メーカーにNVIDIA AIソフトウェアと幅広いAIソフトウェアエコシステムのサポートを備えた最も手頃で利用しやすいプラットフォームを提供します。既存のJetson Orin Nano Developer Kitユーザーは、ソフトウェアアップグレードだけでこの性能向上を体験できるため、誰もが生成AIで新たな可能性を解き放つことができます。

:::info
驚くべきことに、Jetson Orin Nano Developer Kitは、ソフトウェアアップデートだけでJetson Orin Nano Super Developer Kitにアップグレードできます。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIAr-Jetson-Orintm-Nano-Developer-Kit-p-5617.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
  </a>
</div>


## Super Developer Kitにアップデートする方法
Nvidia Jetson Orin Nano 8GBをお持ちであれば、以下の手順でアップグレードできます：
- ステップ1：ハードウェアデバイスを接続する
- ステップ2：SDKManagerを開く
- ステップ3：システムを設定してフラッシュする
各ステップを体験するために、ビデオをご覧ください。

<div class="video-container">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/VhuSCMM7iN0" title="Update Orin Nano Developer Kit to Super Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Orin Nano Super Developer Kitの実際の性能

### フル性能の解放

<div class="video-container">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/Xlr3gO7tRfM" title="Power Consumption of Orin Nano Super Developer Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

バーンインプログラムを使用してCPUとGPUを完全に負荷をかけると、モジュールの最大電力は21Wに達し、Jetson Orin NXの電力レベルに近づきます。

:::note
Jetson Orin cpuとgpuバーンプログラムの[ダウンロードリンク](https://github.com/anseeto/jetson-gpu-burn)。
:::

### 推論速度の向上

<div class="video-container">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/gyHM9xJCPxw" title="Ollama on Jetson Orin Nano Super Developer Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

ここでは、OllamaでLlama3.2-3Bモデルを読み込み、異なる電力モードでのモデルの推論速度を比較しています。最大電力を有効にすると、モデルの推論速度が大幅に向上し、前世代と比較して1.28倍の改善を示していることが明らかです。

:::note
Nvidia JetsonでOllamaを迅速にデプロイする方法については、[このチュートリアル](https://www.jetson-ai-lab.com/tutorial_ollama.html)を参照してください。
:::

## まとめ
Jetson Orin Nano Super Developer Kitは、エッジコンピューティング向けの生成AI開発をリードするための究極のプラットフォームです。今こそ始める絶好の機会であり、NVIDIAと協力して物理AIで現実世界の課題に取り組む活気に満ちた多様な先進開発者・研究者コミュニティに参加しましょう。
既存のJetson Orin Nano Developer Kitユーザーの方は、JetPack SDKをアップグレードして、今すぐ向上した性能を解き放ちましょう。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>