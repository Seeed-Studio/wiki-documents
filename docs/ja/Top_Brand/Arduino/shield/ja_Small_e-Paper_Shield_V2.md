---
description: 小型 e-Paper シールド V2
title: 小型 e-Paper シールド V2
keywords:
- Arduino シールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Small_e-Paper_Shield_V2
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: 小型 e-Paper シールド V2
category: シールド
bzurl: https://www.seeedstudio.com/Small-e-paper-Shield-V2-p-2462.html
oldwikiname: 小型 e-Paper シールド V2
prodimagename: Small_e-Paper_shield_b.jpg
surveyurl: https://www.research.net/r/Small_e-Paper_Shield_V2
sku: 104030019
--- -->
 ![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Small_e-Paper_shield_b.jpg)

e-paper（電子ペーパー）は、最も快適に読める素材の一つかもしれません。光を発するのではなく反射することで、従来の紙を読む体験を模倣します。この方法により、消費電力が大幅に削減されます。小型 e-paper シールドは、小型サイズの e-paper 用のドライバーシールドです。1.44インチ、2.0インチ、2.7インチの e-paper を駆動することができ、170以上の言語をサポートしています。このシールドの上面は平らで清潔に保たれており、取り付けられた e-paper をしっかりとサポートします。軽量で読みやすいディスプレイをお探しなら、e-paper は良い選択肢です。

**注意:** このドライバーボードは異なるサイズの e-paper をサポートしているため、e-paper はこの製品には含まれていません。2.0インチと2.7インチの e-paper を同時に販売していますので、最適なものをカートに追加してください！

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Small-e-paper-Shield-V2-p-2462.html)

### ライブラリの選択

正しいライブラリを選択するには、パネルのバージョンを確認する必要があります。

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Definition_of_Model_Labels.jpg)

**パネルのラベルに注意してください**:

* モデル名が「EG020AS012」または「EM027AS011」の場合、旧ライブラリを選択してください。こちらをクリックしてください：[Small e-Paper Library](https://github.com/Seeed-Studio/Small_ePaper_Shield)。

* モデル名が「EG020BS011」または「EM027BS013」の場合、新しいライブラリを選択してください。こちらをクリックしてください：[New Panel Library【EPD_V230】](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdV230.rar)。

## 仕様

---
対応ボード: Arduino Uno/Leonardo/Arduino Mega/Linkit ONE

動作電圧: 3.3/5VDC

動作電流（画面更新時）: 40mA

インターフェースタイプ: SPI

<font color="Green">Arduino の PIN</font>

<table>
<tr>
<th>Arduino</th>
<th>E-paper</th>
</tr>
<tr>
<td width="150px">D2</td>
<td width="250px">M_EPD_PANEL_ON</td>
</tr>
<tr>
<td>D3</td>
<td>M_EPD_BORDER</td>
</tr>
<tr>
<td>D4</td>
<td>M_/SD_CS</td>
</tr>
<tr>
<td>D5</td>
<td>M_EPD_PWM</td>
</tr>
<tr>
<td>D6</td>
<td>M_EPD_/RESET</td>
</tr>
<tr>
<td>D7</td>
<td>M_EPD_BUSY</td>
</tr>
<tr>
<td>D8</td>
<td>M_EPD_DISCHARGE</td>
</tr>
<tr>
<td>D9</td>
<td>M_/WORD_STOCK_CS</td>
</tr>
<tr>
<td>D10</td>
<td>M_/EPD_CS</td>
</tr>
<tr>
<td>ICSP PORT</td>
<td>M_MOSI , M_SCK , M_MISO</td>
</tr>
<tr>
<td>A0</td>
<td>M_TEMP_SEN</td>
</tr>
<tr>
<td>A1</td>
<td>M_OE123</td>
</tr>
<tr>
<td>A2</td>
<td>M_CKV</td>
</tr>
<tr>
<td>A3</td>
<td>M_STV_IN</td>
</tr>
<tr>
<td>3.3V</td>
<td>M_VCC_3V3</td>
</tr>
<tr>
<td>5V</td>
<td>M_VCC_5V</td>
</tr>
</table>

## デモンストレーション

---
Small e-Paper Shieldは、画像、さまざまなグラフィック、テキストを表示することができます。ライブラリには、このモジュールの使用方法についてのアイデアを提供する多くの例が含まれています。それでは、e-Paperの強力なライブラリと広い視野角を体験してみましょう。

### ハードウェアのインストール

* e-PaperをSmall e-Paper ShieldのFFCインターフェースに接続します。
* Small e-Paper ShieldをArduino/Seeeduinoに差し込み、USBケーブルを使用してPCに接続します。

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/E-Paper_Screen.jpg)

次に、ライブラリを使用してデモを表示します。このライブラリは[こちら](https://github.com/Seeed-Studio/ePaper)からダウンロードする必要があります。ダウンロード後、Arduino IDEのライブラリフォルダに配置してください。パスは次のようになります：...\arduino-1.0.1\libraries。

### デモの表示

ここでは、2.0インチの画面を例にとり、その表示機能を紹介します。

#### デモ1: テキストの表示

* 次のコードを開きます：File- &gt;Examples- &gt;ePaper-&gt;text（以下の画像を参照）。

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Text_Code.jpg)

**<font color="red">この注意点を再度強調します：</font>**

Arduino UNO、Seeeduino 3.0、またはAtmega 328PやAtmega32U4をコントローラーとして使用するボードを使用する場合、このデモを実行するにはSDカードを挿入する必要があります。これは、Atmega328pおよびAtmega32U4のストレージ容量が少ないため、一時データを保存するためにSDカードが必要だからです。

Arduino MegaやAtmega1280、Atmega2560を使用する場合は、SDカードを挿入する必要はありません。

* 画面サイズに合わせてパラメータを変更します。画面が2.7インチの場合、200を270に変更する必要があります。他の例を使用する場合も、この変更を行う必要があります。

<pre>#define SCREEN_SIZE 200 // 画面サイズを選択：144, 200, 270</pre>

* コードをマイクロコントローラーにアップロードします。アップロード方法がわからない場合は[こちら](/ja/Upload_Code)をクリックしてください。

* 次のように表示されます：

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Display_text.jpg)

* 表示テキストや表示位置を変更してみてください。各関数の使用方法を学ぶことができます。

#### デモ2: グラフィックの表示

例：_draw_ は、さまざまなグラフィックを表示するのに適した例です。このコード：_draw_ をデモ1と同様に開きます。SDカードが必要かどうかについての注意点を忘れないでください。使用するマイクロコントローラーの種類に応じて、SDカードが必要かどうかを確認してください。そして、画面サイズに合わせてパラメータを変更します。

変更とコードのアップロードが完了すると、美しいパターンが画面に表示されます：

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Display_graphic.jpg)

この画像は、描画グラフィック関数を呼び出すことで作成されています。独自のパターンを作成して画面で試してみてください。各描画関数には、リファレンスに具体的な説明があります。

#### デモ3: 画像の表示

TFTディスプレイやOLEDディスプレイと同様に、Small e-Paper Shieldは画像の表示をサポートしています。

次に、画像の例を開きます：File- &gt;Examples- &gt;ePaper-&gt;image。

コードをアップロードして結果を確認してください。

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Dispaly_image.jpg)

**注意：ご覧の通り、この「image」スケッチのデフォルト画面サイズは2.7インチに設定されています。不適切な表示を防ぐために、画面サイズの設定を変更してください。**

<pre>  #define SCREEN_SIZE 200         // ここで画面サイズを選択：144, 200, 270 </pre>

もちろん、画像のラティスデータを変更することで表示画像を変更できます。

例えば、e-Paper画面が2.7インチの場合、264 X 176ピクセルのラティスデータを取得し、そのコードを‘’’static unsigned char image_270[] PROGMEM ={}’’’にコピーします。2.0インチ画面を使用する場合は、200x96ピクセルのラティスデータを‘’’static unsigned char image_200[] PROGMEM ={}’’’にコピーする必要があります。

#### 画像を表示する方法

Muchiri Johnの貢献により、非常に便利で使いやすいツールを手に入れることができました。このツールを使用すれば、画像を表示することが簡単になります。

ツールは[こちら](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdImageKit.zip)からダウンロードできます。

![](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Snapshot_epaper_shied_tools.jpg)

## 参照

---
Small e-Paperライブラリは、e-Paperディスプレイの機能を活用するための完全なソフトウェアインターフェースを提供します。以下に関数の具体的な説明があります。

### 関数の説明

<u>1. void begin(EPD_size sz);</u>

_この関数は画面サイズを設定します。_

* sz: EPD_1_44, EPD_2_0, EPD_2_7のいずれかを指定できます。

<u>2. void setDirection(EPD_DIR dir);</u>

_この関数は表示方向を設定するために使用されます。_

* dir: DIRLEFT, DIRRIGHT, DIRNORMAL, DIRDOWNのいずれかを指定できます。

<u>3. int drawChar(char c, int x, int y);</u>

_この関数は文字を表示するために使用されます。_

* c: 表示したい文字。
* x: 文字の開始X座標。
* y: 文字の開始Y座標。

<u>4. int drawString(char *string, int poX, int poY);</u>

_この関数は文字列を表示するために使用されます。_

* *string: 表示したい文字列。
* poX: 文字列の開始X座標。
* poY: 文字列の開始Y座標。

<u>5. int drawNumber(long long_num, int poX, int poY);</u>

_この関数は数値を表示するために使用されます。_

* long_num: 表示したい長整数データ。最大値は以下の通り。
* poX: データの開始X座標。
* poY: データの開始Y座標。

<u>6. int drawFloat(float floatNumber, int decimal, int poX, int poY);</u>

_この関数は浮動小数点数を表示するために使用されます。表示される浮動小数点データは、設定された小数点以下の桁数に基づいて四捨五入されます。_

* floatNumber: 表示したい浮動小数点数。
* decimal: 小数点以下の桁数を設定。
* poX: データの開始X座標。
* poY: データの開始Y座標。

<u>7. int drawUnicode(unsigned int uniCode, int x, int y);</u>

_この関数はUnicodeを使用して文字または中国語を表示するために使用されます。[GT20L16P1Yデータシート](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/GT20L16P1Y_Datasheet.pdf)の18～24ページを参照して、文字のUnicodeを確認してください。文字にはラテン文字、ヘブライ文字、タイ文字、ギリシャ文字、キリル文字、アラビア文字が含まれます。中国語のUnicodeは[GB2312（簡体字中国語）文字コード表](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Character_code_table.pdf)を参照してください。_

* uniCode: 文字または中国語に対応する機械コード。
* x: 開始X座標。
* y: 開始Y座標。

注意: Unicodeが0x0020から0x007Eの範囲内の文字は、キーボードから直接入力できます。例えば、文字「G」を表示する場合、`drawUnicode(0x0047, 3, 10)`または`displayChar('s', 3, 10)`を使用できます。

<u>8. int drawUnicodeString(unsigned int *uniCode, int len, int x, int y);</u>

_この関数は複数の文字や中国語を表示するために使用されます。_

* *uniCode: Unicode配列。
* len: 文字列の長さ。
* x: 文字列の開始X座標。
* y: 文字列の開始Y座標。

<u>9. void drawLine(int x0, int y0, int x1, int y1);</u>

_この関数は線を表示するために使用されます。_

* x0: 線の開始X座標。
* y0: 線の開始Y座標。
* x1: 線の終了X座標。
* y1: 線の終了Y座標。

<u>10. void drawCircle(int poX, int poY, int r);</u>

_この関数は円を描画するために使用されます。_

* poX: 中心のX座標。
* poY: 中心のY座標。
* r: 半径。

<u>11. void drawHorizontalLine(int poX, int poY, int len);</u>

_この関数は水平線を描画するために使用されます。_

* poX: 線の開始X座標。
* poY: 線の開始Y座標。
* len: 線の長さ。

<u>12. void drawVerticalLine(int poX, int poY, int len);</u>

_この関数は垂直線を描画するために使用されます。_

* poX: 線の開始X座標。
* poY: 線の開始Y座標。
* len: 線の長さ。

<u>13. void drawRectangle(int poX, int poY, int len, int width);</u>

_この関数は長方形を描画するために使用されます。_

* poX: 長方形の開始X座標。
* poY: 長方形の開始Y座標。
* len: 長方形の長さ。
* width: 長方形の幅。

<u>14. void fillRectangle(int poX, int poY, int len, int width);</u>

_この関数は塗りつぶされた長方形を描画するために使用されます。_

* poX: 長方形の開始X座標。
* poY: 長方形の開始Y座標。
* len: 長方形の長さ。
* width: 長方形の幅。

<u>15. void fillCircle(int poX, int poY, int r);</u>

_この関数は塗りつぶされた円を描画するために使用されます。_

* poX: 中心のX座標。
* poY: 中心のY座標。
* r: 半径。

**例:**

```
    EPAPER.drawRectangle(10, 10, 100, 80);
    EPAPER.fillCircle(50, 50, 30);
    EPAPER.fillRectangle(50, 65, 50, 20);
    EPAPER.drawCircle(150, 50, 10);
    EPAPER.fillCircle(150, 50, 5);
    EPAPER.drawHorizontalLine(120, 50, 60);
    EPAPER.drawVerticalLine(150, 20, 60);
```

<u>16. void drawTraingle(int poX1, int poY1, int poX2, int poY2, int poX3, int poY3);</u>

_この関数は三角形を描画するために使用されます。三角形は3つの点で構成されます。_

* poX1(poX2, poX3): 三角形の各点のX座標。
* poY1(poY2, poY3): 三角形の各点のY座標。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Small_e-Paper_Shield_v2.2_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---
* [Small e-Paper Shield Eagle ファイル](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Small_e-Paper_Shield_v2.2_Eagle_Files.zip)

* [Small e-Paper ライブラリ](https://github.com/Seeed-Studio/Small_ePaper_Shield)

* [e-Paper パネルデータシート](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/4P008-00_02_COG_Driver_Interface_Timing_for_smallPlussize.pdf)

* [epdImageKit ツール](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdImageKit.zip)

* [新しいパネルライブラリ【EPD_V230】](https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdV230.rar)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>