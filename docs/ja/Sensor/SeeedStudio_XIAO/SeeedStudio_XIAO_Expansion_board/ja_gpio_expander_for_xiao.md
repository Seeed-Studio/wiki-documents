---
description: リッチなコンテンツを持つドキュメントページを作成します。
title: XIAO用IOエキスパンダー
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/io_expander_for_xiao
last_update:
  date: 09/18/2023
  author: Stephen Lo
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/GPIO-Expander-for-XIAO-p-5795.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

XIAO用IOエキスパンダーは、Seeed Studio XIAOシリーズの機能を向上させるために設計された最先端の拡張ボードです。MCP23017チップを搭載し、このボードは追加の16個のIOピンを提供し、ユーザーが制約なくプロジェクトを拡張できるようにします。より多くのコンポーネントで実験したいホビイストでも、信頼性の高いIO拡張ソリューションを求めるプロフェッショナルでも、このボードはあなたのニーズに合わせて設計されています。XIAOシリーズとの互換性により、シームレスな統合が保証され、開発プロセスがよりスムーズで効率的になります。

## 特徴

- XIAOとのシームレスな統合：Seeed Studio XIAOシリーズと完璧に動作するよう設計されています。
- 16個の追加IOピン：MCP23017を搭載し、プロジェクト用に16個の追加IOピンを提供します。
- 設定可能なアドレスを持つI2Cインターフェース：デフォルトのI2Cアドレスは0x21ですが、0x20に設定可能です。
- 堅牢な設計：長寿命と信頼性を確保するため、高品質な材料で構築されています。

## 仕様

- チップ：MCP23017
- IOピン数：16
- 通信プロトコル：I2C
- デフォルトI2Cアドレス：0x21（0x20に設定可能）
- 動作電圧：3.3V
- 寸法：21mm x 17mm

## 用途

XIAO用IOエキスパンダーは汎用性が高く、以下を含む多数の用途で使用できます：

- ホームオートメーションシステム：スマートホームセットアップで制御できるデバイス数を拡張します。
- ロボティクス：IOピンが不足することなく、ロボットにより多くのセンサー、モーター、その他のコンポーネントを追加します。
- ゲームコンソール：多数のボタンやスイッチを持つカスタムコントローラーやその他の周辺機器を設計します。
- 産業制御システム：産業セットアップでより多くのデバイスやセンサーを管理します。
- 教育プロジェクト：IOピン数に制限されることなく、学生にマイクロコントローラーと電子工学について教えます。

## ハードウェア概要

このセクションでは、XIAO IOエキスパンダーボード上の様々なコンポーネントとインターフェースの詳細な概要を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png" alt="pir" width={800} height="auto" /></p>

### 0. 標準XIAOパッド

これらはXIAOマイクロコントローラーを接続するための標準パッドです。

### 1. J1パッド

J1パッドにより、ユーザーはハンダ付けを通じてMCP23017のRST、INTB、INTAピンをXIAOのD6、D1、D0ピンに接続するかどうかを決定できます。上から下に、RST、INTB、INTAです。

デフォルトでは、拡張ボードを使用する際、エリア8の追加出力パッドが有効になります。これらを有効にしたくない場合は、エリアJ1の隣接する2つのパッドをナイフで切断する必要があります。

### 2. MCP23017チップ

これは追加の16個のIOを提供するメインI/Oエキスパンダーチップです。

### 3. J2パッド

このパッドはI2Cアドレスを選択するためのものです。デフォルトアドレスは0x21です。このパッドをハンダ付けすると、アドレスを0x20に変更できます。

### 4. MCP23017出力ピン

これらはMCP23017チップからの出力ピンです。各ピンの定義はボードの裏面で確認できます。PA0からPB7まで、合計16個のIOを提供します。

### 5. Groveパッド

Groveモジュールを接続したい場合は、提供されたGroveソケットをハンダ付けできます。このGroveインターフェースはI2Cバスに接続されています。ここでIICピンを使用することを選択した場合、エリア4の拡張IOピンは使用できません。

### 6. VCCピン

これは他のコンポーネントに電力を供給するために使用できる出力ピンです。

### 7. GNDピン

これも他のコンポーネントの接地に使用できる出力ピンです。

### 8. 追加出力パッド

これらはGND、INTB、INTA、RSTを含む追加の出力パッドです。これらのピンを他の場所で使用するためにハンダ付けしたい場合は、そうすることができます。

## はじめに

XIAO用IOエキスパンダーのクイックスタートガイドへようこそ。このガイドは、XIAO RP2040メインコントローラーと組み合わせて、新しいIOエキスパンダーボードをセットアップし、使い始めるのに役立つことを目的としています。

### ハードウェアの準備

この拡張ボードを使用する主な方法は3つあります。

**モード1：SMD**

XIAOにピンがはんだ付けされていない場合は、直接SMD方法を選択して、XIAOと拡張ボードをPCBボードにはんだ付けし、GPIO拡張の機能を使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg" alt="pir" width={800} height="auto" /></p>

:::note
図に示されているPCBは表示のみを目的としており、記事執筆時点では販売されていませんでした。
:::

**モード2：XIAOがピン列を通じて拡張ボードと直接接続**

このアプローチでは、GPIO拡張ボードに接続線を直接はんだ付けして、ターゲットデバイスを接続するオプションがあります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg" alt="pir" width={800} height="auto" /></p>

**モード3：XIAOが長いピン列を通じて拡張ボードと接続し、拡張ボードはピン列をはんだ付けして拡張**

この接続方法では、GPIO拡張ボードにデュポンケーブルを自由に取り付けることができます。アプリケーションの配線が便利になります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg" alt="pir" width={800} height="auto" /></p>

はんだ付けが完了したら、拡張ボードをXIAO RP2040メインコントローラーに接続できます。

XIAO RP2040をプログラミングするには、TYPE-C USBデータケーブルが必要です。一端をXIAO RP2040に、もう一端をコンピューターに接続します。XIAO RP2040のプログラミングに関する詳細なガイドについては、この[Wiki](https://wiki.seeedstudio.com/ja/XIAO-RP2040/)を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg" alt="pir" width={600} height="auto" /></p>

### ソフトウェアの準備

ボードのプログラミングを開始する前に、XIAO用の特定のライブラリが必要です。この[GitHubリンク](https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library)からMCP23017ライブラリをダウンロードしてください。ダウンロード後、プログラミング環境にライブラリをインストールしてください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## デモ：IO出力のハイレベルとローレベル

Arduino IDEで新しいスケッチを開き、以下のサンプルコードをコピーしてください：

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

上記のコードをXIAOにアップロードしてください。コードが正常にアップロードされると、PB7ピンを除くすべてのピンが3.3Vハイになっていることが確認できます。

:::caution
この拡張ボードはデジタル入出力のみ使用可能で、PWMやアナログ入出力機能は使用できません。
:::

### ピンアドレッシング

_pinMode(pinId, dir)_ や _digitalRead(pinId)_ または _digitalWrite(pinId, val)_ などの単一ピン操作を使用する場合、ピンは以下のIDを使用してアドレス指定されます。例えば、_GPB0_ のモードを設定するには _pinMode(8, ...)_ を使用します。**注意** MCP23008とMCP23S08は _GPAx_ ピンのみを持ちます。

| MCP23x17 Pin # | Pin Name | Pin ID |
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

### 1. XIAO用IOエキスパンダーが応答しないのはなぜですか？

**回答**: XIAOモジュールが拡張ボードに正しく接続されていることを確認してください。また、必要なライブラリがインストールされ、Arduino IDEで正しいボードとポートが選択されているかを確認してください。

### 2. XIAO用IOエキスパンダーを他のマイクロコントローラーで使用できますか？

**回答**: はい、IOエキスパンダーは主にXIAOモジュール用に設計されていますが、I2C通信をサポートする他のマイクロコントローラーでも使用できます。コードと接続を適宜調整する必要があるかもしれません。

### 3. XIAO用IOエキスパンダーのMCP23017チップのI2Cアドレスを変更するにはどうすればよいですか？

**回答**: デフォルトのI2Cアドレスは0x21に設定されています。0x20に変更したい場合は、ボード上に「J2」というラベルの付いたジャンパーがあります。アドレスを変更するには、J2ジャンパーをはんだ付けする必要があります。

### 4. IOピンでノイズや不安定な動作が発生しています。原因は何でしょうか？

**回答**: 接続が確実で、干渉がないことを確認してください。プルアップまたはプルダウン抵抗を使用することで、入力ピンを安定化できます。また、電源が安定しており、接続されたすべてのデバイスに必要な電流を供給できることを確認してください。

## リソース

- **[ZIP]** [Eagleファイル](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip)
- **[PDF]** [データシート - MCP23017](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
