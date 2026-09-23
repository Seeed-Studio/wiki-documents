---
description: 边缘网关上的中央空调设定值监督控制——OPC UA、Modbus、BACnet/IP 与 SDM630 电能表汇入同一套点位模型，KNN 预测设定值，每次写入都读回核实才算生效
title: 边缘网关上的暖通设定值控制：选型、部署与实测数据
keywords:
  - 暖通设定值控制
  - 楼宇节能改造
  - 监督控制
  - BACnet/IP
  - Modbus TCP
  - Modbus RTU
  - OPC UA
  - Eastron SDM630
  - 电能表模板
  - KNN 预测
  - 写入读回核实
  - 控制回滚
  - reComputer R1100
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg
slug: /solutions/hvac-setpoint-control
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/cn/solutions/hvac-setpoint-control/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[使用须知]
这是**监督式设定值推荐器**，不是经过安全认证的控制系统：机组自身的联锁与安全控制优先，不给出节能率数字。
:::

## 这套方案是干什么的

办公楼、商场、工厂的中央空调通常按固定排程运行：不管楼层是满是空，设定值都一样。这个方案在机组旁边
放一台网关，把暖通控制器和电能表读进**同一套点位模型**，用这栋楼自己的历史数据学出设定值建议，再写
回控制器；写入值从现场读回、与下发值比对一致后才算生效。

它面向中央机组：冷机、空调机组，以及它们前面的控制器。不适用于分体式空调，也不放在安全回路上。

- 选型与部署：[可部署方案页](https://www.seeedstudio.com.cn/solutions/reference-designs/smart_hvac_control)
- 开源地址：暂无。`github.com/Seeed-Solution/Solution_HVAC_SmartControl` 目前不对外开放。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>现有控制器与电表直接接入</h3>
                <p>支持 OPC UA、Modbus TCP、RS-485 上的 Modbus RTU 或 BACnet/IP 的控制器不用替换，SDM630 电表有内置模板。上限 2,000 个点位，其中最多 50 个可写。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>每次写入都读回核实</h3>
                <p>写入前冻结上一次已知良好的值、质量、时间戳与优先级；整定延迟后重读点位，按容差比对。读回值质量不合格时不算通过。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>出故障自动回滚并告警</h3>
                <p>读回不一致、数据源离线、预测被禁用、操作员中止、批次部分失败都会触发回滚。告警按成因标识，同一故障重复出现时复用已打开的告警。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>实测容量：2,000 点位、349.99 events/s</h3>
                <p>目标 350.0，在 reComputer R2000 系列上本机回环实测一次 180 秒。条件见附录。</p>
            </div>
        </li>
    </ul>
</div>

### 控制台上能看到什么

运行中的控制台渲染三样东西：带逐点质量的点位总表、列出各数据源与其已注册点位数的接入页，以及命令
回执台账。写入链路是在台账里可见的：每一行带请求值、生效值、操作者、协议确认，以及整定延迟之后的
读回结果。被带外改写过寄存器的那一条显示「不一致已补偿」并带上现场读到的值，由
`plugin:prediction:rollback` 下发的补偿命令紧跟在下一行。

接入页列出每个数据源与它已注册的点位数，这是确认接线成功的第一处：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-list-zh-b3b53c9b.png" alt="接入页：每个数据源的协议、地址、在线状态与已注册点位数"/>
</div>

点位总表带逐点质量，质量不为 good 的点在这里就能看出来：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/points-zh-6977ecfb.png" alt="点位总表：点位名、当前值、单位、质量与最后更新时间"/>
</div>

预测运行页给出这一轮推荐的设定值、依据的历史窗口与当前控制模式：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/prediction-runtime-zh-e6067c35.png" alt="预测运行页：本轮推荐设定值、历史窗口与控制模式"/>
</div>

写入链路在命令回执台账里可见——请求值、生效值、操作者、协议确认与读回结果各占一列：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/control-step2-zh-d24d8821.png" alt="命令下发第二步：确认写入值、目标点位与安全限值"/>
</div>

以上截图接的是包内自带的协议模拟器，没有接真实电表或控制器；网关侧运行的是实际交付的软件。

## 需要哪些硬件

三样：一台你已经有的控制器、一块电表、一台 Docker 主机。

**① 暖通控制器**——机组前面现成的那台，只要支持 OPC UA、Modbus TCP/RTU 或 BACnet/IP 即可。不接机组
只做演练时，包里自带一个跑在 4841 端口上的 OPC UA 模拟器。

**② 电能表**——Modbus V2 寄存器映射的 Eastron SDM630，经 Modbus TCP、Modbus TCP 网关或 RS-485 接入。
提供 10 个只读点位：三相电压电流、总有功功率（kW）、总功率因数、频率、进口有功电能（kWh）。

**③ 网关主机**——唯一需要选型的设备。服务是跑在 x86-64 或 arm64 上的 Docker 负载，因此现场网段上
已有的 Linux 机器是受支持的目标。

| | 网关 | 存储 | 什么时候选它 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991374.jpg" alt="reComputer R1124-10" width="110" /> | [reComputer R1124-10](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html)<br/>4 GB 内存，板载 RS-485 / RS-232 / DI / DO | 16 GB eMMC | 历史数据放在服务器上，网关只留一个短窗口 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>同一块板，更大的 eMMC | 32 GB eMMC | 数月运行历史留在网关本地，训练集可以直接在本机重新导入 |

R1100 系列板上自带 RS-485，因此接在 RS-485 上的电表不需要额外的 USB 适配器。**服务本身约占 1 GB
磁盘**，存储容量决定的是不依赖服务器时本地能回看多久的历史。

其余前置条件：Docker Engine 20.10 及以上，主机 8280 与 4841 端口未被占用，以及至少一周的历史运行
数据（CSV 或 Excel，含时间、设定值、实测温度和用电量列）。

## 现场怎么部署

### 一、装硬件：接线

:::tip[先核对电表的字节序与字序]
内置 SDM630 模板默认大端字节序与大端字序，取自厂商公开的默认值。先读一个
物理量已知的寄存器，与电表本机显示核对。电压和频率数值接近但不对、进口电能出现倒退，通常是字序配置
错误，先查字序再查接线。
:::

把网关接到与控制器、电表（或其 Modbus TCP 网关）相同的网络上。走 Modbus RTU 时，波特率、校验位和
从站地址要与电表实际配置一致，不一致时只表现为超时，没有错误提示；并且要用**串口设备部署配置**：
标准 Docker 配置不挂载主机串口，容器里没有 `/dev/ttyUSB0`。

### 二、装软件：三步

逐项表单字段和应用包在可部署方案页，按现场条件选好配置后下载。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/reference-designs/smart_hvac_control" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>选配置并下载应用包 🖱️</font></span></strong>
    </a>
</div><br />

步骤轮廓：

1. **部署服务**——Docker 部署，可以装在跑部署工具的这台机器上，也可以经 SSH 装到现场网段的设备上。
   表单里填电表通信方式、OPC UA 地址、安全限值、控制模式和告警阈值。
2. **打开控制台**——创建第一个管理员，确认两个数据源都在线、点位数符合预期。接入向导按协议逐项问地址与轮询周期：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-wizard-step1-zh-e1388a8e.png" alt="接入向导第一步：选协议、填地址与轮询周期"/>
</div>

3. **调试**——注册电表，在观察模式下跑预测，故意注入故障，最后才开启写入。批量下发前先在选择页确认这一批到底覆盖了哪些点位：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/batch-select-zh-a9bd9f76.png" alt="批量下发选择页：本批覆盖的点位与逐点的当前值"/>
</div>

<!-- TODO 图：网关装在机房/机组旁的现场安装照——需现场拍 -->
<!-- TODO 图：真实电表与控制器接线照（当前所有截图背后都是协议模拟器）——需现场拍 -->

**控制模式保持 `observe`，「安全基线批准人」留空。** 批准人留空时基线持续显示「未批准」；填写批准人
等于由该工程师签字认可安全限值。

从零到控制台跑起来、点位有数，预估约 **60 分钟**。调试耗时更长，因为它包含一个完整人流周期的观察
模式预测，并且要由实际操作这套机组的人复核推荐值。

:::caution[已发布镜像的能力范围]
已发布的 `missionpack-knn:v1.6.5` **不包含** SDM630 模板、回滚协调器和告警 envelope。在 v1.6.5 上，
观察模式的子步骤仍然适用，但电表、回滚和告警三组子步骤无法完成。
:::

## 有哪些接口

部署暴露出来的一切都在网关主机的一个 HTTP 端口后面。不开启北向上送时，没有任何数据离开现场网段。

- **运维人员**——`8280` 上的浏览器控制台：带逐点质量的点位总表、电表注册、预测运行、命令回执、告警
  横幅。
- **监控系统**——`GET /system/runtime-metrics`。启用北向上送时包含 `northbound.spool.queued` 与
  `northbound.spool.dropped`；调试步骤要求确认 `queued` 回到 0 且 `dropped` 没有增长。
- **自建系统**——同样在 `8280` 后面的控制台 API 面，以及部署启动时等待的健康检查接口。

### 完整的端口与路径

| 端口 / 路径 | 提供什么 | 需要外网 |
|---|---|---|
| `8280` `/` | 浏览器控制台 | 否 |
| `8280` `/system/runtime-metrics` | 运行计数、北向 spool 计数 | 否 |
| `8280` `/api/v1/health` | 健康检查；启动允许 30 秒 | 否 |
| `4841` | 内置 OPC UA 模拟器，用于演练 | 否 |

**命令回执看读回列**：`protocol_acknowledged` 只表示控制器接受了这一帧。读回那一列（`已读回 / 一致`，
或 `不一致已补偿` 并带上现场读到的值）才是现场实际持有的值。回滚协调器下发的补偿命令以独立回执紧跟
在被撤销的那条写入之后，审计记录按顺序读即可，不需要关联两张表。

容器日志按 10 MB 轮转、保留 4 份（`docker logs missionpack_knn`）。命令审计记录、回滚日志和告警历史
要在被轮转掉之前导出。

### 南向协议能力

所有点位落在同一个注册表里，上限 **2,000 个点位**，其中最多 **50 个可写**。SDM630 的 10 个电表点位是只读的，计入 2,000，不占用 50。

| 传输 | 角色 | 约束 |
|---|---|---|
| OPC UA | 暖通控制器的读与写 | 地址按部署配置；内置模拟器在 4841 |
| Modbus TCP | 电表与控制器 | 从站地址与端口按数据源配置；直连或经 TCP 网关 |
| Modbus RTU（RS-485） | 电表 | 需要串口设备部署配置；标准配置不挂载主机串口 |
| BACnet/IP | 空调机组的读与写 | 写入带优先级并用 `Null` 释放。**未实现 COV 订阅、BBMD 注册和 MS-TP** |

## 性能与实测数据 {#实测数据}

以下数据都是对协议模拟器实测，经本机回环，没有建筑现场数据；除非另有说明均为单次运行。

### 容量

| 指标 | 数值 | 条件 |
|---|---:|---|
| 采集吞吐 | 349.99 events/s（目标 350.0 的 99.99%） | 2,000 点位，4 个协议源 |
| 预测速率 | 0.939 cycle/s | 同一次运行 |
| 进程组 RSS 峰值 | 217.3 MiB | 同一次运行 |

三行共同的条件：4 个协议源共 2,000 个点位，OPC UA 与 Modbus 采集周期 5 秒、BACnet 10 秒，仅本机回环，运行 **180 秒**，设备为 reComputer R2000 系列（arm64）。

复现：上游 `b5fe4cc`，采集记录 `capacity-smoke` r14

### 时延

| 指标 | 数值 | 条件 |
|---|---:|---|
| 预测周期时延 | 最大 46.27 ms | n = 4 个周期，未带载 |
| 控制准入时延 | 最大 1.41 ms | n = 2 个周期，未带载 |

两项只反映代码路径本身的耗时。

复现：上游 `f831bae`，`northbound-smoke` 的 runtime 基线

### 运行时与关键参数

预测模型是 KNN，用这栋楼自己的历史运行记录训练（CSV 或 Excel，含时间、设定值、实测温度和用电量列）；服务是 x86-64 或 arm64 上的 Docker 负载。每条预测在下发到控制器之前都可以在控制台里查看。

- **控制模式与安全限值**：控制模式出厂为 `observe`，不改就不写入任何点位。设定值下限 / 上限 18 / 30 °C、最大变化量 1.0 °C / 300 秒、模式白名单 off / fan / cool / heat / auto 都是**占位值**，按机组填写。
- **写回核实默认关闭**：预测运行配置（在控制台里创建）要显式写上 `"rollback": { "enabled": true, "settle_seconds": 2.5 }`，缺少 `rollback` 段时按 `enabled: false` 处理。
- **`settle_seconds`**（0–30，默认 1.0）**必须大于数据源的采集周期**，否则读回拿到的是写入之前的值，会报出一次并不存在的不一致。

### 已知退化

- **预测速率有结构上限（未修复）**：预测循环是「跑完一个 cycle 再固定 sleep」，速率是 `1/(1.0 + t_cycle)`。2,000 点规模下 `t_cycle` 约 **0.119 秒**，上限落在 **0.894 cycle/s** 附近，低于长稳测试要求的 0.90 门槛。
- **只有 Modbus 点位的写入会被读回核实**：BACnet 输出没有写入优先级可用，被跳过。
- **字节序**：用电表本机显示核对之前，电表点位按厂商默认字序（大端）解析，数值可能不对。

### 下一步

- 在 reComputer R10 系列或 reTerminal DM 上接真实设备，做 OPC UA、Modbus TCP、Modbus RTU（USB 转 RS-485）与 BACnet/IP 的读写与独立读回。
- 在同类目标主机上跑 72 小时无人值守运行，期间做网络、Broker、进程与设备恢复演练。

## 数据与素材出处

- **SDM630 寄存器映射**——依据 Eastron 公开的 Modbus 协议文档（Modbus V2 寄存器映射，IEEE-754 float32
  输入寄存器）。地址按该文档实现；大端字节序与字序是厂商默认值。
- **历史运行数据**——由部署现场自行提供。包里不分发任何数据，也不需要公开数据集。
- **控制台截图**——对接包内自带协议模拟器运行的打包软件所做的原始屏幕截图。模拟器配置、采集主机与
  校验和记录在包内的 `gallery/ATTRIBUTION.md`。不含任何第三方素材、品牌标识或图库图片。
- **架构图**——按结构化架构 IR 绘制，原创，无第三方美术素材。
