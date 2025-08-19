---
description: XIAO CAN Bus 拡張ボードの使い方
title: XIAO CAN Bus 拡張ボード
keywords:
- Grove
- can bus
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao-can-bus-expansion
last_update:
  date: 05/15/2025
  author: Stephen Lo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO CAN Bus 拡張ボード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

XIAO CAN Bus 拡張ボードは、Seeed Studio XIAO 開発ボードと連携して動作するように特別に設計されており、プロジェクトに簡単かつ便利に CAN バス通信機能を追加することができます。CAN バス（Controller Area Network）は、自動車、産業、その他の組み込みシステムで広く使用されている通信プロトコルであり、異なるノード間で信頼性が高く堅牢なデータ交換を可能にします。

拡張ボードに統合された MCP2515 コントローラーと SN65HVD230 トランシーバーチップにより、CAN バス上でのシームレスで効率的な通信が保証されます。MCP2515 コントローラーはプロトコル管理、メッセージフィルタリング、エラー処理を担当し、SN65HVD230 トランシーバーはコントローラーからのデジタル信号を CAN バス通信に必要な差動信号に変換します。

XIAO CAN Bus 拡張ボードを使用することで、Seeed Studio XIAO 開発ボードとその広範なエコシステムの力を活用し、CAN バス通信を必要とするプロジェクトを作成できます。自動車アプリケーション、産業用制御システム、ロボットプロジェクト、または IoT デバイスに取り組んでいる場合でも、この拡張ボードは設計に CAN バス機能を統合するための信頼性が高くコンパクトなソリューションを提供します。

拡張ボードには使いやすい端子接続が備わっており、CANH および CANL ラインを CAN バスネットワークに簡単に接続できます。ボードのコンパクトな設計により、さまざまなプロジェクトエンクロージャーとの互換性が確保され、既存のセットアップにシームレスに統合できます。

XIAO CAN Bus 拡張ボードを利用することで、CAN バスプロトコルの堅牢性、信頼性、スケーラビリティを活用し、プロジェクトで効率的なデータ交換、システム制御、および相互接続を実現できます。

## 概要

### 特徴

- **互換性**: Seeed Studio XIAO 開発ボードとシームレスに動作するように設計されています。
- **MCP2515 コントローラー**: オンボードの MCP2515 チップが CAN バス通信の信頼性の高い制御と処理を提供します。
- **SN65HVD230 トランシーバー**: 統合された SN65HVD230 チップが正確な信号変換と堅牢な CAN バス通信を保証します。
- **端子接続**: CANH および CANL ラインは 3 ピン端子を介して簡単にアクセスでき、CAN バスへの接続が容易です。
- **コンパクト設計**: 拡張ボードはコンパクトなフォームファクターで設計されており、さまざまなアプリケーションに適しています。

### 仕様

- **互換性**: Seeed Studio XIAO 開発ボード
- **通信インターフェース**: CAN バス（Controller Area Network）
- **CAN トランシーバー**: SN65HVD230
- **CAN コントローラー**: MCP2515
- **端子接続**: CANH および CANL ライン用の 2 ピン端子

### 応用例

XIAO CAN Bus 拡張ボードは、CAN バス通信を必要とするさまざまなプロジェクトで利用できます。以下は、インスピレーションを得るためのいくつかの応用例です：

- **自動車プロジェクト**: 拡張ボードを XIAO に接続し、車両診断やデータロギングなど、CAN バス通信を必要とする自動車アプリケーションを構築します。
- **産業用制御システム**: CAN バス機能を利用して産業用デバイスやシステムとインターフェースし、効率的なデータ交換と制御を実現します。
- **ロボット工学**: 拡張ボードをロボットプロジェクトに組み込み、異なるロボットモジュールやコンポーネント間の通信を可能にします。
- **IoT アプリケーション**: 拡張ボードを IoT デバイスと統合し、CAN バスプロトコルを介した通信とデータ交換を促進します。

詳細な使用方法やコードサンプルについては、XIAO CAN Bus 拡張ボードのデータシートと例をご参照ください。

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/hw.jpg" alt="pir" width={500} height="auto" /></p>

1. GND  
2. CAN-H  
3. CAN-L  
4. RX/TX用LEDインジケータ  
5. SN65NVD230  
6. MCP2515  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/3.png" alt="pir" width={500} height="auto" /></p>

XIAO CAN BUS拡張ボードには、基板の裏面にP1というパッドがあります。このパッドをショートさせると、デバイスに終端抵抗が追加されます。一部のユーザーの通信デバイスにはすでに終端抵抗がある可能性があるため、XIAO CAN-BUSではデフォルトでP1をショートしていません。CAN通信でメッセージの送受信ができない場合は、P1パッドをショートさせて120オームの終端抵抗を追加してみてください。

## Arduinoライブラリ概要

[MCP2515ボード用のArduinoライブラリ](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515)を提供しています。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

このライブラリには以下のような例が含まれています：

- ***OBDII-PIDs*** - OBD-IIインターフェースからデータを取得  
- ***send*** - CANバスにフレームを送信  
- ***recv*** - CANバスからフレームを受信  
- ***set_mask_filter_recv*** - マスクとフィルタ設定を使用してCANバスからフレームを受信  

### 1. ボーレートの設定

この関数はCANバスシステムのボーレートを初期化するために使用されます。

利用可能なボーレートは以下の通りです：

```cpp
#define CAN_5KBPS    1
#define CAN_10KBPS   2
#define CAN_20KBPS   3
#define CAN_25KBPS   4
#define CAN_31K25BPS 5
#define CAN_33KBPS   6
#define CAN_40KBPS   7
#define CAN_50KBPS   8
#define CAN_80KBPS   9
#define CAN_83K3BPS  10
#define CAN_95KBPS   11
#define CAN_100KBPS  12
#define CAN_125KBPS  13
#define CAN_200KBPS  14
#define CAN_250KBPS  15
#define CAN_500KBPS  16
#define CAN_666kbps  17
#define CAN_1000KBPS 18
```

### 2. 受信マスクとフィルタの設定

コントローラチップには2つの受信マスクレジスタと5つのフィルタレジスタがあり、ターゲットデバイスからデータを受信することを保証するために使用できます。これらのレジスタは、多くのノードを持つ大規模ネットワークで特に有用です。これらのマスクとフィルタレジスタを利用するための2つの関数を提供しています。

**マスク:**

```c
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**フィルタ:**

```c
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** は使用するレジスタを表します。マスクには0または1、フィルタには0から5を指定できます。  
- **ext** はフレームの状態を表します。0は標準フレーム用のマスクまたはフィルタ、1は拡張フレーム用を意味します。  
- **ulData** はマスクまたはフィルタの内容を表します。  

### 3. 受信確認

MCP2515コントローラチップは、ポーリングモードまたは割り込みモードのいずれかで動作できます。ポーリングモードでは、ソフトウェアが定期的に受信フレームをチェックします。割り込みモードでは、追加のピンを使用してフレームの受信や送信完了を通知できます。これにより、プロセッサが常にデータをチェックする必要がなくなり、リソースの効率的な使用が可能になります。

この関数は、受信バッファに待機中のフレームがあるかどうかを確認するために使用されます。フレームがある場合はtrueを返し、ない場合はfalseを返します。この関数をループ内で使用して、受信フレームを継続的にチェックできます。

```c
INT8U MCP_CAN::checkReceive(void);
```

### 4. CAN IDの取得

以下の関数を使用して、"送信"ノードから受信したデータの長さを取得できます。

```c
INT32U MCP_CAN::getCanId(void)
```

### 5. フレームの送信

```c
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

この関数は、CANバスにデータを送信するために使用されます。パラメータは以下の通りです：

- **id** - CANフレームのID。  
- **ext** - フレームの状態を表すブール値。'0'は標準フレーム、'1'は拡張フレームを意味します。  
- **len** - フレームの長さ。  
- **data_buf** - メッセージの内容。  

例えば、'send'の例では以下のようになります：

```c
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); // メッセージ'stmp'をバスに送信し、他のデバイスにこれは0x00からの標準フレームであることを通知します。
```

### 6. フレームの受信

以下の関数は、'受信'ノードでデータを受信するために使用されます：

```c
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

マスクとフィルタが設定されている場合、この関数はマスクとフィルタの要件を満たすフレームのみを取得できます。

- **len** はデータの長さを表します。  
- **buf** はデータを格納する場所です。  

## はじめに

#### ハードウェア

この製品には XIAO モジュールが含まれていないため、別途 XIAO モジュールを購入する必要があります。この例では XIAO ESP32C3 を使用して説明しますが、他のバージョンの XIAO モジュールでも同様に動作します。ハードウェアの接続は非常に簡単で、XIAO モジュールを拡張ボードに挿入するだけです。

XIAO への接続については、以下の図を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/connect.jpg" alt="pir" width={500} height="auto" /></p>

#### ソフトウェア

- **ステップ 1.** [CAN Bus Library](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515) をGithubからダウンロードしてください。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino用のライブラリをインストールしてください。

- **ステップ 3.** ライブラリを正しくダウンロードしてインストールした後、examplesフォルダ内にあるsend.inoという名前のサンプルプログラムを見つけることができます。このプログラムはD7Sモジュール用に設計されています。

```cpp
#include <mcp_can.h>
#include <SPI.h>

/* SPI_CS_PINを変更して、異なるボードに対応してください。

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9
*/

#define SPI_CS_PIN  D7

MCP_CAN CAN(SPI_CS_PIN);                                    // CSピンを設定

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // 以下のコードはOBD-II GPS Dev Kit Atemga32U4バージョンで必要です
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // 以下のコードはOBD-II GPS Dev Kit RP2040バージョンで必要です
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // CANバスを初期化: ボーレート = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 100msごとにデータを送信
}

// END FILE
```

- **ステップ 4.** デモをアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** コードのアップロードが成功すると、RXとTXのLEDが点灯し、CANバスがデータをアクティブに送信していることを示します。CANバスが他のデバイスに接続されている場合、これらのLEDは点灯し続けるのではなく、点滅します。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## トラブルシューティング

### Q1: XIAO CAN Bus Expansion Boardがサポートする最大ボーレートは何ですか？

拡張ボード上のMCP2515コントローラーがサポートする最大ボーレートは1 Mbpsです。CANバスネットワークのボーレート設定がこの制限に適合していることを確認してください。

### Q2: 同じCANバスネットワークで複数のXIAO CAN Bus Expansion Boardを使用できますか？

はい、同じCANバスネットワークで複数の拡張ボードを使用できます。各拡張ボードには固有のノードIDを割り当てて、適切な通信を確保し、バス上の競合を回避してください。

### Q3: XIAO CAN Bus Expansion Boardを他のマイクロコントローラーや開発ボードと使用できますか？

XIAO CAN Bus Expansion BoardはSeeed Studio XIAO開発ボードと連携するように設計されています。ただし、適切なピンマッピングと設定を行えば、必要なCANバス通信プロトコルをサポートする他のマイクロコントローラーや開発ボードと使用することも可能です。

### Q4: CANバス接続の最大ケーブル長に制限はありますか？

CANバス接続の最大ケーブル長は、ボーレート、ケーブル品質、電磁干渉などの要因によって異なります。一般的に、低いボーレートでは数百メートルまでの長いケーブル長をサポートできます。ただし、高いボーレートの場合、信頼性の高い通信を維持するためにケーブル長を数メートル以内に抑えることを推奨します。

### Q5: CANバス通信の問題をどのようにトラブルシューティングできますか？

CANバス通信に問題が発生した場合、以下の手順でトラブルシューティングを行うことができます：

- CANバスネットワークの物理的な接続を確認し、配線と終端が正しいことを確認してください。
- ボーレート設定を確認し、CANバスに接続されているすべてのデバイスで一致していることを確認してください。
- CANバスアナライザーやターミナルソフトウェアを使用してCANバスのトラフィックを監視し、送信メッセージのエラーや問題を特定してください。
- MCP2515コントローラーの初期化と設定が正しいか、プログラムコードを再確認してください。
- XIAO開発ボードおよびCANバスネットワークへの電源供給が安定しており、指定された電圧範囲内であることを確認してください。
- このFAQセクションでカバーされていないその他の質問や問題がある場合は、技術サポートチームにお問い合わせください。

## リソース

- **[ZIP]** [XIAO CAN Bus 拡張ボード SCH&PCB](https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.zip)
- **[PDF]** [データシート - MCP2515](https://files.seeedstudio.com/wiki/xiao_can_bus_board/MCP2515-Stand-Alone-CAN-Controller-with-SPI-200018-708845.pdf)
- **[PDF]** [データシート - SN65HVD230](https://files.seeedstudio.com/wiki/xiao_can_bus_board/20001667G-1115479.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>