---
description: reCamera Pro 上のオーディオキャプチャおよび再生 API、マイクアレイのルーティング、オーディオアルゴリズムについて説明します。
title: オーディオ開発
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - C/C++
  - RKNN
  - アプリケーション開発
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_audio_development
sku: 10003420
sidebar_position: 4
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_audio_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# オーディオ開発

このページでは、アプリケーションのオーディオインターフェースと、現在の製品ファームウェアにおけるデバイス構成について説明します。通常の C/C++ アプリケーションビルドには、[`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain) を使用します。ALSA、カーネルオーディオ、または製品のオーディオルーティングを変更する場合のみ、完全な BSP ソースが必要です。

## ハードウェアおよびカーネルサポート

オーディオ関連のカーネルオプションは `sysdrv/source/kernel/arch/arm64/configs/rv1126b-recamera2.config` にあります：

| 設定 | 意味 |
| --- | --- |
| `CONFIG_SND_SOC_ES7202=y` | マイクアレイキャプチャ用 Everest ES7202 マルチチャネル ADC |
| `CONFIG_SND_SOC_ROCKCHIP_PDM_V2=y` | PDM デジタルマイクインターフェース v2 |
| `CONFIG_SND_SOC_RK817=y` | RK817 コーデック（PMIC 内のオーディオ；スピーカー出力パス） |
| `CONFIG_SND_SOC_RK_DSM=y` | Rockchip デジタルスピーカ処理 |
| `CONFIG_SND_SOC_ROCKCHIP_ASRC=y` | 非同期サンプルレート変換 |
| `CONFIG_SND_SOC_ROCKCHIP_MULTI_DAIS=y` | 複数の DAI リンク；キャプチャと再生で別々の DAI を使用 |
| `CONFIG_SND_SOC_DUMMY_CODEC=y` | ダミーコーデック |
| `CONFIG_SND_HRTIMER=y`, `CONFIG_SND_PCM_TIMER=y` | タイマドライバ |

オーディオノードは `rv1126b-recamera2-v1.dts` と、それがインクルードする DTSI ファイル内で定義されています。ユーザ空間ライブラリのソースは `media/alsa-lib/` です。`./build.sh media` によってビルドされ、出力は `output/out/media_out/lib/` 以下に配置されます。

## キャプチャパス：6 ハードウェアチャネル → 4 仮想チャネル

この reCamera Pro の重要なオーディオ設計は、オーバーレイ内の `/etc/asound.conf` で定義されています。ソース：`project/cfg/BoardConfig_Recamera2/overlay/overlay-buildroot-asound/etc/asound.conf`。

### 3 つのレイヤ

**レイヤ 1 · 共有ハードウェア（`dsnoop`）** — 複数プロセスが同じハードウェアデバイスを読み取れるようにします：

~~~text
pcm.mic_hw_shared
  type       dsnoop
  ipc_key    2026
  ipc_perm   0666
  slave.pcm  "hw:0,0"
  channels   6
  rate       16000
  format     S16_LE
  period_size 1024
  buffer_size 4096
~~~

**レイヤ 2 · チャネルマッピング（`route`）** — 6 つの物理チャネルを 4 つの仮想チャネル `[Mic1, Mic2, Ref, Ref]` にマッピングします：

~~~text
pcm.ai_2mic_2ref
  type          route
  slave.pcm     "mic_hw_shared"
  slave.channels 6
  ttable {
      0.0 1    # Hardware Ch0 → output Ch0 (Mic 1)
      1.2 1    # Hardware Ch2 → output Ch1 (Mic 2)
      2.4 1    # Hardware Ch4 → output Ch2 (Reference)
      3.4 1    # Hardware Ch4 → output Ch3 (Reference copy)
  }
~~~

**レイヤ 3 · アプリケーション仮想デバイス（`plug`）** — 各種モジュール向けに、自動フォーマット変換付きの名前付きデバイスを提供します：

| PCM デバイス | 用途 |
| --- | --- |
| `ai_main` | メインオーディオ入力 |
| `ai_kws` | キーワードスポッティング |
| `ai_asr` | 音声認識（ASR） |
| `ai_debug` | デバッグ / 生データ録音 |

これら 4 つはすべて `type plug` とし、`slave.pcm "ai_2mic_2ref"` を使用します。それぞれの制御デバイスは次のとおりです：

~~~text
ctl.ai_main / ctl.ai_kws / ctl.ai_asr / ctl.ai_debug  →  type hw; card 0
~~~

### この設計を採用している理由

- **`dsnoop` により排他アクセスを回避：** ALSA のハードウェアデバイスはデフォルトで排他的ですが、KWS、ASR、ビデオ録画用オーディオ、デバッグ録音が同時にキャプチャを行う必要がある場合があります。`ipc_key 2026` と `ipc_perm 0666` により、複数プロセスがキャプチャストリームを共有できます。
- **`route` が AEC の参照信号を提供：** Acoustic Echo Cancellation（AEC）には、スピーカーで現在再生されている音の参照が必要です。ハードウェアチャネル 4 がこの参照を運び、出力チャネル 2 と 3 にコピーされます。
- **`plug` がフォーマット不一致を解消：** モジュールごとに異なるレートやフォーマットを要求する場合があり、`plug` が自動的に変換します。

### 使い方

~~~bash
# 4 チャネル（2 マイク + 2 リファレンス）を 16 kHz S16_LE で録音
# arecord -D ai_debug -c 4 -r 16000 -f S16_LE -d 10 /userdata/test.wav

# ASR 用に録音
# arecord -D ai_asr -c 4 -r 16000 -f S16_LE -d 5 /userdata/asr.wav
~~~

ALSA API を使用する場合は、デバイス名として `"ai_main"`、`"ai_kws"`、`"ai_asr"`、または `"ai_debug"` を渡してください。`"hw:0,0"` は使用しないでください。これは排他的であり、チャネルマッピングが適用されません。

> `hw:0,0` を直接オープンすると、生の 6 チャネルデータが得られます。2 マイク + 2 リファレンスのレイアウトには、`ai_2mic_2ref` またはそのいずれかの `plug` ラッパーを使用してください。

## 再生パス

スピーカーは RK817 コーデック / RK_DSM を使用します。デフォルトの ALSA 再生デバイスは `default`（`hw:0,x`。実機では `aplay -l` で正確なデバイス番号を確認してください）です。

~~~bash
# aplay -l                              # 再生デバイスを一覧表示
# aplay -D default /oem/usr/share/xxx.wav
~~~

`recamera_ipc` には、スピーカチェック用のテストオーディオファイル `project/app/recamera_ipc/common/speaker_test.wav` が含まれています。

## アプリケーションレベルのオーディオコード

| パス | 内容 |
| --- | --- |
| `project/app/recamera_ipc/common/audio/audio.c` / `audio.h` | メインの rkipc オーディオロジック：キャプチャ、エンコード、およびビデオとの多重化 |
| `project/app/recamera_ipc/common/audio/rkaudio_mp3.c` / `.h` | MP3 デコードおよび再生（プロンプトなど） |
| `project/app/ao_record_demo/ao_record_demo.c` | 録音デモ。Makefile は rockit をリンクするためのテンプレート |
| `project/app/aov_sample/sample_aov_audio.c` | 低消費電力モードでのオーディオキャプチャ |
| `project/app/component/ao_record_service/` | 録音サービスコンポーネント。`project/app/Makefile` により明示的に収集される |
| `media/samples/simple_test/simple_ai_get_frame.c` | 最小限のキャプチャ例 |
| `media/samples/simple_test/simple_ai_bind_aenc.c` | キャプチャをエンコードにバインド |
| `media/samples/simple_test/simple_ai_bind_aenc_external_encoder.c` | 外部エンコーダを使用 |
| `media/samples/simple_test/simple_adec_bind_ao.c` | デコードを再生にバインド |
| `media/samples/simple_test/simple_adec_bind_ao_external_decoder.c` | 外部デコーダを使用 |
| `media/samples/simple_test/simple_ao_send_frame.c` | フレームを直接再生に送信 |
| `media/samples/example/audio/sample_ai.c`, `sample_ai_aenc.c` | 完全なサンプル |
| `media/samples/example/test/sample_ai_aenc_adec_ao_stresstest.c` | オーディオストレステスト |

## rockit オーディオモジュール

MPI を使用する場合、オーディオはビデオと同じモジュールモデルを使用します：

| モジュール | ヘッダ | 用途 |
| --- | --- | --- |
| `AI` | `rk_mpi_ai.h` | オーディオキャプチャ |
| `AO` | `rk_mpi_ao.h` | オーディオ再生 |
| `AENC` | `rk_mpi_aenc.h` | オーディオエンコード（G.711/AAC など） |
| `ADEC` | `rk_mpi_adec.h` | オーディオデコード |

典型的なパスは `AI → AENC →（VENC と多重化してストリームへ）` です。再生では `ADEC → AO` を使用します。モジュールは `RK_MPI_SYS_Bind()` で接続します。

AI チャネル属性を設定する際は、チャネル数を `asound.conf` に合わせてください（4 チャネル = 2 マイク + 2 リファレンス）。サンプルレートは 16,000 Hz、フォーマットは `S16_LE` を使用します。

## オーディオアルゴリズム（VQE / RockAA）

Rockchip のフロントエンドアルゴリズム（AEC、Acoustic Noise Suppression（ANS）、Automatic Gain Control（AGC））は、RockAA / VQE を通じて提供されます：

- `docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf`（VQE アルゴリズムガイド）
- `docs/zh/audio/Rockchip_Developer_Guide_RockAA_Utils_CN.pdf`（RockAA ツール）
- `docs/zh/audio/Rockchip_Developer_Guide_Sound_Event_Detection.pdf`（サウンドイベント検出）
- `media/common_algorithm/`（共通アルゴリズムライブラリ）

`asound.conf` 内のエコー参照チャネルは、VQE の AEC 用に予約されています。VQE を有効にするには、AI チャネル属性で関連するアルゴリズムオプションを有効にし、参照チャネルデータが正しくルーティングされていることを確認してください。

## マイクアレイテスト

`docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf` には、アレイの一貫性テストについて記載されています。量産時には、`project/app/recamera_utils/hw_test/` 以下のスクリプトを使用するか、`ai_debug` を通じて 6 チャネルの生入力を録音し、各チャネルを確認してください。

チャネル順序の問題を診断するには、4 チャネルの WAV を録音し、Audacity で各トラックを確認します。各マイクを叩く、または話しかけて、Mic1、Mic2、Ref、Ref が `ttable` のマッピングと一致していることを確認してください。

## よくある問題

| 症状 | 原因 | 解決策 |
| --- | --- | --- |
| `arecord: main:831: audio open error: Device or resource busy` | `dsnoop` を介さずに `hw:0,0` を直接オープンした | `ai_debug` などの仮想デバイスを使用する |
| `ai_*` を開くと `Unknown PCM` が報告される | `/etc/asound.conf` が適用されていない | オーバーレイがパッケージされていること（`RK_POST_OVERLAY` に `overlay-buildroot-asound` が含まれる）を確認し、実機で `cat /etc/asound.conf` を確認する |
| チャネル数が正しくない（4 を想定していたが 6 になっている） | `ai_2mic_2ref` ではなく `hw:0,0` を使用した | route レイヤを使用する |
| AEC の性能が悪い / エコーが残る | 参照チャネルが欠落している、または誤ってマッピングされている | `ttable` の `2.4` / `3.4` を確認し、ハードウェアチャネル 4 がエコー参照であることを検証する（ハードウェア検証が必要） |
| 録音が無音になる | 誤ったチャネルを選択した（例：Ch1 / Ch3 / Ch5 のみ） | まず 6 つすべての生チャネルを録音し、どのチャネルに信号があるか特定する |
| 再生時に音が出ない | RK817 / DSM パスが無効、またはボリュームがミュートされている | `amixer -c 0 scontrols` で確認し、`alsamixer` でミュート解除する |
| サンプルレート不一致による再生ピッチのずれ | `plug` が無効、または ASRC が無効 | カーネルで `CONFIG_SND_SOC_ROCKCHIP_ASRC=y` になっていることを確認し、明示的に `-r 16000` を指定する |
| 複数プロセスが録音する際に断続的な失敗が発生する | `ipc_key` の競合 | キー 2026 をアプリケーション間で一意に保つか、`asound.conf` を変更して再ビルドする |

## 関連ドキュメント

| ドキュメント | パス |
| --- | --- |
| RV シリーズ ACodec 開発者ガイド | `docs/zh/audio/Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf` |
| VQE アルゴリズム概要 | `docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf` |
| RockAA ツール | `docs/zh/audio/Rockchip_Developer_Guide_RockAA_Utils_CN.pdf` |
| マイクアレイテスト | `docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf` |
| サウンドイベント検出 | `docs/zh/audio/Rockchip_Developer_Guide_Sound_Event_Detection.pdf` |
| オーディオトラブルシューティング | `docs/zh/audio/Rockchip_Trouble_Shooting_Linux_Audio_CN.pdf` |

英語版は `docs/en/audio/` 以下に同様の名前で配置されています。`Sound_Event_Detection` は中国語版のみ利用可能です。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>