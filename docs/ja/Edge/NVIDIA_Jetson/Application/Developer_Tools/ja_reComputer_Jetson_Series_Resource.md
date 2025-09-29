---
description: Jetson Resource
title: Jetson Resource
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Series_Resource
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Jetson Resource

## [Jetson ソフトウェア](https://developer.nvidia.com/embedded/develop/software)

すべてのNVIDIA® Jetson™モジュールと開発者キットは同じソフトウェアスタックによってサポートされており、一度開発すればどこでもデプロイできます。Jetson Softwareは、AIアプリケーションのエンドツーエンド加速を提供し、市場投入時間を短縮するように設計されています。データセンターやクラウドデプロイメントを支えるのと同じ強力なNVIDIAテクノロジーをエッジにもたらします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang.png" alt="pir" width={800} height="auto" /></p>

### [NVIDIA JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

JetsonソフトウェアスタックはNVIDIA JetPack™ SDKから始まり、CUDA-X加速ライブラリやその他のNVIDIAテクノロジーを含む完全な開発環境を提供し、開発をスタートさせます。JetPackには、Jetsonプラットフォーム用のLinuxカーネル、ブートローダー、NVIDIAドライバー、フラッシュユーティリティ、サンプルファイルシステム、ツールチェーンを提供するJetson Linuxドライバーパッケージが含まれています。また、セキュリティ機能、無線アップデート、その他の機能も含まれています。JetPackには、エッジでクラウドネイティブテクノロジーとワークフローを可能にするNVIDIAコンテナランタイムが含まれています。

詳細はこちら：

- [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Linux](https://developer.nvidia.com/embedded/linux-tegra)
- [Cloud-Native on Jetson](https://developer.nvidia.com/embedded/jetson-cloud-native)

### [NVIDIA TAO および事前訓練済み AI モデル](https://developer.nvidia.com/tao)

NVIDIA TAOは、データ準備からトレーニング、最適化まで、深層学習ワークフローの時間のかかる部分を簡素化し、価値創出までの時間を短縮します。

詳細はこちら：

- [TAO](https://developer.nvidia.com/tao)
- [Pretrained Models](https://developer.nvidia.com/tao-toolkit)

### [NVIDIA Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server)

NVIDIA Triton™推論サーバーは、AIモデルの大規模デプロイメントを簡素化します。Triton Inference Serverはオープンソースで、データセンター、クラウド、組み込みデバイス、仮想化環境などの異なるデプロイメントにおいて、マルチフレームモデル推論をサポートできる単一の標準化された推論プラットフォームを提供します。高度なバッチング・スケジューリングアルゴリズムを使用した異なるタイプの推論クエリをサポートし、リアルタイムモデル更新をサポートします。

詳細はこちら：

- [NVIDIA Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server)

### [NVIDIA Riva](https://developer.nvidia.com/riva)

NVIDIA Rivaは、エンドツーエンドの深層学習パイプラインを使用してマルチモーダル会話AIアプリケーションを構築するための完全加速SDKです。Riva SDKには、事前トレーニング済み会話AIモデル、NVIDIA TAOツールキット、音声、視覚、自然言語処理（NLP）タスク用の最適化されたエンドツーエンドスキルが含まれています。

詳細はこちら：

- [Riva](https://developer.nvidia.com/riva)

### [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk)

NVIDIA DeepStream SDKは、Jetson上でAIベースのマルチセンサー処理と動画・画像理解のための完全なストリーム分析ツールキットを提供します。DeepStreamは、ピクセルとセンサーデータを実用的なインサイトに変換するエンドツーエンドサービスとソリューションを構築するプラットフォームであるNVIDIA Metropolisの不可欠な部分です。

詳細はこちら：

- [DeepStream >](https://developer.nvidia.com/deepstream-sdk)

### [NVIDIA Isaac](https://developer.nvidia.com/isaac-sdk)

NVIDIA Isaac ROS GEMは、ROS開発者がNVIDIAハードウェア上で高性能ソリューションを構築しやすくするハードウェア加速パッケージです。Omniverseを搭載したNVIDIA Isaac Simは、スケーラブルなロボティクスシミュレーションアプリケーションです。知覚モデルのトレーニング用の多様な合成データセットを生成するツールであるReplicatorが含まれています。Isaac Simは、AIベースロボットの開発、テスト、管理のための現実的で物理的に正確な仮想環境をサポートするツールでもあります。

詳細はこちら：

- [Isaac ROS GEM](https://developer.nvidia.com/isaac-ros-gems)
- [Isaac Sim](https://developer.nvidia.com/isaac-sim)

---

## [Jetson モジュール](https://developer.nvidia.com/embedded/jetson-modules)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang2.png" alt="pir" width={500} height="auto" /></p>

NVIDIA ® Jetson™ は、エネルギー効率的でコンパクトなフォームファクターで、エッジデバイスに加速されたAIパフォーマンスをもたらします。Jetsonファミリーのモジュールはすべて同じNVIDIA CUDA-X™ソフトウェアを使用し、コンテナ化やオーケストレーションなどのクラウドネイティブ技術をサポートして、エッジでのAIの構築、展開、管理を行います。

[すべてのJetsonモジュールについて詳しく見る >](https://developer.nvidia.com/embedded/jetson-modules)

**reComputer Jetsonはこれらのモジュールを適用しています：**

### Jetson Xavier NXシリーズ

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang3.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">Jetson Xavier NXは、小型フォームファクターモジュールで最大21 TOPsのAIコンピューティングパワーをエッジにもたらします。複数の最新ニューラルネットワークを並列実行し、完全なAIシステムの要件として複数の高解像度センサーからのデータを処理できます。Jetson Xavier NXシリーズは本番アプリケーションで使用でき、すべての人気AIフレームワークをサポートしています。<br /> Jetson Xavier NX - <a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html">reComputer J2011</a><br /> Jetson Xavier NX 16GB - <a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html">reComputer J2012</a></td>
    </tr>
  </tbody>
</table>

### Jetson Nano

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang4.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">Jetson Nanoは、組み込みAIシステムとIoT向けの小型で強力なコンピュータであり、低消費電力プラットフォーム上で最新AIの力を提供します。NVIDIA Jetpack SDKと完全なデスクトップLinux環境により素早く開始でき、組み込み製品の新しい世界を探索することができます。<br /> Jetson Nano - <a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a>, <a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></td>
    </tr>
  </tbody>
</table>

## フラッシュガイド

reComputer Jetsonシリーズ製品には16 GB eMMCが搭載されており、`ubuntu 18.04 LTS`と`NVIDIA JetPack 4.6`の両方がプリインストールされているため、プロジェクト開発に直接適用できます。再フラッシュを行いたい場合は、以下の適切なドキュメントをご覧ください：

- [J1010キャリアバージョン](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/)
- [Jetson A206キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack/)

## サポート

Jetsonフォーラムで質問し、回答を受け取ることができます。NVIDIAエンジニア、コミュニティ開発者、Jetsonパートナーがすべてここに貢献しています。以下をご確認ください：

- Jetson Nano開発者キットとJetson Nano製品モジュールについては[Jetson Nanoフォーラム](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-nano)
- Jetson Xavier NX開発キットとJetson Xavier NX製品モジュールについては[Jetson Xavier NXフォーラム](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-xavier-nx)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

