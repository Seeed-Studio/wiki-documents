---
title: reCamera Pro でビジュアルウェイク & オフライン音声認識システムを構築する
description: reCamera Pro 上で、視線トリガー式のオンデバイス二言語ストリーミング音声認識システムを、ターミナル・Web・RTSP ステータスビュー付きでデプロイする方法を学びます。
keywords:
  - reCamera Pro
  - RV1126B
  - RKNN
  - visual wake
  - speech recognition
  - Zipformer
  - edge AI
image: https://raw.githubusercontent.com/yyling0101-a11y/recamera_pro_face_stt/main/images/gpt_images.png
slug: /recamera_pro_visual_wake_stt
last_update:
  date: 2026-08-24
  author: yylin
createdAt: '2026-08-24'
updatedAt: '2026-08-24'
sidebar_position: 1
url: https://wiki.seeedstudio.com/ja/recamera_pro_visual_wake_stt/
---

# reCamera Pro でビジュアルウェイク & オフライン音声認識システムを構築する

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/gpt_images.png" /></div>

## はじめに

このプロジェクトでは、reCamera Pro（RV1126B）向けに、自然で完全オンデバイスなインタラクションフローを実装します。カメラが顔を検出し、頭部姿勢を推定します。人が一定時間カメラを見続けた場合にのみ、アプリケーションがマイクを開き、ストリーミング音声認識を開始します。その後、連続トリガーを防ぐために短いクールダウン期間に入ります。

これは、音声アシスタント、展示用キオスク、プライバシー重視のエッジ音声エントリポイントに適しています。ビジョン、姿勢評価、音声特徴量、および Zipformer 推論はローカルで実行されます。Web ダッシュボードはクラウドサービス、Node.js プロセス、CDN、外部フォントを一切必要としません。

ソースコードと今後のリリースは、[recamera_pro_face_stt GitHub リポジトリ](https://github.com/yyling0101-a11y/recamera_pro_face_stt)で入手できます。このディレクトリがプッシュされた後、リポジトリにはプロジェクト全体が含まれます。

## 特長とパイプライン

```text
GStreamer camera
  -> SCRFD face detection (RKNN)
  -> IoU tracking + PFLD 98-point landmarks (RKNN)
  -> OpenCV solvePnP head-pose estimation
  -> EMA smoothing, hysteresis, and continuous-look timer
  -> visual-wake event
  -> bilingual streaming Zipformer STT (RKNN)
```

デフォルトの状態は `IDLE`、`FACE_DETECTED`、`ATTENTION_PENDING`、`LISTENING`、`COOLDOWN` です。絶対ヨー角が 18° 以下、絶対ピッチ角が 13° 以下のときに視線が有効とみなされます。その姿勢を 700 ms 維持すると `LISTENING` がトリガーされます。音声キャプチャはリスニング状態のときのみ開始されるため、アプリケーションは常時録音しません。

## ハードウェア要件

- reCamera Pro（RV1126B, aarch64）1 台
- USB 仮想 Ethernet または LAN 経由でデバイスにアクセスできるコンピュータ
- 動作する reCamera Pro SDK
- ファームウェアの GStreamer 要素：`appsrc`、`videoconvert`、`jpegenc`、`rtpjpegpay`
- ファームウェアが提供する `ai_asr` PCM オーディオデバイス

:::note
デフォルトの音声入力は `ai_asr`（16 kHz、S16_LE、4 チャンネル、チャンネル 0 を選択）です。これにより、`hw:0,0` を所有するベンダープロセスとの競合を避けられます。
:::

## プロジェクトを取得する

プロジェクトが公開されたら、開発ホスト上でクローンします：

```bash
git clone https://github.com/yyling0101-a11y/recamera_pro_face_stt.git
cd recamera_pro_face_stt
```

リポジトリには、ビジョンモデル、Zipformer モデル、Web ダッシュボード、クロスビルドスクリプトが含まれます。任意の RKNN Runtime バージョンを混在させないでください。このプロジェクトは **RKNN 2.3.2** を使用し、`rv1126b` をターゲットとしています。

## ビルドとデプロイ

### 1. reCamera Pro SDK を設定する

ビルドスクリプトは、デフォルトで `/home/yylin/recamera_pro/recamera-pro-sdk` にある SDK を探します。別の場所にある場合は、この変数を設定してください：

```bash
export RECAMERA_PRO_SDK=/absolute/path/to/recamera-pro-sdk
```

`scripts/build_recamera.sh` は `librknnrt.so` も検証します。SDK やランタイムが別の場所を使用している場合は、スクリプト内の `qualified_rknnrt` を、チェックサム検証ステップを維持したまま、検証済みの RKNN 2.3.2 ランタイムに更新してください。

### 2. クロスコンパイル

プロジェクトルートから、次を実行します：

```bash
bash scripts/build_recamera.sh
```

このスクリプトは SDK を検証し、そのビルド環境を読み込み、`build-recamera/deploy/` を作成します：

```text
deploy/
├── visual_wake_app
├── models/
│   ├── scrfd_500m_640_fp16.rknn
│   ├── pfld_98_112_fp16.rknn
│   └── stt/                         # encoder, decoder, joiner, and vocabulary
└── web/dashboard.html
```

### 3. デプロイメントバンドルをデバイスにコピーする

デプロイメントディレクトリの**中身**を、reCamera Pro 上の 1 つのディレクトリにコピーします。デバイスが `192.168.42.1` の場合：

```bash
scp -r build-recamera/deploy/* root@192.168.42.1:/userdata/visual-wake/
ssh root@192.168.42.1
cd /userdata/visual-wake
chmod +x visual_wake_app
```

:::tip
`models/` と `web/` ディレクトリは、示されている相対パスのまま維持してください。アプリケーションは、これらのデフォルトの相対パスを使ってアセットを読み込みます。
:::

## アプリケーションを実行する

デプロイメントディレクトリからアプリケーションを実行します：

```bash
./visual_wake_app
```

通常動作中、実行可能なイベントはターミナルに表示されます：

```text
VISUAL_WAKE track=1
STT_RESULT 打开灯
```

### 起動オプション

デバイス上の実行ファイルがサポートするすべてのオプションを確認するには、次のコマンドを使用します：

```bash
./visual_wake_app --help
```

オプションは組み合わせて使用できます。たとえば、次のコマンドはビジュアルパイプラインのみを検証し、ネットワークサービスを無効にします：

```bash
./visual_wake_app --no-stt --no-rtsp --no-web --debug
```

#### カメラとビジュアルウェイク

| オプション | デフォルト | 説明 |
| --- | --- | --- |
| `--detector FILE` | `models/scrfd_500m_640_fp16.rknn` | SCRFD 顔検出 RKNN モデルへのパス。 |
| `--landmark FILE` | `models/pfld_98_112_fp16.rknn` | PFLD 98 ランドマーク RKNN モデルへのパス。 |
| `--camera DEVICE` | `/dev/video13` | GStreamer が読み取るカメラデバイス。 |
| `--width N` | `1920` | 要求するカメラキャプチャ幅。 |
| `--height N` | `1080` | 要求するカメラキャプチャ高さ。 |
| `--fps N` | `30` | 要求するカメラフレームレート。処理レートは推論時間に依存します。 |
| `--attention-dropout-ms N` | `250` | アテンション開始後の短時間の無効姿勢に対する猶予期間（ミリ秒）。`0` を設定すると無効化されます。 |
| `--no-stt` | STT 有効 | 音声認識を開始しません。ビジュアルウェイク状態マシンのみをテストします。 |

#### 音声認識とエンドポイント検出

| オプション | デフォルト | 説明 |
| --- | --- | --- |
| `--stt-encoder FILE` | `models/stt/encoder-epoch-99-avg-1-rv1126b.rknn` | Zipformer エンコーダーモデルのパス。 |
| `--stt-decoder FILE` | `models/stt/decoder-epoch-99-avg-1-rv1126b.rknn` | Zipformer デコーダーモデルのパス。 |
| `--stt-joiner FILE` | `models/stt/joiner-epoch-99-avg-1-rv1126b.rknn` | Zipformer ジョイナーモデルのパス。 |
| `--stt-vocab FILE` | `models/stt/vocab.txt` | 語彙ファイルのパス。選択したモデルセットと一致している必要があります。 |
| `--audio-device NAME` | `ai_asr` | ALSA/`arecord` のオーディオデバイス名。 |
| `--audio-channels N` | `4` | 入力 PCM の総チャンネル数。 |
| `--audio-channel N` | `0` | 使用するチャンネル。`-1` を設定すると全チャンネルを平均します。 |
| `--stt-chunk-ms N` | `160` | STT に渡す各音声チャンクの長さ（ミリ秒）。 |
| `--speech-rms-threshold F` | `0.006` | 音声開始を検出する RMS しきい値。騒がしい部屋では値を上げてください。 |
| `--stt-min-speech-ms N` | `160` | 1 回の認識セッションで受け付ける最小音声長（ミリ秒）。 |
| `--stt-end-silence-ms N` | `2500` | 音声開始後、認識を終了させる無音時間（ミリ秒）。 |
| `--stt-start-timeout-ms N` | `4000` | ビジュアルウェイク後に音声が開始しない場合のタイムアウト（ミリ秒）。 |
| `--stt-max-ms N` | `30000` | 1 回のリスニング／認識セッションの最大継続時間（ミリ秒）。 |

#### RTSP、Web、ターミナル表示

| オプション | デフォルト | 説明 |
| --- | --- | --- |
| `--no-rtsp` | RTSP 有効 | 顔ボックス、ランドマーク、姿勢付きの注釈 RTSP ストリームを無効にします。 |
| `--rtsp-port PORT` | `8554` | RTSP サーバーポート。 |
| `--rtsp-mount PATH` | `/visual-wake` | RTSP マウントパス。たとえば `/demo` の場合、`rtsp://DEVICE_IP:8554/demo` になります。 |
| `--rtsp-width N` | `960` | RTSP 出力幅。 |
| `--rtsp-height N` | `540` | RTSP 出力高さ。 |
| `--rtsp-fps N` | `15` | 宣言上の RTSP 出力フレームレート。実際のレートは推論スループットに依存します。 |
| `--no-web` | Web サービス有効 | HTTP および WebSocket ダッシュボードを無効にします。 |
| `--web-port PORT` | `8080` | Web ダッシュボードとヘルスエンドポイントのポート。 |
| `--web-page PATH` | `web/dashboard.html` | カスタムダッシュボードページへのパス。 |
| `--dashboard` | Off | ローカルの対話型ターミナルにダッシュボードを表示します。`--debug` と同時には使用できません。 |
| `--debug` | Off | 起動、フレームごとの姿勢、音声レベル、RTSP、テンソル演算、STT パフォーマンスのログを出力します。`--dashboard` と同時には使用できません。 |

## システムを監視する 2 つの方法

### ターミナルダッシュボード

対話型ターミナルで `--dashboard` を使用します：

```bash
./visual_wake_app --dashboard
```

ターミナルは少なくとも 80×18 文字が必要です。左ペインには STT ステータス、途中結果テキスト、最終結果が表示され、右ペインには顔数、カメラ正対ステータス、姿勢角度、RTSP クライアントステータス、ビジョンレイテンシが表示されます。`Ctrl-C` を押すと通常のターミナルに戻ります。`--dashboard` は `--debug` と同時には使用できません。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/dashboard.png" /></div>

### Web ダッシュボード

デフォルトでは、アプリケーションはすべてのネットワークインターフェース上で HTTP/WebSocket サービスを開始します。コンピュータまたはスマートフォンから次のアドレスを開きます：

```text
http://DEVICE_IP:8080/
```

USB 仮想ネットワーク接続の場合の例：

```text
http://192.168.42.1:8080/
```

ページは自動的に `ws://DEVICE_IP:8080/ws` に接続し、中断後も再接続します。途中結果と最終結果のトランスクリプト、ビジュアル状態、顔数、ヨー／ピッチ／ロール、RTSP ステータス、レイテンシチャートを表示します。ヘルスエンドポイントは `http://DEVICE_IP:8080/health` です。別のポートを使うには `--web-port 8081` を、カスタムページを使うには `--web-page PATH` を指定します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/recamera_pro_visual_wake_stt/web.png" /></div>

## 注釈付きビデオストリームを表示する

アプリケーションはデフォルトで RTSP サーバーを起動します：

```text
rtsp://DEVICE_IP:8554/visual-wake
```

ホストコンピュータでは、次を使用します：

```bash
ffplay -rtsp_transport tcp rtsp://192.168.42.1:8554/visual-wake
```

オーバーレイには、顔ボックス、98 個すべてのランドマーク、生のヨー／ピッチ、`facing=YES/NO`、現在の状態が表示されます。緑は姿勢がエントリしきい値内であること、オレンジは有効だがしきい値外であること、赤は姿勢が無効であることを示します。

## チューニング

カメラの設置位置、レンズ特性、室内ノイズは体験に影響します。次の順序で調整してください：

1. カメラに正対しながら `--debug` を使ってヨー／ピッチを観察し、エントリしきい値を調整します。
2. 一時的な遮蔽に対して `--attention-dropout-ms` を調整します。猶予期間を無効にするには `0` を使用します。
3. 対象環境で音声 RMS を観察し、`--speech-rms-threshold` を調整します。
4. `--stt-end-silence-ms`、`--stt-start-timeout-ms`、`--stt-max-ms` を使用して、応答性と長いコマンドとのバランスを取ります。

コントローラはEMAスムージングと入退場ヒステリシスを使用します。単一の無効なポーズではリスニングは決してトリガーされず、アクティブなアテンションタイマーも即座にはクリアされませんが、フェイストラッキングが失われると状態は即座にリセットされます。

## トラブルシューティング

| 問題 | 想定される原因 | 解決策 |
| --- | --- | --- |
| ビルドで OpenCV または RKNN が見つからない | SDK 環境が不足しているか、ランタイムが非互換 | `RECAMERA_PRO_SDK` を確認し、SDK の `env.sh` を読み込み、RKNN 2.3.2 を使用します。 |
| モデルファイルが見つからない | デプロイ時のレイアウトが保持されていない | 実行ディレクトリに `models/` と `web/dashboard.html` が存在することを確認します。 |
| ビジュアルウェイクがまったくトリガーされない | カメラの誤り、しきい値が厳しすぎる、小さすぎる顔 | `--debug` と RTSP オーバーレイを使用して、`/dev/video13`、ランドマーク、およびヨー／ピッチを確認します。 |
| STT がオーディオエラーを報告する | `ai_asr` が利用できない、またはそのフォーマットが異なる | デバイス上で `arecord -D ai_asr -f S16_LE -r 16000 -c 4 -d 5 /tmp/test.wav` をテストします。 |
| Web ページにアクセスできない | ポートに到達できない、または Web 配信が無効化されている | `--no-web` を使用せず、`http://DEVICE_IP:8080/health` をテストします。 |
| RTSP を再生できない | ネットワーク、ポート、または GStreamer プラグインの問題 | TCP 再生を使用し、必要なファームウェアの GStreamer 要素を確認します。 |

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなレベルのサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
