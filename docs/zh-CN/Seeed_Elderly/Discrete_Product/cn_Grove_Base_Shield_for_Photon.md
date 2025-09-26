---
description: Grove 基础扩展板用于 Photon
title: Grove 基础扩展板用于 Photon
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Base_Shield_for_Photon
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_product_view_1200_s.jpg)

<!-- **Grove 基础扩展板用于 Photon** 是一款扩展板，它集成了 [Grove](/cn/Grove_System) 接口，您可以使用丰富且经济实惠的 Grove 功能模块构建更强大、更智能的应用程序。它拥有三个数字端口、两个模拟端口、两个 I<sup>2</sup>C 端口和一个 UART 端口。这是一种即插即用的扩展板，可以显著加速您的原型开发过程。 -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Particle-Photon-Base-Shield-p-2598.html?cPath=98_106_57)

## 特性
---
*   Grove 接口

*   连接大量低成本 Grove 模块

*   集成 I<sup>2</sup>C 和 UART 端口

## 应用场景
---
*   紧凑型物联网应用，例如智能路由器。

## 规格
---
<table>
<tr>
<td>Grove 接口</td>
<td>3 个数字端口<br/>2 个模拟端口<br/>2 个 I<sup>2</sup>C 端口<br/>1 个 UART 端口</td>
</tr>
<tr>
<td>尺寸</td>
<td>53 × 53 mm</td>
</tr>
<tr>
<td>重量</td>
<td>18g</td>
</tr>
</table>

## 硬件概览
---
![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_component_diagram_annotated_1200_s.jpg)

### **零件清单**

<table>
<tr>
<th>零件名称</th>
<th>数量</th>
</tr>
<tr>
<td>Grove 基础扩展板用于 Photon</td>
<td>1 个</td>
</tr>
</table>

## 入门指南
---
**注意：** 在本案例中，我们展示一个通用的开发环境。

<!-- ### 所需材料

*   [Particle Photon](https://www.seeedstudio.com/depot/Particle-Photon-p-2527.html) × 1

*   USB 数据线（A 型到 micro B 型） × 1
*   一台 PC 或 Mac

*   Grove 基础扩展板用于 Photon × 1

*   [Grove - 蜂鸣器](https://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38) × 1 -->

### 蜂鸣器

1. 请参考 [这里](https://docs.particle.io/guide/getting-started/connect/core/) 连接设备（PC 或 Mac）。

:::note
1. 我们建议您选择 **node.js v4.2.3 LTS**，特别是对于 Windows 10 用户。
2. 在运行命令 **particle setup** 后，您可能需要额外执行一步操作，即将您的设备（PC 或 Mac）连接到名称包含 **Photon** 的 Wi-Fi AP，特别是在 Windows 10 上。
:::

2. 使用 [Web IDE](https://build.particle.io/) 开发您的项目。使用您的账户登录并选择您的设备（点击左侧列倒数第二个图标）。

:::note
我们建议您选择 [Web IDE](https://build.particle.io/) 来编译或刷写代码到 Photon，这比使用 Particle Dev 更快，尤其是在您的网络连接不太好的情况下。
:::

3. 按如下方式连接设备：

![](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/img/Grove_Base_Shield_for_Photon_demo_conneciton_1200_S.jpg)

4. 现在您可以将以下代码复制到 Web IDE，并通过点击闪电状图标（左侧列第一个图标）将代码刷写到 Photon。

:::note
仅将代码复制到名为 _**filename.ino**_ 的标签页中。
:::

```
/*
   蜂鸣器
   使用数字引脚 D4
   此示例代码为公共领域代码。
   作者：xiaohe
  */
int led1 = D4; //设置 D4 为输出

void setup() {
    pinMode(led1, OUTPUT);
}

void loop() {
    // 启用蜂鸣器
    digitalWrite(led1, HIGH);

    // 保持 1 秒...
    delay(1000);

    // 然后关闭...
    digitalWrite(led1, LOW);

    // 等待 1 秒...
    delay(1000);

    // 循环重复！
}
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/res/Schematic_files_for_Grove_Base_Shield_for_Photon.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
*   [原理图文件](https://files.seeedstudio.com/wiki/Grove_Base_Shield_for_Photon/res/Schematic_files_for_Grove_Base_Shield_for_Photon.zip)

<!-- *   [Grove_System](/cn/Grove_System) -->

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