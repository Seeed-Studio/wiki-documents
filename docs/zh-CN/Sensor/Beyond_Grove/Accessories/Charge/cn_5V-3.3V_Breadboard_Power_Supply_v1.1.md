---
title: 5V-3.3V 面包板电源模块 v1.1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/5V-3.3V_Breadboard_Power_Supply_v1.1/
slug: /cn/5V-3.3V_Breadboard_Power_Supply_v1.1
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/5V-3.3V_Breadboard_Power_Supply_v1.1/img/Supply.jpg)

由 SeeedStudio 设计的 5V/3.3V 面包板电源模块。它可以直接从 DC 墙插电源获取电力，并输出可选择的 5V 或 3.3V 稳压电压。与其他面包板电源设计相比，这款电源模块提供了类似 Seeeduino 的 mini-USB 接口，您可以通过切换开关选择电源来源。5V/3.3V 面包板电源模块包括 mini-USB 接口和电源插孔接口。该电源模块适用于宽度为 5.3cm 的面包板，例如 [透明面包板 - 8.2 x 5.3cm](https://www.seeedstudio.com/depot/bread-board-clear-82-x-53cm-p-262.html?cPath=175_176)，也可以适用于宽度为 5.5cm 的面包板，例如 [基础面包板 - 16.5*5.5 cm](https://www.seeedstudio.com/depot/basic-bread-board-16555-cm-p-4.html?cPath=175_176)，但会稍显紧凑。

使用该模块，您可以为面包板的两个电源轨供电，每侧都有一个独立的开关。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/5V-3.3V-Breadboard-Power-Supply-p-566.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性  

* 5V/3.3V 稳压电压
* 双电源轨输出
* 每个电源轨独立电源选择
* 双电源接口输入
* 专为面包板使用设计

## 规格  

<table>
  <tbody><tr>
      <th> 规格</th>
      <th> 条件</th>
      <th> 最小值</th>
      <th> 典型值</th>
      <th> 最大值</th>
      <th> 单位</th>
</tr>
    <tr>
      <td width={200}> 输入电压</td>
      <td width={400}></td>
      <td width={100}> 5.0</td>
      <td width={100}> 6.5</td>
      <td width={100}> 12.0</td>
      <td width={100}> V</td>
</tr>
    <tr>
      <td rowSpan={2}> 输出电压</td>
      <td> 通道 3.3V</td>
      <td> 3.235</td>
      <td> 3.3</td>
      <td> 3.365</td>
      <td> V</td>
</tr>
    <tr>
      <td> 通道 5V: 10mA≤IOUT≤600mA, 6.5V≤VIN ≤12V</td>
      <td> 4.9000</td>
      <td> 5.0</td>
      <td> 5.100</td>
      <td> V</td>
</tr>
    <tr>
      <td> 输出电流</td>
      <td></td>
      <td></td>
      <td></td>
      <td> 800</td>
      <td> mA</td>
</tr></tbody></table>

## 使用方法  

### 硬件安装  

1. 将针脚的极性与面包板对齐。（通常红色为 +，蓝色为 -）
2. 将电源模块完全插入面包板。

现在您可以通过两个跳线禁用电源，或者调整垂直开关选择不同的电压。水平开关用于选择插孔或 mini USB 线缆作为输入。

![](https://files.seeedstudio.com/wiki/5V-3.3V_Breadboard_Power_Supply_v1.1/img/Breadboard_power.jpg)

## 支持  

如果您有任何问题或更好的设计建议，可以前往我们的 [论坛](https://www.seeedstudio.com/forum) 或 [愿望墙](http://wish.seeedstudio.com) 进行讨论。

## 版本追踪  

<table>
  <tbody><tr>
      <th> 修订版本</th>
      <th> 描述</th>
      <th> 发布日期</th>
</tr>
    <tr>
      <td width={300}> v1.0b</td>
      <td width={500}> 初始公开发布</td>
      <td width={200}> 2009年11月16日</td>
</tr>
    <tr>
      <td width={300}> v1.1</td>
      <td width={500}> JST 电源连接器转换为 DC 插孔连接器</td>
      <td width={200}> 2011年9月20日</td>
</tr></tbody></table>

## 在线原理图查看器  

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Files/106100000/Res/5V-3.3V_Breadboard_Power_Supply_v1_1.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源  

* [Eagle](https://files.seeedstudio.com/wiki/Bazzar_Files/106100000/Res/5V-3.3V_Breadboard_Power_Supply_v1_1.rar)

## 许可  

本文档采用 Creative Commons [署名-相同方式共享 3.0 许可协议](http://creativecommons.org/licenses/by-sa/3.0/) 授权。源代码和库采用 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 授权，详情请参阅源代码文件。

## 技术支持与产品讨论  

感谢您选择我们的产品！我们提供多种支持渠道，确保您在使用我们的产品时获得最佳体验。以下是几种沟通方式，以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>