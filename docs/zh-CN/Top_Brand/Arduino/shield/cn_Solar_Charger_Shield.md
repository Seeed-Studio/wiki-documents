---
description: 太阳能充电器扩展板
title: 太阳能充电器扩展板
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Solar_Charger_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: 太阳能充电器扩展板
category: 已停产
bzurl:
oldwikiname: Solar_Charger_Shield
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Solar_Charger_Shield
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solar-charger-shield.jpg)

太阳能充电器是一个可堆叠的Arduino兼容平台扩展板，能够提供自适应电池供电并作为现场充电的能量收集器。您可以使用各种电池来升压至5V输出，或者安装锂离子电池和太阳能板来形成一个自主传感器单元。

**型号：[INT107D3P](https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107)**

## 特性

### 充电

* 根据电源能力自动调节充电电流

* 专为太阳能板等不稳定电源设计

* 针对锂离子电池优化的充电曲线

* 充电状态指示器

### 供电

* 0.9-4.2V宽输入电压范围

* 5V直流稳压输出

* 最大500mA输出

* 最大87%转换效率

* 内置1A过流保护

## 应用创意

* 应用1
* 应用2
* 应用3

## 注意事项

警告和错误操作可能导致危险。

## 规格参数

### 关键规格

<table>
  <tbody>
    <tr>
      <td width="400px">PCB尺寸</td>
      <td width="400px">5.3 x 6.9 x 0.16 cm</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>指示器</td>
      <td>充电中，充电完成</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>电源供应</td>
      <td>4.4VDV-6VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>电源连接器</td>
      <td>Mini USB / JST</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>RoHS</td>
      <td>是</td>
    </tr>
  </tbody>
</table>

### 充电

<table>
  <tbody>
    <tr>
      <th>规格</th>
      <th>最小值</th>
      <th>标准值</th>
      <th>最大值</th>
      <th>单位</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={600}>输入电压</td>
      <td width={100}>4.4</td>
      <td width={100}>5</td>
      <td width={100}>6</td>
      <td width={100}>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>低功率阈值</td>
      <td></td>
      <td>3.7</td>
      <td>3.9</td>
      <td>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>充电电压</td>
      <td>4.158</td>
      <td>4.2</td>
      <td>4.242</td>
      <td>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>预充电阈值</td>
      <td>2.9</td>
      <td>3</td>
      <td>3.1</td>
      <td>VDC</td>
    </tr>
  </tbody>
</table>

### 电源供应

<table>
  <tbody>
    <tr>
      <th>规格</th>
      <th>最小值</th>
      <th>标准值</th>
      <th>最大值</th>
      <th>单位</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={600}>电池电压</td>
      <td width={100}>2.8</td>
      <td width={100}>3.7</td>
      <td width={100}>4.2</td>
      <td width={100}>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>输出电压</td>
      <td>4.6</td>
      <td>4.8</td>
      <td>5.0</td>
      <td>VDC</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>输出电流</td>
      <td>200</td>
      <td>4.2</td>
      <td>500</td>
      <td>mA</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>升压效率</td>
      <td>70</td>
      <td>80</td>
      <td>87</td>
      <td>&nbsp;%</td>
    </tr>
  </tbody>
</table>

### 充电曲线

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Changing-curve.jpg)

## 引脚定义和额定值

## 机械尺寸

## 使用方法

### 硬件安装

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware.jpg)

1.堆叠设置，将电池放在排针之间，连接电线到电池插座时请注意极性。

（红色接+，黑色接-）。

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step1.jpg)

2.太阳能电池板或其他能源应连接到PWR1，太阳能电池板插座。

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step2.jpg)

**能源：（4V到6V输出）**

5V太阳能电池

稳压电机输出

**可充电电池（3.7V到4.2V）**

锂电池

镍氢电池

**普通电池（2.8V到4.2V）**

AAA

AA

### 编程

包含重要的代码片段。
演示代码如：

```
Demo code
{

}
```

### 示例

项目和应用示例。

## 物料清单（BOM）/零件清单

生产产品所使用的所有组件。

## 常见问题

请在此列出您的问题：

## 支持

如果您有问题或其他更好的设计想法，可以前往我们的[论坛](https://www.seeedstudio.com/forum)或**wish**进行讨论。

## 版本跟踪

<table>
  <tbody>
    <tr>
      <th>版本</th>
      <th>描述</th>
      <th>发布日期</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}>Solar Charger Shield v1.0</td>
      <td width={500}>初始公开发布</td>
      <td width={200}>2010年5月1日</td>
    </tr>
  </tbody>
</table>

## 错误跟踪

错误跟踪是您可以发布在使用过程中认为可能发现的任何错误的地方。请写下您要说的内容，您的回答将帮助我们改进产品。

## 其他想法

其他想法是写下您关于此产品的项目想法或您发现的其他用途的地方。或者您可以在项目页面上写下它们。

## 如何购买

在此购买Solar Charger Shield：[https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107](https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107)

## 许可证

本文档采用知识共享[署名-相同方式共享许可证3.0](http://creativecommons.org/licenses/by-sa/3.0/)授权。源代码和库采用[GPL/LGPL](http://www.gnu.org/licenses/gpl.html)授权，详情请参见源代码文件。

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>