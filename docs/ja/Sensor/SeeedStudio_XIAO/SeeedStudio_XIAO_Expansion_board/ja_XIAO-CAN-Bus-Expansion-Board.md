---
description: XIAO CAN Bus拡張ボードの使用開始
title: XIAO CAN Bus拡張ボード
keywords:
- Grove
- can bus
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao-can-bus-expansion
last_update:
  date: 6/6/2023
  author: Stephen Lo
---

# XIAO CAN Bus拡張ボード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

<br />

XIAO CAN Bus拡張ボードは、Seeed Studio XIAO開発ボードと連携するよう特別に設計されており、プロジェクトにCAN busコミュニケーション機能を簡単かつ便利に追加する方法を提供します。CAN bus（Controller Area Network）は、自動車、産業、その他の組み込みシステムで広く使用されている通信プロトコルで、異なるノード間での信頼性が高く堅牢なデータ交換を可能にします。

拡張ボード上のMCP2515コントローラーとSN65HVD230トランシーバーチップの統合により、CAN busでのシームレスで効率的な通信が保証されます。MCP2515コントローラーはプロトコル管理、メッセージフィルタリング、エラーハンドリングを処理し、SN65HVD230トランシーバーはコントローラーからのデジタル信号をCAN bus通信に必要な差動信号に変換します。

XIAO CAN Bus拡張ボードを使用することで、Seeed Studio XIAO開発ボードとその広範なエコシステムの力を活用して、CAN bus通信を必要とするプロジェクトを作成できます。自動車アプリケーション、産業制御システム、ロボティクスプロジェクト、IoTデバイスのいずれに取り組んでいても、この拡張ボードは設計にCAN bus機能を統合するための信頼性が高くコンパクトなソリューションを提供します。

拡張ボードはユーザーフレンドリーなターミナル接続を特徴としており、CANHとCANLラインをCAN busネットワークに簡単に接続できます。ボードのコンパクトな設計により、さまざまなプロジェクトエンクロージャとの互換性が確保され、既存のセットアップへのシームレスな統合が促進されます。

XIAO CAN Bus拡張ボードを活用することで、CAN busプロトコルの堅牢性、信頼性、スケーラビリティを活用し、プロジェクトでの効率的なデータ交換、システム制御、相互接続を可能にできます。

## 概要

### 特徴

- 互換性：Seeed Studio XIAO開発ボードとシームレスに動作するよう設計されています。
- MCP2515コントローラー：オンボードのMCP2515チップがCAN bus通信の信頼性の高い制御と処理を提供します。
- SN65HVD230トランシーバー：統合されたSN65HVD230チップが正確な信号変換とCAN busでの堅牢な通信を保証します。
- ターミナル接続：CANHとCANLラインは3ピンターミナルを通じて便利にアクセス可能で、CAN busへの簡単な接続を可能にします。
- コンパクト設計：拡張ボードはコンパクトなフォームファクターで設計されており、さまざまなアプリケーションに適しています。

### 仕様

- 互換性：Seeed Studio XIAO開発ボード。
- 通信インターフェース：CAN bus（Controller Area Network）。
- CANトランシーバー：SN65HVD230。
- CANコントローラー：MCP2515。
- ターミナル接続：CANHとCANLライン用の2ピンターミナル。

### アプリケーション

XIAO CAN Bus拡張ボードは、CAN bus通信を必要とするさまざまなプロジェクトで活用できます。以下は、インスピレーションを与えるいくつかのアプリケーションアイデアです：

- 自動車プロジェクト：拡張ボードをXIAOに接続し、車両診断やデータロギングなど、CAN bus通信を必要とする自動車アプリケーションを構築します。
- 産業制御システム：CAN bus機能を活用して産業デバイスやシステムとインターフェースし、効率的なデータ交換と制御を可能にします。
- ロボティクス：拡張ボードをロボティクスプロジェクトに組み込み、異なるロボットモジュールとコンポーネント間の通信を可能にします。
- IoTアプリケーション：拡張ボードをIoTデバイスと統合し、CAN busプロトコルでの通信とデータ交換を促進します。

詳細な使用方法とコードサンプルについては、XIAO CAN Bus拡張ボードのデータシートと例を参照してください。

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/hw.jpg" alt="pir" width={500} height="auto" /></p>

1. GND
2. CAN-H
3. CAN-L
4. RX/TX用LEDインジケータ
5. SN65NVD230
6. MCP2515

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/3.png" alt="pir" width={500} height="auto" /></p>

XIAO CAN BUS拡張ボードは、ボードの裏面にパッドP1があり、ショートすることでデバイスに終端抵抗を追加します。一部のユーザーの通信デバイスにはすでに終端抵抗が付いている可能性を考慮して、XIAO CAN-BUSはデフォルトでP1をショートしていません。CAN通信でメッセージの送受信ができない場合は、P1パッドをショートして120オームの終端抵抗を得ることを試してください。

## Arduinoライブラリ概要

[MCP2515ボード用のArduinoライブラリ](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515)を提供しています。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

ライブラリには以下を含む複数のサンプルが含まれています：

- ***OBDII-PIDs*** - OBD-IIインターフェースからデータを取得
- ***send*** - CANバスにフレームを送信
- ***recv*** - CANバスからフレームを受信
- ***set_mask_filter_recv*** - マスクとフィルタ設定でCANバスからフレームを受信

### 1. ボーレートの設定

この関数はCAN Busシステムのボーレートを初期化するために使用されます。

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

### 2. 受信マスクとフィルターの設定

コントローラーチップには2つの受信マスクレジスタと5つのフィルターレジスタがあり、これらを使用して対象デバイスからのデータ受信を確実にすることができます。これらのレジスタは、多くのノードを持つ大規模ネットワークで特に有用です。これらのマスクとフィルターレジスタを活用できる2つの関数を提供しています。

**マスク:**

```c
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**フィルタ:**

```c
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** は使用するレジスタを表します。マスクには0または1を、フィルタには0から5を指定できます。
- **ext** はフレームのステータスを表します。0は標準フレーム用のマスクまたはフィルタを意味します。1は拡張フレーム用を意味します。
- **ulData** はマスクまたはフィルタの内容を表します。

### 3. 受信チェック

MCP2515コントローラチップは、ポーリングモードまたは割り込みモードのいずれかで動作する機能を持っています。ポーリングモードでは、ソフトウェアが定期的に受信フレームをチェックします。割り込みモードでは、追加のピンを使用してフレームが受信されたか送信が完了したかを通知できます。これにより、プロセッサが着信データを常にチェックする必要がないため、リソースをより効率的に使用できます。

この関数は、受信バッファで待機している受信フレームがあるかどうかをチェックするために使用されます。ある場合、関数はtrueを返し、そうでなければfalseを返します。この関数をループ内で使用して、受信フレームを継続的にチェックできます。

```c
INT8U MCP_CAN::checkReceive(void);
```

### 4. CAN IDを取得する

以下の関数を使用して、「送信」ノードから受信したデータの長さを取得できます。

```c
INT32U MCP_CAN::getCanId(void)
```

### 5. フレームを送信する

```c
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

この関数はCANバス上にデータを送信するために使用されます。パラメータは以下の通りです：

- **id** - CANフレームのID。
- **ext** - フレームのステータスを表すブール値。'0'は標準フレームを意味します。'1'は拡張フレームを意味します。
- **len** - フレームの長さ。
- **data_buf** - メッセージの内容。

例えば、'send'の例では、以下のようになります：

```c
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.
```

### 6. フレームを受信します

次の関数は 'receive' ノードでデータを受信するために使用されます：

```c
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

マスクとフィルターが設定された条件下では、この関数はマスクとフィルターの要件を満たすフレームのみを取得できます。

- **len** はデータ長を表します。
- **buf** はデータを格納する場所です。

## はじめに

#### ハードウェア

この製品にはXIAOモジュールは含まれていないため、別途XIAOモジュールを購入する必要があります。この例では、デモンストレーション用にXIAO ESP32C3を使用していますが、他のバージョンのXIAOモジュールでも同様に動作します。ハードウェア接続は簡単で、XIAOモジュールを拡張ボードに挿入するだけです。

XIAOへの接続については、以下の図を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/connect.jpg" alt="pir" width={500} height="auto" /></p>

#### ソフトウェア

- **ステップ 1.** GithubからCAN Bus Library](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515)をダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** ライブラリを正しくダウンロードしてインストールした後、examplesフォルダにsend.inoという名前のサンプルプログラムがあります。このプログラムはD7Sモジュール用に設計されています。

```cpp
#include <mcp_can.h>
#include <SPI.h>

/* Please modify SPI_CS_PIN to adapt to different baords.

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

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // below code need for OBD-II GPS Dev Kit Atemga32U4 version
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // below code need for OBD-II GPS Dev Kit RP2040 version
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // init can bus : baudrate = 500k
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
    delay(100);                       // send data per 100ms
}

// END FILE
```

- **ステップ4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ5.** コードのアップロードが成功すると、RXとTXのLEDが点灯し、CANバスがアクティブにデータを送信していることを示します。CANバスが他のデバイスに接続されている場合、これらのLEDは常時点灯ではなく点滅します。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## トラブルシューティング

### Q1: XIAO CAN Bus拡張ボードがサポートする最大ボーレートは何ですか？

拡張ボード上のMCP2515コントローラーがサポートする最大ボーレートは1 Mbpsです。CANバスネットワークのボーレート設定がこの制限と互換性があることを確認してください。

### Q2: 同じCANバスネットワークで複数のXIAO CAN Bus拡張ボードを使用できますか？

はい、同じCANバスネットワークで複数の拡張ボードを使用できます。各拡張ボードには固有のノードIDを割り当てて、適切な通信を確保し、バス上での競合を回避する必要があります。

### Q3: XIAO CAN Bus拡張ボードを他のマイクロコントローラーや開発ボードで使用できますか？

XIAO CAN Bus拡張ボードは、Seeed Studio XIAO開発ボードと連携するように特別に設計されています。ただし、適切なピンマッピングと設定により、必要なCANバス通信プロトコルをサポートする他のマイクロコントローラーや開発ボードでも使用できる可能性があります。

### Q4: CANバス接続の最大ケーブル長に制限はありますか？

CANバス接続の最大ケーブル長は、ボーレート、ケーブル品質、電磁干渉などの要因によって決まります。一般的に、低いボーレートでは、より長いケーブル長（数百メートルまで）をサポートできます。ただし、高いボーレートでは、信頼性のある通信を維持するために、ケーブル長を短く（数メートル以内）保つことをお勧めします。

### Q5: CANバス通信の問題をトラブルシューティングするにはどうすればよいですか？

CANバス通信で問題が発生した場合は、以下の手順でトラブルシューティングを行うことができます：

- CANバスネットワークの物理的接続を確認し、正しい配線と終端を確保する。
- ボーレート設定を確認し、CANバスに接続されているすべてのデバイスで一致していることを確認する。
- CANバスアナライザーまたはターミナルソフトウェアを使用してCANバストラフィックを監視し、送信されたメッセージのエラーや問題を特定する。
- MCP2515コントローラーの適切な初期化と設定について、プログラムコードを再確認する。
- XIAO開発ボードとCANバスネットワークへの電源供給が安定しており、指定された電圧範囲内にあることを確認する。
- このFAQセクションでカバーされていない他の質問や問題がある場合は、お気軽に技術サポートチームにお問い合わせください。

## リソース

- **[ZIP]** [XIAO CAN Bus 拡張ボード SCH&PCB](https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.zip)
- **[PDF]** [データシート - MCP2515](https://files.seeedstudio.com/wiki/xiao_can_bus_board/MCP2515-Stand-Alone-CAN-Controller-with-SPI-200018-708845.pdf)
- **[PDF]** [データシート - SN65HVD230](https://files.seeedstudio.com/wiki/xiao_can_bus_board/20001667G-1115479.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
