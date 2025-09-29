---
description: Xadow - Grove アダプタ
title: Xadow - Grove アダプタ
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Grove_Adaptor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/X_adaptor_01.jpg) 

Xadow Grove アダプタは、Grove インターフェースを Xadow インターフェースに変換し、Xadow システムと互換性を持たせるデバイスです。このアダプタは以下の機能を実現します：2つのアナログ Grove インターフェースからのアナログ信号を ADC を介して Xadow I2C バスに出力します。また、Grove I2C インターフェースからの信号は変換なしで直接 Xadow I2C バスに送られます。A/D 変換は 12ビット精度の ADC、ADCC121C021 に基づいており、高精度を実現します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Adaptor-p-1624.html)

##  仕様
---
*   動作電圧： 3.3V

*   A/D 解像度：12 ビット

*   サンプルレート： 188.9 ksps

*   I2C アドレス可変

*   寸法: 25.43mm x 20.35mm

##  デモンストレーション
---
次に、Xadow Grove アダプタを使用して Grove モジュールの出力値を読み取る方法を説明します。

**アナログ信号の測定**

アナログ信号を出力する Grove モジュールを測定する場合、Grove モジュールを「A0」および「A1」とマークされたアナログ Grove インターフェースに接続する必要があります。

**ハードウェアの接続は以下のようになります：**

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor2.jpg)

ここでは、アナログ信号を出力する Grove - ガスセンサーが A0 に接続されているため、テストコードで使用する I2C アドレスは 0x58（デフォルト）です。つまり、Grove - ガスセンサーが A1 インターフェースに接続されている場合、I2C アドレスは 0x59 になります。

**テストコードは以下の通りです：**
```
<pre>
#include <Wire.h>
#include <Streaming.h>

#define ADDR_ADC121             0x58

#define V_REF 3.00

#define REG_ADDR_RESULT         0x00
#define REG_ADDR_ALERT          0x01
#define REG_ADDR_CONFIG         0x02
#define REG_ADDR_LIMITL         0x03
#define REG_ADDR_LIMITH         0x04
#define REG_ADDR_HYST           0x05
#define REG_ADDR_CONVL          0x06
#define REG_ADDR_CONVH          0x07

unsigned int getData;
float analogVal=0;         // 変換
void init_adc()
{
    Wire.beginTransmission(ADDR_ADC121);        // デバイスに送信
    Wire.write(REG_ADDR_CONFIG);                // 設定レジスタ
    Wire.write(0x20);
    Wire.endTransmission();
}

void read_adc()     //unsigned int *data
{

    Wire.beginTransmission(ADDR_ADC121);        // デバイスに送信
    Wire.write(REG_ADDR_RESULT);                // 結果を取得
    Wire.endTransmission();

    Wire.requestFrom(ADDR_ADC121, 2);           // デバイスから2バイト要求
    delay(1);
    if(Wire.available()<=2)
    {
        getData = (Wire.read()&0x0f)<<8;
        getData |= Wire.read();
    }
    Serial.print("getData:");
    Serial.println(getData);
    delay(5);
    Serial.print("アナログ値は:");
    Serial.print(getData*V_REF*2/4096);
    Serial.println("V");
}
void setup()
{
    Serial.begin(9600);
    Wire.begin();
    init_adc();
}

void loop()
{
    read_adc();//adcRead);
    delay(50);
}</pre>
```
コードを Xadow メインボードにアップロードし、シリアルモニタを開いて出力値を観察します：

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Xadow_Grove_Adaptor_Result.png)

**I2C 信号の測定**

Grove モジュールの通信モードが I2C の場合、Grove モジュールを Xadow Grove アダプタの I2C インターフェースに接続する必要があります。この場合、Xadow Grove アダプタのサーバーは ADC を介さずに Xadow I2C バスに信号を送信します。
Grove - デジタル光センサーを例に、その使用方法を学びましょう。

**ハードウェアの接続：**

![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor1.jpg)


**コードをダウンロード：**

<!-- *   Grove - デジタル光センサーの[Digital_Light_Library](https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor)をGithubからダウンロードし、Arduino ライブラリにインストールしてください。インストール方法については、wiki ページの[Arduino ライブラリのインストール方法](/ja/How_to_install_Arduino_Library)を参照してください。
*   インストールが完了したらコードを開きます。 -->

```
<pre>
/* デジタル光センサー デモ V1.0
* センサーを Arduino の I2C ポートに接続して使用します。
*
* By:https://www.seeedstudio.com
*/
#include <Wire.h>
#include <Digital_Light_TSL2561.h>
void setup()
{
  Wire.begin();
  Serial.begin(9600);
  TSL2561.init();
}

void loop()
{
  unsigned long  Lux;
  TSL2561.getLux();
  Serial.print("光の値は: ");
  Serial.println(TSL2561.calculateLux(0,0,1));
  delay(1000);
  }</pre>
```

*   シリアルモニタを開いて LUX 値を観察します。周囲の光の強度を人工的に変化させると、出力値の明らかな変化が確認できます。


![](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Digital_Light_Sensor_Score_Picture.jpg)

<!-- Xadow Grove アダプタで使用されている ADC IC ADC121C021 は、Grove - I2C ADC にも採用されています。もちろん、I2C アドレスを変更する方法は同じです。Grove - I2C ADC の[参考部分](/ja/Grove-I2C_ADC#Reference)を参照して、変更方法を確認してください。また、基板上の「0」と「1」は A0 インターフェースのアドレス変更エリア、「2」と「3」は A1 インターフェースのアドレス変更エリアです。 -->

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
*   [Xadow Grove アダプタ Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip)

*   [A/DC IC ADC121C021 データシート](https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip)

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