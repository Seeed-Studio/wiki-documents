---
description: 介護施設・在宅ケアの現場でローカル転倒通知を構築する方法——必要な機器、構築手順、7台のデバイスでの実測データ、エンジニア向け実装詳細
title: 'オンデバイス AI 転倒検知：構築・デプロイ・実測データ'
keywords:
  - 転倒検知
  - 転倒検出
  - 介護施設 転倒通知
  - オンデバイスAI
  - 姿勢推定
  - fall detection
  - edge AI
  - reCamera
  - reComputer
  - Jetson
  - Hailo-8
  - MQTT
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png
slug: /solutions/edge-fall-detection
sidebar_position: 2
last_update:
  date: 09/01/2026
  author: seeed-solutions-hub
createdAt: '2026-09-01'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/ja/solutions/edge-fall-detection/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[利用上の注意]
これは**補助的な通知**であり、認証を受けた医療・人身安全機器ではありません。検知漏れについて一切の保証はなく、人による見回りの代わりにはなりません。現場での性能は設置位置と実際の対象者によって変わるため、本番導入前には現場映像で確認してください。
:::

## このソリューションでできること

部屋にカメラを 1 台設置します。人が転倒すると、数秒以内に通知先——介護ステーション、家族の Home Assistant、詰所の NVR、あるいは自社システム——にメッセージが届きます。介護施設、リハビリ施設、在宅ケア、個室寮といった固定された部屋での利用を想定しています。

- オープンソース実装：[github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- 構成の選択とデプロイ：[すぐに導入できるソリューションページ](https://www.seeed.co.jp/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>映像は現場から出ません</h3>
                <p>検知・判定・通知はすべて現場のデバイス上で完結します。ネットワークに流れるのは数百バイトのテキストメッセージだけで、映像は現場の外に出ません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>平均 1.4 秒で通知</h3>
                <p>公開データセットでの凍結済み 6 構成の実測：転倒再現率 95.8%、転倒からメッセージ発行までの平均 1.4 秒。詳細な数値は文末の付録を参照してください。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>1 部屋から十数ストリームまで</h3>
                <p>一体型は 1 部屋を担当します。Hailo-8 搭載機に替えれば、1 台のホストで十数台のカメラを、判定ロジックはそのままに扱えます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>オフラインで動作、サブスク不要</h3>
                <p>クラウド推論に依存しないため、カメラ台数に応じたクラウド課金もありません。外部にイベントを転送する場合のみ、インターネット接続が必要です。</p>
            </div>
        </li>
    </ul>
</div>

### 実機デモ

デバイスが実際に出力する画面：人物に骨格が重ねて表示され、枠にはその人のトラック ID と現在の状態がラベル付けされ、右上には判定に使う 3 つの特徴のうち何個が成立しているかが表示されます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/cover-70f929f3.png" alt="reComputer J30 / J40 上で確認された転倒——骨格・トラッキング状態・証拠カウントはリアルタイムの MQTT メッセージから"/>
</div>

`#12 FALLEN` はその人物のトラック ID と現在の状態、左上の `Evidence: 2/3` は判定に使う 3 つの特徴のうち 2 つが成立していることを示します。状態遷移のアニメーションは[下の構築手順](#step-2-install-the-software)にあります。

## 必要な機器

現場にあるのは 2 つだけです。映像を出すカメラと、認識を実行するホストです。

**① カメラ** — すでに IP カメラがあればそのまま使えます。RTSP でストリームを受け取るだけで、カメラ側は一切変更不要です。ない場合は、reCamera 2002 / Pro がカメラと演算能力を 1 台にまとめており、電源を入れればすぐ使えます。

**② 検知ホスト** — 検知と判定を行うデバイスで、何ストリーム接続できるか・費用がいくらかもこれで決まります。既存カメラがある場合は別筐体になり、reCamera を使う場合はカメラ自体が検知ホストになります。

| | 検知ホスト | 1 台あたりのストリーム数 | 選ぶべき状況 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera 2002 / Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>カメラと演算能力が一体 | 1 | 1 部屋で、最速で通知を 1 本動かしたいとき |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3576 / RK3588](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html) | 1 | すでに Rockchip ボードで統一しているとき |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12（Hailo-8）](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | 16 | 1 台で多数のストリームを扱いたいとき |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Orin Nano / Orin NX | 7 / 8 | 複数部屋があり、拡張の余地も欲しいとき |

ストリーム数は実測スループットから換算した値です。エンドツーエンドで実測しているのは 1 ストリームのみなので、実際の現場で自ら負荷試験を行ってから決めてください。

これ以外に必要なのはネットワークだけです。デバイスと受信側が同一 LAN 上にあれば十分で、外部ネットワークは不要です。

## 現場での構築手順

手順は 2 つです。まずカメラの設置位置を決め、次にソフトウェアを導入します。

### ステップ 1：カメラを設置する——設置位置が上限を決める {#step-1-mount-the-camera}

:::tip[設置位置は機種選びよりも結果を左右します]
人から 2–3 m、側方または斜めに固定設置し、肩と腰が見える構図にしてください。転倒の瞬間そのものが画面内で起きる必要があり、起動時にすでに人が横たわっていれば姿勢は報告されますが通知は出ません。真上からの俯瞰、長い廊下の遠景、家具で大きく遮蔽された構図は、いずれも精度が明らかに落ちます。
:::

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/camera-placement-be3fb598.svg" alt="設置位置の目安：2–3 m の側方または斜め設置は使用可能。真上からの俯瞰、遠景、遮蔽された構図は使用不可"/>
</div>

### ステップ 2：ソフトウェアを導入する——4 ステップ {#step-2-install-the-software}

デバイスごとの具体的な操作手順はすぐに導入できるソリューションページにあり、現場条件に合わせて構成を選ぶとそのままアプリパッケージをダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んでアプリパッケージをダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

全体の流れは次のとおりです。

1. **構成を選ぶ** — すぐに導入できるソリューションページで 3 つの質問（カメラの有無、転倒エリアからの距離、必要なストリーム数）に答えると、対応する機器構成が提示されます。
2. **アプリパッケージを導入する** — 対象デバイス用のパッケージをダウンロードしてインストールします。モデル・ランタイム・判定しきい値はパッケージにあらかじめ凍結済みで、下記の実測データで採点されている構成そのものなので、自前で学習やチューニングをする必要はありません。
3. **2 項目だけ設定する** — 映像ソースのアドレス（reCamera 使用時は不要）とデバイス名です。デバイス名はメッセージトピックの先頭セグメントになるので、部屋やベッド単位で命名すれば、同一受信側に複数デバイスがあっても互いを上書きしません。下図はデプロイ用プラットフォームのデバイス管理画面です。「組み込み」を選択し、デバイスの IP と ADB ポートを入力します。

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/recamera-pro-firmware-update-a9539b3d.gif" alt="デバイス管理 → 組み込み → reCamera Pro、展開してアドレスと ADB ポートを入力"/>
</div>

4. **プレビューで設置位置を確認する** — 導入が終わるとアプリ内でライブ映像が見られ、人物に骨格と状態が重ねて表示されます。通知の設定に進む前に、カメラが見るべき範囲を実際に捉えているかここで確認します。下図は reCamera Pro のプレビュー画面で、パネルの状態遷移を示すためのものです。**状態ラベルは再生であり、評価の根拠ではありません**——実測数値は「実測データ」を参照してください。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/live-fall-demo-f4ef5180.gif" alt="通常から転倒への状態遷移。画面は reCamera Pro App Center のプレビュー"/>
</div>

導入から稼働までは、reCamera で約 30 分。Jetson は初回にデバイス上で推論エンジンをビルドする必要があるため、より時間がかかります（実測 461 秒〜）。

## 自社システムへの接続

デバイスは自分自身の上で動く MQTT broker（1883）にイベントを発行します。あなたのシステムはそれをサブスクライブするだけです。接続方法は 3 通りです。

- **Home Assistant** — 設定は不要です。デバイスは自動検出プロトコルで広報し、HA 側には転倒センサー・現在の状態・イベント番号・在室状態の 4 つのエンティティがそのまま現れます。あとは自動化に組み込むだけです。
- **NVR / ナースコールシステム** — `<デバイス名>/fall-detection/results` をサブスクライブします。「転倒したかどうか」だけを見たい場合は、ペイロード内の `fall_event` を確認してください。転倒状態に入った瞬間だけ 1 回立つため、1 回の転倒につき 1 回だけ発火し、人が床にいる間ずっと繰り返し発火することはありません。
- **自前システム / API** — 同様にサブスクライブします。ペイロードには `person_count`、`fallen_count`、そして各人物の `track_id` / `state` / `bbox` も含まれており、自前のダッシュボードを組むには十分です。reCamera はさらに RTSP 8554 `/live0` でライブ映像を提供します。

`<デバイス名>` は前の手順で入力したものです。部屋やベッド単位で命名すれば、同一 broker 上に複数デバイスがあっても互いを上書きしません。

### トピックと payload の全体像

| トピック / ポート | 内容 | retained |
|---|---|---|
| `<デバイス名>/fall-detection/results`（複数ストリーム時は `.../results/{stream_id}`） | フレームごとに JSON 1 件：`state`、`fall_detected`、`fall_event`、`event_id`、`person_count`、`fallen_count`、および `persons[]` 内の `track_id` / `state` / `bbox` | いいえ |
| `<デバイス名>/fall-detection/status` | `online` / `offline`、MQTT の遺言メッセージで発行 | はい |
| `homeassistant/` | 自動検出コンフィグ——転倒センサー、状態、イベント番号、在室 | はい |
| RTSP 8554 `/live0`（reCamera） | プレビューと NVR 向けのライブ映像 | — |

ストリーム ID はペイロードにも書き込まれるため、下流でトピックを解析して送信元を判断する必要はありません。`fall_event` は状態遷移の瞬間にのみ 1 回だけ立つため、オートメーションは転倒 1 回につき 1 回だけ発火し、人が床にいる間ずっと繰り返し発火することはありません。

broker も検知ホスト上にあります。reCamera は内蔵の broker を、reComputer の各構成は検知器と一緒に `eclipse-mosquitto:2` を立ち上げ、1883 ポートはホスト自身が提供します。外部 broker は不要で、この経路のどの段階も外部ネットワークを必要としません。

## エンジニア向け：実装詳細

ソースコードには各プラットフォームのモデル変換、Docker オーケストレーション、判定重みの学習スクリプトが含まれます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下はソースコードを読まなくても知っておくべき内容です。

### 姿勢推定：同一モデル、4 種類のランタイム

すべてのプラットフォームで同じ 640² 姿勢モデル系列を用い、しきい値も共通です（`score_threshold` 0.35、`keypoint_threshold` 0.25、`nms_threshold` 0.45、`max_fps` 15）。違いはランタイムと、モデルをどうデバイスへ届けるかにあります。

| 検知ホスト | 姿勢モデル | 精度 | ランタイム | モデルの配布方法 |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n-Pose | INT8 | カメラ NPU | コンソールからカメラアプリとしてインストール |
| reComputer J30 / J40 | YOLO11s（Orin Nano）/ YOLO11m（Orin NX） | FP16 | TensorRT | エンジンは**デバイス上でビルド**——GPU アーキテクチャと TensorRT バージョンに紐づくため事前ビルドを配布できません。Orin Nano 実測：YOLO11s で 461 秒 |
| reComputer RK3576 / RK3588 | YOLO11n-Pose | FP16 | RKNN Lite | `.rknn` はボード単位で配布。RK3588 向けにコンパイルしたモデルは RK3576 では読み込めません |
| reComputer R2000 系列（R2035-12，Hailo-8） | YOLOv8s-Pose | INT8 | GStreamer + `hailonet` | 公式のビルド済み HEF、固定ダイジェストで検証 |

精度データは Orin Nano（JetPack 6.2、TensorRT 10.3、CUDA 12.6、SM87）で取得しています。Jetson イメージ自体には CUDA・TensorRT・OpenCV・GStreamer を含めず、ホスト側のライブラリを読み取り専用でマウントします。そのためイメージサイズは数 GB ではなく約 206 MB です。RK イメージはホストの `librknnrt.so` をマウントします。Hailo は ABI が **HailoRT 4.21** に固定され、GStreamer プラグイン・ユーザーライブラリ・カーネルドライバの 3 者がバージョン一致している必要があります。

### 判定：素早く座る動作がなぜ誤検知にならないか

姿勢出力だけでは「転倒」と「素早く座る動作」を区別できません。判定層は人物ごとのトラッキングとステートマシンで構成され、設計は全プラットフォーム共通です。

| 工程 | 発火条件 | 設定値 |
|---|---|---|
| トラック関連付け | 既存トラックとの IoU または中心距離 | `iou_threshold` 0.20、`center_distance_threshold` 0.25、`max_missed_frames` 8 |
| 通常 → 疑い | 2 つ以上の特徴が同時に成立 | 体幹角 > 55°、バウンディングボックス縦横比 > 1.25、0.75 秒窓での腰部落下速度 > 0.25 |
| 疑い → 転倒 | 特徴が継続して成立し、**かつ時系列モデルが確認** | `confirmation_sec` 0.80、`temporal_confirmation_required` true。成立しなくなった場合は `suspected_timeout_sec` 1.50 で解除 |
| 遮蔽 | 一時的に見失ってもトラックを保持 | `occlusion_grace_sec` 0.75 |
| 転倒 → 回復中 | 立位姿勢に復帰 | 体幹角 < 35° かつ縦横比 < 1.10 が 2.00 秒継続 |
| 重複抑制 | 1 回の転倒を 1 回だけ数える | `cooldown_sec` 3.00。`fall_event` は状態遷移の瞬間のみ立つ |

これらの特徴量の上に小さな時系列モデルが載ります。その重みは**プラットフォームごとに再抽出・再凍結**し、そのプラットフォーム自身の実際の姿勢出力を用います（`temporal_profile: auto`）。姿勢モデルが変わればトラックも変わるため、他プラットフォームからの流用はしません。

**幾何学的特徴だけでは転倒を確定できません。** 出荷時設定は `fall.temporal_confirmation_required: true` です。幾何学的特徴は状態を「疑い」に進め、回復判定を担うだけで、「転倒」への遷移には有効なトラック上での時系列モデルの陽性判定が必須です。失われた・期限切れのトラックはイベントを発火せず、起動時の最初のフレームがすでに横たわった姿勢でもイベントにはなりません。これが誤検知を抑える主な仕組みであり、これを無効化すると幾何学的特徴だけで転倒が確定してしまいます。

## 付録：実測データ {#appendix-measured-data}

この節は数値を確認したい読者向けです。読み飛ばしても導入手順には影響しません。以下はすべて公開データセットでの実測です。**医療機器または人命安全機器の認証を示すものではありません**。実環境の性能はカメラの設置位置と対象となる人々に左右されます。クリップごとの生レポートとチェックサムは、リポジトリの [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation) にあり、このページの各数値を記録済みの具体的な実行結果まで追跡できます。

### 精度結果

凍結済み 6 構成の平均は、**正解率 85.8%、転倒再現率 95.8%、特異度 77.8%、F1 85.7%、平均通知レイテンシ 1.4 秒**です。個別構成は 81.5%〜88.9% の範囲に入ります。

この 6 構成は Jetson YOLO11s、Jetson YOLO11m、reCamera Pro、RK3576、RK3588、Hailo-8 で、それぞれ固有の凍結済み構成を使っています。reCamera 2002 の v0.2 ベースライン（正解率 74.1%）は、旧世代の時系列重みを使うため平均から除外しています。構成ごとの詳細は、リポジトリの[統合精度表](https://github.com/suharvest/edgefallkit/blob/main/evaluation/RESULTS.md#统一准确性表)にあります。

**測定方法**

- データセットは [GMDCSA-24 v2.1](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos)（MIT）を被験者単位で分割。
- Subject 1〜2 で時系列モデルを学習し、Subject 3 だけで特徴量、隠れ層幅、正則化、確率しきい値、確認フレーム数を選定。構成を凍結した後、Subject 1〜3 で重みを再フィット。
- Subject 4 はホールドアウト試験セットで、**ちょうど 1 回だけ**読み込み。以前にパイプラインのスモークテストで使った 10 クリップを除外し、**27 クリップ**（転倒 12、日常活動 15）を残した。
- すべての動画を 15 FPS に再サンプリングし、各クリップの前にトラッキングと時系列状態をリセット。
- 注釈された転倒開始より 0.5 秒以上前に通知が発火した場合は、ヒットではなく偽陽性と数える。
- すべてのプラットフォームで、自身の実際の姿勢出力からトラックを再抽出し、判定重みを再学習して凍結。姿勢モデルが異なればトラックも異なるため、プラットフォーム間で流用していない。
- 再現コマンドは `platforms/jetson/tools/evaluate_videos.py`。データセットはリポジトリに含まれないため、自分で取得する。

**デバイス間で精度を比較しない理由**：27 クリップの試験セットでは分解能が 3.7 パーセントポイントで、1 クリップが 1 段階に相当します。RK3576、RK3588、Hailo はすべて同じ 88.9% でした。モデルサイズもスコアと相関しません。**デバイスは精度ではなく、ストリーム数、既存ハードウェア、映像ソースで選んでください。**

### 測定したデバイス

7 台のデバイスと 4 種類のアクセラレータを測定しました。「エンドツーエンド」はストリーム取り込みから通知までの全経路を試験セットで実行・採点したもの、「推論ベンチマーク」は検知速度だけを測定したものです。

| デバイス | アクセラレータ | 出荷モデル | エンドツーエンド | 推論ベンチマーク |
|---|---|---|:-:|:-:|
| reCamera 2002 | 内蔵 NPU | YOLO11n-Pose INT8 | ✅ | ✅ |
| reCamera Pro | 内蔵 NPU（RK） | YOLO11n-Pose INT8 | ✅ | ✅ |
| reComputer RK3576 | RK3576 NPU | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer RK3588 | RK3588 NPU | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer R2000 系列 | Hailo-8 | YOLOv8s-Pose INT8 | ✅ | ✅ |
| reComputer J30 | Orin Nano GPU | YOLO11s-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer J40 | Orin NX GPU | YOLO11m-Pose FP16 | ✅ | ✅ FP16 / INT8 |

デバイスごとのフレームレイテンシ、マルチストリームスループット、測定範囲は、以下の[性能実測詳表](#性能実測詳表)にあります。

### 性能実測詳表 {#性能実測詳表}

#### デバイスごとの速度

異なるデバイスで同じモデル、**YOLO11n-Pose、入力 640²**を測定しました。フレーム単位の値はアクセラレータ推論のみ（RTSP デコードと後処理を含まない）で、集約スループットは 1〜6 個の同時コンテキストで測定した最高総フレームレートです。異なる精度は同じ表で比較していません。Hailo-8 の行は Raspberry Pi 5 + Hailo-8 M.2 の検証機で測定しました。表に記載した R2035-12 は、同じ Hailo-8（26 TOPS）を搭載する reComputer R2000 シリーズの型番です。

FP16：

| プラットフォーム | 姿勢モデル | フレーム単位 | 集約 | 推論律速ストリーム | 推奨ストリーム |
|---|---|---:|---:|---:|---:|
| reComputer RK3576 | YOLO11n | 56.1 ms | 29.2 FPS | 1 | 1 |
| reComputer RK3588 | YOLO11n | 51.4 ms | 51.4 FPS | 3 | 1 |
| reComputer J30 Series (J3011) | YOLO11n | 3.7 ms | 270.7 FPS | 18 | 7 |
| reComputer J40 Series (J4012) | YOLO11n | 3.3 ms | 306.2 FPS | 20 | 8 |

INT8：

| プラットフォーム | 姿勢モデル | フレーム単位 | 集約 | 推論律速ストリーム | 推奨ストリーム |
|---|---|---:|---:|---:|---:|
| reCamera 2002 | YOLO11n | 53.0 ms | 10.0 FPS | 1 | 1 |
| reCamera Pro | YOLO11n | 35.9 ms | 18.1 FPS | 1 | 1 |
| reComputer RK3576 | YOLO11n | 36.2 ms | 42.1 FPS | 2 | 1 |
| reComputer RK3588 | YOLO11n | 29.8 ms | 90.4 FPS | 6 | 2 |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s ▲ | 6.9 ms | 393.9 FPS | 26 | 16 |
| reComputer J30 Series (J3011) | YOLO11n ＊ | 2.7 ms | 363.9 FPS | 24 | 9 |
| reComputer J40 Series (J4012) | YOLO11n ＊ | 2.5 ms | 408.0 FPS | 27 | 10 |

**▲ Hailo 行は s サイズを使っています。このアクセラレータでは n サイズの方が遅いためです。** 公式 Model Zoo v2.15 の hailo8 ディレクトリには `yolov8s_pose` と `yolov8m_pose` だけがあり、n サイズの姿勢モデルはありません。Hailo Dataflow Compiler 3.31.0 で YOLO11n-Pose を自前コンパイルし（640²、INT8、GMDCSA 64 フレーム較正）、同じボードで **9.01 ms / 92.2 FPS**を測定しました。s サイズは 6.87 ms / 393.9 FPS でした。フレームレイテンシは同程度（+31%）ですが、スループットは 4.3 倍異なります。コンパイラは 11n を **3 コンテキスト**に分割し、フレームごとに重みを入れ替えます。一方、Model Zoo の s モデルは単一コンテキストで重みを常駐させます。この設計がストリームごとに必要とする 15 FPS に対して、92.2 FPS でも約 6 倍の余裕があります。差が現れるのはマルチストリーム密度だけです。この結果は当該 HEF のコンパイル結果であり、Hailo-8 上の YOLO11n の上限ではありません。

**＊ Jetson INT8 は現時点でデプロイできず、速度の参考値だけです。** エンジンはキャリブレータも較正セットもない `trtexec --int8` から直接構築しているため、動的レンジは任意です。カーネル速度は実測ですが、検知結果は利用できません。上流の `build_engine.sh` が渡すのは `--fp16` だけです。RK の INT8 は逆に、240 個の GMDCSA フレームで較正済みで、較正セット外のフレームでもフレーム単位の検知数が FP16 と完全一致するため、デプロイ可能です。

#### 実映像では遅くなる

上の両表は **合成した空の 640 フレーム**を入力し、アクセラレータ推論だけを測定しています。実映像は、画面内の内容を raw-head デコード、DFL、キーポイント、NMS に通す必要があるため遅くなります。

| プラットフォーム | 姿勢モデル | アクセラレータ | 実フレームパイプライン | 前後処理差分 |
|---|---|---:|---:|---:|
| reCamera 2002 | YOLO11n INT8 | 52.74 ms ◇ | 53.23 ms | 0.012 ms |
| reCamera Pro | YOLO11n INT8 | 35.2 ms ✦ | 36.6 ms | 1.4 ms |
| reComputer RK3576 | YOLO11n FP16 | 69.6 ms | 70.8 ms | 1.2 ms |
| reComputer RK3588 | YOLO11n FP16 | 54.4 ms | 54.8 ms | 0.4 ms |
| reComputer R2000 Series (R2035-12, Hailo-8) | YOLOv8s INT8 | 6.9 ms | 8.77 ms | 1.9 ms |
| reComputer J30 Series (J3011) | YOLO11n FP16 | 3.7 ms ◆ | 5.57 ms | 1.9 ms |
| reComputer J40 Series (J4012) | YOLO11n FP16 | 3.3 ms ◆ | 5.18 ms | 1.9 ms |

「パイプライン」は推論 + 前処理 + raw-head デコード / DFL / キーポイント / NMS です。RTSP デコード、トラッキング、時系列 MLP、MQTT は**含みません**。Orin NX の 5.18 ms は実測 400 フレーム、Orin Nano の 5.57 ms は 1359 フレーム、Hailo の 8.77 ms は 1951 フレームから得た値です（Hailo の内訳はハードウェア推論 6.87 ms、デコードと NMS は 0.052 ms のみ）。

- **◇ reCamera 2002 は「アクセラレータのみ」の列を分離できません**。公開される単一タイマーの範囲がこの表のパイプライン定義と完全に同じで、52.74 ms には前後処理がすでに含まれます（人が映る場合と映らない場合を含む 250 フレームの測定で、ほぼ同じ）。
- **✦ reCamera Pro 行はクロック固定で測定**（NPU 950 MHz、CPU performance governor）。既定の `rknpu_ondemand` governor は 800 MHz に落ち着き 43.1 ms で、同じボードでも周波数 governor だけで 23% 差が出ました。RK3576 / RK3588 は常に最高ステップで測定し、影響を受けません。
- **◆ Jetson 列は `trtexec` の純粋な GPU 計算**（ホストコピーなし）、RK 列は `rknnlite.inference()` で、両者の範囲は定義上異なります。比較すべき列はパイプライン列です。その基準では Jetson は RK3588 より約 11 倍、RK3576 より約 14 倍高速です。

#### ストリーム数の読み方

「推論律速ストリーム」= 集約スループット ÷ 15 FPS です。アクセラレータだけを数えた理論上の上限です。「推奨ストリーム」はそこから割り引いた値で、RK のエンドツーエンドスループットは、RTSP デコード、トラッキング、ステートマシン、MQTT も CPU とメモリ帯域を使うため、推論上限の 28%〜44% にとどまりました。他のワークロードがボード上で動く状態では、エンドツーエンド実測は RK3588 で約 8.6 FPS、RK3576 で約 4.9 FPS でした。

**測定条件**：両 Jetson は同居ワークロードを停止して測定しました。この手順は必要です。アクセラレータを同居ワークロードが占有すると数値が逆転し、Orin NX は自身の推論ワークロード実行中に 264.9 FPS となり、Orin Nano より低く、両者の計算性能の関係と逆になりました。停止時は 306.2 FPS でした。Orin Nano はどちらでも同じ（270.5 対 270.7）で、ワークロードが GPU に触れないためです。

### 既知の制限

- **構図が精度を決めます。** 上の数値は固定カメラ、中距離の構図、屋内、肩と腰が見える条件のものです。2〜3 m の側方または斜め設置は機能しますが、真上からの俯瞰、長い廊下の広角映像、家具による大きな遮蔽では悪化します。
- **異なるデータセットでは再現率が下がります。** 独立した外部データセット RealBiomFall（34 クリップ、すべて転倒）では、実測再現率が reCamera で 58.8%、reComputer J30 / J40 にデプロイした YOLO11m で 52.9% に低下しました。制限要因は転倒判定ではなく、姿勢モデルの人物検出率です。生産導入前に現場映像からトラックを再抽出し、時系列重みを再学習・再凍結してください。
- **転倒そのものがカメラに映る必要があります。** 検知開始時点ですでに横たわっている場合、姿勢は報告しますがイベントは生成しません。
- **エンドツーエンドで測定したのは単一ストリームだけです。** 上のストリーム数は導出値なので、1 ストリームを超える場合は自分の現場で負荷試験をしてください。

## アラームパネル（廃止された Eldercare Alarm 設計から統合）

アラームパネルはこの設計の一部として提供されます。reComputer J30 / J40、RK、R2000 のプリセットでは compose スタックに含まれ、2 つの reCamera プリセットでは追加ホストを任意で用意します。以下は単体の Eldercare Alarm ページ向けに書かれた内容で、そのままこのパネルにも適用されます。

:::caution[利用上の注意]
これは**補助アラーム**であり、医療機器でも認証済みの緊急対応製品でもありません。診断や治療を行わず、介護者の判断を置き換えず、アラームの見逃しがないことも保証しません。アラームは促しであり、判断と対応は人が行います。数値を引用する前に、対象範囲を[付録：実測データ](#appendix-measured-data)で確認してください。
:::

### このソリューションでできること

転倒検知器はすでにイベントを発行します。ここでは「カメラが何かを見た」から「人が対応した」までを補います。各部屋を固有ルールのゾーンとして扱い、アラームを開き、担当者が 1 ページのコンソールで確認または却下し、確認済みアラームを担当者名付きの webhook または MQTT メッセージとして送信します。介護付き住宅、在宅ケア、後からアラーム対応を説明できる必要がある現場向けです。

- オープンソース実装：[github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- 構成の選択とデプロイ：[すぐに導入できるソリューションページ](https://www.seeed.co.jp/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>ゾーンごとに判定する 3 種類のアラーム</h3>
                <p>検知器からの転倒イベント、<code>no_person_timeout</code>を超えて空になったゾーン、<code>no_motion_timeout</code>を超えて bbox 中心が動かない人物です。浴室と寝室には異なるタイムアウトを設定できます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>単なる通知ではなく確認ステップ</h3>
                <p>5 秒の証拠収集ウィンドウの後、担当者に 60 秒を与えます。確認と却下のどちらも、操作した担当者とともに記録されます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>監査できる配信</h3>
                <p>確認済みアラームが 5 秒以内に通知されないと escalated に移り、30 秒ごとに再試行します。ローカル再生の実測では、4 秒の障害後にキューへ入れた 3 件中 3 件を復旧し、重複は 0 件でした。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>通知に映像は含まれない</h3>
                <p>アラーム ID、種類、ゾーン、ストリーム ID、タイムスタンプ、担当者、べき等キーを送ります。スナップショット取得は既定でオフのスイッチです。</p>
            </div>
        </li>
    </ul>
</div>

#### コンソールに表示される内容

確認コンソールは担当者が使うすべての画面です。各アラームの現在状態を示す一覧、音声確認を有効にした場合の判定、担当者名を監査証跡に書き込む確認／却下ボタンを備えます。`@sensecraft/ui-kit` 上の React アプリで、アラームサービス自身が HTTP 8080 で配信します。

公開されたコンソールのスクリーンショットは、**再生したデモデータに対して撮影したもの**です。`evaluation/replay/replayer.py --scenario fall` が合成 bbox とトラックデータを供給しています。カメラ映像も、実在人物やデータセット由来の人物も含みません。現場性能の証拠ではなく、UI の参考として扱ってください。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-dashboard-en-97ba47b3.png" alt="確認コンソールのホーム：左に部屋一覧、右にアラームストリーム、各アラームに種類・ゾーン・現在状態"/>
</div>

アラームを 1 件開くと、イベント時刻、状態遷移、確認を押した担当者を含む全履歴が表示されます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/room-detail-en-ba109d0a.png" alt="単一部屋の詳細：ゾーン設定、現在の在室状況、その部屋のアラーム履歴"/>
</div>

### 必要な機器

必要なのは 3 つです。検知イベントを生成するもの、何をアラームにするかを決めるホスト、通知を受け取るものです。3 つ目は自社システムなので、実際に選ぶのは最初の 2 つです。

**① イベントソース** — 既存の RTSP カメラなら検知器をアラームホストに配置してストリームを指定します。すでに検知器を実行する reCamera カメラなら、検知側は変更しません。

**② アラームホスト** — ゾーン、タイムアウト、ステートマシン、SQLite 監査ストア、確認ページ、配信キューを実行する筐体です。3 パッケージのうち 2 つでは検知器も実行します。

| | アラームホスト | 検知器の実行場所 | 選ぶべき状況 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>1 台の Jetson 上に検知器、アラームサービス、broker、コンソール | この筐体で初回デプロイ時に TensorRT エンジンを構築 | カメラはあり、現場にゲートウェイがまだないとき。3 パッケージで最も多くのストリームを扱う |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>同じスタックで、より大きい姿勢モデル | この筐体では YOLO11s ではなく YOLO11m | J3011 1 台では足りない部屋数、またはより大きい姿勢モデルが必要なとき。同じパッケージの別オプションとしてデプロイフォームで選ぶ |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>ファンレス産業用筐体 | この筐体でネイティブ C++ ホットパス、コンパイル済み HEF | キャビネットまたはライザーに設置。ファンレス、広い温度範囲、DIN レールまたは壁面取り付けが必要なとき |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>カメラと AI を一体化。アラームサービスは既存マシンに配置 | カメラ上 | カメラがまだない、またはカメラがすでに検知しているとき。アラームサービスは手動で起動します。デプロイフォームには自前ゲートウェイ用のデバイス種別がありません |

**容量の主張の読み方。**「3 つの中で最も多くのストリームを扱う」は上流パッケージの説明に基づくもので、ここでの測定ではありません。3 デバイスのいずれでもマルチストリーム負荷試験は未実施です。自分の負荷試験でホストを選定してください。

その他の前提は、1883 で到達できる MQTT broker（Orin と Hailo パッケージは起動し、reCamera パッケージはカメラがすでに発行している broker を利用可能）、Orin と Hailo パッケージの固定された屋内視野、通知を受け取る webhook エンドポイントまたは MQTT サブスクライバーです。

### 現場へのデプロイ方法

2 つに分かれます。ゾーンが機能する位置にカメラを置き、その後に導入と設定を行います。

#### 1. カメラとゾーン

:::tip[ゾーンはカメラフレーム上の正規化矩形です]
カメラを移動または再調整すると、**エラーが出ないまま**ゾーン配置が無効になります。矩形自体は残りますが、部屋の別の場所を覆うことになります。カメラに物理的な変更を加えた後は、すべてのゾーンを再確認してください。
:::

Orin と Hailo パッケージでは、想定する転倒経路で人物が見え続ける固定された屋内視野も必要です。下層の検知器は転倒検知 Wiki に記載した EdgeFallKit 検知器と同じで、設置条件も同じです（2〜3 m の側方または隅からの視野、肩と腰が見えること）。

ゾーンの形に関する 2 つの判断が、現場で発生するノイズ量を左右します。

- **ゾーンがベッドを含むか、通常の昼寝より長いタイムアウトにしない限り、睡眠中に `no_motion` が発火します。** 動きは追跡人物の bbox 中心の変位が `motion_threshold` を超えたものです。オプティカルフローやキーポイント速度ではないため、毛布の下の小さな動きは数えません。
- **遮蔽は誤った `no_person` を発生させることがあります。** ゾーンは人物が再び見えるまで再アームされないため、1 回の遮蔽で繰り返しではなく 1 件のアラームが発生します。ただし、その 1 件は発生します。

#### 2. ソフトウェア：4ステップ

デバイスごとの手順はすぐに導入できるソリューションページにあります。現場についていくつかの質問に答えると、対応するアプリケーションパッケージをダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/fall_detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んでダウンロード 🖱️</font></span></strong>
    </a>
</div><br />


1. **構成を選ぶ** — コンフィギュレーターで壁面に何があるか、ホストをどこに置くかを指定すると、3 パッケージのいずれかが返ります。
2. **パッケージを導入する** — Orin と Hailo パッケージは検知器とアラームサービスを一緒にデプロイします。reCamera パッケージは検知用には何もインストールせず、自前ゲートウェイでアラームサービスを手動起動します。
3. **設定を入力する** — ゾーンと `no_person_timeout` / `no_motion_timeout`、ステートマシンのウィンドウ、webhook URL、最初のトピックセグメントになるデバイス名を設定します。ゾーンは画像上に直接描き、保存時に反映されます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-draw-zone-d715c416.gif" alt="ライブビュー上でゾーンを描画。保存して再読み込みした後も同じ位置に残る"/>
</div>

設定ページでは左にその部屋のライブビュー、右にゾーンの 2 つのタイムアウトを表示します。カメラがオフラインの場合は最新スナップショットに切り替わり、設定は引き続き編集できます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/config-live-view-en-e238b3a7.png" alt="ゾーン設定ページ：左にライブビュー、右に no-person と no-motion のタイムアウト"/>
</div>
4. **確認する** — テストアラームを発生させ、完了まで確認します。アラームがコンソールに表示され、担当者の操作が記録され、webhook エンドポイントがべき等キー付きの POST を 1 件受信します。下図では、注入した 1 件のアラームが表示から確認済みまで遷移します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/alarm-trigger-c29807f5.gif" alt="注入した転倒アラームがコンソールに現れ、担当者ウィンドウに入り、確認後に notified へ変わる"/>
</div>

ホスト上の検知器とサービスの状態は、デバイスコンソールで確認できます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/device-console-en-76e94f0c.jpg" alt="アラームホストのデバイスコンソール：検知器とアラームサービスの稼働状態"/>
</div>

<!-- TODO image: 現場設置写真（部屋に取り付けたカメラ）— 現地撮影が必要 -->

所要時間の目安は **45 分**で、難易度は **中級**です。Orin パッケージは初回デプロイ時にデバイス上で TensorRT エンジンを構築するため、最も時間がかかります。

:::caution[アラームサービスのイメージはまだ公開されていません]
パッケージ化時点では、上流プロジェクトの `docker/Dockerfile` から作ったローカルビルドしか存在しません。Orin または Hailo にデプロイする前に、ビルドしてタグを付け直すか、プッシュしてください。検知器イメージのダイジェストは `eldercare-alarm/release/PINNING.md` に保留中として記録されています。
:::

### 自社システムへの接続

統合対象はアラームホスト上で動くアラームサービスだけです。既存のシステムに応じて、入口は 3 通りあります。

- **ナースコールシステムまたはページングサービス** — webhook を利用します。確認済みアラームごとに、アラーム ID、種類、ゾーン、ストリーム ID、タイムスタンプ、担当者を含む POST を 1 件送ります。重複排除はタイムスタンプではなく、べき等キーで行います。
- **MQTT ベースの現場** — アラームバスを有効にし、`eldercare/alarm/<zone-id>` を購読します。ペイロードは webhook と同じで、既定ではオフです。
- **自社ダッシュボードまたは記録システム** — HTTP 8080 の `GET /api/alarms` をポーリングまたは読み取り、状態履歴と各アラームの担当者を含む完全な記録を取得します。

**命名。** `<device-name>` は検知器の結果トピックの最初のセグメントで、デプロイフォームで設定します。部屋、階、サイト単位で命名すれば、同じ broker 上の複数デバイスを区別できます。`stream_id` はメッセージペイロードから読み取り、トピックから解析しないため、broker の書き換えやブリッジのプレフィックスでゾーンが黙って別経路へ送られることはありません。

#### トピックとペイロードの全体像

| トピック / ポート | ペイロード | 既定値 |
|---|---|---|
| HTTP 8080 `GET /api/alarms`、`/` のページ | アラーム記録：`id`、`kind`、`zone_id`、`stream_id`、`state`、`event_timestamp`、`operator`。同じページで確認と却下を操作 | オン |
| 自分の webhook URL への HTTP POST | `{"id":"a-17","kind":"fall","zone_id":"bedroom","stream_id":"cam-01","state":"notified","event_timestamp":1788581337237,"operator":"nurse-a"}` とべき等ヘッダー。スナップショットと映像はなし | URL 設定後にオン |
| MQTT 1883 `eldercare/alarm/<zone-id>` | webhook と同じペイロード | オフ |
| MQTT 1883 `<device-name>/fall-detection/results/<stream-id>` | サービスが消費する `fall_result_v1` ストリーム：`stream_id`、`person_count`、`fall_event`、人物ごとの bbox | 入力、検知器が発行 |

**最も誤用されやすいフィールドは `state` です。** `escalated` は通知期限を逃したことを意味し、後の再試行が成功しても `notified` には戻りません。`escalated` を失敗状態として扱うダッシュボードでは、実際には配信済みのアラームまで表示されます。この区別がこのフィールドの目的です。

broker は Orin と Hailo パッケージではアラームホスト上、reCamera パッケージではカメラまたはゲートウェイ上で動きます。経路上でインターネットは不要です。バンドルされた broker は信頼できる LAN での試運転用に匿名接続を許可しますが、他の場所からデバイスへ到達できるようにする前に認証情報と TLS を設定してください。

### エンジニア向け：実装詳細

アラームサービスは上流プロジェクト自身のコードです。その下の検知器は EdgeFallKit で、公開された出力契約を通じてのみ利用します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong>
    </a>
</div><br />

#### 1つの判定層と、その下の3つのランタイム

アラームロジックは 3 パッケージすべてで同一です。ステートマシン、SQLite スキーマ、配信キューが同じで、異なるのは検知器の実行場所と実行ランタイムです。

| アラームホスト | 検知器の場所 | 姿勢モデル | ランタイム | モデル配布 |
|---|---|---|---|---|
| reComputer J30 (Orin Nano 8GB) | 同じホスト | YOLO11s-Pose | TensorRT | 初回デプロイ時にデバイス上でエンジンを構築 |
| reComputer J40 (Orin NX 16GB) | 同じホスト | YOLO11m-Pose | TensorRT | 初回デプロイ時にデバイス上でエンジンを構築 |
| reComputer R2000 Series industrial (R2035-12) | 同じホスト | YOLOv8s-Pose | HailoRT 4.21、ネイティブ C++ ホットパス | コンパイル済み HEF をダウンロード、デバイス上では構築しない |
| 自前で用意するゲートウェイ | reCamera カメラ上 | カメラの App Center に同梱される検知器 | カメラ NPU | このパッケージでは管理しない |

導入を決める前に知っておくべきプラットフォーム制約：

- **Hailo は HailoRT 4.21 に ABI 固定されています。** プラグイン、ユーザーライブラリ、ドライバは一体で更新され、他プロセスがアクセラレータを保持してはいけません。
- **Jetson 検知器は空フレームを発行する必要があります。** 既定では視野に誰もいないと何も送らず、`no_person` タイムアウトへの入力が枯れます。Orin パッケージは `publish_empty_frames: true` を設定しています。出荷済み検知器設定をデバイス独自設定に置き換える場合は、再度設定してください。Hailo ランタイムにはこのスイッチがなく、設定も不要です。
- **reCamera の正確なトピックとペイロード形状を自分のデバイスで確認してください。** Hailo のフレームごとの発行動作と、上記 Jetson の上書き設定も確認対象です。

#### ステートマシン：1つのイベントが1つの通知ではない理由

生の `fall_event` はアラームではありません。その間にある層が、出力を後から検証可能にします。

| 段階 | 発火条件 | 設定値 |
|---|---|---|
| 証拠ウィンドウ | アラームを開き、誰かに依頼する前に検知器の追加フレームを収集 | `statemachine.evidence_sec` 5.0 |
| 担当者ウィンドウ | コンソールにアラームを表示し、確認または却下を待つ | `statemachine.confirm_window_sec` 60.0 |
| タイムアウト動作 | 担当者ウィンドウ内に応答がない | `statemachine.confirm_timeout_action` — 既定では実アラームとして通知 |
| 通知期限 | 確認済みアラームをこの時間内に配信できないとエスカレーション | `notify_deadline_sec` 5.0 |
| 再試行 | `escalated` アラームは再試行を続け、`escalated` のまま | `retry_interval_sec` 30.0 |
| ゾーン：空 | `person_count` がゾーンのタイムアウトを超えて 0 のまま | ゾーンごとの `no_person_timeout` |
| ゾーン：無動作 | 追跡 bbox 中心の変位がゾーンのタイムアウトを超えてしきい値未満 | ゾーンごとの `no_motion_timeout`、正規化 `motion_threshold` 0.02 |

**必要な門はべき等キーであり、どのウィンドウでもありません。** キーは `zone:kind:event_timestamp:global_event_id` で、アラームテーブルと通知テーブルの両方に一意インデックスがあります。これを削除すると、再生イベントストリームが重複アラームと重複配信を生成します。上表の他のパラメータはタイミングだけを変えます。

イベント、状態遷移、担当者、配信レシートの保持期間は 90 日です。メディアを有効にした場合、メディアは 7 日保持し、毎日パージします。

#### 音声確認（任意、初期状態はオフ）

有効にすると、転倒アラームの発生時にサービスが部屋へ確認メッセージを音声出力し、数秒間聞き取ります。これは証拠ウィンドウの後ではなく、**証拠ウィンドウと並行して**実行されます。この非対称性は意図的です。助けを求める声、無回答、判読できない回答は直ちにアラームを確認し、残りの担当者ウィンドウを省略します。一方、「大丈夫」は既定ではアラームを閉じず、レビュー対象にして通常のタイミングを継続します。「大丈夫」を聞き間違えると実際の転倒を抑制するためで、不要だった確認済みアラームなら担当者の数秒を使うだけです。

音声ハードウェアは LAN 上の計算ボックスに接続した USB マイクとスピーカー、および TTS とストリーミング ASR 用の OpenVoiceStream インスタンスです。カメラは音声経路ではありません。reCamera はどちらのモデルも利用可能なマイクを確認できておらず、SG2002 はローカル ASR をまったくホストできません。

**プライバシー。** 音声はディスクに書き込みません。生 PCM は 1 回の聴取ウィンドウの間だけメモリに保持し、判定を生成した時点で解放します。判定、信頼度、レイテンシ、文字起こしテキストを保存し、`store_transcript: false` にするとテキストも破棄します。

### 付録：実測データ {#appendix-measured-data}

この節は数値を確認する読者向けです。読み飛ばしてもデプロイには影響しません。**ここに記載する内容は医療または安全認証を構成しません。**

#### ローカル再生で測定したアラーム経路 {#alarm-path-measured}

この表のすべては、カメラの代わりにリプレイヤーを使ったノートパソコン上で測定しました。**デバイスではなくローカル再生です。**

| 指標 | 値 | 条件 | ソース記録 |
|---|---:|---|---|
| 通知レイテンシ（イベント時刻から通知送信まで） | P50 2061 ms / P95 2093 ms | 転倒再生 5 回、各 15 FPS × 12 秒、証拠 1 秒 + 自動確認 1 秒、単一ゾーン、単一ストリーム、ループバック webhook | `boundary.alert_latency.yaml` |
| 設定タイムアウトに対する no-person 検知の遅れ | P50 65 ms / P95 77 ms 遅れ | 3 再生、10 FPS × 11 秒、タイムアウト 5 秒、0.1 秒 tick、プロセス内、broker なし | `boundary.inactivity.yaml` |
| 障害復旧（キュー投入分に対する一意な成功配信） | 3 件中 3 件、重複 0、復旧後最初の配信 96 ms | webhook エンドポイントが 4 秒間 503、アラーム 3 件をキュー投入、再試行間隔 2 秒 | `boundary.offline_recovery.yaml` |
| 誤アラーム | 0 / 0.02 カメラ時間 | 静穏再生 72 秒 | 率ではない。想定実行は 24 時間 |

**測定方法**

- 日付は 2026-09-05。eldercare-alarm プロジェクトの実行ディレクトリは `evaluation/runs/2026-09-05-smoke/`。生出力は `raw/`、条件は `conditions.yaml`、各行に 1 つの `boundary.<metric>.yaml`。
- ホストは MacBook、macOS 15（Darwin 25.5.0）、arm64。ループバックネットワーク。コンテナは使わず、サービスを直接実行。
- スクリプトは実際の `AlarmService`（実際のステートマシン、SQLite、HTTP webhook）を動かし、カメラだけをリプレイヤーに置換します。したがって数値はアラーム経路を示し、**推論時間とマシン間ネットワークを除外**します。
- 実行時はステートマシンのウィンドウを短縮し、出荷設定の 5 秒 + 60 秒ではなく証拠 1 秒 + 自動確認 1 秒としました。したがって通知レイテンシは現場固有の値ではなくこの設定の特性です。既定値では同じ経路に設計上 1 分強かかります。
- すべての `boundary.*.yaml` は `stable` 層の値だけを持ちます。`degrading` と `failure` は `null` です。劣化点まで負荷をかけていないため、境界は見つかっていません。
- `reproduced_by: null` — 1 人、1 回の実行で、独立再現なし。

通知レイテンシは基本的に 2 つの設定ウィンドウの合計に配信約 60 ms を加えたものです。誤アラーム行は 72 秒間の静穏を示すだけであり、率として引用できないように記載しています。

#### 1台のデバイスセッションであり、現場ではない

2026-09-06、標準（非 PoE）の reCamera One を USB-RNDIS 経由で 1 回だけ閉ループ接続しました。実際の `fall-detection` MQTT フレーム、注入した転倒アラーム、実際の 60 秒無活動アラームが、デバイス自身の mosquitto broker を通って webhook に到達しました。注入試行 10 回のうち最初の 5 回の通知レイテンシは **P50 2487 ms / P95 2751 ms**でした。6 回目以降は通知器自身のレート制限（10 分あたり 5 件）により、それ以上の送信が静かに停止しました。これは設計上の動作であり障害ではありません。直接ネットワーク経路はローカルネットワークツールに傍受されたため通信は SSH トンネルを通りました。これはホスト環境の事情であり、デバイスの問題ではありません。USB 切断からの復旧は試していません。記録：`eldercare-alarm/evaluation/runs/2026-09-06-recamera-one/results.md`。

これは 1 台のデバイスでの 1 回のラボセッションです。経路がエンドツーエンドで動作する証拠ですが、性能特性の評価ではなく、Orin と Hailo パッケージについては何も示しません。

#### Hailo-8 の実推理を含む 1 回の閉ループ

2026-09-08、Raspberry Pi 5 + Hailo-8 M.2 の検証機で Hailo パッケージをエンドツーエンドで 1 回実行しました（このページでの表記は reComputer R2000 シリーズ、R2035-12、Hailo-8）。`fall-detection` コンテナは公式 YOLOv8s-Pose HEF と HailoRT 4.21.0 で実推理を行い、入力は GMDCSA-24 `subject-4/Fall/01.mp4` の RTSP 再生（640×640、15 FPS、4.68 秒、ループ再生）です。アラームサービスは同じデバイス上の最小構成の HTTP 受信端に配信しました。

| 指標 | 値 | 条件 | ソース記録 |
|---|---:|---|---|
| 転倒から webhook 受信まで（Hailo-8 の実推理を含む） | P50 2830 ms / P95 3061 ms（最小 2102 ms） | 1 本のループ再生から発生した独立した `kind=fall` アラーム 10 件、証拠 1 秒 + 自動確認 1 秒 + 再アーム 2 秒、単一ゾーン、単一ストリーム、受信端は同じデバイス上のためマシン間の時刻差なし | `eldercare-alarm/evaluation/runs/2026-09-08-harvest-pi-acceptance/results.md`、`boundary.hailo_alarm.yaml` |

- レイテンシは webhook 到達時の壁時計時刻から `payload.event_timestamp_ms` を引いた値で、`evaluation/measure_alert_latency.py` と同じ定義です。10 件すべてが `notify_deadline_sec`（5 秒）以内に完了し、再試行キューに入ったものはありません。
- ウィンドウは出荷設定の 5 秒 / 60 秒 / 120 秒から短縮しています。既定値では同じ経路の下限は約 65 秒で、これは測定していません。
- インストーラではなく SSH で手動デプロイし、同梱の broker ではなくデバイス上の既存 broker（1883）を使いました。
- アラームはまとまって届きました。約 45 秒で 5 件、その後約 9 分間は 0 件、続いて約 40 秒で 5 件です。原因は特定していません。

#### 検出精度は基盤プロジェクトのもの

この設計自体は検知を行わないため、精度は下層の EdgeFallKit 検知器の結果です。GMDCSA-24 v2.1 を被験者単位で分割し、ホールドアウトの Subject 4 を 1 回だけ読み込んだ 27 クリップの数値は、転倒検知すぐに導入できるソリューションに公開されています。プラットフォームごとの凍結済み正解率は **74.1%〜88.9%**、平均通知レイテンシは **1.22 秒〜1.75 秒**です。条件付きのベースデータとして引用してください。ここで再測定した値ではなく、アラーム層はこの検知レイテンシに独自の確認ウィンドウを加えます。

#### まだ示されていないこと

- **自分のデバイスで確認すること**：Jetson の `publish_empty_frames` 上書き、Hailo のフレームごとの発行動作、reCamera の正確なトピックとペイロード形状。
- **「最も多くのストリームを扱う」はパッケージレベルの記述**であり、上流の説明に基づくもので、測定容量ではありません。自分の実行で規模を決めてください。
- **誤アラーム率は自分の現場で測定すること**。想定実行時間は 24 時間の静穏です。
- **境界なし。** 劣化点まで負荷をかけていないため、すべての境界ファイルの `degrading` と `failure` 層は `null` です。

自分の現場で実際のアラームが完了するまで、すべてのデプロイを試運転として扱ってください。

#### 上記数値の範囲

- **アラーム経路** — ステートマシン、SQLite、webhook 配信、障害復旧。カメラの代わりにリプレイヤーを使ったローカル再生で測定し、デバイス上ではありません。
- **単一 reCamera One の閉ループ** — 2026-09-06 の 1 回のラボセッションで、現場ではありません。
- **検出精度** — この設計ではなく、基盤 EdgeFallKit プロジェクトの数値です。
- **誤アラーム** — 静穏再生 72 秒で 0 / 0.02 カメラ時間。想定実行は静穏 24 時間で、率を引用する前に自分の現場で実行してください。
- **暗化と遮蔽への頑健性** — スクリプトは存在しますが、実行には GMDCSA クリップとデバイス上の推論が必要です。
- **単一 Hailo-8 の閉ループ** — 2026-09-08、検証機 1 台、再生クリップ 1 本、確認ウィンドウ短縮。現場ではありません。
- **3 パッケージを実機で測定した結果** — 2026-09-05 の測定日は 3 つの対象デバイスすべてがオフラインでした。自分のユニットで測定してください。

## データと素材の出典

- **GMDCSA-24 v2.1** — このページの精度評価とデモ映像は、[ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos)（MIT License）に基づきます。デモ画像の顔にはピクセル化とガウスぼかしを施しています。ライセンスが対象とするのは作者の著作権であり、被写体の肖像権ではありません。
- **RealBiomFall** — 外部汎化試験に使ったテストサブセットで、34 クリップ、すべて転倒のため、再現率とレイテンシだけを報告します。
- どちらのデータセットも `edgefallkit` リポジトリには配布されていません。評価を再現するには自分で取得してください。
- カメラ設置図はこのソリューションのために社内で作成しました。
</content>
