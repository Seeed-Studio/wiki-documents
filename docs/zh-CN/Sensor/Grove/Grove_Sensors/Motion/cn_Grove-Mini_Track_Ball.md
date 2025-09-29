---
description: Grove - 迷你轨迹球
title: Grove - 迷你轨迹球
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Mini_Track_Ball
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 迷你轨迹球将为您的应用程序提供一个易于访问的实用运动跟踪功能模块原型。它具有360°检测和点击检测功能，精度高，响应快。内置**STM32F103C8T6**和**AN48841B**芯片，您可以将大量想法转化为有形的产品。它还采用Grove接口标准化，这将为您在原型制作过程中节省大量工作。

<!-- [![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html)
## 特性


-   360°快速检测。
-   半透明点击按钮。
-   Grove接口标准化。
-   强大的MCU让您丰富应用程序。

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
## 应用想法


-   游戏手柄的跟踪模块。
-   触觉控制器的跟踪模块。
-   玩具的跟踪模块。

## 规格参数


| 参数                        | 值                                    |
|----------------------------------|------------------------------------------|
| 工作电压                | 3.3V~5.5V (典型值5V)                |
| 工作电流                | 28 mA (最大工作电流: 40 mA) |
| 工作温度范围      | -25 ~ 75 ℃                               |
| MCU频率                    | 64 MHz                                   |
| 工作频率              | 105±5kHz                                 |
| 霍尔效应磁场强度范围 | (0.5) ~ (8) mT                           |
| I2C地址                      | 0x4A                                     |

## 硬件概述


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball_Hardware_Overview.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/Grove-Mini_Track_ball_Hardware_Overview.jpg" alt="pir" width={600} height="auto" /></p>

- **Grove接口**   
连接主控板，如**Seeeduino**板与Grove - 迷你轨迹球。

- **MCU (STM32F103C8T6)**   
微控制器。

- **轨迹球**   
控制运动的接口。



## 入门指南

### 与Arduino配合使用

#### 硬件

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | Grove-迷你轨迹球 |
|---------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/depot/Grove-Mini-Track-Ball-p-2586.html)|

- **步骤2.** 将Grove-迷你轨迹球连接到Seeeduino的**I2C**端口。
- **步骤3.** 通过USB线将Seeeduino连接到PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


#### 软件

**步骤1.** 从Github下载[演示程序](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_test.zip)。

**步骤2.** 打开文件**Grove - Mini Track ball test.ino**



```cpp


#include <Wire.h>

/*---------------------------------------------------------------------------------------//
 * define the default data
 */
#define ReadMode 0
#define WriteMode 1
#define DeAddr 0X4A
#define ConfigValid 0x3a6fb67c


/*---------------------------------------------------------------------------------------//
 * define the enum type for Register
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
  CONFIG_REG_DATA_CLEAR_TIME = CONFIG_REG_LED_FLASH_TIME + 2,  //CONFIG_REG_LED_FLASH_TIME has 2bytes
  CONFIG_REG_DATA_READ_TIME = CONFIG_REG_DATA_CLEAR_TIME + 2,
  CONFIG_REG_NUM = CONFIG_REG_DATA_READ_TIME + 2
};


/*---------------------------------------------------------------------------------------//
 * define the LED word mode
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
 * Write one byte into register
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
 * Write N byte into register
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
 * Write one word(4 bytes,32 bits) into register ,the register address must be continuous
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
 * Write half word(2 bytes,16 bits) into register ,the register address must be continuous
 */
void WriteHalfWord(uint8_t Reg, uint16_t Value)
{
  uint8_t tmp[2]={0};
  tmp[0] = (Value>>0)&0XFF;
  tmp[1] = (Value>>8)&0XFF;
  WriteNByte(Reg,tmp,2);
}

/*---------------------------------------------------------------------------------------//
 * Read one byte from register
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
 * Read half word from register
 */
 uint16_t ReadHalfWord(uint8_t Reg)
 {
   uint16_t tmp;
   tmp = ReadByte(Reg);
   tmp |= ((uint16_t)ReadByte(Reg+1))<<8;
   return tmp;
 }
 /*---------------------------------------------------------------------------------------//
 * Read one word from register
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
 * Set LED mode ,reference to the enum type LED_MODE
 */
void SetLedMode(uint8_t LED_MODE)
{
  WriteByte(CONFIG_REG_LED_MODE,LED_MODE);
}

/*---------------------------------------------------------------------------------------//
 * test api ,Set LED mode circularly  ,reference to the enum type LED_MODE 
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
 * test api,print the track ball data
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
 * test api,Write register
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
  Serial.println("Setted Value are over here");
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
 * test api,Set all config to default value
 */
void test_SetDefault(void)
{ 
  unsigned char Zero[]={0,0,0,0};
  Serial.println("Setting Default Value");
  WriteNByte(CONFIG_REG_VALID , Zero , 4);
  delay(100);
  Serial.println("Default Value are over here");
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


**步骤 3.** 将您的代码上传到 Seeeduino 开发板。如果上传过程完成，要打开串口监视器窗口，请点击 **工具** 菜单下的 **串口监视器**。

**步骤 4.** 轨迹球下方的 LED 指示灯将以不同模式点亮，持续约 50 秒

**步骤 5.** 之后您可以旋转或"点击"轨迹球来获取其轨迹信息。


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Eagle]** [Grove-迷你轨迹球 v1.0 原理图](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_Eagle.zip)
- **[PDF]** [Grove-迷你轨迹球 v1.0 原理图](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/Grove-Mini_Track_ball_v1.0_schematic_files_in_PDF.zip)
- **[数据手册]** [STM32F103C8T6 数据手册](https://files.seeedstudio.com/wiki/Grove-Mini_Track_Ball/res/STM32F03C8T6.pdf)
- **[数据手册]** [AN48841B 数据手册](http://www.semicon.panasonic.co.jp/ds4/AN48841B_E.pdf)
- **[库文件]** [Github 上的库文件](https://github.com/Seeed-Studio/Grove_Mini_Track_Ball)

## 技术支持与产品讨论
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>