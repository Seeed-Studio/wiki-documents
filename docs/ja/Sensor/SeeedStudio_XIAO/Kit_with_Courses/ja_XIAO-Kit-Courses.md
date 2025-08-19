---
description: Seeed Studio XIAO キットコース
title: Seeed Studio XIAO キットコース
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-Kit-Courses
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO: 大きな力、小さなボード

<div align="center" class="all_container">
    <div align="left" class="xiao_topic_page_pic">
        <img src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" style={{width:300, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <font size={"4"}><strong>ArduinoとTinyMLの習得</strong></font>
        <br /><font size={"3"}><strong>著者</strong></font>
        <font size={"2"}>Lei Feng, Marcelo Rovai</font>
        <br /><font size={"3"}><strong>出版日</strong></font>
        <font size={"2"}>2023年12月8日</font>
        <br /><font size={"3"}><strong>心からの感謝</strong></font>
        <font size={"2"}>Jiamou Yang, Yanming Wen, Mengdu Li, Chunchun Tian, Haixu Liu, Tianrui Wang, and Jianjing Huang</font>
    </div>
</div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-XIAO-Starter-Kit-p-5378.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-Starter-Kit-p-5378.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ キットを購入する</font></span></strong></a></div>

## はじめに

Seeed Studio XIAO シリーズは、コンパクトさと強力な性能を融合させたArduinoエコシステムにおける画期的な進化を表しています。その能力を理解し活用することは、エレクトロニクスや機械学習の分野で活動する愛好家や専門家にとって不可欠です。技術の急速な進歩と、より小型で効率的なデバイスへの需要の高まりに伴い、XIAO とTinyMLの統合を習得することは重要です。これにより、以前は不可能と考えられていたスペースで洗練されたプロジェクトを作成する新しいフロンティアが開かれます。このトピックは、エレクトロニクス、IoT、機械学習の未来の方向性と一致しており、技術の最前線に立ち続けたい人々にとって不可欠です。

## キットの部品リスト

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/e/seeed_studio_xiao_starter_kit_-_all_seeed_studio_xiao_series_deve_after_1_.jpg" style={{width:500, height:'auto'}}/></div>

## この本について

### 対象読者

「XIAO: 大きな力、小さなボード」の主な対象読者は、コンパクトなハードウェアプラットフォームの可能性を探求し最大限に活用したいエレクトロニクスや機械学習の愛好家、学生、教育者、専門家です。これらの読者は通常、エレクトロニクス愛好家、DIYプロジェクトの作成者、エレクトロニクス教育者、または初級の組み込みシステム開発者としての役割を担っています。キャリアが進むにつれて、エレクトロニクス設計エンジニア、IoT開発者、または機械学習ハードウェア統合者などの役割を目指しているかもしれません。

読者はエレクトロニクスの基本概念を理解しているものの、Arduinoプログラミングやコンパクトなハードウェア設計に深く踏み込んだ経験はないかもしれません。標準的なArduinoや一般的なエレクトロニクスの初心者向け書籍に触れたことがある一方で、専門的なハードウェアやTinyMLにはまだ挑戦していない可能性があります。スキルとしては、基本的なエレクトロニクスやプログラミングの実践経験を持っていますが、TinyMLや高度なマイクロコントローラー機能の詳細には精通していないでしょう。

### 読者が学べること

この本を読み終えることで、読者は以下を理解できるようになります：

- オープンソースハードウェアの基本、特にSeeed Studio XIAO シリーズの能力に焦点を当てた内容。
- 基本的なLED制御から、テレメトリーや音声キーワード検出のような複雑なアプリケーションに至るまで、電子プロジェクトを基礎から高度なものへ移行する方法。
- プロトタイプ設計の概念と、それが製品開発において持つ実際的な意味。

- 赤外線受信機、超音波距離センサー、RTCクロックなどのさまざまなモジュールをXIAOプラットフォームと統合する際の詳細。

- Tiny Machine Learning (TinyML) の重要性と応用、特にXIAO nRF52840 SenseやESP32S3 Senseのようなハードウェアにおけるその変革力。

- Edge Impulse Studioのような高度なツールを使用して、異常検出や物体検出、ビデオや音声分類などの実世界のアプリケーションを実現する技術。

読者は以下ができるようになります：

- すべてのXIAOシリーズボードを使用してプロジェクトをセットアップ、プログラム、トラブルシューティングし、基本的なハードウェア操作から複雑なプロジェクト設計へと進む。

- 抽象的なアイデアを具体的な電子製品プロトタイプに変換し、コースから得た洞察を活用する。

- スマートウォッチやエアピアノのような中級レベルのプロジェクトを、特殊なセンサーやモジュールを使用して設計・実装する。

- XIAO ESP32C3を使用してWi-FiやMQTTプロトコルを活用し、クラウド通信やデータ交換を行う。

- さまざまなXIAOボードでTinyMLを展開し、画像、動作、音声分類、さらには異常検出や物体検出などのタスクを実行する。

- 厳選されたXIAOプロジェクトのコレクションからインスピレーションを得て、それをカスタムニーズに適応させることで、プロジェクトアイデアを革新し拡張する。

## 書籍概要

### [第1章: ハードウェアとプログラミングの基礎](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_1.html)

この章では、読者はArduino IDEを使用してXIAOでの基本的なプログラミングを始めます。簡単なサンプルプログラムを通じて、LEDライト、ボタン、ブザー、その他の電子部品を制御する方法を学びます。これにより、デジタルI/O、アナログI/O、トーン生成、値のマッピングなどの基本的なプログラミング概念を習得します。コード例を一行ずつ手入力することで、強固なコーディング習慣を身につけ、プログラミング構文を理解します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_1-6/chapter_1-6_7.jpg" style={{width:500, height:'auto'}}/></div>

### [第2章: 初心者向けプロジェクト実践 - プロトタイプ設計の入門](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_2.html)

この章では、読者はXIAOを使用したプロトタイプ設計の基本を初心者向けプロジェクトを通じて学びます。アイデアから始めて、迅速に検証用プロトタイプを作成し、コードの行ごとの分析よりも実際の応用に重点を置きます。Arduinoライブラリ、コミュニティリソース、サンプルプログラムを活用することで、目的の効果を効率的に達成するためのコードスニペットの検索と適応方法を学びます。さらに、電子ハードウェアと日常品を創造的に組み合わせることで、プロトタイプの物理的な外観を設計する方法を探求します。この章の主な成果は、プロジェクトベースのアプローチを理解し、シンプルなインタラクティブプロトタイプを構築するスキルを身につけることです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_2-2/chapter_2-2_15.jpg" style={{width:500, height:'auto'}}/></div>

### [第3章: 中級プロジェクト実践 - 複雑なプロジェクト](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_3.html)

この章では、読者はXIAOを使用して高度なIoTプロジェクトを作成することでプロトタイピングスキルを向上させます。Wi-Fi接続、MQTTテレメトリ、リモートコントロールコマンドなどの機能をXIAO ESP32C3を使用して実装します。インテリジェントリモートドア、スマートウォッチ、エアピアノなどの複雑なプロジェクトを通じて、無線通信、クラウド統合、組み込み制御のプログラミング技術を磨きます。オプションの設計図が提供されますが、読者は代替材料を使用して創造的なエンクロージャデザインを探求することが奨励されます。この章の主な成果は、中級レベルのIoTプロトタイピングを習得し、先進的なtinyMLアプリケーションに備えることです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_3-2/chapter_3-2_12.jpg" style={{width:500, height:'auto'}}/></div>

### [第4章: 上級プロジェクト実践 - tinyMLアプリケーション](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_4.html)

XIAOシリーズ製品の中で、Seeed Studio XIAO nRF52840 SenseはBluetooth 5.0の無線接続、低消費電力、オンボード6軸IMUおよびPDMマイクロフォンセンサーを備えています。XIAO ESP32S3 Senseはさらにカメラ、デジタルマイクロフォン、SDカードサポートを統合しています。これらの機能により、これらはTinyML（組み込み機械学習）プロジェクトにおいて強力なツールとなります。TinyMLは従来のプログラミング手法とは全く異なる方法で問題を解決します。この章では、データ収集、トレーニング、テストからデプロイメントおよび推論まで、Edge Impulse Studioツールを使用して機械学習の全ワークフローを紹介します。

<div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1654543/bugs-inference_fXpzxJOZRj.png?auto=compress%2Cformat&w=1280&h=960&fit=max" style={{width:500, height:'auto'}}/></div>

### [第5章: 創造的な実験](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_5.html)

Seeed Studio XIAOシリーズは、そのコンパクトなサイズ、強力な性能、多用途な製品ラインナップで広く評価されています。メイカーコミュニティでは、XIAOを使用して作成された多くのプロジェクトが生み出されています。スペースの制約により、私たちはメイカーによって作成された優れたプロジェクトのいくつかを選びました。これらのプロジェクトは、XIAOの強力な機能と幅広い応用を完全に示しています。メイカーたちの足跡をたどり、創造性を刺激し、XIAOの無限の可能性を探求しましょう。読者はこれらのプロジェクトからインスピレーションを得て、想像力を働かせ、XIAOを使って新しい領域を探求することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_5-1/chapter_5-1_7.jpg" style={{width:500, height:'auto'}}/></div>

## 参考資料

### オンラインコース

-   [Harvard School of Engineering and Applied Sciences - CS249r: Tiny Machine Learning](https://sites.google.com/g.harvard.edu/tinyml/home)
-   [Professional Certificate in Tiny Machine Learning (TinyML) -- edX/Harvard](https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning)
-   [Introduction to Embedded Machine Learning - Coursera/Edge Impulse](https://www.coursera.org/learn/introduction-to-embedded-machine-learning)
-   [Computer Vision with Embedded Machine Learning - Coursera/Edge Impulse](https://www.coursera.org/learn/computer-vision-with-embedded-machine-learning)
-   [UNIFEI-IESTI01 TinyML: "Machine Learning for Embedding Devices"](https://github.com/Mjrovai/UNIFEI-IESTI01-TinyML-2023.1)

### 書籍

-   ["Python for Data Analysis by Wes McKinney"](https://wesmckinney.com/book/)
-   ["Deep Learning with Python" by François Chollet](https://www.manning.com/books/deep-learning-with-python) - [GitHub Notebooks](https://github.com/fchollet/deep-learning-with-python-notebooks)
-   ["TinyML" by Pete Warden, Daniel Situnayake](https://www.oreilly.com/library/view/tinyml/9781492052036/)
-   ["TinyML Cookbook" by Gian Marco Iodice](https://github.com/PacktPublishing/TinyML-Cookbook)
-   ["Technical Strategy for AI Engineers, In the Era of Deep Learning" by Andrew Ng](https://github.com/ajaymache/machine-learning-yearning/blob/master/full%20book/machine-learning-yearning.pdf)
-   ["AI at the Edge" book by Daniel Situnayake, Jenny Plunkett](https://www.oreilly.com/library/view/ai-at-the/9781098120191/)
-   ["MACHINE LEARNING SYSTEMS for TinyML" Collaborative effort](https://harvard-edge.github.io/cs249r_book/)

### プロジェクトリポジトリ

-   [Edge Impulse Expert Network](https://docs.edgeimpulse.com/experts/)

## 著者について

**Lei Feng** は Seeed Studio の技術サポートグループおよび製品カリキュラムのリーダーです。オープンソースハードウェアとエッジコンピューティングの分野で経験豊富な著者であり、中国で以下の書籍を出版しています：「GameGo Beginner Programming Course for Arcade 《做游戏，玩编程------零基础开发微软 Arcade 掌机游戏》」、「Grove Beginner Kit For Arduino - Codecraft Graphical Programming Course 《Arduino 图形化编程轻松学》」、および Microsoft China の支援を受けた「IoT for Beginners 《深入浅出 IoT：完整项目通关实战》」の中国語翻訳版。

Lei Feng はチームとともに、中国語および英語で多数のチュートリアルやオープンソースドキュメントを作成してきました。IoTおよびエッジコンピューティングプロジェクトの開発における実践的な経験により、初心者向けに複雑な概念を簡素化するユニークな洞察を持っています。魅力的な執筆スタイルと忍耐強い指導力を持つ彼は、ArduinoやTinyMLを世界中の初心者にとって親しみやすいものにする理想的なガイドです。

*LinkedIn プロフィール:* [*https://www.linkedin.com/in/leon-feng-a029bb1/*](https://www.linkedin.com/in/leon-feng-a029bb1/)

**Marcelo Rovai** は、ブラジルのイタジュバ連邦大学から名誉教授の称号を授与された、工学と技術教育の分野で認められた人物です。彼の教育背景には、UNIFEIでの工学学位、サンパウロ大学ポリテクニックスクールでの高度専門教育が含まれています。さらに、IBMEC（INSPER）でMBAを取得し、チリの発展大学でデータサイエンスの修士号を取得しています。

彼のキャリアは、AVIBRAS Airspace、ATT、NCR、IGTなどの著名な技術企業での勤務を含み、ラテンアメリカ担当副社長としての役割を果たしました。彼は電子工学関連のトピックに関する多作な著者であり、Hackster.ioのようなオープンプラットフォームを通じて知識を共有しています。

また、彼は教育活動にも熱心で、UNIFEIのボランティア教授として活動し、TinyML4Dグループの共同議長として発展途上国でのTinyML教育を推進しています。彼の活動は、社会的進歩のために技術を活用することへのコミットメントを強調しています。

*LinkedIn プロフィール:* [*https://www.linkedin.com/in/marcelo-jose-rovai-brazil-chile/*](https://www.linkedin.com/in/marcelo-jose-rovai-brazil-chile/)

*Twitter ハンドル:* *\@mjrovai*

*著者の講演サンプル（YouTubeなど）:* [*https://www.youtube.com/watch?v=KeXlAazzgKw*](https://www.youtube.com/watch?v=KeXlAazzgKw)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>