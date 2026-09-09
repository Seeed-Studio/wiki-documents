---
description: XIAO 0.96'' IPS Display (nRF52840) の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめたページです。画面、IMU、PDMマイク、内蔵フラッシュへの録音とI2Sオーディオ再生、ボタン、バッテリーをカバーします。
title: オンボードペリフェラルの使い方
sidebar_label: 機能
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - Function
  - 0.96
  - I2S
  - Audio
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_0.96_inch_display_nrf52840
sku: 100063377
sidebar_position: 2
last_update:
  date: 08/25/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/ja/function_0.96_inch_display_nrf52840/
---

# オンボードペリフェラルの使い方

このページでは、0.96'' IPS Display の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめています。各セクションはそれぞれ独立しているため、自分のユースケースに合うものだけを選んで読めばよく、他を読む必要はありません。

:::tip
このページのデモGIFは、短く収めるために再生速度を上げています。
:::

:::note
このページのすべてのデモは、[Getting Started](/ja/getting_started_0.96_inch_display_nrf52840) で説明している **Seeed nRF52 Boards (1.1.13)** に加え、以下の手順で手動インストールする **Seeed_GFX2** ライブラリが必要です。
:::

- **Library Manager** — **Sketch > Include Library > Manage Libraries...** に移動し、次のライブラリを検索してインストールします：

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>Quicksand, Wake</td></tr>
  </table>
</div>

- **Seeed_GFX2 (Manual Installation)** — このライブラリは Library Manager には登録されていないため、手動でインストールする必要があります：

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
- **Seeed_GFX2** は、`Board` + `Panel Config` というレイヤ構造に基づいて構築された Seeed Studio のグラフィックスライブラリです。各デモは、`display.begin<Board_XIAO_0inch96_LCD<38, 37>, Config_Seeed_0inch96_LCD_ST7789>()` という 1 行の呼び出しでディスプレイを初期化します。ここで **Board** テンプレートがピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** が 80×160 の解像度、BGR カラー順序、回転 2 を組み込みます。Seeed_GFX2 は、このパネルを安全側に振った 10 MHz のハードウェア SPI で駆動しており、旧来のデモでソフトウェア SPI を必要としていたシグナルマージンの問題を回避しています。
- 0.96'' IPS Display には **タッチコントローラと SD カードスロットが搭載されていない** ため、タッチや SD 用のライブラリは不要です。
:::

## デモコードの入手方法

このページのすべてのデモは、`code_GFX2/Function/` ディレクトリ以下の [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) リポジトリに含まれています。各デモは 1 つの `.ino` スケッチを含むフォルダになっています。GitHub の Web 画面から `.ino` のソースだけをコピーするのではなく、**必ずフォルダ全体をダウンロード** してください。

**オプション A — リポジトリを ZIP としてダウンロード（推奨）：**

1. [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) を開き、**Code > Download ZIP** をクリックして、任意の場所にアーカイブを展開します。
2. `code_GFX2/Function/` に移動し、各デモの **Code location** 行に示されているフォルダを開きます。例えば、このボード向けの GraphicTest デモは `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest/` にあります。
3. **`.ino` ファイルをダブルクリック** して Arduino IDE で開きます。

**オプション B — git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

その後、clone した `code_GFX2/Function/...` フォルダからデモの `.ino` ファイルを開きます。

## 画面表示 — GraphicTest

このデモは、0.96 インチ ST7789 IPS パネル（80×160）に対して、カラーバー、線、矩形、円、三角形、角丸矩形、テキスト、ピクセルグラデーションを含むフルグラフィックスベンチマークを実行します。画面の配線が正しく行われているか、すべての描画呼び出しが期待どおりに動作するかを確認するために使用できます。

**Code location:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作概要

このスケッチは **Seeed_GFX2** を介して ST7789 IPS パネルを初期化し、その後 10 種類のグラフィックスプリミティブを順番に実行します。それぞれの処理時間を `micros()` で計測し、結果をシリアルモニタに出力します。

ディスプレイは次の 1 行のテンプレート呼び出しで初期化されます：

```cpp
display.begin<Board_XIAO_0inch96_LCD<38, 37>,
              Config_Seeed_0inch96_LCD_ST7789>();
```

**Board** テンプレートはピンマップ — CS=D2、DC=D3、SCK=D8、MOSI=D10 — を保持し、その `<RST, BL>` テンプレートパラメータには生の GPIO 番号を指定します。そのため `<38, 37>` は RST=GPIO38、BL=GPIO37 を意味します。**Panel Config** は 80×160 の解像度、BGR カラー順序、回転 2 を組み込んでおり、`driver.h` や手動の `invertDisplay()` 呼び出しは不要です。Seeed_GFX2 はパネルを安全側に振った 10 MHz のハードウェア SPI で駆動し、旧来のデモでソフトウェア SPI を強いられていたシグナルマージンの問題を回避しています。

:::note
**カラー順序（BGR パネル）。** この 0.96 インチパネルは物理的に赤と青のチャネルが入れ替わっています。デモではそれに合わせて色をエイリアスしており（例えば、信号レベルでの赤 `0xF800` は画面上では青として表示されます）、独自の描画コードを書く場合は、デモのカラーエイリアスを使うか BGR 順序を考慮してください。そうしないと、赤と青が入れ替わって表示されます。
:::

### デモの実行方法

**Step 1.** Arduino IDE で `xiao_nrf52840_096_graphictest.ino` を開きます。

**Step 2.** **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** と正しい **Port** を選択します。

**Step 3.** **Upload** をクリックします。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開きます。各テストのタイミング出力が表示されるはずです：

```
=== XIAO nRF52840 Plus 0.96 graphic test ===
LCD: 80x160
Color bars: 13.67 ms
Lines: 1712.89 ms
Fast lines: 25.39 ms
Rectangles: 23.44 ms
Filled rects: 47.85 ms
Circles: 207.03 ms
Triangles: 166.99 ms
Round rects: 48.83 ms
Text: 539.06 ms
Pixel gradient: 1907.23 ms
Graphic test finished.
```

画面上では、各テストパターンが約 1 秒ずつ表示され、その後次のパターンに切り替わります。すべてのテストが完了すると、「Done! All tests OK」と表示される画面が現れます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

スケッチがすべてのパターンを実行し終えると、画面には「Done!」というメッセージが表示されます。テストを再度実行するには、ボードをリセットしてください。

---

## IMU

0.96'' IPS Display には、D4/D5 の I2C に接続されたオンボード 6 軸 IMU（**LSM6DS3**）が搭載されています。**D14** 上のモーション割り込みラインは、ハードウェアウェイクアップとジェスチャ検出をサポートします。

以下の 2 つのデモはいずれも、I2C アドレス **0x6A** の LSM6DS3 を使用します。

<a id="imu-quicksand"></a>

### デモ 1: Electronic Quicksand

このデモでは、画面をインタラクティブな流体シミュレーションに変えます — オンボードの 6 軸 IMU で計測した重力に従って流れ、落ち着く金色の砂粒です。ボードを傾けると、砂がリアルタイムにその方向へと移動します。

**Code location:** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このシミュレーションでは、80×160 の画面上に **13×26 の占有グリッド** を重ね、その各セルは 6×6 ピクセルになっています。グリッド内には約 **65 個の粒子** が配置されており、それぞれ位置、速度、そして金色のカラ―グラデーションを持ちます。

IMU は Seeed Arduino LSM6DS3 ライブラリを使用して I2C（D4/D5）経由でアドレス `0x6A` から読み取られます。生の加速度値はローパスフィルタにかけられ、重力ベクトルを導き出すために使用されます。ボードを傾けると：

1. **重力ベクトルの更新** — 加速度センサーデータは指数移動平均で平滑化され、ジッターを防ぎます。
2. **粒子の速度** — 各粒子は重力ベクトルの方向に加速し、減衰と、流れの中での深さに基づく粒子ごとの可動性係数が適用されます。
3. **セルの占有状態** — 流れのより深い位置（重力に対して「底」に近い）にある粒子は可動性が低くなり、リアルな詰まり（パッキング）効果を生み出します。
4. **差分レンダリング** — 粒子が出入りしたセルだけを再描画することで、SPI トラフィックを最小限に抑え、小型パネルでもスムーズなアニメーションを実現します。

表面付近の粒子は自由に流れ（高い可動性）、より深く埋もれた粒子は密に詰まり（低い可動性）、実際の砂の挙動を模倣します。

### デモの実行

**Step 1.** Arduino IDE で `xiao_nrf52840_096_electronic_quicksand.ino` を開きます。

**Step 2.** ボードとポートを選択し、**Upload** をクリックします。

**Step 3.** アップロードが完了すると、画面の下部が金色の粒子で満たされます。ボードをさまざまな方向に傾けると、砂が重力に引かれているかのように流れます。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開き、初期化を確認します：

```
LCD w=80 h=160
=== Electronic Quicksand 0.96 ===
imu.begin=0
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

ボードを傾けると、金色の砂粒が滑らかに流れます。水平に保つと、砂は画面の下部に落ち着きます。ボードを 90 度回転させると、1 秒以内に砂が新しい「底」に流れ込みます。

---

### デモ 2: 持ち上げてスリープ解除

このデモでは、IMU に内蔵されたモーション割り込みを **D14** で利用し、**画面のスリープ／ウェイクシステム** を実装します。設定可能なアイドル時間が経過すると、画面は自動的にオフになり（バックライトオフ + nRF52 System ON スリープ）、デバイスを持ち上げたり動かしたりすると即座に復帰します。

**コードの場所：** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このデモでは、LSM6DS3 の **組み込みウェイクアップイベント検出器** を使用します。これは、加速度センサーデータを内部で監視し、モーションが設定可能なしきい値を超えたときに INT1 ピン（このボードでは D14 に接続）をアサートするハードウェア機能です。これにより、MCU は加速度センサーを継続的にポーリングする必要がありません。

**IMU 設定（LSM6DS3）：**

<div class="table-center">
  <table align="center">
    <tr><th>レジスタ</th><th>値</th><th>目的</th></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>ブロックデータ更新（BDU）+ オートインクリメント</td></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度センサー @ 104 Hz、±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>組み込み割り込みを有効化</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>ウェイクアップしきい値（中〜低感度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>継続時間フィルタなし（応答性の高いウェイク）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>ウェイクアップを INT1 にルーティング</td></tr>
  </table>
</div>

**スリープ／ウェイクのフロー：**

1. **アクティブ状態** — 画面はオンで、バックライトは最大輝度、UI はリアルタイムの IMU データで 250 ms ごとに更新されます。
2. **自動スリープ** — 8 秒間操作がないと、スケッチはバックライトをオフにし、「Sleep — Move to wake」というメッセージを表示して、nRF52 System ON スリープ（RAM を保持する低消費電力モード）に入ります。IMU のウェイク割り込み（D14）は起動時にすでに設定されているため、スリープ中もモーション検出は有効のままです。
3. **ウェイクアップ** — ユーザーがボードを持ち上げると、IMU がモーションを検出して D14 を HIGH にアサートします。nRF52840 は System ON スリープから復帰し、バックライトを再点灯して UI を再描画します。System ON スリープでは RAM が保持されるため、LCD と IMU の状態は維持されます。

**手動テストボタン：**

<div class="table-center">
  <table align="center">
    <tr><th>ボタン</th><th>ピン</th><th>動作</th></tr>
    <tr><td>USR1</td><td>D6</td><td>強制スリープ</td></tr>
    <tr><td>USR2</td><td>D7</td><td>強制ウェイク</td></tr>
  </table>
</div>

### デモの実行

**Step 1.** Arduino IDE で `xiao_nrf52840_096_wakeup.ino` を開き、ボードとポートを選択して **Upload** をクリックします。

**Step 2.** 画面には、電源状態、モーションデータ、カウントダウンを備えたコンパクトなダッシュボードが表示されます。ボードを静置すると、8 秒後に自動的にスリープに入ります。

**Step 3.** ボードを持ち上げるか、軽く振ると、画面が即座に復帰します。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開き、起動およびスリープ／ウェイクの遷移を確認します：

```
=== XIAO nRF52840 Plus 0.96 IMU Wake Demo ===
[LCD] OK 0.96 ST7789 80x160
[IMU] LSM6DS3 begin=0
[IMU] CTRL1_XL    = 0x40
[IMU] TAP_CFG     = 0x80
[IMU] MD1_CFG     = 0x20
[IMU] WAKE_UP_THS = 0x05
[IMU] D14 wake interrupt OK
[IMU] D14 pin state = 0
[BOOT] done. Screen should be on.
[SLEEP] screen off, entering System ON sleep
[SLEEP] loops=1 D14=0 awake=N
[SLEEP] loops=1025 D14=0 awake=N
[WAKE] D14 pin HIGH (polled)
[WAKE] src=0xA
[WAKE] reason=IMU_D14 wakeCount=8 sleptMs=4142 sleepLoops=1936 wakeSrc=0xA
[WAKE] src=0x0
```

`sleptMs`、`sleepLoops`、`wakeSrc` フィールドは、ボードがどれくらいの時間スリープしていたか、どのジェスチャーでウェイクしたかによって変化します。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

スリープ解除中は、画面にリアルタイムのモーションデータが表示されます。8 秒間静止すると画面が暗くなり、nRF52840 は低消費電力スリープに入ります。デバイスを持ち上げると画面が即座に復帰し、ウェイクカウンタがインクリメントされます。

---

## マイク & スピーカー — フラッシュレコーダー

このデモでは、0.96'' IPS Display を小さなボイスレコーダーに変身させます。USR1 を押すと、オンボードの PDM マイクから nRF52840 の内部フラッシュファイルシステムに短いクリップを録音し、USR2 を押すと外部 I2S アンプを通して再生します。

0.96'' IPS Display の PDM マイクは、他の XIAO ディスプレイボードと同じピンに接続されています：

<div class="table-center">
  <table align="center">
    <tr><th>ピン</th><th>信号</th><th>機能</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>マイクへの PDM クロック出力</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>マイクからの PDM データ入力</td></tr>
  </table>
</div>

**コードの場所：** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### ハードウェアセットアップ

再生側には外部 I2S アンプが必要です。このデモは、0.96'' IPS Display の I2S テストパッドに配線された **MAX98357A** ブレークアウト用に作成されています：

<div class="table-center">
  <table align="center">
    <tr><th>XIAO ピン</th><th>I2S 信号</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>電源</td><td>VIN</td></tr>
    <tr><td>GND</td><td>グラウンド</td><td>GND</td></tr>
    <tr><td>D11</td><td>I2S_SD（データ出力）</td><td>DIN</td></tr>
    <tr><td>D12</td><td>I2S_SCK（ビットクロック）</td><td>BCLK</td></tr>
    <tr><td>D13</td><td>I2S_WS (word select)</td><td>LRC</td></tr>
  </table>
</div>

:::caution
アンプとスピーカーの配線を行う前に、USB 電源を必ず切断してください。スピーカーは MAX98357A の **SPK+** および **SPK-** 端子に接続し、どちらのスピーカー線も GND には**接続しないでください**。
:::

:::note
0.96'' IPS Display には SD カードスロットが**ない**ため、このデモでは nRF52840 の **内部フラッシュファイルシステム**（InternalFS）に録音します。InternalFS は約 **28 KB** で、このチュートリアルでは 16 kHz のモノラルで 11,200 サンプルを録音し、約 22 KB の PCM オーディオと、およそ 0.7 秒の録音時間になります。
:::

### 動作の仕組み

**ディスプレイ：**

画面は **Seeed_GFX2** によって、`Board_XIAO_0inch96_LCD<38, 37>` と `Config_Seeed_0inch96_LCD_ST7789`（80×160、BGR、回転 2）を用い、10 MHz のハードウェア SPI 経由で駆動されます。

**録音（USR1）：**

1. スケッチは **16 kHz、シングルチャネル** で PDM ペリフェラルを起動し、ISR（`onPdmData`）を通じて 11200 サンプルのバッファ（約 0.7 秒、約 22 KB の PCM）に生データを取り込みます。
2. 進行状況画面に、録音のパーセンテージと経過時間がリアルタイムで表示されます。
3. バッファが一杯になると、スケッチは 44 バイトの WAV ヘッダを先頭に付加し、ファイル `/REC_RAW.WAV` を InternalFS に書き込みます。

**再生（USR2）：**

1. WAV ファイルを InternalFS から読み戻します。
2. スケッチは nRF52840 の I2S ペリフェラルを **マスターモード**、32× 比（約 16 kHz LRCK）で駆動し、MAX98357A に 16 ビットステレオフレームを **0.75× ゲイン** で送信します（各モノラルサンプルは両チャネルに複製されます）。
3. ダブルバッファ（ピンポン）方式により、クリップが終わるまでオーディオストリームが途切れないようにします。

**ボタン：**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D6</td><td>新しいクリップを録音（前のクリップを上書き）</td></tr>
    <tr><td>USR2</td><td>D7</td><td>保存済みクリップを再生</td></tr>
  </table>
</div>

:::note
**PDM**、**Adafruit TinyUSB**、**Adafruit LittleFS**、**InternalFileSystem** ライブラリは **Seeed nRF52 Boards 1.1.13** に同梱されています — Library Manager から別バージョンをインストールしないでください。このチュートリアルでは SdFat は使用しません。
:::

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_096_flash_record.ino` を開きます。

**ステップ 2.** **ツール > ボード > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** と正しい **ポート** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** 画面に「Recorder」のアイドル画面が表示されます。**USR1** を押すと、録音中に赤い「REC」進行バーが伸びていきます。完了すると WAV を保存し、アイドル画面に戻ります。

**ステップ 5.** **USR2** を押すと、接続された MAX98357A スピーカーからクリップが再生され、画面には「Playing...」と表示されます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_flash_record.gif" style={{width:500, height:'auto'}}/></div>

USR1 を押すと、赤い進行バーが 100% まで伸び、クリップが保存されます。USR2 を押すと、録音が MAX98357A を通して再生されます。WAV ファイルは InternalFS に保存され、リセットや電源の入れ直し後も残ります。USR1 で再度録音すると、前のファイルが上書きされます。

:::note
このチュートリアルは、XIAO nRF52840 Plus、0.96'' IPS Display、MAX98357A アンプ、および外部スピーカーを用いてコンパイル、書き込み、ハードウェアテスト済みです。
:::

---

## ユーザーボタン

0.96'' IPS Display には、XIAO nRF52840 Plus に接続された **2 つの物理プッシュボタン** があります：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>アクティブ Low（押下 = LOW）</td><td>USR1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>アクティブ Low（押下 = LOW）</td><td>USR2</td></tr>
  </table>
</div>

:::note
1.14'' IPS Display と異なり、0.96'' IPS Display には **3 つ目のボタンがありません**（D19 上の USR3 はありません）。また、専用のボタン用ブレークアウトパッドもありません。
:::

### ボタンの読み取り

オンボードデモでは、ボタンは内部プルアップで設定されています：

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

メインループをブロックせずに、応答性が高くデバウンスされたボタン処理を行うには、ピン変化割り込みを使用できます：

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

プリインストールされているファクトリーファームウェアでは、ボタンは次のように割り当てられています（自分のコードで上書きできます）：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>画面の明るさを切り替え（100% → 75% → 50% → 25% → 100%）</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>画面のバックライトを ON/OFF 切り替え</td></tr>
  </table>
</div>

画面がオフ（USR2 で切り替え）になっているときに、再度 USR2 を押すと、以前の 0 以外のレベルに戻ります。

---

## バッテリーステータス

このデモでは、0.96'' IPS Display 上に、充電レベルと充電状態を示すバッテリーアイコンでバッテリーステータスを表示します。LiPo バッテリーが物理的に接続されているかどうかを検出し、次の 3 つの状態のいずれかを表示します：**USB PWR**（バッテリーなし）、**パーセンテージ**（バッテリーのみ）、**charging**（USB + バッテリー）。

0.96'' IPS Display には **専用のバッテリー ADC ピンがありません**（D16 は NC）— バッテリー電圧は XIAO nRF52840 Plus モジュールの内部分圧器を通して測定されます。

**コードの場所：** `code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/096_nRF52840/xiao_nrf52840_096_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

**ディスプレイ：**

画面は **Seeed_GFX2** によって、`Board_XIAO_0inch96_LCD<38, 37>` と `Config_Seeed_0inch96_LCD_ST7789`（80×160、BGR、回転 2）を用い、10 MHz のハードウェア SPI 経由で駆動されます。

**バッテリー回路：**

nRF52840 Plus は、**3 本の GPIO ピン** を使用して完全なバッテリーモニタリングシステムを構成します：

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>nRF52840 Pin</th><th>Function</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>バッテリー電圧分圧器のイネーブル。アクティブ Low — 分圧器を有効にするには LOW にし、その後は電力節約のため HIGH（高インピーダンス）に戻します。</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>分圧されたバッテリー電圧を読み取るアナログ入力。</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>充電ステータスインジケータ。アクティブ Low — 充電器が接続されバッテリーが充電中のとき LOW を読み取ります。</td></tr>
  </table>
</div>

**検出：**

USB-C 接続時には、静的な VBAT 電圧だけではバッテリーが存在するかどうかを判断できません — バッテリーが接続されていなくても、チャージャーの BAT ノードは実際のリチウムイオンセルのように見えることがあります。そのため、このデモではまず **USB のみのベースライン** を学習し、VBAT が一定時間にわたって低下した場合にのみバッテリー挿入を確定し、ノイズの多い／飛び値の読み取りと `~CHG` の HIGH への遷移を組み合わせて取り外しを確定します。これはファクトリーダッシュボードの検出ロジックを反映したものです。

**アイコン状態：**

- **バッテリーなし** — 赤いバツ印付きのグレーのバッテリーアウトラインで、**USB PWR** と表示。
- **バッテリーあり** — 白いアウトラインのバッテリーに色付きのフィル（パーセンテージに応じて緑 / 黄 / 赤）で、**パーセンテージ** と **電圧** を表示。
- **充電中** — シアンのフィルと稲妻アイコンで、パーセンテージと電圧を表示。

:::note
`~CHG` ピンは、`digitalRead()` ではなく nRF52840 の **生の GPIO レジスタ**（`nrf_gpio_cfg_input()` と `NRF_P0->IN`）を通して読み取られます。Arduino API では、ピン番号はボードパッケージのマッピングに従うため、`digitalRead(17)` は P0.17 ではなく、実際には **P0.07**（6D IMU の I2C データライン）を読み取ります。ここでの定数 `14` と `17` は **生の Nordic P0.x ピン番号**（P0.14 と P0.17）であり、これはレジスタ呼び出しが期待しているものと完全に一致します。
:::

:::note
このデモでは、工場で較正された**499 kΩ**のローサイド抵抗（分圧比 ≈ 3.004）を使用しており、510 kΩ の公称値ではありません。分圧回路はディスプレイボードではなく、XIAO nRF52840 Plus モジュール自体に内蔵されています。P0.14 のイネーブルピンは**アクティブ Low**です：分圧回路を有効にするにはこのピンを Low に駆動し、その後バッテリーを測定していないときの静止電流消費を最小限に抑えるために、高インピーダンス（INPUT）に解放します。
:::

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_096_battery_status.ino` を開きます。

**ステップ 2.** **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** と正しい **Port** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** 画面を観察します — 現在の状態を示すバッテリーアイコンが表示されます。LiPo バッテリー（または USB-C ケーブル）を接続・取り外しして、アイコンが 3 つの状態の間で切り替わる様子を確認します。

### 期待される結果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong>（バッテリーなし）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong>（バッテリーのみ）</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong>（USB + バッテリー）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong>（背面）</div></td>
    </tr>
  </table>
</div>

バッテリーがない場合、画面には赤いバツ印付きの灰色のバッテリーと **USB PWR** のラベルが表示されます。LiPo バッテリーを挿入すると、アイコンはパーセンテージと電圧を示すカラーの塗りつぶしに切り替わります。バッテリーが接続されている状態で USB-C を接続すると、塗りつぶしは雷マーク付きのシアン色になり、充電中であることを示します。

このデモは、シリアルモニタに 500 ms ごとに診断行も出力します。例：

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## リソース

- **🗃️[PCB Design Files]** [XIAO 0.96'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 0.96'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 0.96'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — すべての Function デモは `code_GFX2/Function/096_nRF52840/` ディレクトリ内にあります

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

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
