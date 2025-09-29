---
description: Grove - ORP 传感器套件 (501Z)
title: Grove - ORP 传感器套件 (501Z)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-ORP-Sensor-kit
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/main.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/main.png" alt="pir" width={600} height="auto" /></p>


<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html)

氧化还原电位 (ORP) 传感器测量水溶液中氧化剂和还原剂的活性，它测量湖泊或河流自我净化或分解废物的能力。Grove OPR 传感器适用于 3.3V 和 5V 系统，Grove 连接器和 BNC 探头接口使其易于使用，非常适合 Arduino 和 Raspberry Pi 项目

:::note
    此产品未通过 RoHS 认证。
:::
## 特性

- 在 3.3V 和 5V 下高效工作。
- 支持 Arduino 和 Raspberry Pi。
- 紧凑尺寸，便于部署。

## 规格参数
|项目|数值|
|---|---|
|电极电位|	245-270mv(15-30℃)|
|参比电极内阻范围	|≤10k|
|电极稳定性分辨率	|±8mv/24|
|指示电极	|良好连续性|
|工作电压|	3.3V/5V|
|工作温度|	5℃-70℃|

## 支持的平台
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## 开始使用

#### 所需材料

| Seeeduino Lotus | Grove-ORP 传感器套件 | 
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/thumb.png" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|[立即购买](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html)|

#### 硬件连接

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORD-Sensor/IMG/ORP_Connection.jpg)  -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORD-Sensor/IMG/ORP_Connection.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::
- **步骤 1.** 使用 Grove 线缆将 Grove-ORP 传感器插入 Seeeduino Lotus 开发板的 **A2** 接口，并通过 USB 线缆将 Seeeduino Lotus 连接到 PC。

:::tip
    请轻柔地插入 USB 线缆和 Grove-ORP 传感器接口到 Seeeduino Lotus 开发板接口中，否则可能会损坏端口。
:::

- **步骤 2.** 下载 [示例代码](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/ORPSensorSample.zip)，复制整个 **ORPSensorSample** 文件并将其粘贴到您的 Arduino IDE 库文件中。

- **步骤 3.** 使用 Arduino IDE 打开 **ORPSensorSample.ino** 文件并上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。


#### 软件代码
```cpp
#define VOLTAGE 5.00    //system voltage
#define OFFSET 0        //zero drift voltage
#define LED 13         //operating instructions

double orpValue;

#define ArrayLenth  40    //times of collection
#define orpPin 2         //orp meter output,connect to Arduino controller ADC pin

int orpArray[ArrayLenth];
int orpArrayIndex=0;

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


void setup(void) {
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
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
    orpValue=((30*(double)VOLTAGE*1000)-(75*avergearray(orpArray, ArrayLenth)*VOLTAGE*1000/1024))/75-OFFSET;   //convert the analog value to orp according the circuit
  }
  if(millis() >= printTime)   //Every 800 milliseconds, print a numerical, convert the state of the LED indicator
  {
	printTime=millis()+800;
	Serial.print("ORP: ");
	Serial.print((int)orpValue);
        Serial.println("mV");
        digitalWrite(LED,1-digitalRead(LED));
  }
}
```


:::note
     - 测量电极时，电极的测试部分（包括铂丝和参比结）必须同时浸没。

     - 电极标准溶液-醌氢醌饱和溶液，储存时间为 48 小时。（附：醌氢醌饱和溶液的制备：在 pH 4.00 缓冲液中加入过量的醌氢醌使其饱和）。
     - 制备氢醌溶液的方法：将 10g 醌氢醌加入 1L pH 4 或 pH 7 缓冲溶液中（ASTM D1498）。在磁力搅拌板上混合溶液至少 15 分钟，制成饱和溶液，并保留未溶解的晶体。醌氢醌溶液从混合时起可使用 8 小时。

     - 如果电极的铂丝被油脂污染，可以用吸水棉和丙酮或酒精擦洗。如果被不溶性无机物质浸渍，30-50% 的盐酸也有效。此外，也可以每天用高级卫生纸清洁一次。

     - 探头**绝对不能**长时间浸泡在任何溶液中。
:::

- **步骤 4.** 取下探头线缆的接口，持续按下传感器上的**黑色按钮**进行复位。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_for_ORP.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_for_ORP.png" alt="pir" width={600} height="auto" /></p>
- **步骤 5.** 从上图中，我们可以看出误差为 -11 mv，因此可以在示例代码的**第 2 行**将偏移数据修改为 -11。

- **步骤 6.** 复位传感器后，我们可以将其放入规格为 204mv 的指定校准液中，以确定其是否能正常工作。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_Solution.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_Solution.png" alt="pir" width={600} height="auto" /></p>
- **步骤 7.** 最后，您可以自由检测您自己的液体。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/202002872_Grove-OPR Sensor_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[ZIP]** [演示代码库](https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/ORPSensorSample.zip)


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