---
description: Home Assistant の照明や家電を音声で操作し、音声をローカルで認識する方法：必要な機器、導入、インターフェース、reComputer J40 での実測データ
title: Home Assistant ローカル音声操作：選定・導入・実測データ
keywords:
  - Home Assistant ローカル音声
  - Home Assistant 音声アシスタント
  - スマートホーム 音声操作
  - ローカル 音声認識
  - Wyoming
  - Home Assistant Voice
  - Zigbee
  - Jetson Orin NX
  - Qwen3-ASR
  - Matcha-TTS
image: https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg
slug: /solutions/home-assistant-local-voice
sidebar_position: 24
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/solutions/home-assistant-local-voice/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[ご利用にあたって]
音声コマンドは中国語と英語に対応します。Home Assistant 公式の Xiaomi Home 連携は非商用利用に限られるため、プリインストールしていません。商用案件では使用しないでください。
:::

## このソリューションでできること

家の照明、カーテン、エアコン、Zigbee センサーを Home Assistant に接続し、ひと言で操作します。「リビングの照明をつけて」と話すと、Home Assistant がローカルで実行し、点灯したことを音声で返します。音声認識と音声合成はローカルの reComputer J40 で行うため、話した音声はクラウドの音声サービスにアップロードされません。リビングや寝室での利用のほか、スマートホーム SIer が顧客宅に納品する用途にも向いています。

- デプロイパッケージ（Docker Compose と Home Assistant 設定テンプレート）：[github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/home_assistant_whole_home)
- 音声エンジンのソース：[github.com/Seeed-Solution/openvoicestream](https://github.com/Seeed-Solution/openvoicestream)
- 選定と導入：[リファレンス設計ページ](https://www.seeed.co.jp/solutions/reference-designs/home-assistant-local-voice-hub)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>音声はクラウドに出ない</h3>
                <p>コマンドの認識と応答音声の生成は reComputer J40 で行い、実行は Home Assistant がローカルで行います。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>発話後 0.12 秒で文字に</h3>
                <p>中国語・英語 5 件のコマンドの中央値（「性能と実測データ」参照）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Home Assistant に標準接続</h3>
                <p>音声サービスは Wyoming Protocol 連携で Home Assistant の音声アシスタントに接続し、Home Assistant 自体は変更しません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Zigbee 機器をそのまま接続</h3>
                <p>Connect ZBT-2 を挿せば、各ブランドのゲートウェイなしで Zigbee センサーやスイッチを接続できます。</p>
            </div>
        </li>
    </ul>
</div>

### 実機の画面

Home Assistant 音声アシスタントでのやり取りです。中国語で「リビングの照明をつけて」と話すと、ローカルの音声サービスが認識し、Home Assistant が実行して点灯を返答し、右側のリビング照明カードがオンになります。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/voice-light-on-zh-20261008-a03bf773.jpg" alt="Home Assistant 音声アシスタント：リビングの照明をつけて、点灯しました"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/home_assistant_whole_home/dashboard-zh-20261008-53455231.jpg" alt="Home Assistant ダッシュボード：リビングの照明・カーテン・温湿度・エアコン、寝室の照明と加湿器"/>
</div>

スクリーンショットの照明、カーテン、エアコン、センサーはデモ用の模擬機器です。音声入力は同じ reComputer J40 で合成した音声で、人の録音ではありません。

## 必要なハードウェア

現場に必要なのは、Home Assistant ホスト、音声ホスト、Zigbee コーディネーター、音声端末の 4 点です。

| 機器 | 役割 | 備考 |
|---|---|---|
| ARM64 Linux ホスト（64 ビット OS、8 GB メモリ） | Home Assistant を実行 | 1 世帯に 1 台 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> [reComputer J40 シリーズ（J4012、Orin NX 16GB）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) | ローカルの音声認識と音声合成 | 初回起動時に音声モデルをダウンロード。30 GB 以上の空きディスクを確保 |
| Home Assistant Connect ZBT-2 | Zigbee 機器の接続 | Home Assistant ホストの USB ポートに挿す |
| Home Assistant Voice Preview Edition | 部屋に置く音声端末：コマンドを聞き、応答を再生 | 部屋ごとに 1 台 |
| SONOFF SNZB Zigbee センサー（オプション） | 温湿度などの状態を取得 | ZBT-2 経由で接続 |

Home Assistant ホスト、reComputer J40、音声端末は同じ LAN に接続します。Apple の「ホーム」アプリを使う場合、iPhone は Home Assistant ホストと同じ LAN に置きます。

## 現場への導入

### 1. 機器の配置

:::tip[音声ホストは Home Assistant と分けて置ける]
reComputer J40 は音声サービスだけを実行するため、ラックや情報分電盤に置き、LAN 経由で Home Assistant と通信できます。音声端末は話しかける部屋に置きます。
:::

### 2. ソフトウェアの導入：3 ステップ

機器ごとの手順はリファレンス設計ページにあります。ここでは流れだけを示します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/home-assistant-local-voice-hub" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んで導入 🖱️</font></span></strong>
    </a>
</div><br />

1. **Home Assistant ホスト**：中国語・英語・日本語のコマンド文例と部屋・機器のテンプレートを含めて Home Assistant をデプロイします。
2. **音声ホスト**：reComputer J40 に音声サービスをデプロイします。初回起動でモデルをダウンロードし、以降は認識と合成を本機で実行します。
3. **接続と確認**：Home Assistant で Wyoming Protocol 連携を追加して reComputer J40 の 2 つのポートを指定し、音声アシスタントの音声認識と音声合成に設定します。音声端末に「リビングの照明をつけて」と話し、点灯することを確認します。

## インターフェース

音声サービスは Wyoming Protocol で Home Assistant に提供され、その他の自動化はすべて Home Assistant 内で行います。

- **Home Assistant**：Wyoming Protocol 連携を追加すると、音声アシスタントに `seeed-local-voice` の音声認識と音声合成が表示されます。
- **Apple「ホーム」/ Siri**：Home Assistant の HomeKit ブリッジで機器を iPhone に同期します。
- **自社システム**：Home Assistant 標準の API で機器の状態を読み書きします。

| ポート | 機器 | 内容 |
|---|---|---|
| HTTP 8123 | Home Assistant ホスト | Home Assistant の Web 画面と API |
| TCP 10300 | reComputer J40 | 音声認識サービス（Wyoming） |
| TCP 10200 | reComputer J40 | 音声合成サービス（Wyoming） |

## 性能と実測データ

### 全体：発話から実行まで

Home Assistant は 8 GB メモリの ARM64 Linux ホスト、音声サービスは reComputer J40 シリーズ（Orin NX 16GB）で動作。入力は合成音声で、Home Assistant の音声アシスタントに送りました。

| 指標 | 結果 |
|---|---|
| 中国語・英語の照明コマンド | 5/5 件実行成功、すべて Home Assistant がローカルで処理（実測） |
| 発話終了から文字認識まで | 中央値 0.12 秒、範囲 0.11–0.95 秒（実測） |

再現：`sensecraft-solutions/solutions/home_assistant_whole_home`（デプロイパッケージ）

### 音声サービス単体

同じ reComputer J40 シリーズで音声サービスを直接呼び出し、16 kHz モノラルの合成音声を入力しました。

| テキスト | 応答音声の最初のパケット | 認識結果 | 発話終了後の文字起こし時間 |
|---|---:|---|---:|
| 打开客厅灯（リビングの照明をつけて） | 0.122 秒（実測） | 打开客厅灯。 | 0.383 秒（実測） |
| 关闭卧室的灯（寝室の照明を消して） | 0.049 秒（実測） | 关闭卧室的灯。 | 0.421 秒（実測） |
| Turn on the living room light | 0.115 秒（実測） | Turn on the living room light. | 0.579 秒（実測） |

Wyoming 経由では 2 件のサンプルが 0.13 秒で文字起こしされました（実測）。

再現：`sensecraft-solutions/solutions/home_assistant_whole_home/assets/docker/docker-compose.jetson-voice.yml`

### モデルとランタイム

| 機器 | 音声認識 | 音声合成 | ランタイム |
|---|---|---|---|
| reComputer J40 シリーズ | Qwen3-ASR | Matcha-TTS | TensorRT-Edge-LLM / TensorRT |

結果に影響する設定：

- アシスタントの言語：中国語または英語。それぞれ同梱のコマンド文例を使います。
- 機器と部屋の名前：コマンドは Home Assistant 内の名前と照合するため、「リビングの照明」はエンティティ名と一致させます。

### 既知の制限

- **エンティティの別名と命名の不一致**：意図判定は正確な命名に依存します。発話された表現と Home Assistant 上のエンティティ別名に乖離がある場合、文字起こしが正しくても操作が実行されないことがあります。
- **複合・連続コマンド**：本モデルは単一意図の家電操作に最適化されています。「エアコンをつけてカーテンを半分閉めて」のような複合指示は、1 つずつの文に分けて発話する必要があります。
- **複数端末の同時発話**：J4012 ホスト 1 台あたり 1〜3 台の音声端末の同時利用を推奨します。複数部屋から同時に長尺音声が入力された場合、応答開始までの時間がわずかに延びることがあります。

## データと素材の出典

- スクリーンショットは Home Assistant 2026.9.3（Apache License 2.0、[home-assistant.io](https://www.home-assistant.io)）のもので、機器は模擬機器です。
- 音声入力は同じ reComputer J40 の音声合成で生成し、人の録音や第三者の音声は使っていません。
