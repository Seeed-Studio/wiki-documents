---
description: 計測によるJetPack 7.2でのメモリ最適化、NVIDIA Jetsonスキル、ヘッドレスまたはカメラ非搭載向けのBSPチューニング、そしてメモリ効率の高いLLM推論設定について説明します。
title: JetPack 7.2 メモリ最適化
keywords:
  - JetPack 7.2
  - メモリ最適化
  - NVIDIA Skills
  - TensorRT Edge-LLM
  - INT4
  - Jetson Orin
  - Jetson Thor
image: https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG
slug: /jetpack_7_2_memory_optimization
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/jetpack_7_2_memory_optimization/
---

# JetPack 7.2 メモリ最適化

Jetsonはユニファイドメモリを使用しているため、OS、GPUワークロード、カメラおよびディスプレイのファームウェア、モデルの重み、TensorRTエンジン、KVキャッシュ、アプリケーションサービスが、同じ物理DRAMを取り合います。したがってメモリ最適化は、プラットフォームと推論ワークロードの両方を対象にする必要があります。

本ガイドは、このコレクション内で既に公開されているJetPack 7.2関連資料を統合したものです：

- [JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/)（27Bモデル読み込み後のメモリ削減量の実測結果を含む）
- デバイス診断、メモリアudit、ヘッドレスデプロイのための [NVIDIA Skills ワークフロー](/ja/rapid_prototyping_on_jetson_with_nvidia_skills_bk/)
- JetPack 7.2上でFP16、INT8、INT4推論を行うための [TensorRT Edge-LLM ガイド](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/)

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG" style={{width:900, height:'auto'}} />
</div>

:::warning
BSPレベルのメモリ回収は、ブートファームウェア、デバイスツリー、カーネルコマンドライン設定を変更します。検証済みの `headless`、`no-camera`、またはSWIOTLBレシピのみを、リカバリ可能なテストデバイスに適用してください。元のBSPを保持し、これらの変更を行う前にデバイスを再フラッシュできることを確認してください。
:::

## 最適化レイヤー

問題を解決できる中で、最も侵襲性の低いレイヤーを使用してください。

| レイヤー | 典型的な操作 | リスク | 再起動または再フラッシュ |
| --- | --- | --- | --- |
| 計測 | 利用可能メモリとプロセスごとの使用量を記録 | 低 | 不要 |
| 推論設定 | 量子化、短いコンテキスト、バッチサイズ1、低い同時実行数 | 低 | 不要 |
| サービス設定 | ヘッドレスターゲット、重複したモデルサーバーの停止、未使用ユーザーサービスの無効化 | 中 | 通常は再起動 |
| BSPメモリ回収 | 未使用のディスプレイまたはカメラのファームウェアと予約メモリを無効化 | 高 | 再ビルドと再フラッシュ |
| SWIOTLB チューニング | 実際の使用量を計測したうえでDMAバウンスプールを削減 | 高 | 再ビルドと再フラッシュ |

## 1. 再現可能なベースラインを記録する

アプリケーションを起動する前に、ソフトウェアリリースを確認しメモリを取得します：

```bash
cat /etc/nv_tegra_release
free -h
grep -E 'MemTotal|MemAvailable|SwapTotal|SwapFree|CmaTotal|CmaFree' /proc/meminfo
```

モデルの読み込みと実行中に、ユニファイドメモリ、GPU使用率、温度、電力を監視します：

```bash
sudo tegrastats --interval 1000
```

別のターミナルで、最大のプロセスとコントロールグループを特定します：

```bash
ps -eo pid,comm,rss,vsz,%mem --sort=-rss | head -20
systemd-cgtop
```

少なくとも次の4つの状態を記録します：

1. 起動直後でアプリケーション開始前
2. モデルまたはTensorRTエンジン読み込み後
3. プロンプトのプリフィル中、またはピーク時のビジョン前処理中
4. 定常状態のトークン生成中、またはアプリケーション動作中

`free` の `used` 値だけを比較しないでください。`MemAvailable`、プロセスのRSS一覧、`tegrastats` が報告するピーク値を組み合わせて使用します。

## 2. BSPを編集する前にSkillsで監査する

スキル駆動のワークフローは、すぐに設定変更を行うのではなく、まず観察から始めるべきです。

### デバイスを診断する

`jetson-diagnostic` を使用して、モジュール、JetPack/L4Tリリース、メモリ状態、ストレージ、熱状態、サービス、および可視なハードウェアエンドポイントを収集します。

プロンプト例：

```text
/jetson-diagnostic Confirm that this device is running JetPack 7.2 / L4T 39.2,
capture its idle memory baseline, and identify services or hardware subsystems
that consume memory before the inference application starts.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/jetson-diagnostic.PNG" style={{width:900, height:'auto'}} />
</div>

### メモリプレッシャーを監査する

モデルの読み込みに失敗したとき、OOMキラーがプロセスを終了したとき、またはメモリ使用量が予期せず増加したときは、`jetson-memory-audit` を使用します。

```text
/jetson-memory-audit Compare idle, engine-load, prefill, and decode memory use.
Separate model weights, KV cache, application processes, filesystem cache,
desktop services, and reserved platform memory where possible.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG" style={{width:900, height:'auto'}} />
</div>

監査は、変更を推奨する前に根拠となる証拠を出力すべきです。プロセス一覧の上位にあるという理由だけでサービスを無効化しないでください。

### アプライアンスデプロイをヘッドレスモードに変換する

Jetsonがローカルディスプレイなしで動作している場合は、`jetson-headless-mode` を使用して、サービスレベルでデスクトップのオーバーヘッドを削減します。

標準のsystemdターゲットは次のとおりです：

```bash
sudo systemctl set-default multi-user.target
sudo reboot
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/headless-mode.PNG" style={{width:900, height:'auto'}} />
</div>

再起動する前にSSHアクセスを確認してください。このサービスレベルの変更は、BSP内でディスプレイファームウェアのカーブアウトを回収する操作とは別物です。

### `jetson-optimize-memory` は検証済みBSPシナリオにのみ使用する

BSPレベルのスキルは、次の3つの限定されたワークフローをサポートします：

| シナリオ | 想定デプロイ | 回収されるプラットフォーム領域 |
| --- | --- | --- |
| `headless` | ローカルディスプレイ出力なし | DCE/ディスプレイファームウェア、初期フレームバッファ、および対応するカーネルノード |
| `no-camera` | CSI、GMSL、その他のカメラパイプラインなし | RCE、VI、ISP、NVCSI、および対応するファームウェアカーブアウト |
| `swiotlb` | 測定されたDMAバウンスプール使用量が予約プールを大きく下回っている | より小さいがゼロではないSWIOTLB割り当て |

リクエスト例：

```text
/jetson-optimize-memory headless
/jetson-optimize-memory no-camera
/jetson-optimize-memory swiotlb
```

カーブアウトを変更する場合、MB1 BCT、MB2のロード制御、MB2 AST参照、カーネルデバイスツリーノードの整合性を保つ必要があります。カーブアウトエントリの1つだけをゼロにするのは有効な最適化ではありません。SWIOTLBについては、プールサイズをゼロに設定してはならず、`io_tlb_used` が `io_tlb_nslabs` に近づいた場合は直ちに元に戻してください。

## 3. LLMおよびVLMのメモリ使用量を削減する

### サポートされる中で最小の精度を選ぶ

JetPack 7.2上のTensorRT Edge-LLMは、Jetson OrinでFP16、INT8、INT4をサポートします。まずFP16で正しさを検証し、その後、選択したモデルでサポートされているINT8またはINT4チェックポイントを評価します。

| 精度 | メモリ傾向 | 推奨用途 |
| --- | --- | --- |
| FP16 | Orinでサポートされるパスの中で最もメモリ使用量が多い | 機能ベースラインおよび精度重視のワークロード |
| INT8 | 重みメモリが少なく、精度トレードオフは中程度 | バランスの取れた本番評価 |
| INT4 | サポートされるパスの中で最も重みメモリが少ない | DRAMが限られた大規模モデルやマルチサービスデプロイ |

エンジンフラグを変更するだけで、FP16チェックポイントが正しく量子化されると想定しないでください。モデルでサポートされているチェックポイントとエクスポートパスを使用し、そのうえでJetPack 7.2上でTensorRTエンジンを再ビルドします。

### コンテキスト、KVキャッシュ、同時実行数を制御する

LLMのメモリは、モデルの重みだけで決まるわけではありません。KVキャッシュは、コンテキスト長、バッチサイズ、生成トークン数、および同時リクエスト数に応じて増加します。

まずは保守的なリクエストから始めます：

```json
{
  "batch_size": 1,
  "max_generate_length": 128,
  "requests": [
    {
      "messages": [
        {
          "role": "user",
          "content": "Summarize the current device status."
        }
      ]
    }
  ]
}
```

その後、次の各次元を1つずつ増やしていきます：

1. 入力コンテキスト長
2. 生成長
3. バッチサイズ
4. 同時リクエスト数
5. 追加のビジョンまたはロボティクスサービス

プリフィル中にメモリが急増する場合は、プロンプトまたはコンテキストウィンドウを短くしてください。セッションがアクティブなままの状態でメモリが増加する場合は、KVキャッシュの保持と同時リクエスト処理を確認します。

### 重複したモデル読み込みを避ける

複数のアプリケーションが同じモデルを必要とする場合は、1つの長時間稼働するモデルサーバーを使用します。個別のPythonスクリプト、ノートブック、テストサーバー、本番サービスは、それぞれが重みやエンジンの別コピーを読み込む可能性があります。

推論を開始する前に、既存のモデルプロセスを確認します：

```bash
ps -ef | grep -E 'llm|triton|python|ollama' | grep -v grep
```

重複であると確認できたプロセスのみ停止してください。名前が一致するという理由だけでシステムサービスを終了しないでください。

### 可能な限りエクスポートとエンジンビルドをターゲット外で行う

TensorRT Edge-LLMは、チェックポイントのエクスポートにx86 GPUホストを、ターゲットエンジンのビルドにJetsonを使用します。エクスポートには、RAMとVRAMでチェックポイントサイズの数倍が必要になる場合があるため、エクスポートをホスト側で行うことで、Jetsonのメモリを検証と推論のために温存できます。

エンジンビルド中は、無関係なモデルサーバーを閉じ、実行時メモリとは別にピークメモリを記録します。ビルド時のメモリプレッシャーは、必ずしも定常状態のデプロイ要件を表すわけではありません。

![TensorRT Edge-LLM engine build](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/6.png)

### スワップはDRAMの代わりではなくリカバリ手段として扱う

スワップは、一度きりのモデル変換やエンジンビルドを完了させるのには役立ちますが、継続的なスワップはレイテンシを悪化させ、ストレージの摩耗を増加させる可能性があります。リアルタイム推論では、スワップに頼る前に、より小さいまたは量子化されたモデル、短いコンテキスト、低い同時実行数、少ない重複サービスを優先してください。

## 4. 結果を検証する

各変更の前後で、同じプロンプト、入力、電力モード、アプリケーショントポロジを使用します。

| 指標 | 重要な理由 |
| --- | --- |
| アイドル時の `MemAvailable` | システムおよびサービスのオーバーヘッドを測定 |
| エンジン読み込み後のメモリ | モデルとランタイムのフットプリントを示す |
| プリフィル時のピークメモリ | コンテキストと一時ワークスペースのプレッシャーを明らかにする |
| 定常デコード時のメモリ | KVキャッシュとセッション保持を示す |
| 最初のトークンまでの時間 | スワップや制約されたワークスペースによるリグレッションを検出 |
| デコードスループット | メモリ削減によって推論が実用的でないほど遅くなっていないことを確認 |
| 温度とボード電力 | 結果が短時間のバーストではなく安定していることを確認 |

[JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) では、Seeedの比較において、27Bモデル読み込み後のメモリがJetPack 6.2の約 **24.6 GB** からJetPack 7.2では **14.7 GB** に低下したことが記録されています。この結果は、すべてのモデルで保証される削減量ではなく、特定のワークロードに依存する参考値として扱ってください。

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/rO0ZPA2VK9w" title="JetPack 7.2 and JetPack 6.2 memory and inference comparison on Jetson AGX Orin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 推奨手順

1. アイドル時、エンジン負荷時、プリフィル時、およびデコード時のメモリを測定します。
2. 重複しているモデルプロセスと不要なアプリケーションサービスを削除します。
3. コンテキスト、生成長、バッチサイズ、および同時実行数を減らします。
4. TensorRT Edge-LLM がサポートする INT8 または INT4 チェックポイントを評価します。
5. ディスプレイ不要のアプライアンス展開には `jetson-headless-mode` を使用します。
6. ハードウェアシナリオが完全に一致する場合にのみ `jetson-optimize-memory headless` または `no-camera` を使用します。
7. 実際の DMA バウンスプール使用量を測定した後にのみ SWIOTLB の削減を検討します。
8. 変更を行うたびに、正しさ、レイテンシ、スループット、熱特性、および安定性テストを再実行します。

## ロールバック

- グラフィカルデスクトップが再度必要になった場合は、元のサービスターゲットを復元します。
- カーブアウトまたはデバイスツリーの変更によってブートや周辺機器の障害が発生した場合は、初期状態の BSP ソースを復元して再フラッシュします。
- DMA エラーが発生した場合、または使用量が設定されたプールに近づいた場合は、SWIOTLB の変更を元に戻します。
- 最適化された構成が受け入れテストに合格するまで、最後に既知の良好な TensorRT エンジンとモデル構成を保持します。

## テクニカルサポートと製品ディスカッション

Seeed Studio の製品をお選びいただきありがとうございます。技術サポートおよび製品に関するディスカッションには、以下のチャネルをご利用ください。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>