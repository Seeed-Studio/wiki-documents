---
description: reComputer Rugged J40 入门指南
title: reComputer Rugged J40 入门指南
keywords:
  - reComputer Rugged
  - IP66
  - Jetson
  - 入门指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_rugged_j40_getting_started
sku: 100046979,100002634
last_update:
  date: 03/04/2026
  author: Dayu,Dongxu Jin
createdAt: '2026-03-04'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/cn/ai_robotics_recomputer_rugged_j40_getting_started/
---

# reComputer Rugged J40 入门指南

:::note
本产品目前仍在开发中。规格和供货情况可能会发生变化。
:::

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png"/>
</div>

reComputer Rugged J40 是一款通过 IP66 认证的无风扇边缘 AI 计算机，由 NVIDIA Jetson Orin NX/Nano 模组提供算力。专为包括海事、车载和工业部署在内的严苛户外环境而设计，在紧凑的被动散热机箱中提供高达 100 TOPS 的 AI 性能，并配备全防水 M12 接口。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>立即获取 🖱️</font></span></strong>
  </a>
</div>

## 特性

- **IP66 防水**：全密封机箱，所有外部接口均采用 M12 防水连接器
- **无风扇被动散热**：在 -20°C 至 +60°C、0.7 m/s 气流条件下静音运行
- **坚固耐用且抗振动**：3 Grms @ 5–500 Hz，1 小时/轴——适用于车载和海事场景
- **丰富工业 I/O**：CAN-FD（隔离）、RS-232/422/485、DI/DO，全部通过 M12 A-code 接口提供
- **灵活网络连接**：4× PoE GbE + 1× GbE（M12），M.2 Key E（Wi-Fi/BT），M.2 Key B（5G/GPS）
- **宽电压输入**：通过 M12 B/A-code 接口提供 19–48 V DC 输入
- **认证**：CE、FCC、RoHS、REACH

## 规格参数

<table>
  <thead>
    <tr>
      <th colSpan={2}>产品名称</th>
      <th>reComputer Rugged J4012</th>
      <th>reComputer Rugged J3011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>100046979</td>
      <td>100002634</td>
    </tr>
    <tr>
      <td colSpan={2}>NVIDIA Jetson 模组</td>
      <td>Orin NX 16GB</td>
      <td>Orin Nano 8GB</td>
    </tr>
    <tr>
      <td rowSpan={4}>处理器系统</td>
      <td>AI 性能</td>
      <td>100 TOPS</td>
      <td>40 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1024 核 NVIDIA Ampere，32 个 Tensor Core</td>
      <td>1024 核 NVIDIA Ampere，32 个 Tensor Core</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 核 Arm Cortex-A78AE v8.2 64 位，2MB L2 + 4MB L3</td>
      <td>6 核 Arm Cortex-A78AE v8.2 64 位，1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>内存</td>
      <td>16GB 128 位 LPDDR5 @ 102.4 GB/s</td>
      <td>8GB 128 位 LPDDR5 @ 68 GB/s</td>
    </tr>
    <tr>
      <td rowSpan={2}>存储</td>
      <td>eMMC</td>
      <td colSpan={2}>-</td>
    </tr>
    <tr>
      <td>扩展</td>
      <td colSpan={2}>M.2 Key M（2280）NVMe SSD — 内置 128 GB</td>
    </tr>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>以太网</td>
      <td colSpan={2}>4× GbE RJ45 PoE PSE（802.3af，M12 防水）+ 1× GbE RJ45（M12 防水）</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={2}>4× USB 3.2 Type-A（M12 防水）+ 1× USB 2.0/3.0 Type-C（烧录，防水盖）+ 1× USB Type-C（调试）</td>
    </tr>
    <tr>
      <td>显示</td>
      <td colSpan={2}>1× HDMI（防水盖）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={2}>2× CAN-FD（隔离，120 Ω），通过 M12 A-code 8 针接口</td>
    </tr>
    <tr>
      <td>串口</td>
      <td colSpan={2}>1× RS-232/422/485，通过 M12 A-code 8 针接口</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={2}>2× DI + 2× DO，通过 M12 12 针 / 8 针接口</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={2}>1× Nano SIM 卡槽</td>
    </tr>
    <tr>
      <td>天线</td>
      <td colSpan={2}>4× SMA 防水天线接口</td>
    </tr>
    <tr>
      <td rowSpan={2}>扩展</td>
      <td>M.2 Key E</td>
      <td colSpan={2}>Wi-Fi / Bluetooth 模组（可选）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={2}>5G / GPS 模组（可选）</td>
    </tr>
    <tr>
      <td rowSpan={2}>电源</td>
      <td>输入</td>
      <td colSpan={2}>通过 M12 B/A-code 接口提供 19–48 V DC</td>
    </tr>
    <tr>
      <td>功耗</td>
      <td colSpan={2}>典型 25 W，10 A 保险丝</td>
    </tr>
    <tr>
      <td rowSpan={6}>环境</td>
      <td>防护等级</td>
      <td colSpan={2}>IP66</td>
    </tr>
    <tr>
      <td>工作温度</td>
      <td colSpan={2}>-20°C 至 +60°C（0.7 m/s 气流）</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td colSpan={2}>10–95% RH（无冷凝）</td>
    </tr>
    <tr>
      <td>振动</td>
      <td colSpan={2}>3 Grms @ 5–500 Hz，随机，1 小时/轴</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td colSpan={2}>210 mm × 190 mm × 93 mm</td>
    </tr>
    <tr>
      <td>颜色</td>
      <td colSpan={2}>银灰色（中框银色，散热片黑色）</td>
    </tr>
    <tr>
      <td colSpan={2}>认证</td>
      <td colSpan={2}>CE、FCC、RoHS、REACH</td>
    </tr>
    <tr>
      <td colSpan={2}>质保</td>
      <td colSpan={2}>2 年</td>
    </tr>
  </tbody>
</table>

## 硬件概览

:::note
硬件概览图片将在产品定型后补充。
:::

**LED 指示灯：**

| LED | 颜色 | 状态 | 描述 |
|-----|-------|--------|-------------|
| PWR | 绿色 | On | 设备已上电 |
| PWR | 绿色 | Off | 设备未上电 |
| ACT | 绿色 | Flashing | SSD 访问活动 |

## 烧录 JetPack

:::note
BSP 可用后将补充烧录说明。烧录流程与其他 reComputer J40 系列设备相同。
:::

请参考 [Flash BSP with Jetpack to Selected Jetson](/cn/flash/jetpack_to_selected_product) 页面获取最新的烧录指南。

### 前置条件

- reComputer Rugged J40
- 电源适配器（19–48 V DC）
- Ubuntu 主机电脑（20.04 或 22.04）
- USB Type-C 数据线（用于烧录）
- 外接显示器 + HDMI 线缆
- 键盘和鼠标

### 进入强制恢复模式

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/rugged_J401/1.jpg"/>
</div>

1. 使用 USB Type-C 线缆连接 **DEVICE** 接口与 Ubuntu 主机电脑。
2. 按住 **REC**（Recovery）按键。
3. 按住 REC 的同时，接通电源以启动主板。
4. 松开 Recovery 按键。

在 Ubuntu 主机电脑上，通过以下命令确认是否进入恢复模式：

```bash
lsusb
```

不同模组的预期输出如下：
- Orin NX 16GB: `0955:7323 NVidia Corp`
- Orin Nano 8GB: `0955:7523 NVidia Corp`

## 解压与烧录

**步骤 1：** 解压已下载的镜像文件：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
```

**步骤 2：** 进入解压后的目录并执行烧录命令：

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

## 资源

- [reComputer Rugged J40 规格书](#) *(即将推出)*
- [Linux_for_Tegra 源码](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson 设备对比](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
