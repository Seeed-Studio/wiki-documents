---
description: Grove - ORP 传感器套件专业版
title: Grove - ORP 传感器套件专业版
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-ORP-Sensor-Pro
last_update:
  date: 3/2/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - ORP 传感器套件专业版
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 110020370
tags:
--- -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/sensor.jpg"/></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## 介绍

Grove - ORP 传感器套件（HR-O）是一款测量 ORP 值的 Grove 传感器，用于检测液体质量。它配备 5 米 IP68 ORP 探头，提供 -2000mV 至 2000mV 的感测范围，工作温度为 0-80℃，支持 Arduino 编程。该传感器环保且通过 RoHS 认证。

### 特性

- Grove ORP 传感器升级版：配备 5 米 IP68 ORP 探头，提供 -2000 mV 至 2000 mV 感测范围，工作温度为 0-80℃，是易于使用的 Grove 生态系统的成员
- 增强的测量性能：在 0-60°C 下保持 ±15mV 感测精度
- 工作电压：3.3/5V
- 支持 Arduino
- RoHS 认证

### 应用

- 氧化还原反应的监测和控制
- 消毒水检测
- 健康友好型水质检测
- 确定微生物类型
- 检测厌氧微生物活性
- 废水处理
- 水产养殖
- 工业污水排放监测

## 硬件概述

在开始之前，了解产品的一些基本参数是非常重要的。下表提供了 Grove - ORP 传感器套件专业版特性的信息。

| 参数 | 详情 |
|:----------:|:-------:|
| 测量范围 | -2000mV 至 +2000mV |
| 分辨率 | 1 mV |
| 精度 | ±15mV |
| 零电位点(pH) | 7.00±0.30 |
| 斜率因子 | >96% |
| 工作电压 | 3.3V/5V |
| 工作温度 | 0-80℃ |
| **参比系统** |
| 液接界面 | 聚氯乙烯四氯化物 |
| 外壳材料 | PPS |
| 膜电阻 | &lt;500 MQ |
| 线缆长度 | 5 米 |
| 安装方式 | 投入式 |
| 防护等级 | IP68 |
| 电气连接 | BNC |

## 入门指南

### 关于产品

传感器探头上的盖子内填充有氯化钾溶液，用于保护探头。

如果您在收到产品后发现探头护罩周围有白色固体颗粒状晶体，这是正常现象，请不要担心。

白色晶体是由于内部氯化钾溶液在正常储存或运输环境中因温度变化、环境变化或氧化还原而产生的。但是，这不会影响内部氯化钾溶液的性质或传感器的正常工作。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/1.jpg"/></div>

如果您发现了这种情况，请使用湿纸巾轻轻擦拭上面的晶体，请不要让儿童接触以避免意外摄入。

### Grove ORP 传感器套件专业版使用说明

氧化还原电位（ORP）传感器测量水溶液中氧化剂和还原剂的活性。这是一种来自双电极系统的电位测量，类似于 pH 传感器。有时也称为氧化还原测量。与 pH 传感器不同，ORP 传感器测量溶液中所有化学物质的氧化态与还原态的比率。

ORP 传感器由两个电化学半电池组成，其中参比电极通常是 Ag/AgCl，测量电极通常是 Pt。两个电极之间的电位差代表被测溶液的氧化还原电位，可以用能斯特方程描述。

`E = Eo – 2.3 (RT/nF) x (log [Ox] / [Red])`

其中：

- E = 测量电极和参比电极之间产生的总电位
- Eo = 系统特定电压
- R = 气体常数
- T = 开尔文温度
- n = 氧化态和还原态物质之间平衡涉及的电子数
- F = 法拉第常数
- [Ox] = 氧化态物质的浓度
- [Red] = 该物质还原态的浓度

ORP 传感器的输出相对于参比电极。例如，+100 mV 的读数表示电位比参比半电池的电位高 100 mV，表明是氧化环境。同样，-100 mV 的读数表示电位比参比半电池低 100 mV，是还原环境。在某些应用中，氧化还原电位可能报告为 Eh，这是相对于标准氢电极（SHE）的电压读数。通过考虑 ORP 传感器中使用的参比电极的偏移量，可以将电位转换为 Eh 读数。Vernier ORP 传感器使用 Ag/AgCl 饱和 KCl 参比电极。

### 设备安装

在使用 Grove ORP 传感器专业版之前，我们需要将 Grove 板与探头连接。在 Grove 板上，与探头连接处会有两个突出的圆形尖端，将它们与探头连接处的两个凹槽对齐并牢固插入。然后只需沿着凹槽旋转到极限位置即可。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/install.gif"/></div>

:::tip
如果您想要拆卸，只需沿着凹槽向相反方向旋转，然后用力将 Grove 板与探头分离。请注意，手部用力尽量在金属部分，避免用力过大而损坏板子。
<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/uninstall.gif"/></div>

产品包含一个螺母和一个垫片。如果您需要频繁拆卸，我们不建议您安装垫片和螺母，这会使您的拆卸变得困难。
:::

## Arduino / XIAO 示例

接下来，我们将介绍基于 Arduino 平台的 Grove ORP 传感器与 Seeed Studio XIAO 和 Seeeduino 产品的基本使用方法。

**步骤 1.** 启动 Arduino 应用程序。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE 中。

- 如果您想在后续教程中使用 **Seeeduino**，请参考[此教程](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO SAMD21**，请参考[此教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO RP2040**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO nRF52840**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO ESP32C3**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#software-setup)完成添加。

### 在 Seeed Studio XIAO SAMD21 上使用 Grove ORP 传感器 Pro

ORP 的简单工作定义是溶液进行电子转移的能力，称为氧化或还原，以毫伏为单位。ORP 的测量是测量电极和参考电极之间电压电位的读数。根据被测溶液的不同，ORP 电极将充当电子供体或电子受体。ORP 类似于 pH，pH 表示溶液基于溶液内氢离子活性的酸性或碱性程度，而 ORP 表示溶液基于溶液内集体电子活性的还原-氧化状态。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/3.jpg"/></div>

在此示例中，我们使用 XIAO SAMD21 作为主控板，使用 Grove ORP 传感器 Pro 测量可口可乐的 ORP 值。

#### 所需材料

| Seeed Studio XIAO SAMD21 |  Seeed Studio XIAO 扩展底板 | Grove ORP 传感器 Pro |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/></div> | <div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/sensor.jpg"/></div> |
|[**立即购买**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**立即购买**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)| [**立即购买**](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html) |

#### 操作步骤

**步骤 1.** 将 Grove ORP 传感器 Pro 连接到 XIAO 扩展底板。

在此示例中，我们将使用 XIAO 上方的 **A6** 和 **A7** 引脚作为传感器的 **CAL** 和 **SIG** 引脚。请使用 Grove 线缆将 Grove ORP 传感器 Pro 连接到 XIAO 扩展底板的 UART 端口。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/7.png"/></div>

**步骤 2.** 将 Seeed Studio XIAO SAMD21 放在扩展底板上。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png"/></div>

:::note
请先将 Seeed Studio XIAO 插在扩展底板上，然后插入 Type-C，记住将 Seeed Studio XIAO 插入两个母头连接器的中间，否则您会损坏 Seeed Studio XIAO 和扩展底板。
:::

**步骤 3.** 移除探头的保护套。

**此步骤需要特别小心！**

请在移除保护套暴露探头之前，使探头**垂直**朝下，然后慢慢旋转套子来移除探头。在此过程中请不要倾斜，否则里面的氯化钾容易倒出！

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/2.jpg"/></div>

然后将探头完全插入待测液体中。您可以放心，探头和传感器都是防水的，我们特别为您准备了 5 米长的线缆。但请注意，Grove 板不防水，所以请不要将其一起放入液体中。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/5.jpg"/></div>

**步骤 4.** 上传程序。

以下是 Grove ORP 传感器的示例程序。

```cpp
#define VOLTAGE 3.37   //vcc voltage(unit: V)
#define OFFSET 16      //UNUSED - zero drift voltage(unit: mV)
#define LED 13         //operating instructions
#define ArrayLenth  40 //times of collection
#define orpPin A7       //orp meter output,connect to Arduino controller ADC pin
#define calPin A6       //orp cal control pin, get a offset by set it to low

double orpValue; 
// double offset=0.0;
int offset=0;
bool is_calibrated = false;
int wait_count = 5;
int orpArray[ArrayLenth];
int orpArrayIndex=0;

double avergearray(int* arr, int number);

void setup(void) {  
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
  pinMode(calPin,OUTPUT);
  // digitalWrite(calPin, LOW);
  digitalWrite(calPin, HIGH);
}

void loop(void) {
  static unsigned long orpTimer=millis();   //analog sampling interval
  static unsigned long printTime=millis();
  if(millis() >= orpTimer)
  {
    orpTimer=millis()+20;
    orpArray[orpArrayIndex++]=analogRead(orpPin);    //read an analog value every 20ms
    if (orpArrayIndex==ArrayLenth) {
      orpArrayIndex=0;
    }   
    orpValue=((30*(double)VOLTAGE*1000)-(75*avergearray(orpArray, ArrayLenth)*VOLTAGE*1000/1024))/75-offset;
  }
  if(millis() >= printTime)   //Every 800 milliseconds, print a numerical
  {
    if(!is_calibrated) {
      if(wait_count==0){
        offset += (int)orpValue; 
        is_calibrated = true;
        digitalWrite(calPin, LOW);
        Serial.print("offset: ");
        Serial.print((int)offset);
        Serial.println(" mV");
      }
      wait_count--;
    }
    else {
      Serial.print("ORP: ");
      Serial.print((int)orpValue);
      Serial.println(" mV");
      digitalWrite(LED,1-digitalRead(LED)); // convert the state of the LED indicator      
    } 
    printTime=millis()+800;   
  }
}

double avergearray(int* arr, int number){
  int i;
  int max,min;
  double avg;
  long amount=0;
  if(number<=0){
    printf("Error number for the array to avraging!/n");
    return 0;
  }
  if(number<5){   //less than 5, calculated directly statistics
    for(i=0;i<number;i++){
      amount+=arr[i];
    }
    avg = amount/number;
    return avg;
  }else{
    if(arr[0]<arr[1]){
      min = arr[0];max=arr[1];
    }
    else{
      min=arr[1];max=arr[0];
    }
    for(i=2;i<number;i++){
      if(arr[i]<min){
        amount+=min;        //arr<min
        min=arr[i];
      }else {
        if(arr[i]>max){
          amount+=max;    //arr>max
          max=arr[i];
        }else{
          amount+=arr[i]; //min<=arr<=max
        }
      }//if
    }//for
    avg = (double)amount/(number-2);
  }//if
  return avg;
}
```

在使用程序之前，您需要根据实际情况修正程序的一些变量。

```c
#define VOLTAGE     3.37  //vcc voltage(unit: V)
#define LED         13    //operating instructions
#define ArrayLenth  40    //times of collection
#define orpPin      A7    //orp meter output,connect to Arduino controller ADC pin
#define calPin      A6    //orp cal control pin, get a offset by set it to low
```

- **VOLTAGE**：指传感器的实际工作电压。建议您使用万用表测量引脚的供电电压，数值越准确，测量结果越精确。在我的 XIAO 扩展板上，测得的供电电压为 3.37V。

- **LED**：程序添加了闪烁 LED 作为工作指示器的功能，这里可以定义为您使用的控制板的 LED 引脚编号。

- **ArrayLenth**：单位时间内的采样次数。数值越低，获取 ORP 值的时间越短，但也会使结果值不稳定。默认值为 40。

- **orpPin**：传感器的 orp 引脚连接到主控板的引脚编号。

- **calPin**：传感器的 cal 引脚连接到主控板的引脚编号。

更新程序后，选择 Seeed Studio XIAO SAMD21 的开发板型号和端口号，并上传程序。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/6.png"/></div>

打开串口监视器并将波特率设置为 9600，您将看到当前传感器检测到的 ORP 值变化。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/4.png"/></div>

:::tip
如果您是在将传感器探头放入待测溶液后上传程序，在 `ArrayLenth = 40` 的情况下，需要大约 **15分钟** 的预热时间，直到 ORP 值稳定。
:::

#### 清洁 Grove ORP Sensor Pro 探头

几个因素可能导致 ORP 传感器隔膜的堵塞。特别是由陶瓷或其他多孔材料制成的接合处容易堵塞。这里列出了最常见的原因以及相应的清洁程序：

1. 硫化银 (Ag2S) 堵塞：如果参比电解质含有银离子，而被测样品含有硫化物，接合处将被硫化银沉淀污染。要清除这种污染，请用 8% 硫脲在 0.1 mol/L HCl 溶液中清洁 5-60 分钟（硫脲清洁剂可从 METTLER TOLEDO 获得）。

2. 氯化银 (AgCl) 堵塞：参比电解质中的银离子也可能与含有氯离子的样品反应，产生 AgCl 沉淀。这种沉淀可以通过将电极浸泡在浓氨水溶液（35% NH3 aq.）中去除。

3. 蛋白质堵塞：被蛋白质污染的接合处通常可以通过将电极浸泡在胃蛋白酶/HCl（5% 胃蛋白酶在 0.1 mol/L HCl 中）溶液中数小时来清洁（胃蛋白酶-HCl 清洁剂可从 METTLER TOLEDO 获得）。

4. 其他接合处堵塞：如果接合处被其他污染物堵塞，请尝试在超声波水浴中用水或 0.1 mol/L HCl 溶液清洁 ORP 传感器。

:::caution
请 **不要** 将探头长时间留在溶液中，因为这会严重缩短探头的使用寿命。
:::

#### 正确存储 Grove ORP Sensor Pro

使用后，用蒸馏水充分冲洗电极并拧紧保护套。ORP 电极应存储在装有参比电解质（通常为 3 mol/L KCl）或 InLab 存储溶液的湿润帽中。半电池应干燥存储。电极应直立存放并在室温下保存。

## 故障排除

- **Q1: 为什么 Grove ORP 传感器专业版不需要校准？**

> A: 测量氧化还原意味着测量溶液的还原电位。原始值（mV 读数）就是最终结果。如果氧化还原电极通过在 220mV 缓冲溶液中测量进行验证，如果不在 220 ± 20 mV 范围内，则必须清洁传感器（而不是校准）。

- **如果 Grove ORP 传感器专业版验证失败该怎么办？**

> A: 氧化还原传感器的预期值为 220 ± 20 mV。如果不满足此条件，建议使用湿纸巾清洁金属环或引脚，然后用蒸馏水冲洗，再在氧化还原缓冲液 220 mV 中重新测量 mV 值。清洁和去除金属环沉积物的另一种方法是用 0.1 mol/L HCI 进行处理。在某些情况下，还建议更换参比电解质。

- **什么时候进行相对 mV 测量？**

> A: 可能有人想要校正读数的任何偏移，例如，了解相对于氢标准电极而不是 Ag/AgCl 参比的电位。因此，执行相对 mV 测量，需要在测量参数中输入偏移量。

## 资源

- **[PDF]** [Grove ORP 传感器套件专业版_v1.0 原理图](https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH_221019.pdf)

- **[ZIP]** [Grove ORP 传感器套件专业版_v1.0 原理图和PCB](https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH&PCB_221019.zip)

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