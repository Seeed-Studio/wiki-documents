---
title: Grove - I2C FM 接收器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-I2C_FM_Receiver/
slug: /cn/Grove-I2C_FM_Receiver
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_FM_Receiver/img/Grove-I2C_FM_Receiver_Photo.jpg)

Grove - I2C FM接收器是一个宽带FM接收模块，该模块基于RDA5807M芯片。RDA5807M系列是最新一代单芯片广播FM立体声收音机调谐器，具有完全集成的合成器。RDA5807M系列具有强大的低中频数字音频处理器。Grove - I2C FM接收器具有耳机插孔，因此可以连接到耳机或音频设备。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html)

## 版本

版本|变更|发布日期
---|---|---
Grove - I2C FM Receiver v1.0   | 初始版本 | 2017年5月18日
Grove - I2C FM Receiver v1.1  | 更改了一些组件以使电路板更稳定|2018年4月17日

## 特性

- Grove接口
- 支持全球频段：50 - 115MHz
- 支持RDS/RBDS
- 低功耗
- 耳机接口
- 数字自动增益控制
- 输入电压：3.3V - 5V

:::tip
    有关Grove模块的更多详情，请参阅[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述支持的平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

:::note
    如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - I2C FM Receiver v1.1 |Grove - Button x 2| Grove - Rotary Angle Sensor|
|--------------|-------------|-----------------|-------|--------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_FM_Receiver_v1.1/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_FM_Receiver/img/bgpush%20_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_FM_Receiver/img/rotary_s.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html" target="_blank">立即获取</a>|[立即获取](https://www.seeedstudio.com/Grove-Button-p-766.html)|[立即获取](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|

:::note
    **1** 请轻轻插入USB电缆，否则可能会损坏端口。请使用内部带有4根线的USB电缆，2根线的电缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

    **2** 购买时每个Grove模块都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买
:::

- **步骤1.** 将Grove - I2C FM接收器连接到Grove-Base Shield的**IIC**端口。

- **步骤2.** 将Grove - Button 1连接到**D2**端口，将Grove - Button 2连接到**D3**端口。

- **步骤3.** 将Grove - Base Shield插入Seeeduino。

- **步骤4.** 通过USB电缆将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-I2C_FM_Receiver_v1.1/img/connect.jpg)

:::note
 如果我们没有Grove Base Shield，我们也可以直接将Grove - 温湿度传感器Pro连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove - I2C FM Receiver v1.1 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| SDA            | 白色                   |
| SCL            | 黄色                  |

| Seeeduino       | Grove - Button 1 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| Null            | 白色                   |
| D2           | 黄色                  |

| Seeeduino       | Grove - Button 2 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| Null            | 白色                   |
| D3           | 黄色                  |

| Seeeduino       | Grove - Rotary Angle Sensor |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| Null            | 白色                   |
| A0           | 黄色                  |

#### 软件

- **步骤1.** 下载[Grove-I2C FM接收器库](https://github.com/mathertel/Radio/)，然后安装库。

- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为Arduino安装库。

- **步骤3.** 将以下代码复制到您的Arduino IDE中，然后保存并编译。

```cpp

/*
 * I2C_FM.ino
 * Grove-I2C_FM_Receiver模块的演示代码
 *
 * Copyright (c) 2012 seeed technology inc.
 * Author     : Jack Shao (jacky.shaoxg@gmail.com)
 * Create Time: Jul 2014
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
//
/*
 * I2C_FM.ino的修改版本，由Mel Patrick - Wabbit Wanch Design修改
 * 修改了在FM频段中向上或向下扫描的例程
 * 修改了测试接收电台信号强度的例程
 * 修改了支持低音增强和单声道信号的例程
 * RSSI，在设置电台后过早读取会得到一个小值
 * 所以最好等一下（50ms）再尝试。minSignalStrength将
 * 跳过锁定信号弱的电台（您可以设置MONO位）以获得
 * 这些电台的更好接收。
 */
#include <Arduino.h>
#include <Wire.h>
#include <EEPROM.h>

#define BTNUP          2// 用于向上搜索（常闭按钮）
#define VOL_POT        A0// 音量电位计 对数锥度 10K
#define BTNDN          3// 用于向下搜索（常闭按钮）

uint16_t gChipID = 0;
uint8_t RDA5807P_REGW[10];

#define I2C_ADDR       0x10

#define READ         1
#define WRITE         0

#define ADRW          0x20
#define ADRR          0x21
//

//#define                 _SHARE_CRYSTAL_24MHz_
//#define                 _SHARE_CRYSTAL_12MHz_
#define                 _SHARE_CRYSTAL_32KHz_
//#define                 _FM_STEP_50K_

//5807M,5807FP,5807NN,5807NP
uint8_t RDA5807N_initialization_reg[]={
#if defined(_SHARE_CRYSTAL_24MHz_)
  0xC4, 0x51, //02H:
#elif defined(_SHARE_CRYSTAL_12MHz_)
  0xC4, 0x11, //02H:
#elif defined(_SHARE_CRYSTAL_32KHz_)
  0xC4, 0x01,//将01改为05启用RDS/RBDS
#else
  0xC0, 0x01,
#endif
  0x00, 0x00,
  0x04, 0x00,
  0xC3, 0xad,  //05h
  0x60, 0x00,
  0x42, 0x12,
  0x00, 0x00,
  0x00, 0x00,
  0x00, 0x00,  //0x0ah
  0x00, 0x00,
  0x00, 0x00,
  0x00, 0x00,
  0x00, 0x00,
  0x00, 0x00,
  0x00, 0x00,  //0x10h
  0x00, 0x19,
  0x2a, 0x11,
  0xB0, 0x42,
  0x2A, 0x11,  //
  0xb8, 0x31,  //0x15h
  0xc0, 0x00,
  0x2a, 0x91,
  0x94, 0x00,
  0x00, 0xa8,
  0xc4, 0x00,  //0x1ah
  0xF7, 0xcF,
  0x12, 0x14,  //0x1ch
  0x80, 0x6F,
  0x46, 0x08,
  0x00, 0x86,  //10000110
  0x06, 0x61,  //0x20H
  0x00, 0x00,
  0x10, 0x9E,
  0x23, 0xC8,
  0x04, 0x06,
  0x0E, 0x1C,  //0x25H     //0x04 0x08
};

int16_t freq = 10110;
uint16_t vol = 1;
//
// 添加的项目 - Mel
boolean bassBit = true;// 低音增强
boolean monoBit = false;// 强制单声道而非立体声
const boolean seekUP = true;
const boolean seekDN = false;
uint8_t minSignalStrength = 36;// 低于此值的信号可能需要设置单声道标志以获得更好的接收
uint8_t signalStrength;
long previousMillis = 0;// 上次调用函数的时间
long interval = 2000;// 信号强度函数的间隔（2秒）
int8_t stationStep = 10;// 电台之间的kHz步长（北美 = 10）
boolean hasVolumePot = true;// 标志是否连接了电位计
//
void setup()
{
  Wire.begin();
  loadDefaults();// 加载之前电台设置的默认值
  Serial.begin(9600);
  Serial.println("已启动");
  //=======================
  //rda5807上电
  RDA5807P_PowerOnReset();
  RDA5807P_SetMute(false);

  //=======================
  pinMode(BTNUP, INPUT_PULLUP);
  pinMode(VOL_POT, INPUT);
  pinMode(BTNDN, INPUT_PULLUP);
  //=======================
  RDA5807P_SetVolumeLevel(vol);// 如果没有连接音量电位计，请使用此选项（0-15）
  RDA5807P_SetFreq( freq );
}

void loop()
{
  unsigned long currentMillis = millis();

  if(currentMillis - previousMillis > interval) {
    // 保存上次闪烁LED的时间
    previousMillis = currentMillis;
    showSignalStrength();
  }
  //
  if (digitalRead(BTNUP) == 1)
  {
    delay(100);
    if (digitalRead(BTNUP) == 1)
      fmSeek(seekUP);
    while(digitalRead(BTNUP) == 1);
  }
  if (digitalRead(BTNDN) == 1)
  {
    delay(100);
    if (digitalRead(BTNDN) == 1)
      fmSeek(seekDN);
    while(digitalRead(BTNDN) == 1);
  }
  if (hasVolumePot == true) setVolume();// 使用此选项读取电位计
}
//
void setVolume() {
  unsigned int temp_vol;
  temp_vol = analogRead( VOL_POT );
  if (abs(temp_vol - vol)>5)
  {
    if (vol != temp_vol) {// 除非电位计移动，否则不用改变音量
      vol = temp_vol;
      unsigned char hex_vol = map(vol, 0, 1023, 0, 0xf);
      RDA5807P_SetVolumeLevel(hex_vol);
      saveDefaults();// 将新音量保存到EEPROM
    }
  }
}
//
void fmSeek(boolean theDir) {
  int signalStrength;
  if (!theDir) {
    Serial.println("开始向下搜索...");
  }
  else
  {
    Serial.println("开始向上搜索...");
  }
  do {
    do{
      if (theDir == seekUP) {
        freq += stationStep;
      }
      else
      {
        freq -= stationStep;
      }
      if (freq > 10800) freq = 8800;
      if (freq < 8800) freq = 10800;
      //Serial.println(freq);
    }
    while(!RDA5807P_ValidStop(freq));
    delay(50);
    signalStrength = RDA5807P_GetSigLvl(freq);// 根据数据表最大值为63，但我见过更多
  }
  while (signalStrength < minSignalStrength);// 最小信号强度，继续寻找
  showRadioStation();
  saveDefaults();// 将新电台选择保存到EEPROM
}
//
void showRadioStation() {
  Serial.print("稳定频率:");
  Serial.print(((float)freq)/100.0f);
  Serial.println("MHz");
}
//
void showSignalStrength() {
  signalStrength = RDA5807P_GetSigLvl(freq);// 最大值为63...如上所述
  Serial.print("信号强度: ");
  Serial.println(signalStrength);
}

//===========================================================
// FM函数
//===========================================================
unsigned char OperationRDAFM_2w(unsigned char operation, unsigned char *data, int numBytes)
{
  if(operation == READ)
  {
    Wire.requestFrom(I2C_ADDR, numBytes);
    for(int i=0;i<numBytes;i++)
    {
      *data++ = Wire.read();
    }
  }
  else
  {
    Wire.beginTransmission(I2C_ADDR);
    for(int i=0;i<numBytes;i++)
    {
      Wire.write(*data++);
    }
    Wire.endTransmission();
  }
  return 0;
}


/**
 * @brief 在RDA5807P上电时重置RDA5807P
 * @author RDA RDA Ri'an Zeng
 * @date 2008-11-05
 * @param void
 * @return void
 * @retval
 */
void  RDA5807P_PowerOnReset(void)
{
  RDA5807P_Intialization();
}

/**
 * @brief RDA5807P断电功能
 * @author RDA Ri'an Zeng
 * @date 2008-11-05
 * @param void
 * @return void
 * @retval
 */
void  RDA5807P_PowerOffProc(void)
{
  RDA5807P_REGW[1] &= (~1);
  OperationRDAFM_2w(WRITE, &(RDA5807P_REGW[0]), 2);
}

/**
 * @brief 将RDA5807P设置为静音模式
 * @author RDA Ri'an Zeng
 * @date 2008-11-05
 * @param bool mute: 如果mute为true，则设置静音；如果mute为false，则设置非静音
 * @return void
 * @retval
 */
void RDA5807P_SetMute(boolean mute)
{
  if(mute)
    RDA5807P_REGW[0] &=  ~(1<<6);
  else
    RDA5807P_REGW[0] |= 1<<6;
  RDA5807P_REGW[0] |= monoBit<<5;
  RDA5807P_REGW[0] |= bassBit<<4;
  OperationRDAFM_2w(WRITE, &(RDA5807P_REGW[0]), 2);//RDA5807M_REGW
  delay(50);    //延迟50毫秒
}
//
/*************************************************
 * @brief 设置频率功能
 * @author RDA Ri'an Zeng
 * @date 2008-11-05
 * @param int16_t curFreq:频率值
 * @return void
 * @retval
 ***********************************************/
void RDA5807P_SetFreq(int16_t curFreq)
{
  uint16_t curChan;
  curChan=RDA5807P_FreqToChan(curFreq);

  if((curFreq >= 6500)&&(curFreq < 7600))
  {
    RDA5807P_REGW[3] = 0x0c;
  }
  else if((curFreq >= 7600)&&(curFreq < 10800))
  {
    RDA5807P_REGW[3] = 0x08;// 设置BAND位（00xx = 87-108，01xx=76-91，10xx=76-108，11xx=65-76
    // 对于北美，由于某种未知原因，这必须设置为10xx
  }
  //SetNoMute
  RDA5807P_REGW[0] |= 1<<6;
  RDA5807P_REGW[0] |= monoBit<<5;
  RDA5807P_REGW[0] |= bassBit<<4;
  //handleBits();
  RDA5807P_REGW[2]=curChan>>2;
  RDA5807P_REGW[3]=(((curChan&0x0003)<<6)|0x10) | (RDA5807P_REGW[3]&0x0f);    //设置调谐位

  OperationRDAFM_2w(WRITE, &(RDA5807P_REGW[0]), 4);
  delay(50);     //延迟5毫秒
  showRadioStation();
}
//
/**
 * @brief 自动搜索的电台判断
 * @在自动搜索模式下，使用此功能判断频率是否有电台
 * @author RDA Ri'an Zeng
 * @date 2008-11-05
 * @param int16_t freq:频率值
 * @return bool: 如果返回true，该频率有真实电台；否则没有电台
 * @retval
 */
boolean RDA5807P_ValidStop(int freq)
{
  uint8_t RDA5807P_reg_data[4]={
    0                                                  };
  uint8_t falseStation = 0;
  uint8_t i=0;
  uint16_t curChan;

  if((freq >= 6500)&&(freq < 7600))
  {
    RDA5807P_REGW[3] = 0x0c;
  }
  else if((freq >= 7600)&&(freq < 10800))
  {
    RDA5807P_REGW[3] = 0x08;// 设置BAND位（00xx = 87-108，01xx=76-91，10xx=76-108，11xx=65-76
    // 对于北美，由于某种未知原因，这必须设置为10xx
  }
  curChan=RDA5807P_FreqToChan(freq);
  //SetNoMute 第9位是搜索方向（0=向下搜索，1=向上搜索）。
  //02H 14
  RDA5807P_REGW[0] |= 1<<6;// 寄存器0是第15位到第8位（这里移位到第14位）
  RDA5807P_REGW[0] |= monoBit<<5;
  RDA5807P_REGW[0] |= bassBit<<4;
  //handleBits();
  RDA5807P_reg_data[0]=RDA5807P_REGW[0];
  RDA5807P_reg_data[1]=RDA5807P_REGW[1];
  RDA5807P_reg_data[2]=curChan>>2;//03H 15:8 CHAN
  RDA5807P_reg_data[3]=(((curChan&0x0003)<<6)|0x10) | (RDA5807P_REGW[3]&0x0f);//
  OperationRDAFM_2w(WRITE,&(RDA5807P_reg_data[0]), 4);

  delay(50);    //延迟25毫秒

  if (0x5808 == gChipID)
    OperationRDAFM_2w(READ,&(RDA5807P_reg_data[0]), 4); //
  else
  {
    do
    {
      i++;
      if(i>5) return 0;

      delay(30);
      //读取REG0A&0B
      OperationRDAFM_2w(READ,&(RDA5807P_reg_data[0]), 4);
    }
    while((RDA5807P_reg_data[0]&0x40)==0);
  }

  //检查FM_TRUE
  if((RDA5807P_reg_data[2] &0x01)==0) falseStation=1;//0B 8  FM TRUE

  if(freq==9600) falseStation=1;// 北美 - 如果向下扫描，收音机会因某种原因锁定在9600！
  delay(50);
  if (falseStation==1)
    return 0;
  else
    return 1;
}

/**
 * @brief 获取当前频率的信号强度（RSSI）
 * @author RDA Ri'an Zeng
 * @date 2008-11-05
 * @param int16_t curf:频率值
 * @return uint8_t: 信号强度（RSSI）
 * @retval
 */
uint8_t RDA5807P_GetSigLvl( int16_t curf )
{
  uint8_t RDA5807P_reg_data[4]={
    0                                                  };
  OperationRDAFM_2w(READ,&(RDA5807P_reg_data[0]), 4);
  delay(50);    //延迟50毫秒
  return  (RDA5807P_reg_data[2]>>1);  /*??rssi*/
}

/**
 * @brief 设置FM音量
 * @最好使用系统音量操作来替换此功能
 * @author RDA Ri'an Zeng
 * @date 2008-11-05
 * @param uint8_t level: 音量值
 * @return void
 * @retval
 */
void RDA5807P_SetVolumeLevel(uint8_t level)
{
  uint8_t RDA5807P_reg_data[8];
  uint8_t i = 0;

  for (i=0;i<8;i++)
    RDA5807P_reg_data[i] = RDA5807P_REGW[i];

  RDA5807P_reg_data[7]=(( RDA5807P_REGW[7] & 0xf0 ) | (level & 0x0f));

  RDA5807P_reg_data[3] &= (~(0x10));//禁用调谐

  OperationRDAFM_2w(WRITE, &(RDA5807P_reg_data[0]), 8);
  delay(50);    //延迟50毫秒
}

/**
 * @brief 初始化RDA5807P
 * @author RDA Ri'an Zeng
 * @date 2008-11-05
 * @param void
 * @return bool:如果为true，操作成功；否则失败
 * @retval
 **/
boolean  RDA5807P_Intialization(void)
{
  uint8_t error_ind = 0;
  uint8_t RDA5807P_REGR[10]={
    0x0                                                  };
  uint8_t i = 0;

  RDA5807P_REGW[0] = 0x00;
  RDA5807P_REGW[0] |= monoBit<<5;
  RDA5807P_REGW[0] |= bassBit<<4;
  RDA5807P_REGW[1] = 0x02;

  error_ind = OperationRDAFM_2w(WRITE, (uint8_t *)&RDA5807P_REGW[0], 2);//软复位
  delay(50);

  error_ind = OperationRDAFM_2w(READ, (uint8_t *)&RDA5807P_REGR[0], 10);
  delay(50);

  gChipID = RDA5807P_REGR[8];
  gChipID = ((gChipID << 8) | RDA5807P_REGR[9]);

  Serial.print("芯片ID: 0x");
  Serial.println(gChipID, HEX);

  for (i=0;i<8;i++) {
    RDA5807P_REGW[i] = RDA5807N_initialization_reg[i];
  }

  error_ind = OperationRDAFM_2w(WRITE, (uint8_t *)&RDA5807N_initialization_reg[0], 2); //上电
  delay(600);
  //Serial.println(sizeof(RDA5807N_initialization_reg));
  error_ind = OperationRDAFM_2w(WRITE, (uint8_t *)&RDA5807N_initialization_reg[0], sizeof(RDA5807N_initialization_reg));

  delay(50);         //延迟50毫秒

  if (error_ind )
    return 0;
  else
    return 1;
}
//
/**
 * @brief 将频率转换为频道值
 * @author RDA Ri'an Zeng
 * @date 2008-11-05
 * @param uint16 frequency:转换的频率
 * @return uint16: 频道值
 * @retval
 * 在美国，调频广播电台在从87.8 MHz到108.0 MHz的频段内工作，
 * 总共20.2 MHz。它被分为101个频道，每个0.2 MHz宽，指定为"频道200"到"频道300"。
 * 在实际应用中，没有人（除了FCC）使用这些频道号；而是使用频率。
 */
uint16_t RDA5807P_FreqToChan(uint16_t frequency) {
  uint8_t channelSpacing = 10;
  uint16_t channel = 0;

  if((frequency >= 6500)&&(frequency < 7600))
  {
    channel = (frequency - 6500)/channelSpacing;
  }
  else if((frequency >= 7600)&&(frequency < 10800))
  {
    channel = (frequency - 7600)/channelSpacing;
  }
  return (channel);
}
//
void loadDefaults() {
  char myCode[9] = "Grove_FM";
  char myInit[9] = "blank123";
  /*
  * EEPROM中的字节映射
   * 8, 9 重启的默认频率
   * 10, 11 收音机的当前预设音量（如果没有连接电位计则使用）
   */
  for (int i=0; i < 8; i++) {
    myInit[i] = EEPROM.read(i);// 读出来看是否已初始化
  }
  if (strcmp(myCode, myInit) == 0) {// 如果这是零（我们之前写过一些），那么读取值
    freq = epReadINT(8);// 从eeprom 8和9读回频率的INT值（一个INT需要两个字节）
    if (!hasVolumePot) vol = epReadINT(10);// 读回音量设置，但除非标志为false否则不使用
  }
  else// 我们没有任何默认值，所以必须先保存一些
  {
    for (int i=0; i < 8; i++) {
      EEPROM.write(i, myCode[i]);// 将此写入EEPROM以显示我们已保存
    }
    saveDefaults();// 写入当前默认设置
  }
}
//
void saveDefaults() {
  epWriteINT(8, freq);// 写入重启用的INT的两个字节
  epWriteINT(10, vol);// 写入当前音量电位计设置
}
//
void epWriteINT(int where, int theVal) {
  union uData
  {
    byte stuff[2];
    int f1;// 2字节内存
  }
  u;
  u.f1 = theVal;// 复制到联合体
  for (int j=0; j < 2; j++) {// 现在我们必须写出2字节内存
    EEPROM.write(where + j, u.stuff[j]);// 写入EEPROM
  }
}
//
long epReadINT(int where) {
  union uData
  {
    byte stuff[2];
    int f1;// 2字节内存
  }
  u;
  for (int j=0; j < 2; j++) {
    u.stuff[j]=EEPROM.read(where + j);// 读回此内存位置的2个字节
  }
  return u.f1;
}
//
void epWriteLong(int where, long theVal) {
  union uData
  {
    byte stuff[4];
    long f1;// 4字节内存
  }
  u;
  u.f1 = theVal;// 复制到联合体
  for (int j=0; j < 4; j++) {// 现在我们必须写出4字节内存
    EEPROM.write(where + j, u.stuff[j]);// 写入EEPROM
  }
}
//
long epReadLong(int where) {
  union uData
  {
    byte stuff[4];
    long f1;// 4字节内存
  }
  u;
  for (int j=0; j < 4; j++) {
    u.stuff[j]=EEPROM.read(where + j);// 读回此内存位置的4个字节
  }
  return u.f1;
}
```

- **步骤4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤5.** 通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按++ctrl+shift+m++键。如果一切正常，您将得到结果。

结果应该是这样的：

```

已启动
芯片ID: 0x5808
稳定频率:102.60MHz
信号强度: 46
信号强度: 46
信号强度: 45
信号强度: 45
信号强度: 45
信号强度: 45
开始向下搜索...
稳定频率:94.00MHz
信号强度: 44
信号强度: 51
信号强度: 51
信号强度: 50
信号强度: 50
信号强度: 51


```

现在您可以收听FM电台了，您可以按下`Grove- button 1`和`Grove- button 2`来更换电台。您可以旋转`Grove - Rotary Angle Sensor`来调节音量。

玩得开心~

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_FM_Receiver/res/Grove_I2C_FM_Receiver_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - I2C FM Receiver v1.0 Eagle文件](https://files.seeedstudio.com/wiki/Grove-I2C_FM_Receiver/res/Grove_I2C_FM_Receiver_v1.0.zip)
- **[PDF]** [RDA5807数据表](https://files.seeedstudio.com/wiki/Grove-I2C_FM_Receiver_v1.1/res/RDA5807%20Datasheet.pdf)

<!-- 此Markdown文件是从https://www.seeedstudio.com/wiki/Grove_-_I2C_FM_Receiver创建的 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
