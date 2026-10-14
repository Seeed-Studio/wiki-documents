---
description: 边缘网关上的多协议工业数据中枢——OPC UA、Modbus TCP/RTU、BACnet/IP 与 MQTT 数据源汇入同一套点位模型，通过一套带版本的 MQTT 契约读取与控制，北向上云带落盘断网缓存补传
title: 工业多协议数据中枢：选型、部署与实测数据
keywords:
  - 工业协议网关
  - 多协议数据中枢
  - OPC UA
  - Modbus TCP
  - Modbus RTU
  - BACnet/IP
  - MQTT Broker
  - 统一点位模型
  - 断网缓存补传
  - 北向上云
  - reComputer R1000
  - reComputer R1100
  - reTerminal DM
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg
slug: /solutions/industrial-protocol-gateway
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/solutions/industrial-protocol-gateway/
generated_from: sensecraft-solutions@multi_protocol_gateway
---

:::caution[使用须知]
这是**协议融合与数据中枢层**，不是经过认证的控制或计量系统。
:::

## 这套方案是干什么的

做楼宇、能源或设备管理方案的集成商到了现场，会发现数据本来就有——只是分别待在 OPC UA 控制器、Modbus
电表、BACnet/IP 空调机组和 MQTT 传感器网关后面，四套寻址方式、四种故障表现。这个方案把四者放进**同一台
边缘主机上的同一张点位注册表**，对上层只给一套 MQTT 读写契约。换到新现场时，重新接控制器、映射点位即可，
协议适配层不用改。

部署容器、添加数据源、让自动发现给出候选、确认需要的点位、核对数据质量，然后把它们提供出去——本地
1883 端口、北向到云端 Broker 的 8883 端口，或者两者都要。

- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/multi_protocol_gateway)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>现有设备直接接入</h3>
                <p>已支持 OPC UA、Modbus、BACnet/IP 或 MQTT 的设备不用替换，进同一台边缘主机上的同一张点位注册表，对上层只有一套 MQTT 读写契约。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>自动发现，确认后受管</h3>
                <p>OPC UA 浏览、Modbus 站号扫描、BACnet Who-Is、MQTT 主题观察给出候选点位，确认后才成为受管点位；发现不全时可以手工填写。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>2,000 点位、349.99 events/s</h3>
                <p>4 个数据源各 500 点，采集周期 5/10 秒，在 reComputer R2000 系列上本机回环实测一次 180 秒。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>北向断网可补传</h3>
                <p>云端 Broker 断网 300 秒期间事件写入本地缓存；重连后持久化 Broker 下补传完整率 1.000，内存 Broker 为 0.9839。</p>
            </div>
        </li>
    </ul>
</div>

### 控制台上能看到什么

接入页列出每个已配置数据源及其实时运行状态——接第一台控制器之后，先看这一页确认它真的连上了：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/access-list-zh-b3b53c9b.png" alt="接入页：每个数据源的协议、地址与实时运行状态"/>
</div>

点位页是全部受管点位的总表，逐点显示数据质量，支持筛选与控制：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/points-zh-6977ecfb.png" alt="点位页：受管点位的当前值、单位、数据质量与最后更新时间"/>
</div>

数据服务页配置内置 Broker，并展示它发布的主题契约：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/dataservice-zh-8fdab712.png" alt="数据服务页：内置 Broker 配置与它发布的主题契约"/>
</div>

以上截图为控制台连接协议模拟器与测试从站时的运行界面。现场开通后，受管点位与实时遥测将按实际配置的控制器点表刷新。

网关采用标准工业 DIN 导轨外壳，设备进场后可直接卡装在控制柜 35mm 导轨上，配合 24V 工业开关电源与屏蔽双绞线完成就地接入。

## 需要哪些硬件

两样东西：现场已经装好的设备，以及一台能访问它们各自网络的主机。

**① 现场设备** —— 凡是已经支持 OPC UA、Modbus（TCP 或 RTU）、BACnet/IP 或 MQTT 的设备都算，机组侧
不做替换。按数据源你必须先有：OPC UA 的服务地址与凭据；Modbus 的从站地址、寄存器映射、字节序与字序；
一块位于 BACnet 网段、广播能到达的网卡；MQTT 作为数据源时，明确的主题到点位映射。Modbus RTU 另需一个
USB 转 RS-485 适配器，除非主机自带 RS-485。

**② 数据中枢主机** —— 一台普通 Docker 主机，x86-64 或 arm64。它决定你不加适配器就能拿到哪些现场接口，
以及现场没有电脑时能不能操作：

| | 主机 | 板载现场接口 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/113991294-2_1.jpeg" alt="reComputer R1000" width="110" /> | [reComputer R1000 系列](https://www.seeedstudio.com/reComputer-R1024-10-p-5923.html)<br/>基于 CM4 的物联网网关 | RS-485、RJ45 以太网 | 现场设备都在以太网上，最多一路 RS-485 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1100" width="110" /> | [reComputer R1100 系列](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>基于 CM4 的物联网网关与控制器 | RS-485、RS-232、DI/DO、千兆以太网、CAN | 现场还有 RS-232 设备或 DI/DO 干接点 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image1.jpeg" alt="reTerminal DM" width="110" /> | [reTerminal DM 系列](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)<br/>10.1 寸 HMI，跑同一套服务 | RS-485、CAN、以太网（CM4104032 型号另有 RS-232、DI/DO、接线端子） | 机房没有常驻电脑，配置与巡检要在设备上完成 |

三台机器的软件点位上限相同：**2,000 个点位，其中 50 个可写**，由代码强制。2,000 点负载在 R1000 同代的
CM4 级平台（2 GB 配置，在开发板上测）上未通过容量测试，到这个规模选 R1100 或 reTerminal DM；R1000
用于更小规模时，可承载的点位数暂无实测数据。eMMC 容量决定本机保留多少北向断网缓存与命令回执历史；服务本身约需 4 GB 可用磁盘。

其他前置条件：Docker Engine 20.10 及以上，8280 与 1883 端口空闲（或在部署前另选未占用端口），以及主机
到各协议网络的可达性。

### 选型排他边界

- **现场接口与点位数**：若现场有 RS-232 设备、DI/DO 开关量需求，或总点位数超过 1,000 点，请勿选择 R1000（仅一路 RS-485），应选配 R1100 或 reTerminal DM。
- **免电脑现场交互**：若弱电间或机房没有常驻电脑且需就地配置与看板巡检，请勿选无屏网关，应选用带 10.1 寸触控屏的 reTerminal DM。

## 现场怎么部署

### 一、装硬件：机柜施工、供电与总线接线

1. **DIN 导轨安装与供电**：
   - 使用标准 35mm DIN 导轨卡扣将网关牢固安装在弱电井或自控机柜中。
   - 推荐采用工业级 DC 12V/24V 稳压开关电源（允许宽压范围 DC 9–36V）。
   - **接地防浪涌**：主机的保护接地端子（PE）建议通过截面积 ≥2.5mm² 的接地线连接至机柜等电位接地排，以抑制现场电机与变频器引入的共模干扰。

2. **网络与 BACnet/IP 规划**：
   :::tip[主机要有一块在 BACnet 网段上的网卡]
   BACnet/IP 的发现基于广播。主机必须有一块位于 BACnet 网段上的网卡，并且广播不被网络交换机过滤。远程 Linux 部署建议使用主机网络模式（`network_mode: host`）。Docker Desktop 的本机桥接部署可能不转发广播——那种情况下可手动填写 BACnet 设备 IP 地址。
   :::

3. **Modbus RTU / RS-485 接线与串口设备直通**：
   - **接线规范**：必须采用屏蔽双绞线（STP），A+ 与 B- 分别接控制器对应端子，屏蔽层在网关侧单端接地。RS-485 总线须为“手拉手”菊花链拓扑，禁止星型或树型分支；总线末端设备建议接入 120Ω 终端电阻。
   - **Docker 串口挂载配置**：标准容器配置默认不挂载宿主机串口。若使用 USB 转 RS-485 适配器或板载串口，需在 `docker-compose.yml` 中显式挂载设备节点并配置用户组权限：
     ```yaml
     services:
       gateway:
         devices:
           - "/dev/ttyUSB0:/dev/ttyUSB0"  # USB转485适配器，或板载串口 /dev/ttyAMA0
         group_add:
           - "20"  # dialout 组 ID，确保容器内非 root 用户具备串口读写权限
     ```
   开生产写入前，先在本地控制台使用实际的从站地址与寄存器地址进行单点回读验证。

### 二、装软件：安装并接入第一个数据源

逐设备步骤和应用包在可部署方案页，按现场条件选好配置后下载。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/multi_protocol_gateway" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

1. **部署** —— 本地目标装在运行 SenseCraft Solution 的这台机器上；远程目标经 SSH 装到控制器网段上的
   reComputer R2000 系列或 reTerminal DM。
2. **创建首个管理员** —— 首次运行不需要注册令牌。
3. **添加数据源** —— OPC UA、Modbus、BACnet/IP 或 MQTT，然后在支持的地方运行发现：OPC UA 浏览、
   Modbus TCP 站号扫描、BACnet Who-Is、MQTT 主题观察。它们产生的都是**候选项**。向导按协议逐项问地址与
   轮询周期：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/access-wizard-step1-zh-e1388a8e.png" alt="接入向导第一步：选协议、填地址与轮询周期"/>
</div>

4. **确认点位** —— 只有被确认的候选才成为受管点位。发现不完整或不可用时，可以手工填写
   点位。
5. **授予写权限之前先核对质量** —— 先在点位页看实时值与逐点数据质量。
6. **配置数据服务** —— 内置 Broker，以及可选的北向上送。

难度**中等**，到控制台跑起来预计 **15 分钟**；接入第一台控制器并核对数据质量耗时更长。

## 有哪些接口

数据从三个接口离开主机：

- **运维人员** —— HTTP **8280** 上的浏览器控制台：数据源管理、点位总表、命令回执、插件管理。
- **现场系统（SCADA、能耗平台、自有服务）** —— 订阅 **1883** 上的内置 Broker。点位遥测在
  `missionpack/v1/{gateway}/points/{point_id}` 下，在线状态、命令与回执主题共用同一套契约。
- **云端或总部系统** —— 启用到外部 Broker 的北向上送，端口 **8883**。遥测按 QoS 1 批量发送，每个数据源
  的健康与遗嘱状态是 retained，另有 QoS 0 心跳。**当前发布的镜像不含北向上送。**

`{gateway}` 是部署时自己设的网关标识，因此多台中枢可以向同一个 Broker 上送而不互相覆盖。

### 主题契约

| 主题 / 端口 | 内容 | retained |
|---|---|---|
| HTTP `8280` `/` | 浏览器控制台 | — |
| `missionpack/v1/{gateway}/points/{point_id}`（1883） | 带版本的点位遥测——值、质量、时间戳、revision | 否 |
| 同前缀下的在线状态 / 命令 / 回执主题（1883） | 数据源与网关在线状态、下发的命令，以及每条命令的回执 | 在线状态为是 |
| `missionpack/v1/{gateway}/telemetry`（8883） | 北向批量遥测信封，QoS 1 | 否 |
| 每个数据源的健康与遗嘱主题（8883） | 数据源健康与网关状态 | 是 |

北向信封是 `missionpack.northbound.v1`：

```json
{
  "schema_version": "missionpack.northbound.v1",
  "message_id": "0f3a...",
  "gateway_id": "gw-01",
  "created_at": "2026-09-05T05:01:19.045514Z",
  "samples": [
    {
      "source_id": "ahu-bacnet",
      "point_id": "analog-value:12",
      "ts": "2026-09-05T05:01:18.900000Z",
      "quality": "good",
      "value": 23.5,
      "source_revision": 4,
      "point_revision": 7
    }
  ]
}
```

**`source_revision` 与 `point_revision`**：点位被重新映射时 revision 会变，据此区分「配置变了」和「现场值
变了」。不检查 revision 的消费方会把配置变更前后的数据接成同一条序列。

契约的两条限制：

- **协议是 MissionPack v1，当前版本不兼容 Sparkplug B**，Sparkplug 宿主应用需要加一层转换。
- **明文 MQTT 只允许遥测。** 开放远程控制前必须启用 TLS 并配置具有控制权限的身份。

### 南向协议能力

| 协议 | 发现 | 读 | 写 | 未实现 |
|---|---|---|---|---|
| OPC UA | 地址空间浏览 | 支持 | 支持 | — |
| Modbus TCP | 站号扫描 | 支持 | 支持 | — |
| BACnet/IP | Who-Is | ReadProperty | 带优先级的 WriteProperty，用 `Null` 释放 | COV 订阅、BBMD/外部设备注册、BACnet MS-TP |
| MQTT（作为数据源） | 主题观察 | 支持，需明确的主题到点位映射 | — | 隐式映射；主题必须手工映射 |

## 性能与实测数据 {#实测数据}

负载由**四协议模拟器**生成，每档在一台设备上本机回环实测，没有现场部署数据。

### 2,000 点规模的刷新周期

三档的共同条件：4 个数据源共 2,000 点（每源 500），运行时长如表所注，仅本机回环，设备为 reComputer R2000 系列（arm64）。

| 档位 | 采集周期 | 结果 |
|---|---|---|
| 稳定档 | OPC UA/Modbus 5 秒、BACnet 10 秒，运行 180 秒 | **349.99 events/s**（目标 350.0 的 99.99%），预测 0.939 cycle/s，进程组 RSS 峰值 217.3 MiB，1 分钟 CPU 峰值 22.1%，failed_sample_deltas 为 0 |
| 下降档 | OPC UA/Modbus 2 秒、BACnet 4 秒 | 跑满 900 秒，吞吐 **718.9 events/s**（99.1%），但预测降到 0.872 cycle/s，以 `PREDICTION_CYCLE_RATE_LOW` 判失败 |
| 失败档 | OPC UA/Modbus 1 秒、BACnet 2 秒 | **148.2 秒**即 `PREDICTION_WRITE_CHAIN_TIMEOUT` 终止，远未到 900 秒目标；首个 warmup 周期就已有 2 个 Modbus 输入点缺失 |

复现：上游提交 `b5fe4cc`，四协议模拟器；原始运行记录见上游包 `description.md`

### 北向断网恢复

条件：云 Broker 断网 300 秒（杀掉 Broker 进程或容器，不是链路劣化），事件率约 350 events/s，spool 上限 512 MB / 86,400 秒，运行 1,800 秒，arm64 主机。

| 指标 | 数值 | 条件 |
|---|---|---|
| 断网期 spool 增长 | queued_bytes 60.1 KB/s；峰值 18.33 MB / 325 批 | 重连后排空到 0 |
| Broker 重启到首条重放 | 1.2–2.2 秒 | 量的是「重启→首条重放」，是「CONNACK→首条重放」的上界 |
| 补传完整率，持久化 Broker | 1.000 | 持久订阅会话，按 message_id 取集合交集 |
| 补传完整率，内存 Broker | 0.9839 ▲ | 同样 300 秒断网 |

▲ 缺失的 58 条都在 Broker 重启后 0.496–1.058 秒，早于测试订阅者 1.069 秒的 SUBACK，属于订阅建立前的观测空窗，网关侧没有丢弃。

复现：上游提交 `f831bae`；原始运行记录见上游包 `description.md`

### 运行时与关键参数

运行时以容器镜像形式从 `sensecraft-missionpack.seeed.cn` 分发（x86-64 与 arm64），目前没有公开的源码仓库。

- **点位上限**：2,000 个受管点位，其中 50 个可写，由代码强制。
- **采集周期**：决定 2,000 点规模能否稳定运行，见上表：OPC UA/Modbus 5 秒、BACnet 10 秒通过，收紧到 2 秒 / 4 秒即判失败。
- **北向 spool**：容量与时长上限（实测用 512 MB / 86,400 秒）决定本机能扛多久断网；另可配批大小与是否启用 QoS 0 心跳。

### 已知退化

- **采集周期每收紧一档**，结果从通过变为下降、再变为中止；判失败的指标都来自预测插件（`PREDICTION_*`）。
- **预测插件速率有结构上限（未修复）**：循环是「跑完一个 cycle 再固定 sleep」，速率为 `1/(1.0 + t_cycle)`。2,000 点规模下 `t_cycle` 约 0.119 秒，上限约 0.894 cycle/s，低于长稳测试要求的 0.90 门槛。

### 下一步

- 在 reComputer R10 系列或 reTerminal DM 上接真实设备，做 OPC UA、Modbus TCP、Modbus RTU（USB 转 RS-485）与 BACnet/IP 的读写与独立读回。
- 在同类目标主机上跑 72 小时无人值守运行，期间做网络、Broker、进程与设备恢复演练。

## 数据与素材出处

- **实测结果** —— 四协议模拟器生成负载，机器为 reComputer R2000 系列（arm64）与一台 Linux x86_64 工作站，
  上游提交 `b5fe4cc` 与 `f831bae`。转自上游包自带的 `description.md`；原始运行记录随上游项目保存。
- **产品图与链接** —— Seeed 产品库（`media-cdn.seeedstudio.com`），SKU 与可部署方案页配置器的 bundle 一致。
- **架构图** —— 依据上游 `solution.yaml` 的拓扑绘制，是设备构成示意图，不是界面截图。
- 运行时容器镜像从 `sensecraft-missionpack.seeed.cn` 分发，不随 wiki 提供。
