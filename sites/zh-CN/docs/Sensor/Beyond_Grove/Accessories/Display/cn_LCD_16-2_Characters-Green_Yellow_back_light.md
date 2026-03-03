---
title: LCD_16-2_字符-绿色黄色背光
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/LCD_8-2_Characters-Blue_back_light/
slug: /cn/LCD_16-2_Characters-Green_Yellow_back_light
last_update:
  date: 02/03/2022
  author: matthew
---

![](http://bz.seeedstudio.com/depot/images/product/lcd1621n.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-162-characters-green-yellow-back-light-p-62.html?cPath=163_164)

## 注意事项

---

1. LCD 面板由玻璃制成。任何机械冲击（例如从高处掉落）都会损坏 LCD 模块。

2. 不要对显示屏表面施加过大的力，这可能导致显示颜色异常变化。

3. LCD 的偏光片容易被划伤。如果可能的话，请在安装的最后一步才移除 LCD 保护膜。

4. 切勿尝试拆卸或重新组装 LCD 模块。

5. 只能使用异丙醇或乙醇清洁 LCD。其他溶剂（例如水）可能会损坏 LCD。

6. 安装 LCD 模块时，请确保其没有扭曲、变形或失真。

7. 确保在外壳与 LCD 面板之间提供足够的空间（带缓冲），以防止外力施加到 LCD 上，否则可能会损坏 LCD 或降低显示效果。

8. 只能从侧面握住 LCD 模块。切勿通过对热封或 TAB 施加力来握住 LCD 模块。

9. 切勿对 LCD 模块的组件施加力。这可能导致不可见的损坏或可靠性下降。

10. LCD 模块容易受到静电损坏。请注意保持最佳的防静电工作环境以保护 LCD 模块。

11. 从 LCD 上撕下保护膜时，静电可能会导致显示模式异常。这是正常现象，短时间内会恢复正常。

12. 注意防止被 LCD 面板的尖锐边缘划伤。

13. 切勿在超过绝对最大额定值的情况下操作 LCD 模块。

14. 尽量缩短信号线，以防止噪声信号影响 LCD 模块。

15. 切勿在没有电源供应的情况下向 LCD 模块施加信号。

16. IC 芯片（例如 TAB 或 COG）对光敏感。强光环境可能会导致故障。建议使用光密封结构外壳。

17. 温度冲击可能会降低 LCD 模块的可靠性。

18. 存储 LCD 模块时，避免暴露在阳光直射、高湿度、高温或低温环境中。这些条件可能会损坏或降低 LCD 模块的性能。

## 原理图

---

### 模块框图

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-wbl-block-162.JPG)

## 规格

---

* LCD 显示模式：STN，正显，半透型

* 显示颜色：深蓝色/黄绿色

* 视角：6H

* 驱动方式：1/16 占空比，1/5 偏压

* 背光：黄绿色 LED 背光

* 外形尺寸：80*36*15.8 MAX

:::note

1. 颜色调性可能会因温度和驱动条件而略有变化。<br />
2. 颜色定义为非活动/背景颜色。
:::

### 交流特性

V<sub>ss</sub>=0V, V<sub>DD</sub>=5V, T<sub>OP</sub>=25℃

<table>
<tr>
<th>项目</th>
<th>符号</th>
<th>最小值</th>
<th>典型值</th>
<th>最大值</th>
<th>单位</th>
</tr>
<tr>
<td width="200px">E 周期时间</td>
<td width="100px">tc</td>
<td width="100px">1500</td>
<td width="100px">-</td>
<td width="100px">-</td>
<td width="100px">ns</td>
</tr>
<tr>
<td>E 高电平宽度</td>
<td>twh</td>
<td>700</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>E 低电平宽度</td>
<td>twl</td>
<td>700</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>E 上升时间</td>
<td>tr</td>
<td>-</td>
<td>-</td>
<td>18</td>
<td>ns</td>
</tr>
<tr>
<td>E 下降时间</td>
<td>tf</td>
<td>-</td>
<td>-</td>
<td>18</td>
<td>ns</td>
</tr>
<tr>
<td>地址设置时间</td>
<td>tas</td>
<td>5</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>地址建立时间</td>
<td>tasu</td>
<td>210</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>地址保持时间</td>
<td>tah</td>
<td>15</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>数据建立时间</td>
<td>tdsw</td>
<td>300</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>数据延迟时间</td>
<td>td</td>
<td>-</td>
<td>-</td>
<td>480</td>
<td>ns</td>
</tr>
<tr>
<td>数据保持时间（写入）</td>
<td>tdhw</td>
<td>15</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>数据保持时间（读取）</td>
<td>tdhr</td>
<td>30</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
</table>
<table>
<tr>
<td>
<div align="center">
<img width={1000} src="https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-module-WTiming.jpg" />
</div>
</td>
<td>
<div align="center">
<img width={1000} src="https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-module-RTiming.jpg" />
</div>
</td>
</tr>
<tr>
<td><strong>主机写入时序图</strong></td>
<td><strong>主机读取时序图</strong></td>
</tr>
</table>

## 引脚定义和额定值

---
<table>
<tr>
<th>引脚号</th>
<th>引脚名称</th>
<th>I/O</th>
<th>描述</th>
</tr>
<tr>
<td width="100px">1</td>
<td width="100px">VSS</td>
<td width="100px">电源</td>
<td width="500px">负电源，地(0V)</td>
</tr>
<tr>
<td>2</td>
<td>VDD</td>
<td>电源</td>
<td>正电源</td>
</tr>
<tr>
<td>3</td>
<td>V0</td>
<td>电源</td>
<td>LCD对比度参考</td>
</tr>
<tr>
<td>4</td>
<td>RS</td>
<td>输入</td>
<td>
* RS=高电平: DB0-DB7=显示RAM数据  
* RS=低电平: DB0-DB7=指令数据
</td>
</tr>
<tr>
<td>5</td>
<td>R/W</td>
<td>输入</td>
<td>
读模式下 R/W=高电平  
从LCD模块读取数据，数据出现在DB0-DB7，当E=高电平且设备被选中时，主机可以读取数据。

写模式下 R/W=低电平；  
向LCD模块写入数据，数据出现在DB0-DB7，当E=高电平-&gt;低电平且设备被选中时，数据将写入LCD模块。
</td>
</tr>
<tr>
<td>6</td>
<td>E</td>
<td>输入</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>DB0</td>
<td>I/O</td>
<td>数据总线；用于显示数据或指令数据的三态I/O端口</td>
</tr>
<tr>
<td>8</td>
<td>DB1</td>
<td>I/O</td>
<td>数据总线；用于显示数据或指令数据的三态I/O端口</td>
</tr>
<tr>
<td>9</td>
<td>DB2</td>
<td>I/O</td>
<td>数据总线；用于显示数据或指令数据的三态I/O端口</td>
</tr>
<tr>
<td>10</td>
<td>DB3</td>
<td>I/O</td>
<td>数据总线；用于显示数据或指令数据的三态I/O端口</td>
</tr>
<tr>
<td>11</td>
<td>DB4</td>
<td>I/O</td>
<td>数据总线；用于显示数据或指令数据的三态I/O端口</td>
</tr>
<tr>
<td>12</td>
<td>DB5</td>
<td>I/O</td>
<td>数据总线；用于显示数据或指令数据的三态I/O端口</td>
</tr>
<tr>
<td>13</td>
<td>DB6</td>
<td>I/O</td>
<td>数据总线；用于显示数据或指令数据的三态I/O端口</td>
</tr>
<tr>
<td>14</td>
<td>DB7</td>
<td>I/O</td>
<td>数据总线；用于显示数据或指令数据的三态I/O端口</td>
</tr>
<tr>
<td>15</td>
<td>CS1</td>
<td>输入</td>
<td>芯片选择，当CS1=1(*1)时，启用对LCD模块左侧（64列）的访问</td>
</tr>
<tr>
<td>16</td>
<td>CS2</td>
<td>输入</td>
<td>芯片选择，当CS2=1(*1)时，启用对LCD模块右侧（64列）的访问</td>
</tr>
<tr>
<td>17</td>
<td>/RST</td>
<td>输入</td>
<td>复位信号 /RST = 低电平，显示关闭，显示起始行寄存器变为0，无法接受任何命令或指令数据  
/RST = 高电平，正常运行</td>
</tr>
<tr>
<td>18</td>
<td>VOUT</td>
<td>输出</td>
<td>用于V0的电源升压输出</td>
</tr>
<tr>
<td>19</td>
<td>BLA</td>
<td>电源</td>
<td>LED背光的正电源</td>
</tr>
<tr>
<td>20</td>
<td>BLK</td>
<td>电源</td>
<td>LED背光的负电源</td>
</tr>
</table>

注意：

显示或指令数据可以分别或同时写入LCD模块的驱动器/控制器。

每次只能从LCD模块的一个驱动器/控制器读取显示或指令数据，否则可能会发生意外的数据冲突。

## 机械尺寸

---
外形尺寸：98.0*60.0*13.7MAX  
（详见附加的外形图）

## 使用说明

---

### 内部寄存器

每个 LCD 模块部分中有三个寄存器。每个寄存器都可以独立控制。

**页(X)地址寄存器**

X 地址寄存器指定内部显示数据 RAM 的页。计数功能不可用，地址需通过指令设置。

**列(Y)地址计数器**

Y 地址计数器指定内部显示数据 RAM 的地址。它可以通过指令设置，并在读取或写入显示数据操作时自动增加 1。

**显示起始行(Z)寄存器**

Z 地址寄存器指示显示数据 RAM 到 LCD 顶行的起始位置。它可用于在 LCD 上滚动显示图案。

### 编程

---
**基本设置**

为了正确驱动 LCD 模块并提供正常显示，请使用以下设置：

* 显示起始行(Z 地址)=0

* LCD 显示=开启

:::note

1. 这些设置/命令应在启动时发送到 LCD 模块。<br />
2. 详情请参阅显示命令部分。
:::

**调整 LCD 显示对比度**

必须将一个可变电阻器连接到 LCD 模块，以提供 V0 的参考值。调整可变电阻器将改变 LCD 显示的对比度。推荐的可变电阻器值为 25k 至 50k。

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/VFD-lcd-module-162.JPG)

**重置 LCD 模块**

在上电时，应通过将 /RST 端子设置为低电平来初始化 LCD 模块。

当 /RST 拉低时，LCD 模块将：

* 显示关闭

* 显示起始行寄存器变为 0。(Z 地址=0)

当 /RST 为低电平时，除了状态读取外，无法接受其他指令。因此，在通过状态读取指令确认 DB4=0（清除 /RST）和 DB7=0（准备好）后再执行其他指令。初始上电时的电源条件如下：

<table>
<tr>
<th>项目</th>
<th>符号</th>
<th>最小值</th>
<th>典型值</th>
<th>最大值</th>
<th>单位</th>
</tr>
<tr>
<td width="200px">重置时间</td>
<td width="100px">trs</td>
<td width="100px">2.0</td>
<td width="100px">-</td>
<td width="100px">-</td>
<td width="100px">μs</td>
</tr>
<tr>
<td>上升时间</td>
<td>tr</td>
<td>-</td>
<td>-</td>
<td>150</td>
<td>ns</td>
</tr>
</table>

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/VFD-lcd-module-trtx.jpg)

## 资源

* [数据手册](https://bz.seeedstudio.com/depot/datasheet/LMB162ABC-Manual-Rev0.2.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>