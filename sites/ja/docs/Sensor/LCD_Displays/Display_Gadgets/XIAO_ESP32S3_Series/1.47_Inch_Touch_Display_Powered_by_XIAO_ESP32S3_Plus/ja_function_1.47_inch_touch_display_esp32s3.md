---
description: XIAO 1.47'' IPS Display (ESP32-S3) の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめたページです。画面、SDカード、IMU、タッチ、PDMマイク、SDオーディオ録音・再生、ボタン、バッテリー電圧検出をカバーします。
title: オンボードペリフェラルの使い方
keywords:
  - XIAO
  - ESP32-S3
  - IPS Display
  - LCD
  - Function
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /function_1.47_inch_touch_display_esp32s3
sku: 100069905
sidebar_label: Function
sidebar_position: 2
last_update:
  date: 08/26/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-08-26'
url: https://wiki.seeedstudio.com/ja/function_1.47_inch_touch_display_esp32s3/
---

# オンボードペリフェラルの使い方

このページでは、1.47インチ IPS Display の各オンボードペリフェラル向けに、単体で動作する機能別デモをまとめています。各セクションはそれぞれ独立しており、他を読まずに自分のユースケースに合うものだけを選んで使うことができます。

:::tip
このページのデモ GIF は、短く収めるために再生速度を上げています。
:::

:::note
このページのすべてのデモは、[Getting Started](/ja/getting_started_1.47_inch_touch_display_esp32s3) で説明している **esp32 Boards by Espressif (3.3.11)** に加えて、以下の手順で手動インストールする **Seeed_GFX2** ライブラリが必要です。
:::

- **Seeed_GFX2（手動インストール）** — このライブラリは Library Manager には登録されていないため、手動でインストールする必要があります：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Seeed_GFX2 をダウンロード</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 1.** 上のボタンをクリックして、`Seeed_GFX2` v1.0.0 を ZIP ファイルとしてダウンロードします（チュートリアルの再現性を保つため、リリースタグに固定されています）。あるいは、[Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2) からリポジトリを clone しても構いません。

**ステップ 2.** Arduino IDE で **Sketch > Include Library > Add .ZIP Library...** を開き、ダウンロードした ZIP を選択します。IDE は `library.properties` を読み取り、正しい `Seeed_GFX2` フォルダに自動的にインストールします — 展開したフォルダ名を変更する必要はありません。（代わりに手動インストールする場合は、アーカイブを解凍し、展開されたフォルダ名を `Seeed_GFX2` に変更してから `Documents/Arduino/libraries/` に配置します。）

**ステップ 3.** 新しいライブラリを認識させるため、Arduino IDE を再起動します。

:::tip
- **Seeed_GFX2** は、`Board` + `Panel Config` というレイヤ構造の上に構築された Seeed Studio のグラフィックスライブラリです。各デモは、単一の `display.begin<Board_..., Config_...>()` 呼び出しでディスプレイを初期化します。**Board** テンプレートはピンマップ（CS/DC/SCK/MOSI/RST/BL）を保持し、**Panel Config** は解像度、色順序（BGR）、向きを組み込みます。`driver.h` や手動でのピン設定は不要です。
- このボードでは、デモは `Board_XIAO_1inch47_Touch_Display<13, 12>`（RST=13, BL=12）と `Config_Seeed_1inch47_Touch_JD9853A`（172×320、BGR、反転なし）を使用します。
- **タッチコントローラ**（AXS5106L）は `Seeed_GFX2` の Touch レイヤ（`Touch_AXS5106L`）によって処理され、追加のライブラリは不要です。**IMU** はスケッチ内で素の I2C（`Wire`）経由で読み取ります。
- **SD BMP Reader** と **SD Recorder** のサンプルは、SD カードアクセスに ESP32 ボードパッケージに内蔵されている **`SD.h`** を使用します。
:::

## デモコードの入手

このページのすべてのデモは、`code_GFX2/Function/` ディレクトリ以下の [Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) リポジトリに含まれています。各デモは 1 つの `.ino` スケッチを含むフォルダになっています。GitHub の Web ビューから `.ino` のソースだけをコピーするのではなく、**必ずフォルダごと**ダウンロードしてください。

**オプション A — リポジトリを ZIP としてダウンロード（推奨）：**

1. [github.com/Seeed-Projects/Display-Gadgets](https://github.com/Seeed-Projects/Display-Gadgets) を開き、**Code > Download ZIP** をクリックしてから、任意の場所にアーカイブを展開します。
2. `code_GFX2/Function/` に移動し、各デモの **Code location** 行に示されているフォルダを開きます。例えば、このボード向けの GraphicTest デモは `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest/` にあります。
3. **`.ino` ファイルをダブルクリック**して Arduino IDE で開きます。

**オプション B — git clone：**

```sh
git clone https://github.com/Seeed-Projects/Display-Gadgets.git
```

その後、clone した `code_GFX2/Function/...` フォルダからデモの `.ino` ファイルを開きます。

## 画面表示 — GraphicTest

このデモは、1.47インチ JD9853A パネル上でフルグラフィックスベンチマークを実行し、カラーバー、線、矩形、円、三角形、角丸矩形、テキスト、ピクセルグラデーションを網羅します。画面が正しく配線されていること、およびすべての描画呼び出しが期待どおり動作することを確認するために使用できます。

**コードの場所：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_graphictest" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このスケッチは **Seeed_GFX2** を介して JD9853A パネルを初期化し、その後 10 種類のグラフィックスプリミティブを順番に実行し、それぞれの実行時間を `micros()` で計測してシリアルモニタに出力します。

ディスプレイは次の 1 回のテンプレート呼び出しで初期化されます：

```cpp
display.begin<Board_XIAO_1inch47_Touch_Display<13, 12>,
              Config_Seeed_1inch47_Touch_JD9853A>();
```

**Board** テンプレートはピンマップを保持します — CS=D2、DC=D3、SCK=D8、MOSI=D10 — そしてその `<RST, BL>` テンプレートパラメータには生の GPIO 番号を指定するため、`<13, 12>` は RST=GPIO13（D17）、BL=GPIO12（D18）を意味します。**Panel Config** は 172×320 の解像度、BGR の色順序、反転なしを組み込みます — `driver.h` や手動での MADCTL 書き込みは不要です。

### デモの実行方法

**ステップ 1.** Arduino IDE で `xiao_esp32s3_147_graphictest.ino` を開きます。

**ステップ 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** **Tools > Serial Monitor**（115200 ボー）を開きます。各テストのタイミング出力が表示されるはずです：

```
=== XIAO ESP32-S3 Plus 1.47 graphic test ===
LCD width: 172
LCD height: 320
Color bars: 162.32 ms
Lines: 4562.40 ms
Fast lines: 240.45 ms
Rectangles: 189.31 ms
Filled rectangles: 644.85 ms
Circles: 667.74 ms
Triangles: 531.25 ms
Round rectangles: 236.16 ms
Text: 1899.09 ms
Pixel gradient: 7933.69 ms
Graphic test finished.
```

画面上では、各テストパターンが約 1 秒間表示され、その後次のパターンに切り替わります。すべてのテストが完了すると、青い角丸矩形の枠で囲まれた「Finished」画面が表示されます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_graphictest.gif" style={{width:500, height:'auto'}}/></div>

スケッチがすべてのパターンを実行し終えると、画面には「Graphic Test / Finished」というメッセージが表示されます。テストを再度実行するには、ボードをリセットしてください。

---

## タッチ — Touch Circle

このデモは、1.47インチタッチスクリーンをインタラクティブなお絵描きパッドに変えます。画面上の任意の場所をタップすると、その指先の位置に白い円が表示されます。円は画面上に残り、タップするたびに増えていきます。画面下部の **CLEAR** バーをタップすると、すべての円が消去され、最初からやり直すことができます。

**コードの場所：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_touch_circle/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_touch_circle" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このデモは、I2C アドレス `0x63` の **AXS5106L** 静電容量式タッチコントローラを使用しており、D4/D5 の I2C に接続されています。コントローラはディスプレイのピクセル範囲内で絶対座標（X, Y）を報告します。タッチ処理は Seeed_GFX2 の **Touch レイヤ**（`Touch_AXS5106L`）によって行われます。

```cpp
Touch_AXS5106L touch(-1, D7, Wire, 172, 320);
display.attachTouch(touch, display.panel().driver().bus());
// ...
display.getTouch(&x, &y);
```

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Function</th></tr>
    <tr><td>D4 (SDA)</td><td>IMU と共有される I2C データバス</td></tr>
    <tr><td>D5 (SCL)</td><td>IMU と共有される I2C クロックバス</td></tr>
    <tr><td>D7</td><td>タッチ割り込み (INT)</td></tr>
    <tr><td>RST</td><td>LCD リセット (GPIO13 / D17) と共有</td></tr>
  </table>
</div>

**エッジトリガの描画。** このスケッチはエッジ検出方式を使用します。タッチ（指を下ろした瞬間）のフォーリングエッジでのみ円を追加し、指を押し続けている間は追加しません。これにより、ドラッグ中に線を描き続けるのではなく、意図したタップごとにくっきりとした円が描画されます。

**X 軸の反転。** タッチパネルは LCD とは異なる向きで物理的に取り付けられているため、生の X 座標は反転させる必要があります。`display.getTouch()` はこの反転を内部ですでに適用しており、画面座標を返すので、手動で `screenX = 172 - 1 - rawX` のような変換を行う必要はありません。

**円のバッファ。** 最大 120 個の円がリングバッファに保存されます。バッファがいっぱいになると最も古い円が削除され、表示をきれいに保つために画面が再描画されます。

**CLEAR ゾーン。** 画面下部 36 ピクセルは CLEAR バーとして予約されています。この領域をタップすると、新しい円を描く代わりに、すべての円が消去されカウンタがリセットされます。

**安全な描画領域。** 薄いグレーの枠線が、円が完全に表示される領域を囲んで示します。

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_esp32s3_147_touch_circle.ino` を開きます。

**ステップ 2.** ボードとポートを選択し、**Upload** をクリックします。

**ステップ 3.** **Tools > Serial Monitor**（115200 ボー）を開きます。次のような表示が見えるはずです：

```
=== XIAO ESP32-S3 Touch Circle Demo ===
LCD: 172x320
Touch: AXS5106L ready
Tap screen to draw white circles.
Tap CLEAR bar at bottom to erase.
```

**ステップ 4.** 画面をタップします。タップするたびにマッピングされた画面座標が表示され、CLEAR バーをタップすると消去メッセージが表示されます：

```
Touch: (76,163)
Touch: (64,226)
Touch: (32,80)
Touch: (118,100)
Touch: (37,311)
Clear zone tapped — erasing all circles.
Touch: (72,143)
Touch: (134,61)
Touch: (61,293)
Clear zone tapped — erasing all circles.
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_touch_circle.gif" style={{width:500, height:'auto'}}/></div>

タップするたびに、指先の位置に白い円が残ります。画面上部のタイトルバーにはタップ数のカウントが表示されます。CLEAR バーをタップすると、画面がリセットされ、枠線とタイトルバーだけが再描画された空の状態になります。

---

## SD カード — BMP リーダー

このデモは、MicroSD カードから 24 ビット非圧縮の `.bmp` 画像を読み取り、画面に表示します。SD のプローブテスト（書き込み／読み出し）が内蔵されており、シリアルモニタに詳細な診断情報を出力するため、SD カードアクセスと BMP デコードの両方を検証するのに役立ちます。172×320 より大きい画像は中央部分がクロップされ、小さい画像は画面中央に配置されます。

**コードの場所：** `code_GFX2/Function/147_ESP32/xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

LCD と SD カードは同じ物理 SPI ピン（SCK = D8、MOSI = D10、MISO = D9）を共有しますが、**別々の SPI ホスト**を使用します。LCD は Seeed_GFX2 の HSPI ホスト上で動作し、SD カードはデフォルトの ESP32 FSPI ホスト上で動作します。SD のチップセレクト（D6）はアイドル時に HIGH に保たれ、カードが共有バスから切り離されるようになっています。スケッチは **最初に SD カードを読み取り、その後で LCD を初期化**します。つまり、SD をマウントし、BMP を RAM フレームバッファにデコードし、`SD.end()` を呼び出してから、ディスプレイを初期化します。この順序により、2 つの SPI ホストが共有ピン D8/D10 を取り合うことを防ぎます。

スケッチは、いくつかの SPI 周波数（4 MHz → 1 MHz → 400 kHz）で SD カードをマウントし、その後、クイックな書き込み／読み出しプローブ（`/SDPROBE.TXT`）を実行して、画像をデコードする前にファイルシステムへアクセスできることを確認します。次に SD ルート内の BMP ファイル（推奨ファイル名：`/test.bmp`、`/TEST.BMP`、`/image.bmp`、`/IMAGE.BMP` など）を探し、行ごとに RGB565 フレームバッファへデコードし、「BMP OK」ヘッダ（デコード時間を表示）とファイルパスを画面下端に表示して描画します。

**対応している BMP フォーマット：**

<div class="table-center">
  <table align="center">
    <tr><th>Format</th><th>Bit Depth</th><th>Notes</th></tr>
    <tr><td>非圧縮 BMP (BI_RGB)</td><td>24 ビット（16/32 ビットも可）</td><td>BGR888 を RGB565 に変換して表示</td></tr>
  </table>
</div>

172×320 より大きい画像は中央部分がクロップされ、小さい画像は中央に配置されます。最良の結果を得るには、サイズがちょうど 172×320 ピクセルで、24 ビット非圧縮の BMP を `/test.bmp` という名前で使用してください。

### デモの実行

**ステップ 1.** MicroSD カードを **FAT32** でフォーマットします。

**ステップ 2.** `test.bmp` という名前の 24 ビット非圧縮 BMP 画像（できれば 172×320 ピクセル）を SD カードのルートにコピーします。

**ステップ 3.** SD カードをディスプレイボード上の MicroSD スロットに挿入します。

**ステップ 4.** Arduino IDE で `xiao_esp32s3plus_147_sd_bmp_reader_diag_v0_8.ino` を開き、ボードとポートを選択して **Upload** をクリックします。

**ステップ 5.** **Tools > Serial Monitor**（115200 ボー）を開きます。次のような表示が見えるはずです：

```
=== XIAO ESP32-S3 Plus 1.47 SD BMP Reader Diagnostic v0.8 ===
[PIN] SD  CS=D6 SCK=D8 MISO=D9 MOSI=D10
[IMG] Put /test.bmp in SD root
[SD] Trying 4000000 Hz...
[SD] OK card=15193 MB freq=4000000 Hz
[PROBE] write /SDPROBE.TXT
[PROBE] write OK
[PROBE] read /SDPROBE.TXT
[PROBE] read OK: XIAO ESP32-S3 SD probe OK

[IMG] open start /test.bmp
[IMG] open done  /test.bmp
[IMG] file size=117814
[BMP] header OK path=/test.bmp size=122x320 bpp=24 row=368 offset=54
[IMG] BMP loaded /test.bmp
[DONE] BMP loaded path=/test.bmp readMs=7881 totalMs=8016
```

:::note
`card=15193 MB`、`file size=117814`、`readMs=7881` などの具体的な値は、使用する SD カードや BMP ファイルによって異なるため、あなたの出力はここに示したものとは異なります。
:::

その後、画面にはデコードされた画像が表示され、上部には緑色の「BMP OK」ヘッダ（ミリ秒単位のデコード時間を表示）が、下部にはファイルパスが表示されます。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_sd_bmp_reader.gif" style={{width:500, height:'auto'}}/></div>

画像が画面に表示され、上部には緑色の「BMP OK」ヘッダ（デコード時間を表示）、下部にはファイルパスが表示されます。BMP ファイルが見つからない場合は、「No BMP loaded」と表示され、シリアルモニタを確認し `/test.bmp` を使用するように指示が表示されます。

---

## マイク & スピーカー

### デモ 1: ボリュームバー

このデモは、オンボードの PDM マイクを大きく応答性の高いボリュームメーターに変えます。10 セグメントのバーが画面中央に表示され、低レベルでは緑、中程度では黄色、大きな音量では赤で表示されます。バーの上にはパーセンテージが表示され、レベルに応じて色が変化します。

**コードの場所：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_mic_canvas/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_mic_canvas" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### 動作の仕組み

オンボードの **PDM（Pulse Density Modulation）デジタルマイク**は、PDM RX モードに設定された ESP32-S3 の I2S ペリフェラルを通じてサンプリングされます。ESP-IDF v5（Arduino コア 3.3.11）では、新しいドライバ API（`driver/i2s_pdm.h`）を使用します：

<div class="table-center">
  <table align="center">
    <tr><th>Pin</th><th>Signal</th><th>Function</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>マイクへの PDM クロック出力</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>マイクからの PDM データ入力</td></tr>
  </table>
</div>

I2Sペリフェラルは**16 kHz モノラル**で構成され、256フレームずつのDMAディスクリプタを4個使用します。PDM CLKのドライブ強度は、電気的な結合を最小限に抑えるため初期化後に下げられます。サンプルはメインループ内で `i2s_channel_read()` を使い、タイムアウト20 msで読み出されます。

**信号処理：**

1. **ピーク抽出** — 各256サンプルバッファを走査し、最大絶対値（ピーク振幅）を求めます。
2. **正規化** — 生のピーク値を下限40、上限16,000としてマッピングし、0.0〜1.0の音量値を生成します。下限未満の値は無音として扱われます。
3. **指数平滑化** — 表示される音量は、生のピーク値に対する指数移動平均（α = 0.20）で、ジッタを防ぎます。無音が検出された場合、表示値はフレームごとに×0.94で減衰します。

**バー描画：**

<div class="table-center">
  <table align="center">
    <tr><th>セグメント</th><th>色</th><th>音量範囲</th></tr>
    <tr><td>0–4（下から5つ）</td><td>緑</td><td>0% – 50%</td></tr>
    <tr><td>5–8（中央4つ）</td><td>黄</td><td>50% – 90%</td></tr>
    <tr><td>9（最上段）</td><td>赤</td><td>90% – 100%</td></tr>
  </table>
</div>

バーは**差分レンダリング**を使用します：前フレームから状態が変化したセグメントのみを再描画します。変化していないセグメントはそのまま残し、SPIトラフィックを最小限に抑えつつフリッカーを防ぎます。

#### デモの実行

**Step 1.** Arduino IDEで `xiao_esp32s3_147_mic_canvas.ino` を開きます。

**Step 2.** ボードとポートを選択し、**Upload** をクリックします。

**Step 3.** **Tools > Serial Monitor**（115200ボー）を開きます。次のような表示が見えるはずです：

```
=== Volume Bar (ESP32-S3) ===
[MIC] PDM RX ready (IDF v5)
[MIC] ready — speak or blow into the mic
```

**Step 4.** PDMマイク（ディスプレイボード左下付近に配置）に向かって話すか、息を吹きかけます。バーは緑から黄、赤へと満たされ、その上に表示されるパーセンテージが更新されます。

#### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_mic_canvas.gif" style={{width:500, height:'auto'}}/></div>

バーはリアルタイムに反応します。静かな部屋ではバーは空のままです。約20 cm離れた位置から通常の声量で話すと、緑のセグメントが点灯します。マイクに直接息を吹きかけると、黄〜赤の範囲まで押し上げられます。

---

### デモ2：SDレコーダー

このデモでは、ボードをシンプルなボイスレコーダーとして動作させます。**USR1** を押すと、オンボードPDMマイクから5秒間の音声を録音してMicroSDカードにWAVファイルとして保存し、その後 **USR2** を押すと、外付けの **MAX98357A** I2Sアンプとスピーカーから録音を再生します。

**コードの場所：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_sd_record/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_sd_record" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::note
このデモは、画面上のステータス表示に **Seeed_GFX2** を使用し、ファイルアクセスにはesp32ボードパッケージに含まれる **組み込みの `SD.h`** を使用します。**SdFat は不要**です。
:::

#### ハードウェアセットアップ

**MicroSDカード。** スケッチを書き込む前、または電源を入れる前に、FAT32でフォーマットされたMicroSDカードをディスプレイボードのカードスロットに挿入します。オンボードPDMマイクには外部配線は不要です。

**スピーカー出力。** MAX98357A I2Sアンプモジュールを、下部のI2Sブレークアウトパッドに接続します：

<div class="table-center">
  <table align="center">
    <tr><th>I2S パッド</th><th>XIAO ピン</th><th>GPIO</th><th>MAX98357A</th></tr>
    <tr><td>I2S_SD</td><td>D11</td><td>GPIO38</td><td>DIN</td></tr>
    <tr><td>I2S_SCK</td><td>D12</td><td>GPIO39</td><td>BCLK</td></tr>
    <tr><td>I2S_WS</td><td>D13</td><td>GPIO40</td><td>LRC / WS</td></tr>
    <tr><td>3V3</td><td>3V3</td><td>—</td><td>VIN</td></tr>
    <tr><td>GND</td><td>GND</td><td>—</td><td>GND</td></tr>
  </table>
</div>

スピーカーをMAX98357Aの **SPK+** および **SPK-** 端子に接続します。

#### 動作概要

このデモは4つのステージを順番に実行し、4種類のペリフェラルを順に使用します：

**PDMマイク（録音）。** オンボードPDMマイクは、**D0 (PDM_CLK)** と **D1 (MIC_DATA)** 上のI2SペリフェラルをPDM RXモードで使用し、16 kHzモノラルでサンプリングされます。録音開始時のクリック音を避けるため、キャプチャした最初の **300 ms** 分のデータはウォームアップデータとして破棄されます。

**RAMバッファ。** 16 kHz、16ビットモノラルで5秒間録音すると、**160,000バイト**（`5 s × 16,000 samples/s × 2 bytes`）を占有します。サンプルはSDカードに書き込まれる前にRAMバッファに保持されます。

**SDカード（ストレージ）。** 録音データは、ESP32ボードパッケージの組み込み `SD.h` を使用して、MicroSDカード上の `/REC_RAW.WAV` に書き込まれます。スケッチは、**8 MHz → 4 MHz → 1 MHz → 0.4 MHz** の順に複数のSPI周波数でカードのマウントを試行し、成功するまで繰り返します。新しい録音は前のファイルを上書きします。

:::caution
このデモは起動時に `/REC_RAW.WAV` を削除します。録音を保持したい場合は、ボードを再起動する前に録音ファイルをコンピュータへコピーしてください。
:::

**I2S再生。** 再生では、I2Sペリフェラルをマスター／送信モードで使用し、**16 kHz、16ビット、Philipsステレオ**で動作させます。モノラルサンプルは左右両方のI2Sチャンネルに複製されるため、MAX98357Aのチャンネル選択に関わらず再生できます。

**共有LCD/SDバス。** LCDとSDカードは、**D8**（SCK）、**D9**（MISO）、**D10**（MOSI）ピンを共有します。このデモでは、それぞれに専用のSPIホストを割り当てることで競合を防いでいます：

- **LCD** は Seeed_GFX2 の **HSPI** ホストを使用します。
- **SDカード** は ESP32 のデフォルト **FSPI** ホストを使用します。
- SDカードへの書き込み／読み出しの前に、スケッチは `display.end()` を呼び出して、共有ピンに対するLCDの占有を解放し、SD転送が完了したらディスプレイを再初期化します。

この分離により、LCDリフレッシュとSDカードアクセス間のSPIトランザクション競合を回避します。

#### デモの実行

**Step 1.** ディスプレイボードのカードスロットに **FAT32** MicroSDカードを挿入します。

**Step 2.** 上記の説明どおりに、**MAX98357A** アンプとスピーカーをI2Sブレークアウトパッドに接続します。

**Step 3.** Arduino IDEで `xiao_esp32s3_147_sd_record.ino` を開きます。

**Step 4.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**（esp32ボードパッケージ **3.3.11**）と正しい **Port** を選択し、**Upload** をクリックします。

**Step 5.** 書き込みが完了すると、画面に **"SD Recorder"** と表示されます。

**Step 6.** **USR1** を押し、オンボードPDMマイクに向かって5秒間話します。

**Step 7.** 画面に **"Saved SD WAV"** と表示されるまで待ちます — 録音がSDカードに書き込まれたことを示します。

**Step 8.** **USR2** を押すと、スピーカーから録音が再生されます。

#### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_sd_record_i2s.gif" style={{width:500, height:'auto'}}/></div>

- 録音中、画面には録音の進行状況が表示されます。
- 録音が完了すると、画面に **"Saved SD WAV"** と表示されます。
- SDカード上に `/REC_RAW.WAV` ファイルが作成されます。
- **USR2** を押すと、先ほど録音した音声がスピーカーから再生されます。

---

## IMU

1.47インチIPSディスプレイには、D4/D5のI2C経由で接続されたオンボード6軸IMU（LSM6DS3）が搭載されています。**D14** 上のモーション割り込みラインは、ハードウェアウェイクアップとジェスチャ検出をサポートします。

:::note
オンボードIMUは **LSM6DS3** です（ボードの回路図およびI2Cアドレス `0x6A` から確認済み）。デモスケッチは防御的なフォールバックとしてQMI8658互換センサも探索しますが、出荷されている1.47インチIPSディスプレイはLSM6DS3を使用しています。
:::

以下の2つのデモはいずれも、I2C経由でオンボードの **LSM6DS3** を読み出します。スケッチは防御的なフォールバックとしてQMI8658互換センサも探索しますが、持ち上げて起動する（raise-to-wake）設定はLSM6DS3のレジスタを対象としています。

<a id="imu-quicksand"></a>

### デモ1：電子クイックサンド

このデモでは、画面をインタラクティブな流体シミュレーションに変えます — オンボード6軸IMUで計測した重力に従って流れ、落ち着く金色の砂粒です。ボードを傾けると、砂がリアルタイムにその方向へ移動します。

**コードの場所：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_electronic_quicksand/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_electronic_quicksand" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このシミュレーションでは、172×320 の画面上に **24×45 の占有グリッド** を重ね、その各セルを 7×7 ピクセルとして扱います。グリッド内には約 **180 個のパーティクル** が配置されており、それぞれ位置、速度、そして金色のカラ―グラデーションを持ちます。

IMU は I2C（D4/D5）経由で **8 ms ごと** に読み取られます。スケッチは既知の 2 つのアドレスで IMU を探索し、まず QMI8658、次に LSM6DS3 を試し、応答した方を使用します。生の加速度値はローパスフィルタにかけられ、重力ベクトルを導出するために使用されます。ボードを傾けると：

1. **重力ベクトルの更新** — 加速度センサのデータは指数移動平均で平滑化され、ジッタを抑えます。
2. **パーティクルの速度** — 各パーティクルは重力ベクトルの方向に加速し、減衰と、フロー内での深さに基づくパーティクルごとの可動性係数が適用されます。
3. **セルの占有状態** — フローのより深い位置（重力に対して「底」に近い）にあるパーティクルほど可動性が低くなり、現実的な詰まり（パッキング）効果を生み出します。
4. **差分レンダリング** — パーティクルが出入りしたセルだけを再描画することで、SPI トラフィックを最小限に抑え、アニメーションを滑らかに保ちます。

表面付近のパーティクルは自由に流れ（高い可動性）、より深く埋もれたパーティクルは密に詰まり（低い可動性）、実際の砂の挙動を模倣します。

### デモの実行

**Step 1.** Arduino IDE で `xiao_esp32s3_147_electronic_quicksand.ino` を開きます。

**Step 2.** ボードとポートを選択し、**Upload** をクリックします。

**Step 3.** アップロードが完了すると、画面の下部が金色のパーティクルで満たされます。ボードをさまざまな方向に傾けると、砂が重力に引かれるように流れます。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開き、初期化を確認します：

```
=== Electronic Quicksand ESP32-S3 1.47 ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
```

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_quicksand.gif" style={{width:500, height:'auto'}}/></div>

ボードを傾けると、パーティクルは下側のエッジに向かって流れます。ディスプレイを水平に置くと、デモは直前の重力方向を保持します。

---

### デモ 2: 持ち上げてスリープ解除

このデモでは、IMU に内蔵されたウェイクアップ割り込みを **D14** で利用した、**画面のスリープ／ウェイクシステム** を実装しています。8 秒間操作がないと画面が自動的にオフになり（バックライトオフ + ESP32 のライトスリープ）、デバイスを持ち上げたり動かしたりすると即座に復帰します。

**コードの場所：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_wakeup/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_wakeup" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

このデモでは、IMU の **組み込みウェイクアップイベント検出器** を使用します。これは、加速度センサのデータを内部で監視し、モーションが設定可能なしきい値を超えたときに INT1 ピン（このボードでは D14 に接続）をアサートするハードウェア機能です。これにより、MCU は加速度センサを継続的にポーリングする必要がありません。

「持ち上げてスリープ解除」デモでは、オンボードの **LSM6DS3** をモーション検出によるウェイクアップ用に設定します。

**IMU 設定（LSM6DS3）：**

<div class="table-center">
  <table align="center">
    <tr><th>Register</th><th>Value</th><th>Purpose</th></tr>
    <tr><td><code>CTRL1_XL</code></td><td><code>0x40</code></td><td>加速度センサ @ 104 Hz, ±2g</td></tr>
    <tr><td><code>TAP_CFG</code></td><td><code>0x80</code></td><td>組み込み割り込みを有効化</td></tr>
    <tr><td><code>WAKE_UP_THS</code></td><td><code>0x05</code></td><td>ウェイクアップしきい値（中〜低感度）</td></tr>
    <tr><td><code>WAKE_UP_DUR</code></td><td><code>0x00</code></td><td>継続時間フィルタなし（応答性の高いウェイク）</td></tr>
    <tr><td><code>MD1_CFG</code></td><td><code>0x20</code></td><td>ウェイクアップを INT1 にルーティング</td></tr>
  </table>
</div>

**スリープ／ウェイクのフロー：**

1. **アクティブ状態** — 画面はオンで、バックライトは PWM 160。IMU データとバッテリ電圧はそれぞれ 250 ms / 1000 ms ごとに更新されます。カウントダウンタイマーには自動スリープまでの残り秒数が表示されます。
2. **自動スリープ** — 8 秒間何も操作がないと、スケッチはバックライトをオフにし、「Sleeping... Pick up device to wake」というメッセージを表示し、`esp_sleep_enable_gpio_wakeup()` を使って D14 をウェイクアップソースとして設定し、ESP32 をライトスリープに入れます。
3. **ウェイクアップ** — ユーザーがボードを持ち上げると、IMU がモーションを検出して D14 を HIGH にアサートします。ESP32 はライトスリープから復帰し、UI を再描画します。

**手動テストボタン：**

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Action</th></tr>
    <tr><td>USR1</td><td>D19</td><td>強制ウェイク</td></tr>
    <tr><td>USR2</td><td>D15</td><td>強制スリープ</td></tr>
  </table>
</div>

### デモの実行

**Step 1.** Arduino IDE で `xiao_esp32s3_147_wakeup.ino` を開き、ボードとポートを選択して **Upload** をクリックします。

**Step 2.** 画面には電源状態、モーションデータ、カウントダウンタイマーを備えたダッシュボードが表示されます。ボードを 8 秒間静置すると、自動的にスリープします。

**Step 3.** ボードを持ち上げるか、軽く振ると、画面が即座に復帰します。

**Step 4.** **Tools > Serial Monitor**（115200 ボー）を開き、IMU の検出とウェイクイベントを確認します：

```
=== XIAO ESP32-S3 Plus 1.47 IMU Wake Demo ===
[IMU] LSM6-compatible at 0x6A, WHO=0x6A
[IMU] wake config OK
[WAKE] IMU_D14  count=1
[WAKE] IMU_D14  count=2
```

モーションによるウェイクごとに、カウントがインクリメントされた `[WAKE] IMU_D14  count=N` 行が新たに出力されます。スリープへの遷移は画面上にのみ表示され、ボードがスリープに入る際にシリアル出力は行われません。

### 期待される結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_wakeup.gif" style={{width:500, height:'auto'}}/></div>

スリープ解除中は、画面にリアルタイムの加速度センサおよびジャイロスコープデータが表示されます。8 秒間静止すると画面が暗くなり、ESP32-S3 はライトスリープに入ります。デバイスを持ち上げると、画面は 1 秒未満で復帰し、ウェイクカウンタがインクリメントされます。

---

## ユーザーボタン

1.47'' IPS Display には、XIAO ESP32-S3 Plus に接続された **2 つの物理プッシュボタン** が搭載されています：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Pin</th><th>Logic</th><th>Silkscreen Label</th></tr>
    <tr><td><strong>BTN_A</strong></td><td>D19</td><td>アクティブ Low（押下 = LOW）</td><td>USR1</td></tr>
    <tr><td><strong>BTN_B</strong></td><td>D15</td><td>アクティブ Low（押下 = LOW）</td><td>USR2</td></tr>
  </table>
</div>

### ボタンの読み取り

両方のボタンは XIAO の内部プルアップ抵抗を使用します。ポーリングとデバウンスによるシンプルな読み取りは次のようになります：

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

### 割り込みを使ったデバウンス

応答性が高くデバウンスされたボタン処理には、短い安定待ち時間付きで GPIO 割り込みを使用できます：

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

プリインストールされている工場出荷時ファームウェアでは、ボタンは次のように割り当てられています（自分のコードで自由に上書きできます）：

<div class="table-center">
  <table align="center">
    <tr><th>Button</th><th>Action</th></tr>
    <tr><td><strong>BTN_A (D19)</strong></td><td>短押し：画面の明るさを循環 <strong>100% → 75% → 50% → 25% → 0% → 100%</strong></td></tr>
    <tr><td><strong>BTN_B (D15)</strong></td><td>短押し：<strong>画面のオフ／最後の明るさへの復帰をトグル</strong></td></tr>
  </table>
</div>

ボタンのブレークアウトパッド（基板上では U1 と U2 と表示）は、それぞれ D19 と D15 に対応しており、必要に応じて外部ボタンを接続できます。

## バッテリ電圧検出

このデモでは、オンボードのバッテリ電圧分圧回路を **D16** で読み取り、1.47'' IPS Display に 2 つの黄色いライブ値として表示します：D16 分圧の生電圧と、計算されたバッテリ電圧です。電圧値のみを表示し、バッテリ残量（パーセンテージ）の推定や充電状態の報告は行いません。

**コードの場所：** `code_GFX2/Function/147_ESP32/xiao_esp32s3_147_battery_status/`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/Function/147_ESP32/xiao_esp32s3_147_battery_status" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub で表示</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 動作の仕組み

**バッテリー回路：**

ESP32-S3 Plus は、オンボードの分圧回路を介して LiPo バッテリー電圧を **D16** から読み取ります：

<div class="table-center">
  <table align="center">
    <tr><th>Signal</th><th>ESP32-S3 Pin</th><th>Function</th></tr>
    <tr><td><code>BAT_ADC</code></td><td><strong>D16</strong></td><td>分圧されたバッテリー電圧を読み取るアナログ入力。内部で分圧回路（316K / 160K）に接続されています。<strong>このピンを外部には使用しないでください。</strong></td></tr>
  </table>
</div>

**分圧比：** R14 = 316 kΩ, R15 = 160 kΩ → **分圧比 = (316 + 160) / 160 ≈ 2.975**

**読み取り：**

スケッチは `Board_XIAO_1inch47_Touch_Display<13, 12>` と `Config_Seeed_1inch47_Touch_JD9853A`（172×320、BGR、反転なし）でディスプレイを初期化し、その後 `analogReadMilliVolts()` を用いて 11 dB 減衰、12 ビット分解能で **D16** を 12 回（700 µs 間隔）サンプリングします。サンプルを平均して分圧後の生の電圧を求め、それに分圧比を掛けてバッテリー電圧（`Calc = D16 × 2.975`）を算出し、両方を中央寄せの黄色い 2 行として描画します。画面は、いずれかの値が意味のある量だけ変化したときのみ更新されます（D16 ≥ 0.02 V または Calc ≥ 0.05 V）。

:::note
充電状態の信号は ESP32-S3 の GPIO には接続されていません。このデモは電圧値のみを表示し、バッテリーの有無や充電状態の検出、バッテリー残量の推定は行いません。
:::

### デモの実行

**ステップ 1.** Arduino IDE で `xiao_esp32s3_147_battery_status.ino` を開きます。

**ステップ 2.** **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** と正しい **Port** を選択します。

**ステップ 3.** **Upload** をクリックします。

**ステップ 4.** 画面を確認します — 2 本の黄色いラインが表示されます。上が生の D16 分圧電圧、下が計算されたバッテリー電圧です。LiPo バッテリー（または USB-C ケーブル）を接続／取り外しして、値がどのように更新されるか確認してください。

### 期待される結果

<div class="table-center">
  <table align="center">
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_battery_status_display.jpg" style={{width:300, height:'auto'}}/><br/><strong>電圧読み取り</strong>（D16 + Calc）</div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_function_battery_status_back.jpg" style={{width:300, height:'auto'}}/><br/><strong>バッテリーコネクタ</strong>（背面）</div></td>
    </tr>
  </table>
</div>

画面には、上段に生の D16 分圧電圧、下段に計算されたバッテリー電圧（`Calc`）が表示されます。LiPo バッテリーを接続すると、`Calc` はバッテリー端子電圧のおおよその値になります。USB 電源のみでも値が表示される場合があるため、`Calc` だけではバッテリーが接続されているかどうかを確認することはできません。

このデモは、シリアルモニタに 1 秒ごとに診断用の 1 行も出力します。例：

```
D16 1.39V | Calc 4.14V
```

---

## リソース

- **🗃️[PCB Design Files]** [XIAO 1.47'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Schematic]** [XIAO 1.47'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[3D Model]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[Factory Firmware]** [XIAO 1.47'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)
- **[Demo]** [XIAO Display Board Demo Code](https://github.com/Seeed-Projects/Display-Gadgets) — すべての Function デモは `code_GFX2/Function/147_ESP32/` ディレクトリ内にあります

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

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
