---
title: 自带支架的自行车发电机 - 6V 3W
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Bicycle_Dynamo_With_Bracket-6V_3W/
slug: /cn/Bicycle_Dynamo_With_Bracket-6V_3W
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](http://bz.seeedstudio.com/depot/images/product/Bidynamo.jpg)

该产品提供清洁和绿色能源，无需任何燃料即可产生电力。它工作安全且安静。它时尚，用户可以通过低碳生活为保护地球做出贡献。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/bicycle-dynamo-with-bracket-6v-3w-p-798.html?cPath=155)

## 特点
---
* 简洁美观的外形设计，散热设计防雨、防尘、防震
* 恒流输出

## 注意事项
---
1. 长时间骑行后请勿触摸发电机外壳，可能会烫伤身体。请至少等待10分钟。
2. 可在雨天使用，但请勿将其浸入水中，并远离儿童。

## 规格
---
### 发电机整体尺寸和结构

1. 发电机主体最大直径为：40.5mm，主体最长长度为：94.5mm。

![](https://files.seeedstudio.com/wiki/Bicycle_Dynamo_With_Bracket-6V_3W/img/Bicycle-spec.JPG)

1. 摩擦滚轮  
2. 发电机主体  
3. 磁钢  
4. 绕组支架  
5. 弹簧外壳  
6. 线圈  
7. 扳手  
8. 接线板  
9. 后盖  

2. 输出：6V，3W

3. 保修期：1年

4. 使用寿命：2-3年

### 技术参数

**恒压输出功率测试**

<table>
  <tbody>
    <tr>
      <th>速度(km/h)</th>
      <th>输出功率(W)</th>
      <th>输出电压(V)</th>
      <th>输出电流(A)</th>
    </tr>
    <tr>
      <td width="200px">5</td>
      <td width="200px">0.56</td>
      <td width="200px">6.00</td>
      <td width="200px">0.126</td>
    </tr>
    <tr>
      <td>15</td>
      <td>1.89</td>
      <td>6.00</td>
      <td>0.369</td>
    </tr>
    <tr>
      <td>30</td>
      <td>4.09</td>
      <td>6.00</td>
      <td>0.560</td>
    </tr>
  </tbody>
</table>

**恒阻负载测试（18欧姆）**

<table>
  <tbody>
    <tr>
      <th>速度(km/h)</th>
      <th>输出功率(W)</th>
      <th>输出电压(V)</th>
      <th>输出电流(A)</th>
    </tr>
    <tr>
      <td width="200px">5</td>
      <td width="200px">0.45</td>
      <td width="200px">2.45</td>
      <td width="200px">0.115</td>
    </tr>
    <tr>
      <td>15</td>
      <td>1.89</td>
      <td>5.78</td>
      <td>0.325</td>
    </tr>
    <tr>
      <td>30</td>
      <td>3.21</td>
      <td>7.23</td>
      <td>0.435</td>
    </tr>
  </tbody>
</table>

**温度测试：**

<table>
  <tbody>
    <tr>
      <th>环境温度</th>
      <th>外壳温度</th>
      <th>温升</th>
      <th>备注</th>
    </tr>
    <tr>
      <td width="200px">20℃</td>
      <td width="200px">55.2℃</td>
      <td width="200px">32.2℃</td>
      <td width="200px">保持30cm距离测试</td>
    </tr>
  </tbody>
</table>

## 使用方法

### 硬件安装

将发电机固定在靠近自行车车轮的前叉上，调整高度至合适位置。（注意发电机固定侧“左或右”，必须匹配。）

1、移动扳手，让发电机滚轮与车轮边缘接触到合适位置。

## 常见问题解答 (FAQ)
---
请在此列出您的问题：

*   它可以直接为 Arduino 供电吗？

答：如果“直接”指的是将发电机的电线直接连接到 Arduino，那么当然不行。因为像所有发电机一样，这种发电机输出的是交流电（AC），这对于钨丝灯（例如灯泡）来说是可以的，但 LED 和固态设备（如 Arduino）都需要直流电（DC）。因此，您始终需要先使用桥式整流器。之后添加什么取决于您的预算和需求。Arduino 需要稳定的电压，因此对于 Arduino，您需要将发电机基本上用作电池充电器，然后通过充电的电池为所有设备供电。

为了实现最高效率，您理想情况下需要一个 DC 到 DC 转换器（可以搜索“升降压转换器”），或者至少需要某种由桥式整流器供电的充电电路。

请参阅下面的链接。

*   如果我停下来（例如在红灯处），发电机会自然停止输出能量。我需要什么来保持能量流动？一个电容器吗？

答：是的，这可以工作几秒到一分钟以上，具体取决于您使用的 LED 的亮度和电容器的大小。

问：一个电池？有什么规格？

答：请搜索任何一个众多网站（我在下面给您提供了一个起点），这些网站会告诉您如何用一个 *standlight*（备用灯）来制作自行车灯。
这是您需要的搜索关键词。

问：我的预期用途是 a) 给我的手机充电，或者 b) 为 Arduino 供电并做一些酷炫的事情 :)

答：这是*完全*可行的，但同样，您需要将（相当可变的）3-~12伏交流电转换为更适合的（且稳定的）直流电。如果您使用任何开关，除了发电机本身的“开关”之外，请注意使用电压调节器，因为发电机输出的电压——通过二极管，在*无负载*情况下——可能会轻松将电容器充电到发电机的绝对*峰值*输出电压，这可能非常高。然后，当您重新连接 LED 时，可能会瞬间烧毁它。如果您始终保持灯连接并打开，并使用电容器作为备用灯，只需在您想关闭时将发电机从车轮上移开，这就不会有问题。

祝好 --Nighto 2011年6月10日 01:37 (CST)

*   提供的发电机仅适用于安装在前叉上。任何给定的发电机只能在一侧工作。这种发电机在这方面相当不灵活。请参阅 [https://en.wikipedia.org/wiki/Bottle_dynamo](https://en.wikipedia.org/wiki/Bottle_dynamo) 了解安装在自行车前叉上的发电机图片，面向前方。

许多在这里购买它的人将其用于自行车照明以外的其他用途，因此对他们来说，这些都无关紧要。

不要假设人们不会将它用于自行车，鉴于它是自行车发电机以及它的价格，它是一个具有竞争力的选项。对于骑自行车的人来说，它是一个不错的小发电机，但必须安全安装。这是基本的常识。

*   如果您不确定，请咨询当地的自行车技师以获取信息。*

## 资源
---
*   [文件:Spec.doc](https://files.seeedstudio.com/wiki/Bicycle_Dynamo_With_Bracket-6V_3W/res/Spec.doc)

## 外部链接

以下是一些外部网页链接，提供更多应用创意、文档/数据表或软件库。

[如何连接发电机线](http://www.yellowjersey.org/dami.html)（信不信由你，有些人确实需要知道）

[http://pilom.com/BicycleElectronics/DynamoCircuits.htm](http://pilom.com/BicycleElectronics/DynamoCircuits.htm)

[http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle](http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>