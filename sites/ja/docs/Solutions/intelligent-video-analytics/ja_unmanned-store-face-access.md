---
description: 人が常駐しないドアの顔認証入退室管理——必要なハードウェア、導入手順、利用できるインターフェース、顔ライブラリ有効化・解錠時間・拒否の実測データ
title: '無人店舗の顔認証アクセス：ハードウェア、顔ライブラリ配布、実測範囲'
keywords:
  - 無人店舗の顔認証アクセス制御
  - 顔認証ドアアクセス
  - パッシブ・ライブネスによるなりすまし対策
  - バージョン管理された顔ライブラリ配布
  - MQTT リレー解錠
  - ハッシュチェーン監査ログ
  - reCamera Pro GPIO リレー
  - XIAO ESP32-S3 MQTT リレーノード
  - InsightFace buffalo_l のライセンス
  - アクセス制御すぐに導入できるソリューション
image: https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg
slug: /solutions/unmanned-store-face-access
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/ja/solutions/unmanned-store-face-access/
generated_from: sensecraft-solutions@e1864ef
---

:::caution[利用上の注意]
セキュリティ製品としての認証は受けておらず、人命安全システムでもありません。参照用の顔重み（InsightFace `buffalo_l`）は非商用研究用途に限ってライセンスされており、商用導入には商用ライセンスのモデルが必要です。
:::

## このソリューションが行うこと

人が常駐しないドアのカメラが顔を認識し、パッシブ・ライブネス検査の通過を確認したうえで、現在の顔ライブラリ、
スケジュール、ブロックリストと照合します。すべての条件を満たした場合だけ、独立した 12/24 V 電源で動くロックを切り替える
リレーにパルスを送ります。許可・拒否を問わず、すべての判定は MQTT に公開され、コンソールで検証できるハッシュチェーン監査ログに追記されます。

無人または少人数運営の店舗の従業員入口・倉庫・裏口、名簿が毎週変わり登録をセルフサービスにしたい共有オフィス、
スループットより通過者の記録が重要な機器室、既設の RTSP カメラを交換したくない現場に向いています。

- 選定と導入：[すぐに導入できるソリューションページ](https://www.seeed.co.jp/solutions/reference-designs/unmanned_store_access)
- 上流リポジトリ：未公開です。コードは現在内部リポジトリにあります。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>オフラインでも解錠（5 プリセット中 3 つ）</h3>
                <p>認識、ライブネス、判定、解錠はすべてドア側で行います。クラウドとの接続を失っても、最後に正常ロードした顔ライブラリで解錠を続けます。2 つの MQTT リレープリセットでは、解錠信号がネットワーク経由でリレーに届きます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>顔ライブラリを自動で配布・検証</h3>
                <p>デバイスが新しいバージョンをポーリングし、分割ダウンロード、ファイルごとの SHA-256、マニフェスト署名を確認してからアトミックに切り替えます。どこかで失敗すると旧バージョンを保持します。標準 reCamera での実測有効化時間は p50 491.6 ms です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>削除した人はロールバックで戻りません</h3>
                <p>人を削除すると、その人を含まない新しいバージョンを生成し、削除バリアを書き込みます。その人をまだ含むバージョンへのロールバックは、名前を示して拒否されます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>すべての判定を監査ログに記録</h3>
                <p>許可・拒否のどちらも MQTT に送信され、ハッシュチェーン付きの監査ログに追記されます。過去の記録を 1 件でも書き換えると、コンソールのチェーン検証で検出されます。</p>
            </div>
        </li>
    </ul>
</div>

### ドア側デバイスに表示されるもの

reCamera Pro の認識画面では、顔枠に一致した person id とそのフレームの判定が表示されます。前に人がいない場合は、構図だけが表示されます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg" alt="reCamera Pro アプリ画面：顔枠とそのフレームの判定"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-no-person-5ee3d054.jpg" alt="同じ取り付け位置で人がいない状態。構図と露出の確認用"/>
</div>

## 必要なハードウェア

ドア側の 3 つのデバイス役割と、クラウドまたはオンプレミスのホスト 1 台です。

**① ドアのカメラ。** デバイス内蔵センサー（reCamera Pro または標準 reCamera）か、別ホストへ映像を送る既存の RTSP カメラを使います。実際に人が立ち止まる距離で、1 人の顔がフレームの十分な部分を占めるよう、顔の高さ付近に取り付けます。逆光の出入口とガラスの反射は認識失敗のよくある原因です。

**② 認識と判定を行う装置。**

| 認識ホスト | 認識の実行場所 | 導入形態 |
|---|---|---|
| reCamera Pro (RV1126B) | カメラ上で既存の顔認識アプリと並行して実行 | カメラ本体に導入、コンテナなし（Buildroot のため Docker なし） |
| 標準 reCamera (SG2002 / CV181x) | カメラ上の 1 つのネイティブプロセスで検出、埋め込み、ライブネス、照合を実行 | 小さなデーモンをコピー、コンテナなし |
| reComputer Industrial J20 | コンテナ内、既存の RTSP ストリームに対して | SSH 経由のコンテナ |
| reComputer J30 / J40 / R2000 | コンテナ内、既存の RTSP ストリームに対して | SSH 経由のコンテナ |

**③ リレー。** ロックは必ずリレーまたは無電圧接点の後段に置き、演算ボードとは分離した専用の 12/24 V 電源で動かします。ロックは 300 mA
〜 1 A を消費しますが、GPIO ピンとフォトカプラ絶縁デジタル出力が扱えるのは mA 単位です。4 つの設定 —
`active_high`、`pulse_ms`、`relay_contact`、`fail_mode` — は設置ごとに設定し、既定値はありません。フェイルセーフ電磁ロックを常開接点に配線するとドアが開いたままになり、実際に試験するまで気付けないためです。

**④ クラウドまたはオンプレミスのホスト。** Docker を備えた amd64 または arm64 の Linux マシンで、GPU は不要です。顔ライブラリサービス、管理コンソール、MQTT ブローカーを実行します。すべてのドア側デバイスから到達でき、時計も正確である必要があります。RTC のないデバイスは HTTP の `Date` ヘッダーから時刻補正を得ます。

## 現場への導入方法

2 つの部分に分かれ、順序を守る必要があります。

### 1：ドアを配線する — LED、リレー、ロックの順

LED で極性とパルス幅を確認し、リレーで接点が作動する音を確認してからロックを接続します。フェイルセーフ電磁ロックは COM と NC、フェイルセキュアの電気錠は COM と NO に通します。逆にするとドアが開いたままになるため、`relay_contact` に既定値はありません。

**GPIO ピンが空いているか先に確認します。** 調査した reCamera Pro の 1 台では、`gpio131` がすでに export され、別のアプリケーションに駆動されていました。アクチュエータは現在状態が設定したアイドル状態と異なるピンでは起動せず、明示的に指示されない限りピンを奪いません。reCamera 2002 HQ PoE のベースボードの 6 ピンヘッダーには 3 本の IO ライン — D1 = sysfs 490（多重化されていない唯一の線）、CLK = 487、SMD = 488 — がありますが、ヘッダーのレベル極性と供給可能な電流はベンダー文書に記載がありません。メーターと LED で確認するまで、そこにロックを接続しないでください。J20 では設計仕様上 DO1–DO4 が sysfs 463/464/465/462 ですが、対象イメージがそれらをこの方法で公開するか `Jetson.GPIO` 経由で公開するかは、実機でまだ確認していません。

### 2：クラウド側を起動し、その後デバイス側を起動する

プリセットごとの完全な手順はすぐに導入できるソリューションページにあります。現場についていくつかの質問に答えると、対応するアプリケーションパッケージもダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/unmanned_store_access" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んでダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

クラウド側は `assets/cloud/` の compose ファイルにある顔ライブラリサービス、コンソール、ブローカーで構成します。トークンを設定しないとコンソールは起動を拒否します。**平文 HTTP 上の共有トークンは認証になりません**。リバースプロキシで TLS を終端してください。付属ブローカー設定は匿名の平文でテスト専用です。本番環境には TLS、デバイスごとの ID 認証、トピック ACL が必要ですが、付属設定にはいずれも含まれていません。

デバイス側はプリセットごとに異なります。reComputer のプリセットでは SSH 経由でコンテナを導入し、2 台の reCamera ではデーモンをコピーします。

クラウド側が起動したら、コンソールのデバイスページでドア側デバイスがオンラインで、ハートビートを送信し、想定した顔ライブラリバージョンを使っていることを確認します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-devices-en-f978d0b3.png" alt="コンソールのデバイスページ：オンライン状態、ハートビート、現在の顔ライブラリバージョン、アクチュエータの状態"/>
</div>

次に persons ページで通過を許可する人を登録します。登録によって新しい顔ライブラリバージョンが生成され、デバイスは次のポーリングで取得します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-persons-en-8c8db34d.png" alt="コンソールの persons ページ：登録済みの人と登録入口"/>
</div>

以下は一連の流れです。人を登録し、バージョンを公開し、デバイスが取得して切り替え、ドアがその人を認識します。

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-flow-7a02b8a9.gif" alt="登録からデバイスによる新しい顔ライブラリの取得、ドアでの認識まで"/>
</div>

ロックを接続する前に、PoE ベースボードで GPIO ラインを実際に駆動できることを確認します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/poe-activation-2de5d904.png" alt="reCamera 2002 HQ PoE でのアクチュエータ起動と D1 GPIO ラインの確保"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/gpio-relay-check-ad22020d.png" alt="許可判定後の同じライン（sysfs 490）のレベル読み戻し"/>
</div>

<!-- TODO image: 実際に設置したドア（カメラ、リレー、ロック）— 現場撮影が必要 -->

LAN 上では平文の `http://` ライブラリ URL も使えますが、マニフェストへの HMAC-SHA256 署名が必須です。キーがなければデバイスは起動を拒否します。署名は通信経路上の改ざんを防ぐもので、どれか 1 台のデバイスキーが漏えいすれば、それを使ってライブラリを偽造できます。

## 利用できるインターフェース

インターフェースは 5 つの MQTT トピックと 2 つの HTTP サーフェスで構成されます。

| トピック / エンドポイント | ペイロード | Retained |
|---|---|---|
| `access/v1/events` (MQTT 8883, QoS 1) | 判定ごとに 1 つの JSON — 下記参照 | No |
| `access/v1/status/{device_id}` | 30 秒のハートビート：アクチュエータ状態、ライブラリバージョンとモデルタグ、ライブネスのロード状態 | Last will のみ |
| `access/v1/commands/{door_id}` | `unlock`、`hold_open`、`lock` | **Never** |
| `access/v1/receipts/{command_id}` | 1 つのコマンドの最終状態 | No |
| `access/v1/relay/{relay_id}/set` と `/state` | MQTT リレープリセットのみ。`state` は物理接点の状態で、ドアの実際の開閉は反映しない | `set` は no、`state` は yes |
| `GET /v1/facedb/current`、`GET /v1/facedb/{version}` (HTTP 8080) | ライブラリ配布の全サーフェス。分割・再開可能なダウンロードには `Range` を使用 | — |
| `/api/events`、`/api/devices`、`/api/persons`、`/api/audit/verify` (HTTP 8088) | 3 役割のトークンゲートの背後にあるコンソール API。匿名読み取りなし | — |

コンソールのトークンには 3 つの役割があります。viewer は読み取り、operator は `unlock` / `hold_open` / `lock` の発行、admin は登録・削除・ロールバックを行います。`/api/audit/verify` は監査ログのハッシュチェーンを検証します。監査ログは追記専用の NDJSON で、各レコードが直前のレコードのハッシュを持ち、過去のレコードを変更すると検出されます。

### イベントペイロード

```json
{
  "schema": "access-event/v1",
  "event_id": "6f1a2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
  "time": "2026-09-06T03:20:11Z",
  "device_id": "door-front-01",
  "person_id": "p_alice",
  "anonymous_id": null,
  "score": 0.7412,
  "threshold": 0.62,
  "liveness": { "passed": true, "score": 0.958 },
  "decision": { "allow": true, "reason": "allowed" },
  "door_action": "pulse",
  "actuator_id": "door-front",
  "facedb_version": 3,
  "model_sha": "3a7f...",
  "clock": { "valid": true, "reason": null, "offset_ms": 12 }
}
```

連携時に注意するフィールドは 3 つです。**最初の同期に成功する前の `facedb_version` は `null`** で、デバイスにまだライブラリがない状態（バージョン 0 とは別）を示し、拒否理由は `no_facedb` として個別に報告されます。**`threshold` はその判定で実際に適用された値**なので、しきい値の変更はイベントストリームで確認できます。**`clock.valid`** は補正後のタイムスタンプを信頼できるかを示します。デバイスはシステム時計を設定せず、オフセットだけを保持します。ライブネス結果が `null` の場合は検査が実行されなかったことを示し、失敗として扱って `liveness_unknown` として報告します。

### コマンドゲート

コマンドには正確なフィールド一式、UUIDv4 の `command_id`、タイムゾーン付き RFC3339 の `issued_at`、範囲内の TTL が必要で、ID ごとのリプレイテーブルで検査されます。再配信されたコマンドで**ドアが 2 回開くことはありません**。デバイスは元のレシートを返し、呼び出し側はそれで照合できます。期限切れは `TTL_EXPIRED` として返り、匿名 ID は拒否されます。

`set` トピックとコマンドトピックは retained にしません。解錠コマンドを retained にすると、再接続のたびに再生され、停電復旧後にドアが勝手に開きます。

### 顔ライブラリの配布

デバイスは `current` をポーリングしてバージョンを比較し、変わった場合だけファイルを取得します。分割と再開は標準の `Range` で行います。ファイルごとの SHA-256 検証とマニフェストの署名検証を通過した後にアトミックに切り替え、どの段階で失敗しても旧バージョンを維持します。人を削除すると、その人を含まない新バージョンと削除バリアが作られ、以後その人を含むバージョンへのロールバックは名指しで拒否されます。

各バージョンのマニフェストには `license_id`、`use_scope`、`redistributable`、`source_revision`、`sha256` の 5 つのライセンスフィールドがあり、ライセンス条件は成果物と一緒に配布されます。

## 性能と実測データ

### 顔ライブラリ有効化遅延

新しいライブラリバージョンを公開してから、デバイスがそのバージョンで動作するまでの時間です。

| プラットフォーム | 完全な有効化 | 条件 |
|---|---|---|
| 標準 reCamera (SG2002 / CV181x riscv64、ファームウェア 0.2.2) | **p50 491.6 ms、p95 507.8 ms** (n=20) | USB-RNDIS、2 人、16.5 KB ライブラリ。`op:reload` 往復 p50 100.0 ms (n=25) |
| reCamera Pro (RV1126B、Buildroot 2023.02.6) | 62.2 ms (v1)、45.4 ms (v2)。最新状態で変更なしのラウンドは 6.2 ms | Ethernet、1–2 人、20 KB 未満のライブラリ |

**ライブラリサイズによる変化。** 標準 reCamera で 2 つの規模を各 1 回実行しました。402 人 / 2.86 MB は 9 801.7 ms、1502 人 / 10.66 MB は 22 278.7 ms でした。有効化時間はライブラリサイズに応じて増えます。大規模ライブラリの初回同期は、この 2 つの数値をもとに計画してください。

再現：上流リポジトリ `unmanned-store-access` 内の `evaluation/runs/2026-09-06-recamera-std-p3-r2/results.md`、`evaluation/runs/2026-09-07-recamera-pro-p1/results.md`。

### 解錠時間（reCamera Pro、再生映像）

アプリに最初の再生フレームを渡してから GPIO ピンがアクティブレベルに駆動されるまでの時間で、キャプチャ、検出、ライブネス、照合、ポリシー、ピン書き込みを含みます。p50、括弧内は p95、各点 12 回です（n=12 のため p95 列は上限として読んでください）。

| カメラ / ホスト | 10 人 | 1 000 人 |
|---|---|---|
| reCamera Pro (RV1126B), f1-access 0.1.1 | **0.62 s** (0.67) | **0.66 s** (0.68) |

条件：1280x720 フレームを 12.5 fps で再生、ライブネス有効、最小顔サイズ 40 px、照合しきい値 0.40。入力は生身の人物ではなく、動画クリップをデバイス自身のパイプラインで再生したものです。ピンは 24 回中 24 回アサートされました。ピン書き込み後の 1 500 ms の接点保持は含めていません。リレーも錠も接続していないため、機械的な応答は数値に含まれません。

### 拒否（reCamera Pro、再生映像）

各行 20 回、同じデバイスとアプリです。

| 実行 | 顔ライブラリ | ピンのアサート |
|---|---|---|
| 未登録の人物 | 合成 ID 9 件 | 0 / 20 |
| 未登録の人物 | 合成 ID 999 件 | 0 / 20 |
| スマートフォン画面の再生、クリップ A | 10、攻撃クリップから作成したテンプレート | 0 / 20 |
| スマートフォン画面の再生、クリップ B | 10、攻撃クリップから作成したテンプレート | 0 / 20 |
| 画面の静止画像 | 10、攻撃クリップから作成したテンプレート | 0 / 20 |

条件：未登録の人物の 2 行では、ライブラリには合成ベクトルしか入っておらず、クリップ内の人物は登録されていません。画面の 3 行では、テンプレートを攻撃クリップ自体から作成しているため、ライブラリの顔と画面の顔は同一人物です。静止画像の行は表示フレーム 1 枚を静止させたものです。

### その他の実測

| 指標 | 値 | 条件 |
|---|---|---|
| 認識イベントから GPIO ピン読み戻しまで | p50 1.448 ms、p95 2.709 ms (n=22) | reCamera Pro、合成した認識イベントを注入、sysfs で読み戻し、外部回路なし。ソフトウェア経路の 1 区間の上限で、解錠動作は含まない |
| 認識サービスの 1 フレーム：顔ボックス + ライブネス判定 + 512 次元の埋め込み | サーバー時間 24-26 ms、HTTP 経由 p50 30.3 ms（12 リクエスト） | reComputer J40 シリーズ（Orin NX 16 GB、JetPack 6）、1280x720 の RTSP ストリームから 1 フレーム |
| 認識サービスの初回起動 | TensorRT エンジンを本体上で 61 s + 62 s + 73 s かけて構築、起動 214 s 後にヘルスエンドポイントが応答 | reComputer J40 シリーズ（Orin NX 16 GB、JetPack 6） |

reCamera Pro で読み戻した `gpio130` は、拡張ポートの UART4 M0 ピンの 1 つを GPIO に再設定したもので、3.3 V 系です。ボード上の 2 つのネイティブ 12–21 V 出力とは別です。

再現（GPIO 読み戻し）：`evaluation/runs/2026-09-07-recamera-pro-p1/results.md`。

### ランタイムと主要パラメータ

| 認識ホスト | 認識モデルと実行場所 |
|---|---|
| reCamera Pro | デバイス自身の認識モデル `rv1126b:scrfd500m+mbf512@fp16` |
| 標準 reCamera | デバイス上のネイティブプロセスが検出、埋め込み、ライブネス、照合を実行 |
| reComputer の各プリセット | コンテナ内の認識サービス。TensorRT エンジンは初回起動時に本体上で構築 |

ライブネス検査は強制です。認識サービスがライブネスのロードを報告しない場合、アダプタは実行を拒否します。

デプロイ結果に影響するパラメータ：

- 顔ライブラリのポーリング周期（既定 30 s）— デバイスはこの周期で新バージョンを確認するため、ライブラリの有効化遅延はこの値に左右されます。
- 照合しきい値 — 同梱のしきい値は初期値です。設置したカメラで陽性・陰性ペアを走査して決めてください。イベントの `threshold` は各判定で実際に適用された値を報告します。
- リレーの 4 設定 `active_high`、`pulse_ms`、`relay_contact`、`fail_mode` — 既定値はなく、設置ごとに設定します。

### 既知の劣化

- **reCamera Pro の登録経路。** クラウド登録に使う `buffalo_l` とデバイス自身の `rv1126b:scrfd500m+mbf512@fp16` はモデル空間が異なり、コサイン類似度はほぼ 0 です。そのため同梱の登録経路では、このデバイスで本番利用できる顔ライブラリをまだ作れません。標準 reCamera はデバイス上で埋め込みを計算するため影響を受けません。
- **RKNN バックエンドのライブネスは上流で未実装です。** RKNN 上で動くプリセットは「ライブネス強制」を満たせません。
- **顔バックボーンを置き換えると、すべての顔ライブラリバージョンを再構築する必要があります。** モデル間で埋め込みを比較できないため旧バージョンはすべて使えなくなり、マニフェストの `model_tag` ガードがデバイスによる誤ロードを防ぎます。

### 次のステップ

- reCamera Pro に Grove Relay を接続して接点ループバック試験（20 回）を行い、接点の閉路遅延と保持時間を記録してからドアコントローラーに接続します。

## データと素材の出典

**ライセンス。** ソリューションパッケージと上流リポジトリのコードは Apache-2.0 です。**モデル重みは異なります。** 顔検出と埋め込みには InsightFace の `buffalo_l` を使います。InsightFace 自身の声明では、コードは商用利用の制限がない MIT ですが、トレーニングデータとそのデータで学習したモデルは非商用研究用途に限られます。`buffalo_l` はそのようなモデルで、`license_id: non-commercial`、`use_scope: non-commercial`、`redistributable: false` です。ソリューションパッケージには重みを同梱しておらず、商用導入では顔バックボーンを商用ライセンスのものに置き換える必要があります。

パッシブ・ライブネスモデルの MiniVision Silent-Face-Anti-Spoofing は Apache-2.0 で、`use_scope: commercial`、再配布可能、未変更で使用しています。

- ライセンス条項：ソリューションパッケージ内の `gallery/ATTRIBUTION.md` とパッケージ説明のライセンス節。
- 登録時のモデル空間の隔たり：上流の `docs/user-guide.md` §5.1。
- ドアの認識画面は reCamera Pro のもので、写っている人物は撮影したプロジェクトメンバー本人です。
- コンソールのスクリーンショットは**合成デモデータ**で、人物、スコア、イベントは現場結果ではありません。
