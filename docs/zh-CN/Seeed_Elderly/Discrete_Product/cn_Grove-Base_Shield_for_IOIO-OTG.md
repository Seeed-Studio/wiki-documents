---
description: Grove - IOIO-OTG 基础扩展板
title: Grove - IOIO-OTG 基础扩展板
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Base_Shield_for_IOIO-OTG
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/img/Grove-Base_Shield_for_IOIO-OTG.md.jpg)

IOIO 是一款专为 Android 设备设计的开发板。而这款 Grove - IOIO 基础扩展板是 IOIO 的扩展板，用于连接丰富的 Grove 资源。板上有 6 个现成的 Grove 插座，涵盖了 ADC 和 I2C 等功能。通过这种方式，所有 Grove 模块都可以与 IOIO 板连接。如果您想使用 IOIO 制作一些项目，并需要传感器或显示模块，这款 Grove - IOIO 基础扩展板可以为您带来便利。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-Shield-for-IOIO-OTG-p-1613.html)

## 接口

![](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/img/Base_Shield_for_IOIO_Interface_Function.jpg)

**J1, J2:** 可用于 TWI。

**J3, J6, J7, J8:** 可用于输入和输出，包括 PWM 和 UART。

以下是 IOIO-OTG 基础扩展板上的引脚映射描述：

<center>
<table cellspacing="0" width="40%">
<tr>
<th scope="col">Grove 接口</th>
<th scope="col">IOIO 引脚</th>
<th scope="col">A/D</th>
<th scope="col">I²C</th>
<th scope="col">PPSi</th>
<th scope="col">PPSo</th>
<th scope="col">PIC 引脚</th>
<th scope="col">PIC 功能</th>
</tr>
<tr>
<td rowspan="2">J2</td>
<td>1</td>
<td></td>
<td>DA1</td>
<td>Y</td>
<td>Y</td>
<td>31</td>
<td>SDA2/RP10/GD4/CN17/RF4</td>
</tr>
<tr>
<td>2</td>
<td></td>
<td>CL1</td>
<td>Y</td>
<td>Y</td>
<td>32</td>
<td>SCL2/RP17/GD5/CN18/RF5</td>
</tr>
<tr>
<td rowspan="2">J1</td>
<td>4</td>
<td></td>
<td>DA0</td>
<td>Y</td>
<td>Y</td>
<td>43</td>
<td>DPLN/SDA1/RP4/GD8/CN54/RD9</td>
</tr>
<tr>
<td>5</td>
<td></td>
<td>CL0</td>
<td>Y</td>
<td>Y</td>
<td>44</td>
<td>SCL1/RP3/GD6/CN55/RD10</td>
</tr>
<tr>
<td rowspan="2">J3</td>
<td>11</td>
<td></td>
<td></td>
<td>Y</td>
<td>Y</td>
<td>50</td>
<td>DPH/RP23/CN51/RD2</td>
</tr>
<tr>
<td>12</td>
<td></td>
<td></td>
<td>Y</td>
<td>Y</td>
<td>51</td>
<td>RP22/GEN/CN52/RD3</td>
</tr>
<tr>
<td rowspan="2">J6</td>
<td>13</td>
<td></td>
<td></td>
<td>Y</td>
<td>Y</td>
<td>52</td>
<td>RP25/GCLK/CN13/RD4</td>
</tr>
<tr>
<td>14</td>
<td></td>
<td></td>
<td>Y</td>
<td>Y</td>
<td>53</td>
<td>RP20/GPWR/CN14/RD5</td>
</tr>
<tr>
<td rowspan="2">J7</td>
<td>33</td>
<td>Y</td>
<td></td>
<td>Y</td>
<td>Y</td>
<td>50</td>
<td>DPH/RP23/CN51/RD2</td>
</tr>
<tr>
<td>34</td>
<td>Y</td>
<td></td>
<td>Y</td>
<td>Y</td>
<td>51</td>
<td>RP22/GEN/CN52/RD3</td>
</tr>
<tr>
<td rowspan="2">J8</td>
<td>37</td>
<td>Y</td>
<td></td>
<td>Y</td>
<td>Y</td>
<td>17</td>
<td>PGEC2/AN6/RP6/CN24/RB6</td>
</tr>
<tr>
<td>38</td>
<td>Y</td>
<td></td>
<td>Y</td>
<td>Y</td>
<td>18</td>
<td>PGED2/AN7/RP7/RCV/CN25/RB7</td>
</tr>
</table>
</center>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- [Grove - IOIO-OTG 基础扩展板 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>