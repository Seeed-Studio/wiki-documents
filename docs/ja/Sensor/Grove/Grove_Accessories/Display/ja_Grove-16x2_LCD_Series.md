---
description: Grove - 16x2 LCD
title: Grove - 16x2 LCD
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-16x2_LCD_Series
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 16 x 2 LCD は、Arduino および Raspberry Pi 用の高コントラストで簡単に展開できる完璧な I2C LCD ディスプレイです。16x2 とは、2 行で各行に 16 列、合計 32 文字を意味します。Grove I2C コネクタを使用することで、必要なのは 2 本の信号ピンと 2 本の電源ピンだけです。これらのピンの接続方法を気にする必要もありません。Grove ケーブルを使用して、Seeeduino または Arduino/Raspberry Pi + ベースシールドの I2C インターフェースに差し込むだけです。複雑な配線やはんだ付け、誤った電流制限抵抗による LCD の焼損を心配する必要はありません。

## バージョン

|バージョン|注文|
|---|---|
|Grove - 16 x 2 LCD (黒地に黄色)|[今すぐ購入](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|
|Grove - 16 x 2 LCD (黒地に赤)|[今すぐ購入](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Red%29-p-3197.html)|
|Grove - 16 x 2 LCD (白地に青)|[今すぐ購入](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28White-on-Blue%29-p-3196.html)|



:::note 
         [Grove - LCD RGB バックライト](https://wiki.seeedstudio.com/ja/Grove-LCD_RGB_Backlight/) は発売以来好評を博しています。お客様のフィードバックに基づき、今回はよりコストパフォーマンスの高い単色バックライト派生製品をお届けします。
::: 
RGB バックライトを除けば、これらの 3 製品は Grove - LCD RGB バックライトとほぼ同一で、いずれも 16 文字幅、2 行、高輝度バックライトを備えています。

## 事前読解

**Grove - 16 x 2 LCD とは何か**および**その仕組み**についての紹介を、初めての方には事前に読むことを強くお勧めします。詳細については、**[ブログ](https://www.seeedstudio.com/blog/2020/01/20/how-to-use-16x2-lcd-with-arduino-grove-lcd-rgb-backlight/)** をご覧ください。



## 特徴

- 表示構造: 16 文字 * 2 行
- 表示モード: STN
- オンボード MCU
- I2C バスインターフェース
- 英語および日本語フォント対応


## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|動作温度|0 ～ 50℃|
|保存温度|-10 ～ 60℃|
|駆動方式|1/16 デューティ、1/5 バイアス|
|インターフェース|I^2^C|
|I^2^C アドレス|0X3E|


## 主な用途

- 温度表示
- 時刻表示
- 簡易表示を必要とするプロジェクト

## 対応プラットフォーム

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={600} height="auto" /></p>|


:::caution
         上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### 必要な材料

| Seeeduino V4.2 | Base Shield | Grove - 16 x 2 LCD |
|----------------|-------------|---------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

:::note
        * USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。
    
        * Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。
:::

#### ハードウェア概要

**I2Cプルアップ抵抗**

Grove - 16 x 2 LCDシリーズの初期バージョンには内蔵プルアップ抵抗がなく、オプションのプルアップ抵抗をはんだ付けするためのパッドもありません。このモジュールは再設計され、新しいバージョンには内蔵プルアップ抵抗が追加されています。

古いバージョンをお持ちの場合は、Groveコネクタの背面パッドに10kΩのDIP抵抗を自分ではんだ付けすることができます。以下の画像に従い、**VCC**と**SCL**ピンの間に10kΩのDIP抵抗を、**VCC**と**SDA**ピンの間に10kΩのDIP抵抗をはんだ付けしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg" alt="pir" width={600} height="auto" /></p>

**外観**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg" alt="pir" width={600} height="auto" /></p>

#### ハードウェア接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

| Seeeduino      | Groveケーブル       | Grove - 16 x 2 LCD |
|----------------|--------------------|---------------------|
| GND            | 黒                 | GND                 |
| 5Vまたは3.3V   | 赤                 | VCC                 |
| SDA            | 白                 | SDA                 |
| SCL            | 黄                 | SCL                 |

- **ステップ1.** Grove - 16 x 2 LCDをGrove-Base Shieldの**I^2^C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込み、USBケーブルを使用してSeeeduinoをPCに接続します。

#### ソフトウェア

:::tip
   Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

- **ステップ1.** Githubから[Grove-LCD RGB Backlight](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)ライブラリをダウンロードします。

:::tip
        Grove - 16 x 2 LCDは[Grove-LCD RGB Backlight](https://wiki.seeedstudio.com/ja/Grove-LCD_RGB_Backlight/)と同じライブラリを共有しています。使用方法はほぼ同じですが、Grove - 16 x 2 LCDは**setRGB()**のようなRGBカラーAPIをサポートしていません。
:::

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** Arduino IDEを再起動します。以下の3つの方法のいずれかでサンプルを開きます：

**1).** Arduino IDEで直接開く：**File --> Examples --> Grove - LCD RGB Backlight --> HelloWorld**のパスをたどります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>
   
**2).** コンピュータで開く：**XXXX\Arduino\libraries\Grove_LCD_RGB_Backlight-master\examples\HelloWorld**フォルダ内の**HelloWorld.ino**をクリックします（**XXXX**はArduino IDEをインストールした場所です）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>
   
**3).** または、コードブロックの右上隅にあるアイコンをクリックして、以下のコードをArduino IDEの新しいスケッチにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

/*
const int colorR = 255;
const int colorG = 0;
const int colorB = 0;
*/

void setup() 
{
    // LCDの列数と行数を設定
    lcd.begin(16, 2);
    
    //lcd.setRGB(colorR, colorG, colorB);
    
    // LCDにメッセージを表示
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // カーソルを列0、行1に設定
    // （注意：行1は2行目を指します。カウントは0から始まります）
    lcd.setCursor(0, 1);
    // リセットからの秒数を表示
    lcd.print(millis()/1000);

    delay(100);
}
```

:::note
        * ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

        * **Grove - 16 x 2 LCD**シリーズはすべてモノクロバックライトを使用しているため、RGBカラーに関連するコードをコメントアウトする必要があります。上記のデモコードでは、例えば6行目と17行目をコメントアウトしてください。
:::

- **ステップ 4.** デモコードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::success
        すべてが正常に動作すれば、LCDにクラシックな文章「**hello world**」が表示されます。
:::

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg" alt="pir" width={600} height="auto" /></p>


:::note
        Base Shieldが手元にない場合でも、I2Cインターフェースを備えたSeeeduino VXシリーズは動作します。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)
#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

<div class="table-center">
	<table>
		<tr>
			<th>Raspberry Pi</th>
      <th>Grove Base Hat for RasPi</th>
      <th>Grove - 16x2 LCD</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- **ステップ 2.** Grove Base HatをRaspberry Piに接続します。
- **ステップ 3.** Grove - 16 x 2 LCDをBase HatのI2Cポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

#### ソフトウェア

- **ステップ 1.** [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成し、grove.pyをRaspberry Piにインストールします。
- **ステップ 2.** 以下のコマンドを実行してコードを動作させます。

```
# Python3用のvirtualenv
virtualenv -p python3 env
source env/bin/activate
# コマンドを入力
grove_16x2_lcd
```
以下はjhd1802.pyコードです。

```python

from grove.display.base import *
from grove.i2c import Bus
import time
import sys

# sphinx autoapi required
__all__ = ["JHD1802"]

class JHD1802(Display):
    '''
    Grove - 16 x 2 LCD、チップJHD1802を使用。
        - Grove - 16 x 2 LCD (黄色地に黒文字)
        - Grove - 16 x 2 LCD (赤地に黒文字)
        - Grove - 16 x 2 LCD (青地に白文字)

    また、これはクラス名でもあり、
    上記の3つのLCDを駆動することができます。

    Args:
        address(int): I2Cデバイスアドレス、デフォルトは0x3E。
    '''
    def __init__(self, address = 0x3E):
        self._bus = Bus()
        self._addr = address
        if self._bus.write_byte(self._addr, 0):
            print("LCD {} が挿入されているか確認し、再試行してください"
                    .format(self.name))
            sys.exit(1)
        self.textCommand(0x02)
        time.sleep(0.1)
        self.textCommand(0x08 | 0x04) # 表示オン、カーソルなし
        self.textCommand(0x28)

    @property
    def name(self):
        '''
        デバイス名を取得

        Returns:
            string: JHD1802
        '''
        return "JHD1802"

    def type(self):
        '''
        デバイスタイプを取得

        Returns:
            int: ``TYPE_CHAR``
        '''
        return TYPE_CHAR

    def size(self):
        '''
        表示サイズを取得

        Returns:
            (行数, 列数): 表示サイズ（文字単位）。
        '''
        # 文字16x2
        # return (行数, 列数)
        return 2, 16

    def clear(self):
        '''
        画面をクリアし、カーソルを左上隅に配置します。
        '''
        self.textCommand(0x01)

    def draw(self, data, bytes):
        '''
        文字タイプの表示デバイスには未実装。
        '''
        return False

    def home(self):
        '''
        LCDの左上隅にカーソルを配置します。
        つまり、以降のテキストをその位置に出力します。
        '''
        self.textCommand(0x02)
        time.sleep(0.2)

    def setCursor(self, row, column):
        '''
        LCDカーソルを配置します。つまり、
        LCDに表示される次のテキストの位置を設定します。

        Args:
            row   (int): カーソルを配置する行（0が最初の行）
            column(int): カーソルを配置する列（0が最初の列）

	Returns:
	    None
        '''
        # print("setCursor: row={}, column={}".format(row,column))
        self.textCommand((0x40 * row) + (column % 0x10) + 0x80)

    def write(self, msg):
        '''
        LCDに文字を表示します。

        Args:
            msg (string): 表示する文字

        Returns:
            None
        '''
        for c in msg:
            self._bus.write_byte_data(self._addr,0x40,ord(c))

    def _cursor_on(self, enable):
        if enable:
            self.textCommand(0x0E)
        else:
            self.textCommand(0x0C)
            
            
    def textCommand(self, cmd):
        self._bus.write_byte_data(self._addr,0x80,cmd)
        
def main():
    import time

    lcd = JHD1802()
    rows, cols = lcd.size()
    print("LCDモデル: {}".format(lcd.name))
    print("LCDタイプ : {} x {}".format(cols, rows))

    lcd.backlight(False)
    time.sleep(1)

    lcd.backlight(True)
    lcd.setCursor(0, 0)
    lcd.write("hello world!")
    lcd.setCursor(0, cols - 1)
    lcd.write('X')
    lcd.setCursor(rows - 1, 0)
    for i in range(cols):
        lcd.write(chr(ord('A') + i))

    time.sleep(3)
    lcd.clear()

if __name__ == '__main__':
    main()
```

```python
(env)pi@raspberrypi:~ grove_16x2_lcd
```
:::tip 成功
すべてが正常に動作すれば、以下の結果が表示されます。
:::

- バックライトが1秒間オフになり、その後再びオンになります。
- LCDに以下が表示されます：
```
hello world!   X
ABCDEFGHIJKLMNOP
```
- 3秒後、ディスプレイ全体がクリアされ、画面が空白になります。

このプログラムを終了するには、`ctrl`+`c`を押すだけです。

### Wio Terminal（ArduPy）で遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Wio Terminal | Grove - 16 x 2 LCD |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

- **ステップ 2.** Grove - 16 x 2 LCDをWio Terminalの**I2C**ポートに接続します。

- **ステップ 3.** Wio TerminalをUSB Type-Cケーブルを使用してPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1.** [**ArduPy Getting Started**](https://wiki.seeedstudio.com/ja/ArduPy/)に従って、Wio Terminal上でArduPy開発環境を構成します。

- **ステップ 2.** 以下のコマンドを使用して、ArduPyファームウェアにGrove - 16 x 2 LCD ArduPyライブラリが含まれていることを確認します。詳細については[**こちら**](https://wiki.seeedstudio.com/ja/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example)を参照してください。

```sh
aip install Seeed-Studio/seeed-ardupy-lcd1602
aip build
aip flash
```

- **ステップ 3.** 以下のコードをコピーして`ArduPy-LCD1602.py`として保存してください：

```python
from arduino import grove_lcd1602
import time

lcd = grove_lcd1602()

def main():
    lcd.print("hello, world!")
    lcd.is_blink_cursor = True
    i = 0
    while True:
        lcd.set_cursor(1, 2) #列1、行2
        lcd.print(i)
        time.sleep(1)
        i = i + 1

if __name__ == "__main__":
    main()
```

:::note
       さらに詳しいAPIリファレンスについては[**こちら**](https://github.com/Seeed-Studio/seeed-ardupy-lcd1602)を参照してください。
:::

- **ステップ 4.** `ArduPy-LCD1602.py`をわかりやすい場所に保存してください。以下のコマンドを実行し、`<YourPythonFilePath>`を`ArduPy-LCD1602.py`の保存場所に**置き換えて**ください。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-LCD1602.py"
```

- **ステップ 5.** Grove - 16 x 2 LCDに結果が表示されます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png" alt="pir" width={600} height="auto" /></p>

## リソース

- **[PDF]** [JDH_1804_Datasheet](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/res/JDH_1804_Datasheet.pdf)



## プロジェクト

こちらはこの製品の紹介ビデオです。簡単なデモが含まれており、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


**Grove IR Universal Remote Project**：複数のリモコンをお持ちですか？Arduinoをお持ちですか？Keyes IRリモコンのボタン一つで複数のデバイスを操作できます。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/ArduinoBasics/grove-ir-universal-remote-project-7ab87f" width={350} />


**RE-MoteとLCDを使った簡単なレンジテスト**：フィールドテスト（2.4GHzおよび868MHz）に必要な機器や準備を減らし、必要なものを手のひらに収めて持ち運べます。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/alinan/range-tests-made-easy-with-the-re-mote-and-lcd-6e78b3" width={350} />



## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>