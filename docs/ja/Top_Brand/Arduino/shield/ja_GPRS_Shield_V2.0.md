---
description: GPRS Shield V2.0
title: GPRS Shield V2.0
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/GPRS_Shield_V2.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: GPRS Shield V2.0
category: 廃止
bzurl: https://www.seeedstudio.com/GPRS-Shield-V2.0-p-1379.html
oldwikiname: GPRS Shield V2.0
prodimagename:
surveyurl: https://www.research.net/r/GPRS_Shield_V2
sku: 113030000
--- -->

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GRPS_SLD.jpg)

GPRSシールドを使用して、ArduinoをGSM/GPRS携帯電話ネットワークに接続しましょう！Arduino/Seeeduinoやその他のメインボードを使用して、簡単なATコマンドを介して電話をかけたり、友人にテキストメッセージを送信したりできます。この新しいバージョンでは、クアッドバンド低消費電力GSM/GPRSモジュールSIM900とコンパクトなPCBアンテナを搭載しています。同時に、インターフェースと基本回路の改善が行われ、より簡潔で信頼性の高いものになっています。また、GPRSシールドとメインボード間の通信には、UARTまたは[SoftwareSerial](https://arduino.cc/en/Reference/SoftwareSerial)の2つの選択肢があります。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/GPRS-Shield-V2.0-p-1379.html)

## バージョン

---
| リビジョン | 説明                                                      | リリース日   |
|------------|-----------------------------------------------------------|--------------|
| v0.9b      | 初回公開リリース（ベータ版）                              | 2011年3月3日 |
| v1.2       | SIM90の電源オン/オフ用ソフトウェアポートを追加             | 2011年12月2日 |
| v1.4       | 電源回路を再設計し、PCBレイアウトを再配置                  | 2012年8月30日 |
| v2.0       | クアッドバンド対応とPCBアンテナの再設計                   | 2013年2月3日 |
| v3.0       | Arduinoソケットを最新のArduino Uno標準に変更              | 2015年3月20日 |

**V2.0と以前のバージョンの違いは何ですか？**

- 外観の変更

  - V2.0は標準的なシールドの形状と保護シェルを採用しています。
  - ダックアンテナはコンパクトなPCBアンテナに置き換えられました。
  - マイクとイヤホンのインターフェースは、V2.0では2-in-1ヘッドセットジャックに置き換えられました。

- 電源回路の変更

  - 元のLDO回路をDC-DC回路に置き換えました。これにより、放熱が低下し、効率が80%以上に向上しました。同時に、V1.0のEXT_PWRジャックは削除されました。V2.0は追加の5VアダプターなしでArduinoから直接電流を引き出すことができます。
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Power_circuit.jpg)

- ソフトスタート回路

  - 新しいバージョンではソフトスタート回路が追加され、シールドがオンになる瞬間の電力ショックを緩和し、予期しないリセット問題を防ぎます。
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/Soft-start_circuit.jpg)

- アンテナの改良

  - SIM900の最大送信電力は30dBm（1W）ですが、V1.0の出力電力はわずか0.4Wでした。この新しいバージョンでは送信電力が29dBm以上（0.8W+）に引き上げられ、より信頼性の高い堅固な信号伝送を提供します。

## 仕様

---
| 項目                    | 値                                                                             |
|-------------------------|--------------------------------------------------------------------------------|
| 対応                    | Arduino UNO/Seeeduinoに直接対応；その他のメインボードはジャンパー経由で対応       |
| 選択可能なインターフェース | UART、ソフトウェアシリアル                                                     |
| クアッドバンド対応       | 850/900/1800/1900MHz                                                          |
| 通信対応                | 標準 - GSM 07.07 & 07.05、および拡張 - SIMCOM ATコマンド                       |
| 動作温度                | -40°C ～ +85°C                                                                |
| プロトコル対応          | 0710 MUXプロトコル、組み込みTCP/UDPプロトコル、FTP/HTTP、FOTA、MMS、組み込みAT |
| SIM900の認証            | CE、IC、FCC、ROHS、PTCRB、GCF、ICASA、REACH、AT&T                              |
| 寸法                    | 68.58 * 53.34mm                                                               |
| 電源供給                | 5Vピン経由で5V、Vinピン経由で6.5～12V                                          |

## 注意事項

---
- SIMカードがアクティブ化されていることを確認してください。
- GPRS ShieldにはESD（静電気放電）対策がありません。乾燥した天候で取り扱う際は特に注意してください。

## ハードウェア概要

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Shild_V2_hardware_overview.jpg)

- GPRS ShieldのUARTの工場出荷時のデフォルト設定は19200 bps 8-N-1です。（ATコマンドを使用して変更可能）
- シリアルポート選択
  - SWserialまたはHWserialの位置にジャンパーを差し込むことで、GPRS Shieldとメインボード間の通信方法を選択できます。SWserialを使用する場合、D7とD8がGPRS ShieldのSIM900によって使用されます。HWserialを使用する場合、D0（RX）とD1（TX）が使用されます。

    ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_serial_port.png)

- D9による電源オン/オフ
  - JPパッドはデフォルトで未ハンダ付けです。ソフトウェアでGPRS Shieldの電源をオン/オフしたい場合はハンダ付けしてください。D9を高レベルに設定すると、ボタンが押されている状態を意味します。JPパッドはISPポートの横にあります。
- SIM900のブレークアウト
  - SIM900のいくつかのピンがISPポートの横にブレークアウトされています。これらにはLINEIN_R、LINEIN_L、ADC、PWM1、PWM2、GPIO1～GPIO6、GND、FW_update（DISP_CLK、DISP_DATA、DISP_D/C、DISP_CS）、RI、DCD、DSR、CTS、VDD_EXT、LDTR、LRTSが含まれます。これらのピンはSIM900から直接出力され、設定はありません。

  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Break.png)

- RTCバッテリーホルダー
  - CR1220バッテリーからSIM900のVRTCに3Vを供給できます。
- 電源
  - 元のLDO回路をDC-DC回路（TD1410）に置き換えました。熱放散が低下し、効率が80%以上に向上しました。同時に、出力は最大4.15V/2Aまで可能です。また、電源入力には以下の2種類があります：
    - 5Vピン：新バージョンではソフトスタート回路が追加され、シールドがオンになる瞬間の電力ショックを緩和し、予期しないリセット問題を防ぎます。詳細な変更点については、関連読書：バージョンを参照してください。
    - Vinピン：入力電圧範囲は6.5V～12Vです。
- アンテナ
  - アンテナコネクタのタイプはIPEXで、SIM900の最大送信電力は30dBm（1W）です。詳細については[アンテナ仕様](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/Antenna_of_GPRS_.pdf)を参照してください。
- LEDステータス説明

| LED | ステータス | 機能 |
|---|---|---|
| 電源オンインジケーター（緑） | オフ | GPRS Shieldの電源がオフ |
|  | オン | GPRS Shieldの電源がオン |
| ステータスインジケーター（赤） | オフ | 電源オフ |
|  | オン | 電源オン |
| ネットインジケーター（緑） | オフ | SIM900が動作していない |
|  | 64msオン/800msオフ | SIM900がネットワークを見つけていない |
|  | 64msオン/3000msオフ | SIM900がネットワークを見つけた |
|  | 64msオン/300msオフ | GPRS通信中 |

## はじめに

---

### ATコマンドで楽しむ

GPRS Shieldを受け取ったら、最初に何をしたいですか？テキストメッセージ（SMS）を送信しますか？それとも誰かに電話をかけますか（ヘッドセットが必要です）？これらすべてを、GPRS ShieldにATコマンドを送ることで実現できます。ATコマンドは、GPRS Shieldが理解する特別な言語です。

ATコマンドは、GPRSモデムに対してそのシリアルインターフェース（UART）を介して送信される簡単なテキストコマンドです。そのため、任意のシリアルターミナルソフトウェアを使用して通信することができます。

#### ハードウェアのインストール

- **アクティブ化されたSIMカードをSIMカードホルダーに挿入する** - SIMカード用の6ピンホルダー。SIM900は1.8ボルトと3.0ボルトのSIMカードの両方をサポートしており、SIMカードの電圧タイプは自動的に検出されます。
  - SIMカードをホルダーに挿入します。
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_SIM.JPG)
  - SIMカードホルダーをロックします。
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_SIM2.JPG)

- **アンテナパッドが正しく固定されていることを確認する**

  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSANT.JPG)

- **通信ポートの設定**
GPRS Shieldは、Arduinoのハードウェアシリアルポートまたはソフトウェアシリアルポートを介して制御できます。ここではデフォルトとしてソフトウェアシリアルポートを使用します。以下のようにジャンパーキャップを挿入して選択してください。
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSserial.JPG)

- **Arduinoに接続する** - GPRS Shieldは、他のよく設計されたシールドと同様にスタッカブルです。

- **Arduinoを電源オンする** - USBケーブルまたはDCジャックでArduinoを電源オンします。接続されると、電源オンインジケーターLEDが点灯します。
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSshieldV2.png)

#### ソフトウェア

ATコマンドを使ってGPRS Shieldを操作して楽しみましょう。

GPRS Shieldには、GSMネットワークを介してデータを送信するために必要なすべてのアクセサリが付属しています。ただし、ArduinoボードとGSM SIMカードは別途必要です。音声通話を行いたい場合は、マイク付きヘッドセットも必要です。

**ステップ1: GPRS Shieldのテストセットアップを作成する**

:::note
ほとんどのATコマンドは**キャリッジリターン**を付けて送信する必要があり、シリアルポートターミナルで「+CR」オプションを選択する必要があります。
:::

ATコマンドを実験するには、GPRS Shieldを電源オンして通信する方法が必要です。以下に説明するArduino Duemilanoveボードを使用するのが最適です。同じ手順は[Seeeduino](https://wiki.seeedstudio.com/ja/Seeeduino_v4.2/)や[Seeeduino Stalker](https://wiki.seeedstudio.com/ja/Seeeduino_Stalker_V3.1/)にも適用されます。

- 前述のハードウェアインストール手順に従ってハードウェアシステムをセットアップします。
- GPRS ShieldのGPRS_TX & GPRS_RXジャンパーがSWSerial位置に取り付けられていることを確認します。これにより、GPRS_TXがD7（RX）に、GPRS_RXがD8（TX）に接続されます。
- Arduino Duemilanove（またはSeeeduino）をUSBケーブルでコンピュータに接続します。
- DuemilanoveボードのATmega328Pマイクロコントローラーには、PCとの通信に使用される1つのUARTしかありません。必要なのは、ATmega328P内でソフトウェアシリアルを使用してデジタルピンD8とD7で第2のシリアルポート（UART）をエミュレートするArduinoスケッチです。すべての通信はソフトウェアシリアルポートと実際のハードウェアシリアルポートを介して行われます。この方法により、コンピュータ（実際のハードウェアUARTに接続）からのすべてのデータがGPRS Shield（ソフトウェアUARTに接続）にルーティングされます。これにより、ATコマンドを発行してGPRS Shieldを制御できるようになります。このスキームを示すブロック図は以下の通りです。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_aurduino_uart.jpg)

このようなプログラムを開発するには、SoftwareSerialライブラリを使用する必要があります。以下はデモコードです。

```cpp
//シリアルリレー - ArduinoはコンピュータとGPRS Shieldの間に
//19200 bps 8-N-1のシリアルリンクをパッチします。
//コンピュータはハードウェアUARTに接続されています。
//GPRS ShieldはソフトウェアUARTに接続されています。

#include <SoftwareSerial.h>

SoftwareSerial GPRS(7, 8);
unsigned char buffer[64]; // シリアルポート経由で受信するデータ用のバッファ配列
int count=0;     // バッファ配列のカウンター
void setup()
{
    GPRS.begin(19200);               // GPRSのボーレート
    Serial.begin(19200);             // Arduinoのシリアルポートのボーレート

}

void loop()
{
    if (GPRS.available())              // ソフトウェアシリアルポートからデータが来ている場合 ==> GPRS Shieldからデータが来ている
    {
        while(GPRS.available())          // データを文字配列に読み込む
        {
            buffer[count++]=GPRS.read();     // 配列にデータを書き込む
            if(count == 64)break;
        }
        Serial.write(buffer,count);            // データ送信が終了した場合、バッファをハードウェアシリアルポートに書き込む
        clearBufferArray();              // 配列に保存されたデータをクリアするためにclearBufferArray関数を呼び出す
        count = 0;                       // whileループのカウンターをゼロに設定


    }
    if (Serial.available())            // ハードウェアシリアルポートにデータがある場合 ==> PCまたはノートブックからデータが来ている
    GPRS.write(Serial.read());       // GPRS Shieldに書き込む
}
void clearBufferArray()              // バッファ配列をクリアする関数
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // 配列のすべてのインデックスをNULLでクリア
}
```

- スケッチをArduinoボードにアップロードします。コードのアップロード方法がわからない場合は、[こちらの手順](https://wiki.seeedstudio.com/ja/Upload_Code/)を参照してください。
- シリアルツールがない場合は、[シリアルツール](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/Sscom32E.zip)をダウンロードして起動してください。Arduinoの正しいCOMポートを選択し、**19200** 8-N-1で動作するように設定してから「Open COM」をクリックします。また、AT Command Testerを使用してATコマンドを送信することもできます。興味がある場合は[こちら](https://wiki.seeedstudio.com/ja/AT_Command_Tester_Application/)をクリックしてください。
- 約2秒間電源ボタンを押してSIM900を電源オンします。赤いLEDが点灯し、その隣の緑のLEDが点滅します。シールドがネットワークに正常に接続されると、緑のLEDが3秒ごとに点滅します。
- SIM900がネットワークに接続したことを通知するメッセージがシリアルモニターに表示されるはずです。

```txt
RDY

+CFUN: 1

+CPIN: READY

Call Ready

```

シリアルモニターでメッセージが表示されない場合は、「send new」オプションをクリックして、ATコマンドの末尾にキャリッジリターンを追加してから、ATコマンド「AT+IPR=19200」を送信してSIM900のボーレートを設定してください。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_set_baud_rate.jpg)

**ステップ2: テキストメッセージ（SMS）の送信**

テストセットアップが準備できたので、Arduinoをプログラムする前にいくつかのATコマンドを手動で試してみましょう。まずはSMSを送信してみます。

- ステップ1で説明したセットアップを作成します。
- シリアルターミナルソフトウェアを使用して、**AT+CMGF=1** を送信し、Enterキーを押します。GPRS ShieldはテキストモードとPDU（またはバイナリ）モードの2つのモードでSMSを送信できます。人間が読めるメッセージを送信したいので、テキストモードを選択します。GPRS Shieldは **OK** と応答します。
- 「send new」オプションをクリックして、**AT+CMGS="+18888888888"** を送信します。これにより、GPRS Shieldが新しいメッセージのテキストを受け入れるよう指示されます。数字は指定された電話番号を意味します（番号をターゲット電話の電話番号に置き換えてください）。GPRS Shieldは '_**&gt;'**_ を送信してメッセージを入力するよう促します。ATコマンド内の電話番号は[E.123形式](https://en.wikipedia.org/wiki/E.123)に従う必要があることに注意してください。

- メッセージの入力を開始し、入力が完了したら「send hex」オプションをクリックして、16進数：**1A** を送信します。モデムはメッセージを受け入れ、**OK** と応答します。数秒後、指定した番号の携帯電話にメッセージが届くはずです。「How are you ?」を送信しました。「EXT」をクリックして履歴を確認できます。コマンド履歴は「Set Multi Char」の下にリストされています。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/Send_a_text_message.jpg)

:::note
上記の手順に従ってもターゲット携帯電話でメッセージを受信できない場合は、SMSメッセージセンター番号を設定する必要があるかもしれません。AT+CMGFとAT+CMGSコマンドの間に次のコマンドを送信してください：AT+CSCA="+18888888888"。指定された電話番号をGSMサービスプロバイダーのSMSセンター番号に置き換えてください。メッセージセンター番号は各サービスプロバイダー固有です。GSMサービスプロバイダーのカスタマーケアセンターに電話して番号を尋ねることで取得できます。
:::

**ステップ3: ATコマンドを使用して電話をかける**

- テキスト送信から電話をかける操作に切り替える場合は、SIM900を再起動してください。
- コマンド「ATD18888888888;」（引用符なし）の電話番号をターゲット番号に置き換え、Enterキーを押して送信します。成功すると、以下の画像のように「ATH OK」というメッセージが表示されます。失敗した場合は「No CRRLIER」が表示されます。原因としては、存在しない電話番号やコマンド形式の誤りが考えられます。

**ステップ4: さらに探求する**

ATコマンドの使い方を理解したので、ArduinoをプログラムしてGPRS Shieldを使用してSMSを送信したり、電話をかけたり、GPRS接続を介してデータを送信したりするスケッチを作成する前に、他のコマンドを試してみてください。

これには、ATコマンドの同じシーケンスをシリアルポート経由でGPRS Shieldに送信して、SMS送信、電話発信、またはGPRS接続を介したデータ送信のタスクを実行するスケッチを作成することが含まれます。

[ATコマンドリファレンスマニュアル](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/AT_Commands_v1.11.pdf)を参照してコマンドのシーケンスを確認できます。Arduinoスケッチを開発し、GPRS Shieldが期待通りに動作しない場合は、ATコマンドとそのシーケンスを確認する必要があります。そのためには、開始セクションに添付されているシリアルリレースケッチをATmega328Pに再ロードし、ATコマンドを手動で入力して出力を確認してください。GPRS Shieldから返される応答は、ATコマンドシーケンスのデバッグに役立ちます。

:::note
同じタスクを実行するためのCプログラムも開発され、添付されています：[Softuart relay atmega328p.zip](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Softuart_relay_atmega328p.zip "File:Softuart relay atmega328p.zip")。
:::

プログラムはWindows PC上で開発されました。[AVRStudio4](http://www.atmel.com/dyn/products/tools_card.asp?tool_id=2725)がIDEとして使用され、[WinAVR](http://winavr.sourceforge.net/)がコンパイラとして使用されました。ZIPファイルにはAVRStudio4プロジェクトが含まれています。Cコンパイラ（WinAVR）はIntel Hex（.hex）を生成します。この.hexファイルをArduino IDE外でArduinoボードにアップロードするには、Arduinoボードのブートローダーと通信できるプログラムが必要です。[XLoader](http://xloader.russemotto.com/)は、Windows上で動作し、さまざまなコンパイラによって生成された.hexファイルをArduinoボードにアップロードできるプログラムです。

##### SoftwareSerialライブラリの注意事項

Arduinoでは、配布に含まれているSoftwareSerialライブラリを使用することができます（NewSoftSerialの代わりに）。ただし、ライブラリヘッダー「SoftwareSerial.h」にハードコードされた受信メッセージ用のバッファが64バイトに制限されていることに注意してください：

```
 define _SS_MAX_RX_BUFF 64 // RX buffer size
```

これは、GPRSモジュールがバッファより多くのデータを受信すると、バッファオーバーフローによってデータを失う可能性があることを意味します。たとえば、「AT+CMGR=xx」（xxはメッセージインデックス）を使用してモジュールからSMSを読み取る場合、電話番号や時間などのヘッダー情報が多くのスペースを占めるため、メッセージ部分が表示されない可能性があります。この問題を解決するには、**_SS_MAX_RX_BUFF** を手動でより高い値（ただしメモリをすべて使用しないように適切な値）に変更する必要があります。

[Softwareserialライブラリ](https://arduino.cc/hu/Reference/SoftwareSerial)には以下の制限があります（Arduinoページから引用）。複数のソフトウェアシリアルポートを使用する場合、同時にデータを受信できるのは1つだけです。
これにより、grove serial LCDなどの別のシリアルデバイスを追加しようとすると、コードを慎重に作成しない限り通信エラーが発生する可能性があります。

##### ATコマンドを使用してテキストメッセージを送信または電話番号をダイヤルする方法

この例では、Arduino スケッチを作成して、Arduino のシリアル通信ウィンドウで 't' または 'd' を入力することで、それぞれテキストメッセージを送信するか、音声通話のために電話番号をダイヤルできるようにします。

###### テキストメッセージ送信のための AT コマンド

SIM900 コマンドセットを見ると、テキストメッセージを送信するには、まず SMS フォーマットを設定する必要があることがわかります。これは AT+CMGF コマンドを使用します。

AT+CMGF コマンドには 2 つの値があります：0 または 1。それぞれ "PDU モード" と "テキストモード" を意味します。"テキストモード" では、SMS メッセージは読みやすいテキストとして表現されます。"PDU モード" では、SMS メッセージは 16 進文字でエンコードされたバイナリ文字列として表現されます。この例では "テキストモード" を使用するため、GPRS シールドに送信するコマンドは以下の通りです：

**AT+CMGF=1\r**

SMS フォーマットを設定したので、次にテキストメッセージを送信します。テキストメッセージを送信するには AT+CMGS コマンドを使用します。SIM900 AT コマンドセットによると、CMGS コマンドの形式は以下の通りです：

**AT+CMGS=&lt;da&gt;[,&lt;toda&gt;]&lt;CR&gt;**

ここで、&lt;da&gt; は宛先アドレス（電話番号）、&lt;toda&gt; はオプションの宛先アドレスタイプ、&lt;CR&gt; はキャリッジリターン '\r' 文字を意味します。このコマンドを送信すると、GPRS シールドは '>' 文字を返し、実際のメッセージを入力するよう促します。

:::note
電話番号には国番号を含める必要があります。例えば、米国の電話番号 (555)123-4567 の場合、&lt;da&gt; の値は +15551234567 となります。
:::

###### 音声通話のためのコマンド

SIM900 AT コマンドセットシートによると、音声通話のために番号をダイヤルするコマンドは "ATD+xxxxxxxxxx;" です。"xxxxxxxxxxx" は国番号を含む電話番号を意味します。セミコロンを送信することで音声通話が設定されます。セミコロンを省略すると、データまたはファックス通話が設定されます。

以下に、簡単なテキストメッセージを送信したり、音声通話をダイヤルするための Arduino コードを示します。電話番号 "xxxxxxxxxx" とメッセージ "How are you today?" を自分の値に変更するのを忘れないでください。

###### Arduino コード

```cpp
  #include <SoftwareSerial.h>


  SoftwareSerial gprsSerial(7,8);

  void setup()
  {
    gprsSerial.begin(19200); // GPRS シールドのボーレート
    Serial.begin(19200);   
    delay(500);
  }

  void loop()
  {

    if (Serial.available()) // シリアルデータが入力された場合
     switch(Serial.read()) // 文字を読み取る
     {
       case 't': // 文字が 't' の場合
         SendTextMessage(); // テキストメッセージを送信
         break;
       case 'd': // 文字が 'd' の場合
         DialVoiceCall(); // 電話番号をダイヤル
         break;

     }

    if (gprsSerial.available()){ // シールドから出力がある場合
      Serial.write(gprsSerial.read()); // シールドの出力を表示
    }
  }

  /*
  * 名前: SendTextMessage
  * 説明: テキストメッセージを番号に送信
  */
  void SendTextMessage()
  {
    Serial.println("Sending Text...");
    gprsSerial.print("AT+CMGF=1\r"); // シールドを SMS モードに設定
    delay(100);
    // SMS メッセージを送信、電話番号には国番号を含める必要があります。例: 米国の電話番号 (540) 898-5543 の場合:
    // +15408985543
    gprsSerial.println("AT+CMGS = \"+xxxxxxxxxx\"");
    delay(100);
    gprsSerial.println("How are you today?"); // メッセージの内容
    delay(100);
    gprsSerial.print((char)26);// ctrl+z の ASCII コードは 26（データシートに従って必要）
    delay(100);
    gprsSerial.println();
    Serial.println("Text Sent.");
  }

  /*
  * 名前: DialVoiceCall()
  * 説明: 電話番号を呼び出す/ダイヤルする
  */
  void DialVoiceCall()
  {
    gprsSerial.println("ATD+xxxxxxxxxx;");// 番号をダイヤル、国番号を含める必要あり
    delay(100);
    gprsSerial.println();
  }
```

## FAQ

以下は GPRS Shield に関するよくある質問（FAQ）です。使用前にお読みください：

- なぜ GPRS Shield は Stalker v2.1/2.0 でソフトウェアシリアルポート（D7/D8）を使用して動作しないのですか？

    Stalker v2.1/2.0 ではデジタルピン（D7/D8）が使用されています。そのため、GPRS_TX/GPRS_RX を他のデジタルピンに接続してソフトウェアシリアルポートとして使用する必要があります。この問題は Stalker 2.2 バージョンで解決されています。

- GPRS Shield を Stalker や他の Arduino ボードに組み込むと、なぜ I2C が使用できなくなるのですか？

    GPRS Shield は I2C を介して他のモジュールと競合するためです。GPRS Shield 自体は I2C ポートを使用していませんので、SIM900 の I2C ポートから A4/A5 への接続を切断することで解決できます。

## 関連プロジェクト

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Recipe-arduinophone.png)

これは GPRS Shield V2.0 を使用して作成されたデモです。

このデモでは、Arduino、GPRS Shield シールド、および他のモジュールを使用して「Arduino Phone」という携帯電話を作成しました。

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ArduinoPhone/)

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_gas.jpg)

これは GPRS Shield V2.0 を使用して作成されたデモです。

このデモでは、家庭でガス漏れが発生した際に SMS を受信することができます。

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://community.seeedstudio.com/project_detail.html?id=242)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [GPRS Shield v2.0 の回路図と PCB（Eagle フォーマット）](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_eagle_file.zip)
- **[PDF]** [GPRS Shield v2.0 の回路図（PDF フォーマット）](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_V2_Schematic.pdf)
- **[PDF]** [GPRS Shield v2.0 の PCB（PDF フォーマット）](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRSshield%20V2%20PCB.pdf)
- **[Library]** [GPRS_Shield ライブラリ（Suli ベース） - GitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- **[Library]** [GPRS_SIM900 ライブラリ（非 Suli） - GitHub](https://github.com/Seeed-Studio/GPRS_SIM900)
- **[Document]** [AT コマンド v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/AT_Commands_v1.11.pdf)
- **[Document]** [SIM900 ハードウェア設計](https://wiki.seeedstudio.com/ja/images/e/e3/SIM900_HD_V1.05.pdf)
- **[Datasheet]** [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
- **[Datasheet]** [SIM900 データシート](https://www.seeedstudio.com/document/SIM900datasheeet.zip)
- **[Tools]** [SIM900 ファームウェアとツール（ファームウェア: 1137B08SIM900M64_ST）](https://wiki.seeedstudio.com/ja/images/8/87/SIM900_firmware_and_tool.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様のニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>