---
description: このWikiはGrove - NFC (ST25DV64)の使用方法について説明しています。
title: Grove - NFC(ST25DV64)
keywords:
- NFC
- ST25DV64
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove-nfc-st25dv64
last_update:
  date: 05/15/2025
  author: Stephen Lo
---


# Grove - NFC (ST25DV64)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/1.jpg" alt="pir" width={450} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-NFC-ST25DV64KC-p-5688.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - NFC (ST25DV64)は、STMicroelectronicsの高度なST25DV64Kチップを基にした革新的で多用途なNFC/RFIDタグボードです。このダイナミックなチップはISO/IEC 15693およびNFCフォーラムタイプ5タグ標準をサポートしており、幅広いNFC対応デバイスと互換性があります。

この製品は、メーカー、DIY愛好家、そしてNFC技術の実験に興味があるすべての人々に向けて設計されています。Grove - NFC (ST25DV64)は、プロジェクトにNFC機能を追加するためのシンプルで費用対効果の高いソリューションを提供します。そのオープンソース性により、このボードをそのまま使用するだけでなく、スマートホームシステム、セキュアアクセス制御デバイス、非接触型決済ソリューション、または在庫追跡システムを構築する際に、特定のニーズに合わせて調整することも可能です。

Grove - NFC (ST25DV64)は単なるNFCタグ以上のものです。これは、NFC技術とその応用について学ぶための強力なツールでもあります。その豊富な機能により、データ転送、エネルギー収集、データ保護、汎用出力など、NFCのさまざまな側面を探求することができます。

このボードは使いやすさを重視して設計されています。標準的なGroveコネクタ（HY2.0 - 4Pin）を備えており、他のGroveモジュールとの互換性が容易です。また、3.3Vおよび5Vシステムの両方で動作するため、柔軟なNFCソリューションを提供します。

小型ながら、Grove - NFC (ST25DV64)はストレージ面で優れた性能を発揮します。64 KbitsのEEPROMを提供し、2048ブロック（各32ビット）に整理されており、データを十分に保存するスペースを確保しています。

注意: Grove - NFC (ST25DV64)にはNFCアンテナが付属していません。この製品を使用するには、別途13.56MHzのNFCアンテナを購入する必要があります。このアンテナはSeeedstudioから購入することも可能です。

NFC初心者でも、使いやすいNFCソリューションを探している経験豊富な開発者でも、Grove - NFC (ST25DV64)は優れた選択肢です。そのオープンソースのソフトウェアとハードウェア、使いやすさ、多用途性により、あらゆるNFCプロジェクトにとって貴重なツールとなります。

:::tip
[Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。このガイドは、あなたのニーズに最適なガスセンサーを選ぶ際に役立ちます。
:::

## 特徴

- ST25DV64Kチップを基にしており、ISO/IEC 15693およびNFCフォーラムタイプ5タグ標準をサポート
- 64 KbitsのEEPROM、2048ブロック（各32ビット）に整理
- エネルギー収集およびGPO（汎用出力）機能
- 高速転送モードおよび複数レベルのデータ保護
- 3.3Vおよび5Vシステムの両方に対応
- 標準的なGroveコネクタ（HY2.0 - 4Pin）を使用しており、他のGroveモジュールとの統合が容易
- オープンソースのソフトウェアとハードウェア

## 仕様

- チップ: ST25DV64K
- 動作周波数: 13.56 MHz
- プロトコル: ISO/IEC 15693
- 通信インターフェース: I2C
- Groveコネクタ: 4ピン HY2.0
- 動作電圧: 3.3/5V

## 同梱物

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/2.jpg" alt="pir" width={500} height="auto" /></p>

- 1x Grove - NFC(ST25DV64) ボード
- 2x Groveケーブル(20cm)

## 応用例

- **アクセス制御:** Grove - NFC (ST25DV64) をキーカードとして使用し、アクセス制御システムに利用。
- **スマートホームオートメーション:** タグに設定データを保存し、スマートホームデバイスを制御したり特定のアクションをトリガー。
- **非接触決済:** タグを決済システムに統合し、非接触トランザクションを実現。
- **デバイスペアリング:** NFCタグに接続情報を保存し、デバイス間のペアリングプロセスを簡素化。
- **在庫追跡:** 製品にNFCタグを取り付け、製品情報を保存して在庫管理を簡素化。

## ハードウェア概要

### ピンマップ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/3.png" alt="pir" width={600} height="auto" /></p>

## はじめに

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### 必要な材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino V4.3</th>
			<th>NFCアンテナ</th>
      <th>Grove - NFC(ST25DV64)</th>
		</tr>
    <tr>
      <td><p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p></td>
      <td><p><img src="https://raw.githubusercontent.com/Longan-Labs/NFC_ST25DV_RES/main/images/NFC_ANTENNA.jpg" alt="pir" width={250} height="auto" /></p></td>
      <td><p><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/1.jpg" alt="pir" width={250} height="auto" /></p></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/NFC-Antenna-p-1805.html?queryID=32009a01d3dd8bba3d47aacebce9f91d&objectID=1138&indexName=bazaar_retailer_products" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

:::note
**1**. USBケーブルを優しく差し込んでください。そうしないとポートが破損する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)から購入できます。
    
**2**. Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)から購入できます。
:::

- **ステップ1.** Grove - NFC (ST25DV64) をGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

:::note
Grove - NFC (ST25DV64)にはNFCアンテナが付属していません。そのため、この製品を使用するには13.56MHzのNFCアンテナを別途購入する必要があります。このアンテナはSeeedstudioから購入可能です。
:::

| Seeeduino     | Grove - NFC (ST25DV64) |
|---------------|-------------------------|
| 3.3/5V        | 赤                     |
| GND           | 黒                     |
| SDA           | 白                     |
| SCL           | 黄                     |

#### ソフトウェア

- **ステップ1.** [ST25DV Arduinoライブラリ](https://github.com/limengdu/ST25DV)をGithubからダウンロードします。

- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ3.** ライブラリを正しくダウンロードしてインストールした後、`ST25DV_HelloWorld.ino`という名前のサンプルプログラムがexamplesフォルダに見つかります。このプログラムはST25DVモジュール用に設計されています。

```cpp
#include "ST25DVSensor.h"

#define DEV_I2C         Wire
ST25DV st25dv(12, -1, &DEV_I2C);

void setup() {
  const char uri_write_message[] = "seeedstudio.com";       // タグに書き込むURIメッセージ
  const char uri_write_protocol[] = URI_ID_0x01_STRING; // タグに書き込むURIプロトコル
  String uri_write = String(uri_write_protocol) + String(uri_write_message);
  String uri_read;

  // 出力用にシリアルを初期化
  Serial.begin(115200);

  // 使用するWireインスタンスは、デフォルトのWireインスタンスを使用する場合、省略可能
  if(st25dv.begin() == 0) {
    Serial.println("システム初期化完了！");
  } else {
    Serial.println("システム初期化失敗！");
    while(1);
  }

  if(st25dv.writeURI(uri_write_protocol, uri_write_message, "")) {
    Serial.println("書き込み失敗！");
    while(1);
  }

  delay(100);
  
  if(st25dv.readURI(&uri_read)) {
    Serial.println("読み取り失敗！");
    while(1);
  }

  Serial.println(uri_read.c_str());

  if(strcmp(uri_read.c_str(), uri_write.c_str()) == 0) {
    Serial.println("書き込みと読み取りに成功しました！");
  } else {
    Serial.println("不正な文字列を読み取りました！");
  }
}

void loop() {  
  // 空のループ
} 
```

- **ステップ4.** デモをアップロードします。

- **ステップ5.** Arduino IDEの**シリアルモニター**を開きます（**ツール->シリアルモニター**をクリック）。以下の結果が得られます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/5.png" alt="pir" width={700} height="auto" /></p>

提供されたプログラムをArduinoにアップロードすると、Grove - NFC (ST25DV64)は完全に機能するNFCタグとなり、独立して動作することができます。Arduinoボードから取り外しても、追加の設定は必要ありません。

その機能をテストするには、NFC対応のスマートフォン（AndroidまたはApple）が必要です。このデバイスのNFCアンテナはカメラの近くに配置されています。ただし、スマートフォンのNFCアンテナの位置が不明な場合は、オンラインで調べることをお勧めします。

スマートフォンのNFCアンテナをGrove - NFC (ST25DV64)のNFCアンテナに近づけてください。スマートフォンにst.comのウェブページを開くよう求めるプロンプトが表示されるはずです。この応答は、Grove - NFC (ST25DV64)がNFCタグとして正常に機能していることを示し、デモの機能を確認するものです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-NFCST25/4.jpg" alt="pir" width={300} height="auto" /></p>

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://github.com/Longan-Labs/NFC_ST25DV_RES/raw/main/Grove%20-%20NFC(ST25DV64).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - NFC(ST25DV64)](https://files.seeedstudio.com/wiki/Grove-NFCST25/Grove-NFC(ST25DV64).zip)
- **[PDF]** [ST25DV64K データシート](https://files.seeedstudio.com/wiki/Grove-NFCST25/st25dv.pdf)

## 技術サポート & 製品ディスカッション

.

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>