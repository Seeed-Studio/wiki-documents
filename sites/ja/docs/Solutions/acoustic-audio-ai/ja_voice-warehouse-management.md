---
description: エッジ機器で音声倉庫管理を動かす方法——必要な機器、MCPブリッジで音声と在庫をつなぐ方法、5段階の構成の導入、reComputer R2000シリーズで実測した負荷試験の結果
title: 'エッジ機器による音声倉庫管理：構築・導入・実測結果'
keywords:
  - voice controlled warehouse management system
  - edge WMS
  - MCP warehouse inventory
  - hands-free inventory management
  - offline voice assistant
  - SenseCAP Watcher
  - reComputer
  - Jetson
  - EdgeLLM
  - Qwen3
  - Model Context Protocol
  - ERP WMS integration
image: https://files.seeedstudio.com/Solution/landpage_asset/smart-warehouse-management/og-v1.jpg
slug: /solutions/voice-warehouse-management
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/solutions/voice-warehouse-management/
generated_from: sensecraft-solutions@smart_warehouse
---

:::caution[利用上の注意]
これは作業支援ツールであり、認証済みの在庫記帳システムではありません。REST APIにはオフラインキューがなく、ネットワークやサービスの停止中に送ったリクエストは失敗し、復旧後に再送されません。
:::

## このソリューションでできること

作業者が入荷口で「リンゴを10箱入庫」と話すと、ラックのSenseCAP Watcherがそれを聞き取り、同じ建物内のreComputerゲートウェイ上の倉庫データベースに入庫記録が書き込まれます。「リンゴの残りは？」と聞けば音声で答えます。入力もメニュー操作も不要で、手は荷物から離れません。

入荷口、ラック通路、フォークリフトの運転席など、取引がキーボードから離れた場所で発生する現場や、教育コストが見合わずWMSを導入してこなかった小規模倉庫向けです。

- オープンソース実装： [github.com/suharvest/warehouse_system](https://github.com/suharvest/warehouse_system)
- 構成の選択と導入： [参考設計ページ](https://www.seeed.co.jp/solutions/reference-designs/smart_warehouse)

音声とデータベースは**MCP（Model Context Protocol）**でつながります。倉庫システムは在庫操作をそれぞれMCPツールとして公開し、Watcher上の音声エージェントがMCPクライアントとしてこのエンドポイントに接続します。音声で扱う操作を増やすときはツールを1つ追加するだけで、音声モデルの再学習は不要です。既存のERP/WMSと連携する場合は、相手側のデータインターフェースを同じツール群に対応付けます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/Solution/landpage_asset/smart-warehouse-management/hero-banner-v4.png" alt="ラックに設置したSenseCAP Watcherへ話しかけて倉庫取引を登録する作業者"/>
</div>

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Watcherは設置すればすぐ使える</h3>
                <p>SenseCAP Watcherは音声エージェントと顔認証のファームウェアを搭載しています。書き込んでステーションに設置すれば、作業者の本人確認をしながら音声で入出庫を登録できます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>データは現場に残る</h3>
                <p>倉庫データベースは現場のreComputerゲートウェイで動作します。Tier 3では認識、LLM、音声合成も構内に置き、導入後は外部サービスを呼び出しません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>オープンソース、既存ERP/WMSと接続可能</h3>
                <p>倉庫システムのコードは公開されています。既存システムとの接続は、相手側のデータインターフェースを同じMCPツールに対応付けるだけで、対応付けのコードは数十行程度です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>再学習なしでコマンドを追加</h3>
                <p>音声操作を1つ追加するには、MCPツールを1つ登録します。Watcherのファームウェアは変更不要です。</p>
            </div>
        </li>
    </ul>
</div>

### ダッシュボードに表示される内容

発話が終わると、結果がゲートウェイのダッシュボードに表示されます。在庫ページには品目ごとの現在数量と直近の変動が表示されます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/dashboard-657fc403.png" alt="倉庫ダッシュボード：品目ごとの在庫数、直近の移動、状態"/>
</div>

取引ページには入出庫の記録が1件ずつ、バッチ番号、作業者、入力元（音声またはREST）とともに表示されます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/records-944f9e33.png" alt="取引履歴：記録ごとのバッチ番号、数量、作業者、入力元"/>
</div>

作業者の名簿はユーザーページで管理し、顔認証はこの名簿と照合します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/users-8e30f2d0.png" alt="ユーザーページ：顔認証が照合する作業者一覧と権限"/>
</div>

## 必要な機器

機器の役割は3つです。どれを購入するかは、データと音声AIをどこで動かせるかで決まります。

**① 音声端末：SenseCAP Watcher。** すべてのTierで必須で、作業ステーションごとに1台です。プロセッサを2つ搭載し、ESP32がXiaozhi音声エージェント（ウェイクワード、録音、ストリーミング、MCPクライアント）を、Himax WE2が作業者確認用の顔認証ファームウェアを実行します。

**② エッジゲートウェイ。** 倉庫システムを実行し、セルフホストのTierではMCPエンドポイントも実行します。顔認証をゲートウェイ側に移せるか、1台で何ステーションを扱えるかはこれで決まります。

**③ オンプレミスAIホスト。** 認識、LLM、音声合成をすべて構内に置く必要がある場合にだけ必要です。

| | 型番 | この設計での役割 | 選ぶ条件 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991275-sensecap-watcher-w1-b_1.jpg" alt="SenseCAP Watcher" width="110" /> | [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-B-p-5980.html) | 音声端末、MCPクライアント、オンデバイス顔認証 | 必須。ステーションごとに1台 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html) | 倉庫システムを実行するエッジゲートウェイ | 在庫データを現場に置く、作業者20人以下、顔認証はWatcherで実行 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image_6.jpg" alt="reComputer Industrial R2135-12" width="110" /> | [reComputer Industrial R2135-12](https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html) | Hailo-8アクセラレータ搭載エッジゲートウェイ | 作業者が20人を超える場合、またはライブネス検知が必要な場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) | 倉庫システム、顔認証、セルフホスト音声サービスを1台で実行 | 2〜3ステーションで1台を共有する場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-100032662--recomputer-robotics-j5012-with-gmsl_1__1.jpg" alt="reComputer Robotics J5011" width="110" /> | [reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html) | オンプレミスLLMと音声処理、外部サービス呼び出しなし | 施設をオフラインで運用する必要がある場合 |

Watcherが端末内に保存できる顔テンプレートは最大**20**件です。作業者が20人を超える場合は認識をゲートウェイ側に移す必要があるため、20人以下ならR1125、20人を超えるならHailo-8搭載のR2135を選びます。

その他の前提：Watcherは**2.4 GHz Wi-Fiにのみ接続**します（5 GHzのみのSSIDはプロビジョニングのスキャンに表示されません）。ゲートウェイは同じLAN内に置きます。Tier 3の導入手順では、NVIDIA container runtimeと約**10 GB**の空きディスク（音声モデルとLLMエンジンのファイル）を事前チェックします。

### 選定における制約・非推奨条件

- **完全オフライン LLM 要件**：機密性の高い現場やインターネット環境がない倉庫で音声 LLM を使う場合は、クラウド依存パッケージを避け、reComputer J4012 搭載の Tier 3 を選定してください。
- **オフラインキューの制約**：倉庫管理 API にはサーバー側オフラインキューがありません。不安定な無線下ではクライアント側でリトライバッファを実装してください。

## 現場での構築手順

手順は3つです。Watcherを設置してファームウェアを書き込み、ゲートウェイでコンテナを起動し、音声経路を接続します。

### ステップ1：Watcherを設置する

:::tip[作業ステーションに設置する]
Watcherは入荷口、ラック通路、フォークリフトの運転席など、作業者が実際に入出庫を登録する場所に設置します。事務所に設置すると、作業者は数量を覚えて歩いて入力しに行くことになります。
:::

書き込みはUSB-C経由で、デバイスはWCH USB-UARTブリッジ（`0x1a86:0x55d2`）として認識されます。ファームウェアはプロセッサごとに1つで、Xiaozhi音声エージェントをESP32に、顔認証ファームウェアをHimax WE2に書き込みます。

### ステップ2：ゲートウェイを起動する

倉庫システムは1つのDockerサービスです。導入手順はTierごとに異なります。参考設計ページで構成を選ぶと、対応するアプリケーションパッケージをダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/smart_warehouse" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んでダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

導入はSSHでゲートウェイに接続して実行することも、ゲートウェイ上で直接実行することもできます。既存の在庫は、初回起動時に付属のExcelテンプレートで取り込めます。

導入後、ダッシュボードは`http://GATEWAY_IP:2125`にあり、コンテナのヘルスチェックは同じポートの`GET /health`です。

### ステップ3：音声経路を接続する

Trial、Tier 1、Tier 2AではSenseCraftが発行したMCPエンドポイントURLを使います。Tier 2BとTier 3ではMCPエンドポイントをポート`18004`、音声サーバーを`18000`（管理コンソールは`18003`）でセルフホストします。Tier 3ではさらに`8000`でEdgeLLM、`8621`でOpenVoiceStreamを動かし、導入後は外部サービスを呼び出しません。

## 利用できるインターフェース

連携面は2つです。

**MCPエンドポイント（ポート`18004`）：音声側で使用。** エージェントが行える操作はすべてこのエンドポイント上のツールです。コマンドを増やすにはツールを追加登録するだけで、Watcherのファームウェアは変更しません。既存のERP/WMSとの連携は、同じツールに合わせて自社システムのデータインターフェースを実装することで、対応付けのコードは数十行程度です。言い回しの違いはファジーマッチングで最も近い登録済みコマンドに対応付け、そのまま拒否はしません。

**REST API（ポート`2125`）：その他のシステムで使用。** 在庫一覧、取引履歴、エージェントの状態をHTTPで取得できます。

| インターフェース | エンドポイント / ポート | ペイロード |
|---|---|---|
| ダッシュボード + REST API | `http://GATEWAY_IP:2125` | 在庫一覧、取引履歴、エージェント接続状態 |
| ヘルスチェック | `http://GATEWAY_IP:2125/health` | 倉庫サービス準備完了後に`200` |
| MCPエンドポイント | `18004` | MCPツールとして公開される在庫操作 |
| 在庫データベース | `warehouse_data`ボリューム内の`/data/warehouse.db`にあるSQLite | 外部BI/ERPジョブからマウントまたはダンプ |
| 音声サーバー | WebSocket `18000`、管理コンソール `18003` | Watcher音声ストリーム（Tier 2B、3） |
| オンプレミスAI | `8000` EdgeLLM（OpenAI互換）、`8621` OpenVoiceStream | チャット補完、認識、音声合成、声紋（Tier 3） |

アクセスはAPIキーのロールとテナントで制限されます。書き込みエンドポイントにVIEWキーを使うと`403`、テナントをまたぐ読み書きも`403`になります。どちらも実測済みで、「性能と実測データ」に記載しています。

## 性能と実測データ

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/warehouse_system" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>warehouse_system</font></span></strong>
    </a>
</div><br />

### ランタイムと主要パラメータ

| 導入場所 | LLM | TTS / ASR | ネットワーク |
|---|---|---|---|
| SenseCraftクラウド | Seeedがホスト | Seeedがホスト | インターネット接続が必要 |
| 任意のAPI | 任意のOpenAI互換エンドポイント（例：DeepSeek） | OpenAI · Azure Speech · Volcano Engine · Alibaba Cloud · Edge TTS | インターネット接続が必要 |
| ローカルJetson | EdgeLLM：Qwen3.5-4B、profile `qwen35-4b-gdn-mtp`、8k engine | OpenVoiceStream（認識 + 合成 + 声紋） | LANのみ |

ローカルイメージはJetPack 6.2 / TensorRT 10.3向けにビルドしています。

- `BUSINESS_RATE_LIMIT`：出庫などの業務エンドポイントのレート制限で、既定値は毎分600回です。認証済みID（APIキー / セッション）単位で数え、IDを取得できない場合だけ送信元IP単位になります。登録、パスワード再設定、デバイス確認の列挙対策の制限はIP単位です。
- バッチ番号`batch_no`：形式は`YYYYMMDD-NNN`で、原子的に採番するため、同時入庫の書き込みは直列化されます。

### 倉庫REST APIの実測

デバイス：倉庫コンテナを動かすreComputer R2000シリーズ（arm64）。条件：各段階60 s、倉庫1つ、初期品目50件、SQLiteバックエンド。リクエストはTailscaleのWANリンクを経由します。

| 操作 | 段階 | 結果 |
|---|---|---|
| `GET /api/materials/list` | 同時実行10 | p95 404 ms、p99 2.7 s、エラー率0% |
| `GET /api/materials/list` | 同時実行20 | p95 824 ms、p99 5.3 s、エラー率0% |
| `GET /api/materials/list` | 同時実行50 | p95 5.5 s、p99 8.7 s、エラー率0% |
| `POST /api/materials/stock-in` | 同時実行5 / 10 / 20 | 3段階ともエラー率0%。合計1481バッチを作成し、バッチ番号の重複は0件。p95 634 ms – 4.96 s |
| `POST /api/materials/stock-out` | 同時実行10 / 20 / 50、2つのAPIキーが1つの出口IPを共有 | 既定の毎分600回の範囲でHTTP 429は0件。ID単位で約5–6回/秒 |
| サービス停止 | 約10 req/sの照会トラフィック、コンテナ再起動による34 sの停止 | 停止中はリクエストの100%が失敗し、キューイングや再送はありません。復旧後約1 sで完全に回復し、滞留もデータ不整合もありません |
| ロールとテナントの分離 | 単発プローブ4回 | 4/4が想定どおり：VIEWキーの書き込み`403`、読み取り`200`。テナントをまたぐ書き込み`403`、読み取り`403` |

再現：`runs/2026-09-05-load/`、`evaluation/runs/2026-09-06-a2-retest/results.md`

### ローカルLLMのスループット

| デバイス | モデル | スループット | 条件 |
|---|---|---|---|
| reComputer Robotics J5011 | EdgeLLM Qwen3.5-4B | 約16 tokens/s | 上流の数値。実行ログは添付されていません |

### 既知の性能低下

- **在庫照会の遅延は同時実行20から悪化します。** p95は同時実行10の404 msから20で824 ms、50で5.5 sになり、対話的な利用には遅すぎます。
- **REST APIにはオフラインキューがありません。** ネットワークやサービスの停止中に送ったリクエストは失敗し、再送されません。再接続とバックオフはMCP音声WebSocketチャネルだけが対象です。対策：ゲートウェイ側でネットワークの可用性を確保し（有線を優先、UPS給電、サービスとクライアントを同じLANに置く）、利用できない時間をデバイスの再起動時間まで縮めるか、クライアント側に書き込みキューを設け、再接続後に順番に再送してバッチ番号で重複を除きます（クライアント側のキューは未実装です）。

### 次のステップ

- reComputer R1125-10 ゲートウェイで倉庫管理 REST インターフェースの負荷測定を行います。

## データと素材の出典

- 負荷試験の数値、条件、既知の制約： 上流の`sensecraft-solutions@smart_warehouse` `description.md`、「Measured Boundaries」、「Known Limitations」。
- オンプレミスLLMのスループット（約16 tokens/sec、reComputer Robotics J5011）： 上流の`guide.md`、「Preset: Tier 3 · Premium」。
- 機器の役割、Tier構成、アクセラレータ要件： 上流の`solution.yaml`、`intro.device_catalog`、`intro.presets`.
- 倉庫システムのソース： [github.com/suharvest/warehouse_system](https://github.com/suharvest/warehouse_system).
- 製品写真： Seeed Studio製品カタログ（media-cdn.seeedstudio.com）。
- シーン写真： Seeed Studioソリューション素材（files.seeedstudio.com）。
