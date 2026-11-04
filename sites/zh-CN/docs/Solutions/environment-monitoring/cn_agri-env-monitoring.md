---
description: 搭一套接进 Home Assistant 的 LoRaWAN 土壤与空气监测：需要哪些设备、三条接入路径怎么部署、有哪些 MQTT 接口
title: LoRaWAN 农业环境监测方案：选型、部署与接口
keywords:
  - 农业环境监测
  - LoRaWAN 土壤墒情
  - 土壤电导率监测
  - 大棚监测系统
  - SenseCAP S210x
  - ChirpStack
  - The Things Stack
  - Home Assistant
  - MQTT 自动发现
  - LoRaWAN 网关
  - SenseCAP M2
  - reComputer R12 系列
image: https://files.seeedstudio.com/wiki/reference-design/agri_env_monitor/ha-overview-local-20260907-1565d1b3.jpg
slug: /solutions/agri-env-monitoring
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/cn/solutions/agri-env-monitoring/
generated_from: sensecraft-solutions@agri_env_monitor
---

:::caution[使用须知]
这是运维看板，不是计量认证系统：显示的数值就是节点上报的原值，只加了单位。
:::

## 这套方案是干什么的

大棚里，土壤水分和电导率决定什么时候灌溉、什么时候追肥；大田里，雨量和土壤温度对另一种作物起同样的作用。SenseCAP LoRaWAN 节点测出这些量并无线上报，上行进入 Home Assistant 后成为带单位、device class 和 state class 的实体：显示在看板上、积累历史，数值越界时发通知。

适用于大棚、大田地块、没有可用外网的场地，以及想要一份本地看板又不愿搬动现有链路的存量 SenseCAP 部署。

- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/agri_env_monitor)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>SenseCAP 节点开箱即用</h3>
                <p>S210x 节点按自身配置的周期上报，不需要下发任何配置；实体由 MQTT 自动发现建好，带单位和类型，不用手写 YAML。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>第三方探头按同一套接入</h3>
                <p>已有的 RS485 或模拟量探头经 S2100 数据采集器接入，走同一张测量映射表。映射表、compose 文件、看板与自动化都在公开的方案包里，新增一个量在配置文件里加一行。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>可以完全不联外网</h3>
                <p>ChirpStack 跑在 M2 网关上，桥和 Home Assistant 跑在本地主机上，不用云账号，不需要出站连接。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>换网络服务器，看板不用改</h3>
                <p>SenseCAP 云、自建 The Things Stack、本地 ChirpStack 三条路径的实体命名相同，换路径时看板、自动化和导出都不用改。</p>
            </div>
        </li>
    </ul>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/agri_env_monitor/ha-overview-local-20260907-1565d1b3.jpg" alt="Home Assistant 看板上土壤水分、环境温湿度与电导率监测视图"/>
</div>

## 需要哪些硬件

现场四样东西：LoRaWAN 节点、能收到它们的网关、网络服务器，以及一台装了 Docker 的 Linux 主机。

**① 节点**——SenseCAP S210x 传感器直接测量；S2100 数据采集器把已有的第三方 RS485 或模拟量探头接进同一张 LoRaWAN 网。两者都不需要下发任何东西，按节点上自己配置的周期定时测量并上报。

**② 网关与网络服务器**——三条路径只在这里不同，选哪条决定现场要不要外网。

| | 设备 | 承担 | 什么时候选它 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/f/i/first_page_all-31.jpg" alt="SenseCAP S2101" width="110" /> | [SenseCAP S210x](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)<br/>土壤与空气传感节点 | 测量并上报 | 必配。按需要的量选型号，按所在地区选频段 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992872-application-10.png" alt="SenseCAP S2100" width="110" /> | [SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)<br/>LoRaWAN 数据采集器 | 第三方探头转 LoRaWAN | 已经有 RS485 或模拟量探头 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/_/__front-05.png" alt="S-Soil MTEC-02B" width="110" /> | [S-Soil MTEC-02B](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-EC-Sensor-S-Soil-MTEC-02B-p-4860.html)<br/>RS485 土壤水分温度电导率探头 | 经 RS485（Modbus-RTU）接到 S2100，由 S2100 发 LoRaWAN 上行 | 要测土壤水分、温度、电导率，且走 S2100 这条链路 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992981_eu868_1.jpg" alt="SenseCAP M2 网关" width="110" /> | [SenseCAP M2](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)<br/>LoRaWAN 室内网关 | 转发到 SenseCAP 云，或自己跑 ChirpStack | 要完全本地部署：在 M2 的 Web 界面里切到内置网络服务器即可 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/0/100021896main_4.jpg" alt="reComputer R1225" width="110" /> | [reComputer R12 系列](https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-EU868-p-6720.html)<br/>LoRaWAN 网关与工业控制器 | 自建网关，同一台机器跑 The Things Stack | 自建 The Things Stack 且手上没有网关 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110110_preview-16.png" alt="reRouter CM4" width="110" /> | [reRouter CM4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html)<br/>reRouter CM4 主机 | 跑网络服务器，或跑看板 | 需要一台主机，且手上没有现成的 Docker 机器 |

**③ 看板主机**——任意装了 Docker 的 Linux 机器，跑 Home Assistant、MQTT broker 和 `agri-env-bridge`，不需要外网入站访问。

**节点、网关、集中器按同一频段选购**（EU868 / US915 / AS923 等），频段出厂固定，软件里改不了。两条自建路径还需要每个节点的 DevEUI、JoinEUI、AppKey，用来在网络服务器上注册设备。

### 选型排他边界

- **高频高带宽业务**：LoRaWAN 节点上报默认推荐 5–60 分钟，适用于温湿度、光照、土壤传感器；若有连续视频监控或秒级高频采样需求，请勿使用 LoRaWAN，应选配 4G/有线工业相机。
- **金属密闭与深地障碍**：厚金属筒仓、金属大棚骨架密集区域或地下深井会导致 LoRaWAN 信号严重衰减，需增设吸顶天线或采用 RS-485 有线传感器中继。

## 现场怎么部署

### 一、装节点

:::tip[探头深度按作物根区定，装好后不要挪]
土壤探头读的是它所在的那一层。10 cm 与 40 cm 的读数是两个实体（`soil_moisture_10cm` … `soil_moisture_40cm`）。挖第一个坑前按作物根区定好深度；装好后挪动探头，该实体已有的历史会失去可比性。
:::

射频覆盖按现场实测，这里不给距离数字。定传感点位置前，先在现场确认节点上行能被网关收到。

### 二、装软件：按路径 3 到 6 步

逐设备步骤和应用包在可部署方案页，按现场条件选好配置后下载。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/agri_env_monitor" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

步骤轮廓：

1. **在 Linux 主机上部署 Home Assistant 与 broker**（三条路径都有，一次 Docker compose 部署）。
2. **把网络服务器跑起来**——云路径无事可做；ChirpStack 路径在 M2 的 Web 界面里切到内置本地网络服务器，或者在一台 Linux 主机上拉起 ChirpStack compose stack；The Things Stack 路径在 reComputer R12 系列网关上把带 Postgres 与 Redis 的 stack 拉起来。
3. **装 decoder**（仅自建路径）——The Things Stack 上装 payload formatter，ChirpStack 上装 device-profile codec。不装则不会出现任何实体。
4. **入网节点**（仅自建路径）——在网络服务器上逐个注册 DevEUI、JoinEUI、AppKey。
5. **部署桥**，source 按路径配置，填入 broker 凭据。
6. **导入看板与自动化**，确认实体带着数值出现。

预计 **45 分钟**，难度 **intermediate**。The Things Stack 路径最久：集中器要物理安装，stack 还要拉起自己的数据库和缓存。

**三条路径的验收相同**：最后一步导入的 Lovelace 看板上，实体带着数值显示出来。

## 有哪些接口

所有数据从看板主机上的一个 MQTT broker 出来，端口 **1883**，三个 retained 主题就是全部接口。

- **Home Assistant**——零配置。桥发布自动发现配置，实体自动出现并带上正确的单位、device class 和 state class，不用手写 YAML。
- **灌溉或农业管理系统**——订阅 `agri_env/sensecap_<deveui>/<entity_key>/state` 取值，订阅 `agri_env/sensecap_<deveui>/availability` 判断节点是否还活着。两者都是 retained，后连上来的订阅方也能立刻拿到当前全貌。
- **自建服务**——`homeassistant/…` 上的自动发现配置带着完整的实体元数据（单位、device class、state class、设备标识），据此即可建表。

### 完整的主题与 payload

| 主题 / 端口 | 内容 | retained |
|---|---|---|
| `homeassistant/sensor/sensecap_<deveui>/<entity_key>/config`（1883） | 自动发现配置，每个实体一条：`name`、`unique_id`、`object_id`、`state_topic`、`availability_topic`、`unit_of_measurement`、`state_class`、`device.identifiers` | 是 |
| `agri_env/sensecap_<deveui>/<entity_key>/state`（1883） | 单个测量项的值，例如 `33.8` | 是 |
| `agri_env/sensecap_<deveui>/availability`（1883） | `online` 或 `offline` | 是 |

**实体命名**：实体 ID 是 `sensor.sensecap_<deveui>_<entity_key>`，DevEUI 小写且用完整 DevEUI；用缩短形式时，地址后缀相同的两个节点会冲突。改命名规则时要同时清掉 broker 的 retained 消息和 Home Assistant 的实体注册表，否则重启后旧主题会回来。

**broker 只放在可信局域网内，不要暴露到公网。** 凭据在主机的 `.env` 里；ChirpStack 路径下 LNS 侧的 broker 在 compose 网络内不带认证运行。

## 性能与实测数据

### 运行时与关键参数

三条路径背后是同一个服务 `agri-env-bridge`，与 Home Assistant、MQTT broker 一起跑在看板主机上。

| 路径 | 桥读什么 |
|---|---|
| SenseCAP 云 | SenseCAP OpenAPI 加云端 MQTT 流；首次启动按月回填历史 |
| The Things Stack | stack 的 MQTT 集成，上行已由 payload formatter 解码 |
| ChirpStack | ChirpStack 的 MQTT 集成，上行已由 device-profile codec 解码 |

- **测量映射表**：`assets/config/measurements.yaml`。覆盖四个深度的土壤温度与水分、土壤张力、热通量与体积含水率；空气温湿度、CO2、气压、PM2.5 与 PM10、噪声；pH、溶解氧、浊度、TDS、盐度与水温；风速风向、总辐射、日照时长、PAR 与光量子；瞬时流量、累计流量、液位与漏水。新增一个量在文件里加一行，不用改代码；数值本身不缩放，只贴单位。
- **离线判定阈值**：默认 S210x 两个上报周期加余量。超时后该节点的实体在 Home Assistant 里变成不可用，保留最后一个值。
- **去重**：读数按 `(DevEUI, measurementId, 时间戳)` 去重，云端回填与实时流不会把同一条读数记两遍；同一实体出现两个值时，较晚的那条胜出。
- **功能检查**：录制的上行按三种来源格式回放进 broker，共建出 15 个实体。
- **复现**：回放测试位于方案仓库 `tests/replay_bench.py`，执行 `python3 tests/replay_bench.py --fixtures tests/data/` 验证三类上行与 15 个实体自动注册。

### 已知退化

- **broker 是单点**：broker 停了，三条路径都不再更新。状态主题是 retained 的，Home Assistant 重启后能恢复最后的值。

## 数据与素材出处

- **`measurementId` 到物理量的对照表**（`assets/config/measurements.yaml`）读自 [Seeed-Solution/SenseCAP-Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder) 仓库 commit `d0a2342` 的 decoder 源码——S210X 系列取自 `third_party/SenseCAP-Decoder/S210X/Helium/SenseCAP_S210X_Helium_Decoder.js`，T1000 取自 `third_party/SenseCAP-Decoder/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js`。YAML 里每条记录都标注了它的源文件与行号。
- **该仓库的许可状态未确认**：没有 LICENSE 文件，README 里也没有许可段落；唯一的许可声明在一个第三方贡献的文件头里，写的是 `Unlicensed for internal use`。**方案包不分发 decoder**，只用了 `id → 物理量` 的对应关系；两条自建路径的部署指南链接上游仓库。要随部署分发 decoder 本身，先与 Seeed 确认许可。
- **`device_class`、`unit_of_measurement`、`state_class` 三列不来自 decoder**——那里没有这些信息，它们取自 Home Assistant sensor 文档。
- **架构图**由 Architecture IR 生成，产品贴图取自已审核的 Seeed 产品素材库。
