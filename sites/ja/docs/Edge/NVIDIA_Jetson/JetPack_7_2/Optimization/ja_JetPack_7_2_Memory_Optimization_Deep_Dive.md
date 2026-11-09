---
description: "JetPack 7.2 における予算志向の LLM メモリ: 起動時フットプリントの削減、TensorRT Edge-LLM ランタイムの境界、KV キャッシュ再利用と Orin の実測ヘッドルーム。"
title: 'JetPack 7.2 メモリ最適化：ソフトウェアの進歩と LLM デプロイメント予算'
keywords:
  - JetPack 7.2
  - メモリ最適化
  - TensorRT Edge-LLM
  - KV キャッシュ
  - INT4
  - Jetson Orin Nano
  - LLM デプロイメント
image: https://files.seeedstudio.com/wiki/jetpack-7.2/unified_mem.png
slug: /jetpack_7_2_memory_optimization_deep_dive
last_update:
  date: 08/27/2026
  author: zibo
createdAt: '2026-08-27'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/ja/jetpack_7_2_memory_optimization_deep_dive/
---

# JetPack 7.2 メモリ最適化：ソフトウェアの進歩と LLM デプロイメント予算



<div align="center">
  <img alt="Jetson の統合メモリ構成図：CPU、GPU、システムとカメラが 1 つの DRAM プールを共有し、そこからディスプレイ、重み、ランタイム、KV キャッシュも確保される" width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/unified_mem.png"/>
</div>


Jetson は統合メモリを使用しており、CPU、GPU、システムサービス、カメラとディスプレイのサブシステム、モデルの重み、推論ランタイム、KV キャッシュがすべて同じ物理 DRAM を共有します。JetPack 7.2 は既存モジュールに物理 DRAM を追加するわけではありません。その代わりに、ソフトウェア基盤を更新し、その共有メモリシステムを構築・削減・計測・デプロイするための新しい方法を導入します。

DRAM 供給が逼迫しメモリコストが上昇している状況では、より大容量メモリのモジュールへ即座に移行することだけがエッジ AI 設計を成立させる手段ではありません。適切に計測された JetPack 7.2 へのアップグレードにより、これまでプラットフォームが消費していたメモリを解放し、残りの予算を制御しやすくできます。その意味で、これは**ソフトウェアによるメモリアップグレード**になり得ます。モジュールの物理容量は変わりませんが、システムイメージ、ランタイム、モデル精度、リクエスト制限を再検証することで、JetPack 6.2 と同等のデプロイメントでは収まらなかった LLM ワークロードを実用レベルにすることができます。

本記事は Jetson Orin 開発者に向けて、JetPack 7.2 のどのソフトウェア更新がメモリ効率を改善できるのか、そして利用可能なメモリをどのように実用的な LLM デプロイメント予算へと変換するか、という 2 つの問いに焦点を当てます。JetPack 7.2 固有の機能と、一般的な TensorRT や LLM のテクニックを区別し、それぞれの最適化を正確に計測できるようにします。


| **reComputer J3011** | **reComputer Classic J5011** |
| :---: | :---: |
| <img alt="比較表にある 2 つのユニットのうちの 1 つ、reComputer J3011" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/o/row6-recomputer_j30_.jpg" style={{width:400, height:'auto'}} /> | <img alt="比較表にあるもう一方のユニット、reComputer Classic J5011" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100006184-gallery_img_1.jpg" style={{width:400, height:'auto'}} /> |
| Jetson Orin Nano 8GB プラットフォーム | Jetson AGX Orin 32GB プラットフォーム |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手 🖱️</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手 🖱️</font></span></strong>
  </a>
</div>

:::info
**読み方ガイド** 

- まず [1. What Is Specific to JetPack 7.2?](#1-what-is-specific-to-jetpack-72) から読み始めて、7.2 固有のレバーを特定します。 
- [2. Turning the 7.2 Stack into an LLM Budget](#2-turning-the-jetpack-72-stack-into-an-llm-memory-budget) を使って、重み、ランタイム、KV キャッシュを分解します。 
- 対応する運用ワークフローについては [3. Existing JetPack 7.2 Guides](#3-use-this-deep-dive-with-the-existing-jetpack-72-guides) を参照します。 
- [4. Field Observations](#4-field-observations-evidence-for-jetpack-72-not-marketing-claims) を読んでください。
:::

本記事のハンズオン版となるのが [JetPack 7.2 Memory Optimization](/ja/jetpack_7_2_memory_optimization/) ガイドであり、ここで説明する同じ原則を、スキル主導の監査および設定ワークフローへと落とし込みます。

## 1. What Is Specific to JetPack 7.2?

[JetPack 7.2](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2) は Jetson Linux 39.2、Ubuntu 24.04、Linux カーネル 6.8、CUDA 13.2.1、TensorRT 10.16.2 を提供します。[JetPack 7.2 Resource Hub](/ja/jetpack_7_2_resource_hub/) ではすでにリリース全体の機能セットを説明しています。このセクションでは、LLM のメモリに関する判断を変える機能だけを取り上げます。

| JetPack 7.2 の機能 | 本記事に含める理由 | 詳細ガイド |
| --- | --- | --- |
| 更新された CUDA と TensorRT スタック | サポートされる推論エンジンを再構築しプロファイルするためのソフトウェアベースラインです。 | [Deploy TensorRT Edge-LLM on JetPack 7.2](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/) |
| メモリ最適化とベンチマークのスキル | 設定を変更する前に、プラットフォーム予約、サービス、ワークロード負荷を繰り返し測定する方法を提供します。 | [JetPack 7.2 Memory Optimization](/ja/jetpack_7_2_memory_optimization/) |
| 公式 Yocto サポート | Ubuntu 開発イメージに不要なソフトウェアが含まれている場合でも、プロダクションチームは用途に合わせた再現性のあるイメージを作成できます。 | [Build and Flash a Yocto Image](/ja/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) |

JetPack 7.2 はモジュールに DRAM を追加したり、自動的にモデルを縮小したり、KV キャッシュ再利用のようなランタイム機能をそれ自体で有効にしたりはしません。そうした選択を行い、計測するためのソフトウェアベースラインとツール群を提供します。

### 1.1 起動時メモリ削減は LLM の有効ヘッドルーム

起動時のシステムフットプリントは、LLM 予算の最初の要素です。以下の過去の Orin Nano 8 GB の比較では、ある JetPack 6.2 の状態で約 1.4 GiB が使用され、ある JetPack 7.2 の状態では 800 MiB 強が使用されています。この差分、すなわちこの特定のイメージとサービス構成ではおよそ 600 MiB が、アプリケーションが起動する前に消費されるのではなく、推論ランタイム、モデルワークスペース、または KV キャッシュに利用可能なメモリとして残せる領域です。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/6.2vs7.2.PNG" alt="Orin Nano における JetPack 6.2 と 7.2 の起動時メモリ比較（過去データ）"/>
</div>

これが、システムメモリ使用量の削減を**ソフトウェアによるメモリアップグレード**と理解できる理由です。モジュールは依然として物理 DRAM 8 GB を搭載していますが、プラットフォームのフットプリントが小さくなることで、アプリケーションが実際に予算として扱える割合が増えます。メモリに制約のある LLM デプロイメントでは、その追加ヘッドルームが、エンジンのロードやプリフィル中に失敗するか、有用で制限されたリクエストを実行するのに十分な余裕があるかを分ける要因になり得ます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/7.2.png" alt="JetPack 6.2 と 7.2 のソフトウェアスタック比較：CUDA 12.6 を備えた Ubuntu 22.04 と、CUDA 13.2 を備えた Ubuntu 24.04、およびより軽量な 7.2 ベースライン"/>
</div>

この結果は、すべての JetPack 7.2 イメージで自動的に得られるわけではありません。デスクトップモード、有効化されているサービス、コンテナ、ディスプレイとカメラの経路、キャリアボード BSP 設定、そして計測ポイントがベースラインに影響します。回復したヘッドルームをより大きなモデルや長いコンテキストに割り当てる前に、実機で安定したアイドル状態を計測してください。

AGX Orin 32 GB における JetPack 6.2 と 7.2 のモデルロード比較（テスト構成と性能値を含む）については、[JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) を参照してください。

## 2. Turning the JetPack 7.2 Stack into an LLM Memory Budget

JetPack 7.2 はプラットフォームとツール群を提供しますが、LLM は依然として OS と製品サービスの起動後に残るメモリ内に収まらなければなりません。利用可能な予算は、モデルサイズ、コンテキスト長、バッチサイズ、重みの精度、およびモデルを実行するランタイムに依存します。設定を変更する前に、以下のチャンクに分割してください。

<div align="center">
  <img alt="ランタイム、重み、ワークスペース、KV キャッシュに分割された LLM メモリ" width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/llm_1.png"/>
</div>


- **モデルの重み** — モデルそのもの、学習済みパラメータです。通常は最大のチャンクであり、モデルが大きいほど、また精度が高いほど、多くのメモリを消費します。
- **KV キャッシュ** — モデルが「これまでの会話を覚えている」ための領域です。新しいトークンごとにチャット全体を読み直さずに済みますが、コンテキストが長くなるほど大きくなります。
- **アクティベーション** — 計算途中で生成される一時的な数値であり、モデルが各レイヤーを処理する中で生成・破棄されます。
- **TensorRT ワークスペース** — モデルの準備と実行の際に TensorRT が確保する作業用領域です。
- **CUDA コンテキスト** — 計算を行う前に CUDA ランタイムが開く GPU の「セッション」であり、コンテキスト、ストリーム、内部状態を含みます。
- **ランタイム / 一時バッファ** — フレームワークやアプリケーションがデータをやり取りするために使用する短命のバッファで、I/O バッファ、コピー領域、中間的な作業用メモリなどが含まれます。


### 2.1 ランタイムの境界：TensorRT Edge-LLM が追加するもの

JetPack 7.2 は CUDA 13.2.1 と TensorRT 10.16.2 を提供し、その上に TensorRT Edge-LLM がサポート対象のエッジ LLM ワークフローを実行できます。Edge-LLM は独立したランタイム兼ツールチェーンであり、JetPack が自動的に有効化する機能ではありません。モデルとバージョンがサポートされている場合、INT4 AWQ チェックポイントから TensorRT エンジンを構築し、メモリプランニング、KV キャッシュ管理、カーネル融合、CUDA Graphs などの手法を利用できます。

JetPack 7.2 開発者にとっての実務的な利点は、再現性のあるシステムベースラインと組み合わせて利用できる、最新の NVIDIA 推論スタックを得られることです。目的は単に LLM を起動することではなく、限られた DRAM とメモリ帯域を CPU、GPU、サービス、アプリケーションと共有しながらモデルを共存させることです。

大きなモデルでは、通常まず重みが最初に考慮すべき安定した割り当てになります。4B パラメータのモデルにはおおよそ次のメモリが必要です。


<div align="center">
  <img alt="4B パラメータに対する LLM モデルメモリ見積もり：FP16/BF16 で 8 GB、INT8 で 4 GB、INT4 で 2 GB" width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/llm_parameters.png"/>
</div>


これらの数値は重みのみを表しています。量子化スケール、メタデータ、ランタイムバッファ、KV キャッシュは追加の割り当てです。それでも、FP16 から INT4 へ移行すると、理論上の重みのストレージは約 75% 削減されます。

### 2.2 llama.cpp と TensorRT Edge-LLM は異なる経路

4 ビットというラベルが付いていても、2 つのデプロイメントが同等になるわけではありません。同じ JetPack 7.2 イメージ上でも、llama.cpp が使用する Qwen3.5-4B GGUF ファイルと、TensorRT Edge-LLM で構築された INT4 AWQ チェックポイントは、同じ Jetson GPU へ到達するまでの経路が異なります。

| 比較 | GGUF パス | TensorRT Edge-LLM パス |
| --- | --- | --- |
| 量子化成果物 | Q4_K_M などの GGUF ファイル | サポートされる INT4 AWQ チェックポイントと、そのエクスポートされた成果物 |
| 推論エンジン | llama.cpp | モデルエクスポート → TensorRT エンジン |
| GPU 実行 | llama.cpp のビルドとバックエンドによって選択されるカーネル | サポートされる融合、メモリプランニング、プラグイン、CUDA Graph を備えた TensorRT エンジン |
| 公平なメモリ比較 | モデル、コンテキスト、GPU オフロード、バッチ、電源モード、バージョンを一致させる | 同じ変数を一致させたうえで、エンジンとワークスペースの使用量を含める |

したがって TensorRT Edge-LLM は、単なる INT4 モデルリーダー以上の存在です。サポートされるチェックポイントを、NVIDIA GPU 向けに最適化されたエンジンへと変換します。利用できる正確な機能は、モデル、エンジンビルド、および TensorRT Edge-LLM のバージョンに依存するため、常にサポート対象モデルのマトリクスとリリースドキュメントを確認してください。JetPack 6.2 と 7.2 を比較する場合は、それぞれのソフトウェアスタック上で両方のパスを再ビルドまたは再検証し、古いエンジンを再利用してその結果を JetPack 7.2 の利得と呼ばないでください。

### 2.3 KV キャッシュ：JetPack 7.2 が取り除かない予算

<div align="center">
  <img alt="コンテキストが長くなるにつれて、生成トークンごとに増加する KV キャッシュ" width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/KV-cache-token.jpeg"/>
</div>
Transformer が最初のトークンを生成するとき、プロンプトを処理し、計算したアテンションのキーとバリューを保存します。次のトークンでは、ランタイムは履歴全体を再計算する代わりに、それらの値を再利用できます。この再利用によってデコードが現実的なものになりますが、代償もあります。会話が長くなるにつれてキャッシュが増大するのです。

<div align="center">
  <img alt="チャート内でリクエストに伴い増加する KV キャッシュメモリ。30 GB のメモリ上限と OOM ラインがマークされている" width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/KV—Cache.jpeg"/>
</div>

おおよその計画用の式は次のとおりです：

> **KV キャッシュバイト数 ≈ 2 × レイヤー数 × KV ヘッド数 × ヘッド次元数 × トークン数 × バッチサイズ × 要素あたりバイト数**

このため、同じ INT4 モデルでも 4K コンテキストでは余裕を持って動作し、32K ではメモリ不足になることがあります。JetPack 7.2 は、よりスリムなデプロイイメージや、より効率的なサポートランタイムによって、より多くの有効なヘッドルームを残せるかもしれませんが、KV キャッシュの増大を制限するわけではありません。重みの量子化は固定コストを下げますが、コンテキスト、バッチ、並行実行は依然として予算の増大部分を決定します。


### 2.4 KV キャッシュ再利用：増大するコストを管理されたリソースに変える

2.3 節でトレードオフを説明しました。KV キャッシュは、モデルがトークンごとにプロンプト全体を再計算することを防ぎますが、コンテキストが増えるにつれてより多くの DRAM を消費します。JetPack 7.2 デプロイでは、まずプラットフォームの改善を利用して実際のメモリ予算を確立し、そのうえで、すでにキャッシュに保存されている作業が次のリクエストに役立つかどうかを判断します。

TensorRT Edge-LLM は、このキャッシュを見えない副作用ではなくランタイムリソースとして扱います。エンジンは、ターゲット入力長と KV キャッシュ容量を指定してビルドされ、ランタイムにはアクティブおよび保持されたコンテキスト用のページプールがあります。これは JetPack 7.2 のコンピュートスタック上で動作する TensorRT Edge-LLM の機能であり、OS によって自動的に適用されるキャッシュポリシーではありませんが、7.2 デプロイがメモリを意図的に予約し、メモリ不足エラーが発生してから上限を知るのではなく、事前に把握できるようにします。

サポートされるモデルでは、Edge-LLM はリクエスト間で一致するプロンプトプレフィックスを再利用することもできます。キャッシュは 1 つのランタイムインスタンスにローカルであり、プレフィックスの内容をキーとするため、プロンプトの共有部分のみが再利用可能です。現在の Edge-LLM 実装では、この機能には FP16 KV キャッシュが必要であり、選択したエンジンとランタイムに対して有効化する必要があります。

| ターン | プレフィックス再利用なし | プレフィックス再利用あり |
| --- | --- | --- |
| 最初のリクエスト | システムプロンプトとユーザープロンプトがプリフェッチされ、その後 KV キャッシュに書き込まれる。 | 同じ初期プリフィルが必要。 |
| 同じシステムプロンプトを持つ後続リクエスト | 繰り返されるプレフィックスが再度プリフェッチされる。 | 一致するキャッシュ済みプレフィックスを再利用でき、新しい部分だけをプリフィルすればよい。 |

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/prefix_kv_cache.png" alt="繰り返される LLM リクエスト間でのプレフィックス KV キャッシュ再利用"/>
</div>
これは、長いシステムプロンプトを持つエージェント、繰り返し利用されるドキュメントプレフィックスを持つ RAG ワークフロー、あるいは同じ画像プレフィックスを繰り返す VLM リクエストに特に有用です。最大の利点は通常、ピークメモリ要件の低減ではなく、繰り返しプリフィル作業の削減と最初のトークンまでの時間短縮です。保持されたキャッシュページは依然としてメモリを消費し、プロンプト、画像、または画像の順序を変更すると、影響を受けるプレフィックスについては再利用ができなくなります。

Jetson へのデプロイでは、再利用が有効であると仮定するのではなく、実際に再利用されていることを検証してください。保持したいコンテキスト用に十分なページプール容量を構築し、ランタイムでコンテキスト再利用を有効にし、ランタイムプロファイルを確認します。キャッシュヒットしたリクエストでは、再利用トークン数が正の値として報告されるはずです。

コンテキスト容量と再利用を考慮に入れたうえで、残る疑問は、各生成トークンの内部で何が起こるかです。そこで TensorRT の実行最適化が重要になります。

### 2.5 JetPack 7.2 上の TensorRT：中間データ移動の削減

Transformer レイヤーは、正規化、量子化または非量子化、行列乗算、活性化、アテンションといった演算を組み合わせたものです。これらの演算が別々のカーネルとして実行される場合、あるカーネルが中間テンソルを書き出し、次のカーネルがそれをすぐに DRAM から読み戻すことになります。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/transformer_layer.png" alt="Transformer レイヤーの実行：各ステップが DRAM に書き込み、次のステップがそれを読み戻す。追加のカーネル起動と一時バッファも発生する"/>
</div>

| 実行パス | DRAM をまたぐもの | Jetson で重要な理由 |
| --- | --- | --- |
| 個別カーネル | 各中間テンソルが演算間で書き込み・読み出しされる。 | 帯域幅使用量、一時的な割り当て、カーネル起動が増える。 |
| 融合カーネル | 互換性のある演算が、最終結果を書き出す前にまとめて実行される。 | 中間トラフィックとランタイムオーバーヘッドが減る。 |

カーネル融合は、モデルの重みや KV キャッシュのサイズを変えるものではありません。演算間で移動する作業データを削減することで、レイテンシを改善し、一時的なランタイムプレッシャーを軽減できます。JetPack 7.2 の TensorRT 10.16.2 は、このエンジンパス向けの TensorRT バージョンを提供しますが、本記事は特定の融合が 7.2 で導入されたと主張するものではありません。利用可能な融合はモデルグラフとエンジンビルドに依存します。融合を固定のメモリ節約量として扱うのではなく、ターゲット Jetson 上で生成されたエンジンを計測してください。

融合はカーネルシーケンス内部の作業を削減します。とはいえ、デコードは生成される各トークンごとにそのシーケンスを繰り返すため、別のスケジューリングコストが残ります。

### 2.6 JetPack 7.2 ランタイムパス上の CUDA Graph

デコード中、LLM は 1 回の反復で 1 つまたは少数のトークンを生成し、同様の GPU 演算シーケンスが何度も実行されます。従来のパスでは、CPU がそのシーケンスを繰り返しサブミットします。

CUDA Graph は、互換性のある GPU シーケンスを一度記録し、後で単一のグラフ起動で再生します。

| デコード段階 | 従来の起動パス | CUDA Graph パス |
| --- | --- | --- |
| 初回の互換シーケンス | CPU が個々の GPU 演算を起動する。 | ランタイムがシーケンスをグラフとして記録する。 |
| 後続の反復 | CPU が各反復ごとにシーケンスを再度サブミットする。 | CPU が記録済みグラフを起動し、シーケンスが 1 単位として実行される。 |

これはスケジューリングの最適化です。カーネル融合は主に中間メモリトラフィックを削減し、CUDA Graph は主に CPU から GPU への繰り返し起動オーバーヘッドを削減します。どちらもモデルの重みや KV キャッシュを小さくするものではありません。JetPack 7.2 システムでは、互換性のある TensorRT エンジンが更新された CUDA および TensorRT スタックをより有効に活用する 1 つの方法です。Jetson では、起動作業を減らすことで、CPU リソースと電力予算が GPU リソースと同様に制約されているため、エンドツーエンドの応答性を改善できます。

これらのメカニズムによって、ランタイムの全体像が完成します。量子化は固定された重みコストを下げ、KV キャッシュ設定は増大するコンテキストコストを制御し、融合は中間トラフィックを削減し、CUDA Graph は繰り返されるデコードスケジューリングを削減します。

### 2.7 各メカニズムを JetPack 7.2 にマッピングする

次の表は、JetPack 7.2 のレバーと、その上で使用されるランタイムメカニズムを区別します。

| レイヤーまたはメカニズム | JetPack 7.2 との関係 | デプロイの判断 | 測定すべき項目 |
| --- | --- | --- | --- |
| JetPack 7.2 プラットフォームベースライン | OS、CUDA、TensorRT のバージョンを提供し、再現可能な出発点を確立する。 | リリース、サービスセット、デスクトップターゲット、電源モードを記録する。 | 安定したアイドルメモリとデバイス構成。 |
| Yocto または削減された 7.2 イメージ | 不要なシステムソフトウェアを削減するための、7.2 ベースの直接的な本番イメージオプション。 | 必要なサービス、ドライバー、ライブラリのみを含める。 | アイドルメモリと必要機能の検証。 |
| 低精度重み | 7.2 ランタイム環境内で行うモデルの選択。 | サポートされるチェックポイントを選択し、出力品質を検証する。 | エンジンロード時のメモリとタスク品質。 |
| KV キャッシュ容量と再利用 | 自動的な 7.2 OS 機能ではなく、任意のランタイム機能。 | ワークロードに合わせてコンテキスト、バッチ、ページプール、保持上限を設定する。 | プリフィルピーク、安定したデコードメモリ、再利用トークン数、TTFT。 |
| TensorRT 融合と CUDA Graph | 互換性のあるエンジンは、7.2 に含まれる CUDA/TensorRT スタックを活用できる。 | ターゲットの 7.2 デバイス上でエンジンをビルドし、プロファイルする。 | ランタイムピーク、デコードレイテンシ、スループット。 |

これが、Jetson において「よりメモリ効率が高い」と「より高速」が結び付いている理由です。システムが物理的な DRAM を追加で獲得しているわけではありません。同じ共有 DRAM と帯域幅のうち、重み、キャッシュ、中間データ、スケジューリング作業がより意図的に管理されることで、より多くをワークロードに割り当てられるようになっているのです。

このマップは次の順序で使用してください：まずイメージとプラットフォームの予算を確立し、次にランタイムとモデルのフットプリントを測定し、最後に、全体のワークロードにまだ余裕がある場合にのみコンテキストと同時実行数を拡大します。

## 3. 既存の JetPack 7.2 ガイドとあわせてこの詳細解説を使う

このページでは予算について説明します：なぜ低いアイドル時フットプリント、小さい重み、制限された KV キャッシュ、および互換性のあるランタイムが相互に関連しているのかを示します。このページは、JetPack 7.2 コレクションの他の部分ですでに維持されている運用手順を、意図的に繰り返しません。

| 次のことが必要な場合… | このガイドを使用 | このページを開いたままにする目的… |
| --- | --- | --- |
| アイドル時、エンジン負荷時、プリフィル時、デコード時のメモリを測定する；サービスを削減する；または検証済み BSP 予約を変更する | [JetPack 7.2 Memory Optimization](/ja/jetpack_7_2_memory_optimization/) | 対応を行う前に、どのメモリ層が原因かを判断するため。 |
| チェックポイントをエクスポートする、エンジンをビルドする、サポートされる精度を選択する、または TensorRT Edge-LLM をベンチマークする | [Deploy TensorRT Edge-LLM on JetPack 7.2](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/) | 重み、ワークスペース、KV キャッシュが全体の予算にどのように収まるかを理解するため。 |
| 本番志向でカスタマイズされた OS イメージをビルドする | [Build and Flash a Yocto Image](/ja/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) | より小さいシステムイメージが、追加の保守コストに見合うかどうかを判断するため。 |
| 公開されている 6.2 と 7.2 の AGX Orin 結果を比較する | [JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) | 単一の測定結果を、普遍的なメモリ削減として扱うという誤りを避けるため。 |

正しい順序は単純です：システムのベースラインを確立し、選択したランタイムとモデルを測定し、その後、全体のワークロードが予算内に収まっている間だけコンテキストまたは同時実行数を増やします。リンクされたガイドには、各ステップのコマンド、安全確認、ロールバック手順、受け入れテストが含まれています。

## 4. フィールド観測：JetPack 7.2 の証拠であり、マーケティング主張ではない

公開されている AGX Orin 32 GB の比較とその図については、[JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) を参照してください。本記事は、LLM のメモリ予算を計画する際に、それらの結果をどのように解釈するかに焦点を当てています。

JetPack 6.2 と 7.2 の結果を比較する際は、リリースを 1 つの変数としてのみ扱ってください。モジュール、キャリアボード、モデルのチェックサム、コマンド、GPU オフロード、コンテキスト、生成トークン数、電源モード、`jetson_clocks` の状態、デスクトップターゲット、サービスセット、温度、サンプリングポイントは固定します。各実行ごとに L4T、CUDA、TensorRT のバージョンを記録してください。

重要となる 4 つのメモリ状態は、安定したアイドル、エンジンまたはモデル読み込み済み、プロンプトプリフィル、安定したデコードです。[Memory Optimization guide](/ja/jetpack_7_2_memory_optimization/) では、これらの状態に対する収集コマンドと解釈方法を提供しています。1 つの状態でのみ取得された数値では、JetPack 7.2、CUDA、または TensorRT がワークロード全体のメモリ改善を引き起こしたと証明することはできません。

## 参考文献

- [TrendForce — AI Server Demand Continues to Support Memory Prices in 3Q26](https://www.trendforce.com/presscenter/news/20260703-13134.html)：最近の DRAM および NAND 契約価格の見通し。
- [NVIDIA Developer Blog — Deploy Agentic-Ready AI at the Edge with Memory Efficiency in NVIDIA JetPack 7.2](https://developer.nvidia.com/blog/deploy-agentic-ready-ai-at-the-edge-with-memory-efficiency-in-nvidia-jetpack-7-2/)：JetPack 7.2 におけるメモリ最適化のノウハウと公式 Yocto サポート。
- [NVIDIA JetPack 7.2 Downloads / Release Notes](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2)
- [NVIDIA TensorRT-Edge-LLM](https://github.com/NVIDIA/TensorRT-Edge-LLM)：エッジツールチェーン、サポートされるモデル、およびサンプルのバージョン管理された信頼できるソース。
- [NVIDIA TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM)：LLM ランタイム、エンジンビルド、および機能ドキュメント；カーネル融合と CUDA Graph 最適化ドキュメントのソース。
- [TensorRT Edge-LLM KV Cache Reuse](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/features/kv-cache-reuse.html)：サポート条件、ページプール容量、ランタイムでの有効化、および再利用検証。
- [NVIDIA TensorRT KV Cache Documentation](https://docs.nvidia.com/deeplearning/tensorrt/latest/inference-library/transformers-kv-cache.html)：一般的な KV キャッシュ管理および設定の概念。

## 関連ページ

- [JetPack 7.2 Memory Optimization](/ja/jetpack_7_2_memory_optimization/) — スキルベースの監査、ヘッドレス / カメラなし BSP の回収、SWIOTLB の安全性、低メモリ LLM 推論設定。
- [Deploy TensorRT Edge-LLM on JetPack 7.2](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/) — ホストでのエクスポート、ターゲットでのエンジンビルド、および C++ 推論検証。
- [JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) — Jetson AGX Orin 推論で何が変わるか、および Seeed による JetPack 7.2 と 6.2 の比較。
- [JetPack 7.2 Resource Hub](/ja/jetpack_7_2_resource_hub/) — Seeed Studio デバイス向け JetPack 7.2 リソースのカテゴリ別インデックス。
- [reComputer Super product page](https://www.seeedstudio.com/reComputer-Super-p-6617.html) — ブートメモリ値の取得に使用したユニット。

## 技術サポートと製品ディスカッション

Seeed Studio の製品をお選びいただきありがとうございます！技術サポートおよび製品に関するディスカッションには、以下のチャネルをご利用ください：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
