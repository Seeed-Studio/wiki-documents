---
description: XIAO 1.14'' IPS Display (nRF52840) の各オンボードペリフェラル向けの、単体で動作する機能別デモ集です。画面、IMU、PDMマイク、内部Flash録音とI2Sオーディオ再生、ボタン、バッテリー、Grove I2C をカバーします。
title: オンボードペリフェラルの使用方法
sidebar_label: 機能
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - Function
  - 1.14
  - I2S
  - Audio
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.14_inch_display_nrf52840
sku: 100069374
sidebar_position: 2
last_update:
  date: 08/12/2026
  author: FaiyuetCik
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/ja/function_1.14_inch_display_nrf52840/
---

# オンボードペリフェラルの使用方法

このページでは、1.14'' IPS Display の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめています。各セクションは独立しているため、他を読まずに自分のユースケースに合うものだけを選んで使うことができます。

:::tip
このページのデモGIFは、短く収めるために再生速度を上げています。
:::

:::note
このページのすべてのデモは、[Getting Started](/ja/getting_started_1.14_inch_display_nrf52840) で説明している **Seeed nRF52 Boards (1.1.13)** に加え、以下の手順で手動インストールする **Seeed_GFX2** ライブラリが必要です。
:::

- **Library Manager** — **Sketch > Include Library > Manage Libraries...** に移動し、次を検索してインストールします：

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>IMU デモ</td></tr>
  </table>
</div>

- **Seeed_GFX2（手動インストール）** — このライブラリは Library Manager には登録されていないため、手動でインストールする必要があります：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Seeed_GFX2 をダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 1.** 上のボタンをクリックして、`Seeed_GFX2` v1.0.0 を ZIP ファイルとしてダウンロードします（チュートリアルの再現性を保つため、リリースタグに固定されています）。あるいは、[Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) からリポジトリを clone しても構いません。

**Step 2.** Arduino IDE で **Sketch > Include Library > Add .ZIP Library...** を開き、ダウンロードした ZIP を選択します。IDE は `library.properties` を読み取り、正しい `Seeed_GFX2` フォルダに自動的にインストールします — 展開したフォルダ名を変更する必要はありません。（代わりに手動インストールする場合は、アーカイブを解凍し、展開されたフォルダ名を `Seeed_GFX2` に変更してから `Documents/Arduino/libraries/` に配置します。）

**Step 3.** 新しいライブラリが認識されるように Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、レイヤ構造の `Board` + `Panel Config` アーキテクチャ上に構築された Seeed Studio のグラフィックスライブラリです。各デモは、単一の `display.begin<Board_..., Config_...>()` 呼び出しでディスプレイを初期化します。ここで **Board** テンプレートがピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** が 135×240 の解像度、色順序、反転設定を組み込みます。`driver.h` や手動のピン設定は不要です。
- このボードでは、デモは `Board_XIAO_1inch14_LCD<38, 37>`（RST=38, BL=37）と `Config_Seeed_1inch14_LCD_ST7789`（135×240）を使用します。いくつかのデモでは、BGR カラー順序用にスケッチローカルな `Config_XIAO_1inch14_LCD_ST7789_BGR` オーバーライドを定義しています。
- **IMU** デモは、（上でインストールした）**Seeed Arduino LSM6DS3** ライブラリを使用します。
- 1.14'' IPS Display には **タッチコントローラも SD カードスロットもありません**。そのため、タッチや SD 用のライブラリは不要です。
:::

:::note
**Flash Recorder** チュートリアルで使用する **PDM**、**Adafruit TinyUSB**、**Adafruit LittleFS**、**InternalFileSystem** ライブラリは、**Seeed nRF52 Boards 1.1.13** に同梱されています — Library Manager から別バージョンをインストールしないでください。

録音データは nRF52840 の **内部 Flash ファイルシステム** に保存されます。このディスプレイには SD カードスロットがなく、チュートリアルでも SdFat は使用しません。
:::

## デモコードの入手方法

このページのすべてのデモは、`code_GFX2/Function/` ディレクトリ以下の [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) リポジトリ内にあります。各デモは 1 つの `.ino` スケッチを含むフォルダになっています。GitHub の Web 画面から `.ino` のソースだけをコピーするのではなく、**必ずフォルダごとダウンロード**してください。

**オプション A — リポジトリを ZIP としてダウンロード（推奨）：**

1. [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) を開き、**Code > Download ZIP** をクリックして、任意の場所にアーカイブを展開します。
2. `code_GFX2/Function/` に移動し、各デモの **Code location** 行に示されているフォルダを開きます。例えば、このボード向けの GraphicTest デモは `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest/` にあります。
3. **`.ino` ファイルをダブルクリック**して Arduino IDE で開きます。

**オプション B — git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

その後、clone した `code_GFX2/Function/...` フォルダからデモの `.ino` ファイルを開きます。

## 画面表示 — GraphicTest

このデモは、1.14インチ ST7789 IPS パネル（135×240）に対して、カラーバー、線、矩形、円、三角形、角丸矩形、テキスト、ピクセルグラデーションを含むフルグラフィックスベンチマークを実行します。画面の配線が正しいこと、そしてすべての描画呼び出しが期待どおり動作することを確認するために使用できます。

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このスケッチは **Seeed_GFX2** を介して ST7789 IPS パネルを初期化し、その後 10 種類のグラフィックスプリミティブを順番に実行します。それぞれの実行時間を `micros()` で計測し、その結果をシリアルモニタに出力します。

ディスプレイは次の 1 回のテンプレート呼び出しで初期化されます：

```cpp
display.begin<Board_XIAO_1inch14_LCD<38, 37>,
              Config_Seeed_1inch14_LCD_ST7789>();
```

**Board** テンプレートはピンマップを保持します — CS=D2、DC=D3、SCK=D8、MOSI=D10 — そしてその `<RST, BL>` テンプレートパラメータには生の GPIO 番号を指定するため、`<38, 37>` は RST=GPIO38、BL=GPIO37 を意味します。**Panel Config** は 135×240 の解像度、色順序、反転設定（`invert = true`）を組み込んでいるため、`driver.h` や手動の `invertDisplay()` 呼び出しは不要です。

### デモの実行方法

**Step 1.** Arduino IDE で `xiao_nrf52840_114_graphictest.ino` を開きます。

**Step 2.** **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** と正しい **Port** を選択します。

**Step 3.** **Upload** をクリックします。

**Step 4.** **Tools > Serial Monitor**（115200 baud）を開きます。各テストのタイミング出力が表示されるはずです：

```
LCD width: 135
LCD height: 240
Color bars: 34.18 ms
Lines: 2599.61 ms
Fast lines: 57.62 ms
Rectangles: 44.92 ms
Filled rectangles: 125.98 ms
Circles: 291.02 ms
Triangles: 289.06 ms
Round rectangles: 95.70 ms
Text: 1416.02 ms
Pixel gradient: 4774.42 ms
Graphic test finished.
```

画面上では、各テストパターンが約 1 秒間表示され、その後次のパターンに切り替わります。すべてのテストが完了すると、「Finished」画面が表示されます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

スケッチがすべてのパターンを実行し終えると、画面には「Finished」というメッセージが表示されます。テストを再度実行するには、ボードをリセットしてください。

---

## IMU

1.14'' IPS Display には、D4/D5 の I2C に接続されたオンボード 6 軸 IMU（LSM6DS3）が搭載されています。**D14** 上のモーション割り込みラインは、ハードウェアウェイクアップとジェスチャ検出をサポートします。

以下の 2 つのデモはいずれも、I2C アドレス **0x6A** の LSM6DS3 を使用します。

<a id="imu-quicksand"></a>

### デモ 1: Electronic Quicksand

このデモでは、画面がインタラクティブな流体シミュレーションになります — オンボードの 6 軸 IMU で計測した重力に従って流れ、沈殿する金色の砂粒です。ボードを傾けると、砂がリアルタイムにその方向へと移動します。

**Code location:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このシミュレーションでは、135×240 の画面上に **22×40 の占有グリッド** を重ね合わせており、各セルは 6×6 ピクセルです。グリッド内には約 **150 個のパーティクル** が配置されており、それぞれ位置、速度、そしてゴールドのカラ―グラデーションを持ちます。

IMU は Seeed Arduino LSM6DS3 ライブラリを使用して I2C（D4/D5）経由でアドレス `0x6A` から読み取ります。生の加速度値はローパスフィルタで処理され、重力ベクトルを導き出すために使用されます。ボードを傾けると：

1. **重力ベクトルの更新** — 加速度センサーデータは指数移動平均で平滑化され、ジッターを防ぎます。
2. **パーティクルの速度** — 各パーティクルは重力ベクトルの方向に加速し、減衰と、フロー内での深さに基づくパーティクルごとの可動性係数が適用されます。
3. **セルの占有状態** — フローのより深い位置（重力に対して「底」に近い）にあるパーティクルは可動性が低下し、リアルな詰まり（パッキング）効果を生み出します。
4. **差分レンダリング** — パーティクルが出入りしたセルのみを再描画することで、SPI トラフィックを最小限に抑え、アニメーションを滑らかに保ちます。

表面付近のパーティクルは自由に流れ（高い可動性）、より深く埋もれたパーティクルは密に詰まり（低い可動性）、実際の砂の挙動を模倣します。

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_114_electronic_quicksand.ino` を開きます。

**ステップ 2.** ボードとポートを選択し、**Upload** をクリックします。

**ステップ 3.** アップロードが完了すると、画面の下部が金色のパーティクルで満たされます。ボードをさまざまな方向に傾けると、砂が重力に引かれているかのように流れます。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開き、初期化を確認します：

```
=== Electronic Quicksand 1.14 ===
imu.begin=0
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

ボードを傾けると、金色の砂のパーティクルが滑らかに流れます。水平に保つと、砂は画面の下部に落ち着きます。ボードを 90 度回転させると、砂は 1 秒以内に新しい「底」に向かって流れます。

---

### デモ 2: 持ち上げてスリープ解除

このデモでは、IMU に内蔵されたモーション割り込みを **D14** で利用し、**画面のスリープ／ウェイクシステム** を実装しています。設定可能なアイドル時間後に画面が自動的にオフ（バックライトオフ + nRF52 System ON スリープ）になり、デバイスを持ち上げたり動かしたりすると即座に復帰します。

**コードの場所：** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このデモでは、LSM6DS3 の **組み込みウェイクアップイベント検出器** を使用します。これは、加速度センサーデータを内部で監視し、モーションが設定可能なしきい値を超えたときに INT1 ピン（このボードでは D14 に接続）をアサートするハードウェア機能です。これにより、MCU は加速度センサーを継続的にポーリングする必要がありません。

**IMU 設定（LSM6DS3）：**

<div class="table-center">
  <table align="center">
    <tr><th>レジスタ</th><th>値</th><th>目的</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度センサー @ 104 Hz, ±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>組み込み割り込みを有効化</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>ウェイクアップしきい値（中〜低感度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>継続時間フィルタなし（応答性の高いウェイク）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>ウェイクアップを INT1 にルーティング</td></tr>
  </table>
</div>

**スリープ／ウェイクの流れ：**

1. **アクティブ状態** — 画面はオンでバックライトは最大輝度、UI はリアルタイムの IMU データで 250 ms ごとに更新されます。自動スリープまでの残り秒数を示すカウントダウンタイマーが表示されます。
2. **自動スリープ** — アイドルタイムアウト後、スケッチはバックライトをオフにし、「Sleeping... Pick up device to wake」というメッセージを表示してから、nRF52 System ON スリープ（RAM を保持する低消費電力モード）に入ります。IMU のウェイク割り込み（D14）は起動時にすでに設定されているため、スリープ中もモーション検出は有効のままです。
3. **ウェイクアップ** — ユーザーがボードを持ち上げると、IMU がモーションを検出して D14 を HIGH にアサートします。nRF52840 は System ON スリープから復帰し、バックライトを元に戻して UI を再描画します。LCD と IMU は **再初期化されません**。System ON スリープでは RAM とペリフェラル設定が保持されるため、どちらも起動時に適用された設定を維持します。

**手動テストボタン：**

<div class="table-center">
  <table align="center">
    <tr><th>ボタン</th><th>ピン</th><th>動作</th></tr>
    <tr><td>USR1</td><td>D6</td><td>強制スリープ</td></tr>
    <tr><td>USR2</td><td>D7</td><td>強制ウェイク</td></tr>
  </table>
</div>

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_114_wakeup.ino` を開き、ボードとポートを選択して **Upload** をクリックします。

**ステップ 2.** 画面には電源状態、モーションデータ、カウントダウンタイマーを備えたダッシュボードが表示されます。ボードを静置すると、アイドル時間後に自動的にスリープに入ります。

**ステップ 3.** ボードを持ち上げるか、軽く振ると、画面が即座に復帰します。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開き、スリープ／ウェイクの遷移を確認します：

```
LCD: 135x240
[IMU] Seeed LSM6DS3 begin=0
[IMU] D14 wake interrupt OK
[BOOT] done. Screen should be on.
[WAKE] reason=IMU_D14 wakeCount=1 sleptMs=3568 sleepLoops=0
[SLEEP] screen off, entering System ON sleep
[SLEEP] loops=1 D14=0 awake=N
[WAKE] reason=IMU_D14 wakeCount=2 sleptMs=1378 sleepLoops=439
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

スリープ解除中は、画面にリアルタイムのモーションデータが表示されます。静止した状態でアイドル時間が経過すると、画面は暗くなり、nRF52840 は低消費電力スリープに入ります。デバイスを持ち上げると画面が即座に復帰し、ウェイクカウンターがインクリメントされます。

---

## マイク & スピーカー

1.14'' IPS Display には、1.47" バージョンと同じ PDM デジタルマイクが搭載されており、同じピンに接続されています：

<div class="table-center">
  <table align="center">
    <tr><th>ピン</th><th>信号</th><th>機能</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>マイクへの PDM クロック出力</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>マイクからの PDM データ入力</td></tr>
  </table>
</div>

### デモ 1: ボイスバー

このデモでは、PDM マイクのリアルタイム音声入力を、ダイナミックなイコライザー風の波形とセグメント化されたボリュームバーとして可視化します。オンボードマイクに向かって話したり、手を叩いたり、息を吹きかけたりすると、バーが即座に反応する様子が確認できます。

**コードの場所：** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_voice_bar/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_voice_bar" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 動作の仕組み

このスケッチでは、nRF52840 の PDM ペリフェラルを `PDM` ライブラリ（Seeed nRF52 Boards に同梱）経由で、16 kHz・シングルチャネルで使用します。ISR（`onPDMdata`）は 256 サンプルのリングバッファに生の PDM サンプルを取り込み、ピーク振幅を計算します。

画面は 3 つのゾーンに分割されています：

<div class="table-center">
  <table align="center">
    <tr><th>ゾーン</th><th>位置</th><th>説明</th></tr>
    <tr><td><strong>波形</strong></td><td>上部 (y=30–95)</td><td>27 本のバーからなるイコライザビジュアライザー。生サンプルをダウンサンプリングし、中央のベースラインを中心に対称なバーとして描画します。波形の色は、ボリュームバーとパーセンテージラベルと同じ平滑化されたボリューム値に基づいており、緑（&lt;50%）、黄（50–90%）、赤（&gt;90%）で色分けされます。</td></tr>
    <tr><td><strong>パーセンテージ</strong></td><td>中央</td><td>大きな数値のボリュームパーセンテージ（0–100%）。緑（&lt;50%）、黄（50–90%）、赤（&gt;90%）で色分けされます。</td></tr>
    <tr><td><strong>ボリュームバー</strong></td><td>下部 (y=130–225)</td><td>10 セグメントバー（緑/黄/赤のグラデーション）。PDM ピークから平滑化された音量で更新されます。</td></tr>
  </table>
</div>

**信号処理:**

1. **PDM ISR** — `onPDMdata()` が約 62 Hz（16000 / 256）で発火します。生サンプルを読み取り、ピーク振幅を計算し、波形ビジュアライザ用に 27 ビンへダウンサンプリングします。
2. **正規化** — ピーク値が 10 未満の場合は無音として扱います。1500 を超える値は 100% に飽和します。その間は線形マッピングにより 0.0〜1.0 の音量レベルを生成します。
3. **指数平滑化** — 表示される音量はジッタを避けるため、20% のミックス係数（`SMOOTH = 0.20`）で平滑化されます。無音時には音量はフレームごとに 6% ずつ減衰します。
4. **差分レンダリング** — ボリュームバーとパーセンテージラベルは値が変化したときのみ再描画され、SPI トラフィックを最小限に抑えます。

#### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_114_voice_bar.ino` を開きます。

**ステップ 2.** **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** と正しい **Port** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開きます。次のような表示が見えるはずです:

```
[MIC] ready
```

**ステップ 5.** マイクに向かって話す、手を叩く、息を吹きかけるなどします。波形とボリュームバーがリアルタイムに反応します。音量が上がるにつれてパーセンテージラベルの色が変化します。

#### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_voice_bar.gif" style={{width:500, height:'auto'}}/></div>

無音時には波形はフラットで、ボリュームバーは空（0%）です。マイクに向かって話すと、イコライザバーがアニメーションし、ボリュームバーが緑から黄、赤へと満たされていきます。パーセンテージラベルはリアルタイムに更新されます。

### デモ 2: フラッシュレコーダーと I2S 再生

このデモでは、オンボード PDM マイクから nRF52840 の**内部フラッシュファイルシステム**に短い音声クリップを録音し、その後外部 I2S アンプとスピーカーを通して再生します:

- **USR1** はオンボード PDM マイクから録音します。
- 録音は **16 kHz、16 ビット、モノラル**です。
- 各クリップは約 **0.7 秒**（11,200 サンプル、22,400 バイトの PCM）です。
- クリップは内部フラッシュファイルシステム上の **`/REC_RAW.WAV`** として保存されます。
- **USR2** は外部 **MAX98357A** とスピーカーを通して録音を再生します。
- このデモは、**Seeed nRF52 Boards 1.1.13** を用いて XIAO nRF52840 Plus 上でコンパイル、書き込み、およびハードウェア検証済みです。

**コードの場所:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_flash_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_flash_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### ハードウェアセットアップ

再生には外部の**I2S オーディオアンプとスピーカー**が必要です。このデモは、ボードの I2S 出力パッドに接続された **MAX98357A** ブレークアウト用に作成されています:

<div class="table-center">
  <table align="center">
    <tr><th>ディスプレイボード</th><th>MAX98357A</th></tr>
    <tr><td>3V3</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td></tr>
    <tr><td>D11 / I2S_SD</td><td>DIN</td></tr>
    <tr><td>D12 / I2S_SCK</td><td>BCLK</td></tr>
    <tr><td>D13 / I2S_WS</td><td>LRC / WS</td></tr>
  </table>
</div>

スピーカーを MAX98357A の **SPK+** および **SPK-** 端子に接続します。スピーカーの片側を GND に接続してはいけません — MAX98357A はブリッジ接続負荷（BTL）アンプなので、両方のスピーカー端子を SPK 出力に接続する必要があります。

:::caution
アンプとスピーカーの配線を行う前に USB 電源を外してください。
:::

#### 動作概要

- PDM マイクは **D0 (CLK)** と **D1 (DATA)** を使用します。
- `PDM` ライブラリは **16 kHz モノラル**でマイクをキャプチャします。
- WAV ファイルは **44 バイトのヘッダ**と **22,400 バイトの PCM** データで構成されます。
- 内部フラッシュファイルシステム（InternalFS）は約 **28 KB** しかないため、各録音はおよそ **0.7 秒** に制限されます。
- 再生には、nRF52840 の **I2S ハードウェアペリフェラル**を Philips I2S フォーマット、**16 ビット、ステレオ**出力で使用します。
- モノラルサンプルは左チャネルと右チャネルの両方に複製されます。
- I2S ピンは **D11**、**D12**、**D13** です。

#### チュートリアルの実行

**ステップ 1.** USB 電源を外し、上図のように MAX98357A とスピーカーを配線します。

**ステップ 2.** Arduino IDE で `xiao_nrf52840_114_flash_record.ino` を開きます。

**ステップ 3.** **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** と正しい **Port** を選択します。

**ステップ 4.** スケッチをコンパイルしてアップロードします。

**ステップ 5.** **USR1** を押し、すぐにオンボードマイクに向かって約 **0.7 秒** 話します。

:::tip
録音は **USR1** を押した瞬間に開始されます — 赤い進行バーが表示されるのを待たないでください。0.7 秒のウィンドウは **USR1** が押された瞬間からカウントされるため、すぐに話し始めないとクリップの冒頭が欠けてしまいます。
:::

**ステップ 6.** 画面に **Saved WAV** と表示されるまで待ちます。

**ステップ 7.** **USR2** を押すと、スピーカーから録音が再生されます。

#### 期待される結果

- 起動時、画面には **Flash Recorder** と表示されます。
- 録音が存在しない場合、画面には **No recording** と表示されます。
- 録音中は、画面に進行状況の表示が出ます。
- 保存が完了すると、画面には **Saved WAV** と表示されます。
- **USR2** を押すと、スピーカーから録音が再生されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_flash_record_i2s.gif" style={{width:500, height:'auto'}}/></div>

---

## Grove I2C

1.14'' IPS ディスプレイには、標準的な 4 ピン Grove ソケット（GND / 3V3 / SDA / SCL）で D4（SDA）と D5（SCL）を引き出す専用の**Grove I2C コネクタ**があります。D4/D5 がタッチコントローラとも共有されている 1.47" 版とは異なり、1.14" ディスプレイでは D4/D5 はオンボード IMU とだけ共有されます（タッチコントローラはありません）。

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

**コードの場所:** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_sht31_temperature_humidity/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_sht31_temperature_humidity" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### ハードウェアセットアップ

**Grove SHT31** 温度・湿度センサを Grove I2C コネクタに接続します。センサは 3.3V で給電され、I2C アドレス `0x44` で通信します:

<div class="table-center">
  <table align="center">
    <tr><th>Grove ピン</th><th>XIAO ピン</th><th>SHT31</th></tr>
    <tr><td>GND</td><td>GND</td><td>GND</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>VCC</td></tr>
    <tr><td>SDA</td><td>D4</td><td>SDA</td></tr>
    <tr><td>SCL</td><td>D5</td><td>SCL</td></tr>
  </table>
</div>

#### 動作概要

スケッチは I2C アドレス `0x44` で SHT31 を I2C（`Wire`）経由で直接読み取ります:

1. **I2C スキャン** — 起動時に I2C バスをスキャンし、見つかったすべてのデバイスを報告します。
2. **シングルショット測定** — 高繰り返し精度のシングルショットコマンド（`0x24 0x00`、クロックストレッチなし）を送信し、20 ms 待ってから 6 バイトを読み取ります: 温度の上位/下位バイト + CRC、湿度の上位/下位バイト + CRC。
3. **CRC チェック** — 各 16 ビット値は対応する CRC バイトと照合され、一致しない場合はエラー（配線不良またはモジュールの破損/ノイズ）として報告されます。
4. **変換** — 生データは温度（`-45 + 175 × raw / 65535` °C）と相対湿度（`100 × raw / 65535` %）に変換されます。

ディスプレイは `Board_XIAO_1inch14_LCD<38, 37>` とスケッチローカルの `Config_XIAO_1inch14_LCD_ST7789_BGR`（135×240、BGR カラー順、反転）で初期化され、色が正しく表示されます。画面には「SHT31 OK」とライブの温度と湿度が表示され、読み取りに失敗した場合は「SHT31 ERROR」とエラーコードが表示されます。

#### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_114_sht31_temperature_humidity.ino` を開きます。

**ステップ 2.** **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** と正しい **Port** を選択し、**Upload** をクリックします。

**ステップ 3.** **Tools > Serial Monitor**（115200 ボー）を開きます。次のような出力が表示されます：

```
=== XIAO nRF52840 1.14 SHT31 Temperature/Humidity ===
[PIN] SDA=D4 SCL=D5 address=0x44
[I2C] scan start
[I2C] found 0x44
[I2C] scan done
[SHT31] OK T=26.81 C H=48.32 %
```

画面には温度と湿度とともに「SHT31 OK」が表示され、1 秒ごとに更新されます。センサが切断された場合や CRC チェックに失敗した場合、画面にはエラーコード付きで「SHT31 ERROR」が表示されます。

#### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_sht31.gif" style={{width:500, height:'auto'}}/></div>

画面上の温度と湿度は 1 秒ごとに更新されます。センサに息を吹きかけると、湿度の値が上昇します。

---

## ユーザーボタン

1.14'' IPS ディスプレイには、XIAO nRF52840 Plus に接続された**3 つの物理プッシュボタン**があります。3 つすべてのボタンにはボード上に外付けの **1 KΩ プルアップ抵抗**があるため、対応するピンを `INPUT` として設定できます（内部プルアップは不要です）：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th><th>Breakout Pad</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>アクティブ Low（押下 = LOW）</td><td>USR1</td><td>U1</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>アクティブ Low（押下 = LOW）</td><td>USR2</td><td>U2</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>アクティブ Low（押下 = LOW）</td><td>USR3</td><td>U3</td></tr>
  </table>
</div>

### ボタンの読み取り

ボード上にはすでに 1 KΩ の外付けプルアップがあるため、シンプルなダイレクトリードでボタンを読み取ることができます：

```cpp
const int USR1 = D6;
const int USR2 = D7;
const int USR3 = D19;

void setup() {
  // External 1K pull-up on the board — no internal pull-up needed.
  pinMode(USR1, INPUT);
  pinMode(USR2, INPUT);
  pinMode(USR3, INPUT);
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

メインループをブロックせずに、応答性が高くデバウンスされたボタン処理を行うには、ピンチェンジ割り込みを使用できます：

```cpp
volatile bool btn1Flag = false;
volatile bool btn2Flag = false;
volatile bool btn3Flag = false;

void btn1Isr() { btn1Flag = true; }
void btn2Isr() { btn2Flag = true; }
void btn3Isr() { btn3Flag = true; }

void setup() {
  pinMode(D6, INPUT);
  pinMode(D7, INPUT);
  pinMode(D19, INPUT);
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

プリインストールされているファームウェアでは、ボタンは次のように割り当てられています（自分のコードでこれらを上書きできます）：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td><strong>USR1</strong></td><td>D6</td><td>画面の明るさを切り替え（100% → 75% → 50% → 25% → 100%）</td></tr>
    <tr><td><strong>USR2</strong></td><td>D7</td><td>画面のオン / オフを切り替え（オフ / 最後の明るさに復帰）</td></tr>
    <tr><td><strong>USR3</strong></td><td>D19</td><td>ヘッダタイトルを「Hello,XIAO!」と「Seeed」の間で切り替え</td></tr>
  </table>
</div>

ボタンのブレークアウトパッド（ボード上では U1、U2、U3 と表示）は、それぞれ D6、D7、D19 に対応しており、必要に応じて外部ボタンを接続できます。

---

## バッテリーステータス

このデモでは、1.14'' IPS ディスプレイにバッテリーアイコン（充電レベルと充電状態）としてバッテリーステータスを表示します。LiPo バッテリーが物理的に接続されているかどうかを検出し、次の 3 つの状態のいずれかを表示します：**USB PWR**（バッテリーなし）、**percentage**（バッテリーのみ）、**charging**（USB + バッテリー）。

1.14'' IPS ディスプレイには、XIAO nRF52840 Plus に接続されたオンボードのバッテリー電圧測定回路が含まれています。

**コードの場所：** `code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/114_nRF52840/xiao_nrf52840_114_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

**ディスプレイ：**

画面は **Seeed_GFX2** によって駆動され、`Board_XIAO_1inch14_LCD<38, 37>` と `Config_Seeed_1inch14_LCD_ST7789`（135×240、BGR、回転 2）の BGR オーバーライドを使用し、10 MHz のハードウェア SPI 経由で動作します。

**バッテリー回路：**

nRF52840 Plus は、**3 本の GPIO ピン**を使用して完全なバッテリーモニタリングシステムを構成します：

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>nRF52840 Pin</th><th>Function</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>バッテリー分圧回路のイネーブル。アクティブ Low — 分圧器を有効にするには LOW にし、その後は電力を節約するため HIGH（高インピーダンス）に戻します。</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>分圧されたバッテリー電圧を読み取るアナログ入力。</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>充電ステータスインジケータ。アクティブ Low — 充電器が接続されバッテリーが充電中のとき LOW を読み取ります。</td></tr>
  </table>
</div>

**検出：**

USB-C 接続時には、静的な VBAT 電圧だけではバッテリーが存在するかどうかを判断できません。バッテリーが接続されていなくても、充電器の BAT ノードは実際のリチウムイオンセルのように見えることがあります。そのため、このデモではまず **USB のみのベースライン**を学習し、その後、VBAT の持続的な低下が見られたときにのみバッテリーの挿入を確定し、ノイズの多い／ジャンプした読み取りと `~CHG` の HIGH への遷移が組み合わさったときに取り外しを確定します。これはファクトリーダッシュボードの検出ロジックを反映したものです。

**アイコン状態：**

- **バッテリーなし** — 赤いバツ印付きのグレーのバッテリーアウトラインで、**USB PWR** と表示。
- **バッテリーあり** — 白いアウトラインのバッテリーに色付きのフィル（パーセンテージに応じて緑 / 黄 / 赤）が入り、**パーセンテージ**と**電圧**が表示されます。
- **充電中** — シアンのフィルと稲妻アイコンで、パーセンテージと電圧が表示されます。

:::note
`~CHG` ピンは `digitalRead()` ではなく、nRF52840 の **生の GPIO レジスタ**（`nrf_gpio_cfg_input()` と `NRF_P0->IN`）を通して読み取られます。Arduino API では、ピン番号はボードパッケージのマッピングに従っており、`digitalRead(17)` は実際には P0.17 ではなく **P0.07**（6D IMU の I2C データライン）を読み取ります。ここでの定数 `14` と `17` は **Nordic の生の P0.x ピン番号**（P0.14 と P0.17）であり、レジスタ呼び出しが期待しているものと正確に一致します。
:::

:::note
このデモでは、ファクトリーキャリブレーションされた **499 kΩ** のローサイド抵抗（分圧比 ≈ 3.004）を使用しており、510 kΩ の公称値ではありません。分圧器はディスプレイボードではなく、XIAO nRF52840 Plus モジュール自体に内蔵されています。P0.14 のイネーブルピンは **アクティブ Low** です：分圧器を有効にするには LOW にし、その後は高インピーダンス（INPUT）に戻して、バッテリーを測定していないときの静止電流消費を最小限に抑えます。
:::

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_114_battery_status.ino` を開きます。

**ステップ 2.** **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** と正しい **Port** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** 画面を観察します — 現在の状態に応じたバッテリーアイコンが表示されます。LiPo バッテリー（または USB-C ケーブル）を抜き差しして、アイコンが 3 つの状態の間で切り替わる様子を確認します。

### 期待される結果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong>（バッテリーなし）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong>（バッテリーのみ）</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong>（USB + バッテリー）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong>（背面）</div></td>
    </tr>
  </table>
</div>

バッテリーがない場合、画面には赤いバツ印が付いた灰色のバッテリーと **USB PWR** というラベルが表示されます。LiPo バッテリーを挿入すると、アイコンは色付きの残量表示に変わり、パーセンテージと電圧が表示されます。バッテリーが接続されている状態で USB-C を接続すると、残量表示は稲妻マーク付きのシアン色になり、充電中であることを示します。

このデモは 500 ms ごとに、シリアルモニタへ診断用の行も出力します。例：

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## リソース

- **🗃️[PCB Design Files]** [XIAO 1.14'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 1.14'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 1.14'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — すべての機能デモは `code_GFX2/Function/114_nRF52840/` ディレクトリ内にあります

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

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
