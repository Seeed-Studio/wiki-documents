---
description: 本文主要介绍如何使用 fuxa 实现 SCADA。

title: 使用 reComputer R1000 和 fuxa 实现 SCADA
keywords:
  - 边缘控制器
  - reComputer R1000
  - fuxa
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fuxa_achieve_scada
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## 简介
FUXA 是一个基于 Web 的过程可视化（SCADA/HMI/仪表盘）软件。通过 FUXA，您可以为您的机器创建现代化的过程可视化界面，并实时显示数据。它支持 Modbus RTU/TCP、Siemens S7 协议、OPC-UA、BACnet IP、MQTT 和其他协议。

本文主要介绍如何使用 fuxa 实现 SCADA。在文章中，fuxa 从 `node-red` 和 `OPC UA 模拟器` 接收数据，并使用 `图表` 和 `圆形仪表` 显示数据；同时绘制一系列图形以模拟工业过程。

## 开始

在开始这个项目之前，您可能需要提前准备好硬件和软件，如下所述。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备
* Python 3.11 可能与 fuxa 不兼容。如果您的 Python 版本是 3.11，请考虑更换为其他版本的 Python。
* 在 reComputer R1000 上使用 [fuxa](https://github.com/frangoteam/FUXA)。您可以参考以下步骤在 reComputer R1000 上安装 fuxa：
  ```shell
    ## 您需要安装 Node 版本 14 || 16 || 18。
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## 接下来从 npm 安装 FUXA
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```
* 关于如何使用 fuxa 实现 OPC-UA 数据交互，您可以参考此 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_opc_ua/)。
* 关于如何使用 fuxa 实现与 mqtt 客户端的数据交互，您可以参考此 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_mqtt_client/)。与该 wiki 不同的是，我们在 `node-red` 中发布的数据是通过 `function` 模块处理的，并使用 `loop` 模块进行连续发布。`function` 模块的代码如下：
  ```java
  ## 启动时
    global.set('firstTank', '10000');
    global.set('secondTank', '0');
    global.set('thirdTank', '0');
  ```
  ```java
  ## 消息处理
    var firstTank = global.get('firstTank');
    var secondTank = global.get('secondTank');
    var thirdTank = global.get('thirdTank');
    if (firstTank <= 0) {
        global.set('firstTank', 10000);
        global.set('secondTank', 0);
        global.set('thirdTank', 0);
        firstTank=10000;
        secondTank=0;
        thirdTank=0;
    }

    firstTank = firstTank - 3;
    secondTank++;
    thirdTank++;
    thirdTank++;
    global.set('firstTank',firstTank);
    global.set('secondTank',secondTank);
    global.set('thirdTank',thirdTank);
    var data = {
        "firstTank":firstTank,
        "scondTank":secondTank,
        "thirdTank":thirdTank,
    };
    msg.payload = data;
    return msg;
  ```
  主要是将 firstTank、secondTank 和 thirdTank 封装成 json 格式，然后让 mqtt-out 模块发布它。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/node-red-mqtt.png" /></center>

- 点击 fuxa 右下角的 `+` 按钮，输入 `名称`、`类型`，选择 `Internal`，最后点击 `OK` 以获得一个新模块。该模块没有与外部设备通信的功能，但它允许我们添加自定义标签。这些标签支持 `boolean`、`number` 和 `string` 三种数据类型，可以方便我们后续的工作。

    <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_internal.gif" /></center>

### 硬件配置

我们使用以太网线将 W10 PC 和 reComputer R1000 连接到交换机，以确保它们在同一网络段。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## 可视化显示和主要控件简介

### 图表
在 fuxa 中提供了曲线图和柱状图。以曲线图为例，`Chart` 的属性如图所示。您可以设置 `Chart` 的 `名称`、`字体大小`、`数据格式`、`时间格式`、`X 轴和 Y 轴样式` 等属性。最重要的是 `Chart to show`，它决定了我们想要显示的数据源以及线条的格式。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/chart_property.png" /></center>

点击 `Chart to show`，然后选择 `New Chart`，会弹出一个新窗口，点击新窗口右上角的 `+` 按钮，输入 `名称`，然后点击 `OK`，即可成功创建一个新的线条配置。接着点击新创建的线条配置，再点击 `Add Line`，选择您想要显示的数据，最后点击 `OK`，即可生成一条新的曲线。通过此过程可以添加多条曲线。最后点击 `OK` 完成配置。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/new_chart_line_confiigure.png" /></center>

我们在这里使用 `Chart` 来显示来自 `Prosys OPC UA Simulation Server` 的数据。可以看到数据成功以图表的形式显示出来。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_chart.gif" /></center>

### 开关
开关的属性如图所示。我们选择一个名为 `swich_1` 的布尔数据作为开关状态。您可以配置开关在开启或关闭时的显示状态，包括颜色配置、文本显示等。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/swich_property.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_swich.gif" /></center>

### 图形
Fuxa 提供了多种 `shape`，供用户绘制工业可视化界面。每个 `shape` 都有三个属性，即 `Property`、`Events` 和 `Actions`。
其中，`Property` 主要用于配置 `shape` 的颜色。通过绑定一个 `Tag`，`shape` 会根据 `Tag` 值的变化显示不同的颜色。您可以点击右上角的 `+` 来设置不同的颜色。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_property.png" /></center>

这里以一个仓库图案为例，通过 `Property` 填充其颜色。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/fill_color.gif" /></center>

`Events` 主要有两个内容，`Type` 表示事件类型，`Action` 表示事件触发后的动作。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_Events.gif" /></center>

`Actions` 需要绑定一个 `Tag`，不同的 `Tag` 值可以触发不同的动作。设置 `Min` 和 `Max` 的值，然后在 `Type` 选项中选择所需的动作。当 `Tag` 数据达到 Min 和 Max 之间的区间时，会触发相应的动作。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shape_setting_actions.png" /></center>

这里以一个仓库图案为例，通过 `Actions` 控制其旋转和停止。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/turn_use_action.gif" /></center>

### 管道
在显示工业流程时，可以使用 `pipe` 表示工业材料的流动方向。管道的属性如图所示。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/pipe_prorety.png" /></center>

`Property` 部分可以设置管道的宽度、颜色等属性。`Actions` 同样需要绑定一个 `Tag`。不同的 `Tag` 值可以让管道具有不同的动作。主要有四种动作：`Stop`、`Turn clockwise`、`Turn anticlockwise` 和 `Hide content`。本文展示了两种动作：`Stop` 和 `Turn clockwise`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_pipe.gif" /></center>

为了模拟工业流程，我们添加了两个储罐和一些管道等图案。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/after_add.gif" /></center>

### 圆形仪表
除了 `charts`，`Circular Gauge` 也可以实时显示数据。共有三种 `Circular Gauge` 可用。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/three_gauge.png" /></center>

使用时，需要通过绑定一个 `Tag` 来指定要显示的数据。同时，需要指定仪表可以显示的数据最大范围。您还可以设置仪表盘上的线条等属性。这里我们选择 `/dev/fromfuxa` 主题中的 `Tank1` 数据进行显示。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/gauge_show_data.gif" /></center>

之后，通过 `Circular Gauge` 也显示了 `Tank2` 和 `Tank3` 的数据，以表示每个储罐的当前容量。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/add_gauge.gif" /></center>

### 滑块
使用滑块可以调整流量、压力等变量。其属性如图所示。您可以设置其颜色和格式。使用时，需要绑定一个 `Tag`。然后滑块可以实时调整 `Tag` 的值。这里我们绑定了一个自定义的 `Flow control 1` 标签。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider_property.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider.gif" /></center>

### 报警
在工业过程中，某些参数（如压力）过高可能会引发一些危险。这时需要一个报警功能来提醒工作人员这里可能存在一些问题。Fuxa 支持对某个值进行实时监控，当该值达到某个危险范围时触发报警。

默认情况下，fuxa 的界面不会显示报警栏。您需要进行设置以打开报警栏。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/start_alarm.gif" /></center>

打开报警栏后，您可以设置报警。点击左上角的设置按钮，然后点击 `Alarms`，接着在新窗口中点击 `+`，即可显示报警设置窗口。这时需要绑定一个 `Tag`，系统会监控该 `Tag` 的值。`Alarms` 有四个级别，分别是 `High High`、`High`、`Low` 和 `Message`。您可以为每个级别设置一个 `Tag` 值范围，当 `Tag` 值达到该范围时，将触发相应级别的报警。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/alarm_show.gif" /></center>

### SCADA 演示

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" /></center>


## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>