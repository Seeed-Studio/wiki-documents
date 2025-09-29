---
description: Grove - 气体传感器 V2(多通道)
title: Grove - 气体传感器 V2(多通道)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Multichannel-Gas-Sensor-V2
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/04.png" alt="pir" width={600} height="auto" /></p>




<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)

:::tip
我们已经发布了[Seeed气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。
:::

Grove - 多通道气体传感器 V2 具有4个测量单元，每个单元对各种气体都很敏感，这意味着您能够同时获得四组数据。通过这四组数据也可以判断不同种类的气体。该模块中使用的气体传感器基于MEMS技术，具有尺寸小、测量稳定性好的优点，更适合定性而非定量测量。

## 特性

- 一个封装内有四个完全独立的传感器元件。
- 能够检测多种气体，包括一氧化碳(CO)、二氧化氮(NO2)、乙醇(C2H5CH)、挥发性有机化合物(VOC)等。
- 定性检测，而非定量检测。
- 紧凑的尺寸便于部署。   

## 规格参数

|      项目      |                值               |
|:--------------:|:----------------------------------:|
|       MCU      |              STM32F030             |
|    接口   |              Grove I2C             |
|   I2C地址  |                0x08                |
| 输出电压 |               3.3V~5V              |
|     传感器    | GM-102B; GM-302B; GM-502B; GM-702B |

**GM-102B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 828}}>
    <colgroup>
      <col style={{width: 412}} />
      <col style={{width: 416}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls"><span style={{fontWeight: 'bold'}}>产品类型</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-102B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>V0(V)</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2.5-4.5</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>V0-VS(V)</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≥1.0</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>负载</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>可调</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>响应时间</span>（tres，S）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤30</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>恢复时间</span>（trec，S）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤60</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>加热电阻</span>（RH，Ω）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>80±20</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls"><span style={{fontWeight: 'bold'}}>工作电压</span>（V）</td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH=2.0±0.1 AC或DC	VC=5.0±0.1DC</span></td>
      </tr>
    </tbody>
  </table>
</div>



**GM-302B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg">
    <thead>
      <tr>
        <th className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>产品类型</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-302B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>标准封装</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>陶瓷封装</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>浓度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1</span>～500ppm</td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>标准电路条件</span><br /> </td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>回路电压</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤24V DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加热电压</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2.5V±0.1V AC或DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>负载电阻</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>可调</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={5}> <br /><br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>标准测试条件下的气体传感器特性</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加热电阻</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>60~100Ω</span>（室温）</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加热功耗</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤50mW</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>敏感体电阻</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1KΩ</span>～30KΩ(在50ppm乙醇中)</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>灵敏度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>Rs(在空气中)/Rs(在50ppm乙醇中)≥3.0</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>浓度斜率</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤0.9(R200ppm/R50ppm乙醇)</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><br /><br /><span style={{fontWeight: 'bold'}}>标准测试条件</span></td>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>温度/湿度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>20℃±2℃</span>；55%±5%RH</td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>标准测试电路</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH:2.5V±0.1V</span>； VC:5.0V±0.1V</td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>预热时间</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>少于48小时</span></td>
      </tr>
    </tbody>
  </table>
</div>

**GM-502B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;\n  vertical-align:top}\n.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 822}}>
    <colgroup>
      <col style={{width: 296}} />
      <col style={{width: 211}} />
      <col style={{width: 35}} />
      <col style={{width: 280}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>产品类型</span></th>
        <th className="tg-q7v3"><span style={{fontWeight: 'normal'}}>GM-502B</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>标准封装</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>陶瓷封装</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" colSpan={3}><span style={{fontWeight: 'bold'}}>浓度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1～500ppm</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={3}><span style={{fontWeight: 'bold'}}>标准电路条件</span><br /><br /> </td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>回路电压</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤24V DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加热电压</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>2.5V±0.1V AC 或 DC</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>负载电阻</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>可调</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" rowSpan={5}> <br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>标准测试条件下的气体传感器特性</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加热电阻</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>80Ω ± 20Ω（</span>室温）</td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>加热功耗</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤50mW</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>敏感体电阻</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>1KΩ～30KΩ (在50ppm乙醇中)</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>灵敏度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>R0 (在空气中) / Rs (在50ppm乙醇中) ≥3.0</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>浓度斜率</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>≤0.9 (R200ppm / R50ppm 乙醇)</span></td>
      </tr>
      <tr>
        <td className="tg-l5ls" rowSpan={2}><span style={{fontWeight: 'bold'}}>标准测试条件</span><br /></td>
        <td className="tg-q7v3" colSpan={2}><span style={{fontWeight: 'normal'}}>温度 / 湿度</span></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>20℃ ± 2℃；55% ± 5%RH</span></td>
      </tr>
      <tr>
        <td className="tg-q7v3" colSpan={2}>标准测试电路<br /></td>
        <td className="tg-q7v3"><span style={{fontWeight: 'normal'}}>VH:2.5V ± 0.1V；</span><br /><span style={{fontWeight: 'normal'}}>VC:5.0V ± 0.1V</span></td>
      </tr>
    </tbody>
  </table>
</div>



**GM-702B**

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}\n.tg .tg-wzu8{background-color:#ffffff;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}\n" }} />
  <table className="tg" style={{tableLayout: 'fixed', width: 822}}>
    <colgroup>
      <col style={{width: 304}} />
      <col style={{width: 211}} />
      <col style={{width: 35}} />
      <col style={{width: 272}} />
    </colgroup>
    <thead>
      <tr>
        <th className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>产品类型</span></th>
        <th className="tg-v0nz">GM-702B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>标准封装</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>陶瓷封装</span></td>
      </tr>
      <tr>
        <td className="tg-wzu8" colSpan={3}><span style={{fontWeight: 'bold'}}>浓度</span></td>
        <td className="tg-v0nz">5～5000ppm(CO)</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={3}><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>标准电路条件</span><br /> </td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>回路电压</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>VC</span></td>
        <td className="tg-v0nz">≤24V DC</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><br /><span style={{fontWeight: 'normal'}}>加热电压</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>VH</span></td>
        <td className="tg-v0nz">2.5V±0.1V AC 或 DC（高温）<br />0.5V±0.1V AC 或 DC（低温）</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>负载电阻</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RL</span></td>
        <td className="tg-v0nz">60s±1s（高温）；90s±1s（低温）</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={5}> <br /><br /><br /><br /><span style={{fontWeight: 'bold', fontStyle: 'normal'}}>标准测试条件下的气体传感器特性</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>加热电阻</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RH</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>可调</span></td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>加热功耗</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>PH</span></td>
        <td className="tg-v0nz">80Ω±20Ω（<span style={{fontWeight: 'normal'}}>室温</span>）</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>敏感体电阻</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>RS</span></td>
        <td className="tg-v0nz">≤50mW</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>灵敏度</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>S</span></td>
        <td className="tg-v0nz">1KΩ～30KΩ(在150ppmCO中)</td>
      </tr>
      <tr>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>浓度斜率</span></td>
        <td className="tg-v0nz"><span style={{fontWeight: 'normal'}}>α</span></td>
        <td className="tg-v0nz">R0(在空气中)/Rs(在150ppmCO中)≥3</td>
      </tr>
      <tr>
        <td className="tg-v0nz" rowSpan={2}><br /><span style={{fontWeight: 'bold'}}>标准测试条件</span><br /></td>
        <td className="tg-v0nz" colSpan={2}><span style={{fontWeight: 'normal'}}>温度 / 湿度</span></td>
        <td className="tg-v0nz">20℃±2℃；55%±5%RH</td>
      </tr>
      <tr>
        <td className="tg-v0nz" colSpan={2}><span style={{fontWeight: 'normal'}}>标准测试电路</span></td>
        <td className="tg-v0nz">VH: 2.5V±0.1V（高温）<br />0.5V±0.1V（低温） VC : 5.0V±0.1V</td>
      </tr>
    </tbody>
  </table>
</div>

## 样本测试结果

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0c4t{background-color:#ffffff;border-color:#000000;color:#fe0000;font-size:16px;font-weight:bold;text-align:left;
  vertical-align:top}
.tg .tg-bjhj{background-color:#FFF;border-color:#000000;font-size:16px;text-align:center;vertical-align:top}
.tg .tg-v0nz{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:top}
.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;
  vertical-align:top}
.tg .tg-i1ym{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:left;
  vertical-align:top}
.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}
.tg .tg-w9f5{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:middle}
.tg .tg-anz3{background-color:#ffffff;border-color:#000000;color:#000000;text-align:center;vertical-align:middle}
</style>

<table class="tg" style="undefined;table-layout: fixed; width: 818px">
<colgroup>
<col style="width: 43px">
<col style="width: 84px">
<col style="width: 100px">
<col style="width: 96px">
<col style="width: 112px">
<col style="width: 93px">
<col style="width: 92px">
<col style="width: 89px">
<col style="width: 109px">
</colgroup>
<thead>
  <tr>
    <th class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">时间：2019.06.27</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">测试</span> <span style="font-weight:700;font-style:normal;text-decoration:none">条件：VH=2.5V，VC=3.3V</span></td>
  </tr>
  <tr>
    <td class="tg-i1ym" colspan="9"><span style="font-weight:700;font-style:normal;text-decoration:none">型号：GM-102B、GM-302B、GM-502B、GM-702B</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">1#</span></td>
    <td class="tg-l5ls" colspan="4">气体：NO2</td>
    <td class="tg-l5ls" colspan="4">气体：C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">型号</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初始</span> <span style="font-weight:400;font-style:normal;text-decoration:none">值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">型号</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初始</span> <span style="font-weight:400;font-style:normal;text-decoration:none">值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差值(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.41</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.38</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-1.03</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.42</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.58</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.94</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.48</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.46</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.95</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.06</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.11</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.42</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.53</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.89</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.41</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.93</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.52</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.54</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.55</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.99</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.35</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.86</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.51</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">2#</span></td>
    <td class="tg-l5ls" colspan="4">气体：NO2</td>
    <td class="tg-l5ls" colspan="4">气体：C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">型号</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初始</span> <span style="font-weight:400;font-style:normal;text-decoration:none">值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">型号</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初始</span> <span style="font-weight:400;font-style:normal;text-decoration:none">值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差值(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.94</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.22</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.92</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.41</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.49</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.45</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.24</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.21</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.35</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.09</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.74</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.45</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.49</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.96</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.51</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.88</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.37</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.77</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.3</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.47</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.74</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.73</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.99</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">3#</span></td>
    <td class="tg-l5ls" colspan="4">气体：NO2</td>
    <td class="tg-l5ls" colspan="4">气体：C2H5OH</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">型号</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初始</span> <span style="font-weight:400;font-style:normal;text-decoration:none">值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">5ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">型号</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">初始</span> <span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">值(V)</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">50ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差值(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.29</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.27</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-1.02</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.2</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.62</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.42</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.12</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.61</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.51</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.12</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">2.33</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.21</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.82</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.58</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-1.24</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.72</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">2.86</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.14</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.06</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.37</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.69</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">1.08</span></td>
    <td class="tg-bjhj"><span style="font-weight:400;font-style:normal;text-decoration:none;color:#000">2.8</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.72</span></td>
  </tr>
  <tr>
    <td class="tg-w9f5" colspan="9"></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-style:normal;text-decoration:none">1#</span></td>
    <td class="tg-l5ls" colspan="4">气体：CO</td>
    <td class="tg-w9f5" colspan="4"></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">型号</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初始</span> <span style="font-weight:400;font-style:normal;text-decoration:none">值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差值(V)</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">传感器</span> <span style="font-weight:400;font-style:normal;text-decoration:none">类型</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">检测</span> <span style="font-weight:400;font-style:normal;text-decoration:none">气体</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.31</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.33</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.02</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">NO2</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.88</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.16</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">C2H5OH</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.33</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.35</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.02</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">VOC</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.22</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">2.09</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.87</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3" colspan="2"><span style="font-weight:400;font-style:normal;text-decoration:none">CO</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">2#</span></td>
    <td class="tg-l5ls" colspan="4">气体：CO</td>
    <td class="tg-0c4t" colspan="4" rowspan="12"><br><br><br><br><br>注意：在判断气体类型时，可以以GM-102B为例。从上面和旁边的四个图表可以看出，GM-102B在每种气体检测中都参与了三次测试。在NO2环境下，它的差值数量比其他气体环境下达到峰值。因此GM-102B对NO2敏感，相应地能够检测NO2，这同样适用于其他传感器和各种气体。当置于其他种类的气体环境中时，传感器能够检测出使其产生最大差值的气体。<br></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">型号</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初始</span> <span style="font-weight:400;font-style:normal;text-decoration:none">值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差值(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.94</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.95</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.01</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.36</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.48</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.12</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.46</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.5</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.04</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.18</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.46</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3" rowspan="6"><span style="font-weight:400;font-style:normal;text-decoration:none">3#</span></td>
    <td class="tg-l5ls" colspan="4">气体：CO</td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">型号</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">初始</span> <span style="font-weight:400;font-style:normal;text-decoration:none">值(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">150ppm(V)</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">差值(V)</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-102B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.18</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.17</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.01</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-302B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.18</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.25</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.07</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-502B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.72</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.71</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">-0.01</span></td>
  </tr>
  <tr>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">GM-702B</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.01</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">1.7</span></td>
    <td class="tg-q7v3"><span style="font-weight:400;font-style:normal;text-decoration:none">0.69</span></td>
  </tr>
  <tr>
    <td class="tg-anz3" rowspan="15"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/1.png" alt="Image" width="400" height="300"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/2.png" alt="Image" width="400" height="300"></td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
    <td class="tg-anz3" rowspan="15"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/3.png" alt="Image" width="400" height="300"></td>
    <td class="tg-v0nz" colspan="4" rowspan="15"><img src="https://files.seeedstudio.com/wiki/Grove_Multichannel_Gas_Sensor_V2_101020820/4.png" alt="Image" width="400" height="300"></td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
</tbody>
</table> -->

[结果输出](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/Grove-Gas-Sensor-V2(Multichannel)-result-outcome.pdf)

## 特性描述

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B.png" alt="pir" width={600} height="auto" /></p>


图中Rs代表传感器在不同浓度气体中的电阻值；R0代表传感器在洁净空气中的电阻值。图中所有测试均在标准测试条件下完成。黄线是甲苯，蓝线是乙醇，红线是丙酮，紫线是甲醛，与下面图表中的颜色相同。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B+2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-302B+2.png" alt="pir" width={600} height="auto" /></p>

图表3中的输出电压是传感器串联负载电阻（RL）两端的电压。图中测试在标准测试条件下完成，测试气体为50ppm乙醇。图表4中的输出电压是传感器串联负载电阻（RL）两端的电压。图中所有测试均在标准测试条件下完成。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B.png" alt="pir" width={600} height="auto" /></p>

图表5中Rs代表传感器在不同浓度气体中的电阻值；R0代表传感器在洁净空气中的电阻值。图中所有测试均在标准测试条件下完成。黄线是甲苯，蓝线是乙醇，红线是丙酮，紫线是甲醛，与下面图表中的颜色相同。在图表6中，Rs代表在50ppm乙醇和各种温度/湿度下的电阻值；Rs0代表在50ppm乙醇、20℃和55%相对湿度下的电阻值。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B+2.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-502B+2.png" alt="pir" width={600} height="auto" /></p>

图表7中的输出电压是传感器串联负载电阻（RL）两端的电压。图中测试在标准测试条件下完成，测试气体为50ppm乙醇。图表8中的输出电压是传感器串联负载电阻（RL）两端的电压。图中所有测试均在标准测试条件下完成。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B.png" alt="pir" width={600} height="auto" /></p>

在图表9中，Rs代表传感器在不同浓度气体中的电阻值；R0代表传感器在洁净空气中的电阻值。图中所有测试均在标准测试条件下完成。黑线是CO，红线是CH4，紫线是H2，粉线是空气。在图表10中，Rs代表在150ppmCO和各种温度/湿度下的电阻值；Rs0代表在150ppmCO、20℃、55%相对湿度下的电阻值。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B+2.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/GM-702B+2.png" alt="pir" width={600} height="auto" /></p>

图表11中的电压是传感器串联负载电阻（RL）两端的电压。图中测试在标准测试条件下完成，测试气体为150ppmCO。
图表12中的输出电压是传感器串联负载电阻（RL）两端的电压。图中所有测试均在标准测试条件下完成。

## 支持的平台
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|


## 入门指南

#### 所需材料

| Wio Terminal | Grove-多通道气体传感器 V2 | 
|--------------|-----------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" style={{width:250, height:'auto'}}/></div> |<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/V2.png" style={{width:250, height:'auto'}}/></div> |
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)|



#### 硬件概述


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/Hardware+Connection+Image.jpg" alt="pir" width={500} height="auto" /></p>
 
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/IMG/Hardware+Diagram.png" alt="pir" width={600} height="auto" /></p> 

:::note
硬件连接图像中的模块与上面硬件图表中的模块具有相同的排列。如您在硬件图表中所见，左侧的轮廓区域是 Grove 接口。有四个带有小孔的方块指的是气体传感器。当带有传感器的板子与 Wio Terminal 连接时，气体信息将显示在屏幕上。
:::

- **步骤 1.** 将 Grove - 多通道气体传感器 V2 连接到 Grove-Base Shield 的 I2C 端口。将 Grove - Base Shield 插入 Wio Terminal。并通过 USB 线将 Wio Terminal 连接到 PC。

- **步骤 2.** 从 Github 下载 [ Grove_Multichannel_Gas_Sensor_v2 库](https://github.com/Seeed-Studio/Seeed_Multichannel_Gas_Sensor/archive/master.zip)。并参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库。

- **步骤 3.** 将代码复制到 Wio Terminal 并上传。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)。

- **步骤 4.** 参考[如何安装 TFT LCD 库](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/)来安装 TFT LCD 库。最后，从下面的软件代码上传代码，数据必须成功显示。

#### 软件代码

```cpp
#include <TFT_eSPI.h>
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>
GAS_GMXXX<TwoWire> gas;

TFT_eSPI tft; 
// Stock font and GFXFF reference handle
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

void setup() {
  // put your setup code here, to run once:
  tft.begin();
  tft.setRotation(3);
  spr.createSprite(tft.width(),tft.height()); 
  gas.begin(Wire, 0x08); // use the hardware I2C
}

void loop() {
  // put your main code here, to run repeatedly:
  int val;
  spr.fillSprite(TFT_BLACK);
  spr.setFreeFont(&FreeSansBoldOblique18pt7b); 
  spr.setTextColor(TFT_BLUE);
  spr.drawString("Gas Terminal", 60 - 15, 10 , 1);// Print the test text in the custom font
  for(int8_t line_index = 0;line_index < 5 ; line_index++)
  {
    spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
  }
  
  spr.setFreeFont(&FreeSansBoldOblique9pt7b);                 // Select the font
  // GM102B NO2 sensor
  val = gas.getGM102B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("NO2:", 60 - 24, 100 -24 , 1);// Print the test text in the custom font
  spr.drawRoundRect(60 - 24,100,80,40,5,TFT_WHITE); 
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,60 - 20,100+10,1);
  spr.setTextColor(TFT_GREEN);
  // GM302B C2H5CH sensor
  val = gas.getGM302B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("C2H5CH:", 230 -24 , 100 - 24 , 1);// Print the test text in the custom font
  spr.drawRoundRect(230 - 24,100,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,230 - 20,100+10,1);
  spr.setTextColor(TFT_GREEN);
  // GM502B VOC sensor
  val = gas.getGM502B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("VOC:", 60 - 24, 180 -24 , 1);// Print the test text in the custom font
  spr.drawRoundRect(60 - 24,180,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val,60 - 20,180+10,1);
  spr.setTextColor(TFT_GREEN);
  // GM702B CO sensor
  val = gas.getGM702B();
  if (val > 999) val = 999;
  spr.setTextColor(TFT_WHITE);
  spr.drawString("CO:", 230 -24 , 180 - 24, 1);// Print the test text in the custom font
  spr.drawRoundRect(230 - 24 ,180,80,40,5,TFT_WHITE);
  spr.setTextColor(TFT_WHITE);
  spr.drawNumber(val ,230 - 20 ,180+10,1);
  spr.setTextColor(TFT_GREEN);
  
  spr.pushSprite(0, 0);
  delay(100);

}
```

:::caution
- 模块应避免放置在挥发性硅化合物蒸汽中，否则会导致灵敏度降低且不可恢复。
- 模块应避免暴露在高浓度腐蚀性气体（如 H2S、SOX、Cl2、HCl 等）中，否则会造成不可逆损坏。
- 模块不应放置在水中或冰中。
- 模块通电后，传感器在工作过程中会加热到一定程度，这是正常现象。
- 用户必须在开始测量气体前预热模块。
- 该传感器获得的数值是模拟值，只能用作定性测量结果，不能用于定量测量。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/101020820/Grove+-+Multichannel+Gas+Sensor+V2.0_SCH%26PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Zip]** [Grove_Multichannel_Gas_Sensor_v2 库](https://github.com/Seeed-Studio/Seeed_Multichannel_Gas_Sensor/archive/master.zip)
- **[PDF]** [GM-102B 技术参数.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-102B+Technical+Parameter.pdf)
- **[PDF]** [GM-302B MEMS 技术参数v2.1.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-302B+MEMS+Technical+Parameterv2.1.pdf)
- **[PDF]** [样品测试结果.pdf](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor/res/Grove-Gas-Sensor-V2(Multichannel)-result-outcome.pdf)
- **[PDF]** [GM-502B MEMS VOC 技术参数 v2.1.pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-502B+MEMS+VOC+Technical+Parameter+v2.1.pdf)
- **[PDF]** [GM-702B 技术参数(Ver1.1).pdf](https://files.seeedstudio.com/wiki/Grove-Multichannel_Gas_Sensor/img/Grove-Multichannel_Gas_Sensor_V2_101020820/res/GM-702B+Technical+Parameter(Ver1.1).pdf)

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>