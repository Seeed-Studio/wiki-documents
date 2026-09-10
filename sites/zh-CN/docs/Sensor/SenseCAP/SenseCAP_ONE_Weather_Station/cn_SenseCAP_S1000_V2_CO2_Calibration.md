---
description: SenseCAP S1000 V2 10 合 1 紧凑型气象传感器的 CO₂ 标定流程。
title: SenseCAP S1000 V2 CO₂ 标定
keywords:
  - SenseCAP
  - SenseCAP S1000 V2
  - CO2 标定
  - 紧凑型气象传感器
image: https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration.jpg
slug: /sensecap_s1000_v2_co2_calibration
sku: 101991024
last_update:
  date: 09/09/2026
  author: Zhai Chenyang
createdAt: '2026-09-09'
updatedAt: '2026-09-09'
url: https://wiki.seeedstudio.com/cn/sensecap_s1000_v2_co2_calibration/
---

# SenseCAP S1000 V2 CO₂ 标定

:::note
本 CO₂ 标定流程仅适用于 **SKU 101991024**，不兼容 IAP 版本的多合一 CO₂ 气象站。
:::
   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration.jpg"/></div>
## 标定方法

- **ABC 自动基线校正：** 传感器会在指定周期内识别最低且稳定的 CO₂ 浓度，并将其调整为 ABC 目标值，通常约为 400 ppm。该方法适用于办公室、家庭等定期通风、并会周期性达到室外新鲜空气 CO₂ 水平的环境。在 S1000 上，可通过 `SA_ABC`（单位为小时）配置自动校正周期。
- **目标单点标定：** 将传感器读数调整为已知的 CO₂ 浓度，例如使用经认证的标定气体或可靠参考仪器确认的 1,000 ppm。该方法适用于精确的现场标定、CO₂ 水平持续偏高的环境，或不经常暴露在新鲜空气中的场所。在 S1000 上，可通过 `SA_TC` 输入目标浓度，设备在写入该数值后会立即执行单点标定。

## 详细标定步骤

### ABC 自动标定流程

#### 启用 ABC 前的注意事项

- 在每个 ABC 周期内，环境应在一段时间内达到接近室外背景浓度的 CO₂ 水平，并保持相对稳定。
- ABC 适用于定期通风的家庭、办公室、教室和会议室。
- 不适用于温室、畜禽养殖设施、持续有人占用或封闭空间，以及有意添加 CO₂ 的环境。
- ABC 会同时评估检测到的最低浓度及其稳定性；不会简单地将最低读数视为 400 ppm。
- 测量偏差较大时，可能需要经过多个 ABC 周期才能逐步校正。

#### 配置并启用 ABC

`SA_ABC` 用于设置内置于 SenseCAP S1000 V2 10 合 1 紧凑型气象传感器中的 CO₂ 传感器的 ABC 标定周期。

<div class="table-center">

| 参数 | 数值 |
| --- | --- |
| 单位 | 小时 |
| 支持范围 | 0–65535 |
| 默认值 | 0（ABC 禁用） |
| 禁用 ABC 的取值 | 0 和 65535 |
| 推荐设置 | 180 小时（约 7.5 天） |

</div>

1. 通过服务串口连接设备。

2. 使用下方默认串口参数检查设备的 ASCII 地址。

   <div class="table-center">

   | 参数 | 默认值 |
   | --- | --- |
   | 波特率 | 9600 |
   | 停止位 | 1 |
   | 数据位 | 8 |
   | 校验位 | None |

   </div>

   如果串口终端会自动附加 CRLF，则只需输入 `?`。

   **发送：**

   ```text
   ?
   ```

   **响应：**

   ```text
   0XA
   ```

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration1.png"/></div>

3. 在后续命令中使用返回的地址。如果地址为 `0`，发送以下命令将 ABC 周期设置为推荐值 180 小时。

   **发送：**

   ```text
   0XA;SA_ABC=180
   ```

   **响应：**

   ```text
   0XA;SA_ABC=180
   ```

   此响应表示设置已成功写入。

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration2.png"/></div>
4. 验证当前设置。

   **发送：**

   ```text
   0XA;SA_ABC=?
   ```

   **响应：**

   ```text
   SA_ABC=180
   ```

   响应中包含 `SA_ABC=180` 即表示 ABC 已启用。


   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration3.png"/></div>

### 目标单点标定流程

#### 标定前准备

1. 记录标定前的 CO₂ 读数。
2. 确保设备已正常上电并可正常通信。
3. 让参考气体充分置换测量腔内原有气体，并达到稳定状态。
4. 避免人员直接对着传感器呼吸。
5. 尽量保持温度、湿度和气压稳定。

**推荐稳定性判据**

- 预留足够时间让参考气体充分置换原有气体。
- 确认至少 3–5 次连续测量的读数变化极小。
- 确保标定气体和传感器均处于稳定温度。
- 保持标定腔与大气相通，处于大气压下。
- 不要将加压气体直接作用于传感器。使用气瓶时，应使用减压阀和合适的管路控制流量。

#### 目标标定

目标标定是针对内置于 SenseCAP S1000 V2 10 合 1 紧凑型气象传感器中的 CO₂ 传感器进行的单点标定方法。需要使用具有已知 CO₂ 浓度的经认证标定气体或可靠参考仪器，例如 400、800、1,000 或 1,500 ppm。

`SA_TC` 用于指定目标标定值，单位为 ppm。该参数无默认值，支持范围为 0–10000 ppm。写入有效数值后，设备会立即执行单点标定。

#### 标定步骤

关于默认串口参数及检查设备地址的方法，请参考[配置并启用 ABC](#配置并启用-abc)。

1. 将设备放入合适的标定腔体中。

2. 按照标定腔体的操作要求，引入已知浓度的 CO₂ 混合气体。

3. 保持腔体与外界连通以维持大气压。持续监测 CO₂ 读数，并等待腔体内气体浓度稳定。使用以下命令检查当前读数。

   **发送：**

   ```text
   0XA;G5?
   ```

   :::note
   如果串口终端会自动附加 CRLF，则可直接输入命令；否则需在命令末尾添加 `<CR><LF>`。
   :::

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration4.png"/></div>

4. 输入已知的目标浓度。例如，当使用经认证的 1,000 ppm 标定气体时，发送以下命令。

   **发送：**

   ```text
   0XA;SA_TC=1000
   ```

   **响应：**

   ```text
   0XA;SA_TC=1000
   ```

   此响应表示命令已成功接收。设备会在数值写入后立即执行单点标定。

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration5.png"/></div>

5. 至少等待一个 CO₂ 数据更新周期（默认约 16 秒），然后再次检查读数。

   **发送：**

   ```text
   0XA;G5?
   ```

   <div align="left"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_S1000_V2_CO2_Calibration/SenseCAP_S1000_V2_CO2_Calibration6.jpg"/></div>

:::note
仅输入经确认的标定气体或参考仪器的真实浓度值，请勿输入估算值进行目标标定。
:::

