---
description: XIAO 1.47'' IPS Display (nRF52840) の各オンボードペリフェラル向けの、単体で動作する機能別デモ集です。画面、タッチ、SDカード、マイク、IMU、ボタン、およびバッテリー電圧検出をカバーします。
title: オンボードペリフェラルの使用方法
sidebar_label: 機能
keywords:
  - XIAO
  - nRF52840
  - IPS Display
  - LCD
  - Function
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /function_1.47_inch_touch_display_nrf52840
sku: 100004242
sidebar_position: 2
last_update:
  date: 08/20/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/ja/function_1.47_inch_touch_display_nrf52840/
---

# オンボードペリフェラルの使用方法

このページでは、1.47インチ IPS Display の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめています。各セクションはそれぞれ独立しているため、他を読むことなく、自分のユースケースに合ったものだけを選んで使うことができます。

:::tip
このページのデモGIFは、短く収めるために再生速度を上げています。
:::

:::note
このページのすべてのデモは、[Getting Started](/ja/getting_started_1.47_inch_touch_display_nrf52840) で説明している **Seeed nRF52 Boards (1.1.13)** に加え、以下の手順で手動インストールする **Seeed_GFX2** ライブラリが必要です。
:::

- **Library Manager** — **Sketch > Include Library > Manage Libraries...** に移動し、次を検索してインストールします：

<div class="table-center">
  <table align="center">
    <tr><th>Library</th><th>Search Keyword</th><th>Author</th><th>Required by</th></tr>
    <tr><td><strong>Seeed Arduino LSM6DS3</strong></td><td><code>Seeed Arduino LSM6DS3</code></td><td>Seeed Studio</td><td>IMU デモ</td></tr>
  </table>
</div>

:::note
**SdFat** は **Seeed nRF52 Boards (1.1.13)** ボードパッケージに同梱されているため、**SD Image Reader** と **Record to SD** のデモでは別途 SdFat をインストールする必要はありません。Library Manager から SdFat をインストールしないでください。同梱版が上書きされ、ライブラリや API の競合を引き起こす可能性があります。
:::

- **Seeed_GFX2 (手動インストール)** — このライブラリは Library Manager には登録されていないため、手動でインストールする必要があります：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Seeed_GFX2 をダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 1.** 上のボタンをクリックして、`Seeed_GFX2` v1.0.0 を ZIP ファイルとしてダウンロードします（チュートリアルの再現性を保つため、リリースタグに固定されています）。あるいは、[Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) からリポジトリをクローンしても構いません。

**Step 2.** Arduino IDE で **Sketch > Include Library > Add .ZIP Library...** を開き、ダウンロードした ZIP を選択します。IDE は `library.properties` を読み取り、正しい `Seeed_GFX2` フォルダに自動的にインストールします — 展開したフォルダ名を変更する必要はありません。（代わりに手動でインストールする場合は、アーカイブを解凍し、展開されたフォルダ名を `Seeed_GFX2` に変更してから `Documents/Arduino/libraries/` に配置します。）

**Step 3.** 新しいライブラリが認識されるように Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、レイヤ構造の `Board` + `Panel Config` アーキテクチャ上に構築された Seeed Studio のグラフィックスライブラリです。各デモは、単一の `display.begin<Board_..., Config_...>()` 呼び出しでディスプレイを初期化します。**Board** テンプレートがピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** が 172×320 の解像度、色順序（BGR）、および向きを組み込んでいます。`driver.h` や手動でのピン設定は不要です。
- このボードでは、デモは `Board_XIAO_1inch47_Touch_Display<38, 37>`（RST=38, BL=37）と `Config_Seeed_1inch47_Touch_JD9853A`（172×320、BGR、反転なし）を使用します。
- **タッチコントローラ**（AXS5106L）は `Seeed_GFX2` の Touch レイヤ（`Touch_AXS5106L`）によって処理され、追加のライブラリは不要です。**IMU** デモは **Seeed Arduino LSM6DS3** ライブラリ（上でインストール）を使用します。
:::

## デモコードの入手

このページのすべてのデモは、`code_GFX2/Function/` ディレクトリ以下の [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) リポジトリに含まれています。各デモは 1 つの `.ino` スケッチを含むフォルダです。GitHub の Web ビューから `.ino` のソースだけをコピーするのではなく、**必ずフォルダ全体をダウンロード**してください。

**オプション A — リポジトリを ZIP としてダウンロード（推奨）：**

1. [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) を開き、**Code > Download ZIP** をクリックしてから、任意の場所にアーカイブを展開します。
2. `code_GFX2/Function/` に移動し、各デモの **Code location** 行に示されているフォルダを開きます。たとえば、このボード向けの GraphicTest デモは `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_graphictest/` にあります。
3. **`.ino` ファイルをダブルクリック**して Arduino IDE で開きます。

**オプション B — git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

その後、クローンした `code_GFX2/Function/...` フォルダからデモの `.ino` ファイルを開きます。

## 画面表示 — GraphicTest

このデモは、1.47インチ JD9853A パネル上でフルグラフィックスベンチマークを実行し、カラーバー、線、矩形、円、三角形、角丸矩形、テキスト、ピクセルグラデーションを網羅します。画面が正しく配線されていること、およびすべての描画呼び出しが期待どおりに動作することを確認するために使用します。

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作概要

このスケッチは **Seeed_GFX2** を介して JD9853A パネルを初期化し、その後 10 種類のグラフィックスプリミティブを順番に実行します。それぞれの実行時間を `micros()` で計測し、結果をシリアルモニタに出力します。

ディスプレイは次の 1 回のテンプレート呼び出しで初期化されます：

```cpp
display.begin<Board_XIAO_1inch47_Touch_Display<38, 37>,
              Config_Seeed_1inch47_Touch_JD9853A>();
```

**Board** テンプレートはピンマップ — CS=D2、DC=D3、SCK=D8、MOSI=D10 — を保持し、その `<RST, BL>` テンプレートパラメータには生の GPIO 番号を指定するため、`<38, 37>` は RST=GPIO38、BL=GPIO37 を意味します。**Panel Config** は 172×320 の解像度、BGR の色順序、および反転なしを組み込んでおり、`driver.h` や手動での MADCTL 書き込みは不要です。

### デモの実行方法

**Step 1.** Arduino IDE で `xiao_nrf52840_147_graphictest.ino` を開きます。

**Step 2.** **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** と正しい **Port** を選択します。

**Step 3.** **Upload** をクリックします。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開きます。各テストのタイミング出力が表示されるはずです：

```
LCD width: 172
LCD height: 320
Color bars: 57.62 ms
Lines: 4859.38 ms
Fast lines: 95.70 ms
Rectangles: 74.22 ms
Filled rectangles: 236.33 ms
Circles: 588.87 ms
Triangles: 413.09 ms
Round rectangles: 125.98 ms
Text: 1961.91 ms
Pixel gradient: 8716.80 ms
Graphic test finished.
```

画面上では、各テストパターンが約 1 秒間表示され、その後次のパターンに切り替わります。すべてのテストが完了すると、青い角丸矩形の枠で囲まれた「Finished」画面が表示されます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

スケッチがすべてのパターンを実行し終えると、画面には「Graphic Test / Finished」というメッセージが表示されます。テストを再度実行するには、ボードをリセットしてください。

---

## タッチ — Touch Circle

このデモは、1.47インチタッチスクリーンをインタラクティブなお絵描きパッドに変えます。画面上の任意の場所をタップすると、指先の位置に白い円が表示されます。円は画面上に残り、タップするたびに蓄積されていきます。画面下部の **CLEAR** バーをタップすると、すべての円が消去され、最初からやり直すことができます。

**Code location:** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_touch_circle/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このデモでは、I2C アドレス `0x63` の **AXS5106L** 静電容量式タッチコントローラを D4/D5 の I2C 経由で接続しています。**D7** 上のタッチ割り込みラインは、指が画面に触れた／離れたときにフォールエッジで発生します。タッチ処理は Seeed_GFX2 の **Touch レイヤ**（`Touch_AXS5106L`）によって行われます：

```cpp
Touch_AXS5106L touch(-1, D7, Wire, 172, 320);
display.attachTouch(touch, display.panel().driver().bus());
// ...
display.getTouch(&x, &y);
```

<div class="table-center">
  <table align="center">
    <tr><th>ピン</th><th>機能</th></tr>
    <tr><td>D4 (SDA)</td><td>I2C データバス — IMU と共有</td></tr>
    <tr><td>D5 (SCL)</td><td>I2C クロックバス — IMU と共有</td></tr>
    <tr><td>D7</td><td>タッチ割り込み（アクティブ Low、フォールエッジ）</td></tr>
    <tr><td>RST</td><td>LCD リセット（GPIO38）と共有</td></tr>
  </table>
</div>

**エッジトリガの描画。** このスケッチはエッジ検出方式を使用しており、指を押し下げた瞬間（フォールエッジ）にのみ円を追加し、指を押し続けている間は追加しません。これにより、ドラッグ中に線を描き続けるのではなく、意図したタップごとにくっきりとした描画が行えます。

**X 軸の反転。** タッチパネルは LCD とは異なる向きで物理的に実装されているため、生の X 座標は反転させる必要があります。`display.getTouch()` は内部でこの反転処理を行い、画面座標を返すため、`screenX = 172 - 1 - rawX` のような手動変換は不要です。

**円のバッファ。** 最大 120 個の円をリングバッファに保存します。バッファが一杯になると最も古い円が削除され、表示をきれいに保つために画面が再描画されます。

**CLEAR ゾーン。** 画面下部 36 ピクセルは CLEAR バーとして予約されています。この領域をタップすると、新しい円を描く代わりにすべての円が消去され、カウンタがリセットされます。

**安全な描画領域。** 薄いグレーの枠線で、円が完全に表示される領域を囲っています。

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_147_touch_circle.ino` を開きます。

**ステップ 2.** ボードとポートを選択し、**Upload** をクリックします。

**ステップ 3.** **Tools > Serial Monitor**（115200 ボー）を開きます。次のような表示が出ます：

```
LCD: 172x320
Touch: AXS5106L ready
Tap screen to draw white circles.
Tap CLEAR bar at bottom to erase.
```

**ステップ 4.** 画面をタップします — 各タップでマッピングされた画面座標が出力されます：

```
Touch: screen=(144,124)
Touch: screen=(166,210)
Touch: screen=(121,250)
Touch: screen=(37,231)
Touch: screen=(122,44)
```

下部の CLEAR バーをタップすると、すべての円が消去されます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_touch_circle.gif" style={{width:500, height:'auto'}}/></div>

各タップで指先の位置に白い円が残ります。画面上部のタイトルバーにはタップ数の累計が表示されます。CLEAR バーをタップすると、画面は枠線とタイトルバーだけが再描画された空の状態にリセットされます。

---

## SD カード — 画像リーダー

このデモでは、MicroSD カードから `.bmp` 画像ファイルを読み込み、画面に表示します。24 ビット非圧縮 BMP 画像をサポートし、172×320 ディスプレイに収まるよう中央をクロップします。

**コードの場所：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_sd_image_reader/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

LCD と SD カードは同じハードウェア SPI バス（SCK = D8、MOSI = D10、MISO = D9）を共有しています。バス競合を避けるため、スケッチは LCD の操作を行う前に SD カードのチップセレクト（D6）を非アサートし、SD アクセスの前に再度アサートします。SD カードはデフォルトの `SPI` インスタンス上で `SHARED_SPI` モードの SdFat によって駆動され、LCD は Seeed_GFX2 の SPI ホスト上で動作します — どちらも物理的には同じ D8/D9/D10 ピンを共有します。

スケッチは SD カードのルートディレクトリを走査して `.bmp` ファイル（最大 24 個）を探し、2 秒間隔でループ表示します。

**対応している BMP フォーマット：**

<div class="table-center">
  <table align="center">
    <tr><th>フォーマット</th><th>ビット深度</th><th>備考</th></tr>
    <tr><td>非圧縮 BMP</td><td>24-bit</td><td>BGR888 を RGB565 に変換して表示</td></tr>
  </table>
</div>

172×320 より大きい画像は中央をクロップして表示します。

### デモの実行

**ステップ 1.** MicroSD カードを **FAT32** でフォーマットします。

**ステップ 2.** 1 枚以上の `.bmp` 画像を SD カードのルートディレクトリにコピーします。

**ステップ 3.** SD カードをディスプレイボード上の MicroSD スロットに挿入します。

**ステップ 4.** Arduino IDE で `xiao_nrf52840_147_sd_image_reader.ino` を開き、ボードとポートを選択して **Upload** をクリックします。

**ステップ 5.** **Tools > Serial Monitor**（115200 ボー）を開きます。次のような表示が出ます：

```
[IMAGE] /Atest.bmp
[IMAGE] /Another test.bmp
[IMAGE] /test.bmp
[SD] mounted @ 8000000
```

:::note
表示されるファイル名は、SD カードに配置した `.bmp` ファイルを反映したものです。出力内容は、カードにコピーしたファイルによって異なります。
:::

画面には各画像が 2 秒ずつ表示され、その後次の画像へと連続ループで切り替わります。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_sd_reader.gif" style={{width:500, height:'auto'}}/></div>

BMP ファイルが見つからない場合、画面には「No BMP found」と表示されます。画像のデコードに失敗した場合は、ファイルパスとともに「BMP decode failed」と短時間表示され、次のファイルに進みます。

---

## マイク & スピーカー

1.47'' IPS Display には、オーディオ入力用の **PDM（Pulse Density Modulation）デジタルマイク** がオンボードで搭載されており、さらに外部スピーカー／アンプを駆動するための I2S 出力パッドも備えています。このセクションでは、リアルタイムでマイク入力を可視化する **Volume Bar** デモ（追加ハードウェア不要）と、5 秒間の音声を MicroSD カードに録音し、外部 I2S アンプから再生する **Record to SD** デモの 2 つを紹介します。

<div class="table-center">
  <table align="center">
    <tr><th>ピン</th><th>信号</th><th>機能</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>マイクへの PDM クロック出力</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>マイクからの PDM データ入力</td></tr>
  </table>
</div>

### デモ 1: Volume Bar

このデモでは、オンボードの PDM マイクを大きく応答性の高いボリュームメータとして使用します。10 セグメントのバーが画面中央に表示され、低レベルでは緑、中程度では黄色、大きな音量では赤で塗りつぶされます。バーの上にはパーセンテージが表示され、レベルに応じて色が変化します。

**コードの場所：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_mic_canvas/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 動作の仕組み

オンボードの **PDM（Pulse Density Modulation）デジタルマイク** は、上のピンテーブルに示すように、**D0 (PDM_CLK)** と **D1 (MIC_DATA)** を介して nRF52840 の PDM ペリフェラルに接続されています。

Arduino の **PDM ライブラリ** が、ハードウェアでの低レベルな PDM から PCM への変換を処理します。スケッチは PDM ペリフェラルを **16 kHz モノラル**、ゲイン **30** に設定し、256 サンプルのバッファが準備できるたびに発火する割り込み駆動のコールバック（`onPDMdata`）を登録します。

**信号処理：**

1. **ピーク抽出** — 各コールバックで 256 サンプルのバッファを走査し、最大の絶対値（ピーク振幅）を求めます。
2. **正規化** — 生のピーク値を下限 40、上限 16,000 にマッピングし、0.0〜1.0 の音量値を生成します。下限未満の値は無音として扱われます。
3. **指数平滑化** — 表示される音量は、生のピーク値に対する指数移動平均（α = 0.20）で、ちらつきを防ぎます。無音が検出された場合、表示値はフレームごとに ×0.94 で減衰します。

**バーの描画：**

<div class="table-center">
  <table align="center">
    <tr><th>セグメント</th><th>色</th><th>音量レンジ</th></tr>
    <tr><td>0–4（下 5）</td><td>緑</td><td>0% – 50%</td></tr>
    <tr><td>5–8（中央 4）</td><td>黄</td><td>50% – 90%</td></tr>
    <tr><td>9 (top)</td><td>Red</td><td>90% – 100%</td></tr>
  </table>
</div>

このバーは**差分レンダリング**を使用します。前のフレームから状態が変化したセグメントだけが再描画されます。変化していないセグメントはそのまま残されるため、SPI トラフィックを最小限に抑え、ちらつきを防ぎます。

#### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_147_mic_canvas.ino` を開きます。

**ステップ 2.** ボードとポートを選択し、**Upload** をクリックします。

**ステップ 3.** **Tools > Serial Monitor**（115200 ボー）を開きます。次のような表示が見えるはずです：

```
[MIC] ready
```

**ステップ 4.** PDM マイク（ディスプレイボード左下付近にあります）に向かって話すか、息を吹きかけます。バーは緑から黄色、赤へと満たされ、上部のパーセンテージが更新されます。

#### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_mic_bar.gif" style={{width:500, height:'auto'}}/></div>

バーはリアルタイムに反応します。静かな部屋ではバーは空のままです。約 20 cm 離れた位置から通常の声量で話すと、緑のセグメントが点灯します。マイクに直接息を吹きかけると、黄色や赤の範囲まで押し上げられます。

---

### デモ 2: SD への録音

このデモでは、オンボード PDM マイクからの音声を **5 秒間** RAM に録音し、MicroSD カードに WAV ファイルとして保存してから、外部 I2S アンプを通して再生します。録音用のボタンと再生用のボタンをそれぞれ 1 つずつ押して操作します。

**コードの場所：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_sd_unline_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### ハードウェアセットアップ

再生には外部の**I2S オーディオアンプとスピーカー**が必要です。このデモは、ボードの I2S 出力パッドに接続された **MAX98357A** ブレークアウト用に作成されています。

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

I2S パッド（3V3、GND、D11、D12、D13）は、ディスプレイボードのボトム拡張パッドグループに引き出されています。

#### 動作の仕組み

**録音。** オンボード PDM マイクは、nRF52840 の PDM ペリフェラルを通じて **16 kHz モノラル、16 ビット** でキャプチャされ、デモ 1 と同じ **D0 (PDM_CLK)** / **D1 (MIC_DATA)** ピンを使用します。**USR1** を押すと、スケッチは 5 秒分の音声を静的 RAM バッファに直接サンプリングし、その後 Seeed nRF52 Boards 1.1.13 に同梱されている SdFat ライブラリを使用して、SD カードに WAV ファイル（`/REC_001_RAW.WAV`）として書き込みます。

録音は RAM にバッファリングされます。これは nRF52840 が **256 KB の RAM** しか持たないためです。16 kHz × 16 ビットモノラルでは、5 秒で 160,000 バイトが必要で、これは収まります。10 秒では 320,000 バイトが必要となり収まらないため、このデモは 5 秒に固定されています。

**再生。** **USR2** を押すと、SD カードから WAV を読み戻し（44 バイトの WAV ヘッダをスキップ）、nRF52840 の I2S ペリフェラルを通じて Philips ステレオモードで **D11/D12/D13** からストリーミング出力します。モノラルサンプルは両チャンネルに複製され、クリッピングを避けるために `0.75×` のゲインが適用されます。アンプが小型スピーカーを駆動し、録音内容を聞くことができます。

**ステートマシン。** レコーダーは決定論的な一連の状態を順に進み、その遷移ごとにシリアルモニタへ出力します。

```
IDLE → PREPARE_SYSTEM → QUIET_RADIO → PREPARE_PERIPHERALS → START_HFCLK → START_PDM
     → DISCARD_WARMUP → CAPTURE_RAM → STOP_PDM → SAVE_RAW → DONE
```

- **QUIET_RADIO** は RADIO ペリフェラルを無効化します（このスケッチは BLE を初期化しません）。これにより、タイミングに敏感なキャプチャ処理を安定させます。
- **START_HFCLK** は高周波クロックを外部 32 MHz 水晶発振子に切り替えます。PDM ペリフェラルが正確にサンプリングするために必要です。
- **DISCARD_WARMUP** は、マイクが安定するまでの最初の 300 ms の PDM 出力を破棄します。
- **CAPTURE_RAM** は、80,000 サンプル（5 秒）が集まるまでバッファを埋め、その間、画面に進行状況バーをリアルタイム表示します。

**画面上の状態：**

<div class="table-center">
  <table align="center">
    <tr><th>State</th><th>Description</th></tr>
    <tr><td><strong>Ready</strong></td><td>"RAM Recorder" タイトルと "USR1: record" および "USR2: play last" が表示されます</td></tr>
    <tr><td><strong>Recording</strong></td><td>"Recording" ラベル、経過時間タイマー（"2.3s / 5s"）と赤い進行状況バーが表示されます</td></tr>
    <tr><td><strong>Done</strong></td><td>"Done" タイトルと保存されたファイル名、「Saved raw WAV」、さらに "USR1: record" / "USR2: play raw" が表示されます</td></tr>
    <tr><td><strong>Playback</strong></td><td>"Playback" タイトルが表示され、"Loading RAW audio..."、次に "Playing RAW audio" と続き、最後に "Finished" で終了します</td></tr>
  </table>
</div>

#### デモの実行

**ステップ 1.** MicroSD カードを **FAT32** でフォーマットし、ディスプレイボード上の MicroSD スロットに挿入します。

**ステップ 2.** 上記の説明どおりに、MAX98357A アンプとスピーカーを I2S パッドに接続します。

**ステップ 3.** Arduino IDE で `xiao_nrf52840_147_sd_unline_record.ino` を開き、ボードとポートを選択して **Upload** をクリックします。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開きます。起動時に次のような表示が見えるはずです：

```
=== XIAO nRF52840 Plus RAM PDM recorder ===
[RAM] record buffer bytes=160000
[RADIO] BLE is not initialized by this sketch
[PDM] library uses EasyDMA double buffering
[STATE] IDLE
```

**ステップ 5.** **USR1 (D19)** を押して、オンボードマイクから 5 秒間の音声を録音します。録音中は進行状況バーが埋まり、ステートマシンが各遷移を出力します。

```
[STATE] PREPARE_SYSTEM
[STATE] QUIET_RADIO
[STATE] PREPARE_PERIPHERALS
[STATE] START_HFCLK
[STATE] START_PDM
[STATE] DISCARD_WARMUP
[STATE] CAPTURE_RAM
[STATE] STOP_PDM
[STATE] SAVE_RAW
[STATE] DONE
[SAVE] /REC_001_RAW.WAV
```

**ステップ 6.** **USR2 (D15)** を押して、録音をスピーカーから再生します。

```
[PLAY] latest RAW audio
[PLAY] finished
```

:::note
新しい録音はそれぞれ番号付きの WAV ファイル（`REC_001_RAW.WAV`、`REC_002_RAW.WAV`、…）として保存されるため、以前の録音は保持されます。"Done" 画面には、最新の録音のファイル名が表示されます。
:::

#### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_record.gif" style={{width:500, height:'auto'}}/></div>

USR1 を押すと、画面に録音の進行状況バーが表示されます。5 秒後、WAV が SD カードに保存されたことが確認されます。USR2 を押すと、接続されたスピーカーから音声が再生され、画面には再生ステータスが表示されます。

---

## IMU

### デモ 1: 電子クイックサンド

このデモでは、画面をインタラクティブな流体シミュレーションに変えます。オンボードの LSM6DS3 6 軸 IMU で計測された重力に従って流れ、堆積する金色の砂粒です。ボードを傾けると、砂はリアルタイムに向きを変えて移動します。

**コードの場所：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このシミュレーションでは、172×320 の画面上に **24×45 の占有グリッド** を重ね、各セルは 7×7 ピクセルです。グリッド内には約 **180 個の粒子** が配置されており、それぞれ位置、速度、金色のカラ―グラデーションを持ちます。

LSM6DS3 加速度センサは I2C（D4/D5）経由で **8 ms** ごとに読み取られます。生の加速度値はローパスフィルタで処理され、重力ベクトルの算出に使用されます。ボードを傾けると次のように動作します。

1. **重力ベクトルの更新** — 加速度データは指数移動平均で平滑化され、ジッタを抑えます。
2. **粒子の速度** — 各粒子は重力ベクトルの方向に加速し、減衰と、流れの中での深さに基づく粒子ごとの可動性係数が適用されます。
3. **セルの占有状態** — 流れの中でより深い位置（重力に対して「下側」に近い）にある粒子ほど可動性が低くなり、現実的な詰まり（パッキング）効果を生み出します。
4. **差分レンダリング** — 粒子が出入りしたセルだけを再描画し、SPI トラフィックを最小限に抑えてアニメーションを滑らかに保ちます。

表面付近の粒子は自由に流れます（高い可動性）。一方、より深く埋もれた粒子は密に詰まり（低い可動性）、実際の砂の挙動を模倣します。

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_147_electronic_quicksand.ino` を開きます。

**ステップ 2.** ボードとポートを選択し、**Upload** をクリックします。

**ステップ 3.** アップロードが完了すると、画面の下部が金色の粒子で満たされます。ボードをさまざまな方向に傾けると、砂が重力に引かれているかのように流れます。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開き、初期化を確認します：

```
=== Electronic Quicksand ===
imu.begin=0
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

ボードを傾けると、金色の砂粒が滑らかに流れます。水平に保つと、砂は画面の下部に落ち着きます。ボードを 90 度回転させると、1 秒以内に砂が新しい「下側」へと流れます。

---

### デモ 2: 持ち上げてスリープ解除

このデモでは、LSM6DS3 IMU の内蔵ウェイクアップ割り込みを **D14** に接続し、それを利用した**画面のスリープ／ウェイクシステム**を実装しています。8 秒間操作がないと画面が自動的にオフになり（バックライトオフ + CPU は System ON スリープに移行）、デバイスを持ち上げたり動かしたりすると即座に復帰します。

**コードの場所：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このデモでは、LSM6DS3 の**組み込みウェイクアップイベント検出器**を使用します。これは、加速度センサーデータを内部で監視し、モーションが設定可能なしきい値を超えたときに INT1 ピン（このボードでは D14 に接続）をアサートするハードウェア機能です。つまり、MCU が加速度センサーを常時ポーリングする必要はありません。

**IMU の設定：**

<div class="table-center">
  <table align="center">
    <tr><th>レジスタ</th><th>値</th><th>目的</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度センサー @ 104 Hz, ±2g</td></tr>
    <tr><td><code>CTRL3_C</code></td><td><code>0x44</code></td><td>ブロックデータ更新 + オートインクリメント</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>組み込み割り込みを有効化</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>ウェイクアップしきい値（中〜低感度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>継続時間フィルタなし（応答性の高いウェイク）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>ウェイクアップを INT1 にルーティング</td></tr>
  </table>
</div>

**スリープ／ウェイクの流れ：**

1. **アクティブ状態** — 画面オン、バックライトは PWM 120。IMU データとバッテリーステータスはそれぞれ 250 ms / 1000 ms ごとに更新されます。カウントダウンタイマーには自動スリープまでの残り秒数が表示されます。
2. **自動スリープ** — 8 秒間アクティビティがないと、スケッチはバックライトをオフにし、「Sleeping... Pick up device to wake」というメッセージを描画してから、WFE（Wait For Event）を使って nRF52840 を **System ON スリープ**に移行させます。
3. **ウェイクアップ** — ユーザーがボードを持ち上げると、LSM6DS3 がモーションを検出して D14 を HIGH にアサートします。GPIO 割り込みが発生し、CPU は WFE から復帰、バックライトがオンになり、UI が完全に再描画されます。

System ON スリープ中は、すべての RAM とペリフェラルの状態が保持されます。ウェイクアップはほぼ瞬時で、割り込みからバックライト点灯まで 1 ms 未満です。

**手動テストボタン：**

<div class="table-center">
  <table align="center">
    <tr><th>ボタン</th><th>ピン</th><th>動作</th></tr>
    <tr><td>USR1</td><td>D19</td><td>強制スリープ</td></tr>
    <tr><td>USR2</td><td>D15</td><td>強制ウェイク</td></tr>
  </table>
</div>

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_147_wakeup.ino` を開き、ボードとポートを選択して **Upload** をクリックします。

**ステップ 2.** 画面には電源状態、モーションデータ、カウントダウンタイマーを備えたダッシュボードが表示されます。ボードを 8 秒間静止させると、自動的にスリープします。

**ステップ 3.** ボードを持ち上げるか、軽く振ると、画面が即座に復帰します。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開き、スリープ／ウェイクの遷移を観察します：

```
[SLEEP] screen backlight off, waiting for IMU D14 wake
[SYS_ON_SLEEP] waiting, sleepLoops=26625 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=27649 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=28673 D14=0 awake=N
[SYS_ON_SLEEP] waiting, sleepLoops=29697 D14=0 awake=N
[WAKE] reason=IMU_D14 wakeCount=1 sleptMs=58776 sleepLoops=29705
[WAKE] reason=IMU_D14 wakeCount=2 sleptMs=60110 sleepLoops=29705
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

スリープ解除中は、画面にリアルタイムの加速度センサーおよびジャイロスコープデータが表示されます。8 秒間静止すると画面が暗くなり、nRF52840 は低消費電力スリープに入ります。デバイスを持ち上げると、画面はコンマ数秒で復帰し、ウェイクカウンターがインクリメントされます。

---

## ユーザーボタン

1.47 インチ IPS ディスプレイには、XIAO nRF52840 Plus に接続された**2 つの物理プッシュボタン**があります：

<div class="table-center">
  <table align="center">
    <tr><th>ボタン</th><th>ピン</th><th>ロジック</th><th>シルク印刷ラベル</th></tr>
    <tr><td><strong>BTN_A</strong></td><td>D19</td><td>アクティブロー（押下 = LOW）</td><td>USR1</td></tr>
    <tr><td><strong>BTN_B</strong></td><td>D15</td><td>アクティブロー（押下 = LOW）</td><td>USR2</td></tr>
  </table>
</div>

### ボタンの読み取り

両方のボタンは XIAO の内部プルアップ抵抗を使用します。シンプルなノンブロッキング読み取りは次のようになります：

```cpp
const int BTN_A = D19;
const int BTN_B = D15;

void setup() {
  pinMode(BTN_A, INPUT_PULLUP);
  pinMode(BTN_B, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  if (digitalRead(BTN_A) == LOW) {
    Serial.println("BTN_A pressed");
    delay(200); // simple debounce
  }
  if (digitalRead(BTN_B) == LOW) {
    Serial.println("BTN_B pressed");
    delay(200);
  }
}
```

### 割り込みによるデバウンス

メインループをブロックせずに、応答性の高いデバウンス済みボタン処理を行うには、ピンチェンジ割り込みを使用できます：

```cpp
volatile bool btnAFlag = false;
volatile bool btnBFlag = false;

void btnAIsr() { btnAFlag = true; }
void btnBIsr() { btnBFlag = true; }

void setup() {
  pinMode(D19, INPUT_PULLUP);
  pinMode(D15, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(D19), btnAIsr, FALLING);
  attachInterrupt(digitalPinToInterrupt(D15), btnBIsr, FALLING);
}

void loop() {
  if (btnAFlag) {
    btnAFlag = false;
    delay(30); // debounce settling time
    if (digitalRead(D19) == LOW) {
      // handle BTN_A press
    }
  }
  if (btnBFlag) {
    btnBFlag = false;
    delay(30);
    if (digitalRead(D15) == LOW) {
      // handle BTN_B press
    }
  }
}
```

### 工場出荷時ダッシュボードでのデフォルト動作

プリインストールされている工場出荷時ファームウェアでは、ボタンは次のように割り当てられています（自分のコードでこれらを上書きできます）：

<div class="table-center">
  <table align="center">
    <tr><th>ボタン</th><th>動作</th></tr>
    <tr><td><strong>BTN_A (D19)</strong></td><td>短押し：画面の明るさを循環 <strong>100% → 75% → 50% → 25% → 0% → 100%</strong></td></tr>
    <tr><td><strong>BTN_B (D15)</strong></td><td>短押し：<strong>画面のオフ／最後の明るさへの復帰をトグル</strong></td></tr>
  </table>
</div>

ボタンのブレークアウトパッド（基板上では U1 と U2 と表示）は、それぞれ D19 と D15 に対応しており、必要に応じて外部ボタンを接続できます。

---

## バッテリーステータス

このデモでは、1.47 インチ IPS ディスプレイ上に、充電レベルと充電状態を示すバッテリーアイコンとしてバッテリーステータスを表示します。LiPo バッテリーが物理的に接続されているかどうかを検出し、**USB PWR**（バッテリーなし）、**パーセンテージ**（バッテリーのみ）、**充電中**（USB + バッテリー）の 3 つの状態のいずれかを表示します。

1.47 インチ IPS ディスプレイには、オンボードのバッテリー電圧測定回路が含まれています。nRF52840 Plus は電圧分圧回路を介して LiPo バッテリー電圧を読み取り、残容量をパーセンテージとして表示できます。

**コードの場所：** `code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_nRF52840/xiao_nrf52840_147_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

**ディスプレイ：**

画面は **Seeed_GFX2** によって、`Board_XIAO_1inch47_Touch_Display<38, 37>` と `Config_Seeed_1inch47_Touch_JD9853A`（172×320、BGR、回転 2）を用いて、10 MHz のハードウェア SPI 経由で駆動されます。

**バッテリー回路：**

nRF52840 Plus は **3 本の GPIO ピン** を使用して、完全なバッテリー監視システムを構成します：

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>nRF52840 Pin</th><th>Function</th></tr>
    <tr><td><code>READ_BAT</code></td><td><strong>P0.14</strong></td><td>バッテリー電圧分圧回路の有効化。アクティブ Low — 分圧回路を有効にするには LOW に設定し、その後は電力を節約するために HIGH（高インピーダンス）に戻します。</td></tr>
    <tr><td><code>VBAT_ADC</code></td><td><strong>PIN_VBAT</strong> (AIN7 / P0.31)</td><td>分圧されたバッテリー電圧を読み取るアナログ入力。</td></tr>
    <tr><td><code>CHG</code></td><td><strong>P0.17</strong></td><td>充電状態インジケータ。アクティブ Low — 充電器が接続されバッテリーが充電中のときに LOW を読み取ります。</td></tr>
  </table>
</div>

**検出：**

USB-C 接続時には、静的な VBAT 電圧だけではバッテリーが存在するかどうかを判別できません — バッテリーが接続されていなくても、充電器側の BAT ノードが実際のリチウムイオンセルのように見える場合があります。そのため、このデモではまず **USB のみのベースライン** を学習し、その後、VBAT が一定時間にわたって低下したことを確認してからバッテリーの挿入を確定し、読み値がノイジー／ジャンプしたことに `~CHG` が HIGH になることを組み合わせてバッテリーの取り外しを確定します。これは工場出荷時の Dashboard の検出ロジックを反映したものです。

**アイコン状態：**

- **バッテリーなし** — 赤いバツ印付きのグレーのバッテリー枠で、ラベルは **USB PWR**。
- **バッテリーあり** — 白いバッテリー枠に色付きのフィル（残量に応じて緑 / 黄 / 赤）が入り、**パーセンテージ** と **電圧** がラベル表示されます。
- **充電中** — 雷アイコン付きのシアンのフィルで、パーセンテージと電圧がラベル表示されます。

:::note
`~CHG` ピンは、`digitalRead()` ではなく、nRF52840 の **生の GPIO レジスタ**（`nrf_gpio_cfg_input()` と `NRF_P0->IN`）を通じて読み取られます。Arduino API では、ピン番号はボードパッケージのマッピングに従うため、`digitalRead(17)` は実際には P0.17 ではなく（6D IMU の I2C データラインである）**P0.07** を読み取ります。ここでの定数 `14` と `17` は **生の Nordic P0.x ピン番号**（P0.14 と P0.17）であり、これはレジスタ呼び出しが期待しているものと完全に一致します。
:::

:::note
このデモでは、工場出荷時に較正された **499 kΩ** のローサイド抵抗（分圧比 ≈ 3.004）を使用しており、公称値の 510 kΩ ではありません。分圧回路はディスプレイボードではなく、XIAO nRF52840 Plus モジュール自体に内蔵されています。P0.14 のイネーブルピンは **アクティブ Low** です：分圧回路を有効にするには LOW にし、その後は高インピーダンス（INPUT）に戻して、バッテリーを測定していないときの静止電流消費を最小限に抑えます。
:::

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_nrf52840_147_battery_status.ino` を開きます。

**ステップ 2.** **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus** と正しい **Port** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** 画面を確認します — 現在の状態を示すバッテリーアイコンが表示されます。LiPo バッテリー（または USB-C ケーブル）を抜き差しして、アイコンが 3 つの状態の間で切り替わる様子を確認してください。

### 期待される結果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state1.jpg" style={{width:300, height:'auto'}}/><br/><strong>USB PWR</strong>（バッテリーなし）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state2.jpg" style={{width:300, height:'auto'}}/><br/><strong>Percentage</strong>（バッテリーのみ）</div></td>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_state3.jpg" style={{width:300, height:'auto'}}/><br/><strong>Charging</strong>（USB + バッテリー）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_nRF52840Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>Battery connector</strong>（背面）</div></td>
    </tr>
  </table>
</div>

バッテリーがない場合、画面には赤いバツ印付きのグレーのバッテリーと **USB PWR** のラベルが表示されます。LiPo バッテリーを挿入すると、アイコンは色付きのフィルに切り替わり、パーセンテージと電圧が表示されます。バッテリーが接続されている状態で USB-C を挿すと、フィルはシアンになり雷マークが表示され、充電中であることを示します。

このデモは、500 ms ごとにシリアルモニタへ診断用の 1 行を出力します。例：

```
VBAT 3.87V  charging  85  spread=5  usb=ON  base=4.140  baseValid=Y  state=PRESENT  filter=STABLE  removeCount=0
```
---

## リソース

- **🗃️[PCB Design Files]** [XIAO 1.47'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 1.47'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 1.47'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — すべての Function デモは `code_GFX2/Function/147_nRF52840/` ディレクトリ内にあります

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

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
