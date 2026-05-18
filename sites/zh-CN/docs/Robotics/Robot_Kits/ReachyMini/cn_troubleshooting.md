---
description: 综合故障排除指南和常见问题解答，涵盖Reachy Mini的常见问题、组装、连接、硬件、SDK和错误消息。
title: 故障排除与常见问题
slug: /reachymini_troubleshooting
keywords:
  - troubleshooting
  - faq
  - support
  - issues
  - fixes
  - assembly
  - connection
  - motors
  - sdk
  - errors
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/reachymini_troubleshooting/
---

# 故障排除与常见问题

欢迎来到Reachy Mini支持页面。点击以下问题查看答案。

## 🛠️ 故障排除 - 常见问题

**基本故障排除 - 请先阅读此内容，可以解决所有已知问题！**

<details>
<summary><strong>在任何操作之前和遇到任何问题时：更新并重启</strong></summary>

**确保您使用的是最新软件，并且已经重启了机器人和您的电脑。**
要重启机器人，请按OFF，等待5秒，然后按ON。这个简单的操作可以修复几个常见且已知的问题。

**如何更新软件：**

- **如果您使用Reachy Mini Control**
  从"⚙️"设置标签中，"检查更新"。如果有可用更新，点击"立即更新"。
- **如果您使用克隆的仓库**
  确保您要么：
  - 在最新的标记版本上，或
  - 与`main`分支保持同步（`git pull`）。

**无线Reachy Mini**：运行`reachyminios_check`以确保一切正常（请参阅[入门](./platforms/reachy_mini/get_started.md)）

</details>

<details>
<summary><strong>引导或更新失败/Python环境问题（Lite和仿真版）</strong></summary>

如果Reachy Mini Control在初始引导期间失败、创建虚拟环境时卡住，或者更新使Python环境处于损坏状态，您可以直接从桌面应用重置虚拟环境。

提供两个重置选项：

- **重置应用环境** — 仅重建`apps_venv`（已安装应用使用的环境）。已安装的应用需要重新安装。如果只有应用启动或安装失败，请先使用此选项。
- **完全环境重置** — 删除所有Python文件并重新下载一切（解释器 + 两个venv）。如果引导本身失败或"重置应用环境"没有帮助，请使用此选项。这可能需要几分钟。

**在哪里找到这些按钮：**

- **连接前**（查找机器人屏幕）：点击右上角的⚙️图标。在"本地环境（USB和仿真）"下会出现一个菜单，包含"重置应用环境"和完整重置选项。
- **连接后**（USB/仿真模式）：打开设置叠加层，进入"环境"部分，其中包含"重置应用环境"和"完全环境重置"按钮。

完全重置后，桌面应用将在下次启动时重新运行引导程序。

</details>

<details>
<summary><strong>电机相关问题</strong></summary>

这涉及以下问题：
- 电机闪烁红色或无响应/移动。
- 电机显示"过载错误"等错误。
- 找不到电机："未在端口上找到电机"、"电机缺失"等。

如果您有以下任何症状，请参阅[电机诊断和故障排除指南](./troubleshooting/motors_diagnosis.md)获取诊断和修复电机相关问题的详细步骤。

使用Reachy Mini Testbench应用将帮助您有效地识别和解决这些问题。

</details>

<details>
<summary><strong>电击错误</strong></summary>

Dynamixel电机上的电击错误意味着电源或短路存在问题。
请检查是否有任何电缆损坏，从底部PCB到头部。特别注意以下电缆：
- 电源线（黑色和红色）
- 电机用的3线电缆（300mm、200mm、100mm和40mm）

也可能是与上述"电机闪烁红色或过载错误"相同的问题。

</details>

<details>
<summary><strong>麦克风不工作</strong></summary>

如果您有以下症状：
- 音频录制不工作/返回静音
- 音频录制返回零

您的麦克风电缆可能插反了。
- 如果您的电缆是白色和蓝色，请再次检查组装说明，确保蓝色面朝上。
- 如果您的电缆是黑色的，请检查带"主板"字样的一面朝上（见下图）。
![mic_cable](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/black_fpc_cable.png)

如果您的电缆插好了但仍然有问题，很可能是麦克风的FPC电缆损坏了。请参阅教程[如何更换Reachy Mini麦克风的FPC电缆？](./troubleshooting/change_mic_fpc_cable.md)来修复此问题。

</details>

<details>
<summary><strong>音量低</strong></summary>

- 将您的机器人更新到1.2.3或更高版本

有关详细信息，请参阅文档：
[入门](./platforms/reachy_mini/get_started.md)

</details>

<details>
<summary><strong>权限错误</strong></summary>

- 将您的机器人更新到1.2.3或更高版本
- 重启机器人

</details>

<details>
<summary><strong>天线旋转了90°或180°</strong></summary>

这是一个制造问题。

按照此指南修复很容易：
[天线重新定位指南](https://drive.google.com/file/d/1FsmNpwELuXUbdhGHDMjG_CNpYXOMtR7A/view?usp=drive_link)

</details>

<details>
<summary><strong>电机抖动</strong></summary>

**天线抖动**

这是最常见的情况。天线（电机17和18）在设置为垂直位置（0°）时容易抖动。在这个角度下，齿轮箱的反向间隙使电机处于不稳定的平衡状态——就像倒立摆一样。电机不断尝试在一个摩擦力很小的点周围校正其位置，这会导致振荡。

最简单的修复方法是将天线偏移几度（通常10°就足够了）。这让重力施加一个小的偏置，在一个方向上占据机械游隙，消除抖动。

这现在是Reachy Mini中的默认行为——请参阅[PR #952](https://github.com/pollen-robotics/reachy_mini/pull/952)了解更多详情。

**调整PID值**

另一个选项是[调整PID控制值](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/config/hardware_config.yaml#L66C1-L67C1)。最佳值可能因机器人单元而异，因为制造中的微小摩擦差异就足以改变行为。

您可以首先尝试将电机10（底部）、17和18（天线）的P降低到180。
如果没有帮助，您也可以尝试将相同电机的D增加到10。

</details>

<details>
<summary><strong>头部在运动时发出吱吱声或摩擦声</strong></summary>

如果您在机器人头部移动时听到尖锐的吱吱声或摩擦声，Stewart平台连杆上的球形关节（球窝接头）可能需要维护。您可能还会注意到连接杆周围有深色灰尘或残留物。

这是正常的磨损。请按照[球形关节维护指南](./troubleshooting/spherical_joints_maintenance.md)清洁和重新润滑关节。

</details>

<details>
<summary><strong>Lite版本上的图像暗</strong></summary>

**➡️ 快速修复：在摄像头设置中调整曝光时间**

要修复图像暗的问题，请在摄像头控制应用中启用自动曝光或手动增加曝光时间。这些应用提供了直观的界面来调整曝光和其他摄像头参数。

**推荐应用：**

- **macOS：** [CameraController](https://github.com/itaybre/CameraController) - 用于USB摄像头控制的开源GUI应用
- **Linux：** qv4l2 - 基于Qt的V4L2摄像头控制GUI应用
  - 安装：`sudo apt install qv4l2`
- **Windows：** [Webcam Settings](https://www.softpedia.com/get/Internet/WebCam/Webcam-Settings-Tool.shtml)或[ManyCam](https://manycam.com/)用于高级摄像头控制

这些应用允许您通过直观的图形界面调整曝光时间、亮度和其他摄像头参数。

---

**➡️ 高级：使用libuvc进行深入摄像头控制**

对于需要精确控制摄像头参数的高级用户，您可以使用基于libuvc的命令行工具。这些工具提供对所有UVC摄像头控制的低级访问。

要专门修复黑暗问题，请使用这些命令行工具设置`auto-exposure-priority=1`。

**各平台命令行工具：**

- **macOS：** [uvc-util](https://github.com/jtfrey/uvc-util)

- **Linux：** [v4l2-ctl](https://manpages.debian.org/testing/v4l-utils/v4l2-ctl.1.en.html)
  - 安装：`sudo apt install v4l-utils`

- **Windows：** Windows没有直接等价物。

**注意：** 这些命令行工具需要技术知识，选择的工具可能会有所不同。在进行任何更改之前，使用`--help`并列出可用控件。

</details>

<details>
<summary><strong>包装中缺少零件</strong></summary>

确保先拆开所有东西。有些零件是预组装好的（例如底部头部零件已经放在后部头部零件中）。

![head_parts](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/head_parts.jpg)

然后，检查组装指南的零件列表，看看您是否真的缺少零件：
如果您100%确定缺少零件，请通过sales@pollen-robotics.com联系我们，并附上您拥有的所有零件的照片以及订单号或发票号。
您也可以找到[stl文件](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/descriptions/reachy_mini/mjcf/assets)自己打印，同时等待。
</details>

<details>
<summary><strong>无法使用USB-C电缆连接到无线Reachy Mini</strong></summary>

无线单元不像Lite版本那样通过USB暴露机器人，因此将USB-C电缆插入笔记本电脑不会给您提供有效的连接。
相反：

- 将机器人连接到您的WiFi网络，并使用笔记本电脑上的SDK客户端远程控制它。
- 如果您想在嵌入式Raspberry Pi上直接运行代码，请通过SSH进入并在那里执行脚本（这就是Reachy Mini Control在您发布/安装应用后所做的）。
- 对于有线链接，使用USB-C到以太网适配器加上以太网电缆——这只是用有线以太网替代WiFi。

</details>

<details>
<summary><strong>无线接入点不显示 - RPI无法启动</strong></summary>

头部PCB上有一个开关需要处于给定位置。如果不是这样，接入点就不会显示。这个开关可能在组装过程中被移动了，甚至可能是工厂错误。
请检查开关是否在"debug"位置而不是"download"位置。见下图：

![switch_position](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/wireless_switch.png)

如果开关在正确位置但您仍然看不到接入点，您可能需要按照[重新刷新RPI ISO教程](/reachymini_platforms_reachy_mini_reflash_the_rpi_ISO)重新刷新Raspberry Pi的iso。

</details>

## 🚀 入门和组装

<details>
<summary><strong>组装通常需要多长时间？</strong></summary>

大多数测试人员报告需要**1.5到2小时**。根据您的经验水平，最多可能需要4小时。

</details>

<details>
<summary><strong>组装过程中有困难的步骤吗？</strong></summary>

不，真正的问题！测试人员将其描述为**有趣、简单且令人满意**。基本工具和耐心就足够了。**电缆布线**和**正确拧紧零件**是最棘手的元素。当您购买Reachy Mini Lite或无线版时，它会附带印刷的用户指南，您也可以访问视频和数字指南。
Reachy Mini的视频[BETA](https://www.youtube.com/watch?v=_r0cHySFbeY)，LITE，WIRELESS

Reachy Mini数字组装指南[BETA](https://huggingface.co/spaces/pollen-robotics/Reachy_Mini_Assembly_Guide)，LITE，WIRELESS

</details>

<details>
<summary><strong>完成组装后剩下2根电缆和一些螺丝。这是正常的吗？</strong></summary>

是的，这完全正常。
我们有意在套件中包含备用电缆和螺丝，以防某些零件在组装过程中损坏或丢失。

您不需要安装它们。

</details>

<details>
<summary><strong>我的Reachy Mini首次启动时不移动。我应该检查什么？</strong></summary>

* **电源：** 确保7V-5A电源已插入。USB连接不足以驱动电机。
* **电缆：** 检查所有电缆是否完全插入。松动的电源线是"电机无响应"错误的常见原因。
* **故障排除部分：** 请参阅此页面顶部的"基本故障排除"部分。

</details>

<details>
<summary><strong>我需要手动启动守护进程吗？</strong></summary>

**不需要**

- 使用Reachy Mini（无线版）时，守护进程已经在嵌入式Raspberry Pi上运行。
- 使用Reachy Mini Lite时，您可以使用[桌面应用](./platforms/reachy_mini_lite/get_started.md)。
- 如果桌面应用在您的系统上不起作用（例如ARM64、不常见的发行版），您可以直接[安装和使用Python SDK](./SDK/installation.md)——这是一种完全受支持的替代方案！

</details>

## 🔌 连接和Reachy Mini Control

<details>
<summary><strong>如何将机器人连接到WiFi？</strong></summary>

请参阅[Reachy Mini无线指南](./platforms/reachy_mini/get_started.md)获取连接WiFi的详细说明。

</details>

<details>
<summary><strong>如何重置WiFi热点？</strong></summary>

如果您需要重置机器人的WiFi热点（例如，如果您无法连接或想要更改网络），请按照[WiFi重置指南](./platforms/reachy_mini/reset.md)中的说明操作。

</details>

<details>
<summary><strong>机器人有Web API吗？</strong></summary>

是的。守护进程提供REST API（FastAPI）和WebSocket支持。
* **文档：** `http://localhost:8000/docs`（守护进程运行时可用）。
* **功能：** 获取状态、移动关节、控制守护进程。

您可以使用API来控制机器人并获取其状态，甚至控制守护进程本身。该API使用[FastAPI](https://fastapi.tiangolo.com/)和[pydantic](https://docs.pydantic.dev/latest/)模型实现。

它应该为您提供与机器人交互的所有必要端点，包括：

- 获取机器人的状态（关节位置、电机状态等）
- 移动机器人的关节或设置特定姿态

该API使用OpenAPI进行记录，当守护进程运行时，您可以在http://localhost:8000/docs访问所有可用路由并测试它们。您也可以在http://localhost:8000/openapi.json访问原始OpenAPI模式。

如果您想为您的首选编程语言或框架生成客户端代码、连接到AI应用，甚至创建MCP服务器，这会很有用。

**WebSocket支持**

该API还支持WebSocket连接以获取实时更新。例如，您可以订阅关节状态更新：

```
let ws = new WebSocket(`ws://127.0.0.1:8000/api/state/ws/full`);

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};
```

</details>

<details>
<summary><strong>为什么需要虚拟环境（.venv）？</strong></summary>

有助于防止SDK安装期间的包冲突。

</details>

<details>
<summary><strong>reachy-mini.local无法解析</strong></summary>

无线单元通过mDNS将自己宣传为`reachy-mini.local`。这适用于大多数家庭和办公室网络，但在某些企业、会议或酒店网络上可能会失败。

如果`reachy-mini.local`无法解析：
- 在路由器的DHCP客户端列表中检查机器人的IP地址。
- 使用Reachy Mini Control应用——它可以发现本地网络上的机器人。
- 作为最后手段，扫描子网：
```bash
for i in $(seq 1 254); do
  curl -sf --connect-timeout 0.3 "http://192.168.1.${i}:8000/api/daemon/status" > /dev/null 2>&1 && echo "Found: 192.168.1.${i}"
done
```
调整`192.168.1.`前缀以匹配您的网络。

</details>

<details>
<summary><strong>机器人和电脑在会议/酒店WiFi上无法通信</strong></summary>

许多会议和酒店WiFi网络启用**客户端隔离**，这会阻止同一网络上的设备相互通信。症状：两个设备都连接到WiFi，两个都在同一子网中有IP地址，但它们无法到达彼此的HTTP端点。

**变通方法：** 使用手机热点。将机器人和电脑都连接到热点。这提供了一个简单的网络，设备可以看到彼此。

或者，使用USB-C到以太网适配器和以太网电缆直接连接到机器人（无线版本）。

</details>

<details>
<summary><strong>如何从中国访问HuggingFace服务？</strong></summary>

您可以使用此镜像：https://hf-mirror.com/

您需要设置以下环境变量：
```bash
export HF_ENDPOINT=https://hf-mirror.com/
```

请注意，您可能还需要使用镜像来访问PyPI和GitHub等服务。

</details>

<details>
<summary><strong>如何让对话应用在中国工作？</strong></summary>

Reachy Mini对话应用依赖OpenAI gpt-realtime API，在中国可能无法访问。

目前最好的变通方法是在您的机器（Lite版本）、机器人（无线版本）上设置VPN，或者直接在您的路由器上设置。

配置VPN路由规则时：

1）通过VPN路由流量，但保留本地网络流量，这样设备仍然可以访问。

您应该列入白名单：
- 您的本地LAN IP范围（例如192.0.0/16、192.168.1.0/24等，取决于您的网络设置）。
- 以下端口：
  - 22 (SSH)
  - 8000 (Reachy Mini守护进程)
  - 5353 TCP/UDP (mDNS / 本地发现)

这确保机器人仍然可以本地访问和发现，mDNS（`reachy-mini.local`）应该在网络上继续工作。

2）如果您的VPN支持选择性路由，一种更好的方法是只将必需的外部服务通过VPN路由，而不是通过所有HTTPS流量。

如果可能，配置VPN仅用于`huggingface.co`和`api.openai.com`。

这最小化了网络副作用，保持本地服务正常运行。

对于无线版本，在机器人上配置VPN后，重启守护进程以使更改生效：
```
sudo systemctl restart reachy-mini-daemon
```
要验证机器人是否可以从同一网络上的设备访问，您可以运行：
```
ping reachy-mini.local
```

_基于开源权重模型的方法正在开发中，请继续关注！_

</details>

## 🤖 硬件、电机和限制

<details>
<summary><strong>在哪里可以找到更多硬件信息？</strong></summary>

请参阅[Reachy Mini硬件页面](./platforms/reachy_mini/hardware.md)获取机器人硬件组件的详细信息。

</details>

<details>
<summary><strong>安全限制是什么（头部和身体）？</strong></summary>

如果您命令的姿态超出这些限制，机器人将自动限制到最近的安全姿态。

* **身体Yaw：** [-180°，180°]。
* **头部Pitch/Roll：** [-40°，40°]。
* **头部Yaw：** [-180°，180°]。
* **组合限制：** `body_yaw`和`head_yaw`之间的差异必须在**[-65°，65°]**内。

</details>

<details>
<summary><strong>为什么电机是"松弛"或"僵硬"的？（顺从性）</strong></summary>

* **`enable_motors()`**：电机**开启**（僵硬）。机器人保持位置。
* **`disable_motors()`**：电机**关闭**（松弛）。您可以通过手移动它。
* **`make_motors_compliant()`**：电机**开启但柔软**。适用于示范教学。

</details>

<details>
<summary><strong>如何访问电机参数？</strong></summary>

1. 您可以参阅使用[scan_motors.py脚本](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/tools/scan_motors.py)扫描电机。

- 如果您的机器人是Lite，您可以直接在您的电脑上运行脚本：
```bash
python -m reachy_mini.tools.scan_motors
```
- 如果您的机器人是无线版，请通过SSH进入机器人：
```bash
ssh pollen@reachy-mini.local
```
- 激活venv：
```bash
source /venvs/mini_daemon/bin/activate
```
- 并运行脚本（电机必须通电才能执行此操作！）：
```bash
python -m reachy_mini.tools.scan_motors --wireless
```
- 它应该打印检测到的电机列表。您应该在波特率1000000上拥有所有电机，ID如下：10、11、12、13、14、15、17、18。如果有些缺失，请再次检查电缆。如果有电机ID或波特率不同，请联系支持。

正确输出的示例：
```
Trying baudrate: 9600
No motors found at baudrate 9600
Trying baudrate: 57600
No motors found at baudrate 57600
Trying baudrate: 115200
No motors found at baudrate 115200
Trying baudrate: 1000000
Found motors at baudrate 1000000: [10, 11,12,13, 14, 15, 16, 17, 18]
```
2. Lite：您也可以使用Dynamixel Wizard读取电机参数。请参阅[此处](./platforms/reachy_mini_lite/wizard.md)的指南。

</details>

<details>
<summary><strong>电机一段时间后停止响应。</strong></summary>

* 检查电源连接。
* 电机可能进入了热保护模式（过热）。关闭并再次打开。
* 更新SDK（`pip install -U reachy-mini`）已为一些用户解决了这个问题。
* 如果电机LED闪烁红色，请参阅上面"基本故障排除"中的"电机闪烁红色或过载错误"部分。

</details>

<details>
<summary><strong>电池有安全功能吗？</strong></summary>
无线版包含一个适当的电池充电器。
电池还集成了BMS和温度传感器。

</details>

<details>
<summary><strong>如何查看剩余电池？</strong></summary>
我们无法检查电池状态，这是设计的已知限制。

我们只有在需要充电时才有"电池电量低"的LED指示。（绿色→橙色→红色）

</details>

<details>
<summary><strong>如何取出电池</strong></summary>

- 首先检查绿色LED是否没有亮起。
- 卸下底部的3颗螺丝，稍微取出底部。
![remove_foot](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/remove_foot.png)
- 拔下所示的连接器（红色箭头）以便取出电池。应该有一些双面胶带将电池固定到位，因此取出可能有点困难。
![battery_location](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/battery_connector.png)
- 当您重新组装时，按相反的步骤操作即可。小心不要夹住任何电缆。

</details>

<details>
<summary><strong>头部可能在某些官方动作中接触身体</strong></summary>

此行为是预期的，不是硬件或软件错误。
但是，由于可能会造成混淆，我们将更新这些动作以避免这种接触。

</details>

<details>
<summary><strong>我可以修改外观（皮肤/CAD）吗？</strong></summary>

* **CAD：** 完整的STEP文件尚未发布，但我们计划在未来发布。同时，您可以在仓库的[资产文件夹](/src/reachy_mini/descriptions/reachy_mini/mjcf/assets)中找到一些STL文件。
* **皮肤：** 可以，社区已经创建了自定义构建。一些"皮肤"STEP文件已在discord上共享，在["Pimp my Reachy Mini"](https://discord.com/channels/519098054377340948/1453340883775651861)频道。

</details>

<details>
<summary><strong>我的麦克风扁平电缆断了</strong></summary>

麦克风电缆的规格如下：
- FFC/FPC柔性扁平电缆
- 12针
- 0.5mm间距
- A型（连接器在同一侧）
- 15mm长度

如果您正在寻找麦克风电缆的替代品，这里有一些参考：
- [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
- [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

</details>

## 🐍 SDK、应用和编程

<details>
<summary><strong>如何从Python连接？</strong></summary>

使用`ReachyMini`类。

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # 您的代码在这里
    print(mini.state)
```

</details>

<details>
<summary><strong>如何创建新应用？</strong></summary>

使用应用助手CLI：

```bash
reachy-mini-app-assistant create my_app_name /path/to/destination --publish
```

请参阅完整指南：[构建和发布应用](./SDK/apps.md) — 涵盖应用结构、测试、发布、调试和部署。

</details>

<details>
<summary><strong>我的应用崩溃或无法启动</strong></summary>

如果您的应用依赖于环境中未安装的包，它将在导入时崩溃，没有可见的错误。手动测试导入：

```bash
# 无线版
ssh pollen@reachy-mini.local "/venvs/apps_venv/bin/python3 -c 'from my_app.main import MyApp'"

# Lite/本地
python -c "from my_app.main import MyApp"
```

有关更多调试提示（查看日志、常见陷阱），请参阅[调试应用](./SDK/apps.md#debugging-apps)。

</details>

<details>
<summary><strong>是否支持直接从Reachy Mini Control安装应用？</strong></summary>

当然！您可以直接从Reachy Mini Control安装应用（如果是原生应用），或者将Web应用添加到您的收藏夹。

</details>

<details>
<summary><strong>在Windows上所有应用安装都失败！</strong></summary>

这可能与在Windows上创建符号链接的权限不足有关。您可以将环境变量`HF_HUB_DISABLE_SYMLINKS_WARNING`设置为1以消除导致失败的警告。

在终端中运行：
```powershell
set HF_HUB_DISABLE_SYMLINKS_WARNING=1
```

</details>

<details>
<summary><strong>从Hugging Face安装应用失败。</strong></summary>

更新您的SDK。早期版本在Space安装方面存在bug。

```bash
pip install -U reachy-mini
```

</details>

<details>
<summary><strong>有仿真模式吗？</strong></summary>

是的，通过MuJoCo。这仍在进行中，但您可以使用`--sim`标志运行代码，或者如果您只是测试逻辑而不需要物理，可以使用`ReachyMini(media_backend="no_media")`。

</details>

<details>
<summary><strong>如何在无线版上调试应用？</strong></summary>

SSH进入嵌入式计算机，克隆（或复制）您的应用，然后手动运行它。这再现了Reachy Mini Control在启动应用时所做的事情。

```bash
ssh pollen@reachy-mini.local
# 密码：root
cd your_app_name
python your_app_name/main.py
```

您的GUI将在常规地址打开（例如`http://reachy-mini.local:8042`）。

</details>

## 🕹️ 移动机器人

<details>
<summary><strong>如何移动头部？</strong></summary>

将`goto_target`与`create_head_pose`一起使用：

```python
from reachy_mini.utils import create_head_pose

# ... 在 with ReachyMini() as mini: 内：
mini.goto_target(head=create_head_pose(yaw=-10, pitch=20))
```

</details>

<details>
<summary><strong>`goto_target`和`set_target`有什么区别？</strong></summary>

* **`goto_target`**：**平滑**。随时间插值运动（默认0.5秒）。最适合手势。
* **`set_target`**：**即时**。立即设置目标。最适合高频控制（远程操作、数学轨迹）。

</details>

<details>
<summary><strong>如何录制和回放动作？</strong></summary>

**录制：**
在控制循环周围调用`start_recording()`和`stop_recording()`。

```python
mini.start_recording()
# ... 移动机器人 ...
move = mini.stop_recording()
```

**回放：**
使用`RecordedMoves`类从[Hugging Face库](https://github.com/pollen-robotics/reachy_mini_dances_library)加载动作。

```python
mini.play_move(recorded_moves.get("dance_1"))
```

</details>

<details>
<summary><strong>我的机器人动作看起来很抖动。控制循环运行正确吗？</strong></summary>

您可以通过检查守护进程状态来验证电机控制循环是否正常运行：
- 通过SDK
```python
mini = ReachyMini()
print(mini.client.get_status())
```
- 通过REST API在`http://localhost:8000/docs`（Lite）和`http://reachy-mini.local:8000/docs`（无线版）上（查找`/api/daemon/status`端点）

您应该看到约50Hz的值（约20ms周期）：
```python
{
  ...
"motor_controller": "ControlLoopStats(period=~19.99ms, read_dt=~1.94 ms, write_dt=~0.19 ms)"
  ...
}
```

如果周期远高于20ms，则意味着控制循环运行不够快。这可能是由于：
- 电脑上的CPU负载过重（例如其他应用使用太多CPU）。
- （仅限Lite）USB延迟高（尝试配置您的串行端口）。

</details>

## 👁️ 视觉和音频

<details>
<summary><strong>音量太低（Linux）</strong></summary>

1. 运行`alsamixer`。
2. 将**PCM1**设置为100%。
3. 使用**PCM，0**调整全局音量。

要使其永久化：
```bash
CARD=$(aplay -l | grep -i "reSpeaker" | head -n1 | sed -n 's/^card \([0-9]*\):.*/\1/p')
amixer -c "$CARD" set PCM,1 100%
sudo alsactl store "$CARD"
```

这是XVF3800声卡的[已知问题](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/02_setting_up_the_hardware.html#low-volume-of-playback-audio-on-linux-for-project-ua)。

</details>

<details>
<summary><strong>如何获取摄像头帧？</strong></summary>

使用`media`对象。

```python
with ReachyMini() as mini:
    frame = mini.media.get_frame()
    # 返回一个numpy数组（形状为（高度，宽度，3），数据类型为uint8）
```

</details>

<details>
<summary><strong>如何使用麦克风/扬声器？</strong></summary>

```python
# 获取音频
sample = mini.media.get_audio_sample()

# 播放音频
mini.media.push_audio_sample(numpy_chunk)
```

</details>

<details>
<summary><strong>如何让Reachy看向某个东西？</strong></summary>

* **2D（图像）：** `mini.look_at_image(x, y)` - （0,0是左上角）。
* **3D（世界）：** `mini.look_at_world(x, y, z)` - 机器人坐标系中的坐标。

</details>

<details>
<summary><strong>面部追踪感觉慢。</strong></summary>

性能很大程度上取决于光照条件。确保面部光线充足。LOCAL后端（GStreamer IPC）为设备上的应用提供最低延迟。

</details>

<details>
<summary><strong>如何检查声音系统是否正常工作？</strong></summary>

### Reachy Mini Lite版本

测试Lite版本最简单的方法是直接从电脑上使用*Pollen Robotics Reachy Mini Audio*设备来验证功能是否正常。

### Reachy Mini无线版本

对于无线版本，您可以使用以下GStreamer命令来测试音频录制和播放：

对于无线版本，您可以使用以下命令：
```bash
# 录制声音
gst-launch-1.0 -e alsasrc device="reachymini_audio_src" ! audioconvert ! audioresample ! wavenc ! filesink location="test.wav"
# 播放录音
gst-launch-1.0 filesrc location=test.wav ! wavparse ! audioconvert ! alsasink device=reachymini_audio_sink
# 播放测试声音（粉红噪声）
gst-launch-1.0 audiotestsrc wave="pink-noise" ! audioconvert ! audioresample ! alsasink device="reachymini_audio_sink"
```

**高级测试：**
您可以在录制的同时播放声音，以测试回声消除性能。这有助于验证麦克风阵列是否正确处理音频并从扬声器消除回声。

**故障排除提示：**
- 确保`.asoundrc`文件存在于主目录
- 检查是否检测到麦克风：`arecord -l`
- 检查是否检测到扬声器：`aplay -l`
- 如果音频板配置失败并显示"未找到Reachy Mini Audio USB设备！"，
  请在与ReSpeaker音频板连接的机器上运行SDK代码。
  对于Lite，这是您的电脑；对于无线版，这是机器人本身。

</details>

## 🔧 特定错误消息和修复

<details>
<summary><strong>电机'&lt;名称&gt;'硬件错误：['输入电压错误']</strong></summary>
我们在Reachy Mini上使用了更高的电压，这是故意的 :)

</details>

<details>
<summary><strong>错误："OSError: PortAudio库未找到"</strong></summary>

当直接使用`sounddevice`时会出现此错误（例如调用`release_media()`后）。安装系统依赖项：

```bash
sudo apt-get install libportaudio2
```

</details>

<details>
<summary><strong>警告："循环缓冲区溢出"（仿真/Mujoco）</strong></summary>

如果您连接到机器人但不使用视频帧，缓冲区会填满。
* **修复：** 如果您不需要视频，请使用`ReachyMini(media_backend="no_media")`初始化。

</details>

<details>
<summary><strong>更新后会话应用崩溃启动（自定义配置文件）</strong></summary>

如果您在旧版本上为会话应用创建了自定义配置文件，而现在应用在更新后立即退出，则应用正在寻找一个不再存在的配置文件路径——默认配置文件位置在最近版本中发生了更改。

**症状** — 日志以`prompts.py`中引发的`SystemExit: 1`结束，例如：
```
File ".../reachy_mini_conversation_app/prompts.py", line 88, in get_session_instructions
    sys.exit(1)
SystemExit: 1
```

**修复（推荐）：** 从Reachy Mini Control桌面应用中，点击**重置应用环境**（请参阅上面的"引导或更新失败/Python环境问题"）。之后需要重新安装应用。

**替代方案（高级）：** 通过SSH进入机器人（无线版：`ssh pollen@reachy-mini.local`）并直接删除应用venv，然后重新安装会话应用：
```bash
rm -rf /venvs/apps_venv
```

</details>

<details>
<summary><strong>没有麦克风输入/到达方向（测试版）</strong></summary>

* **无输入：** 需要固件2.1.3。运行[更新脚本](https://github.com/pollen-robotics/reachy_mini/tree/main/src/reachy_mini/assets/firmware/update.sh)。
* **无方向：** 需要固件2.1.0+。
* 检查扁平柔性电缆是否正确安装（组装指南第45-47页）。

</details>

## 📦 运输和保修

<details>
<summary><strong>我的包裹损坏或丢失。</strong></summary>

立即联系**Pollen Robotics**团队。您可以发送电子邮件至sales@pollen-robotics.com，并附上包裹、收据号或发票号以及您的全名。我们将与运输公司核实并为您提供最新信息。

</details>

<details>
<summary><strong>退款政策</strong></summary>

* **发货前：** 联系`sales@pollen-robotics.com`可获得100%退款。
* **发货后：** 您有30天退货时间。联系销售（sales@pollen-robotics.com）并提供交付证明和发票或收据号。如果您有意见/反馈，请告诉我们，我们的重点是构建一个开源社区喜欢构建的机器人。

</details>

<details>
<summary><strong>保修</strong></summary>

如果零件损坏/出现故障，Pollen的售后服务团队将确定这是否是保修范围内的硬件缺陷。然后，我们的制造商将提供维修或更换零件。您可以发送电子邮件至sales@pollen-robotics.com，并附上问题照片、收据号或发票号以及您的全名。

</details>

## 💬 仍然卡住？

如果您在此指南中找不到问题的答案，请直接联系我们！
Pollen Robotics团队和社区在Discord上很活跃，可以帮助您排除特定问题。

👉 **[加入Pollen Robotics Discord](https://discord.gg/Y7FgMqHsub)**