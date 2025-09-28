---
description: NFC Shield V1.0
title: NFC Shield V1.0
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/NFC_Shield_V1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp)

[NFC Shield](https://seeeddoc.github.io/NFC_Shield/) は、人気のあるNXP PN532集積回路を中心に構築された、**Arduino**用の**近距離無線通信（NFC）**インターフェースです。NFCは短距離無線技術であり、近接したデバイス間での通信を可能にします。**NFC**は**RFID**技術にルーツを持ち、ECMA-340およびISO/IEC 18092で標準化されたオープンプラットフォーム技術です。

NFCは、RFIDのようにカードやタグ（NXP Mifareカード/タグ）を認識するために広く使用されています。NFCは、カード/タグが提供する読み書き可能なメモリを利用して、**交通カード**の代替として使用することができます。一部の携帯電話にはNFCが内蔵されており、カード、タグ、Web URLを含むスマートポスター（モバイルQRコードリーダーのようなもの）のリーダーとして使用されます。この技術はまた、**スマートキャッシュレス購入**にも応用されています。

他の多くの標準と同様に、NFC技術は**近距離無線通信フォーラム（NFC Forum）**によって規制されており、デバイスがどのようにペアリングし、データを共有し、安全な取引を可能にするかを標準化しています。[NFC Forum](http://www.nfc-forum.org)は、**NFC標準**に準拠したデバイスを開発および認証しています。

NFCは、**13.56 MHz**の周波数で動作する未認可のISM（産業・科学・医療）バンドを使用します。NFCの通信範囲は最大10cmですが、これはアンテナと電力放射設計によって制限されます。ほとんどのデバイスは10mm以内の範囲で動作します。[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)のアンテナは、1cm以内の範囲で動作するように設計されています。[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)は、**PN532**用の27.12MHzクリスタルや電源供給など、必要な回路をすべて提供します。また、**PN532**のI/Oピンを簡単にアクセスできるようにブレークアウトしています。

Arduinoと[NFC Shield](https://seeeddoc.github.io/NFC_Shield/)の間の通信はSPIを介して行われます。

モデル: [SLD80453P](https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134)

## 特徴 ##

- Arduinoシールド互換。はんだ付け不要。

- **SPI**インターフェースを採用。そのため、ほとんどの**Arduino**ピンが他のアプリケーションに利用可能。

- 内蔵**PCBアンテナ**。

- TIの**TXB0104**レベル変換器を使用し、3.3Vおよび5Vの両方の動作をサポート。

- 他のシールドを接続するためのソケットを搭載。

- このNFCシールドの最大通信範囲は約5cm。

- ultralightCチップの読み書きはできず、IDの読み取りのみ可能。

## 応用アイデア ##

- **Mifare Oneタグ**（ISO14443 Type-A）およびカード（13.56MHz）を使用したRFIDリーダーとして利用。

- 名刺共有システムの構築。

- 出席管理システムの構築。

- 認証システムの設計。

- スマートポスターの読み取り。

- 他のNFCデバイスとの小規模なデータを安全に交換。

- [Seeeduino ADK Main Board](https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/)と組み合わせてモバイルNFCアプリケーションを作成。

- その他無限の可能性。

## 使用方法 ##

### ハードウェアのインストール ###

- **Seeeduino** の電源選択スライドスイッチを 3.3V に設定します。

- [NFC Shield](https://seeeddoc.github.io/NFC_Shield/) を以下の図のように **Seeeduino** に接続します。

- 提供されているサンプルスケッチをコンパイルしてアップロードします。

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg)
**NFC Shield - Seeeduino に接続された状態**

- **MIFARE カード** をアンテナの近くにかざします。NFC Shield がパッシブ ID データを読み取ります。

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg)
**NFC Shield アンテナの近くにかざされた Mifare カード**

- **MIFARE タグ** をアンテナの近くにかざします。NFC Shield がパッシブ ID データを読み取ります。

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg)
**NFC Shield アンテナの近くにかざされた Mifare タグ**

- NFC Shield を使用して 2 台の Seeeduino 間でピアツーピア通信を確立するには、以下のセットアップを使用します。

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg)
**NFC ピアツーピア通信セットアップ**

### プログラミング ###

[NFC Shield 用 PN532_SPI ライブラリ](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip) をダウンロードし、\arduino\libraries にインストールします。以下のコードを Arduino IDE にコピーするか、ライブラリ内のサンプルを開いて開始してください。

**デモ 1：MIFARE カードの全メモリを読み取る**

1. `readAllMemoryBlocks` サンプルを開き、以下のようにアップロードします。

```cpp
// この例では、0x00 から 0x63 までの MIFARE メモリブロックを読み取ります。
// 新しい MIFARE 1K カードでテスト済みです。認証にはデフォルトキーを使用します。
// Seeed Technology Inc (www.seeedstudio.com) による貢献

#include <PN532.h>
#include <SPI.h>

/* チップセレクトピンは D10 または D9 に接続可能です（ハードウェアオプション）。*/
/* SeeedStudio の NFC Shield バージョンが v2.0 の場合。*/
#define PN532_CS 10

PN532 nfc(PN532_CS);

#define  NFC_DEMO_DEBUG 1

void setup(void) {
#ifdef NFC_DEMO_DEBUG
  Serial.begin(9600);
  Serial.println("こんにちは！");
#endif
  nfc.begin();

  uint32_t versiondata = nfc.getFirmwareVersion();
  if (! versiondata) {
#ifdef NFC_DEMO_DEBUG
    Serial.print("PN53x ボードが見つかりませんでした");
#endif
    while (1); // 停止
  }
#ifdef NFC_DEMO_DEBUG
  // 正常なデータを取得、出力します！
  Serial.print("チップ PN5 を発見");
  Serial.println((versiondata>>24) & 0xFF, HEX);
  Serial.print("ファームウェアバージョン ");
  Serial.print((versiondata>>16) & 0xFF, DEC);
  Serial.print('.');
  Serial.println((versiondata>>8) & 0xFF, DEC);
  Serial.print("サポート ");
  Serial.println(versiondata & 0xFF, HEX);
#endif
  // RFID タグとカードを読み取るようにボードを設定
  nfc.SAMConfig();
}

void loop(void) {
  uint32_t id;
  // MiFare タイプのカードを探します
  id = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);

  if (id != 0)
  {
#ifdef NFC_DEMO_DEBUG
    Serial.print("カードを読み取り #");
    Serial.println(id);
    Serial.println();
#endif
    uint8_t keys[]= { 0xFF,0xFF,0xFF,0xFF,0xFF,0xFF }; // 新しいカードのデフォルトキー
    for(uint8_t blockn=0;blockn<64;blockn++)
    {
      if(nfc.authenticateBlock(1, id ,blockn,KEY_A,keys)) // ブロック blockn を認証
      {
        // 認証成功の場合
        uint8_t block[16];
        // メモリブロック blockn を読み取る
        if(nfc.readMemoryBlock(1,blockn,block))
        {
#ifdef NFC_DEMO_DEBUG
          // 読み取り操作が成功した場合
          for(uint8_t i=0;i<16;i++)
          {
            // メモリブロックを出力
            Serial.print(block[i],HEX);
            if(block[i] <= 0xF) // データ整列 / 美化
            {
              Serial.print("  ");
            }
            else
            {
              Serial.print(" ");
            }
          }

          Serial.print("| ブロック ");
          if(blockn <= 9) // データ整列 / 美化
          {
            Serial.print(" ");
          }
          Serial.print(blockn,DEC);
          Serial.print(" | ");

          if(blockn == 0)
          {
            Serial.println("メーカー ブロック");
          }
          else
          {
            if(((blockn + 1) % 4) == 0)
            {
              Serial.println("セクタートレーラー");
            }
            else
            {
              Serial.println("データブロック");
            }
          }
#endif
        }
      }
    }
  }
  delay(2000);
}
```

**このスケッチは、デフォルトの認証キーを使用して MIFARE Standard カードの全メモリを読み取ります。出力は、新しい MIFARE Standard カードの典型的なメモリレイアウトを示します。**

2. Mifare カードを NFC アンテナの近くにかざします。シリアルモニターを開くと、以下のようなスコアが表示されます：

![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg)

**注意:** ブロックは、メーカー ブロック（読み取り専用）、データブロック（ユーザー/アプリケーション書き込み可能領域）、およびセクタートレーラー（そのセクターの認証およびアクセスビット）に分類されます。

**デモ 2：MIFARE メモリブロックへのデータ書き込み**

1. `writeMifareMemory` サンプルを開きます。この例では、新しい MIFARE 1K カードのメモリブロック 0x08 にデフォルトの認証キーを使用してデータを書き込みます。MIFARE メモリブロックへのデータ書き込みが完了した後、ブロックメモリを読み取ります。

注意: メモリブロック 0 は読み取り専用で、メーカーのデータが含まれています。セクタートレーラーブロックには書き込まないでください。そうしないと、MIFARE カードが将来使用できなくなる可能性があります。

2. サンプルをコンパイルしてアップロードします。アップロード方法がわからない場合は、[こちら](https://seeeddoc.github.io/Upload_Code/) をクリックしてください。

3. Mifare カードを NFC アンテナの近くにかざします。  
4. シリアルモニターを開くと、以下のようなスコアが表示されます：
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_1.jpg)

**デモ 3：ピアツーピア通信**

最新の NFC ライブラリでは、実験的な NFC ピアツーピア通信が実装されています。これには、P2P 通信のためのアクティブイニシエータが使用されます。

1. サンプル「PtoPInitiator」と「PtoPTarge」を 2 台の異なる NFC Shield を搭載した Arduino にダウンロードします。

2. アンテナを互いに近づけます。

3. シリアルターミナルを開き、データの送受信を観察します。

**出力スコア:**

P2P イニシエータ:
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_PtoPInitiator.jpg)

P2Pターゲット:
![](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_PtoPTarget.jpg)

## リファレンスコード ##

これらのAPIは、PN532ファームウェアが提供するインターフェースをSPI経由で呼び出すためのコマンドを使用します。これらのコマンドはすべてPN532ユーザーマニュアルに記載されています。以下のAPIはPN532_SPIライブラリによって提供されています。

**boolean SAMConfig(void)**

このAPIはPN532の**SAMConfiguration**コマンドを呼び出し、**Normal Mode**に設定します。**SAM**はSecurity Access Module（PN532システム）を指します。PN532システムは**Normal**モード、**Virtual Card**モード、**Wired Card**モード、**Dual Card**モードで動作できます。

**使用例:**

```
nfc.SAMConfig(); // 読み取り/書き込み操作の前にこれを呼び出します
```

**uint32_t readPassiveTargetID(uint8_t cardbaudrate)**

このメソッドはパッシブターゲットIDを読み取り、32ビットの数値として返します。現在のところ、MIFARE ISO14443Aカード/タグの読み取りのみがサポートされています。そのため、パラメータとして**PN532_MIFARE_ISO14443A**を使用してください。32ビットのカード番号を返します。

**使用例:**

```
uint32_t cid;
// MiFareタイプのカード/タグを探します
cid = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);
```

**uint32_t authenticateBlock(uint8_t cardnumber, uint32_t cid, uint8_t blockaddress ,uint8_t authtype, uint8_t * keys)**

このメソッドは、読み取り/書き込み操作の前にキーを使用してメモリブロックを認証するために使用されます。成功した場合はtrueを返します。

- **cardnumber** は1または2
- **cid** は32ビットのカードID
- **blockaddress** はブロック番号（MIFAREカードの場合、0〜63の任意の番号）
- **authtype** は認証に使用するキー（**KEY_A**または**KEY_B**）
- **keys** は6つのキーを保持するバイト配列を指します。

**使用例:**

```
uint8_t keys[]= {0xFF,0xFF,0xFF,0xFF,0xFF,0xFF};  // 新しいカードのデフォルトキー
nfc.authenticateBlock(1, id ,3,KEY_A,keys); // ブロック3を認証します。idは32ビットのパッシブターゲットIDです。
```

**uint32_t readMemoryBlock(uint8_t cardnumber,uint8_t blockaddress, uint8_t * block)**

このメソッドは、キーで認証された後にメモリブロックを読み取ります。成功した場合はtrueを返します。

- **cardnumber** は1または2
- **blockaddress** は読み取るブロック番号（MIFAREカードの場合、0〜63の任意の番号）。MIFARE標準カードの場合、各ブロックは16バイト長です。
- **block** は16バイトのブロックデータを保持するバッファ（バイト配列）を指します。

**使用例:**

```
uint8_t block[16];
nfc.readMemoryBlock(1,3,block); // 認証が成功した場合のみ読み取りが可能です。
```

**uint32_t writeMemoryBlock(uint8_t cardnumber,uint8_t blockaddress, uint8_t * block)**

このメソッドは、キーで認証された後にメモリブロックにデータを書き込みます。成功した場合はtrueを返します。

- **cardnumber** は1または2
- **blockaddress** は書き込むブロック番号（MIFAREカードの場合、0〜63の任意の番号）。MIFARE標準カードの場合、各ブロックは16バイト長です。
- **block** は書き込む16バイトのブロックデータを保持するバッファ（バイト配列）を指します。

**使用例:**

```
uint8_t writeBuffer[16];
for(uint8_t ii=0;ii<16;ii++)
{
    writeBuffer[ii]=ii; // バッファを0,1,2....Fで埋めます
}
nfc.writeMemoryBlock(1,0x08,writeBuffer); // writeBuffer[]をブロックアドレス0x08に書き込みます。認証が成功した場合のみ読み取りが可能です。
```

**uint32_t PN532::configurePeerAsInitiator(uint8_t baudrate)**

このメソッドはPeer to Peer Initiatorを実装します。成功した場合はtrueを返します。

- **baudrate** は0〜2の任意の数値。0は106kbps、1は201kbps、2は424kbpsを表します。現在のところ、1と2のみがサポートされています。

**この機能は実験的であり、他のNFCシールドとのNFC Peer to Peer通信をサポートします。モバイルデバイスとの相互作用はテストされていません。**

**使用例:**

```
// PN532をPeer to Peer Initiatorとして設定します
if( nfc.configurePeerAsInitiator(2) ) // 接続がエラーなしの場合
{
    // 送受信コードをここに記述します
}
```

**uint32_t configurePeerAsTarget()**

このメソッドはPeer to Peer Targetを実装します。成功した場合はtrueを返します。

**この機能は実験的であり、他のNFCシールドとのNFC Peer to Peer通信をサポートします。モバイルデバイスとの相互作用はテストされていません。**

**使用例:**

```
// PN532をPeer to Peer Targetとして設定します
if(nfc.configurePeerAsTarget()) // 接続がエラーなしの場合
{
    // データ送受信コードを記述します
}
```

**uint32_t initiatorTxRx(char *DataOut,char *DataIn)**

このメソッドはターゲットとの間でデータを送受信するために使用されます。このコードはNFC Peer to Peer Initiatorによって使用されます。成功した場合はtrueを返します。

- **DataOut** は送信データのポインタおよび文字配列（16バイト）
- **DataIn** は受信データのポインタおよび文字配列（16バイト）

**この機能は実験的であり、他のNFCシールドとのNFC Peer to Peer通信をサポートします。モバイルデバイスとの相互作用はテストされていません。**

**使用例:**

```
    // PN532をアクティブモードのPeer to Peer Initiatorとして設定します
    if( nfc.configurePeerAsInitiator(2) ) // 接続がエラーなしの場合
    {
        // データ送受信
        if(nfc.initiatorTxRx(DataOut,DataIn))
        {
            Serial.print("送信および受信データ: ");
            Serial.println(DataIn);
        }
    }
```

**uint32_t targetTxRx(char *DataOut,char *DataIn)**

このメソッドはイニシエータとの間でデータを送受信するために使用されます。このコードはNFC Peer to Peer Targetによって使用され、イニシエータに応答します。成功した場合はtrueを返します。

- **DataOut** は送信データのポインタおよび文字配列（16バイト）
- **DataIn** は受信データのポインタおよび文字配列（16バイト）

**使用例:**

```
    // PN532をPeer to Peer Targetとして設定します
    if(nfc.configurePeerAsTarget()) // 接続がエラーなしの場合
    {
        // データ送受信
        if(nfc.targetTxRx(DataOut,DataIn))
        {
            Serial.print("受信データ: ");
            Serial.println(DataIn);
        }
    }
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/ja/images/8/81/NFC_Shield_V0.9b_Schematic_Board_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[ライブラリ]**[NFCシールド用PN532_SPIライブラリ](https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip)
- **[PDF]**[NXP PN532 - ユーザーマニュアル](https://www.nxp.com/docs/en/user-guide/141520.pdf)
- **[リンク]**[NFCフォーラム](http://www.nfc-forum.org)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
