---
description: エッジゲートウェイ上の産業マルチプロトコルデータハブ：OPC UA、Modbus TCP/RTU、BACnet/IP、MQTTを1つの点位モデルに統合し、バージョン付きMQTT契約で読み書き、北向きは断線時にディスクへ蓄積して再送
title: '産業マルチプロトコルデータハブ：機器選定・導入・実測データ'
sidebar_label: '産業マルチプロトコルデータハブ'
keywords:
  - industrial protocol gateway
  - multi-protocol data hub
  - OPC UA
  - Modbus TCP
  - Modbus RTU
  - BACnet/IP
  - MQTT broker
  - unified point model
  - store and forward
  - northbound publishing
  - reComputer R1000
  - reComputer R1100
  - reTerminal DM
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg
slug: /solutions/industrial-protocol-gateway
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/ja/solutions/industrial-protocol-gateway/
generated_from: sensecraft-solutions@multi_protocol_gateway
---

:::caution[利用上の注意]
これは**プロトコル統合とデータハブの層**であり、認証済みの制御・計量システムではありません。
:::

## このソリューションでできること

ビル、エネルギー、設備管理のSIが現場に入ると、データはすでに存在していることが分かります。OPC UAコントローラー、Modbusメーター、BACnet/IP空調機、MQTTセンサーゲートウェイの背後に、4種類のアドレス方式と故障の振る舞いがあります。このソリューションはそれらを**1台のエッジホスト上の1つの点位レジストリ**へ集約し、上位システムには1つのMQTT読み書き契約を提供します。新しい現場ではコントローラーを接続して点位をマッピングするだけで、プロトコル層は変更しません。

コンテナをデプロイし、データソースを追加して自動検出の候補を確認します。必要な点位を確定し、品質を確認してから公開します。ローカルの1883、北向きクラウドブローカーの8883、または両方を選べます。

- 選定とデプロイ：[参考設計ページ](https://www.seeed.co.jp/solutions/reference-designs/multi_protocol_gateway)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>既設機器をそのまま接続</h3>
                <p>OPC UA、Modbus、BACnet/IP、MQTTに対応した機器は交換不要です。同じエッジホストの1つの点位レジストリに取り込み、上位層には1つのMQTT読み書き契約を渡します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>自動検出して、確定後に管理</h3>
                <p>OPC UAブラウズ、Modbusユニットスキャン、BACnet Who-Is、MQTTトピック監視が候補点位を出し、確定した点位だけが管理対象になります。検出できない部分は手入力できます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>2,000点位、349.99 events/s</h3>
                <p>500点位のソース4つを5/10秒間隔で取得し、reComputer R2000シリーズで180秒のループバックを1回実行して測定しました。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>北向き経路は障害復旧後に補完送信する</h3>
                <p>クラウドブローカーが300秒停止している間、イベントをローカルにスプールします。再接続後の補完率は永続ブローカーで1.000、メモリブローカーで0.9839でした。</p>
            </div>
        </li>
    </ul>
</div>

### コンソールに表示される内容

Accessページには設定済みデータソースごとの実行状態が表示されます。最初のコントローラーを接続した後、実際に接続できているかを確認するページです。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/access-list-en-9837244f.png" alt="Accessページ：各ソースのプロトコル、アドレス、実行状態"/>
</div>

Pointsページは管理対象の全点位を1つの表にまとめ、点位ごとの品質確認、絞り込み、制御に対応します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/points-en-477df2ca.png" alt="Pointsページ：管理対象点位の現在値、単位、品質、最終更新"/>
</div>

Data Serviceページでは組み込みブローカーを設定し、公開するトピック契約を表示します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/dataservice-en-2d03bdb5.png" alt="Data Serviceページ：組み込みブローカー設定と公開トピック契約"/>
</div>

これらはプロトコルシミュレーターに接続したコンソールのキャプチャです。

## 必要な機器

必要なのは、すでに設置されているフィールド機器と、それぞれのネットワークへ到達できる1台のホストです。

**① フィールド機器** — OPC UA、Modbus（TCPまたはRTU）、BACnet/IP、MQTTのいずれかを話す既設機器です。設備側を交換する必要はありません。ソースごとに、OPC UAのエンドポイントと認証情報、ModbusのユニットID・レジスターマップ・バイト/ワード順、BACnetサブネット上でブロードキャストを受信できるネットワークインターフェース、MQTTの明示的なトピックと点位の対応が必要です。Modbus RTUでは、ホストにRS-485が内蔵されていない限りUSB-RS-485アダプターも必要です。

**② データハブホスト** — x86-64またはarm64の通常のDockerホストです。アダプターなしで使えるフィールドI/Oと、現場でノートPCなしに運用できるかを決めます。

| | ホスト | 内蔵フィールドI/O | 選択する条件 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/113991294-2_1.jpeg" alt="reComputer R1000" width="110" /> | [reComputer R1000 Series](https://www.seeedstudio.com/reComputer-R1024-10-p-5923.html)<br/>CM4ベースのIoTゲートウェイ | RS-485、RJ45 Ethernet | Ethernet接続が中心で、RS-485配線が最大1本の場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1100" width="110" /> | [reComputer R1100 Series](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>CM4ベースのIoTゲートウェイ兼コントローラー | RS-485、RS-232、DI/DO、Gigabit Ethernet、CAN | RS-232機器またはDI/DOドライ接点もある現場の場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image1.jpeg" alt="reTerminal DM" width="110" /> | [reTerminal DM Series](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)<br/>同じサービスを備えた10.1インチHMI | RS-485、CAN、Ethernet（CM4104032版はRS-232、DI/DO、端子台を追加） | 機器室に常設PCを置かず、セットアップと日常確認を本体で行う場合 |

3機種ともソフトウェアの点位上限は同じで、**2,000点位のうち書き込み可能なのは50点位**です（コードで強制）。2,000点位の負荷はR1000と同世代のCM4クラスのプラットフォーム（2 GB構成、開発ボードで測定）で容量テストに合格しなかったため、この規模ではR1100またはreTerminal DMを選んでください。R1000で小規模に使う場合の点位数はまだ実測データがありません。eMMC容量によって北向き障害時のスプールとコマンド受付履歴をどれだけ保持できるかが決まり、サービス自体には約4 GBの空き容量が必要です。

その他の前提は、Docker Engine 20.10以降、空いている8280と1883ポート（またはデプロイ前に未使用ポートを選ぶこと）、そしてホストから各プロトコルネットワークへの到達性です。

### 選定における制約・非推奨条件

- **インターフェースとポイント数**：現場で RS-232 や DI/DO が必要な場合、または 1,000 ポイントを超える場合は、R1000 を避けて R1100 または reTerminal DM を選定してください。
- **現場ディスプレイの要否**：現場に PC が常設されておらず、端末単体で設定や巡回確認を行う必要がある場合は、画面付きの reTerminal DM を選定してください。

## 現場へのデプロイ方法

### 1: ハードウェアの設置 — ホストをBACnetサブネットに接続する

:::tip[ホストにはBACnetサブネット上のネットワークインターフェースが必要です]
BACnet/IPの検出はブロードキャストに基づきます。ホストにはBACnetサブネット上のインターフェースが必要で、ブロードキャストを遮断してはいけません。リモートLinuxのデプロイ先がホストネットワークを使うのはこのためです。Docker Desktopのブリッジ型ローカル環境ではブロードキャストが届かない場合があるため、その場合はBACnetアドレスを手入力します。
:::

ホストをコントローラーネットワークへ接続し、IPアドレスを記録します。Modbus RTUではUSB-RS-485アダプターを接続し、シリアルデバイス用のインストーラー/プロファイルを使います。**標準Dockerプロファイルはホストのシリアルデバイスを接続しない**ため、既定プロファイルでは配線が正しくてもデータを読み取れません。本番書き込みを有効にする前に、実際に使うUSB-RS-485アダプターと対象コントローラーで検証してください。

### 2: ソフトウェアを導入し、最初のデータソースを追加する

デバイスごとの手順とアプリケーションパッケージは参考設計ページにあります。現場に合わせて構成を選び、ダウンロードしてください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/multi_protocol_gateway" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んでダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

1. **デプロイ** — ローカルターゲットはSenseCraft Solutionを実行しているマシンへ、リモートターゲットはコントローラーネットワーク上のreComputer R2000シリーズまたはreTerminal DMへSSHでインストールします。
2. **最初の管理者を作成** — 初回起動に登録トークンは不要です。
3. **データソースを追加** — OPC UA、Modbus、BACnet/IP、MQTTから選び、利用できる検出を実行します。OPC UAブラウズ、Modbus TCPユニットスキャン、BACnet Who-Is、MQTTトピック監視はいずれも**候補**を生成します。ウィザードはプロトコルごとにアドレスと取得間隔を尋ねます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/access-wizard-step1-en-7a3d57a8.png" alt="Accessウィザードのステップ1：プロトコル、アドレス、取得間隔を入力"/>
</div>

4. **点位を確定** — 確定した候補だけが管理対象になります。検出できない、または不完全な場合は手入力を使います。
5. **書き込み権限を与える前に品質を確認** — まずPointsページでライブ値と点位ごとの品質を確認します。
6. **データサービスを設定** — 組み込みブローカーと、必要に応じて北向きパブリッシャーを設定します。

難易度は**中級**、コンソール稼働までの目安は**15分**です。最初のコントローラーの追加とデータ品質の確認にはさらに時間がかかります。

## 利用できるインターフェース

データがホストの外へ出る経路は3つです。

- **オペレーター** — HTTP **8280** のブラウザーコンソールで、ソース管理、点位表、コマンド受付、プラグイン管理を行います。
- **現場システム（SCADA、エネルギープラットフォーム、自社サービス）** — **1883** の組み込みブローカーを購読します。点位テレメトリは `missionpack/v1/{gateway}/points/{point_id}` に届き、presence、command、receiptのトピックも同じ契約に含まれます。
- **クラウド/中央システム** — **8883** の外部ブローカーへ北向き公開を有効にします。テレメトリはQoS 1でバッチ化され、ソースごとのヘルスとlast-will状態を保持し、QoS 0のハートビートも並行して送ります。**現在公開されているイメージには北向き公開機能が含まれていません。**

`{gateway}` はデプロイ時に設定するゲートウェイIDです。複数のハブから1つのブローカーへ公開しても衝突しません。

### トピック契約

| トピック / ポート | ペイロード | 保持 |
|---|---|---|
| HTTP `8280` `/` | ブラウザーコンソール | — |
| `missionpack/v1/{gateway}/points/{point_id}` (1883) | バージョン付き点位テレメトリ — 値、品質、タイムスタンプ、リビジョン | いいえ |
| 同じプレフィックスのpresence / command / receiptトピック (1883) | ソースとゲートウェイの状態、発行したコマンド、各コマンドの受付結果 | presenceを保持 |
| `missionpack/v1/{gateway}/telemetry` (8883) | 北向きバッチテレメトリ、QoS 1 | いいえ |
| ソースごとのhealthとlast-willトピック (8883) | ソースのヘルスとゲートウェイ状態 | はい |

北向きエンベロープは `missionpack.northbound.v1` です。

```json
{
  "schema_version": "missionpack.northbound.v1",
  "message_id": "0f3a...",
  "gateway_id": "gw-01",
  "created_at": "2026-09-05T05:01:19.045514Z",
  "samples": [
    {
      "source_id": "ahu-bacnet",
      "point_id": "analog-value:12",
      "ts": "2026-09-05T05:01:18.900000Z",
      "quality": "good",
      "value": 23.5,
      "source_revision": 4,
      "point_revision": 7
    }
  ]
}
```

**`source_revision` と `point_revision`**：点位を再マッピングするとリビジョンが変わるため、「設定の変更」と「現場の値の変化」を区別できます。これを確認しないコンシューマーは、設定変更の前後のデータを1つの系列としてつないでしまいます。

契約の制約は2つです。

- **プロトコルはMissionPack v1で、現在のリリースはSparkplug Bに対応していません。** Sparkplugホストアプリケーションには変換処理が必要です。
- **プレーンMQTTはテレメトリ専用です。** リモートコマンドを許可する前に、TLSと認証済みの制御IDを有効にしてください。

### 南向きプロトコルの対応範囲

| プロトコル | 検出 | 読み取り | 書き込み | 未実装 |
|---|---|---|---|---|
| OPC UA | アドレス空間のブラウズ | はい | はい | — |
| Modbus TCP | ユニットスキャン | はい | はい | — |
| BACnet/IP | Who-Is | Propertyの読み取り | priority付きProperty書き込み、`Null`による解放 | COVサブスクリプション、BBMD / Foreign-Device登録、BACnet MS-TP |
| MQTT（ソースとして） | トピック監視 | はい、明示的なトピック-点位マッピング経由 | — | 暗黙のマッピングは未実装。トピックは手動で割り当てる必要があります |

## 性能と実測データ {#measured-data}

負荷は**4プロトコルシミュレーター**で生成し、ティアごとに1台の機器上でループバックで測定しました。現場導入のデータはありません。

### 2,000点位での更新サイクル

3ティア共通の条件は、4ソースに各500点、実行時間は表のとおり、ループバックのみ、reComputer R2000シリーズ（arm64）です。

| ティア | 取得間隔 | 結果 |
|---|---|---|
| 安定 | OPC UA/Modbus 5秒、BACnet 10秒、180秒実行 | 350.0目標に対して**349.99 events/s**（99.99%）、予測0.939 cycle/s、プロセスグループRSSピーク217.3 MiB、1分間CPUピーク22.1%、失敗サンプル差分0 |
| 劣化 | OPC UA/Modbus 2秒、BACnet 4秒 | 900秒を**718.9 events/s**（99.1%）で完走しましたが、予測は0.872 cycle/sに低下し、ゲートは `PREDICTION_CYCLE_RATE_LOW` で失敗 |
| 失敗 | OPC UA/Modbus 1秒、BACnet 2秒 | 900秒目標に対し**148.2秒**で `PREDICTION_WRITE_CHAIN_TIMEOUT`。最初のウォームアップサイクルですでにModbus入力点位2つが欠落 |

再現：上流コミット `b5fe4cc`、4プロトコルシミュレーター。実行記録は上流パッケージの `description.md` に記載

### 北向き障害からの復旧

条件は、約350 events/sでクラウドブローカーを300秒停止（ブローカーのプロセスまたはコンテナを停止。劣化したリンクではありません）、スプール上限512 MB / 86,400 s、1,800秒実行、arm64ホストです。

| 指標 | 値 | 条件 |
|---|---|---|
| 障害中のスプール増加 | キューは60.1 KB/s、ピーク時18.33 MB / 325バッチ | 再接続後にゼロまで排出 |
| ブローカー再起動から最初の再送メッセージ | 1.2–2.2秒 | 再起動から最初の再送までの測定値。CONNACKから最初の再送までの上限 |
| 永続ブローカーの再送完全性 | 1.000 | 永続購読セッション、message-id集合の共通部分 |
| メモリブローカーの再送完全性 | 0.9839 ▲ | 同じ300秒の障害 |

▲ 欠落した58メッセージはすべてブローカー再起動後0.496–1.058秒、テスト購読者のSUBACK（1.069秒）より前に到着しました。購読成立前の観測できない時間帯に当たり、ゲートウェイ側では破棄していません。

再現：上流コミット `f831bae`。実行記録は上流パッケージの `description.md` に記載

### ランタイムと主要パラメーター

ランタイムは `sensecraft-missionpack.seeed.cn` からコンテナイメージ（x86-64 と arm64）として配布されます。現時点で公開ソースリポジトリはありません。

- **点位上限**：管理対象2,000点位、そのうち書き込み可能は50点位で、コードで強制されます。
- **取得間隔**：2,000点位で安定動作するかを決めます（上表参照）。OPC UA/Modbus 5秒・BACnet 10秒は合格、2秒 / 4秒で不合格になります。
- **北向きスプール**：容量と保持時間の上限（実測では512 MB / 86,400 s）で、ホストが耐えられる障害時間が決まります。バッチサイズとQoS 0ハートビートの有効/無効も設定できます。

### 既知の劣化

- **取得間隔を1段階短くするごとに**、結果は合格、劣化、中断と変わります。不合格になった指標はすべて予測プラグイン（`PREDICTION_*`）のものです。
- **予測プラグインの速度には構造上の上限があります（未修正）**：各サイクル後に固定時間スリープするため、速度は `1/(1.0 + t_cycle)` です。2,000点位では `t_cycle` が約0.119秒で、上限は約0.894 cycle/sとなり、長時間テストが要求するゲート0.90を下回ります。

### 次のステップ

- reComputer R10 シリーズまたは reTerminal DM に実機を接続し、OPC UA、Modbus TCP、Modbus RTU（USB-RS-485）、BACnet/IP の読み書きと独立した読み戻しを行います。
- 同じ対象ホストで 72 時間の無人運転を行い、その間にネットワーク、ブローカー、プロセス、デバイスの復旧演習を実施します。

## データと素材の出典

- **実測結果** — 4プロトコルシミュレーターで負荷を生成、reComputer R2000シリーズ（arm64）とLinux x86_64ワークステーション、上流コミット `b5fe4cc` と `f831bae`。上流パッケージ自身の `description.md` から再現しており、実行記録は上流プロジェクトにあります。
- **製品画像とリンク** — 参考設計ページのバンドルに対応するSKUを、Seeed製品カタログ（`media-cdn.seeedstudio.com`）から取得しています。
- **アーキテクチャ図** — 上流の `solution.yaml` トポロジーから描画したもので、デバイス構成の模式図でありスクリーンショットではありません。
- ランタイムコンテナイメージは `sensecraft-missionpack.seeed.cn` から配布され、wikiには含まれません。
