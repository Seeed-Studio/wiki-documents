---
description: Grove Base Cape for BeagleBone® v2
title: Grove Base Cape for BeagleBone® v2
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Base_Cape_for_BeagleBone_v2
last_update:
  date: 1/10/2022
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_product_view_1200.jpg)

**Grove Base Cape for BeagleBone®** v2 是一款适用于 BeagleBone® 平台的 Grove 系统扩展板。此扩展板使得将 BeagleBone® 平台与众多 Grove 模块（传感器和执行器）连接变得更加方便。该扩展板还包含一个 256kb 的串行 EEPROM。通过免焊接设计和紧凑的即插即用端口，它将在产品开发过程中为您节省大量精力。

此扩展板提供了 12 个易于使用的 Grove 接口，可与庞大的 Grove 模块家族即插即用。这些接口包括 2 个 UART、2 个 ADC、4 个数字 I/O 和 4 个 I2C，能够与 BeagleBone® 板上的引脚连接，几乎涵盖了您所需的一切。此外，板上还配备了两个开关，用于在地址冲突时重置 I2C 地址。扩展板还集成了一个电压转换开关，可在正常的 5V 和 3.3V 之间切换。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)

## 特性

---

* 更方便地连接 BeagleBone® 和 Grove 模块。
* 免焊接设计
* 节省时间和成本

## 规格

---
<table>
  <tbody><tr>
      <td> 输出电压 </td>
      <td> 3.3 V 或 5 V（可切换）</td>
      </tr>
    <tr>
      <td> 最大输出电流 </td>
      <td> 3.3V 时 500 mA，5V 时 500 mA</td>
      </tr>
    <tr>
      <td> 数字 Grove 接口 </td>
      <td> 6 个，与 UART1（标记）和 UART4（标记）共享引脚</td>
      </tr>
    <tr>
      <td> 模拟 Grove 接口 </td>
      <td> 2 个</td>
      </tr>
    <tr>
      <td> I<sup>2</sup>C Grove 接口 </td>
      <td> 4 个</td>
      </tr>
    <tr>
      <td> UART Grove 接口 </td>
      <td> 2 个（UART1，UART4）</td>
      </tr>
    <tr>
      <td> EEPROM </td>
      <td> 256kb（型号：CAT24C256WI）</td>
      </tr>
    <tr>
      <td> 尺寸 </td>
      <td> 70 mm（长）× 50 mm（宽）</td>
      </tr></tbody></table>

### 部件清单

<table>
  <tbody><tr>
      <th>部件名称 </th>
      <th> 数量</th>
      </tr>
    <tr>
      <td>Grove Base Cape for BeagleBone® v2 </td>
      <td> 1 件</td>
      </tr></tbody></table>

## 硬件概览

---
![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_hardware_overview_1200.jpg)

**输出电压开关**，用于控制 Grove 接口的输出电压。

**USER 按钮**，可用作 BeagleBone® 的 USER 按钮。

**扩展板地址开关**，用于选择扩展板地址（仅在连接多个扩展板时有用），以避免 I2C 地址冲突。关于使用多个扩展板的详细信息，请访问 [https://beagleboard.org/Support/bone101/#capes](https://beagleboard.org/Support/bone101/#capes) 和 [http://elinux.org/BeagleBone_Community#Capes](http://elinux.org/BeagleBone_Community#Capes)。您可以使用此开关从 **00**（二进制，出厂设置为下拉）到 **11**（二进制，适用于 Grove Base Cape for BeagleBone v2）选择地址，这对应于所有扩展板的 0x54 到 0x57。

**写保护引脚**，用于禁用扩展板 EEPROM 的写保护（如果这些引脚已连接）。默认情况下未连接。

**LMV324 运算放大器**，是一种低电压轨到轨输出运算放大器，用于控制模拟电压。[了解更多](http://www.ti.com/lit/ds/symlink/lmv324.pdf)

**TXB0108PW**，是一款 8 位双向电压电平转换器。[了解更多](http://www.electroensaimada.com/uploads/9/0/8/9/9089783/txb0108.pdf)。

**注意** 您可以在 Grove Base Cape for BeagleBone® v2.0 的一端找到两个缺口（带孔的圆角）。此端与 BeagleBone® Green 上具有相同缺口的一端对应。您可以使用这些缺口确保正确的方向。

## 入门

在本节中，我们将向您展示一个使用此开发板的基本示例。您可以在 [BeagleBone® Recipes](https://www.seeedstudio.com/recipe/index.php?query=beaglebone) 页面找到更多示例。只需将 Grove Base Cape for BeagleBone® v2 添加到这些项目中，即可方便地进行线缆连接。

### 推荐阅读

* [BeagleBone® Green](/cn/BeagleBone_Green)

* [BeagleBone® 社区](https://beagleboard.org/)

* [BeagleBone® 101](https://beagleboard.org/support/bone101)

* [BoneScript](https://beagleboard.org/support/bonescript)

### 所需材料

* Grove Base Cape for BeagleBone® v2 × 1

* [Grove - Button](https://www.seeedstudio.com/item_detail.html?p_id=766) × 1

* [BeagleBone® Green](https://www.seeedstudio.com/item_detail.html?p_id=2504)（完全兼容 BeagleBone® Black，但无 HDMI 输出）

* USB 数据线（Type-A 到 Type-B，用于 Arduino）× 1 或 USB 数据线（Type-A 到 Micro Type-B，用于 Seeeduino）× 1

* [Grove 电缆](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

### 编码工作

1. 使用 USB 数据线将 BeagleBone® Green 连接到您的 PC 或 MAC。点击 [http://192.168.7.2:3000/ide.html](http://192.168.7.2:3000/ide.html) 打开 Cloud9 IDE。

2. 使用 Grove 电缆将 Grove - Button(P) 连接到 Grove Base Cape for BeagleBone® v2。将 Grove 电缆插入 GPIO 引脚 51。

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_wiki_demo_1200.jpg)

3. 将以下代码复制到 Cloud9 中，并保存为一个 **.js** 文件。

```
var b = require('bonescript');
b.pinMode('P9_16', b.INPUT);//GPIO 51 对应 P9_16。更多详情请访问 https://beagleboard.org/Support/bone101/#headers

setInterval(check,1000);

function check(){
    b.digitalRead('P9_16', checkButton);
}

function checkButton(x) {
    console.log(x.value);
    if(x.value == 1){
        console.log("你正在按下 Grove 按钮");
    }
    else{
        console.log("你没有按下 Grove 按钮");
    }
}
```

4. 在 Cloud9 IDE 中点击 **Run**，在 BeagleBone® Green 上运行程序。

5. 等待大约 10 秒，在 Cloud9 IDE 底部查看输出。输出可能如下图所示：

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_wiki_demo_result_600_s.png)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/res/Grove_Base_Cape_for_BeagleBone_v2.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [EAGLE 原理图和 PCB 文件及 PDF 格式原理图](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/res/Grove_Base_Cape_for_BeagleBone_v2.0_Schematics.zip)

* [BeagleBone® Green](/cn/BeagleBone_Green)

* [BeagleBone® 社区](https://beagleboard.org/)

* [BeagleBone® 101](https://beagleboard.org/support/bone101)

* [BoneScript](https://beagleboard.org/support/bonescript)

* [Cloud9](https://c9.io/)

* [TXB0108PW 数据手册](http://www.electroensaimada.com/uploads/9/0/8/9/9089783/txb0108.pdf)

* [LMV324 数据手册](http://www.ti.com/lit/ds/symlink/lmv324.pdf)

* 更多示例请访问 [https://www.seeedstudio.com/recipe/index.php?query=beaglebone](https://www.seeedstudio.com/recipe/index.php?query=beaglebone) 和 [https://www.seeedstudio.com/recipe/index.php?query=beaglebone](https://www.seeedstudio.com/recipe/index.php?query=beaglebone)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够尽可能顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>