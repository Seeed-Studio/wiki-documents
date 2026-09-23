---
description: XIAO ESP32-S3 Plus タッチディスプレイの IMU センサを使い、画面を傾けて Reachy Mini ロボットを操作します — 体のスway、頭のヨー回転、うなずき動作を制御します。
title: Reachy Mini × XIAO 画面モーションコントロール
slug: /reachymini_development_cases_sway_screen
image: https://files.seeedstudio.com/wiki/reachymini/reachymini_sway_screen_demo.gif
keywords:
  - Reachy Mini
  - IMU
  - motion control
  - XIAO ESP32-S3
  - touch display
  - LSM6DS3
  - Arduino
  - Python
sku: 100090917, 114993666
last_update:
  date: 2026-09-22
  author: jingyizhang
translation:
  skip: [zh-CN]
createdAt: '2026-09-20'
updatedAt: '2026-09-22'
url: https://wiki.seeedstudio.com/ja/reachymini_development_cases_sway_screen/
---

# Reachy Mini × XIAO 画面モーションコントロール

**Reachy Mini** ロボットと **XIAO ESP32-S3 Plus タッチディスプレイ** を組み合わせ、内蔵 IMU センサ（LSM6DS3）を使って画面を傾けることで、ロボットの体のスway、頭のヨー（左右回転）、頭のピッチ（うなずき）を制御します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reachymini/reachymini_sway_screen_demo.gif"
    alt="Reachy Mini × XIAO Screen Motion Control Demo" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ Reachy Mini を入手 🤖</font></span></strong>
</a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ XIAO 1.47'' を入手 🖥️</font></span></strong>
</a>
</div>

<p align="center">
    <img src="https://img.shields.io/badge/Platform-Reachy%20Mini-blue.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Controller-XIAO%20ESP32--S3%20Plus-green.svg" alt="Controller" />
    <img src="https://img.shields.io/badge/Sensor-LSM6DS3%20IMU-orange.svg" alt="Sensor" />
    <img src="https://img.shields.io/badge/Language-Arduino%20%7C%20Python-yellow.svg" alt="Language" />
</p>

---

## デモ

| 操作 | ロボットの反応 | 画面表示 |
|:-------|:---------------|:----------------|
| 画面を左右に傾ける | 体のスway + 頭のヨー（左右） | 顔文字が傾き方向に合わせて傾く |
| 画面を前後に傾ける | 頭のピッチ（上下のうなずき） | — |
| 画面を静止させる | ロボットも静止（手動トリガー） | 顔文字が中央に戻る |

画面には `≧∇≦` の顔文字が 90° 回転して縦向きに表示され、傾き方向に合わせて揺れます。XIAO 画面の表示パターンはカスタマイズ可能です — 独自パターンをコンパイルして書き込むには、[1.47 inch Touch Display Getting Started](https://wiki.seeedstudio.com/ja/getting_started_1.47_inch_touch_display_nrf52840/) チュートリアルを参照してください。

---

## ハードウェア

| ハードウェア | 説明 |
|:---------|:------------|
| [Reachy Mini Wireless Kit](https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html) | USB で PC に接続 |
| [1.47 inch Touch Display — XIAO ESP32-S3 Plus](https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html) | LSM6DS3 IMU センサ内蔵 |
| PC（Windows） | Python 3.11 以上 |
| USB-C ケーブル ×2 | 1 本は画面用、1 本はロボット用 |

---

## ソフトウェアセットアップ

### Step 1. Arduino CLI をインストール

[Arduino CLI Releases](https://github.com/arduino/arduino-cli/releases) からダウンロードしてインストールします。

### Step 2. ESP32 ボードサポートをインストール

```bash
arduino-cli config init
```

`~/.arduino15/arduino-cli.yaml` を編集し、`board_manager.additional_urls` の下に ESP32 ボード URL を追加します：

```yaml
board_manager:
  additional_urls:
    - https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

ESP32 コアをインストールします：

```bash
arduino-cli core install esp32:esp32
```

:::tip
画面用のボードターゲット（fqbn）として `XIAO_ESP32S3_Plus` を選択してください。
:::

### Step 3. Seeed GFX ライブラリをインストール

画面表示は [Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX) ライブラリに依存しています。GitHub からダウンロードし、Arduino のライブラリディレクトリにインストールしてください。

### Step 4. Python 依存パッケージをインストール

```bash
pip install reachy-mini pyserial numpy
```

---

## Step 1: プロジェクトコードを取得

```bash
git clone https://github.com/Genie-INSPIRE/reachy-mini-sway-screen.git
cd reachy-mini-sway-screen
```

プロジェクト内容：

| ファイル | 目的 |
|:-----|:--------|
| `reachy_sway_screen/reachy_sway_screen.ino` | 画面ファームウェア：IMU 読み取り + シリアル出力 + 顔文字描画 |
| `reachy_sync/sway_follow.py` | メイン制御プログラム：シリアル読み取り + ロボット制御 |
| `reachy_sync/start_daemon.py` | Reachy Mini デーモン起動スクリプト |

---

## Step 2: 画面ファームウェアを書き込む

### 1. 画面の COM ポートを確認

画面を USB 接続し、**デバイスマネージャー** を開いて、**USB-Serial/JTAG** の COM ポート（VID `0x303A`）を探します。

:::note
画面は VID によって自動検出されるため、COM ポート番号が変わっても問題ありません。
:::

### 2. コンパイルして書き込み

```bash
arduino-cli compile --fqbn esp32:esp32:XIAO_ESP32S3_Plus -u -p COM9 --warnings none reachy_sway_screen
```

`COM9` を実際の画面の COM ポートに置き換えてください。

### 3. ニュートラル位置のキャリブレーション

1. 画面を**机の上に水平に**置きます（できるだけ水平を保つ）
2. 2 秒待ちます（画面に `hold neutral` と表示されます）
3. 自動で 0.5 秒間サンプリングし、ニュートラル値を **NVS** に保存します（電源を切っても保持されます）
4. 再キャリブレーションするには：シリアルツール（115200 ボー）から画面に文字 `c` を送信します

:::caution
初回使用時や画面を交換したときは必ずニュートラル位置をキャリブレーションしてください。そうしないと傾き角度がずれてしまいます。
:::

---

## Step 3: ロボットデーモンを起動

### 1. ロボットの COM ポートを確認

ロボットを USB 接続し、デバイスマネージャーで **CH343 チップ** の COM ポート（VID `0x1A86`）を探します。

### 2. COM ポートを設定

`reachy_sync/start_daemon.py` を編集し、`COM14` を実際のロボットの COM ポートに変更します：

```bash
# Open start_daemon.py in an editor, change COM14 to your actual port
```

### 3. 起動

```bash
cd reachy_sync
python -u start_daemon.py
```

`Uvicorn running on http://127.0.0.1:8000` と表示されれば成功です！

:::tip
ブラウザで http://127.0.0.1:8000/ を開き、デーモンが動作していることを確認してください。
:::

---

## Step 4: メイン制御プログラムを実行

```bash
cd reachy_sync
python -u sway_follow.py
```

次のように表示されるはずです：

```text
screen connected on COMx
connected
ready: L/R tilt -> body sway + head yaw. F/B tilt -> head pitch.
```

画面を傾けると、ロボットがそれに追従して動きます！

---

## 動作原理

### データフロー

```text
Screen IMU (LSM6DS3)
  ax = left/right tilt, ay = forward/back tilt
  tilt = -asinf(ax), pitch = -asinf(ay)
  deadband filter + gain + low-pass filter
  Serial output: "sway <value> pitch <value> rad" (115200 baud)
        ↓
Python (sway_follow.py)
  Reads serial data
  Two-stage low-pass filter (0.22)
  Computes body_yaw, head yaw, head pitch
        ↓
Reachy Mini Daemon (port 8000)
  set_target(body_yaw, antennas, head)
        ↓
Robot motors execute
```

### 画面ファームウェアのパラメータ

| パラメータ | 値 | 説明 |
|:----------|:------|:------------|
| `GAIN` | 6.0 | 傾き増幅係数 — 大きいほど感度が高い |
| `FILT` | 0.25 | ローパスフィルタ係数 — 小さいほど滑らかだが応答が遅い |
| `AMP` | 0.7 | 最大出力振幅（rad）、約 40° |
| `deadband` | 0.008 | デッドゾーン（rad）、0.5° 未満の傾きを無視 |

### ロボット側パラメータ

| パラメータ | 値 | 説明 |
|:----------|:------|:------------|
| `HEAD_K` | 0.40 | 頭のヨーゲイン（左右） |
| `HEAD_PITCH_K` | 0.65 | 頭のピッチゲイン（上下） |
| フィルタ係数 | 0.22 / 0.22 | 2 段ローパス — 小さいほど滑らか |

### アンテナのミラー構造

Reachy Mini の 2 つのアンテナモータはミラー配置になっています：

- **右アンテナ**（インデックス 0）：正の値 = 左に傾く、負の値 = 右に傾く
- **左アンテナ**（インデックス 1）：正の値 = 右に傾く、負の値 = 左に傾く

両方のアンテナを同じ方向に傾けるには、符号を逆にして使います：右は減算、左は加算します。

---

## パラメータ調整

### 動きが重く感じる場合

- 画面側の `FILT` を大きくする（例：0.25 → 0.30）：画面側のフィルタを強くする
- ロボット側フィルタ係数を小さくする（例：0.22 → 0.15）：より滑らかだが応答は遅くなる

### 動きが遅い / 大きく傾けないと反応しない場合

- 画面側の `GAIN` を大きくする（例：6.0 → 8.0）：小さな傾きで大きく動くようにする
- ロボット側フィルタ係数を大きくする（例：0.22 → 0.30）：応答を速くする

### 頭の向きが逆になる場合

| 問題 | 解決策 |
|:--------|:---------|
| 左右が逆 | `.ino` 内の `tilt = -asinf(ax)` の符号を反転する |
| 上下が逆 | `.ino` 内の `pt = -asinf(ay)` の符号を反転する |

### 顔文字の向きが合わない場合

| 問題 | 解決策 |
|:--------|:---------|
| 回転角度 | `drawFigure(dyn + 1.5708f)` を変更 — `1.5708` = 90° |
| 傾き方向が逆 | `dyn = kaoDev * 2.0f` を `dyn = -kaoDev * 2.0f` に変更 |

---

## FAQ

<details>
<summary><strong>Q: 停電・電源断の後はどうすればいいですか？</strong></summary>

A: デーモンを再起動し（`python start_daemon.py`）、その後 `sway_follow.py` を起動してください。画面ファームウェアとニュートラルキャリブレーションは NVS に保存されており、失われません。

</details>

<details>
<summary><strong>Q: COM ポート番号が変わってしまいました。</strong></summary>

A: 画面は VID（`0x303A`）で自動検出されるため、設定変更は不要です。ロボットの COM ポートだけ `start_daemon.py` 内で更新してください。

</details>

<details>
<summary><strong>Q: ロボットが動きません。</strong></summary>

A: デーモンがポート 8000 で動作しているか確認してください（ブラウザで http://127.0.0.1:8000/ を開きます）。動作していない場合はデーモンを再起動してください。

</details>

<details>
<summary><strong>Q: 画面が表示されない、またはデータを送っていません。</strong></summary>

A: USB ケーブルを確認し、ファームウェアを書き直し、シリアルツール（115200 ボー）を使って `sway ... pitch ... rad` の出力を確認してください。

</details>

<details>
<summary><strong>Q: 頭の向きが逆です。</strong></summary>

A: 左右が逆 → `.ino` ファイル内の `tilt = -asinf(ax)` の符号を反転してください。上下が逆 → `pt = -asinf(ay)` の符号を反転してください。

</details>

---

## 技術サポート

- **プロジェクトリポジトリ**: [GitHub](https://github.com/Genie-INSPIRE/reachy-mini-sway-screen)
- **Issue を送る**: [Issues](https://github.com/Genie-INSPIRE/reachy-mini-sway-screen/issues)
- **フォーラム**: [Seeed Studio Forum](https://forum.seeedstudio.com/)
- **購入**: [Reachy Mini](https://www.seeedstudio.com/Reachy-Mini-Wireless-Kit-p-6724.html) | [XIAO 1.47'' Touch Display](https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html)

---

## 参考資料

- [Reachy Mini Getting Started](/ja/reachymini_getting_started)
- [1.47 inch Touch Display Getting Started](https://wiki.seeedstudio.com/ja/getting_started_1.47_inch_touch_display_nrf52840/)
- [Arduino CLI Documentation](https://arduino.github.io/arduino-cli/)
- [LSM6DS3 Datasheet](https://www.st.com/en/mems-and-sensors/lsm6ds3.html)
