---
description: GPRSシールド V3.0
title: GPRSシールド V3.0
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/GPRS_Shield_V3.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: GPRSシールド V3.0
category: シールド
bzurl: https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html
oldwikiname: GPRSシールド V3.0
prodimagename:
surveyurl: https://www.research.net/r/GPRS_Shield_V3
sku: 113030009
--- -->

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/img/GPRS_Shield_V3.0_p1.jpg)

これはGPRSシールドのバージョン3.0です。  
GPRSシールドを使って、ArduinoをGSM/GPRS携帯電話ネットワークに接続しましょう！Arduino/Seeeduinoや他のメインボードを使用して、簡単なATコマンドを介して電話をかけたり、友人にテキストメッセージを送信したりできます。  
GPRSシールドは、クアッドバンド低消費電力GSM/GPRSモジュールSIM900とコンパクトなPCBアンテナを備えています。また、インターフェースと基本回路の改良が行われ、より簡潔で信頼性の高い設計になっています。  
さらに、GPRSシールドとメインボードの通信には、UARTまたはSoftwareSerialの2つの選択肢があります。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html)

## バージョン

---
| リビジョン | 説明                                                         | リリース日      |
|------------|-------------------------------------------------------------|----------------|
| v0.9b      | 初回公開リリース（ベータ版）                                | 2011年3月3日   |
| v1.2       | SIM90の電源オン/オフ用のソフトウェアポートを追加            | 2011年12月2日  |
| v1.4       | 電源回路を再設計し、PCBレイアウトを再配置                   | 2012年8月30日  |
| v2.0       | クアッドバンド対応とPCBアンテナの再設計                     | 2013年2月3日   |
| v3.0       | Arduinoソケットを最新のArduino Uno標準に変更               | 2015年3月20日  |

**V3.0と以前のバージョンの違いは何ですか？**

- Arduinoソケットを最新のArduino Uno標準に変更しました。それ以外の機能は以前のバージョンと同じです。

## 注意事項

---
- SIMカードが有効化されていることを確認してください。
- GPRSシールドにはESD（静電気放電）対策が施されていません。乾燥した天候で取り扱う際には特に注意してください。

## ハードウェア概要

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/img/Gprs_shield_v3_layout1.png)

仕様やアプリケーションガイドについては、[GPRSシールド V2.0](https://wiki.seeedstudio.com/ja/GPRS_Shield_V2.0/)のドキュメントを参照してください。

## よくある質問（FAQs）

**Q1: Leonardo用にコードを修正する方法は？**

A1: 以下がコードです。

```cpp
#include <SoftwareSerial.h>

unsigned char buffer[64]; // シリアルポート経由で受信するデータ用のバッファ配列
int count = 0;     // バッファ配列のカウンター

void setup()
{
    Serial1.begin(19200);               // GPRSのボーレート
    Serial.begin(19200);             // Arduinoのシリアルポートのボーレート
}

void loop()
{
    if (Serial1.available())              // ソフトウェアシリアルポートからデータが来ている場合 ==> GPRSシールドからデータが来ている
    {
        while (Serial1.available())          // データを文字配列に読み込む
        {
            buffer[count++] = Serial1.read();     // 配列にデータを書き込む
            if (count == 64)
                break;
        }
    
        for ( int j=0;j<count;j++)
        {
          Serial.write(buffer[j]);
        }
        clearBufferArray();              // 配列内の保存データをクリアするためにclearBufferArray関数を呼び出す
        count = 0;                       // whileループのカウンターをゼロに設定
    }
    if (Serial.available())            // ハードウェアシリアルポートにデータがある場合 ==> PCまたはノートブックからデータが来ている
        Serial1.write(Serial.read());       // それをGPRSシールドに書き込む
}

void clearBufferArray()              // バッファ配列をクリアする関数
{
    for (int i=0; i < count; i++)
    {
        buffer[i] = NULL;
    }                               // 配列のすべてのインデックスをNULLでクリア
}
```

**Q2: SIM900のファームウェアを更新する方法は？**

A2: Wikiのリソースモジュールから「SIM_900_AGPS_instructions」ファームウェアをダウンロードしてください。ソフトウェアやハードウェアに問題がある場合に役立ちます。この最新バージョンはHTTPSなどをサポートしています。詳細については、付属の説明書を参照してください。

**Q3: GPRSシールドのRTCについては？**

A3: SIM900の仕様にはRTCバックアップがあると記載されていますが、これまで使用したことはありません。マニュアルを参照してデモを作成するか、将来的に対応する予定です。

**Q4: このGPRSシールドでSMSを送受信できません。**

A4: 以下の手順に従ってください。

- SIMカードが正しく挿入されていることを確認してください。
- 携帯電話でカードが動作するか確認してください。
- Wikiからテストコードをアップロードし、ATコマンドを送信して正常な応答があるか確認してください。
- "libraries\SoftwareSerial\SoftwareSerial.h"内の"#define _SS_MAX_RX_BUFF 64 // RXバッファサイズ"を"#define _SS_MAX_RX_BUFF 128 // RXバッファサイズ"に変更してみてください。

**Q5: GPRSシールドを起動するための2つの代替方法**

A5: 以下の2つの方法があります。

- DTRピンを低に引く：DTRを20ms間低に引いた後、シリアルポートがアクティブになります。
- RTCアラームの期限切れ

**Q6: GPRSシールドで使用できるSIMカードの種類は？**

A6: GPRSシールドに使用されているSIM900は、850/900/1800/1900MHzのGSMバンドをサポートしています。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_V3.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [GPRS Shield v3.0 回路図およびPCB（Eagle形式）](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_V3.0_sch_pcb.zip)
- **[PDF]** [GPRS Shield v3.0 回路図（PDF形式）](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_v3.0%20sch.pdf)
- **[PDF]** [GPRS Shield v3.0 PCB（PDF形式）](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS%20Shield%20v3.0%20PCB.pdf)
- **[Library]** [GPRS_Shieldライブラリ（Suliベース） - GitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- **[Library]** [GPRS_SIM900ライブラリ（非Suli） - GitHub](https://github.com/Seeed-Studio/GPRS_SIM900)
- **[Document]** [ATコマンド v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/AT_Commands_v1.11.pdf)
- **[Document]** [SIM900 ハードウェア設計](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM900_HD_V1.05.pdf)
- **[Datasheet]** [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
- **[Datasheet]** [SIM900 データシート](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM900datasheeet.zip)
- **[Datasheet]** [SIM_900_AGPS_手順書](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM_900_AGPS_instructions.zip)
- **[Tools]** [SIM900 ファームウェアおよびツール（ファームウェア:1137B08SIM900M64_ST）](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/1137B08SIM900M64_ST.zip)
- **[Tools]** [SIM900 ファームウェアおよびツール（ファームウェア:1137B13SIM900M64_ST）](https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/1137B13SIM900M64_ST.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>