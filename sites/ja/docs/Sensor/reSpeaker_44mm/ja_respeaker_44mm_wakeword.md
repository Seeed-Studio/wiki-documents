---
description: reSpeaker XVF3800 44mm と XIAO ESP32-S3 Plus を組み合わせて JARVIS 音声サテライトに変身させます — ウェイクワード「Jarvis」と 9 個のコマンドがボード上でオフライン動作し、PC 上の Python 製ブレインがブラウザ内のアイアンマン風 HUD を駆動します。
title: Wake Word on reSpeaker XVF3800 44mm (JARVIS)
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - XIAO ESP32-S3 Plus
  - ウェイクワード
  - WakeNet
  - MultiNet
  - ESP-SR
  - JARVIS
  - XMOS
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/jarvis.jpg
slug: /respeaker_44mm_wakeword
sku: 100066841,100065276
last_update:
  date: 11/24/2026
  author: Kasun Thushara
createdAt: '2026-11-24'
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/ja/respeaker_44mm_wakeword/
---

# エッジ AI 音声サテライト: reSpeaker XVF3800 44mm での KWS & MultiNet NLU

## はじめに

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/_1fvV75W3ds"
          title="reSpeaker 44mm XIAO ESP32S3 Plus — KWS and NLU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

**「Jarvis」** と話しかけます。リングがミント色に点滅し、短いチャイムが鳴り、その後
**6.5 秒間** XIAO が 9 個のコマンドのいずれかを待ち受けます。ウェイクワードと
すべてのコマンドは Espressif ESP-SR により **ボード上で** 実行されます。音声はアップロードされず、
アカウントも不要です。

ボードから出ていくのは、UDP 経由の 1 行の可読テキストだけです：

```text
JARVIS 0042 3
```

PC 上の小さな Python 製ブレインがその 1 行をアクションに変換します — 音楽を再生したり、
ジョークを言ったり、天気を読み上げたり、キャラクターの頭を動かしたり — そしてブラウザ内で
フルスクリーンの **Iron Man / JARVIS HUD** を駆動します。応答は PC 上で音声合成され、
reSpeaker のスピーカーから再生されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/jarvis.jpg" alt="poster" width={700} height="auto" /></p>

```text
4 mics ─► XVF3800 DSP ─► I²S 16 kHz ─► XIAO ESP32-S3 Plus (WakeNet + MultiNet)
                                             │  UDP :9001  "JARVIS <seq> <id>"
                                             ▼
                                PC brain.py ── HTTP :8080 / SSE ──► browser HUD
                                             └── UDP :9100  PCM ────► reSpeaker speaker
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={400} height="auto" /></p>

## 何を言うと、何が起こるか

| タイミング | ボード上で起こること | PC 上で起こること |
| --- | --- | --- |
| アイドル | リングが DOA モードで減光しつつ声を追尾 | HUD は待機中；ページがブレインに到達すると `LINKED` |
| 「Jarvis」 | ミント色のフラッシュ、約 0.7 秒のチャイム、コーデックが 70 % → 30 % にデュック | — |
| +0.8 秒 | 6.5 秒間のコマンド受付ウィンドウが開く（MultiNet は最初の 5.8 秒だけをスコアリング） | — |
| コマンド一致 | リングアニメーション、`JARVIS <seq> <id>` を送信、2.5 秒以内に ACK を期待 | アクション実行、カード + イベントログ + 音声応答 |
| 一致なし | アンバーのダブル点滅 | ログ: `no command heard (wake fired, phrase not matched)` |

## この構成にした理由

| 判断 | 理由 |
| --- | --- |
| ウェイクワードとコマンドを **XIAO 上で** 実行 | 会場の WiFi が落ちても動作、レイテンシなし、プライバシーの懸念なし、クラウド料金なし |
| コマンドは 30 個ではなく **9 個** | テーブルが大きくなると MultiNet が混乱するため；動詞がそれぞれ異なる 9 個のフレーズなら安定して認識される |
| コマンドごとに **テキスト** パケット 1 個 | コマンドは `JARVIS 0042 3` — 14 バイトで、Wireshark で読めて、再送も容易 |
| ウェイクワードは **model パーティション** に配置 | WakeNet パックは約 3.3 MB；`esp_sr_16` パーティションに載せ、スケッチには載せない |
| HUD は **PC** 上 | XIAO には画面がなく、ブラウザが最も安価な 1080p ディスプレイだから |

## 前提条件

**ハードウェア**

| 項目 | 推奨 | 理由 |
| --- | --- | --- |
| reSpeaker **XVF3800 44mm** と XIAO | SKU 100066841 または 100065276（ケース付き） | マイク、XVF3800 DSP、LED リング、コーデック、アンプ、I²S 配線がボード上にある |
| Seeed **XIAO ESP32-S3 Plus** | 16 MB フラッシュ / 8 MB PSRAM、はんだ付け済み | model パーティションに 4 MB が必要で、オーディオリングは PSRAM 上に置かれる |
| USB-C **データ** ケーブル | 充電専用ではないもの | 書き込むのは XMOS ポートではなく XIAO ポート |
| スピーカー | JST コネクタの 5 W 4 Ω ユニット | 応答と音楽がロボットから出る |
| 2.4 GHz WiFi | WPA2、**クライアント分離なし** | ESP32-S3 には 5 GHz 無線がなく、分離があると PC ↔ ボード間が遮断される |
| PC | 音声応答には Windows 10/11、ブラウザは Chrome または Edge | ブレインと HUD を実行する |

**ソフトウェア**

| ソフトウェア | バージョン | 備考 |
| --- | --- | --- |
| Arduino IDE 2 または `arduino-cli` | 1.5.1 | ESP_SR はコアに同梱されており、Library Manager の手順は不要 |
| esp32 core | **3.3.11** | ESP-SR API と `esp_sr_16` パーティションはこのバージョンに結び付いている |
| Python | **3.11** | ブレイン |
| `numpy`, `soundfile`, `scipy` | 最新版付近 | MP3 をロボット用スピーカー向けの 16 kHz PCM にデコードする |
| Git | 2.50+ | プロジェクトをクローンする |

:::note
アレイは **16 kHz I²S ファームウェア** を実行している必要があります
(`respeaker_44mm_i2s_c16k2ch_v1.0.0.bin`, XVF3800 が I²S マスター、2 チャンネル)。
48 kHz イメージのままだと XIAO には無音かゴミしか見えず、ESP-SR は決してロードされません。
[Update Firmware](https://wiki.seeedstudio.com/ja/respeaker_44mm_introduction/#update-firmware)
から更新し、プロジェクトの `firmware/audio_rms` スケッチで確認してください：音声を入れると
左チャンネルの RMS が数百程度になるはずです。
:::

クリーンな環境での所要時間の目安：ツールチェーン 20 分、XMOS チェック 10 分、キーワードと
最初の書き込み 15 分、ブレインと HUD 5 分、ライブ検証 10 分。

## IDE のセットアップ

コアは **明示的に** インストールしてください。「latest」はこのファームウェアが
ビルドされたバージョンではありません。

```powershell
arduino-cli core update-index
arduino-cli core install esp32:esp32@3.3.11
arduino-cli board list
```

`board list` には、S3 コアが紐付いた自分のポートが表示されるはずです。XIAO という名前が
出るとは思わないでください：コアにそのようなエントリはなく、次のような表示になります

```text
COM9 serial Serial Port (USB) ESP32 Family Device esp32:esp32:esp32_family
                             Ozobot DRVKit        esp32:esp32:ozobot_drvkit
```

ボード名は見た目だけのもので、ビルドを決めるのは下記の FQBN です。書き込む前に
シリアルモニタは必ず閉じてください。

次にプロジェクトをクローンします：

```powershell
git clone https://github.com/KasunThushara/reSpeaker_44_wakeword.git
cd reSpeaker_44_wakeword
```

FQBN は必須です。インストールしたコアには `XIAO_ESP32S3_Plus` ボード
エントリがなく、`esp_sr_16` スキームだけが model パーティションを持っています。

```powershell
$cli  = "C:\Users\<you>\AppData\Local\Programs\Arduino IDE\resources\app\lib\backend\resources\arduino-cli.exe"
$fqbn = "esp32:esp32:esp32s3:FlashSize=16M,PSRAM=opi,PartitionScheme=esp_sr_16,CDCOnBoot=cdc"

& $cli compile --fqbn $fqbn --output-dir build\wake_demo firmware\wake_demo
```

| オプション | 理由 |
| --- | --- |
| `FlashSize=16M,PSRAM=opi` | XIAO ESP32-S3 **Plus**：16 MB フラッシュ、8 MB オクタル PSRAM（3 秒分のオーディオリング） |
| `PartitionScheme=esp_sr_16` | 3.3 MB の ESP-SR パック用に約 4 MB の model パーティションを作成 |
| `CDCOnBoot=cdc` | GPIO43（UART0 RX）は I²S データピンなので、`Serial` はネイティブ USB から出す必要がある |
| `esp32s3` target | XIAO は独自ボードファイル付きの Plus バリアントではなく、素の ESP32-S3 だから |

IDE では **ESP32S3 Dev Module** を選び、Flash Size を 16 MB、PSRAM を
**OPI PSRAM**、Partition Scheme を **ESP SR 16MB**、USB CDC On Boot を **Enabled** に設定します —
これらは FQBN と完全に一致している必要があります。

## キーワードの設定

ここでは 2 種類のものが「キーワード」と呼ばれています：

| 対象 | どこにあるか | 変更に必要なもの |
| --- | --- | --- |
| ウェイクワード **「Jarvis」** | model パック `build/srmodels_jarvis.bin` | model の書き換え |
| **9 個のコマンド** | `firmware/wake_demo/wake_demo.ino` の `sr_commands[]` | 再ビルドと再書き込み |

### ウェイクワード

ウェイクワードはスケッチではなく model 内にあります。このビルドでは
`wakenet9l_tts1h8_Jarvis_3_0.627_0.632` を使用しており、30–50 cm で 4/4、1.5–2 m で
3/3 という測定結果です。`build/` にコミットされているパックは次のとおりです：

| パック | サイズ | 用途 |
| --- | --- | --- |
| `srmodels_jarvis.bin` | 3,340,189 B | **書き込むべきもの** — 「Jarvis」、しきい値 `0.627_0.632` |
| `srmodels_stock_backup.bin` | 3,340,296 B | 工場出荷時の「Hi ESP」、最後の手段としてのロールバック用 |

別のウェイクワードは別の WakeNet model を意味します — Espressif の model zoo にある
別パックか、自分で学習したものかのいずれかであり、スケッチ側は何も変わりません。
model 名に含まれる数値は検出しきい値で、パック内部に格納されています。そのため感度調整は
スケッチを編集するのではなく、パックを作り直すことで行います。

:::note 別のウェイクワード、別のキーワードリスト
同じリポジトリには、別のウェイクワードと独自の 8 フレーズリストを持つ 2 つ目のデモが
含まれています —
[`pc_brain_walle/`](https://github.com/KasunThushara/reSpeaker_44wakeword/tree/main/pc_brain_walle)
（「go straight ahead」や「charge your battery」のようなフレーズ）と、`build/` 内の専用パックです。
それを読むのが、別のキーワードセットがどのように配線されているかを理解する最速の方法です —
ただしこのページでは **Jarvis** と、後述の 9 個のコマンドに話を絞ります。この組み合わせに
HUD、ブレインの id、`build/srmodels_jarvis.bin` が対応付けられているからです。
:::

### コマンド

`firmware/wake_demo/wake_demo.ino` を開き、先頭付近の 2 つのテーブルをこのブロックに
置き換えてください。id は `pc_brain/brain.py` の `COMMANDS` と必ず一致させる必要があります。
これらはボード、ブレイン、HUD 間の契約であり、
配列インデックスでは **ありません**。

```cpp
static const sr_cmd_t sr_commands[] = {
  {1, "play some music"},
  {2, "stop the music"},
  {3, "move your head"},
  {4, "tell me a joke"},
  {5, "change the mood"},
  {6, "show me the weather"},
  {7, "open my tasks"},
  {8, "shut it down"},
  {9, "ask the model"},
};

static const char *PHRASE_TEXT[] = {
  "play some music", "stop the music", "move your head", "tell me a joke",
  "change the mood", "show me the weather", "open my tasks", "shut it down",
  "ask the model"
};
```

クローンした状態では、スケッチがそのままコンパイルできるように 8 フレーズのプレースホルダ
テーブルが入っていますが、これを上記ブロックでそのまま置き換えてください。スケッチ内で
フレーズを知っているのはここだけです。

フレーズ設計で身をもって学んだルール：

- **3 語以上で、それぞれ異なる動詞を 1 つずつ含めること** — play / stop / move / tell /
  change / show / open / shut / ask
- 最小対立語を避ける（“show me the weather” と “show me the time” は互いのマッチを
  奪い合う）
- `-ing` 形や語彙外の単語は避ける；“todo” は MultiNet の G2P では発音できないため、
  フレーズは **“open my tasks”** であって “open my todo list” ではない
  「show my todo」
- `brain.py` に存在しない id を持つ新しいフレーズを追加しても無害ですが、
  何も起こりません
- このテーブルにとって **9 個のフレーズが快適な上限** です

:::note リングは依然として光りますが、コマンドごとに区別はしません
同じスケッチ内の `animForId()` は、スケッチが書かれたデモの名残で、アニメーションを **id の範囲** で
マッピングしています。上記 9 個の id では、**1–6** はすべて「音楽を再生して」のカラーホイールを、
**7–9** はジョーク用のレインボーを再生します；`A_WEATHER`、`A_SHUT`、`A_ASK` には決して到達しません。
それは見た目だけの問題で — ウェイク時のフラッシュ、チャイム、パケットには影響しません。デモで
コマンドごとに異なるアニメーションが必要な場合は、`animForId()` を範囲スイッチではなく 9 エントリの
テーブルに置き換えてください。
:::

### ログにブランド名を入れる（任意）

パックとスケッチはリポジトリ内の他のデモと共有されているため、ボードがブート時に出力する文字列は
依然としてそのデモ名になっています。機能的には何も依存していませんが — このページのブートログは
JARVIS と表示しており、合わせておくとトラブルシューティングがはるかに楽になります。
`wake_demo.ino` 内の 3 か所です：

`setup()` 冒頭の 4 行の `Serial.println` を置き換えます：

__CODE_LINE_PLH__
```cpp
  Serial.println(F("=== wake_demo jarvis: Jarvis -> chime -> action -> PC + LED -> DOA ==="));
  Serial.println(F("say \"Jarvis\", then one of the 9 voice actions:"));
  Serial.println(F("  play some music / stop the music / move your head"));
  Serial.println(F("  tell me a joke / change the mood / show me the weather"));
  Serial.println(F("  open my tasks / shut it down / ask the model"));

`ESP_SR: ok` のすぐ後にある `ready -` 行：

__CODE_LINE_PLH__
```cpp
  Serial.println(F("ready - say Jarvis, then a command right away"));

そしてウェイク時のバナー：

__CODE_LINE_PLH__
```cpp
    Serial.printf("\n[%6lu ms] *** \"HI JARVIS\" #%lu ***\n",

これを飛ばしてもボードの動作はまったく同じです — ただしログには `walle`、`Hi Walle`、
`8 voice actions`、`*** "HI WALLE" #1 ***` と出力されるため、下のサンプルと diff を取るときに
紛らわしくなります。

### モデルをビルドディレクトリに入れる

コアのポストビルドフックは、`{build.path}\libraries\ESP_SR` が見つかった場合にのみ
`srmodels.bin` をコピーします — ESP-SR はその場でコンパイルされるため、実際には見つかりません。
アップロード前にパックを手動でコピーしないと、ボードは工場出荷時の “Hi ESP” パックで
ブートします。

__CODE_LINE_PLH__
```powershell
Copy-Item build\srmodels_jarvis.bin build\wake_demo\srmodels.bin -Force

## WiFi、PC アドレス、ポートを追加する

`setup()` の上にあるブロックを編集します：

__CODE_LINE_PLH__
```cpp
#define WIFI_SSID "YOUR_2G_SSID"
#define WIFI_PASS "YOUR_PASSWORD"
#define PC_IP     "192.168.7.217"
#define PC_PORT   9001

クローンでは `WIFI_SSID` と `WIFI_PASS` は **空** のまま出荷されており、空のペアは後から修正できる
エラーパスにはなりません：ボードはローカル専用でブートし、`WiFi: no credentials - edit WIFI_SSID / WIFI_PASS`
と表示して、パケットを一切送信しません。最初のフラッシュ前に両方を埋めてください。

- **2.4 GHz のみ**、WPA2、両方のデバイスが同じサブネット内、AP/クライアント分離なし。
- PC に **固定** アドレス（DHCP 予約）を割り当てます。ブレインは受信パケットからボードの
  アドレスを学習しますが、ボードはブート時に PC のアドレスを知っている必要があります。
  - 設定ポータルはありません：WiFi や PC アドレスを変更するには、再ビルドと再フラッシュが必要です。

  :::note リンク確認に ping を使わないでください
  複数のアクセスポイントがある会場ネットワークでは、ボードがサブネットの反対側に乗ることがあります —
2.4 GHz 無線に `192.168.6.x`、5 GHz に `192.168.7.x` を配る `/23` ブリッジは普通です。
  2 台の無線クライアント間の ICMP は、UDP が正常に流れていても通常はドロップされるため、`ping` は
リンクが生きていても “Destination host unreachable” と報告します。

代わりにボード自身のログでリンクを判断してください：`-> PC  JARVIS 0001 4` に続いて
`<- ACK 1` が出ていれば、双方向とも生きています。ACK が一度も返ってこない場合は、
ファイアウォールを確認してください。
:::

:::caution PC アドレスもオクテットで書かれています
`PC_IP` はログ行でしか使われません。UDP の送信先は、ARP ウォームアップ用データグラム、
`sendCommand()`、`resendCommand()` の 3 つの `IPAddress(192, 168, 7, 217)` 呼び出しです。
3 か所すべてのオクテットを置き換えないと、ログには正しいアドレスが表示されていても、
ボードは別の PC と通信してしまいます。
:::

| 方向 | プロトコル | ポート | 用途 |
| --- | --- | --- | --- |
| ボード → PC | UDP | **9001** | `JARVIS <seq> <id>`、ACK はボードの送信元ポートに戻る |
| PC → ボード | UDP | **9100** | 16 kHz PCM 音楽と TTS、および `JV <pct>` 音量パケット |
| ブラウザ → PC | TCP | **8080** | HUD、API、SSE |

一度だけ、PowerShell を管理者として開きポートを開放します：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__

Windows がすでに信頼しているネットワークでは、これらは不要なことも多いです — 最初に
```powershell
New-NetFirewallRule -DisplayName "JARVIS UDP in"  -Direction Inbound -Protocol UDP -LocalPort 9001,9100 -Action Allow -Profile Private
New-NetFirewallRule -DisplayName "JARVIS HTTP in" -Direction Inbound -Protocol TCP -LocalPort 8080 -Action Allow -Profile Private

## フラッシュ

コンパイル → モデルのコピー → アップロードを 1 つのシーケンスとして行います。古いビルド
ディレクトリに対してアップロードすると、古いアプリ *と* 古いモデルの両方をフラッシュしてしまいます。

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__

__CODE_LINE_PLH__
__CODE_LINE_PLH__
```powershell
$cli  = "C:\Users\<you>\AppData\Local\Programs\Arduino IDE\resources\app\lib\backend\resources\arduino-cli.exe"


& $cli compile --fqbn $fqbn --output-dir build\wake_demo firmware\wake_demo
Copy-Item build\srmodels_jarvis.bin build\wake_demo\srmodels.bin -Force

```

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```text
=== wake_demo jarvis: Jarvis -> chime -> action -> PC + LED -> DOA ===
say "Jarvis", then one of the 9 voice actions:
  play some music / stop the music / move your head
  tell me a joke / change the mood / show me the weather
  open my tasks / shut it down / ask the model
WiFi: joining YOUR_2G_SSID......
WiFi: ip=192.168.7.205 rssi=-52 dBm -> PC 192.168.7.217:9001
volume: 70% (-3.0 dB, DAC 0x06) boot
i2s full duplex: ok
audio: ring 96000 bytes (ok)
audio: listening on 9100
audio tuning: AGCMAXGAIN=64, ASROUTGAIN=1.5, ASR on
  -> DOA idle (boot)
MC Quantized vadnet1:vadnet1_mediumv1_Speech_1_0.5_0.1, min speech:128 ms, min noise:992 ms, mode:0, threshold:0.500, channel:1, tigger:v1
MC Quantized wakenet9: wakenet9l_tts1h8_Jarvis_3_0.627_0.632, tigger:v4, mode:0, p:0
Build fst from commands.
Quantized MultiNet7:rnnt_ctc_2.0, name:mn7_en

Build fst from commands.
ESP_SR: ok
ready - say Jarvis, then a command right away
  DOA 183 deg
```
  エラーではありません。ログは意図的におしゃべりです

**「Jarvis」** と 1 回だけ言います。リングがフラッシュし、チャイムが鳴り、ログには
  `*** "HI JARVIS" #1 ***` と表示されます。すぐにコマンドを続けて言うと、ボードはマッチした
フレーズで応答します：

__CODE_LINE_PLH__
  __CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```text
[197851 ms] *** "HI JARVIS" #1 ***

[198671 ms] command mode open
[198997 ms] listening for a command (6.5 s)

[200774 ms] -> PC  JARVIS 0001 4
     <-     ACK 1
```
| シリアル出力なし | `CDCOnBoot` が設定されていない | `CDCOnBoot=cdc` を追加して再フラッシュ |
| `ESP_SR: FAILED` または再起動ループ | `build\wake_demo` にモデルがない | `srmodels_jarvis.bin` を再コピー |
| “Hi ESP” でウェイクする | ストックパックがフラッシュされている | コピー手順をやり直し、wakenet 行を確認 |
| ウェイクはするが PC 側で何も起きない | フレーズまたは id が上記 9 個と異なる | `sr_commands[]` と `brain.py` を一緒に修正 |
| ボードログに `no ACK for seq …` | PC のオクテットまたはファイアウォール | 3 つすべての `IPAddress(...)` を修正し、UDP 9001 を許可 |
| HUD は生きているがイベントログが更新されない | 古い `brain.py` が 9001/8080 を保持している | すべての python プロセスを止め、ブレインを 1 つだけ起動 |

## UI を開く

Python 側をインストールし、ランチャーを実行します：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__

`start_demo.bat` はブレインを起動し、Chrome（フォールバックとして Edge）をキオスクモードで
```powershell
py -3.11 -m pip install numpy soundfile scipy
cd reSpeaker_44_wakeword\pc_brain

```
ランチャーは既存のインスタンスを探しません。以前の実行から残っている `brain.py` が UDP 9001 と
TCP 8080 を保持し、新しいコピーは空いている方のポートだけをつかみます。その結果、HUD は黙って
*古い* プロセスを出し続けます — ページは生きているように見えますが、イベントログは更新されず、
パケットは誤ったブレインに送られます。デモの前には、以前の「JARVIS brain」ウィンドウを閉じるか、
次のようにします：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
:::

{/* TODO(image): HUD のスクリーンショットをここに追加 — アイアンマンのバスト、アークリアクター、9 個のコマンドボタン、イベントログ。 */}

```powershell

```
- **左側**：発話すべきフレーズがそのままラベルになっている 9 個のコマンドボタン；
  **1–9** キーは同じ id を送信するため、声を出さずにテストできます
{/* TODO(image): add a HUD screenshot here — Iron Man bust, arc reactor, nine command buttons, event log. */}

On screen:

- the **Iron Man wireframe bust** with an arc reactor that pulses with the music
- **left**: nine command buttons labelled with the exact phrase to say; keys
  **1–9** send the same ids, which is how you test without speaking
- **左上**: ステータスとボードが聞き取ったフレーズ；**右上**:
  `LINKED` / `NO LINK`、PC のアドレス、および時計
- **右下**: イベントログ（新しいものが先頭）；**中央下**: 天気、タスク、
  ジョーク、モデル回答のカード

ボードが手元になくても大丈夫です。ブレインは直接動かせます：

```powershell
python sim.py 1        # play music
python sim.py 4        # tell a joke
python sim.py demo     # 1 -> 2 -> 4 -> 5 with pauses
```

`config.json` には会場設定が入っています：`esp_ip`（最後に認識したボードのアドレス。
自動で更新されます）、`audio_sink`（`speaker` はロボットへストリーミング、`pc` は
ローカル再生）、`default_track`、`weather_lat` / `weather_lon`、そして
`openrouter_key` — キーを空のままにすると、ジョーク／回答はあらかじめ用意された定型文を使います。
ファイルに書き込む代わりに、環境変数 `OPENROUTER_API_KEY` を使うことを推奨します。

同梱のモデル一覧はすべて `:free` ルートであり、これらは競合が激しいです：
ログに `HTTP 429 … rate-limited upstream` と出ても正常で、キーが無効という意味ではありません。
ブレインは `openrouter_model` → `openrouter_fallbacks` → 定型文 の順に試行するため、
**「モデルに質問する」と回答が返るまで 15〜25 秒かかる**ことがあり、ときどき
オフラインリストから回答します。キーそのものの確認は、単一の返信を眺めるのではなく、
`https://openrouter.ai/api/v1/key` に対して `curl` を使って行ってください。

:::note 音声応答には Windows が必要です
ブレインは Windows の **System.Speech** で音声を合成し、その WAV を reSpeaker に
ストリーミングします。macOS や Linux でもウェイクワード、コマンド、カード、ログ、
音楽はすべて動作しますが、JARVIS は話しません。
:::

## 制限事項

- **英語のみ** — このビルドの MultiNet モデルは `mn7_en` です。
- **すべて 16 kHz** — およそ 8 kHz のオーディオ帯域。音声やキューには十分ですが、
  ハイファイではありません。
  - **同時ストリームは 1 つだけ** — 新しいサウンドが前のサウンドを止めます。
- **PC に届く処理には起動時に WiFi が必要** — ボードはオフラインでも
  ウェイクして点滅しますが、アクションは届きません。
  - **ウェイクモデルは TTS で学習** されており、「Hi ESP」よりも発音に敏感です。
  騒がしい環境ではしきい値を再調整してください。

## リソース

- プロジェクト（ファームウェア、ブレイン、HUD）: [KasunThushara/reSpeaker_44_wakeword](https://github.com/KasunThushara/reSpeaker_44_wakeword)
- ボード紹介とファームウェア更新: [reSpeaker XVF3800 44mm](https://wiki.seeedstudio.com/ja/respeaker_44mm_introduction/)
- XMOS ファームウェアイメージ: [reSpeaker_XVF3800_4MIC_44mm](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- XIAO セットアップ: [XIAO ESP32-S3 Getting Started](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started/)
- ESP-SR モデルと API: [espressif/esp-sr](https://github.com/espressif/esp-sr)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

