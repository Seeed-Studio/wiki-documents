---
description: 'Jetson メモリに影響する JetPack 7.2 のソフトウェア変更点を理解します：CUDA と TensorRT スタック、公式 Yocto サポート、最適化スキル、そして Orin 向けに実測された LLM デプロイメントのメモリ予算。'
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
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/ja/jetpack_7_2_memory_optimization_deep_dive/
---

# JetPack 7.2 メモリ最適化：ソフトウェアの進歩と LLM デプロイメント予算



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/unified_mem.png"/>
</div>


Jetson はユニファイドメモリを使用します。CPU、GPU、システムサービス、カメラおよびディスプレイのサブシステム、モデルの重み、推論ランタイム、KV キャッシュは、すべて同じ物理 DRAM を共有します。JetPack 7.2 は既存モジュールに物理 DRAM を追加するわけではありません。その代わりに、ソフトウェア基盤を更新し、その共有メモリシステムを構築・削減・計測・デプロイするための新しい方法を導入します。

DRAM 供給が逼迫しメモリコストが上昇している状況では、より大容量メモリのモジュールへ即座に移行することだけがエッジ AI 設計を成立させる手段ではありません。適切に計測された JetPack 7.2 へのアップグレードにより、これまでプラットフォームが消費していたメモリを解放し、残りのメモリ予算を制御しやすくできます。その意味で、これは**ソフトウェアによるメモリアップグレード**と捉えられます。モジュールの物理容量は変わりませんが、システムイメージ、ランタイム、モデル精度、リクエスト制限を再検証することで、JetPack 6.2 と同等のデプロイメントでは収まらなかった LLM ワークロードを実用レベルにすることができます。

本記事は Jetson Orin 開発者に向けて、2 つの問いに焦点を当てます。どの JetPack 7.2 のソフトウェア更新がメモリ効率を改善できるのか、そして利用可能なメモリをどのように実用的な LLM デプロイメント予算へと変換するのか、という点です。JetPack 7.2 固有の機能と、一般的な TensorRT や LLM のテクニックを区別し、それぞれの最適化を正確に計測できるようにします。


| **reComputer J3011** | **reComputer Classic J5011** |
| :---: | :---: |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/o/row6-recomputer_j30_.jpg" style={{width:400, height:'auto'}} /> | <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100006184-gallery_img_1.jpg" style={{width:400, height:'auto'}} /> |
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

- [1. JetPack 7.2 固有のポイントとは？](#1-jetpack-72-固有のポイントとは) から読み始めて、7.2 固有のレバーを特定してください。 
- [2. JetPack 7.2 スタックを LLM メモリ予算に変換する](#2-jetpack-72-スタックを-llm-メモリ予算に変換する) を使って、重み、ランタイム、KV キャッシュを分解してください。 
- [3. 既存の JetPack 7.2 ガイド](#3-このディープダイブを既存の-jetpack-72-ガイドと組み合わせて使う) を使って、対応する運用ワークフローを確認してください。 
- [4. フィールドでの観察結果](#4-フィールドでの観察結果jetpack-72-に関する証拠マーケティング文言ではない) を読んでください。
:::

本記事のハンズオン版となるのが [JetPack 7.2 Memory Optimization](/ja/jetpack_7_2_memory_optimization/) ガイドであり、同じ原則をスキル主導の監査および設定ワークフローへと落とし込みます。

## 1. JetPack 7.2 固有のポイントとは？

[JetPack 7.2](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2) は、Jetson Linux 39.2、Ubuntu 24.04、Linux カーネル 6.8、CUDA 13.2.1、TensorRT 10.16.2 を提供します。[JetPack 7.2 Resource Hub](/ja/jetpack_7_2_resource_hub/) では、すでにリリース全体の機能セットを説明しています。本セクションでは、そのうち LLM のメモリに関する判断を変える機能だけを取り上げます。

| JetPack 7.2 の機能 | 本記事に含める理由 | 詳細ガイド |
| --- | --- | --- |
| 更新された CUDA および TensorRT スタック | サポートされる推論エンジンを再構築し、プロファイルするためのソフトウェアベースラインです。 | [Deploy TensorRT Edge-LLM on JetPack 7.2](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/) |
| メモリ最適化とベンチマークのスキル | 設定を変更する前に、プラットフォーム予約、サービス、ワークロード負荷を繰り返し測定する方法を提供します。 | [JetPack 7.2 Memory Optimization](/ja/jetpack_7_2_memory_optimization/) |
| 公式 Yocto サポート | Ubuntu 開発イメージに不要なソフトウェアが含まれている場合でも、プロダクションチームは用途に合わせた再現性のあるイメージを作成できます。 | [Build and Flash a Yocto Image](/ja/build_and_flash_yocto_for_recomputer_super_bk/) |

JetPack 7.2 はモジュールに DRAM を追加したり、自動的にモデルを縮小したり、KV キャッシュの再利用といったランタイム機能をそれ自体で有効にしたりはしません。そうした選択を行い、計測するためのソフトウェアベースラインとツール群を提供します。

### 1.1 起動時メモリの削減は LLM のヘッドルームになる

起動時のシステムフットプリントは、LLM メモリ予算の最初の要素です。以下の過去の Orin Nano 8 GB の比較では、ある JetPack 6.2 の状態では約 1.4 GiB が使用されているのに対し、ある JetPack 7.2 の状態では 800 MiB 強が使用されています。この差分――この特定のイメージとサービス構成ではおよそ 600 MiB――は、アプリケーションが起動する前に消費されるのではなく、推論ランタイム、モデルワークスペース、または KV キャッシュに利用できるメモリです。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/6.2vs7.2.PNG" alt="Orin Nano における JetPack 6.2 と 7.2 の起動時メモリ比較（過去データ）"/>
</div>

これが、システムメモリ使用量の削減を**ソフトウェアによるメモリアップグレード**と理解できる理由です。モジュールは依然として 8 GB の物理 DRAM を持っていますが、プラットフォームのフットプリントが小さくなることで、アプリケーションが実際に予算として使える割合が増えます。メモリが制約となる LLM デプロイメントでは、その追加のヘッドルームが、エンジンのロードやプリフィル中に失敗するか、有用で制限されたリクエストを実行するのに十分な余裕があるかを分ける要因になり得ます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/7.2.png" alt="Orin Nano における JetPack 7.2 の起動時メモリ観測（過去データ）"/>
</div>

この結果は、すべての JetPack 7.2 イメージで自動的に得られるわけではありません。デスクトップモード、有効化されているサービス、コンテナ、ディスプレイおよびカメラパス、キャリアボード BSP 設定、そして計測ポイントなどがベースラインに影響します。回復したヘッドルームをより大きなモデルや長いコンテキストに割り当てる前に、実機で安定したアイドル状態を計測してください。

AGX Orin 32 GB における JetPack 6.2 と 7.2 のモデルロード比較（テスト構成および性能値を含む）については、[JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) を参照してください。

## 2. JetPack 7.2 スタックを LLM メモリ予算に変換する

JetPack 7.2 はプラットフォームとツール群を提供しますが、LLM は依然として OS と製品サービスの起動後に残るメモリ内に収まる必要があります。利用可能な予算は、モデルサイズ、コンテキスト長、バッチサイズ、重みの精度、およびモデルを実行するランタイムに依存します。設定を変更する前に、以下のチャンクに分割してください。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/llm_1.png"/>
</div>


- **モデルの重み** — モデルそのもの、学習済みパラメータです。通常は最大のチャンクであり、モデルが大きいほど、また精度が高いほど、多くのメモリを消費します。
- **KV キャッシュ** — モデルにとっての「これまでの会話の記憶」です。毎トークンごとにチャット全体を読み直さずに済むようにしますが、コンテキストが長くなるほど大きくなります。
- **アクティベーション** — 計算途中で生成される一時的な数値であり、モデルが各レイヤーを処理する中で生成・破棄されます。
- **TensorRT ワークスペース** — モデルの準備と実行の間、TensorRT が確保する作業用領域です。
- **CUDA コンテキスト** — 計算を行う前に CUDA ランタイムが開く GPU の「セッション」であり、コンテキスト、ストリーム、内部状態を含みます。
- **ランタイム / 一時バッファ** — フレームワークやアプリケーションがデータをやり取りするために使用する短命のバッファであり、I/O バッファ、コピー領域、中間的な作業用メモリなどが含まれます。


### 2.1 ランタイムの境界：TensorRT Edge-LLM が追加するもの

JetPack 7.2 は CUDA 13.2.1 と TensorRT 10.16.2 を提供し、その上位レイヤとして TensorRT Edge-LLM がサポート対象のエッジ LLM ワークフローを実行できます。Edge-LLM は独立したランタイムおよびツールチェーンであり、JetPack が自動的に有効化する機能ではありません。モデルとバージョンがサポートされている場合、INT4 AWQ チェックポイントから TensorRT エンジンを構築し、メモリプランニング、KV キャッシュ管理、カーネル融合、CUDA Graphs などの手法を利用できます。

JetPack 7.2 開発者にとっての実務的な利点は、再現性のあるシステムベースラインとともに利用できる、最新の NVIDIA 推論スタックを得られることです。目的は単に LLM を起動することではなく、限られた DRAM とメモリ帯域を共有する CPU、GPU、サービス、アプリケーションとモデルを共存させることにあります。

大きなモデルでは、通常まず重みが最初に考慮すべき安定した割り当てになります。4B パラメータのモデルには、おおよそ次のメモリが必要です。


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/llm_parameters.png"/>
</div>


これらの数値は重みのみを表しています。量子化スケール、メタデータ、ランタイムバッファ、KV キャッシュは、さらに別の割り当てが必要です。それでも、FP16 から INT4 へ移行すると、理論上の重みの格納量は約 75% 削減されます。

### 2.2 llama.cpp と TensorRT Edge-LLM は異なる経路

4 ビットというラベルが付いていても、2 つのデプロイメントが同等になるわけではありません。同じ JetPack 7.2 イメージ上でも、llama.cpp が使用する Qwen3.5-4B GGUF ファイルと、TensorRT Edge-LLM で構築された INT4 AWQ チェックポイントは、同じ Jetson GPU に到達するまでの経路が異なります。

| 比較項目 | GGUF の経路 | TensorRT Edge-LLM の経路 |
| --- | --- | --- |
| 量子化成果物 | Q4_K_M などの GGUF ファイル | サポート対象の INT4 AWQ チェックポイントと、そのエクスポート成果物 |
| 推論エンジン | llama.cpp | モデルエクスポート → TensorRT エンジン |
| GPU 実行 | llama.cpp のビルドとバックエンドが選択するカーネル | サポートされる融合、メモリプランニング、プラグイン、CUDA Graphs を備えた TensorRT エンジン |
| 公平なメモリ比較 | モデル、コンテキスト、GPU オフロード、バッチ、電力モード、バージョンを一致させる | 同じ変数を一致させたうえで、エンジンとワークスペースの使用量も含める |

したがって TensorRT Edge-LLM は、単なる INT4 モデルリーダー以上の存在です。対応するチェックポイントを、NVIDIA GPU 向けに最適化されたエンジンへと変換します。利用できる正確な機能は、モデル、エンジンビルド、および TensorRT Edge-LLM のバージョンに依存するため、常にサポート対象モデルのマトリクスとリリースドキュメントを確認してください。JetPack 6.2 と 7.2 を比較する場合は、それぞれのソフトウェアスタック上で両方のパスを再ビルドまたは再検証し、古いエンジンを使い回してその結果を JetPack 7.2 の向上と見なさないでください。

### 2.3 KV キャッシュ：JetPack 7.2 が取り除かない予算項目

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/KV-cache-token.jpeg"/>
</div>
Transformer が最初のトークンを生成するとき、プロンプトを処理し、計算したアテンションのキーとバリューを保存します。次のトークンでは、ランタイムは履歴全体を再計算する代わりに、それらの値を再利用できます。この再利用によってデコードが現実的なものになりますが、代償もあります。会話が長くなるにつれてキャッシュも増大するのです。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/KV—Cache.jpeg"/>
</div>

おおよその計画用の式は次のとおりです：

> **KV-cache bytes ≈ 2 × layers × KV heads × head dimension × tokens × batch × bytes per element**

このため、同じ INT4 モデルでも 4K コンテキストでは余裕を持って動作し、32K ではメモリ不足になることがあります。JetPack 7.2 は、よりスリムなデプロイイメージや、より効率的なサポートランタイムによって、より多くの有効なヘッドルームを残せるかもしれませんが、KV キャッシュの増加を制限するわけではありません。重みの量子化は固定コストを下げますが、コンテキスト、バッチ、および同時実行数が、依然として増大する予算部分を決定します。


### 2.4 KV キャッシュの再利用：増大コストを管理されたリソースに変える

2.3 節でトレードオフを説明しました。KV キャッシュは、モデルがトークンごとにプロンプト全体を再計算することを防ぎますが、コンテキストが増えるにつれてより多くの DRAM を消費します。JetPack 7.2 デプロイでは、まずプラットフォームの改善を利用して実際のメモリ予算を確立し、そのうえで、すでにキャッシュに保存されている作業が次のリクエストに役立つかどうかを判断します。

TensorRT Edge-LLM は、このキャッシュを見えない副作用ではなく、ランタイムリソースとして扱います。エンジンは、目標入力長と KV キャッシュ容量を指定してビルドされ、ランタイムはアクティブおよび保持されたコンテキスト用のページプールを持ちます。これは JetPack 7.2 のコンピュートスタック上で動作する TensorRT Edge-LLM の機能であり、OS によって自動的に適用されるキャッシュポリシーではありませんが、7.2 デプロイが、メモリ不足エラーで上限を知るのではなく、意図的にメモリを予約できるようにします。

サポートされているモデルでは、Edge-LLM はリクエスト間で一致するプロンプトプレフィックスを再利用することもできます。キャッシュは 1 つのランタイムインスタンスにローカルであり、プレフィックスの内容をキーとするため、プロンプトの共有部分だけが再利用可能です。現在の Edge-LLM 実装では、この機能には FP16 KV キャッシュが必要であり、選択したエンジンとランタイムに対して有効化する必要があります。

| ターン | プレフィックス再利用なし | プレフィックス再利用あり |
| --- | --- | --- |
| 最初のリクエスト | システムプロンプトとユーザープロンプトがプリフェッチされ、その後 KV キャッシュに書き込まれます。 | 同じ初期プリフィルが必要です。 |
| 同じシステムプロンプトを持つ後続のリクエスト | 繰り返されるプレフィックスが再度プリフェッチされます。 | 一致するキャッシュ済みプレフィックスを再利用でき、新しい部分だけをプリフィルすればよい。 |

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/prefix_kv_cache.png" alt="Prefix KV cache reuse across repeated LLM requests"/>
</div>
これは、長いシステムプロンプトを持つエージェント、繰り返し利用されるドキュメントプレフィックスを持つ RAG ワークフロー、あるいは同じ画像プレフィックスを繰り返す VLM リクエストに特に有用です。最大の利点は、通常、ピークメモリ要件の削減ではなく、繰り返しプリフィル作業の削減と最初のトークンまでの時間短縮です。保持されたキャッシュページは依然としてメモリを消費し、プロンプト、画像、または画像の順序を変更すると、影響を受けるプレフィックスについては再利用ができなくなります。

Jetson デプロイでは、再利用が有効であると仮定するのではなく、実際に再利用されていることを検証してください。保持したいコンテキスト用に十分なページプール容量を構築し、ランタイムでコンテキスト再利用を有効にし、ランタイムプロファイルを確認します。キャッシュヒットしたリクエストでは、再利用トークン数が正の値として報告されるはずです。

コンテキスト容量と再利用を考慮に入れたうえで、残る疑問は、各生成トークンの内部で何が起こるかです。そこで TensorRT の実行最適化が重要になります。

### 2.5 JetPack 7.2 上の TensorRT：中間データ移動の削減

Transformer レイヤーは、正規化、量子化または逆量子化、行列乗算、活性化、アテンションなどの演算を組み合わせたものです。これらの演算が別々のカーネルとして実行される場合、あるカーネルが中間テンソルを書き出し、次のカーネルがそれをすぐに DRAM から読み戻すことになります。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/jetpack-7.2/transformer_layer.png" alt="Operations in a Transformer layer"/>
</div>

| 実行パス | DRAM をまたぐもの | Jetson で重要な理由 |
| --- | --- | --- |
| 個別カーネル | 各中間テンソルが、演算間で書き込みと読み出しを行います。 | 帯域幅使用量、一時的な割り当て、およびカーネル起動が増加します。 |
| 結合カーネル | 互換性のある演算が、最終結果が書き込まれる前にまとめて実行されます。 | 中間トラフィックとランタイムオーバーヘッドが減少します。 |

カーネルの結合は、モデルの重みや KV キャッシュのサイズを変えるものではありません。演算間で移動する作業データを削減するため、レイテンシを改善し、一時的なランタイム負荷を軽減できます。JetPack 7.2 の TensorRT 10.16.2 は、このエンジンパス向けの TensorRT バージョンを提供しますが、本記事は特定の結合が 7.2 で導入されたと主張するものではありません。利用可能な結合はモデルグラフとエンジンビルドに依存します。結合を固定のメモリ節約量として扱うのではなく、対象の Jetson 上で生成されたエンジンを計測してください。

結合はカーネルシーケンス内部の作業を削減します。とはいえ、デコードは生成される各トークンごとにそのシーケンスを繰り返すため、別のスケジューリングコストが残ります。

### 2.6 JetPack 7.2 ランタイムパス上の CUDA Graph

デコード中、LLM は 1 回の反復で 1 つまたはいくつかのトークンを生成し、同様の GPU 演算シーケンスが何度も実行されます。従来のパスでは、CPU がそのシーケンスを繰り返しサブミットします。

CUDA Graph は、互換性のある GPU シーケンスを一度記録し、後で単一のグラフ起動で再生します。

| デコード段階 | 従来の起動パス | CUDA Graph パス |
| --- | --- | --- |
| 初回の互換シーケンス | CPU が個々の GPU 演算を起動します。 | ランタイムがシーケンスをグラフとして記録します。 |
| 後続の反復 | CPU が各反復ごとにシーケンスを再度サブミットします。 | CPU が記録済みグラフを起動し、シーケンスが 1 単位として実行されます。 |

これはスケジューリングの最適化です。カーネル結合は主に中間メモリトラフィックを削減し、CUDA Graph は主に繰り返される CPU から GPU への起動オーバーヘッドを削減します。どちらもモデルの重みや KV キャッシュを小さくするものではありません。JetPack 7.2 システムでは、互換性のある TensorRT エンジンが更新された CUDA および TensorRT スタックをより有効に活用する 1 つの方法です。Jetson では、起動作業を減らすことで、GPU リソースと同様に CPU リソースと電力予算も制約されているため、エンドツーエンドの応答性を向上させることができます。

これらのメカニズムによって、ランタイムの全体像が完成します。量子化は固定された重みコストを下げ、KV キャッシュ設定は増大するコンテキストコストを制御し、結合は中間トラフィックを削減し、CUDA Graph は繰り返されるデコードスケジューリングを削減します。

### 2.7 各メカニズムを JetPack 7.2 にマッピングする

次の表は、JetPack 7.2 のレバーと、その上で使用されるランタイムメカニズムを区別します。

| レイヤーまたはメカニズム | JetPack 7.2 との関係 | デプロイの判断 | 測定すべき項目 |
| --- | --- | --- | --- |
| JetPack 7.2 プラットフォームのベースライン | OS、CUDA、および TensorRT のバージョンを提供し、再現可能な出発点を確立します。 | リリース、サービスセット、デスクトップターゲット、および電源モードを記録します。 | 安定したアイドルメモリとデバイス構成。 |
| Yocto または削減された 7.2 イメージ | 不要なシステムソフトウェアを削減するための、7.2 ベースの本番イメージの直接的な選択肢です。 | 必要なサービス、ドライバー、およびライブラリのみを含めます。 | アイドルメモリと必要機能の検証。 |
| 低精度の重み | 7.2 ランタイム環境内で行うモデルの選択です。 | サポートされるチェックポイントを選択し、出力品質を検証します。 | エンジンロード時のメモリとタスク品質。 |
| KV キャッシュ容量と再利用 | 自動的な 7.2 OS 機能ではなく、任意のランタイム機能です。 | ワークロードに合わせて、コンテキスト、バッチ、ページプール、および保持の上限を設定します。 | プリフィルピーク、安定したデコードメモリ、再利用トークン数、および TTFT。 |
| TensorRT の結合と CUDA Graph | 互換性のあるエンジンは、7.2 に含まれる CUDA/TensorRT スタックを活用できます。 | 対象の 7.2 デバイス上でエンジンをビルドし、プロファイルします。 | ランタイムピーク、デコードレイテンシ、およびスループット。 |

これが、Jetson において「よりメモリ効率が高い」と「より高速」が結びついている理由です。システムが物理的な DRAM を追加で獲得しているわけではありません。同じ共有 DRAM と帯域幅のうち、重み、キャッシュ、中間データ、およびスケジューリング作業がより意図的に管理されることで、より多くをワークロードに割り当てられるようになっているのです。

このマップを順番に使用してください。まずイメージとプラットフォームの予算を確立し、次にランタイムとモデルのフットプリントを測定し、そのうえで、ワークロード全体にまだヘッドルームがある場合にのみコンテキストと同時実行数を拡大します。

## 3. 既存の JetPack 7.2 ガイドとあわせてこの詳細解説を活用する

このページは、なぜアイドルフットプリントの削減、小さい重み、制限された KV キャッシュ、および互換性のあるランタイムが結びついているのかという予算の考え方を説明します。意図的に、JetPack 7.2 コレクションの他の部分ですでに維持されている運用手順を繰り返さないようにしています。

| 次のことが必要な場合… | このガイドを使用 | このページを開いたままにする目的… |
| --- | --- | --- |
| アイドル、エンジンロード、プリフィル、およびデコードメモリを測定し、サービスを削減する、または検証済み BSP 予約を変更する | [JetPack 7.2 Memory Optimization](/ja/jetpack_7_2_memory_optimization/) | 行動を起こす前に、どのメモリレイヤーが原因かを判断する。 |
| チェックポイントをエクスポートし、エンジンをビルドし、サポートされる精度を選択する、または TensorRT Edge-LLM をベンチマークする | [Deploy TensorRT Edge-LLM on JetPack 7.2](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/) | 重み、ワークスペース、および KV キャッシュが全体の予算にどのように収まるかを理解する。 |
| 本番志向でカスタマイズされた OS イメージをビルドする | [Build and Flash a Yocto Image](/ja/build_and_flash_yocto_for_recomputer_super_bk/) | より小さいシステムイメージが、追加の保守コストに見合うかどうかを判断する。 |
| 公開されている 6.2 と 7.2 の AGX Orin 結果を比較する | [JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) | 1 つの測定結果を普遍的なメモリ節約と見なすという誤りを避ける。 |

正しい手順はシンプルです。まずシステムのベースラインを確立し、選択したランタイムとモデルを計測し、その後は、完全なワークロードが予算内に収まっている場合にのみコンテキストまたは同時実行数を増やします。リンク先のガイドには、各ステップに必要なコマンド、安全確認、ロールバック手順、受け入れテストが含まれています。

## 4. フィールド観測：マーケティングではなく JetPack 7.2 を裏付ける証拠

公開されている AGX Orin 32 GB の比較とその図については、[JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) を参照してください。本記事では、LLM のメモリ予算を計画する際に、それらの結果をどのように解釈するかに焦点を当てます。

JetPack 6.2 と 7.2 の結果を比較する際は、リリースを 1 つの変数としてのみ扱ってください。モジュール、キャリアボード、モデルのチェックサム、コマンド、GPU オフロード、コンテキスト、生成トークン数、電源モード、`jetson_clocks` の状態、デスクトップターゲット、サービスセット、温度、サンプリングポイントは固定します。各実行ごとに L4T、CUDA、TensorRT のバージョンを記録してください。

重要なメモリ状態は 4 つあります：安定アイドル、エンジンまたはモデル読み込み後、プロンプトのプリフィル、そして定常デコードです。[Memory Optimization guide](/ja/jetpack_7_2_memory_optimization/) では、これらの状態に対する収集コマンドと解釈方法を提供しています。1 つの状態で取得した数値だけでは、JetPack 7.2、CUDA、TensorRT がワークロード全体のメモリ改善を引き起こしたことを証明することはできません。

## 参考文献

- [TrendForce — AI Server Demand Continues to Support Memory Prices in 3Q26](https://www.trendforce.com/presscenter/news/20260703-13134.html)：最近の DRAM および NAND の契約価格見通し。
- [NVIDIA Developer Blog — Deploy Agentic-Ready AI at the Edge with Memory Efficiency in NVIDIA JetPack 7.2](https://developer.nvidia.com/blog/deploy-agentic-ready-ai-at-the-edge-with-memory-efficiency-in-nvidia-jetpack-7-2/)：JetPack 7.2 におけるメモリ最適化のノウハウと公式 Yocto サポート。
- [NVIDIA JetPack 7.2 Downloads / Release Notes](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2)
- [NVIDIA TensorRT-Edge-LLM](https://github.com/NVIDIA/TensorRT-Edge-LLM)：エッジツールチェーン、サポートされるモデル、およびサンプルのバージョン管理されたソース・オブ・トゥルース。
- [NVIDIA TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM)：LLM ランタイム、エンジン構築、機能ドキュメント、およびカーネル融合と CUDA Graph 最適化ドキュメントのソース。
- [TensorRT Edge-LLM KV Cache Reuse](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/features/kv-cache-reuse.html)：サポート条件、ページプール容量、ランタイムでの有効化、および再利用検証。
- [NVIDIA TensorRT KV Cache Documentation](https://docs.nvidia.com/deeplearning/tensorrt/latest/inference-library/transformers-kv-cache.html)：一般的な KV キャッシュ管理および構成の概念。

## 関連ページ

- [JetPack 7.2 Memory Optimization](/ja/jetpack_7_2_memory_optimization/) — スキルベースの監査、ヘッドレス / カメラなし BSP の回収、SWIOTLB の安全性、メモリ削減 LLM 推論設定。
- [Deploy TensorRT Edge-LLM on JetPack 7.2](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/) — ホストでのエクスポート、ターゲットでのエンジンビルド、および C++ 推論検証。
- [JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) — Jetson AGX Orin 推論で何が変わるのか、そして Seeed による JetPack 7.2 と 6.2 の比較。
- [JetPack 7.2 Resource Hub](/ja/jetpack_7_2_resource_hub/) — Seeed Studio デバイス向け JetPack 7.2 リソースのカテゴリ別インデックス。

## 技術サポート & 製品ディスカッション

Seeed Studio の製品をお選びいただきありがとうございます。技術サポートおよび製品に関するディスカッションには、以下のチャネルをご利用ください。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
