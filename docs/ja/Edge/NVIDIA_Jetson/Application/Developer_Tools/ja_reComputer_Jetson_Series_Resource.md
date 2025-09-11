---
description: Jetson リソース
title: Jetson リソース
keywords:
  - Edge
  - reComputer アプリケーション
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Jetson_Series_Resource
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus 用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Jetson リソース

## [Jetson ソフトウェア](https://developer.nvidia.com/embedded/develop/software)

すべての NVIDIA® Jetson™ モジュールおよび開発者キットは同じソフトウェアスタックによってサポートされており、一度開発すればどこでも展開が可能です。Jetson ソフトウェアは、AI アプリケーションのエンドツーエンドの加速を提供し、市場投入までの時間を短縮するよう設計されています。データセンターやクラウド展開を支える強力な NVIDIA 技術をエッジに提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang.png" alt="pir" width={800} height="auto" /></p>

### [NVIDIA JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

Jetson ソフトウェアスタックは NVIDIA JetPack™ SDK から始まります。JetPack は、CUDA-X アクセラレーションライブラリやその他の NVIDIA 技術を含む完全な開発環境を提供し、開発を迅速に開始できます。JetPack には、Linux カーネル、ブートローダー、NVIDIA ドライバー、フラッシュユーティリティ、サンプルファイルシステム、Jetson プラットフォーム用のツールチェーンを提供する Jetson Linux ドライバーパッケージが含まれています。また、セキュリティ機能、OTA（Over-The-Air）アップデートなども含まれています。JetPack には NVIDIA コンテナランタイムが含まれており、エッジでのクラウドネイティブ技術とワークフローを可能にします。

詳細情報:

- [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Linux](https://developer.nvidia.com/embedded/linux-tegra)
- [Jetson のクラウドネイティブ](https://developer.nvidia.com/embedded/jetson-cloud-native)

### [NVIDIA TAO と事前学習済み AI モデル](https://developer.nvidia.com/tao)

NVIDIA TAO は、データ準備からトレーニング、最適化まで、ディープラーニングワークフローの時間のかかる部分を簡素化し、価値創出までの時間を短縮します。

詳細情報:

- [TAO](https://developer.nvidia.com/tao)
- [事前学習済みモデル](https://developer.nvidia.com/tao-toolkit)

### [NVIDIA Triton 推論サーバー](https://developer.nvidia.com/nvidia-triton-inference-server)

NVIDIA Triton™ 推論サーバーは、AI モデルの大規模な展開を簡素化します。Triton 推論サーバーはオープンソースであり、データセンター、クラウド、組み込みデバイス、仮想化環境など、さまざまな展開でマルチフレームモデル推論をサポートする単一の標準化された推論プラットフォームを提供します。高度なバッチ処理およびスケジューリングアルゴリズムを備えたさまざまな種類の推論クエリをサポートし、リアルタイムのモデル更新も可能です。

詳細情報:

- [NVIDIA Triton 推論サーバー](https://developer.nvidia.com/nvidia-triton-inference-server)

### [NVIDIA Riva](https://developer.nvidia.com/riva)

NVIDIA Riva は、エンドツーエンドのディープラーニングパイプラインを使用してマルチモーダル会話型 AI アプリケーションを構築するための完全に加速された SDK です。Riva SDK には、事前学習済みの会話型 AI モデル、NVIDIA TAO ツールキット、および音声、ビジョン、自然言語処理（NLP）タスク向けに最適化されたエンドツーエンドスキルが含まれています。

詳細情報:

- [Riva](https://developer.nvidia.com/riva)

### [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk)

NVIDIA DeepStream SDK は、Jetson 上で AI ベースのマルチセンサー処理およびビデオ・画像理解のための完全なストリーム分析ツールキットを提供します。DeepStream は、ピクセルおよびセンサーデータを実用的な洞察に変えるエンドツーエンドのサービスおよびソリューションを構築するためのプラットフォームである NVIDIA Metropolis の重要な部分です。

詳細情報:

- [DeepStream >](https://developer.nvidia.com/deepstream-sdk)

### [NVIDIA Isaac](https://developer.nvidia.com/isaac-sdk)

NVIDIA Isaac ROS GEM は、ROS 開発者が NVIDIA ハードウェア上で高性能なソリューションを構築しやすくするハードウェアアクセラレーションパッケージです。Omniverse によって強化された NVIDIA Isaac Sim は、スケーラブルなロボティクスシミュレーションアプリケーションです。Replicator を含み、これは認識モデルのトレーニング用にさまざまな合成データセットを生成するツールです。Isaac Sim はまた、AI ベースのロボットを開発、テスト、管理するための現実的で物理的に正確な仮想環境をサポートするツールでもあります。

詳細情報:

- [Isaac ROS GEM](https://developer.nvidia.com/isaac-ros-gems)
- [Isaac Sim](https://developer.nvidia.com/isaac-sim)

---

## [Jetson モジュール](https://developer.nvidia.com/embedded/jetson-modules)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang2.png" alt="pir" width={500} height="auto" /></p>

NVIDIA ® Jetson™ は、エネルギー効率が高くコンパクトなフォームファクターで、エッジデバイスに加速されたAIパフォーマンスをもたらします。Jetson ファミリーのモジュールはすべて同じNVIDIA CUDA-X™ソフトウェアを使用し、コンテナ化やオーケストレーションなどのクラウドネイティブ技術をサポートして、エッジでのAIの構築、展開、管理を可能にします。

[すべての Jetson モジュールについて学ぶ >](https://developer.nvidia.com/embedded/jetson-modules)

**reComputer Jetson は以下のモジュールを適用しています:**

### Jetson Xavier NX シリーズ

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang3.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">Jetson Xavier NX は、小型フォームファクターモジュールで最大21 TOPsのAI計算能力をエッジにもたらします。複数の最新ニューラルネットワークを並列で実行し、完全なAIシステムに必要な複数の高解像度センサーからのデータを処理することができます。Jetson Xavier NX シリーズは、製品アプリケーションで使用でき、すべての一般的なAIフレームワークをサポートします。<br /> Jetson Xavier NX - <a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html">reComputer J2011</a><br /> Jetson Xavier NX 16GB - <a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html">reComputer J2012</a></td>
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
      <td align="left">Jetson Nano は、組み込みAIシステムやIoT向けの小型で強力なコンピュータであり、低消費電力プラットフォームで最新のAIの力を提供します。NVIDIA Jetpack SDK と完全なデスクトップLinux環境を使用してすぐに始めることができ、組み込み製品の新しい世界を探索できます。<br /> Jetson Nano - <a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a>, <a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></td>
    </tr>
  </tbody>
</table>

## フラッシュガイド

reComputer Jetson シリーズ製品には16 GB eMMCが搭載されており、`ubuntu 18.04 LTS` と `NVIDIA JetPack 4.6` が事前インストールされています。そのため、プロジェクトの開発に直接使用することができます。再フラッシュを行いたい場合は、以下の適切なドキュメントをご参照ください：

- [J1010 キャリアバージョン](https://wiki.seeedstudio.com/ja/reComputer_J1010_J101_Flash_Jetpack/)
- [Jetson A206 キャリアボード](https://wiki.seeedstudio.com/ja/reComputer_J1020_A206_Flash_JetPack/)

## サポート

Jetson フォーラムで質問を投稿し、回答を得ることができます。NVIDIAエンジニア、コミュニティ開発者、Jetson パートナーがここで貢献しています。以下をチェックしてください：

- [Jetson Nano フォーラム](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-nano) - Jetson Nano 開発キットおよび Jetson Nano 製品モジュール向け。
- [Jetson Xavier NX フォーラム](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-xavier-nx) - Jetson Xavier NX 開発キットおよび Jetson Xavier NX 製品モジュール向け。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>