---
description: "クリーンなマシンから、起動し録音でき、ホスト SDK から制御可能な reSpeaker Clip までのエンドツーエンドの手順 — カスタムまたは AI 支援ファームウェア作業の前提となるベースラインと、そもそもファームウェア作業が適切かどうかを判断する方法。"
title: reSpeaker Clip Firmware SDK 入門
keywords:
  - reSpeaker clip
  - firmware
  - sdk
  - getting started
  - nRF5340
  - Zephyr
  - NCS
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_firmware_quick_start
sku: 100020126
last_update:
  date: 07/28/2026
  author: Ray
createdAt: '2026-07-28'
updatedAt: '2026-07-28'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_firmware_quick_start/
---

# reSpeaker Clip Firmware SDK 入門

クリーンなマシンから、起動し録音でき、ホスト SDK から制御可能な reSpeaker Clip までのエンドツーエンドの手順です。これは、カスタムまたは AI 支援ファームウェア作業の前に必要となるベースラインであり、あなたのタスクに対してファームウェア作業が本当に適切な道かどうかも判断できます。

> **密閉デバイス。** Clip は密閉ハウジングで出荷されるため、ケースを開けない限り SWD/J-Link パッドにはアクセスできません。**エンドユーザーは USB または BLE 経由でアップグレード**し、プローブは使用しません。以下の SWD 書き込みは*開発*用のパスです（ケースを外したベンチ用ユニットやデバッグブレークアウト向け）。

## はじめに

**Firmware SDK** は、Nordic nRF5340 上で動作するデバイス側 Zephyr RTOS ファームウェアです（デュアルコア：アプリケーションコア + ネットワークコア）。これは、**デバイス側の挙動を変更する必要がある**開発者向けです — オーディオパイプライン、AT コマンド面や BLE GATT サービス、ボタン / OLED / ハプティクスのインタラクションモデル、電源や製品化戦略、あるいはカスタムハードウェアの立ち上げなどです。

チェックアウトしたファームウェアソースが唯一の正となる情報源であり、ドキュメントはそれを要約したものです。両者が食い違う場合は、ソースコードを優先してください。

## 適切な開発パスを選ぶ

すべてのタスクにファームウェア作業が必要なわけではありません。あなたの目的に合ったパスを選んでください：

| やりたいこと | 使うもの | ファームウェアに触れる？ |
|---|---|---|
| ホストやスマホから録音を制御し、ファイルをダウンロードしたい | **Basic SDK**（[sdk/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/sdk/)）または **モバイル SDK**（[mobile/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/mobile/)） | いいえ |
| オーディオパイプライン、AT/GATT、ボタン/OLED/ハプティクス、電源、またはハードウェアを変更したい | **Firmware SDK**（本ガイド + [Firmware Development Guide](/ja/respeaker_clip_firmware_development_guide)） | はい |
| AI エージェントに、ファームウェアの実際の制約内でリポジトリを変更させたい | [`skills/clip-dev/`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) スキル | はい |

Basic SDK とモバイル SDK は、BLE とデバイスの Wi-Fi AP 経由で Clip と通信し、ファームウェアソースを必要としません。アプリ統合のためにサポートされているパスです。

**デバイスファームウェアの対象外**（これらの機能は期待しないでください）：

- **クラウド文字起こし / AI 要約** — Clip は Opus を SD カードに録音し、文字起こしはデバイス外で実行されます。オンデバイスの音声認識パスはありません。
- **BLE リアルタイムオーディオストリーミング** — BLE リンクは AT コマンド、ファイル転送フレーム、およびオーディオの*エネルギーレベル*可視化通知のみを運びます。ライブオーディオはストリーミングしません。

## ファームウェアの機能とカスタマイズの境界

| 機能 | 実装済み？ | Basic/モバイル SDK から制御可能？ | ファームウェアでカスタマイズ可能？ |
|---|---|---|---|
| 録音の開始/停止/一時停止/再開/マーク | はい（`AT+START/STOP/PAUSE/RESUME/MARK`） | はい | はい（`clip_event.c`, `button.c`） |
| Normal/Enhanced モード | はい（`AT+MODE=normal\|enhanced`、永続化） | はい | はい（`audio.c` + モードごとの Kconfig） |
| Opus ビットレート/複雑度 | はい（モードごとの Kconfig） | いいえ — ビルド時のみ | はい（Kconfig） |
| ノイズ抑制（SpeexDSP NS） | 部分的 — Enhanced のみ、ブート時デフォルト、**ランタイム AT なし**（旧 `AT+NOISE` は削除） | いいえ | はい（Kconfig + `config.c`；ランタイムで公開するには AT ハンドラを追加） |
| 残響除去 | 部分的 — Enhanced のみ、ブート時デフォルト、**ランタイム AT なし** | いいえ | はい（Kconfig + `config.c`） |
| AGC | はい — 手書きの整数実装で常時オン | いいえ — 設定不可 | いいえ — `audio.c` を編集 |
| ハプティクスモーター | はい（`haptic.c`）、デフォルトでは無効（`CONFIG_CLIP_HAPTIC_MOTOR_ENABLED=n` だが、このアプリでは `prj.conf` が `=y` を設定） | いいえ | はい |
| ファイル転送（BLE + Wi-Fi UDP） | はい（`AT+DOWNLOAD/CANCEL`） | はい | はい（`transport.c`, `transfer.c`） |
| BLE リアルタイムオーディオストリーム | いいえ（エネルギーレベル通知のみ） | 該当なし | 対象外 |

登録済み AT コマンド一覧、プロトコルフレーム、アーキテクチャ、検証マトリクス、および量産/リリースの詳細は、[Firmware Development Guide](/ja/respeaker_clip_firmware_development_guide) に記載されています — このページは、開始に必要な内容だけを要約したものです。

## 録音モードとオーディオパイプラインに関する事実

> 以前のドキュメントでは `MODE_NORMAL` を **ステレオ** と説明していますが、これは誤りです。両方のモードは **モノラル** で録音します。

- **両方のモード**は、L+R マージによる**モノラル**録音です。`clip_event.c` は常に `audio_start_recording(AUDIO_MODE_MERGE)` を呼び出します。`MODE_NORMAL` はステレオ**ではありません** — 名前はレガシーです。
- **`MODE_NORMAL`**（デフォルト） = マージ + 手書きの DSP パスのみ（遅延調整マージ、100 Hz ハイパス、整数 AGC、ソフトリミッタ）。**SpeexDSP は使用しません。**
- **`MODE_ENHANCED`** = マージ + SpeexDSP ノイズ抑制と残響除去で、`mode == ENHANCED && noise_suppress > 0`（`audio.c:506`）のときに有効になります。`noise == 0` の場合、Enhanced は Normal と同じ挙動になります。
- Opus のビットレートと複雑度は、**モードごとの Kconfig 定数**（`CLIP_NORMAL_*`/`CLIP_ENHANCED_*`）であり、ランタイムで設定することはできません。
- モードは `AT+MODE=normal|enhanced`（永続化）または `AT+START mode=enhanced`（セッションのみ、有効だが永続化されない）で設定します。

## 前提条件

| ツール | 用途 | インストール |
|------|-----|---------|
| [NCS **v3.3.0**](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/index.html) ソース | Zephyr + nRF + nrfxlib + mcuboot のソースツリー。**v3.2.1 はサポート終了** — `main` は v3.3.0 専用の Kconfig を必要とし、それ以外ではビルドできません。 | `west`（[Set Up NCS](#set-up-ncs-v330) を参照） |
| Zephyr SDK **0.16.4** ツールチェーン | nRF5340 向け `arm-zephyr-eabi-gcc` コンパイラ/デバッガ | 別途インストール（[Set Up NCS](#set-up-ncs-v330) を参照） |
| `west` | Zephyr のメタツール（ビルド/フラッシュ） | `pip install west` |
| [`nrfutil`](https://www.nordicsemi.com/Products/Development-tools/nrf-util)（≥ 8.x、`device` + `mcu-manager` を含む） | フラッシュ後のリセット；USB シリアル DFU | Nordic サイト |
| Python **3.10+** | ホスト側テスト/SDK ツール（`clip-cli`, `udp_sync`, `decode_opus`） | python.org |
| J-Link（任意、開発用のみ） | ベンチユニットでの SWD 書き込み | SEGGER |

Python ツールの依存関係を一度インストールします：

```sh
pip install -r applications/clip/tests/requirements.txt
```

## ソースコードを取得する

このリポジトリは **Zephyr モジュール**です（`zephyr/module.yml` により、独自のボード、ドライバ、ライブラリを含みます）。任意の場所にクローンし、その後 NCS 環境からこのリポジトリを指すようにします。

> **検証済みベースライン。** このガイドは、ファームウェアタグ **`v0.0.9`**、NCS **v3.3.0**、ボード **`clip/nrf5340/cpuapp`**、Ubuntu 24.04 を対象としています。再現可能なビルドのために、動いている `main` ブランチをクローンするのではなく、同じタグに固定してください：

```sh
git clone --branch v0.0.9 https://github.com/Seeed-Studio/reSpeaker_Clip.git
cd reSpeaker_Clip
git describe --tags    # confirm: v0.0.9
```

**サポートされるハードウェア：** reSpeaker Clip（nRF5340 + nRF7002 + NPM1300 PMIC）。その他のボードリビジョンは本ガイドの対象外です。

## NCS v3.3.0 をセットアップする

NCS v3.3.0 は **west ワークスペース**としてインストールされます — NCS ソースツリーと、別途インストールされる **Zephyr SDK ツールチェーン**です。ここではリファレンス環境でのインストール方法を説明します。

> **`nrfutil toolchain-manager` を使用しないでください。** `nrfutil` v6.1.7 バイナリには実際には `toolchain-manager`/`self-upgrade` コマンドが含まれていないため、現在ファームウェア CI の NCS インストールステップは壊れています（[`firmware.yml`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/.github/workflows/firmware.yml) の実行が失敗しています）。代わりに、以下の west の手順を使用してください。すでに NCS v3.3.0（例：nRF Connect for Desktop 経由でインストール済み）の環境がある場合は、[Enter the NCS environment](#enter-the-ncs-environment--register-this-repo-as-a-module) に進んでください。

### 1. ビルド依存関係と `west` をインストールする

```sh
sudo apt install -y cmake ninja-build g++ make device-tree-compiler \
    python3 python3-pip git curl ca-certificates
sudo pip3 install --break-system-packages west
west --version          # expect west 1.x
```

### 2. NCS v3.3.0 ソース（west マニフェスト）をインストールする

これにより `~/ncs/v3.3.0` にワークスペースが作成され、NCS モジュール（zephyr、nrf、nrfxlib、mcuboot、HAL、crypto など）が取得されます — GitHub から約 2 GB です。

```sh
west init -m https://github.com/nrfconnect/sdk-nrf --mr v3.3.0 ~/ncs/v3.3.0
cd ~/ncs/v3.3.0
west update
```

### 3. Zephyr SDK ツールチェーンをインストールする（別途）

west ワークスペースは**ソース**を提供し、**コンパイラ**は Zephyr SDK から提供されます。[Zephyr SDK releases](https://github.com/zephyrproject-rtos/sdk/releases) からバージョン **0.16.4**（`*_linux-x86_64.tar.xz` アセット）をダウンロードし、展開して、一度セットアップを実行します：

```sh
cd ~
tar xf zephyr-sdk-0.16.4_linux-x86_64.tar.xz     # you downloaded this
cd zephyr-sdk-0.16.4
./setup.sh                                        # registers toolchains + udev rules
# → compiler at ~/zephyr-sdk-0.16.4/arm-zephyr-eabi/bin/arm-zephyr-eabi-gcc
```

> **Linux デバイスアクセス — `nrf-udev` + J-Link udev ルール。** root なしで USB/J-Link 経由のフラッシュやリセットを行うには、`nrf-udev`（Nordic の `.deb`）と SEGGER の udev ルールをインストールしてください。そうしないと、`/dev/ttyACMx` や J-Link プローブは root 専用になります。[nRF Util prerequisites](https://docs.nordicsemi.com/r/bundle/nrfutil/page/guides/installing.html/prerequisites) を参照してください。

### NCS 環境に入る + このリポジトリをモジュールとして登録する

```sh
source ~/ncs/v3.3.0/zephyr/zephyr-env.sh
export ZEPHYR_EXTRA_MODULES=$PWD     # the reSpeaker_Clip checkout
```

> **なぜ `ZEPHYR_EXTRA_MODULES` は環境変数であって、`-D` CMake 変数ではないのか。** Kconfig のモジュール検出は、CMake の設定*前*に実行されます。`-D` で渡すと到着が遅すぎるため、Kconfig はこのリポジトリのボード（`clip`）、ドライバ、ライブラリを認識できません。ビルドを行うのと同じシェルで設定するか、シェルプロファイルでエクスポートしてください。

**チェックポイント — 以下がすべて成功すれば、環境は準備完了です：**

```sh
west --version                   # west 1.x
arm-zephyr-eabi-gcc --version    # (Zephyr SDK 0.16.4) gcc 12.x
python3 --version                # Python 3.10+
echo $ZEPHYR_BASE                # .../ncs/v3.3.0/zephyr
```

## ストックファームウェアをビルドする

```sh
west build --build-dir build-clip --board clip/nrf5340/cpuapp applications/clip
```

完全なクリーンリビルド（MCUboot パッチの変更後やビルドディレクトリが古い場合に必須）を行うには、`--pristine` を追加します：

```sh
west build --build-dir build-clip --pristine --board clip/nrf5340/cpuapp applications/clip
```

これは**デフォルトで sysbuild** です — 1 回のコマンドで、カスタム署名付き MCUboot ブートローダー + アプリケーションコア + ネットワークコア BLE コントローライメージが生成されます。ボード側ですべての sysbuild の連携が用意されており、アプリごとの `sysbuild.conf` は不要です。

> **ボード識別子**: `clip/nrf5340/cpuapp` — `respeaker/...` では**ありません**。

> **再現性 — VM と実機。** インストール手順は、実ネットワークアクセスがある Ubuntu 24.04 を対象としています（複数 GB の NCS 取得には安定した GitHub 接続が必要で、QEMU/VM のユーザーモードネットワークでは厳しいことがあります）。QEMU/VM では*インストールとビルド手順*を試すことはできますが、実機の代わりには**なりません** — QEMU は nRF5340 デュアルコア、nRF7002、PDM マイク、SD、OLED、PMIC、実際の USB/BLE 動作をエミュレートできません。フラッシュ、トランスポート、オーディオ、およびリカバリは、必ず実際の Clip で検証する必要があります。

## 本番構成をビルドする

低消費電力バリアントです：UART コンソールと FS/UART ログバックエンドをオフにし、アイドル時 ≈170 µA（コンソールから約 570 µA 漏れるデバッグビルドと比較）。コンソール電流が重要になるバッテリー駆動／本番ビルドではこちらを使用してください。

```sh
west build --build-dir build-clip-prod --board clip/nrf5340/cpuapp applications/clip \
  -- -DSNIPPET_ROOT=$(pwd)/applications/clip -DSNIPPET=production
```

`SNIPPET_ROOT` は絶対パスである必要があります。`production` スニペットは `applications/clip/snippets/production/` にあります。

## フラッシュとリセット

```sh
west flash --build-dir build-clip          # flash both cores
nrfutil device reset --serial-number <JLINK-SN>
```

> **`--serial-number` は特定の J-Link を対象にします。** 単一のデバイスだけが接続されている場合にのみ省略してください — 複数のプローブがあると、素の `nrfutil device reset` ではどれを指すか曖昧になります。SN は `nrfutil device list` で確認するか、J-Link 本体に印字されているものを参照してください。

このボード特有の注意点が 2 つあります：

- **`west flash --reset` はここでは動作しません。** 常に `nrfutil device reset` で別途リセットしてください。
- **`--recover` は両方のコアを消去します**（ネットコアのアクセスポートロックをクリアします）。ネットコア AP が `b0n` ロックされている場合（例：以前にセキュアブートを行った後）にのみ使用し、日常的なフラグとしては使わないでください。

エンドユーザー（ケース装着済み、プローブなし）はこの手順を完全にスキップし、USB シリアル DFU を使用します — 後述の [Recover with USB Serial DFU](#usb-serial-dfu-でリカバリ) を参照してください。

## デバッグコンソールを開く

```sh
minicom -D /dev/ttyACM0 -b 921600
```

J-Link プローブも接続されている場合、J-Link が `ttyACM0` を占有し、Clip の UART0 ブリッジは `ttyACM1` に移動します — 「USB Single Serial」（J-Link ではない方）のポートを使用してください。

## スモークテストを実行する

合格条件：デバイスが起動し、BLE 経由で AT コマンドに応答し、有効な Opus ファイルを録音し、それを Wi-Fi 経由で取得できること。すべての AT 応答は JSON です — 成功時は `{"ok":true,"data":{...}}`、失敗時は `{"ok":false,"msg":"..."}` となります。

### 起動とステータス

OLED が点灯し、デバイスが IDLE 状態に到達します。任意の AT チャネル経由で確認します：

```
AT+GSTAT        →  {"ok":true,"data":{"state":"IDLE","battery":..,"mode":..,...}}
AT+VERSION      →  {"ok":true,"data":{"version":"0.0.6",...}}
```

### 録音 → 一覧表示 → ダウンロード（BLE 経由）

`clip-cli.py` は統合ホスト CLI です（デフォルトは BLE で、Wi-Fi にも対応）。デバイスがアドバタイズしている状態で：

```sh
# status over BLE
python applications/clip/tests/tools/clip-cli.py status

# record ~5s, stop, list sessions
python applications/clip/tests/tools/clip-cli.py record --duration 5
python applications/clip/tests/tools/clip-cli.py list
```

`AT+LIST` には新しいセッションが表示されるはずです（新しいものが先頭になるようソート）。Opus ファイルを BLE 経由で取得し、そのうち 1 つを WAV にデコードして、有効な音声であることを確認します：

```sh
python applications/clip/tests/tools/clip-cli.py sync --session <session_id>
python applications/clip/tests/tools/decode_opus.py recordings/<session_id>/0001.opus out.wav   # plays
```

### Wi-Fi プル（UDP 同期、CRC32 検証付き）

デバイスは有効化されると Wi-Fi AP を公開します。まず BLE 経由で：

```
AT+WIFI=on     →  {"ok":true,"data":{"ssid":"ClipAP_XXXX",...}}
```

次にホスト側から AP に接続し、セッションを同期します：

```sh
# SSID ClipAP_XXXX (last 4 hex of chip ID) · password 12345678 (default;
# becomes random after the first BLE pairing) · IP 192.168.4.1 · UDP 8089
python applications/clip/tests/tools/udp_sync.py --session <session_id>
```

4 つすべて — ステータス、録音、一覧表示／ダウンロード（デコード可能な Opus ファイル付き）、および Wi-Fi プル — が通れば、標準ファームウェアのベースラインは良好です。

## ビルド成果物をエクスポートする

まだ単一 zip のエクスポートはありません — タグトリガーの `scripts/build_release.sh`
+ `.github/workflows/release.yml` はまだ実装されていません。現時点では、両方のバリアントをビルドし、それぞれ 4 つの成果物を手動でコピーします：

```sh
VERSION=$(grep APP_VERSION_STRING build-clip/clip/zephyr/include/generated/zephyr/app_version.h | cut -d'"' -f2)
mkdir -p output/$VERSION

# Debug
cp build-clip/merged.hex            output/$VERSION/clip-$VERSION-debug-merged.hex
cp build-clip/merged_CPUNET.hex     output/$VERSION/clip-$VERSION-debug-merged_CPUNET.hex
cp build-clip/dfu_application.zip   output/$VERSION/clip-$VERSION-debug-ota.zip
cp build-clip/clip/zephyr/zephyr.signed.bin output/$VERSION/clip-$VERSION-debug-signed.bin
# Production
cp build-clip-prod/merged.hex            output/$VERSION/clip-$VERSION-production-merged.hex
cp build-clip-prod/merged_CPUNET.hex     output/$VERSION/clip-$VERSION-production-merged_CPUNET.hex
cp build-clip-prod/dfu_application.zip   output/$VERSION/clip-$VERSION-production-ota.zip
cp build-clip-prod/clip/zephyr/zephyr.signed.bin output/$VERSION/clip-$VERSION-production-signed.bin
```

リリースごとに：`*-merged.hex` / `*-merged_CPUNET.hex`（プログラマ用）、`*-signed.bin`（USB シリアル DFU 用）、`*-ota.zip`（BLE/USB mcumgr マルチイメージパッケージ）。

## USB シリアル DFU でリカバリ

ベンチビルドによってデバイスが不正な状態になった場合は、**1200 ボー USB トリガー**を使用します — プローブもケースの開封も不要です。すべての clip アプリにはこれが組み込まれています（ボードレベル、`lib/clip_usb_dfu`）。

> **開発用リカバリ vs. 公式リリース。** これは、上でエクスポートした *自前ビルド* の `*-signed.bin` へのリカバリです。公開済みでダウンロード可能なリリースパッケージ（GitHub Releases + `scripts/build_release.sh`）は**まだ利用できません** — 「公式リリースに戻す」手順はそのパイプライン待ちです。それまでは、これは開発用リカバリパスとして扱ってください；公開リリースを保証するものではありません。

1. clip アプリはデフォルトで USB をオフにしています — まず BLE 経由で `AT+USB=on` を送信します（サンプルとカスタムアプリでは、デフォルトの CDC 自動有効化により USB がオンになるので、この手順は不要です）。その後、CDC-ACM ポートを 1200 ボーで開いてリカバリをトリガーします：

   ```sh
   python3 -c "import serial; s=serial.Serial('/dev/ttyACMx',1200); s.close()"
   ```

   （USB を挿す際にユーザーボタンを押し続けてもリカバリモードに入ります。）

2. 新しい CDC-ACM ポートが現れます — **PID `0x8069`**（実行中のアプリは `0x0069` で、`0x8000` ビットがブートローダーモードを示します；どちらも Seeed の VID `0x2886`）。署名済みリリースアプリをアップロードし、リセットします：

   ```sh
   nrfutil mcu-manager serial image-upload --firmware clip-<version>-signed.bin --serial-port /dev/ttyACMx
   nrfutil mcu-manager serial reset     --serial-port /dev/ttyACMx
   ```

MCUboot は RSA 署名を検証し、新しいアプリを起動します；ブートローダーパーティションは一切変更されません。完全なガイド（BLE OTA、ボタン経由のパス、`mcumgr`、nRF Connect、トラブルシューティング）は [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md) にあります。

## 次に進むには

- **システムアーキテクチャ、プロトコル、更新／リカバリ、検証、生産** → [Firmware Development Guide](/ja/respeaker_clip_firmware_development_guide)（包括的なリファレンス）。
- **ビルド／フラッシュ／電源／落とし穴（完全なリファレンス）** → [CLAUDE.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/CLAUDE.md)。
- **コピーして使えるサンプルアプリ** → [samples/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/samples/)。
- **AI 支援開発** → [`skills/clip-dev/`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) — このスキルをあなたの AI エージェントに読み込んでください。その `SKILL.md` と 9 つのリファレンスには、すでにこのプロジェクトの実際の制約がエンコードされています。そこには、**ビットレート、コーデック複雑度、AGC、ノイズ抑圧、残響除去のランタイムコマンドは存在せず** — オーディオモードは `normal` か `enhanced` のみであることも含まれます。

Basic SDK（`clip-cli` / SenseCraft Voice アプリ）から起動・録音・制御可能な標準ビルドは、このリポジトリで AI 支援またはカスタムファームウェア開発を行うための前提条件です。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
