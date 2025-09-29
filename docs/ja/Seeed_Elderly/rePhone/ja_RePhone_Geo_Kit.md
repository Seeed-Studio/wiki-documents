---
description: RePhone Geo Kit
title: RePhone Geo Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RePhone_Geo_Kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Geo_Kit_wiki_2.jpg)

GSMモジュールとGPSモジュールの組み合わせが、RePhone Geo Kitを際立たせています。このキットを使用すると、GSMネットワーク（SMS）を介して、リアルタイムの地理的位置、高度、移動速度、時間情報をいつでも、どんな天候でも取得することができます。また、Xadow GSM Breakoutは、電子機器のハッキングにさらなる可能性を提供します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Geo-Kit-p-2624.html)

##  仕様
---
### Xadow GSM+BLE

<!-- このモジュールの詳細については、[**Xadow GSM+BLE Wikiページ**](/ja/Xadow_GSMPlusBLE)をご覧ください。 -->

<table>
<tr>
<td> マイクロコントローラー </td>
<td> MT2502</td>
</tr>
<tr>
<td> MCUコア </td>
<td> 32ビット ARM7EJ-STM RISCプロセッサ</td>
</tr>
<tr>
<td> RAM </td>
<td> 4 MB</td>
</tr>
<tr>
<td> フラッシュメモリ </td>
<td> 16 MB</td>
</tr>
<tr>
<td> 電源供給 </td>
<td> 3.3 ~ 4.2V（SIMなし）/3.5 ~ 4.2V（SIMあり）</td>
</tr>
<tr>
<td> 消費電力 </td>
<td> 20mW/30mW/52mW @ 待機（無線なし）/待機（GSM）/待機（BT）</td>
</tr>
<tr>
<td> クアッドバンド </td>
<td> 850/900/1800/1900 MHz</td>
</tr>
<tr>
<td> GPRS </td>
<td> クラス12モデム</td>
</tr>
<tr>
<td> クロックスピード </td>
<td> 260 MHz</td>
</tr>
<tr>
<td> コネクタ </td>
<td> Xadowモジュール用35ピンコネクタ＆11ピンコネクタ；バッテリー用JST 1.0コネクタ</td>
</tr>
<tr>
<td> インターフェース </td>
<td> LCD、オーディオ、I2C、SPI、UART、GPIOなど</td>
</tr>
<tr>
<td> 寸法 </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”</td>
</tr>
</table>

### Xadow GPS v2

<!-- このモジュールの詳細については、[**Xadow GPS V2 Wikiページ**](/ja/Xadow_GPS_V2)をご覧ください。 -->

<table>
<tr>
<td> マイクロコントローラー </td>
<td> Kinetis KL02</td>
</tr>
<tr>
<td> コア </td>
<td> ARM® 32ビット Cortex® -M0+CPU</td>
</tr>
<tr>
<td> 電源供給 </td>
<td> 3.3 ~ 6 V（ブレークアウトピン経由）</td>
</tr>
<tr>
<td> フラッシュ </td>
<td> 32 KB</td>
</tr>
<tr>
<td> SRAM </td>
<td> 4 KB</td>
</tr>
<tr>
<td> クロックスピード </td>
<td> 48 MHz</td>
</tr>
<tr>
<td> 消費電力 </td>
<td> 18mA@追跡、21mA@取得</td>
</tr>
<tr>
<td> 省電力 </td>
<td> Typ. 3mA@AlwaysLocateTM、7uA@バックアップモード、180uA@スタンバイモード</td>
</tr>
<tr>
<td> チャンネル </td>
<td> 22（追跡）/ 66（取得）</td>
</tr>
<tr>
<td> 更新レート </td>
<td> 1Hz（デフォルト）、最大10Hz</td>
</tr>
<tr>
<td> 水平位置精度 </td>
<td> &lt;2.5m CEP</td>
</tr>
<tr>
<td> 速度精度 </td>
<td> &lt;0.1m/s</td>
</tr>
<tr>
<td> 最大速度 </td>
<td> 最大515m/s</td>
</tr>
<tr>
<td> EASYTMによるコールド/ウォームスタート </td>
<td> 215秒/5秒</td>
</tr>
<tr>
<td> 取得感度 </td>
<td> -145dBm</td>
</tr>
<tr>
<td> 追跡感度 </td>
<td>-163dBm</td>
</tr>
<tr>
<td> 動作温度 </td>
<td> -40℃ ～ 85℃</td>
</tr>
<tr>
<td> プロトコル </td>
<td> NMEA 0183/PMTK</td>
</tr>
<tr>
<td> アンテナタイプ </td>
<td> チップアンテナ</td>
</tr>
<tr>
<td> インターフェース </td>
<td> Xadow GSM+BLEとのインターフェース（I2C、7ビットアドレス0x05）</td>
</tr>
<tr>
<td> 寸法 </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”</td>
</tr>
</table>

### Xadow GSM ブレイクアウト

<!-- このモジュールの詳細については、[**Xadow GSM Breakout Wikiページ**](/ja/Xadow_GSM_Breakout)をご覧ください。 -->

<table>
<tr>
<td> 寸法 </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”</td>
</tr>
</table>

## モジュール接続
---
Xadow GSM+BLE は、Xadow 36 ピンコネクタと Xadow 11 ピンコネクタを統合しています。以下の画像に示されているように、必要に応じて Xadow GSM+BLE を Xadow GSM ブレイクアウトに Xadow 36 ピンケーブルで接続することができます。ただし、ケーブルは**しっかり**かつ**平らに**挿入する必要があり、最も重要なのは、**「TOP」側を上向きに保つ**ことです。Xadow 11 ピンコネクタはより柔軟な設計になっており、Xadow GPS v2 とメインボードを Xadow 11 ピンリボンケーブルで好きな方法で接続できます。この場合も、ケーブルがしっかり挿入されていることを確認してください。

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Geo_Kit_wiki_2.jpg)

## GPS テストコードの実行
---
<!-- まず、**[Arduino IDE for RePhone Kit](/ja/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** の指示に従って、RePhone Kit 用の Arduino IDE をダウンロードし、ドライバをインストールする必要があります。 -->
次に、以下の GPS テストコードを RePhone 用の Arduino IDE にコピーします。**ボードを「RePhone」に設定**し、**「MTK USB Debug Port」でダウンロード**してください。
```
#include <LGPS.h>
#include <stdio.h>

void setup()
{
    Serial.begin(115200);
    Serial.print("GPS test.\r\n");
}

void loop()
{
    unsigned char *utc_date_time = 0;
    char buffer[50] = {0,};

    if(LGPS.check_online())
    {
        utc_date_time = LGPS.get_utc_date_time();
        sprintf(buffer, "GPS UTC:%d-%d-%d  %d:%d:%d\r\n", utc_date_time[0], utc_date_time[1], utc_date_time[2], utc_date_time[3], utc_date_time[4],utc_date_time[5]);
        Serial.print(buffer);

        sprintf(buffer, "GPS status is %c\r\n", LGPS.get_status());
        Serial.print(buffer);

        sprintf(buffer, "GPS latitude is %c:%f\r\n", LGPS.get_ns(), LGPS.get_latitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS longitude is %c:%f\r\n", LGPS.get_ew(), LGPS.get_longitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS speed is %f\r\n", LGPS.get_speed());
        Serial.print(buffer);

        sprintf(buffer, "GPS course is %f\r\n", LGPS.get_course());
        Serial.print(buffer);

        sprintf(buffer, "GPS position fix is %c\r\n", LGPS.get_position_fix());
        Serial.print(buffer);

        sprintf(buffer, "GPS sate used is %d\r\n", LGPS.get_sate_used());
        Serial.print(buffer);

        sprintf(buffer, "GPS altitude is %f\r\n", LGPS.get_altitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS mode is %c\r\n", LGPS.get_mode());
        Serial.print(buffer);

        sprintf(buffer, "GPS mode2 is %c\r\n", LGPS.get_mode2());
        Serial.print(buffer);
    }
    delay(1000);
}
```

**注意事項：より良い信号強度を得るために、GPS モジュールを窓の外や屋外の開けた場所に置いてください。また、初回起動後、衛星を追跡するまでに時間がかかる場合があります。**

次に、**ポートを MTK USB Modern Port に変更してください（これが非常に重要です）**。シリアルモニターで GPS 情報を確認できるはずです。

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/GPS_detected.png)
![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/GPS_undetected.png.png)

##  さらに多くのサンプルコード
---
より興味深いプロジェクトに取り組む場合、いくつかのサンプルコードを試してみるのは良いスタートとなるでしょう。

1. **スケッチブックの場所**を**設定**で、RePhone用のArduino IDEをインストールした場所に簡単に設定してください。これでサンプルコードを見ることができるようになります。

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/Arduino_Sketchlocation.png)

2. 以下のパスで、すべてのRePhoneモジュール用に手動で作成されたArduinoのサンプルコードを見つけることができます：

_**Arduino_IDE_for_RePhone-master\hardware\arduino\mtk\libraries**_

![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/Example_code_Arduino_IDE.png)

##  RePhone コミュニティ
---
[![](https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

私たちは、RePhoneユーザー（支援者）が集まり、温かく快適に会話を楽しみ、RePhoneについて議論し、技術的な問題を話し合い、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる、より良い場所を探してきました。そして、ここに「RePhone コミュニティ」があります。

今すぐ[RePhone コミュニティ](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)に参加しましょう！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

###   よくある質問

RePhone コミュニティでよくある質問を収集し、**[「RePhoneのよくある質問（FAQ）」](https://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)**というトピックで回答しています。このトピックは、新しいFAQが出るたびに更新されます。

##  リソース

<!-- 詳細については、Wikiページ [Xadow GPS V2](/ja/Xadow_GPS_V2) をご覧ください。 -->

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>