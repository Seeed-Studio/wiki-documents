---
description: 豊富なコンテンツを備えたドキュメントページを作成します。
title: IO Expander for XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /io_expander_for_xiao
sku: 103030415
last_update:
  date: 07/09/2026
  author: Stephen Lo
createdAt: '2023-09-19'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/ja/io_expander_for_xiao/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg" alt="pir" width={500} height="auto" /></p>

:::caution
この製品は現在販売されていません。
:::


IO Expander for XIAO は、Seeed Studio XIAO シリーズの機能を拡張するために設計された最先端の拡張ボードです。MCP23017 チップを搭載し、追加で 16 本の IO ピンを提供することで、プロジェクトを制約なく拡張できます。より多くのコンポーネントで実験したいホビイストから、信頼性の高い IO 拡張ソリューションを求めるプロフェッショナルまで、このボードはあらゆるニーズに応えるよう設計されています。XIAO シリーズとの高い互換性によりシームレスに統合でき、開発プロセスをよりスムーズかつ効率的にします。

## 特長

- XIAO とのシームレスな統合：Seeed Studio XIAO シリーズと完全に連携するように設計されています。
- 追加の 16 本の IO ピン：MCP23017 によって駆動され、プロジェクト用に 16 本の追加 IO ピンを提供します。
- アドレス設定可能な I2C インターフェース：デフォルトの I2C アドレスは 0x21 ですが、0x20 に設定変更できます。
- 堅牢な設計：高品質な材料で構成され、長寿命と高い信頼性を実現します。

## 仕様

- チップ: MCP23017
- IO ピン数: 16
- 通信プロトコル: I2C
- デフォルト I2C アドレス: 0x21（0x20 に設定可能）
- 動作電圧: 3.3V
- 寸法: 21mm x 17.8mm

## 応用例

IO Expander for XIAO は汎用性が高く、以下を含むさまざまな用途に使用できますが、これらに限定されません：

- ホームオートメーションシステム：スマートホーム環境で制御できるデバイスの数を拡張します。
- ロボティクス：ロボットにより多くのセンサ、モーター、その他のコンポーネントを追加しても IO ピンが不足しません。
- ゲームコンソール：多数のボタンやスイッチを備えたカスタムコントローラや周辺機器を設計できます。
- 産業用制御システム：産業環境でより多くのデバイスやセンサを管理します。
- 教育用プロジェクト：IO ピン数に制限されることなく、マイコンや電子回路について学生に教えることができます。

## ハードウェア概要

このセクションでは、XIAO IO Expander ボード上の各種コンポーネントとインターフェースについて詳しく説明します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png" alt="pir" width={800} height="auto" /></p>

### 0. 標準 XIAO パッド

これらは XIAO マイコンを接続するための標準パッドです。

### 1. J1 パッド

J1 パッドにより、ユーザーは MCP23017 の RST、INTB、INTA ピンを、はんだ付けによって XIAO の D6、D1、D0 ピンに接続するかどうかを選択できます。上から順に RST、INTB、INTA です。

デフォルトでは、拡張ボードを使用するとき、エリア 8 の追加出力パッドが有効になっています。これらを有効にしたくない場合は、ナイフで J1 エリア内の隣接する 2 つのパッドを切り離す必要があります。

### 2. MCP23017 チップ

これはメインの I/O エクスパンダチップで、追加の 16 本の IO を提供します。

### 3. J2 パッド

このパッドは I2C アドレスを選択するためのものです。デフォルトアドレスは 0x21 です。このパッドにはんだ付けすると、アドレスを 0x20 に変更できます。

### 4. MCP23017 出力ピン

これらは MCP23017 チップからの出力ピンです。各ピンの定義はボード裏面に記載されています。PA0 から PB7 まであり、合計 16 本の IO を提供します。

### 5. Grove パッド

Grove モジュールを接続したい場合は、付属の Grove ソケットをはんだ付けできます。この Grove インターフェースは I2C バスに接続されています。ここで IIC ピンを使用することを選択した場合、エリア 4 の拡張 IO ピンは使用できなくなります。

### 6. VCC ピン

これは他のコンポーネントに電源を供給するために使用できる出力ピンです。

### 7. GND ピン

これも他のコンポーネントのグラウンドとして使用できる出力ピンです。

### 8. 追加出力パッド

これらはいくつかの追加出力パッドで、GND、INTB、INTA、RST を含みます。これらのピンを他の場所で使用するためにはんだ付けしたい場合は、そのようにすることができます。

## はじめに

IO Expander for XIAO クイックスタートガイドへようこそ。このガイドは、XIAO RP2040 メインコントローラと組み合わせて、新しい IO Expander ボードのセットアップと使用開始を支援することを目的としています。

### ハードウェアの準備

この拡張ボードを使用する主な方法は 3 つあります。

**モード 1: SMD**

XIAO にピンがはんだ付けされていない場合は、直接 SMD 方法を選択し、XIAO と拡張ボードを PCB ボードにはんだ付けして GPIO 拡張機能を使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg" alt="pir" width={800} height="auto" /></p>

:::note
写真に写っている PCB は展示用のみであり、この記事執筆時点では販売されていません。
:::

**モード 2: XIAO がピン列を介して拡張ボードに直接接続**

この方法では、接続用ワイヤを直接 GPIO 拡張ボードにはんだ付けして、対象デバイスに接続することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg" alt="pir" width={800} height="auto" /></p>

**モード 3: XIAO が長いピン列を介して拡張ボードに接続され、拡張ボード側にもピン列をはんだ付けして拡張**

この接続方法では、DuPont ケーブルを自由に GPIO 拡張ボードに取り付けることができます。用途に応じて便利に配線できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg" alt="pir" width={800} height="auto" /></p>

はんだ付けが完了したら、拡張ボードを XIAO RP2040 メインコントローラに接続することができます。

XIAO RP2040 をプログラミングするには、TYPE-C USB データケーブルが必要です。一方を XIAO RP2040 に、もう一方をコンピュータに接続します。XIAO RP2040 のプログラミングに関する詳細なガイドは、この [Wiki](https://wiki.seeedstudio.com/ja/XIAO-RP2040/) を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg" alt="pir" width={600} height="auto" /></p>

### ソフトウェアの準備

ボードのプログラミングを開始する前に、XIAO 用の特定のライブラリが必要です。この [GitHub リンク](https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library) から MCP23017 ライブラリをダウンロードしてください。ダウンロード後、開発環境にライブラリをインストールします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## デモ：IO 出力の High / Low レベル

Arduino IDE で新しいスケッチを開き、次のサンプルコードをコピーします：

```cpp
#include <Adafruit_MCP23X17.h>

Adafruit_MCP23X17 mcp;

void setup() {
    Serial.begin(9600);
    Serial.println("MCP23xxx Blink Test!");
    if (!mcp.begin_I2C()) {
        Serial.println("Error.");
        while (1);
    }

    Serial.println("Looping...");

    for(int i=0; i<16; i++) {
        mcp.pinMode(i, OUTPUT);
    }
}

void loop() {
    mcp.digitalWrite(15, LOW); //PB7
    mcp.digitalWrite(14, HIGH); //PB6
    mcp.digitalWrite(13, HIGH); //PB5
    mcp.digitalWrite(12, HIGH); //PB4
    mcp.digitalWrite(11, HIGH); //PB3
    mcp.digitalWrite(10, HIGH); //PB2
    mcp.digitalWrite(9, HIGH); //PB1
    mcp.digitalWrite(8, HIGH); //PB0
    mcp.digitalWrite(7, HIGH); //PA7
    mcp.digitalWrite(6, HIGH); //PA6
    mcp.digitalWrite(5, HIGH); //PA5
    mcp.digitalWrite(4, HIGH); //PA4
    mcp.digitalWrite(3, HIGH); //PA3
    mcp.digitalWrite(2, HIGH); //PA2
    mcp.digitalWrite(1, HIGH); //PA1
    mcp.digitalWrite(0, HIGH); //PA0
    delay(1000);
}
```

上記のコードを XIAO に書き込みます。コードの書き込みが正常に完了すると、PB7 ピンを除くすべてのピンが 3.3V の High になっていることが確認できます。

:::caution
この拡張ボードでは、デジタル入力および出力のみが使用でき、PWM やアナログ入出力機能は使用できません。
:::

### ピンアドレッシング

_pinMode(pinId, dir)_ や _digitalRead(pinId)_、_digitalWrite(pinId, val)_ のような単一ピン操作を使用する場合、ピンは以下の ID を使って指定します。たとえば、_GPB0_ のモードを設定するには _pinMode(8, ...)_ を使用します。**注意** MCP23008 および MCP23S08 には _GPAx_ ピンのみがあります。

| MCP23x17 Pin # | Pin 名 | Pin ID |
| :------------: | :------: | :----: |
|       21       |   GPA0   |   0    |
|       22       |   GPA1   |   1    |
|       23       |   GPA2   |   2    |
|       24       |   GPA3   |   3    |
|       25       |   GPA4   |   4    |
|       26       |   GPA5   |   5    |
|       27       |   GPA6   |   6    |
|       28       |   GPA7   |   7    |
|       1        |   GPB0   |   8    |
|       2        |   GPB1   |   9    |
|       3        |   GPB2   |   10   |
|       4        |   GPB3   |   11   |
|       5        |   GPB4   |   12   |
|       6        |   GPB5   |   13   |
|       7        |   GPB6   |   14   |
|       8        |   GPB7   |   15   |

## FAQ

### 1. IO Expander for XIAO が反応しないのはなぜですか？

**回答**：XIAO モジュールが拡張ボードに正しく挿し込まれていることを確認してください。また、必要なライブラリがインストールされていること、Arduino IDE で正しいボードとポートが選択されていることも確認してください。

### 2. IO Expander for XIAO を他のマイコンでも使用できますか？

**回答**: はい、IO Expander は主に XIAO モジュール向けに設計されていますが、I2C 通信をサポートする他のマイコンでも使用できます。その場合は、コードや配線を適宜調整する必要があります。

### 3. IO Expander for XIAO 上の MCP23017 チップの I2C アドレスを変更するにはどうすればよいですか？

**回答**: 既定の I2C アドレスは 0x21 に設定されています。これを 0x20 に変更したい場合は、基板上の "J2" とラベルされたジャンパがあります。アドレスを変更するには、この J2 ジャンパをはんだ付けする必要があります。

### 4. IO ピンでノイズや不安定な動作が発生します。原因は何でしょうか？

**回答**: 配線が確実で、干渉がないことを確認してください。プルアップ抵抗またはプルダウン抵抗を使用すると、入力ピンを安定させるのに役立ちます。また、電源が安定しており、接続されているすべてのデバイスに必要な電流を供給できることも確認してください。

## リソース

- **[ZIP]** [Eagle ファイル](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip)
- **[PDF]** [データシート - MCP23017](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
