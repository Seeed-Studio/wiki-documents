---
description: SenseCAP M2 Data Only 本地控制台
title: SenseCAP M2 Data Only 本地控制台
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console
last_update:
  date: 02/14/2023
  author: Matthew
---

**如何访问本地控制台**
===================================

有两种方式可以访问本地控制台。

* * *

**通过路由器访问**
---------------------

*   **步骤 1**：将您的计算机和热点连接到同一个路由器。

您可以通过网线将设备连接到路由器，或者通过 SenseCAP Hotspot APP 设置 Wi-Fi 连接。

**注意**：您的计算机和设备应连接到同一个路由器/网络。

![SenseCAP M2 Local Console 步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png)

*   **步骤 2**：获取您设备的 IP 地址

如果您没有 SenseCAP MX Dashboard 账户，或者尚未将设备添加到 Dashboard，请在路由器管理页面上找到设备的 IP 地址，或在 Helium APP 上运行诊断来获取 IP 地址。

如果您已经注册了 SenseCAP MX Dashboard 账户并添加了设备，您可以从仪表板中找到设备的 IP 地址：

*   *   如果您通过 Wi-Fi 连接，您将看到可点击的设备 Wi-Fi IP 地址。
    *   如果您通过以太网电缆或本地局域网连接，您将看到可点击的设备局域网地址。

*   **步骤 3**：获取您的设备用户名和密码

从设备背面的信息中获取用户名和密码。

**出于安全考虑，每个设备都有唯一的密码。登录后，您可以更改密码。**

![SenseCAP M2 Local Console 步骤 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png)

*   **步骤 4**：在电脑上打开浏览器并登录

在浏览器中输入 IP 地址（您获取的）进入本地控制台。然后输入您的设备用户名和密码，点击登录按钮。

![SenseCAP M2 Local Console Login](https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png)

* * *

**通过设备 AP 热点访问**
--------------------------------

*   **步骤 1**：开启设备 AP 热点

按住按钮 5 秒直到蓝色指示灯缓慢闪烁，进入配置模式。

*   **步骤 2**：连接到 AP 热点

AP 热点名称为 SenseCAP_XXXXXX（6 位 MAC 地址），将您的计算机连接到此 AP 热点。

*   **步骤 3**：获取您的设备用户名和密码
*   **步骤 4**：在电脑上打开浏览器并登录

在浏览器中输入 IP 地址（**192.168.168.1**）进入本地控制台。然后输入您的设备用户名和密码，点击登录按钮。

* * *

**状态**
==========

在主页中，主要显示一些状态信息，如网络连接、LoRa 数据包发送和接收、系统信息、内存使用情况等。

**注意：** 您需要等待一段时间才能看到完整的信息。

![SenseCAP M2 Local Console Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5.png)

**注意：** 在 LoRa 数据包直方图中，不一定是有效的 Helium 数据包网络。

在系统信息中，您可以看到 helium 程序的版本、热点地址以及当前使用的区域参数。

![SenseCAP M2 Local Console Guide Region](https://www.sensecapmx.com/wp-content/uploads/2022/07/system.png)

* * *

**系统**
==========

**系统和时间**
-------------------

*   _页面路径_：系统 -> 系统

在这里您可以配置设备的基本方面，如主机名或时区。您可以修改时间同步配置。当然，一般情况下，您不必在此页面上更改任何内容。

![SenseCAP M2 Local Console Guide Time](https://www.sensecapmx.com/wp-content/uploads/2022/07/time.png)

* * *

**呼吸灯**
-------------------

*   _页面路径_：系统 -> 呼吸灯

呼吸灯是热点设备指示器，您可以配置灯光的行为。

![SenseCAP M2 Local Console Guide Breathing Light](https://www.sensecapmx.com/wp-content/uploads/2022/07/breathing-light.png)

* * *

**区域**
----------

*   _页面路径_：系统 -> 区域

在这里您可以更改区域参数。出厂默认值为 'AUTO'，这意味着：

*   如果您的热点没有断言位置，使用的区域基于您的热点类型，例如，设备型号 M2-EU868 使用区域 EU868。
*   如果您在热点上有断言位置，会根据位置自动调整区域。

一般情况下，您不需要设置区域。在特殊情况下：如果您的热点（仅数据）没有断言位置，您可以选择其他区域。例如，M2-US915 设备型号在澳大利亚可以设置为 AU915。

![SenseCAP M2 Local Console Guide Breathing Region Config](https://www.sensecapmx.com/wp-content/uploads/2022/07/region.png)

**注意：** 如果您在热点上有断言位置，区域配置必须为 **AUTO**。

* * *

**LuCi 密码**
-----------------

*   **页面路径**：系统 -> 管理

在这里您可以更改 LuCi 密码。

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**恢复出厂默认设置**
----------------------------

*   _页面路径_：系统 -> 固件

如果您忘记了 LuCi 密码，可以通过恢复出厂设置来恢复密码。但是，恢复出厂设置后，设备将再次更新。

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**重启**
----------

*   _页面路径_：系统 -> 重启

您可以在这里重置设备或配置设备的定时重置。

![SenseCAP M2 Local Console Reboot](https://www.sensecapmx.com/wp-content/uploads/2022/07/reboot.png)

* * *

**网络**
===========

**接口**
--------------

*   _页面路径_：网络 -> 接口

您可以在这里获取网络接口的信息。LAN IP 默认为"192.168.168.1"。当您的路由器网关 IP 也是这个时，您需要更改设备的 LAN IP。

![SenseCAP M2 Local Console Guide Network Interface](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_interface.png)

**无线**
------------

*   _页面路径_：网络 -> 无线

您可以在这里连接到 Wi-Fi。步骤如下：

*   **步骤 1**：点击"**扫描**"按钮扫描您所在区域的 Wi-Fi。

![SenseCAP M2 Local Console Guide Network Interface Wireless](https://www.sensecapmx.com/wp-content/uploads/2022/07/wireless_home.png)

*   **步骤 2**：选择您的 Wi-Fi 以加入网络。

![SenseCAP M2 Local Console Guide Network Interface Wifi](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_join.png)

*   **步骤 3**：输入您的 Wi-Fi 密码，然后提交并保存。

![SenseCAP M2 Local Console Guide Network Interface Wifi Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_submit.png)

![SenseCAP M2 Local Console Guide Network Interface Wifi Save](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_save.png)

稍等片刻，您就能连接到 WiFi，正如您在接口页面中看到的那样。

* * *

**MultiWan**
------------

*   _页面路径_：网络 -> MultiWan

在这里您可以看到网络接口的优先级和状态。MultiWAN 优先级为：wan(ETH) > wwan(Wi-Fi) > wwan0 (4G\*)。

![SenseCAP M2 Local Console Guide Network Interface MultiWan](https://www.sensecapmx.com/wp-content/uploads/2022/07/multiwan.png)

* * *

**诊断**
---------------

*   _页面路径_：网络 -> 诊断

在这里您可以测量您的互联网连接速度。

![SenseCAP M2 Local Console Guide Network Interface Network Test](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_test.png)