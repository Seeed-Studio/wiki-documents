---
description: XIAO 1.14'' IPS Display (ESP32-S3) の各オンボードペリフェラル向けの、単体で動作する機能別デモ集です。画面、IMU、PDM マイクおよび I2S オーディオ（ボイスバー + フラッシュレコーダー）、Grove I2C、ボタン、バッテリー電圧検出をカバーします。
title: オンボードペリフェラルの使い方
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - Function
  - 1.14
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_1.14_inch_display_esp32s3
sku: 100086099
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/25/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-25'
url: https://wiki.seeedstudio.com/ja/function_1.14_inch_display_esp32s3/
---

# オンボードペリフェラルの使い方

このページでは、1.14'' IPS Display の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめています。各セクションは独立しているため、他を読むことなく、自分のユースケースに合うものだけを選んで使うことができます。

:::tip
このページのデモ GIF は、短く収めるために再生速度を上げています。
:::

:::note
このページのすべてのデモは、[Getting Started](/ja/getting_started_1.14_inch_display_esp32s3) で説明している **esp32 Boards by Espressif (3.3.11)** に加え、以下の手順で手動インストールする **Seeed_GFX2** ライブラリが必要です。
:::

- **Seeed_GFX2（手動インストール）** — このライブラリは Library Manager には登録されていないため、手動でインストールする必要があります：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Seeed_GFX2 をダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 1.** 上のボタンをクリックして、`Seeed_GFX2` v1.0.0 を ZIP ファイルとしてダウンロードします（チュートリアルの再現性を保つため、リリースタグに固定されています）。あるいは、[Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) からリポジトリを clone しても構いません。

**Step 2.** Arduino IDE で **Sketch > Include Library > Add .ZIP Library...** を開き、ダウンロードした ZIP を選択します。IDE は `library.properties` を読み取り、正しい `Seeed_GFX2` フォルダに自動的にインストールします — 展開したフォルダ名を変更する必要はありません。（代わりに手動インストールする場合は、アーカイブを解凍し、展開されたフォルダ名を `Seeed_GFX2` に変更してから `Documents/Arduino/libraries/` に配置します。）

**Step 3.** 新しいライブラリを認識させるため、Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、`Board` + `Panel Config` というレイヤードアーキテクチャ上に構築された Seeed Studio のグラフィックスライブラリです。各デモは、単一の `display.begin<Board_..., Config_...>()` 呼び出しでディスプレイを初期化します。**Board** テンプレートがピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** が 135×240 の解像度、色順序、反転設定を組み込みます。`driver.h` や手動のピン設定は不要です。
- このボードでは、デモは `Board_XIAO_1inch14_LCD<13, 12>`（RST=13, BL=12）と `Config_Seeed_1inch14_LCD_ST7789`（135×240）を使用します。いくつかのデモでは、BGR カラー順序用にスケッチローカルな `Config_XIAO_1inch14_LCD_ST7789_BGR` オーバーライドを定義しています。
- **IMU** は、これらのデモでは I2C（`Wire`）経由で直接読み取っており、外部 IMU ライブラリは不要です。**PDM マイク** と **I2S 出力** は ESP-IDF 5 のドライバ（`driver/i2s_pdm.h`、`driver/i2s_std.h`）および `LittleFS` を使用しており、いずれも esp32 ボードパッケージに含まれています。
- 1.14'' IPS Display には **タッチコントローラも SD カードスロットもない** ため、タッチや SD 用のライブラリは不要です。
:::

## デモコードの入手

このページのすべてのデモは、`code_GFX2/Function/` ディレクトリ以下の [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) リポジトリに含まれています。各デモは 1 つの `.ino` スケッチを含むフォルダになっています。GitHub の Web ビューから `.ino` のソースだけをコピーするのではなく、**必ずフォルダ全体をダウンロード**してください。

**オプション A — リポジトリを ZIP としてダウンロード（推奨）：**

1. [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) を開き、**Code > Download ZIP** をクリックして、任意の場所にアーカイブを展開します。
2. `code_GFX2/Function/` に移動し、各デモの **Code location** 行に示されているフォルダを開きます。たとえば、このボード向けの GraphicTest デモは `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest/` にあります。
3. **`.ino` ファイルをダブルクリック**して Arduino IDE で開きます。

**オプション B — git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

その後、clone した `code_GFX2/Function/...` フォルダからデモの `.ino` ファイルを開きます。

## 画面表示 — GraphicTest

このデモは、1.14 インチ ST7789 IPS パネル（135×240）上でフルグラフィックスベンチマークを実行し、カラーバー、線、矩形、円、三角形、角丸矩形、テキスト、ピクセルグラデーションを網羅します。画面が正しく配線されているか、すべての描画呼び出しが期待どおり動作するかを確認するために使用できます。

**Code location:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作概要

このスケッチは **Seeed_GFX2** を介して ST7789 IPS パネルを初期化し、その後 10 種類のグラフィックスプリミティブを順番に実行します。それぞれの実行時間を `micros()` で計測し、結果をシリアルモニタに出力します。

ディスプレイは次の 1 回のテンプレート呼び出しで初期化されます：

```cpp
display.begin<Board_XIAO_1inch14_LCD<13, 12>,
              Config_Seeed_1inch14_LCD_ST7789>();
```

**Board** テンプレートはピンマップを保持しており、CS=D2、DC=D3、SCK=D8、MOSI=D10 です。また、その `<RST, BL>` テンプレートパラメータには生の GPIO 番号を指定するため、`<13, 12>` は RST=GPIO13（D17）、BL=GPIO12（D18）を意味します。**Panel Config** は 135×240 の解像度、色順序、反転設定（`invert = true`）を組み込んでいるため、`driver.h` や手動の `invertDisplay()` 呼び出しは不要です。

### デモの実行手順

**Step 1.** Arduino IDE で `xiao_esp32s3_114_graphictest.ino` を開きます。

**Step 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択します。

**Step 3.** **Upload** をクリックします。

**Step 4.** **Tools > Serial Monitor**（115200 baud）を開きます。パネルサイズに続いて、各テストのタイミング出力が表示されるはずです：

```
=== XIAO ESP32-S3 Plus 1.14 graphic test ===
LCD width: 135
LCD height: 240
Color bars: 96.02 ms
Lines: 2634.02 ms
Fast lines: 143.65 ms
Rectangles: 113.85 ms
Filled rectangles: 340.06 ms
Circles: 358.57 ms
Triangles: 378.17 ms
Round rectangles: 163.69 ms
Text: 1458.63 ms
Pixel gradient: 4670.28 ms
Graphic test finished.
```

画面上では、各テストパターンが約 1 秒間表示され、その後次のパターンに切り替わります。すべてのテストが完了すると、青い角丸枠付きの「Graphic / Finished」画面が表示されます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

スケッチがすべてのパターンを実行し終えると、画面には「Graphic / Finished」というメッセージと、その下に「Reset to rerun」と表示されます。テストを再度実行するには、ボードをリセットしてください。

---

## IMU

1.14'' IPS Display には、オンボードの **LSM6DS3** 6 軸 IMU（3 軸加速度センサ + 3 軸ジャイロ）が搭載されており、I2C で D4/D5 に接続され、アドレスは **0x6A** です。**D14** 上のモーション割り込みラインは、ハードウェアウェイクアップとジェスチャ検出をサポートします。

:::note
オンボード IMU は **LSM6DS3** です（ボードの回路図および I2C アドレス `0x6A` から確認済み）。Electronic Quicksand デモは、防御的なフォールバックとして QMI8658 互換センサを探索します。Raise to Wake デモは、オンボード LSM6DS3 のウェイクアップレジスタを対象としています。
:::

以下のデモでは、IMU を I2C（`Wire`）経由で直接読み取っており、外部 IMU ライブラリは不要です。

<a id="imu-quicksand"></a>

### デモ 1: Electronic Quicksand

このデモでは、画面をインタラクティブな流体シミュレーションに変えます — 重力に応じて流れ、落ち着く金色の砂粒が、オンボード 6 軸 IMU で計測された重力に従って動きます。ボードを傾けると、砂がリアルタイムにその方向へと移動します。

**Code location:** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このシミュレーションでは、135×240 の画面上に **22×40 の占有グリッド** を重ね合わせており、各セルは 6×6 ピクセルです。グリッド内には約 **150 個のパーティクル** が配置されており、それぞれ位置、速度、およびゴールドのカラ―グラデーションを持ちます。

IMU は I2C（D4/D5）経由で読み取られます。スケッチは既知の 2 つのアドレスで IMU を探索し、まず QMI8658、次に LSM6DS3 を試し、応答した方を使用します。生の加速度値はローパスフィルタで平滑化され、重力ベクトルを導出するために使用されます。ボードを傾けると：

1. **重力ベクトルの更新** — 加速度センサーデータは指数移動平均で平滑化され、ジッターを防ぎます。
2. **パーティクルの速度** — 各パーティクルは重力ベクトルの方向に加速し、減衰と、フロー内での深さに基づくパーティクルごとの可動性係数が適用されます。
3. **セルの占有状態** — フローのより深い位置（重力に対して「下側」に近い）にあるパーティクルは可動性が低下し、リアルな詰まり（パッキング）効果を生み出します。
4. **差分レンダリング** — パーティクルが出入りしたセルのみを再描画することで、SPI トラフィックを最小限に抑え、アニメーションを滑らかに保ちます。

表面付近のパーティクルは自由に流れ（高い可動性）、より深く埋もれたパーティクルは密に詰まり（低い可動性）、実際の砂の挙動を模倣します。

### デモの実行

**Step 1.** Arduino IDE で `xiao_esp32s3_114_electronic_quicksand.ino` を開きます。

**Step 2.** ボードとポートを選択し、**Upload** をクリックします。

**Step 3.** アップロードが完了すると、画面の下部が金色のパーティクルで満たされます。ボードをさまざまな方向に傾けると、砂が重力に引かれているかのように流れます。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開き、初期化を確認します：

```
=== Electronic Quicksand 1.14 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

ボードを傾けると、パーティクルは低い側の端へ向かって流れます。ディスプレイを水平に置くと、デモは直前の重力方向を保持します。

---

### デモ 2: 持ち上げてスリープ解除

このデモは、IMU に内蔵された **ウェイクアップ割り込み** を **D14** で利用する **画面のスリープ／ウェイクシステム** を実装しています。8 秒間操作がないと画面が自動的にオフになり（バックライトオフ + ESP32 のライトスリープ）、デバイスを持ち上げたり動かしたりすると即座に復帰します。

**コードの場所：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このデモでは、LSM6 互換 IMU の **組み込みウェイクアップイベント検出器** を使用します。これは、加速度センサーデータを内部で監視し、モーションが設定可能なしきい値を超えたときに INT1 ピン（このボードでは D14 に接続）をアサートするハードウェア機能です。つまり、MCU が加速度センサーを継続的にポーリングする必要はありません。

**IMU 設定（LSM6 互換）：**

<div class="table-center">
  <table align="center">
    <tr><th>レジスタ</th><th>値</th><th>目的</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>BDU を有効化 + ブロックリード用のオートインクリメント</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度センサー @ 104 Hz、±2g</td></tr>
    <tr><td><code>CTRL2_G</code></td><td><code>0x40</code></td><td>ジャイロスコープ @ 104 Hz</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>組み込み割り込みを有効化</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>ウェイクアップしきい値（中〜低感度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>継続時間フィルタなし（応答性の高いウェイク）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>ウェイクアップを INT1 にルーティング</td></tr>
  </table>
</div>

**スリープ／ウェイクのフロー：**

1. **アクティブ状態** — 画面はオンで、バックライトは PWM 160。IMU データとバッテリー電圧が定期的に更新されます。カウントダウンタイマーには自動スリープまでの残り秒数が表示されます。
2. **自動スリープ** — 8 秒間アクティビティがないと、スケッチはバックライトをオフにし、「Sleeping... Pick up device to wake」というメッセージを表示し、`esp_sleep_enable_gpio_wakeup()` を使って D14 をウェイクアップソースとして設定し、ESP32 をライトスリープに入れます。
3. **ウェイクアップ** — ユーザーがボードを持ち上げると、IMU がモーションを検出して D14 を HIGH にアサートします。ESP32 はライトスリープから復帰し、UI を再描画します。

**手動テストボタン：**

<div class="table-center">
  <table align="center">
    <tr><th>ボタン</th><th>ピン</th><th>動作</th></tr>
    <tr><td>USR1</td><td>D6</td><td>強制スリープ</td></tr>
    <tr><td>USR2</td><td>D7</td><td>強制ウェイク</td></tr>
  </table>
</div>

### デモの実行

**Step 1.** Arduino IDE で `xiao_esp32s3_114_wakeup.ino` を開き、ボードとポートを選択して **Upload** をクリックします。

**Step 2.** 画面には電源状態、モーションデータ、カウントダウンタイマーを備えたダッシュボードが表示されます。ボードを 8 秒間静置すると、自動的にスリープします。

**Step 3.** ボードを持ち上げるか、軽く振ると、画面が即座に復帰します。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開き、初期化を確認します：

```
=== XIAO ESP32-S3 Plus 1.14 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

スリープ解除中は、画面にリアルタイムのモーションデータが表示されます。8 秒間静止すると画面が暗くなり、ESP32-S3 はライトスリープに入ります。デバイスを持ち上げると、画面は一瞬で復帰し、ウェイクカウンターがインクリメントされます。

---

## マイク & スピーカー

1.14'' IPS Display には、オーディオ入力用のオンボード **PDM（Pulse Density Modulation）デジタルマイク** と、外部スピーカー／アンプを駆動するための I2S 出力パッドが搭載されています。このセクションでは 2 つのデモを紹介します。追加ハードウェア不要でマイク入力をリアルタイムに可視化する **Voice Bar** と、オンボード Flash に音声を録音し、外部 I2S アンプから再生する **Flash Recorder** です。

<div class="table-center">
  <table align="center">
    <tr><th>ピン</th><th>信号</th><th>機能</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>マイクへの PDM クロック出力</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>マイクからの PDM データ入力</td></tr>
  </table>
</div>

### デモ 1: Voice Bar

このデモでは、PDM マイクのリアルタイムオーディオ入力を、ダイナミックなイコライザー風の波形とセグメント化されたボリュームバーとして可視化します。オンボードマイクに向かって話したり、手を叩いたり、息を吹きかけたりすると、バーが即座に反応する様子が確認できます。外部ハードウェアは不要です。

**コードの場所：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_voice_bar/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_voice_bar" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 動作の仕組み

このスケッチは、ESP32-S3 の I2S ペリフェラルを **PDM RX モード** に設定し、ESP-IDF v5 ドライバ API（`driver/i2s_pdm.h`）を使用してオンボード PDM マイクをキャプチャします。これには **Espressif 製 esp32 Boards 3.x** が必要であり、core 2.x の旧 `i2s_config_t` API ではコンパイルできません。

:::note
ESP-IDF v5 の API（`i2s_new_channel()` / `i2s_channel_read()`）は、このデモの nRF52840 版で使用している nRF52 の `PDM` ライブラリとは異なります。nRF52840 のコードを移植する場合は、PDM のセットアップを完全に置き換える必要があります。
:::

マイクは **16 kHz モノラル** でサンプリングされ、256 サンプルの DMA バッファ（4 つのディスクリプタ）に格納されます。`loop()` 内で `i2s_channel_read()` がバッファを取得し、DC オフセットを除去し、ピーク振幅を計算し、波形ビジュアライザ用に信号を 27 ビンにダウンサンプリングします。また、EMI／結合ノイズを低減するために、`gpio_set_drive_capability()` を使用して PDM クロックのドライブ能力も下げています。

画面は3つのゾーンに分かれています：

<div class="table-center">
  <table align="center">
    <tr><th>ゾーン</th><th>位置</th><th>説明</th></tr>
    <tr><td><strong>波形</strong></td><td>上部 (y=30–95)</td><td>27本のバーからなるイコライザビジュアライザ。生のサンプルをダウンサンプリングし、中央のベースラインを中心に対称なバーとして描画します。波形の色は平滑化された音量に追従し、緑 (&lt;50%)、黄 (50–90%)、赤 (&gt;90%) で表示されます。</td></tr>
    <tr><td><strong>パーセンテージ</strong></td><td>中央</td><td>大きな数値の音量パーセンテージ (0–100%)。緑 (&lt;50%)、黄 (50–90%)、赤 (&gt;90%) に色分けされます。</td></tr>
    <tr><td><strong>ボリュームバー</strong></td><td>下部 (y=130–225)</td><td>10セグメントのバー（緑/黄/赤のグラデーション）。PDMピークからの平滑化された音量で更新されます。</td></tr>
  </table>
</div>

**信号処理：**

1. **I2S PDM RX** — `i2s_channel_read()` が 256 個の PDM サンプルを取得します。スケッチは DC オフセット（平均値）を除去してピークが実際の大きさを反映するようにし、その後ピークの大きさを計算します。
2. **正規化** — `VOL_FLOOR` (20) 未満のピーク値は無音として扱われます。`VOL_CEIL` (2400) を超える値は 100% に飽和します。その間の値は線形マッピングにより 0.0〜1.0 の音量レベルに変換されます。
3. **指数平滑化** — 表示される音量はジッタを避けるため、20% のミックス係数（`SMOOTH = 0.20`）で平滑化されます。無音時には音量はフレームごとに 6% ずつ減衰します。
4. **差分レンダリング** — ボリュームバーとパーセンテージラベルは値が変化したときのみ再描画され、SPI トラフィックを最小限に抑えます。

#### デモの実行

**ステップ 1.** Arduino IDE で `xiao_esp32s3_114_voice_bar.ino` を開きます。

**ステップ 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開きます。次のような表示が見えるはずです：

```
=== Voice Bar | XIAO ESP32-S3 Plus 1.14 ===
[MIC] PDM RX ready (ESP-IDF v5)
[MIC] ready
```

**ステップ 5.** マイクに向かって話す、手を叩く、息を吹きかけるなどしてください。波形とボリュームバーがリアルタイムに反応します。音量が上がるにつれてパーセンテージラベルの色が変化します。

#### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_voice_bar.gif" style={{width:500, height:'auto'}}/></div>

無音時には波形はフラットで、ボリュームバーは空（0%）です。マイクに向かって話すとイコライザバーがアニメーションし、ボリュームバーは緑から黄、赤へと満たされていきます。パーセンテージラベルはリアルタイムに更新されます。

---

### デモ 2: フラッシュレコーダー

このデモでは、オンボードの PDM マイクから 5 秒間の音声をオンボードの Flash メモリに録音し、その後 I2S 出力に接続された外部スピーカーから再生します。録音用のボタンを 1 つ、再生用のボタンをもう 1 つ押します。

**コードの場所：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### ハードウェアセットアップ

再生には外部の **I2S オーディオアンプとスピーカー** が必要です。このデモは、ボードの I2S 出力パッドに接続された **MAX98357A** ブレークアウト用に作成されています：

<div class="table-center">
  <table align="center">
    <tr><th>I2S パッド</th><th>XIAO ピン</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>LRC</td></tr>
  </table>
</div>

I2S パッド（3V3、GND、D11、D12、D13）は、ディスプレイボードの下部拡張パッドグループに引き出されています。

### 動作概要

**録音** — オンボードの **PDM (Pulse Density Modulation) デジタルマイク** は、PDM RX モードに設定された ESP32-S3 の I2S ペリフェラルを通してサンプリングされます。ESP-IDF v5（Arduino core 3.3.11）では、新しいドライバ API（`driver/i2s_pdm.h`）を使用します。マイクは **16 kHz モノラル**、各 256 フレームの DMA ディスクリプタ 4 個でキャプチャされます。**USR1** を押すと、スケッチは 5 秒間の音声を RAM バッファにサンプリングし、その後 `LittleFS` を使ってオンボード Flash に WAV ファイル（`/REC_RAW.WAV`）として書き込みます。

PDM マイクが起動した後、スケッチは録音開始時の立ち上がり過渡を低減するため、キャプチャされた最初の **300 ms** のデータをウォームアップデータとして破棄します。

スケッチが **7 秒** 以内にすべてのサンプルをキャプチャできない場合、録音を停止し、録音ループでブロックされたままにならないように **"Mic capture timeout"** を表示します。

**再生** — **USR2** を押すと、Flash から WAV を読み戻し、I2S ペリフェラルを介して標準（Philips）ステレオモードで D11/D12/D13 からストリーミングします。モノラルサンプルは両チャンネルに複製され、クリッピングを避けるために `0.75×` のゲインが適用されます。アンプが小型スピーカーを駆動し、録音内容を聞くことができます。

**画面上の状態：**

<div class="table-center">
  <table align="center">
    <tr><th>状態</th><th>説明</th></tr>
    <tr><td><strong>Ready</strong></td><td>"Flash Recorder" のタイトルと "USR1: record" および "USR2: play Flash WAV"（または "No saved recording"）が表示されます</td></tr>
    <tr><td><strong>Warm-up</strong></td><td>キャプチャ開始前に "Warming up mic..." と "Please wait" が表示されます</td></tr>
    <tr><td><strong>Recording</strong></td><td>キャプチャ中は "Capturing 5 seconds" が表示されます（進行状況のライブ表示はありません）</td></tr>
    <tr><td><strong>Error</strong></td><td>キャプチャが 7 秒を超えた場合、"Mic capture timeout" と "Try recording again" が表示されます</td></tr>
    <tr><td><strong>Saved</strong></td><td>"Done — Saved Flash WAV" と保存完了が表示され、その後 Ready に戻ります</td></tr>
    <tr><td><strong>Playback</strong></td><td>ストリーミング中は "Playing raw audio" が表示され、その後 "Finished" に変わります</td></tr>
  </table>
</div>

### デモの実行

**ステップ 1.** 上記の説明どおりに MAX98357A アンプとスピーカーを I2S パッドに接続します。

**ステップ 2.** Arduino IDE で `xiao_esp32s3_114_flash_record.ino` を開きます。

**ステップ 3.** ボードを選択します：**Tools > Board > esp32 > XIAO_ESP32S3_PLUS**（esp32 Boards **3.3.11** を使用）。

**ステップ 4.** **Tools > Partition Scheme > "Default with spiffs (3MB APP/1.5MB SPIFFS)"** を選択します。

**ステップ 5.** 正しい **Port** を選択し、**Upload** をクリックします。

:::caution
レコーダーは WAV ファイルを `LittleFS` に保存しますが、これは **SPIFFS** パーティションを使用します。ボードのデフォルトのパーティションスキーム（`16M Flash (2MB APP/12.5MB FATFS)`）には SPIFFS パーティションが含まれていないため、`LittleFS.begin()` は `false` を返し、画面には "Flash write failed / Check partition" と表示されます。録音を動作させるには、必ず上記の SPIFFS パーティションスキームを選択する必要があります。
:::

**ステップ 6.** **USR1 (D6)** を押して、オンボードマイクから 5 秒間の音声を録音します。録音中、画面には "Capturing 5 seconds" と表示されます。

**ステップ 7.** **USR2 (D7)** を押して、録音をスピーカーから再生します。

:::note
録音はオンボード Flash（`LittleFS`）に保存されるため、電源を切っても保持されます — 一度録音しておけば、後で再生できます。再度録音すると、前のファイルは上書きされます。
:::

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

USR1 を押すと、画面に "Capturing 5 seconds" と表示されます。5 秒後、WAV が保存されたことが確認されます。USR2 を押すと、接続されたスピーカーから音声が再生され、その間画面には再生ステータスが表示されます。

---

## Grove I2C

1.14'' IPS ディスプレイには専用の **Grove I2C コネクタ** があり、標準的な 4 ピン Grove ソケット（GND / 3V3 / SDA / SCL）上に D4（SDA）と D5（SCL）が引き出されています。D4/D5 は内部的にオンボード IMU と共有されています。

<div class="table-center">
  <table align="center">
    <tr><th>Grove ピン</th><th>XIAO ピン</th><th>備考</th></tr>
    <tr><td>GND</td><td>GND</td><td>共通グラウンド</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>3.3V 電源出力</td></tr>
    <tr><td>SDA</td><td>D4</td><td>I2C データ — オンボード IMU と共有</td></tr>
    <tr><td>SCL</td><td>D5</td><td>I2C クロック — オンボード IMU と共有</td></tr>
  </table>
</div>

:::note
D4/D5 は Grove コネクタとオンボード IMU で共有されています。IMU のアドレスは `0x6A` です。外部 I2C デバイスを接続する際は、このアドレスと競合しないことを確認してください。
:::

### デモ: SHT31 温度 & 湿度

このデモでは、Grove I2C コネクタに接続した **Grove SHT31** センサから温度と湿度を読み取り、その値を画面に表示します。スケッチは `Wire.h` を使って I2C 経由でセンサと直接通信し（SHT31 ライブラリは不要）、各読み取り値をセンサの CRC で検証します。

**コードの場所：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_sht31_temperature_humidity/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_sht31_temperature_humidity" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### ハードウェアのセットアップ

**Grove SHT31** 温度・湿度センサーを Grove I2C コネクタに接続します。センサーは 3.3V で給電され、I2C アドレス `0x44` で通信します：

<div class="table-center">
  <table align="center">
    <tr><th>Grove ピン</th><th>XIAO ピン</th><th>SHT31</th></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>VCC</td></tr>
    <tr><td>SDA</td><td>D4</td><td>SDA</td></tr>
    <tr><td>SCL</td><td>D5</td><td>SCL</td></tr>
  </table>
</div>

#### 動作の仕組み

スケッチは I2C (`Wire`) を使ってアドレス `0x44` の SHT31 を直接読み取ります：

1. **I2C スキャン** — 起動時に I2C バスをスキャンし、見つかったすべてのデバイスを報告します。
2. **シングルショット測定** — 高繰り返し精度のシングルショットコマンド（`0x24 0x00`、クロックストレッチなし）を送信し、20 ms 待ってから 6 バイトを読み取ります：温度の上位/下位バイト + CRC、湿度の上位/下位バイト + CRC。
3. **CRC チェック** — 各 16 ビット値を CRC バイトと照合して検証し、不一致の場合はエラー（配線不良またはモジュールの破損/ノイズ）として報告します。
4. **変換** — 生データを温度（`-45 + 175 × raw / 65535` °C）と相対湿度（`100 × raw / 65535` %）に変換します。

ディスプレイは `Board_XIAO_1inch14_LCD<13, 12>` と、スケッチローカルの `Config_XIAO_1inch14_LCD_ST7789_BGR`（135×240、BGR カラー順、反転）で初期化され、色が正しく表示されるようにします。画面にはライブの温度と湿度とともに「SHT31 OK」と表示され、読み取りに失敗した場合はエラーコード付きで「SHT31 ERROR」と表示されます。

#### デモの実行

**ステップ 1.** Arduino IDE で `xiao_esp32s3_114_sht31_temperature_humidity.ino` を開きます。

**ステップ 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択し、**Upload** をクリックします。

**ステップ 3.** **Tools > Serial Monitor**（115200 ボー）を開きます。次のような表示が見えるはずです：

```
=== XIAO ESP32-S3 1.14 SHT31 Temperature/Humidity ===
[PIN] SDA=D4 SCL=D5 address=0x44
[I2C] scan start
[I2C] found 0x44
[I2C] scan done
[SHT31] OK T=26.81 C H=48.32 %
```

画面には温度と湿度とともに「SHT31 OK」と表示され、1 秒ごとに更新されます。センサーが取り外されるか CRC チェックに失敗すると、画面にはエラーコード付きで「SHT31 ERROR」と表示されます。

#### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_sht31.gif" style={{width:500, height:'auto'}}/></div>

画面上の温度と湿度は 1 秒ごとに更新されます。センサーに息を吹きかけると、湿度の値が上昇します。

---

## ユーザーボタン

1.14'' IPS ディスプレイには、XIAO ESP32-S3 Plus に接続された **3 つの物理プッシュボタン** があります：

<div class="table-center">
  <table align="center">
    <tr><th>ボタン</th><th>ピン</th><th>ロジック</th><th>シルク印刷ラベル</th><th>ブレイクアウトパッド</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>アクティブ Low（押下 = LOW）</td><td>USR1</td><td>U1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>アクティブ Low（押下 = LOW）</td><td>USR2</td><td>U2</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>アクティブ Low（押下 = LOW）</td><td>USR3</td><td>U3</td></tr>
  </table>
</div>

### ボタンの読み取り

3 つのボタンにはボード上に 1 kΩ の外部プルアップ抵抗があり、デモコードではさらに XIAO の内部プルアップ（`INPUT_PULLUP`）も有効にしています。ポーリングによるシンプルなデバウンス付き読み取りは次のようになります：

```cpp
const int USR1 = D6;
const int USR2 = D7;
const int USR3 = D19;

void setup() {
  pinMode(USR1, INPUT_PULLUP);
  pinMode(USR2, INPUT_PULLUP);
  pinMode(USR3, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(USR1) == LOW) {
    Serial.println("USR1 (D6) pressed");
    delay(200); // simple debounce
  }
  if (digitalRead(USR2) == LOW) {
    Serial.println("USR2 (D7) pressed");
    delay(200);
  }
  if (digitalRead(USR3) == LOW) {
    Serial.println("USR3 (D19) pressed");
    delay(200);
  }
}
```

### 割り込みによるデバウンス

応答性が高くデバウンスされたボタン処理のために、短い安定待ち時間付きで GPIO 割り込みを使用できます：

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;
volatile bool btn3Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }
void btn3Isr() { btn3Flag = true; }

void setup() {
  pinMode(D6, INPUT_PULLUP);
  pinMode(D7, INPUT_PULLUP);
  pinMode(D19, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D6), btn1Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D7), btn2Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D19), btn3Isr, FALLING);
}

void loop() {
  if (btn1Flag) {
    btn1Flag = false;
    delay(30); // debounce settling time
    if (digitalRead(D6) == LOW) {
      // handle USR1 press
    }
  }
  if (btn2Flag) {
    btn2Flag = false;
    delay(30);
    if (digitalRead(D7) == LOW) {
      // handle USR2 press
    }
  }
  if (btn3Flag) {
    btn3Flag = false;
    delay(30);
    if (digitalRead(D19) == LOW) {
      // handle USR3 press
    }
  }
}
```

### ファクトリーダッシュボードでのデフォルト動作

プリロードされているファームウェアでは、ボタンは次のように割り当てられています（自分のコードでこれらを上書きできます）：

<div class="table-center">
  <table align="center">
    <tr><th>ボタン</th><th>ピン</th><th>動作</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>画面の明るさを切り替え（100% → 75% → 50% → 25% → 0% → 100%）</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>画面のオン/オフを切り替え / 最後の明るさに復帰</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>ヘッダータイトルを「Hello,XIAO!」と「Seeed」の間で切り替え</td></tr>
  </table>
</div>

ボタンのブレイクアウトパッド（基板上では U1、U2、U3 と表示）は、それぞれ D6、D7、D19 と同じ信号になっており、必要に応じて外部ボタンを接続できます。

---

## バッテリー電圧検出

このデモでは、オンボードのバッテリー分圧回路を **D16** で読み取り、1.14'' IPS ディスプレイに 2 つのライブの黄色い値として表示します：生の D16 分圧電圧と計算されたバッテリー電圧です。電圧値のみを表示し、バッテリー残量の推定や充電状態の報告は行いません。

**コードの場所：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

**バッテリー回路：**

ESP32-S3 Plus は、**D16** に接続されたオンボードの分圧回路を通して LiPo バッテリー電圧を読み取ります：

<div class="table-center">
  <table align="center">
    <tr><th>信号</th><th>ESP32-S3 ピン</th><th>機能</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>分圧されたバッテリー電圧を読み取るアナログ入力。内部で分圧回路（316K / 160K）に接続されています。<strong>このピンを外部用途に使用しないでください。</strong></td></tr>
  </table>
</div>

**分圧比：** R13 = 316 kΩ、R14 = 160 kΩ → **分圧比 = (316 + 160) / 160 ≈ 2.975**

**読み取り：**

スケッチは `Board_XIAO_1inch14_LCD<13, 12>` とスケッチローカルの `Config_XIAO_1inch14_LCD_ST7789_BGR`（135×240、BGR、invert = true）でディスプレイを初期化し、その後 **D16** を `analogReadMilliVolts()` を使って 12 ビット分解能・11 dB 減衰で 700 µs 間隔で 12 回サンプリングします。サンプルを平均して生の分圧電圧を求め、分圧比を掛けてバッテリー電圧（`Calc = D16 × 2.975`）を算出し、両方を中央寄せの 2 本の黄色いラインとして描画します。画面は、いずれかの値が意味のある量だけ変化したときのみ更新されます（D16 ≥ 0.02 V または Calc ≥ 0.05 V）。

:::note
充電状態の信号は ESP32-S3 の GPIO には接続されていません。このデモは電圧値のみを表示し、バッテリーの有無や充電状態の検出、バッテリー残量の推定は行いません。
:::

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_esp32s3_114_battery_status.ino` を開きます。

**ステップ 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** 画面を観察します — 2 本の黄色いラインが表示されます。1 本は生の D16 分圧電圧、もう 1 本は計算されたバッテリー電圧です。LiPo バッテリー（または USB-C ケーブル）を接続・取り外しして、値がどのように変化するか確認してください。

### 期待される結果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>電圧読み取り</strong>（D16 + Calc）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>バッテリーコネクタ</strong>（背面）</div></td>
    </tr>
  </table>
</div>

画面の上段には D16 分圧の生データ電圧が、下段には計算されたバッテリー電圧（`Calc`）が表示されます。LiPo バッテリーが接続されている場合、`Calc` はバッテリー端子電圧のおおよその値になります。USB 電源のみでも値が表示されることがあるため、`Calc` だけではバッテリーが接続されているかどうかを確認することはできません。

このデモは、シリアルモニタにも 1 秒ごとに診断用の行を出力します。例：

```
D16 1.39V | Calc 4.14V
```

---

## リソース

- **🗃️[PCB 設計ファイル]** [XIAO 1.14'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[回路図]** [XIAO 1.14'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D モデル]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **🖨️[3D プリント筐体]** [XIAO 1.14'' IPS Display Enclosure (by gokul)](https://www.printables.com/model/1843003-enclosure-for-xiao-114-ips-display-esp32nrf52840)
- **📄[データシート]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[工場出荷時ファームウェア]** [XIAO 1.14'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[デモ]** [XIAO Display Board デモコード](https://github.com/Seeed-Projects/Display-Gadgets) — すべての機能デモは `code_GFX2/Function/114_ESP32/` ディレクトリ内にあります

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
