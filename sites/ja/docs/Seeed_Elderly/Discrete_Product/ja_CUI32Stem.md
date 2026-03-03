---
description: CUI32Stem
title: CUI32Stem
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/CUI32Stem
last_update:
  date: 05/15/2025
  author: shuxu hu
---


Create USB Interface（CUI）は、C言語、BASIC、またはArduino言語でプログラム可能なオープンソースのマイクロコントローラボードです。この最新バージョンはCUI32Stemと呼ばれ、GROVEプロトタイピングシステムと「手を取り合って」動作するように設計されており、幅広いセンサーやアクチュエータを含んでいます。高性能なMicrochip® PIC32マイクロコントローラを採用しており、ユーザーの発明品とのプログラム可能なインタラクションを可能にします。はんだ付けは不要です！ :)

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32StemFrontSmall.png)

これらの画像の高解像度版は[こちら（表面）](https://files.seeedstudio.com/wiki/CUI32Stem/res/CUI32StemFront.jpg)と[こちら（裏面）](https://files.seeedstudio.com/wiki/CUI32Stem/res/CUI32StemBack.jpg)で入手できます。

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32StemBackSmall.png)

CUI32StemはArduinoコードを実行することができ（Arduino IDEのマルチプラットフォーム版である[ChipKIT MPIDE](http://themakersworkbench.com/node/422)を使用してコンパイル）、また、無料のリアルタイムオペレーティングシステムである[StickOS](http://www.cpustick.com/)がプリインストールされており、ボードをプログラムする最も簡単な方法を提供します（ターミナルウィンドウでBASICを使用し、コンピュータにソフトウェアをインストールする必要はありません）。これらの機能により、マイクロコントローラユニット（MCU）の世界に初めて触れる方でも簡単に始めることができます。CUI32Stemの強力な32ビットマイクロコントローラを最大限に活用したい上級ユーザー向けには、Microchipの[MPLAB X](http://www.microchip.com/mplabx)で直接C言語プログラムを開発することが可能です。このソフトウェアはWindows、Mac OS X、Linuxで利用できます。

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32Stem_Grove_Dash_Kit-2.jpg)

[CUI32Stem Dash Kit]

CUI32Stemは単体で購入可能（ヘッダーは袋に入っており、はんだ付けされていないため、低プロファイルの取り付け場所に適したスリムなプロファイルを提供）であり、また2種類のGROVEバンドルの一部として購入することもできます（上記はそのうちの1つで、ワイヤレス機能やより多くのGROVE要素を含む大きなキットが近日公開予定です）。バンドルの一部として出荷される場合、CUI32Stemボードにはヘッダーピンが事前にはんだ付けされており、GROVE要素を簡単にプラグオン/プラグオフできます。「購入方法」のセクションで詳細をご覧ください。「V*ピン」が選択したGROVE要素に適した電圧に対応するように、ボード上の「V*セレクター」を使用して3.3Vまたは5Vを提供するかを選択できます。CUI32Stemの非アナログピンは5V対応（マイクロコントローラ自体は3.3Vで動作します）。

GROVE要素の一部はCUI32Stemにワイヤレス機能を追加します。これにはBluetoothやシンプルな「Serial RF」モジュールが含まれ、現在設計中の「Serial WiFi」モジュール（まだリリースされていません）も含まれます。このSerial WiFiモジュールにより、CUI32Stemはインターネットにアクセスしたり、802.11ワイヤレスを介してOpen Sound Controlプロトコル（[OSC](http://opensoundcontrol.org/)）を使用することができます。StickOSは、CUI32Stem専用に設計された追加ボードであるZigFleaを介して非常に簡単なワイヤレスリンクをサポートしており（例は[こちら](http://www.cpustick.com/examples.htm#ex3)）、USBメモリースティックへの簡単なデータロギングも可能です。ボードの上部と下部の両方にメスUSBコネクタのフットプリントがあり（どちらを使用するかは選択可能、メスUSBコネクタは別途購入するかバンドルに含まれています）、USBホストモードを使用することができます。StickOSにはFAT32ファイルシステムが含まれており、標準のフラッシュドライブへのデータロギングをサポートしています。

[StickOS](http://www.cpustick.com/)は、出荷されるすべてのCUI32Stemにプリインストールされており、オンボードのBASICコンパイラ、ラインエディタ、デバッガ、プロファイラ、インラインヘルプシステムを含んでいます。これにより、新しいファームウェアプログラムを作成し、それを保存して実行することができます。これらはすべて、コンピュータにソフトウェアをインストールする必要なく、標準のターミナルエミュレータを使用して通信するだけで行うことができます。

Arduinoコードは[MPIDE](https://github.com/chipKIT32/chipKIT32-MAX/downloads)（マルチプラットフォーム統合開発環境）を使用してコンパイルおよび実行することができ、専用の[フォーラム](http://chipkit.cc/forum/)もあります。最後に、MicrochipのMPLAB X IDEおよび対応するC32コンパイラを使用してCコードをCUI32Stem用にコンパイルすることも可能です。これらはどちらも無料でダウンロードできます。「Microchip Application Library」（[MAL](http://www.microchip.com/MAL)）も無料でダウンロード可能で、非常に良い例が多数含まれています。PIC32用のCコードのさらなる例は[こちら](http://www.schmalzhaus.com/UBW32/)で見つけることができます。

* ベンチマークに興味がある方のために、標準的なArduinoのCoremarkは18ですが、CUI32StemのCoremarkは203です。これは両方ともネイティブCコードをフル最適化でコンパイルした場合の値です。StickOSでBASICコードを実行する場合、この性能は明らかに見られませんが、その代償として使いやすさが得られます。Arduinoコードは性能面でネイティブCコードに少し近づくことができます。CUI32Stemの性能を示す例として、Philip Burgessのオープンソースプロジェクトである[ポリフォニックシンセサイザー](http://hackaday.com/2011/06/08/chipkit-sketch-mini-polyphonic-sampling-synth/)を構築するプロジェクトがあります。このプロジェクトでは、PIC32を使用してサンプル再生ポリフォニックシンセサイザーを構築し、リアルタイムオーディオエフェクトを含む機能を実現しています。このプロジェクトは、標準的なArduinoでは内部メモリが不足しているため実現不可能であり、Arduinoに「ウェーブシールド」などを追加して外部メモリにアクセスする場合でも、Burgessが示したようなポリフォニー（重なり合う音符や音）を実現することは困難（場合によっては不可能）です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/cui32stem-p-1100.html?cPath=132_208)

## 特徴
---
CUI32Stemは、GROVEシステムの頭脳として設計されています。

ArduinoコードはMPIDEを介してCUI32Stem用にコンパイル可能です。

80MHzで動作する強力な32ビットマイクロコントローラー。

使いやすいリアルタイムオペレーティングシステムがプリインストール済み - StickOS:

**StickOS BASICの特徴**

* プログラムの実行をトレースまたはステップ実行可能。

* サンプリングプロファイリングを使用して、プログラムがどこで時間を費やしているかを確認可能。

* ブレークポイント、アサーション、ウォッチポイントを使用可能。

* プログラムが停止している間に、ライブ変数（およびピン）の操作と検査が可能。

* プログラムの編集と継続実行も可能！

CUI32Stemは、StickOS BASICの開発者であるRich Testardiによって開始されたMicrocontrollers For Everyone（[MFEプロジェクト](http://www.cpustick.com/downloads/mfe.pdf)）の一部です。このプロジェクトの目標は、学生、ホビイスト、その他の非職業ユーザーを含む新しいカジュアルユーザー層に、最先端のマイクロコントローラー技術を学び、楽しみ、有用なプロジェクトを構築することを奨励することです。MFEの目標は、マイクロコントローラー技術を隠したり抽象化したりすることではなく、それらをより親しみやすく、透明で、寛容にすることで、カジュアルユーザーが職業ユーザーと同じ基本概念を学べるようにすることです。ただし、職業的な投資を必要としません。

## 仕様
---
[PIC32MX795F512H](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en545655) プロセッサ:

* 80 MHzクロック

* 1.56 DMIPS/MHz

* 512Kフラッシュメモリ

* 128K RAM

* 8 DMAチャネル

* 3 SPI

* 4 I2C

* 6 UART（シリアルポート）

* フルスピードUSB 2.0デバイスまたはホストモード

* 16 A/Dチャネル、10ビット解像度

## ハードウェアのインストール
---
StickOSへのログインは以下の手順で簡単に行えます：

1. Windowsを使用している場合は、[こちら](http://cpustick.com/downloads.htm)から「CPUStick.inf」をダウンロードし、ファイルを右クリックして「インストール」を選択します。MacおよびLinuxはCUI32Stemと自動的に通信できるため、インストールは不要です。

2. WindowsまたはLinuxを使用している場合は、ターミナルエミュレータプログラムをダウンロードします（Windowsでは「Tera Term」、Linuxでは「minicom」を使用）。Macには組み込みの「screen」コマンドがあります。

3. USBケーブルを使用してCUI32Stemをホストコンピュータに接続します。

4. COMポートまたはデバイスファイル名を確認します。WindowsではデバイスマネージャでCPUStickを探します。Macでは、/dev/tty.usbmodemXXXという名前のファイルを探します（XXXは「このMacについて -> 詳細情報 -> ハードウェア -> USB」のCPUStickデバイスのロケーションIDに一致します）。Linuxでは、デバイスファイル名はディストリビューションによって異なります。

5. システム上のターミナルエミュレータプログラムを開き、適切なCOMポートまたはデバイスファイルに接続します。

6. プロンプトを表示するには、&lt;Enter&gt; を押します：
```
Welcome to StickOS for Microchip PIC32MX2-F128B v1.92c!
Copyright (c) 2008-2012; all rights reserved.
http://www.cpustick.com
support@cpustick.com
(checksum 0x8725)
> _
```

Mac初心者向けのヘルプ：
前述のように、すべてのMacには組み込みの「screen」ユーティリティがあります。これは以下のようにTerminalアプリケーション内で使用します：

まず、Terminalを開きます。初めて使用する場合は、Applications/Utilities/Terminalにあります。次に、以下を入力します：

```
ls /dev/tty.*
```

これにより、すべてのシリアルポートのリストが表示されます。開きたいポートを選択します。たとえば、私のリストは次のようになります：
```
/dev/tty.Bluetooth-Modem
/dev/tty.Bluetooth-PDA-Sync
/dev/tty.usbmodemfa141
```

CUI32Stemボードは、最後のものと似た名前で表示され、「tty.usbmodem」が名前に含まれます。

そのため、'screen portname'と入力してリターンキーを押すだけで、StickOSが画面に表示されます。私の場合、次のように入力しました：
```
screen /dev/tty.usbmodemfa141
```

その後、StickOSからのウェルカムメッセージを受信するには、再度Enterキーを押す必要がある場合があります。

screenアプリを終了するには、control-Aを押してからcontrol-\を押します。

最終的な注意点：この手順は、[GROVE Serial Bluetooth](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html)要素をCUI32Stemに接続している場合にも同様に機能します。唯一の違いは、名前に「bluetooth」が含まれることです。どれが正しいか分からない場合は、すべて試してみてください。

## アプリケーションアイデア
---
CUI32Stemを使えば、インタラクティブなプロジェクトを簡単に作成できます！オンラインには数千ものArduinoプロジェクトの例があり、ピン名をCUI32Stemに対応するように変更するなど、わずかな変更でコンパイル可能です。

BASICに興味がある方、初心者の方、または試してみたい方へ... StickOSは本当に簡単なのか？

以下の例は、即座に結果を得られ、励ましとフィードバックを提供するもので、StickOSでできる簡単なことをCUI32Stemを使って示しています。近い将来、GROVE要素を使用した作業例を含む、より完全な「カリキュラム」が開発される予定です。

**1/5: LEDを点滅させる**
組み込みプログラミングの「Hello World!」として、CUI32Stemのピン「rd0」でLEDを点滅させてみましょう：
```
> 10 dim led as pin rd0 for digital output
> 20 while 1 do
> 30	let led = !led
> 40 endwhile
> run
 _
```
プログラムの10行目では、CUI32Stemのピン「rd0」にバインドされた「led」という名前の変数を宣言し、デジタル出力用に設定します。この変数の操作は、ピンに即座に反映されます。プログラムの20～40行目は、プログラムのメインループを形成します。30行目では、ループ内でCUI32Stemのピン「rd0」のLEDの状態を単純に反転させます。

あれ？何かがおかしいです -- LEDが点滅せず、半分点灯しているようです... あ！遅延を追加するのを忘れていました！そこで、&lt;Ctrl-C&gt;でプログラムを停止し、500msの遅延を追加して修正し、続行します：
```
<Ctrl-C>
STOP at line 30
> 35 sleep 500 ms
> cont
 _
```
これでずっと良くなりました！

さて、CUI32Stemをもう少しインタラクティブにしてみましょう。再び&lt;Ctrl-C&gt;でプログラムを停止し、LEDの状態を調べ（つまり、「led」変数の値を出力）て、手動でLEDを点滅させます：
```
<Ctrl-C>
STOP at line 35
> print led
0
> let led = 1
> print led
1
> let led = 0
> print led
0
>_
```

変数を変更すると、LEDの状態が変わることに注目してください！

**2/5: タイマーISRを使用してLEDを点滅させる**
LEDが点滅するようになったので、次はプログラムループではなくタイマーISR（割り込みサービスルーチン）を使用してみましょう。これにより、将来的に「メインループ」で他の作業を行うことができます。プログラムの10行目を保持し、それ以降の行をすべて削除して、プログラムをリストしてそこから始めます：
```
> delete 20-
> list
10 dim led as pin rd0 for digital output
end
>_
```

10行目では、CUI32Stemのピン「rd0」にバインドされた「led」という名前の変数を宣言し、デジタル出力用に設定します。20行目ではタイマー#1を500msごとにポップするように設定します。30行目ではタイマー割り込みを有効にし、タイマーがポップするたびに「let led = !led」というステートメントを実行するように指示します（もし他の作業が必要であればサブルーチンを呼び出すこともできます）。最後に40行目ではメインループをスリープ状態にします -- 以降は割り込みを処理するだけです！
おお、最初の試みでうまくいきました！ :-)

**3/5: 出力比較モジュールを使用してLEDを点滅させる**
タイマーについて少し理解したところで、CUI32Stemの「出力比較モジュール」周辺機器を使用して、CPUを全く使用せずにLEDを点滅させてみましょう！これらはキャリアユーザーが使用する基本的な概念と同じです。
再び&lt;Ctrl-C&gt;でプログラムを停止し、コマンドラインでこれを実行します（プログラムを書かずに） -- 少し自信がないので...
```
<Ctrl-C>
STOP at line 40
> dim hz as pin rd0 for frequency output
> hz = 1
>_
```

最初の行では、CUI32Stemのピン「rd0」にバインドされた「hz」という名前の変数を宣言し、出力比較モジュールの出力を受け取るように設定します。この変数の操作は、出力比較モジュールの出力周波数（Hz）として即座にプログラムされます。
おお、これはすごい！速度を上げてみましょう：
```
> hz = 10
>_
```
さらに速く：

```
> hz = 100
>_
```

このデバイスにブザーを接続したいですが、その前に別の実験を試してみましょう...

**4/5: A/Dコンバータでポテンショメータを読み取る**
この実験では、ポテンショメータの中央リードをCUI32Stemのピン「an0」に接続し、ポテンショメータの外側リードをグランドと3.3Vに接続します（もちろん、GROVEポテンショメータ要素を接続するだけでも構いません）。再びコマンドラインでこれを実行します（プログラムなし） -- 動作を確認するためです：
```
> dim pot as pin an0 for analog input
> print pot
1876
>_
```
最初の行では、CUI32Stemのピン「an0」にバインドされた「pot」という名前の変数を宣言し、A/Dコンバータを介してアナログ入力用に設定します。この変数の参照は、ピンで読み取られた現在のミリボルト数を反映します！
ポテンショメータを少し回して再度試してみましょう：
```
> print pot
1201
>_
```
すごいですね！

**5/5: すべてを結びつける -- アナログから周波数へのコンバータ！**
さて、CUI32Stemのピン「rd0」に接続されたLEDを小型ブザーに置き換えましょう... そして、これまで学んだスキルを使って「アナログから周波数へのコンバータ」を作成するプログラムを書きます！まず「new」コマンドでこれまでの作業をすべて消去し、そこから始めます：
```
> new
> 10 dim buzzer as pin rd0 for frequency output
> 20 dim pot as pin an0 for analog input
> 30 configure timer 1 for 100 ms
> 40 on timer 1 do let buzzer = pot
> 50 halt
> run
 _
```
ポテンショメータを回してブザーを聞いてみましょう -- 0から3300Hzまで変化し、ポテンショメータから100msごとに更新されます！私たちはすごいですね！ :-)

以下にさらに高度なStickOSの例を示します：

*   [ZigFlea™ ワイヤレスリモートLED調光器](http://www.cpustick.com/examples.htm#ex3)

*   [LCDデジタル温度計](http://www.cpustick.com/examples.htm#ex2)

*   [MCUとの親密でインタラクティブな体験！](http://www.cpustick.com/examples.htm#int)

*   [トースターオーブン温度プロファイルコントローラー](http://www.cpustick.com/examples.htm#ex1)

##   より高度なプログラミング

CUI32Stem用のArduinoコードをコンパイルするためのMPIDEマルチプラットフォームIDEのインストール手順は[こちら](http://www.chipkit.cc/wiki/index.php?title=MPIDE_Installation "MPIDE_Installation")に記載されています。

MPLABを使用した簡単なCプログラムで、ボタンの押下に応じてLEDを切り替えるコード：
```
#define SYSCLK 80000000L

#include <p32xxxx.h>
#include <plib.h>

int main(void)
{
	SYSTEMConfigPerformance(SYSCLK);

	LATE = 0xFFFE; TRISE = 0xFFFE;

	while (1) {
		LATEbits.LATE0 = PORTEbits.RE7;
	}

	return 0;
}
```

##   サポート

[Seeedフォーラムで質問する](https://www.seeedstudio.com/forum).



## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="http://cui32.googlecode.com/svn/trunk/eagle/CUI32Stem/CUI32Stem.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   リソース

*   [Eagle形式の回路図とレイアウト、PDF形式の回路図、Gerberファイル、部品表を含むZIPファイル](http://cui32.googlecode.com/svn/trunk/eagle/CUI32Stem/CUI32Stem.zip)

*   [ブートローダーとStickOS BASICファームウェア](http://code.google.com/p/cui32/source/browse/trunk/firmware/CUI32Stem/)

##   購入方法

Seeedstudio Bazaarから購入するにはこちらをクリックしてください。

ヘッダーなしのCUI32Stemボード単体：
**モデル: [https://www.seeedstudio.com/depot/cui32stem-p-1100.html?cPath=132_208](https://www.seeedstudio.com/depot/cui32stem-p-1100.html?cPath=132_208)**

「スターターキット」：(Bazaarへのリンクを挿入)
ドキュメントWiki: CUI32Stem GROVE Dash Bundle

「フルキット」：(Bazaarへのリンクを挿入)
ドキュメントWiki: CUI32Stem GROVE Lab Bundle

##   関連リンク

*   [http://www.cpustick.com/](http://www.cpustick.com/)

*   [http://code.google.com/p/cui32/](http://code.google.com/p/cui32/)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>