---
title: LCD 8*2字符-蓝色背光
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/LCD_8-2_Characters-Blue_back_light/
slug: /cn/LCD_8-2_Characters-Blue_back_light
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](http://bz.seeedstudio.com/depot/images/product/lcd821n.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-82-characters-blue-back-light-p-120.html?cPath=163_164)

## 原理图

---
![](https://files.seeedstudio.com/wiki/LCD_8-2_Characters-Blue_back_light/img/LCD-bbl-block.JPG)

## 规格

---

### 最大绝对额定值

<table>
<tr>
<th>项目</th>
<th>符号</th>
<th>最小值</th>
<th>最大值</th>
<th>单位</th>
</tr>
<tr>
<td>电源电压（逻辑）</td>
<td>V<sub>DD</sub>-V<sub>SS</sub></td>
<td>-0.3</td>
<td>7.0</td>
<td>V</td>
</tr>
<tr>
<td>电源电压（LCD）</td>
<td>V<sub>DD</sub>-V<sub>O</sub></td>
<td>-0.3</td>
<td>13.0</td>
<td>V</td>
</tr>
<tr>
<td>输入电压</td>
<td>V<sub>I</sub></td>
<td>-0.3</td>
<td>VDD+0.3</td>
<td>V</td>
</tr>
<tr>
<td>工作温度</td>
<td>T<sub>opr</sub></td>
<td>0</td>
<td>50</td>
<td>℃</td>
</tr>
<tr>
<td>存储温度</td>
<td>T<sub>stg</sub></td>
<td>-10</td>
<td>60</td>
<td>℃</td>
</tr>
</table>

### 机械数据

<table>
<tr>
<th>项目</th>
<th>标称尺寸</th>
<th>单位</th>
</tr>
<tr>
<td>模块尺寸(W×H×T)</td>
<td>58.0×32.0×9.5</td>
<td>mm</td>
</tr>
<tr>
<td>显示区域(W×H)</td>
<td>36.0×15.0</td>
<td>mm</td>
</tr>
<tr>
<td>字符尺寸(W×H)</td>
<td>2.45×5.0</td>
<td>mm</td>
</tr>
<tr>
<td>点尺寸(W×H)</td>
<td>0.45×0.5</td>
<td>mm</td>
</tr>
<tr>
<td>重量</td>
<td></td>
<td>g</td>
</tr>
</table>

### 电气特性

(V<sub>DD</sub>=5V±0.25V)

<table>
<tr>
<th>项目</th>
<th>符号</th>
<th>测试条件</th>
<th>最小值</th>
<th>典型值</th>
<th>最大值</th>
<th>单位</th>
</tr>
<tr>
<td>输入高电压</td>
<td>V<sub>IH</sub></td>
<td>-</td>
<td>2.2</td>
<td>-</td>
<td>V<sub>DD</sub></td>
<td>V</td>
</tr>
<tr>
<td>输入低电压</td>
<td>V<sub>IL</sub></td>
<td>-</td>
<td>-0.3</td>
<td>-</td>
<td>0.6</td>
<td>V</td>
</tr>
<tr>
<td>输出高电压</td>
<td>V<sub>OH</sub></td>
<td>I<sub>OH</sub>=0.3mA</td>
<td>2.4</td>
<td>-</td>
<td>-</td>
<td>V</td>
</tr>
<tr>
<td>输出低电压</td>
<td>V<sub>OL</sub></td>
<td>I<sub>OL</sub>=1.2mA</td>
<td>0</td>
<td>-</td>
<td>0.4</td>
<td>V</td>
</tr>
<tr>
<td>电源电流</td>
<td>I<sub>DD</sub></td>
<td>V<sub>DD</sub>=5.0V</td>
<td>-</td>
<td>1.2</td>
<td>3.0</td>
<td>mA</td>
</tr>
<tr>
<td>LCD驱动电压</td>
<td>V<sub>DD</sub> - V<sub>O</sub></td>
<td>Ta=25℃</td>
<td>-</td>
<td>5.0</td>
<td>-</td>
<td>V</td>
</tr>
</table>

### LED背光规格 (Ta=25℃)

<table>
<tr>
<th>项目</th>
<th>符号</th>
<th>典型值</th>
<th>最大值</th>
<th>单位</th>
</tr>
<tr>
<td>正向电压</td>
<td>V<sub>f</sub></td>
<td>4.05</td>
<td>4.25</td>
<td>V</td>
</tr>
<tr>
<td>正向电流</td>
<td>I<sub>f</sub></td>
<td>60</td>
<td>-</td>
<td>mA</td>
</tr>
<tr>
<td>发射波长</td>
<td>λ<sub>p</sub></td>
<td>568</td>
<td>-</td>
<td>nm</td>
</tr>
</table>

## 引脚定义及额定值

---
<table>
<tr>
<th>引脚</th>
<th>符号</th>
<th>电平</th>
<th>功能</th>
</tr>
<tr>
<td>1</td>
<td>V<sub>SS</sub></td>
<td>-</td>
<td>GND(0V)</td>
</tr>
<tr>
<td>2</td>
<td>V<sub>DD</sub></td>
<td>-</td>
<td>逻辑电源电压 (+5V)</td>
</tr>
<tr>
<td>3</td>
<td>V<sub>O</sub></td>
<td>-</td>
<td>LCD驱动电压</td>
</tr>
<tr>
<td>4</td>
<td>RS</td>
<td> H/L</td>
<td>H:数据
L:指令代码</td>
</tr>
<tr>
<td>5</td>
<td>R/W</td>
<td> H/L</td>
<td>H:读取
L:写入</td>
</tr>
<tr>
<td>6</td>
<td>E</td>
<td> H,H-&gt;L</td>
<td>使能信号</td>
</tr>
<tr>
<td>7</td>
<td>DB0</td>
<td> H/L</td>
<td>数据总线线</td>
</tr>
<tr>
<td>8</td>
<td>DB1</td>
<td> H/L</td>
</tr>
<tr>
<td>9</td>
<td>DB2</td>
<td> H/L</td>
</tr>
<tr>
<td>10</td>
<td>DB3</td>
<td>H/L</td>
</tr>
<tr>
<td>11</td>
<td>DB4</td>
<td> H/L</td>
</tr>
<tr>
<td>12</td>
<td>DB5</td>
<td> H/L</td>
</tr>
<tr>
<td>13</td>
<td>DB6</td>
<td> H/L</td>
</tr>
<tr>
<td>14</td>
<td>DB7</td>
<td> H/L</td>
</tr>
<tr>
<td>15</td>
<td>LEDA</td>
<td>-</td>
<td>LED背光电源</td>
</tr>
<tr>
<td>16</td>
<td>LEDK</td>
<td>-</td>
</tr>
</table>

## 机械尺寸

![](https://files.seeedstudio.com/wiki/LCD_8-2_Characters-Blue_back_light/img/LCD-bbl-dimen.JPG)

## 资源

* [Arduino示例代码](https://www.seeedstudio.com/depot/images/product/LCD0820.pde)

* [数据手册](https://www.seeedstudio.com/depot/datasheet/LMB0820-info.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>