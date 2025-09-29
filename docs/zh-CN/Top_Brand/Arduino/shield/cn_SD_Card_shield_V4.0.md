---
description: SD_Card_shield_V4.0
title: SD Card shield V4.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SD_Card_shield_V4.0
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/SD_Card_Shield-v4.jpg" alt="pir" width={600} height="auto" /></p>

这是新发布的SD卡V4.0扩展板。它为您的Arduino提供存储空间。用户可以通过Arduino内置的SD库读写SD卡。它支持SD、SDHC和Micro SD卡。它只会占用Arduino的SPI端口。与之前的版本相比，它将标准SD卡槽和Micro SD卡槽合并为一个标准卡槽，包含的适配器可以使用Micro SD卡。您可以堆叠其他使用未使用引脚的扩展板。此外，预制的I2C和UART端口便于您与Grove模块连接。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/SD-Card-Shield-V4-p-1381.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 应用创意

-----------------

如果您想使用SD卡扩展板制作一些精彩的项目，这里有一些项目供您参考。

在这里我们介绍一个关于[LinkIt ONE](https://www.seeedstudio.com/depot/LinkIt-ONE-p-2017.html)使用SD卡的项目。

### 使用LinkIt One的音乐播放器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/555a29dc85f7f.png" alt="pir" width={600} height="auto" /></p>

这个项目使用Grove - 水传感器创建一个简单但有效的植物浇水解决方案。

[立即制作！](https://www.seeedstudio.com/recipe/246-music-player-with-linkit-one.html)

[***更多SD卡精彩项目***](https://www.seeedstudio.com/recipe/index.php?query=SD+Card)

特性
--------

- 兼容标准SD卡、SDHC卡和TF卡
- 兼容UART Grove和I2C连接
- 完全支持SD库
- 最少的SPI端口占用
- 真正可堆叠

规格参数
--------------

<table align={"center"} width = {"100%"}>
  <tbody>
  <tr>
    <td><h3>项目</h3></td>
    <td><h3>最小值</h3></td>
    <td><h3>典型值</h3></td>
    <td><h3>最大值</h3></td>
    <td><h3>单位</h3></td>
  </tr>
  <tr>
    <td><h3>电压</h3></td>
    <td><h4>3.5</h4></td>
    <td><h4>5.0</h4></td>
    <td><h4>5.5</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h3>电流</h3></td>
    <td><h4>0.159</h4></td>
    <td><h4>100</h4></td>
    <td><h4>200</h4></td>
    <td><h4>mA</h4></td>
  </tr>  
  <tr>
    <td><h3>支持的卡类型</h3></td>
    <td rowspan="3" width = {"60%"}><h4>SD卡(小于32GB)；Micro SD卡(小于32GB)；SDHC卡(小于32GB)</h4></td>
    <td><h4>/</h4></td>
  </tr>
  <tr>
    <td><h4>尺寸</h4></td>
    <td rowspan="3" width = {"60%"}><h4>68.7x53.5x19.00</h4></td>
    <td><h4>mm</h4></td>
  </tr>
  <tr>
    <td><h4>净重</h4></td>
    <td rowspan="3" width = {"60%"}><h4>14.8</h4></td>
    <td><h4>g</h4></td>
  </tr>
  </tbody></table>

硬件概述
-----------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/Interface_FunctionV2.0.png" alt="pir" width={600} height="auto" /></p>

**Arduino上的引脚使用（使用SD卡）**

D4: SD_CS;

D11: SD_DI;

D12: SD_DO;

D13: SD_CLK.

:::note
SD卡格式可以是FAT16或FAT32。不支持大于16GB的SD卡和SDHC卡。
:::

使用方法
-----

以下是SD卡扩展板的安装方法。

### 硬件安装

1. 将SD卡插入插槽，将SD卡扩展板插到Arduino上。
2. 使用USB线将Arduino连接到PC。

:::note
当您使用Micro SD卡时，请将Micro SD卡插入适配器，然后将Micro SD卡适配器插入插槽，如下所示。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/SD_card_adopter.JPG" alt="pir" width={600} height="auto" /></p>

当您完成硬件安装后，应该如下所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/Hardware_connection.JPG" alt="pir" width={600} height="auto" /></p>

### 上传程序

1. 重启Arduino IDE。通过路径打开"CardInfo"示例：文件 --> 示例 --> SD --> CardInfo。

    这个示例展示了如何使用SD库所基于的实用程序库来获取SD卡信息。当您不确定SD卡是否正常工作时，这对测试卡非常有用。这个库中还有许多其他示例，比如"ReadWrite"。您可以随时尝试它们。

    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/Open_SD_Card_code.jpg" alt="pir" width={600} height="auto" /></p>

    以下是上述代码的简要说明：

    首先检查卡是否正常工作。如果不正常，将输出一些可能导致此结果的原因。

    在SD卡正常工作的情况下，它将打印SD卡类型。然后打印FAT类型卷的类型和大小。

    最后，获取在卡上找到的文件信息，如名称、日期和字节大小。

2. 上传代码。

3. 查看结果。点击串口监视器后，您可以看到以下图像。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/img/SD_Card_Infor.jpg" alt="pir" width={600} height="auto" /></p>

4. 如果出现错误，请重新检查所有之前的步骤，并确保SD卡正常工作。如果这些都不能解决问题，请尝试更换SD卡。

:::note
如果您的SD卡大于4G，Arduino默认代码会错误地返回SD大小。以下代码可以解决这个问题。
:::

```cpp
    /*
      SD卡测试

     这个示例展示了如何使用SD库所基于的实用程序库来获取关于你的SD卡的信息。
     当你不确定SD卡是否正常工作时，这对测试卡片非常有用。

     电路连接:
      * SD卡按以下方式连接到SPI总线:
     ** MOSI - Arduino Uno/Duemilanove/Diecimila的11号引脚
     ** MISO - Arduino Uno/Duemilanove/Diecimila的12号引脚
     ** CLK - Arduino Uno/Duemilanove/Diecimila的13号引脚
     ** CS - 取决于你的SD卡扩展板或模块。
     ** 这里使用4号引脚以与其他Arduino示例保持一致


     创建于 2011年3月28日
     作者 Limor Fried
     修改于 2012年4月9日
     作者 Tom Igoe
     */
    // 包含SD库:
    #include <SPI.h>
    #include <SD.h>

    // 使用SD实用程序库函数设置变量:
    Sd2Card card;
    SdVolume volume;
    SdFile root;

    // 更改此项以匹配你的SD扩展板或模块;
    // Arduino Ethernet扩展板: 4号引脚
    // Adafruit SD扩展板和模块: 10号引脚
    // Sparkfun SD扩展板: 8号引脚
    const int chipSelect = 4;

    void setup()
    {
      // 打开串行通信并等待端口打开:
      Serial.begin(9600);
      while (!Serial) {
        ; // 等待串行端口连接。仅Leonardo需要
      }


      Serial.print("\n正在初始化SD卡...");
      // 在Ethernet扩展板上，CS是4号引脚。默认设置为输出。
      // 注意，即使它不用作CS引脚，硬件SS引脚
      // (大多数Arduino板上是10号引脚，Mega上是53号引脚)必须保持为输出
      // 否则SD库函数将无法工作。
      pinMode(10, OUTPUT);     // 在mega上将此更改为53


      // 我们将使用实用程序库中的初始化代码
      // 因为我们只是测试卡片是否工作!
      if (!card.init(SPI_HALF_SPEED, chipSelect)) {
        Serial.println("初始化失败。需要检查的事项:");
        Serial.println("* 是否插入了卡片?");
        Serial.println("* 你的接线是否正确?");
        Serial.println("* 你是否更改了chipSelect引脚以匹配你的扩展板或模块?");
        return;
      } else {
        Serial.println("接线正确且存在卡片。");
      }

      // 打印卡片类型
      Serial.print("\n卡片类型: ");
      switch (card.type()) {
        case SD_CARD_TYPE_SD1:
          Serial.println("SD1");
          break;
        case SD_CARD_TYPE_SD2:
          Serial.println("SD2");
          break;
        case SD_CARD_TYPE_SDHC:
          Serial.println("SDHC");
          break;
        default:
          Serial.println("未知");
      }

      // 现在我们将尝试打开'卷'/'分区' - 它应该是FAT16或FAT32
      if (!volume.init(card)) {
        Serial.println("找不到FAT16/FAT32分区。\n确保你已经格式化了卡片");
        return;
      }


      // 打印第一个FAT类型卷的类型和大小

      uint64_t volumesize64;
      uint32_t volumesize32;
      Serial.print("\n卷类型是FAT");
      Serial.println(volume.fatType(), DEC);
      Serial.println();

      volumesize64 = volume.blocksPerCluster();    // 簇是块的集合
      volumesize64 *= volume.clusterCount();       // 我们将有很多簇
      volumesize64 *= 512;                            // SD卡块总是512字节

      Serial.print("卷大小 (字节): ");
      printLLNumber(volumesize64, DEC);
      Serial.println();

      Serial.print("卷大小 (千字节): ");
      volumesize32 = volumesize64/1024;
      Serial.println(volumesize32);

      Serial.print("卷大小 (兆字节): ");
      volumesize32 /= 1024;
      Serial.println(volumesize32);
      /*uint64_t volumesize;
      Serial.print("\n卷类型是FAT");
      Serial.println(volume.fatType(), DEC);
      Serial.println();

      volumesize = volume.blocksPerCluster();    // 簇是块的集合
      volumesize *= volume.clusterCount();       // 我们将有很多簇
      volumesize *= 512;                            // SD卡块总是512字节
      Serial.print("卷大小 (字节): ");
      Serial.println(volumesize,DEC);
      Serial.print("卷大小 (千字节): ");
      volumesize /= 1024;
      Serial.println(volumesize,DEC);
      Serial.print("卷大小 (兆字节): ");
      volumesize /= 1024;
      Serial.println(volumesize,DEC);
    */

      Serial.println("\n在卡片上找到的文件 (名称、日期和大小，以字节为单位): ");
      root.openRoot(volume);

      // 列出卡片中所有文件及其日期和大小
      root.ls(LS_R | LS_DATE | LS_SIZE);
    }


    void loop(void) {

    }
    void printLLNumber(uint64_t n, uint8_t base)
    {
      unsigned char buf[16 * sizeof(long)];
      unsigned int i = 0;

      if (n == 0)
      {
        Serial.print((char)'0');
        return;
      }

      while (n > 0)
      {
        buf[i++] = n % base;
        n /= base;
      }

      for (; i > 0; i--)
        Serial.print((char) (buf[i - 1] < 10 ?
          '0' + buf[i - 1] :
          'A' + buf[i - 1] - 10));
    }
```

## SD Card Shield v4.0 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/PCBA-SD%20Card%20shield%20V4.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## SD Card Shield v4.0a 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.0a.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## SD Card Shield v4.3 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.3_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [SD Card Shield v4.0 原理图](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shiled_v4.0.pdf)

- [SD Card Shield v4.0 Eagle 文件.zip](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/PCBA-SD%20Card%20shield%20V4.0.zip)

- [SD Card Shield v4.0a Eagle 文件.zip](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.0a.zip)

- [SD Card Shield v4.3 Eagle 文件.zip](https://files.seeedstudio.com/wiki/SD_Card_shield_V4.0/res/SD_Card_Shield_v4.3_eagle_file.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/SD_Card_shield_V4.0 -->

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