---
description: XIAO 1.14'' IPS Display (ESP32-S3) の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめたページです。画面、IMU、PDMマイクとI2Sオーディオ（ボイスバー＋フラッシュレコーダー）、Grove I2C、ボタン、バッテリー電圧検出をカバーします。
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

このページでは、1.14'' IPS Display の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめています。各セクションはそれぞれ独立しているため、自分のユースケースに合うものだけを選んで読み進めることができます。

:::tip
このページのデモGIFは、短く収めるために再生速度を上げています。
:::

:::note
このページのすべてのデモは、[Getting Started](/ja/getting_started_1.14_inch_display_esp32s3) で説明している **esp32 Boards by Espressif (3.3.11)** が必要であり、さらに以下の手順で手動インストールする **Seeed_GFX2** ライブラリが必要です。
:::

- **Seeed_GFX2（手動インストール）** — このライブラリは Library Manager には登録されていないため、手動でインストールする必要があります：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 1.** 上のボタンをクリックして、`Seeed_GFX2` v1.0.0 を ZIP ファイルとしてダウンロードします（チュートリアルの再現性を保つため、リリースタグに固定されています）。あるいは、[Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) からリポジトリをクローンしても構いません。

**ステップ 2.** Arduino IDE で **Sketch > Include Library > Add .ZIP Library...** を開き、ダウンロードした ZIP を選択します。IDE は `library.properties` を読み取り、正しい `Seeed_GFX2` フォルダに自動的にインストールします — 展開したフォルダ名を変更する必要はありません。（代わりに手動インストールする場合は、アーカイブを解凍し、展開されたフォルダ名を `Seeed_GFX2` に変更してから `Documents/Arduino/libraries/` に配置します。）

**ステップ 3.** 新しいライブラリを認識させるために Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、`Board` + `Panel Config` というレイヤー構造のアーキテクチャ上に構築された Seeed Studio 製のグラフィックスライブラリです。各デモでは、`display.begin<Board_..., Config_...>()` を 1 回呼び出すだけでディスプレイを初期化します。**Board** テンプレートはピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** は 135×240 の解像度、色順序、反転設定を組み込みます。`driver.h` や手動でのピン設定は不要です。
- このボードでは、デモは `Board_XIAO_1inch14_LCD<13, 12>`（RST=13, BL=12）と `Config_Seeed_1inch14_LCD_ST7789`（135×240）を使用します。いくつかのデモでは、BGR カラー順序用にスケッチローカルな `Config_XIAO_1inch14_LCD_ST7789_BGR` を上書き定義しています。
- これらのデモでは **IMU** は I2C（`Wire`）経由で直接読み取っており、外部 IMU ライブラリは不要です。**PDM マイク** と **I2S 出力** は ESP-IDF 5 のドライバ（`driver/i2s_pdm.h`、`driver/i2s_std.h`）と `LittleFS` を使用しており、いずれも esp32 ボードパッケージに含まれています。
- 1.14'' IPS Display には **タッチコントローラも SD カードスロットも搭載されていない** ため、タッチや SD 用のライブラリは不要です。
:::

## デモコードの入手方法

このページのすべてのデモは、`code_GFX2/Function/` ディレクトリ以下の [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) リポジトリに含まれています。各デモは 1 つの `.ino` スケッチを含むフォルダになっています。GitHub の Web ビューから `.ino` のソースだけをコピーするのではなく、**必ずフォルダごとダウンロード**してください。

**オプション A — リポジトリを ZIP でダウンロード（推奨）：**

1. [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) を開き、**Code > Download ZIP** をクリックしてから、任意の場所にアーカイブを展開します。
2. `code_GFX2/Function/` に移動し、各デモの **Code location** 行に記載されているフォルダを開きます。たとえば、このボード向けの GraphicTest デモは `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest/` にあります。
3. **`.ino` ファイルをダブルクリック**して Arduino IDE で開きます。

**オプション B — git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

その後、クローンした `code_GFX2/Function/...` フォルダからデモの `.ino` ファイルを開きます。

## 画面表示 — GraphicTest

このデモは、1.14インチ ST7789 IPS パネル（135×240）に対して、カラーバー、線、矩形、円、三角形、角丸矩形、テキスト、ピクセルグラデーションを含むフルグラフィックスベンチマークを実行します。画面の配線が正しいこと、およびすべての描画呼び出しが期待どおり動作することを確認するために使用できます。

**コードの場所：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このスケッチは **Seeed_GFX2** を介して ST7789 IPS パネルを初期化し、その後 10 種類のグラフィックスプリミティブを順番に実行します。それぞれの実行時間を `micros()` で計測し、結果をシリアルモニタに出力します。

ディスプレイは次の 1 回のテンプレート呼び出しで初期化されます：

```cpp
display.begin<Board_XIAO_1inch14_LCD<13, 12>,
              Config_Seeed_1inch14_LCD_ST7789>();
```

**Board** テンプレートはピンマップを保持しており、CS=D2、DC=D3、SCK=D8、MOSI=D10 です。また、その `<RST, BL>` テンプレートパラメータには生の GPIO 番号を指定するため、`<13, 12>` は RST=GPIO13（D17）、BL=GPIO12（D18）を意味します。**Panel Config** は 135×240 の解像度、色順序、反転設定（`invert = true`）を組み込んでいるため、`driver.h` や手動の `invertDisplay()` 呼び出しは不要です。

### デモの実行方法

**ステップ 1.** Arduino IDE で `xiao_esp32s3_114_graphictest.ino` を開きます。

**ステップ 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開きます。パネルサイズに続いて、各テストのタイミング出力が表示されるはずです：

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

画面上では、各テストパターンが約 1 秒ずつ表示され、その後に次のパターンへと切り替わります。すべてのテストが完了すると、青い角丸矩形の枠とともに「Graphic / Finished」と表示されます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

スケッチがすべてのパターンを実行し終えると、画面には「Graphic / Finished」というメッセージと、その下に「Reset to rerun」と表示されます。テストを再度実行するには、ボードをリセットしてください。

---

## IMU

1.14'' IPS Display には、オンボードの **LSM6DS3** 6軸 IMU（3軸加速度センサ + 3軸ジャイロスコープ）が搭載されており、I2C で D4/D5 に接続され、アドレスは **0x6A** です。**D14** 上のモーション割り込みラインは、ハードウェアウェイクアップとジェスチャ検出をサポートします。

:::note
オンボード IMU は **LSM6DS3** です（ボードの回路図と I2C アドレス `0x6A` から確認済み）。Electronic Quicksand デモでは、防御的なフォールバックとして QMI8658 互換センサを探索します。Raise to Wake デモは、オンボード LSM6DS3 のウェイクアップレジスタを対象としています。
:::

以下のデモでは、IMU は I2C（`Wire`）経由で直接読み取っており、外部 IMU ライブラリは不要です。

<a id="imu-quicksand"></a>

### デモ 1: Electronic Quicksand

このデモでは、画面をインタラクティブな流体シミュレーションに変えます — オンボードの 6軸 IMU で計測した重力に従って流れ、落ち着く金色の砂粒を表示します。ボードを傾けると、砂がリアルタイムにその方向へと移動します。

**コードの場所：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このシミュレーションでは、135×240 の画面上に **22×40 の占有グリッド** を重ね、その各セルは 6×6 ピクセルになっています。グリッド内には約 **150 個のパーティクル** が配置されており、それぞれ位置、速度、そして金色のカラ―グラデーションを持ちます。

IMU は I2C（D4/D5）経由で読み取られます。スケッチは既知の 2 つのアドレスで IMU を探索し、まず QMI8658、次に LSM6DS3 を試し、応答した方を使用します。生の加速度値はローパスフィルタにかけられ、重力ベクトルを導出するために使われます。ボードを傾けると：

1. **重力ベクトルの更新** — 加速度センサのデータは指数移動平均で平滑化され、ジッタを抑えます。
2. **パーティクルの速度** — 各パーティクルは重力ベクトルの方向に加速し、減衰と、フロー内での深さに基づくパーティクルごとの可動性係数が適用されます。
3. **セルの占有状態** — フローのより深い位置（重力に対して「底」に近い）にあるパーティクルは可動性が低下し、リアルな詰まり（パッキング）効果を生み出します。
4. **差分レンダリング** — パーティクルが出入りしたセルだけを再描画することで、SPI トラフィックを最小限に抑え、アニメーションを滑らかに保ちます。

表面付近のパーティクルは自由に流れ（高い可動性）、より深く埋もれたパーティクルは密に詰まり（低い可動性）、実際の砂の挙動を模倣します。

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_esp32s3_114_electronic_quicksand.ino` を開きます。

**ステップ 2.** ボードとポートを選択し、**Upload** をクリックします。

**ステップ 3.** アップロードが完了すると、画面の下部が金色のパーティクルで満たされます。ボードをさまざまな方向に傾けると、砂が重力に引かれているかのように流れます。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開き、初期化を確認します：

```
=== Electronic Quicksand 1.14 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

ボードを傾けると、パーティクルは下側のエッジに向かって流れます。ディスプレイを水平に置くと、デモは直前の重力方向を保持します。

---

### デモ 2: 持ち上げてスリープ解除

このデモは、IMU に内蔵されたウェイクアップ割り込みを **D14** で利用する **画面のスリープ／ウェイクシステム** を実装しています。8 秒間操作がないと画面が自動的にオフになり（バックライトオフ + ESP32 のライトスリープ）、デバイスを持ち上げたり動かしたりすると即座に復帰します。

**コードの場所：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このデモでは、LSM6 互換 IMU の **組み込みウェイクアップイベント検出器** を使用します。これは、加速度センサのデータを内部で監視し、モーションが設定可能なしきい値を超えたときに INT1 ピン（このボードでは D14 に接続）をアサートするハードウェア機能です。つまり、MCU が加速度センサを常時ポーリングする必要はありません。

**IMU 設定（LSM6 互換）：**

<div class="table-center">
  <table align="center">
    <tr><th>レジスタ</th><th>値</th><th>目的</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>BDU とブロックリード用オートインクリメントを有効化</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度センサ @ 104 Hz、±2g</td></tr>
    <tr><td><code>CTRL2_G</code></td><td><code>0x40</code></td><td>ジャイロスコープ @ 104 Hz</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>組み込み割り込みを有効化</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>ウェイクアップしきい値（中〜低感度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>継続時間フィルタなし（応答性の高いウェイク）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>ウェイクアップを INT1 にルーティング</td></tr>
  </table>
</div>

**スリープ／ウェイクの流れ：**

1. **アクティブ状態** — 画面はオンで、バックライトは PWM 160。IMU データとバッテリ電圧が定期的に更新されます。カウントダウンタイマーには自動スリープまでの残り秒数が表示されます。
2. **自動スリープ** — 8 秒間何も操作がないと、スケッチはバックライトをオフにし、「Sleeping... Pick up device to wake」というメッセージを表示し、`esp_sleep_enable_gpio_wakeup()` で D14 をウェイクアップソースとして設定し、ESP32 をライトスリープに入れます。
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

**ステップ 1.** Arduino IDE で `xiao_esp32s3_114_wakeup.ino` を開き、ボードとポートを選択して **Upload** をクリックします。

**ステップ 2.** 画面には電源状態、モーションデータ、カウントダウンタイマーを備えたダッシュボードが表示されます。ボードを 8 秒間静置すると、自動的にスリープします。

**ステップ 3.** ボードを持ち上げるか軽く振ると、画面が即座に復帰します。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開き、初期化を確認します：

```
=== XIAO ESP32-S3 Plus 1.14 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

スリープ解除中は、画面にリアルタイムのモーションデータが表示されます。8 秒間静止すると画面が暗くなり、ESP32-S3 はライトスリープに入ります。デバイスを持ち上げると、画面は 1 秒未満で復帰し、ウェイクカウンタがインクリメントされます。

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

このデモでは、PDM マイクのリアルタイムオーディオ入力を、ダイナミックなイコライザ風の波形とセグメント化されたボリュームバーとして可視化します。オンボードマイクに向かって話したり、手を叩いたり、息を吹きかけたりすると、バーが即座に反応する様子を見ることができます。外部ハードウェアは不要です。

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

マイクは **16 kHz モノラル** でサンプリングされ、256 サンプルの DMA バッファ（4 つのディスクリプタ）に格納されます。`loop()` 内で `i2s_channel_read()` がバッファを取得し、DC オフセットを除去し、ピーク振幅を計算し、波形ビジュアライザ用に信号を 27 ビンにダウンサンプリングします。また、EMI／結合ノイズを低減するために、`gpio_set_drive_capability()` を用いて PDM クロックのドライブ能力も下げています。

画面は3つのゾーンに分かれています：

<div class="table-center">
  <table align="center">
    <tr><th>ゾーン</th><th>位置</th><th>説明</th></tr>
    <tr><td><strong>Waveform</strong></td><td>上部 (y=30–95)</td><td>27本のバーからなるイコライザ風ビジュアライザ。生のサンプルをダウンサンプリングし、中央のベースラインを挟んで対称なバーとして描画します。波形の色は平滑化された音量に追従し、緑 (&lt;50%)、黄 (50–90%)、赤 (&gt;90%) で表示されます。</td></tr>
    <tr><td><strong>Percentage</strong></td><td>中央</td><td>大きな数値の音量パーセンテージ (0–100%) を表示し、緑 (&lt;50%)、黄 (50–90%)、赤 (&gt;90%) に色分けされます。</td></tr>
    <tr><td><strong>Volume Bar</strong></td><td>下部 (y=130–225)</td><td>10セグメントのバー（緑/黄/赤のグラデーション）。PDMピークから得た平滑化済み音量で更新されます。</td></tr>
  </table>
</div>

**信号処理：**

1. **I2S PDM RX** — `i2s_channel_read()` が256個のPDMサンプルを取得します。スケッチはDCオフセット（平均値）を除去してピークが実際の大きさを反映するようにし、その後ピーク振幅を計算します。
2. **正規化** — `VOL_FLOOR` (20) 未満のピーク値は無音として扱われます。`VOL_CEIL` (2400) を超える値は100%に飽和します。その間の値は線形マッピングされ、0.0〜1.0 の音量レベルになります。
3. **指数平滑化** — 表示される音量はジッタを避けるため、20%の混合係数（`SMOOTH = 0.20`）で平滑化されます。無音時には音量がフレームごとに6%ずつ減衰します。
4. **差分レンダリング** — ボリュームバーとパーセンテージラベルは値が変化したときのみ再描画され、SPIトラフィックを最小限に抑えます。

#### デモの実行

**Step 1.** Arduino IDE で `xiao_esp32s3_114_voice_bar.ino` を開きます。

**Step 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択します。

**Step 3.** **Upload** をクリックします。

**Step 4.** **Tools > Serial Monitor**（115200ボー）を開きます。次のような表示が見えるはずです：

```
=== Voice Bar | XIAO ESP32-S3 Plus 1.14 ===
[MIC] PDM RX ready (ESP-IDF v5)
[MIC] ready
```

**Step 5.** マイクに向かって話す、手を叩く、息を吹きかけるなどしてください。波形とボリュームバーがリアルタイムに反応します。音量が上がるにつれてパーセンテージラベルの色が変化します。

#### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_voice_bar.gif" style={{width:500, height:'auto'}}/></div>

無音のときは波形はフラットで、ボリュームバーは空（0%）です。マイクに向かって話すとイコライザバーがアニメーションし、ボリュームバーが緑から黄、赤へと満たされていきます。パーセンテージラベルはリアルタイムに更新されます。

---

### デモ 2: フラッシュレコーダー

このデモでは、オンボードのPDMマイクから5秒間の音声をオンボードのFlashメモリに録音し、その後I2S出力に接続した外部スピーカーから再生します。録音用のボタンと再生用のボタンをそれぞれ1つずつ押して操作します。

**コードの場所：** `code_GFX2/Function/114_ESP32/xiao_esp32s3_114_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_ESP32/xiao_esp32s3_114_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### ハードウェアセットアップ

再生には外部の **I2S オーディオアンプとスピーカー** が必要です。このデモは、ボードのI2S出力パッドに接続された **MAX98357A** ブレークアウト用に作成されています：

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

I2Sパッド（3V3、GND、D11、D12、D13）は、ディスプレイボードの底面にある拡張パッドグループに引き出されています。

### 動作概要

**録音** — オンボードの **PDM (Pulse Density Modulation) デジタルマイク** は、PDM RXモードに設定されたESP32-S3のI2Sペリフェラルを通してサンプリングされます。ESP-IDF v5（Arduino core 3.3.11）では、新しいドライバAPI（`driver/i2s_pdm.h`）を使用します。マイクは **16 kHz モノラル** で、256フレーム×4個のDMAディスクリプタ構成でキャプチャされます。**USR1** を押すと、スケッチは5秒間の音声をRAMバッファにサンプリングし、その後 `LittleFS` を使ってオンボードFlashにWAVファイル（`/REC_RAW.WAV`）として書き込みます。

PDMマイクの動作開始後、スケッチは録音開始時の立ち上がりノイズを低減するため、最初の **300 ms** のキャプチャデータをウォームアップデータとして破棄します。

スケッチが **7秒** 以内にすべてのサンプルを取得できない場合、録音を停止し、録音ループでブロックされたままにならないように、代わりに **"Mic capture timeout"** を表示します。

**再生** — **USR2** を押すと、FlashからWAVを読み出し、D11/D12/D13 上で標準（Philips）ステレオモードのI2Sペリフェラルを通してストリーミングします。モノラルサンプルは両チャンネルに複製され、クリッピングを避けるために `0.75×` のゲインが適用されます。アンプが小型スピーカーを駆動し、録音内容を聞くことができます。

**画面上の状態：**

<div class="table-center">
  <table align="center">
    <tr><th>状態</th><th>説明</th></tr>
    <tr><td><strong>Ready</strong></td><td>"Flash Recorder" のタイトルと "USR1: record"、"USR2: play Flash WAV"（または "No saved recording"）が表示されます</td></tr>
    <tr><td><strong>Warm-up</strong></td><td>キャプチャ開始前に "Warming up mic..." と "Please wait" が表示されます</td></tr>
    <tr><td><strong>Recording</strong></td><td>キャプチャ中は "Capturing 5 seconds" が表示されます（進行状況のリアルタイム表示はありません）</td></tr>
    <tr><td><strong>Error</strong></td><td>キャプチャが7秒を超えた場合、"Mic capture timeout" と "Try recording again" が表示されます</td></tr>
    <tr><td><strong>Saved</strong></td><td>"Done — Saved Flash WAV" という完了メッセージが表示され、その後 Ready に戻ります</td></tr>
    <tr><td><strong>Playback</strong></td><td>ストリーミング中は "Playing raw audio" が表示され、その後 "Finished" に変わります</td></tr>
  </table>
</div>

### デモの実行

**Step 1.** 上記の説明どおりに、MAX98357AアンプとスピーカーをI2Sパッドに接続します。

**Step 2.** Arduino IDE で `xiao_esp32s3_114_flash_record.ino` を開きます。

**Step 3.** ボードを選択します：**Tools > Board > esp32 > XIAO_ESP32S3_PLUS**（esp32 Boards **3.3.11** を使用）。

**Step 4.** **Tools > Partition Scheme > "Default with spiffs (3MB APP/1.5MB SPIFFS)"** を選択します。

**Step 5.** 正しい **Port** を選択し、**Upload** をクリックします。

:::caution
レコーダーはWAVファイルを `LittleFS` に保存しますが、これは **SPIFFS** パーティションを使用します。ボードのデフォルトのパーティションスキーム（`16M Flash (2MB APP/12.5MB FATFS)`）にはSPIFFSパーティションが含まれていないため、`LittleFS.begin()` は `false` を返し、画面には "Flash write failed / Check partition" と表示されます。録音を動作させるには、必ず上記のSPIFFSパーティションスキームを選択する必要があります。
:::

**Step 6.** **USR1 (D6)** を押して、オンボードマイクから5秒間の音声を録音します。録音中、画面には "Capturing 5 seconds" と表示されます。

**Step 7.** **USR2 (D7)** を押して、録音をスピーカーから再生します。

:::note
録音はオンボードFlash（`LittleFS`）に保存されるため、電源を切っても保持されます — 一度録音しておけば、後で再生できます。再度録音すると、前のファイルは上書きされます。
:::

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

USR1 を押すと、画面に "Capturing 5 seconds" と表示されます。5秒後、WAVが保存されたことが確認されます。USR2 を押すと、接続されたスピーカーから音声が再生され、その間、画面には再生ステータスが表示されます。

---

## Grove I2C

1.14'' IPS ディスプレイには専用の **Grove I2C コネクタ** があり、標準的な4ピンGroveソケット（GND / 3V3 / SDA / SCL）上にD4（SDA）とD5（SCL）が引き出されています。D4/D5は内部的にオンボードIMUと共有されています。

<div class="table-center">
  <table align="center">
    <tr><th>Grove ピン</th><th>XIAO ピン</th><th>備考</th></tr>
    <tr><td>GND</td><td>GND</td><td>共通グラウンド</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>3.3V 電源出力</td></tr>
    <tr><td>SDA</td><td>D4</td><td>I2C データ — オンボードIMUと共有</td></tr>
    <tr><td>SCL</td><td>D5</td><td>I2C クロック — オンボードIMUと共有</td></tr>
  </table>
</div>

:::note
D4/D5 は Grove コネクタとオンボードIMUで共有されています。IMUのアドレスは `0x6A` です。外部I2Cデバイスを接続する際は、このアドレスと競合しないことを確認してください。
:::

### デモ: SHT31 温度 & 湿度

このデモでは、Grove I2C コネクタに接続した **Grove SHT31** センサから温度と湿度を読み取り、その値を画面に表示します。スケッチは `Wire.h` を使ってI2C経由でセンサと直接通信し（SHT31ライブラリは不要）、各読み取り値をセンサのCRCで検証します。

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

このスケッチは、I2C (`Wire`) を使ってアドレス `0x44` の SHT31 を直接読み取ります：

1. **I2C スキャン** — 起動時に I2C バスをスキャンし、見つかったすべてのデバイスを報告します。
2. **シングルショット測定** — 高繰り返し精度のシングルショットコマンド（`0x24 0x00`、クロックストレッチなし）を送信し、20 ms 待ってから 6 バイトを読み取ります：温度の上位/下位バイト + CRC、湿度の上位/下位バイト + CRC。
3. **CRC チェック** — 各 16 ビット値を CRC バイトと照合して検証し、不一致の場合はエラー（配線不良またはモジュールの破損/ノイズ）として報告します。
4. **変換** — 生データを温度（`-45 + 175 × raw / 65535` °C）と相対湿度（`100 × raw / 65535` %）に変換します。

ディスプレイは `Board_XIAO_1inch14_LCD<13, 12>` と、スケッチローカルの `Config_XIAO_1inch14_LCD_ST7789_BGR`（135×240、BGR カラー順、反転）で初期化され、色が正しく表示されるようにします。画面には、温度と湿度のライブ値とともに "SHT31 OK" が表示され、読み取りに失敗した場合は "SHT31 ERROR" とエラーコードが表示されます。

#### デモの実行

**ステップ 1.** Arduino IDE で `xiao_esp32s3_114_sht31_temperature_humidity.ino` を開きます。

**ステップ 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択し、**Upload** をクリックします。

**ステップ 3.** **Tools > Serial Monitor**（115200 ボー）を開きます。次のような出力が表示されます：

```
=== XIAO ESP32-S3 1.14 SHT31 Temperature/Humidity ===
[PIN] SDA=D4 SCL=D5 address=0x44
[I2C] scan start
[I2C] found 0x44
[I2C] scan done
[SHT31] OK T=26.81 C H=48.32 %
```

画面には温度と湿度とともに "SHT31 OK" が表示され、1 秒ごとに更新されます。センサーが外されたり CRC チェックに失敗した場合、画面にはエラーコード付きで "SHT31 ERROR" が表示されます。

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

3 つのボタンにはボード上に 1 kΩ の外付けプルアップ抵抗があり、デモコードではさらに XIAO の内部プルアップ（`INPUT_PULLUP`）も有効にしています。ポーリング方式のシンプルなデバウンス付き読み取りは次のようになります：

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
    <tr><td><strong>USR2</strong></td><td>D7</td><td>画面のオン/オフを切り替え（オフ / 最後の明るさに復帰）</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>ヘッダタイトルを "Hello,XIAO!" と "Seeed" の間で切り替え</td></tr>
  </table>
</div>

ボタンのブレイクアウトパッド（ボード上では U1、U2、U3 と表示）は、それぞれ D6、D7、D19 と同じ信号になっており、必要に応じて外部ボタンを接続できます。

---

## バッテリー電圧検出

このデモでは、**D16** 上のオンボードバッテリー分圧回路を読み取り、1.14'' IPS ディスプレイに 2 つの黄色いライブ値として表示します：D16 分圧の生電圧と計算されたバッテリー電圧です。電圧値のみを表示し、バッテリー残量の推定や充電状態の報告は行いません。

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

スケッチは `Board_XIAO_1inch14_LCD<13, 12>` とスケッチローカルの `Config_XIAO_1inch14_LCD_ST7789_BGR`（135×240、BGR、invert = true）でディスプレイを初期化し、その後 **D16** を `analogReadMilliVolts()` を使って 12 ビット分解能・11 dB 減衰で 700 µs 間隔で 12 回サンプリングします。サンプルを平均して分圧の生電圧を求め、分圧比を掛けてバッテリー電圧を算出します（`Calc = D16 × 2.975`）。そして両方の値を中央寄せの 2 本の黄色いラインとして描画します。画面は、どちらかの値が意味のある量だけ変化したときのみ更新されます（D16 ≥ 0.02 V または Calc ≥ 0.05 V）。

:::note
充電状態の信号は ESP32-S3 の GPIO には接続されていません。このデモは電圧値のみを表示し、バッテリーの有無や充電状態の検出、バッテリー残量の推定は行いません。
:::

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_esp32s3_114_battery_status.ino` を開きます。

**ステップ 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** 画面を観察します — 2 本の黄色いラインが表示されます。1 本は D16 分圧の生電圧、もう 1 本は計算されたバッテリー電圧です。LiPo バッテリー（または USB-C ケーブル）を接続・取り外しして、値がどのように変化するか確認してください。

### 期待される結果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>電圧読み取り</strong>（D16 + Calc）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>バッテリーコネクタ</strong>（背面）</div></td>
    </tr>
  </table>
</div>

画面には、上段に D16 分圧の生データ電圧、下段に計算されたバッテリー電圧（`Calc`）が表示されます。LiPo バッテリーが接続されている場合、`Calc` はバッテリー端子電圧のおおよその値になります。USB 電源のみでも値が表示されることがあるため、`Calc` だけではバッテリーが接続されているかどうかを確認することはできません。

このデモは、シリアルモニタに 1 秒ごとに診断用の行も出力します。例：

```
D16 1.39V | Calc 4.14V
```

---

## リソース

- **🗃️[PCB 設計ファイル]** [XIAO 1.14'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[回路図]** [XIAO 1.14'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D モデル]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[データシート]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[工場出荷時ファームウェア]** [XIAO 1.14'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[デモ]** [XIAO Display Board デモコード](https://github.com/Seeed-Projects/Display-Gadgets) — すべての機能デモは `code_GFX2/Function/114_ESP32/` ディレクトリ内にあります

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

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
