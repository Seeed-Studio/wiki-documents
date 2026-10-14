---
description: Home Assistant につながる LoRaWAN 土壌・大気モニタリングの構築：必要な機器、3 つの取り込み経路の導入方法、利用できる MQTT インターフェース
title: 'LoRaWAN農業環境モニタリング：機器選定・導入・インターフェース'
keywords:
  - agricultural environment monitoring
  - LoRaWAN soil moisture
  - soil EC monitoring
  - greenhouse monitoring system
  - SenseCAP S210x
  - ChirpStack
  - The Things Stack
  - Home Assistant
  - MQTT discovery
  - LoRaWAN gateway
  - SenseCAP M2
  - reComputer R12 Series
image: https://files.seeedstudio.com/wiki/reference-design/agri_env_monitor/ha-overview-local-20260907-1565d1b3.jpg
slug: /solutions/agri-env-monitoring
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/solutions/agri-env-monitoring/
generated_from: sensecraft-solutions@agri_env_monitor
---

:::caution[利用上の注意]
これは運用ダッシュボードであり、計測認証を受けたシステムではありません。表示される値はノードが送信した値そのもので、単位を付けているだけです。
:::

## このすぐに導入できるソリューションでできること

温室では土壌水分と EC が灌水や施肥の判断材料になり、露地では降雨量と土壌温度が作物ごとの判断材料になります。SenseCAP LoRaWAN ノードが値を測定して無線送信し、uplink は正しい単位、device class、state class を持つ Home Assistant エンティティになります。ダッシュボードに表示され、履歴が蓄積され、しきい値を超えると通知が出ます。

温室、露地、利用できるインターネットがない場所、既存の SenseCAP 設備を移設せずローカル表示したい場所を対象にしています。

- 選択と導入：[すぐに導入できるソリューションページ](https://www.seeed.co.jp/solutions/reference-designs/agri_env_monitor)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>SenseCAP ノードは箱から出してすぐ使えます</h3>
                <p>S210x ノードはノードに設定された周期で送信し、ノードへの設定配信は不要です。エンティティは MQTT discovery で単位と種別付きで作成され、YAML を書く必要はありません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>他社製プローブも同じ方法で接続</h3>
                <p>既存の RS485 またはアナログプローブは S2100 データロガー経由で接続し、同じ測定マッピングを使います。マッピング、Compose ファイル、ダッシュボード、オートメーションは公開のソリューションパッケージに含まれ、項目の追加は設定ファイルに 1 行です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>インターネットなしで運用できます</h3>
                <p>ChirpStack は M2 ゲートウェイ上で、ブリッジと Home Assistant はローカルホスト上で動きます。クラウドアカウントも外向き接続も不要です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>ネットワークサーバーを変えてもダッシュボードはそのまま</h3>
                <p>SenseCAP クラウド、自社運用の The Things Stack、ローカル ChirpStack でエンティティ名は同じです。経路を変えても、ダッシュボード、オートメーション、エクスポートは変更不要です。</p>
            </div>
        </li>
    </ul>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/agri_env_monitor/ha-overview-local-20260907-1565d1b3.jpg" alt="土壌水分、環境温湿度、導電率センサーの Home Assistant ダッシュボード監視画面"/>
</div>

## 必要な機器

現場に必要なのは 4 つです。LoRaWAN ノード、ノードを受信するゲートウェイ、ネットワークサーバー、Docker を動かす Linux ホストです。

**① ノード** — SenseCAP S210x センサーは直接測定します。S2100 データロガーを使えば、既存の第三者製 RS485 またはアナログプローブを同じ LoRaWAN ネットワークに接続できます。どちらにも何も配信する必要はなく、ノードで設定した周期で測定・送信します。

**② ゲートウェイとネットワークサーバー** — 3 つの経路の違いはここだけで、どれを選ぶかで現場にインターネットが必要かが決まります。

| | デバイス | 役割 | 選択する条件 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/f/i/first_page_all-31.jpg" alt="SenseCAP S2101" width="110" /> | [SenseCAP S210x](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)<br/>土壌・空気センサーノード | 測定して送信 | 常に使用。必要な測定項目でモデルを選び、地域に合った周波数帯を選ぶ |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992872-application-10.png" alt="SenseCAP S2100" width="110" /> | [SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)<br/>LoRaWAN データロガー | 第三者製プローブを LoRaWAN に接続 | RS485 またはアナログプローブがすでにある場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/_/__front-05.png" alt="S-Soil MTEC-02B" width="110" /> | [S-Soil MTEC-02B](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-EC-Sensor-S-Soil-MTEC-02B-p-4860.html)<br/>RS485 土壌水分・温度・EC プローブ | RS485（Modbus-RTU）で S2100 に接続し、S2100 が LoRaWAN uplink を送信 | S2100 経路で土壌水分、温度、EC が必要な場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992981_eu868_1.jpg" alt="SenseCAP M2 gateway" width="110" /> | [SenseCAP M2](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)<br/>屋内 LoRaWAN ゲートウェイ | SenseCAP クラウドへ転送するか、ChirpStack 自体を実行 | 完全ローカル構成への最短経路。ネットワークサーバーは Web インターフェースで設定 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/0/100021896main_4.jpg" alt="reComputer R1225" width="110" /> | [reComputer R12 Series](https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-EU868-p-6720.html)<br/>LoRaWAN ゲートウェイ兼産業用コントローラ | ゲートウェイとなり、同じマシンで The Things Stack をホスト | The Things Stack を自社運用し、ゲートウェイがない場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110110_preview-16.png" alt="reRouter CM4" width="110" /> | [reRouter CM4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html)<br/>reRouter CM4 ホスト | ネットワークサーバーまたはダッシュボードを実行 | ホストが必要で、Docker を動かす Linux マシンがない場合 |

**③ ダッシュボードホスト** — Docker を動かせる Linux マシンです。Home Assistant、MQTT ブローカー、`agri-env-bridge` を実行し、外部からの着信インターネット接続は必要ありません。

**ノード、ゲートウェイ、コンセントレータは同じ周波数帯で購入してください**（EU868 / US915 / AS923 など）。周波数帯は出荷時に固定され、ソフトウェアでは変更できません。2 つの自社運用経路では、各ノードの DevEUI、JoinEUI、AppKey をネットワークサーバーに登録する必要があります。

### 選定における制約・非推奨条件

- **大容量・高頻度データ**：LoRaWAN は 5〜60 分間隔の環境データ向けです。連続映像監視や秒単位の高速制御には LoRaWAN ではなく、4G または有線 LAN を選定してください。
- **密閉された金属・地下空間**：金属製サイロや分厚いコンクリート地下室では LoRaWAN の電波が大きく減衰するため、外部アンテナや RS-485 有線中継を組み合わせてください。

## 現場への展開

### 1. ノードを設置する

:::tip[プローブの深さは根域で決め、設置後は動かさないでください]
土壌プローブは設置された層を読み取ります。10 cm と 40 cm の値は別のエンティティ（`soil_moisture_10cm` … `soil_moisture_40cm`）です。最初に穴を掘る前に作物の根域から深さを決めてください。設置後にプローブを動かすと、そのエンティティに記録済みの履歴と比較できなくなります。
:::

無線範囲は現場で測定する必要があり、ここでは距離の数値を示しません。センサー位置を確定する前に、各ノードの uplink がゲートウェイで受信できることを現場で確認してください。

### 2. ソフトウェアを導入する — 経路により 3〜6 ステップ

デバイスごとの手順とアプリケーションパッケージはすぐに導入できるソリューションページにあります。現場に合わせて構成を選び、ダウンロードしてください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/agri_env_monitor" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んでダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

手順の概要：

1. **Linux ホストに Home Assistant とブローカーを導入する**（3 経路とも 1 つの Docker Compose 構成）。
2. **ネットワークサーバーを起動する** — クラウド経路では作業不要。ChirpStack 経路では Web インターフェースで M2 を内蔵ローカルネットワークサーバーに切り替えるか、Linux ホストで ChirpStack の Compose スタックを起動する。The Things Stack 経路では reComputer R12 Series ゲートウェイ上で Postgres と Redis を含むスタックを起動する。
3. **デコーダーを導入する**（自社運用経路のみ） — The Things Stack では payload formatter、ChirpStack では device-profile codec を設定する。これがないとエンティティは表示されない。
4. **ノードを Join させる**（自社運用経路のみ） — 各 DevEUI、JoinEUI、AppKey をネットワークサーバーに登録する。
5. **ブリッジを配置する** — 経路に合わせてソースを設定し、ブローカーの認証情報を入力する。
6. **ダッシュボードとオートメーションをインポートする** — エンティティに値が入ることを確認する。

所要時間の目安は **45 分**、難易度は **中級** です。The Things Stack 経路が最も長く、コンセントレータの物理設置に加えて、独自のデータベースとキャッシュを起動します。

**3 経路すべてで検証方法は同じです**：最後の手順でインポートした Lovelace ダッシュボードに、値付きのエンティティが表示されます。

## 利用できるインターフェース

すべてのデータはダッシュボードホスト上の MQTT ブローカー（ポート **1883**）から出ます。3 つの retained topic がインターフェース全体を構成します。

- **Home Assistant** — 設定不要。ブリッジが discovery config を公開するため、正しい単位、device class、state class を持つエンティティが自動的に表示され、YAML を手書きする必要はありません。
- **灌水・農場管理システム** — 値は `agri_env/sensecap_<deveui>/<entity_key>/state`、ノードが稼働中かどうかは `agri_env/sensecap_<deveui>/availability` を購読します。どちらも retained のため、後から接続した購読者も現在の状態をすぐ取得できます。
- **独自サービス** — `homeassistant/…` の discovery config にはエンティティのメタデータ（単位、device class、state class、デバイス識別子）がすべて含まれており、それを基にスキーマを構築できます。

### トピックとペイロード

| トピック / ポート | ペイロード | 保持 |
|---|---|---|
| `homeassistant/sensor/sensecap_<deveui>/<entity_key>/config` (1883) | エンティティごとの discovery config：`name`、`unique_id`、`object_id`、`state_topic`、`availability_topic`、`unit_of_measurement`、`state_class`、`device.identifiers` | あり |
| `agri_env/sensecap_<deveui>/<entity_key>/state` (1883) | 1 つの測定値（例：`33.8`） | あり |
| `agri_env/sensecap_<deveui>/availability` (1883) | `online` または `offline` | あり |

**エンティティ命名**：エンティティ ID は `sensor.sensecap_<deveui>_<entity_key>` で、完全な DevEUI を小文字で使います。短縮形では末尾が同じノード同士で衝突します。後から規則を変更する場合は、ブローカーの retained message と Home Assistant のエンティティレジストリを同時に削除してください。そうしないと再起動後に古いトピックが戻ります。

**ブローカーは信頼できる LAN 内に置き、インターネットに公開しないでください。** 認証情報はホスト上の `.env` ファイルにあり、ChirpStack 経路では LNS 側のブローカーが Compose ネットワーク上で認証なしに動作します。

## 性能と実測データ

### ランタイムと主要パラメーター

3 経路すべての背後で 1 つのサービス `agri-env-bridge` が動作し、Home Assistant、MQTT ブローカーとともにダッシュボードホスト上で実行されます。

| 経路 | ブリッジが読むもの |
|---|---|
| SenseCAP クラウド | SenseCAP OpenAPI とクラウド MQTT ストリーム。初回起動時に履歴を月単位でバックフィルします |
| The Things Stack | payload formatter が uplink をデコードした後のスタック MQTT 統合 |
| ChirpStack | device-profile codec が uplink をデコードした後の ChirpStack MQTT 統合 |

- **測定マッピング表**：`assets/config/measurements.yaml`。4 深度の土壌温度・水分、土壌張力、熱流束、体積含水率、気温、湿度、CO2、気圧、PM2.5、PM10、騒音、pH、溶存酸素、濁度、TDS、塩分、水温、風速、風向、日射量、日照時間、PAR、光量子、流量、積算流量、水位、漏水に対応します。項目の追加は 1 行の追加で済み、コード変更は不要です。値そのものはスケーリングせず、単位だけを付けます。
- **オフライン判定しきい値**：既定値は S210x の報告周期 2 回分に余裕を加えた値です。期限を超えると、そのノードのエンティティは Home Assistant で unavailable になり、最後の値は保持されます。
- **重複排除**：測定値は `(DevEUI, measurementId, timestamp)` をキーに重複排除されるため、クラウドのバックフィルとライブストリームで同じ測定値を二重計上しません。同じエンティティに 2 つの値がある場合は後の値を採用します。
- **機能確認**：記録済み uplink を 3 つのソース形式でブローカーへ再生し、計 15 エンティティが作成されました。
- **再現手順**：リプレイテストはリポジトリの `tests/replay_bench.py` に配置されています。`python3 tests/replay_bench.py --fixtures tests/data/` を実行して、3 種類の上り形式と 15 エンティティの自動登録を検証できます。

### 既知の劣化

- **ブローカーは単一障害点です**：ブローカーが停止している間は 3 経路とも更新されません。state topic は retained のため、再起動後も Home Assistant は最後の値を復元できます。

## データと素材の出典

- **`measurementId` と物理量の対応表**は、コミット `d0a2342` の [Seeed-Solution/SenseCAP-Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder) にあるデコーダーソースから `assets/config/measurements.yaml` に読み出しました。S210X シリーズは `third_party/SenseCAP-Decoder/S210X/Helium/SenseCAP_S210X_Helium_Decoder.js`、T1000 は `third_party/SenseCAP-Decoder/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js` を参照しています。YAML の各項目には出典ファイルと行番号が記録されています。
- **そのリポジトリのライセンスは未確認です**：LICENSE ファイルも README のライセンス節もなく、唯一の宣言は第三者提供ファイルのヘッダーにある `Unlicensed for internal use` です。**ソリューションパッケージはデコーダーを再配布しません。** `id -> quantity` の対応だけを使い、自社運用 2 経路の導入ガイドから上流リポジトリへリンクしています。デコーダー自体を配布する場合は、先に Seeed にライセンスを確認してください。
- **`device_class`、`unit_of_measurement`、`state_class` の列**はデコーダー由来ではありません。デコーダーにはその情報がないため、Home Assistant センサーのドキュメントから導出しました。
- **すぐに導入できるソリューションページのアーキテクチャ図**は Architecture IR から描画し、製品アートはレビュー済みの Seeed 製品ステッカーカタログから取得しています。
