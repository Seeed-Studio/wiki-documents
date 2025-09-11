---
description: この記事では、既存のJetson Orin Nano Developer KitをJetson Orin Nano Super Developer Kitにアップグレードする方法を説明します。ソフトウェアの更新を通じて、システムのAI性能を向上させ、より強力な計算能力を体験できます。
title: Jetson Orin Nano Developer KitをSuper Kitにアップデートする方法
keywords:
  - Edge reComputer
  - Jetson Orin Nano Super Developer Kit
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp
slug: /ja/update_orin_nano_developer_kit_to_super_kit
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## Jetson Orin Nano Super Developer Kitとは

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.png"/>
</div>

NVIDIA Jetson Orin Nano™ Super Developer Kitは、コンパクトでありながら強力なコンピュータで、小型エッジデバイス向けの生成AIを再定義します。最大67 TOPSのAI性能を提供し、前世代と比較して1.7倍の性能向上を実現します。これにより、ビジョントランスフォーマー、大規模言語モデル、ビジョンと言語の統合モデルなど、最も人気のある生成AIモデルをシームレスに実行できます。価格はわずか249ドルで、NVIDIA AIソフトウェアと幅広いAIソフトウェアエコシステムのサポートを受けながら、開発者、学生、メーカーにとって最も手頃でアクセスしやすいプラットフォームを提供します。既存のJetson Orin Nano Developer Kitユーザーは、ソフトウェアのアップグレードだけでこの性能向上を体験できるため、誰もが生成AIの新たな可能性を解き放つことができます。

:::info
驚くべきことに、Jetson Orin Nano Developer Kitはソフトウェアの更新だけでJetson Orin Nano Super Developer Kitにアップグレードできます。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIAr-Jetson-Orintm-Nano-Developer-Kit-p-5617.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
  </a>
</div>

## Super Developer Kitへのアップデート方法
Nvidia Jetson Orin Nano 8GBをお持ちであれば、以下の手順でアップグレードできます：
- ステップ1: ハードウェアデバイスを接続します。
- ステップ2: SDKManagerを開きます。
- ステップ3: システムを設定してフラッシュします。
各ステップを体験するために、以下のビデオをご覧ください。

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/VhuSCMM7iN0" title="Orin Nano Developer KitをSuper Kitにアップデート" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Orin Nano Super Developer Kitの実際の性能

### フル性能の発揮

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/Xlr3gO7tRfM" title="Orin Nano Super Developer Kitの消費電力" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

CPUとGPUを完全に負荷をかけるバーンインプログラムを使用すると、モジュールの最大消費電力は21Wに達し、Jetson Orin NXの消費電力レベルに近づきます。

:::note
Jetson OrinのCPUおよびGPUバーンプログラム [ダウンロードリンク](https://github.com/anseeto/jetson-gpu-burn)。
:::

### 推論速度の向上

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/gyHM9xJCPxw" title="Jetson Orin Nano Super Developer KitでのOllama" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

ここでは、Ollamaを使用してLlama3.2-3Bモデルをロードし、異なる電力モードでのモデルの推論速度を比較します。最大電力が有効な場合、モデルの推論速度が大幅に向上し、前世代と比較して1.28倍の改善が見られます。

:::note
Nvidia JetsonでOllamaを迅速にデプロイする方法については[このチュートリアル](https://www.jetson-ai-lab.com/tutorial_ollama.html)を参照してください。
:::

## 結論
Jetson Orin Nano Super Developer Kitは、エッジコンピューティング向けの生成AI開発をリードするための究極のプラットフォームです。今こそ始めるのに最適な時期であり、NVIDIAと共に物理AIを用いて現実世界の課題に取り組む先進的な開発者や研究者の多様で活気あるコミュニティに参加しましょう。既存のJetson Orin Nano Developer Kitユーザーは、JetPack SDKをアップグレードして、性能向上を今すぐ体験してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>