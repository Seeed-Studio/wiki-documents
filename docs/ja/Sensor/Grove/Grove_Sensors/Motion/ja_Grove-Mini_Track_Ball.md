---
description: Grove - Mini Track Ball
title: Grove - Mini Track Ball
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Mini_Track_Ball
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mini Track Ballは、アプリケーション向けに実用的なモーション追跡機能モジュールを簡単にプロトタイピングできるようにします。360°検出とクリック検出を高精度かつ迅速な応答で実現しています。内部に**STM32F103C8T6**および**AN48841B**チップを搭載しており、多くのアイデアを具体的なものに変えることができます。また、Groveインターフェースで標準化されているため、プロトタイピングプロセスで多くの作業を省くことができます。

<!-- [![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html)
## 特徴

-   360°および迅速な検出。
-   半透明のクリックボタン。
-   Groveインターフェースで標準化。
-   強力なMCUでアプリケーションを充実。

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::
## アプリケーションアイデア

-   ゲームパッド用の追跡モジュール。
-   ハプティックコントローラー用の追跡モジュール。
-   おもちゃ用の追跡モジュール。

## 仕様

| パラメータ                        | 値                                      |
|----------------------------------|------------------------------------------|
| 動作電圧                         | 3.3V~5.5V (標準値: 5V)                  |
| 動作電流                         | 28 mA (最大動作電流: 40 mA)             |
| 動作温度範囲                     | -25 ~ 75 ℃                              |
| MCU周波数                        | 64 MHz                                   |
| 動作周波数                       | 105±5kHz                                 |
| ホール効果磁場強度範囲           | (0.5) ~ (8) mT                           |
| I2Cアドレス                      | 0x4A                                     |

## ハードウェア概要

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball_Hardware_Overview.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball_Hardware_Overview.jpg" alt="pir" width={600} height="auto" /></p>

- **Groveインターフェース**   
Grove - Mini Track Ballを**Seeeduino**ボードなどのメインコントロールボードに接続します。

- **MCU (STM32F103C8T6)**   
マイクロコントローラー。

- **トラックボール**   
モーションを制御するインターフェース。

## 始め方

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | Grove-Mini_Track_Ball |
|---------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html)|

- **ステップ2.** Grove-Mini_Track_BallをSeeeduinoの**I2C**ポートに接続します。
- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

**ステップ1.** [デモ](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_test.zip)をGithubからダウンロードします。

**ステップ2.** ファイル**Grove - Mini Track ball test.ino**を開きます。

```cpp

#include <Wire.h>

/*---------------------------------------------------------------------------------------//
 * デフォルトデータを定義
 */
#define ReadMode 0
#define WriteMode 1
#define DeAddr 0X4A
#define ConfigValid 0x3a6fb67c


/*---------------------------------------------------------------------------------------//
 * レジスタ用の列挙型を定義
 */
enum MOTION_REG_ADDR
{
  MOTION_REG_UP = 0X00,
  MOTION_REG_DOWN,
  MOTION_REG_LEFT,
  MOTION_REG_RIGHT,
  MOTION_REG_CONFIRM,
  MOTION_REG_NUM
};

enum CONFIG_REG_ADDR
{
  CONFIG_REG_VALID = MOTION_REG_NUM,
  CONFIG_REG_I2C_ADDR = CONFIG_REG_VALID + 4,
  CONFIG_REG_I2C_SPEED,
  CONFIG_REG_LED_MODE = CONFIG_REG_I2C_SPEED + 2,
  CONFIG_REG_LED_FLASH_TIME,
  CONFIG_REG_DATA_CLEAR_TIME = CONFIG_REG_LED_FLASH_TIME + 2,  //CONFIG_REG_LED_FLASH_TIMEは2バイト
  CONFIG_REG_DATA_READ_TIME = CONFIG_REG_DATA_CLEAR_TIME + 2,
  CONFIG_REG_NUM = CONFIG_REG_DATA_READ_TIME + 2
};


/*---------------------------------------------------------------------------------------//
 * LEDワードモードを定義
 */
enum LED_MODE
{
  LED_FLASH_1 = 0X00,
  LED_FLASH_2,
  LED_FLASH_TOGGLE,
  LED_FLASH_ALL,
  LED_ALWAYS_ON_1,
  LED_ALWAYS_ON_2, 
  LED_ALWAYS_ON_ALL,
  LED_ALWAYS_OFF,
  LED_BREATHING_1,
  LED_BREATHING_2,
  LED_BREATHING_ALL,
  LED_MOVE_FLASH,
  LED_MODE_NUM
};



/*---------------------------------------------------------------------------------------//
 * レジスタに1バイトを書き込む
 */
void WriteByte(uint8_t Reg, uint8_t Value)
{
    Wire.beginTransmission(DeAddr); 
    Wire.write(WriteMode); 
    Wire.write(Reg); 
    Wire.write(Value); 
    Wire.endTransmission(); 
}

/*---------------------------------------------------------------------------------------//
 * レジスタにNバイトを書き込む
 */
void WriteNByte(uint8_t Reg , uint8_t * Value , uint8_t len)
{
    Wire.beginTransmission(DeAddr); 
    Wire.write(WriteMode); 
    Wire.write(Reg); 
    for(int i = 0;i<len;i++)
    {
      Wire.write(Value[i]); 
    }
    Wire.endTransmission(); 
}

/*---------------------------------------------------------------------------------------//
 * レジスタに1ワード(4バイト、32ビット)を書き込む。レジスタアドレスは連続している必要があります。
 */
void WriteOneWord(uint8_t Reg, uint32_t Value)
{
  uint8_t tmp[4]={0};
  tmp[0] = (Value>>0)&0XFF;
  tmp[1] = (Value>>8)&0XFF;
  tmp[2] = (Value>>16)&0XFF;
  tmp[3] = (Value>>24)&0XFF;
  WriteNByte(Reg,tmp,4);
}


/*---------------------------------------------------------------------------------------//
 * レジスタに半ワード(2バイト、16ビット)を書き込む。レジスタアドレスは連続している必要があります。
 */
void WriteHalfWord(uint8_t Reg, uint16_t Value)
{
  uint8_t tmp[2]={0};
  tmp[0] = (Value>>0)&0XFF;
  tmp[1] = (Value>>8)&0XFF;
  WriteNByte(Reg,tmp,2);
}

/*---------------------------------------------------------------------------------------//
 * レジスタから1バイトを読み取る
 */
 uint8_t ReadByte(uint8_t Reg)
 {
    Wire.beginTransmission(DeAddr); 
    Wire.write(ReadMode); 
    Wire.write(Reg); 
    Wire.write(1); 
    Wire.endTransmission(); 
    Wire.requestFrom(DeAddr, 1);  
    return Wire.read();
 }
 /*---------------------------------------------------------------------------------------//
 * レジスタから半ワードを読み取る
 */
 uint16_t ReadHalfWord(uint8_t Reg)
 {
   uint16_t tmp;
   tmp = ReadByte(Reg);
   tmp |= ((uint16_t)ReadByte(Reg+1))<<8;
   return tmp;
 }
 /*---------------------------------------------------------------------------------------//
 * レジスタから1ワードを読み取る
 */
 uint32_t ReadOneWord(uint8_t Reg)
 {
   uint32_t tmp;
   tmp = ReadByte(Reg);
   tmp |= ((uint32_t)ReadByte(Reg+1))<<8;
   tmp |= ((uint32_t)ReadByte(Reg+2))<<16;
   tmp |= ((uint32_t)ReadByte(Reg+3))<<24;
   return tmp;
 }

/*---------------------------------------------------------------------------------------//
 * LEDモードを設定する。列挙型LED_MODEを参照。
 */
void SetLedMode(uint8_t LED_MODE)
{
  WriteByte(CONFIG_REG_LED_MODE,LED_MODE);
}

/*---------------------------------------------------------------------------------------//
 * テストAPI。LEDモードを循環的に設定する。列挙型LED_MODEを参照。
 */
void test_SetLedMode(void)
{
  unsigned char tmp[8]={0};
  for(int i=0;i<LED_MODE_NUM;i++)
  {
     //WriteByte(CONFIG_REG_LED_MODE,(enum LED_MODE)i);
     tmp[0] = i;
     WriteNByte(CONFIG_REG_LED_MODE ,tmp , 1);
     delay(5000);
  }
}

/*---------------------------------------------------------------------------------------//
 * テストAPI。トラックボールデータを表示する。
 */
void test_PrintTrackData(void)
{
  for(int i=0;i<500;i++)
  {
    Serial.print(ReadByte(MOTION_REG_UP));
    Serial.print("-");
    Serial.print(ReadByte(MOTION_REG_DOWN));
    Serial.print("-");
    Serial.print(ReadByte(MOTION_REG_LEFT));
    Serial.print("-");
    Serial.print(ReadByte(MOTION_REG_RIGHT));
    Serial.print("-");
    Serial.println(ReadByte(MOTION_REG_CONFIRM));
    delay(100);
  }
}

/*---------------------------------------------------------------------------------------//
 * テストAPI。レジスタを書き込む。
 */
void test_WriteReg(void)
{ 
  unsigned char tmp[8]={0};
  tmp[0] = 0X4A;
  WriteByte(CONFIG_REG_I2C_ADDR ,tmp[0]);
  delay(100);
  tmp[0] = 0X64;
  tmp[1] = 0X00;
  WriteByte(CONFIG_REG_I2C_SPEED ,tmp[0]);
  WriteByte(CONFIG_REG_I2C_SPEED+1 ,tmp[1]);
  delay(100);
  tmp[0] = 10;
  WriteByte(CONFIG_REG_LED_MODE ,tmp[0]);
  delay(100);
  tmp[0] = 0xc8;
  tmp[1] = 0x00;
  WriteByte(CONFIG_REG_LED_FLASH_TIME ,tmp[0]);
  WriteByte(CONFIG_REG_LED_FLASH_TIME+1 ,tmp[1]);
  delay(100);
  tmp[0] = 0XEA;
  tmp[1] = 0X14;
  WriteByte(CONFIG_REG_DATA_CLEAR_TIME ,tmp[0]);
  WriteByte(CONFIG_REG_DATA_CLEAR_TIME+1 ,tmp[1]);
  delay(100);
  tmp[0] = 0X22;
  tmp[1] = 0X05;
  WriteByte(CONFIG_REG_DATA_READ_TIME ,tmp[0]);
  WriteByte(CONFIG_REG_DATA_READ_TIME+1 ,tmp[1]);
  delay(1000);
  Serial.println("設定された値は以下の通りです");
  Serial.print("valid:0x");Serial.print(ReadByte(CONFIG_REG_VALID+3),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+2),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+1),HEX);Serial.println(ReadByte(CONFIG_REG_VALID+0),HEX);
  Serial.print("I2C_ADDR:0x");Serial.println(ReadByte(CONFIG_REG_I2C_ADDR+0),HEX);
  Serial.print("I2C_SPEED:0x");Serial.print(ReadByte(CONFIG_REG_I2C_SPEED+1),HEX);Serial.println(ReadByte(CONFIG_REG_I2C_SPEED+0),HEX);
  Serial.print("LED_MODE:0x");Serial.println(ReadByte(CONFIG_REG_LED_MODE+0),HEX);
  Serial.print("LED_FLASH_TIME:0x");Serial.print(ReadByte(CONFIG_REG_LED_FLASH_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_LED_FLASH_TIME+0),HEX);
  Serial.print("DATA_CLEAR_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+0),HEX);
  Serial.print("DATA_READ_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_READ_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_READ_TIME+0),HEX);
  Serial.println();Serial.println();Serial.println();
  delay(3000);
  
}


/*---------------------------------------------------------------------------------------//
 * テストAPI。すべての設定をデフォルト値に設定する。
 */
void test_SetDefault(void)
{ 
  unsigned char Zero[]={0,0,0,0};
  Serial.println("デフォルト値を設定中");
  WriteNByte(CONFIG_REG_VALID , Zero , 4);
  delay(100);
  Serial.println("デフォルト値は以下の通りです");
  Serial.print("valid:0x");Serial.print(ReadByte(CONFIG_REG_VALID+3),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+2),HEX);Serial.print(ReadByte(CONFIG_REG_VALID+1),HEX);Serial.println(ReadByte(CONFIG_REG_VALID+0),HEX);
  Serial.print("I2C_ADDR:0x");Serial.println(ReadByte(CONFIG_REG_I2C_ADDR+0),HEX);
  Serial.print("I2C_SPEED:0x");Serial.print(ReadByte(CONFIG_REG_I2C_SPEED+1),HEX);Serial.println(ReadByte(CONFIG_REG_I2C_SPEED+0),HEX);
  Serial.print("LED_MODE:0x");Serial.println(ReadByte(CONFIG_REG_LED_MODE+0),HEX);
  Serial.print("LED_FLASH_TIME:0x");Serial.print(ReadByte(CONFIG_REG_LED_FLASH_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_LED_FLASH_TIME+0),HEX);
  Serial.print("DATA_CLEAR_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_CLEAR_TIME+0),HEX);
  Serial.print("DATA_READ_TIME:0x");Serial.print(ReadByte(CONFIG_REG_DATA_READ_TIME+1),HEX);Serial.println(ReadByte(CONFIG_REG_DATA_READ_TIME+0),HEX);
  Serial.println();Serial.println();Serial.println();
  delay(3000);
}

void setup() {
 
 Wire.begin();
 Serial.begin(115200);
}

void loop() {

  test_SetLedMode();

  test_PrintTrackData();

 test_WriteReg();  

 test_SetDefault();
 
 delay(3000);
}

```

**ステップ 3.** Seeeduino ボードにコードをアップロードします。アップロードプロセスが完了したら、**ツール**メニューの **シリアルモニター** をクリックしてシリアルモニターウィンドウを開きます。

**ステップ 4.** トラックボールの下にある LED インジケーターが異なるモードで点灯し、約 50 秒間続きます。

**ステップ 5.** その後、トラックボールを回転させたり「クリック」したりして、その軌跡に関する情報を取得できます。


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[Eagle]** [Grove-Mini Track ball v1.0 回路図](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_Eagle.zip)
- **[PDF]** [Grove-Mini Track ball v1.0 回路図](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_PDF.zip)
- **[データシート]** [STM32F103C8T6 データシート](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/STM32F03C8T6.pdf)
- **[データシート]** [AN48841B データシート](http://www.semicon.panasonic.co.jp/ds4/AN48841B_E.pdf)
- **[ライブラリ]** [Github のライブラリファイル](https://github.com/Seeed-Studio/Grove_Mini_Track_Ball)

## 技術サポート & 製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
