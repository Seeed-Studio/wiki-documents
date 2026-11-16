---
description: Jetson Orin Nano 8GB と Orin NX 16GB 上で、TensorRT YOLO、NVDEC、H.264 エンコード、電力、レイテンシ、サーマルモニタリングを用いて、4ストリーム 4K 産業用ビデオ解析を測定します。
title: Jetson Orin Nano と Orin NX による 4K 産業用ビジョンベンチマーク
keywords:
  - Jetson Orin Nano
  - Jetson Orin NX
  - TensorRT
  - YOLOv8
  - NVDEC
  - NVENC
  - H.264
  - 産業用ビジョン
  - ベンチマーク
tags:
  - コンピュータビジョン
  - YOLO
  - Jetson
  - ベンチマーク
image: https://files.seeedstudio.com/wiki/other/rugged-benchmark-front.png
slug: /jetson-orin-industrial-vision-benchmark
last_update:
  date: 11/14/2026
  author: Dayu
createdAt: '2026-11-13'
updatedAt: '2026-11-14'
url: https://wiki.seeedstudio.com/ja/jetson-orin-industrial-vision-benchmark/
---

[![reComputer Rugged industrial vision benchmark](https://files.seeedstudio.com/wiki/other/rugged-benchmark-front.png)](https://files.seeedstudio.com/wiki/other/rugged-benchmark-front.png)

<div className="jetson-product-page">
  <div className="jetson-product-actions" style={{justifyContent: 'center'}}>
    <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">reComputer Rugged J4012 を入手 ↗</a>
  </div>
</div>

1枚の画像に対して YOLO を実行しても、産業用ビデオシステムのごく一部しか測定できません。実運用のアプリケーションでは、複数ストリームのデコード、フレームの移動とリサイズ、推論の実行、録画のエンコード、プレビューの提供を、メモリと電力を共有しながら行う必要があります。

このプロジェクトでは、その完全なワークロードを **Jetson Orin Nano 8GB** と **Jetson Orin NX 16GB** 上で計測します。4本のネイティブ 4K H.264 産業用クリップを、TensorRT FP16 YOLOv8n 検出器、H.264 録画ブランチ、ブラウザダッシュボードに入力します。計測結果から、CPU エンコード、フレームスケジューリング、冷却がどこで結果に影響するかが分かります。

**Orin Nano には NVENC ハードウェアがありません。** その録画ブランチは **CPU x264 エミュレーション** を使用し、NVENC 機能の代替として実際の H.264 フレームを生成します。性能データは完了した処理から測定されています。Orin NX はハードウェア NVENC エンコーダを使用します。

同じ4つのソースファイル、逐次推論、および録画ターゲットにおいて、**Orin NX は推論スループットが 1.33 倍、正規化 CPU 負荷が 63.3% 低く、エンドツーエンドレイテンシが 69.7% 低い** アプリケーション実行結果を示します。

[![Four-stream application performance on Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-performance-overview.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-performance-overview.png)

**Jetson Orin Nano 8GB — CPU x264 エミュレーション**

[![Jetson Orin Nano 8GB industrial vision dashboard with CPU x264 emulation](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261114-nano-dashboard-jp62.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261114-nano-dashboard-jp62.png)

**Jetson Orin NX 16GB — ハードウェア NVENC**

[![Jetson Orin NX 16GB industrial vision dashboard with hardware NVENC](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-dashboard.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-dashboard.png)

## テストプラットフォームとワークロード

| 構成 | Jetson Orin Nano 8GB | Jetson Orin NX 16GB |
|---|---|---|
| モジュール識別 | Orin Nano 8GB | Orin NX 16GB |
| JetPack デプロイターゲット | 6.2 | 5.1.3 |
| Jetson Linux | L4T 36.4.3 | L4T 35.5 |
| CUDA | 12.6.10 | 11.4 |
| TensorRT | 10.3.0 | 8.5.2 |
| 設定された電力モード | 25W | MAXN |
| 実行時周波数制限 | デフォルト DVFS | CPU 1.50 GHz; GPU 816 MHz |
| CPU 正規化 | 6 コア平均 | 8 コア平均 |
| ビデオデコーダ | NVDEC | NVDEC |
| H.264 エンコーダ | CPU x264 エミュレーション; NVENC なし | ハードウェア NVENC |
| 推論構成 | 逐次バッチ 1、FP16 | 逐次バッチ 1、FP16 |
| 報告された実行中の冷却 | 受動冷却 | 受動冷却 |

上記のソフトウェアバージョンはデプロイターゲットを示します。Nano ターゲットは JetPack 6.2 ソフトウェアスタックに従いますが、以前に記録されたベンチマークトレースはこのターゲットイメージ上では再実行していません。電力モードはモジュールの設定電力予算を示し、記録された実行中の Nano の測定平均モジュール入力電力は 11.02 W です。

モデルは YOLOv8n で、640×640 レターボックス入力、信頼度しきい値 0.30、IoU しきい値 0.45 を使用します。デコードとエンコードはネイティブの **3840×2160** 解像度を維持します。「4K 解析」はビデオパイプラインを表し、検出器自体はリサイズされた画像を処理します。

4本のアクティブクリップは倉庫および工場の動作をカバーします：

| チャンネル | シーン | ネイティブフレームレート | ソース |
|---|---|---:|---|
| 1 | 倉庫の通路 | 25 FPS | [Men Working in a Warehouse](https://www.pexels.com/video/men-working-in-a-warehouse-4281405/) |
| 2 | マテリアルハンドリング | 25 FPS | [Video of Man Loading Cart](https://www.pexels.com/video/video-of-man-loading-cart-4284185/) |
| 3 | 工場の生産ライン | 24 FPS | [Wide View of Modern Factory Production Line](https://www.pexels.com/video/wide-view-of-modern-factory-production-line-30715848/) |
| 4 | 繊維工場のオペレーション | 25 FPS | [Documentary Filming Inside Textile Factory](https://www.pexels.com/video/documentary-filming-inside-textile-factory-39533716/) |

これらのソースを合わせると、毎秒 99 フレームのメディアになります。クリップはワークロード用にループされ、[Pexels License](https://www.pexels.com/license/) によってカバーされています。この実験では全体を通して H.264 を使用します。

## パイプラインアーキテクチャ

デコードされたフレームは、録画と推論に分岐する前に NVMM 内に保持されます：

```text
3840×2160 H.264 → NVDEC → NVMM
                           ├─ Recording
                           │    NX:   hardware NVENC → 4K H.264
                           │    Nano: VIC → CPU-accessible I420 → x264 → 4K H.264
                           │
                           └─ VIC resize to 640×360
                                → CPU letterbox/preprocessing to 640×640
                                → TensorRT FP16 YOLOv8n
                                → CPU class-aware NMS
                                → detection results

Independent 640×360 JPEG preview worker → browser
Latest completed detections → preview overlays
```

Nano エンコーダは x264 の `ultrafast` プリセット、`zerolatency` チューニング、ストリームあたり 2 スレッド、スライススレッディング、B フレームなし、10,000 kbit/s ターゲットを使用します。制限付き録画キューは、負荷が高いときに古いフレームをドロップし、推論を継続できるようにします。エンコードされたフレームと出力バイト数は、実際のエンコード完了後にカウントされます。

**VIC 変換と TensorRT 推論は、GPU H.264 ビットストリームエンコードを提供しません。** Nano 上の NVENC アクティビティは利用不可として報告され、不足しているエンコーダに対してハードウェア使用率の値を捏造することはありません。

持続的な Nano 実行では、ストリームあたり 5 FPS のエンコードメディア時間ターゲットを選択します。これにより、CPU メモリへの変換前の録画処理が削減されます。この設定は、実時間 1 秒あたり 20 フレームの完了を保証するものではありません。実際の入力進行とエンコーダ能力が、依然として出力スループットを決定します。ダッシュボードは、実際のエンコード FPS とエンコードカバレッジの両方を報告します。

## 測定内容

NX 上の 4 本のビデオファイルは、Nano リファレンスに対して SHA256 で検証されています。両方の持続実行は、4 ストリーム、ソースペーシング、逐次 TensorRT バッチ 1、ストリームあたり 5 FPS の録画メディア時間ターゲット、15 FPS のプレビュー生成、10 分間の収集を使用します。サマリでは最初の 30 秒を除外します。これは、エンコーダバックエンドと動作点が異なるデプロイ済みシステムの測定であり、GPU 単体の比較ではありません。

- **Nano 持続実行:** 2026年11月13日 10:08:04–10:18:04（UTC+08）、599.83 秒間で 582 サンプル。
- **NX 持続実行:** 2026年11月13日 13:47:26（UTC+08）から 2026年11月13日 13:57:27（UTC+08）まで、599.86 秒間で 582 サンプル。CPU/GPU 周波数制限は上記の通りです。Visual Hub は収集中は一時停止され、その後復帰させました。
- **NX フルレート録画セグメント:** 別キャプチャの最初の 99.72 秒で、録画上限を外し、動的推論バッチングを有効にしています。予定していた 150 秒キャプチャは、99°C の測定ガードに達した時点で停止しました。この短いキャパシティセグメントでは、最初の 30 秒を除外し、ソースペーシングと同じ周波数制限を維持しています。

バックエンドのプレビュー生成は収集中も有効のままであり、追加のブラウザプレビュークライアントは、持続測定が終了した後にのみ開きます。

スループットは、要求された FPS ではなく完了したフレーム数をカウントします。両方の持続サマリは、カウンタ差分とモジュールの積算エネルギーを使用します：

```text
Throughput (FPS)       = completed frames / elapsed seconds
Average module power  = integrated module energy / elapsed seconds
Encoding coverage     = encoded frames / decoded frames
```

カーブ凡例は最終サンプル値を示し、サマリテーブルはウォームアップ後のカウンタ差分を使用します。

電力は INA3221 の **module VDD_IN** レールから取得しています。これは別電源の周辺機器を含まず、壁コンセントからの電力でもありません。CPU 負荷は各モジュールのコア数で正規化されています。NVDEC/NVENC アクティビティのパーセンテージは、20 Hz での非ゼロカウンタサンプルの割合を表しており、較正されたハードウェア使用率測定ではありません。

## 4 ストリームの結果

| 指標 | Orin Nano 8GB | Orin NX 16GB |
|---|---:|---:|
| デコードスループット合計 | 65.24 FPS | 98.63 FPS |
| 推論スループット合計 | 58.82 FPS | 78.06 FPS |
| H.264 エンコードスループット合計 | 13.24 FPS、CPU x264 | 20.00 FPS、NVENC |
| CPU 負荷 | 49.34% | 18.10% |
| GPU 負荷 | 30.49% | 54.68% |
| エンドツーエンドレイテンシ、ローリング P95 平均 | 1108.46 ms | 335.57 ms |
| モジュール入力電力 | 11.02 W | 15.76 W |
| 測定された最高温度 | 58.19°C | 97.38°C |
| サーマルスロットリングサンプル数 | 0 | 0 |

### スループットとエンコード負荷

[![Decode, inference, and encoding throughput: Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-throughput-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-throughput-comparison.png)

個別のカーブ： [Nano スループット](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-throughput.png) · [NX スループット](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-throughput.png)。

NX は同じ 4 つのソースファイルで、推論 78.06 FPS、デコード 98.63 FPS を維持します。Nano は推論 58.82 FPS、デコード 65.24 FPS を完了します。両方ともストリームあたり 5 FPS の録画ターゲットを使用しており、実際に完了した録画レートはそれぞれ 20.00 FPS と 13.24 FPS です。

### フルレート NVENC 録画

NX の録画上限を外すと、推論を 75.63 FPS で継続しながら、**4K H.264 エンコード合計 98.51 FPS** を達成します。デコードスループットは 98.51 FPS、正規化 CPU 負荷は 12.79%、モジュール電力は 16.88 W です。この短いキャパシティセグメントは、動的推論バッチングとソースレート録画を使用しており、10 分間の耐久結果ではありません。

[![NX full-rate hardware H.264 recording workload](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-full-rate-throughput.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-full-rate-throughput.png)

ハードウェア NVENC により、録画ブランチは検出処理とシステムを共有しながら、ソースレートの 4K ワークロードを処理できます。Nano の CPU x264 代替では、アプリケーションの他の部分を保護するために、明示的な録画用リソース予算が必要です。

### 計算負荷と消費電力

[![CPU load, GPU load, and module power: Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-load-and-power-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-load-and-power-comparison.png)

個別のカーブ: [Nano の負荷と電力](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-load-and-power.png) · [NX の負荷と電力](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-load-and-power.png)。

Nano では、x264 が前処理、後処理、プレビュー生成、およびアプリケーションスレッドと CPU リソースを共有します。そのため、GPU 負荷だけではパイプライン容量を説明できません。NX のハードウェア NVENC は、CPU によるビットストリームエンコードとは独立して録画ブランチを処理しますが、デコード、メモリトラフィック、および熱的制約は依然としてアプリケーションに影響します。

### 温度と冷却

[![CPU, GPU, and maximum sensor temperature: Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-temperature-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-temperature-comparison.png)

個別のカーブ: [Nano の温度](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-temperature.png) · [NX の温度](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-temperature.png)。

Nano は最大 58.19°C に達しました。持続運転した NX は 97.38°C でピークに達し、サンプリングされたサーマルスロットリングイベントは 0 件でした。事前の制限なし MAXN キャプチャは 99°C で停止されました。そのため、持続運転の結果は上記の CPU/GPU 制限を使用しています。ハードウェアの熱保護は有効なままです。

両デバイスともパッシブ冷却を使用しています。周囲温度と同等の冷却アセンブリは制御されていないため、これらのセッションからモジュール間の熱的優位性は確立できません。

### エンドツーエンドレイテンシ

[![End-to-end latency histories: Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-latency-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-latency-comparison.png)

個別のカーブ: [Nano のレイテンシ](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-latency.png) · [NX のレイテンシ](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-latency.png)。

両方のカーブは、デコーダ入力から検出後処理完了までを測定した、**チャネルごとの最悪ローリング P95** を示しています。ウォームアップ後の時間加重平均は Nano が 1108.46 ms、NX が 335.57 ms であり、この記録された統計値において 69.7% の削減となります。

これらはパイプライン全体のレイテンシ測定であり、TensorRT 実行時間だけを切り出したものでも、10 分間の実行中の全フレームに対して P95 を再計算したものでもありません。両方のカーブと両方の要約値は、同じローリング統計を使用しています。

### メモリ動作

[![Device memory usage: Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-memory-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-memory-comparison.png)

個別のカーブ: [Nano のメモリ](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-memory.png) · [NX のメモリ](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-memory.png)。

カーブは、各デバイスで利用可能な RAM に対する実際のデバイスメモリ使用率を示しています。Nano は実行中に 35.6% から 71.2% まで上昇し、アプリケーション RSS は約 2,108 MiB から 4,695 MiB まで増加します。新しい持続運転では、NX のメモリは 37.3% から 43.6% まで上昇し、アプリケーション RSS は 1277 MiB で終了しました。Nano におけるより大きな増加は、この測定では未解決のままです。10 分間の許容可能な温度とスループットだけでは、連続運転におけるメモリ安定性は確立できません。

## 検出プレビューとダッシュボードの挙動

[![Four industrial detection views from Orin Nano and Orin NX](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-detection-comparison.png)](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-detection-comparison.png)

個別のプレビュー: [Nano の検出](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-nano-detection.png) · [NX の検出](https://files.seeedstudio.com/wiki/other/jetson-industrial-vision-20261113-rerun-nx-detection.png)。

ブラウザは、選択可能な 5 または 15 FPS ターゲットを持つ独立した 640×360 JPEG プレビューを使用します。各チャネルは 1 つの未処理フレーム要求を持ち、新しいフレームを描画し、古いフレームのキューが蓄積されることを避けます。生成されたプレビュー FPS、ブラウザ表示 FPS、推論 FPS、およびビデオエンコード FPS は個別に報告されます。

バウンディングボックスは、最新の検出完了結果を使用します。オーバーレイはその更新からの経過時間を表示し、新しい結果が 300 ms 間得られない場合はボックスを非表示にします。その結果、ブラウザ画像が滑らかであっても、表示されるすべてのフレームが推論済みであるとは限らず、これらのオーバーレイはオブジェクトトラッキングではありません。

両方のダッシュボード図は、記録されたテレメトリと完了した実行のサマリをレンダリングします。Nano のテレメトリは 11 月 13 日 10:18:04（UTC+08）時点のもので、そのプレビューピクセルは 11:05:05 に別途キャプチャされました。NX のテレメトリとプレビューピクセルは、持続運転後の 13:57:34（UTC+08）にキャプチャされました。ダッシュボードの瞬時値はウィンドウ平均と異なる場合があり、プレビューシーンはデバイス間で同期されていません。

YOLOv8n は汎用の COCO80 クラスを使用します。これらのプレビューは、産業シーンにおける人物および物体検出を示すものであり、PPE、欠陥検出、または産業用途での精度ベンチマークを主張するものではありません。

## 測定手法の再現

録画バックエンドを選択する前に、実際のモジュール ID とインストール済みソフトウェアを確認してください。キャリアボードのデバイスツリーモデル文字列だけでは、モジュールを区別するには不十分な場合があります。ここで使用した Orin Nano 8GB の ID は、モジュール EEPROM から検証されました。

Jetson インストールで有用な確認事項には次のようなものがあります:

```bash
cat /etc/nv_tegra_release
/usr/local/cuda/bin/nvcc --version
python3 -c "import tensorrt as trt; print(trt.__version__)"
sudo nvpmodel -q
gst-inspect-1.0 nvv4l2decoder
gst-inspect-1.0 nvv4l2h264enc
gst-inspect-1.0 x264enc
```

Nano では、存在しない NVENC プラグインを動作するハードウェアエンコーダとして報告してはなりません。出力コーデックと解像度を個別に検証し、キューに投入したフレーム数ではなく、エンコード完了フレーム数を数えてください。TensorRT エンジンは、対象モジュールとソフトウェアスタック向けにビルドする必要があります。

再現性のある実行のために、ソースファイルとそのチェックサム、モデル設定、電源モード、冷却状態、エンコーダターゲット、ペーシングポリシー、プレビュー設定、および測定タイムスタンプを保持してください。ワークロードの前にモニタリングを開始し、短時間の容量テストと持続運転を区別します。チャネルごとのカウンタを保持し、集計スループットによって停止したカメラが隠されないようにします。

ダッシュボードは、同じバックエンドからフロントエンドアセットと測定 API を提供します。各カーブは個別にエクスポートできます。これにより、単一の好ましい FPS 値を選ぶのではなく、スループットを電力、温度、レイテンシ、メモリと合わせて確認することが可能になります。

## 実運用での選択肢

- **フルレートのマルチストリーム 4K 録画には、エンコーダ用の予算を確保する。** NX のハードウェア NVENC ブランチは、ソースレート録画実行で 98.51 エンコード FPS に到達しました。Nano の CPU x264 代替では、録画レート用の予算と、可視フレームカバレッジが必要です。
- **パイプライン全体をチューニングする。** 以前の Nano の短いスイートでは、制限付きエンコーダ構成の下で、逐次推論で 56.82 推論 FPS、バッチ処理で 51.70 FPS が測定されました。バッチサイズだけではアプリケーションスループットを予測できませんでした。
- **冷却とメモリを運用上の制約として扱う。** 持続運転時の NX の動作ポイントは、明示的な周波数制限を使用しています。Nano の記録にはメモリ増加が含まれます。より長い耐久運転中は、温度、スロットリング、およびメモリを監視してください。
- **表示の滑らかさとは別に鮮度を測定する。** ブラウザ FPS は提示（プレゼンテーション）を表します。デコーダから検出までのレイテンシは、結果がアプリケーションで利用可能になるタイミングを表します。

## 関連リソース

- [Deploy YOLOv8 with TensorRT on Jetson](https://wiki.seeedstudio.com/ja/YOLOv8-TRT-Jetson/)
- [AI NVR with Jetson Orin](https://wiki.seeedstudio.com/ja/ai_nvr_with_jetson/)
- [Pexels License](https://www.pexels.com/license/)

## 技術サポート & 製品ディスカッション

技術的な質問や実装に関するディスカッションについては、[Seeed Studio Forum](https://forum.seeedstudio.com/) または [Wiki discussions](https://github.com/Seeed-Studio/wiki-documents/discussions/69) をご覧ください。
