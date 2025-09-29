---
description: リッチコンテンツを含むドキュメントページを作成します。
title: reComputerシリーズ用GPIOとGrove
keywords:
  - Edge
  - reComputer 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Series_GPIO_Grove
last_update:
  date: 11/21/2022
  author: w0x7ce

no_comments: false # for Disqus

---

# reComputer Jetson用GPIOとGrove

## Jetson拡張機能

GPIO（汎用入出力）ポートは、Jetsonキャリアボードの上端に配置されています。これは2列の長い金属ピンのように見え、作成したプログラムの制御下でLEDやスイッチなどの機能ポートをボードに接続できます。これらのピンは入力と出力に使用できます。

以下の図は、Jetson-10-1-Aキャリアボード上の40ピンGPIOのピン説明です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/59.png" alt="pir" width={500} height="auto" /></p>

拡張ピンの詳細を確認し、それらの設定方法を学びたい場合は、NVIDIA Jetson Linux開発者ガイドの[Jetson拡張ヘッダーの設定](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/hw_setup_jetson_io.html#)ドキュメントをご覧ください。Jetson-IOの操作方法とカスタムハードウェアのサポート追加方法を学ぶことができます。

## JetsonをGroveシステムに接続

Groveは、オープンソースでモジュール化された、すぐに使用できるツールセットで、エレクトロニクスの組み立てにビルディングブロック方式を適用しています。Groveは、ブレッドボードや様々な電子部品を使用してプロジェクトを組み立てる従来の複雑な学習方法と比較して、学習と使用を大幅に簡素化します。

- [Groveシステムについて学ぶ](https://wiki.seeedstudio.com/ja/Grove/)

## Grove PiHATとNVIDIA Jetson Nanoでより多くのAI可能性を創造

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/regpio.jpg" alt="pir" width={500} height="auto" /></p>

[Groveセンサー](https://www.seeedstudio.com/category/Grove-c-1003.html)をJetson Nanoに適用したい場合、最良の方法は[grove.py](https://github.com/Seeed-Studio/grove.py/blob/master/doc/README.md)と[Pythonライブラリ](https://github.com/Seeed-Studio/grove.py/blob/master/doc/README.md)を取得することです。これらは数分でプロジェクトを開始するのに役立ちます！詳細については[こちら](https://www.seeedstudio.com/blog/2019/06/13/create-more-ai-possibilities-with-grove-pihat-for-nvidia-jetson-nano/)をクリックしてください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>