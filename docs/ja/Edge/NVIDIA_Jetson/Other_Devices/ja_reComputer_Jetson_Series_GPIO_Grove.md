---
description: 豊富なコンテンツを含むドキュメントページを作成します。
title: reComputer シリーズの GPIO と Grove
keywords:
  - Edge
  - reComputer 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Series_GPIO_Grove
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus 用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# GPIO と Grove for reComputer Jetson

## Jetson 拡張機能

GPIO（汎用入出力）ポートは、Jetson キャリアボードの上端に位置しています。これは、LEDやスイッチなどの機能ポートをボードに接続し、作成したプログラムで制御できる金属ピンの長い列のように見えます。このピンは入力と出力に使用できます。

以下の図は、Jetson-10-1-A キャリアボード上の40ピン GPIO のピン説明です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/59.png" alt="pir" width={500} height="auto" /></p>

拡張ピンの詳細を確認し、それらを設定する方法を学びたい場合は、NVIDIA Jetson Linux Developer Guide の [Configuring Jetson Expansion Header](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/hw_setup_jetson_io.html#) ドキュメントをご覧ください。Jetson-IO を操作し、カスタムハードウェアのサポートを追加する方法を学ぶことができます。

## Jetson を Grove システムに接続する

Grove はオープンソースでモジュール化された、すぐに使用できるツールセットであり、電子機器を組み立てるためにブロック方式を適用します。Grove は、従来の複雑な学習方法（ブレッドボードやさまざまな電子部品を使用してプロジェクトを組み立てる方法）と比較して、学習と使用を大幅に簡素化します。

- [Grove システムについて学ぶ](https://wiki.seeedstudio.com/ja/cn/Grove/)

## Grove PiHAT と NVIDIA Jetson Nano を使用してさらに多くの AI の可能性を創造する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/regpio.jpg" alt="pir" width={500} height="auto" /></p>

Jetson Nano に [Grove センサー](https://www.seeedstudio.com/category/Grove-c-1003.html) を適用したい場合、最適な方法は [grove.py](https://github.com/Seeed-Studio/grove.py/blob/master/doc/README.md) と [Python ライブラリ](https://github.com/Seeed-Studio/grove.py/blob/master/doc/README.md) を取得することです。これにより、数分でプロジェクトを開始することができます！詳細については [こちら](https://www.seeedstudio.com/blog/2019/06/13/create-more-ai-possibilities-with-grove-pihat-for-nvidia-jetson-nano/) をクリックしてください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社では、製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>