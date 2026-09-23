---
description: 介護施設・在宅ケアの現場でローカル転倒通知を構築する方法——必要な機器、構築手順、利用できるインターフェース、7台のデバイスでの実測データ
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/ja/solutions/edge-fall-detection/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[利用上の注意]
補助的な通知であり、医療機器・人身安全機器としての認証は受けていません。人による見回りの代わりにはなりません。
:::

## このソリューションでできること

部屋にカメラを 1 台設置します。人が転倒すると、数秒以内に通知先——介護ステーション、家族の Home Assistant、詰所の NVR、あるいは自社システム——にメッセージが届きます。介護施設、リハビリ施設、在宅ケア、個室寮といった固定された部屋での利用を想定しています。公開データセットでの実測は転倒再現率 95.8%、転倒からメッセージ発行まで平均 1.4 秒です（詳細は下の「性能と実測データ」）。

- オープンソース実装：[github.com/suharvest/edgefallkit](https://github.com/suharvest/edgefallkit)
- 構成の選択とデプロイ：[すぐに導入できるソリューションページ](https://www.seeed.co.jp/solutions/reference-designs/fall_detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>ローカルで動作、映像はクラウドに出ません</h3>
                <p>検知・判定・通知はすべて現場のデバイス上で完結し、ネットワークに流れるのは数百バイトのテキストメッセージだけです。オフラインでも通知は動作し、カメラ台数に応じたクラウド課金もありません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>届いたらすぐ使えます</h3>
                <p>デバイスに対応するアプリパッケージを入れれば通知が動きます。モデル・ランタイム・判定しきい値はパッケージに凍結済みで、学習やチューニングは不要です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>既存のカメラとシステムをそのまま接続</h3>
                <p>既存の IP カメラは RTSP で接続でき、カメラ側の変更は不要です。通知は MQTT で出力され、Home Assistant は自動検出、NVR やナースコールシステムはトピックを 1 つ購読するだけです。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>オープンソース</h3>
                <p>各プラットフォームのモデル変換、Docker オーケストレーション、判定重みの学習スクリプトはすべてリポジトリにあり、自社現場の映像で判定重みを再学習できます。</p>
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

### アラームパネル（オプション）

アラームパネルは reComputer J30 / J40、RK、R2000 のプリセットでは compose スタックに含まれます。2 つの reCamera プリセットでは、別ホストに入れるオプションのコンポーネントです。

転倒検知器がイベントを発行した後の処理をアラームパネルが担います。各部屋を固有ルールのゾーンとして扱い、アラームを開き、担当者が 1 ページのコンソールで確認または却下し、確認済みアラームを担当者名付きの webhook または MQTT メッセージとして送信します。介護付き住宅、在宅ケア、アラームごとに対応者を後から追跡する必要がある現場向けです。

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
                <h3>担当者の確認後に通知</h3>
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

担当者が使う画面は確認コンソールだけです。各アラームの現在状態を示す一覧、音声確認を有効にした場合の判定、担当者名を監査証跡に書き込む確認／却下ボタンを備えます。コンソールはアラームサービスが HTTP 8080 で配信します。

下のコンソールのスクリーンショットは**再生データ**を使っています。合成した bbox とトラックデータで、カメラ映像や人物は含みません。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/panel-dashboard-en-97ba47b3.png" alt="確認コンソールのホーム：左に部屋一覧、右にアラームストリーム、各アラームに種類・ゾーン・現在状態"/>
</div>

アラームを 1 件開くと、イベント時刻、状態遷移、確認を押した担当者を含む全履歴が表示されます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/room-detail-en-ba109d0a.png" alt="単一部屋の詳細：ゾーン設定、現在の在室状況、その部屋のアラーム履歴"/>
</div>

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

ストリーム数はアクセラレータの実測スループットから換算した値です（下の「ストリーム数の換算」を参照）。

これ以外に必要なのはネットワークだけです。デバイスと受信側が同一 LAN 上にあれば十分で、外部ネットワークは不要です。

### アラームパネルのホスト

必要なのは 3 つです。検知イベントを生成するもの、何をアラームにするかを決めるホスト、通知を受け取るものです。3 つ目は自社システムなので、実際に選ぶのは最初の 2 つです。

**① イベントソース** — 既存の RTSP カメラなら検知器をアラームホストに配置してストリームを指定します。すでに検知器を実行する reCamera カメラなら、検知側は変更しません。

**② アラームホスト** — ゾーン、タイムアウト、ステートマシン、SQLite 監査ストア、確認ページ、配信キューを実行する筐体です。3 パッケージのうち 2 つでは検知器も実行します。

| | アラームホスト | 検知器の実行場所 | 選ぶべき状況 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 (Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>1 台の Jetson 上に検知器、アラームサービス、broker、コンソール | この筐体で初回デプロイ時に TensorRT エンジンを構築 | カメラはあり、現場にゲートウェイがまだないとき。3 パッケージで最も多くのストリームを扱う |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>同じスタックで、より大きい姿勢モデル | この筐体では YOLO11s ではなく YOLO11m | J3011 1 台では足りない部屋数、またはより大きい姿勢モデルが必要なとき。同じパッケージの別オプションとしてデプロイフォームで選ぶ |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12 (Hailo-8)](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>ファンレス産業用筐体 | この筐体、コンパイル済み HEF | キャビネットまたはライザーに設置。ファンレス、広い温度範囲、DIN レールまたは壁面取り付けが必要なとき |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>カメラと AI を一体化。アラームサービスは既存マシンに配置 | カメラ上 | カメラがまだない、またはカメラがすでに検知しているとき。アラームサービスは手動で起動します。デプロイフォームには自前ゲートウェイ用のデバイス種別がありません |

その他の前提は、1883 で到達できる MQTT broker（Orin と Hailo パッケージは起動し、reCamera パッケージはカメラがすでに発行している broker を利用可能）、Orin と Hailo パッケージの固定された屋内視野、通知を受け取る webhook エンドポイントまたは MQTT サブスクライバーです。

#### 音声確認（任意、初期状態はオフ）

有効にすると、転倒アラームが上がった時点でサービスが部屋に向けて案内を再生し、数秒間応答を聞き取ります。これは証拠収集ウィンドウと並行して行われます。助けを求める声、無応答、聞き取れない応答の場合はただちにアラームを確定します。「大丈夫」は既定ではアラームを閉じず、要確認の印を付けるだけです。

必要なハードウェアは、LAN 上の計算ボックスに接続した USB マイクとスピーカー、および TTS とストリーミング ASR 用の OpenVoiceStream インスタンスです。音声はカメラを経由しません。reCamera はどちらのモデルも利用可能なマイクが確認できておらず、SG2002 ではローカル ASR を実行できません。音声はディスクに書き込まれず、保存されるのは判定結果、信頼度、レイテンシ、文字起こしテキストだけです。`store_transcript: false` にするとテキストも保存しません。

## 現場での構築手順

手順は 2 つです。まずカメラの設置位置を決め、次にソフトウェアを導入します。

### ステップ 1：カメラを設置する {#step-1-mount-the-camera}

:::tip[設置条件]
人から 2–3 m、側方または斜めに固定設置し、肩と腰が見える構図にしてください。転倒の瞬間そのものが画面内で起きる必要があります。起動時にすでに人が横たわっている場合、姿勢は報告されますが通知は出ません。真上からの俯瞰、長い廊下の遠景、家具で大きく遮蔽された構図では、精度が明らかに落ちます。
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

4. **プレビューで設置位置を確認する** — 導入が終わるとアプリ内でライブ映像が見られ、人物に骨格と状態が重ねて表示されます。通知の設定に進む前に、カメラが見るべき範囲を実際に捉えているかここで確認します。下図は reCamera Pro のプレビュー画面です。**状態ラベルは再生データによるもので、実測記録ではありません**。実測数値は「性能と実測データ」にあります。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/fall_detection/live-fall-demo-f4ef5180.gif" alt="通常から転倒への状態遷移。画面は reCamera Pro App Center のプレビュー"/>
</div>

導入から稼働までは、reCamera で約 30 分。Jetson は初回にデバイス上で推論エンジンをビルドする必要があるため、より時間がかかります（実測 461 秒〜）。

### アラームパネル：ゾーンと導入

2 つに分かれます。ゾーンが機能する位置にカメラを置き、その後に導入と設定を行います。

#### 1. カメラとゾーン

:::tip[ゾーンはカメラフレーム上の正規化矩形です]
カメラを移動または再調整すると、**エラーが出ないまま**ゾーン配置が無効になります。矩形は残りますが、部屋の別の場所を覆います。カメラに物理的な変更を加えた後は、すべてのゾーンを再確認してください。
:::

Orin と Hailo パッケージでは、想定する転倒経路で人物が見え続ける固定された屋内視野も必要です。検知器は同じ EdgeFallKit で、設置条件も上記と同じです（2〜3 m の側方または隅からの視野、肩と腰が見えること）。

ゾーンを描くときは次の 2 点に注意します。守らないと不要なアラームが増えます。

- **ゾーンがベッドを含むか、通常の昼寝より長いタイムアウトにしない限り、睡眠中に `no_motion` が発火します。** 動きは追跡人物の bbox 中心の変位が `motion_threshold` を超えたものです。オプティカルフローやキーポイント速度ではないため、毛布の下の小さな動きは数えません。
- **遮蔽は誤った `no_person` を発生させます。** ゾーンは人物が再び見えるまで再アームされないため、1 回の遮蔽で発生するアラームは 1 件だけです。

#### 2. ソフトウェア：4ステップ

デバイスごとの手順は上と同じすぐに導入できるソリューションページにあり、構成を選ぶと対応するアプリケーションパッケージをダウンロードできます。

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

## 利用できるインターフェース

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

ストリーム ID はペイロードにも書き込まれるため、下流でトピックを解析して送信元を判断する必要はありません。

broker も検知ホスト上にあります。reCamera は内蔵の broker を使い、reComputer の各構成は検知器と一緒に `eclipse-mosquitto:2` を立ち上げ、1883 ポートをホスト自身が提供します。外部 broker は不要で、経路全体で外部ネットワークを必要としません。

### アラームパネルのインターフェース

統合対象はアラームホスト上で動くアラームサービスだけです。既存のシステムに応じて、入口は 3 通りあります。

- **ナースコールシステムまたはページングサービス** — webhook を利用します。確認済みアラームごとに、アラーム ID、種類、ゾーン、ストリーム ID、タイムスタンプ、担当者を含む POST を 1 件送ります。重複排除はタイムスタンプではなく、べき等キーで行います。
- **MQTT ベースの現場** — アラームバスを有効にし、`eldercare/alarm/<zone-id>` を購読します。ペイロードは webhook と同じで、既定ではオフです。
- **自社ダッシュボードまたは記録システム** — HTTP 8080 の `GET /api/alarms` をポーリングまたは読み取り、状態履歴と各アラームの担当者を含む完全な記録を取得します。

べき等キーは `zone:kind:event_timestamp:global_event_id` で構成されます。`stream_id` はトピックから解析せずメッセージのペイロードから読むため、broker の書き換えやブリッジのプレフィックスでゾーンが誤って接続されることはありません。アラーム記録（イベント、状態遷移、担当者、配信受領）は 90 日間保持します。

#### トピックとペイロードの全体像

| トピック / ポート | ペイロード | 既定値 |
|---|---|---|
| HTTP 8080 `GET /api/alarms`、`/` のページ | アラーム記録：`id`、`kind`、`zone_id`、`stream_id`、`state`、`event_timestamp`、`operator`。同じページで確認と却下を操作 | オン |
| 自分の webhook URL への HTTP POST | `{"id":"a-17","kind":"fall","zone_id":"bedroom","stream_id":"cam-01","state":"notified","event_timestamp":1788581337237,"operator":"nurse-a"}` とべき等ヘッダー。スナップショットと映像はなし | URL 設定後にオン |
| MQTT 1883 `eldercare/alarm/<zone-id>` | webhook と同じペイロード | オフ |
| MQTT 1883 `<device-name>/fall-detection/results/<stream-id>` | サービスが消費する `fall_result_v1` ストリーム：`stream_id`、`person_count`、`fall_event`、人物ごとの bbox | 入力、検知器が発行 |

**`state` フィールド**：`escalated` は通知期限を過ぎたことを示し、後の再試行が成功しても `notified` には戻りません。ダッシュボードで `escalated` を配信失敗として表示しないでください。期限を過ぎたことだけを示す値です。

broker は Orin と Hailo パッケージではアラームホスト上、reCamera パッケージではカメラまたはゲートウェイ上で動き、経路上でインターネットは不要です。同梱の broker は匿名接続を許可しており、信頼できる LAN 向けです。LAN の外からデバイスに到達できるようにする前に、認証情報と TLS を設定してください。

## 性能と実測データ {#appendix-measured-data}

以下は公開データセットに対するデバイス実測データです。クリップごとの生レポートとチェックサムはリポジトリの [`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation) にあります。ソースコードには各プラットフォームのモデル変換、Docker オーケストレーション、判定重みの学習スクリプトが含まれます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edgefallkit" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>edgefallkit</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 精度結果

凍結済み 6 構成の平均は、**正解率 85.8%、転倒再現率 95.8%、特異度 77.8%、F1 85.7%、平均通知レイテンシ 1.4 秒**です。個別構成は 81.5%〜88.9% の範囲に入ります。

この 6 構成は Jetson YOLO11s、Jetson YOLO11m、reCamera Pro、RK3576、RK3588、Hailo-8 で、それぞれ固有の凍結済み構成を使っています。reCamera 2002 の v0.2 ベースライン（正解率 74.1%）は、旧世代の時系列重みを使うため平均から除外しています。構成ごとの詳細は、リポジトリの[統合精度表](https://github.com/suharvest/edgefallkit/blob/main/evaluation/RESULTS.md#统一准确性表)にあります。

条件：データセット [GMDCSA-24 v2.1](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos)（MIT）を被験者単位で分割し、ホールドアウトした Subject 4 の 27 クリップ（転倒 12 / 日常動作 15）を 1 回だけ評価しました。映像はすべて 15 FPS です。注釈上の転倒開始より 0.5 秒以上早い通知は誤検知として数えます。各プラットフォームは自身の姿勢出力から判定重みを再学習・凍結し、プラットフォーム間で共有しません。

再現：`platforms/jetson/tools/evaluate_videos.py`（データセットはリポジトリに含まれないため、各自で入手してください）。

**デバイス間で精度の差は出ていません**：27 クリップの試験セットでは 1 クリップが 3.7 パーセントポイントに相当し、RK3576、RK3588、Hailo は同じ 88.9% でした。モデルサイズもスコアと相関しません。デバイスはストリーム数、既存ハードウェア、映像ソースで選びます。

### 測定したデバイス

7 台のデバイスと 4 種類のアクセラレータを測定しました。「エンドツーエンド」はストリーム取り込みから通知までの全経路を試験セットで実行・採点したもの、「推論速度」は検知速度だけを測定したものです。

| デバイス | アクセラレータ | 出荷モデル | エンドツーエンド | 推論速度 |
|---|---|---|:-:|:-:|
| reCamera 2002 | 内蔵 NPU | YOLO11n-Pose INT8 | ✅ | ✅ |
| reCamera Pro | 内蔵 NPU（RK） | YOLO11n-Pose INT8 | ✅ | ✅ |
| reComputer RK3576 | RK3576 NPU | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer RK3588 | RK3588 NPU | YOLO11n-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer R2000 系列 | Hailo-8 | YOLOv8s-Pose INT8 | ✅ | ✅ |
| reComputer J30 | Orin Nano GPU | YOLO11s-Pose FP16 | ✅ | ✅ FP16 / INT8 |
| reComputer J40 | Orin NX GPU | YOLO11m-Pose FP16 | ✅ | ✅ FP16 / INT8 |

デバイスごとのフレームレイテンシ、マルチストリームスループット、測定条件は、以下の[性能実測詳表](#性能実測詳表)にあります。

### 性能実測詳表 {#性能実測詳表}

#### フレームレイテンシとスループット

異なるデバイスで同じモデル、**YOLO11n-Pose、入力 640²**を測定しました。フレーム単位の値はアクセラレータ推論のみ（RTSP デコードと後処理を含まない）で、集約スループットは 1〜6 個の同時コンテキストで測定した最高総フレームレートです。FP16 と INT8 は表を分けています。Hailo-8 の行は reComputer R2000 シリーズ + Hailo-8 M.2 アクセラレータカード（26 TOPS）で測定しました。

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

**▲ Hailo 行は s サイズを使っています。このアクセラレータでは n サイズの方が遅いためです。** 公式 Model Zoo v2.15 の hailo8 ディレクトリには `yolov8s_pose` と `yolov8m_pose` だけがあり、n サイズの姿勢モデルはありません。Hailo Dataflow Compiler 3.31.0 で YOLO11n-Pose を自前コンパイルし（640²、INT8、GMDCSA 64 フレーム較正）、同じボードで **9.01 ms / 92.2 FPS**を測定しました。s サイズは 6.87 ms / 393.9 FPS でした。フレームレイテンシは同程度（+31%）ですが、スループットは 4.3 倍異なります。コンパイラは 11n を **3 コンテキスト**に分割し、フレームごとに重みを入れ替えます。一方、Model Zoo の s モデルは単一コンテキストで重みを常駐させます。ストリームあたり 15 FPS に対して、92.2 FPS でも約 6 倍の余裕があり、差が影響するのはマルチストリーム密度だけです。この結果はこの HEF 1 つのコンパイル結果に対するものです。

**Jetson の INT8 は較正済みエンジンを使い、別枠で示します。** 上表の INT8 行はすべて YOLO11n です。Jetson の較正済み INT8 エンジンは現時点で YOLOv8s / YOLOv8m-Pose のみ（GMDCSA フレームによるエントロピー較正——s は 64 枚、m は 494 枚、INT8 実装のない層は FP16 にフォールバック）で、他プラットフォームと同じモデルではありません。

| プラットフォーム | 姿勢モデル | 精度 | フレーム | 集約 |
|---|---|---|---:|---:|
| reComputer J30（Orin Nano Super） | YOLOv8s-Pose | INT8 | 3.75 ms | 266 FPS |
| reComputer J40（Orin NX Super） | YOLOv8s-Pose | INT8 | 3.34 ms | 300 FPS |
| reComputer J30（Orin Nano Super） | YOLOv8m-Pose | 混合精度（neck + head FP16） | 8.11 ms | 123 FPS |
| reComputer J40（Orin NX Super） | YOLOv8m-Pose | 混合精度（neck + head FP16） | 7.18 ms | 139 FPS |

条件：640²、batch 1、120 秒 × 3 回の中央値、GPU 計算時間のみ。YOLOv8s INT8 は同一機の FP16 より 1.57 倍高速です。YOLOv8m は全層 INT8 だと転倒出力が失われるため、m は混合精度です。デプロイ評価（GMDCSA-24 Subject 4、27 クリップ）：YOLOv8s INT8 の F1 は 66.7%、YOLOv8m 混合精度は 87.0%。プリセットの既定は引き続き YOLO11s / YOLO11m FP16 です。

再現：`tools/build_calibrated_int8.py`。

RK の INT8 は 240 枚の GMDCSA フレームで較正済みで、較正セット外のフレームでもフレーム単位の検知数が FP16 と完全一致するため、デプロイできます。

#### 実映像パイプラインのレイテンシ

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
- **◆ Jetson 列は `trtexec` の純粋な GPU 計算**（ホストコピーなし）、RK 列は `rknnlite.inference()` で、計測範囲が異なるため、プラットフォーム間の比較にはパイプライン列を使います。パイプライン列で比べると、Jetson は RK3588 より約 11 倍、RK3576 より約 14 倍高速です。

再現：[`evaluation/`](https://github.com/suharvest/edgefallkit/tree/main/evaluation)。

#### ストリーム数の換算

「推論律速ストリーム」= 集約スループット ÷ 15 FPS です。アクセラレータだけを数えた理論上の上限です。「推奨ストリーム」はそこから割り引いた値で、RK のエンドツーエンドスループットは、RTSP デコード、トラッキング、ステートマシン、MQTT も CPU とメモリ帯域を使うため、推論上限の 28%〜44% にとどまりました。他のワークロードがボード上で動く状態では、エンドツーエンド実測は RK3588 で約 8.6 FPS、RK3576 で約 4.9 FPS でした。

### ランタイムと主要パラメータ

すべてのプラットフォームが同じ 640² 姿勢モデルファミリーを使います。異なるのはランタイムと、モデルをデバイスに届ける方法です。

| 検知ホスト | 姿勢モデル | 精度 | ランタイム | モデルの配布方法 |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n-Pose | INT8 | カメラ NPU | コンソールからカメラアプリとしてインストール |
| reComputer J30 / J40 | YOLO11s（Orin Nano）/ YOLO11m（Orin NX） | FP16 | TensorRT | エンジンは**デバイス上でビルド**——GPU アーキテクチャと TensorRT バージョンに紐づくため事前ビルドを配布できません。Orin Nano 実測：YOLO11s で 461 秒 |
| reComputer RK3576 / RK3588 | YOLO11n-Pose | FP16 | RKNN Lite | `.rknn` はボード単位で配布。RK3588 向けにコンパイルしたモデルは RK3576 では読み込めません |
| reComputer R2000 系列（R2035-12，Hailo-8） | YOLOv8s-Pose | INT8 | GStreamer + `hailonet` | 公式のビルド済み HEF、固定ダイジェストで検証 |

Hailo のデプロイは **HailoRT 4.21** に固定されています。GStreamer プラグイン、ユーザーライブラリ、カーネルドライバは同じバージョンでなければならず、アクセラレータを他のプロセスが占有してはいけません。

デプロイ結果に影響するパラメータ（括弧内は出荷時の既定値）：

- `max_fps`（15）— ストリームごとの処理フレームレートです。上のストリーム数はこの値から換算しています。
- `fall.temporal_confirmation_required`（true）— 「転倒」状態に入るには時系列モデルの確認が必要です。誤検知を抑える主要な仕組みで、false にすると幾何特徴だけで転倒を確定できます。
- `cooldown_sec`（3.00）— 1 回の転倒は 1 回として数え、`fall_event` は転倒状態に入った瞬間にだけ立ちます。

アラームパネル：

- `statemachine.evidence_sec`（5.0）/ `statemachine.confirm_window_sec`（60.0）— 証拠収集ウィンドウと担当者ウィンドウです。アラームから通知までの時間は主にこの 2 つで決まります。
- `statemachine.confirm_timeout_action`（成立として扱い通知）— 担当者ウィンドウ内に応答がない場合の処理です。
- `publish_empty_frames`（Orin パッケージでは true）— Jetson の検知器が無人時にも空フレームを発行します。発行しないと `no_person` タイムアウトに入力が届きません。同梱の検知器設定をデバイス独自の設定に置き換える場合は再設定してください。Hailo ランタイムにはこのスイッチがなく、不要です。

### アラームパネルの実測データ {#alarm-path-measured}

アラームサービス自体は検知を行いません。検知精度は上の「精度結果」を参照してください。アラームのレイテンシは検知レイテンシ（プラットフォームごとの平均 1.22〜1.75 秒）に上乗せされます。

| 指標 | 値 | 条件 |
|---|---:|---|
| 通知レイテンシ（イベントタイムスタンプから通知送信まで） | P50 2061 ms / P95 2093 ms | ローカル再生、カメラの代わりにリプレイヤーを使用、推論とマシン間ネットワークを含まない。転倒再生 5 回、各 15 FPS × 12 秒。証拠 1 秒 + 自動確認 1 秒。単一ゾーン・単一ストリーム、ループバック webhook |
| 設定タイムアウトに対する無人判定の遅れ | P50 65 ms / P95 77 ms | ローカル再生、3 回、10 FPS × 11 秒、タイムアウト 5 秒、tick 0.1 秒、broker なし |
| ネットワーク断からの復旧（一意の配信成功数 / キュー数） | 3/3、重複配信 0、復旧後の初回配信 96 ms | ローカル再生、webhook 側が 4 秒間 503 を返す、アラーム 3 件をキュー、再試行間隔 2 秒 |
| 誤報 | 0 / 0.02 カメラ時間 | 72 秒の静止再生、比率の算出には短すぎる |
| 転倒から webhook 受信まで | P50 2487 ms / P95 2751 ms | reCamera One（USB-RNDIS）、実際の `fall-detection` フレーム + 注入した転倒アラーム、デバイス内蔵 broker 経由。注入 10 回のうち最初の 5 回（残りは通知レート制限で停止、既知の劣化を参照）。実際に発生した 60 秒の無活動アラーム 1 件も配信 |
| 転倒から webhook 受信まで（Hailo-8 推論を含む） | P50 2830 ms / P95 3061 ms（最小 2102 ms） | reComputer R2000 シリーズ + Hailo-8 M.2 アクセラレータカード、公式 YOLOv8s-Pose HEF、HailoRT 4.21.0。GMDCSA-24 の転倒クリップを RTSP 再生（640×640、15 FPS）。アラーム 10 件、証拠 1 秒 + 自動確認 1 秒 + 再アーム 2 秒。単一ゾーン・単一ストリーム。10 件すべて 5 秒の通知期限内 |

通知レイテンシはおおよそ 2 つのウィンドウの合計に約 60 ms の送出時間を加えた値です。この表ではウィンドウを短縮しています。出荷時の既定値（証拠 5 秒、担当者 60 秒）では同じ経路が約 65 秒からになります（換算）。

再現：`eldercare-alarm/evaluation/runs/` 以下の 2026-09-05、2026-09-06、2026-09-08 の 3 つの実行ディレクトリ。レイテンシの定義は `evaluation/measure_alert_latency.py` にあります。

### 既知の劣化

- **設置位置。** 上の数値は固定カメラ、中距離の構図、屋内、肩と腰が見える条件のものです。2〜3 m の側方または斜め設置は使えます。真上からの俯瞰、長い廊下の広角映像、家具による大きな遮蔽では精度が下がります。
- **異なるデータセットでは再現率が下がります。** 外部データセット RealBiomFall（34 クリップ、すべて転倒）では、実測再現率が reCamera で 58.8%、reComputer J30 / J40 にデプロイした YOLO11m で 52.9% でした。見逃しの多くは姿勢モデルが人物を検出できなかったことによります。新しい現場では、現場映像からトラックを再抽出し、判定重みを再学習・再凍結します。
- **他のワークロードが GPU を使うとスループットが下がります。** 上の Jetson の数値は同居ワークロードを停止して測定しました。Orin NX で自身の推論ワークロードを動かしたままだと集約スループットは 264.9 FPS（停止時 306.2 FPS）で、Orin Nano を下回りました。Orin Nano は停止の有無で差がありません（270.5 / 270.7 FPS）。そのワークロードは GPU を使わないためです。
- **通知にはレート制限があります。** 600 秒あたり最大 5 件で、それを超えたアラームは通知されず、エラーも出ません（reCamera One で 6 回目の注入以降）。

### 次のステップ

- RK と Hailo のルートで外部データセット RealBiomFall の評価を行います。
- reCamera で現場の映像と姿勢トレースを保存し、アノテーション付きの再生で判定しきい値を評価して時系列判定を再学習します。

## データと素材の出典

- **GMDCSA-24 v2.1** — 精度評価とデモ映像は、[ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos](https://github.com/ekramalam/GMDCSA24-A-Dataset-for-Human-Fall-Detection-in-Videos)（MIT License）に基づきます。デモ画像の顔にはピクセル化とガウスぼかしを施しています。ライセンスが対象とするのは作者の著作権であり、被写体の肖像権ではありません。
- **RealBiomFall** — 外部汎化試験に使ったテストサブセットで、34 クリップ、すべて転倒のため、再現率とレイテンシだけを報告します。
- どちらのデータセットも `edgefallkit` リポジトリには配布されていません。評価を再現するには自分で取得してください。
- カメラ設置図は社内で作成しました。
