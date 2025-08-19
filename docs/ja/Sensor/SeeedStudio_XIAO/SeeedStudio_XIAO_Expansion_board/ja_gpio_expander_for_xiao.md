---
description: リッチコンテンツを含むドキュメントページを作成します。
title: XIAO用IOエキスパンダ
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/io_expander_for_xiao
last_update:
  date: 05/15/2025
  author: Stephen Lo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/GPIO-Expander-for-XIAO-p-5795.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

XIAO用IOエキスパンダは、Seeed Studio XIAOシリーズの機能を拡張するために設計された最先端の拡張ボードです。MCP23017チップを搭載し、16個の追加IOピンを提供することで、プロジェクトの制約を取り除きます。趣味でより多くのコンポーネントを試したい方や、信頼性の高いIO拡張ソリューションを求めるプロフェッショナルに最適です。このボードはXIAOシリーズと互換性があり、シームレスな統合を実現し、開発プロセスをよりスムーズかつ効率的にします。

## 特徴

- XIAOとのシームレスな統合: Seeed Studio XIAOシリーズと完全に連携するよう設計されています。
- 16個の追加IOピン: MCP23017により、プロジェクト用に16個の追加IOピンを提供します。
- アドレス設定可能なI2Cインターフェース: デフォルトのI2Cアドレスは0x21ですが、0x20に設定変更可能です。
- 頑丈な設計: 高品質な素材で作られており、長寿命と信頼性を確保します。

## 仕様

- チップ: MCP23017
- IOピン数: 16
- 通信プロトコル: I2C
- デフォルトI2Cアドレス: 0x21（0x20に設定変更可能）
- 動作電圧: 3.3V
- 寸法: 21mm x 17mm

## 応用例

XIAO用IOエキスパンダは多用途で、以下を含むさまざまなアプリケーションに使用できます：

- ホームオートメーションシステム: スマートホーム設定で制御可能なデバイス数を拡張。
- ロボティクス: センサー、モーター、その他のコンポーネントを追加し、IOピン不足を解消。
- ゲームコンソール: ボタンやスイッチが豊富なカスタムコントローラーや周辺機器を設計。
- 産業用制御システム: 産業設定でより多くのデバイスやセンサーを管理。
- 教育プロジェクト: マイコンや電子工学を学ぶ際に、IOピン数の制限を気にせずに学習可能。

## ハードウェア概要

このセクションでは、XIAO IOエキスパンダボード上の各コンポーネントとインターフェースについて詳しく説明します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png" alt="pir" width={800} height="auto" /></p>

### 0. 標準XIAOパッド

これらはXIAOマイクロコントローラーを接続するための標準パッドです。

### 1. J1パッド

J1パッドは、MCP23017のRST、INTB、INTAピンをXIAOのD6、D1、D0ピンに接続するかどうかを、はんだ付けで選択できます。上から順にRST、INTB、INTAです。

デフォルトでは、拡張ボードを使用する際にエリア8の追加出力パッドが有効になります。これを無効にしたい場合は、J1エリアの隣接する2つのパッドをナイフで切断する必要があります。

### 2. MCP23017チップ

これは主要なI/Oエキスパンダチップで、16個の追加IOを提供します。

### 3. J2パッド

このパッドはI2Cアドレスを選択するためのものです。デフォルトのアドレスは0x21です。このパッドをはんだ付けすると、アドレスを0x20に変更できます。

### 4. MCP23017出力ピン

これらはMCP23017チップからの出力ピンです。各ピンの定義はボードの裏面に記載されています。PA0からPB7までの範囲で、合計16個のIOを提供します。

### 5. Groveパッド

Groveモジュールを接続したい場合は、提供されているGroveソケットをはんだ付けできます。このGroveインターフェースはI2Cバスに接続されています。ここでIICピンを使用する場合、エリア4の拡張IOピンは使用できなくなります。

### 6. VCCピン

これは他のコンポーネントに電力を供給するために使用できる出力ピンです。

### 7. GNDピン

これは他のコンポーネントを接地するために使用できる出力ピンです。

### 8. 追加出力パッド

これらはGND、INTB、INTA、RSTを含む追加の出力パッドです。これらのピンを他の場所で使用するためにはんだ付けすることができます。

## はじめに

XIAO用IOエクスパンダーのクイックスタートガイドへようこそ。このガイドでは、新しいIOエクスパンダーボードをXIAO RP2040メインコントローラーと組み合わせてセットアップし、使用を開始する方法を説明します。

### ハードウェアの準備

この拡張ボードを使用する主な方法は3つあります。

**モード1: SMD**

XIAOのピンが未ハンダ付けの場合、直接SMD方式を選択してXIAOと拡張ボードをPCBボードにハンダ付けし、GPIO拡張機能を使用することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg" alt="pir" width={800} height="auto" /></p>

:::note
写真に示されているPCBは展示用であり、この記事の時点では販売されていません。
:::

**モード2: XIAOが拡張ボードにピン列を介して直接接続**

この方法では、GPIO拡張ボードに接続するために、接続ワイヤを直接ハンダ付けすることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg" alt="pir" width={800} height="auto" /></p>

**モード3: XIAOが拡張ボードに長いピン列を介して接続し、拡張ボードがピン列をハンダ付けして拡張**

この接続方法では、DuPontケーブルをGPIO拡張ボードに自由に取り付けることができます。アプリケーションに便利な配線が可能です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg" alt="pir" width={800} height="auto" /></p>

ハンダ付けが完了したら、拡張ボードをXIAO RP2040メインコントローラーに接続する準備が整います。

XIAO RP2040をプログラミングするには、TYPE-C USBデータケーブルが必要です。一端をXIAO RP2040に、もう一端をコンピューターに接続してください。XIAO RP2040のプログラミングに関する詳細なガイドについては、こちらの[Wiki](https://wiki.seeedstudio.com/ja/XIAO-RP2040/)をご参照ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg" alt="pir" width={600} height="auto" /></p>

### ソフトウェアの準備

ボードをプログラミングする前に、XIAO用の特定のライブラリが必要です。MCP23017ライブラリをこの[GitHubリンク](https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library)からダウンロードしてください。ダウンロード後、プログラミング環境にライブラリをインストールしてください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## デモ: IO出力の高低レベル

Arduino IDEで新しいスケッチを開き、以下のサンプルコードをコピーしてください:

```cpp
#include <Adafruit_MCP23X17.h>

Adafruit_MCP23X17 mcp;

void setup() {
    Serial.begin(9600);
    Serial.println("MCP23xxx ブリンクテスト!");
    if (!mcp.begin_I2C()) {
        Serial.println("エラー.");
        while (1);
    }

    Serial.println("ループ中...");

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

上記のコードをXIAOにアップロードしてください。コードが正常にアップロードされると、PB7ピンを除くすべてのピンが3.3Vの高電圧になることが確認できます。

:::caution
この拡張ボードはデジタル入力と出力のみ使用可能であり、PWMやアナログ入力および出力機能は使用できません。
:::

### ピンアドレス指定

単一ピン操作を使用する場合（例: _pinMode(pinId, dir)_、_digitalRead(pinId)_、_digitalWrite(pinId, val)_）、以下のIDを使用してピンを指定します。例えば、_GPB0_のモードを設定する場合は、_pinMode(8, ...)_を使用します。**注意** MCP23008およびMCP23S08は_GPAx_ピンのみを持っています。

| MCP23x17 ピン番号 | ピン名 | ピンID |
| :---------------: | :----: | :----: |
|       21          |  GPA0  |   0    |
|       22          |  GPA1  |   1    |
|       23          |  GPA2  |   2    |
|       24          |  GPA3  |   3    |
|       25          |  GPA4  |   4    |
|       26          |  GPA5  |   5    |
|       27          |  GPA6  |   6    |
|       28          |  GPA7  |   7    |
|       1           |  GPB0  |   8    |
|       2           |  GPB1  |   9    |
|       3           |  GPB2  |   10   |
|       4           |  GPB3  |   11   |
|       5           |  GPB4  |   12   |
|       6           |  GPB5  |   13   |
|       7           |  GPB6  |   14   |
|       8           |  GPB7  |   15   |

## FAQ

### 1. XIAO用IOエクスパンダが応答しないのはなぜですか？

**回答**: XIAOモジュールが拡張ボードに正しく接続されていることを確認してください。また、必要なライブラリがインストールされていること、Arduino IDEで正しいボードとポートが選択されていることを確認してください。

### 2. XIAO用IOエクスパンダは他のマイクロコントローラーでも使用できますか？

**回答**: はい、IOエクスパンダは主にXIAOモジュール用に設計されていますが、I2C通信をサポートする他のマイクロコントローラーでも使用可能です。コードや接続を調整する必要がある場合があります。

### 3. IOエクスパンダのMCP23017チップのI2Cアドレスを変更するにはどうすればよいですか？

**回答**: デフォルトのI2Cアドレスは0x21に設定されています。0x20に変更したい場合は、ボード上の「J2」とラベル付けされたジャンパーを確認してください。このジャンパーをハンダ付けすることでアドレスを変更できます。

### 4. IOピンでノイズや不安定な動作が発生する原因は何ですか？

**回答**: 接続が確実であり、干渉がないことを確認してください。プルアップまたはプルダウン抵抗を使用することで入力ピンを安定させることができます。また、電源が安定しており、接続されたすべてのデバイスに必要な電流を供給できることを確認してください。

## リソース

- **[ZIP]** [Eagleファイル](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip)
- **[PDF]** [データシート - MCP23017](https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>