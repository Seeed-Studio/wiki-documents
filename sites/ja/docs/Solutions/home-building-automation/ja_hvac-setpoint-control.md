---
description: エッジゲートウェイ上の中央空調設定値の監視制御：OPC UA、Modbus、BACnet/IP と SDM630 電力量計を1つのポイントモデルに統合し、KNNで設定値を予測、書き込みはすべて読み戻して確認
title: 'スマートHVAC制御：機器選定・導入・実測データ'
keywords:
  - HVAC setpoint control
  - building energy retrofit
  - supervisory control
  - BACnet/IP
  - Modbus TCP
  - Modbus RTU
  - OPC UA
  - Eastron SDM630
  - energy meter template
  - KNN prediction
  - write readback verification
  - control rollback
  - reComputer R1100
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg
slug: /solutions/hvac-setpoint-control
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/ja/solutions/hvac-setpoint-control/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[利用上の注意]
これは**監視型設定値レコメンダー**であり、安全認証済みの制御システムではありません。プラント固有のインターロックと安全制御が優先され、省エネ率の数値は示していません。
:::

## このソリューションでできること

オフィス、モール、工場の中央 HVAC プラントは通常、フロアが満員でも空いていても同じ設定値を使う
固定スケジュールで動作します。このソリューションはプラントのそばにゲートウェイを置き、HVAC
コントローラーと電力量計を**単一のポイントモデル**に取り込み、建物自身の過去データから設定値を推奨し、
コントローラーへ書き戻します。書き込みは、現場から値を読み戻して送信値と一致した時点で適用済みとなります。

中央プラントのチラー、エアハンドラー、およびそれらの前段にあるコントローラーを対象にします。分離型
エアコン向けではなく、安全ループにも接続しません。

- 選定と導入：[参考設計ページ](https://www.seeed.co.jp/solutions/reference-designs/smart_hvac_control)
- ソースリポジトリ：未公開。`github.com/Seeed-Solution/Solution_HVAC_SmartControl` は公開されていません。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>既存のコントローラーと電力量計をそのまま接続</h3>
                <p>OPC UA、Modbus TCP、RS-485 上の Modbus RTU、BACnet/IP に対応したコントローラーは交換不要で、SDM630 電力量計には組み込みテンプレートがあります。上限は2,000ポイント、うち最大50ポイントを書き込み可能にできます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>書き込みはすべて読み戻して確認</h3>
                <p>書き込み前に直近の正常値、品質、タイムスタンプ、優先度を固定します。安定待ちの後にポイントを再読し、許容差内で比較します。品質が good でない読み戻しは合格になりません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>障害時は自動ロールバックとアラーム</h3>
                <p>読み戻し不一致、ソース停止、予測無効化、オペレーター中断、バッチの部分適用のいずれでもロールバックします。アラームは原因で識別し、同じ障害が繰り返されると未解決のアラームを再利用します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>測定容量：349.99 events/s で2,000ポイント</h3>
                <p>目標350.0に対し、reComputer R2000シリーズで180秒のループバックを1回実行して測定しました。条件は付録にあります。</p>
            </div>
        </li>
    </ul>
</div>

### コンソールに表示される内容

稼働中のコンソールには、ポイントごとの品質を含むポイント表、各ソースと登録ポイント数を示すアクセスページ、
コマンド受領台帳が表示されます。書き込み経路は台帳で確認できます。各行には要求値、実効値、実行主体、
プロトコル確認応答、安定待ち後の読み戻し結果が記録されます。レジスターが外部で変更された書き込みは、
検出された値とともに `mismatched, compensated` と表示され、`plugin:prediction:rollback` が発行した補正コマンドが次の行に表示されます。

アクセスページには各ソースと登録ポイント数が一覧表示され、配線が機能していることを最初に確認できます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-list-en-9837244f.png" alt="アクセスページ：各ソースのプロトコル、アドレス、オンライン状態、登録ポイント数"/>
</div>

ポイント表にはポイントごとの品質が含まれるため、`good` 以外のポイントをここで確認できます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/points-en-477df2ca.png" alt="ポイント表：名前、現在値、単位、品質、最終更新"/>
</div>

予測ランタイムページには今回の推奨設定値、その根拠となる履歴ウィンドウ、現在の制御モードが表示されます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/prediction-runtime-en-9217f059.png" alt="予測ランタイムページ：今回の推奨設定値、履歴ウィンドウ、制御モード"/>
</div>

書き込み経路はコマンド受領台帳で確認できます。要求値、実効値、実行主体、プロトコル確認応答、読み戻しがそれぞれ列になります。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/control-step2-en-ae5581de.png" alt="コマンド送信ステップ2：書き込む値、対象ポイント、安全上限を確認"/>
</div>

上記のキャプチャは、実物の電力量計やコントローラーではなく、パッケージ同梱のプロトコルシミュレーターに接続したものです。ゲートウェイ側では出荷版のソフトウェアが動いています。

## 必要な機器

必要なのは、既存のコントローラー、電力量計、Dockerホストの3つです。

**① HVACコントローラー** — プラントの前段にある既存機器で、OPC UA、Modbus TCP/RTU、BACnet/IP のいずれかに対応していれば使用できます。プラントを接続しない試験用に、パッケージにはポート4841のOPC UAシミュレーターが含まれます。

**② 電力量計** — Modbus V2レジスターマップの Eastron SDM630 を、Modbus TCP、Modbus TCPゲートウェイ、またはRS-485経由で接続します。読み取り専用ポイントは10個で、三相電圧・電流、総有効電力 (kW)、総力率、周波数、受電有効電力量 (kWh) を含みます。

**③ ゲートウェイホスト** — 選定が必要な機器はこれだけです。サービスは x86-64 または arm64 上のDockerワークロードなので、プラントネットワーク上の既存Linuxマシンを利用できます。

| | ゲートウェイ | ストレージ | 選択する場面 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991374.jpg" alt="reComputer R1124-10" width="110" /> | [reComputer R1124-10](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html)<br/>4 GB RAM、RS-485 / RS-232 / DI / DO搭載 | 16 GB eMMC | 履歴はサーバーに保存し、ゲートウェイには短いローカル期間だけ保持する場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>同一基板でeMMC容量が大きい | 32 GB eMMC | 数か月分の運転履歴をゲートウェイに保持し、学習データをローカルで再取り込みする場合 |

R1100シリーズにはRS-485が搭載されているため、RS-485接続の電力量計にUSBアダプターは不要です。**サービス自体は約1 GBのディスクを必要とします**。ストレージ容量で、サーバーなしでローカルに参照できる履歴の長さが決まります。

その他の前提条件は、Docker Engine 20.10以降、ホスト上で8280と4841が空いていること、タイムスタンプ、設定値、測定温度、消費電力の列を持つCSVまたはExcel形式の少なくとも1週間分の運転履歴です。

## 現場への導入

### 1. ハードウェアの設置：配線

:::tip[最初に電力量計のバイト順とワード順を確認してください]
組み込みのSDM630テンプレートは、メーカー公開のデフォルトに合わせてバイトとワードをビッグエンディアンに
設定しています。既知の物理値を持つレジスターを読み、電力量計の表示と比較してください。
電圧・周波数が近いのに合わない、受電電力量が逆戻りする場合は、多くがワード順の設定ミスです。配線より先にワード順を確認してください。
:::

ゲートウェイをコントローラーおよび電力量計（またはModbus TCPゲートウェイ）と同じネットワークに置きます。
Modbus RTUでは、ボーレート、パリティ、unit idを電力量計の設定に合わせてください。不一致の場合はエラーメッセージが出ず、
タイムアウトになるだけです。**シリアルデバイス用導入プロファイル**を使ってください。標準Dockerプロファイルはホストの
シリアルデバイスを接続しないため、コンテナ内に `/dev/ttyUSB0` は存在しません。

### 2. ソフトウェア：3ステップ

各ステップのフォームの入力項目とアプリケーションパッケージは参考設計ページにあります。現場に合わせて構成を選び、ダウンロードしてください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/smart_hvac_control" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んでダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

手順の概要：

1. **サービスを導入** — 導入ツールを実行するマシン上、またはSSH経由でプラントネットワーク内の機器にDockerで導入します。フォームには電力量計のトランスポート、OPC UAエンドポイント、安全上限、制御モード、アラームしきい値を指定します。
2. **コンソールを開く** — 最初の管理者を作成し、両方のソースが想定ポイント数でオンラインになっていることを確認します。アクセスウィザードではプロトコルごとにアドレスとポーリング間隔を入力します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-wizard-step1-en-7a3d57a8.png" alt="アクセスウィザードのステップ1：プロトコル、アドレス、ポーリング間隔を指定"/>
</div>

3. **試運転** — 電力量計を登録し、observeモードで予測を実行し、意図的に障害を注入してから書き込みを有効にします。バッチ送信前に、選択ページで対象ポイントを正確に確認します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/batch-select-en-9bd95ba4.png" alt="バッチ送信の選択：対象ポイントと現在値"/>
</div>

<!-- TODO 画像：機器の隣に設置したゲートウェイ。現場撮影が必要 -->
<!-- TODO 画像：配線済みの実物の電力量計とコントローラー（ここまでのキャプチャはすべてプロトコルシミュレーター経由）。現場撮影が必要 -->

**Control Modeは `observe` のままにし、Safety Baseline Approved Byは空欄にします。** 承認者が空欄の間、基準値は未承認と表示されます。名前を入力すると、その技術者が安全上限を承認したことになります。

ポイントを読み取る稼働中コンソールまでの目安は**約60分**です。試運転には、プラント運用者が確認するobserveモード予測の完全な稼働サイクルが含まれるため、さらに時間がかかります。

:::caution[公開済みイメージの対応範囲]
公開済みの `missionpack-knn:v1.6.5` **には**SDM630テンプレート、ロールバックコーディネーター、アラームエンベロープが含まれていません。v1.6.5ではobserveモードの手順だけが適用でき、電力量計、ロールバック、アラームの手順は完了できません。
:::

## 利用できるインターフェース

導入で公開されるすべての機能は、ゲートウェイホスト上の1つのHTTPポートの背後にあります。北向き公開を有効にしない限り、プラントネットワークの外へデータは出ません。

- **運用者** — `8280` のブラウザーコンソール：ポイントごとの品質を含むポイント表、電力量計登録、予測実行、コマンド受領、アラームバナー。
- **監視** — `GET /system/runtime-metrics`。北向き公開を有効にすると `northbound.spool.queued` と `northbound.spool.dropped` が含まれます。`dropped` を変えずに `queued` が0へ戻ることを試運転で確認します。
- **自社システム** — `8280` の同じコンソールAPIに加え、起動時に導入が待機するヘルスエンドポイント。

### エンドポイント一覧

| ポート / エンドポイント | 提供内容 | インターネット |
|---|---|---|
| `8280` `/` | ブラウザーコンソール | 不要 |
| `8280` `/system/runtime-metrics` | ランタイムカウンター、北向きスプールカウンター | 不要 |
| `8280` `/api/v1/health` | ヘルスチェック。起動時は30秒を許容 | 不要 |
| `4841` | 試験用の組み込みOPC UAシミュレーター | 不要 |

**コマンド受領では読み戻し列を見てください**：`protocol_acknowledged` はコントローラーがフレームを受理したことを示すだけです。読み戻し列（`matched`、または検出値付きの `mismatched, compensated`）が現場に実際に保持されている値です。ロールバックコーディネーターが発行した補正は、取り消した書き込みの直後に独自の受領として現れるため、2つの表を結合せず監査履歴を順に読めます。

コンテナログは10 MBでローテーションし、4世代を保持します（`docker logs missionpack_knn`）。古いログが失われる前に、コマンド監査履歴、ロールバックジャーナル、アラーム履歴をエクスポートしてください。

### 南向きプロトコルの対応範囲

すべてのポイントは1つのレジストリに保持されます。上限は**2,000ポイント**で、そのうち**最大50ポイントを書き込み可能**にできます。SDM630の10ポイントは読み取り専用で、50ポイント枠ではなく2,000ポイント枠に算入します。

| トランスポート | 役割 | 制約 |
|---|---|---|
| OPC UA | HVACコントローラーの読み書き | 導入ごとにエンドポイントを設定。組み込みシミュレーターは4841 |
| Modbus TCP | 電力量計とコントローラー | ソースごとにunit idとポート。直接接続またはTCPゲートウェイ経由 |
| Modbus RTU (RS-485) | 電力量計 | シリアルデバイス用導入プロファイルが必要。標準プロファイルはホストのシリアルデバイスを接続しない |
| BACnet/IP | エアハンドラーの読み書き | 書き込みは優先度を使用し、`Null` で解放。**COV購読、BBMD登録、MS-TPは未実装** |

## 性能と実測データ {#measured-data}

ここにある値はすべてプロトコルシミュレーターに対してループバックで測定したもので、建物のデータはありません。明記しない限り各値は1回の実行によるものです。

### 容量

| 指標 | 値 | 条件 |
|---|---:|---|
| サンプリングスループット | 349.99 events/s（350.0目標の99.99%） | 2,000ポイント、4プロトコルソース |
| 予測レート | 0.939 cycle/s | 同じ実行 |
| プロセスグループRSSピーク | 217.3 MiB | 同じ実行 |

3行すべての条件：4プロトコルソースにまたがる2,000ポイント、OPC UAとModbusは5秒、BACnetは10秒間隔でサンプリング、ループバックのみ、reComputer R2000シリーズ（arm64）で**180秒**実行。

再現：upstream `b5fe4cc`、キャプチャ `capacity-smoke` r14

### 遅延

| 指標 | 値 | 条件 |
|---|---:|---|
| 予測サイクル遅延 | 最大46.27 ms | n = 4サイクル、負荷なし |
| 制御受付遅延 | 最大1.41 ms | n = 2サイクル、負荷なし |

どちらもコードパス自体の処理時間を示すだけです。

再現：upstream `f831bae`、`northbound-smoke` のランタイムベースライン

### ランタイムと主要パラメーター

予測モデルはKNNで、建物自身の過去運転データ（タイムスタンプ、設定値、測定温度、消費電力の列を持つCSVまたはExcel）で学習します。サービスはx86-64またはarm64上のDockerワークロードです。各予測はコントローラーへ送る前にコンソールで確認できます。

- **制御モードと安全限界値**：制御モードの出荷時設定は `observe` で、オペレーターが変更するまでどのポイントにも書き込みません。設定値の下限 / 上限 18 / 30 °C、最大変化量 1.0 °C / 300 s、モードのホワイトリスト off / fan / cool / heat / auto はすべて**プレースホルダー**です。プラントに合わせて入力してください。
- **書き戻し検証は既定で無効です**：コンソールで作成する予測実行設定に `"rollback": { "enabled": true, "settle_seconds": 2.5 }` を明示してください。`rollback` セクションがない場合は `enabled: false` として扱われます。
- **`settle_seconds`**（0–30、デフォルト1.0）は**ソースの収集間隔より長くする必要があります**。短いと、読み戻しが書き込み前の値を見て、存在しない不一致を報告します。

### 既知の劣化

- **予測レートには構造上の上限があります（未修正）**：予測ループは各サイクル後に固定間隔でスリープするため、レートは `1/(1.0 + t_cycle)` です。2,000ポイントでは `t_cycle` が約**0.119 s**となり、上限は**0.894 cycle/s**付近で、長時間テストが要求する0.90ゲートを下回ります。
- **読み戻しで検証されるのはModbusの書き込みだけです**：BACnet出力は使える書き込み優先度がないためスキップされます。
- **バイト順**：電力量計の表示と照合するまで、電力量計ポイントはメーカー既定（ビッグエンディアン）のワード順で解釈され、値が誤っている可能性があります。

### 次のステップ

- reComputer R10 シリーズまたは reTerminal DM に実機を接続し、OPC UA、Modbus TCP、Modbus RTU（USB-RS-485）、BACnet/IP の読み書きと独立した読み戻しを行います。
- 同じ対象ホストで 72 時間の無人運転を行い、その間にネットワーク、ブローカー、プロセス、デバイスの復旧演習を実施します。

## データと素材の出典

- **SDM630レジスターマップ** — Eastron公開のModbusプロトコル文書（Modbus V2レジスターマップ、IEEE-754 float32入力レジスター）。アドレスは同文書に従い、ビッグエンディアンのバイト順・ワード順はメーカーのデフォルトです。
- **過去運転データ** — 導入サイトが提供します。パッケージには含まれず、公開データセットも使用・要求しません。
- **コンソールキャプチャ** — パッケージ同梱のプロトコルシミュレーターに接続してパッケージソフトを実行した際のオリジナル画面です。シミュレーター設定、キャプチャホスト、チェックサムはパッケージの `gallery/ATTRIBUTION.md` に記録されています。第三者素材、ブランドマーク、ストック画像は含まれません。
- **アーキテクチャ図** — 構造化アーキテクチャIRから作成したオリジナルで、第三者アートは使用していません。
