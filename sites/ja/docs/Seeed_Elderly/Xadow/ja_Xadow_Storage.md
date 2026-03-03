---
description: Xadow - ストレージ
title: Xadow - ストレージ
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Storage
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Storage/img/X_Storage_01.jpg)

ほとんどのAVRには、小さなEEPROMが搭載されており、変数や設定などを保存するために使用できます。例えば、Xadowメインボードで使用されているAtmega32u4チップには、1Kバイトの内部EEPROMがあります。Xadowプロジェクトでより多くのストレージが必要な場合、このモジュールが最適です！このモジュールは、プロジェクトに追加の32Kバイトを提供します。Xadowストレージは3.3Vで動作し、Xadowシステムと互換性があります。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Storage-p-1625.html)

##  仕様
---
*   動作電圧: 3.3V

*   制御モード: I2C

*   EEPROM: AT24C256C

*   I2Cアドレスは変更可能

*   寸法: 25.43mm x 20.35mm

##  I2Cアドレス設定
---
Xadowストレージの2つのAT24C256は、共通の2線式バスを共有しています。各AT24C256には、スレーブアドレスと呼ばれる8ビットのハードウェアアドレスがあります。このスレーブアドレスは、A2、A1、およびA0のアドレス選択入力によって構成されます。A2、A1、およびA0ピンはデバイスアドレス入力であり、直接GNDまたはVCCに接続されます。これらのピンが浮遊状態の場合、A2、A1、およびA0ピンは内部的にGNDにプルダウンされます。

<center>
<table cellspacing="0" width="50%">
  <tr><th rowspan="2" scope="col">スレーブアドレス[A6 - A0]</th><th colspan="3" scope="col">A2、A1、およびA0入力状態</th></tr>
  <tr><th scope="col">A2</th><th scope="col">A1</th><th scope="col">A0</th></tr>
  <tr><td scope="row">1010000(0x50)</td><td>GND/浮遊</td><td>GND/浮遊</td><td>GND/浮遊</td></tr>
  <tr><td scope="row">1010001(0x51)</td><td>GND/浮遊</td><td>GND/浮遊</td><td>VCC</td></tr>
  <tr><td scope="row">1010010(0x52)</td><td>GND/浮遊</td><td>VCC</td><td>GND/浮遊</td></tr>
  <tr><td scope="row">1010011(0x53)</td><td>GND/浮遊</td><td>VCC</td><td>VCC</td></tr>
  <tr><td scope="row">1010100(0x54)</td><td>VCC</td><td>GND/浮遊</td><td>GND/浮遊</td></tr>
  <tr><td scope="row">1010101(デフォルト 0x55)</td><td>VCC</td><td>GND/浮遊</td><td>VCC</td></tr>
  <tr><td scope="row">1010110(0x56)</td><td>VCC</td><td>VCC</td><td>GND/浮遊</td></tr>
  <tr><td scope="row">1010111(0x57)</td><td>VCC</td><td>VCC</td><td>VCC</td></tr>
</table>
</center>

デフォルトモードでは、1つのAT24C256(U1)のI2Cアドレスは0x50で、もう1つのAT24C256(U2)のI2Cアドレスは0x51です（Xadowストレージを参照）。

##  デモンストレーション
---
Xadowストレージを使用すると、電源がオフになってもデータを永続的に保存できます。ここでは、ストレージにデータを書き込み、それを読み取るデモを示します。

**ハードウェアのインストール:**

![](https://files.seeedstudio.com/wiki/Xadow_Storage/img/XadowStorage.jpg)

注意: XadowストレージをXadowメインボードに接続する際には、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填コーナーを、別のモジュールの直角コーナーに接続することです（各Xadowモジュールの4つのコーナーを参照）。

**デモコード:**

```
#include <Wire.h> // I2Cライブラリ
void setup()
{
    char somedata[] = "これはEEPROMからのデータです"; // 書き込むデータ
    Wire.begin(); // 接続を初期化
    Serial.begin(9600);
    i2c_eeprom_write_page(0x51, 0, (byte *)somedata, sizeof(somedata)); // EEPROMに書き込み

    delay(10); // 小さな遅延を追加

    Serial.println("メモリに書き込みました");
}
void loop()
{
    int addr=0; // 最初のアドレス
    byte b = i2c_eeprom_read_byte(0x51, 0); // メモリの最初のアドレスにアクセス

    while (b!=0)
    {
        Serial.print((char)b); // シリアルポートに内容を出力
        addr++; // アドレスを増加
        b = i2c_eeprom_read_byte(0x51, addr); // メモリのアドレスにアクセス
    }
    Serial.println(" ");
    delay(2000);
}
void i2c_eeprom_write_byte( int deviceaddress, unsigned int eeaddress, byte data ) {
    int rdata = data;
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress >> 8)); // MSB
    Wire.write((int)(eeaddress & 0xFF)); // LSB
    Wire.write(rdata);
    Wire.endTransmission();
}

// 注意: アドレスはページアドレスであり、6ビットの終端がラップアラウンドします
// また、データは約30バイトが最大です。Wireライブラリには32バイトのバッファがあります
void i2c_eeprom_write_page( int deviceaddress, unsigned int eeaddresspage, byte* data, byte length ) {
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddresspage >> 8)); // MSB
    Wire.write((int)(eeaddresspage & 0xFF)); // LSB
    byte c;
    for ( c = 0; c < length; c++)
    Wire.write(data[c]);
    Wire.endTransmission();
}
byte i2c_eeprom_read_byte( int deviceaddress, unsigned int eeaddress ) {
    byte rdata = 0xFF;
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress >> 8)); // MSB
    Wire.write((int)(eeaddress & 0xFF)); // LSB
    Wire.endTransmission();
    Wire.requestFrom(deviceaddress,1);
    if (Wire.available()) rdata = Wire.read();
    return rdata;
}
// 30または32バイト以上を一度に読み取らないようにしましょう！
void i2c_eeprom_read_buffer( int deviceaddress, unsigned int eeaddress, byte *buffer, int length ) {
    Wire.beginTransmission(deviceaddress);
    Wire.write((int)(eeaddress >> 8)); // MSB
    Wire.write((int)(eeaddress & 0xFF)); // LSB
    Wire.endTransmission();
    Wire.requestFrom(deviceaddress,length);
    int c = 0;
    for ( c = 0; c < length; c++ )
    if (Wire.available()) buffer[c] = Wire.read();
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
- [Xadow Storage Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip)

- [シリアル EEPROM AT24C256C データシート](https://files.seeedstudio.com/wiki/Xadow_Storage/res/AT24C256C-SSHL-T.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>