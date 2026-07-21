---
description: 命令列表
title: Wio-S3 无线模块命令列表
keywords:
  - wio
  - module
  - LoRa
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.webp
slug: /wio-s3_wireless_module_command_list
sku: 100020327,100079384
sidebar_position: 2
last_update:
  date: 6/9/2026
  author: Janet Zhang
createdAt: '2026-06-09'
updatedAt: '2026-06-10'
url: https://wiki.seeedstudio.com/cn/wio-s3_wireless_module_command_list/
---

## 串口调试命令列表

### 系统命令

**1. `help [<string>] [-v <0|1>]`**

如果未提供参数，则打印所有已注册命令的摘要；否则打印指定命令的摘要。

| 项目 | 描述 | 数据 |
|------|-------------|------|
| `<string>` | 命令名称 | 可选。如果提供，则显示指定命令的说明 |
| `-v, --verbose=<0\|1>` | 如果指定，则按给定详细级别列出控制台命令 | 0 或 1 |

**示例：**
- `help` ：显示所有可用命令。
- `help lora_tx` ：显示 `lora_tx` 命令的详细信息。
- `help -v 1` ：在启用详细模式的情况下显示完整命令列表。



### LoRa 命令

**1. `lora_tx [-f <f>] [-s <6-12>] [-b <0|1|2>] [-c <1|2|3|4>] [-p] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [-i <t>] [-d <d>] [-n <n>]`**

使用可配置的射频参数发送 LoRa 数据包。

| 项目 | 描述 | 数据 |
|------|-------------|------------------|
| `-f, --freq=<f>` | 设置射频频率（Hz） | 415000000 ~ 940000000 Hz，<br />默认：868000000 |
| `-s, --sf=<6-12>` | 设置 LoRa 扩频因子 SF | 6 ~ 12，默认：7 |
| `-b, --bw=<0\|1\|2>` | 设置 LoRa 带宽 | 0:125KHz，1:250KHz，2:500KHz，<br />默认：0 |
| `-c, --cr=<1\|2\|3\|4>` | 设置 LoRa 编码率 | 1:CR_4_5，2:CR_4_6，3:CR_4_7，4:CR_4_8，默认：1 |
| `-p, --power=` | 设置射频功率 | LPA：-17 ~ +14 dB，HPA：-9 ~ +22 dB，默认：10 |
| `--crc=<0\|1>` | 设置 LoRa CRC | 0:DISABLE，1:ENABLE，默认：1 |
| `--iq=<0\|1>` | 设置 LoRa IQ 模式 | 0:STANDARD，1:INVERTED，默认：0 |
| `--net=<0\|1>` | 设置公有网络模式 | 0:Private Network，1:Public Network，默认：0 |
| `-i, --interval=<t>` | 设置发送间隔（ms） | 默认：0 |
| `-d, --txt=<d>` | 设置要发送的文本数据 | 默认：hello |
| `-n, --num=<n>` | 发送的数据包数量 | 0：持续发送，默认：1 |

**示例：** `lora_tx -f 868000000 -s 7 -b 0 -c 1 -p 10 -d hello`  
以 868000000 Hz 频率、SF7、125 kHz 带宽、4/5 编码率，在 10 dB 发射功率下发送一帧 LoRa 数据包，负载为 "hello"。


**2. `lora_rx [-f <f>] [-s <6~12>] [-b <0|1|2>] [-c <1|2|3|4>] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [--boosted=<0|1>]`**

使用可配置的射频参数接收 LoRa 数据包。

| 项目 | 描述 | 数据 |
|------|-------------|------------------|
| `-f, --freq=<f>` | 设置射频频率（Hz） | 415000000 ~ 940000000 Hz，默认：868000000 |
| `-s, --sf=<6~12>` | 设置 LoRa 扩频因子 SF | 6 ~ 12，默认：7 |
| `-b, --bw=<0\|1\|2>` | 设置 LoRa 带宽 | 0:125KHz，1:250KHz，2:500KHz，默认：0 |
| `-c, --cr=<1\|2\|3\|4>` | 设置 LoRa 编码率 | 1:CR_4/5，2:CR_4/6，3:CR_4/7，4:CR_4/8，默认：1 |
| `--crc=<0\|1>` | 设置 LoRa CRC | 0:DISABLE，1:ENABLE，默认：1 |
| `--iq=<0\|1>` | 设置 LoRa IQ 模式 | 0:STANDARD，1:INVERTED，默认：0 |
| `--net=<0\|1>` | 设置公有网络模式 | 0:Private Network，1:Public Network，默认：0 |

**示例：** `lora_rx -f 868000000 -s 7 -b 0`  
在普通接收模式下，以 868000000 Hz 频率、SF7、125 kHz 带宽接收 LoRa 数据包。


**3. `lora_cw [-f <f>] [-p] [-o]`**

发射连续波信号，用于射频测试和频谱测量。

| 项目 | 描述 | 数据 |
|------|-------------|------------------|
| `-f, --freq=<f>` | 设置射频频率（Hz） | 415000000 ~ 940000000 Hz，默认：868000000 |
| `-p, --power=<f>` | 设置射频功率 | LPA：-17 ~ +14 dB，HPA：-9 ~ +22 dB，默认：10 |
| `-o, --ocp=<f>` | 设置电流限制步进 | 0 ~ 63，步进 2.5mA，默认：24 |

**示例：** `lora_cw -f 868000000 -p 10 -o 24`  
在 868 MHz 下以 10 dB 发射功率发射连续波信号，OCP 电流限制为 60 mA，用于射频测试。


**4. `lora_fcc_fhss [-m <0|1>] [-s <6~12>] [-c <1|2|3|4>] [-p] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [-i <t>] [-d <d>]`**

使用频率跳变模式发送 LoRa 数据包，用于满足 FCC 规范和射频认证测试。

| 项目 | 描述 | 数据 |
|------|-------------|------------------|
| `-m, --mode=<0\|1>` | 设置 FHSS 模式 | 0: FHSS_125K_MODE，1: FHSS_500K_MODE，默认：0 |
| `-s, --sf=<6~12>` | 设置 LoRa 扩频因子 SF | 6 ~ 12，默认：10 |
| `-c, --cr=<1\|2\|3\|4>` | 设置 LoRa 编码率 | 1:CR_4/5，2:CR_4/6，3:CR_4/7，4:CR_4/8，默认：1 |
| `-p, --power=<f>` | 设置射频功率 | LPA：-17 ~ +14 dB，HPA：-9 ~ +22 dB，默认：10 |
| `--crc=<0\|1>` | 设置 LoRa CRC | 0:DISABLE，1:ENABLE，默认：1 |
| `--iq=<0\|1>` | 设置 LoRa IQ 模式 | 0:STANDARD，1:INVERTED，默认：0 |
| `--net=<0\|1>` | 设置公有网络模式 | 0:Private Network，1:Public Network，默认：0 |
| `-i, --interval=<t>` | 设置发送间隔（ms） | 默认：0 |
| `-d, --txt=<d>` | 设置要发送的文本数据 | 默认：hello seeed! 1234567 |

**示例：** `lora_fcc_fhss -m 1 -s 10 -c 1 -p 14 --crc=1 --iq=0 --net=0 -i 1000 -d test`  
使用 FHSS_500K_mode 发送 FHSS LoRa 数据包，SF10，4/5 编码率，14 dB 发射功率，启用 CRC，标准 IQ 模式，私有网络模式，并每 1000 ms 发送一次负载 "test"。


### GPIO 命令

**1. `gpio [-p <0~48>] [-d <0|1>] [-v <0|1>]`**

控制 GPIO 引脚，用于输入/输出测试和硬件验证。

| 项目 | 描述 | 数据 |
|------|-------------|------------------|
| `-p, --pin=<0~48>` | GPIO 引脚编号 | 0 ~ 48，默认：0 |
| `-d, --direction=<0\|1>` | 设置 GPIO 方向 | 0: INPUT，1: OUTPUT，默认：1 |
| `-v, --value=<0\|1>` | 设置 GPIO 输出值 | 0: LOW，1: HIGH，默认：0 |

**示例：** `gpio -p 10 -d 1 -v 1`  
将 GPIO 10 设置为输出模式，并将该引脚驱动为高电平。


### Flash 命令

**1. `flash [-b <100~1000>]`**

使用块操作测试 Flash 存储器的读写性能。

| 项目 | 描述 | 数据 |
|------|-------------|------------------|
| `-b, --block=<100~1000>` | 运行读/写测试的块数量 | 100 ~ 1000，默认：100 |

**示例：** `flash -b 500`  
使用 500 个数据块执行 Flash 存储器读/写测试。


### WiFi 命令

**1. `ap_set <ssid> [<pass>] [-a <authmode>] [-n <channel>] [-m <max_conn>]`**

将设备配置为 WiFi AP 模式，并自定义 SSID、密码、认证类型和信道设置。

| 项目 | 描述 | 数据 |
|------|-------------|------|
| `<ssid>` | AP 的 SSID | 必填 |
| `<pass>` | AP 的密码 | 可选 |
| `-a, --authmode=<authmode>` | WiFi 认证类型 | open / wep / wpa2 / wpa2_enterprise |
| `-n, --channel=<channel>` | WiFi 信道 | 可选 |
| `-m, --max_conn=<max_conn>` | 最大连接终端数量 | 默认：2 |

**示例：** `ap_set MyAP 12345678 -a wpa2 -n 6 -m 4`  
在信道 6 上创建一个名为 "MyAP" 的 WPA2 WiFi AP，最多允许 4 个客户端连接。


**2. `ap_query`**

显示当前 AP 配置并断开 Station 模式连接。

**示例：** `ap_query`


**3. `wifi <action> [--espnow_enc=<int>] [--storage=<str>]`**

WiFi 操作动作。

| 项目 | 描述 | 数据 |
|------|-------------|------|
| `<action>` | WiFi 操作动作 | init / deinit / start / stop / restart / status |
| `--espnow_enc=<int>` | ESP-NOW 加密 | 仅用于 init / restart |
| `--storage=<str>` | WiFi 存储类型 | flash / ram |

**示例：** `wifi init --storage=flash`  
初始化 WiFi 子系统并将配置存储在 Flash 中。


**4. `wifi_count [<action>]`**

WiFi 计数统计。

| 项目 | 描述 | 数据 |
|------|-------------|------|
| `<action>` | 计数器操作 | query（默认）/ clear |

**示例：** `wifi_count clear` ：清除当前 WiFi 计数统计。


**5. `wifi_mode <mode>`**

设置 WiFi 模式。

| 项目 | 描述 | 数据 |
|------|-------------|------|
| `<mode>` | WiFi 模式 | ap / sta / apsta |

**示例：** `wifi_mode apsta` ：启用 AP 与 Station 同时工作模式。


**6. `wifi_protocol [<protocol>] [--2g=<2g_proto>] [--5g=<5g_proto>] [-i <interface>]`**

配置所选接口（AP 或 STA）所支持的 WiFi 协议。

**提供两种配置方式**：
- `<protocol>`：使用 `esp_wifi_set_protocol()` 配置 WiFi 协议
- `--2g / --5g`：使用 `esp_wifi_set_protocols()` 分别配置 2.4 GHz 和 5 GHz 频段的协议

**注意**：
- `esp_wifi_set_protocol()` 和 `esp_wifi_set_protocols()` 不能同时使用。
- 如果未提供任何参数，将显示当前 WiFi 协议配置。


| 项目 | 描述 | 数据 |
|------|-------------|------|
| `<protocol>` | 使用 esp_wifi_set_protocol() 配置 WiFi 协议 | 示例：b，b/g，b/g/n <br />g/n 无效。 |
| `--2g=<2g_proto>` | 使用 esp_wifi_set_protocols() 配置 2.4 GHz 协议 | API：esp_wifi_set_protocols。<br />协议字符串：'lr'、'b'、'g'、'n'、'ax'<br />与 lr 模式组合：'lr/b'、'lr/g' 等。<br />协议位图值：使用十六进制的原始位图值，例如：0x40
 |
| `--5g=<5g_proto>` | 配置 5 GHz 协议 | 格式与 --2g 相同 |
| `-i, --interface=<interface>` | 选择 WiFi 接口 | ap，sta，默认：sta |

**示例：** `wifi_protocol --2g=lr/b/g/n -i sta`  
将 STA 接口配置为在 2.4 GHz 频段支持 LR、802.11b、802.11g 和 802.11n 协议。


**7. `wifi_bandwidth [<cbw>] [--2g=<2g_cbw>] [--5g=<5g_cbw>] [-i <interface>]`**

配置 WiFi 带宽。

**提供两种配置方式**：
- `<cbw>`：使用 `esp_wifi_set_bandwidth()` 配置带宽
- `--2g / --5g`：使用 `esp_wifi_set_bandwidths()` 分别配置 2.4 GHz 和 5 GHz 频段的带宽

**注意**：
- `esp_wifi_set_bandwidth()` 和 `esp_wifi_set_bandwidths()` 不能同时使用。
- 如果未提供任何参数，将显示当前 WiFi 带宽配置。

| 项目 | 描述 | 数据 |
|------|-------------|------|
| `<cbw>` | 使用 esp_wifi_set_bandwidth() 配置带宽 | 20，40 |
| `--2g=<2g_cbw>` | 使用 esp_wifi_set_bandwidths() 配置 2.4 GHz 带宽 | 20，40 |
| `--5g=<5g_cbw>` | 使用 esp_wifi_set_bandwidths() 配置 5 GHz 带宽 | 20，40 |
| `-i, --interface=<interface>` | 选择 WiFi 接口 | ap，sta，默认：sta |

**示例：** `wifi_bandwidth --2g=20 -i sta`  
将 2.4 GHz 频段配置为使用 20 MHz 信道带宽。


**8. `wifi_ps <type>`**

设置 WiFi 功率模式。此命令用于配置设备的 WiFi 省电模式。不同模式在功耗和网络性能之间有不同的平衡。

| 类型 | 模式 | 延迟 | 描述 |
|------|------|---------|-------------|
| 0 | WIFI_PS_NONE | 最低 | 不省电，性能最佳 |
| 1 | WIFI_PS_MIN_MODEM | 中等 | 在省电与性能之间取得平衡 |
| 2 | WIFI_PS_MAX_MODEM | 最高 | 最大化省电，但延迟更高 |

**示例：** `wifi_ps 1` ：将 WiFi 省电模式设置为最小 Modem 省电。


**9. `wifi_country [<code>] [-s <int>] [-n <int>] [-p <str>]`**

设置或获取 WiFi 国家配置。此命令用于配置 WiFi 管制域，包括根据各国法规允许的信道和发射规则。

| 项目 | 描述 | 数据 |
|------|-------------|------|
| `<code>` | 国家代码设置（未提供时查询当前国家） | CN / US / JP / 等 |
| `-s, --schan=<int>` | 起始 WiFi 信道号 | 整数（例如 1） |
| `-n, --nchan=<int>` | 支持的信道总数 | 整数（例如 13） |
| `-p, --policy=<str>` | 国家策略模式 | auto（默认）/ manual |

**示例：** `wifi_country CN -s 1 -n 13 -p auto`  
将 WiFi 国家设置为 CN，启用 1-13 信道，并使用自动管制策略。


**10. `sta_connect <ssid> [<pass>] [-b <bssid>] [-n <channel>] [-no-disconnect] [-no-reconnect] [-full-scan] [-failure_retry=<int>] [-5g-offset=<rssi_5g_offset>]`**

在 STA 模式下将设备连接到指定的 WiFi 接入点。
| 项目 | 描述 | 数据 |
| :--- | :--- | :--- |
| `<ssid>` | WiFi AP 的 SSID | 字符串（WiFi 名称） |
| `<pass>` | AP 的密码 | 字符串（WiFi 密码） |
| `-b, --bssid=<bssid>` | 指定 AP 的 MAC 地址 | MAC 地址（xx:xx:xx:xx:xx:xx） |
| `-n, --channel=<channel>` | AP 的 WiFi 信道 | 整数 |
| `--no-disconnect` | 测试用：在连接前不执行 `esp_wifi_disconnect` | / |
| `--no-reconnect` | 在 WiFi 断开处理程序中禁用自动重连 | / |
| `--full-scan` | 在 STA 连接过程中启用全信道扫描 | / |
| `--failure_retry=<int>` | 连接失败后的重试次数 | 整数 |
| `--5g-offset=<rssi_5g_offset>` | 进行全扫描连接时 5G SSID 的偏移值 | 整数 |

**示例：** `sta_connect MyWiFi 12345678 -n 6 --failure_retry=3 --full-scan` ：
在 STA 模式下连接到指定 WiFi AP，并可选控制扫描、重试和连接行为。


**11. `sta_disconnect`**

将设备从当前 WiFi AP 断开或停止重连。

**示例：** `sta_disconnect`


**12. `sta_scan [-h] [<ssid>] [-b <bssid>] [-n <int>] [--max=<int>] [--min=<int>] [--passive] [--passive-time=<int>] [--dwell=<int>] [-2 <int/hex>] [-5 <int/hex>] [--count-only]`**

在 Station 模式下扫描可用的 WiFi 接入点。

| 项目 | 描述 | 数据 |
| :--- | :--- | :--- |
| `<ssid>` | WiFi AP 的 SSID | 字符串（WiFi 名称） |
| `-b, --bssid=<bssid>` | AP 的 BSSID | MAC 地址（xx:xx:xx:xx:xx:xx） |
| `-n, --channel=<int>` | AP 的信道 | 整数 |
| `-h, --show-hidden` | 显示隐藏 AP | / |
| `--max=<int>` | 最大主动扫描时间 | 整数（毫秒） |
| `--min=<int>` | 最小主动扫描时间 | 整数（毫秒） |
| `--passive` | 将扫描类型设置为被动 | / |
| `--passive-time` | 被动扫描时间 | 整数（毫秒） |
| `--dwell=<int>` | 主信道驻留时间 | 整数（毫秒） |
| `-2, --bitmap-2g=<int/hex>` | 2.4GHz 信道扫描位图 | 十六进制/整数（例如 0x842 表示 ch1/6/11） |
| `-5, --bitmap-5g=<int/hex>` | 5GHz 信道扫描位图 | 十六进制/整数（例如 0x6 表示 ch36/40） |
| `--count-only` | 测试用：仅扫描并统计 AP 数量。 | / |

**示例：** `sta_scan -h --passive --passive-time=120 --dwell=30 -2 0x842 -5 0x6`  
执行一次完整的被动 WiFi 扫描，显示隐藏 AP，并扫描选定的 2.4GHz 和 5GHz 信道。


**13. `wifi_txpower [-u <unit>] [--reset]`**

设置 WiFi 发射功率或重置为默认值。

| 项目 | 描述 |
|------|-------------|
| `-u, --unit` | TX 功率值，每个单位 = 0.25 dBm（例如 8 = 2 dBm） |
| `--reset` | 将 TX 功率重置为 SDK 配置中的默认值 |

**示例：** `wifi_txpower -u 8` ：将 WiFi 发射功率设置为 2 dBm。


### 网络命令

**1. `ping [-W <timeout>] [-i <interval>] [-s <size>] [-c <count>] [-Q <n>] [host] [--abort]`**

向网络主机发送 ICMP ECHO_REQUEST 数据包。

| 项目 | 描述 | 数据 |
| :--- | :--- | :--- |
| `-W, --timeout=<timeout>` | 等待响应的时间 | 整数（秒） |
| `-i, --interval=<interval>` | 发送数据包之间的间隔 | 浮点/整数（秒） |
| `-s, --packetsize=<size>` | 使用 `<size>` 作为要发送的数据字节数 | 整数（字节） |
| `-c, --count=<count>` | 要发送的数据包数量，在收到 `<count>` 个应答后停止 | 整数，默认：5 |
| `-Q, --tos=<n>` | IP 服务类型（Type of Service）字段值 | 整数 |
| `host` | 目标 IP 地址或域名 | 字符串 |
| `--abort` | 停止正在运行的 ping 进程 | ping abort -> esp_ping_stop |


**示例：** `ping -c 4 8.8.8.8` ：向 8.8.8.8 发送 4 个 ICMP 回显请求。


**2. `iperf [-suV] [-c <host>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>] [-f <format>] [--abort]`**

使用 TCP 或 UDP 测量网络性能（吞吐量、带宽和延迟）。

| 项目 | 描述 | 数据 |
| :--- | :--- | :--- |
| `-c, --client` | 以客户端模式运行并连接到服务器 | IP/域名 |
| `-s, --server` | 以服务器模式运行 | / |
| `-u, --udp` | 使用 UDP 而非 TCP | / |
| `-V, --ipv6_domain` | 使用 IPv6 协议 | / |
| `-p, --port=<port>` | 服务器端口号 | 整数 |
| `-l, --len=<length>` | 传输缓冲区长度 | 整数（字节），默认：TCP=16384，IPv4 UDP=1470，IPv6 UDP=1450 |
| `-i, --interval=<interval>` | 周期性带宽报告之间的秒数 | 浮点/整数（秒） |
| `-t, --time=<time>` | 测试持续时间 | 整数（秒），默认 10 秒 |
| `-b, --bandwidth=<bandwidth>` | 目标带宽 | Mbits/sec |
| `-f, --format=<format>` | 输出格式 | 字符串，k = Kbits/sec，m = Mbits/sec |
| `--abort` | 停止正在运行的 iperf 测试 | / |

**示例：** `iperf -c 192.168.1.10 -t 10 -i 1`： 
对服务器 192.168.1.10 运行一次持续 10 秒的 TCP 带宽测试，每 1 秒报告一次结果。


### BLE 命令

**1. `ble [-a <0|1>]`**

控制 BLE 广播状态，用于蓝牙测试和发现。

| 项目 | 描述 | 数据 |
| :--- | :--- | :--- |
| `-a, --adv=<0\|1>` | BLE 广播控制 | 0：停止广播，1：开始广播，默认：0 |

**示例：** `ble -a 1` ：启动 BLE 广播模式以进行设备发现。


### 电源模式命令

**1. `sleep [-m <0|1|2>]`**

配置设备睡眠模式，用于低功耗测试。

| 项目 | 描述 | 数据 |
| :--- | :--- | :--- |
| `-m, --mode=<0\|1\|2>` | 配置设备睡眠模式，用于低功耗测试。 | 0：待机，1：轻睡眠，2：深度睡眠，默认：0 |

**示例：** `sleep -m 2` ：将设备切换到深度睡眠模式。


## 技术支持与产品讨论

请将任何技术问题提交到我们的[论坛](http://forum.seeedstudio.com/)。

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>