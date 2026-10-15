---
description: JetPack 7.2 上で NVIDIA DeepStream 9.1 をインストールして使用する方法を説明します。エージェント機能、自然言語によるパイプライン開発、ビデオ解析、メモリ計画、移行ガイドを含みます。
title: JetPack 7.2 上の DeepStream
keywords:
  - JetPack 7.2
  - DeepStream
  - GStreamer
  - TensorRT
  - ビデオ解析
image: https://files.seeedstudio.com/wiki/reComputer/Application/YOLOv8-DeepStream-TRT-Jetson/1.jpg
slug: /jetpack_7_2_deepstream
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/jetpack_7_2_deepstream/
---

# JetPack 7.2 上の DeepStream

NVIDIA DeepStream は、Jetson エコシステムにおける高速化されたストリーミング解析フレームワークです。ハードウェアビデオデコード、GStreamer、TensorRT 推論、トラッキング、メタデータ、メッセージ転送、アプリケーション API を組み合わせて、マルチストリームのエッジ AI パイプラインを構成します。

**2026 年 7 月 31 日** 時点で、**DeepStream 9.1** が最新リリースであり、Jetson プラットフォーム表で **JetPack 7.2 GA / Jetson Linux 39.2** を明示的にターゲットとする最初の DeepStream リリースです。**Jetson Orin** と **Jetson Thor** の両方をサポートします。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" />
</div>

:::info
上のアニメーションは、マルチオブジェクト解析パイプラインを示すために、既存の Seeed DeepStream アプリケーションから再利用したものです。JetPack 7.2 上でこのワークフローを使用する前に、アプリケーション、TensorRT エンジン、プラグイン、および設定を DeepStream 9.1 に合わせて再ビルドしてください。
:::

## DeepStream 9.1 と JetPack 7.2 のベースライン

| コンポーネント | JetPack 7.2 DeepStream ベースライン |
| --- | --- |
| DeepStream | 9.1 |
| Jetson Linux | 39.2 GA |
| JetPack | 7.2 GA |
| CUDA | 13.2 |
| TensorRT | 10.16.1.7 |
| cuDNN | 9.20.0.46 |
| GStreamer | 1.24.2 |
| OpenCV | 4.8.0 |
| 対応 Jetson プラットフォーム | Jetson Orin および Jetson Thor |
| ネイティブ Jetson パッケージ | `deepstream-9.1_9.1.0-1_arm64.deb` |

:::warning
DeepStream 9.0 の Jetson パッケージは JetPack 7.1 / Jetson Linux 38.4 をベースにしています。JetPack 7.2 をターゲットとする場合は DeepStream 9.1 を使用してください。メジャーバージョンが近いという理由だけで、古い Jetson パッケージをインストールしないでください。
:::

## DeepStream 9.1 が重要な理由

DeepStream 9.1 は単なる互換性アップデートではありません。このリリースは、アプリケーション開発をエージェント支援ワークフローへと進める一方で、Service Maker、高度なマルチカメラ解析、ファウンデーションモデル統合、可観測な本番サービスへと向かう DeepStream 9.x の流れを継続しています。

### 自然言語コーディングエージェント

公式 DeepStream リポジトリには **DeepStream Coding Agent** が含まれています。開発者はパイプラインを自然言語で記述でき、エージェントは DeepStream アプリケーションを生成し、設定ファイルとソースファイルを組み立て、プロジェクトをビルドし、コンテナ内で起動し、エラー診断を支援できます。

リクエスト例：

```text
Create a DeepStream 9.1 application for JetPack 7.2 that reads four RTSP streams,
runs a PeopleNet-compatible detector, tracks people, publishes entry events,
and saves a short clip when a person enters the restricted zone.
```

Coding Agent はアプリケーションの作り方を変えますが、ターゲット Jetson 上でモデル互換性、ストリーム容量、メモリ使用量、アプリケーション動作を検証する必要がなくなるわけではありません。

### エージェント機能

DeepStream 9.1 は、DeepStream リポジトリを通じて **13 個のエージェント機能** へのアクセスを提供します。公式スキルは次のようなタスクをカバーします：

- DeepStream Service Maker アプリケーションの構築と実行；
- パイプラインの検査とデバッグ；
- マルチビュー 3D トラッキングの設定；
- 自動マルチカメラキャリブレーションの実行；
- 対応する ONNX または TAO モデルからの推論設定の構築；
- アプリケーションコードの生成とコンテナ化されたサンプルの実行。

特に重要な新しいワークフローは次の 2 つです：

- **MV3DT スキル**：キャリブレーション済みカメラ間でマルチビュー 3D トラッキングを設定するのに役立ちます；
- **AutoMagicCalib スキル**：マルチカメラ解析展開向けのカメラキャリブレーションを支援します。

### Inference Builder MCP

Inference Builder MCP サーバーは、対応モデルを検査し、DeepStream 推論アーティファクトを生成できます。NVIDIA は PeopleNet、YOLOv8、YOLOv11、YOLOE、Grounding DINO ワークフローを含む ONNX および TAO モデルパスのサポートを文書化しています。

生成された推論設定は出発点として扱ってください。本番利用前に、前処理、テンソル名、次元、ラベルファイル、パーサーの挙動、精度、および TensorRT エンジン出力を確認します。

### DeepStream 9.1 アプリケーションで利用可能な DeepStream 9.x 機能

DeepStream 9.1 は、DeepStream 9.x の主要な機能も引き継いでいます：

- Service Maker Flow および Graph API；
- Python による Service Maker 開発；
- セグメンテーション対応トラッキングのための MaskTracker；
- イベント指向クリップおよびメディアキャプチャ用の MediaExtractor；
- MV3DT マルチビュー 3D トラッキング；
- 3D ポーズ推定および Sparse4D サンプル；
- REST API による動的ストリーム管理；
- OpenTelemetry および Prometheus 指向の可観測性；
- Triton および TensorRT 推論統合；
- C/C++、Python、GStreamer、およびコンテナ化アプリケーションパス。

新しい Python アプリケーションには `pyservicemaker` が推奨されます。従来の `pyds` Python バインディングは非推奨です。Graph Composer も非推奨であり、関連コンポーネントを OpenCV 有効で再ビルドしない限り、OpenCV サポートはデフォルトで無効になっています。

## 2 種類の自然言語統合

DeepStream と自然言語について議論する際は、**パイプライン作成** と **ビデオ理解** を区別してください。

### 1. パイプライン構築のための自然言語

DeepStream Coding Agent とスキルは、開発の意図をアプリケーションコードと設定に変換します。このパスは、生成されたアプリケーションが DeepStream 9.1 Jetson コンテナまたはパッケージをターゲットにできるため、JetPack 7.2 に直接関係します。

良いリクエストは次の点を明確にします：

- ターゲットが JetPack 7.2 と DeepStream 9.1 であること；
- Jetson Orin か Jetson Thor か；
- 入力タイプとストリーム数；
- モデルと精度；
- トラッカー、出力、イベント、およびメッセージの要件；
- メモリ、レイテンシ、および電力の制約。

### 2. ビデオ理解のための自然言語

DeepStream 9.1 では、ビデオストリームを大規模言語モデルまたはビジョン言語モデルに接続する `nvvllmvlm` プラグインが文書化されています。このプラグインは次をサポートします：

- Cosmos Reason 2 および Cosmos Nemotron 12B モデルファミリ；
- ストリームごとの自然言語プロンプト；
- 時間セグメントベースのビデオ推論；
- 非同期推論；
- マルチストリーム処理；
- DeepStream メタデータに付随するテキスト応答。

質問例には次のようなものがあります：

```text
Is there smoke or fire in this stream?
Is anyone entering the restricted area without protective equipment?
Summarize the activity around the loading bay during the last segment.
```

:::warning 現在の Jetson における制限
DeepStream 9.1 の `nvvllmvlm` ドキュメントでは、現時点でこのプラグインは **x86 ディスクリート GPU のみ** を対象としており、記載されている Cosmos のサンプルにはおよそ **40 GB の GPU メモリ** が必要とされています。NVIDIA が Jetson サポートを文書化し、対象モデルが利用可能な統合メモリに収まるようになるまで、このプラグインを Jetson Orin や Jetson Thor のネイティブパスとして提示しないでください。
:::

### 推奨される JetPack 7.2 ハイブリッドアーキテクチャ

JetPack 7.2 は、リアルタイムのエッジ処理と大規模モデル推論を分離することで、自然言語ビデオシステムに参加できます：

```text
Camera / RTSP streams
        |
        v
Jetson + JetPack 7.2 + DeepStream 9.1
decode -> detection -> tracking -> event filtering -> clip selection
        |
        +---- structured metadata ----+
        |                             |
        +---- selected video clips ---+--> x86 DeepStream nvvllmvlm
                                      or remote VLM service
                                                |
                                                v
                               natural-language answer / alert / summary
```

この設計により、Jetson 上で連続デコード、フィルタリング、低レイテンシ解析を維持しつつ、関連するクリップやイベントのみを大規模な VLM サービスに送信できます。また、帯域幅を削減し、すべてのエッジパイプラインの横に非常に大きな言語モデルを読み込むことを避けられます。

## インストールオプション

DeepStream 9.1 は、JetPack 7.2 上で 3 つの実用的な開発パスを提供します。

### オプション A: ネイティブ Jetson パッケージ

まず JetPack 7.2 を確認します：

```bash
cat /etc/nv_tegra_release
```

出力には Jetson Linux リリース 39.2 が表示されるはずです。NVIDIA が文書化している DeepStream の前提パッケージをインストールします：

```bash
sudo apt update
sudo apt install -y \
  libssl3 \
  libssl-dev \
  libcurl4-openssl-dev \
  libgstreamer1.0-0 \
  gstreamer1.0-tools \
  gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad \
  gstreamer1.0-plugins-ugly \
  gstreamer1.0-libav \
  libgstreamer-plugins-base1.0-dev \
  libgstrtspserver-1.0-0 \
  libjansson4 \
  libyaml-cpp-dev \
  libmosquitto1
```

公式 NVIDIA DeepStream GitHub リリースアセットから `deepstream-9.1_9.1.0-1_arm64.deb` をダウンロードし、次にインストールします：

```bash
cd ~/Downloads
sudo apt install ./deepstream-9.1_9.1.0-1_arm64.deb
sudo ldconfig
```

インストールを検証します：

```bash
deepstream-app --version-all
```

### オプション B: NVIDIA コンテナ

DeepStream コンテナは、統一された `deepstream` リポジトリの下で公開されています。従来の `deepstream-l4t` リポジトリは、もはや最新のコンテナパスではありません。

グラフィカルなサンプルコンテナの場合：

```bash
xhost +local:docker

sudo docker run --rm -it \
  --runtime nvidia \
  --network host \
  -e DISPLAY="$DISPLAY" \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  nvcr.io/nvidia/deepstream:9.1-triton-multiarch
```

ヘッドレスデプロイの場合は、ディスプレイマウントを省略し、ウィンドウを開く代わりにメタデータ、ファイル、RTSP、またはメッセージを書き出す構成を使用します。

### オプション C: DeepStream モノレポとエージェントワークフロー

Service Maker のソース、スキル、サンプル、コーディングエージェント統合、再利用可能なプラグインが必要な場合は、公式リポジトリをクローンします：

```bash
git clone https://github.com/NVIDIA/DeepStream.git
cd DeepStream
```

対応するコーディングエージェント環境では、リポジトリの `/install-coding-agent` ワークフローに従います。生成された作業内容はバージョン管理下に置き、Jetson を変更したり特権コンテナを起動したりする前に、すべてのコマンドを確認してください。

## 最初のパイプラインを検証する

DeepStream をインストールしたら、パッケージに同梱されているサンプル設定を一覧表示します：

```bash
find /opt/nvidia/deepstream/deepstream-9.1/samples/configs \
  -maxdepth 3 -type f -name '*.txt' | sort | head -30
```

複数の RTSP ストリームを有効にする前に、ローカルファイル 1 本またはカメラ 1 台から始めてください。基本的な検証では次の点を確認します：

1. ハードウェアデコードが成功すること；
2. TensorRT が正しいエンジンを読み込むか再ビルドすること；
3. 推論メタデータが表示されること；
4. トラッカーが安定した ID を生成すること。
5. 出力シンクがレイテンシを蓄積することなく動作すること。
6. メモリが少なくとも 30 分間安定していること。

## JetPack 7.2 への移行ルール

### TensorRT エンジンの再ビルド

JetPack 6.x からシリアライズ済み TensorRT エンジンを DeepStream 9.1 にコピーしないでください。JetPack 7.2 の TensorRT 10.16.1.7 ランタイムと対象 GPU アーキテクチャを用いて再ビルドしてください。

### カスタムパーサーとプラグインの再ビルド

カスタム `nvdsinfer` パーサー、GStreamer プラグイン、CUDA 拡張、および Service Maker コンポーネントを、DeepStream 9.1 のヘッダーと JetPack 7.2 のライブラリに対して再コンパイルします。

### 設定キーの見直し

すべてのアプリケーション設定を DeepStream 9.1 の移行ガイドと比較してください。特に次の点に注意します：

- `nvstreammux` の動作とバッチ次元
- 推論テンソルメタデータとパーサー設定
- トラッカーライブラリとトラッカー設定
- REST 制御による動的ストリーム処理
- message-converter および message-broker のスキーマ
- Python バインディングまたは Service Maker API の変更点

### カメラおよびコーデック経路の再検証

JetPack 7.2 では Linux カーネル 6.8 と新しいマルチメディアスタックに移行しています。JetPack 6.x の GStreamer パイプラインがそのまま動作すると仮定するのではなく、CSI、GMSL、USB、RTSP、デコーダ、エンコーダ、およびゼロコピー経路を再検証してください。

## メモリ効率の高い DeepStream 設計

DeepStream パイプラインは、多数のデコーダ、大きなバッチ処理、複数の TensorRT エンジン、高解像度フレーム、トラッカー、クリップ録画、さらに LLM または VLM サービスを組み合わせると、メモリ制約に達する可能性があります。

[JetPack 7.2 メモリ最適化ガイド](/ja/jetpack_7_2_memory_optimization/)と、次のパイプラインレベルの制御を併用してください：

- 1 本のストリームから開始し、ストリーム数を徐々に増やす
- 実際にアクティブなソース数に `nvstreammux` のバッチサイズを合わせる
- 精度要件を満たす中で最も低いモデル精度を使用する
- 別々のアプリケーションプロセスで重複したエンジンを読み込むことを避ける
- ユースケースが許す場合は推論前に入力解像度を下げる
- すべてのフレームでの推論を必要としないワークロードには推論インターバルを使用する
- 精度とメモリ予算に見合ったトラッカーを選択する
- すべてのデコード済みフレームを録画するのではなく、イベントクリップのみを保持する
- 非常に大きな VLM をエッジデバイスに同時搭載するのではなく、フィルタ済みメタデータまたはクリップをリモート VLM に送信する

`tegrastats` を用いて、アイドル時メモリ、エンジン読み込み時メモリ、ピークバッチング時メモリ、および定常状態メモリを測定します。フレーム毎秒だけを最適化するのではなく、レイテンシ、ドロップフレーム、キューの増加、温度、およびボード電力を監視してください。

DeepStream 9.1 では、REST API を通じてストリームを繰り返し追加・削除するアプリケーション向けに、Ubuntu 24.04 のメモリ急増に対する回避策が文書化されています：

```bash
export MALLOC_ARENA_MAX=1
export MALLOC_MMAP_MAX_=0
export MALLOC_MMAP_THRESHOLD_=131072
export MALLOC_TRIM_THRESHOLD_=131072
```

これらの変数は、影響を受けるアプリケーションプロセスにのみ適用し、システム全体の環境の一部とする前に長時間動作を検証してください。

## 推奨 JetPack 7.2 プロジェクト

### 自然言語パイプラインジェネレーター

Coding Agent を使用して、記述された要件から Service Maker アプリケーションを生成し、その後、生成されたコードを検証してバージョン管理します。

### マルチカメラ 3D トラッキング

AutoMagicCalib と MV3DT スキルを組み合わせて、キャリブレーション済みマルチカメラトラッキングを実現します。ライブカメラに移行する前に、同期済みの録画ファイルから開始してください。

### エッジからクラウドへのビデオ推論

Jetson 上でデコード、検出、トラッキング、およびクリップ選択を実行します。選択されたイベントを x86 DeepStream `nvvllmvlm` サービスに送信し、自然言語による回答と要約を得ます。

### メモリを意識した産業監視

[Industrial Vision Monitoring on JetPack 7.2](/ja/industrial_vision_monitoring_on_industrial_bk/) ワークフローを拡張し、DeepStream のバッチ処理、トラッキング、イベントクリップ、および構造化メタデータを追加しつつ、統合メモリを監視します。

## 本番運用チェックリスト

- [ ] Jetson が JetPack 7.2 / Jetson Linux 39.2 を報告している。
- [ ] DeepStream がバージョン 9.1 を報告している。
- [ ] すべての TensorRT エンジンが対象リリース上で再ビルドされている。
- [ ] カスタムパーサーとプラグインが DeepStream 9.1 に対してコンパイルされている。
- [ ] カメラ、RTSP、デコーダ、エンコーダ、およびゼロコピー経路が検証されている。
- [ ] ストリームの追加・削除および再接続の動作がテストされている。
- [ ] 最大ストリーム数およびイベント負荷時にメモリが安定している。
- [ ] レイテンシ、FPS、ドロップフレーム、電力、および熱特性が記録されている。
- [ ] 自然言語によるビデオ推論がサポート対象のバックエンドで動作している。
- [ ] 生成されたエージェントコードがデプロイ前にレビューされ、コミットされている。

## 公式 NVIDIA リファレンス

- [DeepStream 9.1 リリースノート](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_Release_notes.html)
- [DeepStream 入門](https://developer.nvidia.com/deepstream-getting-started)
- [DeepStream 9.1 Jetson インストール](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_Installation.html)
- [DeepStream Docker コンテナ](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_docker_containers.html)
- [DeepStream GitHub リポジトリ](https://github.com/NVIDIA/DeepStream)
- [DeepStream Agentic Skills リファレンス](https://docs.nvidia.com/metropolis/deepstream/9.1/text/AgenticSkillsReference.html)
- [Inference Builder MCP Server](https://docs.nvidia.com/metropolis/deepstream/9.1/text/InferenceBuilder_MCP_Server.html)
- [LLM/VLM 推論プラグイン](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_plugin_gst-nvvllmvlm.html)

## テクニカルサポート & 製品ディスカッション

Seeed Studio の製品をお選びいただきありがとうございます。技術サポートおよび製品に関するディスカッションには、以下のチャネルをご利用ください。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>