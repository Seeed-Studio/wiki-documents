---
description: Grove 1.2インチ IPS ディスプレイの使い方
title: Grove 1.2インチ IPS ディスプレイ
keywords:
- ips
- display
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_1.2inch_ips_display
last_update:
  date: 05/15/2025
  author: Stephen Lo
---


# Grove 1.2インチ IPS ディスプレイ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/2-Grove-1.2-Inch-IPS-Display-font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-1-2-Inch-IPS-Display-p-5699.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove-1.2インチIPSディスプレイは、Seeed Studioによって精密に設計された1.2インチのシリアル液晶ディスプレイです。240x240の高解像度を提供し、クリアで鮮やかな画像表示を実現します。このディスプレイの設計理念は、さまざまなDIYやIoT（Internet of Things）プロジェクトのニーズを満たすために、シンプルで高品質なディスプレイソリューションを提供することです。

このディスプレイはシリアルSPIインターフェースを採用しており、接続にはSCKとSDAのみが必要です。これにより、ユーザーの操作が簡素化され、配線の時間を節約できます。さらに、RGBカラー表示により、豊かで鮮やかな色彩で画像を強化します。

同時に、Grove-1.2インチIPSディスプレイはIPS全視野角技術を採用しています。ユーザーがどの角度から見ても、ほぼ同じ視覚体験を得ることができます。これにより、プロジェクトはどの角度から見ても最高の表示効果を提供します。

さらに、このディスプレイのドライバーICとしてST7789を選択し、オープンソースのドライバーライブラリとサンプルコードを準備しました。これにより、プロジェクト開発を迅速に開始することができます。


## 特徴

- **簡素化されたインターフェース:** ディスプレイはシリアルSPIインターフェースを採用しており、SCKとSDAの接続のみでメインコントローラーに接続できます。これにより、ユーザーの操作が大幅に簡素化され、配線の時間を節約できます。
- **高解像度:** 240x240ピクセルの高解像度により、クリアで鮮やかな画像を提供し、プロジェクトの視覚体験を向上させます。
- **全視野IPS技術:** Grove-1.2インチIPSディスプレイはIn-Plane-Switching（IPS）技術を使用しており、すべての視野角から一貫した正確な色を提供します。
- **豊かな色彩:** ディスプレイは最大65k色を表示可能です。RGBカラー表示により、画像に深みと変化を加え、より鮮やかでリアルなものにします。
- **コンパクトサイズ:** スクリーンサイズは24.76x26.8mm、回路基板サイズは40x40mmです。そのコンパクトなサイズは、さまざまなDIYやIoTプロジェクトに最適です。
- **広い入力電圧範囲:** 回路基板は3.3Vまたは5Vの入力電圧を受け入れることができ、幅広い電源に対応します。
- **信頼性の高いドライバーIC:** ディスプレイはST7789をドライバーICとして使用しています。オープンソースのドライバーライブラリとサンプルコードにより、ユーザーが簡単に始められるようにしています。
- **広い動作温度範囲:** -20から70度の動作温度範囲により、このディスプレイはさまざまな環境に適しています。

## アプリケーションアイデア

- **DIY気象ステーション**: Grove-1.2 Inch IPS Displayは、手作りの気象ステーションに使用してリアルタイムの気象情報を提供できます。豊かで鮮やかなアイコンやデータを表示し、魅力的なユーザー体験を提供します。
- **個人用デジタルアートディスプレイ**: このディスプレイはデジタルアートデバイスに組み込むことができ、高解像度でカラフルな表示を通じて創造的なアイデアを披露できます。アートやデザインプロジェクトに最適なコンポーネントです。
- **DIYゲームコンソール**: 高解像度で広視野角のディスプレイを備えたGrove-1.2 Inch IPS Displayは、手作りのゲームコンソールに最適です。鮮やかな色彩表示がゲーム体験を向上させます。
- **スマートホームシステム**: このディスプレイはスマートホームシステムに統合でき、家庭の状況やシステムの状態を鮮明で鮮やかに視覚的にフィードバックします。
- **教育プロジェクト**: 教育分野では、教室プロジェクトでグラフィックス、コーディング、電子機器について学生に教えるために使用できます。シンプルなインターフェースと簡単なセットアップにより、学習環境に最適です。
- **産業用制御パネル**: 産業用途では、制御パネルに使用して重要な情報や状態を表示し、オペレーターが産業プロセスを監視および制御するのを支援します。広視野角により、さまざまな視点からの明確な視認性を確保します。

## ハードウェア概要

### ピンマップ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/hw.png" alt="pir" width={500} height="auto" /></p>

## はじめに

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove-1.2 Inch IPS Display |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/Longan-Labs/Grove-1.2-Inch-IPS-Display/main/images/small.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="/ja/grove_1.2inch_ips_display" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove-1.2 Inch IPS DisplayをGrove-Base ShieldのD7(D7/D8)ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/connection.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Grove Base Shieldがない場合は、以下のようにGrove-1.2 Inch IPS DisplayをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Grove-1.2 Inch IPS Display |
|---------------|-------------------------|
| 5V            | 赤 (VCC)                    |
| GND           | 黒 (GND)                  |
| SDA           | 白 (DTA)                 |
| SCK           | 黄色 (SCK)                |

#### ソフトウェア

- **ステップ1.** GithubからArduinoライブラリをダウンロードします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_ST7789_Fast/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用ライブラリをインストールします。

- **ステップ3.** ライブラリを正しくダウンロードしてインストールした後、例題フォルダ内に**ST7789_HelloWorld.ino**という名前のプログラムが見つかります。このプログラムはGrove-1.2 Inch IPS Display用に設計されています。

```cpp
#include <Adafruit_GFX.h>
#include <Arduino_ST7789_Fast.h>

#define SCK   7
#define SDA   8

Arduino_ST7789 lcd = Arduino_ST7789(SCK, SDA);

void setup(void)
{
    lcd.init();
    lcd.fillScreen(BLACK);

    lcd.setCursor(0, 0);
    lcd.setTextColor(RED,BLACK);
    lcd.setTextSize(3);
    lcd.println("HELLO WORLD");
}

void loop()
{

}
```

- **ステップ4.** ディスプレイに「Hello World」が表示されるのを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/result.jpg" alt="pir" width={400} height="auto" /></p>

## Arduino UNOでの高速IO操作

ArduinoのI/Oピンを直接レジスタを介して操作することで、標準の`digitalWrite()`関数を使用する場合に比べて、より高い効率と速度を得ることができます。しかし、この方法を使用するには、Arduinoハードウェアやマイクロコントローラーの動作についてより深い理解が必要です。

高速I/Oを利用したい場合は、`Arduino_ST7789_Fast.h`ファイルにいくつかの変更を加える必要があります。まず、20行目を以下のように変更してください：`#define FAST_IO 1`。さらに、23行目から26行目の間に、IOをHIGHおよびLOWに設定するコードを記述します。以下はD7/D8を使用する例です：

```cpp
#define FAST_IO 1

#if FAST_IO
#define LCD_SCK_SET PORTD |= (1 << PORTD7); // SCKをHIGHに設定
#define LCD_SDA_SET PORTB |= (1 << PORTB0); // SDAをHIGHに設定
#define LCD_SCK_CLR PORTD &= ~(1 << PORTD7); // SCKをLOWに設定
#define LCD_SDA_CLR PORTB &= ~(1 << PORTB0); // SDAをLOWに設定
#endif
```

以下は、Arduino UNOでレジスタを使用してI/Oピンを制御する方法に関する簡単なチュートリアルです：

Arduino UNOには、B、C、Dとラベル付けされた3つのポートがあります。それぞれのポートには対応するデータレジスタがあり、それらはPORTB、PORTC、PORTDです。これらのレジスタを使用して、I/Oピンを直接制御できます。

例えば、デジタルピン13（PORTBの5ビット目、つまりPORTB5に対応）をHIGHに設定したい場合、以下のように記述します：

```cpp
PORTB |= (1 << 5);
```

この文は、PORTBの5ビット目を1に設定し、他のビットを変更しません。これはビット単位のOR演算子（|=）と左シフト演算子（&lt;&lt;）を使用して実現されます。

同様に、デジタルピン13をLOWに設定したい場合、以下のように記述します：

```cpp
PORTB &= ~(1 << 5);
```

この文は、PORTBの5ビット目を0に設定し、他のビットを変更しません。これはビット単位のAND演算子（&=）とビット単位のNOT演算子（~）を使用して実現されます。

以下は、Arduino UNOのすべてのポートとそれに対応するレジスタを示しています：

**デジタルポート**

- デジタルポート0 - 7は、レジスタPORTDに対応し、ビットPORTD0からPORTD7に対応
- デジタルポート8 - 13は、レジスタPORTBに対応し、ビットPORTB0からPORTB5に対応

**アナログ入力ポート**

- アナログ入力ポートA0 - A5は、レジスタPORTCに対応し、ビットPORTC0からPORTC5に対応

アナログ入力ポートはデジタルI/Oとしても機能し、デジタルピン番号14から19に対応します。例えば、A0はデジタルピン14としても使用できます。

各I/Oレジスタには、ピンのモード（入力または出力）や入力ピンのプルアップ抵抗を制御するための2つの関連レジスタもあります。例えば、PORTDの制御レジスタはDDRDとPINDです。DDRxレジスタはピンモードを設定するために使用され、PINxレジスタはピンの状態を読み取るために使用されます。

`PORTx`レジスタに書き込む前に、対応する`DDRx`レジスタが正しく設定されていることを確認する必要があります。例えば、`PD0`を出力として設定し、HIGHを出力したい場合、まず`DDRD`レジスタを設定します：

```cpp
DDRD |= (1 << 0);  // PD0を出力として設定
PORTD |= (1 << 0);  // PD0にHIGHを出力
```

この情報は、Arduino UNOのマイクロコントローラーであるATmega328Pのデータシートに記載されています。他のArduinoモデルを使用している場合は、それぞれのマイクロコントローラーのデータシートを参照する必要があります。異なるマイクロコントローラーでは、ポートやレジスタのレイアウトが異なる場合があります。

レジスタを操作する際は、慎重に行うことが重要です。不適切な操作は、他のピンの状態やマイクロコントローラーの機能に影響を与える可能性があります。

この製品のレジスタ操作モードを使用したいユーザーは、上記の知識とスキルを理解し、自主的に実装する必要があります。

## FAQ

### 1. スクリーンを接続したまま再プログラムするとスクリーンが動作しません。

A: プログラムがスクリーンと常に通信している場合、再プログラムによってこのプロセスが中断され、スクリーンが正常に動作しなくなる可能性があります。電源をオフにしてから再度オンにすることで、スクリーンの正常な動作を回復できる場合があります。

### 3. ディスプレイにはどのような電源を使用すればよいですか？

A: 回路基板は3.3Vまたは5Vの入力電圧を受け入れることができます。そのため、この範囲内の電源を使用してください。

### 4. ディスプレイを極端な温度条件下で使用できますか？

A: ディスプレイの動作温度範囲は-20℃から70℃です。ただし、最適な性能と長寿命を確保するために、通常の室温条件で使用することをお勧めします。

### 5. ディスプレイの色が正しく表示されません。原因は何でしょうか？

A: コード内でディスプレイが正しく初期化されていること、また正しい色値を使用していることを確認してください。それでも問題が解決しない場合、ディスプレイまたは接続ケーブルに問題がある可能性があります。接続を確認するか、別のディスプレイで試してみてください。


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove-1.2インチIPSディスプレイ用Eagleファイル](https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar)
- **[PDF]** [ST7789仕様書](https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/ST7789V_SPEC_V1.2.pdf)


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>