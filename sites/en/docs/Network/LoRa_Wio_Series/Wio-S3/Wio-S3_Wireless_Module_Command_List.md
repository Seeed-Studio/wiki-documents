---
description: Command List
title: Wio-S3 Wireless Module Command List
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
updatedAt: '2026-06-09'
url: https://wiki.seeedstudio.com/wio-s3_wireless_module_command_list/
---

## Serial Debugging Command List

### System Command

**1. `help [<string>] [-v <0|1>]`**

Print the summary of all registered commands if no arguments are given, otherwise print summary of given command.

| Item | Description | Data |
|------|-------------|------|
| `<string>` | Name of command | Optional. If provided, display description for the specified command |
| `-v, --verbose=<0\|1>` | If specified, list console commands with given verbose level | 0 or 1 |

**Examples:**
- `help` : Show all available commands.
- `help lora_tx` : Show detailed information for the `lora_tx` command.
- `help -v 1` : Show full command list with verbose mode enabled.



### LoRa Command

**1. `lora_tx [-f <f>] [-s <6-12>] [-b <0|1|2>] [-c <1|2|3|4>] [-p] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [-i <t>] [-d <d>] [-n <n>]`**

Send LoRa data packets with configurable radio parameters.

| Item | Description | Data |
|------|-------------|------------------|
| `-f, --freq=<f>` | Set radio frequency in Hz | 415000000 ~ 940000000 Hz, <br />default: 868000000 |
| `-s, --sf=<6-12>` | Set LoRa SF | 6 ~ 12, default: 7 |
| `-b, --bw=<0\|1\|2>` | Set LoRa Bandwidth | 0:125KHz, 1:250KHz, 2:500KHz, <br />default: 0 |
| `-c, --cr=<1\|2\|3\|4>` | Set LoRa Coding Rate | 1:CR_4_5, 2:CR_4_6, 3:CR_4_7, 4:CR_4_8, default: 1 |
| `-p, --power=` | Set radio power | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, default: 10 |
| `--crc=<0\|1>` | Set LoRa CRC | 0:DISABLE, 1:ENABLE, default: 1 |
| `--iq=<0\|1>` | Set LoRa IQ mode | 0:STANDARD, 1:INVERTED, default: 0 |
| `--net=<0\|1>` | Set Public Network | 0:Private Network, 1:Public Network, default: 0 |
| `-i, --interval=<t>` | Set TX interval (ms) | default: 0 |
| `-d, --txt=<d>` | Set text data to send | default: hello |
| `-n, --num=<n>` | Number of packets sent | 0: Keep sending, default: 1 |

**Example:** `lora_tx -f 868000000 -s 7 -b 0 -c 1 -p 10 -d hello`  
Send a LoRa packet with frequency 868000000 Hz, SF7, 125 kHz bandwidth, coding rate 4/5, and send "hello" at TX power 10 dB.


**2. `lora_rx [-f <f>] [-s <6~12>] [-b <0|1|2>] [-c <1|2|3|4>] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [--boosted=<0|1>]`**

Receive LoRa packets with configurable radio parameters.

| Item | Description | Data |
|------|-------------|------------------|
| `-f, --freq=<f>` | Set radio frequency in Hz | 415000000 ~ 940000000 Hz, default: 868000000 |
| `-s, --sf=<6~12>` | Set LoRa SF | 6 ~ 12, default: 7 |
| `-b, --bw=<0\|1\|2>` | Set LoRa Bandwidth | 0:125KHz, 1:250KHz, 2:500KHz, default: 0 |
| `-c, --cr=<1\|2\|3\|4>` | Set LoRa Coding Rate | 1:CR_4/5, 2:CR_4/6, 3:CR_4/7, 4:CR_4/8, default: 1 |
| `--crc=<0\|1>` | Set LoRa CRC | 0:DISABLE, 1:ENABLE, default: 1 |
| `--iq=<0\|1>` | Set LoRa IQ mode | 0:STANDARD, 1:INVERTED, default: 0 |
| `--net=<0\|1>` | Set Public Network | 0:Private Network, 1:Public Network, default: 0 |

**Example:** `lora_rx -f 868000000 -s 7 -b 0`  
Receive LoRa packets at frequency 868000000 Hz, SF7, 125 kHz bandwidth in normal RX mode.


**3. `lora_cw [-f <f>] [-p] [-o]`**

Transmit a continuous wave signal for RF testing and spectrum measurement.

| Item | Description | Data |
|------|-------------|------------------|
| `-f, --freq=<f>` | Set radio frequency in Hz | 415000000 ~ 940000000 Hz, default: 868000000 |
| `-p, --power=<f>` | Set radio power | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, default: 10 |
| `-o, --ocp=<f>` | Set current limit step | 0 ~ 63, step 2.5mA, default: 24 |

**Example:** `lora_cw -f 868000000 -p 10 -o 24`  
Transmit continuous wave signal at 868 MHz with 10 dB TX power and 60 mA OCP current limit for RF testing.


**4. `lora_fcc_fhss [-m <0|1>] [-s <6~12>] [-c <1|2|3|4>] [-p] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [-i <t>] [-d <d>]`**

Transmit LoRa packets using frequency hopping mode for FCC compliance and RF certification testing.

| Item | Description | Data |
|------|-------------|------------------|
| `-m, --mode=<0\|1>` | Set FHSS mode | 0: FHSS_125K_MODE, 1: FHSS_500K_MODE, default: 0 |
| `-s, --sf=<6~12>` | Set LoRa SF | 6 ~ 12, default: 10 |
| `-c, --cr=<1\|2\|3\|4>` | Set LoRa Coding Rate | 1:CR_4/5, 2:CR_4/6, 3:CR_4/7, 4:CR_4/8, default: 1 |
| `-p, --power=<f>` | Set radio power | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, default: 10 |
| `--crc=<0\|1>` | Set LoRa CRC | 0:DISABLE, 1:ENABLE, default: 1 |
| `--iq=<0\|1>` | Set LoRa IQ mode | 0:STANDARD, 1:INVERTED, default: 0 |
| `--net=<0\|1>` | Set Public Network | 0:Private Network, 1:Public Network, default: 0 |
| `-i, --interval=<t>` | Set TX interval (ms) | default: 0 |
| `-d, --txt=<d>` | Set text data to send | default: hello seeed! 1234567 |

**Example:** `lora_fcc_fhss -m 1 -s 10 -c 1 -p 14 --crc=1 --iq=0 --net=0 -i 1000 -d test`  
Transmit FHSS LoRa packets using FHSS_500K_mode, SF10, coding rate 4/5, 14 dB TX power, CRC enabled, standard IQ mode, private network mode, and send payload "test" every 1000 ms.


### GPIO Command

**1. `gpio [-p <0~48>] [-d <0|1>] [-v <0|1>]`**

Control GPIO pins for input/output testing and hardware validation.

| Item | Description | Data |
|------|-------------|------------------|
| `-p, --pin=<0~48>` | GPIO pin number | 0 ~ 48, default: 0 |
| `-d, --direction=<0\|1>` | Set GPIO direction | 0: INPUT, 1: OUTPUT, default: 1 |
| `-v, --value=<0\|1>` | Set GPIO output value | 0: LOW, 1: HIGH, default: 0 |

**Example:** `gpio -p 10 -d 1 -v 1`  
Set GPIO 10 as output mode and drive the pin output to high level.


### Flash Command

**1. `flash [-b <100~1000>]`**

Test flash memory read and write performance using block operations.

| Item | Description | Data |
|------|-------------|------------------|
| `-b, --block=<100~1000>` | Block number to run read/write test | 100 ~ 1000, default: 100 |

**Example:** `flash -b 500`  
Perform flash memory read/write test using 500 data blocks.


### WiFi Command

**1. `ap_set <ssid> [<pass>] [-a <authmode>] [-n <channel>] [-m <max_conn>]`**

Configure the device to operate in WiFi AP mode with custom SSID, password, authentication type, and channel settings.

| Item | Description | Data |
|------|-------------|------|
| `<ssid>` | SSID of AP | Required |
| `<pass>` | Password of AP | Optional |
| `-a, --authmode=<authmode>` | WiFi authentication type | open / wep / wpa2 / wpa2_enterprise |
| `-n, --channel=<channel>` | WiFi channel | Optional |
| `-m, --max_conn=<max_conn>` | Max station number | default: 2 |

**Example:** `ap_set MyAP 12345678 -a wpa2 -n 6 -m 4`  
Create a WPA2 WiFi AP named "MyAP" on channel 6 with maximum 4 client connections.


**2. `ap_query`**

Display current AP configuration and disconnect station mode connection.

**Example:** `ap_query`


**3. `wifi <action> [--espnow_enc=<int>] [--storage=<str>]`**

WiFi operation actions.

| Item | Description | Data |
|------|-------------|------|
| `<action>` | WiFi operation action | init / deinit / start / stop / restart / status |
| `--espnow_enc=<int>` | ESP-NOW encryption | only for init / restart |
| `--storage=<str>` | WiFi storage type | flash / ram |

**Example:** `wifi init --storage=flash`  
Initialize WiFi subsystem and store configuration in flash memory.


**4. `wifi_count [<action>]`**

WiFi count statistics.

| Item | Description | Data |
|------|-------------|------|
| `<action>` | Counter operation| query(default) / clear |

**Example:** `wifi_count clear` : Clear current WiFi count statistics.


**5. `wifi_mode <mode>`**

Set WiFi mode.

| Item | Description | Data |
|------|-------------|------|
| `<mode>` | WiFi mode | ap / sta / apsta |
 
**Example:** `wifi_mode apsta` : Enable simultaneous AP and Station mode.


**6. `wifi_protocol [<protocol>] [--2g=<2g_proto>] [--5g=<5g_proto>] [-i <interface>]`**

Configure the WiFi protocol supported by the selected interface (AP or STA).

**Two configuration methods are available**:
- `<protocol>`: Configure WiFi protocol using `esp_wifi_set_protocol()`
- `--2g / --5g`: Configure protocols separately for the 2.4 GHz and 5 GHz bands using `esp_wifi_set_protocols()`

**Note**:
- `esp_wifi_set_protocol()` and `esp_wifi_set_protocols()` cannot be used simultaneously.
- If no parameters are provided, the current WiFi protocol configuration will be displayed.


| Item | Description | Data |
|------|-------------|------|
| `<protocol>` | Configure WiFi protocol using esp_wifi_set_protocol() | Example: b, b/g, b/g/n <br />g/n is invalid. |
| `--2g=<2g_proto>` | Configure 2.4 GHz protocol using esp_wifi_set_protocols() | API: esp_wifi_set_protocols. <br />Protocol string: 'lr', 'b', 'g', 'n', 'ax'<br />Combine with lr mode: 'lr/b', 'lr/g', etc.<br />Protocol bitmap value: raw bitmap value with hex, eg: 0x40
 |
| `--5g=<5g_proto>` | Configure 5 GHz protocol | Same format as --2g |
| `-i, --interface=<interface>` | Select WiFi interface | ap, sta, default: sta |

**Example:** `wifi_protocol --2g=lr/b/g/n -i sta`  
Configure the STA interface to support LR, 802.11b, 802.11g, and 802.11n protocols on the 2.4 GHz band.


**7. `wifi_bandwidth [<cbw>] [--2g=<2g_cbw>] [--5g=<5g_cbw>] [-i <interface>]`**

Configure WiFi bandwidth.

**Two configuration methods are available**:
- `<cbw>`: Configure bandwidth using `esp_wifi_set_bandwidth()`
- `--2g / --5g`: Configure bandwidth separately for 2.4 GHz and 5 GHz bands using `esp_wifi_set_bandwidths()`

**Note**:
- `esp_wifi_set_bandwidth()` and `esp_wifi_set_bandwidths()` cannot be used simultaneously.
- If no parameters are provided, the current WiFi bandwidth configuration will be displayed.

| Item | Description | Data |
|------|-------------|------|
| `<cbw>` | Bandwidth using esp_wifi_set_bandwidth() | 20, 40 |
| `--2g=<2g_cbw>` | 2.4 GHz bandwidth using esp_wifi_set_bandwidths() | 20, 40 |
| `--5g=<5g_cbw>` | 5 GHz bandwidth using esp_wifi_set_bandwidths() | 20, 40 |
| `-i, --interface=<interface>` | Select WiFi interface | ap, sta, default: sta |

**Example:** `wifi_bandwidth --2g=20 -i sta`  
Configure the 2.4 GHz band to use a 20 MHz channel bandwidth.


**8. `wifi_ps <type>`**

Set WiFi power mode. This command configures the WiFi Power Save mode of the device. Different modes balance power consumption and network performance differently.

| Type | Mode | Latency | Description |
|------|------|---------|-------------|
| 0 | WIFI_PS_NONE | Lowest | No power saving, full performance |
| 1 | WIFI_PS_MIN_MODEM | Medium | Balanced power saving and performance |
| 2 | WIFI_PS_MAX_MODEM | Highest | Maximum power saving, higher delay |

**Example:** `wifi_ps 1` : Set WiFi power save mode to minimum modem power saving.


**9. `wifi_country [<code>] [-s <int>] [-n <int>] [-p <str>]`**

Set or get WiFi country configuration. This command configures the WiFi regulatory domain, including allowed channels and transmit rules based on country regulations.

| Item | Description | Data |
|------|-------------|------|
| `<code>` | Country code setting (or query current country if not provided) | CN / US / JP / etc. |
| `-s, --schan=<int>` | Start WiFi channel number | Integer (e.g. 1) |
| `-n, --nchan=<int>` | Total number of supported channels | Integer (e.g. 13) |
| `-p, --policy=<str>` | Country policy mode | auto (default) / manual |

**Example:** `wifi_country CN -s 1 -n 13 -p auto`  
Set WiFi country to CN, enable channels 1-13, and use automatic regulatory policy.


**10. `sta_connect <ssid> [<pass>] [-b <bssid>] [-n <channel>] [-no-disconnect] [-no-reconnect] [-full-scan] [-failure_retry=<int>] [-5g-offset=<rssi_5g_offset>]`**

Connect the device in STA mode to a specified WiFi access point.
| Item | Description | Data |
| :--- | :--- | :--- |
| `<ssid>` | SSID of WiFi AP | String (WiFi name) |
| `<pass>` | Password of AP | String (WiFi password) |
| `-b, --bssid=<bssid>` | Specific AP MAC address | MAC address (xx:xx:xx:xx:xx:xx) |
| `-n, --channel=<channel>` | AP WiFi channel | Integer |
| `--no-disconnect` | For test: do not run `esp_wifi_disconnect` before connect | / |
| `--no-reconnect` | Disable auto-reconnect in wifi disconnect handler | / |
| `--full-scan` | Enable full channel scan during sta connection | / |
| `--failure_retry=<int>` | Number of retry attempts after connection failure | Integer |
| `--5g-offset=<rssi_5g_offset>` | Offset value for 5g ssid when do full scan connect | Integer |

**Example:** `sta_connect MyWiFi 12345678 -n 6 --failure_retry=3 --full-scan` : 
Connect STA mode to specified WiFi AP with optional scan, retry, and connection behavior control.


**11. `sta_disconnect`**

Disconnect the device from the current WiFi AP or stop reconnect.

**Example:** `sta_disconnect`


**12. `sta_scan [-h] [<ssid>] [-b <bssid>] [-n <int>] [--max=<int>] [--min=<int>] [--passive] [--passive-time=<int>] [--dwell=<int>] [-2 <int/hex>] [-5 <int/hex>] [--count-only]`**

Scan available WiFi access points in station mode.

| Item | Description | Data |
| :--- | :--- | :--- |
| `<ssid>` | SSID of WiFi AP | String (WiFi name) |
| `-b, --bssid=<bssid>` | BSSID of AP | MAC address (xx:xx:xx:xx:xx:xx) |
| `-n, --channel=<int>` | Channel of AP | Integer |
| `-h, --show-hidden` | Show hidden APs | / |
| `--max=<int>` | Maximum active scan time | Integer (ms) |
| `--min=<int>` | Minimum active scan time | Integer (ms) |
| `--passive` | Set scan type to passive | / |
| `--passive-time` | Passive scan time | Integer (ms) |
| `--dwell=<int>` | Home channel dwell time | Integer (ms) |
| `-2, --bitmap-2g=<int/hex>` | 2.4GHz channel scan bitmap | Hex/int (e.g. 0x842 for ch1/6/11) |
| `-5, --bitmap-5g=<int/hex>` | 5GHz channel scan bitmap | Hex/int (e.g. 0x6 for ch36/40) |
| `--count-only` | For test: do scan ap count only. | / |

**Example:** `sta_scan -h --passive --passive-time=120 --dwell=30 -2 0x842 -5 0x6`  
Perform a full passive WiFi scan showing hidden APs, scanning selected 2.4GHz and 5GHz channels.


**13. `wifi_txpower [-u <unit>] [--reset]`**

Set WiFi transmit power or reset to default.

| Item | Description |
|------|-------------|
| `-u, --unit` | TX power value, each unit = 0.25 dBm (e.g. 8 = 2 dBm) |
| `--reset` | Reset TX power to default value from SDK configuration |

**Example:** `wifi_txpower -u 8` : Set WiFi transmit power to 2 dBm.


### Network Command

**1. `ping [-W <timeout>] [-i <interval>] [-s <size>] [-c <count>] [-Q <n>] [host] [--abort]`**

Send ICMP ECHO_REQUEST packets to a network host.

| Item | Description | Data |
| :--- | :--- | :--- |
| `-W, --timeout=<timeout>` | Time to wait for response | Integer (seconds) |
| `-i, --interval=<interval>` | Interval between sending packets | Float/Integer (seconds) |
| `-s, --packetsize=<size>` | Use `<size>` as number of data bytes to be sent | Integer (bytes) |
| `-c, --count=<count>` | Number of packets to send, stop after `<count>` replies | Integer, default: 5 |
| `-Q, --tos=<n>` | IP Type of Service field value | Integer |
| `host` | Target IP address or domain name | String |
| `--abort` | Stop running ping process | ping abort -> esp_ping_stop |


**Example:** `ping -c 4 8.8.8.8` : Send 4 ICMP echo requests to 8.8.8.8.


**2. `iperf [-suV] [-c <host>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>] [-f <format>] [--abort]`**

Measure network performance (throughput, bandwidth, and latency) using TCP or UDP.

| Item | Description | Data |
| :--- | :--- | :--- |
| `-c, --client` | Run in client mode and connect to server | IP/domain |
| `-s, --server` | Run in server mode | / |
| `-u, --udp` | Use UDP instead of TCP | / |
| `-V, --ipv6_domain` | Use IPv6 protocol | / |
| `-p, --port=<port>` | Server port number | Integer |
| `-l, --len=<length>` | Buffer length for transmission | Integer (bytes), Defaults: TCP=16384, IPv4 UDP=1470, IPv6 UDP=1450 |
| `-i, --interval=<interval>` | Seconds between periodic bandwidth reports | Float/Integer (seconds) |
| `-t, --time=<time>` | Test duration | Integer (seconds), default 10s |
| `-b, --bandwidth=<bandwidth>` | Target bandwidth | Mbits/sec |
| `-f, --format=<format>` | Output format | String, k = Kbits/sec, m = Mbits/sec |
| `--abort` | Stop running iperf test | / |

**Example:** `iperf -c 192.168.1.10 -t 10 -i 1`: 
Run a TCP bandwidth test for 10 seconds against server 192.168.1.10, reporting results every 1 second.


### BLE Command

**1. `ble [-a <0|1>]`**

Control BLE advertising state for Bluetooth testing and discovery.

| Item | Description | Data |
| :--- | :--- | :--- |
| `-a, --adv=<0\|1>` | BLE advertising control | 0: Advertising Stop, 1: Advertising Begin, default: 0 |

**Example:** `ble -a 1` : Start BLE advertising mode for device discovery.


### Power Mode Command

**1. `sleep [-m <0|1|2>]`**

Configure device sleep mode for low power testing.

| Item | Description | Data |
| :--- | :--- | :--- |
| `-m, --mode=<0\|1\|2>` | Configure device sleep mode for low power testing. | 0: standby, 1: light sleep, 2: deep sleep, default: 0 |

**Example:** `sleep -m 2` : Switch device into deep sleep mode.


## Tech Support & Product Discussion

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>