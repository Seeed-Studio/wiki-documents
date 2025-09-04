---
description: 免布线家庭/办公无痛能源监控
title: 非侵入式能耗监测（Home Assistant）
keywords:
    - CT
    - energy consumption monitoring
    - Home Assistant
slug: /cn/non_invasive_ct_energy_consumption
sidebar_position: 2
last_update:
    date: 08/18/2025
    author: Spencer
---

## 1. 方案概述

本方案旨在利用常见的硬件模块和 Home Assistant 智能家居平台，实现一种**非侵入式**的交流电能计量系统。

### 目标与价值

在追求精细化能源管理和智能家居自动化的今天，传统的墙壁电表或智能插座存在明显局限性。传统电表只能提供整个家庭的“粗粒度”总用电量；智能插座虽能监测单个设备，但其“侵入式”的特性（需串联在设备与插座之间）限制了其应用范围，尤其不适用于硬接线或不便触及的设备。

此方案旨在解决以上痛点，其核心价值在于：

- **非侵入式部署**: 无需切断电源、无需改动任何现有电路。只需将开口式电流互感器夹在目标设备的**单根**电源线上即可开始测量，极大降低了部署难度和安全风险。
- **精细化计量**: 实现对特定交流电设备（如空调、水泵、3D 打印机）的“设备级”能耗监测，获取其实时电流、功率、累计电量等精确数据。
- **低成本与高集成度**: 采用高性价比的 **XIAO ESP32-C6** 模块和标准化的 CT 传感器，并通过 ESPHome 与 Home Assistant 等主流物联网生态无缝集成，实现数据的可视化、自动化和远程告警。

### 目标读者

本方案主要面向：

- **智能家居爱好者**: 希望将家中高耗能或关键设备的用电数据接入 Home Assistant，实现更深度的自动化控制和节能策略。
- **开发者与系统集成商**: 需要为客户提供定制化的设备级能源监控解决方案。
- **创客与小型工作室运营者**: 希望监控 3D 打印机、激光切割机等生产设备的工作状态和能耗。
- **节能改造与设备维护工程师**: 用于进行能源审计，发现待机功耗“刺客”，或通过监测电流异常来实现设备的预防性维护。

### 实现效果

用户将构建一个从物理世界到数字应用的完整数据链路，具体实现包括：

1. **实时数据监控**: 在 Home Assistant 或其他 MQTT 兼容平台上，实时查看一个或多个目标设备的瞬时电流、有功功率和累计电量。
2. **数据本地化**: 监测数据通过 Wi-Fi 安全地传输到本地服务器（如运行 Home Assistant 的树莓派或 NUC），确保数据隐私和低延迟。
3. **智能自动化**: 基于精确的功率和电流数据，在 Home Assistant 中创建强大的自动化场景，例如：
    - 当 3D 打印机功率低于 5W 并持续一分钟以上时，判断其打印完成，自动关闭其电源并推送手机通知。
    - 当水泵电流持续高于正常范围时，发送告警，提示可能发生堵转，避免设备损坏。

### 方案架构图

![xx](https://mermaid.ink/svg/pako:eNqNVG1P01AU_ivN9YskHSvt1m2NIalTMxOJKIsarR_Keusatpa0nYpAIgHkReRFpomKwgxGTGSyGBCGyn8xu-34pD_B294yVl-it1_uvT3Pc85zztMOg5yhQCCAW6Y8mKcuXJZ0Ci-r1E8u8kbJgjck8GN1YY1C1R1U34yi2Vdo8r07_wG9HpfATYLwlqKZMGdrhk5lTx_fimmM__a8QrEsc6VRX3e2x9zytlNfDGPhbS1HMj3ep9wXVWdtqln9itanTvWb0e6TGNKcWIqiB1tutRZ139WbW-Pu5kxHiERMU5FId8BFrqGuSPovooqGrtmG6SdbnsXJlpz5t27lfWN_5z_0pLM-sDyHd43Pa87EKnq2QYpE63toZQM9euKs7eGC3fpBY3c2XOK18-JFkrji75vjXw6nFprVCmE429fLsZE0Hwals74uL_7vqnRo3zHMAZ98bpFyvyy5-yu4wObX5RCZaZRsGIjfoa5qkXNa89MHt1zDMlqBf0qQM3TbNAo-8umb77sLFG4bmt5p7G6ig_9xQkYkTqpQGaMIKdGyNMuWdZtId57VcTM8j9Um0d5HtLAVboIiW_l-QzYVUnqNcssbzvQn98nc4cvXAcXMQ2elLvb2RrH6w8p2mCAjEncc8fymlPiGinRGukck4Jl0e8wbb70sgRE8BBLlTcEjwiF-8yhvaJ6gaM-lbLbDCyUtJuFkHwBQ7T5aXcXFNQ9eOfNvvNiMeJQ-V5At6wxUgzr67KECpFStUBBOqKz30Bbu_wAUTvD-Co6RO5pi5wV28O4vNIHN23kgg3kSLR6Wl_mU_C-ewFghnqQah6kWT4yTmVjiXzyBf0K6VJWDTItHVVNJhvkDTxtT0B0af-ttfWoPSGdpf0bt-tvfBxNpl9X-OiPSLYuEagY0_ktqChBsswRpUIRmUfaOYNiDS8DOwyKUgIC3imwOSEDSRzFmUNavG0bxCIaz38oDQZULFj6VBhXZhmc0GX9ixyHYk9BMGyXdBkIX61MAYRjcBUIk3hXrTHCJZJzn41ySYxI0GAICx6U62S4mkUqwXDzGpuKjNLjnJ-3qTMZiPMOmYmyM5xNcPEkDqHh96SE_fv__P_oTRfFC9g)

**数据流说明:**

1. **物理感知**: 目标电器正常工作，其电源线（**仅火线或零线**）中流过交流电。
2. **信号采集**: CT 电流互感器以非侵入方式夹在该电源线上，通过电磁感应原理，产生一个与主路电流成正比的微弱电流信号。
3. **模数转换与计算**: XIAO Wi-Fi 能量计接收 CT 传感器的模拟信号，通过其内置的能量计量芯片进行采样、转换，并计算出电流、功率等有效值。
4. **无线传输**: 板载的 **ESP32-C6** 芯片通过 Wi-Fi 连接到局域网，使用 ESPHome 原生 API 或 MQTT 协议将处理后的数据发布出去。
5. **数据消费与应用**: Home Assistant 服务器订阅这些数据，将其作为传感器实体进行展示、记录历史，并用于自动化流程和告警通知。

## 2. 硬件选型

详情访问硬件产品 Wiki：[Seeed Studio 2-Channel Wi-Fi AC Energy Meter Wiki](https://wiki.seeedstudio.com/cn/2_channel_wifi_ac_energy_meter/)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/2_channel_wifi_ac_energy_meter/">
            <strong><span><font color={'FFFFFF'} size={"4"}> 访问产品 Wiki 🖱️</font></span></strong>
    </a>
</div>

### 非侵入式电流互感器 (CT)

CT 传感器是实现“非侵入式”测量的基石。它像一个电路“听诊器”，无需物理接触导体，就能“听”到电流的流动。

#### 工作原理

它基于**电磁感应原理**，与变压器的工作方式完全相同。

1. **初级线圈**: 当您将 CT 传感器夹在电源线上时，这根电源线本身就构成了匝数为 1 的“初级线圈”。
2. **磁场产生**: 交流电在流过这根线时，会在周围产生一个大小和方向周期性变化的交变磁场。
3. **次级线圈**: CT 传感器内部包含一个铁氧体磁芯和紧密缠绕的铜线圈，这构成了“次级线圈”。
4. **感应电流**: 交变的磁场穿过次级线圈，根据法拉第电磁感应定律，在次级线圈中感应出一个微弱但与初级电流成精确比例的交流电。

**核心优势**: 整个过程仅涉及磁场耦合，无任何物理电气连接，因此是“非侵入式”的，既安全又便捷。

#### 安装规范

错误的安装是导致读数不准或为零的最常见原因。

:::danger 安全第一！
在进行任何夹持或调整操作前，请**务必**关闭对应电路的空气开关（断路器），并用验电笔确认目标电线已完全断电。安全永远是第一位的。
:::

- **方向性**

    CT 传感器外壳上通常会有一个箭头 (-\>) 或 P1 -\> P2 标识，用来指示电流的“正方向”。为了获得准确的有功功率读数（包含功率因数），请确保所有传感器的安装方向保持一致（例如，电流均从 P1 侧流向 P2 侧）。

- **夹持位置**

    这是最关键、也最容易出错的一步。

  - **正确做法**: 确保 CT 传感器**只夹持火线或零线中的一根**。
  - **错误做法**: 绝对不能将包含多芯（如火线、零线、地线）的完整电缆同时夹入。
  - **原理解释**: 在单相交流电中，同一时刻火线和零线中的电流大小相等、方向相反。如果同时夹持，它们产生的磁场会精确地相互抵消，导致净磁场为零，传感器将无法感应到任何电流，读数恒为零。

    **图示说明:**

    ```plaintext
    // 正确安装
    // 只夹持火线
           电源线
    ------------------ L (火线) ----->>> 电流方向
    /`---\
    | CT | --[ 夹持 ]--
    \`---/
    ------------------ N (零线)----
    
    // 错误安装
    // 同时夹持火线与零线
           电源线外皮
    /`------------------`\
    |    --- L --->      |
    /`---\  (磁场相互抵消)
    | CT | --[ 夹持 ]--
    \`---/  <--- N ---      |
    \`------------------`/
    // 结果：读数为 0
    ```

### XIAO 2-Channel Wi-Fi AC Energy Meter

如果说 CT 传感器是“感官”，那么 XIAO Wi-Fi 能量计就是整个系统的“大脑”和“通信中心”。

#### 核心优势

- **极致小巧与双通道**: 继承了 Seeed Studio XIAO 系列邮票孔式的小巧外形，非常易于集成到空间有限的配电箱或设备外壳中。双通道设计意味着单个模块可以同时独立监测两个不同的交流电路，性价比极高。
- **强大的连接性与物联网集成**: 板载高性能的 **ESP32-C6** 核心，原生支持 **Wi-Fi 6, Bluetooth 5, Zigbee, 和 Thread**。这使其能轻松连接到本地网络，并通过 ESPHome 或 MQTT 等标准协议将数据无缝推送到 Home Assistant 等物联网平台，并且为未来的 **Matter** 生态集成做好了准备。
- **基于成熟方案**: 该能量计可直接采用 ESPHome 进行固件配置和烧录。ESPHome 是一个极其成熟和强大的开源项目，它将复杂的底层编程抽象为简单的 YAML 文件配置。用户无需编写 C++ 代码即可定义传感器、设置网络和集成 Home Assistant，极大地降低了开发门槛。

## 3. 应用场景与案例

在前述步骤中，我们已成功将设备数据接入 Home Assistant。现在，这些数据不再是孤立的数字，而是驱动无限自动化创意的强大引擎。

:::note
请注意，您需要将示例中的 `entity_id` 修改为您自己的实体 ID。
:::

### 场景一：家庭能源审计，揪出潜伏的“电费刺客”

- **痛点**: 每月电费高昂，但不清楚是哪些设备在“偷电”，尤其是待机功耗。

- **解决方案**: 将 CT 传感器轮流夹在冰箱、空调、影音中心、电脑及外设等高耗能或长时间待机设备的电源线上，进行为期数日的数据采集。

- **实现方式**:

    1. **长期趋势分析**: 利用 Home Assistant 内置的**能源仪表盘**，您可以清晰地看到每台设备在一天、一周或一个月内的总耗电量，轻松识别出头号“电费刺客”。
    2. **待机功耗甄别**: 通过查看功率传感器的历史曲线图，可以精确识别设备的待机功耗。例如，您可能会发现，影音中心在“关闭”状态下仍有 15W 的持续功耗。

- **自动化示例**（智能提醒）:

    ```yaml
    # Home Assistant 自动化: 高待机功耗提醒
    alias: 高待机功耗提醒
    trigger:
      - platform: numeric_state
        entity_id: sensor.energy_meter_channel_1_active_power # 你的功率传感器
        above: 10 # 功率阈值 (瓦)
        for: "00:10:00" # 持续10分钟
    condition:
      - condition: time
        after: "02:00:00"
        before: "06:00:00"
    action:
      - service: notify.mobile_app_your_phone_name # 替换为你的手机通知服务
        data:
          title: "高待机功耗提醒"
          message: "影音中心的待机功耗已持续高于10W，请检查是否需要断开插座电源。"
    ```

### 场景二：工作室/创客空间，实现设备状态智能监控

- **痛点**: 3D 打印或激光切割等任务耗时很长，需要频繁查看才能确定是否完成或异常中断。

- **解决方案**: 监测 3D 打印机或激光切割机的实时功率。这类设备的工作功率曲线具有鲜明特征：预热阶段功率最高，工作阶段平稳波动，任务完成后功率会降至极低的待机水平。

- **自动化示例**（任务完成自动通知并断电）:

    ```yaml
    # Home Assistant 自动化: 3D打印任务完成
    alias: 3D打印任务完成
    trigger:
      - platform: numeric_state
        entity_id: sensor.energy_meter_channel_1_active_power # 你的功率传感器
        below: 8 # 任务完成的功率阈值 (瓦)
        for: "00:03:00" # 持续3分钟以确认状态稳定
    condition:
      # 确保设备是从一个较高的工作功率降下来的，而不是一开始就是低功率
      - condition: template
        value_template: "{{ trigger.from_state.state | float(0) > 50 }}"
    action:
      # 1. 发送手机通知
      - service: notify.mobile_app_your_phone_name
        data:
          title: "3D打印完成！"
          message: "您的3D打印任务已完成，打印机将在15分钟后自动断电。"
      # 2. 延迟一段时间，让打印件冷却
      - delay: "00:15:00"
      # 3. 关闭打印机连接的智能插座
      - service: switch.turn_off
        target:
          entity_id: switch.3d_printer_plug # 你的智能插座开关
    ```

### 场景三：设备预防性维护，洞察异常防患于未然

- **痛点**: 鱼缸水泵、服务器散热风扇等关键设备，一旦堵转或损坏，可能导致昂贵的损失。

- **解决方案**: 持续监测这些电机类设备的**电流**。正常运行时，其电流值会稳定在一个特定范围内。当发生机械堵转或轴承损坏时，电机会因负载剧增而导致电流异常升高。

- **自动化示例**（水泵堵转告警）:

    ```yaml
    # Home Assistant 自动化: 水泵堵转告警
    alias: 水泵堵转告警
    trigger:
      - platform: numeric_state
        entity_id: sensor.energy_meter_channel_2_current # 你的电流传感器
        above: 1.5 # 假设正常电流为0.8A，设定1.5A为危险阈值
        for: "00:00:05" # 持续5秒以过滤掉启动瞬间的峰值电流
    action:
      # 1. 发送高优先级通知
      - service: notify.mobile_app_your_phone_name
        data:
          title: "‼️ 紧急告警：水泵可能已堵转 ‼️"
          message: "检测到水泵电流异常升高至 {{ trigger.to_state.state }}A，请立即检查！"
      # 2. (可选) 关闭水泵电源，防止电机烧毁
      - service: switch.turn_off
        target:
          entity_id: switch.water_pump_plug # 你的水泵开关
    ```

### 场景四：共享空间计费，实现公平透明的按用量付费

- **痛点**: 在共享办公空间或创客工坊，如何公平地计算成员使用大功率设备（如CNC、大型激光切割机）所产生的电费。
- **解决方案**: 利用累计电量传感器，该传感器以 kWh（度）为单位精确记录了设备的总用电量。
- **实现方式**:
    1. **数据记录**: Home Assistant 会自动记录传感器的历史数据。
    2. **计费周期**: 结合 Home Assistant 的“utility meter”辅助函数，可以轻松创建按日、周、月或手动的计费周期。
    3. **成本计算**: 管理员在每个计费周期结束时，读取该周期内的总用电量，再乘以当地电价，即可得出应收费用。

## 4. 常见问题 (FAQ)

<details>
<summary>Q1: 这个方案可以监测三相电吗？</summary>

**不能。** 本方案中的硬件和软件配置是为**单相交流电**设计的，这是住宅和小型商业场所最常见的供电方式。三相电监测需要能够同步测量三路电流和电压并处理相位差的专用硬件，超出了本方案的范围。

</details>

<details>
<summary>Q2: 我想监测的设备电流超过 5A 怎么办？（例如空调、厨房总线）</summary>

完全可以，只需升级 CT 传感器并重新校准软件：

1. **更换硬件**: 将标配的 5A CT 传感器更换为更大规格的开口式 CT，例如 20A, 50A, 甚至 100A（用于监测总进线）。选购时，请确保新的 CT 传感器是**电流输出型**（如 `100A:50mA`），以确保与 XIAO 能量计的输入端口兼容。

2. **重新校准软件**: 更换 CT 后，其变比发生了变化，必须在 ESPHome 的配置文件中更新校准参数。

- **校准方法**: 参考 ESPHome 的 Sensor Component

</details>

<details>
<summary>Q3: Wi-Fi 连接不稳定，设备频繁离线怎么办？</summary>

Wi-Fi 问题通常从物理环境和软件配置两个层面排查：

1. **检查物理环境**:

      - **信号强度**: 设备安装位置（尤其是金属配电箱内）的 Wi-Fi 信号可能很弱。请使用手机在设备附近测试信号，考虑将路由器移近，或增加一个 Wi-Fi 放大器或 Mesh 节点。
      - **天线位置**: 确保 **ESP32-C6** 的板载天线没有被金属部件完全遮挡。

2. **优化软件配置**: 在 ESPHome 的 YAML 文件中，可以增加一些提高网络稳定性的配置。

```yaml
wifi:
  ssid: "你的WiFi名称"
  password: "你的WiFi密码"

  # -- 增强稳定性的配置 --
  # 1. 设置静态IP，避免DHCP租约问题导致掉线
  manual_ip:
    static_ip: 192.168.1.100
    gateway: 192.168.1.1
    subnet: 255.255.255.0

  # 2. 关闭Wi-Fi节能模式，保持连接活跃 (会略微增加功耗)
  power_save_mode: none

# 定义一个重启超时，如果30分钟无法连上API或Wi-Fi，设备将自动重启尝试恢复
api:
  reboot_timeout: 30min

ota:
  # ...
```

</details>
