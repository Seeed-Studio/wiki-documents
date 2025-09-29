---
description: Xadow - BLE スレーブ
title: Xadow - BLE スレーブ
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_BLE_Slave
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Xadow_ble_01.jpg)

これは Bluetooth 4.0 モジュール（Bluetooth 4.0 スレーブモジュール）です。Bluetooth バージョン 2.0 および 3.0 と比較して、消費電力が低いという点でより進化しています。このモジュールを使用することで、Bluetooth 4.0 のプライマリデバイスに簡単にプロジェクトを接続できます。例えば、体に関する検出データをスマートフォンに転送して表示や分析を行い、体調管理をより良くすることができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-BLE-Slave-p-1546.html)

## 仕様
---
- Bluetooth 4.0 モジュール
- PIN: 0000
- デフォルトボーレート: 38400
- 寸法: 25.43mm x 20.35mm

## デモンストレーション
---
このデモでは、Xadow BLE スレーブを使用して Bluetooth デバイスと接続し、通信する方法を示します。このモジュールを使用して、Bluetooth 4.0 を搭載したスマートフォンと通信することができます。それではテストを始めましょう：
- Xadow BLE スレーブを Xadow メインボードに接続し、USB ケーブルでメインボードを PC に接続します。通常モードでは、青色 LED が一度点滅します。青色 LED が消灯している場合は、Xadow メインボードの「リセット」ボタンを押してください。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/XadowBLE.jpg)

:::note
    Xadow BLE スレーブを Xadow メインボードに接続する際は、接続方向に注意してください。接続方法は、1つの Xadow モジュールの未充填の角を、別のモジュールの直角に接続する必要があります（各 Xadow モジュールの4つの角を参照）。
:::
- テストコードを Xadow メインボードにアップロードします。

```
int error=0;
int n;
void setup()
{
    Serial.begin(38400);
    delay(100);
    PORTB|=0x04;
    TESTIO();
    if(error==0)
    {
        DDRB|=0x81;
        for(n=0;n<40;n++)
        {
            PORTB&=~0x81;
            delay(50);
            PORTB|=0x81;
        }
    }

    Serial1.begin(38400);
}
void loop()
{
    boot();
}
void TESTIO(void)
{
    DDRB|=0x0e;
    PORTB&=~0x0e;
    DDRF|=0x01;
    PORTF&=~0x01;
    DDRD&=~0x0f;

    PORTB|=0x04;
    PORTF|=0x01;
    delay(30);
    if(!(PIND&0x01))
    {
        error=1;
    }
    if(PIND&0x02)
    {
        error=1;
    }
    if(!(PIND&0x04))
    {
        error=1;
    }
    if(PIND&0x08)
    {
        error=1;
    }
    PORTB&=~0x04;
    PORTB|=0x0a;
    PORTF&=~0x01;
    delay(30);
    if(PIND&0x01)
    {
        error=1;
    }
    if(!(PIND&0x02))
    {
        error=1;
    }
    if(PIND&0x04)
    {
        error=1;
    }
    if(!(PIND&0x08))
    {
        error=1;
    }
    Serial.println(error);
}
void boot(void)
{
    for(;;)
    {
        if(Serial.available())
        {
            Serial1.write(Serial.read());
        }
        if(Serial1.available())
        {
            Serial.write(Serial1.read());
        }
    }
}
```

- シリアルツールを選択してデータを送受信します。ここでは [Sscom32E](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/Sscom32E.zip) を使用します。ボーレートは 38400 に設定してください。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Open_serial_tool.jpg)

- スマートフォンを準備し、[“BlueSPP” アプリ](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/BlueSPP_V4.0.zip) をインストールして起動します。デバイスは Bluetooth 4.0 に対応している必要があります。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Open_Bluetooth.jpg)

- 「検索」をクリックしてデバイスを見つけます。Xadow BLE スレーブデバイスを見つけて、Bluetooth デバイスの接続を開始します。

:::tip
    'BlueSPP' が BLE モジュールを見つけられない場合は、スマートフォンのデバイスマネージャーで BLE モジュールとペアリングする必要があります。
:::
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Search_device.jpg)

- 接続後、デバイスの画面は以下のようになります。テキストを入力するとデータが送信され、PC のシリアルツールに表示されます。もちろん、PC のシリアルツールを使用してスマートフォンにデータを送信することもできます。

![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/Send_and_Receive_Data.jpg)
![](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/img/BLE_Slave_send_data.jpg)

## リソース
---
- [Xadow BLE スレーブ](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/Xadow_BLE_Slave.zip)
- [“BlueSPP” アプリ](https://files.seeedstudio.com/wiki/Xadow_BLE_Slave/res/BlueSPP_V4.0.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>