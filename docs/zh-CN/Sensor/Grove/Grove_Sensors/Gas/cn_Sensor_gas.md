---
description: 传感器 - 气体
title: 传感器 - 气体
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeed_Gas_Sensor_Selection_Guide
last_update:
  date: 1/4/2023
  author: shuxu hu
---
<!-- ![](https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg" alt="pir" width={600} height="auto" /></p>


气体传感器是一种能够检测环境中存在的各种有毒和可燃气体的设备。

## 工作原理

测试气体与传感表面之间的相互作用可以通过测量电阻、电容、功函数、质量、光学特性等的变化来检测。下表来源于参考文献[^1]。


| 气体传感器类别                | 工作原理                                                                                                                                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 电化学                      | 电流、电压、电容/阻抗的变化：1. 伏安法（包括安培法）2. 电位法 3. 化学敏化场效应晶体管 4. 用于气体传感的固体电解质电位法  |
| 电学                        | 金属氧化物导电性 有机导电性 电解导电性 异质结导电性（肖特基二极管、FET、MOS）功函数 介电常数（电容）                                       |
| 质量敏感                    | 重量、振幅、相位或频率、尺寸、形状或位置的变化：1. 石英晶体微天平 2. 表面声波传播 3. 悬臂梁                                                      |
| 磁性                        | 顺磁性气体特性的变化                                                                                                                                                                                 |
| 光学器件                    | 光强度、颜色或发射光谱的变化：1. 吸光度 2. 反射率 3. 发光 4. 折射率 5. 光热效应 6. 光散射（拉曼散射、等离子体共振）               |
| 热量测定（量热法）          | 特定化学反应的热效应。温度、热流、热含量的变化：1. 热电 2. 热释电 3. 催化珠（催化燃烧式）4. 热导率                                |

<div align="center"><b>表 1.</b><i>IUPAC 分析化学分部于 1991 年建议的气体传感器分类，</i></div>

[^1]: 来源：转载自 I lulanicki 等人（1991）。由国际纯粹与应用化学联合会发布。

## 应用领域

这些气体传感器有着众多用途。特别是，使用这些气体传感器可以使人类免受潜在危险。因此，气体传感器在各个领域发挥着重要作用，包括工业、医疗、环境应用和家用应用，用于监测有毒和易燃气体。下表来自资料来源[^2]。


| 应用领域                                          | 功能                                                                                                                                                                                                                                       | 检测气体示例                                      |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| 环境                                                   | 监测大气中由于工业排放而存在的有毒气体（气象站、污染监测）                                                                                                                          | CO、CH4、湿度、CO2、O3、VOCs、SOx                           |
| 工作安全                                                | 控制室内空气质量；监测工作环境中的有毒气体，例如在使用危险化学品的工厂中                                                                                                   | 有毒气体、可燃气体、O2                              |
| 家庭安全/家用应用                         | 检测家庭中由于火灾和爆炸等事故产生的有毒气体或烟雾；智能冰箱或烤箱；火灾报警器；天然气供暖；泄漏检测；空气质量控制；空气净化器；烹饪控制    | CO、湿度、CO2、VOCs                                         |
| 汽车安全                                                 | 汽车通风控制；汽油蒸汽检测；酒精呼气测试                                                                                                                                                                        | CO、LPG、VOCs、CH4                                              |
| 公共安全                                               | 控制室内空气质量，检测对公众安全有危险的物质                                                                                                                                          | 有毒气体、可燃气体、易燃气体、爆炸物、O2 |
| 医疗/临床                                              | 诊断（呼气分析、疾病检测）；床旁患者监护；药物监测；人工器官和假肢；新药发现                                                                                       | O2、NH、NOx、CO2、H2S、H2、CL2、麻醉气体                |
| 农业                                                   | 植物/动物诊断；土壤和水质检测；肉类/家禽检验；废物/污水监测                                                                                            | 胺类、湿度、CO                                            |
| 食品质量控制                                        | 检测食物开始腐烂时形成的特定分子，此时食物不再适合食用                                                                                                                           | 湿度、CO2                                                   |
| 公用事业/汽车/发电厂                             | 控制发动机和燃气锅炉中的气体浓度，以保证燃烧过程的最高效率。同样的概念也可以应用于发电厂，因为能源是通过燃烧产生的 | O2、CO、HCs、NOx、SOx、CO2、H2、HCs                             |
| 工业：石化 钢铁/水处理/半导体  | 过程监测和控制；质量控制；工作场所监测；废物流监测；泄漏报警                                                                                                                                  | HCs、常规污染物、O2、H2、O3、CO2、CL2、CH4、H2S     |
| 国防/军事                                              | 检测化学、生物和毒素战剂；条约验证                                                                                                                                                               | 战剂、爆炸物、推进剂                                 |
| 航空航天                                                     | 监测环境大气中的氧气以及有毒和易燃气体                                                                                                                                                              | H2、O2、CO3、湿度                                           |
| 交通/隧道/停车场                                     | 城市交通控制和管理；隧道或地下停车库的空气质量监测 |                                                                   


<div align="center"><b>表2.</b><i>气体传感器应用的一些示例</i></div>

[^2]: 来源：数据来自 Taylor (1996)、Stcttcr et al. (2003)、Capone ct al. (2003) 等。HCs 碳氢化合物，VOCs 挥发性有机化合物。


## Seeed 气体传感器

对于我们商城中所有的 Grove 气体传感器，请点击 [商城 Grove 气体传感器标签](https://www.seeedstudio.com/tag/index/index/tag/GAS-SENSOR/?product_list_limit=all) 查看。

或者您可以点击 **[这里](https://wiki.seeedstudio.com/cn/gas_sensor_selection/)** 获得更好的表格视图。


| 名称| 缩略图| 目标气体 | 气体传感器类别 | 应用领域| 传感器 | 检测范围| 精度| 工作电压 | 接口 | 点击购买|
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [Grove - 多通道气体传感器 V2](https://wiki.seeedstudio.com/cn/Grove-Multichannel-Gas-Sensor-V2/)  | <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V2.png"/>|除了一氧化碳 (CO)、二氧化氮 (NO2)、乙醇(C2H5CH)、挥发性有机化合物 (VOC) 等  | 电化学           | 环境                                                                                                                                          |GM102B, GM302B, GM502B, GM702B| / | NA                                                                                                                                                                                         | 3.3V 5V         | I2C       | [订购](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)                                         |
| [Grove - 多通道气体传感器 V1](https://wiki.seeedstudio.com/cn/Grove-Multichannel_Gas_Sensor/)  |  <img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V1.png"/>|一氧化碳、二氧化氮、乙醇、氢气、氨气、甲烷、丙烷、异丁烷   | 电化学           | 环境                                                                                                                                          | MiCS-6814  | CO: 1–1000ppm   NO2: 0.05–10ppm   H2: 10–500ppm   C2H5OH: 1-1000ppm  NH3: 1-500ppm  CH4: >1000ppm  C3H8: >1000ppm  C4H10: >1000ppm | NA                                                                                                                                                                                         | 3.3V 5V         | I2C       | [订购](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html)                    
|[Grove - 空气质量传感器 v1.3](https://wiki.seeedstudio.com/cn/Grove-Air_Quality_Sensor_v1.3/)|  <img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_Air_Quality_Sensor_small.jpg"/>|酒精、烟雾| 电化学| 环境 | MP503      | 10-1000ppm(酒精)                                                                                                                | NA                                                                                                                                                                                         | 3.3V 5V         | 模拟    | [订购](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)                                          |
|[Grove - 酒精传感器 ](https://wiki.seeedstudio.com/cn/Grove-Alcohol_Sensor/)   | <img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/achohol.png"/>|酒精                                                                                      | 电化学      | 汽车安全  公共安全                                                                                                                       | MQ303A     |  20-1000ppm 酒精                                                                                                                | NA                                                                                                                                                                                         | 5V              | 模拟    | [订购](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)                                                    |
|[Grove - CO2 传感器 ](https://wiki.seeedstudio.com/cn/Grove-CO2_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/45d_small.jpg"/>| CO2                                                                                          | 电化学      | 环境  农业                                                                                                                             | MH-Z16     | 0-5000ppm                                                                                                                          | ±(50ppm +5%)                                                                                                                                                                               | 5V              | UART      | [订购](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z1-p-1863.html)                                      |
|[Grove - CO2 & 温湿度传感器 (SCD30)](https://wiki.seeedstudio.com/cn/Grove-CO2_Temperature_Humidity_Sensor-SCD30/)            |<img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png"/>| CO2                                                                                          | 光学器件      | 环境  农业                                                                                                                             | SCD30      | 0-40000ppm                                                                                                                         | ±(30 ppm + 3%)                                                                                                                                                                             | 3.3V 5V         | I2C       | [订购](https://www.seeedstudio.com/catalog/product/view/id/2911/s/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911/) |
|[Grove - VOC 和 eCO2 气体传感器 (SGP30) ](https://wiki.seeedstudio.com/cn/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/)  | <img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg"/>|VOC,CO2                                                                                      | 电化学           | 环境  农业                                                                                                                             | SGP30      | VOC: 0 ppb to 60000ppb  CO2: 400 ppm to 60000 ppm                                                                                  | VOC: (0-2008ppb/1ppb, 2008-11110ppb/6ppb, 11110-60000ppb/32ppb)  CO2: (400-1479ppm/1ppm, 1479-5144ppm/3ppm, 5144-17597ppm/9ppm, 17597-60000ppm/31ppm) | 3.3V 5V         | I2C       | [订购](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-SGP30-p-3071.html)                                    |
| [Grove - 气体传感器(MQ2) ](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ2/)    | <img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg"/>|液化石油气、异丁烷、丙烷、甲烷、酒精、氢气、烟雾                                    | 电化学      | 家庭安全/家用应用  工作安全                                                                                                | MQ2        | 液化石油气和丙烷: 200ppm-5000ppm  丁烷: 300ppm-5000ppm  甲烷: 5000ppm-20000ppm  H2: 300ppm-5000ppm  酒精:100ppm-2000ppm     | NA                                                                                                                                                                                         | 5V              | 模拟    | [订购](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)                                                     |
|[Grove - 气体传感器(MQ3) ](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ3/)                                           |  <img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg"/>|对酒精高敏感度，对苯的敏感度较小                                 | 电化学      | 汽车安全  公共安全                                                                                                                       | MQ3        | 酒精: 0.05-10mg/L                                                                                                               | NA                                                                                                                                                                                         | 5V              | 模拟    | [订购](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)                                                    |
| [Grove - 气体传感器(MQ5) ](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ5/)    |  <img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/45d_small.jpg"/>| 对液化石油气、天然气、城市煤气高敏感度，对酒精、烟雾敏感度较小       | 电化学      | 工业：石化 钢铁/水处理/半导体  公用事业/汽车/发电厂                                                       | MQ5        | 200-10000ppm                                                                                                                       | NA                                                                                                                                                                                         | 5V              | 模拟    | [订购](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html)                                                     |
| [Grove - 气体传感器(MQ9) ](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ9/)   |<img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/45d_small.jpg"/>| 对一氧化碳和 CH4、液化石油气高敏感度                                             | 电化学      | 汽车安全  工业：石化 钢铁/水处理/半导体  公用事业/汽车/发电厂  家庭安全/家用应用 | MQ9        | 一氧化碳: 20-2000ppm    CH4: 500-10000ppm  液化石油气: 500-10000ppm                                                                | NA                                                                                                                                                                                         | 5V              | 模拟    | [订购](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html)                                                    |
| [Grove - 气体传感器(O2)](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-O2/)                                          | <img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/45d_small.jpg"/>|O2                                                                                           | 电化学      | 汽车安全  工业：石化 钢铁/水处理/半导体  公用事业/汽车/发电厂  家庭安全/家用应用 | ME2-O2-Ф20 | 0～25%Vol                                                                                                                          | NA                                                                                                                                                                                         | 3.3V 5V         | 模拟    | [订购](https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-2-p-1541.html)                                           |
| [Grove - HCHO 传感器](https://wiki.seeedstudio.com/cn/Grove-HCHO_Sensor/)   |<img src="https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/img/45d_small.jpg"/>| 甲苯、甲醛、苯、酒精、丙酮                                                 | 电化学      | 环境                                                                                                                                          | WSP2110    | 1～50ppm                                                                                                                           | NA                                                                                                                                                                                         | 3.3V 5V         | 模拟    | [订购](https://www.seeedstudio.com/Grove-HCHO-Sensor-p-1593.html)                                                      |                              |
| [Grove - 温湿度气压气体传感器 (BME680)](https://wiki.seeedstudio.com/cn/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/) | <img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/thumbnail.jpg"/>|IAQ                                                                                          | 电化学           | 环境  家庭安全/家用应用                                                                                                   | BME680     | 0-500                                                                                                                              | NA                                                                                                                                                                                         | 3.3V 5V         | I2C       | [订购](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-BME68-p-3109.html)               |
|

<div align="center"><b>表 3.</b><i>Seeed 气体传感器分类</i></div>

## 项目

**智能作物：在传统农业中实施物联网！**：我们与自然的使命是保护它，通过 Helium 借助物联网设计和实施技术和监测方法。

**一个查看您周围环境数据的网站**：

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/a-website-to-see-the-environment-data-around-you-1aea66/embed' width='350'></iframe>


<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

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