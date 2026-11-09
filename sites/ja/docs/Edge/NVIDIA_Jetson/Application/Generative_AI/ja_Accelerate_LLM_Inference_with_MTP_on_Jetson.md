---
title: NVIDIA Jetson AGX Orin 上の llama.cpp を MTP で高速化
description: NVIDIA Jetson AGX Orin 上の llama.cpp で Multi-Token Prediction を有効化します。Qwen3.5-4B のセットアップ手順に従い、MTP ON/OFF のベンチマーク結果を比較します。
keywords:
  - NVIDIA Jetson
  - Jetson AGX Orin
  - MTP
  - Multi-Token Prediction
  - speculative decoding
  - llama.cpp
  - Qwen3.5
  - edge AI
slug: /jetson/accelerate_llm_inference_mtp
draft: false
image: https://files.seeedstudio.com/wiki/Jetson/Application/jetson-mtp-cover-en.png
last_update:
  date: 10/23/2026
  author: zibo
createdAt: '2026-10-23'
updatedAt: '2026-10-23'
url: https://wiki.seeedstudio.com/ja/jetson/accelerate_llm_inference_mtp/
---

# NVIDIA Jetson AGX Orin 上の llama.cpp を MTP で高速化
<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-mtp-cover-en.png" alt="NVIDIA Jetson のイラストと、Qwen3.5-4B、llama.cpp、MTP のトークンフロー図。" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

この wiki では、Multi-Token Prediction（MTP）の仕組みと、**NVIDIA Jetson AGX Orin 上の llama.cpp で Qwen3.5-4B を用いて MTP を有効化する方法**を説明します。セットアップ手順に従い、ローカルの群衆監視デモを使って MTP ON/OFF の性能を比較します。

まず、実際のテスト結果を見てみましょう。LLM にフィボナッチ数列を計算する Python スクリプトを生成させ、MTP モデルを有効にした場合と無効にした場合で生成速度を比較しました。

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/mtp_vs.gif" alt="左が MTP OFF、右が MTP ON の状態で、Jetson AGX Orin 上の Qwen3.5-4B によるフィボナッチコード生成を比較。" />
</div>

MTP モードを有効にしていない場合、Qwen3.5 4B モデルは約 25.6 tokens/s のレートでトークンを出力しますが、MTP モードを有効にすると、同じデバイス上の同じモデルで 49.7 tokens/s の生成速度に達します。このような比較的決定的な内容では、モデルの生成速度がほぼ 2 倍になっていることが分かります。ここから分かるように、ある程度パターン化されたタスクでは、MTP モードを有効にすることでかなりの性能向上が期待できます。

別のビジュアル解析シナリオも見てみましょう。ROI 領域を定義し、その ROI 内の人数が 1.5 秒間にわたって 5 人以上を維持しているかを監視します。条件を満たした場合、LLM を呼び出して異常解析と診断を行います。ビジュアル解析シナリオにおいて、MTP モードを有効にするとどれくらい高速化されるか見てみましょう。

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/mtp_demo.gif" alt="左に動画ベースの ROI トラッキング、中央と右に MTP OFF/ON の群衆解析結果パネル。" />
</div>

ご覧のとおり、上記のシナリオでは、MTP モードを有効にすることでタスク完了時間を約 3 秒短縮できます。この最適化はかなり大きな効果があります。



## なぜ LLM のテキスト生成には時間がかかるのか？

### 1 トークンずつ生成する仕組み

NVIDIA Jetson がどこで使われるかモデルに尋ねると、ロボティクス、産業用ビジョン、エッジ監視などと答えるかもしれません。文が徐々に表示されるのは、自己回帰型 LLM が 1 トークンを予測してコンテキストに追加し、そのコンテキストを使って次のトークンを予測するためです。

トークンは単語、単語の一部、または句読点である場合があります。各新しい予測はそれ以前の内容に依存するため、モデルは応答が完了するまでこのプロセスを繰り返します。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/autoregressive-token-generation-en.png" alt="自己回帰デコーディングでは、各生成トークンをコンテキストに追加してから次を予測する。" loading="lazy" />
</div>

20 tokens/s の場合、500 トークンを生成するには約 25 秒のデコード時間が必要です。ローカルアシスタントがコードやレポートを書くとき、この待ち時間は無視できないものになります。

### Prefill と decode

LLM 推論には主に 2 つのステージがあります。

| ステージ | 主なタスク | 特徴 |
| --- | --- | --- |
| Prefill | プロンプトを読み込み、コンテキスト状態を構築する | 入力位置は並列に処理できる |
| Decode | 応答を生成する | 後続トークンは先に生成された出力に依存する |

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/prefill-vs-decode-en.png" alt="左でプロンプトを処理する Prefill、右で出力トークンを段階的に生成する Decode。" loading="lazy" />
</div>

Jetson 上で単一ユーザー向けに LLM を動かす場合、decode ステージでは多くの時間をモデルの重みやキャッシュされたコンテキストをメモリから読み出すことに費やします。GPU には並列計算能力がありますが、1 トークンずつのステップが続くと、その能力を十分に活かせない場合があります。MTP は主にこの decode ステージを対象としています。

## Multi-Token Prediction とは？

Multi-Token Prediction では、将来のトークンを提案するための追加の予測ヘッドやレイヤーを学習させます。これらの候補は speculative decoding で使用され、ターゲットモデルが複数の位置をまとめて検証してから出力として採用します。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/autoregressive-vs-mtp-en.png" alt="左が標準的なデコーディング、右が MTP による候補ドラフトとターゲットモデルによる検証。" loading="lazy" />
</div>

複数の候補が検証を通過すると、ターゲットモデルの 1 回のパスで応答が複数トークン分進みます。候補が失敗した場合、ランタイムは受理されたプレフィックスを保持し、拒否された候補と残りのドラフトを破棄します。その地点からターゲットモデルが処理を続行します。

提案が十分に正確であれば、逐次的なデコードパスの回数を減らすことができます。ターゲットモデルは依然として出力を検査します。正しく損失のない speculative decoding であれば、貪欲デコードの結果やサンプリング分布は保持されますが、量子化やランタイムの数値的な違いが実際の挙動に影響する可能性があります。

[multi-token prediction の論文](https://arxiv.org/abs/2404.19737)では学習のアイデアが説明されています。[llama.cpp の speculative decoding ドキュメント](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)では推論時の使い方が解説されています。

## なぜ MTP は高速になり得るのか？

### 1 回の検証でより多くの有用な出力を得る

バッチ検証により、ターゲットモデルは複数の候補をまとめてチェックできます。メモリ帯域がボトルネックのワークロードでは、同じトークン数を個別の逐次パスで生成するよりもコストを抑えられる場合があります。

ドラフト生成と検証にも時間はかかります。MTP が生成を高速化するのは、節約できる処理量がこの追加コストを上回る場合だけです。有用な診断指標としてドラフト受理率があります。これは、生成されたドラフトトークン数に対する受理されたドラフトトークン数の比率として計算します。また、各検証で応答がどれだけ前進したか、リクエスト全体にどれだけ時間がかかったかも測定してください。

### ドラフトの深さは検証が必要

最大ドラフト長は `--spec-draft-n-max` で制御します。ドラフトを長くすると、ターゲットモデルが検証できる候補が増えますが、後半の候補ほど精度が低くなる可能性があります。それらを破棄するコストが、より大きなバッチの利点を上回ることもあります。

まずは浅い深さから始め、自分のプロンプトで比較してみてください。Edge Crowd Agent の比較では深さ 2 を使用しています。定型的なコードやレポート形式でうまく機能する設定でも、別のワークロードでは挙動が異なる場合があります。

## Jetson 上の llama.cpp で MTP を有効化する

このデモでは、次の構成を使用します。

| コンポーネント | 構成 |
| --- | --- |
| ハードウェア | NVIDIA Jetson AGX Orin 32GB |
| JetPack | 6.2.1 |
| ランタイム | CUDA 対応 llama.cpp |
| モデル | MTP テンソル付き Qwen3.5-4B |
| 量子化 | Q4_K_M GGUF |
| 比較 | MTP OFF / MTP ON |

[公式ビルド手順](https://github.com/ggml-org/llama.cpp/blob/master/docs/build.md)に従って、CUDA 対応の llama.cpp をビルドします。[MTP 対応 Qwen3.5-4B GGUF](https://huggingface.co/unsloth/Qwen3.5-4B-MTP-GGUF) を選択し、ビルドしたバイナリのヘルプ出力に `draft-mtp` が含まれていることを確認します。

ランタイムの準備ができたら、MTP の起動コマンドは短くて済みます。

```bash
llama-server \
  -hf unsloth/Qwen3.5-4B-MTP-GGUF:Q4_K_M \
  -ngl 99 -c 8192 -np 1 \
  --spec-type draft-mtp \
  --spec-draft-n-max 2
```

ビルドした中の `llama-server` バイナリを使用します。モデルをダウンロード済みの場合は、`-hf` を `-m` とローカル GGUF パスの組み合わせに置き換えてください。

`--spec-type draft-mtp` で MTP を有効化し、`--spec-draft-n-max` でその深さを制御します。OFF との比較には `--spec-type none` を使用し、モデルと共有設定は変更しないでください。

生成後、起動ログで読み込まれた MTP テンソルと、サーバーのドラフト受理統計を確認します。このセットアップではスロットを 1 つにし、テキストのみのリクエストを使用してください。最新の互換性制限については、[モデル公開者の手順](https://huggingface.co/unsloth/Qwen3.5-4B-MTP-GGUF)を参照してください。


## MTP はどこで役立つか？

### 点検・監視レポート

Jetson は検出結果、センサー値、装置ログを収集し、ローカル LLM に点検レポートの作成を依頼できます。繰り返し現れる項目や記述があるため、候補受理率をテストするのに適したワークロードです。利点は、レポートの完成を待つ時間が短くなることであり、リアルタイム制御や保護機能は別に維持されます。

### ローカルのコーディングアシスタント

Python スクリプト、シェルコマンド、デバイス設定ファイルなどは、比較的長く、構文が規則的な応答を生成することが多いです。イントロダクションのフィボナッチの例は、このデバイスでの可能性を示しています。生成されたコードは依然として確認とテストが必要です。

### オフライン音声アシスタントとロボット

音声アシスタントは、認識した音声をローカル LLM に渡し、その応答をテキスト読み上げに送ります。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/jetson-voice-assistant-pipeline-en.png" alt="音声認識からローカル LLM を経て音声合成に至る音声アシスタントのパイプライン。" loading="lazy" />
</div>

MTP は、長めの応答に対して LLM の decode ステージを短縮できます。音声認識、音声合成、ストリーミングが、ユーザーが実際に応答を聞くタイミングを決めるため、完全な応答時間だけでなく、最初の有用な音声が出るまでの時間も測定してください。

### ローカルナレッジと技術的な説明

トラブルシューティング手順や、デバイスログに基づく長い回答では、出力生成にかなりの時間を費やすことがあります。これらはテストする価値があります。一行の回答だけが必要な長文ドキュメントの場合、プロンプト処理が支配的となり、節約できる decode 時間がほとんどないこともあります。

## MTP を有効にする価値があるのはどんなときか？

まず、互換性のあるモデルが必要です。ランタイムはその予測コンポーネントをサポートしている必要があり、追加のドラフト生成処理が、使用しているハードウェアとプロンプト上で十分な効果を発揮しなければなりません。受理率が高く出力が長いほど有利になることが多い一方で、受理率が低い場合や非常に短い応答では、MTP の方が遅くなる可能性があります。

実際にアプリケーションが必要とする時間を比較してください。デコードが高速になっても、画像処理、ツールの実行、モデルの読み込みが同じ割合で短縮されるわけではありません。モデル、入力、出力の制限、およびサンプリング設定を揃えたうえで、計測結果を見て判断してください。

## 群衆監視デモを試す

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/Jetson/Application/pipeline.png" alt="ビデオ検出と ROI アラートからローカル LLM ツールとレポートまでの Edge Crowd Agent パイプライン（MTP ON/OFF デコード付き）。" loading="lazy" />
</div>

冒頭のデモンストレーションのソースは [Edge Crowd Agent](https://github.com/zibochen6/edge-crowd-agent) です。YOLO11n と ByteTrack が現在の ROI 占有状況を計測し、イベントがトリガーされるとローカル LLM が保存された人数と動きの証拠を説明します。

依存関係、モデルとビデオパス、環境チェック、起動方法については、**[README の Start on Jetson](https://github.com/zibochen6/edge-crowd-agent#start-on-jetson)** に従ってください。このプロジェクトは、JetPack の TensorRT バインディングへのアクセスを維持するために、システムの Python 3.10 とともに uv を使用します。

起動後、MTP を OFF または ON に設定し、**Start demo** を選択します。ビデオ検出は左側に表示され、右側に解析とツールの進行状況が表示されます。[recording guide](https://github.com/zibochen6/edge-crowd-agent#record-off-and-on) では、両方のデモを実行する方法を説明しています。

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/Jetson/Application/mtp_demo.gif" alt="左側にビデオベースの ROI トラッキング、中央と右側のパネルに MTP OFF および ON の群衆解析結果。" />
</div>

デフォルトのイベント条件は、ROI 内に少なくとも 5 人が 1.5 秒間連続して映っていることです。LLM はビデオピクセルではなく構造化された証拠を受け取ります。短いトラックは占有状況の評価には役立ちますが、意図や長時間の滞留を立証することはできません。

制御された比較を行うには、2 つの別々の録画ではなく、同じ固定イベントを使用してください。README の [benchmark セクション](https://github.com/zibochen6/edge-crowd-agent#benchmarks-and-measured-latency) には、テスト方法と計測結果が記載されており、モデルの読み込み時間は別途一覧化されています。

## 参考文献

- [Edge Crowd Agent のソースコードと使用方法](https://github.com/zibochen6/edge-crowd-agent)
- [Edge Crowd Agent のベンチマーク記録](https://github.com/zibochen6/edge-crowd-agent/blob/main/docs/measurements/behavior-v3-fast.json)
- [Jetson AI Lab speculative decoding チュートリアル](https://www.jetson-ai-lab.com/tutorials/speculative-decoding/)
- [llama.cpp speculative decoding ドキュメント](https://github.com/ggml-org/llama.cpp/blob/master/docs/speculative.md)
- [llama.cpp SPEED-Bench](https://github.com/ggml-org/llama.cpp/tree/master/tools/server/bench/speed-bench)
- [Qwen3.5-4B MTP GGUF モデル](https://huggingface.co/unsloth/Qwen3.5-4B-MTP-GGUF)
- [Better & Faster Large Language Models via Multi-token Prediction](https://arxiv.org/abs/2404.19737)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
