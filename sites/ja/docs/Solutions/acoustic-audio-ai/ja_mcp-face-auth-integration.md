---
description: 自社の倉庫や業務プラットフォームに音声制御と顔認証を組み合わせることで、発話された名前ではなく、カメラが認識したオペレーターにすべてのコマンドをひも付けます。
title: 顔認証付きの音声 AI を業務システムに導入する
keywords:
  - MCP
  - 顔認識
  - SenseCAP Watcher
  - 連携
  - ERP
  - WMS
  - 音声制御
  - エッジ AI
  - 認証
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /solutions/mcp-face-auth-integration
sidebar_position: 7
last_update:
  date: 07/31/2026
  author: Spencer
tags:
  - mcp
  - agents
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/solutions/mcp-face-auth-integration/
---

:::note[Notice]
顔認識は生体データを扱います。これは多くの地域で特別に規制されており、EU・英国では GDPR、イリノイ州では BIPA などが該当します。実在の人物を登録する前に、必ず導入計画についてレビューを受けてください。何があなたの責任になるかは、[Biometric Data](#5-生体データ) を参照してください。
:::

## 概要

私たちが提供するのは、お客様の現場フロアに立ち、会話を行い、誰と話しているかを理解する小さなロボットです。オペレーターは両手がふさがったまま近づき、「M16 ベアリングを 40 個出庫して」と話しかけます。すると、そのトランザクションは、発話された名前ではなく、カメラが認識した人物にひも付けられた状態で、あなたのシステムに記録されます。

マイクアレイ、ウェイクワード、音声、言語モデル、顔認識が、ひとつにチューニングされた製品として届きます。音声を外部に出せないお客様向けには、完全オンプレミス構成も用意されています。残るのは、あなただけが行える部分、つまり自社プラットフォームとの接続です。その接続は **あなたのシステムの前段に置く MCP サーバー** であり、当社のプラットフォームを採用する必要はありません。その構築リファレンスが、MIT ライセンスのオープンソースである当社の倉庫プラットフォームです。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://github.com/suharvest/warehouse_system" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub 🖱️</font></span></strong></a>
</div>

音声コマンド自体には本人性が含まれないため、顔認識がこの仕組みを支える要となります。言語モデルがレコードに書き込む名前は、話し手が名乗ったとおりのものであり、他人の名前を口にするだけでなりすましができてしまいます。顔認識は 2 つの場所のどちらかで実行でき、このページが主にお手伝いするのは、そのどちらを選ぶかという判断です。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/mcp-face-architecture.png" alt="Watcher が音声と顔を取得し、SenseCraft が MCP 呼び出しをルーティングし、あなたの MCP サーバーがバックエンドに到達する前に顔認証ゲートを適用する構成図"/>
</div>

:::info その図に出てくる 3 つの名前
**MCP** は [Model Context Protocol](https://github.com/modelcontextprotocol) の略で、言語モデルがあなたの関数を呼び出すためのオープン標準です。**XiaoZhi** は Watcher 上で動作するオープンソースの音声アシスタントスタックで、ウェイクワード、音声処理、どのツールを呼び出すかの判断を担います。**SenseCraft** は、デバイスを登録し、それをあなたのサーバーへ接続する MCP エンドポイントを取得する場所です。
:::

## 特長

本人性を伴わない音声制御には、監査上の抜け穴があります。ここでは、それを塞ぐための性質を示します。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>話して名乗れない本人性</h3>
                <p>オペレーター名は言語モデルではなく、顔照合によって生成されます。話し手が他人の名前を名乗ったとしても、2 つの値が別フィールドで運ばれるため、レコードには常に本人確認済みの自分の ID が書き込まれます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <div class="info-content">
                <h3>ブラックボックスではなく、動くリファレンス</h3>
                <p>ツールレイヤー、認証ゲート、埋め込みストア、管理画面まで、プラットフォーム全体がオープンソースです。仕様書だけを相手に統合するのではなく、すでに動いているコードをそのまま写して利用できます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v13.5m-3.75-13.5v13.5m-3.75-13.5v13.5m11.25-13.5v13.5m3.75-13.5v13.5m-1.5-13.5H9.75v13.5h9.75V5.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>コンピュートボックスの有無を問わず動作</h3>
                <p>まずは追加ハードウェアなしで、デバイス内蔵の NPU 上で認識を開始できます。その後、より多人数の登録やなりすまし対策が必要になったら、LAN 上の推論サーバーに顔認識を移行します。この切り替えは設定変更だけで済み、MCP ツールやデータベースには手を触れる必要がありません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>オペレーション単位での強制</h3>
                <p>ルールはオペレーションごと、倉庫ごとに設定できます。出庫には顔認証を必須にしつつ在庫照会には不要としたり、特定のオペレーションを指名の許可リストに限定したり、高額品の移動だけ照合閾値を引き上げたりできます — いずれも連携コードに手を入れる必要はありません。</p>
            </div>
        </li>
    </ul>
</div>

## システムアーキテクチャ

認証ゲートは、業務ロジックの上にある **MCP ツールレイヤー** に配置します。ゲートがかかるツールはすべて、まずゲートを呼び出し、その後ではじめてデータにアクセスします。ゲートを各業務メソッドの内部ではなくこのレイヤーに保つことが、保証を一貫して成立させる鍵です。

- **SenseCAP Watcher** は音声コマンドを取得し、選択したパスに応じて、自身の NPU 上で顔照合を行うか、要求に応じてカメラフレームを提供します。
- **あなたの MCP サーバー** は、業務オペレーションをツールとして公開します。ゲート対象のツールを実行する前に認証エンドポイントへ問い合わせ、その判定結果に従います。ポリシーは **フェイルクローズ** でなければなりません。明示的な許可以外は、すべてオペレーションをブロックします。
- **あなたのバックエンド** は、登録済みの人物、その埋め込み、ルール、監査ログを保持し、認証呼び出しに対して、判定と一致した人物名を返します。
- **既存の業務 API** には一切手を加えません。MCP サーバーは新しい玄関口であり、作り直しではありません。

リファレンス実装では、`mcp/warehouse_mcp.py`（ツールレイヤーと `_enforce_face()` ゲート）、`mcp/mcp_pipe.py`（トランスポート）、そしてその背後にオーケストレーターとマッチャーを持つバックエンドの `/api/face/verify-mcp` が該当します。

### ハードウェア

構成要素は 2 つです。**SenseCAP Watcher** は人が話しかけるデバイスであり、彼らを認識するカメラでもあります — これは常に必須です。同一 LAN 上の **コンピュートボックス** は認識サービスを実行し、パイロットを超える段階で追加するコンポーネントです。

|SenseCAP Watcher for XiaoZhi<br/>*現場フロアに置くデバイス*|コンピュートボックス<br/>*認識サービス*|
|:---:|:---:|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-100051523-sensecap-watcher-xiaozhi-en.jpg" alt="SenseCAP Watcher for XiaoZhi" width={280} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-_r235.jpeg" alt="reComputer AI Industrial R2135-12" width={280} height="auto" />|
|ESP32-S3 と Himax WiseEye2 ビジョン・コプロセッサ<br/>カメラ、マイク、スピーカー · 1.45 インチタッチスクリーン<br/>2.4 GHz Wi-Fi と BLE 5 · Grove I2C 拡張|登録と照合に使う顔認識モデルを実行<br/>20 人の上限を取り払い、なりすまし対策を追加<br/>用途に合うグレードを選択 — [下記のオプション](#コンピュートボックスの選択)|
|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html)</p>|<p style={{textAlign: 'center'}}>[See the options](#コンピュートボックスの選択)</p>|

厳密に言えば、コンピュートボックスは必須ではありません。Watcher 自身の NPU で顔照合を行うことができ、パイロット用途には十分です。ただし実際には、このモードではデバイスあたり 20 人までという上限があり、顔とその写真を見分けることもできません。そのため、本番導入ではほぼ必ずボックスを追加します。トレードオフの詳細は [Part 2](#part-2--認証パスの選択) で説明します。

Watcher をネットワークに接続し、エージェントとペアリングする手順については、[SenseCAP Watcher for Xiaozhi AI](/ja/sensecap_watcher_for_xiaozhi_ai) を参照してください。

## 構築前に試す

この仕組みが自社プロダクトに適合するかを知るために、コードを読む必要はありません。労力の小さい順に、3 つの入り口があります。

**ホスト型インスタンスを使う — 音声側の体験用。** [warehouse.seeed.cn](https://warehouse.seeed.cn/) に自分を登録すれば、すぐに稼働中のデプロイメントと対話できます。Watcher をペアリングすれば、何もインストールせずに音声から在庫までのフローを試せます。なお、**共有デプロイメントでは顔認証は無効化されています**。そのため、ここで体験できるのは本人性ではなく、音声インターフェースの部分です。

**リファレンスデザインをデプロイする — 顔認証側の体験用。** Smart Warehouse リファレンスデザインは、同じシステムをワンクリックでデプロイできる形にパッケージしたものです。これはプライベートインスタンスであるため顔認証を有効化でき、このページの主題そのものが動作する様子を見るための最短ルートになります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_warehouse" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Reference Design 🖱️</font></span></strong></a>
</div>

**自分で実行してみましょう。** 内部を確認してカスタマイズを始める準備ができたら：

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
docker-compose -f docker-compose.prod.yml up -d
```

:::note 顔認証にはプライベートデプロイが必要です
クラウド版およびホスト版のビルドでは、顔認証はデフォルトでオフになっており、デプロイごとに有効化されます。特に顔認証フローを評価する場合は、共有環境ではなく、リファレンスデザインかセルフホスト環境を前提に計画してください。
:::

## パート 1 — MCP サーバーを構築する

一度動作を確認したら、どの程度再利用するかを決めます。正直な選択肢は 2 つあります。

### オプション A — ブリッジを再利用し、データソースを差し替える

ドメインが倉庫業であれば、最速の方法はリファレンスのツールレイヤーをそのまま使い、アダプタークラスを 1 つ実装することです。ツール定義、音声プロンプトエンジニアリング（あいまいさの解消、候補の読み上げ、数量確認）、顔ゲートはそのまま継承し、変更するのはデータの取得元だけです。

```python
from .base import BaseProvider


class MyWmsProvider(BaseProvider):
    PROVIDER_NAME = "my_wms"

    def __init__(self, config: dict):
        super().__init__(config)
        # Point the HTTP helpers at your own system.
        self.base_url = config.get("wms_base_url", "").rstrip("/")
        self._token = config.get("wms_token", "")

    def get_auth_headers(self) -> dict:
        return {"Authorization": f"Bearer {self._token}"}
```

6 つの必須メソッド — `resolve_name`, `query_stock`, `stock_in`, `stock_out`, `search`, `get_today_statistics` — に加えて、2 つのオプションメソッド `query_batch` と `move_batch_location` を実装します。

:::caution シグネチャは `mcp/providers/base.py` から取得してください
ツールレイヤーはこれらの引数を**位置指定**で渡すため、説明文ではなくコードから各シグネチャをコピーしてください。一致しないシグネチャは、最初の呼び出しで `TypeError` を発生させます。
:::

:::danger 出荷前にエラー動作を変更する
リファレンスのツールレイヤーは、あなたの Provider がロードに失敗したり例外を投げた場合（ネットワークの瞬断、ファイル欠如、不正な設定など）、組み込みのデフォルト Provider にフォールバックし、致命的エラーにはせず警告をログに残すだけです。リファレンスではそれは利便性のためですが、製品ではデータの誤ルーティングになります。一時的なエラーによって、顧客の在庫書き込みが誤ったデータベースにサイレントに送られてしまいます。

アダプターの失敗は大きなエラーとして扱い、その操作を拒否するようにしてください。これはリファレンスの挙動の中で、唯一コピーすべきでない部分です。
:::

### オプション B — 独自の MCP サーバーを書く

ドメインが倉庫業でない場合、6 つのメソッドでは収まりません。FastMCP で独自のツールを定義し、トランスポートとして `mcp_pipe.py` だけを残します。その場合は顔ゲートを自分で実装します — [パート 3](#part-3--what-you-implement) を参照してください。

```python
@mcp.tool()
def check_order_status(order_id: str) -> dict:
    """
    Check the status of a customer order.
    Use this when the user asks about order tracking or delivery status.

    Args:
        order_id: The unique order identifier (e.g., "ORD-2024-001")
    """
    return api_get(f"/orders/{order_id}/status")
```

音声コンテキストから生じる制約であり、すべて実地で学んだものです：

- **`print()` を絶対に呼ばないでください。** stdio はプロトコルチャネルであり、stdout に書き込まれたものは JSON-RPC のフレーミングを破壊します。`logging` を使用してください。こちらは stderr に出力されます。
- **戻り値は小さく保つ。** 言語モデルがそれを読み上げます。1 KB 前後に抑えてください。大きすぎるペイロードは WebSocket のフレーム上限に達し、接続が切断されます。
- **docstring がツールのユーザーインターフェースです。** モデルはそのテキストから、いつツールを呼び出すか、引数をどう埋めるかを判断します。型だけでなく、意図を説明してください。
- **変更のたびに再起動する。** ツール一覧はハンドシェイク時に 1 度だけ報告されます。

ブリッジの完全なウォークスルー — SenseCraft から MCP エンドポイントを取得し、API キーを作成し、ブリッジを起動して音声でテストする手順 — は、対応するページにあります：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/mcp_external_system_integration/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> MCP セットアップガイド 🖱️</font></span></strong></a>
</div>

## パート 2 — 認証パスを選ぶ

どちらのパスも MCP ツールから見える姿は同じです — 同じ認証呼び出し、同じ判定結果です。違いは顔照合がどこで行われるかであり、その結果として名簿の規模、堅牢性、ハードウェアコストが変わります。

これを制御する設定は 2 つあり、互いに独立しています：

- **`mode`** — 推論が*どこで*実行されるか：`local`（デバイス上）または `lan`（あなたが運用するサービス上）。
- **`verify_frequency`** — 認証が*どのくらいの頻度で*行われるか：`always`、または会話ごと 1 回（`session`）。

どの組み合わせも有効です。

| | パス 1 — デバイス上 | パス 2 — 外部コンピュートボックス |
| :--- | :--- | :--- |
| `mode` の値 | `local` | `lan` |
| 照合が実行される場所 | SenseCAP Watcher 内の Himax WE2 NPU | あなたの LAN 上の推論サービス |
| 追加ハードウェア | なし | サイトごとにコンピュートボックス 1 台 |
| 登録可能な人数 | **デバイスごとに 20 人**、オンデバイスストアのハードリミット | 固定上限なし |
| 顔モデル | MobileFaceNet, 128-D, INT8 — 固定 | 任意 |
| なりすまし防止 / ライベネス | **利用不可** | サービスがレポートすれば対応可能 |
| マッチ閾値 | グローバル | グローバル（ルールごとの上書き可） |
| 最適な用途 | パイロットおよび小規模な単一シフトチーム | 本番運用、大規模名簿、複数サイト |

:::caution パス 1 にはライベネス検出がなく、それが多くのデプロイで決定要因になります
オンデバイスのマッチャーは顔同士を比較するだけであり、顔とその顔の写真を区別できません。許可されたオペレーターの印刷写真を掲げているだけで通過してしまいます。これはパイロットや低リスク環境では許容できますが、不正防止のコントロールにはなりません — そして、意図的ななりすましを抑止することこそが、この機能に予算が付く主な理由であることがほとんどです。

デバイスあたり 20 人という上限と合わせると、**本番デプロイのほとんどは最終的にパス 2 を選ぶ**ことになります。パス 1 はワークフローを実証するための手段と考え、完成システムの安価版とみなさないでください。
:::

:::tip まずローカルで始め、後から LAN に移行する
両方のパスは同じ登録レコード、ルール、監査ログを使用し、切り替えても MCP ツール側は何も変わりません。ただし移行は無料ではありません。モデルが変わるということは `model_tag` が変わるということであり、登録済みの埋め込みをすべて再計算する必要があります。各埋め込みと一緒に元画像を保持しておけば、全員を再登録するのではなく、バックグラウンドジョブとして処理できます。
:::

### パス 1 — デバイス上での認証

Watcher 自身が顔照合を行います。バックエンドはコンパクトな顔ライブラリを LAN 経由でデバイスにプッシュし、デバイスはそれをフラッシュに保存します。認証時には、バックエンドがデバイスに対して「今誰を見ているか」を問い合わせます。

#### それでも埋め込みソースは必要です

照合はデバイス上で行われますが、*登録*はそうではありません。各写真を埋め込みに変換する何かが必要であり、それは**デバイスが実行しているのと同じモデル**から生成されなければなりません。他の顔モデルからの埋め込みは別のベクトル空間に配置されるため、どれほど優れたモデルであっても決してマッチしません。したがって、このパスは「自分側では推論なし」ではなく、「推論は登録時のみであり、ファームウェアとビットレベルで互換でなければならない」という意味です。

リファレンス実装には、デバイスパイプラインのホスト側ミラーが同梱されており、オンデバイス NPU とビット単位で一致します。これは `we2-mfnr6-128-v1` という model tag で公開されています。登録時にプロセス内で使うことも、小さな HTTP サービスとして使うこともできます — `FACE_WE2_SIMULATOR_ENABLED=1` を設定すると、外部コンピュートボックスと*同じ* `/infer` コントラクトで応答するため、両方のパスで登録コードを同一に保てます。

:::caution デプロイ時の 2 つの落とし穴
シミュレーターのルートには**認証が一切ありません** — そのポートを自分のバックエンド以外に公開してはいけません。また、INT8 ランタイムには musl 用の wheel がないため、コンテナには glibc ベースイメージが必要です。Alpine ではインストールに失敗します。
:::

#### あなたが構築するフロー

**1. 各オペレーターを登録する。** 人ごとに 1 枚以上の写真を撮影し、上記の WE2 互換モデルでそれぞれを埋め込みに変換し、その人に紐づけて保存します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-enroll.png" alt="リファレンス実装の登録ダイアログ：写真アップロードと倉庫スコープ"/>
</div>

**2. 各物理デバイスを登録**し、その LAN IP を設定してから、顔ライブラリをプッシュします。システム側には、デバイスアドレスを記録する場所と、デバイスごとのプッシュアクションが必要です。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/mcp-devices-push.png" alt="エージェント接続配下に登録された物理デバイスと、顔データプッシュアクション"/>
</div>

**3. 認証時にデバイスへ問い合わせる。** `GET /api/face/current-speaker` を使用します — [デバイスワイヤプロトコル](#2-the-device-wire-protocol) を参照してください。

:::caution デバイスはバックエンドから到達可能でなければなりません
認証はデバイスに直接問い合わせます。バックエンドから到達できない場合、正しい結果はバイパスではなく拒否です。デバイス登録時には、パブリックアドレス、ループバックアドレス、リンクローカルアドレスを拒否してください — 攻撃者が制御するホストを指し示せる顔ゲートは、もはやゲートではありません。
:::

### パス 2 — 外部コンピュートボックス

認識処理はネットワーク上の HTTP サービスに移ります。バックエンドは画像を取得し（呼び出し元が提供するか、デバイスのカメラから取得するか）、それをあなたのサービスに送って埋め込みを生成し、登録済み名簿に対して自前でコサイン類似度マッチを行います。

これにより 20 人という上限がなくなり、より大きく高精度なモデルを実行でき、ライベネス検出も可能になります。

#### サービスが実装するコントラクト

エンドポイントは 2 つです。どちらもトークンが設定されている場合は `Authorization: Bearer <token>` を受け付け、**10 秒以内**に応答しなければなりません。

```http
POST {endpoint}/infer
Content-Type: application/json

{"image_b64": "<base64-encoded image>"}
```

```jsonc
// Response
{
  "faces": [
    {
      "embedding": "<base64 float32 little-endian>",
      "det_score": 0.93,
      "live": true,
      "liveness_score": 0.9
    }
  ],
  "face_count": 1,
  "model_tag": "your-model-v1",
  "processing_time_ms": 12.3
}
```

```http
GET {endpoint}/health
```

```jsonc
// Response
{"status": "ok", "backend": "...", "model_tag": "your-model-v1",
 "capabilities": ["detect", "embed"], "embedding_dim": 512,
 "embedding_dtype": "float32"}
```

注意すべき挙動：

- 複数の顔が返ってきた場合、`det_score` が最も高いものが使用されます。
- `"live": false` が返された場合、その操作はなりすまし試行としてブロックされます。
- 埋め込みベクトルの次元数は自由に選べますが、特定の `model_tag` に対しては一定でなければなりません。マッチングはタグ単位で行われるため、モデルを変更する場合は新しいタグを公開する必要があります。
- 各登録ごとに元の画像を保持してください。タグが変わったとき、それによって全ロスターを再登録し直すのではなく、バックグラウンドで再計算できるようになります。

#### あなたが構築するフロー

あなたのバックエンドは画像を取得し、それを `/infer` に POST し、返ってきた埋め込みベクトルを登録済みロスターとコサイン類似度でマッチングします（マッチングは対応する `model_tag` のスコープ内で行います）。エンドポイント URL とそのトークンは設定として保存し、オペレーターには `/health` を呼び出して検出されたモデルタグを報告する接続テストを提供してください — [設定サーフェス](#3-設定サーフェス) を参照してください。

:::caution モデルに合わせてしきい値を調整する
リファレンスのデフォルトは、同梱の 128 次元モデル向けに選ばれたコサインしきい値 `0.45` です。この数値は別の埋め込み空間では意味を持ちません。しきい値を決める前に、自分のモデルについて正例ペアとなりすましペアのスコア分布を測定し、高価値な操作がより厳しいマッチを要求できるよう、ルールごとの上書きを許可してください。
:::

#### コンピュートボックスの選定

推論サービスはプレーンな HTTP サービスなので、LAN 上でモデルを実行できるマシンであればどれでも構いません。以下はすぐに導入できるシステムで、安価なものから順に並んでいます。

|reComputer RK3576-30|reComputer RK3588-30|reComputer AI Industrial R2135-12|
|------------------|--------------------------|-----------------------|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-rk3576.jpg" alt="reComputer RK3576-30" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-_r235.jpeg" alt="reComputer AI Industrial R2135-12" width={300} height="auto" />|
|Rockchip RK3576<br/>6 TOPS NPU · 8GB LPDDR5<br/>2x GbE — エントリーポイント|Rockchip RK3588<br/>6 TOPS NPU · 8GB LPDDR5<br/>2x 2.5GbE、高速コア|Raspberry Pi CM5 + Hailo-8<br/>26 TOPS · 8GB · 32GB eMMC<br/>IP40、-20〜65 °C、DIN レール|
|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html)</p>|

顔認識は軽いワークロードなので、エントリーボックスであっても単一サイトには十分です。どちらの Rockchip モデルも同じ 6 TOPS NPU を搭載しており、RK3588 で得られるのは推論スループットの増加ではなく、より高速なコアと 2.5GbE です。DIN レール対応の産業用筐体で専用の Hailo アクセラレータが必要な場合は R2135 にステップアップしてください。

:::note 注文時は製品名に注意
このファミリーでは、名前に **AI Industrial** を含むものはアクティブ冷却で、プレーンな **Industrial** ラインはファンレスです。両者は 1 語だけ異なり、それ以外はほぼ同一です。上の表にあるボックスにはファンがありますが、導入先でパッシブ冷却が必要な場合は、同じ Hailo-8 をファンレス筐体で搭載した [reComputer Industrial R2135-12](https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html) を代わりに注文してください。
:::

#### 完全オンプレミス化

上記のボックスは顔認識をカバーします。デフォルトでは、*音声* 側 — 音声認識、ツールを選択する言語モデル、音声合成 — はクラウド上で動作します。「音声がネットワーク外に出ることはあるか？」という問いに対して、必ず「いいえ」と答えなければならない顧客向けには、そのパイプライン全体をオンサイトで実行できるようにも提供しています。より大きなボックス上で顔モデルと並行してホストします。サイズを決めるのは TOPS ではなくメモリ容量です。

|reComputer Robotics J4012|reComputer Mini J5012 with GMSL|NVIDIA Jetson AGX Thor Developer Kit|
|------------------|--------------------------|-----------------------|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110310-recomputer-robotics_2.jpg" alt="reComputer Robotics J4012" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg" alt="reComputer Mini J5012 with GMSL" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-kit-3.png" alt="NVIDIA Jetson AGX Thor Developer Kit" width={300} height="auto" />|
|Jetson Orin NX 16GB<br/>最大 100 TOPS · 16GB LPDDR5<br/>**同時に 1 会話のみ**|Jetson AGX Orin 64GB<br/>64GB LPDDR5 · 64GB eMMC<br/>19〜48V 入力、10GbE、GMSL および CAN|Jetson AGX Thor、Blackwell GPU<br/>128GB LPDDR5X（273GB/s）<br/>最大クラスのモデル、最長コンテキスト|
|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ入手!](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)</p>|

:::caution J4012 はスタックを動かせるが、同時セッションは 1 つだけ
16 GB あればパイプライン全体を保持できるため、単一の Watcher には適しています。ただし同時会話は提供できません — 2 人目のオペレーターが 2 台目のデバイスと同時に会話する、という状況には対応できません。設置台数ではなく、「同時に使用されるデバイス数」に合わせてサイズを決めてください。
:::

単一ステーションのサイトには J4012 を、車両やプラント電源で動作し産業用バスと通信する必要がある場合は Mini J5012 を、同時接続と 1 台で提供できる最大クラスのモデルを求める場合は Thor を選んでください。いずれにしても、これはハードウェアとソフトウェアを組み合わせた提供です — 自前で組み立てるのではなく、オンサイト構成については [私たちにご相談ください](mailto:solution@seeed.cc)。

## パート 3 — あなたが実装するもの

あなた側には 5 つのコンポーネントが存在します。リファレンス実装は最初の 4 つをカバーしているので、このセクションは「何を読んで再現すべきか」の地図として扱ってください。

### 1. 検証エンドポイント

MCP サーバーは、ゲート付きツールの前に 1 つのエンドポイントを呼び出し、あなたのバックエンドがそれに応答します。以下の形を維持すれば、リファレンスのツールレイヤーは変更なしであなたのシステムに対して動作します。

リクエスト：

```jsonc
POST /api/face/verify-mcp
{
  "operation": "stock_out",        // required — the rule key
  "warehouse_id": 1,
  "request_id": "…",               // for audit correlation
  "image_b64": "…",                // server-inference path
  "embedding_b64": "…",            // or a precomputed embedding
  "embedding_model_tag": "…",
  "device_id": "…"                 // from the transport, never from the model
}
```

レスポンス — 常に次の 5 つのキー：

```jsonc
{
  "status": "pass" | "deny" | "skipped",
  "failure_reason": "…",           // null when it passed cleanly
  "confidence": 0.87,
  "matched_subject_id": 12,
  "matched_subject_name": "Zhang San"
}
```

`pass` と `skipped` は操作を許可し、`deny` はブロックします。

:::caution クローズドフェイルにし、タイムアウト予算に注意
404、タイムアウト、不正なボディなど、あらゆるエラーを常に `deny` として扱い、許可として扱ってはいけません。また、ハンドラーは **18 秒** のクライアントタイムアウトを十分に下回るようにしてください。それを超えると、呼び出し元はトランスポートエラーとして記録し、いずれにせよ拒否します。その中にデバイスとの往復時間も見込んでください：現在の話者の読み取りに約 6.5 秒、フレーム取得に 8 秒、LAN 上の推論サービスへの到達に 10 秒です。
:::

採用において重要なのは 2 つの `status` 値です：機能がオフである場合や、その操作に顔が必要なルールが存在しない場合は `skipped` を返してください。そうすることでゲートは透過的になり、ツールコードに手を入れることなく、まず MCP サーバーを出荷し、後から検証をオンにできます。

### 2. デバイスワイヤプロトコル

ここはあなた自身のシステムから類推できない部分であり、デバイスファームウェアが話すプロトコルです。エンドポイントは 3 つで、すべて LAN 上のプレーン HTTP です。

**顔ライブラリをプッシュする**（パス 1 のみ） — `POST http://<device-ip>:80/api/face/batch-update`。ポートは 80 に固定されている点に注意してください。

```jsonc
{
  "model_tag": "we2-mfnr6-128-v1",
  "embedding_format": "fp16",
  "faces": [{"name": "Zhang San", "subject_id": 12, "embedding_b64": "…"}],
  "match_threshold": 45,              // int, 0-100
  "identify_mode": "local",           // or "lan"
  "identify_endpoint": "…",
  "identify_token": "…",
  "pull_token": "…"                   // per-device, you generate it
}
```

埋め込みベクトルはワイヤ上では `fp16`（128 次元で 256 バイト）として送られ、データベースには正準の `float32` を保持します。`model_tag` が一致しない場合、そのバッチ全体が拒否されます。

**現在の話者を読み取る** — `GET http://<device-ip>/api/face/current-speaker?fresh=0`、ヘッダー `X-Face-Token: <pull_token>`、`{valid, name, subject_id, similarity, mode, age_ms}` を返します。`valid` が厳密に true であることを要求してください。

**カメラフレームを取得する** — `GET http://<device-ip>/api/face/capture`、同じヘッダーで、`image/jpeg` を返します。

:::caution プッシュエンドポイントには認証がない
`batch-update` にはデバイス側の認証がありません。同じネットワーク上の誰でも顔ライブラリを上書きできます。これらのデバイスは信頼できる、もしくは分離されたセグメントに配置してください。
:::

### 3. 設定サーフェス

誰かがモードとしきい値、そしてどの操作に顔が必要かを選択する必要があります。そのための画面が必要です。リファレンス実装の画面は、**あなた自身の UI が公開すべき決定事項を示す例として** ここに掲載しています — あなたがログインするのは私たちのシステムではありません。

認識モード、検証頻度、信頼度しきい値、およびリモートエンドポイント：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-config-verify-mode.png" alt="recognition mode, verification frequency, confidence threshold and remote endpoint"/>
</div>

倉庫単位でスコープされた、許可リストと任意のしきい値上書きを含む、操作ごとのルール：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-rules.png" alt="per-operation face rules with warehouse scope, allow-list and threshold override"/>
</div>

コピーする価値のあるルールセット：

| Rule key | 対象 |
| :--- | :--- |
| `stock_in` | 入庫 |
| `stock_out` | 出庫 |
| `move_batch_location` | バッチの移動 |
| `query` | すべての読み取り操作 — 在庫照会、バッチ照会、検索、統計 |

空の許可リストは、登録済みかつアクティブなすべての人物が許可されることを意味します。空でない場合、その操作はそのリスト内の人物に制限されるため、他の誰かに対する高い一致度であっても拒否されます。

### 4. 監査証跡

失敗だけでなく、すべての判断を記録します — 許可された記録こそが、その操作が承認されていたことの証拠になります。一致した人物、信頼度、判定結果、その理由を記録してください。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-audit-log.png" alt="face authentication audit log showing matched person, confidence and verdict per operation"/>
</div>

トランザクションテーブルでは、検証済みの名前を専用のカラムに保持します：

```sql
-- Snapshot of the operator name resolved by face recognition.
ALTER TABLE <your_inventory_transactions>
  ADD COLUMN actual_operator VARCHAR(255) NULL;
```

3 つの制約があり、3 つ目が最も重要です：

1. **NULL を許容する必要があります。** 検証が無効化されている場合、またはどのルールも検証を要求していない場合、この値は `NULL` です。
2. **外部キーではなく名前を保存します** — スナップショットとして保存することで、その人物が削除された後でもレコードが正しく読めるようにします。
3. **モデルが入力するオペレータフィールドと決して統合しないでください。** そのフィールドは話者が*何と言ったか*を反映しており、偽である可能性があります。一方こちらはカメラが*何を見たか*です。両者を統合すると、信頼できる値を信頼できない値に押し込めてしまい、顔認証を構築する価値のある唯一の区別を捨ててしまいます。

### 5. 生体データ

この側を構築しホストするのはあなたなので、**あなたがデータ管理者です**。継承ではなく、意図的に行うべき 4 つの判断があります：

- 登録された各人物に対する**適法な根拠と同意**。一部の法域では、職場での従業員の生体情報は労働法や労使協議会の協議事項にもなり得ます。
- **保存期間と削除。** 人物を削除する際には、行を無効化するだけでなく、その人物の埋め込みも削除しなければなりません。
- **登録時の写真を保持するかどうか。** このページでは、モデル変更時に名簿を再計算できるよう、元画像を保持することを推奨しています。これは運用上の利便性がありますが、プライバシー上のコストも伴います — これはあなたの判断であり、明示的に決める価値があります。
- **埋め込みを個人データとして扱うこと。** それらは数値ですが、個人を識別し、多くの法域でそのように規制されています。

## 知っておくべき落とし穴

リファレンス実装では、フェイスゲートとデータ Provider が**同じ** `api_base_url` 設定フィールドを読み取ります。

`api_base_url` をあなた自身のシステムに向けているのに、そこに `/api/face/verify-mcp` を実装していない場合、ゲートは 404 を受け取ります。ポリシーはフェイルクローズなので、**読み取り専用クエリを含むすべてのツールが動かなくなります** — 症状からは顔認識が原因だと分からないため、分かりにくい障害です。

| `api_base_url` の指す先 | ゲートの結果 | 影響 |
| :--- | :--- | :--- |
| あなたのシステム、`/face/verify-mcp` なし | `deny` · `http_404` | すべてのツールがブロックされる |
| 到達不能なアドレス | `deny` · `transport_error` | すべてのツールがブロックされる |
| 空文字列 | `skipped` · `no_api_base` | ツールは動作するが、Provider もベース URL を失う |
| エンドポイントを実装しているバックエンド | あなたのルールによって決定 | 正常 |

抜け出す方法は 2 つあります。最終的な宛先であるあなた自身のバックエンドにエンドポイントを実装します — まだ検証の準備ができていない場合は、まず一定の `skipped` を返すスタブを実装してください：

```python
@app.post("/api/face/verify-mcp")
def verify_mcp():
    return {"status": "skipped", "failure_reason": "feature_disabled",
            "confidence": None, "matched_subject_id": None,
            "matched_subject_name": None}
```

あるいはフィールドを分割し、ゲートには `api_base_url` を使い続けつつ、あなた自身のアドレスはカスタムキーから読み取ります：

```yaml
provider: "my_wms"
api_base_url: "http://your-backend:2124/api"           # serves the face gate
auth:
  type: api_key
  key: "wh_xxx"
wms_base_url: "https://your-wms.example.com/api/v1"    # your business API
wms_token: "your-token"
```

そして、[Part 1](#option-a--reuse-the-bridge-swap-the-data-source) にあるように、Provider のコンストラクタ内で `base_url` を上書きします。2 つの認証情報セットは独立したままです。

## FAQ

### 1. プッシュで送信された顔数が 0 と報告される

顔ライブラリはモデルタグでフィルタリングされます。`we2-mfnr6-128-v1` を持つ登録だけがデバイスへのプッシュ対象となるため、別のタグを持つリモートエンドポイントに対して作成された登録は黙って除外されます — 再登録するか、バックグラウンドでの再計算が完了するのを待ってください。

### 2. `actual_operator` が記録上いつも空である

その操作に顔を要求するルールがない場合、または検証がオフになっている場合に想定される挙動です。その操作用のルールを作成して、記録を開始してください。

### 3. 独自のデータソースに差し替えたのに、書き込みが依然としてリファレンスデータベースに入る

リファレンスのツールレイヤは、エラーが発生するとデフォルトの Provider にフォールバックし、大きな失敗にはせず警告をログに記録します。その警告について MCP ログを確認してください — そして出荷前にこの挙動を変更する方法については、[Option A](#option-a--reuse-the-bridge-swap-the-data-source) を参照してください。

### 4. 検証が遅い、または断続的に拒否される

3 つのタイムアウトがこのチェーンを制限しています：MCP クライアントからバックエンドまで 18 秒、バックエンドからリモート推論サービスまで 10 秒、バックエンドからデバイスまでおよそ 6.5〜8 秒です。これらは上限であり、典型的なレイテンシではありません — 実際の値は必ず計測してください。相手は端末の前に立って待っている人間です。推論サービスの処理時間が 10 秒に近づくようであれば、モデルサイズか画像解像度を下げてください。

### 5. 操作ごとではなく、会話ごとに 1 回だけ検証できますか？

はい。検証頻度を `session` に設定すると、最初の成功したチェックがその会話の間キャッシュされ、最大 10 分間有効になります。

何をトレードオフにしているかを理解してください：その 10 分間、その会話内のすべての操作は、最初に一度だけ一致した人物に帰属されます。その会話を引き継いだ人は、その人物の ID を継承します。長いピッキング作業中に繰り返しプロンプトを出さないことがメリットになる場面では `session` を使い、個々の操作を独立して証明する必要がある場面では `always` を使ってください。

## リソース

- [warehouse_system on GitHub](https://github.com/suharvest/warehouse_system) — リファレンス実装です。統合レイヤについては `mcp/README.md`、アダプタ契約については `mcp/providers/base.py`、検証ロジックについてはバックエンドのフェイスオーケストレータから始めてください
- [Bring Voice AI to Your Business System (MCP)](/ja/mcp_external_system_integration) — このページが前提としている MCP ブリッジのセットアップ
- [Face Recognition with MCP](/ja/face_regonition_with_mcp) — デバイスレベルの手順：ファームウェアの書き込み、Hailo で加速された認識サービスの立ち上げ、顔データベースの管理
- [MCP Endpoint Setup Guide](/ja/mcp_endpoint) — MCP エンドポイントの作成と管理
- [Model Context Protocol](https://github.com/modelcontextprotocol) — プロトコル仕様

## テクニカルサポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
