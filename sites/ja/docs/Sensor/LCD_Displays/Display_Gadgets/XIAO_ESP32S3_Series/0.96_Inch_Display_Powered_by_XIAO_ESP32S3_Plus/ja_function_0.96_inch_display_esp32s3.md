---
description: XIAO 0.96'' IPS Display (ESP32-S3) の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめたページです。画面、IMU、PDMマイクおよびI2Sオーディオ（フラッシュレコーダー）、ボタン、バッテリー電圧検出をカバーします。
title: オンボードペリフェラルの使い方
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - Function
  - 0.96
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_0.96_inch_display_esp32s3
sku: 100037468
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/26/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/ja/function_0.96_inch_display_esp32s3/
---

# オンボードペリフェラルの使い方

このページでは、0.96'' IPS Display の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめています。各セクションはそれぞれ独立しているため、自分のユースケースに合うものだけを選んで読み進めることができます。

:::tip
このページのデモGIFは、短く収めるために再生速度を上げています。
:::

:::note
このページのすべてのデモは、[Getting Started](/ja/getting_started_0.96_inch_display_esp32s3) で説明している **esp32 Boards by Espressif (3.3.11)** に加えて、以下の手順で手動インストールする **Seeed_GFX2** ライブラリが必要です。
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

**Step 3.** 新しいライブラリを認識させるために Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、`Board` + `Panel Config` というレイヤー構造の上に構築された Seeed Studio 製のグラフィックスライブラリです。各デモでは、`display.begin<Board_..., Config_...>()` を1回呼び出すだけでディスプレイを初期化します。**Board** テンプレートはピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** は 80×160 の解像度、BGR カラー順序、および回転を組み込んでいます。`driver.h` を追加したり、パネルを手動で構成する必要はありません。
- このボードでは、デモは `Board_XIAO_0inch96_LCD<13, 12>`（RST=13, BL=12）と `Config_Seeed_0inch96_LCD_ST7789`（80×160, BGR, 回転 2）を使用します。
- これらのデモでは **IMU** は I2C（`Wire`）経由で直接読み取っており、外部 IMU ライブラリは不要です。**PDM マイク** と **I2S 出力** は ESP-IDF 5 のドライバ（`driver/i2s_pdm.h`、`driver/i2s_std.h`）と `LittleFS` を使用しており、いずれも esp32 ボードパッケージに含まれています。
- 0.96'' IPS Display には **タッチコントローラ、SDカードスロット、Grove コネクタは搭載されていません**。背面に 4ピンの I2C テストパッドがあるだけなので、タッチ、SD、Grove 用のライブラリは不要です。
:::

## デモコードの入手

このページのすべてのデモは、[Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) リポジトリ内の `code_GFX2/Function/` ディレクトリにあります。各デモは1つの `.ino` スケッチを含むフォルダになっています。GitHub の Web 画面から `.ino` のソースだけをコピーするのではなく、**必ずフォルダ全体をダウンロード**してください。

**オプション A — リポジトリを ZIP でダウンロード（推奨）：**

1. [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) を開き、**Code > Download ZIP** をクリックして、任意の場所にアーカイブを展開します。
2. `code_GFX2/Function/` に移動し、各デモの **Code location** 行に記載されているフォルダを開きます。例えば、このボード向けの GraphicTest デモは `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest/` にあります。
3. **`.ino` ファイルをダブルクリック**して Arduino IDE で開きます。

**オプション B — git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

その後、clone した `code_GFX2/Function/...` フォルダからデモの `.ino` ファイルを開きます。

## 画面表示 — GraphicTest

このデモは、0.96インチ ST7789 IPS パネル（80×160）に対して、カラーバー、線、矩形、円、三角形、角丸矩形、テキスト、ピクセルグラデーションを含むフルグラフィックスベンチマークを実行します。画面の配線が正しいこと、およびすべての描画呼び出しが期待どおりに動作することを確認するために使用できます。

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このスケッチは **Seeed_GFX2** を介して ST7789 IPS パネルを初期化し、その後 10 種類のグラフィックスプリミティブを順番に実行します。それぞれの実行時間を `micros()` で計測し、結果をシリアルモニタに出力します。

ディスプレイは次の1回のテンプレート呼び出しで初期化されます：

```cpp
display.begin<Board_XIAO_0inch96_LCD<13, 12>,
              Config_Seeed_0inch96_LCD_ST7789>();
```

**Board** テンプレートはピンマップ — CS=D2, DC=D3, SCK=D8, MOSI=D10 — を保持し、その `<RST, BL>` テンプレートパラメータには生の GPIO 番号を指定するため、`<13, 12>` は RST=GPIO13（D17）、BL=GPIO12（D18）を意味します。**Panel Config** は 80×160 の解像度、BGR カラー順序、および回転 2 を組み込んでおり、`driver.h` や手動の `invertDisplay()` 呼び出しは不要です。

### デモの実行

**Step 1.** Arduino IDE で `xiao_esp32s3_096_graphictest.ino` を開きます。

**Step 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択します。

**Step 3.** **Upload** をクリックします。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開きます。パネルサイズに続いて、各テストのタイミング出力が表示されるはずです：

```
=== XIAO ESP32-S3 Plus 0.96 graphic test ===
LCD width: 80
LCD height: 160
Color bars: 56.67 ms
Lines: 1819.10 ms
Fast lines: 85.03 ms
Rectangles: 73.34 ms
Filled rects: 177.53 ms
Circles: 262.63 ms
Triangles: 235.64 ms
Round rects: 100.58 ms
Text: 635.61 ms
Pixel gradient: 1960.36 ms
Graphic test finished.
```

画面上では、各テストパターンが約1秒間表示され、その後次のパターンに切り替わります。すべてのテストが完了すると、「Done! All tests OK」という画面が表示されます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

スケッチがすべてのパターンを実行し終えると、画面に「Done!」メッセージが表示されます。テストを再度実行するには、ボードをリセットしてください。

---

## IMU

0.96'' IPS Display には、オンボードの **LSM6DS3** 6軸 IMU（3軸加速度センサ + 3軸ジャイロ）が搭載されており、I2C で D4/D5 に接続され、アドレスは **0x6A** です。**D14** 上のモーション割り込みラインは、ハードウェアウェイクアップとジェスチャ検出をサポートします。

:::note
オンボード IMU は **LSM6DS3**（I2C アドレス `0x6A`）です。Electronic Quicksand デモは、防御的なフォールバックとして QMI8658 互換センサを探索します。Raise to Wake デモは、オンボード LSM6DS3 のウェイクアップレジスタを対象としています。
:::

以下のデモでは、IMU を I2C（`Wire`）経由で直接読み取っており、外部 IMU ライブラリは必要ありません。

<a id="imu-quicksand"></a>

### デモ 1: Electronic Quicksand

このデモでは、画面をインタラクティブな流体シミュレーションに変えます — 重力に応じて流れ、落ち着く金色の砂粒が、オンボード 6軸 IMU で計測された重力に従って動きます。ボードを傾けると、砂がリアルタイムにその方向へと移動します。

**Code location:** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このシミュレーションでは、80×160 の画面上に **13×26 の占有グリッド** を重ね、その各セルは 6×6 ピクセルになっています。グリッド内には約 **65 個の粒子** が配置されており、それぞれ位置、速度、そして金色のカラ―グラデーションを持ちます。

IMU は I2C（D4/D5）経由で読み取られます。スケッチは既知の 2 つのアドレスの IMU を順に探索し、まず QMI8658、次に LSM6DS3 を探し、応答した方を使用します。生の加速度値はローパスフィルタで平滑化され、重力ベクトルの算出に使われます。ボードを傾けると、次のように動作します：

1. **重力ベクトルの更新** — 加速度センサのデータは指数移動平均で平滑化され、ジッタを抑えます。
2. **粒子の速度** — 各粒子は重力ベクトルの方向に加速し、減衰と、フロー内での深さに基づく粒子ごとの可動性係数が適用されます。
3. **セルの占有状態** — フローのより深い位置（重力に対して「底」に近い位置）にある粒子は可動性が低くなり、現実的な詰まり（パッキング）効果を生み出します。
4. **差分レンダリング** — 粒子が出入りしたセルだけを再描画することで、SPI トラフィックを最小限に抑え、小型パネル上でもスムーズなアニメーションを維持します。

表面付近の粒子は自由に流れ（高い可動性）、より深く埋もれた粒子は密に詰まり（低い可動性）、実際の砂の挙動を模倣します。

### デモの実行

**Step 1.** Arduino IDE で `xiao_esp32s3_096_electronic_quicksand.ino` を開きます。

**Step 2.** ボードとポートを選択し、**Upload** をクリックします。

**Step 3.** 書き込みが完了すると、画面の下部が金色の粒子で満たされます。ボードをさまざまな方向に傾けると、砂が重力に引かれるように流れます。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開き、初期化を確認します：

```
=== Electronic Quicksand 0.96 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

ボードを傾けると、粒子は下側の縁に向かって流れます。ディスプレイを水平に置くと、デモは直前の重力方向を保持します。

---

### デモ 2: 持ち上げてスリープ解除

このデモでは、IMU に内蔵された **ウェイクアップ割り込み**（**D14**）を利用した **画面のスリープ／ウェイクシステム** を実装しています。8 秒間操作がないと画面が自動的にオフ（バックライトオフ）になり、デバイスを持ち上げたり動かしたりすると即座に復帰します。

**コードの場所：** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このデモでは、LSM6 互換 IMU の **組み込みウェイクアップイベント検出器** を使用します。これは、加速度センサのデータを内部で監視し、モーションが設定可能なしきい値を超えたときに INT1 ピン（このボードでは D14 に接続）をアサートするハードウェア機能です。これにより、MCU は加速度センサを継続的にポーリングする必要がありません。

**IMU 設定（LSM6 互換）：**

<div class="table-center">
  <table align="center">
    <tr><th>Register</th><th>Value</th><th>Purpose</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>BDU を有効化 + ブロックリード用のオートインクリメント</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度センサ @ 104 Hz、±2g</td></tr>
    <tr><td><code>CTRL2_G</code></td><td><code>0x40</code></td><td>ジャイロスコープ @ 104 Hz</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>組み込み割り込みを有効化</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>ウェイクアップしきい値（中〜低感度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>継続時間フィルタなし（応答性の高いウェイク）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>ウェイクアップを INT1 にルーティング</td></tr>
  </table>
</div>

**スリープ／ウェイクのフロー：**

1. **アクティブ状態** — 画面がオンでバックライトが点灯しています。IMU データとバッテリ電圧（D16）が定期的に更新され、自動スリープまでの残り秒数がカウントダウン表示されます。
2. **自動スリープ** — 8 秒間動きがないと、スケッチはバックライトをオフにし、「Sleep — Move to wake」というメッセージを表示します。デフォルトでは、このデモは **ディスプレイのみのスリープ** を使用します。つまり、ESP32-S3 は動作を継続し（そのため USB CDC シリアルポートは接続されたまま）、パネルだけをオフにします。D14 の IMU ウェイク割り込みは有効なままなので、モーション検出は継続されます。（スケッチ内で `ENABLE_LIGHT_SLEEP` を `true` に設定すると、GPIO ウェイクアップ付きの実際の ESP32 ライトスリープを使用します。ただし、その間 USB CDC が切断される可能性があります。）
3. **ウェイクアップ** — ユーザがボードを持ち上げると、IMU がモーションを検出して D14 を HIGH にアサートします。スケッチはバックライトを再点灯し、UI を再描画します — LCD と IMU の再初期化は行いません。

**手動テストボタン：**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D6</td><td>強制スリープ</td></tr>
    <tr><td>USR2</td><td>D7</td><td>強制ウェイク</td></tr>
  </table>
</div>

### デモの実行

**Step 1.** Arduino IDE で `xiao_esp32s3_096_wakeup.ino` を開き、ボードとポートを選択して **Upload** をクリックします。

**Step 2.** 画面には、電源状態、バッテリ電圧／残量、モーションデータ、割り込み回数、スリープまでのカウントダウンを備えたコンパクトなダッシュボードが表示されます。ボードを静置すると、8 秒後に自動的にスリープに入ります。

**Step 3.** ボードを持ち上げるか、軽く振ると、画面が即座に復帰します。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開き、起動とウェイクの遷移を確認します：

```
=== XIAO ESP32-S3 Plus 0.96 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
[READY] awake; USR1=sleep, USR2=manual wake, motion=IMU wake
[READY] auto sleep in 8 seconds
[READY] sleep mode: display only (USB CDC stays connected)
[WAKE] IMU_D14  count=1
[WAKE] IMU_D14  count=2
[SLEEP] USR1
[WAKE] IMU_D14  count=3
[WAKE] IMU_D14  count=4
[SLEEP] USR1
[WAKE] IMU_D14  count=5
[SLEEP] AUTO_TIMEOUT
```

起動後、3 行の `[READY]` メッセージで操作方法が説明されます。USR1 はボードをスリープにし、USR2 は手動でウェイクし、モーションは IMU ウェイクをトリガします。各遷移はログに記録されます。モーションによるウェイクアップでは `[WAKE] IMU_D14 count=N` と表示され（このカウントはそのたびに増加します）、USR1 を押したときは `[SLEEP] USR1`、8 秒間モーションがないことで自動スリープした場合は `[SLEEP] AUTO_TIMEOUT` と表示されます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

ウェイク中は、画面にリアルタイムのモーションおよびバッテリデータが表示されます。8 秒間静止すると画面が暗くなります。デバイスを持ち上げると画面が即座に復帰し、ウェイクカウンタがインクリメントされます。

---

## マイク & スピーカー — フラッシュレコーダ

このデモでは、0.96'' IPS Display を小型ボイスレコーダとして使用します。USR1 を押すと、オンボードの PDM マイクから 5 秒間のクリップをオンボード Flash に録音し、USR2 を押すと外部 I2S アンプを通して再生します。

0.96'' IPS Display の PDM マイクは、他の XIAO ディスプレイボードと同じピンに接続されています：

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Signal</th><th>Function</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>マイクへの PDM クロック出力</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>マイクからの PDM データ入力</td></tr>
  </table>
</div>

**コードの場所：** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### ハードウェアセットアップ

再生には外部の **I2S オーディオアンプとスピーカー** が必要です。このデモは、ボードの I2S 出力パッドに接続された **MAX98357A** ブレイクアウト用に作成されています：

<div class="table-center">
  <table align="center">
    <tr><th>I2S Pad</th><th>XIAO Pin</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>LRC</td></tr>
  </table>
</div>

I2S パッド（3V3、GND、D11、D12、D13）は、ディスプレイボードの裏面にある拡張パッドグループに引き出されています。

### 動作の仕組み

**録音（USR1）** — オンボードの **PDM（パルス密度変調）デジタルマイク** は、ESP32-S3 の I2S ペリフェラルを PDM RX モードに設定してサンプリングします。ESP-IDF v5（Arduino コア 3.3.11）では、新しいドライバ API（`driver/i2s_pdm.h`）を使用します。マイクは **16 kHz モノラル** で、256 フレームの DMA ディスクリプタ 4 個を使ってキャプチャされます。USR1 を押すと、スケッチは **5 秒間** の音声を RAM バッファにサンプリングし、その後 `LittleFS` を使ってオンボード Flash に WAV ファイル（`/REC_RAW.WAV`）として書き込みます。

PDM マイクの動作開始後、スケッチは録音開始時の立ち上がりノイズを減らすため、ウォームアップデータとして最初の **300 ms** のキャプチャデータを破棄します。

スケッチが **7 秒** 以内にすべてのサンプルを取得できない場合、録音を停止し、録音ループでブロックされたままにならないように、代わりに **"Mic timeout"** を表示します。

:::note
このボードでは、マイクのチャンネル選択ピンは `R8`（0 Ω 抵抗）によって GND に接続されており、代替の 3V3 ストラップである `R6` は実装されていません。そのためオンボードマイクは **左** の PDM スロットを駆動し、スケッチで `slot_cfg.slot_mask = I2S_PDM_SLOT_LEFT` を設定しているのはこのためです。別のマイク配線にコードを適用する場合は、この点に注意してください。
:::

**再生（USR2）** — USR2 を押すと、Flash から WAV を読み戻し、I2S ペリフェラルを標準（Philips）ステレオモードで D11/D12/D13 上に設定してストリーミングします（`driver/i2s_std.h`）。モノラルサンプルは両チャンネルに複製され、クリッピングを避けるために `0.75×` のゲインが適用されます。アンプが小型スピーカーを駆動し、録音内容を聞くことができます。

:::note
ESP-IDF v5 の API（`i2s_new_channel()` / `i2s_channel_read()` / `i2s_channel_write()`）は、このデモの nRF52840 版とは異なり、nRF52840 版では nRF52 の `PDM` ライブラリと `NRF_I2S` ペリフェラルを直接使用しています。nRF52840 用コードを移植する場合は、オーディオのセットアップを完全に置き換える必要があります。
:::

**画面上の状態:**

<div class="table-center">
  <table align="center">
    <tr><th>State</th><th>Description</th></tr>
    <tr><td><strong>Ready</strong></td><td>"Recorder" タイトルと "USR1: record" および "USR2: play"（または "No recording"）</td></tr>
    <tr><td><strong>Recording</strong></td><td>キャプチャ中は "Capturing voice" と "Please speak"（進行状況のライブ表示なし）</td></tr>
    <tr><td><strong>Error</strong></td><td>キャプチャが 7 秒を超えた場合は "Mic timeout" と "Try again"</td></tr>
    <tr><td><strong>Saved</strong></td><td>"Done — Saved WAV" の確認を表示し、その後 Ready に戻る</td></tr>
    <tr><td><strong>Playback</strong></td><td>ストリーミング中は "Playing..."、終了後は "Finished"</td></tr>
  </table>
</div>

### デモの実行

**ステップ 1.** 上記の説明どおりに、MAX98357A アンプとスピーカーを I2S パッドに接続します。

**ステップ 2.** Arduino IDE で `xiao_esp32s3_096_flash_record.ino` を開きます。

**ステップ 3.** ボードを選択します：**Tools > Board > esp32 > XIAO_ESP32S3_PLUS**（esp32 Boards **3.3.11** を使用）。

**ステップ 4.** **Tools > Partition Scheme > "Default with spiffs (3MB APP/1.5MB SPIFFS)"** を選択します。

**ステップ 5.** 正しい **Port** を選択し、**Upload** をクリックします。

:::caution
レコーダーは WAV ファイルを `LittleFS` に保存しますが、これは **SPIFFS** パーティションを使用します。ボードのデフォルトのパーティションスキーム（`16M Flash (2MB APP/12.5MB FATFS)`）には SPIFFS パーティションが含まれていないため、`LittleFS.begin()` は `false` を返し、WAV ファイルは書き込めず、画面には "Write failed / Check flash" と表示されます。録音を動作させるには、上記の SPIFFS パーティションスキームを **必ず** 選択してください。
:::

**ステップ 6.** **USR1（D6）** を押して、オンボードマイクから 5 秒間の音声を録音します。録音中、画面には "Capturing voice" と表示されます。

**ステップ 7.** **USR2（D7）** を押して、録音をスピーカーから再生します。

:::note
録音はオンボード Flash（`LittleFS`）に保存されるため、電源を切っても保持されます — 一度録音して、後で再生することができます。再度録音すると、前のファイルは上書きされます。
:::

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

USR1 を押すと、画面に "Capturing voice" と表示されます。5 秒後、WAV が保存されたことが確認されます。USR2 を押すと、画面に再生ステータスを表示しながら、接続されたスピーカーから音声が再生されます。

---

## ユーザーボタン

0.96'' IPS ディスプレイには、XIAO ESP32-S3 Plus に接続された **2 つの物理プッシュボタン** があります：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>アクティブ Low（押下 = LOW）</td><td>USR1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>アクティブ Low（押下 = LOW）</td><td>USR2</td></tr>
  </table>
</div>

:::note
1.14'' IPS ディスプレイとは異なり、0.96'' IPS ディスプレイには **3 つ目のボタン**（D19 上の USR3）はありません。また、専用のボタン用ブレークアウトパッドもありません。
:::

### ボタンの読み取り

ボタンは XIAO の内部プルアップ抵抗を使用します。単純な読み取りは次のようになります：

```cpp
const int USR1 = D6;
const int USR2 = D7;

void setup() {
  pinMode(USR1, INPUT_PULLUP);
  pinMode(USR2, INPUT_PULLUP);
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
}
```

### 割り込みによるデバウンス

応答性が高くデバウンスされたボタン処理のために、短い安定待ち時間付きで GPIO 割り込みを使用できます：

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }

void setup() {
  pinMode(D6, INPUT_PULLUP);
  pinMode(D7, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D6), btn1Isr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D7), btn2Isr, FALLING);
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
}
```

### ファクトリーダッシュボードでのデフォルト動作

プリインストールされているファームウェアでは、ボタンは次のように割り当てられています（自分のコードでこれらを上書きできます）：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>画面の明るさを切り替え（100% → 75% → 50% → 25% → 100%）</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>画面バックライトの ON/OFF を切り替え</td></tr>
  </table>
</div>

画面がオフ（USR2 によって切り替え）になっているときに再度 USR2 を押すと、以前の 0 以外のレベルに復帰します。

---

## バッテリー電圧検出

このデモでは、オンボードのバッテリー分圧回路を **D16** で読み取り、0.96'' IPS ディスプレイに 2 つの黄色いライブ読み値を表示します：D16 の分圧電圧の生値と、計算されたバッテリー電圧です。電圧値のみを表示し、バッテリー残量（パーセンテージ）の推定や充電状態の報告は行いません。

**コードの場所：** `code_GFX2/Function/096_ESP32/xiao_esp32s3_096_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_ESP32/xiao_esp32s3_096_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

**バッテリー回路：**

ESP32-S3 Plus は、**D16** に接続されたオンボードの分圧回路を通して LiPo バッテリー電圧を読み取ります：

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>ESP32-S3 Pin</th><th>Function</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>分圧されたバッテリー電圧を読み取るアナログ入力。内部的に 316 kΩ / 160 kΩ の分圧回路に接続されています。<strong>このピンを外部用途に使用しないでください。</strong></td></tr>
  </table>
</div>

**分圧比：** 316 kΩ / 160 kΩ → **分圧比 = (316 + 160) / 160 ≈ 2.975**

**読み取り：**

このスケッチは `Board_XIAO_0inch96_LCD<13, 12>` と `Config_Seeed_0inch96_LCD_ST7789`（80×160、BGR、回転 2）でディスプレイを初期化し、その後 **D16** を 12 ビット分解能・11 dB 減衰で `analogReadMilliVolts()` を使って 700 µs 間隔で 12 回サンプリングします。サンプルを平均して分圧後の生の電圧値を求め、分圧比を掛けてバッテリー電圧（`Calc = D16 × 2.975`）を算出し、両方を中央寄せの黄色い 2 行として描画します。画面は、どちらかの値が意味のある量だけ変化したときのみ更新されます（D16 ≥ 0.02 V または Calc ≥ 0.05 V）。

:::note
充電状態の信号はどの ESP32-S3 GPIO にも接続されていません。このデモは電圧値のみを表示し、バッテリーの有無や充電状態の検出、バッテリー残量の推定は行いません。
:::

### デモの実行

**Step 1.** Arduino IDE で `xiao_esp32s3_096_battery_status.ino` を開きます。

**Step 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択します。

**Step 3.** **Upload** をクリックします。

**Step 4.** 画面を観察します — 2 本の黄色いラインが表示されます。上が D16 の分圧後の生の電圧、下が計算されたバッテリー電圧です。LiPo バッテリー（または USB-C ケーブル）を接続・取り外しして、値がどのように更新されるか確認してください。

### 期待される結果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>電圧読み取り</strong>（D16 + Calc）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>バッテリーコネクタ</strong>（背面）</div></td>
    </tr>
  </table>
</div>

画面には、上段に D16 の分圧後の生の電圧、下段に計算されたバッテリー電圧（`Calc`）が表示されます。LiPo バッテリーを接続すると、`Calc` はバッテリー端子電圧のおおよその値になります。USB 電源のみでも値が表示されるため、`Calc` だけではバッテリーが接続されているかどうかを確認することはできません。

このデモは、シリアルモニタにも 1 秒ごとに診断用の 1 行を出力します。例：

```
D16 1.39V | Calc 4.14V
```

---

## リソース

- **🗃️[PCB Design Files]** [XIAO 0.96'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 0.96'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 0.96'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — すべての Function デモは `code_GFX2/Function/096_ESP32/` ディレクトリ内にあります

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

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
