---
description: Xadow - GPS
title: Xadow - GPS
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_GPS
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Xadow_gps.jpg)

Xadow GPSはOEM GNSS受信モジュールで、Fastrax IT530Mと小型の12mm四方のセラミックパッチアンテナを含んでいます。この低消費電力モジュールは、位置情報、衛星情報、時間などを提供する標準的なNMEA形式のデータを出力します。このモジュールはXadow Main Boardに直接接続して、上記の情報を表示および記録することが簡単にできます。弱い信号の取得および追跡能力を備えており、ナビゲーションプロジェクトに最適な選択肢です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-GPS-p-1600.html)

## 仕様
---
- 動作電圧: 5.0 VDC
- チャンネル数: 99/33 (検索/追跡)
- ナビゲーション感度: -165dBm
- 追跡感度: -148 dBm
- 初期位置取得時間(コールドスタート): 23秒
- 初期位置取得時間(ウォームスタート): 23秒
- 初期位置取得時間(ホットスタート): 1秒
- 更新レート: 1 Hz (最大10 Hzまで設定可能)
- データプロトコル: NMEA-0183 rev. 3.01
- 通信モード: UART
- デフォルトボーレート: 115200 b/s
- 動作温度: -40°C ~+85°C
- 寸法: 25.43mm x 20.35mm

## デモンストレーション
---
ソフトウェアシリアルを使用してGPSからデータを読み取り、それをシリアルポートに送り返す方法の例を以下に示します。

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/IMG_4200.JPG)

:::note
Xadow GPSをXadow Main Boardに接続する際には、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填の角を別のモジュールの直角部分に接続する必要があります（各Xadowモジュールの4つの角を参照してください）。
:::
```
#define SerialBaud   9600
#define Serial1Baud  9600
void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
}

void loop()
{
    for(;;)
    {
        // 仮想シリアルラインからUARTへのコピーとその逆
   /*
    */
        if (Serial.available())
        {
            Serial1.write(Serial.read());
        }
        if (Serial1.available())
        {
            Serial.write(Serial1.read());
        }
    }
}
```

- シリアルモニターを開くと、以下のような情報が表示されます:

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Read_data_from_serial_monitor.jpg)

これはNMEA 0183通信プロトコルに関するすべての情報です。実際には、位置データのみを抽出すればよく、その他の情報は無視できます。$GPRMCデータは私たちにとって有用です。以下にその詳細な意味を解析します:

$GPRMC,091308.000,A,2235.1683,N,11356.3607,E,0.37,259.79,050813,,,A*6E

- 091308.000－－グリニッジ標準時（世界標準時）09:13:8 AMを意味します。北京標準時はグリニッジ標準時より8時間進んでいるため、北京時間は5:13 PMです。
- A－－データが有効であることを意味します。文字がVの場合、$GPRMCデータは無効であることを意味します。
- 2235.1683,N－－緯度22.351683度。
- 11356.3607,E－－東経113.563607度。
- 0.37－－移動速度を意味します。
- 259.79－－移動方向を意味します。北は0度、東は90度、南は180度、西は270度です。
- 050813－－2013年8月5日を意味します。

**このデータはu-centerを使用して観察することもできます。**
- [u-center](https://www.u-blox.com/en/product/u-center-windows)をダウンロードしてコンピュータにインストールします。
- Receiver -> Portをクリックし、Xadow Main Boardが使用しているCOMポートを選択します。Arduino IDEのシリアルモニターを開いている場合は閉じてください。
- Receiver -> Baudrateをクリックし、9600が選択されていることを確認します。
- View -> Text Consoleをクリックすると、以下のようにNMEAデータがストリームされるウィンドウが表示されます。

![](https://files.seeedstudio.com/wiki/Xadow_GPS/img/Read_data_from_u-_center.jpg)

- 上記の画像の右側には、衛星位置、世界位置、コンパス、時計が表示されています。View -> Docking Windowsをクリックして、表示したいウィンドウを選択できます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [Xadow GPS Eagle File](https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_Eagle_File.zip)
- [Xadow GPS Schematic in PDF](https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_in_Schematic.pdf)
- [Fastrax IT530M Datasheet](https://files.seeedstudio.com/wiki/Xadow_GPS/res/IT530M_DataSheet.pdf)

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>